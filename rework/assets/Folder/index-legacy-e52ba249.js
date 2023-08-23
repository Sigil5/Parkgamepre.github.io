!(function () {
  function e() {
    "use strict";
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ e = function () {
      return t;
    };
    var t = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      a =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value;
        },
      i = "function" == typeof Symbol ? Symbol : {},
      o = i.iterator || "@@iterator",
      l = i.asyncIterator || "@@asyncIterator",
      c = i.toStringTag || "@@toStringTag";
    function u(e, t, n) {
      return (
        Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }),
        e[t]
      );
    }
    try {
      u({}, "");
    } catch (P) {
      u = function (e, t, n) {
        return (e[t] = n);
      };
    }
    function p(e, t, n, r) {
      var i = t && t.prototype instanceof m ? t : m,
        o = Object.create(i.prototype),
        s = new R(r || []);
      return a(o, "_invoke", { value: T(e, n, s) }), o;
    }
    function d(e, t, n) {
      try {
        return { type: "normal", arg: e.call(t, n) };
      } catch (P) {
        return { type: "throw", arg: P };
      }
    }
    t.wrap = p;
    var g = {};
    function m() {}
    function h() {}
    function y() {}
    var f = {};
    u(f, o, function () {
      return this;
    });
    var b = Object.getPrototypeOf,
      w = b && b(b(A([])));
    w && w !== n && r.call(w, o) && (f = w);
    var v = (y.prototype = m.prototype = Object.create(f));
    function k(e) {
      ["next", "throw", "return"].forEach(function (t) {
        u(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function S(e, t) {
      function n(a, i, o, l) {
        var c = d(e[a], e, i);
        if ("throw" !== c.type) {
          var u = c.arg,
            p = u.value;
          return p && "object" == s(p) && r.call(p, "__await")
            ? t.resolve(p.__await).then(
                function (e) {
                  n("next", e, o, l);
                },
                function (e) {
                  n("throw", e, o, l);
                }
              )
            : t.resolve(p).then(
                function (e) {
                  (u.value = e), o(u);
                },
                function (e) {
                  return n("throw", e, o, l);
                }
              );
        }
        l(c.arg);
      }
      var i;
      a(this, "_invoke", {
        value: function (e, r) {
          function a() {
            return new t(function (t, a) {
              n(e, r, t, a);
            });
          }
          return (i = i ? i.then(a, a) : a());
        }
      });
    }
    function T(e, t, n) {
      var r = "suspendedStart";
      return function (a, i) {
        if ("executing" === r) throw new Error("Generator is already running");
        if ("completed" === r) {
          if ("throw" === a) throw i;
          return I();
        }
        for (n.method = a, n.arg = i; ; ) {
          var o = n.delegate;
          if (o) {
            var s = O(o, n);
            if (s) {
              if (s === g) continue;
              return s;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;
          else if ("throw" === n.method) {
            if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          r = "executing";
          var l = d(e, t, n);
          if ("normal" === l.type) {
            if (((r = n.done ? "completed" : "suspendedYield"), l.arg === g))
              continue;
            return { value: l.arg, done: n.done };
          }
          "throw" === l.type &&
            ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
        }
      };
    }
    function O(e, t) {
      var n = t.method,
        r = e.iterator[n];
      if (void 0 === r)
        return (
          (t.delegate = null),
          ("throw" === n &&
            e.iterator.return &&
            ((t.method = "return"),
            (t.arg = void 0),
            O(e, t),
            "throw" === t.method)) ||
            ("return" !== n &&
              ((t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide a '" + n + "' method"
              )))),
          g
        );
      var a = d(r, e.iterator, t.arg);
      if ("throw" === a.type)
        return (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), g;
      var i = a.arg;
      return i
        ? i.done
          ? ((t[e.resultName] = i.value),
            (t.next = e.nextLoc),
            "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
            (t.delegate = null),
            g)
          : i
        : ((t.method = "throw"),
          (t.arg = new TypeError("iterator result is not an object")),
          (t.delegate = null),
          g);
    }
    function x(e) {
      var t = { tryLoc: e[0] };
      1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t);
    }
    function L(e) {
      var t = e.completion || {};
      (t.type = "normal"), delete t.arg, (e.completion = t);
    }
    function R(e) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        e.forEach(x, this),
        this.reset(!0);
    }
    function A(e) {
      if (e) {
        var t = e[o];
        if (t) return t.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var n = -1,
            a = function t() {
              for (; ++n < e.length; )
                if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
              return (t.value = void 0), (t.done = !0), t;
            };
          return (a.next = a);
        }
      }
      return { next: I };
    }
    function I() {
      return { value: void 0, done: !0 };
    }
    return (
      (h.prototype = y),
      a(v, "constructor", { value: y, configurable: !0 }),
      a(y, "constructor", { value: h, configurable: !0 }),
      (h.displayName = u(y, c, "GeneratorFunction")),
      (t.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;
        return (
          !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
        );
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, y)
            : ((e.__proto__ = y), u(e, c, "GeneratorFunction")),
          (e.prototype = Object.create(v)),
          e
        );
      }),
      (t.awrap = function (e) {
        return { __await: e };
      }),
      k(S.prototype),
      u(S.prototype, l, function () {
        return this;
      }),
      (t.AsyncIterator = S),
      (t.async = function (e, n, r, a, i) {
        void 0 === i && (i = Promise);
        var o = new S(p(e, n, r, a), i);
        return t.isGeneratorFunction(n)
          ? o
          : o.next().then(function (e) {
              return e.done ? e.value : o.next();
            });
      }),
      k(v),
      u(v, c, "Generator"),
      u(v, o, function () {
        return this;
      }),
      u(v, "toString", function () {
        return "[object Generator]";
      }),
      (t.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var r in t) n.push(r);
        return (
          n.reverse(),
          function e() {
            for (; n.length; ) {
              var r = n.pop();
              if (r in t) return (e.value = r), (e.done = !1), e;
            }
            return (e.done = !0), e;
          }
        );
      }),
      (t.values = A),
      (R.prototype = {
        constructor: R,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = void 0),
            this.tryEntries.forEach(L),
            !e)
          )
            for (var t in this)
              "t" === t.charAt(0) &&
                r.call(this, t) &&
                !isNaN(+t.slice(1)) &&
                (this[t] = void 0);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var t = this;
          function n(n, r) {
            return (
              (o.type = "throw"),
              (o.arg = e),
              (t.next = n),
              r && ((t.method = "next"), (t.arg = void 0)),
              !!r
            );
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var i = this.tryEntries[a],
              o = i.completion;
            if ("root" === i.tryLoc) return n("end");
            if (i.tryLoc <= this.prev) {
              var s = r.call(i, "catchLoc"),
                l = r.call(i, "finallyLoc");
              if (s && l) {
                if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                if (this.prev < i.finallyLoc) return n(i.finallyLoc);
              } else if (s) {
                if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
              } else {
                if (!l)
                  throw new Error("try statement without catch or finally");
                if (this.prev < i.finallyLoc) return n(i.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var a = this.tryEntries[n];
            if (
              a.tryLoc <= this.prev &&
              r.call(a, "finallyLoc") &&
              this.prev < a.finallyLoc
            ) {
              var i = a;
              break;
            }
          }
          i &&
            ("break" === e || "continue" === e) &&
            i.tryLoc <= t &&
            t <= i.finallyLoc &&
            (i = null);
          var o = i ? i.completion : {};
          return (
            (o.type = e),
            (o.arg = t),
            i
              ? ((this.method = "next"), (this.next = i.finallyLoc), g)
              : this.complete(o)
          );
        },
        complete: function (e, t) {
          if ("throw" === e.type) throw e.arg;
          return (
            "break" === e.type || "continue" === e.type
              ? (this.next = e.arg)
              : "return" === e.type
              ? ((this.rval = this.arg = e.arg),
                (this.method = "return"),
                (this.next = "end"))
              : "normal" === e.type && t && (this.next = t),
            g
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e)
              return this.complete(n.completion, n.afterLoc), L(n), g;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
              var r = n.completion;
              if ("throw" === r.type) {
                var a = r.arg;
                L(n);
              }
              return a;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (e, t, n) {
          return (
            (this.delegate = { iterator: A(e), resultName: t, nextLoc: n }),
            "next" === this.method && (this.arg = void 0),
            g
          );
        }
      }),
      t
    );
  }
  function t(e, t, n, r, a, i, o) {
    try {
      var s = e[i](o),
        l = s.value;
    } catch (c) {
      return void n(c);
    }
    s.done ? t(l) : Promise.resolve(l).then(r, a);
  }
  function n(e) {
    return function () {
      var n = this,
        r = arguments;
      return new Promise(function (a, i) {
        var o = e.apply(n, r);
        function s(e) {
          t(o, a, i, s, l, "next", e);
        }
        function l(e) {
          t(o, a, i, s, l, "throw", e);
        }
        s(void 0);
      });
    };
  }
  function r(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var r,
            a,
            i,
            o,
            s = [],
            l = !0,
            c = !1;
          try {
            if (((i = (n = n.call(e)).next), 0 === t)) {
              if (Object(n) !== n) return;
              l = !1;
            } else
              for (
                ;
                !(l = (r = i.call(n)).done) &&
                (s.push(r.value), s.length !== t);
                l = !0
              );
          } catch (u) {
            (c = !0), (a = u);
          } finally {
            try {
              if (!l && null != n.return && ((o = n.return()), Object(o) !== o))
                return;
            } finally {
              if (c) throw a;
            }
          }
          return s;
        }
      })(e, t) ||
      c(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function a(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(
          e,
          ((a = r.key),
          (i = void 0),
          (i = (function (e, t) {
            if ("object" !== s(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== s(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(a, "string")),
          "symbol" === s(i) ? i : String(i)),
          r
        );
    }
    var a, i;
  }
  function o(e, t, n) {
    return (
      t && i(e.prototype, t),
      n && i(e, n),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function s(e) {
    return (
      (s =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      s(e)
    );
  }
  function l(e, t) {
    var n =
      ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (!n) {
      if (
        Array.isArray(e) ||
        (n = c(e)) ||
        (t && e && "number" == typeof e.length)
      ) {
        n && (e = n);
        var r = 0,
          a = function () {};
        return {
          s: a,
          n: function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          },
          e: function (e) {
            throw e;
          },
          f: a
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var i,
      o = !0,
      s = !1;
    return {
      s: function () {
        n = n.call(e);
      },
      n: function () {
        var e = n.next();
        return (o = e.done), e;
      },
      e: function (e) {
        (s = !0), (i = e);
      },
      f: function () {
        try {
          o || null == n.return || n.return();
        } finally {
          if (s) throw i;
        }
      }
    };
  }
  function c(e, t) {
    if (e) {
      if ("string" == typeof e) return u(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return (
        "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n
          ? Array.from(e)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? u(e, t)
          : void 0
      );
    }
  }
  function u(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  System.register(["./vendor-legacy-079ae5d4.js"], function (t, i) {
    "use strict";
    var c,
      u,
      p,
      d,
      g,
      m,
      h,
      y,
      f,
      b,
      w,
      v,
      k,
      S,
      T,
      O,
      x,
      L,
      R,
      A,
      I,
      P,
      C,
      M,
      j,
      N,
      B,
      W,
      E,
      _,
      D,
      H,
      V,
      G,
      F,
      q,
      U = document.createElement("style");
    return (
      (U.textContent =
        ".top-bar[data-v-fa6c6037]{display:flex;flex-direction:row;background-color:#1b1c1d;height:2.5rem;justify-content:space-between;align-items:center}.top-bar .logo[data-v-fa6c6037]{width:6rem}.top-bar .account[data-v-fa6c6037]{display:flex;flex-direction:row;align-items:center;margin-right:.5rem}.top-bar .account .weekly-award-btn[data-v-fa6c6037]{height:1.9rem;background-color:#d07206;border:.1rem solid #f1b167;border-radius:.7rem;text-align:center;text-shadow:1px 1px 4px #000000;margin-right:.5rem;padding:0 .4rem}.top-bar .account .weekly-award-btn[data-v-fa6c6037]:active{background-color:#f68606}.top-bar .account .weekly-award-btn .label[data-v-fa6c6037]{line-height:.7rem;font-size:.7rem;color:#fff}.top-bar .account .weekly-award-btn .currency[data-v-fa6c6037]{line-height:1rem;font-size:1rem;color:#ff0;white-space:nowrap}.top-bar .account .gold-icon[data-v-fa6c6037]{width:1.5rem;height:auto}.top-bar .account .balance[data-v-fa6c6037]{margin-left:.5rem;color:#28a909;font-size:1.2rem}.top-bar .account .settings-icon[data-v-fa6c6037]{margin-left:.5rem;width:1.5rem;height:auto;filter:invert(40%)}.flew-away-multiplier[data-v-dbe3b3db]{height:1.5rem;line-height:1.5rem;background-color:#0a0a0a;border-radius:1rem;padding:0 .5rem;font-size:.9rem;text-align:center}.color-2[data-v-dbe3b3db]{color:#34b4ff}.color-2-10[data-v-dbe3b3db]{color:#913ef8}.color-10[data-v-dbe3b3db]{color:#c017b4}.history-result[data-v-5ef7429c]{padding:.3rem;display:flex;flex-direction:row;align-items:center;overflow:visible}.flight-stage[data-v-c74a8080]{min-height:20rem;border:solid .1rem #202020;border-radius:1rem;display:flex;flex-direction:column;justify-content:center;align-items:center;white-space:nowrap;overflow:visible}.flight-stage .flight-scene[data-v-c74a8080]{height:100%;width:100%;border-radius:1rem;position:absolute}.flight-stage .chip-in[data-v-c74a8010]{display:flex;flex-direction:column;align-items:center;font-size:1.5rem;font-weight:500}.flight-stage .chip-in .chip-in-propeller[data-v-c74a8080]{height:5rem;width:5rem;animation:rotate-c74a8080 1.2s linear infinite;margin-bottom:.5rem}@keyframes rotate-c74a8080{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(180deg)}75%{transform:rotate(270deg)}to{transform:rotate(360deg)}}.flight-stage .flying[data-v-c74a8080]{font-size:4rem;font-weight:700}.flight-stage .end-round[data-v-c74a8080]{display:flex;flex-direction:column;justify-content:center}.flight-stage .end-round .end-round-title[data-v-c74a8080]{font-size:1.5rem;text-align:center;font-weight:700}.flight-stage .end-round .end-round-cash-out[data-v-c74a8080]{font-size:4rem;color:#d0021b;font-weight:700}progress[data-v-c74a8080]{margin-top:1rem;height:.4rem;width:12rem;border-radius:5px;background-color:#eee}progress[data-v-c74a8080]::-webkit-progress-bar{background-color:gray;border-radius:5px;height:.4rem}progress[data-v-c74a8080]::-webkit-progress-value{border-radius:5px;background-color:#d0021b;height:.4rem}.nav-tabs[data-v-0f08a808]{display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#141516;border-radius:.75rem;padding:.15rem}.nav-tabs .nav-tab-btn[data-v-0f08a808]{min-width:5rem;height:1.5rem;line-height:1.5rem;color:#9ea0a3;font-size:.8rem;text-align:center;border-radius:.75rem;padding:0 .3rem}.nav-tabs .nav-tab-btn-active[data-v-0f08a808]{color:#fff;background-color:#2c2d30}.nav-tabs-disabled[data-v-0f08a808]{filter:brightness(40%)}.e-switch[data-v-c3f7db72]{height:1.3rem;width:2.6rem;background-color:#1b1c1d;border:.1rem solid #848486;border-radius:.65rem;display:flex;flex-direction:column;justify-content:center}.e-switch .e-switch-ball[data-v-c3f7db72]{height:.9rem;width:.9rem;border-radius:.45rem;border:2px solid #ffffff;background-color:#eee;margin-left:.1rem}.e-switch .e-switch-ball-checked[data-v-c3f7db72]{margin-left:1.45rem}.e-switch-checked[data-v-c3f7db72]{background-color:#229607;border:.1rem solid #5aa947}.bet-control-active[data-v-efc1c1f6]{border:1px solid red}.bet-control[data-v-efc1c1f6]{display:flex;flex-direction:column;align-items:center;background-color:#1b1c1d;border-radius:.5rem}.bet-control .bet-control-other[data-v-efc1c1f6]{display:flex;flex-direction:row;position:absolute;right:.5rem;top:.5rem}.bet-control .bet-control-other .bet-control-other-add[data-v-efc1c1f6]{height:1.5rem;width:1.5rem;border:1px solid #549d05;background-color:#427f00;border-radius:.6rem;text-align:center}.bet-control .bet-control-other .bet-control-other-add[data-v-efc1c1f6]:active{background-color:#6ac506}.bet-control .bet-control-other .bet-control-other-add .bet-control-other-add-icon[data-v-efc1c1f6]{height:.85rem;width:.85rem}.bet-control .bet-control-other .bet-control-other-sub[data-v-efc1c1f6]{height:1.5rem;width:1.5rem;border:1px solid #3a3939;background-color:#3a3939;border-radius:.6rem;text-align:center}.bet-control .bet-control-other .bet-control-other-sub[data-v-efc1c1f6]:active{filter:invert(20%)}.bet-control .bet-control-other .bet-control-other-sub .bet-control-other-sub-icon[data-v-efc1c1f6]{height:.85rem;width:.85rem;filter:invert(40%)}.bet-control .tab-view[data-v-efc1c1f6]{padding:.5rem;width:100%;display:flex;flex-direction:column}.bet-control .bet-panel[data-v-efc1c1f6]{display:flex;flex-direction:row}.bet-control .bet-panel .bet-panel-chip[data-v-efc1c1f6]{display:flex;flex-direction:column;align-items:center}.bet-control .bet-panel .bet-panel-chip .bet-panel-chip-display[data-v-efc1c1f6]{background-color:#080808;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 .5rem;border-radius:1rem;height:2rem;width:11rem}.bet-control .bet-panel .bet-panel-chip .bet-panel-chip-display .icon[data-v-efc1c1f6]{height:1.4rem;width:1.4rem;filter:invert(20%)}.bet-control .bet-panel .bet-panel-chip .bet-panel-chip-display .icon-disable[data-v-efc1c1f6]{filter:invert(80%);pointer-events:none}.bet-control .bet-panel .bet-panel-chip .bet-panel-chip-display .bet-panel-chip-display-input[data-v-efc1c1f6]{width:7rem;background-color:#080809;color:#fff;border:none;text-align:center;font-size:1.1rem}.bet-control .bet-panel .bet-panel-chip .bet-panel-chip-display .bet-panel-chip-display-input[data-v-efc1c1f6]:disabled{color:#35373a}.bet-control .bet-panel .bet-panel-chip .bet-panel-chip-select[data-v-efc1c1f6]{display:flex;flex-wrap:wrap;width:12rem}.bet-control .bet-panel .bet-panel-chip .bet-panel-chip-select .bet-panel-chip-select-item[data-v-efc1c1f6]{border-radius:.5rem;border:none;background-color:#131415;height:1.3rem;width:3.5rem;text-align:center;line-height:1.3rem;margin:.2rem .2rem 0;color:gray;font-size:.8rem}.bet-control .bet-panel .bet-panel-chip .bet-panel-chip-select .bet-panel-chip-select-item[data-v-efc1c1f6]:disabled{color:#35373a}.bet-control .bet-panel .bet-panel-buttons[data-v-efc1c1f6]{width:100%}.bet-control .bet-panel .bet-panel-buttons .bet-panel-btn[data-v-efc1c1f6]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:1rem;color:#fff}.bet-control .bet-panel .bet-panel-buttons .bet-panel-btn-bet[data-v-efc1c1f6]{background-color:#28a909;border:solid .1rem #b2f2a3}.bet-control .bet-panel .bet-panel-buttons .bet-panel-btn-bet[data-v-efc1c1f6]:active{background-color:#c70303;border:solid .1rem #d06b6b}.bet-control .bet-panel .bet-panel-buttons .bet-panel-btn-bet-disable[data-v-efc1c1f6]{background-color:#898a8d;border:solid .1rem #b1b3b7;pointer-events:none}.bet-control .bet-panel .bet-panel-buttons .bet-panel-btn-cash-out[data-v-efc1c1f6]{background-color:#d07206;border:solid .1rem #ee9834}.bet-control .bet-panel .bet-panel-buttons .bet-panel-btn-cash-out[data-v-efc1c1f6]:active{background-color:#ee9c3e;border:solid .1rem #f1af63}.bet-control .bet-panel .bet-panel-buttons .bet-panel-btn-title[data-v-efc1c1f6]{font-size:1.2rem;line-height:1.4rem}.bet-control .bet-panel .bet-panel-buttons .bet-panel-btn-value[data-v-efc1c1f6]{font-size:1.5rem;line-height:1.5rem}.bet-control .bet-panel .bet-panel-buttons .bet-panel-btn-cancel[data-v-efc1c1f6]{height:100%;background-color:#cb011a;border:solid .1rem #ec263e}.bet-control .bet-panel .bet-panel-buttons .bet-panel-btn-cancel[data-v-efc1c1f6]:active{background-color:#ec2c44;border:solid .1rem #ec5366}.bet-control .bet-panel .bet-panel-buttons .btn-cancel[data-v-efc1c1f6]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center}.bet-control .bet-panel .bet-panel-buttons .btn-cancel .btn-cancel-title[data-v-efc1c1f6]{white-space:nowrap;font-size:.8rem;color:#9ea0a3;margin-bottom:.3rem}.bet-control .bet-panel .mask[data-v-efc1c1f6]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#898a8d;border-radius:1rem;opacity:.2}.bet-control .separator[data-v-efc1c1f6]{background-color:#171819;height:2px;width:100%}.bet-control .auto-panel[data-v-efc1c1f6]{display:flex;flex-direction:row;align-items:center;white-space:nowrap}.bet-control .auto-panel .auto-panel-btn[data-v-efc1c1f6]{margin-left:1rem;font-weight:500;color:#fff;font-size:.8rem;border-radius:1rem;width:30%;text-align:center;background-color:#1d7aca;border:1px solid #5193d2}.bet-control .auto-panel .auto-panel-btn-stop[data-v-efc1c1f6]{background-color:#cb011a;border:1px solid #d55263}.bet-control .auto-panel .auto-panel-text[data-v-efc1c1f6]{margin-left:1rem;color:#9ea0a3;font-size:.8rem;text-align:right}.bet-control .auto-panel .auto-panel-cash-out-input[data-v-efc1c1f6]{margin-left:.3rem;width:5.5rem;background-color:#080809;border-radius:1rem;color:#fff;border:none;text-align:center;font-size:1.1rem}.bet-control .auto-panel .auto-panel-cash-out-input[data-v-efc1c1f6]:disabled{color:#35373a}.bet-controls[data-v-8cddc115]{width:100%}.history-panel[data-v-7be45172]{border-radius:1rem;background-color:#262830;position:absolute;top:.1rem}.history-panel .history-panel-title[data-v-7be45172]{border-radius:1rem 1rem 0 0;height:2rem;line-height:2rem;background-color:#1f2128;text-align:center;font-size:.8rem}.history-panel .history-panel-content[data-v-7be45172]{display:flex;flex-wrap:wrap;padding:.3rem 0 0 .3rem}.history-expand-button[data-v-d2f5dc3d]{border:solid .1rem #3a3939;border-radius:1rem;background-color:#252528;display:flex;flex-direction:row;align-items:center;justify-content:center;height:1.5rem;width:3rem}.history-expand-button .history-expand-button-time[data-v-d2f5dc3d]{margin-left:.4rem;height:.8rem;width:.8rem}.history-expand-button .history-expand-button-bottom[data-v-d2f5dc3d]{margin:0 .4rem;height:.8rem;width:.8rem}.history-expand-button .history-expand-button-top[data-v-d2f5dc3d]{margin:0 .4rem;height:.8rem;width:.8rem;transform:rotate(180deg)}.game-scene[data-v-7d3dcfbe]{padding:0 .3rem}.splash[data-v-bd45bd83]{height:100vh;background-color:#181818;display:flex;flex-direction:column;align-items:center}.splash .logo[data-v-bd45bd83]{margin-top:30vh;width:35%}.splash .logo-txt[data-v-bd45bd83]{margin-top:2vh;width:30%}.splash .tips[data-v-bd45bd83]{margin-top:5vh;color:#fff;font-size:3vh}.info-boards[data-v-4540e2ae]{border-radius:.5rem;background-color:#1b1c1d;min-height:40rem;display:flex;flex-direction:column;align-items:center}.info-boards .tab-view[data-v-4540e2ae]{padding:.5rem;width:100%;display:flex;flex-direction:column}.info-boards .all-bets[data-v-4540e2ae]{display:flex;flex-direction:row;line-height:1rem;align-items:center}.info-boards .all-bets .all-bets-info[data-v-4540e2ae]{width:40%}.info-boards .all-bets .all-bets-flew-away[data-v-4540e2ae]{width:15%;display:flex;flex-direction:column;justify-content:center;align-items:center}.info-boards .all-bets .all-bets-prev[data-v-4540e2ae]{display:flex;flex-direction:row;height:1.3rem;align-items:center;border-radius:.65rem;border:solid .1rem #414148;background-color:#252528;padding:0 .4rem;white-space:nowrap;position:absolute;right:0}.info-boards .all-bets .all-bets-prev .all-bets-prev-icon[data-v-4540e2ae]{margin-right:.2rem;height:1rem;width:1rem}.info-boards .all-bets .all-bets-prev .all-bets-prev-text[data-v-4540e2ae]{color:#9ea0a3;font-size:.8rem;line-height:.8rem}.info-boards .all-bets .all-bets-prev[data-v-4540e2ae]:hover,.info-boards .all-bets .all-bets-prev-active[data-v-4540e2ae]{background-color:#600;border:solid .1rem #c70303}.info-boards .chip-in-list[data-v-4540e2ae]{display:flex;flex-direction:column;width:100%;font-size:.9rem}.info-boards .chip-in-list .chip-in-list-header[data-v-4540e2ae]{display:flex;flex-direction:row;width:100%;color:#898a8d}.info-boards .chip-in-list .chip-in-list-header .chip-in-list-header-user[data-v-4540e2ae]{width:20%}.info-boards .chip-in-list .chip-in-list-header .chip-in-list-header-bet[data-v-4540e2ae]{width:25%;text-align:right}.info-boards .chip-in-list .chip-in-list-header .chip-in-list-header-multiplier[data-v-4540e2ae]{width:25%}.info-boards .chip-in-list .chip-in-list-header .chip-in-list-header-cash-out[data-v-4540e2ae]{width:30%;text-align:right}.info-boards .chip-in-list .chip-in-item[data-v-4540e2ae]{display:flex;flex-direction:row;font-size:1rem;background-color:#101112;border-radius:.7rem;height:2rem;margin-bottom:.2rem;align-items:center}.info-boards .chip-in-list .chip-in-item .chip-in-item-user[data-v-4540e2ae]{width:20%;color:#898a8d}.info-boards .chip-in-list .chip-in-item .chip-in-item-bet[data-v-4540e2ae]{width:25%;text-align:right}.info-boards .chip-in-list .chip-in-item .chip-in-item-multiplier[data-v-4540e2ae]{width:25%}.info-boards .chip-in-list .chip-in-item .chip-in-item-cash-out[data-v-4540e2ae]{width:30%;text-align:right}.info-boards .chip-in-list .chip-in-item-active[data-v-4540e2ae]{background-color:#123405;border:solid 1px #46e50a}.info-boards .slicer[data-v-4540e2ae]{margin-top:.4rem;width:100%;height:1px;background-color:#000}.info-boards .rank-content[data-v-4540e2ae]{display:flex;flex-direction:column;align-items:center;justify-content:center}.info-boards .rank-content .rank-type-list[data-v-4540e2ae]{display:flex;flex-direction:row;justify-content:center;align-items:center}.info-boards .rank-content .rank-type-list .rank-type-item[data-v-4540e2ae]{padding:0 .3rem;font-size:.9rem}.info-boards .rank-content .rank-type-list .rank-type-item-active[data-v-4540e2ae]{border-radius:1rem;border:solid 1px red}.info-boards .rank-content .rank-content-list[data-v-4540e2ae]{display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%}.win-message[data-v-ff1c6f77]{display:flex;flex-direction:column;align-items:center}.win-message .win-item[data-v-ff1c6f77]{margin:.4rem 0;height:3.5rem;background-color:#123405;border:1px solid #206409;border-radius:1.75rem;padding:.3rem 1rem;display:flex;flex-direction:row;align-items:center}.win-message .win-item .win-item-multiplier[data-v-ff1c6f77]{display:flex;flex-direction:column;justify-content:center;align-items:center}.win-message .win-item .win-item-multiplier .win-item-multiplier-title[data-v-ff1c6f77]{font-size:.8rem;line-height:.8rem;color:#7b857b}.win-message .win-item .win-item-multiplier .win-item-multiplier-value[data-v-ff1c6f77]{margin-top:.3rem;font-size:1.2rem;line-height:1.2rem;font-weight:500}.win-message .win-item .win-item-award[data-v-ff1c6f77]{margin-left:.5rem;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#4eaf11;height:3rem;border-radius:1.5rem;padding:0 1rem;min-width:7rem;text-shadow:2px 2px 4px #000000}.win-message .win-item .win-item-award .win-item-award-title[data-v-ff1c6f77]{font-size:1rem;line-height:1rem;font-weight:700}.win-message .win-item .win-item-award .win-item-award-value[data-v-ff1c6f77]{margin-top:.1rem;font-size:1.2rem;line-height:1.2rem;font-weight:500}.auto-play-options .mask[data-v-fbf2b205]{position:fixed;top:0;height:100%;width:100%;background-color:#3a3939;opacity:.4}.auto-play-options .auto-play-content[data-v-fbf2b205]{width:96%;max-width:30rem;position:fixed;top:1rem;left:2%;background-color:#1b1c1d;border-radius:.5rem}.auto-play-options .auto-play-content .auto-play-header[data-v-fbf2b205]{border-radius:.5rem .5rem 0 0;background-color:#2c2d30;height:2rem;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.auto-play-options .auto-play-content .auto-play-header .auto-play-header-title[data-v-fbf2b205]{margin-left:.5rem}.auto-play-options .auto-play-content .auto-play-header .auto-play-header-close[data-v-fbf2b205]{margin-right:.5rem;height:1rem;width:1rem}.auto-play-options .auto-play-content .auto-play-main[data-v-fbf2b205]{padding:.4rem .2rem .1rem;font-size:.8rem}.auto-play-options .auto-play-content .auto-play-main .auto-play-main-error[data-v-fbf2b205]{display:flex;flex-direction:row;align-items:center;height:3rem;background-color:#b3021b;border-radius:.5rem;margin-bottom:.3rem;justify-content:space-between;font-size:1rem}.auto-play-options .auto-play-content .auto-play-main .auto-play-main-error .auto-play-main-error-message[data-v-fbf2b205]{margin-left:1.5rem}.auto-play-options .auto-play-content .auto-play-main .auto-play-main-error .auto-play-main-error-close[data-v-fbf2b205]{margin-right:.5rem;height:1rem;width:1rem}.auto-play-options .auto-play-content .auto-play-main .auto-play-main-number[data-v-fbf2b205]{display:flex;flex-direction:column;align-items:center;background-color:#2c2d30;border-radius:.5rem;margin-bottom:.3rem;padding:.5rem}.auto-play-options .auto-play-content .auto-play-main .auto-play-main-number .auto-play-main-number-title[data-v-fbf2b205]{font-size:1rem;color:#fff}.auto-play-options .auto-play-content .auto-play-main .auto-play-main-number .auto-play-main-number-list[data-v-fbf2b205]{display:flex;flex-direction:row;margin-top:.3rem}.auto-play-options .auto-play-content .auto-play-main .auto-play-main-number .auto-play-main-number-list .auto-play-main-number-item[data-v-fbf2b205]{font-size:1rem;color:#6b6c6e;height:1.8rem;line-height:1.7rem;width:3.5rem;background-color:#252528;border-radius:1.2rem;border:.1rem solid #3f3f41;text-align:center;margin-right:.5rem}.auto-play-options .auto-play-content .auto-play-main .auto-play-main-number .auto-play-main-number-list .auto-play-main-number-item-active[data-v-fbf2b205]{background-color:#545b62;border:.1rem solid #567a3a;color:#fff}.auto-play-options .auto-play-content .auto-play-main .auto-play-main-item[data-v-fbf2b205]{display:flex;flex-direction:row;background-color:#2c2d30;border-radius:.5rem;margin-bottom:.3rem;padding:1rem .2rem;align-items:center}.auto-play-options .auto-play-content .auto-play-main .auto-play-main-item .auto-play-main-item-title[data-v-fbf2b205]{margin-left:.5rem;color:#6b6c6e}.auto-play-options .auto-play-content .auto-play-main .auto-play-main-item .auto-play-main-item-title-active[data-v-fbf2b205]{color:#fff}.auto-play-options .auto-play-content .auto-play-main .auto-play-main-item .auto-play-main-item-value[data-v-fbf2b205]{margin-left:auto;background-color:#080808;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 .5rem;border-radius:1rem;height:1.8rem;width:9rem}.auto-play-options .auto-play-content .auto-play-main .auto-play-main-item .auto-play-main-item-value .icon[data-v-fbf2b205]{height:1rem;width:1rem;filter:invert(20%)}.auto-play-options .auto-play-content .auto-play-main .auto-play-main-item .auto-play-main-item-value .icon-disable[data-v-fbf2b205]{filter:invert(80%);pointer-events:none}.auto-play-options .auto-play-content .auto-play-main .auto-play-main-item .auto-play-main-item-value .auto-play-main-item-value-input[data-v-fbf2b205]{width:6rem;background-color:#080809;color:#fff;border:none;text-align:center;font-size:.9rem}.auto-play-options .auto-play-content .auto-play-main .auto-play-main-item .auto-play-main-item-value .auto-play-main-item-value-input[data-v-fbf2b205]:disabled{color:#35373a}.auto-play-options .auto-play-content .auto-play-footer[data-v-fbf2b205]{border-radius:0 0 .5rem .5rem;background-color:#2c2d30;height:3rem;display:flex;flex-direction:row;align-items:center;justify-content:center}.auto-play-options .auto-play-content .auto-play-footer .auto-play-btn-reset[data-v-fbf2b205]{height:1.4rem;width:6rem;background-color:#d07206;border:.1rem solid #f8ca95;border-radius:.7rem;line-height:1.3rem;font-size:1rem;text-align:center;text-shadow:1px 1px 4px #000000}.auto-play-options .auto-play-content .auto-play-footer .auto-play-btn-reset[data-v-fbf2b205]:active{background-color:#f68606}.auto-play-options .auto-play-content .auto-play-footer .auto-play-btn-start[data-v-fbf2b205]{margin-left:.5rem;height:1.8rem;width:10rem;background-color:#28a909;border:.1rem solid #8aef72;border-radius:.9rem;line-height:1.7rem;font-size:1.2rem;text-align:center;text-shadow:1px 1px 4px #000000}.auto-play-options .auto-play-content .auto-play-footer .auto-play-btn-start[data-v-fbf2b205]:active{background-color:#4fef28}.e-popup[data-v-9a351ce9]{position:fixed;top:0;left:0;width:100vw;display:flex;justify-content:center}.e-popup .mask[data-v-9a351ce9]{position:fixed;top:0;height:100%;width:100%;background-color:#3a3939}.weekly-award[data-v-b58d37ab]{background-color:#1b1c1d;border-radius:.5rem;margin-top:1rem;width:22rem}.weekly-award .weekly-award-header[data-v-b58d37ab]{border-radius:.5rem .5rem 0 0;background-color:#2c2d30;height:2rem;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.weekly-award .weekly-award-header .weekly-award-header-title[data-v-b58d37ab]{margin-left:.5rem;width:100%;text-align:center}.weekly-award .weekly-award-header .weekly-award-header-close[data-v-b58d37ab]{margin-right:.5rem;height:1rem;width:1rem}.weekly-award .weekly-award-content[data-v-b58d37ab]{width:100%;padding:.4rem .2rem .1rem;font-size:.8rem;display:flex;flex-direction:column;align-items:center}.weekly-award .weekly-award-content .weekly-award-content-tab[data-v-b58d37ab]{padding:.5rem;width:100%;height:28rem}.weekly-award .weekly-award-content .weekly-award-content-tab .info-text[data-v-b58d37ab]{font-size:.9rem;margin-top:1rem}.weekly-award .ranking-list[data-v-b58d37ab]{margin-top:1rem;display:flex;flex-direction:column;width:100%;height:12rem;font-size:.9rem;overflow:auto}.weekly-award .ranking-list .ranking-list-header[data-v-b58d37ab]{display:flex;flex-direction:row;width:100%;color:#898a8d}.weekly-award .ranking-list .ranking-list-header .ranking-list-header-rank[data-v-b58d37ab]{width:15%;text-align:center}.weekly-award .ranking-list .ranking-list-header .ranking-list-header-bonus[data-v-b58d37ab]{width:30%;text-align:right}.weekly-award .ranking-list .ranking-list-header .ranking-list-header-user[data-v-b58d37ab]{width:20%;text-align:right}.weekly-award .ranking-list .ranking-list-header .ranking-list-header-score[data-v-b58d37ab]{width:35%;text-align:right}.weekly-award .ranking-list .ranking-item[data-v-b58d37ab]{display:flex;flex-direction:row;font-size:1rem;background-color:#101112;border-radius:.7rem;height:2rem;margin-bottom:.2rem;align-items:center}.weekly-award .ranking-list .ranking-item .ranking-item-rank[data-v-b58d37ab]{width:15%;text-align:center}.weekly-award .ranking-list .ranking-item .ranking-item-bonus[data-v-b58d37ab]{width:30%;text-align:right;color:#f7b500}.weekly-award .ranking-list .ranking-item .ranking-item-user[data-v-b58d37ab]{width:20%;text-align:right}.weekly-award .ranking-list .ranking-item .ranking-item-score[data-v-b58d37ab]{width:35%;text-align:right}.weekly-award .ranking-list .ranking-item-active[data-v-b58d37ab]{background-color:#123405;border:solid 1px #46e50a}.weekly-award .weekly-award-footer[data-v-b58d37ab]{border-radius:0 0 .5rem .5rem;background-color:#2c2d30;height:3rem;display:flex;flex-direction:row;align-items:center;justify-content:center;padding:.4rem .2rem .1rem}.weekly-award .weekly-award-footer .weekly-award-btn-reset[data-v-b58d37ab]{height:1.4rem;width:6rem;background-color:#d07206;border:.1rem solid #f8ca95;border-radius:.7rem;line-height:1.3rem;font-size:1rem;text-align:center;text-shadow:1px 1px 4px #000000}.weekly-award .weekly-award-footer .weekly-award-btn-reset[data-v-b58d37ab]:active{background-color:#f68606}.weekly-award .weekly-award-footer .weekly-award-btn-get-bonus[data-v-b58d37ab]{margin-left:.5rem;height:1.8rem;width:10rem;background-color:#28a909;border:.1rem solid #8aef72;border-radius:.9rem;line-height:1.7rem;font-size:1.2rem;text-align:center;text-shadow:1px 1px 4px #000000}.weekly-award .weekly-award-footer .weekly-award-btn-get-bonus[data-v-b58d37ab]:active{background-color:#4fef28}.weekly-award .weekly-award-footer .weekly-award-btn-get-bonus-disabled[data-v-b58d37ab]{background-color:#3a3939;border:.1rem solid #656363;color:#656363;pointer-events:none}.message-box[data-v-35c01e22]{background-color:#1b1c1d;border-radius:.5rem;border:.1rem solid #535557;margin-top:40vh;width:15rem;display:flex;flex-direction:column;align-items:center}.message-box .message-box-text[data-v-35c01e22]{font-size:1.2rem;text-align:center;padding:.5rem}.message-box .message-box-close[data-v-35c01e22]{margin:.5rem;height:1.4rem;width:6rem;background-color:#d07206;border:.1rem solid #f8ca95;border-radius:.7rem;line-height:1.3rem;font-size:1rem;text-align:center;text-shadow:1px 1px 4px #000000}.message-box .message-box-close[data-v-35c01e22]:active{background-color:#f68606}.reconn-view[data-v-f63d8e37]{display:flex;flex-direction:column;align-items:center}.reconn-view .reconn-view-text[data-v-f63d8e37]{margin-top:40vh;font-size:1.2rem;text-align:center;padding:.5rem}.reconn-view .reconn-view-refresh[data-v-f63d8e37]{margin:1rem;height:5rem;width:5rem;animation:rotate-f63d8e37 1.2s linear infinite}@keyframes rotate-f63d8e37{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(180deg)}75%{transform:rotate(270deg)}to{transform:rotate(360deg)}}.settings[data-v-36a1718b]{margin-top:2.5rem;margin-left:calc(100vw - 15rem);width:12rem;border-radius:.5rem}.settings .settings-header[data-v-36a1718b]{border-radius:.5rem .5rem 0 0;background-color:#2c2d30;height:2rem;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.settings .settings-header .settings-header-title[data-v-36a1718b]{margin-left:.5rem;width:100%;text-align:left}.settings .settings-header .settings-header-close[data-v-36a1718b]{margin-right:.5rem;height:1rem;width:1rem}.settings .settings-content[data-v-36a1718b]{width:100%;font-size:.8rem;display:flex;flex-direction:column;align-items:center;background-color:#0a0a0a}.settings .settings-content .spliter[data-v-36a1718b]{width:100%;height:1px;background-color:#2c2d30}.settings .settings-content .settings-item[data-v-36a1718b]{padding:.1rem .5rem;display:flex;flex-direction:row;align-items:center;height:2rem;width:100%}.settings .settings-content .settings-item .settings-item-icon[data-v-36a1718b]{height:1.2rem;width:1.2rem;filter:invert(40%)}.settings .settings-content .settings-item .settings-item-label[data-v-36a1718b]{margin-left:.5rem}.settings .settings-footer[data-v-36a1718b]{border-radius:0 0 .5rem .5rem;background-color:#2c2d30;height:2.3rem;display:flex;flex-direction:row;align-items:center;justify-content:center}.settings .settings-footer .settings-footer-home-icon[data-v-36a1718b]{height:1.2rem;width:1.2rem}.settings .settings-footer .settings-footer-home[data-v-36a1718b]{font-size:1rem;line-height:1rem;margin-left:.5rem;color:#9ea0a3}.broadcast[data-v-be1baa27]{white-space:nowrap;position:absolute;top:2.2rem;left:1.7rem;overflow:hidden;width:calc(100% - 3rem)}.broadcast .broadcast-item-list[data-v-be1baa27]{width:auto;display:flex;flex-direction:row}.broadcast .broadcast-item-list .broadcast-item[data-v-be1baa27]{width:auto}.game-rules[data-v-8d58e2fb]{background-color:#1b1c1d;border-radius:.5rem;margin-top:1rem;width:22rem}.game-rules .game-rules-header[data-v-8d58e2fb]{border-radius:.5rem .5rem 0 0;background-color:#2c2d30;height:2rem;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.game-rules .game-rules-header .game-rules-header-title[data-v-8d58e2fb]{margin-left:.5rem;width:100%;text-align:center}.game-rules .game-rules-header .game-rules-header-close[data-v-8d58e2fb]{margin-right:.5rem;height:1rem;width:1rem}.game-rules .game-rules-content[data-v-8d58e2fb]{width:100%;height:70vh;padding:1rem;font-size:1rem;display:flex;flex-direction:column;overflow-y:scroll}.game-rules .game-rules-content .how-to-play[data-v-8d58e2fb]{margin-top:1rem;display:flex;flex-direction:column;padding:.5rem}.game-rules .game-rules-content .how-to-play .how-to-play-img[data-v-8d58e2fb]{scale:1}.game-rules .game-rules-content .how-to-play .how-to-play-txt[data-v-8d58e2fb]{margin-top:.5rem}.game-rules .game-rules-content .remember[data-v-8d58e2fb]{margin-top:.5rem;font-size:.8rem;color:#9ea0a3}.game-rules .game-rules-content .game-limits[data-v-8d58e2fb]{margin-top:1rem;font-size:1rem}.game-rules .game-rules-content .game-limits .game-limits-value[data-v-8d58e2fb]{margin-top:.5rem;font-size:.8rem}.page .win-message[data-v-6981be9d]{width:100%;position:fixed;top:0}:root{--vt-c-white: #ffffff;--vt-c-white-soft: #f8f8f8;--vt-c-white-mute: #f2f2f2;--vt-c-black: #181818;--vt-c-black-soft: #222222;--vt-c-black-mute: #282828;--vt-c-indigo: #2c3e50;--vt-c-divider-light-1: rgba(60, 60, 60, .29);--vt-c-divider-light-2: rgba(60, 60, 60, .12);--vt-c-divider-dark-1: rgba(84, 84, 84, .65);--vt-c-divider-dark-2: rgba(84, 84, 84, .48);--vt-c-text-light-1: var(--vt-c-indigo);--vt-c-text-light-2: rgba(60, 60, 60, .66);--vt-c-text-dark-1: var(--vt-c-white);--vt-c-text-dark-2: rgba(235, 235, 235, .64)}:root{--color-background: var(--vt-c-white);--color-background-soft: var(--vt-c-white-soft);--color-background-mute: var(--vt-c-white-mute);--color-border: var(--vt-c-divider-light-2);--color-border-hover: var(--vt-c-divider-light-1);--color-heading: var(--vt-c-text-light-1);--color-text: var(--vt-c-text-light-1);--section-gap: 160px}@media (prefers-color-scheme: dark){:root{--color-background: var(--vt-c-black);--color-background-soft: var(--vt-c-black-soft);--color-background-mute: var(--vt-c-black-mute);--color-border: var(--vt-c-divider-dark-2);--color-border-hover: var(--vt-c-divider-dark-1);--color-heading: var(--vt-c-text-dark-1);--color-text: var(--vt-c-text-dark-2)}}*,*:before,*:after{box-sizing:border-box;margin:0;position:relative;font-weight:400}body{min-height:100vh;color:var(--color-text);background:var(--color-background);transition:color .5s,background-color .5s;line-height:1.6;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:15px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.debug-border{border:1px solid red!important}.debug-border-green{border:1px solid green!important}#app{font-size:1rem;color:#fff;background-color:#0e0e0e}html{font-size:16px}\n"),
      document.head.appendChild(U),
      {
        setters: [
          function (e) {
            (c = e.c),
              (u = e.m),
              (p = e.d),
              (d = e.o),
              (g = e.a),
              (m = e.b),
              (h = e.t),
              (y = e.e),
              (f = e.p),
              (b = e.f),
              (w = e.n),
              (v = e.r),
              (k = e.F),
              (S = e.g),
              (T = e.h),
              (O = e.A),
              (x = e.G),
              (L = e.T),
              (R = e.i),
              (A = e.j),
              (I = e.k),
              (P = e.C),
              (C = e.S),
              (M = e.l),
              (j = e.q),
              (N = e.s),
              (B = e.w),
              (W = e.v),
              (E = e.u),
              (_ = e.x),
              (D = e.y),
              (H = e.z),
              (V = e.P),
              (G = e.M),
              (F = e.B),
              (q = e.D);
          }
        ],
        execute: function () {
          var t = c({
              locale: "en-us",
              fallbackLocale: "en-us",
              warnHtmlInMessage: "off",
              messages: {
                "en-us": {
                  FlewAway: "FLEW AWAY!",
                  RoundHistory: "ROUND HISTORY",
                  AllBets: "All Bets",
                  MyBets: "My Bets",
                  Top: "Top",
                  PrevHand: "Previous Hand",
                  User: "User",
                  Bet: "Bet",
                  Multiplier: "X",
                  CashOut: "Cash Out",
                  Auto: "Auto",
                  Cancel: "Cancel",
                  WinInfo: "You have cashed out!",
                  Win: "Win",
                  AutoCashOut: "Auto Cash Out",
                  AutoPlay: "AUTO PLAY",
                  Stop: "stop",
                  Date: "Date",
                  AutoPlayOptions: {
                    Title: "Auto play options",
                    NumberOfRounds: "Number of Rounds:",
                    StopIfCashDecreasesBy: "Stop if cash decreases by",
                    StopIfCashIncreasesBy: "Stop if cash increases by",
                    StopIfSingleWinExceeds: "Stop if single win exceeds",
                    Reset: "Reset",
                    Start: "Start",
                    ErrorSetNumberOfRounds: "Please, set number of rounds",
                    ErrorStopPoint:
                      "Please, specify decrease or exceed stop point",
                    ErrorCanNotZero: "Can‘t set 0.00 as stop point"
                  },
                  Ranking: "Ranking",
                  Rank: {
                    HugeWins: "HUGE WINS",
                    BiggestWins: "BIGGEST WINS",
                    Multipliers: "MULTIPLIERS",
                    Day: "Day",
                    Week: "Week",
                    Month: "Month",
                    Year: "Year"
                  },
                  WeeklyAward: {
                    Title: "Weekly Rewards",
                    CurrentWeek: "Current Week",
                    LastWeek: "Last Week",
                    Rank: "Rank",
                    Bonus: "Bonus",
                    User: "User",
                    Score: "Score",
                    SettlementTime: "Settlement time: {time}",
                    CurrentWeekInfo:
                      'The more cash out points you accumulate before the settlement time expires, the higher your ranking will be. If you enter the top <span style="color: #4fef28;font-weight: bold">{numberOfRewards}</span>, you will get the corresponding ranking reward.',
                    CurrentWeekYouTop:
                      'Your current rank is <span style="color: #4fef28;font-weight: bold">{youTop}</span>, it has been included in the reward list and continues to maintain.',
                    CurrentWeekYouNoTop:
                      'Your current rank is <span style="color: #4fef28;font-weight: bold">{youTop}</span>, not on the reward list. Continue to work hard.',
                    LastWeekInfo: "Last week's winners",
                    LastWeekStatusNoReward:
                      "Not in the Reward Ranking:<br>You are not in the list, keep up the good work.",
                    LastWeekStatusPleaseClaim:
                      'Entering the reward ranking has not been claimed:<br>Congratulations on your ranking <span style="color: #4fef28;font-weight: bold">{top}</span>, please claim the reward.',
                    LastWeekStatusClaimed:
                      'The entry reward ranking has been claimed:<br>Congratulations on your ranking <span style="color: #4fef28;font-weight: bold">{top}</span>, the reward has been claimed.',
                    GetBonus: "Get Bonus"
                  },
                  Close: "Close",
                  Connecting: "CONNECTING...",
                  Settings: {
                    Sound: "Sound",
                    Animation: "Animation",
                    GameRules: "Game Rules",
                    Home: "Home"
                  },
                  GameRules: {
                    Title: "GAME RULES",
                    Intro:
                      "AviatorPlus is a new generation of iGaming. The gameplay is very simple. You can win many times in a few seconds!",
                    HowToPlay: "HOW TO PLAY?",
                    Play1:
                      '1. <span style="color: #ff0000;font-weight: bold">BET</span> before the plane take-off',
                    Play2:
                      '2. <span style="color: #ff0000;font-weight: bold">WATCH</span> During the flying phase of the plane, your reward increase',
                    Play3:
                      '3. <span style="color: #ff0000;font-weight: bold">CASH OUT</span> before the plane flies away and you will win X times the reward',
                    Remember:
                      "Remember, if you don't cash out before the plane flies away, your bet will be lost. Risk and Winnings are under your control!",
                    GameLimits: "GAME LIMITS",
                    MaxBet:
                      'Maximum bet: <span style="color: #4fef28;font-weight: bold">{maxBet}</span>',
                    MaxWin:
                      'Maximum win for one bet: <span style="color: #4fef28;font-weight: bold">{maxWin}</span>'
                  },
                  MaxAnteLimit: "Exceeded Maximum Stake"
                }
              }
            }),
            U = 2e3,
            J = 1e4,
            z = { EndRound: "end-round" };
          function $(e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
              n = window.location.search.slice(1).match(t);
            return null != n ? decodeURIComponent(n[2]) : null;
          }
          function Y(e, t, n) {
            var r = (e / n || 0).toFixed(t).split(".");
            return (
              (r[0] = r[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")), r.join(".")
            );
          }
          var X = u.Reader,
            Q = u.Writer,
            K = u.util,
            Z = u.roots.default || (u.roots.default = {}),
            ee = (Z.game = (function () {
              var e,
                t,
                n = {};
              return (
                (n.MsgType =
                  ((e = {}),
                  ((t = Object.create(e))[(e[0] = "Msg_Base")] = 0),
                  (t[(e[1e3] = "Login_Request")] = 1e3),
                  (t[(e[1001] = "Login_Response")] = 1001),
                  (t[(e[1002] = "Ping")] = 1002),
                  (t[(e[1003] = "Pong")] = 1003),
                  (t[(e[1004] = "Jack_Pot_Pool_Request")] = 1004),
                  (t[(e[1005] = "Jack_Pot_Pool_Response")] = 1005),
                  (t[(e[1011] = "Jack_Pot_Award_Message_Response")] = 1011),
                  (t[(e[1013] = "Tip_Message_Response")] = 1013),
                  (t[(e[1014] = "Balance_Request")] = 1014),
                  (t[(e[1015] = "Balance_Response")] = 1015),
                  (t[(e[1016] = "Weekly_Top_Reward_Request")] = 1016),
                  (t[(e[1017] = "Weekly_Top_Reward_Response")] = 1017),
                  (t[(e[1019] = "Jack_Pot_Award_Response")] = 1019),
                  (t[(e[1020] = "Rank_List_Request")] = 1020),
                  (t[(e[1021] = "Rank_List_Response")] = 1021),
                  (t[(e[1023] = "Logout_Response")] = 1023),
                  (t[(e[1025] = "Personal_Loss_Limit_Response")] = 1025),
                  (t[(e[1026] = "Group_Chip_In_Request")] = 1026),
                  (t[(e[1027] = "Group_Chip_In_Response")] = 1027),
                  (t[(e[1029] = "Group_Game_Status_Sync_Response")] = 1029),
                  (t[(e[1030] = "Take_Weekly_Top_Reward_Request")] = 1030),
                  (t[(e[1031] = "Take_Weekly_Top_Reward_Response")] = 1031),
                  (t[(e[1033] = "Broadcast_Chip_In_Response")] = 1033),
                  (t[(e[1034] = "Group_Cash_Out_Request")] = 1034),
                  (t[(e[1035] = "Group_Cash_Out_Response")] = 1035),
                  (t[(e[1037] = "Broadcast_Cash_Out_Response")] = 1037),
                  (t[
                    (e[1039] = "Broadcast_Flying_Multiplier_Response")
                  ] = 1039),
                  (t[(e[1040] = "Broadcast_List_Request")] = 1040),
                  (t[(e[1041] = "Broadcast_List_Response")] = 1041),
                  (t[(e[1043] = "Broadcast_Response")] = 1043),
                  t)),
                (n.LoginRequest = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.uid = ""),
                    (e.prototype.channel = ""),
                    (e.prototype.token = ""),
                    (e.prototype.currencyType = ""),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.uid &&
                          Object.hasOwnProperty.call(e, "uid") &&
                          t.uint32(10).string(e.uid),
                        null != e.channel &&
                          Object.hasOwnProperty.call(e, "channel") &&
                          t.uint32(18).string(e.channel),
                        null != e.token &&
                          Object.hasOwnProperty.call(e, "token") &&
                          t.uint32(26).string(e.token),
                        null != e.currencyType &&
                          Object.hasOwnProperty.call(e, "currencyType") &&
                          t.uint32(34).string(e.currencyType),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.LoginRequest();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            r.uid = e.string();
                            break;
                          case 2:
                            r.channel = e.string();
                            break;
                          case 3:
                            r.token = e.string();
                            break;
                          case 4:
                            r.currencyType = e.string();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.uid &&
                          e.hasOwnProperty("uid") &&
                          !K.isString(e.uid)
                        ? "uid: string expected"
                        : null != e.channel &&
                          e.hasOwnProperty("channel") &&
                          !K.isString(e.channel)
                        ? "channel: string expected"
                        : null != e.token &&
                          e.hasOwnProperty("token") &&
                          !K.isString(e.token)
                        ? "token: string expected"
                        : null != e.currencyType &&
                          e.hasOwnProperty("currencyType") &&
                          !K.isString(e.currencyType)
                        ? "currencyType: string expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.LoginRequest) return e;
                      var t = new Z.game.LoginRequest();
                      return (
                        null != e.uid && (t.uid = String(e.uid)),
                        null != e.channel && (t.channel = String(e.channel)),
                        null != e.token && (t.token = String(e.token)),
                        null != e.currencyType &&
                          (t.currencyType = String(e.currencyType)),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      return (
                        t.defaults &&
                          ((n.uid = ""),
                          (n.channel = ""),
                          (n.token = ""),
                          (n.currencyType = "")),
                        null != e.uid &&
                          e.hasOwnProperty("uid") &&
                          (n.uid = e.uid),
                        null != e.channel &&
                          e.hasOwnProperty("channel") &&
                          (n.channel = e.channel),
                        null != e.token &&
                          e.hasOwnProperty("token") &&
                          (n.token = e.token),
                        null != e.currencyType &&
                          e.hasOwnProperty("currencyType") &&
                          (n.currencyType = e.currencyType),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.LoginResponse = (function () {
                  function e(e) {
                    if (
                      ((this.currencyChipInSteps = []),
                      (this.allChipInList = []),
                      (this.multiplierHistories = []),
                      e)
                    )
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.uid = ""),
                    (e.prototype.result = 0),
                    (e.prototype.nickname = ""),
                    (e.prototype.balance = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.currencyType = ""),
                    (e.prototype.currencyRate = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.currencyChipInSteps = K.emptyArray),
                    (e.prototype.lobbyUrl = ""),
                    (e.prototype.depositUrl = ""),
                    (e.prototype.syncStatusResponse = null),
                    (e.prototype.allChipInList = K.emptyArray),
                    (e.prototype.maxAnteLimit = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.maxAwardLimit = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.multiplierHistories = K.emptyArray),
                    (e.prototype.lastWeekStatus = 0),
                    (e.prototype.newPlayer = !1),
                    (e.prototype.weeklyTopEnable = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      if (
                        (t || (t = Q.create()),
                        null != e.uid &&
                          Object.hasOwnProperty.call(e, "uid") &&
                          t.uint32(10).string(e.uid),
                        null != e.result &&
                          Object.hasOwnProperty.call(e, "result") &&
                          t.uint32(16).int32(e.result),
                        null != e.nickname &&
                          Object.hasOwnProperty.call(e, "nickname") &&
                          t.uint32(26).string(e.nickname),
                        null != e.balance &&
                          Object.hasOwnProperty.call(e, "balance") &&
                          t.uint32(32).int64(e.balance),
                        null != e.currencyType &&
                          Object.hasOwnProperty.call(e, "currencyType") &&
                          t.uint32(42).string(e.currencyType),
                        null != e.currencyRate &&
                          Object.hasOwnProperty.call(e, "currencyRate") &&
                          t.uint32(48).int64(e.currencyRate),
                        null != e.currencyChipInSteps &&
                          e.currencyChipInSteps.length)
                      ) {
                        t.uint32(58).fork();
                        for (var n = 0; n < e.currencyChipInSteps.length; ++n)
                          t.int64(e.currencyChipInSteps[n]);
                        t.ldelim();
                      }
                      if (
                        (null != e.lobbyUrl &&
                          Object.hasOwnProperty.call(e, "lobbyUrl") &&
                          t.uint32(66).string(e.lobbyUrl),
                        null != e.depositUrl &&
                          Object.hasOwnProperty.call(e, "depositUrl") &&
                          t.uint32(74).string(e.depositUrl),
                        null != e.syncStatusResponse &&
                          Object.hasOwnProperty.call(e, "syncStatusResponse") &&
                          Z.game.GroupStatusSyncResponse.encode(
                            e.syncStatusResponse,
                            t.uint32(82).fork()
                          ).ldelim(),
                        null != e.allChipInList && e.allChipInList.length)
                      )
                        for (var r = 0; r < e.allChipInList.length; ++r)
                          Z.game.ChipInResult.encode(
                            e.allChipInList[r],
                            t.uint32(90).fork()
                          ).ldelim();
                      if (
                        (null != e.maxAnteLimit &&
                          Object.hasOwnProperty.call(e, "maxAnteLimit") &&
                          t.uint32(96).int64(e.maxAnteLimit),
                        null != e.maxAwardLimit &&
                          Object.hasOwnProperty.call(e, "maxAwardLimit") &&
                          t.uint32(104).int64(e.maxAwardLimit),
                        null != e.multiplierHistories &&
                          e.multiplierHistories.length)
                      )
                        for (var a = 0; a < e.multiplierHistories.length; ++a)
                          Z.game.MultiplierRecord.encode(
                            e.multiplierHistories[a],
                            t.uint32(114).fork()
                          ).ldelim();
                      return (
                        null != e.lastWeekStatus &&
                          Object.hasOwnProperty.call(e, "lastWeekStatus") &&
                          t.uint32(120).int32(e.lastWeekStatus),
                        null != e.newPlayer &&
                          Object.hasOwnProperty.call(e, "newPlayer") &&
                          t.uint32(128).bool(e.newPlayer),
                        null != e.weeklyTopEnable &&
                          Object.hasOwnProperty.call(e, "weeklyTopEnable") &&
                          t.uint32(136).int64(e.weeklyTopEnable),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.LoginResponse();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            r.uid = e.string();
                            break;
                          case 2:
                            r.result = e.int32();
                            break;
                          case 3:
                            r.nickname = e.string();
                            break;
                          case 4:
                            r.balance = e.int64();
                            break;
                          case 5:
                            r.currencyType = e.string();
                            break;
                          case 6:
                            r.currencyRate = e.int64();
                            break;
                          case 7:
                            if (
                              ((r.currencyChipInSteps &&
                                r.currencyChipInSteps.length) ||
                                (r.currencyChipInSteps = []),
                              2 == (7 & a))
                            )
                              for (var i = e.uint32() + e.pos; e.pos < i; )
                                r.currencyChipInSteps.push(e.int64());
                            else r.currencyChipInSteps.push(e.int64());
                            break;
                          case 8:
                            r.lobbyUrl = e.string();
                            break;
                          case 9:
                            r.depositUrl = e.string();
                            break;
                          case 10:
                            r.syncStatusResponse = Z.game.GroupStatusSyncResponse.decode(
                              e,
                              e.uint32()
                            );
                            break;
                          case 11:
                            (r.allChipInList && r.allChipInList.length) ||
                              (r.allChipInList = []),
                              r.allChipInList.push(
                                Z.game.ChipInResult.decode(e, e.uint32())
                              );
                            break;
                          case 12:
                            r.maxAnteLimit = e.int64();
                            break;
                          case 13:
                            r.maxAwardLimit = e.int64();
                            break;
                          case 14:
                            (r.multiplierHistories &&
                              r.multiplierHistories.length) ||
                              (r.multiplierHistories = []),
                              r.multiplierHistories.push(
                                Z.game.MultiplierRecord.decode(e, e.uint32())
                              );
                            break;
                          case 15:
                            r.lastWeekStatus = e.int32();
                            break;
                          case 16:
                            r.newPlayer = e.bool();
                            break;
                          case 17:
                            r.weeklyTopEnable = e.int64();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      if ("object" !== s(e) || null === e)
                        return "object expected";
                      if (
                        null != e.uid &&
                        e.hasOwnProperty("uid") &&
                        !K.isString(e.uid)
                      )
                        return "uid: string expected";
                      if (null != e.result && e.hasOwnProperty("result"))
                        switch (e.result) {
                          default:
                            return "result: enum value expected";
                          case 0:
                          case 1:
                        }
                      if (
                        null != e.nickname &&
                        e.hasOwnProperty("nickname") &&
                        !K.isString(e.nickname)
                      )
                        return "nickname: string expected";
                      if (
                        null != e.balance &&
                        e.hasOwnProperty("balance") &&
                        !(
                          K.isInteger(e.balance) ||
                          (e.balance &&
                            K.isInteger(e.balance.low) &&
                            K.isInteger(e.balance.high))
                        )
                      )
                        return "balance: integer|Long expected";
                      if (
                        null != e.currencyType &&
                        e.hasOwnProperty("currencyType") &&
                        !K.isString(e.currencyType)
                      )
                        return "currencyType: string expected";
                      if (
                        null != e.currencyRate &&
                        e.hasOwnProperty("currencyRate") &&
                        !(
                          K.isInteger(e.currencyRate) ||
                          (e.currencyRate &&
                            K.isInteger(e.currencyRate.low) &&
                            K.isInteger(e.currencyRate.high))
                        )
                      )
                        return "currencyRate: integer|Long expected";
                      if (
                        null != e.currencyChipInSteps &&
                        e.hasOwnProperty("currencyChipInSteps")
                      ) {
                        if (!Array.isArray(e.currencyChipInSteps))
                          return "currencyChipInSteps: array expected";
                        for (var t = 0; t < e.currencyChipInSteps.length; ++t)
                          if (
                            !(
                              K.isInteger(e.currencyChipInSteps[t]) ||
                              (e.currencyChipInSteps[t] &&
                                K.isInteger(e.currencyChipInSteps[t].low) &&
                                K.isInteger(e.currencyChipInSteps[t].high))
                            )
                          )
                            return "currencyChipInSteps: integer|Long[] expected";
                      }
                      if (
                        null != e.lobbyUrl &&
                        e.hasOwnProperty("lobbyUrl") &&
                        !K.isString(e.lobbyUrl)
                      )
                        return "lobbyUrl: string expected";
                      if (
                        null != e.depositUrl &&
                        e.hasOwnProperty("depositUrl") &&
                        !K.isString(e.depositUrl)
                      )
                        return "depositUrl: string expected";
                      if (
                        null != e.syncStatusResponse &&
                        e.hasOwnProperty("syncStatusResponse")
                      ) {
                        var n = Z.game.GroupStatusSyncResponse.verify(
                          e.syncStatusResponse
                        );
                        if (n) return "syncStatusResponse." + n;
                      }
                      if (
                        null != e.allChipInList &&
                        e.hasOwnProperty("allChipInList")
                      ) {
                        if (!Array.isArray(e.allChipInList))
                          return "allChipInList: array expected";
                        for (var r = 0; r < e.allChipInList.length; ++r) {
                          var a = Z.game.ChipInResult.verify(
                            e.allChipInList[r]
                          );
                          if (a) return "allChipInList." + a;
                        }
                      }
                      if (
                        null != e.maxAnteLimit &&
                        e.hasOwnProperty("maxAnteLimit") &&
                        !(
                          K.isInteger(e.maxAnteLimit) ||
                          (e.maxAnteLimit &&
                            K.isInteger(e.maxAnteLimit.low) &&
                            K.isInteger(e.maxAnteLimit.high))
                        )
                      )
                        return "maxAnteLimit: integer|Long expected";
                      if (
                        null != e.maxAwardLimit &&
                        e.hasOwnProperty("maxAwardLimit") &&
                        !(
                          K.isInteger(e.maxAwardLimit) ||
                          (e.maxAwardLimit &&
                            K.isInteger(e.maxAwardLimit.low) &&
                            K.isInteger(e.maxAwardLimit.high))
                        )
                      )
                        return "maxAwardLimit: integer|Long expected";
                      if (
                        null != e.multiplierHistories &&
                        e.hasOwnProperty("multiplierHistories")
                      ) {
                        if (!Array.isArray(e.multiplierHistories))
                          return "multiplierHistories: array expected";
                        for (var i = 0; i < e.multiplierHistories.length; ++i) {
                          var o = Z.game.MultiplierRecord.verify(
                            e.multiplierHistories[i]
                          );
                          if (o) return "multiplierHistories." + o;
                        }
                      }
                      return null != e.lastWeekStatus &&
                        e.hasOwnProperty("lastWeekStatus") &&
                        !K.isInteger(e.lastWeekStatus)
                        ? "lastWeekStatus: integer expected"
                        : null != e.newPlayer &&
                          e.hasOwnProperty("newPlayer") &&
                          "boolean" != typeof e.newPlayer
                        ? "newPlayer: boolean expected"
                        : null != e.weeklyTopEnable &&
                          e.hasOwnProperty("weeklyTopEnable") &&
                          !(
                            K.isInteger(e.weeklyTopEnable) ||
                            (e.weeklyTopEnable &&
                              K.isInteger(e.weeklyTopEnable.low) &&
                              K.isInteger(e.weeklyTopEnable.high))
                          )
                        ? "weeklyTopEnable: integer|Long expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.LoginResponse) return e;
                      var t = new Z.game.LoginResponse();
                      switch (
                        (null != e.uid && (t.uid = String(e.uid)), e.result)
                      ) {
                        case "SUCCESS":
                        case 0:
                          t.result = 0;
                          break;
                        case "FAIL":
                        case 1:
                          t.result = 1;
                      }
                      if (
                        (null != e.nickname &&
                          (t.nickname = String(e.nickname)),
                        null != e.balance &&
                          (K.Long
                            ? ((t.balance = K.Long.fromValue(
                                e.balance
                              )).unsigned = !1)
                            : "string" == typeof e.balance
                            ? (t.balance = parseInt(e.balance, 10))
                            : "number" == typeof e.balance
                            ? (t.balance = e.balance)
                            : "object" === s(e.balance) &&
                              (t.balance = new K.LongBits(
                                e.balance.low >>> 0,
                                e.balance.high >>> 0
                              ).toNumber())),
                        null != e.currencyType &&
                          (t.currencyType = String(e.currencyType)),
                        null != e.currencyRate &&
                          (K.Long
                            ? ((t.currencyRate = K.Long.fromValue(
                                e.currencyRate
                              )).unsigned = !1)
                            : "string" == typeof e.currencyRate
                            ? (t.currencyRate = parseInt(e.currencyRate, 10))
                            : "number" == typeof e.currencyRate
                            ? (t.currencyRate = e.currencyRate)
                            : "object" === s(e.currencyRate) &&
                              (t.currencyRate = new K.LongBits(
                                e.currencyRate.low >>> 0,
                                e.currencyRate.high >>> 0
                              ).toNumber())),
                        e.currencyChipInSteps)
                      ) {
                        if (!Array.isArray(e.currencyChipInSteps))
                          throw TypeError(
                            ".game.LoginResponse.currencyChipInSteps: array expected"
                          );
                        t.currencyChipInSteps = [];
                        for (var n = 0; n < e.currencyChipInSteps.length; ++n)
                          K.Long
                            ? ((t.currencyChipInSteps[n] = K.Long.fromValue(
                                e.currencyChipInSteps[n]
                              )).unsigned = !1)
                            : "string" == typeof e.currencyChipInSteps[n]
                            ? (t.currencyChipInSteps[n] = parseInt(
                                e.currencyChipInSteps[n],
                                10
                              ))
                            : "number" == typeof e.currencyChipInSteps[n]
                            ? (t.currencyChipInSteps[n] =
                                e.currencyChipInSteps[n])
                            : "object" === s(e.currencyChipInSteps[n]) &&
                              (t.currencyChipInSteps[n] = new K.LongBits(
                                e.currencyChipInSteps[n].low >>> 0,
                                e.currencyChipInSteps[n].high >>> 0
                              ).toNumber());
                      }
                      if (
                        (null != e.lobbyUrl &&
                          (t.lobbyUrl = String(e.lobbyUrl)),
                        null != e.depositUrl &&
                          (t.depositUrl = String(e.depositUrl)),
                        null != e.syncStatusResponse)
                      ) {
                        if ("object" !== s(e.syncStatusResponse))
                          throw TypeError(
                            ".game.LoginResponse.syncStatusResponse: object expected"
                          );
                        t.syncStatusResponse = Z.game.GroupStatusSyncResponse.fromObject(
                          e.syncStatusResponse
                        );
                      }
                      if (e.allChipInList) {
                        if (!Array.isArray(e.allChipInList))
                          throw TypeError(
                            ".game.LoginResponse.allChipInList: array expected"
                          );
                        t.allChipInList = [];
                        for (var r = 0; r < e.allChipInList.length; ++r) {
                          if ("object" !== s(e.allChipInList[r]))
                            throw TypeError(
                              ".game.LoginResponse.allChipInList: object expected"
                            );
                          t.allChipInList[r] = Z.game.ChipInResult.fromObject(
                            e.allChipInList[r]
                          );
                        }
                      }
                      if (
                        (null != e.maxAnteLimit &&
                          (K.Long
                            ? ((t.maxAnteLimit = K.Long.fromValue(
                                e.maxAnteLimit
                              )).unsigned = !1)
                            : "string" == typeof e.maxAnteLimit
                            ? (t.maxAnteLimit = parseInt(e.maxAnteLimit, 10))
                            : "number" == typeof e.maxAnteLimit
                            ? (t.maxAnteLimit = e.maxAnteLimit)
                            : "object" === s(e.maxAnteLimit) &&
                              (t.maxAnteLimit = new K.LongBits(
                                e.maxAnteLimit.low >>> 0,
                                e.maxAnteLimit.high >>> 0
                              ).toNumber())),
                        null != e.maxAwardLimit &&
                          (K.Long
                            ? ((t.maxAwardLimit = K.Long.fromValue(
                                e.maxAwardLimit
                              )).unsigned = !1)
                            : "string" == typeof e.maxAwardLimit
                            ? (t.maxAwardLimit = parseInt(e.maxAwardLimit, 10))
                            : "number" == typeof e.maxAwardLimit
                            ? (t.maxAwardLimit = e.maxAwardLimit)
                            : "object" === s(e.maxAwardLimit) &&
                              (t.maxAwardLimit = new K.LongBits(
                                e.maxAwardLimit.low >>> 0,
                                e.maxAwardLimit.high >>> 0
                              ).toNumber())),
                        e.multiplierHistories)
                      ) {
                        if (!Array.isArray(e.multiplierHistories))
                          throw TypeError(
                            ".game.LoginResponse.multiplierHistories: array expected"
                          );
                        t.multiplierHistories = [];
                        for (var a = 0; a < e.multiplierHistories.length; ++a) {
                          if ("object" !== s(e.multiplierHistories[a]))
                            throw TypeError(
                              ".game.LoginResponse.multiplierHistories: object expected"
                            );
                          t.multiplierHistories[
                            a
                          ] = Z.game.MultiplierRecord.fromObject(
                            e.multiplierHistories[a]
                          );
                        }
                      }
                      return (
                        null != e.lastWeekStatus &&
                          (t.lastWeekStatus = 0 | e.lastWeekStatus),
                        null != e.newPlayer &&
                          (t.newPlayer = Boolean(e.newPlayer)),
                        null != e.weeklyTopEnable &&
                          (K.Long
                            ? ((t.weeklyTopEnable = K.Long.fromValue(
                                e.weeklyTopEnable
                              )).unsigned = !1)
                            : "string" == typeof e.weeklyTopEnable
                            ? (t.weeklyTopEnable = parseInt(
                                e.weeklyTopEnable,
                                10
                              ))
                            : "number" == typeof e.weeklyTopEnable
                            ? (t.weeklyTopEnable = e.weeklyTopEnable)
                            : "object" === s(e.weeklyTopEnable) &&
                              (t.weeklyTopEnable = new K.LongBits(
                                e.weeklyTopEnable.low >>> 0,
                                e.weeklyTopEnable.high >>> 0
                              ).toNumber())),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (
                        ((t.arrays || t.defaults) &&
                          ((n.currencyChipInSteps = []),
                          (n.allChipInList = []),
                          (n.multiplierHistories = [])),
                        t.defaults)
                      ) {
                        if (
                          ((n.uid = ""),
                          (n.result = t.enums === String ? "SUCCESS" : 0),
                          (n.nickname = ""),
                          K.Long)
                        ) {
                          var r = new K.Long(0, 0, !1);
                          n.balance =
                            t.longs === String
                              ? r.toString()
                              : t.longs === Number
                              ? r.toNumber()
                              : r;
                        } else n.balance = t.longs === String ? "0" : 0;
                        if (((n.currencyType = ""), K.Long)) {
                          var a = new K.Long(0, 0, !1);
                          n.currencyRate =
                            t.longs === String
                              ? a.toString()
                              : t.longs === Number
                              ? a.toNumber()
                              : a;
                        } else n.currencyRate = t.longs === String ? "0" : 0;
                        if (
                          ((n.lobbyUrl = ""),
                          (n.depositUrl = ""),
                          (n.syncStatusResponse = null),
                          K.Long)
                        ) {
                          var i = new K.Long(0, 0, !1);
                          n.maxAnteLimit =
                            t.longs === String
                              ? i.toString()
                              : t.longs === Number
                              ? i.toNumber()
                              : i;
                        } else n.maxAnteLimit = t.longs === String ? "0" : 0;
                        if (K.Long) {
                          var o = new K.Long(0, 0, !1);
                          n.maxAwardLimit =
                            t.longs === String
                              ? o.toString()
                              : t.longs === Number
                              ? o.toNumber()
                              : o;
                        } else n.maxAwardLimit = t.longs === String ? "0" : 0;
                        if (
                          ((n.lastWeekStatus = 0), (n.newPlayer = !1), K.Long)
                        ) {
                          var s = new K.Long(0, 0, !1);
                          n.weeklyTopEnable =
                            t.longs === String
                              ? s.toString()
                              : t.longs === Number
                              ? s.toNumber()
                              : s;
                        } else n.weeklyTopEnable = t.longs === String ? "0" : 0;
                      }
                      if (
                        (null != e.uid &&
                          e.hasOwnProperty("uid") &&
                          (n.uid = e.uid),
                        null != e.result &&
                          e.hasOwnProperty("result") &&
                          (n.result =
                            t.enums === String
                              ? Z.game.LoginResponse.Result[e.result]
                              : e.result),
                        null != e.nickname &&
                          e.hasOwnProperty("nickname") &&
                          (n.nickname = e.nickname),
                        null != e.balance &&
                          e.hasOwnProperty("balance") &&
                          ("number" == typeof e.balance
                            ? (n.balance =
                                t.longs === String
                                  ? String(e.balance)
                                  : e.balance)
                            : (n.balance =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.balance)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.balance.low >>> 0,
                                      e.balance.high >>> 0
                                    ).toNumber()
                                  : e.balance)),
                        null != e.currencyType &&
                          e.hasOwnProperty("currencyType") &&
                          (n.currencyType = e.currencyType),
                        null != e.currencyRate &&
                          e.hasOwnProperty("currencyRate") &&
                          ("number" == typeof e.currencyRate
                            ? (n.currencyRate =
                                t.longs === String
                                  ? String(e.currencyRate)
                                  : e.currencyRate)
                            : (n.currencyRate =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(
                                      e.currencyRate
                                    )
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.currencyRate.low >>> 0,
                                      e.currencyRate.high >>> 0
                                    ).toNumber()
                                  : e.currencyRate)),
                        e.currencyChipInSteps && e.currencyChipInSteps.length)
                      ) {
                        n.currencyChipInSteps = [];
                        for (var l = 0; l < e.currencyChipInSteps.length; ++l)
                          "number" == typeof e.currencyChipInSteps[l]
                            ? (n.currencyChipInSteps[l] =
                                t.longs === String
                                  ? String(e.currencyChipInSteps[l])
                                  : e.currencyChipInSteps[l])
                            : (n.currencyChipInSteps[l] =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(
                                      e.currencyChipInSteps[l]
                                    )
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.currencyChipInSteps[l].low >>> 0,
                                      e.currencyChipInSteps[l].high >>> 0
                                    ).toNumber()
                                  : e.currencyChipInSteps[l]);
                      }
                      if (
                        (null != e.lobbyUrl &&
                          e.hasOwnProperty("lobbyUrl") &&
                          (n.lobbyUrl = e.lobbyUrl),
                        null != e.depositUrl &&
                          e.hasOwnProperty("depositUrl") &&
                          (n.depositUrl = e.depositUrl),
                        null != e.syncStatusResponse &&
                          e.hasOwnProperty("syncStatusResponse") &&
                          (n.syncStatusResponse = Z.game.GroupStatusSyncResponse.toObject(
                            e.syncStatusResponse,
                            t
                          )),
                        e.allChipInList && e.allChipInList.length)
                      ) {
                        n.allChipInList = [];
                        for (var c = 0; c < e.allChipInList.length; ++c)
                          n.allChipInList[c] = Z.game.ChipInResult.toObject(
                            e.allChipInList[c],
                            t
                          );
                      }
                      if (
                        (null != e.maxAnteLimit &&
                          e.hasOwnProperty("maxAnteLimit") &&
                          ("number" == typeof e.maxAnteLimit
                            ? (n.maxAnteLimit =
                                t.longs === String
                                  ? String(e.maxAnteLimit)
                                  : e.maxAnteLimit)
                            : (n.maxAnteLimit =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(
                                      e.maxAnteLimit
                                    )
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.maxAnteLimit.low >>> 0,
                                      e.maxAnteLimit.high >>> 0
                                    ).toNumber()
                                  : e.maxAnteLimit)),
                        null != e.maxAwardLimit &&
                          e.hasOwnProperty("maxAwardLimit") &&
                          ("number" == typeof e.maxAwardLimit
                            ? (n.maxAwardLimit =
                                t.longs === String
                                  ? String(e.maxAwardLimit)
                                  : e.maxAwardLimit)
                            : (n.maxAwardLimit =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(
                                      e.maxAwardLimit
                                    )
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.maxAwardLimit.low >>> 0,
                                      e.maxAwardLimit.high >>> 0
                                    ).toNumber()
                                  : e.maxAwardLimit)),
                        e.multiplierHistories && e.multiplierHistories.length)
                      ) {
                        n.multiplierHistories = [];
                        for (var u = 0; u < e.multiplierHistories.length; ++u)
                          n.multiplierHistories[
                            u
                          ] = Z.game.MultiplierRecord.toObject(
                            e.multiplierHistories[u],
                            t
                          );
                      }
                      return (
                        null != e.lastWeekStatus &&
                          e.hasOwnProperty("lastWeekStatus") &&
                          (n.lastWeekStatus = e.lastWeekStatus),
                        null != e.newPlayer &&
                          e.hasOwnProperty("newPlayer") &&
                          (n.newPlayer = e.newPlayer),
                        null != e.weeklyTopEnable &&
                          e.hasOwnProperty("weeklyTopEnable") &&
                          ("number" == typeof e.weeklyTopEnable
                            ? (n.weeklyTopEnable =
                                t.longs === String
                                  ? String(e.weeklyTopEnable)
                                  : e.weeklyTopEnable)
                            : (n.weeklyTopEnable =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(
                                      e.weeklyTopEnable
                                    )
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.weeklyTopEnable.low >>> 0,
                                      e.weeklyTopEnable.high >>> 0
                                    ).toNumber()
                                  : e.weeklyTopEnable)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    (e.Result = (function () {
                      var e = {},
                        t = Object.create(e);
                      return (
                        (t[(e[0] = "SUCCESS")] = 0), (t[(e[1] = "FAIL")] = 1), t
                      );
                    })()),
                    e
                  );
                })()),
                (n.MultiplierRecord = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.transactionId = ""),
                    (e.prototype.multiplier = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.transactionId &&
                          Object.hasOwnProperty.call(e, "transactionId") &&
                          t.uint32(10).string(e.transactionId),
                        null != e.multiplier &&
                          Object.hasOwnProperty.call(e, "multiplier") &&
                          t.uint32(16).int64(e.multiplier),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.MultiplierRecord();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            r.transactionId = e.string();
                            break;
                          case 2:
                            r.multiplier = e.int64();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.transactionId &&
                          e.hasOwnProperty("transactionId") &&
                          !K.isString(e.transactionId)
                        ? "transactionId: string expected"
                        : null != e.multiplier &&
                          e.hasOwnProperty("multiplier") &&
                          !(
                            K.isInteger(e.multiplier) ||
                            (e.multiplier &&
                              K.isInteger(e.multiplier.low) &&
                              K.isInteger(e.multiplier.high))
                          )
                        ? "multiplier: integer|Long expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.MultiplierRecord) return e;
                      var t = new Z.game.MultiplierRecord();
                      return (
                        null != e.transactionId &&
                          (t.transactionId = String(e.transactionId)),
                        null != e.multiplier &&
                          (K.Long
                            ? ((t.multiplier = K.Long.fromValue(
                                e.multiplier
                              )).unsigned = !1)
                            : "string" == typeof e.multiplier
                            ? (t.multiplier = parseInt(e.multiplier, 10))
                            : "number" == typeof e.multiplier
                            ? (t.multiplier = e.multiplier)
                            : "object" === s(e.multiplier) &&
                              (t.multiplier = new K.LongBits(
                                e.multiplier.low >>> 0,
                                e.multiplier.high >>> 0
                              ).toNumber())),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (t.defaults)
                        if (((n.transactionId = ""), K.Long)) {
                          var r = new K.Long(0, 0, !1);
                          n.multiplier =
                            t.longs === String
                              ? r.toString()
                              : t.longs === Number
                              ? r.toNumber()
                              : r;
                        } else n.multiplier = t.longs === String ? "0" : 0;
                      return (
                        null != e.transactionId &&
                          e.hasOwnProperty("transactionId") &&
                          (n.transactionId = e.transactionId),
                        null != e.multiplier &&
                          e.hasOwnProperty("multiplier") &&
                          ("number" == typeof e.multiplier
                            ? (n.multiplier =
                                t.longs === String
                                  ? String(e.multiplier)
                                  : e.multiplier)
                            : (n.multiplier =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.multiplier)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.multiplier.low >>> 0,
                                      e.multiplier.high >>> 0
                                    ).toNumber()
                                  : e.multiplier)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.PingRequest = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.timestamp = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.timestamp &&
                          Object.hasOwnProperty.call(e, "timestamp") &&
                          t.uint32(8).int64(e.timestamp),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.PingRequest();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        if (a >>> 3 == 1) r.timestamp = e.int64();
                        else e.skipType(7 & a);
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.timestamp &&
                          e.hasOwnProperty("timestamp") &&
                          !(
                            K.isInteger(e.timestamp) ||
                            (e.timestamp &&
                              K.isInteger(e.timestamp.low) &&
                              K.isInteger(e.timestamp.high))
                          )
                        ? "timestamp: integer|Long expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.PingRequest) return e;
                      var t = new Z.game.PingRequest();
                      return (
                        null != e.timestamp &&
                          (K.Long
                            ? ((t.timestamp = K.Long.fromValue(
                                e.timestamp
                              )).unsigned = !1)
                            : "string" == typeof e.timestamp
                            ? (t.timestamp = parseInt(e.timestamp, 10))
                            : "number" == typeof e.timestamp
                            ? (t.timestamp = e.timestamp)
                            : "object" === s(e.timestamp) &&
                              (t.timestamp = new K.LongBits(
                                e.timestamp.low >>> 0,
                                e.timestamp.high >>> 0
                              ).toNumber())),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (t.defaults)
                        if (K.Long) {
                          var r = new K.Long(0, 0, !1);
                          n.timestamp =
                            t.longs === String
                              ? r.toString()
                              : t.longs === Number
                              ? r.toNumber()
                              : r;
                        } else n.timestamp = t.longs === String ? "0" : 0;
                      return (
                        null != e.timestamp &&
                          e.hasOwnProperty("timestamp") &&
                          ("number" == typeof e.timestamp
                            ? (n.timestamp =
                                t.longs === String
                                  ? String(e.timestamp)
                                  : e.timestamp)
                            : (n.timestamp =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.timestamp)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.timestamp.low >>> 0,
                                      e.timestamp.high >>> 0
                                    ).toNumber()
                                  : e.timestamp)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.PongResponse = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.timestamp = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.timestamp &&
                          Object.hasOwnProperty.call(e, "timestamp") &&
                          t.uint32(8).int64(e.timestamp),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.PongResponse();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        if (a >>> 3 == 1) r.timestamp = e.int64();
                        else e.skipType(7 & a);
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.timestamp &&
                          e.hasOwnProperty("timestamp") &&
                          !(
                            K.isInteger(e.timestamp) ||
                            (e.timestamp &&
                              K.isInteger(e.timestamp.low) &&
                              K.isInteger(e.timestamp.high))
                          )
                        ? "timestamp: integer|Long expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.PongResponse) return e;
                      var t = new Z.game.PongResponse();
                      return (
                        null != e.timestamp &&
                          (K.Long
                            ? ((t.timestamp = K.Long.fromValue(
                                e.timestamp
                              )).unsigned = !1)
                            : "string" == typeof e.timestamp
                            ? (t.timestamp = parseInt(e.timestamp, 10))
                            : "number" == typeof e.timestamp
                            ? (t.timestamp = e.timestamp)
                            : "object" === s(e.timestamp) &&
                              (t.timestamp = new K.LongBits(
                                e.timestamp.low >>> 0,
                                e.timestamp.high >>> 0
                              ).toNumber())),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (t.defaults)
                        if (K.Long) {
                          var r = new K.Long(0, 0, !1);
                          n.timestamp =
                            t.longs === String
                              ? r.toString()
                              : t.longs === Number
                              ? r.toNumber()
                              : r;
                        } else n.timestamp = t.longs === String ? "0" : 0;
                      return (
                        null != e.timestamp &&
                          e.hasOwnProperty("timestamp") &&
                          ("number" == typeof e.timestamp
                            ? (n.timestamp =
                                t.longs === String
                                  ? String(e.timestamp)
                                  : e.timestamp)
                            : (n.timestamp =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.timestamp)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.timestamp.low >>> 0,
                                      e.timestamp.high >>> 0
                                    ).toNumber()
                                  : e.timestamp)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.ChipInItem = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.site = 0),
                    (e.prototype.ante = K.Long ? K.Long.fromBits(0, 0, !1) : 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.site &&
                          Object.hasOwnProperty.call(e, "site") &&
                          t.uint32(8).int32(e.site),
                        null != e.ante &&
                          Object.hasOwnProperty.call(e, "ante") &&
                          t.uint32(16).int64(e.ante),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.ChipInItem();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            r.site = e.int32();
                            break;
                          case 2:
                            r.ante = e.int64();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.site &&
                          e.hasOwnProperty("site") &&
                          !K.isInteger(e.site)
                        ? "site: integer expected"
                        : null != e.ante &&
                          e.hasOwnProperty("ante") &&
                          !(
                            K.isInteger(e.ante) ||
                            (e.ante &&
                              K.isInteger(e.ante.low) &&
                              K.isInteger(e.ante.high))
                          )
                        ? "ante: integer|Long expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.ChipInItem) return e;
                      var t = new Z.game.ChipInItem();
                      return (
                        null != e.site && (t.site = 0 | e.site),
                        null != e.ante &&
                          (K.Long
                            ? ((t.ante = K.Long.fromValue(
                                e.ante
                              )).unsigned = !1)
                            : "string" == typeof e.ante
                            ? (t.ante = parseInt(e.ante, 10))
                            : "number" == typeof e.ante
                            ? (t.ante = e.ante)
                            : "object" === s(e.ante) &&
                              (t.ante = new K.LongBits(
                                e.ante.low >>> 0,
                                e.ante.high >>> 0
                              ).toNumber())),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (t.defaults)
                        if (((n.site = 0), K.Long)) {
                          var r = new K.Long(0, 0, !1);
                          n.ante =
                            t.longs === String
                              ? r.toString()
                              : t.longs === Number
                              ? r.toNumber()
                              : r;
                        } else n.ante = t.longs === String ? "0" : 0;
                      return (
                        null != e.site &&
                          e.hasOwnProperty("site") &&
                          (n.site = e.site),
                        null != e.ante &&
                          e.hasOwnProperty("ante") &&
                          ("number" == typeof e.ante
                            ? (n.ante =
                                t.longs === String ? String(e.ante) : e.ante)
                            : (n.ante =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.ante)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.ante.low >>> 0,
                                      e.ante.high >>> 0
                                    ).toNumber()
                                  : e.ante)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.ChipInResult = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.site = 0),
                    (e.prototype.ante = K.Long ? K.Long.fromBits(0, 0, !1) : 0),
                    (e.prototype.award = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.uid = ""),
                    (e.prototype.nickName = ""),
                    (e.prototype.status = 0),
                    (e.prototype.multiplier = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.site &&
                          Object.hasOwnProperty.call(e, "site") &&
                          t.uint32(8).int32(e.site),
                        null != e.ante &&
                          Object.hasOwnProperty.call(e, "ante") &&
                          t.uint32(16).int64(e.ante),
                        null != e.award &&
                          Object.hasOwnProperty.call(e, "award") &&
                          t.uint32(24).int64(e.award),
                        null != e.uid &&
                          Object.hasOwnProperty.call(e, "uid") &&
                          t.uint32(34).string(e.uid),
                        null != e.nickName &&
                          Object.hasOwnProperty.call(e, "nickName") &&
                          t.uint32(42).string(e.nickName),
                        null != e.status &&
                          Object.hasOwnProperty.call(e, "status") &&
                          t.uint32(48).int32(e.status),
                        null != e.multiplier &&
                          Object.hasOwnProperty.call(e, "multiplier") &&
                          t.uint32(56).int64(e.multiplier),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.ChipInResult();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            r.site = e.int32();
                            break;
                          case 2:
                            r.ante = e.int64();
                            break;
                          case 3:
                            r.award = e.int64();
                            break;
                          case 4:
                            r.uid = e.string();
                            break;
                          case 5:
                            r.nickName = e.string();
                            break;
                          case 6:
                            r.status = e.int32();
                            break;
                          case 7:
                            r.multiplier = e.int64();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.site &&
                          e.hasOwnProperty("site") &&
                          !K.isInteger(e.site)
                        ? "site: integer expected"
                        : null != e.ante &&
                          e.hasOwnProperty("ante") &&
                          !(
                            K.isInteger(e.ante) ||
                            (e.ante &&
                              K.isInteger(e.ante.low) &&
                              K.isInteger(e.ante.high))
                          )
                        ? "ante: integer|Long expected"
                        : null != e.award &&
                          e.hasOwnProperty("award") &&
                          !(
                            K.isInteger(e.award) ||
                            (e.award &&
                              K.isInteger(e.award.low) &&
                              K.isInteger(e.award.high))
                          )
                        ? "award: integer|Long expected"
                        : null != e.uid &&
                          e.hasOwnProperty("uid") &&
                          !K.isString(e.uid)
                        ? "uid: string expected"
                        : null != e.nickName &&
                          e.hasOwnProperty("nickName") &&
                          !K.isString(e.nickName)
                        ? "nickName: string expected"
                        : null != e.status &&
                          e.hasOwnProperty("status") &&
                          !K.isInteger(e.status)
                        ? "status: integer expected"
                        : null != e.multiplier &&
                          e.hasOwnProperty("multiplier") &&
                          !(
                            K.isInteger(e.multiplier) ||
                            (e.multiplier &&
                              K.isInteger(e.multiplier.low) &&
                              K.isInteger(e.multiplier.high))
                          )
                        ? "multiplier: integer|Long expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.ChipInResult) return e;
                      var t = new Z.game.ChipInResult();
                      return (
                        null != e.site && (t.site = 0 | e.site),
                        null != e.ante &&
                          (K.Long
                            ? ((t.ante = K.Long.fromValue(
                                e.ante
                              )).unsigned = !1)
                            : "string" == typeof e.ante
                            ? (t.ante = parseInt(e.ante, 10))
                            : "number" == typeof e.ante
                            ? (t.ante = e.ante)
                            : "object" === s(e.ante) &&
                              (t.ante = new K.LongBits(
                                e.ante.low >>> 0,
                                e.ante.high >>> 0
                              ).toNumber())),
                        null != e.award &&
                          (K.Long
                            ? ((t.award = K.Long.fromValue(
                                e.award
                              )).unsigned = !1)
                            : "string" == typeof e.award
                            ? (t.award = parseInt(e.award, 10))
                            : "number" == typeof e.award
                            ? (t.award = e.award)
                            : "object" === s(e.award) &&
                              (t.award = new K.LongBits(
                                e.award.low >>> 0,
                                e.award.high >>> 0
                              ).toNumber())),
                        null != e.uid && (t.uid = String(e.uid)),
                        null != e.nickName && (t.nickName = String(e.nickName)),
                        null != e.status && (t.status = 0 | e.status),
                        null != e.multiplier &&
                          (K.Long
                            ? ((t.multiplier = K.Long.fromValue(
                                e.multiplier
                              )).unsigned = !1)
                            : "string" == typeof e.multiplier
                            ? (t.multiplier = parseInt(e.multiplier, 10))
                            : "number" == typeof e.multiplier
                            ? (t.multiplier = e.multiplier)
                            : "object" === s(e.multiplier) &&
                              (t.multiplier = new K.LongBits(
                                e.multiplier.low >>> 0,
                                e.multiplier.high >>> 0
                              ).toNumber())),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (t.defaults) {
                        if (((n.site = 0), K.Long)) {
                          var r = new K.Long(0, 0, !1);
                          n.ante =
                            t.longs === String
                              ? r.toString()
                              : t.longs === Number
                              ? r.toNumber()
                              : r;
                        } else n.ante = t.longs === String ? "0" : 0;
                        if (K.Long) {
                          var a = new K.Long(0, 0, !1);
                          n.award =
                            t.longs === String
                              ? a.toString()
                              : t.longs === Number
                              ? a.toNumber()
                              : a;
                        } else n.award = t.longs === String ? "0" : 0;
                        if (
                          ((n.uid = ""),
                          (n.nickName = ""),
                          (n.status = 0),
                          K.Long)
                        ) {
                          var i = new K.Long(0, 0, !1);
                          n.multiplier =
                            t.longs === String
                              ? i.toString()
                              : t.longs === Number
                              ? i.toNumber()
                              : i;
                        } else n.multiplier = t.longs === String ? "0" : 0;
                      }
                      return (
                        null != e.site &&
                          e.hasOwnProperty("site") &&
                          (n.site = e.site),
                        null != e.ante &&
                          e.hasOwnProperty("ante") &&
                          ("number" == typeof e.ante
                            ? (n.ante =
                                t.longs === String ? String(e.ante) : e.ante)
                            : (n.ante =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.ante)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.ante.low >>> 0,
                                      e.ante.high >>> 0
                                    ).toNumber()
                                  : e.ante)),
                        null != e.award &&
                          e.hasOwnProperty("award") &&
                          ("number" == typeof e.award
                            ? (n.award =
                                t.longs === String ? String(e.award) : e.award)
                            : (n.award =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.award)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.award.low >>> 0,
                                      e.award.high >>> 0
                                    ).toNumber()
                                  : e.award)),
                        null != e.uid &&
                          e.hasOwnProperty("uid") &&
                          (n.uid = e.uid),
                        null != e.nickName &&
                          e.hasOwnProperty("nickName") &&
                          (n.nickName = e.nickName),
                        null != e.status &&
                          e.hasOwnProperty("status") &&
                          (n.status = e.status),
                        null != e.multiplier &&
                          e.hasOwnProperty("multiplier") &&
                          ("number" == typeof e.multiplier
                            ? (n.multiplier =
                                t.longs === String
                                  ? String(e.multiplier)
                                  : e.multiplier)
                            : (n.multiplier =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.multiplier)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.multiplier.low >>> 0,
                                      e.multiplier.high >>> 0
                                    ).toNumber()
                                  : e.multiplier)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.GroupChipInRequest = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.ante = null),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.ante &&
                          Object.hasOwnProperty.call(e, "ante") &&
                          Z.game.ChipInItem.encode(
                            e.ante,
                            t.uint32(10).fork()
                          ).ldelim(),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.GroupChipInRequest();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        if (a >>> 3 == 1)
                          r.ante = Z.game.ChipInItem.decode(e, e.uint32());
                        else e.skipType(7 & a);
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      if ("object" !== s(e) || null === e)
                        return "object expected";
                      if (null != e.ante && e.hasOwnProperty("ante")) {
                        var t = Z.game.ChipInItem.verify(e.ante);
                        if (t) return "ante." + t;
                      }
                      return null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.GroupChipInRequest) return e;
                      var t = new Z.game.GroupChipInRequest();
                      if (null != e.ante) {
                        if ("object" !== s(e.ante))
                          throw TypeError(
                            ".game.GroupChipInRequest.ante: object expected"
                          );
                        t.ante = Z.game.ChipInItem.fromObject(e.ante);
                      }
                      return t;
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      return (
                        t.defaults && (n.ante = null),
                        null != e.ante &&
                          e.hasOwnProperty("ante") &&
                          (n.ante = Z.game.ChipInItem.toObject(e.ante, t)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.GroupChipInResponse = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.transactionId = ""),
                    (e.prototype.balance = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.result = !1),
                    (e.prototype.site = 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.transactionId &&
                          Object.hasOwnProperty.call(e, "transactionId") &&
                          t.uint32(10).string(e.transactionId),
                        null != e.balance &&
                          Object.hasOwnProperty.call(e, "balance") &&
                          t.uint32(16).int64(e.balance),
                        null != e.result &&
                          Object.hasOwnProperty.call(e, "result") &&
                          t.uint32(24).bool(e.result),
                        null != e.site &&
                          Object.hasOwnProperty.call(e, "site") &&
                          t.uint32(32).int32(e.site),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.GroupChipInResponse();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            r.transactionId = e.string();
                            break;
                          case 2:
                            r.balance = e.int64();
                            break;
                          case 3:
                            r.result = e.bool();
                            break;
                          case 4:
                            r.site = e.int32();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.transactionId &&
                          e.hasOwnProperty("transactionId") &&
                          !K.isString(e.transactionId)
                        ? "transactionId: string expected"
                        : null != e.balance &&
                          e.hasOwnProperty("balance") &&
                          !(
                            K.isInteger(e.balance) ||
                            (e.balance &&
                              K.isInteger(e.balance.low) &&
                              K.isInteger(e.balance.high))
                          )
                        ? "balance: integer|Long expected"
                        : null != e.result &&
                          e.hasOwnProperty("result") &&
                          "boolean" != typeof e.result
                        ? "result: boolean expected"
                        : null != e.site &&
                          e.hasOwnProperty("site") &&
                          !K.isInteger(e.site)
                        ? "site: integer expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.GroupChipInResponse) return e;
                      var t = new Z.game.GroupChipInResponse();
                      return (
                        null != e.transactionId &&
                          (t.transactionId = String(e.transactionId)),
                        null != e.balance &&
                          (K.Long
                            ? ((t.balance = K.Long.fromValue(
                                e.balance
                              )).unsigned = !1)
                            : "string" == typeof e.balance
                            ? (t.balance = parseInt(e.balance, 10))
                            : "number" == typeof e.balance
                            ? (t.balance = e.balance)
                            : "object" === s(e.balance) &&
                              (t.balance = new K.LongBits(
                                e.balance.low >>> 0,
                                e.balance.high >>> 0
                              ).toNumber())),
                        null != e.result && (t.result = Boolean(e.result)),
                        null != e.site && (t.site = 0 | e.site),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (t.defaults) {
                        if (((n.transactionId = ""), K.Long)) {
                          var r = new K.Long(0, 0, !1);
                          n.balance =
                            t.longs === String
                              ? r.toString()
                              : t.longs === Number
                              ? r.toNumber()
                              : r;
                        } else n.balance = t.longs === String ? "0" : 0;
                        (n.result = !1), (n.site = 0);
                      }
                      return (
                        null != e.transactionId &&
                          e.hasOwnProperty("transactionId") &&
                          (n.transactionId = e.transactionId),
                        null != e.balance &&
                          e.hasOwnProperty("balance") &&
                          ("number" == typeof e.balance
                            ? (n.balance =
                                t.longs === String
                                  ? String(e.balance)
                                  : e.balance)
                            : (n.balance =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.balance)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.balance.low >>> 0,
                                      e.balance.high >>> 0
                                    ).toNumber()
                                  : e.balance)),
                        null != e.result &&
                          e.hasOwnProperty("result") &&
                          (n.result = e.result),
                        null != e.site &&
                          e.hasOwnProperty("site") &&
                          (n.site = e.site),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.GroupStatusSyncResponse = (function () {
                  function e(e) {
                    if (((this.awardRank = []), e))
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.transactionId = ""),
                    (e.prototype.groupStatus = ""),
                    (e.prototype.multiplier = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.remainingTime = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.awardRank = K.emptyArray),
                    (e.prototype.totalTime = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      if (
                        (t || (t = Q.create()),
                        null != e.transactionId &&
                          Object.hasOwnProperty.call(e, "transactionId") &&
                          t.uint32(10).string(e.transactionId),
                        null != e.groupStatus &&
                          Object.hasOwnProperty.call(e, "groupStatus") &&
                          t.uint32(18).string(e.groupStatus),
                        null != e.remainingTime &&
                          Object.hasOwnProperty.call(e, "remainingTime") &&
                          t.uint32(32).int64(e.remainingTime),
                        null != e.awardRank && e.awardRank.length)
                      )
                        for (var n = 0; n < e.awardRank.length; ++n)
                          Z.game.Rank.encode(
                            e.awardRank[n],
                            t.uint32(42).fork()
                          ).ldelim();
                      return (
                        null != e.totalTime &&
                          Object.hasOwnProperty.call(e, "totalTime") &&
                          t.uint32(48).int64(e.totalTime),
                        null != e.multiplier &&
                          Object.hasOwnProperty.call(e, "multiplier") &&
                          t.uint32(56).int64(e.multiplier),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.GroupStatusSyncResponse();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            r.transactionId = e.string();
                            break;
                          case 2:
                            r.groupStatus = e.string();
                            break;
                          case 7:
                            r.multiplier = e.int64();
                            break;
                          case 4:
                            r.remainingTime = e.int64();
                            break;
                          case 5:
                            (r.awardRank && r.awardRank.length) ||
                              (r.awardRank = []),
                              r.awardRank.push(
                                Z.game.Rank.decode(e, e.uint32())
                              );
                            break;
                          case 6:
                            r.totalTime = e.int64();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      if ("object" !== s(e) || null === e)
                        return "object expected";
                      if (
                        null != e.transactionId &&
                        e.hasOwnProperty("transactionId") &&
                        !K.isString(e.transactionId)
                      )
                        return "transactionId: string expected";
                      if (
                        null != e.groupStatus &&
                        e.hasOwnProperty("groupStatus") &&
                        !K.isString(e.groupStatus)
                      )
                        return "groupStatus: string expected";
                      if (
                        null != e.multiplier &&
                        e.hasOwnProperty("multiplier") &&
                        !(
                          K.isInteger(e.multiplier) ||
                          (e.multiplier &&
                            K.isInteger(e.multiplier.low) &&
                            K.isInteger(e.multiplier.high))
                        )
                      )
                        return "multiplier: integer|Long expected";
                      if (
                        null != e.remainingTime &&
                        e.hasOwnProperty("remainingTime") &&
                        !(
                          K.isInteger(e.remainingTime) ||
                          (e.remainingTime &&
                            K.isInteger(e.remainingTime.low) &&
                            K.isInteger(e.remainingTime.high))
                        )
                      )
                        return "remainingTime: integer|Long expected";
                      if (
                        null != e.awardRank &&
                        e.hasOwnProperty("awardRank")
                      ) {
                        if (!Array.isArray(e.awardRank))
                          return "awardRank: array expected";
                        for (var t = 0; t < e.awardRank.length; ++t) {
                          var n = Z.game.Rank.verify(e.awardRank[t]);
                          if (n) return "awardRank." + n;
                        }
                      }
                      return null != e.totalTime &&
                        e.hasOwnProperty("totalTime") &&
                        !(
                          K.isInteger(e.totalTime) ||
                          (e.totalTime &&
                            K.isInteger(e.totalTime.low) &&
                            K.isInteger(e.totalTime.high))
                        )
                        ? "totalTime: integer|Long expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.GroupStatusSyncResponse) return e;
                      var t = new Z.game.GroupStatusSyncResponse();
                      if (
                        (null != e.transactionId &&
                          (t.transactionId = String(e.transactionId)),
                        null != e.groupStatus &&
                          (t.groupStatus = String(e.groupStatus)),
                        null != e.multiplier &&
                          (K.Long
                            ? ((t.multiplier = K.Long.fromValue(
                                e.multiplier
                              )).unsigned = !1)
                            : "string" == typeof e.multiplier
                            ? (t.multiplier = parseInt(e.multiplier, 10))
                            : "number" == typeof e.multiplier
                            ? (t.multiplier = e.multiplier)
                            : "object" === s(e.multiplier) &&
                              (t.multiplier = new K.LongBits(
                                e.multiplier.low >>> 0,
                                e.multiplier.high >>> 0
                              ).toNumber())),
                        null != e.remainingTime &&
                          (K.Long
                            ? ((t.remainingTime = K.Long.fromValue(
                                e.remainingTime
                              )).unsigned = !1)
                            : "string" == typeof e.remainingTime
                            ? (t.remainingTime = parseInt(e.remainingTime, 10))
                            : "number" == typeof e.remainingTime
                            ? (t.remainingTime = e.remainingTime)
                            : "object" === s(e.remainingTime) &&
                              (t.remainingTime = new K.LongBits(
                                e.remainingTime.low >>> 0,
                                e.remainingTime.high >>> 0
                              ).toNumber())),
                        e.awardRank)
                      ) {
                        if (!Array.isArray(e.awardRank))
                          throw TypeError(
                            ".game.GroupStatusSyncResponse.awardRank: array expected"
                          );
                        t.awardRank = [];
                        for (var n = 0; n < e.awardRank.length; ++n) {
                          if ("object" !== s(e.awardRank[n]))
                            throw TypeError(
                              ".game.GroupStatusSyncResponse.awardRank: object expected"
                            );
                          t.awardRank[n] = Z.game.Rank.fromObject(
                            e.awardRank[n]
                          );
                        }
                      }
                      return (
                        null != e.totalTime &&
                          (K.Long
                            ? ((t.totalTime = K.Long.fromValue(
                                e.totalTime
                              )).unsigned = !1)
                            : "string" == typeof e.totalTime
                            ? (t.totalTime = parseInt(e.totalTime, 10))
                            : "number" == typeof e.totalTime
                            ? (t.totalTime = e.totalTime)
                            : "object" === s(e.totalTime) &&
                              (t.totalTime = new K.LongBits(
                                e.totalTime.low >>> 0,
                                e.totalTime.high >>> 0
                              ).toNumber())),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (
                        ((t.arrays || t.defaults) && (n.awardRank = []),
                        t.defaults)
                      ) {
                        if (
                          ((n.transactionId = ""), (n.groupStatus = ""), K.Long)
                        ) {
                          var r = new K.Long(0, 0, !1);
                          n.remainingTime =
                            t.longs === String
                              ? r.toString()
                              : t.longs === Number
                              ? r.toNumber()
                              : r;
                        } else n.remainingTime = t.longs === String ? "0" : 0;
                        if (K.Long) {
                          var a = new K.Long(0, 0, !1);
                          n.totalTime =
                            t.longs === String
                              ? a.toString()
                              : t.longs === Number
                              ? a.toNumber()
                              : a;
                        } else n.totalTime = t.longs === String ? "0" : 0;
                        if (K.Long) {
                          var i = new K.Long(0, 0, !1);
                          n.multiplier =
                            t.longs === String
                              ? i.toString()
                              : t.longs === Number
                              ? i.toNumber()
                              : i;
                        } else n.multiplier = t.longs === String ? "0" : 0;
                      }
                      if (
                        (null != e.transactionId &&
                          e.hasOwnProperty("transactionId") &&
                          (n.transactionId = e.transactionId),
                        null != e.groupStatus &&
                          e.hasOwnProperty("groupStatus") &&
                          (n.groupStatus = e.groupStatus),
                        null != e.remainingTime &&
                          e.hasOwnProperty("remainingTime") &&
                          ("number" == typeof e.remainingTime
                            ? (n.remainingTime =
                                t.longs === String
                                  ? String(e.remainingTime)
                                  : e.remainingTime)
                            : (n.remainingTime =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(
                                      e.remainingTime
                                    )
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.remainingTime.low >>> 0,
                                      e.remainingTime.high >>> 0
                                    ).toNumber()
                                  : e.remainingTime)),
                        e.awardRank && e.awardRank.length)
                      ) {
                        n.awardRank = [];
                        for (var o = 0; o < e.awardRank.length; ++o)
                          n.awardRank[o] = Z.game.Rank.toObject(
                            e.awardRank[o],
                            t
                          );
                      }
                      return (
                        null != e.totalTime &&
                          e.hasOwnProperty("totalTime") &&
                          ("number" == typeof e.totalTime
                            ? (n.totalTime =
                                t.longs === String
                                  ? String(e.totalTime)
                                  : e.totalTime)
                            : (n.totalTime =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.totalTime)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.totalTime.low >>> 0,
                                      e.totalTime.high >>> 0
                                    ).toNumber()
                                  : e.totalTime)),
                        null != e.multiplier &&
                          e.hasOwnProperty("multiplier") &&
                          ("number" == typeof e.multiplier
                            ? (n.multiplier =
                                t.longs === String
                                  ? String(e.multiplier)
                                  : e.multiplier)
                            : (n.multiplier =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.multiplier)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.multiplier.low >>> 0,
                                      e.multiplier.high >>> 0
                                    ).toNumber()
                                  : e.multiplier)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.TipMessageResponse = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.msgType = 0),
                    (e.prototype.txtMsg = ""),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.msgType &&
                          Object.hasOwnProperty.call(e, "msgType") &&
                          t.uint32(8).int32(e.msgType),
                        null != e.txtMsg &&
                          Object.hasOwnProperty.call(e, "txtMsg") &&
                          t.uint32(18).string(e.txtMsg),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.TipMessageResponse();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            r.msgType = e.int32();
                            break;
                          case 2:
                            r.txtMsg = e.string();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.msgType &&
                          e.hasOwnProperty("msgType") &&
                          !K.isInteger(e.msgType)
                        ? "msgType: integer expected"
                        : null != e.txtMsg &&
                          e.hasOwnProperty("txtMsg") &&
                          !K.isString(e.txtMsg)
                        ? "txtMsg: string expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.TipMessageResponse) return e;
                      var t = new Z.game.TipMessageResponse();
                      return (
                        null != e.msgType && (t.msgType = 0 | e.msgType),
                        null != e.txtMsg && (t.txtMsg = String(e.txtMsg)),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      return (
                        t.defaults && ((n.msgType = 0), (n.txtMsg = "")),
                        null != e.msgType &&
                          e.hasOwnProperty("msgType") &&
                          (n.msgType = e.msgType),
                        null != e.txtMsg &&
                          e.hasOwnProperty("txtMsg") &&
                          (n.txtMsg = e.txtMsg),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.JackPotAwardMessageResponse = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.nickName = ""),
                    (e.prototype.awardType = 0),
                    (e.prototype.awardMoney = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.awardTime = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.currencyType = ""),
                    (e.prototype.currencyRate = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.nickName &&
                          Object.hasOwnProperty.call(e, "nickName") &&
                          t.uint32(10).string(e.nickName),
                        null != e.awardType &&
                          Object.hasOwnProperty.call(e, "awardType") &&
                          t.uint32(16).int32(e.awardType),
                        null != e.awardMoney &&
                          Object.hasOwnProperty.call(e, "awardMoney") &&
                          t.uint32(24).int64(e.awardMoney),
                        null != e.awardTime &&
                          Object.hasOwnProperty.call(e, "awardTime") &&
                          t.uint32(32).int64(e.awardTime),
                        null != e.currencyType &&
                          Object.hasOwnProperty.call(e, "currencyType") &&
                          t.uint32(42).string(e.currencyType),
                        null != e.currencyRate &&
                          Object.hasOwnProperty.call(e, "currencyRate") &&
                          t.uint32(48).int64(e.currencyRate),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.JackPotAwardMessageResponse();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            r.nickName = e.string();
                            break;
                          case 2:
                            r.awardType = e.int32();
                            break;
                          case 3:
                            r.awardMoney = e.int64();
                            break;
                          case 4:
                            r.awardTime = e.int64();
                            break;
                          case 5:
                            r.currencyType = e.string();
                            break;
                          case 6:
                            r.currencyRate = e.int64();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.nickName &&
                          e.hasOwnProperty("nickName") &&
                          !K.isString(e.nickName)
                        ? "nickName: string expected"
                        : null != e.awardType &&
                          e.hasOwnProperty("awardType") &&
                          !K.isInteger(e.awardType)
                        ? "awardType: integer expected"
                        : null != e.awardMoney &&
                          e.hasOwnProperty("awardMoney") &&
                          !(
                            K.isInteger(e.awardMoney) ||
                            (e.awardMoney &&
                              K.isInteger(e.awardMoney.low) &&
                              K.isInteger(e.awardMoney.high))
                          )
                        ? "awardMoney: integer|Long expected"
                        : null != e.awardTime &&
                          e.hasOwnProperty("awardTime") &&
                          !(
                            K.isInteger(e.awardTime) ||
                            (e.awardTime &&
                              K.isInteger(e.awardTime.low) &&
                              K.isInteger(e.awardTime.high))
                          )
                        ? "awardTime: integer|Long expected"
                        : null != e.currencyType &&
                          e.hasOwnProperty("currencyType") &&
                          !K.isString(e.currencyType)
                        ? "currencyType: string expected"
                        : null != e.currencyRate &&
                          e.hasOwnProperty("currencyRate") &&
                          !(
                            K.isInteger(e.currencyRate) ||
                            (e.currencyRate &&
                              K.isInteger(e.currencyRate.low) &&
                              K.isInteger(e.currencyRate.high))
                          )
                        ? "currencyRate: integer|Long expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.JackPotAwardMessageResponse)
                        return e;
                      var t = new Z.game.JackPotAwardMessageResponse();
                      return (
                        null != e.nickName && (t.nickName = String(e.nickName)),
                        null != e.awardType && (t.awardType = 0 | e.awardType),
                        null != e.awardMoney &&
                          (K.Long
                            ? ((t.awardMoney = K.Long.fromValue(
                                e.awardMoney
                              )).unsigned = !1)
                            : "string" == typeof e.awardMoney
                            ? (t.awardMoney = parseInt(e.awardMoney, 10))
                            : "number" == typeof e.awardMoney
                            ? (t.awardMoney = e.awardMoney)
                            : "object" === s(e.awardMoney) &&
                              (t.awardMoney = new K.LongBits(
                                e.awardMoney.low >>> 0,
                                e.awardMoney.high >>> 0
                              ).toNumber())),
                        null != e.awardTime &&
                          (K.Long
                            ? ((t.awardTime = K.Long.fromValue(
                                e.awardTime
                              )).unsigned = !1)
                            : "string" == typeof e.awardTime
                            ? (t.awardTime = parseInt(e.awardTime, 10))
                            : "number" == typeof e.awardTime
                            ? (t.awardTime = e.awardTime)
                            : "object" === s(e.awardTime) &&
                              (t.awardTime = new K.LongBits(
                                e.awardTime.low >>> 0,
                                e.awardTime.high >>> 0
                              ).toNumber())),
                        null != e.currencyType &&
                          (t.currencyType = String(e.currencyType)),
                        null != e.currencyRate &&
                          (K.Long
                            ? ((t.currencyRate = K.Long.fromValue(
                                e.currencyRate
                              )).unsigned = !1)
                            : "string" == typeof e.currencyRate
                            ? (t.currencyRate = parseInt(e.currencyRate, 10))
                            : "number" == typeof e.currencyRate
                            ? (t.currencyRate = e.currencyRate)
                            : "object" === s(e.currencyRate) &&
                              (t.currencyRate = new K.LongBits(
                                e.currencyRate.low >>> 0,
                                e.currencyRate.high >>> 0
                              ).toNumber())),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (t.defaults) {
                        if (((n.nickName = ""), (n.awardType = 0), K.Long)) {
                          var r = new K.Long(0, 0, !1);
                          n.awardMoney =
                            t.longs === String
                              ? r.toString()
                              : t.longs === Number
                              ? r.toNumber()
                              : r;
                        } else n.awardMoney = t.longs === String ? "0" : 0;
                        if (K.Long) {
                          var a = new K.Long(0, 0, !1);
                          n.awardTime =
                            t.longs === String
                              ? a.toString()
                              : t.longs === Number
                              ? a.toNumber()
                              : a;
                        } else n.awardTime = t.longs === String ? "0" : 0;
                        if (((n.currencyType = ""), K.Long)) {
                          var i = new K.Long(0, 0, !1);
                          n.currencyRate =
                            t.longs === String
                              ? i.toString()
                              : t.longs === Number
                              ? i.toNumber()
                              : i;
                        } else n.currencyRate = t.longs === String ? "0" : 0;
                      }
                      return (
                        null != e.nickName &&
                          e.hasOwnProperty("nickName") &&
                          (n.nickName = e.nickName),
                        null != e.awardType &&
                          e.hasOwnProperty("awardType") &&
                          (n.awardType = e.awardType),
                        null != e.awardMoney &&
                          e.hasOwnProperty("awardMoney") &&
                          ("number" == typeof e.awardMoney
                            ? (n.awardMoney =
                                t.longs === String
                                  ? String(e.awardMoney)
                                  : e.awardMoney)
                            : (n.awardMoney =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.awardMoney)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.awardMoney.low >>> 0,
                                      e.awardMoney.high >>> 0
                                    ).toNumber()
                                  : e.awardMoney)),
                        null != e.awardTime &&
                          e.hasOwnProperty("awardTime") &&
                          ("number" == typeof e.awardTime
                            ? (n.awardTime =
                                t.longs === String
                                  ? String(e.awardTime)
                                  : e.awardTime)
                            : (n.awardTime =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.awardTime)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.awardTime.low >>> 0,
                                      e.awardTime.high >>> 0
                                    ).toNumber()
                                  : e.awardTime)),
                        null != e.currencyType &&
                          e.hasOwnProperty("currencyType") &&
                          (n.currencyType = e.currencyType),
                        null != e.currencyRate &&
                          e.hasOwnProperty("currencyRate") &&
                          ("number" == typeof e.currencyRate
                            ? (n.currencyRate =
                                t.longs === String
                                  ? String(e.currencyRate)
                                  : e.currencyRate)
                            : (n.currencyRate =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(
                                      e.currencyRate
                                    )
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.currencyRate.low >>> 0,
                                      e.currencyRate.high >>> 0
                                    ).toNumber()
                                  : e.currencyRate)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.JackPotAwardResponse = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.awardType = 0),
                    (e.prototype.awardMoney = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.balance = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.awardType &&
                          Object.hasOwnProperty.call(e, "awardType") &&
                          t.uint32(8).int32(e.awardType),
                        null != e.awardMoney &&
                          Object.hasOwnProperty.call(e, "awardMoney") &&
                          t.uint32(16).int64(e.awardMoney),
                        null != e.balance &&
                          Object.hasOwnProperty.call(e, "balance") &&
                          t.uint32(24).int64(e.balance),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.JackPotAwardResponse();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            r.awardType = e.int32();
                            break;
                          case 2:
                            r.awardMoney = e.int64();
                            break;
                          case 3:
                            r.balance = e.int64();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.awardType &&
                          e.hasOwnProperty("awardType") &&
                          !K.isInteger(e.awardType)
                        ? "awardType: integer expected"
                        : null != e.awardMoney &&
                          e.hasOwnProperty("awardMoney") &&
                          !(
                            K.isInteger(e.awardMoney) ||
                            (e.awardMoney &&
                              K.isInteger(e.awardMoney.low) &&
                              K.isInteger(e.awardMoney.high))
                          )
                        ? "awardMoney: integer|Long expected"
                        : null != e.balance &&
                          e.hasOwnProperty("balance") &&
                          !(
                            K.isInteger(e.balance) ||
                            (e.balance &&
                              K.isInteger(e.balance.low) &&
                              K.isInteger(e.balance.high))
                          )
                        ? "balance: integer|Long expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.JackPotAwardResponse) return e;
                      var t = new Z.game.JackPotAwardResponse();
                      return (
                        null != e.awardType && (t.awardType = 0 | e.awardType),
                        null != e.awardMoney &&
                          (K.Long
                            ? ((t.awardMoney = K.Long.fromValue(
                                e.awardMoney
                              )).unsigned = !1)
                            : "string" == typeof e.awardMoney
                            ? (t.awardMoney = parseInt(e.awardMoney, 10))
                            : "number" == typeof e.awardMoney
                            ? (t.awardMoney = e.awardMoney)
                            : "object" === s(e.awardMoney) &&
                              (t.awardMoney = new K.LongBits(
                                e.awardMoney.low >>> 0,
                                e.awardMoney.high >>> 0
                              ).toNumber())),
                        null != e.balance &&
                          (K.Long
                            ? ((t.balance = K.Long.fromValue(
                                e.balance
                              )).unsigned = !1)
                            : "string" == typeof e.balance
                            ? (t.balance = parseInt(e.balance, 10))
                            : "number" == typeof e.balance
                            ? (t.balance = e.balance)
                            : "object" === s(e.balance) &&
                              (t.balance = new K.LongBits(
                                e.balance.low >>> 0,
                                e.balance.high >>> 0
                              ).toNumber())),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (t.defaults) {
                        if (((n.awardType = 0), K.Long)) {
                          var r = new K.Long(0, 0, !1);
                          n.awardMoney =
                            t.longs === String
                              ? r.toString()
                              : t.longs === Number
                              ? r.toNumber()
                              : r;
                        } else n.awardMoney = t.longs === String ? "0" : 0;
                        if (K.Long) {
                          var a = new K.Long(0, 0, !1);
                          n.balance =
                            t.longs === String
                              ? a.toString()
                              : t.longs === Number
                              ? a.toNumber()
                              : a;
                        } else n.balance = t.longs === String ? "0" : 0;
                      }
                      return (
                        null != e.awardType &&
                          e.hasOwnProperty("awardType") &&
                          (n.awardType = e.awardType),
                        null != e.awardMoney &&
                          e.hasOwnProperty("awardMoney") &&
                          ("number" == typeof e.awardMoney
                            ? (n.awardMoney =
                                t.longs === String
                                  ? String(e.awardMoney)
                                  : e.awardMoney)
                            : (n.awardMoney =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.awardMoney)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.awardMoney.low >>> 0,
                                      e.awardMoney.high >>> 0
                                    ).toNumber()
                                  : e.awardMoney)),
                        null != e.balance &&
                          e.hasOwnProperty("balance") &&
                          ("number" == typeof e.balance
                            ? (n.balance =
                                t.longs === String
                                  ? String(e.balance)
                                  : e.balance)
                            : (n.balance =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.balance)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.balance.low >>> 0,
                                      e.balance.high >>> 0
                                    ).toNumber()
                                  : e.balance)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.JackPotPoolRequest = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return t || (t = Q.create()), t;
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.JackPotPoolRequest();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        e.skipType(7 & a);
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      return e instanceof Z.game.JackPotPoolRequest
                        ? e
                        : new Z.game.JackPotPoolRequest();
                    }),
                    (e.toObject = function () {
                      return {};
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.JackPotPoolResponse = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.miniAward = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.megaAward = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.superAward = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.grandAward = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.miniAward &&
                          Object.hasOwnProperty.call(e, "miniAward") &&
                          t.uint32(8).int64(e.miniAward),
                        null != e.megaAward &&
                          Object.hasOwnProperty.call(e, "megaAward") &&
                          t.uint32(16).int64(e.megaAward),
                        null != e.superAward &&
                          Object.hasOwnProperty.call(e, "superAward") &&
                          t.uint32(24).int64(e.superAward),
                        null != e.grandAward &&
                          Object.hasOwnProperty.call(e, "grandAward") &&
                          t.uint32(32).int64(e.grandAward),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.JackPotPoolResponse();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            r.miniAward = e.int64();
                            break;
                          case 2:
                            r.megaAward = e.int64();
                            break;
                          case 3:
                            r.superAward = e.int64();
                            break;
                          case 4:
                            r.grandAward = e.int64();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.miniAward &&
                          e.hasOwnProperty("miniAward") &&
                          !(
                            K.isInteger(e.miniAward) ||
                            (e.miniAward &&
                              K.isInteger(e.miniAward.low) &&
                              K.isInteger(e.miniAward.high))
                          )
                        ? "miniAward: integer|Long expected"
                        : null != e.megaAward &&
                          e.hasOwnProperty("megaAward") &&
                          !(
                            K.isInteger(e.megaAward) ||
                            (e.megaAward &&
                              K.isInteger(e.megaAward.low) &&
                              K.isInteger(e.megaAward.high))
                          )
                        ? "megaAward: integer|Long expected"
                        : null != e.superAward &&
                          e.hasOwnProperty("superAward") &&
                          !(
                            K.isInteger(e.superAward) ||
                            (e.superAward &&
                              K.isInteger(e.superAward.low) &&
                              K.isInteger(e.superAward.high))
                          )
                        ? "superAward: integer|Long expected"
                        : null != e.grandAward &&
                          e.hasOwnProperty("grandAward") &&
                          !(
                            K.isInteger(e.grandAward) ||
                            (e.grandAward &&
                              K.isInteger(e.grandAward.low) &&
                              K.isInteger(e.grandAward.high))
                          )
                        ? "grandAward: integer|Long expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.JackPotPoolResponse) return e;
                      var t = new Z.game.JackPotPoolResponse();
                      return (
                        null != e.miniAward &&
                          (K.Long
                            ? ((t.miniAward = K.Long.fromValue(
                                e.miniAward
                              )).unsigned = !1)
                            : "string" == typeof e.miniAward
                            ? (t.miniAward = parseInt(e.miniAward, 10))
                            : "number" == typeof e.miniAward
                            ? (t.miniAward = e.miniAward)
                            : "object" === s(e.miniAward) &&
                              (t.miniAward = new K.LongBits(
                                e.miniAward.low >>> 0,
                                e.miniAward.high >>> 0
                              ).toNumber())),
                        null != e.megaAward &&
                          (K.Long
                            ? ((t.megaAward = K.Long.fromValue(
                                e.megaAward
                              )).unsigned = !1)
                            : "string" == typeof e.megaAward
                            ? (t.megaAward = parseInt(e.megaAward, 10))
                            : "number" == typeof e.megaAward
                            ? (t.megaAward = e.megaAward)
                            : "object" === s(e.megaAward) &&
                              (t.megaAward = new K.LongBits(
                                e.megaAward.low >>> 0,
                                e.megaAward.high >>> 0
                              ).toNumber())),
                        null != e.superAward &&
                          (K.Long
                            ? ((t.superAward = K.Long.fromValue(
                                e.superAward
                              )).unsigned = !1)
                            : "string" == typeof e.superAward
                            ? (t.superAward = parseInt(e.superAward, 10))
                            : "number" == typeof e.superAward
                            ? (t.superAward = e.superAward)
                            : "object" === s(e.superAward) &&
                              (t.superAward = new K.LongBits(
                                e.superAward.low >>> 0,
                                e.superAward.high >>> 0
                              ).toNumber())),
                        null != e.grandAward &&
                          (K.Long
                            ? ((t.grandAward = K.Long.fromValue(
                                e.grandAward
                              )).unsigned = !1)
                            : "string" == typeof e.grandAward
                            ? (t.grandAward = parseInt(e.grandAward, 10))
                            : "number" == typeof e.grandAward
                            ? (t.grandAward = e.grandAward)
                            : "object" === s(e.grandAward) &&
                              (t.grandAward = new K.LongBits(
                                e.grandAward.low >>> 0,
                                e.grandAward.high >>> 0
                              ).toNumber())),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (t.defaults) {
                        if (K.Long) {
                          var r = new K.Long(0, 0, !1);
                          n.miniAward =
                            t.longs === String
                              ? r.toString()
                              : t.longs === Number
                              ? r.toNumber()
                              : r;
                        } else n.miniAward = t.longs === String ? "0" : 0;
                        if (K.Long) {
                          var a = new K.Long(0, 0, !1);
                          n.megaAward =
                            t.longs === String
                              ? a.toString()
                              : t.longs === Number
                              ? a.toNumber()
                              : a;
                        } else n.megaAward = t.longs === String ? "0" : 0;
                        if (K.Long) {
                          var i = new K.Long(0, 0, !1);
                          n.superAward =
                            t.longs === String
                              ? i.toString()
                              : t.longs === Number
                              ? i.toNumber()
                              : i;
                        } else n.superAward = t.longs === String ? "0" : 0;
                        if (K.Long) {
                          var o = new K.Long(0, 0, !1);
                          n.grandAward =
                            t.longs === String
                              ? o.toString()
                              : t.longs === Number
                              ? o.toNumber()
                              : o;
                        } else n.grandAward = t.longs === String ? "0" : 0;
                      }
                      return (
                        null != e.miniAward &&
                          e.hasOwnProperty("miniAward") &&
                          ("number" == typeof e.miniAward
                            ? (n.miniAward =
                                t.longs === String
                                  ? String(e.miniAward)
                                  : e.miniAward)
                            : (n.miniAward =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.miniAward)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.miniAward.low >>> 0,
                                      e.miniAward.high >>> 0
                                    ).toNumber()
                                  : e.miniAward)),
                        null != e.megaAward &&
                          e.hasOwnProperty("megaAward") &&
                          ("number" == typeof e.megaAward
                            ? (n.megaAward =
                                t.longs === String
                                  ? String(e.megaAward)
                                  : e.megaAward)
                            : (n.megaAward =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.megaAward)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.megaAward.low >>> 0,
                                      e.megaAward.high >>> 0
                                    ).toNumber()
                                  : e.megaAward)),
                        null != e.superAward &&
                          e.hasOwnProperty("superAward") &&
                          ("number" == typeof e.superAward
                            ? (n.superAward =
                                t.longs === String
                                  ? String(e.superAward)
                                  : e.superAward)
                            : (n.superAward =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.superAward)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.superAward.low >>> 0,
                                      e.superAward.high >>> 0
                                    ).toNumber()
                                  : e.superAward)),
                        null != e.grandAward &&
                          e.hasOwnProperty("grandAward") &&
                          ("number" == typeof e.grandAward
                            ? (n.grandAward =
                                t.longs === String
                                  ? String(e.grandAward)
                                  : e.grandAward)
                            : (n.grandAward =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.grandAward)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.grandAward.low >>> 0,
                                      e.grandAward.high >>> 0
                                    ).toNumber()
                                  : e.grandAward)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.BalanceRequest = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return t || (t = Q.create()), t;
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.BalanceRequest();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        e.skipType(7 & a);
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      return e instanceof Z.game.BalanceRequest
                        ? e
                        : new Z.game.BalanceRequest();
                    }),
                    (e.toObject = function () {
                      return {};
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.BalanceResponse = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.balance = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.balance &&
                          Object.hasOwnProperty.call(e, "balance") &&
                          t.uint32(8).int64(e.balance),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.BalanceResponse();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        if (a >>> 3 == 1) r.balance = e.int64();
                        else e.skipType(7 & a);
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.balance &&
                          e.hasOwnProperty("balance") &&
                          !(
                            K.isInteger(e.balance) ||
                            (e.balance &&
                              K.isInteger(e.balance.low) &&
                              K.isInteger(e.balance.high))
                          )
                        ? "balance: integer|Long expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.BalanceResponse) return e;
                      var t = new Z.game.BalanceResponse();
                      return (
                        null != e.balance &&
                          (K.Long
                            ? ((t.balance = K.Long.fromValue(
                                e.balance
                              )).unsigned = !1)
                            : "string" == typeof e.balance
                            ? (t.balance = parseInt(e.balance, 10))
                            : "number" == typeof e.balance
                            ? (t.balance = e.balance)
                            : "object" === s(e.balance) &&
                              (t.balance = new K.LongBits(
                                e.balance.low >>> 0,
                                e.balance.high >>> 0
                              ).toNumber())),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (t.defaults)
                        if (K.Long) {
                          var r = new K.Long(0, 0, !1);
                          n.balance =
                            t.longs === String
                              ? r.toString()
                              : t.longs === Number
                              ? r.toNumber()
                              : r;
                        } else n.balance = t.longs === String ? "0" : 0;
                      return (
                        null != e.balance &&
                          e.hasOwnProperty("balance") &&
                          ("number" == typeof e.balance
                            ? (n.balance =
                                t.longs === String
                                  ? String(e.balance)
                                  : e.balance)
                            : (n.balance =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.balance)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.balance.low >>> 0,
                                      e.balance.high >>> 0
                                    ).toNumber()
                                  : e.balance)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.WeeklyTopRewardRequest = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return t || (t = Q.create()), t;
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.WeeklyTopRewardRequest();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        e.skipType(7 & a);
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      return e instanceof Z.game.WeeklyTopRewardRequest
                        ? e
                        : new Z.game.WeeklyTopRewardRequest();
                    }),
                    (e.toObject = function () {
                      return {};
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.WeeklyTop = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.top = 0),
                    (e.prototype.uid = ""),
                    (e.prototype.nickname = ""),
                    (e.prototype.score = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.reward = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.top &&
                          Object.hasOwnProperty.call(e, "top") &&
                          t.uint32(8).int32(e.top),
                        null != e.uid &&
                          Object.hasOwnProperty.call(e, "uid") &&
                          t.uint32(18).string(e.uid),
                        null != e.nickname &&
                          Object.hasOwnProperty.call(e, "nickname") &&
                          t.uint32(26).string(e.nickname),
                        null != e.score &&
                          Object.hasOwnProperty.call(e, "score") &&
                          t.uint32(32).int64(e.score),
                        null != e.reward &&
                          Object.hasOwnProperty.call(e, "reward") &&
                          t.uint32(40).int64(e.reward),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.WeeklyTop();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            r.top = e.int32();
                            break;
                          case 2:
                            r.uid = e.string();
                            break;
                          case 3:
                            r.nickname = e.string();
                            break;
                          case 4:
                            r.score = e.int64();
                            break;
                          case 5:
                            r.reward = e.int64();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.top &&
                          e.hasOwnProperty("top") &&
                          !K.isInteger(e.top)
                        ? "top: integer expected"
                        : null != e.uid &&
                          e.hasOwnProperty("uid") &&
                          !K.isString(e.uid)
                        ? "uid: string expected"
                        : null != e.nickname &&
                          e.hasOwnProperty("nickname") &&
                          !K.isString(e.nickname)
                        ? "nickname: string expected"
                        : null != e.score &&
                          e.hasOwnProperty("score") &&
                          !(
                            K.isInteger(e.score) ||
                            (e.score &&
                              K.isInteger(e.score.low) &&
                              K.isInteger(e.score.high))
                          )
                        ? "score: integer|Long expected"
                        : null != e.reward &&
                          e.hasOwnProperty("reward") &&
                          !(
                            K.isInteger(e.reward) ||
                            (e.reward &&
                              K.isInteger(e.reward.low) &&
                              K.isInteger(e.reward.high))
                          )
                        ? "reward: integer|Long expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.WeeklyTop) return e;
                      var t = new Z.game.WeeklyTop();
                      return (
                        null != e.top && (t.top = 0 | e.top),
                        null != e.uid && (t.uid = String(e.uid)),
                        null != e.nickname && (t.nickname = String(e.nickname)),
                        null != e.score &&
                          (K.Long
                            ? ((t.score = K.Long.fromValue(
                                e.score
                              )).unsigned = !1)
                            : "string" == typeof e.score
                            ? (t.score = parseInt(e.score, 10))
                            : "number" == typeof e.score
                            ? (t.score = e.score)
                            : "object" === s(e.score) &&
                              (t.score = new K.LongBits(
                                e.score.low >>> 0,
                                e.score.high >>> 0
                              ).toNumber())),
                        null != e.reward &&
                          (K.Long
                            ? ((t.reward = K.Long.fromValue(
                                e.reward
                              )).unsigned = !1)
                            : "string" == typeof e.reward
                            ? (t.reward = parseInt(e.reward, 10))
                            : "number" == typeof e.reward
                            ? (t.reward = e.reward)
                            : "object" === s(e.reward) &&
                              (t.reward = new K.LongBits(
                                e.reward.low >>> 0,
                                e.reward.high >>> 0
                              ).toNumber())),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (t.defaults) {
                        if (
                          ((n.top = 0), (n.uid = ""), (n.nickname = ""), K.Long)
                        ) {
                          var r = new K.Long(0, 0, !1);
                          n.score =
                            t.longs === String
                              ? r.toString()
                              : t.longs === Number
                              ? r.toNumber()
                              : r;
                        } else n.score = t.longs === String ? "0" : 0;
                        if (K.Long) {
                          var a = new K.Long(0, 0, !1);
                          n.reward =
                            t.longs === String
                              ? a.toString()
                              : t.longs === Number
                              ? a.toNumber()
                              : a;
                        } else n.reward = t.longs === String ? "0" : 0;
                      }
                      return (
                        null != e.top &&
                          e.hasOwnProperty("top") &&
                          (n.top = e.top),
                        null != e.uid &&
                          e.hasOwnProperty("uid") &&
                          (n.uid = e.uid),
                        null != e.nickname &&
                          e.hasOwnProperty("nickname") &&
                          (n.nickname = e.nickname),
                        null != e.score &&
                          e.hasOwnProperty("score") &&
                          ("number" == typeof e.score
                            ? (n.score =
                                t.longs === String ? String(e.score) : e.score)
                            : (n.score =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.score)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.score.low >>> 0,
                                      e.score.high >>> 0
                                    ).toNumber()
                                  : e.score)),
                        null != e.reward &&
                          e.hasOwnProperty("reward") &&
                          ("number" == typeof e.reward
                            ? (n.reward =
                                t.longs === String
                                  ? String(e.reward)
                                  : e.reward)
                            : (n.reward =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.reward)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.reward.low >>> 0,
                                      e.reward.high >>> 0
                                    ).toNumber()
                                  : e.reward)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.WeeklyTopRewardResponse = (function () {
                  function e(e) {
                    if (((this.currentWeek = []), (this.lastWeek = []), e))
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.currentWeek = K.emptyArray),
                    (e.prototype.lastWeek = K.emptyArray),
                    (e.prototype.lastWeekStatus = 0),
                    (e.prototype.timestamp = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.currentWeekOneSelf = null),
                    (e.prototype.numberOfRewards = 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      if (
                        (t || (t = Q.create()),
                        null != e.currentWeek && e.currentWeek.length)
                      )
                        for (var n = 0; n < e.currentWeek.length; ++n)
                          Z.game.WeeklyTop.encode(
                            e.currentWeek[n],
                            t.uint32(10).fork()
                          ).ldelim();
                      if (null != e.lastWeek && e.lastWeek.length)
                        for (var r = 0; r < e.lastWeek.length; ++r)
                          Z.game.WeeklyTop.encode(
                            e.lastWeek[r],
                            t.uint32(18).fork()
                          ).ldelim();
                      return (
                        null != e.lastWeekStatus &&
                          Object.hasOwnProperty.call(e, "lastWeekStatus") &&
                          t.uint32(24).int32(e.lastWeekStatus),
                        null != e.timestamp &&
                          Object.hasOwnProperty.call(e, "timestamp") &&
                          t.uint32(32).int64(e.timestamp),
                        null != e.currentWeekOneSelf &&
                          Object.hasOwnProperty.call(e, "currentWeekOneSelf") &&
                          Z.game.WeeklyTop.encode(
                            e.currentWeekOneSelf,
                            t.uint32(42).fork()
                          ).ldelim(),
                        null != e.numberOfRewards &&
                          Object.hasOwnProperty.call(e, "numberOfRewards") &&
                          t.uint32(48).int32(e.numberOfRewards),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.WeeklyTopRewardResponse();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            (r.currentWeek && r.currentWeek.length) ||
                              (r.currentWeek = []),
                              r.currentWeek.push(
                                Z.game.WeeklyTop.decode(e, e.uint32())
                              );
                            break;
                          case 2:
                            (r.lastWeek && r.lastWeek.length) ||
                              (r.lastWeek = []),
                              r.lastWeek.push(
                                Z.game.WeeklyTop.decode(e, e.uint32())
                              );
                            break;
                          case 3:
                            r.lastWeekStatus = e.int32();
                            break;
                          case 4:
                            r.timestamp = e.int64();
                            break;
                          case 5:
                            r.currentWeekOneSelf = Z.game.WeeklyTop.decode(
                              e,
                              e.uint32()
                            );
                            break;
                          case 6:
                            r.numberOfRewards = e.int32();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      if ("object" !== s(e) || null === e)
                        return "object expected";
                      if (
                        null != e.currentWeek &&
                        e.hasOwnProperty("currentWeek")
                      ) {
                        if (!Array.isArray(e.currentWeek))
                          return "currentWeek: array expected";
                        for (var t = 0; t < e.currentWeek.length; ++t) {
                          var n = Z.game.WeeklyTop.verify(e.currentWeek[t]);
                          if (n) return "currentWeek." + n;
                        }
                      }
                      if (null != e.lastWeek && e.hasOwnProperty("lastWeek")) {
                        if (!Array.isArray(e.lastWeek))
                          return "lastWeek: array expected";
                        for (var r = 0; r < e.lastWeek.length; ++r) {
                          var a = Z.game.WeeklyTop.verify(e.lastWeek[r]);
                          if (a) return "lastWeek." + a;
                        }
                      }
                      if (
                        null != e.lastWeekStatus &&
                        e.hasOwnProperty("lastWeekStatus") &&
                        !K.isInteger(e.lastWeekStatus)
                      )
                        return "lastWeekStatus: integer expected";
                      if (
                        null != e.timestamp &&
                        e.hasOwnProperty("timestamp") &&
                        !(
                          K.isInteger(e.timestamp) ||
                          (e.timestamp &&
                            K.isInteger(e.timestamp.low) &&
                            K.isInteger(e.timestamp.high))
                        )
                      )
                        return "timestamp: integer|Long expected";
                      if (
                        null != e.currentWeekOneSelf &&
                        e.hasOwnProperty("currentWeekOneSelf")
                      ) {
                        var i = Z.game.WeeklyTop.verify(e.currentWeekOneSelf);
                        if (i) return "currentWeekOneSelf." + i;
                      }
                      return null != e.numberOfRewards &&
                        e.hasOwnProperty("numberOfRewards") &&
                        !K.isInteger(e.numberOfRewards)
                        ? "numberOfRewards: integer expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.WeeklyTopRewardResponse) return e;
                      var t = new Z.game.WeeklyTopRewardResponse();
                      if (e.currentWeek) {
                        if (!Array.isArray(e.currentWeek))
                          throw TypeError(
                            ".game.WeeklyTopRewardResponse.currentWeek: array expected"
                          );
                        t.currentWeek = [];
                        for (var n = 0; n < e.currentWeek.length; ++n) {
                          if ("object" !== s(e.currentWeek[n]))
                            throw TypeError(
                              ".game.WeeklyTopRewardResponse.currentWeek: object expected"
                            );
                          t.currentWeek[n] = Z.game.WeeklyTop.fromObject(
                            e.currentWeek[n]
                          );
                        }
                      }
                      if (e.lastWeek) {
                        if (!Array.isArray(e.lastWeek))
                          throw TypeError(
                            ".game.WeeklyTopRewardResponse.lastWeek: array expected"
                          );
                        t.lastWeek = [];
                        for (var r = 0; r < e.lastWeek.length; ++r) {
                          if ("object" !== s(e.lastWeek[r]))
                            throw TypeError(
                              ".game.WeeklyTopRewardResponse.lastWeek: object expected"
                            );
                          t.lastWeek[r] = Z.game.WeeklyTop.fromObject(
                            e.lastWeek[r]
                          );
                        }
                      }
                      if (
                        (null != e.lastWeekStatus &&
                          (t.lastWeekStatus = 0 | e.lastWeekStatus),
                        null != e.timestamp &&
                          (K.Long
                            ? ((t.timestamp = K.Long.fromValue(
                                e.timestamp
                              )).unsigned = !1)
                            : "string" == typeof e.timestamp
                            ? (t.timestamp = parseInt(e.timestamp, 10))
                            : "number" == typeof e.timestamp
                            ? (t.timestamp = e.timestamp)
                            : "object" === s(e.timestamp) &&
                              (t.timestamp = new K.LongBits(
                                e.timestamp.low >>> 0,
                                e.timestamp.high >>> 0
                              ).toNumber())),
                        null != e.currentWeekOneSelf)
                      ) {
                        if ("object" !== s(e.currentWeekOneSelf))
                          throw TypeError(
                            ".game.WeeklyTopRewardResponse.currentWeekOneSelf: object expected"
                          );
                        t.currentWeekOneSelf = Z.game.WeeklyTop.fromObject(
                          e.currentWeekOneSelf
                        );
                      }
                      return (
                        null != e.numberOfRewards &&
                          (t.numberOfRewards = 0 | e.numberOfRewards),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (
                        ((t.arrays || t.defaults) &&
                          ((n.currentWeek = []), (n.lastWeek = [])),
                        t.defaults)
                      ) {
                        if (((n.lastWeekStatus = 0), K.Long)) {
                          var r = new K.Long(0, 0, !1);
                          n.timestamp =
                            t.longs === String
                              ? r.toString()
                              : t.longs === Number
                              ? r.toNumber()
                              : r;
                        } else n.timestamp = t.longs === String ? "0" : 0;
                        (n.currentWeekOneSelf = null), (n.numberOfRewards = 0);
                      }
                      if (e.currentWeek && e.currentWeek.length) {
                        n.currentWeek = [];
                        for (var a = 0; a < e.currentWeek.length; ++a)
                          n.currentWeek[a] = Z.game.WeeklyTop.toObject(
                            e.currentWeek[a],
                            t
                          );
                      }
                      if (e.lastWeek && e.lastWeek.length) {
                        n.lastWeek = [];
                        for (var i = 0; i < e.lastWeek.length; ++i)
                          n.lastWeek[i] = Z.game.WeeklyTop.toObject(
                            e.lastWeek[i],
                            t
                          );
                      }
                      return (
                        null != e.lastWeekStatus &&
                          e.hasOwnProperty("lastWeekStatus") &&
                          (n.lastWeekStatus = e.lastWeekStatus),
                        null != e.timestamp &&
                          e.hasOwnProperty("timestamp") &&
                          ("number" == typeof e.timestamp
                            ? (n.timestamp =
                                t.longs === String
                                  ? String(e.timestamp)
                                  : e.timestamp)
                            : (n.timestamp =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.timestamp)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.timestamp.low >>> 0,
                                      e.timestamp.high >>> 0
                                    ).toNumber()
                                  : e.timestamp)),
                        null != e.currentWeekOneSelf &&
                          e.hasOwnProperty("currentWeekOneSelf") &&
                          (n.currentWeekOneSelf = Z.game.WeeklyTop.toObject(
                            e.currentWeekOneSelf,
                            t
                          )),
                        null != e.numberOfRewards &&
                          e.hasOwnProperty("numberOfRewards") &&
                          (n.numberOfRewards = e.numberOfRewards),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.TakeWeeklyTopRewardRequest = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return t || (t = Q.create()), t;
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.TakeWeeklyTopRewardRequest();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        e.skipType(7 & a);
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      return e instanceof Z.game.TakeWeeklyTopRewardRequest
                        ? e
                        : new Z.game.TakeWeeklyTopRewardRequest();
                    }),
                    (e.toObject = function () {
                      return {};
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.TakeWeeklyTopRewardResponse = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.result = 0),
                    (e.prototype.reward = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.balance = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.result &&
                          Object.hasOwnProperty.call(e, "result") &&
                          t.uint32(8).int32(e.result),
                        null != e.reward &&
                          Object.hasOwnProperty.call(e, "reward") &&
                          t.uint32(16).int64(e.reward),
                        null != e.balance &&
                          Object.hasOwnProperty.call(e, "balance") &&
                          t.uint32(24).int64(e.balance),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.TakeWeeklyTopRewardResponse();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            r.result = e.int32();
                            break;
                          case 2:
                            r.reward = e.int64();
                            break;
                          case 3:
                            r.balance = e.int64();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.result &&
                          e.hasOwnProperty("result") &&
                          !K.isInteger(e.result)
                        ? "result: integer expected"
                        : null != e.reward &&
                          e.hasOwnProperty("reward") &&
                          !(
                            K.isInteger(e.reward) ||
                            (e.reward &&
                              K.isInteger(e.reward.low) &&
                              K.isInteger(e.reward.high))
                          )
                        ? "reward: integer|Long expected"
                        : null != e.balance &&
                          e.hasOwnProperty("balance") &&
                          !(
                            K.isInteger(e.balance) ||
                            (e.balance &&
                              K.isInteger(e.balance.low) &&
                              K.isInteger(e.balance.high))
                          )
                        ? "balance: integer|Long expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.TakeWeeklyTopRewardResponse)
                        return e;
                      var t = new Z.game.TakeWeeklyTopRewardResponse();
                      return (
                        null != e.result && (t.result = 0 | e.result),
                        null != e.reward &&
                          (K.Long
                            ? ((t.reward = K.Long.fromValue(
                                e.reward
                              )).unsigned = !1)
                            : "string" == typeof e.reward
                            ? (t.reward = parseInt(e.reward, 10))
                            : "number" == typeof e.reward
                            ? (t.reward = e.reward)
                            : "object" === s(e.reward) &&
                              (t.reward = new K.LongBits(
                                e.reward.low >>> 0,
                                e.reward.high >>> 0
                              ).toNumber())),
                        null != e.balance &&
                          (K.Long
                            ? ((t.balance = K.Long.fromValue(
                                e.balance
                              )).unsigned = !1)
                            : "string" == typeof e.balance
                            ? (t.balance = parseInt(e.balance, 10))
                            : "number" == typeof e.balance
                            ? (t.balance = e.balance)
                            : "object" === s(e.balance) &&
                              (t.balance = new K.LongBits(
                                e.balance.low >>> 0,
                                e.balance.high >>> 0
                              ).toNumber())),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (t.defaults) {
                        if (((n.result = 0), K.Long)) {
                          var r = new K.Long(0, 0, !1);
                          n.reward =
                            t.longs === String
                              ? r.toString()
                              : t.longs === Number
                              ? r.toNumber()
                              : r;
                        } else n.reward = t.longs === String ? "0" : 0;
                        if (K.Long) {
                          var a = new K.Long(0, 0, !1);
                          n.balance =
                            t.longs === String
                              ? a.toString()
                              : t.longs === Number
                              ? a.toNumber()
                              : a;
                        } else n.balance = t.longs === String ? "0" : 0;
                      }
                      return (
                        null != e.result &&
                          e.hasOwnProperty("result") &&
                          (n.result = e.result),
                        null != e.reward &&
                          e.hasOwnProperty("reward") &&
                          ("number" == typeof e.reward
                            ? (n.reward =
                                t.longs === String
                                  ? String(e.reward)
                                  : e.reward)
                            : (n.reward =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.reward)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.reward.low >>> 0,
                                      e.reward.high >>> 0
                                    ).toNumber()
                                  : e.reward)),
                        null != e.balance &&
                          e.hasOwnProperty("balance") &&
                          ("number" == typeof e.balance
                            ? (n.balance =
                                t.longs === String
                                  ? String(e.balance)
                                  : e.balance)
                            : (n.balance =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.balance)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.balance.low >>> 0,
                                      e.balance.high >>> 0
                                    ).toNumber()
                                  : e.balance)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.RankListRequest = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.rankType = 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.rankType &&
                          Object.hasOwnProperty.call(e, "rankType") &&
                          t.uint32(8).int32(e.rankType),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.RankListRequest();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        if (a >>> 3 == 1) r.rankType = e.int32();
                        else e.skipType(7 & a);
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      if ("object" !== s(e) || null === e)
                        return "object expected";
                      if (null != e.rankType && e.hasOwnProperty("rankType"))
                        switch (e.rankType) {
                          default:
                            return "rankType: enum value expected";
                          case 0:
                          case 1:
                          case 2:
                        }
                      return null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.RankListRequest) return e;
                      var t = new Z.game.RankListRequest();
                      switch (e.rankType) {
                        case "RankTypeMultiplier":
                        case 0:
                          t.rankType = 0;
                          break;
                        case "RankTypeCashOutMultiplier":
                        case 1:
                          t.rankType = 1;
                          break;
                        case "RankTypeCashOutPoint":
                        case 2:
                          t.rankType = 2;
                      }
                      return t;
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      return (
                        t.defaults &&
                          (n.rankType =
                            t.enums === String ? "RankTypeMultiplier" : 0),
                        null != e.rankType &&
                          e.hasOwnProperty("rankType") &&
                          (n.rankType =
                            t.enums === String
                              ? Z.game.RankListRequest.RankType[e.rankType]
                              : e.rankType),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    (e.RankType = (function () {
                      var e = {},
                        t = Object.create(e);
                      return (
                        (t[(e[0] = "RankTypeMultiplier")] = 0),
                        (t[(e[1] = "RankTypeCashOutMultiplier")] = 1),
                        (t[(e[2] = "RankTypeCashOutPoint")] = 2),
                        t
                      );
                    })()),
                    e
                  );
                })()),
                (n.Rank = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.rank = 0),
                    (e.prototype.nickname = ""),
                    (e.prototype.score = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.uid = ""),
                    (e.prototype.multiplier = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.rank &&
                          Object.hasOwnProperty.call(e, "rank") &&
                          t.uint32(8).int32(e.rank),
                        null != e.nickname &&
                          Object.hasOwnProperty.call(e, "nickname") &&
                          t.uint32(18).string(e.nickname),
                        null != e.score &&
                          Object.hasOwnProperty.call(e, "score") &&
                          t.uint32(24).int64(e.score),
                        null != e.uid &&
                          Object.hasOwnProperty.call(e, "uid") &&
                          t.uint32(34).string(e.uid),
                        null != e.multiplier &&
                          Object.hasOwnProperty.call(e, "multiplier") &&
                          t.uint32(40).int64(e.multiplier),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.Rank();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            r.rank = e.int32();
                            break;
                          case 2:
                            r.nickname = e.string();
                            break;
                          case 3:
                            r.score = e.int64();
                            break;
                          case 4:
                            r.uid = e.string();
                            break;
                          case 5:
                            r.multiplier = e.int64();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.rank &&
                          e.hasOwnProperty("rank") &&
                          !K.isInteger(e.rank)
                        ? "rank: integer expected"
                        : null != e.nickname &&
                          e.hasOwnProperty("nickname") &&
                          !K.isString(e.nickname)
                        ? "nickname: string expected"
                        : null != e.score &&
                          e.hasOwnProperty("score") &&
                          !(
                            K.isInteger(e.score) ||
                            (e.score &&
                              K.isInteger(e.score.low) &&
                              K.isInteger(e.score.high))
                          )
                        ? "score: integer|Long expected"
                        : null != e.uid &&
                          e.hasOwnProperty("uid") &&
                          !K.isString(e.uid)
                        ? "uid: string expected"
                        : null != e.multiplier &&
                          e.hasOwnProperty("multiplier") &&
                          !(
                            K.isInteger(e.multiplier) ||
                            (e.multiplier &&
                              K.isInteger(e.multiplier.low) &&
                              K.isInteger(e.multiplier.high))
                          )
                        ? "multiplier: integer|Long expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.Rank) return e;
                      var t = new Z.game.Rank();
                      return (
                        null != e.rank && (t.rank = 0 | e.rank),
                        null != e.nickname && (t.nickname = String(e.nickname)),
                        null != e.score &&
                          (K.Long
                            ? ((t.score = K.Long.fromValue(
                                e.score
                              )).unsigned = !1)
                            : "string" == typeof e.score
                            ? (t.score = parseInt(e.score, 10))
                            : "number" == typeof e.score
                            ? (t.score = e.score)
                            : "object" === s(e.score) &&
                              (t.score = new K.LongBits(
                                e.score.low >>> 0,
                                e.score.high >>> 0
                              ).toNumber())),
                        null != e.uid && (t.uid = String(e.uid)),
                        null != e.multiplier &&
                          (K.Long
                            ? ((t.multiplier = K.Long.fromValue(
                                e.multiplier
                              )).unsigned = !1)
                            : "string" == typeof e.multiplier
                            ? (t.multiplier = parseInt(e.multiplier, 10))
                            : "number" == typeof e.multiplier
                            ? (t.multiplier = e.multiplier)
                            : "object" === s(e.multiplier) &&
                              (t.multiplier = new K.LongBits(
                                e.multiplier.low >>> 0,
                                e.multiplier.high >>> 0
                              ).toNumber())),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (t.defaults) {
                        if (((n.rank = 0), (n.nickname = ""), K.Long)) {
                          var r = new K.Long(0, 0, !1);
                          n.score =
                            t.longs === String
                              ? r.toString()
                              : t.longs === Number
                              ? r.toNumber()
                              : r;
                        } else n.score = t.longs === String ? "0" : 0;
                        if (((n.uid = ""), K.Long)) {
                          var a = new K.Long(0, 0, !1);
                          n.multiplier =
                            t.longs === String
                              ? a.toString()
                              : t.longs === Number
                              ? a.toNumber()
                              : a;
                        } else n.multiplier = t.longs === String ? "0" : 0;
                      }
                      return (
                        null != e.rank &&
                          e.hasOwnProperty("rank") &&
                          (n.rank = e.rank),
                        null != e.nickname &&
                          e.hasOwnProperty("nickname") &&
                          (n.nickname = e.nickname),
                        null != e.score &&
                          e.hasOwnProperty("score") &&
                          ("number" == typeof e.score
                            ? (n.score =
                                t.longs === String ? String(e.score) : e.score)
                            : (n.score =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.score)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.score.low >>> 0,
                                      e.score.high >>> 0
                                    ).toNumber()
                                  : e.score)),
                        null != e.uid &&
                          e.hasOwnProperty("uid") &&
                          (n.uid = e.uid),
                        null != e.multiplier &&
                          e.hasOwnProperty("multiplier") &&
                          ("number" == typeof e.multiplier
                            ? (n.multiplier =
                                t.longs === String
                                  ? String(e.multiplier)
                                  : e.multiplier)
                            : (n.multiplier =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.multiplier)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.multiplier.low >>> 0,
                                      e.multiplier.high >>> 0
                                    ).toNumber()
                                  : e.multiplier)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.RankListResponse = (function () {
                  function e(e) {
                    if (
                      ((this.daily = []),
                      (this.weekly = []),
                      (this.monthly = []),
                      (this.yearly = []),
                      e)
                    )
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.daily = K.emptyArray),
                    (e.prototype.weekly = K.emptyArray),
                    (e.prototype.monthly = K.emptyArray),
                    (e.prototype.yearly = K.emptyArray),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      if (
                        (t || (t = Q.create()),
                        null != e.daily && e.daily.length)
                      )
                        for (var n = 0; n < e.daily.length; ++n)
                          Z.game.Rank.encode(
                            e.daily[n],
                            t.uint32(10).fork()
                          ).ldelim();
                      if (null != e.weekly && e.weekly.length)
                        for (var r = 0; r < e.weekly.length; ++r)
                          Z.game.Rank.encode(
                            e.weekly[r],
                            t.uint32(18).fork()
                          ).ldelim();
                      if (null != e.monthly && e.monthly.length)
                        for (var a = 0; a < e.monthly.length; ++a)
                          Z.game.Rank.encode(
                            e.monthly[a],
                            t.uint32(26).fork()
                          ).ldelim();
                      if (null != e.yearly && e.yearly.length)
                        for (var i = 0; i < e.yearly.length; ++i)
                          Z.game.Rank.encode(
                            e.yearly[i],
                            t.uint32(34).fork()
                          ).ldelim();
                      return t;
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.RankListResponse();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            (r.daily && r.daily.length) || (r.daily = []),
                              r.daily.push(Z.game.Rank.decode(e, e.uint32()));
                            break;
                          case 2:
                            (r.weekly && r.weekly.length) || (r.weekly = []),
                              r.weekly.push(Z.game.Rank.decode(e, e.uint32()));
                            break;
                          case 3:
                            (r.monthly && r.monthly.length) || (r.monthly = []),
                              r.monthly.push(Z.game.Rank.decode(e, e.uint32()));
                            break;
                          case 4:
                            (r.yearly && r.yearly.length) || (r.yearly = []),
                              r.yearly.push(Z.game.Rank.decode(e, e.uint32()));
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      if ("object" !== s(e) || null === e)
                        return "object expected";
                      if (null != e.daily && e.hasOwnProperty("daily")) {
                        if (!Array.isArray(e.daily))
                          return "daily: array expected";
                        for (var t = 0; t < e.daily.length; ++t) {
                          var n = Z.game.Rank.verify(e.daily[t]);
                          if (n) return "daily." + n;
                        }
                      }
                      if (null != e.weekly && e.hasOwnProperty("weekly")) {
                        if (!Array.isArray(e.weekly))
                          return "weekly: array expected";
                        for (var r = 0; r < e.weekly.length; ++r) {
                          var a = Z.game.Rank.verify(e.weekly[r]);
                          if (a) return "weekly." + a;
                        }
                      }
                      if (null != e.monthly && e.hasOwnProperty("monthly")) {
                        if (!Array.isArray(e.monthly))
                          return "monthly: array expected";
                        for (var i = 0; i < e.monthly.length; ++i) {
                          var o = Z.game.Rank.verify(e.monthly[i]);
                          if (o) return "monthly." + o;
                        }
                      }
                      if (null != e.yearly && e.hasOwnProperty("yearly")) {
                        if (!Array.isArray(e.yearly))
                          return "yearly: array expected";
                        for (var l = 0; l < e.yearly.length; ++l) {
                          var c = Z.game.Rank.verify(e.yearly[l]);
                          if (c) return "yearly." + c;
                        }
                      }
                      return null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.RankListResponse) return e;
                      var t = new Z.game.RankListResponse();
                      if (e.daily) {
                        if (!Array.isArray(e.daily))
                          throw TypeError(
                            ".game.RankListResponse.daily: array expected"
                          );
                        t.daily = [];
                        for (var n = 0; n < e.daily.length; ++n) {
                          if ("object" !== s(e.daily[n]))
                            throw TypeError(
                              ".game.RankListResponse.daily: object expected"
                            );
                          t.daily[n] = Z.game.Rank.fromObject(e.daily[n]);
                        }
                      }
                      if (e.weekly) {
                        if (!Array.isArray(e.weekly))
                          throw TypeError(
                            ".game.RankListResponse.weekly: array expected"
                          );
                        t.weekly = [];
                        for (var r = 0; r < e.weekly.length; ++r) {
                          if ("object" !== s(e.weekly[r]))
                            throw TypeError(
                              ".game.RankListResponse.weekly: object expected"
                            );
                          t.weekly[r] = Z.game.Rank.fromObject(e.weekly[r]);
                        }
                      }
                      if (e.monthly) {
                        if (!Array.isArray(e.monthly))
                          throw TypeError(
                            ".game.RankListResponse.monthly: array expected"
                          );
                        t.monthly = [];
                        for (var a = 0; a < e.monthly.length; ++a) {
                          if ("object" !== s(e.monthly[a]))
                            throw TypeError(
                              ".game.RankListResponse.monthly: object expected"
                            );
                          t.monthly[a] = Z.game.Rank.fromObject(e.monthly[a]);
                        }
                      }
                      if (e.yearly) {
                        if (!Array.isArray(e.yearly))
                          throw TypeError(
                            ".game.RankListResponse.yearly: array expected"
                          );
                        t.yearly = [];
                        for (var i = 0; i < e.yearly.length; ++i) {
                          if ("object" !== s(e.yearly[i]))
                            throw TypeError(
                              ".game.RankListResponse.yearly: object expected"
                            );
                          t.yearly[i] = Z.game.Rank.fromObject(e.yearly[i]);
                        }
                      }
                      return t;
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (
                        ((t.arrays || t.defaults) &&
                          ((n.daily = []),
                          (n.weekly = []),
                          (n.monthly = []),
                          (n.yearly = [])),
                        e.daily && e.daily.length)
                      ) {
                        n.daily = [];
                        for (var r = 0; r < e.daily.length; ++r)
                          n.daily[r] = Z.game.Rank.toObject(e.daily[r], t);
                      }
                      if (e.weekly && e.weekly.length) {
                        n.weekly = [];
                        for (var a = 0; a < e.weekly.length; ++a)
                          n.weekly[a] = Z.game.Rank.toObject(e.weekly[a], t);
                      }
                      if (e.monthly && e.monthly.length) {
                        n.monthly = [];
                        for (var i = 0; i < e.monthly.length; ++i)
                          n.monthly[i] = Z.game.Rank.toObject(e.monthly[i], t);
                      }
                      if (e.yearly && e.yearly.length) {
                        n.yearly = [];
                        for (var o = 0; o < e.yearly.length; ++o)
                          n.yearly[o] = Z.game.Rank.toObject(e.yearly[o], t);
                      }
                      return n;
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.LogoutResponse = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.type = 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.type &&
                          Object.hasOwnProperty.call(e, "type") &&
                          t.uint32(8).int32(e.type),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.LogoutResponse();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        if (a >>> 3 == 1) r.type = e.int32();
                        else e.skipType(7 & a);
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.type &&
                          e.hasOwnProperty("type") &&
                          0 !== e.type
                        ? "type: enum value expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.LogoutResponse) return e;
                      var t = new Z.game.LogoutResponse();
                      switch (e.type) {
                        case "NEW_CONNECT_KICK_OUT":
                        case 0:
                          t.type = 0;
                      }
                      return t;
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      return (
                        t.defaults &&
                          (n.type =
                            t.enums === String ? "NEW_CONNECT_KICK_OUT" : 0),
                        null != e.type &&
                          e.hasOwnProperty("type") &&
                          (n.type =
                            t.enums === String
                              ? Z.game.LogoutResponse.LOGOUT_TYPE_ENUM[e.type]
                              : e.type),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    (e.LOGOUT_TYPE_ENUM = (function () {
                      var e = {},
                        t = Object.create(e);
                      return (t[(e[0] = "NEW_CONNECT_KICK_OUT")] = 0), t;
                    })()),
                    e
                  );
                })()),
                (n.PersonalLossLimitResponse = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.limitType = 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.limitType &&
                          Object.hasOwnProperty.call(e, "limitType") &&
                          t.uint32(8).int32(e.limitType),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.PersonalLossLimitResponse();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        if (a >>> 3 == 1) r.limitType = e.int32();
                        else e.skipType(7 & a);
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.limitType &&
                          e.hasOwnProperty("limitType") &&
                          !K.isInteger(e.limitType)
                        ? "limitType: integer expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.PersonalLossLimitResponse)
                        return e;
                      var t = new Z.game.PersonalLossLimitResponse();
                      return (
                        null != e.limitType && (t.limitType = 0 | e.limitType),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      return (
                        t.defaults && (n.limitType = 0),
                        null != e.limitType &&
                          e.hasOwnProperty("limitType") &&
                          (n.limitType = e.limitType),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.BroadcastChipInResponse = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.item = null),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.item &&
                          Object.hasOwnProperty.call(e, "item") &&
                          Z.game.ChipInResult.encode(
                            e.item,
                            t.uint32(10).fork()
                          ).ldelim(),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.BroadcastChipInResponse();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        if (a >>> 3 == 1)
                          r.item = Z.game.ChipInResult.decode(e, e.uint32());
                        else e.skipType(7 & a);
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      if ("object" !== s(e) || null === e)
                        return "object expected";
                      if (null != e.item && e.hasOwnProperty("item")) {
                        var t = Z.game.ChipInResult.verify(e.item);
                        if (t) return "item." + t;
                      }
                      return null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.BroadcastChipInResponse) return e;
                      var t = new Z.game.BroadcastChipInResponse();
                      if (null != e.item) {
                        if ("object" !== s(e.item))
                          throw TypeError(
                            ".game.BroadcastChipInResponse.item: object expected"
                          );
                        t.item = Z.game.ChipInResult.fromObject(e.item);
                      }
                      return t;
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      return (
                        t.defaults && (n.item = null),
                        null != e.item &&
                          e.hasOwnProperty("item") &&
                          (n.item = Z.game.ChipInResult.toObject(e.item, t)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.GroupCashOutRequest = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.site = 0),
                    (e.prototype.clientMultiplier = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.auto = !1),
                    (e.prototype.pingTime = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.betId = ""),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.site &&
                          Object.hasOwnProperty.call(e, "site") &&
                          t.uint32(8).int32(e.site),
                        null != e.clientMultiplier &&
                          Object.hasOwnProperty.call(e, "clientMultiplier") &&
                          t.uint32(16).int64(e.clientMultiplier),
                        null != e.auto &&
                          Object.hasOwnProperty.call(e, "auto") &&
                          t.uint32(24).bool(e.auto),
                        null != e.pingTime &&
                          Object.hasOwnProperty.call(e, "pingTime") &&
                          t.uint32(32).int64(e.pingTime),
                        null != e.betId &&
                          Object.hasOwnProperty.call(e, "betId") &&
                          t.uint32(42).string(e.betId),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.GroupCashOutRequest();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            r.site = e.int32();
                            break;
                          case 2:
                            r.clientMultiplier = e.int64();
                            break;
                          case 3:
                            r.auto = e.bool();
                            break;
                          case 4:
                            r.pingTime = e.int64();
                            break;
                          case 5:
                            r.betId = e.string();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.site &&
                          e.hasOwnProperty("site") &&
                          !K.isInteger(e.site)
                        ? "site: integer expected"
                        : null != e.clientMultiplier &&
                          e.hasOwnProperty("clientMultiplier") &&
                          !(
                            K.isInteger(e.clientMultiplier) ||
                            (e.clientMultiplier &&
                              K.isInteger(e.clientMultiplier.low) &&
                              K.isInteger(e.clientMultiplier.high))
                          )
                        ? "clientMultiplier: integer|Long expected"
                        : null != e.auto &&
                          e.hasOwnProperty("auto") &&
                          "boolean" != typeof e.auto
                        ? "auto: boolean expected"
                        : null != e.pingTime &&
                          e.hasOwnProperty("pingTime") &&
                          !(
                            K.isInteger(e.pingTime) ||
                            (e.pingTime &&
                              K.isInteger(e.pingTime.low) &&
                              K.isInteger(e.pingTime.high))
                          )
                        ? "pingTime: integer|Long expected"
                        : null != e.betId &&
                          e.hasOwnProperty("betId") &&
                          !K.isString(e.betId)
                        ? "betId: string expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.GroupCashOutRequest) return e;
                      var t = new Z.game.GroupCashOutRequest();
                      return (
                        null != e.site && (t.site = 0 | e.site),
                        null != e.clientMultiplier &&
                          (K.Long
                            ? ((t.clientMultiplier = K.Long.fromValue(
                                e.clientMultiplier
                              )).unsigned = !1)
                            : "string" == typeof e.clientMultiplier
                            ? (t.clientMultiplier = parseInt(
                                e.clientMultiplier,
                                10
                              ))
                            : "number" == typeof e.clientMultiplier
                            ? (t.clientMultiplier = e.clientMultiplier)
                            : "object" === s(e.clientMultiplier) &&
                              (t.clientMultiplier = new K.LongBits(
                                e.clientMultiplier.low >>> 0,
                                e.clientMultiplier.high >>> 0
                              ).toNumber())),
                        null != e.auto && (t.auto = Boolean(e.auto)),
                        null != e.pingTime &&
                          (K.Long
                            ? ((t.pingTime = K.Long.fromValue(
                                e.pingTime
                              )).unsigned = !1)
                            : "string" == typeof e.pingTime
                            ? (t.pingTime = parseInt(e.pingTime, 10))
                            : "number" == typeof e.pingTime
                            ? (t.pingTime = e.pingTime)
                            : "object" === s(e.pingTime) &&
                              (t.pingTime = new K.LongBits(
                                e.pingTime.low >>> 0,
                                e.pingTime.high >>> 0
                              ).toNumber())),
                        null != e.betId && (t.betId = String(e.betId)),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (t.defaults) {
                        if (((n.site = 0), K.Long)) {
                          var r = new K.Long(0, 0, !1);
                          n.clientMultiplier =
                            t.longs === String
                              ? r.toString()
                              : t.longs === Number
                              ? r.toNumber()
                              : r;
                        } else
                          n.clientMultiplier = t.longs === String ? "0" : 0;
                        if (((n.auto = !1), K.Long)) {
                          var a = new K.Long(0, 0, !1);
                          n.pingTime =
                            t.longs === String
                              ? a.toString()
                              : t.longs === Number
                              ? a.toNumber()
                              : a;
                        } else n.pingTime = t.longs === String ? "0" : 0;
                        n.betId = "";
                      }
                      return (
                        null != e.site &&
                          e.hasOwnProperty("site") &&
                          (n.site = e.site),
                        null != e.clientMultiplier &&
                          e.hasOwnProperty("clientMultiplier") &&
                          ("number" == typeof e.clientMultiplier
                            ? (n.clientMultiplier =
                                t.longs === String
                                  ? String(e.clientMultiplier)
                                  : e.clientMultiplier)
                            : (n.clientMultiplier =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(
                                      e.clientMultiplier
                                    )
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.clientMultiplier.low >>> 0,
                                      e.clientMultiplier.high >>> 0
                                    ).toNumber()
                                  : e.clientMultiplier)),
                        null != e.auto &&
                          e.hasOwnProperty("auto") &&
                          (n.auto = e.auto),
                        null != e.pingTime &&
                          e.hasOwnProperty("pingTime") &&
                          ("number" == typeof e.pingTime
                            ? (n.pingTime =
                                t.longs === String
                                  ? String(e.pingTime)
                                  : e.pingTime)
                            : (n.pingTime =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.pingTime)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.pingTime.low >>> 0,
                                      e.pingTime.high >>> 0
                                    ).toNumber()
                                  : e.pingTime)),
                        null != e.betId &&
                          e.hasOwnProperty("betId") &&
                          (n.betId = e.betId),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.GroupCashOutResponse = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.transactionId = ""),
                    (e.prototype.balance = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.multiplier = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.award = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.site = 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.transactionId &&
                          Object.hasOwnProperty.call(e, "transactionId") &&
                          t.uint32(10).string(e.transactionId),
                        null != e.balance &&
                          Object.hasOwnProperty.call(e, "balance") &&
                          t.uint32(16).int64(e.balance),
                        null != e.multiplier &&
                          Object.hasOwnProperty.call(e, "multiplier") &&
                          t.uint32(24).int64(e.multiplier),
                        null != e.award &&
                          Object.hasOwnProperty.call(e, "award") &&
                          t.uint32(32).int64(e.award),
                        null != e.site &&
                          Object.hasOwnProperty.call(e, "site") &&
                          t.uint32(40).int32(e.site),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.GroupCashOutResponse();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            r.transactionId = e.string();
                            break;
                          case 2:
                            r.balance = e.int64();
                            break;
                          case 3:
                            r.multiplier = e.int64();
                            break;
                          case 4:
                            r.award = e.int64();
                            break;
                          case 5:
                            r.site = e.int32();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.transactionId &&
                          e.hasOwnProperty("transactionId") &&
                          !K.isString(e.transactionId)
                        ? "transactionId: string expected"
                        : null != e.balance &&
                          e.hasOwnProperty("balance") &&
                          !(
                            K.isInteger(e.balance) ||
                            (e.balance &&
                              K.isInteger(e.balance.low) &&
                              K.isInteger(e.balance.high))
                          )
                        ? "balance: integer|Long expected"
                        : null != e.multiplier &&
                          e.hasOwnProperty("multiplier") &&
                          !(
                            K.isInteger(e.multiplier) ||
                            (e.multiplier &&
                              K.isInteger(e.multiplier.low) &&
                              K.isInteger(e.multiplier.high))
                          )
                        ? "multiplier: integer|Long expected"
                        : null != e.award &&
                          e.hasOwnProperty("award") &&
                          !(
                            K.isInteger(e.award) ||
                            (e.award &&
                              K.isInteger(e.award.low) &&
                              K.isInteger(e.award.high))
                          )
                        ? "award: integer|Long expected"
                        : null != e.site &&
                          e.hasOwnProperty("site") &&
                          !K.isInteger(e.site)
                        ? "site: integer expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.GroupCashOutResponse) return e;
                      var t = new Z.game.GroupCashOutResponse();
                      return (
                        null != e.transactionId &&
                          (t.transactionId = String(e.transactionId)),
                        null != e.balance &&
                          (K.Long
                            ? ((t.balance = K.Long.fromValue(
                                e.balance
                              )).unsigned = !1)
                            : "string" == typeof e.balance
                            ? (t.balance = parseInt(e.balance, 10))
                            : "number" == typeof e.balance
                            ? (t.balance = e.balance)
                            : "object" === s(e.balance) &&
                              (t.balance = new K.LongBits(
                                e.balance.low >>> 0,
                                e.balance.high >>> 0
                              ).toNumber())),
                        null != e.multiplier &&
                          (K.Long
                            ? ((t.multiplier = K.Long.fromValue(
                                e.multiplier
                              )).unsigned = !1)
                            : "string" == typeof e.multiplier
                            ? (t.multiplier = parseInt(e.multiplier, 10))
                            : "number" == typeof e.multiplier
                            ? (t.multiplier = e.multiplier)
                            : "object" === s(e.multiplier) &&
                              (t.multiplier = new K.LongBits(
                                e.multiplier.low >>> 0,
                                e.multiplier.high >>> 0
                              ).toNumber())),
                        null != e.award &&
                          (K.Long
                            ? ((t.award = K.Long.fromValue(
                                e.award
                              )).unsigned = !1)
                            : "string" == typeof e.award
                            ? (t.award = parseInt(e.award, 10))
                            : "number" == typeof e.award
                            ? (t.award = e.award)
                            : "object" === s(e.award) &&
                              (t.award = new K.LongBits(
                                e.award.low >>> 0,
                                e.award.high >>> 0
                              ).toNumber())),
                        null != e.site && (t.site = 0 | e.site),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (t.defaults) {
                        if (((n.transactionId = ""), K.Long)) {
                          var r = new K.Long(0, 0, !1);
                          n.balance =
                            t.longs === String
                              ? r.toString()
                              : t.longs === Number
                              ? r.toNumber()
                              : r;
                        } else n.balance = t.longs === String ? "0" : 0;
                        if (K.Long) {
                          var a = new K.Long(0, 0, !1);
                          n.multiplier =
                            t.longs === String
                              ? a.toString()
                              : t.longs === Number
                              ? a.toNumber()
                              : a;
                        } else n.multiplier = t.longs === String ? "0" : 0;
                        if (K.Long) {
                          var i = new K.Long(0, 0, !1);
                          n.award =
                            t.longs === String
                              ? i.toString()
                              : t.longs === Number
                              ? i.toNumber()
                              : i;
                        } else n.award = t.longs === String ? "0" : 0;
                        n.site = 0;
                      }
                      return (
                        null != e.transactionId &&
                          e.hasOwnProperty("transactionId") &&
                          (n.transactionId = e.transactionId),
                        null != e.balance &&
                          e.hasOwnProperty("balance") &&
                          ("number" == typeof e.balance
                            ? (n.balance =
                                t.longs === String
                                  ? String(e.balance)
                                  : e.balance)
                            : (n.balance =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.balance)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.balance.low >>> 0,
                                      e.balance.high >>> 0
                                    ).toNumber()
                                  : e.balance)),
                        null != e.multiplier &&
                          e.hasOwnProperty("multiplier") &&
                          ("number" == typeof e.multiplier
                            ? (n.multiplier =
                                t.longs === String
                                  ? String(e.multiplier)
                                  : e.multiplier)
                            : (n.multiplier =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.multiplier)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.multiplier.low >>> 0,
                                      e.multiplier.high >>> 0
                                    ).toNumber()
                                  : e.multiplier)),
                        null != e.award &&
                          e.hasOwnProperty("award") &&
                          ("number" == typeof e.award
                            ? (n.award =
                                t.longs === String ? String(e.award) : e.award)
                            : (n.award =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.award)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.award.low >>> 0,
                                      e.award.high >>> 0
                                    ).toNumber()
                                  : e.award)),
                        null != e.site &&
                          e.hasOwnProperty("site") &&
                          (n.site = e.site),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.BroadcastCashOutResponse = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.item = null),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.item &&
                          Object.hasOwnProperty.call(e, "item") &&
                          Z.game.ChipInResult.encode(
                            e.item,
                            t.uint32(10).fork()
                          ).ldelim(),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.BroadcastCashOutResponse();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        if (a >>> 3 == 1)
                          r.item = Z.game.ChipInResult.decode(e, e.uint32());
                        else e.skipType(7 & a);
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      if ("object" !== s(e) || null === e)
                        return "object expected";
                      if (null != e.item && e.hasOwnProperty("item")) {
                        var t = Z.game.ChipInResult.verify(e.item);
                        if (t) return "item." + t;
                      }
                      return null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.BroadcastCashOutResponse)
                        return e;
                      var t = new Z.game.BroadcastCashOutResponse();
                      if (null != e.item) {
                        if ("object" !== s(e.item))
                          throw TypeError(
                            ".game.BroadcastCashOutResponse.item: object expected"
                          );
                        t.item = Z.game.ChipInResult.fromObject(e.item);
                      }
                      return t;
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      return (
                        t.defaults && (n.item = null),
                        null != e.item &&
                          e.hasOwnProperty("item") &&
                          (n.item = Z.game.ChipInResult.toObject(e.item, t)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.BroadcastFlyingMultiplierResponse = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.multiplier = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.prototype.flyingTime = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.multiplier &&
                          Object.hasOwnProperty.call(e, "multiplier") &&
                          t.uint32(8).int64(e.multiplier),
                        null != e.flyingTime &&
                          Object.hasOwnProperty.call(e, "flyingTime") &&
                          t.uint32(16).int64(e.flyingTime),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.BroadcastFlyingMultiplierResponse();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            r.multiplier = e.int64();
                            break;
                          case 2:
                            r.flyingTime = e.int64();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.multiplier &&
                          e.hasOwnProperty("multiplier") &&
                          !(
                            K.isInteger(e.multiplier) ||
                            (e.multiplier &&
                              K.isInteger(e.multiplier.low) &&
                              K.isInteger(e.multiplier.high))
                          )
                        ? "multiplier: integer|Long expected"
                        : null != e.flyingTime &&
                          e.hasOwnProperty("flyingTime") &&
                          !(
                            K.isInteger(e.flyingTime) ||
                            (e.flyingTime &&
                              K.isInteger(e.flyingTime.low) &&
                              K.isInteger(e.flyingTime.high))
                          )
                        ? "flyingTime: integer|Long expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.BroadcastFlyingMultiplierResponse)
                        return e;
                      var t = new Z.game.BroadcastFlyingMultiplierResponse();
                      return (
                        null != e.multiplier &&
                          (K.Long
                            ? ((t.multiplier = K.Long.fromValue(
                                e.multiplier
                              )).unsigned = !1)
                            : "string" == typeof e.multiplier
                            ? (t.multiplier = parseInt(e.multiplier, 10))
                            : "number" == typeof e.multiplier
                            ? (t.multiplier = e.multiplier)
                            : "object" === s(e.multiplier) &&
                              (t.multiplier = new K.LongBits(
                                e.multiplier.low >>> 0,
                                e.multiplier.high >>> 0
                              ).toNumber())),
                        null != e.flyingTime &&
                          (K.Long
                            ? ((t.flyingTime = K.Long.fromValue(
                                e.flyingTime
                              )).unsigned = !1)
                            : "string" == typeof e.flyingTime
                            ? (t.flyingTime = parseInt(e.flyingTime, 10))
                            : "number" == typeof e.flyingTime
                            ? (t.flyingTime = e.flyingTime)
                            : "object" === s(e.flyingTime) &&
                              (t.flyingTime = new K.LongBits(
                                e.flyingTime.low >>> 0,
                                e.flyingTime.high >>> 0
                              ).toNumber())),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (t.defaults) {
                        if (K.Long) {
                          var r = new K.Long(0, 0, !1);
                          n.multiplier =
                            t.longs === String
                              ? r.toString()
                              : t.longs === Number
                              ? r.toNumber()
                              : r;
                        } else n.multiplier = t.longs === String ? "0" : 0;
                        if (K.Long) {
                          var a = new K.Long(0, 0, !1);
                          n.flyingTime =
                            t.longs === String
                              ? a.toString()
                              : t.longs === Number
                              ? a.toNumber()
                              : a;
                        } else n.flyingTime = t.longs === String ? "0" : 0;
                      }
                      return (
                        null != e.multiplier &&
                          e.hasOwnProperty("multiplier") &&
                          ("number" == typeof e.multiplier
                            ? (n.multiplier =
                                t.longs === String
                                  ? String(e.multiplier)
                                  : e.multiplier)
                            : (n.multiplier =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.multiplier)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.multiplier.low >>> 0,
                                      e.multiplier.high >>> 0
                                    ).toNumber()
                                  : e.multiplier)),
                        null != e.flyingTime &&
                          e.hasOwnProperty("flyingTime") &&
                          ("number" == typeof e.flyingTime
                            ? (n.flyingTime =
                                t.longs === String
                                  ? String(e.flyingTime)
                                  : e.flyingTime)
                            : (n.flyingTime =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.flyingTime)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.flyingTime.low >>> 0,
                                      e.flyingTime.high >>> 0
                                    ).toNumber()
                                  : e.flyingTime)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.BroadcastListRequest = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return t || (t = Q.create()), t;
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.BroadcastListRequest();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        e.skipType(7 & a);
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      return e instanceof Z.game.BroadcastListRequest
                        ? e
                        : new Z.game.BroadcastListRequest();
                    }),
                    (e.toObject = function () {
                      return {};
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.BroadcastMessage = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.id = K.Long ? K.Long.fromBits(0, 0, !1) : 0),
                    (e.prototype.gameId = 0),
                    (e.prototype.gameName = ""),
                    (e.prototype.currencyType = ""),
                    (e.prototype.contentType = ""),
                    (e.prototype.content = ""),
                    (e.prototype.createTime = K.Long
                      ? K.Long.fromBits(0, 0, !1)
                      : 0),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.id &&
                          Object.hasOwnProperty.call(e, "id") &&
                          t.uint32(8).int64(e.id),
                        null != e.gameId &&
                          Object.hasOwnProperty.call(e, "gameId") &&
                          t.uint32(16).int32(e.gameId),
                        null != e.gameName &&
                          Object.hasOwnProperty.call(e, "gameName") &&
                          t.uint32(26).string(e.gameName),
                        null != e.currencyType &&
                          Object.hasOwnProperty.call(e, "currencyType") &&
                          t.uint32(34).string(e.currencyType),
                        null != e.contentType &&
                          Object.hasOwnProperty.call(e, "contentType") &&
                          t.uint32(42).string(e.contentType),
                        null != e.content &&
                          Object.hasOwnProperty.call(e, "content") &&
                          t.uint32(50).string(e.content),
                        null != e.createTime &&
                          Object.hasOwnProperty.call(e, "createTime") &&
                          t.uint32(56).int64(e.createTime),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.BroadcastMessage();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            r.id = e.int64();
                            break;
                          case 2:
                            r.gameId = e.int32();
                            break;
                          case 3:
                            r.gameName = e.string();
                            break;
                          case 4:
                            r.currencyType = e.string();
                            break;
                          case 5:
                            r.contentType = e.string();
                            break;
                          case 6:
                            r.content = e.string();
                            break;
                          case 7:
                            r.createTime = e.int64();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      return "object" !== s(e) || null === e
                        ? "object expected"
                        : null != e.id &&
                          e.hasOwnProperty("id") &&
                          !(
                            K.isInteger(e.id) ||
                            (e.id &&
                              K.isInteger(e.id.low) &&
                              K.isInteger(e.id.high))
                          )
                        ? "id: integer|Long expected"
                        : null != e.gameId &&
                          e.hasOwnProperty("gameId") &&
                          !K.isInteger(e.gameId)
                        ? "gameId: integer expected"
                        : null != e.gameName &&
                          e.hasOwnProperty("gameName") &&
                          !K.isString(e.gameName)
                        ? "gameName: string expected"
                        : null != e.currencyType &&
                          e.hasOwnProperty("currencyType") &&
                          !K.isString(e.currencyType)
                        ? "currencyType: string expected"
                        : null != e.contentType &&
                          e.hasOwnProperty("contentType") &&
                          !K.isString(e.contentType)
                        ? "contentType: string expected"
                        : null != e.content &&
                          e.hasOwnProperty("content") &&
                          !K.isString(e.content)
                        ? "content: string expected"
                        : null != e.createTime &&
                          e.hasOwnProperty("createTime") &&
                          !(
                            K.isInteger(e.createTime) ||
                            (e.createTime &&
                              K.isInteger(e.createTime.low) &&
                              K.isInteger(e.createTime.high))
                          )
                        ? "createTime: integer|Long expected"
                        : null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.BroadcastMessage) return e;
                      var t = new Z.game.BroadcastMessage();
                      return (
                        null != e.id &&
                          (K.Long
                            ? ((t.id = K.Long.fromValue(e.id)).unsigned = !1)
                            : "string" == typeof e.id
                            ? (t.id = parseInt(e.id, 10))
                            : "number" == typeof e.id
                            ? (t.id = e.id)
                            : "object" === s(e.id) &&
                              (t.id = new K.LongBits(
                                e.id.low >>> 0,
                                e.id.high >>> 0
                              ).toNumber())),
                        null != e.gameId && (t.gameId = 0 | e.gameId),
                        null != e.gameName && (t.gameName = String(e.gameName)),
                        null != e.currencyType &&
                          (t.currencyType = String(e.currencyType)),
                        null != e.contentType &&
                          (t.contentType = String(e.contentType)),
                        null != e.content && (t.content = String(e.content)),
                        null != e.createTime &&
                          (K.Long
                            ? ((t.createTime = K.Long.fromValue(
                                e.createTime
                              )).unsigned = !1)
                            : "string" == typeof e.createTime
                            ? (t.createTime = parseInt(e.createTime, 10))
                            : "number" == typeof e.createTime
                            ? (t.createTime = e.createTime)
                            : "object" === s(e.createTime) &&
                              (t.createTime = new K.LongBits(
                                e.createTime.low >>> 0,
                                e.createTime.high >>> 0
                              ).toNumber())),
                        t
                      );
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (t.defaults) {
                        if (K.Long) {
                          var r = new K.Long(0, 0, !1);
                          n.id =
                            t.longs === String
                              ? r.toString()
                              : t.longs === Number
                              ? r.toNumber()
                              : r;
                        } else n.id = t.longs === String ? "0" : 0;
                        if (
                          ((n.gameId = 0),
                          (n.gameName = ""),
                          (n.currencyType = ""),
                          (n.contentType = ""),
                          (n.content = ""),
                          K.Long)
                        ) {
                          var a = new K.Long(0, 0, !1);
                          n.createTime =
                            t.longs === String
                              ? a.toString()
                              : t.longs === Number
                              ? a.toNumber()
                              : a;
                        } else n.createTime = t.longs === String ? "0" : 0;
                      }
                      return (
                        null != e.id &&
                          e.hasOwnProperty("id") &&
                          ("number" == typeof e.id
                            ? (n.id = t.longs === String ? String(e.id) : e.id)
                            : (n.id =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.id)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.id.low >>> 0,
                                      e.id.high >>> 0
                                    ).toNumber()
                                  : e.id)),
                        null != e.gameId &&
                          e.hasOwnProperty("gameId") &&
                          (n.gameId = e.gameId),
                        null != e.gameName &&
                          e.hasOwnProperty("gameName") &&
                          (n.gameName = e.gameName),
                        null != e.currencyType &&
                          e.hasOwnProperty("currencyType") &&
                          (n.currencyType = e.currencyType),
                        null != e.contentType &&
                          e.hasOwnProperty("contentType") &&
                          (n.contentType = e.contentType),
                        null != e.content &&
                          e.hasOwnProperty("content") &&
                          (n.content = e.content),
                        null != e.createTime &&
                          e.hasOwnProperty("createTime") &&
                          ("number" == typeof e.createTime
                            ? (n.createTime =
                                t.longs === String
                                  ? String(e.createTime)
                                  : e.createTime)
                            : (n.createTime =
                                t.longs === String
                                  ? K.Long.prototype.toString.call(e.createTime)
                                  : t.longs === Number
                                  ? new K.LongBits(
                                      e.createTime.low >>> 0,
                                      e.createTime.high >>> 0
                                    ).toNumber()
                                  : e.createTime)),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.BroadcastListResponse = (function () {
                  function e(e) {
                    if (((this.messages = []), e))
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.messages = K.emptyArray),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      if (
                        (t || (t = Q.create()),
                        null != e.messages && e.messages.length)
                      )
                        for (var n = 0; n < e.messages.length; ++n)
                          Z.game.BroadcastMessage.encode(
                            e.messages[n],
                            t.uint32(10).fork()
                          ).ldelim();
                      return t;
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.BroadcastListResponse();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        if (a >>> 3 == 1)
                          (r.messages && r.messages.length) ||
                            (r.messages = []),
                            r.messages.push(
                              Z.game.BroadcastMessage.decode(e, e.uint32())
                            );
                        else e.skipType(7 & a);
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      if ("object" !== s(e) || null === e)
                        return "object expected";
                      if (null != e.messages && e.hasOwnProperty("messages")) {
                        if (!Array.isArray(e.messages))
                          return "messages: array expected";
                        for (var t = 0; t < e.messages.length; ++t) {
                          var n = Z.game.BroadcastMessage.verify(e.messages[t]);
                          if (n) return "messages." + n;
                        }
                      }
                      return null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.BroadcastListResponse) return e;
                      var t = new Z.game.BroadcastListResponse();
                      if (e.messages) {
                        if (!Array.isArray(e.messages))
                          throw TypeError(
                            ".game.BroadcastListResponse.messages: array expected"
                          );
                        t.messages = [];
                        for (var n = 0; n < e.messages.length; ++n) {
                          if ("object" !== s(e.messages[n]))
                            throw TypeError(
                              ".game.BroadcastListResponse.messages: object expected"
                            );
                          t.messages[n] = Z.game.BroadcastMessage.fromObject(
                            e.messages[n]
                          );
                        }
                      }
                      return t;
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      if (
                        ((t.arrays || t.defaults) && (n.messages = []),
                        e.messages && e.messages.length)
                      ) {
                        n.messages = [];
                        for (var r = 0; r < e.messages.length; ++r)
                          n.messages[r] = Z.game.BroadcastMessage.toObject(
                            e.messages[r],
                            t
                          );
                      }
                      return n;
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                (n.BroadcastResponse = (function () {
                  function e(e) {
                    if (e)
                      for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (
                    (e.prototype.message = null),
                    (e.create = function (t) {
                      return new e(t);
                    }),
                    (e.encode = function (e, t) {
                      return (
                        t || (t = Q.create()),
                        null != e.message &&
                          Object.hasOwnProperty.call(e, "message") &&
                          Z.game.BroadcastMessage.encode(
                            e.message,
                            t.uint32(10).fork()
                          ).ldelim(),
                        t
                      );
                    }),
                    (e.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (e.decode = function (e, t) {
                      e instanceof X || (e = X.create(e));
                      for (
                        var n = void 0 === t ? e.len : e.pos + t,
                          r = new Z.game.BroadcastResponse();
                        e.pos < n;

                      ) {
                        var a = e.uint32();
                        if (a >>> 3 == 1)
                          r.message = Z.game.BroadcastMessage.decode(
                            e,
                            e.uint32()
                          );
                        else e.skipType(7 & a);
                      }
                      return r;
                    }),
                    (e.decodeDelimited = function (e) {
                      return (
                        e instanceof X || (e = new X(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (e.verify = function (e) {
                      if ("object" !== s(e) || null === e)
                        return "object expected";
                      if (null != e.message && e.hasOwnProperty("message")) {
                        var t = Z.game.BroadcastMessage.verify(e.message);
                        if (t) return "message." + t;
                      }
                      return null;
                    }),
                    (e.fromObject = function (e) {
                      if (e instanceof Z.game.BroadcastResponse) return e;
                      var t = new Z.game.BroadcastResponse();
                      if (null != e.message) {
                        if ("object" !== s(e.message))
                          throw TypeError(
                            ".game.BroadcastResponse.message: object expected"
                          );
                        t.message = Z.game.BroadcastMessage.fromObject(
                          e.message
                        );
                      }
                      return t;
                    }),
                    (e.toObject = function (e, t) {
                      t || (t = {});
                      var n = {};
                      return (
                        t.defaults && (n.message = null),
                        null != e.message &&
                          e.hasOwnProperty("message") &&
                          (n.message = Z.game.BroadcastMessage.toObject(
                            e.message,
                            t
                          )),
                        n
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        u.util.toJSONOptions
                      );
                    }),
                    e
                  );
                })()),
                n
              );
            })()),
            te = (function () {
              function e(t, n) {
                a(this, e),
                  (this.socketPath = t),
                  (this.handler = n),
                  this.socketPath,
                  this.handler,
                  (this.socket = new WebSocket(this.socketPath)),
                  (this.socket.onopen = this.OnOpen.bind(this)),
                  (this.socket.onmessage = this.OnMessage.bind(this)),
                  (this.socket.onclose = this.OnClose.bind(this)),
                  (this.socket.onerror = this.OnError.bind(this));
              }
              return (
                o(e, [
                  {
                    key: "OnOpen",
                    value: function () {
                      console.log("[GameConnect] OnOpen"),
                        this.handler.SendLoginRequest();
                    }
                  },
                  {
                    key: "OnMessage",
                    value: function (e) {
                      var t = this,
                        n = new FileReader();
                      n.readAsArrayBuffer(e.data),
                        (n.onload = function (e) {
                          var n = new Uint8Array(e.target.result),
                            r = new Uint32Array(n.slice(0, 4).buffer)[0];
                          t.handler.process(r, n.slice(4));
                        });
                    }
                  },
                  {
                    key: "OnClose",
                    value: function (e) {
                      e.wasClean
                        ? console.log(
                            "[GameConnect] OnClose: wasClean, code="
                              .concat(e.code, " reason=")
                              .concat(e.reason)
                          )
                        : console.log("[GameConnect] OnClose: died"),
                        this.handler.ResetConn();
                    }
                  },
                  {
                    key: "OnError",
                    value: function (e) {
                      console.log("[GameConnect] OnError", e);
                    }
                  },
                  {
                    key: "Send",
                    value: function (e, t) {
                      var n = new Uint32Array([e]).buffer,
                        r = new Uint8Array(4 + t.length);
                      r.set(new Uint8Array(n), 0),
                        r.set(t, 4),
                        this.socket.send(r);
                    }
                  }
                ]),
                e
              );
            })(),
            ne = p("player", {
              state: function () {
                return {
                  isLogin: !1,
                  uid: "",
                  nickname: "",
                  balance: 0,
                  currencyType: "",
                  currencyRate: 1,
                  currencyChipInSteps: [],
                  currentChipInIndex: 0,
                  lobbyUrl: "",
                  depositUrl: "",
                  maxAnteLimit: 0,
                  maxAwardLimit: 0,
                  lastWeekStatus: -1,
                  newPlayer: !1
                };
              },
              getters: {
                getCurrentChipValue: function () {
                  return this.currencyChipInSteps[this.currentChipInIndex];
                },
                getDisplayBalance: function () {
                  return Y(this.balance, 2, this.currencyRate);
                }
              },
              actions: {
                back: function () {
                  "" !== this.lobbyUrl
                    ? (console.log("back lobbyUrl: " + this.lobbyUrl),
                      (window.location.href = this.lobbyUrl))
                    : (console.log("back window.history.back()"),
                      window.history.back());
                }
              }
            }),
            re = p("history", {
              state: function () {
                return { showHistoryPanel: !1, histories: [] };
              },
              getters: {},
              actions: {
                initHistory: function (e) {
                  (this.histories = e), this.printHistory();
                },
                addHistory: function (e, t) {
                  var n = new ee.MultiplierRecord({
                    transactionId: e,
                    multiplier: t
                  });
                  this.histories.unshift(n),
                    this.histories.length > 30 && this.histories.pop(),
                    this.printHistory();
                },
                printHistory: function () {}
              }
            }),
            ae = p("messageBox", {
              state: function () {
                return { show: !1, message: "hello world" };
              },
              getters: {},
              actions: {
                openMessage: function (e) {
                  (this.show = !0), (this.message = e);
                },
                closeMessage: function () {
                  this.show = !1;
                }
              }
            }),
            ie = p("broadcast", {
              state: function () {
                return { broadcastList: [] };
              },
              getters: {},
              actions: {
                initBroadcastList: function (e) {
                  (this.broadcastList = e), this.printBroadcastList();
                },
                addBroadcast: function (e) {
                  this.broadcastList.unshift(e),
                    this.broadcastList.length > 10 && this.broadcastList.pop(),
                    this.printBroadcastList();
                },
                printBroadcastList: function () {
                  for (var e = 0; e < this.broadcastList.length; e++) {
                    var t = this.broadcastList[e],
                      n = new Date(t.createTime).toLocaleString();
                    "broadcast "
                      .concat(e, ": t=")
                      .concat(n, " c=")
                      .concat(t.content);
                  }
                }
              }
            }),
            oe = (function () {
              function e(t, n) {
                a(this, e),
                  (this.socketPath = n),
                  (this.playerStore = ne()),
                  (this.gameManagerStore = se()),
                  (this.gameManagerStore.messageHandler = this),
                  (this.historyStore = re()),
                  (this.messageBoxStore = ae()),
                  (this.broadcastStore = ie());
              }
              return (
                o(e, [
                  {
                    key: "InitConn",
                    value: function () {
                      console.log("MessageHandler InitConn", this.socketPath),
                        (this.gameConnect = new te(this.socketPath, this));
                    }
                  },
                  {
                    key: "ResetConn",
                    value: function () {
                      var e = this;
                      console.log("MessageHandler ResetConn"),
                        (this.gameManagerStore.isReconnecting = !0),
                        this.socketPath &&
                          setTimeout(function () {
                            e.InitConn();
                          }, U);
                    }
                  },
                  {
                    key: "process",
                    value: function (e, t) {
                      switch (e) {
                        case ee.MsgType.Login_Response:
                          this.loginResponse(t);
                          break;
                        case ee.MsgType.Pong:
                          this.pongResponse(t);
                          break;
                        case ee.MsgType.Tip_Message_Response:
                          this.tipMessageResponse(t);
                          break;
                        case ee.MsgType.Jack_Pot_Pool_Response:
                          this.jackpotResponse(t);
                          break;
                        case ee.MsgType.Rank_List_Response:
                          this.rankListResponse(t);
                          break;
                        case ee.MsgType.Logout_Response:
                          this.logoutResponse(t);
                          break;
                        case ee.MsgType.Group_Game_Status_Sync_Response:
                          this.GroupGameStatueSyncResponse(t);
                          break;
                        case ee.MsgType.Group_Chip_In_Response:
                          this.groupChipInResponse(t);
                          break;
                        case ee.MsgType.Broadcast_Chip_In_Response:
                          this.broadcastChipInResponse(t);
                          break;
                        case ee.MsgType.Broadcast_Cash_Out_Response:
                          this.broadcastCashOutResponse(t);
                          break;
                        case ee.MsgType.Broadcast_Flying_Multiplier_Response:
                          this.broadcastFlyingMultiplierResponse(t);
                          break;
                        case ee.MsgType.Group_Cash_Out_Response:
                          this.groupCashOutResponse(t);
                          break;
                        case ee.MsgType.Weekly_Top_Reward_Response:
                          this.weeklyTopRewardResponse(t);
                          break;
                        case ee.MsgType.Take_Weekly_Top_Reward_Response:
                          this.takeWeeklyTopRewardResponse(t);
                          break;
                        case ee.MsgType.Broadcast_List_Response:
                          this.broadcastListResponse(t);
                          break;
                        case ee.MsgType.Broadcast_Response:
                          this.broadcastResponse(t);
                          break;
                        default:
                          console.error("unknown message type", e);
                      }
                    }
                  },
                  {
                    key: "SendLoginRequest",
                    value: function () {
                      var e,
                        t = ee.LoginRequest.create();
                      (t.uid = $("uid")),
                        (t.channel = $("channel")),
                        (t.token = $("token")),
                        (t.currencyType = $("currencyType"));
                      var n = ee.LoginRequest.encode(t).finish();
                      null === (e = this.gameConnect) ||
                        void 0 === e ||
                        e.Send(ee.MsgType.Login_Request, n);
                    }
                  },
                  {
                    key: "loginResponse",
                    value: function (e) {
                      var t = ee.LoginResponse.decode(e);
                      t.result === ee.LoginResponse.Result.SUCCESS
                        ? (console.log(
                            "login succeed nickname="
                              .concat(t.nickname, " balance=")
                              .concat(
                                t.balance / t.currencyRate,
                                " currencyType="
                              )
                              .concat(t.currencyType)
                          ),
                          (this.playerStore.isLogin = !0),
                          (this.playerStore.uid = t.uid),
                          (this.playerStore.nickname = t.nickname),
                          (this.playerStore.balance = t.balance),
                          (this.playerStore.currencyType = t.currencyType),
                          (this.playerStore.currencyRate = t.currencyRate),
                          (this.playerStore.currencyChipInSteps =
                            t.currencyChipInSteps),
                          (this.playerStore.currentChipInIndex = 2),
                          (this.playerStore.lobbyUrl = t.lobbyUrl),
                          (this.playerStore.depositUrl = t.depositUrl),
                          (this.playerStore.maxAnteLimit = t.maxAnteLimit),
                          (this.playerStore.maxAwardLimit = t.maxAwardLimit),
                          (this.playerStore.lastWeekStatus = t.lastWeekStatus),
                          (this.playerStore.newPlayer = t.newPlayer),
                          this.gameManagerStore.initGame(),
                          this.historyStore.initHistory(t.multiplierHistories),
                          this.gameManagerStore.groupStatusSync(
                            t.syncStatusResponse
                          ),
                          this.gameManagerStore.initAllChipInList(
                            t.allChipInList
                          ),
                          t.weeklyTopEnable &&
                            this.sendWeeklyTopRewardRequest(),
                          (this.gameManagerStore.isLoading = !1),
                          (this.gameManagerStore.isReconnecting = !1))
                        : (console.log("login failed"),
                          (this.playerStore.isLogin = !1),
                          this.playerStore.back());
                    }
                  },
                  {
                    key: "SendPingRequest",
                    value: function () {
                      var e,
                        t = ee.PingRequest.create({ timestamp: Date.now() }),
                        n = ee.PingRequest.encode(t).finish();
                      null === (e = this.gameConnect) ||
                        void 0 === e ||
                        e.Send(ee.MsgType.Ping, n);
                    }
                  },
                  {
                    key: "pongResponse",
                    value: function (e) {
                      this.gameManagerStore.pingTime =
                        Date.now() - ee.PongResponse.decode(e).timestamp;
                    }
                  },
                  {
                    key: "jackpotResponse",
                    value: function (e) {
                      ee.JackPotPoolResponse.decode(e);
                    }
                  },
                  {
                    key: "tipMessageResponse",
                    value: function (e) {
                      var t = ee.TipMessageResponse.decode(e);
                      this.messageBoxStore.openMessage(t.txtMsg);
                    }
                  },
                  {
                    key: "sendRankListRequest",
                    value: function (e) {
                      var t,
                        n = ee.RankListRequest.create({ rankType: e });
                      "rankType=".concat(
                        ee.RankListRequest.RankType[n.rankType]
                      );
                      var r = ee.RankListRequest.encode(n).finish();
                      null === (t = this.gameConnect) ||
                        void 0 === t ||
                        t.Send(ee.MsgType.Rank_List_Request, r);
                    }
                  },
                  {
                    key: "rankListResponse",
                    value: function (e) {
                      var t = ee.RankListResponse.decode(e);
                      this.gameManagerStore.rankList = t;
                    }
                  },
                  {
                    key: "logoutResponse",
                    value: function (e) {
                      var t = ee.LogoutResponse.decode(e);
                      console.log(
                        "logout ".concat(
                          ee.LogoutResponse.LOGOUT_TYPE_ENUM[t.type]
                        )
                      );
                    }
                  },
                  {
                    key: "GroupGameStatueSyncResponse",
                    value: function (e) {
                      var t = ee.GroupStatusSyncResponse.decode(e);
                      this.gameManagerStore.groupStatusSync(t);
                    }
                  },
                  {
                    key: "sendGroupChipInRequest",
                    value: function (e, t) {
                      var n,
                        r = ee.ChipInItem.create({
                          site: e,
                          ante: parseInt(t * this.playerStore.currencyRate)
                        }),
                        a = ee.GroupChipInRequest.create({ ante: r });
                      this.gameManagerStore.decreaseAutoPlay(e),
                        this.gameManagerStore.setMask(e, !0),
                        this.gameManagerStore.setAnte(e, t),
                        this.gameManagerStore.setIsBet(e, !0),
                        "sendGroupChipInRequest site="
                          .concat(e, " ante=")
                          .concat(t);
                      var i = ee.GroupChipInRequest.encode(a).finish();
                      null === (n = this.gameConnect) ||
                        void 0 === n ||
                        n.Send(ee.MsgType.Group_Chip_In_Request, i);
                    }
                  },
                  {
                    key: "groupChipInResponse",
                    value: function (e) {
                      var t = ee.GroupChipInResponse.decode(e);
                      t.result
                        ? (t.balance, (this.playerStore.balance = t.balance))
                        : (console.log("groupChipInResponse false:", t.site),
                          this.gameManagerStore.setAnte(t.site, 0),
                          this.gameManagerStore.setIsBet(t.site, !1),
                          this.gameManagerStore.setIsNextRound(t.site, !1)),
                        this.gameManagerStore.setMask(t.site, !1);
                    }
                  },
                  {
                    key: "broadcastChipInResponse",
                    value: function (e) {
                      var t = ee.BroadcastChipInResponse.decode(e);
                      this.gameManagerStore.addBroadcastChipIn(t.item);
                    }
                  },
                  {
                    key: "broadcastCashOutResponse",
                    value: function (e) {
                      var t = ee.BroadcastCashOutResponse.decode(e);
                      this.gameManagerStore.updateCashOut(t.item);
                    }
                  },
                  {
                    key: "broadcastFlyingMultiplierResponse",
                    value: function (e) {
                      var t = ee.BroadcastFlyingMultiplierResponse.decode(e);
                      this.gameManagerStore.updateMultiplier(t);
                    }
                  },
                  {
                    key: "sendCashOutRequest",
                    value: function (e, t, n, r, a) {
                      var i,
                        o = ee.GroupCashOutRequest.create({
                          site: e,
                          clientMultiplier: t,
                          auto: n,
                          pingTime: r,
                          betId: a
                        });
                      "cash out request: site="
                        .concat(e, " m=")
                        .concat(t, " auto=")
                        .concat(n, " ping=")
                        .concat(r, " betId=")
                        .concat(a),
                        this.gameManagerStore.setMask(e, !0);
                      var s = ee.GroupCashOutRequest.encode(o).finish();
                      null === (i = this.gameConnect) ||
                        void 0 === i ||
                        i.Send(ee.MsgType.Group_Cash_Out_Request, s);
                    }
                  },
                  {
                    key: "groupCashOutResponse",
                    value: function (e) {
                      var t = ee.GroupCashOutResponse.decode(e);
                      "cash out response: site="
                        .concat(t.site, " m=")
                        .concat(t.multiplier, " award=")
                        .concat(t.award, " balance=")
                        .concat(t.balance, " betId=")
                        .concat(t.transactionId),
                        t.balance > 0 &&
                          ((this.playerStore.balance = t.balance),
                          t.award > 0 &&
                            this.gameManagerStore.addWinMessage(
                              t.multiplier,
                              t.award
                            )),
                        this.gameManagerStore.setAnte(t.site, 0),
                        this.gameManagerStore.setIsBet(t.site, !1),
                        this.gameManagerStore.setMask(t.site, !1);
                      var n =
                        (0 === t.site
                          ? this.gameManagerStore.valueStopSingleWin0
                          : this.gameManagerStore.valueStopSingleWin1) *
                        this.playerStore.currencyRate;
                      n > 0 &&
                        t.balance &&
                        t.award > 0 &&
                        t.award >= n &&
                        this.gameManagerStore.stopAutoPlay(t.site);
                    }
                  },
                  {
                    key: "sendWeeklyTopRewardRequest",
                    value: function () {
                      var e,
                        t = ee.WeeklyTopRewardRequest.create({}),
                        n = ee.WeeklyTopRewardRequest.encode(t).finish();
                      null === (e = this.gameConnect) ||
                        void 0 === e ||
                        e.Send(ee.MsgType.Weekly_Top_Reward_Request, n);
                    }
                  },
                  {
                    key: "weeklyTopRewardResponse",
                    value: function (e) {
                      var t = ee.WeeklyTopRewardResponse.decode(e);
                      (this.gameManagerStore.respWeeklyTopReward = t),
                        0 === t.lastWeekStatus &&
                          (this.gameManagerStore.isShowWeeklyAward = !0);
                    }
                  },
                  {
                    key: "sendTakeWeeklyTopRewardRequest",
                    value: function () {
                      var e,
                        t = ee.TakeWeeklyTopRewardRequest.create({}),
                        n = ee.TakeWeeklyTopRewardRequest.encode(t).finish();
                      null === (e = this.gameConnect) ||
                        void 0 === e ||
                        e.Send(ee.MsgType.Take_Weekly_Top_Reward_Request, n);
                    }
                  },
                  {
                    key: "takeWeeklyTopRewardResponse",
                    value: function (e) {
                      var t = ee.TakeWeeklyTopRewardResponse.decode(e);
                      (this.playerStore.balance = t.balance),
                        this.sendWeeklyTopRewardRequest();
                    }
                  },
                  {
                    key: "requestBroadcastList",
                    value: function () {
                      var e,
                        t = ee.BroadcastListRequest.create({}),
                        n = ee.BroadcastListRequest.encode(t).finish();
                      null === (e = this.gameConnect) ||
                        void 0 === e ||
                        e.Send(ee.MsgType.Broadcast_List_Request, n);
                    }
                  },
                  {
                    key: "broadcastListResponse",
                    value: function (e) {
                      var t = ee.BroadcastListResponse.decode(e);
                      this.broadcastStore.initBroadcastList(t.messages);
                    }
                  },
                  {
                    key: "broadcastResponse",
                    value: function (e) {
                      var t = ee.BroadcastResponse.decode(e);
                      this.broadcastStore.addBroadcast(t.message);
                    }
                  }
                ]),
                e
              );
            })(),
            se = p("gameManager", {
              state: function () {
                return {
                  playerStore: ne(),
                  messageHandler: null,
                  pingIntervalId: 0,
                  pingTime: 0,
                  isLoading: !0,
                  isReconnecting: !1,
                  lastGroupStatusSyncResponse: null,
                  lastFlyingMultiplier: null,
                  remainingTime: 0,
                  totalTime: 0,
                  allChipInList: [],
                  prevChipInList: [],
                  myChipInList: [],
                  preFlewAwayMultiplier: 0,
                  winMessageList: [],
                  rankList: null,
                  isShowWeeklyAward: !1,
                  respWeeklyTopReward: null,
                  isShowSite1: !0,
                  chipValue0: 0,
                  chipValue1: 0,
                  isBet0: !1,
                  isBet1: !1,
                  isNextRound0: !1,
                  isNextRound1: !1,
                  ante0: 0,
                  ante1: 0,
                  mask0: !1,
                  mask1: !1,
                  isShowAutoPlayOptions: !1,
                  autoPlayOptionsSite: 0,
                  autoPlay0: 0,
                  autoPlay1: 0,
                  autoPlayStartBalance0: 0,
                  autoPlayStartBalance1: 0,
                  valueStopDecreases0: 0,
                  valueStopDecreases1: 0,
                  valueStopIncreases0: 0,
                  valueStopIncreases1: 0,
                  valueStopSingleWin0: 0,
                  valueStopSingleWin1: 0,
                  isShowGameRules: !1
                };
              },
              getters: {
                totalWeeklyAward: function () {
                  if (this.respWeeklyTopReward) {
                    for (
                      var e = 0, t = 0;
                      t < this.respWeeklyTopReward.currentWeek.length;
                      t++
                    )
                      e += this.respWeeklyTopReward.currentWeek[t].reward;
                    return e;
                  }
                  return 0;
                },
                currentBetId: function () {
                  return this.lastGroupStatusSyncResponse
                    ? this.lastGroupStatusSyncResponse.transactionId
                    : "";
                },
                currentGroupStatus: function () {
                  return this.lastGroupStatusSyncResponse
                    ? this.lastGroupStatusSyncResponse.groupStatus
                    : "";
                },
                currentFlyingMultiplierStr: function () {
                  return this.lastFlyingMultiplier
                    ? (this.lastFlyingMultiplier.multiplier / 100).toFixed(2) +
                        "x"
                    : "1.00x";
                },
                currentFlyingMultiplier: function () {
                  return this.lastFlyingMultiplier
                    ? this.lastFlyingMultiplier.multiplier
                    : 100;
                },
                currentFlewAwayMultiplier: function () {
                  return this.lastGroupStatusSyncResponse
                    ? (
                        this.lastGroupStatusSyncResponse.multiplier / 100
                      ).toFixed(2) + "x"
                    : "1.00x";
                }
              },
              actions: {
                connectServer: function () {
                  console.log("connect server");
                  var e = $("api") || "ws://localhost:9001/game";
                  (this.messageHandler = new oe(this, e)),
                    this.messageHandler.InitConn();
                },
                initGame: function () {
                  this.initPing(), this.messageHandler.requestBroadcastList();
                },
                initPing: function () {
                  var e = this;
                  0 !== this.pingIntervalId &&
                    clearInterval(this.pingIntervalId),
                    (this.pingIntervalId = setInterval(function () {
                      e.messageHandler.SendPingRequest();
                    }, J));
                },
                groupStatusSync: function (e) {
                  var t = this;
                  this.lastGroupStatusSyncResponse = e;
                  var n = re();
                  e.groupStatus === z.ChipIn
                    ? ((this.remainingTime = e.remainingTime),
                      (this.totalTime = e.totalTime),
                      (this.prevChipInList = this.allChipInList.slice()),
                      (this.preFlewAwayMultiplier =
                        n.histories.length > 0 ? n.histories[0].multiplier : 0),
                      this.clearAllChipInList())
                    : e.groupStatus === z.Flying ||
                      (e.groupStatus === z.EndRound &&
                        (this.resetBetOp(),
                        n.addHistory(e.transactionId, e.multiplier),
                        this.allChipInList.forEach(function (e) {
                          e.uid === ne().uid &&
                            t.myChipInList.unshift({
                              timestamp: Date.now(),
                              chipIn: e
                            });
                        })));
                },
                resetBetOp: function () {
                  this.setIsBet(0, !1),
                    this.setIsBet(1, !1),
                    this.setAnte(0, 0),
                    this.setAnte(1, 0);
                },
                updateMultiplier: function (e) {
                  this.lastFlyingMultiplier = e;
                },
                initAllChipInList: function (e) {
                  this.clearAllChipInList();
                  for (var t = ne(), n = 0; n < e.length; n++) {
                    var r = e[n];
                    this.addBroadcastChipIn(r),
                      this.currentGroupStatus === z.ChipIn &&
                        r.uid === t.uid &&
                        this.restoreBet(r);
                  }
                },
                restoreBet: function (e) {
                  if (0 === e.status) {
                    var t = ne();
                    this.setAnte(e.site, e.ante),
                      this.setIsBet(e.site, !0),
                      this.setChipValue(
                        e.site,
                        (e.ante / t.currencyRate).toFixed(2)
                      );
                  }
                },
                addBroadcastChipIn: function (e) {
                  this.allChipInList.push(e);
                },
                clearAllChipInList: function () {
                  this.allChipInList.length = 0;
                },
                updateCashOut: function (e) {
                  for (var t = 0; t < this.allChipInList.length; t++) {
                    var n = this.allChipInList[t];
                    n.uid === e.uid &&
                      n.site === e.site &&
                      (this.allChipInList[t] = e);
                  }
                },
                setMask: function (e, t) {
                  0 === e ? (this.mask0 = t) : 1 === e && (this.mask1 = t);
                },
                setAnte: function (e, t) {
                  0 === e ? (this.ante0 = t) : 1 === e && (this.ante1 = t);
                },
                setIsBet: function (e, t) {
                  0 === e ? (this.isBet0 = t) : 1 === e && (this.isBet1 = t);
                },
                setIsNextRound: function (e, t) {
                  0 === e
                    ? (this.isNextRound0 = t)
                    : 1 === e && (this.isNextRound1 = t);
                },
                setChipValue: function (e, t) {
                  0 === e
                    ? (this.chipValue0 = t)
                    : 1 === e && (this.chipValue1 = t);
                },
                addWinMessage: function (e, t) {
                  var n = this,
                    r = { multiplier: e, award: t };
                  this.winMessageList.push(r),
                    setTimeout(function () {
                      var e = n.winMessageList.indexOf(r);
                      -1 !== e && n.winMessageList.splice(e, 1);
                    }, 4e3);
                },
                showAutoPlayOptions: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0;
                  (this.isShowAutoPlayOptions = e),
                    e && (this.autoPlayOptionsSite = t);
                },
                startAutoPlay: function (e, t, n, r, a) {
                  "startAutoPlay site="
                    .concat(e, " auto=")
                    .concat(t, " decreases=")
                    .concat(n, " increases=")
                    .concat(r, " singleWin=")
                    .concat(a),
                    0 === e
                      ? ((this.autoPlay0 = t),
                        (this.autoPlayStartBalance0 = ne().balance),
                        (this.valueStopDecreases0 = n),
                        (this.valueStopIncreases0 = r),
                        (this.valueStopSingleWin0 = a))
                      : 1 === e &&
                        ((this.autoPlay1 = t),
                        (this.autoPlayStartBalance1 = ne().balance),
                        (this.valueStopDecreases1 = n),
                        (this.valueStopIncreases1 = r),
                        (this.valueStopSingleWin1 = a));
                },
                stopAutoPlay: function (e) {
                  "stopAutoPlay site="
                    .concat(e, " auto=")
                    .concat(0 === e ? this.autoPlay0 : this.autoPlay1),
                    0 === e
                      ? ((this.autoPlay0 = 0),
                        (this.autoPlayStartBalance0 = 0),
                        (this.valueStopDecreases0 = 0),
                        (this.valueStopIncreases0 = 0),
                        (this.valueStopSingleWin0 = 0))
                      : 1 === e &&
                        ((this.autoPlay1 = 0),
                        (this.autoPlayStartBalance1 = 0),
                        (this.valueStopDecreases1 = 0),
                        (this.valueStopIncreases1 = 0),
                        (this.valueStopSingleWin1 = 0));
                },
                decreaseAutoPlay: function (e) {
                  0 === e && this.autoPlay0 > 0
                    ? (this.autoPlay0--,
                      0 === this.autoPlay0 && this.stopAutoPlay(e))
                    : 1 === e &&
                      this.autoPlay1 > 0 &&
                      (this.autoPlay1--,
                      0 === this.autoPlay1 && this.stopAutoPlay(e));
                },
                getCurrency: function (e) {
                  return Y(e, 2, this.playerStore.currencyRate);
                }
              }
            }),
            le = p("settings", {
              state: function () {
                return { show: !1, isSound: !0, isAnimation: !0 };
              },
              getters: {},
              actions: {
                openSettings: function () {
                  this.show = !0;
                },
                closeSettings: function () {
                  this.show = !1;
                }
              }
            }),
            ce = "/logo.svg",
            ue = function (e, t) {
              var n,
                a = e.__vccOpts || e,
                i = l(t);
              try {
                for (i.s(); !(n = i.n()).done; ) {
                  var o = r(n.value, 2),
                    s = o[0],
                    c = o[1];
                  a[s] = c;
                }
              } catch (u) {
                i.e(u);
              } finally {
                i.f();
              }
              return a;
            },
            pe = {
              name: "TopBar",
              components: {},
              mounted: function () {},
              computed: {
                totalWeeklyAward: function () {
                  return (
                    this.playerStore.currencyType +
                    " " +
                    ((e = this.gameManagerStore.totalWeeklyAward),
                    (t = this.playerStore.currencyRate),
                    (n = e / t) >= 1e3 ? n / 1e3 + "k" : n.toString())
                  );
                  var e, t, n;
                }
              },
              data: function () {
                return { gameManagerStore: se(), playerStore: ne() };
              },
              methods: {
                onBack: function () {},
                onSettings: function () {
                  le().show = !0;
                }
              }
            },
            de = function (e) {
              return f("data-v-fa6c6037"), (e = e()), b(), e;
            },
            ge = { class: "top-bar" },
            me = de(function () {
              return m(
                "img",
                { class: "logo", src: ce, alt: "logo" },
                null,
                -1
              );
            }),
            he = { class: "account" },
            ye = { class: "label" },
            fe = { class: "currency" },
            be = de(function () {
              return m(
                "img",
                {
                  class: "gold-icon",
                  src:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA8CAMAAAAAPFkHAAAC+lBMVEUAAAAAABwBBA8AABsAAAUAAR8AABsAAhIBAw8DBQ4AAAEAAxUAAAAAAB0AABwAAAEAABIAAAgDBQsAAAAAAAUAAAABBBEDBxEAAAAAAAAAAAEAAAcAABwAAh4AAAwGCRUAAAAAABwAAyEAAB7/////pQn/1Av/2wr/2Qn/2Rb/zQsAAAD/zwv/1grpeQj/0Qr/yRv/yBv/1xb/5Cv/zRr/own/6Cj/rAj/rwn/6ScAABv//y7/2xb/lwP/0Bn/5S3/5iv/2h3/sAb/mgT/kQL/7SP/yxv//ykAACIAABP/xQT/hAP/6ib/3gf/wAP/jAP/5xnlaAX/4AEAAR7/7Bf/pwn/nwb/yAL/7yv/4Rn/nAP/4iv+zR//uAf/qQfocQYAAAb/7Sf/1hz/whb/0Q0AAA3odQj/iQT/lAIQECP/4yL/5Rb/4Av/5Qr/swj/rAb/owX/1QIAACb/5h/1qQ3/+i3/9Sr/0B0CAR3/yAzregj/zAL/pgL/5QH/oAH/6y//9y7/8iaGdSErHCBILh3/3Rb/1BX4thX//xT/zRP/wBGyXQ7vkgz/7Qrzfgb/ngXmbQX//fn//ez/9tX/+ymdkiJtZCKHfyFVUCD/6h8+Nh84Hx7/+B3/3h1XOB1lOxj/4hPzog//tQ3uewj6hgb/6QX/+s7/+Kr/5oT/8XL/y1z/61IgGSOZgSEqJiAwLB8ICx7/0x3/yBj/uRHRiw7kngr6nAn9eAP/7sz/9J7/9YL/0XT/7WP/70W+rCezqCb/qyM1NB9uVR5MPx5gShz/7xuOaBr/8RWBRhX/2BKPThKaTg7rfwn/+OH/+Ln/+rT/5LH/7J7/25j/843/443/zob/8TXw2yn/1ynawinazib/0iL/8RzDnRx6XRv/nxj6shSscBT3rxOjbhO+gQ+eVA//3Q3/wQv3lgnugwnhdgj/8Oz/323/uk7/2Ev/tTjHuyjHuSjqsxzImRzVvRmmghl2PBj/8xbrmRTLag3Jag3vnAzgWAPiXgKtimCLAAAAJHRSTlMAgBu8ZdnnSzcS01fIopSQh3EF+a2fLCXq49u/r2BCDe/Qb/az25MaAAAHKUlEQVRIx5XXd1gScRjAcTTT9t57SAmXZhQ7FAISgYBEEUhQUQw1hDTNynZWmml777333nvvvffee/c8vXfcQdll9f3bz/O+97sTOEpJlW3kVbFBqVKlGlRq6E35j8pUKZ29cu+EQYMGHbixb8oqX69/1N5evqsmLb+s5/MHTp6syTCI3izfq61Y9u+wbCXeyuUX+fzMC6HBCW2g4I6ia5q3K5v7/U1W4U3ZMYCfGdolFGRwG7x2+zMOaL1KhH6+K3bw+f3Bhfa/CtKTZdr17JJsA96gTIBtIWEX3BAFT7uurfonWMt3xWV+FkAolEVXxaB1DMYD+17rQy7L8yYM4IeiMrRtt4hZL5bk5yckJLSJiSFsz/13tc3IpBdvPH8ABlMiui3dPNZ/a04HKG1tQkxMG5cVHT4qa0gmd8JVohMjZm1b4O/vfyqnQ1oaWIdjTnBPfLCIfVRW/jeZ/ZovROWsiG3H/dGW9AOIxjFz1uBWdEsBtvjMV3whwNCIlBPAXBSUK7NjTc+OaD2DH6uPyMr8LBvCtm2xZZeO9sc7Y3SwiXI4Pdth1lIQa5tZuppHloETEmLnsxhTxFgHh8M255gdDoczf3UwSkU9OivmDfY8Go19J/D1bYXClIizHjhmwTNVL+ihyew0O3LY7bBEd0YlSUbIahO04u6wzC5CIStiixuOXkRXRSfS6fRWiS3oac4oszOhJ0aHjUoqVEwlxpbPvsIHKfxp20XRqmg6UWILk47aL3+1i8YGBUmOlMb/yXwn8mHb0IilBBx7FYd4rQLTdLo5FjdVPEmuhdFKK8dlwczUjDG4PC2XE4iYmxgl5qwOcS0cFDRXMQR7Hmvzdoa1ZbFYfRfi8pw8uhW9WIEmm4tOvwM0SD2zIjZ0Ulg8iyXsS6y7SN4nsVXxWvQScCwh0PTZnVF6qBRI7+wd6NCM1AXEtiB/qzXdOEeEUlEBNvV+U6BeU2AorLsNP6E+IEloa91alFpCjsUC7ToCjria7/gwkFw7/uReik5sTVKL1s4ES7u8kOlwSgT1S744Dqh9O3E/ySBQOrtdiEUUYoBLxRYGCoekRPfd7H9802j/MYl9WpAWIJ8jSuHquZbHnWNjk3qrDwEtDftyuRnSBeeNgl1PN4Mkp6o1ej2XxY/53vvRhmNJ6plNKd6rroRxudz4/rvUxn7qm5e6k0Kol1DP5Sr5n2KjOGkbkhRD6lP8dmcNBJplsRXpdOKc7gHkMLDPdD2Ly8qMKTSzmVT2vKTBNShV4HkAOiDEptPpbKZugeR1D+Qq4c8ybwnMTCqVLR6hrUypOCEsXqlUDmhnKyoqEsj/SDP0SuXkrBQdk0kF6vzA86OUGhSmhDJDJMYisZjeLYC07rl6Td++87PWiqloHcSDw70ppSYCjY/P6igxGgXiVuQ0MNA+v//is2POCZyoZKruycpRUBofnzK9fZ5YLBYIWpPT7hEXFo6GD45dRipG5ft4VTCaIho6lEFjSsQCSS97S5K64587zyVRmDStT7aWATphGkAGw8BRiwVqk51MdjqJyfMSp2to9A1tBQrQSQdpDJTmSWwCtdPeiUQuxOQpQT+qe6gP0Bq7NbkMNM0chUDQVT6yGAwIwLfdZBTDumjyfdl1qwGtrH33EaO5Bp1CoJa0xC0hH/TdjsmxOkEUfkb30uOwL2gf3sThDCwDzaiwdRV3GtmtZSe8gJazpCMXYpJJyDTT4HAYCtWyrtCkMmgQw2DgdFUoJHL7yPl2ezdUzpLqR2JDN7lnmuV7ZAj+zV5PNn74UJrLavLYAsVGSY4qunXAg5aHM/Tx0vmLQZ4RENfJjL6bHleD+KkTviz1IMNlaakaRl4+m8rJz4M7rdRLpdL5cGO2SoxuuS7dWt0bp2WQ7D3DYWW8XIMGMuTSaNKBICOvjfF/KelHxaVqfXI4rEtUM042iLCeGBmolE4bsPWmjeqWs5fxkJoUd97VrenLhx8sbidLpQPHjROxJUXEskxVj8E8BJ4jTz5InGxP5HADrf1PHZ48LmygZa1Y7B5Jla+HmXV//Y1ZGeyQh5GRkam4y02NjNyfMqzAZmS6JTt6XTIPqUMckccisqnzOAk0DXhIw1jToyDoWyHHDZkm+YH0cKRJbUrxqqJ248aggtk9oNkFx2I7d45N2sD2jOwxI92K1AH5W+URRDt1nqKzK2DwCU9QZpRKdRuWRSo0ppDVCOzgJ5K5QZ5iH3GYAM0q1bopMiuC3xVyy0seIVF7cFJvKicqTW5atxeuEkHKl/CegCDh6TM+d5UoCuf2huYWblR3MH29PUXGi0OQ+nC0JdjqSBxPNuTIl0JFV0gxL2jEoRnJ2nCAdfz+9rpQAUHiwrWrVgyZMXPmjCFTl2l5qEOa+FD+XtXqCGhrOJbViqCV86lG+ZcaV62HeALnVYvy73n71Kxfrly9chVqVPYr6aXoB5BNFRk7SGm9AAAAAElFTkSuQmCC",
                  alt: "gold"
                },
                null,
                -1
              );
            }),
            we = { class: "balance" };
          var ve = ue(pe, [
            [
              "render",
              function (e, t, n, r, a, i) {
                return (
                  d(),
                  g("div", ge, [
                    me,
                    m("div", he, [
                      a.gameManagerStore.respWeeklyTopReward
                        ? (d(),
                          g(
                            "div",
                            {
                              key: 0,
                              class: "weekly-award-btn",
                              onClick:
                                t[0] ||
                                (t[0] = function (e) {
                                  return (a.gameManagerStore.isShowWeeklyAward = !0);
                                })
                            },
                            [
                              m("div", ye, h(e.$t("Ranking")), 1),
                              m("div", fe, h(i.totalWeeklyAward), 1)
                            ]
                          ))
                        : y("", !0),
                      be,
                      m("div", we, h(a.playerStore.getDisplayBalance), 1),
                      m("img", {
                        class: "settings-icon",
                        onClick:
                          t[1] ||
                          (t[1] = function () {
                            return (
                              i.onSettings && i.onSettings.apply(i, arguments)
                            );
                          }),
                        src: "/assets/options-f2d3e866.svg",
                        alt: "gold"
                      })
                    ])
                  ])
                );
              }
            ],
            ["__scopeId", "data-v-fa6c6037"]
          ]);
          var ke = ue(
              {
                name: "FlewAwayMultiplier",
                props: { multiplier: { type: Number, default: 0 } },
                methods: {
                  getMultiplierStr: function (e) {
                    return (e / 100).toFixed(2) + "x";
                  },
                  getMultiplierColor: function (e) {
                    return e < 200
                      ? "color-2"
                      : e < 1e3
                      ? "color-2-10"
                      : "color-10";
                  }
                }
              },
              [
                [
                  "render",
                  function (e, t, n, r, a, i) {
                    return (
                      d(),
                      g(
                        "span",
                        {
                          class: w([
                            "flew-away-multiplier",
                            i.getMultiplierColor(n.multiplier)
                          ])
                        },
                        h(i.getMultiplierStr(n.multiplier)),
                        3
                      )
                    );
                  }
                ],
                ["__scopeId", "data-v-dbe3b3db"]
              ]
            ),
            Se = { class: "history-result" };
          var Te = ue(
              {
                name: "HistoryResult",
                components: { FlewAwayMultiplier: ke },
                data: function () {
                  return { historyStore: re() };
                },
                methods: {}
              },
              [
                [
                  "render",
                  function (e, t, n, r, a, i) {
                    var o = v("FlewAwayMultiplier");
                    return (
                      d(),
                      g("div", Se, [
                        (d(!0),
                        g(
                          k,
                          null,
                          S(a.historyStore.histories, function (e, t) {
                            return (
                              d(),
                              T(
                                o,
                                {
                                  style: { "margin-left": "0.3rem" },
                                  multiplier: e.multiplier,
                                  key: t
                                },
                                null,
                                8,
                                ["multiplier"]
                              )
                            );
                          }),
                          128
                        ))
                      ])
                    );
                  }
                ],
                ["__scopeId", "data-v-5ef7429c"]
              ]
            ),
            Oe = {
              name: "FlightStage",
              data: function () {
                return {
                  isDebug: !1,
                  gameManagerStore: se(),
                  settingsStore: le(),
                  canvas: null,
                  pixiApp: null,
                  debugText: null,
                  graphics: null,
                  graphicsAxis: null,
                  dotContainer: null,
                  dotNumber: 11,
                  dotsX: [],
                  dotsY: [],
                  spriteAviator: null,
                  startFlyingTime: null,
                  timeFlyTo2X: 8.4,
                  tweenFlying: null,
                  tweenFlewAway: null,
                  margin: 20,
                  dotRadius: 2,
                  isDotMove: !1,
                  tailLastTime: 0
                };
              },
              watch: {
                gameStatus: function (e, t) {
                  e === z.ChipIn
                    ? this.settingsStore.isAnimation && this.onReady()
                    : e === z.Flying
                    ? (this.settingsStore.isSound &&
                        this.$refs.audioStart.play(),
                      this.settingsStore.isAnimation && this.flying())
                    : e === z.EndRound &&
                      (this.settingsStore.isSound &&
                        ((this.$refs.audioFlewAway.volume = 0.3),
                        this.$refs.audioFlewAway.play()),
                      this.settingsStore.isAnimation && this.flewAway());
                },
                isAnimation: function (e, t) {
                  e
                    ? this.gameStatus === z.ChipIn
                      ? this.onReady()
                      : this.gameStatus === z.Flying
                      ? this.flying()
                      : this.gameStatus === z.EndRound && this.flewAway()
                    : (this.spriteAviator.visible = !1);
                }
              },
              computed: {
                isAnimation: function () {
                  return this.settingsStore.isAnimation;
                },
                GroupStatus: function () {
                  return z;
                },
                gameStatus: function () {
                  return this.gameManagerStore.currentGroupStatus;
                },
                pos0: function () {
                  return {
                    x: this.margin,
                    y: this.canvas.height - this.margin
                  };
                },
                pos1: function () {
                  return {
                    x: this.canvas.width - 1.5 * this.spriteAviator.width,
                    y: this.spriteAviator.height
                  };
                },
                pos2: function () {
                  return {
                    x: this.canvas.width - this.spriteAviator.width,
                    y: 2 * this.spriteAviator.height
                  };
                }
              },
              mounted: function () {
                (this.isDebug = null !== $("debug")), this.init();
              },
              methods: {
                init: function () {
                  var t = this;
                  return n(
                    e().mark(function n() {
                      return e().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                t.initPixi(), (e.next = 3), t.initAviator()
                              );
                            case 3:
                              t.gameStatus === z.ChipIn
                                ? t.onReady()
                                : t.gameStatus === z.Flying
                                ? t.flying()
                                : t.gameStatus === z.EndRound && t.flewAway();
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, n);
                    })
                  )();
                },
                initPixi: function () {
                  (this.canvas = document.getElementById("pixi-canvas")),
                    (this.pixiApp = new O({
                      view: this.canvas,
                      autoDensity: !0,
                      transparent: !0,
                      antialias: !1,
                      backgroundColor: 0,
                      resizeTo: this.canvas.parentElement
                    })),
                    (this.pixiApp.interactiveChildren = !1),
                    (this.pixiApp.useContextAlpha = !1),
                    (this.graphicsAxis = new x()),
                    this.graphicsAxis.lineStyle(1, 2431772),
                    this.graphicsAxis.moveTo(this.pos0.x, this.pos0.y),
                    this.graphicsAxis.lineTo(this.canvas.width, this.pos0.y),
                    this.graphicsAxis.moveTo(this.pos0.x, this.pos0.y),
                    this.graphicsAxis.lineTo(this.pos0.x, 0),
                    this.pixiApp.stage.addChild(this.graphicsAxis),
                    (this.graphics = new x()),
                    this.pixiApp.stage.addChild(this.graphics),
                    this.initDot();
                  var e = new L({ fill: "#00ff00", fontSize: 14 });
                  (this.debugText = new R("", e)),
                    (this.debugText.y = this.canvas.height - 20),
                    this.pixiApp.stage.addChild(this.debugText),
                    A.ticker.add(this.ticker);
                },
                initDot: function () {
                  var e = I.from("./images/point.png");
                  (this.dotContainer = new P()),
                    this.pixiApp.stage.addChild(this.dotContainer);
                  for (var t = 0; t < this.dotNumber; t++) {
                    var n = new C(e);
                    n.anchor.set(0.5),
                      n.scale.set(0.25),
                      this.dotsX.push(n),
                      this.dotContainer.addChild(n);
                  }
                  for (var r = 0; r < this.dotNumber; r++) {
                    var a = new C(e);
                    a.anchor.set(0.5),
                      a.scale.set(0.25),
                      (a.tint = 1152982),
                      this.dotsY.push(a),
                      this.dotContainer.addChild(a);
                  }
                  this.resetDotPos();
                },
                initAviator: function () {
                  var t = this;
                  return n(
                    e().mark(function n() {
                      var r, a, i;
                      return e().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                M.addBundle("aviator", {
                                  airplane1: "./airplane/airplane1.svg",
                                  airplane2: "./airplane/airplane2.svg",
                                  airplane3: "./airplane/airplane3.svg",
                                  airplane4: "./airplane/airplane4.svg"
                                }),
                                (e.next = 3),
                                M.loadBundle("aviator")
                              );
                            case 3:
                              for (i in ((r = e.sent), (a = []), r))
                                a.push(r[i]);
                              (t.spriteAviator = new j(a)),
                                t.spriteAviator.anchor.set(0.1, 0.9),
                                t.spriteAviator.scale.set(0.7),
                                (t.spriteAviator.x = t.pos0.x),
                                (t.spriteAviator.y = t.pos0.y),
                                t.pixiApp.stage.addChild(t.spriteAviator),
                                (t.spriteAviator.animationSpeed = 0.15),
                                t.spriteAviator.play();
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      }, n);
                    })
                  )();
                },
                onReady: function () {
                  this.spriteAviator &&
                    ((this.spriteAviator.visible = !0),
                    this.tweenFlewAway &&
                      (this.tweenFlewAway.kill(), (this.tweenFlewAway = null)),
                    (this.spriteAviator.x = this.pos0.x),
                    (this.spriteAviator.y = this.pos0.y),
                    this.resetDotPos());
                },
                flying: function () {
                  var e = this;
                  this.spriteAviator &&
                    ((this.spriteAviator.visible = !0),
                    this.tweenFlying &&
                      (this.tweenFlying.kill(), (this.tweenFlying = null)),
                    (this.tweenFlying = A.timeline()
                      .fromTo(
                        this.spriteAviator,
                        { x: this.pos0.x, y: this.pos0.y },
                        {
                          keyframes: [
                            {
                              x: 0.7 * this.pos1.x,
                              y:
                                this.canvas.height -
                                0.7 * this.spriteAviator.height -
                                this.margin,
                              duration: 0.5 * this.timeFlyTo2X,
                              ease: "linear"
                            },
                            {
                              x: this.pos1.x,
                              y: this.pos1.y,
                              duration: 0.5 * this.timeFlyTo2X,
                              ease: "power1",
                              onComplete: function () {
                                (e.startFlyingTime = new Date().getTime()),
                                  (e.isDotMove = !0);
                              }
                            }
                          ]
                        }
                      )
                      .to(this.spriteAviator, {
                        x: this.pos2.x,
                        y: this.pos2.y,
                        ease: "linear",
                        duration: 2,
                        yoyo: !0,
                        repeat: -1
                      })));
                },
                flewAway: function () {
                  var e = this;
                  this.spriteAviator &&
                    ((this.spriteAviator.visible = !0),
                    (this.isDotMove = !1),
                    this.tweenFlying &&
                      (this.tweenFlying.kill(), (this.tweenFlying = null)),
                    this.tweenFlewAway &&
                      (this.tweenFlewAway.kill(), (this.tweenFlewAway = null)),
                    (this.tweenFlewAway = A.to(this.spriteAviator, {
                      x: this.canvas.width + 2 * this.spriteAviator.width,
                      y: -this.spriteAviator.height,
                      ease: "easeInOut",
                      duration: 0.5,
                      onComplete: function () {
                        e.spriteAviator.visible = !1;
                      }
                    })));
                },
                drawDebug: function () {
                  if (this.isDebug) {
                    var e = this.pixiApp.ticker;
                    this.debugText.text = "fps="
                      .concat(e.FPS.toFixed(2), " deltaMS=")
                      .concat(e.deltaMS.toFixed(2));
                  }
                },
                ticker: function (e) {
                  this.gameManagerStore.remainingTime > 0 &&
                    ((this.gameManagerStore.remainingTime -= this.pixiApp.ticker.deltaMS),
                    (this.gameManagerStore.remainingTime = Math.max(
                      this.gameManagerStore.remainingTime,
                      0
                    ))),
                    this.settingsStore.isAnimation
                      ? ((this.graphicsAxis.visible =
                          this.gameStatus === z.Flying),
                        (this.dotContainer.visible =
                          this.gameStatus === z.Flying),
                        this.drawPoint(e),
                        this.drawTail())
                      : (this.graphics.clear(),
                        (this.graphicsAxis.visible = !1),
                        (this.dotContainer.visible = !1)),
                    this.drawDebug();
                },
                resetDotPos: function () {
                  for (
                    var e =
                        (this.canvas.width - this.margin) /
                        (this.dotNumber - 1),
                      t = 0;
                    t < this.dotNumber;
                    t++
                  ) {
                    var n = this.pos0.x + e * (t + 0.5),
                      r = this.pos0.y + this.margin / 2,
                      a = this.dotsX[t];
                    (a.visible = !0), (a.x = n), (a.y = r);
                  }
                  for (
                    var i =
                        (this.canvas.height - this.margin) /
                        (this.dotNumber - 1),
                      o = 0;
                    o < this.dotNumber;
                    o++
                  ) {
                    var s = this.pos0.x - this.margin / 2,
                      l = this.pos0.y - i * o,
                      c = this.dotsY[o];
                    (c.visible = !0), (c.x = s), (c.y = l);
                  }
                },
                drawPoint: function (e) {
                  if (this.isDotMove) {
                    for (
                      var t = new Date().getTime(),
                        n =
                          (this.canvas.width - this.margin) /
                          (this.dotNumber - 1),
                        r = (((t - this.startFlyingTime) % 4e3) / 4e3) * n,
                        a = 0;
                      a < this.dotNumber;
                      a++
                    ) {
                      var i = this.pos0.x + n * (a + 0.5) - r,
                        o = this.pos0.y + this.margin / 2,
                        s = this.dotsX[a];
                      (s.visible = i >= this.pos0.x), (s.x = i), (s.y = o);
                    }
                    for (
                      var l =
                          (this.canvas.height - this.margin) /
                          (this.dotNumber - 1),
                        c = (((t - this.startFlyingTime) % 4e3) / 4e3) * l,
                        u = 0;
                      u < this.dotNumber;
                      u++
                    ) {
                      var p = this.pos0.x - this.margin / 2,
                        d = this.pos0.y - l * u + c,
                        g = this.dotsY[u];
                      (g.visible = d <= this.pos0.y), (g.x = p), (g.y = d);
                    }
                  }
                },
                drawTail: function () {
                  this.spriteAviator &&
                    (this.graphics.clear(),
                    this.gameStatus === z.Flying &&
                      (this.graphics.lineStyle(3, 16711680),
                      this.graphics.moveTo(this.pos0.x, this.pos0.y),
                      this.graphics.quadraticCurveTo(
                        0.75 * this.spriteAviator.x,
                        this.canvas.height - this.margin,
                        this.spriteAviator.x,
                        this.spriteAviator.y
                      ),
                      this.graphics.lineStyle(0, 7280686),
                      this.graphics.beginFill(7280686),
                      this.graphics.moveTo(this.pos0.x, this.pos0.y),
                      this.graphics.quadraticCurveTo(
                        0.75 * this.spriteAviator.x,
                        this.canvas.height - this.margin,
                        this.spriteAviator.x + 3,
                        this.spriteAviator.y
                      ),
                      this.graphics.lineTo(
                        this.spriteAviator.x + 3,
                        this.canvas.height - this.margin
                      ),
                      this.graphics.closePath(),
                      this.graphics.endFill()));
                }
              }
            },
            xe = function (e) {
              return f("data-v-c74a8080"), (e = e()), b(), e;
            },
            Le = { class: "flight-stage" },
            Re = xe(function () {
              return m(
                "canvas",
                { id: "pixi-canvas", class: "flight-scene" },
                null,
                -1
              );
            }),
            Ae = xe(function () {
              return m("div", { class: "flight-scene" }, null, -1);
            }),
            Ie = { key: 0, class: "chip-in" },
            Pe = xe(function () {
              return m(
                "img",
                {
                  class: "chip-in-propeller",
                  src: "/assets/propeller-993cd447.svg",
                  alt: "propeller"
                },
                null,
                -1
              );
            }),
            Ce = ["value", "max"],
            Me = { key: 1, class: "flying" },
            je = { key: 2, class: "end-round" },
            Ne = { class: "end-round-title" },
            Be = { class: "end-round-cash-out" },
            We = {
              ref: "audioStart",
              src: "/sounds/start.mp3",
              preload: "none"
            },
            Ee = {
              ref: "audioFlewAway",
              src: "/sounds/flewaway.mp3",
              preload: "none"
            };
          var _e = ue(Oe, [
              [
                "render",
                function (e, t, n, r, a, i) {
                  return (
                    d(),
                    g("div", Le, [
                      Re,
                      Ae,
                      i.gameStatus === i.GroupStatus.ChipIn
                        ? (d(),
                          g("div", Ie, [
                            Pe,
                            m(
                              "div",
                              null,
                              h(e.$t("WaitNextRound").toUpperCase()),
                              1
                            ),
                            m(
                              "progress",
                              {
                                value: a.gameManagerStore.remainingTime,
                                max: a.gameManagerStore.totalTime
                              },
                              null,
                              8,
                              Ce
                            )
                          ]))
                        : i.gameStatus === i.GroupStatus.Flying
                        ? (d(),
                          g(
                            "div",
                            Me,
                            h(a.gameManagerStore.currentFlyingMultiplierStr),
                            1
                          ))
                        : i.gameStatus === i.GroupStatus.EndRound
                        ? (d(),
                          g("div", je, [
                            m("div", Ne, h(e.$t("FlewAway")), 1),
                            m(
                              "div",
                              Be,
                              h(a.gameManagerStore.currentFlewAwayMultiplier),
                              1
                            )
                          ]))
                        : y("", !0),
                      m("audio", We, null, 512),
                      m("audio", Ee, null, 512)
                    ])
                  );
                }
              ],
              ["__scopeId", "data-v-c74a8080"]
            ]),
            De = {
              name: "NavTabs",
              props: {
                tabList: {
                  type: Array,
                  default: function () {
                    return [];
                  }
                },
                defaultSelect: { type: Number, default: 0 },
                disabled: { type: Boolean, default: !1 }
              },
              data: function () {
                return { selectTab: -1 };
              },
              mounted: function () {
                (this.selectTab = this.defaultSelect),
                  this.onSelectTab(this.tabList[this.selectTab]);
              },
              methods: {
                onSelectTab: function (e) {
                  this.disabled ||
                    ((this.selectTab = e.value),
                    this.$emit("select-tab", this.selectTab));
                }
              }
            },
            He = ["onClick"];
          var Ve = ue(De, [
            [
              "render",
              function (e, t, n, r, a, i) {
                return (
                  d(),
                  g(
                    "div",
                    {
                      class: w([
                        "nav-tabs",
                        { "nav-tabs-disabled": n.disabled }
                      ])
                    },
                    [
                      (d(!0),
                      g(
                        k,
                        null,
                        S(n.tabList, function (t, n) {
                          return (
                            d(),
                            g(
                              "div",
                              {
                                class: w([
                                  "nav-tab-btn",
                                  {
                                    "nav-tab-btn-active":
                                      a.selectTab === t.value
                                  }
                                ]),
                                onClick: function (e) {
                                  return i.onSelectTab(t);
                                },
                                key: n
                              },
                              h(e.$t(t.label)),
                              11,
                              He
                            )
                          );
                        }),
                        128
                      ))
                    ],
                    2
                  )
                );
              }
            ],
            ["__scopeId", "data-v-0f08a808"]
          ]);
          var Ge = ue(
              {
                name: "ESwitch",
                props: ["modelValue"],
                emits: ["update:modelValue"],
                methods: {
                  onToggle: function () {
                    this.$emit("update:modelValue", !this.modelValue);
                  }
                }
              },
              [
                [
                  "render",
                  function (e, t, n, r, a, i) {
                    return (
                      d(),
                      g(
                        "div",
                        {
                          class: w([
                            "e-switch",
                            { "e-switch-checked": n.modelValue }
                          ]),
                          onClick:
                            t[0] ||
                            (t[0] = function () {
                              return (
                                i.onToggle && i.onToggle.apply(i, arguments)
                              );
                            })
                        },
                        [
                          m(
                            "div",
                            {
                              class: w([
                                "e-switch-ball",
                                { "e-switch-ball-checked": n.modelValue }
                              ])
                            },
                            null,
                            2
                          )
                        ],
                        2
                      )
                    );
                  }
                ],
                ["__scopeId", "data-v-c3f7db72"]
              ]
            ),
            Fe = "/assets/sub-d275c2eb.svg",
            qe = "/assets/add-6c84d2ba.svg",
            Ue = {
              name: "BetControl",
              components: { ESwitch: Ge, NavTabs: Ve },
              props: { site: { type: Number, default: 0 } },
              watch: {
                currentFlyingMultiplier: function (e, t) {
                  this.gameStatus === z.Flying &&
                    this.isBet &&
                    this.isAutoCashOut &&
                    !1 === this.mask &&
                    e > t &&
                    e >= 100 * parseFloat(this.autoCashOutValue) &&
                    this.handler.sendCashOutRequest(
                      this.site,
                      this.gameManagerStore.currentFlyingMultiplier,
                      !0,
                      this.gameManagerStore.pingTime,
                      this.gameManagerStore.currentBetId
                    );
                },
                gameStatus: function (e, t) {
                  e === z.ChipIn &&
                    this.isNextRound &&
                    (this.gameManagerStore.setIsNextRound(this.site, !1),
                    this.handler.sendGroupChipInRequest(
                      this.site,
                      this.chipValue
                    ));
                },
                autoPlay: function (e, t) {
                  e > 0 && 0 === t && !this.isBet && this.onBet();
                },
                isBet: function (e, t) {
                  if (!e && this.autoPlay > 0) {
                    var n =
                        0 === this.site
                          ? this.gameManagerStore.autoPlayStartBalance0
                          : this.gameManagerStore.autoPlayStartBalance1,
                      r =
                        (0 === this.site
                          ? this.gameManagerStore.valueStopDecreases0
                          : this.gameManagerStore.valueStopDecreases1) *
                        this.playerStore.currencyRate,
                      a =
                        (0 === this.site
                          ? this.gameManagerStore.valueStopIncreases0
                          : this.gameManagerStore.valueStopIncreases1) *
                        this.playerStore.currencyRate;
                    if (r > 0 && this.playerStore.balance <= n - r)
                      return void this.gameManagerStore.stopAutoPlay(this.site);
                    if (a > 0 && this.playerStore.balance >= n + a)
                      return void this.gameManagerStore.stopAutoPlay(this.site);
                    this.onBet();
                  }
                }
              },
              computed: {
                currentFlyingMultiplier: function () {
                  return this.gameManagerStore.currentFlyingMultiplier;
                },
                autoPlay: function () {
                  return 0 === this.site
                    ? this.gameManagerStore.autoPlay0
                    : this.gameManagerStore.autoPlay1;
                },
                showBetButton: function () {
                  return (
                    this.gameStatus === z.ChipIn ||
                    (!this.isBet && !this.isNextRound)
                  );
                },
                showCashOutButton: function () {
                  return this.gameStatus === z.Flying && this.isBet;
                },
                showCancelButton: function () {
                  return this.gameStatus !== z.ChipIn && this.isNextRound;
                },
                chipValueList: function () {
                  var e = this;
                  if (this.playerStore.currencyChipInSteps.length < 6)
                    return [];
                  var t = this.playerStore.currencyChipInSteps.slice(0, 6);
                  return (
                    t.forEach(function (n, r) {
                      t[r] = n / e.playerStore.currencyRate;
                    }),
                    t
                  );
                },
                defaultChipValue: function () {
                  return this.chipValueList[2];
                },
                handler: function () {
                  return this.gameManagerStore.messageHandler;
                },
                gameStatus: function () {
                  return this.gameManagerStore.currentGroupStatus;
                },
                ante: function () {
                  return 0 === this.site
                    ? this.gameManagerStore.ante0
                    : this.gameManagerStore.ante1;
                },
                mask: function () {
                  return 0 === this.site
                    ? this.gameManagerStore.mask0
                    : this.gameManagerStore.mask1;
                },
                isBet: function () {
                  return 0 === this.site
                    ? this.gameManagerStore.isBet0
                    : this.gameManagerStore.isBet1;
                },
                isNextRound: function () {
                  return 0 === this.site
                    ? this.gameManagerStore.isNextRound0
                    : this.gameManagerStore.isNextRound1;
                },
                chipValue: function () {
                  return 0 === this.site
                    ? this.gameManagerStore.chipValue0
                    : this.gameManagerStore.chipValue1;
                }
              },
              mounted: function () {
                0 === this.chipValue &&
                  this.gameManagerStore.setChipValue(
                    this.site,
                    this.defaultChipValue.toFixed(2)
                  ),
                  (this.isDisableChip = 1 === this.site);
              },
              data: function () {
                return {
                  playerStore: ne(),
                  gameManagerStore: se(),
                  selectTab: 0,
                  tabList: [
                    { value: 0, label: "Bet" },
                    { value: 1, label: "Auto" }
                  ],
                  isDisableChip: !1,
                  isAutoCashOut: !1,
                  autoCashOutValue: "1.10"
                };
              },
              methods: {
                getCurrency: function (e) {
                  return Y(e, 2, this.playerStore.currencyRate);
                },
                onSelectTab: function (e) {
                  this.selectTab = e;
                },
                onChipItemClick: function (e) {
                  this.gameManagerStore.setChipValue(this.site, e.toFixed(2));
                },
                onAddChip: function () {
                  var e = (
                    parseFloat(this.chipValue) +
                    this.defaultChipValue / 5
                  ).toFixed(2);
                  this.gameManagerStore.setChipValue(this.site, e);
                },
                onSubChip: function () {
                  var e =
                    parseFloat(this.chipValue) - this.defaultChipValue / 5;
                  e > 0 &&
                    this.gameManagerStore.setChipValue(this.site, e.toFixed(2));
                },
                onBet: function () {
                  "onBet site="
                    .concat(this.site, " status=")
                    .concat(this.gameStatus, " chip=")
                    .concat(this.chipValue),
                    this.gameStatus === z.ChipIn
                      ? this.handler.sendGroupChipInRequest(
                          this.site,
                          this.chipValue
                        )
                      : this.gameManagerStore.setIsNextRound(this.site, !0);
                },
                onCashOut: function () {
                  this.handler.sendCashOutRequest(
                    this.site,
                    this.gameManagerStore.currentFlyingMultiplier,
                    !1,
                    this.gameManagerStore.pingTime,
                    this.gameManagerStore.currentBetId
                  );
                },
                onCancel: function () {
                  this.gameManagerStore.setIsNextRound(this.site, !1),
                    this.gameManagerStore.stopAutoPlay(this.site);
                },
                onInput: function (e) {
                  var t = parseFloat(e.target.value);
                  this.gameManagerStore.setChipValue(this.site, t);
                },
                onInputChange: function (e) {
                  var t = parseFloat(e.target.value).toFixed(2);
                  this.gameManagerStore.setChipValue(this.site, t);
                },
                onInputChangeAutoCashOut: function (e) {
                  this.autoCashOutValue = parseFloat(e.target.value).toFixed(2);
                },
                onAutoPlay: function () {
                  this.gameManagerStore.showAutoPlayOptions(!0, this.site);
                },
                onAutoPlayStop: function () {
                  this.gameManagerStore.stopAutoPlay(this.site);
                }
              }
            },
            Je = function (e) {
              return f("data-v-efc1c1f6"), (e = e()), b(), e;
            },
            ze = { class: "bet-control-other" },
            $e = [
              Je(function () {
                return m(
                  "img",
                  {
                    class: "bet-control-other-add-icon",
                    src: "/assets/add2-1837c3d1.svg",
                    alt: "add2"
                  },
                  null,
                  -1
                );
              })
            ],
            Ye = [
              Je(function () {
                return m(
                  "img",
                  {
                    class: "bet-control-other-sub-icon",
                    src: "/assets/sub2-ee0c2fda.svg",
                    alt: "sub2"
                  },
                  null,
                  -1
                );
              })
            ],
            Xe = { class: "tab-view bet-panel" },
            Qe = { class: "bet-panel-chip" },
            Ke = { class: "bet-panel-chip-display" },
            Ze = ["disabled", "value"],
            et = { class: "bet-panel-chip-select" },
            tt = ["onClick", "disabled"],
            nt = { class: "bet-panel-buttons" },
            rt = { class: "bet-panel-btn-title" },
            at = { class: "bet-panel-btn-value" },
            it = { class: "bet-panel-btn-title" },
            ot = { class: "bet-panel-btn-value" },
            st = { key: 2, class: "btn-cancel" },
            lt = { class: "btn-cancel-title" },
            ct = { class: "bet-panel-btn-title" },
            ut = { key: 0, class: "mask" },
            pt = { key: 0, class: "separator" },
            dt = { key: 1, class: "tab-view auto-panel" },
            gt = { class: "auto-panel-text" },
            mt = ["disabled"];
          var ht = ue(Ue, [
              [
                "render",
                function (e, t, n, r, a, i) {
                  var o = v("NavTabs"),
                    s = v("ESwitch");
                  return (
                    d(),
                    g(
                      "div",
                      {
                        class: w([
                          "bet-control",
                          { "bet-control-active": i.isBet || i.isNextRound }
                        ])
                      },
                      [
                        N(
                          o,
                          {
                            style: { "margin-top": "0.5rem" },
                            "tab-list": a.tabList,
                            onSelectTab: i.onSelectTab,
                            disabled: a.isAutoCashOut || i.autoPlay > 0
                          },
                          null,
                          8,
                          ["tab-list", "onSelectTab", "disabled"]
                        ),
                        m("div", ze, [
                          0 === n.site && !1 === a.gameManagerStore.isShowSite1
                            ? (d(),
                              g(
                                "div",
                                {
                                  key: 0,
                                  class: "bet-control-other-add",
                                  onClick:
                                    t[0] ||
                                    (t[0] = function (e) {
                                      return (a.gameManagerStore.isShowSite1 = !0);
                                    })
                                },
                                $e
                              ))
                            : y("", !0),
                          1 !== n.site ||
                          !a.gameManagerStore.isShowSite1 ||
                          i.isNextRound ||
                          i.isBet
                            ? y("", !0)
                            : (d(),
                              g(
                                "div",
                                {
                                  key: 1,
                                  class: "bet-control-other-sub",
                                  onClick:
                                    t[1] ||
                                    (t[1] = function (e) {
                                      return (a.gameManagerStore.isShowSite1 = !1);
                                    })
                                },
                                Ye
                              ))
                        ]),
                        m("div", Xe, [
                          m("div", Qe, [
                            m("div", Ke, [
                              m(
                                "img",
                                {
                                  class: w([
                                    "icon",
                                    { "icon-disable": i.isBet }
                                  ]),
                                  src: Fe,
                                  alt: "sub",
                                  onClick:
                                    t[2] ||
                                    (t[2] = function () {
                                      return (
                                        i.onSubChip &&
                                        i.onSubChip.apply(i, arguments)
                                      );
                                    })
                                },
                                null,
                                2
                              ),
                              m(
                                "input",
                                {
                                  disabled: i.isBet,
                                  class: "bet-panel-chip-display-input",
                                  value: i.chipValue,
                                  type: "number",
                                  onInput:
                                    t[3] ||
                                    (t[3] = function () {
                                      return (
                                        i.onInput &&
                                        i.onInput.apply(i, arguments)
                                      );
                                    }),
                                  onChange:
                                    t[4] ||
                                    (t[4] = function () {
                                      return (
                                        i.onInputChange &&
                                        i.onInputChange.apply(i, arguments)
                                      );
                                    })
                                },
                                null,
                                40,
                                Ze
                              ),
                              m(
                                "img",
                                {
                                  class: w([
                                    "icon",
                                    { "icon-disable": i.isBet }
                                  ]),
                                  src: qe,
                                  alt: "add",
                                  onClick:
                                    t[5] ||
                                    (t[5] = function () {
                                      return (
                                        i.onAddChip &&
                                        i.onAddChip.apply(i, arguments)
                                      );
                                    })
                                },
                                null,
                                2
                              )
                            ]),
                            m("div", et, [
                              (d(!0),
                              g(
                                k,
                                null,
                                S(i.chipValueList, function (e, t) {
                                  return (
                                    d(),
                                    g(
                                      "button",
                                      {
                                        key: t,
                                        class: "bet-panel-chip-select-item",
                                        onClick: function (t) {
                                          return i.onChipItemClick(e);
                                        },
                                        disabled: i.isBet
                                      },
                                      h(e),
                                      9,
                                      tt
                                    )
                                  );
                                }),
                                128
                              ))
                            ])
                          ]),
                          m("div", nt, [
                            i.showBetButton
                              ? (d(),
                                g(
                                  "div",
                                  {
                                    key: 0,
                                    class: w([
                                      "bet-panel-btn bet-panel-btn-bet",
                                      { "bet-panel-btn-bet-disable": i.isBet }
                                    ]),
                                    onClick:
                                      t[6] ||
                                      (t[6] = function () {
                                        return (
                                          i.onBet && i.onBet.apply(i, arguments)
                                        );
                                      })
                                  },
                                  [
                                    m(
                                      "div",
                                      rt,
                                      h(e.$t("Bet").toUpperCase()),
                                      1
                                    ),
                                    m("div", at, h(i.chipValue), 1)
                                  ],
                                  2
                                ))
                              : y("", !0),
                            i.showCashOutButton
                              ? (d(),
                                g(
                                  "div",
                                  {
                                    key: 1,
                                    class:
                                      "bet-panel-btn bet-panel-btn-cash-out",
                                    onClick:
                                      t[7] ||
                                      (t[7] = function () {
                                        return (
                                          i.onCashOut &&
                                          i.onCashOut.apply(i, arguments)
                                        );
                                      })
                                  },
                                  [
                                    m(
                                      "div",
                                      it,
                                      h(e.$t("CashOut").toUpperCase()),
                                      1
                                    ),
                                    m(
                                      "div",
                                      ot,
                                      h(
                                        a.gameManagerStore
                                          .currentFlyingMultiplierStr
                                      ),
                                      1
                                    )
                                  ]
                                ))
                              : y("", !0),
                            i.showCancelButton
                              ? (d(),
                                g("div", st, [
                                  m("div", lt, h(e.$t("WaitNextRound")), 1),
                                  m(
                                    "div",
                                    {
                                      class:
                                        "bet-panel-btn bet-panel-btn-cancel",
                                      onClick:
                                        t[8] ||
                                        (t[8] = function () {
                                          return (
                                            i.onCancel &&
                                            i.onCancel.apply(i, arguments)
                                          );
                                        })
                                    },
                                    [
                                      m(
                                        "div",
                                        ct,
                                        h(e.$t("Cancel").toUpperCase()),
                                        1
                                      )
                                    ]
                                  )
                                ]))
                              : y("", !0)
                          ]),
                          i.mask ? (d(), g("div", ut)) : y("", !0)
                        ]),
                        1 === a.selectTab ? (d(), g("div", pt)) : y("", !0),
                        1 === a.selectTab
                          ? (d(),
                            g("div", dt, [
                              0 === i.autoPlay
                                ? (d(),
                                  g(
                                    "div",
                                    {
                                      key: 0,
                                      class: "auto-panel-btn",
                                      onClick:
                                        t[9] ||
                                        (t[9] = function () {
                                          return (
                                            i.onAutoPlay &&
                                            i.onAutoPlay.apply(i, arguments)
                                          );
                                        })
                                    },
                                    h(e.$t("AutoPlay")),
                                    1
                                  ))
                                : (d(),
                                  g(
                                    "div",
                                    {
                                      key: 1,
                                      class:
                                        "auto-panel-btn auto-panel-btn-stop",
                                      onClick:
                                        t[10] ||
                                        (t[10] = function () {
                                          return (
                                            i.onAutoPlayStop &&
                                            i.onAutoPlayStop.apply(i, arguments)
                                          );
                                        })
                                    },
                                    h(e.$t("Stop")) +
                                      "(" +
                                      h(i.autoPlay) +
                                      ") ",
                                    1
                                  )),
                              m("div", gt, h(e.$t("AutoCashOut")), 1),
                              N(
                                s,
                                {
                                  style: { "margin-left": "0.3rem" },
                                  modelValue: a.isAutoCashOut,
                                  "onUpdate:modelValue":
                                    t[11] ||
                                    (t[11] = function (e) {
                                      return (a.isAutoCashOut = e);
                                    })
                                },
                                null,
                                8,
                                ["modelValue"]
                              ),
                              B(
                                m(
                                  "input",
                                  {
                                    disabled: !a.isAutoCashOut,
                                    class: "auto-panel-cash-out-input",
                                    "onUpdate:modelValue":
                                      t[12] ||
                                      (t[12] = function (e) {
                                        return (a.autoCashOutValue = e);
                                      }),
                                    type: "number",
                                    onChange:
                                      t[13] ||
                                      (t[13] = function () {
                                        return (
                                          i.onInputChangeAutoCashOut &&
                                          i.onInputChangeAutoCashOut.apply(
                                            i,
                                            arguments
                                          )
                                        );
                                      })
                                  },
                                  null,
                                  40,
                                  mt
                                ),
                                [[W, a.autoCashOutValue]]
                              )
                            ]))
                          : y("", !0)
                      ],
                      2
                    )
                  );
                }
              ],
              ["__scopeId", "data-v-efc1c1f6"]
            ]),
            yt = { class: "bet-controls" };
          var ft = ue(
              {
                name: "BetControls",
                components: { BetControl: ht },
                data: function () {
                  return { gameManagerStore: se() };
                }
              },
              [
                [
                  "render",
                  function (e, t, n, r, a, i) {
                    var o = v("BetControl");
                    return (
                      d(),
                      g("div", yt, [
                        N(o, { style: { "margin-bottom": "0.3rem" }, site: 0 }),
                        a.gameManagerStore.isShowSite1
                          ? (d(), T(o, { key: 0, site: 1 }))
                          : y("", !0)
                      ])
                    );
                  }
                ],
                ["__scopeId", "data-v-8cddc115"]
              ]
            ),
            bt = { class: "history-panel" },
            wt = { class: "history-panel-title" },
            vt = { class: "history-panel-content" };
          var kt = ue(
              {
                name: "HistoryPanel",
                components: { FlewAwayMultiplier: ke },
                data: function () {
                  return { historyStore: re() };
                },
                methods: {
                  onExpand: function () {
                    console.log("onExpand");
                  }
                }
              },
              [
                [
                  "render",
                  function (e, t, n, r, a, i) {
                    var o = v("FlewAwayMultiplier");
                    return (
                      d(),
                      g("div", bt, [
                        m("div", wt, h(e.$t("RoundHistory")), 1),
                        m("div", vt, [
                          (d(!0),
                          g(
                            k,
                            null,
                            S(a.historyStore.histories, function (e, t) {
                              return (
                                d(),
                                T(
                                  o,
                                  {
                                    style: { margin: "0 0.3rem 0.3rem 0" },
                                    multiplier: e.multiplier,
                                    key: t
                                  },
                                  null,
                                  8,
                                  ["multiplier"]
                                )
                              );
                            }),
                            128
                          ))
                        ])
                      ])
                    );
                  }
                ],
                ["__scopeId", "data-v-7be45172"]
              ]
            ),
            St = "/assets/timer-def6dcd9.svg",
            Tt = "/assets/arrows-bottom-ac20c1b6.svg",
            Ot = {
              name: "HistoryExpandButton",
              data: function () {
                return { historyStore: re() };
              },
              methods: {
                onExpand: function () {
                  console.log("onExpand"),
                    (this.historyStore.showHistoryPanel = !this.historyStore
                      .showHistoryPanel);
                }
              }
            },
            xt = (function (e) {
              return f("data-v-d2f5dc3d"), (e = e()), b(), e;
            })(function () {
              return m(
                "img",
                {
                  class: "history-expand-button-time",
                  src: St,
                  alt: "history"
                },
                null,
                -1
              );
            }),
            Lt = {
              key: 0,
              class: "history-expand-button-bottom",
              src: Tt,
              alt: "history"
            },
            Rt = {
              key: 1,
              class: "history-expand-button-top",
              src: Tt,
              alt: "history"
            };
          var At = ue(Ot, [
              [
                "render",
                function (e, t, n, r, a, i) {
                  return (
                    d(),
                    g(
                      "div",
                      {
                        class: "history-expand-button",
                        onClick:
                          t[0] ||
                          (t[0] = function () {
                            return i.onExpand && i.onExpand.apply(i, arguments);
                          })
                      },
                      [
                        xt,
                        a.historyStore.showHistoryPanel
                          ? y("", !0)
                          : (d(), g("img", Lt)),
                        a.historyStore.showHistoryPanel
                          ? (d(), g("img", Rt))
                          : y("", !0)
                      ]
                    )
                  );
                }
              ],
              ["__scopeId", "data-v-d2f5dc3d"]
            ]),
            It = { class: "game-scene" };
          var Pt = ue(
              {
                name: "GameScene",
                components: {
                  HistoryExpandButton: At,
                  HistoryPanel: kt,
                  HistoryResult: Te,
                  FlightStage: _e,
                  BetControls: ft
                },
                mounted: function () {},
                data: function () {
                  return { show: !1, playerStore: ne(), historyStore: re() };
                },
                computed: {},
                methods: {}
              },
              [
                [
                  "render",
                  function (e, t, n, r, a, i) {
                    var o = v("HistoryResult"),
                      s = v("FlightStage"),
                      l = v("BetControls"),
                      c = v("HistoryPanel"),
                      u = v("HistoryExpandButton");
                    return (
                      d(),
                      g("div", It, [
                        N(o, { style: { "margin-right": "1rem" } }),
                        N(s),
                        N(l, { style: { "margin-top": "0.3rem" } }),
                        a.historyStore.showHistoryPanel
                          ? (d(),
                            T(c, {
                              key: 0,
                              style: { "margin-right": "0.3rem" }
                            }))
                          : y("", !0),
                        N(u, {
                          style: {
                            position: "absolute",
                            right: "0.5rem",
                            top: "0.3rem"
                          }
                        })
                      ])
                    );
                  }
                ],
                ["__scopeId", "data-v-7d3dcfbe"]
              ]
            ),
            Ct = {
              name: "SplashPanel",
              components: {},
              mounted: function () {},
              data: function () {
                return {};
              }
            },
            Mt = function (e) {
              return f("data-v-bd45bd83"), (e = e()), b(), e;
            },
            jt = { class: "splash" },
            Nt = [
              Mt(function () {
                return m(
                  "img",
                  {
                    class: "logo",
                    src: "/airplane/airplane1.svg",
                    alt: "logo"
                  },
                  null,
                  -1
                );
              }),
              Mt(function () {
                return m(
                  "img",
                  { class: "logo-txt", src: ce, alt: "logo" },
                  null,
                  -1
                );
              }),
              Mt(function () {
                return m("div", { class: "tips" }, "Connection...", -1);
              })
            ];
          var Bt = ue(Ct, [
              [
                "render",
                function (e, t, n, r, a, i) {
                  return d(), g("div", jt, Nt);
                }
              ],
              ["__scopeId", "data-v-bd45bd83"]
            ]),
            Wt = "/assets/close-f477c2ef.svg",
            Et = {
              name: "InfoBoards",
              components: { FlewAwayMultiplier: ke, NavTabs: Ve },
              data: function () {
                return {
                  gameManagerStore: se(),
                  playerStore: ne(),
                  selectTab: 1,
                  tabList: [
                    { value: 0, label: "AllBets" },
                    { value: 1, label: "MyBets" },
                    { value: 2, label: "Top" }
                  ],
                  isPrevHand: !1,
                  selectRankType: 1,
                  selectRankTime: 0,
                  rankTimeList: [
                    { value: 0, label: "Rank.Day" },
                    { value: 1, label: "Rank.Week" },
                    { value: 2, label: "Rank.Month" },
                    { value: 3, label: "Rank.Year" }
                  ]
                };
              },
              computed: {
                totalAnte: function () {
                  return this.allChipInList.reduce(function (e, t) {
                    return e + t.ante;
                  }, 0);
                },
                allChipInList: function () {
                  return this.isPrevHand
                    ? this.gameManagerStore.prevChipInList
                    : this.gameManagerStore.allChipInList;
                },
                myChipInList: function () {
                  return this.gameManagerStore.myChipInList;
                },
                handler: function () {
                  return this.gameManagerStore.messageHandler;
                },
                rankList: function () {
                  return this.gameManagerStore.rankList &&
                    0 !== this.gameManagerStore.rankList.length
                    ? 0 === this.selectRankTime
                      ? this.gameManagerStore.rankList.daily
                      : 1 === this.selectRankTime
                      ? this.gameManagerStore.rankList.weekly
                      : 2 === this.selectRankTime
                      ? this.gameManagerStore.rankList.monthly
                      : 3 === this.selectRankTime
                      ? this.gameManagerStore.rankList.yearly
                      : []
                    : [];
                }
              },
              methods: {
                getTime: function (e) {
                  var t = new Date(e),
                    n = t.getHours(),
                    r = t.getMinutes();
                  return "".concat(n, ":").concat(r);
                },
                getCurrency: function (e) {
                  return Y(e, 2, this.playerStore.currencyRate);
                },
                onSelectTab: function (e) {
                  (this.selectTab = e),
                    0 === this.selectTab
                      ? (this.isPrevHand = !1)
                      : 2 === this.selectTab &&
                        this.onSelectRankType(
                          ee.RankListRequest.RankType.RankTypeCashOutMultiplier
                        );
                },
                onOpenPreviousHand: function () {
                  this.isPrevHand = !this.isPrevHand;
                },
                onSelectRankType: function (e) {
                  (this.selectRankType = e),
                    this.handler.sendRankListRequest(e);
                },
                onSelectRankTime: function (e) {
                  this.selectRankTime = e;
                }
              }
            },
            _t = { class: "info-boards" },
            Dt = { key: 0, class: "tab-view" },
            Ht = { class: "all-bets" },
            Vt = { class: "all-bets-info" },
            Gt = { class: "all-bets-info-title" },
            Ft = { class: "all-bets-info-all" },
            qt = { class: "all-bets-flew-away" },
            Ut = {
              key: 0,
              class: "all-bets-prev-icon",
              src: Wt,
              alt: "prev hand"
            },
            Jt = {
              key: 1,
              class: "all-bets-prev-icon",
              src: St,
              alt: "prev hand"
            },
            zt = { class: "all-bets-prev-text" },
            $t = (function (e) {
              return f("data-v-4540e2ae"), (e = e()), b(), e;
            })(function () {
              return m("div", { class: "slicer" }, null, -1);
            }),
            Yt = { class: "chip-in-list" },
            Xt = { class: "chip-in-list-header" },
            Qt = { class: "chip-in-list-header-user" },
            Kt = { class: "chip-in-list-header-bet" },
            Zt = { class: "chip-in-list-header-multiplier" },
            en = { class: "chip-in-list-header-cash-out" },
            tn = { class: "chip-in-item-user" },
            nn = { class: "chip-in-item-bet" },
            rn = { class: "chip-in-item-multiplier" },
            an = { class: "chip-in-item-cash-out" },
            on = { key: 0 },
            sn = { key: 1, class: "tab-view" },
            ln = { class: "chip-in-list" },
            cn = { class: "chip-in-list-header" },
            un = { class: "chip-in-list-header-user" },
            pn = { class: "chip-in-list-header-bet" },
            dn = { class: "chip-in-list-header-multiplier" },
            gn = { class: "chip-in-list-header-cash-out" },
            mn = { class: "chip-in-item-user" },
            hn = { class: "chip-in-item-bet" },
            yn = { class: "chip-in-item-multiplier" },
            fn = { class: "chip-in-item-cash-out" },
            bn = { key: 0 },
            wn = { key: 2, class: "tab-view" },
            vn = { class: "rank-content" },
            kn = { class: "rank-type-list" },
            Sn = { class: "rank-content-list" },
            Tn = { class: "chip-in-list" },
            On = { class: "chip-in-list-header" },
            xn = {
              key: 0,
              class: "chip-in-list-header-user",
              style: { width: "30%" }
            },
            Ln = {
              class: "chip-in-list-header-multiplier",
              style: { width: "30%" }
            },
            Rn = {
              key: 1,
              class: "chip-in-list-header-cash-out",
              style: { width: "40%" }
            },
            An = {
              key: 0,
              class: "chip-in-item-user",
              style: { width: "30%" }
            },
            In = { class: "chip-in-item-multiplier", style: { width: "30%" } },
            Pn = {
              key: 1,
              class: "chip-in-item-cash-out",
              style: { width: "40%" }
            },
            Cn = { key: 0 };
          var Mn = ue(Et, [
              [
                "render",
                function (e, t, n, r, a, i) {
                  var o = v("NavTabs"),
                    s = v("FlewAwayMultiplier");
                  return (
                    d(),
                    g("div", _t, [
                      N(
                        o,
                        {
                          style: { "margin-top": "0.5rem" },
                          "tab-list": a.tabList,
                          onSelectTab: i.onSelectTab
                        },
                        null,
                        8,
                        ["tab-list", "onSelectTab"]
                      ),
                      0 === a.selectTab
                        ? (d(),
                          g("div", Dt, [
                            m("div", Ht, [
                              m("div", Vt, [
                                m(
                                  "div",
                                  Gt,
                                  h(e.$t("AllBets").toUpperCase()),
                                  1
                                ),
                                m("div", Ft, h(i.getCurrency(i.totalAnte)), 1)
                              ]),
                              m("div", qt, [
                                a.isPrevHand &&
                                a.gameManagerStore.preFlewAwayMultiplier > 0
                                  ? (d(),
                                    T(
                                      s,
                                      {
                                        key: 0,
                                        multiplier:
                                          a.gameManagerStore
                                            .preFlewAwayMultiplier
                                      },
                                      null,
                                      8,
                                      ["multiplier"]
                                    ))
                                  : y("", !0)
                              ]),
                              m(
                                "div",
                                {
                                  class: w([
                                    "all-bets-prev",
                                    { "all-bets-prev-active": a.isPrevHand }
                                  ]),
                                  onClick:
                                    t[0] ||
                                    (t[0] = function () {
                                      return (
                                        i.onOpenPreviousHand &&
                                        i.onOpenPreviousHand.apply(i, arguments)
                                      );
                                    })
                                },
                                [
                                  a.isPrevHand
                                    ? (d(), g("img", Ut))
                                    : (d(), g("img", Jt)),
                                  m("div", zt, h(e.$t("PrevHand")), 1)
                                ],
                                2
                              )
                            ]),
                            $t,
                            m("div", Yt, [
                              m("div", Xt, [
                                m("div", Qt, "  " + h(e.$t("User")), 1),
                                m("div", Kt, h(e.$t("Bet")) + " ", 1),
                                m("div", Zt, "  " + h(e.$t("Multiplier")), 1),
                                m("div", en, h(e.$t("CashOut")) + "  ", 1)
                              ]),
                              (d(!0),
                              g(
                                k,
                                null,
                                S(i.allChipInList, function (e, t) {
                                  return (
                                    d(),
                                    g(
                                      "div",
                                      {
                                        class: w([
                                          "chip-in-item",
                                          {
                                            "chip-in-item-active":
                                              0 !== e.multiplier
                                          }
                                        ]),
                                        key: t
                                      },
                                      [
                                        m("div", tn, "  " + h(e.nickName), 1),
                                        m(
                                          "div",
                                          nn,
                                          h(i.getCurrency(e.ante)) + " ",
                                          1
                                        ),
                                        m("div", rn, [
                                          0 !== e.multiplier
                                            ? (d(),
                                              T(
                                                s,
                                                {
                                                  key: 0,
                                                  style: {
                                                    "margin-left": "0.5rem"
                                                  },
                                                  multiplier: e.multiplier
                                                },
                                                null,
                                                8,
                                                ["multiplier"]
                                              ))
                                            : y("", !0)
                                        ]),
                                        m("div", an, [
                                          0 !== e.award
                                            ? (d(),
                                              g(
                                                "span",
                                                on,
                                                h(i.getCurrency(e.award)),
                                                1
                                              ))
                                            : y("", !0),
                                          E("   ")
                                        ])
                                      ],
                                      2
                                    )
                                  );
                                }),
                                128
                              ))
                            ])
                          ]))
                        : y("", !0),
                      1 === a.selectTab
                        ? (d(),
                          g("div", sn, [
                            m("div", ln, [
                              m("div", cn, [
                                m("div", un, "  " + h(e.$t("Date")), 1),
                                m("div", pn, h(e.$t("Bet")) + " ", 1),
                                m("div", dn, "  " + h(e.$t("Multiplier")), 1),
                                m("div", gn, h(e.$t("CashOut")) + "  ", 1)
                              ]),
                              (d(!0),
                              g(
                                k,
                                null,
                                S(i.myChipInList, function (e, t) {
                                  return (
                                    d(),
                                    g(
                                      "div",
                                      {
                                        class: w([
                                          "chip-in-item",
                                          {
                                            "chip-in-item-active":
                                              0 !== e.chipIn.multiplier
                                          }
                                        ]),
                                        key: t
                                      },
                                      [
                                        m(
                                          "div",
                                          mn,
                                          "  " + h(i.getTime(e.timestamp)),
                                          1
                                        ),
                                        m(
                                          "div",
                                          hn,
                                          h(i.getCurrency(e.chipIn.ante)) + " ",
                                          1
                                        ),
                                        m("div", yn, [
                                          0 !== e.chipIn.multiplier
                                            ? (d(),
                                              T(
                                                s,
                                                {
                                                  key: 0,
                                                  style: {
                                                    "margin-left": "0.5rem"
                                                  },
                                                  multiplier:
                                                    e.chipIn.multiplier
                                                },
                                                null,
                                                8,
                                                ["multiplier"]
                                              ))
                                            : y("", !0)
                                        ]),
                                        m("div", fn, [
                                          0 !== e.chipIn.award
                                            ? (d(),
                                              g(
                                                "span",
                                                bn,
                                                h(
                                                  i.getCurrency(e.chipIn.award)
                                                ),
                                                1
                                              ))
                                            : y("", !0),
                                          E("   ")
                                        ])
                                      ],
                                      2
                                    )
                                  );
                                }),
                                128
                              ))
                            ])
                          ]))
                        : y("", !0),
                      2 === a.selectTab
                        ? (d(),
                          g("div", wn, [
                            m("div", vn, [
                              m("div", kn, [
                                m(
                                  "div",
                                  {
                                    class: w([
                                      "rank-type-item",
                                      {
                                        "rank-type-item-active":
                                          1 === a.selectRankType
                                      }
                                    ]),
                                    onClick:
                                      t[1] ||
                                      (t[1] = function (e) {
                                        return i.onSelectRankType(1);
                                      })
                                  },
                                  h(e.$t("Rank.HugeWins")),
                                  3
                                ),
                                m(
                                  "div",
                                  {
                                    class: w([
                                      "rank-type-item",
                                      {
                                        "rank-type-item-active":
                                          2 === a.selectRankType
                                      }
                                    ]),
                                    onClick:
                                      t[2] ||
                                      (t[2] = function (e) {
                                        return i.onSelectRankType(2);
                                      })
                                  },
                                  h(e.$t("Rank.BiggestWins")),
                                  3
                                ),
                                m(
                                  "div",
                                  {
                                    class: w([
                                      "rank-type-item",
                                      {
                                        "rank-type-item-active":
                                          0 === a.selectRankType
                                      }
                                    ]),
                                    onClick:
                                      t[3] ||
                                      (t[3] = function (e) {
                                        return i.onSelectRankType(0);
                                      })
                                  },
                                  h(e.$t("Rank.Multipliers")),
                                  3
                                )
                              ]),
                              N(
                                o,
                                {
                                  style: { "margin-top": "0.5rem" },
                                  "tab-list": a.rankTimeList,
                                  onSelectTab: i.onSelectRankTime
                                },
                                null,
                                8,
                                ["tab-list", "onSelectTab"]
                              ),
                              m("div", Sn, [
                                m("div", Tn, [
                                  m("div", On, [
                                    0 !== a.selectRankType
                                      ? (d(),
                                        g(
                                          "div",
                                          xn,
                                          "   " + h(e.$t("User")),
                                          1
                                        ))
                                      : y("", !0),
                                    m(
                                      "div",
                                      Ln,
                                      "    " + h(e.$t("Multiplier")),
                                      1
                                    ),
                                    0 !== a.selectRankType
                                      ? (d(),
                                        g(
                                          "div",
                                          Rn,
                                          h(e.$t("CashOut")) + "   ",
                                          1
                                        ))
                                      : y("", !0)
                                  ]),
                                  (d(!0),
                                  g(
                                    k,
                                    null,
                                    S(i.rankList, function (e, t) {
                                      return (
                                        d(),
                                        g(
                                          "div",
                                          { class: "chip-in-item", key: t },
                                          [
                                            0 !== a.selectRankType
                                              ? (d(),
                                                g(
                                                  "div",
                                                  An,
                                                  "   " + h(e.nickname),
                                                  1
                                                ))
                                              : y("", !0),
                                            m("div", In, [
                                              0 !== e.multiplier
                                                ? (d(),
                                                  T(
                                                    s,
                                                    {
                                                      key: 0,
                                                      style: {
                                                        "margin-left": "0.5rem"
                                                      },
                                                      multiplier: e.multiplier
                                                    },
                                                    null,
                                                    8,
                                                    ["multiplier"]
                                                  ))
                                                : y("", !0)
                                            ]),
                                            0 !== a.selectRankType
                                              ? (d(),
                                                g("div", Pn, [
                                                  0 !== e.score
                                                    ? (d(),
                                                      g(
                                                        "span",
                                                        Cn,
                                                        h(
                                                          i.getCurrency(e.score)
                                                        ),
                                                        1
                                                      ))
                                                    : y("", !0),
                                                  E("   ")
                                                ]))
                                              : y("", !0)
                                          ]
                                        )
                                      );
                                    }),
                                    128
                                  ))
                                ])
                              ])
                            ])
                          ]))
                        : y("", !0)
                    ])
                  );
                }
              ],
              ["__scopeId", "data-v-4540e2ae"]
            ]),
            jn = { class: "win-message" },
            Nn = { class: "win-item-multiplier" },
            Bn = { class: "win-item-multiplier-title" },
            Wn = { class: "win-item-multiplier-value" },
            En = { class: "win-item-award" },
            _n = { class: "win-item-award-title" },
            Dn = { class: "win-item-award-value" };
          var Hn = ue(
              {
                name: "WinMessage",
                data: function () {
                  return { gameManagerStore: se(), playerStore: ne() };
                },
                computed: {
                  winList: function () {
                    return this.gameManagerStore.winMessageList;
                  }
                },
                methods: {
                  getCurrency: function (e) {
                    return Y(e, 2, this.playerStore.currencyRate);
                  }
                }
              },
              [
                [
                  "render",
                  function (e, t, n, r, a, i) {
                    return (
                      d(),
                      g("div", jn, [
                        (d(!0),
                        g(
                          k,
                          null,
                          S(i.winList, function (t, n) {
                            return (
                              d(),
                              g("div", { class: "win-item", key: n }, [
                                m("div", Nn, [
                                  m("div", Bn, h(e.$t("WinInfo")), 1),
                                  m(
                                    "div",
                                    Wn,
                                    h((t.multiplier / 100).toFixed(2)) + "x",
                                    1
                                  )
                                ]),
                                m("div", En, [
                                  m("div", _n, h(e.$t("Win")), 1),
                                  m("div", Dn, h(i.getCurrency(t.award)), 1)
                                ])
                              ])
                            );
                          }),
                          128
                        ))
                      ])
                    );
                  }
                ],
                ["__scopeId", "data-v-ff1c6f77"]
              ]
            ),
            Vn = { class: "auto-play-options" },
            Gn = { class: "auto-play-content" },
            Fn = { class: "auto-play-header" },
            qn = { class: "auto-play-header-title" },
            Un = { class: "auto-play-main" },
            Jn = { key: 0, class: "auto-play-main-error" },
            zn = { class: "auto-play-main-error-message" },
            $n = { class: "auto-play-main-number" },
            Yn = { class: "auto-play-main-number-title" },
            Xn = { class: "auto-play-main-number-list" },
            Qn = ["onClick"],
            Kn = { class: "auto-play-main-item" },
            Zn = { class: "auto-play-main-item-value" },
            er = ["disabled"],
            tr = { class: "auto-play-main-item" },
            nr = { class: "auto-play-main-item-value" },
            rr = ["disabled"],
            ar = { class: "auto-play-main-item" },
            ir = { class: "auto-play-main-item-value" },
            or = ["disabled"],
            sr = { class: "auto-play-footer" };
          var lr = ue(
              {
                name: "AutoPlayOptions",
                components: { ESwitch: Ge },
                props: { site: { type: Number, default: 0 } },
                data: function () {
                  return {
                    gameManagerStore: se(),
                    isStopDecreases: !1,
                    isStopIncreases: !1,
                    isStopSingleWin: !1,
                    valueStopDecreases: "0.00",
                    valueStopIncreases: "0.00",
                    valueStopSingleWin: "0.00",
                    autoPlayNumber: [10, 20, 50, 100],
                    selectAutoPlayNumber: 0,
                    isShowError: !1,
                    errorMessage: ""
                  };
                },
                computed: {
                  stepValue: function () {
                    var e = ne();
                    return 0 === e.currencyChipInSteps.length
                      ? 0.1
                      : e.currencyChipInSteps[0] / e.currencyRate;
                  }
                },
                methods: {
                  onClose: function () {
                    this.gameManagerStore.showAutoPlayOptions(!1);
                  },
                  onReset: function () {
                    (this.selectAutoPlayNumber = 0),
                      (this.isStopDecreases = !1),
                      (this.isStopIncreases = !1),
                      (this.isStopSingleWin = !1),
                      (this.valueStopDecreases = "0.00"),
                      (this.valueStopIncreases = "0.00"),
                      (this.valueStopSingleWin = "0.00"),
                      (this.isShowError = !1);
                  },
                  onStart: function () {
                    if (0 === this.selectAutoPlayNumber)
                      return (
                        (this.isShowError = !0),
                        void (this.errorMessage = this.$t(
                          "AutoPlayOptions.ErrorSetNumberOfRounds"
                        ))
                      );
                    if (
                      !this.isStopDecreases &&
                      !this.isStopIncreases &&
                      !this.isStopSingleWin
                    )
                      return (
                        (this.isShowError = !0),
                        void (this.errorMessage = this.$t(
                          "AutoPlayOptions.ErrorStopPoint"
                        ))
                      );
                    var e = parseFloat(this.valueStopDecreases),
                      t = parseFloat(this.valueStopIncreases),
                      n = parseFloat(this.valueStopSingleWin);
                    if (
                      (this.isStopDecreases && e <= 0) ||
                      (this.isStopIncreases && t <= 0) ||
                      (this.isStopSingleWin && n <= 0)
                    )
                      return (
                        (this.isShowError = !0),
                        void (this.errorMessage = this.$t(
                          "AutoPlayOptions.ErrorCanNotZero"
                        ))
                      );
                    this.gameManagerStore.startAutoPlay(
                      this.site,
                      this.selectAutoPlayNumber,
                      e,
                      t,
                      n
                    ),
                      this.gameManagerStore.showAutoPlayOptions(!1);
                  },
                  onInputChangeStopDecreases: function (e) {
                    this.valueStopDecreases = parseFloat(
                      e.target.value
                    ).toFixed(2);
                  },
                  onSubStopDecreases: function () {
                    var e = (
                      parseFloat(this.valueStopDecreases) - this.stepValue
                    ).toFixed(2);
                    e > 0 && (this.valueStopDecreases = e);
                  },
                  onAddStopDecreases: function () {
                    this.valueStopDecreases = (
                      parseFloat(this.valueStopDecreases) + this.stepValue
                    ).toFixed(2);
                  },
                  onInputChangeStopIncreases: function (e) {
                    this.valueStopIncreases = parseFloat(
                      e.target.value
                    ).toFixed(2);
                  },
                  onSubStopIncreases: function () {
                    var e = (
                      parseFloat(this.valueStopIncreases) - this.stepValue
                    ).toFixed(2);
                    e > 0 && (this.valueStopIncreases = e);
                  },
                  onAddStopIncreases: function () {
                    this.valueStopIncreases = (
                      parseFloat(this.valueStopIncreases) + this.stepValue
                    ).toFixed(2);
                  },
                  onInputChangeStopSingleWin: function (e) {
                    this.valueStopSingleWin = parseFloat(
                      e.target.value
                    ).toFixed(2);
                  },
                  onSubStopSingleWin: function () {
                    var e = (
                      parseFloat(this.valueStopSingleWin) - this.stepValue
                    ).toFixed(2);
                    e > 0 && (this.valueStopSingleWin = e);
                  },
                  onAddStopSingleWin: function () {
                    this.valueStopSingleWin = (
                      parseFloat(this.valueStopSingleWin) + this.stepValue
                    ).toFixed(2);
                  }
                }
              },
              [
                [
                  "render",
                  function (e, t, n, r, a, i) {
                    var o = v("ESwitch");
                    return (
                      d(),
                      g("div", Vn, [
                        m("div", {
                          class: "mask",
                          onClick:
                            t[0] ||
                            (t[0] = function () {
                              return i.onClose && i.onClose.apply(i, arguments);
                            })
                        }),
                        m("div", Gn, [
                          m("div", Fn, [
                            m("div", qn, h(e.$t("AutoPlayOptions.Title")), 1),
                            m("img", {
                              class: "auto-play-header-close",
                              src: Wt,
                              alt: "close",
                              onClick:
                                t[1] ||
                                (t[1] = function () {
                                  return (
                                    i.onClose && i.onClose.apply(i, arguments)
                                  );
                                })
                            })
                          ]),
                          m("div", Un, [
                            a.isShowError
                              ? (d(),
                                g("div", Jn, [
                                  m("div", zn, h(a.errorMessage), 1),
                                  m("img", {
                                    class: "auto-play-main-error-close",
                                    src: Wt,
                                    alt: "close",
                                    onClick:
                                      t[2] ||
                                      (t[2] = function (e) {
                                        return (a.isShowError = !1);
                                      })
                                  })
                                ]))
                              : y("", !0),
                            m("div", $n, [
                              m(
                                "div",
                                Yn,
                                h(e.$t("AutoPlayOptions.NumberOfRounds")),
                                1
                              ),
                              m("div", Xn, [
                                (d(!0),
                                g(
                                  k,
                                  null,
                                  S(a.autoPlayNumber, function (e, t) {
                                    return (
                                      d(),
                                      g(
                                        "div",
                                        {
                                          class: w([
                                            "auto-play-main-number-item",
                                            {
                                              "auto-play-main-number-item-active":
                                                e === a.selectAutoPlayNumber
                                            }
                                          ]),
                                          key: t,
                                          onClick: function (t) {
                                            return (a.selectAutoPlayNumber = e);
                                          }
                                        },
                                        h(e),
                                        11,
                                        Qn
                                      )
                                    );
                                  }),
                                  128
                                ))
                              ])
                            ]),
                            m("div", Kn, [
                              N(
                                o,
                                {
                                  modelValue: a.isStopDecreases,
                                  "onUpdate:modelValue":
                                    t[3] ||
                                    (t[3] = function (e) {
                                      return (a.isStopDecreases = e);
                                    })
                                },
                                null,
                                8,
                                ["modelValue"]
                              ),
                              m(
                                "div",
                                {
                                  class: w([
                                    "auto-play-main-item-title",
                                    {
                                      "auto-play-main-item-title-active":
                                        a.isStopDecreases
                                    }
                                  ])
                                },
                                h(
                                  e.$t("AutoPlayOptions.StopIfCashDecreasesBy")
                                ),
                                3
                              ),
                              m("div", Zn, [
                                m(
                                  "img",
                                  {
                                    class: w([
                                      "icon",
                                      { "icon-disable": !a.isStopDecreases }
                                    ]),
                                    src: Fe,
                                    alt: "sub",
                                    onClick:
                                      t[4] ||
                                      (t[4] = function () {
                                        return (
                                          i.onSubStopDecreases &&
                                          i.onSubStopDecreases.apply(
                                            i,
                                            arguments
                                          )
                                        );
                                      })
                                  },
                                  null,
                                  2
                                ),
                                B(
                                  m(
                                    "input",
                                    {
                                      disabled: !a.isStopDecreases,
                                      class: "auto-play-main-item-value-input",
                                      "onUpdate:modelValue":
                                        t[5] ||
                                        (t[5] = function (e) {
                                          return (a.valueStopDecreases = e);
                                        }),
                                      type: "number",
                                      onChange:
                                        t[6] ||
                                        (t[6] = function () {
                                          return (
                                            i.onInputChangeStopDecreases &&
                                            i.onInputChangeStopDecreases.apply(
                                              i,
                                              arguments
                                            )
                                          );
                                        })
                                    },
                                    null,
                                    40,
                                    er
                                  ),
                                  [[W, a.valueStopDecreases]]
                                ),
                                m(
                                  "img",
                                  {
                                    class: w([
                                      "icon",
                                      { "icon-disable": !a.isStopDecreases }
                                    ]),
                                    src: qe,
                                    alt: "add",
                                    onClick:
                                      t[7] ||
                                      (t[7] = function () {
                                        return (
                                          i.onAddStopDecreases &&
                                          i.onAddStopDecreases.apply(
                                            i,
                                            arguments
                                          )
                                        );
                                      })
                                  },
                                  null,
                                  2
                                )
                              ])
                            ]),
                            m("div", tr, [
                              N(
                                o,
                                {
                                  modelValue: a.isStopIncreases,
                                  "onUpdate:modelValue":
                                    t[8] ||
                                    (t[8] = function (e) {
                                      return (a.isStopIncreases = e);
                                    })
                                },
                                null,
                                8,
                                ["modelValue"]
                              ),
                              m(
                                "div",
                                {
                                  class: w([
                                    "auto-play-main-item-title",
                                    {
                                      "auto-play-main-item-title-active":
                                        a.isStopIncreases
                                    }
                                  ])
                                },
                                h(
                                  e.$t("AutoPlayOptions.StopIfCashIncreasesBy")
                                ),
                                3
                              ),
                              m("div", nr, [
                                m(
                                  "img",
                                  {
                                    class: w([
                                      "icon",
                                      { "icon-disable": !a.isStopIncreases }
                                    ]),
                                    src: Fe,
                                    alt: "sub",
                                    onClick:
                                      t[9] ||
                                      (t[9] = function () {
                                        return (
                                          i.onSubStopIncreases &&
                                          i.onSubStopIncreases.apply(
                                            i,
                                            arguments
                                          )
                                        );
                                      })
                                  },
                                  null,
                                  2
                                ),
                                B(
                                  m(
                                    "input",
                                    {
                                      disabled: !a.isStopIncreases,
                                      class: "auto-play-main-item-value-input",
                                      "onUpdate:modelValue":
                                        t[10] ||
                                        (t[10] = function (e) {
                                          return (a.valueStopIncreases = e);
                                        }),
                                      type: "number",
                                      onChange:
                                        t[11] ||
                                        (t[11] = function () {
                                          return (
                                            i.onInputChangeStopIncreases &&
                                            i.onInputChangeStopIncreases.apply(
                                              i,
                                              arguments
                                            )
                                          );
                                        })
                                    },
                                    null,
                                    40,
                                    rr
                                  ),
                                  [[W, a.valueStopIncreases]]
                                ),
                                m(
                                  "img",
                                  {
                                    class: w([
                                      "icon",
                                      { "icon-disable": !a.isStopIncreases }
                                    ]),
                                    src: qe,
                                    alt: "add",
                                    onClick:
                                      t[12] ||
                                      (t[12] = function () {
                                        return (
                                          i.onAddStopIncreases &&
                                          i.onAddStopIncreases.apply(
                                            i,
                                            arguments
                                          )
                                        );
                                      })
                                  },
                                  null,
                                  2
                                )
                              ])
                            ]),
                            m("div", ar, [
                              N(
                                o,
                                {
                                  modelValue: a.isStopSingleWin,
                                  "onUpdate:modelValue":
                                    t[13] ||
                                    (t[13] = function (e) {
                                      return (a.isStopSingleWin = e);
                                    })
                                },
                                null,
                                8,
                                ["modelValue"]
                              ),
                              m(
                                "div",
                                {
                                  class: w([
                                    "auto-play-main-item-title",
                                    {
                                      "auto-play-main-item-title-active":
                                        a.isStopSingleWin
                                    }
                                  ])
                                },
                                h(
                                  e.$t("AutoPlayOptions.StopIfSingleWinExceeds")
                                ),
                                3
                              ),
                              m("div", ir, [
                                m(
                                  "img",
                                  {
                                    class: w([
                                      "icon",
                                      { "icon-disable": !a.isStopSingleWin }
                                    ]),
                                    src: Fe,
                                    alt: "sub",
                                    onClick:
                                      t[14] ||
                                      (t[14] = function () {
                                        return (
                                          i.onSubStopSingleWin &&
                                          i.onSubStopSingleWin.apply(
                                            i,
                                            arguments
                                          )
                                        );
                                      })
                                  },
                                  null,
                                  2
                                ),
                                B(
                                  m(
                                    "input",
                                    {
                                      disabled: !a.isStopSingleWin,
                                      class: "auto-play-main-item-value-input",
                                      "onUpdate:modelValue":
                                        t[15] ||
                                        (t[15] = function (e) {
                                          return (a.valueStopSingleWin = e);
                                        }),
                                      type: "number",
                                      onChange:
                                        t[16] ||
                                        (t[16] = function () {
                                          return (
                                            i.onInputChangeStopSingleWin &&
                                            i.onInputChangeStopSingleWin.apply(
                                              i,
                                              arguments
                                            )
                                          );
                                        })
                                    },
                                    null,
                                    40,
                                    or
                                  ),
                                  [[W, a.valueStopSingleWin]]
                                ),
                                m(
                                  "img",
                                  {
                                    class: w([
                                      "icon",
                                      { "icon-disable": !a.isStopSingleWin }
                                    ]),
                                    src: qe,
                                    alt: "add",
                                    onClick:
                                      t[17] ||
                                      (t[17] = function () {
                                        return (
                                          i.onAddStopSingleWin &&
                                          i.onAddStopSingleWin.apply(
                                            i,
                                            arguments
                                          )
                                        );
                                      })
                                  },
                                  null,
                                  2
                                )
                              ])
                            ])
                          ]),
                          m("div", sr, [
                            m(
                              "div",
                              {
                                class: "auto-play-btn-reset",
                                onClick:
                                  t[18] ||
                                  (t[18] = function () {
                                    return (
                                      i.onReset && i.onReset.apply(i, arguments)
                                    );
                                  })
                              },
                              h(e.$t("AutoPlayOptions.Reset")),
                              1
                            ),
                            m(
                              "div",
                              {
                                class: "auto-play-btn-start",
                                onClick:
                                  t[19] ||
                                  (t[19] = function () {
                                    return (
                                      i.onStart && i.onStart.apply(i, arguments)
                                    );
                                  })
                              },
                              h(e.$t("AutoPlayOptions.Start")),
                              1
                            )
                          ])
                        ])
                      ])
                    );
                  }
                ],
                ["__scopeId", "data-v-fbf2b205"]
              ]
            ),
            cr = {
              name: "EPopup",
              props: {
                modelValue: { type: Boolean, default: !1 },
                clickMaskNoClose: { type: Boolean, default: !1 },
                maskOpacity: { type: Number, default: 0.4 }
              },
              emits: ["update:modelValue", "close"],
              data: function () {
                return {};
              },
              methods: {
                onClose: function () {
                  this.clickMaskNoClose ||
                    (this.$emit("update:modelValue", !this.modelValue),
                    this.$emit("close"));
                }
              }
            },
            ur = { key: 0, class: "e-popup" },
            pr = { class: "e-popup-content" };
          var dr = ue(cr, [
              [
                "render",
                function (e, t, n, r, a, i) {
                  return n.modelValue
                    ? (d(),
                      g("div", ur, [
                        m(
                          "div",
                          {
                            class: "mask",
                            style: _({ opacity: n.maskOpacity }),
                            onClick:
                              t[0] ||
                              (t[0] = function () {
                                return (
                                  i.onClose && i.onClose.apply(i, arguments)
                                );
                              })
                          },
                          null,
                          4
                        ),
                        m("div", pr, [D(e.$slots, "default", {}, void 0, !0)])
                      ]))
                    : y("", !0);
                }
              ],
              ["__scopeId", "data-v-9a351ce9"]
            ]),
            gr = { class: "weekly-award" },
            mr = { class: "weekly-award-header" },
            hr = { class: "weekly-award-header-title" },
            yr = { class: "weekly-award-content" },
            fr = { key: 0, class: "weekly-award-content-tab" },
            br = { class: "info-text" },
            wr = ["innerHTML"],
            vr = ["innerHTML"],
            kr = ["innerHTML"],
            Sr = { class: "ranking-list" },
            Tr = { class: "ranking-list-header" },
            Or = { class: "ranking-list-header-rank" },
            xr = { class: "ranking-list-header-bonus" },
            Lr = { class: "ranking-list-header-user" },
            Rr = { class: "ranking-list-header-score" },
            Ar = { class: "ranking-item-rank" },
            Ir = { class: "ranking-item-bonus" },
            Pr = { class: "ranking-item-user" },
            Cr = { class: "ranking-item-score" },
            Mr = { key: 1, class: "weekly-award-content-tab" },
            jr = ["innerHTML"],
            Nr = ["innerHTML"],
            Br = ["innerHTML"],
            Wr = ["innerHTML"],
            Er = { class: "ranking-list" },
            _r = { class: "ranking-list-header" },
            Dr = { class: "ranking-list-header-rank" },
            Hr = { class: "ranking-list-header-bonus" },
            Vr = { class: "ranking-list-header-user" },
            Gr = { class: "ranking-list-header-score" },
            Fr = { class: "ranking-item-rank" },
            qr = { class: "ranking-item-bonus" },
            Ur = { class: "ranking-item-user" },
            Jr = { class: "ranking-item-score" },
            zr = { class: "weekly-award-footer" },
            $r = {
              key: 0,
              class: "ranking-list",
              style: {
                height: "auto",
                "margin-bottom": "1rem",
                padding: "0 0.5rem"
              }
            },
            Yr = { class: "ranking-item ranking-item-active" },
            Xr = { class: "ranking-item-rank" },
            Qr = { class: "ranking-item-bonus" },
            Kr = { class: "ranking-item-user" },
            Zr = { class: "ranking-item-score" };
          var ea = ue(
              {
                name: "WeeklyAward",
                components: { NavTabs: Ve },
                data: function () {
                  return {
                    gameManagerStore: se(),
                    playerStore: ne(),
                    selectTab: 0,
                    tabList: [
                      { value: 0, label: this.$t("WeeklyAward.CurrentWeek") },
                      { value: 1, label: this.$t("WeeklyAward.LastWeek") }
                    ],
                    settlementTime: 0,
                    intervalId: null,
                    dialog: !0
                  };
                },
                mounted: function () {
                  var e = this;
                  (this.settlementTime = this.weeklyTopReward.timestamp),
                    (this.intervalId = setInterval(function () {
                      e.settlementTime--;
                    }, 1e3)),
                    this.gameManagerStore.messageHandler.sendWeeklyTopRewardRequest();
                },
                unmounted: function () {
                  clearInterval(this.intervalId);
                },
                computed: {
                  defaultTab: function () {
                    return 0 === this.weeklyTopReward.lastWeekStatus ? 1 : 0;
                  },
                  settlementTimeStr: function () {
                    var e = new Date().getTime(),
                      t = this.settlementTime,
                      n = Math.round(Math.abs(t - e) / 1e3),
                      r = Math.floor(n / 86400);
                    n -= 86400 * r;
                    var a = Math.floor(n / 3600);
                    n -= 3600 * a;
                    var i = Math.floor(n / 60);
                    return (
                      (n -= 60 * i),
                      e > t || (0 === r && 0 === a && 0 === i && 0 === n)
                        ? this.getCountdownString(0, 0, 0, 0)
                        : this.getCountdownString(r, a, i, n)
                    );
                  },
                  isInRanking: function () {
                    var e = this.weeklyTopReward.currentWeekOneSelf.top;
                    return !(0 === e || e > this.numberOfRewards);
                  },
                  youTop: function () {
                    var e = this.weeklyTopReward.currentWeekOneSelf.top;
                    return e > 0 ? e : "-";
                  },
                  numberOfRewards: function () {
                    return this.weeklyTopReward.numberOfRewards;
                  },
                  weeklyTopReward: function () {
                    return this.gameManagerStore.respWeeklyTopReward;
                  },
                  currentWeek: function () {
                    return this.weeklyTopReward.currentWeek;
                  },
                  lastWeek: function () {
                    return this.weeklyTopReward.lastWeek;
                  },
                  lastWeekYouTop: function () {
                    var e = this,
                      t = this.weeklyTopReward.lastWeek.findIndex(function (t) {
                        return t.uid === e.playerStore.uid;
                      });
                    return -1 === t
                      ? "-"
                      : this.weeklyTopReward.lastWeek[t].top;
                  },
                  currentWeekOneSelf: function () {
                    return this.weeklyTopReward.currentWeekOneSelf;
                  }
                },
                methods: {
                  getCurrency: function (e) {
                    return Y(e, 0, this.playerStore.currencyRate);
                  },
                  getCountdownString: function (e, t, n, r) {
                    return ""
                      .concat(e, "d ")
                      .concat(this.getNumber2(t), ":")
                      .concat(this.getNumber2(n), ":")
                      .concat(this.getNumber2(r));
                  },
                  getNumber2: function (e) {
                    return e < 10 ? "0".concat(e) : e.toString();
                  },
                  onClose: function () {
                    this.gameManagerStore.isShowWeeklyAward = !1;
                  },
                  onSelectTab: function (e) {
                    this.selectTab = e;
                  },
                  onGetBonus: function () {
                    this.gameManagerStore.messageHandler.sendTakeWeeklyTopRewardRequest();
                  }
                }
              },
              [
                [
                  "render",
                  function (e, t, n, r, a, i) {
                    var o = v("NavTabs");
                    return (
                      d(),
                      g("div", gr, [
                        m("div", mr, [
                          m("div", hr, h(e.$t("WeeklyAward.Title")), 1),
                          m("img", {
                            class: "weekly-award-header-close",
                            src: Wt,
                            alt: "close",
                            onClick:
                              t[0] ||
                              (t[0] = function () {
                                return (
                                  i.onClose && i.onClose.apply(i, arguments)
                                );
                              })
                          })
                        ]),
                        m("div", yr, [
                          N(
                            o,
                            {
                              "tab-list": a.tabList,
                              "default-select": i.defaultTab,
                              onSelectTab: i.onSelectTab
                            },
                            null,
                            8,
                            ["tab-list", "default-select", "onSelectTab"]
                          ),
                          0 === a.selectTab
                            ? (d(),
                              g("div", fr, [
                                m(
                                  "div",
                                  br,
                                  h(
                                    e.$t("WeeklyAward.SettlementTime", {
                                      time: i.settlementTimeStr
                                    })
                                  ),
                                  1
                                ),
                                m(
                                  "div",
                                  {
                                    class: "info-text",
                                    innerHTML: e.$t(
                                      "WeeklyAward.CurrentWeekInfo",
                                      { numberOfRewards: i.numberOfRewards }
                                    )
                                  },
                                  null,
                                  8,
                                  wr
                                ),
                                i.isInRanking
                                  ? (d(),
                                    g(
                                      "div",
                                      {
                                        key: 0,
                                        class: "info-text",
                                        innerHTML: e.$t(
                                          "WeeklyAward.CurrentWeekYouTop",
                                          { youTop: i.youTop }
                                        )
                                      },
                                      null,
                                      8,
                                      vr
                                    ))
                                  : (d(),
                                    g(
                                      "div",
                                      {
                                        key: 1,
                                        class: "info-text",
                                        innerHTML: e.$t(
                                          "WeeklyAward.CurrentWeekYouNoTop",
                                          { youTop: i.youTop }
                                        )
                                      },
                                      null,
                                      8,
                                      kr
                                    )),
                                m("div", Sr, [
                                  m("div", Tr, [
                                    m(
                                      "div",
                                      Or,
                                      h(e.$t("WeeklyAward.Rank")),
                                      1
                                    ),
                                    m(
                                      "div",
                                      xr,
                                      h(e.$t("WeeklyAward.Bonus")),
                                      1
                                    ),
                                    m(
                                      "div",
                                      Lr,
                                      h(e.$t("WeeklyAward.User")),
                                      1
                                    ),
                                    m(
                                      "div",
                                      Rr,
                                      h(e.$t("WeeklyAward.Score")),
                                      1
                                    )
                                  ]),
                                  (d(!0),
                                  g(
                                    k,
                                    null,
                                    S(i.currentWeek, function (e, t) {
                                      return (
                                        d(),
                                        g(
                                          "div",
                                          {
                                            class: w([
                                              "ranking-item",
                                              {
                                                "ranking-item-active":
                                                  a.playerStore.uid === e.uid
                                              }
                                            ]),
                                            key: t
                                          },
                                          [
                                            m(
                                              "div",
                                              Ar,
                                              h(0 === e.top ? "-" : e.top),
                                              1
                                            ),
                                            m(
                                              "div",
                                              Ir,
                                              h(
                                                0 === e.reward
                                                  ? "---"
                                                  : i.getCurrency(e.reward)
                                              ),
                                              1
                                            ),
                                            m("div", Pr, h(e.nickname), 1),
                                            m(
                                              "div",
                                              Cr,
                                              h(i.getCurrency(e.score)) + "  ",
                                              1
                                            )
                                          ],
                                          2
                                        )
                                      );
                                    }),
                                    128
                                  ))
                                ])
                              ]))
                            : y("", !0),
                          1 === a.selectTab
                            ? (d(),
                              g("div", Mr, [
                                m(
                                  "div",
                                  {
                                    class: "info-text",
                                    innerHTML: e.$t("WeeklyAward.LastWeekInfo")
                                  },
                                  null,
                                  8,
                                  jr
                                ),
                                -1 === i.weeklyTopReward.lastWeekStatus
                                  ? (d(),
                                    g(
                                      "div",
                                      {
                                        key: 0,
                                        class: "info-text",
                                        innerHTML: e.$t(
                                          "WeeklyAward.LastWeekStatusNoReward"
                                        )
                                      },
                                      null,
                                      8,
                                      Nr
                                    ))
                                  : 0 === i.weeklyTopReward.lastWeekStatus
                                  ? (d(),
                                    g(
                                      "div",
                                      {
                                        key: 1,
                                        class: "info-text",
                                        innerHTML: e.$t(
                                          "WeeklyAward.LastWeekStatusPleaseClaim",
                                          { top: i.lastWeekYouTop }
                                        )
                                      },
                                      null,
                                      8,
                                      Br
                                    ))
                                  : 1 === i.weeklyTopReward.lastWeekStatus
                                  ? (d(),
                                    g(
                                      "div",
                                      {
                                        key: 2,
                                        class: "info-text",
                                        innerHTML: e.$t(
                                          "WeeklyAward.LastWeekStatusClaimed",
                                          { top: i.lastWeekYouTop }
                                        )
                                      },
                                      null,
                                      8,
                                      Wr
                                    ))
                                  : y("", !0),
                                m("div", Er, [
                                  m("div", _r, [
                                    m(
                                      "div",
                                      Dr,
                                      h(e.$t("WeeklyAward.Rank")),
                                      1
                                    ),
                                    m(
                                      "div",
                                      Hr,
                                      h(e.$t("WeeklyAward.Bonus")),
                                      1
                                    ),
                                    m(
                                      "div",
                                      Vr,
                                      h(e.$t("WeeklyAward.User")),
                                      1
                                    ),
                                    m(
                                      "div",
                                      Gr,
                                      h(e.$t("WeeklyAward.Score")),
                                      1
                                    )
                                  ]),
                                  (d(!0),
                                  g(
                                    k,
                                    null,
                                    S(i.lastWeek, function (e, t) {
                                      return (
                                        d(),
                                        g(
                                          "div",
                                          {
                                            class: w([
                                              "ranking-item",
                                              {
                                                "ranking-item-active":
                                                  a.playerStore.uid === e.uid
                                              }
                                            ]),
                                            key: t
                                          },
                                          [
                                            m(
                                              "div",
                                              Fr,
                                              h(0 === e.top ? "-" : e.top),
                                              1
                                            ),
                                            m(
                                              "div",
                                              qr,
                                              h(
                                                0 === e.reward
                                                  ? "---"
                                                  : i.getCurrency(e.reward)
                                              ),
                                              1
                                            ),
                                            m("div", Ur, h(e.nickname), 1),
                                            m(
                                              "div",
                                              Jr,
                                              h(i.getCurrency(e.score)) + "  ",
                                              1
                                            )
                                          ],
                                          2
                                        )
                                      );
                                    }),
                                    128
                                  ))
                                ])
                              ]))
                            : y("", !0)
                        ]),
                        m("div", zr, [
                          0 === a.selectTab
                            ? (d(),
                              g("div", $r, [
                                m("div", Yr, [
                                  m(
                                    "div",
                                    Xr,
                                    h(
                                      0 === i.currentWeekOneSelf.top
                                        ? "-"
                                        : i.currentWeekOneSelf.top
                                    ),
                                    1
                                  ),
                                  m(
                                    "div",
                                    Qr,
                                    h(
                                      0 === i.currentWeekOneSelf.reward
                                        ? "---"
                                        : i.getCurrency(
                                            i.currentWeekOneSelf.reward
                                          )
                                    ),
                                    1
                                  ),
                                  m(
                                    "div",
                                    Kr,
                                    h(i.currentWeekOneSelf.nickname),
                                    1
                                  ),
                                  m(
                                    "div",
                                    Zr,
                                    h(
                                      i.getCurrency(i.currentWeekOneSelf.score)
                                    ) + "   ",
                                    1
                                  )
                                ])
                              ]))
                            : y("", !0),
                          1 === a.selectTab
                            ? (d(),
                              g(
                                "div",
                                {
                                  key: 1,
                                  class: w([
                                    "weekly-award-btn-get-bonus",
                                    {
                                      "weekly-award-btn-get-bonus-disabled":
                                        0 !== i.weeklyTopReward.lastWeekStatus
                                    }
                                  ]),
                                  onClick:
                                    t[1] ||
                                    (t[1] = function () {
                                      return (
                                        i.onGetBonus &&
                                        i.onGetBonus.apply(i, arguments)
                                      );
                                    })
                                },
                                h(e.$t("WeeklyAward.GetBonus")),
                                3
                              ))
                            : y("", !0)
                        ])
                      ])
                    );
                  }
                ],
                ["__scopeId", "data-v-b58d37ab"]
              ]
            ),
            ta = { class: "message-box" },
            na = { class: "message-box-text" };
          var ra = ue(
              {
                name: "MessageBox",
                data: function () {
                  return { messageBoxStore: ae() };
                },
                methods: {
                  onClose: function () {
                    this.messageBoxStore.show = !1;
                  }
                }
              },
              [
                [
                  "render",
                  function (e, t, n, r, a, i) {
                    return (
                      d(),
                      g("div", ta, [
                        m("div", na, h(a.messageBoxStore.message), 1),
                        m(
                          "div",
                          {
                            class: "message-box-close",
                            onClick:
                              t[0] ||
                              (t[0] = function () {
                                return (
                                  i.onClose && i.onClose.apply(i, arguments)
                                );
                              })
                          },
                          h(e.$t("Close")),
                          1
                        )
                      ])
                    );
                  }
                ],
                ["__scopeId", "data-v-35c01e22"]
              ]
            ),
            aa = {
              name: "ReconnView",
              data: function () {
                return { messageBoxStore: ae() };
              },
              methods: {
                onClose: function () {
                  this.messageBoxStore.show = !1;
                }
              }
            },
            ia = { class: "reconn-view" },
            oa = { class: "reconn-view-text" },
            sa = (function (e) {
              return f("data-v-f63d8e37"), (e = e()), b(), e;
            })(function () {
              return m(
                "img",
                {
                  class: "reconn-view-refresh",
                  src: "/assets/refresh-22e37dce.svg",
                  alt: "refresh"
                },
                null,
                -1
              );
            });
          var la = ue(aa, [
              [
                "render",
                function (e, t, n, r, a, i) {
                  return (
                    d(),
                    g("div", ia, [m("div", oa, h(e.$t("Connecting")), 1), sa])
                  );
                }
              ],
              ["__scopeId", "data-v-f63d8e37"]
            ]),
            ca = {
              name: "Settings",
              components: { ESwitch: Ge },
              data: function () {
                return {
                  gameManagerStore: se(),
                  playerStore: ne(),
                  settingsStore: le()
                };
              },
              methods: {
                onClose: function () {
                  this.settingsStore.show = !1;
                },
                onHome: function () {
                  this.playerStore.back();
                },
                onGameRules: function () {
                  (this.gameManagerStore.isShowGameRules = !0),
                    (this.settingsStore.show = !1);
                }
              }
            },
            ua = function (e) {
              return f("data-v-36a1718b"), (e = e()), b(), e;
            },
            pa = { class: "settings" },
            da = { class: "settings-header" },
            ga = { class: "settings-header-title" },
            ma = { class: "settings-content" },
            ha = { class: "settings-item" },
            ya = ua(function () {
              return m(
                "img",
                {
                  class: "settings-item-icon",
                  src: "/assets/sound-122e74a9.svg",
                  alt: "sound"
                },
                null,
                -1
              );
            }),
            fa = { class: "settings-item-label" },
            ba = ua(function () {
              return m("div", { class: "spliter" }, null, -1);
            }),
            wa = { class: "settings-item" },
            va = ua(function () {
              return m(
                "img",
                {
                  class: "settings-item-icon",
                  src: "/assets/animation-4fdfab86.svg",
                  alt: "sound"
                },
                null,
                -1
              );
            }),
            ka = { class: "settings-item-label" },
            Sa = ua(function () {
              return m("div", { class: "spliter" }, null, -1);
            }),
            Ta = ua(function () {
              return m(
                "img",
                {
                  class: "settings-item-icon",
                  src: "/assets/game-rules-29895067.svg",
                  alt: "sound"
                },
                null,
                -1
              );
            }),
            Oa = { class: "settings-item-label" },
            xa = ua(function () {
              return m(
                "img",
                {
                  class: "settings-footer-home-icon",
                  src: "/assets/home-3945503e.svg",
                  alt: "home"
                },
                null,
                -1
              );
            }),
            La = { class: "settings-footer-home" };
          var Ra = ue(ca, [
              [
                "render",
                function (e, t, n, r, a, i) {
                  var o = v("ESwitch");
                  return (
                    d(),
                    g("div", pa, [
                      m("div", da, [
                        m("div", ga, h(a.playerStore.nickname), 1),
                        m("img", {
                          class: "settings-header-close",
                          src: Wt,
                          alt: "close",
                          onClick:
                            t[0] ||
                            (t[0] = function () {
                              return i.onClose && i.onClose.apply(i, arguments);
                            })
                        })
                      ]),
                      m("div", ma, [
                        m("div", ha, [
                          ya,
                          m("div", fa, h(e.$t("Settings.Sound")), 1),
                          N(
                            o,
                            {
                              style: { position: "absolute", right: "1rem" },
                              modelValue: a.settingsStore.isSound,
                              "onUpdate:modelValue":
                                t[1] ||
                                (t[1] = function (e) {
                                  return (a.settingsStore.isSound = e);
                                })
                            },
                            null,
                            8,
                            ["modelValue"]
                          )
                        ]),
                        ba,
                        m("div", wa, [
                          va,
                          m("div", ka, h(e.$t("Settings.Animation")), 1),
                          N(
                            o,
                            {
                              style: { position: "absolute", right: "1rem" },
                              modelValue: a.settingsStore.isAnimation,
                              "onUpdate:modelValue":
                                t[2] ||
                                (t[2] = function (e) {
                                  return (a.settingsStore.isAnimation = e);
                                })
                            },
                            null,
                            8,
                            ["modelValue"]
                          )
                        ]),
                        Sa,
                        m(
                          "div",
                          {
                            class: "settings-item",
                            onClick:
                              t[3] ||
                              (t[3] = function () {
                                return (
                                  i.onGameRules &&
                                  i.onGameRules.apply(i, arguments)
                                );
                              })
                          },
                          [Ta, m("div", Oa, h(e.$t("Settings.GameRules")), 1)]
                        )
                      ]),
                      m(
                        "div",
                        {
                          class: "settings-footer",
                          onClick:
                            t[4] ||
                            (t[4] = function () {
                              return i.onHome && i.onHome.apply(i, arguments);
                            })
                        },
                        [xa, m("div", La, h(e.$t("Settings.Home")), 1)]
                      )
                    ])
                  );
                }
              ],
              ["__scopeId", "data-v-36a1718b"]
            ]),
            Aa = (function () {
              var e,
                t,
                n,
                r,
                a,
                i,
                o,
                s = {},
                l = /^(?:https?|file|c):(?:\/{1,3}|\\{1})[-a-zA-Z0-9:;,@#%&()~_?\+=\/\\\.]*$/,
                c = /^(?:aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)$/,
                u = /^#?[a-fA-F0-9]{6}$/,
                p = /[^\s@]+@[^\s@]+\.[^\s@]+/,
                d = /^([a-z][a-z0-9_]+|"[a-z][a-z0-9_\s]+")$/i,
                g = [];
              function m() {
                var s, l, c;
                for (s in ((t = []), e))
                  if (e.hasOwnProperty(s)) {
                    for (
                      "*" === s
                        ? t.push("\\" + s)
                        : (t.push(s), e[s].noParse && g.push(s)),
                        e[s].validChildLookup = {},
                        e[s].validParentLookup = {},
                        e[s].restrictParentsTo = e[s].restrictParentsTo || [],
                        e[s].restrictChildrenTo = e[s].restrictChildrenTo || [],
                        c = e[s].restrictChildrenTo.length,
                        l = 0;
                      l < c;
                      l++
                    )
                      e[s].validChildLookup[e[s].restrictChildrenTo[l]] = !0;
                    for (c = e[s].restrictParentsTo.length, l = 0; l < c; l++)
                      e[s].validParentLookup[e[s].restrictParentsTo[l]] = !0;
                  }
                (n = new RegExp(
                  "<bbcl=([0-9]+) (" +
                    t.join("|") +
                    ")([ =][^>]*?)?>((?:.|[\\r\\n])*?)<bbcl=\\1 /\\2>",
                  "gi"
                )),
                  (r = new RegExp(
                    "\\[(" +
                      t.join("|") +
                      ")([ =][^\\]]*?)?\\]([^\\[]*?)\\[/\\1\\]",
                    "gi"
                  )),
                  (a = new RegExp(
                    "\\[(" +
                      g.join("|") +
                      ")([ =][^\\]]*?)?\\]([\\s\\S]*?)\\[/\\1\\]",
                    "gi"
                  )),
                  (function () {
                    for (var e = [], n = 0; n < t.length; n++)
                      "\\*" !== t[n] && e.push("/" + t[n]);
                    (i = new RegExp(
                      "(\\[)((?:" + t.join("|") + ")(?:[ =][^\\]]*?)?)(\\])",
                      "gi"
                    )),
                      (o = new RegExp("(\\[)(" + e.join("|") + ")(\\])", "gi"));
                  })();
              }
              function h(r, a, i, o, s, l, c) {
                (c = c || []), i++;
                var u,
                  p,
                  d,
                  g,
                  m = new RegExp(
                    "(<bbcl=" + i + " )(" + t.join("|") + ")([ =>])",
                    "gi"
                  ),
                  y = new RegExp(
                    "(<bbcl=" + i + " )(" + t.join("|") + ")([ =>])",
                    "i"
                  ),
                  f = l.match(m) || [],
                  b = e[r] || {};
                for (m.lastIndex = 0, f || (l = ""), d = 0; d < f.length; d++)
                  (y.lastIndex = 0),
                    (g = f[d].match(y)[2].toLowerCase()),
                    b &&
                      b.restrictChildrenTo &&
                      b.restrictChildrenTo.length > 0 &&
                      (b.validChildLookup[g] ||
                        ((p =
                          'The tag "' +
                          g +
                          '" is not allowed as a child of the tag "' +
                          r +
                          '".'),
                        c.push(p))),
                    (u = e[g] || {}).restrictParentsTo.length > 0 &&
                      (u.validParentLookup[r] ||
                        ((p =
                          'The tag "' +
                          r +
                          '" is not allowed as a parent of the tag "' +
                          g +
                          '".'),
                        c.push(p)));
                return (
                  (l = l.replace(n, function (e, t, n, r, a) {
                    return (c = h(n.toLowerCase(), e, t, n, r, a, c)), e;
                  })),
                  c
                );
              }
              function y(e) {
                return (e = e.replace(/\<([^\>][^\>]*?)\>/gi, function (e, t) {
                  return null === t.match(/^bbcl=([0-9]+) /)
                    ? "<bbcl=0 " + t + ">"
                    : "<" +
                        t.replace(/^(bbcl=)([0-9]+)/, function (e, t, n) {
                          return t + (parseInt(n, 10) + 1);
                        }) +
                        ">";
                }));
              }
              (e = {
                hr: {
                  openTag: function (e, t) {
                    return "<hr/>";
                  }
                },
                b: {
                  openTag: function (e, t) {
                    return '<span class="xbbcode-b">';
                  },
                  closeTag: function (e, t) {
                    return "</span>";
                  }
                },
                bbcode: {
                  openTag: function (e, t) {
                    return "";
                  },
                  closeTag: function (e, t) {
                    return "";
                  }
                },
                center: {
                  openTag: function (e, t) {
                    return '<span class="xbbcode-center">';
                  },
                  closeTag: function (e, t) {
                    return "</span>";
                  }
                },
                code: {
                  openTag: function (e, t) {
                    return '<span class="xbbcode-code">';
                  },
                  closeTag: function (e, t) {
                    return "</span>";
                  },
                  noParse: !0
                },
                color: {
                  openTag: function (e, t) {
                    var n = (e = e || "").substr(1).toLowerCase() || "black";
                    return (
                      (c.lastIndex = 0),
                      (u.lastIndex = 0),
                      c.test(n) ||
                        (u.test(n)
                          ? "#" !== n.substr(0, 1) && (n = "#" + n)
                          : (n = "black")),
                      '<span style="color:' + n + '">'
                    );
                  },
                  closeTag: function (e, t) {
                    return "</span>";
                  }
                },
                email: {
                  openTag: function (e, t) {
                    var n;
                    return (
                      (n = e ? e.substr(1) : t.replace(/<.*?>/g, "")),
                      (p.lastIndex = 0),
                      p.test(n) ? '<a href="mailto:' + n + '">' : "<a>"
                    );
                  },
                  closeTag: function (e, t) {
                    return "</a>";
                  }
                },
                face: {
                  openTag: function (e, t) {
                    var n = (e = e || "").substr(1) || "inherit";
                    return (
                      (d.lastIndex = 0),
                      d.test(n) || (n = "inherit"),
                      '<span style="font-family:' + n + '">'
                    );
                  },
                  closeTag: function (e, t) {
                    return "</span>";
                  }
                },
                font: {
                  openTag: function (e, t) {
                    var n = (e = e || "").substr(1) || "inherit";
                    return (
                      (d.lastIndex = 0),
                      d.test(n) || (n = "inherit"),
                      '<span style="font-family:' + n + '">'
                    );
                  },
                  closeTag: function (e, t) {
                    return "</span>";
                  }
                },
                i: {
                  openTag: function (e, t) {
                    return '<span class="xbbcode-i">';
                  },
                  closeTag: function (e, t) {
                    return "</span>";
                  }
                },
                img: {
                  openTag: function (e, t) {
                    var n = t;
                    return (
                      (l.lastIndex = 0),
                      l.test(n) || (n = ""),
                      '<img src="' + n + '" />'
                    );
                  },
                  closeTag: function (e, t) {
                    return "";
                  },
                  displayContent: !1
                },
                justify: {
                  openTag: function (e, t) {
                    return '<span class="xbbcode-justify">';
                  },
                  closeTag: function (e, t) {
                    return "</span>";
                  }
                },
                large: {
                  openTag: function (e, t) {
                    var n = (e = e || "").substr(1) || "inherit";
                    return (
                      (c.lastIndex = 0),
                      (u.lastIndex = 0),
                      c.test(n) ||
                        (u.test(n)
                          ? "#" !== n.substr(0, 1) && (n = "#" + n)
                          : (n = "inherit")),
                      '<span class="xbbcode-size-36" style="color:' + n + '">'
                    );
                  },
                  closeTag: function (e, t) {
                    return "</span>";
                  }
                },
                left: {
                  openTag: function (e, t) {
                    return '<span class="xbbcode-left">';
                  },
                  closeTag: function (e, t) {
                    return "</span>";
                  }
                },
                li: {
                  openTag: function (e, t) {
                    return "<li>";
                  },
                  closeTag: function (e, t) {
                    return "</li>";
                  },
                  restrictParentsTo: ["list", "ul", "ol"]
                },
                list: {
                  openTag: function (e, t) {
                    return "<ul>";
                  },
                  closeTag: function (e, t) {
                    return "</ul>";
                  },
                  restrictChildrenTo: ["*", "li"]
                },
                noparse: {
                  openTag: function (e, t) {
                    return "";
                  },
                  closeTag: function (e, t) {
                    return "";
                  },
                  noParse: !0
                },
                ol: {
                  openTag: function (e, t) {
                    return "<ol>";
                  },
                  closeTag: function (e, t) {
                    return "</ol>";
                  },
                  restrictChildrenTo: ["*", "li"]
                },
                php: {
                  openTag: function (e, t) {
                    return '<span class="xbbcode-code">';
                  },
                  closeTag: function (e, t) {
                    return "</span>";
                  },
                  noParse: !0
                },
                quote: {
                  openTag: function (e, t) {
                    return '<blockquote class="xbbcode-blockquote">';
                  },
                  closeTag: function (e, t) {
                    return "</blockquote>";
                  }
                },
                right: {
                  openTag: function (e, t) {
                    return '<span class="xbbcode-right">';
                  },
                  closeTag: function (e, t) {
                    return "</span>";
                  }
                },
                s: {
                  openTag: function (e, t) {
                    return '<span class="xbbcode-s">';
                  },
                  closeTag: function (e, t) {
                    return "</span>";
                  }
                },
                size: {
                  openTag: function (e, t) {
                    e = e || "";
                    var n = parseInt(e.substr(1), 10) || 0;
                    return (
                      (n < 4 || n > 40) && (n = 14),
                      '<span class="xbbcode-size-' + n + '">'
                    );
                  },
                  closeTag: function (e, t) {
                    return "</span>";
                  }
                },
                small: {
                  openTag: function (e, t) {
                    var n = (e = e || "").substr(1) || "inherit";
                    return (
                      (c.lastIndex = 0),
                      (u.lastIndex = 0),
                      c.test(n) ||
                        (u.test(n)
                          ? "#" !== n.substr(0, 1) && (n = "#" + n)
                          : (n = "inherit")),
                      '<span class="xbbcode-size-10" style="color:' + n + '">'
                    );
                  },
                  closeTag: function (e, t) {
                    return "</span>";
                  }
                },
                sub: {
                  openTag: function (e, t) {
                    return "<sub>";
                  },
                  closeTag: function (e, t) {
                    return "</sub>";
                  }
                },
                sup: {
                  openTag: function (e, t) {
                    return "<sup>";
                  },
                  closeTag: function (e, t) {
                    return "</sup>";
                  }
                },
                table: {
                  openTag: function (e, t) {
                    return '<table class="xbbcode-table">';
                  },
                  closeTag: function (e, t) {
                    return "</table>";
                  },
                  restrictChildrenTo: ["tbody", "thead", "tfoot", "tr"]
                },
                tbody: {
                  openTag: function (e, t) {
                    return "<tbody>";
                  },
                  closeTag: function (e, t) {
                    return "</tbody>";
                  },
                  restrictChildrenTo: ["tr"],
                  restrictParentsTo: ["table"]
                },
                tfoot: {
                  openTag: function (e, t) {
                    return "<tfoot>";
                  },
                  closeTag: function (e, t) {
                    return "</tfoot>";
                  },
                  restrictChildrenTo: ["tr"],
                  restrictParentsTo: ["table"]
                },
                thead: {
                  openTag: function (e, t) {
                    return '<thead class="xbbcode-thead">';
                  },
                  closeTag: function (e, t) {
                    return "</thead>";
                  },
                  restrictChildrenTo: ["tr"],
                  restrictParentsTo: ["table"]
                },
                td: {
                  openTag: function (e, t) {
                    return '<td class="xbbcode-td">';
                  },
                  closeTag: function (e, t) {
                    return "</td>";
                  },
                  restrictParentsTo: ["tr"]
                },
                th: {
                  openTag: function (e, t) {
                    return '<th class="xbbcode-th">';
                  },
                  closeTag: function (e, t) {
                    return "</th>";
                  },
                  restrictParentsTo: ["tr"]
                },
                tr: {
                  openTag: function (e, t) {
                    return '<tr class="xbbcode-tr">';
                  },
                  closeTag: function (e, t) {
                    return "</tr>";
                  },
                  restrictChildrenTo: ["td", "th"],
                  restrictParentsTo: ["table", "tbody", "tfoot", "thead"]
                },
                u: {
                  openTag: function (e, t) {
                    return '<span class="xbbcode-u">';
                  },
                  closeTag: function (e, t) {
                    return "</span>";
                  }
                },
                ul: {
                  openTag: function (e, t) {
                    return "<ul>";
                  },
                  closeTag: function (e, t) {
                    return "</ul>";
                  },
                  restrictChildrenTo: ["*", "li"]
                },
                url: {
                  openTag: function (e, t) {
                    var n;
                    return (
                      (n = e ? e.substr(1) : t.replace(/<.*?>/g, "")),
                      (l.lastIndex = 0),
                      l.test(n) || (n = "#"),
                      '<a href="' + n + '">'
                    );
                  },
                  closeTag: function (e, t) {
                    return "</a>";
                  }
                },
                "*": {
                  openTag: function (e, t) {
                    return "<li>";
                  },
                  closeTag: function (e, t) {
                    return "</li>";
                  },
                  restrictParentsTo: ["list", "ul", "ol"]
                }
              }),
                m();
              var f = function t(r, a, i, o, s) {
                i = i.toLowerCase();
                var l = e[i].noParse
                    ? s
                        .replace(/<bbcl=[0-9]+ \/\*>/gi, "")
                        .replace(/<bbcl=[0-9]+ /gi, "&#91;")
                        .replace(/>/gi, "&#93;")
                    : s.replace(n, t),
                  c = e[i].openTag ? e[i].openTag(o, l) : "",
                  u = e[i].closeTag ? e[i].closeTag(o, l) : "";
                return !1 === e[i].displayContent && (l = ""), c + l + u;
              };
              return (
                (s.tags = function () {
                  return e;
                }),
                (s.addTags = function (t) {
                  var n;
                  for (n in t) e[n] = t[n];
                  m();
                }),
                (s.process = function (t) {
                  var s = { html: "", error: !1 },
                    l = [];
                  for (
                    t.text = t.text
                      .replaceAll("'", "&#39;")
                      .replaceAll('"', "&quot;")
                      .replaceAll(";", "&#59;"),
                      t.text = t.text.replace(/</g, "&lt;"),
                      t.text = t.text.replace(/>/g, "&gt;"),
                      t.text = t.text.replace(i, function (e, t, n, r) {
                        return "<" + n + ">";
                      }),
                      t.text = t.text.replace(o, function (e, t, n, r) {
                        return "<" + n + ">";
                      }),
                      t.text = t.text.replace(/\[/g, "&#91;"),
                      t.text = t.text.replace(/\]/g, "&#93;"),
                      t.text = t.text.replace(/</g, "["),
                      t.text = t.text.replace(/>/g, "]");
                    t.text !==
                    (t.text = t.text.replace(a, function (e, t, n, r) {
                      return (
                        "[" +
                        t +
                        (n = n || "") +
                        "]" +
                        (r =
                          (r = (r = r.replace(/\[/g, "&#91;")).replace(
                            /\]/g,
                            "&#93;"
                          )) || "") +
                        "[/" +
                        t +
                        "]"
                      );
                    }));

                  );
                  return (
                    (t.text = (function (e) {
                      for (
                        e = (e = e.replace(
                          /\[(?!\*[ =\]]|list([ =][^\]]*)?\]|\/list[\]])/gi,
                          "<"
                        )).replace(
                          /\[(?=list([ =][^\]]*)?\]|\/list[\]])/gi,
                          ">"
                        );
                        e !==
                        (e = e.replace(
                          />list([ =][^\]]*)?\]([^>]*?)(>\/list])/gi,
                          function (e, t, n) {
                            for (
                              var r = e;
                              r !==
                              (r = r.replace(
                                /\[\*\]([^\[]*?)(\[\*\]|>\/list])/i,
                                function (e, t, n) {
                                  return (
                                    "<*]" +
                                    t +
                                    (">/list]" === n.toLowerCase()
                                      ? "</*]</list]"
                                      : "</*][*]")
                                  );
                                }
                              ));

                            );
                            return r.replace(/>/g, "<");
                          }
                        ));

                      );
                      return e.replace(/</g, "[");
                    })(t.text)),
                    (t.text = (function (e) {
                      for (
                        ;
                        e !==
                        (e = e.replace(r, function (e, t, n, r) {
                          return y(
                            (e = (e = e.replace(/\[/g, "<")).replace(
                              /\]/g,
                              ">"
                            ))
                          );
                        }));

                      );
                      return e;
                    })(t.text)),
                    (l = h("bbcode", t.text, -1, 0, 0, t.text)),
                    (s.html = (function (e) {
                      var t = e.text;
                      return t.replace(n, f);
                    })(t)),
                    (s.html = (function (t) {
                      for (var n in e)
                        e[n].closeTag ||
                          (t = t.replaceAll(
                            "[".concat(n, "]"),
                            e[n].openTag()
                          ));
                      return t;
                    })(s.html)),
                    (-1 === s.html.indexOf("[") &&
                      -1 === s.html.indexOf("]")) ||
                      l.push("Some tags appear to be misaligned."),
                    t.removeMisalignedTags &&
                      (s.html = s.html.replace(/\[.*?\]/g, "")),
                    t.addInLineBreaks &&
                      (s.html =
                        '<div style="white-space:pre-wrap;">' +
                        s.html +
                        "</div>"),
                    t.escapeHtml ||
                      ((s.html = s.html.replace("&#91;", "[")),
                      (s.html = s.html.replace("&#93;", "]"))),
                    (s.error = 0 !== l.length),
                    (s.errorQueue = l),
                    s
                  );
                }),
                s
              );
            })();
          void 0 !== i && (i.exports = Aa);
          var Ia = { class: "broadcast" },
            Pa = { ref: "item", class: "broadcast-item-list" },
            Ca = ["innerHTML"];
          var Ma = ue(
              {
                name: "Broadcast",
                data: function () {
                  return { broadcastStore: ie(), tweenMove: null };
                },
                mounted: function () {},
                watch: {
                  broadcastListLength: function (e, t) {
                    var n = this;
                    0 !== e &&
                      this.$nextTick(function () {
                        n.tweenMove &&
                          (n.tweenMove.kill(), (n.tweenMove = null));
                        for (
                          var e = 0, t = 0;
                          t < n.$refs.item.children.length;
                          t++
                        )
                          e += n.$refs.item.children[t].clientWidth;
                        var r = e / 80;
                        n.tweenMove = A.fromTo(
                          n.$refs.item,
                          { x: n.$refs.item.parentElement.clientWidth },
                          { x: -e, duration: r, repeat: 1 / 0, ease: "none" }
                        );
                      });
                  }
                },
                computed: {
                  broadcastListLength: function () {
                    return this.broadcastStore.broadcastList.length;
                  },
                  broadcastList: function () {
                    return this.broadcastStore.broadcastList;
                  }
                },
                methods: {
                  BBCodeToHtml: function (e) {
                    var t = e;
                    return (
                      (t = (t = t.replace(/</g, "[")).replace(/>/g, "]")),
                      Aa.process({
                        text: t,
                        removeMisalignedTags: !1,
                        addInLineBreaks: !1
                      }).html
                    );
                  },
                  addSpace: function () {
                    return "&nbsp;".repeat(100);
                  }
                }
              },
              [
                [
                  "render",
                  function (e, t, n, r, a, i) {
                    var o = this;
                    return (
                      d(),
                      g("div", Ia, [
                        m(
                          "div",
                          Pa,
                          [
                            (d(!0),
                            g(
                              k,
                              null,
                              S(i.broadcastList, function (e, t) {
                                return (
                                  d(),
                                  g(
                                    "div",
                                    {
                                      class: "broadcast-item",
                                      ref_for: !0,
                                      ref: "itemList",
                                      key: t,
                                      innerHTML:
                                        o.BBCodeToHtml(e.content) +
                                        (Number(t) ===
                                        i.broadcastList.length - 1
                                          ? ""
                                          : o.addSpace())
                                    },
                                    null,
                                    8,
                                    Ca
                                  )
                                );
                              }),
                              128
                            ))
                          ],
                          512
                        )
                      ])
                    );
                  }
                ],
                ["__scopeId", "data-v-be1baa27"]
              ]
            ),
            ja = {
              name: "GameRules",
              data: function () {
                return { gameManagerStore: se(), playerStore: ne() };
              },
              computed: {
                maxBet: function () {
                  return this.getCurrency(this.playerStore.maxAnteLimit);
                },
                maxWin: function () {
                  return this.getCurrency(this.playerStore.maxAwardLimit);
                }
              },
              methods: {
                getCurrency: function (e) {
                  return Y(e, 2, this.playerStore.currencyRate);
                },
                onClose: function () {
                  se().isShowGameRules = !1;
                }
              }
            },
            Na = function (e) {
              return f("data-v-8d58e2fb"), (e = e()), b(), e;
            },
            Ba = { class: "game-rules" },
            Wa = { class: "game-rules-header" },
            Ea = { class: "game-rules-header-title" },
            _a = { class: "game-rules-content" },
            Da = { style: { "margin-top": "1rem" } },
            Ha = { class: "how-to-play" },
            Va = Na(function () {
              return m(
                "img",
                { class: "how-to-play-img", src: "/images/1.png", alt: "1" },
                null,
                -1
              );
            }),
            Ga = ["innerHTML"],
            Fa = { class: "how-to-play" },
            qa = Na(function () {
              return m(
                "img",
                { class: "how-to-play-img", src: "/images/2.png", alt: "2" },
                null,
                -1
              );
            }),
            Ua = ["innerHTML"],
            Ja = { class: "how-to-play" },
            za = Na(function () {
              return m(
                "img",
                { class: "how-to-play-img", src: "/images/3.png", alt: "3" },
                null,
                -1
              );
            }),
            $a = ["innerHTML"],
            Ya = { class: "remember" },
            Xa = { class: "game-limits" },
            Qa = ["innerHTML"],
            Ka = ["innerHTML"];
          var Za = ue(ja, [
              [
                "render",
                function (e, t, n, r, a, i) {
                  return (
                    d(),
                    g("div", Ba, [
                      m("div", Wa, [
                        m("div", Ea, h(e.$t("GameRules.Title")), 1),
                        m("img", {
                          class: "game-rules-header-close",
                          src: Wt,
                          alt: "close",
                          onClick:
                            t[0] ||
                            (t[0] = function () {
                              return i.onClose && i.onClose.apply(i, arguments);
                            })
                        })
                      ]),
                      m("div", _a, [
                        m("div", null, h(e.$t("GameRules.Intro")), 1),
                        m("div", Da, h(e.$t("GameRules.HowToPlay")), 1),
                        m("div", Ha, [
                          Va,
                          m(
                            "div",
                            {
                              class: "how-to-play-txt",
                              innerHTML: e.$t("GameRules.Play1")
                            },
                            null,
                            8,
                            Ga
                          )
                        ]),
                        m("div", Fa, [
                          qa,
                          m(
                            "div",
                            {
                              class: "how-to-play-txt",
                              innerHTML: e.$t("GameRules.Play2")
                            },
                            null,
                            8,
                            Ua
                          )
                        ]),
                        m("div", Ja, [
                          za,
                          m(
                            "div",
                            {
                              class: "how-to-play-txt",
                              innerHTML: e.$t("GameRules.Play3")
                            },
                            null,
                            8,
                            $a
                          )
                        ]),
                        m("div", Ya, h(e.$t("GameRules.Remember")), 1),
                        m("div", Xa, [
                          m("div", null, h(e.$t("GameRules.GameLimits")), 1),
                          m(
                            "div",
                            {
                              class: "game-limits-value",
                              innerHTML: e.$t("GameRules.MaxBet", {
                                maxBet: i.maxBet
                              })
                            },
                            null,
                            8,
                            Qa
                          ),
                          m(
                            "div",
                            {
                              class: "game-limits-value",
                              innerHTML: e.$t("GameRules.MaxWin", {
                                maxWin: i.maxWin
                              })
                            },
                            null,
                            8,
                            Ka
                          )
                        ])
                      ])
                    ])
                  );
                }
              ],
              ["__scopeId", "data-v-8d58e2fb"]
            ]),
            ei = { class: "page" },
            ti = { key: 1 };
          var ni = ue(
            {
              components: {
                GameRules: Za,
                Broadcast: Ma,
                Settings: Ra,
                ReconnView: la,
                MessageBox: ra,
                WeeklyAward: ea,
                EPopup: dr,
                AutoPlayOptions: lr,
                WinMessage: Hn,
                TopBar: ve,
                GameScene: Pt,
                SplashPanel: Bt,
                InfoBoards: Mn
              },
              data: function () {
                return {
                  gameManagerStore: se(),
                  messageBoxStore: ae(),
                  settingsStore: le(),
                  message: "hello world"
                };
              },
              mounted: function () {
                var e = this;
                console.log("App mounted"),
                  setTimeout(function () {
                    e.gameManagerStore.connectServer();
                  }, 500);
              },
              methods: {}
            },
            [
              [
                "render",
                function (e, t, n, r, a, i) {
                  var o = v("SplashPanel"),
                    s = v("TopBar"),
                    l = v("GameScene"),
                    c = v("Broadcast"),
                    u = v("InfoBoards"),
                    p = v("WinMessage"),
                    h = v("AutoPlayOptions"),
                    f = v("WeeklyAward"),
                    b = v("EPopup"),
                    w = v("MessageBox"),
                    k = v("ReconnView"),
                    S = v("Settings"),
                    O = v("GameRules");
                  return (
                    d(),
                    g("div", ei, [
                      a.gameManagerStore.isLoading
                        ? (d(), T(o, { key: 0 }))
                        : (d(),
                          g("div", ti, [
                            m("header", null, [N(s)]),
                            m("main", null, [
                              N(l),
                              N(c),
                              N(u, { style: { margin: "0.3rem 0.3rem" } })
                            ]),
                            N(p, { class: "win-message" }),
                            a.gameManagerStore.isShowAutoPlayOptions
                              ? (d(),
                                T(
                                  h,
                                  {
                                    key: 0,
                                    site: a.gameManagerStore.autoPlayOptionsSite
                                  },
                                  null,
                                  8,
                                  ["site"]
                                ))
                              : y("", !0),
                            N(
                              b,
                              {
                                modelValue:
                                  a.gameManagerStore.isShowWeeklyAward,
                                "onUpdate:modelValue":
                                  t[0] ||
                                  (t[0] = function (e) {
                                    return (a.gameManagerStore.isShowWeeklyAward = e);
                                  })
                              },
                              {
                                default: H(function () {
                                  return [N(f)];
                                }),
                                _: 1
                              },
                              8,
                              ["modelValue"]
                            ),
                            N(
                              b,
                              {
                                modelValue: a.messageBoxStore.show,
                                "onUpdate:modelValue":
                                  t[1] ||
                                  (t[1] = function (e) {
                                    return (a.messageBoxStore.show = e);
                                  })
                              },
                              {
                                default: H(function () {
                                  return [N(w)];
                                }),
                                _: 1
                              },
                              8,
                              ["modelValue"]
                            ),
                            N(
                              b,
                              {
                                "mask-opacity": 0.7,
                                "click-mask-no-close": "",
                                modelValue: a.gameManagerStore.isReconnecting,
                                "onUpdate:modelValue":
                                  t[2] ||
                                  (t[2] = function (e) {
                                    return (a.gameManagerStore.isReconnecting = e);
                                  })
                              },
                              {
                                default: H(function () {
                                  return [N(k)];
                                }),
                                _: 1
                              },
                              8,
                              ["mask-opacity", "modelValue"]
                            ),
                            N(
                              b,
                              {
                                modelValue: a.settingsStore.show,
                                "onUpdate:modelValue":
                                  t[3] ||
                                  (t[3] = function (e) {
                                    return (a.settingsStore.show = e);
                                  })
                              },
                              {
                                default: H(function () {
                                  return [N(S)];
                                }),
                                _: 1
                              },
                              8,
                              ["modelValue"]
                            ),
                            N(
                              b,
                              {
                                modelValue: a.gameManagerStore.isShowGameRules,
                                "onUpdate:modelValue":
                                  t[4] ||
                                  (t[4] = function (e) {
                                    return (a.gameManagerStore.isShowGameRules = e);
                                  })
                              },
                              {
                                default: H(function () {
                                  return [N(O)];
                                }),
                                _: 1
                              },
                              8,
                              ["modelValue"]
                            )
                          ]))
                    ])
                  );
                }
              ],
              ["__scopeId", "data-v-6981be9d"]
            ]
          );
          A.registerPlugin(V, G);
          var ri = F(ni);
          ri.use(q()),
            ri.use(t),
            ri.mount("#app"),
            document.body.addEventListener("touchstart", function () {});
        }
      }
    );
  });
})();
