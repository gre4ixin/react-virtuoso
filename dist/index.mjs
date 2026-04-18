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
function N(t, e) {
  t(we, e);
}
function We(t) {
  t(Zt);
}
function lt(t) {
  return t(kn);
}
function V(t, e) {
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
function U(...t) {
  const e = new Array(t.length);
  let n = 0, o = null;
  const r = 2 ** t.length - 1;
  return t.forEach((s, i) => {
    const l = 2 ** i;
    J(s, (u) => {
      const d = n;
      n |= l, e[i] = u, d !== r && n === r && o && (o(), o = null);
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
  return ye(T(e), (n) => V(t, n));
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
  return ye(q(), (e) => V(t, e));
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
    const l = o(r.map((u) => n(u)));
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
    J(s, (u) => {
      n[i] = u, o |= l, o === r && N(e, n);
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
      const u = i[0].target;
      u.offsetParent !== null && t(u);
    };
    n ? l() : requestAnimationFrame(l);
  }) : null, [t, n]);
  return r = (i) => {
    i && e ? (s?.observe(i), o.current = i) : (o.current && s?.unobserve(o.current), o.current = null);
  }, { callbackRef: r, ref: o };
}
function Ln(t, e, n, o, r, s, i, l, u) {
  const d = B.useCallback(
    (f) => {
      const x = Co(f.children, e, l ? "offsetWidth" : "offsetHeight", r);
      let p = f.parentElement;
      for (; p.dataset.virtuosoScroller === void 0; )
        p = p.parentElement;
      const S = p.lastElementChild.dataset.viewportType === "window";
      let C;
      S && (C = p.ownerDocument.defaultView);
      const H = i ? l ? i.scrollLeft : i.scrollTop : S ? l ? C.scrollX || C.document.documentElement.scrollLeft : C.scrollY || C.document.documentElement.scrollTop : l ? p.scrollLeft : p.scrollTop, h = i ? l ? i.scrollWidth : i.scrollHeight : S ? l ? C.document.documentElement.scrollWidth : C.document.documentElement.scrollHeight : l ? p.scrollWidth : p.scrollHeight, v = i ? l ? i.offsetWidth : i.offsetHeight : S ? l ? C.innerWidth : C.innerHeight : l ? p.offsetWidth : p.offsetHeight;
      o({
        scrollHeight: h,
        scrollTop: Math.max(H, 0),
        viewportHeight: v
      }), s?.(
        l ? fn("column-gap", getComputedStyle(f).columnGap, r) : fn("row-gap", getComputedStyle(f).rowGap, r)
      ), x !== null && t(x);
    },
    [t, e, r, s, i, o, l]
  );
  return _e(d, n, u);
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
    const u = parseInt(l.dataset.index), d = parseFloat(l.dataset.knownSize), f = e(l, n);
    if (f === 0 && o("Zero-sized element, this should not happen", { child: l }, ht.ERROR), f === d)
      continue;
    const x = s[s.length - 1];
    s.length === 0 || x.size !== f || x.endIndex !== u - 1 ? s.push({ endIndex: u, size: f, startIndex: u }) : s[s.length - 1].endIndex++;
  }
  return s;
}
function fn(t, e, n) {
  return e !== "normal" && e?.endsWith("px") !== !0 && n(`${t} was not resolved to pixel value correctly`, e, ht.WARN), e === "normal" ? 0 : parseInt(e ?? "0", 10);
}
function Ne(t, e, n) {
  const o = B.useRef(null), r = B.useCallback(
    (u) => {
      if (!u?.offsetParent)
        return;
      const d = u.getBoundingClientRect(), f = d.width;
      let x, p;
      if (e) {
        const S = e.getBoundingClientRect(), C = d.top - S.top;
        p = S.height - Math.max(0, C), x = C + e.scrollTop;
      } else {
        const S = i.current.ownerDocument.defaultView;
        p = S.innerHeight - Math.max(0, d.top), x = d.top + S.scrollY;
      }
      o.current = {
        listHeight: d.height,
        offsetTop: x,
        visibleHeight: p,
        visibleWidth: f
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
    const u = i.current?.ownerDocument.defaultView;
    return u?.addEventListener("scroll", l), u?.addEventListener("resize", l), () => {
      u?.removeEventListener("scroll", l), u?.removeEventListener("resize", l);
    };
  }, [l, e, i]), s;
}
const xt = Z(
  () => {
    const t = q(), e = q(), n = T(0), o = q(), r = T(0), s = q(), i = q(), l = T(0), u = T(0), d = T(0), f = T(0), x = q(), p = q(), S = T(!1), C = T(!1), H = T(!1);
    return V(
      I(
        t,
        O(({ scrollTop: h }) => h)
      ),
      e
    ), V(
      I(
        t,
        O(({ scrollHeight: h }) => h)
      ),
      i
    ), V(e, r), {
      deviation: n,
      fixedFooterHeight: d,
      fixedHeaderHeight: u,
      footerHeight: f,
      headerHeight: l,
      horizontalDirection: C,
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
    const { index: l, value: u } = e(t[i]);
    s.push({ end: l - 1, start: o, value: r }), o = l, r = u;
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
    let u = !1, d = !1;
    for (const { end: f, start: x, value: p } of l)
      u ? (r >= x || s === p) && (t = Fe(t, x)) : (d = p !== s, u = !0), f > r && r >= x && p !== s && (t = Tt(t, r + 1, p));
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
    i = n.reduce((C, H) => Tt(Tt(C, H, p), H + 1, S), i);
  } else
    [i, l] = Ro(i, e);
  if (i === s)
    return t;
  const { lastIndex: u, lastOffset: d, lastSize: f, offsetTree: x } = Ae(t.offsetTree, l, i, r);
  return {
    groupIndices: n,
    groupOffsetTree: n.reduce((p, S) => Tt(p, S, ce(S, x, r)), qt()),
    lastIndex: u,
    lastOffset: d,
    lastSize: f,
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
  let r = t, s = 0, i = 0, l = 0, u = 0;
  if (e !== 0) {
    u = ve(r, e - 1, $e), l = r[u].offset;
    const f = Rt(n, e - 1);
    s = f[0], i = f[1], r.length && r[u].size === Rt(n, e)[1] && (u -= 1), r = r.slice(0, u + 1);
  } else
    r = [];
  for (const { start: d, value: f } of Yt(n, e, 1 / 0)) {
    const x = d - s, p = x * i + l + x * o;
    r.push({
      index: d,
      offset: p,
      size: f
    }), s = d, l = p, i = f;
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
    const n = q(), o = q(), r = It(o, 0), s = q(), i = q(), l = T(0), u = T([]), d = T(void 0), f = T(void 0), x = T(void 0), p = T(void 0), S = T((a, m) => Ht(a, Fo[m])), C = T(void 0), H = T(void 0), h = T(0), v = bo(), c = It(
      I(n, U(u, t, h), kt(Oo, v), nt()),
      v
    ), g = It(
      I(
        u,
        nt(),
        kt((a, m) => ({ current: m, prev: a.current }), {
          current: [],
          prev: []
        }),
        O(({ prev: a }) => a)
      ),
      []
    );
    V(
      I(
        u,
        G((a) => a.length > 0),
        U(c, h),
        O(([a, m, k]) => {
          const z = a.reduce((P, F, K) => Tt(P, F, ce(F, m.offsetTree, k) || K), qt());
          return {
            ...m,
            groupIndices: a,
            groupOffsetTree: z
          };
        })
      ),
      c
    ), V(
      I(
        o,
        U(c),
        G(([a, { lastIndex: m }]) => a < m),
        O(([a, { lastIndex: m, lastSize: k }]) => [
          {
            endIndex: m,
            size: k,
            startIndex: a
          }
        ])
      ),
      n
    ), V(d, f);
    const b = It(
      I(
        d,
        O((a) => a === void 0)
      ),
      !0
    );
    V(
      I(
        f,
        G((a) => a !== void 0 && tt(lt(c).sizeTree)),
        O((a) => {
          const m = lt(x), k = lt(u).length > 0;
          return m !== void 0 && m !== 0 ? k ? [
            { endIndex: 0, size: m, startIndex: 0 },
            { endIndex: 1, size: a, startIndex: 1 }
          ] : [] : [{ endIndex: 0, size: a, startIndex: 0 }];
        })
      ),
      n
    ), V(
      I(
        p,
        G((a) => a !== void 0 && a.length > 0 && tt(lt(c).sizeTree)),
        O((a) => {
          const m = [];
          let k = a[0], z = 0;
          for (let P = 1; P < a.length; P++) {
            const F = a[P];
            F !== k && (m.push({
              endIndex: P - 1,
              size: k,
              startIndex: z
            }), k = F, z = P);
          }
          return m.push({
            endIndex: a.length - 1,
            size: k,
            startIndex: z
          }), m;
        })
      ),
      n
    ), V(
      I(
        u,
        U(x, f),
        G(([, a, m]) => a !== void 0 && m !== void 0),
        O(([a, m, k]) => {
          const z = [];
          for (let P = 0; P < a.length; P++) {
            const F = a[P], K = a[P + 1];
            z.push({
              startIndex: F,
              endIndex: F,
              size: m
            }), K !== void 0 && z.push({
              startIndex: F + 1,
              endIndex: K - 1,
              size: k
            });
          }
          return z;
        })
      ),
      n
    );
    const w = vt(
      I(
        n,
        U(c),
        kt(
          ({ sizes: a }, [m, k]) => ({
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
          (a, m) => ({ diff: a.prev - m, prev: m }),
          { diff: 0, prev: 0 }
        ),
        O((a) => a.diff)
      ),
      (a) => {
        const { groupIndices: m } = lt(c);
        if (a > 0)
          N(e, !0), N(s, a + pn(a, m));
        else if (a < 0) {
          const k = lt(g);
          k.length > 0 && (a -= pn(-a, k)), N(i, a);
        }
      }
    ), J(I(l, U(t)), ([a, m]) => {
      a < 0 && m(
        "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
        { firstItemIndex: l },
        ht.ERROR
      );
    });
    const L = vt(s);
    V(
      I(
        s,
        U(c, H),
        O(([a, m, k]) => {
          const z = m.groupIndices.length > 0, P = [];
          let F = null, K = m.lastSize;
          if (!z && k && a > 0) {
            const E = k(a);
            if (Array.isArray(E))
              if (E.length === a) {
                F = E;
                let D = 0;
                for (const j of E) D += j;
                K = D / a;
              } else {
                let D = 0;
                for (const j of E) D += j;
                K = D / a;
              }
            else
              K = E / a;
          }
          if (z) {
            const E = ie(m.sizeTree, 0);
            let D = 0, j = 0;
            for (; D < a; ) {
              const X = m.groupIndices[j], ct = m.groupIndices.length === j + 1 ? 1 / 0 : m.groupIndices[j + 1] - X - 1;
              P.push({
                endIndex: X,
                size: E,
                startIndex: X
              }), P.push({
                endIndex: X + 1 + ct - 1,
                size: K,
                startIndex: X + 1
              }), j++, D += ct + 1;
            }
            const ft = At(m.sizeTree);
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
                ranges: P
              }
            ).ranges;
          }
          if (F) {
            const E = [];
            for (let D = 0; D < F.length; D++)
              E.push({ startIndex: D, endIndex: D, size: F[D] });
            for (const { k: D, v: j } of At(m.sizeTree))
              E.push({ startIndex: D + a, endIndex: D + a, size: j });
            return E;
          }
          return At(m.sizeTree).reduce(
            (E, { k: D, v: j }) => ({
              prevIndex: D + a,
              prevSize: j,
              ranges: [...E.ranges, { endIndex: D + a - 1, size: E.prevSize, startIndex: E.prevIndex }]
            }),
            {
              prevIndex: 0,
              prevSize: K,
              ranges: []
            }
          ).ranges;
        })
      ),
      n
    );
    const y = vt(
      I(
        i,
        U(c, h),
        O(([a, { offsetTree: m }, k]) => {
          const z = -a;
          return ce(z, m, k);
        })
      )
    );
    return V(
      I(
        i,
        U(c, h),
        O(([a, m, k]) => {
          if (m.groupIndices.length > 0) {
            if (tt(m.sizeTree))
              return m;
            let F = qt();
            const K = lt(g);
            let E = 0, D = 0, j = 0;
            for (; E < -a; ) {
              j = K[D];
              const gt = K[D + 1] - j - 1;
              D++, E += gt + 1;
            }
            if (F = At(m.sizeTree).reduce((gt, { k: X, v: ct }) => Tt(gt, Math.max(0, X + a), ct), F), E !== -a) {
              const gt = ie(m.sizeTree, j);
              F = Tt(F, 0, gt);
              const X = Rt(m.sizeTree, -a + 1)[1];
              F = Tt(F, 1, X);
            }
            return {
              ...m,
              sizeTree: F,
              ...Ae(m.offsetTree, 0, F, k)
            };
          }
          const P = At(m.sizeTree).reduce((F, { k: K, v: E }) => Tt(F, Math.max(0, K + a), E), qt());
          return {
            ...m,
            sizeTree: P,
            ...Ae(m.offsetTree, 0, P, k)
          };
        })
      ),
      c
    ), {
      beforeUnshiftWith: L,
      computePrependedHeight: H,
      // input
      data: C,
      defaultItemSize: f,
      firstItemIndex: l,
      fixedItemSize: d,
      fixedGroupSize: x,
      gap: h,
      groupIndices: u,
      heightEstimates: p,
      itemSize: S,
      listRefresh: w,
      shiftWith: i,
      shiftWithOffset: y,
      sizeRanges: n,
      // output
      sizes: c,
      statefulTotalCount: r,
      totalCount: o,
      trackItemSizes: b,
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
    return V(
      I(
        l,
        O((u) => u.totalCount)
      ),
      n
    ), V(
      I(
        l,
        O((u) => u.groupIndices)
      ),
      t
    ), V(
      I(
        dt(r, e, o),
        G(([u, d]) => be(d)),
        O(([u, d, f]) => Rt(d.groupOffsetTree, Math.max(u - f, 0), "v")[0]),
        nt(),
        O((u) => [u])
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
      scrollingInProgress: u,
      scrollTo: d,
      smoothScrollTargetReached: f,
      viewportHeight: x
    },
    { log: p }
  ]) => {
    const S = q(), C = q(), H = T(0);
    let h = null, v = null, c = null;
    function g() {
      h !== null && (h(), h = null), c !== null && (c(), c = null), v && (clearTimeout(v), v = null), N(u, !1);
    }
    return V(
      I(
        S,
        U(n, x, o, H, l, i, p),
        U(t, s, r),
        O(
          ([
            [b, w, L, y, a, m, k, z],
            P,
            F,
            K
          ]) => {
            const E = $n(b), { align: D, behavior: j, offset: ft } = E, gt = y - 1, X = Nn(E, w, gt);
            let ct = ce(X, w.offsetTree, P) + m;
            D === "end" ? (ct += F + Rt(w.sizeTree, X)[1] - L + K, X === gt && (ct += k)) : D === "center" ? ct += (F + Rt(w.sizeTree, X)[1] - L + K) / 2 : ct -= a, ft !== void 0 && ft !== 0 && (ct += ft);
            const Et = (mt) => {
              g(), mt ? (z("retrying to scroll to", { location: b }, ht.DEBUG), N(S, b)) : (N(C, !0), z("list did not change, scroll successful", {}, ht.DEBUG));
            };
            if (g(), j === "smooth") {
              let mt = !1;
              c = J(e, (Kt) => {
                mt = mt || Kt;
              }), h = yt(f, () => {
                Et(mt);
              });
            } else
              h = yt(I(e, Ao(150)), Et);
            return v = setTimeout(() => {
              g();
            }, 1200), N(u, !0), z("scrolling from index to", { behavior: j, index: X, top: ct }, ht.DEBUG), { behavior: j, top: ct };
          }
        )
      ),
      d
    ), {
      scrollTargetReached: C,
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
    const l = T(!0), u = T(0), d = T(!0);
    return V(
      I(
        i,
        U(u),
        G(([f, x]) => x !== 0),
        Ot(!1)
      ),
      l
    ), V(
      I(
        i,
        U(u),
        G(([f, x]) => x !== 0),
        Ot(!1)
      ),
      d
    ), J(
      I(
        dt(e, i),
        U(l, n, t, d),
        G(([[, f], x, { sizeTree: p }, S, C]) => f && (!tt(p) || Me(S)) && !x && !C),
        U(u)
      ),
      ([, f]) => {
        yt(r, () => {
          N(d, !0);
        }), Ue(4, () => {
          yt(o, () => {
            N(l, !0);
          }), N(s, f);
        });
      }
    ), {
      initialItemFinalLocationReached: d,
      initialTopMostItemIndex: u,
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
  const i = T(!1), l = T(!0), u = q(), d = q(), f = T(4), x = T(Wo), p = It(
    I(
      Le(I(A(r), $t(1), Ot(!0)), I(A(r), $t(1), Ot(!1), dn(100))),
      nt()
    ),
    !1
  ), S = It(
    I(Le(I(n, Ot(!0)), I(n, Ot(!1), dn(200))), nt()),
    !1
  );
  V(
    I(
      dt(A(r), A(x)),
      O(([c, g]) => c <= g),
      nt()
    ),
    l
  ), V(I(l, Ft(50)), d);
  const C = vt(
    I(
      dt(o, A(s), A(e), A(t), A(f)),
      kt((c, [{ scrollHeight: g, scrollTop: b }, w, L, y, a]) => {
        const m = b + w - g > -a, k = {
          scrollHeight: g,
          scrollTop: b,
          viewportHeight: w
        };
        if (m) {
          let P, F;
          return b > c.state.scrollTop ? (P = "SCROLLED_DOWN", F = c.state.scrollTop - b) : (P = "SIZE_DECREASED", F = c.state.scrollTop - b || c.scrollTopDelta), {
            atBottom: !0,
            atBottomBecause: P,
            scrollTopDelta: F,
            state: k
          };
        }
        let z;
        return k.scrollHeight > c.state.scrollHeight ? z = "SIZE_INCREASED" : w < c.state.viewportHeight ? z = "VIEWPORT_HEIGHT_DECREASING" : b < c.state.scrollTop ? z = "SCROLLING_UPWARDS" : z = "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM", {
          atBottom: !1,
          notAtBottomBecause: z,
          state: k
        };
      }, Mo),
      nt((c, g) => c !== void 0 && c.atBottom === g.atBottom)
    )
  ), H = It(
    I(
      o,
      kt(
        (c, { scrollHeight: g, scrollTop: b, viewportHeight: w }) => {
          if (!Un(c.scrollHeight, g)) {
            const L = g - (b + w) < 1;
            return c.scrollTop !== b && L ? {
              changed: !0,
              jump: c.scrollTop - b,
              scrollHeight: g,
              scrollTop: b
            } : {
              changed: !0,
              jump: 0,
              scrollHeight: g,
              scrollTop: b
            };
          }
          return {
            changed: !1,
            jump: 0,
            scrollHeight: g,
            scrollTop: b
          };
        },
        { changed: !1, jump: 0, scrollHeight: 0, scrollTop: 0 }
      ),
      G((c) => c.changed),
      O((c) => c.jump)
    ),
    0
  );
  V(
    I(
      C,
      O((c) => c.atBottom)
    ),
    i
  ), V(I(i, Ft(50)), u);
  const h = T(ne);
  V(
    I(
      o,
      O(({ scrollTop: c }) => c),
      nt(),
      kt(
        (c, g) => lt(S) ? { direction: c.direction, prevScrollTop: g } : { direction: g < c.prevScrollTop ? ue : ne, prevScrollTop: g },
        { direction: ne, prevScrollTop: 0 }
      ),
      O((c) => c.direction)
    ),
    h
  ), V(I(o, Ft(50), Ot(Go)), h);
  const v = T(0);
  return V(
    I(
      p,
      G((c) => !c),
      Ot(0)
    ),
    v
  ), V(
    I(
      r,
      Ft(100),
      U(p),
      G(([c, g]) => g),
      kt(([c, g], [b]) => [g, b], [0, 0]),
      O(([c, g]) => g - c)
    ),
    v
  ), {
    atBottomState: C,
    atBottomStateChange: u,
    atBottomThreshold: f,
    atTopStateChange: d,
    atTopThreshold: x,
    isAtBottom: i,
    isAtTop: l,
    isScrolling: p,
    lastJumpDueToItemResize: H,
    scrollDirection: h,
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
    const s = q(), i = T(0), l = T(0), u = T(0), d = It(
      I(
        dt(
          A(o),
          A(r),
          A(n),
          A(s, le),
          A(u),
          A(i),
          A(e),
          A(t),
          A(l)
        ),
        O(
          ([
            f,
            x,
            p,
            [S, C],
            H,
            h,
            v,
            c,
            g
          ]) => {
            const b = f - c, w = h + v, L = Math.max(p - b, 0);
            let y = hn;
            const a = In(g, ae), m = In(g, de);
            return S -= c, S += p + v, C += p + v, C -= c, S > f + w - a && (y = ue), C < f - L + x + m && (y = ne), y !== hn ? [
              Math.max(b - p - gn(H, ae, y) - a, 0),
              b - L - v + x + gn(H, de, y) + m
            ] : null;
          }
        ),
        G((f) => f !== null),
        nt(le)
      ),
      [0, 0]
    );
    return {
      increaseViewportBy: l,
      // input
      listBoundary: s,
      overscan: u,
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
  const { lastIndex: i, lastOffset: l, lastSize: u } = r;
  let d = 0, f = 0;
  if (t.length > 0) {
    d = t[0].offset;
    const H = t[t.length - 1];
    f = H.offset + H.size;
  }
  const x = n - i, p = l + x * u + (x - 1) * o, S = d, C = p - f;
  return {
    bottom: f,
    firstItemIndex: s,
    items: xn(t, r, s),
    offsetBottom: C,
    offsetTop: d,
    top: S,
    topItems: xn(e, r, s),
    topListHeight: e.reduce((H, h) => h.size + H, 0),
    totalCount: n
  };
}
function Kn(t, e, n, o, r, s) {
  let i = 0;
  if (n.groupIndices.length > 0)
    for (const f of n.groupIndices) {
      if (f - i >= t)
        break;
      i++;
    }
  const l = t + i, u = Ke(e, l), d = Array.from({ length: l }).map((f, x) => ({
    data: s[x + u],
    index: x + u,
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
  let l, u = 0;
  for (const d of t) {
    (!l || l.end < d.index) && (l = i.shift(), u = e.groupIndices.indexOf(l.start));
    let f;
    d.index === l.start ? f = {
      index: u,
      type: "group"
    } : f = {
      groupIndex: u,
      index: d.index - (u + 1) + n
    }, s.push({
      ...f,
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
    { listBoundary: i, topListHeight: l, visibleRange: u },
    { initialTopMostItemIndex: d, scrolledToInitialItem: f },
    { topListHeight: x },
    p,
    { didMount: S },
    { recalcInProgress: C }
  ]) => {
    const H = T([]), h = T(0), v = q(), c = T(0);
    V(s.topItemsIndexes, H);
    const g = It(
      I(
        dt(
          S,
          C,
          A(u, le),
          A(r),
          A(o),
          A(d),
          f,
          A(H),
          A(e),
          A(n),
          A(c),
          t
        ),
        G(([y, a, , m, , , , , , , , k]) => {
          const z = k !== void 0 && k.length !== m;
          return y && !a && !z;
        }),
        O(
          ([
            ,
            ,
            [y, a],
            m,
            k,
            z,
            P,
            F,
            K,
            E,
            D,
            j
          ]) => {
            const ft = k, { offsetTree: gt, sizeTree: X } = ft, ct = lt(h);
            if (m === 0)
              return { ...Be, totalCount: m };
            if (y === 0 && a === 0)
              return ct === 0 ? { ...Be, totalCount: m } : Kn(ct, z, k, K, E, j || []);
            if (tt(X))
              return ct > 0 ? null : Te(
                _o(Ke(z, m), ft, j),
                [],
                m,
                E,
                ft,
                K
              );
            const Et = [];
            if (F.length > 0) {
              const $ = F[0], Y = F[F.length - 1];
              let st = 0;
              for (const et of Yt(X, $, Y)) {
                const Q = et.value, ut = Math.max(et.start, $), St = Math.min(et.end, Y);
                for (let at = ut; at <= St; at++)
                  Et.push({ data: j?.[at], index: at, offset: st, size: Q }), st += Q;
              }
            }
            if (!P)
              return Te([], Et, m, E, ft, K);
            const mt = F.length > 0 ? F[F.length - 1] + 1 : 0, Kt = Bo(gt, y, a, mt);
            if (Kt.length === 0)
              return null;
            const Qt = m - 1, Bt = ye([], ($) => {
              for (const Y of Kt) {
                const st = Y.value;
                let et = st.offset, Q = Y.start;
                const ut = st.size;
                if (st.offset < y) {
                  Q += Math.floor((y - st.offset + E) / (ut + E));
                  const at = Q - Y.start;
                  et += at * ut + at * E;
                }
                Q < mt && (et += (mt - Q) * ut, Q = mt);
                const St = Math.min(Y.end, Qt);
                for (let at = Q; at <= St && !(et >= a); at++)
                  $.push({ data: j?.[at], index: at, offset: et, size: ut }), et += ut + E;
              }
            }), te = Sn(D, ae), R = Sn(D, de);
            if (Bt.length > 0 && (te > 0 || R > 0)) {
              const $ = Bt[0], Y = Bt[Bt.length - 1];
              if (te > 0 && $.index > mt) {
                const st = Math.min(te, $.index - mt), et = [];
                let Q = $.offset;
                for (let ut = $.index - 1; ut >= $.index - st; ut--) {
                  const at = Yt(X, ut, ut)[0]?.value ?? $.size;
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
            return Te(Bt, Et, m, E, ft, K);
          }
        ),
        //@ts-expect-error filter needs to be fixed
        G((y) => y !== null),
        nt()
      ),
      Be
    );
    V(
      I(
        t,
        G(Me),
        O((y) => y?.length)
      ),
      r
    ), V(
      I(
        g,
        O((y) => y.topListHeight)
      ),
      x
    ), V(x, l), V(
      I(
        g,
        O((y) => [y.top, y.bottom])
      ),
      i
    ), V(
      I(
        g,
        O((y) => y.items)
      ),
      v
    );
    const b = vt(
      I(
        g,
        G(({ items: y }) => y.length > 0),
        U(r, t),
        G(([{ items: y }, a]) => y[y.length - 1].originalIndex === a - 1),
        O(([, y, a]) => [y - 1, a]),
        nt(le),
        O(([y]) => y)
      )
    ), w = vt(
      I(
        g,
        Ft(200),
        G(({ items: y, topItems: a }) => y.length > 0 && y[0].originalIndex === a.length),
        O(({ items: y }) => y[0].index),
        nt()
      )
    ), L = vt(
      I(
        g,
        G(({ items: y }) => y.length > 0),
        O(({ items: y }) => {
          let a = 0, m = y.length - 1;
          for (; y[a].type === "group" && a < m; )
            a++;
          for (; y[m].type === "group" && m > a; )
            m--;
          return {
            endIndex: y[m].index,
            startIndex: y[a].index
          };
        }),
        nt(Mn)
      )
    );
    return {
      endReached: b,
      initialItemCount: h,
      itemsRendered: v,
      listState: g,
      minOverscanItemCount: c,
      rangeChanged: L,
      startReached: w,
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
        O(([l, u, d, f, x]) => l + u + d + f + x.offsetBottom + x.bottom)
      ),
      0
    );
    return V(A(i), s), { totalListHeight: i, totalListHeightChanged: s };
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
    { fixedFooterHeight: o, fixedHeaderHeight: r, headerHeight: s, scrollingInProgress: i, scrollTop: l, viewportHeight: u },
    { scrollToIndex: d }
  ]) => {
    const f = q();
    return V(
      I(
        f,
        U(e, u, n, s, r, o, l),
        U(t),
        O(([[x, p, S, C, H, h, v, c], g]) => {
          const { calculateViewLocation: b = Do, done: w, ...L } = x, y = Nn(x, p, C - 1), a = ce(y, p.offsetTree, g) + H + h, m = a + Rt(p.sizeTree, y)[1], k = c + h, z = c + S - v, P = b({
            itemBottom: m,
            itemTop: a,
            locationParams: L,
            viewportBottom: z,
            viewportTop: k
          });
          return P !== null ? w && yt(
            I(
              i,
              G((F) => !F),
              // skips the initial publish of false, and the cleanup call.
              // but if scrollingInProgress is true, we skip the initial publish.
              $t(lt(i) ? 1 : 2)
            ),
            w
          ) : w?.(), P;
        }),
        G((x) => x !== null)
      ),
      d
    ), {
      scrollIntoView: f
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
    { didMount: u, propsReady: d },
    { log: f },
    { scrollingInProgress: x },
    { context: p },
    { scrollIntoView: S }
  ]) => {
    const C = T(!1), H = q();
    let h = null;
    function v(w) {
      N(i, {
        align: "end",
        behavior: w,
        index: "LAST"
      });
    }
    J(
      I(
        dt(I(A(e), $t(1)), u),
        U(A(C), s, l, x),
        O(([[w, L], y, a, m, k]) => {
          let z = L && m, P = "auto";
          return z && (P = $o(y, a || k), z = z && P !== !1), { followOutputBehavior: P, shouldFollow: z, totalCount: w };
        }),
        G(({ shouldFollow: w }) => w)
      ),
      ({ followOutputBehavior: w, totalCount: L }) => {
        h !== null && (h(), h = null), lt(n) !== void 0 ? requestAnimationFrame(() => {
          lt(f)("following output to ", { totalCount: L }, ht.DEBUG), v(w);
        }) : h = yt(t, () => {
          lt(f)("following output to ", { totalCount: L }, ht.DEBUG), v(w), h = null;
        });
      }
    );
    function c(w) {
      const L = yt(r, (y) => {
        w && !y.atBottom && y.notAtBottomBecause === "SIZE_INCREASED" && h === null && (lt(f)("scrolling to bottom due to increased size", {}, ht.DEBUG), v("auto"));
      });
      setTimeout(L, 100);
    }
    J(
      I(
        dt(A(C), e, d),
        G(([w, , L]) => w !== !1 && L),
        kt(
          ({ value: w }, [, L]) => ({ refreshed: w === L, value: L }),
          { refreshed: !1, value: 0 }
        ),
        G(({ refreshed: w }) => w),
        U(C, e)
      ),
      ([, w]) => {
        lt(l) && c(w !== !1);
      }
    ), J(H, () => {
      c(lt(C) !== !1);
    }), J(dt(A(C), r), ([w, L]) => {
      w !== !1 && !L.atBottom && L.notAtBottomBecause === "VIEWPORT_HEIGHT_DECREASING" && v("auto");
    });
    const g = T(null), b = q();
    return V(
      Le(
        I(
          A(o),
          O((w) => w?.length ?? 0)
        ),
        I(A(e))
      ),
      b
    ), J(
      I(
        dt(I(b, $t(1)), u),
        U(A(g), l, x, p),
        O(([[w, L], y, a, m, k]) => L && a && y?.({ context: k, totalCount: w, scrollingInProgress: m })),
        G((w) => !!w),
        Ft(0)
      ),
      (w) => {
        h !== null && (h(), h = null), lt(n) !== void 0 ? requestAnimationFrame(() => {
          lt(f)("scrolling into view", {}), N(S, w);
        }) : h = yt(t, () => {
          lt(f)("scrolling into view", {}), N(S, w), h = null;
        });
      }
    ), { autoscrollToBottom: H, followOutput: C, scrollIntoViewOnChange: g };
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
  ([{ data: t, firstItemIndex: e, gap: n, sizes: o }, { initialTopMostItemIndex: r }, { initialItemCount: s, listState: i }, { didMount: l }]) => (V(
    I(
      l,
      U(s),
      G(([, u]) => u !== 0),
      U(r, o, e, n, t),
      O(([[, u], d, f, x, p, S = []]) => Kn(u, d, f, x, p, S))
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
        U(o),
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
              N(e, r);
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
    return V(
      I(
        t,
        U(o, e, n),
        G(([r, s]) => s !== !1 && s !== void 0),
        O(([r, s, i, l]) => {
          const { enter: u, exit: d } = s;
          if (i) {
            if (d(r, l))
              return !1;
          } else if (u(r, l))
            return !0;
          return i;
        }),
        nt()
      ),
      e
    ), J(
      I(dt(e, t, n), U(o)),
      ([[r, s, i], l]) => {
        r && l !== !1 && l !== void 0 && l.change && l.change(s, i);
      }
    ), { isSeeking: e, scrollSeekConfiguration: o, scrollSeekRangeChanged: n, scrollVelocity: t };
  },
  rt(pe),
  { singleton: !0 }
), qe = Z(([{ scrollContainerState: t, scrollTo: e }]) => {
  const n = q(), o = q(), r = q(), s = T(!1), i = T(void 0);
  return V(
    I(
      dt(n, o),
      O(([{ scrollTop: l, viewportHeight: u }, { offsetTop: d, listHeight: f }]) => ({
        scrollHeight: f,
        scrollTop: Math.max(0, l - d),
        viewportHeight: u
      }))
    ),
    t
  ), V(
    I(
      e,
      U(o),
      O(([l, { offsetTop: u }]) => ({
        ...l,
        top: l.top + u
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
    { useWindowScroll: i, windowScrollContainerState: l, windowViewportRect: u }
  ]) => {
    const d = q(), f = T(void 0), x = T(null), p = T(null);
    return V(l, x), V(u, p), J(
      I(
        d,
        U(e, o, i, x, p, n)
      ),
      ([S, C, H, h, v, c, g]) => {
        const b = ko(C.sizeTree);
        h && v !== null && c !== null && (H = v.scrollTop - c.offsetTop), H -= g, S({ ranges: b, scrollTop: H });
      }
    ), V(I(f, G(Me), O(Yo)), r), V(
      I(
        s,
        U(f),
        G(([, S]) => S !== void 0),
        nt(),
        O(([, S]) => S.ranges)
      ),
      t
    ), {
      getState: d,
      restoreStateFrom: f
    };
  },
  rt(Lt, xt, me, Wt, qe)
);
function Yo(t) {
  return { align: "start", index: 0, offset: t.scrollTop };
}
const Zo = Z(([{ topItemsIndexes: t }]) => {
  const e = T(0);
  return V(
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
    { listState: u },
    { beforeUnshiftWith: d, computePrependedHeight: f, gap: x, shiftWithOffset: p, sizes: S },
    { log: C },
    { recalcInProgress: H }
  ]) => {
    const h = vt(
      I(
        u,
        U(i),
        kt(
          ([, c, g, b], [{ bottom: w, items: L, offsetBottom: y, totalCount: a }, m]) => {
            const k = w + y;
            let z = 0;
            return g === a && c.length > 0 && L.length > 0 && (L[0].originalIndex === 0 && c[0].originalIndex === 0 || (z = k - b, z !== 0 && (z += m))), [z, L, a, k];
          },
          [0, [], 0, 0]
        ),
        G(([c]) => c !== 0),
        U(o, l, n, r, C, H),
        G(([, c, g, b, , , w]) => !w && !b && c !== 0 && g === ue),
        O(([[c], , , , , g]) => (g("Upward scrolling compensation", { amount: c }, ht.DEBUG), c))
      )
    );
    function v(c) {
      c > 0 ? (N(e, { behavior: "auto", top: -c }), N(t, 0)) : (N(t, 0), N(e, { behavior: "auto", top: -c }));
    }
    return J(I(h, U(t, s)), ([c, g, b]) => {
      b && Xo() ? N(t, g - c) : v(-c);
    }), J(
      I(
        dt(It(s, !1), t, H),
        G(([c, g, b]) => !c && !b && g !== 0),
        O(([c, g]) => g),
        Ft(1)
      ),
      v
    ), V(
      I(
        p,
        O((c) => ({ top: -c }))
      ),
      e
    ), J(
      I(
        d,
        U(S, x, f),
        O(([c, { groupIndices: g, lastSize: b, sizeTree: w }, L, y]) => {
          function a(F) {
            return F * (b + L);
          }
          if (y && g.length === 0) {
            const F = y(c);
            if (Array.isArray(F)) {
              let K = 0;
              for (const E of F) K += E;
              return K;
            }
            return F;
          }
          if (g.length === 0)
            return a(c);
          let m = 0;
          const k = ie(w, 0);
          let z = 0, P = 0;
          for (; z < c; ) {
            z++, m += k;
            let F = g.length === P + 1 ? 1 / 0 : g[P + 1] - g[P] - 1;
            z + F > c && (m -= k, F = c - z + 1), z += F, m += a(F), P++;
          }
          return m;
        })
      ),
      (c) => {
        N(t, c), requestAnimationFrame(() => {
          N(e, { top: c }), requestAnimationFrame(() => {
            N(t, 0), N(H, !1);
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
    u,
    d,
    f
  ]) => ({
    ...t,
    ...e,
    ...n,
    ...o,
    ...r,
    ...s,
    ...i,
    ...l,
    ...u,
    ...d,
    ...f
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
      heightEstimates: u,
      itemSize: d,
      sizeRanges: f,
      sizes: x,
      statefulTotalCount: p,
      totalCount: S,
      trackItemSizes: C
    },
    { initialItemFinalLocationReached: H, initialTopMostItemIndex: h, scrolledToInitialItem: v },
    c,
    g,
    b,
    w,
    { scrollToIndex: L },
    y,
    { topItemCount: a },
    { groupCounts: m },
    k
  ]) => {
    const { listState: z, minOverscanItemCount: P, topItemsIndexes: F, rangeChanged: K, ...E } = w;
    return V(K, k.scrollSeekRangeChanged), V(
      I(
        k.windowViewportRect,
        O((D) => D.visibleHeight)
      ),
      c.viewportHeight
    ), {
      computePrependedHeight: t,
      data: e,
      defaultItemHeight: n,
      firstItemIndex: o,
      fixedItemHeight: r,
      fixedGroupHeight: s,
      gap: i,
      groupCounts: m,
      heightEstimates: u,
      initialItemFinalLocationReached: H,
      initialTopMostItemIndex: h,
      scrolledToInitialItem: v,
      sizeRanges: f,
      topItemCount: a,
      topItemsIndexes: F,
      // input
      totalCount: S,
      ...b,
      groupIndices: l,
      itemSize: d,
      listState: z,
      minOverscanItemCount: P,
      scrollToIndex: L,
      // output
      statefulTotalCount: p,
      trackItemSizes: C,
      // exported from stateFlagsSystem
      rangeChanged: K,
      ...E,
      // the bag of IO from featureGroup1System
      ...k,
      ...c,
      sizes: x,
      ...g
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
  function u(v, c) {
    v.propsReady !== void 0 && N(v.propsReady, !1);
    for (const g of o) {
      const b = v[e.required[g]];
      N(b, c[g]);
    }
    for (const g of r)
      if (g in c) {
        const b = v[e.optional[g]];
        N(b, c[g]);
      }
    v.propsReady !== void 0 && N(v.propsReady, !0);
  }
  function d(v) {
    return s.reduce((c, g) => (c[g] = (b) => {
      const w = v[e.methods[g]];
      N(w, b);
    }, c), {});
  }
  function f(v) {
    return i.reduce((c, g) => (c[g] = Io(v[e.events[g]]), c), {});
  }
  const x = B.forwardRef(function(c, g) {
    const { children: b, ...w } = c, [L] = B.useState(() => ye(So(t), (m) => {
      u(m, w);
    })), [y] = B.useState(an(f, L));
    Ie(() => {
      for (const m of i)
        m in w && J(y[m], w[m]);
      return () => {
        Object.values(y).map(We);
      };
    }, [w, y, L]), Ie(() => {
      u(L, w);
    }), B.useImperativeHandle(g, un(d(L)));
    const a = n;
    return /* @__PURE__ */ M(l.Provider, { value: L, children: n !== void 0 ? /* @__PURE__ */ M(a, { ...tr([...o, ...r, ...i], w), children: b }) : b });
  }), p = (v) => {
    const c = B.useContext(l);
    return B.useCallback(
      (g) => {
        N(c[v], g);
      },
      [c, v]
    );
  }, S = (v) => {
    const g = B.useContext(l)[v], b = B.useCallback(
      (w) => J(g, w),
      [g]
    );
    return B.useSyncExternalStore(
      b,
      () => lt(g),
      () => lt(g)
    );
  }, C = (v) => {
    const g = B.useContext(l)[v], [b, w] = B.useState(an(lt, g));
    return Ie(
      () => J(g, (L) => {
        L !== b && w(un(L));
      }),
      [g, b]
    ), b;
  }, H = parseInt(B.version) >= 18 ? S : C;
  return {
    Component: x,
    useEmitter: (v, c) => {
      const b = B.useContext(l)[v];
      Ie(() => J(b, c), [c, b]);
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
  const i = B.useRef(null), l = B.useRef(null), u = B.useRef(null), d = B.useCallback(
    (p) => {
      let S, C, H;
      const h = p.target;
      if (er(h) || ke(h)) {
        const c = ke(h) ? h : h.defaultView;
        H = s === !0 ? c.scrollX : c.scrollY, S = s === !0 ? c.document.documentElement.scrollWidth : c.document.documentElement.scrollHeight, C = s === !0 ? c.innerWidth : c.innerHeight;
      } else
        H = s === !0 ? h.scrollLeft : h.scrollTop, S = s === !0 ? h.scrollWidth : h.scrollHeight, C = s === !0 ? h.offsetWidth : h.offsetHeight;
      const v = () => {
        t({
          scrollHeight: S,
          scrollTop: Math.max(H, 0),
          viewportHeight: C
        });
      };
      p.suppressFlushSync === !0 ? v() : ao.flushSync(v), l.current !== null && (H === l.current || H <= 0 || H === S - C) && (l.current = null, e(!0), u.current && (clearTimeout(u.current), u.current = null));
    },
    [t, e, s]
  );
  B.useEffect(() => {
    const p = r || i.current;
    return o(r || i.current), d({ suppressFlushSync: !0, target: p }), p.addEventListener("scroll", d, { passive: !0 }), () => {
      o(null), p.removeEventListener("scroll", d);
    };
  }, [i, d, n, o, r]);
  function f(p) {
    const S = i.current;
    if (!S || (s === !0 ? "offsetWidth" in S && S.offsetWidth === 0 : "offsetHeight" in S && S.offsetHeight === 0))
      return;
    const C = p.behavior === "smooth";
    let H, h, v;
    ke(S) ? (h = Math.max(
      Ht(S.document.documentElement, s === !0 ? "width" : "height"),
      s === !0 ? S.document.documentElement.scrollWidth : S.document.documentElement.scrollHeight
    ), H = s === !0 ? S.innerWidth : S.innerHeight, v = s === !0 ? window.scrollX : window.scrollY) : (h = S[s === !0 ? "scrollWidth" : "scrollHeight"], H = Ht(S, s === !0 ? "width" : "height"), v = S[s === !0 ? "scrollLeft" : "scrollTop"]);
    const c = h - H;
    if (p.top = Math.ceil(Math.max(Math.min(c, p.top), 0)), Un(H, h) || p.top === v) {
      t({ scrollHeight: h, scrollTop: v, viewportHeight: H }), C && e(!0);
      return;
    }
    C ? (l.current = p.top, u.current && clearTimeout(u.current), u.current = setTimeout(() => {
      u.current = null, l.current = null, e(!0);
    }, 1e3)) : l.current = null, s === !0 && (p = { ...p.behavior !== void 0 ? { behavior: p.behavior } : {}, left: p.top }), S.scrollTo(p);
  }
  function x(p) {
    s === !0 && (p = {
      ...p.behavior !== void 0 ? { behavior: p.behavior } : {},
      ...p.top !== void 0 ? { left: p.top } : {}
    }), i.current.scrollBy(p);
  }
  return { scrollByCallback: x, scrollerRef: i, scrollToCallback: f };
}
function Xe(t) {
  return t;
}
const nr = /* @__PURE__ */ Z(() => {
  const t = T((l) => `Item ${l}`), e = T((l) => `Group ${l}`), n = T({}), o = T(Xe), r = T("div"), s = T(Xt), i = (l, u = null) => It(
    I(
      n,
      O((d) => d[l]),
      nt()
    ),
    u
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
  const n = W("listState"), o = Ct("sizeRanges"), r = W("useWindowScroll"), s = W("customScrollParent"), i = Ct("windowScrollContainerState"), l = Ct("scrollContainerState"), u = s || r ? i : l, d = W("itemContent"), f = W("context"), x = W("groupContent"), p = W("trackItemSizes"), S = W("itemSize"), C = W("log"), H = Ct("gap"), h = W("horizontalDirection"), { callbackRef: v } = Ln(
    o,
    S,
    p,
    e ? Xt : u,
    C,
    H,
    s,
    h,
    W("skipAnimationFrameInResizeObserver")
  ), [c, g] = B.useState(0);
  tn("deviation", (E) => {
    c !== E && g(E);
  });
  const b = W("EmptyPlaceholder"), w = W("ScrollSeekPlaceholder") ?? rr, L = W("ListComponent"), y = W("ItemComponent"), a = W("GroupComponent"), m = W("computeItemKey"), k = W("isSeeking"), z = W("groupIndices").length > 0, P = W("alignToBottom"), F = W("initialItemFinalLocationReached"), K = e ? {} : {
    boxSizing: "border-box",
    ...h ? {
      display: "inline-block",
      height: "100%",
      marginLeft: c !== 0 ? c : P ? "auto" : 0,
      paddingLeft: n.offsetTop,
      paddingRight: n.offsetBottom,
      whiteSpace: "nowrap"
    } : {
      marginTop: c !== 0 ? c : P ? "auto" : 0,
      paddingBottom: n.offsetBottom,
      paddingTop: n.offsetTop
    },
    ...F ? {} : { visibility: "hidden" }
  };
  return !e && n.totalCount === 0 && b !== null && b !== void 0 ? /* @__PURE__ */ M(b, { ...ot(b, f) }) : /* @__PURE__ */ M(
    L,
    {
      ...ot(L, f),
      "data-testid": e ? "virtuoso-top-item-list" : "virtuoso-item-list",
      ref: v,
      style: K,
      children: (e ? n.topItems : n.items).map((E) => {
        const D = E.originalIndex, j = m(D + n.firstItemIndex, E.data, f);
        return k ? /* @__PURE__ */ Nt(
          w,
          {
            ...ot(w, f),
            height: E.size,
            index: E.index,
            key: j,
            type: E.type || "item",
            ...E.type === "group" ? {} : { groupIndex: E.groupIndex }
          }
        ) : E.type === "group" ? /* @__PURE__ */ Nt(
          a,
          {
            ...ot(a, f),
            "data-index": D,
            "data-item-index": E.index,
            "data-known-size": E.size,
            key: j,
            style: sr
          },
          x(E.index, f)
        ) : /* @__PURE__ */ Nt(
          y,
          {
            ...ot(y, f),
            ...oo(y, E.data),
            "data-index": D,
            "data-item-group-index": E.groupIndex,
            "data-item-index": E.index,
            "data-known-size": E.size,
            key: j,
            style: h ? ir : no
          },
          z ? d(E.index, E.groupIndex, E.data, f) : d(E.index, E.data, f)
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
  const e = W("HeaderComponent"), n = Ct("headerHeight"), o = W("HeaderFooterTag"), r = zt(
    B.useMemo(
      () => (i) => {
        n(Ht(i, "height"));
      },
      [n]
    ),
    !0,
    W("skipAnimationFrameInResizeObserver")
  ), s = W("context");
  return e != null ? /* @__PURE__ */ M(o, { ref: r, children: /* @__PURE__ */ M(e, { ...ot(e, s) }) }) : null;
}), dr = /* @__PURE__ */ B.memo(function() {
  const e = W("FooterComponent"), n = Ct("footerHeight"), o = W("HeaderFooterTag"), r = zt(
    B.useMemo(
      () => (i) => {
        n(Ht(i, "height"));
      },
      [n]
    ),
    !0,
    W("skipAnimationFrameInResizeObserver")
  ), s = W("context");
  return e != null ? /* @__PURE__ */ M(o, { ref: r, children: /* @__PURE__ */ M(e, { ...ot(e, s) }) }) : null;
});
function Je({ useEmitter: t, useEmitterValue: e, usePublisher: n }) {
  return B.memo(function({ children: s, style: i, context: l, ...u }) {
    const d = n("scrollContainerState"), f = e("ScrollerComponent"), x = n("smoothScrollTargetReached"), p = e("scrollerRef"), S = e("horizontalDirection") || !1, { scrollByCallback: C, scrollerRef: H, scrollToCallback: h } = eo(
      d,
      x,
      f,
      p,
      void 0,
      S
    );
    return t("scrollTo", h), t("scrollBy", C), /* @__PURE__ */ M(
      f,
      {
        "data-testid": "virtuoso-scroller",
        "data-virtuoso-scroller": !0,
        ref: H,
        style: { ...S ? cr : lr, ...i },
        tabIndex: 0,
        ...u,
        ...ot(f, l),
        children: s
      }
    );
  });
}
function Qe({ useEmitter: t, useEmitterValue: e, usePublisher: n }) {
  return B.memo(function({ children: s, style: i, context: l, ...u }) {
    const d = n("windowScrollContainerState"), f = e("ScrollerComponent"), x = n("smoothScrollTargetReached"), p = e("totalListHeight"), S = e("deviation"), C = e("customScrollParent"), H = B.useRef(null), h = e("scrollerRef"), { scrollByCallback: v, scrollerRef: c, scrollToCallback: g } = eo(
      d,
      x,
      f,
      h,
      C
    );
    return to(() => (c.current = C || H.current?.ownerDocument.defaultView, () => {
      c.current = null;
    }), [c, C]), t("windowScrollTo", g), t("scrollBy", v), /* @__PURE__ */ M(
      f,
      {
        ref: H,
        "data-virtuoso-scroller": !0,
        style: { position: "relative", ...i, ...p !== 0 ? { height: p + S } : void 0 },
        ...u,
        ...ot(f, l),
        children: s
      }
    );
  });
}
const fr = ({ children: t }) => {
  const e = B.useContext(Re), n = Ct("viewportHeight"), o = Ct("fixedItemHeight"), r = W("alignToBottom"), s = W("horizontalDirection"), i = B.useMemo(
    () => re(n, (u) => Ht(u, s ? "width" : "height")),
    [n, s]
  ), l = zt(i, !0, W("skipAnimationFrameInResizeObserver"));
  return B.useEffect(() => {
    e && (n(e.viewportHeight), o(e.itemHeight));
  }, [e, n, o]), /* @__PURE__ */ M("div", { "data-viewport-type": "element", ref: l, style: Jt(r), children: t });
}, mr = ({ children: t }) => {
  const e = B.useContext(Re), n = Ct("windowViewportRect"), o = Ct("fixedItemHeight"), r = W("customScrollParent"), s = Ne(
    n,
    r,
    W("skipAnimationFrameInResizeObserver")
  ), i = W("alignToBottom");
  return B.useEffect(() => {
    e && (o(e.itemHeight), n({ listHeight: 0, offsetTop: 0, visibleHeight: e.viewportHeight, visibleWidth: 100 }));
  }, [e, n, o]), /* @__PURE__ */ M("div", { "data-viewport-type": "window", ref: s, style: Jt(i), children: t });
}, pr = ({ children: t }) => {
  const e = W("TopItemListComponent") ?? "div", n = W("headerHeight"), o = { ...ur, marginTop: `${n}px` }, r = W("context");
  return /* @__PURE__ */ M(e, { style: o, ...ot(e, r), children: t });
}, hr = /* @__PURE__ */ B.memo(function(e) {
  const n = W("useWindowScroll"), o = W("topItemsIndexes").length > 0, r = W("customScrollParent"), s = W("context");
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
  useEmitterValue: W,
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
), gr = /* @__PURE__ */ Je({ useEmitter: tn, useEmitterValue: W, usePublisher: Ct }), Ir = /* @__PURE__ */ Qe({ useEmitter: tn, useEmitterValue: W, usePublisher: Ct }), qr = ro, Yr = ro, xr = /* @__PURE__ */ Z(() => {
  const t = T((d) => /* @__PURE__ */ Dt("td", { children: [
    "Item $",
    d
  ] })), e = T(null), n = T((d) => /* @__PURE__ */ Dt("td", { colSpan: 1e3, children: [
    "Group ",
    d
  ] })), o = T(null), r = T(null), s = T({}), i = T(Xe), l = T(Xt), u = (d, f = null) => It(
    I(
      s,
      O((x) => x[d]),
      nt()
    ),
    f
  );
  return {
    components: s,
    computeItemKey: i,
    context: e,
    EmptyPlaceholder: u("EmptyPlaceholder"),
    FillerRow: u("FillerRow"),
    fixedFooterContent: r,
    fixedHeaderContent: o,
    itemContent: t,
    groupContent: n,
    ScrollerComponent: u("Scroller", "div"),
    scrollerRef: l,
    ScrollSeekPlaceholder: u("ScrollSeekPlaceholder"),
    TableBodyComponent: u("TableBody", "tbody"),
    TableComponent: u("Table", "table"),
    TableFooterComponent: u("TableFoot", "tfoot"),
    TableHeadComponent: u("TableHead", "thead"),
    TableRowComponent: u("TableRow", "tr"),
    GroupComponent: u("Group", "tr")
  };
}), Sr = /* @__PURE__ */ Z(
  ([t, e]) => ({ ...t, ...e }),
  rt(Jn, xr)
), Tr = ({ height: t }) => /* @__PURE__ */ M("tr", { children: /* @__PURE__ */ M("td", { style: { height: t } }) }), vr = ({ height: t }) => /* @__PURE__ */ M("tr", { children: /* @__PURE__ */ M("td", { style: { border: 0, height: t, padding: 0 } }) }), Cr = { overflowAnchor: "none" }, wn = { position: Ze(), zIndex: 2, overflowAnchor: "none" }, yn = /* @__PURE__ */ B.memo(function({ showTopList: e = !1 }) {
  const n = _("listState"), o = _("computeItemKey"), r = _("firstItemIndex"), s = _("context"), i = _("isSeeking"), l = _("fixedHeaderHeight"), u = _("groupIndices").length > 0, d = _("itemContent"), f = _("groupContent"), x = _("ScrollSeekPlaceholder") ?? Tr, p = _("GroupComponent"), S = _("TableRowComponent"), C = (e ? n.topItems : []).reduce((h, v, c) => (c === 0 ? h.push(v.size) : h.push(h[c - 1] + v.size), h), []);
  return (e ? n.topItems : n.items).map((h) => {
    const v = h.originalIndex, c = o(v + r, h.data, s), g = e ? v === 0 ? 0 : C[v - 1] : 0;
    return i ? /* @__PURE__ */ Nt(
      x,
      {
        ...ot(x, s),
        height: h.size,
        index: h.index,
        key: c,
        type: h.type || "item"
      }
    ) : h.type === "group" ? /* @__PURE__ */ Nt(
      p,
      {
        ...ot(p, s),
        "data-index": v,
        "data-item-index": h.index,
        "data-known-size": h.size,
        key: c,
        style: {
          ...wn,
          top: l
        }
      },
      f(h.index, s)
    ) : /* @__PURE__ */ Nt(
      S,
      {
        ...ot(S, s),
        ...oo(S, h.data),
        "data-index": v,
        "data-item-index": h.index,
        "data-known-size": h.size,
        "data-item-group-index": h.groupIndex,
        key: c,
        style: e ? { ...wn, top: l + g } : Cr
      },
      u ? d(h.index, h.groupIndex, h.data, s) : d(h.index, h.data, s)
    );
  });
}), wr = /* @__PURE__ */ B.memo(function() {
  const e = _("listState"), n = _("topItemsIndexes").length > 0, o = bt("sizeRanges"), r = _("useWindowScroll"), s = _("customScrollParent"), i = bt("windowScrollContainerState"), l = bt("scrollContainerState"), u = s || r ? i : l, d = _("trackItemSizes"), f = _("itemSize"), x = _("log"), { callbackRef: p, ref: S } = Ln(
    o,
    f,
    d,
    u,
    x,
    void 0,
    s,
    !1,
    _("skipAnimationFrameInResizeObserver")
  ), [C, H] = B.useState(0);
  en("deviation", (z) => {
    C !== z && (S.current.style.marginTop = `${z}px`, H(z));
  });
  const h = _("EmptyPlaceholder"), v = _("FillerRow") ?? vr, c = _("TableBodyComponent"), g = _("paddingTopAddition"), b = _("statefulTotalCount"), w = _("context");
  if (b === 0 && h !== null && h !== void 0)
    return /* @__PURE__ */ M(h, { ...ot(h, w) });
  const L = (n ? e.topItems : []).reduce((z, P) => z + P.size, 0), y = e.offsetTop + g + C - L, a = e.offsetBottom, m = y > 0 ? /* @__PURE__ */ M(v, { context: w, height: y }, "padding-top") : null, k = a > 0 ? /* @__PURE__ */ M(v, { context: w, height: a }, "padding-bottom") : null;
  return /* @__PURE__ */ Dt(c, { "data-testid": "virtuoso-item-list", ref: p, ...ot(c, w), children: [
    m,
    n && /* @__PURE__ */ M(yn, { showTopList: !0 }),
    /* @__PURE__ */ M(yn, {}),
    k
  ] });
}), yr = ({ children: t }) => {
  const e = B.useContext(Re), n = bt("viewportHeight"), o = bt("fixedItemHeight"), r = zt(
    B.useMemo(() => re(n, (s) => Ht(s, "height")), [n]),
    !0,
    _("skipAnimationFrameInResizeObserver")
  );
  return B.useEffect(() => {
    e && (n(e.viewportHeight), o(e.itemHeight));
  }, [e, n, o]), /* @__PURE__ */ M("div", { "data-viewport-type": "element", ref: r, style: Jt(!1), children: t });
}, br = ({ children: t }) => {
  const e = B.useContext(Re), n = bt("windowViewportRect"), o = bt("fixedItemHeight"), r = _("customScrollParent"), s = Ne(
    n,
    r,
    _("skipAnimationFrameInResizeObserver")
  );
  return B.useEffect(() => {
    e && (o(e.itemHeight), n({ listHeight: 0, offsetTop: 0, visibleHeight: e.viewportHeight, visibleWidth: 100 }));
  }, [e, n, o]), /* @__PURE__ */ M("div", { "data-viewport-type": "window", ref: s, style: Jt(!1), children: t });
}, Rr = /* @__PURE__ */ B.memo(function(e) {
  const n = _("useWindowScroll"), o = _("customScrollParent"), r = bt("fixedHeaderHeight"), s = bt("fixedFooterHeight"), i = _("fixedHeaderContent"), l = _("fixedFooterContent"), u = _("context"), d = zt(
    B.useMemo(() => re(r, (c) => Ht(c, "height")), [r]),
    !0,
    _("skipAnimationFrameInResizeObserver")
  ), f = zt(
    B.useMemo(() => re(s, (c) => Ht(c, "height")), [s]),
    !0,
    _("skipAnimationFrameInResizeObserver")
  ), x = o || n ? Er : Hr, p = o || n ? br : yr, S = _("TableComponent"), C = _("TableHeadComponent"), H = _("TableFooterComponent"), h = i ? /* @__PURE__ */ M(
    C,
    {
      ref: d,
      style: { position: "sticky", top: 0, zIndex: 2 },
      ...ot(C, u),
      children: i()
    },
    "TableHead"
  ) : null, v = l ? /* @__PURE__ */ M(
    H,
    {
      ref: f,
      style: { bottom: 0, position: "sticky", zIndex: 1 },
      ...ot(H, u),
      children: l()
    },
    "TableFoot"
  ) : null;
  return /* @__PURE__ */ M(x, { ...e, ...ot(x, u), children: /* @__PURE__ */ M(p, { children: /* @__PURE__ */ Dt(S, { style: { borderSpacing: 0, overflowAnchor: "none" }, ...ot(S, u), children: [
    h,
    /* @__PURE__ */ M(wr, {}, "TableBody"),
    v
  ] }) }) });
}), {
  Component: so,
  useEmitter: en,
  useEmitterValue: _,
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
), Hr = /* @__PURE__ */ Je({ useEmitter: en, useEmitterValue: _, usePublisher: bt }), Er = /* @__PURE__ */ Qe({ useEmitter: en, useEmitterValue: _, usePublisher: bt }), Zr = so, Xr = so, bn = {
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
    { footerHeight: r, headerHeight: s, scrollBy: i, scrollContainerState: l, scrollTo: u, scrollTop: d, smoothScrollTargetReached: f, viewportHeight: x },
    p,
    S,
    { didMount: C, propsReady: H },
    { customScrollParent: h, useWindowScroll: v, windowScrollContainerState: c, windowScrollTo: g, windowViewportRect: b },
    w
  ]) => {
    const L = T(0), y = T(0), a = T(bn), m = T({ height: 0, width: 0 }), k = T({ height: 0, width: 0 }), z = q(), P = q(), F = T(0), K = T(null), E = T({ column: 0, row: 0 }), D = q(), j = q(), ft = T(!1), gt = T(0), X = T(!0), ct = T(!1), Et = T(!1);
    J(
      I(
        C,
        U(gt),
        G(([R, $]) => $ !== 0)
      ),
      () => {
        N(X, !1);
      }
    ), J(
      I(
        dt(C, X, k, m, gt, ct),
        G(([R, $, Y, st, , et]) => R && !$ && Y.height !== 0 && st.height !== 0 && !et)
      ),
      ([, , , , R]) => {
        N(ct, !0), Ue(1, () => {
          N(z, R);
        }), yt(I(d), () => {
          N(e, [0, 0]), N(X, !0);
        });
      }
    ), V(
      I(
        j,
        G((R) => R != null && R.scrollTop > 0),
        Ot(0)
      ),
      y
    ), J(
      I(
        C,
        U(j),
        G(([, R]) => R != null)
      ),
      ([, R]) => {
        R && (N(m, R.viewport), N(k, R.item), N(E, R.gap), R.scrollTop > 0 && (N(ft, !0), yt(I(d, $t(1)), ($) => {
          N(ft, !1);
        }), N(u, { top: R.scrollTop })));
      }
    ), V(
      I(
        m,
        O(({ height: R }) => R)
      ),
      x
    ), V(
      I(
        dt(
          A(m, xe),
          A(k, xe),
          A(E, (R, $) => R !== void 0 && R.column === $.column && R.row === $.row),
          A(d)
        ),
        O(([R, $, Y, st]) => ({
          gap: Y,
          item: $,
          scrollTop: st,
          viewport: R
        }))
      ),
      D
    ), V(
      I(
        dt(
          A(L),
          o,
          A(E, kr),
          A(k, xe),
          A(m, xe),
          A(K),
          A(y),
          A(ft),
          A(X),
          A(gt)
        ),
        G(([, , , , , , , R]) => !R),
        O(
          ([
            R,
            [$, Y],
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
            at ? $ === 0 && Y === 0 && St > 0 ? (jt = 0, _t = St - 1) : (jt = ge * Ce(($ + ee) / (he + ee)), _t = ge * Rn((Y + ee) / (he + ee)) - 1, _t = ze(R - 1, oe(_t, ge - 1)), jt = ze(_t, oe(0, jt))) : (jt = 0, _t = -1);
            const on = En(jt, _t, ut), { bottom: rn, top: sn } = Bn(Q, st, et, on), ln = Rn(R / ge), co = ln * he + (ln - 1) * ee - rn;
            return { bottom: rn, itemHeight: he, items: on, itemWidth: He, offsetBottom: co, offsetTop: sn, top: sn };
          }
        )
      ),
      a
    ), V(
      I(
        K,
        G((R) => R !== null),
        O((R) => R.length)
      ),
      L
    ), V(
      I(
        dt(m, k, a, E),
        G(([R, $, { items: Y }]) => Y.length > 0 && $.height !== 0 && R.height !== 0),
        O(([R, $, { items: Y }, st]) => {
          const { bottom: et, top: Q } = Bn(R, st, $, Y);
          return [Q, et];
        }),
        nt(le)
      ),
      e
    );
    const mt = T(!1);
    V(
      I(
        d,
        U(mt),
        O(([R, $]) => $ || R !== 0)
      ),
      mt
    );
    const Kt = vt(
      I(
        dt(a, L),
        G(([{ items: R }]) => R.length > 0),
        U(mt),
        G(([[R, $], Y]) => {
          const et = R.items[R.items.length - 1].index === $ - 1;
          return (Y || R.bottom > 0 && R.itemHeight > 0 && R.offsetBottom === 0 && R.items.length === $) && et;
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
        U(ft),
        G(([{ items: R }, $]) => R.length > 0 && !$),
        O(([{ items: R }]) => ({
          endIndex: R[R.length - 1].index,
          startIndex: R[0].index
        })),
        nt(Mn),
        Ft(0)
      )
    );
    V(Bt, S.scrollSeekRangeChanged), V(
      I(
        z,
        U(m, k, L, E),
        O(([R, $, Y, st, et]) => {
          const Q = $n(R), { align: ut, behavior: St, offset: at } = Q;
          let Vt = Q.index;
          Vt === "LAST" && (Vt = st - 1), Vt = oe(0, Vt, ze(st - 1, Vt));
          let Pt = Ge($, et, Y, Vt);
          return ut === "end" ? Pt = Hn(Pt - $.height + Y.height) : ut === "center" && (Pt = Hn(Pt - $.height / 2 + Y.height / 2)), at !== void 0 && at !== 0 && (Pt += at), { behavior: St, top: Pt };
        })
      ),
      u
    );
    const te = It(
      I(
        a,
        O((R) => R.offsetBottom + R.bottom)
      ),
      0
    );
    return V(
      I(
        b,
        O((R) => ({ height: R.visibleHeight, width: R.visibleWidth }))
      ),
      m
    ), {
      customScrollParent: h,
      // input
      data: K,
      deviation: F,
      footerHeight: r,
      gap: E,
      headerHeight: s,
      increaseViewportBy: t,
      initialItemCount: y,
      itemDimensions: k,
      overscan: n,
      restoreStateFrom: j,
      scrollBy: i,
      scrollContainerState: l,
      scrollHeight: P,
      scrollTo: u,
      scrollToIndex: z,
      scrollTop: d,
      smoothScrollTargetReached: f,
      totalCount: L,
      useWindowScroll: v,
      viewportDimensions: m,
      windowScrollContainerState: c,
      windowScrollTo: g,
      windowViewportRect: b,
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
      ...w
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
  const t = T((x) => `Item ${x}`), e = T({}), n = T(null), o = T("virtuoso-grid-item"), r = T("virtuoso-grid-list"), s = T(Xe), i = T("div"), l = T(Xt), u = (x, p = null) => It(
    I(
      e,
      O((S) => S[x]),
      nt()
    ),
    p
  ), d = T(!1), f = T(!1);
  return V(A(f), d), {
    components: e,
    computeItemKey: s,
    context: n,
    FooterComponent: u("Footer"),
    HeaderComponent: u("Header"),
    headerFooterTag: i,
    itemClassName: o,
    ItemComponent: u("Item", "div"),
    itemContent: t,
    listClassName: r,
    ListComponent: u("List", "div"),
    readyStateChanged: d,
    reportReadyState: f,
    ScrollerComponent: u("Scroller", "div"),
    scrollerRef: l,
    ScrollSeekPlaceholder: u("ScrollSeekPlaceholder", "div")
  };
}), Fr = /* @__PURE__ */ Z(
  ([t, e]) => ({ ...t, ...e }),
  rt(zr, Lr)
), Vr = /* @__PURE__ */ B.memo(function() {
  const e = it("gridState"), n = it("listClassName"), o = it("itemClassName"), r = it("itemContent"), s = it("computeItemKey"), i = it("isSeeking"), l = wt("scrollHeight"), u = it("ItemComponent"), d = it("ListComponent"), f = it("ScrollSeekPlaceholder"), x = it("context"), p = wt("itemDimensions"), S = wt("gap"), C = it("log"), H = it("stateRestoreInProgress"), h = wt("reportReadyState"), v = zt(
    B.useMemo(
      () => (c) => {
        const g = c.parentElement.parentElement.scrollHeight;
        l(g);
        const b = c.firstChild;
        if (b !== null) {
          const { height: w, width: L } = b.getBoundingClientRect();
          p({ height: w, width: L });
        }
        S({
          column: On("column-gap", getComputedStyle(c).columnGap, C),
          row: On("row-gap", getComputedStyle(c).rowGap, C)
        });
      },
      [l, p, S, C]
    ),
    !0,
    !1
  );
  return to(() => {
    e.itemHeight > 0 && e.itemWidth > 0 && h(!0);
  }, [e]), H ? null : /* @__PURE__ */ M(
    d,
    {
      className: n,
      ref: v,
      ...ot(d, x),
      "data-testid": "virtuoso-item-list",
      style: { paddingBottom: e.offsetBottom, paddingTop: e.offsetTop },
      children: e.items.map((c) => {
        const g = s(c.index, c.data, x);
        return i ? /* @__PURE__ */ M(
          f,
          {
            ...ot(f, x),
            height: e.itemHeight,
            index: c.index,
            width: e.itemWidth
          },
          g
        ) : /* @__PURE__ */ Nt(
          u,
          {
            ...ot(u, x),
            className: o,
            "data-index": c.index,
            key: g
          },
          r(c.index, c.data, x)
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
