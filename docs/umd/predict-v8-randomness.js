(function (Q, J) {
  typeof exports == "object" && typeof module < "u"
    ? J(exports)
    : typeof define == "function" && define.amd
      ? define(["exports"], J)
      : ((Q = typeof globalThis < "u" ? globalThis : Q || self), J((Q.PredictV8Randomness = {})));
})(this, function (Q) {
  "use strict";
  var Wn = (Q) => {
    throw TypeError(Q);
  };
  var Te = (Q, J, st) => J.has(Q) || Wn("Cannot " + st);
  var L = (Q, J, st) => (Te(Q, J, "read from private field"), st ? st.call(Q) : J.get(Q)),
    K = (Q, J, st) => (J.has(Q) ? Wn("Cannot add the same private member more than once") : J instanceof WeakSet ? J.add(Q) : J.set(Q, st)),
    V = (Q, J, st, Ot) => (Te(Q, J, "write to private field"), Ot ? Ot.call(Q, st) : J.set(Q, st), st),
    Lt = (Q, J, st) => (Te(Q, J, "access private method"), st);
  var Kt, at, vt, Pt, _r, ir, Vt, St, Bt, Ut, yt, Kn, Jn, t_, r_, or, Ft, Gt, dt, $t, Zt, Mt, sr, ur, Et, e_, n_, __, i_;
  var J = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function st(g) {
    if (Object.prototype.hasOwnProperty.call(g, "__esModule")) return g;
    var f = g.default;
    if (typeof f == "function") {
      var t = function c() {
        return this instanceof c ? Reflect.construct(f, arguments, this.constructor) : f.apply(this, arguments);
      };
      t.prototype = f.prototype;
    } else t = {};
    return (
      Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.keys(g).forEach(function (c) {
        var b = Object.getOwnPropertyDescriptor(g, c);
        Object.defineProperty(
          t,
          c,
          b.get
            ? b
            : {
                enumerable: !0,
                get: function () {
                  return g[c];
                },
              },
        );
      }),
      t
    );
  }
  var Ot = {},
    Ct = {},
    Pr = {},
    kr = {},
    Cr = function (g, f) {
      return (
        (Cr =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, c) {
              t.__proto__ = c;
            }) ||
          function (t, c) {
            for (var b in c) Object.prototype.hasOwnProperty.call(c, b) && (t[b] = c[b]);
          }),
        Cr(g, f)
      );
    };
  function ve(g, f) {
    if (typeof f != "function" && f !== null) throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
    Cr(g, f);
    function t() {
      this.constructor = g;
    }
    g.prototype = f === null ? Object.create(f) : ((t.prototype = f.prototype), new t());
  }
  var yr = function () {
    return (
      (yr =
        Object.assign ||
        function (f) {
          for (var t, c = 1, b = arguments.length; c < b; c++) {
            t = arguments[c];
            for (var E in t) Object.prototype.hasOwnProperty.call(t, E) && (f[E] = t[E]);
          }
          return f;
        }),
      yr.apply(this, arguments)
    );
  };
  function Se(g, f) {
    var t = {};
    for (var c in g) Object.prototype.hasOwnProperty.call(g, c) && f.indexOf(c) < 0 && (t[c] = g[c]);
    if (g != null && typeof Object.getOwnPropertySymbols == "function")
      for (var b = 0, c = Object.getOwnPropertySymbols(g); b < c.length; b++)
        f.indexOf(c[b]) < 0 && Object.prototype.propertyIsEnumerable.call(g, c[b]) && (t[c[b]] = g[c[b]]);
    return t;
  }
  function Ze(g, f, t, c) {
    var b = arguments.length,
      E = b < 3 ? f : c === null ? (c = Object.getOwnPropertyDescriptor(f, t)) : c,
      w;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") E = Reflect.decorate(g, f, t, c);
    else for (var O = g.length - 1; O >= 0; O--) (w = g[O]) && (E = (b < 3 ? w(E) : b > 3 ? w(f, t, E) : w(f, t)) || E);
    return b > 3 && E && Object.defineProperty(f, t, E), E;
  }
  function Ie(g, f) {
    return function (t, c) {
      f(t, c, g);
    };
  }
  function xe(g, f, t, c, b, E) {
    function w(u) {
      if (u !== void 0 && typeof u != "function") throw new TypeError("Function expected");
      return u;
    }
    for (
      var O = c.kind,
        a = O === "getter" ? "get" : O === "setter" ? "set" : "value",
        S = !f && g ? (c.static ? g : g.prototype) : null,
        r = f || (S ? Object.getOwnPropertyDescriptor(S, c.name) : {}),
        U,
        Y = !1,
        I = t.length - 1;
      I >= 0;
      I--
    ) {
      var N = {};
      for (var _ in c) N[_] = _ === "access" ? {} : c[_];
      for (var _ in c.access) N.access[_] = c.access[_];
      N.addInitializer = function (u) {
        if (Y) throw new TypeError("Cannot add initializers after decoration has completed");
        E.push(w(u || null));
      };
      var n = (0, t[I])(O === "accessor" ? { get: r.get, set: r.set } : r[a], N);
      if (O === "accessor") {
        if (n === void 0) continue;
        if (n === null || typeof n != "object") throw new TypeError("Object expected");
        (U = w(n.get)) && (r.get = U), (U = w(n.set)) && (r.set = U), (U = w(n.init)) && b.unshift(U);
      } else (U = w(n)) && (O === "field" ? b.unshift(U) : (r[a] = U));
    }
    S && Object.defineProperty(S, c.name, r), (Y = !0);
  }
  function Ne(g, f, t) {
    for (var c = arguments.length > 2, b = 0; b < f.length; b++) t = c ? f[b].call(g, t) : f[b].call(g);
    return c ? t : void 0;
  }
  function Le(g) {
    return typeof g == "symbol" ? g : "".concat(g);
  }
  function Be(g, f, t) {
    return (
      typeof f == "symbol" && (f = f.description ? "[".concat(f.description, "]") : ""),
      Object.defineProperty(g, "name", { configurable: !0, value: t ? "".concat(t, " ", f) : f })
    );
  }
  function Ue(g, f) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(g, f);
  }
  function Fe(g, f, t, c) {
    function b(E) {
      return E instanceof t
        ? E
        : new t(function (w) {
            w(E);
          });
    }
    return new (t || (t = Promise))(function (E, w) {
      function O(r) {
        try {
          S(c.next(r));
        } catch (U) {
          w(U);
        }
      }
      function a(r) {
        try {
          S(c.throw(r));
        } catch (U) {
          w(U);
        }
      }
      function S(r) {
        r.done ? E(r.value) : b(r.value).then(O, a);
      }
      S((c = c.apply(g, f || [])).next());
    });
  }
  function de(g, f) {
    var t = {
        label: 0,
        sent: function () {
          if (E[0] & 1) throw E[1];
          return E[1];
        },
        trys: [],
        ops: [],
      },
      c,
      b,
      E,
      w = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return (
      (w.next = O(0)),
      (w.throw = O(1)),
      (w.return = O(2)),
      typeof Symbol == "function" &&
        (w[Symbol.iterator] = function () {
          return this;
        }),
      w
    );
    function O(S) {
      return function (r) {
        return a([S, r]);
      };
    }
    function a(S) {
      if (c) throw new TypeError("Generator is already executing.");
      for (; w && ((w = 0), S[0] && (t = 0)), t; )
        try {
          if (((c = 1), b && (E = S[0] & 2 ? b.return : S[0] ? b.throw || ((E = b.return) && E.call(b), 0) : b.next) && !(E = E.call(b, S[1])).done))
            return E;
          switch (((b = 0), E && (S = [S[0] & 2, E.value]), S[0])) {
            case 0:
            case 1:
              E = S;
              break;
            case 4:
              return t.label++, { value: S[1], done: !1 };
            case 5:
              t.label++, (b = S[1]), (S = [0]);
              continue;
            case 7:
              (S = t.ops.pop()), t.trys.pop();
              continue;
            default:
              if (((E = t.trys), !(E = E.length > 0 && E[E.length - 1]) && (S[0] === 6 || S[0] === 2))) {
                t = 0;
                continue;
              }
              if (S[0] === 3 && (!E || (S[1] > E[0] && S[1] < E[3]))) {
                t.label = S[1];
                break;
              }
              if (S[0] === 6 && t.label < E[1]) {
                (t.label = E[1]), (E = S);
                break;
              }
              if (E && t.label < E[2]) {
                (t.label = E[2]), t.ops.push(S);
                break;
              }
              E[2] && t.ops.pop(), t.trys.pop();
              continue;
          }
          S = f.call(g, t);
        } catch (r) {
          (S = [6, r]), (b = 0);
        } finally {
          c = E = 0;
        }
      if (S[0] & 5) throw S[1];
      return { value: S[0] ? S[1] : void 0, done: !0 };
    }
  }
  var Er = Object.create
    ? function (g, f, t, c) {
        c === void 0 && (c = t);
        var b = Object.getOwnPropertyDescriptor(f, t);
        (!b || ("get" in b ? !f.__esModule : b.writable || b.configurable)) &&
          (b = {
            enumerable: !0,
            get: function () {
              return f[t];
            },
          }),
          Object.defineProperty(g, c, b);
      }
    : function (g, f, t, c) {
        c === void 0 && (c = t), (g[c] = f[t]);
      };
  function Me(g, f) {
    for (var t in g) t !== "default" && !Object.prototype.hasOwnProperty.call(f, t) && Er(f, g, t);
  }
  function Ar(g) {
    var f = typeof Symbol == "function" && Symbol.iterator,
      t = f && g[f],
      c = 0;
    if (t) return t.call(g);
    if (g && typeof g.length == "number")
      return {
        next: function () {
          return g && c >= g.length && (g = void 0), { value: g && g[c++], done: !g };
        },
      };
    throw new TypeError(f ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function qr(g, f) {
    var t = typeof Symbol == "function" && g[Symbol.iterator];
    if (!t) return g;
    var c = t.call(g),
      b,
      E = [],
      w;
    try {
      for (; (f === void 0 || f-- > 0) && !(b = c.next()).done; ) E.push(b.value);
    } catch (O) {
      w = { error: O };
    } finally {
      try {
        b && !b.done && (t = c.return) && t.call(c);
      } finally {
        if (w) throw w.error;
      }
    }
    return E;
  }
  function De() {
    for (var g = [], f = 0; f < arguments.length; f++) g = g.concat(qr(arguments[f]));
    return g;
  }
  function ke() {
    for (var g = 0, f = 0, t = arguments.length; f < t; f++) g += arguments[f].length;
    for (var c = Array(g), b = 0, f = 0; f < t; f++) for (var E = arguments[f], w = 0, O = E.length; w < O; w++, b++) c[b] = E[w];
    return c;
  }
  function Ce(g, f, t) {
    if (t || arguments.length === 2)
      for (var c = 0, b = f.length, E; c < b; c++) (E || !(c in f)) && (E || (E = Array.prototype.slice.call(f, 0, c)), (E[c] = f[c]));
    return g.concat(E || Array.prototype.slice.call(f));
  }
  function Xt(g) {
    return this instanceof Xt ? ((this.v = g), this) : new Xt(g);
  }
  function qe(g, f, t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var c = t.apply(g, f || []),
      b,
      E = [];
    return (
      (b = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
      O("next"),
      O("throw"),
      O("return", w),
      (b[Symbol.asyncIterator] = function () {
        return this;
      }),
      b
    );
    function w(I) {
      return function (N) {
        return Promise.resolve(N).then(I, U);
      };
    }
    function O(I, N) {
      c[I] &&
        ((b[I] = function (_) {
          return new Promise(function (n, u) {
            E.push([I, _, n, u]) > 1 || a(I, _);
          });
        }),
        N && (b[I] = N(b[I])));
    }
    function a(I, N) {
      try {
        S(c[I](N));
      } catch (_) {
        Y(E[0][3], _);
      }
    }
    function S(I) {
      I.value instanceof Xt ? Promise.resolve(I.value.v).then(r, U) : Y(E[0][2], I);
    }
    function r(I) {
      a("next", I);
    }
    function U(I) {
      a("throw", I);
    }
    function Y(I, N) {
      I(N), E.shift(), E.length && a(E[0][0], E[0][1]);
    }
  }
  function ze(g) {
    var f, t;
    return (
      (f = {}),
      c("next"),
      c("throw", function (b) {
        throw b;
      }),
      c("return"),
      (f[Symbol.iterator] = function () {
        return this;
      }),
      f
    );
    function c(b, E) {
      f[b] = g[b]
        ? function (w) {
            return (t = !t) ? { value: Xt(g[b](w)), done: !1 } : E ? E(w) : w;
          }
        : E;
    }
  }
  function Ve(g) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var f = g[Symbol.asyncIterator],
      t;
    return f
      ? f.call(g)
      : ((g = typeof Ar == "function" ? Ar(g) : g[Symbol.iterator]()),
        (t = {}),
        c("next"),
        c("throw"),
        c("return"),
        (t[Symbol.asyncIterator] = function () {
          return this;
        }),
        t);
    function c(E) {
      t[E] =
        g[E] &&
        function (w) {
          return new Promise(function (O, a) {
            (w = g[E](w)), b(O, a, w.done, w.value);
          });
        };
    }
    function b(E, w, O, a) {
      Promise.resolve(a).then(function (S) {
        E({ value: S, done: O });
      }, w);
    }
  }
  function Ge(g, f) {
    return Object.defineProperty ? Object.defineProperty(g, "raw", { value: f }) : (g.raw = f), g;
  }
  var o_ = Object.create
      ? function (g, f) {
          Object.defineProperty(g, "default", { enumerable: !0, value: f });
        }
      : function (g, f) {
          g.default = f;
        },
    zr = function (g) {
      return (
        (zr =
          Object.getOwnPropertyNames ||
          function (f) {
            var t = [];
            for (var c in f) Object.prototype.hasOwnProperty.call(f, c) && (t[t.length] = c);
            return t;
          }),
        zr(g)
      );
    };
  function $e(g) {
    if (g && g.__esModule) return g;
    var f = {};
    if (g != null) for (var t = zr(g), c = 0; c < t.length; c++) t[c] !== "default" && Er(f, g, t[c]);
    return o_(f, g), f;
  }
  function Qe(g) {
    return g && g.__esModule ? g : { default: g };
  }
  function Ye(g, f, t, c) {
    if (t === "a" && !c) throw new TypeError("Private accessor was defined without a getter");
    if (typeof f == "function" ? g !== f || !c : !f.has(g))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return t === "m" ? c : t === "a" ? c.call(g) : c ? c.value : f.get(g);
  }
  function je(g, f, t, c, b) {
    if (c === "m") throw new TypeError("Private method is not writable");
    if (c === "a" && !b) throw new TypeError("Private accessor was defined without a setter");
    if (typeof f == "function" ? g !== f || !b : !f.has(g))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return c === "a" ? b.call(g, t) : b ? (b.value = t) : f.set(g, t), t;
  }
  function He(g, f) {
    if (f === null || (typeof f != "object" && typeof f != "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof g == "function" ? f === g : g.has(f);
  }
  function Xe(g, f, t) {
    if (f != null) {
      if (typeof f != "object" && typeof f != "function") throw new TypeError("Object expected.");
      var c, b;
      if (t) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        c = f[Symbol.asyncDispose];
      }
      if (c === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        (c = f[Symbol.dispose]), t && (b = c);
      }
      if (typeof c != "function") throw new TypeError("Object not disposable.");
      b &&
        (c = function () {
          try {
            b.call(this);
          } catch (E) {
            return Promise.reject(E);
          }
        }),
        g.stack.push({ value: f, dispose: c, async: t });
    } else t && g.stack.push({ async: !0 });
    return f;
  }
  var s_ =
    typeof SuppressedError == "function"
      ? SuppressedError
      : function (g, f, t) {
          var c = new Error(t);
          return (c.name = "SuppressedError"), (c.error = g), (c.suppressed = f), c;
        };
  function We(g) {
    function f(E) {
      (g.error = g.hasError ? new s_(E, g.error, "An error was suppressed during disposal.") : E), (g.hasError = !0);
    }
    var t,
      c = 0;
    function b() {
      for (; (t = g.stack.pop()); )
        try {
          if (!t.async && c === 1) return (c = 0), g.stack.push(t), Promise.resolve().then(b);
          if (t.dispose) {
            var E = t.dispose.call(t.value);
            if (t.async)
              return (
                (c |= 2),
                Promise.resolve(E).then(b, function (w) {
                  return f(w), b();
                })
              );
          } else c |= 1;
        } catch (w) {
          f(w);
        }
      if (c === 1) return g.hasError ? Promise.reject(g.error) : Promise.resolve();
      if (g.hasError) throw g.error;
    }
    return b();
  }
  function Ke(g, f) {
    return typeof g == "string" && /^\.\.?\//.test(g)
      ? g.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (t, c, b, E, w) {
          return c ? (f ? ".jsx" : ".js") : b && (!E || !w) ? t : b + E + "." + w.toLowerCase() + "js";
        })
      : g;
  }
  const wr = st(
    Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          __addDisposableResource: Xe,
          get __assign() {
            return yr;
          },
          __asyncDelegator: ze,
          __asyncGenerator: qe,
          __asyncValues: Ve,
          __await: Xt,
          __awaiter: Fe,
          __classPrivateFieldGet: Ye,
          __classPrivateFieldIn: He,
          __classPrivateFieldSet: je,
          __createBinding: Er,
          __decorate: Ze,
          __disposeResources: We,
          __esDecorate: xe,
          __exportStar: Me,
          __extends: ve,
          __generator: de,
          __importDefault: Qe,
          __importStar: $e,
          __makeTemplateObject: Ge,
          __metadata: Ue,
          __param: Ie,
          __propKey: Le,
          __read: qr,
          __rest: Se,
          __rewriteRelativeImportExtension: Ke,
          __runInitializers: Ne,
          __setFunctionName: Be,
          __spread: De,
          __spreadArray: Ce,
          __spreadArrays: ke,
          __values: Ar,
          default: {
            __extends: ve,
            __assign: yr,
            __rest: Se,
            __decorate: Ze,
            __param: Ie,
            __esDecorate: xe,
            __runInitializers: Ne,
            __propKey: Le,
            __setFunctionName: Be,
            __metadata: Ue,
            __awaiter: Fe,
            __generator: de,
            __createBinding: Er,
            __exportStar: Me,
            __values: Ar,
            __read: qr,
            __spread: De,
            __spreadArrays: ke,
            __spreadArray: Ce,
            __await: Xt,
            __asyncGenerator: qe,
            __asyncDelegator: ze,
            __asyncValues: Ve,
            __makeTemplateObject: Ge,
            __importStar: $e,
            __importDefault: Qe,
            __classPrivateFieldGet: Ye,
            __classPrivateFieldSet: je,
            __classPrivateFieldIn: He,
            __addDisposableResource: Xe,
            __disposeResources: We,
            __rewriteRelativeImportExtension: Ke,
          },
        },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    ),
  );
  var Rr = {},
    Tr = {},
    Tt = {},
    Je;
  function vr() {
    return (
      Je ||
        ((Je = 1),
        Object.defineProperty(Tt, "__esModule", { value: !0 }),
        (Tt.E_CANCELED = Tt.E_ALREADY_LOCKED = Tt.E_TIMEOUT = void 0),
        (Tt.E_TIMEOUT = new Error("timeout while waiting for mutex to become available")),
        (Tt.E_ALREADY_LOCKED = new Error("mutex already locked")),
        (Tt.E_CANCELED = new Error("request for lock canceled"))),
      Tt
    );
  }
  var tn;
  function rn() {
    if (tn) return Tr;
    (tn = 1), Object.defineProperty(Tr, "__esModule", { value: !0 });
    var g = wr,
      f = vr(),
      t = (function () {
        function c(b, E) {
          if (
            (E === void 0 && (E = f.E_CANCELED),
            (this._maxConcurrency = b),
            (this._cancelError = E),
            (this._queue = []),
            (this._waiters = []),
            b <= 0)
          )
            throw new Error("semaphore must be initialized to a positive value");
          this._value = b;
        }
        return (
          (c.prototype.acquire = function () {
            var b = this,
              E = this.isLocked(),
              w = new Promise(function (O, a) {
                return b._queue.push({ resolve: O, reject: a });
              });
            return E || this._dispatch(), w;
          }),
          (c.prototype.runExclusive = function (b) {
            return (0, g.__awaiter)(this, void 0, void 0, function () {
              var E, w, O;
              return (0, g.__generator)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [4, this.acquire()];
                  case 1:
                    (E = a.sent()), (w = E[0]), (O = E[1]), (a.label = 2);
                  case 2:
                    return a.trys.push([2, , 4, 5]), [4, b(w)];
                  case 3:
                    return [2, a.sent()];
                  case 4:
                    return O(), [7];
                  case 5:
                    return [2];
                }
              });
            });
          }),
          (c.prototype.waitForUnlock = function () {
            return (0, g.__awaiter)(this, void 0, void 0, function () {
              var b,
                E = this;
              return (0, g.__generator)(this, function (w) {
                return this.isLocked()
                  ? ((b = new Promise(function (O) {
                      return E._waiters.push({ resolve: O });
                    })),
                    [2, b])
                  : [2, Promise.resolve()];
              });
            });
          }),
          (c.prototype.isLocked = function () {
            return this._value <= 0;
          }),
          (c.prototype.release = function () {
            if (this._maxConcurrency > 1)
              throw new Error("this method is unavailable on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
            if (this._currentReleaser) {
              var b = this._currentReleaser;
              (this._currentReleaser = void 0), b();
            }
          }),
          (c.prototype.cancel = function () {
            var b = this;
            this._queue.forEach(function (E) {
              return E.reject(b._cancelError);
            }),
              (this._queue = []);
          }),
          (c.prototype._dispatch = function () {
            var b = this,
              E = this._queue.shift();
            if (E) {
              var w = !1;
              (this._currentReleaser = function () {
                w || ((w = !0), b._value++, b._resolveWaiters(), b._dispatch());
              }),
                E.resolve([this._value--, this._currentReleaser]);
            }
          }),
          (c.prototype._resolveWaiters = function () {
            this._waiters.forEach(function (b) {
              return b.resolve();
            }),
              (this._waiters = []);
          }),
          c
        );
      })();
    return (Tr.default = t), Tr;
  }
  var en;
  function u_() {
    if (en) return Rr;
    (en = 1), Object.defineProperty(Rr, "__esModule", { value: !0 });
    var g = wr,
      f = rn(),
      t = (function () {
        function c(b) {
          this._semaphore = new f.default(1, b);
        }
        return (
          (c.prototype.acquire = function () {
            return (0, g.__awaiter)(this, void 0, void 0, function () {
              var b, E;
              return (0, g.__generator)(this, function (w) {
                switch (w.label) {
                  case 0:
                    return [4, this._semaphore.acquire()];
                  case 1:
                    return (b = w.sent()), (E = b[1]), [2, E];
                }
              });
            });
          }),
          (c.prototype.runExclusive = function (b) {
            return this._semaphore.runExclusive(function () {
              return b();
            });
          }),
          (c.prototype.isLocked = function () {
            return this._semaphore.isLocked();
          }),
          (c.prototype.waitForUnlock = function () {
            return this._semaphore.waitForUnlock();
          }),
          (c.prototype.release = function () {
            this._semaphore.release();
          }),
          (c.prototype.cancel = function () {
            return this._semaphore.cancel();
          }),
          c
        );
      })();
    return (Rr.default = t), Rr;
  }
  var rr = {},
    nn;
  function _n() {
    if (nn) return rr;
    (nn = 1), Object.defineProperty(rr, "__esModule", { value: !0 }), (rr.withTimeout = void 0);
    var g = wr,
      f = vr();
    function t(c, b, E) {
      var w = this;
      return (
        E === void 0 && (E = f.E_TIMEOUT),
        {
          acquire: function () {
            return new Promise(function (O, a) {
              return (0, g.__awaiter)(w, void 0, void 0, function () {
                var S, r, U, Y, I;
                return (0, g.__generator)(this, function (N) {
                  switch (N.label) {
                    case 0:
                      (S = !1),
                        (r = setTimeout(function () {
                          (S = !0), a(E);
                        }, b)),
                        (N.label = 1);
                    case 1:
                      return N.trys.push([1, 3, , 4]), [4, c.acquire()];
                    case 2:
                      return (U = N.sent()), S ? ((Y = Array.isArray(U) ? U[1] : U), Y()) : (clearTimeout(r), O(U)), [3, 4];
                    case 3:
                      return (I = N.sent()), S || (clearTimeout(r), a(I)), [3, 4];
                    case 4:
                      return [2];
                  }
                });
              });
            });
          },
          runExclusive: function (O) {
            return (0, g.__awaiter)(this, void 0, void 0, function () {
              var a, S;
              return (0, g.__generator)(this, function (r) {
                switch (r.label) {
                  case 0:
                    (a = function () {}), (r.label = 1);
                  case 1:
                    return r.trys.push([1, , 7, 8]), [4, this.acquire()];
                  case 2:
                    return (S = r.sent()), Array.isArray(S) ? ((a = S[1]), [4, O(S[0])]) : [3, 4];
                  case 3:
                    return [2, r.sent()];
                  case 4:
                    return (a = S), [4, O()];
                  case 5:
                    return [2, r.sent()];
                  case 6:
                    return [3, 8];
                  case 7:
                    return a(), [7];
                  case 8:
                    return [2];
                }
              });
            });
          },
          release: function () {
            c.release();
          },
          cancel: function () {
            return c.cancel();
          },
          waitForUnlock: function () {
            return c.waitForUnlock();
          },
          isLocked: function () {
            return c.isLocked();
          },
        }
      );
    }
    return (rr.withTimeout = t), rr;
  }
  var er = {},
    on;
  function a_() {
    if (on) return er;
    (on = 1), Object.defineProperty(er, "__esModule", { value: !0 }), (er.tryAcquire = void 0);
    var g = vr(),
      f = _n();
    function t(c, b) {
      return b === void 0 && (b = g.E_ALREADY_LOCKED), (0, f.withTimeout)(c, 0, b);
    }
    return (er.tryAcquire = t), er;
  }
  var sn;
  function c_() {
    return (
      sn ||
        ((sn = 1),
        (function (g) {
          Object.defineProperty(g, "__esModule", { value: !0 }), (g.tryAcquire = g.withTimeout = g.Semaphore = g.Mutex = void 0);
          var f = wr,
            t = u_();
          Object.defineProperty(g, "Mutex", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          });
          var c = rn();
          Object.defineProperty(g, "Semaphore", {
            enumerable: !0,
            get: function () {
              return c.default;
            },
          });
          var b = _n();
          Object.defineProperty(g, "withTimeout", {
            enumerable: !0,
            get: function () {
              return b.withTimeout;
            },
          });
          var E = a_();
          Object.defineProperty(g, "tryAcquire", {
            enumerable: !0,
            get: function () {
              return E.tryAcquire;
            },
          }),
            (0, f.__exportStar)(vr(), g);
        })(kr)),
      kr
    );
  }
  var qt = {},
    H = {},
    un;
  function an() {
    if (un) return H;
    (un = 1),
      Object.defineProperty(H, "__esModule", { value: !0 }),
      (H.Z3_goal_prec =
        H.Z3_error_code =
        H.Z3_ast_print_mode =
        H.Z3_param_kind =
        H.Z3_decl_kind =
        H.Z3_ast_kind =
        H.Z3_sort_kind =
        H.Z3_parameter_kind =
        H.Z3_symbol_kind =
        H.Z3_lbool =
          void 0);
    var g;
    (function (r) {
      (r[(r.Z3_L_FALSE = -1)] = "Z3_L_FALSE"), (r[(r.Z3_L_UNDEF = 0)] = "Z3_L_UNDEF"), (r[(r.Z3_L_TRUE = 1)] = "Z3_L_TRUE");
    })(g || (H.Z3_lbool = g = {}));
    var f;
    (function (r) {
      (r[(r.Z3_INT_SYMBOL = 0)] = "Z3_INT_SYMBOL"), (r[(r.Z3_STRING_SYMBOL = 1)] = "Z3_STRING_SYMBOL");
    })(f || (H.Z3_symbol_kind = f = {}));
    var t;
    (function (r) {
      (r[(r.Z3_PARAMETER_INT = 0)] = "Z3_PARAMETER_INT"),
        (r[(r.Z3_PARAMETER_DOUBLE = 1)] = "Z3_PARAMETER_DOUBLE"),
        (r[(r.Z3_PARAMETER_RATIONAL = 2)] = "Z3_PARAMETER_RATIONAL"),
        (r[(r.Z3_PARAMETER_SYMBOL = 3)] = "Z3_PARAMETER_SYMBOL"),
        (r[(r.Z3_PARAMETER_SORT = 4)] = "Z3_PARAMETER_SORT"),
        (r[(r.Z3_PARAMETER_AST = 5)] = "Z3_PARAMETER_AST"),
        (r[(r.Z3_PARAMETER_FUNC_DECL = 6)] = "Z3_PARAMETER_FUNC_DECL"),
        (r[(r.Z3_PARAMETER_INTERNAL = 7)] = "Z3_PARAMETER_INTERNAL"),
        (r[(r.Z3_PARAMETER_ZSTRING = 8)] = "Z3_PARAMETER_ZSTRING");
    })(t || (H.Z3_parameter_kind = t = {}));
    var c;
    (function (r) {
      (r[(r.Z3_UNINTERPRETED_SORT = 0)] = "Z3_UNINTERPRETED_SORT"),
        (r[(r.Z3_BOOL_SORT = 1)] = "Z3_BOOL_SORT"),
        (r[(r.Z3_INT_SORT = 2)] = "Z3_INT_SORT"),
        (r[(r.Z3_REAL_SORT = 3)] = "Z3_REAL_SORT"),
        (r[(r.Z3_BV_SORT = 4)] = "Z3_BV_SORT"),
        (r[(r.Z3_ARRAY_SORT = 5)] = "Z3_ARRAY_SORT"),
        (r[(r.Z3_DATATYPE_SORT = 6)] = "Z3_DATATYPE_SORT"),
        (r[(r.Z3_RELATION_SORT = 7)] = "Z3_RELATION_SORT"),
        (r[(r.Z3_FINITE_DOMAIN_SORT = 8)] = "Z3_FINITE_DOMAIN_SORT"),
        (r[(r.Z3_FLOATING_POINT_SORT = 9)] = "Z3_FLOATING_POINT_SORT"),
        (r[(r.Z3_ROUNDING_MODE_SORT = 10)] = "Z3_ROUNDING_MODE_SORT"),
        (r[(r.Z3_SEQ_SORT = 11)] = "Z3_SEQ_SORT"),
        (r[(r.Z3_RE_SORT = 12)] = "Z3_RE_SORT"),
        (r[(r.Z3_CHAR_SORT = 13)] = "Z3_CHAR_SORT"),
        (r[(r.Z3_TYPE_VAR = 14)] = "Z3_TYPE_VAR"),
        (r[(r.Z3_UNKNOWN_SORT = 1e3)] = "Z3_UNKNOWN_SORT");
    })(c || (H.Z3_sort_kind = c = {}));
    var b;
    (function (r) {
      (r[(r.Z3_NUMERAL_AST = 0)] = "Z3_NUMERAL_AST"),
        (r[(r.Z3_APP_AST = 1)] = "Z3_APP_AST"),
        (r[(r.Z3_VAR_AST = 2)] = "Z3_VAR_AST"),
        (r[(r.Z3_QUANTIFIER_AST = 3)] = "Z3_QUANTIFIER_AST"),
        (r[(r.Z3_SORT_AST = 4)] = "Z3_SORT_AST"),
        (r[(r.Z3_FUNC_DECL_AST = 5)] = "Z3_FUNC_DECL_AST"),
        (r[(r.Z3_UNKNOWN_AST = 1e3)] = "Z3_UNKNOWN_AST");
    })(b || (H.Z3_ast_kind = b = {}));
    var E;
    (function (r) {
      (r[(r.Z3_OP_TRUE = 256)] = "Z3_OP_TRUE"),
        (r[(r.Z3_OP_FALSE = 257)] = "Z3_OP_FALSE"),
        (r[(r.Z3_OP_EQ = 258)] = "Z3_OP_EQ"),
        (r[(r.Z3_OP_DISTINCT = 259)] = "Z3_OP_DISTINCT"),
        (r[(r.Z3_OP_ITE = 260)] = "Z3_OP_ITE"),
        (r[(r.Z3_OP_AND = 261)] = "Z3_OP_AND"),
        (r[(r.Z3_OP_OR = 262)] = "Z3_OP_OR"),
        (r[(r.Z3_OP_IFF = 263)] = "Z3_OP_IFF"),
        (r[(r.Z3_OP_XOR = 264)] = "Z3_OP_XOR"),
        (r[(r.Z3_OP_NOT = 265)] = "Z3_OP_NOT"),
        (r[(r.Z3_OP_IMPLIES = 266)] = "Z3_OP_IMPLIES"),
        (r[(r.Z3_OP_OEQ = 267)] = "Z3_OP_OEQ"),
        (r[(r.Z3_OP_ANUM = 512)] = "Z3_OP_ANUM"),
        (r[(r.Z3_OP_AGNUM = 513)] = "Z3_OP_AGNUM"),
        (r[(r.Z3_OP_LE = 514)] = "Z3_OP_LE"),
        (r[(r.Z3_OP_GE = 515)] = "Z3_OP_GE"),
        (r[(r.Z3_OP_LT = 516)] = "Z3_OP_LT"),
        (r[(r.Z3_OP_GT = 517)] = "Z3_OP_GT"),
        (r[(r.Z3_OP_ADD = 518)] = "Z3_OP_ADD"),
        (r[(r.Z3_OP_SUB = 519)] = "Z3_OP_SUB"),
        (r[(r.Z3_OP_UMINUS = 520)] = "Z3_OP_UMINUS"),
        (r[(r.Z3_OP_MUL = 521)] = "Z3_OP_MUL"),
        (r[(r.Z3_OP_DIV = 522)] = "Z3_OP_DIV"),
        (r[(r.Z3_OP_IDIV = 523)] = "Z3_OP_IDIV"),
        (r[(r.Z3_OP_REM = 524)] = "Z3_OP_REM"),
        (r[(r.Z3_OP_MOD = 525)] = "Z3_OP_MOD"),
        (r[(r.Z3_OP_TO_REAL = 526)] = "Z3_OP_TO_REAL"),
        (r[(r.Z3_OP_TO_INT = 527)] = "Z3_OP_TO_INT"),
        (r[(r.Z3_OP_IS_INT = 528)] = "Z3_OP_IS_INT"),
        (r[(r.Z3_OP_POWER = 529)] = "Z3_OP_POWER"),
        (r[(r.Z3_OP_ABS = 530)] = "Z3_OP_ABS"),
        (r[(r.Z3_OP_STORE = 768)] = "Z3_OP_STORE"),
        (r[(r.Z3_OP_SELECT = 769)] = "Z3_OP_SELECT"),
        (r[(r.Z3_OP_CONST_ARRAY = 770)] = "Z3_OP_CONST_ARRAY"),
        (r[(r.Z3_OP_ARRAY_MAP = 771)] = "Z3_OP_ARRAY_MAP"),
        (r[(r.Z3_OP_ARRAY_DEFAULT = 772)] = "Z3_OP_ARRAY_DEFAULT"),
        (r[(r.Z3_OP_SET_UNION = 773)] = "Z3_OP_SET_UNION"),
        (r[(r.Z3_OP_SET_INTERSECT = 774)] = "Z3_OP_SET_INTERSECT"),
        (r[(r.Z3_OP_SET_DIFFERENCE = 775)] = "Z3_OP_SET_DIFFERENCE"),
        (r[(r.Z3_OP_SET_COMPLEMENT = 776)] = "Z3_OP_SET_COMPLEMENT"),
        (r[(r.Z3_OP_SET_SUBSET = 777)] = "Z3_OP_SET_SUBSET"),
        (r[(r.Z3_OP_AS_ARRAY = 778)] = "Z3_OP_AS_ARRAY"),
        (r[(r.Z3_OP_ARRAY_EXT = 779)] = "Z3_OP_ARRAY_EXT"),
        (r[(r.Z3_OP_SET_HAS_SIZE = 780)] = "Z3_OP_SET_HAS_SIZE"),
        (r[(r.Z3_OP_SET_CARD = 781)] = "Z3_OP_SET_CARD"),
        (r[(r.Z3_OP_BNUM = 1024)] = "Z3_OP_BNUM"),
        (r[(r.Z3_OP_BIT1 = 1025)] = "Z3_OP_BIT1"),
        (r[(r.Z3_OP_BIT0 = 1026)] = "Z3_OP_BIT0"),
        (r[(r.Z3_OP_BNEG = 1027)] = "Z3_OP_BNEG"),
        (r[(r.Z3_OP_BADD = 1028)] = "Z3_OP_BADD"),
        (r[(r.Z3_OP_BSUB = 1029)] = "Z3_OP_BSUB"),
        (r[(r.Z3_OP_BMUL = 1030)] = "Z3_OP_BMUL"),
        (r[(r.Z3_OP_BSDIV = 1031)] = "Z3_OP_BSDIV"),
        (r[(r.Z3_OP_BUDIV = 1032)] = "Z3_OP_BUDIV"),
        (r[(r.Z3_OP_BSREM = 1033)] = "Z3_OP_BSREM"),
        (r[(r.Z3_OP_BUREM = 1034)] = "Z3_OP_BUREM"),
        (r[(r.Z3_OP_BSMOD = 1035)] = "Z3_OP_BSMOD"),
        (r[(r.Z3_OP_BSDIV0 = 1036)] = "Z3_OP_BSDIV0"),
        (r[(r.Z3_OP_BUDIV0 = 1037)] = "Z3_OP_BUDIV0"),
        (r[(r.Z3_OP_BSREM0 = 1038)] = "Z3_OP_BSREM0"),
        (r[(r.Z3_OP_BUREM0 = 1039)] = "Z3_OP_BUREM0"),
        (r[(r.Z3_OP_BSMOD0 = 1040)] = "Z3_OP_BSMOD0"),
        (r[(r.Z3_OP_ULEQ = 1041)] = "Z3_OP_ULEQ"),
        (r[(r.Z3_OP_SLEQ = 1042)] = "Z3_OP_SLEQ"),
        (r[(r.Z3_OP_UGEQ = 1043)] = "Z3_OP_UGEQ"),
        (r[(r.Z3_OP_SGEQ = 1044)] = "Z3_OP_SGEQ"),
        (r[(r.Z3_OP_ULT = 1045)] = "Z3_OP_ULT"),
        (r[(r.Z3_OP_SLT = 1046)] = "Z3_OP_SLT"),
        (r[(r.Z3_OP_UGT = 1047)] = "Z3_OP_UGT"),
        (r[(r.Z3_OP_SGT = 1048)] = "Z3_OP_SGT"),
        (r[(r.Z3_OP_BAND = 1049)] = "Z3_OP_BAND"),
        (r[(r.Z3_OP_BOR = 1050)] = "Z3_OP_BOR"),
        (r[(r.Z3_OP_BNOT = 1051)] = "Z3_OP_BNOT"),
        (r[(r.Z3_OP_BXOR = 1052)] = "Z3_OP_BXOR"),
        (r[(r.Z3_OP_BNAND = 1053)] = "Z3_OP_BNAND"),
        (r[(r.Z3_OP_BNOR = 1054)] = "Z3_OP_BNOR"),
        (r[(r.Z3_OP_BXNOR = 1055)] = "Z3_OP_BXNOR"),
        (r[(r.Z3_OP_CONCAT = 1056)] = "Z3_OP_CONCAT"),
        (r[(r.Z3_OP_SIGN_EXT = 1057)] = "Z3_OP_SIGN_EXT"),
        (r[(r.Z3_OP_ZERO_EXT = 1058)] = "Z3_OP_ZERO_EXT"),
        (r[(r.Z3_OP_EXTRACT = 1059)] = "Z3_OP_EXTRACT"),
        (r[(r.Z3_OP_REPEAT = 1060)] = "Z3_OP_REPEAT"),
        (r[(r.Z3_OP_BREDOR = 1061)] = "Z3_OP_BREDOR"),
        (r[(r.Z3_OP_BREDAND = 1062)] = "Z3_OP_BREDAND"),
        (r[(r.Z3_OP_BCOMP = 1063)] = "Z3_OP_BCOMP"),
        (r[(r.Z3_OP_BSHL = 1064)] = "Z3_OP_BSHL"),
        (r[(r.Z3_OP_BLSHR = 1065)] = "Z3_OP_BLSHR"),
        (r[(r.Z3_OP_BASHR = 1066)] = "Z3_OP_BASHR"),
        (r[(r.Z3_OP_ROTATE_LEFT = 1067)] = "Z3_OP_ROTATE_LEFT"),
        (r[(r.Z3_OP_ROTATE_RIGHT = 1068)] = "Z3_OP_ROTATE_RIGHT"),
        (r[(r.Z3_OP_EXT_ROTATE_LEFT = 1069)] = "Z3_OP_EXT_ROTATE_LEFT"),
        (r[(r.Z3_OP_EXT_ROTATE_RIGHT = 1070)] = "Z3_OP_EXT_ROTATE_RIGHT"),
        (r[(r.Z3_OP_BIT2BOOL = 1071)] = "Z3_OP_BIT2BOOL"),
        (r[(r.Z3_OP_INT2BV = 1072)] = "Z3_OP_INT2BV"),
        (r[(r.Z3_OP_BV2INT = 1073)] = "Z3_OP_BV2INT"),
        (r[(r.Z3_OP_SBV2INT = 1074)] = "Z3_OP_SBV2INT"),
        (r[(r.Z3_OP_CARRY = 1075)] = "Z3_OP_CARRY"),
        (r[(r.Z3_OP_XOR3 = 1076)] = "Z3_OP_XOR3"),
        (r[(r.Z3_OP_BSMUL_NO_OVFL = 1077)] = "Z3_OP_BSMUL_NO_OVFL"),
        (r[(r.Z3_OP_BUMUL_NO_OVFL = 1078)] = "Z3_OP_BUMUL_NO_OVFL"),
        (r[(r.Z3_OP_BSMUL_NO_UDFL = 1079)] = "Z3_OP_BSMUL_NO_UDFL"),
        (r[(r.Z3_OP_BSDIV_I = 1080)] = "Z3_OP_BSDIV_I"),
        (r[(r.Z3_OP_BUDIV_I = 1081)] = "Z3_OP_BUDIV_I"),
        (r[(r.Z3_OP_BSREM_I = 1082)] = "Z3_OP_BSREM_I"),
        (r[(r.Z3_OP_BUREM_I = 1083)] = "Z3_OP_BUREM_I"),
        (r[(r.Z3_OP_BSMOD_I = 1084)] = "Z3_OP_BSMOD_I"),
        (r[(r.Z3_OP_PR_UNDEF = 1280)] = "Z3_OP_PR_UNDEF"),
        (r[(r.Z3_OP_PR_TRUE = 1281)] = "Z3_OP_PR_TRUE"),
        (r[(r.Z3_OP_PR_ASSERTED = 1282)] = "Z3_OP_PR_ASSERTED"),
        (r[(r.Z3_OP_PR_GOAL = 1283)] = "Z3_OP_PR_GOAL"),
        (r[(r.Z3_OP_PR_MODUS_PONENS = 1284)] = "Z3_OP_PR_MODUS_PONENS"),
        (r[(r.Z3_OP_PR_REFLEXIVITY = 1285)] = "Z3_OP_PR_REFLEXIVITY"),
        (r[(r.Z3_OP_PR_SYMMETRY = 1286)] = "Z3_OP_PR_SYMMETRY"),
        (r[(r.Z3_OP_PR_TRANSITIVITY = 1287)] = "Z3_OP_PR_TRANSITIVITY"),
        (r[(r.Z3_OP_PR_TRANSITIVITY_STAR = 1288)] = "Z3_OP_PR_TRANSITIVITY_STAR"),
        (r[(r.Z3_OP_PR_MONOTONICITY = 1289)] = "Z3_OP_PR_MONOTONICITY"),
        (r[(r.Z3_OP_PR_QUANT_INTRO = 1290)] = "Z3_OP_PR_QUANT_INTRO"),
        (r[(r.Z3_OP_PR_BIND = 1291)] = "Z3_OP_PR_BIND"),
        (r[(r.Z3_OP_PR_DISTRIBUTIVITY = 1292)] = "Z3_OP_PR_DISTRIBUTIVITY"),
        (r[(r.Z3_OP_PR_AND_ELIM = 1293)] = "Z3_OP_PR_AND_ELIM"),
        (r[(r.Z3_OP_PR_NOT_OR_ELIM = 1294)] = "Z3_OP_PR_NOT_OR_ELIM"),
        (r[(r.Z3_OP_PR_REWRITE = 1295)] = "Z3_OP_PR_REWRITE"),
        (r[(r.Z3_OP_PR_REWRITE_STAR = 1296)] = "Z3_OP_PR_REWRITE_STAR"),
        (r[(r.Z3_OP_PR_PULL_QUANT = 1297)] = "Z3_OP_PR_PULL_QUANT"),
        (r[(r.Z3_OP_PR_PUSH_QUANT = 1298)] = "Z3_OP_PR_PUSH_QUANT"),
        (r[(r.Z3_OP_PR_ELIM_UNUSED_VARS = 1299)] = "Z3_OP_PR_ELIM_UNUSED_VARS"),
        (r[(r.Z3_OP_PR_DER = 1300)] = "Z3_OP_PR_DER"),
        (r[(r.Z3_OP_PR_QUANT_INST = 1301)] = "Z3_OP_PR_QUANT_INST"),
        (r[(r.Z3_OP_PR_HYPOTHESIS = 1302)] = "Z3_OP_PR_HYPOTHESIS"),
        (r[(r.Z3_OP_PR_LEMMA = 1303)] = "Z3_OP_PR_LEMMA"),
        (r[(r.Z3_OP_PR_UNIT_RESOLUTION = 1304)] = "Z3_OP_PR_UNIT_RESOLUTION"),
        (r[(r.Z3_OP_PR_IFF_TRUE = 1305)] = "Z3_OP_PR_IFF_TRUE"),
        (r[(r.Z3_OP_PR_IFF_FALSE = 1306)] = "Z3_OP_PR_IFF_FALSE"),
        (r[(r.Z3_OP_PR_COMMUTATIVITY = 1307)] = "Z3_OP_PR_COMMUTATIVITY"),
        (r[(r.Z3_OP_PR_DEF_AXIOM = 1308)] = "Z3_OP_PR_DEF_AXIOM"),
        (r[(r.Z3_OP_PR_ASSUMPTION_ADD = 1309)] = "Z3_OP_PR_ASSUMPTION_ADD"),
        (r[(r.Z3_OP_PR_LEMMA_ADD = 1310)] = "Z3_OP_PR_LEMMA_ADD"),
        (r[(r.Z3_OP_PR_REDUNDANT_DEL = 1311)] = "Z3_OP_PR_REDUNDANT_DEL"),
        (r[(r.Z3_OP_PR_CLAUSE_TRAIL = 1312)] = "Z3_OP_PR_CLAUSE_TRAIL"),
        (r[(r.Z3_OP_PR_DEF_INTRO = 1313)] = "Z3_OP_PR_DEF_INTRO"),
        (r[(r.Z3_OP_PR_APPLY_DEF = 1314)] = "Z3_OP_PR_APPLY_DEF"),
        (r[(r.Z3_OP_PR_IFF_OEQ = 1315)] = "Z3_OP_PR_IFF_OEQ"),
        (r[(r.Z3_OP_PR_NNF_POS = 1316)] = "Z3_OP_PR_NNF_POS"),
        (r[(r.Z3_OP_PR_NNF_NEG = 1317)] = "Z3_OP_PR_NNF_NEG"),
        (r[(r.Z3_OP_PR_SKOLEMIZE = 1318)] = "Z3_OP_PR_SKOLEMIZE"),
        (r[(r.Z3_OP_PR_MODUS_PONENS_OEQ = 1319)] = "Z3_OP_PR_MODUS_PONENS_OEQ"),
        (r[(r.Z3_OP_PR_TH_LEMMA = 1320)] = "Z3_OP_PR_TH_LEMMA"),
        (r[(r.Z3_OP_PR_HYPER_RESOLVE = 1321)] = "Z3_OP_PR_HYPER_RESOLVE"),
        (r[(r.Z3_OP_RA_STORE = 1536)] = "Z3_OP_RA_STORE"),
        (r[(r.Z3_OP_RA_EMPTY = 1537)] = "Z3_OP_RA_EMPTY"),
        (r[(r.Z3_OP_RA_IS_EMPTY = 1538)] = "Z3_OP_RA_IS_EMPTY"),
        (r[(r.Z3_OP_RA_JOIN = 1539)] = "Z3_OP_RA_JOIN"),
        (r[(r.Z3_OP_RA_UNION = 1540)] = "Z3_OP_RA_UNION"),
        (r[(r.Z3_OP_RA_WIDEN = 1541)] = "Z3_OP_RA_WIDEN"),
        (r[(r.Z3_OP_RA_PROJECT = 1542)] = "Z3_OP_RA_PROJECT"),
        (r[(r.Z3_OP_RA_FILTER = 1543)] = "Z3_OP_RA_FILTER"),
        (r[(r.Z3_OP_RA_NEGATION_FILTER = 1544)] = "Z3_OP_RA_NEGATION_FILTER"),
        (r[(r.Z3_OP_RA_RENAME = 1545)] = "Z3_OP_RA_RENAME"),
        (r[(r.Z3_OP_RA_COMPLEMENT = 1546)] = "Z3_OP_RA_COMPLEMENT"),
        (r[(r.Z3_OP_RA_SELECT = 1547)] = "Z3_OP_RA_SELECT"),
        (r[(r.Z3_OP_RA_CLONE = 1548)] = "Z3_OP_RA_CLONE"),
        (r[(r.Z3_OP_FD_CONSTANT = 1549)] = "Z3_OP_FD_CONSTANT"),
        (r[(r.Z3_OP_FD_LT = 1550)] = "Z3_OP_FD_LT"),
        (r[(r.Z3_OP_SEQ_UNIT = 1551)] = "Z3_OP_SEQ_UNIT"),
        (r[(r.Z3_OP_SEQ_EMPTY = 1552)] = "Z3_OP_SEQ_EMPTY"),
        (r[(r.Z3_OP_SEQ_CONCAT = 1553)] = "Z3_OP_SEQ_CONCAT"),
        (r[(r.Z3_OP_SEQ_PREFIX = 1554)] = "Z3_OP_SEQ_PREFIX"),
        (r[(r.Z3_OP_SEQ_SUFFIX = 1555)] = "Z3_OP_SEQ_SUFFIX"),
        (r[(r.Z3_OP_SEQ_CONTAINS = 1556)] = "Z3_OP_SEQ_CONTAINS"),
        (r[(r.Z3_OP_SEQ_EXTRACT = 1557)] = "Z3_OP_SEQ_EXTRACT"),
        (r[(r.Z3_OP_SEQ_REPLACE = 1558)] = "Z3_OP_SEQ_REPLACE"),
        (r[(r.Z3_OP_SEQ_REPLACE_RE = 1559)] = "Z3_OP_SEQ_REPLACE_RE"),
        (r[(r.Z3_OP_SEQ_REPLACE_RE_ALL = 1560)] = "Z3_OP_SEQ_REPLACE_RE_ALL"),
        (r[(r.Z3_OP_SEQ_REPLACE_ALL = 1561)] = "Z3_OP_SEQ_REPLACE_ALL"),
        (r[(r.Z3_OP_SEQ_AT = 1562)] = "Z3_OP_SEQ_AT"),
        (r[(r.Z3_OP_SEQ_NTH = 1563)] = "Z3_OP_SEQ_NTH"),
        (r[(r.Z3_OP_SEQ_LENGTH = 1564)] = "Z3_OP_SEQ_LENGTH"),
        (r[(r.Z3_OP_SEQ_INDEX = 1565)] = "Z3_OP_SEQ_INDEX"),
        (r[(r.Z3_OP_SEQ_LAST_INDEX = 1566)] = "Z3_OP_SEQ_LAST_INDEX"),
        (r[(r.Z3_OP_SEQ_TO_RE = 1567)] = "Z3_OP_SEQ_TO_RE"),
        (r[(r.Z3_OP_SEQ_IN_RE = 1568)] = "Z3_OP_SEQ_IN_RE"),
        (r[(r.Z3_OP_SEQ_MAP = 1569)] = "Z3_OP_SEQ_MAP"),
        (r[(r.Z3_OP_SEQ_MAPI = 1570)] = "Z3_OP_SEQ_MAPI"),
        (r[(r.Z3_OP_SEQ_FOLDL = 1571)] = "Z3_OP_SEQ_FOLDL"),
        (r[(r.Z3_OP_SEQ_FOLDLI = 1572)] = "Z3_OP_SEQ_FOLDLI"),
        (r[(r.Z3_OP_STR_TO_INT = 1573)] = "Z3_OP_STR_TO_INT"),
        (r[(r.Z3_OP_INT_TO_STR = 1574)] = "Z3_OP_INT_TO_STR"),
        (r[(r.Z3_OP_UBV_TO_STR = 1575)] = "Z3_OP_UBV_TO_STR"),
        (r[(r.Z3_OP_SBV_TO_STR = 1576)] = "Z3_OP_SBV_TO_STR"),
        (r[(r.Z3_OP_STR_TO_CODE = 1577)] = "Z3_OP_STR_TO_CODE"),
        (r[(r.Z3_OP_STR_FROM_CODE = 1578)] = "Z3_OP_STR_FROM_CODE"),
        (r[(r.Z3_OP_STRING_LT = 1579)] = "Z3_OP_STRING_LT"),
        (r[(r.Z3_OP_STRING_LE = 1580)] = "Z3_OP_STRING_LE"),
        (r[(r.Z3_OP_RE_PLUS = 1581)] = "Z3_OP_RE_PLUS"),
        (r[(r.Z3_OP_RE_STAR = 1582)] = "Z3_OP_RE_STAR"),
        (r[(r.Z3_OP_RE_OPTION = 1583)] = "Z3_OP_RE_OPTION"),
        (r[(r.Z3_OP_RE_CONCAT = 1584)] = "Z3_OP_RE_CONCAT"),
        (r[(r.Z3_OP_RE_UNION = 1585)] = "Z3_OP_RE_UNION"),
        (r[(r.Z3_OP_RE_RANGE = 1586)] = "Z3_OP_RE_RANGE"),
        (r[(r.Z3_OP_RE_DIFF = 1587)] = "Z3_OP_RE_DIFF"),
        (r[(r.Z3_OP_RE_INTERSECT = 1588)] = "Z3_OP_RE_INTERSECT"),
        (r[(r.Z3_OP_RE_LOOP = 1589)] = "Z3_OP_RE_LOOP"),
        (r[(r.Z3_OP_RE_POWER = 1590)] = "Z3_OP_RE_POWER"),
        (r[(r.Z3_OP_RE_COMPLEMENT = 1591)] = "Z3_OP_RE_COMPLEMENT"),
        (r[(r.Z3_OP_RE_EMPTY_SET = 1592)] = "Z3_OP_RE_EMPTY_SET"),
        (r[(r.Z3_OP_RE_FULL_SET = 1593)] = "Z3_OP_RE_FULL_SET"),
        (r[(r.Z3_OP_RE_FULL_CHAR_SET = 1594)] = "Z3_OP_RE_FULL_CHAR_SET"),
        (r[(r.Z3_OP_RE_OF_PRED = 1595)] = "Z3_OP_RE_OF_PRED"),
        (r[(r.Z3_OP_RE_REVERSE = 1596)] = "Z3_OP_RE_REVERSE"),
        (r[(r.Z3_OP_RE_DERIVATIVE = 1597)] = "Z3_OP_RE_DERIVATIVE"),
        (r[(r.Z3_OP_CHAR_CONST = 1598)] = "Z3_OP_CHAR_CONST"),
        (r[(r.Z3_OP_CHAR_LE = 1599)] = "Z3_OP_CHAR_LE"),
        (r[(r.Z3_OP_CHAR_TO_INT = 1600)] = "Z3_OP_CHAR_TO_INT"),
        (r[(r.Z3_OP_CHAR_TO_BV = 1601)] = "Z3_OP_CHAR_TO_BV"),
        (r[(r.Z3_OP_CHAR_FROM_BV = 1602)] = "Z3_OP_CHAR_FROM_BV"),
        (r[(r.Z3_OP_CHAR_IS_DIGIT = 1603)] = "Z3_OP_CHAR_IS_DIGIT"),
        (r[(r.Z3_OP_LABEL = 1792)] = "Z3_OP_LABEL"),
        (r[(r.Z3_OP_LABEL_LIT = 1793)] = "Z3_OP_LABEL_LIT"),
        (r[(r.Z3_OP_DT_CONSTRUCTOR = 2048)] = "Z3_OP_DT_CONSTRUCTOR"),
        (r[(r.Z3_OP_DT_RECOGNISER = 2049)] = "Z3_OP_DT_RECOGNISER"),
        (r[(r.Z3_OP_DT_IS = 2050)] = "Z3_OP_DT_IS"),
        (r[(r.Z3_OP_DT_ACCESSOR = 2051)] = "Z3_OP_DT_ACCESSOR"),
        (r[(r.Z3_OP_DT_UPDATE_FIELD = 2052)] = "Z3_OP_DT_UPDATE_FIELD"),
        (r[(r.Z3_OP_PB_AT_MOST = 2304)] = "Z3_OP_PB_AT_MOST"),
        (r[(r.Z3_OP_PB_AT_LEAST = 2305)] = "Z3_OP_PB_AT_LEAST"),
        (r[(r.Z3_OP_PB_LE = 2306)] = "Z3_OP_PB_LE"),
        (r[(r.Z3_OP_PB_GE = 2307)] = "Z3_OP_PB_GE"),
        (r[(r.Z3_OP_PB_EQ = 2308)] = "Z3_OP_PB_EQ"),
        (r[(r.Z3_OP_SPECIAL_RELATION_LO = 40960)] = "Z3_OP_SPECIAL_RELATION_LO"),
        (r[(r.Z3_OP_SPECIAL_RELATION_PO = 40961)] = "Z3_OP_SPECIAL_RELATION_PO"),
        (r[(r.Z3_OP_SPECIAL_RELATION_PLO = 40962)] = "Z3_OP_SPECIAL_RELATION_PLO"),
        (r[(r.Z3_OP_SPECIAL_RELATION_TO = 40963)] = "Z3_OP_SPECIAL_RELATION_TO"),
        (r[(r.Z3_OP_SPECIAL_RELATION_TC = 40964)] = "Z3_OP_SPECIAL_RELATION_TC"),
        (r[(r.Z3_OP_SPECIAL_RELATION_TRC = 40965)] = "Z3_OP_SPECIAL_RELATION_TRC"),
        (r[(r.Z3_OP_FPA_RM_NEAREST_TIES_TO_EVEN = 45056)] = "Z3_OP_FPA_RM_NEAREST_TIES_TO_EVEN"),
        (r[(r.Z3_OP_FPA_RM_NEAREST_TIES_TO_AWAY = 45057)] = "Z3_OP_FPA_RM_NEAREST_TIES_TO_AWAY"),
        (r[(r.Z3_OP_FPA_RM_TOWARD_POSITIVE = 45058)] = "Z3_OP_FPA_RM_TOWARD_POSITIVE"),
        (r[(r.Z3_OP_FPA_RM_TOWARD_NEGATIVE = 45059)] = "Z3_OP_FPA_RM_TOWARD_NEGATIVE"),
        (r[(r.Z3_OP_FPA_RM_TOWARD_ZERO = 45060)] = "Z3_OP_FPA_RM_TOWARD_ZERO"),
        (r[(r.Z3_OP_FPA_NUM = 45061)] = "Z3_OP_FPA_NUM"),
        (r[(r.Z3_OP_FPA_PLUS_INF = 45062)] = "Z3_OP_FPA_PLUS_INF"),
        (r[(r.Z3_OP_FPA_MINUS_INF = 45063)] = "Z3_OP_FPA_MINUS_INF"),
        (r[(r.Z3_OP_FPA_NAN = 45064)] = "Z3_OP_FPA_NAN"),
        (r[(r.Z3_OP_FPA_PLUS_ZERO = 45065)] = "Z3_OP_FPA_PLUS_ZERO"),
        (r[(r.Z3_OP_FPA_MINUS_ZERO = 45066)] = "Z3_OP_FPA_MINUS_ZERO"),
        (r[(r.Z3_OP_FPA_ADD = 45067)] = "Z3_OP_FPA_ADD"),
        (r[(r.Z3_OP_FPA_SUB = 45068)] = "Z3_OP_FPA_SUB"),
        (r[(r.Z3_OP_FPA_NEG = 45069)] = "Z3_OP_FPA_NEG"),
        (r[(r.Z3_OP_FPA_MUL = 45070)] = "Z3_OP_FPA_MUL"),
        (r[(r.Z3_OP_FPA_DIV = 45071)] = "Z3_OP_FPA_DIV"),
        (r[(r.Z3_OP_FPA_REM = 45072)] = "Z3_OP_FPA_REM"),
        (r[(r.Z3_OP_FPA_ABS = 45073)] = "Z3_OP_FPA_ABS"),
        (r[(r.Z3_OP_FPA_MIN = 45074)] = "Z3_OP_FPA_MIN"),
        (r[(r.Z3_OP_FPA_MAX = 45075)] = "Z3_OP_FPA_MAX"),
        (r[(r.Z3_OP_FPA_FMA = 45076)] = "Z3_OP_FPA_FMA"),
        (r[(r.Z3_OP_FPA_SQRT = 45077)] = "Z3_OP_FPA_SQRT"),
        (r[(r.Z3_OP_FPA_ROUND_TO_INTEGRAL = 45078)] = "Z3_OP_FPA_ROUND_TO_INTEGRAL"),
        (r[(r.Z3_OP_FPA_EQ = 45079)] = "Z3_OP_FPA_EQ"),
        (r[(r.Z3_OP_FPA_LT = 45080)] = "Z3_OP_FPA_LT"),
        (r[(r.Z3_OP_FPA_GT = 45081)] = "Z3_OP_FPA_GT"),
        (r[(r.Z3_OP_FPA_LE = 45082)] = "Z3_OP_FPA_LE"),
        (r[(r.Z3_OP_FPA_GE = 45083)] = "Z3_OP_FPA_GE"),
        (r[(r.Z3_OP_FPA_IS_NAN = 45084)] = "Z3_OP_FPA_IS_NAN"),
        (r[(r.Z3_OP_FPA_IS_INF = 45085)] = "Z3_OP_FPA_IS_INF"),
        (r[(r.Z3_OP_FPA_IS_ZERO = 45086)] = "Z3_OP_FPA_IS_ZERO"),
        (r[(r.Z3_OP_FPA_IS_NORMAL = 45087)] = "Z3_OP_FPA_IS_NORMAL"),
        (r[(r.Z3_OP_FPA_IS_SUBNORMAL = 45088)] = "Z3_OP_FPA_IS_SUBNORMAL"),
        (r[(r.Z3_OP_FPA_IS_NEGATIVE = 45089)] = "Z3_OP_FPA_IS_NEGATIVE"),
        (r[(r.Z3_OP_FPA_IS_POSITIVE = 45090)] = "Z3_OP_FPA_IS_POSITIVE"),
        (r[(r.Z3_OP_FPA_FP = 45091)] = "Z3_OP_FPA_FP"),
        (r[(r.Z3_OP_FPA_TO_FP = 45092)] = "Z3_OP_FPA_TO_FP"),
        (r[(r.Z3_OP_FPA_TO_FP_UNSIGNED = 45093)] = "Z3_OP_FPA_TO_FP_UNSIGNED"),
        (r[(r.Z3_OP_FPA_TO_UBV = 45094)] = "Z3_OP_FPA_TO_UBV"),
        (r[(r.Z3_OP_FPA_TO_SBV = 45095)] = "Z3_OP_FPA_TO_SBV"),
        (r[(r.Z3_OP_FPA_TO_REAL = 45096)] = "Z3_OP_FPA_TO_REAL"),
        (r[(r.Z3_OP_FPA_TO_IEEE_BV = 45097)] = "Z3_OP_FPA_TO_IEEE_BV"),
        (r[(r.Z3_OP_FPA_BVWRAP = 45098)] = "Z3_OP_FPA_BVWRAP"),
        (r[(r.Z3_OP_FPA_BV2RM = 45099)] = "Z3_OP_FPA_BV2RM"),
        (r[(r.Z3_OP_INTERNAL = 45100)] = "Z3_OP_INTERNAL"),
        (r[(r.Z3_OP_RECURSIVE = 45101)] = "Z3_OP_RECURSIVE"),
        (r[(r.Z3_OP_UNINTERPRETED = 45102)] = "Z3_OP_UNINTERPRETED");
    })(E || (H.Z3_decl_kind = E = {}));
    var w;
    (function (r) {
      (r[(r.Z3_PK_UINT = 0)] = "Z3_PK_UINT"),
        (r[(r.Z3_PK_BOOL = 1)] = "Z3_PK_BOOL"),
        (r[(r.Z3_PK_DOUBLE = 2)] = "Z3_PK_DOUBLE"),
        (r[(r.Z3_PK_SYMBOL = 3)] = "Z3_PK_SYMBOL"),
        (r[(r.Z3_PK_STRING = 4)] = "Z3_PK_STRING"),
        (r[(r.Z3_PK_OTHER = 5)] = "Z3_PK_OTHER"),
        (r[(r.Z3_PK_INVALID = 6)] = "Z3_PK_INVALID");
    })(w || (H.Z3_param_kind = w = {}));
    var O;
    (function (r) {
      (r[(r.Z3_PRINT_SMTLIB_FULL = 0)] = "Z3_PRINT_SMTLIB_FULL"),
        (r[(r.Z3_PRINT_LOW_LEVEL = 1)] = "Z3_PRINT_LOW_LEVEL"),
        (r[(r.Z3_PRINT_SMTLIB2_COMPLIANT = 2)] = "Z3_PRINT_SMTLIB2_COMPLIANT");
    })(O || (H.Z3_ast_print_mode = O = {}));
    var a;
    (function (r) {
      (r[(r.Z3_OK = 0)] = "Z3_OK"),
        (r[(r.Z3_SORT_ERROR = 1)] = "Z3_SORT_ERROR"),
        (r[(r.Z3_IOB = 2)] = "Z3_IOB"),
        (r[(r.Z3_INVALID_ARG = 3)] = "Z3_INVALID_ARG"),
        (r[(r.Z3_PARSER_ERROR = 4)] = "Z3_PARSER_ERROR"),
        (r[(r.Z3_NO_PARSER = 5)] = "Z3_NO_PARSER"),
        (r[(r.Z3_INVALID_PATTERN = 6)] = "Z3_INVALID_PATTERN"),
        (r[(r.Z3_MEMOUT_FAIL = 7)] = "Z3_MEMOUT_FAIL"),
        (r[(r.Z3_FILE_ACCESS_ERROR = 8)] = "Z3_FILE_ACCESS_ERROR"),
        (r[(r.Z3_INTERNAL_FATAL = 9)] = "Z3_INTERNAL_FATAL"),
        (r[(r.Z3_INVALID_USAGE = 10)] = "Z3_INVALID_USAGE"),
        (r[(r.Z3_DEC_REF_ERROR = 11)] = "Z3_DEC_REF_ERROR"),
        (r[(r.Z3_EXCEPTION = 12)] = "Z3_EXCEPTION");
    })(a || (H.Z3_error_code = a = {}));
    var S;
    return (
      (function (r) {
        (r[(r.Z3_GOAL_PRECISE = 0)] = "Z3_GOAL_PRECISE"),
          (r[(r.Z3_GOAL_UNDER = 1)] = "Z3_GOAL_UNDER"),
          (r[(r.Z3_GOAL_OVER = 2)] = "Z3_GOAL_OVER"),
          (r[(r.Z3_GOAL_UNDER_OVER = 3)] = "Z3_GOAL_UNDER_OVER");
      })(S || (H.Z3_goal_prec = S = {})),
      H
    );
  }
  var Sr = {},
    cn;
  function m_() {
    if (cn) return Sr;
    (cn = 1), Object.defineProperty(Sr, "__esModule", { value: !0 }), (Sr.init = g);
    async function g(f) {
      let t = await f();
      function c(_) {
        return new Uint8Array(new Uint32Array(_).buffer);
      }
      function b(_) {
        return _.map((n) => (n ? 1 : 0));
      }
      function E(_, n) {
        return Array.from(new Uint32Array(t.HEAPU32.buffer, _, n));
      }
      let w = t._malloc(24),
        O = new Uint32Array(t.HEAPU32.buffer, w, 4),
        a = (_) => O[_],
        S = new Int32Array(t.HEAPU32.buffer, w, 4),
        r = (_) => S[_],
        U = new BigUint64Array(t.HEAPU32.buffer, w, 2),
        Y = (_) => U[_],
        I = new BigInt64Array(t.HEAPU32.buffer, w, 2),
        N = (_) => I[_];
      return {
        em: t,
        Z3: {
          mk_context: function (_) {
            let n = t._Z3_mk_context(_);
            return t._set_noop_error_handler(n), n;
          },
          mk_context_rc: function (_) {
            let n = t._Z3_mk_context_rc(_);
            return t._set_noop_error_handler(n), n;
          },
          global_param_set: function (_, n) {
            return t.ccall("Z3_global_param_set", "void", ["string", "string"], [_, n]);
          },
          global_param_reset_all: t._Z3_global_param_reset_all,
          global_param_get: function (_) {
            return t.ccall("Z3_global_param_get", "boolean", ["string", "number"], [_, w]) ? t.UTF8ToString(a(0)) : null;
          },
          mk_config: t._Z3_mk_config,
          del_config: t._Z3_del_config,
          set_param_value: function (_, n, u) {
            return t.ccall("Z3_set_param_value", "void", ["number", "string", "string"], [_, n, u]);
          },
          del_context: t._Z3_del_context,
          inc_ref: t._Z3_inc_ref,
          dec_ref: t._Z3_dec_ref,
          update_param_value: function (_, n, u) {
            return t.ccall("Z3_update_param_value", "void", ["number", "string", "string"], [_, n, u]);
          },
          get_global_param_descrs: t._Z3_get_global_param_descrs,
          interrupt: t._Z3_interrupt,
          enable_concurrent_dec_ref: t._Z3_enable_concurrent_dec_ref,
          mk_params: t._Z3_mk_params,
          params_inc_ref: t._Z3_params_inc_ref,
          params_dec_ref: t._Z3_params_dec_ref,
          params_set_bool: t._Z3_params_set_bool,
          params_set_uint: t._Z3_params_set_uint,
          params_set_double: t._Z3_params_set_double,
          params_set_symbol: t._Z3_params_set_symbol,
          params_to_string: function (_, n) {
            return t.ccall("Z3_params_to_string", "string", ["number", "number"], [_, n]);
          },
          params_validate: t._Z3_params_validate,
          param_descrs_inc_ref: t._Z3_param_descrs_inc_ref,
          param_descrs_dec_ref: t._Z3_param_descrs_dec_ref,
          param_descrs_get_kind: t._Z3_param_descrs_get_kind,
          param_descrs_size: function (_, n) {
            let u = t.ccall("Z3_param_descrs_size", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          param_descrs_get_name: t._Z3_param_descrs_get_name,
          param_descrs_get_documentation: function (_, n, u) {
            return t.ccall("Z3_param_descrs_get_documentation", "string", ["number", "number", "number"], [_, n, u]);
          },
          param_descrs_to_string: function (_, n) {
            return t.ccall("Z3_param_descrs_to_string", "string", ["number", "number"], [_, n]);
          },
          mk_int_symbol: t._Z3_mk_int_symbol,
          mk_string_symbol: function (_, n) {
            return t.ccall("Z3_mk_string_symbol", "number", ["number", "string"], [_, n]);
          },
          mk_uninterpreted_sort: t._Z3_mk_uninterpreted_sort,
          mk_type_variable: t._Z3_mk_type_variable,
          mk_bool_sort: t._Z3_mk_bool_sort,
          mk_int_sort: t._Z3_mk_int_sort,
          mk_real_sort: t._Z3_mk_real_sort,
          mk_bv_sort: t._Z3_mk_bv_sort,
          mk_finite_domain_sort: t._Z3_mk_finite_domain_sort,
          mk_array_sort: t._Z3_mk_array_sort,
          mk_array_sort_n: function (_, n, u) {
            return t.ccall("Z3_mk_array_sort_n", "number", ["number", "number", "array", "number"], [_, n.length, c(n), u]);
          },
          mk_tuple_sort: function (_, n, u, A) {
            if (u.length !== A.length)
              throw new TypeError(`field_names and field_sorts must be the same length (got ${u.length} and {field_sorts.length})`);
            let Z = t._malloc(4 * u.length);
            try {
              return {
                rv: t.ccall(
                  "Z3_mk_tuple_sort",
                  "number",
                  ["number", "number", "number", "array", "array", "number", "number"],
                  [_, n, u.length, c(u), c(A), w, Z],
                ),
                mk_tuple_decl: a(0),
                proj_decl: E(Z, u.length),
              };
            } finally {
              t._free(Z);
            }
          },
          mk_enumeration_sort: function (_, n, u) {
            let A = t._malloc(4 * u.length);
            try {
              let Z = t._malloc(4 * u.length);
              try {
                return {
                  rv: t.ccall(
                    "Z3_mk_enumeration_sort",
                    "number",
                    ["number", "number", "number", "array", "number", "number"],
                    [_, n, u.length, c(u), A, Z],
                  ),
                  enum_consts: E(A, u.length),
                  enum_testers: E(Z, u.length),
                };
              } finally {
                t._free(Z);
              }
            } finally {
              t._free(A);
            }
          },
          mk_list_sort: function (_, n, u) {
            return {
              rv: t.ccall(
                "Z3_mk_list_sort",
                "number",
                ["number", "number", "number", "number", "number", "number", "number", "number", "number"],
                [_, n, u, w, w + 4, w + 8, w + 12, w + 16, w + 20],
              ),
              nil_decl: a(0),
              is_nil_decl: a(1),
              cons_decl: a(2),
              is_cons_decl: a(3),
              head_decl: a(4),
              tail_decl: a(5),
            };
          },
          mk_constructor: function (_, n, u, A, Z, d) {
            if (A.length !== Z.length) throw new TypeError(`field_names and sorts must be the same length (got ${A.length} and {sorts.length})`);
            if (A.length !== d.length)
              throw new TypeError(`field_names and sort_refs must be the same length (got ${A.length} and {sort_refs.length})`);
            return t.ccall(
              "Z3_mk_constructor",
              "number",
              ["number", "number", "number", "number", "array", "array", "array"],
              [_, n, u, A.length, c(A), c(Z), c(d)],
            );
          },
          constructor_num_fields: function (_, n) {
            let u = t.ccall("Z3_constructor_num_fields", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          del_constructor: t._Z3_del_constructor,
          mk_datatype: function (_, n, u) {
            return t.ccall("Z3_mk_datatype", "number", ["number", "number", "number", "array"], [_, n, u.length, c(u)]);
          },
          mk_datatype_sort: t._Z3_mk_datatype_sort,
          mk_constructor_list: function (_, n) {
            return t.ccall("Z3_mk_constructor_list", "number", ["number", "number", "array"], [_, n.length, c(n)]);
          },
          del_constructor_list: t._Z3_del_constructor_list,
          mk_datatypes: function (_, n, u) {
            if (n.length !== u.length)
              throw new TypeError(`sort_names and constructor_lists must be the same length (got ${n.length} and {constructor_lists.length})`);
            let A = t._malloc(4 * n.length);
            try {
              let Z = t.ccall("Z3_mk_datatypes", "void", ["number", "number", "array", "number", "array"], [_, n.length, c(n), A, c(u)]);
              return E(A, n.length);
            } finally {
              t._free(A);
            }
          },
          query_constructor: function (_, n, u) {
            let A = t._malloc(4 * u);
            try {
              let Z = t.ccall("Z3_query_constructor", "void", ["number", "number", "number", "number", "number", "number"], [_, n, u, w, w + 4, A]);
              return { constructor: a(0), tester: a(1), accessors: E(A, u) };
            } finally {
              t._free(A);
            }
          },
          mk_func_decl: function (_, n, u, A) {
            return t.ccall("Z3_mk_func_decl", "number", ["number", "number", "number", "array", "number"], [_, n, u.length, c(u), A]);
          },
          mk_app: function (_, n, u) {
            return t.ccall("Z3_mk_app", "number", ["number", "number", "number", "array"], [_, n, u.length, c(u)]);
          },
          mk_const: t._Z3_mk_const,
          mk_fresh_func_decl: function (_, n, u, A) {
            return t.ccall("Z3_mk_fresh_func_decl", "number", ["number", "string", "number", "array", "number"], [_, n, u.length, c(u), A]);
          },
          mk_fresh_const: function (_, n, u) {
            return t.ccall("Z3_mk_fresh_const", "number", ["number", "string", "number"], [_, n, u]);
          },
          mk_rec_func_decl: function (_, n, u, A) {
            return t.ccall("Z3_mk_rec_func_decl", "number", ["number", "number", "number", "array", "number"], [_, n, u.length, c(u), A]);
          },
          add_rec_def: function (_, n, u, A) {
            return t.ccall("Z3_add_rec_def", "void", ["number", "number", "number", "array", "number"], [_, n, u.length, c(u), A]);
          },
          mk_true: t._Z3_mk_true,
          mk_false: t._Z3_mk_false,
          mk_eq: t._Z3_mk_eq,
          mk_distinct: function (_, n) {
            return t.ccall("Z3_mk_distinct", "number", ["number", "number", "array"], [_, n.length, c(n)]);
          },
          mk_not: t._Z3_mk_not,
          mk_ite: t._Z3_mk_ite,
          mk_iff: t._Z3_mk_iff,
          mk_implies: t._Z3_mk_implies,
          mk_xor: t._Z3_mk_xor,
          mk_and: function (_, n) {
            return t.ccall("Z3_mk_and", "number", ["number", "number", "array"], [_, n.length, c(n)]);
          },
          mk_or: function (_, n) {
            return t.ccall("Z3_mk_or", "number", ["number", "number", "array"], [_, n.length, c(n)]);
          },
          mk_add: function (_, n) {
            return t.ccall("Z3_mk_add", "number", ["number", "number", "array"], [_, n.length, c(n)]);
          },
          mk_mul: function (_, n) {
            return t.ccall("Z3_mk_mul", "number", ["number", "number", "array"], [_, n.length, c(n)]);
          },
          mk_sub: function (_, n) {
            return t.ccall("Z3_mk_sub", "number", ["number", "number", "array"], [_, n.length, c(n)]);
          },
          mk_unary_minus: t._Z3_mk_unary_minus,
          mk_div: t._Z3_mk_div,
          mk_mod: t._Z3_mk_mod,
          mk_rem: t._Z3_mk_rem,
          mk_power: t._Z3_mk_power,
          mk_abs: t._Z3_mk_abs,
          mk_lt: t._Z3_mk_lt,
          mk_le: t._Z3_mk_le,
          mk_gt: t._Z3_mk_gt,
          mk_ge: t._Z3_mk_ge,
          mk_divides: t._Z3_mk_divides,
          mk_int2real: t._Z3_mk_int2real,
          mk_real2int: t._Z3_mk_real2int,
          mk_is_int: t._Z3_mk_is_int,
          mk_bvnot: t._Z3_mk_bvnot,
          mk_bvredand: t._Z3_mk_bvredand,
          mk_bvredor: t._Z3_mk_bvredor,
          mk_bvand: t._Z3_mk_bvand,
          mk_bvor: t._Z3_mk_bvor,
          mk_bvxor: t._Z3_mk_bvxor,
          mk_bvnand: t._Z3_mk_bvnand,
          mk_bvnor: t._Z3_mk_bvnor,
          mk_bvxnor: t._Z3_mk_bvxnor,
          mk_bvneg: t._Z3_mk_bvneg,
          mk_bvadd: t._Z3_mk_bvadd,
          mk_bvsub: t._Z3_mk_bvsub,
          mk_bvmul: t._Z3_mk_bvmul,
          mk_bvudiv: t._Z3_mk_bvudiv,
          mk_bvsdiv: t._Z3_mk_bvsdiv,
          mk_bvurem: t._Z3_mk_bvurem,
          mk_bvsrem: t._Z3_mk_bvsrem,
          mk_bvsmod: t._Z3_mk_bvsmod,
          mk_bvult: t._Z3_mk_bvult,
          mk_bvslt: t._Z3_mk_bvslt,
          mk_bvule: t._Z3_mk_bvule,
          mk_bvsle: t._Z3_mk_bvsle,
          mk_bvuge: t._Z3_mk_bvuge,
          mk_bvsge: t._Z3_mk_bvsge,
          mk_bvugt: t._Z3_mk_bvugt,
          mk_bvsgt: t._Z3_mk_bvsgt,
          mk_concat: t._Z3_mk_concat,
          mk_extract: t._Z3_mk_extract,
          mk_sign_ext: t._Z3_mk_sign_ext,
          mk_zero_ext: t._Z3_mk_zero_ext,
          mk_repeat: t._Z3_mk_repeat,
          mk_bit2bool: t._Z3_mk_bit2bool,
          mk_bvshl: t._Z3_mk_bvshl,
          mk_bvlshr: t._Z3_mk_bvlshr,
          mk_bvashr: t._Z3_mk_bvashr,
          mk_rotate_left: t._Z3_mk_rotate_left,
          mk_rotate_right: t._Z3_mk_rotate_right,
          mk_ext_rotate_left: t._Z3_mk_ext_rotate_left,
          mk_ext_rotate_right: t._Z3_mk_ext_rotate_right,
          mk_int2bv: t._Z3_mk_int2bv,
          mk_bv2int: t._Z3_mk_bv2int,
          mk_bvadd_no_overflow: t._Z3_mk_bvadd_no_overflow,
          mk_bvadd_no_underflow: t._Z3_mk_bvadd_no_underflow,
          mk_bvsub_no_overflow: t._Z3_mk_bvsub_no_overflow,
          mk_bvsub_no_underflow: t._Z3_mk_bvsub_no_underflow,
          mk_bvsdiv_no_overflow: t._Z3_mk_bvsdiv_no_overflow,
          mk_bvneg_no_overflow: t._Z3_mk_bvneg_no_overflow,
          mk_bvmul_no_overflow: t._Z3_mk_bvmul_no_overflow,
          mk_bvmul_no_underflow: t._Z3_mk_bvmul_no_underflow,
          mk_select: t._Z3_mk_select,
          mk_select_n: function (_, n, u) {
            return t.ccall("Z3_mk_select_n", "number", ["number", "number", "number", "array"], [_, n, u.length, c(u)]);
          },
          mk_store: t._Z3_mk_store,
          mk_store_n: function (_, n, u, A) {
            return t.ccall("Z3_mk_store_n", "number", ["number", "number", "number", "array", "number"], [_, n, u.length, c(u), A]);
          },
          mk_const_array: t._Z3_mk_const_array,
          mk_map: function (_, n, u) {
            return t.ccall("Z3_mk_map", "number", ["number", "number", "number", "array"], [_, n, u.length, c(u)]);
          },
          mk_array_default: t._Z3_mk_array_default,
          mk_as_array: t._Z3_mk_as_array,
          mk_set_has_size: t._Z3_mk_set_has_size,
          mk_set_sort: t._Z3_mk_set_sort,
          mk_empty_set: t._Z3_mk_empty_set,
          mk_full_set: t._Z3_mk_full_set,
          mk_set_add: t._Z3_mk_set_add,
          mk_set_del: t._Z3_mk_set_del,
          mk_set_union: function (_, n) {
            return t.ccall("Z3_mk_set_union", "number", ["number", "number", "array"], [_, n.length, c(n)]);
          },
          mk_set_intersect: function (_, n) {
            return t.ccall("Z3_mk_set_intersect", "number", ["number", "number", "array"], [_, n.length, c(n)]);
          },
          mk_set_difference: t._Z3_mk_set_difference,
          mk_set_complement: t._Z3_mk_set_complement,
          mk_set_member: t._Z3_mk_set_member,
          mk_set_subset: t._Z3_mk_set_subset,
          mk_array_ext: t._Z3_mk_array_ext,
          mk_numeral: function (_, n, u) {
            return t.ccall("Z3_mk_numeral", "number", ["number", "string", "number"], [_, n, u]);
          },
          mk_real: t._Z3_mk_real,
          mk_real_int64: t._Z3_mk_real_int64,
          mk_int: t._Z3_mk_int,
          mk_unsigned_int: t._Z3_mk_unsigned_int,
          mk_int64: t._Z3_mk_int64,
          mk_unsigned_int64: t._Z3_mk_unsigned_int64,
          mk_bv_numeral: function (_, n) {
            return t.ccall("Z3_mk_bv_numeral", "number", ["number", "number", "array"], [_, n.length, b(n)]);
          },
          mk_seq_sort: t._Z3_mk_seq_sort,
          is_seq_sort: function (_, n) {
            return t.ccall("Z3_is_seq_sort", "boolean", ["number", "number"], [_, n]);
          },
          get_seq_sort_basis: t._Z3_get_seq_sort_basis,
          mk_re_sort: t._Z3_mk_re_sort,
          is_re_sort: function (_, n) {
            return t.ccall("Z3_is_re_sort", "boolean", ["number", "number"], [_, n]);
          },
          get_re_sort_basis: t._Z3_get_re_sort_basis,
          mk_string_sort: t._Z3_mk_string_sort,
          mk_char_sort: t._Z3_mk_char_sort,
          is_string_sort: function (_, n) {
            return t.ccall("Z3_is_string_sort", "boolean", ["number", "number"], [_, n]);
          },
          is_char_sort: function (_, n) {
            return t.ccall("Z3_is_char_sort", "boolean", ["number", "number"], [_, n]);
          },
          mk_string: function (_, n) {
            return t.ccall("Z3_mk_string", "number", ["number", "string"], [_, n]);
          },
          mk_lstring: function (_, n, u) {
            return t.ccall("Z3_mk_lstring", "number", ["number", "number", "string"], [_, n, u]);
          },
          mk_u32string: function (_, n) {
            return t.ccall("Z3_mk_u32string", "number", ["number", "number", "array"], [_, n.length, c(n)]);
          },
          is_string: function (_, n) {
            return t.ccall("Z3_is_string", "boolean", ["number", "number"], [_, n]);
          },
          get_string: function (_, n) {
            return t.ccall("Z3_get_string", "string", ["number", "number"], [_, n]);
          },
          get_string_length: function (_, n) {
            let u = t.ccall("Z3_get_string_length", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          get_string_contents: function (_, n, u) {
            let A = t._malloc(4 * u);
            try {
              let Z = t.ccall("Z3_get_string_contents", "void", ["number", "number", "number", "number"], [_, n, u, A]);
              return E(A, u);
            } finally {
              t._free(A);
            }
          },
          mk_seq_empty: t._Z3_mk_seq_empty,
          mk_seq_unit: t._Z3_mk_seq_unit,
          mk_seq_concat: function (_, n) {
            return t.ccall("Z3_mk_seq_concat", "number", ["number", "number", "array"], [_, n.length, c(n)]);
          },
          mk_seq_prefix: t._Z3_mk_seq_prefix,
          mk_seq_suffix: t._Z3_mk_seq_suffix,
          mk_seq_contains: t._Z3_mk_seq_contains,
          mk_str_lt: t._Z3_mk_str_lt,
          mk_str_le: t._Z3_mk_str_le,
          mk_seq_extract: t._Z3_mk_seq_extract,
          mk_seq_replace: t._Z3_mk_seq_replace,
          mk_seq_at: t._Z3_mk_seq_at,
          mk_seq_nth: t._Z3_mk_seq_nth,
          mk_seq_length: t._Z3_mk_seq_length,
          mk_seq_index: t._Z3_mk_seq_index,
          mk_seq_last_index: t._Z3_mk_seq_last_index,
          mk_seq_map: t._Z3_mk_seq_map,
          mk_seq_mapi: t._Z3_mk_seq_mapi,
          mk_seq_foldl: t._Z3_mk_seq_foldl,
          mk_seq_foldli: t._Z3_mk_seq_foldli,
          mk_str_to_int: t._Z3_mk_str_to_int,
          mk_int_to_str: t._Z3_mk_int_to_str,
          mk_string_to_code: t._Z3_mk_string_to_code,
          mk_string_from_code: t._Z3_mk_string_from_code,
          mk_ubv_to_str: t._Z3_mk_ubv_to_str,
          mk_sbv_to_str: t._Z3_mk_sbv_to_str,
          mk_seq_to_re: t._Z3_mk_seq_to_re,
          mk_seq_in_re: t._Z3_mk_seq_in_re,
          mk_re_plus: t._Z3_mk_re_plus,
          mk_re_star: t._Z3_mk_re_star,
          mk_re_option: t._Z3_mk_re_option,
          mk_re_union: function (_, n) {
            return t.ccall("Z3_mk_re_union", "number", ["number", "number", "array"], [_, n.length, c(n)]);
          },
          mk_re_concat: function (_, n) {
            return t.ccall("Z3_mk_re_concat", "number", ["number", "number", "array"], [_, n.length, c(n)]);
          },
          mk_re_range: t._Z3_mk_re_range,
          mk_re_allchar: t._Z3_mk_re_allchar,
          mk_re_loop: t._Z3_mk_re_loop,
          mk_re_power: t._Z3_mk_re_power,
          mk_re_intersect: function (_, n) {
            return t.ccall("Z3_mk_re_intersect", "number", ["number", "number", "array"], [_, n.length, c(n)]);
          },
          mk_re_complement: t._Z3_mk_re_complement,
          mk_re_diff: t._Z3_mk_re_diff,
          mk_re_empty: t._Z3_mk_re_empty,
          mk_re_full: t._Z3_mk_re_full,
          mk_char: t._Z3_mk_char,
          mk_char_le: t._Z3_mk_char_le,
          mk_char_to_int: t._Z3_mk_char_to_int,
          mk_char_to_bv: t._Z3_mk_char_to_bv,
          mk_char_from_bv: t._Z3_mk_char_from_bv,
          mk_char_is_digit: t._Z3_mk_char_is_digit,
          mk_linear_order: t._Z3_mk_linear_order,
          mk_partial_order: t._Z3_mk_partial_order,
          mk_piecewise_linear_order: t._Z3_mk_piecewise_linear_order,
          mk_tree_order: t._Z3_mk_tree_order,
          mk_transitive_closure: t._Z3_mk_transitive_closure,
          mk_pattern: function (_, n) {
            return t.ccall("Z3_mk_pattern", "number", ["number", "number", "array"], [_, n.length, c(n)]);
          },
          mk_bound: t._Z3_mk_bound,
          mk_forall: function (_, n, u, A, Z, d) {
            if (A.length !== Z.length) throw new TypeError(`sorts and decl_names must be the same length (got ${A.length} and {decl_names.length})`);
            return t.ccall(
              "Z3_mk_forall",
              "number",
              ["number", "number", "number", "array", "number", "array", "array", "number"],
              [_, n, u.length, c(u), A.length, c(A), c(Z), d],
            );
          },
          mk_exists: function (_, n, u, A, Z, d) {
            if (A.length !== Z.length) throw new TypeError(`sorts and decl_names must be the same length (got ${A.length} and {decl_names.length})`);
            return t.ccall(
              "Z3_mk_exists",
              "number",
              ["number", "number", "number", "array", "number", "array", "array", "number"],
              [_, n, u.length, c(u), A.length, c(A), c(Z), d],
            );
          },
          mk_quantifier: function (_, n, u, A, Z, d, B) {
            if (Z.length !== d.length) throw new TypeError(`sorts and decl_names must be the same length (got ${Z.length} and {decl_names.length})`);
            return t.ccall(
              "Z3_mk_quantifier",
              "number",
              ["number", "boolean", "number", "number", "array", "number", "array", "array", "number"],
              [_, n, u, A.length, c(A), Z.length, c(Z), c(d), B],
            );
          },
          mk_quantifier_ex: function (_, n, u, A, Z, d, B, nt, ot, l) {
            if (nt.length !== ot.length)
              throw new TypeError(`sorts and decl_names must be the same length (got ${nt.length} and {decl_names.length})`);
            return t.ccall(
              "Z3_mk_quantifier_ex",
              "number",
              ["number", "boolean", "number", "number", "number", "number", "array", "number", "array", "number", "array", "array", "number"],
              [_, n, u, A, Z, d.length, c(d), B.length, c(B), nt.length, c(nt), c(ot), l],
            );
          },
          mk_forall_const: function (_, n, u, A, Z) {
            return t.ccall(
              "Z3_mk_forall_const",
              "number",
              ["number", "number", "number", "array", "number", "array", "number"],
              [_, n, u.length, c(u), A.length, c(A), Z],
            );
          },
          mk_exists_const: function (_, n, u, A, Z) {
            return t.ccall(
              "Z3_mk_exists_const",
              "number",
              ["number", "number", "number", "array", "number", "array", "number"],
              [_, n, u.length, c(u), A.length, c(A), Z],
            );
          },
          mk_quantifier_const: function (_, n, u, A, Z, d) {
            return t.ccall(
              "Z3_mk_quantifier_const",
              "number",
              ["number", "boolean", "number", "number", "array", "number", "array", "number"],
              [_, n, u, A.length, c(A), Z.length, c(Z), d],
            );
          },
          mk_quantifier_const_ex: function (_, n, u, A, Z, d, B, nt, ot) {
            return t.ccall(
              "Z3_mk_quantifier_const_ex",
              "number",
              ["number", "boolean", "number", "number", "number", "number", "array", "number", "array", "number", "array", "number"],
              [_, n, u, A, Z, d.length, c(d), B.length, c(B), nt.length, c(nt), ot],
            );
          },
          mk_lambda: function (_, n, u, A) {
            if (n.length !== u.length) throw new TypeError(`sorts and decl_names must be the same length (got ${n.length} and {decl_names.length})`);
            return t.ccall("Z3_mk_lambda", "number", ["number", "number", "array", "array", "number"], [_, n.length, c(n), c(u), A]);
          },
          mk_lambda_const: function (_, n, u) {
            return t.ccall("Z3_mk_lambda_const", "number", ["number", "number", "array", "number"], [_, n.length, c(n), u]);
          },
          get_symbol_kind: t._Z3_get_symbol_kind,
          get_symbol_int: t._Z3_get_symbol_int,
          get_symbol_string: function (_, n) {
            return t.ccall("Z3_get_symbol_string", "string", ["number", "number"], [_, n]);
          },
          get_sort_name: t._Z3_get_sort_name,
          get_sort_id: function (_, n) {
            let u = t.ccall("Z3_get_sort_id", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          sort_to_ast: t._Z3_sort_to_ast,
          is_eq_sort: function (_, n, u) {
            return t.ccall("Z3_is_eq_sort", "boolean", ["number", "number", "number"], [_, n, u]);
          },
          get_sort_kind: t._Z3_get_sort_kind,
          get_bv_sort_size: function (_, n) {
            let u = t.ccall("Z3_get_bv_sort_size", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          get_finite_domain_sort_size: function (_, n) {
            return t.ccall("Z3_get_finite_domain_sort_size", "boolean", ["number", "number", "number"], [_, n, w]) ? Y(0) : null;
          },
          get_array_sort_domain: t._Z3_get_array_sort_domain,
          get_array_sort_domain_n: t._Z3_get_array_sort_domain_n,
          get_array_sort_range: t._Z3_get_array_sort_range,
          get_tuple_sort_mk_decl: t._Z3_get_tuple_sort_mk_decl,
          get_tuple_sort_num_fields: function (_, n) {
            let u = t.ccall("Z3_get_tuple_sort_num_fields", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          get_tuple_sort_field_decl: t._Z3_get_tuple_sort_field_decl,
          get_datatype_sort_num_constructors: function (_, n) {
            let u = t.ccall("Z3_get_datatype_sort_num_constructors", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          get_datatype_sort_constructor: t._Z3_get_datatype_sort_constructor,
          get_datatype_sort_recognizer: t._Z3_get_datatype_sort_recognizer,
          get_datatype_sort_constructor_accessor: t._Z3_get_datatype_sort_constructor_accessor,
          datatype_update_field: t._Z3_datatype_update_field,
          get_relation_arity: function (_, n) {
            let u = t.ccall("Z3_get_relation_arity", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          get_relation_column: t._Z3_get_relation_column,
          mk_atmost: function (_, n, u) {
            return t.ccall("Z3_mk_atmost", "number", ["number", "number", "array", "number"], [_, n.length, c(n), u]);
          },
          mk_atleast: function (_, n, u) {
            return t.ccall("Z3_mk_atleast", "number", ["number", "number", "array", "number"], [_, n.length, c(n), u]);
          },
          mk_pble: function (_, n, u, A) {
            if (n.length !== u.length) throw new TypeError(`args and coeffs must be the same length (got ${n.length} and {coeffs.length})`);
            return t.ccall("Z3_mk_pble", "number", ["number", "number", "array", "array", "number"], [_, n.length, c(n), c(u), A]);
          },
          mk_pbge: function (_, n, u, A) {
            if (n.length !== u.length) throw new TypeError(`args and coeffs must be the same length (got ${n.length} and {coeffs.length})`);
            return t.ccall("Z3_mk_pbge", "number", ["number", "number", "array", "array", "number"], [_, n.length, c(n), c(u), A]);
          },
          mk_pbeq: function (_, n, u, A) {
            if (n.length !== u.length) throw new TypeError(`args and coeffs must be the same length (got ${n.length} and {coeffs.length})`);
            return t.ccall("Z3_mk_pbeq", "number", ["number", "number", "array", "array", "number"], [_, n.length, c(n), c(u), A]);
          },
          func_decl_to_ast: t._Z3_func_decl_to_ast,
          is_eq_func_decl: function (_, n, u) {
            return t.ccall("Z3_is_eq_func_decl", "boolean", ["number", "number", "number"], [_, n, u]);
          },
          get_func_decl_id: function (_, n) {
            let u = t.ccall("Z3_get_func_decl_id", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          get_decl_name: t._Z3_get_decl_name,
          get_decl_kind: t._Z3_get_decl_kind,
          get_domain_size: function (_, n) {
            let u = t.ccall("Z3_get_domain_size", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          get_arity: function (_, n) {
            let u = t.ccall("Z3_get_arity", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          get_domain: t._Z3_get_domain,
          get_range: t._Z3_get_range,
          get_decl_num_parameters: function (_, n) {
            let u = t.ccall("Z3_get_decl_num_parameters", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          get_decl_parameter_kind: t._Z3_get_decl_parameter_kind,
          get_decl_int_parameter: t._Z3_get_decl_int_parameter,
          get_decl_double_parameter: t._Z3_get_decl_double_parameter,
          get_decl_symbol_parameter: t._Z3_get_decl_symbol_parameter,
          get_decl_sort_parameter: t._Z3_get_decl_sort_parameter,
          get_decl_ast_parameter: t._Z3_get_decl_ast_parameter,
          get_decl_func_decl_parameter: t._Z3_get_decl_func_decl_parameter,
          get_decl_rational_parameter: function (_, n, u) {
            return t.ccall("Z3_get_decl_rational_parameter", "string", ["number", "number", "number"], [_, n, u]);
          },
          app_to_ast: t._Z3_app_to_ast,
          get_app_decl: t._Z3_get_app_decl,
          get_app_num_args: function (_, n) {
            let u = t.ccall("Z3_get_app_num_args", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          get_app_arg: t._Z3_get_app_arg,
          is_eq_ast: function (_, n, u) {
            return t.ccall("Z3_is_eq_ast", "boolean", ["number", "number", "number"], [_, n, u]);
          },
          get_ast_id: function (_, n) {
            let u = t.ccall("Z3_get_ast_id", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          get_ast_hash: function (_, n) {
            let u = t.ccall("Z3_get_ast_hash", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          get_sort: t._Z3_get_sort,
          is_well_sorted: function (_, n) {
            return t.ccall("Z3_is_well_sorted", "boolean", ["number", "number"], [_, n]);
          },
          get_bool_value: t._Z3_get_bool_value,
          get_ast_kind: t._Z3_get_ast_kind,
          is_app: function (_, n) {
            return t.ccall("Z3_is_app", "boolean", ["number", "number"], [_, n]);
          },
          is_ground: function (_, n) {
            return t.ccall("Z3_is_ground", "boolean", ["number", "number"], [_, n]);
          },
          get_depth: function (_, n) {
            let u = t.ccall("Z3_get_depth", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          is_numeral_ast: function (_, n) {
            return t.ccall("Z3_is_numeral_ast", "boolean", ["number", "number"], [_, n]);
          },
          is_algebraic_number: function (_, n) {
            return t.ccall("Z3_is_algebraic_number", "boolean", ["number", "number"], [_, n]);
          },
          to_app: t._Z3_to_app,
          to_func_decl: t._Z3_to_func_decl,
          get_numeral_string: function (_, n) {
            return t.ccall("Z3_get_numeral_string", "string", ["number", "number"], [_, n]);
          },
          get_numeral_binary_string: function (_, n) {
            return t.ccall("Z3_get_numeral_binary_string", "string", ["number", "number"], [_, n]);
          },
          get_numeral_decimal_string: function (_, n, u) {
            return t.ccall("Z3_get_numeral_decimal_string", "string", ["number", "number", "number"], [_, n, u]);
          },
          get_numeral_double: t._Z3_get_numeral_double,
          get_numerator: t._Z3_get_numerator,
          get_denominator: t._Z3_get_denominator,
          get_numeral_small: function (_, n) {
            return t.ccall("Z3_get_numeral_small", "boolean", ["number", "number", "number", "number"], [_, n, w, w + 8])
              ? { num: N(0), den: N(1) }
              : null;
          },
          get_numeral_int: function (_, n) {
            return t.ccall("Z3_get_numeral_int", "boolean", ["number", "number", "number"], [_, n, w]) ? r(0) : null;
          },
          get_numeral_uint: function (_, n) {
            return t.ccall("Z3_get_numeral_uint", "boolean", ["number", "number", "number"], [_, n, w]) ? a(0) : null;
          },
          get_numeral_uint64: function (_, n) {
            return t.ccall("Z3_get_numeral_uint64", "boolean", ["number", "number", "number"], [_, n, w]) ? Y(0) : null;
          },
          get_numeral_int64: function (_, n) {
            return t.ccall("Z3_get_numeral_int64", "boolean", ["number", "number", "number"], [_, n, w]) ? N(0) : null;
          },
          get_numeral_rational_int64: function (_, n) {
            return t.ccall("Z3_get_numeral_rational_int64", "boolean", ["number", "number", "number", "number"], [_, n, w, w + 8])
              ? { num: N(0), den: N(1) }
              : null;
          },
          get_algebraic_number_lower: t._Z3_get_algebraic_number_lower,
          get_algebraic_number_upper: t._Z3_get_algebraic_number_upper,
          pattern_to_ast: t._Z3_pattern_to_ast,
          get_pattern_num_terms: function (_, n) {
            let u = t.ccall("Z3_get_pattern_num_terms", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          get_pattern: t._Z3_get_pattern,
          get_index_value: function (_, n) {
            let u = t.ccall("Z3_get_index_value", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          is_quantifier_forall: function (_, n) {
            return t.ccall("Z3_is_quantifier_forall", "boolean", ["number", "number"], [_, n]);
          },
          is_quantifier_exists: function (_, n) {
            return t.ccall("Z3_is_quantifier_exists", "boolean", ["number", "number"], [_, n]);
          },
          is_lambda: function (_, n) {
            return t.ccall("Z3_is_lambda", "boolean", ["number", "number"], [_, n]);
          },
          get_quantifier_weight: function (_, n) {
            let u = t.ccall("Z3_get_quantifier_weight", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          get_quantifier_skolem_id: t._Z3_get_quantifier_skolem_id,
          get_quantifier_id: t._Z3_get_quantifier_id,
          get_quantifier_num_patterns: function (_, n) {
            let u = t.ccall("Z3_get_quantifier_num_patterns", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          get_quantifier_pattern_ast: t._Z3_get_quantifier_pattern_ast,
          get_quantifier_num_no_patterns: function (_, n) {
            let u = t.ccall("Z3_get_quantifier_num_no_patterns", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          get_quantifier_no_pattern_ast: t._Z3_get_quantifier_no_pattern_ast,
          get_quantifier_num_bound: function (_, n) {
            let u = t.ccall("Z3_get_quantifier_num_bound", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          get_quantifier_bound_name: t._Z3_get_quantifier_bound_name,
          get_quantifier_bound_sort: t._Z3_get_quantifier_bound_sort,
          get_quantifier_body: t._Z3_get_quantifier_body,
          simplify: function (_, n) {
            return t.async_call(t._async_Z3_simplify, _, n);
          },
          simplify_ex: function (_, n, u) {
            return t.async_call(t._async_Z3_simplify_ex, _, n, u);
          },
          simplify_get_help: function (_) {
            return t.ccall("Z3_simplify_get_help", "string", ["number"], [_]);
          },
          simplify_get_param_descrs: t._Z3_simplify_get_param_descrs,
          update_term: function (_, n, u) {
            return t.ccall("Z3_update_term", "number", ["number", "number", "number", "array"], [_, n, u.length, c(u)]);
          },
          substitute: function (_, n, u, A) {
            if (u.length !== A.length) throw new TypeError(`from and to must be the same length (got ${u.length} and {to.length})`);
            return t.ccall("Z3_substitute", "number", ["number", "number", "number", "array", "array"], [_, n, u.length, c(u), c(A)]);
          },
          substitute_vars: function (_, n, u) {
            return t.ccall("Z3_substitute_vars", "number", ["number", "number", "number", "array"], [_, n, u.length, c(u)]);
          },
          substitute_funs: function (_, n, u, A) {
            if (u.length !== A.length) throw new TypeError(`from and to must be the same length (got ${u.length} and {to.length})`);
            return t.ccall("Z3_substitute_funs", "number", ["number", "number", "number", "array", "array"], [_, n, u.length, c(u), c(A)]);
          },
          translate: t._Z3_translate,
          mk_model: t._Z3_mk_model,
          model_inc_ref: t._Z3_model_inc_ref,
          model_dec_ref: t._Z3_model_dec_ref,
          model_eval: function (_, n, u, A) {
            return t.ccall("Z3_model_eval", "boolean", ["number", "number", "number", "boolean", "number"], [_, n, u, A, w]) ? a(0) : null;
          },
          model_get_const_interp: function (_, n, u) {
            let A = t.ccall("Z3_model_get_const_interp", "number", ["number", "number", "number"], [_, n, u]);
            return A === 0 ? null : A;
          },
          model_has_interp: function (_, n, u) {
            return t.ccall("Z3_model_has_interp", "boolean", ["number", "number", "number"], [_, n, u]);
          },
          model_get_func_interp: function (_, n, u) {
            let A = t.ccall("Z3_model_get_func_interp", "number", ["number", "number", "number"], [_, n, u]);
            return A === 0 ? null : A;
          },
          model_get_num_consts: function (_, n) {
            let u = t.ccall("Z3_model_get_num_consts", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          model_get_const_decl: t._Z3_model_get_const_decl,
          model_get_num_funcs: function (_, n) {
            let u = t.ccall("Z3_model_get_num_funcs", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          model_get_func_decl: t._Z3_model_get_func_decl,
          model_get_num_sorts: function (_, n) {
            let u = t.ccall("Z3_model_get_num_sorts", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          model_get_sort: t._Z3_model_get_sort,
          model_get_sort_universe: t._Z3_model_get_sort_universe,
          model_translate: t._Z3_model_translate,
          is_as_array: function (_, n) {
            return t.ccall("Z3_is_as_array", "boolean", ["number", "number"], [_, n]);
          },
          get_as_array_func_decl: t._Z3_get_as_array_func_decl,
          add_func_interp: t._Z3_add_func_interp,
          add_const_interp: t._Z3_add_const_interp,
          func_interp_inc_ref: t._Z3_func_interp_inc_ref,
          func_interp_dec_ref: t._Z3_func_interp_dec_ref,
          func_interp_get_num_entries: function (_, n) {
            let u = t.ccall("Z3_func_interp_get_num_entries", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          func_interp_get_entry: t._Z3_func_interp_get_entry,
          func_interp_get_else: t._Z3_func_interp_get_else,
          func_interp_set_else: t._Z3_func_interp_set_else,
          func_interp_get_arity: function (_, n) {
            let u = t.ccall("Z3_func_interp_get_arity", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          func_interp_add_entry: t._Z3_func_interp_add_entry,
          func_entry_inc_ref: t._Z3_func_entry_inc_ref,
          func_entry_dec_ref: t._Z3_func_entry_dec_ref,
          func_entry_get_value: t._Z3_func_entry_get_value,
          func_entry_get_num_args: function (_, n) {
            let u = t.ccall("Z3_func_entry_get_num_args", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          func_entry_get_arg: t._Z3_func_entry_get_arg,
          open_log: function (_) {
            return t.ccall("Z3_open_log", "boolean", ["string"], [_]);
          },
          append_log: function (_) {
            return t.ccall("Z3_append_log", "void", ["string"], [_]);
          },
          close_log: t._Z3_close_log,
          toggle_warning_messages: t._Z3_toggle_warning_messages,
          set_ast_print_mode: t._Z3_set_ast_print_mode,
          ast_to_string: function (_, n) {
            return t.ccall("Z3_ast_to_string", "string", ["number", "number"], [_, n]);
          },
          pattern_to_string: function (_, n) {
            return t.ccall("Z3_pattern_to_string", "string", ["number", "number"], [_, n]);
          },
          sort_to_string: function (_, n) {
            return t.ccall("Z3_sort_to_string", "string", ["number", "number"], [_, n]);
          },
          func_decl_to_string: function (_, n) {
            return t.ccall("Z3_func_decl_to_string", "string", ["number", "number"], [_, n]);
          },
          model_to_string: function (_, n) {
            return t.ccall("Z3_model_to_string", "string", ["number", "number"], [_, n]);
          },
          benchmark_to_smtlib_string: function (_, n, u, A, Z, d, B) {
            return t.ccall(
              "Z3_benchmark_to_smtlib_string",
              "string",
              ["number", "string", "string", "string", "string", "number", "array", "number"],
              [_, n, u, A, Z, d.length, c(d), B],
            );
          },
          parse_smtlib2_string: function (_, n, u, A, Z, d) {
            if (u.length !== A.length) throw new TypeError(`sort_names and sorts must be the same length (got ${u.length} and {sorts.length})`);
            if (Z.length !== d.length) throw new TypeError(`decl_names and decls must be the same length (got ${Z.length} and {decls.length})`);
            return t.ccall(
              "Z3_parse_smtlib2_string",
              "number",
              ["number", "string", "number", "array", "array", "number", "array", "array"],
              [_, n, u.length, c(u), c(A), Z.length, c(Z), c(d)],
            );
          },
          parse_smtlib2_file: function (_, n, u, A, Z, d) {
            if (u.length !== A.length) throw new TypeError(`sort_names and sorts must be the same length (got ${u.length} and {sorts.length})`);
            if (Z.length !== d.length) throw new TypeError(`decl_names and decls must be the same length (got ${Z.length} and {decls.length})`);
            return t.ccall(
              "Z3_parse_smtlib2_file",
              "number",
              ["number", "string", "number", "array", "array", "number", "array", "array"],
              [_, n, u.length, c(u), c(A), Z.length, c(Z), c(d)],
            );
          },
          eval_smtlib2_string: async function (_, n) {
            return await t.async_call(() => t.ccall("async_Z3_eval_smtlib2_string", "void", ["number", "string"], [_, n]));
          },
          mk_parser_context: t._Z3_mk_parser_context,
          parser_context_inc_ref: t._Z3_parser_context_inc_ref,
          parser_context_dec_ref: t._Z3_parser_context_dec_ref,
          parser_context_add_sort: t._Z3_parser_context_add_sort,
          parser_context_add_decl: t._Z3_parser_context_add_decl,
          parser_context_from_string: function (_, n, u) {
            return t.ccall("Z3_parser_context_from_string", "number", ["number", "number", "string"], [_, n, u]);
          },
          get_error_code: t._Z3_get_error_code,
          set_error: t._Z3_set_error,
          get_error_msg: function (_, n) {
            return t.ccall("Z3_get_error_msg", "string", ["number", "number"], [_, n]);
          },
          get_version: function () {
            return (
              t.ccall("Z3_get_version", "void", ["number", "number", "number", "number"], [w, w + 4, w + 8, w + 12]),
              { major: a(0), minor: a(1), build_number: a(2), revision_number: a(3) }
            );
          },
          get_full_version: function () {
            return t.ccall("Z3_get_full_version", "string", [], []);
          },
          enable_trace: function (_) {
            return t.ccall("Z3_enable_trace", "void", ["string"], [_]);
          },
          disable_trace: function (_) {
            return t.ccall("Z3_disable_trace", "void", ["string"], [_]);
          },
          reset_memory: t._Z3_reset_memory,
          finalize_memory: t._Z3_finalize_memory,
          mk_goal: t._Z3_mk_goal,
          goal_inc_ref: t._Z3_goal_inc_ref,
          goal_dec_ref: t._Z3_goal_dec_ref,
          goal_precision: t._Z3_goal_precision,
          goal_assert: t._Z3_goal_assert,
          goal_inconsistent: function (_, n) {
            return t.ccall("Z3_goal_inconsistent", "boolean", ["number", "number"], [_, n]);
          },
          goal_depth: function (_, n) {
            let u = t.ccall("Z3_goal_depth", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          goal_reset: t._Z3_goal_reset,
          goal_size: function (_, n) {
            let u = t.ccall("Z3_goal_size", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          goal_formula: t._Z3_goal_formula,
          goal_num_exprs: function (_, n) {
            let u = t.ccall("Z3_goal_num_exprs", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          goal_is_decided_sat: function (_, n) {
            return t.ccall("Z3_goal_is_decided_sat", "boolean", ["number", "number"], [_, n]);
          },
          goal_is_decided_unsat: function (_, n) {
            return t.ccall("Z3_goal_is_decided_unsat", "boolean", ["number", "number"], [_, n]);
          },
          goal_translate: t._Z3_goal_translate,
          goal_convert_model: t._Z3_goal_convert_model,
          goal_to_string: function (_, n) {
            return t.ccall("Z3_goal_to_string", "string", ["number", "number"], [_, n]);
          },
          goal_to_dimacs_string: function (_, n, u) {
            return t.ccall("Z3_goal_to_dimacs_string", "string", ["number", "number", "boolean"], [_, n, u]);
          },
          mk_tactic: function (_, n) {
            return t.ccall("Z3_mk_tactic", "number", ["number", "string"], [_, n]);
          },
          tactic_inc_ref: t._Z3_tactic_inc_ref,
          tactic_dec_ref: t._Z3_tactic_dec_ref,
          mk_probe: function (_, n) {
            return t.ccall("Z3_mk_probe", "number", ["number", "string"], [_, n]);
          },
          probe_inc_ref: t._Z3_probe_inc_ref,
          probe_dec_ref: t._Z3_probe_dec_ref,
          tactic_and_then: t._Z3_tactic_and_then,
          tactic_or_else: t._Z3_tactic_or_else,
          tactic_par_or: function (_, n) {
            return t.ccall("Z3_tactic_par_or", "number", ["number", "number", "array"], [_, n.length, c(n)]);
          },
          tactic_par_and_then: t._Z3_tactic_par_and_then,
          tactic_try_for: t._Z3_tactic_try_for,
          tactic_when: t._Z3_tactic_when,
          tactic_cond: t._Z3_tactic_cond,
          tactic_repeat: t._Z3_tactic_repeat,
          tactic_skip: t._Z3_tactic_skip,
          tactic_fail: t._Z3_tactic_fail,
          tactic_fail_if: t._Z3_tactic_fail_if,
          tactic_fail_if_not_decided: t._Z3_tactic_fail_if_not_decided,
          tactic_using_params: t._Z3_tactic_using_params,
          mk_simplifier: function (_, n) {
            return t.ccall("Z3_mk_simplifier", "number", ["number", "string"], [_, n]);
          },
          simplifier_inc_ref: t._Z3_simplifier_inc_ref,
          simplifier_dec_ref: t._Z3_simplifier_dec_ref,
          solver_add_simplifier: t._Z3_solver_add_simplifier,
          simplifier_and_then: t._Z3_simplifier_and_then,
          simplifier_using_params: t._Z3_simplifier_using_params,
          get_num_simplifiers: function (_) {
            let n = t.ccall("Z3_get_num_simplifiers", "number", ["number"], [_]);
            return (n = new Uint32Array([n])[0]), n;
          },
          get_simplifier_name: function (_, n) {
            return t.ccall("Z3_get_simplifier_name", "string", ["number", "number"], [_, n]);
          },
          simplifier_get_help: function (_, n) {
            return t.ccall("Z3_simplifier_get_help", "string", ["number", "number"], [_, n]);
          },
          simplifier_get_param_descrs: t._Z3_simplifier_get_param_descrs,
          simplifier_get_descr: function (_, n) {
            return t.ccall("Z3_simplifier_get_descr", "string", ["number", "string"], [_, n]);
          },
          probe_const: t._Z3_probe_const,
          probe_lt: t._Z3_probe_lt,
          probe_gt: t._Z3_probe_gt,
          probe_le: t._Z3_probe_le,
          probe_ge: t._Z3_probe_ge,
          probe_eq: t._Z3_probe_eq,
          probe_and: t._Z3_probe_and,
          probe_or: t._Z3_probe_or,
          probe_not: t._Z3_probe_not,
          get_num_tactics: function (_) {
            let n = t.ccall("Z3_get_num_tactics", "number", ["number"], [_]);
            return (n = new Uint32Array([n])[0]), n;
          },
          get_tactic_name: function (_, n) {
            return t.ccall("Z3_get_tactic_name", "string", ["number", "number"], [_, n]);
          },
          get_num_probes: function (_) {
            let n = t.ccall("Z3_get_num_probes", "number", ["number"], [_]);
            return (n = new Uint32Array([n])[0]), n;
          },
          get_probe_name: function (_, n) {
            return t.ccall("Z3_get_probe_name", "string", ["number", "number"], [_, n]);
          },
          tactic_get_help: function (_, n) {
            return t.ccall("Z3_tactic_get_help", "string", ["number", "number"], [_, n]);
          },
          tactic_get_param_descrs: t._Z3_tactic_get_param_descrs,
          tactic_get_descr: function (_, n) {
            return t.ccall("Z3_tactic_get_descr", "string", ["number", "string"], [_, n]);
          },
          probe_get_descr: function (_, n) {
            return t.ccall("Z3_probe_get_descr", "string", ["number", "string"], [_, n]);
          },
          probe_apply: t._Z3_probe_apply,
          tactic_apply: function (_, n, u) {
            return t.async_call(t._async_Z3_tactic_apply, _, n, u);
          },
          tactic_apply_ex: function (_, n, u, A) {
            return t.async_call(t._async_Z3_tactic_apply_ex, _, n, u, A);
          },
          apply_result_inc_ref: t._Z3_apply_result_inc_ref,
          apply_result_dec_ref: t._Z3_apply_result_dec_ref,
          apply_result_to_string: function (_, n) {
            return t.ccall("Z3_apply_result_to_string", "string", ["number", "number"], [_, n]);
          },
          apply_result_get_num_subgoals: function (_, n) {
            let u = t.ccall("Z3_apply_result_get_num_subgoals", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          apply_result_get_subgoal: t._Z3_apply_result_get_subgoal,
          mk_solver: t._Z3_mk_solver,
          mk_simple_solver: t._Z3_mk_simple_solver,
          mk_solver_for_logic: t._Z3_mk_solver_for_logic,
          mk_solver_from_tactic: t._Z3_mk_solver_from_tactic,
          solver_translate: t._Z3_solver_translate,
          solver_import_model_converter: t._Z3_solver_import_model_converter,
          solver_get_help: function (_, n) {
            return t.ccall("Z3_solver_get_help", "string", ["number", "number"], [_, n]);
          },
          solver_get_param_descrs: t._Z3_solver_get_param_descrs,
          solver_set_params: t._Z3_solver_set_params,
          solver_inc_ref: t._Z3_solver_inc_ref,
          solver_dec_ref: t._Z3_solver_dec_ref,
          solver_interrupt: t._Z3_solver_interrupt,
          solver_push: t._Z3_solver_push,
          solver_pop: t._Z3_solver_pop,
          solver_reset: t._Z3_solver_reset,
          solver_get_num_scopes: function (_, n) {
            let u = t.ccall("Z3_solver_get_num_scopes", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          solver_assert: t._Z3_solver_assert,
          solver_assert_and_track: t._Z3_solver_assert_and_track,
          solver_from_file: function (_, n, u) {
            return t.ccall("Z3_solver_from_file", "void", ["number", "number", "string"], [_, n, u]);
          },
          solver_from_string: function (_, n, u) {
            return t.ccall("Z3_solver_from_string", "void", ["number", "number", "string"], [_, n, u]);
          },
          solver_get_assertions: t._Z3_solver_get_assertions,
          solver_get_units: t._Z3_solver_get_units,
          solver_get_trail: t._Z3_solver_get_trail,
          solver_get_non_units: t._Z3_solver_get_non_units,
          solver_get_levels: function (_, n, u, A) {
            return t.ccall("Z3_solver_get_levels", "void", ["number", "number", "number", "number", "array"], [_, n, u, A.length, c(A)]);
          },
          solver_congruence_root: t._Z3_solver_congruence_root,
          solver_congruence_next: t._Z3_solver_congruence_next,
          solver_congruence_explain: t._Z3_solver_congruence_explain,
          solver_solve_for: t._Z3_solver_solve_for,
          solver_next_split: function (_, n, u, A, Z) {
            return t.ccall("Z3_solver_next_split", "boolean", ["number", "number", "number", "number", "number"], [_, n, u, A, Z]);
          },
          solver_propagate_declare: function (_, n, u, A) {
            return t.ccall("Z3_solver_propagate_declare", "number", ["number", "number", "number", "array", "number"], [_, n, u.length, c(u), A]);
          },
          solver_propagate_register: t._Z3_solver_propagate_register,
          solver_propagate_register_cb: t._Z3_solver_propagate_register_cb,
          solver_propagate_consequence: function (_, n, u, A, Z, d) {
            if (A.length !== Z.length) throw new TypeError(`eq_lhs and eq_rhs must be the same length (got ${A.length} and {eq_rhs.length})`);
            return t.ccall(
              "Z3_solver_propagate_consequence",
              "boolean",
              ["number", "number", "number", "array", "number", "array", "array", "number"],
              [_, n, u.length, c(u), A.length, c(A), c(Z), d],
            );
          },
          solver_set_initial_value: t._Z3_solver_set_initial_value,
          solver_check: function (_, n) {
            return t.async_call(t._async_Z3_solver_check, _, n);
          },
          solver_check_assumptions: async function (_, n, u) {
            return await t.async_call(() =>
              t.ccall("async_Z3_solver_check_assumptions", "void", ["number", "number", "number", "array"], [_, n, u.length, c(u)]),
            );
          },
          get_implied_equalities: function (_, n, u) {
            let A = t._malloc(4 * u.length);
            try {
              return {
                rv: t.ccall("Z3_get_implied_equalities", "number", ["number", "number", "number", "array", "number"], [_, n, u.length, c(u), A]),
                class_ids: E(A, u.length),
              };
            } finally {
              t._free(A);
            }
          },
          solver_get_consequences: function (_, n, u, A, Z) {
            return t.async_call(t._async_Z3_solver_get_consequences, _, n, u, A, Z);
          },
          solver_cube: function (_, n, u, A) {
            return t.async_call(t._async_Z3_solver_cube, _, n, u, A);
          },
          solver_get_model: t._Z3_solver_get_model,
          solver_get_proof: t._Z3_solver_get_proof,
          solver_get_unsat_core: t._Z3_solver_get_unsat_core,
          solver_get_reason_unknown: function (_, n) {
            return t.ccall("Z3_solver_get_reason_unknown", "string", ["number", "number"], [_, n]);
          },
          solver_get_statistics: t._Z3_solver_get_statistics,
          solver_to_string: function (_, n) {
            return t.ccall("Z3_solver_to_string", "string", ["number", "number"], [_, n]);
          },
          solver_to_dimacs_string: function (_, n, u) {
            return t.ccall("Z3_solver_to_dimacs_string", "string", ["number", "number", "boolean"], [_, n, u]);
          },
          stats_to_string: function (_, n) {
            return t.ccall("Z3_stats_to_string", "string", ["number", "number"], [_, n]);
          },
          stats_inc_ref: t._Z3_stats_inc_ref,
          stats_dec_ref: t._Z3_stats_dec_ref,
          stats_size: function (_, n) {
            let u = t.ccall("Z3_stats_size", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          stats_get_key: function (_, n, u) {
            return t.ccall("Z3_stats_get_key", "string", ["number", "number", "number"], [_, n, u]);
          },
          stats_is_uint: function (_, n, u) {
            return t.ccall("Z3_stats_is_uint", "boolean", ["number", "number", "number"], [_, n, u]);
          },
          stats_is_double: function (_, n, u) {
            return t.ccall("Z3_stats_is_double", "boolean", ["number", "number", "number"], [_, n, u]);
          },
          stats_get_uint_value: function (_, n, u) {
            let A = t.ccall("Z3_stats_get_uint_value", "number", ["number", "number", "number"], [_, n, u]);
            return (A = new Uint32Array([A])[0]), A;
          },
          stats_get_double_value: t._Z3_stats_get_double_value,
          get_estimated_alloc_size: t._Z3_get_estimated_alloc_size,
          algebraic_is_value: function (_, n) {
            return t.ccall("Z3_algebraic_is_value", "boolean", ["number", "number"], [_, n]);
          },
          algebraic_is_pos: function (_, n) {
            return t.ccall("Z3_algebraic_is_pos", "boolean", ["number", "number"], [_, n]);
          },
          algebraic_is_neg: function (_, n) {
            return t.ccall("Z3_algebraic_is_neg", "boolean", ["number", "number"], [_, n]);
          },
          algebraic_is_zero: function (_, n) {
            return t.ccall("Z3_algebraic_is_zero", "boolean", ["number", "number"], [_, n]);
          },
          algebraic_sign: t._Z3_algebraic_sign,
          algebraic_add: t._Z3_algebraic_add,
          algebraic_sub: t._Z3_algebraic_sub,
          algebraic_mul: t._Z3_algebraic_mul,
          algebraic_div: t._Z3_algebraic_div,
          algebraic_root: t._Z3_algebraic_root,
          algebraic_power: t._Z3_algebraic_power,
          algebraic_lt: function (_, n, u) {
            return t.ccall("Z3_algebraic_lt", "boolean", ["number", "number", "number"], [_, n, u]);
          },
          algebraic_gt: function (_, n, u) {
            return t.ccall("Z3_algebraic_gt", "boolean", ["number", "number", "number"], [_, n, u]);
          },
          algebraic_le: function (_, n, u) {
            return t.ccall("Z3_algebraic_le", "boolean", ["number", "number", "number"], [_, n, u]);
          },
          algebraic_ge: function (_, n, u) {
            return t.ccall("Z3_algebraic_ge", "boolean", ["number", "number", "number"], [_, n, u]);
          },
          algebraic_eq: function (_, n, u) {
            return t.ccall("Z3_algebraic_eq", "boolean", ["number", "number", "number"], [_, n, u]);
          },
          algebraic_neq: function (_, n, u) {
            return t.ccall("Z3_algebraic_neq", "boolean", ["number", "number", "number"], [_, n, u]);
          },
          algebraic_roots: async function (_, n, u) {
            return await t.async_call(() =>
              t.ccall("async_Z3_algebraic_roots", "void", ["number", "number", "number", "array"], [_, n, u.length, c(u)]),
            );
          },
          algebraic_eval: async function (_, n, u) {
            return await t.async_call(() =>
              t.ccall("async_Z3_algebraic_eval", "void", ["number", "number", "number", "array"], [_, n, u.length, c(u)]),
            );
          },
          algebraic_get_poly: t._Z3_algebraic_get_poly,
          algebraic_get_i: function (_, n) {
            let u = t.ccall("Z3_algebraic_get_i", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          mk_ast_vector: t._Z3_mk_ast_vector,
          ast_vector_inc_ref: t._Z3_ast_vector_inc_ref,
          ast_vector_dec_ref: t._Z3_ast_vector_dec_ref,
          ast_vector_size: function (_, n) {
            let u = t.ccall("Z3_ast_vector_size", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          ast_vector_get: t._Z3_ast_vector_get,
          ast_vector_set: t._Z3_ast_vector_set,
          ast_vector_resize: t._Z3_ast_vector_resize,
          ast_vector_push: t._Z3_ast_vector_push,
          ast_vector_translate: t._Z3_ast_vector_translate,
          ast_vector_to_string: function (_, n) {
            return t.ccall("Z3_ast_vector_to_string", "string", ["number", "number"], [_, n]);
          },
          mk_ast_map: t._Z3_mk_ast_map,
          ast_map_inc_ref: t._Z3_ast_map_inc_ref,
          ast_map_dec_ref: t._Z3_ast_map_dec_ref,
          ast_map_contains: function (_, n, u) {
            return t.ccall("Z3_ast_map_contains", "boolean", ["number", "number", "number"], [_, n, u]);
          },
          ast_map_find: t._Z3_ast_map_find,
          ast_map_insert: t._Z3_ast_map_insert,
          ast_map_erase: t._Z3_ast_map_erase,
          ast_map_reset: t._Z3_ast_map_reset,
          ast_map_size: function (_, n) {
            let u = t.ccall("Z3_ast_map_size", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          ast_map_keys: t._Z3_ast_map_keys,
          ast_map_to_string: function (_, n) {
            return t.ccall("Z3_ast_map_to_string", "string", ["number", "number"], [_, n]);
          },
          mk_fixedpoint: t._Z3_mk_fixedpoint,
          fixedpoint_inc_ref: t._Z3_fixedpoint_inc_ref,
          fixedpoint_dec_ref: t._Z3_fixedpoint_dec_ref,
          fixedpoint_add_rule: t._Z3_fixedpoint_add_rule,
          fixedpoint_add_fact: function (_, n, u, A) {
            return t.ccall("Z3_fixedpoint_add_fact", "void", ["number", "number", "number", "number", "array"], [_, n, u, A.length, c(A)]);
          },
          fixedpoint_assert: t._Z3_fixedpoint_assert,
          fixedpoint_query: function (_, n, u) {
            return t.async_call(t._async_Z3_fixedpoint_query, _, n, u);
          },
          fixedpoint_query_relations: async function (_, n, u) {
            return await t.async_call(() =>
              t.ccall("async_Z3_fixedpoint_query_relations", "void", ["number", "number", "number", "array"], [_, n, u.length, c(u)]),
            );
          },
          fixedpoint_get_answer: t._Z3_fixedpoint_get_answer,
          fixedpoint_get_reason_unknown: function (_, n) {
            return t.ccall("Z3_fixedpoint_get_reason_unknown", "string", ["number", "number"], [_, n]);
          },
          fixedpoint_update_rule: t._Z3_fixedpoint_update_rule,
          fixedpoint_get_num_levels: function (_, n, u) {
            let A = t.ccall("Z3_fixedpoint_get_num_levels", "number", ["number", "number", "number"], [_, n, u]);
            return (A = new Uint32Array([A])[0]), A;
          },
          fixedpoint_get_cover_delta: t._Z3_fixedpoint_get_cover_delta,
          fixedpoint_add_cover: t._Z3_fixedpoint_add_cover,
          fixedpoint_get_statistics: t._Z3_fixedpoint_get_statistics,
          fixedpoint_register_relation: t._Z3_fixedpoint_register_relation,
          fixedpoint_set_predicate_representation: function (_, n, u, A) {
            return t.ccall(
              "Z3_fixedpoint_set_predicate_representation",
              "void",
              ["number", "number", "number", "number", "array"],
              [_, n, u, A.length, c(A)],
            );
          },
          fixedpoint_get_rules: t._Z3_fixedpoint_get_rules,
          fixedpoint_get_assertions: t._Z3_fixedpoint_get_assertions,
          fixedpoint_set_params: t._Z3_fixedpoint_set_params,
          fixedpoint_get_help: function (_, n) {
            return t.ccall("Z3_fixedpoint_get_help", "string", ["number", "number"], [_, n]);
          },
          fixedpoint_get_param_descrs: t._Z3_fixedpoint_get_param_descrs,
          fixedpoint_to_string: function (_, n, u) {
            return t.ccall("Z3_fixedpoint_to_string", "string", ["number", "number", "number", "array"], [_, n, u.length, c(u)]);
          },
          fixedpoint_from_string: function (_, n, u) {
            return t.ccall("Z3_fixedpoint_from_string", "number", ["number", "number", "string"], [_, n, u]);
          },
          fixedpoint_from_file: function (_, n, u) {
            return t.ccall("Z3_fixedpoint_from_file", "number", ["number", "number", "string"], [_, n, u]);
          },
          mk_fpa_rounding_mode_sort: t._Z3_mk_fpa_rounding_mode_sort,
          mk_fpa_round_nearest_ties_to_even: t._Z3_mk_fpa_round_nearest_ties_to_even,
          mk_fpa_rne: t._Z3_mk_fpa_rne,
          mk_fpa_round_nearest_ties_to_away: t._Z3_mk_fpa_round_nearest_ties_to_away,
          mk_fpa_rna: t._Z3_mk_fpa_rna,
          mk_fpa_round_toward_positive: t._Z3_mk_fpa_round_toward_positive,
          mk_fpa_rtp: t._Z3_mk_fpa_rtp,
          mk_fpa_round_toward_negative: t._Z3_mk_fpa_round_toward_negative,
          mk_fpa_rtn: t._Z3_mk_fpa_rtn,
          mk_fpa_round_toward_zero: t._Z3_mk_fpa_round_toward_zero,
          mk_fpa_rtz: t._Z3_mk_fpa_rtz,
          mk_fpa_sort: t._Z3_mk_fpa_sort,
          mk_fpa_sort_half: t._Z3_mk_fpa_sort_half,
          mk_fpa_sort_16: t._Z3_mk_fpa_sort_16,
          mk_fpa_sort_single: t._Z3_mk_fpa_sort_single,
          mk_fpa_sort_32: t._Z3_mk_fpa_sort_32,
          mk_fpa_sort_double: t._Z3_mk_fpa_sort_double,
          mk_fpa_sort_64: t._Z3_mk_fpa_sort_64,
          mk_fpa_sort_quadruple: t._Z3_mk_fpa_sort_quadruple,
          mk_fpa_sort_128: t._Z3_mk_fpa_sort_128,
          mk_fpa_nan: t._Z3_mk_fpa_nan,
          mk_fpa_inf: t._Z3_mk_fpa_inf,
          mk_fpa_zero: t._Z3_mk_fpa_zero,
          mk_fpa_fp: t._Z3_mk_fpa_fp,
          mk_fpa_numeral_float: t._Z3_mk_fpa_numeral_float,
          mk_fpa_numeral_double: t._Z3_mk_fpa_numeral_double,
          mk_fpa_numeral_int: t._Z3_mk_fpa_numeral_int,
          mk_fpa_numeral_int_uint: t._Z3_mk_fpa_numeral_int_uint,
          mk_fpa_numeral_int64_uint64: t._Z3_mk_fpa_numeral_int64_uint64,
          mk_fpa_abs: t._Z3_mk_fpa_abs,
          mk_fpa_neg: t._Z3_mk_fpa_neg,
          mk_fpa_add: t._Z3_mk_fpa_add,
          mk_fpa_sub: t._Z3_mk_fpa_sub,
          mk_fpa_mul: t._Z3_mk_fpa_mul,
          mk_fpa_div: t._Z3_mk_fpa_div,
          mk_fpa_fma: t._Z3_mk_fpa_fma,
          mk_fpa_sqrt: t._Z3_mk_fpa_sqrt,
          mk_fpa_rem: t._Z3_mk_fpa_rem,
          mk_fpa_round_to_integral: t._Z3_mk_fpa_round_to_integral,
          mk_fpa_min: t._Z3_mk_fpa_min,
          mk_fpa_max: t._Z3_mk_fpa_max,
          mk_fpa_leq: t._Z3_mk_fpa_leq,
          mk_fpa_lt: t._Z3_mk_fpa_lt,
          mk_fpa_geq: t._Z3_mk_fpa_geq,
          mk_fpa_gt: t._Z3_mk_fpa_gt,
          mk_fpa_eq: t._Z3_mk_fpa_eq,
          mk_fpa_is_normal: t._Z3_mk_fpa_is_normal,
          mk_fpa_is_subnormal: t._Z3_mk_fpa_is_subnormal,
          mk_fpa_is_zero: t._Z3_mk_fpa_is_zero,
          mk_fpa_is_infinite: t._Z3_mk_fpa_is_infinite,
          mk_fpa_is_nan: t._Z3_mk_fpa_is_nan,
          mk_fpa_is_negative: t._Z3_mk_fpa_is_negative,
          mk_fpa_is_positive: t._Z3_mk_fpa_is_positive,
          mk_fpa_to_fp_bv: t._Z3_mk_fpa_to_fp_bv,
          mk_fpa_to_fp_float: t._Z3_mk_fpa_to_fp_float,
          mk_fpa_to_fp_real: t._Z3_mk_fpa_to_fp_real,
          mk_fpa_to_fp_signed: t._Z3_mk_fpa_to_fp_signed,
          mk_fpa_to_fp_unsigned: t._Z3_mk_fpa_to_fp_unsigned,
          mk_fpa_to_ubv: t._Z3_mk_fpa_to_ubv,
          mk_fpa_to_sbv: t._Z3_mk_fpa_to_sbv,
          mk_fpa_to_real: t._Z3_mk_fpa_to_real,
          fpa_get_ebits: function (_, n) {
            let u = t.ccall("Z3_fpa_get_ebits", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          fpa_get_sbits: function (_, n) {
            let u = t.ccall("Z3_fpa_get_sbits", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          fpa_is_numeral_nan: function (_, n) {
            return t.ccall("Z3_fpa_is_numeral_nan", "boolean", ["number", "number"], [_, n]);
          },
          fpa_is_numeral_inf: function (_, n) {
            return t.ccall("Z3_fpa_is_numeral_inf", "boolean", ["number", "number"], [_, n]);
          },
          fpa_is_numeral_zero: function (_, n) {
            return t.ccall("Z3_fpa_is_numeral_zero", "boolean", ["number", "number"], [_, n]);
          },
          fpa_is_numeral_normal: function (_, n) {
            return t.ccall("Z3_fpa_is_numeral_normal", "boolean", ["number", "number"], [_, n]);
          },
          fpa_is_numeral_subnormal: function (_, n) {
            return t.ccall("Z3_fpa_is_numeral_subnormal", "boolean", ["number", "number"], [_, n]);
          },
          fpa_is_numeral_positive: function (_, n) {
            return t.ccall("Z3_fpa_is_numeral_positive", "boolean", ["number", "number"], [_, n]);
          },
          fpa_is_numeral_negative: function (_, n) {
            return t.ccall("Z3_fpa_is_numeral_negative", "boolean", ["number", "number"], [_, n]);
          },
          fpa_get_numeral_sign_bv: t._Z3_fpa_get_numeral_sign_bv,
          fpa_get_numeral_significand_bv: t._Z3_fpa_get_numeral_significand_bv,
          fpa_get_numeral_sign: function (_, n) {
            return t.ccall("Z3_fpa_get_numeral_sign", "boolean", ["number", "number", "number"], [_, n, w]) ? r(0) : null;
          },
          fpa_get_numeral_significand_string: function (_, n) {
            return t.ccall("Z3_fpa_get_numeral_significand_string", "string", ["number", "number"], [_, n]);
          },
          fpa_get_numeral_significand_uint64: function (_, n) {
            return t.ccall("Z3_fpa_get_numeral_significand_uint64", "boolean", ["number", "number", "number"], [_, n, w]) ? Y(0) : null;
          },
          fpa_get_numeral_exponent_string: function (_, n, u) {
            return t.ccall("Z3_fpa_get_numeral_exponent_string", "string", ["number", "number", "boolean"], [_, n, u]);
          },
          fpa_get_numeral_exponent_int64: function (_, n, u) {
            return t.ccall("Z3_fpa_get_numeral_exponent_int64", "boolean", ["number", "number", "number", "boolean"], [_, n, w, u]) ? N(0) : null;
          },
          fpa_get_numeral_exponent_bv: t._Z3_fpa_get_numeral_exponent_bv,
          mk_fpa_to_ieee_bv: t._Z3_mk_fpa_to_ieee_bv,
          mk_fpa_to_fp_int_real: t._Z3_mk_fpa_to_fp_int_real,
          mk_optimize: t._Z3_mk_optimize,
          optimize_inc_ref: t._Z3_optimize_inc_ref,
          optimize_dec_ref: t._Z3_optimize_dec_ref,
          optimize_assert: t._Z3_optimize_assert,
          optimize_assert_and_track: t._Z3_optimize_assert_and_track,
          optimize_assert_soft: function (_, n, u, A, Z) {
            let d = t.ccall("Z3_optimize_assert_soft", "number", ["number", "number", "number", "string", "number"], [_, n, u, A, Z]);
            return (d = new Uint32Array([d])[0]), d;
          },
          optimize_maximize: function (_, n, u) {
            let A = t.ccall("Z3_optimize_maximize", "number", ["number", "number", "number"], [_, n, u]);
            return (A = new Uint32Array([A])[0]), A;
          },
          optimize_minimize: function (_, n, u) {
            let A = t.ccall("Z3_optimize_minimize", "number", ["number", "number", "number"], [_, n, u]);
            return (A = new Uint32Array([A])[0]), A;
          },
          optimize_push: t._Z3_optimize_push,
          optimize_pop: t._Z3_optimize_pop,
          optimize_set_initial_value: t._Z3_optimize_set_initial_value,
          optimize_check: async function (_, n, u) {
            return await t.async_call(() =>
              t.ccall("async_Z3_optimize_check", "void", ["number", "number", "number", "array"], [_, n, u.length, c(u)]),
            );
          },
          optimize_get_reason_unknown: function (_, n) {
            return t.ccall("Z3_optimize_get_reason_unknown", "string", ["number", "number"], [_, n]);
          },
          optimize_get_model: t._Z3_optimize_get_model,
          optimize_get_unsat_core: t._Z3_optimize_get_unsat_core,
          optimize_set_params: t._Z3_optimize_set_params,
          optimize_get_param_descrs: t._Z3_optimize_get_param_descrs,
          optimize_get_lower: t._Z3_optimize_get_lower,
          optimize_get_upper: t._Z3_optimize_get_upper,
          optimize_get_lower_as_vector: t._Z3_optimize_get_lower_as_vector,
          optimize_get_upper_as_vector: t._Z3_optimize_get_upper_as_vector,
          optimize_to_string: function (_, n) {
            return t.ccall("Z3_optimize_to_string", "string", ["number", "number"], [_, n]);
          },
          optimize_from_string: function (_, n, u) {
            return t.ccall("Z3_optimize_from_string", "void", ["number", "number", "string"], [_, n, u]);
          },
          optimize_from_file: function (_, n, u) {
            return t.ccall("Z3_optimize_from_file", "void", ["number", "number", "string"], [_, n, u]);
          },
          optimize_get_help: function (_, n) {
            return t.ccall("Z3_optimize_get_help", "string", ["number", "number"], [_, n]);
          },
          optimize_get_statistics: t._Z3_optimize_get_statistics,
          optimize_get_assertions: t._Z3_optimize_get_assertions,
          optimize_get_objectives: t._Z3_optimize_get_objectives,
          polynomial_subresultants: function (_, n, u, A) {
            return t.async_call(t._async_Z3_polynomial_subresultants, _, n, u, A);
          },
          rcf_del: t._Z3_rcf_del,
          rcf_mk_rational: function (_, n) {
            return t.ccall("Z3_rcf_mk_rational", "number", ["number", "string"], [_, n]);
          },
          rcf_mk_small_int: t._Z3_rcf_mk_small_int,
          rcf_mk_pi: t._Z3_rcf_mk_pi,
          rcf_mk_e: t._Z3_rcf_mk_e,
          rcf_mk_infinitesimal: t._Z3_rcf_mk_infinitesimal,
          rcf_mk_roots: function (_, n) {
            let u = t._malloc(4 * n.length);
            try {
              let A = t.ccall("Z3_rcf_mk_roots", "number", ["number", "number", "array", "number"], [_, n.length, c(n), u]);
              return (A = new Uint32Array([A])[0]), { rv: A, roots: E(u, n.length) };
            } finally {
              t._free(u);
            }
          },
          rcf_add: t._Z3_rcf_add,
          rcf_sub: t._Z3_rcf_sub,
          rcf_mul: t._Z3_rcf_mul,
          rcf_div: t._Z3_rcf_div,
          rcf_neg: t._Z3_rcf_neg,
          rcf_inv: t._Z3_rcf_inv,
          rcf_power: t._Z3_rcf_power,
          rcf_lt: function (_, n, u) {
            return t.ccall("Z3_rcf_lt", "boolean", ["number", "number", "number"], [_, n, u]);
          },
          rcf_gt: function (_, n, u) {
            return t.ccall("Z3_rcf_gt", "boolean", ["number", "number", "number"], [_, n, u]);
          },
          rcf_le: function (_, n, u) {
            return t.ccall("Z3_rcf_le", "boolean", ["number", "number", "number"], [_, n, u]);
          },
          rcf_ge: function (_, n, u) {
            return t.ccall("Z3_rcf_ge", "boolean", ["number", "number", "number"], [_, n, u]);
          },
          rcf_eq: function (_, n, u) {
            return t.ccall("Z3_rcf_eq", "boolean", ["number", "number", "number"], [_, n, u]);
          },
          rcf_neq: function (_, n, u) {
            return t.ccall("Z3_rcf_neq", "boolean", ["number", "number", "number"], [_, n, u]);
          },
          rcf_num_to_string: function (_, n, u, A) {
            return t.ccall("Z3_rcf_num_to_string", "string", ["number", "number", "boolean", "boolean"], [_, n, u, A]);
          },
          rcf_num_to_decimal_string: function (_, n, u) {
            return t.ccall("Z3_rcf_num_to_decimal_string", "string", ["number", "number", "number"], [_, n, u]);
          },
          rcf_get_numerator_denominator: function (_, n) {
            return (
              t.ccall("Z3_rcf_get_numerator_denominator", "void", ["number", "number", "number", "number"], [_, n, w, w + 4]), { n: a(0), d: a(1) }
            );
          },
          rcf_is_rational: function (_, n) {
            return t.ccall("Z3_rcf_is_rational", "boolean", ["number", "number"], [_, n]);
          },
          rcf_is_algebraic: function (_, n) {
            return t.ccall("Z3_rcf_is_algebraic", "boolean", ["number", "number"], [_, n]);
          },
          rcf_is_infinitesimal: function (_, n) {
            return t.ccall("Z3_rcf_is_infinitesimal", "boolean", ["number", "number"], [_, n]);
          },
          rcf_is_transcendental: function (_, n) {
            return t.ccall("Z3_rcf_is_transcendental", "boolean", ["number", "number"], [_, n]);
          },
          rcf_extension_index: function (_, n) {
            let u = t.ccall("Z3_rcf_extension_index", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          rcf_transcendental_name: t._Z3_rcf_transcendental_name,
          rcf_infinitesimal_name: t._Z3_rcf_infinitesimal_name,
          rcf_num_coefficients: function (_, n) {
            let u = t.ccall("Z3_rcf_num_coefficients", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          rcf_coefficient: t._Z3_rcf_coefficient,
          rcf_num_sign_conditions: function (_, n) {
            let u = t.ccall("Z3_rcf_num_sign_conditions", "number", ["number", "number"], [_, n]);
            return (u = new Uint32Array([u])[0]), u;
          },
          rcf_sign_condition_sign: t._Z3_rcf_sign_condition_sign,
          rcf_num_sign_condition_coefficients: function (_, n, u) {
            let A = t.ccall("Z3_rcf_num_sign_condition_coefficients", "number", ["number", "number", "number"], [_, n, u]);
            return (A = new Uint32Array([A])[0]), A;
          },
          rcf_sign_condition_coefficient: t._Z3_rcf_sign_condition_coefficient,
          fixedpoint_query_from_lvl: function (_, n, u, A) {
            return t.async_call(t._async_Z3_fixedpoint_query_from_lvl, _, n, u, A);
          },
          fixedpoint_get_ground_sat_answer: t._Z3_fixedpoint_get_ground_sat_answer,
          fixedpoint_get_rules_along_trace: t._Z3_fixedpoint_get_rules_along_trace,
          fixedpoint_get_rule_names_along_trace: t._Z3_fixedpoint_get_rule_names_along_trace,
          fixedpoint_add_invariant: t._Z3_fixedpoint_add_invariant,
          fixedpoint_get_reachable: t._Z3_fixedpoint_get_reachable,
          qe_model_project: function (_, n, u, A) {
            return t.ccall("Z3_qe_model_project", "number", ["number", "number", "number", "array", "number"], [_, n, u.length, c(u), A]);
          },
          qe_model_project_skolem: function (_, n, u, A, Z) {
            return t.ccall(
              "Z3_qe_model_project_skolem",
              "number",
              ["number", "number", "number", "array", "number", "number"],
              [_, n, u.length, c(u), A, Z],
            );
          },
          qe_model_project_with_witness: function (_, n, u, A, Z) {
            return t.ccall(
              "Z3_qe_model_project_with_witness",
              "number",
              ["number", "number", "number", "array", "number", "number"],
              [_, n, u.length, c(u), A, Z],
            );
          },
          model_extrapolate: t._Z3_model_extrapolate,
          qe_lite: t._Z3_qe_lite,
        },
      };
    }
    return Sr;
  }
  var mn;
  function ln() {
    return (
      mn ||
        ((mn = 1),
        (function (g) {
          var f =
              (qt && qt.__createBinding) ||
              (Object.create
                ? function (c, b, E, w) {
                    w === void 0 && (w = E);
                    var O = Object.getOwnPropertyDescriptor(b, E);
                    (!O || ("get" in O ? !b.__esModule : O.writable || O.configurable)) &&
                      (O = {
                        enumerable: !0,
                        get: function () {
                          return b[E];
                        },
                      }),
                      Object.defineProperty(c, w, O);
                  }
                : function (c, b, E, w) {
                    w === void 0 && (w = E), (c[w] = b[E]);
                  }),
            t =
              (qt && qt.__exportStar) ||
              function (c, b) {
                for (var E in c) E !== "default" && !Object.prototype.hasOwnProperty.call(b, E) && f(b, c, E);
              };
          Object.defineProperty(g, "__esModule", { value: !0 }), t(an(), g), t(m_(), g);
        })(qt)),
      qt
    );
  }
  var zt = {},
    fn;
  function Zr() {
    if (fn) return zt;
    (fn = 1), Object.defineProperty(zt, "__esModule", { value: !0 }), (zt.Z3AssertionError = zt.Z3Error = void 0);
    class g extends Error {}
    zt.Z3Error = g;
    class f extends g {}
    return (zt.Z3AssertionError = f), zt;
  }
  var Wt = {},
    pn;
  function l_() {
    if (pn) return Wt;
    (pn = 1), Object.defineProperty(Wt, "__esModule", { value: !0 }), (Wt.assertExhaustive = f), (Wt.assert = t), (Wt.allSatisfy = c);
    const g = Zr();
    function f(b) {
      throw new Error("Unexpected code execution detected, should be caught at compile time");
    }
    function t(b, E) {
      if (!b) throw new g.Z3AssertionError(E ?? "Assertion failed");
    }
    function c(b, E) {
      let w = !1;
      for (const O of b) if (((w = !0), !E(O))) return !1;
      return w === !0 ? !0 : null;
    }
    return Wt;
  }
  var hn;
  function f_() {
    if (hn) return Pr;
    (hn = 1), Object.defineProperty(Pr, "__esModule", { value: !0 }), (Pr.createApi = O);
    const g = c_(),
      f = ln(),
      t = Zr(),
      c = l_(),
      b = 17,
      E = new g.Mutex();
    function w(a) {
      const S =
        a !== null &&
        (typeof a == "object" || typeof a == "function") &&
        a.numerator !== null &&
        (typeof a.numerator == "number" || typeof a.numerator == "bigint") &&
        a.denominator !== null &&
        (typeof a.denominator == "number" || typeof a.denominator == "bigint");
      return (
        S &&
          (0, c.assert)(
            (typeof a.numerator != "number" || Number.isSafeInteger(a.numerator)) &&
              (typeof a.denominator != "number" || Number.isSafeInteger(a.denominator)),
            "Fraction numerator and denominator must be integers",
          ),
        S
      );
    }
    function O(a) {
      const S = new FinalizationRegistry((B) => B());
      function r(B) {
        a.enable_trace(B);
      }
      function U(B) {
        a.disable_trace(B);
      }
      function Y() {
        return a.get_version();
      }
      function I() {
        const { major: B, minor: nt, build_number: ot } = a.get_version();
        return `${B}.${nt}.${ot}`;
      }
      function N() {
        return a.get_full_version();
      }
      function _(B) {
        return a.open_log(B);
      }
      function n(B) {
        a.append_log(B);
      }
      function u(B, nt) {
        typeof B == "string"
          ? a.global_param_set(B, nt.toString())
          : ((0, c.assert)(nt === void 0, "Can't provide a Record and second parameter to set_param at the same time"),
            Object.entries(B).forEach(([ot, l]) => u(ot, l)));
      }
      function A() {
        a.global_param_reset_all();
      }
      function Z(B) {
        return a.global_param_get(B);
      }
      function d(B, nt) {
        const ot = a.mk_config();
        nt != null && Object.entries(nt).forEach(([o, e]) => P(a.set_param_value(ot, o, e.toString())));
        const l = a.mk_context_rc(ot);
        a.set_ast_print_mode(l, f.Z3_ast_print_mode.Z3_PRINT_SMTLIB2_COMPLIANT), a.del_config(ot);
        function x(...o) {
          o.forEach((e) => (0, c.assert)("ctx" in e ? rt === e.ctx : rt === e, "Context mismatch"));
        }
        function ar(o) {
          if (o == null) throw new TypeError("Expected non-null pointer");
        }
        function cr() {
          if (a.get_error_code(l) !== f.Z3_error_code.Z3_OK) throw new Error(a.get_error_msg(rt.ptr, a.get_error_code(rt.ptr)));
        }
        function P(o) {
          return cr(), o;
        }
        function X(o) {
          return P(typeof o == "number" ? a.mk_int_symbol(l, o) : a.mk_string_symbol(l, o));
        }
        function Qt(o) {
          const e = P(a.get_symbol_kind(l, o));
          switch (e) {
            case f.Z3_symbol_kind.Z3_INT_SYMBOL:
              return a.get_symbol_int(l, o);
            case f.Z3_symbol_kind.Z3_STRING_SYMBOL:
              return a.get_symbol_string(l, o);
            default:
              (0, c.assertExhaustive)(e);
          }
        }
        function mr(o, e) {
          const h = a.mk_params(l);
          return (
            a.params_inc_ref(l, h),
            typeof e == "boolean"
              ? a.params_set_bool(l, h, X(o), e)
              : typeof e == "number"
                ? Number.isInteger(e)
                  ? P(a.params_set_uint(l, h, X(o), e))
                  : P(a.params_set_double(l, h, X(o), e))
                : typeof e == "string" && P(a.params_set_symbol(l, h, X(o), X(e))),
            h
          );
        }
        function lr(o) {
          switch (P(a.get_ast_kind(l, o))) {
            case f.Z3_ast_kind.Z3_SORT_AST:
              return At(o);
            case f.Z3_ast_kind.Z3_FUNC_DECL_AST:
              return new wt(o);
            default:
              return W(o);
          }
        }
        function At(o) {
          switch (P(a.get_sort_kind(l, o))) {
            case f.Z3_sort_kind.Z3_BOOL_SORT:
              return new jn(o);
            case f.Z3_sort_kind.Z3_INT_SORT:
            case f.Z3_sort_kind.Z3_REAL_SORT:
              return new gr(o);
            case f.Z3_sort_kind.Z3_BV_SORT:
              return new Ee(o);
            case f.Z3_sort_kind.Z3_ARRAY_SORT:
              return new Mr(o);
            default:
              return new Dt(o);
          }
        }
        function W(o) {
          const e = P(a.get_ast_kind(l, o));
          if (e === f.Z3_ast_kind.Z3_QUANTIFIER_AST) return a.is_lambda(l, o) ? new Xn(o) : new Re(o);
          switch (P(a.get_sort_kind(l, a.get_sort(l, o)))) {
            case f.Z3_sort_kind.Z3_BOOL_SORT:
              return new M(o);
            case f.Z3_sort_kind.Z3_INT_SORT:
              return e === f.Z3_ast_kind.Z3_NUMERAL_AST ? new Or(o) : new $(o);
            case f.Z3_sort_kind.Z3_REAL_SORT:
              return e === f.Z3_ast_kind.Z3_NUMERAL_AST ? new ye(o) : new $(o);
            case f.Z3_sort_kind.Z3_BV_SORT:
              return e === f.Z3_ast_kind.Z3_NUMERAL_AST ? new Ae(o) : new k(o);
            case f.Z3_sort_kind.Z3_ARRAY_SORT:
              return new Dr(o);
            default:
              return new Rt(o);
          }
        }
        function Jt(o) {
          const e = [];
          for (const h of o) wn(h) ? e.push(...h.values()) : e.push(h);
          return e;
        }
        function xr(o) {
          return z(o) ? o : new dr(o);
        }
        function tt(o, e) {
          (0, c.assert)(e.length > 0, "At least one argument expected");
          let h = xr(e[0]);
          for (let v = 1; v < e.length; v++) h = new dr(P(o(l, h.ptr, xr(e[v]).ptr)));
          return h;
        }
        function it() {
          P(a.interrupt(l));
        }
        function Nr(o) {
          const e = o instanceof Fr;
          return e && x(o), e;
        }
        function fr(o) {
          const e = o instanceof Ur;
          return e && x(o), e;
        }
        function Yt(o) {
          const e = o instanceof Dt;
          return e && x(o), e;
        }
        function It(o) {
          const e = o instanceof wt;
          return e && x(o), e;
        }
        function pr(o) {
          const e = o instanceof le;
          return e && x(o), e;
        }
        function ut(o) {
          if (!et(o)) return !1;
          const e = P(a.get_ast_kind(l, o.ast));
          return e === f.Z3_ast_kind.Z3_NUMERAL_AST || e === f.Z3_ast_kind.Z3_APP_AST;
        }
        function ct(o) {
          return et(o) && ut(o) && o.numArgs() === 0;
        }
        function et(o) {
          const e = o instanceof Rt;
          return e && x(o), e;
        }
        function Lr(o) {
          return et(o) && P(a.get_ast_kind(l, o.ast)) === f.Z3_ast_kind.Z3_VAR_AST;
        }
        function mt(o, e) {
          return et(o) && ut(o) && o.decl().kind() === e;
        }
        function gt(o) {
          const e = o instanceof Rt && o.sort.kind() === f.Z3_sort_kind.Z3_BOOL_SORT;
          return e && x(o), e;
        }
        function jt(o) {
          return mt(o, f.Z3_decl_kind.Z3_OP_TRUE);
        }
        function jr(o) {
          return mt(o, f.Z3_decl_kind.Z3_OP_FALSE);
        }
        function Hr(o) {
          return mt(o, f.Z3_decl_kind.Z3_OP_AND);
        }
        function hr(o) {
          return mt(o, f.Z3_decl_kind.Z3_OP_OR);
        }
        function Xr(o) {
          return mt(o, f.Z3_decl_kind.Z3_OP_IMPLIES);
        }
        function Wr(o) {
          return mt(o, f.Z3_decl_kind.Z3_OP_NOT);
        }
        function Br(o) {
          return mt(o, f.Z3_decl_kind.Z3_OP_EQ);
        }
        function tr(o) {
          return mt(o, f.Z3_decl_kind.Z3_OP_DISTINCT);
        }
        function ft(o) {
          const e = o instanceof we;
          return e && x(o), e;
        }
        function xt(o) {
          const e = o instanceof $;
          return e && x(o), e;
        }
        function Kr(o) {
          const e = o instanceof gr;
          return e && x(o), e;
        }
        function pt(o) {
          return xt(o) && m(o.sort);
        }
        function Jr(o) {
          const e = o instanceof Or;
          return e && x(o), e;
        }
        function m(o) {
          return Yt(o) && o.kind() === f.Z3_sort_kind.Z3_INT_SORT;
        }
        function i(o) {
          return xt(o) && p(o.sort);
        }
        function s(o) {
          const e = o instanceof ye;
          return e && x(o), e;
        }
        function p(o) {
          return Yt(o) && o.kind() === f.Z3_sort_kind.Z3_REAL_SORT;
        }
        function y(o) {
          const e = o instanceof Ee;
          return e && x(o), e;
        }
        function R(o) {
          const e = o instanceof k;
          return e && x(o), e;
        }
        function T(o) {
          const e = o instanceof Ae;
          return e && x(o), e;
        }
        function D(o) {
          const e = o instanceof Mr;
          return e && x(o), e;
        }
        function j(o) {
          const e = o instanceof Dr;
          return e && x(o), e;
        }
        function G(o) {
          return mt(o, f.Z3_decl_kind.Z3_OP_CONST_ARRAY);
        }
        function z(o) {
          const e = o instanceof dr;
          return e && x(o), e;
        }
        function q(o) {
          const e = o instanceof fe;
          return e && x(o), e;
        }
        function wn(o) {
          const e = o instanceof kt;
          return e && x(o), e;
        }
        function E_(o, e) {
          return o.eqIdentity(e);
        }
        function A_(o) {
          return (0, c.assert)(Lr(o), "Z3 bound variable expected"), a.get_index_value(l, o.ast);
        }
        function _t(o) {
          if (typeof o == "boolean") return ht.val(o);
          if (typeof o == "number") {
            if (!Number.isFinite(o)) throw new Error(`cannot represent infinity/NaN (got ${o})`);
            return Math.floor(o) === o ? bt.val(o) : lt.val(o);
          } else {
            if (w(o)) return lt.val(o);
            if (typeof o == "bigint") return bt.val(o);
            if (et(o)) return o;
          }
          (0, c.assert)(!1);
        }
        async function w_(...o) {
          const e = new rt.Solver();
          e.add(...o);
          const h = await e.check();
          return h === "sat" ? e.model() : h;
        }
        async function R_(o) {
          const e = await a.simplify(l, o.ast);
          return W(P(e));
        }
        const T_ = { declare: (o) => new Dt(a.mk_uninterpreted_sort(l, X(o))) },
          v_ = {
            declare: (o, ...e) => {
              const h = e.length - 1,
                v = e[h];
              x(v);
              const F = [];
              for (let C = 0; C < h; C++) x(e[C]), F.push(e[C].ptr);
              return new wt(a.mk_func_decl(l, X(o), F, v.ptr));
            },
            fresh: (...o) => {
              const e = o.length - 1,
                h = o[e];
              x(h);
              const v = [];
              for (let F = 0; F < e; F++) x(o[F]), v.push(o[F].ptr);
              return new wt(a.mk_fresh_func_decl(l, "f", v, h.ptr));
            },
          },
          S_ = {
            declare: (o, ...e) => {
              const h = e.length - 1,
                v = e[h];
              x(v);
              const F = [];
              for (let C = 0; C < h; C++) x(e[C]), F.push(e[C].ptr);
              return new wt(a.mk_rec_func_decl(l, X(o), F, v.ptr));
            },
            addDefinition: (o, e, h) => {
              x(o, ...e, h),
                P(
                  a.add_rec_def(
                    l,
                    o.ptr,
                    e.map((v) => v.ast),
                    h.ast,
                  ),
                );
            },
          },
          ht = {
            sort: () => new jn(a.mk_bool_sort(l)),
            const: (o) => new M(a.mk_const(l, X(o), ht.sort().ptr)),
            consts: (o) => (typeof o == "string" && (o = o.split(" ")), o.map((e) => ht.const(e))),
            vector: (o, e) => {
              const h = [];
              for (let v = 0; v < e; v++) h.push(ht.const(`${o}__${v}`));
              return h;
            },
            fresh: (o = "b") => new M(a.mk_fresh_const(l, o, ht.sort().ptr)),
            val: (o) => (o ? new M(a.mk_true(l)) : new M(a.mk_false(l))),
          },
          bt = {
            sort: () => new gr(a.mk_int_sort(l)),
            const: (o) => new $(a.mk_const(l, X(o), bt.sort().ptr)),
            consts: (o) => (typeof o == "string" && (o = o.split(" ")), o.map((e) => bt.const(e))),
            vector: (o, e) => {
              const h = [];
              for (let v = 0; v < e; v++) h.push(bt.const(`${o}__${v}`));
              return h;
            },
            fresh: (o = "x") => new $(a.mk_fresh_const(l, o, bt.sort().ptr)),
            val: (o) => (
              (0, c.assert)(typeof o == "bigint" || typeof o == "string" || Number.isSafeInteger(o)),
              new Or(P(a.mk_numeral(l, o.toString(), bt.sort().ptr)))
            ),
          },
          lt = {
            sort: () => new gr(a.mk_real_sort(l)),
            const: (o) => new $(P(a.mk_const(l, X(o), lt.sort().ptr))),
            consts: (o) => (typeof o == "string" && (o = o.split(" ")), o.map((e) => lt.const(e))),
            vector: (o, e) => {
              const h = [];
              for (let v = 0; v < e; v++) h.push(lt.const(`${o}__${v}`));
              return h;
            },
            fresh: (o = "b") => new $(a.mk_fresh_const(l, o, lt.sort().ptr)),
            val: (o) => (w(o) && (o = `${o.numerator}/${o.denominator}`), new ye(a.mk_numeral(l, o.toString(), lt.sort().ptr))),
          },
          Ht = {
            sort(o) {
              return (0, c.assert)(Number.isSafeInteger(o), "number of bits must be an integer"), new Ee(a.mk_bv_sort(l, o));
            },
            const(o, e) {
              return new k(P(a.mk_const(l, X(o), y(e) ? e.ptr : Ht.sort(e).ptr)));
            },
            consts(o, e) {
              return typeof o == "string" && (o = o.split(" ")), o.map((h) => Ht.const(h, e));
            },
            val(o, e) {
              return o === !0 ? Ht.val(1, e) : o === !1 ? Ht.val(0, e) : new Ae(P(a.mk_numeral(l, o.toString(), y(e) ? e.ptr : Ht.sort(e).ptr)));
            },
          },
          br = {
            sort(...o) {
              const e = o.length - 1,
                h = o[e],
                v = o[0];
              if (e === 1) return new Mr(a.mk_array_sort(l, v.ptr, h.ptr));
              const F = o.slice(0, e);
              return new Mr(
                a.mk_array_sort_n(
                  l,
                  F.map((C) => C.ptr),
                  h.ptr,
                ),
              );
            },
            const(o, ...e) {
              return new Dr(P(a.mk_const(l, X(o), br.sort(...e).ptr)));
            },
            consts(o, ...e) {
              return typeof o == "string" && (o = o.split(" ")), o.map((h) => br.const(h, ...e));
            },
            K(o, e) {
              return new Dr(P(a.mk_const_array(l, o.ptr, e.ptr)));
            },
          },
          Rn = {
            sort(o) {
              return br.sort(o, ht.sort());
            },
            const(o, e) {
              return new Nt(P(a.mk_const(l, X(o), br.sort(e, ht.sort()).ptr)));
            },
            consts(o, e) {
              return typeof o == "string" && (o = o.split(" ")), o.map((h) => Rn.const(h, e));
            },
            empty(o) {
              return me(o);
            },
            val(o, e) {
              var h = me(e);
              for (const v of o) h = ce(h, v);
              return h;
            },
          };
        function te(o, e, h) {
          return z(o) && q(e) && q(h)
            ? vn(o, e, h)
            : ((0, c.assert)(!z(o) && !q(e) && !q(h), "Mixed expressions and goals"),
              typeof o == "boolean" && (o = ht.val(o)),
              (e = _t(e)),
              (h = _t(h)),
              W(P(a.mk_ite(l, o.ptr, e.ast, h.ast))));
        }
        function Z_(...o) {
          return (
            (0, c.assert)(o.length > 0, "Can't make Distinct ouf of nothing"),
            new M(
              P(
                a.mk_distinct(
                  l,
                  o.map((e) => ((e = _t(e)), x(e), e.ast)),
                ),
              ),
            )
          );
        }
        function Tn(o, e) {
          return x(e), W(P(a.mk_const(l, X(o), e.ptr)));
        }
        function I_(o, e) {
          return x(e), typeof o == "string" && (o = o.split(" ")), o.map((h) => Tn(h, e));
        }
        function x_(o, e = "c") {
          return x(o), W(a.mk_fresh_const(o.ctx.ptr, e, o.ptr));
        }
        function N_(o, e) {
          return x(e), W(a.mk_bound(e.ctx.ptr, o, e.ptr));
        }
        function re(o, e) {
          return (o = _t(o)), (e = _t(e)), x(o, e), new M(P(a.mk_implies(l, o.ptr, e.ptr)));
        }
        function ee(o, e) {
          return (o = _t(o)), (e = _t(e)), x(o, e), new M(P(a.mk_iff(l, o.ptr, e.ptr)));
        }
        function L_(o, e) {
          return (o = _t(o)), (e = _t(e)), x(o, e), o.eq(e);
        }
        function ne(o, e) {
          return (o = _t(o)), (e = _t(e)), x(o, e), new M(P(a.mk_xor(l, o.ptr, e.ptr)));
        }
        function _e(o) {
          return typeof o == "boolean" && (o = _t(o)), x(o), z(o) ? new dr(P(a.probe_not(l, o.ptr))) : new M(P(a.mk_not(l, o.ptr)));
        }
        function ie(...o) {
          if (
            (o.length == 1 &&
              o[0] instanceof rt.AstVector &&
              ((o = [...o[0].values()]), (0, c.assert)((0, c.allSatisfy)(o, gt) ?? !0, "AstVector containing not bools")),
            (0, c.allSatisfy)(o, z) ?? !1)
          )
            return tt(a.probe_and, o);
          {
            const h = o.map(_t);
            return (
              x(...h),
              new M(
                P(
                  a.mk_and(
                    l,
                    h.map((v) => v.ptr),
                  ),
                ),
              )
            );
          }
        }
        function oe(...o) {
          if (
            (o.length == 1 &&
              o[0] instanceof rt.AstVector &&
              ((o = [...o[0].values()]), (0, c.assert)((0, c.allSatisfy)(o, gt) ?? !0, "AstVector containing not bools")),
            (0, c.allSatisfy)(o, z) ?? !1)
          )
            return tt(a.probe_or, o);
          {
            const h = o.map(_t);
            return (
              x(...h),
              new M(
                P(
                  a.mk_or(
                    l,
                    h.map((v) => v.ptr),
                  ),
                ),
              )
            );
          }
        }
        function B_(o, e, h) {
          if ((x(...o), o.length !== e.length)) throw new Error("Number of arguments and coefficients must match");
          return new M(
            P(
              a.mk_pbeq(
                l,
                o.map((v) => v.ast),
                e,
                h,
              ),
            ),
          );
        }
        function U_(o, e, h) {
          if ((x(...o), o.length !== e.length)) throw new Error("Number of arguments and coefficients must match");
          return new M(
            P(
              a.mk_pbge(
                l,
                o.map((v) => v.ast),
                e,
                h,
              ),
            ),
          );
        }
        function F_(o, e, h) {
          if ((x(...o), o.length !== e.length)) throw new Error("Number of arguments and coefficients must match");
          return new M(
            P(
              a.mk_pble(
                l,
                o.map((v) => v.ast),
                e,
                h,
              ),
            ),
          );
        }
        function d_(o, e, h = 1) {
          if (!(0, c.allSatisfy)(o, ct)) throw new Error("Quantifier variables must be constants");
          return new Re(
            P(
              a.mk_quantifier_const_ex(
                l,
                !0,
                h,
                X(""),
                X(""),
                o.map((v) => v.ptr),
                [],
                [],
                e.ptr,
              ),
            ),
          );
        }
        function M_(o, e, h = 1) {
          if (!(0, c.allSatisfy)(o, ct)) throw new Error("Quantifier variables must be constants");
          return new Re(
            P(
              a.mk_quantifier_const_ex(
                l,
                !1,
                h,
                X(""),
                X(""),
                o.map((v) => v.ptr),
                [],
                [],
                e.ptr,
              ),
            ),
          );
        }
        function D_(o, e) {
          if (!(0, c.allSatisfy)(o, ct)) throw new Error("Quantifier variables must be constants");
          return new Xn(
            P(
              a.mk_lambda_const(
                l,
                o.map((h) => h.ptr),
                e.ptr,
              ),
            ),
          );
        }
        function se(o) {
          return (o = _t(o)), x(o), (0, c.assert)(pt(o), "Int expression expected"), new $(P(a.mk_int2real(l, o.ast)));
        }
        function k_(o) {
          return et(o) || (o = lt.val(o)), x(o), (0, c.assert)(i(o), "Real expression expected"), new $(P(a.mk_real2int(l, o.ast)));
        }
        function C_(o) {
          return et(o) || (o = lt.val(o)), x(o), (0, c.assert)(i(o), "Real expression expected"), new M(P(a.mk_is_int(l, o.ast)));
        }
        function q_(o) {
          return et(o) || (o = lt.val(o)), o.pow("1/2");
        }
        function z_(o) {
          return et(o) || (o = lt.val(o)), o.pow("1/3");
        }
        function V_(o, e) {
          return x(o), new $(P(a.mk_bv2int(l, o.ast, e)));
        }
        function G_(o, e) {
          return (
            xt(o)
              ? (0, c.assert)(pt(o), "parameter must be an integer")
              : ((0, c.assert)(typeof o != "number" || Number.isSafeInteger(o), "parameter must not have decimal places"), (o = bt.val(o))),
            new k(P(a.mk_int2bv(l, e, o.ast)))
          );
        }
        function $_(...o) {
          return x(...o), o.reduce((e, h) => new k(P(a.mk_concat(l, e.ast, h.ast))));
        }
        function vn(o, e, h) {
          return x(o, e, h), new fe(P(a.tactic_cond(l, o.ptr, e.ptr, h.ptr)));
        }
        function Sn(o, e) {
          return new M(P(a.mk_lt(l, o.ast, o.sort.cast(e).ast)));
        }
        function Zn(o, e) {
          return new M(P(a.mk_gt(l, o.ast, o.sort.cast(e).ast)));
        }
        function In(o, e) {
          return new M(P(a.mk_le(l, o.ast, o.sort.cast(e).ast)));
        }
        function xn(o, e) {
          return new M(P(a.mk_ge(l, o.ast, o.sort.cast(e).ast)));
        }
        function Nn(o, e) {
          return new M(P(a.mk_bvult(l, o.ast, o.sort.cast(e).ast)));
        }
        function Ln(o, e) {
          return new M(P(a.mk_bvugt(l, o.ast, o.sort.cast(e).ast)));
        }
        function Bn(o, e) {
          return new M(P(a.mk_bvule(l, o.ast, o.sort.cast(e).ast)));
        }
        function Un(o, e) {
          return new M(P(a.mk_bvuge(l, o.ast, o.sort.cast(e).ast)));
        }
        function Fn(o, e) {
          return new M(P(a.mk_bvslt(l, o.ast, o.sort.cast(e).ast)));
        }
        function dn(o, e) {
          return new M(P(a.mk_bvsgt(l, o.ast, o.sort.cast(e).ast)));
        }
        function Mn(o, e) {
          return new M(P(a.mk_bvsle(l, o.ast, o.sort.cast(e).ast)));
        }
        function Dn(o, e) {
          return new M(P(a.mk_bvsge(l, o.ast, o.sort.cast(e).ast)));
        }
        function kn(o, e, h) {
          return new k(P(a.mk_extract(l, o, e, h.ast)));
        }
        function ue(o, ...e) {
          const h = e.map((F, C) => o.domain_n(C).cast(F));
          if (h.length === 1) return W(P(a.mk_select(l, o.ast, h[0].ast)));
          const v = h.map((F) => F.ast);
          return W(P(a.mk_select_n(l, o.ast, v)));
        }
        function ae(o, ...e) {
          const h = e.map((F, C) => (C === e.length - 1 ? o.range().cast(F) : o.domain_n(C).cast(F)));
          if (h.length <= 1) throw new Error("Array store requires both index and value arguments");
          if (h.length === 2) return W(P(a.mk_store(l, o.ast, h[0].ast, h[1].ast)));
          const v = h.slice(0, h.length - 1).map((F) => F.ast);
          return W(P(a.mk_store_n(l, o.ast, v, h[h.length - 1].ast)));
        }
        function Cn(...o) {
          return new Nt(
            P(
              a.mk_set_union(
                l,
                o.map((e) => e.ast),
              ),
            ),
          );
        }
        function qn(...o) {
          return new Nt(
            P(
              a.mk_set_intersect(
                l,
                o.map((e) => e.ast),
              ),
            ),
          );
        }
        function zn(o, e) {
          return new Nt(P(a.mk_set_difference(l, o.ast, e.ast)));
        }
        function Vn(o, e) {
          const h = bt.sort().cast(e);
          return new M(P(a.mk_set_has_size(l, o.ast, h.ast)));
        }
        function ce(o, e) {
          const h = o.elemSort().cast(e);
          return new Nt(P(a.mk_set_add(l, o.ast, h.ast)));
        }
        function Gn(o, e) {
          const h = o.elemSort().cast(e);
          return new Nt(P(a.mk_set_del(l, o.ast, h.ast)));
        }
        function $n(o) {
          return new Nt(P(a.mk_set_complement(l, o.ast)));
        }
        function me(o) {
          return new Nt(P(a.mk_empty_set(l, o.ptr)));
        }
        function Q_(o) {
          return new Nt(P(a.mk_full_set(l, o.ptr)));
        }
        function Qn(o, e) {
          const h = e.elemSort().cast(o);
          return new M(P(a.mk_set_member(l, h.ast, e.ast)));
        }
        function Yn(o, e) {
          return new M(P(a.mk_set_subset(l, o.ast, e.ast)));
        }
        class Ur {
          constructor(e) {
            (this.ptr = e), (this.ctx = rt);
            const h = this.ast;
            a.inc_ref(l, h), S.register(this, () => a.dec_ref(l, h), this);
          }
          get ast() {
            return this.ptr;
          }
          id() {
            return a.get_ast_id(l, this.ast);
          }
          eqIdentity(e) {
            return x(e), P(a.is_eq_ast(l, this.ast, e.ast));
          }
          neqIdentity(e) {
            return x(e), !this.eqIdentity(e);
          }
          sexpr() {
            return a.ast_to_string(l, this.ast);
          }
          hash() {
            return a.get_ast_hash(l, this.ast);
          }
          toString() {
            return this.sexpr();
          }
        }
        class Y_ {
          get ptr() {
            return ar(this._ptr), this._ptr;
          }
          constructor(e = a.mk_solver(l)) {
            this.ctx = rt;
            let h;
            typeof e == "string" ? (h = P(a.mk_solver_for_logic(l, X(e)))) : (h = e),
              (this._ptr = h),
              a.solver_inc_ref(l, h),
              S.register(this, () => a.solver_dec_ref(l, h), this);
          }
          set(e, h) {
            a.solver_set_params(l, this.ptr, mr(e, h));
          }
          push() {
            a.solver_push(l, this.ptr);
          }
          pop(e = 1) {
            a.solver_pop(l, this.ptr, e);
          }
          numScopes() {
            return a.solver_get_num_scopes(l, this.ptr);
          }
          reset() {
            a.solver_reset(l, this.ptr);
          }
          add(...e) {
            Jt(e).forEach((h) => {
              x(h), P(a.solver_assert(l, this.ptr, h.ast));
            });
          }
          addAndTrack(e, h) {
            typeof h == "string" && (h = ht.const(h)),
              (0, c.assert)(ct(h), "Provided expression that is not a constant to addAndTrack"),
              P(a.solver_assert_and_track(l, this.ptr, e.ast, h.ast));
          }
          assertions() {
            return new kt(P(a.solver_get_assertions(l, this.ptr)));
          }
          async check(...e) {
            const h = Jt(e).map((F) => (x(F), F.ast)),
              v = await E.runExclusive(() => P(a.solver_check_assumptions(l, this.ptr, h)));
            switch (v) {
              case f.Z3_lbool.Z3_L_FALSE:
                return "unsat";
              case f.Z3_lbool.Z3_L_TRUE:
                return "sat";
              case f.Z3_lbool.Z3_L_UNDEF:
                return "unknown";
              default:
                (0, c.assertExhaustive)(v);
            }
          }
          model() {
            return new Fr(P(a.solver_get_model(l, this.ptr)));
          }
          toString() {
            return P(a.solver_to_string(l, this.ptr));
          }
          fromString(e) {
            a.solver_from_string(l, this.ptr, e), cr();
          }
          release() {
            a.solver_dec_ref(l, this.ptr), (this._ptr = null), S.unregister(this);
          }
        }
        class j_ {
          get ptr() {
            return ar(this._ptr), this._ptr;
          }
          constructor(e = a.mk_optimize(l)) {
            this.ctx = rt;
            let h;
            (h = e), (this._ptr = h), a.optimize_inc_ref(l, h), S.register(this, () => a.optimize_dec_ref(l, h), this);
          }
          set(e, h) {
            a.optimize_set_params(l, this.ptr, mr(e, h));
          }
          push() {
            a.optimize_push(l, this.ptr);
          }
          pop() {
            a.optimize_pop(l, this.ptr);
          }
          add(...e) {
            Jt(e).forEach((h) => {
              x(h), P(a.optimize_assert(l, this.ptr, h.ast));
            });
          }
          addSoft(e, h, v = "") {
            w(h) && (h = `${h.numerator}/${h.denominator}`), P(a.optimize_assert_soft(l, this.ptr, e.ast, h.toString(), X(v)));
          }
          addAndTrack(e, h) {
            typeof h == "string" && (h = ht.const(h)),
              (0, c.assert)(ct(h), "Provided expression that is not a constant to addAndTrack"),
              P(a.optimize_assert_and_track(l, this.ptr, e.ast, h.ast));
          }
          assertions() {
            return new kt(P(a.optimize_get_assertions(l, this.ptr)));
          }
          maximize(e) {
            P(a.optimize_maximize(l, this.ptr, e.ast));
          }
          minimize(e) {
            P(a.optimize_minimize(l, this.ptr, e.ast));
          }
          async check(...e) {
            const h = Jt(e).map((F) => (x(F), F.ast)),
              v = await E.runExclusive(() => P(a.optimize_check(l, this.ptr, h)));
            switch (v) {
              case f.Z3_lbool.Z3_L_FALSE:
                return "unsat";
              case f.Z3_lbool.Z3_L_TRUE:
                return "sat";
              case f.Z3_lbool.Z3_L_UNDEF:
                return "unknown";
              default:
                (0, c.assertExhaustive)(v);
            }
          }
          model() {
            return new Fr(P(a.optimize_get_model(l, this.ptr)));
          }
          toString() {
            return P(a.optimize_to_string(l, this.ptr));
          }
          fromString(e) {
            a.optimize_from_string(l, this.ptr, e), cr();
          }
          release() {
            a.optimize_dec_ref(l, this.ptr), (this._ptr = null), S.unregister(this);
          }
        }
        class Fr {
          get ptr() {
            return ar(this._ptr), this._ptr;
          }
          constructor(e = a.mk_model(l)) {
            (this.ctx = rt), (this._ptr = e), a.model_inc_ref(l, e), S.register(this, () => a.model_dec_ref(l, e), this);
          }
          length() {
            return a.model_get_num_consts(l, this.ptr) + a.model_get_num_funcs(l, this.ptr);
          }
          [Symbol.iterator]() {
            return this.values();
          }
          *entries() {
            const e = this.length();
            for (let h = 0; h < e; h++) yield [h, this.get(h)];
          }
          *keys() {
            for (const [e] of this.entries()) yield e;
          }
          *values() {
            for (const [, e] of this.entries()) yield e;
          }
          decls() {
            return [...this.values()];
          }
          sexpr() {
            return P(a.model_to_string(l, this.ptr));
          }
          toString() {
            return this.sexpr();
          }
          eval(e, h = !1) {
            x(e);
            const v = P(a.model_eval(l, this.ptr, e.ast, h));
            if (v === null) throw new t.Z3Error("Failed to evaluate expression in the model");
            return W(v);
          }
          get(e, h) {
            if (((0, c.assert)(h === void 0 || typeof e == "number"), typeof e == "number")) {
              const v = this.length();
              if (e >= v) throw new RangeError(`expected index ${e} to be less than length ${v}`);
              if (h === void 0) {
                const C = P(a.model_get_num_consts(l, this.ptr));
                return e < C ? new wt(P(a.model_get_const_decl(l, this.ptr, e))) : new wt(P(a.model_get_func_decl(l, this.ptr, e - C)));
              }
              if ((h < 0 && (h += v), h >= v)) throw new RangeError(`expected index ${h} to be less than length ${v}`);
              const F = [];
              for (let C = e; C < h; C++) F.push(this.get(C));
              return F;
            } else if (It(e) || (et(e) && ct(e))) {
              const v = this.getInterp(e);
              return (0, c.assert)(v !== null), v;
            } else if (Yt(e)) return this.getUniverse(e);
            (0, c.assert)(!1, "Number, declaration or constant expected");
          }
          updateValue(e, h) {
            if ((x(e), x(h), et(e) && (e = e.decl()), It(e) && e.arity() !== 0 && pr(h))) {
              const v = this.addFuncInterp(e, h.elseValue());
              for (let F = 0; F < h.numEntries(); F++) {
                const C = h.entry(F),
                  ti = C.numArgs(),
                  ri = J.Array(ti).map((ii, ei) => C.argValue(ei));
                v.addEntry(ri, C.value());
              }
              return;
            }
            if (!It(e) || e.arity() !== 0) throw new t.Z3Error("Expecting 0-ary function or constant expression");
            if (!fr(h)) throw new t.Z3Error("Only func declarations can be assigned to func interpretations");
            P(a.add_const_interp(l, this.ptr, e.ptr, h.ast));
          }
          addFuncInterp(e, h) {
            const v = P(a.add_func_interp(l, this.ptr, e.ptr, e.range().cast(h).ptr));
            return new le(v);
          }
          getInterp(e) {
            if (
              ((0, c.assert)(It(e) || ct(e), "Declaration expected"),
              ct(e) && ((0, c.assert)(et(e)), (e = e.decl())),
              (0, c.assert)(It(e)),
              e.arity() === 0)
            ) {
              const h = P(a.model_get_const_interp(l, this.ptr, e.ptr));
              return h === null ? null : W(h);
            } else {
              const h = P(a.model_get_func_interp(l, this.ptr, e.ptr));
              return h === null ? null : new le(h);
            }
          }
          getUniverse(e) {
            return x(e), new kt(P(a.model_get_sort_universe(l, this.ptr, e.ptr)));
          }
          release() {
            a.model_dec_ref(l, this.ptr), (this._ptr = null), S.unregister(this);
          }
        }
        class H_ {
          constructor(e) {
            (this.ptr = e), (this.ctx = rt), a.func_entry_inc_ref(l, e), S.register(this, () => a.func_entry_dec_ref(l, e), this);
          }
          numArgs() {
            return P(a.func_entry_get_num_args(l, this.ptr));
          }
          argValue(e) {
            return W(P(a.func_entry_get_arg(l, this.ptr, e)));
          }
          value() {
            return W(P(a.func_entry_get_value(l, this.ptr)));
          }
        }
        class le {
          constructor(e) {
            (this.ptr = e), (this.ctx = rt), a.func_interp_inc_ref(l, e), S.register(this, () => a.func_interp_dec_ref(l, e), this);
          }
          elseValue() {
            return W(P(a.func_interp_get_else(l, this.ptr)));
          }
          numEntries() {
            return P(a.func_interp_get_num_entries(l, this.ptr));
          }
          arity() {
            return P(a.func_interp_get_arity(l, this.ptr));
          }
          entry(e) {
            return new H_(P(a.func_interp_get_entry(l, this.ptr, e)));
          }
          addEntry(e, h) {
            const v = new kt();
            for (const F of e) v.push(F);
            x(v),
              x(h),
              (0, c.assert)(this.arity() === v.length(), "Number of arguments in entry doesn't match function arity"),
              P(a.func_interp_add_entry(l, this.ptr, v.ptr, h.ptr));
          }
        }
        class Dt extends Ur {
          get ast() {
            return a.sort_to_ast(l, this.ptr);
          }
          kind() {
            return a.get_sort_kind(l, this.ptr);
          }
          subsort(e) {
            return x(e), !1;
          }
          cast(e) {
            return x(e), (0, c.assert)(e.sort.eqIdentity(e.sort), "Sort mismatch"), e;
          }
          name() {
            return Qt(a.get_sort_name(l, this.ptr));
          }
          eqIdentity(e) {
            return x(e), P(a.is_eq_sort(l, this.ptr, e.ptr));
          }
          neqIdentity(e) {
            return !this.eqIdentity(e);
          }
        }
        class wt extends Ur {
          get ast() {
            return a.func_decl_to_ast(l, this.ptr);
          }
          name() {
            return Qt(a.get_decl_name(l, this.ptr));
          }
          arity() {
            return a.get_arity(l, this.ptr);
          }
          domain(e) {
            return (0, c.assert)(e < this.arity(), "Index out of bounds"), At(a.get_domain(l, this.ptr, e));
          }
          range() {
            return At(a.get_range(l, this.ptr));
          }
          kind() {
            return a.get_decl_kind(l, this.ptr);
          }
          params() {
            const e = a.get_decl_num_parameters(l, this.ptr),
              h = [];
            for (let v = 0; v < e; v++) {
              const F = P(a.get_decl_parameter_kind(l, this.ptr, v));
              switch (F) {
                case f.Z3_parameter_kind.Z3_PARAMETER_INT:
                  h.push(P(a.get_decl_int_parameter(l, this.ptr, v)));
                  break;
                case f.Z3_parameter_kind.Z3_PARAMETER_DOUBLE:
                  h.push(P(a.get_decl_double_parameter(l, this.ptr, v)));
                  break;
                case f.Z3_parameter_kind.Z3_PARAMETER_RATIONAL:
                  h.push(P(a.get_decl_rational_parameter(l, this.ptr, v)));
                  break;
                case f.Z3_parameter_kind.Z3_PARAMETER_SYMBOL:
                  h.push(Qt(P(a.get_decl_symbol_parameter(l, this.ptr, v))));
                  break;
                case f.Z3_parameter_kind.Z3_PARAMETER_SORT:
                  h.push(new Dt(P(a.get_decl_sort_parameter(l, this.ptr, v))));
                  break;
                case f.Z3_parameter_kind.Z3_PARAMETER_AST:
                  h.push(new Rt(P(a.get_decl_ast_parameter(l, this.ptr, v))));
                  break;
                case f.Z3_parameter_kind.Z3_PARAMETER_FUNC_DECL:
                  h.push(new wt(P(a.get_decl_func_decl_parameter(l, this.ptr, v))));
                  break;
                case f.Z3_parameter_kind.Z3_PARAMETER_INTERNAL:
                  break;
                case f.Z3_parameter_kind.Z3_PARAMETER_ZSTRING:
                  break;
                default:
                  (0, c.assertExhaustive)(F);
              }
            }
            return h;
          }
          call(...e) {
            return (
              (0, c.assert)(e.length === this.arity(), `Incorrect number of arguments to ${this}`),
              W(
                P(
                  a.mk_app(
                    l,
                    this.ptr,
                    e.map((h, v) => this.domain(v).cast(h).ast),
                  ),
                ),
              )
            );
          }
        }
        class Rt extends Ur {
          get sort() {
            return At(a.get_sort(l, this.ast));
          }
          eq(e) {
            return new M(P(a.mk_eq(l, this.ast, _t(e).ast)));
          }
          neq(e) {
            return new M(
              P(
                a.mk_distinct(
                  l,
                  [this, e].map((h) => _t(h).ast),
                ),
              ),
            );
          }
          name() {
            return this.decl().name();
          }
          params() {
            return this.decl().params();
          }
          decl() {
            return (0, c.assert)(ut(this), "Z3 application expected"), new wt(P(a.get_app_decl(l, P(a.to_app(l, this.ast)))));
          }
          numArgs() {
            return (0, c.assert)(ut(this), "Z3 applicaiton expected"), P(a.get_app_num_args(l, P(a.to_app(l, this.ast))));
          }
          arg(e) {
            return (
              (0, c.assert)(ut(this), "Z3 applicaiton expected"),
              (0, c.assert)(e < this.numArgs(), `Invalid argument index - expected ${e} to be less than ${this.numArgs()}`),
              W(P(a.get_app_arg(l, P(a.to_app(l, this.ast)), e)))
            );
          }
          children() {
            const e = this.numArgs();
            if (ut(this)) {
              const h = [];
              for (let v = 0; v < e; v++) h.push(this.arg(v));
              return h;
            }
            return [];
          }
        }
        class X_ {
          constructor(e) {
            (this.ptr = e), (this.ctx = rt);
          }
        }
        class jn extends Dt {
          cast(e) {
            return (
              typeof e == "boolean" && (e = ht.val(e)),
              (0, c.assert)(et(e), "true, false or Z3 Boolean expression expected."),
              (0, c.assert)(this.eqIdentity(e.sort), "Value cannot be converted into a Z3 Boolean value"),
              e
            );
          }
          subsort(e) {
            return x(e.ctx), e instanceof gr;
          }
        }
        class M extends Rt {
          not() {
            return _e(this);
          }
          and(e) {
            return ie(this, e);
          }
          or(e) {
            return oe(this, e);
          }
          xor(e) {
            return ne(this, e);
          }
          implies(e) {
            return re(this, e);
          }
          iff(e) {
            return ee(this, e);
          }
        }
        class dr {
          constructor(e) {
            (this.ptr = e), (this.ctx = rt);
          }
        }
        class fe {
          constructor(e) {
            this.ctx = rt;
            let h;
            typeof e == "string" ? (h = P(a.mk_tactic(l, e))) : (h = e),
              (this.ptr = h),
              a.tactic_inc_ref(l, h),
              S.register(this, () => a.tactic_dec_ref(l, h), this);
          }
        }
        class gr extends Dt {
          cast(e) {
            const h = m(this) ? "IntSort" : "RealSort";
            if (et(e)) {
              const v = e.sort;
              if (xt(e)) {
                if (this.eqIdentity(v)) return e;
                if (m(v) && p(this)) return se(e);
                (0, c.assert)(!1, "Can't cast Real to IntSort without loss");
              } else if (gt(e)) return m(this) ? te(e, 1, 0) : se(te(e, 1, 0));
              (0, c.assert)(!1, `Can't cast expression to ${h}`);
            } else {
              if (typeof e != "boolean") return m(this) ? ((0, c.assert)(!w(e), "Can't cast fraction to IntSort"), bt.val(e)) : lt.val(e);
              (0, c.assert)(!1, `Can't cast primitive to ${h}`);
            }
          }
        }
        function pe(o, ...e) {
          if (o instanceof k) {
            if (e.length !== 1) throw new Error("BitVec add only supports 2 arguments");
            return new k(P(a.mk_bvadd(l, o.ast, o.sort.cast(e[0]).ast)));
          } else return (0, c.assert)(o instanceof $), new $(P(a.mk_add(l, [o.ast].concat(e.map((h) => o.sort.cast(h).ast)))));
        }
        function he(o, ...e) {
          if (o instanceof k) {
            if (e.length !== 1) throw new Error("BitVec sub only supports 2 arguments");
            return new k(P(a.mk_bvsub(l, o.ast, o.sort.cast(e[0]).ast)));
          } else return (0, c.assert)(o instanceof $), new $(P(a.mk_sub(l, [o.ast].concat(e.map((h) => o.sort.cast(h).ast)))));
        }
        function be(o, ...e) {
          if (o instanceof k) {
            if (e.length !== 1) throw new Error("BitVec mul only supports 2 arguments");
            return new k(P(a.mk_bvmul(l, o.ast, o.sort.cast(e[0]).ast)));
          } else return (0, c.assert)(o instanceof $), new $(P(a.mk_mul(l, [o.ast].concat(e.map((h) => o.sort.cast(h).ast)))));
        }
        function ge(o, e) {
          return o instanceof k
            ? new k(P(a.mk_bvsdiv(l, o.ast, o.sort.cast(e).ast)))
            : ((0, c.assert)(o instanceof $), new $(P(a.mk_div(l, o.ast, o.sort.cast(e).ast))));
        }
        function Hn(o, e) {
          return new k(P(a.mk_bvudiv(l, o.ast, o.sort.cast(e).ast)));
        }
        function Oe(o) {
          return o instanceof k ? new k(P(a.mk_bvneg(l, o.ast))) : ((0, c.assert)(o instanceof $), new $(P(a.mk_unary_minus(l, o.ast))));
        }
        function Pe(o, e) {
          return o instanceof k
            ? new k(P(a.mk_bvsrem(l, o.ast, o.sort.cast(e).ast)))
            : ((0, c.assert)(o instanceof $), new $(P(a.mk_mod(l, o.ast, o.sort.cast(e).ast))));
        }
        class $ extends Rt {
          add(e) {
            return pe(this, e);
          }
          mul(e) {
            return be(this, e);
          }
          sub(e) {
            return he(this, e);
          }
          pow(e) {
            return new $(P(a.mk_power(l, this.ast, this.sort.cast(e).ast)));
          }
          div(e) {
            return ge(this, e);
          }
          mod(e) {
            return Pe(this, e);
          }
          neg() {
            return Oe(this);
          }
          le(e) {
            return In(this, e);
          }
          lt(e) {
            return Sn(this, e);
          }
          gt(e) {
            return Zn(this, e);
          }
          ge(e) {
            return xn(this, e);
          }
        }
        class Or extends $ {
          value() {
            return BigInt(this.asString());
          }
          asString() {
            return a.get_numeral_string(l, this.ast);
          }
          asBinary() {
            return a.get_numeral_binary_string(l, this.ast);
          }
        }
        class ye extends $ {
          value() {
            return { numerator: this.numerator().value(), denominator: this.denominator().value() };
          }
          numerator() {
            return new Or(a.get_numerator(l, this.ast));
          }
          denominator() {
            return new Or(a.get_denominator(l, this.ast));
          }
          asNumber() {
            const { numerator: e, denominator: h } = this.value(),
              v = e / h;
            return Number(v) + Number(e - v * h) / Number(h);
          }
          asDecimal(e = Number.parseInt(Z("precision") ?? b.toString())) {
            return a.get_numeral_decimal_string(l, this.ast, e);
          }
          asString() {
            return a.get_numeral_string(l, this.ast);
          }
        }
        class Ee extends Dt {
          size() {
            return a.get_bv_sort_size(l, this.ptr);
          }
          subsort(e) {
            return y(e) && this.size() < e.size();
          }
          cast(e) {
            return et(e) ? (x(e), e) : ((0, c.assert)(!w(e), "Can't convert rational to BitVec"), Ht.val(e, this.size()));
          }
        }
        class k extends Rt {
          size() {
            return this.sort.size();
          }
          add(e) {
            return pe(this, e);
          }
          mul(e) {
            return be(this, e);
          }
          sub(e) {
            return he(this, e);
          }
          sdiv(e) {
            return ge(this, e);
          }
          udiv(e) {
            return Hn(this, e);
          }
          smod(e) {
            return Pe(this, e);
          }
          urem(e) {
            return new k(P(a.mk_bvurem(l, this.ast, this.sort.cast(e).ast)));
          }
          srem(e) {
            return new k(P(a.mk_bvsrem(l, this.ast, this.sort.cast(e).ast)));
          }
          neg() {
            return Oe(this);
          }
          or(e) {
            return new k(P(a.mk_bvor(l, this.ast, this.sort.cast(e).ast)));
          }
          and(e) {
            return new k(P(a.mk_bvand(l, this.ast, this.sort.cast(e).ast)));
          }
          nand(e) {
            return new k(P(a.mk_bvnand(l, this.ast, this.sort.cast(e).ast)));
          }
          xor(e) {
            return new k(P(a.mk_bvxor(l, this.ast, this.sort.cast(e).ast)));
          }
          xnor(e) {
            return new k(P(a.mk_bvxnor(l, this.ast, this.sort.cast(e).ast)));
          }
          shr(e) {
            return new k(P(a.mk_bvashr(l, this.ast, this.sort.cast(e).ast)));
          }
          lshr(e) {
            return new k(P(a.mk_bvlshr(l, this.ast, this.sort.cast(e).ast)));
          }
          shl(e) {
            return new k(P(a.mk_bvshl(l, this.ast, this.sort.cast(e).ast)));
          }
          rotateRight(e) {
            return new k(P(a.mk_ext_rotate_right(l, this.ast, this.sort.cast(e).ast)));
          }
          rotateLeft(e) {
            return new k(P(a.mk_ext_rotate_left(l, this.ast, this.sort.cast(e).ast)));
          }
          not() {
            return new k(P(a.mk_bvnot(l, this.ast)));
          }
          extract(e, h) {
            return kn(e, h, this);
          }
          signExt(e) {
            return new k(P(a.mk_sign_ext(l, e, this.ast)));
          }
          zeroExt(e) {
            return new k(P(a.mk_zero_ext(l, e, this.ast)));
          }
          repeat(e) {
            return new k(P(a.mk_repeat(l, e, this.ast)));
          }
          sle(e) {
            return Mn(this, e);
          }
          ule(e) {
            return Bn(this, e);
          }
          slt(e) {
            return Fn(this, e);
          }
          ult(e) {
            return Nn(this, e);
          }
          sge(e) {
            return Dn(this, e);
          }
          uge(e) {
            return Un(this, e);
          }
          sgt(e) {
            return dn(this, e);
          }
          ugt(e) {
            return Ln(this, e);
          }
          redAnd() {
            return new k(P(a.mk_bvredand(l, this.ast)));
          }
          redOr() {
            return new k(P(a.mk_bvredor(l, this.ast)));
          }
          addNoOverflow(e, h) {
            return new M(P(a.mk_bvadd_no_overflow(l, this.ast, this.sort.cast(e).ast, h)));
          }
          addNoUnderflow(e) {
            return new M(P(a.mk_bvadd_no_underflow(l, this.ast, this.sort.cast(e).ast)));
          }
          subNoOverflow(e) {
            return new M(P(a.mk_bvsub_no_overflow(l, this.ast, this.sort.cast(e).ast)));
          }
          subNoUndeflow(e, h) {
            return new M(P(a.mk_bvsub_no_underflow(l, this.ast, this.sort.cast(e).ast, h)));
          }
          sdivNoOverflow(e) {
            return new M(P(a.mk_bvsdiv_no_overflow(l, this.ast, this.sort.cast(e).ast)));
          }
          mulNoOverflow(e, h) {
            return new M(P(a.mk_bvmul_no_overflow(l, this.ast, this.sort.cast(e).ast, h)));
          }
          mulNoUndeflow(e) {
            return new M(P(a.mk_bvmul_no_underflow(l, this.ast, this.sort.cast(e).ast)));
          }
          negNoOverflow() {
            return new M(P(a.mk_bvneg_no_overflow(l, this.ast)));
          }
        }
        class Ae extends k {
          value() {
            return BigInt(this.asString());
          }
          asSignedValue() {
            let e = this.value();
            const h = BigInt(this.size());
            return e >= 2n ** (h - 1n) && (e = e - 2n ** h), e < (-2n) ** (h - 1n) && (e = e + 2n ** h), e;
          }
          asString() {
            return a.get_numeral_string(l, this.ast);
          }
          asBinaryString() {
            return a.get_numeral_binary_string(l, this.ast);
          }
        }
        class Mr extends Dt {
          domain() {
            return At(P(a.get_array_sort_domain(l, this.ptr)));
          }
          domain_n(e) {
            return At(P(a.get_array_sort_domain_n(l, this.ptr, e)));
          }
          range() {
            return At(P(a.get_array_sort_range(l, this.ptr)));
          }
        }
        class Dr extends Rt {
          domain() {
            return this.sort.domain();
          }
          domain_n(e) {
            return this.sort.domain_n(e);
          }
          range() {
            return this.sort.range();
          }
          select(...e) {
            return ue(this, ...e);
          }
          store(...e) {
            return ae(this, ...e);
          }
        }
        class Nt extends Rt {
          elemSort() {
            return this.sort.domain();
          }
          union(...e) {
            return Cn(this, ...e);
          }
          intersect(...e) {
            return qn(this, ...e);
          }
          diff(e) {
            return zn(this, e);
          }
          hasSize(e) {
            return Vn(this, e);
          }
          add(e) {
            return ce(this, e);
          }
          del(e) {
            return Gn(this, e);
          }
          complement() {
            return $n(this);
          }
          contains(e) {
            return Qn(e, this);
          }
          subsetOf(e) {
            return Yn(this, e);
          }
        }
        class we extends Rt {
          is_forall() {
            return a.is_quantifier_forall(l, this.ast);
          }
          is_exists() {
            return a.is_quantifier_exists(l, this.ast);
          }
          is_lambda() {
            return a.is_lambda(l, this.ast);
          }
          weight() {
            return a.get_quantifier_weight(l, this.ast);
          }
          num_patterns() {
            return a.get_quantifier_num_patterns(l, this.ast);
          }
          pattern(e) {
            return new X_(P(a.get_quantifier_pattern_ast(l, this.ast, e)));
          }
          num_no_patterns() {
            return a.get_quantifier_num_no_patterns(l, this.ast);
          }
          no_pattern(e) {
            return W(P(a.get_quantifier_no_pattern_ast(l, this.ast, e)));
          }
          body() {
            return W(P(a.get_quantifier_body(l, this.ast)));
          }
          num_vars() {
            return a.get_quantifier_num_bound(l, this.ast);
          }
          var_name(e) {
            return Qt(a.get_quantifier_bound_name(l, this.ast, e));
          }
          var_sort(e) {
            return At(P(a.get_quantifier_bound_sort(l, this.ast, e)));
          }
          children() {
            return [this.body()];
          }
        }
        class Re extends we {
          not() {
            return _e(this);
          }
          and(e) {
            return ie(this, e);
          }
          or(e) {
            return oe(this, e);
          }
          xor(e) {
            return ne(this, e);
          }
          implies(e) {
            return re(this, e);
          }
          iff(e) {
            return ee(this, e);
          }
        }
        class Xn extends we {
          domain() {
            return this.sort.domain();
          }
          domain_n(e) {
            return this.sort.domain_n(e);
          }
          range() {
            return this.sort.range();
          }
          select(...e) {
            return ue(this, ...e);
          }
          store(...e) {
            return ae(this, ...e);
          }
        }
        class kt {
          constructor(e = a.mk_ast_vector(l)) {
            (this.ptr = e), (this.ctx = rt), a.ast_vector_inc_ref(l, e), S.register(this, () => a.ast_vector_dec_ref(l, e), this);
          }
          length() {
            return a.ast_vector_size(l, this.ptr);
          }
          [Symbol.iterator]() {
            return this.values();
          }
          *entries() {
            const e = this.length();
            for (let h = 0; h < e; h++) yield [h, this.get(h)];
          }
          *keys() {
            for (let [e] of this.entries()) yield e;
          }
          *values() {
            for (let [, e] of this.entries()) yield e;
          }
          get(e, h) {
            const v = this.length();
            if ((e < 0 && (e += v), e >= v)) throw new RangeError(`expected from index ${e} to be less than length ${v}`);
            if (h === void 0) return lr(P(a.ast_vector_get(l, this.ptr, e)));
            if ((h < 0 && (h += v), h >= v)) throw new RangeError(`expected to index ${h} to be less than length ${v}`);
            const F = [];
            for (let C = e; C < h; C++) F.push(lr(P(a.ast_vector_get(l, this.ptr, C))));
            return F;
          }
          set(e, h) {
            if ((x(h), e >= this.length())) throw new RangeError(`expected index ${e} to be less than length ${this.length()}`);
            P(a.ast_vector_set(l, this.ptr, e, h.ast));
          }
          push(e) {
            x(e), P(a.ast_vector_push(l, this.ptr, e.ast));
          }
          resize(e) {
            P(a.ast_vector_resize(l, this.ptr, e));
          }
          has(e) {
            x(e);
            for (const h of this.values()) if (h.eqIdentity(e)) return !0;
            return !1;
          }
          sexpr() {
            return P(a.ast_vector_to_string(l, this.ptr));
          }
        }
        class W_ {
          constructor(e = a.mk_ast_map(l)) {
            (this.ptr = e), (this.ctx = rt), a.ast_map_inc_ref(l, e), S.register(this, () => a.ast_map_dec_ref(l, e), this);
          }
          [Symbol.iterator]() {
            return this.entries();
          }
          get size() {
            return a.ast_map_size(l, this.ptr);
          }
          *entries() {
            for (const e of this.keys()) yield [e, this.get(e)];
          }
          keys() {
            return new kt(a.ast_map_keys(l, this.ptr));
          }
          *values() {
            for (const [e, h] of this.entries()) yield h;
          }
          get(e) {
            return lr(P(a.ast_map_find(l, this.ptr, e.ast)));
          }
          set(e, h) {
            P(a.ast_map_insert(l, this.ptr, e.ast, h.ast));
          }
          delete(e) {
            P(a.ast_map_erase(l, this.ptr, e.ast));
          }
          clear() {
            P(a.ast_map_reset(l, this.ptr));
          }
          has(e) {
            return P(a.ast_map_contains(l, this.ptr, e.ast));
          }
          sexpr() {
            return P(a.ast_map_to_string(l, this.ptr));
          }
        }
        function K_(o, ...e) {
          x(o);
          const h = [],
            v = [];
          for (const [F, C] of e) x(F), x(C), h.push(F.ast), v.push(C.ast);
          return W(P(a.substitute(l, o.ast, h, v)));
        }
        function J_(o) {
          const e = [],
            h = [],
            v = [],
            F = [],
            C = new kt(P(a.parse_smtlib2_string(l, o, e, h, v, F)));
          if (C.length() !== 1) throw new Error("Expected exactly one AST. Instead got " + C.length() + ": " + C.sexpr());
          return C.get(0);
        }
        const rt = {
          ptr: l,
          name: B,
          Solver: Y_,
          Optimize: j_,
          Model: Fr,
          Tactic: fe,
          AstVector: kt,
          AstMap: W_,
          interrupt: it,
          isModel: Nr,
          isAst: fr,
          isSort: Yt,
          isFuncDecl: It,
          isFuncInterp: pr,
          isApp: ut,
          isConst: ct,
          isExpr: et,
          isVar: Lr,
          isAppOf: mt,
          isBool: gt,
          isTrue: jt,
          isFalse: jr,
          isAnd: Hr,
          isOr: hr,
          isImplies: Xr,
          isNot: Wr,
          isEq: Br,
          isDistinct: tr,
          isQuantifier: ft,
          isArith: xt,
          isArithSort: Kr,
          isInt: pt,
          isIntVal: Jr,
          isIntSort: m,
          isReal: i,
          isRealVal: s,
          isRealSort: p,
          isBitVecSort: y,
          isBitVec: R,
          isBitVecVal: T,
          isArraySort: D,
          isArray: j,
          isConstArray: G,
          isProbe: z,
          isTactic: q,
          isAstVector: wn,
          eqIdentity: E_,
          getVarIndex: A_,
          from: _t,
          solve: w_,
          Sort: T_,
          Function: v_,
          RecFunc: S_,
          Bool: ht,
          Int: bt,
          Real: lt,
          BitVec: Ht,
          Array: br,
          Set: Rn,
          If: te,
          Distinct: Z_,
          Const: Tn,
          Consts: I_,
          FreshConst: x_,
          Var: N_,
          Implies: re,
          Iff: ee,
          Eq: L_,
          Xor: ne,
          Not: _e,
          And: ie,
          Or: oe,
          PbEq: B_,
          PbGe: U_,
          PbLe: F_,
          ForAll: d_,
          Exists: M_,
          Lambda: D_,
          ToReal: se,
          ToInt: k_,
          IsInt: C_,
          Sqrt: q_,
          Cbrt: z_,
          BV2Int: V_,
          Int2BV: G_,
          Concat: $_,
          Cond: vn,
          LT: Sn,
          GT: Zn,
          LE: In,
          GE: xn,
          ULT: Nn,
          UGT: Ln,
          ULE: Bn,
          UGE: Un,
          SLT: Fn,
          SGT: dn,
          SLE: Mn,
          SGE: Dn,
          Sum: pe,
          Sub: he,
          Product: be,
          Div: ge,
          BUDiv: Hn,
          Neg: Oe,
          Mod: Pe,
          Select: ue,
          Store: ae,
          Extract: kn,
          substitute: K_,
          simplify: R_,
          ast_from_string: J_,
          SetUnion: Cn,
          SetIntersect: qn,
          SetDifference: zn,
          SetHasSize: Vn,
          SetAdd: ce,
          SetDel: Gn,
          SetComplement: $n,
          EmptySet: me,
          FullSet: Q_,
          isMember: Qn,
          isSubset: Yn,
        };
        return S.register(rt, () => a.del_context(l)), rt;
      }
      return {
        enableTrace: r,
        disableTrace: U,
        getVersion: Y,
        getVersionString: I,
        getFullVersion: N,
        openLog: _,
        appendLog: n,
        getParam: Z,
        setParam: u,
        resetParams: A,
        Context: d,
      };
    }
    return Pr;
  }
  var bn;
  function p_() {
    return (
      bn ||
        ((bn = 1),
        (function (g) {
          var f =
              (Ct && Ct.__createBinding) ||
              (Object.create
                ? function (c, b, E, w) {
                    w === void 0 && (w = E);
                    var O = Object.getOwnPropertyDescriptor(b, E);
                    (!O || ("get" in O ? !b.__esModule : O.writable || O.configurable)) &&
                      (O = {
                        enumerable: !0,
                        get: function () {
                          return b[E];
                        },
                      }),
                      Object.defineProperty(c, w, O);
                  }
                : function (c, b, E, w) {
                    w === void 0 && (w = E), (c[w] = b[E]);
                  }),
            t =
              (Ct && Ct.__exportStar) ||
              function (c, b) {
                for (var E in c) E !== "default" && !Object.prototype.hasOwnProperty.call(b, E) && f(b, c, E);
              };
          Object.defineProperty(g, "__esModule", { value: !0 }), t(f_(), g), t(Zr(), g);
        })(Ct)),
      Ct
    );
  }
  var gn;
  function h_() {
    return (
      gn ||
        ((gn = 1),
        (function (g) {
          var f =
              (Ot && Ot.__createBinding) ||
              (Object.create
                ? function (w, O, a, S) {
                    S === void 0 && (S = a);
                    var r = Object.getOwnPropertyDescriptor(O, a);
                    (!r || ("get" in r ? !O.__esModule : r.writable || r.configurable)) &&
                      (r = {
                        enumerable: !0,
                        get: function () {
                          return O[a];
                        },
                      }),
                      Object.defineProperty(w, S, r);
                  }
                : function (w, O, a, S) {
                    S === void 0 && (S = a), (w[S] = O[a]);
                  }),
            t =
              (Ot && Ot.__exportStar) ||
              function (w, O) {
                for (var a in w) a !== "default" && !Object.prototype.hasOwnProperty.call(O, a) && f(O, w, a);
              };
          Object.defineProperty(g, "__esModule", { value: !0 }), (g.init = E);
          const c = p_(),
            b = ln();
          t(Zr(), g), t(an(), g);
          async function E() {
            const w = J.initZ3;
            if (w === void 0) throw new Error("initZ3 was not imported correctly. Please consult documentation on how to load Z3 in browser");
            const O = await (0, b.init)(w),
              a = (0, c.createApi)(O.Z3);
            return { ...O, ...a };
          }
        })(Ot)),
      Ot
    );
  }
  var On = h_();
  const Qr = class Qr {
    constructor() {
      K(this, yt);
      K(this, Kt);
      K(this, at);
      K(this, vt);
      K(this, Pt);
      K(this, _r);
      K(this, ir);
      K(this, Vt);
      K(this, St);
      K(this, Bt);
      K(this, Ut);
      V(this, Kt, !1), V(this, at, 0xffffffffffffffffn), V(this, Bt, 0n), V(this, Ut, 0n), (this.sequence = []);
    }
    predictNext() {
      if (L(this, Kt)) throw new Error("Current state is unsatisfiable!");
      return Lt(this, yt, r_).call(this, Lt(this, yt, Jn).call(this));
    }
    static async create(f) {
      var t, c;
      try {
        const b = new Qr();
        b.sequence = f;
        const { Context: E } = await On.init();
        V(b, St, E("main")),
          V(b, Vt, new (L(b, St).Solver)()),
          V(b, vt, L(b, St).BitVec.const("se_state0", 64)),
          V(b, Pt, L(b, St).BitVec.const("se_state1", 64)),
          V(b, _r, L(b, vt)),
          V(b, ir, L(b, Pt));
        for (let a = 0; a < b.sequence.length; a++) {
          Lt((t = b), yt, Kn).call(t);
          const S = Lt((c = b), yt, t_).call(c, b.sequence[a]),
            r = L(b, vt).add(L(b, Pt)).and(L(b, St).BitVec.val(9007199254740991, 64));
          L(b, Vt).add(r.eq(L(b, St).BitVec.val(S, 64)));
        }
        if ((await L(b, Vt).check()) !== "sat") return V(b, Kt, !0), b;
        const O = L(b, Vt).model();
        V(b, Bt, O.get(L(b, _r)).value()), V(b, Ut, O.get(L(b, ir)).value());
        for (let a = 0; a < b.sequence.length; a++) b.predictNext();
        return Promise.resolve(b);
      } catch (b) {
        return Promise.reject(b);
      }
    }
  };
  (Kt = new WeakMap()),
    (at = new WeakMap()),
    (vt = new WeakMap()),
    (Pt = new WeakMap()),
    (_r = new WeakMap()),
    (ir = new WeakMap()),
    (Vt = new WeakMap()),
    (St = new WeakMap()),
    (Bt = new WeakMap()),
    (Ut = new WeakMap()),
    (yt = new WeakSet()),
    (Kn = function () {
      if (L(this, vt) === void 0 || L(this, Pt) === void 0) throw new Error("States are not defined!");
      let f = L(this, vt),
        t = L(this, Pt);
      (f = f.xor(f.shl(23))), (f = f.xor(f.lshr(17))), (f = f.xor(t)), (f = f.xor(t.lshr(26))), V(this, vt, L(this, Pt)), V(this, Pt, f);
    }),
    (Jn = function () {
      let f = L(this, Bt) & L(this, at),
        t = L(this, Ut) & L(this, at);
      return (
        (f ^= (f << 23n) & L(this, at)),
        (f ^= (f >> 17n) & L(this, at)),
        (f ^= t & L(this, at)),
        (f ^= (t >> 26n) & L(this, at)),
        V(this, Bt, t & L(this, at)),
        V(this, Ut, f & L(this, at)),
        (L(this, Bt) + L(this, Ut)) & L(this, at)
      );
    }),
    (t_ = function (f) {
      return BigInt(Math.floor(f * Math.pow(2, 53)));
    }),
    (r_ = function (f) {
      return Number(f & 0x1fffffffffffffn) / Number(1n << 53n);
    });
  let Vr = Qr;
  const Yr = class Yr {
    constructor(f) {
      K(this, Et);
      K(this, or, 0xffffffffffffffffn);
      K(this, Ft);
      K(this, Gt);
      K(this, dt);
      K(this, $t);
      K(this, Zt);
      K(this, Mt);
      K(this, sr);
      K(this, ur);
      this.sequence = f;
    }
    static async create(f) {
      var t, c;
      try {
        const b = new Yr(f),
          { Context: E } = await On.init();
        V(b, dt, E("main")),
          V(b, $t, new (L(b, dt).Solver)()),
          V(b, Zt, L(b, dt).BitVec.const("se_state0", 64)),
          V(b, Mt, L(b, dt).BitVec.const("se_state1", 64)),
          V(b, sr, L(b, Zt)),
          V(b, ur, L(b, Mt));
        const w = [...b.sequence].reverse();
        for (const S of w) {
          Lt((t = b), Et, e_).call(t);
          const r = Lt((c = b), Et, __).call(c, S),
            U = L(b, dt).BitVec.val(r, 64);
          L(b, $t).add(L(b, Zt).lshr(11).eq(U));
        }
        if ((await L(b, $t).check()) !== "sat") return Promise.reject("Unsat");
        const a = L(b, $t).model();
        return V(b, Ft, a.get(L(b, sr)).value()), V(b, Gt, a.get(L(b, ur)).value()), Promise.resolve(b);
      } catch (b) {
        return Promise.reject(b);
      }
    }
    predictNext() {
      if (L(this, Ft) === void 0 || L(this, Gt) === void 0) throw new Error("Concrete states not defined! Something went wrong.");
      const f = Lt(this, Et, n_).call(this);
      return Lt(this, Et, i_).call(this, f);
    }
  };
  (or = new WeakMap()),
    (Ft = new WeakMap()),
    (Gt = new WeakMap()),
    (dt = new WeakMap()),
    ($t = new WeakMap()),
    (Zt = new WeakMap()),
    (Mt = new WeakMap()),
    (sr = new WeakMap()),
    (ur = new WeakMap()),
    (Et = new WeakSet()),
    (e_ = function () {
      if (!L(this, Zt) || !L(this, Mt)) throw new Error("Symbolic states not initialized");
      const f = L(this, Zt),
        t = L(this, Mt);
      V(this, Zt, t);
      let c = f.xor(f.shl(23));
      (c = c.xor(c.lshr(17))), (c = c.xor(t)), (c = c.xor(t.lshr(26))), V(this, Mt, c);
    }),
    (n_ = function () {
      const f = L(this, Ft);
      let t = L(this, Ft),
        c = L(this, Gt) ^ (t >> 26n);
      return (
        (c ^= t),
        (c = (c ^ (c >> 17n) ^ (c >> 34n) ^ (c >> 51n)) & L(this, or)),
        (c = (c ^ (c << 23n) ^ (c << 46n)) & L(this, or)),
        V(this, Ft, c),
        V(this, Gt, t),
        f
      );
    }),
    (__ = function (f) {
      return BigInt(Math.floor(f * Number(1n << 53n)));
    }),
    (i_ = function (f) {
      return Number(f >> 11n) / Math.pow(2, 53);
    });
  let Gr = Yr;
  class Pn {
    constructor() {}
    static async create(f, t) {
      switch (f) {
        case "Firefox":
          return await Vr.create(t);
        case "Chrome":
          return await Gr.create(t);
        case "Safari":
          return this;
        default:
          throw new Error("Unrecognized predictor!");
      }
    }
  }
  var $r = {},
    nr = {},
    yn;
  function b_() {
    if (yn) return nr;
    (yn = 1), (nr.byteLength = O), (nr.toByteArray = S), (nr.fromByteArray = Y);
    for (
      var g = [],
        f = [],
        t = typeof Uint8Array < "u" ? Uint8Array : Array,
        c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        b = 0,
        E = c.length;
      b < E;
      ++b
    )
      (g[b] = c[b]), (f[c.charCodeAt(b)] = b);
    (f[45] = 62), (f[95] = 63);
    function w(I) {
      var N = I.length;
      if (N % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var _ = I.indexOf("=");
      _ === -1 && (_ = N);
      var n = _ === N ? 0 : 4 - (_ % 4);
      return [_, n];
    }
    function O(I) {
      var N = w(I),
        _ = N[0],
        n = N[1];
      return ((_ + n) * 3) / 4 - n;
    }
    function a(I, N, _) {
      return ((N + _) * 3) / 4 - _;
    }
    function S(I) {
      var N,
        _ = w(I),
        n = _[0],
        u = _[1],
        A = new t(a(I, n, u)),
        Z = 0,
        d = u > 0 ? n - 4 : n,
        B;
      for (B = 0; B < d; B += 4)
        (N = (f[I.charCodeAt(B)] << 18) | (f[I.charCodeAt(B + 1)] << 12) | (f[I.charCodeAt(B + 2)] << 6) | f[I.charCodeAt(B + 3)]),
          (A[Z++] = (N >> 16) & 255),
          (A[Z++] = (N >> 8) & 255),
          (A[Z++] = N & 255);
      return (
        u === 2 && ((N = (f[I.charCodeAt(B)] << 2) | (f[I.charCodeAt(B + 1)] >> 4)), (A[Z++] = N & 255)),
        u === 1 &&
          ((N = (f[I.charCodeAt(B)] << 10) | (f[I.charCodeAt(B + 1)] << 4) | (f[I.charCodeAt(B + 2)] >> 2)),
          (A[Z++] = (N >> 8) & 255),
          (A[Z++] = N & 255)),
        A
      );
    }
    function r(I) {
      return g[(I >> 18) & 63] + g[(I >> 12) & 63] + g[(I >> 6) & 63] + g[I & 63];
    }
    function U(I, N, _) {
      for (var n, u = [], A = N; A < _; A += 3) (n = ((I[A] << 16) & 16711680) + ((I[A + 1] << 8) & 65280) + (I[A + 2] & 255)), u.push(r(n));
      return u.join("");
    }
    function Y(I) {
      for (var N, _ = I.length, n = _ % 3, u = [], A = 16383, Z = 0, d = _ - n; Z < d; Z += A) u.push(U(I, Z, Z + A > d ? d : Z + A));
      return (
        n === 1
          ? ((N = I[_ - 1]), u.push(g[N >> 2] + g[(N << 4) & 63] + "=="))
          : n === 2 && ((N = (I[_ - 2] << 8) + I[_ - 1]), u.push(g[N >> 10] + g[(N >> 4) & 63] + g[(N << 2) & 63] + "=")),
        u.join("")
      );
    }
    return nr;
  }
  var Ir = {};
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ var En;
  function g_() {
    return (
      En ||
        ((En = 1),
        (Ir.read = function (g, f, t, c, b) {
          var E,
            w,
            O = b * 8 - c - 1,
            a = (1 << O) - 1,
            S = a >> 1,
            r = -7,
            U = t ? b - 1 : 0,
            Y = t ? -1 : 1,
            I = g[f + U];
          for (U += Y, E = I & ((1 << -r) - 1), I >>= -r, r += O; r > 0; E = E * 256 + g[f + U], U += Y, r -= 8);
          for (w = E & ((1 << -r) - 1), E >>= -r, r += c; r > 0; w = w * 256 + g[f + U], U += Y, r -= 8);
          if (E === 0) E = 1 - S;
          else {
            if (E === a) return w ? NaN : (I ? -1 : 1) * (1 / 0);
            (w = w + Math.pow(2, c)), (E = E - S);
          }
          return (I ? -1 : 1) * w * Math.pow(2, E - c);
        }),
        (Ir.write = function (g, f, t, c, b, E) {
          var w,
            O,
            a,
            S = E * 8 - b - 1,
            r = (1 << S) - 1,
            U = r >> 1,
            Y = b === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            I = c ? 0 : E - 1,
            N = c ? 1 : -1,
            _ = f < 0 || (f === 0 && 1 / f < 0) ? 1 : 0;
          for (
            f = Math.abs(f),
              isNaN(f) || f === 1 / 0
                ? ((O = isNaN(f) ? 1 : 0), (w = r))
                : ((w = Math.floor(Math.log(f) / Math.LN2)),
                  f * (a = Math.pow(2, -w)) < 1 && (w--, (a *= 2)),
                  w + U >= 1 ? (f += Y / a) : (f += Y * Math.pow(2, 1 - U)),
                  f * a >= 2 && (w++, (a /= 2)),
                  w + U >= r
                    ? ((O = 0), (w = r))
                    : w + U >= 1
                      ? ((O = (f * a - 1) * Math.pow(2, b)), (w = w + U))
                      : ((O = f * Math.pow(2, U - 1) * Math.pow(2, b)), (w = 0)));
            b >= 8;
            g[t + I] = O & 255, I += N, O /= 256, b -= 8
          );
          for (w = (w << b) | O, S += b; S > 0; g[t + I] = w & 255, I += N, w /= 256, S -= 8);
          g[t + I - N] |= _ * 128;
        })),
      Ir
    );
  }
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */ var An;
  function O_() {
    return (
      An ||
        ((An = 1),
        (function (g) {
          const f = b_(),
            t = g_(),
            c = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
          (g.Buffer = O), (g.SlowBuffer = A), (g.INSPECT_MAX_BYTES = 50);
          const b = 2147483647;
          (g.kMaxLength = b),
            (O.TYPED_ARRAY_SUPPORT = E()),
            !O.TYPED_ARRAY_SUPPORT &&
              typeof console < "u" &&
              typeof console.error == "function" &&
              console.error(
                "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
              );
          function E() {
            try {
              const m = new Uint8Array(1),
                i = {
                  foo: function () {
                    return 42;
                  },
                };
              return Object.setPrototypeOf(i, Uint8Array.prototype), Object.setPrototypeOf(m, i), m.foo() === 42;
            } catch {
              return !1;
            }
          }
          Object.defineProperty(O.prototype, "parent", {
            enumerable: !0,
            get: function () {
              if (O.isBuffer(this)) return this.buffer;
            },
          }),
            Object.defineProperty(O.prototype, "offset", {
              enumerable: !0,
              get: function () {
                if (O.isBuffer(this)) return this.byteOffset;
              },
            });
          function w(m) {
            if (m > b) throw new RangeError('The value "' + m + '" is invalid for option "size"');
            const i = new Uint8Array(m);
            return Object.setPrototypeOf(i, O.prototype), i;
          }
          function O(m, i, s) {
            if (typeof m == "number") {
              if (typeof i == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
              return U(m);
            }
            return a(m, i, s);
          }
          O.poolSize = 8192;
          function a(m, i, s) {
            if (typeof m == "string") return Y(m, i);
            if (ArrayBuffer.isView(m)) return N(m);
            if (m == null)
              throw new TypeError(
                "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m,
              );
            if (
              ft(m, ArrayBuffer) ||
              (m && ft(m.buffer, ArrayBuffer)) ||
              (typeof SharedArrayBuffer < "u" && (ft(m, SharedArrayBuffer) || (m && ft(m.buffer, SharedArrayBuffer))))
            )
              return _(m, i, s);
            if (typeof m == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
            const p = m.valueOf && m.valueOf();
            if (p != null && p !== m) return O.from(p, i, s);
            const y = n(m);
            if (y) return y;
            if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof m[Symbol.toPrimitive] == "function")
              return O.from(m[Symbol.toPrimitive]("string"), i, s);
            throw new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m,
            );
          }
          (O.from = function (m, i, s) {
            return a(m, i, s);
          }),
            Object.setPrototypeOf(O.prototype, Uint8Array.prototype),
            Object.setPrototypeOf(O, Uint8Array);
          function S(m) {
            if (typeof m != "number") throw new TypeError('"size" argument must be of type number');
            if (m < 0) throw new RangeError('The value "' + m + '" is invalid for option "size"');
          }
          function r(m, i, s) {
            return S(m), m <= 0 ? w(m) : i !== void 0 ? (typeof s == "string" ? w(m).fill(i, s) : w(m).fill(i)) : w(m);
          }
          O.alloc = function (m, i, s) {
            return r(m, i, s);
          };
          function U(m) {
            return S(m), w(m < 0 ? 0 : u(m) | 0);
          }
          (O.allocUnsafe = function (m) {
            return U(m);
          }),
            (O.allocUnsafeSlow = function (m) {
              return U(m);
            });
          function Y(m, i) {
            if (((typeof i != "string" || i === "") && (i = "utf8"), !O.isEncoding(i))) throw new TypeError("Unknown encoding: " + i);
            const s = Z(m, i) | 0;
            let p = w(s);
            const y = p.write(m, i);
            return y !== s && (p = p.slice(0, y)), p;
          }
          function I(m) {
            const i = m.length < 0 ? 0 : u(m.length) | 0,
              s = w(i);
            for (let p = 0; p < i; p += 1) s[p] = m[p] & 255;
            return s;
          }
          function N(m) {
            if (ft(m, Uint8Array)) {
              const i = new Uint8Array(m);
              return _(i.buffer, i.byteOffset, i.byteLength);
            }
            return I(m);
          }
          function _(m, i, s) {
            if (i < 0 || m.byteLength < i) throw new RangeError('"offset" is outside of buffer bounds');
            if (m.byteLength < i + (s || 0)) throw new RangeError('"length" is outside of buffer bounds');
            let p;
            return (
              i === void 0 && s === void 0 ? (p = new Uint8Array(m)) : s === void 0 ? (p = new Uint8Array(m, i)) : (p = new Uint8Array(m, i, s)),
              Object.setPrototypeOf(p, O.prototype),
              p
            );
          }
          function n(m) {
            if (O.isBuffer(m)) {
              const i = u(m.length) | 0,
                s = w(i);
              return s.length === 0 || m.copy(s, 0, 0, i), s;
            }
            if (m.length !== void 0) return typeof m.length != "number" || xt(m.length) ? w(0) : I(m);
            if (m.type === "Buffer" && Array.isArray(m.data)) return I(m.data);
          }
          function u(m) {
            if (m >= b) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + b.toString(16) + " bytes");
            return m | 0;
          }
          function A(m) {
            return +m != m && (m = 0), O.alloc(+m);
          }
          (O.isBuffer = function (i) {
            return i != null && i._isBuffer === !0 && i !== O.prototype;
          }),
            (O.compare = function (i, s) {
              if (
                (ft(i, Uint8Array) && (i = O.from(i, i.offset, i.byteLength)),
                ft(s, Uint8Array) && (s = O.from(s, s.offset, s.byteLength)),
                !O.isBuffer(i) || !O.isBuffer(s))
              )
                throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
              if (i === s) return 0;
              let p = i.length,
                y = s.length;
              for (let R = 0, T = Math.min(p, y); R < T; ++R)
                if (i[R] !== s[R]) {
                  (p = i[R]), (y = s[R]);
                  break;
                }
              return p < y ? -1 : y < p ? 1 : 0;
            }),
            (O.isEncoding = function (i) {
              switch (String(i).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return !0;
                default:
                  return !1;
              }
            }),
            (O.concat = function (i, s) {
              if (!Array.isArray(i)) throw new TypeError('"list" argument must be an Array of Buffers');
              if (i.length === 0) return O.alloc(0);
              let p;
              if (s === void 0) for (s = 0, p = 0; p < i.length; ++p) s += i[p].length;
              const y = O.allocUnsafe(s);
              let R = 0;
              for (p = 0; p < i.length; ++p) {
                let T = i[p];
                if (ft(T, Uint8Array))
                  R + T.length > y.length ? (O.isBuffer(T) || (T = O.from(T)), T.copy(y, R)) : Uint8Array.prototype.set.call(y, T, R);
                else if (O.isBuffer(T)) T.copy(y, R);
                else throw new TypeError('"list" argument must be an Array of Buffers');
                R += T.length;
              }
              return y;
            });
          function Z(m, i) {
            if (O.isBuffer(m)) return m.length;
            if (ArrayBuffer.isView(m) || ft(m, ArrayBuffer)) return m.byteLength;
            if (typeof m != "string")
              throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof m);
            const s = m.length,
              p = arguments.length > 2 && arguments[2] === !0;
            if (!p && s === 0) return 0;
            let y = !1;
            for (;;)
              switch (i) {
                case "ascii":
                case "latin1":
                case "binary":
                  return s;
                case "utf8":
                case "utf-8":
                  return hr(m).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return s * 2;
                case "hex":
                  return s >>> 1;
                case "base64":
                  return Br(m).length;
                default:
                  if (y) return p ? -1 : hr(m).length;
                  (i = ("" + i).toLowerCase()), (y = !0);
              }
          }
          O.byteLength = Z;
          function d(m, i, s) {
            let p = !1;
            if (
              ((i === void 0 || i < 0) && (i = 0),
              i > this.length || ((s === void 0 || s > this.length) && (s = this.length), s <= 0) || ((s >>>= 0), (i >>>= 0), s <= i))
            )
              return "";
            for (m || (m = "utf8"); ; )
              switch (m) {
                case "hex":
                  return Jt(this, i, s);
                case "utf8":
                case "utf-8":
                  return Qt(this, i, s);
                case "ascii":
                  return At(this, i, s);
                case "latin1":
                case "binary":
                  return W(this, i, s);
                case "base64":
                  return X(this, i, s);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return xr(this, i, s);
                default:
                  if (p) throw new TypeError("Unknown encoding: " + m);
                  (m = (m + "").toLowerCase()), (p = !0);
              }
          }
          O.prototype._isBuffer = !0;
          function B(m, i, s) {
            const p = m[i];
            (m[i] = m[s]), (m[s] = p);
          }
          (O.prototype.swap16 = function () {
            const i = this.length;
            if (i % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (let s = 0; s < i; s += 2) B(this, s, s + 1);
            return this;
          }),
            (O.prototype.swap32 = function () {
              const i = this.length;
              if (i % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
              for (let s = 0; s < i; s += 4) B(this, s, s + 3), B(this, s + 1, s + 2);
              return this;
            }),
            (O.prototype.swap64 = function () {
              const i = this.length;
              if (i % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
              for (let s = 0; s < i; s += 8) B(this, s, s + 7), B(this, s + 1, s + 6), B(this, s + 2, s + 5), B(this, s + 3, s + 4);
              return this;
            }),
            (O.prototype.toString = function () {
              const i = this.length;
              return i === 0 ? "" : arguments.length === 0 ? Qt(this, 0, i) : d.apply(this, arguments);
            }),
            (O.prototype.toLocaleString = O.prototype.toString),
            (O.prototype.equals = function (i) {
              if (!O.isBuffer(i)) throw new TypeError("Argument must be a Buffer");
              return this === i ? !0 : O.compare(this, i) === 0;
            }),
            (O.prototype.inspect = function () {
              let i = "";
              const s = g.INSPECT_MAX_BYTES;
              return (
                (i = this.toString("hex", 0, s)
                  .replace(/(.{2})/g, "$1 ")
                  .trim()),
                this.length > s && (i += " ... "),
                "<Buffer " + i + ">"
              );
            }),
            c && (O.prototype[c] = O.prototype.inspect),
            (O.prototype.compare = function (i, s, p, y, R) {
              if ((ft(i, Uint8Array) && (i = O.from(i, i.offset, i.byteLength)), !O.isBuffer(i)))
                throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof i);
              if (
                (s === void 0 && (s = 0),
                p === void 0 && (p = i ? i.length : 0),
                y === void 0 && (y = 0),
                R === void 0 && (R = this.length),
                s < 0 || p > i.length || y < 0 || R > this.length)
              )
                throw new RangeError("out of range index");
              if (y >= R && s >= p) return 0;
              if (y >= R) return -1;
              if (s >= p) return 1;
              if (((s >>>= 0), (p >>>= 0), (y >>>= 0), (R >>>= 0), this === i)) return 0;
              let T = R - y,
                D = p - s;
              const j = Math.min(T, D),
                G = this.slice(y, R),
                z = i.slice(s, p);
              for (let q = 0; q < j; ++q)
                if (G[q] !== z[q]) {
                  (T = G[q]), (D = z[q]);
                  break;
                }
              return T < D ? -1 : D < T ? 1 : 0;
            });
          function nt(m, i, s, p, y) {
            if (m.length === 0) return -1;
            if (
              (typeof s == "string" ? ((p = s), (s = 0)) : s > 2147483647 ? (s = 2147483647) : s < -2147483648 && (s = -2147483648),
              (s = +s),
              xt(s) && (s = y ? 0 : m.length - 1),
              s < 0 && (s = m.length + s),
              s >= m.length)
            ) {
              if (y) return -1;
              s = m.length - 1;
            } else if (s < 0)
              if (y) s = 0;
              else return -1;
            if ((typeof i == "string" && (i = O.from(i, p)), O.isBuffer(i))) return i.length === 0 ? -1 : ot(m, i, s, p, y);
            if (typeof i == "number")
              return (
                (i = i & 255),
                typeof Uint8Array.prototype.indexOf == "function"
                  ? y
                    ? Uint8Array.prototype.indexOf.call(m, i, s)
                    : Uint8Array.prototype.lastIndexOf.call(m, i, s)
                  : ot(m, [i], s, p, y)
              );
            throw new TypeError("val must be string, number or Buffer");
          }
          function ot(m, i, s, p, y) {
            let R = 1,
              T = m.length,
              D = i.length;
            if (p !== void 0 && ((p = String(p).toLowerCase()), p === "ucs2" || p === "ucs-2" || p === "utf16le" || p === "utf-16le")) {
              if (m.length < 2 || i.length < 2) return -1;
              (R = 2), (T /= 2), (D /= 2), (s /= 2);
            }
            function j(z, q) {
              return R === 1 ? z[q] : z.readUInt16BE(q * R);
            }
            let G;
            if (y) {
              let z = -1;
              for (G = s; G < T; G++)
                if (j(m, G) === j(i, z === -1 ? 0 : G - z)) {
                  if ((z === -1 && (z = G), G - z + 1 === D)) return z * R;
                } else z !== -1 && (G -= G - z), (z = -1);
            } else
              for (s + D > T && (s = T - D), G = s; G >= 0; G--) {
                let z = !0;
                for (let q = 0; q < D; q++)
                  if (j(m, G + q) !== j(i, q)) {
                    z = !1;
                    break;
                  }
                if (z) return G;
              }
            return -1;
          }
          (O.prototype.includes = function (i, s, p) {
            return this.indexOf(i, s, p) !== -1;
          }),
            (O.prototype.indexOf = function (i, s, p) {
              return nt(this, i, s, p, !0);
            }),
            (O.prototype.lastIndexOf = function (i, s, p) {
              return nt(this, i, s, p, !1);
            });
          function l(m, i, s, p) {
            s = Number(s) || 0;
            const y = m.length - s;
            p ? ((p = Number(p)), p > y && (p = y)) : (p = y);
            const R = i.length;
            p > R / 2 && (p = R / 2);
            let T;
            for (T = 0; T < p; ++T) {
              const D = parseInt(i.substr(T * 2, 2), 16);
              if (xt(D)) return T;
              m[s + T] = D;
            }
            return T;
          }
          function x(m, i, s, p) {
            return tr(hr(i, m.length - s), m, s, p);
          }
          function ar(m, i, s, p) {
            return tr(Xr(i), m, s, p);
          }
          function cr(m, i, s, p) {
            return tr(Br(i), m, s, p);
          }
          function P(m, i, s, p) {
            return tr(Wr(i, m.length - s), m, s, p);
          }
          (O.prototype.write = function (i, s, p, y) {
            if (s === void 0) (y = "utf8"), (p = this.length), (s = 0);
            else if (p === void 0 && typeof s == "string") (y = s), (p = this.length), (s = 0);
            else if (isFinite(s)) (s = s >>> 0), isFinite(p) ? ((p = p >>> 0), y === void 0 && (y = "utf8")) : ((y = p), (p = void 0));
            else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            const R = this.length - s;
            if (((p === void 0 || p > R) && (p = R), (i.length > 0 && (p < 0 || s < 0)) || s > this.length))
              throw new RangeError("Attempt to write outside buffer bounds");
            y || (y = "utf8");
            let T = !1;
            for (;;)
              switch (y) {
                case "hex":
                  return l(this, i, s, p);
                case "utf8":
                case "utf-8":
                  return x(this, i, s, p);
                case "ascii":
                case "latin1":
                case "binary":
                  return ar(this, i, s, p);
                case "base64":
                  return cr(this, i, s, p);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return P(this, i, s, p);
                default:
                  if (T) throw new TypeError("Unknown encoding: " + y);
                  (y = ("" + y).toLowerCase()), (T = !0);
              }
          }),
            (O.prototype.toJSON = function () {
              return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
            });
          function X(m, i, s) {
            return i === 0 && s === m.length ? f.fromByteArray(m) : f.fromByteArray(m.slice(i, s));
          }
          function Qt(m, i, s) {
            s = Math.min(m.length, s);
            const p = [];
            let y = i;
            for (; y < s; ) {
              const R = m[y];
              let T = null,
                D = R > 239 ? 4 : R > 223 ? 3 : R > 191 ? 2 : 1;
              if (y + D <= s) {
                let j, G, z, q;
                switch (D) {
                  case 1:
                    R < 128 && (T = R);
                    break;
                  case 2:
                    (j = m[y + 1]), (j & 192) === 128 && ((q = ((R & 31) << 6) | (j & 63)), q > 127 && (T = q));
                    break;
                  case 3:
                    (j = m[y + 1]),
                      (G = m[y + 2]),
                      (j & 192) === 128 &&
                        (G & 192) === 128 &&
                        ((q = ((R & 15) << 12) | ((j & 63) << 6) | (G & 63)), q > 2047 && (q < 55296 || q > 57343) && (T = q));
                    break;
                  case 4:
                    (j = m[y + 1]),
                      (G = m[y + 2]),
                      (z = m[y + 3]),
                      (j & 192) === 128 &&
                        (G & 192) === 128 &&
                        (z & 192) === 128 &&
                        ((q = ((R & 15) << 18) | ((j & 63) << 12) | ((G & 63) << 6) | (z & 63)), q > 65535 && q < 1114112 && (T = q));
                }
              }
              T === null ? ((T = 65533), (D = 1)) : T > 65535 && ((T -= 65536), p.push(((T >>> 10) & 1023) | 55296), (T = 56320 | (T & 1023))),
                p.push(T),
                (y += D);
            }
            return lr(p);
          }
          const mr = 4096;
          function lr(m) {
            const i = m.length;
            if (i <= mr) return String.fromCharCode.apply(String, m);
            let s = "",
              p = 0;
            for (; p < i; ) s += String.fromCharCode.apply(String, m.slice(p, (p += mr)));
            return s;
          }
          function At(m, i, s) {
            let p = "";
            s = Math.min(m.length, s);
            for (let y = i; y < s; ++y) p += String.fromCharCode(m[y] & 127);
            return p;
          }
          function W(m, i, s) {
            let p = "";
            s = Math.min(m.length, s);
            for (let y = i; y < s; ++y) p += String.fromCharCode(m[y]);
            return p;
          }
          function Jt(m, i, s) {
            const p = m.length;
            (!i || i < 0) && (i = 0), (!s || s < 0 || s > p) && (s = p);
            let y = "";
            for (let R = i; R < s; ++R) y += Kr[m[R]];
            return y;
          }
          function xr(m, i, s) {
            const p = m.slice(i, s);
            let y = "";
            for (let R = 0; R < p.length - 1; R += 2) y += String.fromCharCode(p[R] + p[R + 1] * 256);
            return y;
          }
          O.prototype.slice = function (i, s) {
            const p = this.length;
            (i = ~~i),
              (s = s === void 0 ? p : ~~s),
              i < 0 ? ((i += p), i < 0 && (i = 0)) : i > p && (i = p),
              s < 0 ? ((s += p), s < 0 && (s = 0)) : s > p && (s = p),
              s < i && (s = i);
            const y = this.subarray(i, s);
            return Object.setPrototypeOf(y, O.prototype), y;
          };
          function tt(m, i, s) {
            if (m % 1 !== 0 || m < 0) throw new RangeError("offset is not uint");
            if (m + i > s) throw new RangeError("Trying to access beyond buffer length");
          }
          (O.prototype.readUintLE = O.prototype.readUIntLE =
            function (i, s, p) {
              (i = i >>> 0), (s = s >>> 0), p || tt(i, s, this.length);
              let y = this[i],
                R = 1,
                T = 0;
              for (; ++T < s && (R *= 256); ) y += this[i + T] * R;
              return y;
            }),
            (O.prototype.readUintBE = O.prototype.readUIntBE =
              function (i, s, p) {
                (i = i >>> 0), (s = s >>> 0), p || tt(i, s, this.length);
                let y = this[i + --s],
                  R = 1;
                for (; s > 0 && (R *= 256); ) y += this[i + --s] * R;
                return y;
              }),
            (O.prototype.readUint8 = O.prototype.readUInt8 =
              function (i, s) {
                return (i = i >>> 0), s || tt(i, 1, this.length), this[i];
              }),
            (O.prototype.readUint16LE = O.prototype.readUInt16LE =
              function (i, s) {
                return (i = i >>> 0), s || tt(i, 2, this.length), this[i] | (this[i + 1] << 8);
              }),
            (O.prototype.readUint16BE = O.prototype.readUInt16BE =
              function (i, s) {
                return (i = i >>> 0), s || tt(i, 2, this.length), (this[i] << 8) | this[i + 1];
              }),
            (O.prototype.readUint32LE = O.prototype.readUInt32LE =
              function (i, s) {
                return (i = i >>> 0), s || tt(i, 4, this.length), (this[i] | (this[i + 1] << 8) | (this[i + 2] << 16)) + this[i + 3] * 16777216;
              }),
            (O.prototype.readUint32BE = O.prototype.readUInt32BE =
              function (i, s) {
                return (i = i >>> 0), s || tt(i, 4, this.length), this[i] * 16777216 + ((this[i + 1] << 16) | (this[i + 2] << 8) | this[i + 3]);
              }),
            (O.prototype.readBigUInt64LE = pt(function (i) {
              (i = i >>> 0), gt(i, "offset");
              const s = this[i],
                p = this[i + 7];
              (s === void 0 || p === void 0) && jt(i, this.length - 8);
              const y = s + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + this[++i] * 2 ** 24,
                R = this[++i] + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + p * 2 ** 24;
              return BigInt(y) + (BigInt(R) << BigInt(32));
            })),
            (O.prototype.readBigUInt64BE = pt(function (i) {
              (i = i >>> 0), gt(i, "offset");
              const s = this[i],
                p = this[i + 7];
              (s === void 0 || p === void 0) && jt(i, this.length - 8);
              const y = s * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + this[++i],
                R = this[++i] * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + p;
              return (BigInt(y) << BigInt(32)) + BigInt(R);
            })),
            (O.prototype.readIntLE = function (i, s, p) {
              (i = i >>> 0), (s = s >>> 0), p || tt(i, s, this.length);
              let y = this[i],
                R = 1,
                T = 0;
              for (; ++T < s && (R *= 256); ) y += this[i + T] * R;
              return (R *= 128), y >= R && (y -= Math.pow(2, 8 * s)), y;
            }),
            (O.prototype.readIntBE = function (i, s, p) {
              (i = i >>> 0), (s = s >>> 0), p || tt(i, s, this.length);
              let y = s,
                R = 1,
                T = this[i + --y];
              for (; y > 0 && (R *= 256); ) T += this[i + --y] * R;
              return (R *= 128), T >= R && (T -= Math.pow(2, 8 * s)), T;
            }),
            (O.prototype.readInt8 = function (i, s) {
              return (i = i >>> 0), s || tt(i, 1, this.length), this[i] & 128 ? (255 - this[i] + 1) * -1 : this[i];
            }),
            (O.prototype.readInt16LE = function (i, s) {
              (i = i >>> 0), s || tt(i, 2, this.length);
              const p = this[i] | (this[i + 1] << 8);
              return p & 32768 ? p | 4294901760 : p;
            }),
            (O.prototype.readInt16BE = function (i, s) {
              (i = i >>> 0), s || tt(i, 2, this.length);
              const p = this[i + 1] | (this[i] << 8);
              return p & 32768 ? p | 4294901760 : p;
            }),
            (O.prototype.readInt32LE = function (i, s) {
              return (i = i >>> 0), s || tt(i, 4, this.length), this[i] | (this[i + 1] << 8) | (this[i + 2] << 16) | (this[i + 3] << 24);
            }),
            (O.prototype.readInt32BE = function (i, s) {
              return (i = i >>> 0), s || tt(i, 4, this.length), (this[i] << 24) | (this[i + 1] << 16) | (this[i + 2] << 8) | this[i + 3];
            }),
            (O.prototype.readBigInt64LE = pt(function (i) {
              (i = i >>> 0), gt(i, "offset");
              const s = this[i],
                p = this[i + 7];
              (s === void 0 || p === void 0) && jt(i, this.length - 8);
              const y = this[i + 4] + this[i + 5] * 2 ** 8 + this[i + 6] * 2 ** 16 + (p << 24);
              return (BigInt(y) << BigInt(32)) + BigInt(s + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + this[++i] * 2 ** 24);
            })),
            (O.prototype.readBigInt64BE = pt(function (i) {
              (i = i >>> 0), gt(i, "offset");
              const s = this[i],
                p = this[i + 7];
              (s === void 0 || p === void 0) && jt(i, this.length - 8);
              const y = (s << 24) + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + this[++i];
              return (BigInt(y) << BigInt(32)) + BigInt(this[++i] * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + p);
            })),
            (O.prototype.readFloatLE = function (i, s) {
              return (i = i >>> 0), s || tt(i, 4, this.length), t.read(this, i, !0, 23, 4);
            }),
            (O.prototype.readFloatBE = function (i, s) {
              return (i = i >>> 0), s || tt(i, 4, this.length), t.read(this, i, !1, 23, 4);
            }),
            (O.prototype.readDoubleLE = function (i, s) {
              return (i = i >>> 0), s || tt(i, 8, this.length), t.read(this, i, !0, 52, 8);
            }),
            (O.prototype.readDoubleBE = function (i, s) {
              return (i = i >>> 0), s || tt(i, 8, this.length), t.read(this, i, !1, 52, 8);
            });
          function it(m, i, s, p, y, R) {
            if (!O.isBuffer(m)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (i > y || i < R) throw new RangeError('"value" argument is out of bounds');
            if (s + p > m.length) throw new RangeError("Index out of range");
          }
          (O.prototype.writeUintLE = O.prototype.writeUIntLE =
            function (i, s, p, y) {
              if (((i = +i), (s = s >>> 0), (p = p >>> 0), !y)) {
                const D = Math.pow(2, 8 * p) - 1;
                it(this, i, s, p, D, 0);
              }
              let R = 1,
                T = 0;
              for (this[s] = i & 255; ++T < p && (R *= 256); ) this[s + T] = (i / R) & 255;
              return s + p;
            }),
            (O.prototype.writeUintBE = O.prototype.writeUIntBE =
              function (i, s, p, y) {
                if (((i = +i), (s = s >>> 0), (p = p >>> 0), !y)) {
                  const D = Math.pow(2, 8 * p) - 1;
                  it(this, i, s, p, D, 0);
                }
                let R = p - 1,
                  T = 1;
                for (this[s + R] = i & 255; --R >= 0 && (T *= 256); ) this[s + R] = (i / T) & 255;
                return s + p;
              }),
            (O.prototype.writeUint8 = O.prototype.writeUInt8 =
              function (i, s, p) {
                return (i = +i), (s = s >>> 0), p || it(this, i, s, 1, 255, 0), (this[s] = i & 255), s + 1;
              }),
            (O.prototype.writeUint16LE = O.prototype.writeUInt16LE =
              function (i, s, p) {
                return (i = +i), (s = s >>> 0), p || it(this, i, s, 2, 65535, 0), (this[s] = i & 255), (this[s + 1] = i >>> 8), s + 2;
              }),
            (O.prototype.writeUint16BE = O.prototype.writeUInt16BE =
              function (i, s, p) {
                return (i = +i), (s = s >>> 0), p || it(this, i, s, 2, 65535, 0), (this[s] = i >>> 8), (this[s + 1] = i & 255), s + 2;
              }),
            (O.prototype.writeUint32LE = O.prototype.writeUInt32LE =
              function (i, s, p) {
                return (
                  (i = +i),
                  (s = s >>> 0),
                  p || it(this, i, s, 4, 4294967295, 0),
                  (this[s + 3] = i >>> 24),
                  (this[s + 2] = i >>> 16),
                  (this[s + 1] = i >>> 8),
                  (this[s] = i & 255),
                  s + 4
                );
              }),
            (O.prototype.writeUint32BE = O.prototype.writeUInt32BE =
              function (i, s, p) {
                return (
                  (i = +i),
                  (s = s >>> 0),
                  p || it(this, i, s, 4, 4294967295, 0),
                  (this[s] = i >>> 24),
                  (this[s + 1] = i >>> 16),
                  (this[s + 2] = i >>> 8),
                  (this[s + 3] = i & 255),
                  s + 4
                );
              });
          function Nr(m, i, s, p, y) {
            mt(i, p, y, m, s, 7);
            let R = Number(i & BigInt(4294967295));
            (m[s++] = R), (R = R >> 8), (m[s++] = R), (R = R >> 8), (m[s++] = R), (R = R >> 8), (m[s++] = R);
            let T = Number((i >> BigInt(32)) & BigInt(4294967295));
            return (m[s++] = T), (T = T >> 8), (m[s++] = T), (T = T >> 8), (m[s++] = T), (T = T >> 8), (m[s++] = T), s;
          }
          function fr(m, i, s, p, y) {
            mt(i, p, y, m, s, 7);
            let R = Number(i & BigInt(4294967295));
            (m[s + 7] = R), (R = R >> 8), (m[s + 6] = R), (R = R >> 8), (m[s + 5] = R), (R = R >> 8), (m[s + 4] = R);
            let T = Number((i >> BigInt(32)) & BigInt(4294967295));
            return (m[s + 3] = T), (T = T >> 8), (m[s + 2] = T), (T = T >> 8), (m[s + 1] = T), (T = T >> 8), (m[s] = T), s + 8;
          }
          (O.prototype.writeBigUInt64LE = pt(function (i, s = 0) {
            return Nr(this, i, s, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
            (O.prototype.writeBigUInt64BE = pt(function (i, s = 0) {
              return fr(this, i, s, BigInt(0), BigInt("0xffffffffffffffff"));
            })),
            (O.prototype.writeIntLE = function (i, s, p, y) {
              if (((i = +i), (s = s >>> 0), !y)) {
                const j = Math.pow(2, 8 * p - 1);
                it(this, i, s, p, j - 1, -j);
              }
              let R = 0,
                T = 1,
                D = 0;
              for (this[s] = i & 255; ++R < p && (T *= 256); )
                i < 0 && D === 0 && this[s + R - 1] !== 0 && (D = 1), (this[s + R] = (((i / T) >> 0) - D) & 255);
              return s + p;
            }),
            (O.prototype.writeIntBE = function (i, s, p, y) {
              if (((i = +i), (s = s >>> 0), !y)) {
                const j = Math.pow(2, 8 * p - 1);
                it(this, i, s, p, j - 1, -j);
              }
              let R = p - 1,
                T = 1,
                D = 0;
              for (this[s + R] = i & 255; --R >= 0 && (T *= 256); )
                i < 0 && D === 0 && this[s + R + 1] !== 0 && (D = 1), (this[s + R] = (((i / T) >> 0) - D) & 255);
              return s + p;
            }),
            (O.prototype.writeInt8 = function (i, s, p) {
              return (i = +i), (s = s >>> 0), p || it(this, i, s, 1, 127, -128), i < 0 && (i = 255 + i + 1), (this[s] = i & 255), s + 1;
            }),
            (O.prototype.writeInt16LE = function (i, s, p) {
              return (i = +i), (s = s >>> 0), p || it(this, i, s, 2, 32767, -32768), (this[s] = i & 255), (this[s + 1] = i >>> 8), s + 2;
            }),
            (O.prototype.writeInt16BE = function (i, s, p) {
              return (i = +i), (s = s >>> 0), p || it(this, i, s, 2, 32767, -32768), (this[s] = i >>> 8), (this[s + 1] = i & 255), s + 2;
            }),
            (O.prototype.writeInt32LE = function (i, s, p) {
              return (
                (i = +i),
                (s = s >>> 0),
                p || it(this, i, s, 4, 2147483647, -2147483648),
                (this[s] = i & 255),
                (this[s + 1] = i >>> 8),
                (this[s + 2] = i >>> 16),
                (this[s + 3] = i >>> 24),
                s + 4
              );
            }),
            (O.prototype.writeInt32BE = function (i, s, p) {
              return (
                (i = +i),
                (s = s >>> 0),
                p || it(this, i, s, 4, 2147483647, -2147483648),
                i < 0 && (i = 4294967295 + i + 1),
                (this[s] = i >>> 24),
                (this[s + 1] = i >>> 16),
                (this[s + 2] = i >>> 8),
                (this[s + 3] = i & 255),
                s + 4
              );
            }),
            (O.prototype.writeBigInt64LE = pt(function (i, s = 0) {
              return Nr(this, i, s, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
            })),
            (O.prototype.writeBigInt64BE = pt(function (i, s = 0) {
              return fr(this, i, s, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
            }));
          function Yt(m, i, s, p, y, R) {
            if (s + p > m.length) throw new RangeError("Index out of range");
            if (s < 0) throw new RangeError("Index out of range");
          }
          function It(m, i, s, p, y) {
            return (i = +i), (s = s >>> 0), y || Yt(m, i, s, 4), t.write(m, i, s, p, 23, 4), s + 4;
          }
          (O.prototype.writeFloatLE = function (i, s, p) {
            return It(this, i, s, !0, p);
          }),
            (O.prototype.writeFloatBE = function (i, s, p) {
              return It(this, i, s, !1, p);
            });
          function pr(m, i, s, p, y) {
            return (i = +i), (s = s >>> 0), y || Yt(m, i, s, 8), t.write(m, i, s, p, 52, 8), s + 8;
          }
          (O.prototype.writeDoubleLE = function (i, s, p) {
            return pr(this, i, s, !0, p);
          }),
            (O.prototype.writeDoubleBE = function (i, s, p) {
              return pr(this, i, s, !1, p);
            }),
            (O.prototype.copy = function (i, s, p, y) {
              if (!O.isBuffer(i)) throw new TypeError("argument should be a Buffer");
              if (
                (p || (p = 0),
                !y && y !== 0 && (y = this.length),
                s >= i.length && (s = i.length),
                s || (s = 0),
                y > 0 && y < p && (y = p),
                y === p || i.length === 0 || this.length === 0)
              )
                return 0;
              if (s < 0) throw new RangeError("targetStart out of bounds");
              if (p < 0 || p >= this.length) throw new RangeError("Index out of range");
              if (y < 0) throw new RangeError("sourceEnd out of bounds");
              y > this.length && (y = this.length), i.length - s < y - p && (y = i.length - s + p);
              const R = y - p;
              return (
                this === i && typeof Uint8Array.prototype.copyWithin == "function"
                  ? this.copyWithin(s, p, y)
                  : Uint8Array.prototype.set.call(i, this.subarray(p, y), s),
                R
              );
            }),
            (O.prototype.fill = function (i, s, p, y) {
              if (typeof i == "string") {
                if (
                  (typeof s == "string" ? ((y = s), (s = 0), (p = this.length)) : typeof p == "string" && ((y = p), (p = this.length)),
                  y !== void 0 && typeof y != "string")
                )
                  throw new TypeError("encoding must be a string");
                if (typeof y == "string" && !O.isEncoding(y)) throw new TypeError("Unknown encoding: " + y);
                if (i.length === 1) {
                  const T = i.charCodeAt(0);
                  ((y === "utf8" && T < 128) || y === "latin1") && (i = T);
                }
              } else typeof i == "number" ? (i = i & 255) : typeof i == "boolean" && (i = Number(i));
              if (s < 0 || this.length < s || this.length < p) throw new RangeError("Out of range index");
              if (p <= s) return this;
              (s = s >>> 0), (p = p === void 0 ? this.length : p >>> 0), i || (i = 0);
              let R;
              if (typeof i == "number") for (R = s; R < p; ++R) this[R] = i;
              else {
                const T = O.isBuffer(i) ? i : O.from(i, y),
                  D = T.length;
                if (D === 0) throw new TypeError('The value "' + i + '" is invalid for argument "value"');
                for (R = 0; R < p - s; ++R) this[R + s] = T[R % D];
              }
              return this;
            });
          const ut = {};
          function ct(m, i, s) {
            ut[m] = class extends s {
              constructor() {
                super(),
                  Object.defineProperty(this, "message", { value: i.apply(this, arguments), writable: !0, configurable: !0 }),
                  (this.name = `${this.name} [${m}]`),
                  this.stack,
                  delete this.name;
              }
              get code() {
                return m;
              }
              set code(y) {
                Object.defineProperty(this, "code", { configurable: !0, enumerable: !0, value: y, writable: !0 });
              }
              toString() {
                return `${this.name} [${m}]: ${this.message}`;
              }
            };
          }
          ct(
            "ERR_BUFFER_OUT_OF_BOUNDS",
            function (m) {
              return m ? `${m} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
            },
            RangeError,
          ),
            ct(
              "ERR_INVALID_ARG_TYPE",
              function (m, i) {
                return `The "${m}" argument must be of type number. Received type ${typeof i}`;
              },
              TypeError,
            ),
            ct(
              "ERR_OUT_OF_RANGE",
              function (m, i, s) {
                let p = `The value of "${m}" is out of range.`,
                  y = s;
                return (
                  Number.isInteger(s) && Math.abs(s) > 2 ** 32
                    ? (y = et(String(s)))
                    : typeof s == "bigint" &&
                      ((y = String(s)), (s > BigInt(2) ** BigInt(32) || s < -(BigInt(2) ** BigInt(32))) && (y = et(y)), (y += "n")),
                  (p += ` It must be ${i}. Received ${y}`),
                  p
                );
              },
              RangeError,
            );
          function et(m) {
            let i = "",
              s = m.length;
            const p = m[0] === "-" ? 1 : 0;
            for (; s >= p + 4; s -= 3) i = `_${m.slice(s - 3, s)}${i}`;
            return `${m.slice(0, s)}${i}`;
          }
          function Lr(m, i, s) {
            gt(i, "offset"), (m[i] === void 0 || m[i + s] === void 0) && jt(i, m.length - (s + 1));
          }
          function mt(m, i, s, p, y, R) {
            if (m > s || m < i) {
              const T = typeof i == "bigint" ? "n" : "";
              let D;
              throw (
                (i === 0 || i === BigInt(0)
                  ? (D = `>= 0${T} and < 2${T} ** ${(R + 1) * 8}${T}`)
                  : (D = `>= -(2${T} ** ${(R + 1) * 8 - 1}${T}) and < 2 ** ${(R + 1) * 8 - 1}${T}`),
                new ut.ERR_OUT_OF_RANGE("value", D, m))
              );
            }
            Lr(p, y, R);
          }
          function gt(m, i) {
            if (typeof m != "number") throw new ut.ERR_INVALID_ARG_TYPE(i, "number", m);
          }
          function jt(m, i, s) {
            throw Math.floor(m) !== m
              ? (gt(m, s), new ut.ERR_OUT_OF_RANGE("offset", "an integer", m))
              : i < 0
                ? new ut.ERR_BUFFER_OUT_OF_BOUNDS()
                : new ut.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${i}`, m);
          }
          const jr = /[^+/0-9A-Za-z-_]/g;
          function Hr(m) {
            if (((m = m.split("=")[0]), (m = m.trim().replace(jr, "")), m.length < 2)) return "";
            for (; m.length % 4 !== 0; ) m = m + "=";
            return m;
          }
          function hr(m, i) {
            i = i || 1 / 0;
            let s;
            const p = m.length;
            let y = null;
            const R = [];
            for (let T = 0; T < p; ++T) {
              if (((s = m.charCodeAt(T)), s > 55295 && s < 57344)) {
                if (!y) {
                  if (s > 56319) {
                    (i -= 3) > -1 && R.push(239, 191, 189);
                    continue;
                  } else if (T + 1 === p) {
                    (i -= 3) > -1 && R.push(239, 191, 189);
                    continue;
                  }
                  y = s;
                  continue;
                }
                if (s < 56320) {
                  (i -= 3) > -1 && R.push(239, 191, 189), (y = s);
                  continue;
                }
                s = (((y - 55296) << 10) | (s - 56320)) + 65536;
              } else y && (i -= 3) > -1 && R.push(239, 191, 189);
              if (((y = null), s < 128)) {
                if ((i -= 1) < 0) break;
                R.push(s);
              } else if (s < 2048) {
                if ((i -= 2) < 0) break;
                R.push((s >> 6) | 192, (s & 63) | 128);
              } else if (s < 65536) {
                if ((i -= 3) < 0) break;
                R.push((s >> 12) | 224, ((s >> 6) & 63) | 128, (s & 63) | 128);
              } else if (s < 1114112) {
                if ((i -= 4) < 0) break;
                R.push((s >> 18) | 240, ((s >> 12) & 63) | 128, ((s >> 6) & 63) | 128, (s & 63) | 128);
              } else throw new Error("Invalid code point");
            }
            return R;
          }
          function Xr(m) {
            const i = [];
            for (let s = 0; s < m.length; ++s) i.push(m.charCodeAt(s) & 255);
            return i;
          }
          function Wr(m, i) {
            let s, p, y;
            const R = [];
            for (let T = 0; T < m.length && !((i -= 2) < 0); ++T) (s = m.charCodeAt(T)), (p = s >> 8), (y = s % 256), R.push(y), R.push(p);
            return R;
          }
          function Br(m) {
            return f.toByteArray(Hr(m));
          }
          function tr(m, i, s, p) {
            let y;
            for (y = 0; y < p && !(y + s >= i.length || y >= m.length); ++y) i[y + s] = m[y];
            return y;
          }
          function ft(m, i) {
            return m instanceof i || (m != null && m.constructor != null && m.constructor.name != null && m.constructor.name === i.name);
          }
          function xt(m) {
            return m !== m;
          }
          const Kr = (function () {
            const m = "0123456789abcdef",
              i = new Array(256);
            for (let s = 0; s < 16; ++s) {
              const p = s * 16;
              for (let y = 0; y < 16; ++y) i[p + y] = m[s] + m[y];
            }
            return i;
          })();
          function pt(m) {
            return typeof BigInt > "u" ? Jr : m;
          }
          function Jr() {
            throw new Error("BigInt not supported");
          }
        })($r)),
      $r
    );
  }
  var P_ = O_();
  const y_ = { PredictorFactory: Pn };
  (window.Buffer = P_.Buffer),
    (Q.PredictorFactory = Pn),
    (Q.default = y_),
    Object.defineProperties(Q, { __esModule: { value: !0 }, [Symbol.toStringTag]: { value: "Module" } });
});
