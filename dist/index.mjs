import { jsx as W, jsxs as Dt } from "react/jsx-runtime";
import E, { createElement as Nt } from "react";
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
function We(t) {
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
function st(...t) {
  return t;
}
function Y(t, e) {
  return t(Gt, e);
}
function N(t, e) {
  t(we, e);
}
function Me(t) {
  t(Zt);
}
function ct(t) {
  return t(kn);
}
function F(t, e) {
  return Y(t, mo(e, we));
}
function bt(t, e) {
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
function Ln(t, e) {
  return t === e;
}
function ot(t = Ln) {
  let e;
  return (n) => (o) => {
    t(e, o) || (e = o, n(o));
  };
}
function A(t) {
  return (e) => (n) => {
    t(n) && e(n);
  };
}
function B(t) {
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
        Me(t);
        return;
      case Gt:
        return Y(t, n(r));
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
function $(...t) {
  const e = new Array(t.length);
  let n = 0, o = null;
  const r = 2 ** t.length - 1;
  return t.forEach((s, i) => {
    const l = 2 ** i;
    Y(s, (u) => {
      const a = n;
      n |= l, e[i] = u, a !== r && n === r && o && (o(), o = null);
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
        return s ? n === s ? void 0 : (o(), n = s, e = Y(t, s), e) : (o(), Xt);
      case Zt:
        o(), n = null;
        return;
    }
  };
}
function T(t) {
  let e = t;
  const n = U();
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
  return ye(T(e), (n) => F(t, n));
}
function U() {
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
  return ye(U(), (e) => F(t, e));
}
function q(t, e = [], { singleton: n } = { singleton: !0 }) {
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
  const e = U(), n = new Array(t.length);
  let o = 0;
  const r = 2 ** t.length - 1;
  return t.forEach((s, i) => {
    const l = 2 ** i;
    Y(s, (u) => {
      n[i] = u, o |= l, o === r && N(e, n);
    });
  }), function(s, i) {
    switch (s) {
      case Zt: {
        Me(e);
        return;
      }
      case Gt:
        return o === r && i(n), Y(e, i);
    }
  };
}
function G(t, e = Ln) {
  return I(t, ot(e));
}
function ze(...t) {
  return function(e, n) {
    switch (e) {
      case Zt:
        return;
      case Gt:
        return po(...t.map((o) => Y(o, n)));
    }
  };
}
const mt = {
  /** Detailed debugging information including item measurements */
  DEBUG: 0,
  /** General informational messages */
  INFO: 1,
  /** Warning messages for potential issues */
  WARN: 2,
  /** Error messages for failures (default level) */
  ERROR: 3
}, To = {
  [mt.DEBUG]: "debug",
  [mt.ERROR]: "error",
  [mt.INFO]: "log",
  [mt.WARN]: "warn"
}, vo = () => typeof globalThis > "u" ? window : globalThis, At = q(
  () => {
    const t = T(mt.ERROR);
    return {
      log: T((n, o, r = mt.INFO) => {
        const s = vo().VIRTUOSO_LOG_LEVEL ?? ct(t);
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
function Lt(t, e, n) {
  return _e(t, e, n).callbackRef;
}
function _e(t, e, n) {
  const o = E.useRef(null);
  let r = (i) => {
  };
  const s = E.useMemo(() => typeof ResizeObserver < "u" ? new ResizeObserver((i) => {
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
function zn(t, e, n, o, r, s, i, l, u) {
  const a = E.useCallback(
    (f) => {
      const x = Co(f.children, e, l ? "offsetWidth" : "offsetHeight", r);
      let m = f.parentElement;
      for (; m.dataset.virtuosoScroller === void 0; )
        m = m.parentElement;
      const S = m.lastElementChild.dataset.viewportType === "window";
      let C;
      S && (C = m.ownerDocument.defaultView);
      const H = i ? l ? i.scrollLeft : i.scrollTop : S ? l ? C.scrollX || C.document.documentElement.scrollLeft : C.scrollY || C.document.documentElement.scrollTop : l ? m.scrollLeft : m.scrollTop, h = i ? l ? i.scrollWidth : i.scrollHeight : S ? l ? C.document.documentElement.scrollWidth : C.document.documentElement.scrollHeight : l ? m.scrollWidth : m.scrollHeight, v = i ? l ? i.offsetWidth : i.offsetHeight : S ? l ? C.innerWidth : C.innerHeight : l ? m.offsetWidth : m.offsetHeight;
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
  return _e(a, n, u);
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
    const u = parseInt(l.dataset.index), a = parseFloat(l.dataset.knownSize), f = e(l, n);
    if (f === 0 && o("Zero-sized element, this should not happen", { child: l }, mt.ERROR), f === a)
      continue;
    const x = s[s.length - 1];
    s.length === 0 || x.size !== f || x.endIndex !== u - 1 ? s.push({ endIndex: u, size: f, startIndex: u }) : s[s.length - 1].endIndex++;
  }
  return s;
}
function fn(t, e, n) {
  return e !== "normal" && e?.endsWith("px") !== !0 && n(`${t} was not resolved to pixel value correctly`, e, mt.WARN), e === "normal" ? 0 : parseInt(e ?? "0", 10);
}
function Ne(t, e, n) {
  const o = E.useRef(null), r = E.useCallback(
    (u) => {
      if (!u?.offsetParent)
        return;
      const a = u.getBoundingClientRect(), f = a.width;
      let x, m;
      if (e) {
        const S = e.getBoundingClientRect(), C = a.top - S.top;
        m = S.height - Math.max(0, C), x = C + e.scrollTop;
      } else {
        const S = i.current.ownerDocument.defaultView;
        m = S.innerHeight - Math.max(0, a.top), x = a.top + S.scrollY;
      }
      o.current = {
        listHeight: a.height,
        offsetTop: x,
        visibleHeight: m,
        visibleWidth: f
      }, t(o.current);
    },
    // oxlint-disable-next-line exhaustive-deps
    [t, e]
  ), { callbackRef: s, ref: i } = _e(r, !0, n), l = E.useCallback(() => {
    r(i.current);
  }, [r, i]);
  return E.useEffect(() => {
    if (e) {
      e.addEventListener("scroll", l);
      const a = new ResizeObserver(() => {
        requestAnimationFrame(l);
      });
      return a.observe(e), () => {
        e.removeEventListener("scroll", l), a.unobserve(e);
      };
    }
    const u = i.current?.ownerDocument.defaultView;
    return u?.addEventListener("scroll", l), u?.addEventListener("resize", l), () => {
      u?.removeEventListener("scroll", l), u?.removeEventListener("resize", l);
    };
  }, [l, e, i]), s;
}
const xt = q(
  () => {
    const t = U(), e = U(), n = T(0), o = U(), r = T(0), s = U(), i = U(), l = T(0), u = T(0), a = T(0), f = T(0), x = U(), m = U(), S = T(!1), C = T(!1), H = T(!1);
    return F(
      I(
        t,
        B(({ scrollTop: h }) => h)
      ),
      e
    ), F(
      I(
        t,
        B(({ scrollHeight: h }) => h)
      ),
      i
    ), F(e, r), {
      deviation: n,
      fixedFooterHeight: a,
      fixedHeaderHeight: u,
      footerHeight: f,
      headerHeight: l,
      horizontalDirection: C,
      scrollBy: m,
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
function X(t) {
  return t === se;
}
function ie(t, e) {
  if (!X(t))
    return e === t.k ? t.v : e < t.k ? ie(t.l, e) : ie(t.r, e);
}
function Ht(t, e, n = "k") {
  if (X(t))
    return [-1 / 0, void 0];
  if (Number(t[n]) === e)
    return [t.k, t.v];
  if (Number(t[n]) < e) {
    const o = Ht(t.r, e, n);
    return o[0] === -1 / 0 ? [t.k, t.v] : o;
  }
  return Ht(t.l, e, n);
}
function Tt(t, e, n) {
  return X(t) ? Gn(e, n, 1) : e === t.k ? ft(t, { k: e, v: n }) : e < t.k ? mn(ft(t, { l: Tt(t.l, e, n) })) : mn(ft(t, { r: Tt(t.r, e, n) }));
}
function qt() {
  return se;
}
function Yt(t, e, n) {
  if (X(t))
    return [];
  const o = Ht(t, e)[0];
  return wo(Ve(t, o, n));
}
function Fe(t, e) {
  if (X(t))
    return se;
  const { k: n, l: o, r } = t;
  if (e === n) {
    if (X(o))
      return r;
    if (X(r))
      return o;
    const [s, i] = Pn(o);
    return Se(ft(t, { k: s, l: Vn(o), v: i }));
  }
  return e < n ? Se(ft(t, { l: Fe(o, e) })) : Se(ft(t, { r: Fe(r, e) }));
}
function _t(t) {
  return X(t) ? [] : [..._t(t.l), { k: t.k, v: t.v }, ..._t(t.r)];
}
function Ve(t, e, n) {
  if (X(t))
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
      return An(ft(t, { lvl: n - 1 }));
    if (!X(e) && !X(e.r))
      return ft(e.r, {
        l: ft(e, { r: e.r.l }),
        lvl: n,
        r: ft(t, {
          l: e.r.r,
          lvl: n - 1
        })
      });
    throw new Error("Unexpected empty nodes");
  }
  if (Ee(t))
    return Pe(ft(t, { lvl: n - 1 }));
  if (!X(o) && !X(o.l)) {
    const r = o.l, s = Ee(r) ? o.lvl - 1 : o.lvl;
    return ft(r, {
      l: ft(t, {
        lvl: n - 1,
        r: r.l
      }),
      lvl: r.lvl + 1,
      r: Pe(ft(o, { l: r.r, lvl: s }))
    });
  }
  throw new Error("Unexpected empty nodes");
}
function ft(t, e) {
  return Gn(
    e.k !== void 0 ? e.k : t.k,
    e.v !== void 0 ? e.v : t.v,
    e.lvl !== void 0 ? e.lvl : t.lvl,
    e.l !== void 0 ? e.l : t.l,
    e.r !== void 0 ? e.r : t.r
  );
}
function Vn(t) {
  return X(t.r) ? t.l : Se(ft(t, { r: Vn(t.r) }));
}
function Ee(t) {
  return X(t) || t.lvl > t.r.lvl;
}
function Pn(t) {
  return X(t.r) ? [t.k, t.v] : Pn(t.r);
}
function Gn(t, e, n, o = se, r = se) {
  return { k: t, l: o, lvl: n, r, v: e };
}
function mn(t) {
  return Pe(An(t));
}
function An(t) {
  const { l: e } = t;
  return !X(e) && e.lvl === t.lvl ? ft(e, { r: ft(t, { l: e.r }) }) : t;
}
function Pe(t) {
  const { lvl: e, r: n } = t;
  return !X(n) && !X(n.r) && n.lvl === e && n.r.lvl === e ? ft(n, { l: ft(t, { r: n.l }), lvl: e + 1 }) : t;
}
function wo(t) {
  return Fn(t, ({ k: e, v: n }) => ({ index: e, value: n }));
}
function Wn(t, e) {
  return !!(t && t.startIndex === e.startIndex && t.endIndex === e.endIndex);
}
function le(t, e) {
  return !!(t && t[0] === e[0] && t[1] === e[1]);
}
const De = q(
  () => ({ recalcInProgress: T(!1) }),
  [],
  { singleton: !0 }
);
function Mn(t, e, n) {
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
function Et(t, e) {
  return Math.round(t.getBoundingClientRect()[e]);
}
function be(t) {
  return !X(t.groupOffsetTree);
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
  let n = X(t) ? 0 : 1 / 0;
  for (const o of e) {
    const { endIndex: r, size: s, startIndex: i } = o;
    if (n = Math.min(n, i), X(t)) {
      t = Tt(t, 0, s);
      continue;
    }
    const l = Yt(t, i - 1, r + 1);
    if (l.some(zo(o)))
      continue;
    let u = !1, a = !1;
    for (const { end: f, start: x, value: m } of l)
      u ? (r >= x || s === m) && (t = Fe(t, x)) : (a = m !== s, u = !0), f > r && r >= x && m !== s && (t = Tt(t, r + 1, m));
    a && (t = Tt(t, i, s));
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
  const { index: o, offset: r, size: s } = Mn(e, t, $e), i = t - o, l = s * i + (i - 1) * n + r;
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
  return o > 0 && (e = Math.max(e, Mn(t, o, $e).offset)), Fn(yo(t, e, n, Eo), Lo);
}
function Oo(t, [e, n, o, r]) {
  e.length > 0 && o("received item sizes", e, mt.DEBUG);
  const s = t.sizeTree;
  let i = s, l = 0;
  if (n.length > 0 && X(s) && e.length === 2) {
    const m = e[0].size, S = e[1].size;
    i = n.reduce((C, H) => Tt(Tt(C, H, m), H + 1, S), i);
  } else
    [i, l] = Ro(i, e);
  if (i === s)
    return t;
  const { lastIndex: u, lastOffset: a, lastSize: f, offsetTree: x } = Ge(t.offsetTree, l, i, r);
  return {
    groupIndices: n,
    groupOffsetTree: n.reduce((m, S) => Tt(m, S, ce(S, x, r)), qt()),
    lastIndex: u,
    lastOffset: a,
    lastSize: f,
    offsetTree: x,
    sizeTree: i
  };
}
function ko(t) {
  return _t(t).map(({ k: e, v: n }, o, r) => {
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
function Ge(t, e, n, o) {
  let r = t, s = 0, i = 0, l = 0, u = 0;
  if (e !== 0) {
    u = ve(r, e - 1, $e), l = r[u].offset;
    const f = Ht(n, e - 1);
    s = f[0], i = f[1], r.length && r[u].size === Ht(n, e)[1] && (u -= 1), r = r.slice(0, u + 1);
  } else
    r = [];
  for (const { start: a, value: f } of Yt(n, e, 1 / 0)) {
    const x = a - s, m = x * i + l + x * o;
    r.push({
      index: a,
      offset: m,
      size: f
    }), s = a, l = m, i = f;
  }
  return {
    lastIndex: s,
    lastOffset: l,
    lastSize: i,
    offsetTree: r
  };
}
function Lo(t) {
  return { index: t.index, value: t };
}
function zo(t) {
  const { endIndex: e, size: n, startIndex: o } = t;
  return (r) => r.start === o && (r.end === e || r.end === 1 / 0) && r.value === n;
}
const Fo = {
  offsetHeight: "height",
  offsetWidth: "width"
}, zt = q(
  ([{ log: t }, { recalcInProgress: e }]) => {
    const n = U(), o = U(), r = It(o, 0), s = U(), i = U(), l = T(0), u = T([]), a = T(void 0), f = T(void 0), x = T(void 0), m = T(void 0), S = T((d, p) => Et(d, Fo[p])), C = T(void 0), H = T(void 0), h = T(0), v = bo(), c = It(
      I(n, $(u, t, h), kt(Oo, v), ot()),
      v
    ), g = It(
      I(
        u,
        ot(),
        kt((d, p) => ({ current: p, prev: d.current }), {
          current: [],
          prev: []
        }),
        B(({ prev: d }) => d)
      ),
      []
    );
    F(
      I(
        u,
        A((d) => d.length > 0),
        $(c, h),
        B(([d, p, O]) => {
          const k = d.reduce((P, V, K) => Tt(P, V, ce(V, p.offsetTree, O) || K), qt());
          return {
            ...p,
            groupIndices: d,
            groupOffsetTree: k
          };
        })
      ),
      c
    ), F(
      I(
        o,
        $(c),
        A(([d, { lastIndex: p }]) => d < p),
        B(([d, { lastIndex: p, lastSize: O }]) => [
          {
            endIndex: p,
            size: O,
            startIndex: d
          }
        ])
      ),
      n
    ), F(a, f);
    const b = It(
      I(
        a,
        B((d) => d === void 0)
      ),
      !0
    );
    F(
      I(
        f,
        A((d) => d !== void 0 && X(ct(c).sizeTree)),
        B((d) => {
          const p = ct(x), O = ct(u).length > 0;
          return p !== void 0 && p !== 0 ? O ? [
            { endIndex: 0, size: p, startIndex: 0 },
            { endIndex: 1, size: d, startIndex: 1 }
          ] : [] : [{ endIndex: 0, size: d, startIndex: 0 }];
        })
      ),
      n
    ), F(
      I(
        m,
        A((d) => d !== void 0 && d.length > 0 && X(ct(c).sizeTree)),
        B((d) => {
          const p = [];
          let O = d[0], k = 0;
          for (let P = 1; P < d.length; P++) {
            const V = d[P];
            V !== O && (p.push({
              endIndex: P - 1,
              size: O,
              startIndex: k
            }), O = V, k = P);
          }
          return p.push({
            endIndex: d.length - 1,
            size: O,
            startIndex: k
          }), p;
        })
      ),
      n
    ), F(
      I(
        u,
        $(x, f),
        A(([, d, p]) => d !== void 0 && p !== void 0),
        B(([d, p, O]) => {
          const k = [];
          for (let P = 0; P < d.length; P++) {
            const V = d[P], K = d[P + 1];
            k.push({
              startIndex: V,
              endIndex: V,
              size: p
            }), K !== void 0 && k.push({
              startIndex: V + 1,
              endIndex: K - 1,
              size: O
            });
          }
          return k;
        })
      ),
      n
    );
    const w = vt(
      I(
        n,
        $(c),
        kt(
          ({ sizes: d }, [p, O]) => ({
            changed: O !== d,
            sizes: O
          }),
          { changed: !1, sizes: v }
        ),
        B((d) => d.changed)
      )
    );
    Y(
      I(
        l,
        kt(
          (d, p) => ({ diff: d.prev - p, prev: p }),
          { diff: 0, prev: 0 }
        ),
        B((d) => d.diff)
      ),
      (d) => {
        const { groupIndices: p } = ct(c);
        if (d > 0)
          N(e, !0), N(s, d + pn(d, p));
        else if (d < 0) {
          const O = ct(g);
          O.length > 0 && (d -= pn(-d, O)), N(i, d);
        }
      }
    ), Y(I(l, $(t)), ([d, p]) => {
      d < 0 && p(
        "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
        { firstItemIndex: l },
        mt.ERROR
      );
    });
    const L = vt(s);
    F(
      I(
        s,
        $(c, H),
        B(([d, p, O]) => {
          const k = p.groupIndices.length > 0, P = [], V = !k && O && d > 0 ? O(d) / d : p.lastSize;
          if (k) {
            const K = ie(p.sizeTree, 0);
            let z = 0, tt = 0;
            for (; z < d; ) {
              const J = p.groupIndices[tt], nt = p.groupIndices.length === tt + 1 ? 1 / 0 : p.groupIndices[tt + 1] - J - 1;
              P.push({
                endIndex: J,
                size: K,
                startIndex: J
              }), P.push({
                endIndex: J + 1 + nt - 1,
                size: V,
                startIndex: J + 1
              }), tt++, z += nt + 1;
            }
            const et = _t(p.sizeTree);
            return z !== d && et.shift(), et.reduce(
              (J, { k: nt, v: pt }) => {
                let yt = J.ranges;
                return J.prevSize !== 0 && (yt = [
                  ...J.ranges,
                  {
                    endIndex: nt + d - 1,
                    size: J.prevSize,
                    startIndex: J.prevIndex
                  }
                ]), {
                  prevIndex: nt + d,
                  prevSize: pt,
                  ranges: yt
                };
              },
              {
                prevIndex: d,
                prevSize: 0,
                ranges: P
              }
            ).ranges;
          }
          return _t(p.sizeTree).reduce(
            (K, { k: z, v: tt }) => ({
              prevIndex: z + d,
              prevSize: tt,
              ranges: [...K.ranges, { endIndex: z + d - 1, size: K.prevSize, startIndex: K.prevIndex }]
            }),
            {
              prevIndex: 0,
              prevSize: V,
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
        $(c, h),
        B(([d, { offsetTree: p }, O]) => {
          const k = -d;
          return ce(k, p, O);
        })
      )
    );
    return F(
      I(
        i,
        $(c, h),
        B(([d, p, O]) => {
          if (p.groupIndices.length > 0) {
            if (X(p.sizeTree))
              return p;
            let V = qt();
            const K = ct(g);
            let z = 0, tt = 0, et = 0;
            for (; z < -d; ) {
              et = K[tt];
              const J = K[tt + 1] - et - 1;
              tt++, z += J + 1;
            }
            if (V = _t(p.sizeTree).reduce((J, { k: nt, v: pt }) => Tt(J, Math.max(0, nt + d), pt), V), z !== -d) {
              const J = ie(p.sizeTree, et);
              V = Tt(V, 0, J);
              const nt = Ht(p.sizeTree, -d + 1)[1];
              V = Tt(V, 1, nt);
            }
            return {
              ...p,
              sizeTree: V,
              ...Ge(p.offsetTree, 0, V, O)
            };
          }
          const P = _t(p.sizeTree).reduce((V, { k: K, v: z }) => Tt(V, Math.max(0, K + d), z), qt());
          return {
            ...p,
            sizeTree: P,
            ...Ge(p.offsetTree, 0, P, O)
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
      fixedItemSize: a,
      fixedGroupSize: x,
      gap: h,
      groupIndices: u,
      heightEstimates: m,
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
  st(At, De),
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
const Dn = q(
  ([{ groupIndices: t, sizes: e, totalCount: n }, { headerHeight: o, scrollTop: r }]) => {
    const s = U(), i = U(), l = vt(I(s, B(Vo)));
    return F(
      I(
        l,
        B((u) => u.totalCount)
      ),
      n
    ), F(
      I(
        l,
        B((u) => u.groupIndices)
      ),
      t
    ), F(
      I(
        dt(r, e, o),
        A(([u, a]) => be(a)),
        B(([u, a, f]) => Ht(a.groupOffsetTree, Math.max(u - f, 0), "v")[0]),
        ot(),
        B((u) => [u])
      ),
      i
    ), { groupCounts: s, topItemsIndexes: i };
  },
  st(zt, xt)
), Wt = q(
  ([{ log: t }]) => {
    const e = T(!1), n = vt(
      I(
        e,
        A((o) => o),
        ot()
      )
    );
    return Y(e, (o) => {
      o && ct(t)("props updated", {}, mt.DEBUG);
    }), { didMount: n, propsReady: e };
  },
  st(At),
  { singleton: !0 }
), Po = typeof document < "u" && "scrollBehavior" in document.documentElement.style;
function $n(t) {
  const e = typeof t == "number" ? { index: t } : t;
  return e.align || (e.align = "start"), (!e.behavior || !Po) && (e.behavior = "auto"), e.offset === void 0 && (e.offset = 0), e;
}
const fe = q(
  ([
    { gap: t, listRefresh: e, sizes: n, totalCount: o },
    {
      fixedFooterHeight: r,
      fixedHeaderHeight: s,
      footerHeight: i,
      headerHeight: l,
      scrollingInProgress: u,
      scrollTo: a,
      smoothScrollTargetReached: f,
      viewportHeight: x
    },
    { log: m }
  ]) => {
    const S = U(), C = U(), H = T(0);
    let h = null, v = null, c = null;
    function g() {
      h !== null && (h(), h = null), c !== null && (c(), c = null), v && (clearTimeout(v), v = null), N(u, !1);
    }
    return F(
      I(
        S,
        $(n, x, o, H, l, i, m),
        $(t, s, r),
        B(
          ([
            [b, w, L, y, d, p, O, k],
            P,
            V,
            K
          ]) => {
            const z = $n(b), { align: tt, behavior: et, offset: ht } = z, J = y - 1, nt = Nn(z, w, J);
            let pt = ce(nt, w.offsetTree, P) + p;
            tt === "end" ? (pt += V + Ht(w.sizeTree, nt)[1] - L + K, nt === J && (pt += O)) : tt === "center" ? pt += (V + Ht(w.sizeTree, nt)[1] - L + K) / 2 : pt -= d, ht !== void 0 && ht !== 0 && (pt += ht);
            const yt = (gt) => {
              g(), gt ? (k("retrying to scroll to", { location: b }, mt.DEBUG), N(S, b)) : (N(C, !0), k("list did not change, scroll successful", {}, mt.DEBUG));
            };
            if (g(), et === "smooth") {
              let gt = !1;
              c = Y(e, (Kt) => {
                gt = gt || Kt;
              }), h = bt(f, () => {
                yt(gt);
              });
            } else
              h = bt(I(e, Go(150)), yt);
            return v = setTimeout(() => {
              g();
            }, 1200), N(u, !0), k("scrolling from index to", { behavior: et, index: nt, top: pt }, mt.DEBUG), { behavior: et, top: pt };
          }
        )
      ),
      a
    ), {
      scrollTargetReached: C,
      scrollToIndex: S,
      topListHeight: H
    };
  },
  st(zt, xt, At),
  { singleton: !0 }
);
function Go(t) {
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
const me = q(
  ([{ defaultItemSize: t, listRefresh: e, sizes: n }, { scrollTop: o }, { scrollTargetReached: r, scrollToIndex: s }, { didMount: i }]) => {
    const l = T(!0), u = T(0), a = T(!0);
    return F(
      I(
        i,
        $(u),
        A(([f, x]) => x !== 0),
        Ot(!1)
      ),
      l
    ), F(
      I(
        i,
        $(u),
        A(([f, x]) => x !== 0),
        Ot(!1)
      ),
      a
    ), Y(
      I(
        dt(e, i),
        $(l, n, t, a),
        A(([[, f], x, { sizeTree: m }, S, C]) => f && (!X(m) || We(S)) && !x && !C),
        $(u)
      ),
      ([, f]) => {
        bt(r, () => {
          N(a, !0);
        }), Ue(4, () => {
          bt(o, () => {
            N(l, !0);
          }), N(s, f);
        });
      }
    ), {
      initialItemFinalLocationReached: a,
      initialTopMostItemIndex: u,
      scrolledToInitialItem: l
    };
  },
  st(zt, xt, fe, Wt),
  { singleton: !0 }
);
function Un(t, e) {
  return Math.abs(t - e) < 1.01;
}
const ue = "up", ne = "down", Ao = "none", Wo = {
  atBottom: !1,
  notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
  state: {
    offsetBottom: 0,
    scrollHeight: 0,
    scrollTop: 0,
    viewportHeight: 0
  }
}, Mo = 0, pe = q(([{ footerHeight: t, headerHeight: e, scrollBy: n, scrollContainerState: o, scrollTop: r, viewportHeight: s }]) => {
  const i = T(!1), l = T(!0), u = U(), a = U(), f = T(4), x = T(Mo), m = It(
    I(
      ze(I(G(r), $t(1), Ot(!0)), I(G(r), $t(1), Ot(!1), dn(100))),
      ot()
    ),
    !1
  ), S = It(
    I(ze(I(n, Ot(!0)), I(n, Ot(!1), dn(200))), ot()),
    !1
  );
  F(
    I(
      dt(G(r), G(x)),
      B(([c, g]) => c <= g),
      ot()
    ),
    l
  ), F(I(l, Ft(50)), a);
  const C = vt(
    I(
      dt(o, G(s), G(e), G(t), G(f)),
      kt((c, [{ scrollHeight: g, scrollTop: b }, w, L, y, d]) => {
        const p = b + w - g > -d, O = {
          scrollHeight: g,
          scrollTop: b,
          viewportHeight: w
        };
        if (p) {
          let P, V;
          return b > c.state.scrollTop ? (P = "SCROLLED_DOWN", V = c.state.scrollTop - b) : (P = "SIZE_DECREASED", V = c.state.scrollTop - b || c.scrollTopDelta), {
            atBottom: !0,
            atBottomBecause: P,
            scrollTopDelta: V,
            state: O
          };
        }
        let k;
        return O.scrollHeight > c.state.scrollHeight ? k = "SIZE_INCREASED" : w < c.state.viewportHeight ? k = "VIEWPORT_HEIGHT_DECREASING" : b < c.state.scrollTop ? k = "SCROLLING_UPWARDS" : k = "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM", {
          atBottom: !1,
          notAtBottomBecause: k,
          state: O
        };
      }, Wo),
      ot((c, g) => c !== void 0 && c.atBottom === g.atBottom)
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
      A((c) => c.changed),
      B((c) => c.jump)
    ),
    0
  );
  F(
    I(
      C,
      B((c) => c.atBottom)
    ),
    i
  ), F(I(i, Ft(50)), u);
  const h = T(ne);
  F(
    I(
      o,
      B(({ scrollTop: c }) => c),
      ot(),
      kt(
        (c, g) => ct(S) ? { direction: c.direction, prevScrollTop: g } : { direction: g < c.prevScrollTop ? ue : ne, prevScrollTop: g },
        { direction: ne, prevScrollTop: 0 }
      ),
      B((c) => c.direction)
    ),
    h
  ), F(I(o, Ft(50), Ot(Ao)), h);
  const v = T(0);
  return F(
    I(
      m,
      A((c) => !c),
      Ot(0)
    ),
    v
  ), F(
    I(
      r,
      Ft(100),
      $(m),
      A(([c, g]) => g),
      kt(([c, g], [b]) => [g, b], [0, 0]),
      B(([c, g]) => g - c)
    ),
    v
  ), {
    atBottomState: C,
    atBottomStateChange: u,
    atBottomThreshold: f,
    atTopStateChange: a,
    atTopThreshold: x,
    isAtBottom: i,
    isAtTop: l,
    isScrolling: m,
    lastJumpDueToItemResize: H,
    scrollDirection: h,
    scrollVelocity: v
  };
}, st(xt)), ae = "top", de = "bottom", hn = "none";
function gn(t, e, n) {
  return typeof t == "number" ? n === ue && e === ae || n === ne && e === de ? t : 0 : n === ue ? e === ae ? t.main : t.reverse : e === de ? t.main : t.reverse;
}
function In(t, e) {
  return typeof t == "number" ? t : t[e] ?? 0;
}
const je = q(
  ([{ deviation: t, fixedHeaderHeight: e, headerHeight: n, scrollTop: o, viewportHeight: r }]) => {
    const s = U(), i = T(0), l = T(0), u = T(0), a = It(
      I(
        dt(
          G(o),
          G(r),
          G(n),
          G(s, le),
          G(u),
          G(i),
          G(e),
          G(t),
          G(l)
        ),
        B(
          ([
            f,
            x,
            m,
            [S, C],
            H,
            h,
            v,
            c,
            g
          ]) => {
            const b = f - c, w = h + v, L = Math.max(m - b, 0);
            let y = hn;
            const d = In(g, ae), p = In(g, de);
            return S -= c, S += m + v, C += m + v, C -= c, S > f + w - d && (y = ue), C < f - L + x + p && (y = ne), y !== hn ? [
              Math.max(b - m - gn(H, ae, y) - d, 0),
              b - L - v + x + gn(H, de, y) + p
            ] : null;
          }
        ),
        A((f) => f !== null),
        ot(le)
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
      visibleRange: a
    };
  },
  st(xt),
  { singleton: !0 }
);
function _o(t, e, n) {
  if (be(e)) {
    const o = _n(t, e);
    return [
      { index: Ht(e.groupOffsetTree, o)[0], offset: 0, size: 0 },
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
  let a = 0, f = 0;
  if (t.length > 0) {
    a = t[0].offset;
    const H = t[t.length - 1];
    f = H.offset + H.size;
  }
  const x = n - i, m = l + x * u + (x - 1) * o, S = a, C = m - f;
  return {
    bottom: f,
    firstItemIndex: s,
    items: xn(t, r, s),
    offsetBottom: C,
    offsetTop: a,
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
  const l = t + i, u = Ke(e, l), a = Array.from({ length: l }).map((f, x) => ({
    data: s[x + u],
    index: x + u,
    offset: 0,
    size: 0
  }));
  return Te(a, [], l, r, n, o);
}
function xn(t, e, n) {
  if (t.length === 0)
    return [];
  if (!be(e))
    return t.map((a) => ({ ...a, index: a.index + n, originalIndex: a.index }));
  const o = t[0].index, r = t[t.length - 1].index, s = [], i = Yt(e.groupOffsetTree, o, r);
  let l, u = 0;
  for (const a of t) {
    (!l || l.end < a.index) && (l = i.shift(), u = e.groupIndices.indexOf(l.start));
    let f;
    a.index === l.start ? f = {
      index: u,
      type: "group"
    } : f = {
      groupIndex: u,
      index: a.index - (u + 1) + n
    }, s.push({
      ...f,
      data: a.data,
      offset: a.offset,
      originalIndex: a.index,
      size: a.size
    });
  }
  return s;
}
function Sn(t, e) {
  return t === void 0 ? 0 : typeof t == "number" ? t : t[e] ?? 0;
}
const Ut = q(
  ([
    { data: t, firstItemIndex: e, gap: n, sizes: o, totalCount: r },
    s,
    { listBoundary: i, topListHeight: l, visibleRange: u },
    { initialTopMostItemIndex: a, scrolledToInitialItem: f },
    { topListHeight: x },
    m,
    { didMount: S },
    { recalcInProgress: C }
  ]) => {
    const H = T([]), h = T(0), v = U(), c = T(0);
    F(s.topItemsIndexes, H);
    const g = It(
      I(
        dt(
          S,
          C,
          G(u, le),
          G(r),
          G(o),
          G(a),
          f,
          G(H),
          G(e),
          G(n),
          G(c),
          t
        ),
        A(([y, d, , p, , , , , , , , O]) => {
          const k = O !== void 0 && O.length !== p;
          return y && !d && !k;
        }),
        B(
          ([
            ,
            ,
            [y, d],
            p,
            O,
            k,
            P,
            V,
            K,
            z,
            tt,
            et
          ]) => {
            const ht = O, { offsetTree: J, sizeTree: nt } = ht, pt = ct(h);
            if (p === 0)
              return { ...Be, totalCount: p };
            if (y === 0 && d === 0)
              return pt === 0 ? { ...Be, totalCount: p } : Kn(pt, k, O, K, z, et || []);
            if (X(nt))
              return pt > 0 ? null : Te(
                _o(Ke(k, p), ht, et),
                [],
                p,
                z,
                ht,
                K
              );
            const yt = [];
            if (V.length > 0) {
              const D = V[0], j = V[V.length - 1];
              let it = 0;
              for (const Q of Yt(nt, D, j)) {
                const Z = Q.value, ut = Math.max(Q.start, D), St = Math.min(Q.end, j);
                for (let at = ut; at <= St; at++)
                  yt.push({ data: et?.[at], index: at, offset: it, size: Z }), it += Z;
              }
            }
            if (!P)
              return Te([], yt, p, z, ht, K);
            const gt = V.length > 0 ? V[V.length - 1] + 1 : 0, Kt = Bo(J, y, d, gt);
            if (Kt.length === 0)
              return null;
            const Qt = p - 1, Bt = ye([], (D) => {
              for (const j of Kt) {
                const it = j.value;
                let Q = it.offset, Z = j.start;
                const ut = it.size;
                if (it.offset < y) {
                  Z += Math.floor((y - it.offset + z) / (ut + z));
                  const at = Z - j.start;
                  Q += at * ut + at * z;
                }
                Z < gt && (Q += (gt - Z) * ut, Z = gt);
                const St = Math.min(j.end, Qt);
                for (let at = Z; at <= St && !(Q >= d); at++)
                  D.push({ data: et?.[at], index: at, offset: Q, size: ut }), Q += ut + z;
              }
            }), te = Sn(tt, ae), R = Sn(tt, de);
            if (Bt.length > 0 && (te > 0 || R > 0)) {
              const D = Bt[0], j = Bt[Bt.length - 1];
              if (te > 0 && D.index > gt) {
                const it = Math.min(te, D.index - gt), Q = [];
                let Z = D.offset;
                for (let ut = D.index - 1; ut >= D.index - it; ut--) {
                  const at = Yt(nt, ut, ut)[0]?.value ?? D.size;
                  Z -= at + z, Q.unshift({ data: et?.[ut], index: ut, offset: Z, size: at });
                }
                Bt.unshift(...Q);
              }
              if (R > 0 && j.index < Qt) {
                const it = Math.min(R, Qt - j.index);
                let Q = j.offset + j.size + z;
                for (let Z = j.index + 1; Z <= j.index + it; Z++) {
                  const St = Yt(nt, Z, Z)[0]?.value ?? j.size;
                  Bt.push({ data: et?.[Z], index: Z, offset: Q, size: St }), Q += St + z;
                }
              }
            }
            return Te(Bt, yt, p, z, ht, K);
          }
        ),
        //@ts-expect-error filter needs to be fixed
        A((y) => y !== null),
        ot()
      ),
      Be
    );
    F(
      I(
        t,
        A(We),
        B((y) => y?.length)
      ),
      r
    ), F(
      I(
        g,
        B((y) => y.topListHeight)
      ),
      x
    ), F(x, l), F(
      I(
        g,
        B((y) => [y.top, y.bottom])
      ),
      i
    ), F(
      I(
        g,
        B((y) => y.items)
      ),
      v
    );
    const b = vt(
      I(
        g,
        A(({ items: y }) => y.length > 0),
        $(r, t),
        A(([{ items: y }, d]) => y[y.length - 1].originalIndex === d - 1),
        B(([, y, d]) => [y - 1, d]),
        ot(le),
        B(([y]) => y)
      )
    ), w = vt(
      I(
        g,
        Ft(200),
        A(({ items: y, topItems: d }) => y.length > 0 && y[0].originalIndex === d.length),
        B(({ items: y }) => y[0].index),
        ot()
      )
    ), L = vt(
      I(
        g,
        A(({ items: y }) => y.length > 0),
        B(({ items: y }) => {
          let d = 0, p = y.length - 1;
          for (; y[d].type === "group" && d < p; )
            d++;
          for (; y[p].type === "group" && p > d; )
            p--;
          return {
            endIndex: y[p].index,
            startIndex: y[d].index
          };
        }),
        ot(Wn)
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
      ...m
    };
  },
  st(
    zt,
    Dn,
    je,
    me,
    fe,
    pe,
    Wt,
    De
  ),
  { singleton: !0 }
), jn = q(
  ([{ fixedFooterHeight: t, fixedHeaderHeight: e, footerHeight: n, headerHeight: o }, { listState: r }]) => {
    const s = U(), i = It(
      I(
        dt(n, t, o, e, r),
        B(([l, u, a, f, x]) => l + u + a + f + x.offsetBottom + x.bottom)
      ),
      0
    );
    return F(G(i), s), { totalListHeight: i, totalListHeightChanged: s };
  },
  st(xt, Ut),
  { singleton: !0 }
), No = q(
  ([{ viewportHeight: t }, { totalListHeight: e }]) => {
    const n = T(!1), o = It(
      I(
        dt(n, t, e),
        A(([r]) => r),
        B(([, r, s]) => Math.max(0, r - s)),
        Ft(0),
        ot()
      ),
      0
    );
    return { alignToBottom: n, paddingTopAddition: o };
  },
  st(xt, jn),
  { singleton: !0 }
), qn = q(() => ({
  context: T(null)
})), Do = ({
  itemBottom: t,
  itemTop: e,
  locationParams: { align: n, behavior: o, ...r },
  viewportBottom: s,
  viewportTop: i
}) => e < i ? { ...r, align: n ?? "start", ...o !== void 0 ? { behavior: o } : {} } : t > s ? { ...r, align: n ?? "end", ...o !== void 0 ? { behavior: o } : {} } : null, Yn = q(
  ([
    { gap: t, sizes: e, totalCount: n },
    { fixedFooterHeight: o, fixedHeaderHeight: r, headerHeight: s, scrollingInProgress: i, scrollTop: l, viewportHeight: u },
    { scrollToIndex: a }
  ]) => {
    const f = U();
    return F(
      I(
        f,
        $(e, u, n, s, r, o, l),
        $(t),
        B(([[x, m, S, C, H, h, v, c], g]) => {
          const { calculateViewLocation: b = Do, done: w, ...L } = x, y = Nn(x, m, C - 1), d = ce(y, m.offsetTree, g) + H + h, p = d + Ht(m.sizeTree, y)[1], O = c + h, k = c + S - v, P = b({
            itemBottom: p,
            itemTop: d,
            locationParams: L,
            viewportBottom: k,
            viewportTop: O
          });
          return P !== null ? w && bt(
            I(
              i,
              A((V) => !V),
              // skips the initial publish of false, and the cleanup call.
              // but if scrollingInProgress is true, we skip the initial publish.
              $t(ct(i) ? 1 : 2)
            ),
            w
          ) : w?.(), P;
        }),
        A((x) => x !== null)
      ),
      a
    ), {
      scrollIntoView: f
    };
  },
  st(zt, xt, fe, Ut, At),
  { singleton: !0 }
);
function Tn(t) {
  return t === !1 ? !1 : t === "smooth" ? "smooth" : "auto";
}
const $o = (t, e) => typeof t == "function" ? Tn(t(e)) : e && Tn(t), Uo = q(
  ([
    { listRefresh: t, totalCount: e, fixedItemSize: n, data: o },
    { atBottomState: r, isAtBottom: s },
    { scrollToIndex: i },
    { scrolledToInitialItem: l },
    { didMount: u, propsReady: a },
    { log: f },
    { scrollingInProgress: x },
    { context: m },
    { scrollIntoView: S }
  ]) => {
    const C = T(!1), H = U();
    let h = null;
    function v(w) {
      N(i, {
        align: "end",
        behavior: w,
        index: "LAST"
      });
    }
    Y(
      I(
        dt(I(G(e), $t(1)), u),
        $(G(C), s, l, x),
        B(([[w, L], y, d, p, O]) => {
          let k = L && p, P = "auto";
          return k && (P = $o(y, d || O), k = k && P !== !1), { followOutputBehavior: P, shouldFollow: k, totalCount: w };
        }),
        A(({ shouldFollow: w }) => w)
      ),
      ({ followOutputBehavior: w, totalCount: L }) => {
        h !== null && (h(), h = null), ct(n) !== void 0 ? requestAnimationFrame(() => {
          ct(f)("following output to ", { totalCount: L }, mt.DEBUG), v(w);
        }) : h = bt(t, () => {
          ct(f)("following output to ", { totalCount: L }, mt.DEBUG), v(w), h = null;
        });
      }
    );
    function c(w) {
      const L = bt(r, (y) => {
        w && !y.atBottom && y.notAtBottomBecause === "SIZE_INCREASED" && h === null && (ct(f)("scrolling to bottom due to increased size", {}, mt.DEBUG), v("auto"));
      });
      setTimeout(L, 100);
    }
    Y(
      I(
        dt(G(C), e, a),
        A(([w, , L]) => w !== !1 && L),
        kt(
          ({ value: w }, [, L]) => ({ refreshed: w === L, value: L }),
          { refreshed: !1, value: 0 }
        ),
        A(({ refreshed: w }) => w),
        $(C, e)
      ),
      ([, w]) => {
        ct(l) && c(w !== !1);
      }
    ), Y(H, () => {
      c(ct(C) !== !1);
    }), Y(dt(G(C), r), ([w, L]) => {
      w !== !1 && !L.atBottom && L.notAtBottomBecause === "VIEWPORT_HEIGHT_DECREASING" && v("auto");
    });
    const g = T(null), b = U();
    return F(
      ze(
        I(
          G(o),
          B((w) => w?.length ?? 0)
        ),
        I(G(e))
      ),
      b
    ), Y(
      I(
        dt(I(b, $t(1)), u),
        $(G(g), l, x, m),
        B(([[w, L], y, d, p, O]) => L && d && y?.({ context: O, totalCount: w, scrollingInProgress: p })),
        A((w) => !!w),
        Ft(0)
      ),
      (w) => {
        h !== null && (h(), h = null), ct(n) !== void 0 ? requestAnimationFrame(() => {
          ct(f)("scrolling into view", {}), N(S, w);
        }) : h = bt(t, () => {
          ct(f)("scrolling into view", {}), N(S, w), h = null;
        });
      }
    ), { autoscrollToBottom: H, followOutput: C, scrollIntoViewOnChange: g };
  },
  st(
    zt,
    pe,
    fe,
    me,
    Wt,
    At,
    xt,
    qn,
    Yn
  )
), Ko = q(
  ([{ data: t, firstItemIndex: e, gap: n, sizes: o }, { initialTopMostItemIndex: r }, { initialItemCount: s, listState: i }, { didMount: l }]) => (F(
    I(
      l,
      $(s),
      A(([, u]) => u !== 0),
      $(r, o, e, n, t),
      B(([[, u], a, f, x, m, S = []]) => Kn(u, a, f, x, m, S))
    ),
    i
  ), {}),
  st(zt, me, Ut, Wt),
  { singleton: !0 }
), jo = q(
  ([{ didMount: t }, { scrollTo: e }, { listState: n }]) => {
    const o = T(0);
    return Y(
      I(
        t,
        $(o),
        A(([, r]) => r !== 0),
        B(([, r]) => ({ top: r }))
      ),
      (r) => {
        bt(
          I(
            n,
            $t(1),
            A((s) => s.items.length > 1)
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
  st(Wt, xt, Ut),
  { singleton: !0 }
), Zn = q(
  ([{ scrollVelocity: t }]) => {
    const e = T(!1), n = U(), o = T(!1);
    return F(
      I(
        t,
        $(o, e, n),
        A(([r, s]) => s !== !1 && s !== void 0),
        B(([r, s, i, l]) => {
          const { enter: u, exit: a } = s;
          if (i) {
            if (a(r, l))
              return !1;
          } else if (u(r, l))
            return !0;
          return i;
        }),
        ot()
      ),
      e
    ), Y(
      I(dt(e, t, n), $(o)),
      ([[r, s, i], l]) => {
        r && l !== !1 && l !== void 0 && l.change && l.change(s, i);
      }
    ), { isSeeking: e, scrollSeekConfiguration: o, scrollSeekRangeChanged: n, scrollVelocity: t };
  },
  st(pe),
  { singleton: !0 }
), qe = q(([{ scrollContainerState: t, scrollTo: e }]) => {
  const n = U(), o = U(), r = U(), s = T(!1), i = T(void 0);
  return F(
    I(
      dt(n, o),
      B(([{ scrollTop: l, viewportHeight: u }, { offsetTop: a, listHeight: f }]) => ({
        scrollHeight: f,
        scrollTop: Math.max(0, l - a),
        viewportHeight: u
      }))
    ),
    t
  ), F(
    I(
      e,
      $(o),
      B(([l, { offsetTop: u }]) => ({
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
}, st(xt)), qo = q(
  ([
    { sizeRanges: t, sizes: e },
    { headerHeight: n, scrollTop: o },
    { initialTopMostItemIndex: r },
    { didMount: s },
    { useWindowScroll: i, windowScrollContainerState: l, windowViewportRect: u }
  ]) => {
    const a = U(), f = T(void 0), x = T(null), m = T(null);
    return F(l, x), F(u, m), Y(
      I(
        a,
        $(e, o, i, x, m, n)
      ),
      ([S, C, H, h, v, c, g]) => {
        const b = ko(C.sizeTree);
        h && v !== null && c !== null && (H = v.scrollTop - c.offsetTop), H -= g, S({ ranges: b, scrollTop: H });
      }
    ), F(I(f, A(We), B(Yo)), r), F(
      I(
        s,
        $(f),
        A(([, S]) => S !== void 0),
        ot(),
        B(([, S]) => S.ranges)
      ),
      t
    ), {
      getState: a,
      restoreStateFrom: f
    };
  },
  st(zt, xt, me, Wt, qe)
);
function Yo(t) {
  return { align: "start", index: 0, offset: t.scrollTop };
}
const Zo = q(([{ topItemsIndexes: t }]) => {
  const e = T(0);
  return F(
    I(
      e,
      A((n) => n >= 0),
      B((n) => Array.from({ length: n }).map((o, r) => r))
    ),
    t
  ), { topItemCount: e };
}, st(Ut));
function Xn(t) {
  let e = !1, n;
  return (() => (e || (e = !0, n = t()), n));
}
const Xo = Xn(() => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent)), Jo = q(
  ([
    { deviation: t, scrollBy: e, scrollingInProgress: n, scrollTop: o },
    { isAtBottom: r, isScrolling: s, lastJumpDueToItemResize: i, scrollDirection: l },
    { listState: u },
    { beforeUnshiftWith: a, computePrependedHeight: f, gap: x, shiftWithOffset: m, sizes: S },
    { log: C },
    { recalcInProgress: H }
  ]) => {
    const h = vt(
      I(
        u,
        $(i),
        kt(
          ([, c, g, b], [{ bottom: w, items: L, offsetBottom: y, totalCount: d }, p]) => {
            const O = w + y;
            let k = 0;
            return g === d && c.length > 0 && L.length > 0 && (L[0].originalIndex === 0 && c[0].originalIndex === 0 || (k = O - b, k !== 0 && (k += p))), [k, L, d, O];
          },
          [0, [], 0, 0]
        ),
        A(([c]) => c !== 0),
        $(o, l, n, r, C, H),
        A(([, c, g, b, , , w]) => !w && !b && c !== 0 && g === ue),
        B(([[c], , , , , g]) => (g("Upward scrolling compensation", { amount: c }, mt.DEBUG), c))
      )
    );
    function v(c) {
      c > 0 ? (N(e, { behavior: "auto", top: -c }), N(t, 0)) : (N(t, 0), N(e, { behavior: "auto", top: -c }));
    }
    return Y(I(h, $(t, s)), ([c, g, b]) => {
      b && Xo() ? N(t, g - c) : v(-c);
    }), Y(
      I(
        dt(It(s, !1), t, H),
        A(([c, g, b]) => !c && !b && g !== 0),
        B(([c, g]) => g),
        Ft(1)
      ),
      v
    ), F(
      I(
        m,
        B((c) => ({ top: -c }))
      ),
      e
    ), Y(
      I(
        a,
        $(S, x, f),
        B(([c, { groupIndices: g, lastSize: b, sizeTree: w }, L, y]) => {
          function d(V) {
            return V * (b + L);
          }
          if (y && g.length === 0)
            return y(c);
          if (g.length === 0)
            return d(c);
          let p = 0;
          const O = ie(w, 0);
          let k = 0, P = 0;
          for (; k < c; ) {
            k++, p += O;
            let V = g.length === P + 1 ? 1 / 0 : g[P + 1] - g[P] - 1;
            k + V > c && (p -= O, V = c - k + 1), k += V, p += d(V), P++;
          }
          return p;
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
  st(xt, pe, Ut, zt, At, De)
), Qo = q(
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
    a,
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
    ...a,
    ...f
  }),
  st(
    je,
    Ko,
    Wt,
    Zn,
    jn,
    jo,
    No,
    qe,
    Yn,
    At,
    qn
  )
), Jn = q(
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
      itemSize: a,
      sizeRanges: f,
      sizes: x,
      statefulTotalCount: m,
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
    { topItemCount: d },
    { groupCounts: p },
    O
  ]) => {
    const { listState: k, minOverscanItemCount: P, topItemsIndexes: V, rangeChanged: K, ...z } = w;
    return F(K, O.scrollSeekRangeChanged), F(
      I(
        O.windowViewportRect,
        B((tt) => tt.visibleHeight)
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
      groupCounts: p,
      heightEstimates: u,
      initialItemFinalLocationReached: H,
      initialTopMostItemIndex: h,
      scrolledToInitialItem: v,
      sizeRanges: f,
      topItemCount: d,
      topItemsIndexes: V,
      // input
      totalCount: S,
      ...b,
      groupIndices: l,
      itemSize: a,
      listState: k,
      minOverscanItemCount: P,
      scrollToIndex: L,
      // output
      statefulTotalCount: m,
      trackItemSizes: C,
      // exported from stateFlagsSystem
      rangeChanged: K,
      ...z,
      // the bag of IO from featureGroup1System
      ...O,
      ...c,
      sizes: x,
      ...g
    };
  },
  st(
    zt,
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
const Ie = typeof document < "u" ? E.useLayoutEffect : E.useEffect;
function Ye(t, e, n) {
  const o = Object.keys(e.required || {}), r = Object.keys(e.optional || {}), s = Object.keys(e.methods || {}), i = Object.keys(e.events || {}), l = E.createContext({});
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
  function a(v) {
    return s.reduce((c, g) => (c[g] = (b) => {
      const w = v[e.methods[g]];
      N(w, b);
    }, c), {});
  }
  function f(v) {
    return i.reduce((c, g) => (c[g] = Io(v[e.events[g]]), c), {});
  }
  const x = E.forwardRef(function(c, g) {
    const { children: b, ...w } = c, [L] = E.useState(() => ye(So(t), (p) => {
      u(p, w);
    })), [y] = E.useState(an(f, L));
    Ie(() => {
      for (const p of i)
        p in w && Y(y[p], w[p]);
      return () => {
        Object.values(y).map(Me);
      };
    }, [w, y, L]), Ie(() => {
      u(L, w);
    }), E.useImperativeHandle(g, un(a(L)));
    const d = n;
    return /* @__PURE__ */ W(l.Provider, { value: L, children: n !== void 0 ? /* @__PURE__ */ W(d, { ...tr([...o, ...r, ...i], w), children: b }) : b });
  }), m = (v) => {
    const c = E.useContext(l);
    return E.useCallback(
      (g) => {
        N(c[v], g);
      },
      [c, v]
    );
  }, S = (v) => {
    const g = E.useContext(l)[v], b = E.useCallback(
      (w) => Y(g, w),
      [g]
    );
    return E.useSyncExternalStore(
      b,
      () => ct(g),
      () => ct(g)
    );
  }, C = (v) => {
    const g = E.useContext(l)[v], [b, w] = E.useState(an(ct, g));
    return Ie(
      () => Y(g, (L) => {
        L !== b && w(un(L));
      }),
      [g, b]
    ), b;
  }, H = parseInt(E.version) >= 18 ? S : C;
  return {
    Component: x,
    useEmitter: (v, c) => {
      const b = E.useContext(l)[v];
      Ie(() => Y(b, c), [c, b]);
    },
    useEmitterValue: H,
    usePublisher: m
  };
}
const Re = E.createContext(void 0), Qn = E.createContext(void 0), Oe = "-webkit-sticky", vn = "sticky", Ze = Xn(() => {
  if (typeof document > "u")
    return vn;
  const t = document.createElement("div");
  return t.style.position = Oe, t.style.position === Oe ? Oe : vn;
}), to = typeof document < "u" ? E.useLayoutEffect : E.useEffect;
function ke(t) {
  return "self" in t;
}
function er(t) {
  return "body" in t;
}
function eo(t, e, n, o = Xt, r, s) {
  const i = E.useRef(null), l = E.useRef(null), u = E.useRef(null), a = E.useCallback(
    (m) => {
      let S, C, H;
      const h = m.target;
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
      m.suppressFlushSync === !0 ? v() : ao.flushSync(v), l.current !== null && (H === l.current || H <= 0 || H === S - C) && (l.current = null, e(!0), u.current && (clearTimeout(u.current), u.current = null));
    },
    [t, e, s]
  );
  E.useEffect(() => {
    const m = r || i.current;
    return o(r || i.current), a({ suppressFlushSync: !0, target: m }), m.addEventListener("scroll", a, { passive: !0 }), () => {
      o(null), m.removeEventListener("scroll", a);
    };
  }, [i, a, n, o, r]);
  function f(m) {
    const S = i.current;
    if (!S || (s === !0 ? "offsetWidth" in S && S.offsetWidth === 0 : "offsetHeight" in S && S.offsetHeight === 0))
      return;
    const C = m.behavior === "smooth";
    let H, h, v;
    ke(S) ? (h = Math.max(
      Et(S.document.documentElement, s === !0 ? "width" : "height"),
      s === !0 ? S.document.documentElement.scrollWidth : S.document.documentElement.scrollHeight
    ), H = s === !0 ? S.innerWidth : S.innerHeight, v = s === !0 ? window.scrollX : window.scrollY) : (h = S[s === !0 ? "scrollWidth" : "scrollHeight"], H = Et(S, s === !0 ? "width" : "height"), v = S[s === !0 ? "scrollLeft" : "scrollTop"]);
    const c = h - H;
    if (m.top = Math.ceil(Math.max(Math.min(c, m.top), 0)), Un(H, h) || m.top === v) {
      t({ scrollHeight: h, scrollTop: v, viewportHeight: H }), C && e(!0);
      return;
    }
    C ? (l.current = m.top, u.current && clearTimeout(u.current), u.current = setTimeout(() => {
      u.current = null, l.current = null, e(!0);
    }, 1e3)) : l.current = null, s === !0 && (m = { ...m.behavior !== void 0 ? { behavior: m.behavior } : {}, left: m.top }), S.scrollTo(m);
  }
  function x(m) {
    s === !0 && (m = {
      ...m.behavior !== void 0 ? { behavior: m.behavior } : {},
      ...m.top !== void 0 ? { left: m.top } : {}
    }), i.current.scrollBy(m);
  }
  return { scrollByCallback: x, scrollerRef: i, scrollToCallback: f };
}
function Xe(t) {
  return t;
}
const nr = /* @__PURE__ */ q(() => {
  const t = T((l) => `Item ${l}`), e = T((l) => `Group ${l}`), n = T({}), o = T(Xe), r = T("div"), s = T(Xt), i = (l, u = null) => It(
    I(
      n,
      B((a) => a[l]),
      ot()
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
}), or = /* @__PURE__ */ q(
  ([t, e]) => ({ ...t, ...e }),
  st(Jn, nr)
), rr = ({ height: t }) => /* @__PURE__ */ W("div", { style: { height: t } }), sr = { overflowAnchor: "none", position: Ze(), zIndex: 1 }, no = { overflowAnchor: "none" }, ir = { ...no, display: "inline-block", height: "100%" }, Cn = /* @__PURE__ */ E.memo(function({ showTopList: e = !1 }) {
  const n = M("listState"), o = Ct("sizeRanges"), r = M("useWindowScroll"), s = M("customScrollParent"), i = Ct("windowScrollContainerState"), l = Ct("scrollContainerState"), u = s || r ? i : l, a = M("itemContent"), f = M("context"), x = M("groupContent"), m = M("trackItemSizes"), S = M("itemSize"), C = M("log"), H = Ct("gap"), h = M("horizontalDirection"), { callbackRef: v } = zn(
    o,
    S,
    m,
    e ? Xt : u,
    C,
    H,
    s,
    h,
    M("skipAnimationFrameInResizeObserver")
  ), [c, g] = E.useState(0);
  tn("deviation", (z) => {
    c !== z && g(z);
  });
  const b = M("EmptyPlaceholder"), w = M("ScrollSeekPlaceholder") ?? rr, L = M("ListComponent"), y = M("ItemComponent"), d = M("GroupComponent"), p = M("computeItemKey"), O = M("isSeeking"), k = M("groupIndices").length > 0, P = M("alignToBottom"), V = M("initialItemFinalLocationReached"), K = e ? {} : {
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
    ...V ? {} : { visibility: "hidden" }
  };
  return !e && n.totalCount === 0 && b !== null && b !== void 0 ? /* @__PURE__ */ W(b, { ...rt(b, f) }) : /* @__PURE__ */ W(
    L,
    {
      ...rt(L, f),
      "data-testid": e ? "virtuoso-top-item-list" : "virtuoso-item-list",
      ref: v,
      style: K,
      children: (e ? n.topItems : n.items).map((z) => {
        const tt = z.originalIndex, et = p(tt + n.firstItemIndex, z.data, f);
        return O ? /* @__PURE__ */ Nt(
          w,
          {
            ...rt(w, f),
            height: z.size,
            index: z.index,
            key: et,
            type: z.type || "item",
            ...z.type === "group" ? {} : { groupIndex: z.groupIndex }
          }
        ) : z.type === "group" ? /* @__PURE__ */ Nt(
          d,
          {
            ...rt(d, f),
            "data-index": tt,
            "data-item-index": z.index,
            "data-known-size": z.size,
            key: et,
            style: sr
          },
          x(z.index, f)
        ) : /* @__PURE__ */ Nt(
          y,
          {
            ...rt(y, f),
            ...oo(y, z.data),
            "data-index": tt,
            "data-item-group-index": z.groupIndex,
            "data-item-index": z.index,
            "data-known-size": z.size,
            key: et,
            style: h ? ir : no
          },
          k ? a(z.index, z.groupIndex, z.data, f) : a(z.index, z.data, f)
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
function rt(t, e) {
  if (typeof t != "string")
    return { context: e };
}
function oo(t, e) {
  return { item: typeof t == "string" ? void 0 : e };
}
const ar = /* @__PURE__ */ E.memo(function() {
  const e = M("HeaderComponent"), n = Ct("headerHeight"), o = M("HeaderFooterTag"), r = Lt(
    E.useMemo(
      () => (i) => {
        n(Et(i, "height"));
      },
      [n]
    ),
    !0,
    M("skipAnimationFrameInResizeObserver")
  ), s = M("context");
  return e != null ? /* @__PURE__ */ W(o, { ref: r, children: /* @__PURE__ */ W(e, { ...rt(e, s) }) }) : null;
}), dr = /* @__PURE__ */ E.memo(function() {
  const e = M("FooterComponent"), n = Ct("footerHeight"), o = M("HeaderFooterTag"), r = Lt(
    E.useMemo(
      () => (i) => {
        n(Et(i, "height"));
      },
      [n]
    ),
    !0,
    M("skipAnimationFrameInResizeObserver")
  ), s = M("context");
  return e != null ? /* @__PURE__ */ W(o, { ref: r, children: /* @__PURE__ */ W(e, { ...rt(e, s) }) }) : null;
});
function Je({ useEmitter: t, useEmitterValue: e, usePublisher: n }) {
  return E.memo(function({ children: s, style: i, context: l, ...u }) {
    const a = n("scrollContainerState"), f = e("ScrollerComponent"), x = n("smoothScrollTargetReached"), m = e("scrollerRef"), S = e("horizontalDirection") || !1, { scrollByCallback: C, scrollerRef: H, scrollToCallback: h } = eo(
      a,
      x,
      f,
      m,
      void 0,
      S
    );
    return t("scrollTo", h), t("scrollBy", C), /* @__PURE__ */ W(
      f,
      {
        "data-testid": "virtuoso-scroller",
        "data-virtuoso-scroller": !0,
        ref: H,
        style: { ...S ? cr : lr, ...i },
        tabIndex: 0,
        ...u,
        ...rt(f, l),
        children: s
      }
    );
  });
}
function Qe({ useEmitter: t, useEmitterValue: e, usePublisher: n }) {
  return E.memo(function({ children: s, style: i, context: l, ...u }) {
    const a = n("windowScrollContainerState"), f = e("ScrollerComponent"), x = n("smoothScrollTargetReached"), m = e("totalListHeight"), S = e("deviation"), C = e("customScrollParent"), H = E.useRef(null), h = e("scrollerRef"), { scrollByCallback: v, scrollerRef: c, scrollToCallback: g } = eo(
      a,
      x,
      f,
      h,
      C
    );
    return to(() => (c.current = C || H.current?.ownerDocument.defaultView, () => {
      c.current = null;
    }), [c, C]), t("windowScrollTo", g), t("scrollBy", v), /* @__PURE__ */ W(
      f,
      {
        ref: H,
        "data-virtuoso-scroller": !0,
        style: { position: "relative", ...i, ...m !== 0 ? { height: m + S } : void 0 },
        ...u,
        ...rt(f, l),
        children: s
      }
    );
  });
}
const fr = ({ children: t }) => {
  const e = E.useContext(Re), n = Ct("viewportHeight"), o = Ct("fixedItemHeight"), r = M("alignToBottom"), s = M("horizontalDirection"), i = E.useMemo(
    () => re(n, (u) => Et(u, s ? "width" : "height")),
    [n, s]
  ), l = Lt(i, !0, M("skipAnimationFrameInResizeObserver"));
  return E.useEffect(() => {
    e && (n(e.viewportHeight), o(e.itemHeight));
  }, [e, n, o]), /* @__PURE__ */ W("div", { "data-viewport-type": "element", ref: l, style: Jt(r), children: t });
}, mr = ({ children: t }) => {
  const e = E.useContext(Re), n = Ct("windowViewportRect"), o = Ct("fixedItemHeight"), r = M("customScrollParent"), s = Ne(
    n,
    r,
    M("skipAnimationFrameInResizeObserver")
  ), i = M("alignToBottom");
  return E.useEffect(() => {
    e && (o(e.itemHeight), n({ listHeight: 0, offsetTop: 0, visibleHeight: e.viewportHeight, visibleWidth: 100 }));
  }, [e, n, o]), /* @__PURE__ */ W("div", { "data-viewport-type": "window", ref: s, style: Jt(i), children: t });
}, pr = ({ children: t }) => {
  const e = M("TopItemListComponent") ?? "div", n = M("headerHeight"), o = { ...ur, marginTop: `${n}px` }, r = M("context");
  return /* @__PURE__ */ W(e, { style: o, ...rt(e, r), children: t });
}, hr = /* @__PURE__ */ E.memo(function(e) {
  const n = M("useWindowScroll"), o = M("topItemsIndexes").length > 0, r = M("customScrollParent"), s = M("context");
  return /* @__PURE__ */ Dt(r || n ? Ir : gr, { ...e, context: s, children: [
    o && /* @__PURE__ */ W(pr, { children: /* @__PURE__ */ W(Cn, { showTopList: !0 }) }),
    /* @__PURE__ */ Dt(r || n ? mr : fr, { children: [
      /* @__PURE__ */ W(ar, {}),
      /* @__PURE__ */ W(Cn, {}),
      /* @__PURE__ */ W(dr, {})
    ] })
  ] });
}), {
  Component: ro,
  useEmitter: tn,
  useEmitterValue: M,
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
), gr = /* @__PURE__ */ Je({ useEmitter: tn, useEmitterValue: M, usePublisher: Ct }), Ir = /* @__PURE__ */ Qe({ useEmitter: tn, useEmitterValue: M, usePublisher: Ct }), qr = ro, Yr = ro, xr = /* @__PURE__ */ q(() => {
  const t = T((a) => /* @__PURE__ */ Dt("td", { children: [
    "Item $",
    a
  ] })), e = T(null), n = T((a) => /* @__PURE__ */ Dt("td", { colSpan: 1e3, children: [
    "Group ",
    a
  ] })), o = T(null), r = T(null), s = T({}), i = T(Xe), l = T(Xt), u = (a, f = null) => It(
    I(
      s,
      B((x) => x[a]),
      ot()
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
}), Sr = /* @__PURE__ */ q(
  ([t, e]) => ({ ...t, ...e }),
  st(Jn, xr)
), Tr = ({ height: t }) => /* @__PURE__ */ W("tr", { children: /* @__PURE__ */ W("td", { style: { height: t } }) }), vr = ({ height: t }) => /* @__PURE__ */ W("tr", { children: /* @__PURE__ */ W("td", { style: { border: 0, height: t, padding: 0 } }) }), Cr = { overflowAnchor: "none" }, wn = { position: Ze(), zIndex: 2, overflowAnchor: "none" }, yn = /* @__PURE__ */ E.memo(function({ showTopList: e = !1 }) {
  const n = _("listState"), o = _("computeItemKey"), r = _("firstItemIndex"), s = _("context"), i = _("isSeeking"), l = _("fixedHeaderHeight"), u = _("groupIndices").length > 0, a = _("itemContent"), f = _("groupContent"), x = _("ScrollSeekPlaceholder") ?? Tr, m = _("GroupComponent"), S = _("TableRowComponent"), C = (e ? n.topItems : []).reduce((h, v, c) => (c === 0 ? h.push(v.size) : h.push(h[c - 1] + v.size), h), []);
  return (e ? n.topItems : n.items).map((h) => {
    const v = h.originalIndex, c = o(v + r, h.data, s), g = e ? v === 0 ? 0 : C[v - 1] : 0;
    return i ? /* @__PURE__ */ Nt(
      x,
      {
        ...rt(x, s),
        height: h.size,
        index: h.index,
        key: c,
        type: h.type || "item"
      }
    ) : h.type === "group" ? /* @__PURE__ */ Nt(
      m,
      {
        ...rt(m, s),
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
        ...rt(S, s),
        ...oo(S, h.data),
        "data-index": v,
        "data-item-index": h.index,
        "data-known-size": h.size,
        "data-item-group-index": h.groupIndex,
        key: c,
        style: e ? { ...wn, top: l + g } : Cr
      },
      u ? a(h.index, h.groupIndex, h.data, s) : a(h.index, h.data, s)
    );
  });
}), wr = /* @__PURE__ */ E.memo(function() {
  const e = _("listState"), n = _("topItemsIndexes").length > 0, o = Rt("sizeRanges"), r = _("useWindowScroll"), s = _("customScrollParent"), i = Rt("windowScrollContainerState"), l = Rt("scrollContainerState"), u = s || r ? i : l, a = _("trackItemSizes"), f = _("itemSize"), x = _("log"), { callbackRef: m, ref: S } = zn(
    o,
    f,
    a,
    u,
    x,
    void 0,
    s,
    !1,
    _("skipAnimationFrameInResizeObserver")
  ), [C, H] = E.useState(0);
  en("deviation", (k) => {
    C !== k && (S.current.style.marginTop = `${k}px`, H(k));
  });
  const h = _("EmptyPlaceholder"), v = _("FillerRow") ?? vr, c = _("TableBodyComponent"), g = _("paddingTopAddition"), b = _("statefulTotalCount"), w = _("context");
  if (b === 0 && h !== null && h !== void 0)
    return /* @__PURE__ */ W(h, { ...rt(h, w) });
  const L = (n ? e.topItems : []).reduce((k, P) => k + P.size, 0), y = e.offsetTop + g + C - L, d = e.offsetBottom, p = y > 0 ? /* @__PURE__ */ W(v, { context: w, height: y }, "padding-top") : null, O = d > 0 ? /* @__PURE__ */ W(v, { context: w, height: d }, "padding-bottom") : null;
  return /* @__PURE__ */ Dt(c, { "data-testid": "virtuoso-item-list", ref: m, ...rt(c, w), children: [
    p,
    n && /* @__PURE__ */ W(yn, { showTopList: !0 }),
    /* @__PURE__ */ W(yn, {}),
    O
  ] });
}), yr = ({ children: t }) => {
  const e = E.useContext(Re), n = Rt("viewportHeight"), o = Rt("fixedItemHeight"), r = Lt(
    E.useMemo(() => re(n, (s) => Et(s, "height")), [n]),
    !0,
    _("skipAnimationFrameInResizeObserver")
  );
  return E.useEffect(() => {
    e && (n(e.viewportHeight), o(e.itemHeight));
  }, [e, n, o]), /* @__PURE__ */ W("div", { "data-viewport-type": "element", ref: r, style: Jt(!1), children: t });
}, br = ({ children: t }) => {
  const e = E.useContext(Re), n = Rt("windowViewportRect"), o = Rt("fixedItemHeight"), r = _("customScrollParent"), s = Ne(
    n,
    r,
    _("skipAnimationFrameInResizeObserver")
  );
  return E.useEffect(() => {
    e && (o(e.itemHeight), n({ listHeight: 0, offsetTop: 0, visibleHeight: e.viewportHeight, visibleWidth: 100 }));
  }, [e, n, o]), /* @__PURE__ */ W("div", { "data-viewport-type": "window", ref: s, style: Jt(!1), children: t });
}, Rr = /* @__PURE__ */ E.memo(function(e) {
  const n = _("useWindowScroll"), o = _("customScrollParent"), r = Rt("fixedHeaderHeight"), s = Rt("fixedFooterHeight"), i = _("fixedHeaderContent"), l = _("fixedFooterContent"), u = _("context"), a = Lt(
    E.useMemo(() => re(r, (c) => Et(c, "height")), [r]),
    !0,
    _("skipAnimationFrameInResizeObserver")
  ), f = Lt(
    E.useMemo(() => re(s, (c) => Et(c, "height")), [s]),
    !0,
    _("skipAnimationFrameInResizeObserver")
  ), x = o || n ? Er : Hr, m = o || n ? br : yr, S = _("TableComponent"), C = _("TableHeadComponent"), H = _("TableFooterComponent"), h = i ? /* @__PURE__ */ W(
    C,
    {
      ref: a,
      style: { position: "sticky", top: 0, zIndex: 2 },
      ...rt(C, u),
      children: i()
    },
    "TableHead"
  ) : null, v = l ? /* @__PURE__ */ W(
    H,
    {
      ref: f,
      style: { bottom: 0, position: "sticky", zIndex: 1 },
      ...rt(H, u),
      children: l()
    },
    "TableFoot"
  ) : null;
  return /* @__PURE__ */ W(x, { ...e, ...rt(x, u), children: /* @__PURE__ */ W(m, { children: /* @__PURE__ */ Dt(S, { style: { borderSpacing: 0, overflowAnchor: "none" }, ...rt(S, u), children: [
    h,
    /* @__PURE__ */ W(wr, {}, "TableBody"),
    v
  ] }) }) });
}), {
  Component: so,
  useEmitter: en,
  useEmitterValue: _,
  usePublisher: Rt
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
), Hr = /* @__PURE__ */ Je({ useEmitter: en, useEmitterValue: _, usePublisher: Rt }), Er = /* @__PURE__ */ Qe({ useEmitter: en, useEmitterValue: _, usePublisher: Rt }), Zr = so, Xr = so, bn = {
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
}, { ceil: Rn, floor: Ce, max: oe, min: Le, round: Hn } = Math;
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
const Lr = /* @__PURE__ */ q(
  ([
    { increaseViewportBy: t, listBoundary: e, overscan: n, visibleRange: o },
    { footerHeight: r, headerHeight: s, scrollBy: i, scrollContainerState: l, scrollTo: u, scrollTop: a, smoothScrollTargetReached: f, viewportHeight: x },
    m,
    S,
    { didMount: C, propsReady: H },
    { customScrollParent: h, useWindowScroll: v, windowScrollContainerState: c, windowScrollTo: g, windowViewportRect: b },
    w
  ]) => {
    const L = T(0), y = T(0), d = T(bn), p = T({ height: 0, width: 0 }), O = T({ height: 0, width: 0 }), k = U(), P = U(), V = T(0), K = T(null), z = T({ column: 0, row: 0 }), tt = U(), et = U(), ht = T(!1), J = T(0), nt = T(!0), pt = T(!1), yt = T(!1);
    Y(
      I(
        C,
        $(J),
        A(([R, D]) => D !== 0)
      ),
      () => {
        N(nt, !1);
      }
    ), Y(
      I(
        dt(C, nt, O, p, J, pt),
        A(([R, D, j, it, , Q]) => R && !D && j.height !== 0 && it.height !== 0 && !Q)
      ),
      ([, , , , R]) => {
        N(pt, !0), Ue(1, () => {
          N(k, R);
        }), bt(I(a), () => {
          N(e, [0, 0]), N(nt, !0);
        });
      }
    ), F(
      I(
        et,
        A((R) => R != null && R.scrollTop > 0),
        Ot(0)
      ),
      y
    ), Y(
      I(
        C,
        $(et),
        A(([, R]) => R != null)
      ),
      ([, R]) => {
        R && (N(p, R.viewport), N(O, R.item), N(z, R.gap), R.scrollTop > 0 && (N(ht, !0), bt(I(a, $t(1)), (D) => {
          N(ht, !1);
        }), N(u, { top: R.scrollTop })));
      }
    ), F(
      I(
        p,
        B(({ height: R }) => R)
      ),
      x
    ), F(
      I(
        dt(
          G(p, xe),
          G(O, xe),
          G(z, (R, D) => R !== void 0 && R.column === D.column && R.row === D.row),
          G(a)
        ),
        B(([R, D, j, it]) => ({
          gap: j,
          item: D,
          scrollTop: it,
          viewport: R
        }))
      ),
      tt
    ), F(
      I(
        dt(
          G(L),
          o,
          G(z, kr),
          G(O, xe),
          G(p, xe),
          G(K),
          G(y),
          G(ht),
          G(nt),
          G(J)
        ),
        A(([, , , , , , , R]) => !R),
        B(
          ([
            R,
            [D, j],
            it,
            Q,
            Z,
            ut,
            St,
            ,
            at,
            Vt
          ]) => {
            const { column: Pt, row: ee } = it, { height: he, width: He } = Q, { width: nn } = Z;
            if (St === 0 && (R === 0 || nn === 0))
              return bn;
            if (He === 0) {
              const cn = Ke(Vt, R), uo = cn + Math.max(St - 1, 0);
              return Or(En(cn, uo, ut));
            }
            const ge = io(nn, He, Pt);
            let jt, Mt;
            at ? D === 0 && j === 0 && St > 0 ? (jt = 0, Mt = St - 1) : (jt = ge * Ce((D + ee) / (he + ee)), Mt = ge * Rn((j + ee) / (he + ee)) - 1, Mt = Le(R - 1, oe(Mt, ge - 1)), jt = Le(Mt, oe(0, jt))) : (jt = 0, Mt = -1);
            const on = En(jt, Mt, ut), { bottom: rn, top: sn } = Bn(Z, it, Q, on), ln = Rn(R / ge), co = ln * he + (ln - 1) * ee - rn;
            return { bottom: rn, itemHeight: he, items: on, itemWidth: He, offsetBottom: co, offsetTop: sn, top: sn };
          }
        )
      ),
      d
    ), F(
      I(
        K,
        A((R) => R !== null),
        B((R) => R.length)
      ),
      L
    ), F(
      I(
        dt(p, O, d, z),
        A(([R, D, { items: j }]) => j.length > 0 && D.height !== 0 && R.height !== 0),
        B(([R, D, { items: j }, it]) => {
          const { bottom: Q, top: Z } = Bn(R, it, D, j);
          return [Z, Q];
        }),
        ot(le)
      ),
      e
    );
    const gt = T(!1);
    F(
      I(
        a,
        $(gt),
        B(([R, D]) => D || R !== 0)
      ),
      gt
    );
    const Kt = vt(
      I(
        dt(d, L),
        A(([{ items: R }]) => R.length > 0),
        $(gt),
        A(([[R, D], j]) => {
          const Q = R.items[R.items.length - 1].index === D - 1;
          return (j || R.bottom > 0 && R.itemHeight > 0 && R.offsetBottom === 0 && R.items.length === D) && Q;
        }),
        B(([[, R]]) => R - 1),
        ot()
      )
    ), Qt = vt(
      I(
        G(d),
        A(({ items: R }) => R.length > 0 && R[0].index === 0),
        Ot(0),
        ot()
      )
    ), Bt = vt(
      I(
        G(d),
        $(ht),
        A(([{ items: R }, D]) => R.length > 0 && !D),
        B(([{ items: R }]) => ({
          endIndex: R[R.length - 1].index,
          startIndex: R[0].index
        })),
        ot(Wn),
        Ft(0)
      )
    );
    F(Bt, S.scrollSeekRangeChanged), F(
      I(
        k,
        $(p, O, L, z),
        B(([R, D, j, it, Q]) => {
          const Z = $n(R), { align: ut, behavior: St, offset: at } = Z;
          let Vt = Z.index;
          Vt === "LAST" && (Vt = it - 1), Vt = oe(0, Vt, Le(it - 1, Vt));
          let Pt = Ae(D, Q, j, Vt);
          return ut === "end" ? Pt = Hn(Pt - D.height + j.height) : ut === "center" && (Pt = Hn(Pt - D.height / 2 + j.height / 2)), at !== void 0 && at !== 0 && (Pt += at), { behavior: St, top: Pt };
        })
      ),
      u
    );
    const te = It(
      I(
        d,
        B((R) => R.offsetBottom + R.bottom)
      ),
      0
    );
    return F(
      I(
        b,
        B((R) => ({ height: R.visibleHeight, width: R.visibleWidth }))
      ),
      p
    ), {
      customScrollParent: h,
      // input
      data: K,
      deviation: V,
      footerHeight: r,
      gap: z,
      headerHeight: s,
      increaseViewportBy: t,
      initialItemCount: y,
      itemDimensions: O,
      overscan: n,
      restoreStateFrom: et,
      scrollBy: i,
      scrollContainerState: l,
      scrollHeight: P,
      scrollTo: u,
      scrollToIndex: k,
      scrollTop: a,
      smoothScrollTargetReached: f,
      totalCount: L,
      useWindowScroll: v,
      viewportDimensions: p,
      windowScrollContainerState: c,
      windowScrollTo: g,
      windowViewportRect: b,
      ...S,
      // output
      gridState: d,
      horizontalDirection: yt,
      initialTopMostItemIndex: J,
      totalListHeight: te,
      ...m,
      endReached: Kt,
      propsReady: H,
      rangeChanged: Bt,
      startReached: Qt,
      stateChanged: tt,
      stateRestoreInProgress: ht,
      ...w
    };
  },
  st(je, xt, pe, Zn, Wt, qe, At)
);
function io(t, e, n) {
  return oe(1, Ce((t + n) / (Ce(e) + n)));
}
function Bn(t, e, n, o) {
  const { height: r } = n;
  if (r === void 0 || o.length === 0)
    return { bottom: 0, top: 0 };
  const s = Ae(t, e, n, o[0].index);
  return { bottom: Ae(t, e, n, o[o.length - 1].index) + r, top: s };
}
function Ae(t, e, n, o) {
  const r = io(t.width, n.width, e.column), s = Ce(o / r), i = s * n.height + oe(0, s - 1) * e.row;
  return i > 0 ? i + e.row : i;
}
const zr = /* @__PURE__ */ q(() => {
  const t = T((x) => `Item ${x}`), e = T({}), n = T(null), o = T("virtuoso-grid-item"), r = T("virtuoso-grid-list"), s = T(Xe), i = T("div"), l = T(Xt), u = (x, m = null) => It(
    I(
      e,
      B((S) => S[x]),
      ot()
    ),
    m
  ), a = T(!1), f = T(!1);
  return F(G(f), a), {
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
    readyStateChanged: a,
    reportReadyState: f,
    ScrollerComponent: u("Scroller", "div"),
    scrollerRef: l,
    ScrollSeekPlaceholder: u("ScrollSeekPlaceholder", "div")
  };
}), Fr = /* @__PURE__ */ q(
  ([t, e]) => ({ ...t, ...e }),
  st(Lr, zr)
), Vr = /* @__PURE__ */ E.memo(function() {
  const e = lt("gridState"), n = lt("listClassName"), o = lt("itemClassName"), r = lt("itemContent"), s = lt("computeItemKey"), i = lt("isSeeking"), l = wt("scrollHeight"), u = lt("ItemComponent"), a = lt("ListComponent"), f = lt("ScrollSeekPlaceholder"), x = lt("context"), m = wt("itemDimensions"), S = wt("gap"), C = lt("log"), H = lt("stateRestoreInProgress"), h = wt("reportReadyState"), v = Lt(
    E.useMemo(
      () => (c) => {
        const g = c.parentElement.parentElement.scrollHeight;
        l(g);
        const b = c.firstChild;
        if (b !== null) {
          const { height: w, width: L } = b.getBoundingClientRect();
          m({ height: w, width: L });
        }
        S({
          column: On("column-gap", getComputedStyle(c).columnGap, C),
          row: On("row-gap", getComputedStyle(c).rowGap, C)
        });
      },
      [l, m, S, C]
    ),
    !0,
    !1
  );
  return to(() => {
    e.itemHeight > 0 && e.itemWidth > 0 && h(!0);
  }, [e]), H ? null : /* @__PURE__ */ W(
    a,
    {
      className: n,
      ref: v,
      ...rt(a, x),
      "data-testid": "virtuoso-item-list",
      style: { paddingBottom: e.offsetBottom, paddingTop: e.offsetTop },
      children: e.items.map((c) => {
        const g = s(c.index, c.data, x);
        return i ? /* @__PURE__ */ W(
          f,
          {
            ...rt(f, x),
            height: e.itemHeight,
            index: c.index,
            width: e.itemWidth
          },
          g
        ) : /* @__PURE__ */ Nt(
          u,
          {
            ...rt(u, x),
            className: o,
            "data-index": c.index,
            key: g
          },
          r(c.index, c.data, x)
        );
      })
    }
  );
}), Pr = E.memo(function() {
  const e = lt("HeaderComponent"), n = wt("headerHeight"), o = lt("headerFooterTag"), r = Lt(
    E.useMemo(
      () => (i) => {
        n(Et(i, "height"));
      },
      [n]
    ),
    !0,
    !1
  ), s = lt("context");
  return e != null ? /* @__PURE__ */ W(o, { ref: r, children: /* @__PURE__ */ W(e, { ...rt(e, s) }) }) : null;
}), Gr = E.memo(function() {
  const e = lt("FooterComponent"), n = wt("footerHeight"), o = lt("headerFooterTag"), r = Lt(
    E.useMemo(
      () => (i) => {
        n(Et(i, "height"));
      },
      [n]
    ),
    !0,
    !1
  ), s = lt("context");
  return e != null ? /* @__PURE__ */ W(o, { ref: r, children: /* @__PURE__ */ W(e, { ...rt(e, s) }) }) : null;
}), Ar = ({ children: t }) => {
  const e = E.useContext(Qn), n = wt("itemDimensions"), o = wt("viewportDimensions"), r = Lt(
    E.useMemo(
      () => (s) => {
        o(s.getBoundingClientRect());
      },
      [o]
    ),
    !0,
    !1
  );
  return E.useEffect(() => {
    e && (o({ height: e.viewportHeight, width: e.viewportWidth }), n({ height: e.itemHeight, width: e.itemWidth }));
  }, [e, o, n]), /* @__PURE__ */ W("div", { ref: r, style: Jt(!1), children: t });
}, Wr = ({ children: t }) => {
  const e = E.useContext(Qn), n = wt("windowViewportRect"), o = wt("itemDimensions"), r = lt("customScrollParent"), s = Ne(n, r, !1);
  return E.useEffect(() => {
    e && (o({ height: e.itemHeight, width: e.itemWidth }), n({ listHeight: 0, offsetTop: 0, visibleHeight: e.viewportHeight, visibleWidth: e.viewportWidth }));
  }, [e, n, o]), /* @__PURE__ */ W("div", { ref: s, style: Jt(!1), children: t });
}, Mr = /* @__PURE__ */ E.memo(function({ ...e }) {
  const n = lt("useWindowScroll"), o = lt("customScrollParent"), r = o || n ? Dr : Nr, s = o || n ? Wr : Ar, i = lt("context");
  return /* @__PURE__ */ W(r, { ...e, ...rt(r, i), children: /* @__PURE__ */ Dt(s, { children: [
    /* @__PURE__ */ W(Pr, {}),
    /* @__PURE__ */ W(Vr, {}),
    /* @__PURE__ */ W(Gr, {})
  ] }) });
}), {
  Component: _r,
  useEmitter: lo,
  useEmitterValue: lt,
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
  Mr
), Nr = /* @__PURE__ */ Je({ useEmitter: lo, useEmitterValue: lt, usePublisher: wt }), Dr = /* @__PURE__ */ Qe({ useEmitter: lo, useEmitterValue: lt, usePublisher: wt });
function On(t, e, n) {
  return e !== "normal" && e?.endsWith("px") !== !0 && n(`${t} was not resolved to pixel value correctly`, e, mt.WARN), e === "normal" ? 0 : parseInt(e ?? "0", 10);
}
const Jr = _r;
export {
  Xr as GroupedTableVirtuoso,
  Yr as GroupedVirtuoso,
  mt as LogLevel,
  Zr as TableVirtuoso,
  qr as Virtuoso,
  Jr as VirtuosoGrid,
  Qn as VirtuosoGridMockContext,
  Re as VirtuosoMockContext
};
