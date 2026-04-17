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
function z(t, e) {
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
    Y(s, (c) => {
      const a = n;
      n |= l, e[i] = c, a !== r && n === r && o && (o(), o = null);
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
  const n = K();
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
  return ye(T(e), (n) => z(t, n));
}
function K() {
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
  return ye(K(), (e) => z(t, e));
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
    const l = o(r.map((c) => n(c)));
    return i && e.set(s, l), l;
  };
  return n(t);
}
function dt(...t) {
  const e = K(), n = new Array(t.length);
  let o = 0;
  const r = 2 ** t.length - 1;
  return t.forEach((s, i) => {
    const l = 2 ** i;
    Y(s, (c) => {
      n[i] = c, o |= l, o === r && N(e, n);
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
      const c = i[0].target;
      c.offsetParent !== null && t(c);
    };
    n ? l() : requestAnimationFrame(l);
  }) : null, [t, n]);
  return r = (i) => {
    i && e ? (s?.observe(i), o.current = i) : (o.current && s?.unobserve(o.current), o.current = null);
  }, { callbackRef: r, ref: o };
}
function zn(t, e, n, o, r, s, i, l, c) {
  const a = E.useCallback(
    (f) => {
      const x = Co(f.children, e, l ? "offsetWidth" : "offsetHeight", r);
      let h = f.parentElement;
      for (; h.dataset.virtuosoScroller === void 0; )
        h = h.parentElement;
      const S = h.lastElementChild.dataset.viewportType === "window";
      let y;
      S && (y = h.ownerDocument.defaultView);
      const H = i ? l ? i.scrollLeft : i.scrollTop : S ? l ? y.scrollX || y.document.documentElement.scrollLeft : y.scrollY || y.document.documentElement.scrollTop : l ? h.scrollLeft : h.scrollTop, p = i ? l ? i.scrollWidth : i.scrollHeight : S ? l ? y.document.documentElement.scrollWidth : y.document.documentElement.scrollHeight : l ? h.scrollWidth : h.scrollHeight, v = i ? l ? i.offsetWidth : i.offsetHeight : S ? l ? y.innerWidth : y.innerHeight : l ? h.offsetWidth : h.offsetHeight;
      o({
        scrollHeight: p,
        scrollTop: Math.max(H, 0),
        viewportHeight: v
      }), s?.(
        l ? fn("column-gap", getComputedStyle(f).columnGap, r) : fn("row-gap", getComputedStyle(f).rowGap, r)
      ), x !== null && t(x);
    },
    [t, e, r, s, i, o, l]
  );
  return _e(a, n, c);
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
    const c = parseInt(l.dataset.index), a = parseFloat(l.dataset.knownSize), f = e(l, n);
    if (f === 0 && o("Zero-sized element, this should not happen", { child: l }, mt.ERROR), f === a)
      continue;
    const x = s[s.length - 1];
    s.length === 0 || x.size !== f || x.endIndex !== c - 1 ? s.push({ endIndex: c, size: f, startIndex: c }) : s[s.length - 1].endIndex++;
  }
  return s;
}
function fn(t, e, n) {
  return e !== "normal" && e?.endsWith("px") !== !0 && n(`${t} was not resolved to pixel value correctly`, e, mt.WARN), e === "normal" ? 0 : parseInt(e ?? "0", 10);
}
function Ne(t, e, n) {
  const o = E.useRef(null), r = E.useCallback(
    (c) => {
      if (!c?.offsetParent)
        return;
      const a = c.getBoundingClientRect(), f = a.width;
      let x, h;
      if (e) {
        const S = e.getBoundingClientRect(), y = a.top - S.top;
        h = S.height - Math.max(0, y), x = y + e.scrollTop;
      } else {
        const S = i.current.ownerDocument.defaultView;
        h = S.innerHeight - Math.max(0, a.top), x = a.top + S.scrollY;
      }
      o.current = {
        listHeight: a.height,
        offsetTop: x,
        visibleHeight: h,
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
    const c = i.current?.ownerDocument.defaultView;
    return c?.addEventListener("scroll", l), c?.addEventListener("resize", l), () => {
      c?.removeEventListener("scroll", l), c?.removeEventListener("resize", l);
    };
  }, [l, e, i]), s;
}
const xt = q(
  () => {
    const t = K(), e = K(), n = T(0), o = K(), r = T(0), s = K(), i = K(), l = T(0), c = T(0), a = T(0), f = T(0), x = K(), h = K(), S = T(!1), y = T(!1), H = T(!1);
    return z(
      I(
        t,
        B(({ scrollTop: p }) => p)
      ),
      e
    ), z(
      I(
        t,
        B(({ scrollHeight: p }) => p)
      ),
      i
    ), z(e, r), {
      deviation: n,
      fixedFooterHeight: a,
      fixedHeaderHeight: c,
      footerHeight: f,
      headerHeight: l,
      horizontalDirection: y,
      scrollBy: h,
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
    let c = !1, a = !1;
    for (const { end: f, start: x, value: h } of l)
      c ? (r >= x || s === h) && (t = Fe(t, x)) : (a = h !== s, c = !0), f > r && r >= x && h !== s && (t = Tt(t, r + 1, h));
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
    const h = e[0].size, S = e[1].size;
    i = n.reduce((y, H) => Tt(Tt(y, H, h), H + 1, S), i);
  } else
    [i, l] = Ro(i, e);
  if (i === s)
    return t;
  const { lastIndex: c, lastOffset: a, lastSize: f, offsetTree: x } = Ge(t.offsetTree, l, i, r);
  return {
    groupIndices: n,
    groupOffsetTree: n.reduce((h, S) => Tt(h, S, ce(S, x, r)), qt()),
    lastIndex: c,
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
  let r = t, s = 0, i = 0, l = 0, c = 0;
  if (e !== 0) {
    c = ve(r, e - 1, $e), l = r[c].offset;
    const f = Ht(n, e - 1);
    s = f[0], i = f[1], r.length && r[c].size === Ht(n, e)[1] && (c -= 1), r = r.slice(0, c + 1);
  } else
    r = [];
  for (const { start: a, value: f } of Yt(n, e, 1 / 0)) {
    const x = a - s, h = x * i + l + x * o;
    r.push({
      index: a,
      offset: h,
      size: f
    }), s = a, l = h, i = f;
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
    const n = K(), o = K(), r = It(o, 0), s = K(), i = K(), l = T(0), c = T([]), a = T(void 0), f = T(void 0), x = T(void 0), h = T(void 0), S = T((d, g) => Et(d, Fo[g])), y = T(void 0), H = T(void 0), p = T(0), v = bo(), u = It(
      I(n, $(c, t, p), kt(Oo, v), ot()),
      v
    ), m = It(
      I(
        c,
        ot(),
        kt((d, g) => ({ current: g, prev: d.current }), {
          current: [],
          prev: []
        }),
        B(({ prev: d }) => d)
      ),
      []
    );
    z(
      I(
        c,
        A((d) => d.length > 0),
        $(u, p),
        B(([d, g, O]) => {
          const F = d.reduce((V, P, U) => Tt(V, P, ce(P, g.offsetTree, O) || U), qt());
          return {
            ...g,
            groupIndices: d,
            groupOffsetTree: F
          };
        })
      ),
      u
    ), z(
      I(
        o,
        $(u),
        A(([d, { lastIndex: g }]) => d < g),
        B(([d, { lastIndex: g, lastSize: O }]) => [
          {
            endIndex: g,
            size: O,
            startIndex: d
          }
        ])
      ),
      n
    ), z(a, f);
    const w = It(
      I(
        a,
        B((d) => d === void 0)
      ),
      !0
    );
    z(
      I(
        f,
        A((d) => d !== void 0 && X(ct(u).sizeTree)),
        B((d) => {
          const g = ct(x), O = ct(c).length > 0;
          return g !== void 0 && g !== 0 ? O ? [
            { endIndex: 0, size: g, startIndex: 0 },
            { endIndex: 1, size: d, startIndex: 1 }
          ] : [] : [{ endIndex: 0, size: d, startIndex: 0 }];
        })
      ),
      n
    ), z(
      I(
        h,
        A((d) => d !== void 0 && d.length > 0 && X(ct(u).sizeTree)),
        B((d) => {
          const g = [];
          let O = d[0], F = 0;
          for (let V = 1; V < d.length; V++) {
            const P = d[V];
            P !== O && (g.push({
              endIndex: V - 1,
              size: O,
              startIndex: F
            }), O = P, F = V);
          }
          return g.push({
            endIndex: d.length - 1,
            size: O,
            startIndex: F
          }), g;
        })
      ),
      n
    ), z(
      I(
        c,
        $(x, f),
        A(([, d, g]) => d !== void 0 && g !== void 0),
        B(([d, g, O]) => {
          const F = [];
          for (let V = 0; V < d.length; V++) {
            const P = d[V], U = d[V + 1];
            F.push({
              startIndex: P,
              endIndex: P,
              size: g
            }), U !== void 0 && F.push({
              startIndex: P + 1,
              endIndex: U - 1,
              size: O
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
        $(u),
        kt(
          ({ sizes: d }, [g, O]) => ({
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
          (d, g) => ({ diff: d.prev - g, prev: g }),
          { diff: 0, prev: 0 }
        ),
        B((d) => d.diff)
      ),
      (d) => {
        const { groupIndices: g } = ct(u);
        if (d > 0)
          N(e, !0), N(s, d + pn(d, g));
        else if (d < 0) {
          const O = ct(m);
          O.length > 0 && (d -= pn(-d, O)), N(i, d);
        }
      }
    ), Y(I(l, $(t)), ([d, g]) => {
      d < 0 && g(
        "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
        { firstItemIndex: l },
        mt.ERROR
      );
    });
    const k = vt(s);
    z(
      I(
        s,
        $(u, H),
        B(([d, g, O]) => {
          const F = g.groupIndices.length > 0, V = [], P = !F && O && d > 0 ? O(d) / d : g.lastSize;
          if (F) {
            const U = ie(g.sizeTree, 0);
            let L = 0, tt = 0;
            for (; L < d; ) {
              const J = g.groupIndices[tt], nt = g.groupIndices.length === tt + 1 ? 1 / 0 : g.groupIndices[tt + 1] - J - 1;
              V.push({
                endIndex: J,
                size: U,
                startIndex: J
              }), V.push({
                endIndex: J + 1 + nt - 1,
                size: P,
                startIndex: J + 1
              }), tt++, L += nt + 1;
            }
            const et = _t(g.sizeTree);
            return L !== d && et.shift(), et.reduce(
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
                ranges: V
              }
            ).ranges;
          }
          return _t(g.sizeTree).reduce(
            (U, { k: L, v: tt }) => ({
              prevIndex: L + d,
              prevSize: tt,
              ranges: [...U.ranges, { endIndex: L + d - 1, size: U.prevSize, startIndex: U.prevIndex }]
            }),
            {
              prevIndex: 0,
              prevSize: P,
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
        $(u, p),
        B(([d, { offsetTree: g }, O]) => {
          const F = -d;
          return ce(F, g, O);
        })
      )
    );
    return z(
      I(
        i,
        $(u, p),
        B(([d, g, O]) => {
          if (g.groupIndices.length > 0) {
            if (X(g.sizeTree))
              return g;
            let P = qt();
            const U = ct(m);
            let L = 0, tt = 0, et = 0;
            for (; L < -d; ) {
              et = U[tt];
              const J = U[tt + 1] - et - 1;
              tt++, L += J + 1;
            }
            if (P = _t(g.sizeTree).reduce((J, { k: nt, v: pt }) => Tt(J, Math.max(0, nt + d), pt), P), L !== -d) {
              const J = ie(g.sizeTree, et);
              P = Tt(P, 0, J);
              const nt = Ht(g.sizeTree, -d + 1)[1];
              P = Tt(P, 1, nt);
            }
            return {
              ...g,
              sizeTree: P,
              ...Ge(g.offsetTree, 0, P, O)
            };
          }
          const V = _t(g.sizeTree).reduce((P, { k: U, v: L }) => Tt(P, Math.max(0, U + d), L), qt());
          return {
            ...g,
            sizeTree: V,
            ...Ge(g.offsetTree, 0, V, O)
          };
        })
      ),
      u
    ), {
      beforeUnshiftWith: k,
      computePrependedHeight: H,
      // input
      data: y,
      defaultItemSize: f,
      firstItemIndex: l,
      fixedItemSize: a,
      fixedGroupSize: x,
      gap: p,
      groupIndices: c,
      heightEstimates: h,
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
    const s = K(), i = K(), l = vt(I(s, B(Vo)));
    return z(
      I(
        l,
        B((c) => c.totalCount)
      ),
      n
    ), z(
      I(
        l,
        B((c) => c.groupIndices)
      ),
      t
    ), z(
      I(
        dt(r, e, o),
        A(([c, a]) => be(a)),
        B(([c, a, f]) => Ht(a.groupOffsetTree, Math.max(c - f, 0), "v")[0]),
        ot(),
        B((c) => [c])
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
      scrollingInProgress: c,
      scrollTo: a,
      smoothScrollTargetReached: f,
      viewportHeight: x
    },
    { log: h }
  ]) => {
    const S = K(), y = K(), H = T(0);
    let p = null, v = null, u = null;
    function m() {
      p !== null && (p(), p = null), u !== null && (u(), u = null), v && (clearTimeout(v), v = null), N(c, !1);
    }
    return z(
      I(
        S,
        $(n, x, o, H, l, i, h),
        $(t, s, r),
        B(
          ([
            [w, C, k, b, d, g, O, F],
            V,
            P,
            U
          ]) => {
            const L = $n(w), { align: tt, behavior: et, offset: ht } = L, J = b - 1, nt = Nn(L, C, J);
            let pt = ce(nt, C.offsetTree, V) + g;
            tt === "end" ? (pt += P + Ht(C.sizeTree, nt)[1] - k + U, nt === J && (pt += O)) : tt === "center" ? pt += (P + Ht(C.sizeTree, nt)[1] - k + U) / 2 : pt -= d, ht !== void 0 && ht !== 0 && (pt += ht);
            const yt = (gt) => {
              m(), gt ? (F("retrying to scroll to", { location: w }, mt.DEBUG), N(S, w)) : (N(y, !0), F("list did not change, scroll successful", {}, mt.DEBUG));
            };
            if (m(), et === "smooth") {
              let gt = !1;
              u = Y(e, (Kt) => {
                gt = gt || Kt;
              }), p = bt(f, () => {
                yt(gt);
              });
            } else
              p = bt(I(e, Go(150)), yt);
            return v = setTimeout(() => {
              m();
            }, 1200), N(c, !0), F("scrolling from index to", { behavior: et, index: nt, top: pt }, mt.DEBUG), { behavior: et, top: pt };
          }
        )
      ),
      a
    ), {
      scrollTargetReached: y,
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
    const l = T(!0), c = T(0), a = T(!0);
    return z(
      I(
        i,
        $(c),
        A(([f, x]) => x !== 0),
        Ot(!1)
      ),
      l
    ), z(
      I(
        i,
        $(c),
        A(([f, x]) => x !== 0),
        Ot(!1)
      ),
      a
    ), Y(
      I(
        dt(e, i),
        $(l, n, t, a),
        A(([[, f], x, { sizeTree: h }, S, y]) => f && (!X(h) || We(S)) && !x && !y),
        $(c)
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
      initialTopMostItemIndex: c,
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
  const i = T(!1), l = T(!0), c = K(), a = K(), f = T(4), x = T(Mo), h = It(
    I(
      ze(I(G(r), $t(1), Ot(!0)), I(G(r), $t(1), Ot(!1), dn(100))),
      ot()
    ),
    !1
  ), S = It(
    I(ze(I(n, Ot(!0)), I(n, Ot(!1), dn(200))), ot()),
    !1
  );
  z(
    I(
      dt(G(r), G(x)),
      B(([u, m]) => u <= m),
      ot()
    ),
    l
  ), z(I(l, Ft(50)), a);
  const y = vt(
    I(
      dt(o, G(s), G(e), G(t), G(f)),
      kt((u, [{ scrollHeight: m, scrollTop: w }, C, k, b, d]) => {
        const g = w + C - m > -d, O = {
          scrollHeight: m,
          scrollTop: w,
          viewportHeight: C
        };
        if (g) {
          let V, P;
          return w > u.state.scrollTop ? (V = "SCROLLED_DOWN", P = u.state.scrollTop - w) : (V = "SIZE_DECREASED", P = u.state.scrollTop - w || u.scrollTopDelta), {
            atBottom: !0,
            atBottomBecause: V,
            scrollTopDelta: P,
            state: O
          };
        }
        let F;
        return O.scrollHeight > u.state.scrollHeight ? F = "SIZE_INCREASED" : C < u.state.viewportHeight ? F = "VIEWPORT_HEIGHT_DECREASING" : w < u.state.scrollTop ? F = "SCROLLING_UPWARDS" : F = "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM", {
          atBottom: !1,
          notAtBottomBecause: F,
          state: O
        };
      }, Wo),
      ot((u, m) => u !== void 0 && u.atBottom === m.atBottom)
    )
  ), H = It(
    I(
      o,
      kt(
        (u, { scrollHeight: m, scrollTop: w, viewportHeight: C }) => {
          if (!Un(u.scrollHeight, m)) {
            const k = m - (w + C) < 1;
            return u.scrollTop !== w && k ? {
              changed: !0,
              jump: u.scrollTop - w,
              scrollHeight: m,
              scrollTop: w
            } : {
              changed: !0,
              jump: 0,
              scrollHeight: m,
              scrollTop: w
            };
          }
          return {
            changed: !1,
            jump: 0,
            scrollHeight: m,
            scrollTop: w
          };
        },
        { changed: !1, jump: 0, scrollHeight: 0, scrollTop: 0 }
      ),
      A((u) => u.changed),
      B((u) => u.jump)
    ),
    0
  );
  z(
    I(
      y,
      B((u) => u.atBottom)
    ),
    i
  ), z(I(i, Ft(50)), c);
  const p = T(ne);
  z(
    I(
      o,
      B(({ scrollTop: u }) => u),
      ot(),
      kt(
        (u, m) => ct(S) ? { direction: u.direction, prevScrollTop: m } : { direction: m < u.prevScrollTop ? ue : ne, prevScrollTop: m },
        { direction: ne, prevScrollTop: 0 }
      ),
      B((u) => u.direction)
    ),
    p
  ), z(I(o, Ft(50), Ot(Ao)), p);
  const v = T(0);
  return z(
    I(
      h,
      A((u) => !u),
      Ot(0)
    ),
    v
  ), z(
    I(
      r,
      Ft(100),
      $(h),
      A(([u, m]) => m),
      kt(([u, m], [w]) => [m, w], [0, 0]),
      B(([u, m]) => m - u)
    ),
    v
  ), {
    atBottomState: y,
    atBottomStateChange: c,
    atBottomThreshold: f,
    atTopStateChange: a,
    atTopThreshold: x,
    isAtBottom: i,
    isAtTop: l,
    isScrolling: h,
    lastJumpDueToItemResize: H,
    scrollDirection: p,
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
    const s = K(), i = T(0), l = T(0), c = T(0), a = It(
      I(
        dt(
          G(o),
          G(r),
          G(n),
          G(s, le),
          G(c),
          G(i),
          G(e),
          G(t),
          G(l)
        ),
        B(
          ([
            f,
            x,
            h,
            [S, y],
            H,
            p,
            v,
            u,
            m
          ]) => {
            const w = f - u, C = p + v, k = Math.max(h - w, 0);
            let b = hn;
            const d = In(m, ae), g = In(m, de);
            return S -= u, S += h + v, y += h + v, y -= u, S > f + C - d && (b = ue), y < f - k + x + g && (b = ne), b !== hn ? [
              Math.max(w - h - gn(H, ae, b) - d, 0),
              w - k - v + x + gn(H, de, b) + g
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
      overscan: c,
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
  const { lastIndex: i, lastOffset: l, lastSize: c } = r;
  let a = 0, f = 0;
  if (t.length > 0) {
    a = t[0].offset;
    const H = t[t.length - 1];
    f = H.offset + H.size;
  }
  const x = n - i, h = l + x * c + (x - 1) * o, S = a, y = h - f;
  return {
    bottom: f,
    firstItemIndex: s,
    items: xn(t, r, s),
    offsetBottom: y,
    offsetTop: a,
    top: S,
    topItems: xn(e, r, s),
    topListHeight: e.reduce((H, p) => p.size + H, 0),
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
  const l = t + i, c = Ke(e, l), a = Array.from({ length: l }).map((f, x) => ({
    data: s[x + c],
    index: x + c,
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
  let l, c = 0;
  for (const a of t) {
    (!l || l.end < a.index) && (l = i.shift(), c = e.groupIndices.indexOf(l.start));
    let f;
    a.index === l.start ? f = {
      index: c,
      type: "group"
    } : f = {
      groupIndex: c,
      index: a.index - (c + 1) + n
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
    { listBoundary: i, topListHeight: l, visibleRange: c },
    { initialTopMostItemIndex: a, scrolledToInitialItem: f },
    { topListHeight: x },
    h,
    { didMount: S },
    { recalcInProgress: y }
  ]) => {
    const H = T([]), p = T(0), v = K(), u = T(0);
    z(s.topItemsIndexes, H);
    const m = It(
      I(
        dt(
          S,
          y,
          G(c, le),
          G(r),
          G(o),
          G(a),
          f,
          G(H),
          G(e),
          G(n),
          G(u),
          t
        ),
        A(([b, d, , g, , , , , , , , O]) => {
          const F = O !== void 0 && O.length !== g;
          return b && !d && !F;
        }),
        B(
          ([
            ,
            ,
            [b, d],
            g,
            O,
            F,
            V,
            P,
            U,
            L,
            tt,
            et
          ]) => {
            const ht = O, { offsetTree: J, sizeTree: nt } = ht, pt = ct(p);
            if (g === 0)
              return { ...Be, totalCount: g };
            if (b === 0 && d === 0)
              return pt === 0 ? { ...Be, totalCount: g } : Kn(pt, F, O, U, L, et || []);
            if (X(nt))
              return pt > 0 ? null : Te(
                _o(Ke(F, g), ht, et),
                [],
                g,
                L,
                ht,
                U
              );
            const yt = [];
            if (P.length > 0) {
              const D = P[0], j = P[P.length - 1];
              let it = 0;
              for (const Q of Yt(nt, D, j)) {
                const Z = Q.value, ut = Math.max(Q.start, D), St = Math.min(Q.end, j);
                for (let at = ut; at <= St; at++)
                  yt.push({ data: et?.[at], index: at, offset: it, size: Z }), it += Z;
              }
            }
            if (!V)
              return Te([], yt, g, L, ht, U);
            const gt = P.length > 0 ? P[P.length - 1] + 1 : 0, Kt = Bo(J, b, d, gt);
            if (Kt.length === 0)
              return null;
            const Qt = g - 1, Bt = ye([], (D) => {
              for (const j of Kt) {
                const it = j.value;
                let Q = it.offset, Z = j.start;
                const ut = it.size;
                if (it.offset < b) {
                  Z += Math.floor((b - it.offset + L) / (ut + L));
                  const at = Z - j.start;
                  Q += at * ut + at * L;
                }
                Z < gt && (Q += (gt - Z) * ut, Z = gt);
                const St = Math.min(j.end, Qt);
                for (let at = Z; at <= St && !(Q >= d); at++)
                  D.push({ data: et?.[at], index: at, offset: Q, size: ut }), Q += ut + L;
              }
            }), te = Sn(tt, ae), R = Sn(tt, de);
            if (Bt.length > 0 && (te > 0 || R > 0)) {
              const D = Bt[0], j = Bt[Bt.length - 1];
              if (te > 0 && D.index > gt) {
                const it = Math.min(te, D.index - gt), Q = [];
                let Z = D.offset;
                for (let ut = D.index - 1; ut >= D.index - it; ut--) {
                  const at = Yt(nt, ut, ut)[0]?.value ?? D.size;
                  Z -= at + L, Q.unshift({ data: et?.[ut], index: ut, offset: Z, size: at });
                }
                Bt.unshift(...Q);
              }
              if (R > 0 && j.index < Qt) {
                const it = Math.min(R, Qt - j.index);
                let Q = j.offset + j.size + L;
                for (let Z = j.index + 1; Z <= j.index + it; Z++) {
                  const St = Yt(nt, Z, Z)[0]?.value ?? j.size;
                  Bt.push({ data: et?.[Z], index: Z, offset: Q, size: St }), Q += St + L;
                }
              }
            }
            return Te(Bt, yt, g, L, ht, U);
          }
        ),
        //@ts-expect-error filter needs to be fixed
        A((b) => b !== null),
        ot()
      ),
      Be
    );
    z(
      I(
        t,
        A(We),
        B((b) => b?.length)
      ),
      r
    ), z(
      I(
        m,
        B((b) => b.topListHeight)
      ),
      x
    ), z(x, l), z(
      I(
        m,
        B((b) => [b.top, b.bottom])
      ),
      i
    ), z(
      I(
        m,
        B((b) => b.items)
      ),
      v
    );
    const w = vt(
      I(
        m,
        A(({ items: b }) => b.length > 0),
        $(r, t),
        A(([{ items: b }, d]) => b[b.length - 1].originalIndex === d - 1),
        B(([, b, d]) => [b - 1, d]),
        ot(le),
        B(([b]) => b)
      )
    ), C = vt(
      I(
        m,
        Ft(200),
        A(({ items: b, topItems: d }) => b.length > 0 && b[0].originalIndex === d.length),
        B(({ items: b }) => b[0].index),
        ot()
      )
    ), k = vt(
      I(
        m,
        A(({ items: b }) => b.length > 0),
        B(({ items: b }) => {
          let d = 0, g = b.length - 1;
          for (; b[d].type === "group" && d < g; )
            d++;
          for (; b[g].type === "group" && g > d; )
            g--;
          return {
            endIndex: b[g].index,
            startIndex: b[d].index
          };
        }),
        ot(Wn)
      )
    );
    return {
      endReached: w,
      initialItemCount: p,
      itemsRendered: v,
      listState: m,
      minOverscanItemCount: u,
      rangeChanged: k,
      startReached: C,
      topItemsIndexes: H,
      ...h
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
    const s = K(), i = It(
      I(
        dt(n, t, o, e, r),
        B(([l, c, a, f, x]) => l + c + a + f + x.offsetBottom + x.bottom)
      ),
      0
    );
    return z(G(i), s), { totalListHeight: i, totalListHeightChanged: s };
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
    { fixedFooterHeight: o, fixedHeaderHeight: r, headerHeight: s, scrollingInProgress: i, scrollTop: l, viewportHeight: c },
    { scrollToIndex: a }
  ]) => {
    const f = K();
    return z(
      I(
        f,
        $(e, c, n, s, r, o, l),
        $(t),
        B(([[x, h, S, y, H, p, v, u], m]) => {
          const { calculateViewLocation: w = Do, done: C, ...k } = x, b = Nn(x, h, y - 1), d = ce(b, h.offsetTree, m) + H + p, g = d + Ht(h.sizeTree, b)[1], O = u + p, F = u + S - v, V = w({
            itemBottom: g,
            itemTop: d,
            locationParams: k,
            viewportBottom: F,
            viewportTop: O
          });
          return V !== null ? C && bt(
            I(
              i,
              A((P) => !P),
              // skips the initial publish of false, and the cleanup call.
              // but if scrollingInProgress is true, we skip the initial publish.
              $t(ct(i) ? 1 : 2)
            ),
            C
          ) : C?.(), V;
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
    { didMount: c, propsReady: a },
    { log: f },
    { scrollingInProgress: x },
    { context: h },
    { scrollIntoView: S }
  ]) => {
    const y = T(!1), H = K();
    let p = null;
    function v(C) {
      N(i, {
        align: "end",
        behavior: C,
        index: "LAST"
      });
    }
    Y(
      I(
        dt(I(G(e), $t(1)), c),
        $(G(y), s, l, x),
        B(([[C, k], b, d, g, O]) => {
          let F = k && g, V = "auto";
          return F && (V = $o(b, d || O), F = F && V !== !1), { followOutputBehavior: V, shouldFollow: F, totalCount: C };
        }),
        A(({ shouldFollow: C }) => C)
      ),
      ({ followOutputBehavior: C, totalCount: k }) => {
        p !== null && (p(), p = null), ct(n) !== void 0 ? requestAnimationFrame(() => {
          ct(f)("following output to ", { totalCount: k }, mt.DEBUG), v(C);
        }) : p = bt(t, () => {
          ct(f)("following output to ", { totalCount: k }, mt.DEBUG), v(C), p = null;
        });
      }
    );
    function u(C) {
      const k = bt(r, (b) => {
        C && !b.atBottom && b.notAtBottomBecause === "SIZE_INCREASED" && p === null && (ct(f)("scrolling to bottom due to increased size", {}, mt.DEBUG), v("auto"));
      });
      setTimeout(k, 100);
    }
    Y(
      I(
        dt(G(y), e, a),
        A(([C, , k]) => C !== !1 && k),
        kt(
          ({ value: C }, [, k]) => ({ refreshed: C === k, value: k }),
          { refreshed: !1, value: 0 }
        ),
        A(({ refreshed: C }) => C),
        $(y, e)
      ),
      ([, C]) => {
        ct(l) && u(C !== !1);
      }
    ), Y(H, () => {
      u(ct(y) !== !1);
    }), Y(dt(G(y), r), ([C, k]) => {
      C !== !1 && !k.atBottom && k.notAtBottomBecause === "VIEWPORT_HEIGHT_DECREASING" && v("auto");
    });
    const m = T(null), w = K();
    return z(
      ze(
        I(
          G(o),
          B((C) => C?.length ?? 0)
        ),
        I(G(e))
      ),
      w
    ), Y(
      I(
        dt(I(w, $t(1)), c),
        $(G(m), l, x, h),
        B(([[C, k], b, d, g, O]) => k && d && b?.({ context: O, totalCount: C, scrollingInProgress: g })),
        A((C) => !!C),
        Ft(0)
      ),
      (C) => {
        p !== null && (p(), p = null), ct(n) !== void 0 ? requestAnimationFrame(() => {
          ct(f)("scrolling into view", {}), N(S, C);
        }) : p = bt(t, () => {
          ct(f)("scrolling into view", {}), N(S, C), p = null;
        });
      }
    ), { autoscrollToBottom: H, followOutput: y, scrollIntoViewOnChange: m };
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
  ([{ data: t, firstItemIndex: e, gap: n, sizes: o }, { initialTopMostItemIndex: r }, { initialItemCount: s, listState: i }, { didMount: l }]) => (z(
    I(
      l,
      $(s),
      A(([, c]) => c !== 0),
      $(r, o, e, n, t),
      B(([[, c], a, f, x, h, S = []]) => Kn(c, a, f, x, h, S))
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
    const e = T(!1), n = K(), o = T(!1);
    return z(
      I(
        t,
        $(o, e, n),
        A(([r, s]) => s !== !1 && s !== void 0),
        B(([r, s, i, l]) => {
          const { enter: c, exit: a } = s;
          if (i) {
            if (a(r, l))
              return !1;
          } else if (c(r, l))
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
  const n = K(), o = K(), r = K(), s = T(!1), i = T(void 0);
  return z(
    I(
      dt(n, o),
      B(([{ scrollTop: l, viewportHeight: c }, { offsetTop: a, listHeight: f }]) => ({
        scrollHeight: f,
        scrollTop: Math.max(0, l - a),
        viewportHeight: c
      }))
    ),
    t
  ), z(
    I(
      e,
      $(o),
      B(([l, { offsetTop: c }]) => ({
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
}, st(xt)), qo = q(
  ([
    { sizeRanges: t, sizes: e },
    { headerHeight: n, scrollTop: o },
    { initialTopMostItemIndex: r },
    { didMount: s },
    { useWindowScroll: i, windowScrollContainerState: l, windowViewportRect: c }
  ]) => {
    const a = K(), f = T(void 0), x = T(null), h = T(null);
    return z(l, x), z(c, h), Y(
      I(
        a,
        $(e, o, i, x, h, n)
      ),
      ([S, y, H, p, v, u, m]) => {
        const w = ko(y.sizeTree);
        p && v !== null && u !== null && (H = v.scrollTop - u.offsetTop), H -= m, S({ ranges: w, scrollTop: H });
      }
    ), z(I(f, A(We), B(Yo)), r), z(
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
  return z(
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
const Xo = Xn(() => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent)), Jo = 220, Qo = q(
  ([
    { deviation: t, scrollBy: e, scrollingInProgress: n, scrollTop: o },
    { isAtBottom: r, isScrolling: s, lastJumpDueToItemResize: i, scrollDirection: l },
    { listState: c },
    { beforeUnshiftWith: a, computePrependedHeight: f, gap: x, shiftWithOffset: h, sizes: S },
    { log: y },
    { recalcInProgress: H }
  ]) => {
    let p = 0;
    const v = vt(
      I(
        c,
        $(i),
        kt(
          ([, m, w, C], [{ bottom: k, items: b, offsetBottom: d, totalCount: g }, O]) => {
            const F = k + d;
            let V = 0;
            return w === g && m.length > 0 && b.length > 0 && (b[0].originalIndex === 0 && m[0].originalIndex === 0 || (V = F - C, V !== 0 && (V += O))), [V, b, g, F];
          },
          [0, [], 0, 0]
        ),
        A(([m]) => m !== 0),
        $(o, l, n, r, y, H),
        A(([, m, w, C, , , k]) => p !== 0 && Date.now() - p < Jo ? !1 : !k && !C && m !== 0 && w === ue),
        B(([[m], , , , , w]) => (w("Upward scrolling compensation", { amount: m }, mt.DEBUG), m))
      )
    );
    function u(m) {
      m > 0 ? (N(e, { behavior: "auto", top: -m }), N(t, 0)) : (N(t, 0), N(e, { behavior: "auto", top: -m }));
    }
    return Y(I(v, $(t, s)), ([m, w, C]) => {
      C && Xo() ? N(t, w - m) : u(-m);
    }), Y(
      I(
        dt(It(s, !1), t, H),
        A(([m, w, C]) => !m && !C && w !== 0),
        B(([m, w]) => w),
        Ft(1)
      ),
      u
    ), z(
      I(
        h,
        B((m) => ({ top: -m }))
      ),
      e
    ), Y(
      I(
        a,
        $(S, x, f),
        B(([m, { groupIndices: w, lastSize: C, sizeTree: k }, b, d]) => {
          function g(U) {
            return U * (C + b);
          }
          if (d && w.length === 0)
            return p = Date.now(), d(m);
          if (w.length === 0)
            return g(m);
          let O = 0;
          const F = ie(k, 0);
          let V = 0, P = 0;
          for (; V < m; ) {
            V++, O += F;
            let U = w.length === P + 1 ? 1 / 0 : w[P + 1] - w[P] - 1;
            V + U > m && (O -= F, U = m - V + 1), V += U, O += g(U), P++;
          }
          return O;
        })
      ),
      (m) => {
        N(t, m), requestAnimationFrame(() => {
          N(e, { top: m }), requestAnimationFrame(() => {
            N(t, 0), N(H, !1);
          });
        });
      }
    ), { deviation: t };
  },
  st(xt, pe, Ut, zt, At, De)
), tr = q(
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
    ...c,
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
      heightEstimates: c,
      itemSize: a,
      sizeRanges: f,
      sizes: x,
      statefulTotalCount: h,
      totalCount: S,
      trackItemSizes: y
    },
    { initialItemFinalLocationReached: H, initialTopMostItemIndex: p, scrolledToInitialItem: v },
    u,
    m,
    w,
    C,
    { scrollToIndex: k },
    b,
    { topItemCount: d },
    { groupCounts: g },
    O
  ]) => {
    const { listState: F, minOverscanItemCount: V, topItemsIndexes: P, rangeChanged: U, ...L } = C;
    return z(U, O.scrollSeekRangeChanged), z(
      I(
        O.windowViewportRect,
        B((tt) => tt.visibleHeight)
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
      groupCounts: g,
      heightEstimates: c,
      initialItemFinalLocationReached: H,
      initialTopMostItemIndex: p,
      scrolledToInitialItem: v,
      sizeRanges: f,
      topItemCount: d,
      topItemsIndexes: P,
      // input
      totalCount: S,
      ...w,
      groupIndices: l,
      itemSize: a,
      listState: F,
      minOverscanItemCount: V,
      scrollToIndex: k,
      // output
      statefulTotalCount: h,
      trackItemSizes: y,
      // exported from stateFlagsSystem
      rangeChanged: U,
      ...L,
      // the bag of IO from featureGroup1System
      ...O,
      ...u,
      sizes: x,
      ...m
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
    Qo,
    Zo,
    Dn,
    tr
  )
);
function er(t, e) {
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
  function c(v, u) {
    v.propsReady !== void 0 && N(v.propsReady, !1);
    for (const m of o) {
      const w = v[e.required[m]];
      N(w, u[m]);
    }
    for (const m of r)
      if (m in u) {
        const w = v[e.optional[m]];
        N(w, u[m]);
      }
    v.propsReady !== void 0 && N(v.propsReady, !0);
  }
  function a(v) {
    return s.reduce((u, m) => (u[m] = (w) => {
      const C = v[e.methods[m]];
      N(C, w);
    }, u), {});
  }
  function f(v) {
    return i.reduce((u, m) => (u[m] = Io(v[e.events[m]]), u), {});
  }
  const x = E.forwardRef(function(u, m) {
    const { children: w, ...C } = u, [k] = E.useState(() => ye(So(t), (g) => {
      c(g, C);
    })), [b] = E.useState(an(f, k));
    Ie(() => {
      for (const g of i)
        g in C && Y(b[g], C[g]);
      return () => {
        Object.values(b).map(Me);
      };
    }, [C, b, k]), Ie(() => {
      c(k, C);
    }), E.useImperativeHandle(m, un(a(k)));
    const d = n;
    return /* @__PURE__ */ W(l.Provider, { value: k, children: n !== void 0 ? /* @__PURE__ */ W(d, { ...er([...o, ...r, ...i], C), children: w }) : w });
  }), h = (v) => {
    const u = E.useContext(l);
    return E.useCallback(
      (m) => {
        N(u[v], m);
      },
      [u, v]
    );
  }, S = (v) => {
    const m = E.useContext(l)[v], w = E.useCallback(
      (C) => Y(m, C),
      [m]
    );
    return E.useSyncExternalStore(
      w,
      () => ct(m),
      () => ct(m)
    );
  }, y = (v) => {
    const m = E.useContext(l)[v], [w, C] = E.useState(an(ct, m));
    return Ie(
      () => Y(m, (k) => {
        k !== w && C(un(k));
      }),
      [m, w]
    ), w;
  }, H = parseInt(E.version) >= 18 ? S : y;
  return {
    Component: x,
    useEmitter: (v, u) => {
      const w = E.useContext(l)[v];
      Ie(() => Y(w, u), [u, w]);
    },
    useEmitterValue: H,
    usePublisher: h
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
function nr(t) {
  return "body" in t;
}
function eo(t, e, n, o = Xt, r, s) {
  const i = E.useRef(null), l = E.useRef(null), c = E.useRef(null), a = E.useCallback(
    (h) => {
      let S, y, H;
      const p = h.target;
      if (nr(p) || ke(p)) {
        const u = ke(p) ? p : p.defaultView;
        H = s === !0 ? u.scrollX : u.scrollY, S = s === !0 ? u.document.documentElement.scrollWidth : u.document.documentElement.scrollHeight, y = s === !0 ? u.innerWidth : u.innerHeight;
      } else
        H = s === !0 ? p.scrollLeft : p.scrollTop, S = s === !0 ? p.scrollWidth : p.scrollHeight, y = s === !0 ? p.offsetWidth : p.offsetHeight;
      const v = () => {
        t({
          scrollHeight: S,
          scrollTop: Math.max(H, 0),
          viewportHeight: y
        });
      };
      h.suppressFlushSync === !0 ? v() : ao.flushSync(v), l.current !== null && (H === l.current || H <= 0 || H === S - y) && (l.current = null, e(!0), c.current && (clearTimeout(c.current), c.current = null));
    },
    [t, e, s]
  );
  E.useEffect(() => {
    const h = r || i.current;
    return o(r || i.current), a({ suppressFlushSync: !0, target: h }), h.addEventListener("scroll", a, { passive: !0 }), () => {
      o(null), h.removeEventListener("scroll", a);
    };
  }, [i, a, n, o, r]);
  function f(h) {
    const S = i.current;
    if (!S || (s === !0 ? "offsetWidth" in S && S.offsetWidth === 0 : "offsetHeight" in S && S.offsetHeight === 0))
      return;
    const y = h.behavior === "smooth";
    let H, p, v;
    ke(S) ? (p = Math.max(
      Et(S.document.documentElement, s === !0 ? "width" : "height"),
      s === !0 ? S.document.documentElement.scrollWidth : S.document.documentElement.scrollHeight
    ), H = s === !0 ? S.innerWidth : S.innerHeight, v = s === !0 ? window.scrollX : window.scrollY) : (p = S[s === !0 ? "scrollWidth" : "scrollHeight"], H = Et(S, s === !0 ? "width" : "height"), v = S[s === !0 ? "scrollLeft" : "scrollTop"]);
    const u = p - H;
    if (h.top = Math.ceil(Math.max(Math.min(u, h.top), 0)), Un(H, p) || h.top === v) {
      t({ scrollHeight: p, scrollTop: v, viewportHeight: H }), y && e(!0);
      return;
    }
    y ? (l.current = h.top, c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      c.current = null, l.current = null, e(!0);
    }, 1e3)) : l.current = null, s === !0 && (h = { ...h.behavior !== void 0 ? { behavior: h.behavior } : {}, left: h.top }), S.scrollTo(h);
  }
  function x(h) {
    s === !0 && (h = {
      ...h.behavior !== void 0 ? { behavior: h.behavior } : {},
      ...h.top !== void 0 ? { left: h.top } : {}
    }), i.current.scrollBy(h);
  }
  return { scrollByCallback: x, scrollerRef: i, scrollToCallback: f };
}
function Xe(t) {
  return t;
}
const or = /* @__PURE__ */ q(() => {
  const t = T((l) => `Item ${l}`), e = T((l) => `Group ${l}`), n = T({}), o = T(Xe), r = T("div"), s = T(Xt), i = (l, c = null) => It(
    I(
      n,
      B((a) => a[l]),
      ot()
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
}), rr = /* @__PURE__ */ q(
  ([t, e]) => ({ ...t, ...e }),
  st(Jn, or)
), sr = ({ height: t }) => /* @__PURE__ */ W("div", { style: { height: t } }), ir = { overflowAnchor: "none", position: Ze(), zIndex: 1 }, no = { overflowAnchor: "none" }, lr = { ...no, display: "inline-block", height: "100%" }, Cn = /* @__PURE__ */ E.memo(function({ showTopList: e = !1 }) {
  const n = M("listState"), o = Ct("sizeRanges"), r = M("useWindowScroll"), s = M("customScrollParent"), i = Ct("windowScrollContainerState"), l = Ct("scrollContainerState"), c = s || r ? i : l, a = M("itemContent"), f = M("context"), x = M("groupContent"), h = M("trackItemSizes"), S = M("itemSize"), y = M("log"), H = Ct("gap"), p = M("horizontalDirection"), { callbackRef: v } = zn(
    o,
    S,
    h,
    e ? Xt : c,
    y,
    H,
    s,
    p,
    M("skipAnimationFrameInResizeObserver")
  ), [u, m] = E.useState(0);
  tn("deviation", (L) => {
    u !== L && m(L);
  });
  const w = M("EmptyPlaceholder"), C = M("ScrollSeekPlaceholder") ?? sr, k = M("ListComponent"), b = M("ItemComponent"), d = M("GroupComponent"), g = M("computeItemKey"), O = M("isSeeking"), F = M("groupIndices").length > 0, V = M("alignToBottom"), P = M("initialItemFinalLocationReached"), U = e ? {} : {
    boxSizing: "border-box",
    ...p ? {
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
  return !e && n.totalCount === 0 && w !== null && w !== void 0 ? /* @__PURE__ */ W(w, { ...rt(w, f) }) : /* @__PURE__ */ W(
    k,
    {
      ...rt(k, f),
      "data-testid": e ? "virtuoso-top-item-list" : "virtuoso-item-list",
      ref: v,
      style: U,
      children: (e ? n.topItems : n.items).map((L) => {
        const tt = L.originalIndex, et = g(tt + n.firstItemIndex, L.data, f);
        return O ? /* @__PURE__ */ Nt(
          C,
          {
            ...rt(C, f),
            height: L.size,
            index: L.index,
            key: et,
            type: L.type || "item",
            ...L.type === "group" ? {} : { groupIndex: L.groupIndex }
          }
        ) : L.type === "group" ? /* @__PURE__ */ Nt(
          d,
          {
            ...rt(d, f),
            "data-index": tt,
            "data-item-index": L.index,
            "data-known-size": L.size,
            key: et,
            style: ir
          },
          x(L.index, f)
        ) : /* @__PURE__ */ Nt(
          b,
          {
            ...rt(b, f),
            ...oo(b, L.data),
            "data-index": tt,
            "data-item-group-index": L.groupIndex,
            "data-item-index": L.index,
            "data-known-size": L.size,
            key: et,
            style: p ? lr : no
          },
          F ? a(L.index, L.groupIndex, L.data, f) : a(L.index, L.data, f)
        );
      })
    }
  );
}), cr = {
  height: "100%",
  outline: "none",
  overflowY: "auto",
  position: "relative",
  WebkitOverflowScrolling: "touch"
}, ur = {
  outline: "none",
  overflowX: "auto",
  position: "relative"
}, Jt = (t) => ({
  height: "100%",
  position: "absolute",
  top: 0,
  width: "100%",
  ...t ? { display: "flex", flexDirection: "column" } : void 0
}), ar = {
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
const dr = /* @__PURE__ */ E.memo(function() {
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
}), fr = /* @__PURE__ */ E.memo(function() {
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
  return E.memo(function({ children: s, style: i, context: l, ...c }) {
    const a = n("scrollContainerState"), f = e("ScrollerComponent"), x = n("smoothScrollTargetReached"), h = e("scrollerRef"), S = e("horizontalDirection") || !1, { scrollByCallback: y, scrollerRef: H, scrollToCallback: p } = eo(
      a,
      x,
      f,
      h,
      void 0,
      S
    );
    return t("scrollTo", p), t("scrollBy", y), /* @__PURE__ */ W(
      f,
      {
        "data-testid": "virtuoso-scroller",
        "data-virtuoso-scroller": !0,
        ref: H,
        style: { ...S ? ur : cr, ...i },
        tabIndex: 0,
        ...c,
        ...rt(f, l),
        children: s
      }
    );
  });
}
function Qe({ useEmitter: t, useEmitterValue: e, usePublisher: n }) {
  return E.memo(function({ children: s, style: i, context: l, ...c }) {
    const a = n("windowScrollContainerState"), f = e("ScrollerComponent"), x = n("smoothScrollTargetReached"), h = e("totalListHeight"), S = e("deviation"), y = e("customScrollParent"), H = E.useRef(null), p = e("scrollerRef"), { scrollByCallback: v, scrollerRef: u, scrollToCallback: m } = eo(
      a,
      x,
      f,
      p,
      y
    );
    return to(() => (u.current = y || H.current?.ownerDocument.defaultView, () => {
      u.current = null;
    }), [u, y]), t("windowScrollTo", m), t("scrollBy", v), /* @__PURE__ */ W(
      f,
      {
        ref: H,
        "data-virtuoso-scroller": !0,
        style: { position: "relative", ...i, ...h !== 0 ? { height: h + S } : void 0 },
        ...c,
        ...rt(f, l),
        children: s
      }
    );
  });
}
const mr = ({ children: t }) => {
  const e = E.useContext(Re), n = Ct("viewportHeight"), o = Ct("fixedItemHeight"), r = M("alignToBottom"), s = M("horizontalDirection"), i = E.useMemo(
    () => re(n, (c) => Et(c, s ? "width" : "height")),
    [n, s]
  ), l = Lt(i, !0, M("skipAnimationFrameInResizeObserver"));
  return E.useEffect(() => {
    e && (n(e.viewportHeight), o(e.itemHeight));
  }, [e, n, o]), /* @__PURE__ */ W("div", { "data-viewport-type": "element", ref: l, style: Jt(r), children: t });
}, pr = ({ children: t }) => {
  const e = E.useContext(Re), n = Ct("windowViewportRect"), o = Ct("fixedItemHeight"), r = M("customScrollParent"), s = Ne(
    n,
    r,
    M("skipAnimationFrameInResizeObserver")
  ), i = M("alignToBottom");
  return E.useEffect(() => {
    e && (o(e.itemHeight), n({ listHeight: 0, offsetTop: 0, visibleHeight: e.viewportHeight, visibleWidth: 100 }));
  }, [e, n, o]), /* @__PURE__ */ W("div", { "data-viewport-type": "window", ref: s, style: Jt(i), children: t });
}, hr = ({ children: t }) => {
  const e = M("TopItemListComponent") ?? "div", n = M("headerHeight"), o = { ...ar, marginTop: `${n}px` }, r = M("context");
  return /* @__PURE__ */ W(e, { style: o, ...rt(e, r), children: t });
}, gr = /* @__PURE__ */ E.memo(function(e) {
  const n = M("useWindowScroll"), o = M("topItemsIndexes").length > 0, r = M("customScrollParent"), s = M("context");
  return /* @__PURE__ */ Dt(r || n ? xr : Ir, { ...e, context: s, children: [
    o && /* @__PURE__ */ W(hr, { children: /* @__PURE__ */ W(Cn, { showTopList: !0 }) }),
    /* @__PURE__ */ Dt(r || n ? pr : mr, { children: [
      /* @__PURE__ */ W(dr, {}),
      /* @__PURE__ */ W(Cn, {}),
      /* @__PURE__ */ W(fr, {})
    ] })
  ] });
}), {
  Component: ro,
  useEmitter: tn,
  useEmitterValue: M,
  usePublisher: Ct
} = /* @__PURE__ */ Ye(
  rr,
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
  gr
), Ir = /* @__PURE__ */ Je({ useEmitter: tn, useEmitterValue: M, usePublisher: Ct }), xr = /* @__PURE__ */ Qe({ useEmitter: tn, useEmitterValue: M, usePublisher: Ct }), Yr = ro, Zr = ro, Sr = /* @__PURE__ */ q(() => {
  const t = T((a) => /* @__PURE__ */ Dt("td", { children: [
    "Item $",
    a
  ] })), e = T(null), n = T((a) => /* @__PURE__ */ Dt("td", { colSpan: 1e3, children: [
    "Group ",
    a
  ] })), o = T(null), r = T(null), s = T({}), i = T(Xe), l = T(Xt), c = (a, f = null) => It(
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
}), Tr = /* @__PURE__ */ q(
  ([t, e]) => ({ ...t, ...e }),
  st(Jn, Sr)
), vr = ({ height: t }) => /* @__PURE__ */ W("tr", { children: /* @__PURE__ */ W("td", { style: { height: t } }) }), Cr = ({ height: t }) => /* @__PURE__ */ W("tr", { children: /* @__PURE__ */ W("td", { style: { border: 0, height: t, padding: 0 } }) }), wr = { overflowAnchor: "none" }, wn = { position: Ze(), zIndex: 2, overflowAnchor: "none" }, yn = /* @__PURE__ */ E.memo(function({ showTopList: e = !1 }) {
  const n = _("listState"), o = _("computeItemKey"), r = _("firstItemIndex"), s = _("context"), i = _("isSeeking"), l = _("fixedHeaderHeight"), c = _("groupIndices").length > 0, a = _("itemContent"), f = _("groupContent"), x = _("ScrollSeekPlaceholder") ?? vr, h = _("GroupComponent"), S = _("TableRowComponent"), y = (e ? n.topItems : []).reduce((p, v, u) => (u === 0 ? p.push(v.size) : p.push(p[u - 1] + v.size), p), []);
  return (e ? n.topItems : n.items).map((p) => {
    const v = p.originalIndex, u = o(v + r, p.data, s), m = e ? v === 0 ? 0 : y[v - 1] : 0;
    return i ? /* @__PURE__ */ Nt(
      x,
      {
        ...rt(x, s),
        height: p.size,
        index: p.index,
        key: u,
        type: p.type || "item"
      }
    ) : p.type === "group" ? /* @__PURE__ */ Nt(
      h,
      {
        ...rt(h, s),
        "data-index": v,
        "data-item-index": p.index,
        "data-known-size": p.size,
        key: u,
        style: {
          ...wn,
          top: l
        }
      },
      f(p.index, s)
    ) : /* @__PURE__ */ Nt(
      S,
      {
        ...rt(S, s),
        ...oo(S, p.data),
        "data-index": v,
        "data-item-index": p.index,
        "data-known-size": p.size,
        "data-item-group-index": p.groupIndex,
        key: u,
        style: e ? { ...wn, top: l + m } : wr
      },
      c ? a(p.index, p.groupIndex, p.data, s) : a(p.index, p.data, s)
    );
  });
}), yr = /* @__PURE__ */ E.memo(function() {
  const e = _("listState"), n = _("topItemsIndexes").length > 0, o = Rt("sizeRanges"), r = _("useWindowScroll"), s = _("customScrollParent"), i = Rt("windowScrollContainerState"), l = Rt("scrollContainerState"), c = s || r ? i : l, a = _("trackItemSizes"), f = _("itemSize"), x = _("log"), { callbackRef: h, ref: S } = zn(
    o,
    f,
    a,
    c,
    x,
    void 0,
    s,
    !1,
    _("skipAnimationFrameInResizeObserver")
  ), [y, H] = E.useState(0);
  en("deviation", (F) => {
    y !== F && (S.current.style.marginTop = `${F}px`, H(F));
  });
  const p = _("EmptyPlaceholder"), v = _("FillerRow") ?? Cr, u = _("TableBodyComponent"), m = _("paddingTopAddition"), w = _("statefulTotalCount"), C = _("context");
  if (w === 0 && p !== null && p !== void 0)
    return /* @__PURE__ */ W(p, { ...rt(p, C) });
  const k = (n ? e.topItems : []).reduce((F, V) => F + V.size, 0), b = e.offsetTop + m + y - k, d = e.offsetBottom, g = b > 0 ? /* @__PURE__ */ W(v, { context: C, height: b }, "padding-top") : null, O = d > 0 ? /* @__PURE__ */ W(v, { context: C, height: d }, "padding-bottom") : null;
  return /* @__PURE__ */ Dt(u, { "data-testid": "virtuoso-item-list", ref: h, ...rt(u, C), children: [
    g,
    n && /* @__PURE__ */ W(yn, { showTopList: !0 }),
    /* @__PURE__ */ W(yn, {}),
    O
  ] });
}), br = ({ children: t }) => {
  const e = E.useContext(Re), n = Rt("viewportHeight"), o = Rt("fixedItemHeight"), r = Lt(
    E.useMemo(() => re(n, (s) => Et(s, "height")), [n]),
    !0,
    _("skipAnimationFrameInResizeObserver")
  );
  return E.useEffect(() => {
    e && (n(e.viewportHeight), o(e.itemHeight));
  }, [e, n, o]), /* @__PURE__ */ W("div", { "data-viewport-type": "element", ref: r, style: Jt(!1), children: t });
}, Rr = ({ children: t }) => {
  const e = E.useContext(Re), n = Rt("windowViewportRect"), o = Rt("fixedItemHeight"), r = _("customScrollParent"), s = Ne(
    n,
    r,
    _("skipAnimationFrameInResizeObserver")
  );
  return E.useEffect(() => {
    e && (o(e.itemHeight), n({ listHeight: 0, offsetTop: 0, visibleHeight: e.viewportHeight, visibleWidth: 100 }));
  }, [e, n, o]), /* @__PURE__ */ W("div", { "data-viewport-type": "window", ref: s, style: Jt(!1), children: t });
}, Hr = /* @__PURE__ */ E.memo(function(e) {
  const n = _("useWindowScroll"), o = _("customScrollParent"), r = Rt("fixedHeaderHeight"), s = Rt("fixedFooterHeight"), i = _("fixedHeaderContent"), l = _("fixedFooterContent"), c = _("context"), a = Lt(
    E.useMemo(() => re(r, (u) => Et(u, "height")), [r]),
    !0,
    _("skipAnimationFrameInResizeObserver")
  ), f = Lt(
    E.useMemo(() => re(s, (u) => Et(u, "height")), [s]),
    !0,
    _("skipAnimationFrameInResizeObserver")
  ), x = o || n ? Br : Er, h = o || n ? Rr : br, S = _("TableComponent"), y = _("TableHeadComponent"), H = _("TableFooterComponent"), p = i ? /* @__PURE__ */ W(
    y,
    {
      ref: a,
      style: { position: "sticky", top: 0, zIndex: 2 },
      ...rt(y, c),
      children: i()
    },
    "TableHead"
  ) : null, v = l ? /* @__PURE__ */ W(
    H,
    {
      ref: f,
      style: { bottom: 0, position: "sticky", zIndex: 1 },
      ...rt(H, c),
      children: l()
    },
    "TableFoot"
  ) : null;
  return /* @__PURE__ */ W(x, { ...e, ...rt(x, c), children: /* @__PURE__ */ W(h, { children: /* @__PURE__ */ Dt(S, { style: { borderSpacing: 0, overflowAnchor: "none" }, ...rt(S, c), children: [
    p,
    /* @__PURE__ */ W(yr, {}, "TableBody"),
    v
  ] }) }) });
}), {
  Component: so,
  useEmitter: en,
  useEmitterValue: _,
  usePublisher: Rt
} = /* @__PURE__ */ Ye(
  Tr,
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
  Hr
), Er = /* @__PURE__ */ Je({ useEmitter: en, useEmitterValue: _, usePublisher: Rt }), Br = /* @__PURE__ */ Qe({ useEmitter: en, useEmitterValue: _, usePublisher: Rt }), Xr = so, Jr = so, bn = {
  bottom: 0,
  itemHeight: 0,
  items: [],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, Or = {
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
function kr(t) {
  return {
    ...Or,
    items: t
  };
}
function xe(t, e) {
  return t !== void 0 && t.width === e.width && t.height === e.height;
}
function Lr(t, e) {
  return t !== void 0 && t.column === e.column && t.row === e.row;
}
const zr = /* @__PURE__ */ q(
  ([
    { increaseViewportBy: t, listBoundary: e, overscan: n, visibleRange: o },
    { footerHeight: r, headerHeight: s, scrollBy: i, scrollContainerState: l, scrollTo: c, scrollTop: a, smoothScrollTargetReached: f, viewportHeight: x },
    h,
    S,
    { didMount: y, propsReady: H },
    { customScrollParent: p, useWindowScroll: v, windowScrollContainerState: u, windowScrollTo: m, windowViewportRect: w },
    C
  ]) => {
    const k = T(0), b = T(0), d = T(bn), g = T({ height: 0, width: 0 }), O = T({ height: 0, width: 0 }), F = K(), V = K(), P = T(0), U = T(null), L = T({ column: 0, row: 0 }), tt = K(), et = K(), ht = T(!1), J = T(0), nt = T(!0), pt = T(!1), yt = T(!1);
    Y(
      I(
        y,
        $(J),
        A(([R, D]) => D !== 0)
      ),
      () => {
        N(nt, !1);
      }
    ), Y(
      I(
        dt(y, nt, O, g, J, pt),
        A(([R, D, j, it, , Q]) => R && !D && j.height !== 0 && it.height !== 0 && !Q)
      ),
      ([, , , , R]) => {
        N(pt, !0), Ue(1, () => {
          N(F, R);
        }), bt(I(a), () => {
          N(e, [0, 0]), N(nt, !0);
        });
      }
    ), z(
      I(
        et,
        A((R) => R != null && R.scrollTop > 0),
        Ot(0)
      ),
      b
    ), Y(
      I(
        y,
        $(et),
        A(([, R]) => R != null)
      ),
      ([, R]) => {
        R && (N(g, R.viewport), N(O, R.item), N(L, R.gap), R.scrollTop > 0 && (N(ht, !0), bt(I(a, $t(1)), (D) => {
          N(ht, !1);
        }), N(c, { top: R.scrollTop })));
      }
    ), z(
      I(
        g,
        B(({ height: R }) => R)
      ),
      x
    ), z(
      I(
        dt(
          G(g, xe),
          G(O, xe),
          G(L, (R, D) => R !== void 0 && R.column === D.column && R.row === D.row),
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
    ), z(
      I(
        dt(
          G(k),
          o,
          G(L, Lr),
          G(O, xe),
          G(g, xe),
          G(U),
          G(b),
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
              return kr(En(cn, uo, ut));
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
    ), z(
      I(
        U,
        A((R) => R !== null),
        B((R) => R.length)
      ),
      k
    ), z(
      I(
        dt(g, O, d, L),
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
    z(
      I(
        a,
        $(gt),
        B(([R, D]) => D || R !== 0)
      ),
      gt
    );
    const Kt = vt(
      I(
        dt(d, k),
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
    z(Bt, S.scrollSeekRangeChanged), z(
      I(
        F,
        $(g, O, k, L),
        B(([R, D, j, it, Q]) => {
          const Z = $n(R), { align: ut, behavior: St, offset: at } = Z;
          let Vt = Z.index;
          Vt === "LAST" && (Vt = it - 1), Vt = oe(0, Vt, Le(it - 1, Vt));
          let Pt = Ae(D, Q, j, Vt);
          return ut === "end" ? Pt = Hn(Pt - D.height + j.height) : ut === "center" && (Pt = Hn(Pt - D.height / 2 + j.height / 2)), at !== void 0 && at !== 0 && (Pt += at), { behavior: St, top: Pt };
        })
      ),
      c
    );
    const te = It(
      I(
        d,
        B((R) => R.offsetBottom + R.bottom)
      ),
      0
    );
    return z(
      I(
        w,
        B((R) => ({ height: R.visibleHeight, width: R.visibleWidth }))
      ),
      g
    ), {
      customScrollParent: p,
      // input
      data: U,
      deviation: P,
      footerHeight: r,
      gap: L,
      headerHeight: s,
      increaseViewportBy: t,
      initialItemCount: b,
      itemDimensions: O,
      overscan: n,
      restoreStateFrom: et,
      scrollBy: i,
      scrollContainerState: l,
      scrollHeight: V,
      scrollTo: c,
      scrollToIndex: F,
      scrollTop: a,
      smoothScrollTargetReached: f,
      totalCount: k,
      useWindowScroll: v,
      viewportDimensions: g,
      windowScrollContainerState: u,
      windowScrollTo: m,
      windowViewportRect: w,
      ...S,
      // output
      gridState: d,
      horizontalDirection: yt,
      initialTopMostItemIndex: J,
      totalListHeight: te,
      ...h,
      endReached: Kt,
      propsReady: H,
      rangeChanged: Bt,
      startReached: Qt,
      stateChanged: tt,
      stateRestoreInProgress: ht,
      ...C
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
const Fr = /* @__PURE__ */ q(() => {
  const t = T((x) => `Item ${x}`), e = T({}), n = T(null), o = T("virtuoso-grid-item"), r = T("virtuoso-grid-list"), s = T(Xe), i = T("div"), l = T(Xt), c = (x, h = null) => It(
    I(
      e,
      B((S) => S[x]),
      ot()
    ),
    h
  ), a = T(!1), f = T(!1);
  return z(G(f), a), {
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
    readyStateChanged: a,
    reportReadyState: f,
    ScrollerComponent: c("Scroller", "div"),
    scrollerRef: l,
    ScrollSeekPlaceholder: c("ScrollSeekPlaceholder", "div")
  };
}), Vr = /* @__PURE__ */ q(
  ([t, e]) => ({ ...t, ...e }),
  st(zr, Fr)
), Pr = /* @__PURE__ */ E.memo(function() {
  const e = lt("gridState"), n = lt("listClassName"), o = lt("itemClassName"), r = lt("itemContent"), s = lt("computeItemKey"), i = lt("isSeeking"), l = wt("scrollHeight"), c = lt("ItemComponent"), a = lt("ListComponent"), f = lt("ScrollSeekPlaceholder"), x = lt("context"), h = wt("itemDimensions"), S = wt("gap"), y = lt("log"), H = lt("stateRestoreInProgress"), p = wt("reportReadyState"), v = Lt(
    E.useMemo(
      () => (u) => {
        const m = u.parentElement.parentElement.scrollHeight;
        l(m);
        const w = u.firstChild;
        if (w !== null) {
          const { height: C, width: k } = w.getBoundingClientRect();
          h({ height: C, width: k });
        }
        S({
          column: On("column-gap", getComputedStyle(u).columnGap, y),
          row: On("row-gap", getComputedStyle(u).rowGap, y)
        });
      },
      [l, h, S, y]
    ),
    !0,
    !1
  );
  return to(() => {
    e.itemHeight > 0 && e.itemWidth > 0 && p(!0);
  }, [e]), H ? null : /* @__PURE__ */ W(
    a,
    {
      className: n,
      ref: v,
      ...rt(a, x),
      "data-testid": "virtuoso-item-list",
      style: { paddingBottom: e.offsetBottom, paddingTop: e.offsetTop },
      children: e.items.map((u) => {
        const m = s(u.index, u.data, x);
        return i ? /* @__PURE__ */ W(
          f,
          {
            ...rt(f, x),
            height: e.itemHeight,
            index: u.index,
            width: e.itemWidth
          },
          m
        ) : /* @__PURE__ */ Nt(
          c,
          {
            ...rt(c, x),
            className: o,
            "data-index": u.index,
            key: m
          },
          r(u.index, u.data, x)
        );
      })
    }
  );
}), Gr = E.memo(function() {
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
}), Ar = E.memo(function() {
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
}), Wr = ({ children: t }) => {
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
}, Mr = ({ children: t }) => {
  const e = E.useContext(Qn), n = wt("windowViewportRect"), o = wt("itemDimensions"), r = lt("customScrollParent"), s = Ne(n, r, !1);
  return E.useEffect(() => {
    e && (o({ height: e.itemHeight, width: e.itemWidth }), n({ listHeight: 0, offsetTop: 0, visibleHeight: e.viewportHeight, visibleWidth: e.viewportWidth }));
  }, [e, n, o]), /* @__PURE__ */ W("div", { ref: s, style: Jt(!1), children: t });
}, _r = /* @__PURE__ */ E.memo(function({ ...e }) {
  const n = lt("useWindowScroll"), o = lt("customScrollParent"), r = o || n ? $r : Dr, s = o || n ? Mr : Wr, i = lt("context");
  return /* @__PURE__ */ W(r, { ...e, ...rt(r, i), children: /* @__PURE__ */ Dt(s, { children: [
    /* @__PURE__ */ W(Gr, {}),
    /* @__PURE__ */ W(Pr, {}),
    /* @__PURE__ */ W(Ar, {})
  ] }) });
}), {
  Component: Nr,
  useEmitter: lo,
  useEmitterValue: lt,
  usePublisher: wt
} = /* @__PURE__ */ Ye(
  Vr,
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
  _r
), Dr = /* @__PURE__ */ Je({ useEmitter: lo, useEmitterValue: lt, usePublisher: wt }), $r = /* @__PURE__ */ Qe({ useEmitter: lo, useEmitterValue: lt, usePublisher: wt });
function On(t, e, n) {
  return e !== "normal" && e?.endsWith("px") !== !0 && n(`${t} was not resolved to pixel value correctly`, e, mt.WARN), e === "normal" ? 0 : parseInt(e ?? "0", 10);
}
const Qr = Nr;
export {
  Jr as GroupedTableVirtuoso,
  Zr as GroupedVirtuoso,
  mt as LogLevel,
  Xr as TableVirtuoso,
  Yr as Virtuoso,
  Qr as VirtuosoGrid,
  Qn as VirtuosoGridMockContext,
  Re as VirtuosoMockContext
};
