import { find } from './AATree'
import { domIOSystem } from './domIOSystem'
import { listStateSystem } from './listStateSystem'
import { loggerSystem, LogLevel } from './loggerSystem'
import { recalcSystem } from './recalcSystem'
import { sizeSystem } from './sizeSystem'
import { stateFlagsSystem, UP } from './stateFlagsSystem'
import * as u from './urx'
import { simpleMemoize } from './utils/simpleMemoize'

import type { ListItem } from './interfaces'

const isMobileSafari = simpleMemoize(() => {
  return /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent)
})

type UpwardFixState = [number, ListItem<any>[], number, number]

/**
 * Grace window during which `deviationOffset` is suppressed after a
 * consumer-computed prepend. The primary prepend scroll has already been
 * applied via the consumer's `computePrependedHeight`; any `totalHeight`
 * delta observed in the next few frames is ResizeObserver catching up on
 * the newly inserted rows. Before this suppression, that delta would
 * trigger a secondary `scrollBy`, producing a visible 50-200px jump.
 *
 * Only active when the consumer actually used the prop — upstream users
 * (no computer) are unaffected.
 */
const UNSHIFT_GRACE_MS = 220

/**
 * Fixes upward scrolling by calculating and compensation from changed item heights, using scrollBy.
 */
export const upwardScrollFixSystem = u.system(
  ([
    { deviation, scrollBy, scrollingInProgress, scrollTop },
    { isAtBottom, isScrolling, lastJumpDueToItemResize, scrollDirection },
    { listState },
    { beforeUnshiftWith, computePrependedHeight, gap, shiftWithOffset, sizes },
    { log },
    { recalcInProgress },
  ]) => {
    // Timestamp of the most recent consumer-driven prepend. Read by the
    // deviationOffset filter below to skip the secondary compensation for a
    // short grace window. Zero when the consumer hasn't been used, which
    // keeps the filter fully transparent for upstream users.
    let lastConsumerUnshiftAt = 0

    const deviationOffset = u.streamFromEmitter(
      u.pipe(
        listState,
        u.withLatestFrom(lastJumpDueToItemResize),
        u.scan(
          ([, prevItems, prevTotalCount, prevTotalHeight], [{ bottom, items, offsetBottom, totalCount }, lastJumpDueToItemResize]) => {
            const totalHeight = bottom + offsetBottom

            let newDev = 0
            if (prevTotalCount === totalCount) {
              if (prevItems.length > 0 && items.length > 0) {
                const atStart = items[0]!.originalIndex === 0 && prevItems[0]!.originalIndex === 0
                if (!atStart) {
                  newDev = totalHeight - prevTotalHeight
                  if (newDev !== 0) {
                    newDev += lastJumpDueToItemResize
                  }
                }
              }
            }

            return [newDev, items, totalCount, totalHeight] as UpwardFixState
          },
          [0, [], 0, 0] as UpwardFixState
        ),
        u.filter(([amount]) => amount !== 0),
        u.withLatestFrom(scrollTop, scrollDirection, scrollingInProgress, isAtBottom, log, recalcInProgress),
        u.filter(([, scrollTop, scrollDirection, scrollingInProgress, , , recalcInProgress]) => {
          // Suppress the secondary compensation within the grace window after a
          // consumer-driven prepend — its scroll delta has already been applied
          // via `computePrependedHeight`, and the ResizeObserver-driven size
          // delta we would otherwise chase is exactly the residual estimation
          // error the consumer accepts. See comment on UNSHIFT_GRACE_MS.
          if (lastConsumerUnshiftAt !== 0 && Date.now() - lastConsumerUnshiftAt < UNSHIFT_GRACE_MS) {
            return false
          }
          return !recalcInProgress && !scrollingInProgress && scrollTop !== 0 && scrollDirection === UP
        }),
        u.map(([[amount], , , , , log]) => {
          log('Upward scrolling compensation', { amount }, LogLevel.DEBUG)
          return amount
        })
      )
    )

    function scrollByWith(offset: number) {
      if (offset > 0) {
        u.publish(scrollBy, { behavior: 'auto', top: -offset })
        u.publish(deviation, 0)
      } else {
        u.publish(deviation, 0)
        u.publish(scrollBy, { behavior: 'auto', top: -offset })
      }
    }

    u.subscribe(u.pipe(deviationOffset, u.withLatestFrom(deviation, isScrolling)), ([offset, deviationAmount, isScrolling]) => {
      if (isScrolling && isMobileSafari()) {
        u.publish(deviation, deviationAmount - offset)
      } else {
        scrollByWith(-offset)
      }
    })

    // this hack is only necessary for mobile safari which does not support scrollBy while scrolling is in progress.
    // when the browser stops scrolling, restore the position and reset the glitching
    u.subscribe(
      u.pipe(
        u.combineLatest(u.statefulStreamFromEmitter(isScrolling, false), deviation, recalcInProgress),
        u.filter(([is, deviation, recalc]) => !is && !recalc && deviation !== 0),
        u.map(([_, deviation]) => deviation),
        u.throttleTime(1)
      ),
      scrollByWith
    )

    u.connect(
      u.pipe(
        shiftWithOffset,
        u.map((offset) => {
          return { top: -offset }
        })
      ),
      scrollBy
    )

    u.subscribe(
      u.pipe(
        beforeUnshiftWith,
        u.withLatestFrom(sizes, gap, computePrependedHeight),
        u.map(([offset, { groupIndices, lastSize: defaultItemSize, sizeTree }, gap, computer]) => {
          function getItemOffset(itemCount: number) {
            return itemCount * (defaultItemSize + gap)
          }
          // Consumer-provided exact height computation takes precedence in non-grouped mode.
          // Grouped mode still uses the heuristic because the offset mixes items and group headers.
          if (computer && groupIndices.length === 0) {
            // Arm the grace window that suppresses ResizeObserver-driven
            // deviationOffset corrections for the next few frames — the
            // consumer has already committed to a scroll delta and we don't
            // want a late measurement pulling the viewport around.
            lastConsumerUnshiftAt = Date.now()
            return computer(offset)
          }
          if (groupIndices.length === 0) {
            return getItemOffset(offset)
          }

          let amount = 0
          const defaultGroupSize = find(sizeTree, 0)!

          let recognizedOffsetItems = 0
          let groupIndex = 0
          while (recognizedOffsetItems < offset) {
            // increase once for the group itself
            recognizedOffsetItems++
            amount += defaultGroupSize

            let groupItemCount =
              groupIndices.length === groupIndex + 1 ? Infinity : groupIndices[groupIndex + 1]! - groupIndices[groupIndex]! - 1

            // if the group is larger than the offset, we have an expanded group. remove the group size, and replace with 1 item.
            if (recognizedOffsetItems + groupItemCount > offset) {
              amount -= defaultGroupSize
              groupItemCount = offset - recognizedOffsetItems + 1
            }

            recognizedOffsetItems += groupItemCount
            amount += getItemOffset(groupItemCount)
            groupIndex++
          }

          return amount
        })
      ),
      (offset) => {
        u.publish(deviation, offset)
        requestAnimationFrame(() => {
          u.publish(scrollBy, { top: offset })
          requestAnimationFrame(() => {
            u.publish(deviation, 0)
            u.publish(recalcInProgress, false)
          })
        })
      }
    )

    return { deviation }
  },
  u.tup(domIOSystem, stateFlagsSystem, listStateSystem, sizeSystem, loggerSystem, recalcSystem)
)
