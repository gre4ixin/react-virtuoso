import { describe, expect, it, vi } from 'vitest'

import { listSystem } from '../src/listSystem'
import { init, publish, subscribe } from '../src/urx'

describe('computePrependedHeight', () => {
  it('uses the consumer-provided function for scroll compensation on prepend', () => {
    const { computePrependedHeight, defaultItemHeight, deviation, firstItemIndex, propsReady, scrollTop, totalCount, viewportHeight } =
      init(listSystem)

    publish(defaultItemHeight, 30)
    publish(firstItemIndex, 4000)
    publish(totalCount, 100)
    publish(viewportHeight, 200)
    publish(scrollTop, 0)
    publish(propsReady, true)

    const computer = vi.fn((count: number) => count * 137)
    publish(computePrependedHeight, computer)

    const deviationSub = vi.fn()
    subscribe(deviation, deviationSub)

    publish(totalCount, 103)
    publish(firstItemIndex, 4000 - 3)

    // The computer is invoked twice per prepend: once in the scroll-compensation
    // reaction (upwardScrollFixSystem) and once in the size-tree initialisation
    // (sizeSystem) so the newly prepended rows enter the tree at the same per-row
    // height the compensation assumed. Keeping the two in sync prevents a
    // secondary deviation correction when ResizeObserver measures real heights.
    expect(computer).toHaveBeenCalledTimes(2)
    expect(computer).toHaveBeenNthCalledWith(1, 3)
    expect(computer).toHaveBeenNthCalledWith(2, 3)
    expect(deviationSub).toHaveBeenCalledWith(3 * 137)
  })

  it('falls back to defaultItemHeight * count when computePrependedHeight is not provided', () => {
    const { defaultItemHeight, deviation, firstItemIndex, propsReady, scrollTop, totalCount, viewportHeight } = init(listSystem)

    publish(defaultItemHeight, 30)
    publish(firstItemIndex, 4000)
    publish(totalCount, 100)
    publish(viewportHeight, 200)
    publish(scrollTop, 0)
    publish(propsReady, true)

    const deviationSub = vi.fn()
    subscribe(deviation, deviationSub)

    publish(totalCount, 103)
    publish(firstItemIndex, 4000 - 3)

    expect(deviationSub).toHaveBeenCalledWith(3 * 30)
  })

  it('ignores the consumer function in grouped mode and preserves the heuristic', () => {
    const { computePrependedHeight, deviation, firstItemIndex, groupCounts, propsReady, scrollTop, sizeRanges, viewportHeight } =
      init(listSystem)

    publish(scrollTop, 0)
    publish(viewportHeight, 200)
    publish(groupCounts, [3, 3])
    publish(firstItemIndex, 4000)
    publish(sizeRanges, [
      { endIndex: 0, size: 30, startIndex: 0 },
      { endIndex: 1, size: 20, startIndex: 1 },
    ])
    publish(propsReady, true)

    const computer = vi.fn((count: number) => count * 9999)
    publish(computePrependedHeight, computer)

    const deviationSub = vi.fn()
    subscribe(deviation, deviationSub)

    publish(groupCounts, [3, 5, 3])
    publish(firstItemIndex, 4000 - 5)

    expect(computer).not.toHaveBeenCalled()
    // heuristic still publishes SOME deviation; the important assertion is that
    // the consumer's extreme value was not routed through.
    const values = deviationSub.mock.calls.map((c) => c[0] as number)
    expect(values.every((v) => v !== 5 * 9999)).toBe(true)
  })
})
