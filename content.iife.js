var __defProp = Object.defineProperty,
  __defNormalProp = (t, e, n) =>
    e in t
      ? __defProp(t, e, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: n,
        })
      : (t[e] = n),
  __publicField = (t, e, n) => (
    __defNormalProp(t, "symbol" != typeof e ? e + "" : e, n), n
  );
!(function () {
  "use strict";
  function t() {}
  function e(t, e) {
    for (const n in e) t[n] = e[n];
    return t;
  }
  function n(t) {
    return t();
  }
  function l() {
    return Object.create(null);
  }
  function o(t) {
    t.forEach(n);
  }
  function r(t) {
    return "function" == typeof t;
  }
  function s(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && "object" == typeof t) || "function" == typeof t;
  }
  function a(e, ...n) {
    if (null == e) {
      for (const t of n) t(void 0);
      return t;
    }
    const l = e.subscribe(...n);
    return l.unsubscribe ? () => l.unsubscribe() : l;
  }
  function c(t, e, n, l) {
    if (t) {
      const o = i(t, e, n, l);
      return t[0](o);
    }
  }
  function i(t, n, l, o) {
    return t[1] && o ? e(l.ctx.slice(), t[1](o(n))) : l.ctx;
  }
  function u(t, e, n, l) {
    if (t[2] && l) {
      const o = t[2](l(n));
      if (void 0 === e.dirty) return o;
      if ("object" == typeof o) {
        const t = [],
          n = Math.max(e.dirty.length, o.length);
        for (let l = 0; l < n; l += 1) t[l] = e.dirty[l] | o[l];
        return t;
      }
      return e.dirty | o;
    }
    return e.dirty;
  }
  function f(t, e, n, l, o, r) {
    if (o) {
      const s = i(e, n, l, r);
      t.p(s, o);
    }
  }
  function d(t) {
    if (t.ctx.length > 32) {
      const e = [],
        n = t.ctx.length / 32;
      for (let t = 0; t < n; t++) e[t] = -1;
      return e;
    }
    return -1;
  }
  function $(t) {
    const e = {};
    for (const n in t) "$" !== n[0] && (e[n] = t[n]);
    return e;
  }
  function p(t, e) {
    const n = {};
    e = new Set(e);
    for (const l in t) e.has(l) || "$" === l[0] || (n[l] = t[l]);
    return n;
  }
  function m(t) {
    return null == t ? "" : t;
  }
  function g(t, e) {
    t.appendChild(e);
  }
  function h(t, e, n) {
    const l = (function (t) {
      if (!t) return document;
      const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
      if (e && e.host) return e;
      return t.ownerDocument;
    })(t);
    if (!l.getElementById(e)) {
      const t = w("style");
      (t.id = e),
        (t.textContent = n),
        (function (t, e) {
          g(t.head || t, e), e.sheet;
        })(l, t);
    }
  }
  function v(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function b(t) {
    t.parentNode && t.parentNode.removeChild(t);
  }
  function x(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
  }
  function w(t) {
    return document.createElement(t);
  }
  function y(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function k(t) {
    return document.createTextNode(t);
  }
  function N() {
    return k(" ");
  }
  function M() {
    return k("");
  }
  function _(t, e, n, l) {
    return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
  }
  function j(t, e, n) {
    null == n
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function E(t, e) {
    for (const n in e) j(t, n, e[n]);
  }
  function z(t, e) {
    (e = "" + e), t.data !== e && (t.data = e);
  }
  function D(t, e) {
    t.value = null == e ? "" : e;
  }
  function T(t, e, n, l) {
    null == n
      ? t.style.removeProperty(e)
      : t.style.setProperty(e, n, l ? "important" : "");
  }
  function S(t, e) {
    return new t(e);
  }
  let L;
  function R(t) {
    L = t;
  }
  function A() {
    if (!L) throw new Error("Function called outside component initialization");
    return L;
  }
  function O(t) {
    A().$$.on_mount.push(t);
  }
  function C() {
    const t = A();
    return (e, n, { cancelable: l = !1 } = {}) => {
      const o = t.$$.callbacks[e];
      if (o) {
        const r = (function (
          t,
          e,
          { bubbles: n = !1, cancelable: l = !1 } = {}
        ) {
          return new CustomEvent(t, { detail: e, bubbles: n, cancelable: l });
        })(e, n, { cancelable: l });
        return (
          o.slice().forEach((e) => {
            e.call(t, r);
          }),
          !r.defaultPrevented
        );
      }
      return !0;
    };
  }
  function I(t, e) {
    return A().$$.context.set(t, e), e;
  }
  function U(t) {
    return A().$$.context.get(t);
  }
  function Y(t, e) {
    const n = t.$$.callbacks[e.type];
    n && n.slice().forEach((t) => t.call(this, e));
  }
  const P = [],
    F = [];
  let B = [];
  const Q = [],
    H = Promise.resolve();
  let q = !1;
  function G(t) {
    B.push(t);
  }
  const W = new Set();
  let J = 0;
  function V() {
    if (0 !== J) return;
    const t = L;
    do {
      try {
        for (; J < P.length; ) {
          const t = P[J];
          J++, R(t), X(t.$$);
        }
      } catch (e) {
        throw ((P.length = 0), (J = 0), e);
      }
      for (R(null), P.length = 0, J = 0; F.length; ) F.pop()();
      for (let t = 0; t < B.length; t += 1) {
        const e = B[t];
        W.has(e) || (W.add(e), e());
      }
      B.length = 0;
    } while (P.length);
    for (; Q.length; ) Q.pop()();
    (q = !1), W.clear(), R(t);
  }
  function X(t) {
    if (null !== t.fragment) {
      t.update(), o(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(G);
    }
  }
  const K = new Set();
  let Z;
  function tt() {
    Z = { r: 0, c: [], p: Z };
  }
  function et() {
    Z.r || o(Z.c), (Z = Z.p);
  }
  function nt(t, e) {
    t && t.i && (K.delete(t), t.i(e));
  }
  function lt(t, e, n, l) {
    if (t && t.o) {
      if (K.has(t)) return;
      K.add(t),
        Z.c.push(() => {
          K.delete(t), l && (n && t.d(1), l());
        }),
        t.o(e);
    } else l && l();
  }
  function ot(t) {
    return void 0 !== (null == t ? void 0 : t.length) ? t : Array.from(t);
  }
  function rt(t, e) {
    const n = {},
      l = {},
      o = { $$scope: 1 };
    let r = t.length;
    for (; r--; ) {
      const s = t[r],
        a = e[r];
      if (a) {
        for (const t in s) t in a || (l[t] = 1);
        for (const t in a) o[t] || ((n[t] = a[t]), (o[t] = 1));
        t[r] = a;
      } else for (const t in s) o[t] = 1;
    }
    for (const s in l) s in n || (n[s] = void 0);
    return n;
  }
  function st(t) {
    return "object" == typeof t && null !== t ? t : {};
  }
  function at(t) {
    t && t.c();
  }
  function ct(t, e, l) {
    const { fragment: s, after_update: a } = t.$$;
    s && s.m(e, l),
      G(() => {
        const e = t.$$.on_mount.map(n).filter(r);
        t.$$.on_destroy ? t.$$.on_destroy.push(...e) : o(e),
          (t.$$.on_mount = []);
      }),
      a.forEach(G);
  }
  function it(t, e) {
    const n = t.$$;
    null !== n.fragment &&
      (!(function (t) {
        const e = [],
          n = [];
        B.forEach((l) => (-1 === t.indexOf(l) ? e.push(l) : n.push(l))),
          n.forEach((t) => t()),
          (B = e);
      })(n.after_update),
      o(n.on_destroy),
      n.fragment && n.fragment.d(e),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function ut(t, e) {
    -1 === t.$$.dirty[0] &&
      (P.push(t), q || ((q = !0), H.then(V)), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function ft(e, n, r, s, a, c, i = null, u = [-1]) {
    const f = L;
    R(e);
    const d = (e.$$ = {
      fragment: null,
      ctx: [],
      props: c,
      update: t,
      not_equal: a,
      bound: l(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(n.context || (f ? f.$$.context : [])),
      callbacks: l(),
      dirty: u,
      skip_bound: !1,
      root: n.target || f.$$.root,
    });
    i && i(d.root);
    let $ = !1;
    if (
      ((d.ctx = r
        ? r(e, n.props || {}, (t, n, ...l) => {
            const o = l.length ? l[0] : n;
            return (
              d.ctx &&
                a(d.ctx[t], (d.ctx[t] = o)) &&
                (!d.skip_bound && d.bound[t] && d.bound[t](o), $ && ut(e, t)),
              n
            );
          })
        : []),
      d.update(),
      ($ = !0),
      o(d.before_update),
      (d.fragment = !!s && s(d.ctx)),
      n.target)
    ) {
      if (n.hydrate) {
        const t = ((p = n.target), Array.from(p.childNodes));
        d.fragment && d.fragment.l(t), t.forEach(b);
      } else d.fragment && d.fragment.c();
      n.intro && nt(e.$$.fragment), ct(e, n.target, n.anchor), V();
    }
    var p;
    R(f);
  }
  class dt {
    constructor() {
      __publicField(this, "$$"), __publicField(this, "$$set");
    }
    $destroy() {
      it(this, 1), (this.$destroy = t);
    }
    $on(e, n) {
      if (!r(n)) return t;
      const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        l.push(n),
        () => {
          const t = l.indexOf(n);
          -1 !== t && l.splice(t, 1);
        }
      );
    }
    $set(t) {
      var e;
      this.$$set &&
        ((e = t), 0 !== Object.keys(e).length) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  }
  function $t(e) {
    let n, l, o;
    return {
      c() {
        (n = w("button")),
          (n.innerHTML =
            '<span class="h-full w-1/4 rounded-sm bg-white mr-5 flex justify-center items-center"><img src="https://img.icons8.com/color/48/000000/google-logo.png" class="h-full" alt="google ka logo hona chahiye!!"/></span> <span class="text-2xl text-white">Sign in</span>'),
          j(n, "aria-label", "google-login"),
          j(
            n,
            "class",
            "variant-filled-primary p-1 rounded-sm w-2/5 flex items-center h-10"
          );
      },
      m(t, r) {
        v(t, n, r), l || ((o = _(n, "click", e[0])), (l = !0));
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && b(n), (l = !1), o();
      },
    };
  }
  function pt(t) {
    return [
      async () => {
        const t = await fetch("http://localhost:9090/api/v1/auth/googleLogin", {
            method: "GET",
            credentials: "include",
          }),
          e = await t.json();
        e.success && (window.location.href = e.loginUrl);
      },
    ];
  }
  "undefined" != typeof window &&
    (window.__svelte || (window.__svelte = { v: new Set() })).v.add("4");
  class mt extends dt {
    constructor(t) {
      super(), ft(this, t, pt, $t, s, {});
    }
  }
  var gt = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
  };
  function ht(t, e, n) {
    const l = t.slice();
    return (l[9] = e[n][0]), (l[10] = e[n][1]), l;
  }
  function vt(t) {
    let n,
      l = [t[10]],
      o = {};
    for (let r = 0; r < l.length; r += 1) o = e(o, l[r]);
    return {
      c() {
        (n = y(t[9])), E(n, o);
      },
      m(t, e) {
        v(t, n, e);
      },
      p(t, e) {
        E(n, (o = rt(l, [16 & e && t[10]])));
      },
      d(t) {
        t && b(n);
      },
    };
  }
  function bt(t) {
    let e,
      n = t[9],
      l = t[9] && vt(t);
    return {
      c() {
        l && l.c(), (e = M());
      },
      m(t, n) {
        l && l.m(t, n), v(t, e, n);
      },
      p(t, o) {
        t[9]
          ? n
            ? s(n, t[9])
              ? (l.d(1), (l = vt(t)), (n = t[9]), l.c(), l.m(e.parentNode, e))
              : l.p(t, o)
            : ((l = vt(t)), (n = t[9]), l.c(), l.m(e.parentNode, e))
          : n && (l.d(1), (l = null), (n = t[9]));
      },
      d(t) {
        t && b(e), l && l.d(t);
      },
    };
  }
  function xt(t) {
    let n,
      l,
      o,
      r,
      s = ot(t[4]),
      a = [];
    for (let e = 0; e < s.length; e += 1) a[e] = bt(ht(t, s, e));
    const i = t[8].default,
      $ = c(i, t, t[7], null);
    let p = [
        gt,
        t[5],
        { width: t[2] },
        { height: t[2] },
        { stroke: t[1] },
        { "stroke-width": t[3] },
        { class: (o = `tabler-icon tabler-icon-${t[0]} ${t[6].class ?? ""}`) },
      ],
      m = {};
    for (let c = 0; c < p.length; c += 1) m = e(m, p[c]);
    return {
      c() {
        n = y("svg");
        for (let t = 0; t < a.length; t += 1) a[t].c();
        (l = M()), $ && $.c(), E(n, m);
      },
      m(t, e) {
        v(t, n, e);
        for (let l = 0; l < a.length; l += 1) a[l] && a[l].m(n, null);
        g(n, l), $ && $.m(n, null), (r = !0);
      },
      p(t, [e]) {
        if (16 & e) {
          let o;
          for (s = ot(t[4]), o = 0; o < s.length; o += 1) {
            const r = ht(t, s, o);
            a[o] ? a[o].p(r, e) : ((a[o] = bt(r)), a[o].c(), a[o].m(n, l));
          }
          for (; o < a.length; o += 1) a[o].d(1);
          a.length = s.length;
        }
        $ &&
          $.p &&
          (!r || 128 & e) &&
          f($, i, t, t[7], r ? u(i, t[7], e, null) : d(t[7]), null),
          E(
            n,
            (m = rt(p, [
              gt,
              32 & e && t[5],
              (!r || 4 & e) && { width: t[2] },
              (!r || 4 & e) && { height: t[2] },
              (!r || 2 & e) && { stroke: t[1] },
              (!r || 8 & e) && { "stroke-width": t[3] },
              (!r ||
                (65 & e &&
                  o !==
                    (o = `tabler-icon tabler-icon-${t[0]} ${
                      t[6].class ?? ""
                    }`))) && { class: o },
            ]))
          );
      },
      i(t) {
        r || (nt($, t), (r = !0));
      },
      o(t) {
        lt($, t), (r = !1);
      },
      d(t) {
        t && b(n), x(a, t), $ && $.d(t);
      },
    };
  }
  function wt(t, n, l) {
    const o = ["name", "color", "size", "stroke", "iconNode"];
    let r = p(n, o),
      { $$slots: s = {}, $$scope: a } = n,
      { name: c } = n,
      { color: i = "currentColor" } = n,
      { size: u = 24 } = n,
      { stroke: f = 2 } = n,
      { iconNode: d } = n;
    return (
      (t.$$set = (t) => {
        l(6, (n = e(e({}, n), $(t)))),
          l(5, (r = p(n, o))),
          "name" in t && l(0, (c = t.name)),
          "color" in t && l(1, (i = t.color)),
          "size" in t && l(2, (u = t.size)),
          "stroke" in t && l(3, (f = t.stroke)),
          "iconNode" in t && l(4, (d = t.iconNode)),
          "$$scope" in t && l(7, (a = t.$$scope));
      }),
      (n = $(n)),
      [c, i, u, f, d, r, n, a, s]
    );
  }
  class yt extends dt {
    constructor(t) {
      super(),
        ft(this, t, wt, xt, s, {
          name: 0,
          color: 1,
          size: 2,
          stroke: 3,
          iconNode: 4,
        });
    }
  }
  function kt(t) {
    let e;
    const n = t[2].default,
      l = c(n, t, t[3], null);
    return {
      c() {
        l && l.c();
      },
      m(t, n) {
        l && l.m(t, n), (e = !0);
      },
      p(t, o) {
        l &&
          l.p &&
          (!e || 8 & o) &&
          f(l, n, t, t[3], e ? u(n, t[3], o, null) : d(t[3]), null);
      },
      i(t) {
        e || (nt(l, t), (e = !0));
      },
      o(t) {
        lt(l, t), (e = !1);
      },
      d(t) {
        l && l.d(t);
      },
    };
  }
  function Nt(t) {
    let n, l;
    const o = [{ name: "brand-google" }, t[1], { iconNode: t[0] }];
    let r = { $$slots: { default: [kt] }, $$scope: { ctx: t } };
    for (let s = 0; s < o.length; s += 1) r = e(r, o[s]);
    return (
      (n = new yt({ props: r })),
      {
        c() {
          at(n.$$.fragment);
        },
        m(t, e) {
          ct(n, t, e), (l = !0);
        },
        p(t, [e]) {
          const l =
            3 & e
              ? rt(o, [o[0], 2 & e && st(t[1]), 1 & e && { iconNode: t[0] }])
              : {};
          8 & e && (l.$$scope = { dirty: e, ctx: t }), n.$set(l);
        },
        i(t) {
          l || (nt(n.$$.fragment, t), (l = !0));
        },
        o(t) {
          lt(n.$$.fragment, t), (l = !1);
        },
        d(t) {
          it(n, t);
        },
      }
    );
  }
  function Mt(t, n, l) {
    let { $$slots: o = {}, $$scope: r } = n;
    return (
      (t.$$set = (t) => {
        l(1, (n = e(e({}, n), $(t)))), "$$scope" in t && l(3, (r = t.$$scope));
      }),
      [
        [
          [
            "path",
            {
              d: "M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z",
            },
          ],
        ],
        (n = $(n)),
        o,
        r,
      ]
    );
  }
  const _t = class extends dt {
    constructor(t) {
      super(), ft(this, t, Mt, Nt, s, {});
    }
  };
  function jt(t) {
    let e;
    const n = t[2].default,
      l = c(n, t, t[3], null);
    return {
      c() {
        l && l.c();
      },
      m(t, n) {
        l && l.m(t, n), (e = !0);
      },
      p(t, o) {
        l &&
          l.p &&
          (!e || 8 & o) &&
          f(l, n, t, t[3], e ? u(n, t[3], o, null) : d(t[3]), null);
      },
      i(t) {
        e || (nt(l, t), (e = !0));
      },
      o(t) {
        lt(l, t), (e = !1);
      },
      d(t) {
        l && l.d(t);
      },
    };
  }
  function Et(t) {
    let n, l;
    const o = [{ name: "calendar-event" }, t[1], { iconNode: t[0] }];
    let r = { $$slots: { default: [jt] }, $$scope: { ctx: t } };
    for (let s = 0; s < o.length; s += 1) r = e(r, o[s]);
    return (
      (n = new yt({ props: r })),
      {
        c() {
          at(n.$$.fragment);
        },
        m(t, e) {
          ct(n, t, e), (l = !0);
        },
        p(t, [e]) {
          const l =
            3 & e
              ? rt(o, [o[0], 2 & e && st(t[1]), 1 & e && { iconNode: t[0] }])
              : {};
          8 & e && (l.$$scope = { dirty: e, ctx: t }), n.$set(l);
        },
        i(t) {
          l || (nt(n.$$.fragment, t), (l = !0));
        },
        o(t) {
          lt(n.$$.fragment, t), (l = !1);
        },
        d(t) {
          it(n, t);
        },
      }
    );
  }
  function zt(t, n, l) {
    let { $$slots: o = {}, $$scope: r } = n;
    return (
      (t.$$set = (t) => {
        l(1, (n = e(e({}, n), $(t)))), "$$scope" in t && l(3, (r = t.$$scope));
      }),
      [
        [
          [
            "path",
            {
              d: "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",
            },
          ],
          ["path", { d: "M16 3l0 4" }],
          ["path", { d: "M8 3l0 4" }],
          ["path", { d: "M4 11l16 0" }],
          ["path", { d: "M8 15h2v2h-2z" }],
        ],
        (n = $(n)),
        o,
        r,
      ]
    );
  }
  class Dt extends dt {
    constructor(t) {
      super(), ft(this, t, zt, Et, s, {});
    }
  }
  function Tt(t) {
    let e;
    const n = t[2].default,
      l = c(n, t, t[3], null);
    return {
      c() {
        l && l.c();
      },
      m(t, n) {
        l && l.m(t, n), (e = !0);
      },
      p(t, o) {
        l &&
          l.p &&
          (!e || 8 & o) &&
          f(l, n, t, t[3], e ? u(n, t[3], o, null) : d(t[3]), null);
      },
      i(t) {
        e || (nt(l, t), (e = !0));
      },
      o(t) {
        lt(l, t), (e = !1);
      },
      d(t) {
        l && l.d(t);
      },
    };
  }
  function St(t) {
    let n, l;
    const o = [{ name: "calendar" }, t[1], { iconNode: t[0] }];
    let r = { $$slots: { default: [Tt] }, $$scope: { ctx: t } };
    for (let s = 0; s < o.length; s += 1) r = e(r, o[s]);
    return (
      (n = new yt({ props: r })),
      {
        c() {
          at(n.$$.fragment);
        },
        m(t, e) {
          ct(n, t, e), (l = !0);
        },
        p(t, [e]) {
          const l =
            3 & e
              ? rt(o, [o[0], 2 & e && st(t[1]), 1 & e && { iconNode: t[0] }])
              : {};
          8 & e && (l.$$scope = { dirty: e, ctx: t }), n.$set(l);
        },
        i(t) {
          l || (nt(n.$$.fragment, t), (l = !0));
        },
        o(t) {
          lt(n.$$.fragment, t), (l = !1);
        },
        d(t) {
          it(n, t);
        },
      }
    );
  }
  function Lt(t, n, l) {
    let { $$slots: o = {}, $$scope: r } = n;
    return (
      (t.$$set = (t) => {
        l(1, (n = e(e({}, n), $(t)))), "$$scope" in t && l(3, (r = t.$$scope));
      }),
      [
        [
          [
            "path",
            {
              d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",
            },
          ],
          ["path", { d: "M16 3v4" }],
          ["path", { d: "M8 3v4" }],
          ["path", { d: "M4 11h16" }],
          ["path", { d: "M11 15h1" }],
          ["path", { d: "M12 15v3" }],
        ],
        (n = $(n)),
        o,
        r,
      ]
    );
  }
  const Rt = class extends dt {
    constructor(t) {
      super(), ft(this, t, Lt, St, s, {});
    }
  };
  function At(t) {
    let e;
    const n = t[2].default,
      l = c(n, t, t[3], null);
    return {
      c() {
        l && l.c();
      },
      m(t, n) {
        l && l.m(t, n), (e = !0);
      },
      p(t, o) {
        l &&
          l.p &&
          (!e || 8 & o) &&
          f(l, n, t, t[3], e ? u(n, t[3], o, null) : d(t[3]), null);
      },
      i(t) {
        e || (nt(l, t), (e = !0));
      },
      o(t) {
        lt(l, t), (e = !1);
      },
      d(t) {
        l && l.d(t);
      },
    };
  }
  function Ot(t) {
    let n, l;
    const o = [{ name: "chevron-down" }, t[1], { iconNode: t[0] }];
    let r = { $$slots: { default: [At] }, $$scope: { ctx: t } };
    for (let s = 0; s < o.length; s += 1) r = e(r, o[s]);
    return (
      (n = new yt({ props: r })),
      {
        c() {
          at(n.$$.fragment);
        },
        m(t, e) {
          ct(n, t, e), (l = !0);
        },
        p(t, [e]) {
          const l =
            3 & e
              ? rt(o, [o[0], 2 & e && st(t[1]), 1 & e && { iconNode: t[0] }])
              : {};
          8 & e && (l.$$scope = { dirty: e, ctx: t }), n.$set(l);
        },
        i(t) {
          l || (nt(n.$$.fragment, t), (l = !0));
        },
        o(t) {
          lt(n.$$.fragment, t), (l = !1);
        },
        d(t) {
          it(n, t);
        },
      }
    );
  }
  function Ct(t, n, l) {
    let { $$slots: o = {}, $$scope: r } = n;
    return (
      (t.$$set = (t) => {
        l(1, (n = e(e({}, n), $(t)))), "$$scope" in t && l(3, (r = t.$$scope));
      }),
      [[["path", { d: "M6 9l6 6l6 -6" }]], (n = $(n)), o, r]
    );
  }
  class It extends dt {
    constructor(t) {
      super(), ft(this, t, Ct, Ot, s, {});
    }
  }
  function Ut(t) {
    let e;
    const n = t[2].default,
      l = c(n, t, t[3], null);
    return {
      c() {
        l && l.c();
      },
      m(t, n) {
        l && l.m(t, n), (e = !0);
      },
      p(t, o) {
        l &&
          l.p &&
          (!e || 8 & o) &&
          f(l, n, t, t[3], e ? u(n, t[3], o, null) : d(t[3]), null);
      },
      i(t) {
        e || (nt(l, t), (e = !0));
      },
      o(t) {
        lt(l, t), (e = !1);
      },
      d(t) {
        l && l.d(t);
      },
    };
  }
  function Yt(t) {
    let n, l;
    const o = [{ name: "clock-hour-12" }, t[1], { iconNode: t[0] }];
    let r = { $$slots: { default: [Ut] }, $$scope: { ctx: t } };
    for (let s = 0; s < o.length; s += 1) r = e(r, o[s]);
    return (
      (n = new yt({ props: r })),
      {
        c() {
          at(n.$$.fragment);
        },
        m(t, e) {
          ct(n, t, e), (l = !0);
        },
        p(t, [e]) {
          const l =
            3 & e
              ? rt(o, [o[0], 2 & e && st(t[1]), 1 & e && { iconNode: t[0] }])
              : {};
          8 & e && (l.$$scope = { dirty: e, ctx: t }), n.$set(l);
        },
        i(t) {
          l || (nt(n.$$.fragment, t), (l = !0));
        },
        o(t) {
          lt(n.$$.fragment, t), (l = !1);
        },
        d(t) {
          it(n, t);
        },
      }
    );
  }
  function Pt(t, n, l) {
    let { $$slots: o = {}, $$scope: r } = n;
    return (
      (t.$$set = (t) => {
        l(1, (n = e(e({}, n), $(t)))), "$$scope" in t && l(3, (r = t.$$scope));
      }),
      [
        [
          ["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
          ["path", { d: "M12 7v5" }],
        ],
        (n = $(n)),
        o,
        r,
      ]
    );
  }
  class Ft extends dt {
    constructor(t) {
      super(), ft(this, t, Pt, Yt, s, {});
    }
  }
  function Bt(t) {
    let e;
    const n = t[2].default,
      l = c(n, t, t[3], null);
    return {
      c() {
        l && l.c();
      },
      m(t, n) {
        l && l.m(t, n), (e = !0);
      },
      p(t, o) {
        l &&
          l.p &&
          (!e || 8 & o) &&
          f(l, n, t, t[3], e ? u(n, t[3], o, null) : d(t[3]), null);
      },
      i(t) {
        e || (nt(l, t), (e = !0));
      },
      o(t) {
        lt(l, t), (e = !1);
      },
      d(t) {
        l && l.d(t);
      },
    };
  }
  function Qt(t) {
    let n, l;
    const o = [{ name: "file-stack" }, t[1], { iconNode: t[0] }];
    let r = { $$slots: { default: [Bt] }, $$scope: { ctx: t } };
    for (let s = 0; s < o.length; s += 1) r = e(r, o[s]);
    return (
      (n = new yt({ props: r })),
      {
        c() {
          at(n.$$.fragment);
        },
        m(t, e) {
          ct(n, t, e), (l = !0);
        },
        p(t, [e]) {
          const l =
            3 & e
              ? rt(o, [o[0], 2 & e && st(t[1]), 1 & e && { iconNode: t[0] }])
              : {};
          8 & e && (l.$$scope = { dirty: e, ctx: t }), n.$set(l);
        },
        i(t) {
          l || (nt(n.$$.fragment, t), (l = !0));
        },
        o(t) {
          lt(n.$$.fragment, t), (l = !1);
        },
        d(t) {
          it(n, t);
        },
      }
    );
  }
  function Ht(t, n, l) {
    let { $$slots: o = {}, $$scope: r } = n;
    return (
      (t.$$set = (t) => {
        l(1, (n = e(e({}, n), $(t)))), "$$scope" in t && l(3, (r = t.$$scope));
      }),
      [
        [
          ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
          ["path", { d: "M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" }],
          ["path", { d: "M5 21h14" }],
          ["path", { d: "M5 18h14" }],
          ["path", { d: "M5 15h14" }],
        ],
        (n = $(n)),
        o,
        r,
      ]
    );
  }
  class qt extends dt {
    constructor(t) {
      super(), ft(this, t, Ht, Qt, s, {});
    }
  }
  function Gt(t) {
    let e;
    const n = t[2].default,
      l = c(n, t, t[3], null);
    return {
      c() {
        l && l.c();
      },
      m(t, n) {
        l && l.m(t, n), (e = !0);
      },
      p(t, o) {
        l &&
          l.p &&
          (!e || 8 & o) &&
          f(l, n, t, t[3], e ? u(n, t[3], o, null) : d(t[3]), null);
      },
      i(t) {
        e || (nt(l, t), (e = !0));
      },
      o(t) {
        lt(l, t), (e = !1);
      },
      d(t) {
        l && l.d(t);
      },
    };
  }
  function Wt(t) {
    let n, l;
    const o = [{ name: "hourglass-high" }, t[1], { iconNode: t[0] }];
    let r = { $$slots: { default: [Gt] }, $$scope: { ctx: t } };
    for (let s = 0; s < o.length; s += 1) r = e(r, o[s]);
    return (
      (n = new yt({ props: r })),
      {
        c() {
          at(n.$$.fragment);
        },
        m(t, e) {
          ct(n, t, e), (l = !0);
        },
        p(t, [e]) {
          const l =
            3 & e
              ? rt(o, [o[0], 2 & e && st(t[1]), 1 & e && { iconNode: t[0] }])
              : {};
          8 & e && (l.$$scope = { dirty: e, ctx: t }), n.$set(l);
        },
        i(t) {
          l || (nt(n.$$.fragment, t), (l = !0));
        },
        o(t) {
          lt(n.$$.fragment, t), (l = !1);
        },
        d(t) {
          it(n, t);
        },
      }
    );
  }
  function Jt(t, n, l) {
    let { $$slots: o = {}, $$scope: r } = n;
    return (
      (t.$$set = (t) => {
        l(1, (n = e(e({}, n), $(t)))), "$$scope" in t && l(3, (r = t.$$scope));
      }),
      [
        [
          ["path", { d: "M6.5 7h11" }],
          [
            "path",
            {
              d: "M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z",
            },
          ],
          [
            "path",
            {
              d: "M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z",
            },
          ],
        ],
        (n = $(n)),
        o,
        r,
      ]
    );
  }
  const Vt = class extends dt {
    constructor(t) {
      super(), ft(this, t, Jt, Wt, s, {});
    }
  };
  function Xt(t) {
    let e;
    const n = t[2].default,
      l = c(n, t, t[3], null);
    return {
      c() {
        l && l.c();
      },
      m(t, n) {
        l && l.m(t, n), (e = !0);
      },
      p(t, o) {
        l &&
          l.p &&
          (!e || 8 & o) &&
          f(l, n, t, t[3], e ? u(n, t[3], o, null) : d(t[3]), null);
      },
      i(t) {
        e || (nt(l, t), (e = !0));
      },
      o(t) {
        lt(l, t), (e = !1);
      },
      d(t) {
        l && l.d(t);
      },
    };
  }
  function Kt(t) {
    let n, l;
    const o = [{ name: "mail" }, t[1], { iconNode: t[0] }];
    let r = { $$slots: { default: [Xt] }, $$scope: { ctx: t } };
    for (let s = 0; s < o.length; s += 1) r = e(r, o[s]);
    return (
      (n = new yt({ props: r })),
      {
        c() {
          at(n.$$.fragment);
        },
        m(t, e) {
          ct(n, t, e), (l = !0);
        },
        p(t, [e]) {
          const l =
            3 & e
              ? rt(o, [o[0], 2 & e && st(t[1]), 1 & e && { iconNode: t[0] }])
              : {};
          8 & e && (l.$$scope = { dirty: e, ctx: t }), n.$set(l);
        },
        i(t) {
          l || (nt(n.$$.fragment, t), (l = !0));
        },
        o(t) {
          lt(n.$$.fragment, t), (l = !1);
        },
        d(t) {
          it(n, t);
        },
      }
    );
  }
  function Zt(t, n, l) {
    let { $$slots: o = {}, $$scope: r } = n;
    return (
      (t.$$set = (t) => {
        l(1, (n = e(e({}, n), $(t)))), "$$scope" in t && l(3, (r = t.$$scope));
      }),
      [
        [
          [
            "path",
            {
              d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",
            },
          ],
          ["path", { d: "M3 7l9 6l9 -6" }],
        ],
        (n = $(n)),
        o,
        r,
      ]
    );
  }
  const te = class extends dt {
    constructor(t) {
      super(), ft(this, t, Zt, Kt, s, {});
    }
  };
  function ee(t) {
    let e;
    const n = t[2].default,
      l = c(n, t, t[3], null);
    return {
      c() {
        l && l.c();
      },
      m(t, n) {
        l && l.m(t, n), (e = !0);
      },
      p(t, o) {
        l &&
          l.p &&
          (!e || 8 & o) &&
          f(l, n, t, t[3], e ? u(n, t[3], o, null) : d(t[3]), null);
      },
      i(t) {
        e || (nt(l, t), (e = !0));
      },
      o(t) {
        lt(l, t), (e = !1);
      },
      d(t) {
        l && l.d(t);
      },
    };
  }
  function ne(t) {
    let n, l;
    const o = [{ name: "map-pin" }, t[1], { iconNode: t[0] }];
    let r = { $$slots: { default: [ee] }, $$scope: { ctx: t } };
    for (let s = 0; s < o.length; s += 1) r = e(r, o[s]);
    return (
      (n = new yt({ props: r })),
      {
        c() {
          at(n.$$.fragment);
        },
        m(t, e) {
          ct(n, t, e), (l = !0);
        },
        p(t, [e]) {
          const l =
            3 & e
              ? rt(o, [o[0], 2 & e && st(t[1]), 1 & e && { iconNode: t[0] }])
              : {};
          8 & e && (l.$$scope = { dirty: e, ctx: t }), n.$set(l);
        },
        i(t) {
          l || (nt(n.$$.fragment, t), (l = !0));
        },
        o(t) {
          lt(n.$$.fragment, t), (l = !1);
        },
        d(t) {
          it(n, t);
        },
      }
    );
  }
  function le(t, n, l) {
    let { $$slots: o = {}, $$scope: r } = n;
    return (
      (t.$$set = (t) => {
        l(1, (n = e(e({}, n), $(t)))), "$$scope" in t && l(3, (r = t.$$scope));
      }),
      [
        [
          ["path", { d: "M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }],
          [
            "path",
            {
              d: "M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z",
            },
          ],
        ],
        (n = $(n)),
        o,
        r,
      ]
    );
  }
  class oe extends dt {
    constructor(t) {
      super(), ft(this, t, le, ne, s, {});
    }
  }
  function re(t) {
    let e;
    const n = t[2].default,
      l = c(n, t, t[3], null);
    return {
      c() {
        l && l.c();
      },
      m(t, n) {
        l && l.m(t, n), (e = !0);
      },
      p(t, o) {
        l &&
          l.p &&
          (!e || 8 & o) &&
          f(l, n, t, t[3], e ? u(n, t[3], o, null) : d(t[3]), null);
      },
      i(t) {
        e || (nt(l, t), (e = !0));
      },
      o(t) {
        lt(l, t), (e = !1);
      },
      d(t) {
        l && l.d(t);
      },
    };
  }
  function se(t) {
    let n, l;
    const o = [{ name: "player-play-filled" }, t[1], { iconNode: t[0] }];
    let r = { $$slots: { default: [re] }, $$scope: { ctx: t } };
    for (let s = 0; s < o.length; s += 1) r = e(r, o[s]);
    return (
      (n = new yt({ props: r })),
      {
        c() {
          at(n.$$.fragment);
        },
        m(t, e) {
          ct(n, t, e), (l = !0);
        },
        p(t, [e]) {
          const l =
            3 & e
              ? rt(o, [o[0], 2 & e && st(t[1]), 1 & e && { iconNode: t[0] }])
              : {};
          8 & e && (l.$$scope = { dirty: e, ctx: t }), n.$set(l);
        },
        i(t) {
          l || (nt(n.$$.fragment, t), (l = !0));
        },
        o(t) {
          lt(n.$$.fragment, t), (l = !1);
        },
        d(t) {
          it(n, t);
        },
      }
    );
  }
  function ae(t, n, l) {
    let { $$slots: o = {}, $$scope: r } = n;
    return (
      (t.$$set = (t) => {
        l(1, (n = e(e({}, n), $(t)))), "$$scope" in t && l(3, (r = t.$$scope));
      }),
      [
        [
          [
            "path",
            {
              d: "M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z",
              "stroke-width": "0",
              fill: "currentColor",
            },
          ],
        ],
        (n = $(n)),
        o,
        r,
      ]
    );
  }
  class ce extends dt {
    constructor(t) {
      super(), ft(this, t, ae, se, s, {});
    }
  }
  function ie(t) {
    let e;
    const n = t[2].default,
      l = c(n, t, t[3], null);
    return {
      c() {
        l && l.c();
      },
      m(t, n) {
        l && l.m(t, n), (e = !0);
      },
      p(t, o) {
        l &&
          l.p &&
          (!e || 8 & o) &&
          f(l, n, t, t[3], e ? u(n, t[3], o, null) : d(t[3]), null);
      },
      i(t) {
        e || (nt(l, t), (e = !0));
      },
      o(t) {
        lt(l, t), (e = !1);
      },
      d(t) {
        l && l.d(t);
      },
    };
  }
  function ue(t) {
    let n, l;
    const o = [{ name: "player-stop-filled" }, t[1], { iconNode: t[0] }];
    let r = { $$slots: { default: [ie] }, $$scope: { ctx: t } };
    for (let s = 0; s < o.length; s += 1) r = e(r, o[s]);
    return (
      (n = new yt({ props: r })),
      {
        c() {
          at(n.$$.fragment);
        },
        m(t, e) {
          ct(n, t, e), (l = !0);
        },
        p(t, [e]) {
          const l =
            3 & e
              ? rt(o, [o[0], 2 & e && st(t[1]), 1 & e && { iconNode: t[0] }])
              : {};
          8 & e && (l.$$scope = { dirty: e, ctx: t }), n.$set(l);
        },
        i(t) {
          l || (nt(n.$$.fragment, t), (l = !0));
        },
        o(t) {
          lt(n.$$.fragment, t), (l = !1);
        },
        d(t) {
          it(n, t);
        },
      }
    );
  }
  function fe(t, n, l) {
    let { $$slots: o = {}, $$scope: r } = n;
    return (
      (t.$$set = (t) => {
        l(1, (n = e(e({}, n), $(t)))), "$$scope" in t && l(3, (r = t.$$scope));
      }),
      [
        [
          [
            "path",
            {
              d: "M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z",
              "stroke-width": "0",
              fill: "currentColor",
            },
          ],
        ],
        (n = $(n)),
        o,
        r,
      ]
    );
  }
  class de extends dt {
    constructor(t) {
      super(), ft(this, t, fe, ue, s, {});
    }
  }
  function $e(t) {
    let e;
    const n = t[2].default,
      l = c(n, t, t[3], null);
    return {
      c() {
        l && l.c();
      },
      m(t, n) {
        l && l.m(t, n), (e = !0);
      },
      p(t, o) {
        l &&
          l.p &&
          (!e || 8 & o) &&
          f(l, n, t, t[3], e ? u(n, t[3], o, null) : d(t[3]), null);
      },
      i(t) {
        e || (nt(l, t), (e = !0));
      },
      o(t) {
        lt(l, t), (e = !1);
      },
      d(t) {
        l && l.d(t);
      },
    };
  }
  function pe(t) {
    let n, l;
    const o = [{ name: "power" }, t[1], { iconNode: t[0] }];
    let r = { $$slots: { default: [$e] }, $$scope: { ctx: t } };
    for (let s = 0; s < o.length; s += 1) r = e(r, o[s]);
    return (
      (n = new yt({ props: r })),
      {
        c() {
          at(n.$$.fragment);
        },
        m(t, e) {
          ct(n, t, e), (l = !0);
        },
        p(t, [e]) {
          const l =
            3 & e
              ? rt(o, [o[0], 2 & e && st(t[1]), 1 & e && { iconNode: t[0] }])
              : {};
          8 & e && (l.$$scope = { dirty: e, ctx: t }), n.$set(l);
        },
        i(t) {
          l || (nt(n.$$.fragment, t), (l = !0));
        },
        o(t) {
          lt(n.$$.fragment, t), (l = !1);
        },
        d(t) {
          it(n, t);
        },
      }
    );
  }
  function me(t, n, l) {
    let { $$slots: o = {}, $$scope: r } = n;
    return (
      (t.$$set = (t) => {
        l(1, (n = e(e({}, n), $(t)))), "$$scope" in t && l(3, (r = t.$$scope));
      }),
      [
        [
          ["path", { d: "M7 6a7.75 7.75 0 1 0 10 0" }],
          ["path", { d: "M12 4l0 8" }],
        ],
        (n = $(n)),
        o,
        r,
      ]
    );
  }
  class ge extends dt {
    constructor(t) {
      super(), ft(this, t, me, pe, s, {});
    }
  }
  function he(t) {
    let e;
    const n = t[2].default,
      l = c(n, t, t[3], null);
    return {
      c() {
        l && l.c();
      },
      m(t, n) {
        l && l.m(t, n), (e = !0);
      },
      p(t, o) {
        l &&
          l.p &&
          (!e || 8 & o) &&
          f(l, n, t, t[3], e ? u(n, t[3], o, null) : d(t[3]), null);
      },
      i(t) {
        e || (nt(l, t), (e = !0));
      },
      o(t) {
        lt(l, t), (e = !1);
      },
      d(t) {
        l && l.d(t);
      },
    };
  }
  function ve(t) {
    let n, l;
    const o = [{ name: "repeat" }, t[1], { iconNode: t[0] }];
    let r = { $$slots: { default: [he] }, $$scope: { ctx: t } };
    for (let s = 0; s < o.length; s += 1) r = e(r, o[s]);
    return (
      (n = new yt({ props: r })),
      {
        c() {
          at(n.$$.fragment);
        },
        m(t, e) {
          ct(n, t, e), (l = !0);
        },
        p(t, [e]) {
          const l =
            3 & e
              ? rt(o, [o[0], 2 & e && st(t[1]), 1 & e && { iconNode: t[0] }])
              : {};
          8 & e && (l.$$scope = { dirty: e, ctx: t }), n.$set(l);
        },
        i(t) {
          l || (nt(n.$$.fragment, t), (l = !0));
        },
        o(t) {
          lt(n.$$.fragment, t), (l = !1);
        },
        d(t) {
          it(n, t);
        },
      }
    );
  }
  function be(t, n, l) {
    let { $$slots: o = {}, $$scope: r } = n;
    return (
      (t.$$set = (t) => {
        l(1, (n = e(e({}, n), $(t)))), "$$scope" in t && l(3, (r = t.$$scope));
      }),
      [
        [
          ["path", { d: "M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" }],
          ["path", { d: "M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" }],
        ],
        (n = $(n)),
        o,
        r,
      ]
    );
  }
  class xe extends dt {
    constructor(t) {
      super(), ft(this, t, be, ve, s, {});
    }
  }
  function we(t) {
    let e;
    const n = t[2].default,
      l = c(n, t, t[3], null);
    return {
      c() {
        l && l.c();
      },
      m(t, n) {
        l && l.m(t, n), (e = !0);
      },
      p(t, o) {
        l &&
          l.p &&
          (!e || 8 & o) &&
          f(l, n, t, t[3], e ? u(n, t[3], o, null) : d(t[3]), null);
      },
      i(t) {
        e || (nt(l, t), (e = !0));
      },
      o(t) {
        lt(l, t), (e = !1);
      },
      d(t) {
        l && l.d(t);
      },
    };
  }
  function ye(t) {
    let n, l;
    const o = [{ name: "square-plus" }, t[1], { iconNode: t[0] }];
    let r = { $$slots: { default: [we] }, $$scope: { ctx: t } };
    for (let s = 0; s < o.length; s += 1) r = e(r, o[s]);
    return (
      (n = new yt({ props: r })),
      {
        c() {
          at(n.$$.fragment);
        },
        m(t, e) {
          ct(n, t, e), (l = !0);
        },
        p(t, [e]) {
          const l =
            3 & e
              ? rt(o, [o[0], 2 & e && st(t[1]), 1 & e && { iconNode: t[0] }])
              : {};
          8 & e && (l.$$scope = { dirty: e, ctx: t }), n.$set(l);
        },
        i(t) {
          l || (nt(n.$$.fragment, t), (l = !0));
        },
        o(t) {
          lt(n.$$.fragment, t), (l = !1);
        },
        d(t) {
          it(n, t);
        },
      }
    );
  }
  function ke(t, n, l) {
    let { $$slots: o = {}, $$scope: r } = n;
    return (
      (t.$$set = (t) => {
        l(1, (n = e(e({}, n), $(t)))), "$$scope" in t && l(3, (r = t.$$scope));
      }),
      [
        [
          ["path", { d: "M9 12h6" }],
          ["path", { d: "M12 9v6" }],
          [
            "path",
            {
              d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z",
            },
          ],
        ],
        (n = $(n)),
        o,
        r,
      ]
    );
  }
  class Ne extends dt {
    constructor(t) {
      super(), ft(this, t, ke, ye, s, {});
    }
  }
  function Me(t) {
    let e;
    const n = t[2].default,
      l = c(n, t, t[3], null);
    return {
      c() {
        l && l.c();
      },
      m(t, n) {
        l && l.m(t, n), (e = !0);
      },
      p(t, o) {
        l &&
          l.p &&
          (!e || 8 & o) &&
          f(l, n, t, t[3], e ? u(n, t[3], o, null) : d(t[3]), null);
      },
      i(t) {
        e || (nt(l, t), (e = !0));
      },
      o(t) {
        lt(l, t), (e = !1);
      },
      d(t) {
        l && l.d(t);
      },
    };
  }
  function _e(t) {
    let n, l;
    const o = [{ name: "square" }, t[1], { iconNode: t[0] }];
    let r = { $$slots: { default: [Me] }, $$scope: { ctx: t } };
    for (let s = 0; s < o.length; s += 1) r = e(r, o[s]);
    return (
      (n = new yt({ props: r })),
      {
        c() {
          at(n.$$.fragment);
        },
        m(t, e) {
          ct(n, t, e), (l = !0);
        },
        p(t, [e]) {
          const l =
            3 & e
              ? rt(o, [o[0], 2 & e && st(t[1]), 1 & e && { iconNode: t[0] }])
              : {};
          8 & e && (l.$$scope = { dirty: e, ctx: t }), n.$set(l);
        },
        i(t) {
          l || (nt(n.$$.fragment, t), (l = !0));
        },
        o(t) {
          lt(n.$$.fragment, t), (l = !1);
        },
        d(t) {
          it(n, t);
        },
      }
    );
  }
  function je(t, n, l) {
    let { $$slots: o = {}, $$scope: r } = n;
    return (
      (t.$$set = (t) => {
        l(1, (n = e(e({}, n), $(t)))), "$$scope" in t && l(3, (r = t.$$scope));
      }),
      [
        [
          [
            "path",
            {
              d: "M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
            },
          ],
        ],
        (n = $(n)),
        o,
        r,
      ]
    );
  }
  class Ee extends dt {
    constructor(t) {
      super(), ft(this, t, je, _e, s, {});
    }
  }
  function ze(t, e, n) {
    const l = t.slice();
    return (l[9] = e[n]), l;
  }
  function De(t) {
    let e, n;
    return (
      (e = new _t({})),
      {
        c() {
          at(e.$$.fragment);
        },
        m(t, l) {
          ct(e, t, l), (n = !0);
        },
        i(t) {
          n || (nt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          lt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          it(e, t);
        },
      }
    );
  }
  function Te(t) {
    let e,
      n = ot(t[1]),
      l = [];
    for (let o = 0; o < n.length; o += 1) l[o] = Se(ze(t, n, o));
    return {
      c() {
        e = w("div");
        for (let t = 0; t < l.length; t += 1) l[t].c();
        j(
          e,
          "class",
          "h-fit w-full rounded-b-md text-xl font-bold variant-ghost-surface"
        );
      },
      m(t, n) {
        v(t, e, n);
        for (let o = 0; o < l.length; o += 1) l[o] && l[o].m(e, null);
      },
      p(t, o) {
        if (2 & o) {
          let r;
          for (n = ot(t[1]), r = 0; r < n.length; r += 1) {
            const s = ze(t, n, r);
            l[r] ? l[r].p(s, o) : ((l[r] = Se(s)), l[r].c(), l[r].m(e, null));
          }
          for (; r < l.length; r += 1) l[r].d(1);
          l.length = n.length;
        }
      },
      d(t) {
        t && b(e), x(l, t);
      },
    };
  }
  function Se(t) {
    let e,
      n,
      l = t[9] + "";
    return {
      c() {
        (e = w("div")), (n = k(l)), j(e, "class", "w-full h-fit p-2 pt-3");
      },
      m(t, l) {
        v(t, e, l), g(e, n);
      },
      p(t, e) {
        2 & e && l !== (l = t[9] + "") && z(n, l);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Le(t) {
    let e,
      n,
      l,
      r,
      s,
      a,
      c,
      i,
      u,
      f,
      d,
      $,
      p,
      m = t[2] && De(),
      h = t[1].length > 0 && Te(t);
    return {
      c() {
        (e = w("form")),
          (n = w("div")),
          m && m.c(),
          (l = N()),
          (r = w("input")),
          (c = N()),
          (i = w("input")),
          (f = N()),
          h && h.c(),
          j(r, "type", "text"),
          j(r, "name", "google"),
          j(r, "id", "google"),
          j(
            r,
            "class",
            (s =
              "w-11/12 " +
              (t[2] ? "bg-transparent" : "variant-ghost-surface") +
              " text-xl rounded-full focus:border-transparent focus:ring-0")
          ),
          j(r, "placeholder", (a = t[2] ? "" : "Search")),
          j(r, "autocomplete", "off"),
          j(i, "type", "submit"),
          T(i, "display", "none"),
          j(
            n,
            "class",
            (u =
              "h-fit w-full flex justify-center transition-all pl-2 " +
              (t[1].length > 0 ? "rounded-t-2xl" : "rounded-full") +
              " items-center " +
              (t[2] ? "variant-ghost-surface" : "bg-transparent") +
              " duration-200")
          ),
          j(e, "class", "h-full w-full p-2");
      },
      m(o, s) {
        v(o, e, s),
          g(e, n),
          m && m.m(n, null),
          g(n, l),
          g(n, r),
          D(r, t[0]),
          g(n, c),
          g(n, i),
          g(e, f),
          h && h.m(e, null),
          (d = !0),
          $ ||
            ((p = [
              _(r, "input", t[8]),
              _(r, "focus", t[3]),
              _(r, "blur", t[4]),
              _(e, "submit", t[5]),
            ]),
            ($ = !0));
      },
      p(t, [o]) {
        t[2]
          ? m
            ? 4 & o && nt(m, 1)
            : ((m = De()), m.c(), nt(m, 1), m.m(n, l))
          : m &&
            (tt(),
            lt(m, 1, 1, () => {
              m = null;
            }),
            et()),
          (!d ||
            (4 & o &&
              s !==
                (s =
                  "w-11/12 " +
                  (t[2] ? "bg-transparent" : "variant-ghost-surface") +
                  " text-xl rounded-full focus:border-transparent focus:ring-0"))) &&
            j(r, "class", s),
          (!d || (4 & o && a !== (a = t[2] ? "" : "Search"))) &&
            j(r, "placeholder", a),
          1 & o && r.value !== t[0] && D(r, t[0]),
          (!d ||
            (6 & o &&
              u !==
                (u =
                  "h-fit w-full flex justify-center transition-all pl-2 " +
                  (t[1].length > 0 ? "rounded-t-2xl" : "rounded-full") +
                  " items-center " +
                  (t[2] ? "variant-ghost-surface" : "bg-transparent") +
                  " duration-200"))) &&
            j(n, "class", u),
          t[1].length > 0
            ? h
              ? h.p(t, o)
              : ((h = Te(t)), h.c(), h.m(e, null))
            : h && (h.d(1), (h = null));
      },
      i(t) {
        d || (nt(m), (d = !0));
      },
      o(t) {
        lt(m), (d = !1);
      },
      d(t) {
        t && b(e), m && m.d(), h && h.d(), ($ = !1), o(p);
      },
    };
  }
  function Re(t, e, n) {
    let l = "",
      o = [],
      r = [],
      s = !1,
      a = !1;
    return (
      O(async () => {
        const t = await fetch("https://jsonplaceholder.typicode.com/users"),
          e = await t.json();
        n(6, (o = e.map((t) => t.name)));
        let a = 0;
        document.addEventListener("keydown", (t) => {
          "ArrowDown" === t.key
            ? a < r.length - 1 && (n(0, (l = r[a])), a++, n(7, (s = !0)))
            : "ArrowUp" === t.key
            ? a > 0 && (n(0, (l = r[a])), a--, n(7, (s = !0)))
            : n(7, (s = !1));
        });
      }),
      (t.$$.update = () => {
        193 & t.$$.dirty &&
          (s ||
            (l.length > 0
              ? n(
                  1,
                  (r = o.filter((t) =>
                    t.toLowerCase().includes(l.toLowerCase())
                  ))
                )
              : n(1, (r = []))));
      }),
      [
        l,
        r,
        a,
        () => {
          n(2, (a = !0));
        },
        () => {
          n(2, (a = !1));
        },
        (t) => {
          t.preventDefault(),
            window.open(
              `https://www.google.com/search?q=${encodeURIComponent(l)}`,
              "_blank"
            ),
            n(0, (l = ""));
        },
        o,
        s,
        function () {
          (l = this.value), n(0, l);
        },
      ]
    );
  }
  class Ae extends dt {
    constructor(t) {
      super(), ft(this, t, Re, Le, s, {});
    }
  }
  const Oe = [];
  function Ce(e, n = t) {
    let l;
    const o = new Set();
    function r(t) {
      if (s(e, t) && ((e = t), l)) {
        const t = !Oe.length;
        for (const n of o) n[1](), Oe.push(n, e);
        if (t) {
          for (let t = 0; t < Oe.length; t += 2) Oe[t][0](Oe[t + 1]);
          Oe.length = 0;
        }
      }
    }
    function a(t) {
      r(t(e));
    }
    return {
      set: r,
      update: a,
      subscribe: function (s, c = t) {
        const i = [s, c];
        return (
          o.add(i),
          1 === o.size && (l = n(r, a) || t),
          s(e),
          () => {
            o.delete(i), 0 === o.size && l && (l(), (l = null));
          }
        );
      },
    };
  }
  const Ie = {};
  function Ue(t) {
    return "local" === t ? localStorage : sessionStorage;
  }
  function Ye(t, e, n) {
    const l = (null == n ? void 0 : n.serializer) ?? JSON,
      o = (null == n ? void 0 : n.storage) ?? "local";
    function r(t, e) {
      Ue(o).setItem(t, l.stringify(e));
    }
    if (!Ie[t]) {
      const n = Ce(e, (e) => {
          const n = Ue(o).getItem(t);
          n && e(l.parse(n));
          {
            const n = (n) => {
              n.key === t && e(n.newValue ? l.parse(n.newValue) : null);
            };
            return (
              window.addEventListener("storage", n),
              () => window.removeEventListener("storage", n)
            );
          }
        }),
        { subscribe: s, set: c } = n;
      Ie[t] = {
        set(e) {
          r(t, e), c(e);
        },
        update(e) {
          const l = e(
            (function (t) {
              let e;
              return a(t, (t) => (e = t))(), e;
            })(n)
          );
          r(t, l), c(l);
        },
        subscribe: s,
      };
    }
    return Ie[t];
  }
  Ye("modeOsPrefers", !1), Ye("modeUserPrefers", void 0), Ye("modeCurrent", !1);
  const Pe = "(prefers-reduced-motion: reduce)";
  function Fe(t) {
    let e, n, l;
    const o = t[12].default,
      r = c(o, t, t[11], null);
    return {
      c() {
        (e = w("div")),
          r && r.c(),
          j(e, "class", (n = "listbox " + t[1])),
          j(e, "role", "listbox"),
          j(e, "aria-labelledby", t[0]),
          j(e, "data-testid", "listbox");
      },
      m(t, n) {
        v(t, e, n), r && r.m(e, null), (l = !0);
      },
      p(t, [s]) {
        r &&
          r.p &&
          (!l || 2048 & s) &&
          f(r, o, t, t[11], l ? u(o, t[11], s, null) : d(t[11]), null),
          (!l || (2 & s && n !== (n = "listbox " + t[1]))) && j(e, "class", n),
          (!l || 1 & s) && j(e, "aria-labelledby", t[0]);
      },
      i(t) {
        l || (nt(r, t), (l = !0));
      },
      o(t) {
        lt(r, t), (l = !1);
      },
      d(t) {
        t && b(e), r && r.d(t);
      },
    };
  }
  Ce(window.matchMedia(Pe).matches, (t) => {
    {
      const e = (e) => {
          t(e.matches);
        },
        n = window.matchMedia(Pe);
      return (
        n.addEventListener("change", e),
        () => {
          n.removeEventListener("change", e);
        }
      );
    }
  }).subscribe;
  function Be(t, n, l) {
    let o,
      { $$slots: r = {}, $$scope: s } = n,
      { multiple: a = !1 } = n,
      { spacing: c = "space-y-1" } = n,
      { rounded: i = "rounded-token" } = n,
      { active: u = "variant-filled" } = n,
      { hover: f = "hover:variant-soft" } = n,
      { padding: d = "px-4 py-2" } = n,
      { regionLead: p = "" } = n,
      { regionDefault: m = "" } = n,
      { regionTrail: g = "" } = n,
      { labelledby: h = "" } = n;
    return (
      I("multiple", a),
      I("rounded", i),
      I("active", u),
      I("hover", f),
      I("padding", d),
      I("regionLead", p),
      I("regionDefault", m),
      I("regionTrail", g),
      (t.$$set = (t) => {
        l(13, (n = e(e({}, n), $(t)))),
          "multiple" in t && l(2, (a = t.multiple)),
          "spacing" in t && l(3, (c = t.spacing)),
          "rounded" in t && l(4, (i = t.rounded)),
          "active" in t && l(5, (u = t.active)),
          "hover" in t && l(6, (f = t.hover)),
          "padding" in t && l(7, (d = t.padding)),
          "regionLead" in t && l(8, (p = t.regionLead)),
          "regionDefault" in t && l(9, (m = t.regionDefault)),
          "regionTrail" in t && l(10, (g = t.regionTrail)),
          "labelledby" in t && l(0, (h = t.labelledby)),
          "$$scope" in t && l(11, (s = t.$$scope));
      }),
      (t.$$.update = () => {
        l(1, (o = ` ${c} ${i} ${n.class ?? ""}`));
      }),
      (n = $(n)),
      [h, o, a, c, i, u, f, d, p, m, g, s, r]
    );
  }
  class Qe extends dt {
    constructor(t) {
      super(),
        ft(this, t, Be, Fe, s, {
          multiple: 2,
          spacing: 3,
          rounded: 4,
          active: 5,
          hover: 6,
          padding: 7,
          regionLead: 8,
          regionDefault: 9,
          regionTrail: 10,
          labelledby: 0,
        });
    }
  }
  const He = (t) => ({}),
    qe = (t) => ({}),
    Ge = (t) => ({}),
    We = (t) => ({});
  function Je(t) {
    let e,
      n,
      l,
      r,
      s = !1;
    return (
      (n = (function (t) {
        let e;
        return {
          p(...n) {
            (e = n), e.forEach((e) => t.push(e));
          },
          r() {
            e.forEach((e) => t.splice(t.indexOf(e), 1));
          },
        };
      })(t[35][0])),
      {
        c() {
          (e = w("input")),
            j(e, "type", "radio"),
            j(e, "name", t[1]),
            (e.__value = t[2]),
            D(e, e.__value),
            j(e, "tabindex", "-1"),
            n.p(e);
        },
        m(n, o) {
          v(n, e, o),
            t[33](e),
            (e.checked = e.__value === t[0]),
            l ||
              ((r = [
                _(e, "change", t[34]),
                _(e, "click", t[29]),
                _(e, "change", t[30]),
              ]),
              (l = !0));
        },
        p(t, n) {
          2 & n[0] && j(e, "name", t[1]),
            4 & n[0] && ((e.__value = t[2]), D(e, e.__value), (s = !0)),
            (s || 1 & n[0]) && (e.checked = e.__value === t[0]);
        },
        d(s) {
          s && b(e), t[33](null), n.r(), (l = !1), o(r);
        },
      }
    );
  }
  function Ve(t) {
    let e, n, l;
    return {
      c() {
        (e = w("input")),
          j(e, "type", "checkbox"),
          j(e, "name", t[1]),
          (e.__value = t[2]),
          D(e, e.__value),
          j(e, "tabindex", "-1");
      },
      m(o, r) {
        v(o, e, r),
          t[31](e),
          (e.checked = t[4]),
          n ||
            ((l = [
              _(e, "change", t[32]),
              _(e, "click", t[27]),
              _(e, "change", t[28]),
            ]),
            (n = !0));
      },
      p(t, n) {
        2 & n[0] && j(e, "name", t[1]),
          4 & n[0] && ((e.__value = t[2]), D(e, e.__value)),
          16 & n[0] && (e.checked = t[4]);
      },
      d(r) {
        r && b(e), t[31](null), (n = !1), o(l);
      },
    };
  }
  function Xe(t) {
    let e, n, l;
    const o = t[23].lead,
      r = c(o, t, t[22], We);
    return {
      c() {
        (e = w("div")),
          r && r.c(),
          j(e, "class", (n = "listbox-label-lead " + t[9]));
      },
      m(t, n) {
        v(t, e, n), r && r.m(e, null), (l = !0);
      },
      p(t, s) {
        r &&
          r.p &&
          (!l || 4194304 & s[0]) &&
          f(r, o, t, t[22], l ? u(o, t[22], s, Ge) : d(t[22]), We),
          (!l || (512 & s[0] && n !== (n = "listbox-label-lead " + t[9]))) &&
            j(e, "class", n);
      },
      i(t) {
        l || (nt(r, t), (l = !0));
      },
      o(t) {
        lt(r, t), (l = !1);
      },
      d(t) {
        t && b(e), r && r.d(t);
      },
    };
  }
  function Ke(t) {
    let e, n, l;
    const o = t[23].trail,
      r = c(o, t, t[22], qe);
    return {
      c() {
        (e = w("div")),
          r && r.c(),
          j(e, "class", (n = "listbox-label-trail " + t[7]));
      },
      m(t, n) {
        v(t, e, n), r && r.m(e, null), (l = !0);
      },
      p(t, s) {
        r &&
          r.p &&
          (!l || 4194304 & s[0]) &&
          f(r, o, t, t[22], l ? u(o, t[22], s, He) : d(t[22]), qe),
          (!l || (128 & s[0] && n !== (n = "listbox-label-trail " + t[7]))) &&
            j(e, "class", n);
      },
      i(t) {
        l || (nt(r, t), (l = !0));
      },
      o(t) {
        lt(r, t), (l = !1);
      },
      d(t) {
        t && b(e), r && r.d(t);
      },
    };
  }
  function Ze(t) {
    let e, n, l, r, s, a, i, $, p, m, h, x, y, k;
    function M(t, e) {
      return t[3] ? Ve : Je;
    }
    let E = M(t),
      z = E(t),
      D = t[13].lead && Xe(t);
    const T = t[23].default,
      S = c(T, t, t[22], null);
    let L = t[13].trail && Ke(t);
    return {
      c() {
        (e = w("label")),
          (n = w("div")),
          (l = w("div")),
          z.c(),
          (r = N()),
          (s = w("div")),
          D && D.c(),
          (a = N()),
          (i = w("div")),
          S && S.c(),
          (p = N()),
          L && L.c(),
          j(l, "class", "h-0 w-0 overflow-hidden"),
          j(i, "class", ($ = "listbox-label-content " + t[8])),
          j(s, "class", (m = "listbox-label " + t[10])),
          j(n, "class", (h = "listbox-item " + t[11])),
          j(n, "data-testid", "listbox-item"),
          j(n, "role", "option"),
          j(n, "aria-selected", t[5]),
          j(n, "tabindex", "0");
      },
      m(o, c) {
        v(o, e, c),
          g(e, n),
          g(n, l),
          z.m(l, null),
          g(n, r),
          g(n, s),
          D && D.m(s, null),
          g(s, a),
          g(s, i),
          S && S.m(i, null),
          g(s, p),
          L && L.m(s, null),
          (x = !0),
          y ||
            ((k = [
              _(n, "keydown", t[12]),
              _(n, "keydown", t[24]),
              _(n, "keyup", t[25]),
              _(n, "keypress", t[26]),
            ]),
            (y = !0));
      },
      p(t, e) {
        E === (E = M(t)) && z
          ? z.p(t, e)
          : (z.d(1), (z = E(t)), z && (z.c(), z.m(l, null))),
          t[13].lead
            ? D
              ? (D.p(t, e), 8192 & e[0] && nt(D, 1))
              : ((D = Xe(t)), D.c(), nt(D, 1), D.m(s, a))
            : D &&
              (tt(),
              lt(D, 1, 1, () => {
                D = null;
              }),
              et()),
          S &&
            S.p &&
            (!x || 4194304 & e[0]) &&
            f(S, T, t, t[22], x ? u(T, t[22], e, null) : d(t[22]), null),
          (!x || (256 & e[0] && $ !== ($ = "listbox-label-content " + t[8]))) &&
            j(i, "class", $),
          t[13].trail
            ? L
              ? (L.p(t, e), 8192 & e[0] && nt(L, 1))
              : ((L = Ke(t)), L.c(), nt(L, 1), L.m(s, null))
            : L &&
              (tt(),
              lt(L, 1, 1, () => {
                L = null;
              }),
              et()),
          (!x || (1024 & e[0] && m !== (m = "listbox-label " + t[10]))) &&
            j(s, "class", m),
          (!x || (2048 & e[0] && h !== (h = "listbox-item " + t[11]))) &&
            j(n, "class", h),
          (!x || 32 & e[0]) && j(n, "aria-selected", t[5]);
      },
      i(t) {
        x || (nt(D), nt(S, t), nt(L), (x = !0));
      },
      o(t) {
        lt(D), lt(S, t), lt(L), (x = !1);
      },
      d(t) {
        t && b(e), z.d(), D && D.d(), S && S.d(t), L && L.d(), (y = !1), o(k);
      },
    };
  }
  function tn(t, e) {
    if (t === e) return !0;
    if (!(t instanceof Object && e instanceof Object)) return !1;
    const n = Object.keys(t),
      l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (const o of n) {
      if (!tn(t[o], e[o])) return !1;
    }
    return !0;
  }
  function en(t, n, l) {
    let o,
      r,
      s,
      a,
      c,
      i,
      u,
      { $$slots: f = {}, $$scope: d } = n;
    const p = (function (t) {
      const e = {};
      for (const n in t) e[n] = !0;
      return e;
    })(f);
    let m,
      g,
      { group: h } = n,
      { name: v } = n,
      { value: b } = n,
      { multiple: x = U("multiple") } = n,
      { rounded: w = U("rounded") } = n,
      { active: y = U("active") } = n,
      { hover: k = U("hover") } = n,
      { padding: N = U("padding") } = n,
      { regionLead: M = U("regionLead") } = n,
      { regionDefault: _ = U("regionDefault") } = n,
      { regionTrail: j = U("regionTrail") } = n;
    return (
      (t.$$set = (t) => {
        l(38, (n = e(e({}, n), $(t)))),
          "group" in t && l(0, (h = t.group)),
          "name" in t && l(1, (v = t.name)),
          "value" in t && l(2, (b = t.value)),
          "multiple" in t && l(3, (x = t.multiple)),
          "rounded" in t && l(14, (w = t.rounded)),
          "active" in t && l(15, (y = t.active)),
          "hover" in t && l(16, (k = t.hover)),
          "padding" in t && l(17, (N = t.padding)),
          "regionLead" in t && l(18, (M = t.regionLead)),
          "regionDefault" in t && l(19, (_ = t.regionDefault)),
          "regionTrail" in t && l(20, (j = t.regionTrail)),
          "$$scope" in t && l(22, (d = t.$$scope));
      }),
      (t.$$.update = () => {
        9 & t.$$.dirty[0] && x && l(4, (m = h.indexOf(b) >= 0)),
          24 & t.$$.dirty[0] &&
            x &&
            (function (t) {
              const e = h.indexOf(b);
              t
                ? e < 0 && (h.push(b), l(0, h))
                : e >= 0 && (h.splice(e, 1), l(0, h));
            })(m),
          13 & t.$$.dirty[0] &&
            l(5, (o = x ? h.some((t) => tn(b, t)) : tn(h, b))),
          98336 & t.$$.dirty[0] && l(21, (r = o ? y : k)),
          l(
            11,
            (s = `cursor-pointer -outline-offset-[3px] ${w} ${N} ${r} ${
              n.class ?? ""
            }`)
          ),
          262144 & t.$$.dirty[0] && l(9, (c = ` ${M}`)),
          524288 & t.$$.dirty[0] && l(8, (i = `flex-1 ${_}`)),
          1048576 & t.$$.dirty[0] && l(7, (u = ` ${j}`));
      }),
      l(10, (a = "flex items-center space-x-4")),
      (n = $(n)),
      [
        h,
        v,
        b,
        x,
        m,
        o,
        g,
        u,
        i,
        c,
        "flex items-center space-x-4",
        s,
        function (t) {
          ["Enter", "Space"].includes(t.code) &&
            (t.preventDefault(), g.click());
        },
        p,
        w,
        y,
        k,
        N,
        M,
        _,
        j,
        r,
        d,
        f,
        function (e) {
          Y.call(this, t, e);
        },
        function (e) {
          Y.call(this, t, e);
        },
        function (e) {
          Y.call(this, t, e);
        },
        function (e) {
          Y.call(this, t, e);
        },
        function (e) {
          Y.call(this, t, e);
        },
        function (e) {
          Y.call(this, t, e);
        },
        function (e) {
          Y.call(this, t, e);
        },
        function (t) {
          F[t ? "unshift" : "push"](() => {
            (g = t), l(6, g);
          });
        },
        function () {
          (m = this.checked), l(4, m);
        },
        function (t) {
          F[t ? "unshift" : "push"](() => {
            (g = t), l(6, g);
          });
        },
        function () {
          (h = this.__value), l(0, h);
        },
        [[]],
      ]
    );
  }
  class nn extends dt {
    constructor(t) {
      super(),
        ft(
          this,
          t,
          en,
          Ze,
          s,
          {
            group: 0,
            name: 1,
            value: 2,
            multiple: 3,
            rounded: 14,
            active: 15,
            hover: 16,
            padding: 17,
            regionLead: 18,
            regionDefault: 19,
            regionTrail: 20,
          },
          null,
          [-1, -1]
        );
    }
  }
  function ln(t, e, n) {
    const l = t.slice();
    return (l[34] = e[n]), l;
  }
  function on(t, e, n) {
    const l = t.slice();
    return (l[37] = e[n]), l;
  }
  function rn(t, e, n) {
    const l = t.slice();
    return (l[40] = e[n]), (l[34] = n), l;
  }
  function sn(t) {
    let e,
      n,
      l = ot(t[8]),
      o = [];
    for (let s = 0; s < l.length; s += 1) o[s] = cn(rn(t, l, s));
    const r = (t) =>
      lt(o[t], 1, 1, () => {
        o[t] = null;
      });
    return {
      c() {
        for (let t = 0; t < o.length; t += 1) o[t].c();
        e = M();
      },
      m(t, l) {
        for (let e = 0; e < o.length; e += 1) o[e] && o[e].m(t, l);
        v(t, e, l), (n = !0);
      },
      p(t, n) {
        if (590208 & n[0]) {
          let s;
          for (l = ot(t[8]), s = 0; s < l.length; s += 1) {
            const r = rn(t, l, s);
            o[s]
              ? (o[s].p(r, n), nt(o[s], 1))
              : ((o[s] = cn(r)),
                o[s].c(),
                nt(o[s], 1),
                o[s].m(e.parentNode, e));
          }
          for (tt(), s = l.length; s < o.length; s += 1) r(s);
          et();
        }
      },
      i(t) {
        if (!n) {
          for (let t = 0; t < l.length; t += 1) nt(o[t]);
          n = !0;
        }
      },
      o(t) {
        o = o.filter(Boolean);
        for (let e = 0; e < o.length; e += 1) lt(o[e]);
        n = !1;
      },
      d(t) {
        t && b(e), x(o, t);
      },
    };
  }
  function an(t) {
    let e,
      n,
      l,
      o,
      r,
      s,
      a,
      c,
      i,
      u,
      f,
      d,
      $,
      p,
      m,
      h,
      x,
      y,
      M,
      _,
      E,
      D,
      T,
      S,
      L,
      R,
      A,
      O,
      C,
      I = t[40].description + "",
      U = t[40].location + "",
      Y = t[40].startTime + "",
      P = t[40].endTime + "",
      F = t[40].startDate + "",
      B = t[40].endDate + "",
      Q = t[40].repeat + "";
    return (
      (n = new qt({ props: { class: "mr-1" } })),
      (a = new oe({ props: { class: "mr-1" } })),
      (d = new Ft({ props: { class: "mr-1" } })),
      (M = new Dt({ props: { class: "mr-1" } })),
      (R = new xe({ props: { class: "mr-1" } })),
      {
        c() {
          (e = w("span")),
            at(n.$$.fragment),
            (l = N()),
            (o = k(I)),
            (r = N()),
            (s = w("span")),
            at(a.$$.fragment),
            (c = N()),
            (i = k(U)),
            (u = N()),
            (f = w("span")),
            at(d.$$.fragment),
            ($ = N()),
            (p = k(Y)),
            (m = k(" - ")),
            (h = k(P)),
            (x = N()),
            (y = w("span")),
            at(M.$$.fragment),
            (_ = N()),
            (E = k(F)),
            (D = k(" - ")),
            (T = k(B)),
            (S = N()),
            (L = w("span")),
            at(R.$$.fragment),
            (A = N()),
            (O = k(Q)),
            j(e, "class", "h-fit w-full text-xl mt-2 m-1 flex justify-start"),
            j(s, "class", "h-fit w-full text-xl m-1 flex justify-start"),
            j(f, "class", "h-fit w-full text-xl m-1 flex justify-start"),
            j(y, "class", "h-fit w-full text-xl m-1 flex justify-start"),
            j(L, "class", "h-fit w-full text-xl m-1 flex justify-start");
        },
        m(t, b) {
          v(t, e, b),
            ct(n, e, null),
            g(e, l),
            g(e, o),
            v(t, r, b),
            v(t, s, b),
            ct(a, s, null),
            g(s, c),
            g(s, i),
            v(t, u, b),
            v(t, f, b),
            ct(d, f, null),
            g(f, $),
            g(f, p),
            g(f, m),
            g(f, h),
            v(t, x, b),
            v(t, y, b),
            ct(M, y, null),
            g(y, _),
            g(y, E),
            g(y, D),
            g(y, T),
            v(t, S, b),
            v(t, L, b),
            ct(R, L, null),
            g(L, A),
            g(L, O),
            (C = !0);
        },
        p(t, e) {
          (!C || 256 & e[0]) && I !== (I = t[40].description + "") && z(o, I),
            (!C || 256 & e[0]) && U !== (U = t[40].location + "") && z(i, U),
            (!C || 256 & e[0]) && Y !== (Y = t[40].startTime + "") && z(p, Y),
            (!C || 256 & e[0]) && P !== (P = t[40].endTime + "") && z(h, P),
            (!C || 256 & e[0]) && F !== (F = t[40].startDate + "") && z(E, F),
            (!C || 256 & e[0]) && B !== (B = t[40].endDate + "") && z(T, B),
            (!C || 256 & e[0]) && Q !== (Q = t[40].repeat + "") && z(O, Q);
        },
        i(t) {
          C ||
            (nt(n.$$.fragment, t),
            nt(a.$$.fragment, t),
            nt(d.$$.fragment, t),
            nt(M.$$.fragment, t),
            nt(R.$$.fragment, t),
            (C = !0));
        },
        o(t) {
          lt(n.$$.fragment, t),
            lt(a.$$.fragment, t),
            lt(d.$$.fragment, t),
            lt(M.$$.fragment, t),
            lt(R.$$.fragment, t),
            (C = !1);
        },
        d(t) {
          t && (b(e), b(r), b(s), b(u), b(f), b(x), b(y), b(S), b(L)),
            it(n),
            it(a),
            it(d),
            it(M),
            it(R);
        },
      }
    );
  }
  function cn(t) {
    let e,
      n,
      l,
      o,
      r,
      s,
      a,
      c,
      i,
      u,
      f,
      d,
      $ = t[40].summary + "";
    function p() {
      return t[22](t[34]);
    }
    s = new It({ props: { class: "-z-10" } });
    let m = t[7][t[34]] && an(t);
    return {
      c() {
        (e = w("div")),
          (n = w("span")),
          (l = k($)),
          (o = N()),
          (r = w("button")),
          at(s.$$.fragment),
          (c = N()),
          m && m.c(),
          (i = N()),
          j(n, "class", "h-fit w-full"),
          j(r, "class", "absolute right-2 top-3 transition-all"),
          j(r, "style", (a = t[7][t[34]] ? "rotate:180deg;" : "")),
          j(
            e,
            "class",
            "w-full h-fit p-2 text-2xl font-bold variant-glass-surface transition-all rounded-md relative flex flex-col m-2"
          ),
          T(e, "background-color", t[16][t[40].colorId]);
      },
      m(t, a) {
        v(t, e, a),
          g(e, n),
          g(n, l),
          g(e, o),
          g(e, r),
          ct(s, r, null),
          g(e, c),
          m && m.m(e, null),
          g(e, i),
          (u = !0),
          f || ((d = _(r, "click", p)), (f = !0));
      },
      p(n, o) {
        (t = n),
          (!u || 256 & o[0]) && $ !== ($ = t[40].summary + "") && z(l, $),
          (!u ||
            (128 & o[0] && a !== (a = t[7][t[34]] ? "rotate:180deg;" : ""))) &&
            j(r, "style", a),
          t[7][t[34]]
            ? m
              ? (m.p(t, o), 128 & o[0] && nt(m, 1))
              : ((m = an(t)), m.c(), nt(m, 1), m.m(e, i))
            : m &&
              (tt(),
              lt(m, 1, 1, () => {
                m = null;
              }),
              et()),
          (!u || 256 & o[0]) && T(e, "background-color", t[16][t[40].colorId]);
      },
      i(t) {
        u || (nt(s.$$.fragment, t), nt(m), (u = !0));
      },
      o(t) {
        lt(s.$$.fragment, t), lt(m), (u = !1);
      },
      d(t) {
        t && b(e), it(s), m && m.d(), (f = !1), d();
      },
    };
  }
  function un(t) {
    let e,
      n,
      l,
      r,
      s,
      a,
      c,
      i,
      u,
      f,
      d,
      $,
      p,
      m,
      h,
      y,
      M,
      E,
      S,
      L,
      R,
      A,
      O,
      C,
      I,
      U,
      Y,
      P,
      F,
      B,
      Q,
      H,
      q,
      G,
      W,
      J,
      V,
      X,
      K,
      Z,
      rt,
      st,
      ut,
      ft,
      dt;
    (l = new Ne({})),
      (u = new qt({ props: { class: "mr-1" } })),
      (m = new oe({ props: { class: "mr-1" } })),
      (S = new Ft({ props: { class: "mr-1" } })),
      (U = new Dt({ props: { class: "mr-1" } })),
      (q = new xe({ props: { class: "mr-1" } })),
      (K = new It({
        props: {
          class: "ml-1 transition-all",
          style: t[15] ? "rotate:180deg;" : "",
        },
      }));
    let $t = t[15] && fn(t),
      pt = ot(Object.keys(t[16])),
      mt = [];
    for (let o = 0; o < pt.length; o += 1) mt[o] = mn(ln(t, pt, o));
    return {
      c() {
        (e = w("div")),
          (n = w("button")),
          at(l.$$.fragment),
          (r = N()),
          (s = w("span")),
          (a = w("input")),
          (c = N()),
          (i = w("span")),
          at(u.$$.fragment),
          (f = N()),
          (d = w("input")),
          ($ = N()),
          (p = w("span")),
          at(m.$$.fragment),
          (h = N()),
          (y = w("input")),
          (M = N()),
          (E = w("span")),
          at(S.$$.fragment),
          (L = N()),
          (R = w("input")),
          (A = k("\n\t\t\t\t\t-\n\t\t\t\t\t")),
          (O = w("input")),
          (C = N()),
          (I = w("span")),
          at(U.$$.fragment),
          (Y = N()),
          (P = w("input")),
          (F = k("\n\t\t\t\t\t-\n\t\t\t\t\t")),
          (B = w("input")),
          (Q = N()),
          (H = w("span")),
          at(q.$$.fragment),
          (G = N()),
          (W = w("span")),
          (J = w("button")),
          (V = k(t[13])),
          (X = N()),
          at(K.$$.fragment),
          (Z = N()),
          $t && $t.c(),
          (rt = N()),
          (st = w("span"));
        for (let t = 0; t < mt.length; t += 1) mt[t].c();
        j(n, "class", "absolute top-3 right-2"),
          j(a, "type", "text"),
          j(
            a,
            "class",
            "bg-inherit text-2xl border-transparent focus:border-transparent focus:ring-0 p-0"
          ),
          j(a, "placeholder", "summary"),
          j(s, "class", "h-fit w-full"),
          j(d, "type", "text"),
          j(
            d,
            "class",
            "bg-inherit text-xl p-0 border-transparent focus:border-transparent focus:ring-0"
          ),
          j(d, "placeholder", "description"),
          j(i, "class", "h-fit w-full text-xl mt-2 m-1 flex justify-start"),
          j(y, "type", "text"),
          j(
            y,
            "class",
            "bg-inherit text-xl p-0 border-transparent focus:border-transparent focus:ring-0"
          ),
          j(y, "placeholder", "location"),
          j(p, "class", "h-fit w-full text-xl m-1 flex justify-start"),
          j(R, "type", "time"),
          j(
            R,
            "class",
            "bg-inherit p-0 border-transparent focus:border-transparent focus:ring-0"
          ),
          j(R, "name", "startTime"),
          j(O, "type", "time"),
          j(
            O,
            "class",
            "bg-inherit p-0 border-transparent focus:border-transparent focus:ring-0"
          ),
          j(O, "name", "endTime"),
          j(E, "class", "h-fit w-full text-xl m-1 flex justify-start"),
          j(P, "type", "date"),
          j(
            P,
            "class",
            "bg-inherit p-0 border-transparent focus:border-transparent focus:ring-0"
          ),
          j(P, "name", "startDate"),
          j(B, "type", "date"),
          j(
            B,
            "class",
            "bg-inherit p-0 border-transparent focus:border-transparent focus:ring-0"
          ),
          j(B, "name", "endDate"),
          j(I, "class", "h-fit w-full text-xl m-1 flex justify-start"),
          j(J, "class", "text-left flex items-center"),
          j(W, "class", "flex flex-col transition-all"),
          j(H, "class", "h-fit w-full text-xl m-1 flex justify-start"),
          j(st, "class", "h-fit w-full flex gap-1 m-1 mt-2"),
          j(
            e,
            "class",
            "w-full h-fit p-2 text-2xl font-bold variant-glass-surface transition-all rounded-md relative flex flex-col m-2"
          ),
          T(e, "background-color", t[16][t[4]]);
      },
      m(o, b) {
        v(o, e, b),
          g(e, n),
          ct(l, n, null),
          g(e, r),
          g(e, s),
          g(s, a),
          D(a, t[9]),
          g(e, c),
          g(e, i),
          ct(u, i, null),
          g(i, f),
          g(i, d),
          D(d, t[10]),
          g(e, $),
          g(e, p),
          ct(m, p, null),
          g(p, h),
          g(p, y),
          D(y, t[11]),
          g(e, M),
          g(e, E),
          ct(S, E, null),
          g(E, L),
          g(E, R),
          D(R, t[0]),
          g(E, A),
          g(E, O),
          D(O, t[1]),
          g(e, C),
          g(e, I),
          ct(U, I, null),
          g(I, Y),
          g(I, P),
          D(P, t[2]),
          g(I, F),
          g(I, B),
          D(B, t[3]),
          g(e, Q),
          g(e, H),
          ct(q, H, null),
          g(H, G),
          g(H, W),
          g(W, J),
          g(J, V),
          g(J, X),
          ct(K, J, null),
          g(W, Z),
          $t && $t.m(W, null),
          g(e, rt),
          g(e, st);
        for (let t = 0; t < mt.length; t += 1) mt[t] && mt[t].m(st, null);
        (ut = !0),
          ft ||
            ((dt = [
              _(n, "click", t[17]),
              _(a, "input", t[23]),
              _(d, "input", t[24]),
              _(y, "input", t[25]),
              _(R, "input", t[26]),
              _(O, "input", t[27]),
              _(P, "input", t[28]),
              _(B, "input", t[29]),
              _(J, "click", t[30]),
            ]),
            (ft = !0));
      },
      p(t, n) {
        512 & n[0] && a.value !== t[9] && D(a, t[9]),
          1024 & n[0] && d.value !== t[10] && D(d, t[10]),
          2048 & n[0] && y.value !== t[11] && D(y, t[11]),
          1 & n[0] && D(R, t[0]),
          2 & n[0] && D(O, t[1]),
          4 & n[0] && D(P, t[2]),
          8 & n[0] && D(B, t[3]),
          (!ut || 8192 & n[0]) && z(V, t[13]);
        const l = {};
        if (
          (32768 & n[0] && (l.style = t[15] ? "rotate:180deg;" : ""),
          K.$set(l),
          t[15]
            ? $t
              ? ($t.p(t, n), 32768 & n[0] && nt($t, 1))
              : (($t = fn(t)), $t.c(), nt($t, 1), $t.m(W, null))
            : $t &&
              (tt(),
              lt($t, 1, 1, () => {
                $t = null;
              }),
              et()),
          327696 & n[0])
        ) {
          let e;
          for (pt = ot(Object.keys(t[16])), e = 0; e < pt.length; e += 1) {
            const l = ln(t, pt, e);
            mt[e]
              ? mt[e].p(l, n)
              : ((mt[e] = mn(l)), mt[e].c(), mt[e].m(st, null));
          }
          for (; e < mt.length; e += 1) mt[e].d(1);
          mt.length = pt.length;
        }
        (!ut || 16 & n[0]) && T(e, "background-color", t[16][t[4]]);
      },
      i(t) {
        ut ||
          (nt(l.$$.fragment, t),
          nt(u.$$.fragment, t),
          nt(m.$$.fragment, t),
          nt(S.$$.fragment, t),
          nt(U.$$.fragment, t),
          nt(q.$$.fragment, t),
          nt(K.$$.fragment, t),
          nt($t),
          (ut = !0));
      },
      o(t) {
        lt(l.$$.fragment, t),
          lt(u.$$.fragment, t),
          lt(m.$$.fragment, t),
          lt(S.$$.fragment, t),
          lt(U.$$.fragment, t),
          lt(q.$$.fragment, t),
          lt(K.$$.fragment, t),
          lt($t),
          (ut = !1);
      },
      d(t) {
        t && b(e),
          it(l),
          it(u),
          it(m),
          it(S),
          it(U),
          it(q),
          it(K),
          $t && $t.d(),
          x(mt, t),
          (ft = !1),
          o(dt);
      },
    };
  }
  function fn(t) {
    let e, n;
    return (
      (e = new Qe({
        props: {
          class: "w-fit",
          $$slots: { default: [pn] },
          $$scope: { ctx: t },
        },
      })),
      {
        c() {
          at(e.$$.fragment);
        },
        m(t, l) {
          ct(e, t, l), (n = !0);
        },
        p(t, n) {
          const l = {};
          (28672 & n[0]) | (2048 & n[1]) && (l.$$scope = { dirty: n, ctx: t }),
            e.$set(l);
        },
        i(t) {
          n || (nt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          lt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          it(e, t);
        },
      }
    );
  }
  function dn(t) {
    let e,
      n = t[37].label + "";
    return {
      c() {
        e = k(n);
      },
      m(t, n) {
        v(t, e, n);
      },
      p(t, l) {
        16384 & l[0] && n !== (n = t[37].label + "") && z(e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function $n(t) {
    let e, n, l;
    function o(e) {
      t[31](e);
    }
    let r = {
      class: "font-medium",
      name: "medium",
      value: t[37].value,
      $$slots: { default: [dn] },
      $$scope: { ctx: t },
    };
    return (
      void 0 !== t[12] && (r.group = t[12]),
      (e = new nn({ props: r })),
      F.push(() =>
        (function (t, e, n) {
          const l = t.$$.props[e];
          void 0 !== l && ((t.$$.bound[l] = n), n(t.$$.ctx[l]));
        })(e, "group", o)
      ),
      e.$on("click", function () {
        return t[32](t[37]);
      }),
      {
        c() {
          at(e.$$.fragment);
        },
        m(t, n) {
          ct(e, t, n), (l = !0);
        },
        p(l, o) {
          t = l;
          const r = {};
          var s;
          16384 & o[0] && (r.value = t[37].value),
            (16384 & o[0]) | (2048 & o[1]) &&
              (r.$$scope = { dirty: o, ctx: t }),
            !n &&
              4096 & o[0] &&
              ((n = !0), (r.group = t[12]), (s = () => (n = !1)), Q.push(s)),
            e.$set(r);
        },
        i(t) {
          l || (nt(e.$$.fragment, t), (l = !0));
        },
        o(t) {
          lt(e.$$.fragment, t), (l = !1);
        },
        d(t) {
          it(e, t);
        },
      }
    );
  }
  function pn(t) {
    let e,
      n,
      l = ot(t[14]),
      o = [];
    for (let s = 0; s < l.length; s += 1) o[s] = $n(on(t, l, s));
    const r = (t) =>
      lt(o[t], 1, 1, () => {
        o[t] = null;
      });
    return {
      c() {
        for (let t = 0; t < o.length; t += 1) o[t].c();
        e = M();
      },
      m(t, l) {
        for (let e = 0; e < o.length; e += 1) o[e] && o[e].m(t, l);
        v(t, e, l), (n = !0);
      },
      p(t, n) {
        if (28672 & n[0]) {
          let s;
          for (l = ot(t[14]), s = 0; s < l.length; s += 1) {
            const r = on(t, l, s);
            o[s]
              ? (o[s].p(r, n), nt(o[s], 1))
              : ((o[s] = $n(r)),
                o[s].c(),
                nt(o[s], 1),
                o[s].m(e.parentNode, e));
          }
          for (tt(), s = l.length; s < o.length; s += 1) r(s);
          et();
        }
      },
      i(t) {
        if (!n) {
          for (let t = 0; t < l.length; t += 1) nt(o[t]);
          n = !0;
        }
      },
      o(t) {
        o = o.filter(Boolean);
        for (let e = 0; e < o.length; e += 1) lt(o[e]);
        n = !1;
      },
      d(t) {
        t && b(e), x(o, t);
      },
    };
  }
  function mn(t) {
    let e, n, l, o;
    return {
      c() {
        (e = w("button")),
          j(
            e,
            "class",
            "rounded-full inline-block h-7 w-7 border-2 border-white transition-all"
          ),
          j(e, "id", t[34]),
          j(
            e,
            "style",
            (n =
              "background-color: " +
              t[16][t[34]] +
              "; " +
              (t[4] == t[34] ? "border: none" : ""))
          );
      },
      m(n, r) {
        v(n, e, r), l || ((o = _(e, "click", t[18])), (l = !0));
      },
      p(t, l) {
        16 & l[0] &&
          n !==
            (n =
              "background-color: " +
              t[16][t[34]] +
              "; " +
              (t[4] == t[34] ? "border: none" : "")) &&
          j(e, "style", n);
      },
      d(t) {
        t && b(e), (l = !1), o();
      },
    };
  }
  function gn(t) {
    let e, n, l, r, s, a, c, i, u, f, d, $, p, m, h, x, y, k, M;
    a = new It({ props: { class: "-z-10" } });
    let E = t[5] && sn(t);
    m = new It({ props: { class: "-z-10" } });
    let z = t[6] && un(t);
    return {
      c() {
        (e = w("div")),
          (n = w("div")),
          (l = w("div")),
          (l.textContent = "Recent Events"),
          (r = N()),
          (s = w("button")),
          at(a.$$.fragment),
          (i = N()),
          E && E.c(),
          (u = N()),
          (f = w("div")),
          (d = w("div")),
          (d.textContent = "Create Events"),
          ($ = N()),
          (p = w("button")),
          at(m.$$.fragment),
          (x = N()),
          z && z.c(),
          j(l, "class", "text-xl font-bold w-full"),
          j(s, "class", "absolute right-2 top-3 transition-all"),
          j(s, "style", (c = t[5] ? "rotate:180deg;" : "")),
          j(
            n,
            "class",
            "h-fit w-full variant-ghost-surface p-3 flex flex-col items-center relative transition-all"
          ),
          j(d, "class", "text-xl font-bold w-full"),
          j(p, "class", "absolute right-2 top-3 transition-all"),
          j(p, "style", (h = t[6] ? "rotate:180deg;" : "")),
          j(
            f,
            "class",
            "h-fit w-full variant-ghost-surface p-3 flex flex-col items-center relative transition-all"
          ),
          j(e, "class", "h-full w-full");
      },
      m(o, c) {
        v(o, e, c),
          g(e, n),
          g(n, l),
          g(n, r),
          g(n, s),
          ct(a, s, null),
          g(n, i),
          E && E.m(n, null),
          g(e, u),
          g(e, f),
          g(f, d),
          g(f, $),
          g(f, p),
          ct(m, p, null),
          g(f, x),
          z && z.m(f, null),
          (y = !0),
          k || ((M = [_(s, "click", t[20]), _(p, "click", t[21])]), (k = !0));
      },
      p(t, e) {
        (!y || (32 & e[0] && c !== (c = t[5] ? "rotate:180deg;" : ""))) &&
          j(s, "style", c),
          t[5]
            ? E
              ? (E.p(t, e), 32 & e[0] && nt(E, 1))
              : ((E = sn(t)), E.c(), nt(E, 1), E.m(n, null))
            : E &&
              (tt(),
              lt(E, 1, 1, () => {
                E = null;
              }),
              et()),
          (!y || (64 & e[0] && h !== (h = t[6] ? "rotate:180deg;" : ""))) &&
            j(p, "style", h),
          t[6]
            ? z
              ? (z.p(t, e), 64 & e[0] && nt(z, 1))
              : ((z = un(t)), z.c(), nt(z, 1), z.m(f, null))
            : z &&
              (tt(),
              lt(z, 1, 1, () => {
                z = null;
              }),
              et());
      },
      i(t) {
        y ||
          (nt(a.$$.fragment, t), nt(E), nt(m.$$.fragment, t), nt(z), (y = !0));
      },
      o(t) {
        lt(a.$$.fragment, t), lt(E), lt(m.$$.fragment, t), lt(z), (y = !1);
      },
      d(t) {
        t && b(e), it(a), E && E.d(), it(m), z && z.d(), (k = !1), o(M);
      },
    };
  }
  function hn(t, e, n) {
    let l = 7,
      o = !1,
      r = !1,
      s = [],
      a = [],
      c = "",
      i = "",
      u = "",
      f = "",
      d = "",
      $ = "",
      p = "",
      m = "NA",
      g = "No Repeat",
      h = [],
      v = !1;
    const b = async () => {
        try {
          const t = await fetch(
              "http://localhost:9090/api/v1/widgets/calendar/",
              { method: "GET", credentials: "include" }
            ),
            e = await t.json();
          e.success &&
            (n(8, (a = e.events)), n(7, (s = Array(a.length).fill(!1))));
        } catch (t) {
          console.error(t);
        }
      },
      x = (t) => {
        n(7, (s[t] = !s[t]), s);
      };
    O(async () => {
      await b();
    });
    return (
      (t.$$.update = () => {
        if (
          (12 & t.$$.dirty[0] && $ > p && ($ ? n(3, (p = $)) : n(2, ($ = p))),
          3 & t.$$.dirty[0] && f > d && (f ? n(1, (d = f)) : n(0, (f = d))),
          4 & t.$$.dirty[0] && $)
        ) {
          const t = new Date($),
            e = (function (t) {
              const e = Math.ceil((t.getDate() + t.getDay()) / 7),
                n = t.getDate() > 7 * (4 - e);
              return 1 === e
                ? 1
                : 2 === e
                ? 2
                : 3 === e
                ? 3
                : 4 !== e || n
                ? 4 === e && n
                  ? 5
                  : -1
                : 4;
            })(t),
            l = "SU MO TU WE TH FR SA".split(" ")[t.getDay()];
          let o;
          (o =
            5 === e
              ? [
                  {
                    value: ` 'RRULE:FREQ=MONTHLY;BYDAY=4${l}' `,
                    label:
                      "Monthly on the fourth " +
                      t.toLocaleDateString("en-US", { weekday: "long" }),
                  },
                  {
                    value: ` 'RRULE:FREQ=MONTHLY;BYDAY=-1${l}' `,
                    label:
                      "Monthly on the last " +
                      t.toLocaleDateString("en-US", { weekday: "long" }),
                  },
                ]
              : -1 === e
              ? [
                  {
                    value: ` 'RRULE:FREQ=MONTHLY;BYDAY=-1${l}' `,
                    label:
                      "Monthly on the last " +
                      t.toLocaleDateString("en-US", { weekday: "long" }),
                  },
                ]
              : [
                  {
                    value: ` 'RRULE:FREQ=MONTHLY;BYDAY=${e}${l}' `,
                    label:
                      "Monthly on the " +
                      "first second third".split(" ")[e - 1] +
                      " " +
                      t.toLocaleDateString("en-US", { weekday: "long" }),
                  },
                ]),
            n(
              14,
              (h = [
                { value: "NA", label: "No Repeat" },
                { value: " 'RRULE:FREQ=DAILY' ", label: "Daily" },
                {
                  value: ` 'RRULE:FREQ=WEEKLY;BYDAY=${l}' `,
                  label:
                    "Weekly on " +
                    t.toLocaleDateString("en-US", { weekday: "long" }),
                },
                ...o,
                {
                  value: " 'RRULE:FREQ=YEARLY' ",
                  label:
                    "Yearly on " +
                    t.toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                    }),
                },
              ])
            );
        }
      }),
      [
        f,
        d,
        $,
        p,
        l,
        o,
        r,
        s,
        a,
        c,
        i,
        u,
        m,
        g,
        h,
        v,
        {
          1: "rgba(121, 134, 203, 0.3)",
          2: "rgba(51, 182, 121, 0.3)",
          3: "rgba(142, 36, 170, 0.3)",
          4: "rgba(230, 124, 115, 0.3)",
          5: "rgba(246, 191, 38, 0.3)",
          6: "rgba(244, 81, 30, 0.3)",
          7: "rgba(3, 155, 229, 0.3)",
          8: "rgba(97, 97, 97, 0.3)",
          9: "rgba(63, 81, 181, 0.3)",
          10: "rgba(11, 128, 67, 0.3)",
          11: "rgba(213, 0, 0, 0.3)",
        },
        async () => {
          try {
            const t = await fetch(
              "http://localhost:9090/api/v1/widgets/calendar/",
              {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  currentColorId: l,
                  summary: c,
                  description: i,
                  location: u,
                  startTime: f,
                  endTime: d,
                  startDate: $,
                  endDate: p,
                  reccurence: m,
                }),
              }
            );
            (await t.json()).success &&
              (await b(), n(6, (r = !1)), n(5, (o = !0)));
          } catch (t) {
            console.error(t);
          }
        },
        (t) => {
          n(4, (l = t.target.id));
        },
        x,
        () => {
          n(5, (o = !o));
        },
        () => {
          n(6, (r = !r));
        },
        (t) => x(t),
        function () {
          (c = this.value), n(9, c);
        },
        function () {
          (i = this.value), n(10, i);
        },
        function () {
          (u = this.value), n(11, u);
        },
        function () {
          (f = this.value), n(0, f), n(1, d);
        },
        function () {
          (d = this.value), n(1, d), n(0, f);
        },
        function () {
          ($ = this.value), n(2, $), n(3, p);
        },
        function () {
          (p = this.value), n(3, p), n(2, $);
        },
        () => {
          n(15, (v = !v));
        },
        function (t) {
          (m = t), n(12, m);
        },
        (t) => {
          n(13, (g = t.label));
        },
      ]
    );
  }
  class vn extends dt {
    constructor(t) {
      super(), ft(this, t, hn, gn, s, {}, null, [-1, -1]);
    }
  }
  function bn(t) {
    h(
      t,
      "svelte-dudtlc",
      ".point.svelte-dudtlc{border-left:15px solid transparent;border-right:15px solid transparent;border-top:30px solid #f00}span.svelte-dudtlc,button.svelte-dudtlc{transition:all 100ms ease-in-out}"
    );
  }
  function xn(t) {
    let e, n, l, o, r, s;
    const a = [yn, wn],
      c = [];
    function i(t, e) {
      return t[1] ? 0 : 1;
    }
    return (
      (n = i(t)),
      (l = c[n] = a[n](t)),
      {
        c() {
          (e = w("button")),
            l.c(),
            j(
              e,
              "class",
              "variant-filled-surface w-1/4 h-1/4 rounded-full p-2 svelte-dudtlc"
            ),
            T(e, "transform", "rotate(-" + t[2] + "deg)");
        },
        m(l, a) {
          v(l, e, a),
            c[n].m(e, null),
            (o = !0),
            r || ((s = _(e, "click", t[5])), (r = !0));
        },
        p(t, r) {
          let s = n;
          (n = i(t)),
            n !== s &&
              (tt(),
              lt(c[s], 1, 1, () => {
                c[s] = null;
              }),
              et(),
              (l = c[n]),
              l || ((l = c[n] = a[n](t)), l.c()),
              nt(l, 1),
              l.m(e, null)),
            (!o || 4 & r) && T(e, "transform", "rotate(-" + t[2] + "deg)");
        },
        i(t) {
          o || (nt(l), (o = !0));
        },
        o(t) {
          lt(l), (o = !1);
        },
        d(t) {
          t && b(e), c[n].d(), (r = !1), s();
        },
      }
    );
  }
  function wn(t) {
    let e, n;
    return (
      (e = new ce({ props: { size: 38 } })),
      {
        c() {
          at(e.$$.fragment);
        },
        m(t, l) {
          ct(e, t, l), (n = !0);
        },
        i(t) {
          n || (nt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          lt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          it(e, t);
        },
      }
    );
  }
  function yn(t) {
    let e, n;
    return (
      (e = new de({ props: { size: 38 } })),
      {
        c() {
          at(e.$$.fragment);
        },
        m(t, l) {
          ct(e, t, l), (n = !0);
        },
        i(t) {
          n || (nt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          lt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          it(e, t);
        },
      }
    );
  }
  function kn(t) {
    let e,
      n,
      l,
      o,
      r,
      s,
      a,
      c,
      i,
      u,
      f,
      d,
      $,
      p,
      m,
      h,
      x,
      y,
      M,
      _,
      E,
      D,
      S,
      L,
      R = 60 * Math.floor(t[3] / 60) + "",
      A = 60 * Math.floor(t[3] / 60) + 15 + "",
      O = 60 * Math.floor(t[3] / 60) + 30 + "",
      C = 60 * Math.floor(t[3] / 60) + 45 + "",
      I = t[0] > 0 && xn(t);
    return {
      c() {
        (e = w("div")),
          (n = w("div")),
          (l = w("span")),
          (o = k(t[3])),
          (r = N()),
          (s = w("span")),
          (s.textContent = "MIN"),
          (a = N()),
          (c = w("div")),
          (i = w("button")),
          (u = N()),
          (f = w("div")),
          (d = w("span")),
          ($ = k(R)),
          (p = N()),
          (m = w("span")),
          (h = k(A)),
          (x = N()),
          (y = w("span")),
          (M = k(O)),
          (_ = N()),
          (E = w("span")),
          (D = k(C)),
          (S = N()),
          I && I.c(),
          j(l, "class", "text-8xl svelte-dudtlc"),
          j(s, "class", "text-4xl svelte-dudtlc"),
          j(
            n,
            "class",
            "w-full h-1/4 flex flex-col justify-evenly items-center"
          ),
          j(i, "class", "w-0 h-0 m-2 point svelte-dudtlc"),
          j(
            d,
            "class",
            "w-6 h-6 m-1 text-center text-lg font-bold absolute top-1 svelte-dudtlc"
          ),
          T(d, "transform", "rotate(-" + t[2] + "deg)"),
          j(
            m,
            "class",
            "w-6 h-6 m-1 text-center text-lg font-bold absolute left-1 svelte-dudtlc"
          ),
          T(m, "transform", "rotate(-" + t[2] + "deg)"),
          j(
            y,
            "class",
            "w-6 h-6 m-1 text-center text-lg font-bold absolute bottom-1 svelte-dudtlc"
          ),
          T(y, "transform", "rotate(-" + t[2] + "deg)"),
          j(
            E,
            "class",
            "w-6 h-6 m-1 text-center text-lg font-bold absolute right-1 svelte-dudtlc"
          ),
          T(E, "transform", "rotate(-" + t[2] + "deg)"),
          j(
            f,
            "class",
            "flex justify-center items-center h-60 w-60 variant-glass-surface rounded-full relative p-4 transition-all"
          ),
          T(f, "transform", "rotate(" + t[2] + "deg)"),
          j(c, "class", "h-3/4 w-full flex flex-col items-center"),
          j(e, "class", "h-full w-full");
      },
      m(t, b) {
        v(t, e, b),
          g(e, n),
          g(n, l),
          g(l, o),
          g(n, r),
          g(n, s),
          g(e, a),
          g(e, c),
          g(c, i),
          g(c, u),
          g(c, f),
          g(f, d),
          g(d, $),
          g(f, p),
          g(f, m),
          g(m, h),
          g(f, x),
          g(f, y),
          g(y, M),
          g(f, _),
          g(f, E),
          g(E, D),
          g(f, S),
          I && I.m(f, null),
          (L = !0);
      },
      p(t, [e]) {
        (!L || 8 & e) && z(o, t[3]),
          (!L || 8 & e) &&
            R !== (R = 60 * Math.floor(t[3] / 60) + "") &&
            z($, R),
          (!L || 4 & e) && T(d, "transform", "rotate(-" + t[2] + "deg)"),
          (!L || 8 & e) &&
            A !== (A = 60 * Math.floor(t[3] / 60) + 15 + "") &&
            z(h, A),
          (!L || 4 & e) && T(m, "transform", "rotate(-" + t[2] + "deg)"),
          (!L || 8 & e) &&
            O !== (O = 60 * Math.floor(t[3] / 60) + 30 + "") &&
            z(M, O),
          (!L || 4 & e) && T(y, "transform", "rotate(-" + t[2] + "deg)"),
          (!L || 8 & e) &&
            C !== (C = 60 * Math.floor(t[3] / 60) + 45 + "") &&
            z(D, C),
          (!L || 4 & e) && T(E, "transform", "rotate(-" + t[2] + "deg)"),
          t[0] > 0
            ? I
              ? (I.p(t, e), 1 & e && nt(I, 1))
              : ((I = xn(t)), I.c(), nt(I, 1), I.m(f, null))
            : I &&
              (tt(),
              lt(I, 1, 1, () => {
                I = null;
              }),
              et()),
          (!L || 4 & e) && T(f, "transform", "rotate(" + t[2] + "deg)");
      },
      i(t) {
        L || (nt(I), (L = !0));
      },
      o(t) {
        lt(I), (L = !1);
      },
      d(t) {
        t && b(e), I && I.d();
      },
    };
  }
  function Nn(t, e, n) {
    let l,
      o = 0,
      r = 0,
      s = 0,
      a = !1,
      c = !1,
      i = Date.now();
    const u = (t) => {
        "ArrowUp" === t.key
          ? n(0, (s += 300))
          : "ArrowDown" === t.key && s > 0 && n(0, (s -= 60));
      },
      f = () => {
        s > 0 ? n(0, (s -= 1)) : d(!1);
      },
      d = (t) => {
        l && (clearInterval(l), (l = null)),
          t
            ? ((i = Date.now()), (l = setInterval(f, 1e3)), n(1, (c = !0)))
            : (n(0, (s = 0)), n(1, (c = !1)));
      };
    var $;
    O(() => {
      const t = parseInt(localStorage.getItem("seconds")) || 0,
        e = parseInt(localStorage.getItem("startTime"));
      if ((n(1, (c = "true" === localStorage.getItem("play"))), c && e)) {
        const l = Math.floor((Date.now() - e) / 1e3);
        n(0, (s = Math.max(t - l, 0)));
      } else n(0, (s = t));
      document.querySelector(".point").addEventListener("click", () => {
        a
          ? document.removeEventListener("keydown", u)
          : document.addEventListener("keydown", u),
          (a = !a);
      });
    }),
      ($ = () => {
        console.log("destroy"),
          localStorage.setItem("seconds", s.toString()),
          localStorage.setItem("play", c.toString()),
          localStorage.setItem("startTime", i.toString()),
          l && clearInterval(l);
      }),
      A().$$.on_destroy.push($);
    return (
      (t.$$.update = () => {
        1 & t.$$.dirty && n(3, (r = Math.ceil(s / 60))),
          1 & t.$$.dirty && n(2, (o = (s / 3600) * 360)),
          2 & t.$$.dirty && c && d(!0);
      }),
      [
        s,
        c,
        o,
        r,
        d,
        () => {
          d(!c);
        },
      ]
    );
  }
  class Mn extends dt {
    constructor(t) {
      super(), ft(this, t, Nn, kn, s, {}, bn);
    }
  }
  function _n(t) {
    h(
      t,
      "svelte-43ije4",
      ".loader.svelte-43ije4{width:48px;height:48px;border-radius:50%;position:relative;animation:svelte-43ije4-rotate 1s linear infinite}.loader.svelte-43ije4::before,.loader.svelte-43ije4::after{content:'';box-sizing:border-box;position:absolute;inset:0px;border-radius:50%;border:5px solid #fff;animation:svelte-43ije4-prixClipFix 2s linear infinite}.loader.svelte-43ije4::after{inset:8px;transform:rotate3d(90, 90, 0, 180deg);border-color:#ff3d00}@keyframes svelte-43ije4-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes svelte-43ije4-prixClipFix{0%{clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}50%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}75%,100%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}}"
    );
  }
  function jn(e) {
    let n;
    return {
      c() {
        (n = w("span")), j(n, "class", "loader svelte-43ije4");
      },
      m(t, e) {
        v(t, n, e);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && b(n);
      },
    };
  }
  class En extends dt {
    constructor(t) {
      super(), ft(this, t, null, jn, s, {}, _n);
    }
  }
  function zn(t, e, n) {
    const l = t.slice();
    return (l[7] = e[n]), (l[9] = n), l;
  }
  function Dn(e) {
    let n;
    return {
      c() {
        (n = w("h1")),
          (n.textContent = "Today's Mail"),
          j(n, "class", "w-full font-extrabold");
      },
      m(t, e) {
        v(t, n, e);
      },
      i: t,
      o: t,
      d(t) {
        t && b(n);
      },
    };
  }
  function Tn(t) {
    let e, n;
    return (
      (e = new En({})),
      {
        c() {
          at(e.$$.fragment);
        },
        m(t, l) {
          ct(e, t, l), (n = !0);
        },
        i(t) {
          n || (nt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          lt(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          it(e, t);
        },
      }
    );
  }
  function Sn(t) {
    let e,
      n,
      l,
      r,
      s,
      a,
      c,
      i,
      u,
      f,
      d,
      $,
      p,
      m,
      h,
      x,
      y,
      M,
      E = t[7].senderName + "",
      D = (t[1][t[9]] ? t[7].subject : t[7].short) + "";
    function T(...e) {
      return t[4](t[9], ...e);
    }
    function S(...e) {
      return t[5](t[9], ...e);
    }
    function L() {
      return t[6](t[9]);
    }
    return (
      (l = new It({ props: { class: "-z-1" } })),
      (c = new Ee({ props: { size: "20" } })),
      {
        c() {
          (e = w("a")),
            (n = w("button")),
            at(l.$$.fragment),
            (s = N()),
            (a = w("button")),
            at(c.$$.fragment),
            (i = N()),
            (u = w("span")),
            (f = k(E)),
            (d = N()),
            ($ = w("span")),
            (p = k(D)),
            (m = N()),
            j(
              n,
              "class",
              "h-fit w-fit absolute top-2 right-2 z-1 transition-all"
            ),
            j(n, "style", (r = t[1][t[9]] ? "rotate:180deg;" : "")),
            j(a, "class", "absolute bottom-3 right-2 h-fit w-fit"),
            j(u, "class", "h-full w-fit font-bold text-xl -z-1"),
            j($, "class", "w-fit h-full -z-1"),
            j(e, "href", (h = t[7].link)),
            j(e, "target", "_blank"),
            j(
              e,
              "class",
              "h-fit w-full p-2 text-2xl rounded-md mt-2 variant-glass-surface flex flex-col relative transition-all duration-75"
            );
        },
        m(t, o) {
          v(t, e, o),
            g(e, n),
            ct(l, n, null),
            g(e, s),
            g(e, a),
            ct(c, a, null),
            g(e, i),
            g(e, u),
            g(u, f),
            g(e, d),
            g(e, $),
            g($, p),
            g(e, m),
            (x = !0),
            y ||
              ((M = [_(n, "click", T), _(a, "click", S), _(e, "click", L)]),
              (y = !0));
        },
        p(l, o) {
          (t = l),
            (!x || (2 & o && r !== (r = t[1][t[9]] ? "rotate:180deg;" : ""))) &&
              j(n, "style", r),
            (!x || 1 & o) && E !== (E = t[7].senderName + "") && z(f, E),
            (!x || 3 & o) &&
              D !== (D = (t[1][t[9]] ? t[7].subject : t[7].short) + "") &&
              z(p, D),
            (!x || (1 & o && h !== (h = t[7].link))) && j(e, "href", h);
        },
        i(t) {
          x || (nt(l.$$.fragment, t), nt(c.$$.fragment, t), (x = !0));
        },
        o(t) {
          lt(l.$$.fragment, t), lt(c.$$.fragment, t), (x = !1);
        },
        d(t) {
          t && b(e), it(l), it(c), (y = !1), o(M);
        },
      }
    );
  }
  function Ln(t) {
    let e, n, l, o, r, s;
    const a = [Tn, Dn],
      c = [];
    function i(t, e) {
      return 0 === t[0].length ? 0 : 1;
    }
    (n = i(t)), (l = c[n] = a[n](t));
    let u = ot(t[0]),
      f = [];
    for (let $ = 0; $ < u.length; $ += 1) f[$] = Sn(zn(t, u, $));
    const d = (t) =>
      lt(f[t], 1, 1, () => {
        f[t] = null;
      });
    return {
      c() {
        (e = w("div")), l.c(), (o = N());
        for (let t = 0; t < f.length; t += 1) f[t].c();
        j(
          e,
          "class",
          (r =
            "h-full w-full p-2 transition-all duration-200 overflow-y-scroll relative " +
            (0 == t[0].length ? "flex items-center justify-center" : ""))
        );
      },
      m(t, l) {
        v(t, e, l), c[n].m(e, null), g(e, o);
        for (let n = 0; n < f.length; n += 1) f[n] && f[n].m(e, null);
        s = !0;
      },
      p(t, [$]) {
        let p = n;
        if (
          ((n = i(t)),
          n !== p &&
            (tt(),
            lt(c[p], 1, 1, () => {
              c[p] = null;
            }),
            et(),
            (l = c[n]),
            l || ((l = c[n] = a[n](t)), l.c()),
            nt(l, 1),
            l.m(e, o)),
          15 & $)
        ) {
          let n;
          for (u = ot(t[0]), n = 0; n < u.length; n += 1) {
            const l = zn(t, u, n);
            f[n]
              ? (f[n].p(l, $), nt(f[n], 1))
              : ((f[n] = Sn(l)), f[n].c(), nt(f[n], 1), f[n].m(e, null));
          }
          for (tt(), n = u.length; n < f.length; n += 1) d(n);
          et();
        }
        (!s ||
          (1 & $ &&
            r !==
              (r =
                "h-full w-full p-2 transition-all duration-200 overflow-y-scroll relative " +
                (0 == t[0].length
                  ? "flex items-center justify-center"
                  : "")))) &&
          j(e, "class", r);
      },
      i(t) {
        if (!s) {
          nt(l);
          for (let t = 0; t < u.length; t += 1) nt(f[t]);
          s = !0;
        }
      },
      o(t) {
        lt(l), (f = f.filter(Boolean));
        for (let e = 0; e < f.length; e += 1) lt(f[e]);
        s = !1;
      },
      d(t) {
        t && b(e), c[n].d(), x(f, t);
      },
    };
  }
  function Rn(t, e, n) {
    let l = [],
      o = [];
    const r = (t) => {
        n(1, (o[t] = !o[t]), o);
      },
      s = async (t, e) => {
        t.preventDefault(), t.stopPropagation();
        const o = await fetch(
          `http://localhost:9090/api/v1/widgets/markAsRead/${l[e].id}`,
          { method: "POST", credentials: "include" }
        );
        (await o.json()).success &&
          (n(0, (l = l.filter((t, n) => n !== e))),
          0 == l.length &&
            n(
              0,
              (l = [
                {
                  senderName: "No Mail",
                  subject: "No Mail",
                  short: "No Mail",
                  link: "#",
                },
              ])
            ));
      };
    O(async () => {
      const t = await fetch("http://localhost:9090/api/v1/widgets/allMails/", {
          method: "GET",
          credentials: "include",
        }),
        e = await t.json();
      e.success &&
        (n(0, (l = e.mails)),
        0 == l.length &&
          n(
            0,
            (l = [
              {
                senderName: "No Mail",
                subject: "No Mail",
                short: "No Mail",
                link: "#",
              },
            ])
          ),
        n(1, (o = new Array(l.length).fill(!1))));
    });
    return [
      l,
      o,
      r,
      s,
      (t, e) => {
        e.stopPropagation(), e.preventDefault(), r(t);
      },
      (t, e) => {
        s(e, t);
      },
      (t) => {
        n(0, (l = l.filter((e, n) => n !== t)));
      },
    ];
  }
  class An extends dt {
    constructor(t) {
      super(), ft(this, t, Rn, Ln, s, {});
    }
  }
  const On = Ce(!1);
  function Cn(e) {
    let n, l, o, r, s;
    return (
      (l = new ge({})),
      {
        c() {
          (n = w("button")), at(l.$$.fragment), j(n, "aria-label", "logout");
        },
        m(t, a) {
          v(t, n, a),
            ct(l, n, null),
            (o = !0),
            r || ((s = _(n, "click", e[1])), (r = !0));
        },
        p: t,
        i(t) {
          o || (nt(l.$$.fragment, t), (o = !0));
        },
        o(t) {
          lt(l.$$.fragment, t), (o = !1);
        },
        d(t) {
          t && b(n), it(l), (r = !1), s();
        },
      }
    );
  }
  function In(t) {
    let e,
      n,
      l = !0 === t[0] && Cn(t);
    return {
      c() {
        l && l.c(), (e = M());
      },
      m(t, o) {
        l && l.m(t, o), v(t, e, o), (n = !0);
      },
      p(t, [n]) {
        !0 === t[0]
          ? l
            ? (l.p(t, n), 1 & n && nt(l, 1))
            : ((l = Cn(t)), l.c(), nt(l, 1), l.m(e.parentNode, e))
          : l &&
            (tt(),
            lt(l, 1, 1, () => {
              l = null;
            }),
            et());
      },
      i(t) {
        n || (nt(l), (n = !0));
      },
      o(t) {
        lt(l), (n = !1);
      },
      d(t) {
        t && b(e), l && l.d(t);
      },
    };
  }
  function Un(t, e, n) {
    let l;
    var o, r;
    (o = On), (r = (t) => n(0, (l = t))), t.$$.on_destroy.push(a(o, r));
    return [
      l,
      async () => {
        try {
          const t = await fetch("http://localhost:9090/api/v1/auth/logout", {
            method: "GET",
            credentials: "include",
          });
          (await t.json()).success && On.set(!1);
        } catch (t) {
          console.error(t);
        }
      },
    ];
  }
  class Yn extends dt {
    constructor(t) {
      super(), ft(this, t, Un, In, s, {});
    }
  }
  function Pn(t) {
    let e, n, l, o, r, s, a, c, i, u, f, d, $, p, m;
    var h = t[3];
    h && (o = S(h, {})), (u = new Yn({}));
    const x = [Bn, Fn],
      y = [];
    function M(t, e) {
      return !1 === t[2] ? 0 : !0 === t[2] ? 1 : -1;
    }
    return (
      ~($ = M(t)) && (p = y[$] = x[$](t)),
      {
        c() {
          (e = w("div")),
            (n = w("div")),
            (l = w("span")),
            o && at(o.$$.fragment),
            (r = N()),
            (s = w("span")),
            (a = k(t[1])),
            (c = N()),
            (i = w("span")),
            at(u.$$.fragment),
            (f = N()),
            (d = w("div")),
            p && p.c(),
            j(s, "class", "font-bold ml-1"),
            j(i, "class", "ml-auto mr-1"),
            j(n, "class", "variant-ghost-surface h-8 flex p-1"),
            j(
              d,
              "class",
              "variant-ghost-surface h-full flex justify-center items-center"
            ),
            j(
              e,
              "class",
              "variant-ghost-surface rounded-r-lg w-96 overflow-hidden"
            );
        },
        m(t, p) {
          v(t, e, p),
            g(e, n),
            g(n, l),
            o && ct(o, l, null),
            g(n, r),
            g(n, s),
            g(s, a),
            g(n, c),
            g(n, i),
            ct(u, i, null),
            g(e, f),
            g(e, d),
            ~$ && y[$].m(d, null),
            (m = !0);
        },
        p(t, e) {
          if (8 & e && h !== (h = t[3])) {
            if (o) {
              tt();
              const t = o;
              lt(t.$$.fragment, 1, 0, () => {
                it(t, 1);
              }),
                et();
            }
            h
              ? ((o = S(h, {})),
                at(o.$$.fragment),
                nt(o.$$.fragment, 1),
                ct(o, l, null))
              : (o = null);
          }
          (!m || 2 & e) && z(a, t[1]);
          let n = $;
          ($ = M(t)),
            $ === n
              ? ~$ && y[$].p(t, e)
              : (p &&
                  (tt(),
                  lt(y[n], 1, 1, () => {
                    y[n] = null;
                  }),
                  et()),
                ~$
                  ? ((p = y[$]),
                    p ? p.p(t, e) : ((p = y[$] = x[$](t)), p.c()),
                    nt(p, 1),
                    p.m(d, null))
                  : (p = null));
        },
        i(t) {
          m ||
            (o && nt(o.$$.fragment, t), nt(u.$$.fragment, t), nt(p), (m = !0));
        },
        o(t) {
          o && lt(o.$$.fragment, t), lt(u.$$.fragment, t), lt(p), (m = !1);
        },
        d(t) {
          t && b(e), o && it(o), it(u), ~$ && y[$].d();
        },
      }
    );
  }
  function Fn(t) {
    let e, n, l;
    var o = t[4];
    return (
      o && (e = S(o, {})),
      {
        c() {
          e && at(e.$$.fragment), (n = M());
        },
        m(t, o) {
          e && ct(e, t, o), v(t, n, o), (l = !0);
        },
        p(t, l) {
          if (16 & l && o !== (o = t[4])) {
            if (e) {
              tt();
              const t = e;
              lt(t.$$.fragment, 1, 0, () => {
                it(t, 1);
              }),
                et();
            }
            o
              ? ((e = S(o, {})),
                at(e.$$.fragment),
                nt(e.$$.fragment, 1),
                ct(e, n.parentNode, n))
              : (e = null);
          }
        },
        i(t) {
          l || (e && nt(e.$$.fragment, t), (l = !0));
        },
        o(t) {
          e && lt(e.$$.fragment, t), (l = !1);
        },
        d(t) {
          t && b(n), e && it(e, t);
        },
      }
    );
  }
  function Bn(e) {
    let n, l;
    return (
      (n = new mt({})),
      {
        c() {
          at(n.$$.fragment);
        },
        m(t, e) {
          ct(n, t, e), (l = !0);
        },
        p: t,
        i(t) {
          l || (nt(n.$$.fragment, t), (l = !0));
        },
        o(t) {
          lt(n.$$.fragment, t), (l = !1);
        },
        d(t) {
          it(n, t);
        },
      }
    );
  }
  function Qn(t) {
    let e,
      n,
      l = !0 === t[0] && Pn(t);
    return {
      c() {
        l && l.c(), (e = M());
      },
      m(t, o) {
        l && l.m(t, o), v(t, e, o), (n = !0);
      },
      p(t, [n]) {
        !0 === t[0]
          ? l
            ? (l.p(t, n), 1 & n && nt(l, 1))
            : ((l = Pn(t)), l.c(), nt(l, 1), l.m(e.parentNode, e))
          : l &&
            (tt(),
            lt(l, 1, 1, () => {
              l = null;
            }),
            et());
      },
      i(t) {
        n || (nt(l), (n = !0));
      },
      o(t) {
        lt(l), (n = !1);
      },
      d(t) {
        t && b(e), l && l.d(t);
      },
    };
  }
  function Hn(t, e, n) {
    let l,
      o,
      { pannelNo: r } = e,
      { selected: s } = e,
      { title: a } = e,
      { isAuthenticated: c } = e;
    return (
      (t.$$set = (t) => {
        "pannelNo" in t && n(5, (r = t.pannelNo)),
          "selected" in t && n(0, (s = t.selected)),
          "title" in t && n(1, (a = t.title)),
          "isAuthenticated" in t && n(2, (c = t.isAuthenticated));
      }),
      (t.$$.update = () => {
        if (32 & t.$$.dirty)
          switch (r) {
            case 1:
            default:
              n(3, (l = _t)), n(4, (o = Ae));
              break;
            case 2:
              n(3, (l = Rt)), n(4, (o = vn));
              break;
            case 3:
              n(3, (l = Vt)), n(4, (o = Mn));
              break;
            case 4:
              n(3, (l = te)), n(4, (o = An));
          }
      }),
      [s, a, c, l, o, r]
    );
  }
  class qn extends dt {
    constructor(t) {
      super(),
        ft(this, t, Hn, Qn, s, {
          pannelNo: 5,
          selected: 0,
          title: 1,
          isAuthenticated: 2,
        });
    }
  }
  function Gn(t) {
    h(
      t,
      "svelte-5vm52z",
      ".variant-glass-surface.svelte-5vm52z.svelte-5vm52z{transform:translateX(-120%);transition:transform 0.3s ease-in-out}.parent.svelte-5vm52z:hover .variant-glass-surface.svelte-5vm52z{transform:translateX(0)}"
    );
  }
  function Wn(t) {
    let e, n, l, r, s, a, c, i, u, f, d, $, p, h, x, y, k, M;
    return (
      (s = new _t({ props: { size: 35 } })),
      (i = new Rt({ props: { size: 40 } })),
      (d = new Vt({ props: { size: 40 } })),
      (h = new te({ props: { size: 40 } })),
      {
        c() {
          (e = w("div")),
            (n = w("div")),
            (l = w("div")),
            (r = w("button")),
            at(s.$$.fragment),
            (a = N()),
            (c = w("button")),
            at(i.$$.fragment),
            (u = N()),
            (f = w("button")),
            at(d.$$.fragment),
            ($ = N()),
            (p = w("button")),
            at(h.$$.fragment),
            j(r, "aria-label", "sidebar-icon"),
            j(r, "id", "1"),
            j(r, "class", "flex justify-center p-1 mt-2"),
            j(r, "title", "Google"),
            j(c, "aria-label", "sidebar-icon"),
            j(c, "id", "2"),
            j(c, "class", "flex justify-center p-1 m-2"),
            j(c, "title", "Calendar"),
            j(f, "aria-label", "sidebar-icon"),
            j(f, "id", "3"),
            j(f, "class", "flex justify-center p-1 m-2"),
            j(f, "title", "Timer"),
            j(p, "aria-label", "sidebar-icon"),
            j(p, "id", "4"),
            j(p, "class", "flex justify-center p-1 m-2"),
            j(p, "title", "Mail"),
            j(l, "class", "flex flex-col gap-2"),
            j(
              n,
              "class",
              (x =
                m(
                  `h-full w-14 flex flex-col justify-between variant-${
                    1 == t[0] ? "ghost" : "glass"
                  }-surface ${1 == t[0] ? "rounded-l-md" : "rounded-md"} `
                ) + " svelte-5vm52z")
            ),
            j(e, "class", "parent svelte-5vm52z");
        },
        m(o, m) {
          v(o, e, m),
            g(e, n),
            g(n, l),
            g(l, r),
            ct(s, r, null),
            g(l, a),
            g(l, c),
            ct(i, c, null),
            g(l, u),
            g(l, f),
            ct(d, f, null),
            g(l, $),
            g(l, p),
            ct(h, p, null),
            (y = !0),
            k ||
              ((M = [
                _(r, "click", t[3]),
                _(c, "click", t[4]),
                _(f, "click", t[5]),
                _(p, "click", t[6]),
              ]),
              (k = !0));
        },
        p(t, [e]) {
          (!y ||
            (1 & e &&
              x !==
                (x =
                  m(
                    `h-full w-14 flex flex-col justify-between variant-${
                      1 == t[0] ? "ghost" : "glass"
                    }-surface ${1 == t[0] ? "rounded-l-md" : "rounded-md"} `
                  ) + " svelte-5vm52z"))) &&
            j(n, "class", x);
        },
        i(t) {
          y ||
            (nt(s.$$.fragment, t),
            nt(i.$$.fragment, t),
            nt(d.$$.fragment, t),
            nt(h.$$.fragment, t),
            (y = !0));
        },
        o(t) {
          lt(s.$$.fragment, t),
            lt(i.$$.fragment, t),
            lt(d.$$.fragment, t),
            lt(h.$$.fragment, t),
            (y = !1);
        },
        d(t) {
          t && b(e), it(s), it(i), it(d), it(h), (k = !1), o(M);
        },
      }
    );
  }
  function Jn(t, e, n) {
    const l = C();
    let { selected: o } = e,
      { pannelNo: r } = e;
    const s = (t, e) => {
      n(0, (o = t != r || !o)),
        l("clicked", { title: e, selected: o, pannel: t });
    };
    return (
      (t.$$set = (t) => {
        "selected" in t && n(0, (o = t.selected)),
          "pannelNo" in t && n(2, (r = t.pannelNo));
      }),
      [
        o,
        s,
        r,
        (t) => {
          s(+t.currentTarget.id, t.currentTarget.title);
        },
        (t) => {
          s(+t.currentTarget.id, t.currentTarget.title);
        },
        (t) => {
          s(+t.currentTarget.id, t.currentTarget.title);
        },
        (t) => {
          s(+t.currentTarget.id, t.currentTarget.title);
        },
      ]
    );
  }
  class Vn extends dt {
    constructor(t) {
      super(), ft(this, t, Jn, Wn, s, { selected: 0, pannelNo: 2 }, Gn);
    }
  }
  !(function () {
    if (window.zenflowSidebarInjected) return;
    window.zenflowSidebarInjected = !0;
    const t = document.createElement("div");
    (t.id = "zenflow-extension-root"),
      (t.style.cssText =
        "\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    z-index: 999999;\n    background-color: transparent;\n    display: flex;\n  "),
      document.body.appendChild(t);
    const e = new Vn({
      target: t,
      props: {
        onPanelSelect: (e) => {
          n ? n.$set(e) : (n = new qn({ target: t, props: e }));
        },
      },
    });
    let n = null;
    "undefined" != typeof window &&
      (window.zenflowSidebar = {
        sidebar: e,
        panel: n,
        destroy: () => {
          e.$destroy(),
            n && n.$destroy(),
            t.remove(),
            (window.zenflowSidebarInjected = !1);
        },
      });
  })();
})();
