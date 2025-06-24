(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerpolicy && (s.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
function no(e, t) {
  const n = Object.create(null),
    r = e.split(",");
  for (let o = 0; o < r.length; o++) n[r[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
function Mn(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        o = Ce(r) ? va(r) : Mn(r);
      if (o) for (const s in o) t[s] = o[s];
    }
    return t;
  } else {
    if (Ce(e)) return e;
    if (me(e)) return e;
  }
}
const ha = /;(?![^(]*\))/g,
  ma = /:([^]+)/,
  ga = /\/\*.*?\*\//gs;
function va(e) {
  const t = {};
  return (
    e
      .replace(ga, "")
      .split(ha)
      .forEach((n) => {
        if (n) {
          const r = n.split(ma);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function ro(e) {
  let t = "";
  if (Ce(e)) t = e;
  else if (K(e))
    for (let n = 0; n < e.length; n++) {
      const r = ro(e[n]);
      r && (t += r + " ");
    }
  else if (me(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const _a =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  ba = no(_a);
function Ks(e) {
  return !!e || e === "";
}
const wt = (e) =>
    Ce(e)
      ? e
      : e == null
      ? ""
      : K(e) || (me(e) && (e.toString === Ys || !X(e.toString)))
      ? JSON.stringify(e, Ws, 2)
      : String(e),
  Ws = (e, t) =>
    t && t.__v_isRef
      ? Ws(e, t.value)
      : Wt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, o]) => ((n[`${r} =>`] = o), n),
            {}
          ),
        }
      : Vs(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : me(t) && !K(t) && !Js(t)
      ? String(t)
      : t,
  he = {},
  Kt = [],
  Je = () => {},
  ya = () => !1,
  wa = /^on[^a-z]/,
  ir = (e) => wa.test(e),
  oo = (e) => e.startsWith("onUpdate:"),
  Te = Object.assign,
  so = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  xa = Object.prototype.hasOwnProperty,
  se = (e, t) => xa.call(e, t),
  K = Array.isArray,
  Wt = (e) => ar(e) === "[object Map]",
  Vs = (e) => ar(e) === "[object Set]",
  X = (e) => typeof e == "function",
  Ce = (e) => typeof e == "string",
  io = (e) => typeof e == "symbol",
  me = (e) => e !== null && typeof e == "object",
  Gs = (e) => me(e) && X(e.then) && X(e.catch),
  Ys = Object.prototype.toString,
  ar = (e) => Ys.call(e),
  Ea = (e) => ar(e).slice(8, -1),
  Js = (e) => ar(e) === "[object Object]",
  ao = (e) =>
    Ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Vn = no(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  lr = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Ca = /-(\w)/g,
  it = lr((e) => e.replace(Ca, (t, n) => (n ? n.toUpperCase() : ""))),
  Oa = /\B([A-Z])/g,
  Ht = lr((e) => e.replace(Oa, "-$1").toLowerCase()),
  cr = lr((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  xr = lr((e) => (e ? `on${cr(e)}` : "")),
  xn = (e, t) => !Object.is(e, t),
  Er = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Zn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Pa = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Sa = (e) => {
    const t = Ce(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let Fo;
const $a = () =>
  Fo ||
  (Fo =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
let Ve;
class Aa {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ve),
      !t && Ve && (this.index = (Ve.scopes || (Ve.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ve;
      try {
        return (Ve = this), t();
      } finally {
        Ve = n;
      }
    }
  }
  on() {
    Ve = this;
  }
  off() {
    Ve = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Ta(e, t = Ve) {
  t && t.active && t.effects.push(e);
}
function Ra() {
  return Ve;
}
const lo = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Qs = (e) => (e.w & Ot) > 0,
  Xs = (e) => (e.n & Ot) > 0,
  Ma = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Ot;
  },
  Ia = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const o = t[r];
        Qs(o) && !Xs(o) ? o.delete(e) : (t[n++] = o),
          (o.w &= ~Ot),
          (o.n &= ~Ot);
      }
      t.length = n;
    }
  },
  er = new WeakMap();
let mn = 0,
  Ot = 1;
const Nr = 30;
let Ge;
const Bt = Symbol(""),
  jr = Symbol("");
class co {
  constructor(t, n = null, r) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Ta(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Ge,
      n = xt;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Ge),
        (Ge = this),
        (xt = !0),
        (Ot = 1 << ++mn),
        mn <= Nr ? Ma(this) : zo(this),
        this.fn()
      );
    } finally {
      mn <= Nr && Ia(this),
        (Ot = 1 << --mn),
        (Ge = this.parent),
        (xt = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Ge === this
      ? (this.deferStop = !0)
      : this.active &&
        (zo(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function zo(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let xt = !0;
const Zs = [];
function rn() {
  Zs.push(xt), (xt = !1);
}
function on() {
  const e = Zs.pop();
  xt = e === void 0 ? !0 : e;
}
function Ne(e, t, n) {
  if (xt && Ge) {
    let r = er.get(e);
    r || er.set(e, (r = new Map()));
    let o = r.get(n);
    o || r.set(n, (o = lo())), ei(o);
  }
}
function ei(e, t) {
  let n = !1;
  mn <= Nr ? Xs(e) || ((e.n |= Ot), (n = !Qs(e))) : (n = !e.has(Ge)),
    n && (e.add(Ge), Ge.deps.push(e));
}
function dt(e, t, n, r, o, s) {
  const i = er.get(e);
  if (!i) return;
  let a = [];
  if (t === "clear") a = [...i.values()];
  else if (n === "length" && K(e)) {
    const l = Number(r);
    i.forEach((u, c) => {
      (c === "length" || c >= l) && a.push(u);
    });
  } else
    switch ((n !== void 0 && a.push(i.get(n)), t)) {
      case "add":
        K(e)
          ? ao(n) && a.push(i.get("length"))
          : (a.push(i.get(Bt)), Wt(e) && a.push(i.get(jr)));
        break;
      case "delete":
        K(e) || (a.push(i.get(Bt)), Wt(e) && a.push(i.get(jr)));
        break;
      case "set":
        Wt(e) && a.push(i.get(Bt));
        break;
    }
  if (a.length === 1) a[0] && Lr(a[0]);
  else {
    const l = [];
    for (const u of a) u && l.push(...u);
    Lr(lo(l));
  }
}
function Lr(e, t) {
  const n = K(e) ? e : [...e];
  for (const r of n) r.computed && qo(r);
  for (const r of n) r.computed || qo(r);
}
function qo(e, t) {
  (e !== Ge || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
function ka(e, t) {
  var n;
  return (n = er.get(e)) === null || n === void 0 ? void 0 : n.get(t);
}
const Na = no("__proto__,__v_isRef,__isVue"),
  ti = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(io)
  ),
  ja = uo(),
  La = uo(!1, !0),
  Ba = uo(!0),
  Uo = Da();
function Da() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = ie(this);
        for (let s = 0, i = this.length; s < i; s++) Ne(r, "get", s + "");
        const o = r[t](...n);
        return o === -1 || o === !1 ? r[t](...n.map(ie)) : o;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        rn();
        const r = ie(this)[t].apply(this, n);
        return on(), r;
      };
    }),
    e
  );
}
function Ha(e) {
  const t = ie(this);
  return Ne(t, "has", e), t.hasOwnProperty(e);
}
function uo(e = !1, t = !1) {
  return function (r, o, s) {
    if (o === "__v_isReactive") return !e;
    if (o === "__v_isReadonly") return e;
    if (o === "__v_isShallow") return t;
    if (o === "__v_raw" && s === (e ? (t ? nl : ii) : t ? si : oi).get(r))
      return r;
    const i = K(r);
    if (!e) {
      if (i && se(Uo, o)) return Reflect.get(Uo, o, s);
      if (o === "hasOwnProperty") return Ha;
    }
    const a = Reflect.get(r, o, s);
    return (io(o) ? ti.has(o) : Na(o)) || (e || Ne(r, "get", o), t)
      ? a
      : Se(a)
      ? i && ao(o)
        ? a
        : a.value
      : me(a)
      ? e
        ? ai(a)
        : sn(a)
      : a;
  };
}
const Fa = ni(),
  za = ni(!0);
function ni(e = !1) {
  return function (n, r, o, s) {
    let i = n[r];
    if (Yt(i) && Se(i) && !Se(o)) return !1;
    if (
      !e &&
      (!tr(o) && !Yt(o) && ((i = ie(i)), (o = ie(o))), !K(n) && Se(i) && !Se(o))
    )
      return (i.value = o), !0;
    const a = K(n) && ao(r) ? Number(r) < n.length : se(n, r),
      l = Reflect.set(n, r, o, s);
    return (
      n === ie(s) && (a ? xn(o, i) && dt(n, "set", r, o) : dt(n, "add", r, o)),
      l
    );
  };
}
function qa(e, t) {
  const n = se(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && dt(e, "delete", t, void 0), r;
}
function Ua(e, t) {
  const n = Reflect.has(e, t);
  return (!io(t) || !ti.has(t)) && Ne(e, "has", t), n;
}
function Ka(e) {
  return Ne(e, "iterate", K(e) ? "length" : Bt), Reflect.ownKeys(e);
}
const ri = { get: ja, set: Fa, deleteProperty: qa, has: Ua, ownKeys: Ka },
  Wa = {
    get: Ba,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  Va = Te({}, ri, { get: La, set: za }),
  fo = (e) => e,
  ur = (e) => Reflect.getPrototypeOf(e);
function Dn(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = ie(e),
    s = ie(t);
  n || (t !== s && Ne(o, "get", t), Ne(o, "get", s));
  const { has: i } = ur(o),
    a = r ? fo : n ? mo : En;
  if (i.call(o, t)) return a(e.get(t));
  if (i.call(o, s)) return a(e.get(s));
  e !== o && e.get(t);
}
function Hn(e, t = !1) {
  const n = this.__v_raw,
    r = ie(n),
    o = ie(e);
  return (
    t || (e !== o && Ne(r, "has", e), Ne(r, "has", o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
  );
}
function Fn(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Ne(ie(e), "iterate", Bt), Reflect.get(e, "size", e)
  );
}
function Ko(e) {
  e = ie(e);
  const t = ie(this);
  return ur(t).has.call(t, e) || (t.add(e), dt(t, "add", e, e)), this;
}
function Wo(e, t) {
  t = ie(t);
  const n = ie(this),
    { has: r, get: o } = ur(n);
  let s = r.call(n, e);
  s || ((e = ie(e)), (s = r.call(n, e)));
  const i = o.call(n, e);
  return (
    n.set(e, t), s ? xn(t, i) && dt(n, "set", e, t) : dt(n, "add", e, t), this
  );
}
function Vo(e) {
  const t = ie(this),
    { has: n, get: r } = ur(t);
  let o = n.call(t, e);
  o || ((e = ie(e)), (o = n.call(t, e))), r && r.call(t, e);
  const s = t.delete(e);
  return o && dt(t, "delete", e, void 0), s;
}
function Go() {
  const e = ie(this),
    t = e.size !== 0,
    n = e.clear();
  return t && dt(e, "clear", void 0, void 0), n;
}
function zn(e, t) {
  return function (r, o) {
    const s = this,
      i = s.__v_raw,
      a = ie(i),
      l = t ? fo : e ? mo : En;
    return (
      !e && Ne(a, "iterate", Bt), i.forEach((u, c) => r.call(o, l(u), l(c), s))
    );
  };
}
function qn(e, t, n) {
  return function (...r) {
    const o = this.__v_raw,
      s = ie(o),
      i = Wt(s),
      a = e === "entries" || (e === Symbol.iterator && i),
      l = e === "keys" && i,
      u = o[e](...r),
      c = n ? fo : t ? mo : En;
    return (
      !t && Ne(s, "iterate", l ? jr : Bt),
      {
        next() {
          const { value: p, done: h } = u.next();
          return h
            ? { value: p, done: h }
            : { value: a ? [c(p[0]), c(p[1])] : c(p), done: h };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function mt(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function Ga() {
  const e = {
      get(s) {
        return Dn(this, s);
      },
      get size() {
        return Fn(this);
      },
      has: Hn,
      add: Ko,
      set: Wo,
      delete: Vo,
      clear: Go,
      forEach: zn(!1, !1),
    },
    t = {
      get(s) {
        return Dn(this, s, !1, !0);
      },
      get size() {
        return Fn(this);
      },
      has: Hn,
      add: Ko,
      set: Wo,
      delete: Vo,
      clear: Go,
      forEach: zn(!1, !0),
    },
    n = {
      get(s) {
        return Dn(this, s, !0);
      },
      get size() {
        return Fn(this, !0);
      },
      has(s) {
        return Hn.call(this, s, !0);
      },
      add: mt("add"),
      set: mt("set"),
      delete: mt("delete"),
      clear: mt("clear"),
      forEach: zn(!0, !1),
    },
    r = {
      get(s) {
        return Dn(this, s, !0, !0);
      },
      get size() {
        return Fn(this, !0);
      },
      has(s) {
        return Hn.call(this, s, !0);
      },
      add: mt("add"),
      set: mt("set"),
      delete: mt("delete"),
      clear: mt("clear"),
      forEach: zn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      (e[s] = qn(s, !1, !1)),
        (n[s] = qn(s, !0, !1)),
        (t[s] = qn(s, !1, !0)),
        (r[s] = qn(s, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [Ya, Ja, Qa, Xa] = Ga();
function po(e, t) {
  const n = t ? (e ? Xa : Qa) : e ? Ja : Ya;
  return (r, o, s) =>
    o === "__v_isReactive"
      ? !e
      : o === "__v_isReadonly"
      ? e
      : o === "__v_raw"
      ? r
      : Reflect.get(se(n, o) && o in r ? n : r, o, s);
}
const Za = { get: po(!1, !1) },
  el = { get: po(!1, !0) },
  tl = { get: po(!0, !1) },
  oi = new WeakMap(),
  si = new WeakMap(),
  ii = new WeakMap(),
  nl = new WeakMap();
function rl(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ol(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : rl(Ea(e));
}
function sn(e) {
  return Yt(e) ? e : ho(e, !1, ri, Za, oi);
}
function sl(e) {
  return ho(e, !1, Va, el, si);
}
function ai(e) {
  return ho(e, !0, Wa, tl, ii);
}
function ho(e, t, n, r, o) {
  if (!me(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const s = o.get(e);
  if (s) return s;
  const i = ol(e);
  if (i === 0) return e;
  const a = new Proxy(e, i === 2 ? r : n);
  return o.set(e, a), a;
}
function Vt(e) {
  return Yt(e) ? Vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Yt(e) {
  return !!(e && e.__v_isReadonly);
}
function tr(e) {
  return !!(e && e.__v_isShallow);
}
function li(e) {
  return Vt(e) || Yt(e);
}
function ie(e) {
  const t = e && e.__v_raw;
  return t ? ie(t) : e;
}
function ci(e) {
  return Zn(e, "__v_skip", !0), e;
}
const En = (e) => (me(e) ? sn(e) : e),
  mo = (e) => (me(e) ? ai(e) : e);
function ui(e) {
  xt && Ge && ((e = ie(e)), ei(e.dep || (e.dep = lo())));
}
function fi(e, t) {
  e = ie(e);
  const n = e.dep;
  n && Lr(n);
}
function Se(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ut(e) {
  return di(e, !1);
}
function il(e) {
  return di(e, !0);
}
function di(e, t) {
  return Se(e) ? e : new al(e, t);
}
class al {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : ie(t)),
      (this._value = n ? t : En(t));
  }
  get value() {
    return ui(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || tr(t) || Yt(t);
    (t = n ? t : ie(t)),
      xn(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : En(t)), fi(this));
  }
}
function Le(e) {
  return Se(e) ? e.value : e;
}
const ll = {
  get: (e, t, n) => Le(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return Se(o) && !Se(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function pi(e) {
  return Vt(e) ? e : new Proxy(e, ll);
}
function hi(e) {
  const t = K(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = ul(e, n);
  return t;
}
class cl {
  constructor(t, n, r) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return ka(ie(this._object), this._key);
  }
}
function ul(e, t, n) {
  const r = e[t];
  return Se(r) ? r : new cl(e, t, n);
}
var mi;
class fl {
  constructor(t, n, r, o) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[mi] = !1),
      (this._dirty = !0),
      (this.effect = new co(t, () => {
        this._dirty || ((this._dirty = !0), fi(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = ie(this);
    return (
      ui(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
mi = "__v_isReadonly";
function dl(e, t, n = !1) {
  let r, o;
  const s = X(e);
  return (
    s ? ((r = e), (o = Je)) : ((r = e.get), (o = e.set)),
    new fl(r, o, s || !o, n)
  );
}
function Et(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (s) {
    fr(s, t, n);
  }
  return o;
}
function He(e, t, n, r) {
  if (X(e)) {
    const s = Et(e, t, n, r);
    return (
      s &&
        Gs(s) &&
        s.catch((i) => {
          fr(i, t, n);
        }),
      s
    );
  }
  const o = [];
  for (let s = 0; s < e.length; s++) o.push(He(e[s], t, n, r));
  return o;
}
function fr(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy,
      a = n;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let c = 0; c < u.length; c++) if (u[c](e, i, a) === !1) return;
      }
      s = s.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Et(l, null, 10, [e, i, a]);
      return;
    }
  }
  pl(e, n, o, r);
}
function pl(e, t, n, r = !0) {
  console.error(e);
}
let Cn = !1,
  Br = !1;
const Me = [];
let ot = 0;
const Gt = [];
let ct = null,
  kt = 0;
const gi = Promise.resolve();
let go = null;
function vo(e) {
  const t = go || gi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function hl(e) {
  let t = ot + 1,
    n = Me.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1;
    On(Me[r]) < e ? (t = r + 1) : (n = r);
  }
  return t;
}
function _o(e) {
  (!Me.length || !Me.includes(e, Cn && e.allowRecurse ? ot + 1 : ot)) &&
    (e.id == null ? Me.push(e) : Me.splice(hl(e.id), 0, e), vi());
}
function vi() {
  !Cn && !Br && ((Br = !0), (go = gi.then(bi)));
}
function ml(e) {
  const t = Me.indexOf(e);
  t > ot && Me.splice(t, 1);
}
function gl(e) {
  K(e)
    ? Gt.push(...e)
    : (!ct || !ct.includes(e, e.allowRecurse ? kt + 1 : kt)) && Gt.push(e),
    vi();
}
function Yo(e, t = Cn ? ot + 1 : 0) {
  for (; t < Me.length; t++) {
    const n = Me[t];
    n && n.pre && (Me.splice(t, 1), t--, n());
  }
}
function _i(e) {
  if (Gt.length) {
    const t = [...new Set(Gt)];
    if (((Gt.length = 0), ct)) {
      ct.push(...t);
      return;
    }
    for (ct = t, ct.sort((n, r) => On(n) - On(r)), kt = 0; kt < ct.length; kt++)
      ct[kt]();
    (ct = null), (kt = 0);
  }
}
const On = (e) => (e.id == null ? 1 / 0 : e.id),
  vl = (e, t) => {
    const n = On(e) - On(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function bi(e) {
  (Br = !1), (Cn = !0), Me.sort(vl);
  const t = Je;
  try {
    for (ot = 0; ot < Me.length; ot++) {
      const n = Me[ot];
      n && n.active !== !1 && Et(n, null, 14);
    }
  } finally {
    (ot = 0),
      (Me.length = 0),
      _i(),
      (Cn = !1),
      (go = null),
      (Me.length || Gt.length) && bi();
  }
}
function _l(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || he;
  let o = n;
  const s = t.startsWith("update:"),
    i = s && t.slice(7);
  if (i && i in r) {
    const c = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: p, trim: h } = r[c] || he;
    h && (o = n.map((m) => (Ce(m) ? m.trim() : m))), p && (o = n.map(Pa));
  }
  let a,
    l = r[(a = xr(t))] || r[(a = xr(it(t)))];
  !l && s && (l = r[(a = xr(Ht(t)))]), l && He(l, e, 6, o);
  const u = r[a + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), He(u, e, 6, o);
  }
}
function yi(e, t, n = !1) {
  const r = t.emitsCache,
    o = r.get(e);
  if (o !== void 0) return o;
  const s = e.emits;
  let i = {},
    a = !1;
  if (!X(e)) {
    const l = (u) => {
      const c = yi(u, t, !0);
      c && ((a = !0), Te(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !s && !a
    ? (me(e) && r.set(e, null), null)
    : (K(s) ? s.forEach((l) => (i[l] = null)) : Te(i, s),
      me(e) && r.set(e, i),
      i);
}
function dr(e, t) {
  return !e || !ir(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      se(e, t[0].toLowerCase() + t.slice(1)) || se(e, Ht(t)) || se(e, t));
}
let Ae = null,
  pr = null;
function nr(e) {
  const t = Ae;
  return (Ae = e), (pr = (e && e.type.__scopeId) || null), t;
}
function an(e) {
  pr = e;
}
function ln() {
  pr = null;
}
function _e(e, t = Ae, n) {
  if (!t || e._n) return e;
  const r = (...o) => {
    r._d && as(-1);
    const s = nr(t);
    let i;
    try {
      i = e(...o);
    } finally {
      nr(s), r._d && as(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function Cr(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    props: s,
    propsOptions: [i],
    slots: a,
    attrs: l,
    emit: u,
    render: c,
    renderCache: p,
    data: h,
    setupState: m,
    ctx: w,
    inheritAttrs: b,
  } = e;
  let $, C;
  const M = nr(e);
  try {
    if (n.shapeFlag & 4) {
      const A = o || r;
      ($ = rt(c.call(A, A, p, s, m, h, w))), (C = l);
    } else {
      const A = t;
      ($ = rt(
        A.length > 1 ? A(s, { attrs: l, slots: a, emit: u }) : A(s, null)
      )),
        (C = t.props ? l : bl(l));
    }
  } catch (A) {
    (_n.length = 0), fr(A, e, 1), ($ = q(Fe));
  }
  let S = $;
  if (C && b !== !1) {
    const A = Object.keys(C),
      { shapeFlag: F } = S;
    A.length && F & 7 && (i && A.some(oo) && (C = yl(C, i)), (S = Pt(S, C)));
  }
  return (
    n.dirs && ((S = Pt(S)), (S.dirs = S.dirs ? S.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (S.transition = n.transition),
    ($ = S),
    nr(M),
    $
  );
}
const bl = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || ir(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  yl = (e, t) => {
    const n = {};
    for (const r in e) (!oo(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function wl(e, t, n) {
  const { props: r, children: o, component: s } = e,
    { props: i, children: a, patchFlag: l } = t,
    u = s.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? Jo(r, i, u) : !!i;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let p = 0; p < c.length; p++) {
        const h = c[p];
        if (i[h] !== r[h] && !dr(u, h)) return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i
        ? Jo(r, i, u)
        : !0
      : !!i;
  return !1;
}
function Jo(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !dr(n, s)) return !0;
  }
  return !1;
}
function xl({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const El = (e) => e.__isSuspense;
function Cl(e, t) {
  t && t.pendingBranch
    ? K(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : gl(e);
}
function Gn(e, t) {
  if (we) {
    let n = we.provides;
    const r = we.parent && we.parent.provides;
    r === n && (n = we.provides = Object.create(r)), (n[e] = t);
  }
}
function ut(e, t, n = !1) {
  const r = we || Ae;
  if (r) {
    const o =
      r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && X(t) ? t.call(r.proxy) : t;
  }
}
function Qo(e, t) {
  return hr(e, null, t);
}
function Ol(e, t) {
  return hr(e, null, { flush: "post" });
}
const Un = {};
function ft(e, t, n) {
  return hr(e, t, n);
}
function hr(
  e,
  t,
  { immediate: n, deep: r, flush: o, onTrack: s, onTrigger: i } = he
) {
  const a = Ra() === (we == null ? void 0 : we.scope) ? we : null;
  let l,
    u = !1,
    c = !1;
  if (
    (Se(e)
      ? ((l = () => e.value), (u = tr(e)))
      : Vt(e)
      ? ((l = () => e), (r = !0))
      : K(e)
      ? ((c = !0),
        (u = e.some((S) => Vt(S) || tr(S))),
        (l = () =>
          e.map((S) => {
            if (Se(S)) return S.value;
            if (Vt(S)) return Lt(S);
            if (X(S)) return Et(S, a, 2);
          })))
      : X(e)
      ? t
        ? (l = () => Et(e, a, 2))
        : (l = () => {
            if (!(a && a.isUnmounted)) return p && p(), He(e, a, 3, [h]);
          })
      : (l = Je),
    t && r)
  ) {
    const S = l;
    l = () => Lt(S());
  }
  let p,
    h = (S) => {
      p = C.onStop = () => {
        Et(S, a, 4);
      };
    },
    m;
  if (Sn)
    if (
      ((h = Je),
      t ? n && He(t, a, 3, [l(), c ? [] : void 0, h]) : l(),
      o === "sync")
    ) {
      const S = bc();
      m = S.__watcherHandles || (S.__watcherHandles = []);
    } else return Je;
  let w = c ? new Array(e.length).fill(Un) : Un;
  const b = () => {
    if (C.active)
      if (t) {
        const S = C.run();
        (r || u || (c ? S.some((A, F) => xn(A, w[F])) : xn(S, w))) &&
          (p && p(),
          He(t, a, 3, [S, w === Un ? void 0 : c && w[0] === Un ? [] : w, h]),
          (w = S));
      } else C.run();
  };
  b.allowRecurse = !!t;
  let $;
  o === "sync"
    ? ($ = b)
    : o === "post"
    ? ($ = () => ke(b, a && a.suspense))
    : ((b.pre = !0), a && (b.id = a.uid), ($ = () => _o(b)));
  const C = new co(l, $);
  t
    ? n
      ? b()
      : (w = C.run())
    : o === "post"
    ? ke(C.run.bind(C), a && a.suspense)
    : C.run();
  const M = () => {
    C.stop(), a && a.scope && so(a.scope.effects, C);
  };
  return m && m.push(M), M;
}
function Pl(e, t, n) {
  const r = this.proxy,
    o = Ce(e) ? (e.includes(".") ? wi(r, e) : () => r[e]) : e.bind(r, r);
  let s;
  X(t) ? (s = t) : ((s = t.handler), (n = t));
  const i = we;
  Qt(this);
  const a = hr(o, s.bind(r), n);
  return i ? Qt(i) : Dt(), a;
}
function wi(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++) r = r[n[o]];
    return r;
  };
}
function Lt(e, t) {
  if (!me(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), Se(e))) Lt(e.value, t);
  else if (K(e)) for (let n = 0; n < e.length; n++) Lt(e[n], t);
  else if (Vs(e) || Wt(e))
    e.forEach((n) => {
      Lt(n, t);
    });
  else if (Js(e)) for (const n in e) Lt(e[n], t);
  return e;
}
function Sl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    cn(() => {
      e.isMounted = !0;
    }),
    In(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const De = [Function, Array],
  $l = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: De,
      onEnter: De,
      onAfterEnter: De,
      onEnterCancelled: De,
      onBeforeLeave: De,
      onLeave: De,
      onAfterLeave: De,
      onLeaveCancelled: De,
      onBeforeAppear: De,
      onAppear: De,
      onAfterAppear: De,
      onAppearCancelled: De,
    },
    setup(e, { slots: t }) {
      const n = Oo(),
        r = Sl();
      let o;
      return () => {
        const s = t.default && Ci(t.default(), !0);
        if (!s || !s.length) return;
        let i = s[0];
        if (s.length > 1) {
          for (const b of s)
            if (b.type !== Fe) {
              i = b;
              break;
            }
        }
        const a = ie(e),
          { mode: l } = a;
        if (r.isLeaving) return Or(i);
        const u = Xo(i);
        if (!u) return Or(i);
        const c = Dr(u, a, r, n);
        Hr(u, c);
        const p = n.subTree,
          h = p && Xo(p);
        let m = !1;
        const { getTransitionKey: w } = u.type;
        if (w) {
          const b = w();
          o === void 0 ? (o = b) : b !== o && ((o = b), (m = !0));
        }
        if (h && h.type !== Fe && (!Nt(u, h) || m)) {
          const b = Dr(h, a, r, n);
          if ((Hr(h, b), l === "out-in"))
            return (
              (r.isLeaving = !0),
              (b.afterLeave = () => {
                (r.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              Or(i)
            );
          l === "in-out" &&
            u.type !== Fe &&
            (b.delayLeave = ($, C, M) => {
              const S = Ei(r, h);
              (S[String(h.key)] = h),
                ($._leaveCb = () => {
                  C(), ($._leaveCb = void 0), delete c.delayedLeave;
                }),
                (c.delayedLeave = M);
            });
        }
        return i;
      };
    },
  },
  xi = $l;
function Ei(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function Dr(e, t, n, r) {
  const {
      appear: o,
      mode: s,
      persisted: i = !1,
      onBeforeEnter: a,
      onEnter: l,
      onAfterEnter: u,
      onEnterCancelled: c,
      onBeforeLeave: p,
      onLeave: h,
      onAfterLeave: m,
      onLeaveCancelled: w,
      onBeforeAppear: b,
      onAppear: $,
      onAfterAppear: C,
      onAppearCancelled: M,
    } = t,
    S = String(e.key),
    A = Ei(n, e),
    F = (j, z) => {
      j && He(j, r, 9, z);
    },
    U = (j, z) => {
      const J = z[1];
      F(j, z),
        K(j) ? j.every((oe) => oe.length <= 1) && J() : j.length <= 1 && J();
    },
    Y = {
      mode: s,
      persisted: i,
      beforeEnter(j) {
        let z = a;
        if (!n.isMounted)
          if (o) z = b || a;
          else return;
        j._leaveCb && j._leaveCb(!0);
        const J = A[S];
        J && Nt(e, J) && J.el._leaveCb && J.el._leaveCb(), F(z, [j]);
      },
      enter(j) {
        let z = l,
          J = u,
          oe = c;
        if (!n.isMounted)
          if (o) (z = $ || l), (J = C || u), (oe = M || c);
          else return;
        let N = !1;
        const W = (j._enterCb = (ue) => {
          N ||
            ((N = !0),
            ue ? F(oe, [j]) : F(J, [j]),
            Y.delayedLeave && Y.delayedLeave(),
            (j._enterCb = void 0));
        });
        z ? U(z, [j, W]) : W();
      },
      leave(j, z) {
        const J = String(e.key);
        if ((j._enterCb && j._enterCb(!0), n.isUnmounting)) return z();
        F(p, [j]);
        let oe = !1;
        const N = (j._leaveCb = (W) => {
          oe ||
            ((oe = !0),
            z(),
            W ? F(w, [j]) : F(m, [j]),
            (j._leaveCb = void 0),
            A[J] === e && delete A[J]);
        });
        (A[J] = e), h ? U(h, [j, N]) : N();
      },
      clone(j) {
        return Dr(j, t, n, r);
      },
    };
  return Y;
}
function Or(e) {
  if (mr(e)) return (e = Pt(e)), (e.children = null), e;
}
function Xo(e) {
  return mr(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Hr(e, t) {
  e.shapeFlag & 6 && e.component
    ? Hr(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Ci(e, t = !1, n) {
  let r = [],
    o = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === ve
      ? (i.patchFlag & 128 && o++, (r = r.concat(Ci(i.children, t, a))))
      : (t || i.type !== Fe) && r.push(a != null ? Pt(i, { key: a }) : i);
  }
  if (o > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r;
}
function bo(e) {
  return X(e) ? { setup: e, name: e.name } : e;
}
const gn = (e) => !!e.type.__asyncLoader,
  mr = (e) => e.type.__isKeepAlive;
function Al(e, t) {
  Oi(e, "a", t);
}
function Tl(e, t) {
  Oi(e, "da", t);
}
function Oi(e, t, n = we) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((gr(t, r, n), n)) {
    let o = n.parent;
    for (; o && o.parent; )
      mr(o.parent.vnode) && Rl(r, t, n, o), (o = o.parent);
  }
}
function Rl(e, t, n, r) {
  const o = gr(t, e, r, !0);
  yo(() => {
    so(r[t], o);
  }, n);
}
function gr(e, t, n = we, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      s =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          rn(), Qt(n);
          const a = He(t, n, e, i);
          return Dt(), on(), a;
        });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const ht =
    (e) =>
    (t, n = we) =>
      (!Sn || e === "sp") && gr(e, (...r) => t(...r), n),
  Ml = ht("bm"),
  cn = ht("m"),
  Il = ht("bu"),
  kl = ht("u"),
  In = ht("bum"),
  yo = ht("um"),
  Nl = ht("sp"),
  jl = ht("rtg"),
  Ll = ht("rtc");
function Bl(e, t = we) {
  gr("ec", e, t);
}
function Fr(e, t) {
  const n = Ae;
  if (n === null) return e;
  const r = br(n) || n.proxy,
    o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, a, l, u = he] = t[s];
    i &&
      (X(i) && (i = { mounted: i, updated: i }),
      i.deep && Lt(a),
      o.push({
        dir: i,
        instance: r,
        value: a,
        oldValue: void 0,
        arg: l,
        modifiers: u,
      }));
  }
  return e;
}
function At(e, t, n, r) {
  const o = e.dirs,
    s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    s && (a.oldValue = s[i].value);
    let l = a.dir[r];
    l && (rn(), He(l, n, 8, [e.el, a, e, t]), on());
  }
}
const Pi = "components";
function Ee(e, t) {
  return Hl(Pi, e, !0, t) || e;
}
const Dl = Symbol();
function Hl(e, t, n = !0, r = !1) {
  const o = Ae || we;
  if (o) {
    const s = o.type;
    if (e === Pi) {
      const a = hc(s, !1);
      if (a && (a === t || a === it(t) || a === cr(it(t)))) return s;
    }
    const i = Zo(o[e] || s[e], t) || Zo(o.appContext[e], t);
    return !i && r ? s : i;
  }
}
function Zo(e, t) {
  return e && (e[t] || e[it(t)] || e[cr(it(t))]);
}
function Jt(e, t, n, r) {
  let o;
  const s = n && n[r];
  if (K(e) || Ce(e)) {
    o = new Array(e.length);
    for (let i = 0, a = e.length; i < a; i++)
      o[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let i = 0; i < e; i++) o[i] = t(i + 1, i, void 0, s && s[i]);
  } else if (me(e))
    if (e[Symbol.iterator])
      o = Array.from(e, (i, a) => t(i, a, void 0, s && s[a]));
    else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let a = 0, l = i.length; a < l; a++) {
        const u = i[a];
        o[a] = t(e[u], u, a, s && s[a]);
      }
    }
  else o = [];
  return n && (n[r] = o), o;
}
function es(e, t, n = {}, r, o) {
  if (Ae.isCE || (Ae.parent && gn(Ae.parent) && Ae.parent.isCE))
    return t !== "default" && (n.name = t), q("slot", n, r && r());
  let s = e[t];
  s && s._c && (s._d = !1), Z();
  const i = s && Si(s(n)),
    a = St(
      ve,
      { key: n.key || (i && i.key) || `_${t}` },
      i || (r ? r() : []),
      i && e._ === 1 ? 64 : -2
    );
  return (
    !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    s && s._c && (s._d = !0),
    a
  );
}
function Si(e) {
  return e.some((t) =>
    or(t) ? !(t.type === Fe || (t.type === ve && !Si(t.children))) : !0
  )
    ? e
    : null;
}
const zr = (e) => (e ? (Di(e) ? br(e) || e.proxy : zr(e.parent)) : null),
  vn = Te(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => zr(e.parent),
    $root: (e) => zr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => wo(e),
    $forceUpdate: (e) => e.f || (e.f = () => _o(e.update)),
    $nextTick: (e) => e.n || (e.n = vo.bind(e.proxy)),
    $watch: (e) => Pl.bind(e),
  }),
  Pr = (e, t) => e !== he && !e.__isScriptSetup && se(e, t),
  Fl = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: o,
        props: s,
        accessCache: i,
        type: a,
        appContext: l,
      } = e;
      let u;
      if (t[0] !== "$") {
        const m = i[t];
        if (m !== void 0)
          switch (m) {
            case 1:
              return r[t];
            case 2:
              return o[t];
            case 4:
              return n[t];
            case 3:
              return s[t];
          }
        else {
          if (Pr(r, t)) return (i[t] = 1), r[t];
          if (o !== he && se(o, t)) return (i[t] = 2), o[t];
          if ((u = e.propsOptions[0]) && se(u, t)) return (i[t] = 3), s[t];
          if (n !== he && se(n, t)) return (i[t] = 4), n[t];
          qr && (i[t] = 0);
        }
      }
      const c = vn[t];
      let p, h;
      if (c) return t === "$attrs" && Ne(e, "get", t), c(e);
      if ((p = a.__cssModules) && (p = p[t])) return p;
      if (n !== he && se(n, t)) return (i[t] = 4), n[t];
      if (((h = l.config.globalProperties), se(h, t))) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: s } = e;
      return Pr(o, t)
        ? ((o[t] = n), !0)
        : r !== he && se(r, t)
        ? ((r[t] = n), !0)
        : se(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((s[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: o,
          propsOptions: s,
        },
      },
      i
    ) {
      let a;
      return (
        !!n[i] ||
        (e !== he && se(e, i)) ||
        Pr(t, i) ||
        ((a = s[0]) && se(a, i)) ||
        se(r, i) ||
        se(vn, i) ||
        se(o.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : se(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let qr = !0;
function zl(e) {
  const t = wo(e),
    n = e.proxy,
    r = e.ctx;
  (qr = !1), t.beforeCreate && ts(t.beforeCreate, e, "bc");
  const {
    data: o,
    computed: s,
    methods: i,
    watch: a,
    provide: l,
    inject: u,
    created: c,
    beforeMount: p,
    mounted: h,
    beforeUpdate: m,
    updated: w,
    activated: b,
    deactivated: $,
    beforeDestroy: C,
    beforeUnmount: M,
    destroyed: S,
    unmounted: A,
    render: F,
    renderTracked: U,
    renderTriggered: Y,
    errorCaptured: j,
    serverPrefetch: z,
    expose: J,
    inheritAttrs: oe,
    components: N,
    directives: W,
    filters: ue,
  } = t;
  if ((u && ql(u, r, null, e.appContext.config.unwrapInjectedRef), i))
    for (const ne in i) {
      const V = i[ne];
      X(V) && (r[ne] = V.bind(n));
    }
  if (o) {
    const ne = o.call(n, n);
    me(ne) && (e.data = sn(ne));
  }
  if (((qr = !0), s))
    for (const ne in s) {
      const V = s[ne],
        fe = X(V) ? V.bind(n, n) : X(V.get) ? V.get.bind(n, n) : Je,
        ge = !X(V) && X(V.set) ? V.set.bind(n) : Je,
        be = $e({ get: fe, set: ge });
      Object.defineProperty(r, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => be.value,
        set: (ye) => (be.value = ye),
      });
    }
  if (a) for (const ne in a) $i(a[ne], r, n, ne);
  if (l) {
    const ne = X(l) ? l.call(n) : l;
    Reflect.ownKeys(ne).forEach((V) => {
      Gn(V, ne[V]);
    });
  }
  c && ts(c, e, "c");
  function te(ne, V) {
    K(V) ? V.forEach((fe) => ne(fe.bind(n))) : V && ne(V.bind(n));
  }
  if (
    (te(Ml, p),
    te(cn, h),
    te(Il, m),
    te(kl, w),
    te(Al, b),
    te(Tl, $),
    te(Bl, j),
    te(Ll, U),
    te(jl, Y),
    te(In, M),
    te(yo, A),
    te(Nl, z),
    K(J))
  )
    if (J.length) {
      const ne = e.exposed || (e.exposed = {});
      J.forEach((V) => {
        Object.defineProperty(ne, V, {
          get: () => n[V],
          set: (fe) => (n[V] = fe),
        });
      });
    } else e.exposed || (e.exposed = {});
  F && e.render === Je && (e.render = F),
    oe != null && (e.inheritAttrs = oe),
    N && (e.components = N),
    W && (e.directives = W);
}
function ql(e, t, n = Je, r = !1) {
  K(e) && (e = Ur(e));
  for (const o in e) {
    const s = e[o];
    let i;
    me(s)
      ? "default" in s
        ? (i = ut(s.from || o, s.default, !0))
        : (i = ut(s.from || o))
      : (i = ut(s)),
      Se(i) && r
        ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (a) => (i.value = a),
          })
        : (t[o] = i);
  }
}
function ts(e, t, n) {
  He(K(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function $i(e, t, n, r) {
  const o = r.includes(".") ? wi(n, r) : () => n[r];
  if (Ce(e)) {
    const s = t[e];
    X(s) && ft(o, s);
  } else if (X(e)) ft(o, e.bind(n));
  else if (me(e))
    if (K(e)) e.forEach((s) => $i(s, t, n, r));
    else {
      const s = X(e.handler) ? e.handler.bind(n) : t[e.handler];
      X(s) && ft(o, s, e);
    }
}
function wo(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: o,
      optionsCache: s,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    a = s.get(t);
  let l;
  return (
    a
      ? (l = a)
      : !o.length && !n && !r
      ? (l = t)
      : ((l = {}), o.length && o.forEach((u) => rr(l, u, i, !0)), rr(l, t, i)),
    me(t) && s.set(t, l),
    l
  );
}
function rr(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && rr(e, s, n, !0), o && o.forEach((i) => rr(e, i, n, !0));
  for (const i in t)
    if (!(r && i === "expose")) {
      const a = Ul[i] || (n && n[i]);
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const Ul = {
  data: ns,
  props: It,
  emits: It,
  methods: It,
  computed: It,
  beforeCreate: Ie,
  created: Ie,
  beforeMount: Ie,
  mounted: Ie,
  beforeUpdate: Ie,
  updated: Ie,
  beforeDestroy: Ie,
  beforeUnmount: Ie,
  destroyed: Ie,
  unmounted: Ie,
  activated: Ie,
  deactivated: Ie,
  errorCaptured: Ie,
  serverPrefetch: Ie,
  components: It,
  directives: It,
  watch: Wl,
  provide: ns,
  inject: Kl,
};
function ns(e, t) {
  return t
    ? e
      ? function () {
          return Te(
            X(e) ? e.call(this, this) : e,
            X(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Kl(e, t) {
  return It(Ur(e), Ur(t));
}
function Ur(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ie(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function It(e, t) {
  return e ? Te(Te(Object.create(null), e), t) : t;
}
function Wl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Te(Object.create(null), e);
  for (const r in t) n[r] = Ie(e[r], t[r]);
  return n;
}
function Vl(e, t, n, r = !1) {
  const o = {},
    s = {};
  Zn(s, _r, 1), (e.propsDefaults = Object.create(null)), Ai(e, t, o, s);
  for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
  n ? (e.props = r ? o : sl(o)) : e.type.props ? (e.props = o) : (e.props = s),
    (e.attrs = s);
}
function Gl(e, t, n, r) {
  const {
      props: o,
      attrs: s,
      vnode: { patchFlag: i },
    } = e,
    a = ie(o),
    [l] = e.propsOptions;
  let u = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let p = 0; p < c.length; p++) {
        let h = c[p];
        if (dr(e.emitsOptions, h)) continue;
        const m = t[h];
        if (l)
          if (se(s, h)) m !== s[h] && ((s[h] = m), (u = !0));
          else {
            const w = it(h);
            o[w] = Kr(l, a, w, m, e, !1);
          }
        else m !== s[h] && ((s[h] = m), (u = !0));
      }
    }
  } else {
    Ai(e, t, o, s) && (u = !0);
    let c;
    for (const p in a)
      (!t || (!se(t, p) && ((c = Ht(p)) === p || !se(t, c)))) &&
        (l
          ? n &&
            (n[p] !== void 0 || n[c] !== void 0) &&
            (o[p] = Kr(l, a, p, void 0, e, !0))
          : delete o[p]);
    if (s !== a)
      for (const p in s) (!t || !se(t, p)) && (delete s[p], (u = !0));
  }
  u && dt(e, "set", "$attrs");
}
function Ai(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1,
    a;
  if (t)
    for (let l in t) {
      if (Vn(l)) continue;
      const u = t[l];
      let c;
      o && se(o, (c = it(l)))
        ? !s || !s.includes(c)
          ? (n[c] = u)
          : ((a || (a = {}))[c] = u)
        : dr(e.emitsOptions, l) ||
          ((!(l in r) || u !== r[l]) && ((r[l] = u), (i = !0)));
    }
  if (s) {
    const l = ie(n),
      u = a || he;
    for (let c = 0; c < s.length; c++) {
      const p = s[c];
      n[p] = Kr(o, l, p, u[p], e, !se(u, p));
    }
  }
  return i;
}
function Kr(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const a = se(i, "default");
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && X(l)) {
        const { propsDefaults: u } = o;
        n in u ? (r = u[n]) : (Qt(o), (r = u[n] = l.call(null, t)), Dt());
      } else r = l;
    }
    i[0] &&
      (s && !a ? (r = !1) : i[1] && (r === "" || r === Ht(n)) && (r = !0));
  }
  return r;
}
function Ti(e, t, n = !1) {
  const r = t.propsCache,
    o = r.get(e);
  if (o) return o;
  const s = e.props,
    i = {},
    a = [];
  let l = !1;
  if (!X(e)) {
    const c = (p) => {
      l = !0;
      const [h, m] = Ti(p, t, !0);
      Te(i, h), m && a.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!s && !l) return me(e) && r.set(e, Kt), Kt;
  if (K(s))
    for (let c = 0; c < s.length; c++) {
      const p = it(s[c]);
      rs(p) && (i[p] = he);
    }
  else if (s)
    for (const c in s) {
      const p = it(c);
      if (rs(p)) {
        const h = s[c],
          m = (i[p] = K(h) || X(h) ? { type: h } : Object.assign({}, h));
        if (m) {
          const w = is(Boolean, m.type),
            b = is(String, m.type);
          (m[0] = w > -1),
            (m[1] = b < 0 || w < b),
            (w > -1 || se(m, "default")) && a.push(p);
        }
      }
    }
  const u = [i, a];
  return me(e) && r.set(e, u), u;
}
function rs(e) {
  return e[0] !== "$";
}
function os(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function ss(e, t) {
  return os(e) === os(t);
}
function is(e, t) {
  return K(t) ? t.findIndex((n) => ss(n, e)) : X(t) && ss(t, e) ? 0 : -1;
}
const Ri = (e) => e[0] === "_" || e === "$stable",
  xo = (e) => (K(e) ? e.map(rt) : [rt(e)]),
  Yl = (e, t, n) => {
    if (t._n) return t;
    const r = _e((...o) => xo(t(...o)), n);
    return (r._c = !1), r;
  },
  Mi = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (Ri(o)) continue;
      const s = e[o];
      if (X(s)) t[o] = Yl(o, s, r);
      else if (s != null) {
        const i = xo(s);
        t[o] = () => i;
      }
    }
  },
  Ii = (e, t) => {
    const n = xo(t);
    e.slots.default = () => n;
  },
  Jl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = ie(t)), Zn(t, "_", n)) : Mi(t, (e.slots = {}));
    } else (e.slots = {}), t && Ii(e, t);
    Zn(e.slots, _r, 1);
  },
  Ql = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let s = !0,
      i = he;
    if (r.shapeFlag & 32) {
      const a = t._;
      a
        ? n && a === 1
          ? (s = !1)
          : (Te(o, t), !n && a === 1 && delete o._)
        : ((s = !t.$stable), Mi(t, o)),
        (i = t);
    } else t && (Ii(e, t), (i = { default: 1 }));
    if (s) for (const a in o) !Ri(a) && !(a in i) && delete o[a];
  };
function ki() {
  return {
    app: null,
    config: {
      isNativeTag: ya,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Xl = 0;
function Zl(e, t) {
  return function (r, o = null) {
    X(r) || (r = Object.assign({}, r)), o != null && !me(o) && (o = null);
    const s = ki(),
      i = new Set();
    let a = !1;
    const l = (s.app = {
      _uid: Xl++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: yc,
      get config() {
        return s.config;
      },
      set config(u) {},
      use(u, ...c) {
        return (
          i.has(u) ||
            (u && X(u.install)
              ? (i.add(u), u.install(l, ...c))
              : X(u) && (i.add(u), u(l, ...c))),
          l
        );
      },
      mixin(u) {
        return s.mixins.includes(u) || s.mixins.push(u), l;
      },
      component(u, c) {
        return c ? ((s.components[u] = c), l) : s.components[u];
      },
      directive(u, c) {
        return c ? ((s.directives[u] = c), l) : s.directives[u];
      },
      mount(u, c, p) {
        if (!a) {
          const h = q(r, o);
          return (
            (h.appContext = s),
            c && t ? t(h, u) : e(h, u, p),
            (a = !0),
            (l._container = u),
            (u.__vue_app__ = l),
            br(h.component) || h.component.proxy
          );
        }
      },
      unmount() {
        a && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(u, c) {
        return (s.provides[u] = c), l;
      },
    });
    return l;
  };
}
function Wr(e, t, n, r, o = !1) {
  if (K(e)) {
    e.forEach((h, m) => Wr(h, t && (K(t) ? t[m] : t), n, r, o));
    return;
  }
  if (gn(r) && !o) return;
  const s = r.shapeFlag & 4 ? br(r.component) || r.component.proxy : r.el,
    i = o ? null : s,
    { i: a, r: l } = e,
    u = t && t.r,
    c = a.refs === he ? (a.refs = {}) : a.refs,
    p = a.setupState;
  if (
    (u != null &&
      u !== l &&
      (Ce(u)
        ? ((c[u] = null), se(p, u) && (p[u] = null))
        : Se(u) && (u.value = null)),
    X(l))
  )
    Et(l, a, 12, [i, c]);
  else {
    const h = Ce(l),
      m = Se(l);
    if (h || m) {
      const w = () => {
        if (e.f) {
          const b = h ? (se(p, l) ? p[l] : c[l]) : l.value;
          o
            ? K(b) && so(b, s)
            : K(b)
            ? b.includes(s) || b.push(s)
            : h
            ? ((c[l] = [s]), se(p, l) && (p[l] = c[l]))
            : ((l.value = [s]), e.k && (c[e.k] = l.value));
        } else
          h
            ? ((c[l] = i), se(p, l) && (p[l] = i))
            : m && ((l.value = i), e.k && (c[e.k] = i));
      };
      i ? ((w.id = -1), ke(w, n)) : w();
    }
  }
}
const ke = Cl;
function ec(e) {
  return tc(e);
}
function tc(e, t) {
  const n = $a();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: o,
      patchProp: s,
      createElement: i,
      createText: a,
      createComment: l,
      setText: u,
      setElementText: c,
      parentNode: p,
      nextSibling: h,
      setScopeId: m = Je,
      insertStaticContent: w,
    } = e,
    b = (
      f,
      d,
      g,
      v = null,
      y = null,
      P = null,
      I = !1,
      O = null,
      T = !!d.dynamicChildren
    ) => {
      if (f === d) return;
      f && !Nt(f, d) && ((v = R(f)), ye(f, y, P, !0), (f = null)),
        d.patchFlag === -2 && ((T = !1), (d.dynamicChildren = null));
      const { type: E, ref: D, shapeFlag: B } = d;
      switch (E) {
        case vr:
          $(f, d, g, v);
          break;
        case Fe:
          C(f, d, g, v);
          break;
        case Yn:
          f == null && M(d, g, v, I);
          break;
        case ve:
          N(f, d, g, v, y, P, I, O, T);
          break;
        default:
          B & 1
            ? F(f, d, g, v, y, P, I, O, T)
            : B & 6
            ? W(f, d, g, v, y, P, I, O, T)
            : (B & 64 || B & 128) && E.process(f, d, g, v, y, P, I, O, T, ee);
      }
      D != null && y && Wr(D, f && f.ref, P, d || f, !d);
    },
    $ = (f, d, g, v) => {
      if (f == null) r((d.el = a(d.children)), g, v);
      else {
        const y = (d.el = f.el);
        d.children !== f.children && u(y, d.children);
      }
    },
    C = (f, d, g, v) => {
      f == null ? r((d.el = l(d.children || "")), g, v) : (d.el = f.el);
    },
    M = (f, d, g, v) => {
      [f.el, f.anchor] = w(f.children, d, g, v, f.el, f.anchor);
    },
    S = ({ el: f, anchor: d }, g, v) => {
      let y;
      for (; f && f !== d; ) (y = h(f)), r(f, g, v), (f = y);
      r(d, g, v);
    },
    A = ({ el: f, anchor: d }) => {
      let g;
      for (; f && f !== d; ) (g = h(f)), o(f), (f = g);
      o(d);
    },
    F = (f, d, g, v, y, P, I, O, T) => {
      (I = I || d.type === "svg"),
        f == null ? U(d, g, v, y, P, I, O, T) : z(f, d, y, P, I, O, T);
    },
    U = (f, d, g, v, y, P, I, O) => {
      let T, E;
      const { type: D, props: B, shapeFlag: H, transition: G, dirs: re } = f;
      if (
        ((T = f.el = i(f.type, P, B && B.is, B)),
        H & 8
          ? c(T, f.children)
          : H & 16 &&
            j(f.children, T, null, v, y, P && D !== "foreignObject", I, O),
        re && At(f, null, v, "created"),
        Y(T, f, f.scopeId, I, v),
        B)
      ) {
        for (const ce in B)
          ce !== "value" &&
            !Vn(ce) &&
            s(T, ce, null, B[ce], P, f.children, v, y, k);
        "value" in B && s(T, "value", null, B.value),
          (E = B.onVnodeBeforeMount) && nt(E, v, f);
      }
      re && At(f, null, v, "beforeMount");
      const pe = (!y || (y && !y.pendingBranch)) && G && !G.persisted;
      pe && G.beforeEnter(T),
        r(T, d, g),
        ((E = B && B.onVnodeMounted) || pe || re) &&
          ke(() => {
            E && nt(E, v, f), pe && G.enter(T), re && At(f, null, v, "mounted");
          }, y);
    },
    Y = (f, d, g, v, y) => {
      if ((g && m(f, g), v)) for (let P = 0; P < v.length; P++) m(f, v[P]);
      if (y) {
        let P = y.subTree;
        if (d === P) {
          const I = y.vnode;
          Y(f, I, I.scopeId, I.slotScopeIds, y.parent);
        }
      }
    },
    j = (f, d, g, v, y, P, I, O, T = 0) => {
      for (let E = T; E < f.length; E++) {
        const D = (f[E] = O ? bt(f[E]) : rt(f[E]));
        b(null, D, d, g, v, y, P, I, O);
      }
    },
    z = (f, d, g, v, y, P, I) => {
      const O = (d.el = f.el);
      let { patchFlag: T, dynamicChildren: E, dirs: D } = d;
      T |= f.patchFlag & 16;
      const B = f.props || he,
        H = d.props || he;
      let G;
      g && Tt(g, !1),
        (G = H.onVnodeBeforeUpdate) && nt(G, g, d, f),
        D && At(d, f, g, "beforeUpdate"),
        g && Tt(g, !0);
      const re = y && d.type !== "foreignObject";
      if (
        (E
          ? J(f.dynamicChildren, E, O, g, v, re, P)
          : I || V(f, d, O, null, g, v, re, P, !1),
        T > 0)
      ) {
        if (T & 16) oe(O, d, B, H, g, v, y);
        else if (
          (T & 2 && B.class !== H.class && s(O, "class", null, H.class, y),
          T & 4 && s(O, "style", B.style, H.style, y),
          T & 8)
        ) {
          const pe = d.dynamicProps;
          for (let ce = 0; ce < pe.length; ce++) {
            const xe = pe[ce],
              We = B[xe],
              Ft = H[xe];
            (Ft !== We || xe === "value") &&
              s(O, xe, We, Ft, y, f.children, g, v, k);
          }
        }
        T & 1 && f.children !== d.children && c(O, d.children);
      } else !I && E == null && oe(O, d, B, H, g, v, y);
      ((G = H.onVnodeUpdated) || D) &&
        ke(() => {
          G && nt(G, g, d, f), D && At(d, f, g, "updated");
        }, v);
    },
    J = (f, d, g, v, y, P, I) => {
      for (let O = 0; O < d.length; O++) {
        const T = f[O],
          E = d[O],
          D =
            T.el && (T.type === ve || !Nt(T, E) || T.shapeFlag & 70)
              ? p(T.el)
              : g;
        b(T, E, D, null, v, y, P, I, !0);
      }
    },
    oe = (f, d, g, v, y, P, I) => {
      if (g !== v) {
        if (g !== he)
          for (const O in g)
            !Vn(O) && !(O in v) && s(f, O, g[O], null, I, d.children, y, P, k);
        for (const O in v) {
          if (Vn(O)) continue;
          const T = v[O],
            E = g[O];
          T !== E && O !== "value" && s(f, O, E, T, I, d.children, y, P, k);
        }
        "value" in v && s(f, "value", g.value, v.value);
      }
    },
    N = (f, d, g, v, y, P, I, O, T) => {
      const E = (d.el = f ? f.el : a("")),
        D = (d.anchor = f ? f.anchor : a(""));
      let { patchFlag: B, dynamicChildren: H, slotScopeIds: G } = d;
      G && (O = O ? O.concat(G) : G),
        f == null
          ? (r(E, g, v), r(D, g, v), j(d.children, g, D, y, P, I, O, T))
          : B > 0 && B & 64 && H && f.dynamicChildren
          ? (J(f.dynamicChildren, H, g, y, P, I, O),
            (d.key != null || (y && d === y.subTree)) && Ni(f, d, !0))
          : V(f, d, g, D, y, P, I, O, T);
    },
    W = (f, d, g, v, y, P, I, O, T) => {
      (d.slotScopeIds = O),
        f == null
          ? d.shapeFlag & 512
            ? y.ctx.activate(d, g, v, I, T)
            : ue(d, g, v, y, P, I, T)
          : Pe(f, d, T);
    },
    ue = (f, d, g, v, y, P, I) => {
      const O = (f.component = uc(f, v, y));
      if ((mr(f) && (O.ctx.renderer = ee), fc(O), O.asyncDep)) {
        if ((y && y.registerDep(O, te), !f.el)) {
          const T = (O.subTree = q(Fe));
          C(null, T, d, g);
        }
        return;
      }
      te(O, f, d, g, y, P, I);
    },
    Pe = (f, d, g) => {
      const v = (d.component = f.component);
      if (wl(f, d, g))
        if (v.asyncDep && !v.asyncResolved) {
          ne(v, d, g);
          return;
        } else (v.next = d), ml(v.update), v.update();
      else (d.el = f.el), (v.vnode = d);
    },
    te = (f, d, g, v, y, P, I) => {
      const O = () => {
          if (f.isMounted) {
            let { next: D, bu: B, u: H, parent: G, vnode: re } = f,
              pe = D,
              ce;
            Tt(f, !1),
              D ? ((D.el = re.el), ne(f, D, I)) : (D = re),
              B && Er(B),
              (ce = D.props && D.props.onVnodeBeforeUpdate) && nt(ce, G, D, re),
              Tt(f, !0);
            const xe = Cr(f),
              We = f.subTree;
            (f.subTree = xe),
              b(We, xe, p(We.el), R(We), f, y, P),
              (D.el = xe.el),
              pe === null && xl(f, xe.el),
              H && ke(H, y),
              (ce = D.props && D.props.onVnodeUpdated) &&
                ke(() => nt(ce, G, D, re), y);
          } else {
            let D;
            const { el: B, props: H } = d,
              { bm: G, m: re, parent: pe } = f,
              ce = gn(d);
            if (
              (Tt(f, !1),
              G && Er(G),
              !ce && (D = H && H.onVnodeBeforeMount) && nt(D, pe, d),
              Tt(f, !0),
              B && Q)
            ) {
              const xe = () => {
                (f.subTree = Cr(f)), Q(B, f.subTree, f, y, null);
              };
              ce
                ? d.type.__asyncLoader().then(() => !f.isUnmounted && xe())
                : xe();
            } else {
              const xe = (f.subTree = Cr(f));
              b(null, xe, g, v, f, y, P), (d.el = xe.el);
            }
            if ((re && ke(re, y), !ce && (D = H && H.onVnodeMounted))) {
              const xe = d;
              ke(() => nt(D, pe, xe), y);
            }
            (d.shapeFlag & 256 ||
              (pe && gn(pe.vnode) && pe.vnode.shapeFlag & 256)) &&
              f.a &&
              ke(f.a, y),
              (f.isMounted = !0),
              (d = g = v = null);
          }
        },
        T = (f.effect = new co(O, () => _o(E), f.scope)),
        E = (f.update = () => T.run());
      (E.id = f.uid), Tt(f, !0), E();
    },
    ne = (f, d, g) => {
      d.component = f;
      const v = f.vnode.props;
      (f.vnode = d),
        (f.next = null),
        Gl(f, d.props, v, g),
        Ql(f, d.children, g),
        rn(),
        Yo(),
        on();
    },
    V = (f, d, g, v, y, P, I, O, T = !1) => {
      const E = f && f.children,
        D = f ? f.shapeFlag : 0,
        B = d.children,
        { patchFlag: H, shapeFlag: G } = d;
      if (H > 0) {
        if (H & 128) {
          ge(E, B, g, v, y, P, I, O, T);
          return;
        } else if (H & 256) {
          fe(E, B, g, v, y, P, I, O, T);
          return;
        }
      }
      G & 8
        ? (D & 16 && k(E, y, P), B !== E && c(g, B))
        : D & 16
        ? G & 16
          ? ge(E, B, g, v, y, P, I, O, T)
          : k(E, y, P, !0)
        : (D & 8 && c(g, ""), G & 16 && j(B, g, v, y, P, I, O, T));
    },
    fe = (f, d, g, v, y, P, I, O, T) => {
      (f = f || Kt), (d = d || Kt);
      const E = f.length,
        D = d.length,
        B = Math.min(E, D);
      let H;
      for (H = 0; H < B; H++) {
        const G = (d[H] = T ? bt(d[H]) : rt(d[H]));
        b(f[H], G, g, null, y, P, I, O, T);
      }
      E > D ? k(f, y, P, !0, !1, B) : j(d, g, v, y, P, I, O, T, B);
    },
    ge = (f, d, g, v, y, P, I, O, T) => {
      let E = 0;
      const D = d.length;
      let B = f.length - 1,
        H = D - 1;
      for (; E <= B && E <= H; ) {
        const G = f[E],
          re = (d[E] = T ? bt(d[E]) : rt(d[E]));
        if (Nt(G, re)) b(G, re, g, null, y, P, I, O, T);
        else break;
        E++;
      }
      for (; E <= B && E <= H; ) {
        const G = f[B],
          re = (d[H] = T ? bt(d[H]) : rt(d[H]));
        if (Nt(G, re)) b(G, re, g, null, y, P, I, O, T);
        else break;
        B--, H--;
      }
      if (E > B) {
        if (E <= H) {
          const G = H + 1,
            re = G < D ? d[G].el : v;
          for (; E <= H; )
            b(null, (d[E] = T ? bt(d[E]) : rt(d[E])), g, re, y, P, I, O, T),
              E++;
        }
      } else if (E > H) for (; E <= B; ) ye(f[E], y, P, !0), E++;
      else {
        const G = E,
          re = E,
          pe = new Map();
        for (E = re; E <= H; E++) {
          const je = (d[E] = T ? bt(d[E]) : rt(d[E]));
          je.key != null && pe.set(je.key, E);
        }
        let ce,
          xe = 0;
        const We = H - re + 1;
        let Ft = !1,
          Bo = 0;
        const un = new Array(We);
        for (E = 0; E < We; E++) un[E] = 0;
        for (E = G; E <= B; E++) {
          const je = f[E];
          if (xe >= We) {
            ye(je, y, P, !0);
            continue;
          }
          let tt;
          if (je.key != null) tt = pe.get(je.key);
          else
            for (ce = re; ce <= H; ce++)
              if (un[ce - re] === 0 && Nt(je, d[ce])) {
                tt = ce;
                break;
              }
          tt === void 0
            ? ye(je, y, P, !0)
            : ((un[tt - re] = E + 1),
              tt >= Bo ? (Bo = tt) : (Ft = !0),
              b(je, d[tt], g, null, y, P, I, O, T),
              xe++);
        }
        const Do = Ft ? nc(un) : Kt;
        for (ce = Do.length - 1, E = We - 1; E >= 0; E--) {
          const je = re + E,
            tt = d[je],
            Ho = je + 1 < D ? d[je + 1].el : v;
          un[E] === 0
            ? b(null, tt, g, Ho, y, P, I, O, T)
            : Ft && (ce < 0 || E !== Do[ce] ? be(tt, g, Ho, 2) : ce--);
        }
      }
    },
    be = (f, d, g, v, y = null) => {
      const { el: P, type: I, transition: O, children: T, shapeFlag: E } = f;
      if (E & 6) {
        be(f.component.subTree, d, g, v);
        return;
      }
      if (E & 128) {
        f.suspense.move(d, g, v);
        return;
      }
      if (E & 64) {
        I.move(f, d, g, ee);
        return;
      }
      if (I === ve) {
        r(P, d, g);
        for (let B = 0; B < T.length; B++) be(T[B], d, g, v);
        r(f.anchor, d, g);
        return;
      }
      if (I === Yn) {
        S(f, d, g);
        return;
      }
      if (v !== 2 && E & 1 && O)
        if (v === 0) O.beforeEnter(P), r(P, d, g), ke(() => O.enter(P), y);
        else {
          const { leave: B, delayLeave: H, afterLeave: G } = O,
            re = () => r(P, d, g),
            pe = () => {
              B(P, () => {
                re(), G && G();
              });
            };
          H ? H(P, re, pe) : pe();
        }
      else r(P, d, g);
    },
    ye = (f, d, g, v = !1, y = !1) => {
      const {
        type: P,
        props: I,
        ref: O,
        children: T,
        dynamicChildren: E,
        shapeFlag: D,
        patchFlag: B,
        dirs: H,
      } = f;
      if ((O != null && Wr(O, null, g, f, !0), D & 256)) {
        d.ctx.deactivate(f);
        return;
      }
      const G = D & 1 && H,
        re = !gn(f);
      let pe;
      if ((re && (pe = I && I.onVnodeBeforeUnmount) && nt(pe, d, f), D & 6))
        _(f.component, g, v);
      else {
        if (D & 128) {
          f.suspense.unmount(g, v);
          return;
        }
        G && At(f, null, d, "beforeUnmount"),
          D & 64
            ? f.type.remove(f, d, g, y, ee, v)
            : E && (P !== ve || (B > 0 && B & 64))
            ? k(E, d, g, !1, !0)
            : ((P === ve && B & 384) || (!y && D & 16)) && k(T, d, g),
          v && Ke(f);
      }
      ((re && (pe = I && I.onVnodeUnmounted)) || G) &&
        ke(() => {
          pe && nt(pe, d, f), G && At(f, null, d, "unmounted");
        }, g);
    },
    Ke = (f) => {
      const { type: d, el: g, anchor: v, transition: y } = f;
      if (d === ve) {
        Be(g, v);
        return;
      }
      if (d === Yn) {
        A(f);
        return;
      }
      const P = () => {
        o(g), y && !y.persisted && y.afterLeave && y.afterLeave();
      };
      if (f.shapeFlag & 1 && y && !y.persisted) {
        const { leave: I, delayLeave: O } = y,
          T = () => I(g, P);
        O ? O(f.el, P, T) : T();
      } else P();
    },
    Be = (f, d) => {
      let g;
      for (; f !== d; ) (g = h(f)), o(f), (f = g);
      o(d);
    },
    _ = (f, d, g) => {
      const { bum: v, scope: y, update: P, subTree: I, um: O } = f;
      v && Er(v),
        y.stop(),
        P && ((P.active = !1), ye(I, f, d, g)),
        O && ke(O, d),
        ke(() => {
          f.isUnmounted = !0;
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          f.asyncDep &&
          !f.asyncResolved &&
          f.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve());
    },
    k = (f, d, g, v = !1, y = !1, P = 0) => {
      for (let I = P; I < f.length; I++) ye(f[I], d, g, v, y);
    },
    R = (f) =>
      f.shapeFlag & 6
        ? R(f.component.subTree)
        : f.shapeFlag & 128
        ? f.suspense.next()
        : h(f.anchor || f.el),
    L = (f, d, g) => {
      f == null
        ? d._vnode && ye(d._vnode, null, null, !0)
        : b(d._vnode || null, f, d, null, null, null, g),
        Yo(),
        _i(),
        (d._vnode = f);
    },
    ee = {
      p: b,
      um: ye,
      m: be,
      r: Ke,
      mt: ue,
      mc: j,
      pc: V,
      pbc: J,
      n: R,
      o: e,
    };
  let de, Q;
  return (
    t && ([de, Q] = t(ee)), { render: L, hydrate: de, createApp: Zl(L, de) }
  );
}
function Tt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Ni(e, t, n = !1) {
  const r = e.children,
    o = t.children;
  if (K(r) && K(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let a = o[s];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = o[s] = bt(o[s])), (a.el = i.el)),
        n || Ni(i, a)),
        a.type === vr && (a.el = i.el);
    }
}
function nc(e) {
  const t = e.slice(),
    n = [0];
  let r, o, s, i, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const u = e[r];
    if (u !== 0) {
      if (((o = n[n.length - 1]), e[o] < u)) {
        (t[r] = o), n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        (a = (s + i) >> 1), e[n[a]] < u ? (s = a + 1) : (i = a);
      u < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), (n[s] = r));
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; ) (n[s] = i), (i = t[i]);
  return n;
}
const rc = (e) => e.__isTeleport,
  ve = Symbol(void 0),
  vr = Symbol(void 0),
  Fe = Symbol(void 0),
  Yn = Symbol(void 0),
  _n = [];
let Ye = null;
function Z(e = !1) {
  _n.push((Ye = e ? null : []));
}
function oc() {
  _n.pop(), (Ye = _n[_n.length - 1] || null);
}
let Pn = 1;
function as(e) {
  Pn += e;
}
function ji(e) {
  return (
    (e.dynamicChildren = Pn > 0 ? Ye || Kt : null),
    oc(),
    Pn > 0 && Ye && Ye.push(e),
    e
  );
}
function ae(e, t, n, r, o, s) {
  return ji(x(e, t, n, r, o, s, !0));
}
function St(e, t, n, r, o) {
  return ji(q(e, t, n, r, o, !0));
}
function or(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Nt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const _r = "__vInternal",
  Li = ({ key: e }) => e ?? null,
  Jn = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? Ce(e) || Se(e) || X(e)
        ? { i: Ae, r: e, k: t, f: !!n }
        : e
      : null;
function x(
  e,
  t = null,
  n = null,
  r = 0,
  o = null,
  s = e === ve ? 0 : 1,
  i = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Li(t),
    ref: t && Jn(t),
    scopeId: pr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Ae,
  };
  return (
    a
      ? (Co(l, n), s & 128 && e.normalize(l))
      : n && (l.shapeFlag |= Ce(n) ? 8 : 16),
    Pn > 0 &&
      !i &&
      Ye &&
      (l.patchFlag > 0 || s & 6) &&
      l.patchFlag !== 32 &&
      Ye.push(l),
    l
  );
}
const q = sc;
function sc(e, t = null, n = null, r = 0, o = null, s = !1) {
  if (((!e || e === Dl) && (e = Fe), or(e))) {
    const a = Pt(e, t, !0);
    return (
      n && Co(a, n),
      Pn > 0 &&
        !s &&
        Ye &&
        (a.shapeFlag & 6 ? (Ye[Ye.indexOf(e)] = a) : Ye.push(a)),
      (a.patchFlag |= -2),
      a
    );
  }
  if ((mc(e) && (e = e.__vccOpts), t)) {
    t = ic(t);
    let { class: a, style: l } = t;
    a && !Ce(a) && (t.class = ro(a)),
      me(l) && (li(l) && !K(l) && (l = Te({}, l)), (t.style = Mn(l)));
  }
  const i = Ce(e) ? 1 : El(e) ? 128 : rc(e) ? 64 : me(e) ? 4 : X(e) ? 2 : 0;
  return x(e, t, n, r, o, i, s, !0);
}
function ic(e) {
  return e ? (li(e) || _r in e ? Te({}, e) : e) : null;
}
function Pt(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: s, children: i } = e,
    a = t ? ac(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Li(a),
    ref:
      t && t.ref ? (n && o ? (K(o) ? o.concat(Jn(t)) : [o, Jn(t)]) : Jn(t)) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ve ? (s === -1 ? 16 : s | 16) : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Pt(e.ssContent),
    ssFallback: e.ssFallback && Pt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function Bi(e = " ", t = 0) {
  return q(vr, null, e, t);
}
function Eo(e = "", t = !1) {
  return t ? (Z(), St(Fe, null, e)) : q(Fe, null, e);
}
function rt(e) {
  return e == null || typeof e == "boolean"
    ? q(Fe)
    : K(e)
    ? q(ve, null, e.slice())
    : typeof e == "object"
    ? bt(e)
    : q(vr, null, String(e));
}
function bt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Pt(e);
}
function Co(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (K(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Co(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(_r in t)
        ? (t._ctx = Ae)
        : o === 3 &&
          Ae &&
          (Ae.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    X(t)
      ? ((t = { default: t, _ctx: Ae }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Bi(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function ac(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = ro([t.class, r.class]));
      else if (o === "style") t.style = Mn([t.style, r.style]);
      else if (ir(o)) {
        const s = t[o],
          i = r[o];
        i &&
          s !== i &&
          !(K(s) && s.includes(i)) &&
          (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function nt(e, t, n, r = null) {
  He(e, t, 7, [n, r]);
}
const lc = ki();
let cc = 0;
function uc(e, t, n) {
  const r = e.type,
    o = (t ? t.appContext : e.appContext) || lc,
    s = {
      uid: cc++,
      vnode: e,
      type: r,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Aa(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Ti(r, o),
      emitsOptions: yi(r, o),
      emit: null,
      emitted: null,
      propsDefaults: he,
      inheritAttrs: r.inheritAttrs,
      ctx: he,
      data: he,
      props: he,
      attrs: he,
      slots: he,
      refs: he,
      setupState: he,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (s.ctx = { _: s }),
    (s.root = t ? t.root : s),
    (s.emit = _l.bind(null, s)),
    e.ce && e.ce(s),
    s
  );
}
let we = null;
const Oo = () => we || Ae,
  Qt = (e) => {
    (we = e), e.scope.on();
  },
  Dt = () => {
    we && we.scope.off(), (we = null);
  };
function Di(e) {
  return e.vnode.shapeFlag & 4;
}
let Sn = !1;
function fc(e, t = !1) {
  Sn = t;
  const { props: n, children: r } = e.vnode,
    o = Di(e);
  Vl(e, n, o, t), Jl(e, r);
  const s = o ? dc(e, t) : void 0;
  return (Sn = !1), s;
}
function dc(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = ci(new Proxy(e.ctx, Fl)));
  const { setup: r } = n;
  if (r) {
    const o = (e.setupContext = r.length > 1 ? Fi(e) : null);
    Qt(e), rn();
    const s = Et(r, e, 0, [e.props, o]);
    if ((on(), Dt(), Gs(s))) {
      if ((s.then(Dt, Dt), t))
        return s
          .then((i) => {
            ls(e, i, t);
          })
          .catch((i) => {
            fr(i, e, 0);
          });
      e.asyncDep = s;
    } else ls(e, s, t);
  } else Hi(e, t);
}
function ls(e, t, n) {
  X(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : me(t) && (e.setupState = pi(t)),
    Hi(e, n);
}
let cs;
function Hi(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && cs && !r.render) {
      const o = r.template || wo(e).template;
      if (o) {
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config,
          { delimiters: a, compilerOptions: l } = r,
          u = Te(Te({ isCustomElement: s, delimiters: a }, i), l);
        r.render = cs(o, u);
      }
    }
    e.render = r.render || Je;
  }
  Qt(e), rn(), zl(e), on(), Dt();
}
function pc(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Ne(e, "get", "$attrs"), t[n];
    },
  });
}
function Fi(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = pc(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function br(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(pi(ci(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in vn) return vn[n](e);
        },
        has(t, n) {
          return n in t || n in vn;
        },
      }))
    );
}
function hc(e, t = !0) {
  return X(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function mc(e) {
  return X(e) && "__vccOpts" in e;
}
const $e = (e, t) => dl(e, t, Sn);
function gc() {
  return vc().slots;
}
function vc() {
  const e = Oo();
  return e.setupContext || (e.setupContext = Fi(e));
}
function Po(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? me(t) && !K(t)
      ? or(t)
        ? q(e, null, [t])
        : q(e, t)
      : q(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && or(n) && (n = [n]),
      q(e, t, n));
}
const _c = Symbol(""),
  bc = () => ut(_c),
  yc = "3.2.47",
  wc = "http://www.w3.org/2000/svg",
  jt = typeof document < "u" ? document : null,
  us = jt && jt.createElement("template"),
  xc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o = t
        ? jt.createElementNS(wc, e)
        : jt.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          o.setAttribute("multiple", r.multiple),
        o
      );
    },
    createText: (e) => jt.createTextNode(e),
    createComment: (e) => jt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => jt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, o, s) {
      const i = n ? n.previousSibling : t.lastChild;
      if (o && (o === s || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), n),
            !(o === s || !(o = o.nextSibling));

        );
      else {
        us.innerHTML = r ? `<svg>${e}</svg>` : e;
        const a = us.content;
        if (r) {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function Ec(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function Cc(e, t, n) {
  const r = e.style,
    o = Ce(n);
  if (n && !o) {
    if (t && !Ce(t)) for (const s in t) n[s] == null && Vr(r, s, "");
    for (const s in n) Vr(r, s, n[s]);
  } else {
    const s = r.display;
    o ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (r.display = s);
  }
}
const fs = /\s*!important$/;
function Vr(e, t, n) {
  if (K(n)) n.forEach((r) => Vr(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = Oc(e, t);
    fs.test(n)
      ? e.setProperty(Ht(r), n.replace(fs, ""), "important")
      : (e[r] = n);
  }
}
const ds = ["Webkit", "Moz", "ms"],
  Sr = {};
function Oc(e, t) {
  const n = Sr[t];
  if (n) return n;
  let r = it(t);
  if (r !== "filter" && r in e) return (Sr[t] = r);
  r = cr(r);
  for (let o = 0; o < ds.length; o++) {
    const s = ds[o] + r;
    if (s in e) return (Sr[t] = s);
  }
  return t;
}
const ps = "http://www.w3.org/1999/xlink";
function Pc(e, t, n, r, o) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(ps, t.slice(6, t.length))
      : e.setAttributeNS(ps, t, n);
  else {
    const s = ba(t);
    n == null || (s && !Ks(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, s ? "" : n);
  }
}
function Sc(e, t, n, r, o, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, o, s), (e[t] = n ?? "");
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const l = n ?? "";
    (e.value !== l || e.tagName === "OPTION") && (e.value = l),
      n == null && e.removeAttribute(t);
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (n = Ks(n))
      : n == null && l === "string"
      ? ((n = ""), (a = !0))
      : l === "number" && ((n = 0), (a = !0));
  }
  try {
    e[t] = n;
  } catch {}
  a && e.removeAttribute(t);
}
function $c(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Ac(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function Tc(e, t, n, r, o = null) {
  const s = e._vei || (e._vei = {}),
    i = s[t];
  if (r && i) i.value = r;
  else {
    const [a, l] = Rc(t);
    if (r) {
      const u = (s[t] = kc(r, o));
      $c(e, a, u, l);
    } else i && (Ac(e, a, i, l), (s[t] = void 0));
  }
}
const hs = /(?:Once|Passive|Capture)$/;
function Rc(e) {
  let t;
  if (hs.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(hs)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Ht(e.slice(2)), t];
}
let $r = 0;
const Mc = Promise.resolve(),
  Ic = () => $r || (Mc.then(() => ($r = 0)), ($r = Date.now()));
function kc(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    He(Nc(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = Ic()), n;
}
function Nc(e, t) {
  if (K(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (o) => !o._stopped && r && r(o))
    );
  } else return t;
}
const ms = /^on[a-z]/,
  jc = (e, t, n, r, o = !1, s, i, a, l) => {
    t === "class"
      ? Ec(e, r, o)
      : t === "style"
      ? Cc(e, n, r)
      : ir(t)
      ? oo(t) || Tc(e, t, n, r, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Lc(e, t, r, o)
        )
      ? Sc(e, t, r, s, i, a, l)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        Pc(e, t, r, o));
  };
function Lc(e, t, n, r) {
  return r
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && ms.test(t) && X(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (ms.test(t) && Ce(n))
    ? !1
    : t in e;
}
function Bc(e) {
  const t = Oo();
  if (!t) return;
  const n = (t.ut = (o = e(t.proxy)) => {
      Array.from(
        document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
      ).forEach((s) => Yr(s, o));
    }),
    r = () => {
      const o = e(t.proxy);
      Gr(t.subTree, o), n(o);
    };
  Ol(r),
    cn(() => {
      const o = new MutationObserver(r);
      o.observe(t.subTree.el.parentNode, { childList: !0 }),
        yo(() => o.disconnect());
    });
}
function Gr(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    (e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          Gr(n.activeBranch, t);
        });
  }
  for (; e.component; ) e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el) Yr(e.el, t);
  else if (e.type === ve) e.children.forEach((n) => Gr(n, t));
  else if (e.type === Yn) {
    let { el: n, anchor: r } = e;
    for (; n && (Yr(n, t), n !== r); ) n = n.nextSibling;
  }
}
function Yr(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    for (const r in t) n.setProperty(`--${r}`, t[r]);
  }
}
const gt = "transition",
  fn = "animation",
  kn = (e, { slots: t }) => Po(xi, Dc(e), t);
kn.displayName = "Transition";
const zi = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
kn.props = Te({}, xi.props, zi);
const Rt = (e, t = []) => {
    K(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  gs = (e) => (e ? (K(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Dc(e) {
  const t = {};
  for (const N in e) N in zi || (t[N] = e[N]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: r,
      duration: o,
      enterFromClass: s = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: l = s,
      appearActiveClass: u = i,
      appearToClass: c = a,
      leaveFromClass: p = `${n}-leave-from`,
      leaveActiveClass: h = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`,
    } = e,
    w = Hc(o),
    b = w && w[0],
    $ = w && w[1],
    {
      onBeforeEnter: C,
      onEnter: M,
      onEnterCancelled: S,
      onLeave: A,
      onLeaveCancelled: F,
      onBeforeAppear: U = C,
      onAppear: Y = M,
      onAppearCancelled: j = S,
    } = t,
    z = (N, W, ue) => {
      Mt(N, W ? c : a), Mt(N, W ? u : i), ue && ue();
    },
    J = (N, W) => {
      (N._isLeaving = !1), Mt(N, p), Mt(N, m), Mt(N, h), W && W();
    },
    oe = (N) => (W, ue) => {
      const Pe = N ? Y : M,
        te = () => z(W, N, ue);
      Rt(Pe, [W, te]),
        vs(() => {
          Mt(W, N ? l : s), vt(W, N ? c : a), gs(Pe) || _s(W, r, b, te);
        });
    };
  return Te(t, {
    onBeforeEnter(N) {
      Rt(C, [N]), vt(N, s), vt(N, i);
    },
    onBeforeAppear(N) {
      Rt(U, [N]), vt(N, l), vt(N, u);
    },
    onEnter: oe(!1),
    onAppear: oe(!0),
    onLeave(N, W) {
      N._isLeaving = !0;
      const ue = () => J(N, W);
      vt(N, p),
        qc(),
        vt(N, h),
        vs(() => {
          N._isLeaving && (Mt(N, p), vt(N, m), gs(A) || _s(N, r, $, ue));
        }),
        Rt(A, [N, ue]);
    },
    onEnterCancelled(N) {
      z(N, !1), Rt(S, [N]);
    },
    onAppearCancelled(N) {
      z(N, !0), Rt(j, [N]);
    },
    onLeaveCancelled(N) {
      J(N), Rt(F, [N]);
    },
  });
}
function Hc(e) {
  if (e == null) return null;
  if (me(e)) return [Ar(e.enter), Ar(e.leave)];
  {
    const t = Ar(e);
    return [t, t];
  }
}
function Ar(e) {
  return Sa(e);
}
function vt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function Mt(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function vs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Fc = 0;
function _s(e, t, n, r) {
  const o = (e._endId = ++Fc),
    s = () => {
      o === e._endId && r();
    };
  if (n) return setTimeout(s, n);
  const { type: i, timeout: a, propCount: l } = zc(e, t);
  if (!i) return r();
  const u = i + "end";
  let c = 0;
  const p = () => {
      e.removeEventListener(u, h), s();
    },
    h = (m) => {
      m.target === e && ++c >= l && p();
    };
  setTimeout(() => {
    c < l && p();
  }, a + 1),
    e.addEventListener(u, h);
}
function zc(e, t) {
  const n = window.getComputedStyle(e),
    r = (w) => (n[w] || "").split(", "),
    o = r(`${gt}Delay`),
    s = r(`${gt}Duration`),
    i = bs(o, s),
    a = r(`${fn}Delay`),
    l = r(`${fn}Duration`),
    u = bs(a, l);
  let c = null,
    p = 0,
    h = 0;
  t === gt
    ? i > 0 && ((c = gt), (p = i), (h = s.length))
    : t === fn
    ? u > 0 && ((c = fn), (p = u), (h = l.length))
    : ((p = Math.max(i, u)),
      (c = p > 0 ? (i > u ? gt : fn) : null),
      (h = c ? (c === gt ? s.length : l.length) : 0));
  const m =
    c === gt && /\b(transform|all)(,|$)/.test(r(`${gt}Property`).toString());
  return { type: c, timeout: p, propCount: h, hasTransform: m };
}
function bs(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => ys(n) + ys(e[r])));
}
function ys(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function qc() {
  return document.body.offsetHeight;
}
const Uc = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  Kc = (e, t) => (n) => {
    if (!("key" in n)) return;
    const r = Ht(n.key);
    if (t.some((o) => o === r || Uc[o] === r)) return e(n);
  },
  Jr = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e._vod = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : dn(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), dn(e, !0), r.enter(e))
            : r.leave(e, () => {
                dn(e, !1);
              })
          : dn(e, t));
    },
    beforeUnmount(e, { value: t }) {
      dn(e, t);
    },
  };
function dn(e, t) {
  e.style.display = t ? e._vod : "none";
}
const Wc = Te({ patchProp: jc }, xc);
let ws;
function Vc() {
  return ws || (ws = ec(Wc));
}
const Gc = (...e) => {
  const t = Vc().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const o = Yc(r);
      if (!o) return;
      const s = t._component;
      !X(s) && !s.render && !s.template && (s.template = o.innerHTML),
        (o.innerHTML = "");
      const i = n(o, !1, o instanceof SVGElement);
      return (
        o instanceof Element &&
          (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function Yc(e) {
  return Ce(e) ? document.querySelector(e) : e;
}
const Oe = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
  },
  Jc = {},
  Qc = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": "true",
    role: "img",
    width: "24",
    height: "24",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 448 512",
  },
  Xc = x(
    "path",
    {
      d: "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z",
      fill: "currentColor",
    },
    null,
    -1
  ),
  Zc = [Xc];
function eu(e, t) {
  return Z(), ae("svg", Qc, Zc);
}
const tu = Oe(Jc, [["render", eu]]),
  nu = {},
  ru = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": "true",
    role: "img",
    width: "28",
    height: "24",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 448 512",
  },
  ou = x(
    "path",
    {
      d: "M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z",
      fill: "currentColor",
    },
    null,
    -1
  ),
  su = [ou];
function iu(e, t) {
  return Z(), ae("svg", ru, su);
}
const au = Oe(nu, [["render", iu]]),
  lu = {},
  cu = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": "true",
    role: "img",
    width: "24",
    height: "24",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 448 512",
  },
  uu = x(
    "path",
    {
      d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z",
      fill: "currentColor",
    },
    null,
    -1
  ),
  fu = [uu];
function du(e, t) {
  return Z(), ae("svg", cu, fu);
}
const pu = Oe(lu, [["render", du]]),
  hu = {},
  mu = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": "true",
    role: "img",
    width: "30",
    height: "24",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 448 512",
  },
  gu = x(
    "path",
    {
      d: "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z",
      fill: "currentColor",
    },
    null,
    -1
  ),
  vu = [gu];
function _u(e, t) {
  return Z(), ae("svg", mu, vu);
}
const bu = Oe(hu, [["render", _u]]),
  yu = {},
  wu = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": "true",
    role: "img",
    width: "24",
    height: "24",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 448 512",
  },
  xu = x(
    "path",
    {
      d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
      fill: "currentColor",
    },
    null,
    -1
  ),
  Eu = [xu];
function Cu(e, t) {
  return Z(), ae("svg", wu, Eu);
}
const Ou = Oe(yu, [["render", Cu]]),
  Pu = {},
  Su = {
    xxmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": "true",
    role: "img",
    width: "24",
    height: "24",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 448 512",
  },
  $u = x(
    "path",
    {
      d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z",
      fill: "currentColor",
    },
    null,
    -1
  ),
  Au = [$u];
function Tu(e, t) {
  return Z(), ae("svg", Su, Au);
}
const Ru = Oe(Pu, [["render", Tu]]);
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const qt = typeof window < "u";
function Mu(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const le = Object.assign;
function Tr(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = Qe(o) ? o.map(e) : e(o);
  }
  return n;
}
const bn = () => {},
  Qe = Array.isArray,
  Iu = /\/$/,
  ku = (e) => e.replace(Iu, "");
function Rr(e, t, n = "/") {
  let r,
    o = {},
    s = "",
    i = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 &&
      ((r = t.slice(0, l)),
      (s = t.slice(l + 1, a > -1 ? a : t.length)),
      (o = e(s))),
    a > -1 && ((r = r || t.slice(0, a)), (i = t.slice(a, t.length))),
    (r = Bu(r ?? t, n)),
    { fullPath: r + (s && "?") + s + i, path: r, query: o, hash: i }
  );
}
function Nu(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function xs(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function ju(e, t, n) {
  const r = t.matched.length - 1,
    o = n.matched.length - 1;
  return (
    r > -1 &&
    r === o &&
    Xt(t.matched[r], n.matched[o]) &&
    qi(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Xt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function qi(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Lu(e[n], t[n])) return !1;
  return !0;
}
function Lu(e, t) {
  return Qe(e) ? Es(e, t) : Qe(t) ? Es(t, e) : e === t;
}
function Es(e, t) {
  return Qe(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function Bu(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/");
  let o = n.length - 1,
    s,
    i;
  for (s = 0; s < r.length; s++)
    if (((i = r[s]), i !== "."))
      if (i === "..") o > 1 && o--;
      else break;
  return (
    n.slice(0, o).join("/") +
    "/" +
    r.slice(s - (s === r.length ? 1 : 0)).join("/")
  );
}
var $n;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})($n || ($n = {}));
var yn;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(yn || (yn = {}));
function Du(e) {
  if (!e)
    if (qt) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), ku(e);
}
const Hu = /^[^#]+#/;
function Fu(e, t) {
  return e.replace(Hu, "#") + t;
}
function zu(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const yr = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function qu(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      o =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!o) return;
    t = zu(o, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function Cs(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Qr = new Map();
function Uu(e, t) {
  Qr.set(e, t);
}
function Ku(e) {
  const t = Qr.get(e);
  return Qr.delete(e), t;
}
let Wu = () => location.protocol + "//" + location.host;
function Ui(e, t) {
  const { pathname: n, search: r, hash: o } = t,
    s = e.indexOf("#");
  if (s > -1) {
    let a = o.includes(e.slice(s)) ? e.slice(s).length : 1,
      l = o.slice(a);
    return l[0] !== "/" && (l = "/" + l), xs(l, "");
  }
  return xs(n, e) + r + o;
}
function Vu(e, t, n, r) {
  let o = [],
    s = [],
    i = null;
  const a = ({ state: h }) => {
    const m = Ui(e, location),
      w = n.value,
      b = t.value;
    let $ = 0;
    if (h) {
      if (((n.value = m), (t.value = h), i && i === w)) {
        i = null;
        return;
      }
      $ = b ? h.position - b.position : 0;
    } else r(m);
    o.forEach((C) => {
      C(n.value, w, {
        delta: $,
        type: $n.pop,
        direction: $ ? ($ > 0 ? yn.forward : yn.back) : yn.unknown,
      });
    });
  };
  function l() {
    i = n.value;
  }
  function u(h) {
    o.push(h);
    const m = () => {
      const w = o.indexOf(h);
      w > -1 && o.splice(w, 1);
    };
    return s.push(m), m;
  }
  function c() {
    const { history: h } = window;
    h.state && h.replaceState(le({}, h.state, { scroll: yr() }), "");
  }
  function p() {
    for (const h of s) h();
    (s = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", c);
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", c),
    { pauseListeners: l, listen: u, destroy: p }
  );
}
function Os(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? yr() : null,
  };
}
function Gu(e) {
  const { history: t, location: n } = window,
    r = { value: Ui(e, n) },
    o = { value: t.state };
  o.value ||
    s(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function s(l, u, c) {
    const p = e.indexOf("#"),
      h =
        p > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(p)) + l
          : Wu() + e + l;
    try {
      t[c ? "replaceState" : "pushState"](u, "", h), (o.value = u);
    } catch (m) {
      console.error(m), n[c ? "replace" : "assign"](h);
    }
  }
  function i(l, u) {
    const c = le({}, t.state, Os(o.value.back, l, o.value.forward, !0), u, {
      position: o.value.position,
    });
    s(l, c, !0), (r.value = l);
  }
  function a(l, u) {
    const c = le({}, o.value, t.state, { forward: l, scroll: yr() });
    s(c.current, c, !0);
    const p = le({}, Os(r.value, l, null), { position: c.position + 1 }, u);
    s(l, p, !1), (r.value = l);
  }
  return { location: r, state: o, push: a, replace: i };
}
function Yu(e) {
  e = Du(e);
  const t = Gu(e),
    n = Vu(e, t.state, t.location, t.replace);
  function r(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const o = le(
    { location: "", base: e, go: r, createHref: Fu.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(o, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(o, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    o
  );
}
function Ju(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ""),
    e.includes("#") || (e += "#"),
    Yu(e)
  );
}
function Qu(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Ki(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const _t = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Wi = Symbol("");
var Ps;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Ps || (Ps = {}));
function Zt(e, t) {
  return le(new Error(), { type: e, [Wi]: !0 }, t);
}
function lt(e, t) {
  return e instanceof Error && Wi in e && (t == null || !!(e.type & t));
}
const Ss = "[^/]+?",
  Xu = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Zu = /[.+*?^${}()[\]/\\]/g;
function ef(e, t) {
  const n = le({}, Xu, t),
    r = [];
  let o = n.start ? "^" : "";
  const s = [];
  for (const u of e) {
    const c = u.length ? [] : [90];
    n.strict && !u.length && (o += "/");
    for (let p = 0; p < u.length; p++) {
      const h = u[p];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0)
        p || (o += "/"), (o += h.value.replace(Zu, "\\$&")), (m += 40);
      else if (h.type === 1) {
        const { value: w, repeatable: b, optional: $, regexp: C } = h;
        s.push({ name: w, repeatable: b, optional: $ });
        const M = C || Ss;
        if (M !== Ss) {
          m += 10;
          try {
            new RegExp(`(${M})`);
          } catch (A) {
            throw new Error(
              `Invalid custom RegExp for param "${w}" (${M}): ` + A.message
            );
          }
        }
        let S = b ? `((?:${M})(?:/(?:${M}))*)` : `(${M})`;
        p || (S = $ && u.length < 2 ? `(?:/${S})` : "/" + S),
          $ && (S += "?"),
          (o += S),
          (m += 20),
          $ && (m += -8),
          b && (m += -20),
          M === ".*" && (m += -50);
      }
      c.push(m);
    }
    r.push(c);
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? (o += "$") : n.strict && (o += "(?:/|$)");
  const i = new RegExp(o, n.sensitive ? "" : "i");
  function a(u) {
    const c = u.match(i),
      p = {};
    if (!c) return null;
    for (let h = 1; h < c.length; h++) {
      const m = c[h] || "",
        w = s[h - 1];
      p[w.name] = m && w.repeatable ? m.split("/") : m;
    }
    return p;
  }
  function l(u) {
    let c = "",
      p = !1;
    for (const h of e) {
      (!p || !c.endsWith("/")) && (c += "/"), (p = !1);
      for (const m of h)
        if (m.type === 0) c += m.value;
        else if (m.type === 1) {
          const { value: w, repeatable: b, optional: $ } = m,
            C = w in u ? u[w] : "";
          if (Qe(C) && !b)
            throw new Error(
              `Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`
            );
          const M = Qe(C) ? C.join("/") : C;
          if (!M)
            if ($)
              h.length < 2 &&
                (c.endsWith("/") ? (c = c.slice(0, -1)) : (p = !0));
            else throw new Error(`Missing required param "${w}"`);
          c += M;
        }
    }
    return c || "/";
  }
  return { re: i, score: r, keys: s, parse: a, stringify: l };
}
function tf(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function nf(e, t) {
  let n = 0;
  const r = e.score,
    o = t.score;
  for (; n < r.length && n < o.length; ) {
    const s = tf(r[n], o[n]);
    if (s) return s;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if ($s(r)) return 1;
    if ($s(o)) return -1;
  }
  return o.length - r.length;
}
function $s(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const rf = { type: 0, value: "" },
  of = /[a-zA-Z0-9_]/;
function sf(e) {
  if (!e) return [[]];
  if (e === "/") return [[rf]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${u}": ${m}`);
  }
  let n = 0,
    r = n;
  const o = [];
  let s;
  function i() {
    s && o.push(s), (s = []);
  }
  let a = 0,
    l,
    u = "",
    c = "";
  function p() {
    u &&
      (n === 0
        ? s.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
        ? (s.length > 1 &&
            (l === "*" || l === "+") &&
            t(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
            ),
          s.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : t("Invalid state to consume buffer"),
      (u = ""));
  }
  function h() {
    u += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (u && p(), i()) : l === ":" ? (p(), (n = 1)) : h();
        break;
      case 4:
        h(), (n = r);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : of.test(l)
          ? h()
          : (p(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")"
          ? c[c.length - 1] == "\\"
            ? (c = c.slice(0, -1) + l)
            : (n = 3)
          : (c += l);
        break;
      case 3:
        p(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--, (c = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), p(), i(), o;
}
function af(e, t, n) {
  const r = ef(sf(e.path), n),
    o = le(r, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function lf(e, t) {
  const n = [],
    r = new Map();
  t = Rs({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(c) {
    return r.get(c);
  }
  function s(c, p, h) {
    const m = !h,
      w = cf(c);
    w.aliasOf = h && h.record;
    const b = Rs(t, c),
      $ = [w];
    if ("alias" in c) {
      const S = typeof c.alias == "string" ? [c.alias] : c.alias;
      for (const A of S)
        $.push(
          le({}, w, {
            components: h ? h.record.components : w.components,
            path: A,
            aliasOf: h ? h.record : w,
          })
        );
    }
    let C, M;
    for (const S of $) {
      const { path: A } = S;
      if (p && A[0] !== "/") {
        const F = p.record.path,
          U = F[F.length - 1] === "/" ? "" : "/";
        S.path = p.record.path + (A && U + A);
      }
      if (
        ((C = af(S, p, b)),
        h
          ? h.alias.push(C)
          : ((M = M || C),
            M !== C && M.alias.push(C),
            m && c.name && !Ts(C) && i(c.name)),
        w.children)
      ) {
        const F = w.children;
        for (let U = 0; U < F.length; U++) s(F[U], C, h && h.children[U]);
      }
      (h = h || C),
        ((C.record.components && Object.keys(C.record.components).length) ||
          C.record.name ||
          C.record.redirect) &&
          l(C);
    }
    return M
      ? () => {
          i(M);
        }
      : bn;
  }
  function i(c) {
    if (Ki(c)) {
      const p = r.get(c);
      p &&
        (r.delete(c),
        n.splice(n.indexOf(p), 1),
        p.children.forEach(i),
        p.alias.forEach(i));
    } else {
      const p = n.indexOf(c);
      p > -1 &&
        (n.splice(p, 1),
        c.record.name && r.delete(c.record.name),
        c.children.forEach(i),
        c.alias.forEach(i));
    }
  }
  function a() {
    return n;
  }
  function l(c) {
    let p = 0;
    for (
      ;
      p < n.length &&
      nf(c, n[p]) >= 0 &&
      (c.record.path !== n[p].record.path || !Vi(c, n[p]));

    )
      p++;
    n.splice(p, 0, c), c.record.name && !Ts(c) && r.set(c.record.name, c);
  }
  function u(c, p) {
    let h,
      m = {},
      w,
      b;
    if ("name" in c && c.name) {
      if (((h = r.get(c.name)), !h)) throw Zt(1, { location: c });
      (b = h.record.name),
        (m = le(
          As(
            p.params,
            h.keys.filter((M) => !M.optional).map((M) => M.name)
          ),
          c.params &&
            As(
              c.params,
              h.keys.map((M) => M.name)
            )
        )),
        (w = h.stringify(m));
    } else if ("path" in c)
      (w = c.path),
        (h = n.find((M) => M.re.test(w))),
        h && ((m = h.parse(w)), (b = h.record.name));
    else {
      if (((h = p.name ? r.get(p.name) : n.find((M) => M.re.test(p.path))), !h))
        throw Zt(1, { location: c, currentLocation: p });
      (b = h.record.name),
        (m = le({}, p.params, c.params)),
        (w = h.stringify(m));
    }
    const $ = [];
    let C = h;
    for (; C; ) $.unshift(C.record), (C = C.parent);
    return { name: b, path: w, params: m, matched: $, meta: ff($) };
  }
  return (
    e.forEach((c) => s(c)),
    {
      addRoute: s,
      resolve: u,
      removeRoute: i,
      getRoutes: a,
      getRecordMatcher: o,
    }
  );
}
function As(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function cf(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: uf(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function uf(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "boolean" ? n : n[r];
  return t;
}
function Ts(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function ff(e) {
  return e.reduce((t, n) => le(t, n.meta), {});
}
function Rs(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function Vi(e, t) {
  return t.children.some((n) => n === e || Vi(e, n));
}
const Gi = /#/g,
  df = /&/g,
  pf = /\//g,
  hf = /=/g,
  mf = /\?/g,
  Yi = /\+/g,
  gf = /%5B/g,
  vf = /%5D/g,
  Ji = /%5E/g,
  _f = /%60/g,
  Qi = /%7B/g,
  bf = /%7C/g,
  Xi = /%7D/g,
  yf = /%20/g;
function So(e) {
  return encodeURI("" + e)
    .replace(bf, "|")
    .replace(gf, "[")
    .replace(vf, "]");
}
function wf(e) {
  return So(e).replace(Qi, "{").replace(Xi, "}").replace(Ji, "^");
}
function Xr(e) {
  return So(e)
    .replace(Yi, "%2B")
    .replace(yf, "+")
    .replace(Gi, "%23")
    .replace(df, "%26")
    .replace(_f, "`")
    .replace(Qi, "{")
    .replace(Xi, "}")
    .replace(Ji, "^");
}
function xf(e) {
  return Xr(e).replace(hf, "%3D");
}
function Ef(e) {
  return So(e).replace(Gi, "%23").replace(mf, "%3F");
}
function Cf(e) {
  return e == null ? "" : Ef(e).replace(pf, "%2F");
}
function sr(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function Of(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < r.length; ++o) {
    const s = r[o].replace(Yi, " "),
      i = s.indexOf("="),
      a = sr(i < 0 ? s : s.slice(0, i)),
      l = i < 0 ? null : sr(s.slice(i + 1));
    if (a in t) {
      let u = t[a];
      Qe(u) || (u = t[a] = [u]), u.push(l);
    } else t[a] = l;
  }
  return t;
}
function Ms(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = xf(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Qe(r) ? r.map((s) => s && Xr(s)) : [r && Xr(r)]).forEach((s) => {
      s !== void 0 &&
        ((t += (t.length ? "&" : "") + n), s != null && (t += "=" + s));
    });
  }
  return t;
}
function Pf(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = Qe(r)
        ? r.map((o) => (o == null ? null : "" + o))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
const Sf = Symbol(""),
  Is = Symbol(""),
  $o = Symbol(""),
  Zi = Symbol(""),
  Zr = Symbol("");
function pn() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const o = e.indexOf(r);
        o > -1 && e.splice(o, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function yt(e, t, n, r, o) {
  const s = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () =>
    new Promise((i, a) => {
      const l = (p) => {
          p === !1
            ? a(Zt(4, { from: n, to: t }))
            : p instanceof Error
            ? a(p)
            : Qu(p)
            ? a(Zt(2, { from: t, to: p }))
            : (s &&
                r.enterCallbacks[o] === s &&
                typeof p == "function" &&
                s.push(p),
              i());
        },
        u = e.call(r && r.instances[o], t, n, l);
      let c = Promise.resolve(u);
      e.length < 3 && (c = c.then(l)), c.catch((p) => a(p));
    });
}
function Mr(e, t, n, r) {
  const o = [];
  for (const s of e)
    for (const i in s.components) {
      let a = s.components[i];
      if (!(t !== "beforeRouteEnter" && !s.instances[i]))
        if ($f(a)) {
          const u = (a.__vccOpts || a)[t];
          u && o.push(yt(u, n, r, s, i));
        } else {
          let l = a();
          o.push(() =>
            l.then((u) => {
              if (!u)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${s.path}"`)
                );
              const c = Mu(u) ? u.default : u;
              s.components[i] = c;
              const h = (c.__vccOpts || c)[t];
              return h && yt(h, n, r, s, i)();
            })
          );
        }
    }
  return o;
}
function $f(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function ks(e) {
  const t = ut($o),
    n = ut(Zi),
    r = $e(() => t.resolve(Le(e.to))),
    o = $e(() => {
      const { matched: l } = r.value,
        { length: u } = l,
        c = l[u - 1],
        p = n.matched;
      if (!c || !p.length) return -1;
      const h = p.findIndex(Xt.bind(null, c));
      if (h > -1) return h;
      const m = Ns(l[u - 2]);
      return u > 1 && Ns(c) === m && p[p.length - 1].path !== m
        ? p.findIndex(Xt.bind(null, l[u - 2]))
        : h;
    }),
    s = $e(() => o.value > -1 && Rf(n.params, r.value.params)),
    i = $e(
      () =>
        o.value > -1 &&
        o.value === n.matched.length - 1 &&
        qi(n.params, r.value.params)
    );
  function a(l = {}) {
    return Tf(l)
      ? t[Le(e.replace) ? "replace" : "push"](Le(e.to)).catch(bn)
      : Promise.resolve();
  }
  return {
    route: r,
    href: $e(() => r.value.href),
    isActive: s,
    isExactActive: i,
    navigate: a,
  };
}
const Af = bo({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: ks,
    setup(e, { slots: t }) {
      const n = sn(ks(e)),
        { options: r } = ut($o),
        o = $e(() => ({
          [js(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [js(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const s = t.default && t.default(n);
        return e.custom
          ? s
          : Po(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value,
              },
              s
            );
      };
    },
  }),
  ea = Af;
function Tf(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Rf(e, t) {
  for (const n in t) {
    const r = t[n],
      o = e[n];
    if (typeof r == "string") {
      if (r !== o) return !1;
    } else if (!Qe(o) || o.length !== r.length || r.some((s, i) => s !== o[i]))
      return !1;
  }
  return !0;
}
function Ns(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const js = (e, t, n) => e ?? t ?? n,
  Mf = bo({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = ut(Zr),
        o = $e(() => e.route || r.value),
        s = ut(Is, 0),
        i = $e(() => {
          let u = Le(s);
          const { matched: c } = o.value;
          let p;
          for (; (p = c[u]) && !p.components; ) u++;
          return u;
        }),
        a = $e(() => o.value.matched[i.value]);
      Gn(
        Is,
        $e(() => i.value + 1)
      ),
        Gn(Sf, a),
        Gn(Zr, o);
      const l = Ut();
      return (
        ft(
          () => [l.value, a.value, e.name],
          ([u, c, p], [h, m, w]) => {
            c &&
              ((c.instances[p] = u),
              m &&
                m !== c &&
                u &&
                u === h &&
                (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards),
                c.updateGuards.size || (c.updateGuards = m.updateGuards))),
              u &&
                c &&
                (!m || !Xt(c, m) || !h) &&
                (c.enterCallbacks[p] || []).forEach((b) => b(u));
          },
          { flush: "post" }
        ),
        () => {
          const u = o.value,
            c = e.name,
            p = a.value,
            h = p && p.components[c];
          if (!h) return Ls(n.default, { Component: h, route: u });
          const m = p.props[c],
            w = m
              ? m === !0
                ? u.params
                : typeof m == "function"
                ? m(u)
                : m
              : null,
            $ = Po(
              h,
              le({}, w, t, {
                onVnodeUnmounted: (C) => {
                  C.component.isUnmounted && (p.instances[c] = null);
                },
                ref: l,
              })
            );
          return Ls(n.default, { Component: $, route: u }) || $;
        }
      );
    },
  });
function Ls(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const If = Mf;
function kf(e) {
  const t = lf(e.routes, e),
    n = e.parseQuery || Of,
    r = e.stringifyQuery || Ms,
    o = e.history,
    s = pn(),
    i = pn(),
    a = pn(),
    l = il(_t);
  let u = _t;
  qt &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const c = Tr.bind(null, (_) => "" + _),
    p = Tr.bind(null, Cf),
    h = Tr.bind(null, sr);
  function m(_, k) {
    let R, L;
    return (
      Ki(_) ? ((R = t.getRecordMatcher(_)), (L = k)) : (L = _), t.addRoute(L, R)
    );
  }
  function w(_) {
    const k = t.getRecordMatcher(_);
    k && t.removeRoute(k);
  }
  function b() {
    return t.getRoutes().map((_) => _.record);
  }
  function $(_) {
    return !!t.getRecordMatcher(_);
  }
  function C(_, k) {
    if (((k = le({}, k || l.value)), typeof _ == "string")) {
      const f = Rr(n, _, k.path),
        d = t.resolve({ path: f.path }, k),
        g = o.createHref(f.fullPath);
      return le(f, d, {
        params: h(d.params),
        hash: sr(f.hash),
        redirectedFrom: void 0,
        href: g,
      });
    }
    let R;
    if ("path" in _) R = le({}, _, { path: Rr(n, _.path, k.path).path });
    else {
      const f = le({}, _.params);
      for (const d in f) f[d] == null && delete f[d];
      (R = le({}, _, { params: p(_.params) })), (k.params = p(k.params));
    }
    const L = t.resolve(R, k),
      ee = _.hash || "";
    L.params = c(h(L.params));
    const de = Nu(r, le({}, _, { hash: wf(ee), path: L.path })),
      Q = o.createHref(de);
    return le(
      { fullPath: de, hash: ee, query: r === Ms ? Pf(_.query) : _.query || {} },
      L,
      { redirectedFrom: void 0, href: Q }
    );
  }
  function M(_) {
    return typeof _ == "string" ? Rr(n, _, l.value.path) : le({}, _);
  }
  function S(_, k) {
    if (u !== _) return Zt(8, { from: k, to: _ });
  }
  function A(_) {
    return Y(_);
  }
  function F(_) {
    return A(le(M(_), { replace: !0 }));
  }
  function U(_) {
    const k = _.matched[_.matched.length - 1];
    if (k && k.redirect) {
      const { redirect: R } = k;
      let L = typeof R == "function" ? R(_) : R;
      return (
        typeof L == "string" &&
          ((L = L.includes("?") || L.includes("#") ? (L = M(L)) : { path: L }),
          (L.params = {})),
        le(
          { query: _.query, hash: _.hash, params: "path" in L ? {} : _.params },
          L
        )
      );
    }
  }
  function Y(_, k) {
    const R = (u = C(_)),
      L = l.value,
      ee = _.state,
      de = _.force,
      Q = _.replace === !0,
      f = U(R);
    if (f)
      return Y(
        le(M(f), {
          state: typeof f == "object" ? le({}, ee, f.state) : ee,
          force: de,
          replace: Q,
        }),
        k || R
      );
    const d = R;
    d.redirectedFrom = k;
    let g;
    return (
      !de &&
        ju(r, L, R) &&
        ((g = Zt(16, { to: d, from: L })), ge(L, L, !0, !1)),
      (g ? Promise.resolve(g) : z(d, L))
        .catch((v) => (lt(v) ? (lt(v, 2) ? v : fe(v)) : ne(v, d, L)))
        .then((v) => {
          if (v) {
            if (lt(v, 2))
              return Y(
                le({ replace: Q }, M(v.to), {
                  state: typeof v.to == "object" ? le({}, ee, v.to.state) : ee,
                  force: de,
                }),
                k || d
              );
          } else v = oe(d, L, !0, Q, ee);
          return J(d, L, v), v;
        })
    );
  }
  function j(_, k) {
    const R = S(_, k);
    return R ? Promise.reject(R) : Promise.resolve();
  }
  function z(_, k) {
    let R;
    const [L, ee, de] = Nf(_, k);
    R = Mr(L.reverse(), "beforeRouteLeave", _, k);
    for (const f of L)
      f.leaveGuards.forEach((d) => {
        R.push(yt(d, _, k));
      });
    const Q = j.bind(null, _, k);
    return (
      R.push(Q),
      zt(R)
        .then(() => {
          R = [];
          for (const f of s.list()) R.push(yt(f, _, k));
          return R.push(Q), zt(R);
        })
        .then(() => {
          R = Mr(ee, "beforeRouteUpdate", _, k);
          for (const f of ee)
            f.updateGuards.forEach((d) => {
              R.push(yt(d, _, k));
            });
          return R.push(Q), zt(R);
        })
        .then(() => {
          R = [];
          for (const f of _.matched)
            if (f.beforeEnter && !k.matched.includes(f))
              if (Qe(f.beforeEnter))
                for (const d of f.beforeEnter) R.push(yt(d, _, k));
              else R.push(yt(f.beforeEnter, _, k));
          return R.push(Q), zt(R);
        })
        .then(
          () => (
            _.matched.forEach((f) => (f.enterCallbacks = {})),
            (R = Mr(de, "beforeRouteEnter", _, k)),
            R.push(Q),
            zt(R)
          )
        )
        .then(() => {
          R = [];
          for (const f of i.list()) R.push(yt(f, _, k));
          return R.push(Q), zt(R);
        })
        .catch((f) => (lt(f, 8) ? f : Promise.reject(f)))
    );
  }
  function J(_, k, R) {
    for (const L of a.list()) L(_, k, R);
  }
  function oe(_, k, R, L, ee) {
    const de = S(_, k);
    if (de) return de;
    const Q = k === _t,
      f = qt ? history.state : {};
    R &&
      (L || Q
        ? o.replace(_.fullPath, le({ scroll: Q && f && f.scroll }, ee))
        : o.push(_.fullPath, ee)),
      (l.value = _),
      ge(_, k, R, Q),
      fe();
  }
  let N;
  function W() {
    N ||
      (N = o.listen((_, k, R) => {
        if (!Be.listening) return;
        const L = C(_),
          ee = U(L);
        if (ee) {
          Y(le(ee, { replace: !0 }), L).catch(bn);
          return;
        }
        u = L;
        const de = l.value;
        qt && Uu(Cs(de.fullPath, R.delta), yr()),
          z(L, de)
            .catch((Q) =>
              lt(Q, 12)
                ? Q
                : lt(Q, 2)
                ? (Y(Q.to, L)
                    .then((f) => {
                      lt(f, 20) &&
                        !R.delta &&
                        R.type === $n.pop &&
                        o.go(-1, !1);
                    })
                    .catch(bn),
                  Promise.reject())
                : (R.delta && o.go(-R.delta, !1), ne(Q, L, de))
            )
            .then((Q) => {
              (Q = Q || oe(L, de, !1)),
                Q &&
                  (R.delta && !lt(Q, 8)
                    ? o.go(-R.delta, !1)
                    : R.type === $n.pop && lt(Q, 20) && o.go(-1, !1)),
                J(L, de, Q);
            })
            .catch(bn);
      }));
  }
  let ue = pn(),
    Pe = pn(),
    te;
  function ne(_, k, R) {
    fe(_);
    const L = Pe.list();
    return (
      L.length ? L.forEach((ee) => ee(_, k, R)) : console.error(_),
      Promise.reject(_)
    );
  }
  function V() {
    return te && l.value !== _t
      ? Promise.resolve()
      : new Promise((_, k) => {
          ue.add([_, k]);
        });
  }
  function fe(_) {
    return (
      te ||
        ((te = !_),
        W(),
        ue.list().forEach(([k, R]) => (_ ? R(_) : k())),
        ue.reset()),
      _
    );
  }
  function ge(_, k, R, L) {
    const { scrollBehavior: ee } = e;
    if (!qt || !ee) return Promise.resolve();
    const de =
      (!R && Ku(Cs(_.fullPath, 0))) ||
      ((L || !R) && history.state && history.state.scroll) ||
      null;
    return vo()
      .then(() => ee(_, k, de))
      .then((Q) => Q && qu(Q))
      .catch((Q) => ne(Q, _, k));
  }
  const be = (_) => o.go(_);
  let ye;
  const Ke = new Set(),
    Be = {
      currentRoute: l,
      listening: !0,
      addRoute: m,
      removeRoute: w,
      hasRoute: $,
      getRoutes: b,
      resolve: C,
      options: e,
      push: A,
      replace: F,
      go: be,
      back: () => be(-1),
      forward: () => be(1),
      beforeEach: s.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: Pe.add,
      isReady: V,
      install(_) {
        const k = this;
        _.component("RouterLink", ea),
          _.component("RouterView", If),
          (_.config.globalProperties.$router = k),
          Object.defineProperty(_.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Le(l),
          }),
          qt &&
            !ye &&
            l.value === _t &&
            ((ye = !0), A(o.location).catch((ee) => {}));
        const R = {};
        for (const ee in _t) R[ee] = $e(() => l.value[ee]);
        _.provide($o, k), _.provide(Zi, sn(R)), _.provide(Zr, l);
        const L = _.unmount;
        Ke.add(_),
          (_.unmount = function () {
            Ke.delete(_),
              Ke.size < 1 &&
                ((u = _t),
                N && N(),
                (N = null),
                (l.value = _t),
                (ye = !1),
                (te = !1)),
              L();
          });
      },
    };
  return Be;
}
function zt(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function Nf(e, t) {
  const n = [],
    r = [],
    o = [],
    s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const a = t.matched[i];
    a && (e.matched.find((u) => Xt(u, a)) ? r.push(a) : n.push(a));
    const l = e.matched[i];
    l && (t.matched.find((u) => Xt(u, l)) || o.push(l));
  }
  return [n, r, o];
}
const jf = {
    name: "NavBar",
    components: {
      BarsIcon: tu,
      PhoneIcon: au,
      GithubIcon: pu,
      EmailIcon: bu,
      LinkedinIcon: Ou,
      WhatsappIcon: Ru,
      RouterLink: ea,
    },
    data() {
      return { show: !1 };
    },
    watch: {
      show(e) {
        e
          ? setTimeout(() => {
              document.addEventListener("click", this.handleClickOutside);
            }, 0)
          : document.removeEventListener("click", this.handleClickOutside);
      },
    },
    methods: {
      toggleMenu(e) {
        e && e.stopPropagation(), (this.show = !this.show);
      },
      closeMenu() {
        this.show = !1;
      },
      handleClickOutside(e) {
        const t = this.$refs.navbarToggleButton,
          n = this.$refs.navbarMenu;
        t &&
          !t.contains(e.target) &&
          n &&
          !n.contains(e.target) &&
          this.closeMenu();
      },
    },
    beforeUnmount() {
      document.removeEventListener("click", this.handleClickOutside);
    },
  },
  Nn = (e) => (an("data-v-9eb0f58e"), (e = e()), ln(), e),
  Lf = { class: "navbar", id: "navbar" },
  Bf = { class: "nav-container-icons" },
  Df = { class: "items" },
  Hf = { href: "https://github.com/larajosed", target: "_blank" },
  Ff = { class: "items" },
  zf = { href: "https://linkedin.com/in/joselarameza", target: "_blank" },
  qf = { class: "items" },
  Uf = { href: "mailto:larajosed@gmail.com" },
  Kf = { class: "items" },
  Wf = { href: "tel:+34693537526" },
  Vf = { class: "items" },
  Gf = {
    href: "https://api.whatsapp.com/send/?phone=346935537526",
    target: "_blank",
  },
  Yf = { key: 0, class: "container-fluid", ref: "navbarMenu" },
  Jf = { class: "navbar-nav" },
  Qf = Nn(() => x("div", { class: "nav-item" }, "SOBRE MÍ", -1)),
  Xf = Nn(() => x("div", { class: "nav-item" }, "FORMACIÓN", -1)),
  Zf = Nn(() => x("div", { class: "nav-item" }, "EXPERIENCIA PROFESIONAL", -1)),
  ed = Nn(() => x("div", { class: "nav-item" }, "PROYECTOS", -1)),
  td = Nn(() => x("div", { class: "nav-item" }, "TECNOLOGÍAS", -1));
function nd(e, t, n, r, o, s) {
  const i = Ee("GithubIcon"),
    a = Ee("LinkedinIcon"),
    l = Ee("EmailIcon"),
    u = Ee("phone-icon"),
    c = Ee("WhatsappIcon"),
    p = Ee("BarsIcon"),
    h = Ee("router-link");
  return (
    Z(),
    ae("nav", Lf, [
      x("div", Bf, [
        x("div", Df, [x("a", Hf, [q(i)])]),
        x("div", Ff, [x("a", zf, [q(a)])]),
        x("div", qf, [x("a", Uf, [q(l)])]),
        x("div", Kf, [x("a", Wf, [q(u)])]),
        x("div", Vf, [x("a", Gf, [q(c)])]),
        x(
          "div",
          {
            class: "item-bar",
            onClick: t[0] || (t[0] = (m) => s.toggleMenu()),
            ref: "navbarToggleButton",
          },
          [q(p)],
          512
        ),
      ]),
      q(
        kn,
        { name: "slide-fade" },
        {
          default: _e(() => [
            o.show
              ? (Z(),
                ae(
                  "div",
                  Yf,
                  [
                    x("div", Jf, [
                      q(
                        h,
                        {
                          to: "/about",
                          class: "text",
                          onClick: t[1] || (t[1] = (m) => s.closeMenu()),
                        },
                        { default: _e(() => [Qf]), _: 1 }
                      ),
                      q(
                        h,
                        {
                          to: "/training",
                          class: "text",
                          onClick: t[2] || (t[2] = (m) => s.closeMenu()),
                        },
                        { default: _e(() => [Xf]), _: 1 }
                      ),
                      q(
                        h,
                        {
                          to: "/experience",
                          class: "text",
                          onClick: t[3] || (t[3] = (m) => s.closeMenu()),
                        },
                        { default: _e(() => [Zf]), _: 1 }
                      ),
                      q(
                        h,
                        {
                          to: "/projects",
                          class: "text",
                          onClick: t[4] || (t[4] = (m) => s.closeMenu()),
                        },
                        { default: _e(() => [ed]), _: 1 }
                      ),
                      q(
                        h,
                        {
                          to: "/technologies",
                          class: "text",
                          onClick: t[5] || (t[5] = (m) => s.closeMenu()),
                        },
                        { default: _e(() => [td]), _: 1 }
                      ),
                    ]),
                  ],
                  512
                ))
              : Eo("", !0),
          ]),
          _: 1,
        }
      ),
    ])
  );
}
const rd = Oe(jf, [
  ["render", nd],
  ["__scopeId", "data-v-9eb0f58e"],
]);
const od = {
    components: { Navbar: rd },
    data() {
      return {};
    },
  },
  sd = { id: "app" };
function id(e, t, n, r, o, s) {
  const i = Ee("Navbar"),
    a = Ee("RouterView");
  return Z(), ae("div", sd, [q(i), x("main", null, [q(a)])]);
}
const ad = Oe(od, [["render", id]]);
const ld = {
    name: "TitleStructure",
    props: { titleText: { type: String, required: !0 } },
  },
  cd = (e) => (an("data-v-39011d3a"), (e = e()), ln(), e),
  ud = { class: "container projects-section" },
  fd = { class: "title" },
  dd = cd(() => x("div", { class: "line" }, null, -1));
function pd(e, t, n, r, o, s) {
  return (
    Z(), ae("div", ud, [x("div", fd, [x("h1", null, wt(n.titleText), 1), dd])])
  );
}
const jn = Oe(ld, [
  ["render", pd],
  ["__scopeId", "data-v-39011d3a"],
]);
const hd = { name: "Abouts", components: { TitleStructure: jn } },
  md = (e) => (an("data-v-b5d4e563"), (e = e()), ln(), e),
  gd = md(() =>
    x(
      "section",
      null,
      [
        x("div", { class: "text" }, [
          x(
            "p",
            null,
            " Soy un profesional con formación continua y experiencia en el desarrollo de aplicaciones web full-stack. Me caracterizo por ser una persona resolutiva, orientada a resultados y con una gran pasión por el aprendizaje y el crecimiento profesional. Estoy acostumbrado a trabajar por proyectos, lo que me ha permitido desarrollar una mentalidad práctica y eficiente. "
          ),
          x(
            "p",
            null,
            " He finalizado mis estudios de Técnico Superior en Desarrollo de Aplicaciones Web, consolidando mis conocimientos y preparándome para nuevos desafíos. "
          ),
          x(
            "p",
            null,
            " Mi objetivo es iniciar mi carrera como desarrollador web junior en un entorno dinámico, donde pueda integrarme en un equipo, aportar valor, aprender y seguir potenciando mis habilidades. Estoy comprometido con el crecimiento continuo, tanto a nivel personal como profesional, y listo para asumir cada reto con entusiasmo, colaborando para alcanzar los objetivos del equipo. "
          ),
        ]),
      ],
      -1
    )
  );
function vd(e, t, n, r, o, s) {
  const i = Ee("TitleStructure");
  return Z(), ae(ve, null, [q(i, { titleText: "SOBRE MI" }), gd], 64);
}
const _d = Oe(hd, [
  ["render", vd],
  ["__scopeId", "data-v-b5d4e563"],
]);
const bd = {
    name: "BoxStructure",
    props: { jsonData: { type: Object, required: !0 } },
  },
  yd = (e) => (an("data-v-1d6ca5c9"), (e = e()), ln(), e),
  wd = { class: "fluid-box" },
  xd = { class: "logo-container" },
  Ed = ["src", "alt"],
  Cd = { class: "text-container" },
  Od = ["innerHTML"],
  Pd = { class: "containerDate" },
  Sd = yd(() => x("br", null, null, -1));
function $d(e, t, n, r, o, s) {
  return (
    Z(),
    ae("section", null, [
      x("div", wd, [
        x("div", xd, [
          x(
            "img",
            { class: "icon", src: n.jsonData.logo, alt: n.jsonData.title },
            null,
            8,
            Ed
          ),
        ]),
        x("div", Cd, [
          x("b", null, wt(n.jsonData.title), 1),
          (Z(!0),
          ae(
            ve,
            null,
            Jt(
              n.jsonData.mainParagraph,
              (i, a) => (Z(), ae("p", { key: a, innerHTML: i }, null, 8, Od))
            ),
            128
          )),
          x("div", Pd, [
            x("i", null, wt(n.jsonData.date), 1),
            Sd,
            x("i", null, wt(n.jsonData.country), 1),
          ]),
        ]),
      ]),
    ])
  );
}
const ta = Oe(bd, [
    ["render", $d],
    ["__scopeId", "data-v-1d6ca5c9"],
  ]),
  Ad = {
    name: "Training",
    data() {
      return {
        arrTrainnig: [
          {
            logo: "images/ilerna.png",
            title:
              "Ilerna FP: Técnico Superior en Desarrollo de Aplicaciones Web.",
            mainParagraph: [
              " Durante mis estudios en Ilerna FP, me especialicé en el desarrollo, implantación y mantenimiento de aplicaciones web robustas y eficientes. Adquirí conocimientos sólidos en la creación de APIs REST utilizando Node.js y tambien Spring Boot para el backend, gestionando bases de datos SQL de manera eficaz. También aprendí a diseñar interfaces de usuario intuitivas y responsivas con HTML, CSS y JavaScript, garantizando el acceso seguro a los datos y el cumplimiento de los estándares de accesibilidad, usabilidad y calidad.",
            ],
            date: "Feb. 2023 - May. 2025.",
            country: "Madrid, España.",
          },
          {
            logo: "images/idBootcamps.png",
            title: "ID Bootcamp: Programación y desarrollo web Full Stack.",
            mainParagraph: [
              "Adquirí habilidades integrales en el desarrollo de aplicaciones web full-stack, centrándome en el ecosistema JavaScript. Me especialicé en el potente stack MEAN (MongoDB, Express, Angular, Node.js), lo que me permite desenvolverme con soltura en cada etapa del ciclo de vida de una aplicación web.",
            ],
            date: "450 horas.",
            country: "Madrid, España.",
          },
        ],
      };
    },
    components: { TitleStructure: jn, BoxStructure: ta },
  };
function Td(e, t, n, r, o, s) {
  const i = Ee("TitleStructure"),
    a = Ee("BoxStructure");
  return (
    Z(),
    ae(
      ve,
      null,
      [
        q(i, { titleText: "FORMACIÓN" }),
        (Z(!0),
        ae(
          ve,
          null,
          Jt(
            o.arrTrainnig,
            (l) => (
              Z(), St(a, { jsonData: l, key: l.title }, null, 8, ["jsonData"])
            )
          ),
          128
        )),
      ],
      64
    )
  );
}
const Rd = Oe(Ad, [["render", Td]]);
const Md = {
    props: { jsonData: { type: Object, required: !0 } },
    data() {
      return { show: !1, sign: "+" };
    },
    methods: {
      showSnapshot: function () {
        this.show == !1
          ? ((this.sign = "-"), (this.show = !this.show))
          : ((this.sign = "+"), (this.show = !this.show));
      },
    },
  },
  Id = { class: "fluid-box" },
  kd = { class: "logo-container" },
  Nd = ["src", "alt"],
  jd = { class: "text-container" },
  Ld = ["innerHTML"],
  Bd = { class: "images-container" },
  Dd = { class: "slider" },
  Hd = ["src"],
  Fd = { class: "sign" };
function zd(e, t, n, r, o, s) {
  return (
    Z(),
    ae("section", null, [
      x("div", Id, [
        x("div", kd, [
          x(
            "img",
            { class: "icon", src: n.jsonData.logo, alt: n.jsonData.title },
            null,
            8,
            Nd
          ),
        ]),
        x("div", jd, [
          x("b", null, wt(n.jsonData.title), 1),
          x("p", null, wt(n.jsonData.mainParagraph), 1),
          (Z(!0),
          ae(
            ve,
            null,
            Jt(n.jsonData.secondaryParagraph, (i, a) =>
              Fr(
                (Z(),
                ae("div", { class: "secondary-paragraph-container", key: a }, [
                  x("p", { innerHTML: i }, null, 8, Ld),
                ])),
                [[Jr, o.show]]
              )
            ),
            128
          )),
          Fr(
            x(
              "div",
              Bd,
              [
                x("section", Dd, [
                  (Z(!0),
                  ae(
                    ve,
                    null,
                    Jt(
                      n.jsonData.images,
                      (i, a) => (
                        Z(), ae("img", { src: i, key: a }, null, 8, Hd)
                      )
                    ),
                    128
                  )),
                ]),
              ],
              512
            ),
            [[Jr, o.show]]
          ),
          x(
            "div",
            {
              class: "snapshot",
              onClick: t[0] || (t[0] = (i) => s.showSnapshot()),
            },
            [x("button", Fd, wt(this.sign), 1)]
          ),
        ]),
      ]),
    ])
  );
}
const qd = Oe(Md, [
    ["render", zd],
    ["__scopeId", "data-v-aab1df35"],
  ]),
  Ud = {
    data() {
      return {
        arrProjects: [
          {
            logo: "images/nutrition.png",
            title: "Nutrition's Digital Assistant",
            mainParagraph:
              "Nutrition's Digital Assistant es una aplicación diseñada para la creación y gestión de dietas personalizadas. Permite a los usuarios visualizar o solicitar dietas, mientras que los administradores pueden revisar las solicitudes recibidas y diseñar nuevos planes nutricionales..",
            secondaryParagraph: [
              "<b>Usuario:</b> puede solicitar tu dieta personalizada y podrás observarla en el apartado mis dietas. Iniciar y cerrar sesión, ver su dieta el día y las veces que quieras.",
              "<b>Administrador:</b> se encarga de ver las solicitudes de dietas pendientes, crear nuevas dietas, editar o eliminar dietas. Así como también crear o eliminar recetas.",
              " Para el <b>Front end</b>, se desarrolla la aplicación con <b>Angular 17, JavaScript, CSS y Bootstrap.</b>",
              "El <b>Back end</b> se desarrolla con <b>Spring Boot</b> que es Framework para el desarrollo de aplicaciones y páginas webs con <b>Java</b> como lenguaje de programación y <b>Liquidbase</b> que es una librería Open Source, que nos permitirá realizar el seguimiento, gestión y aplicación de cambios en el modelo de datos. Se realiza mediante la creación de scripts sql incrementales. Con lo que comenzamos con scripts de creación de tablas, de inserción de datos y, a medida que avanza el desarrollo, se van creando scripts con las modificaciones oportunas que exige la tarea que está llevando a cabo. Liquidbase en la aplicación de backend se encarga de la ejecución de scripts, analizando los que se han ejecutados y los que no se han ejecutados para asegurar que el modelo de datos esta correcto.",
              " Para la <b>base de datos</b> utilicé <b>MySQL</b> que es un sistema de base de datos relacionales.",
            ],
            images: [
              "images/nutrition/Captura4.PNG",
              "images/nutrition/Captura5.PNG",
              "images/nutrition/Receta.PNG",
              "images/nutrition/Dietas.PNG",
              "images/nutrition/Captura1.PNG",
              "images/nutrition/LOGIN.PNG",
              "images/nutrition/Captura6.PNG",
              "images/nutrition/Captura8.PNG",
              "images/nutrition/Captura2.PNG",
            ],
          },
          {
            logo: "images/aplicacion.jpg",
            title: "MyGym App",
            mainParagraph:
              "Desarrollé una aplicación diseñada para consultar ejercicios y rutinas de entrenamiento de fitness. Incluye referencias multimedia que enriquecen la experiencia del usuario y facilitan la correcta ejecución de cada movimiento..",
            secondaryParagraph: [
              "La aplicación se compone de una aplicación de <b>Front end</b> desarrollada en <b>Angular 11</b> con maquetación responsive con <b>Bootstrap.</b>",
              "El <b>Back end</b> fue desarrollado con <b>NodeJS</b> haciendo uso de <b>Express</b> para exponer una API que permite consultar ejercicios y rutinas.",
              "Para la consulta de ejercicos y rutinas utlice una <b>base de datos MySQL.</b>",
            ],
            images: [
              "images/mygym/Home1.PNG",
              "images/mygym/Home2.PNG",
              "images/mygym/Ejercicios.PNG",
              "images/mygym/Rutinas.PNG",
              "images/mygym/registro1.PNG",
              "images/mygym/Login.PNG",
              "images/mygym/GuardarEjercicio.PNG",
            ],
          },
        ],
      };
    },
    components: { Structure: qd, TitleStructure: jn },
  };
function Kd(e, t, n, r, o, s) {
  const i = Ee("TitleStructure"),
    a = Ee("Structure");
  return (
    Z(),
    ae(
      ve,
      null,
      [
        q(i, { titleText: "PROYECTOS" }),
        (Z(!0),
        ae(
          ve,
          null,
          Jt(
            o.arrProjects,
            (l) => (
              Z(), St(a, { jsonData: l, key: l.title }, null, 8, ["jsonData"])
            )
          ),
          128
        )),
      ],
      64
    )
  );
}
const Wd = Oe(Ud, [["render", Kd]]);
function eo(e, t, n) {
  var r, o, s, i, a;
  t == null && (t = 100);
  function l() {
    var c = Date.now() - i;
    c < t && c >= 0
      ? (r = setTimeout(l, t - c))
      : ((r = null), n || ((a = e.apply(s, o)), (s = o = null)));
  }
  var u = function () {
    (s = this), (o = arguments), (i = Date.now());
    var c = n && !r;
    return (
      r || (r = setTimeout(l, t)), c && ((a = e.apply(s, o)), (s = o = null)), a
    );
  };
  return (
    (u.clear = function () {
      r && (clearTimeout(r), (r = null));
    }),
    (u.flush = function () {
      r && ((a = e.apply(s, o)), (s = o = null), clearTimeout(r), (r = null));
    }),
    u
  );
}
eo.debounce = eo;
var Ir = eo;
function Vd(e, t, n) {
  Se(e)
    ? ft(e, (r, o) => {
        o == null || o.removeEventListener(t, n),
          r == null || r.addEventListener(t, n);
      })
    : cn(() => {
        e.addEventListener(t, n);
      }),
    In(() => {
      var r;
      (r = Le(e)) === null || r === void 0 || r.removeEventListener(t, n);
    });
}
function Gd(e, t) {
  const n = "pointerdown";
  return typeof window > "u" || !window
    ? void 0
    : Vd(window, n, (o) => {
        const s = Le(e);
        s && (s === o.target || o.composedPath().includes(s) || t(o));
      });
}
function Yd(e, t, n) {
  let r = null;
  const o = Ut(!1);
  cn(() => {
    (e.content !== void 0 || n.value) && (o.value = !0),
      (r = new MutationObserver(s)),
      r.observe(t.value, { childList: !0, subtree: !0 });
  }),
    In(() => r.disconnect()),
    ft(n, (i) => {
      i ? (o.value = !0) : (o.value = !1);
    });
  const s = () => {
    e.content ? (o.value = !0) : (o.value = !1);
  };
  return { hasContent: o };
}
function en(e, t) {
  var n = e.getBoundingClientRect(),
    r = 1,
    o = 1;
  return {
    width: n.width / r,
    height: n.height / o,
    top: n.top / o,
    right: n.right / r,
    bottom: n.bottom / o,
    left: n.left / r,
    x: n.left / r,
    y: n.top / o,
  };
}
function et(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Ao(e) {
  var t = et(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function An(e) {
  var t = et(e).Element;
  return e instanceof t || e instanceof Element;
}
function ze(e) {
  var t = et(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function na(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = et(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Jd(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Qd(e) {
  return e === et(e) || !ze(e) ? Ao(e) : Jd(e);
}
function at(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function $t(e) {
  return ((An(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function To(e) {
  return en($t(e)).left + Ao(e).scrollLeft;
}
function pt(e) {
  return et(e).getComputedStyle(e);
}
function Ro(e) {
  var t = pt(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Xd(e) {
  var t = e.getBoundingClientRect(),
    n = t.width / e.offsetWidth || 1,
    r = t.height / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Zd(e, t, n) {
  n === void 0 && (n = !1);
  var r = ze(t);
  ze(t) && Xd(t);
  var o = $t(t),
    s = en(e),
    i = { scrollLeft: 0, scrollTop: 0 },
    a = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((at(t) !== "body" || Ro(o)) && (i = Qd(t)),
      ze(t)
        ? ((a = en(t)), (a.x += t.clientLeft), (a.y += t.clientTop))
        : o && (a.x = To(o))),
    {
      x: s.left + i.scrollLeft - a.x,
      y: s.top + i.scrollTop - a.y,
      width: s.width,
      height: s.height,
    }
  );
}
function Mo(e) {
  var t = en(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function wr(e) {
  return at(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (na(e) ? e.host : null) || $t(e);
}
function ra(e) {
  return ["html", "body", "#document"].indexOf(at(e)) >= 0
    ? e.ownerDocument.body
    : ze(e) && Ro(e)
    ? e
    : ra(wr(e));
}
function wn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = ra(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    s = et(r),
    i = o ? [s].concat(s.visualViewport || [], Ro(r) ? r : []) : r,
    a = t.concat(i);
  return o ? a : a.concat(wn(wr(i)));
}
function ep(e) {
  return ["table", "td", "th"].indexOf(at(e)) >= 0;
}
function Bs(e) {
  return !ze(e) || pt(e).position === "fixed" ? null : e.offsetParent;
}
function tp(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1,
    n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && ze(e)) {
    var r = pt(e);
    if (r.position === "fixed") return null;
  }
  for (var o = wr(e); ze(o) && ["html", "body"].indexOf(at(o)) < 0; ) {
    var s = pt(o);
    if (
      s.transform !== "none" ||
      s.perspective !== "none" ||
      s.contain === "paint" ||
      ["transform", "perspective"].indexOf(s.willChange) !== -1 ||
      (t && s.willChange === "filter") ||
      (t && s.filter && s.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ln(e) {
  for (var t = et(e), n = Bs(e); n && ep(n) && pt(n).position === "static"; )
    n = Bs(n);
  return n &&
    (at(n) === "html" || (at(n) === "body" && pt(n).position === "static"))
    ? t
    : n || tp(e) || t;
}
var qe = "top",
  Xe = "bottom",
  Ze = "right",
  Ue = "left",
  Io = "auto",
  Bn = [qe, Xe, Ze, Ue],
  tn = "start",
  Tn = "end",
  np = "clippingParents",
  oa = "viewport",
  hn = "popper",
  rp = "reference",
  Ds = Bn.reduce(function (e, t) {
    return e.concat([t + "-" + tn, t + "-" + Tn]);
  }, []),
  sa = [].concat(Bn, [Io]).reduce(function (e, t) {
    return e.concat([t, t + "-" + tn, t + "-" + Tn]);
  }, []),
  op = "beforeRead",
  sp = "read",
  ip = "afterRead",
  ap = "beforeMain",
  lp = "main",
  cp = "afterMain",
  up = "beforeWrite",
  fp = "write",
  dp = "afterWrite",
  pp = [op, sp, ip, ap, lp, cp, up, fp, dp];
function hp(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (s) {
    t.set(s.name, s);
  });
  function o(s) {
    n.add(s.name);
    var i = [].concat(s.requires || [], s.requiresIfExists || []);
    i.forEach(function (a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && o(l);
      }
    }),
      r.push(s);
  }
  return (
    e.forEach(function (s) {
      n.has(s.name) || o(s);
    }),
    r
  );
}
function mp(e) {
  var t = hp(e);
  return pp.reduce(function (n, r) {
    return n.concat(
      t.filter(function (o) {
        return o.phase === r;
      })
    );
  }, []);
}
function gp(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function st(e) {
  return e.split("-")[0];
}
function vp(e) {
  var t = e.reduce(function (n, r) {
    var o = n[r.name];
    return (
      (n[r.name] = o
        ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
function _p(e) {
  var t = et(e),
    n = $t(e),
    r = t.visualViewport,
    o = n.clientWidth,
    s = n.clientHeight,
    i = 0,
    a = 0;
  return (
    r &&
      ((o = r.width),
      (s = r.height),
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
        ((i = r.offsetLeft), (a = r.offsetTop))),
    { width: o, height: s, x: i + To(e), y: a }
  );
}
var Ct = Math.max,
  Rn = Math.min,
  Kn = Math.round;
function bp(e) {
  var t,
    n = $t(e),
    r = Ao(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    s = Ct(
      n.scrollWidth,
      n.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    i = Ct(
      n.scrollHeight,
      n.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    a = -r.scrollLeft + To(e),
    l = -r.scrollTop;
  return (
    pt(o || n).direction === "rtl" &&
      (a += Ct(n.clientWidth, o ? o.clientWidth : 0) - s),
    { width: s, height: i, x: a, y: l }
  );
}
function ia(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && na(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function to(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function yp(e) {
  var t = en(e);
  return (
    (t.top = t.top + e.clientTop),
    (t.left = t.left + e.clientLeft),
    (t.bottom = t.top + e.clientHeight),
    (t.right = t.left + e.clientWidth),
    (t.width = e.clientWidth),
    (t.height = e.clientHeight),
    (t.x = t.left),
    (t.y = t.top),
    t
  );
}
function Hs(e, t) {
  return t === oa ? to(_p(e)) : ze(t) ? yp(t) : to(bp($t(e)));
}
function wp(e) {
  var t = wn(wr(e)),
    n = ["absolute", "fixed"].indexOf(pt(e).position) >= 0,
    r = n && ze(e) ? Ln(e) : e;
  return An(r)
    ? t.filter(function (o) {
        return An(o) && ia(o, r) && at(o) !== "body";
      })
    : [];
}
function xp(e, t, n) {
  var r = t === "clippingParents" ? wp(e) : [].concat(t),
    o = [].concat(r, [n]),
    s = o[0],
    i = o.reduce(function (a, l) {
      var u = Hs(e, l);
      return (
        (a.top = Ct(u.top, a.top)),
        (a.right = Rn(u.right, a.right)),
        (a.bottom = Rn(u.bottom, a.bottom)),
        (a.left = Ct(u.left, a.left)),
        a
      );
    }, Hs(e, s));
  return (
    (i.width = i.right - i.left),
    (i.height = i.bottom - i.top),
    (i.x = i.left),
    (i.y = i.top),
    i
  );
}
function nn(e) {
  return e.split("-")[1];
}
function ko(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function aa(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    o = r ? st(r) : null,
    s = r ? nn(r) : null,
    i = t.x + t.width / 2 - n.width / 2,
    a = t.y + t.height / 2 - n.height / 2,
    l;
  switch (o) {
    case qe:
      l = { x: i, y: t.y - n.height };
      break;
    case Xe:
      l = { x: i, y: t.y + t.height };
      break;
    case Ze:
      l = { x: t.x + t.width, y: a };
      break;
    case Ue:
      l = { x: t.x - n.width, y: a };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? ko(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (s) {
      case tn:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Tn:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function la() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ca(e) {
  return Object.assign({}, la(), e);
}
function ua(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
function No(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    s = n.boundary,
    i = s === void 0 ? np : s,
    a = n.rootBoundary,
    l = a === void 0 ? oa : a,
    u = n.elementContext,
    c = u === void 0 ? hn : u,
    p = n.altBoundary,
    h = p === void 0 ? !1 : p,
    m = n.padding,
    w = m === void 0 ? 0 : m,
    b = ca(typeof w != "number" ? w : ua(w, Bn)),
    $ = c === hn ? rp : hn,
    C = e.rects.popper,
    M = e.elements[h ? $ : c],
    S = xp(An(M) ? M : M.contextElement || $t(e.elements.popper), i, l),
    A = en(e.elements.reference),
    F = aa({ reference: A, element: C, strategy: "absolute", placement: o }),
    U = to(Object.assign({}, C, F)),
    Y = c === hn ? U : A,
    j = {
      top: S.top - Y.top + b.top,
      bottom: Y.bottom - S.bottom + b.bottom,
      left: S.left - Y.left + b.left,
      right: Y.right - S.right + b.right,
    },
    z = e.modifiersData.offset;
  if (c === hn && z) {
    var J = z[o];
    Object.keys(j).forEach(function (oe) {
      var N = [Ze, Xe].indexOf(oe) >= 0 ? 1 : -1,
        W = [qe, Xe].indexOf(oe) >= 0 ? "y" : "x";
      j[oe] += J[W] * N;
    });
  }
  return j;
}
var Fs = { placement: "bottom", modifiers: [], strategy: "absolute" };
function zs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Ep(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    o = t.defaultOptions,
    s = o === void 0 ? Fs : o;
  return function (a, l, u) {
    u === void 0 && (u = s);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Fs, s),
        modifiersData: {},
        elements: { reference: a, popper: l },
        attributes: {},
        styles: {},
      },
      p = [],
      h = !1,
      m = {
        state: c,
        setOptions: function (C) {
          var M = typeof C == "function" ? C(c.options) : C;
          b(),
            (c.options = Object.assign({}, s, c.options, M)),
            (c.scrollParents = {
              reference: An(a)
                ? wn(a)
                : a.contextElement
                ? wn(a.contextElement)
                : [],
              popper: wn(l),
            });
          var S = mp(vp([].concat(r, c.options.modifiers)));
          return (
            (c.orderedModifiers = S.filter(function (A) {
              return A.enabled;
            })),
            w(),
            m.update()
          );
        },
        forceUpdate: function () {
          if (!h) {
            var C = c.elements,
              M = C.reference,
              S = C.popper;
            if (zs(M, S)) {
              (c.rects = {
                reference: Zd(M, Ln(S), c.options.strategy === "fixed"),
                popper: Mo(S),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (J) {
                  return (c.modifiersData[J.name] = Object.assign({}, J.data));
                });
              for (var A = 0; A < c.orderedModifiers.length; A++) {
                if (c.reset === !0) {
                  (c.reset = !1), (A = -1);
                  continue;
                }
                var F = c.orderedModifiers[A],
                  U = F.fn,
                  Y = F.options,
                  j = Y === void 0 ? {} : Y,
                  z = F.name;
                typeof U == "function" &&
                  (c = U({ state: c, options: j, name: z, instance: m }) || c);
              }
            }
          }
        },
        update: gp(function () {
          return new Promise(function ($) {
            m.forceUpdate(), $(c);
          });
        }),
        destroy: function () {
          b(), (h = !0);
        },
      };
    if (!zs(a, l)) return m;
    m.setOptions(u).then(function ($) {
      !h && u.onFirstUpdate && u.onFirstUpdate($);
    });
    function w() {
      c.orderedModifiers.forEach(function ($) {
        var C = $.name,
          M = $.options,
          S = M === void 0 ? {} : M,
          A = $.effect;
        if (typeof A == "function") {
          var F = A({ state: c, name: C, instance: m, options: S }),
            U = function () {};
          p.push(F || U);
        }
      });
    }
    function b() {
      p.forEach(function ($) {
        return $();
      }),
        (p = []);
    }
    return m;
  };
}
var Wn = { passive: !0 };
function Cp(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    o = r.scroll,
    s = o === void 0 ? !0 : o,
    i = r.resize,
    a = i === void 0 ? !0 : i,
    l = et(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    s &&
      u.forEach(function (c) {
        c.addEventListener("scroll", n.update, Wn);
      }),
    a && l.addEventListener("resize", n.update, Wn),
    function () {
      s &&
        u.forEach(function (c) {
          c.removeEventListener("scroll", n.update, Wn);
        }),
        a && l.removeEventListener("resize", n.update, Wn);
    }
  );
}
var Op = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: Cp,
  data: {},
};
function Pp(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = aa({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
var Sp = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: Pp,
    data: {},
  },
  $p = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Ap(e) {
  var t = e.x,
    n = e.y,
    r = window,
    o = r.devicePixelRatio || 1;
  return { x: Kn(Kn(t * o) / o) || 0, y: Kn(Kn(n * o) / o) || 0 };
}
function qs(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    s = e.variation,
    i = e.offsets,
    a = e.position,
    l = e.gpuAcceleration,
    u = e.adaptive,
    c = e.roundOffsets,
    p = c === !0 ? Ap(i) : typeof c == "function" ? c(i) : i,
    h = p.x,
    m = h === void 0 ? 0 : h,
    w = p.y,
    b = w === void 0 ? 0 : w,
    $ = i.hasOwnProperty("x"),
    C = i.hasOwnProperty("y"),
    M = Ue,
    S = qe,
    A = window;
  if (u) {
    var F = Ln(n),
      U = "clientHeight",
      Y = "clientWidth";
    F === et(n) &&
      ((F = $t(n)),
      pt(F).position !== "static" &&
        a === "absolute" &&
        ((U = "scrollHeight"), (Y = "scrollWidth"))),
      (F = F),
      (o === qe || ((o === Ue || o === Ze) && s === Tn)) &&
        ((S = Xe), (b -= F[U] - r.height), (b *= l ? 1 : -1)),
      (o === Ue || ((o === qe || o === Xe) && s === Tn)) &&
        ((M = Ze), (m -= F[Y] - r.width), (m *= l ? 1 : -1));
  }
  var j = Object.assign({ position: a }, u && $p);
  if (l) {
    var z;
    return Object.assign(
      {},
      j,
      ((z = {}),
      (z[S] = C ? "0" : ""),
      (z[M] = $ ? "0" : ""),
      (z.transform =
        (A.devicePixelRatio || 1) <= 1
          ? "translate(" + m + "px, " + b + "px)"
          : "translate3d(" + m + "px, " + b + "px, 0)"),
      z)
    );
  }
  return Object.assign(
    {},
    j,
    ((t = {}),
    (t[S] = C ? b + "px" : ""),
    (t[M] = $ ? m + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function Tp(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    o = r === void 0 ? !0 : r,
    s = n.adaptive,
    i = s === void 0 ? !0 : s,
    a = n.roundOffsets,
    l = a === void 0 ? !0 : a,
    u = {
      placement: st(t.placement),
      variation: nn(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      qs(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: i,
          roundOffsets: l,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        qs(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
var Rp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Tp,
  data: {},
};
function Mp(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      o = t.attributes[n] || {},
      s = t.elements[n];
    !ze(s) ||
      !at(s) ||
      (Object.assign(s.style, r),
      Object.keys(o).forEach(function (i) {
        var a = o[i];
        a === !1 ? s.removeAttribute(i) : s.setAttribute(i, a === !0 ? "" : a);
      }));
  });
}
function Ip(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var o = t.elements[r],
          s = t.attributes[r] || {},
          i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          a = i.reduce(function (l, u) {
            return (l[u] = ""), l;
          }, {});
        !ze(o) ||
          !at(o) ||
          (Object.assign(o.style, a),
          Object.keys(s).forEach(function (l) {
            o.removeAttribute(l);
          }));
      });
    }
  );
}
var kp = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: Mp,
    effect: Ip,
    requires: ["computeStyles"],
  },
  Np = [Op, Sp, Rp, kp],
  jp = Ep({ defaultModifiers: Np });
function Lp(e) {
  return e === "x" ? "y" : "x";
}
function Qn(e, t, n) {
  return Ct(e, Rn(t, n));
}
function Bp(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.mainAxis,
    s = o === void 0 ? !0 : o,
    i = n.altAxis,
    a = i === void 0 ? !1 : i,
    l = n.boundary,
    u = n.rootBoundary,
    c = n.altBoundary,
    p = n.padding,
    h = n.tether,
    m = h === void 0 ? !0 : h,
    w = n.tetherOffset,
    b = w === void 0 ? 0 : w,
    $ = No(t, { boundary: l, rootBoundary: u, padding: p, altBoundary: c }),
    C = st(t.placement),
    M = nn(t.placement),
    S = !M,
    A = ko(C),
    F = Lp(A),
    U = t.modifiersData.popperOffsets,
    Y = t.rects.reference,
    j = t.rects.popper,
    z =
      typeof b == "function"
        ? b(Object.assign({}, t.rects, { placement: t.placement }))
        : b,
    J = { x: 0, y: 0 };
  if (U) {
    if (s || a) {
      var oe = A === "y" ? qe : Ue,
        N = A === "y" ? Xe : Ze,
        W = A === "y" ? "height" : "width",
        ue = U[A],
        Pe = U[A] + $[oe],
        te = U[A] - $[N],
        ne = m ? -j[W] / 2 : 0,
        V = M === tn ? Y[W] : j[W],
        fe = M === tn ? -j[W] : -Y[W],
        ge = t.elements.arrow,
        be = m && ge ? Mo(ge) : { width: 0, height: 0 },
        ye = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : la(),
        Ke = ye[oe],
        Be = ye[N],
        _ = Qn(0, Y[W], be[W]),
        k = S ? Y[W] / 2 - ne - _ - Ke - z : V - _ - Ke - z,
        R = S ? -Y[W] / 2 + ne + _ + Be + z : fe + _ + Be + z,
        L = t.elements.arrow && Ln(t.elements.arrow),
        ee = L ? (A === "y" ? L.clientTop || 0 : L.clientLeft || 0) : 0,
        de = t.modifiersData.offset
          ? t.modifiersData.offset[t.placement][A]
          : 0,
        Q = U[A] + k - de - ee,
        f = U[A] + R - de;
      if (s) {
        var d = Qn(m ? Rn(Pe, Q) : Pe, ue, m ? Ct(te, f) : te);
        (U[A] = d), (J[A] = d - ue);
      }
      if (a) {
        var g = A === "x" ? qe : Ue,
          v = A === "x" ? Xe : Ze,
          y = U[F],
          P = y + $[g],
          I = y - $[v],
          O = Qn(m ? Rn(P, Q) : P, y, m ? Ct(I, f) : I);
        (U[F] = O), (J[F] = O - y);
      }
    }
    t.modifiersData[r] = J;
  }
}
var Dp = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: Bp,
    requiresIfExists: ["offset"],
  },
  Hp = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Xn(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Hp[t];
  });
}
var Fp = { start: "end", end: "start" };
function Us(e) {
  return e.replace(/start|end/g, function (t) {
    return Fp[t];
  });
}
function zp(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    s = n.rootBoundary,
    i = n.padding,
    a = n.flipVariations,
    l = n.allowedAutoPlacements,
    u = l === void 0 ? sa : l,
    c = nn(r),
    p = c
      ? a
        ? Ds
        : Ds.filter(function (w) {
            return nn(w) === c;
          })
      : Bn,
    h = p.filter(function (w) {
      return u.indexOf(w) >= 0;
    });
  h.length === 0 && (h = p);
  var m = h.reduce(function (w, b) {
    return (
      (w[b] = No(e, { placement: b, boundary: o, rootBoundary: s, padding: i })[
        st(b)
      ]),
      w
    );
  }, {});
  return Object.keys(m).sort(function (w, b) {
    return m[w] - m[b];
  });
}
function qp(e) {
  if (st(e) === Io) return [];
  var t = Xn(e);
  return [Us(e), t, Us(t)];
}
function Up(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var o = n.mainAxis,
        s = o === void 0 ? !0 : o,
        i = n.altAxis,
        a = i === void 0 ? !0 : i,
        l = n.fallbackPlacements,
        u = n.padding,
        c = n.boundary,
        p = n.rootBoundary,
        h = n.altBoundary,
        m = n.flipVariations,
        w = m === void 0 ? !0 : m,
        b = n.allowedAutoPlacements,
        $ = t.options.placement,
        C = st($),
        M = C === $,
        S = l || (M || !w ? [Xn($)] : qp($)),
        A = [$].concat(S).reduce(function (Be, _) {
          return Be.concat(
            st(_) === Io
              ? zp(t, {
                  placement: _,
                  boundary: c,
                  rootBoundary: p,
                  padding: u,
                  flipVariations: w,
                  allowedAutoPlacements: b,
                })
              : _
          );
        }, []),
        F = t.rects.reference,
        U = t.rects.popper,
        Y = new Map(),
        j = !0,
        z = A[0],
        J = 0;
      J < A.length;
      J++
    ) {
      var oe = A[J],
        N = st(oe),
        W = nn(oe) === tn,
        ue = [qe, Xe].indexOf(N) >= 0,
        Pe = ue ? "width" : "height",
        te = No(t, {
          placement: oe,
          boundary: c,
          rootBoundary: p,
          altBoundary: h,
          padding: u,
        }),
        ne = ue ? (W ? Ze : Ue) : W ? Xe : qe;
      F[Pe] > U[Pe] && (ne = Xn(ne));
      var V = Xn(ne),
        fe = [];
      if (
        (s && fe.push(te[N] <= 0),
        a && fe.push(te[ne] <= 0, te[V] <= 0),
        fe.every(function (Be) {
          return Be;
        }))
      ) {
        (z = oe), (j = !1);
        break;
      }
      Y.set(oe, fe);
    }
    if (j)
      for (
        var ge = w ? 3 : 1,
          be = function (_) {
            var k = A.find(function (R) {
              var L = Y.get(R);
              if (L)
                return L.slice(0, _).every(function (ee) {
                  return ee;
                });
            });
            if (k) return (z = k), "break";
          },
          ye = ge;
        ye > 0;
        ye--
      ) {
        var Ke = be(ye);
        if (Ke === "break") break;
      }
    t.placement !== z &&
      ((t.modifiersData[r]._skip = !0), (t.placement = z), (t.reset = !0));
  }
}
var Kp = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Up,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Wp(e, t, n) {
  var r = st(e),
    o = [Ue, qe].indexOf(r) >= 0 ? -1 : 1,
    s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    i = s[0],
    a = s[1];
  return (
    (i = i || 0),
    (a = (a || 0) * o),
    [Ue, Ze].indexOf(r) >= 0 ? { x: a, y: i } : { x: i, y: a }
  );
}
function Vp(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.offset,
    s = o === void 0 ? [0, 0] : o,
    i = sa.reduce(function (c, p) {
      return (c[p] = Wp(p, t.rects, s)), c;
    }, {}),
    a = i[t.placement],
    l = a.x,
    u = a.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[r] = i);
}
var Gp = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Vp,
  },
  Yp = function (t, n) {
    return (
      (t =
        typeof t == "function"
          ? t(Object.assign({}, n.rects, { placement: n.placement }))
          : t),
      ca(typeof t != "number" ? t : ua(t, Bn))
    );
  };
function Jp(e) {
  var t,
    n = e.state,
    r = e.name,
    o = e.options,
    s = n.elements.arrow,
    i = n.modifiersData.popperOffsets,
    a = st(n.placement),
    l = ko(a),
    u = [Ue, Ze].indexOf(a) >= 0,
    c = u ? "height" : "width";
  if (!(!s || !i)) {
    var p = Yp(o.padding, n),
      h = Mo(s),
      m = l === "y" ? qe : Ue,
      w = l === "y" ? Xe : Ze,
      b =
        n.rects.reference[c] + n.rects.reference[l] - i[l] - n.rects.popper[c],
      $ = i[l] - n.rects.reference[l],
      C = Ln(s),
      M = C ? (l === "y" ? C.clientHeight || 0 : C.clientWidth || 0) : 0,
      S = b / 2 - $ / 2,
      A = p[m],
      F = M - h[c] - p[w],
      U = M / 2 - h[c] / 2 + S,
      Y = Qn(A, U, F),
      j = l;
    n.modifiersData[r] = ((t = {}), (t[j] = Y), (t.centerOffset = Y - U), t);
  }
}
function Qp(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null &&
    ((typeof o == "string" && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (ia(t.elements.popper, o) && (t.elements.arrow = o)));
}
var Xp = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Jp,
  effect: Qp,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
const kr = (e) => parseInt(e, 10);
function Zp({
  arrowPadding: e,
  emit: t,
  locked: n,
  offsetDistance: r,
  offsetSkid: o,
  placement: s,
  popperNode: i,
  triggerNode: a,
}) {
  const l = sn({ isOpen: !1, popperInstance: null }),
    u = (b) => {
      var $;
      ($ = l.popperInstance) === null ||
        $ === void 0 ||
        $.setOptions((C) => ({
          ...C,
          modifiers: [...C.modifiers, { name: "eventListeners", enabled: b }],
        }));
    },
    c = () => u(!0),
    p = () => u(!1),
    h = () => {
      l.isOpen && ((l.isOpen = !1), t("close:popper"));
    },
    m = () => {
      l.isOpen || ((l.isOpen = !0), t("open:popper"));
    };
  ft([() => l.isOpen, s], async ([b]) => {
    b ? (await w(), c()) : p();
  });
  const w = async () => {
    await vo(),
      (l.popperInstance = jp(a.value, i.value, {
        placement: s.value,
        modifiers: [
          Dp,
          Kp,
          { name: "flip", enabled: !n.value },
          Xp,
          { name: "arrow", options: { padding: kr(e.value) } },
          Gp,
          { name: "offset", options: { offset: [kr(o.value), kr(r.value)] } },
        ],
      })),
      l.popperInstance.update();
  };
  return (
    In(() => {
      var b;
      (b = l.popperInstance) === null || b === void 0 || b.destroy();
    }),
    { ...hi(l), open: m, close: h }
  );
}
const eh = { id: "arrow", "data-popper-arrow": "" };
function th(e, t) {
  return Z(), ae("div", eh);
}
function fa(e, t) {
  t === void 0 && (t = {});
  var n = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0],
      o = document.createElement("style");
    (o.type = "text/css"),
      n === "top" && r.firstChild
        ? r.insertBefore(o, r.firstChild)
        : r.appendChild(o),
      o.styleSheet
        ? (o.styleSheet.cssText = e)
        : o.appendChild(document.createTextNode(e));
  }
}
var nh = `
#arrow[data-v-20b7fd4a],
  #arrow[data-v-20b7fd4a]::before {
    transition: background 250ms ease-in-out;
    position: absolute;
    width: calc(10px - var(--popper-theme-border-width, 0px));
    height: calc(10px - var(--popper-theme-border-width, 0px));
    box-sizing: border-box;
    background: var(--popper-theme-background-color);
}
#arrow[data-v-20b7fd4a] {
    visibility: hidden;
}
#arrow[data-v-20b7fd4a]::before {
    visibility: visible;
    content: "";
    transform: rotate(45deg);
}

  /* Top arrow */
.popper[data-popper-placement^="top"] > #arrow[data-v-20b7fd4a] {
    bottom: -5px;
}
.popper[data-popper-placement^="top"] > #arrow[data-v-20b7fd4a]::before {
    border-right: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
    border-bottom: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
}

  /* Bottom arrow */
.popper[data-popper-placement^="bottom"] > #arrow[data-v-20b7fd4a] {
    top: -5px;
}
.popper[data-popper-placement^="bottom"] > #arrow[data-v-20b7fd4a]::before {
    border-left: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
    border-top: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
}

  /* Left arrow */
.popper[data-popper-placement^="left"] > #arrow[data-v-20b7fd4a] {
    right: -5px;
}
.popper[data-popper-placement^="left"] > #arrow[data-v-20b7fd4a]::before {
    border-right: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
    border-top: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
}

  /* Right arrow */
.popper[data-popper-placement^="right"] > #arrow[data-v-20b7fd4a] {
    left: -5px;
}
`;
fa(nh);
const jo = {};
jo.render = th;
jo.__scopeId = "data-v-20b7fd4a";
var rh = jo;
const oh = ["onKeyup"];
var da = {
    props: {
      placement: {
        type: String,
        default: "bottom",
        validator: function (e) {
          return [
            "auto",
            "auto-start",
            "auto-end",
            "top",
            "top-start",
            "top-end",
            "bottom",
            "bottom-start",
            "bottom-end",
            "right",
            "right-start",
            "right-end",
            "left",
            "left-start",
            "left-end",
          ].includes(e);
        },
      },
      disableClickAway: { type: Boolean, default: !1 },
      offsetSkid: { type: String, default: "0" },
      offsetDistance: { type: String, default: "12" },
      hover: { type: Boolean, default: !1 },
      show: { type: Boolean, default: null },
      disabled: { type: Boolean, default: !1 },
      openDelay: { type: [Number, String], default: 0 },
      closeDelay: { type: [Number, String], default: 0 },
      zIndex: { type: [Number, String], default: 9999 },
      arrow: { type: Boolean, default: !1 },
      arrowPadding: { type: String, default: "0" },
      interactive: { type: Boolean, default: !0 },
      locked: { type: Boolean, default: !1 },
      content: { type: String, default: null },
    },
    emits: ["open:popper", "close:popper"],
    setup(e, { emit: t }) {
      const n = e;
      Bc((V) => ({ c81fc0a4: e.zIndex }));
      const r = gc(),
        o = Ut(null),
        s = Ut(null),
        i = Ut(null),
        a = Ut(!1);
      cn(() => {
        const V = r.default();
        if (V && V.length > 1)
          return console.error(
            `[Popper]: The <Popper> component expects only one child element at its root. You passed ${V.length} child nodes.`
          );
      });
      const {
          arrowPadding: l,
          closeDelay: u,
          content: c,
          disableClickAway: p,
          disabled: h,
          interactive: m,
          locked: w,
          offsetDistance: b,
          offsetSkid: $,
          openDelay: C,
          placement: M,
          show: S,
        } = hi(n),
        {
          isOpen: A,
          open: F,
          close: U,
        } = Zp({
          arrowPadding: l,
          emit: t,
          locked: w,
          offsetDistance: b,
          offsetSkid: $,
          placement: M,
          popperNode: s,
          triggerNode: i,
        }),
        { hasContent: Y } = Yd(r, s, c),
        j = $e(() => S.value !== null),
        z = $e(() => h.value || !Y.value),
        J = $e(() => A.value && !z.value),
        oe = $e(() => !p.value && !j.value),
        N = $e(() =>
          m.value
            ? `border: ${b.value}px solid transparent; margin: -${b.value}px;`
            : null
        ),
        W = Ir.debounce(F, C.value),
        ue = Ir.debounce(U, u.value),
        Pe = async () => {
          z.value || j.value || (ue.clear(), W());
        },
        te = async () => {
          j.value || (W.clear(), ue());
        },
        ne = () => {
          A.value ? te() : Pe();
        };
      return (
        ft([Y, h], ([V, fe]) => {
          A.value && (!V || fe) && U();
        }),
        ft(A, (V) => {
          V
            ? (a.value = !0)
            : Ir.debounce(() => {
                a.value = !1;
              }, 200);
        }),
        Qo(() => {
          j.value && (S.value ? W() : ue());
        }),
        Qo(() => {
          oe.value && Gd(o, te);
        }),
        (V, fe) => (
          Z(),
          ae(
            "div",
            {
              class: "inline-block",
              style: Mn(Le(N)),
              onMouseleave: fe[2] || (fe[2] = (ge) => e.hover && te()),
              ref: (ge, be) => {
                (be.popperContainerNode = ge), (o.value = ge);
              },
            },
            [
              x(
                "div",
                {
                  ref: (ge, be) => {
                    (be.triggerNode = ge), (i.value = ge);
                  },
                  onMouseover: fe[0] || (fe[0] = (ge) => e.hover && Pe()),
                  onClick: ne,
                  onFocus: Pe,
                  onKeyup: Kc(te, ["esc"]),
                },
                [es(V.$slots, "default")],
                40,
                oh
              ),
              q(
                kn,
                { name: "fade" },
                {
                  default: _e(() => [
                    Fr(
                      x(
                        "div",
                        {
                          onClick: fe[1] || (fe[1] = (ge) => !Le(m) && te()),
                          class: "popper",
                          ref: (ge, be) => {
                            (be.popperNode = ge), (s.value = ge);
                          },
                        },
                        [
                          es(
                            V.$slots,
                            "content",
                            { close: Le(U), isOpen: a.value },
                            () => [Bi(wt(Le(c)), 1)]
                          ),
                          e.arrow ? (Z(), St(rh, { key: 0 })) : Eo("", !0),
                        ],
                        512
                      ),
                      [[Jr, Le(J)]]
                    ),
                  ]),
                  _: 3,
                }
              ),
            ],
            36
          )
        )
      );
    },
  },
  sh = `
.inline-block[data-v-5784ed69] {
    display: inline-block;
}
.popper[data-v-5784ed69] {
    transition: background 250ms ease-in-out;
    background: var(--popper-theme-background-color);
    padding: var(--popper-theme-padding);
    color: var(--popper-theme-text-color);
    border-radius: var(--popper-theme-border-radius);
    border-width: var(--popper-theme-border-width);
    border-style: var(--popper-theme-border-style);
    border-color: var(--popper-theme-border-color);
    box-shadow: var(--popper-theme-box-shadow);
    z-index: var(--c81fc0a4);
}
.popper[data-v-5784ed69]:hover,
  .popper:hover > #arrow[data-v-5784ed69]::before {
    background: var(--popper-theme-background-color-hover);
}
.inline-block[data-v-5784ed69] {
    display: inline-block;
}
.fade-enter-active[data-v-5784ed69],
  .fade-leave-active[data-v-5784ed69] {
    transition: opacity 0.2s ease;
}
.fade-enter-from[data-v-5784ed69],
  .fade-leave-to[data-v-5784ed69] {
    opacity: 0;
}
`;
fa(sh);
da.__scopeId = "data-v-5784ed69";
var ih = (() => {
  const e = da;
  return (
    (e.install = (t) => {
      t.component("Popper", e);
    }),
    e
  );
})();
const ah = "/assets/angular-242dce15.png",
  lh = "/assets/React-24a15646.png",
  ch = "/assets/bootstrap-671a1ea9.png",
  uh = "/assets/jest-f51db3fa.png",
  fh = "/assets/d3-2825cbbd.png",
  dh = "/assets/java-f1ad23e4.png",
  ph = "/assets/spring-logo-39775202.png",
  hh = "/assets/junit-8e1582aa.png",
  mh = "/assets/mockito-b08591c1.png",
  gh = "/assets/mysql-203e2f13.png",
  vh = "/assets/MongoDB-53ea7676.png",
  _h = "/assets/Git-225bbca0.png",
  bh = "/assets/JIRA-2e9e155d.png";
const yh = bo({ components: { Popper: ih, TitleStructure: jn } }),
  Re = (e) => (an("data-v-92f7001f"), (e = e()), ln(), e),
  wh = { class: "container-technologies" },
  xh = { class: "container-column" },
  Eh = Re(() => x("h1", null, "FRONTEND", -1)),
  Ch = { class: "icon-container" },
  Oh = Re(() => x("img", { class: "icon", src: ah, alt: "ANGULAR" }, null, -1)),
  Ph = Re(() => x("img", { class: "icon", src: lh, alt: "REACT" }, null, -1)),
  Sh = Re(() =>
    x("img", { class: "icon", src: ch, alt: "BOOTSTRAP" }, null, -1)
  ),
  $h = Re(() => x("img", { class: "icon", src: uh, alt: "JEST" }, null, -1)),
  Ah = Re(() => x("img", { class: "icon", src: fh, alt: "D3" }, null, -1)),
  Th = { class: "container-column" },
  Rh = Re(() => x("h1", null, "BACKEND", -1)),
  Mh = { class: "icon-container" },
  Ih = Re(() => x("img", { class: "icon", src: dh, alt: "Java" }, null, -1)),
  kh = Re(() => x("img", { class: "icon", src: ph, alt: "SPRING" }, null, -1)),
  Nh = Re(() => x("img", { class: "icon", src: hh, alt: "JUNIT" }, null, -1)),
  jh = Re(() => x("img", { class: "icon", src: mh, alt: "MOCKITO" }, null, -1)),
  Lh = { class: "container-column" },
  Bh = Re(() => x("h1", null, "BBDD", -1)),
  Dh = { class: "icon-container" },
  Hh = Re(() => x("img", { class: "icon", src: gh, alt: "MYSQL" }, null, -1)),
  Fh = Re(() => x("img", { class: "icon", src: vh, alt: "MONGODB" }, null, -1)),
  zh = { class: "container-column" },
  qh = Re(() => x("h1", null, "OTROS", -1)),
  Uh = { class: "icon-container" },
  Kh = Re(() => x("img", { class: "icon", src: _h, alt: "Git" }, null, -1)),
  Wh = Re(() => x("img", { class: "icon", src: bh, alt: "JIRA" }, null, -1));
function Vh(e, t, n, r, o, s) {
  const i = Ee("TitleStructure"),
    a = Ee("Popper");
  return (
    Z(),
    ae(
      ve,
      null,
      [
        q(i, { titleText: "TECNOLOGÍAS" }),
        x("section", null, [
          x("div", wh, [
            x("div", xh, [
              Eh,
              x("div", Ch, [
                q(
                  a,
                  { hover: "", content: "Angular" },
                  { default: _e(() => [Oh]), _: 1 }
                ),
                q(
                  a,
                  { hover: "", content: "React" },
                  { default: _e(() => [Ph]), _: 1 }
                ),
                q(
                  a,
                  { hover: "", content: "Bootstrap" },
                  { default: _e(() => [Sh]), _: 1 }
                ),
                q(
                  a,
                  { hover: "", content: "Jest" },
                  { default: _e(() => [$h]), _: 1 }
                ),
                q(
                  a,
                  { hover: "", content: "D3" },
                  { default: _e(() => [Ah]), _: 1 }
                ),
              ]),
            ]),
            x("div", Th, [
              Rh,
              x("div", Mh, [
                q(
                  a,
                  { hover: "", content: "Java" },
                  { default: _e(() => [Ih]), _: 1 }
                ),
                q(
                  a,
                  { hover: "", content: "Spring" },
                  { default: _e(() => [kh]), _: 1 }
                ),
                q(
                  a,
                  { hover: "", content: "JUnit" },
                  { default: _e(() => [Nh]), _: 1 }
                ),
                q(
                  a,
                  { hover: "", content: "Mockito" },
                  { default: _e(() => [jh]), _: 1 }
                ),
              ]),
            ]),
            x("div", Lh, [
              Bh,
              x("div", Dh, [
                q(
                  a,
                  { hover: "", content: "MySQL" },
                  { default: _e(() => [Hh]), _: 1 }
                ),
                q(
                  a,
                  { hover: "", content: "MongoDB" },
                  { default: _e(() => [Fh]), _: 1 }
                ),
              ]),
            ]),
            x("div", zh, [
              qh,
              x("div", Uh, [
                q(
                  a,
                  { hover: "", content: "Git" },
                  { default: _e(() => [Kh]), _: 1 }
                ),
                q(
                  a,
                  { hover: "", content: "Jira" },
                  { default: _e(() => [Wh]), _: 1 }
                ),
              ]),
            ]),
          ]),
        ]),
      ],
      64
    )
  );
}
const Gh = Oe(yh, [
    ["render", Vh],
    ["__scopeId", "data-v-92f7001f"],
  ]),
  Yh = {
    name: "Experience",
    data() {
      return {
        arrExperience: [
          {
            logo: "images/sngular-logo-vector.png",
            title: "Desarrollador Full Stack Trainee - Sngular.",
            mainParagraph: [
              " Como desarrollador full stack, contribuí al desarrollo integral de una aplicación, donde realicé mejoras y evolutivos en funcionalidades existentes, además de construir nuevos componentes desde cero. En el frontend, utilicé Angular, Angular Material, Bootstrap y Jest. Para el backend, trabajé con Spring Boot, JUnit y Mockito. Apliqué Test-Driven Development (TDD) en mis tareas, gestioné el control de versiones con Git y utilicé Trello para la gestión de tareas, siguiendo metodologías ágiles como Scrum.",
            ],
            date: "Mar. 2025 - Jun. 2025.",
            country: "Madrid, España.",
          },
          {
            logo: "images/aspasia.png",
            title: "Desarrollador Full Stack Jr - Grupo Aspasia.",
            mainParagraph: [
              "Como desarrollador full stack, participé en varios proyectos dentro del sector de la formación para empresas, organizaciones e instituciones. Mis responsabilidades incluyeron el mantenimiento y desarrollo de nuevas funcionalidades en una herramienta de gestión de formación para empresas y la implementación de mejoras en diversas aplicaciones. Para el frontend, utilicé jQuery, y para el backend, PHP.",
            ],
            date: "Jun. 2023 - Dic. 2023.",
            country: "Madrid, España.",
          },
          {
            logo: "images/deimos.png",
            tittle: "Desarrollador Full Stack Jr - Elecnor Deimos.",
            mainParagraph: [
              "En mi experiencia como desarrollador full stack, participé en varios proyectos, enfocándome principalmente en el desarrollo de aplicaciones para el frontend. Utilicé Angular y Angular Material, y fui responsable tanto de la resolución de incidencias como de la creación de nuevas funcionalidades. Para la visualización de datos complejos, como gráficas y esquemas de conexión, integré la potente librería D3.js en las aplicaciones.",
            ],
            date: "Jun. 2022 - Nov. 2022",
            country: "Madrid, España.",
          },
        ],
      };
    },
    components: { BoxStructure: ta, TitleStructure: jn },
  };
function Jh(e, t, n, r, o, s) {
  const i = Ee("TitleStructure"),
    a = Ee("BoxStructure");
  return (
    Z(),
    ae(
      ve,
      null,
      [
        q(i, { titleText: "EXPERIENCIA PROFESIONAL" }),
        (Z(!0),
        ae(
          ve,
          null,
          Jt(
            o.arrExperience,
            (l) => (
              Z(), St(a, { jsonData: l, key: l.title }, null, 8, ["jsonData"])
            )
          ),
          128
        )),
      ],
      64
    )
  );
}
const Qh = Oe(Yh, [["render", Jh]]);
const Xh = {
    name: "HeroMenu",
    props: { show: { type: Boolean, default: !1 } },
    methods: {
      navigateToSection(e) {
        this.$emit("item-clicked"), setTimeout(() => this.$router.push(e), 500);
      },
    },
  },
  Zh = { class: "menu-items" };
function em(e, t, n, r, o, s) {
  return (
    Z(),
    St(
      kn,
      { name: "slide-up" },
      {
        default: _e(() => [
          n.show
            ? (Z(),
              ae(
                "div",
                { key: 0, class: "hero-menu", style: Mn(e.menuPositionStyle) },
                [
                  x("div", Zh, [
                    x(
                      "a",
                      {
                        onClick:
                          t[0] || (t[0] = (i) => s.navigateToSection("/about")),
                        class: "menu-item",
                      },
                      "SOBRE MÍ"
                    ),
                    x(
                      "a",
                      {
                        onClick:
                          t[1] ||
                          (t[1] = (i) => s.navigateToSection("/training")),
                        class: "menu-item",
                      },
                      "FORMACIÓN"
                    ),
                    x(
                      "a",
                      {
                        onClick:
                          t[2] ||
                          (t[2] = (i) => s.navigateToSection("/experience")),
                        class: "menu-item",
                      },
                      "EXPERIENCIA PROFESIONAL"
                    ),
                    x(
                      "a",
                      {
                        onClick:
                          t[3] ||
                          (t[3] = (i) => s.navigateToSection("/projects")),
                        class: "menu-item",
                      },
                      "PROYECTOS"
                    ),
                    x(
                      "a",
                      {
                        onClick:
                          t[4] ||
                          (t[4] = (i) => s.navigateToSection("/technologies")),
                        class: "menu-item",
                      },
                      "TECNOLOGÍAS"
                    ),
                  ]),
                ],
                4
              ))
            : Eo("", !0),
        ]),
        _: 1,
      }
    )
  );
}
const tm = Oe(Xh, [
    ["render", em],
    ["__scopeId", "data-v-fb56be9f"],
  ]),
  nm = "/assets/jdlm-85cec7d6.jpg";
const rm = {
    name: "HeroSection",
    components: { HeroMenu: tm },
    data() {
      return { showHeroMenu: !1 };
    },
    methods: {
      toggleMenu() {
        this.showHeroMenu = !0;
      },
      closeHeroMenu() {
        this.showHeroMenu = !1;
      },
    },
  },
  Lo = (e) => (an("data-v-1ae63230"), (e = e()), ln(), e),
  om = { class: "hero-section" },
  sm = { class: "hero-content" },
  im = Lo(() =>
    x(
      "div",
      { class: "container-img" },
      [x("img", { src: nm, alt: "FOTO" })],
      -1
    )
  ),
  am = Lo(() =>
    x(
      "h1",
      { class: "hero-name animate__animated animate__fadeInUp" },
      " José Daniel Lara Meza ",
      -1
    )
  ),
  lm = Lo(() =>
    x(
      "p",
      {
        class:
          "hero-tagline animate__animated animate__fadeInUp animate__delay-1s",
      },
      " Desarrollador Web Full Stack ",
      -1
    )
  ),
  cm = { style: { height: "50px" } };
function um(e, t, n, r, o, s) {
  const i = Ee("HeroMenu");
  return (
    Z(),
    ae("section", om, [
      x("div", sm, [
        im,
        am,
        lm,
        x(
          "button",
          {
            ref: "portfolioButton",
            class:
              "hero-button animate__animated animate__fadeInUp animate__delay-2s",
            onClick:
              t[0] || (t[0] = (...a) => s.toggleMenu && s.toggleMenu(...a)),
          },
          " Visita mi Portfolio ",
          512
        ),
      ]),
      x("div", cm, [
        q(
          i,
          {
            ref: "heroMenuComponent",
            show: o.showHeroMenu,
            onItemClicked: s.closeHeroMenu,
          },
          null,
          8,
          ["show", "onItemClicked"]
        ),
      ]),
    ])
  );
}
const fm = Oe(rm, [
    ["render", um],
    ["__scopeId", "data-v-1ae63230"],
  ]),
  dm = { name: "HomeView", components: { HeroSection: fm } };
function pm(e, t, n, r, o, s) {
  const i = Ee("HeroSection");
  return Z(), St(i);
}
const hm = Oe(dm, [["render", pm]]),
  mm = [
    { path: "/", name: "home", component: hm },
    { path: "/about", name: "about", component: _d },
    { path: "/training", name: "training", component: Rd },
    { path: "/projects", name: "projects", component: Wd },
    { path: "/technologies", name: "technologies", component: Gh },
    { path: "/experience", name: "experience", component: Qh },
  ],
  gm = kf({ history: Ju(), routes: mm }),
  pa = Gc(ad);
pa.use(gm);
pa.mount("#app");
