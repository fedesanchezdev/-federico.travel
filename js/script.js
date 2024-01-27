!(function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function t(t, n, i) {
    return (
      n && e(t.prototype, n),
      i && e(t, i),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  function n() {
    return (
      (n =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }),
      n.apply(this, arguments)
    );
  }
  function i(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      r(e, t);
  }
  function r(e, t) {
    return (
      (r =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        }),
      r(e, t)
    );
  }
  function a() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  }
  function o(e, t, n) {
    return (
      (o = a()
        ? Reflect.construct
        : function (e, t, n) {
            var i = [null];
            i.push.apply(i, t);
            var a = new (Function.bind.apply(e, i))();
            return n && r(a, n.prototype), a;
          }),
      o.apply(null, arguments)
    );
  }
  function l(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function s(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function u(e, t) {
    var n =
      ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
      Array.isArray(e) ||
      (n = (function (e, t) {
        if (e) {
          if ("string" == typeof e) return s(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? s(e, t)
              : void 0
          );
        }
      })(e)) ||
      (t && e && "number" == typeof e.length)
    ) {
      n && (e = n);
      var i = 0;
      return function () {
        return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  for (
    var c = null,
      f = [
        "percent",
        "length",
        "angle",
        "time",
        "frequency",
        "resolution",
        "flex",
      ],
      m = {
        fontRelativeLengths: {
          units: new Set([
            "em",
            "rem",
            "ex",
            "rex",
            "cap",
            "rcap",
            "ch",
            "rch",
            "ic",
            "ric",
            "lh",
            "rlh",
          ]),
        },
        viewportRelativeLengths: {
          units: new Set([
            "vw",
            "lvw",
            "svw",
            "dvw",
            "vh",
            "lvh",
            "svh",
            "dvh",
            "vi",
            "lvi",
            "svi",
            "dvi",
            "vb",
            "lvb",
            "svb",
            "dvb",
            "vmin",
            "lvmin",
            "svmin",
            "dvmin",
            "vmax",
            "lvmax",
            "svmax",
            "dvmax",
          ]),
        },
        absoluteLengths: {
          units: new Set(["cm", "mm", "Q", "in", "pt", "pc", "px"]),
          compatible: !0,
          canonicalUnit: "px",
          ratios: {
            cm: 96 / 2.54,
            mm: 96 / 2.54 / 10,
            Q: 96 / 2.54 / 40,
            in: 96,
            pc: 16,
            pt: 96 / 72,
            px: 1,
          },
        },
        angle: {
          units: new Set(["deg", "grad", "rad", "turn"]),
          compatible: !0,
          canonicalUnit: "deg",
          ratios: { deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 },
        },
        time: {
          units: new Set(["s", "ms"]),
          compatible: !0,
          canonicalUnit: "s",
          ratios: { s: 1, ms: 0.001 },
        },
        frequency: {
          units: new Set(["hz", "khz"]),
          compatible: !0,
          canonicalUnit: "hz",
          ratios: { hz: 1, khz: 1e3 },
        },
        resolution: {
          units: new Set(["dpi", "dpcm", "dppx"]),
          compatible: !0,
          canonicalUnit: "dppx",
          ratios: { dpi: 1 / 96, dpcm: 2.54 / 96, dppx: 1 },
        },
      },
      h = new Map(),
      p = 0,
      d = Object.values(m);
    p < d.length;
    p++
  ) {
    var v = d[p];
    if (v.compatible)
      for (var g, S = u(v.units); !(g = S()).done; ) h.set(g.value, v);
  }
  function y(e) {
    return h.get(e);
  }
  function T(e, t) {
    for (var i = n({}, e), r = 0, a = Object.keys(t); r < a.length; r++) {
      var o = a[r];
      i[o] ? (i[o] += t[o]) : (i[o] = t[o]);
    }
    return i;
  }
  function w(e) {
    return "number" === e
      ? {}
      : "percent" === e
      ? { percent: 1 }
      : m.absoluteLengths.units.has(e) ||
        m.fontRelativeLengths.units.has(e) ||
        m.viewportRelativeLengths.units.has(e)
      ? { length: 1 }
      : m.angle.units.has(e)
      ? { angle: 1 }
      : m.time.units.has(e)
      ? { time: 1 }
      : m.frequency.units.has(e)
      ? { frequency: 1 }
      : m.resolution.units.has(e)
      ? { resolution: 1 }
      : "fr" === e
      ? { flex: 1 }
      : c;
  }
  function b(e) {
    if (e instanceof CSSUnitValue) {
      var t,
        n = e.unit,
        i = e.value,
        r = y(e.unit);
      return (
        r &&
          n !== r.canonicalUnit &&
          ((i *= r.ratios[n]), (n = r.canonicalUnit)),
        "number" === n ? [[i, {}]] : [[i, ((t = {}), (t[n] = 1), t)]]
      );
    }
    if (e instanceof CSSMathInvert) {
      if (!(e.value instanceof CSSUnitValue))
        throw new Error("Not implemented");
      var a = b(e.value);
      if (a === c) return c;
      if (a.length > 1) return c;
      for (
        var o = a[0], l = {}, s = 0, f = Object.entries(o[1]);
        s < f.length;
        s++
      ) {
        var m = f[s];
        l[m[0]] = -1 * m[1];
      }
      return (a[0] = [1 / o[0], l]), a;
    }
    if (e instanceof CSSMathProduct) {
      for (var h, p = [[1, {}]], d = u(e.values); !(h = d()).done; ) {
        var v = b(h.value),
          g = [];
        if (v === c) return c;
        for (var S, w = u(p); !(S = w()).done; )
          for (var x, E = S.value, k = u(v); !(x = k()).done; ) {
            var M = x.value;
            g.push([E[0] * M[0], T(E[1], M[1])]);
          }
        p = g;
      }
      return p;
    }
    throw new Error("Not implemented");
  }
  function x(e, t) {
    if (w(t) === c)
      throw new SyntaxError("The string did not match the expected pattern.");
    var n = b(e);
    if (!n) throw new TypeError();
    if (n.length > 1) throw new TypeError("Sum has more than one item");
    var i = (function (e, t) {
      var n = e.unit,
        i = e.value,
        r = y(n),
        a = y(t);
      return a && r === a
        ? new CSSUnitValue((i * a.ratios[n]) / a.ratios[t], t)
        : c;
    })(E(n[0]), t);
    if (i === c) throw new TypeError();
    return i;
  }
  function E(e) {
    var t = e[0],
      n = Object.entries(e[1]);
    if (n.length > 1) return c;
    if (0 === n.length) return new CSSUnitValue(t, "number");
    var i = n[0];
    return 1 !== i[1] ? c : new CSSUnitValue(t, i[0]);
  }
  function k(e) {
    var t = [].slice.call(arguments, 1);
    if (t && t.length) throw new Error("Not implemented");
    var n = b(e),
      i = n.map(function (e) {
        return E(e);
      });
    if (
      i.some(function (e) {
        return e === c;
      })
    )
      throw new TypeError("Type error");
    return o(CSSMathSum, i);
  }
  function M(e, t) {
    var i;
    if (e.percentHint && t.percentHint && e.percentHint !== t.percentHint)
      return c;
    for (
      var r,
        a = n({}, e, {
          percentHint: null != (i = e.percentHint) ? i : t.percentHint,
        }),
        o = u(f);
      !(r = o()).done;

    ) {
      var l = r.value;
      t[l] && (null != a[l] || (a[l] = 0), (a[l] += t[l]));
    }
    return a;
  }
  var C = new Set(["px", "deg", "s", "hz", "dppx", "number", "fr"]);
  function I(e) {
    return C.has(e.toLowerCase());
  }
  function P(e, t) {
    return e.reduce(function (e, n) {
      return e.has(n[t]) ? e.get(n[t]).push(n) : e.set(n[t], [n]), e;
    }, new Map());
  }
  function A(e, t) {
    for (var n, i = [], r = [], a = u(e); !(n = a()).done; ) {
      var o = n.value;
      t(o) ? i.push(o) : r.push(o);
    }
    return [i, r];
  }
  function R(e, t) {
    function n(e) {
      return Array.from(e).map(function (e) {
        return R(e, t);
      });
    }
    if (e instanceof CSSUnitValue) {
      if ("percent" === e.unit && t.percentageReference)
        return new CSSUnitValue(
          (e.value / 100) * t.percentageReference.value,
          t.percentageReference.unit
        );
      var i = e.toSum();
      return (
        i && 1 === i.values.length && (e = i.values[0]),
        e instanceof CSSUnitValue &&
          "em" === e.unit &&
          t.fontSize &&
          (e = new CSSUnitValue(e.value * t.fontSize.value, t.fontSize.unit)),
        e
      );
    }
    if (!e.operator) return e;
    switch (e.operator) {
      case "sum":
        e = o(CSSMathSum, n(e.values));
        break;
      case "product":
        e = o(CSSMathProduct, n(e.values));
        break;
      case "negate":
        e = new CSSMathNegate(R(e.value, t));
        break;
      case "clamp":
        e = new CSSMathClamp(R(e.lower, t), R(e.value, t), R(e.upper, t));
        break;
      case "invert":
        e = new CSSMathInvert(R(e.value, t));
        break;
      case "min":
        e = o(CSSMathMin, n(e.values));
        break;
      case "max":
        e = o(CSSMathMax, n(e.values));
    }
    if (e instanceof CSSMathMin || e instanceof CSSMathMax) {
      var r = Array.from(e.values);
      if (
        r.every(function (e) {
          return (
            e instanceof CSSUnitValue &&
            "percent" !== e.unit &&
            I(e.unit) &&
            e.unit === r[0].unit
          );
        })
      ) {
        var a = Math[e.operator].apply(
          Math,
          r.map(function (e) {
            return e.value;
          })
        );
        return new CSSUnitValue(a, r[0].unit);
      }
    }
    if (e instanceof CSSMathMin || e instanceof CSSMathMax) {
      var l = A(Array.from(e.values), function (e) {
          return e instanceof CSSUnitValue && "percent" !== e.unit;
        }),
        s = l[1],
        c = Array.from(P(l[0], "unit").values()),
        f = c.some(function (e) {
          return e.length > 0;
        });
      if (f) {
        var m = c.map(function (t) {
          var n = Math[e.operator].apply(
            Math,
            t.map(function (e) {
              return e.value;
            })
          );
          return new CSSUnitValue(n, t[0].unit);
        });
        e =
          e instanceof CSSMathMin
            ? o(CSSMathMin, m.concat(s))
            : o(CSSMathMax, m.concat(s));
      }
      return e;
    }
    if (e instanceof CSSMathNegate)
      return e.value instanceof CSSUnitValue
        ? new CSSUnitValue(0 - e.value.value, e.value.unit)
        : e.value instanceof CSSMathNegate
        ? e.value.value
        : e;
    if (e instanceof CSSMathInvert)
      return e.value instanceof CSSMathInvert ? e.value.value : e;
    if (e instanceof CSSMathSum) {
      for (var h, p = [], d = u(e.values); !(h = d()).done; ) {
        var v,
          g = h.value;
        g instanceof CSSMathSum ? (v = p).push.apply(v, g.values) : p.push(g);
      }
      return (
        (y = (S = p).filter(function (e) {
          return e instanceof CSSUnitValue;
        })),
        (T = S.filter(function (e) {
          return !(e instanceof CSSUnitValue);
        })),
        (w = Array.from(P(y, "unit").entries()).map(function (e) {
          var t = e[0],
            n = e[1].reduce(function (e, t) {
              return e + t.value;
            }, 0);
          return new CSSUnitValue(n, t);
        })),
        1 === (p = [].concat(T, w)).length ? p[0] : o(CSSMathSum, p)
      );
    }
    var S, y, T, w;
    if (e instanceof CSSMathProduct) {
      for (var b, x = [], E = u(e.values); !(b = E()).done; ) {
        var k,
          M = b.value;
        M instanceof CSSMathProduct
          ? (k = x).push.apply(k, M.values)
          : x.push(M);
      }
      var C = A(x, function (e) {
          return e instanceof CSSUnitValue && "number" === e.unit;
        }),
        N = C[0],
        O = C[1];
      if (N.length > 1) {
        var V = N.reduce(function (e, t) {
          return e * t.value;
        }, 1);
        x = [new CSSUnitValue(V, "number")].concat(O);
      }
      if (2 === x.length) {
        for (var L, j, U, _ = u(x); !(U = _()).done; ) {
          var W = U.value;
          W instanceof CSSUnitValue && "number" === W.unit
            ? (L = W)
            : W instanceof CSSMathSum &&
              [].concat(W.values).every(function (e) {
                return e instanceof CSSUnitValue;
              }) &&
              (j = W);
        }
        if (L && j)
          return o(
            CSSMathSum,
            [].concat(j.values).map(function (e) {
              return new CSSUnitValue(e.value * L.value, e.unit);
            })
          );
      }
      if (
        x.every(function (e) {
          return (
            (e instanceof CSSUnitValue && I(e.unit)) ||
            (e instanceof CSSMathInvert &&
              e.value instanceof CSSUnitValue &&
              I(e.value.unit))
          );
        })
      ) {
        var z = o(CSSMathProduct, x).toSum();
        if (z && 1 === z.values.length) return z.values[0];
      }
      return o(CSSMathProduct, x);
    }
    return e;
  }
  !(function () {
    var e = new WeakMap();
    function n(e) {
      for (var t, n = [], i = 0; i < e.length; i++)
        n[i] =
          "number" == typeof (t = e[i]) ? new CSSUnitValue(t, "number") : t;
      return n;
    }
    var r = (function () {
      function i(t, i, r, a) {
        e.set(this, {
          values: n(t),
          operator: i,
          name: r || i,
          delimiter: a || ", ",
        });
      }
      return (
        (i.prototype.toString = function () {
          var t = e.get(this);
          return t.name + "(" + t.values.join(t.delimiter) + ")";
        }),
        t(i, [
          {
            key: "operator",
            get: function () {
              return e.get(this).operator;
            },
          },
          {
            key: "values",
            get: function () {
              return e.get(this).values;
            },
          },
        ]),
        i
      );
    })();
    function a(e) {
      var t = [],
        n = e.split(/(?<!\([^\)]*)([*])(?![^\(]*\))/);
      for (t.push(l(n.shift())); n.length; ) n.shift(), t.push(l(n.shift()));
      return o(CSSMathProduct, t);
    }
    function l(e) {
      var t = [],
        n = e.split(/(?<!\([^\)]*)([/])(?![^\(]*\))/);
      for (t.push(s(n.shift())); n.length; )
        n.shift(), t.push(new CSSMathInvert(s(n.shift())));
      return o(CSSMathProduct, t);
    }
    function s(e) {
      return (e = e.trim()).match(/^[a-z(]/i)
        ? (function (e) {
            var t = e.match(/^(calc|min|max)?\((.*)\)$/);
            if (!t) throw new SyntaxError("Unsupported syntax " + e);
            var n = t[1],
              i = t[2];
            switch (void 0 === n ? "parens" : n) {
              case "calc":
              case "parens":
                return (function (e) {
                  var t = [],
                    n = e.split(/(?<!\([^\)]*)(\s[+-]\s)(?![^\(]*\))/);
                  for (t.push(a(n.shift())); n.length; ) {
                    var i = n.shift(),
                      r = n.shift();
                    "+" === i.trim()
                      ? t.push(a(r))
                      : "-" === i.trim() && t.push(new CSSMathNegate(a(r)));
                  }
                  return o(CSSMathSum, t);
                })(i);
              case "min":
                return o(CSSMathMin, i.split(",").map(s));
              case "max":
                return o(CSSMathMax, i.split(",").map(s));
            }
          })(e)
        : (function (e) {
            var t = e.match(
              /^(-?\d*[.]?\d+)(r?em|r?ex|r?cap|r?ch|r?ic|r?lh|[sld]?v(w|h|i|b|min|max)|cm|mm|Q|in|pt|pc|px|%)?$/
            );
            if (t) {
              var n = t[2];
              return (
                void 0 === n ? (n = "number") : "%" === n && (n = "percent"),
                new CSSUnitValue(parseFloat(t[1]), n)
              );
            }
            throw new SyntaxError("Unsupported syntax " + e);
          })(e);
    }
    var c = {
      CSSNumericValue: (function () {
        function e() {}
        return (
          (e.parse = function (e) {
            return R(s(e), {});
          }),
          e
        );
      })(),
      CSSUnitValue: (function () {
        function n(t, n) {
          e.set(this, { value: t, unit: n });
        }
        var i = n.prototype;
        return (
          (i.to = function (e) {
            return x(this, e);
          }),
          (i.toSum = function () {
            return k.apply(void 0, [this].concat([].slice.call(arguments)));
          }),
          (i.type = function () {
            return w(e.get(this).unit);
          }),
          (i.toString = function () {
            var t = e.get(this);
            return (
              "" +
              t.value +
              (function (e) {
                switch (e) {
                  case "percent":
                    return "%";
                  case "number":
                    return "";
                  default:
                    return e.toLowerCase();
                }
              })(t.unit)
            );
          }),
          t(n, [
            {
              key: "value",
              get: function () {
                return e.get(this).value;
              },
              set: function (t) {
                e.get(this).value = t;
              },
            },
            {
              key: "unit",
              get: function () {
                return e.get(this).unit;
              },
            },
          ]),
          n
        );
      })(),
      CSSKeywordValue: (function () {
        function e(e) {
          this.value = e;
        }
        return (
          (e.prototype.toString = function () {
            return this.value.toString();
          }),
          e
        );
      })(),
      CSSMathSum: (function (e) {
        function t(t) {
          return e.call(this, arguments, "sum", "calc", " + ") || this;
        }
        return i(t, e), t;
      })(r),
      CSSMathProduct: (function (t) {
        function n(e) {
          return t.call(this, arguments, "product", "calc", " * ") || this;
        }
        i(n, t);
        var r = n.prototype;
        return (
          (r.toSum = function () {
            return k.apply(void 0, [this].concat([].slice.call(arguments)));
          }),
          (r.type = function () {
            return e
              .get(this)
              .values.map(function (e) {
                return e.type();
              })
              .reduce(M);
          }),
          n
        );
      })(r),
      CSSMathNegate: (function (n) {
        function r(e) {
          return n.call(this, [arguments[0]], "negate", "-") || this;
        }
        return (
          i(r, n),
          t(r, [
            {
              key: "value",
              get: function () {
                return e.get(this).values[0];
              },
            },
          ]),
          r
        );
      })(r),
      CSSMathInvert: (function (n) {
        function r(e) {
          return (
            n.call(this, [1, arguments[0]], "invert", "calc", " / ") || this
          );
        }
        return (
          i(r, n),
          (r.prototype.type = function () {
            return (function (e) {
              for (var t, n = {}, i = u(f); !(t = i()).done; ) {
                var r = t.value;
                n[r] = -1 * e[r];
              }
              return n;
            })(e.get(this).values[1].type());
          }),
          t(r, [
            {
              key: "value",
              get: function () {
                return e.get(this).values[1];
              },
            },
          ]),
          r
        );
      })(r),
      CSSMathMax: (function (e) {
        function t() {
          return e.call(this, arguments, "max") || this;
        }
        return i(t, e), t;
      })(r),
      CSSMathMin: (function (e) {
        function t() {
          return e.call(this, arguments, "min") || this;
        }
        return i(t, e), t;
      })(r),
    };
    if (!window.CSS && !Reflect.defineProperty(window, "CSS", { value: {} }))
      throw Error("Error installing CSSOM support");
    for (var m in (window.CSSUnitValue ||
      [
        "number",
        "percent",
        "em",
        "ex",
        "px",
        "cm",
        "mm",
        "in",
        "pt",
        "pc",
        "Q",
        "vw",
        "vh",
        "vmin",
        "vmax",
        "rems",
        "ch",
        "deg",
        "rad",
        "grad",
        "turn",
        "ms",
        "s",
        "Hz",
        "kHz",
        "dppx",
        "dpi",
        "dpcm",
        "fr",
      ].forEach(function (e) {
        if (
          !Reflect.defineProperty(CSS, e, {
            value: function (t) {
              return new CSSUnitValue(t, e);
            },
          })
        )
          throw Error("Error installing CSS." + e);
      }),
    c))
      if (!(m in window) && !Reflect.defineProperty(window, m, { value: c[m] }))
        throw Error("Error installing CSSOM support for " + m);
  })();
  var N = "block",
    O = new WeakMap(),
    V = new WeakMap();
  function L(e) {
    return e === document.scrollingElement ? document : e;
  }
  function j(e) {
    _(e);
    var t = O.get(e).animations;
    if (0 !== t.length)
      for (var n = e.currentTime, i = 0; i < t.length; i++)
        t[i].tickAnimation(n);
  }
  function U(e, t) {
    if (!e) return null;
    var n = V.get(e).sourceMeasurements,
      i = "horizontal-tb" == getComputedStyle(e).writingMode,
      r = n.scrollTop;
    return (
      ("x" == t || ("inline" == t && i) || ("block" == t && !i)) &&
        (r = Math.abs(n.scrollLeft)),
      r
    );
  }
  function _(e) {
    if (e instanceof ie) {
      var t = e.subject;
      t && "none" != getComputedStyle(t).display ? H(e, J(t)) : H(e, null);
    } else
      !(function (e) {
        var t = O.get(e);
        t.anonymousSource && H(e, Q(t.anonymousSource, t.anonymousTarget));
      })(e);
  }
  function W(e) {
    var t = getComputedStyle(e);
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop,
      scrollWidth: e.scrollWidth,
      scrollHeight: e.scrollHeight,
      clientWidth: e.clientWidth,
      clientHeight: e.clientHeight,
      writingMode: t.writingMode,
      direction: t.direction,
      scrollPaddingTop: t.scrollPaddingTop,
      scrollPaddingBottom: t.scrollPaddingBottom,
      scrollPaddingLeft: t.scrollPaddingLeft,
      scrollPaddingRight: t.scrollPaddingRight,
    };
  }
  function z(e, t) {
    if (e && t) {
      for (var n = 0, i = 0, r = t, a = e.offsetParent; r && r != a; )
        (i += r.offsetLeft), (n += r.offsetTop), (r = r.offsetParent);
      (i -= e.offsetLeft + e.clientLeft), (n -= e.offsetTop + e.clientTop);
      var o = getComputedStyle(t);
      return {
        top: n,
        left: i,
        offsetWidth: t.offsetWidth,
        offsetHeight: t.offsetHeight,
        fontSize: o.fontSize,
      };
    }
  }
  function D(e) {
    var t = V.get(e);
    t.sourceMeasurements = W(e);
    for (var n, i = u(t.timelineRefs); !(n = i()).done; ) {
      var r = n.value.deref();
      r instanceof ie && (O.get(r).subjectMeasurements = z(e, r.subject));
    }
    t.updateScheduled ||
      (requestAnimationFrame(function () {
        for (var e, n = u(t.timelineRefs); !(e = n()).done; ) {
          var i = e.value.deref();
          i && j(i);
        }
        t.updateScheduled = !1;
      }),
      (t.updateScheduled = !0));
  }
  function H(e, t) {
    var n = O.get(e).source;
    if (n != t) {
      if (n) {
        var i = V.get(n);
        if (i) {
          i.timelineRefs.delete(e);
          for (
            var r,
              a = u(
                Array.from(i.timelineRefs).filter(function (e) {
                  return void 0 === e.deref();
                })
              );
            !(r = a()).done;

          )
            i.timelineRefs.delete(r.value);
          0 === i.timelineRefs.size && (i.disconnect(), V.delete(n));
        }
      }
      if (((O.get(e).source = t), t)) {
        var o = V.get(t);
        if (!o) {
          (o = { timelineRefs: new Set(), sourceMeasurements: W(t) }),
            V.set(t, o);
          var l = new ResizeObserver(function (e) {
            for (var t, n = u(e); !(t = n()).done; ) D(t.value.target);
          });
          l.observe(t);
          var s = new MutationObserver(function (e) {
            for (var t, n = u(e); !(t = n()).done; ) D(t.value.target);
          });
          s.observe(t, { attributes: !0, attributeFilter: ["style", "class"] });
          var c = function () {
            (o.sourceMeasurements.scrollLeft = t.scrollLeft),
              (o.sourceMeasurements.scrollTop = t.scrollTop);
            for (var e, n = u(o.timelineRefs); !(e = n()).done; ) {
              var i = e.value.deref();
              i && j(i);
            }
          };
          L(t).addEventListener("scroll", c),
            (o.disconnect = function () {
              l.disconnect(),
                s.disconnect(),
                L(t).removeEventListener("scroll", c);
            });
        }
        o.timelineRefs.add(new WeakRef(e));
      }
    }
  }
  function F(e, t) {
    for (var n = O.get(e).animations, i = 0; i < n.length; i++)
      n[i].animation == t && n.splice(i, 1);
  }
  function q(e, t, n) {
    for (var i = O.get(e).animations, r = 0; r < i.length; r++)
      if (i[r].animation == t) return;
    i.push({ animation: t, tickAnimation: n }), j(e);
  }
  var B = (function () {
    function e(t) {
      if (
        (O.set(this, {
          source: null,
          axis: N,
          anonymousSource: t ? t.anonymousSource : null,
          anonymousTarget: t ? t.anonymousTarget : null,
          subject: null,
          inset: null,
          animations: [],
          subjectMeasurements: null,
        }),
        H(
          this,
          t && void 0 !== t.source ? t.source : document.scrollingElement
        ),
        t && void 0 !== t.axis && t.axis != N)
      ) {
        if (!e.isValidAxis(t.axis)) throw TypeError("Invalid axis");
        O.get(this).axis = t.axis;
      }
      j(this);
    }
    return (
      (e.isValidAxis = function (e) {
        return ["block", "inline", "x", "y"].includes(e);
      }),
      t(e, [
        {
          key: "source",
          get: function () {
            return O.get(this).source;
          },
          set: function (e) {
            H(this, e), j(this);
          },
        },
        {
          key: "axis",
          get: function () {
            return O.get(this).axis;
          },
          set: function (t) {
            if (!e.isValidAxis(t)) throw TypeError("Invalid axis");
            (O.get(this).axis = t), j(this);
          },
        },
        {
          key: "duration",
          get: function () {
            return CSS.percent(100);
          },
        },
        {
          key: "phase",
          get: function () {
            var e = this.source;
            if (!e) return "inactive";
            var t = getComputedStyle(e);
            return "none" == t.display
              ? "inactive"
              : e == document.scrollingElement ||
                ("visible" != t.overflow && "clip" != t.overflow)
              ? "active"
              : "inactive";
          },
        },
        {
          key: "currentTime",
          get: function () {
            var e = null,
              t = this.source;
            if (!t) return e;
            if ("inactive" == this.phase) return e;
            var n = getComputedStyle(t);
            if ("inline" === n.display || "none" === n.display) return e;
            var i = this.axis,
              r = U(t, i),
              a = (function (e, t) {
                var n = V.get(e).sourceMeasurements,
                  i = "horizontal-tb" == getComputedStyle(e).writingMode;
                return (
                  "block" === t
                    ? (t = i ? "y" : "x")
                    : "inline" === t && (t = i ? "x" : "y"),
                  "y" === t
                    ? n.scrollHeight - n.clientHeight
                    : "x" === t
                    ? n.scrollWidth - n.clientWidth
                    : void 0
                );
              })(t, i);
            return a > 0 ? CSS.percent((100 * r) / a) : CSS.percent(100);
          },
        },
        {
          key: "__polyfill",
          get: function () {
            return !0;
          },
        },
      ]),
      e
    );
  })();
  function K(e, t) {
    for (var n = e.parentElement; null != n; ) {
      if (t(n)) return n;
      n = n.parentElement;
    }
  }
  function Q(e, t) {
    switch (e) {
      case "root":
        return document.scrollingElement;
      case "nearest":
        return J(t);
      case "self":
        return t;
      default:
        throw new TypeError("Invalid ScrollTimeline Source Type.");
    }
  }
  function G(e) {
    switch (getComputedStyle(e).display) {
      case "block":
      case "inline-block":
      case "list-item":
      case "table":
      case "table-caption":
      case "flow-root":
      case "flex":
      case "grid":
        return !0;
    }
    return !1;
  }
  function X(e) {
    var t = getComputedStyle(e);
    return (
      "none" != t.transform ||
      "none" != t.perspective ||
      "transform" == t.willChange ||
      "perspective" == t.willChange ||
      "none" != t.filter ||
      "filter" == t.willChange ||
      "none" != t.backdropFilter
    );
  }
  function Y(e) {
    return "static" != getComputedStyle(e).position || X(e);
  }
  function $(e) {
    switch (getComputedStyle(e).position) {
      case "static":
      case "relative":
      case "sticky":
        return K(e, G);
      case "absolute":
        return K(e, Y);
      case "fixed":
        return K(e, X);
    }
  }
  function J(e) {
    if (e) {
      for (; (e = $(e)); )
        switch (getComputedStyle(e)["overflow-x"]) {
          case "auto":
          case "scroll":
          case "hidden":
            return e == document.body &&
              "visible" == getComputedStyle(document.scrollingElement).overflow
              ? document.scrollingElement
              : e;
        }
      return document.scrollingElement;
    }
  }
  function Z(e, t) {
    var n = O.get(e),
      i = n.subjectMeasurements,
      r = V.get(n.source).sourceMeasurements;
    return "inactive" === e.phase
      ? null
      : e instanceof ie
      ? ee(t, r, i, n.axis, n.inset)
      : null;
  }
  function ee(e, t, n, i, r) {
    var a = "horizontal-tb" == t.writingMode,
      o = "rtl" == t.direction || "vertical-rl" == t.writingMode,
      l = void 0,
      s = void 0,
      u = { fontSize: n.fontSize };
    "x" == i || ("inline" == i && a) || ("block" == i && !a)
      ? ((l = n.offsetWidth),
        (s = n.left),
        (u.scrollPadding = [t.scrollPaddingLeft, t.scrollPaddingRight]),
        o &&
          ((s += t.scrollWidth - t.clientWidth),
          (u.scrollPadding = [t.scrollPaddingRight, t.scrollPaddingLeft])),
        (u.containerSize = t.clientWidth))
      : ((l = n.offsetHeight),
        (s = n.top),
        (u.scrollPadding = [t.scrollPaddingTop, t.scrollPaddingBottom]),
        (u.containerSize = t.clientHeight));
    var c = (function (e, t) {
        if (!e) return { start: 0, end: 0 };
        var n = [e.start, e.end].map(function (e, n) {
          if ("auto" === e)
            return "auto" === t.scrollPadding[n]
              ? 0
              : parseFloat(t.scrollPadding[n]);
          var i = R(e, {
            percentageReference: CSS.px(t.containerSize),
            fontSize: CSS.px(parseFloat(t.fontSize)),
          });
          if (i instanceof CSSUnitValue && "px" === i.unit) return i.value;
          throw TypeError("Unsupported inset.");
        });
        return { start: n[0], end: n[1] };
      })(r, u),
      f = s - u.containerSize + c.end,
      m = s + l - c.start,
      h = f + l,
      p = m - l,
      d = Math.min(h, p),
      v = Math.max(h, p),
      g = void 0,
      S = void 0,
      y = l > u.containerSize - c.start - c.end;
    switch (e) {
      case "cover":
        (g = f), (S = m);
        break;
      case "contain":
        (g = d), (S = v);
        break;
      case "entry":
        (g = f), (S = d);
        break;
      case "exit":
        (g = v), (S = m);
        break;
      case "entry-crossing":
        (g = f), (S = y ? v : d);
        break;
      case "exit-crossing":
        (g = y ? d : v), (S = m);
    }
    return { start: g, end: S };
  }
  function te(e, t, n) {
    return ne(Z(e, t), n, Z(e, "cover"), e.subject);
  }
  function ne(e, t, n, i) {
    if (!e || !n) return 0;
    var r = getComputedStyle(i),
      a = R(t, {
        percentageReference: CSS.px(e.end - e.start),
        fontSize: CSS.px(parseFloat(r.fontSize)),
      });
    if (!(a instanceof CSSUnitValue) || "px" !== a.unit)
      throw new Error("Unsupported offset '" + a.toString() + "'");
    return (a.value + e.start - n.start) / (n.end - n.start);
  }
  var ie = (function (e) {
      function n(t) {
        var n;
        n = e.call(this, t) || this;
        var i = O.get(l(n));
        return (
          (i.subject = t && t.subject ? t.subject : void 0),
          t &&
            t.inset &&
            (i.inset = (function (e) {
              var t;
              if (!e) return { start: 0, end: 0 };
              var n = e;
              if (
                ("string" == typeof e &&
                  (n = e.split(/(?<!\([^\)]*)\s(?![^\(]*\))/).map(function (e) {
                    if ("auto" === e.trim()) return "auto";
                    try {
                      return CSSNumericValue.parse(e);
                    } catch (e) {
                      throw TypeError("Invalid inset");
                    }
                  })),
                0 === n.length || n.length > 2)
              )
                throw TypeError("Invalid inset");
              for (var i, r = u(n); !(i = r()).done; ) {
                var a = i.value;
                if ("auto" !== a) {
                  var o = a.type();
                  if (1 !== o.length && 1 !== o.percent)
                    throw TypeError("Invalid inset");
                }
              }
              return { start: n[0], end: null != (t = n[1]) ? t : n[0] };
            })(t.inset)),
          i.subject &&
            new MutationObserver(function () {
              D(i.source);
            }).observe(i.subject, {
              attributes: !0,
              attributeFilter: ["class", "style"],
            }),
          _(l(n)),
          (i.subjectMeasurements = z(i.source, i.subject)),
          j(l(n)),
          n
        );
      }
      return (
        i(n, e),
        t(n, [
          {
            key: "source",
            get: function () {
              return _(this), O.get(this).source;
            },
            set: function (e) {
              throw new Error("Cannot set the source of a view timeline");
            },
          },
          {
            key: "subject",
            get: function () {
              return O.get(this).subject;
            },
          },
          {
            key: "axis",
            get: function () {
              return O.get(this).axis;
            },
          },
          {
            key: "currentTime",
            get: function () {
              var e = null,
                t = U(this.source, this.axis);
              if (t == e) return e;
              var n = Z(this, "cover");
              return n
                ? CSS.percent(((t - n.start) / (n.end - n.start)) * 100)
                : e;
            },
          },
          {
            key: "startOffset",
            get: function () {
              return CSS.px(Z(this, "cover").start);
            },
          },
          {
            key: "endOffset",
            get: function () {
              return CSS.px(Z(this, "cover").end);
            },
          },
        ]),
        n
      );
    })(B),
    re = document.getAnimations,
    ae = window.Element.prototype.getAnimations,
    oe = window.Element.prototype.animate,
    le = window.Animation,
    se = [
      "entry",
      "exit",
      "cover",
      "contain",
      "entry-crossing",
      "exit-crossing",
    ],
    ue = new RegExp("(" + se.join("|") + ")(?!-)"),
    ce = (function () {
      function e() {
        var e = this;
        (this.state = "pending"),
          (this.nativeResolve = this.nativeReject = null),
          (this.promise = new Promise(function (t, n) {
            (e.nativeResolve = t), (e.nativeReject = n);
          }));
      }
      var t = e.prototype;
      return (
        (t.resolve = function (e) {
          (this.state = "resolved"), this.nativeResolve(e);
        }),
        (t.reject = function (e) {
          (this.state = "rejected"),
            this.promise.catch(function () {}),
            this.nativeReject(e);
        }),
        e
      );
    })();
  function fe(e) {
    (e.readyPromise = new ce()),
      requestAnimationFrame(function () {
        var t, n;
        null !==
          (null != (t = null == (n = e.timeline) ? void 0 : n.currentTime)
            ? t
            : null) &&
          (Ae(e),
          "play" !== e.pendingTask ||
          (null === e.startTime && null === e.holdTime)
            ? "pause" === e.pendingTask && ve(e)
            : de(e));
      });
  }
  function me() {
    return new DOMException("The user aborted a request", "AbortError");
  }
  function he(e, t) {
    var n;
    if (null === t) return t;
    if ("number" != typeof t)
      throw new DOMException(
        "Unexpected value: " + t + ".  Cannot convert to CssNumberish",
        "InvalidStateError"
      );
    var i = null != (n = e.rangeDuration) ? n : 100,
      r = be(e);
    return CSS.percent(r ? (i * t) / r : 0);
  }
  function pe(e, t) {
    if (e.timeline) {
      if (null === t) return t;
      if ("percent" === t.unit) {
        var n,
          i = null != (n = e.rangeDuration) ? n : 100,
          r = be(e);
        return (t.value * r) / i;
      }
      throw new DOMException(
        "CSSNumericValue must be a percentage for progress based animations.",
        "NotSupportedError"
      );
    }
    if (null == t || "number" == typeof t) return t;
    var a = t.to("ms");
    if (a) return a.value;
    throw new DOMException(
      "CSSNumericValue must be either a number or a time value for time based animations.",
      "InvalidStateError"
    );
  }
  function de(e) {
    var t = pe(e, e.timeline.currentTime);
    if (null != e.holdTime)
      ye(e),
        0 == e.animation.playbackRate
          ? (e.startTime = t)
          : ((e.startTime = t - e.holdTime / e.animation.playbackRate),
            (e.holdTime = null));
    else if (null !== e.startTime && null !== e.pendingPlaybackRate) {
      var n = (t - e.startTime) * e.animation.playbackRate;
      ye(e);
      var i = e.animation.playbackRate;
      0 == i
        ? ((e.holdTime = null), (e.startTime = t))
        : (e.startTime = t - n / i);
    }
    e.readyPromise &&
      "pending" == e.readyPromise.state &&
      e.readyPromise.resolve(e.proxy),
      we(e, !1, !1),
      xe(e),
      (e.pendingTask = null);
  }
  function ve(e) {
    var t = pe(e, e.timeline.currentTime);
    null != e.startTime &&
      null == e.holdTime &&
      (e.holdTime = (t - e.startTime) * e.animation.playbackRate),
      ye(e),
      (e.startTime = null),
      e.readyPromise.resolve(e.proxy),
      we(e, !1, !1),
      xe(e),
      (e.pendingTask = null);
  }
  function ge(e) {
    if (
      e.finishedPromise &&
      "pending" == e.finishedPromise.state &&
      "finished" == e.proxy.playState
    ) {
      e.finishedPromise.resolve(e.proxy), e.animation.pause();
      var t = new CustomEvent("finish", {
        detail: {
          currentTime: e.proxy.currentTime,
          timelineTime: e.proxy.timeline.currentTime,
        },
      });
      Object.defineProperty(t, "currentTime", {
        get: function () {
          return this.detail.currentTime;
        },
      }),
        Object.defineProperty(t, "timelineTime", {
          get: function () {
            return this.detail.timelineTime;
          },
        }),
        requestAnimationFrame(function () {
          queueMicrotask(function () {
            e.animation.dispatchEvent(t);
          });
        });
    }
  }
  function Se(e) {
    return null !== e.pendingPlaybackRate
      ? e.pendingPlaybackRate
      : e.animation.playbackRate;
  }
  function ye(e) {
    null !== e.pendingPlaybackRate &&
      ((e.animation.playbackRate = e.pendingPlaybackRate),
      (e.pendingPlaybackRate = null));
  }
  function Te(e) {
    if (!e.timeline) return null;
    var t = pe(e, e.timeline.currentTime);
    if (null === t) return null;
    if (null === e.startTime) return null;
    var n = (t - e.startTime) * e.animation.playbackRate;
    return -0 == n && (n = 0), n;
  }
  function we(e, t, n) {
    if (e.timeline) {
      var i = t ? pe(e, e.proxy.currentTime) : Te(e);
      if (i && null != e.startTime && !e.proxy.pending) {
        var r = Se(e),
          a = be(e),
          o = e.previousCurrentTime;
        r > 0 && i >= a && null != e.previousCurrentTime
          ? ((null === o || o < a) && (o = a), (e.holdTime = t ? i : o))
          : r < 0 && i <= 0
          ? ((null == o || o > 0) && (o = 0), (e.holdTime = t ? i : o))
          : 0 != r &&
            (t &&
              null !== e.holdTime &&
              (e.startTime = (function (e, t) {
                if (!e.timeline) return null;
                var n = pe(e, e.timeline.currentTime);
                return null == n ? null : n - t / e.animation.playbackRate;
              })(e, e.holdTime)),
            (e.holdTime = null));
      }
      xe(e),
        (e.previousCurrentTime = pe(e, e.proxy.currentTime)),
        "finished" == e.proxy.playState
          ? (e.finishedPromise || (e.finishedPromise = new ce()),
            "pending" == e.finishedPromise.state &&
              (n
                ? ge(e)
                : Promise.resolve().then(function () {
                    ge(e);
                  })))
          : (e.finishedPromise &&
              "resolved" == e.finishedPromise.state &&
              (e.finishedPromise = new ce()),
            "paused" != e.animation.playState && e.animation.pause());
    }
  }
  function be(e) {
    var t = (function (e) {
      var t = e.proxy.effect.getTiming();
      return e.normalizedTiming || t;
    })(e);
    return Math.max(0, t.delay + t.endDelay + t.iterations * t.duration);
  }
  function xe(e) {
    if (e.timeline)
      if (null !== e.startTime) {
        var t = e.timeline.currentTime;
        if (null == t) return;
        Ee(e, (pe(e, t) - e.startTime) * e.animation.playbackRate);
      } else null !== e.holdTime && Ee(e, e.holdTime);
  }
  function Ee(e, t) {
    var n = e.timeline,
      i = e.animation.playbackRate;
    e.animation.currentTime =
      t +
      (n.currentTime && n.currentTime.value == (i < 0 ? 0 : 100)
        ? i < 0
          ? 0.001
          : -0.001
        : 0);
  }
  function ke(e, t) {
    if (e.timeline) {
      var n = "paused" == e.proxy.playState && e.proxy.pending,
        i = !1,
        r = pe(e, e.proxy.currentTime);
      0 == Se(e) && null == r && (e.holdTime = 0),
        null == r && (e.autoAlignStartTime = !0),
        ("finished" === e.proxy.playState || n) &&
          ((e.holdTime = null),
          (e.startTime = null),
          (e.autoAlignStartTime = !0)),
        e.holdTime && (e.startTime = null),
        e.pendingTask && ((e.pendingTask = null), (i = !0)),
        (null !== e.holdTime ||
          e.autoAlignStartTime ||
          n ||
          null !== e.pendingPlaybackRate) &&
          (e.readyPromise && !i && (e.readyPromise = null),
          xe(e),
          e.readyPromise || fe(e),
          (e.pendingTask = "play"),
          q(e.timeline, e.animation, Me.bind(e.proxy)),
          we(e, !1, !1));
    }
  }
  function Me(e) {
    var t = Ie.get(this);
    if (t)
      if (null != e) {
        Ae(t),
          t.pendingTask &&
            requestAnimationFrame(function () {
              "play" !== t.pendingTask ||
              (null === t.startTime && null === t.holdTime)
                ? "pause" === t.pendingTask && ve(t)
                : de(t);
            });
        var n = this.playState;
        if ("running" == n || "finished" == n) {
          var i = pe(t, e);
          Ee(t, (i - pe(t, this.startTime)) * this.playbackRate),
            "finished" == n && 0 != Se(t) && (t.holdTime = null),
            we(t, !1, !1);
        }
      } else
        "paused" !== t.proxy.playState &&
          "idle" != t.animation.playState &&
          t.animation.cancel();
  }
  function Ce(e) {
    e.specifiedTiming = null;
  }
  var Ie = new WeakMap();
  window.addEventListener(
    "pagehide",
    function (e) {
      Ie = new WeakMap();
    },
    !1
  );
  var Pe = new WeakMap();
  function Ae(e) {
    if (
      e.autoAlignStartTime &&
      e.timeline &&
      e.timeline.currentTime &&
      "idle" !== e.proxy.playState &&
      ("paused" !== e.proxy.playState || null === e.holdTime)
    ) {
      var t = e.rangeDuration,
        n = CSS.percent(
          100 *
            (function (e) {
              if (!(e.timeline instanceof ViewTimeline)) return 0;
              var t = e.animationRange.start;
              return (
                "normal" === t &&
                  (t = { rangeName: "cover", offset: CSS.percent(0) }),
                te(e.timeline, t.rangeName, t.offset)
              );
            })(e)
        ),
        i = CSS.percent(
          100 *
            (1 -
              (function (e) {
                if (!(e.timeline instanceof ViewTimeline)) return 0;
                var t = e.animationRange.end;
                return (
                  "normal" === t &&
                    (t = { rangeName: "cover", offset: CSS.percent(100) }),
                  1 - te(e.timeline, t.rangeName, t.offset)
                );
              })(e))
        );
      e.rangeDuration = i.value - n.value;
      var r = Se(e);
      (e.startTime = pe(e, r >= 0 ? n : i)),
        (e.holdTime = null),
        e.rangeDuration !== t && Ce(e);
    }
  }
  var Re = (function () {
    function e(e, t, n) {
      void 0 === n && (n = {});
      var i = e instanceof le ? e : new le(e, a),
        r = t instanceof B,
        a = r ? void 0 : t;
      Pe.set(i, this),
        Ie.set(this, {
          animation: i,
          timeline: r ? t : void 0,
          playState: r ? "idle" : null,
          readyPromise: null,
          finishedPromise: null,
          startTime: null,
          holdTime: null,
          rangeDuration: null,
          previousCurrentTime: null,
          autoAlignStartTime: !1,
          pendingPlaybackRate: null,
          pendingTask: null,
          specifiedTiming: null,
          normalizedTiming: null,
          effect: null,
          animationRange:
            t instanceof ViewTimeline ? Oe(n["animation-range"]) : null,
          proxy: this,
        });
    }
    var n = e.prototype;
    return (
      (n.finish = function () {
        var e = Ie.get(this);
        if (e.timeline) {
          var t = Se(e),
            n = be(e);
          if (0 == t)
            throw new DOMException(
              "Cannot finish Animation with a playbackRate of 0.",
              "InvalidStateError"
            );
          if (t > 0 && Infinity == n)
            throw new DOMException(
              "Cannot finish Animation with an infinite target effect end.",
              "InvalidStateError"
            );
          ye(e);
          var i = t < 0 ? 0 : n;
          this.currentTime = he(e, i);
          var r = pe(e, e.timeline.currentTime);
          null === e.startTime &&
            null !== r &&
            (e.startTime = r - i / e.animation.playbackRate),
            "pause" == e.pendingTask &&
              null !== e.startTime &&
              ((e.holdTime = null),
              (e.pendingTask = null),
              e.readyPromise.resolve(this)),
            "play" == e.pendingTask &&
              null !== e.startTime &&
              ((e.pendingTask = null), e.readyPromise.resolve(this)),
            we(e, !0, !0);
        } else e.animation.finish();
      }),
      (n.play = function () {
        var e = Ie.get(this);
        e.timeline ? ke(e) : e.animation.play();
      }),
      (n.pause = function () {
        var e = Ie.get(this);
        e.timeline
          ? "paused" != this.playState &&
            (null === e.animation.currentTime && (e.autoAlignStartTime = !0),
            "play" == e.pendingTask
              ? (e.pendingTask = null)
              : (e.readyPromise = null),
            e.readyPromise || fe(e),
            (e.pendingTask = "pause"),
            q(e.timeline, e.animation, Me.bind(e.proxy)))
          : e.animation.pause();
      }),
      (n.reverse = function () {
        var e = Ie.get(this),
          t = Se(e),
          n = pe(e, this.currentTime),
          i = Infinity == be(e),
          r = 0 != t && (t < 0 || n > 0 || !i);
        if (!e.timeline || !r)
          return (
            r && (e.pendingPlaybackRate = -Se(e)), void e.animation.reverse()
          );
        if ("inactive" == e.timeline.phase)
          throw new DOMException(
            "Cannot reverse an animation with no active timeline",
            "InvalidStateError"
          );
        this.updatePlaybackRate(-t), ke(e);
      }),
      (n.updatePlaybackRate = function (e) {
        var t = Ie.get(this);
        if (((t.pendingPlaybackRate = e), t.timeline)) {
          if (!t.readyPromise || "pending" != t.readyPromise.state)
            switch (this.playState) {
              case "idle":
              case "paused":
                ye(t);
                break;
              case "finished":
                var n = pe(t, t.timeline.currentTime),
                  i =
                    null !== n
                      ? (n - t.startTime) * t.animation.playbackRate
                      : null;
                (t.startTime =
                  0 == e ? n : null != n && null != i ? (n - i) / e : null),
                  ye(t),
                  we(t, !1, !1),
                  xe(t);
                break;
              default:
                ke(t);
            }
        } else t.animation.updatePlaybackRate(e);
      }),
      (n.persist = function () {
        Ie.get(this).animation.persist();
      }),
      (n.cancel = function () {
        var e = Ie.get(this);
        e.timeline
          ? ("idle" != this.playState &&
              ((function (e) {
                e.pendingTask &&
                  ((e.pendingTask = null),
                  ye(e),
                  e.readyPromise.reject(me()),
                  fe(e),
                  e.readyPromise.resolve(e.proxy));
              })(e),
              e.finishedPromise &&
                "pending" == e.finishedPromise.state &&
                e.finishedPromise.reject(me()),
              (e.finishedPromise = new ce()),
              e.animation.cancel()),
            (e.startTime = null),
            (e.holdTime = null),
            F(e.timeline, e.animation))
          : e.animation.cancel();
      }),
      (n.addEventListener = function (e, t, n) {
        Ie.get(this).animation.addEventListener(e, t, n);
      }),
      (n.removeEventListener = function (e, t, n) {
        Ie.get(this).animation.removeEventListener(e, t, n);
      }),
      (n.dispatchEvent = function (e) {
        Ie.get(this).animation.dispatchEvent(e);
      }),
      t(e, [
        {
          key: "effect",
          get: function () {
            var e = Ie.get(this);
            return e.timeline
              ? (e.effect ||
                  (e.effect = (function (e) {
                    var t = e.animation.effect,
                      n = t.updateTiming,
                      i = {
                        apply: function (n) {
                          t.getTiming();
                          var i = n.apply(t);
                          if (e.timeline) {
                            var r,
                              a = null != (r = e.duration) ? r : 100;
                            (i.localTime = he(e, i.localTime)),
                              (i.endTime = he(e, i.endTime)),
                              (i.activeDuration = he(e, i.activeDuration));
                            var o = be(e);
                            (i.duration = o
                              ? CSS.percent(
                                  (a *
                                    (i.iterations
                                      ? (o - i.delay - i.endDelay) /
                                        i.iterations
                                      : 0)) /
                                    o
                                )
                              : CSS.percent(0)),
                              void 0 === e.timeline.currentTime &&
                                (i.localTime = null);
                          }
                          return i;
                        },
                      },
                      r = {
                        apply: function (i, r) {
                          if (e.specifiedTiming) return e.specifiedTiming;
                          e.specifiedTiming = i.apply(t);
                          var a,
                            o = Object.assign({}, e.specifiedTiming);
                          return (
                            (null === o.duration ||
                              "auto" === o.duration ||
                              e.autoDurationEffect) &&
                              e.timeline &&
                              ((e.autoDurationEffect = !0),
                              (o.delay = 0),
                              (o.endDelay = 0),
                              (a = o.iterations ? 1e5 : 0),
                              (o.duration = o.iterations
                                ? (a - o.delay - o.endDelay) / o.iterations
                                : 0),
                              o.duration < 0 &&
                                ((o.duration = 0), (o.endDelay = a - o.delay)),
                              n.apply(t, [o])),
                            (e.normalizedTiming = o),
                            e.specifiedTiming
                          );
                        },
                      },
                      a = {
                        apply: function (n, i, r) {
                          if (r && r.length) {
                            if (e.timeline && r[0]) {
                              var a = r[0],
                                o = a.duration;
                              if (Infinity === o)
                                throw TypeError(
                                  "Effect duration cannot be Infinity when used with Scroll Timelines"
                                );
                              if (Infinity === a.iterations)
                                throw TypeError(
                                  "Effect iterations cannot be Infinity when used with Scroll Timelines"
                                );
                              void 0 !== o &&
                                "auto" !== o &&
                                (e.autoDurationEffect = null);
                            }
                            e.specifiedTiming &&
                              n.apply(t, [e.specifiedTiming]),
                              n.apply(t, r),
                              Ce(e);
                          }
                        },
                      },
                      o = new Proxy(t, {
                        get: function (e, n) {
                          var i = e[n];
                          return "function" == typeof i ? i.bind(t) : i;
                        },
                        set: function (e, t, n) {
                          return (e[t] = n), !0;
                        },
                      });
                    return (
                      (o.getComputedTiming = new Proxy(t.getComputedTiming, i)),
                      (o.getTiming = new Proxy(t.getTiming, r)),
                      (o.updateTiming = new Proxy(t.updateTiming, a)),
                      o
                    );
                  })(e)),
                e.effect)
              : e.animation.effect;
          },
          set: function (e) {
            var t = Ie.get(this);
            (t.animation.effect = e),
              (t.effect = null),
              (t.autoDurationEffect = null);
          },
        },
        {
          key: "timeline",
          get: function () {
            var e = Ie.get(this);
            return e.timeline || e.animation.timeline;
          },
          set: function (e) {
            var t = Ie.get(this),
              n = this.timeline;
            if (n != e) {
              var i,
                r = this.playState,
                a = this.currentTime,
                o = be(t);
              i = null === a ? null : 0 === o ? 0 : pe(t, a) / o;
              var l = n instanceof B,
                s = e instanceof B,
                u = this.pending;
              if ((l && F(t.timeline, t.animation), s))
                return (
                  (t.timeline = e),
                  ye(t),
                  (t.autoAlignStartTime = !0),
                  (t.startTime = null),
                  (t.holdTime = null),
                  ("running" !== r && "finished" !== r) ||
                    ((t.readyPromise && "resolved" !== t.readyPromise.state) ||
                      fe(t),
                    (t.pendingTask = "play"),
                    q(t.timeline, t.animation, Me.bind(this))),
                  "paused" === r && null !== i && (t.holdTime = i * o),
                  u &&
                    ((t.readyPromise && "resolved" != t.readyPromise.state) ||
                      fe(t),
                    (t.pendingTask = "paused" == r ? "pause" : "play")),
                  null !== t.startTime && (t.holdTime = null),
                  void we(t, !1, !1)
                );
              if (t.animation.timeline != e)
                throw TypeError("Unsupported timeline: " + e);
              if ((F(t.timeline, t.animation), (t.timeline = null), l))
                switch (
                  (null !== a && (t.animation.currentTime = i * be(t)), r)
                ) {
                  case "paused":
                    t.animation.pause();
                    break;
                  case "running":
                  case "finished":
                    t.animation.play();
                }
            }
          },
        },
        {
          key: "startTime",
          get: function () {
            var e = Ie.get(this);
            return e.timeline ? he(e, e.startTime) : e.animation.startTime;
          },
          set: function (e) {
            var t = Ie.get(this);
            if (((e = pe(t, e)), t.timeline)) {
              (t.autoAlignStartTime = !1),
                null == pe(t, t.timeline.currentTime) &&
                  null != t.startTime &&
                  ((t.holdTime = null), xe(t));
              var n = pe(t, this.currentTime);
              ye(t),
                (t.startTime = e),
                (t.holdTime =
                  null !== t.startTime && 0 != t.animation.playbackRate
                    ? null
                    : n),
                t.pendingTask &&
                  ((t.pendingTask = null), t.readyPromise.resolve(this)),
                we(t, !0, !1),
                xe(t);
            } else t.animation.startTime = e;
          },
        },
        {
          key: "currentTime",
          get: function () {
            var e = Ie.get(this);
            return e.timeline
              ? he(e, null != e.holdTime ? e.holdTime : Te(e))
              : e.animation.currentTime;
          },
          set: function (e) {
            var t = Ie.get(this);
            t.timeline
              ? ((function (e, t) {
                  if (null == t && null !== e.currentTime)
                    throw new TypeError();
                  (t = pe(e, t)),
                    (e.autoAlignStartTime = !1),
                    null !== e.holdTime ||
                    null === e.startTime ||
                    "inactive" === e.timeline.phase ||
                    0 === e.animation.playbackRate
                      ? (e.holdTime = t)
                      : (e.startTime =
                          pe(e, e.timeline.currentTime) -
                          t / e.animation.playbackRate),
                    "inactive" === e.timeline.phase && (e.startTime = null),
                    (e.previousCurrentTime = null);
                })(t, e),
                "pause" == t.pendingTask &&
                  ((t.holdTime = pe(t, e)),
                  ye(t),
                  (t.startTime = null),
                  (t.pendingTask = null),
                  t.readyPromise.resolve(this)),
                we(t, !0, !1))
              : (t.animation.currentTime = e);
          },
        },
        {
          key: "playbackRate",
          get: function () {
            return Ie.get(this).animation.playbackRate;
          },
          set: function (e) {
            var t = Ie.get(this);
            if (t.timeline) {
              t.pendingPlaybackRate = null;
              var n = this.currentTime;
              (t.animation.playbackRate = e),
                null !== n && (this.currentTime = n);
            } else t.animation.playbackRate = e;
          },
        },
        {
          key: "playState",
          get: function () {
            var e = Ie.get(this);
            if (!e.timeline) return e.animation.playState;
            var t = pe(e, this.currentTime);
            if (null === t && null === e.startTime && null == e.pendingTask)
              return "idle";
            if (
              "pause" == e.pendingTask ||
              (null === e.startTime && "play" != e.pendingTask)
            )
              return "paused";
            if (null != t) {
              if (e.animation.playbackRate > 0 && t >= be(e)) return "finished";
              if (e.animation.playbackRate < 0 && t <= 0) return "finished";
            }
            return "running";
          },
        },
        {
          key: "rangeStart",
          get: function () {
            var e;
            return null != (e = Ie.get(this).animationRange.start)
              ? e
              : "normal";
          },
          set: function (e) {
            var t = Ie.get(this);
            if (!t.timeline) return (t.animation.rangeStart = e);
            t.timeline instanceof ViewTimeline &&
              ((t.animationRange.start = Ne(e, "start")), Ae(t), xe(t));
          },
        },
        {
          key: "rangeEnd",
          get: function () {
            var e;
            return null != (e = Ie.get(this).animationRange.end) ? e : "normal";
          },
          set: function (e) {
            var t = Ie.get(this);
            if (!t.timeline) return (t.animation.rangeEnd = e);
            t.timeline instanceof ViewTimeline &&
              ((t.animationRange.end = Ne(e, "end")), Ae(t), xe(t));
          },
        },
        {
          key: "replaceState",
          get: function () {
            return Ie.get(this).animation.pending;
          },
        },
        {
          key: "pending",
          get: function () {
            var e = Ie.get(this);
            return e.timeline
              ? !!e.readyPromise && "pending" == e.readyPromise.state
              : e.animation.pending;
          },
        },
        {
          key: "id",
          get: function () {
            return Ie.get(this).animation.id;
          },
          set: function (e) {
            Ie.get(this).animation.id = e;
          },
        },
        {
          key: "onfinish",
          get: function () {
            return Ie.get(this).animation.onfinish;
          },
          set: function (e) {
            Ie.get(this).animation.onfinish = e;
          },
        },
        {
          key: "oncancel",
          get: function () {
            return Ie.get(this).animation.oncancel;
          },
          set: function (e) {
            Ie.get(this).animation.oncancel = e;
          },
        },
        {
          key: "onremove",
          get: function () {
            return Ie.get(this).animation.onremove;
          },
          set: function (e) {
            Ie.get(this).animation.onremove = e;
          },
        },
        {
          key: "finished",
          get: function () {
            var e = Ie.get(this);
            return e.timeline
              ? (e.finishedPromise || (e.finishedPromise = new ce()),
                e.finishedPromise.promise)
              : e.animation.finished;
          },
        },
        {
          key: "ready",
          get: function () {
            var e = Ie.get(this);
            return e.timeline
              ? (e.readyPromise ||
                  ((e.readyPromise = new ce()), e.readyPromise.resolve(this)),
                e.readyPromise.promise)
              : e.animation.ready;
          },
        },
      ]),
      e
    );
  })();
  function Ne(e, t) {
    if (!e || "normal" === e) return "normal";
    var n = "cover",
      i = "start" === t ? CSS.percent(0) : CSS.percent(100);
    if (e instanceof Object)
      void 0 !== e.rangeName && (n = e.rangeName),
        void 0 !== e.offset && (i = e.offset);
    else {
      var r = e
        .split(ue)
        .map(function (e) {
          return e.trim();
        })
        .filter(Boolean);
      1 === r.length
        ? se.includes(r[0])
          ? (n = r[0])
          : (i = CSSNumericValue.parse(r[0]))
        : 2 === r.length && ((n = r[0]), (i = CSSNumericValue.parse(r[1])));
    }
    if (!se.includes(n)) throw TypeError("Invalid range name");
    return { rangeName: n, offset: i };
  }
  function Oe(e) {
    if (!e) return { start: "normal", end: "normal" };
    var t = {
        start: { rangeName: "cover", offset: CSS.percent(0) },
        end: { rangeName: "cover", offset: CSS.percent(100) },
      },
      n = e.split(" "),
      i = [],
      r = [];
    if (
      (n.forEach(function (e) {
        e.endsWith("%") ? r.push(parseFloat(e)) : i.push(e);
      }),
      i.length > 2 || r.length > 2 || 1 == r.length)
    )
      throw TypeError("Invalid time range or unsupported time range format.");
    return (
      i.length &&
        ((t.start.rangeName = i[0]),
        (t.end.rangeName = i.length > 1 ? i[1] : i[0])),
      r.length > 1 &&
        ((t.start.offset = CSS.percent(r[0])),
        (t.end.offset = CSS.percent(r[1]))),
      t
    );
  }
  function Ve(e, t) {
    var n = t.timeline;
    n instanceof B && delete t.timeline;
    var i = oe.apply(this, [e, t]),
      r = new Re(i, n);
    return (
      n instanceof B &&
        (i.pause(),
        n instanceof ViewTimeline &&
          (Ie.get(r).animationRange = {
            start: Ne(t.rangeStart, "start"),
            end: Ne(t.rangeEnd, "end"),
          }),
        r.play()),
      r
    );
  }
  function Le(e) {
    for (var t = 0; t < e.length; ++t) {
      var n = Pe.get(e[t]);
      n && (e[t] = n);
    }
    return e;
  }
  function je(e) {
    return Le(ae.apply(this, [e]));
  }
  function Ue(e) {
    return Le(re.apply(this, [e]));
  }
  var _e = {
      IDENTIFIER: /[\w\\\@_-]+/g,
      WHITE_SPACE: /\s*/g,
      NUMBER: /^[0-9]+/,
      TIME: /^[0-9]+(s|ms)/,
      SCROLL_TIMELINE: /scroll-timeline\s*:([^;}]+)/,
      SCROLL_TIMELINE_NAME: /scroll-timeline-name\s*:([^;}]+)/,
      SCROLL_TIMELINE_AXIS: /scroll-timeline-axis\s*:([^;}]+)/,
      VIEW_TIMELINE: /view-timeline\s*:([^;}]+)/,
      VIEW_TIMELINE_NAME: /view-timeline-name\s*:([^;}]+)/,
      VIEW_TIMELINE_AXIS: /view-timeline-axis\s*:([^;}]+)/,
      VIEW_TIMELINE_INSET: /view-timeline-inset\s*:([^;}]+)/,
      ANIMATION_TIMELINE: /animation-timeline\s*:([^;}]+)/,
      ANIMATION_TIME_RANGE: /animation-range\s*:([^;}]+)/,
      ANIMATION_NAME: /animation-name\s*:([^;}]+)/,
      ANIMATION: /animation\s*:([^;}]+)/,
      ANONYMOUS_SCROLL_TIMELINE: /scroll\(([^)]*)\)/,
      ANONYMOUS_VIEW_TIMELINE: /view\(([^)]*)\)/,
    },
    We = ["block", "inline", "x", "y"],
    ze = ["nearest", "root", "self"],
    De = (function () {
      function e() {
        (this.cssRulesWithTimelineName = []),
          (this.nextAnonymousTimelineNameIndex = 0),
          (this.anonymousScrollTimelineOptions = new Map()),
          (this.anonymousViewTimelineOptions = new Map()),
          (this.sourceSelectorToScrollTimeline = []),
          (this.subjectSelectorToViewTimeline = []),
          (this.keyframeNamesSelectors = new Map());
      }
      var t = e.prototype;
      return (
        (t.transpileStyleSheet = function (e, t, n) {
          for (
            var i = { sheetSrc: e, index: 0, name: n };
            i.index < i.sheetSrc.length &&
            (this.eatWhitespace(i), !(i.index >= i.sheetSrc.length));

          )
            if (this.lookAhead("/*", i))
              for (; this.lookAhead("/*", i); )
                this.eatComment(i), this.eatWhitespace(i);
            else {
              var r = this.parseQualifiedRule(i);
              r &&
                (t
                  ? this.parseKeyframesAndSaveNameMapping(r, i)
                  : this.handleScrollTimelineProps(r, i));
            }
          return i.sheetSrc;
        }),
        (t.getAnimationTimelineOptions = function (e, t) {
          for (var n = this.cssRulesWithTimelineName.length - 1; n >= 0; n--) {
            var i = this.cssRulesWithTimelineName[n];
            try {
              if (
                t.matches(i.selector) &&
                (!i["animation-name"] || i["animation-name"] == e)
              )
                return {
                  "animation-timeline": i["animation-timeline"],
                  "animation-range": i["animation-range"],
                };
            } catch (e) {}
          }
          return null;
        }),
        (t.getAnonymousScrollTimelineOptions = function (e, t) {
          var n,
            i = this.anonymousScrollTimelineOptions.get(e);
          return i
            ? {
                anonymousSource: i.source,
                anonymousTarget: t,
                source: Q(null != (n = i.source) ? n : "nearest", t),
                axis: i.axis ? i.axis : "block",
              }
            : null;
        }),
        (t.getScrollTimelineOptions = function (e, t) {
          var i = this.getAnonymousScrollTimelineOptions(e, t);
          if (i) return i;
          for (
            var r = this.sourceSelectorToScrollTimeline.length - 1;
            r >= 0;
            r--
          ) {
            var a = this.sourceSelectorToScrollTimeline[r];
            if (a.name == e) {
              var o = this.findPreviousSiblingOrAncestorMatchingSelector(
                t,
                a.selector
              );
              if (o) return n({ source: o }, a.axis ? { axis: a.axis } : {});
            }
          }
          return null;
        }),
        (t.findPreviousSiblingOrAncestorMatchingSelector = function (e, t) {
          for (var n = e; n; ) {
            if (n.matches(t)) return n;
            n = n.previousElementSibling || n.parentElement;
          }
          return null;
        }),
        (t.getAnonymousViewTimelineOptions = function (e, t) {
          var n = this.anonymousViewTimelineOptions.get(e);
          return n
            ? {
                subject: t,
                axis: n.axis ? n.axis : "block",
                inset: n.inset ? n.inset : "auto",
              }
            : null;
        }),
        (t.getViewTimelineOptions = function (e, t) {
          var n = this.getAnonymousViewTimelineOptions(e, t);
          if (n) return n;
          for (
            var i = this.subjectSelectorToViewTimeline.length - 1;
            i >= 0;
            i--
          ) {
            var r = this.subjectSelectorToViewTimeline[i];
            if (r.name == e) {
              var a = this.findPreviousSiblingOrAncestorMatchingSelector(
                t,
                r.selector
              );
              if (a) return { subject: a, axis: r.axis, inset: r.inset };
            }
          }
          return null;
        }),
        (t.handleScrollTimelineProps = function (e, t) {
          var n = this;
          if (!e.selector.includes("@keyframes")) {
            var i = e.block.contents.includes("animation-name:"),
              r = e.block.contents.includes("animation-timeline:"),
              a = e.block.contents.includes("animation:");
            if (
              (this.saveSourceSelectorToScrollTimeline(e),
              this.saveSubjectSelectorToViewTimeline(e),
              r || i || a)
            ) {
              var o = [],
                l = [],
                s = !1;
              r && (o = this.extractScrollTimelineNames(e.block.contents)),
                i &&
                  (l = this.extractMatches(
                    e.block.contents,
                    _e.ANIMATION_NAME
                  )),
                (r && i) ||
                  (a &&
                    this.extractMatches(e.block.contents, _e.ANIMATION).forEach(
                      function (t) {
                        var i = n.extractAnimationName(t);
                        i && r && l.push(i),
                          r &&
                            (n.hasDuration(t) ||
                              (n.hasAutoDuration(t) &&
                                (e.block.contents = e.block.contents.replace(
                                  "auto",
                                  "    "
                                )),
                              (e.block.contents = e.block.contents.replace(
                                t,
                                " 1s " + t
                              )),
                              (s = !0)));
                      }
                    ),
                  s &&
                    this.replacePart(
                      e.block.startIndex,
                      e.block.endIndex,
                      e.block.contents,
                      t
                    )),
                this.saveRelationInList(e, o, l);
            }
          }
        }),
        (t.saveSourceSelectorToScrollTimeline = function (e) {
          var t,
            n = e.block.contents.includes("scroll-timeline:"),
            i = e.block.contents.includes("scroll-timeline-name:"),
            r = e.block.contents.includes("scroll-timeline-axis:");
          if (n || i) {
            var a = [];
            if (n)
              for (
                var o,
                  l = u(
                    this.extractMatches(e.block.contents, _e.SCROLL_TIMELINE)
                  );
                !(o = l()).done;

              ) {
                var s = this.split(o.value),
                  c = { selector: e.selector, name: "" };
                1 == s.length
                  ? (c.name = s[0])
                  : 2 == s.length &&
                    (We.includes(s[0])
                      ? ((c.axis = s[0]), (c.name = s[1]))
                      : ((c.axis = s[1]), (c.name = s[0]))),
                  a.push(c);
              }
            if (i)
              for (
                var f = this.extractMatches(
                    e.block.contents,
                    _e.SCROLL_TIMELINE_NAME
                  ),
                  m = 0;
                m < f.length;
                m++
              )
                m < a.length
                  ? (a[m].name = f[m])
                  : a.push({ selector: e.selector, name: f[m] });
            var h = [];
            if (r) {
              var p = this.extractMatches(
                e.block.contents,
                _e.SCROLL_TIMELINE_AXIS
              );
              if (
                (h = p.filter(function (e) {
                  return We.includes(e);
                })).length != p.length
              )
                throw new Error("Invalid axis");
            }
            for (var d = 0; d < a.length; d++)
              h.length && (a[d].axis = h[d % a.length]);
            (t = this.sourceSelectorToScrollTimeline).push.apply(t, a);
          }
        }),
        (t.saveSubjectSelectorToViewTimeline = function (e) {
          var t,
            n = e.block.contents.includes("view-timeline:"),
            i = e.block.contents.includes("view-timeline-name:"),
            r = e.block.contents.includes("view-timeline-axis:"),
            a = e.block.contents.includes("view-timeline-inset:");
          if (n || i) {
            var o = [];
            if (n)
              for (
                var l,
                  s = u(
                    this.extractMatches(e.block.contents, _e.VIEW_TIMELINE)
                  );
                !(l = s()).done;

              ) {
                var c = this.split(l.value),
                  f = { selector: e.selector, name: "", inset: null };
                1 == c.length
                  ? (f.name = c[0])
                  : 2 == c.length &&
                    (We.includes(c[0])
                      ? ((f.axis = c[0]), (f.name = c[1]))
                      : ((f.axis = c[1]), (f.name = c[0]))),
                  o.push(f);
              }
            if (i)
              for (
                var m = this.extractMatches(
                    e.block.contents,
                    _e.VIEW_TIMELINE_NAME
                  ),
                  h = 0;
                h < m.length;
                h++
              )
                h < o.length
                  ? (o[h].name = m[h])
                  : o.push({ selector: e.selector, name: m[h], inset: null });
            var p = [],
              d = [];
            if (
              (a &&
                (p = this.extractMatches(
                  e.block.contents,
                  _e.VIEW_TIMELINE_INSET
                )),
              r)
            ) {
              var v = this.extractMatches(
                e.block.contents,
                _e.VIEW_TIMELINE_AXIS
              );
              if (
                (d = v.filter(function (e) {
                  return We.includes(e);
                })).length != v.length
              )
                throw new Error("Invalid axis");
            }
            for (var g = 0; g < o.length; g++)
              p.length && (o[g].inset = p[g % o.length]),
                d.length && (o[g].axis = d[g % o.length]);
            (t = this.subjectSelectorToViewTimeline).push.apply(t, o);
          }
        }),
        (t.hasDuration = function (e) {
          return (
            e.split(" ").filter(function (e) {
              return _e.TIME.exec(e);
            }).length >= 1
          );
        }),
        (t.hasAutoDuration = function (e) {
          return (
            e.split(" ").filter(function (e) {
              return "auto" === e;
            }).length >= 1
          );
        }),
        (t.saveRelationInList = function (e, t, i) {
          var r = [];
          e.block.contents.includes("animation-range:") &&
            (r = this.extractMatches(
              e.block.contents,
              _e.ANIMATION_TIME_RANGE
            ));
          for (
            var a = Math.max(t.length, i.length, r.length), o = 0;
            o < a;
            o++
          )
            this.cssRulesWithTimelineName.push(
              n(
                { selector: e.selector, "animation-timeline": t[o % t.length] },
                i.length ? { "animation-name": i[o % i.length] } : {},
                r.length ? { "animation-range": r[o % r.length] } : {}
              )
            );
        }),
        (t.extractScrollTimelineNames = function (e) {
          var t = this,
            n = _e.ANIMATION_TIMELINE.exec(e)[1].trim(),
            i = [];
          return (
            n
              .split(",")
              .map(function (e) {
                return e.trim();
              })
              .forEach(function (e) {
                if (
                  (function (e) {
                    return (
                      (e.startsWith("scroll") || e.startsWith("view")) &&
                      e.includes("(")
                    );
                  })(e)
                ) {
                  var n = t.saveAnonymousTimelineName(e);
                  i.push(n);
                } else i.push(e);
              }),
            i
          );
        }),
        (t.saveAnonymousTimelineName = function (e) {
          var t = ":t" + this.nextAnonymousTimelineNameIndex++;
          return (
            e.startsWith("scroll(")
              ? this.anonymousScrollTimelineOptions.set(
                  t,
                  this.parseAnonymousScrollTimeline(e)
                )
              : this.anonymousViewTimelineOptions.set(
                  t,
                  this.parseAnonymousViewTimeline(e)
                ),
            t
          );
        }),
        (t.parseAnonymousScrollTimeline = function (e) {
          var t = _e.ANONYMOUS_SCROLL_TIMELINE.exec(e);
          if (!t) return null;
          var n = {};
          return (
            t[1].split(" ").forEach(function (e) {
              We.includes(e) ? (n.axis = e) : ze.includes(e) && (n.source = e);
            }),
            n
          );
        }),
        (t.parseAnonymousViewTimeline = function (e) {
          var t = _e.ANONYMOUS_VIEW_TIMELINE.exec(e);
          if (!t) return null;
          var n = {};
          return (
            t[1].split(" ").forEach(function (e) {
              We.includes(e)
                ? (n.axis = e)
                : (n.inset = n.inset ? n.inset + " " + e : e);
            }),
            n
          );
        }),
        (t.extractAnimationName = function (e) {
          return this.findMatchingEntryInContainer(
            e,
            this.keyframeNamesSelectors
          );
        }),
        (t.findMatchingEntryInContainer = function (e, t) {
          var n = e.split(" ").filter(function (e) {
            return t.has(e);
          });
          return n ? n[0] : null;
        }),
        (t.parseIdentifier = function (e) {
          _e.IDENTIFIER.lastIndex = e.index;
          var t = _e.IDENTIFIER.exec(e.sheetSrc);
          if (!t) throw this.parseError(e, "Expected an identifier");
          return (e.index += t[0].length), t[0];
        }),
        (t.parseKeyframesAndSaveNameMapping = function (e, t) {
          var n = this;
          if (e.selector.startsWith("@keyframes")) {
            var i = this.replaceKeyframesAndGetMapping(e, t);
            e.selector.split(" ").forEach(function (e, t) {
              t > 0 && n.keyframeNamesSelectors.set(e, i);
            });
          }
        }),
        (t.replaceKeyframesAndGetMapping = function (e, t) {
          var n = e.block.contents,
            i = (function (e) {
              for (var t = 0, n = -1, i = [], r = 0; r < e.length; r++)
                "{" == e[r] ? t++ : "}" == e[r] && t--,
                  1 == t && "{" != e[r] && "}" != e[r] && -1 == n && (n = r),
                  2 == t &&
                    "{" == e[r] &&
                    (i.push({ start: n, end: r }), (n = -1));
              return i;
            })(n);
          if (0 == i.length) return new Map();
          var r = new Map(),
            a = !1,
            o = [];
          o.push(n.substring(0, i[0].start));
          for (
            var l = function (e) {
                var t = n.substring(i[e].start, i[e].end),
                  l = [];
                t.split(",").forEach(function (e) {
                  var t,
                    n = e
                      .split(" ")
                      .map(function (e) {
                        return e.trim();
                      })
                      .filter(function (e) {
                        return "" != e;
                      })
                      .join(" "),
                    i = r.size;
                  r.set(i, n),
                    l.push(i + "%"),
                    (t = n),
                    se.some(function (e) {
                      return t.startsWith(e);
                    }) && (a = !0);
                }),
                  o.push(l.join(",")),
                  o.push(
                    e == i.length - 1
                      ? n.substring(i[e].end)
                      : n.substring(i[e].end, i[e + 1].start)
                  );
              },
              s = 0;
            s < i.length;
            s++
          )
            l(s);
          return a
            ? ((e.block.contents = o.join("")),
              this.replacePart(
                e.block.startIndex,
                e.block.endIndex,
                e.block.contents,
                t
              ),
              r)
            : new Map();
        }),
        (t.parseQualifiedRule = function (e) {
          var t = e.index,
            n = this.parseSelector(e).trim();
          if (n)
            return {
              selector: n,
              block: this.eatBlock(e),
              startIndex: t,
              endIndex: e.index,
            };
        }),
        (t.removeEnclosingDoubleQuotes = function (e) {
          return e.substring(
            '"' == e[0] ? 1 : 0,
            '"' == e[e.length - 1] ? e.length - 1 : e.length
          );
        }),
        (t.assertString = function (e, t) {
          if (e.sheetSrc.substr(e.index, t.length) != t)
            throw this.parseError(e, "Did not find expected sequence " + t);
          e.index += t.length;
        }),
        (t.replacePart = function (e, t, n, i) {
          (i.sheetSrc = i.sheetSrc.slice(0, e) + n + i.sheetSrc.slice(t)),
            i.index >= t && (i.index = e + n.length + (i.index - t));
        }),
        (t.eatComment = function (e) {
          this.assertString(e, "/*"),
            this.eatUntil("*/", e, !0),
            this.assertString(e, "*/");
        }),
        (t.eatBlock = function (e) {
          var t = e.index;
          this.assertString(e, "{");
          for (var n = 1; 0 != n; )
            this.lookAhead("/*", e)
              ? this.eatComment(e)
              : ("{" === e.sheetSrc[e.index]
                  ? n++
                  : "}" === e.sheetSrc[e.index] && n--,
                this.advance(e));
          var i = e.index;
          return {
            startIndex: t,
            endIndex: i,
            contents: e.sheetSrc.slice(t, i),
          };
        }),
        (t.advance = function (e) {
          if ((e.index++, e.index > e.sheetSrc.length))
            throw this.parseError(e, "Advanced beyond the end");
        }),
        (t.parseError = function (e, t) {
          return Error(
            "(" + (e.name ? e.name : "<anonymous file>") + "): " + t
          );
        }),
        (t.eatUntil = function (e, t, n) {
          void 0 === n && (n = !1);
          for (var i = t.index; !this.lookAhead(e, t); ) this.advance(t);
          return (
            n &&
              (t.sheetSrc =
                t.sheetSrc.slice(0, i) +
                " ".repeat(t.index - i) +
                t.sheetSrc.slice(t.index)),
            t.sheetSrc.slice(i, t.index)
          );
        }),
        (t.parseSelector = function (e) {
          var t = e.index;
          if ((this.eatUntil("{", e), t === e.index))
            throw Error("Empty selector");
          return e.sheetSrc.slice(t, e.index);
        }),
        (t.eatWhitespace = function (e) {
          _e.WHITE_SPACE.lastIndex = e.index;
          var t = _e.WHITE_SPACE.exec(e.sheetSrc);
          t && (e.index += t[0].length);
        }),
        (t.lookAhead = function (e, t) {
          return t.sheetSrc.substr(t.index, e.length) == e;
        }),
        (t.peek = function (e) {
          return e.sheetSrc[e.index];
        }),
        (t.extractMatches = function (e, t, n) {
          return (
            void 0 === n && (n = ","),
            t
              .exec(e)[1]
              .trim()
              .split(n)
              .map(function (e) {
                return e.trim();
              })
          );
        }),
        (t.split = function (e) {
          return e
            .split(" ")
            .map(function (e) {
              return e.trim();
            })
            .filter(function (e) {
              return "" != e;
            });
        }),
        e
      );
    })(),
    He = new De();
  function Fe(e, t, n, i, r, a) {
    var o = W(t),
      l = z(t, n);
    return ne(ee(e, o, l, i, r), a, ee("cover", o, l, i, r));
  }
  !(function () {
    if (
      !(function () {
        if (CSS.supports("animation-timeline: --works")) return !0;
        !(function () {
          var e = new MutationObserver(function (e) {
            for (var n, i = u(e); !(n = i()).done; )
              for (var r, a = u(n.value.addedNodes); !(r = a()).done; ) {
                var o = r.value;
                o instanceof HTMLStyleElement && t(o);
              }
          });
          function t(e) {
            if (0 !== e.innerHTML.trim().length) {
              var t = He.transpileStyleSheet(e.innerHTML, !0);
              (t = He.transpileStyleSheet(t, !1)), (e.innerHTML = t);
            }
          }
          e.observe(document.documentElement, { childList: !0, subtree: !0 }),
            document.querySelectorAll("style").forEach(function (e) {
              return t(e);
            }),
            document.querySelectorAll("link").forEach(function (e) {});
        })();
        var e = CSS.supports;
        (CSS.supports = function (t) {
          return (
            (t = t.replaceAll(
              /(animation-timeline|scroll-timeline(-(name|axis))?|view-timeline(-(name|axis|inset))?|timeline-scope)\s*:/g,
              "--supported-property:"
            )),
            e(t)
          );
        }),
          window.addEventListener("animationstart", function (e) {
            e.target
              .getAnimations()
              .filter(function (t) {
                return t.animationName === e.animationName;
              })
              .forEach(function (t) {
                var n = (function (e, t, n) {
                  var i = He.getAnimationTimelineOptions(t, n);
                  if (!i) return null;
                  var r = i["animation-timeline"];
                  if (!r) return null;
                  var a =
                    He.getScrollTimelineOptions(r, n) ||
                    He.getViewTimelineOptions(r, n);
                  return a
                    ? (a.subject &&
                        (function (e, t) {
                          var n = J(t.subject),
                            i = t.axis || t.axis,
                            r = He.keyframeNamesSelectors.get(e.animationName);
                          if (r && r.size) {
                            var a = [];
                            e.effect.getKeyframes().forEach(function (e) {
                              var o = (function (e, r) {
                                for (
                                  var a, o = null, l = u(e);
                                  !(a = l()).done;

                                ) {
                                  var s = a.value,
                                    c = s[1];
                                  if (s[0] == 100 * r.offset) {
                                    if ("from" == c) o = 0;
                                    else if ("to" == c) o = 100;
                                    else {
                                      var f = c.split(" ");
                                      o =
                                        1 == f.length
                                          ? parseFloat(f[0])
                                          : 100 *
                                            Fe(
                                              f[0],
                                              n,
                                              t.subject,
                                              i,
                                              t.inset,
                                              CSS.percent(parseFloat(f[1]))
                                            );
                                    }
                                    break;
                                  }
                                }
                                return o;
                              })(r, e);
                              null !== o &&
                                o >= 0 &&
                                o <= 100 &&
                                ((e.offset = o / 100), a.push(e));
                            });
                            var o = a.sort(function (e, t) {
                              return e.offset < t.offset
                                ? -1
                                : e.affset > t.offset
                                ? 1
                                : 0;
                            });
                            e.effect.setKeyframes(o);
                          }
                        })(e, a),
                      {
                        timeline: a.source ? new B(a) : new ie(a),
                        animOptions: i,
                      })
                    : null;
                })(t, t.animationName, e.target);
                if (n)
                  if (!n.timeline || t instanceof Re) t.timeline = n.timeline;
                  else {
                    var i = new Re(t, n.timeline, n.animOptions);
                    t.pause(), i.play();
                  }
              });
          });
      })()
    ) {
      if (
        ([].concat(document.styleSheets).filter(function (e) {
          return null !== e.href;
        }).length &&
          console.warn(
            "Non-Inline StyleSheets detected: ScrollTimeline polyfill currently only supports inline styles within style tags"
          ),
        !Reflect.defineProperty(window, "ScrollTimeline", { value: B }))
      )
        throw Error(
          "Error installing ScrollTimeline polyfill: could not attach ScrollTimeline to window"
        );
      if (!Reflect.defineProperty(window, "ViewTimeline", { value: ie }))
        throw Error(
          "Error installing ViewTimeline polyfill: could not attach ViewTimeline to window"
        );
      if (!Reflect.defineProperty(Element.prototype, "animate", { value: Ve }))
        throw Error(
          "Error installing ScrollTimeline polyfill: could not attach WAAPI's animate to DOM Element"
        );
      if (!Reflect.defineProperty(window, "Animation", { value: Re }))
        throw Error("Error installing Animation constructor.");
      if (
        !Reflect.defineProperty(Element.prototype, "getAnimations", {
          value: je,
        })
      )
        throw Error(
          "Error installing ScrollTimeline polyfill: could not attach WAAPI's getAnimations to DOM Element"
        );
      if (!Reflect.defineProperty(document, "getAnimations", { value: Ue }))
        throw Error(
          "Error installing ScrollTimeline polyfill: could not attach WAAPI's getAnimations to document"
        );
    }
  })();
})();
