(() => {
  'use strict';
  var t,
    n,
    e,
    r,
    i,
    l = {
      646: (t, n, e) => {
        e.a(t, async (t) => {
          var n = e(418),
            r = t([n]);
          (n = (r.then ? await r : r)[0]), (globalThis.secp256k1 = n);
        });
      },
      418: (t, n, e) => {
        e.a(t, async (t) => {
          e.r(n),
            e.d(n, {
              __initializeContext: () => T,
              isPoint: () => I,
              isPointCompressed: () => B,
              isXOnlyPoint: () => C,
              isPrivate: () => U,
              pointAdd: () => O,
              pointAddScalar: () => N,
              pointCompress: () => k,
              pointFromScalar: () => Y,
              xOnlyPointFromScalar: () => j,
              xOnlyPointFromPoint: () => V,
              pointMultiply: () => X,
              privateAdd: () => F,
              privateSub: () => M,
              privateNegate: () => $,
              xOnlyPointAddTweak: () => L,
              xOnlyPointAddTweakCheck: () => K,
              sign: () => Q,
              signRecoverable: () => R,
              signSchnorr: () => D,
              verify: () => H,
              recover: () => J,
              verifySchnorr: () => G,
            });
          var r = e(56),
            i = e(242),
            l = e(186),
            o = t([l]);
          l = (o.then ? await o : o)[0];
          const a = new Uint8Array(l.Z.memory.buffer),
            f = l.Z.PRIVATE_INPUT.value,
            u = l.Z.PUBLIC_KEY_INPUT.value,
            c = l.Z.PUBLIC_KEY_INPUT2.value,
            s = l.Z.X_ONLY_PUBLIC_KEY_INPUT.value,
            y = l.Z.X_ONLY_PUBLIC_KEY_INPUT2.value,
            p = l.Z.TWEAK_INPUT.value,
            d = l.Z.HASH_INPUT.value,
            b = l.Z.EXTRA_DATA_INPUT.value,
            g = l.Z.SIGNATURE_INPUT.value,
            h = a.subarray(f, f + i.Yl),
            v = a.subarray(u, u + i.Bl),
            m = a.subarray(c, c + i.Bl),
            _ = a.subarray(s, s + i.Vt),
            P = a.subarray(y, y + i.Vt),
            x = a.subarray(p, p + i.jx),
            S = a.subarray(d, d + i.ZM),
            w = a.subarray(b, b + i.P0),
            A = a.subarray(g, g + i.fJ);
          function Z(t, n) {
            return void 0 === t
              ? void 0 !== n
                ? n.length
                : i.XM
              : t
              ? i.XM
              : i.Bl;
          }
          function E(t) {
            try {
              return v.set(t), 1 === l.Z.isPoint(t.length);
            } finally {
              v.fill(0);
            }
          }
          function T() {
            l.Z.initializeContext();
          }
          function I(t) {
            return i.DV(t) && E(t);
          }
          function B(t) {
            return i.rH(t) && E(t);
          }
          function C(t) {
            return i.vC(t) && E(t);
          }
          function U(t) {
            return i.hv(t);
          }
          function O(t, n, e) {
            i.yE(t), i.yE(n);
            const r = Z(e, t);
            try {
              return (
                v.set(t),
                m.set(n),
                1 === l.Z.pointAdd(t.length, n.length, r) ? v.slice(0, r) : null
              );
            } finally {
              v.fill(0), m.fill(0);
            }
          }
          function N(t, n, e) {
            i.yE(t), i.Cm(n);
            const r = Z(e, t);
            try {
              return (
                v.set(t),
                x.set(n),
                1 === l.Z.pointAddScalar(t.length, r) ? v.slice(0, r) : null
              );
            } finally {
              v.fill(0), x.fill(0);
            }
          }
          function k(t, n) {
            i.yE(t);
            const e = Z(n, t);
            try {
              return v.set(t), l.Z.pointCompress(t.length, e), v.slice(0, e);
            } finally {
              v.fill(0);
            }
          }
          function Y(t, n) {
            i.bl(t);
            const e = Z(n);
            try {
              return (
                h.set(t), 1 === l.Z.pointFromScalar(e) ? v.slice(0, e) : null
              );
            } finally {
              h.fill(0), v.fill(0);
            }
          }
          function j(t) {
            i.bl(t);
            try {
              return h.set(t), l.Z.xOnlyPointFromScalar(), _.slice(0, i.Vt);
            } finally {
              h.fill(0), _.fill(0);
            }
          }
          function V(t) {
            i.yE(t);
            try {
              return (
                v.set(t), l.Z.xOnlyPointFromPoint(t.length), _.slice(0, i.Vt)
              );
            } finally {
              v.fill(0), _.fill(0);
            }
          }
          function X(t, n, e) {
            i.yE(t), i.Cm(n);
            const r = Z(e, t);
            try {
              return (
                v.set(t),
                x.set(n),
                1 === l.Z.pointMultiply(t.length, r) ? v.slice(0, r) : null
              );
            } finally {
              v.fill(0), x.fill(0);
            }
          }
          function F(t, n) {
            i.bl(t), i.Cm(n);
            try {
              return (
                h.set(t),
                x.set(n),
                1 === l.Z.privateAdd() ? h.slice(0, i.Yl) : null
              );
            } finally {
              h.fill(0), x.fill(0);
            }
          }
          function M(t, n) {
            if ((i.bl(t), i.Cm(n), i.Fr(n))) return new Uint8Array(t);
            try {
              return (
                h.set(t),
                x.set(n),
                1 === l.Z.privateSub() ? h.slice(0, i.Yl) : null
              );
            } finally {
              h.fill(0), x.fill(0);
            }
          }
          function $(t) {
            i.bl(t);
            try {
              return h.set(t), l.Z.privateNegate(), h.slice(0, i.Yl);
            } finally {
              h.fill(0);
            }
          }
          function L(t, n) {
            i.$Q(t), i.Cm(n);
            try {
              _.set(t), x.set(n);
              const e = l.Z.xOnlyPointAddTweak();
              return -1 !== e
                ? { parity: e, xOnlyPubkey: _.slice(0, i.Vt) }
                : null;
            } finally {
              _.fill(0), x.fill(0);
            }
          }
          function K(t, n, e, o) {
            i.$Q(t), i.$Q(e), i.Cm(n);
            const a = void 0 !== o;
            a && i.Y6(o);
            try {
              if ((_.set(t), P.set(e), x.set(n), a))
                return 1 === l.Z.xOnlyPointAddTweakCheck(o);
              {
                l.Z.xOnlyPointAddTweak();
                const t = _.slice(0, i.Vt);
                return 0 === (0, r.qu)(t, e);
              }
            } finally {
              _.fill(0), P.fill(0), x.fill(0);
            }
          }
          function Q(t, n, e) {
            i.ax(t), i.bl(n), i.IB(e);
            try {
              return (
                S.set(t),
                h.set(n),
                void 0 !== e && w.set(e),
                l.Z.sign(void 0 === e ? 0 : 1),
                A.slice(0, i.fJ)
              );
            } finally {
              S.fill(0), h.fill(0), void 0 !== e && w.fill(0), A.fill(0);
            }
          }
          function R(t, n, e) {
            i.ax(t), i.bl(n), i.IB(e);
            try {
              S.set(t), h.set(n), void 0 !== e && w.set(e);
              const r = l.Z.signRecoverable(void 0 === e ? 0 : 1);
              return { signature: A.slice(0, i.fJ), recoveryId: r };
            } finally {
              S.fill(0), h.fill(0), void 0 !== e && w.fill(0), A.fill(0);
            }
          }
          function D(t, n, e) {
            i.ax(t), i.bl(n), i.IB(e);
            try {
              return (
                S.set(t),
                h.set(n),
                void 0 !== e && w.set(e),
                l.Z.signSchnorr(void 0 === e ? 0 : 1),
                A.slice(0, i.fJ)
              );
            } finally {
              S.fill(0), h.fill(0), void 0 !== e && w.fill(0), A.fill(0);
            }
          }
          function H(t, n, e, r = !1) {
            i.ax(t), i.yE(n), i.pB(e);
            try {
              return (
                S.set(t),
                v.set(n),
                A.set(e),
                1 === l.Z.verify(n.length, !0 === r ? 1 : 0)
              );
            } finally {
              S.fill(0), v.fill(0), A.fill(0);
            }
          }
          function J(t, n, e, r = !1) {
            i.ax(t),
              i.pB(n),
              i.XS(n),
              2 & e && i.K7(n),
              i.yT(() => C(n.subarray(0, 32)));
            const o = Z(r);
            try {
              return (
                S.set(t),
                A.set(n),
                1 === l.Z.recover(o, e) ? v.slice(0, o) : null
              );
            } finally {
              S.fill(0), A.fill(0), v.fill(0);
            }
          }
          function G(t, n, e) {
            i.ax(t), i.$Q(n), i.pB(e);
            try {
              return S.set(t), _.set(n), A.set(e), 1 === l.Z.verifySchnorr();
            } finally {
              S.fill(0), _.fill(0), A.fill(0);
            }
          }
        });
      },
      249: (t, n, e) => {
        function r() {
          const t = (function () {
            const t = new Uint8Array(4);
            return window.crypto.getRandomValues(t), t;
          })();
          return (t[0] << 24) + (t[1] << 16) + (t[2] << 8) + t[3];
        }
        e.d(n, { L: () => r });
      },
      242: (t, n, e) => {
        e.d(n, {
          Yl: () => i,
          XM: () => l,
          Bl: () => o,
          Vt: () => a,
          jx: () => f,
          ZM: () => u,
          P0: () => c,
          fJ: () => s,
          Fr: () => h,
          hv: () => v,
          vC: () => m,
          DV: () => _,
          rH: () => P,
          Y6: () => x,
          bl: () => S,
          yE: () => w,
          $Q: () => A,
          Cm: () => Z,
          ax: () => E,
          IB: () => T,
          pB: () => I,
          yT: () => B,
          XS: () => C,
          K7: () => U,
        });
        var r = e(735);
        const i = 32,
          l = 33,
          o = 65,
          a = 32,
          f = 32,
          u = 32,
          c = 32,
          s = 64,
          y = new Uint8Array(32),
          p = new Uint8Array([
            255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
            255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94,
            140, 208, 54, 65, 65,
          ]),
          d = new Uint8Array([
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 69, 81, 35, 25, 80,
            183, 95, 196, 64, 45, 161, 114, 47, 201, 186, 238,
          ]);
        function b(t) {
          return t instanceof Uint8Array;
        }
        function g(t, n) {
          for (let e = 0; e < 32; ++e)
            if (t[e] !== n[e]) return t[e] < n[e] ? -1 : 1;
          return 0;
        }
        function h(t) {
          return 0 === g(t, y);
        }
        function v(t) {
          return b(t) && t.length === i && g(t, y) > 0 && g(t, p) < 0;
        }
        function m(t) {
          return b(t) && t.length === a;
        }
        function _(t) {
          return b(t) && (t.length === l || t.length === o);
        }
        function P(t) {
          return b(t) && t.length === l;
        }
        function x(t) {
          0 !== t && 1 !== t && (0, r._y)(r.al);
        }
        function S(t) {
          v(t) || (0, r._y)(r.Y2);
        }
        function w(t) {
          (function (t) {
            return b(t) && (t.length === l || t.length === o || t.length === a);
          })(t) || (0, r._y)(r.Gy);
        }
        function A(t) {
          m(t) || (0, r._y)(r.Gy);
        }
        function Z(t) {
          (function (t) {
            return b(t) && t.length === f && g(t, p) < 0;
          })(t) || (0, r._y)(r.NQ);
        }
        function E(t) {
          (function (t) {
            return b(t) && t.length === u;
          })(t) || (0, r._y)(r.AI);
        }
        function T(t) {
          (function (t) {
            return void 0 === t || (b(t) && t.length === c);
          })(t) || (0, r._y)(r.B6);
        }
        function I(t) {
          (function (t) {
            return (
              b(t) &&
              64 === t.length &&
              g(t.subarray(0, 32), p) < 0 &&
              g(t.subarray(32, 64), p) < 0
            );
          })(t) || (0, r._y)(r.bf);
        }
        function B(t) {
          t() || (0, r._y)(r.bf);
        }
        function C(t) {
          h(t.subarray(0, 32)) && (0, r._y)(r.bf),
            h(t.subarray(32, 64)) && (0, r._y)(r.bf);
        }
        function U(t) {
          (function (t) {
            return b(t) && 64 === t.length && g(t.subarray(0, 32), d) < 0;
          })(t) || (0, r._y)(r.X2);
        }
      },
      735: (t, n, e) => {
        e.d(n, {
          Y2: () => r,
          Gy: () => i,
          NQ: () => l,
          AI: () => o,
          bf: () => a,
          B6: () => f,
          al: () => u,
          X2: () => c,
          _y: () => y,
        });
        const r = 0,
          i = 1,
          l = 2,
          o = 3,
          a = 4,
          f = 5,
          u = 6,
          c = 7,
          s = {
            [r.toString()]: 'Expected Private',
            [i.toString()]: 'Expected Point',
            [l.toString()]: 'Expected Tweak',
            [o.toString()]: 'Expected Hash',
            [a.toString()]: 'Expected Signature',
            [f.toString()]: 'Expected Extra Data (32 bytes)',
            [u.toString()]: 'Expected Parity (1 | 0)',
            [c.toString()]: 'Bad Recovery Id',
          };
        function y(t) {
          const n = s[t.toString()] || `Unknow error code: ${t}`;
          throw new TypeError(n);
        }
      },
      186: (t, n, e) => {
        e.a(t, async (t) => {
          e.d(n, { Z: () => l });
          var r = e(387),
            i = t([r]);
          const l = (r = (i.then ? await i : i)[0]);
        });
      },
      56: (t, n, e) => {
        e.d(n, { qu: () => i });
        const r = '0123456789abcdefABCDEF';
        function i(t, n) {
          const e = Math.min(t.length, n.length);
          for (let r = 0; r < e; ++r)
            if (t[r] !== n[r]) return t[r] < n[r] ? -1 : 1;
          return t.length === n.length ? 0 : t.length > n.length ? 1 : -1;
        }
        r.split('').map((t) => t.codePointAt(0)),
          Array(256)
            .fill(!0)
            .map((t, n) => {
              const e = String.fromCodePoint(n),
                i = r.indexOf(e);
              return i < 0 ? void 0 : i < 16 ? i : i - 6;
            }),
          new TextEncoder(),
          new TextDecoder('ascii');
      },
      387: (t, n, e) => {
        var r = e(249),
          i = e(735);
        t.exports = e.v(n, t.id, 'secp256k1', {
          './rand.js': { generateInt32: r.L },
          './validate_error.js': { throwError: i._y },
        });
      },
    },
    o = {};
  function a(t) {
    var n = o[t];
    if (void 0 !== n) return n.exports;
    var e = (o[t] = { id: t, exports: {} });
    return l[t](e, e.exports, a), e.exports;
  }
  (t =
    'function' == typeof Symbol ? Symbol('webpack then') : '__webpack_then__'),
    (n =
      'function' == typeof Symbol
        ? Symbol('webpack exports')
        : '__webpack_exports__'),
    (e = (t) => {
      t && (t.forEach((t) => t.r--), t.forEach((t) => (t.r-- ? t.r++ : t())));
    }),
    (r = (t) => !--t.r && t()),
    (i = (t, n) => (t ? t.push(n) : r(n))),
    (a.a = (l, o, a) => {
      var f,
        u,
        c,
        s = a && [],
        y = l.exports,
        p = !0,
        d = !1,
        b = (n, e, r) => {
          d ||
            ((d = !0),
            (e.r += n.length),
            n.map((n, i) => n[t](e, r)),
            (d = !1));
        },
        g = new Promise((t, n) => {
          (c = n), (u = () => (t(y), e(s), (s = 0)));
        });
      (g[n] = y),
        (g[t] = (t, n) => {
          if (p) return r(t);
          f && b(f, t, n), i(s, t), g.catch(n);
        }),
        (l.exports = g),
        o((l) => {
          if (!l) return u();
          var o, a;
          f = ((l) =>
            l.map((l) => {
              if (null !== l && 'object' == typeof l) {
                if (l[t]) return l;
                if (l.then) {
                  var o = [];
                  l.then((t) => {
                    (a[n] = t), e(o), (o = 0);
                  });
                  var a = {};
                  return (a[t] = (t, n) => (i(o, t), l.catch(n))), a;
                }
              }
              var f = {};
              return (f[t] = (t) => r(t)), (f[n] = l), f;
            }))(l);
          var c = new Promise((t, e) => {
            ((o = () => t((a = f.map((t) => t[n])))).r = 0), b(f, o, e);
          });
          return o.r ? c : a;
        }).then(u, c),
        (p = !1);
    }),
    (a.d = (t, n) => {
      for (var e in n)
        a.o(n, e) &&
          !a.o(t, e) &&
          Object.defineProperty(t, e, { enumerable: !0, get: n[e] });
    }),
    (a.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (t) {
        if ('object' == typeof window) return window;
      }
    })()),
    (a.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
    (a.r = (t) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (a.v = (t, n, e, r) => {
      var i = fetch(a.p + '' + e + '.module.wasm');
      return 'function' == typeof WebAssembly.instantiateStreaming
        ? WebAssembly.instantiateStreaming(i, r).then((n) =>
            Object.assign(t, n.instance.exports)
          )
        : i
            .then((t) => t.arrayBuffer())
            .then((t) => WebAssembly.instantiate(t, r))
            .then((n) => Object.assign(t, n.instance.exports));
    }),
    (() => {
      var t;
      a.g.importScripts && (t = a.g.location + '');
      var n = a.g.document;
      if (!t && n && (n.currentScript && (t = n.currentScript.src), !t)) {
        var e = n.getElementsByTagName('script');
        e.length && (t = e[e.length - 1].src);
      }
      if (!t)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (t = t
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (a.p = t);
    })(),
    a(646);
})();
