/*! For license information please see app.js.LICENSE.txt */ ! function(t) { var e = {};

    function n(r) { if (e[r]) return e[r].exports; var o = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports }
    n.m = t, n.c = e, n.d = function(t, e, r) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, n.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function(t, e) { if (1 & e && (t = n(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function(e) { return t[e] }.bind(null, o)); return r }, n.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return n.d(e, "a", e), e }, n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "/", n(n.s = 0) }({ "+65i": function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("zu+r").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("svg", { class: this.sizeClass, attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [e("path", { attrs: { d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" } })]) }), [], !1, null, null, null);
        e.default = i.exports }, "/VWV": function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("zu+r").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("svg", { class: this.sizeClass, attrs: { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" } }, [e("path", { attrs: { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" } })]) }), [], !1, null, null, null);
        e.default = i.exports }, 0: function(t, e, n) { n("bUC5"), t.exports = n("pupy") }, "044u": function(t, e, n) { "use strict";
        e.a = { methods: { logTypes: function() { return { debug: "Debug", info: "Info", notice: "Notice", warning: "Warning", alert: "Alert", critical: "Critical", emergency: "Emergency", timeout: "Timeout", error: "Error" } }, logColor: function(t) { var e = function(e) { return e === t.toLowerCase() }; return ["info", "notice"].some(e) ? "blue" : ["warning", "alert"].some(e) ? "yellow" : ["critical", "emergency", "error", "timeout"].some(e) ? "red" : "gray" } } } }, "1Tjy": function(t, e, n) { window, t.exports = function(t) { var e = {};

            function n(r) { if (e[r]) return e[r].exports; var o = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports } return n.m = t, n.c = e, n.d = function(t, e, r) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, n.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function(t, e) { if (1 & e && (t = n(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var o in t) n.d(r, o, function(e) { return t[e] }.bind(null, o)); return r }, n.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return n.d(e, "a", e), e }, n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "", n(n.s = 67) }([function(t, e) { var n = t.exports = { version: "2.6.11" }; "number" == typeof __e && (__e = n) }, function(t, e, n) { var r = n(25)("wks"),
                o = n(27),
                i = n(2).Symbol,
                a = "function" == typeof i;
            (t.exports = function(t) { return r[t] || (r[t] = a && i[t] || (a ? i : o)("Symbol." + t)) }).store = r }, function(t, e) { var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n) }, function(t, e, n) { t.exports = !n(8)((function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a })) }, function(t, e, n) { var r = n(2),
                o = n(0),
                i = n(19),
                a = n(5),
                c = n(9),
                s = function(t, e, n) { var l, u, f, d = t & s.F,
                        p = t & s.G,
                        h = t & s.S,
                        M = t & s.P,
                        b = t & s.B,
                        m = t & s.W,
                        v = p ? o : o[e] || (o[e] = {}),
                        g = v.prototype,
                        A = p ? r : h ? r[e] : (r[e] || {}).prototype; for (l in p && (n = e), n)(u = !d && A && void 0 !== A[l]) && c(v, l) || (f = u ? A[l] : n[l], v[l] = p && "function" != typeof A[l] ? n[l] : b && u ? i(f, r) : m && A[l] == f ? function(t) { var e = function(e, n, r) { if (this instanceof t) { switch (arguments.length) {
                                    case 0:
                                        return new t;
                                    case 1:
                                        return new t(e);
                                    case 2:
                                        return new t(e, n) } return new t(e, n, r) } return t.apply(this, arguments) }; return e.prototype = t.prototype, e }(f) : M && "function" == typeof f ? i(Function.call, f) : f, M && ((v.virtual || (v.virtual = {}))[l] = f, t & s.R && g && !g[l] && a(g, l, f))) };
            s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s }, function(t, e, n) { var r = n(6),
                o = n(13);
            t.exports = n(3) ? function(t, e, n) { return r.f(t, e, o(1, n)) } : function(t, e, n) { return t[e] = n, t } }, function(t, e, n) { var r = n(7),
                o = n(35),
                i = n(36),
                a = Object.defineProperty;
            e.f = n(3) ? Object.defineProperty : function(t, e, n) { if (r(t), e = i(e, !0), r(n), o) try { return a(t, e, n) } catch (t) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!"); return "value" in n && (t[e] = n.value), t } }, function(t, e, n) { var r = n(12);
            t.exports = function(t) { if (!r(t)) throw TypeError(t + " is not an object!"); return t } }, function(t, e) { t.exports = function(t) { try { return !!t() } catch (t) { return !0 } } }, function(t, e) { var n = {}.hasOwnProperty;
            t.exports = function(t, e) { return n.call(t, e) } }, function(t, e, n) { var r = n(15);
            t.exports = function(t) { return Object(r(t)) } }, function(t, e, n) { t.exports = { default: n(61), __esModule: !0 } }, function(t, e) { t.exports = function(t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function(t, e) { t.exports = function(t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } } }, function(t, e, n) { var r = n(38),
                o = n(28);
            t.exports = Object.keys || function(t) { return r(t, o) } }, function(t, e) { t.exports = function(t) { if (null == t) throw TypeError("Can't call method on  " + t); return t } }, function(t, e) { var n = Math.ceil,
                r = Math.floor;
            t.exports = function(t) { return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t) } }, function(t, e, n) { var r = n(25)("keys"),
                o = n(27);
            t.exports = function(t) { return r[t] || (r[t] = o(t)) } }, function(t, e) { t.exports = {} }, function(t, e, n) { var r = n(34);
            t.exports = function(t, e, n) { if (r(t), void 0 === e) return t; switch (n) {
                    case 1:
                        return function(n) { return t.call(e, n) };
                    case 2:
                        return function(n, r) { return t.call(e, n, r) };
                    case 3:
                        return function(n, r, o) { return t.call(e, n, r, o) } } return function() { return t.apply(e, arguments) } } }, function(t, e, n) { var r = n(12),
                o = n(2).document,
                i = r(o) && r(o.createElement);
            t.exports = function(t) { return i ? o.createElement(t) : {} } }, function(t, e, n) { var r = n(22),
                o = n(15);
            t.exports = function(t) { return r(o(t)) } }, function(t, e, n) { var r = n(23);
            t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) { return "String" == r(t) ? t.split("") : Object(t) } }, function(t, e) { var n = {}.toString;
            t.exports = function(t) { return n.call(t).slice(8, -1) } }, function(t, e, n) { var r = n(16),
                o = Math.min;
            t.exports = function(t) { return t > 0 ? o(r(t), 9007199254740991) : 0 } }, function(t, e, n) { var r = n(0),
                o = n(2),
                i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
            (t.exports = function(t, e) { return i[t] || (i[t] = void 0 !== e ? e : {}) })("versions", []).push({ version: r.version, mode: n(26) ? "pure" : "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" }) }, function(t, e) { t.exports = !0 }, function(t, e) { var n = 0,
                r = Math.random();
            t.exports = function(t) { return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36)) } }, function(t, e) { t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function(t, e, n) { var r = n(6).f,
                o = n(9),
                i = n(1)("toStringTag");
            t.exports = function(t, e, n) { t && !o(t = n ? t : t.prototype, i) && r(t, i, { configurable: !0, value: e }) } }, function(t, e, n) { t.exports = { default: n(32), __esModule: !0 } }, function(t, e, n) { "use strict";
            e.__esModule = !0; var r, o = (r = n(43)) && r.__esModule ? r : { default: r };
            e.default = function(t) { if (Array.isArray(t)) { for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e]; return n } return (0, o.default)(t) } }, function(t, e, n) { n(33), t.exports = n(0).Object.assign }, function(t, e, n) { var r = n(4);
            r(r.S + r.F, "Object", { assign: n(37) }) }, function(t, e) { t.exports = function(t) { if ("function" != typeof t) throw TypeError(t + " is not a function!"); return t } }, function(t, e, n) { t.exports = !n(3) && !n(8)((function() { return 7 != Object.defineProperty(n(20)("div"), "a", { get: function() { return 7 } }).a })) }, function(t, e, n) { var r = n(12);
            t.exports = function(t, e) { if (!r(t)) return t; var n, o; if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o; if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o; if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o; throw TypeError("Can't convert object to primitive value") } }, function(t, e, n) { "use strict"; var r = n(3),
                o = n(14),
                i = n(41),
                a = n(42),
                c = n(10),
                s = n(22),
                l = Object.assign;
            t.exports = !l || n(8)((function() { var t = {},
                    e = {},
                    n = Symbol(),
                    r = "abcdefghijklmnopqrst"; return t[n] = 7, r.split("").forEach((function(t) { e[t] = t })), 7 != l({}, t)[n] || Object.keys(l({}, e)).join("") != r })) ? function(t, e) { for (var n = c(t), l = arguments.length, u = 1, f = i.f, d = a.f; l > u;)
                    for (var p, h = s(arguments[u++]), M = f ? o(h).concat(f(h)) : o(h), b = M.length, m = 0; b > m;) p = M[m++], r && !d.call(h, p) || (n[p] = h[p]); return n } : l }, function(t, e, n) { var r = n(9),
                o = n(21),
                i = n(39)(!1),
                a = n(17)("IE_PROTO");
            t.exports = function(t, e) { var n, c = o(t),
                    s = 0,
                    l = []; for (n in c) n != a && r(c, n) && l.push(n); for (; e.length > s;) r(c, n = e[s++]) && (~i(l, n) || l.push(n)); return l } }, function(t, e, n) { var r = n(21),
                o = n(24),
                i = n(40);
            t.exports = function(t) { return function(e, n, a) { var c, s = r(e),
                        l = o(s.length),
                        u = i(a, l); if (t && n != n) { for (; l > u;)
                            if ((c = s[u++]) != c) return !0 } else
                        for (; l > u; u++)
                            if ((t || u in s) && s[u] === n) return t || u || 0; return !t && -1 } } }, function(t, e, n) { var r = n(16),
                o = Math.max,
                i = Math.min;
            t.exports = function(t, e) { return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e) } }, function(t, e) { e.f = Object.getOwnPropertySymbols }, function(t, e) { e.f = {}.propertyIsEnumerable }, function(t, e, n) { t.exports = { default: n(44), __esModule: !0 } }, function(t, e, n) { n(45), n(54), t.exports = n(0).Array.from }, function(t, e, n) { "use strict"; var r = n(46)(!0);
            n(47)(String, "String", (function(t) { this._t = String(t), this._i = 0 }), (function() { var t, e = this._t,
                    n = this._i; return n >= e.length ? { value: void 0, done: !0 } : (t = r(e, n), this._i += t.length, { value: t, done: !1 }) })) }, function(t, e, n) { var r = n(16),
                o = n(15);
            t.exports = function(t) { return function(e, n) { var i, a, c = String(o(e)),
                        s = r(n),
                        l = c.length; return s < 0 || s >= l ? t ? "" : void 0 : (i = c.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === l || (a = c.charCodeAt(s + 1)) < 56320 || a > 57343 ? t ? c.charAt(s) : i : t ? c.slice(s, s + 2) : a - 56320 + (i - 55296 << 10) + 65536 } } }, function(t, e, n) { "use strict"; var r = n(26),
                o = n(4),
                i = n(48),
                a = n(5),
                c = n(18),
                s = n(49),
                l = n(29),
                u = n(53),
                f = n(1)("iterator"),
                d = !([].keys && "next" in [].keys()),
                p = function() { return this };
            t.exports = function(t, e, n, h, M, b, m) { s(n, e, h); var v, g, A, y = function(t) { if (!d && t in x) return x[t]; switch (t) {
                            case "keys":
                            case "values":
                                return function() { return new n(this, t) } } return function() { return new n(this, t) } },
                    z = e + " Iterator",
                    _ = "values" == M,
                    O = !1,
                    x = t.prototype,
                    L = x[f] || x["@@iterator"] || M && x[M],
                    N = L || y(M),
                    w = M ? _ ? y("entries") : N : void 0,
                    T = "Array" == e && x.entries || L; if (T && (A = u(T.call(new t))) !== Object.prototype && A.next && (l(A, z, !0), r || "function" == typeof A[f] || a(A, f, p)), _ && L && "values" !== L.name && (O = !0, N = function() { return L.call(this) }), r && !m || !d && !O && x[f] || a(x, f, N), c[e] = N, c[z] = p, M)
                    if (v = { values: _ ? N : y("values"), keys: b ? N : y("keys"), entries: w }, m)
                        for (g in v) g in x || i(x, g, v[g]);
                    else o(o.P + o.F * (d || O), e, v);
                return v } }, function(t, e, n) { t.exports = n(5) }, function(t, e, n) { "use strict"; var r = n(50),
                o = n(13),
                i = n(29),
                a = {};
            n(5)(a, n(1)("iterator"), (function() { return this })), t.exports = function(t, e, n) { t.prototype = r(a, { next: o(1, n) }), i(t, e + " Iterator") } }, function(t, e, n) { var r = n(7),
                o = n(51),
                i = n(28),
                a = n(17)("IE_PROTO"),
                c = function() {},
                s = function() { var t, e = n(20)("iframe"),
                        r = i.length; for (e.style.display = "none", n(52).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), s = t.F; r--;) delete s.prototype[i[r]]; return s() };
            t.exports = Object.create || function(t, e) { var n; return null !== t ? (c.prototype = r(t), n = new c, c.prototype = null, n[a] = t) : n = s(), void 0 === e ? n : o(n, e) } }, function(t, e, n) { var r = n(6),
                o = n(7),
                i = n(14);
            t.exports = n(3) ? Object.defineProperties : function(t, e) { o(t); for (var n, a = i(e), c = a.length, s = 0; c > s;) r.f(t, n = a[s++], e[n]); return t } }, function(t, e, n) { var r = n(2).document;
            t.exports = r && r.documentElement }, function(t, e, n) { var r = n(9),
                o = n(10),
                i = n(17)("IE_PROTO"),
                a = Object.prototype;
            t.exports = Object.getPrototypeOf || function(t) { return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null } }, function(t, e, n) { "use strict"; var r = n(19),
                o = n(4),
                i = n(10),
                a = n(55),
                c = n(56),
                s = n(24),
                l = n(57),
                u = n(58);
            o(o.S + o.F * !n(60)((function(t) { Array.from(t) })), "Array", { from: function(t) { var e, n, o, f, d = i(t),
                        p = "function" == typeof this ? this : Array,
                        h = arguments.length,
                        M = h > 1 ? arguments[1] : void 0,
                        b = void 0 !== M,
                        m = 0,
                        v = u(d); if (b && (M = r(M, h > 2 ? arguments[2] : void 0, 2)), null == v || p == Array && c(v))
                        for (n = new p(e = s(d.length)); e > m; m++) l(n, m, b ? M(d[m], m) : d[m]);
                    else
                        for (f = v.call(d), n = new p; !(o = f.next()).done; m++) l(n, m, b ? a(f, M, [o.value, m], !0) : o.value); return n.length = m, n } }) }, function(t, e, n) { var r = n(7);
            t.exports = function(t, e, n, o) { try { return o ? e(r(n)[0], n[1]) : e(n) } catch (e) { var i = t.return; throw void 0 !== i && r(i.call(t)), e } } }, function(t, e, n) { var r = n(18),
                o = n(1)("iterator"),
                i = Array.prototype;
            t.exports = function(t) { return void 0 !== t && (r.Array === t || i[o] === t) } }, function(t, e, n) { "use strict"; var r = n(6),
                o = n(13);
            t.exports = function(t, e, n) { e in t ? r.f(t, e, o(0, n)) : t[e] = n } }, function(t, e, n) { var r = n(59),
                o = n(1)("iterator"),
                i = n(18);
            t.exports = n(0).getIteratorMethod = function(t) { if (null != t) return t[o] || t["@@iterator"] || i[r(t)] } }, function(t, e, n) { var r = n(23),
                o = n(1)("toStringTag"),
                i = "Arguments" == r(function() { return arguments }());
            t.exports = function(t) { var e, n, a; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) { try { return t[e] } catch (t) {} }(e = Object(t), o)) ? n : i ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a } }, function(t, e, n) { var r = n(1)("iterator"),
                o = !1; try { var i = [7][r]();
                i.return = function() { o = !0 }, Array.from(i, (function() { throw 2 })) } catch (t) {}
            t.exports = function(t, e) { if (!e && !o) return !1; var n = !1; try { var i = [7],
                        a = i[r]();
                    a.next = function() { return { done: n = !0 } }, i[r] = function() { return a }, t(i) } catch (t) {} return n } }, function(t, e, n) { n(62), t.exports = n(0).Object.keys }, function(t, e, n) { var r = n(10),
                o = n(14);
            n(63)("keys", (function() { return function(t) { return o(r(t)) } })) }, function(t, e, n) { var r = n(4),
                o = n(0),
                i = n(8);
            t.exports = function(t, e) { var n = (o.Object || {})[t] || Object[t],
                    a = {};
                a[t] = e(n), r(r.S + r.F * i((function() { n(1) })), "Object", a) } }, function(t, e, n) { var r = n(65); "string" == typeof r && (r = [
                [t.i, r, ""]
            ]), r.locals && (t.exports = r.locals), (0, n(68).default)("d82ef3d4", r, !0, {}) }, function(t, e, n) {
            (t.exports = n(66)(!1)).push([t.i, '.vjs-checkbox{position:absolute;left:-30px;color:#1f2d3d;user-select:none}.vjs-checkbox.is-checked .vjs-checkbox__inner{background-color:#1890ff;border-color:#0076e4}.vjs-checkbox.is-checked .vjs-checkbox__inner:after{transform:rotate(45deg) scaleY(1)}.vjs-checkbox .vjs-checkbox__inner{display:inline-block;position:relative;border:1px solid #bfcbd9;border-radius:2px;vertical-align:middle;box-sizing:border-box;width:16px;height:16px;background-color:#fff;z-index:1;cursor:pointer;transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46)}.vjs-checkbox .vjs-checkbox__inner:after{box-sizing:content-box;content:"";border:2px solid #fff;border-left:0;border-top:0;height:8px;left:4px;position:absolute;top:1px;transform:rotate(45deg) scaleY(0);width:4px;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transform-origin:center}.vjs-checkbox .vjs-checkbox__original{opacity:0;outline:none;position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;margin:0}.vjs-radio{position:absolute;left:-30px;color:#1f2d3d;user-select:none}.vjs-radio.is-checked .vjs-radio__inner{background-color:#1890ff;border-color:#0076e4}.vjs-radio.is-checked .vjs-radio__inner:after{transform:translate(-50%,-50%) scale(1)}.vjs-radio .vjs-radio__inner{border:1px solid #bfcbd9;border-radius:100%;width:16px;height:16px;vertical-align:middle;background-color:#fff;position:relative;cursor:pointer;display:inline-block;box-sizing:border-box}.vjs-radio .vjs-radio__inner:after{width:4px;height:4px;border-radius:100%;background-color:#fff;content:"";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) scale(0);transition:transform .15s ease-in}.vjs-radio .vjs-radio__original{opacity:0;outline:none;position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;margin:0}.vjs-tree{font-family:Monaco,Menlo,Consolas,Bitstream Vera Sans Mono,monospace;font-size:14px}.vjs-tree.is-root{position:relative}.vjs-tree.is-root.has-selectable-control{margin-left:30px}.vjs-tree.is-mouseover{background-color:#e6f7ff}.vjs-tree.is-highlight-selected{background-color:#ccefff}.vjs-tree .vjs-tree__content{padding-left:1em}.vjs-tree .vjs-tree__content.has-line{border-left:1px dotted #bfcbd9}.vjs-tree .vjs-tree__brackets{cursor:pointer}.vjs-tree .vjs-tree__brackets:hover{color:#1890ff}.vjs-tree .vjs-comment{color:#bfcbd9}.vjs-tree .vjs-value__null{color:#ff4949}.vjs-tree .vjs-value__boolean,.vjs-tree .vjs-value__number{color:#1d8ce0}.vjs-tree .vjs-value__string{color:#13ce66}', ""]) }, function(t, e) { t.exports = function(t) { var e = []; return e.toString = function() { return this.map((function(e) { var n = function(t, e) { var n, r = t[1] || "",
                                o = t[3]; if (!o) return r; if (e && "function" == typeof btoa) { var i = (n = o, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                                    a = o.sources.map((function(t) { return "/*# sourceURL=" + o.sourceRoot + t + " */" })); return [r].concat(a).concat([i]).join("\n") } return [r].join("\n") }(e, t); return e[2] ? "@media " + e[2] + "{" + n + "}" : n })).join("") }, e.i = function(t, n) { "string" == typeof t && (t = [
                        [null, t, ""]
                    ]); for (var r = {}, o = 0; o < this.length; o++) { var i = this[o][0]; "number" == typeof i && (r[i] = !0) } for (o = 0; o < t.length; o++) { var a = t[o]; "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a)) } }, e } }, function(t, e, n) { "use strict";
            n.r(e); var r = n(30),
                o = n.n(r),
                i = n(31),
                a = n.n(i),
                c = n(11),
                s = n.n(c);

            function l(t) { return Object.prototype.toString.call(t).slice(8, -1).toLowerCase() }

            function u(t, e, n, r, o, i, a, c) { var s = typeof(t = t || {}).default; "object" !== s && "function" !== s || (t = t.default); var l, u = "function" == typeof t ? t.options : t; if (e && (u.render = e, u.staticRenderFns = n, u._compiled = !0), r && (u.functional = !0), i && (u._scopeId = i), a ? (l = function(t) {
                        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), o && o.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a) }, u._ssrRegister = l) : o && (l = c ? function() { o.call(this, this.$root.$options.shadowRoot) } : o), l)
                    if (u.functional) { u._injectStyles = l; var f = u.render;
                        u.render = function(t, e) { return l.call(e), f(t, e) } } else { var d = u.beforeCreate;
                        u.beforeCreate = d ? [].concat(d, l) : [l] }
                return { exports: t, options: u } } var f = u({ props: { showDoubleQuotes: Boolean, parentData: { type: [String, Number, Boolean, Array, Object], default: null }, data: { type: [String, Number, Boolean], default: "" }, showComma: Boolean, currentKey: { type: [Number, String], default: "" }, customValueFormatter: { type: Function, default: null } }, computed: { valueClass: function() { return "vjs-value vjs-value__" + this.dataType }, dataType: function() { return l(this.data) } }, methods: { defaultFormatter: function(t) { var e = t + ""; return "string" === this.dataType && (e = '"' + e + '"'), this.showComma && (e += ","), e }, customFormatter: function(t) { return this.customValueFormatter ? this.customValueFormatter(t, this.currentKey, this.parentData, this.defaultFormatter(t)) : this.defaultFormatter(t) } } }, (function() { var t = this,
                        e = t.$createElement,
                        n = t._self._c || e; return n("div", [t._t("default"), t._v(" "), t.customValueFormatter ? n("span", { class: t.valueClass, domProps: { innerHTML: t._s(t.customFormatter(t.data)) } }) : n("span", { class: t.valueClass }, [t._v(t._s(t.defaultFormatter(t.data)))])], 2) }), [], !1, null, null, null).exports,
                d = u({ props: { value: { type: Boolean, default: !1 } }, data: function() { return { focus: !1 } }, computed: { model: { get: function() { return this.value }, set: function(t) { this.$emit("input", t) } } } }, (function() { var t = this,
                        e = t.$createElement,
                        n = t._self._c || e; return n("label", { class: ["vjs-checkbox", t.value ? "is-checked" : ""], on: { click: function(t) { t.stopPropagation() } } }, [n("span", { staticClass: "vjs-checkbox__inner" }), t._v(" "), n("input", { directives: [{ name: "model", rawName: "v-model", value: t.model, expression: "model" }], staticClass: "vjs-checkbox__original", attrs: { type: "checkbox" }, domProps: { checked: Array.isArray(t.model) ? t._i(t.model, null) > -1 : t.model }, on: { change: [function(e) { var n = t.model,
                                    r = e.target,
                                    o = !!r.checked; if (Array.isArray(n)) { var i = t._i(n, null);
                                    r.checked ? i < 0 && (t.model = n.concat([null])) : i > -1 && (t.model = n.slice(0, i).concat(n.slice(i + 1))) } else t.model = o }, function(e) { return t.$emit("change", t.model) }], focus: function(e) { t.focus = !0 }, blur: function(e) { t.focus = !1 } } })]) }), [], !1, null, null, null).exports,
                p = u({ props: { path: { type: String, default: "" }, value: { type: String, default: "" } }, data: function() { return { focus: !1 } }, computed: { currentPath: function() { return this.path }, model: { get: function() { return this.value }, set: function(t) { this.$emit("input", t) } } }, methods: { change: function() { this.$emit("change", this.model) } } }, (function() { var t = this,
                        e = t.$createElement,
                        n = t._self._c || e; return n("label", { class: ["vjs-radio", t.model === t.currentPath ? "is-checked" : ""], on: { click: function(t) { t.stopPropagation() } } }, [n("span", { staticClass: "vjs-radio__inner" }), t._v(" "), n("input", { directives: [{ name: "model", rawName: "v-model", value: t.model, expression: "model" }], staticClass: "vjs-radio__original", attrs: { type: "radio" }, domProps: { value: t.currentPath, checked: t._q(t.model, t.currentPath) }, on: { change: [function(e) { t.model = t.currentPath }, t.change], focus: function(e) { t.focus = !0 }, blur: function(e) { t.focus = !1 } } })]) }), [], !1, null, null, null).exports,
                h = { props: { visible: { required: !0, type: Boolean }, data: { required: !0 }, showComma: Boolean, collapsedOnClickBrackets: Boolean }, computed: { dataVisiable: { get: function() { return this.visible }, set: function(t) { this.collapsedOnClickBrackets && this.$emit("update:visible", t) } } }, methods: { toggleBrackets: function() { this.dataVisiable = !this.dataVisiable }, bracketsFormatter: function(t) { return this.showComma ? t + "," : t } } },
                M = u({ mixins: [h], props: { showLength: Boolean }, methods: { closedBracketsGenerator: function(t) { var e = Array.isArray(t) ? "[...]" : "{...}"; return this.bracketsFormatter(e) }, lengthGenerator: function(t) { return " // " + (Array.isArray(t) ? t.length + " items" : s()(t).length + " keys") } } }, (function() { var t = this,
                        e = t.$createElement,
                        n = t._self._c || e; return n("div", [t._t("default"), t._v(" "), n("span", { directives: [{ name: "show", rawName: "v-show", value: t.dataVisiable, expression: "dataVisiable" }], staticClass: "vjs-tree__brackets", on: { click: function(e) { return e.stopPropagation(), t.toggleBrackets(e) } } }, [t._v("\n    " + t._s(Array.isArray(t.data) ? "[" : "{") + "\n  ")]), t._v(" "), n("span", { directives: [{ name: "show", rawName: "v-show", value: !t.dataVisiable, expression: "!dataVisiable" }] }, [n("span", { staticClass: "vjs-tree__brackets", on: { click: function(e) { return e.stopPropagation(), t.toggleBrackets(e) } } }, [t._v("\n      " + t._s(t.closedBracketsGenerator(t.data)) + "\n    ")]), t._v(" "), t.showLength ? n("span", { staticClass: "vjs-comment" }, [t._v("\n      " + t._s(t.lengthGenerator(t.data)) + "\n    ")]) : t._e()])], 2) }), [], !1, null, null, null).exports,
                b = u({ mixins: [h] }, (function() { var t = this,
                        e = t.$createElement,
                        n = t._self._c || e; return n("div", { directives: [{ name: "show", rawName: "v-show", value: t.dataVisiable, expression: "dataVisiable" }] }, [n("span", { staticClass: "vjs-tree__brackets", on: { click: function(e) { return e.stopPropagation(), t.toggleBrackets(e) } } }, [t._v("\n    " + t._s(t.bracketsFormatter(Array.isArray(t.data) ? "]" : "}")) + "\n  ")])]) }), [], !1, null, null, null),
                m = u({ name: "VueJsonPretty", components: { SimpleText: f, VueCheckbox: d, VueRadio: p, BracketsLeft: M, BracketsRight: b.exports }, props: { data: { type: [String, Number, Boolean, Array, Object], default: null }, deep: { type: Number, default: 1 / 0 }, showLength: { type: Boolean, default: !1 }, showDoubleQuotes: { type: Boolean, default: !0 }, path: { type: String, default: "root" }, selectableType: { type: String, default: "" }, showSelectController: { type: Boolean, default: !1 }, showLine: { type: Boolean, default: !0 }, selectOnClickNode: { type: Boolean, default: !0 }, value: { type: [Array, String], default: function() { return "" } }, pathSelectable: { type: Function, default: function() { return !0 } }, highlightMouseoverNode: { type: Boolean, default: !1 }, highlightSelectedNode: { type: Boolean, default: !0 }, collapsedOnClickBrackets: { type: Boolean, default: !0 }, customValueFormatter: { type: Function, default: null }, parentData: { type: [String, Number, Boolean, Array, Object], default: null }, currentDeep: { type: Number, default: 1 }, currentKey: { type: [Number, String], default: "" } }, data: function() { return { visible: this.currentDeep <= this.deep, isMouseover: !1, currentCheckboxVal: !!Array.isArray(this.value) && this.value.includes(this.path) } }, computed: { model: { get: function() { var t = "multiple" === this.selectableType ? [] : "single" === this.selectableType ? "" : null; return this.value || t }, set: function(t) { this.$emit("input", t) } }, lastKey: function() { if (Array.isArray(this.parentData)) return this.parentData.length - 1; if (this.isObject(this.parentData)) { var t = s()(this.parentData); return t[t.length - 1] } return "" }, notLastKey: function() { return this.currentKey !== this.lastKey }, selectable: function() { return this.pathSelectable(this.path, this.data) && (this.isMultiple || this.isSingle) }, isMultiple: function() { return "multiple" === this.selectableType }, isSingle: function() { return "single" === this.selectableType }, isSelected: function() { return this.isMultiple ? this.model.includes(this.path) : !!this.isSingle && this.model === this.path }, propsError: function() { return !this.selectableType || this.selectOnClickNode || this.showSelectController ? "" : "When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail." } }, watch: { deep: function(t) { this.visible = this.currentDeep <= t }, propsError: { handler: function(t) { if (t) throw new Error("[vue-json-pretty] " + t) }, immediate: !0 } }, methods: { handleValueChange: function(t) { var e = this; if (!this.isMultiple || "checkbox" !== t && "tree" !== t) { if (this.isSingle && ("radio" === t || "tree" === t) && this.model !== this.path) { var n = this.model,
                                        r = this.path;
                                    this.model = r, this.$emit("change", r, n) } } else { var o = this.model.findIndex((function(t) { return t === e.path })),
                                    i = [].concat(a()(this.model)); - 1 !== o ? this.model.splice(o, 1) : this.model.push(this.path), "checkbox" !== t && (this.currentCheckboxVal = !this.currentCheckboxVal), this.$emit("change", this.model, i) } }, handleClick: function(t) { t._uid && t._uid !== this._uid || (t._uid = this._uid, this.$emit("click", this.path, this.data), this.selectable && this.selectOnClickNode && this.handleValueChange("tree")) }, handleItemClick: function(t, e) { this.$emit("click", t, e) }, handleItemChange: function(t, e) { this.selectable && this.$emit("change", t, e) }, handleMouseover: function() { this.highlightMouseoverNode && (this.selectable || "" === this.selectableType) && (this.isMouseover = !0) }, handleMouseout: function() { this.highlightMouseoverNode && (this.selectable || "" === this.selectableType) && (this.isMouseover = !1) }, isObject: function(t) { return "object" === l(t) }, keyFormatter: function(t) { return this.showDoubleQuotes ? '"' + t + '"' : t } }, errorCaptured: function() { return !1 } }, (function() { var t = this,
                        e = t.$createElement,
                        n = t._self._c || e; return n("div", { class: { "vjs-tree": !0, "has-selectable-control": t.isMultiple || t.showSelectController, "is-root": 1 === t.currentDeep, "is-selectable": t.selectable, "is-selected": t.isSelected, "is-highlight-selected": t.isSelected && t.highlightSelectedNode, "is-mouseover": t.isMouseover }, on: { click: t.handleClick, mouseover: function(e) { return e.stopPropagation(), t.handleMouseover(e) }, mouseout: function(e) { return e.stopPropagation(), t.handleMouseout(e) } } }, [t.showSelectController && t.selectable ? [t.isMultiple ? n("vue-checkbox", { on: { change: function(e) { return t.handleValueChange("checkbox") } }, model: { value: t.currentCheckboxVal, callback: function(e) { t.currentCheckboxVal = e }, expression: "currentCheckboxVal" } }) : t.isSingle ? n("vue-radio", { attrs: { path: t.path }, on: { change: function(e) { return t.handleValueChange("radio") } }, model: { value: t.model, callback: function(e) { t.model = e }, expression: "model" } }) : t._e()] : t._e(), t._v(" "), Array.isArray(t.data) || t.isObject(t.data) ? [n("brackets-left", { attrs: { visible: t.visible, data: t.data, "show-length": t.showLength, "collapsed-on-click-brackets": t.collapsedOnClickBrackets, "show-comma": t.notLastKey }, on: { "update:visible": function(e) { t.visible = e } } }, [t.currentDeep > 1 && !Array.isArray(t.parentData) ? n("span", { staticClass: "vjs-key" }, [t._v("\n        " + t._s(t.keyFormatter(t.currentKey)) + ":\n      ")]) : t._e()]), t._v(" "), t._l(t.data, (function(e, r) { return n("div", { directives: [{ name: "show", rawName: "v-show", value: t.visible, expression: "visible" }], key: r, class: { "vjs-tree__content": !0, "has-line": t.showLine } }, [n("vue-json-pretty", { attrs: { "parent-data": t.data, data: e, deep: t.deep, "show-length": t.showLength, "show-double-quotes": t.showDoubleQuotes, "show-line": t.showLine, "highlight-mouseover-node": t.highlightMouseoverNode, "highlight-selected-node": t.highlightSelectedNode, path: t.path + (Array.isArray(t.data) ? "[" + r + "]" : "." + r), "path-selectable": t.pathSelectable, "selectable-type": t.selectableType, "show-select-controller": t.showSelectController, "select-on-click-node": t.selectOnClickNode, "collapsed-on-click-brackets": t.collapsedOnClickBrackets, "current-key": r, "current-deep": t.currentDeep + 1, "custom-value-formatter": t.customValueFormatter }, on: { click: t.handleItemClick, change: t.handleItemChange }, model: { value: t.model, callback: function(e) { t.model = e }, expression: "model" } })], 1) })), t._v(" "), n("brackets-right", { attrs: { visible: t.visible, data: t.data, "collapsed-on-click-brackets": t.collapsedOnClickBrackets, "show-comma": t.notLastKey }, on: { "update:visible": function(e) { t.visible = e } } })] : n("simple-text", { attrs: { "custom-value-formatter": t.customValueFormatter, "show-double-quotes": t.showDoubleQuotes, "show-comma": t.notLastKey, "parent-data": t.parentData, data: t.data, "current-key": t.currentKey } }, [t.parentData && t.currentKey && !Array.isArray(t.parentData) ? n("span", { staticClass: "vjs-key" }, [t._v("\n      " + t._s(t.keyFormatter(t.currentKey)) + ":\n    ")]) : t._e()])], 2) }), [], !1, null, null, null).exports;
            n(64), e.default = o()({}, m, { version: "1.6.7" }) }, function(t, e, n) { "use strict";

            function r(t, e) { for (var n = [], r = {}, o = 0; o < e.length; o++) { var i = e[o],
                        a = i[0],
                        c = { id: t + ":" + o, css: i[1], media: i[2], sourceMap: i[3] };
                    r[a] ? r[a].parts.push(c) : n.push(r[a] = { id: a, parts: [c] }) } return n }
            n.r(e), n.d(e, "default", (function() { return p })); var o = "undefined" != typeof document; if ("undefined" != typeof DEBUG && DEBUG && !o) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."); var i = {},
                a = o && (document.head || document.getElementsByTagName("head")[0]),
                c = null,
                s = 0,
                l = !1,
                u = function() {},
                f = null,
                d = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

            function p(t, e, n, o) { l = n, f = o || {}; var a = r(t, e); return h(a),
                    function(e) { for (var n = [], o = 0; o < a.length; o++) { var c = a[o];
                            (s = i[c.id]).refs--, n.push(s) } for (e ? h(a = r(t, e)) : a = [], o = 0; o < n.length; o++) { var s; if (0 === (s = n[o]).refs) { for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                                delete i[s.id] } } } }

            function h(t) { for (var e = 0; e < t.length; e++) { var n = t[e],
                        r = i[n.id]; if (r) { r.refs++; for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]); for (; o < n.parts.length; o++) r.parts.push(b(n.parts[o]));
                        r.parts.length > n.parts.length && (r.parts.length = n.parts.length) } else { var a = []; for (o = 0; o < n.parts.length; o++) a.push(b(n.parts[o]));
                        i[n.id] = { id: n.id, refs: 1, parts: a } } } }

            function M() { var t = document.createElement("style"); return t.type = "text/css", a.appendChild(t), t }

            function b(t) { var e, n, r = document.querySelector('style[data-vue-ssr-id~="' + t.id + '"]'); if (r) { if (l) return u;
                    r.parentNode.removeChild(r) } if (d) { var o = s++;
                    r = c || (c = M()), e = g.bind(null, r, o, !1), n = g.bind(null, r, o, !0) } else r = M(), e = A.bind(null, r), n = function() { r.parentNode.removeChild(r) }; return e(t),
                    function(r) { if (r) { if (r.css === t.css && r.media === t.media && r.sourceMap === t.sourceMap) return;
                            e(t = r) } else n() } } var m, v = (m = [], function(t, e) { return m[t] = e, m.filter(Boolean).join("\n") });

            function g(t, e, n, r) { var o = n ? "" : r.css; if (t.styleSheet) t.styleSheet.cssText = v(e, o);
                else { var i = document.createTextNode(o),
                        a = t.childNodes;
                    a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i) } }

            function A(t, e) { var n = e.css,
                    r = e.media,
                    o = e.sourceMap; if (r && t.setAttribute("media", r), f.ssrId && t.setAttribute("data-vue-ssr-id", e.id), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), t.styleSheet) t.styleSheet.cssText = n;
                else { for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n)) } } }]) }, "2SVd": function(t, e, n) { "use strict";
        t.exports = function(t) { return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t) } }, "2zUT": function(t, e, n) { "use strict";
        n.r(e); var r = n("vDqi"),
            o = n.n(r),
            i = n("wd/R"),
            a = n.n(i);

        function c(t) { return function(t) { if (Array.isArray(t)) return u(t) }(t) || function(t) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || l(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

        function s(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                    r = !0,
                    o = !1,
                    i = void 0; try { for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (t) { o = !0, i = t } finally { try { r || null == c.return || c.return() } finally { if (o) throw i } } return n }(t, e) || l(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

        function l(t, e) { if (t) { if ("string" == typeof t) return u(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0 } }

        function u(t, e) {
            (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var f = { mixins: [{ mixins: [n("snLp").a], methods: { formatMetricDate: function(t) { return a.a.utc(1e3 * t, "x").local().format("LT").replace(/:[0-9]{2}/, "") }, formatTooltipTitle: function(t) { var e = s(t, 1)[0].label; return e + " - " + a()(e, "LT").add(1, "hours").local(!0).format("LT").replace(/:[0-9]{2}/, "") }, suggestedMax: function(t) { var e = t.map((function(t) { return t.value })); return Math.max(Math.max.apply(Math, c(e)), 1) } } }], data: function() { return { troubleshooting: !1, metrics: { processed: {}, failed: {} } } }, mounted: function() { var t = this; return o.a.get("/vapor-ui/api/jobs/metrics").then((function(e) { var n = e.data;
                        t.metrics = n })).catch((function() { throw t.troubleshooting = !0, "Server error." })) } },
            d = n("KHd+"),
            p = Object(d.a)(f, (function() { var t = this,
                    e = t.$createElement,
                    n = t._self._c || e; return n("main", { staticClass: "flex-1 relative pb-8 z-0 overflow-y-auto" }, [t.troubleshooting ? n("div", { staticClass: "m-8" }, [n("div", { staticClass: "px-6 py-4 bg-white shadow-md rounded-lg" }, [n("div", { staticClass: "flex items-center" }, [n("icon-exclamation", { attrs: { size: 6 } }), t._v(" "), n("div", { staticClass: "ml-3 font-semibold text-sm text-gray-600 uppercase tracking-wider" }, [t._v("Server Error")])], 1), t._v(" "), t._m(0)])]) : t._e(), t._v(" "), t.troubleshooting ? t._e() : n("div", { staticClass: "m-8" }, [n("div", { staticClass: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" }, [n("h2", { staticClass: "text-lg leading-6 font-medium text-cool-gray-900" }, [t._v("Overview")]), t._v(" "), n("div", { staticClass: "mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow md:grid-cols-3" }, [n("metric", { attrs: { title: "Processed Jobs Past Hour", value: t.metrics.processed.pastHour, average: t.metrics.processed.averagePast24Hours, description: "Processed jobs includes successfully executed jobs, failed jobs, and retry attempts." } }), t._v(" "), n("metric", { attrs: { title: "Failed Jobs Past Hour", value: t.metrics.failed.pastHour, average: t.metrics.failed.averagePast24Hours, increaseColor: "red", decreaseColor: "green" } }), t._v(" "), n("metric", { attrs: { title: "Pending Jobs", value: t.metrics.pending, description: "Pending jobs may not be accurate, and if often subject to at least a 1-minute delay." } })], 1)])]), t._v(" "), t.troubleshooting ? t._e() : n("div", { staticClass: "m-8" }, [n("div", { staticClass: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" }, [n("h2", { staticClass: "text-lg leading-6 font-medium text-cool-gray-900" }, [t._v("Processed Jobs")]), t._v(" "), n("div", { staticClass: "mt-5 rounded-lg bg-white overflow-hidden shadow" }, [n("div", { staticClass: "px-6 pt-6 pb-4 bg-white shadow-md rounded-lg" }, [void 0 === t.metrics.processed.timeseries ? n("div", { staticStyle: { height: "200px" } }, [n("loader", { staticClass: "text-gray-500" })], 1) : n("bar-chart", { attrs: { label: "Jobs", height: "200px", data: t.metrics.processed.timeseries.map((function(e) { var n = e.timestamp,
                                r = e.value; return { label: t.formatMetricDate(n), value: r } })), "format-tooltip-title": t.formatTooltipTitle, "suggested-max": t.suggestedMax(t.metrics.processed.timeseries) } })], 1)])])]), t._v(" "), t.troubleshooting ? t._e() : n("div", { staticClass: "m-8" }, [n("div", { staticClass: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" }, [n("h2", { staticClass: "text-lg leading-6 font-medium text-cool-gray-900" }, [t._v("Failed Jobs")]), t._v(" "), n("div", { staticClass: "mt-5 rounded-lg bg-white overflow-hidden shadow" }, [n("div", { staticClass: "px-6 pt-6 pb-4 bg-white shadow-md rounded-lg" }, [void 0 === t.metrics.failed.timeseries ? n("div", { staticStyle: { height: "200px" } }, [n("loader", { staticClass: "text-gray-500" })], 1) : n("bar-chart", { attrs: { label: "Jobs", height: "200px", data: t.metrics.failed.timeseries.map((function(e) { var n = e.timestamp,
                                r = e.value; return { label: t.formatMetricDate(n), value: r } })), "format-tooltip-title": t.formatTooltipTitle, "suggested-max": t.suggestedMax(t.metrics.failed.timeseries) } })], 1)])])])]) }), [function() { var t = this.$createElement,
                    e = this._self._c || t; return e("div", { staticClass: "mt-3 text-sm text-gray-700" }, [e("p", [this._v("It looks like there was an error. Please check your application logs.")])]) }], !1, null, null, null);
        e.default = p.exports }, "3cCS": function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [{ methods: { jobColor: function(t) { return "red" } } }] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this,
                    e = t.$createElement,
                    n = t._self._c || e; return n("search", { scopedSlots: t._u([{ key: "filters", fn: function(t) { t.filters, t.loadEntries } }, { key: "row", fn: function(e) { var r = e.entry; return [n("td", { staticClass: "max-w-0 w-full px-6 py-4 whitespace-no-wrap text-sm leading-5 text-cool-gray-900" }, [n("div", { staticClass: "ml-4" }, [n("div", { staticClass: "text-sm leading-5 font-medium text-gray-900 truncate" }, [n("p", { staticClass: "truncate" }, [t._v("\n                        " + t._s(r.message) + "\n                    ")])]), t._v(" "), r.exception ? n("div", { staticClass: "text-sm leading-5 text-gray-500 truncate" }, [t._v("\n                    " + t._s(r.exception) + "\n                ")]) : t._e()])]), t._v(" "), n("td", { staticClass: "px-6 py-4 whitespace-no-wrap border-b border-gray-200" }, [n("span", { class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-" + t.jobColor(r.content.payload.displayName) + "-100 text-" + t.jobColor(r.content.payload.displayName) + "-800" }, [t._v("\n                " + t._s(r.content.payload.displayName) + "\n            ")])]), t._v(" "), n("td", { staticClass: "px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500" }, [t._v("\n            " + t._s(t.moment().utc(r.timestamp, "x").local().format("YYYY-MM-DD LTS")) + "\n        ")]), t._v(" "), n("td", { staticClass: "px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium" }, [n("div", { staticClass: "relative flex justify-end items-center" }, [n("router-link", { staticClass: "w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150", attrs: { to: { name: "jobs-show", params: { id: r.id, group: r.group }, query: r.filters }, tag: "button", href: "#" } }, [n("icon-eye", { staticClass: "mr-3 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500", attrs: { size: "5" } })], 1)], 1)])] } }]) }, [t._v(" "), n("template", { slot: "troubleshooting" }, [n("p", [t._v("It looks like there was an error. Please check your application logs.")]), t._v(" "), n("p", { staticClass: "mt-2" }, [t._v('\n            This error may occur if you haven\'t properly configured "failed jobs" in your application.\n        ')])])], 2) }), [], !1, null, null, null);
        e.default = i.exports }, "5fE9": function(t, e, n) { "use strict";
        n.r(e); var r = n("MO+k"),
            o = n.n(r),
            i = { computed: { chartLabels: function() { return this.data.map((function(t) { return t.label })) }, chartData: function() { return this.data.map((function(t) { return t.value })) } }, mounted: function() { o.a.defaults.global.defaultFontFamily = "Poppins, sans-serif", new o.a(this.$refs.canvas, { type: "bar", data: { labels: this.chartLabels, datasets: [{ steppedLine: "after", pointBorderColor: "rgba(0, 0, 0, 0)", pointBackgroundColor: "rgba(0, 0, 0, 0)", label: this.label, data: this.chartData, backgroundColor: "hsla(265, 86%, 86%, 0.4)", borderColor: "hsla(260, 73%, 70%, 0.4)", borderWidth: 1, lineTension: .2 }] }, options: { maintainAspectRatio: !1, legend: { display: !1 }, tooltips: { displayColors: !1, callbacks: { title: this.formatTooltipTitle } }, scales: { yAxes: [{ gridLines: { color: "rgba(0, 0, 0, .05)", zeroLineColor: "rgba(0, 0, 0, 0)", drawBorder: !1, drawTicks: !1, display: !0 }, ticks: { beginAtZero: !0, display: !0, suggestedMax: this.suggestedMax, padding: 15 } }], xAxes: [{ barThickness: "flex", barPercentage: 1, categoryPercentage: .9, gridLines: { drawBorder: !1, display: !1, drawTicks: !1, offsetGridLines: !0 }, ticks: { display: !0, maxTicksLimit: 10, maxRotation: 0, padding: 10 } }] } } }) }, props: ["label", "data", "height", "formatTooltipTitle", "suggestedMax"] },
            a = n("KHd+"),
            c = Object(a.a)(i, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("div", { staticClass: "relative", style: { height: this.height } }, [e("canvas", { ref: "canvas" })]) }), [], !1, null, null, null);
        e.default = c.exports }, "5oMp": function(t, e, n) { "use strict";
        t.exports = function(t, e) { return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t } }, "8L3F": function(t, e, n) { "use strict";
        n.r(e),
            function(t) { var n = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
                    r = function() { for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
                            if (n && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
                        return 0 }(); var o = n && window.Promise ? function(t) { var e = !1; return function() { e || (e = !0, window.Promise.resolve().then((function() { e = !1, t() }))) } } : function(t) { var e = !1; return function() { e || (e = !0, setTimeout((function() { e = !1, t() }), r)) } };

                function i(t) { return t && "[object Function]" === {}.toString.call(t) }

                function a(t, e) { if (1 !== t.nodeType) return []; var n = t.ownerDocument.defaultView.getComputedStyle(t, null); return e ? n[e] : n }

                function c(t) { return "HTML" === t.nodeName ? t : t.parentNode || t.host }

                function s(t) { if (!t) return document.body; switch (t.nodeName) {
                        case "HTML":
                        case "BODY":
                            return t.ownerDocument.body;
                        case "#document":
                            return t.body } var e = a(t),
                        n = e.overflow,
                        r = e.overflowX,
                        o = e.overflowY; return /(auto|scroll|overlay)/.test(n + o + r) ? t : s(c(t)) }

                function l(t) { return t && t.referenceNode ? t.referenceNode : t } var u = n && !(!window.MSInputMethodContext || !document.documentMode),
                    f = n && /MSIE 10/.test(navigator.userAgent);

                function d(t) { return 11 === t ? u : 10 === t ? f : u || f }

                function p(t) { if (!t) return document.documentElement; for (var e = d(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent; var r = n && n.nodeName; return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === a(n, "position") ? p(n) : n : t ? t.ownerDocument.documentElement : document.documentElement }

                function h(t) { return null !== t.parentNode ? h(t.parentNode) : t }

                function M(t, e) { if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement; var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
                        r = n ? t : e,
                        o = n ? e : t,
                        i = document.createRange();
                    i.setStart(r, 0), i.setEnd(o, 0); var a, c, s = i.commonAncestorContainer; if (t !== s && e !== s || r.contains(o)) return "BODY" === (c = (a = s).nodeName) || "HTML" !== c && p(a.firstElementChild) !== a ? p(s) : s; var l = h(t); return l.host ? M(l.host, e) : M(t, h(e).host) }

                function b(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                        n = "top" === e ? "scrollTop" : "scrollLeft",
                        r = t.nodeName; if ("BODY" === r || "HTML" === r) { var o = t.ownerDocument.documentElement,
                            i = t.ownerDocument.scrollingElement || o; return i[n] } return t[n] }

                function m(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = b(e, "top"),
                        o = b(e, "left"),
                        i = n ? -1 : 1; return t.top += r * i, t.bottom += r * i, t.left += o * i, t.right += o * i, t }

                function v(t, e) { var n = "x" === e ? "Left" : "Top",
                        r = "Left" === n ? "Right" : "Bottom"; return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + r + "Width"]) }

                function g(t, e, n, r) { return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], d(10) ? parseInt(n["offset" + t]) + parseInt(r["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0) }

                function A(t) { var e = t.body,
                        n = t.documentElement,
                        r = d(10) && getComputedStyle(n); return { height: g("Height", e, n, r), width: g("Width", e, n, r) } } var y = function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") },
                    z = function() {
                        function t(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e } }(),
                    _ = function(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t },
                    O = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t };

                function x(t) { return O({}, t, { right: t.left + t.width, bottom: t.top + t.height }) }

                function L(t) { var e = {}; try { if (d(10)) { e = t.getBoundingClientRect(); var n = b(t, "top"),
                                r = b(t, "left");
                            e.top += n, e.left += r, e.bottom += n, e.right += r } else e = t.getBoundingClientRect() } catch (t) {} var o = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
                        i = "HTML" === t.nodeName ? A(t.ownerDocument) : {},
                        c = i.width || t.clientWidth || o.width,
                        s = i.height || t.clientHeight || o.height,
                        l = t.offsetWidth - c,
                        u = t.offsetHeight - s; if (l || u) { var f = a(t);
                        l -= v(f, "x"), u -= v(f, "y"), o.width -= l, o.height -= u } return x(o) }

                function N(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = d(10),
                        o = "HTML" === e.nodeName,
                        i = L(t),
                        c = L(e),
                        l = s(t),
                        u = a(e),
                        f = parseFloat(u.borderTopWidth),
                        p = parseFloat(u.borderLeftWidth);
                    n && o && (c.top = Math.max(c.top, 0), c.left = Math.max(c.left, 0)); var h = x({ top: i.top - c.top - f, left: i.left - c.left - p, width: i.width, height: i.height }); if (h.marginTop = 0, h.marginLeft = 0, !r && o) { var M = parseFloat(u.marginTop),
                            b = parseFloat(u.marginLeft);
                        h.top -= f - M, h.bottom -= f - M, h.left -= p - b, h.right -= p - b, h.marginTop = M, h.marginLeft = b } return (r && !n ? e.contains(l) : e === l && "BODY" !== l.nodeName) && (h = m(h, e)), h }

                function w(t) { var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = t.ownerDocument.documentElement,
                        r = N(t, n),
                        o = Math.max(n.clientWidth, window.innerWidth || 0),
                        i = Math.max(n.clientHeight, window.innerHeight || 0),
                        a = e ? 0 : b(n),
                        c = e ? 0 : b(n, "left"),
                        s = { top: a - r.top + r.marginTop, left: c - r.left + r.marginLeft, width: o, height: i }; return x(s) }

                function T(t) { var e = t.nodeName; if ("BODY" === e || "HTML" === e) return !1; if ("fixed" === a(t, "position")) return !0; var n = c(t); return !!n && T(n) }

                function q(t) { if (!t || !t.parentElement || d()) return document.documentElement; for (var e = t.parentElement; e && "none" === a(e, "transform");) e = e.parentElement; return e || document.documentElement }

                function C(t, e, n, r) { var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        i = { top: 0, left: 0 },
                        a = o ? q(t) : M(t, l(e)); if ("viewport" === r) i = w(a, o);
                    else { var u = void 0; "scrollParent" === r ? "BODY" === (u = s(c(e))).nodeName && (u = t.ownerDocument.documentElement) : u = "window" === r ? t.ownerDocument.documentElement : r; var f = N(u, a, o); if ("HTML" !== u.nodeName || T(a)) i = f;
                        else { var d = A(t.ownerDocument),
                                p = d.height,
                                h = d.width;
                            i.top += f.top - f.marginTop, i.bottom = p + f.top, i.left += f.left - f.marginLeft, i.right = h + f.left } } var b = "number" == typeof(n = n || 0); return i.left += b ? n : n.left || 0, i.top += b ? n : n.top || 0, i.right -= b ? n : n.right || 0, i.bottom -= b ? n : n.bottom || 0, i }

                function W(t) { return t.width * t.height }

                function S(t, e, n, r, o) { var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0; if (-1 === t.indexOf("auto")) return t; var a = C(n, r, i, o),
                        c = { top: { width: a.width, height: e.top - a.top }, right: { width: a.right - e.right, height: a.height }, bottom: { width: a.width, height: a.bottom - e.bottom }, left: { width: e.left - a.left, height: a.height } },
                        s = Object.keys(c).map((function(t) { return O({ key: t }, c[t], { area: W(c[t]) }) })).sort((function(t, e) { return e.area - t.area })),
                        l = s.filter((function(t) { var e = t.width,
                                r = t.height; return e >= n.clientWidth && r >= n.clientHeight })),
                        u = l.length > 0 ? l[0].key : s[0].key,
                        f = t.split("-")[1]; return u + (f ? "-" + f : "") }

                function k(t, e, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        o = r ? q(e) : M(e, l(n)); return N(n, o, r) }

                function B(t) { var e = t.ownerDocument.defaultView.getComputedStyle(t),
                        n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
                        r = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0); return { width: t.offsetWidth + r, height: t.offsetHeight + n } }

                function X(t) { var e = { left: "right", right: "left", bottom: "top", top: "bottom" }; return t.replace(/left|right|bottom|top/g, (function(t) { return e[t] })) }

                function E(t, e, n) { n = n.split("-")[0]; var r = B(t),
                        o = { width: r.width, height: r.height },
                        i = -1 !== ["right", "left"].indexOf(n),
                        a = i ? "top" : "left",
                        c = i ? "left" : "top",
                        s = i ? "height" : "width",
                        l = i ? "width" : "height"; return o[a] = e[a] + e[s] / 2 - r[s] / 2, o[c] = n === c ? e[c] - r[l] : e[X(c)], o }

                function D(t, e) { return Array.prototype.find ? t.find(e) : t.filter(e)[0] }

                function R(t, e, n) { return (void 0 === n ? t : t.slice(0, function(t, e, n) { if (Array.prototype.findIndex) return t.findIndex((function(t) { return t[e] === n })); var r = D(t, (function(t) { return t[e] === n })); return t.indexOf(r) }(t, "name", n))).forEach((function(t) { t.function; var n = t.function || t.fn;
                        t.enabled && i(n) && (e.offsets.popper = x(e.offsets.popper), e.offsets.reference = x(e.offsets.reference), e = n(e, t)) })), e }

                function P() { if (!this.state.isDestroyed) { var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                        t.offsets.reference = k(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = S(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = E(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = R(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t)) } }

                function I(t, e) { return t.some((function(t) { var n = t.name; return t.enabled && n === e })) }

                function j(t) { for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), r = 0; r < e.length; r++) { var o = e[r],
                            i = o ? "" + o + n : t; if (void 0 !== document.body.style[i]) return i } return null }

                function F() { return this.state.isDestroyed = !0, I(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[j("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }

                function H(t) { var e = t.ownerDocument; return e ? e.defaultView : window }

                function U(t, e, n, r) { n.updateBound = r, H(t).addEventListener("resize", n.updateBound, { passive: !0 }); var o = s(t); return function t(e, n, r, o) { var i = "BODY" === e.nodeName,
                            a = i ? e.ownerDocument.defaultView : e;
                        a.addEventListener(n, r, { passive: !0 }), i || t(s(a.parentNode), n, r, o), o.push(a) }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n }

                function V() { this.state.eventsEnabled || (this.state = U(this.reference, this.options, this.state, this.scheduleUpdate)) }

                function $() { var t, e;
                    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, H(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach((function(t) { t.removeEventListener("scroll", e.updateBound) })), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e)) }

                function Y(t) { return "" !== t && !isNaN(parseFloat(t)) && isFinite(t) }

                function G(t, e) { Object.keys(e).forEach((function(n) { var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && Y(e[n]) && (r = "px"), t.style[n] = e[n] + r })) } var K = n && /Firefox/i.test(navigator.userAgent);

                function J(t, e, n) { var r = D(t, (function(t) { return t.name === e })),
                        o = !!r && t.some((function(t) { return t.name === n && t.enabled && t.order < r.order })); if (!o); return o } var Q = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                    Z = Q.slice(3);

                function tt(t) { var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = Z.indexOf(t),
                        r = Z.slice(n + 1).concat(Z.slice(0, n)); return e ? r.reverse() : r } var et = "flip",
                    nt = "clockwise",
                    rt = "counterclockwise";

                function ot(t, e, n, r) { var o = [0, 0],
                        i = -1 !== ["right", "left"].indexOf(r),
                        a = t.split(/(\+|\-)/).map((function(t) { return t.trim() })),
                        c = a.indexOf(D(a, (function(t) { return -1 !== t.search(/,|\s/) })));
                    a[c] && a[c].indexOf(","); var s = /\s*,\s*|\s+/,
                        l = -1 !== c ? [a.slice(0, c).concat([a[c].split(s)[0]]), [a[c].split(s)[1]].concat(a.slice(c + 1))] : [a]; return (l = l.map((function(t, r) { var o = (1 === r ? !i : i) ? "height" : "width",
                            a = !1; return t.reduce((function(t, e) { return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, a = !0, t) : a ? (t[t.length - 1] += e, a = !1, t) : t.concat(e) }), []).map((function(t) { return function(t, e, n, r) { var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                    i = +o[1],
                                    a = o[2]; if (!i) return t; if (0 === a.indexOf("%")) { var c = void 0; switch (a) {
                                        case "%p":
                                            c = n; break;
                                        case "%":
                                        case "%r":
                                        default:
                                            c = r } return x(c)[e] / 100 * i } if ("vh" === a || "vw" === a) { return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i } return i }(t, o, e, n) })) }))).forEach((function(t, e) { t.forEach((function(n, r) { Y(n) && (o[e] += n * ("-" === t[r - 1] ? -1 : 1)) })) })), o } var it = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function() {}, onUpdate: function() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function(t) { var e = t.placement,
                                        n = e.split("-")[0],
                                        r = e.split("-")[1]; if (r) { var o = t.offsets,
                                            i = o.reference,
                                            a = o.popper,
                                            c = -1 !== ["bottom", "top"].indexOf(n),
                                            s = c ? "left" : "top",
                                            l = c ? "width" : "height",
                                            u = { start: _({}, s, i[s]), end: _({}, s, i[s] + i[l] - a[l]) };
                                        t.offsets.popper = O({}, a, u[r]) } return t } }, offset: { order: 200, enabled: !0, fn: function(t, e) { var n = e.offset,
                                        r = t.placement,
                                        o = t.offsets,
                                        i = o.popper,
                                        a = o.reference,
                                        c = r.split("-")[0],
                                        s = void 0; return s = Y(+n) ? [+n, 0] : ot(n, i, a, c), "left" === c ? (i.top += s[0], i.left -= s[1]) : "right" === c ? (i.top += s[0], i.left += s[1]) : "top" === c ? (i.left += s[0], i.top -= s[1]) : "bottom" === c && (i.left += s[0], i.top += s[1]), t.popper = i, t }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function(t, e) { var n = e.boundariesElement || p(t.instance.popper);
                                    t.instance.reference === n && (n = p(n)); var r = j("transform"),
                                        o = t.instance.popper.style,
                                        i = o.top,
                                        a = o.left,
                                        c = o[r];
                                    o.top = "", o.left = "", o[r] = ""; var s = C(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                                    o.top = i, o.left = a, o[r] = c, e.boundaries = s; var l = e.priority,
                                        u = t.offsets.popper,
                                        f = { primary: function(t) { var n = u[t]; return u[t] < s[t] && !e.escapeWithReference && (n = Math.max(u[t], s[t])), _({}, t, n) }, secondary: function(t) { var n = "right" === t ? "left" : "top",
                                                    r = u[n]; return u[t] > s[t] && !e.escapeWithReference && (r = Math.min(u[n], s[t] - ("right" === t ? u.width : u.height))), _({}, n, r) } }; return l.forEach((function(t) { var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                                        u = O({}, u, f[e](t)) })), t.offsets.popper = u, t }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function(t) { var e = t.offsets,
                                        n = e.popper,
                                        r = e.reference,
                                        o = t.placement.split("-")[0],
                                        i = Math.floor,
                                        a = -1 !== ["top", "bottom"].indexOf(o),
                                        c = a ? "right" : "bottom",
                                        s = a ? "left" : "top",
                                        l = a ? "width" : "height"; return n[c] < i(r[s]) && (t.offsets.popper[s] = i(r[s]) - n[l]), n[s] > i(r[c]) && (t.offsets.popper[s] = i(r[c])), t } }, arrow: { order: 500, enabled: !0, fn: function(t, e) { var n; if (!J(t.instance.modifiers, "arrow", "keepTogether")) return t; var r = e.element; if ("string" == typeof r) { if (!(r = t.instance.popper.querySelector(r))) return t } else if (!t.instance.popper.contains(r)) return t; var o = t.placement.split("-")[0],
                                        i = t.offsets,
                                        c = i.popper,
                                        s = i.reference,
                                        l = -1 !== ["left", "right"].indexOf(o),
                                        u = l ? "height" : "width",
                                        f = l ? "Top" : "Left",
                                        d = f.toLowerCase(),
                                        p = l ? "left" : "top",
                                        h = l ? "bottom" : "right",
                                        M = B(r)[u];
                                    s[h] - M < c[d] && (t.offsets.popper[d] -= c[d] - (s[h] - M)), s[d] + M > c[h] && (t.offsets.popper[d] += s[d] + M - c[h]), t.offsets.popper = x(t.offsets.popper); var b = s[d] + s[u] / 2 - M / 2,
                                        m = a(t.instance.popper),
                                        v = parseFloat(m["margin" + f]),
                                        g = parseFloat(m["border" + f + "Width"]),
                                        A = b - t.offsets.popper[d] - v - g; return A = Math.max(Math.min(c[u] - M, A), 0), t.arrowElement = r, t.offsets.arrow = (_(n = {}, d, Math.round(A)), _(n, p, ""), n), t }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function(t, e) { if (I(t.instance.modifiers, "inner")) return t; if (t.flipped && t.placement === t.originalPlacement) return t; var n = C(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                                        r = t.placement.split("-")[0],
                                        o = X(r),
                                        i = t.placement.split("-")[1] || "",
                                        a = []; switch (e.behavior) {
                                        case et:
                                            a = [r, o]; break;
                                        case nt:
                                            a = tt(r); break;
                                        case rt:
                                            a = tt(r, !0); break;
                                        default:
                                            a = e.behavior } return a.forEach((function(c, s) { if (r !== c || a.length === s + 1) return t;
                                        r = t.placement.split("-")[0], o = X(r); var l = t.offsets.popper,
                                            u = t.offsets.reference,
                                            f = Math.floor,
                                            d = "left" === r && f(l.right) > f(u.left) || "right" === r && f(l.left) < f(u.right) || "top" === r && f(l.bottom) > f(u.top) || "bottom" === r && f(l.top) < f(u.bottom),
                                            p = f(l.left) < f(n.left),
                                            h = f(l.right) > f(n.right),
                                            M = f(l.top) < f(n.top),
                                            b = f(l.bottom) > f(n.bottom),
                                            m = "left" === r && p || "right" === r && h || "top" === r && M || "bottom" === r && b,
                                            v = -1 !== ["top", "bottom"].indexOf(r),
                                            g = !!e.flipVariations && (v && "start" === i && p || v && "end" === i && h || !v && "start" === i && M || !v && "end" === i && b),
                                            A = !!e.flipVariationsByContent && (v && "start" === i && h || v && "end" === i && p || !v && "start" === i && b || !v && "end" === i && M),
                                            y = g || A;
                                        (d || m || y) && (t.flipped = !0, (d || m) && (r = a[s + 1]), y && (i = function(t) { return "end" === t ? "start" : "start" === t ? "end" : t }(i)), t.placement = r + (i ? "-" + i : ""), t.offsets.popper = O({}, t.offsets.popper, E(t.instance.popper, t.offsets.reference, t.placement)), t = R(t.instance.modifiers, t, "flip")) })), t }, behavior: "flip", padding: 5, boundariesElement: "viewport", flipVariations: !1, flipVariationsByContent: !1 }, inner: { order: 700, enabled: !1, fn: function(t) { var e = t.placement,
                                        n = e.split("-")[0],
                                        r = t.offsets,
                                        o = r.popper,
                                        i = r.reference,
                                        a = -1 !== ["left", "right"].indexOf(n),
                                        c = -1 === ["top", "left"].indexOf(n); return o[a ? "left" : "top"] = i[n] - (c ? o[a ? "width" : "height"] : 0), t.placement = X(e), t.offsets.popper = x(o), t } }, hide: { order: 800, enabled: !0, fn: function(t) { if (!J(t.instance.modifiers, "hide", "preventOverflow")) return t; var e = t.offsets.reference,
                                        n = D(t.instance.modifiers, (function(t) { return "preventOverflow" === t.name })).boundaries; if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) { if (!0 === t.hide) return t;
                                        t.hide = !0, t.attributes["x-out-of-boundaries"] = "" } else { if (!1 === t.hide) return t;
                                        t.hide = !1, t.attributes["x-out-of-boundaries"] = !1 } return t } }, computeStyle: { order: 850, enabled: !0, fn: function(t, e) { var n = e.x,
                                        r = e.y,
                                        o = t.offsets.popper,
                                        i = D(t.instance.modifiers, (function(t) { return "applyStyle" === t.name })).gpuAcceleration,
                                        a = void 0 !== i ? i : e.gpuAcceleration,
                                        c = p(t.instance.popper),
                                        s = L(c),
                                        l = { position: o.position },
                                        u = function(t, e) { var n = t.offsets,
                                                r = n.popper,
                                                o = n.reference,
                                                i = Math.round,
                                                a = Math.floor,
                                                c = function(t) { return t },
                                                s = i(o.width),
                                                l = i(r.width),
                                                u = -1 !== ["left", "right"].indexOf(t.placement),
                                                f = -1 !== t.placement.indexOf("-"),
                                                d = e ? u || f || s % 2 == l % 2 ? i : a : c,
                                                p = e ? i : c; return { left: d(s % 2 == 1 && l % 2 == 1 && !f && e ? r.left - 1 : r.left), top: p(r.top), bottom: p(r.bottom), right: d(r.right) } }(t, window.devicePixelRatio < 2 || !K),
                                        f = "bottom" === n ? "top" : "bottom",
                                        d = "right" === r ? "left" : "right",
                                        h = j("transform"),
                                        M = void 0,
                                        b = void 0; if (b = "bottom" === f ? "HTML" === c.nodeName ? -c.clientHeight + u.bottom : -s.height + u.bottom : u.top, M = "right" === d ? "HTML" === c.nodeName ? -c.clientWidth + u.right : -s.width + u.right : u.left, a && h) l[h] = "translate3d(" + M + "px, " + b + "px, 0)", l[f] = 0, l[d] = 0, l.willChange = "transform";
                                    else { var m = "bottom" === f ? -1 : 1,
                                            v = "right" === d ? -1 : 1;
                                        l[f] = b * m, l[d] = M * v, l.willChange = f + ", " + d } var g = { "x-placement": t.placement }; return t.attributes = O({}, g, t.attributes), t.styles = O({}, l, t.styles), t.arrowStyles = O({}, t.offsets.arrow, t.arrowStyles), t }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function(t) { var e, n; return G(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach((function(t) {!1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t) })), t.arrowElement && Object.keys(t.arrowStyles).length && G(t.arrowElement, t.arrowStyles), t }, onLoad: function(t, e, n, r, o) { var i = k(o, e, t, n.positionFixed),
                                        a = S(n.placement, i, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding); return e.setAttribute("x-placement", a), G(e, { position: n.positionFixed ? "fixed" : "absolute" }), n }, gpuAcceleration: void 0 } } },
                    at = function() {
                        function t(e, n) { var r = this,
                                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            y(this, t), this.scheduleUpdate = function() { return requestAnimationFrame(r.update) }, this.update = o(this.update.bind(this)), this.options = O({}, t.Defaults, a), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(O({}, t.Defaults.modifiers, a.modifiers)).forEach((function(e) { r.options.modifiers[e] = O({}, t.Defaults.modifiers[e] || {}, a.modifiers ? a.modifiers[e] : {}) })), this.modifiers = Object.keys(this.options.modifiers).map((function(t) { return O({ name: t }, r.options.modifiers[t]) })).sort((function(t, e) { return t.order - e.order })), this.modifiers.forEach((function(t) { t.enabled && i(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state) })), this.update(); var c = this.options.eventsEnabled;
                            c && this.enableEventListeners(), this.state.eventsEnabled = c } return z(t, [{ key: "update", value: function() { return P.call(this) } }, { key: "destroy", value: function() { return F.call(this) } }, { key: "enableEventListeners", value: function() { return V.call(this) } }, { key: "disableEventListeners", value: function() { return $.call(this) } }]), t }();
                at.Utils = ("undefined" != typeof window ? window : t).PopperUtils, at.placements = Q, at.Defaults = it, e.default = at }.call(this, n("yLpj")) }, "8oxB": function(t, e) { var n, r, o = t.exports = {};

        function i() { throw new Error("setTimeout has not been defined") }

        function a() { throw new Error("clearTimeout has not been defined") }

        function c(t) { if (n === setTimeout) return setTimeout(t, 0); if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0); try { return n(t, 0) } catch (e) { try { return n.call(null, t, 0) } catch (e) { return n.call(this, t, 0) } } }! function() { try { n = "function" == typeof setTimeout ? setTimeout : i } catch (t) { n = i } try { r = "function" == typeof clearTimeout ? clearTimeout : a } catch (t) { r = a } }(); var s, l = [],
            u = !1,
            f = -1;

        function d() { u && s && (u = !1, s.length ? l = s.concat(l) : f = -1, l.length && p()) }

        function p() { if (!u) { var t = c(d);
                u = !0; for (var e = l.length; e;) { for (s = l, l = []; ++f < e;) s && s[f].run();
                    f = -1, e = l.length }
                s = null, u = !1,
                    function(t) { if (r === clearTimeout) return clearTimeout(t); if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t); try { r(t) } catch (e) { try { return r.call(null, t) } catch (e) { return r.call(this, t) } } }(t) } }

        function h(t, e) { this.fun = t, this.array = e }

        function M() {}
        o.nextTick = function(t) { var e = new Array(arguments.length - 1); if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            l.push(new h(t, e)), 1 !== l.length || u || c(p) }, h.prototype.run = function() { this.fun.apply(null, this.array) }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = M, o.addListener = M, o.once = M, o.off = M, o.removeListener = M, o.removeAllListeners = M, o.emit = M, o.prependListener = M, o.prependOnceListener = M, o.listeners = function(t) { return [] }, o.binding = function(t) { throw new Error("process.binding is not supported") }, o.cwd = function() { return "/" }, o.chdir = function(t) { throw new Error("process.chdir is not supported") }, o.umask = function() { return 0 } }, "9rSQ": function(t, e, n) { "use strict"; var r = n("xTJ+");

        function o() { this.handlers = [] }
        o.prototype.use = function(t, e) { return this.handlers.push({ fulfilled: t, rejected: e }), this.handlers.length - 1 }, o.prototype.eject = function(t) { this.handlers[t] && (this.handlers[t] = null) }, o.prototype.forEach = function(t) { r.forEach(this.handlers, (function(e) { null !== e && t(e) })) }, t.exports = o }, "9tPo": function(t, e) { t.exports = function(t) { var e = "undefined" != typeof window && window.location; if (!e) throw new Error("fixUrls requires window.location"); if (!t || "string" != typeof t) return t; var n = e.protocol + "//" + e.host,
                r = n + e.pathname.replace(/\/[^\/]*$/, "/"); return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function(t, e) { var o, i = e.trim().replace(/^"(.*)"$/, (function(t, e) { return e })).replace(/^'(.*)'$/, (function(t, e) { return e })); return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")") })) } }, CgaS: function(t, e, n) { "use strict"; var r = n("xTJ+"),
            o = n("MLWZ"),
            i = n("9rSQ"),
            a = n("UnBK"),
            c = n("SntB");

        function s(t) { this.defaults = t, this.interceptors = { request: new i, response: new i } }
        s.prototype.request = function(t) { "string" == typeof t ? (t = arguments[1] || {}).url = arguments[0] : t = t || {}, (t = c(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get"; var e = [a, void 0],
                n = Promise.resolve(t); for (this.interceptors.request.forEach((function(t) { e.unshift(t.fulfilled, t.rejected) })), this.interceptors.response.forEach((function(t) { e.push(t.fulfilled, t.rejected) })); e.length;) n = n.then(e.shift(), e.shift()); return n }, s.prototype.getUri = function(t) { return t = c(this.defaults, t), o(t.url, t.params, t.paramsSerializer).replace(/^\?/, "") }, r.forEach(["delete", "get", "head", "options"], (function(t) { s.prototype[t] = function(e, n) { return this.request(r.merge(n || {}, { method: t, url: e })) } })), r.forEach(["post", "put", "patch"], (function(t) { s.prototype[t] = function(e, n, o) { return this.request(r.merge(o || {}, { method: t, url: e, data: n })) } })), t.exports = s }, DbsA: function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("zu+r").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("svg", { class: this.sizeClass, attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [e("path", { attrs: { "clip-rule": "evenodd", "fill-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" } })]) }), [], !1, null, null, null);
        e.default = i.exports }, DfZB: function(t, e, n) { "use strict";
        t.exports = function(t) { return function(e) { return t.apply(null, e) } } }, Dvum: function(t, e, n) { var r, o, i;! function(a, c) { "use strict";
            t.exports ? t.exports = c(n("wd/R")) : (o = [n("wd/R")], void 0 === (i = "function" == typeof(r = c) ? r.apply(e, o) : r) || (t.exports = i)) }(0, (function(t) { "use strict";
            void 0 === t.version && t.default && (t = t.default); var e, n = {},
                r = {},
                o = {},
                i = {},
                a = {};
            t && "string" == typeof t.version || T("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/"); var c = t.version.split("."),
                s = +c[0],
                l = +c[1];

            function u(t) { return t > 96 ? t - 87 : t > 64 ? t - 29 : t - 48 }

            function f(t) { var e = 0,
                    n = t.split("."),
                    r = n[0],
                    o = n[1] || "",
                    i = 1,
                    a = 0,
                    c = 1; for (45 === t.charCodeAt(0) && (e = 1, c = -1); e < r.length; e++) a = 60 * a + u(r.charCodeAt(e)); for (e = 0; e < o.length; e++) i /= 60, a += u(o.charCodeAt(e)) * i; return a * c }

            function d(t) { for (var e = 0; e < t.length; e++) t[e] = f(t[e]) }

            function p(t, e) { var n, r = []; for (n = 0; n < e.length; n++) r[n] = t[e[n]]; return r }

            function h(t) { var e = t.split("|"),
                    n = e[2].split(" "),
                    r = e[3].split(""),
                    o = e[4].split(" "); return d(n), d(r), d(o),
                    function(t, e) { for (var n = 0; n < e; n++) t[n] = Math.round((t[n - 1] || 0) + 6e4 * t[n]);
                        t[e - 1] = 1 / 0 }(o, r.length), { name: e[0], abbrs: p(e[1].split(" "), r), offsets: p(n, r), untils: o, population: 0 | e[5] } }

            function M(t) { t && this._set(h(t)) }

            function b(t, e) { this.name = t, this.zones = e }

            function m(t) { var e = t.toTimeString(),
                    n = e.match(/\([a-z ]+\)/i); "GMT" === (n = n && n[0] ? (n = n[0].match(/[A-Z]/g)) ? n.join("") : void 0 : (n = e.match(/[A-Z]{3,5}/g)) ? n[0] : void 0) && (n = void 0), this.at = +t, this.abbr = n, this.offset = t.getTimezoneOffset() }

            function v(t) { this.zone = t, this.offsetScore = 0, this.abbrScore = 0 }

            function g(t, e) { for (var n, r; r = 6e4 * ((e.at - t.at) / 12e4 | 0);)(n = new m(new Date(t.at + r))).offset === t.offset ? t = n : e = n; return t }

            function A(t, e) { return t.offsetScore !== e.offsetScore ? t.offsetScore - e.offsetScore : t.abbrScore !== e.abbrScore ? t.abbrScore - e.abbrScore : t.zone.population !== e.zone.population ? e.zone.population - t.zone.population : e.zone.name.localeCompare(t.zone.name) }

            function y(t, e) { var n, r; for (d(e), n = 0; n < e.length; n++) r = e[n], a[r] = a[r] || {}, a[r][t] = !0 }

            function z(t) { var e, n, r, o = t.length,
                    c = {},
                    s = []; for (e = 0; e < o; e++)
                    for (n in r = a[t[e].offset] || {}) r.hasOwnProperty(n) && (c[n] = !0); for (e in c) c.hasOwnProperty(e) && s.push(i[e]); return s }

            function _() { try { var t = Intl.DateTimeFormat().resolvedOptions().timeZone; if (t && t.length > 3) { var e = i[O(t)]; if (e) return e;
                        T("Moment Timezone found " + t + " from the Intl api, but did not have that data loaded.") } } catch (t) {} var n, r, o, a = function() { var t, e, n, r = (new Date).getFullYear() - 2,
                            o = new m(new Date(r, 0, 1)),
                            i = [o]; for (n = 1; n < 48; n++)(e = new m(new Date(r, n, 1))).offset !== o.offset && (t = g(o, e), i.push(t), i.push(new m(new Date(t.at + 6e4)))), o = e; for (n = 0; n < 4; n++) i.push(new m(new Date(r + n, 0, 1))), i.push(new m(new Date(r + n, 6, 1))); return i }(),
                    c = a.length,
                    s = z(a),
                    l = []; for (r = 0; r < s.length; r++) { for (n = new v(L(s[r]), c), o = 0; o < c; o++) n.scoreOffsetAt(a[o]);
                    l.push(n) } return l.sort(A), l.length > 0 ? l[0].zone.name : void 0 }

            function O(t) { return (t || "").toLowerCase().replace(/\//g, "_") }

            function x(t) { var e, r, o, a; for ("string" == typeof t && (t = [t]), e = 0; e < t.length; e++) a = O(r = (o = t[e].split("|"))[0]), n[a] = t[e], i[a] = r, y(a, o[2].split(" ")) }

            function L(t, e) { t = O(t); var o, a = n[t]; return a instanceof M ? a : "string" == typeof a ? (a = new M(a), n[t] = a, a) : r[t] && e !== L && (o = L(r[t], L)) ? ((a = n[t] = new M)._set(o), a.name = i[t], a) : null }

            function N(t) { var e, n, o, a; for ("string" == typeof t && (t = [t]), e = 0; e < t.length; e++) o = O((n = t[e].split("|"))[0]), a = O(n[1]), r[o] = a, i[o] = n[0], r[a] = o, i[a] = n[1] }

            function w(t) { var e = "X" === t._f || "x" === t._f; return !(!t._a || void 0 !== t._tzm || e) }

            function T(t) { "undefined" != typeof console && console.error }

            function q(e) { var n = Array.prototype.slice.call(arguments, 0, -1),
                    r = arguments[arguments.length - 1],
                    o = L(r),
                    i = t.utc.apply(null, n); return o && !t.isMoment(e) && w(i) && i.add(o.parse(i), "minutes"), i.tz(r), i }(s < 2 || 2 === s && l < 6) && T("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + t.version + ". See momentjs.com"), M.prototype = { _set: function(t) { this.name = t.name, this.abbrs = t.abbrs, this.untils = t.untils, this.offsets = t.offsets, this.population = t.population }, _index: function(t) { var e, n = +t,
                        r = this.untils; for (e = 0; e < r.length; e++)
                        if (n < r[e]) return e }, countries: function() { var t = this.name; return Object.keys(o).filter((function(e) { return -1 !== o[e].zones.indexOf(t) })) }, parse: function(t) { var e, n, r, o, i = +t,
                        a = this.offsets,
                        c = this.untils,
                        s = c.length - 1; for (o = 0; o < s; o++)
                        if (e = a[o], n = a[o + 1], r = a[o ? o - 1 : o], e < n && q.moveAmbiguousForward ? e = n : e > r && q.moveInvalidForward && (e = r), i < c[o] - 6e4 * e) return a[o];
                    return a[s] }, abbr: function(t) { return this.abbrs[this._index(t)] }, offset: function(t) { return T("zone.offset has been deprecated in favor of zone.utcOffset"), this.offsets[this._index(t)] }, utcOffset: function(t) { return this.offsets[this._index(t)] } }, v.prototype.scoreOffsetAt = function(t) { this.offsetScore += Math.abs(this.zone.utcOffset(t.at) - t.offset), this.zone.abbr(t.at).replace(/[^A-Z]/g, "") !== t.abbr && this.abbrScore++ }, q.version = "0.5.31", q.dataVersion = "", q._zones = n, q._links = r, q._names = i, q._countries = o, q.add = x, q.link = N, q.load = function(t) { x(t.zones), N(t.links),
                    function(t) { var e, n, r, i; if (t && t.length)
                            for (e = 0; e < t.length; e++) n = (i = t[e].split("|"))[0].toUpperCase(), r = i[1].split(" "), o[n] = new b(n, r) }(t.countries), q.dataVersion = t.version }, q.zone = L, q.zoneExists = function t(e) { return t.didShowError || (t.didShowError = !0, T("moment.tz.zoneExists('" + e + "') has been deprecated in favor of !moment.tz.zone('" + e + "')")), !!L(e) }, q.guess = function(t) { return e && !t || (e = _()), e }, q.names = function() { var t, e = []; for (t in i) i.hasOwnProperty(t) && (n[t] || n[r[t]]) && i[t] && e.push(i[t]); return e.sort() }, q.Zone = M, q.unpack = h, q.unpackBase60 = f, q.needsOffset = w, q.moveInvalidForward = !0, q.moveAmbiguousForward = !1, q.countries = function() { return Object.keys(o) }, q.zonesForCountry = function(t, e) { var n; if (n = (n = t).toUpperCase(), !(t = o[n] || null)) return null; var r = t.zones.sort(); return e ? r.map((function(t) { return { name: t, offset: L(t).utcOffset(new Date) } })) : r }; var C, W = t.fn;

            function S(t) { return function() { return this._z ? this._z.abbr(this) : t.call(this) } }

            function k(t) { return function() { return this._z = null, t.apply(this, arguments) } }
            t.tz = q, t.defaultZone = null, t.updateOffset = function(e, n) { var r, o = t.defaultZone; if (void 0 === e._z && (o && w(e) && !e._isUTC && (e._d = t.utc(e._a)._d, e.utc().add(o.parse(e), "minutes")), e._z = o), e._z)
                    if (r = e._z.utcOffset(e), Math.abs(r) < 16 && (r /= 60), void 0 !== e.utcOffset) { var i = e._z;
                        e.utcOffset(-r, n), e._z = i } else e.zone(r, n) }, W.tz = function(e, n) { if (e) { if ("string" != typeof e) throw new Error("Time zone name must be a string, got " + e + " [" + typeof e + "]"); return this._z = L(e), this._z ? t.updateOffset(this, n) : T(), this } if (this._z) return this._z.name }, W.zoneName = S(W.zoneName), W.zoneAbbr = S(W.zoneAbbr), W.utc = k(W.utc), W.local = k(W.local), W.utcOffset = (C = W.utcOffset, function() { return arguments.length > 0 && (this._z = null), C.apply(this, arguments) }), t.tz.setDefault = function(e) { return (s < 2 || 2 === s && l < 9) && T(t.version), t.defaultZone = e ? L(e) : null, t }; var B = t.momentProperties; return "[object Array]" === Object.prototype.toString.call(B) ? (B.push("_z"), B.push("_a")) : B && (B._z = null), t })) }, EKms: function(t, e, n) { "use strict";
        n.r(e); var r = n("vDqi"),
            o = n.n(r),
            i = { mixins: [{ methods: { copyToClipboard: function(t) { var e = document.createElement("textarea"),
                                n = window.location;
                            e.value = n.protocol + "//" + n.host + t, e.setAttribute("readonly", ""), e.style.position = "absolute", e.style.left = "-9999px", document.body.appendChild(e), e.select(), document.execCommand("copy"), document.body.removeChild(e) } } }], data: function() { return { entry: null, ready: !1, sharing: !1 } }, mounted: function() { var t = this;
                    o.a.get("/vapor-ui/api/".concat(this.$route.meta.resource, "/").concat(this.$route.params.group, "/").concat(this.$route.params.id), { params: this.$route.query, validateStatus: !1 }).then((function(e) { var n = e.data;
                        t.ready = !0, t.entry = n })) }, methods: { share: function(t) { var e = this;
                        this.copyToClipboard(this.$router.resolve({ name: "".concat(this.$route.meta.resource, "-show"), params: { id: this.$route.params.id, group: this.$route.params.group }, query: this.$route.query }).href), this.sharing = !0, setTimeout((function() { return e.sharing = !1 }), 2e3) } } },
            a = n("KHd+"),
            c = Object(a.a)(i, (function() { var t = this,
                    e = t.$createElement,
                    n = t._self._c || e; return n("div", { staticClass: "flex-1 relative pb-8 z-0 overflow-y-auto" }, [n("div", { staticClass: "relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none" }, [n("div", { staticClass: "flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8" }, [n("div", { staticClass: "mt-5" }, [n("div", [n("nav", { staticClass: "sm:flex items-center text-sm leading-5 font-medium" }, [n("router-link", { staticClass: "text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out", attrs: { to: { name: t.$route.meta.resource + "-index", query: this.$route.query, params: { group: t.$route.params.group } } } }, [t._v("\n                            " + t._s(t.$router.resolve({ name: t.$route.meta.resource + "-index" }).route.meta.createTitle({ group: t.$route.params.group })) + "\n                        ")]), t._v(" "), n("icon-chevron-right", { staticClass: "flex-shrink-0 mx-2 text-gray-400", attrs: { size: "5" } }), t._v(" "), n("a", { staticClass: "text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out", attrs: { href: "#" } }, [t._v("Details")])], 1)])]), t._v(" "), n("div", { staticClass: "mt-3 flex" }, [n("transition", { attrs: { name: "fade" } }, [t.sharing ? n("span", { staticClass: "text-sm leading-5 text-green-500 p-2" }, [t._v(" Copied to clipboard ")]) : t._e()]), t._v(" "), n("span", { staticClass: "order-1 ml-3 shadow-sm rounded-md sm:order-0 sm:ml-0" }, [n("button", { staticClass: "inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out", attrs: { type: "button" }, on: { click: function(e) { return t.share(t.entry) } } }, [t._v("\n                        Share\n                    ")])]), t._v(" "), t._t("actions", null, { entry: t.entry })], 2)])]), t._v(" "), n("div", { staticClass: "max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8" }, [t.ready ? t._e() : n("loader"), t._v(" "), t.ready && !t.entry ? n("search-empty-results", [t._v("Entry not found.")]) : t._e(), t._v(" "), t.ready && t.entry ? n("div", { staticClass: "max-w-4xl mx-auto" }, [n("div", { staticClass: "bg-white shadow overflow-hidden sm:rounded-lg" }, [n("div", { staticClass: "px-4 py-5 border-b border-gray-200 sm:px-6" }, [n("h3", { staticClass: "text-lg leading-6 font-medium text-gray-900" }, [t._v("\n                        " + t._s(t.$route.meta.title) + "\n                    ")])]), t._v(" "), n("div", { staticClass: "px-4 py-5 sm:p-0" }, [n("dl", [t._t("details", null, { entry: t.entry })], 2)])])]) : t._e()], 1)]) }), [], !1, null, null, null);
        e.default = c.exports }, HSsa: function(t, e, n) { "use strict";
        t.exports = function(t, e) { return function() { for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r]; return t.apply(e, n) } } }, I1BE: function(t, e) { t.exports = function(t) { var e = []; return e.toString = function() { return this.map((function(e) { var n = function(t, e) { var n = t[1] || "",
                            r = t[3]; if (!r) return n; if (e && "function" == typeof btoa) { var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                                i = r.sources.map((function(t) { return "/*# sourceURL=" + r.sourceRoot + t + " */" })); return [n].concat(i).concat([o]).join("\n") } var a; return [n].join("\n") }(e, t); return e[2] ? "@media " + e[2] + "{" + n + "}" : n })).join("") }, e.i = function(t, n) { "string" == typeof t && (t = [
                    [null, t, ""]
                ]); for (var r = {}, o = 0; o < this.length; o++) { var i = this[o][0]; "number" == typeof i && (r[i] = !0) } for (o = 0; o < t.length; o++) { var a = t[o]; "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a)) } }, e } }, INkZ: function(t, e, n) { "use strict";
        (function(e, n) { var r = Object.freeze({});

            function o(t) { return null == t }

            function i(t) { return null != t }

            function a(t) { return !0 === t }

            function c(t) { return "string" == typeof t || "number" == typeof t || "symbol" == typeof t || "boolean" == typeof t }

            function s(t) { return null !== t && "object" == typeof t } var l = Object.prototype.toString;

            function u(t) { return "[object Object]" === l.call(t) }

            function f(t) { var e = parseFloat(String(t)); return e >= 0 && Math.floor(e) === e && isFinite(t) }

            function d(t) { return i(t) && "function" == typeof t.then && "function" == typeof t.catch }

            function p(t) { return null == t ? "" : Array.isArray(t) || u(t) && t.toString === l ? JSON.stringify(t, null, 2) : String(t) }

            function h(t) { var e = parseFloat(t); return isNaN(e) ? t : e }

            function M(t, e) { for (var n = Object.create(null), r = t.split(","), o = 0; o < r.length; o++) n[r[o]] = !0; return e ? function(t) { return n[t.toLowerCase()] } : function(t) { return n[t] } } var b = M("slot,component", !0),
                m = M("key,ref,slot,slot-scope,is");

            function v(t, e) { if (t.length) { var n = t.indexOf(e); if (n > -1) return t.splice(n, 1) } } var g = Object.prototype.hasOwnProperty;

            function A(t, e) { return g.call(t, e) }

            function y(t) { var e = Object.create(null); return function(n) { return e[n] || (e[n] = t(n)) } } var z = /-(\w)/g,
                _ = y((function(t) { return t.replace(z, (function(t, e) { return e ? e.toUpperCase() : "" })) })),
                O = y((function(t) { return t.charAt(0).toUpperCase() + t.slice(1) })),
                x = /\B([A-Z])/g,
                L = y((function(t) { return t.replace(x, "-$1").toLowerCase() })),
                N = Function.prototype.bind ? function(t, e) { return t.bind(e) } : function(t, e) {
                    function n(n) { var r = arguments.length; return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e) } return n._length = t.length, n };

            function w(t, e) { e = e || 0; for (var n = t.length - e, r = new Array(n); n--;) r[n] = t[n + e]; return r }

            function T(t, e) { for (var n in e) t[n] = e[n]; return t }

            function q(t) { for (var e = {}, n = 0; n < t.length; n++) t[n] && T(e, t[n]); return e }

            function C(t, e, n) {} var W = function(t, e, n) { return !1 },
                S = function(t) { return t };

            function k(t, e) { if (t === e) return !0; var n = s(t),
                    r = s(e); if (!n || !r) return !n && !r && String(t) === String(e); try { var o = Array.isArray(t),
                        i = Array.isArray(e); if (o && i) return t.length === e.length && t.every((function(t, n) { return k(t, e[n]) })); if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime(); if (o || i) return !1; var a = Object.keys(t),
                        c = Object.keys(e); return a.length === c.length && a.every((function(n) { return k(t[n], e[n]) })) } catch (t) { return !1 } }

            function B(t, e) { for (var n = 0; n < t.length; n++)
                    if (k(t[n], e)) return n;
                return -1 }

            function X(t) { var e = !1; return function() { e || (e = !0, t.apply(this, arguments)) } } var E = "data-server-rendered",
                D = ["component", "directive", "filter"],
                R = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
                P = { optionMergeStrategies: Object.create(null), silent: !1, productionTip: !1, devtools: !1, performance: !1, errorHandler: null, warnHandler: null, ignoredElements: [], keyCodes: Object.create(null), isReservedTag: W, isReservedAttr: W, isUnknownElement: W, getTagNamespace: C, parsePlatformTagName: S, mustUseProp: W, async: !0, _lifecycleHooks: R },
                I = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

            function j(t, e, n, r) { Object.defineProperty(t, e, { value: n, enumerable: !!r, writable: !0, configurable: !0 }) } var F, H = new RegExp("[^" + I.source + ".$_\\d]"),
                U = "__proto__" in {},
                V = "undefined" != typeof window,
                $ = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
                Y = $ && WXEnvironment.platform.toLowerCase(),
                G = V && window.navigator.userAgent.toLowerCase(),
                K = G && /msie|trident/.test(G),
                J = G && G.indexOf("msie 9.0") > 0,
                Q = G && G.indexOf("edge/") > 0,
                Z = (G && G.indexOf("android"), G && /iphone|ipad|ipod|ios/.test(G) || "ios" === Y),
                tt = (G && /chrome\/\d+/.test(G), G && /phantomjs/.test(G), G && G.match(/firefox\/(\d+)/)),
                et = {}.watch,
                nt = !1; if (V) try { var rt = {};
                Object.defineProperty(rt, "passive", { get: function() { nt = !0 } }), window.addEventListener("test-passive", null, rt) } catch (r) {}
            var ot = function() { return void 0 === F && (F = !V && !$ && void 0 !== e && e.process && "server" === e.process.env.VUE_ENV), F },
                it = V && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

            function at(t) { return "function" == typeof t && /native code/.test(t.toString()) } var ct, st = "undefined" != typeof Symbol && at(Symbol) && "undefined" != typeof Reflect && at(Reflect.ownKeys);
            ct = "undefined" != typeof Set && at(Set) ? Set : function() {
                function t() { this.set = Object.create(null) } return t.prototype.has = function(t) { return !0 === this.set[t] }, t.prototype.add = function(t) { this.set[t] = !0 }, t.prototype.clear = function() { this.set = Object.create(null) }, t }(); var lt = C,
                ut = 0,
                ft = function() { this.id = ut++, this.subs = [] };
            ft.prototype.addSub = function(t) { this.subs.push(t) }, ft.prototype.removeSub = function(t) { v(this.subs, t) }, ft.prototype.depend = function() { ft.target && ft.target.addDep(this) }, ft.prototype.notify = function() { for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) t[e].update() }, ft.target = null; var dt = [];

            function pt(t) { dt.push(t), ft.target = t }

            function ht() { dt.pop(), ft.target = dt[dt.length - 1] } var Mt = function(t, e, n, r, o, i, a, c) { this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = o, this.ns = void 0, this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = c, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1 },
                bt = { child: { configurable: !0 } };
            bt.child.get = function() { return this.componentInstance }, Object.defineProperties(Mt.prototype, bt); var mt = function(t) { void 0 === t && (t = ""); var e = new Mt; return e.text = t, e.isComment = !0, e };

            function vt(t) { return new Mt(void 0, void 0, void 0, String(t)) }

            function gt(t) { var e = new Mt(t.tag, t.data, t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory); return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, e.asyncMeta = t.asyncMeta, e.isCloned = !0, e } var At = Array.prototype,
                yt = Object.create(At);
            ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach((function(t) { var e = At[t];
                j(yt, t, (function() { for (var n = [], r = arguments.length; r--;) n[r] = arguments[r]; var o, i = e.apply(this, n),
                        a = this.__ob__; switch (t) {
                        case "push":
                        case "unshift":
                            o = n; break;
                        case "splice":
                            o = n.slice(2) } return o && a.observeArray(o), a.dep.notify(), i })) })); var zt = Object.getOwnPropertyNames(yt),
                _t = !0;

            function Ot(t) { _t = t } var xt = function(t) { var e;
                this.value = t, this.dep = new ft, this.vmCount = 0, j(t, "__ob__", this), Array.isArray(t) ? (U ? (e = yt, t.__proto__ = e) : function(t, e, n) { for (var r = 0, o = n.length; r < o; r++) { var i = n[r];
                        j(t, i, e[i]) } }(t, yt, zt), this.observeArray(t)) : this.walk(t) };

            function Lt(t, e) { var n; if (s(t) && !(t instanceof Mt)) return A(t, "__ob__") && t.__ob__ instanceof xt ? n = t.__ob__ : _t && !ot() && (Array.isArray(t) || u(t)) && Object.isExtensible(t) && !t._isVue && (n = new xt(t)), e && n && n.vmCount++, n }

            function Nt(t, e, n, r, o) { var i = new ft,
                    a = Object.getOwnPropertyDescriptor(t, e); if (!a || !1 !== a.configurable) { var c = a && a.get,
                        s = a && a.set;
                    c && !s || 2 !== arguments.length || (n = t[e]); var l = !o && Lt(n);
                    Object.defineProperty(t, e, { enumerable: !0, configurable: !0, get: function() { var e = c ? c.call(t) : n; return ft.target && (i.depend(), l && (l.dep.depend(), Array.isArray(e) && function t(e) { for (var n = void 0, r = 0, o = e.length; r < o; r++)(n = e[r]) && n.__ob__ && n.__ob__.dep.depend(), Array.isArray(n) && t(n) }(e))), e }, set: function(e) { var r = c ? c.call(t) : n;
                            e === r || e != e && r != r || c && !s || (s ? s.call(t, e) : n = e, l = !o && Lt(e), i.notify()) } }) } }

            function wt(t, e, n) { if (Array.isArray(t) && f(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), n; if (e in t && !(e in Object.prototype)) return t[e] = n, n; var r = t.__ob__; return t._isVue || r && r.vmCount ? n : r ? (Nt(r.value, e, n), r.dep.notify(), n) : (t[e] = n, n) }

            function Tt(t, e) { if (Array.isArray(t) && f(e)) t.splice(e, 1);
                else { var n = t.__ob__;
                    t._isVue || n && n.vmCount || A(t, e) && (delete t[e], n && n.dep.notify()) } }
            xt.prototype.walk = function(t) { for (var e = Object.keys(t), n = 0; n < e.length; n++) Nt(t, e[n]) }, xt.prototype.observeArray = function(t) { for (var e = 0, n = t.length; e < n; e++) Lt(t[e]) }; var qt = P.optionMergeStrategies;

            function Ct(t, e) { if (!e) return t; for (var n, r, o, i = st ? Reflect.ownKeys(e) : Object.keys(e), a = 0; a < i.length; a++) "__ob__" !== (n = i[a]) && (r = t[n], o = e[n], A(t, n) ? r !== o && u(r) && u(o) && Ct(r, o) : wt(t, n, o)); return t }

            function Wt(t, e, n) { return n ? function() { var r = "function" == typeof e ? e.call(n, n) : e,
                        o = "function" == typeof t ? t.call(n, n) : t; return r ? Ct(r, o) : o } : e ? t ? function() { return Ct("function" == typeof e ? e.call(this, this) : e, "function" == typeof t ? t.call(this, this) : t) } : e : t }

            function St(t, e) { var n = e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t; return n ? function(t) { for (var e = [], n = 0; n < t.length; n++) - 1 === e.indexOf(t[n]) && e.push(t[n]); return e }(n) : n }

            function kt(t, e, n, r) { var o = Object.create(t || null); return e ? T(o, e) : o }
            qt.data = function(t, e, n) { return n ? Wt(t, e, n) : e && "function" != typeof e ? t : Wt(t, e) }, R.forEach((function(t) { qt[t] = St })), D.forEach((function(t) { qt[t + "s"] = kt })), qt.watch = function(t, e, n, r) { if (t === et && (t = void 0), e === et && (e = void 0), !e) return Object.create(t || null); if (!t) return e; var o = {}; for (var i in T(o, t), e) { var a = o[i],
                        c = e[i];
                    a && !Array.isArray(a) && (a = [a]), o[i] = a ? a.concat(c) : Array.isArray(c) ? c : [c] } return o }, qt.props = qt.methods = qt.inject = qt.computed = function(t, e, n, r) { if (!t) return e; var o = Object.create(null); return T(o, t), e && T(o, e), o }, qt.provide = Wt; var Bt = function(t, e) { return void 0 === e ? t : e };

            function Xt(t, e, n) { if ("function" == typeof e && (e = e.options), function(t, e) { var n = t.props; if (n) { var r, o, i = {}; if (Array.isArray(n))
                                for (r = n.length; r--;) "string" == typeof(o = n[r]) && (i[_(o)] = { type: null });
                            else if (u(n))
                                for (var a in n) o = n[a], i[_(a)] = u(o) ? o : { type: o };
                            t.props = i } }(e), function(t, e) { var n = t.inject; if (n) { var r = t.inject = {}; if (Array.isArray(n))
                                for (var o = 0; o < n.length; o++) r[n[o]] = { from: n[o] };
                            else if (u(n))
                                for (var i in n) { var a = n[i];
                                    r[i] = u(a) ? T({ from: i }, a) : { from: a } } } }(e), function(t) { var e = t.directives; if (e)
                            for (var n in e) { var r = e[n]; "function" == typeof r && (e[n] = { bind: r, update: r }) } }(e), !e._base && (e.extends && (t = Xt(t, e.extends, n)), e.mixins))
                    for (var r = 0, o = e.mixins.length; r < o; r++) t = Xt(t, e.mixins[r], n); var i, a = {}; for (i in t) c(i); for (i in e) A(t, i) || c(i);

                function c(r) { var o = qt[r] || Bt;
                    a[r] = o(t[r], e[r], n, r) } return a }

            function Et(t, e, n, r) { if ("string" == typeof n) { var o = t[e]; if (A(o, n)) return o[n]; var i = _(n); if (A(o, i)) return o[i]; var a = O(i); return A(o, a) ? o[a] : o[n] || o[i] || o[a] } }

            function Dt(t, e, n, r) { var o = e[t],
                    i = !A(n, t),
                    a = n[t],
                    c = It(Boolean, o.type); if (c > -1)
                    if (i && !A(o, "default")) a = !1;
                    else if ("" === a || a === L(t)) { var s = It(String, o.type);
                    (s < 0 || c < s) && (a = !0) } if (void 0 === a) { a = function(t, e, n) { if (A(e, "default")) { var r = e.default; return t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n] ? t._props[n] : "function" == typeof r && "Function" !== Rt(e.type) ? r.call(t) : r } }(r, o, t); var l = _t;
                    Ot(!0), Lt(a), Ot(l) } return a }

            function Rt(t) { var e = t && t.toString().match(/^\s*function (\w+)/); return e ? e[1] : "" }

            function Pt(t, e) { return Rt(t) === Rt(e) }

            function It(t, e) { if (!Array.isArray(e)) return Pt(e, t) ? 0 : -1; for (var n = 0, r = e.length; n < r; n++)
                    if (Pt(e[n], t)) return n;
                return -1 }

            function jt(t, e, n) { pt(); try { if (e)
                        for (var r = e; r = r.$parent;) { var o = r.$options.errorCaptured; if (o)
                                for (var i = 0; i < o.length; i++) try { if (!1 === o[i].call(r, t, e, n)) return } catch (t) { Ht(t, r, "errorCaptured hook") } }
                    Ht(t, e, n) } finally { ht() } }

            function Ft(t, e, n, r, o) { var i; try {
                    (i = n ? t.apply(e, n) : t.call(e)) && !i._isVue && d(i) && !i._handled && (i.catch((function(t) { return jt(t, r, o + " (Promise/async)") })), i._handled = !0) } catch (t) { jt(t, r, o) } return i }

            function Ht(t, e, n) { if (P.errorHandler) try { return P.errorHandler.call(null, t, e, n) } catch (e) { e !== t && Ut(e, null, "config.errorHandler") }
                Ut(t, e, n) }

            function Ut(t, e, n) { if (!V && !$ || "undefined" == typeof console) throw t } var Vt, $t = !1,
                Yt = [],
                Gt = !1;

            function Kt() { Gt = !1; var t = Yt.slice(0);
                Yt.length = 0; for (var e = 0; e < t.length; e++) t[e]() } if ("undefined" != typeof Promise && at(Promise)) { var Jt = Promise.resolve();
                Vt = function() { Jt.then(Kt), Z && setTimeout(C) }, $t = !0 } else if (K || "undefined" == typeof MutationObserver || !at(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Vt = void 0 !== n && at(n) ? function() { n(Kt) } : function() { setTimeout(Kt, 0) };
            else { var Qt = 1,
                    Zt = new MutationObserver(Kt),
                    te = document.createTextNode(String(Qt));
                Zt.observe(te, { characterData: !0 }), Vt = function() { Qt = (Qt + 1) % 2, te.data = String(Qt) }, $t = !0 }

            function ee(t, e) { var n; if (Yt.push((function() { if (t) try { t.call(e) } catch (t) { jt(t, e, "nextTick") } else n && n(e) })), Gt || (Gt = !0, Vt()), !t && "undefined" != typeof Promise) return new Promise((function(t) { n = t })) } var ne = new ct;

            function re(t) {! function t(e, n) { var r, o, i = Array.isArray(e); if (!(!i && !s(e) || Object.isFrozen(e) || e instanceof Mt)) { if (e.__ob__) { var a = e.__ob__.dep.id; if (n.has(a)) return;
                            n.add(a) } if (i)
                            for (r = e.length; r--;) t(e[r], n);
                        else
                            for (r = (o = Object.keys(e)).length; r--;) t(e[o[r]], n) } }(t, ne), ne.clear() } var oe = y((function(t) { var e = "&" === t.charAt(0),
                    n = "~" === (t = e ? t.slice(1) : t).charAt(0),
                    r = "!" === (t = n ? t.slice(1) : t).charAt(0); return { name: t = r ? t.slice(1) : t, once: n, capture: r, passive: e } }));

            function ie(t, e) {
                function n() { var t = arguments,
                        r = n.fns; if (!Array.isArray(r)) return Ft(r, null, arguments, e, "v-on handler"); for (var o = r.slice(), i = 0; i < o.length; i++) Ft(o[i], null, t, e, "v-on handler") } return n.fns = t, n }

            function ae(t, e, n, r, i, c) { var s, l, u, f; for (s in t) l = t[s], u = e[s], f = oe(s), o(l) || (o(u) ? (o(l.fns) && (l = t[s] = ie(l, c)), a(f.once) && (l = t[s] = i(f.name, l, f.capture)), n(f.name, l, f.capture, f.passive, f.params)) : l !== u && (u.fns = l, t[s] = u)); for (s in e) o(t[s]) && r((f = oe(s)).name, e[s], f.capture) }

            function ce(t, e, n) { var r;
                t instanceof Mt && (t = t.data.hook || (t.data.hook = {})); var c = t[e];

                function s() { n.apply(this, arguments), v(r.fns, s) }
                o(c) ? r = ie([s]) : i(c.fns) && a(c.merged) ? (r = c).fns.push(s) : r = ie([c, s]), r.merged = !0, t[e] = r }

            function se(t, e, n, r, o) { if (i(e)) { if (A(e, n)) return t[n] = e[n], o || delete e[n], !0; if (A(e, r)) return t[n] = e[r], o || delete e[r], !0 } return !1 }

            function le(t) { return c(t) ? [vt(t)] : Array.isArray(t) ? function t(e, n) { var r, s, l, u, f = []; for (r = 0; r < e.length; r++) o(s = e[r]) || "boolean" == typeof s || (u = f[l = f.length - 1], Array.isArray(s) ? s.length > 0 && (ue((s = t(s, (n || "") + "_" + r))[0]) && ue(u) && (f[l] = vt(u.text + s[0].text), s.shift()), f.push.apply(f, s)) : c(s) ? ue(u) ? f[l] = vt(u.text + s) : "" !== s && f.push(vt(s)) : ue(s) && ue(u) ? f[l] = vt(u.text + s.text) : (a(e._isVList) && i(s.tag) && o(s.key) && i(n) && (s.key = "__vlist" + n + "_" + r + "__"), f.push(s))); return f }(t) : void 0 }

            function ue(t) { return i(t) && i(t.text) && !1 === t.isComment }

            function fe(t, e) { if (t) { for (var n = Object.create(null), r = st ? Reflect.ownKeys(t) : Object.keys(t), o = 0; o < r.length; o++) { var i = r[o]; if ("__ob__" !== i) { for (var a = t[i].from, c = e; c;) { if (c._provided && A(c._provided, a)) { n[i] = c._provided[a]; break }
                                c = c.$parent } if (!c && "default" in t[i]) { var s = t[i].default;
                                n[i] = "function" == typeof s ? s.call(e) : s } } } return n } }

            function de(t, e) { if (!t || !t.length) return {}; for (var n = {}, r = 0, o = t.length; r < o; r++) { var i = t[r],
                        a = i.data; if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, i.context !== e && i.fnContext !== e || !a || null == a.slot)(n.default || (n.default = [])).push(i);
                    else { var c = a.slot,
                            s = n[c] || (n[c] = []); "template" === i.tag ? s.push.apply(s, i.children || []) : s.push(i) } } for (var l in n) n[l].every(pe) && delete n[l]; return n }

            function pe(t) { return t.isComment && !t.asyncFactory || " " === t.text }

            function he(t, e, n) { var o, i = Object.keys(e).length > 0,
                    a = t ? !!t.$stable : !i,
                    c = t && t.$key; if (t) { if (t._normalized) return t._normalized; if (a && n && n !== r && c === n.$key && !i && !n.$hasNormal) return n; for (var s in o = {}, t) t[s] && "$" !== s[0] && (o[s] = Me(e, s, t[s])) } else o = {}; for (var l in e) l in o || (o[l] = be(e, l)); return t && Object.isExtensible(t) && (t._normalized = o), j(o, "$stable", a), j(o, "$key", c), j(o, "$hasNormal", i), o }

            function Me(t, e, n) { var r = function() { var t = arguments.length ? n.apply(null, arguments) : n({}); return (t = t && "object" == typeof t && !Array.isArray(t) ? [t] : le(t)) && (0 === t.length || 1 === t.length && t[0].isComment) ? void 0 : t }; return n.proxy && Object.defineProperty(t, e, { get: r, enumerable: !0, configurable: !0 }), r }

            function be(t, e) { return function() { return t[e] } }

            function me(t, e) { var n, r, o, a, c; if (Array.isArray(t) || "string" == typeof t)
                    for (n = new Array(t.length), r = 0, o = t.length; r < o; r++) n[r] = e(t[r], r);
                else if ("number" == typeof t)
                    for (n = new Array(t), r = 0; r < t; r++) n[r] = e(r + 1, r);
                else if (s(t))
                    if (st && t[Symbol.iterator]) { n = []; for (var l = t[Symbol.iterator](), u = l.next(); !u.done;) n.push(e(u.value, n.length)), u = l.next() } else
                        for (a = Object.keys(t), n = new Array(a.length), r = 0, o = a.length; r < o; r++) c = a[r], n[r] = e(t[c], c, r);
                return i(n) || (n = []), n._isVList = !0, n }

            function ve(t, e, n, r) { var o, i = this.$scopedSlots[t];
                i ? (n = n || {}, r && (n = T(T({}, r), n)), o = i(n) || e) : o = this.$slots[t] || e; var a = n && n.slot; return a ? this.$createElement("template", { slot: a }, o) : o }

            function ge(t) { return Et(this.$options, "filters", t) || S }

            function Ae(t, e) { return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e }

            function ye(t, e, n, r, o) { var i = P.keyCodes[e] || n; return o && r && !P.keyCodes[e] ? Ae(o, r) : i ? Ae(i, t) : r ? L(r) !== e : void 0 }

            function ze(t, e, n, r, o) { if (n && s(n)) { var i;
                    Array.isArray(n) && (n = q(n)); var a = function(a) { if ("class" === a || "style" === a || m(a)) i = t;
                        else { var c = t.attrs && t.attrs.type;
                            i = r || P.mustUseProp(e, c, a) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {}) } var s = _(a),
                            l = L(a);
                        s in i || l in i || (i[a] = n[a], o && ((t.on || (t.on = {}))["update:" + a] = function(t) { n[a] = t })) }; for (var c in n) a(c) } return t }

            function _e(t, e) { var n = this._staticTrees || (this._staticTrees = []),
                    r = n[t]; return r && !e || xe(r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), "__static__" + t, !1), r }

            function Oe(t, e, n) { return xe(t, "__once__" + e + (n ? "_" + n : ""), !0), t }

            function xe(t, e, n) { if (Array.isArray(t))
                    for (var r = 0; r < t.length; r++) t[r] && "string" != typeof t[r] && Le(t[r], e + "_" + r, n);
                else Le(t, e, n) }

            function Le(t, e, n) { t.isStatic = !0, t.key = e, t.isOnce = n }

            function Ne(t, e) { if (e && u(e)) { var n = t.on = t.on ? T({}, t.on) : {}; for (var r in e) { var o = n[r],
                            i = e[r];
                        n[r] = o ? [].concat(o, i) : i } } return t }

            function we(t, e, n, r) { e = e || { $stable: !n }; for (var o = 0; o < t.length; o++) { var i = t[o];
                    Array.isArray(i) ? we(i, e, n) : i && (i.proxy && (i.fn.proxy = !0), e[i.key] = i.fn) } return r && (e.$key = r), e }

            function Te(t, e) { for (var n = 0; n < e.length; n += 2) { var r = e[n]; "string" == typeof r && r && (t[e[n]] = e[n + 1]) } return t }

            function qe(t, e) { return "string" == typeof t ? e + t : t }

            function Ce(t) { t._o = Oe, t._n = h, t._s = p, t._l = me, t._t = ve, t._q = k, t._i = B, t._m = _e, t._f = ge, t._k = ye, t._b = ze, t._v = vt, t._e = mt, t._u = we, t._g = Ne, t._d = Te, t._p = qe }

            function We(t, e, n, o, i) { var c, s = this,
                    l = i.options;
                A(o, "_uid") ? (c = Object.create(o))._original = o : (c = o, o = o._original); var u = a(l._compiled),
                    f = !u;
                this.data = t, this.props = e, this.children = n, this.parent = o, this.listeners = t.on || r, this.injections = fe(l.inject, o), this.slots = function() { return s.$slots || he(t.scopedSlots, s.$slots = de(n, o)), s.$slots }, Object.defineProperty(this, "scopedSlots", { enumerable: !0, get: function() { return he(t.scopedSlots, this.slots()) } }), u && (this.$options = l, this.$slots = this.slots(), this.$scopedSlots = he(t.scopedSlots, this.$slots)), l._scopeId ? this._c = function(t, e, n, r) { var i = Re(c, t, e, n, r, f); return i && !Array.isArray(i) && (i.fnScopeId = l._scopeId, i.fnContext = o), i } : this._c = function(t, e, n, r) { return Re(c, t, e, n, r, f) } }

            function Se(t, e, n, r, o) { var i = gt(t); return i.fnContext = n, i.fnOptions = r, e.slot && ((i.data || (i.data = {})).slot = e.slot), i }

            function ke(t, e) { for (var n in e) t[_(n)] = e[n] }
            Ce(We.prototype); var Be = { init: function(t, e) { if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) { var n = t;
                            Be.prepatch(n, n) } else(t.componentInstance = function(t, e) { var n = { _isComponent: !0, _parentVnode: t, parent: e },
                                r = t.data.inlineTemplate; return i(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns), new t.componentOptions.Ctor(n) }(t, Ge)).$mount(e ? t.elm : void 0, e) }, prepatch: function(t, e) { var n = e.componentOptions;! function(t, e, n, o, i) { var a = o.data.scopedSlots,
                                c = t.$scopedSlots,
                                s = !!(a && !a.$stable || c !== r && !c.$stable || a && t.$scopedSlots.$key !== a.$key),
                                l = !!(i || t.$options._renderChildren || s); if (t.$options._parentVnode = o, t.$vnode = o, t._vnode && (t._vnode.parent = o), t.$options._renderChildren = i, t.$attrs = o.data.attrs || r, t.$listeners = n || r, e && t.$options.props) { Ot(!1); for (var u = t._props, f = t.$options._propKeys || [], d = 0; d < f.length; d++) { var p = f[d],
                                        h = t.$options.props;
                                    u[p] = Dt(p, h, e, t) }
                                Ot(!0), t.$options.propsData = e }
                            n = n || r; var M = t.$options._parentListeners;
                            t.$options._parentListeners = n, Ye(t, n, M), l && (t.$slots = de(i, o.context), t.$forceUpdate()) }(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children) }, insert: function(t) { var e, n = t.context,
                            r = t.componentInstance;
                        r._isMounted || (r._isMounted = !0, Ze(r, "mounted")), t.data.keepAlive && (n._isMounted ? ((e = r)._inactive = !1, en.push(e)) : Qe(r, !0)) }, destroy: function(t) { var e = t.componentInstance;
                        e._isDestroyed || (t.data.keepAlive ? function t(e, n) { if (!(n && (e._directInactive = !0, Je(e)) || e._inactive)) { e._inactive = !0; for (var r = 0; r < e.$children.length; r++) t(e.$children[r]);
                                Ze(e, "deactivated") } }(e, !0) : e.$destroy()) } },
                Xe = Object.keys(Be);

            function Ee(t, e, n, c, l) { if (!o(t)) { var u = n.$options._base; if (s(t) && (t = u.extend(t)), "function" == typeof t) { var f; if (o(t.cid) && void 0 === (t = function(t, e) { if (a(t.error) && i(t.errorComp)) return t.errorComp; if (i(t.resolved)) return t.resolved; var n = Ie; if (n && i(t.owners) && -1 === t.owners.indexOf(n) && t.owners.push(n), a(t.loading) && i(t.loadingComp)) return t.loadingComp; if (n && !i(t.owners)) { var r = t.owners = [n],
                                        c = !0,
                                        l = null,
                                        u = null;
                                    n.$on("hook:destroyed", (function() { return v(r, n) })); var f = function(t) { for (var e = 0, n = r.length; e < n; e++) r[e].$forceUpdate();
                                            t && (r.length = 0, null !== l && (clearTimeout(l), l = null), null !== u && (clearTimeout(u), u = null)) },
                                        p = X((function(n) { t.resolved = je(n, e), c ? r.length = 0 : f(!0) })),
                                        h = X((function(e) { i(t.errorComp) && (t.error = !0, f(!0)) })),
                                        M = t(p, h); return s(M) && (d(M) ? o(t.resolved) && M.then(p, h) : d(M.component) && (M.component.then(p, h), i(M.error) && (t.errorComp = je(M.error, e)), i(M.loading) && (t.loadingComp = je(M.loading, e), 0 === M.delay ? t.loading = !0 : l = setTimeout((function() { l = null, o(t.resolved) && o(t.error) && (t.loading = !0, f(!1)) }), M.delay || 200)), i(M.timeout) && (u = setTimeout((function() { u = null, o(t.resolved) && h(null) }), M.timeout)))), c = !1, t.loading ? t.loadingComp : t.resolved } }(f = t, u))) return function(t, e, n, r, o) { var i = mt(); return i.asyncFactory = t, i.asyncMeta = { data: e, context: n, children: r, tag: o }, i }(f, e, n, c, l);
                        e = e || {}, yn(t), i(e.model) && function(t, e) { var n = t.model && t.model.prop || "value",
                                r = t.model && t.model.event || "input";
                            (e.attrs || (e.attrs = {}))[n] = e.model.value; var o = e.on || (e.on = {}),
                                a = o[r],
                                c = e.model.callback;
                            i(a) ? (Array.isArray(a) ? -1 === a.indexOf(c) : a !== c) && (o[r] = [c].concat(a)) : o[r] = c }(t.options, e); var p = function(t, e, n) { var r = e.options.props; if (!o(r)) { var a = {},
                                    c = t.attrs,
                                    s = t.props; if (i(c) || i(s))
                                    for (var l in r) { var u = L(l);
                                        se(a, s, l, u, !0) || se(a, c, l, u, !1) }
                                return a } }(e, t); if (a(t.options.functional)) return function(t, e, n, o, a) { var c = t.options,
                                s = {},
                                l = c.props; if (i(l))
                                for (var u in l) s[u] = Dt(u, l, e || r);
                            else i(n.attrs) && ke(s, n.attrs), i(n.props) && ke(s, n.props); var f = new We(n, s, a, o, t),
                                d = c.render.call(null, f._c, f); if (d instanceof Mt) return Se(d, n, f.parent, c); if (Array.isArray(d)) { for (var p = le(d) || [], h = new Array(p.length), M = 0; M < p.length; M++) h[M] = Se(p[M], n, f.parent, c); return h } }(t, p, e, n, c); var h = e.on; if (e.on = e.nativeOn, a(t.options.abstract)) { var M = e.slot;
                            e = {}, M && (e.slot = M) }! function(t) { for (var e = t.hook || (t.hook = {}), n = 0; n < Xe.length; n++) { var r = Xe[n],
                                    o = e[r],
                                    i = Be[r];
                                o === i || o && o._merged || (e[r] = o ? De(i, o) : i) } }(e); var b = t.options.name || l; return new Mt("vue-component-" + t.cid + (b ? "-" + b : ""), e, void 0, void 0, void 0, n, { Ctor: t, propsData: p, listeners: h, tag: l, children: c }, f) } } }

            function De(t, e) { var n = function(n, r) { t(n, r), e(n, r) }; return n._merged = !0, n }

            function Re(t, e, n, r, l, u) { return (Array.isArray(n) || c(n)) && (l = r, r = n, n = void 0), a(u) && (l = 2),
                    function(t, e, n, r, c) { if (i(n) && i(n.__ob__)) return mt(); if (i(n) && i(n.is) && (e = n.is), !e) return mt(); var l, u, f;
                        (Array.isArray(r) && "function" == typeof r[0] && ((n = n || {}).scopedSlots = { default: r[0] }, r.length = 0), 2 === c ? r = le(r) : 1 === c && (r = function(t) { for (var e = 0; e < t.length; e++)
                                if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                            return t }(r)), "string" == typeof e) ? (u = t.$vnode && t.$vnode.ns || P.getTagNamespace(e), l = P.isReservedTag(e) ? new Mt(P.parsePlatformTagName(e), n, r, void 0, void 0, t) : n && n.pre || !i(f = Et(t.$options, "components", e)) ? new Mt(e, n, r, void 0, void 0, t) : Ee(f, n, t, r, e)) : l = Ee(e, n, t, r); return Array.isArray(l) ? l : i(l) ? (i(u) && function t(e, n, r) { if (e.ns = n, "foreignObject" === e.tag && (n = void 0, r = !0), i(e.children))
                                for (var c = 0, s = e.children.length; c < s; c++) { var l = e.children[c];
                                    i(l.tag) && (o(l.ns) || a(r) && "svg" !== l.tag) && t(l, n, r) } }(l, u), i(n) && function(t) { s(t.style) && re(t.style), s(t.class) && re(t.class) }(n), l) : mt() }(t, e, n, r, l) } var Pe, Ie = null;

            function je(t, e) { return (t.__esModule || st && "Module" === t[Symbol.toStringTag]) && (t = t.default), s(t) ? e.extend(t) : t }

            function Fe(t) { return t.isComment && t.asyncFactory }

            function He(t) { if (Array.isArray(t))
                    for (var e = 0; e < t.length; e++) { var n = t[e]; if (i(n) && (i(n.componentOptions) || Fe(n))) return n } }

            function Ue(t, e) { Pe.$on(t, e) }

            function Ve(t, e) { Pe.$off(t, e) }

            function $e(t, e) { var n = Pe; return function r() { null !== e.apply(null, arguments) && n.$off(t, r) } }

            function Ye(t, e, n) { Pe = t, ae(e, n || {}, Ue, Ve, $e, t), Pe = void 0 } var Ge = null;

            function Ke(t) { var e = Ge; return Ge = t,
                    function() { Ge = e } }

            function Je(t) { for (; t && (t = t.$parent);)
                    if (t._inactive) return !0;
                return !1 }

            function Qe(t, e) { if (e) { if (t._directInactive = !1, Je(t)) return } else if (t._directInactive) return; if (t._inactive || null === t._inactive) { t._inactive = !1; for (var n = 0; n < t.$children.length; n++) Qe(t.$children[n]);
                    Ze(t, "activated") } }

            function Ze(t, e) { pt(); var n = t.$options[e],
                    r = e + " hook"; if (n)
                    for (var o = 0, i = n.length; o < i; o++) Ft(n[o], t, null, t, r);
                t._hasHookEvent && t.$emit("hook:" + e), ht() } var tn = [],
                en = [],
                nn = {},
                rn = !1,
                on = !1,
                an = 0,
                cn = 0,
                sn = Date.now; if (V && !K) { var ln = window.performance;
                ln && "function" == typeof ln.now && sn() > document.createEvent("Event").timeStamp && (sn = function() { return ln.now() }) }

            function un() { var t, e; for (cn = sn(), on = !0, tn.sort((function(t, e) { return t.id - e.id })), an = 0; an < tn.length; an++)(t = tn[an]).before && t.before(), e = t.id, nn[e] = null, t.run(); var n = en.slice(),
                    r = tn.slice();
                an = tn.length = en.length = 0, nn = {}, rn = on = !1,
                    function(t) { for (var e = 0; e < t.length; e++) t[e]._inactive = !0, Qe(t[e], !0) }(n),
                    function(t) { for (var e = t.length; e--;) { var n = t[e],
                                r = n.vm;
                            r._watcher === n && r._isMounted && !r._isDestroyed && Ze(r, "updated") } }(r), it && P.devtools && it.emit("flush") } var fn = 0,
                dn = function(t, e, n, r, o) { this.vm = t, o && (t._watcher = this), t._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++fn, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ct, this.newDepIds = new ct, this.expression = "", "function" == typeof e ? this.getter = e : (this.getter = function(t) { if (!H.test(t)) { var e = t.split("."); return function(t) { for (var n = 0; n < e.length; n++) { if (!t) return;
                                    t = t[e[n]] } return t } } }(e), this.getter || (this.getter = C)), this.value = this.lazy ? void 0 : this.get() };
            dn.prototype.get = function() { var t;
                pt(this); var e = this.vm; try { t = this.getter.call(e, e) } catch (t) { if (!this.user) throw t;
                    jt(t, e, 'getter for watcher "' + this.expression + '"') } finally { this.deep && re(t), ht(), this.cleanupDeps() } return t }, dn.prototype.addDep = function(t) { var e = t.id;
                this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this)) }, dn.prototype.cleanupDeps = function() { for (var t = this.deps.length; t--;) { var e = this.deps[t];
                    this.newDepIds.has(e.id) || e.removeSub(this) } var n = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0 }, dn.prototype.update = function() { this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(t) { var e = t.id; if (null == nn[e]) { if (nn[e] = !0, on) { for (var n = tn.length - 1; n > an && tn[n].id > t.id;) n--;
                            tn.splice(n + 1, 0, t) } else tn.push(t);
                        rn || (rn = !0, ee(un)) } }(this) }, dn.prototype.run = function() { if (this.active) { var t = this.get(); if (t !== this.value || s(t) || this.deep) { var e = this.value; if (this.value = t, this.user) try { this.cb.call(this.vm, t, e) } catch (t) { jt(t, this.vm, 'callback for watcher "' + this.expression + '"') } else this.cb.call(this.vm, t, e) } } }, dn.prototype.evaluate = function() { this.value = this.get(), this.dirty = !1 }, dn.prototype.depend = function() { for (var t = this.deps.length; t--;) this.deps[t].depend() }, dn.prototype.teardown = function() { if (this.active) { this.vm._isBeingDestroyed || v(this.vm._watchers, this); for (var t = this.deps.length; t--;) this.deps[t].removeSub(this);
                    this.active = !1 } }; var pn = { enumerable: !0, configurable: !0, get: C, set: C };

            function hn(t, e, n) { pn.get = function() { return this[e][n] }, pn.set = function(t) { this[e][n] = t }, Object.defineProperty(t, n, pn) } var Mn = { lazy: !0 };

            function bn(t, e, n) { var r = !ot(); "function" == typeof n ? (pn.get = r ? mn(e) : vn(n), pn.set = C) : (pn.get = n.get ? r && !1 !== n.cache ? mn(e) : vn(n.get) : C, pn.set = n.set || C), Object.defineProperty(t, e, pn) }

            function mn(t) { return function() { var e = this._computedWatchers && this._computedWatchers[t]; if (e) return e.dirty && e.evaluate(), ft.target && e.depend(), e.value } }

            function vn(t) { return function() { return t.call(this, this) } }

            function gn(t, e, n, r) { return u(n) && (r = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, r) } var An = 0;

            function yn(t) { var e = t.options; if (t.super) { var n = yn(t.super); if (n !== t.superOptions) { t.superOptions = n; var r = function(t) { var e, n = t.options,
                                r = t.sealedOptions; for (var o in n) n[o] !== r[o] && (e || (e = {}), e[o] = n[o]); return e }(t);
                        r && T(t.extendOptions, r), (e = t.options = Xt(n, t.extendOptions)).name && (e.components[e.name] = t) } } return e }

            function zn(t) { this._init(t) }

            function _n(t) { return t && (t.Ctor.options.name || t.tag) }

            function On(t, e) { return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : (n = t, "[object RegExp]" === l.call(n) && t.test(e)); var n }

            function xn(t, e) { var n = t.cache,
                    r = t.keys,
                    o = t._vnode; for (var i in n) { var a = n[i]; if (a) { var c = _n(a.componentOptions);
                        c && !e(c) && Ln(n, i, r, o) } } }

            function Ln(t, e, n, r) { var o = t[e];!o || r && o.tag === r.tag || o.componentInstance.$destroy(), t[e] = null, v(n, e) }! function(t) { t.prototype._init = function(t) { var e = this;
                    e._uid = An++, e._isVue = !0, t && t._isComponent ? function(t, e) { var n = t.$options = Object.create(t.constructor.options),
                                r = e._parentVnode;
                            n.parent = e.parent, n._parentVnode = r; var o = r.componentOptions;
                            n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, n._componentTag = o.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns) }(e, t) : e.$options = Xt(yn(e.constructor), t || {}, e), e._renderProxy = e, e._self = e,
                        function(t) { var e = t.$options,
                                n = e.parent; if (n && !e.abstract) { for (; n.$options.abstract && n.$parent;) n = n.$parent;
                                n.$children.push(t) }
                            t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1 }(e),
                        function(t) { t._events = Object.create(null), t._hasHookEvent = !1; var e = t.$options._parentListeners;
                            e && Ye(t, e) }(e),
                        function(t) { t._vnode = null, t._staticTrees = null; var e = t.$options,
                                n = t.$vnode = e._parentVnode,
                                o = n && n.context;
                            t.$slots = de(e._renderChildren, o), t.$scopedSlots = r, t._c = function(e, n, r, o) { return Re(t, e, n, r, o, !1) }, t.$createElement = function(e, n, r, o) { return Re(t, e, n, r, o, !0) }; var i = n && n.data;
                            Nt(t, "$attrs", i && i.attrs || r, null, !0), Nt(t, "$listeners", e._parentListeners || r, null, !0) }(e), Ze(e, "beforeCreate"),
                        function(t) { var e = fe(t.$options.inject, t);
                            e && (Ot(!1), Object.keys(e).forEach((function(n) { Nt(t, n, e[n]) })), Ot(!0)) }(e),
                        function(t) { t._watchers = []; var e = t.$options;
                            e.props && function(t, e) { var n = t.$options.propsData || {},
                                    r = t._props = {},
                                    o = t.$options._propKeys = [];
                                t.$parent && Ot(!1); var i = function(i) { o.push(i); var a = Dt(i, e, n, t);
                                    Nt(r, i, a), i in t || hn(t, "_props", i) }; for (var a in e) i(a);
                                Ot(!0) }(t, e.props), e.methods && function(t, e) { for (var n in t.$options.props, e) t[n] = "function" != typeof e[n] ? C : N(e[n], t) }(t, e.methods), e.data ? function(t) { var e = t.$options.data;
                                u(e = t._data = "function" == typeof e ? function(t, e) { pt(); try { return t.call(e, e) } catch (t) { return jt(t, e, "data()"), {} } finally { ht() } }(e, t) : e || {}) || (e = {}); for (var n, r = Object.keys(e), o = t.$options.props, i = (t.$options.methods, r.length); i--;) { var a = r[i];
                                    o && A(o, a) || (void 0, 36 !== (n = (a + "").charCodeAt(0)) && 95 !== n && hn(t, "_data", a)) }
                                Lt(e, !0) }(t) : Lt(t._data = {}, !0), e.computed && function(t, e) { var n = t._computedWatchers = Object.create(null),
                                    r = ot(); for (var o in e) { var i = e[o],
                                        a = "function" == typeof i ? i : i.get;
                                    r || (n[o] = new dn(t, a || C, C, Mn)), o in t || bn(t, o, i) } }(t, e.computed), e.watch && e.watch !== et && function(t, e) { for (var n in e) { var r = e[n]; if (Array.isArray(r))
                                        for (var o = 0; o < r.length; o++) gn(t, n, r[o]);
                                    else gn(t, n, r) } }(t, e.watch) }(e),
                        function(t) { var e = t.$options.provide;
                            e && (t._provided = "function" == typeof e ? e.call(t) : e) }(e), Ze(e, "created"), e.$options.el && e.$mount(e.$options.el) } }(zn),
            function(t) { Object.defineProperty(t.prototype, "$data", { get: function() { return this._data } }), Object.defineProperty(t.prototype, "$props", { get: function() { return this._props } }), t.prototype.$set = wt, t.prototype.$delete = Tt, t.prototype.$watch = function(t, e, n) { if (u(e)) return gn(this, t, e, n);
                    (n = n || {}).user = !0; var r = new dn(this, t, e, n); if (n.immediate) try { e.call(this, r.value) } catch (t) { jt(t, this, 'callback for immediate watcher "' + r.expression + '"') }
                    return function() { r.teardown() } } }(zn),
            function(t) { var e = /^hook:/;
                t.prototype.$on = function(t, n) { var r = this; if (Array.isArray(t))
                        for (var o = 0, i = t.length; o < i; o++) r.$on(t[o], n);
                    else(r._events[t] || (r._events[t] = [])).push(n), e.test(t) && (r._hasHookEvent = !0); return r }, t.prototype.$once = function(t, e) { var n = this;

                    function r() { n.$off(t, r), e.apply(n, arguments) } return r.fn = e, n.$on(t, r), n }, t.prototype.$off = function(t, e) { var n = this; if (!arguments.length) return n._events = Object.create(null), n; if (Array.isArray(t)) { for (var r = 0, o = t.length; r < o; r++) n.$off(t[r], e); return n } var i, a = n._events[t]; if (!a) return n; if (!e) return n._events[t] = null, n; for (var c = a.length; c--;)
                        if ((i = a[c]) === e || i.fn === e) { a.splice(c, 1); break }
                    return n }, t.prototype.$emit = function(t) { var e = this._events[t]; if (e) { e = e.length > 1 ? w(e) : e; for (var n = w(arguments, 1), r = 'event handler for "' + t + '"', o = 0, i = e.length; o < i; o++) Ft(e[o], this, n, this, r) } return this } }(zn),
            function(t) { t.prototype._update = function(t, e) { var n = this,
                        r = n.$el,
                        o = n._vnode,
                        i = Ke(n);
                    n._vnode = t, n.$el = o ? n.__patch__(o, t) : n.__patch__(n.$el, t, e, !1), i(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el) }, t.prototype.$forceUpdate = function() { this._watcher && this._watcher.update() }, t.prototype.$destroy = function() { var t = this; if (!t._isBeingDestroyed) { Ze(t, "beforeDestroy"), t._isBeingDestroyed = !0; var e = t.$parent;!e || e._isBeingDestroyed || t.$options.abstract || v(e.$children, t), t._watcher && t._watcher.teardown(); for (var n = t._watchers.length; n--;) t._watchers[n].teardown();
                        t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), Ze(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null) } } }(zn),
            function(t) { Ce(t.prototype), t.prototype.$nextTick = function(t) { return ee(t, this) }, t.prototype._render = function() { var t, e = this,
                        n = e.$options,
                        r = n.render,
                        o = n._parentVnode;
                    o && (e.$scopedSlots = he(o.data.scopedSlots, e.$slots, e.$scopedSlots)), e.$vnode = o; try { Ie = e, t = r.call(e._renderProxy, e.$createElement) } catch (n) { jt(n, e, "render"), t = e._vnode } finally { Ie = null } return Array.isArray(t) && 1 === t.length && (t = t[0]), t instanceof Mt || (t = mt()), t.parent = o, t } }(zn); var Nn = [String, RegExp, Array],
                wn = { KeepAlive: { name: "keep-alive", abstract: !0, props: { include: Nn, exclude: Nn, max: [String, Number] }, created: function() { this.cache = Object.create(null), this.keys = [] }, destroyed: function() { for (var t in this.cache) Ln(this.cache, t, this.keys) }, mounted: function() { var t = this;
                            this.$watch("include", (function(e) { xn(t, (function(t) { return On(e, t) })) })), this.$watch("exclude", (function(e) { xn(t, (function(t) { return !On(e, t) })) })) }, render: function() { var t = this.$slots.default,
                                e = He(t),
                                n = e && e.componentOptions; if (n) { var r = _n(n),
                                    o = this.include,
                                    i = this.exclude; if (o && (!r || !On(o, r)) || i && r && On(i, r)) return e; var a = this.cache,
                                    c = this.keys,
                                    s = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;
                                a[s] ? (e.componentInstance = a[s].componentInstance, v(c, s), c.push(s)) : (a[s] = e, c.push(s), this.max && c.length > parseInt(this.max) && Ln(a, c[0], c, this._vnode)), e.data.keepAlive = !0 } return e || t && t[0] } } };! function(t) { var e = { get: function() { return P } };
                Object.defineProperty(t, "config", e), t.util = { warn: lt, extend: T, mergeOptions: Xt, defineReactive: Nt }, t.set = wt, t.delete = Tt, t.nextTick = ee, t.observable = function(t) { return Lt(t), t }, t.options = Object.create(null), D.forEach((function(e) { t.options[e + "s"] = Object.create(null) })), t.options._base = t, T(t.options.components, wn),
                    function(t) { t.use = function(t) { var e = this._installedPlugins || (this._installedPlugins = []); if (e.indexOf(t) > -1) return this; var n = w(arguments, 1); return n.unshift(this), "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n), e.push(t), this } }(t),
                    function(t) { t.mixin = function(t) { return this.options = Xt(this.options, t), this } }(t),
                    function(t) { t.cid = 0; var e = 1;
                        t.extend = function(t) { t = t || {}; var n = this,
                                r = n.cid,
                                o = t._Ctor || (t._Ctor = {}); if (o[r]) return o[r]; var i = t.name || n.options.name,
                                a = function(t) { this._init(t) }; return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = e++, a.options = Xt(n.options, t), a.super = n, a.options.props && function(t) { var e = t.options.props; for (var n in e) hn(t.prototype, "_props", n) }(a), a.options.computed && function(t) { var e = t.options.computed; for (var n in e) bn(t.prototype, n, e[n]) }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, D.forEach((function(t) { a[t] = n[t] })), i && (a.options.components[i] = a), a.superOptions = n.options, a.extendOptions = t, a.sealedOptions = T({}, a.options), o[r] = a, a } }(t),
                    function(t) { D.forEach((function(e) { t[e] = function(t, n) { return n ? ("component" === e && u(n) && (n.name = n.name || t, n = this.options._base.extend(n)), "directive" === e && "function" == typeof n && (n = { bind: n, update: n }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t] } })) }(t) }(zn), Object.defineProperty(zn.prototype, "$isServer", { get: ot }), Object.defineProperty(zn.prototype, "$ssrContext", { get: function() { return this.$vnode && this.$vnode.ssrContext } }), Object.defineProperty(zn, "FunctionalRenderContext", { value: We }), zn.version = "2.6.11"; var Tn = M("style,class"),
                qn = M("input,textarea,option,select,progress"),
                Cn = function(t, e, n) { return "value" === n && qn(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t },
                Wn = M("contenteditable,draggable,spellcheck"),
                Sn = M("events,caret,typing,plaintext-only"),
                kn = M("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
                Bn = "http://www.w3.org/1999/xlink",
                Xn = function(t) { return ":" === t.charAt(5) && "xlink" === t.slice(0, 5) },
                En = function(t) { return Xn(t) ? t.slice(6, t.length) : "" },
                Dn = function(t) { return null == t || !1 === t };

            function Rn(t, e) { return { staticClass: Pn(t.staticClass, e.staticClass), class: i(t.class) ? [t.class, e.class] : e.class } }

            function Pn(t, e) { return t ? e ? t + " " + e : t : e || "" }

            function In(t) { return Array.isArray(t) ? function(t) { for (var e, n = "", r = 0, o = t.length; r < o; r++) i(e = In(t[r])) && "" !== e && (n && (n += " "), n += e); return n }(t) : s(t) ? function(t) { var e = ""; for (var n in t) t[n] && (e && (e += " "), e += n); return e }(t) : "string" == typeof t ? t : "" } var jn = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
                Fn = M("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
                Hn = M("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
                Un = function(t) { return Fn(t) || Hn(t) };

            function Vn(t) { return Hn(t) ? "svg" : "math" === t ? "math" : void 0 } var $n = Object.create(null),
                Yn = M("text,number,password,search,email,tel,url");

            function Gn(t) { return "string" == typeof t ? document.querySelector(t) || document.createElement("div") : t } var Kn = Object.freeze({ createElement: function(t, e) { var n = document.createElement(t); return "select" !== t || e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n }, createElementNS: function(t, e) { return document.createElementNS(jn[t], e) }, createTextNode: function(t) { return document.createTextNode(t) }, createComment: function(t) { return document.createComment(t) }, insertBefore: function(t, e, n) { t.insertBefore(e, n) }, removeChild: function(t, e) { t.removeChild(e) }, appendChild: function(t, e) { t.appendChild(e) }, parentNode: function(t) { return t.parentNode }, nextSibling: function(t) { return t.nextSibling }, tagName: function(t) { return t.tagName }, setTextContent: function(t, e) { t.textContent = e }, setStyleScope: function(t, e) { t.setAttribute(e, "") } }),
                Jn = { create: function(t, e) { Qn(e) }, update: function(t, e) { t.data.ref !== e.data.ref && (Qn(t, !0), Qn(e)) }, destroy: function(t) { Qn(t, !0) } };

            function Qn(t, e) { var n = t.data.ref; if (i(n)) { var r = t.context,
                        o = t.componentInstance || t.elm,
                        a = r.$refs;
                    e ? Array.isArray(a[n]) ? v(a[n], o) : a[n] === o && (a[n] = void 0) : t.data.refInFor ? Array.isArray(a[n]) ? a[n].indexOf(o) < 0 && a[n].push(o) : a[n] = [o] : a[n] = o } } var Zn = new Mt("", {}, []),
                tr = ["create", "activate", "update", "remove", "destroy"];

            function er(t, e) { return t.key === e.key && (t.tag === e.tag && t.isComment === e.isComment && i(t.data) === i(e.data) && function(t, e) { if ("input" !== t.tag) return !0; var n, r = i(n = t.data) && i(n = n.attrs) && n.type,
                        o = i(n = e.data) && i(n = n.attrs) && n.type; return r === o || Yn(r) && Yn(o) }(t, e) || a(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && o(e.asyncFactory.error)) }

            function nr(t, e, n) { var r, o, a = {}; for (r = e; r <= n; ++r) i(o = t[r].key) && (a[o] = r); return a } var rr = { create: or, update: or, destroy: function(t) { or(t, Zn) } };

            function or(t, e) {
                (t.data.directives || e.data.directives) && function(t, e) { var n, r, o, i = t === Zn,
                        a = e === Zn,
                        c = ar(t.data.directives, t.context),
                        s = ar(e.data.directives, e.context),
                        l = [],
                        u = []; for (n in s) r = c[n], o = s[n], r ? (o.oldValue = r.value, o.oldArg = r.arg, sr(o, "update", e, t), o.def && o.def.componentUpdated && u.push(o)) : (sr(o, "bind", e, t), o.def && o.def.inserted && l.push(o)); if (l.length) { var f = function() { for (var n = 0; n < l.length; n++) sr(l[n], "inserted", e, t) };
                        i ? ce(e, "insert", f) : f() } if (u.length && ce(e, "postpatch", (function() { for (var n = 0; n < u.length; n++) sr(u[n], "componentUpdated", e, t) })), !i)
                        for (n in c) s[n] || sr(c[n], "unbind", t, t, a) }(t, e) } var ir = Object.create(null);

            function ar(t, e) { var n, r, o = Object.create(null); if (!t) return o; for (n = 0; n < t.length; n++)(r = t[n]).modifiers || (r.modifiers = ir), o[cr(r)] = r, r.def = Et(e.$options, "directives", r.name); return o }

            function cr(t) { return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".") }

            function sr(t, e, n, r, o) { var i = t.def && t.def[e]; if (i) try { i(n.elm, t, n, r, o) } catch (r) { jt(r, n.context, "directive " + t.name + " " + e + " hook") } } var lr = [Jn, rr];

            function ur(t, e) { var n = e.componentOptions; if (!(i(n) && !1 === n.Ctor.options.inheritAttrs || o(t.data.attrs) && o(e.data.attrs))) { var r, a, c = e.elm,
                        s = t.data.attrs || {},
                        l = e.data.attrs || {}; for (r in i(l.__ob__) && (l = e.data.attrs = T({}, l)), l) a = l[r], s[r] !== a && fr(c, r, a); for (r in (K || Q) && l.value !== s.value && fr(c, "value", l.value), s) o(l[r]) && (Xn(r) ? c.removeAttributeNS(Bn, En(r)) : Wn(r) || c.removeAttribute(r)) } }

            function fr(t, e, n) { t.tagName.indexOf("-") > -1 ? dr(t, e, n) : kn(e) ? Dn(n) ? t.removeAttribute(e) : (n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, t.setAttribute(e, n)) : Wn(e) ? t.setAttribute(e, function(t, e) { return Dn(e) || "false" === e ? "false" : "contenteditable" === t && Sn(e) ? e : "true" }(e, n)) : Xn(e) ? Dn(n) ? t.removeAttributeNS(Bn, En(e)) : t.setAttributeNS(Bn, e, n) : dr(t, e, n) }

            function dr(t, e, n) { if (Dn(n)) t.removeAttribute(e);
                else { if (K && !J && "TEXTAREA" === t.tagName && "placeholder" === e && "" !== n && !t.__ieph) { var r = function(e) { e.stopImmediatePropagation(), t.removeEventListener("input", r) };
                        t.addEventListener("input", r), t.__ieph = !0 }
                    t.setAttribute(e, n) } } var pr = { create: ur, update: ur };

            function hr(t, e) { var n = e.elm,
                    r = e.data,
                    a = t.data; if (!(o(r.staticClass) && o(r.class) && (o(a) || o(a.staticClass) && o(a.class)))) { var c = function(t) { for (var e = t.data, n = t, r = t; i(r.componentInstance);)(r = r.componentInstance._vnode) && r.data && (e = Rn(r.data, e)); for (; i(n = n.parent);) n && n.data && (e = Rn(e, n.data)); return function(t, e) { return i(t) || i(e) ? Pn(t, In(e)) : "" }(e.staticClass, e.class) }(e),
                        s = n._transitionClasses;
                    i(s) && (c = Pn(c, In(s))), c !== n._prevClass && (n.setAttribute("class", c), n._prevClass = c) } } var Mr, br, mr, vr, gr, Ar, yr = { create: hr, update: hr },
                zr = /[\w).+\-_$\]]/;

            function _r(t) { var e, n, r, o, i, a = !1,
                    c = !1,
                    s = !1,
                    l = !1,
                    u = 0,
                    f = 0,
                    d = 0,
                    p = 0; for (r = 0; r < t.length; r++)
                    if (n = e, e = t.charCodeAt(r), a) 39 === e && 92 !== n && (a = !1);
                    else if (c) 34 === e && 92 !== n && (c = !1);
                else if (s) 96 === e && 92 !== n && (s = !1);
                else if (l) 47 === e && 92 !== n && (l = !1);
                else if (124 !== e || 124 === t.charCodeAt(r + 1) || 124 === t.charCodeAt(r - 1) || u || f || d) { switch (e) {
                        case 34:
                            c = !0; break;
                        case 39:
                            a = !0; break;
                        case 96:
                            s = !0; break;
                        case 40:
                            d++; break;
                        case 41:
                            d--; break;
                        case 91:
                            f++; break;
                        case 93:
                            f--; break;
                        case 123:
                            u++; break;
                        case 125:
                            u-- } if (47 === e) { for (var h = r - 1, M = void 0; h >= 0 && " " === (M = t.charAt(h)); h--);
                        M && zr.test(M) || (l = !0) } } else void 0 === o ? (p = r + 1, o = t.slice(0, r).trim()) : b();

                function b() {
                    (i || (i = [])).push(t.slice(p, r).trim()), p = r + 1 } if (void 0 === o ? o = t.slice(0, r).trim() : 0 !== p && b(), i)
                    for (r = 0; r < i.length; r++) o = Or(o, i[r]); return o }

            function Or(t, e) { var n = e.indexOf("("); if (n < 0) return '_f("' + e + '")(' + t + ")"; var r = e.slice(0, n),
                    o = e.slice(n + 1); return '_f("' + r + '")(' + t + (")" !== o ? "," + o : o) }

            function xr(t, e) {}

            function Lr(t, e) { return t ? t.map((function(t) { return t[e] })).filter((function(t) { return t })) : [] }

            function Nr(t, e, n, r, o) {
                (t.props || (t.props = [])).push(Xr({ name: e, value: n, dynamic: o }, r)), t.plain = !1 }

            function wr(t, e, n, r, o) {
                (o ? t.dynamicAttrs || (t.dynamicAttrs = []) : t.attrs || (t.attrs = [])).push(Xr({ name: e, value: n, dynamic: o }, r)), t.plain = !1 }

            function Tr(t, e, n, r) { t.attrsMap[e] = n, t.attrsList.push(Xr({ name: e, value: n }, r)) }

            function qr(t, e, n, r, o, i, a, c) {
                (t.directives || (t.directives = [])).push(Xr({ name: e, rawName: n, value: r, arg: o, isDynamicArg: i, modifiers: a }, c)), t.plain = !1 }

            function Cr(t, e, n) { return n ? "_p(" + e + ',"' + t + '")' : t + e }

            function Wr(t, e, n, o, i, a, c, s) { var l;
                (o = o || r).right ? s ? e = "(" + e + ")==='click'?'contextmenu':(" + e + ")" : "click" === e && (e = "contextmenu", delete o.right) : o.middle && (s ? e = "(" + e + ")==='click'?'mouseup':(" + e + ")" : "click" === e && (e = "mouseup")), o.capture && (delete o.capture, e = Cr("!", e, s)), o.once && (delete o.once, e = Cr("~", e, s)), o.passive && (delete o.passive, e = Cr("&", e, s)), o.native ? (delete o.native, l = t.nativeEvents || (t.nativeEvents = {})) : l = t.events || (t.events = {}); var u = Xr({ value: n.trim(), dynamic: s }, c);
                o !== r && (u.modifiers = o); var f = l[e];
                Array.isArray(f) ? i ? f.unshift(u) : f.push(u) : l[e] = f ? i ? [u, f] : [f, u] : u, t.plain = !1 }

            function Sr(t, e, n) { var r = kr(t, ":" + e) || kr(t, "v-bind:" + e); if (null != r) return _r(r); if (!1 !== n) { var o = kr(t, e); if (null != o) return JSON.stringify(o) } }

            function kr(t, e, n) { var r; if (null != (r = t.attrsMap[e]))
                    for (var o = t.attrsList, i = 0, a = o.length; i < a; i++)
                        if (o[i].name === e) { o.splice(i, 1); break }
                return n && delete t.attrsMap[e], r }

            function Br(t, e) { for (var n = t.attrsList, r = 0, o = n.length; r < o; r++) { var i = n[r]; if (e.test(i.name)) return n.splice(r, 1), i } }

            function Xr(t, e) { return e && (null != e.start && (t.start = e.start), null != e.end && (t.end = e.end)), t }

            function Er(t, e, n) { var r = n || {},
                    o = r.number,
                    i = "$$v";
                r.trim && (i = "(typeof $$v === 'string'? $$v.trim(): $$v)"), o && (i = "_n(" + i + ")"); var a = Dr(e, i);
                t.model = { value: "(" + e + ")", expression: JSON.stringify(e), callback: "function ($$v) {" + a + "}" } }

            function Dr(t, e) { var n = function(t) { if (t = t.trim(), Mr = t.length, t.indexOf("[") < 0 || t.lastIndexOf("]") < Mr - 1) return (vr = t.lastIndexOf(".")) > -1 ? { exp: t.slice(0, vr), key: '"' + t.slice(vr + 1) + '"' } : { exp: t, key: null }; for (br = t, vr = gr = Ar = 0; !Pr();) Ir(mr = Rr()) ? Fr(mr) : 91 === mr && jr(mr); return { exp: t.slice(0, gr), key: t.slice(gr + 1, Ar) } }(t); return null === n.key ? t + "=" + e : "$set(" + n.exp + ", " + n.key + ", " + e + ")" }

            function Rr() { return br.charCodeAt(++vr) }

            function Pr() { return vr >= Mr }

            function Ir(t) { return 34 === t || 39 === t }

            function jr(t) { var e = 1; for (gr = vr; !Pr();)
                    if (Ir(t = Rr())) Fr(t);
                    else if (91 === t && e++, 93 === t && e--, 0 === e) { Ar = vr; break } }

            function Fr(t) { for (var e = t; !Pr() && (t = Rr()) !== e;); } var Hr, Ur = "__r";

            function Vr(t, e, n) { var r = Hr; return function o() { null !== e.apply(null, arguments) && Gr(t, o, n, r) } } var $r = $t && !(tt && Number(tt[1]) <= 53);

            function Yr(t, e, n, r) { if ($r) { var o = cn,
                        i = e;
                    e = i._wrapper = function(t) { if (t.target === t.currentTarget || t.timeStamp >= o || t.timeStamp <= 0 || t.target.ownerDocument !== document) return i.apply(this, arguments) } }
                Hr.addEventListener(t, e, nt ? { capture: n, passive: r } : n) }

            function Gr(t, e, n, r) {
                (r || Hr).removeEventListener(t, e._wrapper || e, n) }

            function Kr(t, e) { if (!o(t.data.on) || !o(e.data.on)) { var n = e.data.on || {},
                        r = t.data.on || {};
                    Hr = e.elm,
                        function(t) { if (i(t.__r)) { var e = K ? "change" : "input";
                                t[e] = [].concat(t.__r, t[e] || []), delete t.__r }
                            i(t.__c) && (t.change = [].concat(t.__c, t.change || []), delete t.__c) }(n), ae(n, r, Yr, Gr, Vr, e.context), Hr = void 0 } } var Jr, Qr = { create: Kr, update: Kr };

            function Zr(t, e) { if (!o(t.data.domProps) || !o(e.data.domProps)) { var n, r, a = e.elm,
                        c = t.data.domProps || {},
                        s = e.data.domProps || {}; for (n in i(s.__ob__) && (s = e.data.domProps = T({}, s)), c) n in s || (a[n] = ""); for (n in s) { if (r = s[n], "textContent" === n || "innerHTML" === n) { if (e.children && (e.children.length = 0), r === c[n]) continue;
                            1 === a.childNodes.length && a.removeChild(a.childNodes[0]) } if ("value" === n && "PROGRESS" !== a.tagName) { a._value = r; var l = o(r) ? "" : String(r);
                            to(a, l) && (a.value = l) } else if ("innerHTML" === n && Hn(a.tagName) && o(a.innerHTML)) {
                            (Jr = Jr || document.createElement("div")).innerHTML = "<svg>" + r + "</svg>"; for (var u = Jr.firstChild; a.firstChild;) a.removeChild(a.firstChild); for (; u.firstChild;) a.appendChild(u.firstChild) } else if (r !== c[n]) try { a[n] = r } catch (t) {} } } }

            function to(t, e) { return !t.composing && ("OPTION" === t.tagName || function(t, e) { var n = !0; try { n = document.activeElement !== t } catch (t) {} return n && t.value !== e }(t, e) || function(t, e) { var n = t.value,
                        r = t._vModifiers; if (i(r)) { if (r.number) return h(n) !== h(e); if (r.trim) return n.trim() !== e.trim() } return n !== e }(t, e)) } var eo = { create: Zr, update: Zr },
                no = y((function(t) { var e = {},
                        n = /:(.+)/; return t.split(/;(?![^(]*\))/g).forEach((function(t) { if (t) { var r = t.split(n);
                            r.length > 1 && (e[r[0].trim()] = r[1].trim()) } })), e }));

            function ro(t) { var e = oo(t.style); return t.staticStyle ? T(t.staticStyle, e) : e }

            function oo(t) { return Array.isArray(t) ? q(t) : "string" == typeof t ? no(t) : t } var io, ao = /^--/,
                co = /\s*!important$/,
                so = function(t, e, n) { if (ao.test(e)) t.style.setProperty(e, n);
                    else if (co.test(n)) t.style.setProperty(L(e), n.replace(co, ""), "important");
                    else { var r = uo(e); if (Array.isArray(n))
                            for (var o = 0, i = n.length; o < i; o++) t.style[r] = n[o];
                        else t.style[r] = n } },
                lo = ["Webkit", "Moz", "ms"],
                uo = y((function(t) { if (io = io || document.createElement("div").style, "filter" !== (t = _(t)) && t in io) return t; for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < lo.length; n++) { var r = lo[n] + e; if (r in io) return r } }));

            function fo(t, e) { var n = e.data,
                    r = t.data; if (!(o(n.staticStyle) && o(n.style) && o(r.staticStyle) && o(r.style))) { var a, c, s = e.elm,
                        l = r.staticStyle,
                        u = r.normalizedStyle || r.style || {},
                        f = l || u,
                        d = oo(e.data.style) || {};
                    e.data.normalizedStyle = i(d.__ob__) ? T({}, d) : d; var p = function(t, e) { for (var n, r = {}, o = t; o.componentInstance;)(o = o.componentInstance._vnode) && o.data && (n = ro(o.data)) && T(r, n);
                        (n = ro(t.data)) && T(r, n); for (var i = t; i = i.parent;) i.data && (n = ro(i.data)) && T(r, n); return r }(e); for (c in f) o(p[c]) && so(s, c, ""); for (c in p)(a = p[c]) !== f[c] && so(s, c, null == a ? "" : a) } } var po = { create: fo, update: fo },
                ho = /\s+/;

            function Mo(t, e) { if (e && (e = e.trim()))
                    if (t.classList) e.indexOf(" ") > -1 ? e.split(ho).forEach((function(e) { return t.classList.add(e) })) : t.classList.add(e);
                    else { var n = " " + (t.getAttribute("class") || "") + " ";
                        n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim()) } }

            function bo(t, e) { if (e && (e = e.trim()))
                    if (t.classList) e.indexOf(" ") > -1 ? e.split(ho).forEach((function(e) { return t.classList.remove(e) })) : t.classList.remove(e), t.classList.length || t.removeAttribute("class");
                    else { for (var n = " " + (t.getAttribute("class") || "") + " ", r = " " + e + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
                        (n = n.trim()) ? t.setAttribute("class", n): t.removeAttribute("class") } }

            function mo(t) { if (t) { if ("object" == typeof t) { var e = {}; return !1 !== t.css && T(e, vo(t.name || "v")), T(e, t), e } return "string" == typeof t ? vo(t) : void 0 } } var vo = y((function(t) { return { enterClass: t + "-enter", enterToClass: t + "-enter-to", enterActiveClass: t + "-enter-active", leaveClass: t + "-leave", leaveToClass: t + "-leave-to", leaveActiveClass: t + "-leave-active" } })),
                go = V && !J,
                Ao = "transition",
                yo = "animation",
                zo = "transition",
                _o = "transitionend",
                Oo = "animation",
                xo = "animationend";
            go && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (zo = "WebkitTransition", _o = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Oo = "WebkitAnimation", xo = "webkitAnimationEnd")); var Lo = V ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(t) { return t() };

            function No(t) { Lo((function() { Lo(t) })) }

            function wo(t, e) { var n = t._transitionClasses || (t._transitionClasses = []);
                n.indexOf(e) < 0 && (n.push(e), Mo(t, e)) }

            function To(t, e) { t._transitionClasses && v(t._transitionClasses, e), bo(t, e) }

            function qo(t, e, n) { var r = Wo(t, e),
                    o = r.type,
                    i = r.timeout,
                    a = r.propCount; if (!o) return n(); var c = o === Ao ? _o : xo,
                    s = 0,
                    l = function() { t.removeEventListener(c, u), n() },
                    u = function(e) { e.target === t && ++s >= a && l() };
                setTimeout((function() { s < a && l() }), i + 1), t.addEventListener(c, u) } var Co = /\b(transform|all)(,|$)/;

            function Wo(t, e) { var n, r = window.getComputedStyle(t),
                    o = (r[zo + "Delay"] || "").split(", "),
                    i = (r[zo + "Duration"] || "").split(", "),
                    a = So(o, i),
                    c = (r[Oo + "Delay"] || "").split(", "),
                    s = (r[Oo + "Duration"] || "").split(", "),
                    l = So(c, s),
                    u = 0,
                    f = 0; return e === Ao ? a > 0 && (n = Ao, u = a, f = i.length) : e === yo ? l > 0 && (n = yo, u = l, f = s.length) : f = (n = (u = Math.max(a, l)) > 0 ? a > l ? Ao : yo : null) ? n === Ao ? i.length : s.length : 0, { type: n, timeout: u, propCount: f, hasTransform: n === Ao && Co.test(r[zo + "Property"]) } }

            function So(t, e) { for (; t.length < e.length;) t = t.concat(t); return Math.max.apply(null, e.map((function(e, n) { return ko(e) + ko(t[n]) }))) }

            function ko(t) { return 1e3 * Number(t.slice(0, -1).replace(",", ".")) }

            function Bo(t, e) { var n = t.elm;
                i(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb()); var r = mo(t.data.transition); if (!o(r) && !i(n._enterCb) && 1 === n.nodeType) { for (var a = r.css, c = r.type, l = r.enterClass, u = r.enterToClass, f = r.enterActiveClass, d = r.appearClass, p = r.appearToClass, M = r.appearActiveClass, b = r.beforeEnter, m = r.enter, v = r.afterEnter, g = r.enterCancelled, A = r.beforeAppear, y = r.appear, z = r.afterAppear, _ = r.appearCancelled, O = r.duration, x = Ge, L = Ge.$vnode; L && L.parent;) x = L.context, L = L.parent; var N = !x._isMounted || !t.isRootInsert; if (!N || y || "" === y) { var w = N && d ? d : l,
                            T = N && M ? M : f,
                            q = N && p ? p : u,
                            C = N && A || b,
                            W = N && "function" == typeof y ? y : m,
                            S = N && z || v,
                            k = N && _ || g,
                            B = h(s(O) ? O.enter : O),
                            E = !1 !== a && !J,
                            D = Do(W),
                            R = n._enterCb = X((function() { E && (To(n, q), To(n, T)), R.cancelled ? (E && To(n, w), k && k(n)) : S && S(n), n._enterCb = null }));
                        t.data.show || ce(t, "insert", (function() { var e = n.parentNode,
                                r = e && e._pending && e._pending[t.key];
                            r && r.tag === t.tag && r.elm._leaveCb && r.elm._leaveCb(), W && W(n, R) })), C && C(n), E && (wo(n, w), wo(n, T), No((function() { To(n, w), R.cancelled || (wo(n, q), D || (Eo(B) ? setTimeout(R, B) : qo(n, c, R))) }))), t.data.show && (e && e(), W && W(n, R)), E || D || R() } } }

            function Xo(t, e) { var n = t.elm;
                i(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb()); var r = mo(t.data.transition); if (o(r) || 1 !== n.nodeType) return e(); if (!i(n._leaveCb)) { var a = r.css,
                        c = r.type,
                        l = r.leaveClass,
                        u = r.leaveToClass,
                        f = r.leaveActiveClass,
                        d = r.beforeLeave,
                        p = r.leave,
                        M = r.afterLeave,
                        b = r.leaveCancelled,
                        m = r.delayLeave,
                        v = r.duration,
                        g = !1 !== a && !J,
                        A = Do(p),
                        y = h(s(v) ? v.leave : v),
                        z = n._leaveCb = X((function() { n.parentNode && n.parentNode._pending && (n.parentNode._pending[t.key] = null), g && (To(n, u), To(n, f)), z.cancelled ? (g && To(n, l), b && b(n)) : (e(), M && M(n)), n._leaveCb = null }));
                    m ? m(_) : _() }

                function _() { z.cancelled || (!t.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[t.key] = t), d && d(n), g && (wo(n, l), wo(n, f), No((function() { To(n, l), z.cancelled || (wo(n, u), A || (Eo(y) ? setTimeout(z, y) : qo(n, c, z))) }))), p && p(n, z), g || A || z()) } }

            function Eo(t) { return "number" == typeof t && !isNaN(t) }

            function Do(t) { if (o(t)) return !1; var e = t.fns; return i(e) ? Do(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1 }

            function Ro(t, e) {!0 !== e.data.show && Bo(e) } var Po = function(t) { var e, n, r = {},
                    s = t.modules,
                    l = t.nodeOps; for (e = 0; e < tr.length; ++e)
                    for (r[tr[e]] = [], n = 0; n < s.length; ++n) i(s[n][tr[e]]) && r[tr[e]].push(s[n][tr[e]]);

                function u(t) { var e = l.parentNode(t);
                    i(e) && l.removeChild(e, t) }

                function f(t, e, n, o, c, s, u) { if (i(t.elm) && i(s) && (t = s[u] = gt(t)), t.isRootInsert = !c, ! function(t, e, n, o) { var c = t.data; if (i(c)) { var s = i(t.componentInstance) && c.keepAlive; if (i(c = c.hook) && i(c = c.init) && c(t, !1), i(t.componentInstance)) return d(t, e), p(n, t.elm, o), a(s) && function(t, e, n, o) { for (var a, c = t; c.componentInstance;)
                                        if (i(a = (c = c.componentInstance._vnode).data) && i(a = a.transition)) { for (a = 0; a < r.activate.length; ++a) r.activate[a](Zn, c);
                                            e.push(c); break }
                                    p(n, t.elm, o) }(t, e, n, o), !0 } }(t, e, n, o)) { var f = t.data,
                            M = t.children,
                            b = t.tag;
                        i(b) ? (t.elm = t.ns ? l.createElementNS(t.ns, b) : l.createElement(b, t), v(t), h(t, M, e), i(f) && m(t, e), p(n, t.elm, o)) : a(t.isComment) ? (t.elm = l.createComment(t.text), p(n, t.elm, o)) : (t.elm = l.createTextNode(t.text), p(n, t.elm, o)) } }

                function d(t, e) { i(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), t.elm = t.componentInstance.$el, b(t) ? (m(t, e), v(t)) : (Qn(t), e.push(t)) }

                function p(t, e, n) { i(t) && (i(n) ? l.parentNode(n) === t && l.insertBefore(t, e, n) : l.appendChild(t, e)) }

                function h(t, e, n) { if (Array.isArray(e))
                        for (var r = 0; r < e.length; ++r) f(e[r], n, t.elm, null, !0, e, r);
                    else c(t.text) && l.appendChild(t.elm, l.createTextNode(String(t.text))) }

                function b(t) { for (; t.componentInstance;) t = t.componentInstance._vnode; return i(t.tag) }

                function m(t, n) { for (var o = 0; o < r.create.length; ++o) r.create[o](Zn, t);
                    i(e = t.data.hook) && (i(e.create) && e.create(Zn, t), i(e.insert) && n.push(t)) }

                function v(t) { var e; if (i(e = t.fnScopeId)) l.setStyleScope(t.elm, e);
                    else
                        for (var n = t; n;) i(e = n.context) && i(e = e.$options._scopeId) && l.setStyleScope(t.elm, e), n = n.parent;
                    i(e = Ge) && e !== t.context && e !== t.fnContext && i(e = e.$options._scopeId) && l.setStyleScope(t.elm, e) }

                function g(t, e, n, r, o, i) { for (; r <= o; ++r) f(n[r], i, t, e, !1, n, r) }

                function A(t) { var e, n, o = t.data; if (i(o))
                        for (i(e = o.hook) && i(e = e.destroy) && e(t), e = 0; e < r.destroy.length; ++e) r.destroy[e](t); if (i(e = t.children))
                        for (n = 0; n < t.children.length; ++n) A(t.children[n]) }

                function y(t, e, n) { for (; e <= n; ++e) { var r = t[e];
                        i(r) && (i(r.tag) ? (z(r), A(r)) : u(r.elm)) } }

                function z(t, e) { if (i(e) || i(t.data)) { var n, o = r.remove.length + 1; for (i(e) ? e.listeners += o : e = function(t, e) {
                                function n() { 0 == --n.listeners && u(t) } return n.listeners = e, n }(t.elm, o), i(n = t.componentInstance) && i(n = n._vnode) && i(n.data) && z(n, e), n = 0; n < r.remove.length; ++n) r.remove[n](t, e);
                        i(n = t.data.hook) && i(n = n.remove) ? n(t, e) : e() } else u(t.elm) }

                function _(t, e, n, r) { for (var o = n; o < r; o++) { var a = e[o]; if (i(a) && er(t, a)) return o } }

                function O(t, e, n, c, s, u) { if (t !== e) { i(e.elm) && i(c) && (e = c[s] = gt(e)); var d = e.elm = t.elm; if (a(t.isAsyncPlaceholder)) i(e.asyncFactory.resolved) ? N(t.elm, e, n) : e.isAsyncPlaceholder = !0;
                        else if (a(e.isStatic) && a(t.isStatic) && e.key === t.key && (a(e.isCloned) || a(e.isOnce))) e.componentInstance = t.componentInstance;
                        else { var p, h = e.data;
                            i(h) && i(p = h.hook) && i(p = p.prepatch) && p(t, e); var M = t.children,
                                m = e.children; if (i(h) && b(e)) { for (p = 0; p < r.update.length; ++p) r.update[p](t, e);
                                i(p = h.hook) && i(p = p.update) && p(t, e) }
                            o(e.text) ? i(M) && i(m) ? M !== m && function(t, e, n, r, a) { for (var c, s, u, d = 0, p = 0, h = e.length - 1, M = e[0], b = e[h], m = n.length - 1, v = n[0], A = n[m], z = !a; d <= h && p <= m;) o(M) ? M = e[++d] : o(b) ? b = e[--h] : er(M, v) ? (O(M, v, r, n, p), M = e[++d], v = n[++p]) : er(b, A) ? (O(b, A, r, n, m), b = e[--h], A = n[--m]) : er(M, A) ? (O(M, A, r, n, m), z && l.insertBefore(t, M.elm, l.nextSibling(b.elm)), M = e[++d], A = n[--m]) : er(b, v) ? (O(b, v, r, n, p), z && l.insertBefore(t, b.elm, M.elm), b = e[--h], v = n[++p]) : (o(c) && (c = nr(e, d, h)), o(s = i(v.key) ? c[v.key] : _(v, e, d, h)) ? f(v, r, t, M.elm, !1, n, p) : er(u = e[s], v) ? (O(u, v, r, n, p), e[s] = void 0, z && l.insertBefore(t, u.elm, M.elm)) : f(v, r, t, M.elm, !1, n, p), v = n[++p]);
                                d > h ? g(t, o(n[m + 1]) ? null : n[m + 1].elm, n, p, m, r) : p > m && y(e, d, h) }(d, M, m, n, u) : i(m) ? (i(t.text) && l.setTextContent(d, ""), g(d, null, m, 0, m.length - 1, n)) : i(M) ? y(M, 0, M.length - 1) : i(t.text) && l.setTextContent(d, "") : t.text !== e.text && l.setTextContent(d, e.text), i(h) && i(p = h.hook) && i(p = p.postpatch) && p(t, e) } } }

                function x(t, e, n) { if (a(n) && i(t.parent)) t.parent.data.pendingInsert = e;
                    else
                        for (var r = 0; r < e.length; ++r) e[r].data.hook.insert(e[r]) } var L = M("attrs,class,staticClass,staticStyle,key");

                function N(t, e, n, r) { var o, c = e.tag,
                        s = e.data,
                        l = e.children; if (r = r || s && s.pre, e.elm = t, a(e.isComment) && i(e.asyncFactory)) return e.isAsyncPlaceholder = !0, !0; if (i(s) && (i(o = s.hook) && i(o = o.init) && o(e, !0), i(o = e.componentInstance))) return d(e, n), !0; if (i(c)) { if (i(l))
                            if (t.hasChildNodes())
                                if (i(o = s) && i(o = o.domProps) && i(o = o.innerHTML)) { if (o !== t.innerHTML) return !1 } else { for (var u = !0, f = t.firstChild, p = 0; p < l.length; p++) { if (!f || !N(f, l[p], n, r)) { u = !1; break }
                                        f = f.nextSibling } if (!u || f) return !1 }
                        else h(e, l, n); if (i(s)) { var M = !1; for (var b in s)
                                if (!L(b)) { M = !0, m(e, n); break }!M && s.class && re(s.class) } } else t.data !== e.text && (t.data = e.text); return !0 } return function(t, e, n, c) { if (!o(e)) { var s, u = !1,
                            d = []; if (o(t)) u = !0, f(e, d);
                        else { var p = i(t.nodeType); if (!p && er(t, e)) O(t, e, d, null, null, c);
                            else { if (p) { if (1 === t.nodeType && t.hasAttribute(E) && (t.removeAttribute(E), n = !0), a(n) && N(t, e, d)) return x(e, d, !0), t;
                                    s = t, t = new Mt(l.tagName(s).toLowerCase(), {}, [], void 0, s) } var h = t.elm,
                                    M = l.parentNode(h); if (f(e, d, h._leaveCb ? null : M, l.nextSibling(h)), i(e.parent))
                                    for (var m = e.parent, v = b(e); m;) { for (var g = 0; g < r.destroy.length; ++g) r.destroy[g](m); if (m.elm = e.elm, v) { for (var z = 0; z < r.create.length; ++z) r.create[z](Zn, m); var _ = m.data.hook.insert; if (_.merged)
                                                for (var L = 1; L < _.fns.length; L++) _.fns[L]() } else Qn(m);
                                        m = m.parent }
                                i(M) ? y([t], 0, 0) : i(t.tag) && A(t) } } return x(e, d, u), e.elm }
                    i(t) && A(t) } }({ nodeOps: Kn, modules: [pr, yr, Qr, eo, po, V ? { create: Ro, activate: Ro, remove: function(t, e) {!0 !== t.data.show ? Xo(t, e) : e() } } : {}].concat(lr) });
            J && document.addEventListener("selectionchange", (function() { var t = document.activeElement;
                t && t.vmodel && Yo(t, "input") })); var Io = { inserted: function(t, e, n, r) { "select" === n.tag ? (r.elm && !r.elm._vOptions ? ce(n, "postpatch", (function() { Io.componentUpdated(t, e, n) })) : jo(t, e, n.context), t._vOptions = [].map.call(t.options, Uo)) : ("textarea" === n.tag || Yn(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("compositionstart", Vo), t.addEventListener("compositionend", $o), t.addEventListener("change", $o), J && (t.vmodel = !0))) }, componentUpdated: function(t, e, n) { if ("select" === n.tag) { jo(t, e, n.context); var r = t._vOptions,
                            o = t._vOptions = [].map.call(t.options, Uo);
                        o.some((function(t, e) { return !k(t, r[e]) })) && (t.multiple ? e.value.some((function(t) { return Ho(t, o) })) : e.value !== e.oldValue && Ho(e.value, o)) && Yo(t, "change") } } };

            function jo(t, e, n) { Fo(t, e, n), (K || Q) && setTimeout((function() { Fo(t, e, n) }), 0) }

            function Fo(t, e, n) { var r = e.value,
                    o = t.multiple; if (!o || Array.isArray(r)) { for (var i, a, c = 0, s = t.options.length; c < s; c++)
                        if (a = t.options[c], o) i = B(r, Uo(a)) > -1, a.selected !== i && (a.selected = i);
                        else if (k(Uo(a), r)) return void(t.selectedIndex !== c && (t.selectedIndex = c));
                    o || (t.selectedIndex = -1) } }

            function Ho(t, e) { return e.every((function(e) { return !k(e, t) })) }

            function Uo(t) { return "_value" in t ? t._value : t.value }

            function Vo(t) { t.target.composing = !0 }

            function $o(t) { t.target.composing && (t.target.composing = !1, Yo(t.target, "input")) }

            function Yo(t, e) { var n = document.createEvent("HTMLEvents");
                n.initEvent(e, !0, !0), t.dispatchEvent(n) }

            function Go(t) { return !t.componentInstance || t.data && t.data.transition ? t : Go(t.componentInstance._vnode) } var Ko = { model: Io, show: { bind: function(t, e, n) { var r = e.value,
                                o = (n = Go(n)).data && n.data.transition,
                                i = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                            r && o ? (n.data.show = !0, Bo(n, (function() { t.style.display = i }))) : t.style.display = r ? i : "none" }, update: function(t, e, n) { var r = e.value;!r != !e.oldValue && ((n = Go(n)).data && n.data.transition ? (n.data.show = !0, r ? Bo(n, (function() { t.style.display = t.__vOriginalDisplay })) : Xo(n, (function() { t.style.display = "none" }))) : t.style.display = r ? t.__vOriginalDisplay : "none") }, unbind: function(t, e, n, r, o) { o || (t.style.display = t.__vOriginalDisplay) } } },
                Jo = { name: String, appear: Boolean, css: Boolean, mode: String, type: String, enterClass: String, leaveClass: String, enterToClass: String, leaveToClass: String, enterActiveClass: String, leaveActiveClass: String, appearClass: String, appearActiveClass: String, appearToClass: String, duration: [Number, String, Object] };

            function Qo(t) { var e = t && t.componentOptions; return e && e.Ctor.options.abstract ? Qo(He(e.children)) : t }

            function Zo(t) { var e = {},
                    n = t.$options; for (var r in n.propsData) e[r] = t[r]; var o = n._parentListeners; for (var i in o) e[_(i)] = o[i]; return e }

            function ti(t, e) { if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", { props: e.componentOptions.propsData }) } var ei = function(t) { return t.tag || Fe(t) },
                ni = function(t) { return "show" === t.name },
                ri = { name: "transition", props: Jo, abstract: !0, render: function(t) { var e = this,
                            n = this.$slots.default; if (n && (n = n.filter(ei)).length) { var r = this.mode,
                                o = n[0]; if (function(t) { for (; t = t.parent;)
                                        if (t.data.transition) return !0 }(this.$vnode)) return o; var i = Qo(o); if (!i) return o; if (this._leaving) return ti(t, o); var a = "__transition-" + this._uid + "-";
                            i.key = null == i.key ? i.isComment ? a + "comment" : a + i.tag : c(i.key) ? 0 === String(i.key).indexOf(a) ? i.key : a + i.key : i.key; var s = (i.data || (i.data = {})).transition = Zo(this),
                                l = this._vnode,
                                u = Qo(l); if (i.data.directives && i.data.directives.some(ni) && (i.data.show = !0), u && u.data && ! function(t, e) { return e.key === t.key && e.tag === t.tag }(i, u) && !Fe(u) && (!u.componentInstance || !u.componentInstance._vnode.isComment)) { var f = u.data.transition = T({}, s); if ("out-in" === r) return this._leaving = !0, ce(f, "afterLeave", (function() { e._leaving = !1, e.$forceUpdate() })), ti(t, o); if ("in-out" === r) { if (Fe(i)) return l; var d, p = function() { d() };
                                    ce(s, "afterEnter", p), ce(s, "enterCancelled", p), ce(f, "delayLeave", (function(t) { d = t })) } } return o } } },
                oi = T({ tag: String, moveClass: String }, Jo);

            function ii(t) { t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb() }

            function ai(t) { t.data.newPos = t.elm.getBoundingClientRect() }

            function ci(t) { var e = t.data.pos,
                    n = t.data.newPos,
                    r = e.left - n.left,
                    o = e.top - n.top; if (r || o) { t.data.moved = !0; var i = t.elm.style;
                    i.transform = i.WebkitTransform = "translate(" + r + "px," + o + "px)", i.transitionDuration = "0s" } }
            delete oi.mode; var si = { Transition: ri, TransitionGroup: { props: oi, beforeMount: function() { var t = this,
                            e = this._update;
                        this._update = function(n, r) { var o = Ke(t);
                            t.__patch__(t._vnode, t.kept, !1, !0), t._vnode = t.kept, o(), e.call(t, n, r) } }, render: function(t) { for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, o = this.$slots.default || [], i = this.children = [], a = Zo(this), c = 0; c < o.length; c++) { var s = o[c];
                            s.tag && null != s.key && 0 !== String(s.key).indexOf("__vlist") && (i.push(s), n[s.key] = s, (s.data || (s.data = {})).transition = a) } if (r) { for (var l = [], u = [], f = 0; f < r.length; f++) { var d = r[f];
                                d.data.transition = a, d.data.pos = d.elm.getBoundingClientRect(), n[d.key] ? l.push(d) : u.push(d) }
                            this.kept = t(e, null, l), this.removed = u } return t(e, null, i) }, updated: function() { var t = this.prevChildren,
                            e = this.moveClass || (this.name || "v") + "-move";
                        t.length && this.hasMove(t[0].elm, e) && (t.forEach(ii), t.forEach(ai), t.forEach(ci), this._reflow = document.body.offsetHeight, t.forEach((function(t) { if (t.data.moved) { var n = t.elm,
                                    r = n.style;
                                wo(n, e), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(_o, n._moveCb = function t(r) { r && r.target !== n || r && !/transform$/.test(r.propertyName) || (n.removeEventListener(_o, t), n._moveCb = null, To(n, e)) }) } }))) }, methods: { hasMove: function(t, e) { if (!go) return !1; if (this._hasMove) return this._hasMove; var n = t.cloneNode();
                            t._transitionClasses && t._transitionClasses.forEach((function(t) { bo(n, t) })), Mo(n, e), n.style.display = "none", this.$el.appendChild(n); var r = Wo(n); return this.$el.removeChild(n), this._hasMove = r.hasTransform } } } };
            zn.config.mustUseProp = Cn, zn.config.isReservedTag = Un, zn.config.isReservedAttr = Tn, zn.config.getTagNamespace = Vn, zn.config.isUnknownElement = function(t) { if (!V) return !0; if (Un(t)) return !1; if (t = t.toLowerCase(), null != $n[t]) return $n[t]; var e = document.createElement(t); return t.indexOf("-") > -1 ? $n[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : $n[t] = /HTMLUnknownElement/.test(e.toString()) }, T(zn.options.directives, Ko), T(zn.options.components, si), zn.prototype.__patch__ = V ? Po : C, zn.prototype.$mount = function(t, e) { return function(t, e, n) { var r; return t.$el = e, t.$options.render || (t.$options.render = mt), Ze(t, "beforeMount"), r = function() { t._update(t._render(), n) }, new dn(t, r, C, { before: function() { t._isMounted && !t._isDestroyed && Ze(t, "beforeUpdate") } }, !0), n = !1, null == t.$vnode && (t._isMounted = !0, Ze(t, "mounted")), t }(this, t = t && V ? Gn(t) : void 0, e) }, V && setTimeout((function() { P.devtools && it && it.emit("init", zn) }), 0); var li, ui = /\{\{((?:.|\r?\n)+?)\}\}/g,
                fi = /[-.*+?^${}()|[\]\/\\]/g,
                di = y((function(t) { var e = t[0].replace(fi, "\\$&"),
                        n = t[1].replace(fi, "\\$&"); return new RegExp(e + "((?:.|\\n)+?)" + n, "g") })),
                pi = { staticKeys: ["staticClass"], transformNode: function(t, e) { e.warn; var n = kr(t, "class");
                        n && (t.staticClass = JSON.stringify(n)); var r = Sr(t, "class", !1);
                        r && (t.classBinding = r) }, genData: function(t) { var e = ""; return t.staticClass && (e += "staticClass:" + t.staticClass + ","), t.classBinding && (e += "class:" + t.classBinding + ","), e } },
                hi = { staticKeys: ["staticStyle"], transformNode: function(t, e) { e.warn; var n = kr(t, "style");
                        n && (t.staticStyle = JSON.stringify(no(n))); var r = Sr(t, "style", !1);
                        r && (t.styleBinding = r) }, genData: function(t) { var e = ""; return t.staticStyle && (e += "staticStyle:" + t.staticStyle + ","), t.styleBinding && (e += "style:(" + t.styleBinding + "),"), e } },
                Mi = M("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
                bi = M("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
                mi = M("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
                vi = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
                gi = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
                Ai = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + I.source + "]*",
                yi = "((?:" + Ai + "\\:)?" + Ai + ")",
                zi = new RegExp("^<" + yi),
                _i = /^\s*(\/?)>/,
                Oi = new RegExp("^<\\/" + yi + "[^>]*>"),
                xi = /^<!DOCTYPE [^>]+>/i,
                Li = /^<!\--/,
                Ni = /^<!\[/,
                wi = M("script,style,textarea", !0),
                Ti = {},
                qi = { "&lt;": "<", "&gt;": ">", "&quot;": '"', "&amp;": "&", "&#10;": "\n", "&#9;": "\t", "&#39;": "'" },
                Ci = /&(?:lt|gt|quot|amp|#39);/g,
                Wi = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
                Si = M("pre,textarea", !0),
                ki = function(t, e) { return t && Si(t) && "\n" === e[0] };

            function Bi(t, e) { var n = e ? Wi : Ci; return t.replace(n, (function(t) { return qi[t] })) } var Xi, Ei, Di, Ri, Pi, Ii, ji, Fi, Hi = /^@|^v-on:/,
                Ui = /^v-|^@|^:|^#/,
                Vi = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
                $i = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
                Yi = /^\(|\)$/g,
                Gi = /^\[.*\]$/,
                Ki = /:(.*)$/,
                Ji = /^:|^\.|^v-bind:/,
                Qi = /\.[^.\]]+(?=[^\]]*$)/g,
                Zi = /^v-slot(:|$)|^#/,
                ta = /[\r\n]/,
                ea = /\s+/g,
                na = y((function(t) { return (li = li || document.createElement("div")).innerHTML = t, li.textContent })),
                ra = "_empty_";

            function oa(t, e, n) { return { type: 1, tag: t, attrsList: e, attrsMap: ua(e), rawAttrsMap: {}, parent: n, children: [] } }

            function ia(t, e) { var n, r;
                (r = Sr(n = t, "key")) && (n.key = r), t.plain = !t.key && !t.scopedSlots && !t.attrsList.length,
                    function(t) { var e = Sr(t, "ref");
                        e && (t.ref = e, t.refInFor = function(t) { for (var e = t; e;) { if (void 0 !== e.for) return !0;
                                e = e.parent } return !1 }(t)) }(t),
                    function(t) { var e; "template" === t.tag ? (e = kr(t, "scope"), t.slotScope = e || kr(t, "slot-scope")) : (e = kr(t, "slot-scope")) && (t.slotScope = e); var n = Sr(t, "slot"); if (n && (t.slotTarget = '""' === n ? '"default"' : n, t.slotTargetDynamic = !(!t.attrsMap[":slot"] && !t.attrsMap["v-bind:slot"]), "template" === t.tag || t.slotScope || wr(t, "slot", n, function(t, e) { return t.rawAttrsMap[":" + e] || t.rawAttrsMap["v-bind:" + e] || t.rawAttrsMap[e] }(t, "slot"))), "template" === t.tag) { var r = Br(t, Zi); if (r) { var o = sa(r),
                                    i = o.name,
                                    a = o.dynamic;
                                t.slotTarget = i, t.slotTargetDynamic = a, t.slotScope = r.value || ra } } else { var c = Br(t, Zi); if (c) { var s = t.scopedSlots || (t.scopedSlots = {}),
                                    l = sa(c),
                                    u = l.name,
                                    f = l.dynamic,
                                    d = s[u] = oa("template", [], t);
                                d.slotTarget = u, d.slotTargetDynamic = f, d.children = t.children.filter((function(t) { if (!t.slotScope) return t.parent = d, !0 })), d.slotScope = c.value || ra, t.children = [], t.plain = !1 } } }(t),
                    function(t) { "slot" === t.tag && (t.slotName = Sr(t, "name")) }(t),
                    function(t) { var e;
                        (e = Sr(t, "is")) && (t.component = e), null != kr(t, "inline-template") && (t.inlineTemplate = !0) }(t); for (var o = 0; o < Di.length; o++) t = Di[o](t, e) || t; return function(t) { var e, n, r, o, i, a, c, s, l = t.attrsList; for (e = 0, n = l.length; e < n; e++)
                        if (r = o = l[e].name, i = l[e].value, Ui.test(r))
                            if (t.hasBindings = !0, (a = la(r.replace(Ui, ""))) && (r = r.replace(Qi, "")), Ji.test(r)) r = r.replace(Ji, ""), i = _r(i), (s = Gi.test(r)) && (r = r.slice(1, -1)), a && (a.prop && !s && "innerHtml" === (r = _(r)) && (r = "innerHTML"), a.camel && !s && (r = _(r)), a.sync && (c = Dr(i, "$event"), s ? Wr(t, '"update:"+(' + r + ")", c, null, !1, 0, l[e], !0) : (Wr(t, "update:" + _(r), c, null, !1, 0, l[e]), L(r) !== _(r) && Wr(t, "update:" + L(r), c, null, !1, 0, l[e])))), a && a.prop || !t.component && ji(t.tag, t.attrsMap.type, r) ? Nr(t, r, i, l[e], s) : wr(t, r, i, l[e], s);
                            else if (Hi.test(r)) r = r.replace(Hi, ""), (s = Gi.test(r)) && (r = r.slice(1, -1)), Wr(t, r, i, a, !1, 0, l[e], s);
                    else { var u = (r = r.replace(Ui, "")).match(Ki),
                            f = u && u[1];
                        s = !1, f && (r = r.slice(0, -(f.length + 1)), Gi.test(f) && (f = f.slice(1, -1), s = !0)), qr(t, r, o, i, f, s, a, l[e]) } else wr(t, r, JSON.stringify(i), l[e]), !t.component && "muted" === r && ji(t.tag, t.attrsMap.type, r) && Nr(t, r, "true", l[e]) }(t), t }

            function aa(t) { var e; if (e = kr(t, "v-for")) { var n = function(t) { var e = t.match(Vi); if (e) { var n = {};
                            n.for = e[2].trim(); var r = e[1].trim().replace(Yi, ""),
                                o = r.match($i); return o ? (n.alias = r.replace($i, "").trim(), n.iterator1 = o[1].trim(), o[2] && (n.iterator2 = o[2].trim())) : n.alias = r, n } }(e);
                    n && T(t, n) } }

            function ca(t, e) { t.ifConditions || (t.ifConditions = []), t.ifConditions.push(e) }

            function sa(t) { var e = t.name.replace(Zi, ""); return e || "#" !== t.name[0] && (e = "default"), Gi.test(e) ? { name: e.slice(1, -1), dynamic: !0 } : { name: '"' + e + '"', dynamic: !1 } }

            function la(t) { var e = t.match(Qi); if (e) { var n = {}; return e.forEach((function(t) { n[t.slice(1)] = !0 })), n } }

            function ua(t) { for (var e = {}, n = 0, r = t.length; n < r; n++) e[t[n].name] = t[n].value; return e } var fa = /^xmlns:NS\d+/,
                da = /^NS\d+:/;

            function pa(t) { return oa(t.tag, t.attrsList.slice(), t.parent) } var ha, Ma, ba = [pi, hi, { preTransformNode: function(t, e) { if ("input" === t.tag) { var n, r = t.attrsMap; if (!r["v-model"]) return; if ((r[":type"] || r["v-bind:type"]) && (n = Sr(t, "type")), r.type || n || !r["v-bind"] || (n = "(" + r["v-bind"] + ").type"), n) { var o = kr(t, "v-if", !0),
                                    i = o ? "&&(" + o + ")" : "",
                                    a = null != kr(t, "v-else", !0),
                                    c = kr(t, "v-else-if", !0),
                                    s = pa(t);
                                aa(s), Tr(s, "type", "checkbox"), ia(s, e), s.processed = !0, s.if = "(" + n + ")==='checkbox'" + i, ca(s, { exp: s.if, block: s }); var l = pa(t);
                                kr(l, "v-for", !0), Tr(l, "type", "radio"), ia(l, e), ca(s, { exp: "(" + n + ")==='radio'" + i, block: l }); var u = pa(t); return kr(u, "v-for", !0), Tr(u, ":type", n), ia(u, e), ca(s, { exp: o, block: u }), a ? s.else = !0 : c && (s.elseif = c), s } } } }],
                ma = { expectHTML: !0, modules: ba, directives: { model: function(t, e, n) { var r = e.value,
                                o = e.modifiers,
                                i = t.tag,
                                a = t.attrsMap.type; if (t.component) return Er(t, r, o), !1; if ("select" === i) ! function(t, e, n) { var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
                                Wr(t, "change", r = r + " " + Dr(e, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), null, !0) }(t, r, o);
                            else if ("input" === i && "checkbox" === a) ! function(t, e, n) { var r = n && n.number,
                                    o = Sr(t, "value") || "null",
                                    i = Sr(t, "true-value") || "true",
                                    a = Sr(t, "false-value") || "false";
                                Nr(t, "checked", "Array.isArray(" + e + ")?_i(" + e + "," + o + ")>-1" + ("true" === i ? ":(" + e + ")" : ":_q(" + e + "," + i + ")")), Wr(t, "change", "var $$a=" + e + ",$$el=$event.target,$$c=$$el.checked?(" + i + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + o + ")" : o) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Dr(e, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Dr(e, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Dr(e, "$$c") + "}", null, !0) }(t, r, o);
                            else if ("input" === i && "radio" === a) ! function(t, e, n) { var r = n && n.number,
                                    o = Sr(t, "value") || "null";
                                Nr(t, "checked", "_q(" + e + "," + (o = r ? "_n(" + o + ")" : o) + ")"), Wr(t, "change", Dr(e, o), null, !0) }(t, r, o);
                            else if ("input" === i || "textarea" === i) ! function(t, e, n) { var r = t.attrsMap.type,
                                    o = n || {},
                                    i = o.lazy,
                                    a = o.number,
                                    c = o.trim,
                                    s = !i && "range" !== r,
                                    l = i ? "change" : "range" === r ? Ur : "input",
                                    u = "$event.target.value";
                                c && (u = "$event.target.value.trim()"), a && (u = "_n(" + u + ")"); var f = Dr(e, u);
                                s && (f = "if($event.target.composing)return;" + f), Nr(t, "value", "(" + e + ")"), Wr(t, l, f, null, !0), (c || a) && Wr(t, "blur", "$forceUpdate()") }(t, r, o);
                            else if (!P.isReservedTag(i)) return Er(t, r, o), !1; return !0 }, text: function(t, e) { e.value && Nr(t, "textContent", "_s(" + e.value + ")", e) }, html: function(t, e) { e.value && Nr(t, "innerHTML", "_s(" + e.value + ")", e) } }, isPreTag: function(t) { return "pre" === t }, isUnaryTag: Mi, mustUseProp: Cn, canBeLeftOpenTag: bi, isReservedTag: Un, getTagNamespace: Vn, staticKeys: function(t) { return t.reduce((function(t, e) { return t.concat(e.staticKeys || []) }), []).join(",") }(ba) },
                va = y((function(t) { return M("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (t ? "," + t : "")) })); var ga = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
                Aa = /\([^)]*?\);*$/,
                ya = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
                za = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] },
                _a = { esc: ["Esc", "Escape"], tab: "Tab", enter: "Enter", space: [" ", "Spacebar"], up: ["Up", "ArrowUp"], left: ["Left", "ArrowLeft"], right: ["Right", "ArrowRight"], down: ["Down", "ArrowDown"], delete: ["Backspace", "Delete", "Del"] },
                Oa = function(t) { return "if(" + t + ")return null;" },
                xa = { stop: "$event.stopPropagation();", prevent: "$event.preventDefault();", self: Oa("$event.target !== $event.currentTarget"), ctrl: Oa("!$event.ctrlKey"), shift: Oa("!$event.shiftKey"), alt: Oa("!$event.altKey"), meta: Oa("!$event.metaKey"), left: Oa("'button' in $event && $event.button !== 0"), middle: Oa("'button' in $event && $event.button !== 1"), right: Oa("'button' in $event && $event.button !== 2") };

            function La(t, e) { var n = e ? "nativeOn:" : "on:",
                    r = "",
                    o = ""; for (var i in t) { var a = Na(t[i]);
                    t[i] && t[i].dynamic ? o += i + "," + a + "," : r += '"' + i + '":' + a + "," } return r = "{" + r.slice(0, -1) + "}", o ? n + "_d(" + r + ",[" + o.slice(0, -1) + "])" : n + r }

            function Na(t) { if (!t) return "function(){}"; if (Array.isArray(t)) return "[" + t.map((function(t) { return Na(t) })).join(",") + "]"; var e = ya.test(t.value),
                    n = ga.test(t.value),
                    r = ya.test(t.value.replace(Aa, "")); if (t.modifiers) { var o = "",
                        i = "",
                        a = []; for (var c in t.modifiers)
                        if (xa[c]) i += xa[c], za[c] && a.push(c);
                        else if ("exact" === c) { var s = t.modifiers;
                        i += Oa(["ctrl", "shift", "alt", "meta"].filter((function(t) { return !s[t] })).map((function(t) { return "$event." + t + "Key" })).join("||")) } else a.push(c); return a.length && (o += function(t) { return "if(!$event.type.indexOf('key')&&" + t.map(wa).join("&&") + ")return null;" }(a)), i && (o += i), "function($event){" + o + (e ? "return " + t.value + "($event)" : n ? "return (" + t.value + ")($event)" : r ? "return " + t.value : t.value) + "}" } return e || n ? t.value : "function($event){" + (r ? "return " + t.value : t.value) + "}" }

            function wa(t) { var e = parseInt(t, 10); if (e) return "$event.keyCode!==" + e; var n = za[t],
                    r = _a[t]; return "_k($event.keyCode," + JSON.stringify(t) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(r) + ")" } var Ta = { on: function(t, e) { t.wrapListeners = function(t) { return "_g(" + t + "," + e.value + ")" } }, bind: function(t, e) { t.wrapData = function(n) { return "_b(" + n + ",'" + t.tag + "'," + e.value + "," + (e.modifiers && e.modifiers.prop ? "true" : "false") + (e.modifiers && e.modifiers.sync ? ",true" : "") + ")" } }, cloak: C },
                qa = function(t) { this.options = t, this.warn = t.warn || xr, this.transforms = Lr(t.modules, "transformCode"), this.dataGenFns = Lr(t.modules, "genData"), this.directives = T(T({}, Ta), t.directives); var e = t.isReservedTag || W;
                    this.maybeComponent = function(t) { return !!t.component || !e(t.tag) }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1 };

            function Ca(t, e) { var n = new qa(e); return { render: "with(this){return " + (t ? Wa(t, n) : '_c("div")') + "}", staticRenderFns: n.staticRenderFns } }

            function Wa(t, e) { if (t.parent && (t.pre = t.pre || t.parent.pre), t.staticRoot && !t.staticProcessed) return Sa(t, e); if (t.once && !t.onceProcessed) return ka(t, e); if (t.for && !t.forProcessed) return Xa(t, e); if (t.if && !t.ifProcessed) return Ba(t, e); if ("template" !== t.tag || t.slotTarget || e.pre) { if ("slot" === t.tag) return function(t, e) { var n = t.slotName || '"default"',
                            r = Pa(t, e),
                            o = "_t(" + n + (r ? "," + r : ""),
                            i = t.attrs || t.dynamicAttrs ? Fa((t.attrs || []).concat(t.dynamicAttrs || []).map((function(t) { return { name: _(t.name), value: t.value, dynamic: t.dynamic } }))) : null,
                            a = t.attrsMap["v-bind"]; return !i && !a || r || (o += ",null"), i && (o += "," + i), a && (o += (i ? "" : ",null") + "," + a), o + ")" }(t, e); var n; if (t.component) n = function(t, e, n) { var r = e.inlineTemplate ? null : Pa(e, n, !0); return "_c(" + t + "," + Ea(e, n) + (r ? "," + r : "") + ")" }(t.component, t, e);
                    else { var r;
                        (!t.plain || t.pre && e.maybeComponent(t)) && (r = Ea(t, e)); var o = t.inlineTemplate ? null : Pa(t, e, !0);
                        n = "_c('" + t.tag + "'" + (r ? "," + r : "") + (o ? "," + o : "") + ")" } for (var i = 0; i < e.transforms.length; i++) n = e.transforms[i](t, n); return n } return Pa(t, e) || "void 0" }

            function Sa(t, e) { t.staticProcessed = !0; var n = e.pre; return t.pre && (e.pre = t.pre), e.staticRenderFns.push("with(this){return " + Wa(t, e) + "}"), e.pre = n, "_m(" + (e.staticRenderFns.length - 1) + (t.staticInFor ? ",true" : "") + ")" }

            function ka(t, e) { if (t.onceProcessed = !0, t.if && !t.ifProcessed) return Ba(t, e); if (t.staticInFor) { for (var n = "", r = t.parent; r;) { if (r.for) { n = r.key; break }
                        r = r.parent } return n ? "_o(" + Wa(t, e) + "," + e.onceId++ + "," + n + ")" : Wa(t, e) } return Sa(t, e) }

            function Ba(t, e, n, r) { return t.ifProcessed = !0,
                    function t(e, n, r, o) { if (!e.length) return o || "_e()"; var i = e.shift(); return i.exp ? "(" + i.exp + ")?" + a(i.block) + ":" + t(e, n, r, o) : "" + a(i.block);

                        function a(t) { return r ? r(t, n) : t.once ? ka(t, n) : Wa(t, n) } }(t.ifConditions.slice(), e, n, r) }

            function Xa(t, e, n, r) { var o = t.for,
                    i = t.alias,
                    a = t.iterator1 ? "," + t.iterator1 : "",
                    c = t.iterator2 ? "," + t.iterator2 : ""; return t.forProcessed = !0, (r || "_l") + "((" + o + "),function(" + i + a + c + "){return " + (n || Wa)(t, e) + "})" }

            function Ea(t, e) { var n = "{",
                    r = function(t, e) { var n = t.directives; if (n) { var r, o, i, a, c = "directives:[",
                                s = !1; for (r = 0, o = n.length; r < o; r++) { i = n[r], a = !0; var l = e.directives[i.name];
                                l && (a = !!l(t, i, e.warn)), a && (s = !0, c += '{name:"' + i.name + '",rawName:"' + i.rawName + '"' + (i.value ? ",value:(" + i.value + "),expression:" + JSON.stringify(i.value) : "") + (i.arg ? ",arg:" + (i.isDynamicArg ? i.arg : '"' + i.arg + '"') : "") + (i.modifiers ? ",modifiers:" + JSON.stringify(i.modifiers) : "") + "},") } return s ? c.slice(0, -1) + "]" : void 0 } }(t, e);
                r && (n += r + ","), t.key && (n += "key:" + t.key + ","), t.ref && (n += "ref:" + t.ref + ","), t.refInFor && (n += "refInFor:true,"), t.pre && (n += "pre:true,"), t.component && (n += 'tag:"' + t.tag + '",'); for (var o = 0; o < e.dataGenFns.length; o++) n += e.dataGenFns[o](t); if (t.attrs && (n += "attrs:" + Fa(t.attrs) + ","), t.props && (n += "domProps:" + Fa(t.props) + ","), t.events && (n += La(t.events, !1) + ","), t.nativeEvents && (n += La(t.nativeEvents, !0) + ","), t.slotTarget && !t.slotScope && (n += "slot:" + t.slotTarget + ","), t.scopedSlots && (n += function(t, e, n) { var r = t.for || Object.keys(e).some((function(t) { var n = e[t]; return n.slotTargetDynamic || n.if || n.for || Da(n) })),
                            o = !!t.if; if (!r)
                            for (var i = t.parent; i;) { if (i.slotScope && i.slotScope !== ra || i.for) { r = !0; break }
                                i.if && (o = !0), i = i.parent }
                        var a = Object.keys(e).map((function(t) { return Ra(e[t], n) })).join(","); return "scopedSlots:_u([" + a + "]" + (r ? ",null,true" : "") + (!r && o ? ",null,false," + function(t) { for (var e = 5381, n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n); return e >>> 0 }(a) : "") + ")" }(t, t.scopedSlots, e) + ","), t.model && (n += "model:{value:" + t.model.value + ",callback:" + t.model.callback + ",expression:" + t.model.expression + "},"), t.inlineTemplate) { var i = function(t, e) { var n = t.children[0]; if (n && 1 === n.type) { var r = Ca(n, e.options); return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map((function(t) { return "function(){" + t + "}" })).join(",") + "]}" } }(t, e);
                    i && (n += i + ",") } return n = n.replace(/,$/, "") + "}", t.dynamicAttrs && (n = "_b(" + n + ',"' + t.tag + '",' + Fa(t.dynamicAttrs) + ")"), t.wrapData && (n = t.wrapData(n)), t.wrapListeners && (n = t.wrapListeners(n)), n }

            function Da(t) { return 1 === t.type && ("slot" === t.tag || t.children.some(Da)) }

            function Ra(t, e) { var n = t.attrsMap["slot-scope"]; if (t.if && !t.ifProcessed && !n) return Ba(t, e, Ra, "null"); if (t.for && !t.forProcessed) return Xa(t, e, Ra); var r = t.slotScope === ra ? "" : String(t.slotScope),
                    o = "function(" + r + "){return " + ("template" === t.tag ? t.if && n ? "(" + t.if+")?" + (Pa(t, e) || "undefined") + ":undefined" : Pa(t, e) || "undefined" : Wa(t, e)) + "}",
                    i = r ? "" : ",proxy:true"; return "{key:" + (t.slotTarget || '"default"') + ",fn:" + o + i + "}" }

            function Pa(t, e, n, r, o) { var i = t.children; if (i.length) { var a = i[0]; if (1 === i.length && a.for && "template" !== a.tag && "slot" !== a.tag) { var c = n ? e.maybeComponent(a) ? ",1" : ",0" : ""; return "" + (r || Wa)(a, e) + c } var s = n ? function(t, e) { for (var n = 0, r = 0; r < t.length; r++) { var o = t[r]; if (1 === o.type) { if (Ia(o) || o.ifConditions && o.ifConditions.some((function(t) { return Ia(t.block) }))) { n = 2; break }(e(o) || o.ifConditions && o.ifConditions.some((function(t) { return e(t.block) }))) && (n = 1) } } return n }(i, e.maybeComponent) : 0,
                        l = o || ja; return "[" + i.map((function(t) { return l(t, e) })).join(",") + "]" + (s ? "," + s : "") } }

            function Ia(t) { return void 0 !== t.for || "template" === t.tag || "slot" === t.tag }

            function ja(t, e) { return 1 === t.type ? Wa(t, e) : 3 === t.type && t.isComment ? (r = t, "_e(" + JSON.stringify(r.text) + ")") : "_v(" + (2 === (n = t).type ? n.expression : Ha(JSON.stringify(n.text))) + ")"; var n, r }

            function Fa(t) { for (var e = "", n = "", r = 0; r < t.length; r++) { var o = t[r],
                        i = Ha(o.value);
                    o.dynamic ? n += o.name + "," + i + "," : e += '"' + o.name + '":' + i + "," } return e = "{" + e.slice(0, -1) + "}", n ? "_d(" + e + ",[" + n.slice(0, -1) + "])" : e }

            function Ha(t) { return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") }

            function Ua(t, e) { try { return new Function(t) } catch (n) { return e.push({ err: n, code: t }), C } }

            function Va(t) { var e = Object.create(null); return function(n, r, o) {
                    (r = T({}, r)).warn, delete r.warn; var i = r.delimiters ? String(r.delimiters) + n : n; if (e[i]) return e[i]; var a = t(n, r),
                        c = {},
                        s = []; return c.render = Ua(a.render, s), c.staticRenderFns = a.staticRenderFns.map((function(t) { return Ua(t, s) })), e[i] = c } }
            new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"); var $a, Ya, Ga = ($a = function(t, e) { var n = function(t, e) { Xi = e.warn || xr, Ii = e.isPreTag || W, ji = e.mustUseProp || W, Fi = e.getTagNamespace || W, e.isReservedTag, Di = Lr(e.modules, "transformNode"), Ri = Lr(e.modules, "preTransformNode"), Pi = Lr(e.modules, "postTransformNode"), Ei = e.delimiters; var n, r, o = [],
                            i = !1 !== e.preserveWhitespace,
                            a = e.whitespace,
                            c = !1,
                            s = !1;

                        function l(t) { if (u(t), c || t.processed || (t = ia(t, e)), o.length || t === n || n.if && (t.elseif || t.else) && ca(n, { exp: t.elseif, block: t }), r && !t.forbidden)
                                if (t.elseif || t.else) a = t, (l = function(t) { for (var e = t.length; e--;) { if (1 === t[e].type) return t[e];
                                        t.pop() } }(r.children)) && l.if && ca(l, { exp: a.elseif, block: a });
                                else { if (t.slotScope) { var i = t.slotTarget || '"default"';
                                        (r.scopedSlots || (r.scopedSlots = {}))[i] = t }
                                    r.children.push(t), t.parent = r }
                            var a, l;
                            t.children = t.children.filter((function(t) { return !t.slotScope })), u(t), t.pre && (c = !1), Ii(t.tag) && (s = !1); for (var f = 0; f < Pi.length; f++) Pi[f](t, e) }

                        function u(t) { if (!s)
                                for (var e;
                                    (e = t.children[t.children.length - 1]) && 3 === e.type && " " === e.text;) t.children.pop() } return function(t, e) { for (var n, r, o = [], i = e.expectHTML, a = e.isUnaryTag || W, c = e.canBeLeftOpenTag || W, s = 0; t;) { if (n = t, r && wi(r)) { var l = 0,
                                        u = r.toLowerCase(),
                                        f = Ti[u] || (Ti[u] = new RegExp("([\\s\\S]*?)(</" + u + "[^>]*>)", "i")),
                                        d = t.replace(f, (function(t, n, r) { return l = r.length, wi(u) || "noscript" === u || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), ki(u, n) && (n = n.slice(1)), e.chars && e.chars(n), "" }));
                                    s += t.length - d.length, t = d, L(u, s - l, s) } else { var p = t.indexOf("<"); if (0 === p) { if (Li.test(t)) { var h = t.indexOf("--\x3e"); if (h >= 0) { e.shouldKeepComment && e.comment(t.substring(4, h), s, s + h + 3), _(h + 3); continue } } if (Ni.test(t)) { var M = t.indexOf("]>"); if (M >= 0) { _(M + 2); continue } } var b = t.match(xi); if (b) { _(b[0].length); continue } var m = t.match(Oi); if (m) { var v = s;
                                            _(m[0].length), L(m[1], v, s); continue } var g = O(); if (g) { x(g), ki(g.tagName, t) && _(1); continue } } var A = void 0,
                                        y = void 0,
                                        z = void 0; if (p >= 0) { for (y = t.slice(p); !(Oi.test(y) || zi.test(y) || Li.test(y) || Ni.test(y) || (z = y.indexOf("<", 1)) < 0);) p += z, y = t.slice(p);
                                        A = t.substring(0, p) }
                                    p < 0 && (A = t), A && _(A.length), e.chars && A && e.chars(A, s - A.length, s) } if (t === n) { e.chars && e.chars(t); break } }

                            function _(e) { s += e, t = t.substring(e) }

                            function O() { var e = t.match(zi); if (e) { var n, r, o = { tagName: e[1], attrs: [], start: s }; for (_(e[0].length); !(n = t.match(_i)) && (r = t.match(gi) || t.match(vi));) r.start = s, _(r[0].length), r.end = s, o.attrs.push(r); if (n) return o.unarySlash = n[1], _(n[0].length), o.end = s, o } }

                            function x(t) { var n = t.tagName,
                                    s = t.unarySlash;
                                i && ("p" === r && mi(n) && L(r), c(n) && r === n && L(n)); for (var l = a(n) || !!s, u = t.attrs.length, f = new Array(u), d = 0; d < u; d++) { var p = t.attrs[d],
                                        h = p[3] || p[4] || p[5] || "",
                                        M = "a" === n && "href" === p[1] ? e.shouldDecodeNewlinesForHref : e.shouldDecodeNewlines;
                                    f[d] = { name: p[1], value: Bi(h, M) } }
                                l || (o.push({ tag: n, lowerCasedTag: n.toLowerCase(), attrs: f, start: t.start, end: t.end }), r = n), e.start && e.start(n, f, l, t.start, t.end) }

                            function L(t, n, i) { var a, c; if (null == n && (n = s), null == i && (i = s), t)
                                    for (c = t.toLowerCase(), a = o.length - 1; a >= 0 && o[a].lowerCasedTag !== c; a--);
                                else a = 0; if (a >= 0) { for (var l = o.length - 1; l >= a; l--) e.end && e.end(o[l].tag, n, i);
                                    o.length = a, r = a && o[a - 1].tag } else "br" === c ? e.start && e.start(t, [], !0, n, i) : "p" === c && (e.start && e.start(t, [], !1, n, i), e.end && e.end(t, n, i)) }
                            L() }(t, { warn: Xi, expectHTML: e.expectHTML, isUnaryTag: e.isUnaryTag, canBeLeftOpenTag: e.canBeLeftOpenTag, shouldDecodeNewlines: e.shouldDecodeNewlines, shouldDecodeNewlinesForHref: e.shouldDecodeNewlinesForHref, shouldKeepComment: e.comments, outputSourceRange: e.outputSourceRange, start: function(t, i, a, u, f) { var d = r && r.ns || Fi(t);
                                K && "svg" === d && (i = function(t) { for (var e = [], n = 0; n < t.length; n++) { var r = t[n];
                                        fa.test(r.name) || (r.name = r.name.replace(da, ""), e.push(r)) } return e }(i)); var p, h = oa(t, i, r);
                                d && (h.ns = d), "style" !== (p = h).tag && ("script" !== p.tag || p.attrsMap.type && "text/javascript" !== p.attrsMap.type) || ot() || (h.forbidden = !0); for (var M = 0; M < Ri.length; M++) h = Ri[M](h, e) || h;
                                c || (function(t) { null != kr(t, "v-pre") && (t.pre = !0) }(h), h.pre && (c = !0)), Ii(h.tag) && (s = !0), c ? function(t) { var e = t.attrsList,
                                        n = e.length; if (n)
                                        for (var r = t.attrs = new Array(n), o = 0; o < n; o++) r[o] = { name: e[o].name, value: JSON.stringify(e[o].value) }, null != e[o].start && (r[o].start = e[o].start, r[o].end = e[o].end);
                                    else t.pre || (t.plain = !0) }(h) : h.processed || (aa(h), function(t) { var e = kr(t, "v-if"); if (e) t.if = e, ca(t, { exp: e, block: t });
                                    else { null != kr(t, "v-else") && (t.else = !0); var n = kr(t, "v-else-if");
                                        n && (t.elseif = n) } }(h), function(t) { null != kr(t, "v-once") && (t.once = !0) }(h)), n || (n = h), a ? l(h) : (r = h, o.push(h)) }, end: function(t, e, n) { var i = o[o.length - 1];
                                o.length -= 1, r = o[o.length - 1], l(i) }, chars: function(t, e, n) { if (r && (!K || "textarea" !== r.tag || r.attrsMap.placeholder !== t)) { var o, l, u, f = r.children;
                                    (t = s || t.trim() ? "script" === (o = r).tag || "style" === o.tag ? t : na(t) : f.length ? a ? "condense" === a && ta.test(t) ? "" : " " : i ? " " : "" : "") && (s || "condense" !== a || (t = t.replace(ea, " ")), !c && " " !== t && (l = function(t, e) { var n = e ? di(e) : ui; if (n.test(t)) { for (var r, o, i, a = [], c = [], s = n.lastIndex = 0; r = n.exec(t);) {
                                                (o = r.index) > s && (c.push(i = t.slice(s, o)), a.push(JSON.stringify(i))); var l = _r(r[1].trim());
                                                a.push("_s(" + l + ")"), c.push({ "@binding": l }), s = o + r[0].length } return s < t.length && (c.push(i = t.slice(s)), a.push(JSON.stringify(i))), { expression: a.join("+"), tokens: c } } }(t, Ei)) ? u = { type: 2, expression: l.expression, tokens: l.tokens, text: t } : " " === t && f.length && " " === f[f.length - 1].text || (u = { type: 3, text: t }), u && f.push(u)) } }, comment: function(t, e, n) { if (r) { var o = { type: 3, text: t, isComment: !0 };
                                    r.children.push(o) } } }), n }(t.trim(), e);!1 !== e.optimize && function(t, e) { t && (ha = va(e.staticKeys || ""), Ma = e.isReservedTag || W, function t(e) { if (e.static = function(t) { return 2 !== t.type && (3 === t.type || !(!t.pre && (t.hasBindings || t.if || t.for || b(t.tag) || !Ma(t.tag) || function(t) { for (; t.parent;) { if ("template" !== (t = t.parent).tag) return !1; if (t.for) return !0 } return !1 }(t) || !Object.keys(t).every(ha)))) }(e), 1 === e.type) { if (!Ma(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return; for (var n = 0, r = e.children.length; n < r; n++) { var o = e.children[n];
                                    t(o), o.static || (e.static = !1) } if (e.ifConditions)
                                    for (var i = 1, a = e.ifConditions.length; i < a; i++) { var c = e.ifConditions[i].block;
                                        t(c), c.static || (e.static = !1) } } }(t), function t(e, n) { if (1 === e.type) { if ((e.static || e.once) && (e.staticInFor = n), e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void(e.staticRoot = !0); if (e.staticRoot = !1, e.children)
                                    for (var r = 0, o = e.children.length; r < o; r++) t(e.children[r], n || !!e.for); if (e.ifConditions)
                                    for (var i = 1, a = e.ifConditions.length; i < a; i++) t(e.ifConditions[i].block, n) } }(t, !1)) }(n, e); var r = Ca(n, e); return { ast: n, render: r.render, staticRenderFns: r.staticRenderFns } }, function(t) {
                    function e(e, n) { var r = Object.create(t),
                            o = [],
                            i = []; if (n)
                            for (var a in n.modules && (r.modules = (t.modules || []).concat(n.modules)), n.directives && (r.directives = T(Object.create(t.directives || null), n.directives)), n) "modules" !== a && "directives" !== a && (r[a] = n[a]);
                        r.warn = function(t, e, n) {
                            (n ? i : o).push(t) }; var c = $a(e.trim(), r); return c.errors = o, c.tips = i, c } return { compile: e, compileToFunctions: Va(e) } })(ma),
                Ka = (Ga.compile, Ga.compileToFunctions);

            function Ja(t) { return (Ya = Ya || document.createElement("div")).innerHTML = t ? '<a href="\n"/>' : '<div a="\n"/>', Ya.innerHTML.indexOf("&#10;") > 0 } var Qa = !!V && Ja(!1),
                Za = !!V && Ja(!0),
                tc = y((function(t) { var e = Gn(t); return e && e.innerHTML })),
                ec = zn.prototype.$mount;
            zn.prototype.$mount = function(t, e) { if ((t = t && Gn(t)) === document.body || t === document.documentElement) return this; var n = this.$options; if (!n.render) { var r = n.template; if (r)
                        if ("string" == typeof r) "#" === r.charAt(0) && (r = tc(r));
                        else { if (!r.nodeType) return this;
                            r = r.innerHTML }
                    else t && (r = function(t) { if (t.outerHTML) return t.outerHTML; var e = document.createElement("div"); return e.appendChild(t.cloneNode(!0)), e.innerHTML }(t)); if (r) { var o = Ka(r, { outputSourceRange: !1, shouldDecodeNewlines: Qa, shouldDecodeNewlinesForHref: Za, delimiters: n.delimiters, comments: n.comments }, this),
                            i = o.render,
                            a = o.staticRenderFns;
                        n.render = i, n.staticRenderFns = a } } return ec.call(this, t, e) }, zn.compile = Ka, t.exports = zn }).call(this, n("yLpj"), n("URgk").setImmediate) }, Icfn: function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("zu+r").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("svg", { class: this.sizeClass, attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [e("path", { attrs: { d: "M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" } }), this._v(" "), e("path", { attrs: { d: "M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" } })]) }), [], !1, null, null, null);
        e.default = i.exports }, JEQr: function(t, e, n) { "use strict";
        (function(e) { var r = n("xTJ+"),
                o = n("yK9s"),
                i = { "Content-Type": "application/x-www-form-urlencoded" };

            function a(t, e) {!r.isUndefined(t) && r.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e) } var c, s = { adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== e && "[object process]" === Object.prototype.toString.call(e)) && (c = n("tQ2B")), c), transformRequest: [function(t, e) { return o(e, "Accept"), o(e, "Content-Type"), r.isFormData(t) || r.isArrayBuffer(t) || r.isBuffer(t) || r.isStream(t) || r.isFile(t) || r.isBlob(t) ? t : r.isArrayBufferView(t) ? t.buffer : r.isURLSearchParams(t) ? (a(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : r.isObject(t) ? (a(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t }], transformResponse: [function(t) { if ("string" == typeof t) try { t = JSON.parse(t) } catch (t) {}
                    return t }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, validateStatus: function(t) { return t >= 200 && t < 300 } };
            s.headers = { common: { Accept: "application/json, text/plain, */*" } }, r.forEach(["delete", "get", "head"], (function(t) { s.headers[t] = {} })), r.forEach(["post", "put", "patch"], (function(t) { s.headers[t] = r.merge(i) })), t.exports = s }).call(this, n("8oxB")) }, "JX/T": function(t, e, n) { "use strict";
        n.r(e); var r = n("vDqi"),
            o = n.n(r),
            i = n("wd/R"),
            a = n.n(i);

        function c(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

        function s(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? c(Object(n), !0).forEach((function(e) { l(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

        function l(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

        function u(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                    r = !0,
                    o = !1,
                    i = void 0; try { for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (t) { o = !0, i = t } finally { try { r || null == c.return || c.return() } finally { if (o) throw i } } return n }(t, e) || function(t, e) { if (!t) return; if ("string" == typeof t) return f(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(t, e) }(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

        function f(t, e) {
            (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var d = { data: function() { return { entries: [], errors: [], troubleshooting: !1, minutesAgo: null, searching: !0, page: 0, cursor: null, filters: {} } }, watch: { $route: function(t, e) { t.params.group !== this.group && (this.group = this.$route.params.group, this.title = this.$route.meta.title, this.loadEntries()) } }, mounted: function() { this.group = this.$route.params.group, this.title = this.$route.meta.title; for (var t = 0, e = Object.entries(this.$route.query); t < e.length; t++) { var n = u(e[t], 2),
                            r = n[0];
                        n[1];
                        this.$route.query[r] && (this.filters[r] = this.$route.query[r]) } var o = this.filters.startTime ? a.a.unix(this.filters.startTime) : a()().subtract(10, "minutes");
                    this.filters.startTime = o.local().format("YYYY-MM-DD LTS"), this.loadEntries(), this.focusOnSearch() }, destroyed: function() { this.filters = {}, document.onkeyup = null }, methods: { loadEntries: function() { var t = this; if (this.validate()) { var e = a()(this.filters.startTime, "YYYY-MM-DD LTS").add((new Date).getTimezoneOffset(), "m");
                            this.minutesAgo = parseInt(a.a.duration(a()().diff(e)).asMinutes()), this.entries = [], this.page = 0, this.cursor = null, this.request().then((function(e) { var n = e.data;
                                t.searching = !1, t.entries = n.entries.sort((function(t, e) { return e.timestamp - t.timestamp })), t.cursor = n.cursor, t.entries.length < 50 && t.cursor && t.loadMore() })) } }, request: function() { var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            n = s({}, this.filters),
                            r = this.group,
                            i = s({}, this.filters); return this.filters.startTime && (i.startTime = a()(this.filters.startTime, "YYYY-MM-DD LTS").add((new Date).getTimezoneOffset(), "m").format("X")), this.$router.push({ query: Object.assign({}, this.$route.query, i) }).catch((function() {})), i.cursor = e, this.searching = !0, o.a.get("/vapor-ui/api/".concat(this.$route.meta.resource, "/").concat(this.group), { params: i }).catch((function(e) { e.response; throw t.searching = !1, t.troubleshooting = !0, "Server error." })).then((function(e) { if (t.troubleshooting = !1, r !== t.group || JSON.stringify(n) !== JSON.stringify(t.filters)) throw "The filters have been changed."; return e })) }, search: function() { this.debouncer(this.loadEntries) }, loadMore: function() { var t = this;
                        this.request(this.cursor).then((function(e) { var n = e.data;
                            t.searching = !1, t.entries = n.entries.concat(t.entries).sort((function(t, e) { return e.timestamp - t.timestamp })), t.cursor = n.cursor, t.page++, t.entries.length < 50 && t.cursor && t.page < 3 && t.loadMore() })) }, validate: function() { return this.errors = [], a()(this.filters.startTime, "YYYY-MM-DD LTS").isValid() || this.errors.push("Input any valid date. Ex: '2020-05-09 2:32:43 PM'"), !this.errors.length }, onMinutesAgoChange: function() { this.filters.startTime = a()().subtract(this.minutesAgo, "minutes").local().format("YYYY-MM-DD LTS"), this.loadEntries() }, getMinutesAgoOptions: function() { return Array.from(new Set([1, 5, 10, 30, this.minutesAgo].sort((function(t, e) { return t - e })))).map((function(t) { return [t, a()().subtract(t, "minutes").fromNow()] })) }, focusOnSearch: function() { document.onkeyup = function(t) { if (191 === t.which || 191 === t.keyCode) { var e = document.getElementById("search-input");
                                e && e.focus() } } } } },
            p = n("KHd+"),
            h = Object(p.a)(d, (function() { var t = this,
                    e = t.$createElement,
                    n = t._self._c || e; return n("div", { staticClass: "flex-1 relative pb-8 z-0 overflow-y-auto" }, [n("div", { staticClass: "relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none" }, [n("div", { staticClass: "flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8" }, [n("div", { staticClass: "flex-1 flex" }, [n("div", { staticClass: "w-full flex md:ml-0" }, [n("label", { staticClass: "sr-only", attrs: { for: "search-input" } }, [t._v("Search")]), t._v(" "), n("div", { staticClass: "relative w-full text-gray-400 focus-within:text-gray-600" }, [n("div", { staticClass: "absolute inset-y-0 left-0 flex items-center pointer-events-none" }, [n("icon-search", { attrs: { size: "5" } })], 1), t._v(" "), n("input", { directives: [{ name: "model", rawName: "v-model", value: t.filters.query, expression: "filters.query" }], staticClass: "block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm", attrs: { id: "search-input", placeholder: "Search", type: "search" }, domProps: { value: t.filters.query }, on: { input: [function(e) { e.target.composing || t.$set(t.filters, "query", e.target.value) }, function(e) { return e.stopPropagation(), t.search(e) }] } })])])]), t._v(" "), n("div", { staticClass: "ml-4 flex items-center md:ml-6" }, [n("button", { staticClass: "p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500", attrs: { "aria-label": "Refresh" }, on: { click: t.loadEntries } }, [n("icon-refresh", { attrs: { size: "6" } })], 1)])])]), t._v(" "), n("div", { staticClass: "flex-1 relative pb-8 z-0 overflow-y-auto" }, [n("div", { staticClass: "bg-white shadow" }, [n("div", { staticClass: "px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8" }, [n("div", { staticClass: "py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-cool-gray-200" }, [n("div", { staticClass: "flex-1 min-w-0" }, [n("div", [n("label", { staticClass: "block text-sm font-medium leading-5 text-gray-700", attrs: { for: "start-time-input" } }, [t._v("Starting from")]), t._v(" "), n("div", { staticClass: "mt-1 relative rounded-md shadow-sm" }, [n("div", { staticClass: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [n("icon-calendar", { staticClass: "text-gray-400", attrs: { size: "5" } })], 1), t._v(" "), n("input", { directives: [{ name: "model", rawName: "v-model.lazy", value: t.filters.startTime, expression: "filters.startTime", modifiers: { lazy: !0 } }], staticClass: "form-input block w-full pl-10 sm:text-sm sm:leading-5", attrs: { id: "start-time-input" }, domProps: { value: t.filters.startTime }, on: { change: [function(e) { return t.$set(t.filters, "startTime", e.target.value) }, t.loadEntries] } }), t._v(" "), n("div", { staticClass: "absolute inset-y-0 right-0 flex items-center" }, [n("select", { directives: [{ name: "model", rawName: "v-model", value: t.minutesAgo, expression: "minutesAgo" }], staticClass: "form-select h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm sm:leading-5", attrs: { "aria-label": "Currency" }, on: { change: [function(e) { var n = Array.prototype.filter.call(e.target.options, (function(t) { return t.selected })).map((function(t) { return "_value" in t ? t._value : t.value }));
                            t.minutesAgo = e.target.multiple ? n : n[0] }, function(e) { return t.onMinutesAgoChange() }] } }, t._l(t.getMinutesAgoOptions(), (function(e) { var r = e[0],
                        o = e[1]; return n("option", { key: "minutes-ago-" + r, domProps: { value: r } }, [t._v("\n                                            " + t._s(o) + "\n                                        ")]) })), 0)])]), t._v(" "), t._l(t.errors, (function(e) { return t.errors.length ? n("p", { staticClass: "mt-2 text-sm text-red-600" }, [t._v("\n                                " + t._s(e) + "\n                            ")]) : t._e() }))], 2)]), t._v(" "), t._t("filters", null, { loadEntries: t.loadEntries, filters: t.filters })], 2)])])]), t._v(" "), n("div", { staticClass: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" }, [n("div", { staticClass: "flex flex-col mt-2" }, [t.searching && 0 == t.entries.length ? n("loader", [t.cursor ? [t._v("No entries have been found yet, still searching...")] : t._e()], 2) : t._e(), t._v(" "), t.searching || t.troubleshooting || 0 != t.entries.length ? t._e() : n("search-empty-results", [t.cursor ? [n("p", { staticClass: "mb-2" }, [t._v('No entries have been found close to the given "Starting from" date.')]), t._v(" "), n("p", [t._v('\n                        Please adjust the "Starting from" date, or\n                        '), n("a", { staticClass: "no-underline text-indigo-600 font-semibold hover:text-indigo-900", attrs: { href: "#" }, on: { click: function(e) { return e.preventDefault(), t.loadMore(e) } } }, [t._v("click here to keep searching")]), t._v(".\n                    ")])] : [t._v(" No entries were found for the given search criteria. ")]], 2), t._v(" "), !t.searching && t.troubleshooting ? [n("div", { staticClass: "px-6 py-4 bg-white shadow-md rounded-lg" }, [n("div", { staticClass: "flex items-center" }, [n("icon-exclamation", { attrs: { size: 6 } }), t._v(" "), n("div", { staticClass: "ml-3 font-semibold text-sm text-gray-600 uppercase tracking-wider" }, [t._v("\n                            Server Error\n                        ")])], 1), t._v(" "), n("div", { staticClass: "mt-3 text-sm text-gray-700" }, [t._t("troubleshooting")], 2)])] : t._e(), t._v(" "), t.troubleshooting ? t._e() : n("div", { staticClass: "align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg" }, [t.entries.length > 0 ? n("div", { staticClass: "bg-white min-w-full" }, [n("div", { staticClass: "px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider" }, [t._v("\n                        " + t._s(this.title) + "\n                    ")]), t._v(" "), t.cursor ? n("div", { staticClass: "flex w-full py-4 whitespace-no-wrap text-sm leading-5 text-cool-gray-900 text-center border-b border-gray-200" }, [t.searching ? n("icon-loader", { staticClass: "flex-1 mt-2", attrs: { size: "3" } }) : n("p", { staticClass: "flex-1 text-sm" }, [n("a", { staticClass: "no-underline hover:underline text-blue-500 text-sm", attrs: { href: "#" }, on: { click: function(e) { return e.preventDefault(), t.loadMore(e) } } }, [t._v("\n                                Search newer entries\n                            ")])])], 1) : t._e()]) : t._e(), t._v(" "), t.entries.length > 0 ? n("table", { staticClass: "bg-white min-w-full divide-y divide-gray-200" }, [n("transition-group", { staticClass: "divide-y divide-gray-200", attrs: { tag: "tbody", name: "list" } }, t._l(t.entries, (function(e) { return n("tr", { key: e.id }, [t._t("row", null, { entry: e })], 2) })), 0)], 1) : t._e()])], 2)])]) }), [], !1, null, null, null);
        e.default = h.exports }, "KHd+": function(t, e, n) { "use strict";

        function r(t, e, n, r, o, i, a, c) { var s, l = "function" == typeof t ? t.options : t; if (e && (l.render = e, l.staticRenderFns = n, l._compiled = !0), r && (l.functional = !0), i && (l._scopeId = "data-v-" + i), a ? (s = function(t) {
                    (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), o && o.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a) }, l._ssrRegister = s) : o && (s = c ? function() { o.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot) } : o), s)
                if (l.functional) { l._injectStyles = s; var u = l.render;
                    l.render = function(t, e) { return s.call(e), u(t, e) } } else { var f = l.beforeCreate;
                    l.beforeCreate = f ? [].concat(f, s) : [s] }
            return { exports: t, options: l } }
        n.d(e, "a", (function() { return r })) }, LYNF: function(t, e, n) { "use strict"; var r = n("OH9c");
        t.exports = function(t, e, n, o, i) { var a = new Error(t); return r(a, e, n, o, i) } }, Lmem: function(t, e, n) { "use strict";
        t.exports = function(t) { return !(!t || !t.__CANCEL__) } }, LvDl: function(t, e, n) {
        (function(t, r) { var o;
            (function() { var i = "Expected a function",
                    a = "__lodash_placeholder__",
                    c = [
                        ["ary", 128],
                        ["bind", 1],
                        ["bindKey", 2],
                        ["curry", 8],
                        ["curryRight", 16],
                        ["flip", 512],
                        ["partial", 32],
                        ["partialRight", 64],
                        ["rearg", 256]
                    ],
                    s = "[object Arguments]",
                    l = "[object Array]",
                    u = "[object Boolean]",
                    f = "[object Date]",
                    d = "[object Error]",
                    p = "[object Function]",
                    h = "[object GeneratorFunction]",
                    M = "[object Map]",
                    b = "[object Number]",
                    m = "[object Object]",
                    v = "[object RegExp]",
                    g = "[object Set]",
                    A = "[object String]",
                    y = "[object Symbol]",
                    z = "[object WeakMap]",
                    _ = "[object ArrayBuffer]",
                    O = "[object DataView]",
                    x = "[object Float32Array]",
                    L = "[object Float64Array]",
                    N = "[object Int8Array]",
                    w = "[object Int16Array]",
                    T = "[object Int32Array]",
                    q = "[object Uint8Array]",
                    C = "[object Uint16Array]",
                    W = "[object Uint32Array]",
                    S = /\b__p \+= '';/g,
                    k = /\b(__p \+=) '' \+/g,
                    B = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                    X = /&(?:amp|lt|gt|quot|#39);/g,
                    E = /[&<>"']/g,
                    D = RegExp(X.source),
                    R = RegExp(E.source),
                    P = /<%-([\s\S]+?)%>/g,
                    I = /<%([\s\S]+?)%>/g,
                    j = /<%=([\s\S]+?)%>/g,
                    F = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                    H = /^\w*$/,
                    U = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                    V = /[\\^$.*+?()[\]{}|]/g,
                    $ = RegExp(V.source),
                    Y = /^\s+|\s+$/g,
                    G = /^\s+/,
                    K = /\s+$/,
                    J = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                    Q = /\{\n\/\* \[wrapped with (.+)\] \*/,
                    Z = /,? & /,
                    tt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                    et = /\\(\\)?/g,
                    nt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                    rt = /\w*$/,
                    ot = /^[-+]0x[0-9a-f]+$/i,
                    it = /^0b[01]+$/i,
                    at = /^\[object .+?Constructor\]$/,
                    ct = /^0o[0-7]+$/i,
                    st = /^(?:0|[1-9]\d*)$/,
                    lt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                    ut = /($^)/,
                    ft = /['\n\r\u2028\u2029\\]/g,
                    dt = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                    pt = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                    ht = "[\\ud800-\\udfff]",
                    Mt = "[" + pt + "]",
                    bt = "[" + dt + "]",
                    mt = "\\d+",
                    vt = "[\\u2700-\\u27bf]",
                    gt = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
                    At = "[^\\ud800-\\udfff" + pt + mt + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
                    yt = "\\ud83c[\\udffb-\\udfff]",
                    zt = "[^\\ud800-\\udfff]",
                    _t = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                    Ot = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                    xt = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                    Lt = "(?:" + gt + "|" + At + ")",
                    Nt = "(?:" + xt + "|" + At + ")",
                    wt = "(?:" + bt + "|" + yt + ")" + "?",
                    Tt = "[\\ufe0e\\ufe0f]?" + wt + ("(?:\\u200d(?:" + [zt, _t, Ot].join("|") + ")[\\ufe0e\\ufe0f]?" + wt + ")*"),
                    qt = "(?:" + [vt, _t, Ot].join("|") + ")" + Tt,
                    Ct = "(?:" + [zt + bt + "?", bt, _t, Ot, ht].join("|") + ")",
                    Wt = RegExp("['’]", "g"),
                    St = RegExp(bt, "g"),
                    kt = RegExp(yt + "(?=" + yt + ")|" + Ct + Tt, "g"),
                    Bt = RegExp([xt + "?" + gt + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [Mt, xt, "$"].join("|") + ")", Nt + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [Mt, xt + Lt, "$"].join("|") + ")", xt + "?" + Lt + "+(?:['’](?:d|ll|m|re|s|t|ve))?", xt + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", mt, qt].join("|"), "g"),
                    Xt = RegExp("[\\u200d\\ud800-\\udfff" + dt + "\\ufe0e\\ufe0f]"),
                    Et = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                    Dt = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                    Rt = -1,
                    Pt = {};
                Pt[x] = Pt[L] = Pt[N] = Pt[w] = Pt[T] = Pt[q] = Pt["[object Uint8ClampedArray]"] = Pt[C] = Pt[W] = !0, Pt[s] = Pt[l] = Pt[_] = Pt[u] = Pt[O] = Pt[f] = Pt[d] = Pt[p] = Pt[M] = Pt[b] = Pt[m] = Pt[v] = Pt[g] = Pt[A] = Pt[z] = !1; var It = {};
                It[s] = It[l] = It[_] = It[O] = It[u] = It[f] = It[x] = It[L] = It[N] = It[w] = It[T] = It[M] = It[b] = It[m] = It[v] = It[g] = It[A] = It[y] = It[q] = It["[object Uint8ClampedArray]"] = It[C] = It[W] = !0, It[d] = It[p] = It[z] = !1; var jt = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" },
                    Ft = parseFloat,
                    Ht = parseInt,
                    Ut = "object" == typeof t && t && t.Object === Object && t,
                    Vt = "object" == typeof self && self && self.Object === Object && self,
                    $t = Ut || Vt || Function("return this")(),
                    Yt = e && !e.nodeType && e,
                    Gt = Yt && "object" == typeof r && r && !r.nodeType && r,
                    Kt = Gt && Gt.exports === Yt,
                    Jt = Kt && Ut.process,
                    Qt = function() { try { var t = Gt && Gt.require && Gt.require("util").types; return t || Jt && Jt.binding && Jt.binding("util") } catch (t) {} }(),
                    Zt = Qt && Qt.isArrayBuffer,
                    te = Qt && Qt.isDate,
                    ee = Qt && Qt.isMap,
                    ne = Qt && Qt.isRegExp,
                    re = Qt && Qt.isSet,
                    oe = Qt && Qt.isTypedArray;

                function ie(t, e, n) { switch (n.length) {
                        case 0:
                            return t.call(e);
                        case 1:
                            return t.call(e, n[0]);
                        case 2:
                            return t.call(e, n[0], n[1]);
                        case 3:
                            return t.call(e, n[0], n[1], n[2]) } return t.apply(e, n) }

                function ae(t, e, n, r) { for (var o = -1, i = null == t ? 0 : t.length; ++o < i;) { var a = t[o];
                        e(r, a, n(a), t) } return r }

                function ce(t, e) { for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t);); return t }

                function se(t, e) { for (var n = null == t ? 0 : t.length; n-- && !1 !== e(t[n], n, t);); return t }

                function le(t, e) { for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                        if (!e(t[n], n, t)) return !1;
                    return !0 }

                function ue(t, e) { for (var n = -1, r = null == t ? 0 : t.length, o = 0, i = []; ++n < r;) { var a = t[n];
                        e(a, n, t) && (i[o++] = a) } return i }

                function fe(t, e) { return !!(null == t ? 0 : t.length) && ye(t, e, 0) > -1 }

                function de(t, e, n) { for (var r = -1, o = null == t ? 0 : t.length; ++r < o;)
                        if (n(e, t[r])) return !0;
                    return !1 }

                function pe(t, e) { for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r;) o[n] = e(t[n], n, t); return o }

                function he(t, e) { for (var n = -1, r = e.length, o = t.length; ++n < r;) t[o + n] = e[n]; return t }

                function Me(t, e, n, r) { var o = -1,
                        i = null == t ? 0 : t.length; for (r && i && (n = t[++o]); ++o < i;) n = e(n, t[o], o, t); return n }

                function be(t, e, n, r) { var o = null == t ? 0 : t.length; for (r && o && (n = t[--o]); o--;) n = e(n, t[o], o, t); return n }

                function me(t, e) { for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                        if (e(t[n], n, t)) return !0;
                    return !1 } var ve = xe("length");

                function ge(t, e, n) { var r; return n(t, (function(t, n, o) { if (e(t, n, o)) return r = n, !1 })), r }

                function Ae(t, e, n, r) { for (var o = t.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o;)
                        if (e(t[i], i, t)) return i;
                    return -1 }

                function ye(t, e, n) { return e == e ? function(t, e, n) { var r = n - 1,
                            o = t.length; for (; ++r < o;)
                            if (t[r] === e) return r;
                        return -1 }(t, e, n) : Ae(t, _e, n) }

                function ze(t, e, n, r) { for (var o = n - 1, i = t.length; ++o < i;)
                        if (r(t[o], e)) return o;
                    return -1 }

                function _e(t) { return t != t }

                function Oe(t, e) { var n = null == t ? 0 : t.length; return n ? we(t, e) / n : NaN }

                function xe(t) { return function(e) { return null == e ? void 0 : e[t] } }

                function Le(t) { return function(e) { return null == t ? void 0 : t[e] } }

                function Ne(t, e, n, r, o) { return o(t, (function(t, o, i) { n = r ? (r = !1, t) : e(n, t, o, i) })), n }

                function we(t, e) { for (var n, r = -1, o = t.length; ++r < o;) { var i = e(t[r]);
                        void 0 !== i && (n = void 0 === n ? i : n + i) } return n }

                function Te(t, e) { for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n); return r }

                function qe(t) { return function(e) { return t(e) } }

                function Ce(t, e) { return pe(e, (function(e) { return t[e] })) }

                function We(t, e) { return t.has(e) }

                function Se(t, e) { for (var n = -1, r = t.length; ++n < r && ye(e, t[n], 0) > -1;); return n }

                function ke(t, e) { for (var n = t.length; n-- && ye(e, t[n], 0) > -1;); return n }

                function Be(t, e) { for (var n = t.length, r = 0; n--;) t[n] === e && ++r; return r } var Xe = Le({ "À": "A", "Á": "A", "Â": "A", "Ã": "A", "Ä": "A", "Å": "A", "à": "a", "á": "a", "â": "a", "ã": "a", "ä": "a", "å": "a", "Ç": "C", "ç": "c", "Ð": "D", "ð": "d", "È": "E", "É": "E", "Ê": "E", "Ë": "E", "è": "e", "é": "e", "ê": "e", "ë": "e", "Ì": "I", "Í": "I", "Î": "I", "Ï": "I", "ì": "i", "í": "i", "î": "i", "ï": "i", "Ñ": "N", "ñ": "n", "Ò": "O", "Ó": "O", "Ô": "O", "Õ": "O", "Ö": "O", "Ø": "O", "ò": "o", "ó": "o", "ô": "o", "õ": "o", "ö": "o", "ø": "o", "Ù": "U", "Ú": "U", "Û": "U", "Ü": "U", "ù": "u", "ú": "u", "û": "u", "ü": "u", "Ý": "Y", "ý": "y", "ÿ": "y", "Æ": "Ae", "æ": "ae", "Þ": "Th", "þ": "th", "ß": "ss", "Ā": "A", "Ă": "A", "Ą": "A", "ā": "a", "ă": "a", "ą": "a", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "Ď": "D", "Đ": "D", "ď": "d", "đ": "d", "Ē": "E", "Ĕ": "E", "Ė": "E", "Ę": "E", "Ě": "E", "ē": "e", "ĕ": "e", "ė": "e", "ę": "e", "ě": "e", "Ĝ": "G", "Ğ": "G", "Ġ": "G", "Ģ": "G", "ĝ": "g", "ğ": "g", "ġ": "g", "ģ": "g", "Ĥ": "H", "Ħ": "H", "ĥ": "h", "ħ": "h", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "Į": "I", "İ": "I", "ĩ": "i", "ī": "i", "ĭ": "i", "į": "i", "ı": "i", "Ĵ": "J", "ĵ": "j", "Ķ": "K", "ķ": "k", "ĸ": "k", "Ĺ": "L", "Ļ": "L", "Ľ": "L", "Ŀ": "L", "Ł": "L", "ĺ": "l", "ļ": "l", "ľ": "l", "ŀ": "l", "ł": "l", "Ń": "N", "Ņ": "N", "Ň": "N", "Ŋ": "N", "ń": "n", "ņ": "n", "ň": "n", "ŋ": "n", "Ō": "O", "Ŏ": "O", "Ő": "O", "ō": "o", "ŏ": "o", "ő": "o", "Ŕ": "R", "Ŗ": "R", "Ř": "R", "ŕ": "r", "ŗ": "r", "ř": "r", "Ś": "S", "Ŝ": "S", "Ş": "S", "Š": "S", "ś": "s", "ŝ": "s", "ş": "s", "š": "s", "Ţ": "T", "Ť": "T", "Ŧ": "T", "ţ": "t", "ť": "t", "ŧ": "t", "Ũ": "U", "Ū": "U", "Ŭ": "U", "Ů": "U", "Ű": "U", "Ų": "U", "ũ": "u", "ū": "u", "ŭ": "u", "ů": "u", "ű": "u", "ų": "u", "Ŵ": "W", "ŵ": "w", "Ŷ": "Y", "ŷ": "y", "Ÿ": "Y", "Ź": "Z", "Ż": "Z", "Ž": "Z", "ź": "z", "ż": "z", "ž": "z", "Ĳ": "IJ", "ĳ": "ij", "Œ": "Oe", "œ": "oe", "ŉ": "'n", "ſ": "s" }),
                    Ee = Le({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });

                function De(t) { return "\\" + jt[t] }

                function Re(t) { return Xt.test(t) }

                function Pe(t) { var e = -1,
                        n = Array(t.size); return t.forEach((function(t, r) { n[++e] = [r, t] })), n }

                function Ie(t, e) { return function(n) { return t(e(n)) } }

                function je(t, e) { for (var n = -1, r = t.length, o = 0, i = []; ++n < r;) { var c = t[n];
                        c !== e && c !== a || (t[n] = a, i[o++] = n) } return i }

                function Fe(t) { var e = -1,
                        n = Array(t.size); return t.forEach((function(t) { n[++e] = t })), n }

                function He(t) { var e = -1,
                        n = Array(t.size); return t.forEach((function(t) { n[++e] = [t, t] })), n }

                function Ue(t) { return Re(t) ? function(t) { var e = kt.lastIndex = 0; for (; kt.test(t);) ++e; return e }(t) : ve(t) }

                function Ve(t) { return Re(t) ? function(t) { return t.match(kt) || [] }(t) : function(t) { return t.split("") }(t) } var $e = Le({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }); var Ye = function t(e) { var n, r = (e = null == e ? $t : Ye.defaults($t.Object(), e, Ye.pick($t, Dt))).Array,
                        o = e.Date,
                        dt = e.Error,
                        pt = e.Function,
                        ht = e.Math,
                        Mt = e.Object,
                        bt = e.RegExp,
                        mt = e.String,
                        vt = e.TypeError,
                        gt = r.prototype,
                        At = pt.prototype,
                        yt = Mt.prototype,
                        zt = e["__core-js_shared__"],
                        _t = At.toString,
                        Ot = yt.hasOwnProperty,
                        xt = 0,
                        Lt = (n = /[^.]+$/.exec(zt && zt.keys && zt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
                        Nt = yt.toString,
                        wt = _t.call(Mt),
                        Tt = $t._,
                        qt = bt("^" + _t.call(Ot).replace(V, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        Ct = Kt ? e.Buffer : void 0,
                        kt = e.Symbol,
                        Xt = e.Uint8Array,
                        jt = Ct ? Ct.allocUnsafe : void 0,
                        Ut = Ie(Mt.getPrototypeOf, Mt),
                        Vt = Mt.create,
                        Yt = yt.propertyIsEnumerable,
                        Gt = gt.splice,
                        Jt = kt ? kt.isConcatSpreadable : void 0,
                        Qt = kt ? kt.iterator : void 0,
                        ve = kt ? kt.toStringTag : void 0,
                        Le = function() { try { var t = ti(Mt, "defineProperty"); return t({}, "", {}), t } catch (t) {} }(),
                        Ge = e.clearTimeout !== $t.clearTimeout && e.clearTimeout,
                        Ke = o && o.now !== $t.Date.now && o.now,
                        Je = e.setTimeout !== $t.setTimeout && e.setTimeout,
                        Qe = ht.ceil,
                        Ze = ht.floor,
                        tn = Mt.getOwnPropertySymbols,
                        en = Ct ? Ct.isBuffer : void 0,
                        nn = e.isFinite,
                        rn = gt.join,
                        on = Ie(Mt.keys, Mt),
                        an = ht.max,
                        cn = ht.min,
                        sn = o.now,
                        ln = e.parseInt,
                        un = ht.random,
                        fn = gt.reverse,
                        dn = ti(e, "DataView"),
                        pn = ti(e, "Map"),
                        hn = ti(e, "Promise"),
                        Mn = ti(e, "Set"),
                        bn = ti(e, "WeakMap"),
                        mn = ti(Mt, "create"),
                        vn = bn && new bn,
                        gn = {},
                        An = Ni(dn),
                        yn = Ni(pn),
                        zn = Ni(hn),
                        _n = Ni(Mn),
                        On = Ni(bn),
                        xn = kt ? kt.prototype : void 0,
                        Ln = xn ? xn.valueOf : void 0,
                        Nn = xn ? xn.toString : void 0;

                    function wn(t) { if (Ha(t) && !Sa(t) && !(t instanceof Wn)) { if (t instanceof Cn) return t; if (Ot.call(t, "__wrapped__")) return wi(t) } return new Cn(t) } var Tn = function() {
                        function t() {} return function(e) { if (!Fa(e)) return {}; if (Vt) return Vt(e);
                            t.prototype = e; var n = new t; return t.prototype = void 0, n } }();

                    function qn() {}

                    function Cn(t, e) { this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0 }

                    function Wn(t) { this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = [] }

                    function Sn(t) { var e = -1,
                            n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var r = t[e];
                            this.set(r[0], r[1]) } }

                    function kn(t) { var e = -1,
                            n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var r = t[e];
                            this.set(r[0], r[1]) } }

                    function Bn(t) { var e = -1,
                            n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var r = t[e];
                            this.set(r[0], r[1]) } }

                    function Xn(t) { var e = -1,
                            n = null == t ? 0 : t.length; for (this.__data__ = new Bn; ++e < n;) this.add(t[e]) }

                    function En(t) { var e = this.__data__ = new kn(t);
                        this.size = e.size }

                    function Dn(t, e) { var n = Sa(t),
                            r = !n && Wa(t),
                            o = !n && !r && Ea(t),
                            i = !n && !r && !o && Qa(t),
                            a = n || r || o || i,
                            c = a ? Te(t.length, mt) : [],
                            s = c.length; for (var l in t) !e && !Ot.call(t, l) || a && ("length" == l || o && ("offset" == l || "parent" == l) || i && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || ci(l, s)) || c.push(l); return c }

                    function Rn(t) { var e = t.length; return e ? t[Xr(0, e - 1)] : void 0 }

                    function Pn(t, e) { return Oi(vo(t), Gn(e, 0, t.length)) }

                    function In(t) { return Oi(vo(t)) }

                    function jn(t, e, n) {
                        (void 0 !== n && !Ta(t[e], n) || void 0 === n && !(e in t)) && $n(t, e, n) }

                    function Fn(t, e, n) { var r = t[e];
                        Ot.call(t, e) && Ta(r, n) && (void 0 !== n || e in t) || $n(t, e, n) }

                    function Hn(t, e) { for (var n = t.length; n--;)
                            if (Ta(t[n][0], e)) return n;
                        return -1 }

                    function Un(t, e, n, r) { return tr(t, (function(t, o, i) { e(r, t, n(t), i) })), r }

                    function Vn(t, e) { return t && go(e, Ac(e), t) }

                    function $n(t, e, n) { "__proto__" == e && Le ? Le(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : t[e] = n }

                    function Yn(t, e) { for (var n = -1, o = e.length, i = r(o), a = null == t; ++n < o;) i[n] = a ? void 0 : Mc(t, e[n]); return i }

                    function Gn(t, e, n) { return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t }

                    function Kn(t, e, n, r, o, i) { var a, c = 1 & e,
                            l = 2 & e,
                            d = 4 & e; if (n && (a = o ? n(t, r, o, i) : n(t)), void 0 !== a) return a; if (!Fa(t)) return t; var z = Sa(t); if (z) { if (a = function(t) { var e = t.length,
                                        n = new t.constructor(e);
                                    e && "string" == typeof t[0] && Ot.call(t, "index") && (n.index = t.index, n.input = t.input); return n }(t), !c) return vo(t, a) } else { var S = ri(t),
                                k = S == p || S == h; if (Ea(t)) return fo(t, c); if (S == m || S == s || k && !o) { if (a = l || k ? {} : ii(t), !c) return l ? function(t, e) { return go(t, ni(t), e) }(t, function(t, e) { return t && go(e, yc(e), t) }(a, t)) : function(t, e) { return go(t, ei(t), e) }(t, Vn(a, t)) } else { if (!It[S]) return o ? t : {};
                                a = function(t, e, n) { var r = t.constructor; switch (e) {
                                        case _:
                                            return po(t);
                                        case u:
                                        case f:
                                            return new r(+t);
                                        case O:
                                            return function(t, e) { var n = e ? po(t.buffer) : t.buffer; return new t.constructor(n, t.byteOffset, t.byteLength) }(t, n);
                                        case x:
                                        case L:
                                        case N:
                                        case w:
                                        case T:
                                        case q:
                                        case "[object Uint8ClampedArray]":
                                        case C:
                                        case W:
                                            return ho(t, n);
                                        case M:
                                            return new r;
                                        case b:
                                        case A:
                                            return new r(t);
                                        case v:
                                            return function(t) { var e = new t.constructor(t.source, rt.exec(t)); return e.lastIndex = t.lastIndex, e }(t);
                                        case g:
                                            return new r;
                                        case y:
                                            return o = t, Ln ? Mt(Ln.call(o)) : {} } var o }(t, S, c) } }
                        i || (i = new En); var B = i.get(t); if (B) return B;
                        i.set(t, a), Ga(t) ? t.forEach((function(r) { a.add(Kn(r, e, n, r, t, i)) })) : Ua(t) && t.forEach((function(r, o) { a.set(o, Kn(r, e, n, o, t, i)) })); var X = z ? void 0 : (d ? l ? $o : Vo : l ? yc : Ac)(t); return ce(X || t, (function(r, o) { X && (r = t[o = r]), Fn(a, o, Kn(r, e, n, o, t, i)) })), a }

                    function Jn(t, e, n) { var r = n.length; if (null == t) return !r; for (t = Mt(t); r--;) { var o = n[r],
                                i = e[o],
                                a = t[o]; if (void 0 === a && !(o in t) || !i(a)) return !1 } return !0 }

                    function Qn(t, e, n) { if ("function" != typeof t) throw new vt(i); return Ai((function() { t.apply(void 0, n) }), e) }

                    function Zn(t, e, n, r) { var o = -1,
                            i = fe,
                            a = !0,
                            c = t.length,
                            s = [],
                            l = e.length; if (!c) return s;
                        n && (e = pe(e, qe(n))), r ? (i = de, a = !1) : e.length >= 200 && (i = We, a = !1, e = new Xn(e));
                        t: for (; ++o < c;) { var u = t[o],
                                f = null == n ? u : n(u); if (u = r || 0 !== u ? u : 0, a && f == f) { for (var d = l; d--;)
                                    if (e[d] === f) continue t;
                                s.push(u) } else i(e, f, r) || s.push(u) }
                        return s }
                    wn.templateSettings = { escape: P, evaluate: I, interpolate: j, variable: "", imports: { _: wn } }, wn.prototype = qn.prototype, wn.prototype.constructor = wn, Cn.prototype = Tn(qn.prototype), Cn.prototype.constructor = Cn, Wn.prototype = Tn(qn.prototype), Wn.prototype.constructor = Wn, Sn.prototype.clear = function() { this.__data__ = mn ? mn(null) : {}, this.size = 0 }, Sn.prototype.delete = function(t) { var e = this.has(t) && delete this.__data__[t]; return this.size -= e ? 1 : 0, e }, Sn.prototype.get = function(t) { var e = this.__data__; if (mn) { var n = e[t]; return "__lodash_hash_undefined__" === n ? void 0 : n } return Ot.call(e, t) ? e[t] : void 0 }, Sn.prototype.has = function(t) { var e = this.__data__; return mn ? void 0 !== e[t] : Ot.call(e, t) }, Sn.prototype.set = function(t, e) { var n = this.__data__; return this.size += this.has(t) ? 0 : 1, n[t] = mn && void 0 === e ? "__lodash_hash_undefined__" : e, this }, kn.prototype.clear = function() { this.__data__ = [], this.size = 0 }, kn.prototype.delete = function(t) { var e = this.__data__,
                            n = Hn(e, t); return !(n < 0) && (n == e.length - 1 ? e.pop() : Gt.call(e, n, 1), --this.size, !0) }, kn.prototype.get = function(t) { var e = this.__data__,
                            n = Hn(e, t); return n < 0 ? void 0 : e[n][1] }, kn.prototype.has = function(t) { return Hn(this.__data__, t) > -1 }, kn.prototype.set = function(t, e) { var n = this.__data__,
                            r = Hn(n, t); return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this }, Bn.prototype.clear = function() { this.size = 0, this.__data__ = { hash: new Sn, map: new(pn || kn), string: new Sn } }, Bn.prototype.delete = function(t) { var e = Qo(this, t).delete(t); return this.size -= e ? 1 : 0, e }, Bn.prototype.get = function(t) { return Qo(this, t).get(t) }, Bn.prototype.has = function(t) { return Qo(this, t).has(t) }, Bn.prototype.set = function(t, e) { var n = Qo(this, t),
                            r = n.size; return n.set(t, e), this.size += n.size == r ? 0 : 1, this }, Xn.prototype.add = Xn.prototype.push = function(t) { return this.__data__.set(t, "__lodash_hash_undefined__"), this }, Xn.prototype.has = function(t) { return this.__data__.has(t) }, En.prototype.clear = function() { this.__data__ = new kn, this.size = 0 }, En.prototype.delete = function(t) { var e = this.__data__,
                            n = e.delete(t); return this.size = e.size, n }, En.prototype.get = function(t) { return this.__data__.get(t) }, En.prototype.has = function(t) { return this.__data__.has(t) }, En.prototype.set = function(t, e) { var n = this.__data__; if (n instanceof kn) { var r = n.__data__; if (!pn || r.length < 199) return r.push([t, e]), this.size = ++n.size, this;
                            n = this.__data__ = new Bn(r) } return n.set(t, e), this.size = n.size, this }; var tr = zo(sr),
                        er = zo(lr, !0);

                    function nr(t, e) { var n = !0; return tr(t, (function(t, r, o) { return n = !!e(t, r, o) })), n }

                    function rr(t, e, n) { for (var r = -1, o = t.length; ++r < o;) { var i = t[r],
                                a = e(i); if (null != a && (void 0 === c ? a == a && !Ja(a) : n(a, c))) var c = a,
                                s = i } return s }

                    function or(t, e) { var n = []; return tr(t, (function(t, r, o) { e(t, r, o) && n.push(t) })), n }

                    function ir(t, e, n, r, o) { var i = -1,
                            a = t.length; for (n || (n = ai), o || (o = []); ++i < a;) { var c = t[i];
                            e > 0 && n(c) ? e > 1 ? ir(c, e - 1, n, r, o) : he(o, c) : r || (o[o.length] = c) } return o } var ar = _o(),
                        cr = _o(!0);

                    function sr(t, e) { return t && ar(t, e, Ac) }

                    function lr(t, e) { return t && cr(t, e, Ac) }

                    function ur(t, e) { return ue(e, (function(e) { return Pa(t[e]) })) }

                    function fr(t, e) { for (var n = 0, r = (e = co(e, t)).length; null != t && n < r;) t = t[Li(e[n++])]; return n && n == r ? t : void 0 }

                    function dr(t, e, n) { var r = e(t); return Sa(t) ? r : he(r, n(t)) }

                    function pr(t) { return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : ve && ve in Mt(t) ? function(t) { var e = Ot.call(t, ve),
                                n = t[ve]; try { t[ve] = void 0; var r = !0 } catch (t) {} var o = Nt.call(t);
                            r && (e ? t[ve] = n : delete t[ve]); return o }(t) : function(t) { return Nt.call(t) }(t) }

                    function hr(t, e) { return t > e }

                    function Mr(t, e) { return null != t && Ot.call(t, e) }

                    function br(t, e) { return null != t && e in Mt(t) }

                    function mr(t, e, n) { for (var o = n ? de : fe, i = t[0].length, a = t.length, c = a, s = r(a), l = 1 / 0, u = []; c--;) { var f = t[c];
                            c && e && (f = pe(f, qe(e))), l = cn(f.length, l), s[c] = !n && (e || i >= 120 && f.length >= 120) ? new Xn(c && f) : void 0 }
                        f = t[0]; var d = -1,
                            p = s[0];
                        t: for (; ++d < i && u.length < l;) { var h = f[d],
                                M = e ? e(h) : h; if (h = n || 0 !== h ? h : 0, !(p ? We(p, M) : o(u, M, n))) { for (c = a; --c;) { var b = s[c]; if (!(b ? We(b, M) : o(t[c], M, n))) continue t }
                                p && p.push(M), u.push(h) } }
                        return u }

                    function vr(t, e, n) { var r = null == (t = bi(t, e = co(e, t))) ? t : t[Li(Ri(e))]; return null == r ? void 0 : ie(r, t, n) }

                    function gr(t) { return Ha(t) && pr(t) == s }

                    function Ar(t, e, n, r, o) { return t === e || (null == t || null == e || !Ha(t) && !Ha(e) ? t != t && e != e : function(t, e, n, r, o, i) { var a = Sa(t),
                                c = Sa(e),
                                p = a ? l : ri(t),
                                h = c ? l : ri(e),
                                z = (p = p == s ? m : p) == m,
                                x = (h = h == s ? m : h) == m,
                                L = p == h; if (L && Ea(t)) { if (!Ea(e)) return !1;
                                a = !0, z = !1 } if (L && !z) return i || (i = new En), a || Qa(t) ? Ho(t, e, n, r, o, i) : function(t, e, n, r, o, i, a) { switch (n) {
                                    case O:
                                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                                        t = t.buffer, e = e.buffer;
                                    case _:
                                        return !(t.byteLength != e.byteLength || !i(new Xt(t), new Xt(e)));
                                    case u:
                                    case f:
                                    case b:
                                        return Ta(+t, +e);
                                    case d:
                                        return t.name == e.name && t.message == e.message;
                                    case v:
                                    case A:
                                        return t == e + "";
                                    case M:
                                        var c = Pe;
                                    case g:
                                        var s = 1 & r; if (c || (c = Fe), t.size != e.size && !s) return !1; var l = a.get(t); if (l) return l == e;
                                        r |= 2, a.set(t, e); var p = Ho(c(t), c(e), r, o, i, a); return a.delete(t), p;
                                    case y:
                                        if (Ln) return Ln.call(t) == Ln.call(e) } return !1 }(t, e, p, n, r, o, i); if (!(1 & n)) { var N = z && Ot.call(t, "__wrapped__"),
                                    w = x && Ot.call(e, "__wrapped__"); if (N || w) { var T = N ? t.value() : t,
                                        q = w ? e.value() : e; return i || (i = new En), o(T, q, n, r, i) } } if (!L) return !1; return i || (i = new En),
                                function(t, e, n, r, o, i) { var a = 1 & n,
                                        c = Vo(t),
                                        s = c.length,
                                        l = Vo(e).length; if (s != l && !a) return !1; var u = s; for (; u--;) { var f = c[u]; if (!(a ? f in e : Ot.call(e, f))) return !1 } var d = i.get(t),
                                        p = i.get(e); if (d && p) return d == e && p == t; var h = !0;
                                    i.set(t, e), i.set(e, t); var M = a; for (; ++u < s;) { f = c[u]; var b = t[f],
                                            m = e[f]; if (r) var v = a ? r(m, b, f, e, t, i) : r(b, m, f, t, e, i); if (!(void 0 === v ? b === m || o(b, m, n, r, i) : v)) { h = !1; break }
                                        M || (M = "constructor" == f) } if (h && !M) { var g = t.constructor,
                                            A = e.constructor;
                                        g == A || !("constructor" in t) || !("constructor" in e) || "function" == typeof g && g instanceof g && "function" == typeof A && A instanceof A || (h = !1) } return i.delete(t), i.delete(e), h }(t, e, n, r, o, i) }(t, e, n, r, Ar, o)) }

                    function yr(t, e, n, r) { var o = n.length,
                            i = o,
                            a = !r; if (null == t) return !i; for (t = Mt(t); o--;) { var c = n[o]; if (a && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1 } for (; ++o < i;) { var s = (c = n[o])[0],
                                l = t[s],
                                u = c[1]; if (a && c[2]) { if (void 0 === l && !(s in t)) return !1 } else { var f = new En; if (r) var d = r(l, u, s, t, e, f); if (!(void 0 === d ? Ar(u, l, 3, r, f) : d)) return !1 } } return !0 }

                    function zr(t) { return !(!Fa(t) || (e = t, Lt && Lt in e)) && (Pa(t) ? qt : at).test(Ni(t)); var e }

                    function _r(t) { return "function" == typeof t ? t : null == t ? Vc : "object" == typeof t ? Sa(t) ? Tr(t[0], t[1]) : wr(t) : es(t) }

                    function Or(t) { if (!di(t)) return on(t); var e = []; for (var n in Mt(t)) Ot.call(t, n) && "constructor" != n && e.push(n); return e }

                    function xr(t) { if (!Fa(t)) return function(t) { var e = []; if (null != t)
                                for (var n in Mt(t)) e.push(n); return e }(t); var e = di(t),
                            n = []; for (var r in t)("constructor" != r || !e && Ot.call(t, r)) && n.push(r); return n }

                    function Lr(t, e) { return t < e }

                    function Nr(t, e) { var n = -1,
                            o = Ba(t) ? r(t.length) : []; return tr(t, (function(t, r, i) { o[++n] = e(t, r, i) })), o }

                    function wr(t) { var e = Zo(t); return 1 == e.length && e[0][2] ? hi(e[0][0], e[0][1]) : function(n) { return n === t || yr(n, t, e) } }

                    function Tr(t, e) { return li(t) && pi(e) ? hi(Li(t), e) : function(n) { var r = Mc(n, t); return void 0 === r && r === e ? bc(n, t) : Ar(e, r, 3) } }

                    function qr(t, e, n, r, o) { t !== e && ar(e, (function(i, a) { if (o || (o = new En), Fa(i)) ! function(t, e, n, r, o, i, a) { var c = vi(t, n),
                                    s = vi(e, n),
                                    l = a.get(s); if (l) return void jn(t, n, l); var u = i ? i(c, s, n + "", t, e, a) : void 0,
                                    f = void 0 === u; if (f) { var d = Sa(s),
                                        p = !d && Ea(s),
                                        h = !d && !p && Qa(s);
                                    u = s, d || p || h ? Sa(c) ? u = c : Xa(c) ? u = vo(c) : p ? (f = !1, u = fo(s, !0)) : h ? (f = !1, u = ho(s, !0)) : u = [] : $a(s) || Wa(s) ? (u = c, Wa(c) ? u = ac(c) : Fa(c) && !Pa(c) || (u = ii(s))) : f = !1 }
                                f && (a.set(s, u), o(u, s, r, i, a), a.delete(s));
                                jn(t, n, u) }(t, e, a, n, qr, r, o);
                            else { var c = r ? r(vi(t, a), i, a + "", t, e, o) : void 0;
                                void 0 === c && (c = i), jn(t, a, c) } }), yc) }

                    function Cr(t, e) { var n = t.length; if (n) return ci(e += e < 0 ? n : 0, n) ? t[e] : void 0 }

                    function Wr(t, e, n) { e = e.length ? pe(e, (function(t) { return Sa(t) ? function(e) { return fr(e, 1 === t.length ? t[0] : t) } : t })) : [Vc]; var r = -1; return e = pe(e, qe(Jo())),
                            function(t, e) { var n = t.length; for (t.sort(e); n--;) t[n] = t[n].value; return t }(Nr(t, (function(t, n, o) { return { criteria: pe(e, (function(e) { return e(t) })), index: ++r, value: t } })), (function(t, e) { return function(t, e, n) { var r = -1,
                                        o = t.criteria,
                                        i = e.criteria,
                                        a = o.length,
                                        c = n.length; for (; ++r < a;) { var s = Mo(o[r], i[r]); if (s) { if (r >= c) return s; var l = n[r]; return s * ("desc" == l ? -1 : 1) } } return t.index - e.index }(t, e, n) })) }

                    function Sr(t, e, n) { for (var r = -1, o = e.length, i = {}; ++r < o;) { var a = e[r],
                                c = fr(t, a);
                            n(c, a) && Ir(i, co(a, t), c) } return i }

                    function kr(t, e, n, r) { var o = r ? ze : ye,
                            i = -1,
                            a = e.length,
                            c = t; for (t === e && (e = vo(e)), n && (c = pe(t, qe(n))); ++i < a;)
                            for (var s = 0, l = e[i], u = n ? n(l) : l;
                                (s = o(c, u, s, r)) > -1;) c !== t && Gt.call(c, s, 1), Gt.call(t, s, 1); return t }

                    function Br(t, e) { for (var n = t ? e.length : 0, r = n - 1; n--;) { var o = e[n]; if (n == r || o !== i) { var i = o;
                                ci(o) ? Gt.call(t, o, 1) : Zr(t, o) } } return t }

                    function Xr(t, e) { return t + Ze(un() * (e - t + 1)) }

                    function Er(t, e) { var n = ""; if (!t || e < 1 || e > 9007199254740991) return n;
                        do { e % 2 && (n += t), (e = Ze(e / 2)) && (t += t) } while (e); return n }

                    function Dr(t, e) { return yi(Mi(t, e, Vc), t + "") }

                    function Rr(t) { return Rn(Tc(t)) }

                    function Pr(t, e) { var n = Tc(t); return Oi(n, Gn(e, 0, n.length)) }

                    function Ir(t, e, n, r) { if (!Fa(t)) return t; for (var o = -1, i = (e = co(e, t)).length, a = i - 1, c = t; null != c && ++o < i;) { var s = Li(e[o]),
                                l = n; if ("__proto__" === s || "constructor" === s || "prototype" === s) return t; if (o != a) { var u = c[s];
                                void 0 === (l = r ? r(u, s, c) : void 0) && (l = Fa(u) ? u : ci(e[o + 1]) ? [] : {}) }
                            Fn(c, s, l), c = c[s] } return t } var jr = vn ? function(t, e) { return vn.set(t, e), t } : Vc,
                        Fr = Le ? function(t, e) { return Le(t, "toString", { configurable: !0, enumerable: !1, value: Fc(e), writable: !0 }) } : Vc;

                    function Hr(t) { return Oi(Tc(t)) }

                    function Ur(t, e, n) { var o = -1,
                            i = t.length;
                        e < 0 && (e = -e > i ? 0 : i + e), (n = n > i ? i : n) < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0; for (var a = r(i); ++o < i;) a[o] = t[o + e]; return a }

                    function Vr(t, e) { var n; return tr(t, (function(t, r, o) { return !(n = e(t, r, o)) })), !!n }

                    function $r(t, e, n) { var r = 0,
                            o = null == t ? r : t.length; if ("number" == typeof e && e == e && o <= 2147483647) { for (; r < o;) { var i = r + o >>> 1,
                                    a = t[i];
                                null !== a && !Ja(a) && (n ? a <= e : a < e) ? r = i + 1 : o = i } return o } return Yr(t, e, Vc, n) }

                    function Yr(t, e, n, r) { var o = 0,
                            i = null == t ? 0 : t.length; if (0 === i) return 0; for (var a = (e = n(e)) != e, c = null === e, s = Ja(e), l = void 0 === e; o < i;) { var u = Ze((o + i) / 2),
                                f = n(t[u]),
                                d = void 0 !== f,
                                p = null === f,
                                h = f == f,
                                M = Ja(f); if (a) var b = r || h;
                            else b = l ? h && (r || d) : c ? h && d && (r || !p) : s ? h && d && !p && (r || !M) : !p && !M && (r ? f <= e : f < e);
                            b ? o = u + 1 : i = u } return cn(i, 4294967294) }

                    function Gr(t, e) { for (var n = -1, r = t.length, o = 0, i = []; ++n < r;) { var a = t[n],
                                c = e ? e(a) : a; if (!n || !Ta(c, s)) { var s = c;
                                i[o++] = 0 === a ? 0 : a } } return i }

                    function Kr(t) { return "number" == typeof t ? t : Ja(t) ? NaN : +t }

                    function Jr(t) { if ("string" == typeof t) return t; if (Sa(t)) return pe(t, Jr) + ""; if (Ja(t)) return Nn ? Nn.call(t) : ""; var e = t + ""; return "0" == e && 1 / t == -1 / 0 ? "-0" : e }

                    function Qr(t, e, n) { var r = -1,
                            o = fe,
                            i = t.length,
                            a = !0,
                            c = [],
                            s = c; if (n) a = !1, o = de;
                        else if (i >= 200) { var l = e ? null : Do(t); if (l) return Fe(l);
                            a = !1, o = We, s = new Xn } else s = e ? [] : c;
                        t: for (; ++r < i;) { var u = t[r],
                                f = e ? e(u) : u; if (u = n || 0 !== u ? u : 0, a && f == f) { for (var d = s.length; d--;)
                                    if (s[d] === f) continue t;
                                e && s.push(f), c.push(u) } else o(s, f, n) || (s !== c && s.push(f), c.push(u)) }
                        return c }

                    function Zr(t, e) { return null == (t = bi(t, e = co(e, t))) || delete t[Li(Ri(e))] }

                    function to(t, e, n, r) { return Ir(t, e, n(fr(t, e)), r) }

                    function eo(t, e, n, r) { for (var o = t.length, i = r ? o : -1;
                            (r ? i-- : ++i < o) && e(t[i], i, t);); return n ? Ur(t, r ? 0 : i, r ? i + 1 : o) : Ur(t, r ? i + 1 : 0, r ? o : i) }

                    function no(t, e) { var n = t; return n instanceof Wn && (n = n.value()), Me(e, (function(t, e) { return e.func.apply(e.thisArg, he([t], e.args)) }), n) }

                    function ro(t, e, n) { var o = t.length; if (o < 2) return o ? Qr(t[0]) : []; for (var i = -1, a = r(o); ++i < o;)
                            for (var c = t[i], s = -1; ++s < o;) s != i && (a[i] = Zn(a[i] || c, t[s], e, n)); return Qr(ir(a, 1), e, n) }

                    function oo(t, e, n) { for (var r = -1, o = t.length, i = e.length, a = {}; ++r < o;) { var c = r < i ? e[r] : void 0;
                            n(a, t[r], c) } return a }

                    function io(t) { return Xa(t) ? t : [] }

                    function ao(t) { return "function" == typeof t ? t : Vc }

                    function co(t, e) { return Sa(t) ? t : li(t, e) ? [t] : xi(cc(t)) } var so = Dr;

                    function lo(t, e, n) { var r = t.length; return n = void 0 === n ? r : n, !e && n >= r ? t : Ur(t, e, n) } var uo = Ge || function(t) { return $t.clearTimeout(t) };

                    function fo(t, e) { if (e) return t.slice(); var n = t.length,
                            r = jt ? jt(n) : new t.constructor(n); return t.copy(r), r }

                    function po(t) { var e = new t.constructor(t.byteLength); return new Xt(e).set(new Xt(t)), e }

                    function ho(t, e) { var n = e ? po(t.buffer) : t.buffer; return new t.constructor(n, t.byteOffset, t.length) }

                    function Mo(t, e) { if (t !== e) { var n = void 0 !== t,
                                r = null === t,
                                o = t == t,
                                i = Ja(t),
                                a = void 0 !== e,
                                c = null === e,
                                s = e == e,
                                l = Ja(e); if (!c && !l && !i && t > e || i && a && s && !c && !l || r && a && s || !n && s || !o) return 1; if (!r && !i && !l && t < e || l && n && o && !r && !i || c && n && o || !a && o || !s) return -1 } return 0 }

                    function bo(t, e, n, o) { for (var i = -1, a = t.length, c = n.length, s = -1, l = e.length, u = an(a - c, 0), f = r(l + u), d = !o; ++s < l;) f[s] = e[s]; for (; ++i < c;)(d || i < a) && (f[n[i]] = t[i]); for (; u--;) f[s++] = t[i++]; return f }

                    function mo(t, e, n, o) { for (var i = -1, a = t.length, c = -1, s = n.length, l = -1, u = e.length, f = an(a - s, 0), d = r(f + u), p = !o; ++i < f;) d[i] = t[i]; for (var h = i; ++l < u;) d[h + l] = e[l]; for (; ++c < s;)(p || i < a) && (d[h + n[c]] = t[i++]); return d }

                    function vo(t, e) { var n = -1,
                            o = t.length; for (e || (e = r(o)); ++n < o;) e[n] = t[n]; return e }

                    function go(t, e, n, r) { var o = !n;
                        n || (n = {}); for (var i = -1, a = e.length; ++i < a;) { var c = e[i],
                                s = r ? r(n[c], t[c], c, n, t) : void 0;
                            void 0 === s && (s = t[c]), o ? $n(n, c, s) : Fn(n, c, s) } return n }

                    function Ao(t, e) { return function(n, r) { var o = Sa(n) ? ae : Un,
                                i = e ? e() : {}; return o(n, t, Jo(r, 2), i) } }

                    function yo(t) { return Dr((function(e, n) { var r = -1,
                                o = n.length,
                                i = o > 1 ? n[o - 1] : void 0,
                                a = o > 2 ? n[2] : void 0; for (i = t.length > 3 && "function" == typeof i ? (o--, i) : void 0, a && si(n[0], n[1], a) && (i = o < 3 ? void 0 : i, o = 1), e = Mt(e); ++r < o;) { var c = n[r];
                                c && t(e, c, r, i) } return e })) }

                    function zo(t, e) { return function(n, r) { if (null == n) return n; if (!Ba(n)) return t(n, r); for (var o = n.length, i = e ? o : -1, a = Mt(n);
                                (e ? i-- : ++i < o) && !1 !== r(a[i], i, a);); return n } }

                    function _o(t) { return function(e, n, r) { for (var o = -1, i = Mt(e), a = r(e), c = a.length; c--;) { var s = a[t ? c : ++o]; if (!1 === n(i[s], s, i)) break } return e } }

                    function Oo(t) { return function(e) { var n = Re(e = cc(e)) ? Ve(e) : void 0,
                                r = n ? n[0] : e.charAt(0),
                                o = n ? lo(n, 1).join("") : e.slice(1); return r[t]() + o } }

                    function xo(t) { return function(e) { return Me(Pc(Wc(e).replace(Wt, "")), t, "") } }

                    function Lo(t) { return function() { var e = arguments; switch (e.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(e[0]);
                                case 2:
                                    return new t(e[0], e[1]);
                                case 3:
                                    return new t(e[0], e[1], e[2]);
                                case 4:
                                    return new t(e[0], e[1], e[2], e[3]);
                                case 5:
                                    return new t(e[0], e[1], e[2], e[3], e[4]);
                                case 6:
                                    return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                                case 7:
                                    return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]) } var n = Tn(t.prototype),
                                r = t.apply(n, e); return Fa(r) ? r : n } }

                    function No(t) { return function(e, n, r) { var o = Mt(e); if (!Ba(e)) { var i = Jo(n, 3);
                                e = Ac(e), n = function(t) { return i(o[t], t, o) } } var a = t(e, n, r); return a > -1 ? o[i ? e[a] : a] : void 0 } }

                    function wo(t) { return Uo((function(e) { var n = e.length,
                                r = n,
                                o = Cn.prototype.thru; for (t && e.reverse(); r--;) { var a = e[r]; if ("function" != typeof a) throw new vt(i); if (o && !c && "wrapper" == Go(a)) var c = new Cn([], !0) } for (r = c ? r : n; ++r < n;) { var s = Go(a = e[r]),
                                    l = "wrapper" == s ? Yo(a) : void 0;
                                c = l && ui(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9] ? c[Go(l[0])].apply(c, l[3]) : 1 == a.length && ui(a) ? c[s]() : c.thru(a) } return function() { var t = arguments,
                                    r = t[0]; if (c && 1 == t.length && Sa(r)) return c.plant(r).value(); for (var o = 0, i = n ? e[o].apply(this, t) : r; ++o < n;) i = e[o].call(this, i); return i } })) }

                    function To(t, e, n, o, i, a, c, s, l, u) { var f = 128 & e,
                            d = 1 & e,
                            p = 2 & e,
                            h = 24 & e,
                            M = 512 & e,
                            b = p ? void 0 : Lo(t); return function m() { for (var v = arguments.length, g = r(v), A = v; A--;) g[A] = arguments[A]; if (h) var y = Ko(m),
                                z = Be(g, y); if (o && (g = bo(g, o, i, h)), a && (g = mo(g, a, c, h)), v -= z, h && v < u) { var _ = je(g, y); return Xo(t, e, To, m.placeholder, n, g, _, s, l, u - v) } var O = d ? n : this,
                                x = p ? O[t] : t; return v = g.length, s ? g = mi(g, s) : M && v > 1 && g.reverse(), f && l < v && (g.length = l), this && this !== $t && this instanceof m && (x = b || Lo(x)), x.apply(O, g) } }

                    function qo(t, e) { return function(n, r) { return function(t, e, n, r) { return sr(t, (function(t, o, i) { e(r, n(t), o, i) })), r }(n, t, e(r), {}) } }

                    function Co(t, e) { return function(n, r) { var o; if (void 0 === n && void 0 === r) return e; if (void 0 !== n && (o = n), void 0 !== r) { if (void 0 === o) return r; "string" == typeof n || "string" == typeof r ? (n = Jr(n), r = Jr(r)) : (n = Kr(n), r = Kr(r)), o = t(n, r) } return o } }

                    function Wo(t) { return Uo((function(e) { return e = pe(e, qe(Jo())), Dr((function(n) { var r = this; return t(e, (function(t) { return ie(t, r, n) })) })) })) }

                    function So(t, e) { var n = (e = void 0 === e ? " " : Jr(e)).length; if (n < 2) return n ? Er(e, t) : e; var r = Er(e, Qe(t / Ue(e))); return Re(e) ? lo(Ve(r), 0, t).join("") : r.slice(0, t) }

                    function ko(t) { return function(e, n, o) { return o && "number" != typeof o && si(e, n, o) && (n = o = void 0), e = nc(e), void 0 === n ? (n = e, e = 0) : n = nc(n),
                                function(t, e, n, o) { for (var i = -1, a = an(Qe((e - t) / (n || 1)), 0), c = r(a); a--;) c[o ? a : ++i] = t, t += n; return c }(e, n, o = void 0 === o ? e < n ? 1 : -1 : nc(o), t) } }

                    function Bo(t) { return function(e, n) { return "string" == typeof e && "string" == typeof n || (e = ic(e), n = ic(n)), t(e, n) } }

                    function Xo(t, e, n, r, o, i, a, c, s, l) { var u = 8 & e;
                        e |= u ? 32 : 64, 4 & (e &= ~(u ? 64 : 32)) || (e &= -4); var f = [t, e, o, u ? i : void 0, u ? a : void 0, u ? void 0 : i, u ? void 0 : a, c, s, l],
                            d = n.apply(void 0, f); return ui(t) && gi(d, f), d.placeholder = r, zi(d, t, e) }

                    function Eo(t) { var e = ht[t]; return function(t, n) { if (t = ic(t), (n = null == n ? 0 : cn(rc(n), 292)) && nn(t)) { var r = (cc(t) + "e").split("e"); return +((r = (cc(e(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n)) } return e(t) } } var Do = Mn && 1 / Fe(new Mn([, -0]))[1] == 1 / 0 ? function(t) { return new Mn(t) } : Jc;

                    function Ro(t) { return function(e) { var n = ri(e); return n == M ? Pe(e) : n == g ? He(e) : function(t, e) { return pe(e, (function(e) { return [e, t[e]] })) }(e, t(e)) } }

                    function Po(t, e, n, o, c, s, l, u) { var f = 2 & e; if (!f && "function" != typeof t) throw new vt(i); var d = o ? o.length : 0; if (d || (e &= -97, o = c = void 0), l = void 0 === l ? l : an(rc(l), 0), u = void 0 === u ? u : rc(u), d -= c ? c.length : 0, 64 & e) { var p = o,
                                h = c;
                            o = c = void 0 } var M = f ? void 0 : Yo(t),
                            b = [t, e, n, o, c, p, h, s, l, u]; if (M && function(t, e) { var n = t[1],
                                    r = e[1],
                                    o = n | r,
                                    i = o < 131,
                                    c = 128 == r && 8 == n || 128 == r && 256 == n && t[7].length <= e[8] || 384 == r && e[7].length <= e[8] && 8 == n; if (!i && !c) return t;
                                1 & r && (t[2] = e[2], o |= 1 & n ? 0 : 4); var s = e[3]; if (s) { var l = t[3];
                                    t[3] = l ? bo(l, s, e[4]) : s, t[4] = l ? je(t[3], a) : e[4] }(s = e[5]) && (l = t[5], t[5] = l ? mo(l, s, e[6]) : s, t[6] = l ? je(t[5], a) : e[6]);
                                (s = e[7]) && (t[7] = s);
                                128 & r && (t[8] = null == t[8] ? e[8] : cn(t[8], e[8]));
                                null == t[9] && (t[9] = e[9]);
                                t[0] = e[0], t[1] = o }(b, M), t = b[0], e = b[1], n = b[2], o = b[3], c = b[4], !(u = b[9] = void 0 === b[9] ? f ? 0 : t.length : an(b[9] - d, 0)) && 24 & e && (e &= -25), e && 1 != e) m = 8 == e || 16 == e ? function(t, e, n) { var o = Lo(t); return function i() { for (var a = arguments.length, c = r(a), s = a, l = Ko(i); s--;) c[s] = arguments[s]; var u = a < 3 && c[0] !== l && c[a - 1] !== l ? [] : je(c, l); if ((a -= u.length) < n) return Xo(t, e, To, i.placeholder, void 0, c, u, void 0, void 0, n - a); var f = this && this !== $t && this instanceof i ? o : t; return ie(f, this, c) } }(t, e, u) : 32 != e && 33 != e || c.length ? To.apply(void 0, b) : function(t, e, n, o) { var i = 1 & e,
                                a = Lo(t); return function e() { for (var c = -1, s = arguments.length, l = -1, u = o.length, f = r(u + s), d = this && this !== $t && this instanceof e ? a : t; ++l < u;) f[l] = o[l]; for (; s--;) f[l++] = arguments[++c]; return ie(d, i ? n : this, f) } }(t, e, n, o);
                        else var m = function(t, e, n) { var r = 1 & e,
                                o = Lo(t); return function e() { var i = this && this !== $t && this instanceof e ? o : t; return i.apply(r ? n : this, arguments) } }(t, e, n); return zi((M ? jr : gi)(m, b), t, e) }

                    function Io(t, e, n, r) { return void 0 === t || Ta(t, yt[n]) && !Ot.call(r, n) ? e : t }

                    function jo(t, e, n, r, o, i) { return Fa(t) && Fa(e) && (i.set(e, t), qr(t, e, void 0, jo, i), i.delete(e)), t }

                    function Fo(t) { return $a(t) ? void 0 : t }

                    function Ho(t, e, n, r, o, i) { var a = 1 & n,
                            c = t.length,
                            s = e.length; if (c != s && !(a && s > c)) return !1; var l = i.get(t),
                            u = i.get(e); if (l && u) return l == e && u == t; var f = -1,
                            d = !0,
                            p = 2 & n ? new Xn : void 0; for (i.set(t, e), i.set(e, t); ++f < c;) { var h = t[f],
                                M = e[f]; if (r) var b = a ? r(M, h, f, e, t, i) : r(h, M, f, t, e, i); if (void 0 !== b) { if (b) continue;
                                d = !1; break } if (p) { if (!me(e, (function(t, e) { if (!We(p, e) && (h === t || o(h, t, n, r, i))) return p.push(e) }))) { d = !1; break } } else if (h !== M && !o(h, M, n, r, i)) { d = !1; break } } return i.delete(t), i.delete(e), d }

                    function Uo(t) { return yi(Mi(t, void 0, ki), t + "") }

                    function Vo(t) { return dr(t, Ac, ei) }

                    function $o(t) { return dr(t, yc, ni) } var Yo = vn ? function(t) { return vn.get(t) } : Jc;

                    function Go(t) { for (var e = t.name + "", n = gn[e], r = Ot.call(gn, e) ? n.length : 0; r--;) { var o = n[r],
                                i = o.func; if (null == i || i == t) return o.name } return e }

                    function Ko(t) { return (Ot.call(wn, "placeholder") ? wn : t).placeholder }

                    function Jo() { var t = wn.iteratee || $c; return t = t === $c ? _r : t, arguments.length ? t(arguments[0], arguments[1]) : t }

                    function Qo(t, e) { var n, r, o = t.__data__; return ("string" == (r = typeof(n = e)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof e ? "string" : "hash"] : o.map }

                    function Zo(t) { for (var e = Ac(t), n = e.length; n--;) { var r = e[n],
                                o = t[r];
                            e[n] = [r, o, pi(o)] } return e }

                    function ti(t, e) { var n = function(t, e) { return null == t ? void 0 : t[e] }(t, e); return zr(n) ? n : void 0 } var ei = tn ? function(t) { return null == t ? [] : (t = Mt(t), ue(tn(t), (function(e) { return Yt.call(t, e) }))) } : os,
                        ni = tn ? function(t) { for (var e = []; t;) he(e, ei(t)), t = Ut(t); return e } : os,
                        ri = pr;

                    function oi(t, e, n) { for (var r = -1, o = (e = co(e, t)).length, i = !1; ++r < o;) { var a = Li(e[r]); if (!(i = null != t && n(t, a))) break;
                            t = t[a] } return i || ++r != o ? i : !!(o = null == t ? 0 : t.length) && ja(o) && ci(a, o) && (Sa(t) || Wa(t)) }

                    function ii(t) { return "function" != typeof t.constructor || di(t) ? {} : Tn(Ut(t)) }

                    function ai(t) { return Sa(t) || Wa(t) || !!(Jt && t && t[Jt]) }

                    function ci(t, e) { var n = typeof t; return !!(e = null == e ? 9007199254740991 : e) && ("number" == n || "symbol" != n && st.test(t)) && t > -1 && t % 1 == 0 && t < e }

                    function si(t, e, n) { if (!Fa(n)) return !1; var r = typeof e; return !!("number" == r ? Ba(n) && ci(e, n.length) : "string" == r && e in n) && Ta(n[e], t) }

                    function li(t, e) { if (Sa(t)) return !1; var n = typeof t; return !("number" != n && "symbol" != n && "boolean" != n && null != t && !Ja(t)) || (H.test(t) || !F.test(t) || null != e && t in Mt(e)) }

                    function ui(t) { var e = Go(t),
                            n = wn[e]; if ("function" != typeof n || !(e in Wn.prototype)) return !1; if (t === n) return !0; var r = Yo(n); return !!r && t === r[0] }(dn && ri(new dn(new ArrayBuffer(1))) != O || pn && ri(new pn) != M || hn && "[object Promise]" != ri(hn.resolve()) || Mn && ri(new Mn) != g || bn && ri(new bn) != z) && (ri = function(t) { var e = pr(t),
                            n = e == m ? t.constructor : void 0,
                            r = n ? Ni(n) : ""; if (r) switch (r) {
                            case An:
                                return O;
                            case yn:
                                return M;
                            case zn:
                                return "[object Promise]";
                            case _n:
                                return g;
                            case On:
                                return z }
                        return e }); var fi = zt ? Pa : is;

                    function di(t) { var e = t && t.constructor; return t === ("function" == typeof e && e.prototype || yt) }

                    function pi(t) { return t == t && !Fa(t) }

                    function hi(t, e) { return function(n) { return null != n && (n[t] === e && (void 0 !== e || t in Mt(n))) } }

                    function Mi(t, e, n) { return e = an(void 0 === e ? t.length - 1 : e, 0),
                            function() { for (var o = arguments, i = -1, a = an(o.length - e, 0), c = r(a); ++i < a;) c[i] = o[e + i];
                                i = -1; for (var s = r(e + 1); ++i < e;) s[i] = o[i]; return s[e] = n(c), ie(t, this, s) } }

                    function bi(t, e) { return e.length < 2 ? t : fr(t, Ur(e, 0, -1)) }

                    function mi(t, e) { for (var n = t.length, r = cn(e.length, n), o = vo(t); r--;) { var i = e[r];
                            t[r] = ci(i, n) ? o[i] : void 0 } return t }

                    function vi(t, e) { if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e] } var gi = _i(jr),
                        Ai = Je || function(t, e) { return $t.setTimeout(t, e) },
                        yi = _i(Fr);

                    function zi(t, e, n) { var r = e + ""; return yi(t, function(t, e) { var n = e.length; if (!n) return t; var r = n - 1; return e[r] = (n > 1 ? "& " : "") + e[r], e = e.join(n > 2 ? ", " : " "), t.replace(J, "{\n/* [wrapped with " + e + "] */\n") }(r, function(t, e) { return ce(c, (function(n) { var r = "_." + n[0];
                                e & n[1] && !fe(t, r) && t.push(r) })), t.sort() }(function(t) { var e = t.match(Q); return e ? e[1].split(Z) : [] }(r), n))) }

                    function _i(t) { var e = 0,
                            n = 0; return function() { var r = sn(),
                                o = 16 - (r - n); if (n = r, o > 0) { if (++e >= 800) return arguments[0] } else e = 0; return t.apply(void 0, arguments) } }

                    function Oi(t, e) { var n = -1,
                            r = t.length,
                            o = r - 1; for (e = void 0 === e ? r : e; ++n < e;) { var i = Xr(n, o),
                                a = t[i];
                            t[i] = t[n], t[n] = a } return t.length = e, t } var xi = function(t) { var e = _a(t, (function(t) { return 500 === n.size && n.clear(), t })),
                            n = e.cache; return e }((function(t) { var e = []; return 46 === t.charCodeAt(0) && e.push(""), t.replace(U, (function(t, n, r, o) { e.push(r ? o.replace(et, "$1") : n || t) })), e }));

                    function Li(t) { if ("string" == typeof t || Ja(t)) return t; var e = t + ""; return "0" == e && 1 / t == -1 / 0 ? "-0" : e }

                    function Ni(t) { if (null != t) { try { return _t.call(t) } catch (t) {} try { return t + "" } catch (t) {} } return "" }

                    function wi(t) { if (t instanceof Wn) return t.clone(); var e = new Cn(t.__wrapped__, t.__chain__); return e.__actions__ = vo(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e } var Ti = Dr((function(t, e) { return Xa(t) ? Zn(t, ir(e, 1, Xa, !0)) : [] })),
                        qi = Dr((function(t, e) { var n = Ri(e); return Xa(n) && (n = void 0), Xa(t) ? Zn(t, ir(e, 1, Xa, !0), Jo(n, 2)) : [] })),
                        Ci = Dr((function(t, e) { var n = Ri(e); return Xa(n) && (n = void 0), Xa(t) ? Zn(t, ir(e, 1, Xa, !0), void 0, n) : [] }));

                    function Wi(t, e, n) { var r = null == t ? 0 : t.length; if (!r) return -1; var o = null == n ? 0 : rc(n); return o < 0 && (o = an(r + o, 0)), Ae(t, Jo(e, 3), o) }

                    function Si(t, e, n) { var r = null == t ? 0 : t.length; if (!r) return -1; var o = r - 1; return void 0 !== n && (o = rc(n), o = n < 0 ? an(r + o, 0) : cn(o, r - 1)), Ae(t, Jo(e, 3), o, !0) }

                    function ki(t) { return (null == t ? 0 : t.length) ? ir(t, 1) : [] }

                    function Bi(t) { return t && t.length ? t[0] : void 0 } var Xi = Dr((function(t) { var e = pe(t, io); return e.length && e[0] === t[0] ? mr(e) : [] })),
                        Ei = Dr((function(t) { var e = Ri(t),
                                n = pe(t, io); return e === Ri(n) ? e = void 0 : n.pop(), n.length && n[0] === t[0] ? mr(n, Jo(e, 2)) : [] })),
                        Di = Dr((function(t) { var e = Ri(t),
                                n = pe(t, io); return (e = "function" == typeof e ? e : void 0) && n.pop(), n.length && n[0] === t[0] ? mr(n, void 0, e) : [] }));

                    function Ri(t) { var e = null == t ? 0 : t.length; return e ? t[e - 1] : void 0 } var Pi = Dr(Ii);

                    function Ii(t, e) { return t && t.length && e && e.length ? kr(t, e) : t } var ji = Uo((function(t, e) { var n = null == t ? 0 : t.length,
                            r = Yn(t, e); return Br(t, pe(e, (function(t) { return ci(t, n) ? +t : t })).sort(Mo)), r }));

                    function Fi(t) { return null == t ? t : fn.call(t) } var Hi = Dr((function(t) { return Qr(ir(t, 1, Xa, !0)) })),
                        Ui = Dr((function(t) { var e = Ri(t); return Xa(e) && (e = void 0), Qr(ir(t, 1, Xa, !0), Jo(e, 2)) })),
                        Vi = Dr((function(t) { var e = Ri(t); return e = "function" == typeof e ? e : void 0, Qr(ir(t, 1, Xa, !0), void 0, e) }));

                    function $i(t) { if (!t || !t.length) return []; var e = 0; return t = ue(t, (function(t) { if (Xa(t)) return e = an(t.length, e), !0 })), Te(e, (function(e) { return pe(t, xe(e)) })) }

                    function Yi(t, e) { if (!t || !t.length) return []; var n = $i(t); return null == e ? n : pe(n, (function(t) { return ie(e, void 0, t) })) } var Gi = Dr((function(t, e) { return Xa(t) ? Zn(t, e) : [] })),
                        Ki = Dr((function(t) { return ro(ue(t, Xa)) })),
                        Ji = Dr((function(t) { var e = Ri(t); return Xa(e) && (e = void 0), ro(ue(t, Xa), Jo(e, 2)) })),
                        Qi = Dr((function(t) { var e = Ri(t); return e = "function" == typeof e ? e : void 0, ro(ue(t, Xa), void 0, e) })),
                        Zi = Dr($i); var ta = Dr((function(t) { var e = t.length,
                            n = e > 1 ? t[e - 1] : void 0; return n = "function" == typeof n ? (t.pop(), n) : void 0, Yi(t, n) }));

                    function ea(t) { var e = wn(t); return e.__chain__ = !0, e }

                    function na(t, e) { return e(t) } var ra = Uo((function(t) { var e = t.length,
                            n = e ? t[0] : 0,
                            r = this.__wrapped__,
                            o = function(e) { return Yn(e, t) }; return !(e > 1 || this.__actions__.length) && r instanceof Wn && ci(n) ? ((r = r.slice(n, +n + (e ? 1 : 0))).__actions__.push({ func: na, args: [o], thisArg: void 0 }), new Cn(r, this.__chain__).thru((function(t) { return e && !t.length && t.push(void 0), t }))) : this.thru(o) })); var oa = Ao((function(t, e, n) { Ot.call(t, n) ? ++t[n] : $n(t, n, 1) })); var ia = No(Wi),
                        aa = No(Si);

                    function ca(t, e) { return (Sa(t) ? ce : tr)(t, Jo(e, 3)) }

                    function sa(t, e) { return (Sa(t) ? se : er)(t, Jo(e, 3)) } var la = Ao((function(t, e, n) { Ot.call(t, n) ? t[n].push(e) : $n(t, n, [e]) })); var ua = Dr((function(t, e, n) { var o = -1,
                                i = "function" == typeof e,
                                a = Ba(t) ? r(t.length) : []; return tr(t, (function(t) { a[++o] = i ? ie(e, t, n) : vr(t, e, n) })), a })),
                        fa = Ao((function(t, e, n) { $n(t, n, e) }));

                    function da(t, e) { return (Sa(t) ? pe : Nr)(t, Jo(e, 3)) } var pa = Ao((function(t, e, n) { t[n ? 0 : 1].push(e) }), (function() { return [
                            [],
                            []
                        ] })); var ha = Dr((function(t, e) { if (null == t) return []; var n = e.length; return n > 1 && si(t, e[0], e[1]) ? e = [] : n > 2 && si(e[0], e[1], e[2]) && (e = [e[0]]), Wr(t, ir(e, 1), []) })),
                        Ma = Ke || function() { return $t.Date.now() };

                    function ba(t, e, n) { return e = n ? void 0 : e, Po(t, 128, void 0, void 0, void 0, void 0, e = t && null == e ? t.length : e) }

                    function ma(t, e) { var n; if ("function" != typeof e) throw new vt(i); return t = rc(t),
                            function() { return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = void 0), n } } var va = Dr((function(t, e, n) { var r = 1; if (n.length) { var o = je(n, Ko(va));
                                r |= 32 } return Po(t, r, e, n, o) })),
                        ga = Dr((function(t, e, n) { var r = 3; if (n.length) { var o = je(n, Ko(ga));
                                r |= 32 } return Po(e, r, t, n, o) }));

                    function Aa(t, e, n) { var r, o, a, c, s, l, u = 0,
                            f = !1,
                            d = !1,
                            p = !0; if ("function" != typeof t) throw new vt(i);

                        function h(e) { var n = r,
                                i = o; return r = o = void 0, u = e, c = t.apply(i, n) }

                        function M(t) { return u = t, s = Ai(m, e), f ? h(t) : c }

                        function b(t) { var n = t - l; return void 0 === l || n >= e || n < 0 || d && t - u >= a }

                        function m() { var t = Ma(); if (b(t)) return v(t);
                            s = Ai(m, function(t) { var n = e - (t - l); return d ? cn(n, a - (t - u)) : n }(t)) }

                        function v(t) { return s = void 0, p && r ? h(t) : (r = o = void 0, c) }

                        function g() { var t = Ma(),
                                n = b(t); if (r = arguments, o = this, l = t, n) { if (void 0 === s) return M(l); if (d) return uo(s), s = Ai(m, e), h(l) } return void 0 === s && (s = Ai(m, e)), c } return e = ic(e) || 0, Fa(n) && (f = !!n.leading, a = (d = "maxWait" in n) ? an(ic(n.maxWait) || 0, e) : a, p = "trailing" in n ? !!n.trailing : p), g.cancel = function() { void 0 !== s && uo(s), u = 0, r = l = o = s = void 0 }, g.flush = function() { return void 0 === s ? c : v(Ma()) }, g } var ya = Dr((function(t, e) { return Qn(t, 1, e) })),
                        za = Dr((function(t, e, n) { return Qn(t, ic(e) || 0, n) }));

                    function _a(t, e) { if ("function" != typeof t || null != e && "function" != typeof e) throw new vt(i); var n = function() { var r = arguments,
                                o = e ? e.apply(this, r) : r[0],
                                i = n.cache; if (i.has(o)) return i.get(o); var a = t.apply(this, r); return n.cache = i.set(o, a) || i, a }; return n.cache = new(_a.Cache || Bn), n }

                    function Oa(t) { if ("function" != typeof t) throw new vt(i); return function() { var e = arguments; switch (e.length) {
                                case 0:
                                    return !t.call(this);
                                case 1:
                                    return !t.call(this, e[0]);
                                case 2:
                                    return !t.call(this, e[0], e[1]);
                                case 3:
                                    return !t.call(this, e[0], e[1], e[2]) } return !t.apply(this, e) } }
                    _a.Cache = Bn; var xa = so((function(t, e) { var n = (e = 1 == e.length && Sa(e[0]) ? pe(e[0], qe(Jo())) : pe(ir(e, 1), qe(Jo()))).length; return Dr((function(r) { for (var o = -1, i = cn(r.length, n); ++o < i;) r[o] = e[o].call(this, r[o]); return ie(t, this, r) })) })),
                        La = Dr((function(t, e) { return Po(t, 32, void 0, e, je(e, Ko(La))) })),
                        Na = Dr((function(t, e) { return Po(t, 64, void 0, e, je(e, Ko(Na))) })),
                        wa = Uo((function(t, e) { return Po(t, 256, void 0, void 0, void 0, e) }));

                    function Ta(t, e) { return t === e || t != t && e != e } var qa = Bo(hr),
                        Ca = Bo((function(t, e) { return t >= e })),
                        Wa = gr(function() { return arguments }()) ? gr : function(t) { return Ha(t) && Ot.call(t, "callee") && !Yt.call(t, "callee") },
                        Sa = r.isArray,
                        ka = Zt ? qe(Zt) : function(t) { return Ha(t) && pr(t) == _ };

                    function Ba(t) { return null != t && ja(t.length) && !Pa(t) }

                    function Xa(t) { return Ha(t) && Ba(t) } var Ea = en || is,
                        Da = te ? qe(te) : function(t) { return Ha(t) && pr(t) == f };

                    function Ra(t) { if (!Ha(t)) return !1; var e = pr(t); return e == d || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !$a(t) }

                    function Pa(t) { if (!Fa(t)) return !1; var e = pr(t); return e == p || e == h || "[object AsyncFunction]" == e || "[object Proxy]" == e }

                    function Ia(t) { return "number" == typeof t && t == rc(t) }

                    function ja(t) { return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991 }

                    function Fa(t) { var e = typeof t; return null != t && ("object" == e || "function" == e) }

                    function Ha(t) { return null != t && "object" == typeof t } var Ua = ee ? qe(ee) : function(t) { return Ha(t) && ri(t) == M };

                    function Va(t) { return "number" == typeof t || Ha(t) && pr(t) == b }

                    function $a(t) { if (!Ha(t) || pr(t) != m) return !1; var e = Ut(t); if (null === e) return !0; var n = Ot.call(e, "constructor") && e.constructor; return "function" == typeof n && n instanceof n && _t.call(n) == wt } var Ya = ne ? qe(ne) : function(t) { return Ha(t) && pr(t) == v }; var Ga = re ? qe(re) : function(t) { return Ha(t) && ri(t) == g };

                    function Ka(t) { return "string" == typeof t || !Sa(t) && Ha(t) && pr(t) == A }

                    function Ja(t) { return "symbol" == typeof t || Ha(t) && pr(t) == y } var Qa = oe ? qe(oe) : function(t) { return Ha(t) && ja(t.length) && !!Pt[pr(t)] }; var Za = Bo(Lr),
                        tc = Bo((function(t, e) { return t <= e }));

                    function ec(t) { if (!t) return []; if (Ba(t)) return Ka(t) ? Ve(t) : vo(t); if (Qt && t[Qt]) return function(t) { for (var e, n = []; !(e = t.next()).done;) n.push(e.value); return n }(t[Qt]()); var e = ri(t); return (e == M ? Pe : e == g ? Fe : Tc)(t) }

                    function nc(t) { return t ? (t = ic(t)) === 1 / 0 || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0 }

                    function rc(t) { var e = nc(t),
                            n = e % 1; return e == e ? n ? e - n : e : 0 }

                    function oc(t) { return t ? Gn(rc(t), 0, 4294967295) : 0 }

                    function ic(t) { if ("number" == typeof t) return t; if (Ja(t)) return NaN; if (Fa(t)) { var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                            t = Fa(e) ? e + "" : e } if ("string" != typeof t) return 0 === t ? t : +t;
                        t = t.replace(Y, ""); var n = it.test(t); return n || ct.test(t) ? Ht(t.slice(2), n ? 2 : 8) : ot.test(t) ? NaN : +t }

                    function ac(t) { return go(t, yc(t)) }

                    function cc(t) { return null == t ? "" : Jr(t) } var sc = yo((function(t, e) { if (di(e) || Ba(e)) go(e, Ac(e), t);
                            else
                                for (var n in e) Ot.call(e, n) && Fn(t, n, e[n]) })),
                        lc = yo((function(t, e) { go(e, yc(e), t) })),
                        uc = yo((function(t, e, n, r) { go(e, yc(e), t, r) })),
                        fc = yo((function(t, e, n, r) { go(e, Ac(e), t, r) })),
                        dc = Uo(Yn); var pc = Dr((function(t, e) { t = Mt(t); var n = -1,
                                r = e.length,
                                o = r > 2 ? e[2] : void 0; for (o && si(e[0], e[1], o) && (r = 1); ++n < r;)
                                for (var i = e[n], a = yc(i), c = -1, s = a.length; ++c < s;) { var l = a[c],
                                        u = t[l];
                                    (void 0 === u || Ta(u, yt[l]) && !Ot.call(t, l)) && (t[l] = i[l]) }
                            return t })),
                        hc = Dr((function(t) { return t.push(void 0, jo), ie(_c, void 0, t) }));

                    function Mc(t, e, n) { var r = null == t ? void 0 : fr(t, e); return void 0 === r ? n : r }

                    function bc(t, e) { return null != t && oi(t, e, br) } var mc = qo((function(t, e, n) { null != e && "function" != typeof e.toString && (e = Nt.call(e)), t[e] = n }), Fc(Vc)),
                        vc = qo((function(t, e, n) { null != e && "function" != typeof e.toString && (e = Nt.call(e)), Ot.call(t, e) ? t[e].push(n) : t[e] = [n] }), Jo),
                        gc = Dr(vr);

                    function Ac(t) { return Ba(t) ? Dn(t) : Or(t) }

                    function yc(t) { return Ba(t) ? Dn(t, !0) : xr(t) } var zc = yo((function(t, e, n) { qr(t, e, n) })),
                        _c = yo((function(t, e, n, r) { qr(t, e, n, r) })),
                        Oc = Uo((function(t, e) { var n = {}; if (null == t) return n; var r = !1;
                            e = pe(e, (function(e) { return e = co(e, t), r || (r = e.length > 1), e })), go(t, $o(t), n), r && (n = Kn(n, 7, Fo)); for (var o = e.length; o--;) Zr(n, e[o]); return n })); var xc = Uo((function(t, e) { return null == t ? {} : function(t, e) { return Sr(t, e, (function(e, n) { return bc(t, n) })) }(t, e) }));

                    function Lc(t, e) { if (null == t) return {}; var n = pe($o(t), (function(t) { return [t] })); return e = Jo(e), Sr(t, n, (function(t, n) { return e(t, n[0]) })) } var Nc = Ro(Ac),
                        wc = Ro(yc);

                    function Tc(t) { return null == t ? [] : Ce(t, Ac(t)) } var qc = xo((function(t, e, n) { return e = e.toLowerCase(), t + (n ? Cc(e) : e) }));

                    function Cc(t) { return Rc(cc(t).toLowerCase()) }

                    function Wc(t) { return (t = cc(t)) && t.replace(lt, Xe).replace(St, "") } var Sc = xo((function(t, e, n) { return t + (n ? "-" : "") + e.toLowerCase() })),
                        kc = xo((function(t, e, n) { return t + (n ? " " : "") + e.toLowerCase() })),
                        Bc = Oo("toLowerCase"); var Xc = xo((function(t, e, n) { return t + (n ? "_" : "") + e.toLowerCase() })); var Ec = xo((function(t, e, n) { return t + (n ? " " : "") + Rc(e) })); var Dc = xo((function(t, e, n) { return t + (n ? " " : "") + e.toUpperCase() })),
                        Rc = Oo("toUpperCase");

                    function Pc(t, e, n) { return t = cc(t), void 0 === (e = n ? void 0 : e) ? function(t) { return Et.test(t) }(t) ? function(t) { return t.match(Bt) || [] }(t) : function(t) { return t.match(tt) || [] }(t) : t.match(e) || [] } var Ic = Dr((function(t, e) { try { return ie(t, void 0, e) } catch (t) { return Ra(t) ? t : new dt(t) } })),
                        jc = Uo((function(t, e) { return ce(e, (function(e) { e = Li(e), $n(t, e, va(t[e], t)) })), t }));

                    function Fc(t) { return function() { return t } } var Hc = wo(),
                        Uc = wo(!0);

                    function Vc(t) { return t }

                    function $c(t) { return _r("function" == typeof t ? t : Kn(t, 1)) } var Yc = Dr((function(t, e) { return function(n) { return vr(n, t, e) } })),
                        Gc = Dr((function(t, e) { return function(n) { return vr(t, n, e) } }));

                    function Kc(t, e, n) { var r = Ac(e),
                            o = ur(e, r);
                        null != n || Fa(e) && (o.length || !r.length) || (n = e, e = t, t = this, o = ur(e, Ac(e))); var i = !(Fa(n) && "chain" in n && !n.chain),
                            a = Pa(t); return ce(o, (function(n) { var r = e[n];
                            t[n] = r, a && (t.prototype[n] = function() { var e = this.__chain__; if (i || e) { var n = t(this.__wrapped__),
                                        o = n.__actions__ = vo(this.__actions__); return o.push({ func: r, args: arguments, thisArg: t }), n.__chain__ = e, n } return r.apply(t, he([this.value()], arguments)) }) })), t }

                    function Jc() {} var Qc = Wo(pe),
                        Zc = Wo(le),
                        ts = Wo(me);

                    function es(t) { return li(t) ? xe(Li(t)) : function(t) { return function(e) { return fr(e, t) } }(t) } var ns = ko(),
                        rs = ko(!0);

                    function os() { return [] }

                    function is() { return !1 } var as = Co((function(t, e) { return t + e }), 0),
                        cs = Eo("ceil"),
                        ss = Co((function(t, e) { return t / e }), 1),
                        ls = Eo("floor"); var us, fs = Co((function(t, e) { return t * e }), 1),
                        ds = Eo("round"),
                        ps = Co((function(t, e) { return t - e }), 0); return wn.after = function(t, e) { if ("function" != typeof e) throw new vt(i); return t = rc(t),
                            function() { if (--t < 1) return e.apply(this, arguments) } }, wn.ary = ba, wn.assign = sc, wn.assignIn = lc, wn.assignInWith = uc, wn.assignWith = fc, wn.at = dc, wn.before = ma, wn.bind = va, wn.bindAll = jc, wn.bindKey = ga, wn.castArray = function() { if (!arguments.length) return []; var t = arguments[0]; return Sa(t) ? t : [t] }, wn.chain = ea, wn.chunk = function(t, e, n) { e = (n ? si(t, e, n) : void 0 === e) ? 1 : an(rc(e), 0); var o = null == t ? 0 : t.length; if (!o || e < 1) return []; for (var i = 0, a = 0, c = r(Qe(o / e)); i < o;) c[a++] = Ur(t, i, i += e); return c }, wn.compact = function(t) { for (var e = -1, n = null == t ? 0 : t.length, r = 0, o = []; ++e < n;) { var i = t[e];
                            i && (o[r++] = i) } return o }, wn.concat = function() { var t = arguments.length; if (!t) return []; for (var e = r(t - 1), n = arguments[0], o = t; o--;) e[o - 1] = arguments[o]; return he(Sa(n) ? vo(n) : [n], ir(e, 1)) }, wn.cond = function(t) { var e = null == t ? 0 : t.length,
                            n = Jo(); return t = e ? pe(t, (function(t) { if ("function" != typeof t[1]) throw new vt(i); return [n(t[0]), t[1]] })) : [], Dr((function(n) { for (var r = -1; ++r < e;) { var o = t[r]; if (ie(o[0], this, n)) return ie(o[1], this, n) } })) }, wn.conforms = function(t) { return function(t) { var e = Ac(t); return function(n) { return Jn(n, t, e) } }(Kn(t, 1)) }, wn.constant = Fc, wn.countBy = oa, wn.create = function(t, e) { var n = Tn(t); return null == e ? n : Vn(n, e) }, wn.curry = function t(e, n, r) { var o = Po(e, 8, void 0, void 0, void 0, void 0, void 0, n = r ? void 0 : n); return o.placeholder = t.placeholder, o }, wn.curryRight = function t(e, n, r) { var o = Po(e, 16, void 0, void 0, void 0, void 0, void 0, n = r ? void 0 : n); return o.placeholder = t.placeholder, o }, wn.debounce = Aa, wn.defaults = pc, wn.defaultsDeep = hc, wn.defer = ya, wn.delay = za, wn.difference = Ti, wn.differenceBy = qi, wn.differenceWith = Ci, wn.drop = function(t, e, n) { var r = null == t ? 0 : t.length; return r ? Ur(t, (e = n || void 0 === e ? 1 : rc(e)) < 0 ? 0 : e, r) : [] }, wn.dropRight = function(t, e, n) { var r = null == t ? 0 : t.length; return r ? Ur(t, 0, (e = r - (e = n || void 0 === e ? 1 : rc(e))) < 0 ? 0 : e) : [] }, wn.dropRightWhile = function(t, e) { return t && t.length ? eo(t, Jo(e, 3), !0, !0) : [] }, wn.dropWhile = function(t, e) { return t && t.length ? eo(t, Jo(e, 3), !0) : [] }, wn.fill = function(t, e, n, r) { var o = null == t ? 0 : t.length; return o ? (n && "number" != typeof n && si(t, e, n) && (n = 0, r = o), function(t, e, n, r) { var o = t.length; for ((n = rc(n)) < 0 && (n = -n > o ? 0 : o + n), (r = void 0 === r || r > o ? o : rc(r)) < 0 && (r += o), r = n > r ? 0 : oc(r); n < r;) t[n++] = e; return t }(t, e, n, r)) : [] }, wn.filter = function(t, e) { return (Sa(t) ? ue : or)(t, Jo(e, 3)) }, wn.flatMap = function(t, e) { return ir(da(t, e), 1) }, wn.flatMapDeep = function(t, e) { return ir(da(t, e), 1 / 0) }, wn.flatMapDepth = function(t, e, n) { return n = void 0 === n ? 1 : rc(n), ir(da(t, e), n) }, wn.flatten = ki, wn.flattenDeep = function(t) { return (null == t ? 0 : t.length) ? ir(t, 1 / 0) : [] }, wn.flattenDepth = function(t, e) { return (null == t ? 0 : t.length) ? ir(t, e = void 0 === e ? 1 : rc(e)) : [] }, wn.flip = function(t) { return Po(t, 512) }, wn.flow = Hc, wn.flowRight = Uc, wn.fromPairs = function(t) { for (var e = -1, n = null == t ? 0 : t.length, r = {}; ++e < n;) { var o = t[e];
                            r[o[0]] = o[1] } return r }, wn.functions = function(t) { return null == t ? [] : ur(t, Ac(t)) }, wn.functionsIn = function(t) { return null == t ? [] : ur(t, yc(t)) }, wn.groupBy = la, wn.initial = function(t) { return (null == t ? 0 : t.length) ? Ur(t, 0, -1) : [] }, wn.intersection = Xi, wn.intersectionBy = Ei, wn.intersectionWith = Di, wn.invert = mc, wn.invertBy = vc, wn.invokeMap = ua, wn.iteratee = $c, wn.keyBy = fa, wn.keys = Ac, wn.keysIn = yc, wn.map = da, wn.mapKeys = function(t, e) { var n = {}; return e = Jo(e, 3), sr(t, (function(t, r, o) { $n(n, e(t, r, o), t) })), n }, wn.mapValues = function(t, e) { var n = {}; return e = Jo(e, 3), sr(t, (function(t, r, o) { $n(n, r, e(t, r, o)) })), n }, wn.matches = function(t) { return wr(Kn(t, 1)) }, wn.matchesProperty = function(t, e) { return Tr(t, Kn(e, 1)) }, wn.memoize = _a, wn.merge = zc, wn.mergeWith = _c, wn.method = Yc, wn.methodOf = Gc, wn.mixin = Kc, wn.negate = Oa, wn.nthArg = function(t) { return t = rc(t), Dr((function(e) { return Cr(e, t) })) }, wn.omit = Oc, wn.omitBy = function(t, e) { return Lc(t, Oa(Jo(e))) }, wn.once = function(t) { return ma(2, t) }, wn.orderBy = function(t, e, n, r) { return null == t ? [] : (Sa(e) || (e = null == e ? [] : [e]), Sa(n = r ? void 0 : n) || (n = null == n ? [] : [n]), Wr(t, e, n)) }, wn.over = Qc, wn.overArgs = xa, wn.overEvery = Zc, wn.overSome = ts, wn.partial = La, wn.partialRight = Na, wn.partition = pa, wn.pick = xc, wn.pickBy = Lc, wn.property = es, wn.propertyOf = function(t) { return function(e) { return null == t ? void 0 : fr(t, e) } }, wn.pull = Pi, wn.pullAll = Ii, wn.pullAllBy = function(t, e, n) { return t && t.length && e && e.length ? kr(t, e, Jo(n, 2)) : t }, wn.pullAllWith = function(t, e, n) { return t && t.length && e && e.length ? kr(t, e, void 0, n) : t }, wn.pullAt = ji, wn.range = ns, wn.rangeRight = rs, wn.rearg = wa, wn.reject = function(t, e) { return (Sa(t) ? ue : or)(t, Oa(Jo(e, 3))) }, wn.remove = function(t, e) { var n = []; if (!t || !t.length) return n; var r = -1,
                            o = [],
                            i = t.length; for (e = Jo(e, 3); ++r < i;) { var a = t[r];
                            e(a, r, t) && (n.push(a), o.push(r)) } return Br(t, o), n }, wn.rest = function(t, e) { if ("function" != typeof t) throw new vt(i); return Dr(t, e = void 0 === e ? e : rc(e)) }, wn.reverse = Fi, wn.sampleSize = function(t, e, n) { return e = (n ? si(t, e, n) : void 0 === e) ? 1 : rc(e), (Sa(t) ? Pn : Pr)(t, e) }, wn.set = function(t, e, n) { return null == t ? t : Ir(t, e, n) }, wn.setWith = function(t, e, n, r) { return r = "function" == typeof r ? r : void 0, null == t ? t : Ir(t, e, n, r) }, wn.shuffle = function(t) { return (Sa(t) ? In : Hr)(t) }, wn.slice = function(t, e, n) { var r = null == t ? 0 : t.length; return r ? (n && "number" != typeof n && si(t, e, n) ? (e = 0, n = r) : (e = null == e ? 0 : rc(e), n = void 0 === n ? r : rc(n)), Ur(t, e, n)) : [] }, wn.sortBy = ha, wn.sortedUniq = function(t) { return t && t.length ? Gr(t) : [] }, wn.sortedUniqBy = function(t, e) { return t && t.length ? Gr(t, Jo(e, 2)) : [] }, wn.split = function(t, e, n) { return n && "number" != typeof n && si(t, e, n) && (e = n = void 0), (n = void 0 === n ? 4294967295 : n >>> 0) ? (t = cc(t)) && ("string" == typeof e || null != e && !Ya(e)) && !(e = Jr(e)) && Re(t) ? lo(Ve(t), 0, n) : t.split(e, n) : [] }, wn.spread = function(t, e) { if ("function" != typeof t) throw new vt(i); return e = null == e ? 0 : an(rc(e), 0), Dr((function(n) { var r = n[e],
                                o = lo(n, 0, e); return r && he(o, r), ie(t, this, o) })) }, wn.tail = function(t) { var e = null == t ? 0 : t.length; return e ? Ur(t, 1, e) : [] }, wn.take = function(t, e, n) { return t && t.length ? Ur(t, 0, (e = n || void 0 === e ? 1 : rc(e)) < 0 ? 0 : e) : [] }, wn.takeRight = function(t, e, n) { var r = null == t ? 0 : t.length; return r ? Ur(t, (e = r - (e = n || void 0 === e ? 1 : rc(e))) < 0 ? 0 : e, r) : [] }, wn.takeRightWhile = function(t, e) { return t && t.length ? eo(t, Jo(e, 3), !1, !0) : [] }, wn.takeWhile = function(t, e) { return t && t.length ? eo(t, Jo(e, 3)) : [] }, wn.tap = function(t, e) { return e(t), t }, wn.throttle = function(t, e, n) { var r = !0,
                            o = !0; if ("function" != typeof t) throw new vt(i); return Fa(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), Aa(t, e, { leading: r, maxWait: e, trailing: o }) }, wn.thru = na, wn.toArray = ec, wn.toPairs = Nc, wn.toPairsIn = wc, wn.toPath = function(t) { return Sa(t) ? pe(t, Li) : Ja(t) ? [t] : vo(xi(cc(t))) }, wn.toPlainObject = ac, wn.transform = function(t, e, n) { var r = Sa(t),
                            o = r || Ea(t) || Qa(t); if (e = Jo(e, 4), null == n) { var i = t && t.constructor;
                            n = o ? r ? new i : [] : Fa(t) && Pa(i) ? Tn(Ut(t)) : {} } return (o ? ce : sr)(t, (function(t, r, o) { return e(n, t, r, o) })), n }, wn.unary = function(t) { return ba(t, 1) }, wn.union = Hi, wn.unionBy = Ui, wn.unionWith = Vi, wn.uniq = function(t) { return t && t.length ? Qr(t) : [] }, wn.uniqBy = function(t, e) { return t && t.length ? Qr(t, Jo(e, 2)) : [] }, wn.uniqWith = function(t, e) { return e = "function" == typeof e ? e : void 0, t && t.length ? Qr(t, void 0, e) : [] }, wn.unset = function(t, e) { return null == t || Zr(t, e) }, wn.unzip = $i, wn.unzipWith = Yi, wn.update = function(t, e, n) { return null == t ? t : to(t, e, ao(n)) }, wn.updateWith = function(t, e, n, r) { return r = "function" == typeof r ? r : void 0, null == t ? t : to(t, e, ao(n), r) }, wn.values = Tc, wn.valuesIn = function(t) { return null == t ? [] : Ce(t, yc(t)) }, wn.without = Gi, wn.words = Pc, wn.wrap = function(t, e) { return La(ao(e), t) }, wn.xor = Ki, wn.xorBy = Ji, wn.xorWith = Qi, wn.zip = Zi, wn.zipObject = function(t, e) { return oo(t || [], e || [], Fn) }, wn.zipObjectDeep = function(t, e) { return oo(t || [], e || [], Ir) }, wn.zipWith = ta, wn.entries = Nc, wn.entriesIn = wc, wn.extend = lc, wn.extendWith = uc, Kc(wn, wn), wn.add = as, wn.attempt = Ic, wn.camelCase = qc, wn.capitalize = Cc, wn.ceil = cs, wn.clamp = function(t, e, n) { return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = ic(n)) == n ? n : 0), void 0 !== e && (e = (e = ic(e)) == e ? e : 0), Gn(ic(t), e, n) }, wn.clone = function(t) { return Kn(t, 4) }, wn.cloneDeep = function(t) { return Kn(t, 5) }, wn.cloneDeepWith = function(t, e) { return Kn(t, 5, e = "function" == typeof e ? e : void 0) }, wn.cloneWith = function(t, e) { return Kn(t, 4, e = "function" == typeof e ? e : void 0) }, wn.conformsTo = function(t, e) { return null == e || Jn(t, e, Ac(e)) }, wn.deburr = Wc, wn.defaultTo = function(t, e) { return null == t || t != t ? e : t }, wn.divide = ss, wn.endsWith = function(t, e, n) { t = cc(t), e = Jr(e); var r = t.length,
                            o = n = void 0 === n ? r : Gn(rc(n), 0, r); return (n -= e.length) >= 0 && t.slice(n, o) == e }, wn.eq = Ta, wn.escape = function(t) { return (t = cc(t)) && R.test(t) ? t.replace(E, Ee) : t }, wn.escapeRegExp = function(t) { return (t = cc(t)) && $.test(t) ? t.replace(V, "\\$&") : t }, wn.every = function(t, e, n) { var r = Sa(t) ? le : nr; return n && si(t, e, n) && (e = void 0), r(t, Jo(e, 3)) }, wn.find = ia, wn.findIndex = Wi, wn.findKey = function(t, e) { return ge(t, Jo(e, 3), sr) }, wn.findLast = aa, wn.findLastIndex = Si, wn.findLastKey = function(t, e) { return ge(t, Jo(e, 3), lr) }, wn.floor = ls, wn.forEach = ca, wn.forEachRight = sa, wn.forIn = function(t, e) { return null == t ? t : ar(t, Jo(e, 3), yc) }, wn.forInRight = function(t, e) { return null == t ? t : cr(t, Jo(e, 3), yc) }, wn.forOwn = function(t, e) { return t && sr(t, Jo(e, 3)) }, wn.forOwnRight = function(t, e) { return t && lr(t, Jo(e, 3)) }, wn.get = Mc, wn.gt = qa, wn.gte = Ca, wn.has = function(t, e) { return null != t && oi(t, e, Mr) }, wn.hasIn = bc, wn.head = Bi, wn.identity = Vc, wn.includes = function(t, e, n, r) { t = Ba(t) ? t : Tc(t), n = n && !r ? rc(n) : 0; var o = t.length; return n < 0 && (n = an(o + n, 0)), Ka(t) ? n <= o && t.indexOf(e, n) > -1 : !!o && ye(t, e, n) > -1 }, wn.indexOf = function(t, e, n) { var r = null == t ? 0 : t.length; if (!r) return -1; var o = null == n ? 0 : rc(n); return o < 0 && (o = an(r + o, 0)), ye(t, e, o) }, wn.inRange = function(t, e, n) { return e = nc(e), void 0 === n ? (n = e, e = 0) : n = nc(n),
                            function(t, e, n) { return t >= cn(e, n) && t < an(e, n) }(t = ic(t), e, n) }, wn.invoke = gc, wn.isArguments = Wa, wn.isArray = Sa, wn.isArrayBuffer = ka, wn.isArrayLike = Ba, wn.isArrayLikeObject = Xa, wn.isBoolean = function(t) { return !0 === t || !1 === t || Ha(t) && pr(t) == u }, wn.isBuffer = Ea, wn.isDate = Da, wn.isElement = function(t) { return Ha(t) && 1 === t.nodeType && !$a(t) }, wn.isEmpty = function(t) { if (null == t) return !0; if (Ba(t) && (Sa(t) || "string" == typeof t || "function" == typeof t.splice || Ea(t) || Qa(t) || Wa(t))) return !t.length; var e = ri(t); if (e == M || e == g) return !t.size; if (di(t)) return !Or(t).length; for (var n in t)
                            if (Ot.call(t, n)) return !1;
                        return !0 }, wn.isEqual = function(t, e) { return Ar(t, e) }, wn.isEqualWith = function(t, e, n) { var r = (n = "function" == typeof n ? n : void 0) ? n(t, e) : void 0; return void 0 === r ? Ar(t, e, void 0, n) : !!r }, wn.isError = Ra, wn.isFinite = function(t) { return "number" == typeof t && nn(t) }, wn.isFunction = Pa, wn.isInteger = Ia, wn.isLength = ja, wn.isMap = Ua, wn.isMatch = function(t, e) { return t === e || yr(t, e, Zo(e)) }, wn.isMatchWith = function(t, e, n) { return n = "function" == typeof n ? n : void 0, yr(t, e, Zo(e), n) }, wn.isNaN = function(t) { return Va(t) && t != +t }, wn.isNative = function(t) { if (fi(t)) throw new dt("Unsupported core-js use. Try https://npms.io/search?q=ponyfill."); return zr(t) }, wn.isNil = function(t) { return null == t }, wn.isNull = function(t) { return null === t }, wn.isNumber = Va, wn.isObject = Fa, wn.isObjectLike = Ha, wn.isPlainObject = $a, wn.isRegExp = Ya, wn.isSafeInteger = function(t) { return Ia(t) && t >= -9007199254740991 && t <= 9007199254740991 }, wn.isSet = Ga, wn.isString = Ka, wn.isSymbol = Ja, wn.isTypedArray = Qa, wn.isUndefined = function(t) { return void 0 === t }, wn.isWeakMap = function(t) { return Ha(t) && ri(t) == z }, wn.isWeakSet = function(t) { return Ha(t) && "[object WeakSet]" == pr(t) }, wn.join = function(t, e) { return null == t ? "" : rn.call(t, e) }, wn.kebabCase = Sc, wn.last = Ri, wn.lastIndexOf = function(t, e, n) { var r = null == t ? 0 : t.length; if (!r) return -1; var o = r; return void 0 !== n && (o = (o = rc(n)) < 0 ? an(r + o, 0) : cn(o, r - 1)), e == e ? function(t, e, n) { for (var r = n + 1; r--;)
                                if (t[r] === e) return r;
                            return r }(t, e, o) : Ae(t, _e, o, !0) }, wn.lowerCase = kc, wn.lowerFirst = Bc, wn.lt = Za, wn.lte = tc, wn.max = function(t) { return t && t.length ? rr(t, Vc, hr) : void 0 }, wn.maxBy = function(t, e) { return t && t.length ? rr(t, Jo(e, 2), hr) : void 0 }, wn.mean = function(t) { return Oe(t, Vc) }, wn.meanBy = function(t, e) { return Oe(t, Jo(e, 2)) }, wn.min = function(t) { return t && t.length ? rr(t, Vc, Lr) : void 0 }, wn.minBy = function(t, e) { return t && t.length ? rr(t, Jo(e, 2), Lr) : void 0 }, wn.stubArray = os, wn.stubFalse = is, wn.stubObject = function() { return {} }, wn.stubString = function() { return "" }, wn.stubTrue = function() { return !0 }, wn.multiply = fs, wn.nth = function(t, e) { return t && t.length ? Cr(t, rc(e)) : void 0 }, wn.noConflict = function() { return $t._ === this && ($t._ = Tt), this }, wn.noop = Jc, wn.now = Ma, wn.pad = function(t, e, n) { t = cc(t); var r = (e = rc(e)) ? Ue(t) : 0; if (!e || r >= e) return t; var o = (e - r) / 2; return So(Ze(o), n) + t + So(Qe(o), n) }, wn.padEnd = function(t, e, n) { t = cc(t); var r = (e = rc(e)) ? Ue(t) : 0; return e && r < e ? t + So(e - r, n) : t }, wn.padStart = function(t, e, n) { t = cc(t); var r = (e = rc(e)) ? Ue(t) : 0; return e && r < e ? So(e - r, n) + t : t }, wn.parseInt = function(t, e, n) { return n || null == e ? e = 0 : e && (e = +e), ln(cc(t).replace(G, ""), e || 0) }, wn.random = function(t, e, n) { if (n && "boolean" != typeof n && si(t, e, n) && (e = n = void 0), void 0 === n && ("boolean" == typeof e ? (n = e, e = void 0) : "boolean" == typeof t && (n = t, t = void 0)), void 0 === t && void 0 === e ? (t = 0, e = 1) : (t = nc(t), void 0 === e ? (e = t, t = 0) : e = nc(e)), t > e) { var r = t;
                            t = e, e = r } if (n || t % 1 || e % 1) { var o = un(); return cn(t + o * (e - t + Ft("1e-" + ((o + "").length - 1))), e) } return Xr(t, e) }, wn.reduce = function(t, e, n) { var r = Sa(t) ? Me : Ne,
                            o = arguments.length < 3; return r(t, Jo(e, 4), n, o, tr) }, wn.reduceRight = function(t, e, n) { var r = Sa(t) ? be : Ne,
                            o = arguments.length < 3; return r(t, Jo(e, 4), n, o, er) }, wn.repeat = function(t, e, n) { return e = (n ? si(t, e, n) : void 0 === e) ? 1 : rc(e), Er(cc(t), e) }, wn.replace = function() { var t = arguments,
                            e = cc(t[0]); return t.length < 3 ? e : e.replace(t[1], t[2]) }, wn.result = function(t, e, n) { var r = -1,
                            o = (e = co(e, t)).length; for (o || (o = 1, t = void 0); ++r < o;) { var i = null == t ? void 0 : t[Li(e[r])];
                            void 0 === i && (r = o, i = n), t = Pa(i) ? i.call(t) : i } return t }, wn.round = ds, wn.runInContext = t, wn.sample = function(t) { return (Sa(t) ? Rn : Rr)(t) }, wn.size = function(t) { if (null == t) return 0; if (Ba(t)) return Ka(t) ? Ue(t) : t.length; var e = ri(t); return e == M || e == g ? t.size : Or(t).length }, wn.snakeCase = Xc, wn.some = function(t, e, n) { var r = Sa(t) ? me : Vr; return n && si(t, e, n) && (e = void 0), r(t, Jo(e, 3)) }, wn.sortedIndex = function(t, e) { return $r(t, e) }, wn.sortedIndexBy = function(t, e, n) { return Yr(t, e, Jo(n, 2)) }, wn.sortedIndexOf = function(t, e) { var n = null == t ? 0 : t.length; if (n) { var r = $r(t, e); if (r < n && Ta(t[r], e)) return r } return -1 }, wn.sortedLastIndex = function(t, e) { return $r(t, e, !0) }, wn.sortedLastIndexBy = function(t, e, n) { return Yr(t, e, Jo(n, 2), !0) }, wn.sortedLastIndexOf = function(t, e) { if (null == t ? 0 : t.length) { var n = $r(t, e, !0) - 1; if (Ta(t[n], e)) return n } return -1 }, wn.startCase = Ec, wn.startsWith = function(t, e, n) { return t = cc(t), n = null == n ? 0 : Gn(rc(n), 0, t.length), e = Jr(e), t.slice(n, n + e.length) == e }, wn.subtract = ps, wn.sum = function(t) { return t && t.length ? we(t, Vc) : 0 }, wn.sumBy = function(t, e) { return t && t.length ? we(t, Jo(e, 2)) : 0 }, wn.template = function(t, e, n) { var r = wn.templateSettings;
                        n && si(t, e, n) && (e = void 0), t = cc(t), e = uc({}, e, r, Io); var o, i, a = uc({}, e.imports, r.imports, Io),
                            c = Ac(a),
                            s = Ce(a, c),
                            l = 0,
                            u = e.interpolate || ut,
                            f = "__p += '",
                            d = bt((e.escape || ut).source + "|" + u.source + "|" + (u === j ? nt : ut).source + "|" + (e.evaluate || ut).source + "|$", "g"),
                            p = "//# sourceURL=" + (Ot.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Rt + "]") + "\n";
                        t.replace(d, (function(e, n, r, a, c, s) { return r || (r = a), f += t.slice(l, s).replace(ft, De), n && (o = !0, f += "' +\n__e(" + n + ") +\n'"), c && (i = !0, f += "';\n" + c + ";\n__p += '"), r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), l = s + e.length, e })), f += "';\n"; var h = Ot.call(e, "variable") && e.variable;
                        h || (f = "with (obj) {\n" + f + "\n}\n"), f = (i ? f.replace(S, "") : f).replace(k, "$1").replace(B, "$1;"), f = "function(" + (h || "obj") + ") {\n" + (h ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (i ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}"; var M = Ic((function() { return pt(c, p + "return " + f).apply(void 0, s) })); if (M.source = f, Ra(M)) throw M; return M }, wn.times = function(t, e) { if ((t = rc(t)) < 1 || t > 9007199254740991) return []; var n = 4294967295,
                            r = cn(t, 4294967295);
                        t -= 4294967295; for (var o = Te(r, e = Jo(e)); ++n < t;) e(n); return o }, wn.toFinite = nc, wn.toInteger = rc, wn.toLength = oc, wn.toLower = function(t) { return cc(t).toLowerCase() }, wn.toNumber = ic, wn.toSafeInteger = function(t) { return t ? Gn(rc(t), -9007199254740991, 9007199254740991) : 0 === t ? t : 0 }, wn.toString = cc, wn.toUpper = function(t) { return cc(t).toUpperCase() }, wn.trim = function(t, e, n) { if ((t = cc(t)) && (n || void 0 === e)) return t.replace(Y, ""); if (!t || !(e = Jr(e))) return t; var r = Ve(t),
                            o = Ve(e); return lo(r, Se(r, o), ke(r, o) + 1).join("") }, wn.trimEnd = function(t, e, n) { if ((t = cc(t)) && (n || void 0 === e)) return t.replace(K, ""); if (!t || !(e = Jr(e))) return t; var r = Ve(t); return lo(r, 0, ke(r, Ve(e)) + 1).join("") }, wn.trimStart = function(t, e, n) { if ((t = cc(t)) && (n || void 0 === e)) return t.replace(G, ""); if (!t || !(e = Jr(e))) return t; var r = Ve(t); return lo(r, Se(r, Ve(e))).join("") }, wn.truncate = function(t, e) { var n = 30,
                            r = "..."; if (Fa(e)) { var o = "separator" in e ? e.separator : o;
                            n = "length" in e ? rc(e.length) : n, r = "omission" in e ? Jr(e.omission) : r } var i = (t = cc(t)).length; if (Re(t)) { var a = Ve(t);
                            i = a.length } if (n >= i) return t; var c = n - Ue(r); if (c < 1) return r; var s = a ? lo(a, 0, c).join("") : t.slice(0, c); if (void 0 === o) return s + r; if (a && (c += s.length - c), Ya(o)) { if (t.slice(c).search(o)) { var l, u = s; for (o.global || (o = bt(o.source, cc(rt.exec(o)) + "g")), o.lastIndex = 0; l = o.exec(u);) var f = l.index;
                                s = s.slice(0, void 0 === f ? c : f) } } else if (t.indexOf(Jr(o), c) != c) { var d = s.lastIndexOf(o);
                            d > -1 && (s = s.slice(0, d)) } return s + r }, wn.unescape = function(t) { return (t = cc(t)) && D.test(t) ? t.replace(X, $e) : t }, wn.uniqueId = function(t) { var e = ++xt; return cc(t) + e }, wn.upperCase = Dc, wn.upperFirst = Rc, wn.each = ca, wn.eachRight = sa, wn.first = Bi, Kc(wn, (us = {}, sr(wn, (function(t, e) { Ot.call(wn.prototype, e) || (us[e] = t) })), us), { chain: !1 }), wn.VERSION = "4.17.19", ce(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(t) { wn[t].placeholder = wn })), ce(["drop", "take"], (function(t, e) { Wn.prototype[t] = function(n) { n = void 0 === n ? 1 : an(rc(n), 0); var r = this.__filtered__ && !e ? new Wn(this) : this.clone(); return r.__filtered__ ? r.__takeCount__ = cn(n, r.__takeCount__) : r.__views__.push({ size: cn(n, 4294967295), type: t + (r.__dir__ < 0 ? "Right" : "") }), r }, Wn.prototype[t + "Right"] = function(e) { return this.reverse()[t](e).reverse() } })), ce(["filter", "map", "takeWhile"], (function(t, e) { var n = e + 1,
                            r = 1 == n || 3 == n;
                        Wn.prototype[t] = function(t) { var e = this.clone(); return e.__iteratees__.push({ iteratee: Jo(t, 3), type: n }), e.__filtered__ = e.__filtered__ || r, e } })), ce(["head", "last"], (function(t, e) { var n = "take" + (e ? "Right" : "");
                        Wn.prototype[t] = function() { return this[n](1).value()[0] } })), ce(["initial", "tail"], (function(t, e) { var n = "drop" + (e ? "" : "Right");
                        Wn.prototype[t] = function() { return this.__filtered__ ? new Wn(this) : this[n](1) } })), Wn.prototype.compact = function() { return this.filter(Vc) }, Wn.prototype.find = function(t) { return this.filter(t).head() }, Wn.prototype.findLast = function(t) { return this.reverse().find(t) }, Wn.prototype.invokeMap = Dr((function(t, e) { return "function" == typeof t ? new Wn(this) : this.map((function(n) { return vr(n, t, e) })) })), Wn.prototype.reject = function(t) { return this.filter(Oa(Jo(t))) }, Wn.prototype.slice = function(t, e) { t = rc(t); var n = this; return n.__filtered__ && (t > 0 || e < 0) ? new Wn(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)), void 0 !== e && (n = (e = rc(e)) < 0 ? n.dropRight(-e) : n.take(e - t)), n) }, Wn.prototype.takeRightWhile = function(t) { return this.reverse().takeWhile(t).reverse() }, Wn.prototype.toArray = function() { return this.take(4294967295) }, sr(Wn.prototype, (function(t, e) { var n = /^(?:filter|find|map|reject)|While$/.test(e),
                            r = /^(?:head|last)$/.test(e),
                            o = wn[r ? "take" + ("last" == e ? "Right" : "") : e],
                            i = r || /^find/.test(e);
                        o && (wn.prototype[e] = function() { var e = this.__wrapped__,
                                a = r ? [1] : arguments,
                                c = e instanceof Wn,
                                s = a[0],
                                l = c || Sa(e),
                                u = function(t) { var e = o.apply(wn, he([t], a)); return r && f ? e[0] : e };
                            l && n && "function" == typeof s && 1 != s.length && (c = l = !1); var f = this.__chain__,
                                d = !!this.__actions__.length,
                                p = i && !f,
                                h = c && !d; if (!i && l) { e = h ? e : new Wn(this); var M = t.apply(e, a); return M.__actions__.push({ func: na, args: [u], thisArg: void 0 }), new Cn(M, f) } return p && h ? t.apply(this, a) : (M = this.thru(u), p ? r ? M.value()[0] : M.value() : M) }) })), ce(["pop", "push", "shift", "sort", "splice", "unshift"], (function(t) { var e = gt[t],
                            n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                            r = /^(?:pop|shift)$/.test(t);
                        wn.prototype[t] = function() { var t = arguments; if (r && !this.__chain__) { var o = this.value(); return e.apply(Sa(o) ? o : [], t) } return this[n]((function(n) { return e.apply(Sa(n) ? n : [], t) })) } })), sr(Wn.prototype, (function(t, e) { var n = wn[e]; if (n) { var r = n.name + "";
                            Ot.call(gn, r) || (gn[r] = []), gn[r].push({ name: e, func: n }) } })), gn[To(void 0, 2).name] = [{ name: "wrapper", func: void 0 }], Wn.prototype.clone = function() { var t = new Wn(this.__wrapped__); return t.__actions__ = vo(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = vo(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = vo(this.__views__), t }, Wn.prototype.reverse = function() { if (this.__filtered__) { var t = new Wn(this);
                            t.__dir__ = -1, t.__filtered__ = !0 } else(t = this.clone()).__dir__ *= -1; return t }, Wn.prototype.value = function() { var t = this.__wrapped__.value(),
                            e = this.__dir__,
                            n = Sa(t),
                            r = e < 0,
                            o = n ? t.length : 0,
                            i = function(t, e, n) { var r = -1,
                                    o = n.length; for (; ++r < o;) { var i = n[r],
                                        a = i.size; switch (i.type) {
                                        case "drop":
                                            t += a; break;
                                        case "dropRight":
                                            e -= a; break;
                                        case "take":
                                            e = cn(e, t + a); break;
                                        case "takeRight":
                                            t = an(t, e - a) } } return { start: t, end: e } }(0, o, this.__views__),
                            a = i.start,
                            c = i.end,
                            s = c - a,
                            l = r ? c : a - 1,
                            u = this.__iteratees__,
                            f = u.length,
                            d = 0,
                            p = cn(s, this.__takeCount__); if (!n || !r && o == s && p == s) return no(t, this.__actions__); var h = [];
                        t: for (; s-- && d < p;) { for (var M = -1, b = t[l += e]; ++M < f;) { var m = u[M],
                                    v = m.iteratee,
                                    g = m.type,
                                    A = v(b); if (2 == g) b = A;
                                else if (!A) { if (1 == g) continue t; break t } }
                            h[d++] = b }
                        return h }, wn.prototype.at = ra, wn.prototype.chain = function() { return ea(this) }, wn.prototype.commit = function() { return new Cn(this.value(), this.__chain__) }, wn.prototype.next = function() { void 0 === this.__values__ && (this.__values__ = ec(this.value())); var t = this.__index__ >= this.__values__.length; return { done: t, value: t ? void 0 : this.__values__[this.__index__++] } }, wn.prototype.plant = function(t) { for (var e, n = this; n instanceof qn;) { var r = wi(n);
                            r.__index__ = 0, r.__values__ = void 0, e ? o.__wrapped__ = r : e = r; var o = r;
                            n = n.__wrapped__ } return o.__wrapped__ = t, e }, wn.prototype.reverse = function() { var t = this.__wrapped__; if (t instanceof Wn) { var e = t; return this.__actions__.length && (e = new Wn(this)), (e = e.reverse()).__actions__.push({ func: na, args: [Fi], thisArg: void 0 }), new Cn(e, this.__chain__) } return this.thru(Fi) }, wn.prototype.toJSON = wn.prototype.valueOf = wn.prototype.value = function() { return no(this.__wrapped__, this.__actions__) }, wn.prototype.first = wn.prototype.head, Qt && (wn.prototype[Qt] = function() { return this }), wn }();
                $t._ = Ye, void 0 === (o = function() { return Ye }.call(e, n, e, r)) || (r.exports = o) }).call(this) }).call(this, n("yLpj"), n("YuTi")(t)) }, M99z: function(t, e, n) { "use strict";
        n.r(e); var r = n("vDqi"),
            o = n.n(r),
            i = { mixins: [n("044u").a], data: function() { return { currentTab: "payload", running: !1 } }, methods: { run: function(t, e) { var n = this; if (!this.running) { this.running = !0; var r = setTimeout((function() { return n.$router.push({ name: "jobs-index", query: n.$route.query, params: { group: "failed" } }) }), 1e3);
                            o.a.post("/vapor-ui/api/jobs/failed/".concat(t, "/").concat(e.id)).then(r) } } } },
            a = n("KHd+"),
            c = Object(a.a)(i, (function() { var t = this,
                    e = t.$createElement,
                    n = t._self._c || e; return n("search-details", { scopedSlots: t._u([{ key: "actions", fn: function(e) { var r = e.entry; return [n("span", { staticClass: "order-0 sm:order-1 sm:ml-3 shadow-sm rounded-md" }, [n("async-button", { staticClass: "inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150", attrs: { type: "button", loading: t.running, disabled: t.running }, nativeOn: { click: function(e) { return e.preventDefault(), t.run("retry", r) } } }, [t._v("\n                Retry\n            ")])], 1), t._v(" "), n("span", { staticClass: "order-0 sm:order-1 sm:ml-3 shadow-sm rounded-md" }, [n("async-button", { staticClass: "inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150", attrs: { type: "button", loading: t.running, disabled: t.running }, nativeOn: { click: function(e) { return e.preventDefault(), t.run("forget", r) } } }, [t._v("\n                Forget\n            ")])], 1)] } }, { key: "details", fn: function(e) { var r = e.entry; return [n("div", { staticClass: "sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5" }, [n("dt", { staticClass: "text-sm leading-5 font-medium text-gray-500" }, [t._v("Time (" + t._s(t.moment().tz.guess()) + ")")]), t._v(" "), n("dd", { staticClass: "mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2" }, [n("div", { staticClass: "text-sm leading-5 font-medium text-gray-900" }, [t._v("\n                    " + t._s(t.moment().utc(r.timestamp, "x").local().format("YYYY-MM-DD LTS")) + "\n                ")]), t._v(" "), n("div", { staticClass: "text-sm leading-5 text-gray-500" }, [t._v("\n                    " + t._s(t.moment().utc(r.timestamp, "x").fromNow()) + "\n                ")])])]), t._v(" "), n("div", { staticClass: "mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5" }, [n("dt", { staticClass: "text-sm leading-5 font-medium text-gray-500" }, [t._v("ID")]), t._v(" "), n("dd", { staticClass: "mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2" }, [t._v("\n                " + t._s(r.id) + "\n            ")])]), t._v(" "), r.content.uuid ? n("div", { staticClass: "mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5" }, [n("dt", { staticClass: "text-sm leading-5 font-medium text-gray-500" }, [t._v("UUID")]), t._v(" "), n("dd", { staticClass: "mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2" }, [t._v("\n                " + t._s(r.content.uuid) + "\n            ")])]) : t._e(), t._v(" "), n("div", { staticClass: "mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5" }, [n("dt", { staticClass: "text-sm leading-5 font-medium text-gray-500" }, [t._v("Connection")]), t._v(" "), n("dd", { staticClass: "mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2" }, [t._v("\n                " + t._s(r.content.connection) + "\n            ")])]), t._v(" "), n("div", { staticClass: "mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5" }, [n("dt", { staticClass: "text-sm leading-5 font-medium text-gray-500" }, [t._v("Queue")]), t._v(" "), n("dd", { staticClass: "mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2" }, [t._v("\n                " + t._s(r.content.queue) + "\n            ")])]), t._v(" "), n("div", { staticClass: "mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5" }, [n("dt", { staticClass: "text-sm leading-5 font-medium text-gray-500" }, [t._v("Name")]), t._v(" "), n("dd", { staticClass: "mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2" }, [t._v("\n                " + t._s(r.content.payload.displayName) + "\n            ")])]), t._v(" "), n("div", { staticClass: "mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5" }, [n("dt", { staticClass: "text-sm leading-5 font-medium text-gray-500" }, [t._v("Message")]), t._v(" "), n("dd", { staticClass: "mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2" }, [t._v("\n                " + t._s(r.message) + "\n            ")])]), t._v(" "), n("div", { staticClass: "mt-8 sm:mt-0 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5 sm:col-span-2" }, [n("div", { staticClass: "sm:block mb-2" }, [n("nav", { staticClass: "flex" }, [n("a", { class: "px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:text-indigo-600 focus:bg-indigo-50 " + ("payload" == t.currentTab ? "text-indigo-700 bg-indigo-100" : ""), attrs: { href: "#" }, on: { click: function(e) { e.preventDefault(), t.currentTab = "payload" } } }, [t._v("\n                        Payload\n                    ")]), t._v(" "), n("a", { class: "ml-4 px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:text-indigo-600 focus:bg-indigo-50 " + ("stackTrace" == t.currentTab ? "text-indigo-700 bg-indigo-100" : ""), attrs: { href: "#" }, on: { click: function(e) { e.preventDefault(), t.currentTab = "stackTrace" } } }, [t._v("\n                        Stack Trace\n                    ")])])]), t._v(" "), n("dd", { staticClass: "mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2" }, ["payload" == t.currentTab ? n("div", { staticClass: "border border-gray-200 rounded-md bg-gray-900 text-white overflow-x-auto" }, [n("vue-json-pretty", { staticClass: "m-4 3rem", attrs: { showLine: !1, deep: 4, data: r.content.payload } })], 1) : n("div", { staticClass: "border border-gray-200 rounded-md bg-gray-900 text-white overflow-x-auto" }, [n("div", { staticClass: "m-4 3rem" }, [n("table", { staticClass: "min-w-full divide-y divide-gray-200" }, [n("tbody", t._l(r.content.exception.split("Stack trace:")[1].split(/\r?\n/), (function(e) { return n("tr", [n("td", { staticClass: "whitespace-no-wrap text-sm leading-5 font-medium text-white" }, [t._v("\n                                        " + t._s(e) + "\n                                    ")])]) })), 0)])])])])])] } }]) }) }), [], !1, null, null, null);
        e.default = c.exports }, MLWZ: function(t, e, n) { "use strict"; var r = n("xTJ+");

        function o(t) { return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") }
        t.exports = function(t, e, n) { if (!e) return t; var i; if (n) i = n(e);
            else if (r.isURLSearchParams(e)) i = e.toString();
            else { var a = [];
                r.forEach(e, (function(t, e) { null != t && (r.isArray(t) ? e += "[]" : t = [t], r.forEach(t, (function(t) { r.isDate(t) ? t = t.toISOString() : r.isObject(t) && (t = JSON.stringify(t)), a.push(o(e) + "=" + o(t)) }))) })), i = a.join("&") } if (i) { var c = t.indexOf("#"); - 1 !== c && (t = t.slice(0, c)), t += (-1 === t.indexOf("?") ? "?" : "&") + i } return t } }, "MO+k": function(t, e, n) { t.exports = function(t) { "use strict";
            t = t && t.hasOwnProperty("default") ? t.default : t; var e = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
                n = function(t, e) { return t(e = { exports: {} }, e.exports), e.exports }((function(t) { var n = {}; for (var r in e) e.hasOwnProperty(r) && (n[e[r]] = r); var o = t.exports = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } }; for (var i in o)
                        if (o.hasOwnProperty(i)) { if (!("channels" in o[i])) throw new Error("missing channels property: " + i); if (!("labels" in o[i])) throw new Error("missing channel labels property: " + i); if (o[i].labels.length !== o[i].channels) throw new Error("channel and label counts mismatch: " + i); var a = o[i].channels,
                                c = o[i].labels;
                            delete o[i].channels, delete o[i].labels, Object.defineProperty(o[i], "channels", { value: a }), Object.defineProperty(o[i], "labels", { value: c }) }
                    o.rgb.hsl = function(t) { var e, n, r = t[0] / 255,
                            o = t[1] / 255,
                            i = t[2] / 255,
                            a = Math.min(r, o, i),
                            c = Math.max(r, o, i),
                            s = c - a; return c === a ? e = 0 : r === c ? e = (o - i) / s : o === c ? e = 2 + (i - r) / s : i === c && (e = 4 + (r - o) / s), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (a + c) / 2, [e, 100 * (c === a ? 0 : n <= .5 ? s / (c + a) : s / (2 - c - a)), 100 * n] }, o.rgb.hsv = function(t) { var e, n, r, o, i, a = t[0] / 255,
                            c = t[1] / 255,
                            s = t[2] / 255,
                            l = Math.max(a, c, s),
                            u = l - Math.min(a, c, s),
                            f = function(t) { return (l - t) / 6 / u + .5 }; return 0 === u ? o = i = 0 : (i = u / l, e = f(a), n = f(c), r = f(s), a === l ? o = r - n : c === l ? o = 1 / 3 + e - r : s === l && (o = 2 / 3 + n - e), o < 0 ? o += 1 : o > 1 && (o -= 1)), [360 * o, 100 * i, 100 * l] }, o.rgb.hwb = function(t) { var e = t[0],
                            n = t[1],
                            r = t[2]; return [o.rgb.hsl(t)[0], 1 / 255 * Math.min(e, Math.min(n, r)) * 100, 100 * (r = 1 - 1 / 255 * Math.max(e, Math.max(n, r)))] }, o.rgb.cmyk = function(t) { var e, n = t[0] / 255,
                            r = t[1] / 255,
                            o = t[2] / 255; return [100 * ((1 - n - (e = Math.min(1 - n, 1 - r, 1 - o))) / (1 - e) || 0), 100 * ((1 - r - e) / (1 - e) || 0), 100 * ((1 - o - e) / (1 - e) || 0), 100 * e] }, o.rgb.keyword = function(t) { var r = n[t]; if (r) return r; var o, i, a, c = 1 / 0; for (var s in e)
                            if (e.hasOwnProperty(s)) { var l = e[s],
                                    u = (i = t, a = l, Math.pow(i[0] - a[0], 2) + Math.pow(i[1] - a[1], 2) + Math.pow(i[2] - a[2], 2));
                                u < c && (c = u, o = s) }
                        return o }, o.keyword.rgb = function(t) { return e[t] }, o.rgb.xyz = function(t) { var e = t[0] / 255,
                            n = t[1] / 255,
                            r = t[2] / 255; return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * r), 100 * (.0193 * e + .1192 * n + .9505 * r)] }, o.rgb.lab = function(t) { var e = o.rgb.xyz(t),
                            n = e[0],
                            r = e[1],
                            i = e[2]; return r /= 100, i /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (n - r), 200 * (r - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))] }, o.hsl.rgb = function(t) { var e, n, r, o, i, a = t[0] / 360,
                            c = t[1] / 100,
                            s = t[2] / 100; if (0 === c) return [i = 255 * s, i, i];
                        e = 2 * s - (n = s < .5 ? s * (1 + c) : s + c - s * c), o = [0, 0, 0]; for (var l = 0; l < 3; l++)(r = a + 1 / 3 * -(l - 1)) < 0 && r++, r > 1 && r--, i = 6 * r < 1 ? e + 6 * (n - e) * r : 2 * r < 1 ? n : 3 * r < 2 ? e + (n - e) * (2 / 3 - r) * 6 : e, o[l] = 255 * i; return o }, o.hsl.hsv = function(t) { var e = t[0],
                            n = t[1] / 100,
                            r = t[2] / 100,
                            o = n,
                            i = Math.max(r, .01); return n *= (r *= 2) <= 1 ? r : 2 - r, o *= i <= 1 ? i : 2 - i, [e, 100 * (0 === r ? 2 * o / (i + o) : 2 * n / (r + n)), (r + n) / 2 * 100] }, o.hsv.rgb = function(t) { var e = t[0] / 60,
                            n = t[1] / 100,
                            r = t[2] / 100,
                            o = Math.floor(e) % 6,
                            i = e - Math.floor(e),
                            a = 255 * r * (1 - n),
                            c = 255 * r * (1 - n * i),
                            s = 255 * r * (1 - n * (1 - i)); switch (r *= 255, o) {
                            case 0:
                                return [r, s, a];
                            case 1:
                                return [c, r, a];
                            case 2:
                                return [a, r, s];
                            case 3:
                                return [a, c, r];
                            case 4:
                                return [s, a, r];
                            case 5:
                                return [r, a, c] } }, o.hsv.hsl = function(t) { var e, n, r, o = t[0],
                            i = t[1] / 100,
                            a = t[2] / 100,
                            c = Math.max(a, .01); return r = (2 - i) * a, n = i * c, [o, 100 * (n = (n /= (e = (2 - i) * c) <= 1 ? e : 2 - e) || 0), 100 * (r /= 2)] }, o.hwb.rgb = function(t) { var e, n, r, o, i, a, c, s = t[0] / 360,
                            l = t[1] / 100,
                            u = t[2] / 100,
                            f = l + u; switch (f > 1 && (l /= f, u /= f), r = 6 * s - (e = Math.floor(6 * s)), 0 != (1 & e) && (r = 1 - r), o = l + r * ((n = 1 - u) - l), e) { default:
                                case 6:
                                case 0:
                                i = n, a = o, c = l; break;
                            case 1:
                                    i = o, a = n, c = l; break;
                            case 2:
                                    i = l, a = n, c = o; break;
                            case 3:
                                    i = l, a = o, c = n; break;
                            case 4:
                                    i = o, a = l, c = n; break;
                            case 5:
                                    i = n, a = l, c = o } return [255 * i, 255 * a, 255 * c] }, o.cmyk.rgb = function(t) { var e = t[0] / 100,
                            n = t[1] / 100,
                            r = t[2] / 100,
                            o = t[3] / 100; return [255 * (1 - Math.min(1, e * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o)), 255 * (1 - Math.min(1, r * (1 - o) + o))] }, o.xyz.rgb = function(t) { var e, n, r, o = t[0] / 100,
                            i = t[1] / 100,
                            a = t[2] / 100; return n = -.9689 * o + 1.8758 * i + .0415 * a, r = .0557 * o + -.204 * i + 1.057 * a, e = (e = 3.2406 * o + -1.5372 * i + -.4986 * a) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))] }, o.xyz.lab = function(t) { var e = t[0],
                            n = t[1],
                            r = t[2]; return n /= 100, r /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))] }, o.lab.xyz = function(t) { var e, n, r, o = t[0];
                        e = t[1] / 500 + (n = (o + 16) / 116), r = n - t[2] / 200; var i = Math.pow(n, 3),
                            a = Math.pow(e, 3),
                            c = Math.pow(r, 3); return n = i > .008856 ? i : (n - 16 / 116) / 7.787, e = a > .008856 ? a : (e - 16 / 116) / 7.787, r = c > .008856 ? c : (r - 16 / 116) / 7.787, [e *= 95.047, n *= 100, r *= 108.883] }, o.lab.lch = function(t) { var e, n = t[0],
                            r = t[1],
                            o = t[2]; return (e = 360 * Math.atan2(o, r) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(r * r + o * o), e] }, o.lch.lab = function(t) { var e, n = t[0],
                            r = t[1]; return e = t[2] / 360 * 2 * Math.PI, [n, r * Math.cos(e), r * Math.sin(e)] }, o.rgb.ansi16 = function(t) { var e = t[0],
                            n = t[1],
                            r = t[2],
                            i = 1 in arguments ? arguments[1] : o.rgb.hsv(t)[2]; if (0 === (i = Math.round(i / 50))) return 30; var a = 30 + (Math.round(r / 255) << 2 | Math.round(n / 255) << 1 | Math.round(e / 255)); return 2 === i && (a += 60), a }, o.hsv.ansi16 = function(t) { return o.rgb.ansi16(o.hsv.rgb(t), t[2]) }, o.rgb.ansi256 = function(t) { var e = t[0],
                            n = t[1],
                            r = t[2]; return e === n && n === r ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5) }, o.ansi16.rgb = function(t) { var e = t % 10; if (0 === e || 7 === e) return t > 50 && (e += 3.5), [e = e / 10.5 * 255, e, e]; var n = .5 * (1 + ~~(t > 50)); return [(1 & e) * n * 255, (e >> 1 & 1) * n * 255, (e >> 2 & 1) * n * 255] }, o.ansi256.rgb = function(t) { if (t >= 232) { var e = 10 * (t - 232) + 8; return [e, e, e] } var n; return t -= 16, [Math.floor(t / 36) / 5 * 255, Math.floor((n = t % 36) / 6) / 5 * 255, n % 6 / 5 * 255] }, o.rgb.hex = function(t) { var e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase(); return "000000".substring(e.length) + e }, o.hex.rgb = function(t) { var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i); if (!e) return [0, 0, 0]; var n = e[0];
                        3 === e[0].length && (n = n.split("").map((function(t) { return t + t })).join("")); var r = parseInt(n, 16); return [r >> 16 & 255, r >> 8 & 255, 255 & r] }, o.rgb.hcg = function(t) { var e, n = t[0] / 255,
                            r = t[1] / 255,
                            o = t[2] / 255,
                            i = Math.max(Math.max(n, r), o),
                            a = Math.min(Math.min(n, r), o),
                            c = i - a; return e = c <= 0 ? 0 : i === n ? (r - o) / c % 6 : i === r ? 2 + (o - n) / c : 4 + (n - r) / c + 4, e /= 6, [360 * (e %= 1), 100 * c, 100 * (c < 1 ? a / (1 - c) : 0)] }, o.hsl.hcg = function(t) { var e = t[1] / 100,
                            n = t[2] / 100,
                            r = 1,
                            o = 0; return (r = n < .5 ? 2 * e * n : 2 * e * (1 - n)) < 1 && (o = (n - .5 * r) / (1 - r)), [t[0], 100 * r, 100 * o] }, o.hsv.hcg = function(t) { var e = t[1] / 100,
                            n = t[2] / 100,
                            r = e * n,
                            o = 0; return r < 1 && (o = (n - r) / (1 - r)), [t[0], 100 * r, 100 * o] }, o.hcg.rgb = function(t) { var e = t[0] / 360,
                            n = t[1] / 100,
                            r = t[2] / 100; if (0 === n) return [255 * r, 255 * r, 255 * r]; var o, i = [0, 0, 0],
                            a = e % 1 * 6,
                            c = a % 1,
                            s = 1 - c; switch (Math.floor(a)) {
                            case 0:
                                i[0] = 1, i[1] = c, i[2] = 0; break;
                            case 1:
                                i[0] = s, i[1] = 1, i[2] = 0; break;
                            case 2:
                                i[0] = 0, i[1] = 1, i[2] = c; break;
                            case 3:
                                i[0] = 0, i[1] = s, i[2] = 1; break;
                            case 4:
                                i[0] = c, i[1] = 0, i[2] = 1; break;
                            default:
                                i[0] = 1, i[1] = 0, i[2] = s } return o = (1 - n) * r, [255 * (n * i[0] + o), 255 * (n * i[1] + o), 255 * (n * i[2] + o)] }, o.hcg.hsv = function(t) { var e = t[1] / 100,
                            n = e + t[2] / 100 * (1 - e),
                            r = 0; return n > 0 && (r = e / n), [t[0], 100 * r, 100 * n] }, o.hcg.hsl = function(t) { var e = t[1] / 100,
                            n = t[2] / 100 * (1 - e) + .5 * e,
                            r = 0; return n > 0 && n < .5 ? r = e / (2 * n) : n >= .5 && n < 1 && (r = e / (2 * (1 - n))), [t[0], 100 * r, 100 * n] }, o.hcg.hwb = function(t) { var e = t[1] / 100,
                            n = e + t[2] / 100 * (1 - e); return [t[0], 100 * (n - e), 100 * (1 - n)] }, o.hwb.hcg = function(t) { var e = t[1] / 100,
                            n = 1 - t[2] / 100,
                            r = n - e,
                            o = 0; return r < 1 && (o = (n - r) / (1 - r)), [t[0], 100 * r, 100 * o] }, o.apple.rgb = function(t) { return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255] }, o.rgb.apple = function(t) { return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535] }, o.gray.rgb = function(t) { return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255] }, o.gray.hsl = o.gray.hsv = function(t) { return [0, 0, t[0]] }, o.gray.hwb = function(t) { return [0, 100, t[0]] }, o.gray.cmyk = function(t) { return [0, 0, 0, t[0]] }, o.gray.lab = function(t) { return [t[0], 0, 0] }, o.gray.hex = function(t) { var e = 255 & Math.round(t[0] / 100 * 255),
                            n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase(); return "000000".substring(n.length) + n }, o.rgb.gray = function(t) { return [(t[0] + t[1] + t[2]) / 3 / 255 * 100] } }));

            function r(t) { var e = function() { for (var t = {}, e = Object.keys(n), r = e.length, o = 0; o < r; o++) t[e[o]] = { distance: -1, parent: null }; return t }(),
                    r = [t]; for (e[t].distance = 0; r.length;)
                    for (var o = r.pop(), i = Object.keys(n[o]), a = i.length, c = 0; c < a; c++) { var s = i[c],
                            l = e[s]; - 1 === l.distance && (l.distance = e[o].distance + 1, l.parent = o, r.unshift(s)) }
                return e }

            function o(t, e) { return function(n) { return e(t(n)) } }

            function i(t, e) { for (var r = [e[t].parent, t], i = n[e[t].parent][t], a = e[t].parent; e[a].parent;) r.unshift(e[a].parent), i = o(n[e[a].parent][a], i), a = e[a].parent; return i.conversion = r, i }
            n.rgb, n.hsl, n.hsv, n.hwb, n.cmyk, n.xyz, n.lab, n.lch, n.hex, n.keyword, n.ansi16, n.ansi256, n.hcg, n.apple, n.gray; var a = {};
            Object.keys(n).forEach((function(t) { a[t] = {}, Object.defineProperty(a[t], "channels", { value: n[t].channels }), Object.defineProperty(a[t], "labels", { value: n[t].labels }); var e = function(t) { for (var e = r(t), n = {}, o = Object.keys(e), a = o.length, c = 0; c < a; c++) { var s = o[c];
                        null !== e[s].parent && (n[s] = i(s, e)) } return n }(t);
                Object.keys(e).forEach((function(n) { var r = e[n];
                    a[t][n] = function(t) { var e = function(e) { if (null == e) return e;
                            arguments.length > 1 && (e = Array.prototype.slice.call(arguments)); var n = t(e); if ("object" == typeof n)
                                for (var r = n.length, o = 0; o < r; o++) n[o] = Math.round(n[o]); return n }; return "conversion" in t && (e.conversion = t.conversion), e }(r), a[t][n].raw = function(t) { var e = function(e) { return null == e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), t(e)) }; return "conversion" in t && (e.conversion = t.conversion), e }(r) })) })); var c = a,
                s = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
                l = { getRgba: u, getHsla: f, getRgb: function(t) { var e = u(t); return e && e.slice(0, 3) }, getHsl: function(t) { var e = f(t); return e && e.slice(0, 3) }, getHwb: d, getAlpha: function(t) { var e = u(t); return e || (e = f(t)) || (e = d(t)) ? e[3] : void 0 }, hexString: function(t, e) { return e = void 0 !== e && 3 === t.length ? e : t[3], "#" + m(t[0]) + m(t[1]) + m(t[2]) + (e >= 0 && e < 1 ? m(Math.round(255 * e)) : "") }, rgbString: function(t, e) { return e < 1 || t[3] && t[3] < 1 ? p(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")" }, rgbaString: p, percentString: function(t, e) { if (e < 1 || t[3] && t[3] < 1) return h(t, e); var n = Math.round(t[0] / 255 * 100),
                            r = Math.round(t[1] / 255 * 100),
                            o = Math.round(t[2] / 255 * 100); return "rgb(" + n + "%, " + r + "%, " + o + "%)" }, percentaString: h, hslString: function(t, e) { return e < 1 || t[3] && t[3] < 1 ? M(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)" }, hslaString: M, hwbString: function(t, e) { return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")" }, keyword: function(t) { return v[t.slice(0, 3)] } };

            function u(t) { if (t) { var e = [0, 0, 0],
                        n = 1,
                        r = t.match(/^#([a-fA-F0-9]{3,4})$/i),
                        o = ""; if (r) { o = (r = r[1])[3]; for (var i = 0; i < e.length; i++) e[i] = parseInt(r[i] + r[i], 16);
                        o && (n = Math.round(parseInt(o + o, 16) / 255 * 100) / 100) } else if (r = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) { for (o = r[2], r = r[1], i = 0; i < e.length; i++) e[i] = parseInt(r.slice(2 * i, 2 * i + 2), 16);
                        o && (n = Math.round(parseInt(o, 16) / 255 * 100) / 100) } else if (r = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) { for (i = 0; i < e.length; i++) e[i] = parseInt(r[i + 1]);
                        n = parseFloat(r[4]) } else if (r = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) { for (i = 0; i < e.length; i++) e[i] = Math.round(2.55 * parseFloat(r[i + 1]));
                        n = parseFloat(r[4]) } else if (r = t.match(/(\w+)/)) { if ("transparent" == r[1]) return [0, 0, 0, 0]; if (!(e = s[r[1]])) return } for (i = 0; i < e.length; i++) e[i] = b(e[i], 0, 255); return n = n || 0 == n ? b(n, 0, 1) : 1, e[3] = n, e } }

            function f(t) { if (t) { var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/); if (e) { var n = parseFloat(e[4]); return [b(parseInt(e[1]), 0, 360), b(parseFloat(e[2]), 0, 100), b(parseFloat(e[3]), 0, 100), b(isNaN(n) ? 1 : n, 0, 1)] } } }

            function d(t) { if (t) { var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/); if (e) { var n = parseFloat(e[4]); return [b(parseInt(e[1]), 0, 360), b(parseFloat(e[2]), 0, 100), b(parseFloat(e[3]), 0, 100), b(isNaN(n) ? 1 : n, 0, 1)] } } }

            function p(t, e) { return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")" }

            function h(t, e) { return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")" }

            function M(t, e) { return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")" }

            function b(t, e, n) { return Math.min(Math.max(e, t), n) }

            function m(t) { var e = t.toString(16).toUpperCase(); return e.length < 2 ? "0" + e : e } var v = {}; for (var g in s) v[s[g]] = g; var A = function(t) { return t instanceof A ? t : this instanceof A ? (this.valid = !1, this.values = { rgb: [0, 0, 0], hsl: [0, 0, 0], hsv: [0, 0, 0], hwb: [0, 0, 0], cmyk: [0, 0, 0, 0], alpha: 1 }, void("string" == typeof t ? (e = l.getRgba(t)) ? this.setValues("rgb", e) : (e = l.getHsla(t)) ? this.setValues("hsl", e) : (e = l.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new A(t); var e };
            A.prototype = { isValid: function() { return this.valid }, rgb: function() { return this.setSpace("rgb", arguments) }, hsl: function() { return this.setSpace("hsl", arguments) }, hsv: function() { return this.setSpace("hsv", arguments) }, hwb: function() { return this.setSpace("hwb", arguments) }, cmyk: function() { return this.setSpace("cmyk", arguments) }, rgbArray: function() { return this.values.rgb }, hslArray: function() { return this.values.hsl }, hsvArray: function() { return this.values.hsv }, hwbArray: function() { var t = this.values; return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb }, cmykArray: function() { return this.values.cmyk }, rgbaArray: function() { var t = this.values; return t.rgb.concat([t.alpha]) }, hslaArray: function() { var t = this.values; return t.hsl.concat([t.alpha]) }, alpha: function(t) { return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this) }, red: function(t) { return this.setChannel("rgb", 0, t) }, green: function(t) { return this.setChannel("rgb", 1, t) }, blue: function(t) { return this.setChannel("rgb", 2, t) }, hue: function(t) { return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t) }, saturation: function(t) { return this.setChannel("hsl", 1, t) }, lightness: function(t) { return this.setChannel("hsl", 2, t) }, saturationv: function(t) { return this.setChannel("hsv", 1, t) }, whiteness: function(t) { return this.setChannel("hwb", 1, t) }, blackness: function(t) { return this.setChannel("hwb", 2, t) }, value: function(t) { return this.setChannel("hsv", 2, t) }, cyan: function(t) { return this.setChannel("cmyk", 0, t) }, magenta: function(t) { return this.setChannel("cmyk", 1, t) }, yellow: function(t) { return this.setChannel("cmyk", 2, t) }, black: function(t) { return this.setChannel("cmyk", 3, t) }, hexString: function() { return l.hexString(this.values.rgb) }, rgbString: function() { return l.rgbString(this.values.rgb, this.values.alpha) }, rgbaString: function() { return l.rgbaString(this.values.rgb, this.values.alpha) }, percentString: function() { return l.percentString(this.values.rgb, this.values.alpha) }, hslString: function() { return l.hslString(this.values.hsl, this.values.alpha) }, hslaString: function() { return l.hslaString(this.values.hsl, this.values.alpha) }, hwbString: function() { return l.hwbString(this.values.hwb, this.values.alpha) }, keyword: function() { return l.keyword(this.values.rgb, this.values.alpha) }, rgbNumber: function() { var t = this.values.rgb; return t[0] << 16 | t[1] << 8 | t[2] }, luminosity: function() { for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) { var r = t[n] / 255;
                        e[n] = r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4) } return .2126 * e[0] + .7152 * e[1] + .0722 * e[2] }, contrast: function(t) { var e = this.luminosity(),
                        n = t.luminosity(); return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05) }, level: function(t) { var e = this.contrast(t); return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "" }, dark: function() { var t = this.values.rgb; return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128 }, light: function() { return !this.dark() }, negate: function() { for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e]; return this.setValues("rgb", t), this }, lighten: function(t) { var e = this.values.hsl; return e[2] += e[2] * t, this.setValues("hsl", e), this }, darken: function(t) { var e = this.values.hsl; return e[2] -= e[2] * t, this.setValues("hsl", e), this }, saturate: function(t) { var e = this.values.hsl; return e[1] += e[1] * t, this.setValues("hsl", e), this }, desaturate: function(t) { var e = this.values.hsl; return e[1] -= e[1] * t, this.setValues("hsl", e), this }, whiten: function(t) { var e = this.values.hwb; return e[1] += e[1] * t, this.setValues("hwb", e), this }, blacken: function(t) { var e = this.values.hwb; return e[2] += e[2] * t, this.setValues("hwb", e), this }, greyscale: function() { var t = this.values.rgb,
                        e = .3 * t[0] + .59 * t[1] + .11 * t[2]; return this.setValues("rgb", [e, e, e]), this }, clearer: function(t) { var e = this.values.alpha; return this.setValues("alpha", e - e * t), this }, opaquer: function(t) { var e = this.values.alpha; return this.setValues("alpha", e + e * t), this }, rotate: function(t) { var e = this.values.hsl,
                        n = (e[0] + t) % 360; return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this }, mix: function(t, e) { var n = t,
                        r = void 0 === e ? .5 : e,
                        o = 2 * r - 1,
                        i = this.alpha() - n.alpha(),
                        a = ((o * i == -1 ? o : (o + i) / (1 + o * i)) + 1) / 2,
                        c = 1 - a; return this.rgb(a * this.red() + c * n.red(), a * this.green() + c * n.green(), a * this.blue() + c * n.blue()).alpha(this.alpha() * r + n.alpha() * (1 - r)) }, toJSON: function() { return this.rgb() }, clone: function() { var t, e, n = new A,
                        r = this.values,
                        o = n.values; for (var i in r) r.hasOwnProperty(i) && (t = r[i], "[object Array]" === (e = {}.toString.call(t)) ? o[i] = t.slice(0) : "[object Number]" === e && (o[i] = t)); return n } }, A.prototype.spaces = { rgb: ["red", "green", "blue"], hsl: ["hue", "saturation", "lightness"], hsv: ["hue", "saturation", "value"], hwb: ["hue", "whiteness", "blackness"], cmyk: ["cyan", "magenta", "yellow", "black"] }, A.prototype.maxes = { rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100] }, A.prototype.getValues = function(t) { for (var e = this.values, n = {}, r = 0; r < t.length; r++) n[t.charAt(r)] = e[t][r]; return 1 !== e.alpha && (n.a = e.alpha), n }, A.prototype.setValues = function(t, e) { var n, r, o = this.values,
                    i = this.spaces,
                    a = this.maxes,
                    s = 1; if (this.valid = !0, "alpha" === t) s = e;
                else if (e.length) o[t] = e.slice(0, t.length), s = e[t.length];
                else if (void 0 !== e[t.charAt(0)]) { for (n = 0; n < t.length; n++) o[t][n] = e[t.charAt(n)];
                    s = e.a } else if (void 0 !== e[i[t][0]]) { var l = i[t]; for (n = 0; n < t.length; n++) o[t][n] = e[l[n]];
                    s = e.alpha } if (o.alpha = Math.max(0, Math.min(1, void 0 === s ? o.alpha : s)), "alpha" === t) return !1; for (n = 0; n < t.length; n++) r = Math.max(0, Math.min(a[t][n], o[t][n])), o[t][n] = Math.round(r); for (var u in i) u !== t && (o[u] = c[t][u](o[t])); return !0 }, A.prototype.setSpace = function(t, e) { var n = e[0]; return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this) }, A.prototype.setChannel = function(t, e, n) { var r = this.values[t]; return void 0 === n ? r[e] : (n === r[e] || (r[e] = n, this.setValues(t, r)), this) }, "undefined" != typeof window && (window.Color = A); var y, z = A,
                _ = { noop: function() {}, uid: (y = 0, function() { return y++ }), isNullOrUndef: function(t) { return null == t }, isArray: function(t) { if (Array.isArray && Array.isArray(t)) return !0; var e = Object.prototype.toString.call(t); return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6) }, isObject: function(t) { return null !== t && "[object Object]" === Object.prototype.toString.call(t) }, isFinite: function(t) { return ("number" == typeof t || t instanceof Number) && isFinite(t) }, valueOrDefault: function(t, e) { return void 0 === t ? e : t }, valueAtIndexOrDefault: function(t, e, n) { return _.valueOrDefault(_.isArray(t) ? t[e] : t, n) }, callback: function(t, e, n) { if (t && "function" == typeof t.call) return t.apply(n, e) }, each: function(t, e, n, r) { var o, i, a; if (_.isArray(t))
                            if (i = t.length, r)
                                for (o = i - 1; o >= 0; o--) e.call(n, t[o], o);
                            else
                                for (o = 0; o < i; o++) e.call(n, t[o], o);
                        else if (_.isObject(t))
                            for (i = (a = Object.keys(t)).length, o = 0; o < i; o++) e.call(n, t[a[o]], a[o]) }, arrayEquals: function(t, e) { var n, r, o, i; if (!t || !e || t.length !== e.length) return !1; for (n = 0, r = t.length; n < r; ++n)
                            if (o = t[n], i = e[n], o instanceof Array && i instanceof Array) { if (!_.arrayEquals(o, i)) return !1 } else if (o !== i) return !1; return !0 }, clone: function(t) { if (_.isArray(t)) return t.map(_.clone); if (_.isObject(t)) { for (var e = {}, n = Object.keys(t), r = n.length, o = 0; o < r; ++o) e[n[o]] = _.clone(t[n[o]]); return e } return t }, _merger: function(t, e, n, r) { var o = e[t],
                            i = n[t];
                        _.isObject(o) && _.isObject(i) ? _.merge(o, i, r) : e[t] = _.clone(i) }, _mergerIf: function(t, e, n) { var r = e[t],
                            o = n[t];
                        _.isObject(r) && _.isObject(o) ? _.mergeIf(r, o) : e.hasOwnProperty(t) || (e[t] = _.clone(o)) }, merge: function(t, e, n) { var r, o, i, a, c, s = _.isArray(e) ? e : [e],
                            l = s.length; if (!_.isObject(t)) return t; for (r = (n = n || {}).merger || _._merger, o = 0; o < l; ++o)
                            if (e = s[o], _.isObject(e))
                                for (c = 0, a = (i = Object.keys(e)).length; c < a; ++c) r(i[c], t, e, n);
                        return t }, mergeIf: function(t, e) { return _.merge(t, e, { merger: _._mergerIf }) }, extend: Object.assign || function(t) { return _.merge(t, [].slice.call(arguments, 1), { merger: function(t, e, n) { e[t] = n[t] } }) }, inherits: function(t) { var e = this,
                            n = t && t.hasOwnProperty("constructor") ? t.constructor : function() { return e.apply(this, arguments) },
                            r = function() { this.constructor = n }; return r.prototype = e.prototype, n.prototype = new r, n.extend = _.inherits, t && _.extend(n.prototype, t), n.__super__ = e.prototype, n }, _deprecated: function(t, e, n, r) {} },
                O = _;
            _.callCallback = _.callback, _.indexOf = function(t, e, n) { return Array.prototype.indexOf.call(t, e, n) }, _.getValueOrDefault = _.valueOrDefault, _.getValueAtIndexOrDefault = _.valueAtIndexOrDefault; var x = { linear: function(t) { return t }, easeInQuad: function(t) { return t * t }, easeOutQuad: function(t) { return -t * (t - 2) }, easeInOutQuad: function(t) { return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1) }, easeInCubic: function(t) { return t * t * t }, easeOutCubic: function(t) { return (t -= 1) * t * t + 1 }, easeInOutCubic: function(t) { return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2) }, easeInQuart: function(t) { return t * t * t * t }, easeOutQuart: function(t) { return -((t -= 1) * t * t * t - 1) }, easeInOutQuart: function(t) { return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2) }, easeInQuint: function(t) { return t * t * t * t * t }, easeOutQuint: function(t) { return (t -= 1) * t * t * t * t + 1 }, easeInOutQuint: function(t) { return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2) }, easeInSine: function(t) { return 1 - Math.cos(t * (Math.PI / 2)) }, easeOutSine: function(t) { return Math.sin(t * (Math.PI / 2)) }, easeInOutSine: function(t) { return -.5 * (Math.cos(Math.PI * t) - 1) }, easeInExpo: function(t) { return 0 === t ? 0 : Math.pow(2, 10 * (t - 1)) }, easeOutExpo: function(t) { return 1 === t ? 1 : 1 - Math.pow(2, -10 * t) }, easeInOutExpo: function(t) { return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t)) }, easeInCirc: function(t) { return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1) }, easeOutCirc: function(t) { return Math.sqrt(1 - (t -= 1) * t) }, easeInOutCirc: function(t) { return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) }, easeInElastic: function(t) { var e = 1.70158,
                            n = 0,
                            r = 1; return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)) }, easeOutElastic: function(t) { var e = 1.70158,
                            n = 0,
                            r = 1; return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1) }, easeInOutElastic: function(t) { var e = 1.70158,
                            n = 0,
                            r = 1; return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .45), r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), t < 1 ? r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1) }, easeInBack: function(t) { var e = 1.70158; return t * t * ((e + 1) * t - e) }, easeOutBack: function(t) { var e = 1.70158; return (t -= 1) * t * ((e + 1) * t + e) + 1 }, easeInOutBack: function(t) { var e = 1.70158; return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2) }, easeInBounce: function(t) { return 1 - x.easeOutBounce(1 - t) }, easeOutBounce: function(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }, easeInOutBounce: function(t) { return t < .5 ? .5 * x.easeInBounce(2 * t) : .5 * x.easeOutBounce(2 * t - 1) + .5 } },
                L = { effects: x };
            O.easingEffects = x; var N = Math.PI,
                w = N / 180,
                T = 2 * N,
                q = N / 2,
                C = N / 4,
                W = 2 * N / 3,
                S = { clear: function(t) { t.ctx.clearRect(0, 0, t.width, t.height) }, roundedRect: function(t, e, n, r, o, i) { if (i) { var a = Math.min(i, o / 2, r / 2),
                                c = e + a,
                                s = n + a,
                                l = e + r - a,
                                u = n + o - a;
                            t.moveTo(e, s), c < l && s < u ? (t.arc(c, s, a, -N, -q), t.arc(l, s, a, -q, 0), t.arc(l, u, a, 0, q), t.arc(c, u, a, q, N)) : c < l ? (t.moveTo(c, n), t.arc(l, s, a, -q, q), t.arc(c, s, a, q, N + q)) : s < u ? (t.arc(c, s, a, -N, 0), t.arc(c, u, a, 0, N)) : t.arc(c, s, a, -N, N), t.closePath(), t.moveTo(e, n) } else t.rect(e, n, r, o) }, drawPoint: function(t, e, n, r, o, i) { var a, c, s, l, u, f = (i || 0) * w; if (e && "object" == typeof e && ("[object HTMLImageElement]" === (a = e.toString()) || "[object HTMLCanvasElement]" === a)) return t.save(), t.translate(r, o), t.rotate(f), t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height), void t.restore(); if (!(isNaN(n) || n <= 0)) { switch (t.beginPath(), e) { default: t.arc(r, o, n, 0, T), t.closePath(); break;
                                case "triangle":
                                        t.moveTo(r + Math.sin(f) * n, o - Math.cos(f) * n), f += W, t.lineTo(r + Math.sin(f) * n, o - Math.cos(f) * n), f += W, t.lineTo(r + Math.sin(f) * n, o - Math.cos(f) * n), t.closePath(); break;
                                case "rectRounded":
                                        l = n - (u = .516 * n), c = Math.cos(f + C) * l, s = Math.sin(f + C) * l, t.arc(r - c, o - s, u, f - N, f - q), t.arc(r + s, o - c, u, f - q, f), t.arc(r + c, o + s, u, f, f + q), t.arc(r - s, o + c, u, f + q, f + N), t.closePath(); break;
                                case "rect":
                                        if (!i) { l = Math.SQRT1_2 * n, t.rect(r - l, o - l, 2 * l, 2 * l); break }f += C;
                                case "rectRot":
                                        c = Math.cos(f) * n, s = Math.sin(f) * n, t.moveTo(r - c, o - s), t.lineTo(r + s, o - c), t.lineTo(r + c, o + s), t.lineTo(r - s, o + c), t.closePath(); break;
                                case "crossRot":
                                        f += C;
                                case "cross":
                                        c = Math.cos(f) * n, s = Math.sin(f) * n, t.moveTo(r - c, o - s), t.lineTo(r + c, o + s), t.moveTo(r + s, o - c), t.lineTo(r - s, o + c); break;
                                case "star":
                                        c = Math.cos(f) * n, s = Math.sin(f) * n, t.moveTo(r - c, o - s), t.lineTo(r + c, o + s), t.moveTo(r + s, o - c), t.lineTo(r - s, o + c), f += C, c = Math.cos(f) * n, s = Math.sin(f) * n, t.moveTo(r - c, o - s), t.lineTo(r + c, o + s), t.moveTo(r + s, o - c), t.lineTo(r - s, o + c); break;
                                case "line":
                                        c = Math.cos(f) * n, s = Math.sin(f) * n, t.moveTo(r - c, o - s), t.lineTo(r + c, o + s); break;
                                case "dash":
                                        t.moveTo(r, o), t.lineTo(r + Math.cos(f) * n, o + Math.sin(f) * n) }
                            t.fill(), t.stroke() } }, _isPointInArea: function(t, e) { return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6 }, clipArea: function(t, e) { t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip() }, unclipArea: function(t) { t.restore() }, lineTo: function(t, e, n, r) { var o = n.steppedLine; if (o) { if ("middle" === o) { var i = (e.x + n.x) / 2;
                                t.lineTo(i, r ? n.y : e.y), t.lineTo(i, r ? e.y : n.y) } else "after" === o && !r || "after" !== o && r ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
                            t.lineTo(n.x, n.y) } else n.tension ? t.bezierCurveTo(r ? e.controlPointPreviousX : e.controlPointNextX, r ? e.controlPointPreviousY : e.controlPointNextY, r ? n.controlPointNextX : n.controlPointPreviousX, r ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y) } },
                k = S;
            O.clear = S.clear, O.drawRoundedRectangle = function(t) { t.beginPath(), S.roundedRect.apply(S, arguments) }; var B = { _set: function(t, e) { return O.merge(this[t] || (this[t] = {}), e) } };
            B._set("global", { defaultColor: "rgba(0,0,0,0.1)", defaultFontColor: "#666", defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", defaultFontSize: 12, defaultFontStyle: "normal", defaultLineHeight: 1.2, showLines: !0 }); var X = B,
                E = O.valueOrDefault,
                D = { toLineHeight: function(t, e) { var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/); if (!n || "normal" === n[1]) return 1.2 * e; switch (t = +n[2], n[3]) {
                            case "px":
                                return t;
                            case "%":
                                t /= 100 } return e * t }, toPadding: function(t) { var e, n, r, o; return O.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, r = +t.bottom || 0, o = +t.left || 0) : e = n = r = o = +t || 0, { top: e, right: n, bottom: r, left: o, height: e + r, width: o + n } }, _parseFont: function(t) { var e = X.global,
                            n = E(t.fontSize, e.defaultFontSize),
                            r = { family: E(t.fontFamily, e.defaultFontFamily), lineHeight: O.options.toLineHeight(E(t.lineHeight, e.defaultLineHeight), n), size: n, style: E(t.fontStyle, e.defaultFontStyle), weight: null, string: "" }; return r.string = function(t) { return !t || O.isNullOrUndef(t.size) || O.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family }(r), r }, resolve: function(t, e, n, r) { var o, i, a, c = !0; for (o = 0, i = t.length; o < i; ++o)
                            if (void 0 !== (a = t[o]) && (void 0 !== e && "function" == typeof a && (a = a(e), c = !1), void 0 !== n && O.isArray(a) && (a = a[n], c = !1), void 0 !== a)) return r && !c && (r.cacheable = !1), a } },
                R = { _factorize: function(t) { var e, n = [],
                            r = Math.sqrt(t); for (e = 1; e < r; e++) t % e == 0 && (n.push(e), n.push(t / e)); return r === (0 | r) && n.push(r), n.sort((function(t, e) { return t - e })).pop(), n }, log10: Math.log10 || function(t) { var e = Math.log(t) * Math.LOG10E,
                            n = Math.round(e); return t === Math.pow(10, n) ? n : e } },
                P = R;
            O.log10 = R.log10; var I = O,
                j = L,
                F = k,
                H = D,
                U = P,
                V = { getRtlAdapter: function(t, e, n) { return t ? function(t, e) { return { x: function(n) { return t + t + e - n }, setWidth: function(t) { e = t }, textAlign: function(t) { return "center" === t ? t : "right" === t ? "left" : "right" }, xPlus: function(t, e) { return t - e }, leftForLtr: function(t, e) { return t - e } } }(e, n) : { x: function(t) { return t }, setWidth: function(t) {}, textAlign: function(t) { return t }, xPlus: function(t, e) { return t + e }, leftForLtr: function(t, e) { return t } } }, overrideTextDirection: function(t, e) { var n, r; "ltr" !== e && "rtl" !== e || (r = [(n = t.canvas.style).getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", e, "important"), t.prevTextDirection = r) }, restoreTextDirection: function(t) { var e = t.prevTextDirection;
                        void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1])) } };
            I.easing = j, I.canvas = F, I.options = H, I.math = U, I.rtl = V; var $ = function(t) { I.extend(this, t), this.initialize.apply(this, arguments) };
            I.extend($.prototype, { _type: void 0, initialize: function() { this.hidden = !1 }, pivot: function() { var t = this; return t._view || (t._view = I.extend({}, t._model)), t._start = {}, t }, transition: function(t) { var e = this,
                        n = e._model,
                        r = e._start,
                        o = e._view; return n && 1 !== t ? (o || (o = e._view = {}), r || (r = e._start = {}), function(t, e, n, r) { var o, i, a, c, s, l, u, f, d, p = Object.keys(n); for (o = 0, i = p.length; o < i; ++o)
                            if (l = n[a = p[o]], e.hasOwnProperty(a) || (e[a] = l), (c = e[a]) !== l && "_" !== a[0]) { if (t.hasOwnProperty(a) || (t[a] = c), (u = typeof l) == typeof(s = t[a]))
                                    if ("string" === u) { if ((f = z(s)).valid && (d = z(l)).valid) { e[a] = d.mix(f, r).rgbString(); continue } } else if (I.isFinite(s) && I.isFinite(l)) { e[a] = s + (l - s) * r; continue }
                                e[a] = l } }(r, o, n, t), e) : (e._view = I.extend({}, n), e._start = null, e) }, tooltipPosition: function() { return { x: this._model.x, y: this._model.y } }, hasValue: function() { return I.isNumber(this._model.x) && I.isNumber(this._model.y) } }), $.extend = I.inherits; var Y = $,
                G = Y.extend({ chart: null, currentStep: 0, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null }),
                K = G;
            Object.defineProperty(G.prototype, "animationObject", { get: function() { return this } }), Object.defineProperty(G.prototype, "chartInstance", { get: function() { return this.chart }, set: function(t) { this.chart = t } }), X._set("global", { animation: { duration: 1e3, easing: "easeOutQuart", onProgress: I.noop, onComplete: I.noop } }); var J = { animations: [], request: null, addAnimation: function(t, e, n, r) { var o, i, a = this.animations; for (e.chart = t, e.startTime = Date.now(), e.duration = n, r || (t.animating = !0), o = 0, i = a.length; o < i; ++o)
                            if (a[o].chart === t) return void(a[o] = e);
                        a.push(e), 1 === a.length && this.requestAnimationFrame() }, cancelAnimation: function(t) { var e = I.findIndex(this.animations, (function(e) { return e.chart === t })); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1) }, requestAnimationFrame: function() { var t = this;
                        null === t.request && (t.request = I.requestAnimFrame.call(window, (function() { t.request = null, t.startDigest() }))) }, startDigest: function() { this.advance(), this.animations.length > 0 && this.requestAnimationFrame() }, advance: function() { for (var t, e, n, r, o = this.animations, i = 0; i < o.length;) e = (t = o[i]).chart, n = t.numSteps, r = Math.floor((Date.now() - t.startTime) / t.duration * n) + 1, t.currentStep = Math.min(r, n), I.callback(t.render, [e, t], e), I.callback(t.onAnimationProgress, [t], e), t.currentStep >= n ? (I.callback(t.onAnimationComplete, [t], e), e.animating = !1, o.splice(i, 1)) : ++i } },
                Q = I.options.resolve,
                Z = ["push", "pop", "shift", "splice", "unshift"];

            function tt(t, e) { var n = t._chartjs; if (n) { var r = n.listeners,
                        o = r.indexOf(e); - 1 !== o && r.splice(o, 1), r.length > 0 || (Z.forEach((function(e) { delete t[e] })), delete t._chartjs) } } var et = function(t, e) { this.initialize(t, e) };
            I.extend(et.prototype, { datasetElementType: null, dataElementType: null, _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"], _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"], initialize: function(t, e) { var n = this;
                    n.chart = t, n.index = e, n.linkScales(), n.addElements(), n._type = n.getMeta().type }, updateIndex: function(t) { this.index = t }, linkScales: function() { var t = this.getMeta(),
                        e = this.chart,
                        n = e.scales,
                        r = this.getDataset(),
                        o = e.options.scales;
                    null !== t.xAxisID && t.xAxisID in n && !r.xAxisID || (t.xAxisID = r.xAxisID || o.xAxes[0].id), null !== t.yAxisID && t.yAxisID in n && !r.yAxisID || (t.yAxisID = r.yAxisID || o.yAxes[0].id) }, getDataset: function() { return this.chart.data.datasets[this.index] }, getMeta: function() { return this.chart.getDatasetMeta(this.index) }, getScaleForId: function(t) { return this.chart.scales[t] }, _getValueScaleId: function() { return this.getMeta().yAxisID }, _getIndexScaleId: function() { return this.getMeta().xAxisID }, _getValueScale: function() { return this.getScaleForId(this._getValueScaleId()) }, _getIndexScale: function() { return this.getScaleForId(this._getIndexScaleId()) }, reset: function() { this._update(!0) }, destroy: function() { this._data && tt(this._data, this) }, createMetaDataset: function() { var t = this.datasetElementType; return t && new t({ _chart: this.chart, _datasetIndex: this.index }) }, createMetaData: function(t) { var e = this.dataElementType; return e && new e({ _chart: this.chart, _datasetIndex: this.index, _index: t }) }, addElements: function() { var t, e, n = this.getMeta(),
                        r = this.getDataset().data || [],
                        o = n.data; for (t = 0, e = r.length; t < e; ++t) o[t] = o[t] || this.createMetaData(t);
                    n.dataset = n.dataset || this.createMetaDataset() }, addElementAndReset: function(t) { var e = this.createMetaData(t);
                    this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0) }, buildOrUpdateElements: function() { var t, e, n = this,
                        r = n.getDataset(),
                        o = r.data || (r.data = []);
                    n._data !== o && (n._data && tt(n._data, n), o && Object.isExtensible(o) && (e = n, (t = o)._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [e] } }), Z.forEach((function(e) { var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                            r = t[e];
                        Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: function() { var e = Array.prototype.slice.call(arguments),
                                    o = r.apply(this, e); return I.each(t._chartjs.listeners, (function(t) { "function" == typeof t[n] && t[n].apply(t, e) })), o } }) })))), n._data = o), n.resyncElements() }, _configure: function() { this._config = I.merge({}, [this.chart.options.datasets[this._type], this.getDataset()], { merger: function(t, e, n) { "_meta" !== t && "data" !== t && I._merger(t, e, n) } }) }, _update: function(t) { this._configure(), this._cachedDataOpts = null, this.update(t) }, update: I.noop, transition: function(t) { for (var e = this.getMeta(), n = e.data || [], r = n.length, o = 0; o < r; ++o) n[o].transition(t);
                    e.dataset && e.dataset.transition(t) }, draw: function() { var t = this.getMeta(),
                        e = t.data || [],
                        n = e.length,
                        r = 0; for (t.dataset && t.dataset.draw(); r < n; ++r) e[r].draw() }, getStyle: function(t) { var e, n = this.getMeta(),
                        r = n.dataset; return this._configure(), r && void 0 === t ? e = this._resolveDatasetElementOptions(r || {}) : (t = t || 0, e = this._resolveDataElementOptions(n.data[t] || {}, t)), !1 !== e.fill && null !== e.fill || (e.backgroundColor = e.borderColor), e }, _resolveDatasetElementOptions: function(t, e) { var n, r, o, i, a = this,
                        c = a.chart,
                        s = a._config,
                        l = t.custom || {},
                        u = c.options.elements[a.datasetElementType.prototype._type] || {},
                        f = a._datasetElementOptions,
                        d = {},
                        p = { chart: c, dataset: a.getDataset(), datasetIndex: a.index, hover: e }; for (n = 0, r = f.length; n < r; ++n) o = f[n], i = e ? "hover" + o.charAt(0).toUpperCase() + o.slice(1) : o, d[o] = Q([l[i], s[i], u[i]], p); return d }, _resolveDataElementOptions: function(t, e) { var n = this,
                        r = t && t.custom,
                        o = n._cachedDataOpts; if (o && !r) return o; var i, a, c, s, l = n.chart,
                        u = n._config,
                        f = l.options.elements[n.dataElementType.prototype._type] || {},
                        d = n._dataElementOptions,
                        p = {},
                        h = { chart: l, dataIndex: e, dataset: n.getDataset(), datasetIndex: n.index },
                        M = { cacheable: !r }; if (r = r || {}, I.isArray(d))
                        for (a = 0, c = d.length; a < c; ++a) p[s = d[a]] = Q([r[s], u[s], f[s]], h, e, M);
                    else
                        for (a = 0, c = (i = Object.keys(d)).length; a < c; ++a) p[s = i[a]] = Q([r[s], u[d[s]], u[s], f[s]], h, e, M); return M.cacheable && (n._cachedDataOpts = Object.freeze(p)), p }, removeHoverStyle: function(t) { I.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle }, setHoverStyle: function(t) { var e = this.chart.data.datasets[t._datasetIndex],
                        n = t._index,
                        r = t.custom || {},
                        o = t._model,
                        i = I.getHoverColor;
                    t.$previousStyle = { backgroundColor: o.backgroundColor, borderColor: o.borderColor, borderWidth: o.borderWidth }, o.backgroundColor = Q([r.hoverBackgroundColor, e.hoverBackgroundColor, i(o.backgroundColor)], void 0, n), o.borderColor = Q([r.hoverBorderColor, e.hoverBorderColor, i(o.borderColor)], void 0, n), o.borderWidth = Q([r.hoverBorderWidth, e.hoverBorderWidth, o.borderWidth], void 0, n) }, _removeDatasetHoverStyle: function() { var t = this.getMeta().dataset;
                    t && this.removeHoverStyle(t) }, _setDatasetHoverStyle: function() { var t, e, n, r, o, i, a = this.getMeta().dataset,
                        c = {}; if (a) { for (i = a._model, o = this._resolveDatasetElementOptions(a, !0), t = 0, e = (r = Object.keys(o)).length; t < e; ++t) c[n = r[t]] = i[n], i[n] = o[n];
                        a.$previousStyle = c } }, resyncElements: function() { var t = this.getMeta(),
                        e = this.getDataset().data,
                        n = t.data.length,
                        r = e.length;
                    r < n ? t.data.splice(r, n - r) : r > n && this.insertElements(n, r - n) }, insertElements: function(t, e) { for (var n = 0; n < e; ++n) this.addElementAndReset(t + n) }, onDataPush: function() { var t = arguments.length;
                    this.insertElements(this.getDataset().data.length - t, t) }, onDataPop: function() { this.getMeta().data.pop() }, onDataShift: function() { this.getMeta().data.shift() }, onDataSplice: function(t, e) { this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2) }, onDataUnshift: function() { this.insertElements(0, arguments.length) } }), et.extend = I.inherits; var nt = et,
                rt = 2 * Math.PI;

            function ot(t, e) { var n = e.startAngle,
                    r = e.endAngle,
                    o = e.pixelMargin,
                    i = o / e.outerRadius,
                    a = e.x,
                    c = e.y;
                t.beginPath(), t.arc(a, c, e.outerRadius, n - i, r + i), e.innerRadius > o ? (i = o / e.innerRadius, t.arc(a, c, e.innerRadius - o, r + i, n - i, !0)) : t.arc(a, c, o, r + Math.PI / 2, n - Math.PI / 2), t.closePath(), t.clip() }

            function it(t, e, n) { var r = "inner" === e.borderAlign;
                r ? (t.lineWidth = 2 * e.borderWidth, t.lineJoin = "round") : (t.lineWidth = e.borderWidth, t.lineJoin = "bevel"), n.fullCircles && function(t, e, n, r) { var o, i = n.endAngle; for (r && (n.endAngle = n.startAngle + rt, ot(t, n), n.endAngle = i, n.endAngle === n.startAngle && n.fullCircles && (n.endAngle += rt, n.fullCircles--)), t.beginPath(), t.arc(n.x, n.y, n.innerRadius, n.startAngle + rt, n.startAngle, !0), o = 0; o < n.fullCircles; ++o) t.stroke(); for (t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.startAngle + rt), o = 0; o < n.fullCircles; ++o) t.stroke() }(t, e, n, r), r && ot(t, n), t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.endAngle), t.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0), t.closePath(), t.stroke() }
            X._set("global", { elements: { arc: { backgroundColor: X.global.defaultColor, borderColor: "#fff", borderWidth: 2, borderAlign: "center" } } }); var at = Y.extend({ _type: "arc", inLabelRange: function(t) { var e = this._view; return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2) }, inRange: function(t, e) { var n = this._view; if (n) { for (var r = I.getAngleFromPoint(n, { x: t, y: e }), o = r.angle, i = r.distance, a = n.startAngle, c = n.endAngle; c < a;) c += rt; for (; o > c;) o -= rt; for (; o < a;) o += rt; var s = o >= a && o <= c,
                                l = i >= n.innerRadius && i <= n.outerRadius; return s && l } return !1 }, getCenterPoint: function() { var t = this._view,
                            e = (t.startAngle + t.endAngle) / 2,
                            n = (t.innerRadius + t.outerRadius) / 2; return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n } }, getArea: function() { var t = this._view; return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2)) }, tooltipPosition: function() { var t = this._view,
                            e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                            n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius; return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n } }, draw: function() { var t, e = this._chart.ctx,
                            n = this._view,
                            r = "inner" === n.borderAlign ? .33 : 0,
                            o = { x: n.x, y: n.y, innerRadius: n.innerRadius, outerRadius: Math.max(n.outerRadius - r, 0), pixelMargin: r, startAngle: n.startAngle, endAngle: n.endAngle, fullCircles: Math.floor(n.circumference / rt) }; if (e.save(), e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, o.fullCircles) { for (o.endAngle = o.startAngle + rt, e.beginPath(), e.arc(o.x, o.y, o.outerRadius, o.startAngle, o.endAngle), e.arc(o.x, o.y, o.innerRadius, o.endAngle, o.startAngle, !0), e.closePath(), t = 0; t < o.fullCircles; ++t) e.fill();
                            o.endAngle = o.startAngle + n.circumference % rt }
                        e.beginPath(), e.arc(o.x, o.y, o.outerRadius, o.startAngle, o.endAngle), e.arc(o.x, o.y, o.innerRadius, o.endAngle, o.startAngle, !0), e.closePath(), e.fill(), n.borderWidth && it(e, n, o), e.restore() } }),
                ct = I.valueOrDefault,
                st = X.global.defaultColor;
            X._set("global", { elements: { line: { tension: .4, backgroundColor: st, borderWidth: 3, borderColor: st, borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", capBezierPoints: !0, fill: !0 } } }); var lt = Y.extend({ _type: "line", draw: function() { var t, e, n, r = this,
                            o = r._view,
                            i = r._chart.ctx,
                            a = o.spanGaps,
                            c = r._children.slice(),
                            s = X.global,
                            l = s.elements.line,
                            u = -1,
                            f = r._loop; if (c.length) { if (r._loop) { for (t = 0; t < c.length; ++t)
                                    if (e = I.previousItem(c, t), !c[t]._view.skip && e._view.skip) { c = c.slice(t).concat(c.slice(0, t)), f = a; break }
                                f && c.push(c[0]) } for (i.save(), i.lineCap = o.borderCapStyle || l.borderCapStyle, i.setLineDash && i.setLineDash(o.borderDash || l.borderDash), i.lineDashOffset = ct(o.borderDashOffset, l.borderDashOffset), i.lineJoin = o.borderJoinStyle || l.borderJoinStyle, i.lineWidth = ct(o.borderWidth, l.borderWidth), i.strokeStyle = o.borderColor || s.defaultColor, i.beginPath(), (n = c[0]._view).skip || (i.moveTo(n.x, n.y), u = 0), t = 1; t < c.length; ++t) n = c[t]._view, e = -1 === u ? I.previousItem(c, t) : c[u], n.skip || (u !== t - 1 && !a || -1 === u ? i.moveTo(n.x, n.y) : I.canvas.lineTo(i, e._view, n), u = t);
                            f && i.closePath(), i.stroke(), i.restore() } } }),
                ut = I.valueOrDefault,
                ft = X.global.defaultColor;

            function dt(t) { var e = this._view; return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius }
            X._set("global", { elements: { point: { radius: 3, pointStyle: "circle", backgroundColor: ft, borderColor: ft, borderWidth: 1, hitRadius: 1, hoverRadius: 4, hoverBorderWidth: 1 } } }); var pt = Y.extend({ _type: "point", inRange: function(t, e) { var n = this._view; return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2) }, inLabelRange: dt, inXRange: dt, inYRange: function(t) { var e = this._view; return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius }, getCenterPoint: function() { var t = this._view; return { x: t.x, y: t.y } }, getArea: function() { return Math.PI * Math.pow(this._view.radius, 2) }, tooltipPosition: function() { var t = this._view; return { x: t.x, y: t.y, padding: t.radius + t.borderWidth } }, draw: function(t) { var e = this._view,
                            n = this._chart.ctx,
                            r = e.pointStyle,
                            o = e.rotation,
                            i = e.radius,
                            a = e.x,
                            c = e.y,
                            s = X.global,
                            l = s.defaultColor;
                        e.skip || (void 0 === t || I.canvas._isPointInArea(e, t)) && (n.strokeStyle = e.borderColor || l, n.lineWidth = ut(e.borderWidth, s.elements.point.borderWidth), n.fillStyle = e.backgroundColor || l, I.canvas.drawPoint(n, r, i, a, c, o)) } }),
                ht = X.global.defaultColor;

            function Mt(t) { return t && void 0 !== t.width }

            function bt(t) { var e, n, r, o, i; return Mt(t) ? (i = t.width / 2, e = t.x - i, n = t.x + i, r = Math.min(t.y, t.base), o = Math.max(t.y, t.base)) : (i = t.height / 2, e = Math.min(t.x, t.base), n = Math.max(t.x, t.base), r = t.y - i, o = t.y + i), { left: e, top: r, right: n, bottom: o } }

            function mt(t, e, n) { return t === e ? n : t === n ? e : t }

            function vt(t, e, n) { var r, o, i, a, c = t.borderWidth,
                    s = function(t) { var e = t.borderSkipped,
                            n = {}; return e ? (t.horizontal ? t.base > t.x && (e = mt(e, "left", "right")) : t.base < t.y && (e = mt(e, "bottom", "top")), n[e] = !0, n) : n }(t); return I.isObject(c) ? (r = +c.top || 0, o = +c.right || 0, i = +c.bottom || 0, a = +c.left || 0) : r = o = i = a = +c || 0, { t: s.top || r < 0 ? 0 : r > n ? n : r, r: s.right || o < 0 ? 0 : o > e ? e : o, b: s.bottom || i < 0 ? 0 : i > n ? n : i, l: s.left || a < 0 ? 0 : a > e ? e : a } }

            function gt(t, e, n) { var r = null === e,
                    o = null === n,
                    i = !(!t || r && o) && bt(t); return i && (r || e >= i.left && e <= i.right) && (o || n >= i.top && n <= i.bottom) }
            X._set("global", { elements: { rectangle: { backgroundColor: ht, borderColor: ht, borderSkipped: "bottom", borderWidth: 0 } } }); var At = Y.extend({ _type: "rectangle", draw: function() { var t = this._chart.ctx,
                            e = this._view,
                            n = function(t) { var e = bt(t),
                                    n = e.right - e.left,
                                    r = e.bottom - e.top,
                                    o = vt(t, n / 2, r / 2); return { outer: { x: e.left, y: e.top, w: n, h: r }, inner: { x: e.left + o.l, y: e.top + o.t, w: n - o.l - o.r, h: r - o.t - o.b } } }(e),
                            r = n.outer,
                            o = n.inner;
                        t.fillStyle = e.backgroundColor, t.fillRect(r.x, r.y, r.w, r.h), r.w === o.w && r.h === o.h || (t.save(), t.beginPath(), t.rect(r.x, r.y, r.w, r.h), t.clip(), t.fillStyle = e.borderColor, t.rect(o.x, o.y, o.w, o.h), t.fill("evenodd"), t.restore()) }, height: function() { var t = this._view; return t.base - t.y }, inRange: function(t, e) { return gt(this._view, t, e) }, inLabelRange: function(t, e) { var n = this._view; return Mt(n) ? gt(n, t, null) : gt(n, null, e) }, inXRange: function(t) { return gt(this._view, t, null) }, inYRange: function(t) { return gt(this._view, null, t) }, getCenterPoint: function() { var t, e, n = this._view; return Mt(n) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), { x: t, y: e } }, getArea: function() { var t = this._view; return Mt(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base) }, tooltipPosition: function() { var t = this._view; return { x: t.x, y: t.y } } }),
                yt = {},
                zt = at,
                _t = lt,
                Ot = pt,
                xt = At;
            yt.Arc = zt, yt.Line = _t, yt.Point = Ot, yt.Rectangle = xt; var Lt = I._deprecated,
                Nt = I.valueOrDefault;

            function wt(t, e, n) { var r, o, i = n.barThickness,
                    a = e.stackCount,
                    c = e.pixels[t],
                    s = I.isNullOrUndef(i) ? function(t, e) { var n, r, o, i, a = t._length; for (o = 1, i = e.length; o < i; ++o) a = Math.min(a, Math.abs(e[o] - e[o - 1])); for (o = 0, i = t.getTicks().length; o < i; ++o) r = t.getPixelForTick(o), a = o > 0 ? Math.min(a, Math.abs(r - n)) : a, n = r; return a }(e.scale, e.pixels) : -1; return I.isNullOrUndef(i) ? (r = s * n.categoryPercentage, o = n.barPercentage) : (r = i * a, o = 1), { chunk: r / a, ratio: o, start: c - r / 2 } }
            X._set("bar", { hover: { mode: "label" }, scales: { xAxes: [{ type: "category", offset: !0, gridLines: { offsetGridLines: !0 } }], yAxes: [{ type: "linear" }] } }), X._set("global", { datasets: { bar: { categoryPercentage: .8, barPercentage: .9 } } }); var Tt = nt.extend({ dataElementType: yt.Rectangle, _dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"], initialize: function() { var t, e, n = this;
                        nt.prototype.initialize.apply(n, arguments), (t = n.getMeta()).stack = n.getDataset().stack, t.bar = !0, e = n._getIndexScale().options, Lt("bar chart", e.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), Lt("bar chart", e.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), Lt("bar chart", e.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), Lt("bar chart", n._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), Lt("bar chart", e.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness") }, update: function(t) { var e, n, r = this.getMeta().data; for (this._ruler = this.getRuler(), e = 0, n = r.length; e < n; ++e) this.updateElement(r[e], e, t) }, updateElement: function(t, e, n) { var r = this,
                            o = r.getMeta(),
                            i = r.getDataset(),
                            a = r._resolveDataElementOptions(t, e);
                        t._xScale = r.getScaleForId(o.xAxisID), t._yScale = r.getScaleForId(o.yAxisID), t._datasetIndex = r.index, t._index = e, t._model = { backgroundColor: a.backgroundColor, borderColor: a.borderColor, borderSkipped: a.borderSkipped, borderWidth: a.borderWidth, datasetLabel: i.label, label: r.chart.data.labels[e] }, I.isArray(i.data[e]) && (t._model.borderSkipped = null), r._updateElementGeometry(t, e, n, a), t.pivot() }, _updateElementGeometry: function(t, e, n, r) { var o = this,
                            i = t._model,
                            a = o._getValueScale(),
                            c = a.getBasePixel(),
                            s = a.isHorizontal(),
                            l = o._ruler || o.getRuler(),
                            u = o.calculateBarValuePixels(o.index, e, r),
                            f = o.calculateBarIndexPixels(o.index, e, l, r);
                        i.horizontal = s, i.base = n ? c : u.base, i.x = s ? n ? c : u.head : f.center, i.y = s ? f.center : n ? c : u.head, i.height = s ? f.size : void 0, i.width = s ? void 0 : f.size }, _getStacks: function(t) { var e, n, r = this._getIndexScale(),
                            o = r._getMatchingVisibleMetas(this._type),
                            i = r.options.stacked,
                            a = o.length,
                            c = []; for (e = 0; e < a && (n = o[e], (!1 === i || -1 === c.indexOf(n.stack) || void 0 === i && void 0 === n.stack) && c.push(n.stack), n.index !== t); ++e); return c }, getStackCount: function() { return this._getStacks().length }, getStackIndex: function(t, e) { var n = this._getStacks(t),
                            r = void 0 !== e ? n.indexOf(e) : -1; return -1 === r ? n.length - 1 : r }, getRuler: function() { var t, e, n = this._getIndexScale(),
                            r = []; for (t = 0, e = this.getMeta().data.length; t < e; ++t) r.push(n.getPixelForValue(null, t, this.index)); return { pixels: r, start: n._startPixel, end: n._endPixel, stackCount: this.getStackCount(), scale: n } }, calculateBarValuePixels: function(t, e, n) { var r, o, i, a, c, s, l, u = this.chart,
                            f = this._getValueScale(),
                            d = f.isHorizontal(),
                            p = u.data.datasets,
                            h = f._getMatchingVisibleMetas(this._type),
                            M = f._parseValue(p[t].data[e]),
                            b = n.minBarLength,
                            m = f.options.stacked,
                            v = this.getMeta().stack,
                            g = void 0 === M.start ? 0 : M.max >= 0 && M.min >= 0 ? M.min : M.max,
                            A = void 0 === M.start ? M.end : M.max >= 0 && M.min >= 0 ? M.max - M.min : M.min - M.max,
                            y = h.length; if (m || void 0 === m && void 0 !== v)
                            for (r = 0; r < y && (o = h[r]).index !== t; ++r) o.stack === v && (i = void 0 === (l = f._parseValue(p[o.index].data[e])).start ? l.end : l.min >= 0 && l.max >= 0 ? l.max : l.min, (M.min < 0 && i < 0 || M.max >= 0 && i > 0) && (g += i)); return a = f.getPixelForValue(g), s = (c = f.getPixelForValue(g + A)) - a, void 0 !== b && Math.abs(s) < b && (s = b, c = A >= 0 && !d || A < 0 && d ? a - b : a + b), { size: s, base: a, head: c, center: c + s / 2 } }, calculateBarIndexPixels: function(t, e, n, r) { var o = "flex" === r.barThickness ? function(t, e, n) { var r, o = e.pixels,
                                    i = o[t],
                                    a = t > 0 ? o[t - 1] : null,
                                    c = t < o.length - 1 ? o[t + 1] : null,
                                    s = n.categoryPercentage; return null === a && (a = i - (null === c ? e.end - e.start : c - i)), null === c && (c = i + i - a), r = i - (i - Math.min(a, c)) / 2 * s, { chunk: Math.abs(c - a) / 2 * s / e.stackCount, ratio: n.barPercentage, start: r } }(e, n, r) : wt(e, n, r),
                            i = this.getStackIndex(t, this.getMeta().stack),
                            a = o.start + o.chunk * i + o.chunk / 2,
                            c = Math.min(Nt(r.maxBarThickness, 1 / 0), o.chunk * o.ratio); return { base: a - c / 2, head: a + c / 2, center: a, size: c } }, draw: function() { var t = this.chart,
                            e = this._getValueScale(),
                            n = this.getMeta().data,
                            r = this.getDataset(),
                            o = n.length,
                            i = 0; for (I.canvas.clipArea(t.ctx, t.chartArea); i < o; ++i) { var a = e._parseValue(r.data[i]);
                            isNaN(a.min) || isNaN(a.max) || n[i].draw() }
                        I.canvas.unclipArea(t.ctx) }, _resolveDataElementOptions: function() { var t = this,
                            e = I.extend({}, nt.prototype._resolveDataElementOptions.apply(t, arguments)),
                            n = t._getIndexScale().options,
                            r = t._getValueScale().options; return e.barPercentage = Nt(n.barPercentage, e.barPercentage), e.barThickness = Nt(n.barThickness, e.barThickness), e.categoryPercentage = Nt(n.categoryPercentage, e.categoryPercentage), e.maxBarThickness = Nt(n.maxBarThickness, e.maxBarThickness), e.minBarLength = Nt(r.minBarLength, e.minBarLength), e } }),
                qt = I.valueOrDefault,
                Ct = I.options.resolve;
            X._set("bubble", { hover: { mode: "single" }, scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }] }, tooltips: { callbacks: { title: function() { return "" }, label: function(t, e) { var n = e.datasets[t.datasetIndex].label || "",
                                r = e.datasets[t.datasetIndex].data[t.index]; return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + r.r + ")" } } } }); var Wt = nt.extend({ dataElementType: yt.Point, _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"], update: function(t) { var e = this,
                            n = e.getMeta().data;
                        I.each(n, (function(n, r) { e.updateElement(n, r, t) })) }, updateElement: function(t, e, n) { var r = this,
                            o = r.getMeta(),
                            i = t.custom || {},
                            a = r.getScaleForId(o.xAxisID),
                            c = r.getScaleForId(o.yAxisID),
                            s = r._resolveDataElementOptions(t, e),
                            l = r.getDataset().data[e],
                            u = r.index,
                            f = n ? a.getPixelForDecimal(.5) : a.getPixelForValue("object" == typeof l ? l : NaN, e, u),
                            d = n ? c.getBasePixel() : c.getPixelForValue(l, e, u);
                        t._xScale = a, t._yScale = c, t._options = s, t._datasetIndex = u, t._index = e, t._model = { backgroundColor: s.backgroundColor, borderColor: s.borderColor, borderWidth: s.borderWidth, hitRadius: s.hitRadius, pointStyle: s.pointStyle, rotation: s.rotation, radius: n ? 0 : s.radius, skip: i.skip || isNaN(f) || isNaN(d), x: f, y: d }, t.pivot() }, setHoverStyle: function(t) { var e = t._model,
                            n = t._options,
                            r = I.getHoverColor;
                        t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth, radius: e.radius }, e.backgroundColor = qt(n.hoverBackgroundColor, r(n.backgroundColor)), e.borderColor = qt(n.hoverBorderColor, r(n.borderColor)), e.borderWidth = qt(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius }, _resolveDataElementOptions: function(t, e) { var n = this,
                            r = n.chart,
                            o = n.getDataset(),
                            i = t.custom || {},
                            a = o.data[e] || {},
                            c = nt.prototype._resolveDataElementOptions.apply(n, arguments),
                            s = { chart: r, dataIndex: e, dataset: o, datasetIndex: n.index }; return n._cachedDataOpts === c && (c = I.extend({}, c)), c.radius = Ct([i.radius, a.r, n._config.radius, r.options.elements.point.radius], s, e), c } }),
                St = I.valueOrDefault,
                kt = Math.PI,
                Bt = 2 * kt,
                Xt = kt / 2;
            X._set("doughnut", { animation: { animateRotate: !0, animateScale: !1 }, hover: { mode: "single" }, legendCallback: function(t) { var e, n, r, o = document.createElement("ul"),
                        i = t.data,
                        a = i.datasets,
                        c = i.labels; if (o.setAttribute("class", t.id + "-legend"), a.length)
                        for (e = 0, n = a[0].data.length; e < n; ++e)(r = o.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = a[0].backgroundColor[e], c[e] && r.appendChild(document.createTextNode(c[e])); return o.outerHTML }, legend: { labels: { generateLabels: function(t) { var e = t.data; return e.labels.length && e.datasets.length ? e.labels.map((function(n, r) { var o = t.getDatasetMeta(0),
                                    i = o.controller.getStyle(r); return { text: n, fillStyle: i.backgroundColor, strokeStyle: i.borderColor, lineWidth: i.borderWidth, hidden: isNaN(e.datasets[0].data[r]) || o.data[r].hidden, index: r } })) : [] } }, onClick: function(t, e) { var n, r, o, i = e.index,
                            a = this.chart; for (n = 0, r = (a.data.datasets || []).length; n < r; ++n)(o = a.getDatasetMeta(n)).data[i] && (o.data[i].hidden = !o.data[i].hidden);
                        a.update() } }, cutoutPercentage: 50, rotation: -Xt, circumference: Bt, tooltips: { callbacks: { title: function() { return "" }, label: function(t, e) { var n = e.labels[t.index],
                                r = ": " + e.datasets[t.datasetIndex].data[t.index]; return I.isArray(n) ? (n = n.slice())[0] += r : n += r, n } } } }); var Et = nt.extend({ dataElementType: yt.Arc, linkScales: I.noop, _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"], getRingIndex: function(t) { for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e; return e }, update: function(t) { var e, n, r, o, i = this,
                        a = i.chart,
                        c = a.chartArea,
                        s = a.options,
                        l = 1,
                        u = 1,
                        f = 0,
                        d = 0,
                        p = i.getMeta(),
                        h = p.data,
                        M = s.cutoutPercentage / 100 || 0,
                        b = s.circumference,
                        m = i._getRingWeight(i.index); if (b < Bt) { var v = s.rotation % Bt,
                            g = (v += v >= kt ? -Bt : v < -kt ? Bt : 0) + b,
                            A = Math.cos(v),
                            y = Math.sin(v),
                            z = Math.cos(g),
                            _ = Math.sin(g),
                            O = v <= 0 && g >= 0 || g >= Bt,
                            x = v <= Xt && g >= Xt || g >= Bt + Xt,
                            L = v <= -Xt && g >= -Xt || g >= kt + Xt,
                            N = v === -kt || g >= kt ? -1 : Math.min(A, A * M, z, z * M),
                            w = L ? -1 : Math.min(y, y * M, _, _ * M),
                            T = O ? 1 : Math.max(A, A * M, z, z * M),
                            q = x ? 1 : Math.max(y, y * M, _, _ * M);
                        l = (T - N) / 2, u = (q - w) / 2, f = -(T + N) / 2, d = -(q + w) / 2 } for (r = 0, o = h.length; r < o; ++r) h[r]._options = i._resolveDataElementOptions(h[r], r); for (a.borderWidth = i.getMaxBorderWidth(), e = (c.right - c.left - a.borderWidth) / l, n = (c.bottom - c.top - a.borderWidth) / u, a.outerRadius = Math.max(Math.min(e, n) / 2, 0), a.innerRadius = Math.max(a.outerRadius * M, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / (i._getVisibleDatasetWeightTotal() || 1), a.offsetX = f * a.outerRadius, a.offsetY = d * a.outerRadius, p.total = i.calculateTotal(), i.outerRadius = a.outerRadius - a.radiusLength * i._getRingWeightOffset(i.index), i.innerRadius = Math.max(i.outerRadius - a.radiusLength * m, 0), r = 0, o = h.length; r < o; ++r) i.updateElement(h[r], r, t) }, updateElement: function(t, e, n) { var r = this,
                        o = r.chart,
                        i = o.chartArea,
                        a = o.options,
                        c = a.animation,
                        s = (i.left + i.right) / 2,
                        l = (i.top + i.bottom) / 2,
                        u = a.rotation,
                        f = a.rotation,
                        d = r.getDataset(),
                        p = n && c.animateRotate || t.hidden ? 0 : r.calculateCircumference(d.data[e]) * (a.circumference / Bt),
                        h = n && c.animateScale ? 0 : r.innerRadius,
                        M = n && c.animateScale ? 0 : r.outerRadius,
                        b = t._options || {};
                    I.extend(t, { _datasetIndex: r.index, _index: e, _model: { backgroundColor: b.backgroundColor, borderColor: b.borderColor, borderWidth: b.borderWidth, borderAlign: b.borderAlign, x: s + o.offsetX, y: l + o.offsetY, startAngle: u, endAngle: f, circumference: p, outerRadius: M, innerRadius: h, label: I.valueAtIndexOrDefault(d.label, e, o.data.labels[e]) } }); var m = t._model;
                    n && c.animateRotate || (m.startAngle = 0 === e ? a.rotation : r.getMeta().data[e - 1]._model.endAngle, m.endAngle = m.startAngle + m.circumference), t.pivot() }, calculateTotal: function() { var t, e = this.getDataset(),
                        n = this.getMeta(),
                        r = 0; return I.each(n.data, (function(n, o) { t = e.data[o], isNaN(t) || n.hidden || (r += Math.abs(t)) })), r }, calculateCircumference: function(t) { var e = this.getMeta().total; return e > 0 && !isNaN(t) ? Bt * (Math.abs(t) / e) : 0 }, getMaxBorderWidth: function(t) { var e, n, r, o, i, a, c, s, l = 0,
                        u = this.chart; if (!t)
                        for (e = 0, n = u.data.datasets.length; e < n; ++e)
                            if (u.isDatasetVisible(e)) { t = (r = u.getDatasetMeta(e)).data, e !== this.index && (i = r.controller); break }
                    if (!t) return 0; for (e = 0, n = t.length; e < n; ++e) o = t[e], i ? (i._configure(), a = i._resolveDataElementOptions(o, e)) : a = o._options, "inner" !== a.borderAlign && (c = a.borderWidth, l = (s = a.hoverBorderWidth) > (l = c > l ? c : l) ? s : l); return l }, setHoverStyle: function(t) { var e = t._model,
                        n = t._options,
                        r = I.getHoverColor;
                    t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth }, e.backgroundColor = St(n.hoverBackgroundColor, r(n.backgroundColor)), e.borderColor = St(n.hoverBorderColor, r(n.borderColor)), e.borderWidth = St(n.hoverBorderWidth, n.borderWidth) }, _getRingWeightOffset: function(t) { for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n)); return e }, _getRingWeight: function(t) { return Math.max(St(this.chart.data.datasets[t].weight, 1), 0) }, _getVisibleDatasetWeightTotal: function() { return this._getRingWeightOffset(this.chart.data.datasets.length) } });
            X._set("horizontalBar", { hover: { mode: "index", axis: "y" }, scales: { xAxes: [{ type: "linear", position: "bottom" }], yAxes: [{ type: "category", position: "left", offset: !0, gridLines: { offsetGridLines: !0 } }] }, elements: { rectangle: { borderSkipped: "left" } }, tooltips: { mode: "index", axis: "y" } }), X._set("global", { datasets: { horizontalBar: { categoryPercentage: .8, barPercentage: .9 } } }); var Dt = Tt.extend({ _getValueScaleId: function() { return this.getMeta().xAxisID }, _getIndexScaleId: function() { return this.getMeta().yAxisID } }),
                Rt = I.valueOrDefault,
                Pt = I.options.resolve,
                It = I.canvas._isPointInArea;

            function jt(t, e) { var n = t && t.options.ticks || {},
                    r = n.reverse,
                    o = void 0 === n.min ? e : 0,
                    i = void 0 === n.max ? e : 0; return { start: r ? i : o, end: r ? o : i } }

            function Ft(t, e, n) { var r = n / 2,
                    o = jt(t, r),
                    i = jt(e, r); return { top: i.end, right: o.end, bottom: i.start, left: o.start } }

            function Ht(t) { var e, n, r, o; return I.isObject(t) ? (e = t.top, n = t.right, r = t.bottom, o = t.left) : e = n = r = o = t, { top: e, right: n, bottom: r, left: o } }
            X._set("line", { showLines: !0, spanGaps: !1, hover: { mode: "label" }, scales: { xAxes: [{ type: "category", id: "x-axis-0" }], yAxes: [{ type: "linear", id: "y-axis-0" }] } }); var Ut = nt.extend({ datasetElementType: yt.Line, dataElementType: yt.Point, _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"], _dataElementOptions: { backgroundColor: "pointBackgroundColor", borderColor: "pointBorderColor", borderWidth: "pointBorderWidth", hitRadius: "pointHitRadius", hoverBackgroundColor: "pointHoverBackgroundColor", hoverBorderColor: "pointHoverBorderColor", hoverBorderWidth: "pointHoverBorderWidth", hoverRadius: "pointHoverRadius", pointStyle: "pointStyle", radius: "pointRadius", rotation: "pointRotation" }, update: function(t) { var e, n, r = this,
                            o = r.getMeta(),
                            i = o.dataset,
                            a = o.data || [],
                            c = r.chart.options,
                            s = r._config,
                            l = r._showLine = Rt(s.showLine, c.showLines); for (r._xScale = r.getScaleForId(o.xAxisID), r._yScale = r.getScaleForId(o.yAxisID), l && (void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), i._scale = r._yScale, i._datasetIndex = r.index, i._children = a, i._model = r._resolveDatasetElementOptions(i), i.pivot()), e = 0, n = a.length; e < n; ++e) r.updateElement(a[e], e, t); for (l && 0 !== i._model.tension && r.updateBezierControlPoints(), e = 0, n = a.length; e < n; ++e) a[e].pivot() }, updateElement: function(t, e, n) { var r, o, i = this,
                            a = i.getMeta(),
                            c = t.custom || {},
                            s = i.getDataset(),
                            l = i.index,
                            u = s.data[e],
                            f = i._xScale,
                            d = i._yScale,
                            p = a.dataset._model,
                            h = i._resolveDataElementOptions(t, e);
                        r = f.getPixelForValue("object" == typeof u ? u : NaN, e, l), o = n ? d.getBasePixel() : i.calculatePointY(u, e, l), t._xScale = f, t._yScale = d, t._options = h, t._datasetIndex = l, t._index = e, t._model = { x: r, y: o, skip: c.skip || isNaN(r) || isNaN(o), radius: h.radius, pointStyle: h.pointStyle, rotation: h.rotation, backgroundColor: h.backgroundColor, borderColor: h.borderColor, borderWidth: h.borderWidth, tension: Rt(c.tension, p ? p.tension : 0), steppedLine: !!p && p.steppedLine, hitRadius: h.hitRadius } }, _resolveDatasetElementOptions: function(t) { var e = this,
                            n = e._config,
                            r = t.custom || {},
                            o = e.chart.options,
                            i = o.elements.line,
                            a = nt.prototype._resolveDatasetElementOptions.apply(e, arguments); return a.spanGaps = Rt(n.spanGaps, o.spanGaps), a.tension = Rt(n.lineTension, i.tension), a.steppedLine = Pt([r.steppedLine, n.steppedLine, i.stepped]), a.clip = Ht(Rt(n.clip, Ft(e._xScale, e._yScale, a.borderWidth))), a }, calculatePointY: function(t, e, n) { var r, o, i, a, c, s, l, u = this.chart,
                            f = this._yScale,
                            d = 0,
                            p = 0; if (f.options.stacked) { for (c = +f.getRightValue(t), l = (s = u._getSortedVisibleDatasetMetas()).length, r = 0; r < l && (i = s[r]).index !== n; ++r) o = u.data.datasets[i.index], "line" === i.type && i.yAxisID === f.id && ((a = +f.getRightValue(o.data[e])) < 0 ? p += a || 0 : d += a || 0); return c < 0 ? f.getPixelForValue(p + c) : f.getPixelForValue(d + c) } return f.getPixelForValue(t) }, updateBezierControlPoints: function() { var t, e, n, r, o = this.chart,
                            i = this.getMeta(),
                            a = i.dataset._model,
                            c = o.chartArea,
                            s = i.data || [];

                        function l(t, e, n) { return Math.max(Math.min(t, n), e) } if (a.spanGaps && (s = s.filter((function(t) { return !t._model.skip }))), "monotone" === a.cubicInterpolationMode) I.splineCurveMonotone(s);
                        else
                            for (t = 0, e = s.length; t < e; ++t) n = s[t]._model, r = I.splineCurve(I.previousItem(s, t)._model, n, I.nextItem(s, t)._model, a.tension), n.controlPointPreviousX = r.previous.x, n.controlPointPreviousY = r.previous.y, n.controlPointNextX = r.next.x, n.controlPointNextY = r.next.y; if (o.options.elements.line.capBezierPoints)
                            for (t = 0, e = s.length; t < e; ++t) n = s[t]._model, It(n, c) && (t > 0 && It(s[t - 1]._model, c) && (n.controlPointPreviousX = l(n.controlPointPreviousX, c.left, c.right), n.controlPointPreviousY = l(n.controlPointPreviousY, c.top, c.bottom)), t < s.length - 1 && It(s[t + 1]._model, c) && (n.controlPointNextX = l(n.controlPointNextX, c.left, c.right), n.controlPointNextY = l(n.controlPointNextY, c.top, c.bottom))) }, draw: function() { var t, e = this.chart,
                            n = this.getMeta(),
                            r = n.data || [],
                            o = e.chartArea,
                            i = e.canvas,
                            a = 0,
                            c = r.length; for (this._showLine && (t = n.dataset._model.clip, I.canvas.clipArea(e.ctx, { left: !1 === t.left ? 0 : o.left - t.left, right: !1 === t.right ? i.width : o.right + t.right, top: !1 === t.top ? 0 : o.top - t.top, bottom: !1 === t.bottom ? i.height : o.bottom + t.bottom }), n.dataset.draw(), I.canvas.unclipArea(e.ctx)); a < c; ++a) r[a].draw(o) }, setHoverStyle: function(t) { var e = t._model,
                            n = t._options,
                            r = I.getHoverColor;
                        t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth, radius: e.radius }, e.backgroundColor = Rt(n.hoverBackgroundColor, r(n.backgroundColor)), e.borderColor = Rt(n.hoverBorderColor, r(n.borderColor)), e.borderWidth = Rt(n.hoverBorderWidth, n.borderWidth), e.radius = Rt(n.hoverRadius, n.radius) } }),
                Vt = I.options.resolve;
            X._set("polarArea", { scale: { type: "radialLinear", angleLines: { display: !1 }, gridLines: { circular: !0 }, pointLabels: { display: !1 }, ticks: { beginAtZero: !0 } }, animation: { animateRotate: !0, animateScale: !0 }, startAngle: -.5 * Math.PI, legendCallback: function(t) { var e, n, r, o = document.createElement("ul"),
                        i = t.data,
                        a = i.datasets,
                        c = i.labels; if (o.setAttribute("class", t.id + "-legend"), a.length)
                        for (e = 0, n = a[0].data.length; e < n; ++e)(r = o.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = a[0].backgroundColor[e], c[e] && r.appendChild(document.createTextNode(c[e])); return o.outerHTML }, legend: { labels: { generateLabels: function(t) { var e = t.data; return e.labels.length && e.datasets.length ? e.labels.map((function(n, r) { var o = t.getDatasetMeta(0),
                                    i = o.controller.getStyle(r); return { text: n, fillStyle: i.backgroundColor, strokeStyle: i.borderColor, lineWidth: i.borderWidth, hidden: isNaN(e.datasets[0].data[r]) || o.data[r].hidden, index: r } })) : [] } }, onClick: function(t, e) { var n, r, o, i = e.index,
                            a = this.chart; for (n = 0, r = (a.data.datasets || []).length; n < r; ++n)(o = a.getDatasetMeta(n)).data[i].hidden = !o.data[i].hidden;
                        a.update() } }, tooltips: { callbacks: { title: function() { return "" }, label: function(t, e) { return e.labels[t.index] + ": " + t.yLabel } } } }); var $t = nt.extend({ dataElementType: yt.Arc, linkScales: I.noop, _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"], _getIndexScaleId: function() { return this.chart.scale.id }, _getValueScaleId: function() { return this.chart.scale.id }, update: function(t) { var e, n, r, o = this,
                        i = o.getDataset(),
                        a = o.getMeta(),
                        c = o.chart.options.startAngle || 0,
                        s = o._starts = [],
                        l = o._angles = [],
                        u = a.data; for (o._updateRadius(), a.count = o.countVisibleElements(), e = 0, n = i.data.length; e < n; e++) s[e] = c, r = o._computeAngle(e), l[e] = r, c += r; for (e = 0, n = u.length; e < n; ++e) u[e]._options = o._resolveDataElementOptions(u[e], e), o.updateElement(u[e], e, t) }, _updateRadius: function() { var t = this,
                        e = t.chart,
                        n = e.chartArea,
                        r = e.options,
                        o = Math.min(n.right - n.left, n.bottom - n.top);
                    e.outerRadius = Math.max(o / 2, 0), e.innerRadius = Math.max(r.cutoutPercentage ? e.outerRadius / 100 * r.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength }, updateElement: function(t, e, n) { var r = this,
                        o = r.chart,
                        i = r.getDataset(),
                        a = o.options,
                        c = a.animation,
                        s = o.scale,
                        l = o.data.labels,
                        u = s.xCenter,
                        f = s.yCenter,
                        d = a.startAngle,
                        p = t.hidden ? 0 : s.getDistanceFromCenterForValue(i.data[e]),
                        h = r._starts[e],
                        M = h + (t.hidden ? 0 : r._angles[e]),
                        b = c.animateScale ? 0 : s.getDistanceFromCenterForValue(i.data[e]),
                        m = t._options || {};
                    I.extend(t, { _datasetIndex: r.index, _index: e, _scale: s, _model: { backgroundColor: m.backgroundColor, borderColor: m.borderColor, borderWidth: m.borderWidth, borderAlign: m.borderAlign, x: u, y: f, innerRadius: 0, outerRadius: n ? b : p, startAngle: n && c.animateRotate ? d : h, endAngle: n && c.animateRotate ? d : M, label: I.valueAtIndexOrDefault(l, e, l[e]) } }), t.pivot() }, countVisibleElements: function() { var t = this.getDataset(),
                        e = this.getMeta(),
                        n = 0; return I.each(e.data, (function(e, r) { isNaN(t.data[r]) || e.hidden || n++ })), n }, setHoverStyle: function(t) { var e = t._model,
                        n = t._options,
                        r = I.getHoverColor,
                        o = I.valueOrDefault;
                    t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth }, e.backgroundColor = o(n.hoverBackgroundColor, r(n.backgroundColor)), e.borderColor = o(n.hoverBorderColor, r(n.borderColor)), e.borderWidth = o(n.hoverBorderWidth, n.borderWidth) }, _computeAngle: function(t) { var e = this,
                        n = this.getMeta().count,
                        r = e.getDataset(),
                        o = e.getMeta(); if (isNaN(r.data[t]) || o.data[t].hidden) return 0; var i = { chart: e.chart, dataIndex: t, dataset: r, datasetIndex: e.index }; return Vt([e.chart.options.elements.arc.angle, 2 * Math.PI / n], i, t) } });
            X._set("pie", I.clone(X.doughnut)), X._set("pie", { cutoutPercentage: 0 }); var Yt = Et,
                Gt = I.valueOrDefault;
            X._set("radar", { spanGaps: !1, scale: { type: "radialLinear" }, elements: { line: { fill: "start", tension: 0 } } }); var Kt = nt.extend({ datasetElementType: yt.Line, dataElementType: yt.Point, linkScales: I.noop, _datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"], _dataElementOptions: { backgroundColor: "pointBackgroundColor", borderColor: "pointBorderColor", borderWidth: "pointBorderWidth", hitRadius: "pointHitRadius", hoverBackgroundColor: "pointHoverBackgroundColor", hoverBorderColor: "pointHoverBorderColor", hoverBorderWidth: "pointHoverBorderWidth", hoverRadius: "pointHoverRadius", pointStyle: "pointStyle", radius: "pointRadius", rotation: "pointRotation" }, _getIndexScaleId: function() { return this.chart.scale.id }, _getValueScaleId: function() { return this.chart.scale.id }, update: function(t) { var e, n, r = this,
                        o = r.getMeta(),
                        i = o.dataset,
                        a = o.data || [],
                        c = r.chart.scale,
                        s = r._config; for (void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), i._scale = c, i._datasetIndex = r.index, i._children = a, i._loop = !0, i._model = r._resolveDatasetElementOptions(i), i.pivot(), e = 0, n = a.length; e < n; ++e) r.updateElement(a[e], e, t); for (r.updateBezierControlPoints(), e = 0, n = a.length; e < n; ++e) a[e].pivot() }, updateElement: function(t, e, n) { var r = this,
                        o = t.custom || {},
                        i = r.getDataset(),
                        a = r.chart.scale,
                        c = a.getPointPositionForValue(e, i.data[e]),
                        s = r._resolveDataElementOptions(t, e),
                        l = r.getMeta().dataset._model,
                        u = n ? a.xCenter : c.x,
                        f = n ? a.yCenter : c.y;
                    t._scale = a, t._options = s, t._datasetIndex = r.index, t._index = e, t._model = { x: u, y: f, skip: o.skip || isNaN(u) || isNaN(f), radius: s.radius, pointStyle: s.pointStyle, rotation: s.rotation, backgroundColor: s.backgroundColor, borderColor: s.borderColor, borderWidth: s.borderWidth, tension: Gt(o.tension, l ? l.tension : 0), hitRadius: s.hitRadius } }, _resolveDatasetElementOptions: function() { var t = this,
                        e = t._config,
                        n = t.chart.options,
                        r = nt.prototype._resolveDatasetElementOptions.apply(t, arguments); return r.spanGaps = Gt(e.spanGaps, n.spanGaps), r.tension = Gt(e.lineTension, n.elements.line.tension), r }, updateBezierControlPoints: function() { var t, e, n, r, o = this.getMeta(),
                        i = this.chart.chartArea,
                        a = o.data || [];

                    function c(t, e, n) { return Math.max(Math.min(t, n), e) } for (o.dataset._model.spanGaps && (a = a.filter((function(t) { return !t._model.skip }))), t = 0, e = a.length; t < e; ++t) n = a[t]._model, r = I.splineCurve(I.previousItem(a, t, !0)._model, n, I.nextItem(a, t, !0)._model, n.tension), n.controlPointPreviousX = c(r.previous.x, i.left, i.right), n.controlPointPreviousY = c(r.previous.y, i.top, i.bottom), n.controlPointNextX = c(r.next.x, i.left, i.right), n.controlPointNextY = c(r.next.y, i.top, i.bottom) }, setHoverStyle: function(t) { var e = t._model,
                        n = t._options,
                        r = I.getHoverColor;
                    t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth, radius: e.radius }, e.backgroundColor = Gt(n.hoverBackgroundColor, r(n.backgroundColor)), e.borderColor = Gt(n.hoverBorderColor, r(n.borderColor)), e.borderWidth = Gt(n.hoverBorderWidth, n.borderWidth), e.radius = Gt(n.hoverRadius, n.radius) } });
            X._set("scatter", { hover: { mode: "single" }, scales: { xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }], yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }] }, tooltips: { callbacks: { title: function() { return "" }, label: function(t) { return "(" + t.xLabel + ", " + t.yLabel + ")" } } } }), X._set("global", { datasets: { scatter: { showLine: !1 } } }); var Jt = { bar: Tt, bubble: Wt, doughnut: Et, horizontalBar: Dt, line: Ut, polarArea: $t, pie: Yt, radar: Kt, scatter: Ut };

            function Qt(t, e) { return t.native ? { x: t.x, y: t.y } : I.getRelativePosition(t, e) }

            function Zt(t, e) { var n, r, o, i, a, c, s = t._getSortedVisibleDatasetMetas(); for (r = 0, i = s.length; r < i; ++r)
                    for (o = 0, a = (n = s[r].data).length; o < a; ++o)(c = n[o])._view.skip || e(c) }

            function te(t, e) { var n = []; return Zt(t, (function(t) { t.inRange(e.x, e.y) && n.push(t) })), n }

            function ee(t, e, n, r) { var o = Number.POSITIVE_INFINITY,
                    i = []; return Zt(t, (function(t) { if (!n || t.inRange(e.x, e.y)) { var a = t.getCenterPoint(),
                            c = r(e, a);
                        c < o ? (i = [t], o = c) : c === o && i.push(t) } })), i }

            function ne(t) { var e = -1 !== t.indexOf("x"),
                    n = -1 !== t.indexOf("y"); return function(t, r) { var o = e ? Math.abs(t.x - r.x) : 0,
                        i = n ? Math.abs(t.y - r.y) : 0; return Math.sqrt(Math.pow(o, 2) + Math.pow(i, 2)) } }

            function re(t, e, n) { var r = Qt(e, t);
                n.axis = n.axis || "x"; var o = ne(n.axis),
                    i = n.intersect ? te(t, r) : ee(t, r, !1, o),
                    a = []; return i.length ? (t._getSortedVisibleDatasetMetas().forEach((function(t) { var e = t.data[i[0]._index];
                    e && !e._view.skip && a.push(e) })), a) : [] } var oe = { modes: { single: function(t, e) { var n = Qt(e, t),
                                r = []; return Zt(t, (function(t) { if (t.inRange(n.x, n.y)) return r.push(t), r })), r.slice(0, 1) }, label: re, index: re, dataset: function(t, e, n) { var r = Qt(e, t);
                            n.axis = n.axis || "xy"; var o = ne(n.axis),
                                i = n.intersect ? te(t, r) : ee(t, r, !1, o); return i.length > 0 && (i = t.getDatasetMeta(i[0]._datasetIndex).data), i }, "x-axis": function(t, e) { return re(t, e, { intersect: !1 }) }, point: function(t, e) { return te(t, Qt(e, t)) }, nearest: function(t, e, n) { var r = Qt(e, t);
                            n.axis = n.axis || "xy"; var o = ne(n.axis); return ee(t, r, n.intersect, o) }, x: function(t, e, n) { var r = Qt(e, t),
                                o = [],
                                i = !1; return Zt(t, (function(t) { t.inXRange(r.x) && o.push(t), t.inRange(r.x, r.y) && (i = !0) })), n.intersect && !i && (o = []), o }, y: function(t, e, n) { var r = Qt(e, t),
                                o = [],
                                i = !1; return Zt(t, (function(t) { t.inYRange(r.y) && o.push(t), t.inRange(r.x, r.y) && (i = !0) })), n.intersect && !i && (o = []), o } } },
                ie = I.extend;

            function ae(t, e) { return I.where(t, (function(t) { return t.pos === e })) }

            function ce(t, e) { return t.sort((function(t, n) { var r = e ? n : t,
                        o = e ? t : n; return r.weight === o.weight ? r.index - o.index : r.weight - o.weight })) }

            function se(t, e, n, r) { return Math.max(t[n], e[n]) + Math.max(t[r], e[r]) }

            function le(t, e, n) { var r, o, i = n.box,
                    a = t.maxPadding; if (n.size && (t[n.pos] -= n.size), n.size = n.horizontal ? i.height : i.width, t[n.pos] += n.size, i.getPadding) { var c = i.getPadding();
                    a.top = Math.max(a.top, c.top), a.left = Math.max(a.left, c.left), a.bottom = Math.max(a.bottom, c.bottom), a.right = Math.max(a.right, c.right) } if (r = e.outerWidth - se(a, t, "left", "right"), o = e.outerHeight - se(a, t, "top", "bottom"), r !== t.w || o !== t.h) return t.w = r, t.h = o, n.horizontal ? r !== t.w : o !== t.h }

            function ue(t, e) { var n = e.maxPadding;

                function r(t) { var r = { left: 0, top: 0, right: 0, bottom: 0 }; return t.forEach((function(t) { r[t] = Math.max(e[t], n[t]) })), r } return r(t ? ["left", "right"] : ["top", "bottom"]) }

            function fe(t, e, n) { var r, o, i, a, c, s, l = []; for (r = 0, o = t.length; r < o; ++r)(a = (i = t[r]).box).update(i.width || e.w, i.height || e.h, ue(i.horizontal, e)), le(e, n, i) && (s = !0, l.length && (c = !0)), a.fullWidth || l.push(i); return c && fe(l, e, n) || s }

            function de(t, e, n) { var r, o, i, a, c = n.padding,
                    s = e.x,
                    l = e.y; for (r = 0, o = t.length; r < o; ++r) a = (i = t[r]).box, i.horizontal ? (a.left = a.fullWidth ? c.left : e.left, a.right = a.fullWidth ? n.outerWidth - c.right : e.left + e.w, a.top = l, a.bottom = l + a.height, a.width = a.right - a.left, l = a.bottom) : (a.left = s, a.right = s + a.width, a.top = e.top, a.bottom = e.top + e.h, a.height = a.bottom - a.top, s = a.right);
                e.x = s, e.y = l }
            X._set("global", { layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } } }); var pe, he = { defaults: {}, addBox: function(t, e) { t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() { return [{ z: 0, draw: function() { e.draw.apply(e, arguments) } }] }, t.boxes.push(e) }, removeBox: function(t, e) { var n = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== n && t.boxes.splice(n, 1) }, configure: function(t, e, n) { for (var r, o = ["fullWidth", "position", "weight"], i = o.length, a = 0; a < i; ++a) r = o[a], n.hasOwnProperty(r) && (e[r] = n[r]) }, update: function(t, e, n) { if (t) { var r = t.options.layout || {},
                                o = I.options.toPadding(r.padding),
                                i = e - o.width,
                                a = n - o.height,
                                c = function(t) { var e = function(t) { var e, n, r, o = []; for (e = 0, n = (t || []).length; e < n; ++e) r = t[e], o.push({ index: e, box: r, pos: r.position, horizontal: r.isHorizontal(), weight: r.weight }); return o }(t),
                                        n = ce(ae(e, "left"), !0),
                                        r = ce(ae(e, "right")),
                                        o = ce(ae(e, "top"), !0),
                                        i = ce(ae(e, "bottom")); return { leftAndTop: n.concat(o), rightAndBottom: r.concat(i), chartArea: ae(e, "chartArea"), vertical: n.concat(r), horizontal: o.concat(i) } }(t.boxes),
                                s = c.vertical,
                                l = c.horizontal,
                                u = Object.freeze({ outerWidth: e, outerHeight: n, padding: o, availableWidth: i, vBoxMaxWidth: i / 2 / s.length, hBoxMaxHeight: a / 2 }),
                                f = ie({ maxPadding: ie({}, o), w: i, h: a, x: o.left, y: o.top }, o);! function(t, e) { var n, r, o; for (n = 0, r = t.length; n < r; ++n)(o = t[n]).width = o.horizontal ? o.box.fullWidth && e.availableWidth : e.vBoxMaxWidth, o.height = o.horizontal && e.hBoxMaxHeight }(s.concat(l), u), fe(s, f, u), fe(l, f, u) && fe(s, f, u),
                                function(t) { var e = t.maxPadding;

                                    function n(n) { var r = Math.max(e[n] - t[n], 0); return t[n] += r, r }
                                    t.y += n("top"), t.x += n("left"), n("right"), n("bottom") }(f), de(c.leftAndTop, f, u), f.x += f.w, f.y += f.h, de(c.rightAndBottom, f, u), t.chartArea = { left: f.left, top: f.top, right: f.left + f.w, bottom: f.top + f.h }, I.each(c.chartArea, (function(e) { var n = e.box;
                                    ie(n, t.chartArea), n.update(f.w, f.h) })) } } },
                Me = (pe = Object.freeze({ __proto__: null, default: "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n" })) && pe.default || pe,
                be = ["animationstart", "webkitAnimationStart"],
                me = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" };

            function ve(t, e) { var n = I.getStyle(t, e),
                    r = n && n.match(/^(\d+)(\.\d+)?px$/); return r ? Number(r[1]) : void 0 } var ge = !! function() { var t = !1; try { var e = Object.defineProperty({}, "passive", { get: function() { t = !0 } });
                    window.addEventListener("e", null, e) } catch (t) {} return t }() && { passive: !0 };

            function Ae(t, e, n) { t.addEventListener(e, n, ge) }

            function ye(t, e, n) { t.removeEventListener(e, n, ge) }

            function ze(t, e, n, r, o) { return { type: t, chart: e, native: o || null, x: void 0 !== n ? n : null, y: void 0 !== r ? r : null } }

            function _e(t) { var e = document.createElement("div"); return e.className = t || "", e }

            function Oe(t, e, n) { var r, o, i, a, c = t.$chartjs || (t.$chartjs = {}),
                    s = c.resizer = function(t) { var e = _e("chartjs-size-monitor"),
                            n = _e("chartjs-size-monitor-expand"),
                            r = _e("chartjs-size-monitor-shrink");
                        n.appendChild(_e()), r.appendChild(_e()), e.appendChild(n), e.appendChild(r), e._reset = function() { n.scrollLeft = 1e6, n.scrollTop = 1e6, r.scrollLeft = 1e6, r.scrollTop = 1e6 }; var o = function() { e._reset(), t() }; return Ae(n, "scroll", o.bind(n, "expand")), Ae(r, "scroll", o.bind(r, "shrink")), e }((r = function() { if (c.resizer) { var r = n.options.maintainAspectRatio && t.parentNode,
                                o = r ? r.clientWidth : 0;
                            e(ze("resize", n)), r && r.clientWidth < o && n.canvas && e(ze("resize", n)) } }, i = !1, a = [], function() { a = Array.prototype.slice.call(arguments), o = o || this, i || (i = !0, I.requestAnimFrame.call(window, (function() { i = !1, r.apply(o, a) }))) }));! function(t, e) { var n = t.$chartjs || (t.$chartjs = {}),
                        r = n.renderProxy = function(t) { "chartjs-render-animation" === t.animationName && e() };
                    I.each(be, (function(e) { Ae(t, e, r) })), n.reflow = !!t.offsetParent, t.classList.add("chartjs-render-monitor") }(t, (function() { if (c.resizer) { var e = t.parentNode;
                        e && e !== s.parentNode && e.insertBefore(s, e.firstChild), s._reset() } })) }

            function xe(t) { var e = t.$chartjs || {},
                    n = e.resizer;
                delete e.resizer,
                    function(t) { var e = t.$chartjs || {},
                            n = e.renderProxy;
                        n && (I.each(be, (function(e) { ye(t, e, n) })), delete e.renderProxy), t.classList.remove("chartjs-render-monitor") }(t), n && n.parentNode && n.parentNode.removeChild(n) } var Le = { disableCSSInjection: !1, _enabled: "undefined" != typeof window && "undefined" != typeof document, _ensureLoaded: function(t) { if (!this.disableCSSInjection) { var e = t.getRootNode ? t.getRootNode() : document;! function(t, e) { var n = t.$chartjs || (t.$chartjs = {}); if (!n.containsStyles) { n.containsStyles = !0, e = "/* Chart.js */\n" + e; var r = document.createElement("style");
                                r.setAttribute("type", "text/css"), r.appendChild(document.createTextNode(e)), t.appendChild(r) } }(e.host ? e : document.head, Me) } }, acquireContext: function(t, e) { "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas); var n = t && t.getContext && t.getContext("2d"); return n && n.canvas === t ? (this._ensureLoaded(t), function(t, e) { var n = t.style,
                            r = t.getAttribute("height"),
                            o = t.getAttribute("width"); if (t.$chartjs = { initial: { height: r, width: o, style: { display: n.display, height: n.height, width: n.width } } }, n.display = n.display || "block", null === o || "" === o) { var i = ve(t, "width");
                            void 0 !== i && (t.width = i) } if (null === r || "" === r)
                            if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                            else { var a = ve(t, "height");
                                void 0 !== i && (t.height = a) } }(t, e), n) : null }, releaseContext: function(t) { var e = t.canvas; if (e.$chartjs) { var n = e.$chartjs.initial;
                        ["height", "width"].forEach((function(t) { var r = n[t];
                            I.isNullOrUndef(r) ? e.removeAttribute(t) : e.setAttribute(t, r) })), I.each(n.style || {}, (function(t, n) { e.style[n] = t })), e.width = e.width, delete e.$chartjs } }, addEventListener: function(t, e, n) { var r = t.canvas; if ("resize" !== e) { var o = n.$chartjs || (n.$chartjs = {});
                        Ae(r, e, (o.proxies || (o.proxies = {}))[t.id + "_" + e] = function(e) { n(function(t, e) { var n = me[t.type] || t.type,
                                    r = I.getRelativePosition(t, e); return ze(n, e, r.x, r.y, t) }(e, t)) }) } else Oe(r, n, t) }, removeEventListener: function(t, e, n) { var r = t.canvas; if ("resize" !== e) { var o = ((n.$chartjs || {}).proxies || {})[t.id + "_" + e];
                        o && ye(r, e, o) } else xe(r) } };
            I.addEvent = Ae, I.removeEvent = ye; var Ne = Le._enabled ? Le : { acquireContext: function(t) { return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null } },
                we = I.extend({ initialize: function() {}, acquireContext: function() {}, releaseContext: function() {}, addEventListener: function() {}, removeEventListener: function() {} }, Ne);
            X._set("global", { plugins: {} }); var Te = { _plugins: [], _cacheId: 0, register: function(t) { var e = this._plugins;
                        [].concat(t).forEach((function(t) {-1 === e.indexOf(t) && e.push(t) })), this._cacheId++ }, unregister: function(t) { var e = this._plugins;
                        [].concat(t).forEach((function(t) { var n = e.indexOf(t); - 1 !== n && e.splice(n, 1) })), this._cacheId++ }, clear: function() { this._plugins = [], this._cacheId++ }, count: function() { return this._plugins.length }, getAll: function() { return this._plugins }, notify: function(t, e, n) { var r, o, i, a, c, s = this.descriptors(t),
                            l = s.length; for (r = 0; r < l; ++r)
                            if ("function" == typeof(c = (i = (o = s[r]).plugin)[e]) && ((a = [t].concat(n || [])).push(o.options), !1 === c.apply(i, a))) return !1;
                        return !0 }, descriptors: function(t) { var e = t.$plugins || (t.$plugins = {}); if (e.id === this._cacheId) return e.descriptors; var n = [],
                            r = [],
                            o = t && t.config || {},
                            i = o.options && o.options.plugins || {}; return this._plugins.concat(o.plugins || []).forEach((function(t) { if (-1 === n.indexOf(t)) { var e = t.id,
                                    o = i[e];!1 !== o && (!0 === o && (o = I.clone(X.global.plugins[e])), n.push(t), r.push({ plugin: t, options: o || {} })) } })), e.descriptors = r, e.id = this._cacheId, r }, _invalidate: function(t) { delete t.$plugins } },
                qe = { constructors: {}, defaults: {}, registerScaleType: function(t, e, n) { this.constructors[t] = e, this.defaults[t] = I.clone(n) }, getScaleConstructor: function(t) { return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0 }, getScaleDefaults: function(t) { return this.defaults.hasOwnProperty(t) ? I.merge({}, [X.scale, this.defaults[t]]) : {} }, updateScaleDefaults: function(t, e) { this.defaults.hasOwnProperty(t) && (this.defaults[t] = I.extend(this.defaults[t], e)) }, addScalesToLayout: function(t) { I.each(t.scales, (function(e) { e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, he.addBox(t, e) })) } },
                Ce = I.valueOrDefault,
                We = I.rtl.getRtlAdapter;
            X._set("global", { tooltips: { enabled: !0, custom: null, mode: "nearest", position: "average", intersect: !0, backgroundColor: "rgba(0,0,0,0.8)", titleFontStyle: "bold", titleSpacing: 2, titleMarginBottom: 6, titleFontColor: "#fff", titleAlign: "left", bodySpacing: 2, bodyFontColor: "#fff", bodyAlign: "left", footerFontStyle: "bold", footerSpacing: 2, footerMarginTop: 6, footerFontColor: "#fff", footerAlign: "left", yPadding: 6, xPadding: 6, caretPadding: 2, caretSize: 5, cornerRadius: 6, multiKeyBackground: "#fff", displayColors: !0, borderColor: "rgba(0,0,0,0)", borderWidth: 0, callbacks: { beforeTitle: I.noop, title: function(t, e) { var n = "",
                                r = e.labels,
                                o = r ? r.length : 0; if (t.length > 0) { var i = t[0];
                                i.label ? n = i.label : i.xLabel ? n = i.xLabel : o > 0 && i.index < o && (n = r[i.index]) } return n }, afterTitle: I.noop, beforeBody: I.noop, beforeLabel: I.noop, label: function(t, e) { var n = e.datasets[t.datasetIndex].label || ""; return n && (n += ": "), I.isNullOrUndef(t.value) ? n += t.yLabel : n += t.value, n }, labelColor: function(t, e) { var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view; return { borderColor: n.borderColor, backgroundColor: n.backgroundColor } }, labelTextColor: function() { return this._options.bodyFontColor }, afterLabel: I.noop, afterBody: I.noop, beforeFooter: I.noop, footer: I.noop, afterFooter: I.noop } } }); var Se = { average: function(t) { if (!t.length) return !1; var e, n, r = 0,
                        o = 0,
                        i = 0; for (e = 0, n = t.length; e < n; ++e) { var a = t[e]; if (a && a.hasValue()) { var c = a.tooltipPosition();
                            r += c.x, o += c.y, ++i } } return { x: r / i, y: o / i } }, nearest: function(t, e) { var n, r, o, i = e.x,
                        a = e.y,
                        c = Number.POSITIVE_INFINITY; for (n = 0, r = t.length; n < r; ++n) { var s = t[n]; if (s && s.hasValue()) { var l = s.getCenterPoint(),
                                u = I.distanceBetweenPoints(e, l);
                            u < c && (c = u, o = s) } } if (o) { var f = o.tooltipPosition();
                        i = f.x, a = f.y } return { x: i, y: a } } };

            function ke(t, e) { return e && (I.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t }

            function Be(t) { return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t }

            function Xe(t) { var e = X.global; return { xPadding: t.xPadding, yPadding: t.yPadding, xAlign: t.xAlign, yAlign: t.yAlign, rtl: t.rtl, textDirection: t.textDirection, bodyFontColor: t.bodyFontColor, _bodyFontFamily: Ce(t.bodyFontFamily, e.defaultFontFamily), _bodyFontStyle: Ce(t.bodyFontStyle, e.defaultFontStyle), _bodyAlign: t.bodyAlign, bodyFontSize: Ce(t.bodyFontSize, e.defaultFontSize), bodySpacing: t.bodySpacing, titleFontColor: t.titleFontColor, _titleFontFamily: Ce(t.titleFontFamily, e.defaultFontFamily), _titleFontStyle: Ce(t.titleFontStyle, e.defaultFontStyle), titleFontSize: Ce(t.titleFontSize, e.defaultFontSize), _titleAlign: t.titleAlign, titleSpacing: t.titleSpacing, titleMarginBottom: t.titleMarginBottom, footerFontColor: t.footerFontColor, _footerFontFamily: Ce(t.footerFontFamily, e.defaultFontFamily), _footerFontStyle: Ce(t.footerFontStyle, e.defaultFontStyle), footerFontSize: Ce(t.footerFontSize, e.defaultFontSize), _footerAlign: t.footerAlign, footerSpacing: t.footerSpacing, footerMarginTop: t.footerMarginTop, caretSize: t.caretSize, cornerRadius: t.cornerRadius, backgroundColor: t.backgroundColor, opacity: 0, legendColorBackground: t.multiKeyBackground, displayColors: t.displayColors, borderColor: t.borderColor, borderWidth: t.borderWidth } }

            function Ee(t, e) { return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding }

            function De(t) { return ke([], Be(t)) } var Re = Y.extend({ initialize: function() { this._model = Xe(this._options), this._lastActive = [] }, getTitle: function() { var t = this,
                            e = t._options,
                            n = e.callbacks,
                            r = n.beforeTitle.apply(t, arguments),
                            o = n.title.apply(t, arguments),
                            i = n.afterTitle.apply(t, arguments),
                            a = []; return a = ke(a, Be(r)), a = ke(a, Be(o)), a = ke(a, Be(i)) }, getBeforeBody: function() { return De(this._options.callbacks.beforeBody.apply(this, arguments)) }, getBody: function(t, e) { var n = this,
                            r = n._options.callbacks,
                            o = []; return I.each(t, (function(t) { var i = { before: [], lines: [], after: [] };
                            ke(i.before, Be(r.beforeLabel.call(n, t, e))), ke(i.lines, r.label.call(n, t, e)), ke(i.after, Be(r.afterLabel.call(n, t, e))), o.push(i) })), o }, getAfterBody: function() { return De(this._options.callbacks.afterBody.apply(this, arguments)) }, getFooter: function() { var t = this,
                            e = t._options.callbacks,
                            n = e.beforeFooter.apply(t, arguments),
                            r = e.footer.apply(t, arguments),
                            o = e.afterFooter.apply(t, arguments),
                            i = []; return i = ke(i, Be(n)), i = ke(i, Be(r)), i = ke(i, Be(o)) }, update: function(t) { var e, n, r, o, i, a, c, s, l, u, f = this,
                            d = f._options,
                            p = f._model,
                            h = f._model = Xe(d),
                            M = f._active,
                            b = f._data,
                            m = { xAlign: p.xAlign, yAlign: p.yAlign },
                            v = { x: p.x, y: p.y },
                            g = { width: p.width, height: p.height },
                            A = { x: p.caretX, y: p.caretY }; if (M.length) { h.opacity = 1; var y = [],
                                z = [];
                            A = Se[d.position].call(f, M, f._eventPosition); var _ = []; for (e = 0, n = M.length; e < n; ++e) _.push((r = M[e], o = void 0, i = void 0, a = void 0, c = void 0, s = void 0, l = void 0, u = void 0, o = r._xScale, i = r._yScale || r._scale, a = r._index, c = r._datasetIndex, s = r._chart.getDatasetMeta(c).controller, l = s._getIndexScale(), u = s._getValueScale(), { xLabel: o ? o.getLabelForIndex(a, c) : "", yLabel: i ? i.getLabelForIndex(a, c) : "", label: l ? "" + l.getLabelForIndex(a, c) : "", value: u ? "" + u.getLabelForIndex(a, c) : "", index: a, datasetIndex: c, x: r._model.x, y: r._model.y }));
                            d.filter && (_ = _.filter((function(t) { return d.filter(t, b) }))), d.itemSort && (_ = _.sort((function(t, e) { return d.itemSort(t, e, b) }))), I.each(_, (function(t) { y.push(d.callbacks.labelColor.call(f, t, f._chart)), z.push(d.callbacks.labelTextColor.call(f, t, f._chart)) })), h.title = f.getTitle(_, b), h.beforeBody = f.getBeforeBody(_, b), h.body = f.getBody(_, b), h.afterBody = f.getAfterBody(_, b), h.footer = f.getFooter(_, b), h.x = A.x, h.y = A.y, h.caretPadding = d.caretPadding, h.labelColors = y, h.labelTextColors = z, h.dataPoints = _, g = function(t, e) { var n = t._chart.ctx,
                                    r = 2 * e.yPadding,
                                    o = 0,
                                    i = e.body,
                                    a = i.reduce((function(t, e) { return t + e.before.length + e.lines.length + e.after.length }), 0);
                                a += e.beforeBody.length + e.afterBody.length; var c = e.title.length,
                                    s = e.footer.length,
                                    l = e.titleFontSize,
                                    u = e.bodyFontSize,
                                    f = e.footerFontSize;
                                r += c * l, r += c ? (c - 1) * e.titleSpacing : 0, r += c ? e.titleMarginBottom : 0, r += a * u, r += a ? (a - 1) * e.bodySpacing : 0, r += s ? e.footerMarginTop : 0, r += s * f, r += s ? (s - 1) * e.footerSpacing : 0; var d = 0,
                                    p = function(t) { o = Math.max(o, n.measureText(t).width + d) }; return n.font = I.fontString(l, e._titleFontStyle, e._titleFontFamily), I.each(e.title, p), n.font = I.fontString(u, e._bodyFontStyle, e._bodyFontFamily), I.each(e.beforeBody.concat(e.afterBody), p), d = e.displayColors ? u + 2 : 0, I.each(i, (function(t) { I.each(t.before, p), I.each(t.lines, p), I.each(t.after, p) })), d = 0, n.font = I.fontString(f, e._footerFontStyle, e._footerFontFamily), I.each(e.footer, p), { width: o += 2 * e.xPadding, height: r } }(this, h), v = function(t, e, n, r) { var o = t.x,
                                    i = t.y,
                                    a = t.caretSize,
                                    c = t.caretPadding,
                                    s = t.cornerRadius,
                                    l = n.xAlign,
                                    u = n.yAlign,
                                    f = a + c,
                                    d = s + c; return "right" === l ? o -= e.width : "center" === l && ((o -= e.width / 2) + e.width > r.width && (o = r.width - e.width), o < 0 && (o = 0)), "top" === u ? i += f : i -= "bottom" === u ? e.height + f : e.height / 2, "center" === u ? "left" === l ? o += f : "right" === l && (o -= f) : "left" === l ? o -= d : "right" === l && (o += d), { x: o, y: i } }(h, g, m = function(t, e) { var n, r, o, i, a, c = t._model,
                                    s = t._chart,
                                    l = t._chart.chartArea,
                                    u = "center",
                                    f = "center";
                                c.y < e.height ? f = "top" : c.y > s.height - e.height && (f = "bottom"); var d = (l.left + l.right) / 2,
                                    p = (l.top + l.bottom) / 2; "center" === f ? (n = function(t) { return t <= d }, r = function(t) { return t > d }) : (n = function(t) { return t <= e.width / 2 }, r = function(t) { return t >= s.width - e.width / 2 }), o = function(t) { return t + e.width + c.caretSize + c.caretPadding > s.width }, i = function(t) { return t - e.width - c.caretSize - c.caretPadding < 0 }, a = function(t) { return t <= p ? "top" : "bottom" }, n(c.x) ? (u = "left", o(c.x) && (u = "center", f = a(c.y))) : r(c.x) && (u = "right", i(c.x) && (u = "center", f = a(c.y))); var h = t._options; return { xAlign: h.xAlign ? h.xAlign : u, yAlign: h.yAlign ? h.yAlign : f } }(this, g), f._chart) } else h.opacity = 0; return h.xAlign = m.xAlign, h.yAlign = m.yAlign, h.x = v.x, h.y = v.y, h.width = g.width, h.height = g.height, h.caretX = A.x, h.caretY = A.y, f._model = h, t && d.custom && d.custom.call(f, h), f }, drawCaret: function(t, e) { var n = this._chart.ctx,
                            r = this._view,
                            o = this.getCaretPosition(t, e, r);
                        n.lineTo(o.x1, o.y1), n.lineTo(o.x2, o.y2), n.lineTo(o.x3, o.y3) }, getCaretPosition: function(t, e, n) { var r, o, i, a, c, s, l = n.caretSize,
                            u = n.cornerRadius,
                            f = n.xAlign,
                            d = n.yAlign,
                            p = t.x,
                            h = t.y,
                            M = e.width,
                            b = e.height; if ("center" === d) c = h + b / 2, "left" === f ? (o = (r = p) - l, i = r, a = c + l, s = c - l) : (o = (r = p + M) + l, i = r, a = c - l, s = c + l);
                        else if ("left" === f ? (r = (o = p + u + l) - l, i = o + l) : "right" === f ? (r = (o = p + M - u - l) - l, i = o + l) : (r = (o = n.caretX) - l, i = o + l), "top" === d) c = (a = h) - l, s = a;
                        else { c = (a = h + b) + l, s = a; var m = i;
                            i = r, r = m } return { x1: r, x2: o, x3: i, y1: a, y2: c, y3: s } }, drawTitle: function(t, e, n) { var r, o, i, a = e.title,
                            c = a.length; if (c) { var s = We(e.rtl, e.x, e.width); for (t.x = Ee(e, e._titleAlign), n.textAlign = s.textAlign(e._titleAlign), n.textBaseline = "middle", r = e.titleFontSize, o = e.titleSpacing, n.fillStyle = e.titleFontColor, n.font = I.fontString(r, e._titleFontStyle, e._titleFontFamily), i = 0; i < c; ++i) n.fillText(a[i], s.x(t.x), t.y + r / 2), t.y += r + o, i + 1 === c && (t.y += e.titleMarginBottom - o) } }, drawBody: function(t, e, n) { var r, o, i, a, c, s, l, u, f = e.bodyFontSize,
                            d = e.bodySpacing,
                            p = e._bodyAlign,
                            h = e.body,
                            M = e.displayColors,
                            b = 0,
                            m = M ? Ee(e, "left") : 0,
                            v = We(e.rtl, e.x, e.width),
                            g = function(e) { n.fillText(e, v.x(t.x + b), t.y + f / 2), t.y += f + d },
                            A = v.textAlign(p); for (n.textAlign = p, n.textBaseline = "middle", n.font = I.fontString(f, e._bodyFontStyle, e._bodyFontFamily), t.x = Ee(e, A), n.fillStyle = e.bodyFontColor, I.each(e.beforeBody, g), b = M && "right" !== A ? "center" === p ? f / 2 + 1 : f + 2 : 0, c = 0, l = h.length; c < l; ++c) { for (r = h[c], o = e.labelTextColors[c], i = e.labelColors[c], n.fillStyle = o, I.each(r.before, g), s = 0, u = (a = r.lines).length; s < u; ++s) { if (M) { var y = v.x(m);
                                    n.fillStyle = e.legendColorBackground, n.fillRect(v.leftForLtr(y, f), t.y, f, f), n.lineWidth = 1, n.strokeStyle = i.borderColor, n.strokeRect(v.leftForLtr(y, f), t.y, f, f), n.fillStyle = i.backgroundColor, n.fillRect(v.leftForLtr(v.xPlus(y, 1), f - 2), t.y + 1, f - 2, f - 2), n.fillStyle = o }
                                g(a[s]) }
                            I.each(r.after, g) }
                        b = 0, I.each(e.afterBody, g), t.y -= d }, drawFooter: function(t, e, n) { var r, o, i = e.footer,
                            a = i.length; if (a) { var c = We(e.rtl, e.x, e.width); for (t.x = Ee(e, e._footerAlign), t.y += e.footerMarginTop, n.textAlign = c.textAlign(e._footerAlign), n.textBaseline = "middle", r = e.footerFontSize, n.fillStyle = e.footerFontColor, n.font = I.fontString(r, e._footerFontStyle, e._footerFontFamily), o = 0; o < a; ++o) n.fillText(i[o], c.x(t.x), t.y + r / 2), t.y += r + e.footerSpacing } }, drawBackground: function(t, e, n, r) { n.fillStyle = e.backgroundColor, n.strokeStyle = e.borderColor, n.lineWidth = e.borderWidth; var o = e.xAlign,
                            i = e.yAlign,
                            a = t.x,
                            c = t.y,
                            s = r.width,
                            l = r.height,
                            u = e.cornerRadius;
                        n.beginPath(), n.moveTo(a + u, c), "top" === i && this.drawCaret(t, r), n.lineTo(a + s - u, c), n.quadraticCurveTo(a + s, c, a + s, c + u), "center" === i && "right" === o && this.drawCaret(t, r), n.lineTo(a + s, c + l - u), n.quadraticCurveTo(a + s, c + l, a + s - u, c + l), "bottom" === i && this.drawCaret(t, r), n.lineTo(a + u, c + l), n.quadraticCurveTo(a, c + l, a, c + l - u), "center" === i && "left" === o && this.drawCaret(t, r), n.lineTo(a, c + u), n.quadraticCurveTo(a, c, a + u, c), n.closePath(), n.fill(), e.borderWidth > 0 && n.stroke() }, draw: function() { var t = this._chart.ctx,
                            e = this._view; if (0 !== e.opacity) { var n = { width: e.width, height: e.height },
                                r = { x: e.x, y: e.y },
                                o = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                                i = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                            this._options.enabled && i && (t.save(), t.globalAlpha = o, this.drawBackground(r, e, t, n), r.y += e.yPadding, I.rtl.overrideTextDirection(t, e.textDirection), this.drawTitle(r, e, t), this.drawBody(r, e, t), this.drawFooter(r, e, t), I.rtl.restoreTextDirection(t, e.textDirection), t.restore()) } }, handleEvent: function(t) { var e, n = this,
                            r = n._options; return n._lastActive = n._lastActive || [], "mouseout" === t.type ? n._active = [] : (n._active = n._chart.getElementsAtEventForMode(t, r.mode, r), r.reverse && n._active.reverse()), (e = !I.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (r.enabled || r.custom) && (n._eventPosition = { x: t.x, y: t.y }, n.update(!0), n.pivot())), e } }),
                Pe = Se,
                Ie = Re;
            Ie.positioners = Pe; var je = I.valueOrDefault;

            function Fe() { return I.merge({}, [].slice.call(arguments), { merger: function(t, e, n, r) { if ("xAxes" === t || "yAxes" === t) { var o, i, a, c = n[t].length; for (e[t] || (e[t] = []), o = 0; o < c; ++o) a = n[t][o], i = je(a.type, "xAxes" === t ? "category" : "linear"), o >= e[t].length && e[t].push({}), !e[t][o].type || a.type && a.type !== e[t][o].type ? I.merge(e[t][o], [qe.getScaleDefaults(i), a]) : I.merge(e[t][o], a) } else I._merger(t, e, n, r) } }) }

            function He() { return I.merge({}, [].slice.call(arguments), { merger: function(t, e, n, r) { var o = e[t] || {},
                            i = n[t]; "scales" === t ? e[t] = Fe(o, i) : "scale" === t ? e[t] = I.merge(o, [qe.getScaleDefaults(i.type), i]) : I._merger(t, e, n, r) } }) }

            function Ue(t) { var e = t.options;
                I.each(t.scales, (function(e) { he.removeBox(t, e) })), e = He(X.global, X[t.config.type], e), t.options = t.config.options = e, t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.tooltip._options = e.tooltips, t.tooltip.initialize() }

            function Ve(t, e, n) { var r, o = function(t) { return t.id === r };
                do { r = e + n++ } while (I.findIndex(t, o) >= 0); return r }

            function $e(t) { return "top" === t || "bottom" === t }

            function Ye(t, e) { return function(n, r) { return n[t] === r[t] ? n[e] - r[e] : n[t] - r[t] } }
            X._set("global", { elements: {}, events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"], hover: { onHover: null, mode: "nearest", intersect: !0, animationDuration: 400 }, onClick: null, maintainAspectRatio: !0, responsive: !0, responsiveAnimationDuration: 0 }); var Ge = function(t, e) { return this.construct(t, e), this };
            I.extend(Ge.prototype, { construct: function(t, e) { var n = this;
                    e = function(t) { var e = (t = t || {}).data = t.data || {}; return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = He(X.global, X[t.type], t.options || {}), t }(e); var r = we.acquireContext(t, e),
                        o = r && r.canvas,
                        i = o && o.height,
                        a = o && o.width;
                    n.id = I.uid(), n.ctx = r, n.canvas = o, n.config = e, n.width = a, n.height = i, n.aspectRatio = i ? a / i : null, n.options = e.options, n._bufferedRender = !1, n._layers = [], n.chart = n, n.controller = n, Ge.instances[n.id] = n, Object.defineProperty(n, "data", { get: function() { return n.config.data }, set: function(t) { n.config.data = t } }), r && o && (n.initialize(), n.update()) }, initialize: function() { var t = this; return Te.notify(t, "beforeInit"), I.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.initToolTip(), Te.notify(t, "afterInit"), t }, clear: function() { return I.canvas.clear(this), this }, stop: function() { return J.cancelAnimation(this), this }, resize: function(t) { var e = this,
                        n = e.options,
                        r = e.canvas,
                        o = n.maintainAspectRatio && e.aspectRatio || null,
                        i = Math.max(0, Math.floor(I.getMaximumWidth(r))),
                        a = Math.max(0, Math.floor(o ? i / o : I.getMaximumHeight(r))); if ((e.width !== i || e.height !== a) && (r.width = e.width = i, r.height = e.height = a, r.style.width = i + "px", r.style.height = a + "px", I.retinaScale(e, n.devicePixelRatio), !t)) { var c = { width: i, height: a };
                        Te.notify(e, "resize", [c]), n.onResize && n.onResize(e, c), e.stop(), e.update({ duration: n.responsiveAnimationDuration }) } }, ensureScalesHaveIDs: function() { var t = this.options,
                        e = t.scales || {},
                        n = t.scale;
                    I.each(e.xAxes, (function(t, n) { t.id || (t.id = Ve(e.xAxes, "x-axis-", n)) })), I.each(e.yAxes, (function(t, n) { t.id || (t.id = Ve(e.yAxes, "y-axis-", n)) })), n && (n.id = n.id || "scale") }, buildOrUpdateScales: function() { var t = this,
                        e = t.options,
                        n = t.scales || {},
                        r = [],
                        o = Object.keys(n).reduce((function(t, e) { return t[e] = !1, t }), {});
                    e.scales && (r = r.concat((e.scales.xAxes || []).map((function(t) { return { options: t, dtype: "category", dposition: "bottom" } })), (e.scales.yAxes || []).map((function(t) { return { options: t, dtype: "linear", dposition: "left" } })))), e.scale && r.push({ options: e.scale, dtype: "radialLinear", isDefault: !0, dposition: "chartArea" }), I.each(r, (function(e) { var r = e.options,
                            i = r.id,
                            a = je(r.type, e.dtype);
                        $e(r.position) !== $e(e.dposition) && (r.position = e.dposition), o[i] = !0; var c = null; if (i in n && n[i].type === a)(c = n[i]).options = r, c.ctx = t.ctx, c.chart = t;
                        else { var s = qe.getScaleConstructor(a); if (!s) return;
                            c = new s({ id: i, type: a, options: r, ctx: t.ctx, chart: t }), n[c.id] = c }
                        c.mergeTicksOptions(), e.isDefault && (t.scale = c) })), I.each(o, (function(t, e) { t || delete n[e] })), t.scales = n, qe.addScalesToLayout(this) }, buildOrUpdateControllers: function() { var t, e, n = this,
                        r = [],
                        o = n.data.datasets; for (t = 0, e = o.length; t < e; t++) { var i = o[t],
                            a = n.getDatasetMeta(t),
                            c = i.type || n.config.type; if (a.type && a.type !== c && (n.destroyDatasetMeta(t), a = n.getDatasetMeta(t)), a.type = c, a.order = i.order || 0, a.index = t, a.controller) a.controller.updateIndex(t), a.controller.linkScales();
                        else { var s = Jt[a.type]; if (void 0 === s) throw new Error('"' + a.type + '" is not a chart type.');
                            a.controller = new s(n, t), r.push(a.controller) } } return r }, resetElements: function() { var t = this;
                    I.each(t.data.datasets, (function(e, n) { t.getDatasetMeta(n).controller.reset() }), t) }, reset: function() { this.resetElements(), this.tooltip.initialize() }, update: function(t) { var e, n, r = this; if (t && "object" == typeof t || (t = { duration: t, lazy: arguments[1] }), Ue(r), Te._invalidate(r), !1 !== Te.notify(r, "beforeUpdate")) { r.tooltip._data = r.data; var o = r.buildOrUpdateControllers(); for (e = 0, n = r.data.datasets.length; e < n; e++) r.getDatasetMeta(e).controller.buildOrUpdateElements();
                        r.updateLayout(), r.options.animation && r.options.animation.duration && I.each(o, (function(t) { t.reset() })), r.updateDatasets(), r.tooltip.initialize(), r.lastActive = [], Te.notify(r, "afterUpdate"), r._layers.sort(Ye("z", "_idx")), r._bufferedRender ? r._bufferedRequest = { duration: t.duration, easing: t.easing, lazy: t.lazy } : r.render(t) } }, updateLayout: function() { var t = this;!1 !== Te.notify(t, "beforeLayout") && (he.update(this, this.width, this.height), t._layers = [], I.each(t.boxes, (function(e) { e._configure && e._configure(), t._layers.push.apply(t._layers, e._layers()) }), t), t._layers.forEach((function(t, e) { t._idx = e })), Te.notify(t, "afterScaleUpdate"), Te.notify(t, "afterLayout")) }, updateDatasets: function() { if (!1 !== Te.notify(this, "beforeDatasetsUpdate")) { for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                        Te.notify(this, "afterDatasetsUpdate") } }, updateDataset: function(t) { var e = this.getDatasetMeta(t),
                        n = { meta: e, index: t };!1 !== Te.notify(this, "beforeDatasetUpdate", [n]) && (e.controller._update(), Te.notify(this, "afterDatasetUpdate", [n])) }, render: function(t) { var e = this;
                    t && "object" == typeof t || (t = { duration: t, lazy: arguments[1] }); var n = e.options.animation,
                        r = je(t.duration, n && n.duration),
                        o = t.lazy; if (!1 !== Te.notify(e, "beforeRender")) { var i = function(t) { Te.notify(e, "afterRender"), I.callback(n && n.onComplete, [t], e) }; if (n && r) { var a = new K({ numSteps: r / 16.66, easing: t.easing || n.easing, render: function(t, e) { var n = I.easing.effects[e.easing],
                                        r = e.currentStep,
                                        o = r / e.numSteps;
                                    t.draw(n(o), o, r) }, onAnimationProgress: n.onProgress, onAnimationComplete: i });
                            J.addAnimation(e, a, r, o) } else e.draw(), i(new K({ numSteps: 0, chart: e })); return e } }, draw: function(t) { var e, n, r = this; if (r.clear(), I.isNullOrUndef(t) && (t = 1), r.transition(t), !(r.width <= 0 || r.height <= 0) && !1 !== Te.notify(r, "beforeDraw", [t])) { for (n = r._layers, e = 0; e < n.length && n[e].z <= 0; ++e) n[e].draw(r.chartArea); for (r.drawDatasets(t); e < n.length; ++e) n[e].draw(r.chartArea);
                        r._drawTooltip(t), Te.notify(r, "afterDraw", [t]) } }, transition: function(t) { for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                    this.tooltip.transition(t) }, _getSortedDatasetMetas: function(t) { var e, n, r = []; for (e = 0, n = (this.data.datasets || []).length; e < n; ++e) t && !this.isDatasetVisible(e) || r.push(this.getDatasetMeta(e)); return r.sort(Ye("order", "index")), r }, _getSortedVisibleDatasetMetas: function() { return this._getSortedDatasetMetas(!0) }, drawDatasets: function(t) { var e, n; if (!1 !== Te.notify(this, "beforeDatasetsDraw", [t])) { for (n = (e = this._getSortedVisibleDatasetMetas()).length - 1; n >= 0; --n) this.drawDataset(e[n], t);
                        Te.notify(this, "afterDatasetsDraw", [t]) } }, drawDataset: function(t, e) { var n = { meta: t, index: t.index, easingValue: e };!1 !== Te.notify(this, "beforeDatasetDraw", [n]) && (t.controller.draw(e), Te.notify(this, "afterDatasetDraw", [n])) }, _drawTooltip: function(t) { var e = this.tooltip,
                        n = { tooltip: e, easingValue: t };!1 !== Te.notify(this, "beforeTooltipDraw", [n]) && (e.draw(), Te.notify(this, "afterTooltipDraw", [n])) }, getElementAtEvent: function(t) { return oe.modes.single(this, t) }, getElementsAtEvent: function(t) { return oe.modes.label(this, t, { intersect: !0 }) }, getElementsAtXAxis: function(t) { return oe.modes["x-axis"](this, t, { intersect: !0 }) }, getElementsAtEventForMode: function(t, e, n) { var r = oe.modes[e]; return "function" == typeof r ? r(this, t, n) : [] }, getDatasetAtEvent: function(t) { return oe.modes.dataset(this, t, { intersect: !0 }) }, getDatasetMeta: function(t) { var e = this.data.datasets[t];
                    e._meta || (e._meta = {}); var n = e._meta[this.id]; return n || (n = e._meta[this.id] = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null, order: e.order || 0, index: t }), n }, getVisibleDatasetCount: function() { for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) this.isDatasetVisible(e) && t++; return t }, isDatasetVisible: function(t) { var e = this.getDatasetMeta(t); return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden }, generateLegend: function() { return this.options.legendCallback(this) }, destroyDatasetMeta: function(t) { var e = this.id,
                        n = this.data.datasets[t],
                        r = n._meta && n._meta[e];
                    r && (r.controller.destroy(), delete n._meta[e]) }, destroy: function() { var t, e, n = this,
                        r = n.canvas; for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t) n.destroyDatasetMeta(t);
                    r && (n.unbindEvents(), I.canvas.clear(n), we.releaseContext(n.ctx), n.canvas = null, n.ctx = null), Te.notify(n, "destroy"), delete Ge.instances[n.id] }, toBase64Image: function() { return this.canvas.toDataURL.apply(this.canvas, arguments) }, initToolTip: function() { var t = this;
                    t.tooltip = new Ie({ _chart: t, _chartInstance: t, _data: t.data, _options: t.options.tooltips }, t) }, bindEvents: function() { var t = this,
                        e = t._listeners = {},
                        n = function() { t.eventHandler.apply(t, arguments) };
                    I.each(t.options.events, (function(r) { we.addEventListener(t, r, n), e[r] = n })), t.options.responsive && (n = function() { t.resize() }, we.addEventListener(t, "resize", n), e.resize = n) }, unbindEvents: function() { var t = this,
                        e = t._listeners;
                    e && (delete t._listeners, I.each(e, (function(e, n) { we.removeEventListener(t, n, e) }))) }, updateHoverStyle: function(t, e, n) { var r, o, i, a = n ? "set" : "remove"; for (o = 0, i = t.length; o < i; ++o)(r = t[o]) && this.getDatasetMeta(r._datasetIndex).controller[a + "HoverStyle"](r); "dataset" === e && this.getDatasetMeta(t[0]._datasetIndex).controller["_" + a + "DatasetHoverStyle"]() }, eventHandler: function(t) { var e = this,
                        n = e.tooltip; if (!1 !== Te.notify(e, "beforeEvent", [t])) { e._bufferedRender = !0, e._bufferedRequest = null; var r = e.handleEvent(t);
                        n && (r = n._start ? n.handleEvent(t) : r | n.handleEvent(t)), Te.notify(e, "afterEvent", [t]); var o = e._bufferedRequest; return o ? e.render(o) : r && !e.animating && (e.stop(), e.render({ duration: e.options.hover.animationDuration, lazy: !0 })), e._bufferedRender = !1, e._bufferedRequest = null, e } }, handleEvent: function(t) { var e, n = this,
                        r = n.options || {},
                        o = r.hover; return n.lastActive = n.lastActive || [], "mouseout" === t.type ? n.active = [] : n.active = n.getElementsAtEventForMode(t, o.mode, o), I.callback(r.onHover || r.hover.onHover, [t.native, n.active], n), "mouseup" !== t.type && "click" !== t.type || r.onClick && r.onClick.call(n, t.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, o.mode, !1), n.active.length && o.mode && n.updateHoverStyle(n.active, o.mode, !0), e = !I.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, e } }), Ge.instances = {}; var Ke = Ge;

            function Je() { throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.") }

            function Qe(t) { this.options = t || {} }
            Ge.Controller = Ge, Ge.types = {}, I.configMerge = He, I.scaleMerge = Fe, I.extend(Qe.prototype, { formats: Je, parse: Je, format: Je, add: Je, diff: Je, startOf: Je, endOf: Je, _create: function(t) { return t } }), Qe.override = function(t) { I.extend(Qe.prototype, t) }; var Ze = { _date: Qe },
                tn = { formatters: { values: function(t) { return I.isArray(t) ? t : "" + t }, linear: function(t, e, n) { var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                            Math.abs(r) > 1 && t !== Math.floor(t) && (r = t - Math.floor(t)); var o = I.log10(Math.abs(r)),
                                i = ""; if (0 !== t)
                                if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) { var a = I.log10(Math.abs(t)),
                                        c = Math.floor(a) - Math.floor(o);
                                    c = Math.max(Math.min(c, 20), 0), i = t.toExponential(c) } else { var s = -1 * Math.floor(o);
                                    s = Math.max(Math.min(s, 20), 0), i = t.toFixed(s) }
                            else i = "0"; return i }, logarithmic: function(t, e, n) { var r = t / Math.pow(10, Math.floor(I.log10(t))); return 0 === t ? "0" : 1 === r || 2 === r || 5 === r || 0 === e || e === n.length - 1 ? t.toExponential() : "" } } },
                en = I.isArray,
                nn = I.isNullOrUndef,
                rn = I.valueOrDefault,
                on = I.valueAtIndexOrDefault;

            function an(t, e, n) { var r, o = t.getTicks().length,
                    i = Math.min(e, o - 1),
                    a = t.getPixelForTick(i),
                    c = t._startPixel,
                    s = t._endPixel; if (!(n && (r = 1 === o ? Math.max(a - c, s - a) : 0 === e ? (t.getPixelForTick(1) - a) / 2 : (a - t.getPixelForTick(i - 1)) / 2, (a += i < e ? r : -r) < c - 1e-6 || a > s + 1e-6))) return a }

            function cn(t, e, n, r) { var o, i, a, c, s, l, u, f, d, p, h, M, b, m = n.length,
                    v = [],
                    g = [],
                    A = []; for (o = 0; o < m; ++o) { if (c = n[o].label, s = n[o].major ? e.major : e.minor, t.font = l = s.string, u = r[l] = r[l] || { data: {}, gc: [] }, f = s.lineHeight, d = p = 0, nn(c) || en(c)) { if (en(c))
                            for (i = 0, a = c.length; i < a; ++i) h = c[i], nn(h) || en(h) || (d = I.measureText(t, u.data, u.gc, d, h), p += f) } else d = I.measureText(t, u.data, u.gc, d, c), p = f;
                    v.push(d), g.push(p), A.push(f / 2) }

                function y(t) { return { width: v[t] || 0, height: g[t] || 0, offset: A[t] || 0 } } return function(t, e) { I.each(t, (function(t) { var n, r = t.gc,
                            o = r.length / 2; if (o > e) { for (n = 0; n < o; ++n) delete t.data[r[n]];
                            r.splice(0, o) } })) }(r, m), M = v.indexOf(Math.max.apply(null, v)), b = g.indexOf(Math.max.apply(null, g)), { first: y(0), last: y(m - 1), widest: y(M), highest: y(b) } }

            function sn(t) { return t.drawTicks ? t.tickMarkLength : 0 }

            function ln(t) { var e, n; return t.display ? (e = I.options._parseFont(t), n = I.options.toPadding(t.padding), e.lineHeight + n.height) : 0 }

            function un(t, e) { return I.extend(I.options._parseFont({ fontFamily: rn(e.fontFamily, t.fontFamily), fontSize: rn(e.fontSize, t.fontSize), fontStyle: rn(e.fontStyle, t.fontStyle), lineHeight: rn(e.lineHeight, t.lineHeight) }), { color: I.options.resolve([e.fontColor, t.fontColor, X.global.defaultFontColor]) }) }

            function fn(t) { var e = un(t, t.minor); return { minor: e, major: t.major.enabled ? un(t, t.major) : e } }

            function dn(t) { var e, n, r, o = []; for (n = 0, r = t.length; n < r; ++n) void 0 !== (e = t[n])._index && o.push(e); return o }

            function pn(t, e, n, r) { var o, i, a, c, s = rn(n, 0),
                    l = Math.min(rn(r, t.length), t.length),
                    u = 0; for (e = Math.ceil(e), r && (e = (o = r - n) / Math.floor(o / e)), c = s; c < 0;) u++, c = Math.round(s + u * e); for (i = Math.max(s, 0); i < l; i++) a = t[i], i === c ? (a._index = i, u++, c = Math.round(s + u * e)) : delete a.label }
            X._set("scale", { display: !0, position: "left", offset: !1, gridLines: { display: !0, color: "rgba(0,0,0,0.1)", lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickMarkLength: 10, zeroLineWidth: 1, zeroLineColor: "rgba(0,0,0,0.25)", zeroLineBorderDash: [], zeroLineBorderDashOffset: 0, offsetGridLines: !1, borderDash: [], borderDashOffset: 0 }, scaleLabel: { display: !1, labelString: "", padding: { top: 4, bottom: 4 } }, ticks: { beginAtZero: !1, minRotation: 0, maxRotation: 50, mirror: !1, padding: 0, reverse: !1, display: !0, autoSkip: !0, autoSkipPadding: 0, labelOffset: 0, callback: tn.formatters.values, minor: {}, major: {} } }); var hn = Y.extend({ zeroLineIndex: 0, getPadding: function() { return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 } }, getTicks: function() { return this._ticks }, _getLabels: function() { var t = this.chart.data; return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [] }, mergeTicksOptions: function() {}, beforeUpdate: function() { I.callback(this.options.beforeUpdate, [this]) }, update: function(t, e, n) { var r, o, i, a, c, s = this,
                        l = s.options.ticks,
                        u = l.sampleSize; if (s.beforeUpdate(), s.maxWidth = t, s.maxHeight = e, s.margins = I.extend({ left: 0, right: 0, top: 0, bottom: 0 }, n), s._ticks = null, s.ticks = null, s._labelSizes = null, s._maxLabelLines = 0, s.longestLabelWidth = 0, s.longestTextCache = s.longestTextCache || {}, s._gridLineItems = null, s._labelItems = null, s.beforeSetDimensions(), s.setDimensions(), s.afterSetDimensions(), s.beforeDataLimits(), s.determineDataLimits(), s.afterDataLimits(), s.beforeBuildTicks(), a = s.buildTicks() || [], (!(a = s.afterBuildTicks(a) || a) || !a.length) && s.ticks)
                        for (a = [], r = 0, o = s.ticks.length; r < o; ++r) a.push({ value: s.ticks[r], major: !1 }); return s._ticks = a, c = u < a.length, i = s._convertTicksToLabels(c ? function(t, e) { for (var n = [], r = t.length / e, o = 0, i = t.length; o < i; o += r) n.push(t[Math.floor(o)]); return n }(a, u) : a), s._configure(), s.beforeCalculateTickRotation(), s.calculateTickRotation(), s.afterCalculateTickRotation(), s.beforeFit(), s.fit(), s.afterFit(), s._ticksToDraw = l.display && (l.autoSkip || "auto" === l.source) ? s._autoSkip(a) : a, c && (i = s._convertTicksToLabels(s._ticksToDraw)), s.ticks = i, s.afterUpdate(), s.minSize }, _configure: function() { var t, e, n = this,
                        r = n.options.ticks.reverse;
                    n.isHorizontal() ? (t = n.left, e = n.right) : (t = n.top, e = n.bottom, r = !r), n._startPixel = t, n._endPixel = e, n._reversePixels = r, n._length = e - t }, afterUpdate: function() { I.callback(this.options.afterUpdate, [this]) }, beforeSetDimensions: function() { I.callback(this.options.beforeSetDimensions, [this]) }, setDimensions: function() { var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0 }, afterSetDimensions: function() { I.callback(this.options.afterSetDimensions, [this]) }, beforeDataLimits: function() { I.callback(this.options.beforeDataLimits, [this]) }, determineDataLimits: I.noop, afterDataLimits: function() { I.callback(this.options.afterDataLimits, [this]) }, beforeBuildTicks: function() { I.callback(this.options.beforeBuildTicks, [this]) }, buildTicks: I.noop, afterBuildTicks: function(t) { var e = this; return en(t) && t.length ? I.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = I.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t) }, beforeTickToLabelConversion: function() { I.callback(this.options.beforeTickToLabelConversion, [this]) }, convertTicksToLabels: function() { var t = this.options.ticks;
                    this.ticks = this.ticks.map(t.userCallback || t.callback, this) }, afterTickToLabelConversion: function() { I.callback(this.options.afterTickToLabelConversion, [this]) }, beforeCalculateTickRotation: function() { I.callback(this.options.beforeCalculateTickRotation, [this]) }, calculateTickRotation: function() { var t, e, n, r, o, i, a, c = this,
                        s = c.options,
                        l = s.ticks,
                        u = c.getTicks().length,
                        f = l.minRotation || 0,
                        d = l.maxRotation,
                        p = f;!c._isVisible() || !l.display || f >= d || u <= 1 || !c.isHorizontal() ? c.labelRotation = f : (e = (t = c._getLabelSizes()).widest.width, n = t.highest.height - t.highest.offset, r = Math.min(c.maxWidth, c.chart.width - e), e + 6 > (o = s.offset ? c.maxWidth / u : r / (u - 1)) && (o = r / (u - (s.offset ? .5 : 1)), i = c.maxHeight - sn(s.gridLines) - l.padding - ln(s.scaleLabel), a = Math.sqrt(e * e + n * n), p = I.toDegrees(Math.min(Math.asin(Math.min((t.highest.height + 6) / o, 1)), Math.asin(Math.min(i / a, 1)) - Math.asin(n / a))), p = Math.max(f, Math.min(d, p))), c.labelRotation = p) }, afterCalculateTickRotation: function() { I.callback(this.options.afterCalculateTickRotation, [this]) }, beforeFit: function() { I.callback(this.options.beforeFit, [this]) }, fit: function() { var t = this,
                        e = t.minSize = { width: 0, height: 0 },
                        n = t.chart,
                        r = t.options,
                        o = r.ticks,
                        i = r.scaleLabel,
                        a = r.gridLines,
                        c = t._isVisible(),
                        s = "bottom" === r.position,
                        l = t.isHorizontal(); if (l ? e.width = t.maxWidth : c && (e.width = sn(a) + ln(i)), l ? c && (e.height = sn(a) + ln(i)) : e.height = t.maxHeight, o.display && c) { var u = fn(o),
                            f = t._getLabelSizes(),
                            d = f.first,
                            p = f.last,
                            h = f.widest,
                            M = f.highest,
                            b = .4 * u.minor.lineHeight,
                            m = o.padding; if (l) { var v = 0 !== t.labelRotation,
                                g = I.toRadians(t.labelRotation),
                                A = Math.cos(g),
                                y = Math.sin(g),
                                z = y * h.width + A * (M.height - (v ? M.offset : 0)) + (v ? 0 : b);
                            e.height = Math.min(t.maxHeight, e.height + z + m); var _, O, x = t.getPixelForTick(0) - t.left,
                                L = t.right - t.getPixelForTick(t.getTicks().length - 1);
                            v ? (_ = s ? A * d.width + y * d.offset : y * (d.height - d.offset), O = s ? y * (p.height - p.offset) : A * p.width + y * p.offset) : (_ = d.width / 2, O = p.width / 2), t.paddingLeft = Math.max((_ - x) * t.width / (t.width - x), 0) + 3, t.paddingRight = Math.max((O - L) * t.width / (t.width - L), 0) + 3 } else { var N = o.mirror ? 0 : h.width + m + b;
                            e.width = Math.min(t.maxWidth, e.width + N), t.paddingTop = d.height / 2, t.paddingBottom = p.height / 2 } }
                    t.handleMargins(), l ? (t.width = t._length = n.width - t.margins.left - t.margins.right, t.height = e.height) : (t.width = e.width, t.height = t._length = n.height - t.margins.top - t.margins.bottom) }, handleMargins: function() { var t = this;
                    t.margins && (t.margins.left = Math.max(t.paddingLeft, t.margins.left), t.margins.top = Math.max(t.paddingTop, t.margins.top), t.margins.right = Math.max(t.paddingRight, t.margins.right), t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom)) }, afterFit: function() { I.callback(this.options.afterFit, [this]) }, isHorizontal: function() { var t = this.options.position; return "top" === t || "bottom" === t }, isFullWidth: function() { return this.options.fullWidth }, getRightValue: function(t) { if (nn(t)) return NaN; if (("number" == typeof t || t instanceof Number) && !isFinite(t)) return NaN; if (t)
                        if (this.isHorizontal()) { if (void 0 !== t.x) return this.getRightValue(t.x) } else if (void 0 !== t.y) return this.getRightValue(t.y); return t }, _convertTicksToLabels: function(t) { var e, n, r, o = this; for (o.ticks = t.map((function(t) { return t.value })), o.beforeTickToLabelConversion(), e = o.convertTicksToLabels(t) || o.ticks, o.afterTickToLabelConversion(), n = 0, r = t.length; n < r; ++n) t[n].label = e[n]; return e }, _getLabelSizes: function() { var t = this,
                        e = t._labelSizes; return e || (t._labelSizes = e = cn(t.ctx, fn(t.options.ticks), t.getTicks(), t.longestTextCache), t.longestLabelWidth = e.widest.width), e }, _parseValue: function(t) { var e, n, r, o; return en(t) ? (e = +this.getRightValue(t[0]), n = +this.getRightValue(t[1]), r = Math.min(e, n), o = Math.max(e, n)) : (e = void 0, n = t = +this.getRightValue(t), r = t, o = t), { min: r, max: o, start: e, end: n } }, _getScaleLabel: function(t) { var e = this._parseValue(t); return void 0 !== e.start ? "[" + e.start + ", " + e.end + "]" : +this.getRightValue(t) }, getLabelForIndex: I.noop, getPixelForValue: I.noop, getValueForPixel: I.noop, getPixelForTick: function(t) { var e = this.options.offset,
                        n = this._ticks.length,
                        r = 1 / Math.max(n - (e ? 0 : 1), 1); return t < 0 || t > n - 1 ? null : this.getPixelForDecimal(t * r + (e ? r / 2 : 0)) }, getPixelForDecimal: function(t) { return this._reversePixels && (t = 1 - t), this._startPixel + t * this._length }, getDecimalForPixel: function(t) { var e = (t - this._startPixel) / this._length; return this._reversePixels ? 1 - e : e }, getBasePixel: function() { return this.getPixelForValue(this.getBaseValue()) }, getBaseValue: function() { var t = this.min,
                        e = this.max; return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0 }, _autoSkip: function(t) { var e, n, r, o, i = this.options.ticks,
                        a = this._length,
                        c = i.maxTicksLimit || a / this._tickSize() + 1,
                        s = i.major.enabled ? function(t) { var e, n, r = []; for (e = 0, n = t.length; e < n; e++) t[e].major && r.push(e); return r }(t) : [],
                        l = s.length,
                        u = s[0],
                        f = s[l - 1]; if (l > c) return function(t, e, n) { var r, o, i = 0,
                            a = e[0]; for (n = Math.ceil(n), r = 0; r < t.length; r++) o = t[r], r === a ? (o._index = r, a = e[++i * n]) : delete o.label }(t, s, l / c), dn(t); if (r = function(t, e, n, r) { var o, i, a, c, s = function(t) { var e, n, r = t.length; if (r < 2) return !1; for (n = t[0], e = 1; e < r; ++e)
                                        if (t[e] - t[e - 1] !== n) return !1;
                                    return n }(t),
                                l = (e.length - 1) / r; if (!s) return Math.max(l, 1); for (a = 0, c = (o = I.math._factorize(s)).length - 1; a < c; a++)
                                if ((i = o[a]) > l) return i;
                            return Math.max(l, 1) }(s, t, 0, c), l > 0) { for (e = 0, n = l - 1; e < n; e++) pn(t, r, s[e], s[e + 1]); return o = l > 1 ? (f - u) / (l - 1) : null, pn(t, r, I.isNullOrUndef(o) ? 0 : u - o, u), pn(t, r, f, I.isNullOrUndef(o) ? t.length : f + o), dn(t) } return pn(t, r), dn(t) }, _tickSize: function() { var t = this.options.ticks,
                        e = I.toRadians(this.labelRotation),
                        n = Math.abs(Math.cos(e)),
                        r = Math.abs(Math.sin(e)),
                        o = this._getLabelSizes(),
                        i = t.autoSkipPadding || 0,
                        a = o ? o.widest.width + i : 0,
                        c = o ? o.highest.height + i : 0; return this.isHorizontal() ? c * n > a * r ? a / n : c / r : c * r < a * n ? c / n : a / r }, _isVisible: function() { var t, e, n, r = this.chart,
                        o = this.options.display; if ("auto" !== o) return !!o; for (t = 0, e = r.data.datasets.length; t < e; ++t)
                        if (r.isDatasetVisible(t) && ((n = r.getDatasetMeta(t)).xAxisID === this.id || n.yAxisID === this.id)) return !0;
                    return !1 }, _computeGridLineItems: function(t) { var e, n, r, o, i, a, c, s, l, u, f, d, p, h, M, b, m, v = this,
                        g = v.chart,
                        A = v.options,
                        y = A.gridLines,
                        z = A.position,
                        _ = y.offsetGridLines,
                        O = v.isHorizontal(),
                        x = v._ticksToDraw,
                        L = x.length + (_ ? 1 : 0),
                        N = sn(y),
                        w = [],
                        T = y.drawBorder ? on(y.lineWidth, 0, 0) : 0,
                        q = T / 2,
                        C = I._alignPixel,
                        W = function(t) { return C(g, t, T) }; for ("top" === z ? (e = W(v.bottom), c = v.bottom - N, l = e - q, f = W(t.top) + q, p = t.bottom) : "bottom" === z ? (e = W(v.top), f = t.top, p = W(t.bottom) - q, c = e + q, l = v.top + N) : "left" === z ? (e = W(v.right), a = v.right - N, s = e - q, u = W(t.left) + q, d = t.right) : (e = W(v.left), u = t.left, d = W(t.right) - q, a = e + q, s = v.left + N), n = 0; n < L; ++n) r = x[n] || {}, nn(r.label) && n < x.length || (n === v.zeroLineIndex && A.offset === _ ? (h = y.zeroLineWidth, M = y.zeroLineColor, b = y.zeroLineBorderDash || [], m = y.zeroLineBorderDashOffset || 0) : (h = on(y.lineWidth, n, 1), M = on(y.color, n, "rgba(0,0,0,0.1)"), b = y.borderDash || [], m = y.borderDashOffset || 0), void 0 !== (o = an(v, r._index || n, _)) && (i = C(g, o, h), O ? a = s = u = d = i : c = l = f = p = i, w.push({ tx1: a, ty1: c, tx2: s, ty2: l, x1: u, y1: f, x2: d, y2: p, width: h, color: M, borderDash: b, borderDashOffset: m }))); return w.ticksLength = L, w.borderValue = e, w }, _computeLabelItems: function() { var t, e, n, r, o, i, a, c, s, l, u, f, d = this,
                        p = d.options,
                        h = p.ticks,
                        M = p.position,
                        b = h.mirror,
                        m = d.isHorizontal(),
                        v = d._ticksToDraw,
                        g = fn(h),
                        A = h.padding,
                        y = sn(p.gridLines),
                        z = -I.toRadians(d.labelRotation),
                        _ = []; for ("top" === M ? (i = d.bottom - y - A, a = z ? "left" : "center") : "bottom" === M ? (i = d.top + y + A, a = z ? "right" : "center") : "left" === M ? (o = d.right - (b ? 0 : y) - A, a = b ? "left" : "right") : (o = d.left + (b ? 0 : y) + A, a = b ? "right" : "left"), t = 0, e = v.length; t < e; ++t) r = (n = v[t]).label, nn(r) || (c = d.getPixelForTick(n._index || t) + h.labelOffset, l = (s = n.major ? g.major : g.minor).lineHeight, u = en(r) ? r.length : 1, m ? (o = c, f = "top" === M ? ((z ? 1 : .5) - u) * l : (z ? 0 : .5) * l) : (i = c, f = (1 - u) * l / 2), _.push({ x: o, y: i, rotation: z, label: r, font: s, textOffset: f, textAlign: a })); return _ }, _drawGrid: function(t) { var e = this,
                        n = e.options.gridLines; if (n.display) { var r, o, i, a, c, s = e.ctx,
                            l = e.chart,
                            u = I._alignPixel,
                            f = n.drawBorder ? on(n.lineWidth, 0, 0) : 0,
                            d = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t)); for (i = 0, a = d.length; i < a; ++i) r = (c = d[i]).width, o = c.color, r && o && (s.save(), s.lineWidth = r, s.strokeStyle = o, s.setLineDash && (s.setLineDash(c.borderDash), s.lineDashOffset = c.borderDashOffset), s.beginPath(), n.drawTicks && (s.moveTo(c.tx1, c.ty1), s.lineTo(c.tx2, c.ty2)), n.drawOnChartArea && (s.moveTo(c.x1, c.y1), s.lineTo(c.x2, c.y2)), s.stroke(), s.restore()); if (f) { var p, h, M, b, m = f,
                                v = on(n.lineWidth, d.ticksLength - 1, 1),
                                g = d.borderValue;
                            e.isHorizontal() ? (p = u(l, e.left, m) - m / 2, h = u(l, e.right, v) + v / 2, M = b = g) : (M = u(l, e.top, m) - m / 2, b = u(l, e.bottom, v) + v / 2, p = h = g), s.lineWidth = f, s.strokeStyle = on(n.color, 0), s.beginPath(), s.moveTo(p, M), s.lineTo(h, b), s.stroke() } } }, _drawLabels: function() { var t = this; if (t.options.ticks.display) { var e, n, r, o, i, a, c, s, l = t.ctx,
                            u = t._labelItems || (t._labelItems = t._computeLabelItems()); for (e = 0, r = u.length; e < r; ++e) { if (a = (i = u[e]).font, l.save(), l.translate(i.x, i.y), l.rotate(i.rotation), l.font = a.string, l.fillStyle = a.color, l.textBaseline = "middle", l.textAlign = i.textAlign, c = i.label, s = i.textOffset, en(c))
                                for (n = 0, o = c.length; n < o; ++n) l.fillText("" + c[n], 0, s), s += a.lineHeight;
                            else l.fillText(c, 0, s);
                            l.restore() } } }, _drawTitle: function() { var t = this,
                        e = t.ctx,
                        n = t.options,
                        r = n.scaleLabel; if (r.display) { var o, i, a = rn(r.fontColor, X.global.defaultFontColor),
                            c = I.options._parseFont(r),
                            s = I.options.toPadding(r.padding),
                            l = c.lineHeight / 2,
                            u = n.position,
                            f = 0; if (t.isHorizontal()) o = t.left + t.width / 2, i = "bottom" === u ? t.bottom - l - s.bottom : t.top + l + s.top;
                        else { var d = "left" === u;
                            o = d ? t.left + l + s.top : t.right - l - s.top, i = t.top + t.height / 2, f = d ? -.5 * Math.PI : .5 * Math.PI }
                        e.save(), e.translate(o, i), e.rotate(f), e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = a, e.font = c.string, e.fillText(r.labelString, 0, 0), e.restore() } }, draw: function(t) { this._isVisible() && (this._drawGrid(t), this._drawTitle(), this._drawLabels()) }, _layers: function() { var t = this,
                        e = t.options,
                        n = e.ticks && e.ticks.z || 0,
                        r = e.gridLines && e.gridLines.z || 0; return t._isVisible() && n !== r && t.draw === t._draw ? [{ z: r, draw: function() { t._drawGrid.apply(t, arguments), t._drawTitle.apply(t, arguments) } }, { z: n, draw: function() { t._drawLabels.apply(t, arguments) } }] : [{ z: n, draw: function() { t.draw.apply(t, arguments) } }] }, _getMatchingVisibleMetas: function(t) { var e = this,
                        n = e.isHorizontal(); return e.chart._getSortedVisibleDatasetMetas().filter((function(r) { return (!t || r.type === t) && (n ? r.xAxisID === e.id : r.yAxisID === e.id) })) } });
            hn.prototype._draw = hn.prototype.draw; var Mn = hn,
                bn = I.isNullOrUndef,
                mn = Mn.extend({ determineDataLimits: function() { var t, e = this,
                            n = e._getLabels(),
                            r = e.options.ticks,
                            o = r.min,
                            i = r.max,
                            a = 0,
                            c = n.length - 1;
                        void 0 !== o && (t = n.indexOf(o)) >= 0 && (a = t), void 0 !== i && (t = n.indexOf(i)) >= 0 && (c = t), e.minIndex = a, e.maxIndex = c, e.min = n[a], e.max = n[c] }, buildTicks: function() { var t = this._getLabels(),
                            e = this.minIndex,
                            n = this.maxIndex;
                        this.ticks = 0 === e && n === t.length - 1 ? t : t.slice(e, n + 1) }, getLabelForIndex: function(t, e) { var n = this.chart; return n.getDatasetMeta(e).controller._getValueScaleId() === this.id ? this.getRightValue(n.data.datasets[e].data[t]) : this._getLabels()[t] }, _configure: function() { var t = this,
                            e = t.options.offset,
                            n = t.ticks;
                        Mn.prototype._configure.call(t), t.isHorizontal() || (t._reversePixels = !t._reversePixels), n && (t._startValue = t.minIndex - (e ? .5 : 0), t._valueRange = Math.max(n.length - (e ? 0 : 1), 1)) }, getPixelForValue: function(t, e, n) { var r, o, i, a = this; return bn(e) || bn(n) || (t = a.chart.data.datasets[n].data[e]), bn(t) || (r = a.isHorizontal() ? t.x : t.y), (void 0 !== r || void 0 !== t && isNaN(e)) && (o = a._getLabels(), t = I.valueOrDefault(r, t), e = -1 !== (i = o.indexOf(t)) ? i : e, isNaN(e) && (e = t)), a.getPixelForDecimal((e - a._startValue) / a._valueRange) }, getPixelForTick: function(t) { var e = this.ticks; return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t], t + this.minIndex) }, getValueForPixel: function(t) { var e = Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange); return Math.min(Math.max(e, 0), this.ticks.length - 1) }, getBasePixel: function() { return this.bottom } }),
                vn = { position: "bottom" };
            mn._defaults = vn; var gn = I.noop,
                An = I.isNullOrUndef,
                yn = Mn.extend({ getRightValue: function(t) { return "string" == typeof t ? +t : Mn.prototype.getRightValue.call(this, t) }, handleTickRangeOptions: function() { var t = this,
                            e = t.options.ticks; if (e.beginAtZero) { var n = I.sign(t.min),
                                r = I.sign(t.max);
                            n < 0 && r < 0 ? t.max = 0 : n > 0 && r > 0 && (t.min = 0) } var o = void 0 !== e.min || void 0 !== e.suggestedMin,
                            i = void 0 !== e.max || void 0 !== e.suggestedMax;
                        void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), o !== i && t.min >= t.max && (o ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--) }, getTickLimit: function() { var t, e = this.options.ticks,
                            n = e.stepSize,
                            r = e.maxTicksLimit; return n ? t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1 : (t = this._computeTickLimit(), r = r || 11), r && (t = Math.min(r, t)), t }, _computeTickLimit: function() { return Number.POSITIVE_INFINITY }, handleDirectionalChanges: gn, buildTicks: function() { var t = this,
                            e = t.options.ticks,
                            n = t.getTickLimit(),
                            r = { maxTicks: n = Math.max(2, n), min: e.min, max: e.max, precision: e.precision, stepSize: I.valueOrDefault(e.fixedStepSize, e.stepSize) },
                            o = t.ticks = function(t, e) { var n, r, o, i, a = [],
                                    c = t.stepSize,
                                    s = c || 1,
                                    l = t.maxTicks - 1,
                                    u = t.min,
                                    f = t.max,
                                    d = t.precision,
                                    p = e.min,
                                    h = e.max,
                                    M = I.niceNum((h - p) / l / s) * s; if (M < 1e-14 && An(u) && An(f)) return [p, h];
                                (i = Math.ceil(h / M) - Math.floor(p / M)) > l && (M = I.niceNum(i * M / l / s) * s), c || An(d) ? n = Math.pow(10, I._decimalPlaces(M)) : (n = Math.pow(10, d), M = Math.ceil(M * n) / n), r = Math.floor(p / M) * M, o = Math.ceil(h / M) * M, c && (!An(u) && I.almostWhole(u / M, M / 1e3) && (r = u), !An(f) && I.almostWhole(f / M, M / 1e3) && (o = f)), i = (o - r) / M, i = I.almostEquals(i, Math.round(i), M / 1e3) ? Math.round(i) : Math.ceil(i), r = Math.round(r * n) / n, o = Math.round(o * n) / n, a.push(An(u) ? r : u); for (var b = 1; b < i; ++b) a.push(Math.round((r + b * M) * n) / n); return a.push(An(f) ? o : f), a }(r, t);
                        t.handleDirectionalChanges(), t.max = I.max(o), t.min = I.min(o), e.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max) }, convertTicksToLabels: function() { var t = this;
                        t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), Mn.prototype.convertTicksToLabels.call(t) }, _configure: function() { var t, e = this,
                            n = e.getTicks(),
                            r = e.min,
                            o = e.max;
                        Mn.prototype._configure.call(e), e.options.offset && n.length && (r -= t = (o - r) / Math.max(n.length - 1, 1) / 2, o += t), e._startValue = r, e._endValue = o, e._valueRange = o - r } }),
                zn = { position: "left", ticks: { callback: tn.formatters.linear } };

            function _n(t, e, n, r) { var o, i, a = t.options,
                    c = function(t, e, n) { var r = [n.type, void 0 === e && void 0 === n.stack ? n.index : "", n.stack].join("."); return void 0 === t[r] && (t[r] = { pos: [], neg: [] }), t[r] }(e, a.stacked, n),
                    s = c.pos,
                    l = c.neg,
                    u = r.length; for (o = 0; o < u; ++o) i = t._parseValue(r[o]), isNaN(i.min) || isNaN(i.max) || n.data[o].hidden || (s[o] = s[o] || 0, l[o] = l[o] || 0, a.relativePoints ? s[o] = 100 : i.min < 0 || i.max < 0 ? l[o] += i.min : s[o] += i.max) }

            function On(t, e, n) { var r, o, i = n.length; for (r = 0; r < i; ++r) o = t._parseValue(n[r]), isNaN(o.min) || isNaN(o.max) || e.data[r].hidden || (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max)) } var xn = yn.extend({ determineDataLimits: function() { var t, e, n, r, o = this,
                            i = o.options,
                            a = o.chart.data.datasets,
                            c = o._getMatchingVisibleMetas(),
                            s = i.stacked,
                            l = {},
                            u = c.length; if (o.min = Number.POSITIVE_INFINITY, o.max = Number.NEGATIVE_INFINITY, void 0 === s)
                            for (t = 0; !s && t < u; ++t) s = void 0 !== (e = c[t]).stack; for (t = 0; t < u; ++t) n = a[(e = c[t]).index].data, s ? _n(o, l, e, n) : On(o, e, n);
                        I.each(l, (function(t) { r = t.pos.concat(t.neg), o.min = Math.min(o.min, I.min(r)), o.max = Math.max(o.max, I.max(r)) })), o.min = I.isFinite(o.min) && !isNaN(o.min) ? o.min : 0, o.max = I.isFinite(o.max) && !isNaN(o.max) ? o.max : 1, o.handleTickRangeOptions() }, _computeTickLimit: function() { var t; return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = I.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight)) }, handleDirectionalChanges: function() { this.isHorizontal() || this.ticks.reverse() }, getLabelForIndex: function(t, e) { return this._getScaleLabel(this.chart.data.datasets[e].data[t]) }, getPixelForValue: function(t) { return this.getPixelForDecimal((+this.getRightValue(t) - this._startValue) / this._valueRange) }, getValueForPixel: function(t) { return this._startValue + this.getDecimalForPixel(t) * this._valueRange }, getPixelForTick: function(t) { var e = this.ticksAsNumbers; return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t]) } }),
                Ln = zn;
            xn._defaults = Ln; var Nn = I.valueOrDefault,
                wn = I.math.log10,
                Tn = { position: "left", ticks: { callback: tn.formatters.logarithmic } };

            function qn(t, e) { return I.isFinite(t) && t >= 0 ? t : e } var Cn = Mn.extend({ determineDataLimits: function() { var t, e, n, r, o, i, a = this,
                            c = a.options,
                            s = a.chart,
                            l = s.data.datasets,
                            u = a.isHorizontal();

                        function f(t) { return u ? t.xAxisID === a.id : t.yAxisID === a.id }
                        a.min = Number.POSITIVE_INFINITY, a.max = Number.NEGATIVE_INFINITY, a.minNotZero = Number.POSITIVE_INFINITY; var d = c.stacked; if (void 0 === d)
                            for (t = 0; t < l.length; t++)
                                if (e = s.getDatasetMeta(t), s.isDatasetVisible(t) && f(e) && void 0 !== e.stack) { d = !0; break }
                        if (c.stacked || d) { var p = {}; for (t = 0; t < l.length; t++) { var h = [(e = s.getDatasetMeta(t)).type, void 0 === c.stacked && void 0 === e.stack ? t : "", e.stack].join("."); if (s.isDatasetVisible(t) && f(e))
                                    for (void 0 === p[h] && (p[h] = []), o = 0, i = (r = l[t].data).length; o < i; o++) { var M = p[h];
                                        n = a._parseValue(r[o]), isNaN(n.min) || isNaN(n.max) || e.data[o].hidden || n.min < 0 || n.max < 0 || (M[o] = M[o] || 0, M[o] += n.max) } }
                            I.each(p, (function(t) { if (t.length > 0) { var e = I.min(t),
                                        n = I.max(t);
                                    a.min = Math.min(a.min, e), a.max = Math.max(a.max, n) } })) } else
                            for (t = 0; t < l.length; t++)
                                if (e = s.getDatasetMeta(t), s.isDatasetVisible(t) && f(e))
                                    for (o = 0, i = (r = l[t].data).length; o < i; o++) n = a._parseValue(r[o]), isNaN(n.min) || isNaN(n.max) || e.data[o].hidden || n.min < 0 || n.max < 0 || (a.min = Math.min(n.min, a.min), a.max = Math.max(n.max, a.max), 0 !== n.min && (a.minNotZero = Math.min(n.min, a.minNotZero)));
                        a.min = I.isFinite(a.min) ? a.min : null, a.max = I.isFinite(a.max) ? a.max : null, a.minNotZero = I.isFinite(a.minNotZero) ? a.minNotZero : null, this.handleTickRangeOptions() }, handleTickRangeOptions: function() { var t = this,
                            e = t.options.ticks;
                        t.min = qn(e.min, t.min), t.max = qn(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(wn(t.min)) - 1), t.max = Math.pow(10, Math.floor(wn(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(wn(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(wn(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(wn(t.max))) : t.minNotZero = 1) }, buildTicks: function() { var t = this,
                            e = t.options.ticks,
                            n = !t.isHorizontal(),
                            r = { min: qn(e.min), max: qn(e.max) },
                            o = t.ticks = function(t, e) { var n, r, o = [],
                                    i = Nn(t.min, Math.pow(10, Math.floor(wn(e.min)))),
                                    a = Math.floor(wn(e.max)),
                                    c = Math.ceil(e.max / Math.pow(10, a));
                                0 === i ? (n = Math.floor(wn(e.minNotZero)), r = Math.floor(e.minNotZero / Math.pow(10, n)), o.push(i), i = r * Math.pow(10, n)) : (n = Math.floor(wn(i)), r = Math.floor(i / Math.pow(10, n))); var s = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                                do { o.push(i), 10 == ++r && (r = 1, s = ++n >= 0 ? 1 : s), i = Math.round(r * Math.pow(10, n) * s) / s } while (n < a || n === a && r < c); var l = Nn(t.max, i); return o.push(l), o }(r, t);
                        t.max = I.max(o), t.min = I.min(o), e.reverse ? (n = !n, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), n && o.reverse() }, convertTicksToLabels: function() { this.tickValues = this.ticks.slice(), Mn.prototype.convertTicksToLabels.call(this) }, getLabelForIndex: function(t, e) { return this._getScaleLabel(this.chart.data.datasets[e].data[t]) }, getPixelForTick: function(t) { var e = this.tickValues; return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t]) }, _getFirstTickValue: function(t) { var e = Math.floor(wn(t)); return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e) }, _configure: function() { var t = this,
                            e = t.min,
                            n = 0;
                        Mn.prototype._configure.call(t), 0 === e && (e = t._getFirstTickValue(t.minNotZero), n = Nn(t.options.ticks.fontSize, X.global.defaultFontSize) / t._length), t._startValue = wn(e), t._valueOffset = n, t._valueRange = (wn(t.max) - wn(e)) / (1 - n) }, getPixelForValue: function(t) { var e = this,
                            n = 0; return (t = +e.getRightValue(t)) > e.min && t > 0 && (n = (wn(t) - e._startValue) / e._valueRange + e._valueOffset), e.getPixelForDecimal(n) }, getValueForPixel: function(t) { var e = this,
                            n = e.getDecimalForPixel(t); return 0 === n && 0 === e.min ? 0 : Math.pow(10, e._startValue + (n - e._valueOffset) * e._valueRange) } }),
                Wn = Tn;
            Cn._defaults = Wn; var Sn = I.valueOrDefault,
                kn = I.valueAtIndexOrDefault,
                Bn = I.options.resolve,
                Xn = { display: !0, animate: !0, position: "chartArea", angleLines: { display: !0, color: "rgba(0,0,0,0.1)", lineWidth: 1, borderDash: [], borderDashOffset: 0 }, gridLines: { circular: !1 }, ticks: { showLabelBackdrop: !0, backdropColor: "rgba(255,255,255,0.75)", backdropPaddingY: 2, backdropPaddingX: 2, callback: tn.formatters.linear }, pointLabels: { display: !0, fontSize: 10, callback: function(t) { return t } } };

            function En(t) { var e = t.ticks; return e.display && t.display ? Sn(e.fontSize, X.global.defaultFontSize) + 2 * e.backdropPaddingY : 0 }

            function Dn(t, e, n, r, o) { return t === r || t === o ? { start: e - n / 2, end: e + n / 2 } : t < r || t > o ? { start: e - n, end: e } : { start: e, end: e + n } }

            function Rn(t) { return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right" }

            function Pn(t, e, n, r) { var o, i, a = n.y + r / 2; if (I.isArray(e))
                    for (o = 0, i = e.length; o < i; ++o) t.fillText(e[o], n.x, a), a += r;
                else t.fillText(e, n.x, a) }

            function In(t, e, n) { 90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h) }

            function jn(t) { return I.isNumber(t) ? t : 0 } var Fn = yn.extend({ setDimensions: function() { var t = this;
                        t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = En(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2 }, determineDataLimits: function() { var t = this,
                            e = t.chart,
                            n = Number.POSITIVE_INFINITY,
                            r = Number.NEGATIVE_INFINITY;
                        I.each(e.data.datasets, (function(o, i) { if (e.isDatasetVisible(i)) { var a = e.getDatasetMeta(i);
                                I.each(o.data, (function(e, o) { var i = +t.getRightValue(e);
                                    isNaN(i) || a.data[o].hidden || (n = Math.min(i, n), r = Math.max(i, r)) })) } })), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = r === Number.NEGATIVE_INFINITY ? 0 : r, t.handleTickRangeOptions() }, _computeTickLimit: function() { return Math.ceil(this.drawingArea / En(this.options)) }, convertTicksToLabels: function() { var t = this;
                        yn.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map((function() { var e = I.callback(t.options.pointLabels.callback, arguments, t); return e || 0 === e ? e : "" })) }, getLabelForIndex: function(t, e) { return +this.getRightValue(this.chart.data.datasets[e].data[t]) }, fit: function() { var t = this.options;
                        t.display && t.pointLabels.display ? function(t) { var e, n, r, o = I.options._parseFont(t.options.pointLabels),
                                i = { l: 0, r: t.width, t: 0, b: t.height - t.paddingTop },
                                a = {};
                            t.ctx.font = o.string, t._pointLabelSizes = []; var c, s, l, u = t.chart.data.labels.length; for (e = 0; e < u; e++) { r = t.getPointPosition(e, t.drawingArea + 5), c = t.ctx, s = o.lineHeight, l = t.pointLabels[e], n = I.isArray(l) ? { w: I.longestText(c, c.font, l), h: l.length * s } : { w: c.measureText(l).width, h: s }, t._pointLabelSizes[e] = n; var f = t.getIndexAngle(e),
                                    d = I.toDegrees(f) % 360,
                                    p = Dn(d, r.x, n.w, 0, 180),
                                    h = Dn(d, r.y, n.h, 90, 270);
                                p.start < i.l && (i.l = p.start, a.l = f), p.end > i.r && (i.r = p.end, a.r = f), h.start < i.t && (i.t = h.start, a.t = f), h.end > i.b && (i.b = h.end, a.b = f) }
                            t.setReductions(t.drawingArea, i, a) }(this) : this.setCenterPoint(0, 0, 0, 0) }, setReductions: function(t, e, n) { var r = this,
                            o = e.l / Math.sin(n.l),
                            i = Math.max(e.r - r.width, 0) / Math.sin(n.r),
                            a = -e.t / Math.cos(n.t),
                            c = -Math.max(e.b - (r.height - r.paddingTop), 0) / Math.cos(n.b);
                        o = jn(o), i = jn(i), a = jn(a), c = jn(c), r.drawingArea = Math.min(Math.floor(t - (o + i) / 2), Math.floor(t - (a + c) / 2)), r.setCenterPoint(o, i, a, c) }, setCenterPoint: function(t, e, n, r) { var o = this,
                            i = o.width - e - o.drawingArea,
                            a = t + o.drawingArea,
                            c = n + o.drawingArea,
                            s = o.height - o.paddingTop - r - o.drawingArea;
                        o.xCenter = Math.floor((a + i) / 2 + o.left), o.yCenter = Math.floor((c + s) / 2 + o.top + o.paddingTop) }, getIndexAngle: function(t) { var e = this.chart,
                            n = (t * (360 / e.data.labels.length) + ((e.options || {}).startAngle || 0)) % 360; return (n < 0 ? n + 360 : n) * Math.PI * 2 / 360 }, getDistanceFromCenterForValue: function(t) { var e = this; if (I.isNullOrUndef(t)) return NaN; var n = e.drawingArea / (e.max - e.min); return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n }, getPointPosition: function(t, e) { var n = this.getIndexAngle(t) - Math.PI / 2; return { x: Math.cos(n) * e + this.xCenter, y: Math.sin(n) * e + this.yCenter } }, getPointPositionForValue: function(t, e) { return this.getPointPosition(t, this.getDistanceFromCenterForValue(e)) }, getBasePosition: function(t) { var e = this.min,
                            n = this.max; return this.getPointPositionForValue(t || 0, this.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0) }, _drawGrid: function() { var t, e, n, r = this,
                            o = r.ctx,
                            i = r.options,
                            a = i.gridLines,
                            c = i.angleLines,
                            s = Sn(c.lineWidth, a.lineWidth),
                            l = Sn(c.color, a.color); if (i.pointLabels.display && function(t) { var e = t.ctx,
                                    n = t.options,
                                    r = n.pointLabels,
                                    o = En(n),
                                    i = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
                                    a = I.options._parseFont(r);
                                e.save(), e.font = a.string, e.textBaseline = "middle"; for (var c = t.chart.data.labels.length - 1; c >= 0; c--) { var s = 0 === c ? o / 2 : 0,
                                        l = t.getPointPosition(c, i + s + 5),
                                        u = kn(r.fontColor, c, X.global.defaultFontColor);
                                    e.fillStyle = u; var f = t.getIndexAngle(c),
                                        d = I.toDegrees(f);
                                    e.textAlign = Rn(d), In(d, t._pointLabelSizes[c], l), Pn(e, t.pointLabels[c], l, a.lineHeight) }
                                e.restore() }(r), a.display && I.each(r.ticks, (function(t, n) { 0 !== n && (e = r.getDistanceFromCenterForValue(r.ticksAsNumbers[n]), function(t, e, n, r) { var o, i = t.ctx,
                                        a = e.circular,
                                        c = t.chart.data.labels.length,
                                        s = kn(e.color, r - 1),
                                        l = kn(e.lineWidth, r - 1); if ((a || c) && s && l) { if (i.save(), i.strokeStyle = s, i.lineWidth = l, i.setLineDash && (i.setLineDash(e.borderDash || []), i.lineDashOffset = e.borderDashOffset || 0), i.beginPath(), a) i.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);
                                        else { o = t.getPointPosition(0, n), i.moveTo(o.x, o.y); for (var u = 1; u < c; u++) o = t.getPointPosition(u, n), i.lineTo(o.x, o.y) }
                                        i.closePath(), i.stroke(), i.restore() } }(r, a, e, n)) })), c.display && s && l) { for (o.save(), o.lineWidth = s, o.strokeStyle = l, o.setLineDash && (o.setLineDash(Bn([c.borderDash, a.borderDash, []])), o.lineDashOffset = Bn([c.borderDashOffset, a.borderDashOffset, 0])), t = r.chart.data.labels.length - 1; t >= 0; t--) e = r.getDistanceFromCenterForValue(i.ticks.reverse ? r.min : r.max), n = r.getPointPosition(t, e), o.beginPath(), o.moveTo(r.xCenter, r.yCenter), o.lineTo(n.x, n.y), o.stroke();
                            o.restore() } }, _drawLabels: function() { var t = this,
                            e = t.ctx,
                            n = t.options.ticks; if (n.display) { var r, o, i = t.getIndexAngle(0),
                                a = I.options._parseFont(n),
                                c = Sn(n.fontColor, X.global.defaultFontColor);
                            e.save(), e.font = a.string, e.translate(t.xCenter, t.yCenter), e.rotate(i), e.textAlign = "center", e.textBaseline = "middle", I.each(t.ticks, (function(i, s) {
                                (0 !== s || n.reverse) && (r = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]), n.showLabelBackdrop && (o = e.measureText(i).width, e.fillStyle = n.backdropColor, e.fillRect(-o / 2 - n.backdropPaddingX, -r - a.size / 2 - n.backdropPaddingY, o + 2 * n.backdropPaddingX, a.size + 2 * n.backdropPaddingY)), e.fillStyle = c, e.fillText(i, 0, -r)) })), e.restore() } }, _drawTitle: I.noop }),
                Hn = Xn;
            Fn._defaults = Hn; var Un = I._deprecated,
                Vn = I.options.resolve,
                $n = I.valueOrDefault,
                Yn = Number.MIN_SAFE_INTEGER || -9007199254740991,
                Gn = Number.MAX_SAFE_INTEGER || 9007199254740991,
                Kn = { millisecond: { common: !0, size: 1, steps: 1e3 }, second: { common: !0, size: 1e3, steps: 60 }, minute: { common: !0, size: 6e4, steps: 60 }, hour: { common: !0, size: 36e5, steps: 24 }, day: { common: !0, size: 864e5, steps: 30 }, week: { common: !1, size: 6048e5, steps: 4 }, month: { common: !0, size: 2628e6, steps: 12 }, quarter: { common: !1, size: 7884e6, steps: 4 }, year: { common: !0, size: 3154e7 } },
                Jn = Object.keys(Kn);

            function Qn(t, e) { return t - e }

            function Zn(t) { return I.valueOrDefault(t.time.min, t.ticks.min) }

            function tr(t) { return I.valueOrDefault(t.time.max, t.ticks.max) }

            function er(t, e, n, r) { var o = function(t, e, n) { for (var r, o, i, a = 0, c = t.length - 1; a >= 0 && a <= c;) { if (o = t[(r = a + c >> 1) - 1] || null, i = t[r], !o) return { lo: null, hi: i }; if (i[e] < n) a = r + 1;
                            else { if (!(o[e] > n)) return { lo: o, hi: i };
                                c = r - 1 } } return { lo: i, hi: null } }(t, e, n),
                    i = o.lo ? o.hi ? o.lo : t[t.length - 2] : t[0],
                    a = o.lo ? o.hi ? o.hi : t[t.length - 1] : t[1],
                    c = a[e] - i[e],
                    s = c ? (n - i[e]) / c : 0,
                    l = (a[r] - i[r]) * s; return i[r] + l }

            function nr(t, e) { var n = t._adapter,
                    r = t.options.time,
                    o = r.parser,
                    i = o || r.format,
                    a = e; return "function" == typeof o && (a = o(a)), I.isFinite(a) || (a = "string" == typeof i ? n.parse(a, i) : n.parse(a)), null !== a ? +a : (o || "function" != typeof i || (a = i(e), I.isFinite(a) || (a = n.parse(a))), a) }

            function rr(t, e) { if (I.isNullOrUndef(e)) return null; var n = t.options.time,
                    r = nr(t, t.getRightValue(e)); return null === r || n.round && (r = +t._adapter.startOf(r, n.round)), r }

            function or(t, e, n, r) { var o, i, a, c = Jn.length; for (o = Jn.indexOf(t); o < c - 1; ++o)
                    if (a = (i = Kn[Jn[o]]).steps ? i.steps : Gn, i.common && Math.ceil((n - e) / (a * i.size)) <= r) return Jn[o];
                return Jn[c - 1] }

            function ir(t, e, n) { var r, o, i = [],
                    a = {},
                    c = e.length; for (r = 0; r < c; ++r) a[o = e[r]] = r, i.push({ value: o, major: !1 }); return 0 !== c && n ? function(t, e, n, r) { var o, i, a = t._adapter,
                        c = +a.startOf(e[0].value, r),
                        s = e[e.length - 1].value; for (o = c; o <= s; o = +a.add(o, 1, r))(i = n[o]) >= 0 && (e[i].major = !0); return e }(t, i, a, n) : i } var ar = Mn.extend({ initialize: function() { this.mergeTicksOptions(), Mn.prototype.initialize.call(this) }, update: function() { var t = this,
                            e = t.options,
                            n = e.time || (e.time = {}),
                            r = t._adapter = new Ze._date(e.adapters.date); return Un("time scale", n.format, "time.format", "time.parser"), Un("time scale", n.min, "time.min", "ticks.min"), Un("time scale", n.max, "time.max", "ticks.max"), I.mergeIf(n.displayFormats, r.formats()), Mn.prototype.update.apply(t, arguments) }, getRightValue: function(t) { return t && void 0 !== t.t && (t = t.t), Mn.prototype.getRightValue.call(this, t) }, determineDataLimits: function() { var t, e, n, r, o, i, a, c = this,
                            s = c.chart,
                            l = c._adapter,
                            u = c.options,
                            f = u.time.unit || "day",
                            d = Gn,
                            p = Yn,
                            h = [],
                            M = [],
                            b = [],
                            m = c._getLabels(); for (t = 0, n = m.length; t < n; ++t) b.push(rr(c, m[t])); for (t = 0, n = (s.data.datasets || []).length; t < n; ++t)
                            if (s.isDatasetVisible(t))
                                if (o = s.data.datasets[t].data, I.isObject(o[0]))
                                    for (M[t] = [], e = 0, r = o.length; e < r; ++e) i = rr(c, o[e]), h.push(i), M[t][e] = i;
                                else M[t] = b.slice(0), a || (h = h.concat(b), a = !0);
                        else M[t] = [];
                        b.length && (d = Math.min(d, b[0]), p = Math.max(p, b[b.length - 1])), h.length && (h = n > 1 ? function(t) { var e, n, r, o = {},
                                i = []; for (e = 0, n = t.length; e < n; ++e) o[r = t[e]] || (o[r] = !0, i.push(r)); return i }(h).sort(Qn) : h.sort(Qn), d = Math.min(d, h[0]), p = Math.max(p, h[h.length - 1])), d = rr(c, Zn(u)) || d, p = rr(c, tr(u)) || p, d = d === Gn ? +l.startOf(Date.now(), f) : d, p = p === Yn ? +l.endOf(Date.now(), f) + 1 : p, c.min = Math.min(d, p), c.max = Math.max(d + 1, p), c._table = [], c._timestamps = { data: h, datasets: M, labels: b } }, buildTicks: function() { var t, e, n, r = this,
                            o = r.min,
                            i = r.max,
                            a = r.options,
                            c = a.ticks,
                            s = a.time,
                            l = r._timestamps,
                            u = [],
                            f = r.getLabelCapacity(o),
                            d = c.source,
                            p = a.distribution; for (l = "data" === d || "auto" === d && "series" === p ? l.data : "labels" === d ? l.labels : function(t, e, n, r) { var o, i = t._adapter,
                                    a = t.options,
                                    c = a.time,
                                    s = c.unit || or(c.minUnit, e, n, r),
                                    l = Vn([c.stepSize, c.unitStepSize, 1]),
                                    u = "week" === s && c.isoWeekday,
                                    f = e,
                                    d = []; if (u && (f = +i.startOf(f, "isoWeek", u)), f = +i.startOf(f, u ? "day" : s), i.diff(n, e, s) > 1e5 * l) throw e + " and " + n + " are too far apart with stepSize of " + l + " " + s; for (o = f; o < n; o = +i.add(o, l, s)) d.push(o); return o !== n && "ticks" !== a.bounds || d.push(o), d }(r, o, i, f), "ticks" === a.bounds && l.length && (o = l[0], i = l[l.length - 1]), o = rr(r, Zn(a)) || o, i = rr(r, tr(a)) || i, t = 0, e = l.length; t < e; ++t)(n = l[t]) >= o && n <= i && u.push(n); return r.min = o, r.max = i, r._unit = s.unit || (c.autoSkip ? or(s.minUnit, r.min, r.max, f) : function(t, e, n, r, o) { var i, a; for (i = Jn.length - 1; i >= Jn.indexOf(n); i--)
                                if (a = Jn[i], Kn[a].common && t._adapter.diff(o, r, a) >= e - 1) return a;
                            return Jn[n ? Jn.indexOf(n) : 0] }(r, u.length, s.minUnit, r.min, r.max)), r._majorUnit = c.major.enabled && "year" !== r._unit ? function(t) { for (var e = Jn.indexOf(t) + 1, n = Jn.length; e < n; ++e)
                                if (Kn[Jn[e]].common) return Jn[e] }(r._unit) : void 0, r._table = function(t, e, n, r) { if ("linear" === r || !t.length) return [{ time: e, pos: 0 }, { time: n, pos: 1 }]; var o, i, a, c, s, l = [],
                                u = [e]; for (o = 0, i = t.length; o < i; ++o)(c = t[o]) > e && c < n && u.push(c); for (u.push(n), o = 0, i = u.length; o < i; ++o) s = u[o + 1], a = u[o - 1], c = u[o], void 0 !== a && void 0 !== s && Math.round((s + a) / 2) === c || l.push({ time: c, pos: o / (i - 1) }); return l }(r._timestamps.data, o, i, p), r._offsets = function(t, e, n, r, o) { var i, a, c = 0,
                                s = 0; return o.offset && e.length && (i = er(t, "time", e[0], "pos"), c = 1 === e.length ? 1 - i : (er(t, "time", e[1], "pos") - i) / 2, a = er(t, "time", e[e.length - 1], "pos"), s = 1 === e.length ? a : (a - er(t, "time", e[e.length - 2], "pos")) / 2), { start: c, end: s, factor: 1 / (c + 1 + s) } }(r._table, u, 0, 0, a), c.reverse && u.reverse(), ir(r, u, r._majorUnit) }, getLabelForIndex: function(t, e) { var n = this,
                            r = n._adapter,
                            o = n.chart.data,
                            i = n.options.time,
                            a = o.labels && t < o.labels.length ? o.labels[t] : "",
                            c = o.datasets[e].data[t]; return I.isObject(c) && (a = n.getRightValue(c)), i.tooltipFormat ? r.format(nr(n, a), i.tooltipFormat) : "string" == typeof a ? a : r.format(nr(n, a), i.displayFormats.datetime) }, tickFormatFunction: function(t, e, n, r) { var o = this._adapter,
                            i = this.options,
                            a = i.time.displayFormats,
                            c = a[this._unit],
                            s = this._majorUnit,
                            l = a[s],
                            u = n[e],
                            f = i.ticks,
                            d = s && l && u && u.major,
                            p = o.format(t, r || (d ? l : c)),
                            h = d ? f.major : f.minor,
                            M = Vn([h.callback, h.userCallback, f.callback, f.userCallback]); return M ? M(p, e, n) : p }, convertTicksToLabels: function(t) { var e, n, r = []; for (e = 0, n = t.length; e < n; ++e) r.push(this.tickFormatFunction(t[e].value, e, t)); return r }, getPixelForOffset: function(t) { var e = this._offsets,
                            n = er(this._table, "time", t, "pos"); return this.getPixelForDecimal((e.start + n) * e.factor) }, getPixelForValue: function(t, e, n) { var r = null; if (void 0 !== e && void 0 !== n && (r = this._timestamps.datasets[n][e]), null === r && (r = rr(this, t)), null !== r) return this.getPixelForOffset(r) }, getPixelForTick: function(t) { var e = this.getTicks(); return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null }, getValueForPixel: function(t) { var e = this._offsets,
                            n = this.getDecimalForPixel(t) / e.factor - e.end,
                            r = er(this._table, "pos", n, "time"); return this._adapter._create(r) }, _getLabelSize: function(t) { var e = this.options.ticks,
                            n = this.ctx.measureText(t).width,
                            r = I.toRadians(this.isHorizontal() ? e.maxRotation : e.minRotation),
                            o = Math.cos(r),
                            i = Math.sin(r),
                            a = $n(e.fontSize, X.global.defaultFontSize); return { w: n * o + a * i, h: n * i + a * o } }, getLabelWidth: function(t) { return this._getLabelSize(t).w }, getLabelCapacity: function(t) { var e = this,
                            n = e.options.time,
                            r = n.displayFormats,
                            o = r[n.unit] || r.millisecond,
                            i = e.tickFormatFunction(t, 0, ir(e, [t], e._majorUnit), o),
                            a = e._getLabelSize(i),
                            c = Math.floor(e.isHorizontal() ? e.width / a.w : e.height / a.h); return e.options.offset && c--, c > 0 ? c : 1 } }),
                cr = { position: "bottom", distribution: "linear", bounds: "data", adapters: {}, time: { parser: !1, unit: !1, round: !1, displayFormat: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {} }, ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } } };
            ar._defaults = cr; var sr = { category: mn, linear: xn, logarithmic: Cn, radialLinear: Fn, time: ar },
                lr = { datetime: "MMM D, YYYY, h:mm:ss a", millisecond: "h:mm:ss.SSS a", second: "h:mm:ss a", minute: "h:mm a", hour: "hA", day: "MMM D", week: "ll", month: "MMM YYYY", quarter: "[Q]Q - YYYY", year: "YYYY" };
            Ze._date.override("function" == typeof t ? { _id: "moment", formats: function() { return lr }, parse: function(e, n) { return "string" == typeof e && "string" == typeof n ? e = t(e, n) : e instanceof t || (e = t(e)), e.isValid() ? e.valueOf() : null }, format: function(e, n) { return t(e).format(n) }, add: function(e, n, r) { return t(e).add(n, r).valueOf() }, diff: function(e, n, r) { return t(e).diff(t(n), r) }, startOf: function(e, n, r) { return e = t(e), "isoWeek" === n ? e.isoWeekday(r).valueOf() : e.startOf(n).valueOf() }, endOf: function(e, n) { return t(e).endOf(n).valueOf() }, _create: function(e) { return t(e) } } : {}), X._set("global", { plugins: { filler: { propagate: !0 } } }); var ur = { dataset: function(t) { var e = t.fill,
                        n = t.chart,
                        r = n.getDatasetMeta(e),
                        o = r && n.isDatasetVisible(e) && r.dataset._children || [],
                        i = o.length || 0; return i ? function(t, e) { return e < i && o[e]._view || null } : null }, boundary: function(t) { var e = t.boundary,
                        n = e ? e.x : null,
                        r = e ? e.y : null; return I.isArray(e) ? function(t, n) { return e[n] } : function(t) { return { x: null === n ? t.x : n, y: null === r ? t.y : r } } } };

            function fr(t, e, n) { var r, o = t._model || {},
                    i = o.fill; if (void 0 === i && (i = !!o.backgroundColor), !1 === i || null === i) return !1; if (!0 === i) return "origin"; if (r = parseFloat(i, 10), isFinite(r) && Math.floor(r) === r) return "-" !== i[0] && "+" !== i[0] || (r = e + r), !(r === e || r < 0 || r >= n) && r; switch (i) {
                    case "bottom":
                        return "start";
                    case "top":
                        return "end";
                    case "zero":
                        return "origin";
                    case "origin":
                    case "start":
                    case "end":
                        return i;
                    default:
                        return !1 } }

            function dr(t) { return (t.el._scale || {}).getPointPositionForValue ? function(t) { var e, n, r, o, i, a = t.el._scale,
                        c = a.options,
                        s = a.chart.data.labels.length,
                        l = t.fill,
                        u = []; if (!s) return null; for (e = c.ticks.reverse ? a.max : a.min, n = c.ticks.reverse ? a.min : a.max, r = a.getPointPositionForValue(0, e), o = 0; o < s; ++o) i = "start" === l || "end" === l ? a.getPointPositionForValue(o, "start" === l ? e : n) : a.getBasePosition(o), c.gridLines.circular && (i.cx = r.x, i.cy = r.y, i.angle = a.getIndexAngle(o) - Math.PI / 2), u.push(i); return u }(t) : function(t) { var e, n = t.el._model || {},
                        r = t.el._scale || {},
                        o = t.fill,
                        i = null; if (isFinite(o)) return null; if ("start" === o ? i = void 0 === n.scaleBottom ? r.bottom : n.scaleBottom : "end" === o ? i = void 0 === n.scaleTop ? r.top : n.scaleTop : void 0 !== n.scaleZero ? i = n.scaleZero : r.getBasePixel && (i = r.getBasePixel()), null != i) { if (void 0 !== i.x && void 0 !== i.y) return i; if (I.isFinite(i)) return { x: (e = r.isHorizontal()) ? i : null, y: e ? null : i } } return null }(t) }

            function pr(t, e, n) { var r, o = t[e].fill,
                    i = [e]; if (!n) return o; for (; !1 !== o && -1 === i.indexOf(o);) { if (!isFinite(o)) return o; if (!(r = t[o])) return !1; if (r.visible) return o;
                    i.push(o), o = r.fill } return !1 }

            function hr(t) { var e = t.fill,
                    n = "dataset"; return !1 === e ? null : (isFinite(e) || (n = "boundary"), ur[n](t)) }

            function Mr(t) { return t && !t.skip }

            function br(t, e, n, r, o) { var i, a, c, s; if (r && o) { for (t.moveTo(e[0].x, e[0].y), i = 1; i < r; ++i) I.canvas.lineTo(t, e[i - 1], e[i]); if (void 0 === n[0].angle)
                        for (t.lineTo(n[o - 1].x, n[o - 1].y), i = o - 1; i > 0; --i) I.canvas.lineTo(t, n[i], n[i - 1], !0);
                    else
                        for (a = n[0].cx, c = n[0].cy, s = Math.sqrt(Math.pow(n[0].x - a, 2) + Math.pow(n[0].y - c, 2)), i = o - 1; i > 0; --i) t.arc(a, c, s, n[i].angle, n[i - 1].angle, !0) } }

            function mr(t, e, n, r, o, i) { var a, c, s, l, u, f, d, p, h = e.length,
                    M = r.spanGaps,
                    b = [],
                    m = [],
                    v = 0,
                    g = 0; for (t.beginPath(), a = 0, c = h; a < c; ++a) u = n(l = e[s = a % h]._view, s, r), f = Mr(l), d = Mr(u), i && void 0 === p && f && (c = h + (p = a + 1)), f && d ? (v = b.push(l), g = m.push(u)) : v && g && (M ? (f && b.push(l), d && m.push(u)) : (br(t, b, m, v, g), v = g = 0, b = [], m = []));
                br(t, b, m, v, g), t.closePath(), t.fillStyle = o, t.fill() } var vr = { id: "filler", afterDatasetsUpdate: function(t, e) { var n, r, o, i, a = (t.data.datasets || []).length,
                            c = e.propagate,
                            s = []; for (r = 0; r < a; ++r) i = null, (o = (n = t.getDatasetMeta(r)).dataset) && o._model && o instanceof yt.Line && (i = { visible: t.isDatasetVisible(r), fill: fr(o, r, a), chart: t, el: o }), n.$filler = i, s.push(i); for (r = 0; r < a; ++r)(i = s[r]) && (i.fill = pr(s, r, c), i.boundary = dr(i), i.mapper = hr(i)) }, beforeDatasetsDraw: function(t) { var e, n, r, o, i, a, c, s = t._getSortedVisibleDatasetMetas(),
                            l = t.ctx; for (n = s.length - 1; n >= 0; --n)(e = s[n].$filler) && e.visible && (o = (r = e.el)._view, i = r._children || [], a = e.mapper, c = o.backgroundColor || X.global.defaultColor, a && c && i.length && (I.canvas.clipArea(l, t.chartArea), mr(l, i, a, o, c, r._loop), I.canvas.unclipArea(l))) } },
                gr = I.rtl.getRtlAdapter,
                Ar = I.noop,
                yr = I.valueOrDefault;

            function zr(t, e) { return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth }
            X._set("global", { legend: { display: !0, position: "top", align: "center", fullWidth: !0, reverse: !1, weight: 1e3, onClick: function(t, e) { var n = e.datasetIndex,
                            r = this.chart,
                            o = r.getDatasetMeta(n);
                        o.hidden = null === o.hidden ? !r.data.datasets[n].hidden : null, r.update() }, onHover: null, onLeave: null, labels: { boxWidth: 40, padding: 10, generateLabels: function(t) { var e = t.data.datasets,
                                n = t.options.legend || {},
                                r = n.labels && n.labels.usePointStyle; return t._getSortedDatasetMetas().map((function(n) { var o = n.controller.getStyle(r ? 0 : void 0); return { text: e[n.index].label, fillStyle: o.backgroundColor, hidden: !t.isDatasetVisible(n.index), lineCap: o.borderCapStyle, lineDash: o.borderDash, lineDashOffset: o.borderDashOffset, lineJoin: o.borderJoinStyle, lineWidth: o.borderWidth, strokeStyle: o.borderColor, pointStyle: o.pointStyle, rotation: o.rotation, datasetIndex: n.index } }), this) } } }, legendCallback: function(t) { var e, n, r, o = document.createElement("ul"),
                        i = t.data.datasets; for (o.setAttribute("class", t.id + "-legend"), e = 0, n = i.length; e < n; e++)(r = o.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = i[e].backgroundColor, i[e].label && r.appendChild(document.createTextNode(i[e].label)); return o.outerHTML } }); var _r = Y.extend({ initialize: function(t) { I.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1 }, beforeUpdate: Ar, update: function(t, e, n) { var r = this; return r.beforeUpdate(), r.maxWidth = t, r.maxHeight = e, r.margins = n, r.beforeSetDimensions(), r.setDimensions(), r.afterSetDimensions(), r.beforeBuildLabels(), r.buildLabels(), r.afterBuildLabels(), r.beforeFit(), r.fit(), r.afterFit(), r.afterUpdate(), r.minSize }, afterUpdate: Ar, beforeSetDimensions: Ar, setDimensions: function() { var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 } }, afterSetDimensions: Ar, beforeBuildLabels: Ar, buildLabels: function() { var t = this,
                        e = t.options.labels || {},
                        n = I.callback(e.generateLabels, [t.chart], t) || [];
                    e.filter && (n = n.filter((function(n) { return e.filter(n, t.chart.data) }))), t.options.reverse && n.reverse(), t.legendItems = n }, afterBuildLabels: Ar, beforeFit: Ar, fit: function() { var t = this,
                        e = t.options,
                        n = e.labels,
                        r = e.display,
                        o = t.ctx,
                        i = I.options._parseFont(n),
                        a = i.size,
                        c = t.legendHitBoxes = [],
                        s = t.minSize,
                        l = t.isHorizontal(); if (l ? (s.width = t.maxWidth, s.height = r ? 10 : 0) : (s.width = r ? 10 : 0, s.height = t.maxHeight), r) { if (o.font = i.string, l) { var u = t.lineWidths = [0],
                                f = 0;
                            o.textAlign = "left", o.textBaseline = "middle", I.each(t.legendItems, (function(t, e) { var r = zr(n, a) + a / 2 + o.measureText(t.text).width;
                                (0 === e || u[u.length - 1] + r + 2 * n.padding > s.width) && (f += a + n.padding, u[u.length - (e > 0 ? 0 : 1)] = 0), c[e] = { left: 0, top: 0, width: r, height: a }, u[u.length - 1] += r + n.padding })), s.height += f } else { var d = n.padding,
                                p = t.columnWidths = [],
                                h = t.columnHeights = [],
                                M = n.padding,
                                b = 0,
                                m = 0;
                            I.each(t.legendItems, (function(t, e) { var r = zr(n, a) + a / 2 + o.measureText(t.text).width;
                                e > 0 && m + a + 2 * d > s.height && (M += b + n.padding, p.push(b), h.push(m), b = 0, m = 0), b = Math.max(b, r), m += a + d, c[e] = { left: 0, top: 0, width: r, height: a } })), M += b, p.push(b), h.push(m), s.width += M }
                        t.width = s.width, t.height = s.height } else t.width = s.width = t.height = s.height = 0 }, afterFit: Ar, isHorizontal: function() { return "top" === this.options.position || "bottom" === this.options.position }, draw: function() { var t = this,
                        e = t.options,
                        n = e.labels,
                        r = X.global,
                        o = r.defaultColor,
                        i = r.elements.line,
                        a = t.height,
                        c = t.columnHeights,
                        s = t.width,
                        l = t.lineWidths; if (e.display) { var u, f = gr(e.rtl, t.left, t.minSize.width),
                            d = t.ctx,
                            p = yr(n.fontColor, r.defaultFontColor),
                            h = I.options._parseFont(n),
                            M = h.size;
                        d.textAlign = f.textAlign("left"), d.textBaseline = "middle", d.lineWidth = .5, d.strokeStyle = p, d.fillStyle = p, d.font = h.string; var b = zr(n, M),
                            m = t.legendHitBoxes,
                            v = function(t, r) { switch (e.align) {
                                    case "start":
                                        return n.padding;
                                    case "end":
                                        return t - r;
                                    default:
                                        return (t - r + n.padding) / 2 } },
                            g = t.isHorizontal();
                        u = g ? { x: t.left + v(s, l[0]), y: t.top + n.padding, line: 0 } : { x: t.left + n.padding, y: t.top + v(a, c[0]), line: 0 }, I.rtl.overrideTextDirection(t.ctx, e.textDirection); var A = M + n.padding;
                        I.each(t.legendItems, (function(e, r) { var p = d.measureText(e.text).width,
                                h = b + M / 2 + p,
                                y = u.x,
                                z = u.y;
                            f.setWidth(t.minSize.width), g ? r > 0 && y + h + n.padding > t.left + t.minSize.width && (z = u.y += A, u.line++, y = u.x = t.left + v(s, l[u.line])) : r > 0 && z + A > t.top + t.minSize.height && (y = u.x = y + t.columnWidths[u.line] + n.padding, u.line++, z = u.y = t.top + v(a, c[u.line])); var _ = f.x(y);! function(t, e, r) { if (!(isNaN(b) || b <= 0)) { d.save(); var a = yr(r.lineWidth, i.borderWidth); if (d.fillStyle = yr(r.fillStyle, o), d.lineCap = yr(r.lineCap, i.borderCapStyle), d.lineDashOffset = yr(r.lineDashOffset, i.borderDashOffset), d.lineJoin = yr(r.lineJoin, i.borderJoinStyle), d.lineWidth = a, d.strokeStyle = yr(r.strokeStyle, o), d.setLineDash && d.setLineDash(yr(r.lineDash, i.borderDash)), n && n.usePointStyle) { var c = b * Math.SQRT2 / 2,
                                            s = f.xPlus(t, b / 2),
                                            l = e + M / 2;
                                        I.canvas.drawPoint(d, r.pointStyle, c, s, l, r.rotation) } else d.fillRect(f.leftForLtr(t, b), e, b, M), 0 !== a && d.strokeRect(f.leftForLtr(t, b), e, b, M);
                                    d.restore() } }(_, z, e), m[r].left = f.leftForLtr(_, m[r].width), m[r].top = z,
                                function(t, e, n, r) { var o = M / 2,
                                        i = f.xPlus(t, b + o),
                                        a = e + o;
                                    d.fillText(n.text, i, a), n.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(i, a), d.lineTo(f.xPlus(i, r), a), d.stroke()) }(_, z, e, p), g ? u.x += h + n.padding : u.y += A })), I.rtl.restoreTextDirection(t.ctx, e.textDirection) } }, _getLegendItemAt: function(t, e) { var n, r, o, i = this; if (t >= i.left && t <= i.right && e >= i.top && e <= i.bottom)
                        for (o = i.legendHitBoxes, n = 0; n < o.length; ++n)
                            if (t >= (r = o[n]).left && t <= r.left + r.width && e >= r.top && e <= r.top + r.height) return i.legendItems[n];
                    return null }, handleEvent: function(t) { var e, n = this,
                        r = n.options,
                        o = "mouseup" === t.type ? "click" : t.type; if ("mousemove" === o) { if (!r.onHover && !r.onLeave) return } else { if ("click" !== o) return; if (!r.onClick) return }
                    e = n._getLegendItemAt(t.x, t.y), "click" === o ? e && r.onClick && r.onClick.call(n, t.native, e) : (r.onLeave && e !== n._hoveredItem && (n._hoveredItem && r.onLeave.call(n, t.native, n._hoveredItem), n._hoveredItem = e), r.onHover && e && r.onHover.call(n, t.native, e)) } });

            function Or(t, e) { var n = new _r({ ctx: t.ctx, options: e, chart: t });
                he.configure(t, n, e), he.addBox(t, n), t.legend = n } var xr = { id: "legend", _element: _r, beforeInit: function(t) { var e = t.options.legend;
                        e && Or(t, e) }, beforeUpdate: function(t) { var e = t.options.legend,
                            n = t.legend;
                        e ? (I.mergeIf(e, X.global.legend), n ? (he.configure(t, n, e), n.options = e) : Or(t, e)) : n && (he.removeBox(t, n), delete t.legend) }, afterEvent: function(t, e) { var n = t.legend;
                        n && n.handleEvent(e) } },
                Lr = I.noop;
            X._set("global", { title: { display: !1, fontStyle: "bold", fullWidth: !0, padding: 10, position: "top", text: "", weight: 2e3 } }); var Nr = Y.extend({ initialize: function(t) { I.extend(this, t), this.legendHitBoxes = [] }, beforeUpdate: Lr, update: function(t, e, n) { var r = this; return r.beforeUpdate(), r.maxWidth = t, r.maxHeight = e, r.margins = n, r.beforeSetDimensions(), r.setDimensions(), r.afterSetDimensions(), r.beforeBuildLabels(), r.buildLabels(), r.afterBuildLabels(), r.beforeFit(), r.fit(), r.afterFit(), r.afterUpdate(), r.minSize }, afterUpdate: Lr, beforeSetDimensions: Lr, setDimensions: function() { var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 } }, afterSetDimensions: Lr, beforeBuildLabels: Lr, buildLabels: Lr, afterBuildLabels: Lr, beforeFit: Lr, fit: function() { var t, e = this,
                        n = e.options,
                        r = e.minSize = {},
                        o = e.isHorizontal();
                    n.display ? (t = (I.isArray(n.text) ? n.text.length : 1) * I.options._parseFont(n).lineHeight + 2 * n.padding, e.width = r.width = o ? e.maxWidth : t, e.height = r.height = o ? t : e.maxHeight) : e.width = r.width = e.height = r.height = 0 }, afterFit: Lr, isHorizontal: function() { var t = this.options.position; return "top" === t || "bottom" === t }, draw: function() { var t = this,
                        e = t.ctx,
                        n = t.options; if (n.display) { var r, o, i, a = I.options._parseFont(n),
                            c = a.lineHeight,
                            s = c / 2 + n.padding,
                            l = 0,
                            u = t.top,
                            f = t.left,
                            d = t.bottom,
                            p = t.right;
                        e.fillStyle = I.valueOrDefault(n.fontColor, X.global.defaultFontColor), e.font = a.string, t.isHorizontal() ? (o = f + (p - f) / 2, i = u + s, r = p - f) : (o = "left" === n.position ? f + s : p - s, i = u + (d - u) / 2, r = d - u, l = Math.PI * ("left" === n.position ? -.5 : .5)), e.save(), e.translate(o, i), e.rotate(l), e.textAlign = "center", e.textBaseline = "middle"; var h = n.text; if (I.isArray(h))
                            for (var M = 0, b = 0; b < h.length; ++b) e.fillText(h[b], 0, M, r), M += c;
                        else e.fillText(h, 0, 0, r);
                        e.restore() } } });

            function wr(t, e) { var n = new Nr({ ctx: t.ctx, options: e, chart: t });
                he.configure(t, n, e), he.addBox(t, n), t.titleBlock = n } var Tr = {},
                qr = vr,
                Cr = xr,
                Wr = { id: "title", _element: Nr, beforeInit: function(t) { var e = t.options.title;
                        e && wr(t, e) }, beforeUpdate: function(t) { var e = t.options.title,
                            n = t.titleBlock;
                        e ? (I.mergeIf(e, X.global.title), n ? (he.configure(t, n, e), n.options = e) : wr(t, e)) : n && (he.removeBox(t, n), delete t.titleBlock) } }; for (var Sr in Tr.filler = qr, Tr.legend = Cr, Tr.title = Wr, Ke.helpers = I,
                    function() {
                        function t(t, e, n) { var r; return "string" == typeof t ? (r = parseInt(t, 10), -1 !== t.indexOf("%") && (r = r / 100 * e.parentNode[n])) : r = t, r }

                        function e(t) { return null != t && "none" !== t }

                        function n(n, r, o) { var i = document.defaultView,
                                a = I._getParentNode(n),
                                c = i.getComputedStyle(n)[r],
                                s = i.getComputedStyle(a)[r],
                                l = e(c),
                                u = e(s),
                                f = Number.POSITIVE_INFINITY; return l || u ? Math.min(l ? t(c, n, o) : f, u ? t(s, a, o) : f) : "none" }
                        I.where = function(t, e) { if (I.isArray(t) && Array.prototype.filter) return t.filter(e); var n = []; return I.each(t, (function(t) { e(t) && n.push(t) })), n }, I.findIndex = Array.prototype.findIndex ? function(t, e, n) { return t.findIndex(e, n) } : function(t, e, n) { n = void 0 === n ? t : n; for (var r = 0, o = t.length; r < o; ++r)
                                if (e.call(n, t[r], r, t)) return r;
                            return -1 }, I.findNextWhere = function(t, e, n) { I.isNullOrUndef(n) && (n = -1); for (var r = n + 1; r < t.length; r++) { var o = t[r]; if (e(o)) return o } }, I.findPreviousWhere = function(t, e, n) { I.isNullOrUndef(n) && (n = t.length); for (var r = n - 1; r >= 0; r--) { var o = t[r]; if (e(o)) return o } }, I.isNumber = function(t) { return !isNaN(parseFloat(t)) && isFinite(t) }, I.almostEquals = function(t, e, n) { return Math.abs(t - e) < n }, I.almostWhole = function(t, e) { var n = Math.round(t); return n - e <= t && n + e >= t }, I.max = function(t) { return t.reduce((function(t, e) { return isNaN(e) ? t : Math.max(t, e) }), Number.NEGATIVE_INFINITY) }, I.min = function(t) { return t.reduce((function(t, e) { return isNaN(e) ? t : Math.min(t, e) }), Number.POSITIVE_INFINITY) }, I.sign = Math.sign ? function(t) { return Math.sign(t) } : function(t) { return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1 }, I.toRadians = function(t) { return t * (Math.PI / 180) }, I.toDegrees = function(t) { return t * (180 / Math.PI) }, I._decimalPlaces = function(t) { if (I.isFinite(t)) { for (var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++; return n } }, I.getAngleFromPoint = function(t, e) { var n = e.x - t.x,
                                r = e.y - t.y,
                                o = Math.sqrt(n * n + r * r),
                                i = Math.atan2(r, n); return i < -.5 * Math.PI && (i += 2 * Math.PI), { angle: i, distance: o } }, I.distanceBetweenPoints = function(t, e) { return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) }, I.aliasPixel = function(t) { return t % 2 == 0 ? 0 : .5 }, I._alignPixel = function(t, e, n) { var r = t.currentDevicePixelRatio,
                                o = n / 2; return Math.round((e - o) * r) / r + o }, I.splineCurve = function(t, e, n, r) { var o = t.skip ? e : t,
                                i = e,
                                a = n.skip ? e : n,
                                c = Math.sqrt(Math.pow(i.x - o.x, 2) + Math.pow(i.y - o.y, 2)),
                                s = Math.sqrt(Math.pow(a.x - i.x, 2) + Math.pow(a.y - i.y, 2)),
                                l = c / (c + s),
                                u = s / (c + s),
                                f = r * (l = isNaN(l) ? 0 : l),
                                d = r * (u = isNaN(u) ? 0 : u); return { previous: { x: i.x - f * (a.x - o.x), y: i.y - f * (a.y - o.y) }, next: { x: i.x + d * (a.x - o.x), y: i.y + d * (a.y - o.y) } } }, I.EPSILON = Number.EPSILON || 1e-14, I.splineCurveMonotone = function(t) { var e, n, r, o, i, a, c, s, l, u = (t || []).map((function(t) { return { model: t._model, deltaK: 0, mK: 0 } })),
                                f = u.length; for (e = 0; e < f; ++e)
                                if (!(r = u[e]).model.skip) { if (n = e > 0 ? u[e - 1] : null, (o = e < f - 1 ? u[e + 1] : null) && !o.model.skip) { var d = o.model.x - r.model.x;
                                        r.deltaK = 0 !== d ? (o.model.y - r.model.y) / d : 0 }!n || n.model.skip ? r.mK = r.deltaK : !o || o.model.skip ? r.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(r.deltaK) ? r.mK = 0 : r.mK = (n.deltaK + r.deltaK) / 2 }
                            for (e = 0; e < f - 1; ++e) r = u[e], o = u[e + 1], r.model.skip || o.model.skip || (I.almostEquals(r.deltaK, 0, this.EPSILON) ? r.mK = o.mK = 0 : (i = r.mK / r.deltaK, a = o.mK / r.deltaK, (s = Math.pow(i, 2) + Math.pow(a, 2)) <= 9 || (c = 3 / Math.sqrt(s), r.mK = i * c * r.deltaK, o.mK = a * c * r.deltaK))); for (e = 0; e < f; ++e)(r = u[e]).model.skip || (n = e > 0 ? u[e - 1] : null, o = e < f - 1 ? u[e + 1] : null, n && !n.model.skip && (l = (r.model.x - n.model.x) / 3, r.model.controlPointPreviousX = r.model.x - l, r.model.controlPointPreviousY = r.model.y - l * r.mK), o && !o.model.skip && (l = (o.model.x - r.model.x) / 3, r.model.controlPointNextX = r.model.x + l, r.model.controlPointNextY = r.model.y + l * r.mK)) }, I.nextItem = function(t, e, n) { return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1] }, I.previousItem = function(t, e, n) { return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1] }, I.niceNum = function(t, e) { var n = Math.floor(I.log10(t)),
                                r = t / Math.pow(10, n); return (e ? r < 1.5 ? 1 : r < 3 ? 2 : r < 7 ? 5 : 10 : r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * Math.pow(10, n) }, I.requestAnimFrame = "undefined" == typeof window ? function(t) { t() } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) { return window.setTimeout(t, 1e3 / 60) }, I.getRelativePosition = function(t, e) { var n, r, o = t.originalEvent || t,
                                i = t.target || t.srcElement,
                                a = i.getBoundingClientRect(),
                                c = o.touches;
                            c && c.length > 0 ? (n = c[0].clientX, r = c[0].clientY) : (n = o.clientX, r = o.clientY); var s = parseFloat(I.getStyle(i, "padding-left")),
                                l = parseFloat(I.getStyle(i, "padding-top")),
                                u = parseFloat(I.getStyle(i, "padding-right")),
                                f = parseFloat(I.getStyle(i, "padding-bottom")),
                                d = a.right - a.left - s - u,
                                p = a.bottom - a.top - l - f; return { x: n = Math.round((n - a.left - s) / d * i.width / e.currentDevicePixelRatio), y: r = Math.round((r - a.top - l) / p * i.height / e.currentDevicePixelRatio) } }, I.getConstraintWidth = function(t) { return n(t, "max-width", "clientWidth") }, I.getConstraintHeight = function(t) { return n(t, "max-height", "clientHeight") }, I._calculatePadding = function(t, e, n) { return (e = I.getStyle(t, e)).indexOf("%") > -1 ? n * parseInt(e, 10) / 100 : parseInt(e, 10) }, I._getParentNode = function(t) { var e = t.parentNode; return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e }, I.getMaximumWidth = function(t) { var e = I._getParentNode(t); if (!e) return t.clientWidth; var n = e.clientWidth,
                                r = n - I._calculatePadding(e, "padding-left", n) - I._calculatePadding(e, "padding-right", n),
                                o = I.getConstraintWidth(t); return isNaN(o) ? r : Math.min(r, o) }, I.getMaximumHeight = function(t) { var e = I._getParentNode(t); if (!e) return t.clientHeight; var n = e.clientHeight,
                                r = n - I._calculatePadding(e, "padding-top", n) - I._calculatePadding(e, "padding-bottom", n),
                                o = I.getConstraintHeight(t); return isNaN(o) ? r : Math.min(r, o) }, I.getStyle = function(t, e) { return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e) }, I.retinaScale = function(t, e) { var n = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1; if (1 !== n) { var r = t.canvas,
                                    o = t.height,
                                    i = t.width;
                                r.height = o * n, r.width = i * n, t.ctx.scale(n, n), r.style.height || r.style.width || (r.style.height = o + "px", r.style.width = i + "px") } }, I.fontString = function(t, e, n) { return e + " " + t + "px " + n }, I.longestText = function(t, e, n, r) { var o = (r = r || {}).data = r.data || {},
                                i = r.garbageCollect = r.garbageCollect || [];
                            r.font !== e && (o = r.data = {}, i = r.garbageCollect = [], r.font = e), t.font = e; var a, c, s, l, u, f = 0,
                                d = n.length; for (a = 0; a < d; a++)
                                if (null != (l = n[a]) && !0 !== I.isArray(l)) f = I.measureText(t, o, i, f, l);
                                else if (I.isArray(l))
                                for (c = 0, s = l.length; c < s; c++) null == (u = l[c]) || I.isArray(u) || (f = I.measureText(t, o, i, f, u)); var p = i.length / 2; if (p > n.length) { for (a = 0; a < p; a++) delete o[i[a]];
                                i.splice(0, p) } return f }, I.measureText = function(t, e, n, r, o) { var i = e[o]; return i || (i = e[o] = t.measureText(o).width, n.push(o)), i > r && (r = i), r }, I.numberOfLabelLines = function(t) { var e = 1; return I.each(t, (function(t) { I.isArray(t) && t.length > e && (e = t.length) })), e }, I.color = z ? function(t) { return t instanceof CanvasGradient && (t = X.global.defaultColor), z(t) } : function(t) { return t }, I.getHoverColor = function(t) { return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : I.color(t).saturate(.5).darken(.1).rgbString() } }(), Ke._adapters = Ze, Ke.Animation = K, Ke.animationService = J, Ke.controllers = Jt, Ke.DatasetController = nt, Ke.defaults = X, Ke.Element = Y, Ke.elements = yt, Ke.Interaction = oe, Ke.layouts = he, Ke.platform = we, Ke.plugins = Te, Ke.Scale = Mn, Ke.scaleService = qe, Ke.Ticks = tn, Ke.Tooltip = Ie, Ke.helpers.each(sr, (function(t, e) { Ke.scaleService.registerScaleType(e, t, t._defaults) })), Tr) Tr.hasOwnProperty(Sr) && Ke.plugins.register(Tr[Sr]);
            Ke.platform.initialize(); var kr = Ke; return "undefined" != typeof window && (window.Chart = Ke), Ke.Chart = Ke, Ke.Legend = Tr.legend._element, Ke.Title = Tr.title._element, Ke.pluginService = Ke.plugins, Ke.PluginBase = Ke.Element.extend({}), Ke.canvasHelpers = Ke.helpers.canvas, Ke.layoutService = Ke.layouts, Ke.LinearScaleBase = yn, Ke.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], (function(t) { Ke[t] = function(e, n) { return new Ke(e, Ke.helpers.merge(n || {}, { type: t.charAt(0).toLowerCase() + t.slice(1) })) } })), kr }(function() { try { return n("wd/R") } catch (t) {} }()) }, OH9c: function(t, e, n) { "use strict";
        t.exports = function(t, e, n, r, o) { return t.config = e, n && (t.code = n), t.request = r, t.response = o, t.isAxiosError = !0, t.toJSON = function() { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code } }, t } }, OTTw: function(t, e, n) { "use strict"; var r = n("xTJ+");
        t.exports = r.isStandardBrowserEnv() ? function() { var t, e = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement("a");

            function o(t) { var r = t; return e && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname } } return t = o(window.location.href),
                function(e) { var n = r.isString(e) ? o(e) : e; return n.protocol === t.protocol && n.host === t.host } }() : function() { return !0 } }, QH0F: function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("zu+r").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("svg", { class: this.sizeClass, attrs: { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" } }, [e("path", { attrs: { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" } })]) }), [], !1, null, null, null);
        e.default = i.exports }, "Rn+g": function(t, e, n) { "use strict"; var r = n("LYNF");
        t.exports = function(t, e, n) { var o = n.config.validateStatus;!o || o(n.status) ? t(n) : e(r("Request failed with status code " + n.status, n.config, null, n.request, n)) } }, S4HP: function(t, e, n) { "use strict";
        n.r(e); var r = { name: "Loader", props: { color: { type: [String], required: !1, default: "gray" }, width: { type: [Number, String], required: !1, default: 50 }, fillColor: { type: String, required: !1, default: "currentColor" } } },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("div", [e("div", { staticClass: "flex items-center mt-4", staticStyle: { height: "150px" } }, [e("icon-loader", { class: "mx-auto block text-" + this.color + "-500", style: { width: this.width + "px" }, attrs: { viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", fill: this.fillColor } })], 1), this._v(" "), e("div", { staticClass: "mt-4 text-center max-w-xl mx-auto" }, [this._t("default")], 2)]) }), [], !1, null, null, null);
        e.default = i.exports }, SntB: function(t, e, n) { "use strict"; var r = n("xTJ+");
        t.exports = function(t, e) { e = e || {}; var n = {},
                o = ["url", "method", "params", "data"],
                i = ["headers", "auth", "proxy"],
                a = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
            r.forEach(o, (function(t) { void 0 !== e[t] && (n[t] = e[t]) })), r.forEach(i, (function(o) { r.isObject(e[o]) ? n[o] = r.deepMerge(t[o], e[o]) : void 0 !== e[o] ? n[o] = e[o] : r.isObject(t[o]) ? n[o] = r.deepMerge(t[o]) : void 0 !== t[o] && (n[o] = t[o]) })), r.forEach(a, (function(r) { void 0 !== e[r] ? n[r] = e[r] : void 0 !== t[r] && (n[r] = t[r]) })); var c = o.concat(i).concat(a),
                s = Object.keys(e).filter((function(t) { return -1 === c.indexOf(t) })); return r.forEach(s, (function(r) { void 0 !== e[r] ? n[r] = e[r] : void 0 !== t[r] && (n[r] = t[r]) })), n } }, UG0G: function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("zu+r").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("svg", { class: this.sizeClass, attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [e("path", { attrs: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" } })]) }), [], !1, null, null, null);
        e.default = i.exports }, URgk: function(t, e, n) {
        (function(t) { var r = void 0 !== t && t || "undefined" != typeof self && self || window,
                o = Function.prototype.apply;

            function i(t, e) { this._id = t, this._clearFn = e }
            e.setTimeout = function() { return new i(o.call(setTimeout, r, arguments), clearTimeout) }, e.setInterval = function() { return new i(o.call(setInterval, r, arguments), clearInterval) }, e.clearTimeout = e.clearInterval = function(t) { t && t.close() }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() { this._clearFn.call(r, this._id) }, e.enroll = function(t, e) { clearTimeout(t._idleTimeoutId), t._idleTimeout = e }, e.unenroll = function(t) { clearTimeout(t._idleTimeoutId), t._idleTimeout = -1 }, e._unrefActive = e.active = function(t) { clearTimeout(t._idleTimeoutId); var e = t._idleTimeout;
                e >= 0 && (t._idleTimeoutId = setTimeout((function() { t._onTimeout && t._onTimeout() }), e)) }, n("YBdB"), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate }).call(this, n("yLpj")) }, Um5y: function(t, e, n) { t.exports = function(t) { "use strict";

            function e(t, e, n) { t && e && n && (document.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent("on" + e, n)) }

            function n(t, e, n) { t && e && (document.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent("on" + e, n)) }
            t = t && t.hasOwnProperty("default") ? t.default : t; var r = { props: { tagName: { type: String, default: "span" }, trigger: { type: String, default: "hover", validator: function(t) { return ["clickToOpen", "click", "clickToToggle", "hover", "focus"].indexOf(t) > -1 } }, delayOnMouseOver: { type: Number, default: 10 }, delayOnMouseOut: { type: Number, default: 10 }, disabled: { type: Boolean, default: !1 }, content: String, enterActiveClass: String, leaveActiveClass: String, boundariesSelector: String, reference: {}, forceShow: { type: Boolean, default: !1 }, dataValue: { default: null }, appendToBody: { type: Boolean, default: !1 }, visibleArrow: { type: Boolean, default: !0 }, transition: { type: String, default: "" }, stopPropagation: { type: Boolean, default: !1 }, preventDefault: { type: Boolean, default: !1 }, options: { type: Object, default: function() { return {} } }, rootClass: { type: String, default: "" } }, data: function() { return { referenceElm: null, popperJS: null, showPopper: !1, currentPlacement: "", popperOptions: { placement: "bottom", computeStyle: { gpuAcceleration: !1 } } } }, watch: { showPopper: function(t) { t ? (this.$emit("show", this), this.popperJS && this.popperJS.enableEventListeners(), this.updatePopper()) : (this.popperJS && this.popperJS.disableEventListeners(), this.$emit("hide", this)) }, forceShow: { handler: function(t) { this[t ? "doShow" : "doClose"]() }, immediate: !0 }, disabled: function(t) { t && (this.showPopper = !1) } }, created: function() { this.appendedArrow = !1, this.appendedToBody = !1, this.popperOptions = Object.assign(this.popperOptions, this.options) }, mounted: function() { switch (this.referenceElm = this.reference || this.$slots.reference[0].elm, this.popper = this.$slots.default[0].elm, this.trigger) {
                        case "clickToOpen":
                            e(this.referenceElm, "click", this.doShow), e(document, "click", this.handleDocumentClick); break;
                        case "click":
                        case "clickToToggle":
                            e(this.referenceElm, "click", this.doToggle), e(document, "click", this.handleDocumentClick); break;
                        case "hover":
                            e(this.referenceElm, "mouseover", this.onMouseOver), e(this.popper, "mouseover", this.onMouseOver), e(this.referenceElm, "mouseout", this.onMouseOut), e(this.popper, "mouseout", this.onMouseOut); break;
                        case "focus":
                            e(this.referenceElm, "focus", this.onMouseOver), e(this.popper, "focus", this.onMouseOver), e(this.referenceElm, "blur", this.onMouseOut), e(this.popper, "blur", this.onMouseOut) } }, methods: { doToggle: function(t) { this.stopPropagation && t.stopPropagation(), this.preventDefault && t.preventDefault(), this.forceShow || (this.showPopper = !this.showPopper) }, doShow: function() { this.showPopper = !0 }, doClose: function() { this.showPopper = !1 }, doDestroy: function() { this.showPopper || (this.popperJS && (this.popperJS.destroy(), this.popperJS = null), this.appendedToBody && (this.appendedToBody = !1, document.body.removeChild(this.popper.parentElement))) }, createPopper: function() { var e = this;
                        this.$nextTick((function() { if (e.visibleArrow && e.appendArrow(e.popper), e.appendToBody && !e.appendedToBody && (e.appendedToBody = !0, document.body.appendChild(e.popper.parentElement)), e.popperJS && e.popperJS.destroy && e.popperJS.destroy(), e.boundariesSelector) { var n = document.querySelector(e.boundariesSelector);
                                n && (e.popperOptions.modifiers = Object.assign({}, e.popperOptions.modifiers), e.popperOptions.modifiers.preventOverflow = Object.assign({}, e.popperOptions.modifiers.preventOverflow), e.popperOptions.modifiers.preventOverflow.boundariesElement = n) }
                            e.popperOptions.onCreate = function() { e.$emit("created", e), e.$nextTick(e.updatePopper) }, e.popperJS = new t(e.referenceElm, e.popper, e.popperOptions) })) }, destroyPopper: function() { n(this.referenceElm, "click", this.doToggle), n(this.referenceElm, "mouseup", this.doClose), n(this.referenceElm, "mousedown", this.doShow), n(this.referenceElm, "focus", this.doShow), n(this.referenceElm, "blur", this.doClose), n(this.referenceElm, "mouseout", this.onMouseOut), n(this.referenceElm, "mouseover", this.onMouseOver), n(document, "click", this.handleDocumentClick), this.showPopper = !1, this.doDestroy() }, appendArrow: function(t) { if (!this.appendedArrow) { this.appendedArrow = !0; var e = document.createElement("div");
                            e.setAttribute("x-arrow", ""), e.className = "popper__arrow", t.appendChild(e) } }, updatePopper: function() { this.popperJS ? this.popperJS.scheduleUpdate() : this.createPopper() }, onMouseOver: function() { var t = this;
                        clearTimeout(this._timer), this._timer = setTimeout((function() { t.showPopper = !0 }), this.delayOnMouseOver) }, onMouseOut: function() { var t = this;
                        clearTimeout(this._timer), this._timer = setTimeout((function() { t.showPopper = !1 }), this.delayOnMouseOut) }, handleDocumentClick: function(t) { this.$el && this.referenceElm && !this.elementContains(this.$el, t.target) && !this.elementContains(this.referenceElm, t.target) && this.popper && !this.elementContains(this.popper, t.target) && (this.$emit("documentClick", this), this.forceShow || (this.showPopper = !1)) }, elementContains: function(t, e) { return "function" == typeof t.contains && t.contains(e) } }, destroyed: function() { this.destroyPopper() } }; const o = r; return r.__file = "popper.js.vue",
                function(t, e, n, r, o, i, a, c, s, l) { "function" == typeof a && (a, a = !1); const u = "function" == typeof n ? n.options : n; let f; if (t && t.render && (u.render = t.render, u.staticRenderFns = t.staticRenderFns, u._compiled = !0), f)
                        if (u.functional) { const t = u.render;
                            u.render = function(e, n) { return f.call(n), t(e, n) } } else { const t = u.beforeCreate;
                            u.beforeCreate = t ? [].concat(t, f) : [f] }
                    return n }({ render: function() { var t = this,
                            e = t.$createElement,
                            n = t._self._c || e; return n(t.tagName, { tag: "component" }, [n("transition", { attrs: { name: t.transition, "enter-active-class": t.enterActiveClass, "leave-active-class": t.leaveActiveClass }, on: { "after-leave": t.doDestroy } }, [n("span", { directives: [{ name: "show", rawName: "v-show", value: !t.disabled && t.showPopper, expression: "!disabled && showPopper" }], ref: "popper", class: t.rootClass }, [t._t("default", [t._v(t._s(t.content))])], 2)]), t._v(" "), t._t("reference")], 2) }, staticRenderFns: [] }, 0, o, 0, 0, 0, void 0) }(n("8L3F")) }, UnBK: function(t, e, n) { "use strict"; var r = n("xTJ+"),
            o = n("xAGQ"),
            i = n("Lmem"),
            a = n("JEQr");

        function c(t) { t.cancelToken && t.cancelToken.throwIfRequested() }
        t.exports = function(t) { return c(t), t.headers = t.headers || {}, t.data = o(t.data, t.headers, t.transformRequest), t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(e) { delete t.headers[e] })), (t.adapter || a.adapter)(t).then((function(e) { return c(t), e.data = o(e.data, e.headers, t.transformResponse), e }), (function(e) { return i(e) || (c(t), e && e.response && (e.response.data = o(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e) })) } }, VUlF: function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("snLp").a], name: "Metric", props: { title: { type: [String], required: !0 }, description: { type: [String], required: !1 }, value: { type: [String, Number], required: !1 }, increaseColor: { type: [String], required: !1, default: "green" }, decreaseColor: { type: [String], required: !1, default: "gray" }, average: { type: [String, Number], required: !1 } }, methods: { percentage: function() { return void 0 === this.average || this.average <= 0 ? 0 : ((this.value - this.average) / this.average * 100).toFixed(1) } } },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this,
                    e = t.$createElement,
                    n = t._self._c || e; return n("div", { staticClass: "border-t border-gray-200 md:border-0 md:border-l" }, [n("div", { staticClass: "px-4 py-5 sm:p-6" }, [n("dl", [n("dt", { staticClass: "text-base leading-6 font-normal text-gray-900" }, [t.description ? n("popover", [n("template", { slot: "button" }, [t._v("\n                        " + t._s(t.title) + "\n                    ")]), t._v(" "), n("template", { slot: "content" }, [t._v("\n                        " + t._s(t.description) + "\n                    ")])], 2) : [t._v("\n                    " + t._s(t.title) + "\n                ")]], 2), t._v(" "), n("dd", { staticClass: "mt-1 flex justify-between items-baseline md:block lg:flex" }, [n("div", { staticClass: "flex items-baseline text-2xl leading-8 font-semibold text-indigo-600" }, [void 0 === t.value ? n("icon-loader") : [t._v("\n                        " + t._s(t.formatQuantity(t.value)) + "\n                        "), null != t.average ? n("popover", { attrs: { placement: "bottom" } }, [n("template", { slot: "button" }, [t.average > 0 ? n("span", { staticClass: "ml-2 text-sm leading-5 font-medium text-gray-500" }, [t._v("\n                                    Usually " + t._s(t.formatQuantity(t.average)) + " / hr\n                                ")]) : t._e()]), t._v(" "), n("template", { slot: "content" }, [t._v("\n                                " + t._s("Average based in the last 24 hours prior to the current hour.") + "\n                            ")])], 2) : t._e()]], 2), t._v(" "), 0 != t.percentage() ? n("div", { staticClass: "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 md:mt-2 lg:mt-0", class: t.percentage() > 0 ? "bg-" + t.increaseColor + "-100 text-" + t.increaseColor + "-800" : "bg-" + t.decreaseColor + "-100 text-" + t.decreaseColor + "-800" }, [t.percentage() > 0 ? n("icon-arrow-up", { staticClass: "-ml-1 mr-0.5 flex-shrink-0 self-center", class: "text-" + t.increaseColor + "-500", attrs: { size: "4" } }) : n("icon-arrow-down", { staticClass: "-ml-1 mr-0.5 flex-shrink-0 self-center", class: "text-" + t.decreaseColor + "-500", attrs: { size: "4" } }), t._v(" "), n("span", { staticClass: "sr-only" }, [t._v(" Increased/Decreased by ")]), t._v("\n                    " + t._s(t.formatQuantity(t.percentage())) + "%\n                ")], 1) : t._e()])])])]) }), [], !1, null, null, null);
        e.default = i.exports }, XuX8: function(t, e, n) { t.exports = n("INkZ") }, YBdB: function(t, e, n) {
        (function(t, e) {! function(t, n) { "use strict"; if (!t.setImmediate) { var r, o, i, a, c, s = 1,
                        l = {},
                        u = !1,
                        f = t.document,
                        d = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    d = d && d.setTimeout ? d : t, "[object process]" === {}.toString.call(t.process) ? r = function(t) { e.nextTick((function() { h(t) })) } : ! function() { if (t.postMessage && !t.importScripts) { var e = !0,
                                n = t.onmessage; return t.onmessage = function() { e = !1 }, t.postMessage("", "*"), t.onmessage = n, e } }() ? t.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function(t) { h(t.data) }, r = function(t) { i.port2.postMessage(t) }) : f && "onreadystatechange" in f.createElement("script") ? (o = f.documentElement, r = function(t) { var e = f.createElement("script");
                        e.onreadystatechange = function() { h(t), e.onreadystatechange = null, o.removeChild(e), e = null }, o.appendChild(e) }) : r = function(t) { setTimeout(h, 0, t) } : (a = "setImmediate$" + Math.random() + "$", c = function(e) { e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(a) && h(+e.data.slice(a.length)) }, t.addEventListener ? t.addEventListener("message", c, !1) : t.attachEvent("onmessage", c), r = function(e) { t.postMessage(a + e, "*") }), d.setImmediate = function(t) { "function" != typeof t && (t = new Function("" + t)); for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1]; var o = { callback: t, args: e }; return l[s] = o, r(s), s++ }, d.clearImmediate = p }

                function p(t) { delete l[t] }

                function h(t) { if (u) setTimeout(h, 0, t);
                    else { var e = l[t]; if (e) { u = !0; try {! function(t) { var e = t.callback,
                                        n = t.args; switch (n.length) {
                                        case 0:
                                            e(); break;
                                        case 1:
                                            e(n[0]); break;
                                        case 2:
                                            e(n[0], n[1]); break;
                                        case 3:
                                            e(n[0], n[1], n[2]); break;
                                        default:
                                            e.apply(void 0, n) } }(e) } finally { p(t), u = !1 } } } } }("undefined" == typeof self ? void 0 === t ? this : t : self) }).call(this, n("yLpj"), n("8oxB")) }, YuTi: function(t, e) { t.exports = function(t) { return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function() { return t.l } }), Object.defineProperty(t, "id", { enumerable: !0, get: function() { return t.i } }), t.webpackPolyfill = 1), t } }, "Z3/L": function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("zu+r").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("svg", { class: this.sizeClass, attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [e("path", { attrs: { d: "M10 12a2 2 0 100-4 2 2 0 000 4z" } }), this._v(" "), e("path", { attrs: { "fill-rule": "evenodd", d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z", "clip-rule": "evenodd" } })]) }), [], !1, null, null, null);
        e.default = i.exports }, "aET+": function(t, e, n) { var r, o, i = {},
            a = (r = function() { return window && document && document.all && !window.atob }, function() { return void 0 === o && (o = r.apply(this, arguments)), o }),
            c = function(t, e) { return e ? e.querySelector(t) : document.querySelector(t) },
            s = function(t) { var e = {}; return function(t, n) { if ("function" == typeof t) return t(); if (void 0 === e[t]) { var r = c.call(this, t, n); if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try { r = r.contentDocument.head } catch (t) { r = null }
                        e[t] = r } return e[t] } }(),
            l = null,
            u = 0,
            f = [],
            d = n("9tPo");

        function p(t, e) { for (var n = 0; n < t.length; n++) { var r = t[n],
                    o = i[r.id]; if (o) { o.refs++; for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]); for (; a < r.parts.length; a++) o.parts.push(g(r.parts[a], e)) } else { var c = []; for (a = 0; a < r.parts.length; a++) c.push(g(r.parts[a], e));
                    i[r.id] = { id: r.id, refs: 1, parts: c } } } }

        function h(t, e) { for (var n = [], r = {}, o = 0; o < t.length; o++) { var i = t[o],
                    a = e.base ? i[0] + e.base : i[0],
                    c = { css: i[1], media: i[2], sourceMap: i[3] };
                r[a] ? r[a].parts.push(c) : n.push(r[a] = { id: a, parts: [c] }) } return n }

        function M(t, e) { var n = s(t.insertInto); if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."); var r = f[f.length - 1]; if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), f.push(e);
            else if ("bottom" === t.insertAt) n.appendChild(e);
            else { if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"); var o = s(t.insertAt.before, n);
                n.insertBefore(e, o) } }

        function b(t) { if (null === t.parentNode) return !1;
            t.parentNode.removeChild(t); var e = f.indexOf(t);
            e >= 0 && f.splice(e, 1) }

        function m(t) { var e = document.createElement("style"); if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) { var r = function() { 0; return n.nc }();
                r && (t.attrs.nonce = r) } return v(e, t.attrs), M(t, e), e }

        function v(t, e) { Object.keys(e).forEach((function(n) { t.setAttribute(n, e[n]) })) }

        function g(t, e) { var n, r, o, i; if (e.transform && t.css) { if (!(i = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function() {};
                t.css = i } if (e.singleton) { var a = u++;
                n = l || (l = m(e)), r = z.bind(null, n, a, !1), o = z.bind(null, n, a, !0) } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(t) { var e = document.createElement("link"); return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", v(e, t.attrs), M(t, e), e }(e), r = O.bind(null, n, e), o = function() { b(n), n.href && URL.revokeObjectURL(n.href) }) : (n = m(e), r = _.bind(null, n), o = function() { b(n) }); return r(t),
                function(e) { if (e) { if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                        r(t = e) } else o() } }
        t.exports = function(t, e) { if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom"); var n = h(t, e); return p(n, e),
                function(t) { for (var r = [], o = 0; o < n.length; o++) { var a = n[o];
                        (c = i[a.id]).refs--, r.push(c) }
                    t && p(h(t, e), e); for (o = 0; o < r.length; o++) { var c; if (0 === (c = r[o]).refs) { for (var s = 0; s < c.parts.length; s++) c.parts[s]();
                            delete i[c.id] } } } }; var A, y = (A = [], function(t, e) { return A[t] = e, A.filter(Boolean).join("\n") });

        function z(t, e, n, r) { var o = n ? "" : r.css; if (t.styleSheet) t.styleSheet.cssText = y(e, o);
            else { var i = document.createTextNode(o),
                    a = t.childNodes;
                a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i) } }

        function _(t, e) { var n = e.css,
                r = e.media; if (r && t.setAttribute("media", r), t.styleSheet) t.styleSheet.cssText = n;
            else { for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n)) } }

        function O(t, e, n) { var r = n.css,
                o = n.sourceMap,
                i = void 0 === e.convertToAbsoluteUrls && o;
            (e.convertToAbsoluteUrls || i) && (r = d(r)), o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"); var a = new Blob([r], { type: "text/css" }),
                c = t.href;
            t.href = URL.createObjectURL(a), c && URL.revokeObjectURL(c) } }, bNI1: function(t) { t.exports = JSON.parse('{"version":"2020a","zones":["Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q|48e5","Africa/Accra|LMT GMT +0020|.Q 0 -k|012121212121212121212121212121212121212121212121|-26BbX.8 6tzX.8 MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE|41e5","Africa/Nairobi|LMT EAT +0230 +0245|-2r.g -30 -2u -2J|01231|-1F3Cr.g 3Dzr.g okMu MFXJ|47e5","Africa/Algiers|PMT WET WEST CET CEST|-9.l 0 -10 -10 -20|0121212121212121343431312123431213|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 DA0 Imo0 rd0 De0 9Xz0 1fb0 1ap0 16K0 2yo0 mEp0 hwL0 jxA0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0|26e5","Africa/Lagos|LMT WAT|-d.A -10|01|-22y0d.A|17e6","Africa/Bissau|LMT -01 GMT|12.k 10 0|012|-2ldX0 2xoo0|39e4","Africa/Maputo|LMT CAT|-2a.k -20|01|-2GJea.k|26e5","Africa/Cairo|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6","Africa/Casablanca|LMT +00 +01|u.k 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2gMnt.E 130Lt.E rb0 Dd0 dVb0 b6p0 TX0 EoB0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 gM0 2600 e00 2600 gM0|32e5","Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|010101010101010101010232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-25KN0 11z0 drd0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1y7o0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|85e3","Africa/El_Aaiun|LMT -01 +00 +01|Q.M 10 0 -10|012323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1rDz7.c 1GVA7.c 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 gM0 2600 e00 2600 gM0|20e4","Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0|84e5","Africa/Juba|LMT CAT CAST EAT|-26.s -20 -30 -30|01212121212121212121212121212121213|-1yW26.s 1zK06.s 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0|","Africa/Khartoum|LMT CAT CAST EAT|-2a.8 -20 -30 -30|012121212121212121212121212121212131|-1yW2a.8 1zK0a.8 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0 HjL0|51e5","Africa/Monrovia|MMT MMT GMT|H.8 I.u 0|012|-23Lzg.Q 28G01.m|11e5","Africa/Ndjamena|LMT WAT WAST|-10.c -10 -20|0121|-2le10.c 2J3c0.c Wn0|13e5","Africa/Sao_Tome|LMT GMT WAT|A.J 0 -10|0121|-2le00 4i6N0 2q00|","Africa/Tripoli|LMT CET CEST EET|-Q.I -10 -20 -20|012121213121212121212121213123123|-21JcQ.I 1hnBQ.I vx0 4iP0 xx0 4eN0 Bb0 7ip0 U0n0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00|11e5","Africa/Tunis|PMT CET CEST|-9.l -10 -20|0121212121212121212121212121212121|-2nco9.l 18pa9.l 1qM0 DA0 3Tc0 11B0 1ze0 WM0 7z0 3d0 14L0 1cN0 1f90 1ar0 16J0 1gXB0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00|20e5","Africa/Windhoek|+0130 SAST SAST CAT WAT|-1u -20 -30 -20 -10|01213434343434343434343434343434343434343434343434343|-2GJdu 1Ajdu 1cL0 1SqL0 9Io0 16P0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4","America/Adak|NST NWT NPT BST BDT AHST HST HDT|b0 a0 a0 b0 a0 a0 a0 90|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326","America/Anchorage|AST AWT APT AHST AHDT YST AKST AKDT|a0 90 90 a0 90 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T00 8wX0 iA0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4","America/Port_of_Spain|LMT AST|46.4 40|01|-2kNvR.U|43e3","America/Araguaina|LMT -03 -02|3c.M 30 20|0121212121212121212121212121212121212121212121212121|-2glwL.c HdKL.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0|14e4","America/Argentina/Buenos_Aires|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 A4p0 uL0 1qN0 WL0|","America/Argentina/Catamarca|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 7B0 8zb0 uL0|","America/Argentina/Cordoba|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0 1qN0 WL0|","America/Argentina/Jujuy|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 A4p0 uL0|","America/Argentina/La_Rioja|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0|","America/Argentina/Mendoza|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232312121321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 ri10 Op0 7TX0 uL0|","America/Argentina/Rio_Gallegos|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0|","America/Argentina/Salta|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0|","America/Argentina/San_Juan|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rld0 m10 8lb0 uL0|","America/Argentina/San_Luis|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121212321212|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 vDb0 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0|","America/Argentina/Tucuman|CMT -04 -03 -02|4g.M 40 30 20|0121212121212121212121212121212121212121212323232313232123232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 4N0 8BX0 uL0 1qN0 WL0|","America/Argentina/Ushuaia|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rkN0 8p0 8zb0 uL0|","America/Curacao|LMT -0430 AST|4z.L 4u 40|012|-2kV7o.d 28KLS.d|15e4","America/Asuncion|AMT -04 -03|3O.E 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-1x589.k 1DKM9.k 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5","America/Atikokan|CST CDT CWT CPT EST|60 50 50 50 50|0101234|-25TQ0 1in0 Rnb0 3je0 8x30 iw0|28e2","America/Bahia_Banderas|LMT MST CST PST MDT CDT|71 70 60 80 60 50|0121212131414141414141414141414141414152525252525252525252525252525252525252525252525252525252|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3","America/Bahia|LMT -03 -02|2y.4 30 20|01212121212121212121212121212121212121212121212121212121212121|-2glxp.U HdLp.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0|27e5","America/Barbados|LMT BMT AST ADT|3W.t 3W.t 40 30|01232323232|-1Q0I1.v jsM0 1ODC1.v IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0|28e4","America/Belem|LMT -03 -02|3d.U 30 20|012121212121212121212121212121|-2glwK.4 HdKK.4 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|20e5","America/Belize|LMT CST -0530 CDT|5Q.M 60 5u 50|01212121212121212121212121212121212121212121212121213131|-2kBu7.c fPA7.c Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1f0Mu qn0 lxB0 mn0|57e3","America/Blanc-Sablon|AST ADT AWT APT|40 30 30 30|010230|-25TS0 1in0 UGp0 8x50 iu0|11e2","America/Boa_Vista|LMT -04 -03|42.E 40 30|0121212121212121212121212121212121|-2glvV.k HdKV.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0|62e2","America/Bogota|BMT -05 -04|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0|90e5","America/Boise|PST PDT MST MWT MPT MDT|80 70 70 60 60 60|0101023425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-261q0 1nX0 11B0 1nX0 8C10 JCL0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e4","America/Cambridge_Bay|-00 MST MWT MPT MDDT MDT CST CDT EST|0 70 60 60 50 60 60 50 50|0123141515151515151515151515151515151515151515678651515151515151515151515151515151515151515151515151515151515151515151515151|-21Jc0 RO90 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e2","America/Campo_Grande|LMT -04 -03|3C.s 40 30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glwl.w HdLl.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|77e4","America/Cancun|LMT CST EST EDT CDT|5L.4 60 50 40 50|0123232341414141414141414141414141414141412|-1UQG0 2q2o0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4","America/Caracas|CMT -0430 -04|4r.E 4u 40|01212|-2kV7w.k 28KM2.k 1IwOu kqo0|29e5","America/Cayenne|LMT -04 -03|3t.k 40 30|012|-2mrwu.E 2gWou.E|58e3","America/Panama|CMT EST|5j.A 50|01|-2uduE.o|15e5","America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5","America/Chihuahua|LMT MST CST CDT MDT|74.k 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4","America/Costa_Rica|SJMT CST CDT|5A.d 60 50|0121212121|-1Xd6n.L 2lu0n.L Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0|12e5","America/Creston|MST PST|70 80|010|-29DR0 43B0|53e2","America/Cuiaba|LMT -04 -03|3I.k 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glwf.E HdLf.E 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|54e4","America/Danmarkshavn|LMT -03 -02 GMT|1e.E 30 20 0|01212121212121212121212121212121213|-2a5WJ.k 2z5fJ.k 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0|8","America/Dawson_Creek|PST PDT PWT PPT MST|80 70 70 70 70|0102301010101010101010101010101010101010101010101010101014|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 ML0|12e3","America/Dawson|YST YDT YWT YPT YDDT PST PDT MST|90 80 80 80 70 80 70 70|01010230405656565656565656565656565656565656565656565656565656565656565656565656565656565657|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 jrA0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|13e2","America/Denver|MST MDT MWT MPT|70 60 60 60|01010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 11B0 1qL0 WN0 mn0 Ord0 8x20 ix0 LCN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5","America/Detroit|LMT CST EST EWT EPT EDT|5w.b 60 50 40 40 40|0123425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2Cgir.N peqr.N 156L0 8x40 iv0 6fd0 11z0 JxX1 SMX 1cN0 1cL0 aW10 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e5","America/Edmonton|LMT MST MDT MWT MPT|7x.Q 70 60 60 60|0121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2yd4q.8 shdq.8 1in0 17d0 hz0 2dB0 1fz0 1a10 11z0 1qN0 WL0 1qN0 11z0 IGN0 8x20 ix0 3NB0 11z0 XQp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|10e5","America/Eirunepe|LMT -05 -04|4D.s 50 40|0121212121212121212121212121212121|-2glvk.w HdLk.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0|31e3","America/El_Salvador|LMT CST CDT|5U.M 60 50|012121|-1XiG3.c 2Fvc3.c WL0 1qN0 WL0|11e5","America/Tijuana|LMT MST PST PDT PWT PPT|7M.4 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOO0 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|20e5","America/Fort_Nelson|PST PDT PWT PPT MST|80 70 70 70 70|01023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2","America/Fort_Wayne|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010101023010101010101010101040454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 QI10 Db0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 5Tz0 1o10 qLb0 1cL0 1cN0 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/Fortaleza|LMT -03 -02|2y 30 20|0121212121212121212121212121212121212121|-2glxq HdLq 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0|34e5","America/Glace_Bay|LMT AST ADT AWT APT|3X.M 40 30 30 30|012134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsI0.c CwO0.c 1in0 UGp0 8x50 iu0 iq10 11z0 Jg10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3","America/Godthab|LMT -03 -02|3q.U 30 20|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5Ux.4 2z5dx.4 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3","America/Goose_Bay|NST NDT NST NDT NWT NPT AST ADT ADDT|3u.Q 2u.Q 3u 2u 2u 2u 40 30 20|010232323232323245232323232323232323232323232323232323232326767676767676767676767676767676767676767676768676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-25TSt.8 1in0 DXb0 2HbX.8 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 S10 g0u 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2","America/Grand_Turk|KMT EST EDT AST|57.a 50 40 40|01212121212121212121212121212121212121212121212121212121212121212121212121232121212121212121212121212121212121212121|-2l1uQ.O 2HHBQ.O 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2","America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0|13e5","America/Guayaquil|QMT -05 -04|5e 50 40|0121|-1yVSK 2uILK rz0|27e5","America/Guyana|LMT -0345 -03 -04|3Q.E 3J 30 40|0123|-2dvU7.k 2r6LQ.k Bxbf|80e4","America/Halifax|LMT AST ADT AWT APT|4e.o 40 30 30 30|0121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsHJ.A xzzJ.A 1db0 3I30 1in0 3HX0 IL0 1E10 ML0 1yN0 Pb0 1Bd0 Mn0 1Bd0 Rz0 1w10 Xb0 1w10 LX0 1w10 Xb0 1w10 Lz0 1C10 Jz0 1E10 OL0 1yN0 Un0 1qp0 Xb0 1qp0 11X0 1w10 Lz0 1HB0 LX0 1C10 FX0 1w10 Xb0 1qp0 Xb0 1BB0 LX0 1td0 Xb0 1qp0 Xb0 Rf0 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 6i10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4","America/Havana|HMT CST CDT|5t.A 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Meuu.o 72zu.o ML0 sld0 An0 1Nd0 Db0 1Nd0 An0 6Ep0 An0 1Nd0 An0 JDd0 Mn0 1Ap0 On0 1fd0 11X0 1qN0 WL0 1wp0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5","America/Hermosillo|LMT MST CST PST MDT|7n.Q 70 60 80 60|0121212131414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0|64e4","America/Indiana/Knox|CST CDT CWT CPT EST|60 50 50 50 50|0101023010101010101010101010101010101040101010101010101010101010101010101010101010101010141010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 3Cn0 8wp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/Indiana/Marengo|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010104545454545414545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 dyN0 11z0 6fd0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/Indiana/Petersburg|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010104010101010101010101010141014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 3Fb0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/Indiana/Tell_City|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010401054541010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 8wn0 1cN0 1cL0 1cN0 1cK0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/Indiana/Vevay|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010102304545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 kPB0 Awn0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/Indiana/Vincennes|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/Indiana/Winamac|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010101010454541054545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/Inuvik|-00 PST PDDT MST MDT|0 80 60 70 60|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-FnA0 tWU0 1fA0 wPe0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|35e2","America/Iqaluit|-00 EWT EPT EST EDDT EDT CST CDT|0 40 40 50 30 40 60 50|01234353535353535353535353535353535353535353567353535353535353535353535353535353535353535353535353535353535353535353535353|-16K00 7nX0 iv0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|67e2","America/Jamaica|KMT EST EDT|57.a 50 40|0121212121212121212121|-2l1uQ.O 2uM1Q.O 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0|94e4","America/Juneau|PST PWT PPT PDT YDT YST AKST AKDT|80 70 70 70 80 90 90 80|01203030303030303030303030403030356767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|33e3","America/Kentucky/Louisville|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101010102301010101010101010101010101454545454545414545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 3Fd0 Nb0 LPd0 11z0 RB0 8x30 iw0 1nX1 e0X 9vd0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 xz0 gso0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/Kentucky/Monticello|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 SWp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/La_Paz|CMT BST -04|4w.A 3w.A 40|012|-1x37r.o 13b0|19e5","America/Lima|LMT -05 -04|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0|11e6","America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp1 1VaX 3dA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6","America/Maceio|LMT -03 -02|2m.Q 30 20|012121212121212121212121212121212121212121|-2glxB.8 HdLB.8 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0|93e4","America/Managua|MMT CST EST CDT|5J.c 60 50 50|0121313121213131|-1quie.M 1yAMe.M 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0|22e5","America/Manaus|LMT -04 -03|40.4 40 30|01212121212121212121212121212121|-2glvX.U HdKX.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0|19e5","America/Martinique|FFMT AST ADT|44.k 40 30|0121|-2mPTT.E 2LPbT.E 19X0|39e4","America/Matamoros|LMT CST CDT|6E 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|45e4","America/Mazatlan|LMT MST CST PST MDT|75.E 70 60 80 60|0121212131414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|44e4","America/Menominee|CST CDT CWT CPT EST|60 50 50 50 50|01010230101041010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 LCN0 1fz0 6410 9Jb0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|85e2","America/Merida|LMT CST EST CDT|5W.s 60 50 50|0121313131313131313131313131313131313131313131313131313131313131313131313131313131313131|-1UQG0 2q2o0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|11e5","America/Metlakatla|PST PWT PPT PDT AKST AKDT|80 70 70 70 90 80|01203030303030303030303030303030304545450454545454545454545454545454545454545454|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1hU10 Rd0 1zb0 Op0 1zb0 Op0 1zb0 uM0 jB0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2","America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6","America/Miquelon|LMT AST -03 -02|3I.E 40 30 20|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2mKkf.k 2LTAf.k gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2","America/Moncton|EST AST ADT AWT APT|50 40 30 30 30|012121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsH0 CwN0 1in0 zAo0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1K10 Lz0 1zB0 NX0 1u10 Wn0 S20 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|64e3","America/Monterrey|LMT CST CDT|6F.g 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|41e5","America/Montevideo|LMT MMT -04 -03 -0330 -0230 -02 -0130|3I.P 3I.P 40 30 3u 2u 20 1u|012343434343434343434343435353636353636375363636363636363636363636363636363636363636363|-2tRUf.9 sVc0 8jcf.9 1db0 1dcu 1cLu 1dcu 1cLu ircu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu WLu 1fAu 1cLu 1o0u 11zu NAu 3jXu zXu Dq0u 19Xu pcu jz0 cm10 19X0 6tB0 1fbu 3o0u jX0 4vB0 xz0 3Cp0 mmu 1a10 IMu Db0 4c10 uL0 1Nd0 An0 1SN0 uL0 mp0 28L0 iPB0 un0 1SN0 xz0 1zd0 Lz0 1zd0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5","America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e5","America/Nassau|LMT EST EDT|59.u 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2kNuO.u 26XdO.u 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|24e4","America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6","America/Nipigon|EST EDT EWT EPT|50 40 40 40|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 Rnb0 3je0 8x40 iv0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|16e2","America/Nome|NST NWT NPT BST BDT YST AKST AKDT|b0 a0 a0 b0 a0 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|38e2","America/Noronha|LMT -02 -01|29.E 20 10|0121212121212121212121212121212121212121|-2glxO.k HdKO.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|30e2","America/North_Dakota/Beulah|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/North_Dakota/Center|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/North_Dakota/New_Salem|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/Ojinaga|LMT MST CST CDT MDT|6V.E 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3","America/Pangnirtung|-00 AST AWT APT ADDT ADT EDT EST CST CDT|0 40 30 30 20 30 40 50 60 50|012314151515151515151515151515151515167676767689767676767676767676767676767676767676767676767676767676767676767676767676767|-1XiM0 PnG0 8x50 iu0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2","America/Paramaribo|LMT PMT PMT -0330 -03|3E.E 3E.Q 3E.A 3u 30|01234|-2nDUj.k Wqo0.c qanX.I 1yVXN.o|24e4","America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0|42e5","America/Port-au-Prince|PPMT EST EDT|4N 50 40|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-28RHb 2FnMb 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5","America/Rio_Branco|LMT -05 -04|4v.c 50 40|01212121212121212121212121212121|-2glvs.M HdLs.M 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0|31e4","America/Porto_Velho|LMT -04 -03|4f.A 40 30|012121212121212121212121212121|-2glvI.o HdKI.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|37e4","America/Puerto_Rico|AST AWT APT|40 30 30|0120|-17lU0 7XT0 iu0|24e5","America/Punta_Arenas|SMT -05 -04 -03|4G.K 50 40 30|0102021212121212121232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 blz0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|","America/Rainy_River|CST CDT CWT CPT|60 50 50 50|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TQ0 1in0 Rnb0 3je0 8x30 iw0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|842","America/Rankin_Inlet|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313131313131313131313131313131313131313131313131313131313131313131|-vDc0 keu0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e2","America/Recife|LMT -03 -02|2j.A 30 20|0121212121212121212121212121212121212121|-2glxE.o HdLE.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|33e5","America/Regina|LMT MST MDT MWT MPT CST|6W.A 70 60 60 60 60|012121212121212121212121341212121212121212121212121215|-2AD51.o uHe1.o 1in0 s2L0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 66N0 1cL0 1cN0 19X0 1fB0 1cL0 1fB0 1cL0 1cN0 1cL0 M30 8x20 ix0 1ip0 1cL0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 3NB0 1cL0 1cN0|19e4","America/Resolute|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313431313131313131313131313131313131313131313131313131313131313131|-SnA0 GWS0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|229","America/Santarem|LMT -04 -03|3C.M 40 30|0121212121212121212121212121212|-2glwl.c HdLl.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0|21e4","America/Santiago|SMT -05 -04 -03|4G.K 50 40 30|010202121212121212321232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9Bz0 jb0 1oN0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0|62e5","America/Santo_Domingo|SDMT EST EDT -0430 AST|4E 50 40 4u 40|01213131313131414|-1ttjk 1lJMk Mn0 6sp0 Lbu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00|29e5","America/Sao_Paulo|LMT -03 -02|36.s 30 20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|20e6","America/Scoresbysund|LMT -02 -01 +00|1r.Q 20 10 0|0121323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2a5Ww.8 2z5ew.8 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452","America/Sitka|PST PWT PPT PDT YST AKST AKDT|80 70 70 70 90 90 80|01203030303030303030303030303030345656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|90e2","America/St_Johns|NST NDT NST NDT NWT NPT NDDT|3u.Q 2u.Q 3u 2u 2u 2u 1u|01010101010101010101010101010101010102323232323232324523232323232323232323232323232323232323232323232323232323232323232323232323232323232326232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28oit.8 14L0 1nB0 1in0 1gm0 Dz0 1JB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1fB0 19X0 1fB0 19X0 10O0 eKX.8 19X0 1iq0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4","America/Swift_Current|LMT MST MDT MWT MPT CST|7b.k 70 60 60 60 60|012134121212121212121215|-2AD4M.E uHdM.E 1in0 UGp0 8x20 ix0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 isN0 1cL0 3Cp0 1cL0 1cN0 11z0 1qN0 WL0 pMp0|16e3","America/Tegucigalpa|LMT CST CDT|5M.Q 60 50|01212121|-1WGGb.8 2ETcb.8 WL0 1qN0 WL0 GRd0 AL0|11e5","America/Thule|LMT AST ADT|4z.8 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5To.Q 31NBo.Q 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|656","America/Thunder_Bay|CST EST EWT EPT EDT|60 50 40 40 40|0123141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2q5S0 1iaN0 8x40 iv0 XNB0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4","America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5","America/Whitehorse|YST YDT YWT YPT YDDT PST PDT MST|90 80 80 80 70 80 70 70|01010230405656565656565656565656565656565656565656565656565656565656565656565656565656565657|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 3NA0 vrd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|23e3","America/Winnipeg|CST CDT CWT CPT|60 50 50 50|010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aIi0 WL0 3ND0 1in0 Jap0 Rb0 aCN0 8x30 iw0 1tB0 11z0 1ip0 11z0 1o10 11z0 1o10 11z0 1rd0 10L0 1op0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 1cL0 1cN0 11z0 6i10 WL0 6i10 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|66e4","America/Yakutat|YST YWT YPT YDT AKST AKDT|90 80 80 80 90 80|01203030303030303030303030303030304545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-17T10 8x00 iz0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|642","America/Yellowknife|-00 MST MWT MPT MDDT MDT|0 70 60 60 50 60|012314151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151|-1pdA0 hix0 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3","Antarctica/Casey|-00 +08 +11|0 -80 -b0|01212121|-2q00 1DjS0 T90 40P0 KL0 blz0 3m10|10","Antarctica/Davis|-00 +07 +05|0 -70 -50|01012121|-vyo0 iXt0 alj0 1D7v0 VB0 3Wn0 KN0|70","Antarctica/DumontDUrville|-00 +10|0 -a0|0101|-U0o0 cfq0 bFm0|80","Antarctica/Macquarie|AEST AEDT -00 +11|-a0 -b0 0 -b0|0102010101010101010101010101010101010101010101010101010101010101010101010101010101010101013|-29E80 19X0 4SL0 1ayy0 Lvs0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0|1","Antarctica/Mawson|-00 +06 +05|0 -60 -50|012|-CEo0 2fyk0|60","Pacific/Auckland|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5","Antarctica/Palmer|-00 -03 -04 -02|0 30 40 20|0121212121213121212121212121212121212121212121212121212121212121212121212121212121|-cao0 nD0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40","Antarctica/Rothera|-00 -03|0 30|01|gOo0|130","Antarctica/Syowa|-00 +03|0 -30|01|-vs00|20","Antarctica/Troll|-00 +00 +02|0 0 -20|01212121212121212121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40","Antarctica/Vostok|-00 +06|0 -60|01|-tjA0|25","Europe/Oslo|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2awM0 Qm0 W6o0 5pf0 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 wJc0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1qM0 WM0 zpc0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e4","Asia/Riyadh|LMT +03|-36.Q -30|01|-TvD6.Q|57e5","Asia/Almaty|LMT +05 +06 +07|-57.M -50 -60 -70|012323232323232323232321232323232323232323232323232|-1Pc57.M eUo7.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|15e5","Asia/Amman|LMT EET EEST|-2n.I -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1yW2n.I 1HiMn.I KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e5","Asia/Anadyr|LMT +12 +13 +14 +11|-bN.U -c0 -d0 -e0 -b0|01232121212121212121214121212121212121212121212121212121212141|-1PcbN.U eUnN.U 23CL0 1db0 2q10 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|13e3","Asia/Aqtau|LMT +04 +05 +06|-3l.4 -40 -50 -60|012323232323232323232123232312121212121212121212|-1Pc3l.4 eUnl.4 24PX0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|15e4","Asia/Aqtobe|LMT +04 +05 +06|-3M.E -40 -50 -60|0123232323232323232321232323232323232323232323232|-1Pc3M.E eUnM.E 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|27e4","Asia/Ashgabat|LMT +04 +05 +06|-3R.w -40 -50 -60|0123232323232323232323212|-1Pc3R.w eUnR.w 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0|41e4","Asia/Atyrau|LMT +03 +05 +06 +04|-3r.I -30 -50 -60 -40|01232323232323232323242323232323232324242424242|-1Pc3r.I eUor.I 24PW0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 2sp0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|","Asia/Baghdad|BMT +03 +04|-2V.A -30 -40|012121212121212121212121212121212121212121212121212121|-26BeV.A 2ACnV.A 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0|66e5","Asia/Qatar|LMT +04 +03|-3q.8 -40 -30|012|-21Jfq.8 27BXq.8|96e4","Asia/Baku|LMT +03 +04 +05|-3j.o -30 -40 -50|01232323232323232323232123232323232323232323232323232323232323232|-1Pc3j.o 1jUoj.o WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 9Je0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5","Asia/Bangkok|BMT +07|-6G.4 -70|01|-218SG.4|15e6","Asia/Barnaul|LMT +06 +07 +08|-5z -60 -70 -80|0123232323232323232323212323232321212121212121212121212121212121212|-21S5z pCnz 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 p90 LE0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|","Asia/Beirut|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-21aq0 1on0 1410 1db0 19B0 1in0 1ip0 WL0 1lQp0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 q6N0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5","Asia/Bishkek|LMT +05 +06 +07|-4W.o -50 -60 -70|012323232323232323232321212121212121212121212121212|-1Pc4W.o eUnW.o 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2e00 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0|87e4","Asia/Brunei|LMT +0730 +08|-7D.E -7u -80|012|-1KITD.E gDc9.E|42e4","Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6","Asia/Chita|LMT +08 +09 +10|-7x.Q -80 -90 -a0|012323232323232323232321232323232323232323232323232323232323232312|-21Q7x.Q pAnx.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3re0|33e4","Asia/Choibalsan|LMT +07 +08 +10 +09|-7C -70 -80 -a0 -90|0123434343434343434343434343434343434343434343424242|-2APHC 2UkoC cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0 h1f0 1cJ0 1cP0 1cJ0|38e3","Asia/Shanghai|CST CDT|-80 -90|01010101010101010101010101010|-23uw0 18n0 OjB0 Rz0 11d0 1wL0 A10 8HX0 1G10 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 aL0 1tU30 Rb0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6","Asia/Colombo|MMT +0530 +06 +0630|-5j.w -5u -60 -6u|01231321|-2zOtj.w 1rFbN.w 1zzu 7Apu 23dz0 11zu n3cu|22e5","Asia/Dhaka|HMT +0630 +0530 +06 +07|-5R.k -6u -5u -60 -70|0121343|-18LFR.k 1unn.k HB0 m6n0 2kxbu 1i00|16e6","Asia/Damascus|LMT EET EEST|-2p.c -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-21Jep.c Hep.c 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1xRB0 11X0 1oN0 10L0 1pB0 11b0 1oN0 10L0 1mp0 13X0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|26e5","Asia/Dili|LMT +08 +09|-8m.k -80 -90|01212|-2le8m.k 1dnXm.k 1nfA0 Xld0|19e4","Asia/Dubai|LMT +04|-3F.c -40|01|-21JfF.c|39e5","Asia/Dushanbe|LMT +05 +06 +07|-4z.c -50 -60 -70|012323232323232323232321|-1Pc4z.c eUnz.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2hB0|76e4","Asia/Famagusta|LMT EET EEST +03|-2f.M -20 -30 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212312121212121212121212121212121212121212121|-1Vc2f.M 2a3cf.M 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|","Asia/Gaza|EET EEST IST IDT|-20 -30 -20 -30|0101010101010101010101010101010123232323232323232323232323232320101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0|18e5","Asia/Hebron|EET EEST IST IDT|-20 -30 -20 -30|010101010101010101010101010101012323232323232323232323232323232010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0|25e4","Asia/Ho_Chi_Minh|LMT PLMT +07 +08 +09|-76.E -76.u -70 -80 -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0|90e5","Asia/Hong_Kong|LMT HKT HKST HKWT JST|-7A.G -80 -90 -8u -90|0123412121212121212121212121212121212121212121212121212121212121212121|-2CFH0 1taO0 Hc0 xUu 9tBu 11z0 1tDu Rc0 1wo0 11A0 1cM0 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|73e5","Asia/Hovd|LMT +06 +07 +08|-66.A -60 -70 -80|012323232323232323232323232323232323232323232323232|-2APG6.A 2Uko6.A cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|81e3","Asia/Irkutsk|IMT +07 +08 +09|-6V.5 -70 -80 -90|01232323232323232323232123232323232323232323232323232323232323232|-21zGV.5 pjXV.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4","Europe/Istanbul|IMT EET EEST +03 +04|-1U.U -20 -30 -30 -40|0121212121212121212121212121212121212121212121234312121212121212121212121212121212121212121212121212121212121212123|-2ogNU.U dzzU.U 11b0 8tB0 1on0 1410 1db0 19B0 1in0 3Rd0 Un0 1oN0 11b0 zSN0 CL0 mp0 1Vz0 1gN0 8yn0 1yp0 ML0 1kp0 17b0 1ip0 17b0 1fB0 19X0 1ip0 19X0 1ip0 17b0 qdB0 38L0 1jd0 Tz0 l6O0 11A0 WN0 1qL0 TB0 1tX0 U10 1tz0 11B0 1in0 17d0 z90 cne0 pb0 2Cp0 1800 14o0 1dc0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1a00 1fA0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6","Asia/Jakarta|BMT +0720 +0730 +09 +08 WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu|31e6","Asia/Jayapura|LMT +09 +0930 WIT|-9m.M -90 -9u -90|0123|-1uu9m.M sMMm.M L4nu|26e4","Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|012121212121321212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4","Asia/Kabul|+04 +0430|-40 -4u|01|-10Qs0|46e5","Asia/Kamchatka|LMT +11 +12 +13|-ay.A -b0 -c0 -d0|012323232323232323232321232323232323232323232323232323232323212|-1SLKy.A ivXy.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|18e4","Asia/Karachi|LMT +0530 +0630 +05 PKT PKST|-4s.c -5u -6u -50 -50 -60|012134545454|-2xoss.c 1qOKW.c 7zX0 eup0 LqMu 1fy00 1cL0 dK10 11b0 1610 1jX0|24e6","Asia/Urumqi|LMT +06|-5O.k -60|01|-1GgtO.k|32e5","Asia/Kathmandu|LMT +0530 +0545|-5F.g -5u -5J|012|-21JhF.g 2EGMb.g|12e5","Asia/Khandyga|LMT +08 +09 +10 +11|-92.d -80 -90 -a0 -b0|0123232323232323232323212323232323232323232323232343434343434343432|-21Q92.d pAp2.d 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|66e2","Asia/Krasnoyarsk|LMT +06 +07 +08|-6b.q -60 -70 -80|01232323232323232323232123232323232323232323232323232323232323232|-21Hib.q prAb.q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5","Asia/Kuala_Lumpur|SMT +07 +0720 +0730 +09 +08|-6T.p -70 -7k -7u -90 -80|0123435|-2Bg6T.p 17anT.p l5XE 17bO 8Fyu 1so1u|71e5","Asia/Kuching|LMT +0730 +08 +0820 +09|-7l.k -7u -80 -8k -90|0123232323232323242|-1KITl.k gDbP.k 6ynu AnE 1O0k AnE 1NAk AnE 1NAk AnE 1NAk AnE 1O0k AnE 1NAk AnE pAk 8Fz0|13e4","Asia/Macau|LMT CST +09 +10 CDT|-7y.a -80 -90 -a0 -90|012323214141414141414141414141414141414141414141414141414141414141414141|-2CFHy.a 1uqKy.a PX0 1kn0 15B0 11b0 4Qq0 1oM0 11c0 1ko0 1u00 11A0 1cM0 11c0 1o00 11A0 1o00 11A0 1oo0 1400 1o00 11A0 1o00 U00 1tA0 U00 1wo0 Rc0 1wru U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cK0 1cO0 1cK0 1cO0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|57e4","Asia/Magadan|LMT +10 +11 +12|-a3.c -a0 -b0 -c0|012323232323232323232321232323232323232323232323232323232323232312|-1Pca3.c eUo3.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Cq0|95e3","Asia/Makassar|LMT MMT +08 +09 WITA|-7V.A -7V.A -80 -90 -80|01234|-21JjV.A vfc0 myLV.A 8ML0|15e5","Asia/Manila|PST PDT JST|-80 -90 -90|010201010|-1kJI0 AL0 cK10 65X0 mXB0 vX0 VK10 1db0|24e6","Asia/Nicosia|LMT EET EEST|-2d.s -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Vc2d.s 2a3cd.s 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|32e4","Asia/Novokuznetsk|LMT +06 +07 +08|-5M.M -60 -70 -80|012323232323232323232321232323232323232323232323232323232323212|-1PctM.M eULM.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|55e4","Asia/Novosibirsk|LMT +06 +07 +08|-5v.E -60 -70 -80|0123232323232323232323212323212121212121212121212121212121212121212|-21Qnv.E pAFv.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 4eN0|15e5","Asia/Omsk|LMT +05 +06 +07|-4R.u -50 -60 -70|01232323232323232323232123232323232323232323232323232323232323232|-224sR.u pMLR.u 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|12e5","Asia/Oral|LMT +03 +05 +06 +04|-3p.o -30 -50 -60 -40|01232323232323232424242424242424242424242424242|-1Pc3p.o eUop.o 23CK0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 1cM0 IM0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|27e4","Asia/Pontianak|LMT PMT +0730 +09 +08 WITA WIB|-7h.k -7h.k -7u -90 -80 -80 -70|012324256|-2ua7h.k XE00 munL.k 8Rau 6kpu 4PXu xhcu Wqnu|23e4","Asia/Pyongyang|LMT KST JST KST|-8n -8u -90 -90|012313|-2um8n 97XR 1lTzu 2Onc0 6BA0|29e5","Asia/Qostanay|LMT +04 +05 +06|-4e.s -40 -50 -60|012323232323232323232123232323232323232323232323|-1Pc4e.s eUoe.s 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|","Asia/Qyzylorda|LMT +04 +05 +06|-4l.Q -40 -50 -60|01232323232323232323232323232323232323232323232|-1Pc4l.Q eUol.Q 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3ao0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 zQl0|73e4","Asia/Rangoon|RMT +0630 +09|-6o.L -6u -90|0121|-21Jio.L SmnS.L 7j9u|48e5","Asia/Sakhalin|LMT +09 +11 +12 +10|-9u.M -90 -b0 -c0 -a0|01232323232323232323232423232323232424242424242424242424242424242|-2AGVu.M 1BoMu.M 1qFa0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 2pB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|58e4","Asia/Samarkand|LMT +04 +05 +06|-4r.R -40 -50 -60|01232323232323232323232|-1Pc4r.R eUor.R 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|36e4","Asia/Seoul|LMT KST JST KST KDT KDT|-8r.Q -8u -90 -90 -a0 -9u|012343434343151515151515134343|-2um8r.Q 97XV.Q 1m1zu 6CM0 Fz0 1kN0 14n0 1kN0 14L0 1zd0 On0 69B0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0|23e6","Asia/Srednekolymsk|LMT +10 +11 +12|-ae.Q -a0 -b0 -c0|01232323232323232323232123232323232323232323232323232323232323232|-1Pcae.Q eUoe.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|35e2","Asia/Taipei|CST JST CDT|-80 -90 -90|01020202020202020202020202020202020202020|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0|74e5","Asia/Tashkent|LMT +05 +06 +07|-4B.b -50 -60 -70|012323232323232323232321|-1Pc4B.b eUnB.b 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0|23e5","Asia/Tbilisi|TBMT +03 +04 +05|-2X.b -30 -40 -50|0123232323232323232323212121232323232323232323212|-1Pc2X.b 1jUnX.b WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cK0 1cL0 1cN0 1cL0 1cN0 2pz0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0|11e5","Asia/Tehran|LMT TMT +0330 +04 +05 +0430|-3p.I -3p.I -3u -40 -50 -4u|01234325252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2btDp.I 1d3c0 1huLT.I TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6","Asia/Thimphu|LMT +0530 +06|-5W.A -5u -60|012|-Su5W.A 1BGMs.A|79e3","Asia/Tokyo|JST JDT|-90 -a0|010101010|-QJJ0 Rc0 1lc0 14o0 1zc0 Oo0 1zc0 Oo0|38e6","Asia/Tomsk|LMT +06 +07 +08|-5D.P -60 -70 -80|0123232323232323232323212323232323232323232323212121212121212121212|-21NhD.P pxzD.P 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 co0 1bB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Qp0|10e5","Asia/Ulaanbaatar|LMT +07 +08 +09|-77.w -70 -80 -90|012323232323232323232323232323232323232323232323232|-2APH7.w 2Uko7.w cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|12e5","Asia/Ust-Nera|LMT +08 +09 +12 +11 +10|-9w.S -80 -90 -c0 -b0 -a0|012343434343434343434345434343434343434343434343434343434343434345|-21Q9w.S pApw.S 23CL0 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|65e2","Asia/Vladivostok|LMT +09 +10 +11|-8L.v -90 -a0 -b0|01232323232323232323232123232323232323232323232323232323232323232|-1SJIL.v itXL.v 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4","Asia/Yakutsk|LMT +08 +09 +10|-8C.W -80 -90 -a0|01232323232323232323232123232323232323232323232323232323232323232|-21Q8C.W pAoC.W 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|28e4","Asia/Yekaterinburg|LMT PMT +04 +05 +06|-42.x -3J.5 -40 -50 -60|012343434343434343434343234343434343434343434343434343434343434343|-2ag42.x 7mQh.s qBvJ.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|14e5","Asia/Yerevan|LMT +03 +04 +05|-2W -30 -40 -50|0123232323232323232323212121212323232323232323232323232323232|-1Pc2W 1jUnW WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 4RX0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|13e5","Atlantic/Azores|HMT -02 -01 +00 WET|1S.w 20 10 0 0|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121232323232323232323232323232323234323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2ldW0 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4","Atlantic/Bermuda|LMT AST ADT|4j.i 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1BnRE.G 1LTbE.G 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e3","Atlantic/Canary|LMT -01 WET WEST|11.A 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UtaW.o XPAW.o 1lAK0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4","Atlantic/Cape_Verde|LMT -02 -01|1y.4 20 10|01212|-2ldW0 1eEo0 7zX0 1djf0|50e4","Atlantic/Faroe|LMT WET WEST|r.4 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2uSnw.U 2Wgow.U 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|49e3","Atlantic/Madeira|FMT -01 +00 +01 WET WEST|17.A 10 0 -10 0 -10|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldX0 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e4","Atlantic/Reykjavik|LMT -01 +00 GMT|1s 10 0 0|012121212121212121212121212121212121212121212121212121212121212121213|-2uWmw mfaw 1Bd0 ML0 1LB0 Cn0 1LB0 3fX0 C10 HrX0 1cO0 LB0 1EL0 LA0 1C00 Oo0 1wo0 Rc0 1wo0 Rc0 1wo0 Rc0 1zc0 Oo0 1zc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0|12e4","Atlantic/South_Georgia|-02|20|0||30","Atlantic/Stanley|SMT -04 -03 -02|3P.o 40 30 20|012121212121212323212121212121212121212121212121212121212121212121212|-2kJw8.A 12bA8.A 19X0 1fB0 19X0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 Cn0 1Cc10 WL0 1qL0 U10 1tz0 2mN0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10|21e2","Australia/Sydney|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5","Australia/Adelaide|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5","Australia/Brisbane|AEST AEDT|-a0 -b0|01010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0|20e5","Australia/Broken_Hill|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|18e3","Australia/Currie|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|746","Australia/Darwin|ACST ACDT|-9u -au|010101010|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0|12e4","Australia/Eucla|+0845 +0945|-8J -9J|0101010101010101010|-293kI xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|368","Australia/Hobart|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 VfB0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|21e4","Australia/Lord_Howe|AEST +1030 +1130 +11|-a0 -au -bu -b0|0121212121313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347","Australia/Lindeman|AEST AEDT|-a0 -b0|010101010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0|10","Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|39e5","Australia/Perth|AWST AWDT|-80 -90|0101010101010101010|-293jX xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|18e5","CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|","Pacific/Easter|EMT -07 -06 -05|7h.s 70 60 50|012121212121212121212121212123232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1uSgG.w 1s4IG.w WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 2pA0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0|30e2","CST6CDT|CST CDT CWT CPT|60 50 50 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","EET|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|","Europe/Dublin|DMT IST GMT BST IST|p.l -y.D 0 -10 -10|01232323232324242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242|-2ax9y.D Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g600 14o0 1wo0 17c0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","EST|EST|50|0||","EST5EDT|EST EDT EWT EPT|50 40 40 40|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 SgN0 8x40 iv0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","Etc/GMT-0|GMT|0|0||","Etc/GMT-1|+01|-10|0||","Pacific/Port_Moresby|+10|-a0|0||25e4","Etc/GMT-11|+11|-b0|0||","Pacific/Tarawa|+12|-c0|0||29e3","Etc/GMT-13|+13|-d0|0||","Etc/GMT-14|+14|-e0|0||","Etc/GMT-2|+02|-20|0||","Etc/GMT-3|+03|-30|0||","Etc/GMT-4|+04|-40|0||","Etc/GMT-5|+05|-50|0||","Etc/GMT-6|+06|-60|0||","Indian/Christmas|+07|-70|0||21e2","Etc/GMT-8|+08|-80|0||","Pacific/Palau|+09|-90|0||21e3","Etc/GMT+1|-01|10|0||","Etc/GMT+10|-10|a0|0||","Etc/GMT+11|-11|b0|0||","Etc/GMT+12|-12|c0|0||","Etc/GMT+3|-03|30|0||","Etc/GMT+4|-04|40|0||","Etc/GMT+5|-05|50|0||","Etc/GMT+6|-06|60|0||","Etc/GMT+7|-07|70|0||","Etc/GMT+8|-08|80|0||","Etc/GMT+9|-09|90|0||","Etc/UTC|UTC|0|0||","Europe/Amsterdam|AMT NST +0120 +0020 CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|16e5","Europe/Andorra|WET CET CEST|0 -10 -20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-UBA0 1xIN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|79e3","Europe/Astrakhan|LMT +03 +04 +05|-3c.c -30 -40 -50|012323232323232323212121212121212121212121212121212121212121212|-1Pcrc.c eUMc.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|10e5","Europe/Athens|AMT EET EEST CEST CET|-1y.Q -20 -30 -20 -10|012123434121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a61x.Q CNbx.Q mn0 kU10 9b0 3Es0 Xa0 1fb0 1dd0 k3X0 Nz0 SCp0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5","Europe/London|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6","Europe/Belgrade|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19RC0 3IP0 WM0 1fA0 1cM0 1cM0 1rc0 Qo0 1vmo0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e5","Europe/Prague|CET CEST GMT|-10 -20 0|01010101010101010201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 1qM0 11c0 mp0 xA0 mn0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|13e5","Europe/Brussels|WET CET CEST WEST|0 -10 -20 -10|0121212103030303030303030303030303030303030303030303212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ehc0 3zX0 11c0 1iO0 11A0 1o00 11A0 my0 Ic0 1qM0 Rc0 1EM0 UM0 1u00 10o0 1io0 1io0 17c0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a30 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 y00 5Wn0 WM0 1fA0 1cM0 16M0 1iM0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|21e5","Europe/Bucharest|BMT EET EEST|-1I.o -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1xApI.o 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Axc0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|19e5","Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1ip0 17b0 1op0 1tb0 Q2m0 3Ne0 WM0 1fA0 1cM0 1cM0 1oJ0 1dc0 1030 1fA0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1iM0 1fA0 8Ha0 Rb0 1wN0 Rb0 1BB0 Lz0 1C20 LB0 SNX0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5","Europe/Zurich|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19Lc0 11A0 1o00 11A0 1xG10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e4","Europe/Chisinau|CMT BMT EET EEST CEST CET MSK MSD|-1T -1I.o -20 -30 -20 -10 -30 -40|012323232323232323234545467676767676767676767323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-26jdT wGMa.A 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 27A0 2en0 39g0 WM0 1fA0 1cM0 V90 1t7z0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 gL0 WO0 1cM0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11D0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4","Europe/Copenhagen|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 Tz0 VuO0 60q0 WM0 1fA0 1cM0 1cM0 1cM0 S00 1HA0 Nc0 1C00 Dc0 1Nc0 Ao0 1h5A0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Gibraltar|GMT BST BDST CET CEST|0 -10 -20 -10 -20|010101010101010101010101010101010101010101010101012121212121010121010101010101010101034343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 10Jz0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|30e3","Europe/Helsinki|HMT EET EEST|-1D.N -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1WuND.N OULD.N 1dA0 1xGq0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Kaliningrad|CET CEST EET EEST MSK MSD +03|-10 -20 -20 -30 -30 -40 -30|01010101010101232454545454545454543232323232323232323232323232323232323232323262|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 390 7A0 1en0 12N0 1pbb0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|44e4","Europe/Kiev|KMT EET MSK CEST CET MSD EEST|-22.4 -20 -30 -20 -10 -40 -30|0123434252525252525252525256161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc22.4 eUo2.4 rnz0 2Hg0 WM0 1fA0 da0 1v4m0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|34e5","Europe/Kirov|LMT +03 +04 +05|-3i.M -30 -40 -50|01232323232323232321212121212121212121212121212121212121212121|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|48e4","Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2le00 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5","Europe/Luxembourg|LMT CET CEST WET WEST WEST WET|-o.A -10 -20 0 -10 -20 -10|0121212134343434343434343434343434343434343434343434565651212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2DG0o.A t6mo.A TB0 1nX0 Up0 1o20 11A0 rW0 CM0 1qP0 R90 1EO0 UK0 1u20 10m0 1ip0 1in0 17e0 19W0 1fB0 1db0 1cp0 1in0 17d0 1fz0 1a10 1in0 1a10 1in0 17f0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 vA0 60L0 WM0 1fA0 1cM0 17c0 1io0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4","Europe/Madrid|WET WEST WEMT CET CEST|0 -10 -20 -10 -20|010101010101010101210343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-25Td0 19B0 1cL0 1dd0 b1z0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1in0 17d0 iIn0 Hd0 1cL0 bb0 1200 2s20 14n0 5aL0 Mp0 1vz0 17d0 1in0 17d0 1in0 17d0 1in0 17d0 6hX0 11B0 XHX0 1a10 1fz0 1a10 19X0 1cN0 1fz0 1a10 1fC0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e5","Europe/Malta|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1co0 17c0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1co0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4","Europe/Minsk|MMT EET MSK CEST CET MSD EEST +03|-1O -20 -30 -20 -10 -40 -30 -30|01234343252525252525252525261616161616161616161616161616161616161617|-1Pc1O eUnO qNX0 3gQ0 WM0 1fA0 1cM0 Al0 1tsn0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0|19e5","Europe/Monaco|PMT WET WEST WEMT CET CEST|-9.l 0 -10 -20 -10 -20|01212121212121212121212121212121212121212121212121232323232345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 2RV0 11z0 11B0 1ze0 WM0 1fA0 1cM0 1fa0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e3","Europe/Moscow|MMT MMT MST MDST MSD MSK +05 EET EEST MSK|-2u.h -2v.j -3v.j -4v.j -40 -30 -50 -20 -30 -40|012132345464575454545454545454545458754545454545454545454545454545454545454595|-2ag2u.h 2pyW.W 1bA0 11X0 GN0 1Hb0 c4v.j ik0 3DA0 dz0 15A0 c10 2q10 iM10 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|16e6","Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6","Europe/Riga|RMT LST EET MSK CEST CET MSD EEST|-1A.y -2A.y -20 -30 -20 -10 -40 -30|010102345454536363636363636363727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272|-25TzA.y 11A0 1iM0 ko0 gWm0 yDXA.y 2bX0 3fE0 WM0 1fA0 1cM0 1cM0 4m0 1sLy0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|64e4","Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1cM0 16M0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1C00 LA0 1zc0 Oo0 1C00 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|39e5","Europe/Samara|LMT +03 +04 +05|-3k.k -30 -40 -50|0123232323232323232121232323232323232323232323232323232323212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2y10 14m0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|12e5","Europe/Saratov|LMT +03 +04 +05|-34.i -30 -40 -50|012323232323232321212121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 5810|","Europe/Simferopol|SMT EET MSK CEST CET MSD EEST MSK|-2g -20 -30 -20 -10 -40 -30 -40|012343432525252525252525252161616525252616161616161616161616161616161616172|-1Pc2g eUog rEn0 2qs0 WM0 1fA0 1cM0 3V0 1u0L0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4","Europe/Sofia|EET CET CEST EEST|-20 -10 -20 -30|01212103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030|-168L0 WM0 1fA0 1cM0 1cM0 1cN0 1mKH0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Stockholm|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 TB0 2yDe0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|15e5","Europe/Tallinn|TMT CET CEST EET MSK MSD EEST|-1D -10 -20 -20 -30 -40 -30|012103421212454545454545454546363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363|-26oND teD 11A0 1Ta0 4rXl KSLD 2FX0 2Jg0 WM0 1fA0 1cM0 18J0 1sTX0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e4","Europe/Tirane|LMT CET CEST|-1j.k -10 -20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glBj.k 14pcj.k 5LC0 WM0 4M0 1fCK0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4","Europe/Ulyanovsk|LMT +03 +04 +05 +02|-3d.A -30 -40 -50 -20|01232323232323232321214121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|13e5","Europe/Uzhgorod|CET CEST MSK MSD EET EEST|-10 -20 -30 -40 -20 -30|010101023232323232323232320454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-1cqL0 6i00 WM0 1fA0 1cM0 1ml0 1Cp0 1r3W0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e4","Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 3KM0 14o0 LA00 6i00 WM0 1fA0 1cM0 1cM0 1cM0 400 2qM0 1ao0 1co0 1cM0 1io0 17c0 1gHa0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|18e5","Europe/Vilnius|WMT KMT CET EET MSK CEST MSD EEST|-1o -1z.A -10 -20 -30 -20 -40 -30|012324525254646464646464646473737373737373737352537373737373737373737373737373737373737373737373737373737373737373737373|-293do 6ILM.o 1Ooz.A zz0 Mfd0 29W0 3is0 WM0 1fA0 1cM0 LV0 1tgL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4","Europe/Volgograd|LMT +03 +04 +05|-2V.E -30 -40 -50|012323232323232321212121212121212121212121212121212121212121212|-21IqV.E psLV.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 9Jd0|10e5","Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5","Europe/Zaporozhye|+0220 EET MSK CEST CET MSD EEST|-2k -20 -30 -20 -10 -40 -30|01234342525252525252525252526161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc2k eUok rdb0 2RE0 WM0 1fA0 8m0 1v9a0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|77e4","HST|HST|a0|0||","Indian/Chagos|LMT +05 +06|-4N.E -50 -60|012|-2xosN.E 3AGLN.E|30e2","Indian/Cocos|+0630|-6u|0||596","Indian/Kerguelen|-00 +05|0 -50|01|-MG00|130","Indian/Mahe|LMT +04|-3F.M -40|01|-2yO3F.M|79e3","Indian/Maldives|MMT +05|-4S -50|01|-olgS|35e4","Indian/Mauritius|LMT +04 +05|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0|15e4","Indian/Reunion|LMT +04|-3F.Q -40|01|-2mDDF.Q|84e4","Pacific/Kwajalein|+11 +10 +09 -12 +12|-b0 -a0 -90 c0 -c0|012034|-1kln0 akp0 6Up0 12ry0 Wan0|14e3","MET|MET MEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|","MST|MST|70|0||","MST7MDT|MST MDT MWT MPT|70 60 60 60|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","Pacific/Chatham|+1215 +1245 +1345|-cf -cJ -dJ|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-WqAf 1adef IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600","Pacific/Apia|LMT -1130 -11 -10 +14 +13|bq.U bu b0 a0 -e0 -d0|01232345454545454545454545454545454545454545454545454545454|-2nDMx.4 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3","Pacific/Bougainville|+10 +09 +11|-a0 -90 -b0|0102|-16Wy0 7CN0 2MQp0|18e4","Pacific/Chuuk|+10 +09|-a0 -90|01010|-2ewy0 axB0 RVX0 axd0|49e3","Pacific/Efate|LMT +11 +12|-bd.g -b0 -c0|0121212121212121212121|-2l9nd.g 2Szcd.g 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0|66e3","Pacific/Enderbury|-12 -11 +13|c0 b0 -d0|012|nIc0 B7X0|1","Pacific/Fakaofo|-11 +13|b0 -d0|01|1Gfn0|483","Pacific/Fiji|LMT +12 +13|-bT.I -c0 -d0|0121212121212121212121212121212121212121212121212121212121212121|-2bUzT.I 3m8NT.I LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 20o0 pc0 20o0 s00 20o0 pc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 s00 1VA0 s00 20o0 pc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 s00 20o0 pc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 s00 1VA0 s00|88e4","Pacific/Galapagos|LMT -05 -06|5W.o 50 60|01212|-1yVS1.A 2dTz1.A gNd0 rz0|25e3","Pacific/Gambier|LMT -09|8X.M 90|01|-2jof0.c|125","Pacific/Guadalcanal|LMT +11|-aD.M -b0|01|-2joyD.M|11e4","Pacific/Guam|GST +09 GDT ChST|-a0 -90 -b0 -a0|01020202020202020203|-18jK0 6pB0 AhB0 3QL0 g2p0 3p91 WOX rX0 1zd0 Rb0 1wp0 Rb0 5xd0 rX0 5sN0 zb1 1C0X On0 ULb0|17e4","Pacific/Honolulu|HST HDT HWT HPT HST|au 9u 9u 9u a0|0102304|-1thLu 8x0 lef0 8wWu iAu 46p0|37e4","Pacific/Kiritimati|-1040 -10 +14|aE a0 -e0|012|nIaE B7Xk|51e2","Pacific/Kosrae|+11 +09 +10 +12|-b0 -90 -a0 -c0|01021030|-2ewz0 axC0 HBy0 akp0 axd0 WOK0 1bdz0|66e2","Pacific/Majuro|+11 +09 +10 +12|-b0 -90 -a0 -c0|0102103|-2ewz0 axC0 HBy0 akp0 6RB0 12um0|28e3","Pacific/Marquesas|LMT -0930|9i 9u|01|-2joeG|86e2","Pacific/Pago_Pago|LMT SST|bm.M b0|01|-2nDMB.c|37e2","Pacific/Nauru|LMT +1130 +09 +12|-b7.E -bu -90 -c0|01213|-1Xdn7.E QCnB.E 7mqu 1lnbu|10e3","Pacific/Niue|-1120 -1130 -11|bk bu b0|012|-KfME 17y0a|12e2","Pacific/Norfolk|+1112 +1130 +1230 +11 +12|-bc -bu -cu -b0 -c0|012134343434343434343434343434343434343434|-Kgbc W01G Oo0 1COo0 9Jcu 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|25e4","Pacific/Noumea|LMT +11 +12|-b5.M -b0 -c0|01212121|-2l9n5.M 2EqM5.M xX0 1PB0 yn0 HeP0 Ao0|98e3","Pacific/Pitcairn|-0830 -08|8u 80|01|18Vku|56","Pacific/Pohnpei|+11 +09 +10|-b0 -90 -a0|010210|-2ewz0 axC0 HBy0 akp0 axd0|34e3","Pacific/Rarotonga|-1030 -0930 -10|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu|13e3","Pacific/Tahiti|LMT -10|9W.g a0|01|-2joe1.I|18e4","Pacific/Tongatapu|+1220 +13 +14|-ck -d0 -e0|0121212121|-1aB0k 2n5dk 15A0 1wo0 xz0 1Q10 xz0 zWN0 s00|75e3","PST8PDT|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","WET|WET WEST|0 -10|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|"],"links":["Africa/Abidjan|Africa/Bamako","Africa/Abidjan|Africa/Banjul","Africa/Abidjan|Africa/Conakry","Africa/Abidjan|Africa/Dakar","Africa/Abidjan|Africa/Freetown","Africa/Abidjan|Africa/Lome","Africa/Abidjan|Africa/Nouakchott","Africa/Abidjan|Africa/Ouagadougou","Africa/Abidjan|Africa/Timbuktu","Africa/Abidjan|Atlantic/St_Helena","Africa/Cairo|Egypt","Africa/Johannesburg|Africa/Maseru","Africa/Johannesburg|Africa/Mbabane","Africa/Lagos|Africa/Bangui","Africa/Lagos|Africa/Brazzaville","Africa/Lagos|Africa/Douala","Africa/Lagos|Africa/Kinshasa","Africa/Lagos|Africa/Libreville","Africa/Lagos|Africa/Luanda","Africa/Lagos|Africa/Malabo","Africa/Lagos|Africa/Niamey","Africa/Lagos|Africa/Porto-Novo","Africa/Maputo|Africa/Blantyre","Africa/Maputo|Africa/Bujumbura","Africa/Maputo|Africa/Gaborone","Africa/Maputo|Africa/Harare","Africa/Maputo|Africa/Kigali","Africa/Maputo|Africa/Lubumbashi","Africa/Maputo|Africa/Lusaka","Africa/Nairobi|Africa/Addis_Ababa","Africa/Nairobi|Africa/Asmara","Africa/Nairobi|Africa/Asmera","Africa/Nairobi|Africa/Dar_es_Salaam","Africa/Nairobi|Africa/Djibouti","Africa/Nairobi|Africa/Kampala","Africa/Nairobi|Africa/Mogadishu","Africa/Nairobi|Indian/Antananarivo","Africa/Nairobi|Indian/Comoro","Africa/Nairobi|Indian/Mayotte","Africa/Tripoli|Libya","America/Adak|America/Atka","America/Adak|US/Aleutian","America/Anchorage|US/Alaska","America/Argentina/Buenos_Aires|America/Buenos_Aires","America/Argentina/Catamarca|America/Argentina/ComodRivadavia","America/Argentina/Catamarca|America/Catamarca","America/Argentina/Cordoba|America/Cordoba","America/Argentina/Cordoba|America/Rosario","America/Argentina/Jujuy|America/Jujuy","America/Argentina/Mendoza|America/Mendoza","America/Atikokan|America/Coral_Harbour","America/Chicago|US/Central","America/Curacao|America/Aruba","America/Curacao|America/Kralendijk","America/Curacao|America/Lower_Princes","America/Denver|America/Shiprock","America/Denver|Navajo","America/Denver|US/Mountain","America/Detroit|US/Michigan","America/Edmonton|Canada/Mountain","America/Fort_Wayne|America/Indiana/Indianapolis","America/Fort_Wayne|America/Indianapolis","America/Fort_Wayne|US/East-Indiana","America/Godthab|America/Nuuk","America/Halifax|Canada/Atlantic","America/Havana|Cuba","America/Indiana/Knox|America/Knox_IN","America/Indiana/Knox|US/Indiana-Starke","America/Jamaica|Jamaica","America/Kentucky/Louisville|America/Louisville","America/Los_Angeles|US/Pacific","America/Los_Angeles|US/Pacific-New","America/Manaus|Brazil/West","America/Mazatlan|Mexico/BajaSur","America/Mexico_City|Mexico/General","America/New_York|US/Eastern","America/Noronha|Brazil/DeNoronha","America/Panama|America/Cayman","America/Phoenix|US/Arizona","America/Port_of_Spain|America/Anguilla","America/Port_of_Spain|America/Antigua","America/Port_of_Spain|America/Dominica","America/Port_of_Spain|America/Grenada","America/Port_of_Spain|America/Guadeloupe","America/Port_of_Spain|America/Marigot","America/Port_of_Spain|America/Montserrat","America/Port_of_Spain|America/St_Barthelemy","America/Port_of_Spain|America/St_Kitts","America/Port_of_Spain|America/St_Lucia","America/Port_of_Spain|America/St_Thomas","America/Port_of_Spain|America/St_Vincent","America/Port_of_Spain|America/Tortola","America/Port_of_Spain|America/Virgin","America/Regina|Canada/Saskatchewan","America/Rio_Branco|America/Porto_Acre","America/Rio_Branco|Brazil/Acre","America/Santiago|Chile/Continental","America/Sao_Paulo|Brazil/East","America/St_Johns|Canada/Newfoundland","America/Tijuana|America/Ensenada","America/Tijuana|America/Santa_Isabel","America/Tijuana|Mexico/BajaNorte","America/Toronto|America/Montreal","America/Toronto|Canada/Eastern","America/Vancouver|Canada/Pacific","America/Whitehorse|Canada/Yukon","America/Winnipeg|Canada/Central","Asia/Ashgabat|Asia/Ashkhabad","Asia/Bangkok|Asia/Phnom_Penh","Asia/Bangkok|Asia/Vientiane","Asia/Dhaka|Asia/Dacca","Asia/Dubai|Asia/Muscat","Asia/Ho_Chi_Minh|Asia/Saigon","Asia/Hong_Kong|Hongkong","Asia/Jerusalem|Asia/Tel_Aviv","Asia/Jerusalem|Israel","Asia/Kathmandu|Asia/Katmandu","Asia/Kolkata|Asia/Calcutta","Asia/Kuala_Lumpur|Asia/Singapore","Asia/Kuala_Lumpur|Singapore","Asia/Macau|Asia/Macao","Asia/Makassar|Asia/Ujung_Pandang","Asia/Nicosia|Europe/Nicosia","Asia/Qatar|Asia/Bahrain","Asia/Rangoon|Asia/Yangon","Asia/Riyadh|Asia/Aden","Asia/Riyadh|Asia/Kuwait","Asia/Seoul|ROK","Asia/Shanghai|Asia/Chongqing","Asia/Shanghai|Asia/Chungking","Asia/Shanghai|Asia/Harbin","Asia/Shanghai|PRC","Asia/Taipei|ROC","Asia/Tehran|Iran","Asia/Thimphu|Asia/Thimbu","Asia/Tokyo|Japan","Asia/Ulaanbaatar|Asia/Ulan_Bator","Asia/Urumqi|Asia/Kashgar","Atlantic/Faroe|Atlantic/Faeroe","Atlantic/Reykjavik|Iceland","Atlantic/South_Georgia|Etc/GMT+2","Australia/Adelaide|Australia/South","Australia/Brisbane|Australia/Queensland","Australia/Broken_Hill|Australia/Yancowinna","Australia/Darwin|Australia/North","Australia/Hobart|Australia/Tasmania","Australia/Lord_Howe|Australia/LHI","Australia/Melbourne|Australia/Victoria","Australia/Perth|Australia/West","Australia/Sydney|Australia/ACT","Australia/Sydney|Australia/Canberra","Australia/Sydney|Australia/NSW","Etc/GMT-0|Etc/GMT","Etc/GMT-0|Etc/GMT+0","Etc/GMT-0|Etc/GMT0","Etc/GMT-0|Etc/Greenwich","Etc/GMT-0|GMT","Etc/GMT-0|GMT+0","Etc/GMT-0|GMT-0","Etc/GMT-0|GMT0","Etc/GMT-0|Greenwich","Etc/UTC|Etc/UCT","Etc/UTC|Etc/Universal","Etc/UTC|Etc/Zulu","Etc/UTC|UCT","Etc/UTC|UTC","Etc/UTC|Universal","Etc/UTC|Zulu","Europe/Belgrade|Europe/Ljubljana","Europe/Belgrade|Europe/Podgorica","Europe/Belgrade|Europe/Sarajevo","Europe/Belgrade|Europe/Skopje","Europe/Belgrade|Europe/Zagreb","Europe/Chisinau|Europe/Tiraspol","Europe/Dublin|Eire","Europe/Helsinki|Europe/Mariehamn","Europe/Istanbul|Asia/Istanbul","Europe/Istanbul|Turkey","Europe/Lisbon|Portugal","Europe/London|Europe/Belfast","Europe/London|Europe/Guernsey","Europe/London|Europe/Isle_of_Man","Europe/London|Europe/Jersey","Europe/London|GB","Europe/London|GB-Eire","Europe/Moscow|W-SU","Europe/Oslo|Arctic/Longyearbyen","Europe/Oslo|Atlantic/Jan_Mayen","Europe/Prague|Europe/Bratislava","Europe/Rome|Europe/San_Marino","Europe/Rome|Europe/Vatican","Europe/Warsaw|Poland","Europe/Zurich|Europe/Busingen","Europe/Zurich|Europe/Vaduz","Indian/Christmas|Etc/GMT-7","Pacific/Auckland|Antarctica/McMurdo","Pacific/Auckland|Antarctica/South_Pole","Pacific/Auckland|NZ","Pacific/Chatham|NZ-CHAT","Pacific/Chuuk|Pacific/Truk","Pacific/Chuuk|Pacific/Yap","Pacific/Easter|Chile/EasterIsland","Pacific/Guam|Pacific/Saipan","Pacific/Honolulu|Pacific/Johnston","Pacific/Honolulu|US/Hawaii","Pacific/Kwajalein|Kwajalein","Pacific/Pago_Pago|Pacific/Midway","Pacific/Pago_Pago|Pacific/Samoa","Pacific/Pago_Pago|US/Samoa","Pacific/Palau|Etc/GMT-9","Pacific/Pohnpei|Pacific/Ponape","Pacific/Port_Moresby|Etc/GMT-10","Pacific/Tarawa|Etc/GMT-12","Pacific/Tarawa|Pacific/Funafuti","Pacific/Tarawa|Pacific/Wake","Pacific/Tarawa|Pacific/Wallis"],"countries":["AD|Europe/Andorra","AE|Asia/Dubai","AF|Asia/Kabul","AG|America/Port_of_Spain America/Antigua","AI|America/Port_of_Spain America/Anguilla","AL|Europe/Tirane","AM|Asia/Yerevan","AO|Africa/Lagos Africa/Luanda","AQ|Antarctica/Casey Antarctica/Davis Antarctica/DumontDUrville Antarctica/Mawson Antarctica/Palmer Antarctica/Rothera Antarctica/Syowa Antarctica/Troll Antarctica/Vostok Pacific/Auckland Antarctica/McMurdo","AR|America/Argentina/Buenos_Aires America/Argentina/Cordoba America/Argentina/Salta America/Argentina/Jujuy America/Argentina/Tucuman America/Argentina/Catamarca America/Argentina/La_Rioja America/Argentina/San_Juan America/Argentina/Mendoza America/Argentina/San_Luis America/Argentina/Rio_Gallegos America/Argentina/Ushuaia","AS|Pacific/Pago_Pago","AT|Europe/Vienna","AU|Australia/Lord_Howe Antarctica/Macquarie Australia/Hobart Australia/Currie Australia/Melbourne Australia/Sydney Australia/Broken_Hill Australia/Brisbane Australia/Lindeman Australia/Adelaide Australia/Darwin Australia/Perth Australia/Eucla","AW|America/Curacao America/Aruba","AX|Europe/Helsinki Europe/Mariehamn","AZ|Asia/Baku","BA|Europe/Belgrade Europe/Sarajevo","BB|America/Barbados","BD|Asia/Dhaka","BE|Europe/Brussels","BF|Africa/Abidjan Africa/Ouagadougou","BG|Europe/Sofia","BH|Asia/Qatar Asia/Bahrain","BI|Africa/Maputo Africa/Bujumbura","BJ|Africa/Lagos Africa/Porto-Novo","BL|America/Port_of_Spain America/St_Barthelemy","BM|Atlantic/Bermuda","BN|Asia/Brunei","BO|America/La_Paz","BQ|America/Curacao America/Kralendijk","BR|America/Noronha America/Belem America/Fortaleza America/Recife America/Araguaina America/Maceio America/Bahia America/Sao_Paulo America/Campo_Grande America/Cuiaba America/Santarem America/Porto_Velho America/Boa_Vista America/Manaus America/Eirunepe America/Rio_Branco","BS|America/Nassau","BT|Asia/Thimphu","BW|Africa/Maputo Africa/Gaborone","BY|Europe/Minsk","BZ|America/Belize","CA|America/St_Johns America/Halifax America/Glace_Bay America/Moncton America/Goose_Bay America/Blanc-Sablon America/Toronto America/Nipigon America/Thunder_Bay America/Iqaluit America/Pangnirtung America/Atikokan America/Winnipeg America/Rainy_River America/Resolute America/Rankin_Inlet America/Regina America/Swift_Current America/Edmonton America/Cambridge_Bay America/Yellowknife America/Inuvik America/Creston America/Dawson_Creek America/Fort_Nelson America/Vancouver America/Whitehorse America/Dawson","CC|Indian/Cocos","CD|Africa/Maputo Africa/Lagos Africa/Kinshasa Africa/Lubumbashi","CF|Africa/Lagos Africa/Bangui","CG|Africa/Lagos Africa/Brazzaville","CH|Europe/Zurich","CI|Africa/Abidjan","CK|Pacific/Rarotonga","CL|America/Santiago America/Punta_Arenas Pacific/Easter","CM|Africa/Lagos Africa/Douala","CN|Asia/Shanghai Asia/Urumqi","CO|America/Bogota","CR|America/Costa_Rica","CU|America/Havana","CV|Atlantic/Cape_Verde","CW|America/Curacao","CX|Indian/Christmas","CY|Asia/Nicosia Asia/Famagusta","CZ|Europe/Prague","DE|Europe/Zurich Europe/Berlin Europe/Busingen","DJ|Africa/Nairobi Africa/Djibouti","DK|Europe/Copenhagen","DM|America/Port_of_Spain America/Dominica","DO|America/Santo_Domingo","DZ|Africa/Algiers","EC|America/Guayaquil Pacific/Galapagos","EE|Europe/Tallinn","EG|Africa/Cairo","EH|Africa/El_Aaiun","ER|Africa/Nairobi Africa/Asmara","ES|Europe/Madrid Africa/Ceuta Atlantic/Canary","ET|Africa/Nairobi Africa/Addis_Ababa","FI|Europe/Helsinki","FJ|Pacific/Fiji","FK|Atlantic/Stanley","FM|Pacific/Chuuk Pacific/Pohnpei Pacific/Kosrae","FO|Atlantic/Faroe","FR|Europe/Paris","GA|Africa/Lagos Africa/Libreville","GB|Europe/London","GD|America/Port_of_Spain America/Grenada","GE|Asia/Tbilisi","GF|America/Cayenne","GG|Europe/London Europe/Guernsey","GH|Africa/Accra","GI|Europe/Gibraltar","GL|America/Nuuk America/Danmarkshavn America/Scoresbysund America/Thule","GM|Africa/Abidjan Africa/Banjul","GN|Africa/Abidjan Africa/Conakry","GP|America/Port_of_Spain America/Guadeloupe","GQ|Africa/Lagos Africa/Malabo","GR|Europe/Athens","GS|Atlantic/South_Georgia","GT|America/Guatemala","GU|Pacific/Guam","GW|Africa/Bissau","GY|America/Guyana","HK|Asia/Hong_Kong","HN|America/Tegucigalpa","HR|Europe/Belgrade Europe/Zagreb","HT|America/Port-au-Prince","HU|Europe/Budapest","ID|Asia/Jakarta Asia/Pontianak Asia/Makassar Asia/Jayapura","IE|Europe/Dublin","IL|Asia/Jerusalem","IM|Europe/London Europe/Isle_of_Man","IN|Asia/Kolkata","IO|Indian/Chagos","IQ|Asia/Baghdad","IR|Asia/Tehran","IS|Atlantic/Reykjavik","IT|Europe/Rome","JE|Europe/London Europe/Jersey","JM|America/Jamaica","JO|Asia/Amman","JP|Asia/Tokyo","KE|Africa/Nairobi","KG|Asia/Bishkek","KH|Asia/Bangkok Asia/Phnom_Penh","KI|Pacific/Tarawa Pacific/Enderbury Pacific/Kiritimati","KM|Africa/Nairobi Indian/Comoro","KN|America/Port_of_Spain America/St_Kitts","KP|Asia/Pyongyang","KR|Asia/Seoul","KW|Asia/Riyadh Asia/Kuwait","KY|America/Panama America/Cayman","KZ|Asia/Almaty Asia/Qyzylorda Asia/Qostanay Asia/Aqtobe Asia/Aqtau Asia/Atyrau Asia/Oral","LA|Asia/Bangkok Asia/Vientiane","LB|Asia/Beirut","LC|America/Port_of_Spain America/St_Lucia","LI|Europe/Zurich Europe/Vaduz","LK|Asia/Colombo","LR|Africa/Monrovia","LS|Africa/Johannesburg Africa/Maseru","LT|Europe/Vilnius","LU|Europe/Luxembourg","LV|Europe/Riga","LY|Africa/Tripoli","MA|Africa/Casablanca","MC|Europe/Monaco","MD|Europe/Chisinau","ME|Europe/Belgrade Europe/Podgorica","MF|America/Port_of_Spain America/Marigot","MG|Africa/Nairobi Indian/Antananarivo","MH|Pacific/Majuro Pacific/Kwajalein","MK|Europe/Belgrade Europe/Skopje","ML|Africa/Abidjan Africa/Bamako","MM|Asia/Yangon","MN|Asia/Ulaanbaatar Asia/Hovd Asia/Choibalsan","MO|Asia/Macau","MP|Pacific/Guam Pacific/Saipan","MQ|America/Martinique","MR|Africa/Abidjan Africa/Nouakchott","MS|America/Port_of_Spain America/Montserrat","MT|Europe/Malta","MU|Indian/Mauritius","MV|Indian/Maldives","MW|Africa/Maputo Africa/Blantyre","MX|America/Mexico_City America/Cancun America/Merida America/Monterrey America/Matamoros America/Mazatlan America/Chihuahua America/Ojinaga America/Hermosillo America/Tijuana America/Bahia_Banderas","MY|Asia/Kuala_Lumpur Asia/Kuching","MZ|Africa/Maputo","NA|Africa/Windhoek","NC|Pacific/Noumea","NE|Africa/Lagos Africa/Niamey","NF|Pacific/Norfolk","NG|Africa/Lagos","NI|America/Managua","NL|Europe/Amsterdam","NO|Europe/Oslo","NP|Asia/Kathmandu","NR|Pacific/Nauru","NU|Pacific/Niue","NZ|Pacific/Auckland Pacific/Chatham","OM|Asia/Dubai Asia/Muscat","PA|America/Panama","PE|America/Lima","PF|Pacific/Tahiti Pacific/Marquesas Pacific/Gambier","PG|Pacific/Port_Moresby Pacific/Bougainville","PH|Asia/Manila","PK|Asia/Karachi","PL|Europe/Warsaw","PM|America/Miquelon","PN|Pacific/Pitcairn","PR|America/Puerto_Rico","PS|Asia/Gaza Asia/Hebron","PT|Europe/Lisbon Atlantic/Madeira Atlantic/Azores","PW|Pacific/Palau","PY|America/Asuncion","QA|Asia/Qatar","RE|Indian/Reunion","RO|Europe/Bucharest","RS|Europe/Belgrade","RU|Europe/Kaliningrad Europe/Moscow Europe/Simferopol Europe/Kirov Europe/Astrakhan Europe/Volgograd Europe/Saratov Europe/Ulyanovsk Europe/Samara Asia/Yekaterinburg Asia/Omsk Asia/Novosibirsk Asia/Barnaul Asia/Tomsk Asia/Novokuznetsk Asia/Krasnoyarsk Asia/Irkutsk Asia/Chita Asia/Yakutsk Asia/Khandyga Asia/Vladivostok Asia/Ust-Nera Asia/Magadan Asia/Sakhalin Asia/Srednekolymsk Asia/Kamchatka Asia/Anadyr","RW|Africa/Maputo Africa/Kigali","SA|Asia/Riyadh","SB|Pacific/Guadalcanal","SC|Indian/Mahe","SD|Africa/Khartoum","SE|Europe/Stockholm","SG|Asia/Singapore","SH|Africa/Abidjan Atlantic/St_Helena","SI|Europe/Belgrade Europe/Ljubljana","SJ|Europe/Oslo Arctic/Longyearbyen","SK|Europe/Prague Europe/Bratislava","SL|Africa/Abidjan Africa/Freetown","SM|Europe/Rome Europe/San_Marino","SN|Africa/Abidjan Africa/Dakar","SO|Africa/Nairobi Africa/Mogadishu","SR|America/Paramaribo","SS|Africa/Juba","ST|Africa/Sao_Tome","SV|America/El_Salvador","SX|America/Curacao America/Lower_Princes","SY|Asia/Damascus","SZ|Africa/Johannesburg Africa/Mbabane","TC|America/Grand_Turk","TD|Africa/Ndjamena","TF|Indian/Reunion Indian/Kerguelen","TG|Africa/Abidjan Africa/Lome","TH|Asia/Bangkok","TJ|Asia/Dushanbe","TK|Pacific/Fakaofo","TL|Asia/Dili","TM|Asia/Ashgabat","TN|Africa/Tunis","TO|Pacific/Tongatapu","TR|Europe/Istanbul","TT|America/Port_of_Spain","TV|Pacific/Funafuti","TW|Asia/Taipei","TZ|Africa/Nairobi Africa/Dar_es_Salaam","UA|Europe/Simferopol Europe/Kiev Europe/Uzhgorod Europe/Zaporozhye","UG|Africa/Nairobi Africa/Kampala","UM|Pacific/Pago_Pago Pacific/Wake Pacific/Honolulu Pacific/Midway","US|America/New_York America/Detroit America/Kentucky/Louisville America/Kentucky/Monticello America/Indiana/Indianapolis America/Indiana/Vincennes America/Indiana/Winamac America/Indiana/Marengo America/Indiana/Petersburg America/Indiana/Vevay America/Chicago America/Indiana/Tell_City America/Indiana/Knox America/Menominee America/North_Dakota/Center America/North_Dakota/New_Salem America/North_Dakota/Beulah America/Denver America/Boise America/Phoenix America/Los_Angeles America/Anchorage America/Juneau America/Sitka America/Metlakatla America/Yakutat America/Nome America/Adak Pacific/Honolulu","UY|America/Montevideo","UZ|Asia/Samarkand Asia/Tashkent","VA|Europe/Rome Europe/Vatican","VC|America/Port_of_Spain America/St_Vincent","VE|America/Caracas","VG|America/Port_of_Spain America/Tortola","VI|America/Port_of_Spain America/St_Thomas","VN|Asia/Bangkok Asia/Ho_Chi_Minh","VU|Pacific/Efate","WF|Pacific/Wallis","WS|Pacific/Apia","YE|Asia/Riyadh Asia/Aden","YT|Africa/Nairobi Indian/Mayotte","ZA|Africa/Johannesburg","ZM|Africa/Maputo Africa/Lusaka","ZW|Africa/Maputo Africa/Harare"]}') }, bUC5: function(t, e, n) { "use strict";
        n.r(e); var r = n("vDqi"),
            o = n.n(r),
            i = n("LvDl"),
            a = n.n(i),
            c = n("f0Wu"),
            s = n.n(c),
            l = { methods: { moment: function() { return s.a }, logTypes: function() { return App.logTypes }, debouncer: a.a.debounce((function(t) { return t() }), 500) } },
            u = [{ path: "/", redirect: "/logs/http" }, { path: "/logs/:group", name: "logs-index", component: n("zlUZ").default, meta: { resource: "logs", createTitle: function(t) { return t.group.toUpperCase() + " Logs" } } }, { path: "/logs/:group/:id", name: "logs-show", component: n("w0jZ").default, meta: { resource: "logs", createTitle: function(t) { return t.group.toUpperCase() + " Logs - Details" } } }, { path: "/jobs/metrics", name: "jobs-metrics", component: n("2zUT").default, meta: { resource: "jobs", createTitle: function() { return "Jobs Metrics" } } }, { path: "/jobs/:group", name: "jobs-index", component: n("3cCS").default, meta: { resource: "jobs", createTitle: function(t) { return t.group.toUpperCase() + " Jobs" } } }, { path: "/jobs/:group/:id", name: "jobs-show", component: n("M99z").default, meta: { resource: "jobs", createTitle: function(t) { return t.group.toUpperCase() + " Jobs - Details" } } }],
            f = n("XuX8"),
            d = n.n(f),
            p = n("1Tjy"),
            h = n.n(p);

        function M(t) { return Object.prototype.toString.call(t).indexOf("Error") > -1 }

        function b(t, e) { return M(t) && t._isRouter && (null == e || t.type === e) }

        function m(t, e) { for (var n in e) t[n] = e[n]; return t } var v = { name: "RouterView", functional: !0, props: { name: { type: String, default: "default" } }, render: function(t, e) { var n = e.props,
                    r = e.children,
                    o = e.parent,
                    i = e.data;
                i.routerView = !0; for (var a = o.$createElement, c = n.name, s = o.$route, l = o._routerViewCache || (o._routerViewCache = {}), u = 0, f = !1; o && o._routerRoot !== o;) { var d = o.$vnode ? o.$vnode.data : {};
                    d.routerView && u++, d.keepAlive && o._directInactive && o._inactive && (f = !0), o = o.$parent } if (i.routerViewDepth = u, f) { var p = l[c],
                        h = p && p.component; return h ? (p.configProps && g(h, i, p.route, p.configProps), a(h, i, r)) : a() } var M = s.matched[u],
                    b = M && M.components[c]; if (!M || !b) return l[c] = null, a();
                l[c] = { component: b }, i.registerRouteInstance = function(t, e) { var n = M.instances[c];
                    (e && n !== t || !e && n === t) && (M.instances[c] = e) }, (i.hook || (i.hook = {})).prepatch = function(t, e) { M.instances[c] = e.componentInstance }, i.hook.init = function(t) { t.data.keepAlive && t.componentInstance && t.componentInstance !== M.instances[c] && (M.instances[c] = t.componentInstance) }; var v = M.props && M.props[c]; return v && (m(l[c], { route: s, configProps: v }), g(b, i, s, v)), a(b, i, r) } };

        function g(t, e, n, r) { var o = e.props = function(t, e) { switch (typeof e) {
                    case "undefined":
                        return;
                    case "object":
                        return e;
                    case "function":
                        return e(t);
                    case "boolean":
                        return e ? t.params : void 0;
                    default:
                        0 } }(n, r); if (o) { o = e.props = m({}, o); var i = e.attrs = e.attrs || {}; for (var a in o) t.props && a in t.props || (i[a] = o[a], delete o[a]) } } var A = /[!'()*]/g,
            y = function(t) { return "%" + t.charCodeAt(0).toString(16) },
            z = /%2C/g,
            _ = function(t) { return encodeURIComponent(t).replace(A, y).replace(z, ",") },
            O = decodeURIComponent;

        function x(t) { var e = {}; return (t = t.trim().replace(/^(\?|#|&)/, "")) ? (t.split("&").forEach((function(t) { var n = t.replace(/\+/g, " ").split("="),
                    r = O(n.shift()),
                    o = n.length > 0 ? O(n.join("=")) : null;
                void 0 === e[r] ? e[r] = o : Array.isArray(e[r]) ? e[r].push(o) : e[r] = [e[r], o] })), e) : e }

        function L(t) { var e = t ? Object.keys(t).map((function(e) { var n = t[e]; if (void 0 === n) return ""; if (null === n) return _(e); if (Array.isArray(n)) { var r = []; return n.forEach((function(t) { void 0 !== t && (null === t ? r.push(_(e)) : r.push(_(e) + "=" + _(t))) })), r.join("&") } return _(e) + "=" + _(n) })).filter((function(t) { return t.length > 0 })).join("&") : null; return e ? "?" + e : "" } var N = /\/?$/;

        function w(t, e, n, r) { var o = r && r.options.stringifyQuery,
                i = e.query || {}; try { i = T(i) } catch (t) {} var a = { name: e.name || t && t.name, meta: t && t.meta || {}, path: e.path || "/", hash: e.hash || "", query: i, params: e.params || {}, fullPath: W(e, o), matched: t ? C(t) : [] }; return n && (a.redirectedFrom = W(n, o)), Object.freeze(a) }

        function T(t) { if (Array.isArray(t)) return t.map(T); if (t && "object" == typeof t) { var e = {}; for (var n in t) e[n] = T(t[n]); return e } return t } var q = w(null, { path: "/" });

        function C(t) { for (var e = []; t;) e.unshift(t), t = t.parent; return e }

        function W(t, e) { var n = t.path,
                r = t.query;
            void 0 === r && (r = {}); var o = t.hash; return void 0 === o && (o = ""), (n || "/") + (e || L)(r) + o }

        function S(t, e) { return e === q ? t === e : !!e && (t.path && e.path ? t.path.replace(N, "") === e.path.replace(N, "") && t.hash === e.hash && k(t.query, e.query) : !(!t.name || !e.name) && (t.name === e.name && t.hash === e.hash && k(t.query, e.query) && k(t.params, e.params))) }

        function k(t, e) { if (void 0 === t && (t = {}), void 0 === e && (e = {}), !t || !e) return t === e; var n = Object.keys(t),
                r = Object.keys(e); return n.length === r.length && n.every((function(n) { var r = t[n],
                    o = e[n]; return "object" == typeof r && "object" == typeof o ? k(r, o) : String(r) === String(o) })) }

        function B(t, e, n) { var r = t.charAt(0); if ("/" === r) return t; if ("?" === r || "#" === r) return e + t; var o = e.split("/");
            n && o[o.length - 1] || o.pop(); for (var i = t.replace(/^\//, "").split("/"), a = 0; a < i.length; a++) { var c = i[a]; ".." === c ? o.pop() : "." !== c && o.push(c) } return "" !== o[0] && o.unshift(""), o.join("/") }

        function X(t) { return t.replace(/\/\//g, "/") } var E = Array.isArray || function(t) { return "[object Array]" == Object.prototype.toString.call(t) },
            D = Q,
            R = H,
            P = function(t, e) { return V(H(t, e), e) },
            I = V,
            j = J,
            F = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

        function H(t, e) { for (var n, r = [], o = 0, i = 0, a = "", c = e && e.delimiter || "/"; null != (n = F.exec(t));) { var s = n[0],
                    l = n[1],
                    u = n.index; if (a += t.slice(i, u), i = u + s.length, l) a += l[1];
                else { var f = t[i],
                        d = n[2],
                        p = n[3],
                        h = n[4],
                        M = n[5],
                        b = n[6],
                        m = n[7];
                    a && (r.push(a), a = ""); var v = null != d && null != f && f !== d,
                        g = "+" === b || "*" === b,
                        A = "?" === b || "*" === b,
                        y = n[2] || c,
                        z = h || M;
                    r.push({ name: p || o++, prefix: d || "", delimiter: y, optional: A, repeat: g, partial: v, asterisk: !!m, pattern: z ? Y(z) : m ? ".*" : "[^" + $(y) + "]+?" }) } } return i < t.length && (a += t.substr(i)), a && r.push(a), r }

        function U(t) { return encodeURI(t).replace(/[\/?#]/g, (function(t) { return "%" + t.charCodeAt(0).toString(16).toUpperCase() })) }

        function V(t, e) { for (var n = new Array(t.length), r = 0; r < t.length; r++) "object" == typeof t[r] && (n[r] = new RegExp("^(?:" + t[r].pattern + ")$", K(e))); return function(e, r) { for (var o = "", i = e || {}, a = (r || {}).pretty ? U : encodeURIComponent, c = 0; c < t.length; c++) { var s = t[c]; if ("string" != typeof s) { var l, u = i[s.name]; if (null == u) { if (s.optional) { s.partial && (o += s.prefix); continue } throw new TypeError('Expected "' + s.name + '" to be defined') } if (E(u)) { if (!s.repeat) throw new TypeError('Expected "' + s.name + '" to not repeat, but received `' + JSON.stringify(u) + "`"); if (0 === u.length) { if (s.optional) continue; throw new TypeError('Expected "' + s.name + '" to not be empty') } for (var f = 0; f < u.length; f++) { if (l = a(u[f]), !n[c].test(l)) throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '", but received `' + JSON.stringify(l) + "`");
                                o += (0 === f ? s.prefix : s.delimiter) + l } } else { if (l = s.asterisk ? encodeURI(u).replace(/[?#]/g, (function(t) { return "%" + t.charCodeAt(0).toString(16).toUpperCase() })) : a(u), !n[c].test(l)) throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but received "' + l + '"');
                            o += s.prefix + l } } else o += s } return o } }

        function $(t) { return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1") }

        function Y(t) { return t.replace(/([=!:$\/()])/g, "\\$1") }

        function G(t, e) { return t.keys = e, t }

        function K(t) { return t && t.sensitive ? "" : "i" }

        function J(t, e, n) { E(e) || (n = e || n, e = []); for (var r = (n = n || {}).strict, o = !1 !== n.end, i = "", a = 0; a < t.length; a++) { var c = t[a]; if ("string" == typeof c) i += $(c);
                else { var s = $(c.prefix),
                        l = "(?:" + c.pattern + ")";
                    e.push(c), c.repeat && (l += "(?:" + s + l + ")*"), i += l = c.optional ? c.partial ? s + "(" + l + ")?" : "(?:" + s + "(" + l + "))?" : s + "(" + l + ")" } } var u = $(n.delimiter || "/"),
                f = i.slice(-u.length) === u; return r || (i = (f ? i.slice(0, -u.length) : i) + "(?:" + u + "(?=$))?"), i += o ? "$" : r && f ? "" : "(?=" + u + "|$)", G(new RegExp("^" + i, K(n)), e) }

        function Q(t, e, n) { return E(e) || (n = e || n, e = []), n = n || {}, t instanceof RegExp ? function(t, e) { var n = t.source.match(/\((?!\?)/g); if (n)
                    for (var r = 0; r < n.length; r++) e.push({ name: r, prefix: null, delimiter: null, optional: !1, repeat: !1, partial: !1, asterisk: !1, pattern: null }); return G(t, e) }(t, e) : E(t) ? function(t, e, n) { for (var r = [], o = 0; o < t.length; o++) r.push(Q(t[o], e, n).source); return G(new RegExp("(?:" + r.join("|") + ")", K(n)), e) }(t, e, n) : function(t, e, n) { return J(H(t, n), e, n) }(t, e, n) }
        D.parse = R, D.compile = P, D.tokensToFunction = I, D.tokensToRegExp = j; var Z = Object.create(null);

        function tt(t, e, n) { e = e || {}; try { var r = Z[t] || (Z[t] = D.compile(t)); return "string" == typeof e.pathMatch && (e[0] = e.pathMatch), r(e, { pretty: !0 }) } catch (t) { return "" } finally { delete e[0] } }

        function et(t, e, n, r) { var o = "string" == typeof t ? { path: t } : t; if (o._normalized) return o; if (o.name) { var i = (o = m({}, t)).params; return i && "object" == typeof i && (o.params = m({}, i)), o } if (!o.path && o.params && e) {
                (o = m({}, o))._normalized = !0; var a = m(m({}, e.params), o.params); if (e.name) o.name = e.name, o.params = a;
                else if (e.matched.length) { var c = e.matched[e.matched.length - 1].path;
                    o.path = tt(c, a, e.path) } else 0; return o } var s = function(t) { var e = "",
                        n = "",
                        r = t.indexOf("#");
                    r >= 0 && (e = t.slice(r), t = t.slice(0, r)); var o = t.indexOf("?"); return o >= 0 && (n = t.slice(o + 1), t = t.slice(0, o)), { path: t, query: n, hash: e } }(o.path || ""),
                l = e && e.path || "/",
                u = s.path ? B(s.path, l, n || o.append) : l,
                f = function(t, e, n) { void 0 === e && (e = {}); var r, o = n || x; try { r = o(t || "") } catch (t) { r = {} } for (var i in e) r[i] = e[i]; return r }(s.query, o.query, r && r.options.parseQuery),
                d = o.hash || s.hash; return d && "#" !== d.charAt(0) && (d = "#" + d), { _normalized: !0, path: u, query: f, hash: d } } var nt, rt = function() {},
            ot = { name: "RouterLink", props: { to: { type: [String, Object], required: !0 }, tag: { type: String, default: "a" }, exact: Boolean, append: Boolean, replace: Boolean, activeClass: String, exactActiveClass: String, ariaCurrentValue: { type: String, default: "page" }, event: { type: [String, Array], default: "click" } }, render: function(t) { var e = this,
                        n = this.$router,
                        r = this.$route,
                        o = n.resolve(this.to, r, this.append),
                        i = o.location,
                        a = o.route,
                        c = o.href,
                        s = {},
                        l = n.options.linkActiveClass,
                        u = n.options.linkExactActiveClass,
                        f = null == l ? "router-link-active" : l,
                        d = null == u ? "router-link-exact-active" : u,
                        p = null == this.activeClass ? f : this.activeClass,
                        h = null == this.exactActiveClass ? d : this.exactActiveClass,
                        M = a.redirectedFrom ? w(null, et(a.redirectedFrom), null, n) : a;
                    s[h] = S(r, M), s[p] = this.exact ? s[h] : function(t, e) { return 0 === t.path.replace(N, "/").indexOf(e.path.replace(N, "/")) && (!e.hash || t.hash === e.hash) && function(t, e) { for (var n in e)
                                if (!(n in t)) return !1;
                            return !0 }(t.query, e.query) }(r, M); var b = s[h] ? this.ariaCurrentValue : null,
                        v = function(t) { it(t) && (e.replace ? n.replace(i, rt) : n.push(i, rt)) },
                        g = { click: it };
                    Array.isArray(this.event) ? this.event.forEach((function(t) { g[t] = v })) : g[this.event] = v; var A = { class: s },
                        y = !this.$scopedSlots.$hasNormal && this.$scopedSlots.default && this.$scopedSlots.default({ href: c, route: a, navigate: v, isActive: s[p], isExactActive: s[h] }); if (y) { if (1 === y.length) return y[0]; if (y.length > 1 || !y.length) return 0 === y.length ? t() : t("span", {}, y) } if ("a" === this.tag) A.on = g, A.attrs = { href: c, "aria-current": b };
                    else { var z = function t(e) { var n; if (e)
                                for (var r = 0; r < e.length; r++) { if ("a" === (n = e[r]).tag) return n; if (n.children && (n = t(n.children))) return n } }(this.$slots.default); if (z) { z.isStatic = !1; var _ = z.data = m({}, z.data); for (var O in _.on = _.on || {}, _.on) { var x = _.on[O];
                                O in g && (_.on[O] = Array.isArray(x) ? x : [x]) } for (var L in g) L in _.on ? _.on[L].push(g[L]) : _.on[L] = v; var T = z.data.attrs = m({}, z.data.attrs);
                            T.href = c, T["aria-current"] = b } else A.on = g } return t(this.tag, A, this.$slots.default) } };

        function it(t) { if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey || t.defaultPrevented || void 0 !== t.button && 0 !== t.button)) { if (t.currentTarget && t.currentTarget.getAttribute) { var e = t.currentTarget.getAttribute("target"); if (/\b_blank\b/i.test(e)) return } return t.preventDefault && t.preventDefault(), !0 } } var at = "undefined" != typeof window;

        function ct(t, e, n, r) { var o = e || [],
                i = n || Object.create(null),
                a = r || Object.create(null);
            t.forEach((function(t) {! function t(e, n, r, o, i, a) { var c = o.path,
                        s = o.name;
                    0; var l = o.pathToRegexpOptions || {},
                        u = function(t, e, n) { n || (t = t.replace(/\/$/, "")); if ("/" === t[0]) return t; if (null == e) return t; return X(e.path + "/" + t) }(c, i, l.strict); "boolean" == typeof o.caseSensitive && (l.sensitive = o.caseSensitive); var f = { path: u, regex: st(u, l), components: o.components || { default: o.component }, instances: {}, name: s, parent: i, matchAs: a, redirect: o.redirect, beforeEnter: o.beforeEnter, meta: o.meta || {}, props: null == o.props ? {} : o.components ? o.props : { default: o.props } };
                    o.children && o.children.forEach((function(o) { var i = a ? X(a + "/" + o.path) : void 0;
                        t(e, n, r, o, f, i) }));
                    n[f.path] || (e.push(f.path), n[f.path] = f); if (void 0 !== o.alias)
                        for (var d = Array.isArray(o.alias) ? o.alias : [o.alias], p = 0; p < d.length; ++p) { 0; var h = { path: d[p], children: o.children };
                            t(e, n, r, h, i, f.path || "/") }
                    s && (r[s] || (r[s] = f)) }(o, i, a, t) })); for (var c = 0, s = o.length; c < s; c++) "*" === o[c] && (o.push(o.splice(c, 1)[0]), s--, c--); return { pathList: o, pathMap: i, nameMap: a } }

        function st(t, e) { return D(t, [], e) }

        function lt(t, e) { var n = ct(t),
                r = n.pathList,
                o = n.pathMap,
                i = n.nameMap;

            function a(t, n, a) { var c = et(t, n, !1, e),
                    l = c.name; if (l) { var u = i[l]; if (!u) return s(null, c); var f = u.regex.keys.filter((function(t) { return !t.optional })).map((function(t) { return t.name })); if ("object" != typeof c.params && (c.params = {}), n && "object" == typeof n.params)
                        for (var d in n.params) !(d in c.params) && f.indexOf(d) > -1 && (c.params[d] = n.params[d]); return c.path = tt(u.path, c.params), s(u, c, a) } if (c.path) { c.params = {}; for (var p = 0; p < r.length; p++) { var h = r[p],
                            M = o[h]; if (ut(M.regex, c.path, c.params)) return s(M, c, a) } } return s(null, c) }

            function c(t, n) { var r = t.redirect,
                    o = "function" == typeof r ? r(w(t, n, null, e)) : r; if ("string" == typeof o && (o = { path: o }), !o || "object" != typeof o) return s(null, n); var c = o,
                    l = c.name,
                    u = c.path,
                    f = n.query,
                    d = n.hash,
                    p = n.params; if (f = c.hasOwnProperty("query") ? c.query : f, d = c.hasOwnProperty("hash") ? c.hash : d, p = c.hasOwnProperty("params") ? c.params : p, l) { i[l]; return a({ _normalized: !0, name: l, query: f, hash: d, params: p }, void 0, n) } if (u) { var h = function(t, e) { return B(t, e.parent ? e.parent.path : "/", !0) }(u, t); return a({ _normalized: !0, path: tt(h, p), query: f, hash: d }, void 0, n) } return s(null, n) }

            function s(t, n, r) { return t && t.redirect ? c(t, r || n) : t && t.matchAs ? function(t, e, n) { var r = a({ _normalized: !0, path: tt(n, e.params) }); if (r) { var o = r.matched,
                            i = o[o.length - 1]; return e.params = r.params, s(i, e) } return s(null, e) }(0, n, t.matchAs) : w(t, n, r, e) } return { match: a, addRoutes: function(t) { ct(t, r, o, i) } } }

        function ut(t, e, n) { var r = e.match(t); if (!r) return !1; if (!n) return !0; for (var o = 1, i = r.length; o < i; ++o) { var a = t.keys[o - 1],
                    c = "string" == typeof r[o] ? decodeURIComponent(r[o]) : r[o];
                a && (n[a.name || "pathMatch"] = c) } return !0 } var ft = at && window.performance && window.performance.now ? window.performance : Date;

        function dt() { return ft.now().toFixed(3) } var pt = dt();

        function ht() { return pt }

        function Mt(t) { return pt = t } var bt = Object.create(null);

        function mt() { "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual"); var t = window.location.protocol + "//" + window.location.host,
                e = window.location.href.replace(t, ""),
                n = m({}, window.history.state); return n.key = ht(), window.history.replaceState(n, "", e), window.addEventListener("popstate", At),
                function() { window.removeEventListener("popstate", At) } }

        function vt(t, e, n, r) { if (t.app) { var o = t.options.scrollBehavior;
                o && t.app.$nextTick((function() { var i = function() { var t = ht(); if (t) return bt[t] }(),
                        a = o.call(t, e, n, r ? i : null);
                    a && ("function" == typeof a.then ? a.then((function(t) { xt(t, i) })).catch((function(t) { 0 })) : xt(a, i)) })) } }

        function gt() { var t = ht();
            t && (bt[t] = { x: window.pageXOffset, y: window.pageYOffset }) }

        function At(t) { gt(), t.state && t.state.key && Mt(t.state.key) }

        function yt(t) { return _t(t.x) || _t(t.y) }

        function zt(t) { return { x: _t(t.x) ? t.x : window.pageXOffset, y: _t(t.y) ? t.y : window.pageYOffset } }

        function _t(t) { return "number" == typeof t } var Ot = /^#\d/;

        function xt(t, e) { var n, r = "object" == typeof t; if (r && "string" == typeof t.selector) { var o = Ot.test(t.selector) ? document.getElementById(t.selector.slice(1)) : document.querySelector(t.selector); if (o) { var i = t.offset && "object" == typeof t.offset ? t.offset : {};
                    e = function(t, e) { var n = document.documentElement.getBoundingClientRect(),
                            r = t.getBoundingClientRect(); return { x: r.left - n.left - e.x, y: r.top - n.top - e.y } }(o, i = { x: _t((n = i).x) ? n.x : 0, y: _t(n.y) ? n.y : 0 }) } else yt(t) && (e = zt(t)) } else r && yt(t) && (e = zt(t));
            e && window.scrollTo(e.x, e.y) } var Lt, Nt = at && ((-1 === (Lt = window.navigator.userAgent).indexOf("Android 2.") && -1 === Lt.indexOf("Android 4.0") || -1 === Lt.indexOf("Mobile Safari") || -1 !== Lt.indexOf("Chrome") || -1 !== Lt.indexOf("Windows Phone")) && window.history && "function" == typeof window.history.pushState);

        function wt(t, e) { gt(); var n = window.history; try { if (e) { var r = m({}, n.state);
                    r.key = ht(), n.replaceState(r, "", t) } else n.pushState({ key: Mt(dt()) }, "", t) } catch (n) { window.location[e ? "replace" : "assign"](t) } }

        function Tt(t) { wt(t, !0) }

        function qt(t, e, n) { var r = function(o) { o >= t.length ? n() : t[o] ? e(t[o], (function() { r(o + 1) })) : r(o + 1) };
            r(0) }

        function Ct(t) { return function(e, n, r) { var o = !1,
                    i = 0,
                    a = null;
                Wt(t, (function(t, e, n, c) { if ("function" == typeof t && void 0 === t.cid) { o = !0, i++; var s, l = Bt((function(e) { var o;
                                ((o = e).__esModule || kt && "Module" === o[Symbol.toStringTag]) && (e = e.default), t.resolved = "function" == typeof e ? e : nt.extend(e), n.components[c] = e, --i <= 0 && r() })),
                            u = Bt((function(t) { var e = "Failed to resolve async component " + c + ": " + t;
                                a || (a = M(t) ? t : new Error(e), r(a)) })); try { s = t(l, u) } catch (t) { u(t) } if (s)
                            if ("function" == typeof s.then) s.then(l, u);
                            else { var f = s.component;
                                f && "function" == typeof f.then && f.then(l, u) } } })), o || r() } }

        function Wt(t, e) { return St(t.map((function(t) { return Object.keys(t.components).map((function(n) { return e(t.components[n], t.instances[n], t, n) })) }))) }

        function St(t) { return Array.prototype.concat.apply([], t) } var kt = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;

        function Bt(t) { var e = !1; return function() { for (var n = [], r = arguments.length; r--;) n[r] = arguments[r]; if (!e) return e = !0, t.apply(this, n) } } var Xt = 1,
            Et = 2,
            Dt = 3,
            Rt = 4;

        function Pt(t, e) { return jt(t, e, Xt, 'Redirected when going from "' + t.fullPath + '" to "' + function(t) { if ("string" == typeof t) return t; if ("path" in t) return t.path; var e = {}; return Ft.forEach((function(n) { n in t && (e[n] = t[n]) })), JSON.stringify(e, null, 2) }(e) + '" via a navigation guard.') }

        function It(t, e) { return jt(t, e, Dt, 'Navigation cancelled from "' + t.fullPath + '" to "' + e.fullPath + '" with a new navigation.') }

        function jt(t, e, n, r) { var o = new Error(r); return o._isRouter = !0, o.from = t, o.to = e, o.type = n, o } var Ft = ["params", "query", "hash"]; var Ht = function(t, e) { this.router = t, this.base = function(t) { if (!t)
                    if (at) { var e = document.querySelector("base");
                        t = (t = e && e.getAttribute("href") || "/").replace(/^https?:\/\/[^\/]+/, "") } else t = "/";
                    "/" !== t.charAt(0) && (t = "/" + t); return t.replace(/\/$/, "") }(e), this.current = q, this.pending = null, this.ready = !1, this.readyCbs = [], this.readyErrorCbs = [], this.errorCbs = [], this.listeners = [] };

        function Ut(t, e, n, r) { var o = Wt(t, (function(t, r, o, i) { var a = function(t, e) { "function" != typeof t && (t = nt.extend(t)); return t.options[e] }(t, e); if (a) return Array.isArray(a) ? a.map((function(t) { return n(t, r, o, i) })) : n(a, r, o, i) })); return St(r ? o.reverse() : o) }

        function Vt(t, e) { if (e) return function() { return t.apply(e, arguments) } }
        Ht.prototype.listen = function(t) { this.cb = t }, Ht.prototype.onReady = function(t, e) { this.ready ? t() : (this.readyCbs.push(t), e && this.readyErrorCbs.push(e)) }, Ht.prototype.onError = function(t) { this.errorCbs.push(t) }, Ht.prototype.transitionTo = function(t, e, n) { var r = this,
                o = this.router.match(t, this.current);
            this.confirmTransition(o, (function() { var t = r.current;
                r.updateRoute(o), e && e(o), r.ensureURL(), r.router.afterHooks.forEach((function(e) { e && e(o, t) })), r.ready || (r.ready = !0, r.readyCbs.forEach((function(t) { t(o) }))) }), (function(t) { n && n(t), t && !r.ready && (r.ready = !0, b(t, Xt) ? r.readyCbs.forEach((function(t) { t(o) })) : r.readyErrorCbs.forEach((function(e) { e(t) }))) })) }, Ht.prototype.confirmTransition = function(t, e, n) { var r, o = this,
                i = this.current,
                a = function(t) {!b(t) && M(t) && o.errorCbs.length && o.errorCbs.forEach((function(e) { e(t) })), n && n(t) },
                c = t.matched.length - 1,
                s = i.matched.length - 1; if (S(t, i) && c === s && t.matched[c] === i.matched[s]) return this.ensureURL(), a(jt(r = i, t, Rt, 'Avoided redundant navigation to current location: "' + r.fullPath + '".')); var l = function(t, e) { var n, r = Math.max(t.length, e.length); for (n = 0; n < r && t[n] === e[n]; n++); return { updated: e.slice(0, n), activated: e.slice(n), deactivated: t.slice(n) } }(this.current.matched, t.matched),
                u = l.updated,
                f = l.deactivated,
                d = l.activated,
                p = [].concat(function(t) { return Ut(t, "beforeRouteLeave", Vt, !0) }(f), this.router.beforeHooks, function(t) { return Ut(t, "beforeRouteUpdate", Vt) }(u), d.map((function(t) { return t.beforeEnter })), Ct(d));
            this.pending = t; var h = function(e, n) { if (o.pending !== t) return a(It(i, t)); try { e(t, i, (function(e) {!1 === e ? (o.ensureURL(!0), a(function(t, e) { return jt(t, e, Et, 'Navigation aborted from "' + t.fullPath + '" to "' + e.fullPath + '" via a navigation guard.') }(i, t))) : M(e) ? (o.ensureURL(!0), a(e)) : "string" == typeof e || "object" == typeof e && ("string" == typeof e.path || "string" == typeof e.name) ? (a(Pt(i, t)), "object" == typeof e && e.replace ? o.replace(e) : o.push(e)) : n(e) })) } catch (t) { a(t) } };
            qt(p, h, (function() { var n = [];
                qt(function(t, e, n) { return Ut(t, "beforeRouteEnter", (function(t, r, o, i) { return function(t, e, n, r, o) { return function(i, a, c) { return t(i, a, (function(t) { "function" == typeof t && r.push((function() {! function t(e, n, r, o) { n[r] && !n[r]._isBeingDestroyed ? e(n[r]) : o() && setTimeout((function() { t(e, n, r, o) }), 16) }(t, e.instances, n, o) })), c(t) })) } }(t, o, i, e, n) })) }(d, n, (function() { return o.current === t })).concat(o.router.resolveHooks), h, (function() { if (o.pending !== t) return a(It(i, t));
                    o.pending = null, e(t), o.router.app && o.router.app.$nextTick((function() { n.forEach((function(t) { t() })) })) })) })) }, Ht.prototype.updateRoute = function(t) { this.current = t, this.cb && this.cb(t) }, Ht.prototype.setupListeners = function() {}, Ht.prototype.teardownListeners = function() { this.listeners.forEach((function(t) { t() })), this.listeners = [] }; var $t = function(t) {
            function e(e, n) { t.call(this, e, n), this._startLocation = Yt(this.base) } return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setupListeners = function() { var t = this; if (!(this.listeners.length > 0)) { var e = this.router,
                        n = e.options.scrollBehavior,
                        r = Nt && n;
                    r && this.listeners.push(mt()); var o = function() { var n = t.current,
                            o = Yt(t.base);
                        t.current === q && o === t._startLocation || t.transitionTo(o, (function(t) { r && vt(e, t, n, !0) })) };
                    window.addEventListener("popstate", o), this.listeners.push((function() { window.removeEventListener("popstate", o) })) } }, e.prototype.go = function(t) { window.history.go(t) }, e.prototype.push = function(t, e, n) { var r = this,
                    o = this.current;
                this.transitionTo(t, (function(t) { wt(X(r.base + t.fullPath)), vt(r.router, t, o, !1), e && e(t) }), n) }, e.prototype.replace = function(t, e, n) { var r = this,
                    o = this.current;
                this.transitionTo(t, (function(t) { Tt(X(r.base + t.fullPath)), vt(r.router, t, o, !1), e && e(t) }), n) }, e.prototype.ensureURL = function(t) { if (Yt(this.base) !== this.current.fullPath) { var e = X(this.base + this.current.fullPath);
                    t ? wt(e) : Tt(e) } }, e.prototype.getCurrentLocation = function() { return Yt(this.base) }, e }(Ht);

        function Yt(t) { var e = decodeURI(window.location.pathname); return t && 0 === e.toLowerCase().indexOf(t.toLowerCase()) && (e = e.slice(t.length)), (e || "/") + window.location.search + window.location.hash } var Gt = function(t) {
            function e(e, n, r) { t.call(this, e, n), r && function(t) { var e = Yt(t); if (!/^\/#/.test(e)) return window.location.replace(X(t + "/#" + e)), !0 }(this.base) || Kt() } return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setupListeners = function() { var t = this; if (!(this.listeners.length > 0)) { var e = this.router.options.scrollBehavior,
                        n = Nt && e;
                    n && this.listeners.push(mt()); var r = function() { var e = t.current;
                            Kt() && t.transitionTo(Jt(), (function(r) { n && vt(t.router, r, e, !0), Nt || te(r.fullPath) })) },
                        o = Nt ? "popstate" : "hashchange";
                    window.addEventListener(o, r), this.listeners.push((function() { window.removeEventListener(o, r) })) } }, e.prototype.push = function(t, e, n) { var r = this,
                    o = this.current;
                this.transitionTo(t, (function(t) { Zt(t.fullPath), vt(r.router, t, o, !1), e && e(t) }), n) }, e.prototype.replace = function(t, e, n) { var r = this,
                    o = this.current;
                this.transitionTo(t, (function(t) { te(t.fullPath), vt(r.router, t, o, !1), e && e(t) }), n) }, e.prototype.go = function(t) { window.history.go(t) }, e.prototype.ensureURL = function(t) { var e = this.current.fullPath;
                Jt() !== e && (t ? Zt(e) : te(e)) }, e.prototype.getCurrentLocation = function() { return Jt() }, e }(Ht);

        function Kt() { var t = Jt(); return "/" === t.charAt(0) || (te("/" + t), !1) }

        function Jt() { var t = window.location.href,
                e = t.indexOf("#"); if (e < 0) return ""; var n = (t = t.slice(e + 1)).indexOf("?"); if (n < 0) { var r = t.indexOf("#");
                t = r > -1 ? decodeURI(t.slice(0, r)) + t.slice(r) : decodeURI(t) } else t = decodeURI(t.slice(0, n)) + t.slice(n); return t }

        function Qt(t) { var e = window.location.href,
                n = e.indexOf("#"); return (n >= 0 ? e.slice(0, n) : e) + "#" + t }

        function Zt(t) { Nt ? wt(Qt(t)) : window.location.hash = t }

        function te(t) { Nt ? Tt(Qt(t)) : window.location.replace(Qt(t)) } var ee = function(t) {
                function e(e, n) { t.call(this, e, n), this.stack = [], this.index = -1 } return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.push = function(t, e, n) { var r = this;
                    this.transitionTo(t, (function(t) { r.stack = r.stack.slice(0, r.index + 1).concat(t), r.index++, e && e(t) }), n) }, e.prototype.replace = function(t, e, n) { var r = this;
                    this.transitionTo(t, (function(t) { r.stack = r.stack.slice(0, r.index).concat(t), e && e(t) }), n) }, e.prototype.go = function(t) { var e = this,
                        n = this.index + t; if (!(n < 0 || n >= this.stack.length)) { var r = this.stack[n];
                        this.confirmTransition(r, (function() { e.index = n, e.updateRoute(r) }), (function(t) { b(t, Rt) && (e.index = n) })) } }, e.prototype.getCurrentLocation = function() { var t = this.stack[this.stack.length - 1]; return t ? t.fullPath : "/" }, e.prototype.ensureURL = function() {}, e }(Ht),
            ne = function(t) { void 0 === t && (t = {}), this.app = null, this.apps = [], this.options = t, this.beforeHooks = [], this.resolveHooks = [], this.afterHooks = [], this.matcher = lt(t.routes || [], this); var e = t.mode || "hash"; switch (this.fallback = "history" === e && !Nt && !1 !== t.fallback, this.fallback && (e = "hash"), at || (e = "abstract"), this.mode = e, e) {
                    case "history":
                        this.history = new $t(this, t.base); break;
                    case "hash":
                        this.history = new Gt(this, t.base, this.fallback); break;
                    case "abstract":
                        this.history = new ee(this, t.base); break;
                    default:
                        0 } },
            re = { currentRoute: { configurable: !0 } };

        function oe(t, e) { return t.push(e),
                function() { var n = t.indexOf(e);
                    n > -1 && t.splice(n, 1) } }
        ne.prototype.match = function(t, e, n) { return this.matcher.match(t, e, n) }, re.currentRoute.get = function() { return this.history && this.history.current }, ne.prototype.init = function(t) { var e = this; if (this.apps.push(t), t.$once("hook:destroyed", (function() { var n = e.apps.indexOf(t);
                    n > -1 && e.apps.splice(n, 1), e.app === t && (e.app = e.apps[0] || null), e.app || e.history.teardownListeners() })), !this.app) { this.app = t; var n = this.history; if (n instanceof $t || n instanceof Gt) { var r = function() { n.setupListeners() };
                    n.transitionTo(n.getCurrentLocation(), r, r) }
                n.listen((function(t) { e.apps.forEach((function(e) { e._route = t })) })) } }, ne.prototype.beforeEach = function(t) { return oe(this.beforeHooks, t) }, ne.prototype.beforeResolve = function(t) { return oe(this.resolveHooks, t) }, ne.prototype.afterEach = function(t) { return oe(this.afterHooks, t) }, ne.prototype.onReady = function(t, e) { this.history.onReady(t, e) }, ne.prototype.onError = function(t) { this.history.onError(t) }, ne.prototype.push = function(t, e, n) { var r = this; if (!e && !n && "undefined" != typeof Promise) return new Promise((function(e, n) { r.history.push(t, e, n) }));
            this.history.push(t, e, n) }, ne.prototype.replace = function(t, e, n) { var r = this; if (!e && !n && "undefined" != typeof Promise) return new Promise((function(e, n) { r.history.replace(t, e, n) }));
            this.history.replace(t, e, n) }, ne.prototype.go = function(t) { this.history.go(t) }, ne.prototype.back = function() { this.go(-1) }, ne.prototype.forward = function() { this.go(1) }, ne.prototype.getMatchedComponents = function(t) { var e = t ? t.matched ? t : this.resolve(t).route : this.currentRoute; return e ? [].concat.apply([], e.matched.map((function(t) { return Object.keys(t.components).map((function(e) { return t.components[e] })) }))) : [] }, ne.prototype.resolve = function(t, e, n) { var r = et(t, e = e || this.history.current, n, this),
                o = this.match(r, e),
                i = o.redirectedFrom || o.fullPath; return { location: r, route: o, href: function(t, e, n) { var r = "hash" === n ? "#" + e : e; return t ? X(t + "/" + r) : r }(this.history.base, i, this.mode), normalizedTo: r, resolved: o } }, ne.prototype.addRoutes = function(t) { this.matcher.addRoutes(t), this.history.current !== q && this.history.transitionTo(this.history.getCurrentLocation()) }, Object.defineProperties(ne.prototype, re), ne.install = function t(e) { if (!t.installed || nt !== e) { t.installed = !0, nt = e; var n = function(t) { return void 0 !== t },
                    r = function(t, e) { var r = t.$options._parentVnode;
                        n(r) && n(r = r.data) && n(r = r.registerRouteInstance) && r(t, e) };
                e.mixin({ beforeCreate: function() { n(this.$options.router) ? (this._routerRoot = this, this._router = this.$options.router, this._router.init(this), e.util.defineReactive(this, "_route", this._router.history.current)) : this._routerRoot = this.$parent && this.$parent._routerRoot || this, r(this, this) }, destroyed: function() { r(this) } }), Object.defineProperty(e.prototype, "$router", { get: function() { return this._routerRoot._router } }), Object.defineProperty(e.prototype, "$route", { get: function() { return this._routerRoot._route } }), e.component("RouterView", v), e.component("RouterLink", ot); var o = e.config.optionMergeStrategies;
                o.beforeRouteEnter = o.beforeRouteLeave = o.beforeRouteUpdate = o.created } }, ne.version = "3.3.4", at && window.Vue && window.Vue.use(ne); var ie = ne,
            ae = document.head.querySelector('meta[name="csrf-token"]');
        ae && (o.a.defaults.headers.common["X-CSRF-TOKEN"] = ae.content), d.a.use(ie), s.a.tz.setDefault("utc"); var ce = new ie({ routes: u, mode: "history", base: "/vapor-ui" });
        ce.beforeEach((function(t, e, n) { t.meta.title = t.meta.createTitle(t.params), document.title = "Vapor UI - " + t.meta.title, n() })), d.a.component("vue-json-pretty", h.a), d.a.component("async-button", n("gU9Z").default), d.a.component("bar-chart", n("5fE9").default), d.a.component("search", n("JX/T").default), d.a.component("search-details", n("EKms").default), d.a.component("search-empty-results", n("oOv/").default), d.a.component("loader", n("S4HP").default), d.a.component("metric", n("VUlF").default), d.a.component("popover", n("gUS6").default), d.a.component("icon-arrow-down", n("qTD5").default), d.a.component("icon-arrow-up", n("ngQL").default), d.a.component("icon-refresh", n("mn3R").default), d.a.component("icon-search", n("s7Sk").default), d.a.component("icon-cloud", n("xg2z").default), d.a.component("icon-collection", n("uYEX").default), d.a.component("icon-exclamation", n("/VWV").default), d.a.component("icon-desktop-computer", n("UG0G").default), d.a.component("icon-dots-vertical", n("+65i").default), d.a.component("icon-loader", n("kL2E").default), d.a.component("icon-flag", n("pie5").default), d.a.component("icon-calendar", n("gq6m").default), d.a.component("icon-clipboard-copy", n("Icfn").default), d.a.component("icon-chevron-right", n("nxON").default), d.a.component("icon-eye", n("Z3/L").default), d.a.component("icon-chart-bar", n("QH0F").default), d.a.component("icon-terminal", n("texg").default), d.a.component("icon-x-circle", n("DbsA").default), d.a.component("icon-information-circle", n("lfGC").default), d.a.mixin(l), new d.a({ el: "#vapor-ui", router: ce }) }, endd: function(t, e, n) { "use strict";

        function r(t) { this.message = t }
        r.prototype.toString = function() { return "Cancel" + (this.message ? ": " + this.message : "") }, r.prototype.__CANCEL__ = !0, t.exports = r }, eqyj: function(t, e, n) { "use strict"; var r = n("xTJ+");
        t.exports = r.isStandardBrowserEnv() ? { write: function(t, e, n, o, i, a) { var c = [];
                c.push(t + "=" + encodeURIComponent(e)), r.isNumber(n) && c.push("expires=" + new Date(n).toGMTString()), r.isString(o) && c.push("path=" + o), r.isString(i) && c.push("domain=" + i), !0 === a && c.push("secure"), document.cookie = c.join("; ") }, read: function(t) { var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")); return e ? decodeURIComponent(e[3]) : null }, remove: function(t) { this.write(t, "", Date.now() - 864e5) } } : { write: function() {}, read: function() { return null }, remove: function() {} } }, f0Wu: function(t, e, n) {
        (t.exports = n("Dvum")).tz.load(n("bNI1")) }, g7np: function(t, e, n) { "use strict"; var r = n("2SVd"),
            o = n("5oMp");
        t.exports = function(t, e) { return t && !r(e) ? o(t, e) : e } }, gU9Z: function(t, e, n) { "use strict";
        n.r(e); var r = { components: { Loader: n("S4HP").default }, props: { type: { default: "button" }, loading: {}, disabled: {} } },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this,
                    e = t.$createElement,
                    n = t._self._c || e; return n("button", { staticClass: "relative", class: { "cursor-not-allowed": t.loading }, attrs: { type: t.type, disabled: t.disabled } }, [t.loading ? n("span", { staticClass: "absolute", staticStyle: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" } }, [n("loader", { attrs: { color: "white", width: "32" } })], 1) : t._e(), t._v(" "), n("span", { class: { invisible: t.loading } }, [t._t("default")], 2)]) }), [], !1, null, null, null);
        e.default = i.exports }, gUS6: function(t, e, n) { "use strict";
        n.r(e); var r = n("Um5y"),
            o = n.n(r),
            i = (n("oQFu"), { components: { popper: o.a }, props: { placement: { type: [String], required: !1, default: "top" } } }),
            a = n("KHd+"),
            c = Object(a.a)(i, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("popper", { attrs: { trigger: "clickToOpen", options: { placement: this.placement, modifiers: { offset: { offset: "0,10px" } } } } }, [e("div", { staticClass: "popper" }, [e("p", { staticClass: "m-1 text-sm leading-5 text-gray-500" }, [this._t("content")], 2)]), this._v(" "), e("div", { staticClass: "cursor-pointer", attrs: { slot: "reference" }, slot: "reference" }, [this._t("button")], 2)]) }), [], !1, null, null, null);
        e.default = c.exports }, gq6m: function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("zu+r").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("svg", { class: this.sizeClass, attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [e("path", { attrs: { "clip-rule": "evenodd", "fill-rule": "evenodd", d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" } })]) }), [], !1, null, null, null);
        e.default = i.exports }, "jfS+": function(t, e, n) { "use strict"; var r = n("endd");

        function o(t) { if ("function" != typeof t) throw new TypeError("executor must be a function."); var e;
            this.promise = new Promise((function(t) { e = t })); var n = this;
            t((function(t) { n.reason || (n.reason = new r(t), e(n.reason)) })) }
        o.prototype.throwIfRequested = function() { if (this.reason) throw this.reason }, o.source = function() { var t; return { token: new o((function(e) { t = e })), cancel: t } }, t.exports = o }, kL2E: function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("zu+r").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("svg", { class: this.sizeClass, attrs: { viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg" } }, [e("circle", { attrs: { cx: "15", cy: "15", r: "15" } }, [e("animate", { attrs: { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" } }), this._v(" "), e("animate", { attrs: { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" } })]), this._v(" "), e("circle", { attrs: { cx: "60", cy: "15", r: "9", "fill-opacity": "0.3" } }, [e("animate", { attrs: { attributeName: "r", from: "9", to: "9", begin: "0s", dur: "0.8s", values: "9;15;9", calcMode: "linear", repeatCount: "indefinite" } }), this._v(" "), e("animate", { attrs: { attributeName: "fill-opacity", from: "0.5", to: "0.5", begin: "0s", dur: "0.8s", values: ".5;1;.5", calcMode: "linear", repeatCount: "indefinite" } })]), this._v(" "), e("circle", { attrs: { cx: "105", cy: "15", r: "15" } }, [e("animate", { attrs: { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" } }), this._v(" "), e("animate", { attrs: { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" } })])]) }), [], !1, null, null, null);
        e.default = i.exports }, lfGC: function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("zu+r").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("svg", { class: this.sizeClass, attrs: { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" } }, [e("path", { attrs: { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" } })]) }), [], !1, null, null, null);
        e.default = i.exports }, mn3R: function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("zu+r").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("svg", { class: this.sizeClass, attrs: { viewBox: "0 0 20 20" } }, [e("path", { attrs: { fill: "#d2d6dc", "fill-rule": "evenodd", d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" } })]) }), [], !1, null, null, null);
        e.default = i.exports }, ngQL: function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("zu+r").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("svg", { class: this.sizeClass, attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" } }, [e("path", { attrs: { "fill-rule": "evenodd", d: "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z", "clip-rule": "evenodd" } })]) }), [], !1, null, null, null);
        e.default = i.exports }, nxON: function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("zu+r").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("svg", { class: this.sizeClass, attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [e("path", { attrs: { "clip-rule": "evenodd", "fill-rule": "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" } })]) }), [], !1, null, null, null);
        e.default = i.exports }, "oOv/": function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("zu+r").a] },
            o = n("KHd+"),
            i = { components: { DocumentIcon: Object(o.a)(r, (function() { var t = this.$createElement,
                            e = this._self._c || t; return e("svg", { class: this.sizeClass, attrs: { viewBox: "0 0 24 24" } }, [e("path", { staticClass: "fill-current text-gray-300", attrs: { d: "M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2z" } }), this._v(" "), e("polygon", { staticClass: "fill-current text-gray-500", attrs: { points: "14 2 20 8 14 8" } })]) }), [], !1, null, null, null).exports } },
            a = Object(o.a)(i, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("div", [e("div", { staticClass: "flex items-center justify-center" }, [e("document-icon", { attrs: { size: "16" } })], 1), this._v(" "), e("div", { staticClass: "mt-4 text-center max-w-xl mx-auto" }, [this._t("default")], 2)]) }), [], !1, null, null, null);
        e.default = a.exports }, oQFu: function(t, e, n) { var r = n("vUe1"); "string" == typeof r && (r = [
            [t.i, r, ""]
        ]); var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        n("aET+")(r, o);
        r.locals && (t.exports = r.locals) }, pie5: function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("zu+r").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("svg", { class: this.sizeClass, attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [e("path", { attrs: { "fill-rule": "evenodd", d: "M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z", "clip-rule": "evenodd" } })]) }), [], !1, null, null, null);
        e.default = i.exports }, pupy: function(t, e) {}, qTD5: function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("zu+r").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("svg", { class: this.sizeClass, attrs: { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" } }, [e("path", { attrs: { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M19 14l-7 7m0 0l-7-7m7 7V3" } })]) }), [], !1, null, null, null);
        e.default = i.exports }, s7Sk: function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("zu+r").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("svg", { class: this.sizeClass, attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [e("path", { attrs: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" } })]) }), [], !1, null, null, null);
        e.default = i.exports }, snLp: function(t, e, n) { "use strict";
        n("wd/R");
        e.a = { methods: { formatQuantity: function(t) { var e = function(t, e, n) { return (t / e).toFixed(1).replace(/\.0$/, "") + n }; return t >= 1e6 ? e(t, 1e6, "M") : t >= 1e3 ? e(t, 1e3, "K") : t <= -1e6 ? e(t, -1e6, "M") : t <= -1e3 ? e(t, -1e3, "K") : t } } } }, tQ2B: function(t, e, n) { "use strict"; var r = n("xTJ+"),
            o = n("Rn+g"),
            i = n("MLWZ"),
            a = n("g7np"),
            c = n("w0Vi"),
            s = n("OTTw"),
            l = n("LYNF");
        t.exports = function(t) { return new Promise((function(e, u) { var f = t.data,
                    d = t.headers;
                r.isFormData(f) && delete d["Content-Type"]; var p = new XMLHttpRequest; if (t.auth) { var h = t.auth.username || "",
                        M = t.auth.password || "";
                    d.Authorization = "Basic " + btoa(h + ":" + M) } var b = a(t.baseURL, t.url); if (p.open(t.method.toUpperCase(), i(b, t.params, t.paramsSerializer), !0), p.timeout = t.timeout, p.onreadystatechange = function() { if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) { var n = "getAllResponseHeaders" in p ? c(p.getAllResponseHeaders()) : null,
                                r = { data: t.responseType && "text" !== t.responseType ? p.response : p.responseText, status: p.status, statusText: p.statusText, headers: n, config: t, request: p };
                            o(e, u, r), p = null } }, p.onabort = function() { p && (u(l("Request aborted", t, "ECONNABORTED", p)), p = null) }, p.onerror = function() { u(l("Network Error", t, null, p)), p = null }, p.ontimeout = function() { var e = "timeout of " + t.timeout + "ms exceeded";
                        t.timeoutErrorMessage && (e = t.timeoutErrorMessage), u(l(e, t, "ECONNABORTED", p)), p = null }, r.isStandardBrowserEnv()) { var m = n("eqyj"),
                        v = (t.withCredentials || s(b)) && t.xsrfCookieName ? m.read(t.xsrfCookieName) : void 0;
                    v && (d[t.xsrfHeaderName] = v) } if ("setRequestHeader" in p && r.forEach(d, (function(t, e) { void 0 === f && "content-type" === e.toLowerCase() ? delete d[e] : p.setRequestHeader(e, t) })), r.isUndefined(t.withCredentials) || (p.withCredentials = !!t.withCredentials), t.responseType) try { p.responseType = t.responseType } catch (e) { if ("json" !== t.responseType) throw e }
                "function" == typeof t.onDownloadProgress && p.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && p.upload && p.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then((function(t) { p && (p.abort(), u(t), p = null) })), void 0 === f && (f = null), p.send(f) })) } }, texg: function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("zu+r").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("svg", { class: this.sizeClass, attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [e("path", { attrs: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" } })]) }), [], !1, null, null, null);
        e.default = i.exports }, uYEX: function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("zu+r").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("svg", { class: this.sizeClass, attrs: { fill: "currentColor", viewBox: "0 0 20 20" } }, [e("path", { attrs: { d: "M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" } })]) }), [], !1, null, null, null);
        e.default = i.exports }, vDqi: function(t, e, n) { t.exports = n("zuR4") }, vUe1: function(t, e, n) {
        (t.exports = n("I1BE")(!1)).push([t.i, '.popper {\n  width: auto;\n  background-color: #fafafa;\n  color: #212121;\n  text-align: center;\n  padding: 2px;\n  display: inline-block;\n  border-radius: 3px;\n  position: absolute;\n  font-size: 14px;\n  font-weight: normal;\n  border: 1px #ebebeb solid;\n  z-index: 200000;\n  box-shadow: rgb(58, 58, 58) 0 0 6px 0;\n}\n\n.popper .popper__arrow {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  position: absolute;\n  margin: 5px;\n}\n\n.popper[x-placement^="top"] {\n  margin-bottom: 5px;\n}\n\n.popper[x-placement^="top"] .popper__arrow {\n  border-width: 5px 5px 0 5px;\n  border-color: #fafafa transparent transparent transparent;\n  bottom: -5px;\n  left: calc(50% - 5px);\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.popper[x-placement^="bottom"] {\n  margin-top: 5px;\n}\n\n.popper[x-placement^="bottom"] .popper__arrow {\n  border-width: 0 5px 5px 5px;\n  border-color: transparent transparent #fafafa transparent;\n  top: -5px;\n  left: calc(50% - 5px);\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.popper[x-placement^="right"] {\n  margin-left: 5px;\n}\n\n.popper[x-placement^="right"] .popper__arrow {\n  border-width: 5px 5px 5px 0;\n  border-color: transparent #fafafa transparent transparent;\n  left: -5px;\n  top: calc(50% - 5px);\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.popper[x-placement^="left"] {\n  margin-right: 5px;\n}\n\n.popper[x-placement^="left"] .popper__arrow {\n  border-width: 5px 0 5px 5px;\n  border-color: transparent transparent transparent #fafafa;\n  right: -5px;\n  top: calc(50% - 5px);\n  margin-left: 0;\n  margin-right: 0;\n}\n', ""]) }, w0Vi: function(t, e, n) { "use strict"; var r = n("xTJ+"),
            o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        t.exports = function(t) { var e, n, i, a = {}; return t ? (r.forEach(t.split("\n"), (function(t) { if (i = t.indexOf(":"), e = r.trim(t.substr(0, i)).toLowerCase(), n = r.trim(t.substr(i + 1)), e) { if (a[e] && o.indexOf(e) >= 0) return;
                    a[e] = "set-cookie" === e ? (a[e] ? a[e] : []).concat([n]) : a[e] ? a[e] + ", " + n : n } })), a) : a } }, w0jZ: function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("044u").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this,
                    e = t.$createElement,
                    n = t._self._c || e; return n("search-details", { scopedSlots: t._u([{ key: "details", fn: function(e) { var r = e.entry; return [n("div", { staticClass: "sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5" }, [n("dt", { staticClass: "text-sm leading-5 font-medium text-gray-500" }, [t._v("Time (" + t._s(t.moment().tz.guess()) + ")")]), t._v(" "), n("dd", { staticClass: "mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2" }, [n("div", { staticClass: "text-sm leading-5 font-medium text-gray-900" }, [t._v("\n                    " + t._s(t.moment().utc(r.content.timestamp, "x").local().format("YYYY-MM-DD LTS")) + "\n                ")]), t._v(" "), n("div", { staticClass: "text-sm leading-5 text-gray-500" }, [t._v("\n                    " + t._s(t.moment().utc(r.content.timestamp, "x").fromNow()) + "\n                ")])])]), t._v(" "), n("div", { staticClass: "mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5" }, [n("dt", { staticClass: "text-sm leading-5 font-medium text-gray-500" }, [t._v("ID")]), t._v(" "), n("dd", { staticClass: "mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2" }, [t._v("\n                " + t._s(r.id) + "\n            ")])]), t._v(" "), n("div", { staticClass: "mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5" }, [n("dt", { staticClass: "text-sm leading-5 font-medium text-gray-500" }, [t._v("Log Stream Name")]), t._v(" "), n("dd", { staticClass: "mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2" }, [t._v("\n                " + t._s(r.content.logStreamName) + "\n            ")])]), t._v(" "), r.requestId ? n("div", { staticClass: "mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5" }, [n("dt", { staticClass: "text-sm leading-5 font-medium text-gray-500" }, [t._v("Request ID")]), t._v(" "), n("dd", { staticClass: "mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2" }, [t._v("\n                " + t._s(r.requestId) + "\n            ")])]) : t._e(), t._v(" "), n("div", { staticClass: "mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5" }, [n("dt", { staticClass: "text-sm leading-5 font-medium text-gray-500" }, [t._v("Type")]), t._v(" "), n("dd", { class: "mt-1 text-sm leading-5 text-" + t.logColor(r.type) + "-900 sm:mt-0 sm:col-span-2" }, [t._v("\n                " + t._s(r.type) + "\n            ")])]), t._v(" "), r.location ? n("div", { staticClass: "mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5" }, [n("dt", { staticClass: "text-sm leading-5 font-medium text-gray-500" }, [t._v("Location")]), t._v(" "), n("dd", { class: "mt-1 text-sm leading-5 text-" + t.logColor(r.type) + "-900 sm:mt-0 sm:col-span-2" }, [t._v("\n                " + t._s(r.location) + "\n            ")])]) : t._e(), t._v(" "), r.content.message.context && r.content.message.context.command ? n("div", { staticClass: "mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5" }, [n("dt", { staticClass: "text-sm leading-5 font-medium text-gray-500" }, [t._v("Command")]), t._v(" "), n("dd", { staticClass: "mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2" }, [t._v("\n                " + t._s(r.content.message.context.command) + "\n            ")])]) : t._e(), t._v(" "), r.content.message.output ? t._e() : n("div", { staticClass: "mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5" }, [n("dt", { staticClass: "text-sm leading-5 font-medium text-gray-500" }, [t._v("Message")]), t._v(" "), n("dd", { staticClass: "mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2" }, [t._v("\n                " + t._s(r.content.message.message ? r.content.message.message : r.content.message) + "\n            ")])]), t._v(" "), r.content.message.context && "[]" !== JSON.stringify(r.content.message.context) ? n("div", { staticClass: "mt-8 sm:mt-0 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5 sm:col-span-2" }, [n("dd", { staticClass: "mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2" }, [n("div", { staticClass: "border border-gray-200 rounded-md bg-gray-900 text-white overflow-x-auto" }, [r.content.message.output ? n("pre", { staticClass: "m-4 3rem" }, [t._v("                        " + t._s(r.content.message.output.trim()) + "\n                    ")]) : n("vue-json-pretty", { staticClass: "m-4 3rem", attrs: { showLine: !1, deep: 4, data: r.content.message.context } })], 1)])]) : t._e()] } }]) }) }), [], !1, null, null, null);
        e.default = i.exports }, "wd/R": function(t, e, n) {
        (function(t) { t.exports = function() { "use strict"; var e, n;

                function r() { return e.apply(null, arguments) }

                function o(t) { return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t) }

                function i(t) { return null != t && "[object Object]" === Object.prototype.toString.call(t) }

                function a(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }

                function c(t) { if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length; var e; for (e in t)
                        if (a(t, e)) return !1;
                    return !0 }

                function s(t) { return void 0 === t }

                function l(t) { return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t) }

                function u(t) { return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t) }

                function f(t, e) { var n, r = []; for (n = 0; n < t.length; ++n) r.push(e(t[n], n)); return r }

                function d(t, e) { for (var n in e) a(e, n) && (t[n] = e[n]); return a(e, "toString") && (t.toString = e.toString), a(e, "valueOf") && (t.valueOf = e.valueOf), t }

                function p(t, e, n, r) { return Oe(t, e, n, r, !0).utc() }

                function h(t) { return null == t._pf && (t._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidEra: null, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], era: null, meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), t._pf }

                function M(t) { if (null == t._isValid) { var e = h(t),
                            r = n.call(e.parsedDateParts, (function(t) { return null != t })),
                            o = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidEra && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && r); if (t._strict && (o = o && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return o;
                        t._isValid = o } return t._isValid }

                function b(t) { var e = p(NaN); return null != t ? d(h(e), t) : h(e).userInvalidated = !0, e }
                n = Array.prototype.some ? Array.prototype.some : function(t) { var e, n = Object(this),
                        r = n.length >>> 0; for (e = 0; e < r; e++)
                        if (e in n && t.call(this, n[e], e, n)) return !0;
                    return !1 }; var m = r.momentProperties = [],
                    v = !1;

                function g(t, e) { var n, r, o; if (s(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), s(e._i) || (t._i = e._i), s(e._f) || (t._f = e._f), s(e._l) || (t._l = e._l), s(e._strict) || (t._strict = e._strict), s(e._tzm) || (t._tzm = e._tzm), s(e._isUTC) || (t._isUTC = e._isUTC), s(e._offset) || (t._offset = e._offset), s(e._pf) || (t._pf = h(e)), s(e._locale) || (t._locale = e._locale), m.length > 0)
                        for (n = 0; n < m.length; n++) s(o = e[r = m[n]]) || (t[r] = o); return t }

                function A(t) { g(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === v && (v = !0, r.updateOffset(this), v = !1) }

                function y(t) { return t instanceof A || null != t && null != t._isAMomentObject }

                function z(t) {!1 === r.suppressDeprecationWarnings && "undefined" != typeof console && console.warn }

                function _(t, e) { var n = !0; return d((function() { if (null != r.deprecationHandler && r.deprecationHandler(null, t), n) { var o, i, c, s = []; for (i = 0; i < arguments.length; i++) { if (o = "", "object" == typeof arguments[i]) { for (c in o += "\n[" + i + "] ", arguments[0]) a(arguments[0], c) && (o += c + ": " + arguments[0][c] + ", ");
                                    o = o.slice(0, -2) } else o = arguments[i];
                                s.push(o) }
                            z((Array.prototype.slice.call(s).join(""), (new Error).stack)), n = !1 } return e.apply(this, arguments) }), e) } var O, x = {};

                function L(t, e) { null != r.deprecationHandler && r.deprecationHandler(t, e), x[t] || (z(), x[t] = !0) }

                function N(t) { return "undefined" != typeof Function && t instanceof Function || "[object Function]" === Object.prototype.toString.call(t) }

                function w(t, e) { var n, r = d({}, t); for (n in e) a(e, n) && (i(t[n]) && i(e[n]) ? (r[n] = {}, d(r[n], t[n]), d(r[n], e[n])) : null != e[n] ? r[n] = e[n] : delete r[n]); for (n in t) a(t, n) && !a(e, n) && i(t[n]) && (r[n] = d({}, r[n])); return r }

                function T(t) { null != t && this.set(t) }

                function q(t, e, n) { var r = "" + Math.abs(t),
                        o = e - r.length; return (t >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + r }
                r.suppressDeprecationWarnings = !1, r.deprecationHandler = null, O = Object.keys ? Object.keys : function(t) { var e, n = []; for (e in t) a(t, e) && n.push(e); return n }; var C = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                    W = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                    S = {},
                    k = {};

                function B(t, e, n, r) { var o = r; "string" == typeof r && (o = function() { return this[r]() }), t && (k[t] = o), e && (k[e[0]] = function() { return q(o.apply(this, arguments), e[1], e[2]) }), n && (k[n] = function() { return this.localeData().ordinal(o.apply(this, arguments), t) }) }

                function X(t, e) { return t.isValid() ? (e = E(e, t.localeData()), S[e] = S[e] || function(t) { var e, n, r, o = t.match(C); for (e = 0, n = o.length; e < n; e++) k[o[e]] ? o[e] = k[o[e]] : o[e] = (r = o[e]).match(/\[[\s\S]/) ? r.replace(/^\[|\]$/g, "") : r.replace(/\\/g, ""); return function(e) { var r, i = ""; for (r = 0; r < n; r++) i += N(o[r]) ? o[r].call(e, t) : o[r]; return i } }(e), S[e](t)) : t.localeData().invalidDate() }

                function E(t, e) { var n = 5;

                    function r(t) { return e.longDateFormat(t) || t } for (W.lastIndex = 0; n >= 0 && W.test(t);) t = t.replace(W, r), W.lastIndex = 0, n -= 1; return t } var D = {};

                function R(t, e) { var n = t.toLowerCase();
                    D[n] = D[n + "s"] = D[e] = t }

                function P(t) { return "string" == typeof t ? D[t] || D[t.toLowerCase()] : void 0 }

                function I(t) { var e, n, r = {}; for (n in t) a(t, n) && (e = P(n)) && (r[e] = t[n]); return r } var j = {};

                function F(t, e) { j[t] = e }

                function H(t) { return t % 4 == 0 && t % 100 != 0 || t % 400 == 0 }

                function U(t) { return t < 0 ? Math.ceil(t) || 0 : Math.floor(t) }

                function V(t) { var e = +t,
                        n = 0; return 0 !== e && isFinite(e) && (n = U(e)), n }

                function $(t, e) { return function(n) { return null != n ? (G(this, t, n), r.updateOffset(this, e), this) : Y(this, t) } }

                function Y(t, e) { return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN }

                function G(t, e, n) { t.isValid() && !isNaN(n) && ("FullYear" === e && H(t.year()) && 1 === t.month() && 29 === t.date() ? (n = V(n), t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), yt(n, t.month()))) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n)) } var K, J = /\d/,
                    Q = /\d\d/,
                    Z = /\d{3}/,
                    tt = /\d{4}/,
                    et = /[+-]?\d{6}/,
                    nt = /\d\d?/,
                    rt = /\d\d\d\d?/,
                    ot = /\d\d\d\d\d\d?/,
                    it = /\d{1,3}/,
                    at = /\d{1,4}/,
                    ct = /[+-]?\d{1,6}/,
                    st = /\d+/,
                    lt = /[+-]?\d+/,
                    ut = /Z|[+-]\d\d:?\d\d/gi,
                    ft = /Z|[+-]\d\d(?::?\d\d)?/gi,
                    dt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

                function pt(t, e, n) { K[t] = N(e) ? e : function(t, r) { return t && n ? n : e } }

                function ht(t, e) { return a(K, t) ? K[t](e._strict, e._locale) : new RegExp(Mt(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(t, e, n, r, o) { return e || n || r || o })))) }

                function Mt(t) { return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }
                K = {}; var bt, mt = {};

                function vt(t, e) { var n, r = e; for ("string" == typeof t && (t = [t]), l(e) && (r = function(t, n) { n[e] = V(t) }), n = 0; n < t.length; n++) mt[t[n]] = r }

                function gt(t, e) { vt(t, (function(t, n, r, o) { r._w = r._w || {}, e(t, r._w, r, o) })) }

                function At(t, e, n) { null != e && a(mt, t) && mt[t](e, n._a, n, t) }

                function yt(t, e) { if (isNaN(t) || isNaN(e)) return NaN; var n, r = (e % (n = 12) + n) % n; return t += (e - r) / 12, 1 === r ? H(t) ? 29 : 28 : 31 - r % 7 % 2 }
                bt = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) { var e; for (e = 0; e < this.length; ++e)
                        if (this[e] === t) return e;
                    return -1 }, B("M", ["MM", 2], "Mo", (function() { return this.month() + 1 })), B("MMM", 0, 0, (function(t) { return this.localeData().monthsShort(this, t) })), B("MMMM", 0, 0, (function(t) { return this.localeData().months(this, t) })), R("month", "M"), F("month", 8), pt("M", nt), pt("MM", nt, Q), pt("MMM", (function(t, e) { return e.monthsShortRegex(t) })), pt("MMMM", (function(t, e) { return e.monthsRegex(t) })), vt(["M", "MM"], (function(t, e) { e[1] = V(t) - 1 })), vt(["MMM", "MMMM"], (function(t, e, n, r) { var o = n._locale.monthsParse(t, r, n._strict);
                    null != o ? e[1] = o : h(n).invalidMonth = t })); var zt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    _t = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    Ot = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                    xt = dt,
                    Lt = dt;

                function Nt(t, e, n) { var r, o, i, a = t.toLocaleLowerCase(); if (!this._monthsParse)
                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) i = p([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase(); return n ? "MMM" === e ? -1 !== (o = bt.call(this._shortMonthsParse, a)) ? o : null : -1 !== (o = bt.call(this._longMonthsParse, a)) ? o : null : "MMM" === e ? -1 !== (o = bt.call(this._shortMonthsParse, a)) || -1 !== (o = bt.call(this._longMonthsParse, a)) ? o : null : -1 !== (o = bt.call(this._longMonthsParse, a)) || -1 !== (o = bt.call(this._shortMonthsParse, a)) ? o : null }

                function wt(t, e) { var n; if (!t.isValid()) return t; if ("string" == typeof e)
                        if (/^\d+$/.test(e)) e = V(e);
                        else if (!l(e = t.localeData().monthsParse(e))) return t; return n = Math.min(t.date(), yt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t }

                function Tt(t) { return null != t ? (wt(this, t), r.updateOffset(this, !0), this) : Y(this, "Month") }

                function qt() {
                    function t(t, e) { return e.length - t.length } var e, n, r = [],
                        o = [],
                        i = []; for (e = 0; e < 12; e++) n = p([2e3, e]), r.push(this.monthsShort(n, "")), o.push(this.months(n, "")), i.push(this.months(n, "")), i.push(this.monthsShort(n, "")); for (r.sort(t), o.sort(t), i.sort(t), e = 0; e < 12; e++) r[e] = Mt(r[e]), o[e] = Mt(o[e]); for (e = 0; e < 24; e++) i[e] = Mt(i[e]);
                    this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i") }

                function Ct(t) { return H(t) ? 366 : 365 }
                B("Y", 0, 0, (function() { var t = this.year(); return t <= 9999 ? q(t, 4) : "+" + t })), B(0, ["YY", 2], 0, (function() { return this.year() % 100 })), B(0, ["YYYY", 4], 0, "year"), B(0, ["YYYYY", 5], 0, "year"), B(0, ["YYYYYY", 6, !0], 0, "year"), R("year", "y"), F("year", 1), pt("Y", lt), pt("YY", nt, Q), pt("YYYY", at, tt), pt("YYYYY", ct, et), pt("YYYYYY", ct, et), vt(["YYYYY", "YYYYYY"], 0), vt("YYYY", (function(t, e) { e[0] = 2 === t.length ? r.parseTwoDigitYear(t) : V(t) })), vt("YY", (function(t, e) { e[0] = r.parseTwoDigitYear(t) })), vt("Y", (function(t, e) { e[0] = parseInt(t, 10) })), r.parseTwoDigitYear = function(t) { return V(t) + (V(t) > 68 ? 1900 : 2e3) }; var Wt = $("FullYear", !0);

                function St(t, e, n, r, o, i, a) { var c; return t < 100 && t >= 0 ? (c = new Date(t + 400, e, n, r, o, i, a), isFinite(c.getFullYear()) && c.setFullYear(t)) : c = new Date(t, e, n, r, o, i, a), c }

                function kt(t) { var e, n; return t < 100 && t >= 0 ? ((n = Array.prototype.slice.call(arguments))[0] = t + 400, e = new Date(Date.UTC.apply(null, n)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t)) : e = new Date(Date.UTC.apply(null, arguments)), e }

                function Bt(t, e, n) { var r = 7 + e - n; return -(7 + kt(t, 0, r).getUTCDay() - e) % 7 + r - 1 }

                function Xt(t, e, n, r, o) { var i, a, c = 1 + 7 * (e - 1) + (7 + n - r) % 7 + Bt(t, r, o); return c <= 0 ? a = Ct(i = t - 1) + c : c > Ct(t) ? (i = t + 1, a = c - Ct(t)) : (i = t, a = c), { year: i, dayOfYear: a } }

                function Et(t, e, n) { var r, o, i = Bt(t.year(), e, n),
                        a = Math.floor((t.dayOfYear() - i - 1) / 7) + 1; return a < 1 ? r = a + Dt(o = t.year() - 1, e, n) : a > Dt(t.year(), e, n) ? (r = a - Dt(t.year(), e, n), o = t.year() + 1) : (o = t.year(), r = a), { week: r, year: o } }

                function Dt(t, e, n) { var r = Bt(t, e, n),
                        o = Bt(t + 1, e, n); return (Ct(t) - r + o) / 7 }

                function Rt(t, e) { return t.slice(e, 7).concat(t.slice(0, e)) }
                B("w", ["ww", 2], "wo", "week"), B("W", ["WW", 2], "Wo", "isoWeek"), R("week", "w"), R("isoWeek", "W"), F("week", 5), F("isoWeek", 5), pt("w", nt), pt("ww", nt, Q), pt("W", nt), pt("WW", nt, Q), gt(["w", "ww", "W", "WW"], (function(t, e, n, r) { e[r.substr(0, 1)] = V(t) })), B("d", 0, "do", "day"), B("dd", 0, 0, (function(t) { return this.localeData().weekdaysMin(this, t) })), B("ddd", 0, 0, (function(t) { return this.localeData().weekdaysShort(this, t) })), B("dddd", 0, 0, (function(t) { return this.localeData().weekdays(this, t) })), B("e", 0, 0, "weekday"), B("E", 0, 0, "isoWeekday"), R("day", "d"), R("weekday", "e"), R("isoWeekday", "E"), F("day", 11), F("weekday", 11), F("isoWeekday", 11), pt("d", nt), pt("e", nt), pt("E", nt), pt("dd", (function(t, e) { return e.weekdaysMinRegex(t) })), pt("ddd", (function(t, e) { return e.weekdaysShortRegex(t) })), pt("dddd", (function(t, e) { return e.weekdaysRegex(t) })), gt(["dd", "ddd", "dddd"], (function(t, e, n, r) { var o = n._locale.weekdaysParse(t, r, n._strict);
                    null != o ? e.d = o : h(n).invalidWeekday = t })), gt(["d", "e", "E"], (function(t, e, n, r) { e[r] = V(t) })); var Pt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    It = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    jt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    Ft = dt,
                    Ht = dt,
                    Ut = dt;

                function Vt(t, e, n) { var r, o, i, a = t.toLocaleLowerCase(); if (!this._weekdaysParse)
                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) i = p([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase(); return n ? "dddd" === e ? -1 !== (o = bt.call(this._weekdaysParse, a)) ? o : null : "ddd" === e ? -1 !== (o = bt.call(this._shortWeekdaysParse, a)) ? o : null : -1 !== (o = bt.call(this._minWeekdaysParse, a)) ? o : null : "dddd" === e ? -1 !== (o = bt.call(this._weekdaysParse, a)) || -1 !== (o = bt.call(this._shortWeekdaysParse, a)) || -1 !== (o = bt.call(this._minWeekdaysParse, a)) ? o : null : "ddd" === e ? -1 !== (o = bt.call(this._shortWeekdaysParse, a)) || -1 !== (o = bt.call(this._weekdaysParse, a)) || -1 !== (o = bt.call(this._minWeekdaysParse, a)) ? o : null : -1 !== (o = bt.call(this._minWeekdaysParse, a)) || -1 !== (o = bt.call(this._weekdaysParse, a)) || -1 !== (o = bt.call(this._shortWeekdaysParse, a)) ? o : null }

                function $t() {
                    function t(t, e) { return e.length - t.length } var e, n, r, o, i, a = [],
                        c = [],
                        s = [],
                        l = []; for (e = 0; e < 7; e++) n = p([2e3, 1]).day(e), r = Mt(this.weekdaysMin(n, "")), o = Mt(this.weekdaysShort(n, "")), i = Mt(this.weekdays(n, "")), a.push(r), c.push(o), s.push(i), l.push(r), l.push(o), l.push(i);
                    a.sort(t), c.sort(t), s.sort(t), l.sort(t), this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i") }

                function Yt() { return this.hours() % 12 || 12 }

                function Gt(t, e) { B(t, 0, 0, (function() { return this.localeData().meridiem(this.hours(), this.minutes(), e) })) }

                function Kt(t, e) { return e._meridiemParse }
                B("H", ["HH", 2], 0, "hour"), B("h", ["hh", 2], 0, Yt), B("k", ["kk", 2], 0, (function() { return this.hours() || 24 })), B("hmm", 0, 0, (function() { return "" + Yt.apply(this) + q(this.minutes(), 2) })), B("hmmss", 0, 0, (function() { return "" + Yt.apply(this) + q(this.minutes(), 2) + q(this.seconds(), 2) })), B("Hmm", 0, 0, (function() { return "" + this.hours() + q(this.minutes(), 2) })), B("Hmmss", 0, 0, (function() { return "" + this.hours() + q(this.minutes(), 2) + q(this.seconds(), 2) })), Gt("a", !0), Gt("A", !1), R("hour", "h"), F("hour", 13), pt("a", Kt), pt("A", Kt), pt("H", nt), pt("h", nt), pt("k", nt), pt("HH", nt, Q), pt("hh", nt, Q), pt("kk", nt, Q), pt("hmm", rt), pt("hmmss", ot), pt("Hmm", rt), pt("Hmmss", ot), vt(["H", "HH"], 3), vt(["k", "kk"], (function(t, e, n) { var r = V(t);
                    e[3] = 24 === r ? 0 : r })), vt(["a", "A"], (function(t, e, n) { n._isPm = n._locale.isPM(t), n._meridiem = t })), vt(["h", "hh"], (function(t, e, n) { e[3] = V(t), h(n).bigHour = !0 })), vt("hmm", (function(t, e, n) { var r = t.length - 2;
                    e[3] = V(t.substr(0, r)), e[4] = V(t.substr(r)), h(n).bigHour = !0 })), vt("hmmss", (function(t, e, n) { var r = t.length - 4,
                        o = t.length - 2;
                    e[3] = V(t.substr(0, r)), e[4] = V(t.substr(r, 2)), e[5] = V(t.substr(o)), h(n).bigHour = !0 })), vt("Hmm", (function(t, e, n) { var r = t.length - 2;
                    e[3] = V(t.substr(0, r)), e[4] = V(t.substr(r)) })), vt("Hmmss", (function(t, e, n) { var r = t.length - 4,
                        o = t.length - 2;
                    e[3] = V(t.substr(0, r)), e[4] = V(t.substr(r, 2)), e[5] = V(t.substr(o)) })); var Jt, Qt = $("Hours", !0),
                    Zt = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", w: "a week", ww: "%d weeks", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: zt, monthsShort: _t, week: { dow: 0, doy: 6 }, weekdays: Pt, weekdaysMin: jt, weekdaysShort: It, meridiemParse: /[ap]\.?m?\.?/i },
                    te = {},
                    ee = {};

                function ne(t, e) { var n, r = Math.min(t.length, e.length); for (n = 0; n < r; n += 1)
                        if (t[n] !== e[n]) return n;
                    return r }

                function re(t) { return t ? t.toLowerCase().replace("_", "-") : t }

                function oe(e) { var n = null; if (void 0 === te[e] && void 0 !== t && t && t.exports) try { n = Jt._abbr,
                            function() { var t = new Error("Cannot find module 'undefined'"); throw t.code = "MODULE_NOT_FOUND", t }(), ie(n) } catch (t) { te[e] = null }
                    return te[e] }

                function ie(t, e) { var n; return t && ((n = s(e) ? ce(t) : ae(t, e)) ? Jt = n : "undefined" != typeof console && console.warn), Jt._abbr }

                function ae(t, e) { if (null !== e) { var n, r = Zt; if (e.abbr = t, null != te[t]) L("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = te[t]._config;
                        else if (null != e.parentLocale)
                            if (null != te[e.parentLocale]) r = te[e.parentLocale]._config;
                            else { if (null == (n = oe(e.parentLocale))) return ee[e.parentLocale] || (ee[e.parentLocale] = []), ee[e.parentLocale].push({ name: t, config: e }), null;
                                r = n._config }
                        return te[t] = new T(w(r, e)), ee[t] && ee[t].forEach((function(t) { ae(t.name, t.config) })), ie(t), te[t] } return delete te[t], null }

                function ce(t) { var e; if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Jt; if (!o(t)) { if (e = oe(t)) return e;
                        t = [t] } return function(t) { for (var e, n, r, o, i = 0; i < t.length;) { for (e = (o = re(t[i]).split("-")).length, n = (n = re(t[i + 1])) ? n.split("-") : null; e > 0;) { if (r = oe(o.slice(0, e).join("-"))) return r; if (n && n.length >= e && ne(o, n) >= e - 1) break;
                                e-- }
                            i++ } return Jt }(t) }

                function se(t) { var e, n = t._a; return n && -2 === h(t).overflow && (e = n[1] < 0 || n[1] > 11 ? 1 : n[2] < 1 || n[2] > yt(n[0], n[1]) ? 2 : n[3] < 0 || n[3] > 24 || 24 === n[3] && (0 !== n[4] || 0 !== n[5] || 0 !== n[6]) ? 3 : n[4] < 0 || n[4] > 59 ? 4 : n[5] < 0 || n[5] > 59 ? 5 : n[6] < 0 || n[6] > 999 ? 6 : -1, h(t)._overflowDayOfYear && (e < 0 || e > 2) && (e = 2), h(t)._overflowWeeks && -1 === e && (e = 7), h(t)._overflowWeekday && -1 === e && (e = 8), h(t).overflow = e), t } var le = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    ue = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    fe = /Z|[+-]\d\d(?::?\d\d)?/,
                    de = [
                        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                        ["YYYY-DDD", /\d{4}-\d{3}/],
                        ["YYYY-MM", /\d{4}-\d\d/, !1],
                        ["YYYYYYMMDD", /[+-]\d{10}/],
                        ["YYYYMMDD", /\d{8}/],
                        ["GGGG[W]WWE", /\d{4}W\d{3}/],
                        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                        ["YYYYDDD", /\d{7}/],
                        ["YYYYMM", /\d{6}/, !1],
                        ["YYYY", /\d{4}/, !1]
                    ],
                    pe = [
                        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                        ["HH:mm", /\d\d:\d\d/],
                        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                        ["HHmmss", /\d\d\d\d\d\d/],
                        ["HHmm", /\d\d\d\d/],
                        ["HH", /\d\d/]
                    ],
                    he = /^\/?Date\((-?\d+)/i,
                    Me = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                    be = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };

                function me(t) { var e, n, r, o, i, a, c = t._i,
                        s = le.exec(c) || ue.exec(c); if (s) { for (h(t).iso = !0, e = 0, n = de.length; e < n; e++)
                            if (de[e][1].exec(s[1])) { o = de[e][0], r = !1 !== de[e][2]; break }
                        if (null == o) return void(t._isValid = !1); if (s[3]) { for (e = 0, n = pe.length; e < n; e++)
                                if (pe[e][1].exec(s[3])) { i = (s[2] || " ") + pe[e][0]; break }
                            if (null == i) return void(t._isValid = !1) } if (!r && null != i) return void(t._isValid = !1); if (s[4]) { if (!fe.exec(s[4])) return void(t._isValid = !1);
                            a = "Z" }
                        t._f = o + (i || "") + (a || ""), ze(t) } else t._isValid = !1 }

                function ve(t) { var e = parseInt(t, 10); return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e }

                function ge(t) { var e, n, r, o, i, a, c, s, l = Me.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")); if (l) { if (n = l[4], r = l[3], o = l[2], i = l[5], a = l[6], c = l[7], s = [ve(n), _t.indexOf(r), parseInt(o, 10), parseInt(i, 10), parseInt(a, 10)], c && s.push(parseInt(c, 10)), e = s, ! function(t, e, n) { return !t || It.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() || (h(n).weekdayMismatch = !0, n._isValid = !1, !1) }(l[1], e, t)) return;
                        t._a = e, t._tzm = function(t, e, n) { if (t) return be[t]; if (e) return 0; var r = parseInt(n, 10),
                                o = r % 100; return (r - o) / 100 * 60 + o }(l[8], l[9], l[10]), t._d = kt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), h(t).rfc2822 = !0 } else t._isValid = !1 }

                function Ae(t, e, n) { return null != t ? t : null != e ? e : n }

                function ye(t) { var e, n, o, i, a, c = []; if (!t._d) { for (o = function(t) { var e = new Date(r.now()); return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()] }(t), t._w && null == t._a[2] && null == t._a[1] && function(t) { var e, n, r, o, i, a, c, s, l;
                                null != (e = t._w).GG || null != e.W || null != e.E ? (i = 1, a = 4, n = Ae(e.GG, t._a[0], Et(xe(), 1, 4).year), r = Ae(e.W, 1), ((o = Ae(e.E, 1)) < 1 || o > 7) && (s = !0)) : (i = t._locale._week.dow, a = t._locale._week.doy, l = Et(xe(), i, a), n = Ae(e.gg, t._a[0], l.year), r = Ae(e.w, l.week), null != e.d ? ((o = e.d) < 0 || o > 6) && (s = !0) : null != e.e ? (o = e.e + i, (e.e < 0 || e.e > 6) && (s = !0)) : o = i), r < 1 || r > Dt(n, i, a) ? h(t)._overflowWeeks = !0 : null != s ? h(t)._overflowWeekday = !0 : (c = Xt(n, r, o, i, a), t._a[0] = c.year, t._dayOfYear = c.dayOfYear) }(t), null != t._dayOfYear && (a = Ae(t._a[0], o[0]), (t._dayOfYear > Ct(a) || 0 === t._dayOfYear) && (h(t)._overflowDayOfYear = !0), n = kt(a, 0, t._dayOfYear), t._a[1] = n.getUTCMonth(), t._a[2] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = c[e] = o[e]; for (; e < 7; e++) t._a[e] = c[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                        24 === t._a[3] && 0 === t._a[4] && 0 === t._a[5] && 0 === t._a[6] && (t._nextDay = !0, t._a[3] = 0), t._d = (t._useUTC ? kt : St).apply(null, c), i = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[3] = 24), t._w && void 0 !== t._w.d && t._w.d !== i && (h(t).weekdayMismatch = !0) } }

                function ze(t) { if (t._f !== r.ISO_8601)
                        if (t._f !== r.RFC_2822) { t._a = [], h(t).empty = !0; var e, n, o, i, a, c, s = "" + t._i,
                                l = s.length,
                                u = 0; for (o = E(t._f, t._locale).match(C) || [], e = 0; e < o.length; e++) i = o[e], (n = (s.match(ht(i, t)) || [])[0]) && ((a = s.substr(0, s.indexOf(n))).length > 0 && h(t).unusedInput.push(a), s = s.slice(s.indexOf(n) + n.length), u += n.length), k[i] ? (n ? h(t).empty = !1 : h(t).unusedTokens.push(i), At(i, n, t)) : t._strict && !n && h(t).unusedTokens.push(i);
                            h(t).charsLeftOver = l - u, s.length > 0 && h(t).unusedInput.push(s), t._a[3] <= 12 && !0 === h(t).bigHour && t._a[3] > 0 && (h(t).bigHour = void 0), h(t).parsedDateParts = t._a.slice(0), h(t).meridiem = t._meridiem, t._a[3] = function(t, e, n) { var r; return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? ((r = t.isPM(n)) && e < 12 && (e += 12), r || 12 !== e || (e = 0), e) : e }(t._locale, t._a[3], t._meridiem), null !== (c = h(t).era) && (t._a[0] = t._locale.erasConvertYear(c, t._a[0])), ye(t), se(t) } else ge(t);
                    else me(t) }

                function _e(t) { var e = t._i,
                        n = t._f; return t._locale = t._locale || ce(t._l), null === e || void 0 === n && "" === e ? b({ nullInput: !0 }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), y(e) ? new A(se(e)) : (u(e) ? t._d = e : o(n) ? function(t) { var e, n, r, o, i, a, c = !1; if (0 === t._f.length) return h(t).invalidFormat = !0, void(t._d = new Date(NaN)); for (o = 0; o < t._f.length; o++) i = 0, a = !1, e = g({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[o], ze(e), M(e) && (a = !0), i += h(e).charsLeftOver, i += 10 * h(e).unusedTokens.length, h(e).score = i, c ? i < r && (r = i, n = e) : (null == r || i < r || a) && (r = i, n = e, a && (c = !0));
                        d(t, n || e) }(t) : n ? ze(t) : function(t) { var e = t._i;
                        s(e) ? t._d = new Date(r.now()) : u(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? function(t) { var e = he.exec(t._i);
                            null === e ? (me(t), !1 === t._isValid && (delete t._isValid, ge(t), !1 === t._isValid && (delete t._isValid, t._strict ? t._isValid = !1 : r.createFromInputFallback(t)))) : t._d = new Date(+e[1]) }(t) : o(e) ? (t._a = f(e.slice(0), (function(t) { return parseInt(t, 10) })), ye(t)) : i(e) ? function(t) { if (!t._d) { var e = I(t._i),
                                    n = void 0 === e.day ? e.date : e.day;
                                t._a = f([e.year, e.month, n, e.hour, e.minute, e.second, e.millisecond], (function(t) { return t && parseInt(t, 10) })), ye(t) } }(t) : l(e) ? t._d = new Date(e) : r.createFromInputFallback(t) }(t), M(t) || (t._d = null), t)) }

                function Oe(t, e, n, r, a) { var s, l = {}; return !0 !== e && !1 !== e || (r = e, e = void 0), !0 !== n && !1 !== n || (r = n, n = void 0), (i(t) && c(t) || o(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = a, l._l = n, l._i = t, l._f = e, l._strict = r, (s = new A(se(_e(l))))._nextDay && (s.add(1, "d"), s._nextDay = void 0), s }

                function xe(t, e, n, r) { return Oe(t, e, n, r, !1) }
                r.createFromInputFallback = _("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(t) { t._d = new Date(t._i + (t._useUTC ? " UTC" : "")) })), r.ISO_8601 = function() {}, r.RFC_2822 = function() {}; var Le = _("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() { var t = xe.apply(null, arguments); return this.isValid() && t.isValid() ? t < this ? this : t : b() })),
                    Ne = _("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() { var t = xe.apply(null, arguments); return this.isValid() && t.isValid() ? t > this ? this : t : b() }));

                function we(t, e) { var n, r; if (1 === e.length && o(e[0]) && (e = e[0]), !e.length) return xe(); for (n = e[0], r = 1; r < e.length; ++r) e[r].isValid() && !e[r][t](n) || (n = e[r]); return n } var Te = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

                function qe(t) { var e = I(t),
                        n = e.year || 0,
                        r = e.quarter || 0,
                        o = e.month || 0,
                        i = e.week || e.isoWeek || 0,
                        c = e.day || 0,
                        s = e.hour || 0,
                        l = e.minute || 0,
                        u = e.second || 0,
                        f = e.millisecond || 0;
                    this._isValid = function(t) { var e, n, r = !1; for (e in t)
                            if (a(t, e) && (-1 === bt.call(Te, e) || null != t[e] && isNaN(t[e]))) return !1;
                        for (n = 0; n < Te.length; ++n)
                            if (t[Te[n]]) { if (r) return !1;
                                parseFloat(t[Te[n]]) !== V(t[Te[n]]) && (r = !0) }
                        return !0 }(e), this._milliseconds = +f + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60, this._days = +c + 7 * i, this._months = +o + 3 * r + 12 * n, this._data = {}, this._locale = ce(), this._bubble() }

                function Ce(t) { return t instanceof qe }

                function We(t) { return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t) }

                function Se(t, e) { B(t, 0, 0, (function() { var t = this.utcOffset(),
                            n = "+"; return t < 0 && (t = -t, n = "-"), n + q(~~(t / 60), 2) + e + q(~~t % 60, 2) })) }
                Se("Z", ":"), Se("ZZ", ""), pt("Z", ft), pt("ZZ", ft), vt(["Z", "ZZ"], (function(t, e, n) { n._useUTC = !0, n._tzm = Be(ft, t) })); var ke = /([\+\-]|\d\d)/gi;

                function Be(t, e) { var n, r, o = (e || "").match(t); return null === o ? null : 0 === (r = 60 * (n = ((o[o.length - 1] || []) + "").match(ke) || ["-", 0, 0])[1] + V(n[2])) ? 0 : "+" === n[0] ? r : -r }

                function Xe(t, e) { var n, o; return e._isUTC ? (n = e.clone(), o = (y(t) || u(t) ? t.valueOf() : xe(t).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + o), r.updateOffset(n, !1), n) : xe(t).local() }

                function Ee(t) { return -Math.round(t._d.getTimezoneOffset()) }

                function De() { return !!this.isValid() && this._isUTC && 0 === this._offset }
                r.updateOffset = function() {}; var Re = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
                    Pe = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

                function Ie(t, e) { var n, r, o, i, c, s, u = t,
                        f = null; return Ce(t) ? u = { ms: t._milliseconds, d: t._days, M: t._months } : l(t) || !isNaN(+t) ? (u = {}, e ? u[e] = +t : u.milliseconds = +t) : (f = Re.exec(t)) ? (n = "-" === f[1] ? -1 : 1, u = { y: 0, d: V(f[2]) * n, h: V(f[3]) * n, m: V(f[4]) * n, s: V(f[5]) * n, ms: V(We(1e3 * f[6])) * n }) : (f = Pe.exec(t)) ? (n = "-" === f[1] ? -1 : 1, u = { y: je(f[2], n), M: je(f[3], n), w: je(f[4], n), d: je(f[5], n), h: je(f[6], n), m: je(f[7], n), s: je(f[8], n) }) : null == u ? u = {} : "object" == typeof u && ("from" in u || "to" in u) && (i = xe(u.from), c = xe(u.to), o = i.isValid() && c.isValid() ? (c = Xe(c, i), i.isBefore(c) ? s = Fe(i, c) : ((s = Fe(c, i)).milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 }, (u = {}).ms = o.milliseconds, u.M = o.months), r = new qe(u), Ce(t) && a(t, "_locale") && (r._locale = t._locale), Ce(t) && a(t, "_isValid") && (r._isValid = t._isValid), r }

                function je(t, e) { var n = t && parseFloat(t.replace(",", ".")); return (isNaN(n) ? 0 : n) * e }

                function Fe(t, e) { var n = {}; return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n }

                function He(t, e) { return function(n, r) { var o; return null === r || isNaN(+r) || (L(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = n, n = r, r = o), Ue(this, Ie(n, r), t), this } }

                function Ue(t, e, n, o) { var i = e._milliseconds,
                        a = We(e._days),
                        c = We(e._months);
                    t.isValid() && (o = null == o || o, c && wt(t, Y(t, "Month") + c * n), a && G(t, "Date", Y(t, "Date") + a * n), i && t._d.setTime(t._d.valueOf() + i * n), o && r.updateOffset(t, a || c)) }
                Ie.fn = qe.prototype, Ie.invalid = function() { return Ie(NaN) }; var Ve = He(1, "add"),
                    $e = He(-1, "subtract");

                function Ye(t) { return "string" == typeof t || t instanceof String }

                function Ge(t) { return y(t) || u(t) || Ye(t) || l(t) || function(t) { var e = o(t),
                            n = !1; return e && (n = 0 === t.filter((function(e) { return !l(e) && Ye(t) })).length), e && n }(t) || function(t) { var e, n, r = i(t) && !c(t),
                            o = !1,
                            s = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"]; for (e = 0; e < s.length; e += 1) n = s[e], o = o || a(t, n); return r && o }(t) || null == t }

                function Ke(t) { var e, n = i(t) && !c(t),
                        r = !1,
                        o = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"]; for (e = 0; e < o.length; e += 1) r = r || a(t, o[e]); return n && r }

                function Je(t, e) { if (t.date() < e.date()) return -Je(e, t); var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                        r = t.clone().add(n, "months"); return -(n + (e - r < 0 ? (e - r) / (r - t.clone().add(n - 1, "months")) : (e - r) / (t.clone().add(n + 1, "months") - r))) || 0 }

                function Qe(t) { var e; return void 0 === t ? this._locale._abbr : (null != (e = ce(t)) && (this._locale = e), this) }
                r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]"; var Ze = _("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(t) { return void 0 === t ? this.localeData() : this.locale(t) }));

                function tn() { return this._locale }

                function en(t, e) { return (t % e + e) % e }

                function nn(t, e, n) { return t < 100 && t >= 0 ? new Date(t + 400, e, n) - 126227808e5 : new Date(t, e, n).valueOf() }

                function rn(t, e, n) { return t < 100 && t >= 0 ? Date.UTC(t + 400, e, n) - 126227808e5 : Date.UTC(t, e, n) }

                function on(t, e) { return e.erasAbbrRegex(t) }

                function an() { var t, e, n = [],
                        r = [],
                        o = [],
                        i = [],
                        a = this.eras(); for (t = 0, e = a.length; t < e; ++t) r.push(Mt(a[t].name)), n.push(Mt(a[t].abbr)), o.push(Mt(a[t].narrow)), i.push(Mt(a[t].name)), i.push(Mt(a[t].abbr)), i.push(Mt(a[t].narrow));
                    this._erasRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + o.join("|") + ")", "i") }

                function cn(t, e) { B(0, [t, t.length], 0, e) }

                function sn(t, e, n, r, o) { var i; return null == t ? Et(this, r, o).year : (e > (i = Dt(t, r, o)) && (e = i), ln.call(this, t, e, n, r, o)) }

                function ln(t, e, n, r, o) { var i = Xt(t, e, n, r, o),
                        a = kt(i.year, 0, i.dayOfYear); return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this }
                B("N", 0, 0, "eraAbbr"), B("NN", 0, 0, "eraAbbr"), B("NNN", 0, 0, "eraAbbr"), B("NNNN", 0, 0, "eraName"), B("NNNNN", 0, 0, "eraNarrow"), B("y", ["y", 1], "yo", "eraYear"), B("y", ["yy", 2], 0, "eraYear"), B("y", ["yyy", 3], 0, "eraYear"), B("y", ["yyyy", 4], 0, "eraYear"), pt("N", on), pt("NN", on), pt("NNN", on), pt("NNNN", (function(t, e) { return e.erasNameRegex(t) })), pt("NNNNN", (function(t, e) { return e.erasNarrowRegex(t) })), vt(["N", "NN", "NNN", "NNNN", "NNNNN"], (function(t, e, n, r) { var o = n._locale.erasParse(t, r, n._strict);
                    o ? h(n).era = o : h(n).invalidEra = t })), pt("y", st), pt("yy", st), pt("yyy", st), pt("yyyy", st), pt("yo", (function(t, e) { return e._eraYearOrdinalRegex || st })), vt(["y", "yy", "yyy", "yyyy"], 0), vt(["yo"], (function(t, e, n, r) { var o;
                    n._locale._eraYearOrdinalRegex && (o = t.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? e[0] = n._locale.eraYearOrdinalParse(t, o) : e[0] = parseInt(t, 10) })), B(0, ["gg", 2], 0, (function() { return this.weekYear() % 100 })), B(0, ["GG", 2], 0, (function() { return this.isoWeekYear() % 100 })), cn("gggg", "weekYear"), cn("ggggg", "weekYear"), cn("GGGG", "isoWeekYear"), cn("GGGGG", "isoWeekYear"), R("weekYear", "gg"), R("isoWeekYear", "GG"), F("weekYear", 1), F("isoWeekYear", 1), pt("G", lt), pt("g", lt), pt("GG", nt, Q), pt("gg", nt, Q), pt("GGGG", at, tt), pt("gggg", at, tt), pt("GGGGG", ct, et), pt("ggggg", ct, et), gt(["gggg", "ggggg", "GGGG", "GGGGG"], (function(t, e, n, r) { e[r.substr(0, 2)] = V(t) })), gt(["gg", "GG"], (function(t, e, n, o) { e[o] = r.parseTwoDigitYear(t) })), B("Q", 0, "Qo", "quarter"), R("quarter", "Q"), F("quarter", 7), pt("Q", J), vt("Q", (function(t, e) { e[1] = 3 * (V(t) - 1) })), B("D", ["DD", 2], "Do", "date"), R("date", "D"), F("date", 9), pt("D", nt), pt("DD", nt, Q), pt("Do", (function(t, e) { return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient })), vt(["D", "DD"], 2), vt("Do", (function(t, e) { e[2] = V(t.match(nt)[0]) })); var un = $("Date", !0);
                B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), R("dayOfYear", "DDD"), F("dayOfYear", 4), pt("DDD", it), pt("DDDD", Z), vt(["DDD", "DDDD"], (function(t, e, n) { n._dayOfYear = V(t) })), B("m", ["mm", 2], 0, "minute"), R("minute", "m"), F("minute", 14), pt("m", nt), pt("mm", nt, Q), vt(["m", "mm"], 4); var fn = $("Minutes", !1);
                B("s", ["ss", 2], 0, "second"), R("second", "s"), F("second", 15), pt("s", nt), pt("ss", nt, Q), vt(["s", "ss"], 5); var dn, pn, hn = $("Seconds", !1); for (B("S", 0, 0, (function() { return ~~(this.millisecond() / 100) })), B(0, ["SS", 2], 0, (function() { return ~~(this.millisecond() / 10) })), B(0, ["SSS", 3], 0, "millisecond"), B(0, ["SSSS", 4], 0, (function() { return 10 * this.millisecond() })), B(0, ["SSSSS", 5], 0, (function() { return 100 * this.millisecond() })), B(0, ["SSSSSS", 6], 0, (function() { return 1e3 * this.millisecond() })), B(0, ["SSSSSSS", 7], 0, (function() { return 1e4 * this.millisecond() })), B(0, ["SSSSSSSS", 8], 0, (function() { return 1e5 * this.millisecond() })), B(0, ["SSSSSSSSS", 9], 0, (function() { return 1e6 * this.millisecond() })), R("millisecond", "ms"), F("millisecond", 16), pt("S", it, J), pt("SS", it, Q), pt("SSS", it, Z), dn = "SSSS"; dn.length <= 9; dn += "S") pt(dn, st);

                function Mn(t, e) { e[6] = V(1e3 * ("0." + t)) } for (dn = "S"; dn.length <= 9; dn += "S") vt(dn, Mn);
                pn = $("Milliseconds", !1), B("z", 0, 0, "zoneAbbr"), B("zz", 0, 0, "zoneName"); var bn = A.prototype;

                function mn(t) { return t }
                bn.add = Ve, bn.calendar = function(t, e) { 1 === arguments.length && (Ge(arguments[0]) ? (t = arguments[0], e = void 0) : Ke(arguments[0]) && (e = arguments[0], t = void 0)); var n = t || xe(),
                        o = Xe(n, this).startOf("day"),
                        i = r.calendarFormat(this, o) || "sameElse",
                        a = e && (N(e[i]) ? e[i].call(this, n) : e[i]); return this.format(a || this.localeData().calendar(i, this, xe(n))) }, bn.clone = function() { return new A(this) }, bn.diff = function(t, e, n) { var r, o, i; if (!this.isValid()) return NaN; if (!(r = Xe(t, this)).isValid()) return NaN; switch (o = 6e4 * (r.utcOffset() - this.utcOffset()), e = P(e)) {
                        case "year":
                            i = Je(this, r) / 12; break;
                        case "month":
                            i = Je(this, r); break;
                        case "quarter":
                            i = Je(this, r) / 3; break;
                        case "second":
                            i = (this - r) / 1e3; break;
                        case "minute":
                            i = (this - r) / 6e4; break;
                        case "hour":
                            i = (this - r) / 36e5; break;
                        case "day":
                            i = (this - r - o) / 864e5; break;
                        case "week":
                            i = (this - r - o) / 6048e5; break;
                        default:
                            i = this - r } return n ? i : U(i) }, bn.endOf = function(t) { var e, n; if (void 0 === (t = P(t)) || "millisecond" === t || !this.isValid()) return this; switch (n = this._isUTC ? rn : nn, t) {
                        case "year":
                            e = n(this.year() + 1, 0, 1) - 1; break;
                        case "quarter":
                            e = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1; break;
                        case "month":
                            e = n(this.year(), this.month() + 1, 1) - 1; break;
                        case "week":
                            e = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1; break;
                        case "isoWeek":
                            e = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1; break;
                        case "day":
                        case "date":
                            e = n(this.year(), this.month(), this.date() + 1) - 1; break;
                        case "hour":
                            e = this._d.valueOf(), e += 36e5 - en(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1; break;
                        case "minute":
                            e = this._d.valueOf(), e += 6e4 - en(e, 6e4) - 1; break;
                        case "second":
                            e = this._d.valueOf(), e += 1e3 - en(e, 1e3) - 1 } return this._d.setTime(e), r.updateOffset(this, !0), this }, bn.format = function(t) { t || (t = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat); var e = X(this, t); return this.localeData().postformat(e) }, bn.from = function(t, e) { return this.isValid() && (y(t) && t.isValid() || xe(t).isValid()) ? Ie({ to: this, from: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate() }, bn.fromNow = function(t) { return this.from(xe(), t) }, bn.to = function(t, e) { return this.isValid() && (y(t) && t.isValid() || xe(t).isValid()) ? Ie({ from: this, to: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate() }, bn.toNow = function(t) { return this.to(xe(), t) }, bn.get = function(t) { return N(this[t = P(t)]) ? this[t]() : this }, bn.invalidAt = function() { return h(this).overflow }, bn.isAfter = function(t, e) { var n = y(t) ? t : xe(t); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = P(e) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf()) }, bn.isBefore = function(t, e) { var n = y(t) ? t : xe(t); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = P(e) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf()) }, bn.isBetween = function(t, e, n, r) { var o = y(t) ? t : xe(t),
                        i = y(e) ? e : xe(e); return !!(this.isValid() && o.isValid() && i.isValid()) && (("(" === (r = r || "()")[0] ? this.isAfter(o, n) : !this.isBefore(o, n)) && (")" === r[1] ? this.isBefore(i, n) : !this.isAfter(i, n))) }, bn.isSame = function(t, e) { var n, r = y(t) ? t : xe(t); return !(!this.isValid() || !r.isValid()) && ("millisecond" === (e = P(e) || "millisecond") ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf())) }, bn.isSameOrAfter = function(t, e) { return this.isSame(t, e) || this.isAfter(t, e) }, bn.isSameOrBefore = function(t, e) { return this.isSame(t, e) || this.isBefore(t, e) }, bn.isValid = function() { return M(this) }, bn.lang = Ze, bn.locale = Qe, bn.localeData = tn, bn.max = Ne, bn.min = Le, bn.parsingFlags = function() { return d({}, h(this)) }, bn.set = function(t, e) { if ("object" == typeof t) { var n, r = function(t) { var e, n = []; for (e in t) a(t, e) && n.push({ unit: e, priority: j[e] }); return n.sort((function(t, e) { return t.priority - e.priority })), n }(t = I(t)); for (n = 0; n < r.length; n++) this[r[n].unit](t[r[n].unit]) } else if (N(this[t = P(t)])) return this[t](e); return this }, bn.startOf = function(t) { var e, n; if (void 0 === (t = P(t)) || "millisecond" === t || !this.isValid()) return this; switch (n = this._isUTC ? rn : nn, t) {
                        case "year":
                            e = n(this.year(), 0, 1); break;
                        case "quarter":
                            e = n(this.year(), this.month() - this.month() % 3, 1); break;
                        case "month":
                            e = n(this.year(), this.month(), 1); break;
                        case "week":
                            e = n(this.year(), this.month(), this.date() - this.weekday()); break;
                        case "isoWeek":
                            e = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1)); break;
                        case "day":
                        case "date":
                            e = n(this.year(), this.month(), this.date()); break;
                        case "hour":
                            e = this._d.valueOf(), e -= en(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5); break;
                        case "minute":
                            e = this._d.valueOf(), e -= en(e, 6e4); break;
                        case "second":
                            e = this._d.valueOf(), e -= en(e, 1e3) } return this._d.setTime(e), r.updateOffset(this, !0), this }, bn.subtract = $e, bn.toArray = function() { var t = this; return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()] }, bn.toObject = function() { var t = this; return { years: t.year(), months: t.month(), date: t.date(), hours: t.hours(), minutes: t.minutes(), seconds: t.seconds(), milliseconds: t.milliseconds() } }, bn.toDate = function() { return new Date(this.valueOf()) }, bn.toISOString = function(t) { if (!this.isValid()) return null; var e = !0 !== t,
                        n = e ? this.clone().utc() : this; return n.year() < 0 || n.year() > 9999 ? X(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : N(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", X(n, "Z")) : X(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ") }, bn.inspect = function() { if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)"; var t, e, n, r = "moment",
                        o = ""; return this.isLocal() || (r = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", o = "Z"), t = "[" + r + '("]', e = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", n = o + '[")]', this.format(t + e + "-MM-DD[T]HH:mm:ss.SSS" + n) }, "undefined" != typeof Symbol && null != Symbol.for && (bn[Symbol.for("nodejs.util.inspect.custom")] = function() { return "Moment<" + this.format() + ">" }), bn.toJSON = function() { return this.isValid() ? this.toISOString() : null }, bn.toString = function() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, bn.unix = function() { return Math.floor(this.valueOf() / 1e3) }, bn.valueOf = function() { return this._d.valueOf() - 6e4 * (this._offset || 0) }, bn.creationData = function() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }, bn.eraName = function() { var t, e, n, r = this.localeData().eras(); for (t = 0, e = r.length; t < e; ++t) { if (n = this.startOf("day").valueOf(), r[t].since <= n && n <= r[t].until) return r[t].name; if (r[t].until <= n && n <= r[t].since) return r[t].name } return "" }, bn.eraNarrow = function() { var t, e, n, r = this.localeData().eras(); for (t = 0, e = r.length; t < e; ++t) { if (n = this.startOf("day").valueOf(), r[t].since <= n && n <= r[t].until) return r[t].narrow; if (r[t].until <= n && n <= r[t].since) return r[t].narrow } return "" }, bn.eraAbbr = function() { var t, e, n, r = this.localeData().eras(); for (t = 0, e = r.length; t < e; ++t) { if (n = this.startOf("day").valueOf(), r[t].since <= n && n <= r[t].until) return r[t].abbr; if (r[t].until <= n && n <= r[t].since) return r[t].abbr } return "" }, bn.eraYear = function() { var t, e, n, o, i = this.localeData().eras(); for (t = 0, e = i.length; t < e; ++t)
                        if (n = i[t].since <= i[t].until ? 1 : -1, o = this.startOf("day").valueOf(), i[t].since <= o && o <= i[t].until || i[t].until <= o && o <= i[t].since) return (this.year() - r(i[t].since).year()) * n + i[t].offset;
                    return this.year() }, bn.year = Wt, bn.isLeapYear = function() { return H(this.year()) }, bn.weekYear = function(t) { return sn.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }, bn.isoWeekYear = function(t) { return sn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4) }, bn.quarter = bn.quarters = function(t) { return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3) }, bn.month = Tt, bn.daysInMonth = function() { return yt(this.year(), this.month()) }, bn.week = bn.weeks = function(t) { var e = this.localeData().week(this); return null == t ? e : this.add(7 * (t - e), "d") }, bn.isoWeek = bn.isoWeeks = function(t) { var e = Et(this, 1, 4).week; return null == t ? e : this.add(7 * (t - e), "d") }, bn.weeksInYear = function() { var t = this.localeData()._week; return Dt(this.year(), t.dow, t.doy) }, bn.weeksInWeekYear = function() { var t = this.localeData()._week; return Dt(this.weekYear(), t.dow, t.doy) }, bn.isoWeeksInYear = function() { return Dt(this.year(), 1, 4) }, bn.isoWeeksInISOWeekYear = function() { return Dt(this.isoWeekYear(), 1, 4) }, bn.date = un, bn.day = bn.days = function(t) { if (!this.isValid()) return null != t ? this : NaN; var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != t ? (t = function(t, e) { return "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10) }(t, this.localeData()), this.add(t - e, "d")) : e }, bn.weekday = function(t) { if (!this.isValid()) return null != t ? this : NaN; var e = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == t ? e : this.add(t - e, "d") }, bn.isoWeekday = function(t) { if (!this.isValid()) return null != t ? this : NaN; if (null != t) { var e = function(t, e) { return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t }(t, this.localeData()); return this.day(this.day() % 7 ? e : e - 7) } return this.day() || 7 }, bn.dayOfYear = function(t) { var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == t ? e : this.add(t - e, "d") }, bn.hour = bn.hours = Qt, bn.minute = bn.minutes = fn, bn.second = bn.seconds = hn, bn.millisecond = bn.milliseconds = pn, bn.utcOffset = function(t, e, n) { var o, i = this._offset || 0; if (!this.isValid()) return null != t ? this : NaN; if (null != t) { if ("string" == typeof t) { if (null === (t = Be(ft, t))) return this } else Math.abs(t) < 16 && !n && (t *= 60); return !this._isUTC && e && (o = Ee(this)), this._offset = t, this._isUTC = !0, null != o && this.add(o, "m"), i !== t && (!e || this._changeInProgress ? Ue(this, Ie(t - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, r.updateOffset(this, !0), this._changeInProgress = null)), this } return this._isUTC ? i : Ee(this) }, bn.utc = function(t) { return this.utcOffset(0, t) }, bn.local = function(t) { return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ee(this), "m")), this }, bn.parseZone = function() { if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                    else if ("string" == typeof this._i) { var t = Be(ut, this._i);
                        null != t ? this.utcOffset(t) : this.utcOffset(0, !0) } return this }, bn.hasAlignedHourOffset = function(t) { return !!this.isValid() && (t = t ? xe(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0) }, bn.isDST = function() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, bn.isLocal = function() { return !!this.isValid() && !this._isUTC }, bn.isUtcOffset = function() { return !!this.isValid() && this._isUTC }, bn.isUtc = De, bn.isUTC = De, bn.zoneAbbr = function() { return this._isUTC ? "UTC" : "" }, bn.zoneName = function() { return this._isUTC ? "Coordinated Universal Time" : "" }, bn.dates = _("dates accessor is deprecated. Use date instead.", un), bn.months = _("months accessor is deprecated. Use month instead", Tt), bn.years = _("years accessor is deprecated. Use year instead", Wt), bn.zone = _("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function(t, e) { return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset() })), bn.isDSTShifted = _("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function() { if (!s(this._isDSTShifted)) return this._isDSTShifted; var t, e = {}; return g(e, this), (e = _e(e))._a ? (t = e._isUTC ? p(e._a) : xe(e._a), this._isDSTShifted = this.isValid() && function(t, e, n) { var r, o = Math.min(t.length, e.length),
                            i = Math.abs(t.length - e.length),
                            a = 0; for (r = 0; r < o; r++)(n && t[r] !== e[r] || !n && V(t[r]) !== V(e[r])) && a++; return a + i }(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted })); var vn = T.prototype;

                function gn(t, e, n, r) { var o = ce(),
                        i = p().set(r, e); return o[n](i, t) }

                function An(t, e, n) { if (l(t) && (e = t, t = void 0), t = t || "", null != e) return gn(t, e, n, "month"); var r, o = []; for (r = 0; r < 12; r++) o[r] = gn(t, r, n, "month"); return o }

                function yn(t, e, n, r) { "boolean" == typeof t ? (l(e) && (n = e, e = void 0), e = e || "") : (n = e = t, t = !1, l(e) && (n = e, e = void 0), e = e || ""); var o, i = ce(),
                        a = t ? i._week.dow : 0,
                        c = []; if (null != n) return gn(e, (n + a) % 7, r, "day"); for (o = 0; o < 7; o++) c[o] = gn(e, (o + a) % 7, r, "day"); return c }
                vn.calendar = function(t, e, n) { var r = this._calendar[t] || this._calendar.sameElse; return N(r) ? r.call(e, n) : r }, vn.longDateFormat = function(t) { var e = this._longDateFormat[t],
                        n = this._longDateFormat[t.toUpperCase()]; return e || !n ? e : (this._longDateFormat[t] = n.match(C).map((function(t) { return "MMMM" === t || "MM" === t || "DD" === t || "dddd" === t ? t.slice(1) : t })).join(""), this._longDateFormat[t]) }, vn.invalidDate = function() { return this._invalidDate }, vn.ordinal = function(t) { return this._ordinal.replace("%d", t) }, vn.preparse = mn, vn.postformat = mn, vn.relativeTime = function(t, e, n, r) { var o = this._relativeTime[n]; return N(o) ? o(t, e, n, r) : o.replace(/%d/i, t) }, vn.pastFuture = function(t, e) { var n = this._relativeTime[t > 0 ? "future" : "past"]; return N(n) ? n(e) : n.replace(/%s/i, e) }, vn.set = function(t) { var e, n; for (n in t) a(t, n) && (N(e = t[n]) ? this[n] = e : this["_" + n] = e);
                    this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source) }, vn.eras = function(t, e) { var n, o, i, a = this._eras || ce("en")._eras; for (n = 0, o = a.length; n < o; ++n) { switch (typeof a[n].since) {
                            case "string":
                                i = r(a[n].since).startOf("day"), a[n].since = i.valueOf() } switch (typeof a[n].until) {
                            case "undefined":
                                a[n].until = 1 / 0; break;
                            case "string":
                                i = r(a[n].until).startOf("day").valueOf(), a[n].until = i.valueOf() } } return a }, vn.erasParse = function(t, e, n) { var r, o, i, a, c, s = this.eras(); for (t = t.toUpperCase(), r = 0, o = s.length; r < o; ++r)
                        if (i = s[r].name.toUpperCase(), a = s[r].abbr.toUpperCase(), c = s[r].narrow.toUpperCase(), n) switch (e) {
                            case "N":
                            case "NN":
                            case "NNN":
                                if (a === t) return s[r]; break;
                            case "NNNN":
                                if (i === t) return s[r]; break;
                            case "NNNNN":
                                if (c === t) return s[r] } else if ([i, a, c].indexOf(t) >= 0) return s[r] }, vn.erasConvertYear = function(t, e) { var n = t.since <= t.until ? 1 : -1; return void 0 === e ? r(t.since).year() : r(t.since).year() + (e - t.offset) * n }, vn.erasAbbrRegex = function(t) { return a(this, "_erasAbbrRegex") || an.call(this), t ? this._erasAbbrRegex : this._erasRegex }, vn.erasNameRegex = function(t) { return a(this, "_erasNameRegex") || an.call(this), t ? this._erasNameRegex : this._erasRegex }, vn.erasNarrowRegex = function(t) { return a(this, "_erasNarrowRegex") || an.call(this), t ? this._erasNarrowRegex : this._erasRegex }, vn.months = function(t, e) { return t ? o(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Ot).test(e) ? "format" : "standalone"][t.month()] : o(this._months) ? this._months : this._months.standalone }, vn.monthsShort = function(t, e) { return t ? o(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Ot.test(e) ? "format" : "standalone"][t.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }, vn.monthsParse = function(t, e, n) { var r, o, i; if (this._monthsParseExact) return Nt.call(this, t, e, n); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) { if (o = p([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(o, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (i = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[r].test(t)) return r; if (n && "MMM" === e && this._shortMonthsParse[r].test(t)) return r; if (!n && this._monthsParse[r].test(t)) return r } }, vn.monthsRegex = function(t) { return this._monthsParseExact ? (a(this, "_monthsRegex") || qt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (a(this, "_monthsRegex") || (this._monthsRegex = Lt), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex) }, vn.monthsShortRegex = function(t) { return this._monthsParseExact ? (a(this, "_monthsRegex") || qt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (a(this, "_monthsShortRegex") || (this._monthsShortRegex = xt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex) }, vn.week = function(t) { return Et(t, this._week.dow, this._week.doy).week }, vn.firstDayOfYear = function() { return this._week.doy }, vn.firstDayOfWeek = function() { return this._week.dow }, vn.weekdays = function(t, e) { var n = o(this._weekdays) ? this._weekdays : this._weekdays[t && !0 !== t && this._weekdays.isFormat.test(e) ? "format" : "standalone"]; return !0 === t ? Rt(n, this._week.dow) : t ? n[t.day()] : n }, vn.weekdaysMin = function(t) { return !0 === t ? Rt(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin }, vn.weekdaysShort = function(t) { return !0 === t ? Rt(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort }, vn.weekdaysParse = function(t, e, n) { var r, o, i; if (this._weekdaysParseExact) return Vt.call(this, t, e, n); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) { if (o = p([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(o, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (i = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[r].test(t)) return r; if (n && "ddd" === e && this._shortWeekdaysParse[r].test(t)) return r; if (n && "dd" === e && this._minWeekdaysParse[r].test(t)) return r; if (!n && this._weekdaysParse[r].test(t)) return r } }, vn.weekdaysRegex = function(t) { return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || $t.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (a(this, "_weekdaysRegex") || (this._weekdaysRegex = Ft), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex) }, vn.weekdaysShortRegex = function(t) { return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || $t.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (a(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ht), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }, vn.weekdaysMinRegex = function(t) { return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || $t.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (a(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ut), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }, vn.isPM = function(t) { return "p" === (t + "").toLowerCase().charAt(0) }, vn.meridiem = function(t, e, n) { return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM" }, ie("en", { eras: [{ since: "0001-01-01", until: 1 / 0, offset: 1, name: "Anno Domini", narrow: "AD", abbr: "AD" }, { since: "0000-12-31", until: -1 / 0, offset: 1, name: "Before Christ", narrow: "BC", abbr: "BC" }], dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(t) { var e = t % 10; return t + (1 === V(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th") } }), r.lang = _("moment.lang is deprecated. Use moment.locale instead.", ie), r.langData = _("moment.langData is deprecated. Use moment.localeData instead.", ce); var zn = Math.abs;

                function _n(t, e, n, r) { var o = Ie(e, n); return t._milliseconds += r * o._milliseconds, t._days += r * o._days, t._months += r * o._months, t._bubble() }

                function On(t) { return t < 0 ? Math.floor(t) : Math.ceil(t) }

                function xn(t) { return 4800 * t / 146097 }

                function Ln(t) { return 146097 * t / 4800 }

                function Nn(t) { return function() { return this.as(t) } } var wn = Nn("ms"),
                    Tn = Nn("s"),
                    qn = Nn("m"),
                    Cn = Nn("h"),
                    Wn = Nn("d"),
                    Sn = Nn("w"),
                    kn = Nn("M"),
                    Bn = Nn("Q"),
                    Xn = Nn("y");

                function En(t) { return function() { return this.isValid() ? this._data[t] : NaN } } var Dn = En("milliseconds"),
                    Rn = En("seconds"),
                    Pn = En("minutes"),
                    In = En("hours"),
                    jn = En("days"),
                    Fn = En("months"),
                    Hn = En("years"),
                    Un = Math.round,
                    Vn = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };

                function $n(t, e, n, r, o) { return o.relativeTime(e || 1, !!n, t, r) } var Yn = Math.abs;

                function Gn(t) { return (t > 0) - (t < 0) || +t }

                function Kn() { if (!this.isValid()) return this.localeData().invalidDate(); var t, e, n, r, o, i, a, c, s = Yn(this._milliseconds) / 1e3,
                        l = Yn(this._days),
                        u = Yn(this._months),
                        f = this.asSeconds(); return f ? (t = U(s / 60), e = U(t / 60), s %= 60, t %= 60, n = U(u / 12), u %= 12, r = s ? s.toFixed(3).replace(/\.?0+$/, "") : "", o = f < 0 ? "-" : "", i = Gn(this._months) !== Gn(f) ? "-" : "", a = Gn(this._days) !== Gn(f) ? "-" : "", c = Gn(this._milliseconds) !== Gn(f) ? "-" : "", o + "P" + (n ? i + n + "Y" : "") + (u ? i + u + "M" : "") + (l ? a + l + "D" : "") + (e || t || s ? "T" : "") + (e ? c + e + "H" : "") + (t ? c + t + "M" : "") + (s ? c + r + "S" : "")) : "P0D" } var Jn = qe.prototype; return Jn.isValid = function() { return this._isValid }, Jn.abs = function() { var t = this._data; return this._milliseconds = zn(this._milliseconds), this._days = zn(this._days), this._months = zn(this._months), t.milliseconds = zn(t.milliseconds), t.seconds = zn(t.seconds), t.minutes = zn(t.minutes), t.hours = zn(t.hours), t.months = zn(t.months), t.years = zn(t.years), this }, Jn.add = function(t, e) { return _n(this, t, e, 1) }, Jn.subtract = function(t, e) { return _n(this, t, e, -1) }, Jn.as = function(t) { if (!this.isValid()) return NaN; var e, n, r = this._milliseconds; if ("month" === (t = P(t)) || "quarter" === t || "year" === t) switch (e = this._days + r / 864e5, n = this._months + xn(e), t) {
                        case "month":
                            return n;
                        case "quarter":
                            return n / 3;
                        case "year":
                            return n / 12 } else switch (e = this._days + Math.round(Ln(this._months)), t) {
                        case "week":
                            return e / 7 + r / 6048e5;
                        case "day":
                            return e + r / 864e5;
                        case "hour":
                            return 24 * e + r / 36e5;
                        case "minute":
                            return 1440 * e + r / 6e4;
                        case "second":
                            return 86400 * e + r / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * e) + r;
                        default:
                            throw new Error("Unknown unit " + t) } }, Jn.asMilliseconds = wn, Jn.asSeconds = Tn, Jn.asMinutes = qn, Jn.asHours = Cn, Jn.asDays = Wn, Jn.asWeeks = Sn, Jn.asMonths = kn, Jn.asQuarters = Bn, Jn.asYears = Xn, Jn.valueOf = function() { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * V(this._months / 12) : NaN }, Jn._bubble = function() { var t, e, n, r, o, i = this._milliseconds,
                        a = this._days,
                        c = this._months,
                        s = this._data; return i >= 0 && a >= 0 && c >= 0 || i <= 0 && a <= 0 && c <= 0 || (i += 864e5 * On(Ln(c) + a), a = 0, c = 0), s.milliseconds = i % 1e3, t = U(i / 1e3), s.seconds = t % 60, e = U(t / 60), s.minutes = e % 60, n = U(e / 60), s.hours = n % 24, a += U(n / 24), o = U(xn(a)), c += o, a -= On(Ln(o)), r = U(c / 12), c %= 12, s.days = a, s.months = c, s.years = r, this }, Jn.clone = function() { return Ie(this) }, Jn.get = function(t) { return t = P(t), this.isValid() ? this[t + "s"]() : NaN }, Jn.milliseconds = Dn, Jn.seconds = Rn, Jn.minutes = Pn, Jn.hours = In, Jn.days = jn, Jn.weeks = function() { return U(this.days() / 7) }, Jn.months = Fn, Jn.years = Hn, Jn.humanize = function(t, e) { if (!this.isValid()) return this.localeData().invalidDate(); var n, r, o = !1,
                        i = Vn; return "object" == typeof t && (e = t, t = !1), "boolean" == typeof t && (o = t), "object" == typeof e && (i = Object.assign({}, Vn, e), null != e.s && null == e.ss && (i.ss = e.s - 1)), n = this.localeData(), r = function(t, e, n, r) { var o = Ie(t).abs(),
                            i = Un(o.as("s")),
                            a = Un(o.as("m")),
                            c = Un(o.as("h")),
                            s = Un(o.as("d")),
                            l = Un(o.as("M")),
                            u = Un(o.as("w")),
                            f = Un(o.as("y")),
                            d = i <= n.ss && ["s", i] || i < n.s && ["ss", i] || a <= 1 && ["m"] || a < n.m && ["mm", a] || c <= 1 && ["h"] || c < n.h && ["hh", c] || s <= 1 && ["d"] || s < n.d && ["dd", s]; return null != n.w && (d = d || u <= 1 && ["w"] || u < n.w && ["ww", u]), (d = d || l <= 1 && ["M"] || l < n.M && ["MM", l] || f <= 1 && ["y"] || ["yy", f])[2] = e, d[3] = +t > 0, d[4] = r, $n.apply(null, d) }(this, !o, i, n), o && (r = n.pastFuture(+this, r)), n.postformat(r) }, Jn.toISOString = Kn, Jn.toString = Kn, Jn.toJSON = Kn, Jn.locale = Qe, Jn.localeData = tn, Jn.toIsoString = _("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Kn), Jn.lang = Ze, B("X", 0, 0, "unix"), B("x", 0, 0, "valueOf"), pt("x", lt), pt("X", /[+-]?\d+(\.\d{1,3})?/), vt("X", (function(t, e, n) { n._d = new Date(1e3 * parseFloat(t)) })), vt("x", (function(t, e, n) { n._d = new Date(V(t)) })), r.version = "2.27.0", e = xe, r.fn = bn, r.min = function() { var t = [].slice.call(arguments, 0); return we("isBefore", t) }, r.max = function() { var t = [].slice.call(arguments, 0); return we("isAfter", t) }, r.now = function() { return Date.now ? Date.now() : +new Date }, r.utc = p, r.unix = function(t) { return xe(1e3 * t) }, r.months = function(t, e) { return An(t, e, "months") }, r.isDate = u, r.locale = ie, r.invalid = b, r.duration = Ie, r.isMoment = y, r.weekdays = function(t, e, n) { return yn(t, e, n, "weekdays") }, r.parseZone = function() { return xe.apply(null, arguments).parseZone() }, r.localeData = ce, r.isDuration = Ce, r.monthsShort = function(t, e) { return An(t, e, "monthsShort") }, r.weekdaysMin = function(t, e, n) { return yn(t, e, n, "weekdaysMin") }, r.defineLocale = ae, r.updateLocale = function(t, e) { if (null != e) { var n, r, o = Zt;
                        null != te[t] && null != te[t].parentLocale ? te[t].set(w(te[t]._config, e)) : (null != (r = oe(t)) && (o = r._config), e = w(o, e), null == r && (e.abbr = t), (n = new T(e)).parentLocale = te[t], te[t] = n), ie(t) } else null != te[t] && (null != te[t].parentLocale ? (te[t] = te[t].parentLocale, t === ie() && ie(t)) : null != te[t] && delete te[t]); return te[t] }, r.locales = function() { return O(te) }, r.weekdaysShort = function(t, e, n) { return yn(t, e, n, "weekdaysShort") }, r.normalizeUnits = P, r.relativeTimeRounding = function(t) { return void 0 === t ? Un : "function" == typeof t && (Un = t, !0) }, r.relativeTimeThreshold = function(t, e) { return void 0 !== Vn[t] && (void 0 === e ? Vn[t] : (Vn[t] = e, "s" === t && (Vn.ss = e - 1), !0)) }, r.calendarFormat = function(t, e) { var n = t.diff(e, "days", !0); return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse" }, r.prototype = bn, r.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" }, r }() }).call(this, n("YuTi")(t)) }, xAGQ: function(t, e, n) { "use strict"; var r = n("xTJ+");
        t.exports = function(t, e, n) { return r.forEach(n, (function(n) { t = n(t, e) })), t } }, "xTJ+": function(t, e, n) { "use strict"; var r = n("HSsa"),
            o = Object.prototype.toString;

        function i(t) { return "[object Array]" === o.call(t) }

        function a(t) { return void 0 === t }

        function c(t) { return null !== t && "object" == typeof t }

        function s(t) { return "[object Function]" === o.call(t) }

        function l(t, e) { if (null != t)
                if ("object" != typeof t && (t = [t]), i(t))
                    for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
                else
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t) }
        t.exports = { isArray: i, isArrayBuffer: function(t) { return "[object ArrayBuffer]" === o.call(t) }, isBuffer: function(t) { return null !== t && !a(t) && null !== t.constructor && !a(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t) }, isFormData: function(t) { return "undefined" != typeof FormData && t instanceof FormData }, isArrayBufferView: function(t) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer }, isString: function(t) { return "string" == typeof t }, isNumber: function(t) { return "number" == typeof t }, isObject: c, isUndefined: a, isDate: function(t) { return "[object Date]" === o.call(t) }, isFile: function(t) { return "[object File]" === o.call(t) }, isBlob: function(t) { return "[object Blob]" === o.call(t) }, isFunction: s, isStream: function(t) { return c(t) && s(t.pipe) }, isURLSearchParams: function(t) { return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams }, isStandardBrowserEnv: function() { return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document) }, forEach: l, merge: function t() { var e = {};

                function n(n, r) { "object" == typeof e[r] && "object" == typeof n ? e[r] = t(e[r], n) : e[r] = n } for (var r = 0, o = arguments.length; r < o; r++) l(arguments[r], n); return e }, deepMerge: function t() { var e = {};

                function n(n, r) { "object" == typeof e[r] && "object" == typeof n ? e[r] = t(e[r], n) : e[r] = "object" == typeof n ? t({}, n) : n } for (var r = 0, o = arguments.length; r < o; r++) l(arguments[r], n); return e }, extend: function(t, e, n) { return l(e, (function(e, o) { t[o] = n && "function" == typeof e ? r(e, n) : e })), t }, trim: function(t) { return t.replace(/^\s*/, "").replace(/\s*$/, "") } } }, xg2z: function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("zu+r").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this.$createElement,
                    e = this._self._c || t; return e("svg", { class: this.sizeClass, attrs: { viewBox: "0 0 20 20", fill: "none" } }, [e("path", { attrs: { fill: "#d2d6dc", d: "M5.5 16C3.567 16 2 14.433 2 12.5C2 10.6916 3.37146 9.20358 5.13102 9.01922C5.04553 8.69382 5 8.35223 5 8C5 5.79086 6.79086 4 9 4C10.8788 4 12.4551 5.29538 12.8845 7.04175C13.0857 7.01422 13.2912 7 13.5 7C15.9853 7 18 9.01472 18 11.5C18 13.9853 15.9853 16 13.5 16H5.5Z" } })]) }), [], !1, null, null, null);
        e.default = i.exports }, yK9s: function(t, e, n) { "use strict"; var r = n("xTJ+");
        t.exports = function(t, e) { r.forEach(t, (function(n, r) { r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[r]) })) } }, yLpj: function(t, e) { var n;
        n = function() { return this }(); try { n = n || new Function("return this")() } catch (t) { "object" == typeof window && (n = window) }
        t.exports = n }, zlUZ: function(t, e, n) { "use strict";
        n.r(e); var r = { mixins: [n("044u").a] },
            o = n("KHd+"),
            i = Object(o.a)(r, (function() { var t = this,
                    e = t.$createElement,
                    n = t._self._c || e; return n("search", { scopedSlots: t._u([{ key: "filters", fn: function(e) { var r = e.filters,
                                o = e.loadEntries; return [n("div", { staticClass: "mt-6 flex space-x-3 md:mt-0 md:ml-4" }, [n("div", [n("label", { staticClass: "block text-sm font-medium leading-5 text-gray-700", attrs: { for: "type-input" } }, [t._v(" Log type ")]), t._v(" "), n("select", { directives: [{ name: "model", rawName: "v-model", value: r.type, expression: "filters.type" }], staticClass: "mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5", attrs: { id: "type-input" }, on: { change: [function(e) { var n = Array.prototype.filter.call(e.target.options, (function(t) { return t.selected })).map((function(t) { return "_value" in t ? t._value : t.value }));
                                        t.$set(r, "type", e.target.multiple ? n : n[0]) }, o] } }, [n("option", { attrs: { selected: "" }, domProps: { value: void 0 } }, [t._v("All")]), t._v(" "), t._l(t.logTypes(), (function(e, r) { return n("option", { domProps: { value: r } }, [t._v(t._s(e))]) }))], 2)])])] } }, { key: "row", fn: function(e) { var r = e.entry; return [n("td", { staticClass: "max-w-0 w-full px-6 py-4 whitespace-no-wrap text-sm leading-5 text-cool-gray-900" }, [n("div", { staticClass: "ml-4" }, [n("div", { staticClass: "text-sm leading-5 font-medium text-gray-900 truncate" }, [n("p", { staticClass: "truncate" }, [r.content.message.message ? [t._v("\n                            " + t._s(r.content.message.message) + "\n                        ")] : r.content.message.output ? [t._v("\n                            " + t._s(r.content.message.output) + "\n                        ")] : [t._v("\n                            " + t._s(r.content.message) + "\n                        ")]], 2)]), t._v(" "), r.content.message.context && r.content.message.context.exception && r.content.message.context.exception.class ? n("div", { staticClass: "text-sm leading-5 text-gray-500 truncate" }, [t._v("\n                    " + t._s(r.content.message.context.exception.class) + "\n                ")]) : t._e()])]), t._v(" "), n("td", { staticClass: "px-6 py-4 whitespace-no-wrap border-b border-gray-200" }, [n("span", { class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-" + t.logColor(r.type) + "-100 text-" + t.logColor(r.type) + "-800" }, [t._v("\n                " + t._s(r.type) + "\n            ")])]), t._v(" "), n("td", { staticClass: "px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500" }, [t._v("\n            " + t._s(t.moment().utc(r.content.timestamp, "x").local().format("YYYY-MM-DD LTS")) + "\n        ")]), t._v(" "), n("td", { staticClass: "px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium" }, [n("div", { staticClass: "relative flex justify-end items-center" }, [n("router-link", { staticClass: "w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150", attrs: { to: { name: "logs-show", params: { id: r.id, group: r.group }, query: r.filters }, tag: "button", href: "#" } }, [n("icon-eye", { staticClass: "mr-3 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500", attrs: { size: "5" } })], 1)], 1)])] } }]) }, [t._v(" "), n("template", { slot: "troubleshooting" }, [n("p", [t._v("It looks like there was an error. Please check your application logs.")]), t._v(" "), n("p", { staticClass: "mt-2" }, [t._v('\n            Consider searching using a more recent "Starting from" date. The CloudWatch API may have long response\n            times while searching far into the past. These requests may timeout or lead to unexpected errors.\n        ')])])], 2) }), [], !1, null, null, null);
        e.default = i.exports }, "zu+r": function(t, e, n) { "use strict";
        e.a = { props: { size: { default: "8" } }, computed: { sizeClass: function() { return { 2: "h-2 w-2", 3: "h-3 w-3", 4: "h-4 w-4", 5: "h-5 w-5", 6: "h-6 w-6", 8: "h-8 w-8", 12: "h-12 w-12", 16: "h-16 w-16", 20: "h-20 w-20" }[this.size] } } } }, zuR4: function(t, e, n) { "use strict"; var r = n("xTJ+"),
            o = n("HSsa"),
            i = n("CgaS"),
            a = n("SntB");

        function c(t) { var e = new i(t),
                n = o(i.prototype.request, e); return r.extend(n, i.prototype, e), r.extend(n, e), n } var s = c(n("JEQr"));
        s.Axios = i, s.create = function(t) { return c(a(s.defaults, t)) }, s.Cancel = n("endd"), s.CancelToken = n("jfS+"), s.isCancel = n("Lmem"), s.all = function(t) { return Promise.all(t) }, s.spread = n("DfZB"), t.exports = s, t.exports.default = s } });