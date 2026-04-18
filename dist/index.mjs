import { jsx as M, jsxs as Dt } from "react/jsx-runtime";
import B, { createElement as Nt } from "react";
import ao from "react-dom";
const we = 0, Gt = 1, Zt = 2, kn = 4;
function un(t) {
  return () => t;
}
function fo(t) {
  t();
}
function re(t, e) {
  return (n) => t(e(n));
}
function an(t, e) {
  return () => t(e);
}
function mo(t, e) {
  return (n) => t(e, n);
}
function Me(t) {
  return t !== void 0;
}
function po(...t) {
  return () => {
    t.map(fo);
  };
}
function Xt() {
}
function ye(t, e) {
  return e(t), t;
}
function ho(t, e) {
  return e(t);
}
function rt(...t) {
  return t;
}
function J(t, e) {
  return t(Gt, e);
}
function W(t, e) {
  t(we, e);
}
function We(t) {
  t(Zt);
}
function lt(t) {
  return t(kn);
}
function L(t, e) {
  return J(t, mo(e, we));
}
function yt(t, e) {
  const n = t(Gt, (o) => {
    n(), e(o);
  });
  return n;
}
function dn(t) {
  let e, n;
  return (o) => (r) => {
    e = r, n && clearTimeout(n), n = setTimeout(() => {
      o(e);
    }, t);
  };
}
function zn(t, e) {
  return t === e;
}
function nt(t = zn) {
  let e;
  return (n) => (o) => {
    t(e, o) || (e = o, n(o));
  };
}
function G(t) {
  return (e) => (n) => {
    t(n) && e(n);
  };
}
function O(t) {
  return (e) => re(e, t);
}
function Ot(t) {
  return (e) => () => {
    e(t);
  };
}
function I(t, ...e) {
  const n = go(...e);
  return ((o, r) => {
    switch (o) {
      case Zt:
        We(t);
        return;
      case Gt:
        return J(t, n(r));
    }
  });
}
function kt(t, e) {
  return (n) => (o) => {
    n(e = t(e, o));
  };
}
function $t(t) {
  return (e) => (n) => {
    t > 0 ? t-- : e(n);
  };
}
function Ft(t) {
  let e = null, n;
  return (o) => (r) => {
    e = r, !n && (n = setTimeout(() => {
      n = void 0, o(e);
    }, t));
  };
}
function K(...t) {
  const e = new Array(t.length);
  let n = 0, o = null;
  const r = 2 ** t.length - 1;
  return t.forEach((s, i) => {
    const l = 2 ** i;
    J(s, (c) => {
      const d = n;
      n |= l, e[i] = c, d !== r && n === r && o && (o(), o = null);
    });
  }), (s) => (i) => {
    const l = () => {
      s([i].concat(e));
    };
    n === r ? l() : o = l;
  };
}
function go(...t) {
  return (e) => t.reduceRight(ho, e);
}
function Io(t) {
  let e, n;
  const o = () => e?.();
  return function(r, s) {
    switch (r) {
      case Gt:
        return s ? n === s ? void 0 : (o(), n = s, e = J(t, s), e) : (o(), Xt);
      case Zt:
        o(), n = null;
        return;
    }
  };
}
function T(t) {
  let e = t;
  const n = q();
  return ((o, r) => {
    switch (o) {
      case we:
        e = r;
        break;
      case Gt: {
        r(e);
        break;
      }
      case kn:
        return e;
    }
    return n(o, r);
  });
}
function It(t, e) {
  return ye(T(e), (n) => L(t, n));
}
function q() {
  const t = [];
  return ((e, n) => {
    switch (e) {
      case we:
        t.slice().forEach((o) => {
          o(n);
        });
        return;
      case Zt:
        t.splice(0, t.length);
        return;
      case Gt:
        return t.push(n), () => {
          const o = t.indexOf(n);
          o > -1 && t.splice(o, 1);
        };
    }
  });
}
function vt(t) {
  return ye(q(), (e) => L(t, e));
}
function Z(t, e = [], { singleton: n } = { singleton: !0 }) {
  return {
    constructor: t,
    dependencies: e,
    id: xo(),
    singleton: n
  };
}
const xo = () => Symbol();
function So(t) {
  const e = /* @__PURE__ */ new Map(), n = ({ constructor: o, dependencies: r, id: s, singleton: i }) => {
    if (i && e.has(s))
      return e.get(s);
    const l = o(r.map((c) => n(c)));
    return i && e.set(s, l), l;
  };
  return n(t);
}
function dt(...t) {
  const e = q(), n = new Array(t.length);
  let o = 0;
  const r = 2 ** t.length - 1;
  return t.forEach((s, i) => {
    const l = 2 ** i;
    J(s, (c) => {
      n[i] = c, o |= l, o === r && W(e, n);
    });
  }), function(s, i) {
    switch (s) {
      case Zt: {
        We(e);
        return;
      }
      case Gt:
        return o === r && i(n), J(e, i);
    }
  };
}
function A(t, e = zn) {
  return I(t, nt(e));
}
function Le(...t) {
  return function(e, n) {
    switch (e) {
      case Zt:
        return;
      case Gt:
        return po(...t.map((o) => J(o, n)));
    }
  };
}
const ht = {
  /** Detailed debugging information including item measurements */
  DEBUG: 0,
  /** General informational messages */
  INFO: 1,
  /** Warning messages for potential issues */
  WARN: 2,
  /** Error messages for failures (default level) */
  ERROR: 3
}, To = {
  [ht.DEBUG]: "debug",
  [ht.ERROR]: "error",
  [ht.INFO]: "log",
  [ht.WARN]: "warn"
}, vo = () => typeof globalThis > "u" ? window : globalThis, Mt = Z(
  () => {
    const t = T(ht.ERROR);
    return {
      log: T((n, o, r = ht.INFO) => {
        const s = vo().VIRTUOSO_LOG_LEVEL ?? lt(t);
        r >= s && console[To[r]](
          "%creact-virtuoso: %c%s %o",
          "color: #0253b3; font-weight: bold",
          "color: initial",
          n,
          o
        );
      }),
      logLevel: t
    };
  },
  [],
  { singleton: !0 }
);
function zt(t, e, n) {
  return _e(t, e, n).callbackRef;
}
function _e(t, e, n) {
  const o = B.useRef(null);
  let r = (i) => {
  };
  const s = B.useMemo(() => typeof ResizeObserver < "u" ? new ResizeObserver((i) => {
    const l = () => {
      const c = i[0].target;
      c.offsetParent !== null && t(c);
    };
    n ? l() : requestAnimationFrame(l);
  }) : null, [t, n]);
  return r = (i) => {
    i && e ? (s?.observe(i), o.current = i) : (o.current && s?.unobserve(o.current), o.current = null);
  }, { callbackRef: r, ref: o };
}
function Ln(t, e, n, o, r, s, i, l, c) {
  const d = B.useCallback(
    (m) => {
      const x = Co(m.children, e, l ? "offsetWidth" : "offsetHeight", r);
      let p = m.parentElement;
      for (; p.dataset.virtuosoScroller === void 0; )
        p = p.parentElement;
      const S = p.lastElementChild.dataset.viewportType === "window";
      let y;
      S && (y = p.ownerDocument.defaultView);
      const H = i ? l ? i.scrollLeft : i.scrollTop : S ? l ? y.scrollX || y.document.documentElement.scrollLeft : y.scrollY || y.document.documentElement.scrollTop : l ? p.scrollLeft : p.scrollTop, g = i ? l ? i.scrollWidth : i.scrollHeight : S ? l ? y.document.documentElement.scrollWidth : y.document.documentElement.scrollHeight : l ? p.scrollWidth : p.scrollHeight, v = i ? l ? i.offsetWidth : i.offsetHeight : S ? l ? y.innerWidth : y.innerHeight : l ? p.offsetWidth : p.offsetHeight;
      o({
        scrollHeight: g,
        scrollTop: Math.max(H, 0),
        viewportHeight: v
      }), s?.(
        l ? fn("column-gap", getComputedStyle(m).columnGap, r) : fn("row-gap", getComputedStyle(m).rowGap, r)
      ), x !== null && t(x);
    },
    [t, e, r, s, i, o, l]
  );
  return _e(d, n, c);
}
function Co(t, e, n, o) {
  const r = t.length;
  if (r === 0)
    return null;
  const s = [];
  for (let i = 0; i < r; i++) {
    const l = t.item(i);
    if (l.dataset.index === void 0)
      continue;
    const c = parseInt(l.dataset.index), d = parseFloat(l.dataset.knownSize), m = e(l, n);
    if (m === 0 && o("Zero-sized element, this should not happen", { child: l }, ht.ERROR), m === d)
      continue;
    const x = s[s.length - 1];
    s.length === 0 || x.size !== m || x.endIndex !== c - 1 ? s.push({ endIndex: c, size: m, startIndex: c }) : s[s.length - 1].endIndex++;
  }
  return s;
}
function fn(t, e, n) {
  return e !== "normal" && e?.endsWith("px") !== !0 && n(`${t} was not resolved to pixel value correctly`, e, ht.WARN), e === "normal" ? 0 : parseInt(e ?? "0", 10);
}
function Ne(t, e, n) {
  const o = B.useRef(null), r = B.useCallback(
    (c) => {
      if (!c?.offsetParent)
        return;
      const d = c.getBoundingClientRect(), m = d.width;
      let x, p;
      if (e) {
        const S = e.getBoundingClientRect(), y = d.top - S.top;
        p = S.height - Math.max(0, y), x = y + e.scrollTop;
      } else {
        const S = i.current.ownerDocument.defaultView;
        p = S.innerHeight - Math.max(0, d.top), x = d.top + S.scrollY;
      }
      o.current = {
        listHeight: d.height,
        offsetTop: x,
        visibleHeight: p,
        visibleWidth: m
      }, t(o.current);
    },
    // oxlint-disable-next-line exhaustive-deps
    [t, e]
  ), { callbackRef: s, ref: i } = _e(r, !0, n), l = B.useCallback(() => {
    r(i.current);
  }, [r, i]);
  return B.useEffect(() => {
    if (e) {
      e.addEventListener("scroll", l);
      const d = new ResizeObserver(() => {
        requestAnimationFrame(l);
      });
      return d.observe(e), () => {
        e.removeEventListener("scroll", l), d.unobserve(e);
      };
    }
    const c = i.current?.ownerDocument.defaultView;
    return c?.addEventListener("scroll", l), c?.addEventListener("resize", l), () => {
      c?.removeEventListener("scroll", l), c?.removeEventListener("resize", l);
    };
  }, [l, e, i]), s;
}
const xt = Z(
  () => {
    const t = q(), e = q(), n = T(0), o = q(), r = T(0), s = q(), i = q(), l = T(0), c = T(0), d = T(0), m = T(0), x = q(), p = q(), S = T(!1), y = T(!1), H = T(!1);
    return L(
      I(
        t,
        O(({ scrollTop: g }) => g)
      ),
      e
    ), L(
      I(
        t,
        O(({ scrollHeight: g }) => g)
      ),
      i
    ), L(e, r), {
      deviation: n,
      fixedFooterHeight: d,
      fixedHeaderHeight: c,
      footerHeight: m,
      headerHeight: l,
      horizontalDirection: y,
      scrollBy: p,
      // input
      scrollContainerState: t,
      scrollHeight: i,
      scrollingInProgress: S,
      // signals
      scrollTo: x,
      scrollTop: e,
      skipAnimationFrameInResizeObserver: H,
      smoothScrollTargetReached: o,
      // state
      statefulScrollTop: r,
      viewportHeight: s
    };
  },
  [],
  { singleton: !0 }
), se = { lvl: 0 };
function Fn(t, e) {
  const n = t.length;
  if (n === 0)
    return [];
  let { index: o, value: r } = e(t[0]);
  const s = [];
  for (let i = 1; i < n; i++) {
    const { index: l, value: c } = e(t[i]);
    s.push({ end: l - 1, start: o, value: r }), o = l, r = c;
  }
  return s.push({ end: 1 / 0, start: o, value: r }), s;
}
function tt(t) {
  return t === se;
}
function ie(t, e) {
  if (!tt(t))
    return e === t.k ? t.v : e < t.k ? ie(t.l, e) : ie(t.r, e);
}
function Rt(t, e, n = "k") {
  if (tt(t))
    return [-1 / 0, void 0];
  if (Number(t[n]) === e)
    return [t.k, t.v];
  if (Number(t[n]) < e) {
    const o = Rt(t.r, e, n);
    return o[0] === -1 / 0 ? [t.k, t.v] : o;
  }
  return Rt(t.l, e, n);
}
function Tt(t, e, n) {
  return tt(t) ? An(e, n, 1) : e === t.k ? pt(t, { k: e, v: n }) : e < t.k ? mn(pt(t, { l: Tt(t.l, e, n) })) : mn(pt(t, { r: Tt(t.r, e, n) }));
}
function qt() {
  return se;
}
function Yt(t, e, n) {
  if (tt(t))
    return [];
  const o = Rt(t, e)[0];
  return wo(Ve(t, o, n));
}
function Fe(t, e) {
  if (tt(t))
    return se;
  const { k: n, l: o, r } = t;
  if (e === n) {
    if (tt(o))
      return r;
    if (tt(r))
      return o;
    const [s, i] = Pn(o);
    return Se(pt(t, { k: s, l: Vn(o), v: i }));
  }
  return e < n ? Se(pt(t, { l: Fe(o, e) })) : Se(pt(t, { r: Fe(r, e) }));
}
function At(t) {
  return tt(t) ? [] : [...At(t.l), { k: t.k, v: t.v }, ...At(t.r)];
}
function Ve(t, e, n) {
  if (tt(t))
    return [];
  const { k: o, l: r, r: s, v: i } = t;
  let l = [];
  return o > e && (l = l.concat(Ve(r, e, n))), o >= e && o <= n && l.push({ k: o, v: i }), o <= n && (l = l.concat(Ve(s, e, n))), l;
}
function Se(t) {
  const { l: e, lvl: n, r: o } = t;
  if (o.lvl >= n - 1 && e.lvl >= n - 1)
    return t;
  if (n > o.lvl + 1) {
    if (Ee(e))
      return Gn(pt(t, { lvl: n - 1 }));
    if (!tt(e) && !tt(e.r))
      return pt(e.r, {
        l: pt(e, { r: e.r.l }),
        lvl: n,
        r: pt(t, {
          l: e.r.r,
          lvl: n - 1
        })
      });
    throw new Error("Unexpected empty nodes");
  }
  if (Ee(t))
    return Pe(pt(t, { lvl: n - 1 }));
  if (!tt(o) && !tt(o.l)) {
    const r = o.l, s = Ee(r) ? o.lvl - 1 : o.lvl;
    return pt(r, {
      l: pt(t, {
        lvl: n - 1,
        r: r.l
      }),
      lvl: r.lvl + 1,
      r: Pe(pt(o, { l: r.r, lvl: s }))
    });
  }
  throw new Error("Unexpected empty nodes");
}
function pt(t, e) {
  return An(
    e.k !== void 0 ? e.k : t.k,
    e.v !== void 0 ? e.v : t.v,
    e.lvl !== void 0 ? e.lvl : t.lvl,
    e.l !== void 0 ? e.l : t.l,
    e.r !== void 0 ? e.r : t.r
  );
}
function Vn(t) {
  return tt(t.r) ? t.l : Se(pt(t, { r: Vn(t.r) }));
}
function Ee(t) {
  return tt(t) || t.lvl > t.r.lvl;
}
function Pn(t) {
  return tt(t.r) ? [t.k, t.v] : Pn(t.r);
}
function An(t, e, n, o = se, r = se) {
  return { k: t, l: o, lvl: n, r, v: e };
}
function mn(t) {
  return Pe(Gn(t));
}
function Gn(t) {
  const { l: e } = t;
  return !tt(e) && e.lvl === t.lvl ? pt(e, { r: pt(t, { l: e.r }) }) : t;
}
function Pe(t) {
  const { lvl: e, r: n } = t;
  return !tt(n) && !tt(n.r) && n.lvl === e && n.r.lvl === e ? pt(n, { l: pt(t, { r: n.l }), lvl: e + 1 }) : t;
}
function wo(t) {
  return Fn(t, ({ k: e, v: n }) => ({ index: e, value: n }));
}
function Mn(t, e) {
  return !!(t && t.startIndex === e.startIndex && t.endIndex === e.endIndex);
}
function le(t, e) {
  return !!(t && t[0] === e[0] && t[1] === e[1]);
}
const De = Z(
  () => ({ recalcInProgress: T(!1) }),
  [],
  { singleton: !0 }
);
function Wn(t, e, n) {
  return t[ve(t, e, n)];
}
function ve(t, e, n, o = 0) {
  let r = t.length - 1;
  for (; o <= r; ) {
    const s = Math.floor((o + r) / 2), i = t[s], l = n(i, e);
    if (l === 0)
      return s;
    if (l === -1) {
      if (r - o < 2)
        return s - 1;
      r = s - 1;
    } else {
      if (r === o)
        return s;
      o = s + 1;
    }
  }
  throw new Error(`Failed binary finding record in array - ${t.join(",")}, searched for ${e}`);
}
function yo(t, e, n, o) {
  const r = ve(t, e, o), s = ve(t, n, o, r);
  return t.slice(r, s + 1);
}
function Ht(t, e) {
  return Math.round(t.getBoundingClientRect()[e]);
}
function be(t) {
  return !tt(t.groupOffsetTree);
}
function $e({ index: t }, e) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function bo() {
  return {
    groupIndices: [],
    groupOffsetTree: qt(),
    lastIndex: 0,
    lastOffset: 0,
    lastSize: 0,
    offsetTree: [],
    sizeTree: qt()
  };
}
function Ro(t, e) {
  let n = tt(t) ? 0 : 1 / 0;
  for (const o of e) {
    const { endIndex: r, size: s, startIndex: i } = o;
    if (n = Math.min(n, i), tt(t)) {
      t = Tt(t, 0, s);
      continue;
    }
    const l = Yt(t, i - 1, r + 1);
    if (l.some(Lo(o)))
      continue;
    let c = !1, d = !1;
    for (const { end: m, start: x, value: p } of l)
      c ? (r >= x || s === p) && (t = Fe(t, x)) : (d = p !== s, c = !0), m > r && r >= x && p !== s && (t = Tt(t, r + 1, p));
    d && (t = Tt(t, i, s));
  }
  return [t, n];
}
function Ho(t) {
  return typeof t.groupIndex < "u";
}
function Eo({ offset: t }, e) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function ce(t, e, n) {
  if (e.length === 0)
    return 0;
  const { index: o, offset: r, size: s } = Wn(e, t, $e), i = t - o, l = s * i + (i - 1) * n + r;
  return l > 0 ? l + n : l;
}
function _n(t, e) {
  if (!be(e))
    return t;
  let n = 0;
  for (; e.groupIndices[n] <= t + n; )
    n++;
  return t + n;
}
function Nn(t, e, n) {
  if (Ho(t))
    return e.groupIndices[t.groupIndex] + 1;
  const o = t.index === "LAST" ? n : t.index;
  let r = _n(o, e);
  return r = Math.max(0, r, Math.min(n, r)), r;
}
function Bo(t, e, n, o = 0) {
  return o > 0 && (e = Math.max(e, Wn(t, o, $e).offset)), Fn(yo(t, e, n, Eo), zo);
}
function Oo(t, [e, n, o, r]) {
  e.length > 0 && o("received item sizes", e, ht.DEBUG);
  const s = t.sizeTree;
  let i = s, l = 0;
  if (n.length > 0 && tt(s) && e.length === 2) {
    const p = e[0].size, S = e[1].size;
    i = n.reduce((y, H) => Tt(Tt(y, H, p), H + 1, S), i);
  } else
    [i, l] = Ro(i, e);
  if (i === s)
    return t;
  const { lastIndex: c, lastOffset: d, lastSize: m, offsetTree: x } = Ae(t.offsetTree, l, i, r);
  return {
    groupIndices: n,
    groupOffsetTree: n.reduce((p, S) => Tt(p, S, ce(S, x, r)), qt()),
    lastIndex: c,
    lastOffset: d,
    lastSize: m,
    offsetTree: x,
    sizeTree: i
  };
}
function ko(t) {
  return At(t).map(({ k: e, v: n }, o, r) => {
    const s = r[o + 1];
    return { endIndex: s !== void 0 ? s.k - 1 : 1 / 0, size: n, startIndex: e };
  });
}
function pn(t, e) {
  let n = 0, o = 0;
  for (; n < t; )
    n += e[o + 1] - e[o] - 1, o++;
  return o - (n === t ? 0 : 1);
}
function Ae(t, e, n, o) {
  let r = t, s = 0, i = 0, l = 0, c = 0;
  if (e !== 0) {
    c = ve(r, e - 1, $e), l = r[c].offset;
    const m = Rt(n, e - 1);
    s = m[0], i = m[1], r.length && r[c].size === Rt(n, e)[1] && (c -= 1), r = r.slice(0, c + 1);
  } else
    r = [];
  for (const { start: d, value: m } of Yt(n, e, 1 / 0)) {
    const x = d - s, p = x * i + l + x * o;
    r.push({
      index: d,
      offset: p,
      size: m
    }), s = d, l = p, i = m;
  }
  return {
    lastIndex: s,
    lastOffset: l,
    lastSize: i,
    offsetTree: r
  };
}
function zo(t) {
  return { index: t.index, value: t };
}
function Lo(t) {
  const { endIndex: e, size: n, startIndex: o } = t;
  return (r) => r.start === o && (r.end === e || r.end === 1 / 0) && r.value === n;
}
const Fo = {
  offsetHeight: "height",
  offsetWidth: "width"
}, Lt = Z(
  ([{ log: t }, { recalcInProgress: e }]) => {
    const n = q(), o = q(), r = It(o, 0), s = q(), i = q(), l = T(0), c = T([]), d = T(void 0), m = T(void 0), x = T(void 0), p = T(void 0), S = T((a, h) => Ht(a, Fo[h])), y = T(void 0), H = T(void 0), g = T(0), v = bo(), u = It(
      I(n, K(c, t, g), kt(Oo, v), nt()),
      v
    ), f = It(
      I(
        c,
        nt(),
        kt((a, h) => ({ current: h, prev: a.current }), {
          current: [],
          prev: []
        }),
        O(({ prev: a }) => a)
      ),
      []
    );
    L(
      I(
        c,
        G((a) => a.length > 0),
        K(u, g),
        O(([a, h, k]) => {
          const F = a.reduce((V, P, N) => Tt(V, P, ce(P, h.offsetTree, k) || N), qt());
          return {
            ...h,
            groupIndices: a,
            groupOffsetTree: F
          };
        })
      ),
      u
    ), L(
      I(
        o,
        K(u),
        G(([a, { lastIndex: h }]) => a < h),
        O(([a, { lastIndex: h, lastSize: k }]) => [
          {
            endIndex: h,
            size: k,
            startIndex: a
          }
        ])
      ),
      n
    ), L(d, m);
    const w = It(
      I(
        d,
        O((a) => a === void 0)
      ),
      !0
    );
    L(
      I(
        m,
        G((a) => a !== void 0 && tt(lt(u).sizeTree)),
        O((a) => {
          const h = lt(x), k = lt(c).length > 0;
          return h !== void 0 && h !== 0 ? k ? [
            { endIndex: 0, size: h, startIndex: 0 },
            { endIndex: 1, size: a, startIndex: 1 }
          ] : [] : [{ endIndex: 0, size: a, startIndex: 0 }];
        })
      ),
      n
    ), L(
      I(
        p,
        G((a) => a !== void 0 && a.length > 0 && tt(lt(u).sizeTree)),
        O((a) => {
          const h = [];
          let k = a[0], F = 0;
          for (let V = 1; V < a.length; V++) {
            const P = a[V];
            P !== k && (h.push({
              endIndex: V - 1,
              size: k,
              startIndex: F
            }), k = P, F = V);
          }
          return h.push({
            endIndex: a.length - 1,
            size: k,
            startIndex: F
          }), h;
        })
      ),
      n
    ), L(
      I(
        c,
        K(x, m),
        G(([, a, h]) => a !== void 0 && h !== void 0),
        O(([a, h, k]) => {
          const F = [];
          for (let V = 0; V < a.length; V++) {
            const P = a[V], N = a[V + 1];
            F.push({
              startIndex: P,
              endIndex: P,
              size: h
            }), N !== void 0 && F.push({
              startIndex: P + 1,
              endIndex: N - 1,
              size: k
            });
          }
          return F;
        })
      ),
      n
    );
    const C = vt(
      I(
        n,
        K(u),
        kt(
          ({ sizes: a }, [h, k]) => ({
            changed: k !== a,
            sizes: k
          }),
          { changed: !1, sizes: v }
        ),
        O((a) => a.changed)
      )
    );
    J(
      I(
        l,
        kt(
          (a, h) => ({ diff: a.prev - h, prev: h }),
          { diff: 0, prev: 0 }
        ),
        O((a) => a.diff)
      ),
      (a) => {
        const { groupIndices: h } = lt(u);
        if (a > 0)
          W(e, !0), W(s, a + pn(a, h));
        else if (a < 0) {
          const k = lt(f);
          k.length > 0 && (a -= pn(-a, k)), W(i, a);
        }
      }
    ), J(I(l, K(t)), ([a, h]) => {
      a < 0 && h(
        "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
        { firstItemIndex: l },
        ht.ERROR
      );
    });
    const z = vt(s);
    L(
      I(
        s,
        K(u, H),
        O(([a, h, k]) => {
          const F = h.groupIndices.length > 0, V = [];
          let P = null, N = h.lastSize;
          if (!F && k && a > 0) {
            const E = k(a);
            if (Array.isArray(E))
              if (E.length === a) {
                P = E;
                let D = 0;
                for (const j of E) D += j;
                N = D / a;
              } else {
                let D = 0;
                for (const j of E) D += j;
                N = D / a;
              }
            else
              N = E / a;
          }
          if (F) {
            const E = ie(h.sizeTree, 0);
            let D = 0, j = 0;
            for (; D < a; ) {
              const X = h.groupIndices[j], ct = h.groupIndices.length === j + 1 ? 1 / 0 : h.groupIndices[j + 1] - X - 1;
              V.push({
                endIndex: X,
                size: E,
                startIndex: X
              }), V.push({
                endIndex: X + 1 + ct - 1,
                size: N,
                startIndex: X + 1
              }), j++, D += ct + 1;
            }
            const ft = At(h.sizeTree);
            return D !== a && ft.shift(), ft.reduce(
              (X, { k: ct, v: Et }) => {
                let mt = X.ranges;
                return X.prevSize !== 0 && (mt = [
                  ...X.ranges,
                  {
                    endIndex: ct + a - 1,
                    size: X.prevSize,
                    startIndex: X.prevIndex
                  }
                ]), {
                  prevIndex: ct + a,
                  prevSize: Et,
                  ranges: mt
                };
              },
              {
                prevIndex: a,
                prevSize: 0,
                ranges: V
              }
            ).ranges;
          }
          if (P) {
            const E = [];
            for (let D = 0; D < P.length; D++)
              E.push({ startIndex: D, endIndex: D, size: P[D] });
            for (const { k: D, v: j } of At(h.sizeTree))
              E.push({ startIndex: D + a, endIndex: D + a, size: j });
            return E;
          }
          return At(h.sizeTree).reduce(
            (E, { k: D, v: j }) => ({
              prevIndex: D + a,
              prevSize: j,
              ranges: [...E.ranges, { endIndex: D + a - 1, size: E.prevSize, startIndex: E.prevIndex }]
            }),
            {
              prevIndex: 0,
              prevSize: N,
              ranges: []
            }
          ).ranges;
        })
      ),
      n
    );
    const b = vt(
      I(
        i,
        K(u, g),
        O(([a, { offsetTree: h }, k]) => {
          const F = -a;
          return ce(F, h, k);
        })
      )
    );
    return L(
      I(
        i,
        K(u, g),
        O(([a, h, k]) => {
          if (h.groupIndices.length > 0) {
            if (tt(h.sizeTree))
              return h;
            let P = qt();
            const N = lt(f);
            let E = 0, D = 0, j = 0;
            for (; E < -a; ) {
              j = N[D];
              const gt = N[D + 1] - j - 1;
              D++, E += gt + 1;
            }
            if (P = At(h.sizeTree).reduce((gt, { k: X, v: ct }) => Tt(gt, Math.max(0, X + a), ct), P), E !== -a) {
              const gt = ie(h.sizeTree, j);
              P = Tt(P, 0, gt);
              const X = Rt(h.sizeTree, -a + 1)[1];
              P = Tt(P, 1, X);
            }
            return {
              ...h,
              sizeTree: P,
              ...Ae(h.offsetTree, 0, P, k)
            };
          }
          const V = At(h.sizeTree).reduce((P, { k: N, v: E }) => Tt(P, Math.max(0, N + a), E), qt());
          return {
            ...h,
            sizeTree: V,
            ...Ae(h.offsetTree, 0, V, k)
          };
        })
      ),
      u
    ), {
      beforeUnshiftWith: z,
      computePrependedHeight: H,
      // input
      data: y,
      defaultItemSize: m,
      firstItemIndex: l,
      fixedItemSize: d,
      fixedGroupSize: x,
      gap: g,
      groupIndices: c,
      heightEstimates: p,
      itemSize: S,
      listRefresh: C,
      shiftWith: i,
      shiftWithOffset: b,
      sizeRanges: n,
      // output
      sizes: u,
      statefulTotalCount: r,
      totalCount: o,
      trackItemSizes: w,
      unshiftWith: s
    };
  },
  rt(Mt, De),
  { singleton: !0 }
);
function Vo(t) {
  return t.reduce(
    (e, n) => (e.groupIndices.push(e.totalCount), e.totalCount += n + 1, e),
    {
      groupIndices: [],
      totalCount: 0
    }
  );
}
const Dn = Z(
  ([{ groupIndices: t, sizes: e, totalCount: n }, { headerHeight: o, scrollTop: r }]) => {
    const s = q(), i = q(), l = vt(I(s, O(Vo)));
    return L(
      I(
        l,
        O((c) => c.totalCount)
      ),
      n
    ), L(
      I(
        l,
        O((c) => c.groupIndices)
      ),
      t
    ), L(
      I(
        dt(r, e, o),
        G(([c, d]) => be(d)),
        O(([c, d, m]) => Rt(d.groupOffsetTree, Math.max(c - m, 0), "v")[0]),
        nt(),
        O((c) => [c])
      ),
      i
    ), { groupCounts: s, topItemsIndexes: i };
  },
  rt(Lt, xt)
), Wt = Z(
  ([{ log: t }]) => {
    const e = T(!1), n = vt(
      I(
        e,
        G((o) => o),
        nt()
      )
    );
    return J(e, (o) => {
      o && lt(t)("props updated", {}, ht.DEBUG);
    }), { didMount: n, propsReady: e };
  },
  rt(Mt),
  { singleton: !0 }
), Po = typeof document < "u" && "scrollBehavior" in document.documentElement.style;
function $n(t) {
  const e = typeof t == "number" ? { index: t } : t;
  return e.align || (e.align = "start"), (!e.behavior || !Po) && (e.behavior = "auto"), e.offset === void 0 && (e.offset = 0), e;
}
const fe = Z(
  ([
    { gap: t, listRefresh: e, sizes: n, totalCount: o },
    {
      fixedFooterHeight: r,
      fixedHeaderHeight: s,
      footerHeight: i,
      headerHeight: l,
      scrollingInProgress: c,
      scrollTo: d,
      smoothScrollTargetReached: m,
      viewportHeight: x
    },
    { log: p }
  ]) => {
    const S = q(), y = q(), H = T(0);
    let g = null, v = null, u = null;
    function f() {
      g !== null && (g(), g = null), u !== null && (u(), u = null), v && (clearTimeout(v), v = null), W(c, !1);
    }
    return L(
      I(
        S,
        K(n, x, o, H, l, i, p),
        K(t, s, r),
        O(
          ([
            [w, C, z, b, a, h, k, F],
            V,
            P,
            N
          ]) => {
            const E = $n(w), { align: D, behavior: j, offset: ft } = E, gt = b - 1, X = Nn(E, C, gt);
            let ct = ce(X, C.offsetTree, V) + h;
            D === "end" ? (ct += P + Rt(C.sizeTree, X)[1] - z + N, X === gt && (ct += k)) : D === "center" ? ct += (P + Rt(C.sizeTree, X)[1] - z + N) / 2 : ct -= a, ft !== void 0 && ft !== 0 && (ct += ft);
            const Et = (mt) => {
              f(), mt ? (F("retrying to scroll to", { location: w }, ht.DEBUG), W(S, w)) : (W(y, !0), F("list did not change, scroll successful", {}, ht.DEBUG));
            };
            if (f(), j === "smooth") {
              let mt = !1;
              u = J(e, (Kt) => {
                mt = mt || Kt;
              }), g = yt(m, () => {
                Et(mt);
              });
            } else
              g = yt(I(e, Ao(150)), Et);
            return v = setTimeout(() => {
              f();
            }, 1200), W(c, !0), F("scrolling from index to", { behavior: j, index: X, top: ct }, ht.DEBUG), { behavior: j, top: ct };
          }
        )
      ),
      d
    ), {
      scrollTargetReached: y,
      scrollToIndex: S,
      topListHeight: H
    };
  },
  rt(Lt, xt, Mt),
  { singleton: !0 }
);
function Ao(t) {
  return (e) => {
    const n = setTimeout(() => {
      e(!1);
    }, t);
    return (o) => {
      o && (e(!0), clearTimeout(n));
    };
  };
}
function Ue(t, e) {
  t === 0 ? e() : requestAnimationFrame(() => {
    Ue(t - 1, e);
  });
}
function Ke(t, e) {
  const n = e - 1;
  return typeof t == "number" ? t : t.index === "LAST" ? n : t.index;
}
const me = Z(
  ([{ defaultItemSize: t, listRefresh: e, sizes: n }, { scrollTop: o }, { scrollTargetReached: r, scrollToIndex: s }, { didMount: i }]) => {
    const l = T(!0), c = T(0), d = T(!0);
    return L(
      I(
        i,
        K(c),
        G(([m, x]) => x !== 0),
        Ot(!1)
      ),
      l
    ), L(
      I(
        i,
        K(c),
        G(([m, x]) => x !== 0),
        Ot(!1)
      ),
      d
    ), J(
      I(
        dt(e, i),
        K(l, n, t, d),
        G(([[, m], x, { sizeTree: p }, S, y]) => m && (!tt(p) || Me(S)) && !x && !y),
        K(c)
      ),
      ([, m]) => {
        yt(r, () => {
          W(d, !0);
        }), Ue(4, () => {
          yt(o, () => {
            W(l, !0);
          }), W(s, m);
        });
      }
    ), {
      initialItemFinalLocationReached: d,
      initialTopMostItemIndex: c,
      scrolledToInitialItem: l
    };
  },
  rt(Lt, xt, fe, Wt),
  { singleton: !0 }
);
function Un(t, e) {
  return Math.abs(t - e) < 1.01;
}
const ue = "up", ne = "down", Go = "none", Mo = {
  atBottom: !1,
  notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
  state: {
    offsetBottom: 0,
    scrollHeight: 0,
    scrollTop: 0,
    viewportHeight: 0
  }
}, Wo = 0, pe = Z(([{ footerHeight: t, headerHeight: e, scrollBy: n, scrollContainerState: o, scrollTop: r, viewportHeight: s }]) => {
  const i = T(!1), l = T(!0), c = q(), d = q(), m = T(4), x = T(Wo), p = It(
    I(
      Le(I(A(r), $t(1), Ot(!0)), I(A(r), $t(1), Ot(!1), dn(100))),
      nt()
    ),
    !1
  ), S = It(
    I(Le(I(n, Ot(!0)), I(n, Ot(!1), dn(200))), nt()),
    !1
  );
  L(
    I(
      dt(A(r), A(x)),
      O(([u, f]) => u <= f),
      nt()
    ),
    l
  ), L(I(l, Ft(50)), d);
  const y = vt(
    I(
      dt(o, A(s), A(e), A(t), A(m)),
      kt((u, [{ scrollHeight: f, scrollTop: w }, C, z, b, a]) => {
        const h = w + C - f > -a, k = {
          scrollHeight: f,
          scrollTop: w,
          viewportHeight: C
        };
        if (h) {
          let V, P;
          return w > u.state.scrollTop ? (V = "SCROLLED_DOWN", P = u.state.scrollTop - w) : (V = "SIZE_DECREASED", P = u.state.scrollTop - w || u.scrollTopDelta), {
            atBottom: !0,
            atBottomBecause: V,
            scrollTopDelta: P,
            state: k
          };
        }
        let F;
        return k.scrollHeight > u.state.scrollHeight ? F = "SIZE_INCREASED" : C < u.state.viewportHeight ? F = "VIEWPORT_HEIGHT_DECREASING" : w < u.state.scrollTop ? F = "SCROLLING_UPWARDS" : F = "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM", {
          atBottom: !1,
          notAtBottomBecause: F,
          state: k
        };
      }, Mo),
      nt((u, f) => u !== void 0 && u.atBottom === f.atBottom)
    )
  ), H = It(
    I(
      o,
      kt(
        (u, { scrollHeight: f, scrollTop: w, viewportHeight: C }) => {
          if (!Un(u.scrollHeight, f)) {
            const z = f - (w + C) < 1;
            return u.scrollTop !== w && z ? {
              changed: !0,
              jump: u.scrollTop - w,
              scrollHeight: f,
              scrollTop: w
            } : {
              changed: !0,
              jump: 0,
              scrollHeight: f,
              scrollTop: w
            };
          }
          return {
            changed: !1,
            jump: 0,
            scrollHeight: f,
            scrollTop: w
          };
        },
        { changed: !1, jump: 0, scrollHeight: 0, scrollTop: 0 }
      ),
      G((u) => u.changed),
      O((u) => u.jump)
    ),
    0
  );
  L(
    I(
      y,
      O((u) => u.atBottom)
    ),
    i
  ), L(I(i, Ft(50)), c);
  const g = T(ne);
  L(
    I(
      o,
      O(({ scrollTop: u }) => u),
      nt(),
      kt(
        (u, f) => lt(S) ? { direction: u.direction, prevScrollTop: f } : { direction: f < u.prevScrollTop ? ue : ne, prevScrollTop: f },
        { direction: ne, prevScrollTop: 0 }
      ),
      O((u) => u.direction)
    ),
    g
  ), L(I(o, Ft(50), Ot(Go)), g);
  const v = T(0);
  return L(
    I(
      p,
      G((u) => !u),
      Ot(0)
    ),
    v
  ), L(
    I(
      r,
      Ft(100),
      K(p),
      G(([u, f]) => f),
      kt(([u, f], [w]) => [f, w], [0, 0]),
      O(([u, f]) => f - u)
    ),
    v
  ), {
    atBottomState: y,
    atBottomStateChange: c,
    atBottomThreshold: m,
    atTopStateChange: d,
    atTopThreshold: x,
    isAtBottom: i,
    isAtTop: l,
    isScrolling: p,
    lastJumpDueToItemResize: H,
    scrollDirection: g,
    scrollVelocity: v
  };
}, rt(xt)), ae = "top", de = "bottom", hn = "none";
function gn(t, e, n) {
  return typeof t == "number" ? n === ue && e === ae || n === ne && e === de ? t : 0 : n === ue ? e === ae ? t.main : t.reverse : e === de ? t.main : t.reverse;
}
function In(t, e) {
  return typeof t == "number" ? t : t[e] ?? 0;
}
const je = Z(
  ([{ deviation: t, fixedHeaderHeight: e, headerHeight: n, scrollTop: o, viewportHeight: r }]) => {
    const s = q(), i = T(0), l = T(0), c = T(0), d = It(
      I(
        dt(
          A(o),
          A(r),
          A(n),
          A(s, le),
          A(c),
          A(i),
          A(e),
          A(t),
          A(l)
        ),
        O(
          ([
            m,
            x,
            p,
            [S, y],
            H,
            g,
            v,
            u,
            f
          ]) => {
            const w = m - u, C = g + v, z = Math.max(p - w, 0);
            let b = hn;
            const a = In(f, ae), h = In(f, de);
            return S -= u, S += p + v, y += p + v, y -= u, S > m + C - a && (b = ue), y < m - z + x + h && (b = ne), b !== hn ? [
              Math.max(w - p - gn(H, ae, b) - a, 0),
              w - z - v + x + gn(H, de, b) + h
            ] : null;
          }
        ),
        G((m) => m !== null),
        nt(le)
      ),
      [0, 0]
    );
    return {
      increaseViewportBy: l,
      // input
      listBoundary: s,
      overscan: c,
      topListHeight: i,
      // output
      visibleRange: d
    };
  },
  rt(xt),
  { singleton: !0 }
);
function _o(t, e, n) {
  if (be(e)) {
    const o = _n(t, e);
    return [
      { index: Rt(e.groupOffsetTree, o)[0], offset: 0, size: 0 },
      { data: n?.[0], index: o, offset: 0, size: 0 }
    ];
  }
  return [{ data: n?.[0], index: t, offset: 0, size: 0 }];
}
const Be = {
  bottom: 0,
  firstItemIndex: 0,
  items: [],
  offsetBottom: 0,
  offsetTop: 0,
  top: 0,
  topItems: [],
  topListHeight: 0,
  totalCount: 0
};
function Te(t, e, n, o, r, s) {
  const { lastIndex: i, lastOffset: l, lastSize: c } = r;
  let d = 0, m = 0;
  if (t.length > 0) {
    d = t[0].offset;
    const H = t[t.length - 1];
    m = H.offset + H.size;
  }
  const x = n - i, p = l + x * c + (x - 1) * o, S = d, y = p - m;
  return {
    bottom: m,
    firstItemIndex: s,
    items: xn(t, r, s),
    offsetBottom: y,
    offsetTop: d,
    top: S,
    topItems: xn(e, r, s),
    topListHeight: e.reduce((H, g) => g.size + H, 0),
    totalCount: n
  };
}
function Kn(t, e, n, o, r, s) {
  let i = 0;
  if (n.groupIndices.length > 0)
    for (const m of n.groupIndices) {
      if (m - i >= t)
        break;
      i++;
    }
  const l = t + i, c = Ke(e, l), d = Array.from({ length: l }).map((m, x) => ({
    data: s[x + c],
    index: x + c,
    offset: 0,
    size: 0
  }));
  return Te(d, [], l, r, n, o);
}
function xn(t, e, n) {
  if (t.length === 0)
    return [];
  if (!be(e))
    return t.map((d) => ({ ...d, index: d.index + n, originalIndex: d.index }));
  const o = t[0].index, r = t[t.length - 1].index, s = [], i = Yt(e.groupOffsetTree, o, r);
  let l, c = 0;
  for (const d of t) {
    (!l || l.end < d.index) && (l = i.shift(), c = e.groupIndices.indexOf(l.start));
    let m;
    d.index === l.start ? m = {
      index: c,
      type: "group"
    } : m = {
      groupIndex: c,
      index: d.index - (c + 1) + n
    }, s.push({
      ...m,
      data: d.data,
      offset: d.offset,
      originalIndex: d.index,
      size: d.size
    });
  }
  return s;
}
function Sn(t, e) {
  return t === void 0 ? 0 : typeof t == "number" ? t : t[e] ?? 0;
}
const Ut = Z(
  ([
    { data: t, firstItemIndex: e, gap: n, sizes: o, totalCount: r },
    s,
    { listBoundary: i, topListHeight: l, visibleRange: c },
    { initialTopMostItemIndex: d, scrolledToInitialItem: m },
    { topListHeight: x },
    p,
    { didMount: S },
    { recalcInProgress: y }
  ]) => {
    const H = T([]), g = T(0), v = q(), u = T(0);
    L(s.topItemsIndexes, H);
    const f = It(
      I(
        dt(
          S,
          y,
          A(c, le),
          A(r),
          A(o),
          A(d),
          m,
          A(H),
          A(e),
          A(n),
          A(u),
          t
        ),
        G(([b, a, , h, , , , , , , , k]) => {
          const F = k !== void 0 && k.length !== h;
          return b && !a && !F;
        }),
        O(
          ([
            ,
            ,
            [b, a],
            h,
            k,
            F,
            V,
            P,
            N,
            E,
            D,
            j
          ]) => {
            const ft = k, { offsetTree: gt, sizeTree: X } = ft, ct = lt(g);
            if (h === 0)
              return { ...Be, totalCount: h };
            if (b === 0 && a === 0)
              return ct === 0 ? { ...Be, totalCount: h } : Kn(ct, F, k, N, E, j || []);
            if (tt(X))
              return ct > 0 ? null : Te(
                _o(Ke(F, h), ft, j),
                [],
                h,
                E,
                ft,
                N
              );
            const Et = [];
            if (P.length > 0) {
              const U = P[0], Y = P[P.length - 1];
              let st = 0;
              for (const et of Yt(X, U, Y)) {
                const Q = et.value, ut = Math.max(et.start, U), St = Math.min(et.end, Y);
                for (let at = ut; at <= St; at++)
                  Et.push({ data: j?.[at], index: at, offset: st, size: Q }), st += Q;
              }
            }
            if (!V)
              return Te([], Et, h, E, ft, N);
            const mt = P.length > 0 ? P[P.length - 1] + 1 : 0, Kt = Bo(gt, b, a, mt);
            if (Kt.length === 0)
              return null;
            const Qt = h - 1, Bt = ye([], (U) => {
              for (const Y of Kt) {
                const st = Y.value;
                let et = st.offset, Q = Y.start;
                const ut = st.size;
                if (st.offset < b) {
                  Q += Math.floor((b - st.offset + E) / (ut + E));
                  const at = Q - Y.start;
                  et += at * ut + at * E;
                }
                Q < mt && (et += (mt - Q) * ut, Q = mt);
                const St = Math.min(Y.end, Qt);
                for (let at = Q; at <= St && !(et >= a); at++)
                  U.push({ data: j?.[at], index: at, offset: et, size: ut }), et += ut + E;
              }
            }), te = Sn(D, ae), R = Sn(D, de);
            if (Bt.length > 0 && (te > 0 || R > 0)) {
              const U = Bt[0], Y = Bt[Bt.length - 1];
              if (te > 0 && U.index > mt) {
                const st = Math.min(te, U.index - mt), et = [];
                let Q = U.offset;
                for (let ut = U.index - 1; ut >= U.index - st; ut--) {
                  const at = Yt(X, ut, ut)[0]?.value ?? U.size;
                  Q -= at + E, et.unshift({ data: j?.[ut], index: ut, offset: Q, size: at });
                }
                Bt.unshift(...et);
              }
              if (R > 0 && Y.index < Qt) {
                const st = Math.min(R, Qt - Y.index);
                let et = Y.offset + Y.size + E;
                for (let Q = Y.index + 1; Q <= Y.index + st; Q++) {
                  const St = Yt(X, Q, Q)[0]?.value ?? Y.size;
                  Bt.push({ data: j?.[Q], index: Q, offset: et, size: St }), et += St + E;
                }
              }
            }
            return Te(Bt, Et, h, E, ft, N);
          }
        ),
        //@ts-expect-error filter needs to be fixed
        G((b) => b !== null),
        nt()
      ),
      Be
    );
    L(
      I(
        t,
        G(Me),
        O((b) => b?.length)
      ),
      r
    ), L(
      I(
        f,
        O((b) => b.topListHeight)
      ),
      x
    ), L(x, l), L(
      I(
        f,
        O((b) => [b.top, b.bottom])
      ),
      i
    ), L(
      I(
        f,
        O((b) => b.items)
      ),
      v
    );
    const w = vt(
      I(
        f,
        G(({ items: b }) => b.length > 0),
        K(r, t),
        G(([{ items: b }, a]) => b[b.length - 1].originalIndex === a - 1),
        O(([, b, a]) => [b - 1, a]),
        nt(le),
        O(([b]) => b)
      )
    ), C = vt(
      I(
        f,
        Ft(200),
        G(({ items: b, topItems: a }) => b.length > 0 && b[0].originalIndex === a.length),
        O(({ items: b }) => b[0].index),
        nt()
      )
    ), z = vt(
      I(
        f,
        G(({ items: b }) => b.length > 0),
        O(({ items: b }) => {
          let a = 0, h = b.length - 1;
          for (; b[a].type === "group" && a < h; )
            a++;
          for (; b[h].type === "group" && h > a; )
            h--;
          return {
            endIndex: b[h].index,
            startIndex: b[a].index
          };
        }),
        nt(Mn)
      )
    );
    return {
      endReached: w,
      initialItemCount: g,
      itemsRendered: v,
      listState: f,
      minOverscanItemCount: u,
      rangeChanged: z,
      startReached: C,
      topItemsIndexes: H,
      ...p
    };
  },
  rt(
    Lt,
    Dn,
    je,
    me,
    fe,
    pe,
    Wt,
    De
  ),
  { singleton: !0 }
), jn = Z(
  ([{ fixedFooterHeight: t, fixedHeaderHeight: e, footerHeight: n, headerHeight: o }, { listState: r }]) => {
    const s = q(), i = It(
      I(
        dt(n, t, o, e, r),
        O(([l, c, d, m, x]) => l + c + d + m + x.offsetBottom + x.bottom)
      ),
      0
    );
    return L(A(i), s), { totalListHeight: i, totalListHeightChanged: s };
  },
  rt(xt, Ut),
  { singleton: !0 }
), No = Z(
  ([{ viewportHeight: t }, { totalListHeight: e }]) => {
    const n = T(!1), o = It(
      I(
        dt(n, t, e),
        G(([r]) => r),
        O(([, r, s]) => Math.max(0, r - s)),
        Ft(0),
        nt()
      ),
      0
    );
    return { alignToBottom: n, paddingTopAddition: o };
  },
  rt(xt, jn),
  { singleton: !0 }
), qn = Z(() => ({
  context: T(null)
})), Do = ({
  itemBottom: t,
  itemTop: e,
  locationParams: { align: n, behavior: o, ...r },
  viewportBottom: s,
  viewportTop: i
}) => e < i ? { ...r, align: n ?? "start", ...o !== void 0 ? { behavior: o } : {} } : t > s ? { ...r, align: n ?? "end", ...o !== void 0 ? { behavior: o } : {} } : null, Yn = Z(
  ([
    { gap: t, sizes: e, totalCount: n },
    { fixedFooterHeight: o, fixedHeaderHeight: r, headerHeight: s, scrollingInProgress: i, scrollTop: l, viewportHeight: c },
    { scrollToIndex: d }
  ]) => {
    const m = q();
    return L(
      I(
        m,
        K(e, c, n, s, r, o, l),
        K(t),
        O(([[x, p, S, y, H, g, v, u], f]) => {
          const { calculateViewLocation: w = Do, done: C, ...z } = x, b = Nn(x, p, y - 1), a = ce(b, p.offsetTree, f) + H + g, h = a + Rt(p.sizeTree, b)[1], k = u + g, F = u + S - v, V = w({
            itemBottom: h,
            itemTop: a,
            locationParams: z,
            viewportBottom: F,
            viewportTop: k
          });
          return V !== null ? C && yt(
            I(
              i,
              G((P) => !P),
              // skips the initial publish of false, and the cleanup call.
              // but if scrollingInProgress is true, we skip the initial publish.
              $t(lt(i) ? 1 : 2)
            ),
            C
          ) : C?.(), V;
        }),
        G((x) => x !== null)
      ),
      d
    ), {
      scrollIntoView: m
    };
  },
  rt(Lt, xt, fe, Ut, Mt),
  { singleton: !0 }
);
function Tn(t) {
  return t === !1 ? !1 : t === "smooth" ? "smooth" : "auto";
}
const $o = (t, e) => typeof t == "function" ? Tn(t(e)) : e && Tn(t), Uo = Z(
  ([
    { listRefresh: t, totalCount: e, fixedItemSize: n, data: o },
    { atBottomState: r, isAtBottom: s },
    { scrollToIndex: i },
    { scrolledToInitialItem: l },
    { didMount: c, propsReady: d },
    { log: m },
    { scrollingInProgress: x },
    { context: p },
    { scrollIntoView: S }
  ]) => {
    const y = T(!1), H = q();
    let g = null;
    function v(C) {
      W(i, {
        align: "end",
        behavior: C,
        index: "LAST"
      });
    }
    J(
      I(
        dt(I(A(e), $t(1)), c),
        K(A(y), s, l, x),
        O(([[C, z], b, a, h, k]) => {
          let F = z && h, V = "auto";
          return F && (V = $o(b, a || k), F = F && V !== !1), { followOutputBehavior: V, shouldFollow: F, totalCount: C };
        }),
        G(({ shouldFollow: C }) => C)
      ),
      ({ followOutputBehavior: C, totalCount: z }) => {
        g !== null && (g(), g = null), lt(n) !== void 0 ? requestAnimationFrame(() => {
          lt(m)("following output to ", { totalCount: z }, ht.DEBUG), v(C);
        }) : g = yt(t, () => {
          lt(m)("following output to ", { totalCount: z }, ht.DEBUG), v(C), g = null;
        });
      }
    );
    function u(C) {
      const z = yt(r, (b) => {
        C && !b.atBottom && b.notAtBottomBecause === "SIZE_INCREASED" && g === null && (lt(m)("scrolling to bottom due to increased size", {}, ht.DEBUG), v("auto"));
      });
      setTimeout(z, 100);
    }
    J(
      I(
        dt(A(y), e, d),
        G(([C, , z]) => C !== !1 && z),
        kt(
          ({ value: C }, [, z]) => ({ refreshed: C === z, value: z }),
          { refreshed: !1, value: 0 }
        ),
        G(({ refreshed: C }) => C),
        K(y, e)
      ),
      ([, C]) => {
        lt(l) && u(C !== !1);
      }
    ), J(H, () => {
      u(lt(y) !== !1);
    }), J(dt(A(y), r), ([C, z]) => {
      C !== !1 && !z.atBottom && z.notAtBottomBecause === "VIEWPORT_HEIGHT_DECREASING" && v("auto");
    });
    const f = T(null), w = q();
    return L(
      Le(
        I(
          A(o),
          O((C) => C?.length ?? 0)
        ),
        I(A(e))
      ),
      w
    ), J(
      I(
        dt(I(w, $t(1)), c),
        K(A(f), l, x, p),
        O(([[C, z], b, a, h, k]) => z && a && b?.({ context: k, totalCount: C, scrollingInProgress: h })),
        G((C) => !!C),
        Ft(0)
      ),
      (C) => {
        g !== null && (g(), g = null), lt(n) !== void 0 ? requestAnimationFrame(() => {
          lt(m)("scrolling into view", {}), W(S, C);
        }) : g = yt(t, () => {
          lt(m)("scrolling into view", {}), W(S, C), g = null;
        });
      }
    ), { autoscrollToBottom: H, followOutput: y, scrollIntoViewOnChange: f };
  },
  rt(
    Lt,
    pe,
    fe,
    me,
    Wt,
    Mt,
    xt,
    qn,
    Yn
  )
), Ko = Z(
  ([{ data: t, firstItemIndex: e, gap: n, sizes: o }, { initialTopMostItemIndex: r }, { initialItemCount: s, listState: i }, { didMount: l }]) => (L(
    I(
      l,
      K(s),
      G(([, c]) => c !== 0),
      K(r, o, e, n, t),
      O(([[, c], d, m, x, p, S = []]) => Kn(c, d, m, x, p, S))
    ),
    i
  ), {}),
  rt(Lt, me, Ut, Wt),
  { singleton: !0 }
), jo = Z(
  ([{ didMount: t }, { scrollTo: e }, { listState: n }]) => {
    const o = T(0);
    return J(
      I(
        t,
        K(o),
        G(([, r]) => r !== 0),
        O(([, r]) => ({ top: r }))
      ),
      (r) => {
        yt(
          I(
            n,
            $t(1),
            G((s) => s.items.length > 1)
          ),
          () => {
            requestAnimationFrame(() => {
              W(e, r);
            });
          }
        );
      }
    ), {
      initialScrollTop: o
    };
  },
  rt(Wt, xt, Ut),
  { singleton: !0 }
), Zn = Z(
  ([{ scrollVelocity: t }]) => {
    const e = T(!1), n = q(), o = T(!1);
    return L(
      I(
        t,
        K(o, e, n),
        G(([r, s]) => s !== !1 && s !== void 0),
        O(([r, s, i, l]) => {
          const { enter: c, exit: d } = s;
          if (i) {
            if (d(r, l))
              return !1;
          } else if (c(r, l))
            return !0;
          return i;
        }),
        nt()
      ),
      e
    ), J(
      I(dt(e, t, n), K(o)),
      ([[r, s, i], l]) => {
        r && l !== !1 && l !== void 0 && l.change && l.change(s, i);
      }
    ), { isSeeking: e, scrollSeekConfiguration: o, scrollSeekRangeChanged: n, scrollVelocity: t };
  },
  rt(pe),
  { singleton: !0 }
), qe = Z(([{ scrollContainerState: t, scrollTo: e }]) => {
  const n = q(), o = q(), r = q(), s = T(!1), i = T(void 0);
  return L(
    I(
      dt(n, o),
      O(([{ scrollTop: l, viewportHeight: c }, { offsetTop: d, listHeight: m }]) => ({
        scrollHeight: m,
        scrollTop: Math.max(0, l - d),
        viewportHeight: c
      }))
    ),
    t
  ), L(
    I(
      e,
      K(o),
      O(([l, { offsetTop: c }]) => ({
        ...l,
        top: l.top + c
      }))
    ),
    r
  ), {
    customScrollParent: i,
    // config
    useWindowScroll: s,
    // input
    windowScrollContainerState: n,
    // signals
    windowScrollTo: r,
    windowViewportRect: o
  };
}, rt(xt)), qo = Z(
  ([
    { sizeRanges: t, sizes: e },
    { headerHeight: n, scrollTop: o },
    { initialTopMostItemIndex: r },
    { didMount: s },
    { useWindowScroll: i, windowScrollContainerState: l, windowViewportRect: c }
  ]) => {
    const d = q(), m = T(void 0), x = T(null), p = T(null);
    return L(l, x), L(c, p), J(
      I(
        d,
        K(e, o, i, x, p, n)
      ),
      ([S, y, H, g, v, u, f]) => {
        const w = ko(y.sizeTree);
        g && v !== null && u !== null && (H = v.scrollTop - u.offsetTop), H -= f, S({ ranges: w, scrollTop: H });
      }
    ), L(I(m, G(Me), O(Yo)), r), L(
      I(
        s,
        K(m),
        G(([, S]) => S !== void 0),
        nt(),
        O(([, S]) => S.ranges)
      ),
      t
    ), {
      getState: d,
      restoreStateFrom: m
    };
  },
  rt(Lt, xt, me, Wt, qe)
);
function Yo(t) {
  return { align: "start", index: 0, offset: t.scrollTop };
}
const Zo = Z(([{ topItemsIndexes: t }]) => {
  const e = T(0);
  return L(
    I(
      e,
      G((n) => n >= 0),
      O((n) => Array.from({ length: n }).map((o, r) => r))
    ),
    t
  ), { topItemCount: e };
}, rt(Ut));
function Xn(t) {
  let e = !1, n;
  return (() => (e || (e = !0, n = t()), n));
}
const Xo = Xn(() => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent)), Jo = Z(
  ([
    { deviation: t, scrollBy: e, scrollingInProgress: n, scrollTop: o },
    { isAtBottom: r, isScrolling: s, lastJumpDueToItemResize: i, scrollDirection: l },
    { listState: c },
    { beforeUnshiftWith: d, computePrependedHeight: m, gap: x, shiftWithOffset: p, sizes: S },
    { log: y },
    { recalcInProgress: H }
  ]) => {
    const g = vt(
      I(
        c,
        K(i),
        kt(
          ([, f, w, C], [{ bottom: z, items: b, offsetBottom: a, totalCount: h }, k]) => {
            const F = z + a;
            let V = 0;
            return w === h && f.length > 0 && b.length > 0 && (b[0].originalIndex === 0 && f[0].originalIndex === 0 || (V = F - C, V !== 0 && (V += k))), [V, b, h, F];
          },
          [0, [], 0, 0]
        ),
        G(([f]) => f !== 0),
        K(o, l, n, r, y, H),
        G(([, f, w, C, , , z]) => !z && !C && f !== 0 && w === ue),
        O(([[f], , , , , w]) => (w("Upward scrolling compensation", { amount: f }, ht.DEBUG), f))
      )
    );
    function v(f) {
      f > 0 ? (W(e, { behavior: "auto", top: -f }), W(t, 0)) : (W(t, 0), W(e, { behavior: "auto", top: -f }));
    }
    J(I(g, K(t, s)), ([f, w, C]) => {
      C && Xo() ? W(t, w - f) : v(-f);
    }), J(
      I(
        dt(It(s, !1), t, H),
        G(([f, w, C]) => !f && !C && w !== 0),
        O(([f, w]) => w),
        Ft(1)
      ),
      v
    ), L(
      I(
        p,
        O((f) => ({ top: -f }))
      ),
      e
    );
    let u = !1;
    return J(
      I(
        d,
        K(S, x, m),
        O(([f, { groupIndices: w, lastSize: C, sizeTree: z }, b, a]) => {
          function h(N) {
            return N * (C + b);
          }
          if (a && w.length === 0) {
            u = !0;
            const N = a(f);
            if (Array.isArray(N)) {
              let E = 0;
              for (const D of N) E += D;
              return E;
            }
            return N;
          }
          if (u = !1, w.length === 0)
            return h(f);
          let k = 0;
          const F = ie(z, 0);
          let V = 0, P = 0;
          for (; V < f; ) {
            V++, k += F;
            let N = w.length === P + 1 ? 1 / 0 : w[P + 1] - w[P] - 1;
            V + N > f && (k -= F, N = f - V + 1), V += N, k += h(N), P++;
          }
          return k;
        })
      ),
      (f) => {
        if (u) {
          W(t, f), W(e, { top: f }), requestAnimationFrame(() => {
            W(t, 0), W(H, !1);
          });
          return;
        }
        W(t, f), requestAnimationFrame(() => {
          W(e, { top: f }), requestAnimationFrame(() => {
            W(t, 0), W(H, !1);
          });
        });
      }
    ), { deviation: t };
  },
  rt(xt, pe, Ut, Lt, Mt, De)
), Qo = Z(
  ([
    t,
    e,
    n,
    o,
    r,
    s,
    i,
    l,
    c,
    d,
    m
  ]) => ({
    ...t,
    ...e,
    ...n,
    ...o,
    ...r,
    ...s,
    ...i,
    ...l,
    ...c,
    ...d,
    ...m
  }),
  rt(
    je,
    Ko,
    Wt,
    Zn,
    jn,
    jo,
    No,
    qe,
    Yn,
    Mt,
    qn
  )
), Jn = Z(
  ([
    {
      computePrependedHeight: t,
      data: e,
      defaultItemSize: n,
      firstItemIndex: o,
      fixedItemSize: r,
      fixedGroupSize: s,
      gap: i,
      groupIndices: l,
      heightEstimates: c,
      itemSize: d,
      sizeRanges: m,
      sizes: x,
      statefulTotalCount: p,
      totalCount: S,
      trackItemSizes: y
    },
    { initialItemFinalLocationReached: H, initialTopMostItemIndex: g, scrolledToInitialItem: v },
    u,
    f,
    w,
    C,
    { scrollToIndex: z },
    b,
    { topItemCount: a },
    { groupCounts: h },
    k
  ]) => {
    const { listState: F, minOverscanItemCount: V, topItemsIndexes: P, rangeChanged: N, ...E } = C;
    return L(N, k.scrollSeekRangeChanged), L(
      I(
        k.windowViewportRect,
        O((D) => D.visibleHeight)
      ),
      u.viewportHeight
    ), {
      computePrependedHeight: t,
      data: e,
      defaultItemHeight: n,
      firstItemIndex: o,
      fixedItemHeight: r,
      fixedGroupHeight: s,
      gap: i,
      groupCounts: h,
      heightEstimates: c,
      initialItemFinalLocationReached: H,
      initialTopMostItemIndex: g,
      scrolledToInitialItem: v,
      sizeRanges: m,
      topItemCount: a,
      topItemsIndexes: P,
      // input
      totalCount: S,
      ...w,
      groupIndices: l,
      itemSize: d,
      listState: F,
      minOverscanItemCount: V,
      scrollToIndex: z,
      // output
      statefulTotalCount: p,
      trackItemSizes: y,
      // exported from stateFlagsSystem
      rangeChanged: N,
      ...E,
      // the bag of IO from featureGroup1System
      ...k,
      ...u,
      sizes: x,
      ...f
    };
  },
  rt(
    Lt,
    me,
    xt,
    qo,
    Uo,
    Ut,
    fe,
    Jo,
    Zo,
    Dn,
    Qo
  )
);
function tr(t, e) {
  const n = {}, o = {};
  let r = 0;
  const s = t.length;
  for (; r < s; )
    o[t[r]] = 1, r += 1;
  for (const i in e)
    Object.hasOwn(o, i) || (n[i] = e[i]);
  return n;
}
const Ie = typeof document < "u" ? B.useLayoutEffect : B.useEffect;
function Ye(t, e, n) {
  const o = Object.keys(e.required || {}), r = Object.keys(e.optional || {}), s = Object.keys(e.methods || {}), i = Object.keys(e.events || {}), l = B.createContext({});
  function c(v, u) {
    v.propsReady !== void 0 && W(v.propsReady, !1);
    for (const f of o) {
      const w = v[e.required[f]];
      W(w, u[f]);
    }
    for (const f of r)
      if (f in u) {
        const w = v[e.optional[f]];
        W(w, u[f]);
      }
    v.propsReady !== void 0 && W(v.propsReady, !0);
  }
  function d(v) {
    return s.reduce((u, f) => (u[f] = (w) => {
      const C = v[e.methods[f]];
      W(C, w);
    }, u), {});
  }
  function m(v) {
    return i.reduce((u, f) => (u[f] = Io(v[e.events[f]]), u), {});
  }
  const x = B.forwardRef(function(u, f) {
    const { children: w, ...C } = u, [z] = B.useState(() => ye(So(t), (h) => {
      c(h, C);
    })), [b] = B.useState(an(m, z));
    Ie(() => {
      for (const h of i)
        h in C && J(b[h], C[h]);
      return () => {
        Object.values(b).map(We);
      };
    }, [C, b, z]), Ie(() => {
      c(z, C);
    }), B.useImperativeHandle(f, un(d(z)));
    const a = n;
    return /* @__PURE__ */ M(l.Provider, { value: z, children: n !== void 0 ? /* @__PURE__ */ M(a, { ...tr([...o, ...r, ...i], C), children: w }) : w });
  }), p = (v) => {
    const u = B.useContext(l);
    return B.useCallback(
      (f) => {
        W(u[v], f);
      },
      [u, v]
    );
  }, S = (v) => {
    const f = B.useContext(l)[v], w = B.useCallback(
      (C) => J(f, C),
      [f]
    );
    return B.useSyncExternalStore(
      w,
      () => lt(f),
      () => lt(f)
    );
  }, y = (v) => {
    const f = B.useContext(l)[v], [w, C] = B.useState(an(lt, f));
    return Ie(
      () => J(f, (z) => {
        z !== w && C(un(z));
      }),
      [f, w]
    ), w;
  }, H = parseInt(B.version) >= 18 ? S : y;
  return {
    Component: x,
    useEmitter: (v, u) => {
      const w = B.useContext(l)[v];
      Ie(() => J(w, u), [u, w]);
    },
    useEmitterValue: H,
    usePublisher: p
  };
}
const Re = B.createContext(void 0), Qn = B.createContext(void 0), Oe = "-webkit-sticky", vn = "sticky", Ze = Xn(() => {
  if (typeof document > "u")
    return vn;
  const t = document.createElement("div");
  return t.style.position = Oe, t.style.position === Oe ? Oe : vn;
}), to = typeof document < "u" ? B.useLayoutEffect : B.useEffect;
function ke(t) {
  return "self" in t;
}
function er(t) {
  return "body" in t;
}
function eo(t, e, n, o = Xt, r, s) {
  const i = B.useRef(null), l = B.useRef(null), c = B.useRef(null), d = B.useCallback(
    (p) => {
      let S, y, H;
      const g = p.target;
      if (er(g) || ke(g)) {
        const u = ke(g) ? g : g.defaultView;
        H = s === !0 ? u.scrollX : u.scrollY, S = s === !0 ? u.document.documentElement.scrollWidth : u.document.documentElement.scrollHeight, y = s === !0 ? u.innerWidth : u.innerHeight;
      } else
        H = s === !0 ? g.scrollLeft : g.scrollTop, S = s === !0 ? g.scrollWidth : g.scrollHeight, y = s === !0 ? g.offsetWidth : g.offsetHeight;
      const v = () => {
        t({
          scrollHeight: S,
          scrollTop: Math.max(H, 0),
          viewportHeight: y
        });
      };
      p.suppressFlushSync === !0 ? v() : ao.flushSync(v), l.current !== null && (H === l.current || H <= 0 || H === S - y) && (l.current = null, e(!0), c.current && (clearTimeout(c.current), c.current = null));
    },
    [t, e, s]
  );
  B.useEffect(() => {
    const p = r || i.current;
    return o(r || i.current), d({ suppressFlushSync: !0, target: p }), p.addEventListener("scroll", d, { passive: !0 }), () => {
      o(null), p.removeEventListener("scroll", d);
    };
  }, [i, d, n, o, r]);
  function m(p) {
    const S = i.current;
    if (!S || (s === !0 ? "offsetWidth" in S && S.offsetWidth === 0 : "offsetHeight" in S && S.offsetHeight === 0))
      return;
    const y = p.behavior === "smooth";
    let H, g, v;
    ke(S) ? (g = Math.max(
      Ht(S.document.documentElement, s === !0 ? "width" : "height"),
      s === !0 ? S.document.documentElement.scrollWidth : S.document.documentElement.scrollHeight
    ), H = s === !0 ? S.innerWidth : S.innerHeight, v = s === !0 ? window.scrollX : window.scrollY) : (g = S[s === !0 ? "scrollWidth" : "scrollHeight"], H = Ht(S, s === !0 ? "width" : "height"), v = S[s === !0 ? "scrollLeft" : "scrollTop"]);
    const u = g - H;
    if (p.top = Math.ceil(Math.max(Math.min(u, p.top), 0)), Un(H, g) || p.top === v) {
      t({ scrollHeight: g, scrollTop: v, viewportHeight: H }), y && e(!0);
      return;
    }
    y ? (l.current = p.top, c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      c.current = null, l.current = null, e(!0);
    }, 1e3)) : l.current = null, s === !0 && (p = { ...p.behavior !== void 0 ? { behavior: p.behavior } : {}, left: p.top }), S.scrollTo(p);
  }
  function x(p) {
    s === !0 && (p = {
      ...p.behavior !== void 0 ? { behavior: p.behavior } : {},
      ...p.top !== void 0 ? { left: p.top } : {}
    }), i.current.scrollBy(p);
  }
  return { scrollByCallback: x, scrollerRef: i, scrollToCallback: m };
}
function Xe(t) {
  return t;
}
const nr = /* @__PURE__ */ Z(() => {
  const t = T((l) => `Item ${l}`), e = T((l) => `Group ${l}`), n = T({}), o = T(Xe), r = T("div"), s = T(Xt), i = (l, c = null) => It(
    I(
      n,
      O((d) => d[l]),
      nt()
    ),
    c
  );
  return {
    components: n,
    computeItemKey: o,
    EmptyPlaceholder: i("EmptyPlaceholder"),
    FooterComponent: i("Footer"),
    GroupComponent: i("Group", "div"),
    groupContent: e,
    HeaderComponent: i("Header"),
    HeaderFooterTag: r,
    ItemComponent: i("Item", "div"),
    itemContent: t,
    ListComponent: i("List", "div"),
    ScrollerComponent: i("Scroller", "div"),
    scrollerRef: s,
    ScrollSeekPlaceholder: i("ScrollSeekPlaceholder"),
    TopItemListComponent: i("TopItemList")
  };
}), or = /* @__PURE__ */ Z(
  ([t, e]) => ({ ...t, ...e }),
  rt(Jn, nr)
), rr = ({ height: t }) => /* @__PURE__ */ M("div", { style: { height: t } }), sr = { overflowAnchor: "none", position: Ze(), zIndex: 1 }, no = { overflowAnchor: "none" }, ir = { ...no, display: "inline-block", height: "100%" }, Cn = /* @__PURE__ */ B.memo(function({ showTopList: e = !1 }) {
  const n = _("listState"), o = Ct("sizeRanges"), r = _("useWindowScroll"), s = _("customScrollParent"), i = Ct("windowScrollContainerState"), l = Ct("scrollContainerState"), c = s || r ? i : l, d = _("itemContent"), m = _("context"), x = _("groupContent"), p = _("trackItemSizes"), S = _("itemSize"), y = _("log"), H = Ct("gap"), g = _("horizontalDirection"), { callbackRef: v } = Ln(
    o,
    S,
    p,
    e ? Xt : c,
    y,
    H,
    s,
    g,
    _("skipAnimationFrameInResizeObserver")
  ), [u, f] = B.useState(0);
  tn("deviation", (E) => {
    u !== E && f(E);
  });
  const w = _("EmptyPlaceholder"), C = _("ScrollSeekPlaceholder") ?? rr, z = _("ListComponent"), b = _("ItemComponent"), a = _("GroupComponent"), h = _("computeItemKey"), k = _("isSeeking"), F = _("groupIndices").length > 0, V = _("alignToBottom"), P = _("initialItemFinalLocationReached"), N = e ? {} : {
    boxSizing: "border-box",
    ...g ? {
      display: "inline-block",
      height: "100%",
      marginLeft: u !== 0 ? u : V ? "auto" : 0,
      paddingLeft: n.offsetTop,
      paddingRight: n.offsetBottom,
      whiteSpace: "nowrap"
    } : {
      marginTop: u !== 0 ? u : V ? "auto" : 0,
      paddingBottom: n.offsetBottom,
      paddingTop: n.offsetTop
    },
    ...P ? {} : { visibility: "hidden" }
  };
  return !e && n.totalCount === 0 && w !== null && w !== void 0 ? /* @__PURE__ */ M(w, { ...ot(w, m) }) : /* @__PURE__ */ M(
    z,
    {
      ...ot(z, m),
      "data-testid": e ? "virtuoso-top-item-list" : "virtuoso-item-list",
      ref: v,
      style: N,
      children: (e ? n.topItems : n.items).map((E) => {
        const D = E.originalIndex, j = h(D + n.firstItemIndex, E.data, m);
        return k ? /* @__PURE__ */ Nt(
          C,
          {
            ...ot(C, m),
            height: E.size,
            index: E.index,
            key: j,
            type: E.type || "item",
            ...E.type === "group" ? {} : { groupIndex: E.groupIndex }
          }
        ) : E.type === "group" ? /* @__PURE__ */ Nt(
          a,
          {
            ...ot(a, m),
            "data-index": D,
            "data-item-index": E.index,
            "data-known-size": E.size,
            key: j,
            style: sr
          },
          x(E.index, m)
        ) : /* @__PURE__ */ Nt(
          b,
          {
            ...ot(b, m),
            ...oo(b, E.data),
            "data-index": D,
            "data-item-group-index": E.groupIndex,
            "data-item-index": E.index,
            "data-known-size": E.size,
            key: j,
            style: g ? ir : no
          },
          F ? d(E.index, E.groupIndex, E.data, m) : d(E.index, E.data, m)
        );
      })
    }
  );
}), lr = {
  height: "100%",
  outline: "none",
  overflowY: "auto",
  position: "relative",
  WebkitOverflowScrolling: "touch"
}, cr = {
  outline: "none",
  overflowX: "auto",
  position: "relative"
}, Jt = (t) => ({
  height: "100%",
  position: "absolute",
  top: 0,
  width: "100%",
  ...t ? { display: "flex", flexDirection: "column" } : void 0
}), ur = {
  position: Ze(),
  top: 0,
  width: "100%",
  zIndex: 1
};
function ot(t, e) {
  if (typeof t != "string")
    return { context: e };
}
function oo(t, e) {
  return { item: typeof t == "string" ? void 0 : e };
}
const ar = /* @__PURE__ */ B.memo(function() {
  const e = _("HeaderComponent"), n = Ct("headerHeight"), o = _("HeaderFooterTag"), r = zt(
    B.useMemo(
      () => (i) => {
        n(Ht(i, "height"));
      },
      [n]
    ),
    !0,
    _("skipAnimationFrameInResizeObserver")
  ), s = _("context");
  return e != null ? /* @__PURE__ */ M(o, { ref: r, children: /* @__PURE__ */ M(e, { ...ot(e, s) }) }) : null;
}), dr = /* @__PURE__ */ B.memo(function() {
  const e = _("FooterComponent"), n = Ct("footerHeight"), o = _("HeaderFooterTag"), r = zt(
    B.useMemo(
      () => (i) => {
        n(Ht(i, "height"));
      },
      [n]
    ),
    !0,
    _("skipAnimationFrameInResizeObserver")
  ), s = _("context");
  return e != null ? /* @__PURE__ */ M(o, { ref: r, children: /* @__PURE__ */ M(e, { ...ot(e, s) }) }) : null;
});
function Je({ useEmitter: t, useEmitterValue: e, usePublisher: n }) {
  return B.memo(function({ children: s, style: i, context: l, ...c }) {
    const d = n("scrollContainerState"), m = e("ScrollerComponent"), x = n("smoothScrollTargetReached"), p = e("scrollerRef"), S = e("horizontalDirection") || !1, { scrollByCallback: y, scrollerRef: H, scrollToCallback: g } = eo(
      d,
      x,
      m,
      p,
      void 0,
      S
    );
    return t("scrollTo", g), t("scrollBy", y), /* @__PURE__ */ M(
      m,
      {
        "data-testid": "virtuoso-scroller",
        "data-virtuoso-scroller": !0,
        ref: H,
        style: { ...S ? cr : lr, ...i },
        tabIndex: 0,
        ...c,
        ...ot(m, l),
        children: s
      }
    );
  });
}
function Qe({ useEmitter: t, useEmitterValue: e, usePublisher: n }) {
  return B.memo(function({ children: s, style: i, context: l, ...c }) {
    const d = n("windowScrollContainerState"), m = e("ScrollerComponent"), x = n("smoothScrollTargetReached"), p = e("totalListHeight"), S = e("deviation"), y = e("customScrollParent"), H = B.useRef(null), g = e("scrollerRef"), { scrollByCallback: v, scrollerRef: u, scrollToCallback: f } = eo(
      d,
      x,
      m,
      g,
      y
    );
    return to(() => (u.current = y || H.current?.ownerDocument.defaultView, () => {
      u.current = null;
    }), [u, y]), t("windowScrollTo", f), t("scrollBy", v), /* @__PURE__ */ M(
      m,
      {
        ref: H,
        "data-virtuoso-scroller": !0,
        style: { position: "relative", ...i, ...p !== 0 ? { height: p + S } : void 0 },
        ...c,
        ...ot(m, l),
        children: s
      }
    );
  });
}
const fr = ({ children: t }) => {
  const e = B.useContext(Re), n = Ct("viewportHeight"), o = Ct("fixedItemHeight"), r = _("alignToBottom"), s = _("horizontalDirection"), i = B.useMemo(
    () => re(n, (c) => Ht(c, s ? "width" : "height")),
    [n, s]
  ), l = zt(i, !0, _("skipAnimationFrameInResizeObserver"));
  return B.useEffect(() => {
    e && (n(e.viewportHeight), o(e.itemHeight));
  }, [e, n, o]), /* @__PURE__ */ M("div", { "data-viewport-type": "element", ref: l, style: Jt(r), children: t });
}, mr = ({ children: t }) => {
  const e = B.useContext(Re), n = Ct("windowViewportRect"), o = Ct("fixedItemHeight"), r = _("customScrollParent"), s = Ne(
    n,
    r,
    _("skipAnimationFrameInResizeObserver")
  ), i = _("alignToBottom");
  return B.useEffect(() => {
    e && (o(e.itemHeight), n({ listHeight: 0, offsetTop: 0, visibleHeight: e.viewportHeight, visibleWidth: 100 }));
  }, [e, n, o]), /* @__PURE__ */ M("div", { "data-viewport-type": "window", ref: s, style: Jt(i), children: t });
}, pr = ({ children: t }) => {
  const e = _("TopItemListComponent") ?? "div", n = _("headerHeight"), o = { ...ur, marginTop: `${n}px` }, r = _("context");
  return /* @__PURE__ */ M(e, { style: o, ...ot(e, r), children: t });
}, hr = /* @__PURE__ */ B.memo(function(e) {
  const n = _("useWindowScroll"), o = _("topItemsIndexes").length > 0, r = _("customScrollParent"), s = _("context");
  return /* @__PURE__ */ Dt(r || n ? Ir : gr, { ...e, context: s, children: [
    o && /* @__PURE__ */ M(pr, { children: /* @__PURE__ */ M(Cn, { showTopList: !0 }) }),
    /* @__PURE__ */ Dt(r || n ? mr : fr, { children: [
      /* @__PURE__ */ M(ar, {}),
      /* @__PURE__ */ M(Cn, {}),
      /* @__PURE__ */ M(dr, {})
    ] })
  ] });
}), {
  Component: ro,
  useEmitter: tn,
  useEmitterValue: _,
  usePublisher: Ct
} = /* @__PURE__ */ Ye(
  or,
  {
    optional: {
      restoreStateFrom: "restoreStateFrom",
      context: "context",
      followOutput: "followOutput",
      scrollIntoViewOnChange: "scrollIntoViewOnChange",
      itemContent: "itemContent",
      groupContent: "groupContent",
      overscan: "overscan",
      increaseViewportBy: "increaseViewportBy",
      minOverscanItemCount: "minOverscanItemCount",
      totalCount: "totalCount",
      groupCounts: "groupCounts",
      topItemCount: "topItemCount",
      computePrependedHeight: "computePrependedHeight",
      firstItemIndex: "firstItemIndex",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      components: "components",
      atBottomThreshold: "atBottomThreshold",
      atTopThreshold: "atTopThreshold",
      computeItemKey: "computeItemKey",
      defaultItemHeight: "defaultItemHeight",
      fixedGroupHeight: "fixedGroupHeight",
      // Must be set above 'fixedItemHeight'
      fixedItemHeight: "fixedItemHeight",
      heightEstimates: "heightEstimates",
      itemSize: "itemSize",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      headerFooterTag: "HeaderFooterTag",
      data: "data",
      initialItemCount: "initialItemCount",
      initialScrollTop: "initialScrollTop",
      alignToBottom: "alignToBottom",
      useWindowScroll: "useWindowScroll",
      customScrollParent: "customScrollParent",
      scrollerRef: "scrollerRef",
      logLevel: "logLevel",
      horizontalDirection: "horizontalDirection",
      skipAnimationFrameInResizeObserver: "skipAnimationFrameInResizeObserver"
    },
    methods: {
      scrollToIndex: "scrollToIndex",
      scrollIntoView: "scrollIntoView",
      scrollTo: "scrollTo",
      scrollBy: "scrollBy",
      autoscrollToBottom: "autoscrollToBottom",
      getState: "getState"
    },
    events: {
      isScrolling: "isScrolling",
      endReached: "endReached",
      startReached: "startReached",
      rangeChanged: "rangeChanged",
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      totalListHeightChanged: "totalListHeightChanged",
      itemsRendered: "itemsRendered",
      groupIndices: "groupIndices"
    }
  },
  hr
), gr = /* @__PURE__ */ Je({ useEmitter: tn, useEmitterValue: _, usePublisher: Ct }), Ir = /* @__PURE__ */ Qe({ useEmitter: tn, useEmitterValue: _, usePublisher: Ct }), qr = ro, Yr = ro, xr = /* @__PURE__ */ Z(() => {
  const t = T((d) => /* @__PURE__ */ Dt("td", { children: [
    "Item $",
    d
  ] })), e = T(null), n = T((d) => /* @__PURE__ */ Dt("td", { colSpan: 1e3, children: [
    "Group ",
    d
  ] })), o = T(null), r = T(null), s = T({}), i = T(Xe), l = T(Xt), c = (d, m = null) => It(
    I(
      s,
      O((x) => x[d]),
      nt()
    ),
    m
  );
  return {
    components: s,
    computeItemKey: i,
    context: e,
    EmptyPlaceholder: c("EmptyPlaceholder"),
    FillerRow: c("FillerRow"),
    fixedFooterContent: r,
    fixedHeaderContent: o,
    itemContent: t,
    groupContent: n,
    ScrollerComponent: c("Scroller", "div"),
    scrollerRef: l,
    ScrollSeekPlaceholder: c("ScrollSeekPlaceholder"),
    TableBodyComponent: c("TableBody", "tbody"),
    TableComponent: c("Table", "table"),
    TableFooterComponent: c("TableFoot", "tfoot"),
    TableHeadComponent: c("TableHead", "thead"),
    TableRowComponent: c("TableRow", "tr"),
    GroupComponent: c("Group", "tr")
  };
}), Sr = /* @__PURE__ */ Z(
  ([t, e]) => ({ ...t, ...e }),
  rt(Jn, xr)
), Tr = ({ height: t }) => /* @__PURE__ */ M("tr", { children: /* @__PURE__ */ M("td", { style: { height: t } }) }), vr = ({ height: t }) => /* @__PURE__ */ M("tr", { children: /* @__PURE__ */ M("td", { style: { border: 0, height: t, padding: 0 } }) }), Cr = { overflowAnchor: "none" }, wn = { position: Ze(), zIndex: 2, overflowAnchor: "none" }, yn = /* @__PURE__ */ B.memo(function({ showTopList: e = !1 }) {
  const n = $("listState"), o = $("computeItemKey"), r = $("firstItemIndex"), s = $("context"), i = $("isSeeking"), l = $("fixedHeaderHeight"), c = $("groupIndices").length > 0, d = $("itemContent"), m = $("groupContent"), x = $("ScrollSeekPlaceholder") ?? Tr, p = $("GroupComponent"), S = $("TableRowComponent"), y = (e ? n.topItems : []).reduce((g, v, u) => (u === 0 ? g.push(v.size) : g.push(g[u - 1] + v.size), g), []);
  return (e ? n.topItems : n.items).map((g) => {
    const v = g.originalIndex, u = o(v + r, g.data, s), f = e ? v === 0 ? 0 : y[v - 1] : 0;
    return i ? /* @__PURE__ */ Nt(
      x,
      {
        ...ot(x, s),
        height: g.size,
        index: g.index,
        key: u,
        type: g.type || "item"
      }
    ) : g.type === "group" ? /* @__PURE__ */ Nt(
      p,
      {
        ...ot(p, s),
        "data-index": v,
        "data-item-index": g.index,
        "data-known-size": g.size,
        key: u,
        style: {
          ...wn,
          top: l
        }
      },
      m(g.index, s)
    ) : /* @__PURE__ */ Nt(
      S,
      {
        ...ot(S, s),
        ...oo(S, g.data),
        "data-index": v,
        "data-item-index": g.index,
        "data-known-size": g.size,
        "data-item-group-index": g.groupIndex,
        key: u,
        style: e ? { ...wn, top: l + f } : Cr
      },
      c ? d(g.index, g.groupIndex, g.data, s) : d(g.index, g.data, s)
    );
  });
}), wr = /* @__PURE__ */ B.memo(function() {
  const e = $("listState"), n = $("topItemsIndexes").length > 0, o = bt("sizeRanges"), r = $("useWindowScroll"), s = $("customScrollParent"), i = bt("windowScrollContainerState"), l = bt("scrollContainerState"), c = s || r ? i : l, d = $("trackItemSizes"), m = $("itemSize"), x = $("log"), { callbackRef: p, ref: S } = Ln(
    o,
    m,
    d,
    c,
    x,
    void 0,
    s,
    !1,
    $("skipAnimationFrameInResizeObserver")
  ), [y, H] = B.useState(0);
  en("deviation", (F) => {
    y !== F && (S.current.style.marginTop = `${F}px`, H(F));
  });
  const g = $("EmptyPlaceholder"), v = $("FillerRow") ?? vr, u = $("TableBodyComponent"), f = $("paddingTopAddition"), w = $("statefulTotalCount"), C = $("context");
  if (w === 0 && g !== null && g !== void 0)
    return /* @__PURE__ */ M(g, { ...ot(g, C) });
  const z = (n ? e.topItems : []).reduce((F, V) => F + V.size, 0), b = e.offsetTop + f + y - z, a = e.offsetBottom, h = b > 0 ? /* @__PURE__ */ M(v, { context: C, height: b }, "padding-top") : null, k = a > 0 ? /* @__PURE__ */ M(v, { context: C, height: a }, "padding-bottom") : null;
  return /* @__PURE__ */ Dt(u, { "data-testid": "virtuoso-item-list", ref: p, ...ot(u, C), children: [
    h,
    n && /* @__PURE__ */ M(yn, { showTopList: !0 }),
    /* @__PURE__ */ M(yn, {}),
    k
  ] });
}), yr = ({ children: t }) => {
  const e = B.useContext(Re), n = bt("viewportHeight"), o = bt("fixedItemHeight"), r = zt(
    B.useMemo(() => re(n, (s) => Ht(s, "height")), [n]),
    !0,
    $("skipAnimationFrameInResizeObserver")
  );
  return B.useEffect(() => {
    e && (n(e.viewportHeight), o(e.itemHeight));
  }, [e, n, o]), /* @__PURE__ */ M("div", { "data-viewport-type": "element", ref: r, style: Jt(!1), children: t });
}, br = ({ children: t }) => {
  const e = B.useContext(Re), n = bt("windowViewportRect"), o = bt("fixedItemHeight"), r = $("customScrollParent"), s = Ne(
    n,
    r,
    $("skipAnimationFrameInResizeObserver")
  );
  return B.useEffect(() => {
    e && (o(e.itemHeight), n({ listHeight: 0, offsetTop: 0, visibleHeight: e.viewportHeight, visibleWidth: 100 }));
  }, [e, n, o]), /* @__PURE__ */ M("div", { "data-viewport-type": "window", ref: s, style: Jt(!1), children: t });
}, Rr = /* @__PURE__ */ B.memo(function(e) {
  const n = $("useWindowScroll"), o = $("customScrollParent"), r = bt("fixedHeaderHeight"), s = bt("fixedFooterHeight"), i = $("fixedHeaderContent"), l = $("fixedFooterContent"), c = $("context"), d = zt(
    B.useMemo(() => re(r, (u) => Ht(u, "height")), [r]),
    !0,
    $("skipAnimationFrameInResizeObserver")
  ), m = zt(
    B.useMemo(() => re(s, (u) => Ht(u, "height")), [s]),
    !0,
    $("skipAnimationFrameInResizeObserver")
  ), x = o || n ? Er : Hr, p = o || n ? br : yr, S = $("TableComponent"), y = $("TableHeadComponent"), H = $("TableFooterComponent"), g = i ? /* @__PURE__ */ M(
    y,
    {
      ref: d,
      style: { position: "sticky", top: 0, zIndex: 2 },
      ...ot(y, c),
      children: i()
    },
    "TableHead"
  ) : null, v = l ? /* @__PURE__ */ M(
    H,
    {
      ref: m,
      style: { bottom: 0, position: "sticky", zIndex: 1 },
      ...ot(H, c),
      children: l()
    },
    "TableFoot"
  ) : null;
  return /* @__PURE__ */ M(x, { ...e, ...ot(x, c), children: /* @__PURE__ */ M(p, { children: /* @__PURE__ */ Dt(S, { style: { borderSpacing: 0, overflowAnchor: "none" }, ...ot(S, c), children: [
    g,
    /* @__PURE__ */ M(wr, {}, "TableBody"),
    v
  ] }) }) });
}), {
  Component: so,
  useEmitter: en,
  useEmitterValue: $,
  usePublisher: bt
} = /* @__PURE__ */ Ye(
  Sr,
  {
    optional: {
      restoreStateFrom: "restoreStateFrom",
      context: "context",
      followOutput: "followOutput",
      firstItemIndex: "firstItemIndex",
      itemContent: "itemContent",
      groupContent: "groupContent",
      fixedHeaderContent: "fixedHeaderContent",
      fixedFooterContent: "fixedFooterContent",
      overscan: "overscan",
      increaseViewportBy: "increaseViewportBy",
      minOverscanItemCount: "minOverscanItemCount",
      totalCount: "totalCount",
      topItemCount: "topItemCount",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      components: "components",
      groupCounts: "groupCounts",
      atBottomThreshold: "atBottomThreshold",
      atTopThreshold: "atTopThreshold",
      computeItemKey: "computeItemKey",
      defaultItemHeight: "defaultItemHeight",
      fixedGroupHeight: "fixedGroupHeight",
      // Must be set above 'fixedItemHeight'
      fixedItemHeight: "fixedItemHeight",
      itemSize: "itemSize",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      data: "data",
      initialItemCount: "initialItemCount",
      initialScrollTop: "initialScrollTop",
      alignToBottom: "alignToBottom",
      useWindowScroll: "useWindowScroll",
      customScrollParent: "customScrollParent",
      scrollerRef: "scrollerRef",
      logLevel: "logLevel"
    },
    methods: {
      scrollToIndex: "scrollToIndex",
      scrollIntoView: "scrollIntoView",
      scrollTo: "scrollTo",
      scrollBy: "scrollBy",
      getState: "getState"
    },
    events: {
      isScrolling: "isScrolling",
      endReached: "endReached",
      startReached: "startReached",
      rangeChanged: "rangeChanged",
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      totalListHeightChanged: "totalListHeightChanged",
      itemsRendered: "itemsRendered",
      groupIndices: "groupIndices"
    }
  },
  Rr
), Hr = /* @__PURE__ */ Je({ useEmitter: en, useEmitterValue: $, usePublisher: bt }), Er = /* @__PURE__ */ Qe({ useEmitter: en, useEmitterValue: $, usePublisher: bt }), Zr = so, Xr = so, bn = {
  bottom: 0,
  itemHeight: 0,
  items: [],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, Br = {
  bottom: 0,
  itemHeight: 0,
  items: [{ index: 0 }],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, { ceil: Rn, floor: Ce, max: oe, min: ze, round: Hn } = Math;
function En(t, e, n) {
  return Array.from({ length: e - t + 1 }).map((o, r) => ({ data: n === null ? null : n[r + t], index: r + t }));
}
function Or(t) {
  return {
    ...Br,
    items: t
  };
}
function xe(t, e) {
  return t !== void 0 && t.width === e.width && t.height === e.height;
}
function kr(t, e) {
  return t !== void 0 && t.column === e.column && t.row === e.row;
}
const zr = /* @__PURE__ */ Z(
  ([
    { increaseViewportBy: t, listBoundary: e, overscan: n, visibleRange: o },
    { footerHeight: r, headerHeight: s, scrollBy: i, scrollContainerState: l, scrollTo: c, scrollTop: d, smoothScrollTargetReached: m, viewportHeight: x },
    p,
    S,
    { didMount: y, propsReady: H },
    { customScrollParent: g, useWindowScroll: v, windowScrollContainerState: u, windowScrollTo: f, windowViewportRect: w },
    C
  ]) => {
    const z = T(0), b = T(0), a = T(bn), h = T({ height: 0, width: 0 }), k = T({ height: 0, width: 0 }), F = q(), V = q(), P = T(0), N = T(null), E = T({ column: 0, row: 0 }), D = q(), j = q(), ft = T(!1), gt = T(0), X = T(!0), ct = T(!1), Et = T(!1);
    J(
      I(
        y,
        K(gt),
        G(([R, U]) => U !== 0)
      ),
      () => {
        W(X, !1);
      }
    ), J(
      I(
        dt(y, X, k, h, gt, ct),
        G(([R, U, Y, st, , et]) => R && !U && Y.height !== 0 && st.height !== 0 && !et)
      ),
      ([, , , , R]) => {
        W(ct, !0), Ue(1, () => {
          W(F, R);
        }), yt(I(d), () => {
          W(e, [0, 0]), W(X, !0);
        });
      }
    ), L(
      I(
        j,
        G((R) => R != null && R.scrollTop > 0),
        Ot(0)
      ),
      b
    ), J(
      I(
        y,
        K(j),
        G(([, R]) => R != null)
      ),
      ([, R]) => {
        R && (W(h, R.viewport), W(k, R.item), W(E, R.gap), R.scrollTop > 0 && (W(ft, !0), yt(I(d, $t(1)), (U) => {
          W(ft, !1);
        }), W(c, { top: R.scrollTop })));
      }
    ), L(
      I(
        h,
        O(({ height: R }) => R)
      ),
      x
    ), L(
      I(
        dt(
          A(h, xe),
          A(k, xe),
          A(E, (R, U) => R !== void 0 && R.column === U.column && R.row === U.row),
          A(d)
        ),
        O(([R, U, Y, st]) => ({
          gap: Y,
          item: U,
          scrollTop: st,
          viewport: R
        }))
      ),
      D
    ), L(
      I(
        dt(
          A(z),
          o,
          A(E, kr),
          A(k, xe),
          A(h, xe),
          A(N),
          A(b),
          A(ft),
          A(X),
          A(gt)
        ),
        G(([, , , , , , , R]) => !R),
        O(
          ([
            R,
            [U, Y],
            st,
            et,
            Q,
            ut,
            St,
            ,
            at,
            Vt
          ]) => {
            const { column: Pt, row: ee } = st, { height: he, width: He } = et, { width: nn } = Q;
            if (St === 0 && (R === 0 || nn === 0))
              return bn;
            if (He === 0) {
              const cn = Ke(Vt, R), uo = cn + Math.max(St - 1, 0);
              return Or(En(cn, uo, ut));
            }
            const ge = io(nn, He, Pt);
            let jt, _t;
            at ? U === 0 && Y === 0 && St > 0 ? (jt = 0, _t = St - 1) : (jt = ge * Ce((U + ee) / (he + ee)), _t = ge * Rn((Y + ee) / (he + ee)) - 1, _t = ze(R - 1, oe(_t, ge - 1)), jt = ze(_t, oe(0, jt))) : (jt = 0, _t = -1);
            const on = En(jt, _t, ut), { bottom: rn, top: sn } = Bn(Q, st, et, on), ln = Rn(R / ge), co = ln * he + (ln - 1) * ee - rn;
            return { bottom: rn, itemHeight: he, items: on, itemWidth: He, offsetBottom: co, offsetTop: sn, top: sn };
          }
        )
      ),
      a
    ), L(
      I(
        N,
        G((R) => R !== null),
        O((R) => R.length)
      ),
      z
    ), L(
      I(
        dt(h, k, a, E),
        G(([R, U, { items: Y }]) => Y.length > 0 && U.height !== 0 && R.height !== 0),
        O(([R, U, { items: Y }, st]) => {
          const { bottom: et, top: Q } = Bn(R, st, U, Y);
          return [Q, et];
        }),
        nt(le)
      ),
      e
    );
    const mt = T(!1);
    L(
      I(
        d,
        K(mt),
        O(([R, U]) => U || R !== 0)
      ),
      mt
    );
    const Kt = vt(
      I(
        dt(a, z),
        G(([{ items: R }]) => R.length > 0),
        K(mt),
        G(([[R, U], Y]) => {
          const et = R.items[R.items.length - 1].index === U - 1;
          return (Y || R.bottom > 0 && R.itemHeight > 0 && R.offsetBottom === 0 && R.items.length === U) && et;
        }),
        O(([[, R]]) => R - 1),
        nt()
      )
    ), Qt = vt(
      I(
        A(a),
        G(({ items: R }) => R.length > 0 && R[0].index === 0),
        Ot(0),
        nt()
      )
    ), Bt = vt(
      I(
        A(a),
        K(ft),
        G(([{ items: R }, U]) => R.length > 0 && !U),
        O(([{ items: R }]) => ({
          endIndex: R[R.length - 1].index,
          startIndex: R[0].index
        })),
        nt(Mn),
        Ft(0)
      )
    );
    L(Bt, S.scrollSeekRangeChanged), L(
      I(
        F,
        K(h, k, z, E),
        O(([R, U, Y, st, et]) => {
          const Q = $n(R), { align: ut, behavior: St, offset: at } = Q;
          let Vt = Q.index;
          Vt === "LAST" && (Vt = st - 1), Vt = oe(0, Vt, ze(st - 1, Vt));
          let Pt = Ge(U, et, Y, Vt);
          return ut === "end" ? Pt = Hn(Pt - U.height + Y.height) : ut === "center" && (Pt = Hn(Pt - U.height / 2 + Y.height / 2)), at !== void 0 && at !== 0 && (Pt += at), { behavior: St, top: Pt };
        })
      ),
      c
    );
    const te = It(
      I(
        a,
        O((R) => R.offsetBottom + R.bottom)
      ),
      0
    );
    return L(
      I(
        w,
        O((R) => ({ height: R.visibleHeight, width: R.visibleWidth }))
      ),
      h
    ), {
      customScrollParent: g,
      // input
      data: N,
      deviation: P,
      footerHeight: r,
      gap: E,
      headerHeight: s,
      increaseViewportBy: t,
      initialItemCount: b,
      itemDimensions: k,
      overscan: n,
      restoreStateFrom: j,
      scrollBy: i,
      scrollContainerState: l,
      scrollHeight: V,
      scrollTo: c,
      scrollToIndex: F,
      scrollTop: d,
      smoothScrollTargetReached: m,
      totalCount: z,
      useWindowScroll: v,
      viewportDimensions: h,
      windowScrollContainerState: u,
      windowScrollTo: f,
      windowViewportRect: w,
      ...S,
      // output
      gridState: a,
      horizontalDirection: Et,
      initialTopMostItemIndex: gt,
      totalListHeight: te,
      ...p,
      endReached: Kt,
      propsReady: H,
      rangeChanged: Bt,
      startReached: Qt,
      stateChanged: D,
      stateRestoreInProgress: ft,
      ...C
    };
  },
  rt(je, xt, pe, Zn, Wt, qe, Mt)
);
function io(t, e, n) {
  return oe(1, Ce((t + n) / (Ce(e) + n)));
}
function Bn(t, e, n, o) {
  const { height: r } = n;
  if (r === void 0 || o.length === 0)
    return { bottom: 0, top: 0 };
  const s = Ge(t, e, n, o[0].index);
  return { bottom: Ge(t, e, n, o[o.length - 1].index) + r, top: s };
}
function Ge(t, e, n, o) {
  const r = io(t.width, n.width, e.column), s = Ce(o / r), i = s * n.height + oe(0, s - 1) * e.row;
  return i > 0 ? i + e.row : i;
}
const Lr = /* @__PURE__ */ Z(() => {
  const t = T((x) => `Item ${x}`), e = T({}), n = T(null), o = T("virtuoso-grid-item"), r = T("virtuoso-grid-list"), s = T(Xe), i = T("div"), l = T(Xt), c = (x, p = null) => It(
    I(
      e,
      O((S) => S[x]),
      nt()
    ),
    p
  ), d = T(!1), m = T(!1);
  return L(A(m), d), {
    components: e,
    computeItemKey: s,
    context: n,
    FooterComponent: c("Footer"),
    HeaderComponent: c("Header"),
    headerFooterTag: i,
    itemClassName: o,
    ItemComponent: c("Item", "div"),
    itemContent: t,
    listClassName: r,
    ListComponent: c("List", "div"),
    readyStateChanged: d,
    reportReadyState: m,
    ScrollerComponent: c("Scroller", "div"),
    scrollerRef: l,
    ScrollSeekPlaceholder: c("ScrollSeekPlaceholder", "div")
  };
}), Fr = /* @__PURE__ */ Z(
  ([t, e]) => ({ ...t, ...e }),
  rt(zr, Lr)
), Vr = /* @__PURE__ */ B.memo(function() {
  const e = it("gridState"), n = it("listClassName"), o = it("itemClassName"), r = it("itemContent"), s = it("computeItemKey"), i = it("isSeeking"), l = wt("scrollHeight"), c = it("ItemComponent"), d = it("ListComponent"), m = it("ScrollSeekPlaceholder"), x = it("context"), p = wt("itemDimensions"), S = wt("gap"), y = it("log"), H = it("stateRestoreInProgress"), g = wt("reportReadyState"), v = zt(
    B.useMemo(
      () => (u) => {
        const f = u.parentElement.parentElement.scrollHeight;
        l(f);
        const w = u.firstChild;
        if (w !== null) {
          const { height: C, width: z } = w.getBoundingClientRect();
          p({ height: C, width: z });
        }
        S({
          column: On("column-gap", getComputedStyle(u).columnGap, y),
          row: On("row-gap", getComputedStyle(u).rowGap, y)
        });
      },
      [l, p, S, y]
    ),
    !0,
    !1
  );
  return to(() => {
    e.itemHeight > 0 && e.itemWidth > 0 && g(!0);
  }, [e]), H ? null : /* @__PURE__ */ M(
    d,
    {
      className: n,
      ref: v,
      ...ot(d, x),
      "data-testid": "virtuoso-item-list",
      style: { paddingBottom: e.offsetBottom, paddingTop: e.offsetTop },
      children: e.items.map((u) => {
        const f = s(u.index, u.data, x);
        return i ? /* @__PURE__ */ M(
          m,
          {
            ...ot(m, x),
            height: e.itemHeight,
            index: u.index,
            width: e.itemWidth
          },
          f
        ) : /* @__PURE__ */ Nt(
          c,
          {
            ...ot(c, x),
            className: o,
            "data-index": u.index,
            key: f
          },
          r(u.index, u.data, x)
        );
      })
    }
  );
}), Pr = B.memo(function() {
  const e = it("HeaderComponent"), n = wt("headerHeight"), o = it("headerFooterTag"), r = zt(
    B.useMemo(
      () => (i) => {
        n(Ht(i, "height"));
      },
      [n]
    ),
    !0,
    !1
  ), s = it("context");
  return e != null ? /* @__PURE__ */ M(o, { ref: r, children: /* @__PURE__ */ M(e, { ...ot(e, s) }) }) : null;
}), Ar = B.memo(function() {
  const e = it("FooterComponent"), n = wt("footerHeight"), o = it("headerFooterTag"), r = zt(
    B.useMemo(
      () => (i) => {
        n(Ht(i, "height"));
      },
      [n]
    ),
    !0,
    !1
  ), s = it("context");
  return e != null ? /* @__PURE__ */ M(o, { ref: r, children: /* @__PURE__ */ M(e, { ...ot(e, s) }) }) : null;
}), Gr = ({ children: t }) => {
  const e = B.useContext(Qn), n = wt("itemDimensions"), o = wt("viewportDimensions"), r = zt(
    B.useMemo(
      () => (s) => {
        o(s.getBoundingClientRect());
      },
      [o]
    ),
    !0,
    !1
  );
  return B.useEffect(() => {
    e && (o({ height: e.viewportHeight, width: e.viewportWidth }), n({ height: e.itemHeight, width: e.itemWidth }));
  }, [e, o, n]), /* @__PURE__ */ M("div", { ref: r, style: Jt(!1), children: t });
}, Mr = ({ children: t }) => {
  const e = B.useContext(Qn), n = wt("windowViewportRect"), o = wt("itemDimensions"), r = it("customScrollParent"), s = Ne(n, r, !1);
  return B.useEffect(() => {
    e && (o({ height: e.itemHeight, width: e.itemWidth }), n({ listHeight: 0, offsetTop: 0, visibleHeight: e.viewportHeight, visibleWidth: e.viewportWidth }));
  }, [e, n, o]), /* @__PURE__ */ M("div", { ref: s, style: Jt(!1), children: t });
}, Wr = /* @__PURE__ */ B.memo(function({ ...e }) {
  const n = it("useWindowScroll"), o = it("customScrollParent"), r = o || n ? Dr : Nr, s = o || n ? Mr : Gr, i = it("context");
  return /* @__PURE__ */ M(r, { ...e, ...ot(r, i), children: /* @__PURE__ */ Dt(s, { children: [
    /* @__PURE__ */ M(Pr, {}),
    /* @__PURE__ */ M(Vr, {}),
    /* @__PURE__ */ M(Ar, {})
  ] }) });
}), {
  Component: _r,
  useEmitter: lo,
  useEmitterValue: it,
  usePublisher: wt
} = /* @__PURE__ */ Ye(
  Fr,
  {
    optional: {
      context: "context",
      totalCount: "totalCount",
      overscan: "overscan",
      itemContent: "itemContent",
      components: "components",
      computeItemKey: "computeItemKey",
      data: "data",
      initialItemCount: "initialItemCount",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      headerFooterTag: "headerFooterTag",
      listClassName: "listClassName",
      itemClassName: "itemClassName",
      useWindowScroll: "useWindowScroll",
      customScrollParent: "customScrollParent",
      scrollerRef: "scrollerRef",
      logLevel: "logLevel",
      restoreStateFrom: "restoreStateFrom",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      increaseViewportBy: "increaseViewportBy"
    },
    methods: {
      scrollTo: "scrollTo",
      scrollBy: "scrollBy",
      scrollToIndex: "scrollToIndex"
    },
    events: {
      isScrolling: "isScrolling",
      endReached: "endReached",
      startReached: "startReached",
      rangeChanged: "rangeChanged",
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      stateChanged: "stateChanged",
      readyStateChanged: "readyStateChanged"
    }
  },
  Wr
), Nr = /* @__PURE__ */ Je({ useEmitter: lo, useEmitterValue: it, usePublisher: wt }), Dr = /* @__PURE__ */ Qe({ useEmitter: lo, useEmitterValue: it, usePublisher: wt });
function On(t, e, n) {
  return e !== "normal" && e?.endsWith("px") !== !0 && n(`${t} was not resolved to pixel value correctly`, e, ht.WARN), e === "normal" ? 0 : parseInt(e ?? "0", 10);
}
const Jr = _r;
export {
  Xr as GroupedTableVirtuoso,
  Yr as GroupedVirtuoso,
  ht as LogLevel,
  Zr as TableVirtuoso,
  qr as Virtuoso,
  Jr as VirtuosoGrid,
  Qn as VirtuosoGridMockContext,
  Re as VirtuosoMockContext
};
