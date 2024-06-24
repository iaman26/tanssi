! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = Error().stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "0e90641e-d9d2-4a26-8880-1e68f5758635", t._sentryDebugIdIdentifier = "sentry-dbid-0e90641e-d9d2-4a26-8880-1e68f5758635")
    } catch (t) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9779], {
        29887: function(t, e, r) {
            var n; /*! decimal.js-light v2.5.1 https://github.com/MikeMcl/decimal.js-light/LICENCE */
            ! function(o) {
                "use strict";
                var i, a = {
                        precision: 20,
                        rounding: 4,
                        toExpNeg: -7,
                        toExpPos: 21,
                        LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
                    },
                    u = !0,
                    c = "[DecimalError] ",
                    l = c + "Invalid argument: ",
                    s = c + "Exponent out of range: ",
                    f = Math.floor,
                    p = Math.pow,
                    h = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                    d = f(1286742750677284.5),
                    y = {};

                function v(t, e) {
                    var r, n, o, i, a, c, l, s, f = t.constructor,
                        p = f.precision;
                    if (!t.s || !e.s) return e.s || (e = new f(t)), u ? P(e, p) : e;
                    if (l = t.d, s = e.d, a = t.e, o = e.e, l = l.slice(), i = a - o) {
                        for (i < 0 ? (n = l, i = -i, c = s.length) : (n = s, o = a, c = l.length), i > (c = (a = Math.ceil(p / 7)) > c ? a + 1 : c + 1) && (i = c, n.length = 1), n.reverse(); i--;) n.push(0);
                        n.reverse()
                    }
                    for ((c = l.length) - (i = s.length) < 0 && (i = c, n = s, s = l, l = n), r = 0; i;) r = (l[--i] = l[i] + s[i] + r) / 1e7 | 0, l[i] %= 1e7;
                    for (r && (l.unshift(r), ++o), c = l.length; 0 == l[--c];) l.pop();
                    return e.d = l, e.e = o, u ? P(e, p) : e
                }

                function m(t, e, r) {
                    if (t !== ~~t || t < e || t > r) throw Error(l + t)
                }

                function b(t) {
                    var e, r, n, o = t.length - 1,
                        i = "",
                        a = t[0];
                    if (o > 0) {
                        for (i += a, e = 1; e < o; e++)(r = 7 - (n = t[e] + "").length) && (i += j(r)), i += n;
                        (r = 7 - (n = (a = t[e]) + "").length) && (i += j(r))
                    } else if (0 === a) return "0";
                    for (; a % 10 == 0;) a /= 10;
                    return i + a
                }
                y.absoluteValue = y.abs = function() {
                    var t = new this.constructor(this);
                    return t.s && (t.s = 1), t
                }, y.comparedTo = y.cmp = function(t) {
                    var e, r, n, o;
                    if (t = new this.constructor(t), this.s !== t.s) return this.s || -t.s;
                    if (this.e !== t.e) return this.e > t.e ^ this.s < 0 ? 1 : -1;
                    for (e = 0, r = (n = this.d.length) < (o = t.d.length) ? n : o; e < r; ++e)
                        if (this.d[e] !== t.d[e]) return this.d[e] > t.d[e] ^ this.s < 0 ? 1 : -1;
                    return n === o ? 0 : n > o ^ this.s < 0 ? 1 : -1
                }, y.decimalPlaces = y.dp = function() {
                    var t = this.d.length - 1,
                        e = (t - this.e) * 7;
                    if (t = this.d[t])
                        for (; t % 10 == 0; t /= 10) e--;
                    return e < 0 ? 0 : e
                }, y.dividedBy = y.div = function(t) {
                    return g(this, new this.constructor(t))
                }, y.dividedToIntegerBy = y.idiv = function(t) {
                    var e = this.constructor;
                    return P(g(this, new e(t), 0, 1), e.precision)
                }, y.equals = y.eq = function(t) {
                    return !this.cmp(t)
                }, y.exponent = function() {
                    return O(this)
                }, y.greaterThan = y.gt = function(t) {
                    return this.cmp(t) > 0
                }, y.greaterThanOrEqualTo = y.gte = function(t) {
                    return this.cmp(t) >= 0
                }, y.isInteger = y.isint = function() {
                    return this.e > this.d.length - 2
                }, y.isNegative = y.isneg = function() {
                    return this.s < 0
                }, y.isPositive = y.ispos = function() {
                    return this.s > 0
                }, y.isZero = function() {
                    return 0 === this.s
                }, y.lessThan = y.lt = function(t) {
                    return 0 > this.cmp(t)
                }, y.lessThanOrEqualTo = y.lte = function(t) {
                    return 1 > this.cmp(t)
                }, y.logarithm = y.log = function(t) {
                    var e, r = this.constructor,
                        n = r.precision,
                        o = n + 5;
                    if (void 0 === t) t = new r(10);
                    else if ((t = new r(t)).s < 1 || t.eq(i)) throw Error(c + "NaN");
                    if (this.s < 1) throw Error(c + (this.s ? "NaN" : "-Infinity"));
                    return this.eq(i) ? new r(0) : (u = !1, e = g(S(this, o), S(t, o), o), u = !0, P(e, n))
                }, y.minus = y.sub = function(t) {
                    return t = new this.constructor(t), this.s == t.s ? E(this, t) : v(this, (t.s = -t.s, t))
                }, y.modulo = y.mod = function(t) {
                    var e, r = this.constructor,
                        n = r.precision;
                    if (!(t = new r(t)).s) throw Error(c + "NaN");
                    return this.s ? (u = !1, e = g(this, t, 0, 1).times(t), u = !0, this.minus(e)) : P(new r(this), n)
                }, y.naturalExponential = y.exp = function() {
                    return x(this)
                }, y.naturalLogarithm = y.ln = function() {
                    return S(this)
                }, y.negated = y.neg = function() {
                    var t = new this.constructor(this);
                    return t.s = -t.s || 0, t
                }, y.plus = y.add = function(t) {
                    return t = new this.constructor(t), this.s == t.s ? v(this, t) : E(this, (t.s = -t.s, t))
                }, y.precision = y.sd = function(t) {
                    var e, r, n;
                    if (void 0 !== t && !!t !== t && 1 !== t && 0 !== t) throw Error(l + t);
                    if (e = O(this) + 1, r = 7 * (n = this.d.length - 1) + 1, n = this.d[n]) {
                        for (; n % 10 == 0; n /= 10) r--;
                        for (n = this.d[0]; n >= 10; n /= 10) r++
                    }
                    return t && e > r ? e : r
                }, y.squareRoot = y.sqrt = function() {
                    var t, e, r, n, o, i, a, l = this.constructor;
                    if (this.s < 1) {
                        if (!this.s) return new l(0);
                        throw Error(c + "NaN")
                    }
                    for (t = O(this), u = !1, 0 == (o = Math.sqrt(+this)) || o == 1 / 0 ? (((e = b(this.d)).length + t) % 2 == 0 && (e += "0"), o = Math.sqrt(e), t = f((t + 1) / 2) - (t < 0 || t % 2), n = new l(e = o == 1 / 0 ? "5e" + t : (e = o.toExponential()).slice(0, e.indexOf("e") + 1) + t)) : n = new l(o.toString()), o = a = (r = l.precision) + 3;;)
                        if (n = (i = n).plus(g(this, i, a + 2)).times(.5), b(i.d).slice(0, a) === (e = b(n.d)).slice(0, a)) {
                            if (e = e.slice(a - 3, a + 1), o == a && "4999" == e) {
                                if (P(i, r + 1, 0), i.times(i).eq(this)) {
                                    n = i;
                                    break
                                }
                            } else if ("9999" != e) break;
                            a += 4
                        }
                    return u = !0, P(n, r)
                }, y.times = y.mul = function(t) {
                    var e, r, n, o, i, a, c, l, s, f = this.constructor,
                        p = this.d,
                        h = (t = new f(t)).d;
                    if (!this.s || !t.s) return new f(0);
                    for (t.s *= this.s, r = this.e + t.e, (l = p.length) < (s = h.length) && (i = p, p = h, h = i, a = l, l = s, s = a), i = [], n = a = l + s; n--;) i.push(0);
                    for (n = s; --n >= 0;) {
                        for (e = 0, o = l + n; o > n;) c = i[o] + h[n] * p[o - n - 1] + e, i[o--] = c % 1e7 | 0, e = c / 1e7 | 0;
                        i[o] = (i[o] + e) % 1e7 | 0
                    }
                    for (; !i[--a];) i.pop();
                    return e ? ++r : i.shift(), t.d = i, t.e = r, u ? P(t, f.precision) : t
                }, y.toDecimalPlaces = y.todp = function(t, e) {
                    var r = this,
                        n = r.constructor;
                    return (r = new n(r), void 0 === t) ? r : (m(t, 0, 1e9), void 0 === e ? e = n.rounding : m(e, 0, 8), P(r, t + O(r) + 1, e))
                }, y.toExponential = function(t, e) {
                    var r, n = this,
                        o = n.constructor;
                    return void 0 === t ? r = k(n, !0) : (m(t, 0, 1e9), void 0 === e ? e = o.rounding : m(e, 0, 8), r = k(n = P(new o(n), t + 1, e), !0, t + 1)), r
                }, y.toFixed = function(t, e) {
                    var r, n, o = this.constructor;
                    return void 0 === t ? k(this) : (m(t, 0, 1e9), void 0 === e ? e = o.rounding : m(e, 0, 8), r = k((n = P(new o(this), t + O(this) + 1, e)).abs(), !1, t + O(n) + 1), this.isneg() && !this.isZero() ? "-" + r : r)
                }, y.toInteger = y.toint = function() {
                    var t = this.constructor;
                    return P(new t(this), O(this) + 1, t.rounding)
                }, y.toNumber = function() {
                    return +this
                }, y.toPower = y.pow = function(t) {
                    var e, r, n, o, a, l, s = this,
                        p = s.constructor,
                        h = +(t = new p(t));
                    if (!t.s) return new p(i);
                    if (!(s = new p(s)).s) {
                        if (t.s < 1) throw Error(c + "Infinity");
                        return s
                    }
                    if (s.eq(i)) return s;
                    if (n = p.precision, t.eq(i)) return P(s, n);
                    if (l = (e = t.e) >= (r = t.d.length - 1), a = s.s, l) {
                        if ((r = h < 0 ? -h : h) <= 9007199254740991) {
                            for (o = new p(i), e = Math.ceil(n / 7 + 4), u = !1; r % 2 && M((o = o.times(s)).d, e), 0 !== (r = f(r / 2));) M((s = s.times(s)).d, e);
                            return u = !0, t.s < 0 ? new p(i).div(o) : P(o, n)
                        }
                    } else if (a < 0) throw Error(c + "NaN");
                    return a = a < 0 && 1 & t.d[Math.max(e, r)] ? -1 : 1, s.s = 1, u = !1, o = t.times(S(s, n + 12)), u = !0, (o = x(o)).s = a, o
                }, y.toPrecision = function(t, e) {
                    var r, n, o = this,
                        i = o.constructor;
                    return void 0 === t ? (r = O(o), n = k(o, r <= i.toExpNeg || r >= i.toExpPos)) : (m(t, 1, 1e9), void 0 === e ? e = i.rounding : m(e, 0, 8), r = O(o = P(new i(o), t, e)), n = k(o, t <= r || r <= i.toExpNeg, t)), n
                }, y.toSignificantDigits = y.tosd = function(t, e) {
                    var r = this.constructor;
                    return void 0 === t ? (t = r.precision, e = r.rounding) : (m(t, 1, 1e9), void 0 === e ? e = r.rounding : m(e, 0, 8)), P(new r(this), t, e)
                }, y.toString = y.valueOf = y.val = y.toJSON = function() {
                    var t = O(this),
                        e = this.constructor;
                    return k(this, t <= e.toExpNeg || t >= e.toExpPos)
                };
                var g = function() {
                    function t(t, e) {
                        var r, n = 0,
                            o = t.length;
                        for (t = t.slice(); o--;) r = t[o] * e + n, t[o] = r % 1e7 | 0, n = r / 1e7 | 0;
                        return n && t.unshift(n), t
                    }

                    function e(t, e, r, n) {
                        var o, i;
                        if (r != n) i = r > n ? 1 : -1;
                        else
                            for (o = i = 0; o < r; o++)
                                if (t[o] != e[o]) {
                                    i = t[o] > e[o] ? 1 : -1;
                                    break
                                } return i
                    }

                    function r(t, e, r) {
                        for (var n = 0; r--;) t[r] -= n, n = t[r] < e[r] ? 1 : 0, t[r] = 1e7 * n + t[r] - e[r];
                        for (; !t[0] && t.length > 1;) t.shift()
                    }
                    return function(n, o, i, a) {
                        var u, l, s, f, p, h, d, y, v, m, b, g, x, w, j, S, A, E, k = n.constructor,
                            M = n.s == o.s ? 1 : -1,
                            _ = n.d,
                            T = o.d;
                        if (!n.s) return new k(n);
                        if (!o.s) throw Error(c + "Division by zero");
                        for (s = 0, l = n.e - o.e, A = T.length, j = _.length, y = (d = new k(M)).d = []; T[s] == (_[s] || 0);) ++s;
                        if (T[s] > (_[s] || 0) && --l, (g = null == i ? i = k.precision : a ? i + (O(n) - O(o)) + 1 : i) < 0) return new k(0);
                        if (g = g / 7 + 2 | 0, s = 0, 1 == A)
                            for (f = 0, T = T[0], g++;
                                (s < j || f) && g--; s++) x = 1e7 * f + (_[s] || 0), y[s] = x / T | 0, f = x % T | 0;
                        else {
                            for ((f = 1e7 / (T[0] + 1) | 0) > 1 && (T = t(T, f), _ = t(_, f), A = T.length, j = _.length), w = A, m = (v = _.slice(0, A)).length; m < A;) v[m++] = 0;
                            (E = T.slice()).unshift(0), S = T[0], T[1] >= 1e7 / 2 && ++S;
                            do f = 0, (u = e(T, v, A, m)) < 0 ? (b = v[0], A != m && (b = 1e7 * b + (v[1] || 0)), (f = b / S | 0) > 1 ? (f >= 1e7 && (f = 1e7 - 1), h = (p = t(T, f)).length, m = v.length, 1 == (u = e(p, v, h, m)) && (f--, r(p, A < h ? E : T, h))) : (0 == f && (u = f = 1), p = T.slice()), (h = p.length) < m && p.unshift(0), r(v, p, m), -1 == u && (m = v.length, (u = e(T, v, A, m)) < 1 && (f++, r(v, A < m ? E : T, m))), m = v.length) : 0 === u && (f++, v = [0]), y[s++] = f, u && v[0] ? v[m++] = _[w] || 0 : (v = [_[w]], m = 1); while ((w++ < j || void 0 !== v[0]) && g--)
                        }
                        return y[0] || y.shift(), d.e = l, P(d, a ? i + O(d) + 1 : i)
                    }
                }();

                function x(t, e) {
                    var r, n, o, a, c, l = 0,
                        f = 0,
                        h = t.constructor,
                        d = h.precision;
                    if (O(t) > 16) throw Error(s + O(t));
                    if (!t.s) return new h(i);
                    for (null == e ? (u = !1, c = d) : c = e, a = new h(.03125); t.abs().gte(.1);) t = t.times(a), f += 5;
                    for (c += Math.log(p(2, f)) / Math.LN10 * 2 + 5 | 0, r = n = o = new h(i), h.precision = c;;) {
                        if (n = P(n.times(t), c), r = r.times(++l), b((a = o.plus(g(n, r, c))).d).slice(0, c) === b(o.d).slice(0, c)) {
                            for (; f--;) o = P(o.times(o), c);
                            return h.precision = d, null == e ? (u = !0, P(o, d)) : o
                        }
                        o = a
                    }
                }

                function O(t) {
                    for (var e = 7 * t.e, r = t.d[0]; r >= 10; r /= 10) e++;
                    return e
                }

                function w(t, e, r) {
                    if (e > t.LN10.sd()) throw u = !0, r && (t.precision = r), Error(c + "LN10 precision limit exceeded");
                    return P(new t(t.LN10), e)
                }

                function j(t) {
                    for (var e = ""; t--;) e += "0";
                    return e
                }

                function S(t, e) {
                    var r, n, o, a, l, s, f, p, h, d = 1,
                        y = t,
                        v = y.d,
                        m = y.constructor,
                        x = m.precision;
                    if (y.s < 1) throw Error(c + (y.s ? "NaN" : "-Infinity"));
                    if (y.eq(i)) return new m(0);
                    if (null == e ? (u = !1, p = x) : p = e, y.eq(10)) return null == e && (u = !0), w(m, p);
                    if (p += 10, m.precision = p, n = (r = b(v)).charAt(0), !(15e14 > Math.abs(a = O(y)))) return f = w(m, p + 2, x).times(a + ""), y = S(new m(n + "." + r.slice(1)), p - 10).plus(f), m.precision = x, null == e ? (u = !0, P(y, x)) : y;
                    for (; n < 7 && 1 != n || 1 == n && r.charAt(1) > 3;) n = (r = b((y = y.times(t)).d)).charAt(0), d++;
                    for (a = O(y), n > 1 ? (y = new m("0." + r), a++) : y = new m(n + "." + r.slice(1)), s = l = y = g(y.minus(i), y.plus(i), p), h = P(y.times(y), p), o = 3;;) {
                        if (l = P(l.times(h), p), b((f = s.plus(g(l, new m(o), p))).d).slice(0, p) === b(s.d).slice(0, p)) return s = s.times(2), 0 !== a && (s = s.plus(w(m, p + 2, x).times(a + ""))), s = g(s, new m(d), p), m.precision = x, null == e ? (u = !0, P(s, x)) : s;
                        s = f, o += 2
                    }
                }

                function A(t, e) {
                    var r, n, o;
                    for ((r = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (n = e.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +e.slice(n + 1), e = e.substring(0, n)) : r < 0 && (r = e.length), n = 0; 48 === e.charCodeAt(n);) ++n;
                    for (o = e.length; 48 === e.charCodeAt(o - 1);) --o;
                    if (e = e.slice(n, o)) {
                        if (o -= n, r = r - n - 1, t.e = f(r / 7), t.d = [], n = (r + 1) % 7, r < 0 && (n += 7), n < o) {
                            for (n && t.d.push(+e.slice(0, n)), o -= 7; n < o;) t.d.push(+e.slice(n, n += 7));
                            n = 7 - (e = e.slice(n)).length
                        } else n -= o;
                        for (; n--;) e += "0";
                        if (t.d.push(+e), u && (t.e > d || t.e < -d)) throw Error(s + r)
                    } else t.s = 0, t.e = 0, t.d = [0];
                    return t
                }

                function P(t, e, r) {
                    var n, o, i, a, c, l, h, y, v = t.d;
                    for (a = 1, i = v[0]; i >= 10; i /= 10) a++;
                    if ((n = e - a) < 0) n += 7, o = e, h = v[y = 0];
                    else {
                        if ((y = Math.ceil((n + 1) / 7)) >= (i = v.length)) return t;
                        for (a = 1, h = i = v[y]; i >= 10; i /= 10) a++;
                        n %= 7, o = n - 7 + a
                    }
                    if (void 0 !== r && (c = h / (i = p(10, a - o - 1)) % 10 | 0, l = e < 0 || void 0 !== v[y + 1] || h % i, l = r < 4 ? (c || l) && (0 == r || r == (t.s < 0 ? 3 : 2)) : c > 5 || 5 == c && (4 == r || l || 6 == r && (n > 0 ? o > 0 ? h / p(10, a - o) : 0 : v[y - 1]) % 10 & 1 || r == (t.s < 0 ? 8 : 7))), e < 1 || !v[0]) return l ? (i = O(t), v.length = 1, e = e - i - 1, v[0] = p(10, (7 - e % 7) % 7), t.e = f(-e / 7) || 0) : (v.length = 1, v[0] = t.e = t.s = 0), t;
                    if (0 == n ? (v.length = y, i = 1, y--) : (v.length = y + 1, i = p(10, 7 - n), v[y] = o > 0 ? (h / p(10, a - o) % p(10, o) | 0) * i : 0), l)
                        for (;;) {
                            if (0 == y) {
                                1e7 == (v[0] += i) && (v[0] = 1, ++t.e);
                                break
                            }
                            if (v[y] += i, 1e7 != v[y]) break;
                            v[y--] = 0, i = 1
                        }
                    for (n = v.length; 0 === v[--n];) v.pop();
                    if (u && (t.e > d || t.e < -d)) throw Error(s + O(t));
                    return t
                }

                function E(t, e) {
                    var r, n, o, i, a, c, l, s, f, p, h = t.constructor,
                        d = h.precision;
                    if (!t.s || !e.s) return e.s ? e.s = -e.s : e = new h(t), u ? P(e, d) : e;
                    if (l = t.d, p = e.d, n = e.e, s = t.e, l = l.slice(), a = s - n) {
                        for ((f = a < 0) ? (r = l, a = -a, c = p.length) : (r = p, n = s, c = l.length), a > (o = Math.max(Math.ceil(d / 7), c) + 2) && (a = o, r.length = 1), r.reverse(), o = a; o--;) r.push(0);
                        r.reverse()
                    } else {
                        for ((f = (o = l.length) < (c = p.length)) && (c = o), o = 0; o < c; o++)
                            if (l[o] != p[o]) {
                                f = l[o] < p[o];
                                break
                            }
                        a = 0
                    }
                    for (f && (r = l, l = p, p = r, e.s = -e.s), c = l.length, o = p.length - c; o > 0; --o) l[c++] = 0;
                    for (o = p.length; o > a;) {
                        if (l[--o] < p[o]) {
                            for (i = o; i && 0 === l[--i];) l[i] = 1e7 - 1;
                            --l[i], l[o] += 1e7
                        }
                        l[o] -= p[o]
                    }
                    for (; 0 === l[--c];) l.pop();
                    for (; 0 === l[0]; l.shift()) --n;
                    return l[0] ? (e.d = l, e.e = n, u ? P(e, d) : e) : new h(0)
                }

                function k(t, e, r) {
                    var n, o = O(t),
                        i = b(t.d),
                        a = i.length;
                    return e ? (r && (n = r - a) > 0 ? i = i.charAt(0) + "." + i.slice(1) + j(n) : a > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (o < 0 ? "e" : "e+") + o) : o < 0 ? (i = "0." + j(-o - 1) + i, r && (n = r - a) > 0 && (i += j(n))) : o >= a ? (i += j(o + 1 - a), r && (n = r - o - 1) > 0 && (i = i + "." + j(n))) : ((n = o + 1) < a && (i = i.slice(0, n) + "." + i.slice(n)), r && (n = r - a) > 0 && (o + 1 === a && (i += "."), i += j(n))), t.s < 0 ? "-" + i : i
                }

                function M(t, e) {
                    if (t.length > e) return t.length = e, !0
                }

                function _(t) {
                    if (!t || "object" != typeof t) throw Error(c + "Object expected");
                    var e, r, n, o = ["precision", 1, 1e9, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
                    for (e = 0; e < o.length; e += 3)
                        if (void 0 !== (n = t[r = o[e]])) {
                            if (f(n) === n && n >= o[e + 1] && n <= o[e + 2]) this[r] = n;
                            else throw Error(l + r + ": " + n)
                        }
                    if (void 0 !== (n = t[r = "LN10"])) {
                        if (n == Math.LN10) this[r] = new this(n);
                        else throw Error(l + r + ": " + n)
                    }
                    return this
                }(a = function t(e) {
                    var r, n, o;

                    function i(t) {
                        if (!(this instanceof i)) return new i(t);
                        if (this.constructor = i, t instanceof i) {
                            this.s = t.s, this.e = t.e, this.d = (t = t.d) ? t.slice() : t;
                            return
                        }
                        if ("number" == typeof t) {
                            if (0 * t != 0) throw Error(l + t);
                            if (t > 0) this.s = 1;
                            else if (t < 0) t = -t, this.s = -1;
                            else {
                                this.s = 0, this.e = 0, this.d = [0];
                                return
                            }
                            if (t === ~~t && t < 1e7) {
                                this.e = 0, this.d = [t];
                                return
                            }
                            return A(this, t.toString())
                        }
                        if ("string" != typeof t) throw Error(l + t);
                        if (45 === t.charCodeAt(0) ? (t = t.slice(1), this.s = -1) : this.s = 1, h.test(t)) A(this, t);
                        else throw Error(l + t)
                    }
                    if (i.prototype = y, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = t, i.config = i.set = _, void 0 === e && (e = {}), e)
                        for (r = 0, o = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"]; r < o.length;) e.hasOwnProperty(n = o[r++]) || (e[n] = this[n]);
                    return i.config(e), i
                }(a)).default = a.Decimal = a, i = new a(1), void 0 !== (n = (function() {
                    return a
                }).call(e, r, e, t)) && (t.exports = n)
            }(0)
        },
        18552: function(t, e, r) {
            var n = r(10852)(r(55639), "DataView");
            t.exports = n
        },
        1989: function(t, e, r) {
            var n = r(51789),
                o = r(80401),
                i = r(57667),
                a = r(21327),
                u = r(81866);

            function c(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            c.prototype.clear = n, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = a, c.prototype.set = u, t.exports = c
        },
        38407: function(t, e, r) {
            var n = r(27040),
                o = r(14125),
                i = r(82117),
                a = r(67518),
                u = r(54705);

            function c(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            c.prototype.clear = n, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = a, c.prototype.set = u, t.exports = c
        },
        57071: function(t, e, r) {
            var n = r(10852)(r(55639), "Map");
            t.exports = n
        },
        83369: function(t, e, r) {
            var n = r(24785),
                o = r(11285),
                i = r(96e3),
                a = r(49916),
                u = r(95265);

            function c(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            c.prototype.clear = n, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = a, c.prototype.set = u, t.exports = c
        },
        53818: function(t, e, r) {
            var n = r(10852)(r(55639), "Promise");
            t.exports = n
        },
        58525: function(t, e, r) {
            var n = r(10852)(r(55639), "Set");
            t.exports = n
        },
        88668: function(t, e, r) {
            var n = r(83369),
                o = r(90619),
                i = r(72385);

            function a(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.__data__ = new n; ++e < r;) this.add(t[e])
            }
            a.prototype.add = a.prototype.push = o, a.prototype.has = i, t.exports = a
        },
        46384: function(t, e, r) {
            var n = r(38407),
                o = r(37465),
                i = r(63779),
                a = r(67599),
                u = r(44758),
                c = r(34309);

            function l(t) {
                var e = this.__data__ = new n(t);
                this.size = e.size
            }
            l.prototype.clear = o, l.prototype.delete = i, l.prototype.get = a, l.prototype.has = u, l.prototype.set = c, t.exports = l
        },
        11149: function(t, e, r) {
            var n = r(55639).Uint8Array;
            t.exports = n
        },
        70577: function(t, e, r) {
            var n = r(10852)(r(55639), "WeakMap");
            t.exports = n
        },
        96874: function(t) {
            t.exports = function(t, e, r) {
                switch (r.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, r[0]);
                    case 2:
                        return t.call(e, r[0], r[1]);
                    case 3:
                        return t.call(e, r[0], r[1], r[2])
                }
                return t.apply(e, r)
            }
        },
        66193: function(t) {
            t.exports = function(t, e) {
                for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
                    if (!e(t[r], r, t)) return !1;
                return !0
            }
        },
        34963: function(t) {
            t.exports = function(t, e) {
                for (var r = -1, n = null == t ? 0 : t.length, o = 0, i = []; ++r < n;) {
                    var a = t[r];
                    e(a, r, t) && (i[o++] = a)
                }
                return i
            }
        },
        47443: function(t, e, r) {
            var n = r(42118);
            t.exports = function(t, e) {
                return !!(null == t ? 0 : t.length) && n(t, e, 0) > -1
            }
        },
        1196: function(t) {
            t.exports = function(t, e, r) {
                for (var n = -1, o = null == t ? 0 : t.length; ++n < o;)
                    if (r(e, t[n])) return !0;
                return !1
            }
        },
        14636: function(t, e, r) {
            var n = r(22545),
                o = r(35694),
                i = r(1469),
                a = r(44144),
                u = r(65776),
                c = r(36719),
                l = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
                var r = i(t),
                    s = !r && o(t),
                    f = !r && !s && a(t),
                    p = !r && !s && !f && c(t),
                    h = r || s || f || p,
                    d = h ? n(t.length, String) : [],
                    y = d.length;
                for (var v in t)(e || l.call(t, v)) && !(h && ("length" == v || f && ("offset" == v || "parent" == v) || p && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || u(v, y))) && d.push(v);
                return d
            }
        },
        62488: function(t) {
            t.exports = function(t, e) {
                for (var r = -1, n = e.length, o = t.length; ++r < n;) t[o + r] = e[r];
                return t
            }
        },
        82908: function(t) {
            t.exports = function(t, e) {
                for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
                    if (e(t[r], r, t)) return !0;
                return !1
            }
        },
        18470: function(t, e, r) {
            var n = r(77813);
            t.exports = function(t, e) {
                for (var r = t.length; r--;)
                    if (n(t[r][0], e)) return r;
                return -1
            }
        },
        89465: function(t, e, r) {
            var n = r(38777);
            t.exports = function(t, e, r) {
                "__proto__" == e && n ? n(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: r,
                    writable: !0
                }) : t[e] = r
            }
        },
        89881: function(t, e, r) {
            var n = r(47816),
                o = r(99291)(n);
            t.exports = o
        },
        93239: function(t, e, r) {
            var n = r(89881);
            t.exports = function(t, e) {
                var r = !0;
                return n(t, function(t, n, o) {
                    return r = !!e(t, n, o)
                }), r
            }
        },
        56029: function(t, e, r) {
            var n = r(33448);
            t.exports = function(t, e, r) {
                for (var o = -1, i = t.length; ++o < i;) {
                    var a = t[o],
                        u = e(a);
                    if (null != u && (void 0 === c ? u == u && !n(u) : r(u, c))) var c = u,
                        l = a
                }
                return l
            }
        },
        41848: function(t) {
            t.exports = function(t, e, r, n) {
                for (var o = t.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o;)
                    if (e(t[i], i, t)) return i;
                return -1
            }
        },
        21078: function(t, e, r) {
            var n = r(62488),
                o = r(37285);
            t.exports = function t(e, r, i, a, u) {
                var c = -1,
                    l = e.length;
                for (i || (i = o), u || (u = []); ++c < l;) {
                    var s = e[c];
                    r > 0 && i(s) ? r > 1 ? t(s, r - 1, i, a, u) : n(u, s) : a || (u[u.length] = s)
                }
                return u
            }
        },
        28483: function(t, e, r) {
            var n = r(25063)();
            t.exports = n
        },
        47816: function(t, e, r) {
            var n = r(28483),
                o = r(3674);
            t.exports = function(t, e) {
                return t && n(t, e, o)
            }
        },
        97786: function(t, e, r) {
            var n = r(71811),
                o = r(40327);
            t.exports = function(t, e) {
                e = n(e, t);
                for (var r = 0, i = e.length; null != t && r < i;) t = t[o(e[r++])];
                return r && r == i ? t : void 0
            }
        },
        68866: function(t, e, r) {
            var n = r(62488),
                o = r(1469);
            t.exports = function(t, e, r) {
                var i = e(t);
                return o(t) ? i : n(i, r(t))
            }
        },
        53325: function(t) {
            t.exports = function(t, e) {
                return t > e
            }
        },
        13: function(t) {
            t.exports = function(t, e) {
                return null != t && e in Object(t)
            }
        },
        42118: function(t, e, r) {
            var n = r(41848),
                o = r(62722),
                i = r(42351);
            t.exports = function(t, e, r) {
                return e == e ? i(t, e, r) : n(t, o, r)
            }
        },
        9454: function(t, e, r) {
            var n = r(44239),
                o = r(37005);
            t.exports = function(t) {
                return o(t) && "[object Arguments]" == n(t)
            }
        },
        90939: function(t, e, r) {
            var n = r(2492),
                o = r(37005);
            t.exports = function t(e, r, i, a, u) {
                return e === r || (null != e && null != r && (o(e) || o(r)) ? n(e, r, i, a, t, u) : e != e && r != r)
            }
        },
        2492: function(t, e, r) {
            var n = r(46384),
                o = r(67114),
                i = r(18351),
                a = r(16096),
                u = r(64160),
                c = r(1469),
                l = r(44144),
                s = r(36719),
                f = "[object Arguments]",
                p = "[object Array]",
                h = "[object Object]",
                d = Object.prototype.hasOwnProperty;
            t.exports = function(t, e, r, y, v, m) {
                var b = c(t),
                    g = c(e),
                    x = b ? p : u(t),
                    O = g ? p : u(e);
                x = x == f ? h : x, O = O == f ? h : O;
                var w = x == h,
                    j = O == h,
                    S = x == O;
                if (S && l(t)) {
                    if (!l(e)) return !1;
                    b = !0, w = !1
                }
                if (S && !w) return m || (m = new n), b || s(t) ? o(t, e, r, y, v, m) : i(t, e, x, r, y, v, m);
                if (!(1 & r)) {
                    var A = w && d.call(t, "__wrapped__"),
                        P = j && d.call(e, "__wrapped__");
                    if (A || P) {
                        var E = A ? t.value() : t,
                            k = P ? e.value() : e;
                        return m || (m = new n), v(E, k, r, y, m)
                    }
                }
                return !!S && (m || (m = new n), a(t, e, r, y, v, m))
            }
        },
        2958: function(t, e, r) {
            var n = r(46384),
                o = r(90939);
            t.exports = function(t, e, r, i) {
                var a = r.length,
                    u = a,
                    c = !i;
                if (null == t) return !u;
                for (t = Object(t); a--;) {
                    var l = r[a];
                    if (c && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1
                }
                for (; ++a < u;) {
                    var s = (l = r[a])[0],
                        f = t[s],
                        p = l[1];
                    if (c && l[2]) {
                        if (void 0 === f && !(s in t)) return !1
                    } else {
                        var h = new n;
                        if (i) var d = i(f, p, s, t, e, h);
                        if (!(void 0 === d ? o(p, f, 3, i, h) : d)) return !1
                    }
                }
                return !0
            }
        },
        62722: function(t) {
            t.exports = function(t) {
                return t != t
            }
        },
        28458: function(t, e, r) {
            var n = r(23560),
                o = r(15346),
                i = r(13218),
                a = r(80346),
                u = /^\[object .+?Constructor\]$/,
                c = Object.prototype,
                l = Function.prototype.toString,
                s = c.hasOwnProperty,
                f = RegExp("^" + l.call(s).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = function(t) {
                return !(!i(t) || o(t)) && (n(t) ? f : u).test(a(t))
            }
        },
        38749: function(t, e, r) {
            var n = r(44239),
                o = r(41780),
                i = r(37005),
                a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function(t) {
                return i(t) && o(t.length) && !!a[n(t)]
            }
        },
        67206: function(t, e, r) {
            var n = r(91573),
                o = r(16432),
                i = r(6557),
                a = r(1469),
                u = r(39601);
            t.exports = function(t) {
                return "function" == typeof t ? t : null == t ? i : "object" == typeof t ? a(t) ? o(t[0], t[1]) : n(t) : u(t)
            }
        },
        280: function(t, e, r) {
            var n = r(25726),
                o = r(86916),
                i = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!n(t)) return o(t);
                var e = [];
                for (var r in Object(t)) i.call(t, r) && "constructor" != r && e.push(r);
                return e
            }
        },
        70433: function(t) {
            t.exports = function(t, e) {
                return t < e
            }
        },
        69199: function(t, e, r) {
            var n = r(89881),
                o = r(98612);
            t.exports = function(t, e) {
                var r = -1,
                    i = o(t) ? Array(t.length) : [];
                return n(t, function(t, n, o) {
                    i[++r] = e(t, n, o)
                }), i
            }
        },
        91573: function(t, e, r) {
            var n = r(2958),
                o = r(1499),
                i = r(42634);
            t.exports = function(t) {
                var e = o(t);
                return 1 == e.length && e[0][2] ? i(e[0][0], e[0][1]) : function(r) {
                    return r === t || n(r, t, e)
                }
            }
        },
        16432: function(t, e, r) {
            var n = r(90939),
                o = r(27361),
                i = r(79095),
                a = r(15403),
                u = r(89162),
                c = r(42634),
                l = r(40327);
            t.exports = function(t, e) {
                return a(t) && u(e) ? c(l(t), e) : function(r) {
                    var a = o(r, t);
                    return void 0 === a && a === e ? i(r, t) : n(e, a, 3)
                }
            }
        },
        82689: function(t, e, r) {
            var n = r(29932),
                o = r(97786),
                i = r(67206),
                a = r(69199),
                u = r(71131),
                c = r(7518),
                l = r(85022),
                s = r(6557),
                f = r(1469);
            t.exports = function(t, e, r) {
                e = e.length ? n(e, function(t) {
                    return f(t) ? function(e) {
                        return o(e, 1 === t.length ? t[0] : t)
                    } : t
                }) : [s];
                var p = -1;
                return e = n(e, c(i)), u(a(t, function(t, r, o) {
                    return {
                        criteria: n(e, function(e) {
                            return e(t)
                        }),
                        index: ++p,
                        value: t
                    }
                }), function(t, e) {
                    return l(t, e, r)
                })
            }
        },
        40371: function(t) {
            t.exports = function(t) {
                return function(e) {
                    return null == e ? void 0 : e[t]
                }
            }
        },
        79152: function(t, e, r) {
            var n = r(97786);
            t.exports = function(t) {
                return function(e) {
                    return n(e, t)
                }
            }
        },
        40098: function(t) {
            var e = Math.ceil,
                r = Math.max;
            t.exports = function(t, n, o, i) {
                for (var a = -1, u = r(e((n - t) / (o || 1)), 0), c = Array(u); u--;) c[i ? u : ++a] = t, t += o;
                return c
            }
        },
        5976: function(t, e, r) {
            var n = r(6557),
                o = r(45357),
                i = r(30061);
            t.exports = function(t, e) {
                return i(o(t, e, n), t + "")
            }
        },
        56560: function(t, e, r) {
            var n = r(75703),
                o = r(38777),
                i = r(6557),
                a = o ? function(t, e) {
                    return o(t, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: n(e),
                        writable: !0
                    })
                } : i;
            t.exports = a
        },
        5076: function(t, e, r) {
            var n = r(89881);
            t.exports = function(t, e) {
                var r;
                return n(t, function(t, n, o) {
                    return !(r = e(t, n, o))
                }), !!r
            }
        },
        71131: function(t) {
            t.exports = function(t, e) {
                var r = t.length;
                for (t.sort(e); r--;) t[r] = t[r].value;
                return t
            }
        },
        22545: function(t) {
            t.exports = function(t, e) {
                for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
                return n
            }
        },
        27561: function(t, e, r) {
            var n = r(67990),
                o = /^\s+/;
            t.exports = function(t) {
                return t ? t.slice(0, n(t) + 1).replace(o, "") : t
            }
        },
        7518: function(t) {
            t.exports = function(t) {
                return function(e) {
                    return t(e)
                }
            }
        },
        45652: function(t, e, r) {
            var n = r(88668),
                o = r(47443),
                i = r(1196),
                a = r(74757),
                u = r(23593),
                c = r(21814);
            t.exports = function(t, e, r) {
                var l = -1,
                    s = o,
                    f = t.length,
                    p = !0,
                    h = [],
                    d = h;
                if (r) p = !1, s = i;
                else if (f >= 200) {
                    var y = e ? null : u(t);
                    if (y) return c(y);
                    p = !1, s = a, d = new n
                } else d = e ? [] : h;
                t: for (; ++l < f;) {
                    var v = t[l],
                        m = e ? e(v) : v;
                    if (v = r || 0 !== v ? v : 0, p && m == m) {
                        for (var b = d.length; b--;)
                            if (d[b] === m) continue t;
                        e && d.push(m), h.push(v)
                    } else s(d, m, r) || (d !== h && d.push(m), h.push(v))
                }
                return h
            }
        },
        74757: function(t) {
            t.exports = function(t, e) {
                return t.has(e)
            }
        },
        71811: function(t, e, r) {
            var n = r(1469),
                o = r(15403),
                i = r(55514),
                a = r(79833);
            t.exports = function(t, e) {
                return n(t) ? t : o(t, e) ? [t] : i(a(t))
            }
        },
        26393: function(t, e, r) {
            var n = r(33448);
            t.exports = function(t, e) {
                if (t !== e) {
                    var r = void 0 !== t,
                        o = null === t,
                        i = t == t,
                        a = n(t),
                        u = void 0 !== e,
                        c = null === e,
                        l = e == e,
                        s = n(e);
                    if (!c && !s && !a && t > e || a && u && l && !c && !s || o && u && l || !r && l || !i) return 1;
                    if (!o && !a && !s && t < e || s && r && i && !o && !a || c && r && i || !u && i || !l) return -1
                }
                return 0
            }
        },
        85022: function(t, e, r) {
            var n = r(26393);
            t.exports = function(t, e, r) {
                for (var o = -1, i = t.criteria, a = e.criteria, u = i.length, c = r.length; ++o < u;) {
                    var l = n(i[o], a[o]);
                    if (l) {
                        if (o >= c) return l;
                        return l * ("desc" == r[o] ? -1 : 1)
                    }
                }
                return t.index - e.index
            }
        },
        14429: function(t, e, r) {
            var n = r(55639)["__core-js_shared__"];
            t.exports = n
        },
        99291: function(t, e, r) {
            var n = r(98612);
            t.exports = function(t, e) {
                return function(r, o) {
                    if (null == r) return r;
                    if (!n(r)) return t(r, o);
                    for (var i = r.length, a = e ? i : -1, u = Object(r);
                        (e ? a-- : ++a < i) && !1 !== o(u[a], a, u););
                    return r
                }
            }
        },
        25063: function(t) {
            t.exports = function(t) {
                return function(e, r, n) {
                    for (var o = -1, i = Object(e), a = n(e), u = a.length; u--;) {
                        var c = a[t ? u : ++o];
                        if (!1 === r(i[c], c, i)) break
                    }
                    return e
                }
            }
        },
        67740: function(t, e, r) {
            var n = r(67206),
                o = r(98612),
                i = r(3674);
            t.exports = function(t) {
                return function(e, r, a) {
                    var u = Object(e);
                    if (!o(e)) {
                        var c = n(r, 3);
                        e = i(e), r = function(t) {
                            return c(u[t], t, u)
                        }
                    }
                    var l = t(e, r, a);
                    return l > -1 ? u[c ? e[l] : l] : void 0
                }
            }
        },
        47445: function(t, e, r) {
            var n = r(40098),
                o = r(16612),
                i = r(18601);
            t.exports = function(t) {
                return function(e, r, a) {
                    return a && "number" != typeof a && o(e, r, a) && (r = a = void 0), e = i(e), void 0 === r ? (r = e, e = 0) : r = i(r), a = void 0 === a ? e < r ? 1 : -1 : i(a), n(e, r, a, t)
                }
            }
        },
        23593: function(t, e, r) {
            var n = r(58525),
                o = r(50308),
                i = r(21814),
                a = n && 1 / i(new n([, -0]))[1] == 1 / 0 ? function(t) {
                    return new n(t)
                } : o;
            t.exports = a
        },
        38777: function(t, e, r) {
            var n = r(10852),
                o = function() {
                    try {
                        var t = n(Object, "defineProperty");
                        return t({}, "", {}), t
                    } catch (t) {}
                }();
            t.exports = o
        },
        67114: function(t, e, r) {
            var n = r(88668),
                o = r(82908),
                i = r(74757);
            t.exports = function(t, e, r, a, u, c) {
                var l = 1 & r,
                    s = t.length,
                    f = e.length;
                if (s != f && !(l && f > s)) return !1;
                var p = c.get(t),
                    h = c.get(e);
                if (p && h) return p == e && h == t;
                var d = -1,
                    y = !0,
                    v = 2 & r ? new n : void 0;
                for (c.set(t, e), c.set(e, t); ++d < s;) {
                    var m = t[d],
                        b = e[d];
                    if (a) var g = l ? a(b, m, d, e, t, c) : a(m, b, d, t, e, c);
                    if (void 0 !== g) {
                        if (g) continue;
                        y = !1;
                        break
                    }
                    if (v) {
                        if (!o(e, function(t, e) {
                                if (!i(v, e) && (m === t || u(m, t, r, a, c))) return v.push(e)
                            })) {
                            y = !1;
                            break
                        }
                    } else if (!(m === b || u(m, b, r, a, c))) {
                        y = !1;
                        break
                    }
                }
                return c.delete(t), c.delete(e), y
            }
        },
        18351: function(t, e, r) {
            var n = r(62705),
                o = r(11149),
                i = r(77813),
                a = r(67114),
                u = r(68776),
                c = r(21814),
                l = n ? n.prototype : void 0,
                s = l ? l.valueOf : void 0;
            t.exports = function(t, e, r, n, l, f, p) {
                switch (r) {
                    case "[object DataView]":
                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) break;
                        t = t.buffer, e = e.buffer;
                    case "[object ArrayBuffer]":
                        if (t.byteLength != e.byteLength || !f(new o(t), new o(e))) break;
                        return !0;
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return i(+t, +e);
                    case "[object Error]":
                        return t.name == e.name && t.message == e.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return t == e + "";
                    case "[object Map]":
                        var h = u;
                    case "[object Set]":
                        var d = 1 & n;
                        if (h || (h = c), t.size != e.size && !d) break;
                        var y = p.get(t);
                        if (y) return y == e;
                        n |= 2, p.set(t, e);
                        var v = a(h(t), h(e), n, l, f, p);
                        return p.delete(t), v;
                    case "[object Symbol]":
                        if (s) return s.call(t) == s.call(e)
                }
                return !1
            }
        },
        16096: function(t, e, r) {
            var n = r(58234),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t, e, r, i, a, u) {
                var c = 1 & r,
                    l = n(t),
                    s = l.length;
                if (s != n(e).length && !c) return !1;
                for (var f = s; f--;) {
                    var p = l[f];
                    if (!(c ? p in e : o.call(e, p))) return !1
                }
                var h = u.get(t),
                    d = u.get(e);
                if (h && d) return h == e && d == t;
                var y = !0;
                u.set(t, e), u.set(e, t);
                for (var v = c; ++f < s;) {
                    var m = t[p = l[f]],
                        b = e[p];
                    if (i) var g = c ? i(b, m, p, e, t, u) : i(m, b, p, t, e, u);
                    if (!(void 0 === g ? m === b || a(m, b, r, i, u) : g)) {
                        y = !1;
                        break
                    }
                    v || (v = "constructor" == p)
                }
                if (y && !v) {
                    var x = t.constructor,
                        O = e.constructor;
                    x != O && "constructor" in t && "constructor" in e && !("function" == typeof x && x instanceof x && "function" == typeof O && O instanceof O) && (y = !1)
                }
                return u.delete(t), u.delete(e), y
            }
        },
        58234: function(t, e, r) {
            var n = r(68866),
                o = r(99551),
                i = r(3674);
            t.exports = function(t) {
                return n(t, i, o)
            }
        },
        45050: function(t, e, r) {
            var n = r(37019);
            t.exports = function(t, e) {
                var r = t.__data__;
                return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
            }
        },
        1499: function(t, e, r) {
            var n = r(89162),
                o = r(3674);
            t.exports = function(t) {
                for (var e = o(t), r = e.length; r--;) {
                    var i = e[r],
                        a = t[i];
                    e[r] = [i, a, n(a)]
                }
                return e
            }
        },
        10852: function(t, e, r) {
            var n = r(28458),
                o = r(47801);
            t.exports = function(t, e) {
                var r = o(t, e);
                return n(r) ? r : void 0
            }
        },
        85924: function(t, e, r) {
            var n = r(5569)(Object.getPrototypeOf, Object);
            t.exports = n
        },
        99551: function(t, e, r) {
            var n = r(34963),
                o = r(70479),
                i = Object.prototype.propertyIsEnumerable,
                a = Object.getOwnPropertySymbols,
                u = a ? function(t) {
                    return null == t ? [] : n(a(t = Object(t)), function(e) {
                        return i.call(t, e)
                    })
                } : o;
            t.exports = u
        },
        64160: function(t, e, r) {
            var n = r(18552),
                o = r(57071),
                i = r(53818),
                a = r(58525),
                u = r(70577),
                c = r(44239),
                l = r(80346),
                s = "[object Map]",
                f = "[object Promise]",
                p = "[object Set]",
                h = "[object WeakMap]",
                d = "[object DataView]",
                y = l(n),
                v = l(o),
                m = l(i),
                b = l(a),
                g = l(u),
                x = c;
            (n && x(new n(new ArrayBuffer(1))) != d || o && x(new o) != s || i && x(i.resolve()) != f || a && x(new a) != p || u && x(new u) != h) && (x = function(t) {
                var e = c(t),
                    r = "[object Object]" == e ? t.constructor : void 0,
                    n = r ? l(r) : "";
                if (n) switch (n) {
                    case y:
                        return d;
                    case v:
                        return s;
                    case m:
                        return f;
                    case b:
                        return p;
                    case g:
                        return h
                }
                return e
            }), t.exports = x
        },
        47801: function(t) {
            t.exports = function(t, e) {
                return null == t ? void 0 : t[e]
            }
        },
        222: function(t, e, r) {
            var n = r(71811),
                o = r(35694),
                i = r(1469),
                a = r(65776),
                u = r(41780),
                c = r(40327);
            t.exports = function(t, e, r) {
                e = n(e, t);
                for (var l = -1, s = e.length, f = !1; ++l < s;) {
                    var p = c(e[l]);
                    if (!(f = null != t && r(t, p))) break;
                    t = t[p]
                }
                return f || ++l != s ? f : !!(s = null == t ? 0 : t.length) && u(s) && a(p, s) && (i(t) || o(t))
            }
        },
        51789: function(t, e, r) {
            var n = r(94536);
            t.exports = function() {
                this.__data__ = n ? n(null) : {}, this.size = 0
            }
        },
        80401: function(t) {
            t.exports = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
            }
        },
        57667: function(t, e, r) {
            var n = r(94536),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var e = this.__data__;
                if (n) {
                    var r = e[t];
                    return "__lodash_hash_undefined__" === r ? void 0 : r
                }
                return o.call(e, t) ? e[t] : void 0
            }
        },
        21327: function(t, e, r) {
            var n = r(94536),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var e = this.__data__;
                return n ? void 0 !== e[t] : o.call(e, t)
            }
        },
        81866: function(t, e, r) {
            var n = r(94536);
            t.exports = function(t, e) {
                var r = this.__data__;
                return this.size += this.has(t) ? 0 : 1, r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e, this
            }
        },
        37285: function(t, e, r) {
            var n = r(62705),
                o = r(35694),
                i = r(1469),
                a = n ? n.isConcatSpreadable : void 0;
            t.exports = function(t) {
                return i(t) || o(t) || !!(a && t && t[a])
            }
        },
        65776: function(t) {
            var e = /^(?:0|[1-9]\d*)$/;
            t.exports = function(t, r) {
                var n = typeof t;
                return !!(r = null == r ? 9007199254740991 : r) && ("number" == n || "symbol" != n && e.test(t)) && t > -1 && t % 1 == 0 && t < r
            }
        },
        16612: function(t, e, r) {
            var n = r(77813),
                o = r(98612),
                i = r(65776),
                a = r(13218);
            t.exports = function(t, e, r) {
                if (!a(r)) return !1;
                var u = typeof e;
                return ("number" == u ? !!(o(r) && i(e, r.length)) : "string" == u && e in r) && n(r[e], t)
            }
        },
        15403: function(t, e, r) {
            var n = r(1469),
                o = r(33448),
                i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                a = /^\w*$/;
            t.exports = function(t, e) {
                if (n(t)) return !1;
                var r = typeof t;
                return !!("number" == r || "symbol" == r || "boolean" == r || null == t || o(t)) || a.test(t) || !i.test(t) || null != e && t in Object(e)
            }
        },
        37019: function(t) {
            t.exports = function(t) {
                var e = typeof t;
                return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
            }
        },
        15346: function(t, e, r) {
            var n, o = r(14429),
                i = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
            t.exports = function(t) {
                return !!i && i in t
            }
        },
        25726: function(t) {
            var e = Object.prototype;
            t.exports = function(t) {
                var r = t && t.constructor;
                return t === ("function" == typeof r && r.prototype || e)
            }
        },
        89162: function(t, e, r) {
            var n = r(13218);
            t.exports = function(t) {
                return t == t && !n(t)
            }
        },
        27040: function(t) {
            t.exports = function() {
                this.__data__ = [], this.size = 0
            }
        },
        14125: function(t, e, r) {
            var n = r(18470),
                o = Array.prototype.splice;
            t.exports = function(t) {
                var e = this.__data__,
                    r = n(e, t);
                return !(r < 0) && (r == e.length - 1 ? e.pop() : o.call(e, r, 1), --this.size, !0)
            }
        },
        82117: function(t, e, r) {
            var n = r(18470);
            t.exports = function(t) {
                var e = this.__data__,
                    r = n(e, t);
                return r < 0 ? void 0 : e[r][1]
            }
        },
        67518: function(t, e, r) {
            var n = r(18470);
            t.exports = function(t) {
                return n(this.__data__, t) > -1
            }
        },
        54705: function(t, e, r) {
            var n = r(18470);
            t.exports = function(t, e) {
                var r = this.__data__,
                    o = n(r, t);
                return o < 0 ? (++this.size, r.push([t, e])) : r[o][1] = e, this
            }
        },
        24785: function(t, e, r) {
            var n = r(1989),
                o = r(38407),
                i = r(57071);
            t.exports = function() {
                this.size = 0, this.__data__ = {
                    hash: new n,
                    map: new(i || o),
                    string: new n
                }
            }
        },
        11285: function(t, e, r) {
            var n = r(45050);
            t.exports = function(t) {
                var e = n(this, t).delete(t);
                return this.size -= e ? 1 : 0, e
            }
        },
        96e3: function(t, e, r) {
            var n = r(45050);
            t.exports = function(t) {
                return n(this, t).get(t)
            }
        },
        49916: function(t, e, r) {
            var n = r(45050);
            t.exports = function(t) {
                return n(this, t).has(t)
            }
        },
        95265: function(t, e, r) {
            var n = r(45050);
            t.exports = function(t, e) {
                var r = n(this, t),
                    o = r.size;
                return r.set(t, e), this.size += r.size == o ? 0 : 1, this
            }
        },
        68776: function(t) {
            t.exports = function(t) {
                var e = -1,
                    r = Array(t.size);
                return t.forEach(function(t, n) {
                    r[++e] = [n, t]
                }), r
            }
        },
        42634: function(t) {
            t.exports = function(t, e) {
                return function(r) {
                    return null != r && r[t] === e && (void 0 !== e || t in Object(r))
                }
            }
        },
        24523: function(t, e, r) {
            var n = r(88306);
            t.exports = function(t) {
                var e = n(t, function(t) {
                        return 500 === r.size && r.clear(), t
                    }),
                    r = e.cache;
                return e
            }
        },
        94536: function(t, e, r) {
            var n = r(10852)(Object, "create");
            t.exports = n
        },
        86916: function(t, e, r) {
            var n = r(5569)(Object.keys, Object);
            t.exports = n
        },
        31167: function(t, e, r) {
            t = r.nmd(t);
            var n = r(31957),
                o = e && !e.nodeType && e,
                i = o && t && !t.nodeType && t,
                a = i && i.exports === o && n.process,
                u = function() {
                    try {
                        var t = i && i.require && i.require("util").types;
                        if (t) return t;
                        return a && a.binding && a.binding("util")
                    } catch (t) {}
                }();
            t.exports = u
        },
        5569: function(t) {
            t.exports = function(t, e) {
                return function(r) {
                    return t(e(r))
                }
            }
        },
        45357: function(t, e, r) {
            var n = r(96874),
                o = Math.max;
            t.exports = function(t, e, r) {
                return e = o(void 0 === e ? t.length - 1 : e, 0),
                    function() {
                        for (var i = arguments, a = -1, u = o(i.length - e, 0), c = Array(u); ++a < u;) c[a] = i[e + a];
                        a = -1;
                        for (var l = Array(e + 1); ++a < e;) l[a] = i[a];
                        return l[e] = r(c), n(t, this, l)
                    }
            }
        },
        90619: function(t) {
            t.exports = function(t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this
            }
        },
        72385: function(t) {
            t.exports = function(t) {
                return this.__data__.has(t)
            }
        },
        21814: function(t) {
            t.exports = function(t) {
                var e = -1,
                    r = Array(t.size);
                return t.forEach(function(t) {
                    r[++e] = t
                }), r
            }
        },
        30061: function(t, e, r) {
            var n = r(56560),
                o = r(21275)(n);
            t.exports = o
        },
        21275: function(t) {
            var e = Date.now;
            t.exports = function(t) {
                var r = 0,
                    n = 0;
                return function() {
                    var o = e(),
                        i = 16 - (o - n);
                    if (n = o, i > 0) {
                        if (++r >= 800) return arguments[0]
                    } else r = 0;
                    return t.apply(void 0, arguments)
                }
            }
        },
        37465: function(t, e, r) {
            var n = r(38407);
            t.exports = function() {
                this.__data__ = new n, this.size = 0
            }
        },
        63779: function(t) {
            t.exports = function(t) {
                var e = this.__data__,
                    r = e.delete(t);
                return this.size = e.size, r
            }
        },
        67599: function(t) {
            t.exports = function(t) {
                return this.__data__.get(t)
            }
        },
        44758: function(t) {
            t.exports = function(t) {
                return this.__data__.has(t)
            }
        },
        34309: function(t, e, r) {
            var n = r(38407),
                o = r(57071),
                i = r(83369);
            t.exports = function(t, e) {
                var r = this.__data__;
                if (r instanceof n) {
                    var a = r.__data__;
                    if (!o || a.length < 199) return a.push([t, e]), this.size = ++r.size, this;
                    r = this.__data__ = new i(a)
                }
                return r.set(t, e), this.size = r.size, this
            }
        },
        42351: function(t) {
            t.exports = function(t, e, r) {
                for (var n = r - 1, o = t.length; ++n < o;)
                    if (t[n] === e) return n;
                return -1
            }
        },
        55514: function(t, e, r) {
            var n = r(24523),
                o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                i = /\\(\\)?/g,
                a = n(function(t) {
                    var e = [];
                    return 46 === t.charCodeAt(0) && e.push(""), t.replace(o, function(t, r, n, o) {
                        e.push(n ? o.replace(i, "$1") : r || t)
                    }), e
                });
            t.exports = a
        },
        40327: function(t, e, r) {
            var n = r(33448),
                o = 1 / 0;
            t.exports = function(t) {
                if ("string" == typeof t || n(t)) return t;
                var e = t + "";
                return "0" == e && 1 / t == -o ? "-0" : e
            }
        },
        80346: function(t) {
            var e = Function.prototype.toString;
            t.exports = function(t) {
                if (null != t) {
                    try {
                        return e.call(t)
                    } catch (t) {}
                    try {
                        return t + ""
                    } catch (t) {}
                }
                return ""
            }
        },
        67990: function(t) {
            var e = /\s/;
            t.exports = function(t) {
                for (var r = t.length; r-- && e.test(t.charAt(r)););
                return r
            }
        },
        75703: function(t) {
            t.exports = function(t) {
                return function() {
                    return t
                }
            }
        },
        23279: function(t, e, r) {
            var n = r(13218),
                o = r(7771),
                i = r(14841),
                a = Math.max,
                u = Math.min;
            t.exports = function(t, e, r) {
                var c, l, s, f, p, h, d = 0,
                    y = !1,
                    v = !1,
                    m = !0;
                if ("function" != typeof t) throw TypeError("Expected a function");

                function b(e) {
                    var r = c,
                        n = l;
                    return c = l = void 0, d = e, f = t.apply(n, r)
                }

                function g(t) {
                    var r = t - h,
                        n = t - d;
                    return void 0 === h || r >= e || r < 0 || v && n >= s
                }

                function x() {
                    var t, r, n, i = o();
                    if (g(i)) return O(i);
                    p = setTimeout(x, (t = i - h, r = i - d, n = e - t, v ? u(n, s - r) : n))
                }

                function O(t) {
                    return (p = void 0, m && c) ? b(t) : (c = l = void 0, f)
                }

                function w() {
                    var t, r = o(),
                        n = g(r);
                    if (c = arguments, l = this, h = r, n) {
                        if (void 0 === p) return d = t = h, p = setTimeout(x, e), y ? b(t) : f;
                        if (v) return clearTimeout(p), p = setTimeout(x, e), b(h)
                    }
                    return void 0 === p && (p = setTimeout(x, e)), f
                }
                return e = i(e) || 0, n(r) && (y = !!r.leading, s = (v = "maxWait" in r) ? a(i(r.maxWait) || 0, e) : s, m = "trailing" in r ? !!r.trailing : m), w.cancel = function() {
                    void 0 !== p && clearTimeout(p), d = 0, c = h = l = p = void 0
                }, w.flush = function() {
                    return void 0 === p ? f : O(o())
                }, w
            }
        },
        77813: function(t) {
            t.exports = function(t, e) {
                return t === e || t != t && e != e
            }
        },
        711: function(t, e, r) {
            var n = r(66193),
                o = r(93239),
                i = r(67206),
                a = r(1469),
                u = r(16612);
            t.exports = function(t, e, r) {
                var c = a(t) ? n : o;
                return r && u(t, e, r) && (e = void 0), c(t, i(e, 3))
            }
        },
        13311: function(t, e, r) {
            var n = r(67740)(r(30998));
            t.exports = n
        },
        30998: function(t, e, r) {
            var n = r(41848),
                o = r(67206),
                i = r(40554),
                a = Math.max;
            t.exports = function(t, e, r) {
                var u = null == t ? 0 : t.length;
                if (!u) return -1;
                var c = null == r ? 0 : i(r);
                return c < 0 && (c = a(u + c, 0)), n(t, o(e, 3), c)
            }
        },
        94654: function(t, e, r) {
            var n = r(21078),
                o = r(35161);
            t.exports = function(t, e) {
                return n(o(t, e), 1)
            }
        },
        27361: function(t, e, r) {
            var n = r(97786);
            t.exports = function(t, e, r) {
                var o = null == t ? void 0 : n(t, e);
                return void 0 === o ? r : o
            }
        },
        79095: function(t, e, r) {
            var n = r(13),
                o = r(222);
            t.exports = function(t, e) {
                return null != t && o(t, e, n)
            }
        },
        6557: function(t) {
            t.exports = function(t) {
                return t
            }
        },
        35694: function(t, e, r) {
            var n = r(9454),
                o = r(37005),
                i = Object.prototype,
                a = i.hasOwnProperty,
                u = i.propertyIsEnumerable,
                c = n(function() {
                    return arguments
                }()) ? n : function(t) {
                    return o(t) && a.call(t, "callee") && !u.call(t, "callee")
                };
            t.exports = c
        },
        98612: function(t, e, r) {
            var n = r(23560),
                o = r(41780);
            t.exports = function(t) {
                return null != t && o(t.length) && !n(t)
            }
        },
        51584: function(t, e, r) {
            var n = r(44239),
                o = r(37005);
            t.exports = function(t) {
                return !0 === t || !1 === t || o(t) && "[object Boolean]" == n(t)
            }
        },
        44144: function(t, e, r) {
            t = r.nmd(t);
            var n = r(55639),
                o = r(95062),
                i = e && !e.nodeType && e,
                a = i && t && !t.nodeType && t,
                u = a && a.exports === i ? n.Buffer : void 0,
                c = u ? u.isBuffer : void 0;
            t.exports = c || o
        },
        18446: function(t, e, r) {
            var n = r(90939);
            t.exports = function(t, e) {
                return n(t, e)
            }
        },
        23560: function(t, e, r) {
            var n = r(44239),
                o = r(13218);
            t.exports = function(t) {
                if (!o(t)) return !1;
                var e = n(t);
                return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
            }
        },
        41780: function(t) {
            t.exports = function(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
            }
        },
        7654: function(t, e, r) {
            var n = r(81763);
            t.exports = function(t) {
                return n(t) && t != +t
            }
        },
        14293: function(t) {
            t.exports = function(t) {
                return null == t
            }
        },
        81763: function(t, e, r) {
            var n = r(44239),
                o = r(37005);
            t.exports = function(t) {
                return "number" == typeof t || o(t) && "[object Number]" == n(t)
            }
        },
        13218: function(t) {
            t.exports = function(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }
        },
        68630: function(t, e, r) {
            var n = r(44239),
                o = r(85924),
                i = r(37005),
                a = Object.prototype,
                u = Function.prototype.toString,
                c = a.hasOwnProperty,
                l = u.call(Object);
            t.exports = function(t) {
                if (!i(t) || "[object Object]" != n(t)) return !1;
                var e = o(t);
                if (null === e) return !0;
                var r = c.call(e, "constructor") && e.constructor;
                return "function" == typeof r && r instanceof r && u.call(r) == l
            }
        },
        47037: function(t, e, r) {
            var n = r(44239),
                o = r(1469),
                i = r(37005);
            t.exports = function(t) {
                return "string" == typeof t || !o(t) && i(t) && "[object String]" == n(t)
            }
        },
        36719: function(t, e, r) {
            var n = r(38749),
                o = r(7518),
                i = r(31167),
                a = i && i.isTypedArray,
                u = a ? o(a) : n;
            t.exports = u
        },
        3674: function(t, e, r) {
            var n = r(14636),
                o = r(280),
                i = r(98612);
            t.exports = function(t) {
                return i(t) ? n(t) : o(t)
            }
        },
        10928: function(t) {
            t.exports = function(t) {
                var e = null == t ? 0 : t.length;
                return e ? t[e - 1] : void 0
            }
        },
        35161: function(t, e, r) {
            var n = r(29932),
                o = r(67206),
                i = r(69199),
                a = r(1469);
            t.exports = function(t, e) {
                return (a(t) ? n : i)(t, o(e, 3))
            }
        },
        66604: function(t, e, r) {
            var n = r(89465),
                o = r(47816),
                i = r(67206);
            t.exports = function(t, e) {
                var r = {};
                return e = i(e, 3), o(t, function(t, o, i) {
                    n(r, o, e(t, o, i))
                }), r
            }
        },
        6162: function(t, e, r) {
            var n = r(56029),
                o = r(53325),
                i = r(6557);
            t.exports = function(t) {
                return t && t.length ? n(t, i, o) : void 0
            }
        },
        84753: function(t, e, r) {
            var n = r(56029),
                o = r(53325),
                i = r(67206);
            t.exports = function(t, e) {
                return t && t.length ? n(t, i(e, 2), o) : void 0
            }
        },
        88306: function(t, e, r) {
            var n = r(83369);

            function o(t, e) {
                if ("function" != typeof t || null != e && "function" != typeof e) throw TypeError("Expected a function");
                var r = function() {
                    var n = arguments,
                        o = e ? e.apply(this, n) : n[0],
                        i = r.cache;
                    if (i.has(o)) return i.get(o);
                    var a = t.apply(this, n);
                    return r.cache = i.set(o, a) || i, a
                };
                return r.cache = new(o.Cache || n), r
            }
            o.Cache = n, t.exports = o
        },
        53632: function(t, e, r) {
            var n = r(56029),
                o = r(70433),
                i = r(6557);
            t.exports = function(t) {
                return t && t.length ? n(t, i, o) : void 0
            }
        },
        22762: function(t, e, r) {
            var n = r(56029),
                o = r(67206),
                i = r(70433);
            t.exports = function(t, e) {
                return t && t.length ? n(t, o(e, 2), i) : void 0
            }
        },
        50308: function(t) {
            t.exports = function() {}
        },
        7771: function(t, e, r) {
            var n = r(55639);
            t.exports = function() {
                return n.Date.now()
            }
        },
        39601: function(t, e, r) {
            var n = r(40371),
                o = r(79152),
                i = r(15403),
                a = r(40327);
            t.exports = function(t) {
                return i(t) ? n(a(t)) : o(t)
            }
        },
        96026: function(t, e, r) {
            var n = r(47445)();
            t.exports = n
        },
        27659: function(t, e, r) {
            var n = r(82908),
                o = r(67206),
                i = r(5076),
                a = r(1469),
                u = r(16612);
            t.exports = function(t, e, r) {
                var c = a(t) ? n : i;
                return r && u(t, e, r) && (e = void 0), c(t, o(e, 3))
            }
        },
        89734: function(t, e, r) {
            var n = r(21078),
                o = r(82689),
                i = r(5976),
                a = r(16612),
                u = i(function(t, e) {
                    if (null == t) return [];
                    var r = e.length;
                    return r > 1 && a(t, e[0], e[1]) ? e = [] : r > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]), o(t, n(e, 1), [])
                });
            t.exports = u
        },
        70479: function(t) {
            t.exports = function() {
                return []
            }
        },
        95062: function(t) {
            t.exports = function() {
                return !1
            }
        },
        23493: function(t, e, r) {
            var n = r(23279),
                o = r(13218);
            t.exports = function(t, e, r) {
                var i = !0,
                    a = !0;
                if ("function" != typeof t) throw TypeError("Expected a function");
                return o(r) && (i = "leading" in r ? !!r.leading : i, a = "trailing" in r ? !!r.trailing : a), n(t, e, {
                    leading: i,
                    maxWait: e,
                    trailing: a
                })
            }
        },
        18601: function(t, e, r) {
            var n = r(14841),
                o = 1 / 0;
            t.exports = function(t) {
                return t ? (t = n(t)) === o || t === -o ? (t < 0 ? -1 : 1) * 17976931348623157e292 : t == t ? t : 0 : 0 === t ? t : 0
            }
        },
        40554: function(t, e, r) {
            var n = r(18601);
            t.exports = function(t) {
                var e = n(t),
                    r = e % 1;
                return e == e ? r ? e - r : e : 0
            }
        },
        14841: function(t, e, r) {
            var n = r(27561),
                o = r(13218),
                i = r(33448),
                a = 0 / 0,
                u = /^[-+]0x[0-9a-f]+$/i,
                c = /^0b[01]+$/i,
                l = /^0o[0-7]+$/i,
                s = parseInt;
            t.exports = function(t) {
                if ("number" == typeof t) return t;
                if (i(t)) return a;
                if (o(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = o(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = n(t);
                var r = c.test(t);
                return r || l.test(t) ? s(t.slice(2), r ? 2 : 8) : u.test(t) ? a : +t
            }
        },
        45578: function(t, e, r) {
            var n = r(67206),
                o = r(45652);
            t.exports = function(t, e) {
                return t && t.length ? o(t, n(e, 2)) : []
            }
        },
        58724: function(t) {
            "use strict";
            var e = Object.prototype.hasOwnProperty,
                r = "~";

            function n() {}

            function o(t, e, r) {
                this.fn = t, this.context = e, this.once = r || !1
            }

            function i(t, e, n, i, a) {
                if ("function" != typeof n) throw TypeError("The listener must be a function");
                var u = new o(n, i || t, a),
                    c = r ? r + e : e;
                return t._events[c] ? t._events[c].fn ? t._events[c] = [t._events[c], u] : t._events[c].push(u) : (t._events[c] = u, t._eventsCount++), t
            }

            function a(t, e) {
                0 == --t._eventsCount ? t._events = new n : delete t._events[e]
            }

            function u() {
                this._events = new n, this._eventsCount = 0
            }
            Object.create && (n.prototype = Object.create(null), new n().__proto__ || (r = !1)), u.prototype.eventNames = function() {
                var t, n, o = [];
                if (0 === this._eventsCount) return o;
                for (n in t = this._events) e.call(t, n) && o.push(r ? n.slice(1) : n);
                return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(t)) : o
            }, u.prototype.listeners = function(t) {
                var e = r ? r + t : t,
                    n = this._events[e];
                if (!n) return [];
                if (n.fn) return [n.fn];
                for (var o = 0, i = n.length, a = Array(i); o < i; o++) a[o] = n[o].fn;
                return a
            }, u.prototype.listenerCount = function(t) {
                var e = r ? r + t : t,
                    n = this._events[e];
                return n ? n.fn ? 1 : n.length : 0
            }, u.prototype.emit = function(t, e, n, o, i, a) {
                var u = r ? r + t : t;
                if (!this._events[u]) return !1;
                var c, l, s = this._events[u],
                    f = arguments.length;
                if (s.fn) {
                    switch (s.once && this.removeListener(t, s.fn, void 0, !0), f) {
                        case 1:
                            return s.fn.call(s.context), !0;
                        case 2:
                            return s.fn.call(s.context, e), !0;
                        case 3:
                            return s.fn.call(s.context, e, n), !0;
                        case 4:
                            return s.fn.call(s.context, e, n, o), !0;
                        case 5:
                            return s.fn.call(s.context, e, n, o, i), !0;
                        case 6:
                            return s.fn.call(s.context, e, n, o, i, a), !0
                    }
                    for (l = 1, c = Array(f - 1); l < f; l++) c[l - 1] = arguments[l];
                    s.fn.apply(s.context, c)
                } else {
                    var p, h = s.length;
                    for (l = 0; l < h; l++) switch (s[l].once && this.removeListener(t, s[l].fn, void 0, !0), f) {
                        case 1:
                            s[l].fn.call(s[l].context);
                            break;
                        case 2:
                            s[l].fn.call(s[l].context, e);
                            break;
                        case 3:
                            s[l].fn.call(s[l].context, e, n);
                            break;
                        case 4:
                            s[l].fn.call(s[l].context, e, n, o);
                            break;
                        default:
                            if (!c)
                                for (p = 1, c = Array(f - 1); p < f; p++) c[p - 1] = arguments[p];
                            s[l].fn.apply(s[l].context, c)
                    }
                }
                return !0
            }, u.prototype.on = function(t, e, r) {
                return i(this, t, e, r, !1)
            }, u.prototype.once = function(t, e, r) {
                return i(this, t, e, r, !0)
            }, u.prototype.removeListener = function(t, e, n, o) {
                var i = r ? r + t : t;
                if (!this._events[i]) return this;
                if (!e) return a(this, i), this;
                var u = this._events[i];
                if (u.fn) u.fn !== e || o && !u.once || n && u.context !== n || a(this, i);
                else {
                    for (var c = 0, l = [], s = u.length; c < s; c++)(u[c].fn !== e || o && !u[c].once || n && u[c].context !== n) && l.push(u[c]);
                    l.length ? this._events[i] = 1 === l.length ? l[0] : l : a(this, i)
                }
                return this
            }, u.prototype.removeAllListeners = function(t) {
                var e;
                return t ? (e = r ? r + t : t, this._events[e] && a(this, e)) : (this._events = new n, this._eventsCount = 0), this
            }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, t.exports = u
        },
        69921: function(t, e) {
            "use strict";
            /** @license React v16.13.1
             * react-is.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = "function" == typeof Symbol && Symbol.for,
                n = r ? Symbol.for("react.element") : 60103,
                o = r ? Symbol.for("react.portal") : 60106,
                i = r ? Symbol.for("react.fragment") : 60107,
                a = r ? Symbol.for("react.strict_mode") : 60108,
                u = r ? Symbol.for("react.profiler") : 60114,
                c = r ? Symbol.for("react.provider") : 60109,
                l = r ? Symbol.for("react.context") : 60110,
                s = r ? Symbol.for("react.async_mode") : 60111,
                f = r ? Symbol.for("react.concurrent_mode") : 60111,
                p = r ? Symbol.for("react.forward_ref") : 60112,
                h = r ? Symbol.for("react.suspense") : 60113,
                d = r ? Symbol.for("react.suspense_list") : 60120,
                y = r ? Symbol.for("react.memo") : 60115,
                v = r ? Symbol.for("react.lazy") : 60116,
                m = r ? Symbol.for("react.block") : 60121,
                b = r ? Symbol.for("react.fundamental") : 60117,
                g = r ? Symbol.for("react.responder") : 60118,
                x = r ? Symbol.for("react.scope") : 60119;

            function O(t) {
                if ("object" == typeof t && null !== t) {
                    var e = t.$$typeof;
                    switch (e) {
                        case n:
                            switch (t = t.type) {
                                case s:
                                case f:
                                case i:
                                case u:
                                case a:
                                case h:
                                    return t;
                                default:
                                    switch (t = t && t.$$typeof) {
                                        case l:
                                        case p:
                                        case v:
                                        case y:
                                        case c:
                                            return t;
                                        default:
                                            return e
                                    }
                            }
                        case o:
                            return e
                    }
                }
            }

            function w(t) {
                return O(t) === f
            }
            e.AsyncMode = s, e.ConcurrentMode = f, e.ContextConsumer = l, e.ContextProvider = c, e.Element = n, e.ForwardRef = p, e.Fragment = i, e.Lazy = v, e.Memo = y, e.Portal = o, e.Profiler = u, e.StrictMode = a, e.Suspense = h, e.isAsyncMode = function(t) {
                return w(t) || O(t) === s
            }, e.isConcurrentMode = w, e.isContextConsumer = function(t) {
                return O(t) === l
            }, e.isContextProvider = function(t) {
                return O(t) === c
            }, e.isElement = function(t) {
                return "object" == typeof t && null !== t && t.$$typeof === n
            }, e.isForwardRef = function(t) {
                return O(t) === p
            }, e.isFragment = function(t) {
                return O(t) === i
            }, e.isLazy = function(t) {
                return O(t) === v
            }, e.isMemo = function(t) {
                return O(t) === y
            }, e.isPortal = function(t) {
                return O(t) === o
            }, e.isProfiler = function(t) {
                return O(t) === u
            }, e.isStrictMode = function(t) {
                return O(t) === a
            }, e.isSuspense = function(t) {
                return O(t) === h
            }, e.isValidElementType = function(t) {
                return "string" == typeof t || "function" == typeof t || t === i || t === f || t === u || t === a || t === h || t === d || "object" == typeof t && null !== t && (t.$$typeof === v || t.$$typeof === y || t.$$typeof === c || t.$$typeof === l || t.$$typeof === p || t.$$typeof === b || t.$$typeof === g || t.$$typeof === x || t.$$typeof === m)
            }, e.typeOf = O
        },
        59864: function(t, e, r) {
            "use strict";
            t.exports = r(69921)
        },
        8961: function(t, e, r) {
            "use strict";
            r.d(e, {
                Y: function() {
                    return hX
                }
            });
            var n, o, i, a, u, c, l, s, f, p, h, d, y, v, m, b, g, x, O, w, j, S = {};
            r.r(S), r.d(S, {
                scaleBand: function() {
                    return nY
                },
                scaleDiverging: function() {
                    return function t() {
                        var e = iN(uG()(im));
                        return e.copy = function() {
                            return uZ(e, t())
                        }, nW.apply(e, arguments)
                    }
                },
                scaleDivergingLog: function() {
                    return function t() {
                        var e = iq(uG()).domain([.1, 1, 10]);
                        return e.copy = function() {
                            return uZ(e, t()).base(e.base())
                        }, nW.apply(e, arguments)
                    }
                },
                scaleDivergingPow: function() {
                    return uJ
                },
                scaleDivergingSqrt: function() {
                    return uQ
                },
                scaleDivergingSymlog: function() {
                    return function t() {
                        var e = iV(uG());
                        return e.copy = function() {
                            return uZ(e, t()).constant(e.constant())
                        }, nW.apply(e, arguments)
                    }
                },
                scaleIdentity: function() {
                    return function t(e) {
                        var r;

                        function n(t) {
                            return null == t || isNaN(t = +t) ? r : t
                        }
                        return n.invert = n, n.domain = n.range = function(t) {
                            return arguments.length ? (e = Array.from(t, iy), n) : e.slice()
                        }, n.unknown = function(t) {
                            return arguments.length ? (r = t, n) : r
                        }, n.copy = function() {
                            return t(e).unknown(r)
                        }, e = arguments.length ? Array.from(e, iy) : [0, 1], iN(n)
                    }
                },
                scaleImplicit: function() {
                    return nV
                },
                scaleLinear: function() {
                    return iB
                },
                scaleLog: function() {
                    return function t() {
                        let e = iq(iw()).domain([1, 10]);
                        return e.copy = () => iO(e, t()).base(e.base()), nF.apply(e, arguments), e
                    }
                },
                scaleOrdinal: function() {
                    return nZ
                },
                scalePoint: function() {
                    return nK
                },
                scalePow: function() {
                    return iJ
                },
                scaleQuantile: function() {
                    return function t() {
                        var e, r = [],
                            n = [],
                            o = [];

                        function i() {
                            var t = 0,
                                e = Math.max(1, n.length);
                            for (o = Array(e - 1); ++t < e;) o[t - 1] = function(t, e, r = oC) {
                                if (!(!(n = t.length) || isNaN(e = +e))) {
                                    if (e <= 0 || n < 2) return +r(t[0], 0, t);
                                    if (e >= 1) return +r(t[n - 1], n - 1, t);
                                    var n, o = (n - 1) * e,
                                        i = Math.floor(o),
                                        a = +r(t[i], i, t);
                                    return a + (+r(t[i + 1], i + 1, t) - a) * (o - i)
                                }
                            }(r, t / e);
                            return a
                        }

                        function a(t) {
                            return null == t || isNaN(t = +t) ? e : n[oD(o, t)]
                        }
                        return a.invertExtent = function(t) {
                            var e = n.indexOf(t);
                            return e < 0 ? [NaN, NaN] : [e > 0 ? o[e - 1] : r[0], e < o.length ? o[e] : r[r.length - 1]]
                        }, a.domain = function(t) {
                            if (!arguments.length) return r.slice();
                            for (let e of (r = [], t)) null == e || isNaN(e = +e) || r.push(e);
                            return r.sort(ok), i()
                        }, a.range = function(t) {
                            return arguments.length ? (n = Array.from(t), i()) : n.slice()
                        }, a.unknown = function(t) {
                            return arguments.length ? (e = t, a) : e
                        }, a.quantiles = function() {
                            return o.slice()
                        }, a.copy = function() {
                            return t().domain(r).range(n).unknown(e)
                        }, nF.apply(a, arguments)
                    }
                },
                scaleQuantize: function() {
                    return function t() {
                        var e, r = 0,
                            n = 1,
                            o = 1,
                            i = [.5],
                            a = [0, 1];

                        function u(t) {
                            return null != t && t <= t ? a[oD(i, t, 0, o)] : e
                        }

                        function c() {
                            var t = -1;
                            for (i = Array(o); ++t < o;) i[t] = ((t + 1) * n - (t - o) * r) / (o + 1);
                            return u
                        }
                        return u.domain = function(t) {
                            return arguments.length ? ([r, n] = t, r = +r, n = +n, c()) : [r, n]
                        }, u.range = function(t) {
                            return arguments.length ? (o = (a = Array.from(t)).length - 1, c()) : a.slice()
                        }, u.invertExtent = function(t) {
                            var e = a.indexOf(t);
                            return e < 0 ? [NaN, NaN] : e < 1 ? [r, i[0]] : e >= o ? [i[o - 1], n] : [i[e - 1], i[e]]
                        }, u.unknown = function(t) {
                            return arguments.length && (e = t), u
                        }, u.thresholds = function() {
                            return i.slice()
                        }, u.copy = function() {
                            return t().domain([r, n]).range(a).unknown(e)
                        }, nF.apply(iN(u), arguments)
                    }
                },
                scaleRadial: function() {
                    return function t() {
                        var e, r = ij(),
                            n = [0, 1],
                            o = !1;

                        function i(t) {
                            var n, i = Math.sign(n = r(t)) * Math.sqrt(Math.abs(n));
                            return isNaN(i) ? e : o ? Math.round(i) : i
                        }
                        return i.invert = function(t) {
                            return r.invert(i0(t))
                        }, i.domain = function(t) {
                            return arguments.length ? (r.domain(t), i) : r.domain()
                        }, i.range = function(t) {
                            return arguments.length ? (r.range((n = Array.from(t, iy)).map(i0)), i) : n.slice()
                        }, i.rangeRound = function(t) {
                            return i.range(t).round(!0)
                        }, i.round = function(t) {
                            return arguments.length ? (o = !!t, i) : o
                        }, i.clamp = function(t) {
                            return arguments.length ? (r.clamp(t), i) : r.clamp()
                        }, i.unknown = function(t) {
                            return arguments.length ? (e = t, i) : e
                        }, i.copy = function() {
                            return t(r.domain(), n).round(o).clamp(r.clamp()).unknown(e)
                        }, nF.apply(i, arguments), iN(i)
                    }
                },
                scaleSequential: function() {
                    return function t() {
                        var e = iN(uV()(im));
                        return e.copy = function() {
                            return uZ(e, t())
                        }, nW.apply(e, arguments)
                    }
                },
                scaleSequentialLog: function() {
                    return function t() {
                        var e = iq(uV()).domain([1, 10]);
                        return e.copy = function() {
                            return uZ(e, t()).base(e.base())
                        }, nW.apply(e, arguments)
                    }
                },
                scaleSequentialPow: function() {
                    return uY
                },
                scaleSequentialQuantile: function() {
                    return function t() {
                        var e = [],
                            r = im;

                        function n(t) {
                            if (null != t && !isNaN(t = +t)) return r((oD(e, t, 1) - 1) / (e.length - 1))
                        }
                        return n.domain = function(t) {
                            if (!arguments.length) return e.slice();
                            for (let r of (e = [], t)) null == r || isNaN(r = +r) || e.push(r);
                            return e.sort(ok), n
                        }, n.interpolator = function(t) {
                            return arguments.length ? (r = t, n) : r
                        }, n.range = function() {
                            return e.map((t, n) => r(n / (e.length - 1)))
                        }, n.quantiles = function(t) {
                            return Array.from({
                                length: t + 1
                            }, (r, n) => (function(t, e, r) {
                                if (!(!(n = (t = Float64Array.from(function*(t, e) {
                                        if (void 0 === e)
                                            for (let e of t) null != e && (e = +e) >= e && (yield e);
                                        else {
                                            let r = -1;
                                            for (let n of t) null != (n = e(n, ++r, t)) && (n = +n) >= n && (yield n)
                                        }
                                    }(t, void 0))).length) || isNaN(e = +e))) {
                                    if (e <= 0 || n < 2) return i2(t);
                                    if (e >= 1) return i1(t);
                                    var n, o = (n - 1) * e,
                                        i = Math.floor(o),
                                        a = i1((function t(e, r, n = 0, o = 1 / 0, i) {
                                            if (r = Math.floor(r), n = Math.floor(Math.max(0, n)), o = Math.floor(Math.min(e.length - 1, o)), !(n <= r && r <= o)) return e;
                                            for (i = void 0 === i ? i6 : function(t = ok) {
                                                    if (t === ok) return i6;
                                                    if ("function" != typeof t) throw TypeError("compare is not a function");
                                                    return (e, r) => {
                                                        let n = t(e, r);
                                                        return n || 0 === n ? n : (0 === t(r, r)) - (0 === t(e, e))
                                                    }
                                                }(i); o > n;) {
                                                if (o - n > 600) {
                                                    let a = o - n + 1,
                                                        u = r - n + 1,
                                                        c = Math.log(a),
                                                        l = .5 * Math.exp(2 * c / 3),
                                                        s = .5 * Math.sqrt(c * l * (a - l) / a) * (u - a / 2 < 0 ? -1 : 1),
                                                        f = Math.max(n, Math.floor(r - u * l / a + s)),
                                                        p = Math.min(o, Math.floor(r + (a - u) * l / a + s));
                                                    t(e, r, f, p, i)
                                                }
                                                let a = e[r],
                                                    u = n,
                                                    c = o;
                                                for (i3(e, n, r), i(e[o], a) > 0 && i3(e, n, o); u < c;) {
                                                    for (i3(e, u, c), ++u, --c; 0 > i(e[u], a);) ++u;
                                                    for (; i(e[c], a) > 0;) --c
                                                }
                                                0 === i(e[n], a) ? i3(e, n, c) : i3(e, ++c, o), c <= r && (n = c + 1), r <= c && (o = c - 1)
                                            }
                                            return e
                                        })(t, i).subarray(0, i + 1));
                                    return a + (i2(t.subarray(i + 1)) - a) * (o - i)
                                }
                            })(e, n / t))
                        }, n.copy = function() {
                            return t(r).domain(e)
                        }, nW.apply(n, arguments)
                    }
                },
                scaleSequentialSqrt: function() {
                    return uK
                },
                scaleSequentialSymlog: function() {
                    return function t() {
                        var e = iV(uV());
                        return e.copy = function() {
                            return uZ(e, t()).constant(e.constant())
                        }, nW.apply(e, arguments)
                    }
                },
                scaleSqrt: function() {
                    return iQ
                },
                scaleSymlog: function() {
                    return function t() {
                        var e = iV(iw());
                        return e.copy = function() {
                            return iO(e, t()).constant(e.constant())
                        }, nF.apply(e, arguments)
                    }
                },
                scaleThreshold: function() {
                    return function t() {
                        var e, r = [.5],
                            n = [0, 1],
                            o = 1;

                        function i(t) {
                            return null != t && t <= t ? n[oD(r, t, 0, o)] : e
                        }
                        return i.domain = function(t) {
                            return arguments.length ? (o = Math.min((r = Array.from(t)).length, n.length - 1), i) : r.slice()
                        }, i.range = function(t) {
                            return arguments.length ? (n = Array.from(t), o = Math.min(r.length, n.length - 1), i) : n.slice()
                        }, i.invertExtent = function(t) {
                            var e = n.indexOf(t);
                            return [r[e - 1], r[e]]
                        }, i.unknown = function(t) {
                            return arguments.length ? (e = t, i) : e
                        }, i.copy = function() {
                            return t().domain(r).range(n).unknown(e)
                        }, nF.apply(i, arguments)
                    }
                },
                scaleTime: function() {
                    return uX
                },
                scaleUtc: function() {
                    return uH
                },
                tickFormat: function() {
                    return iD
                }
            });
            var A = r(85893),
                P = function(t) {
                    return null
                };
            P.displayName = "Cell";
            var E = r(90512),
                k = r(67294),
                M = r(23493),
                _ = r.n(M),
                T = r(59864),
                C = r(47037),
                I = r.n(C),
                D = r(7654),
                N = r.n(D),
                B = r(27361),
                L = r.n(B),
                R = r(81763),
                $ = r.n(R),
                z = function(t) {
                    return 0 === t ? 0 : t > 0 ? 1 : -1
                },
                U = function(t) {
                    return I()(t) && t.indexOf("%") === t.length - 1
                },
                F = function(t) {
                    return $()(t) && !N()(t)
                },
                W = function(t) {
                    return F(t) || I()(t)
                },
                q = 0,
                X = function(t) {
                    var e = ++q;
                    return "".concat(t || "").concat(e)
                },
                H = function(t, e) {
                    var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (!F(t) && !I()(t)) return n;
                    if (U(t)) {
                        var i = t.indexOf("%");
                        r = e * parseFloat(t.slice(0, i)) / 100
                    } else r = +t;
                    return N()(r) && (r = n), o && r > e && (r = e), r
                },
                V = function(t) {
                    if (!t) return null;
                    var e = Object.keys(t);
                    return e && e.length ? t[e[0]] : null
                },
                Z = function(t) {
                    if (!Array.isArray(t)) return !1;
                    for (var e = t.length, r = {}, n = 0; n < e; n++) {
                        if (r[t[n]]) return !0;
                        r[t[n]] = !0
                    }
                    return !1
                },
                Y = function(t, e) {
                    return F(t) && F(e) ? function(r) {
                        return t + r * (e - t)
                    } : function() {
                        return e
                    }
                };

            function K(t, e, r) {
                return t && t.length ? t.find(function(t) {
                    return t && ("function" == typeof e ? e(t) : L()(t, e)) === r
                }) : null
            }
            var G = function(t, e) {
                    for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) n[o - 2] = arguments[o]
                },
                J = r(14293),
                Q = r.n(J),
                tt = r(23560),
                te = r.n(tt),
                tr = r(13218),
                tn = r.n(tr);

            function to(t, e) {
                for (var r in t)
                    if (({}).hasOwnProperty.call(t, r) && (!({}).hasOwnProperty.call(e, r) || t[r] !== e[r])) return !1;
                for (var n in e)
                    if (({}).hasOwnProperty.call(e, n) && !({}).hasOwnProperty.call(t, n)) return !1;
                return !0
            }

            function ti(t) {
                return (ti = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var ta = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
                tu = ["points", "pathLength"],
                tc = {
                    svg: ["viewBox", "children"],
                    polygon: tu,
                    polyline: tu
                },
                tl = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
                ts = function(t, e) {
                    if (!t || "function" == typeof t || "boolean" == typeof t) return null;
                    var r = t;
                    if ((0, k.isValidElement)(t) && (r = t.props), !tn()(r)) return null;
                    var n = {};
                    return Object.keys(r).forEach(function(t) {
                        tl.includes(t) && (n[t] = e || function(e) {
                            return r[t](r, e)
                        })
                    }), n
                },
                tf = function(t, e, r) {
                    if (!tn()(t) || "object" !== ti(t)) return null;
                    var n = null;
                    return Object.keys(t).forEach(function(o) {
                        var i = t[o];
                        tl.includes(o) && "function" == typeof i && (n || (n = {}), n[o] = function(t) {
                            return i(e, r, t), null
                        })
                    }), n
                },
                tp = ["children"],
                th = ["children"];

            function td(t, e) {
                if (null == t) return {};
                var r, n, o = function(t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }
            var ty = {
                    click: "onClick",
                    mousedown: "onMouseDown",
                    mouseup: "onMouseUp",
                    mouseover: "onMouseOver",
                    mousemove: "onMouseMove",
                    mouseout: "onMouseOut",
                    mouseenter: "onMouseEnter",
                    mouseleave: "onMouseLeave",
                    touchcancel: "onTouchCancel",
                    touchend: "onTouchEnd",
                    touchmove: "onTouchMove",
                    touchstart: "onTouchStart"
                },
                tv = function(t) {
                    return "string" == typeof t ? t : t ? t.displayName || t.name || "Component" : ""
                },
                tm = null,
                tb = null,
                tg = function t(e) {
                    if (e === tm && Array.isArray(tb)) return tb;
                    var r = [];
                    return k.Children.forEach(e, function(e) {
                        Q()(e) || ((0, T.isFragment)(e) ? r = r.concat(t(e.props.children)) : r.push(e))
                    }), tb = r, tm = e, r
                };

            function tx(t, e) {
                var r = [],
                    n = [];
                return n = Array.isArray(e) ? e.map(function(t) {
                    return tv(t)
                }) : [tv(e)], tg(t).forEach(function(t) {
                    var e = L()(t, "type.displayName") || L()(t, "type.name"); - 1 !== n.indexOf(e) && r.push(t)
                }), r
            }

            function tO(t, e) {
                var r = tx(t, e);
                return r && r[0]
            }
            var tw = function(t) {
                    if (!t || !t.props) return !1;
                    var e = t.props,
                        r = e.width,
                        n = e.height;
                    return !!F(r) && !(r <= 0) && !!F(n) && !(n <= 0)
                },
                tj = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
                tS = function(t, e, r, n) {
                    var o, i = null !== (o = null == tc ? void 0 : tc[n]) && void 0 !== o ? o : [];
                    return !te()(t) && (n && i.includes(e) || ta.includes(e)) || r && tl.includes(e)
                },
                tA = function(t, e, r) {
                    if (!t || "function" == typeof t || "boolean" == typeof t) return null;
                    var n = t;
                    if ((0, k.isValidElement)(t) && (n = t.props), !tn()(n)) return null;
                    var o = {};
                    return Object.keys(n).forEach(function(t) {
                        var i;
                        tS(null === (i = n) || void 0 === i ? void 0 : i[t], t, e, r) && (o[t] = n[t])
                    }), o
                },
                tP = function t(e, r) {
                    if (e === r) return !0;
                    var n = k.Children.count(e);
                    if (n !== k.Children.count(r)) return !1;
                    if (0 === n) return !0;
                    if (1 === n) return tE(Array.isArray(e) ? e[0] : e, Array.isArray(r) ? r[0] : r);
                    for (var o = 0; o < n; o++) {
                        var i = e[o],
                            a = r[o];
                        if (Array.isArray(i) || Array.isArray(a)) {
                            if (!t(i, a)) return !1
                        } else if (!tE(i, a)) return !1
                    }
                    return !0
                },
                tE = function(t, e) {
                    if (Q()(t) && Q()(e)) return !0;
                    if (!Q()(t) && !Q()(e)) {
                        var r = t.props || {},
                            n = r.children,
                            o = td(r, tp),
                            i = e.props || {},
                            a = i.children,
                            u = td(i, th);
                        if (n && a) return to(o, u) && tP(n, a);
                        if (!n && !a) return to(o, u)
                    }
                    return !1
                },
                tk = function(t, e) {
                    var r = [],
                        n = {};
                    return tg(t).forEach(function(t, o) {
                        if (t && t.type && I()(t.type) && tj.indexOf(t.type) >= 0) r.push(t);
                        else if (t) {
                            var i = tv(t.type),
                                a = e[i] || {},
                                u = a.handler,
                                c = a.once;
                            if (u && (!c || !n[i])) {
                                var l = u(t, i, o);
                                r.push(l), n[i] = !0
                            }
                        }
                    }), r
                },
                tM = function(t) {
                    var e = t && t.type;
                    return e && ty[e] ? ty[e] : null
                };

            function t_(t) {
                return (t_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function tT(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tC(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? tT(Object(r), !0).forEach(function(e) {
                        var n, o;
                        n = e, o = r[e], (n = function(t) {
                            var e = function(t, e) {
                                if ("object" != t_(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != t_(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == t_(e) ? e : String(e)
                        }(n)) in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : tT(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function tI(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var tD = (0, k.forwardRef)(function(t, e) {
                    var r, n = t.aspect,
                        o = t.initialDimension,
                        i = void 0 === o ? {
                            width: -1,
                            height: -1
                        } : o,
                        a = t.width,
                        u = void 0 === a ? "100%" : a,
                        c = t.height,
                        l = void 0 === c ? "100%" : c,
                        s = t.minWidth,
                        f = void 0 === s ? 0 : s,
                        p = t.minHeight,
                        h = t.maxHeight,
                        d = t.children,
                        y = t.debounce,
                        v = void 0 === y ? 0 : y,
                        m = t.id,
                        b = t.className,
                        g = t.onResize,
                        x = t.style,
                        O = (0, k.useRef)(null),
                        w = (0, k.useRef)();
                    w.current = g, (0, k.useImperativeHandle)(e, function() {
                        return Object.defineProperty(O.current, "current", {
                            get: function() {
                                return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), O.current
                            },
                            configurable: !0
                        })
                    });
                    var j = function(t) {
                            if (Array.isArray(t)) return t
                        }(r = (0, k.useState)({
                            containerWidth: i.width,
                            containerHeight: i.height
                        })) || function(t, e) {
                            var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != r) {
                                var n, o, i, a, u = [],
                                    c = !0,
                                    l = !1;
                                try {
                                    for (i = (r = r.call(t)).next; !(c = (n = i.call(r)).done) && (u.push(n.value), 2 !== u.length); c = !0);
                                } catch (t) {
                                    l = !0, o = t
                                } finally {
                                    try {
                                        if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return
                                    } finally {
                                        if (l) throw o
                                    }
                                }
                                return u
                            }
                        }(r, 2) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return tI(t, 2);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tI(t, 2)
                            }
                        }(r, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(),
                        S = j[0],
                        A = j[1],
                        P = (0, k.useCallback)(function(t, e) {
                            A(function(r) {
                                var n = Math.round(t),
                                    o = Math.round(e);
                                return r.containerWidth === n && r.containerHeight === o ? r : {
                                    containerWidth: n,
                                    containerHeight: o
                                }
                            })
                        }, []);
                    (0, k.useEffect)(function() {
                        var t = function(t) {
                            var e, r = t[0].contentRect,
                                n = r.width,
                                o = r.height;
                            P(n, o), null === (e = w.current) || void 0 === e || e.call(w, n, o)
                        };
                        v > 0 && (t = _()(t, v, {
                            trailing: !0,
                            leading: !1
                        }));
                        var e = new ResizeObserver(t),
                            r = O.current.getBoundingClientRect();
                        return P(r.width, r.height), e.observe(O.current),
                            function() {
                                e.disconnect()
                            }
                    }, [P, v]);
                    var M = (0, k.useMemo)(function() {
                        var t = S.containerWidth,
                            e = S.containerHeight;
                        if (t < 0 || e < 0) return null;
                        G(U(u) || U(l), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", u, l), G(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
                        var r = U(u) ? t : u,
                            o = U(l) ? e : l;
                        n && n > 0 && (r ? o = r / n : o && (r = o * n), h && o > h && (o = h)), G(r > 0 || o > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", r, o, u, l, f, p, n);
                        var i = !Array.isArray(d) && (0, T.isElement)(d) && tv(d.type).endsWith("Chart");
                        return k.Children.map(d, function(t) {
                            return (0, T.isElement)(t) ? (0, k.cloneElement)(t, tC({
                                width: r,
                                height: o
                            }, i ? {
                                style: tC({
                                    height: "100%",
                                    width: "100%",
                                    maxHeight: o,
                                    maxWidth: r
                                }, t.props.style)
                            } : {})) : t
                        })
                    }, [n, d, l, h, p, f, S, u]);
                    return k.createElement("div", {
                        id: m ? "".concat(m) : void 0,
                        className: (0, E.Z)("recharts-responsive-container", b),
                        style: tC(tC({}, void 0 === x ? {} : x), {}, {
                            width: u,
                            height: l,
                            minWidth: f,
                            minHeight: p,
                            maxHeight: h
                        }),
                        ref: O
                    }, M)
                }),
                tN = r(96026),
                tB = r.n(tN),
                tL = r(89734),
                tR = r.n(tL);

            function t$(t, e) {
                if (!t) throw Error("Invariant failed")
            }
            var tz = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

            function tU() {
                return (tU = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function tF(t) {
                var e = t.children,
                    r = t.width,
                    n = t.height,
                    o = t.viewBox,
                    i = t.className,
                    a = t.style,
                    u = t.title,
                    c = t.desc,
                    l = function(t, e) {
                        if (null == t) return {};
                        var r, n, o = function(t, e) {
                            if (null == t) return {};
                            var r, n, o = {},
                                i = Object.keys(t);
                            for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                        }
                        return o
                    }(t, tz),
                    s = o || {
                        width: r,
                        height: n,
                        x: 0,
                        y: 0
                    },
                    f = (0, E.Z)("recharts-surface", i);
                return k.createElement("svg", tU({}, tA(l, !0, "svg"), {
                    className: f,
                    width: r,
                    height: n,
                    style: a,
                    viewBox: "".concat(s.x, " ").concat(s.y, " ").concat(s.width, " ").concat(s.height)
                }), k.createElement("title", null, u), k.createElement("desc", null, c), e)
            }
            var tW = ["children", "className"];

            function tq() {
                return (tq = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }
            var tX = k.forwardRef(function(t, e) {
                var r = t.children,
                    n = t.className,
                    o = function(t, e) {
                        if (null == t) return {};
                        var r, n, o = function(t, e) {
                            if (null == t) return {};
                            var r, n, o = {},
                                i = Object.keys(t);
                            for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                        }
                        return o
                    }(t, tW),
                    i = (0, E.Z)("recharts-layer", n);
                return k.createElement("g", tq({
                    className: i
                }, tA(o, !0), {
                    ref: e
                }), r)
            });

            function tH(t) {
                return (tH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function tV() {
                return (tV = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function tZ(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function tY(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tK(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? tY(Object(r), !0).forEach(function(e) {
                        var n, o;
                        n = e, o = r[e], (n = function(t) {
                            var e = function(t, e) {
                                if ("object" != tH(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != tH(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == tH(e) ? e : String(e)
                        }(n)) in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : tY(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function tG(t) {
                return Array.isArray(t) && W(t[0]) && W(t[1]) ? t.join(" ~ ") : t
            }
            var tJ = function(t) {
                var e = t.separator,
                    r = void 0 === e ? " : " : e,
                    n = t.contentStyle,
                    o = t.itemStyle,
                    i = void 0 === o ? {} : o,
                    a = t.labelStyle,
                    u = t.payload,
                    c = t.formatter,
                    l = t.itemSorter,
                    s = t.wrapperClassName,
                    f = t.labelClassName,
                    p = t.label,
                    h = t.labelFormatter,
                    d = t.accessibilityLayer,
                    y = tK({
                        margin: 0,
                        padding: 10,
                        backgroundColor: "#fff",
                        border: "1px solid #ccc",
                        whiteSpace: "nowrap"
                    }, void 0 === n ? {} : n),
                    v = tK({
                        margin: 0
                    }, void 0 === a ? {} : a),
                    m = !Q()(p),
                    b = m ? p : "",
                    g = (0, E.Z)("recharts-default-tooltip", s),
                    x = (0, E.Z)("recharts-tooltip-label", f);
                return m && h && null != u && (b = h(p, u)), k.createElement("div", tV({
                    className: g,
                    style: y
                }, void 0 !== d && d ? {
                    role: "status",
                    "aria-live": "assertive"
                } : {}), k.createElement("p", {
                    className: x,
                    style: v
                }, k.isValidElement(b) ? b : "".concat(b)), function() {
                    if (u && u.length) {
                        var t = (l ? tR()(u, l) : u).map(function(t, e) {
                            if ("none" === t.type) return null;
                            var n = tK({
                                    display: "block",
                                    paddingTop: 4,
                                    paddingBottom: 4,
                                    color: t.color || "#000"
                                }, i),
                                o = t.formatter || c || tG,
                                a = t.value,
                                l = t.name,
                                s = a,
                                f = l;
                            if (o && null != s && null != f) {
                                var p = o(a, l, t, e, u);
                                if (Array.isArray(p)) {
                                    var h = function(t) {
                                        if (Array.isArray(t)) return t
                                    }(p) || function(t, e) {
                                        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                        if (null != r) {
                                            var n, o, i, a, u = [],
                                                c = !0,
                                                l = !1;
                                            try {
                                                for (i = (r = r.call(t)).next; !(c = (n = i.call(r)).done) && (u.push(n.value), 2 !== u.length); c = !0);
                                            } catch (t) {
                                                l = !0, o = t
                                            } finally {
                                                try {
                                                    if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return
                                                } finally {
                                                    if (l) throw o
                                                }
                                            }
                                            return u
                                        }
                                    }(p, 2) || function(t, e) {
                                        if (t) {
                                            if ("string" == typeof t) return tZ(t, 2);
                                            var r = Object.prototype.toString.call(t).slice(8, -1);
                                            if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tZ(t, 2)
                                        }
                                    }(p, 2) || function() {
                                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }();
                                    s = h[0], f = h[1]
                                } else s = p
                            }
                            return k.createElement("li", {
                                className: "recharts-tooltip-item",
                                key: "tooltip-item-".concat(e),
                                style: n
                            }, W(f) ? k.createElement("span", {
                                className: "recharts-tooltip-item-name"
                            }, f) : null, W(f) ? k.createElement("span", {
                                className: "recharts-tooltip-item-separator"
                            }, r) : null, k.createElement("span", {
                                className: "recharts-tooltip-item-value"
                            }, s), k.createElement("span", {
                                className: "recharts-tooltip-item-unit"
                            }, t.unit || ""))
                        });
                        return k.createElement("ul", {
                            className: "recharts-tooltip-item-list",
                            style: {
                                padding: 0,
                                margin: 0
                            }
                        }, t)
                    }
                    return null
                }())
            };

            function tQ(t) {
                return (tQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function t0(t, e, r) {
                var n;
                return (n = function(t, e) {
                    if ("object" != tQ(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != tQ(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(e, "string"), (e = "symbol" == tQ(n) ? n : String(n)) in t) ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var t1 = "recharts-tooltip-wrapper",
                t2 = {
                    visibility: "hidden"
                };

            function t6(t) {
                var e = t.allowEscapeViewBox,
                    r = t.coordinate,
                    n = t.key,
                    o = t.offsetTopLeft,
                    i = t.position,
                    a = t.reverseDirection,
                    u = t.tooltipDimension,
                    c = t.viewBox,
                    l = t.viewBoxDimension;
                if (i && F(i[n])) return i[n];
                var s = r[n] - u - o,
                    f = r[n] + o;
                return e[n] ? a[n] ? s : f : a[n] ? s < c[n] ? Math.max(f, c[n]) : Math.max(s, c[n]) : f + u > c[n] + l ? Math.max(s, c[n]) : Math.max(f, c[n])
            }

            function t3(t) {
                return (t3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function t5(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function t4(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? t5(Object(r), !0).forEach(function(e) {
                        ee(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : t5(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function t7() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (t) {}
                return (t7 = function() {
                    return !!t
                })()
            }

            function t8(t) {
                return (t8 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function t9(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function et(t, e) {
                return (et = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function ee(t, e, r) {
                return (e = er(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function er(t) {
                var e = function(t, e) {
                    if ("object" != t3(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != t3(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == t3(e) ? e : String(e)
            }
            var en = function(t) {
                    var e;

                    function r() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, r);
                        for (var t, e, n, o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                        return e = r, n = [].concat(i), e = t8(e), t = function(t, e) {
                            if (e && ("object" === t3(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                            return t9(t)
                        }(this, t7() ? Reflect.construct(e, n || [], t8(this).constructor) : e.apply(this, n)), ee(t9(t), "state", {
                            dismissed: !1,
                            dismissedAtCoordinate: {
                                x: 0,
                                y: 0
                            },
                            lastBoundingBox: {
                                width: -1,
                                height: -1
                            }
                        }), ee(t9(t), "handleKeyDown", function(e) {
                            if ("Escape" === e.key) {
                                var r, n, o, i;
                                t.setState({
                                    dismissed: !0,
                                    dismissedAtCoordinate: {
                                        x: null !== (r = null === (n = t.props.coordinate) || void 0 === n ? void 0 : n.x) && void 0 !== r ? r : 0,
                                        y: null !== (o = null === (i = t.props.coordinate) || void 0 === i ? void 0 : i.y) && void 0 !== o ? o : 0
                                    }
                                })
                            }
                        }), t
                    }
                    return function(t, e) {
                            if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), e && et(t, e)
                        }(r, t), e = [{
                            key: "updateBBox",
                            value: function() {
                                if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                                    var t = this.wrapperNode.getBoundingClientRect();
                                    (Math.abs(t.width - this.state.lastBoundingBox.width) > 1 || Math.abs(t.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                                        lastBoundingBox: {
                                            width: t.width,
                                            height: t.height
                                        }
                                    })
                                } else(-1 !== this.state.lastBoundingBox.width || -1 !== this.state.lastBoundingBox.height) && this.setState({
                                    lastBoundingBox: {
                                        width: -1,
                                        height: -1
                                    }
                                })
                            }
                        }, {
                            key: "componentDidMount",
                            value: function() {
                                document.addEventListener("keydown", this.handleKeyDown), this.updateBBox()
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                document.removeEventListener("keydown", this.handleKeyDown)
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function() {
                                var t, e;
                                this.props.active && this.updateBBox(), this.state.dismissed && ((null === (t = this.props.coordinate) || void 0 === t ? void 0 : t.x) !== this.state.dismissedAtCoordinate.x || (null === (e = this.props.coordinate) || void 0 === e ? void 0 : e.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1)
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var t, e, r, n, o, i, a, u, c, l, s, f, p, h, d, y, v, m, b, g = this,
                                    x = this.props,
                                    O = x.active,
                                    w = x.allowEscapeViewBox,
                                    j = x.animationDuration,
                                    S = x.animationEasing,
                                    A = x.children,
                                    P = x.coordinate,
                                    M = x.hasPayload,
                                    _ = x.isAnimationActive,
                                    T = x.offset,
                                    C = x.position,
                                    I = x.reverseDirection,
                                    D = x.useTranslate3d,
                                    N = x.viewBox,
                                    B = x.wrapperStyle,
                                    L = (f = (t = {
                                        allowEscapeViewBox: w,
                                        coordinate: P,
                                        offsetTopLeft: T,
                                        position: C,
                                        reverseDirection: I,
                                        tooltipBox: this.state.lastBoundingBox,
                                        useTranslate3d: D,
                                        viewBox: N
                                    }).allowEscapeViewBox, p = t.coordinate, h = t.offsetTopLeft, d = t.position, y = t.reverseDirection, v = t.tooltipBox, m = t.useTranslate3d, b = t.viewBox, v.height > 0 && v.width > 0 && p ? (r = (e = {
                                        translateX: l = t6({
                                            allowEscapeViewBox: f,
                                            coordinate: p,
                                            key: "x",
                                            offsetTopLeft: h,
                                            position: d,
                                            reverseDirection: y,
                                            tooltipDimension: v.width,
                                            viewBox: b,
                                            viewBoxDimension: b.width
                                        }),
                                        translateY: s = t6({
                                            allowEscapeViewBox: f,
                                            coordinate: p,
                                            key: "y",
                                            offsetTopLeft: h,
                                            position: d,
                                            reverseDirection: y,
                                            tooltipDimension: v.height,
                                            viewBox: b,
                                            viewBoxDimension: b.height
                                        }),
                                        useTranslate3d: m
                                    }).translateX, n = e.translateY, c = {
                                        transform: e.useTranslate3d ? "translate3d(".concat(r, "px, ").concat(n, "px, 0)") : "translate(".concat(r, "px, ").concat(n, "px)")
                                    }) : c = t2, {
                                        cssProperties: c,
                                        cssClasses: (i = (o = {
                                            translateX: l,
                                            translateY: s,
                                            coordinate: p
                                        }).coordinate, a = o.translateX, u = o.translateY, (0, E.Z)(t1, t0(t0(t0(t0({}, "".concat(t1, "-right"), F(a) && i && F(i.x) && a >= i.x), "".concat(t1, "-left"), F(a) && i && F(i.x) && a < i.x), "".concat(t1, "-bottom"), F(u) && i && F(i.y) && u >= i.y), "".concat(t1, "-top"), F(u) && i && F(i.y) && u < i.y)))
                                    }),
                                    R = L.cssClasses,
                                    $ = L.cssProperties,
                                    z = t4(t4({
                                        transition: _ && O ? "transform ".concat(j, "ms ").concat(S) : void 0
                                    }, $), {}, {
                                        pointerEvents: "none",
                                        visibility: !this.state.dismissed && O && M ? "visible" : "hidden",
                                        position: "absolute",
                                        top: 0,
                                        left: 0
                                    }, B);
                                return k.createElement("div", {
                                    tabIndex: -1,
                                    className: R,
                                    style: z,
                                    ref: function(t) {
                                        g.wrapperNode = t
                                    }
                                }, A)
                            }
                        }],
                        function(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, er(n.key), n)
                            }
                        }(r.prototype, e), Object.defineProperty(r, "prototype", {
                            writable: !1
                        }), r
                }(k.PureComponent),
                eo = {
                    isSsr: !window.document || !window.document.createElement || !window.setTimeout,
                    get: function(t) {
                        return eo[t]
                    },
                    set: function(t, e) {
                        if ("string" == typeof t) eo[t] = e;
                        else {
                            var r = Object.keys(t);
                            r && r.length && r.forEach(function(e) {
                                eo[e] = t[e]
                            })
                        }
                    }
                },
                ei = r(45578),
                ea = r.n(ei);

            function eu(t, e, r) {
                return !0 === e ? ea()(t, r) : te()(e) ? ea()(t, e) : t
            }

            function ec(t) {
                return (ec = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function el(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function es(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? el(Object(r), !0).forEach(function(e) {
                        ed(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : el(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function ef() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (t) {}
                return (ef = function() {
                    return !!t
                })()
            }

            function ep(t) {
                return (ep = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function eh(t, e) {
                return (eh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function ed(t, e, r) {
                return (e = ey(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function ey(t) {
                var e = function(t, e) {
                    if ("object" != ec(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != ec(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == ec(e) ? e : String(e)
            }

            function ev(t) {
                return t.dataKey
            }
            var em = function(t) {
                var e;

                function r() {
                    var t, e;
                    return function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, r), t = r, e = arguments, t = ep(t),
                        function(t, e) {
                            if (e && ("object" === ec(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                            return function(t) {
                                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t
                            }(t)
                        }(this, ef() ? Reflect.construct(t, e || [], ep(this).constructor) : t.apply(this, e))
                }
                return function(t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && eh(t, e)
                    }(r, t), e = [{
                        key: "render",
                        value: function() {
                            var t, e = this,
                                r = this.props,
                                n = r.active,
                                o = r.allowEscapeViewBox,
                                i = r.animationDuration,
                                a = r.animationEasing,
                                u = r.content,
                                c = r.coordinate,
                                l = r.filterNull,
                                s = r.isAnimationActive,
                                f = r.offset,
                                p = r.payload,
                                h = r.payloadUniqBy,
                                d = r.position,
                                y = r.reverseDirection,
                                v = r.useTranslate3d,
                                m = r.viewBox,
                                b = r.wrapperStyle,
                                g = null != p ? p : [];
                            l && g.length && (g = eu(p.filter(function(t) {
                                return null != t.value && (!0 !== t.hide || e.props.includeHidden)
                            }), h, ev));
                            var x = g.length > 0;
                            return k.createElement(en, {
                                allowEscapeViewBox: o,
                                animationDuration: i,
                                animationEasing: a,
                                isAnimationActive: s,
                                active: n,
                                coordinate: c,
                                hasPayload: x,
                                offset: f,
                                position: d,
                                reverseDirection: y,
                                useTranslate3d: v,
                                viewBox: m,
                                wrapperStyle: b
                            }, (t = es(es({}, this.props), {}, {
                                payload: g
                            }), k.isValidElement(u) ? k.cloneElement(u, t) : "function" == typeof u ? k.createElement(u, t) : k.createElement(tJ, t)))
                        }
                    }],
                    function(t, e) {
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, ey(n.key), n)
                        }
                    }(r.prototype, e), Object.defineProperty(r, "prototype", {
                        writable: !1
                    }), r
            }(k.PureComponent);
            ed(em, "displayName", "Tooltip"), ed(em, "defaultProps", {
                accessibilityLayer: !1,
                allowEscapeViewBox: {
                    x: !1,
                    y: !1
                },
                animationDuration: 400,
                animationEasing: "ease",
                contentStyle: {},
                coordinate: {
                    x: 0,
                    y: 0
                },
                cursor: !0,
                cursorStyle: {},
                filterNull: !0,
                isAnimationActive: !eo.isSsr,
                itemStyle: {},
                labelStyle: {},
                offset: 10,
                reverseDirection: {
                    x: !1,
                    y: !1
                },
                separator: " : ",
                trigger: "hover",
                useTranslate3d: !1,
                viewBox: {
                    x: 0,
                    y: 0,
                    height: 0,
                    width: 0
                },
                wrapperStyle: {}
            });
            var eb = r(11700),
                eg = r.n(eb);
            let ex = Math.cos,
                eO = Math.sin,
                ew = Math.sqrt,
                ej = Math.PI,
                eS = 2 * ej;
            var eA = {
                draw(t, e) {
                    let r = ew(e / ej);
                    t.moveTo(r, 0), t.arc(0, 0, r, 0, eS)
                }
            };
            let eP = ew(1 / 3),
                eE = 2 * eP,
                ek = eO(ej / 10) / eO(7 * ej / 10),
                eM = eO(eS / 10) * ek,
                e_ = -ex(eS / 10) * ek,
                eT = ew(3),
                eC = ew(3) / 2,
                eI = 1 / ew(12),
                eD = (eI / 2 + 1) * 3;

            function eN(t) {
                return function() {
                    return t
                }
            }
            let eB = Math.PI,
                eL = 2 * eB,
                eR = eL - 1e-6;

            function e$(t) {
                this._ += t[0];
                for (let e = 1, r = t.length; e < r; ++e) this._ += arguments[e] + t[e]
            }
            class ez {
                constructor(t) {
                    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == t ? e$ : function(t) {
                        let e = Math.floor(t);
                        if (!(e >= 0)) throw Error(`invalid digits: ${t}`);
                        if (e > 15) return e$;
                        let r = 10 ** e;
                        return function(t) {
                            this._ += t[0];
                            for (let e = 1, n = t.length; e < n; ++e) this._ += Math.round(arguments[e] * r) / r + t[e]
                        }
                    }(t)
                }
                moveTo(t, e) {
                    this._append `M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`
                }
                closePath() {
                    null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append `Z`)
                }
                lineTo(t, e) {
                    this._append `L${this._x1=+t},${this._y1=+e}`
                }
                quadraticCurveTo(t, e, r, n) {
                    this._append `Q${+t},${+e},${this._x1=+r},${this._y1=+n}`
                }
                bezierCurveTo(t, e, r, n, o, i) {
                    this._append `C${+t},${+e},${+r},${+n},${this._x1=+o},${this._y1=+i}`
                }
                arcTo(t, e, r, n, o) {
                    if (t = +t, e = +e, r = +r, n = +n, (o = +o) < 0) throw Error(`negative radius: ${o}`);
                    let i = this._x1,
                        a = this._y1,
                        u = r - t,
                        c = n - e,
                        l = i - t,
                        s = a - e,
                        f = l * l + s * s;
                    if (null === this._x1) this._append `M${this._x1=t},${this._y1=e}`;
                    else if (f > 1e-6) {
                        if (Math.abs(s * u - c * l) > 1e-6 && o) {
                            let p = r - i,
                                h = n - a,
                                d = u * u + c * c,
                                y = Math.sqrt(d),
                                v = Math.sqrt(f),
                                m = o * Math.tan((eB - Math.acos((d + f - (p * p + h * h)) / (2 * y * v))) / 2),
                                b = m / v,
                                g = m / y;
                            Math.abs(b - 1) > 1e-6 && this._append `L${t+b*l},${e+b*s}`, this._append `A${o},${o},0,0,${+(s*p>l*h)},${this._x1=t+g*u},${this._y1=e+g*c}`
                        } else this._append `L${this._x1=t},${this._y1=e}`
                    }
                }
                arc(t, e, r, n, o, i) {
                    if (t = +t, e = +e, i = !!i, (r = +r) < 0) throw Error(`negative radius: ${r}`);
                    let a = r * Math.cos(n),
                        u = r * Math.sin(n),
                        c = t + a,
                        l = e + u,
                        s = 1 ^ i,
                        f = i ? n - o : o - n;
                    null === this._x1 ? this._append `M${c},${l}` : (Math.abs(this._x1 - c) > 1e-6 || Math.abs(this._y1 - l) > 1e-6) && this._append `L${c},${l}`, r && (f < 0 && (f = f % eL + eL), f > eR ? this._append `A${r},${r},0,1,${s},${t-a},${e-u}A${r},${r},0,1,${s},${this._x1=c},${this._y1=l}` : f > 1e-6 && this._append `A${r},${r},0,${+(f>=eB)},${s},${this._x1=t+r*Math.cos(o)},${this._y1=e+r*Math.sin(o)}`)
                }
                rect(t, e, r, n) {
                    this._append `M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${r=+r}v${+n}h${-r}Z`
                }
                toString() {
                    return this._
                }
            }

            function eU(t) {
                let e = 3;
                return t.digits = function(r) {
                    if (!arguments.length) return e;
                    if (null == r) e = null;
                    else {
                        let t = Math.floor(r);
                        if (!(t >= 0)) throw RangeError(`invalid digits: ${r}`);
                        e = t
                    }
                    return t
                }, () => new ez(e)
            }

            function eF(t) {
                return (eF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            ez.prototype, ew(3), ew(3);
            var eW = ["type", "size", "sizeType"];

            function eq() {
                return (eq = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function eX(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eH(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? eX(Object(r), !0).forEach(function(e) {
                        var n, o;
                        n = e, o = r[e], (n = function(t) {
                            var e = function(t, e) {
                                if ("object" != eF(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != eF(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == eF(e) ? e : String(e)
                        }(n)) in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : eX(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }
            var eV = {
                    symbolCircle: eA,
                    symbolCross: {
                        draw(t, e) {
                            let r = ew(e / 5) / 2;
                            t.moveTo(-3 * r, -r), t.lineTo(-r, -r), t.lineTo(-r, -3 * r), t.lineTo(r, -3 * r), t.lineTo(r, -r), t.lineTo(3 * r, -r), t.lineTo(3 * r, r), t.lineTo(r, r), t.lineTo(r, 3 * r), t.lineTo(-r, 3 * r), t.lineTo(-r, r), t.lineTo(-3 * r, r), t.closePath()
                        }
                    },
                    symbolDiamond: {
                        draw(t, e) {
                            let r = ew(e / eE),
                                n = r * eP;
                            t.moveTo(0, -r), t.lineTo(n, 0), t.lineTo(0, r), t.lineTo(-n, 0), t.closePath()
                        }
                    },
                    symbolSquare: {
                        draw(t, e) {
                            let r = ew(e),
                                n = -r / 2;
                            t.rect(n, n, r, r)
                        }
                    },
                    symbolStar: {
                        draw(t, e) {
                            let r = ew(.8908130915292852 * e),
                                n = eM * r,
                                o = e_ * r;
                            t.moveTo(0, -r), t.lineTo(n, o);
                            for (let e = 1; e < 5; ++e) {
                                let i = eS * e / 5,
                                    a = ex(i),
                                    u = eO(i);
                                t.lineTo(u * r, -a * r), t.lineTo(a * n - u * o, u * n + a * o)
                            }
                            t.closePath()
                        }
                    },
                    symbolTriangle: {
                        draw(t, e) {
                            let r = -ew(e / (3 * eT));
                            t.moveTo(0, 2 * r), t.lineTo(-eT * r, -r), t.lineTo(eT * r, -r), t.closePath()
                        }
                    },
                    symbolWye: {
                        draw(t, e) {
                            let r = ew(e / eD),
                                n = r / 2,
                                o = r * eI,
                                i = r * eI + r,
                                a = -n;
                            t.moveTo(n, o), t.lineTo(n, i), t.lineTo(a, i), t.lineTo(-.5 * n - eC * o, eC * n + -.5 * o), t.lineTo(-.5 * n - eC * i, eC * n + -.5 * i), t.lineTo(-.5 * a - eC * i, eC * a + -.5 * i), t.lineTo(-.5 * n + eC * o, -.5 * o - eC * n), t.lineTo(-.5 * n + eC * i, -.5 * i - eC * n), t.lineTo(-.5 * a + eC * i, -.5 * i - eC * a), t.closePath()
                        }
                    }
                },
                eZ = Math.PI / 180,
                eY = function(t, e, r) {
                    if ("area" === e) return t;
                    switch (r) {
                        case "cross":
                            return 5 * t * t / 9;
                        case "diamond":
                            return .5 * t * t / Math.sqrt(3);
                        case "square":
                            return t * t;
                        case "star":
                            var n = 18 * eZ;
                            return 1.25 * t * t * (Math.tan(n) - Math.tan(2 * n) * Math.pow(Math.tan(n), 2));
                        case "triangle":
                            return Math.sqrt(3) * t * t / 4;
                        case "wye":
                            return (21 - 10 * Math.sqrt(3)) * t * t / 8;
                        default:
                            return Math.PI * t * t / 4
                    }
                },
                eK = function(t) {
                    var e, r = t.type,
                        n = void 0 === r ? "circle" : r,
                        o = t.size,
                        i = void 0 === o ? 64 : o,
                        a = t.sizeType,
                        u = void 0 === a ? "area" : a,
                        c = eH(eH({}, function(t, e) {
                            if (null == t) return {};
                            var r, n, o = function(t, e) {
                                if (null == t) return {};
                                var r, n, o = {},
                                    i = Object.keys(t);
                                for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                                return o
                            }(t, e);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(t);
                                for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                            }
                            return o
                        }(t, eW)), {}, {
                            type: n,
                            size: i,
                            sizeType: u
                        }),
                        l = c.className,
                        s = c.cx,
                        f = c.cy,
                        p = tA(c, !0);
                    return s === +s && f === +f && i === +i ? k.createElement("path", eq({}, p, {
                        className: (0, E.Z)("recharts-symbols", l),
                        transform: "translate(".concat(s, ", ").concat(f, ")"),
                        d: (e = eV["symbol".concat(eg()(n))] || eA, (function(t, e) {
                            let r = null,
                                n = eU(o);

                            function o() {
                                let o;
                                if (r || (r = o = n()), t.apply(this, arguments).draw(r, +e.apply(this, arguments)), o) return r = null, o + "" || null
                            }
                            return t = "function" == typeof t ? t : eN(t || eA), e = "function" == typeof e ? e : eN(void 0 === e ? 64 : +e), o.type = function(e) {
                                return arguments.length ? (t = "function" == typeof e ? e : eN(e), o) : t
                            }, o.size = function(t) {
                                return arguments.length ? (e = "function" == typeof t ? t : eN(+t), o) : e
                            }, o.context = function(t) {
                                return arguments.length ? (r = null == t ? null : t, o) : r
                            }, o
                        })().type(e).size(eY(i, u, n))())
                    })) : null
                };

            function eG(t) {
                return (eG = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function eJ() {
                return (eJ = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function eQ(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function e0() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (t) {}
                return (e0 = function() {
                    return !!t
                })()
            }

            function e1(t) {
                return (e1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function e2(t, e) {
                return (e2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function e6(t, e, r) {
                return (e = e3(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function e3(t) {
                var e = function(t, e) {
                    if ("object" != eG(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != eG(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == eG(e) ? e : String(e)
            }
            eK.registerSymbol = function(t, e) {
                eV["symbol".concat(eg()(t))] = e
            };
            var e5 = function(t) {
                var e;

                function r() {
                    var t, e;
                    return function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, r), t = r, e = arguments, t = e1(t),
                        function(t, e) {
                            if (e && ("object" === eG(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                            return function(t) {
                                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t
                            }(t)
                        }(this, e0() ? Reflect.construct(t, e || [], e1(this).constructor) : t.apply(this, e))
                }
                return function(t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && e2(t, e)
                    }(r, t), e = [{
                        key: "renderIcon",
                        value: function(t) {
                            var e = this.props.inactiveColor,
                                r = 32 / 6,
                                n = 32 / 3,
                                o = t.inactive ? e : t.color;
                            if ("plainline" === t.type) return k.createElement("line", {
                                strokeWidth: 4,
                                fill: "none",
                                stroke: o,
                                strokeDasharray: t.payload.strokeDasharray,
                                x1: 0,
                                y1: 16,
                                x2: 32,
                                y2: 16,
                                className: "recharts-legend-icon"
                            });
                            if ("line" === t.type) return k.createElement("path", {
                                strokeWidth: 4,
                                fill: "none",
                                stroke: o,
                                d: "M0,".concat(16, "h").concat(n, "\n            A").concat(r, ",").concat(r, ",0,1,1,").concat(2 * n, ",").concat(16, "\n            H").concat(32, "M").concat(2 * n, ",").concat(16, "\n            A").concat(r, ",").concat(r, ",0,1,1,").concat(n, ",").concat(16),
                                className: "recharts-legend-icon"
                            });
                            if ("rect" === t.type) return k.createElement("path", {
                                stroke: "none",
                                fill: o,
                                d: "M0,".concat(4, "h").concat(32, "v").concat(24, "h").concat(-32, "z"),
                                className: "recharts-legend-icon"
                            });
                            if (k.isValidElement(t.legendIcon)) {
                                var i = function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var r = null != arguments[e] ? arguments[e] : {};
                                        e % 2 ? eQ(Object(r), !0).forEach(function(e) {
                                            e6(t, e, r[e])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : eQ(Object(r)).forEach(function(e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                        })
                                    }
                                    return t
                                }({}, t);
                                return delete i.legendIcon, k.cloneElement(t.legendIcon, i)
                            }
                            return k.createElement(eK, {
                                fill: o,
                                cx: 16,
                                cy: 16,
                                size: 32,
                                sizeType: "diameter",
                                type: t.type
                            })
                        }
                    }, {
                        key: "renderItems",
                        value: function() {
                            var t = this,
                                e = this.props,
                                r = e.payload,
                                n = e.iconSize,
                                o = e.layout,
                                i = e.formatter,
                                a = e.inactiveColor,
                                u = {
                                    x: 0,
                                    y: 0,
                                    width: 32,
                                    height: 32
                                },
                                c = {
                                    display: "horizontal" === o ? "inline-block" : "block",
                                    marginRight: 10
                                },
                                l = {
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                    marginRight: 4
                                };
                            return r.map(function(e, r) {
                                var o = e.formatter || i,
                                    s = (0, E.Z)(e6(e6({
                                        "recharts-legend-item": !0
                                    }, "legend-item-".concat(r), !0), "inactive", e.inactive));
                                if ("none" === e.type) return null;
                                var f = te()(e.value) ? null : e.value;
                                G(!te()(e.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
                                var p = e.inactive ? a : e.color;
                                return k.createElement("li", eJ({
                                    className: s,
                                    style: c,
                                    key: "legend-item-".concat(r)
                                }, tf(t.props, e, r)), k.createElement(tF, {
                                    width: n,
                                    height: n,
                                    viewBox: u,
                                    style: l
                                }, t.renderIcon(e)), k.createElement("span", {
                                    className: "recharts-legend-item-text",
                                    style: {
                                        color: p
                                    }
                                }, o ? o(f, e, r) : f))
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props,
                                e = t.payload,
                                r = t.layout,
                                n = t.align;
                            return e && e.length ? k.createElement("ul", {
                                className: "recharts-default-legend",
                                style: {
                                    padding: 0,
                                    margin: 0,
                                    textAlign: "horizontal" === r ? n : "left"
                                }
                            }, this.renderItems()) : null
                        }
                    }],
                    function(t, e) {
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, e3(n.key), n)
                        }
                    }(r.prototype, e), Object.defineProperty(r, "prototype", {
                        writable: !1
                    }), r
            }(k.PureComponent);

            function e4(t) {
                return (e4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            e6(e5, "displayName", "Legend"), e6(e5, "defaultProps", {
                iconSize: 14,
                layout: "horizontal",
                align: "center",
                verticalAlign: "middle",
                inactiveColor: "#ccc"
            });
            var e7 = ["ref"];

            function e8(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function e9(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? e8(Object(r), !0).forEach(function(e) {
                        ri(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : e8(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function rt(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, ra(n.key), n)
                }
            }

            function re() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (t) {}
                return (re = function() {
                    return !!t
                })()
            }

            function rr(t) {
                return (rr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function rn(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function ro(t, e) {
                return (ro = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function ri(t, e, r) {
                return (e = ra(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function ra(t) {
                var e = function(t, e) {
                    if ("object" != e4(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != e4(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == e4(e) ? e : String(e)
            }

            function ru(t) {
                return t.value
            }
            var rc = function(t) {
                var e, r;

                function n() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                    }(this, n);
                    for (var t, e, r, o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                    return e = n, r = [].concat(i), e = rr(e), t = function(t, e) {
                        if (e && ("object" === e4(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                        return rn(t)
                    }(this, re() ? Reflect.construct(e, r || [], rr(this).constructor) : e.apply(this, r)), ri(rn(t), "lastBoundingBox", {
                        width: -1,
                        height: -1
                    }), t
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && ro(t, e)
                }(n, t), e = [{
                    key: "componentDidMount",
                    value: function() {
                        this.updateBBox()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.updateBBox()
                    }
                }, {
                    key: "getBBox",
                    value: function() {
                        if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                            var t = this.wrapperNode.getBoundingClientRect();
                            return t.height = this.wrapperNode.offsetHeight, t.width = this.wrapperNode.offsetWidth, t
                        }
                        return null
                    }
                }, {
                    key: "updateBBox",
                    value: function() {
                        var t = this.props.onBBoxUpdate,
                            e = this.getBBox();
                        e ? (Math.abs(e.width - this.lastBoundingBox.width) > 1 || Math.abs(e.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = e.width, this.lastBoundingBox.height = e.height, t && t(e)) : (-1 !== this.lastBoundingBox.width || -1 !== this.lastBoundingBox.height) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, t && t(null))
                    }
                }, {
                    key: "getBBoxSnapshot",
                    value: function() {
                        return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? e9({}, this.lastBoundingBox) : {
                            width: 0,
                            height: 0
                        }
                    }
                }, {
                    key: "getDefaultPosition",
                    value: function(t) {
                        var e, r, n = this.props,
                            o = n.layout,
                            i = n.align,
                            a = n.verticalAlign,
                            u = n.margin,
                            c = n.chartWidth,
                            l = n.chartHeight;
                        return t && (void 0 !== t.left && null !== t.left || void 0 !== t.right && null !== t.right) || (e = "center" === i && "vertical" === o ? {
                            left: ((c || 0) - this.getBBoxSnapshot().width) / 2
                        } : "right" === i ? {
                            right: u && u.right || 0
                        } : {
                            left: u && u.left || 0
                        }), t && (void 0 !== t.top && null !== t.top || void 0 !== t.bottom && null !== t.bottom) || (r = "middle" === a ? {
                            top: ((l || 0) - this.getBBoxSnapshot().height) / 2
                        } : "bottom" === a ? {
                            bottom: u && u.bottom || 0
                        } : {
                            top: u && u.top || 0
                        }), e9(e9({}, e), r)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.props,
                            r = e.content,
                            n = e.width,
                            o = e.height,
                            i = e.wrapperStyle,
                            a = e.payloadUniqBy,
                            u = e.payload,
                            c = e9(e9({
                                position: "absolute",
                                width: n || "auto",
                                height: o || "auto"
                            }, this.getDefaultPosition(i)), i);
                        return k.createElement("div", {
                            className: "recharts-legend-wrapper",
                            style: c,
                            ref: function(e) {
                                t.wrapperNode = e
                            }
                        }, function(t, e) {
                            if (k.isValidElement(t)) return k.cloneElement(t, e);
                            if ("function" == typeof t) return k.createElement(t, e);
                            e.ref;
                            var r = function(t, e) {
                                if (null == t) return {};
                                var r, n, o = function(t, e) {
                                    if (null == t) return {};
                                    var r, n, o = {},
                                        i = Object.keys(t);
                                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                                    return o
                                }(t, e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(t);
                                    for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                                }
                                return o
                            }(e, e7);
                            return k.createElement(e5, r)
                        }(r, e9(e9({}, this.props), {}, {
                            payload: eu(u, a, ru)
                        })))
                    }
                }], r = [{
                    key: "getWithHeight",
                    value: function(t, e) {
                        var r = t.props.layout;
                        return "vertical" === r && F(t.props.height) ? {
                            height: t.props.height
                        } : "horizontal" === r ? {
                            width: t.props.width || e
                        } : null
                    }
                }], e && rt(n.prototype, e), r && rt(n, r), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n
            }(k.PureComponent);

            function rl() {
                return (rl = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }
            ri(rc, "displayName", "Legend"), ri(rc, "defaultProps", {
                iconSize: 14,
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom"
            });
            var rs = function(t) {
                    var e = t.cx,
                        r = t.cy,
                        n = t.r,
                        o = t.className,
                        i = (0, E.Z)("recharts-dot", o);
                    return e === +e && r === +r && n === +n ? k.createElement("circle", rl({}, tA(t, !1), ts(t), {
                        className: i,
                        cx: e,
                        cy: r,
                        r: n
                    })) : null
                },
                rf = r(45697),
                rp = r.n(rf),
                rh = Object.getOwnPropertyNames,
                rd = Object.getOwnPropertySymbols,
                ry = Object.prototype.hasOwnProperty;

            function rv(t, e) {
                return function(r, n, o) {
                    return t(r, n, o) && e(r, n, o)
                }
            }

            function rm(t) {
                return function(e, r, n) {
                    if (!e || !r || "object" != typeof e || "object" != typeof r) return t(e, r, n);
                    var o = n.cache,
                        i = o.get(e),
                        a = o.get(r);
                    if (i && a) return i === r && a === e;
                    o.set(e, r), o.set(r, e);
                    var u = t(e, r, n);
                    return o.delete(e), o.delete(r), u
                }
            }

            function rb(t) {
                return rh(t).concat(rd(t))
            }
            var rg = Object.hasOwn || function(t, e) {
                return ry.call(t, e)
            };

            function rx(t, e) {
                return t || e ? t === e : t === e || t != t && e != e
            }
            var rO = "_owner",
                rw = Object.getOwnPropertyDescriptor,
                rj = Object.keys;

            function rS(t, e, r) {
                var n = t.length;
                if (e.length !== n) return !1;
                for (; n-- > 0;)
                    if (!r.equals(t[n], e[n], n, n, t, e, r)) return !1;
                return !0
            }

            function rA(t, e) {
                return rx(t.getTime(), e.getTime())
            }

            function rP(t, e, r) {
                if (t.size !== e.size) return !1;
                for (var n, o, i = {}, a = t.entries(), u = 0;
                    (n = a.next()) && !n.done;) {
                    for (var c = e.entries(), l = !1, s = 0;
                        (o = c.next()) && !o.done;) {
                        var f = n.value,
                            p = f[0],
                            h = f[1],
                            d = o.value,
                            y = d[0],
                            v = d[1];
                        !l && !i[s] && (l = r.equals(p, y, u, s, t, e, r) && r.equals(h, v, p, y, t, e, r)) && (i[s] = !0), s++
                    }
                    if (!l) return !1;
                    u++
                }
                return !0
            }

            function rE(t, e, r) {
                var n, o = rj(t),
                    i = o.length;
                if (rj(e).length !== i) return !1;
                for (; i-- > 0;)
                    if ((n = o[i]) === rO && (t.$$typeof || e.$$typeof) && t.$$typeof !== e.$$typeof || !rg(e, n) || !r.equals(t[n], e[n], n, n, t, e, r)) return !1;
                return !0
            }

            function rk(t, e, r) {
                var n, o, i, a = rb(t),
                    u = a.length;
                if (rb(e).length !== u) return !1;
                for (; u-- > 0;)
                    if ((n = a[u]) === rO && (t.$$typeof || e.$$typeof) && t.$$typeof !== e.$$typeof || !rg(e, n) || !r.equals(t[n], e[n], n, n, t, e, r) || (o = rw(t, n), i = rw(e, n), (o || i) && (!o || !i || o.configurable !== i.configurable || o.enumerable !== i.enumerable || o.writable !== i.writable))) return !1;
                return !0
            }

            function rM(t, e) {
                return rx(t.valueOf(), e.valueOf())
            }

            function r_(t, e) {
                return t.source === e.source && t.flags === e.flags
            }

            function rT(t, e, r) {
                if (t.size !== e.size) return !1;
                for (var n, o, i = {}, a = t.values();
                    (n = a.next()) && !n.done;) {
                    for (var u = e.values(), c = !1, l = 0;
                        (o = u.next()) && !o.done;) !c && !i[l] && (c = r.equals(n.value, o.value, n.value, o.value, t, e, r)) && (i[l] = !0), l++;
                    if (!c) return !1
                }
                return !0
            }

            function rC(t, e) {
                var r = t.length;
                if (e.length !== r) return !1;
                for (; r-- > 0;)
                    if (t[r] !== e[r]) return !1;
                return !0
            }
            var rI = Array.isArray,
                rD = "function" == typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView : null,
                rN = Object.assign,
                rB = Object.prototype.toString.call.bind(Object.prototype.toString),
                rL = rR();

            function rR(t) {
                void 0 === t && (t = {});
                var e, r, n, o, i, a, u, c, l, s = t.circular,
                    f = t.createInternalComparator,
                    p = t.createState,
                    h = t.strict,
                    d = (r = (e = function(t) {
                        var e = t.circular,
                            r = t.createCustomConfig,
                            n = t.strict,
                            o = {
                                areArraysEqual: n ? rk : rS,
                                areDatesEqual: rA,
                                areMapsEqual: n ? rv(rP, rk) : rP,
                                areObjectsEqual: n ? rk : rE,
                                arePrimitiveWrappersEqual: rM,
                                areRegExpsEqual: r_,
                                areSetsEqual: n ? rv(rT, rk) : rT,
                                areTypedArraysEqual: n ? rk : rC
                            };
                        if (r && (o = rN({}, o, r(o))), e) {
                            var i = rm(o.areArraysEqual),
                                a = rm(o.areMapsEqual),
                                u = rm(o.areObjectsEqual),
                                c = rm(o.areSetsEqual);
                            o = rN({}, o, {
                                areArraysEqual: i,
                                areMapsEqual: a,
                                areObjectsEqual: u,
                                areSetsEqual: c
                            })
                        }
                        return o
                    }(t)).areArraysEqual, n = e.areDatesEqual, o = e.areMapsEqual, i = e.areObjectsEqual, a = e.arePrimitiveWrappersEqual, u = e.areRegExpsEqual, c = e.areSetsEqual, l = e.areTypedArraysEqual, function(t, e, s) {
                        if (t === e) return !0;
                        if (null == t || null == e || "object" != typeof t || "object" != typeof e) return t != t && e != e;
                        var f = t.constructor;
                        if (f !== e.constructor) return !1;
                        if (f === Object) return i(t, e, s);
                        if (rI(t)) return r(t, e, s);
                        if (null != rD && rD(t)) return l(t, e, s);
                        if (f === Date) return n(t, e, s);
                        if (f === RegExp) return u(t, e, s);
                        if (f === Map) return o(t, e, s);
                        if (f === Set) return c(t, e, s);
                        var p = rB(t);
                        return "[object Date]" === p ? n(t, e, s) : "[object RegExp]" === p ? u(t, e, s) : "[object Map]" === p ? o(t, e, s) : "[object Set]" === p ? c(t, e, s) : "[object Object]" === p ? "function" != typeof t.then && "function" != typeof e.then && i(t, e, s) : "[object Arguments]" === p ? i(t, e, s) : ("[object Boolean]" === p || "[object Number]" === p || "[object String]" === p) && a(t, e, s)
                    }),
                    y = f ? f(d) : function(t, e, r, n, o, i, a) {
                        return d(t, e, a)
                    };
                return function(t) {
                    var e = t.circular,
                        r = t.comparator,
                        n = t.createState,
                        o = t.equals,
                        i = t.strict;
                    if (n) return function(t, a) {
                        var u = n(),
                            c = u.cache;
                        return r(t, a, {
                            cache: void 0 === c ? e ? new WeakMap : void 0 : c,
                            equals: o,
                            meta: u.meta,
                            strict: i
                        })
                    };
                    if (e) return function(t, e) {
                        return r(t, e, {
                            cache: new WeakMap,
                            equals: o,
                            meta: void 0,
                            strict: i
                        })
                    };
                    var a = {
                        cache: void 0,
                        equals: o,
                        meta: void 0,
                        strict: i
                    };
                    return function(t, e) {
                        return r(t, e, a)
                    }
                }({
                    circular: void 0 !== s && s,
                    comparator: d,
                    createState: p,
                    equals: y,
                    strict: void 0 !== h && h
                })
            }

            function r$(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    r = -1;
                requestAnimationFrame(function n(o) {
                    if (r < 0 && (r = o), o - r > e) t(o), r = -1;
                    else {
                        var i;
                        i = n, "undefined" != typeof requestAnimationFrame && requestAnimationFrame(i)
                    }
                })
            }

            function rz(t) {
                return (rz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function rU(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function rF(t) {
                return (rF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function rW(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function rq(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? rW(Object(r), !0).forEach(function(e) {
                        rX(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : rW(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function rX(t, e, r) {
                var n;
                return (n = function(t, e) {
                    if ("object" !== rF(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" !== rF(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(e, "string"), (e = "symbol" === rF(n) ? n : String(n)) in t) ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            rR({
                strict: !0
            }), rR({
                circular: !0
            }), rR({
                circular: !0,
                strict: !0
            }), rR({
                createInternalComparator: function() {
                    return rx
                }
            }), rR({
                strict: !0,
                createInternalComparator: function() {
                    return rx
                }
            }), rR({
                circular: !0,
                createInternalComparator: function() {
                    return rx
                }
            }), rR({
                circular: !0,
                createInternalComparator: function() {
                    return rx
                },
                strict: !0
            });
            var rH = function(t) {
                    return t
                },
                rV = function(t, e) {
                    return Object.keys(e).reduce(function(r, n) {
                        return rq(rq({}, r), {}, rX({}, n, t(n, e[n])))
                    }, {})
                },
                rZ = function(t, e, r) {
                    return t.map(function(t) {
                        return "".concat(t.replace(/([A-Z])/g, function(t) {
                            return "-".concat(t.toLowerCase())
                        }), " ").concat(e, "ms ").concat(r)
                    }).join(",")
                },
                rY = function(t, e, r, n, o, i, a, u) {};

            function rK(t, e) {
                if (t) {
                    if ("string" == typeof t) return rG(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rG(t, e)
                }
            }

            function rG(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var rJ = function(t, e) {
                    return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1]
                },
                rQ = function(t, e) {
                    return t.map(function(t, r) {
                        return t * Math.pow(e, r)
                    }).reduce(function(t, e) {
                        return t + e
                    })
                },
                r0 = function(t, e) {
                    return function(r) {
                        return rQ(rJ(t, e), r)
                    }
                },
                r1 = function() {
                    for (var t, e, r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    var i = n[0],
                        a = n[1],
                        u = n[2],
                        c = n[3];
                    if (1 === n.length) switch (n[0]) {
                        case "linear":
                            i = 0, a = 0, u = 1, c = 1;
                            break;
                        case "ease":
                            i = .25, a = .1, u = .25, c = 1;
                            break;
                        case "ease-in":
                            i = .42, a = 0, u = 1, c = 1;
                            break;
                        case "ease-out":
                            i = .42, a = 0, u = .58, c = 1;
                            break;
                        case "ease-in-out":
                            i = 0, a = 0, u = .58, c = 1;
                            break;
                        default:
                            var l = n[0].split("(");
                            if ("cubic-bezier" === l[0] && 4 === l[1].split(")")[0].split(",").length) {
                                var s, f = function(t) {
                                    if (Array.isArray(t)) return t
                                }(s = l[1].split(")")[0].split(",").map(function(t) {
                                    return parseFloat(t)
                                })) || function(t, e) {
                                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                    if (null != r) {
                                        var n, o, i, a, u = [],
                                            c = !0,
                                            l = !1;
                                        try {
                                            for (i = (r = r.call(t)).next; !(c = (n = i.call(r)).done) && (u.push(n.value), 4 !== u.length); c = !0);
                                        } catch (t) {
                                            l = !0, o = t
                                        } finally {
                                            try {
                                                if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return
                                            } finally {
                                                if (l) throw o
                                            }
                                        }
                                        return u
                                    }
                                }(s, 4) || rK(s, 4) || function() {
                                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }();
                                i = f[0], a = f[1], u = f[2], c = f[3]
                            } else rY(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", n)
                    }
                    rY([i, u, a, c].every(function(t) {
                        return "number" == typeof t && t >= 0 && t <= 1
                    }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", n);
                    var p = r0(i, u),
                        h = r0(a, c),
                        d = (t = i, e = u, function(r) {
                            var n;
                            return rQ([].concat(function(t) {
                                if (Array.isArray(t)) return rG(t)
                            }(n = rJ(t, e).map(function(t, e) {
                                return t * e
                            }).slice(1)) || function(t) {
                                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                            }(n) || rK(n) || function() {
                                throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(), [0]), r)
                        }),
                        y = function(t) {
                            for (var e = t > 1 ? 1 : t, r = e, n = 0; n < 8; ++n) {
                                var o, i = p(r) - e,
                                    a = d(r);
                                if (1e-4 > Math.abs(i - e) || a < 1e-4) break;
                                r = (o = r - i / a) > 1 ? 1 : o < 0 ? 0 : o
                            }
                            return h(r)
                        };
                    return y.isStepper = !1, y
                },
                r2 = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.stiff,
                        r = void 0 === e ? 100 : e,
                        n = t.damping,
                        o = void 0 === n ? 8 : n,
                        i = t.dt,
                        a = void 0 === i ? 17 : i,
                        u = function(t, e, n) {
                            var i = n + (-(t - e) * r - n * o) * a / 1e3,
                                u = n * a / 1e3 + t;
                            return 1e-4 > Math.abs(u - e) && 1e-4 > Math.abs(i) ? [e, 0] : [u, i]
                        };
                    return u.isStepper = !0, u.dt = a, u
                },
                r6 = function() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    var n = e[0];
                    if ("string" == typeof n) switch (n) {
                        case "ease":
                        case "ease-in-out":
                        case "ease-out":
                        case "ease-in":
                        case "linear":
                            return r1(n);
                        case "spring":
                            return r2();
                        default:
                            if ("cubic-bezier" === n.split("(")[0]) return r1(n);
                            rY(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", e)
                    }
                    return "function" == typeof n ? n : (rY(!1, "[configEasing]: first argument type should be function or string, instead received %s", e), null)
                };

            function r3(t) {
                return (r3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function r5(t) {
                return function(t) {
                    if (Array.isArray(t)) return nt(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || r9(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function r4(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function r7(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r4(Object(r), !0).forEach(function(e) {
                        r8(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : r4(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function r8(t, e, r) {
                var n;
                return (n = function(t, e) {
                    if ("object" !== r3(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" !== r3(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(e, "string"), (e = "symbol" === r3(n) ? n : String(n)) in t) ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function r9(t, e) {
                if (t) {
                    if ("string" == typeof t) return nt(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nt(t, e)
                }
            }

            function nt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var ne = function(t, e, r) {
                    return t + (e - t) * r
                },
                nr = function(t) {
                    return t.from !== t.to
                },
                nn = function t(e, r, n) {
                    var o = rV(function(t, r) {
                        if (nr(r)) {
                            var n, o = function(t) {
                                    if (Array.isArray(t)) return t
                                }(n = e(r.from, r.to, r.velocity)) || function(t, e) {
                                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                    if (null != r) {
                                        var n, o, i, a, u = [],
                                            c = !0,
                                            l = !1;
                                        try {
                                            for (i = (r = r.call(t)).next; !(c = (n = i.call(r)).done) && (u.push(n.value), 2 !== u.length); c = !0);
                                        } catch (t) {
                                            l = !0, o = t
                                        } finally {
                                            try {
                                                if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return
                                            } finally {
                                                if (l) throw o
                                            }
                                        }
                                        return u
                                    }
                                }(n, 2) || r9(n, 2) || function() {
                                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }(),
                                i = o[0],
                                a = o[1];
                            return r7(r7({}, r), {}, {
                                from: i,
                                velocity: a
                            })
                        }
                        return r
                    }, r);
                    return n < 1 ? rV(function(t, e) {
                        return nr(e) ? r7(r7({}, e), {}, {
                            velocity: ne(e.velocity, o[t].velocity, n),
                            from: ne(e.from, o[t].from, n)
                        }) : e
                    }, r) : t(e, o, n - 1)
                },
                no = function(t, e, r, n, o) {
                    var i, a, u = [Object.keys(t), Object.keys(e)].reduce(function(t, e) {
                            return t.filter(function(t) {
                                return e.includes(t)
                            })
                        }),
                        c = u.reduce(function(r, n) {
                            return r7(r7({}, r), {}, r8({}, n, [t[n], e[n]]))
                        }, {}),
                        l = u.reduce(function(r, n) {
                            return r7(r7({}, r), {}, r8({}, n, {
                                from: t[n],
                                velocity: 0,
                                to: e[n]
                            }))
                        }, {}),
                        s = -1,
                        f = function() {
                            return null
                        };
                    return f = r.isStepper ? function(n) {
                            i || (i = n);
                            var a = (n - i) / r.dt;
                            l = nn(r, l, a), o(r7(r7(r7({}, t), e), rV(function(t, e) {
                                return e.from
                            }, l))), i = n, Object.values(l).filter(nr).length && (s = requestAnimationFrame(f))
                        } : function(i) {
                            a || (a = i);
                            var u = (i - a) / n,
                                l = rV(function(t, e) {
                                    return ne.apply(void 0, r5(e).concat([r(u)]))
                                }, c);
                            if (o(r7(r7(r7({}, t), e), l)), u < 1) s = requestAnimationFrame(f);
                            else {
                                var p = rV(function(t, e) {
                                    return ne.apply(void 0, r5(e).concat([r(1)]))
                                }, c);
                                o(r7(r7(r7({}, t), e), p))
                            }
                        },
                        function() {
                            return requestAnimationFrame(f),
                                function() {
                                    cancelAnimationFrame(s)
                                }
                        }
                };

            function ni(t) {
                return (ni = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var na = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

            function nu(t) {
                return function(t) {
                    if (Array.isArray(t)) return nc(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return nc(t, void 0);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nc(t, void 0)
                    }
                }(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function nc(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function nl(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ns(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? nl(Object(r), !0).forEach(function(e) {
                        nf(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : nl(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function nf(t, e, r) {
                return (e = np(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function np(t) {
                var e = function(t, e) {
                    if ("object" !== ni(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" !== ni(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" === ni(e) ? e : String(e)
            }

            function nh(t, e) {
                return (nh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function nd(t, e) {
                if (e && ("object" === ni(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                return ny(t)
            }

            function ny(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function nv(t) {
                return (nv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var nm = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && nh(t, e)
                }(o, t);
                var e, r, n = (e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (t) {
                        return !1
                    }
                }(), function() {
                    var t, r = nv(o);
                    return t = e ? Reflect.construct(r, arguments, nv(this).constructor) : r.apply(this, arguments), nd(this, t)
                });

                function o(t, e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                    }(this, o);
                    var r, i = (r = n.call(this, t, e)).props,
                        a = i.isActive,
                        u = i.attributeName,
                        c = i.from,
                        l = i.to,
                        s = i.steps,
                        f = i.children,
                        p = i.duration;
                    if (r.handleStyleChange = r.handleStyleChange.bind(ny(r)), r.changeStyle = r.changeStyle.bind(ny(r)), !a || p <= 0) return r.state = {
                        style: {}
                    }, "function" == typeof f && (r.state = {
                        style: l
                    }), nd(r);
                    if (s && s.length) r.state = {
                        style: s[0].style
                    };
                    else if (c) {
                        if ("function" == typeof f) return r.state = {
                            style: c
                        }, nd(r);
                        r.state = {
                            style: u ? nf({}, u, c) : c
                        }
                    } else r.state = {
                        style: {}
                    };
                    return r
                }
                return r = [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this.props,
                                e = t.isActive,
                                r = t.canBegin;
                            this.mounted = !0, e && r && this.runAnimation(this.props)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(t) {
                            var e = this.props,
                                r = e.isActive,
                                n = e.canBegin,
                                o = e.attributeName,
                                i = e.shouldReAnimate,
                                a = e.to,
                                u = e.from,
                                c = this.state.style;
                            if (n) {
                                if (!r) {
                                    var l = {
                                        style: o ? nf({}, o, a) : a
                                    };
                                    this.state && c && (o && c[o] !== a || !o && c !== a) && this.setState(l);
                                    return
                                }
                                if (!rL(t.to, a) || !t.canBegin || !t.isActive) {
                                    var s = !t.canBegin || !t.isActive;
                                    this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                                    var f = s || i ? u : t.to;
                                    if (this.state && c) {
                                        var p = {
                                            style: o ? nf({}, o, f) : f
                                        };
                                        (o && c[o] !== f || !o && c !== f) && this.setState(p)
                                    }
                                    this.runAnimation(ns(ns({}, this.props), {}, {
                                        from: f,
                                        begin: 0
                                    }))
                                }
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.mounted = !1;
                            var t = this.props.onAnimationEnd;
                            this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), t && t()
                        }
                    }, {
                        key: "handleStyleChange",
                        value: function(t) {
                            this.changeStyle(t)
                        }
                    }, {
                        key: "changeStyle",
                        value: function(t) {
                            this.mounted && this.setState({
                                style: t
                            })
                        }
                    }, {
                        key: "runJSAnimation",
                        value: function(t) {
                            var e = this,
                                r = t.from,
                                n = t.to,
                                o = t.duration,
                                i = t.easing,
                                a = t.begin,
                                u = t.onAnimationEnd,
                                c = t.onAnimationStart,
                                l = no(r, n, r6(i), o, this.changeStyle);
                            this.manager.start([c, a, function() {
                                e.stopJSAnimation = l()
                            }, o, u])
                        }
                    }, {
                        key: "runStepAnimation",
                        value: function(t) {
                            var e = this,
                                r = t.steps,
                                n = t.begin,
                                o = t.onAnimationStart,
                                i = r[0],
                                a = i.style,
                                u = i.duration;
                            return this.manager.start([o].concat(nu(r.reduce(function(t, n, o) {
                                if (0 === o) return t;
                                var i = n.duration,
                                    a = n.easing,
                                    u = void 0 === a ? "ease" : a,
                                    c = n.style,
                                    l = n.properties,
                                    s = n.onAnimationEnd,
                                    f = o > 0 ? r[o - 1] : n,
                                    p = l || Object.keys(c);
                                if ("function" == typeof u || "spring" === u) return [].concat(nu(t), [e.runJSAnimation.bind(e, {
                                    from: f.style,
                                    to: c,
                                    duration: i,
                                    easing: u
                                }), i]);
                                var h = rZ(p, i, u),
                                    d = ns(ns(ns({}, f.style), c), {}, {
                                        transition: h
                                    });
                                return [].concat(nu(t), [d, i, s]).filter(rH)
                            }, [a, Math.max(void 0 === u ? 0 : u, n)])), [t.onAnimationEnd]))
                        }
                    }, {
                        key: "runAnimation",
                        value: function(t) {
                            if (!this.manager) {
                                var e, r, n;
                                this.manager = (e = function() {
                                    return null
                                }, r = !1, n = function t(n) {
                                    if (!r) {
                                        if (Array.isArray(n)) {
                                            if (!n.length) return;
                                            var o = function(t) {
                                                    if (Array.isArray(t)) return t
                                                }(n) || function(t) {
                                                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                                                }(n) || function(t, e) {
                                                    if (t) {
                                                        if ("string" == typeof t) return rU(t, void 0);
                                                        var r = Object.prototype.toString.call(t).slice(8, -1);
                                                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rU(t, void 0)
                                                    }
                                                }(n) || function() {
                                                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                                }(),
                                                i = o[0],
                                                a = o.slice(1);
                                            if ("number" == typeof i) {
                                                r$(t.bind(null, a), i);
                                                return
                                            }
                                            t(i), r$(t.bind(null, a));
                                            return
                                        }
                                        "object" === rz(n) && e(n), "function" == typeof n && n()
                                    }
                                }, {
                                    stop: function() {
                                        r = !0
                                    },
                                    start: function(t) {
                                        r = !1, n(t)
                                    },
                                    subscribe: function(t) {
                                        return e = t,
                                            function() {
                                                e = function() {
                                                    return null
                                                }
                                            }
                                    }
                                })
                            }
                            var o = t.begin,
                                i = t.duration,
                                a = t.attributeName,
                                u = t.to,
                                c = t.easing,
                                l = t.onAnimationStart,
                                s = t.onAnimationEnd,
                                f = t.steps,
                                p = t.children,
                                h = this.manager;
                            if (this.unSubscribe = h.subscribe(this.handleStyleChange), "function" == typeof c || "function" == typeof p || "spring" === c) {
                                this.runJSAnimation(t);
                                return
                            }
                            if (f.length > 1) {
                                this.runStepAnimation(t);
                                return
                            }
                            var d = a ? nf({}, a, u) : u,
                                y = rZ(Object.keys(d), i, c);
                            h.start([l, o, ns(ns({}, d), {}, {
                                transition: y
                            }), i, s])
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props,
                                e = t.children,
                                r = (t.begin, t.duration),
                                n = (t.attributeName, t.easing, t.isActive),
                                o = (t.steps, t.from, t.to, t.canBegin, t.onAnimationEnd, t.shouldReAnimate, t.onAnimationReStart, function(t, e) {
                                    if (null == t) return {};
                                    var r, n, o = function(t, e) {
                                        if (null == t) return {};
                                        var r, n, o = {},
                                            i = Object.keys(t);
                                        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                                        return o
                                    }(t, e);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(t);
                                        for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                                    }
                                    return o
                                }(t, na)),
                                i = k.Children.count(e),
                                a = this.state.style;
                            if ("function" == typeof e) return e(a);
                            if (!n || 0 === i || r <= 0) return e;
                            var u = function(t) {
                                var e = t.props,
                                    r = e.style,
                                    n = e.className;
                                return (0, k.cloneElement)(t, ns(ns({}, o), {}, {
                                    style: ns(ns({}, void 0 === r ? {} : r), a),
                                    className: n
                                }))
                            };
                            return 1 === i ? u(k.Children.only(e)) : k.createElement("div", null, k.Children.map(e, function(t) {
                                return u(t)
                            }))
                        }
                    }],
                    function(t, e) {
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, np(n.key), n)
                        }
                    }(o.prototype, r), Object.defineProperty(o, "prototype", {
                        writable: !1
                    }), o
            }(k.PureComponent);
            nm.displayName = "Animate", nm.defaultProps = {
                begin: 0,
                duration: 1e3,
                from: "",
                to: "",
                attributeName: "",
                easing: "ease",
                isActive: !0,
                canBegin: !0,
                steps: [],
                onAnimationEnd: function() {},
                onAnimationStart: function() {}
            }, nm.propTypes = {
                from: rp().oneOfType([rp().object, rp().string]),
                to: rp().oneOfType([rp().object, rp().string]),
                attributeName: rp().string,
                duration: rp().number,
                begin: rp().number,
                easing: rp().oneOfType([rp().string, rp().func]),
                steps: rp().arrayOf(rp().shape({
                    duration: rp().number.isRequired,
                    style: rp().object.isRequired,
                    easing: rp().oneOfType([rp().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), rp().func]),
                    properties: rp().arrayOf("string"),
                    onAnimationEnd: rp().func
                })),
                children: rp().oneOfType([rp().node, rp().func]),
                isActive: rp().bool,
                canBegin: rp().bool,
                onAnimationEnd: rp().func,
                shouldReAnimate: rp().bool,
                onAnimationStart: rp().func,
                onAnimationReStart: rp().func
            };
            var nb = r(56772),
                ng = r(8662),
                nx = ["children", "appearOptions", "enterOptions", "leaveOptions"];

            function nO(t) {
                return (nO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function nw() {
                return (nw = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function nj(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function nS(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? nj(Object(r), !0).forEach(function(e) {
                        nk(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : nj(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function nA(t, e) {
                return (nA = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function nP(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function nE(t) {
                return (nE = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function nk(t, e, r) {
                return (e = nM(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function nM(t) {
                var e = function(t, e) {
                    if ("object" !== nO(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" !== nO(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" === nO(e) ? e : String(e)
            }
            var n_ = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.steps,
                        r = t.duration;
                    return e && e.length ? e.reduce(function(t, e) {
                        return t + (Number.isFinite(e.duration) && e.duration > 0 ? e.duration : 0)
                    }, 0) : Number.isFinite(r) ? r : 0
                },
                nT = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && nA(t, e)
                    }(o, t);
                    var e, r, n = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, r = nE(o);
                        return t = e ? Reflect.construct(r, arguments, nE(this).constructor) : r.apply(this, arguments),
                            function(t, e) {
                                if (e && ("object" === nO(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                                return nP(t)
                            }(this, t)
                    });

                    function o() {
                        var t;
                        return function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, o), nk(nP(t = n.call(this)), "handleEnter", function(e, r) {
                            var n = t.props,
                                o = n.appearOptions,
                                i = n.enterOptions;
                            t.handleStyleActive(r ? o : i)
                        }), nk(nP(t), "handleExit", function() {
                            var e = t.props.leaveOptions;
                            t.handleStyleActive(e)
                        }), t.state = {
                            isActive: !1
                        }, t
                    }
                    return r = [{
                            key: "handleStyleActive",
                            value: function(t) {
                                if (t) {
                                    var e = t.onAnimationEnd ? function() {
                                        t.onAnimationEnd()
                                    } : null;
                                    this.setState(nS(nS({}, t), {}, {
                                        onAnimationEnd: e,
                                        isActive: !0
                                    }))
                                }
                            }
                        }, {
                            key: "parseTimeout",
                            value: function() {
                                var t = this.props,
                                    e = t.appearOptions,
                                    r = t.enterOptions,
                                    n = t.leaveOptions;
                                return n_(e) + n_(r) + n_(n)
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var t = this,
                                    e = this.props,
                                    r = e.children,
                                    n = (e.appearOptions, e.enterOptions, e.leaveOptions, function(t, e) {
                                        if (null == t) return {};
                                        var r, n, o = function(t, e) {
                                            if (null == t) return {};
                                            var r, n, o = {},
                                                i = Object.keys(t);
                                            for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                                            return o
                                        }(t, e);
                                        if (Object.getOwnPropertySymbols) {
                                            var i = Object.getOwnPropertySymbols(t);
                                            for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                                        }
                                        return o
                                    }(e, nx));
                                return k.createElement(ng.ZP, nw({}, n, {
                                    onEnter: this.handleEnter,
                                    onExit: this.handleExit,
                                    timeout: this.parseTimeout()
                                }), function() {
                                    return k.createElement(nm, t.state, k.Children.only(r))
                                })
                            }
                        }],
                        function(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, nM(n.key), n)
                            }
                        }(o.prototype, r), Object.defineProperty(o, "prototype", {
                            writable: !1
                        }), o
                }(k.Component);

            function nC(t) {
                var e = t.component,
                    r = t.children,
                    n = t.appear,
                    o = t.enter,
                    i = t.leave;
                return k.createElement(nb.Z, {
                    component: e
                }, k.Children.map(r, function(t, e) {
                    return k.createElement(nT, {
                        appearOptions: n,
                        enterOptions: o,
                        leaveOptions: i,
                        key: "child-".concat(e)
                    }, t)
                }))
            }

            function nI(t) {
                return (nI = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function nD() {
                return (nD = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function nN(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function nB(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function nL(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? nB(Object(r), !0).forEach(function(e) {
                        var n, o;
                        n = e, o = r[e], (n = function(t) {
                            var e = function(t, e) {
                                if ("object" != nI(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != nI(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == nI(e) ? e : String(e)
                        }(n)) in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : nB(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }
            nT.propTypes = {
                appearOptions: rp().object,
                enterOptions: rp().object,
                leaveOptions: rp().object,
                children: rp().element
            }, nC.propTypes = {
                appear: rp().object,
                enter: rp().object,
                leave: rp().object,
                children: rp().oneOfType([rp().array, rp().element]),
                component: rp().any
            }, nC.defaultProps = {
                component: "span"
            };
            var nR = function(t, e, r, n, o) {
                    var i, a = Math.min(Math.abs(r) / 2, Math.abs(n) / 2),
                        u = n >= 0 ? 1 : -1,
                        c = r >= 0 ? 1 : -1,
                        l = n >= 0 && r >= 0 || n < 0 && r < 0 ? 1 : 0;
                    if (a > 0 && o instanceof Array) {
                        for (var s = [0, 0, 0, 0], f = 0; f < 4; f++) s[f] = o[f] > a ? a : o[f];
                        i = "M".concat(t, ",").concat(e + u * s[0]), s[0] > 0 && (i += "A ".concat(s[0], ",").concat(s[0], ",0,0,").concat(l, ",").concat(t + c * s[0], ",").concat(e)), i += "L ".concat(t + r - c * s[1], ",").concat(e), s[1] > 0 && (i += "A ".concat(s[1], ",").concat(s[1], ",0,0,").concat(l, ",\n        ").concat(t + r, ",").concat(e + u * s[1])), i += "L ".concat(t + r, ",").concat(e + n - u * s[2]), s[2] > 0 && (i += "A ".concat(s[2], ",").concat(s[2], ",0,0,").concat(l, ",\n        ").concat(t + r - c * s[2], ",").concat(e + n)), i += "L ".concat(t + c * s[3], ",").concat(e + n), s[3] > 0 && (i += "A ".concat(s[3], ",").concat(s[3], ",0,0,").concat(l, ",\n        ").concat(t, ",").concat(e + n - u * s[3])), i += "Z"
                    } else if (a > 0 && o === +o && o > 0) {
                        var p = Math.min(a, o);
                        i = "M ".concat(t, ",").concat(e + u * p, "\n            A ").concat(p, ",").concat(p, ",0,0,").concat(l, ",").concat(t + c * p, ",").concat(e, "\n            L ").concat(t + r - c * p, ",").concat(e, "\n            A ").concat(p, ",").concat(p, ",0,0,").concat(l, ",").concat(t + r, ",").concat(e + u * p, "\n            L ").concat(t + r, ",").concat(e + n - u * p, "\n            A ").concat(p, ",").concat(p, ",0,0,").concat(l, ",").concat(t + r - c * p, ",").concat(e + n, "\n            L ").concat(t + c * p, ",").concat(e + n, "\n            A ").concat(p, ",").concat(p, ",0,0,").concat(l, ",").concat(t, ",").concat(e + n - u * p, " Z")
                    } else i = "M ".concat(t, ",").concat(e, " h ").concat(r, " v ").concat(n, " h ").concat(-r, " Z");
                    return i
                },
                n$ = function(t, e) {
                    if (!t || !e) return !1;
                    var r = t.x,
                        n = t.y,
                        o = e.x,
                        i = e.y,
                        a = e.width,
                        u = e.height;
                    return !!(Math.abs(a) > 0 && Math.abs(u) > 0) && r >= Math.min(o, o + a) && r <= Math.max(o, o + a) && n >= Math.min(i, i + u) && n <= Math.max(i, i + u)
                },
                nz = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    radius: 0,
                    isAnimationActive: !1,
                    isUpdateAnimationActive: !1,
                    animationBegin: 0,
                    animationDuration: 1500,
                    animationEasing: "ease"
                },
                nU = function(t) {
                    var e, r = nL(nL({}, nz), t),
                        n = (0, k.useRef)(),
                        o = function(t) {
                            if (Array.isArray(t)) return t
                        }(e = (0, k.useState)(-1)) || function(t, e) {
                            var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != r) {
                                var n, o, i, a, u = [],
                                    c = !0,
                                    l = !1;
                                try {
                                    for (i = (r = r.call(t)).next; !(c = (n = i.call(r)).done) && (u.push(n.value), 2 !== u.length); c = !0);
                                } catch (t) {
                                    l = !0, o = t
                                } finally {
                                    try {
                                        if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return
                                    } finally {
                                        if (l) throw o
                                    }
                                }
                                return u
                            }
                        }(e, 2) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return nN(t, 2);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nN(t, 2)
                            }
                        }(e, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(),
                        i = o[0],
                        a = o[1];
                    (0, k.useEffect)(function() {
                        if (n.current && n.current.getTotalLength) try {
                            var t = n.current.getTotalLength();
                            t && a(t)
                        } catch (t) {}
                    }, []);
                    var u = r.x,
                        c = r.y,
                        l = r.width,
                        s = r.height,
                        f = r.radius,
                        p = r.className,
                        h = r.animationEasing,
                        d = r.animationDuration,
                        y = r.animationBegin,
                        v = r.isAnimationActive,
                        m = r.isUpdateAnimationActive;
                    if (u !== +u || c !== +c || l !== +l || s !== +s || 0 === l || 0 === s) return null;
                    var b = (0, E.Z)("recharts-rectangle", p);
                    return m ? k.createElement(nm, {
                        canBegin: i > 0,
                        from: {
                            width: l,
                            height: s,
                            x: u,
                            y: c
                        },
                        to: {
                            width: l,
                            height: s,
                            x: u,
                            y: c
                        },
                        duration: d,
                        animationEasing: h,
                        isActive: m
                    }, function(t) {
                        var e = t.width,
                            o = t.height,
                            a = t.x,
                            u = t.y;
                        return k.createElement(nm, {
                            canBegin: i > 0,
                            from: "0px ".concat(-1 === i ? 1 : i, "px"),
                            to: "".concat(i, "px 0px"),
                            attributeName: "strokeDasharray",
                            begin: y,
                            duration: d,
                            isActive: v,
                            easing: h
                        }, k.createElement("path", nD({}, tA(r, !0), {
                            className: b,
                            d: nR(a, u, e, o, f),
                            ref: n
                        })))
                    }) : k.createElement("path", nD({}, tA(r, !0), {
                        className: b,
                        d: nR(u, c, l, s, f)
                    }))
                };

            function nF(t, e) {
                switch (arguments.length) {
                    case 0:
                        break;
                    case 1:
                        this.range(t);
                        break;
                    default:
                        this.range(e).domain(t)
                }
                return this
            }

            function nW(t, e) {
                switch (arguments.length) {
                    case 0:
                        break;
                    case 1:
                        "function" == typeof t ? this.interpolator(t) : this.range(t);
                        break;
                    default:
                        this.domain(t), "function" == typeof e ? this.interpolator(e) : this.range(e)
                }
                return this
            }
            class nq extends Map {
                constructor(t, e = nH) {
                    if (super(), Object.defineProperties(this, {
                            _intern: {
                                value: new Map
                            },
                            _key: {
                                value: e
                            }
                        }), null != t)
                        for (let [e, r] of t) this.set(e, r)
                }
                get(t) {
                    return super.get(nX(this, t))
                }
                has(t) {
                    return super.has(nX(this, t))
                }
                set(t, e) {
                    return super.set(function({
                        _intern: t,
                        _key: e
                    }, r) {
                        let n = e(r);
                        return t.has(n) ? t.get(n) : (t.set(n, r), r)
                    }(this, t), e)
                }
                delete(t) {
                    return super.delete(function({
                        _intern: t,
                        _key: e
                    }, r) {
                        let n = e(r);
                        return t.has(n) && (r = t.get(n), t.delete(n)), r
                    }(this, t))
                }
            }

            function nX({
                _intern: t,
                _key: e
            }, r) {
                let n = e(r);
                return t.has(n) ? t.get(n) : r
            }

            function nH(t) {
                return null !== t && "object" == typeof t ? t.valueOf() : t
            }
            let nV = Symbol("implicit");

            function nZ() {
                var t = new nq,
                    e = [],
                    r = [],
                    n = nV;

                function o(o) {
                    let i = t.get(o);
                    if (void 0 === i) {
                        if (n !== nV) return n;
                        t.set(o, i = e.push(o) - 1)
                    }
                    return r[i % r.length]
                }
                return o.domain = function(r) {
                    if (!arguments.length) return e.slice();
                    for (let n of (e = [], t = new nq, r)) t.has(n) || t.set(n, e.push(n) - 1);
                    return o
                }, o.range = function(t) {
                    return arguments.length ? (r = Array.from(t), o) : r.slice()
                }, o.unknown = function(t) {
                    return arguments.length ? (n = t, o) : n
                }, o.copy = function() {
                    return nZ(e, r).unknown(n)
                }, nF.apply(o, arguments), o
            }

            function nY() {
                var t, e, r = nZ().unknown(void 0),
                    n = r.domain,
                    o = r.range,
                    i = 0,
                    a = 1,
                    u = !1,
                    c = 0,
                    l = 0,
                    s = .5;

                function f() {
                    var r = n().length,
                        f = a < i,
                        p = f ? a : i,
                        h = f ? i : a;
                    t = (h - p) / Math.max(1, r - c + 2 * l), u && (t = Math.floor(t)), p += (h - p - t * (r - c)) * s, e = t * (1 - c), u && (p = Math.round(p), e = Math.round(e));
                    var d = (function(t, e, r) {
                        t = +t, e = +e, r = (o = arguments.length) < 2 ? (e = t, t = 0, 1) : o < 3 ? 1 : +r;
                        for (var n = -1, o = 0 | Math.max(0, Math.ceil((e - t) / r)), i = Array(o); ++n < o;) i[n] = t + n * r;
                        return i
                    })(r).map(function(e) {
                        return p + t * e
                    });
                    return o(f ? d.reverse() : d)
                }
                return delete r.unknown, r.domain = function(t) {
                    return arguments.length ? (n(t), f()) : n()
                }, r.range = function(t) {
                    return arguments.length ? ([i, a] = t, i = +i, a = +a, f()) : [i, a]
                }, r.rangeRound = function(t) {
                    return [i, a] = t, i = +i, a = +a, u = !0, f()
                }, r.bandwidth = function() {
                    return e
                }, r.step = function() {
                    return t
                }, r.round = function(t) {
                    return arguments.length ? (u = !!t, f()) : u
                }, r.padding = function(t) {
                    return arguments.length ? (c = Math.min(1, l = +t), f()) : c
                }, r.paddingInner = function(t) {
                    return arguments.length ? (c = Math.min(1, t), f()) : c
                }, r.paddingOuter = function(t) {
                    return arguments.length ? (l = +t, f()) : l
                }, r.align = function(t) {
                    return arguments.length ? (s = Math.max(0, Math.min(1, t)), f()) : s
                }, r.copy = function() {
                    return nY(n(), [i, a]).round(u).paddingInner(c).paddingOuter(l).align(s)
                }, nF.apply(f(), arguments)
            }

            function nK() {
                return function t(e) {
                    var r = e.copy;
                    return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
                        return t(r())
                    }, e
                }(nY.apply(null, arguments).paddingInner(1))
            }

            function nG(t) {
                return (nG = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function nJ(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function nQ(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? nJ(Object(r), !0).forEach(function(e) {
                        var n, o;
                        n = e, o = r[e], (n = function(t) {
                            var e = function(t, e) {
                                if ("object" != nG(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != nG(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == nG(e) ? e : String(e)
                        }(n)) in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : nJ(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }
            var n0 = {
                    widthCache: {},
                    cacheCount: 0
                },
                n1 = {
                    position: "absolute",
                    top: "-20000px",
                    left: 0,
                    padding: 0,
                    margin: 0,
                    border: "none",
                    whiteSpace: "pre"
                },
                n2 = "recharts_measurement_span",
                n6 = function(t) {
                    var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (null == t || eo.isSsr) return {
                        width: 0,
                        height: 0
                    };
                    var n = (Object.keys(e = nQ({}, r)).forEach(function(t) {
                            e[t] || delete e[t]
                        }), e),
                        o = JSON.stringify({
                            text: t,
                            copyStyle: n
                        });
                    if (n0.widthCache[o]) return n0.widthCache[o];
                    try {
                        var i = document.getElementById(n2);
                        i || ((i = document.createElement("span")).setAttribute("id", n2), i.setAttribute("aria-hidden", "true"), document.body.appendChild(i));
                        var a = nQ(nQ({}, n1), n);
                        Object.assign(i.style, a), i.textContent = "".concat(t);
                        var u = i.getBoundingClientRect(),
                            c = {
                                width: u.width,
                                height: u.height
                            };
                        return n0.widthCache[o] = c, ++n0.cacheCount > 2e3 && (n0.cacheCount = 0, n0.widthCache = {}), c
                    } catch (t) {
                        return {
                            width: 0,
                            height: 0
                        }
                    }
                };

            function n3(t) {
                return (n3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function n5(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var n, o, i, a, u = [],
                            c = !0,
                            l = !1;
                        try {
                            if (i = (r = r.call(t)).next, 0 === e) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); c = !0);
                        } catch (t) {
                            l = !0, o = t
                        } finally {
                            try {
                                if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return
                            } finally {
                                if (l) throw o
                            }
                        }
                        return u
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return n4(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n4(t, e)
                    }
                }(t, e) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function n4(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function n7(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, function(t) {
                        var e = function(t, e) {
                            if ("object" != n3(t) || !t) return t;
                            var r = t[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var n = r.call(t, e || "default");
                                if ("object" != n3(n)) return n;
                                throw TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" == n3(e) ? e : String(e)
                    }(n.key), n)
                }
            }
            var n8 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
                n9 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
                ot = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
                oe = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
                or = {
                    cm: 96 / 2.54,
                    mm: 96 / 25.4,
                    pt: 96 / 72,
                    pc: 16,
                    in: 96,
                    Q: 96 / 101.6,
                    px: 1
                },
                on = Object.keys(or),
                oo = function() {
                    var t, e;

                    function r(t, e) {
                        (function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        })(this, r), this.num = t, this.unit = e, this.num = t, this.unit = e, Number.isNaN(t) && (this.unit = ""), "" === e || ot.test(e) || (this.num = NaN, this.unit = ""), on.includes(e) && (this.num = t * or[e], this.unit = "px")
                    }
                    return t = [{
                        key: "add",
                        value: function(t) {
                            return this.unit !== t.unit ? new r(NaN, "") : new r(this.num + t.num, this.unit)
                        }
                    }, {
                        key: "subtract",
                        value: function(t) {
                            return this.unit !== t.unit ? new r(NaN, "") : new r(this.num - t.num, this.unit)
                        }
                    }, {
                        key: "multiply",
                        value: function(t) {
                            return "" !== this.unit && "" !== t.unit && this.unit !== t.unit ? new r(NaN, "") : new r(this.num * t.num, this.unit || t.unit)
                        }
                    }, {
                        key: "divide",
                        value: function(t) {
                            return "" !== this.unit && "" !== t.unit && this.unit !== t.unit ? new r(NaN, "") : new r(this.num / t.num, this.unit || t.unit)
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return "".concat(this.num).concat(this.unit)
                        }
                    }, {
                        key: "isNaN",
                        value: function() {
                            return Number.isNaN(this.num)
                        }
                    }], e = [{
                        key: "parse",
                        value: function(t) {
                            var e, n = n5(null !== (e = oe.exec(t)) && void 0 !== e ? e : [], 3),
                                o = n[1],
                                i = n[2];
                            return new r(parseFloat(o), null != i ? i : "")
                        }
                    }], t && n7(r.prototype, t), e && n7(r, e), Object.defineProperty(r, "prototype", {
                        writable: !1
                    }), r
                }();

            function oi(t) {
                if (t.includes("NaN")) return "NaN";
                for (var e = t; e.includes("*") || e.includes("/");) {
                    var r, n = n5(null !== (r = n8.exec(e)) && void 0 !== r ? r : [], 4),
                        o = n[1],
                        i = n[2],
                        a = n[3],
                        u = oo.parse(null != o ? o : ""),
                        c = oo.parse(null != a ? a : ""),
                        l = "*" === i ? u.multiply(c) : u.divide(c);
                    if (l.isNaN()) return "NaN";
                    e = e.replace(n8, l.toString())
                }
                for (; e.includes("+") || /.-\d+(?:\.\d+)?/.test(e);) {
                    var s, f = n5(null !== (s = n9.exec(e)) && void 0 !== s ? s : [], 4),
                        p = f[1],
                        h = f[2],
                        d = f[3],
                        y = oo.parse(null != p ? p : ""),
                        v = oo.parse(null != d ? d : ""),
                        m = "+" === h ? y.add(v) : y.subtract(v);
                    if (m.isNaN()) return "NaN";
                    e = e.replace(n9, m.toString())
                }
                return e
            }
            var oa = /\(([^()]*)\)/;

            function ou(t) {
                var e = function(t) {
                    try {
                        var e;
                        return e = t.replace(/\s+/g, ""), e = function(t) {
                            for (var e = t; e.includes("(");) {
                                var r = n5(oa.exec(e), 2)[1];
                                e = e.replace(oa, oi(r))
                            }
                            return e
                        }(e), e = oi(e)
                    } catch (t) {
                        return "NaN"
                    }
                }(t.slice(5, -1));
                return "NaN" === e ? "" : e
            }
            var oc = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
                ol = ["dx", "dy", "angle", "className", "breakAll"];

            function os() {
                return (os = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function of (t, e) {
                if (null == t) return {};
                var r, n, o = function(t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }

            function op(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var n, o, i, a, u = [],
                            c = !0,
                            l = !1;
                        try {
                            if (i = (r = r.call(t)).next, 0 === e) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); c = !0);
                        } catch (t) {
                            l = !0, o = t
                        } finally {
                            try {
                                if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return
                            } finally {
                                if (l) throw o
                            }
                        }
                        return u
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return oh(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return oh(t, e)
                    }
                }(t, e) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function oh(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var od = /[ \f\n\r\t\v\u2028\u2029]+/,
                oy = function(t) {
                    var e = t.children,
                        r = t.breakAll,
                        n = t.style;
                    try {
                        var o = [];
                        Q()(e) || (o = r ? e.toString().split("") : e.toString().split(od));
                        var i = o.map(function(t) {
                                return {
                                    word: t,
                                    width: n6(t, n).width
                                }
                            }),
                            a = r ? 0 : n6("\xa0", n).width;
                        return {
                            wordsWithComputedWidth: i,
                            spaceWidth: a
                        }
                    } catch (t) {
                        return null
                    }
                },
                ov = function(t, e, r, n, o) {
                    var i, a = t.maxLines,
                        u = t.children,
                        c = t.style,
                        l = t.breakAll,
                        s = F(a),
                        f = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                            return t.reduce(function(t, e) {
                                var i = e.word,
                                    a = e.width,
                                    u = t[t.length - 1];
                                return u && (null == n || o || u.width + a + r < Number(n)) ? (u.words.push(i), u.width += a + r) : t.push({
                                    words: [i],
                                    width: a
                                }), t
                            }, [])
                        },
                        p = f(e);
                    if (!s) return p;
                    for (var h = function(t) {
                            var e = f(oy({
                                breakAll: l,
                                style: c,
                                children: u.slice(0, t) + "…"
                            }).wordsWithComputedWidth);
                            return [e.length > a || e.reduce(function(t, e) {
                                return t.width > e.width ? t : e
                            }).width > Number(n), e]
                        }, d = 0, y = u.length - 1, v = 0; d <= y && v <= u.length - 1;) {
                        var m = Math.floor((d + y) / 2),
                            b = op(h(m - 1), 2),
                            g = b[0],
                            x = b[1],
                            O = op(h(m), 1)[0];
                        if (g || O || (d = m + 1), g && O && (y = m - 1), !g && O) {
                            i = x;
                            break
                        }
                        v++
                    }
                    return i || p
                },
                om = function(t) {
                    return [{
                        words: Q()(t) ? [] : t.toString().split(od)
                    }]
                },
                ob = function(t) {
                    var e = t.width,
                        r = t.scaleToFit,
                        n = t.children,
                        o = t.style,
                        i = t.breakAll,
                        a = t.maxLines;
                    if ((e || r) && !eo.isSsr) {
                        var u = oy({
                            breakAll: i,
                            children: n,
                            style: o
                        });
                        return u ? ov({
                            breakAll: i,
                            children: n,
                            maxLines: a,
                            style: o
                        }, u.wordsWithComputedWidth, u.spaceWidth, e, r) : om(n)
                    }
                    return om(n)
                },
                og = "#808080",
                ox = function(t) {
                    var e, r = t.x,
                        n = void 0 === r ? 0 : r,
                        o = t.y,
                        i = void 0 === o ? 0 : o,
                        a = t.lineHeight,
                        u = void 0 === a ? "1em" : a,
                        c = t.capHeight,
                        l = void 0 === c ? "0.71em" : c,
                        s = t.scaleToFit,
                        f = void 0 !== s && s,
                        p = t.textAnchor,
                        h = t.verticalAnchor,
                        d = t.fill,
                        y = void 0 === d ? og : d,
                        v = of (t, oc),
                        m = (0, k.useMemo)(function() {
                            return ob({
                                breakAll: v.breakAll,
                                children: v.children,
                                maxLines: v.maxLines,
                                scaleToFit: f,
                                style: v.style,
                                width: v.width
                            })
                        }, [v.breakAll, v.children, v.maxLines, f, v.style, v.width]),
                        b = v.dx,
                        g = v.dy,
                        x = v.angle,
                        O = v.className,
                        w = v.breakAll,
                        j = of (v, ol);
                    if (!W(n) || !W(i)) return null;
                    var S = n + (F(b) ? b : 0),
                        A = i + (F(g) ? g : 0);
                    switch (void 0 === h ? "end" : h) {
                        case "start":
                            e = ou("calc(".concat(l, ")"));
                            break;
                        case "middle":
                            e = ou("calc(".concat((m.length - 1) / 2, " * -").concat(u, " + (").concat(l, " / 2))"));
                            break;
                        default:
                            e = ou("calc(".concat(m.length - 1, " * -").concat(u, ")"))
                    }
                    var P = [];
                    if (f) {
                        var M = m[0].width,
                            _ = v.width;
                        P.push("scale(".concat((F(_) ? _ / M : 1) / M, ")"))
                    }
                    return x && P.push("rotate(".concat(x, ", ").concat(S, ", ").concat(A, ")")), P.length && (j.transform = P.join(" ")), k.createElement("text", os({}, tA(j, !0), {
                        x: S,
                        y: A,
                        className: (0, E.Z)("recharts-text", O),
                        textAnchor: void 0 === p ? "start" : p,
                        fill: y.includes("url") ? og : y
                    }), m.map(function(t, r) {
                        var n = t.words.join(w ? "" : " ");
                        return k.createElement("tspan", {
                            x: S,
                            dy: 0 === r ? e : u,
                            key: n
                        }, n)
                    }))
                };
            let oO = Math.sqrt(50),
                ow = Math.sqrt(10),
                oj = Math.sqrt(2);

            function oS(t, e, r) {
                let n, o, i;
                let a = (e - t) / Math.max(0, r),
                    u = Math.floor(Math.log10(a)),
                    c = a / Math.pow(10, u),
                    l = c >= oO ? 10 : c >= ow ? 5 : c >= oj ? 2 : 1;
                return (u < 0 ? (n = Math.round(t * (i = Math.pow(10, -u) / l)), o = Math.round(e * i), n / i < t && ++n, o / i > e && --o, i = -i) : (n = Math.round(t / (i = Math.pow(10, u) * l)), o = Math.round(e / i), n * i < t && ++n, o * i > e && --o), o < n && .5 <= r && r < 2) ? oS(t, e, 2 * r) : [n, o, i]
            }

            function oA(t, e, r) {
                if (e = +e, t = +t, !((r = +r) > 0)) return [];
                if (t === e) return [t];
                let n = e < t,
                    [o, i, a] = n ? oS(e, t, r) : oS(t, e, r);
                if (!(i >= o)) return [];
                let u = i - o + 1,
                    c = Array(u);
                if (n) {
                    if (a < 0)
                        for (let t = 0; t < u; ++t) c[t] = -((i - t) / a);
                    else
                        for (let t = 0; t < u; ++t) c[t] = (i - t) * a
                } else if (a < 0)
                    for (let t = 0; t < u; ++t) c[t] = -((o + t) / a);
                else
                    for (let t = 0; t < u; ++t) c[t] = (o + t) * a;
                return c
            }

            function oP(t, e, r) {
                return oS(t = +t, e = +e, r = +r)[2]
            }

            function oE(t, e, r) {
                e = +e, t = +t, r = +r;
                let n = e < t,
                    o = n ? oP(e, t, r) : oP(t, e, r);
                return (n ? -1 : 1) * (o < 0 ? -(1 / o) : o)
            }

            function ok(t, e) {
                return null == t || null == e ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
            }

            function oM(t, e) {
                return null == t || null == e ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
            }

            function o_(t) {
                let e, r, n;

                function o(t, n, o = 0, i = t.length) {
                    if (o < i) {
                        if (0 !== e(n, n)) return i;
                        do {
                            let e = o + i >>> 1;
                            0 > r(t[e], n) ? o = e + 1 : i = e
                        } while (o < i)
                    }
                    return o
                }
                return 2 !== t.length ? (e = ok, r = (e, r) => ok(t(e), r), n = (e, r) => t(e) - r) : (e = t === ok || t === oM ? t : oT, r = t, n = t), {
                    left: o,
                    center: function(t, e, r = 0, i = t.length) {
                        let a = o(t, e, r, i - 1);
                        return a > r && n(t[a - 1], e) > -n(t[a], e) ? a - 1 : a
                    },
                    right: function(t, n, o = 0, i = t.length) {
                        if (o < i) {
                            if (0 !== e(n, n)) return i;
                            do {
                                let e = o + i >>> 1;
                                0 >= r(t[e], n) ? o = e + 1 : i = e
                            } while (o < i)
                        }
                        return o
                    }
                }
            }

            function oT() {
                return 0
            }

            function oC(t) {
                return null === t ? NaN : +t
            }
            let oI = o_(ok),
                oD = oI.right;

            function oN(t, e, r) {
                t.prototype = e.prototype = r, r.constructor = t
            }

            function oB(t, e) {
                var r = Object.create(t.prototype);
                for (var n in e) r[n] = e[n];
                return r
            }

            function oL() {}
            oI.left, o_(oC).center;
            var oR = "\\s*([+-]?\\d+)\\s*",
                o$ = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
                oz = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
                oU = /^#([0-9a-f]{3,8})$/,
                oF = RegExp(`^rgb\\(${oR},${oR},${oR}\\)$`),
                oW = RegExp(`^rgb\\(${oz},${oz},${oz}\\)$`),
                oq = RegExp(`^rgba\\(${oR},${oR},${oR},${o$}\\)$`),
                oX = RegExp(`^rgba\\(${oz},${oz},${oz},${o$}\\)$`),
                oH = RegExp(`^hsl\\(${o$},${oz},${oz}\\)$`),
                oV = RegExp(`^hsla\\(${o$},${oz},${oz},${o$}\\)$`),
                oZ = {
                    aliceblue: 15792383,
                    antiquewhite: 16444375,
                    aqua: 65535,
                    aquamarine: 8388564,
                    azure: 15794175,
                    beige: 16119260,
                    bisque: 16770244,
                    black: 0,
                    blanchedalmond: 16772045,
                    blue: 255,
                    blueviolet: 9055202,
                    brown: 10824234,
                    burlywood: 14596231,
                    cadetblue: 6266528,
                    chartreuse: 8388352,
                    chocolate: 13789470,
                    coral: 16744272,
                    cornflowerblue: 6591981,
                    cornsilk: 16775388,
                    crimson: 14423100,
                    cyan: 65535,
                    darkblue: 139,
                    darkcyan: 35723,
                    darkgoldenrod: 12092939,
                    darkgray: 11119017,
                    darkgreen: 25600,
                    darkgrey: 11119017,
                    darkkhaki: 12433259,
                    darkmagenta: 9109643,
                    darkolivegreen: 5597999,
                    darkorange: 16747520,
                    darkorchid: 10040012,
                    darkred: 9109504,
                    darksalmon: 15308410,
                    darkseagreen: 9419919,
                    darkslateblue: 4734347,
                    darkslategray: 3100495,
                    darkslategrey: 3100495,
                    darkturquoise: 52945,
                    darkviolet: 9699539,
                    deeppink: 16716947,
                    deepskyblue: 49151,
                    dimgray: 6908265,
                    dimgrey: 6908265,
                    dodgerblue: 2003199,
                    firebrick: 11674146,
                    floralwhite: 16775920,
                    forestgreen: 2263842,
                    fuchsia: 16711935,
                    gainsboro: 14474460,
                    ghostwhite: 16316671,
                    gold: 16766720,
                    goldenrod: 14329120,
                    gray: 8421504,
                    green: 32768,
                    greenyellow: 11403055,
                    grey: 8421504,
                    honeydew: 15794160,
                    hotpink: 16738740,
                    indianred: 13458524,
                    indigo: 4915330,
                    ivory: 16777200,
                    khaki: 15787660,
                    lavender: 15132410,
                    lavenderblush: 16773365,
                    lawngreen: 8190976,
                    lemonchiffon: 16775885,
                    lightblue: 11393254,
                    lightcoral: 15761536,
                    lightcyan: 14745599,
                    lightgoldenrodyellow: 16448210,
                    lightgray: 13882323,
                    lightgreen: 9498256,
                    lightgrey: 13882323,
                    lightpink: 16758465,
                    lightsalmon: 16752762,
                    lightseagreen: 2142890,
                    lightskyblue: 8900346,
                    lightslategray: 7833753,
                    lightslategrey: 7833753,
                    lightsteelblue: 11584734,
                    lightyellow: 16777184,
                    lime: 65280,
                    limegreen: 3329330,
                    linen: 16445670,
                    magenta: 16711935,
                    maroon: 8388608,
                    mediumaquamarine: 6737322,
                    mediumblue: 205,
                    mediumorchid: 12211667,
                    mediumpurple: 9662683,
                    mediumseagreen: 3978097,
                    mediumslateblue: 8087790,
                    mediumspringgreen: 64154,
                    mediumturquoise: 4772300,
                    mediumvioletred: 13047173,
                    midnightblue: 1644912,
                    mintcream: 16121850,
                    mistyrose: 16770273,
                    moccasin: 16770229,
                    navajowhite: 16768685,
                    navy: 128,
                    oldlace: 16643558,
                    olive: 8421376,
                    olivedrab: 7048739,
                    orange: 16753920,
                    orangered: 16729344,
                    orchid: 14315734,
                    palegoldenrod: 15657130,
                    palegreen: 10025880,
                    paleturquoise: 11529966,
                    palevioletred: 14381203,
                    papayawhip: 16773077,
                    peachpuff: 16767673,
                    peru: 13468991,
                    pink: 16761035,
                    plum: 14524637,
                    powderblue: 11591910,
                    purple: 8388736,
                    rebeccapurple: 6697881,
                    red: 16711680,
                    rosybrown: 12357519,
                    royalblue: 4286945,
                    saddlebrown: 9127187,
                    salmon: 16416882,
                    sandybrown: 16032864,
                    seagreen: 3050327,
                    seashell: 16774638,
                    sienna: 10506797,
                    silver: 12632256,
                    skyblue: 8900331,
                    slateblue: 6970061,
                    slategray: 7372944,
                    slategrey: 7372944,
                    snow: 16775930,
                    springgreen: 65407,
                    steelblue: 4620980,
                    tan: 13808780,
                    teal: 32896,
                    thistle: 14204888,
                    tomato: 16737095,
                    turquoise: 4251856,
                    violet: 15631086,
                    wheat: 16113331,
                    white: 16777215,
                    whitesmoke: 16119285,
                    yellow: 16776960,
                    yellowgreen: 10145074
                };

            function oY() {
                return this.rgb().formatHex()
            }

            function oK() {
                return this.rgb().formatRgb()
            }

            function oG(t) {
                var e, r;
                return t = (t + "").trim().toLowerCase(), (e = oU.exec(t)) ? (r = e[1].length, e = parseInt(e[1], 16), 6 === r ? oJ(e) : 3 === r ? new o1(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : 8 === r ? oQ(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (255 & e) / 255) : 4 === r ? oQ(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, ((15 & e) << 4 | 15 & e) / 255) : null) : (e = oF.exec(t)) ? new o1(e[1], e[2], e[3], 1) : (e = oW.exec(t)) ? new o1(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = oq.exec(t)) ? oQ(e[1], e[2], e[3], e[4]) : (e = oX.exec(t)) ? oQ(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = oH.exec(t)) ? o7(e[1], e[2] / 100, e[3] / 100, 1) : (e = oV.exec(t)) ? o7(e[1], e[2] / 100, e[3] / 100, e[4]) : oZ.hasOwnProperty(t) ? oJ(oZ[t]) : "transparent" === t ? new o1(NaN, NaN, NaN, 0) : null
            }

            function oJ(t) {
                return new o1(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
            }

            function oQ(t, e, r, n) {
                return n <= 0 && (t = e = r = NaN), new o1(t, e, r, n)
            }

            function o0(t, e, r, n) {
                var o;
                return 1 == arguments.length ? ((o = t) instanceof oL || (o = oG(o)), o) ? new o1((o = o.rgb()).r, o.g, o.b, o.opacity) : new o1 : new o1(t, e, r, null == n ? 1 : n)
            }

            function o1(t, e, r, n) {
                this.r = +t, this.g = +e, this.b = +r, this.opacity = +n
            }

            function o2() {
                return `#${o4(this.r)}${o4(this.g)}${o4(this.b)}`
            }

            function o6() {
                let t = o3(this.opacity);
                return `${1===t?"rgb(":"rgba("}${o5(this.r)}, ${o5(this.g)}, ${o5(this.b)}${1===t?")":`, ${t})`}`
            }

            function o3(t) {
                return isNaN(t) ? 1 : Math.max(0, Math.min(1, t))
            }

            function o5(t) {
                return Math.max(0, Math.min(255, Math.round(t) || 0))
            }

            function o4(t) {
                return ((t = o5(t)) < 16 ? "0" : "") + t.toString(16)
            }

            function o7(t, e, r, n) {
                return n <= 0 ? t = e = r = NaN : r <= 0 || r >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new o9(t, e, r, n)
            }

            function o8(t) {
                if (t instanceof o9) return new o9(t.h, t.s, t.l, t.opacity);
                if (t instanceof oL || (t = oG(t)), !t) return new o9;
                if (t instanceof o9) return t;
                var e = (t = t.rgb()).r / 255,
                    r = t.g / 255,
                    n = t.b / 255,
                    o = Math.min(e, r, n),
                    i = Math.max(e, r, n),
                    a = NaN,
                    u = i - o,
                    c = (i + o) / 2;
                return u ? (a = e === i ? (r - n) / u + (r < n) * 6 : r === i ? (n - e) / u + 2 : (e - r) / u + 4, u /= c < .5 ? i + o : 2 - i - o, a *= 60) : u = c > 0 && c < 1 ? 0 : a, new o9(a, u, c, t.opacity)
            }

            function o9(t, e, r, n) {
                this.h = +t, this.s = +e, this.l = +r, this.opacity = +n
            }

            function it(t) {
                return (t = (t || 0) % 360) < 0 ? t + 360 : t
            }

            function ie(t) {
                return Math.max(0, Math.min(1, t || 0))
            }

            function ir(t, e, r) {
                return (t < 60 ? e + (r - e) * t / 60 : t < 180 ? r : t < 240 ? e + (r - e) * (240 - t) / 60 : e) * 255
            }

            function io(t, e, r, n, o) {
                var i = t * t,
                    a = i * t;
                return ((1 - 3 * t + 3 * i - a) * e + (4 - 6 * i + 3 * a) * r + (1 + 3 * t + 3 * i - 3 * a) * n + a * o) / 6
            }
            oN(oL, oG, {
                copy(t) {
                    return Object.assign(new this.constructor, this, t)
                },
                displayable() {
                    return this.rgb().displayable()
                },
                hex: oY,
                formatHex: oY,
                formatHex8: function() {
                    return this.rgb().formatHex8()
                },
                formatHsl: function() {
                    return o8(this).formatHsl()
                },
                formatRgb: oK,
                toString: oK
            }), oN(o1, o0, oB(oL, {
                brighter(t) {
                    return t = null == t ? 1.4285714285714286 : Math.pow(1.4285714285714286, t), new o1(this.r * t, this.g * t, this.b * t, this.opacity)
                },
                darker(t) {
                    return t = null == t ? .7 : Math.pow(.7, t), new o1(this.r * t, this.g * t, this.b * t, this.opacity)
                },
                rgb() {
                    return this
                },
                clamp() {
                    return new o1(o5(this.r), o5(this.g), o5(this.b), o3(this.opacity))
                },
                displayable() {
                    return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
                },
                hex: o2,
                formatHex: o2,
                formatHex8: function() {
                    return `#${o4(this.r)}${o4(this.g)}${o4(this.b)}${o4((isNaN(this.opacity)?1:this.opacity)*255)}`
                },
                formatRgb: o6,
                toString: o6
            })), oN(o9, function(t, e, r, n) {
                return 1 == arguments.length ? o8(t) : new o9(t, e, r, null == n ? 1 : n)
            }, oB(oL, {
                brighter(t) {
                    return t = null == t ? 1.4285714285714286 : Math.pow(1.4285714285714286, t), new o9(this.h, this.s, this.l * t, this.opacity)
                },
                darker(t) {
                    return t = null == t ? .7 : Math.pow(.7, t), new o9(this.h, this.s, this.l * t, this.opacity)
                },
                rgb() {
                    var t = this.h % 360 + (this.h < 0) * 360,
                        e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                        r = this.l,
                        n = r + (r < .5 ? r : 1 - r) * e,
                        o = 2 * r - n;
                    return new o1(ir(t >= 240 ? t - 240 : t + 120, o, n), ir(t, o, n), ir(t < 120 ? t + 240 : t - 120, o, n), this.opacity)
                },
                clamp() {
                    return new o9(it(this.h), ie(this.s), ie(this.l), o3(this.opacity))
                },
                displayable() {
                    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
                },
                formatHsl() {
                    let t = o3(this.opacity);
                    return `${1===t?"hsl(":"hsla("}${it(this.h)}, ${100*ie(this.s)}%, ${100*ie(this.l)}%${1===t?")":`, ${t})`}`
                }
            }));
            var ii = t => () => t;

            function ia(t, e) {
                var r = e - t;
                return r ? function(e) {
                    return t + e * r
                } : ii(isNaN(t) ? e : t)
            }
            var iu = function t(e) {
                var r, n = 1 == (r = +(r = e)) ? ia : function(t, e) {
                    var n, o, i;
                    return e - t ? (n = t, o = e, n = Math.pow(n, i = r), o = Math.pow(o, i) - n, i = 1 / i, function(t) {
                        return Math.pow(n + t * o, i)
                    }) : ii(isNaN(t) ? e : t)
                };

                function o(t, e) {
                    var r = n((t = o0(t)).r, (e = o0(e)).r),
                        o = n(t.g, e.g),
                        i = n(t.b, e.b),
                        a = ia(t.opacity, e.opacity);
                    return function(e) {
                        return t.r = r(e), t.g = o(e), t.b = i(e), t.opacity = a(e), t + ""
                    }
                }
                return o.gamma = t, o
            }(1);

            function ic(t) {
                return function(e) {
                    var r, n, o = e.length,
                        i = Array(o),
                        a = Array(o),
                        u = Array(o);
                    for (r = 0; r < o; ++r) n = o0(e[r]), i[r] = n.r || 0, a[r] = n.g || 0, u[r] = n.b || 0;
                    return i = t(i), a = t(a), u = t(u), n.opacity = 1,
                        function(t) {
                            return n.r = i(t), n.g = a(t), n.b = u(t), n + ""
                        }
                }
            }

            function il(t, e) {
                return t = +t, e = +e,
                    function(r) {
                        return t * (1 - r) + e * r
                    }
            }
            ic(function(t) {
                var e = t.length - 1;
                return function(r) {
                    var n = r <= 0 ? r = 0 : r >= 1 ? (r = 1, e - 1) : Math.floor(r * e),
                        o = t[n],
                        i = t[n + 1],
                        a = n > 0 ? t[n - 1] : 2 * o - i,
                        u = n < e - 1 ? t[n + 2] : 2 * i - o;
                    return io((r - n / e) * e, a, o, i, u)
                }
            }), ic(function(t) {
                var e = t.length;
                return function(r) {
                    var n = Math.floor(((r %= 1) < 0 ? ++r : r) * e),
                        o = t[(n + e - 1) % e],
                        i = t[n % e],
                        a = t[(n + 1) % e],
                        u = t[(n + 2) % e];
                    return io((r - n / e) * e, o, i, a, u)
                }
            });
            var is = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                ip = RegExp(is.source, "g");

            function ih(t, e) {
                var r, n, o = typeof e;
                return null == e || "boolean" === o ? ii(e) : ("number" === o ? il : "string" === o ? (n = oG(e)) ? (e = n, iu) : function(t, e) {
                    var r, n, o, i, a, u = is.lastIndex = ip.lastIndex = 0,
                        c = -1,
                        l = [],
                        s = [];
                    for (t += "", e += "";
                        (o = is.exec(t)) && (i = ip.exec(e));)(a = i.index) > u && (a = e.slice(u, a), l[c] ? l[c] += a : l[++c] = a), (o = o[0]) === (i = i[0]) ? l[c] ? l[c] += i : l[++c] = i : (l[++c] = null, s.push({
                        i: c,
                        x: il(o, i)
                    })), u = ip.lastIndex;
                    return u < e.length && (a = e.slice(u), l[c] ? l[c] += a : l[++c] = a), l.length < 2 ? s[0] ? (r = s[0].x, function(t) {
                        return r(t) + ""
                    }) : (n = e, function() {
                        return n
                    }) : (e = s.length, function(t) {
                        for (var r, n = 0; n < e; ++n) l[(r = s[n]).i] = r.x(t);
                        return l.join("")
                    })
                } : e instanceof oG ? iu : e instanceof Date ? function(t, e) {
                    var r = new Date;
                    return t = +t, e = +e,
                        function(n) {
                            return r.setTime(t * (1 - n) + e * n), r
                        }
                } : !ArrayBuffer.isView(r = e) || r instanceof DataView ? Array.isArray(e) ? function(t, e) {
                    var r, n = e ? e.length : 0,
                        o = t ? Math.min(n, t.length) : 0,
                        i = Array(o),
                        a = Array(n);
                    for (r = 0; r < o; ++r) i[r] = ih(t[r], e[r]);
                    for (; r < n; ++r) a[r] = e[r];
                    return function(t) {
                        for (r = 0; r < o; ++r) a[r] = i[r](t);
                        return a
                    }
                } : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? function(t, e) {
                    var r, n = {},
                        o = {};
                    for (r in (null === t || "object" != typeof t) && (t = {}), (null === e || "object" != typeof e) && (e = {}), e) r in t ? n[r] = ih(t[r], e[r]) : o[r] = e[r];
                    return function(t) {
                        for (r in n) o[r] = n[r](t);
                        return o
                    }
                } : il : function(t, e) {
                    e || (e = []);
                    var r, n = t ? Math.min(e.length, t.length) : 0,
                        o = e.slice();
                    return function(i) {
                        for (r = 0; r < n; ++r) o[r] = t[r] * (1 - i) + e[r] * i;
                        return o
                    }
                })(t, e)
            }

            function id(t, e) {
                return t = +t, e = +e,
                    function(r) {
                        return Math.round(t * (1 - r) + e * r)
                    }
            }

            function iy(t) {
                return +t
            }
            var iv = [0, 1];

            function im(t) {
                return t
            }

            function ib(t, e) {
                var r;
                return (e -= t = +t) ? function(r) {
                    return (r - t) / e
                } : (r = isNaN(e) ? NaN : .5, function() {
                    return r
                })
            }

            function ig(t, e, r) {
                var n = t[0],
                    o = t[1],
                    i = e[0],
                    a = e[1];
                return o < n ? (n = ib(o, n), i = r(a, i)) : (n = ib(n, o), i = r(i, a)),
                    function(t) {
                        return i(n(t))
                    }
            }

            function ix(t, e, r) {
                var n = Math.min(t.length, e.length) - 1,
                    o = Array(n),
                    i = Array(n),
                    a = -1;
                for (t[n] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < n;) o[a] = ib(t[a], t[a + 1]), i[a] = r(e[a], e[a + 1]);
                return function(e) {
                    var r = oD(t, e, 1, n) - 1;
                    return i[r](o[r](e))
                }
            }

            function iO(t, e) {
                return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
            }

            function iw() {
                var t, e, r, n, o, i, a = iv,
                    u = iv,
                    c = ih,
                    l = im;

                function s() {
                    var t, e, r, c = Math.min(a.length, u.length);
                    return l !== im && (t = a[0], e = a[c - 1], t > e && (r = t, t = e, e = r), l = function(r) {
                        return Math.max(t, Math.min(e, r))
                    }), n = c > 2 ? ix : ig, o = i = null, f
                }

                function f(e) {
                    return null == e || isNaN(e = +e) ? r : (o || (o = n(a.map(t), u, c)))(t(l(e)))
                }
                return f.invert = function(r) {
                        return l(e((i || (i = n(u, a.map(t), il)))(r)))
                    }, f.domain = function(t) {
                        return arguments.length ? (a = Array.from(t, iy), s()) : a.slice()
                    }, f.range = function(t) {
                        return arguments.length ? (u = Array.from(t), s()) : u.slice()
                    }, f.rangeRound = function(t) {
                        return u = Array.from(t), c = id, s()
                    }, f.clamp = function(t) {
                        return arguments.length ? (l = !!t || im, s()) : l !== im
                    }, f.interpolate = function(t) {
                        return arguments.length ? (c = t, s()) : c
                    }, f.unknown = function(t) {
                        return arguments.length ? (r = t, f) : r
                    },
                    function(r, n) {
                        return t = r, e = n, s()
                    }
            }

            function ij() {
                return iw()(im, im)
            }
            var iS = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

            function iA(t) {
                var e;
                if (!(e = iS.exec(t))) throw Error("invalid format: " + t);
                return new iP({
                    fill: e[1],
                    align: e[2],
                    sign: e[3],
                    symbol: e[4],
                    zero: e[5],
                    width: e[6],
                    comma: e[7],
                    precision: e[8] && e[8].slice(1),
                    trim: e[9],
                    type: e[10]
                })
            }

            function iP(t) {
                this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + ""
            }

            function iE(t, e) {
                if ((r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
                var r, n = t.slice(0, r);
                return [n.length > 1 ? n[0] + n.slice(2) : n, +t.slice(r + 1)]
            }

            function ik(t) {
                return (t = iE(Math.abs(t))) ? t[1] : NaN
            }

            function iM(t, e) {
                var r = iE(t, e);
                if (!r) return t + "";
                var n = r[0],
                    o = r[1];
                return o < 0 ? "0." + Array(-o).join("0") + n : n.length > o + 1 ? n.slice(0, o + 1) + "." + n.slice(o + 1) : n + Array(o - n.length + 2).join("0")
            }
            iA.prototype = iP.prototype, iP.prototype.toString = function() {
                return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
            };
            var i_ = {
                "%": (t, e) => (100 * t).toFixed(e),
                b: t => Math.round(t).toString(2),
                c: t => t + "",
                d: function(t) {
                    return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10)
                },
                e: (t, e) => t.toExponential(e),
                f: (t, e) => t.toFixed(e),
                g: (t, e) => t.toPrecision(e),
                o: t => Math.round(t).toString(8),
                p: (t, e) => iM(100 * t, e),
                r: iM,
                s: function(t, e) {
                    var r = iE(t, e);
                    if (!r) return t + "";
                    var n = r[0],
                        o = r[1],
                        i = o - (m = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
                        a = n.length;
                    return i === a ? n : i > a ? n + Array(i - a + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + Array(1 - i).join("0") + iE(t, Math.max(0, e + i - 1))[0]
                },
                X: t => Math.round(t).toString(16).toUpperCase(),
                x: t => Math.round(t).toString(16)
            };

            function iT(t) {
                return t
            }
            var iC = Array.prototype.map,
                iI = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

            function iD(t, e, r, n) {
                var o, i, a = oE(t, e, r);
                switch ((n = iA(null == n ? ",f" : n)).type) {
                    case "s":
                        var u = Math.max(Math.abs(t), Math.abs(e));
                        return null != n.precision || isNaN(i = Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(ik(u) / 3))) - ik(Math.abs(a)))) || (n.precision = i), x(n, u);
                    case "":
                    case "e":
                    case "g":
                    case "p":
                    case "r":
                        null != n.precision || isNaN(i = Math.max(0, ik(Math.abs(Math.max(Math.abs(t), Math.abs(e))) - (o = Math.abs(o = a))) - ik(o)) + 1) || (n.precision = i - ("e" === n.type));
                        break;
                    case "f":
                    case "%":
                        null != n.precision || isNaN(i = Math.max(0, -ik(Math.abs(a)))) || (n.precision = i - ("%" === n.type) * 2)
                }
                return g(n)
            }

            function iN(t) {
                var e = t.domain;
                return t.ticks = function(t) {
                    var r = e();
                    return oA(r[0], r[r.length - 1], null == t ? 10 : t)
                }, t.tickFormat = function(t, r) {
                    var n = e();
                    return iD(n[0], n[n.length - 1], null == t ? 10 : t, r)
                }, t.nice = function(r) {
                    null == r && (r = 10);
                    var n, o, i = e(),
                        a = 0,
                        u = i.length - 1,
                        c = i[a],
                        l = i[u],
                        s = 10;
                    for (l < c && (o = c, c = l, l = o, o = a, a = u, u = o); s-- > 0;) {
                        if ((o = oP(c, l, r)) === n) return i[a] = c, i[u] = l, e(i);
                        if (o > 0) c = Math.floor(c / o) * o, l = Math.ceil(l / o) * o;
                        else if (o < 0) c = Math.ceil(c * o) / o, l = Math.floor(l * o) / o;
                        else break;
                        n = o
                    }
                    return t
                }, t
            }

            function iB() {
                var t = ij();
                return t.copy = function() {
                    return iO(t, iB())
                }, nF.apply(t, arguments), iN(t)
            }

            function iL(t, e) {
                t = t.slice();
                var r, n = 0,
                    o = t.length - 1,
                    i = t[n],
                    a = t[o];
                return a < i && (r = n, n = o, o = r, r = i, i = a, a = r), t[n] = e.floor(i), t[o] = e.ceil(a), t
            }

            function iR(t) {
                return Math.log(t)
            }

            function i$(t) {
                return Math.exp(t)
            }

            function iz(t) {
                return -Math.log(-t)
            }

            function iU(t) {
                return -Math.exp(-t)
            }

            function iF(t) {
                return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
            }

            function iW(t) {
                return (e, r) => -t(-e, r)
            }

            function iq(t) {
                let e, r;
                let n = t(iR, i$),
                    o = n.domain,
                    i = 10;

                function a() {
                    var a, u;
                    return e = (a = i) === Math.E ? Math.log : 10 === a && Math.log10 || 2 === a && Math.log2 || (a = Math.log(a), t => Math.log(t) / a), r = 10 === (u = i) ? iF : u === Math.E ? Math.exp : t => Math.pow(u, t), o()[0] < 0 ? (e = iW(e), r = iW(r), t(iz, iU)) : t(iR, i$), n
                }
                return n.base = function(t) {
                    return arguments.length ? (i = +t, a()) : i
                }, n.domain = function(t) {
                    return arguments.length ? (o(t), a()) : o()
                }, n.ticks = t => {
                    let n, a;
                    let u = o(),
                        c = u[0],
                        l = u[u.length - 1],
                        s = l < c;
                    s && ([c, l] = [l, c]);
                    let f = e(c),
                        p = e(l),
                        h = null == t ? 10 : +t,
                        d = [];
                    if (!(i % 1) && p - f < h) {
                        if (f = Math.floor(f), p = Math.ceil(p), c > 0) {
                            for (; f <= p; ++f)
                                for (n = 1; n < i; ++n)
                                    if (!((a = f < 0 ? n / r(-f) : n * r(f)) < c)) {
                                        if (a > l) break;
                                        d.push(a)
                                    }
                        } else
                            for (; f <= p; ++f)
                                for (n = i - 1; n >= 1; --n)
                                    if (!((a = f > 0 ? n / r(-f) : n * r(f)) < c)) {
                                        if (a > l) break;
                                        d.push(a)
                                    }
                        2 * d.length < h && (d = oA(c, l, h))
                    } else d = oA(f, p, Math.min(p - f, h)).map(r);
                    return s ? d.reverse() : d
                }, n.tickFormat = (t, o) => {
                    if (null == t && (t = 10), null == o && (o = 10 === i ? "s" : ","), "function" != typeof o && (i % 1 || null != (o = iA(o)).precision || (o.trim = !0), o = g(o)), t === 1 / 0) return o;
                    let a = Math.max(1, i * t / n.ticks().length);
                    return t => {
                        let n = t / r(Math.round(e(t)));
                        return n * i < i - .5 && (n *= i), n <= a ? o(t) : ""
                    }
                }, n.nice = () => o(iL(o(), {
                    floor: t => r(Math.floor(e(t))),
                    ceil: t => r(Math.ceil(e(t)))
                })), n
            }

            function iX(t) {
                return function(e) {
                    return Math.sign(e) * Math.log1p(Math.abs(e / t))
                }
            }

            function iH(t) {
                return function(e) {
                    return Math.sign(e) * Math.expm1(Math.abs(e)) * t
                }
            }

            function iV(t) {
                var e = 1,
                    r = t(iX(1), iH(e));
                return r.constant = function(r) {
                    return arguments.length ? t(iX(e = +r), iH(e)) : e
                }, iN(r)
            }

            function iZ(t) {
                return function(e) {
                    return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t)
                }
            }

            function iY(t) {
                return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t)
            }

            function iK(t) {
                return t < 0 ? -t * t : t * t
            }

            function iG(t) {
                var e = t(im, im),
                    r = 1;
                return e.exponent = function(e) {
                    return arguments.length ? 1 == (r = +e) ? t(im, im) : .5 === r ? t(iY, iK) : t(iZ(r), iZ(1 / r)) : r
                }, iN(e)
            }

            function iJ() {
                var t = iG(iw());
                return t.copy = function() {
                    return iO(t, iJ()).exponent(t.exponent())
                }, nF.apply(t, arguments), t
            }

            function iQ() {
                return iJ.apply(null, arguments).exponent(.5)
            }

            function i0(t) {
                return Math.sign(t) * t * t
            }

            function i1(t, e) {
                let r;
                if (void 0 === e)
                    for (let e of t) null != e && (r < e || void 0 === r && e >= e) && (r = e);
                else {
                    let n = -1;
                    for (let o of t) null != (o = e(o, ++n, t)) && (r < o || void 0 === r && o >= o) && (r = o)
                }
                return r
            }

            function i2(t, e) {
                let r;
                if (void 0 === e)
                    for (let e of t) null != e && (r > e || void 0 === r && e >= e) && (r = e);
                else {
                    let n = -1;
                    for (let o of t) null != (o = e(o, ++n, t)) && (r > o || void 0 === r && o >= o) && (r = o)
                }
                return r
            }

            function i6(t, e) {
                return (null == t || !(t >= t)) - (null == e || !(e >= e)) || (t < e ? -1 : t > e ? 1 : 0)
            }

            function i3(t, e, r) {
                let n = t[e];
                t[e] = t[r], t[r] = n
            }
            g = (b = function(t) {
                var e, r, n, o = void 0 === t.grouping || void 0 === t.thousands ? iT : (e = iC.call(t.grouping, Number), r = t.thousands + "", function(t, n) {
                        for (var o = t.length, i = [], a = 0, u = e[0], c = 0; o > 0 && u > 0 && (c + u + 1 > n && (u = Math.max(1, n - c)), i.push(t.substring(o -= u, o + u)), !((c += u + 1) > n));) u = e[a = (a + 1) % e.length];
                        return i.reverse().join(r)
                    }),
                    i = void 0 === t.currency ? "" : t.currency[0] + "",
                    a = void 0 === t.currency ? "" : t.currency[1] + "",
                    u = void 0 === t.decimal ? "." : t.decimal + "",
                    c = void 0 === t.numerals ? iT : (n = iC.call(t.numerals, String), function(t) {
                        return t.replace(/[0-9]/g, function(t) {
                            return n[+t]
                        })
                    }),
                    l = void 0 === t.percent ? "%" : t.percent + "",
                    s = void 0 === t.minus ? "−" : t.minus + "",
                    f = void 0 === t.nan ? "NaN" : t.nan + "";

                function p(t) {
                    var e = (t = iA(t)).fill,
                        r = t.align,
                        n = t.sign,
                        p = t.symbol,
                        h = t.zero,
                        d = t.width,
                        y = t.comma,
                        v = t.precision,
                        b = t.trim,
                        g = t.type;
                    "n" === g ? (y = !0, g = "g") : i_[g] || (void 0 === v && (v = 12), b = !0, g = "g"), (h || "0" === e && "=" === r) && (h = !0, e = "0", r = "=");
                    var x = "$" === p ? i : "#" === p && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "",
                        O = "$" === p ? a : /[%p]/.test(g) ? l : "",
                        w = i_[g],
                        j = /[defgprs%]/.test(g);

                    function S(t) {
                        var i, a, l, p = x,
                            S = O;
                        if ("c" === g) S = w(t) + S, t = "";
                        else {
                            var A = (t = +t) < 0 || 1 / t < 0;
                            if (t = isNaN(t) ? f : w(Math.abs(t), v), b && (t = function(t) {
                                    e: for (var e, r = t.length, n = 1, o = -1; n < r; ++n) switch (t[n]) {
                                        case ".":
                                            o = e = n;
                                            break;
                                        case "0":
                                            0 === o && (o = n), e = n;
                                            break;
                                        default:
                                            if (!+t[n]) break e;
                                            o > 0 && (o = 0)
                                    }
                                    return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t
                                }(t)), A && 0 == +t && "+" !== n && (A = !1), p = (A ? "(" === n ? n : s : "-" === n || "(" === n ? "" : n) + p, S = ("s" === g ? iI[8 + m / 3] : "") + S + (A && "(" === n ? ")" : ""), j) {
                                for (i = -1, a = t.length; ++i < a;)
                                    if (48 > (l = t.charCodeAt(i)) || l > 57) {
                                        S = (46 === l ? u + t.slice(i + 1) : t.slice(i)) + S, t = t.slice(0, i);
                                        break
                                    }
                            }
                        }
                        y && !h && (t = o(t, 1 / 0));
                        var P = p.length + t.length + S.length,
                            E = P < d ? Array(d - P + 1).join(e) : "";
                        switch (y && h && (t = o(E + t, E.length ? d - S.length : 1 / 0), E = ""), r) {
                            case "<":
                                t = p + t + S + E;
                                break;
                            case "=":
                                t = p + E + t + S;
                                break;
                            case "^":
                                t = E.slice(0, P = E.length >> 1) + p + t + S + E.slice(P);
                                break;
                            default:
                                t = E + p + t + S
                        }
                        return c(t)
                    }
                    return v = void 0 === v ? 6 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, v)) : Math.max(0, Math.min(20, v)), S.toString = function() {
                        return t + ""
                    }, S
                }
                return {
                    format: p,
                    formatPrefix: function(t, e) {
                        var r = p(((t = iA(t)).type = "f", t)),
                            n = 3 * Math.max(-8, Math.min(8, Math.floor(ik(e) / 3))),
                            o = Math.pow(10, -n),
                            i = iI[8 + n / 3];
                        return function(t) {
                            return r(o * t) + i
                        }
                    }
                }
            }({
                thousands: ",",
                grouping: [3],
                currency: ["$", ""]
            })).format, x = b.formatPrefix;
            let i5 = new Date,
                i4 = new Date;

            function i7(t, e, r, n) {
                function o(e) {
                    return t(e = 0 == arguments.length ? new Date : new Date(+e)), e
                }
                return o.floor = e => (t(e = new Date(+e)), e), o.ceil = r => (t(r = new Date(r - 1)), e(r, 1), t(r), r), o.round = t => {
                    let e = o(t),
                        r = o.ceil(t);
                    return t - e < r - t ? e : r
                }, o.offset = (t, r) => (e(t = new Date(+t), null == r ? 1 : Math.floor(r)), t), o.range = (r, n, i) => {
                    let a;
                    let u = [];
                    if (r = o.ceil(r), i = null == i ? 1 : Math.floor(i), !(r < n) || !(i > 0)) return u;
                    do u.push(a = new Date(+r)), e(r, i), t(r); while (a < r && r < n);
                    return u
                }, o.filter = r => i7(e => {
                    if (e >= e)
                        for (; t(e), !r(e);) e.setTime(e - 1)
                }, (t, n) => {
                    if (t >= t) {
                        if (n < 0)
                            for (; ++n <= 0;)
                                for (; e(t, -1), !r(t););
                        else
                            for (; --n >= 0;)
                                for (; e(t, 1), !r(t););
                    }
                }), r && (o.count = (e, n) => (i5.setTime(+e), i4.setTime(+n), t(i5), t(i4), Math.floor(r(i5, i4))), o.every = t => isFinite(t = Math.floor(t)) && t > 0 ? t > 1 ? o.filter(n ? e => n(e) % t == 0 : e => o.count(0, e) % t == 0) : o : null), o
            }
            let i8 = i7(() => {}, (t, e) => {
                t.setTime(+t + e)
            }, (t, e) => e - t);
            i8.every = t => isFinite(t = Math.floor(t)) && t > 0 ? t > 1 ? i7(e => {
                e.setTime(Math.floor(e / t) * t)
            }, (e, r) => {
                e.setTime(+e + r * t)
            }, (e, r) => (r - e) / t) : i8 : null, i8.range;
            let i9 = i7(t => {
                t.setTime(t - t.getMilliseconds())
            }, (t, e) => {
                t.setTime(+t + 1e3 * e)
            }, (t, e) => (e - t) / 1e3, t => t.getUTCSeconds());
            i9.range;
            let at = i7(t => {
                t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds())
            }, (t, e) => {
                t.setTime(+t + 6e4 * e)
            }, (t, e) => (e - t) / 6e4, t => t.getMinutes());
            at.range;
            let ae = i7(t => {
                t.setUTCSeconds(0, 0)
            }, (t, e) => {
                t.setTime(+t + 6e4 * e)
            }, (t, e) => (e - t) / 6e4, t => t.getUTCMinutes());
            ae.range;
            let ar = i7(t => {
                t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds() - 6e4 * t.getMinutes())
            }, (t, e) => {
                t.setTime(+t + 36e5 * e)
            }, (t, e) => (e - t) / 36e5, t => t.getHours());
            ar.range;
            let an = i7(t => {
                t.setUTCMinutes(0, 0, 0)
            }, (t, e) => {
                t.setTime(+t + 36e5 * e)
            }, (t, e) => (e - t) / 36e5, t => t.getUTCHours());
            an.range;
            let ao = i7(t => t.setHours(0, 0, 0, 0), (t, e) => t.setDate(t.getDate() + e), (t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 864e5, t => t.getDate() - 1);
            ao.range;
            let ai = i7(t => {
                t.setUTCHours(0, 0, 0, 0)
            }, (t, e) => {
                t.setUTCDate(t.getUTCDate() + e)
            }, (t, e) => (e - t) / 864e5, t => t.getUTCDate() - 1);
            ai.range;
            let aa = i7(t => {
                t.setUTCHours(0, 0, 0, 0)
            }, (t, e) => {
                t.setUTCDate(t.getUTCDate() + e)
            }, (t, e) => (e - t) / 864e5, t => Math.floor(t / 864e5));

            function au(t) {
                return i7(e => {
                    e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0)
                }, (t, e) => {
                    t.setDate(t.getDate() + 7 * e)
                }, (t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 6048e5)
            }
            aa.range;
            let ac = au(0),
                al = au(1),
                as = au(2),
                af = au(3),
                ap = au(4),
                ah = au(5),
                ad = au(6);

            function ay(t) {
                return i7(e => {
                    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0)
                }, (t, e) => {
                    t.setUTCDate(t.getUTCDate() + 7 * e)
                }, (t, e) => (e - t) / 6048e5)
            }
            ac.range, al.range, as.range, af.range, ap.range, ah.range, ad.range;
            let av = ay(0),
                am = ay(1),
                ab = ay(2),
                ag = ay(3),
                ax = ay(4),
                aO = ay(5),
                aw = ay(6);
            av.range, am.range, ab.range, ag.range, ax.range, aO.range, aw.range;
            let aj = i7(t => {
                t.setDate(1), t.setHours(0, 0, 0, 0)
            }, (t, e) => {
                t.setMonth(t.getMonth() + e)
            }, (t, e) => e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12, t => t.getMonth());
            aj.range;
            let aS = i7(t => {
                t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
            }, (t, e) => {
                t.setUTCMonth(t.getUTCMonth() + e)
            }, (t, e) => e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12, t => t.getUTCMonth());
            aS.range;
            let aA = i7(t => {
                t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
            }, (t, e) => {
                t.setFullYear(t.getFullYear() + e)
            }, (t, e) => e.getFullYear() - t.getFullYear(), t => t.getFullYear());
            aA.every = t => isFinite(t = Math.floor(t)) && t > 0 ? i7(e => {
                e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
            }, (e, r) => {
                e.setFullYear(e.getFullYear() + r * t)
            }) : null, aA.range;
            let aP = i7(t => {
                t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
            }, (t, e) => {
                t.setUTCFullYear(t.getUTCFullYear() + e)
            }, (t, e) => e.getUTCFullYear() - t.getUTCFullYear(), t => t.getUTCFullYear());

            function aE(t, e, r, n, o, i) {
                let a = [
                    [i9, 1, 1e3],
                    [i9, 5, 5e3],
                    [i9, 15, 15e3],
                    [i9, 30, 3e4],
                    [i, 1, 6e4],
                    [i, 5, 3e5],
                    [i, 15, 9e5],
                    [i, 30, 18e5],
                    [o, 1, 36e5],
                    [o, 3, 108e5],
                    [o, 6, 216e5],
                    [o, 12, 432e5],
                    [n, 1, 864e5],
                    [n, 2, 1728e5],
                    [r, 1, 6048e5],
                    [e, 1, 2592e6],
                    [e, 3, 7776e6],
                    [t, 1, 31536e6]
                ];

                function u(e, r, n) {
                    let o = Math.abs(r - e) / n,
                        i = o_(([, , t]) => t).right(a, o);
                    if (i === a.length) return t.every(oE(e / 31536e6, r / 31536e6, n));
                    if (0 === i) return i8.every(Math.max(oE(e, r, n), 1));
                    let [u, c] = a[o / a[i - 1][2] < a[i][2] / o ? i - 1 : i];
                    return u.every(c)
                }
                return [function(t, e, r) {
                    let n = e < t;
                    n && ([t, e] = [e, t]);
                    let o = r && "function" == typeof r.range ? r : u(t, e, r),
                        i = o ? o.range(t, +e + 1) : [];
                    return n ? i.reverse() : i
                }, u]
            }
            aP.every = t => isFinite(t = Math.floor(t)) && t > 0 ? i7(e => {
                e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
            }, (e, r) => {
                e.setUTCFullYear(e.getUTCFullYear() + r * t)
            }) : null, aP.range;
            let [ak, aM] = aE(aP, aS, av, aa, an, ae), [a_, aT] = aE(aA, aj, ac, ao, ar, at);

            function aC(t) {
                if (0 <= t.y && t.y < 100) {
                    var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                    return e.setFullYear(t.y), e
                }
                return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
            }

            function aI(t) {
                if (0 <= t.y && t.y < 100) {
                    var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                    return e.setUTCFullYear(t.y), e
                }
                return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
            }

            function aD(t, e, r) {
                return {
                    y: t,
                    m: e,
                    d: r,
                    H: 0,
                    M: 0,
                    S: 0,
                    L: 0
                }
            }
            var aN = {
                    "-": "",
                    _: " ",
                    0: "0"
                },
                aB = /^\s*\d+/,
                aL = /^%/,
                aR = /[\\^$*+?|[\]().{}]/g;

            function a$(t, e, r) {
                var n = t < 0 ? "-" : "",
                    o = (n ? -t : t) + "",
                    i = o.length;
                return n + (i < r ? Array(r - i + 1).join(e) + o : o)
            }

            function az(t) {
                return t.replace(aR, "\\$&")
            }

            function aU(t) {
                return RegExp("^(?:" + t.map(az).join("|") + ")", "i")
            }

            function aF(t) {
                return new Map(t.map((t, e) => [t.toLowerCase(), e]))
            }

            function aW(t, e, r) {
                var n = aB.exec(e.slice(r, r + 1));
                return n ? (t.w = +n[0], r + n[0].length) : -1
            }

            function aq(t, e, r) {
                var n = aB.exec(e.slice(r, r + 1));
                return n ? (t.u = +n[0], r + n[0].length) : -1
            }

            function aX(t, e, r) {
                var n = aB.exec(e.slice(r, r + 2));
                return n ? (t.U = +n[0], r + n[0].length) : -1
            }

            function aH(t, e, r) {
                var n = aB.exec(e.slice(r, r + 2));
                return n ? (t.V = +n[0], r + n[0].length) : -1
            }

            function aV(t, e, r) {
                var n = aB.exec(e.slice(r, r + 2));
                return n ? (t.W = +n[0], r + n[0].length) : -1
            }

            function aZ(t, e, r) {
                var n = aB.exec(e.slice(r, r + 4));
                return n ? (t.y = +n[0], r + n[0].length) : -1
            }

            function aY(t, e, r) {
                var n = aB.exec(e.slice(r, r + 2));
                return n ? (t.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1
            }

            function aK(t, e, r) {
                var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(r, r + 6));
                return n ? (t.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1
            }

            function aG(t, e, r) {
                var n = aB.exec(e.slice(r, r + 1));
                return n ? (t.q = 3 * n[0] - 3, r + n[0].length) : -1
            }

            function aJ(t, e, r) {
                var n = aB.exec(e.slice(r, r + 2));
                return n ? (t.m = n[0] - 1, r + n[0].length) : -1
            }

            function aQ(t, e, r) {
                var n = aB.exec(e.slice(r, r + 2));
                return n ? (t.d = +n[0], r + n[0].length) : -1
            }

            function a0(t, e, r) {
                var n = aB.exec(e.slice(r, r + 3));
                return n ? (t.m = 0, t.d = +n[0], r + n[0].length) : -1
            }

            function a1(t, e, r) {
                var n = aB.exec(e.slice(r, r + 2));
                return n ? (t.H = +n[0], r + n[0].length) : -1
            }

            function a2(t, e, r) {
                var n = aB.exec(e.slice(r, r + 2));
                return n ? (t.M = +n[0], r + n[0].length) : -1
            }

            function a6(t, e, r) {
                var n = aB.exec(e.slice(r, r + 2));
                return n ? (t.S = +n[0], r + n[0].length) : -1
            }

            function a3(t, e, r) {
                var n = aB.exec(e.slice(r, r + 3));
                return n ? (t.L = +n[0], r + n[0].length) : -1
            }

            function a5(t, e, r) {
                var n = aB.exec(e.slice(r, r + 6));
                return n ? (t.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1
            }

            function a4(t, e, r) {
                var n = aL.exec(e.slice(r, r + 1));
                return n ? r + n[0].length : -1
            }

            function a7(t, e, r) {
                var n = aB.exec(e.slice(r));
                return n ? (t.Q = +n[0], r + n[0].length) : -1
            }

            function a8(t, e, r) {
                var n = aB.exec(e.slice(r));
                return n ? (t.s = +n[0], r + n[0].length) : -1
            }

            function a9(t, e) {
                return a$(t.getDate(), e, 2)
            }

            function ut(t, e) {
                return a$(t.getHours(), e, 2)
            }

            function ue(t, e) {
                return a$(t.getHours() % 12 || 12, e, 2)
            }

            function ur(t, e) {
                return a$(1 + ao.count(aA(t), t), e, 3)
            }

            function un(t, e) {
                return a$(t.getMilliseconds(), e, 3)
            }

            function uo(t, e) {
                return un(t, e) + "000"
            }

            function ui(t, e) {
                return a$(t.getMonth() + 1, e, 2)
            }

            function ua(t, e) {
                return a$(t.getMinutes(), e, 2)
            }

            function uu(t, e) {
                return a$(t.getSeconds(), e, 2)
            }

            function uc(t) {
                var e = t.getDay();
                return 0 === e ? 7 : e
            }

            function ul(t, e) {
                return a$(ac.count(aA(t) - 1, t), e, 2)
            }

            function us(t) {
                var e = t.getDay();
                return e >= 4 || 0 === e ? ap(t) : ap.ceil(t)
            }

            function uf(t, e) {
                return t = us(t), a$(ap.count(aA(t), t) + (4 === aA(t).getDay()), e, 2)
            }

            function up(t) {
                return t.getDay()
            }

            function uh(t, e) {
                return a$(al.count(aA(t) - 1, t), e, 2)
            }

            function ud(t, e) {
                return a$(t.getFullYear() % 100, e, 2)
            }

            function uy(t, e) {
                return a$((t = us(t)).getFullYear() % 100, e, 2)
            }

            function uv(t, e) {
                return a$(t.getFullYear() % 1e4, e, 4)
            }

            function um(t, e) {
                var r = t.getDay();
                return a$((t = r >= 4 || 0 === r ? ap(t) : ap.ceil(t)).getFullYear() % 1e4, e, 4)
            }

            function ub(t) {
                var e = t.getTimezoneOffset();
                return (e > 0 ? "-" : (e *= -1, "+")) + a$(e / 60 | 0, "0", 2) + a$(e % 60, "0", 2)
            }

            function ug(t, e) {
                return a$(t.getUTCDate(), e, 2)
            }

            function ux(t, e) {
                return a$(t.getUTCHours(), e, 2)
            }

            function uO(t, e) {
                return a$(t.getUTCHours() % 12 || 12, e, 2)
            }

            function uw(t, e) {
                return a$(1 + ai.count(aP(t), t), e, 3)
            }

            function uj(t, e) {
                return a$(t.getUTCMilliseconds(), e, 3)
            }

            function uS(t, e) {
                return uj(t, e) + "000"
            }

            function uA(t, e) {
                return a$(t.getUTCMonth() + 1, e, 2)
            }

            function uP(t, e) {
                return a$(t.getUTCMinutes(), e, 2)
            }

            function uE(t, e) {
                return a$(t.getUTCSeconds(), e, 2)
            }

            function uk(t) {
                var e = t.getUTCDay();
                return 0 === e ? 7 : e
            }

            function uM(t, e) {
                return a$(av.count(aP(t) - 1, t), e, 2)
            }

            function u_(t) {
                var e = t.getUTCDay();
                return e >= 4 || 0 === e ? ax(t) : ax.ceil(t)
            }

            function uT(t, e) {
                return t = u_(t), a$(ax.count(aP(t), t) + (4 === aP(t).getUTCDay()), e, 2)
            }

            function uC(t) {
                return t.getUTCDay()
            }

            function uI(t, e) {
                return a$(am.count(aP(t) - 1, t), e, 2)
            }

            function uD(t, e) {
                return a$(t.getUTCFullYear() % 100, e, 2)
            }

            function uN(t, e) {
                return a$((t = u_(t)).getUTCFullYear() % 100, e, 2)
            }

            function uB(t, e) {
                return a$(t.getUTCFullYear() % 1e4, e, 4)
            }

            function uL(t, e) {
                var r = t.getUTCDay();
                return a$((t = r >= 4 || 0 === r ? ax(t) : ax.ceil(t)).getUTCFullYear() % 1e4, e, 4)
            }

            function uR() {
                return "+0000"
            }

            function u$() {
                return "%"
            }

            function uz(t) {
                return +t
            }

            function uU(t) {
                return Math.floor(+t / 1e3)
            }

            function uF(t) {
                return new Date(t)
            }

            function uW(t) {
                return t instanceof Date ? +t : +new Date(+t)
            }

            function uq(t, e, r, n, o, i, a, u, c, l) {
                var s = ij(),
                    f = s.invert,
                    p = s.domain,
                    h = l(".%L"),
                    d = l(":%S"),
                    y = l("%I:%M"),
                    v = l("%I %p"),
                    m = l("%a %d"),
                    b = l("%b %d"),
                    g = l("%B"),
                    x = l("%Y");

                function O(t) {
                    return (c(t) < t ? h : u(t) < t ? d : a(t) < t ? y : i(t) < t ? v : n(t) < t ? o(t) < t ? m : b : r(t) < t ? g : x)(t)
                }
                return s.invert = function(t) {
                    return new Date(f(t))
                }, s.domain = function(t) {
                    return arguments.length ? p(Array.from(t, uW)) : p().map(uF)
                }, s.ticks = function(e) {
                    var r = p();
                    return t(r[0], r[r.length - 1], null == e ? 10 : e)
                }, s.tickFormat = function(t, e) {
                    return null == e ? O : l(e)
                }, s.nice = function(t) {
                    var r = p();
                    return t && "function" == typeof t.range || (t = e(r[0], r[r.length - 1], null == t ? 10 : t)), t ? p(iL(r, t)) : s
                }, s.copy = function() {
                    return iO(s, uq(t, e, r, n, o, i, a, u, c, l))
                }, s
            }

            function uX() {
                return nF.apply(uq(a_, aT, aA, aj, ac, ao, ar, at, i9, w).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
            }

            function uH() {
                return nF.apply(uq(ak, aM, aP, aS, av, ai, an, ae, i9, j).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
            }

            function uV() {
                var t, e, r, n, o, i = 0,
                    a = 1,
                    u = im,
                    c = !1;

                function l(e) {
                    return null == e || isNaN(e = +e) ? o : u(0 === r ? .5 : (e = (n(e) - t) * r, c ? Math.max(0, Math.min(1, e)) : e))
                }

                function s(t) {
                    return function(e) {
                        var r, n;
                        return arguments.length ? ([r, n] = e, u = t(r, n), l) : [u(0), u(1)]
                    }
                }
                return l.domain = function(o) {
                        return arguments.length ? ([i, a] = o, t = n(i = +i), e = n(a = +a), r = t === e ? 0 : 1 / (e - t), l) : [i, a]
                    }, l.clamp = function(t) {
                        return arguments.length ? (c = !!t, l) : c
                    }, l.interpolator = function(t) {
                        return arguments.length ? (u = t, l) : u
                    }, l.range = s(ih), l.rangeRound = s(id), l.unknown = function(t) {
                        return arguments.length ? (o = t, l) : o
                    },
                    function(o) {
                        return n = o, t = o(i), e = o(a), r = t === e ? 0 : 1 / (e - t), l
                    }
            }

            function uZ(t, e) {
                return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())
            }

            function uY() {
                var t = iG(uV());
                return t.copy = function() {
                    return uZ(t, uY()).exponent(t.exponent())
                }, nW.apply(t, arguments)
            }

            function uK() {
                return uY.apply(null, arguments).exponent(.5)
            }

            function uG() {
                var t, e, r, n, o, i, a, u = 0,
                    c = .5,
                    l = 1,
                    s = 1,
                    f = im,
                    p = !1;

                function h(t) {
                    return isNaN(t = +t) ? a : (t = .5 + ((t = +i(t)) - e) * (s * t < s * e ? n : o), f(p ? Math.max(0, Math.min(1, t)) : t))
                }

                function d(t) {
                    return function(e) {
                        var r, n, o;
                        return arguments.length ? ([r, n, o] = e, f = function(t, e) {
                            void 0 === e && (e = t, t = ih);
                            for (var r = 0, n = e.length - 1, o = e[0], i = Array(n < 0 ? 0 : n); r < n;) i[r] = t(o, o = e[++r]);
                            return function(t) {
                                var e = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
                                return i[e](t - e)
                            }
                        }(t, [r, n, o]), h) : [f(0), f(.5), f(1)]
                    }
                }
                return h.domain = function(a) {
                        return arguments.length ? ([u, c, l] = a, t = i(u = +u), e = i(c = +c), r = i(l = +l), n = t === e ? 0 : .5 / (e - t), o = e === r ? 0 : .5 / (r - e), s = e < t ? -1 : 1, h) : [u, c, l]
                    }, h.clamp = function(t) {
                        return arguments.length ? (p = !!t, h) : p
                    }, h.interpolator = function(t) {
                        return arguments.length ? (f = t, h) : f
                    }, h.range = d(ih), h.rangeRound = d(id), h.unknown = function(t) {
                        return arguments.length ? (a = t, h) : a
                    },
                    function(a) {
                        return i = a, t = a(u), e = a(c), r = a(l), n = t === e ? 0 : .5 / (e - t), o = e === r ? 0 : .5 / (r - e), s = e < t ? -1 : 1, h
                    }
            }

            function uJ() {
                var t = iG(uG());
                return t.copy = function() {
                    return uZ(t, uJ()).exponent(t.exponent())
                }, nW.apply(t, arguments)
            }

            function uQ() {
                return uJ.apply(null, arguments).exponent(.5)
            }

            function u0(t, e) {
                if ((o = t.length) > 1)
                    for (var r, n, o, i = 1, a = t[e[0]], u = a.length; i < o; ++i)
                        for (n = a, a = t[e[i]], r = 0; r < u; ++r) a[r][1] += a[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1]
            }

            function u1(t) {
                return "object" == typeof t && "length" in t ? t : Array.from(t)
            }

            function u2(t) {
                for (var e = t.length, r = Array(e); --e >= 0;) r[e] = e;
                return r
            }

            function u6(t, e) {
                return t[e]
            }

            function u3(t) {
                let e = [];
                return e.key = t, e
            }
            w = (O = function(t) {
                var e = t.dateTime,
                    r = t.date,
                    n = t.time,
                    o = t.periods,
                    i = t.days,
                    a = t.shortDays,
                    u = t.months,
                    c = t.shortMonths,
                    l = aU(o),
                    s = aF(o),
                    f = aU(i),
                    p = aF(i),
                    h = aU(a),
                    d = aF(a),
                    y = aU(u),
                    v = aF(u),
                    m = aU(c),
                    b = aF(c),
                    g = {
                        a: function(t) {
                            return a[t.getDay()]
                        },
                        A: function(t) {
                            return i[t.getDay()]
                        },
                        b: function(t) {
                            return c[t.getMonth()]
                        },
                        B: function(t) {
                            return u[t.getMonth()]
                        },
                        c: null,
                        d: a9,
                        e: a9,
                        f: uo,
                        g: uy,
                        G: um,
                        H: ut,
                        I: ue,
                        j: ur,
                        L: un,
                        m: ui,
                        M: ua,
                        p: function(t) {
                            return o[+(t.getHours() >= 12)]
                        },
                        q: function(t) {
                            return 1 + ~~(t.getMonth() / 3)
                        },
                        Q: uz,
                        s: uU,
                        S: uu,
                        u: uc,
                        U: ul,
                        V: uf,
                        w: up,
                        W: uh,
                        x: null,
                        X: null,
                        y: ud,
                        Y: uv,
                        Z: ub,
                        "%": u$
                    },
                    x = {
                        a: function(t) {
                            return a[t.getUTCDay()]
                        },
                        A: function(t) {
                            return i[t.getUTCDay()]
                        },
                        b: function(t) {
                            return c[t.getUTCMonth()]
                        },
                        B: function(t) {
                            return u[t.getUTCMonth()]
                        },
                        c: null,
                        d: ug,
                        e: ug,
                        f: uS,
                        g: uN,
                        G: uL,
                        H: ux,
                        I: uO,
                        j: uw,
                        L: uj,
                        m: uA,
                        M: uP,
                        p: function(t) {
                            return o[+(t.getUTCHours() >= 12)]
                        },
                        q: function(t) {
                            return 1 + ~~(t.getUTCMonth() / 3)
                        },
                        Q: uz,
                        s: uU,
                        S: uE,
                        u: uk,
                        U: uM,
                        V: uT,
                        w: uC,
                        W: uI,
                        x: null,
                        X: null,
                        y: uD,
                        Y: uB,
                        Z: uR,
                        "%": u$
                    },
                    O = {
                        a: function(t, e, r) {
                            var n = h.exec(e.slice(r));
                            return n ? (t.w = d.get(n[0].toLowerCase()), r + n[0].length) : -1
                        },
                        A: function(t, e, r) {
                            var n = f.exec(e.slice(r));
                            return n ? (t.w = p.get(n[0].toLowerCase()), r + n[0].length) : -1
                        },
                        b: function(t, e, r) {
                            var n = m.exec(e.slice(r));
                            return n ? (t.m = b.get(n[0].toLowerCase()), r + n[0].length) : -1
                        },
                        B: function(t, e, r) {
                            var n = y.exec(e.slice(r));
                            return n ? (t.m = v.get(n[0].toLowerCase()), r + n[0].length) : -1
                        },
                        c: function(t, r, n) {
                            return S(t, e, r, n)
                        },
                        d: aQ,
                        e: aQ,
                        f: a5,
                        g: aY,
                        G: aZ,
                        H: a1,
                        I: a1,
                        j: a0,
                        L: a3,
                        m: aJ,
                        M: a2,
                        p: function(t, e, r) {
                            var n = l.exec(e.slice(r));
                            return n ? (t.p = s.get(n[0].toLowerCase()), r + n[0].length) : -1
                        },
                        q: aG,
                        Q: a7,
                        s: a8,
                        S: a6,
                        u: aq,
                        U: aX,
                        V: aH,
                        w: aW,
                        W: aV,
                        x: function(t, e, n) {
                            return S(t, r, e, n)
                        },
                        X: function(t, e, r) {
                            return S(t, n, e, r)
                        },
                        y: aY,
                        Y: aZ,
                        Z: aK,
                        "%": a4
                    };

                function w(t, e) {
                    return function(r) {
                        var n, o, i, a = [],
                            u = -1,
                            c = 0,
                            l = t.length;
                        for (r instanceof Date || (r = new Date(+r)); ++u < l;) 37 === t.charCodeAt(u) && (a.push(t.slice(c, u)), null != (o = aN[n = t.charAt(++u)]) ? n = t.charAt(++u) : o = "e" === n ? " " : "0", (i = e[n]) && (n = i(r, o)), a.push(n), c = u + 1);
                        return a.push(t.slice(c, u)), a.join("")
                    }
                }

                function j(t, e) {
                    return function(r) {
                        var n, o, i = aD(1900, void 0, 1);
                        if (S(i, t, r += "", 0) != r.length) return null;
                        if ("Q" in i) return new Date(i.Q);
                        if ("s" in i) return new Date(1e3 * i.s + ("L" in i ? i.L : 0));
                        if (!e || "Z" in i || (i.Z = 0), "p" in i && (i.H = i.H % 12 + 12 * i.p), void 0 === i.m && (i.m = "q" in i ? i.q : 0), "V" in i) {
                            if (i.V < 1 || i.V > 53) return null;
                            "w" in i || (i.w = 1), "Z" in i ? (n = (o = (n = aI(aD(i.y, 0, 1))).getUTCDay()) > 4 || 0 === o ? am.ceil(n) : am(n), n = ai.offset(n, (i.V - 1) * 7), i.y = n.getUTCFullYear(), i.m = n.getUTCMonth(), i.d = n.getUTCDate() + (i.w + 6) % 7) : (n = (o = (n = aC(aD(i.y, 0, 1))).getDay()) > 4 || 0 === o ? al.ceil(n) : al(n), n = ao.offset(n, (i.V - 1) * 7), i.y = n.getFullYear(), i.m = n.getMonth(), i.d = n.getDate() + (i.w + 6) % 7)
                        } else("W" in i || "U" in i) && ("w" in i || (i.w = "u" in i ? i.u % 7 : "W" in i ? 1 : 0), o = "Z" in i ? aI(aD(i.y, 0, 1)).getUTCDay() : aC(aD(i.y, 0, 1)).getDay(), i.m = 0, i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (o + 5) % 7 : i.w + 7 * i.U - (o + 6) % 7);
                        return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, aI(i)) : aC(i)
                    }
                }

                function S(t, e, r, n) {
                    for (var o, i, a = 0, u = e.length, c = r.length; a < u;) {
                        if (n >= c) return -1;
                        if (37 === (o = e.charCodeAt(a++))) {
                            if (!(i = O[(o = e.charAt(a++)) in aN ? e.charAt(a++) : o]) || (n = i(t, r, n)) < 0) return -1
                        } else if (o != r.charCodeAt(n++)) return -1
                    }
                    return n
                }
                return g.x = w(r, g), g.X = w(n, g), g.c = w(e, g), x.x = w(r, x), x.X = w(n, x), x.c = w(e, x), {
                    format: function(t) {
                        var e = w(t += "", g);
                        return e.toString = function() {
                            return t
                        }, e
                    },
                    parse: function(t) {
                        var e = j(t += "", !1);
                        return e.toString = function() {
                            return t
                        }, e
                    },
                    utcFormat: function(t) {
                        var e = w(t += "", x);
                        return e.toString = function() {
                            return t
                        }, e
                    },
                    utcParse: function(t) {
                        var e = j(t += "", !0);
                        return e.toString = function() {
                            return t
                        }, e
                    }
                }
            }({
                dateTime: "%x, %X",
                date: "%-m/%-d/%Y",
                time: "%-I:%M:%S %p",
                periods: ["AM", "PM"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            })).format, O.parse, j = O.utcFormat, O.utcParse, Array.prototype.slice;
            var u5 = r(6162),
                u4 = r.n(u5),
                u7 = r(53632),
                u8 = r.n(u7),
                u9 = r(94654),
                ct = r.n(u9),
                ce = r(18446),
                cr = r.n(ce),
                cn = r(29887),
                co = r.n(cn);

            function ci(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var ca = function(t) {
                    return t
                },
                cu = {},
                cc = function(t) {
                    return t === cu
                },
                cl = function(t) {
                    return function e() {
                        return 0 == arguments.length || 1 == arguments.length && cc(arguments.length <= 0 ? void 0 : arguments[0]) ? e : t.apply(void 0, arguments)
                    }
                },
                cs = function(t) {
                    return function t(e, r) {
                        return 1 === e ? r : cl(function() {
                            for (var n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                            var a = o.filter(function(t) {
                                return t !== cu
                            }).length;
                            return a >= e ? r.apply(void 0, o) : t(e - a, cl(function() {
                                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                                var i = o.map(function(t) {
                                    return cc(t) ? e.shift() : t
                                });
                                return r.apply(void 0, ((function(t) {
                                    if (Array.isArray(t)) return ci(t)
                                })(i) || function(t) {
                                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                                }(i) || function(t, e) {
                                    if (t) {
                                        if ("string" == typeof t) return ci(t, void 0);
                                        var r = Object.prototype.toString.call(t).slice(8, -1);
                                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ci(t, void 0)
                                    }
                                }(i) || function() {
                                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()).concat(e))
                            }))
                        })
                    }(t.length, t)
                },
                cf = function(t, e) {
                    for (var r = [], n = t; n < e; ++n) r[n - t] = n;
                    return r
                },
                cp = cs(function(t, e) {
                    return Array.isArray(e) ? e.map(t) : Object.keys(e).map(function(t) {
                        return e[t]
                    }).map(t)
                }),
                ch = function() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    if (!e.length) return ca;
                    var n = e.reverse(),
                        o = n[0],
                        i = n.slice(1);
                    return function() {
                        return i.reduce(function(t, e) {
                            return e(t)
                        }, o.apply(void 0, arguments))
                    }
                },
                cd = function(t) {
                    return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("")
                },
                cy = function(t) {
                    var e = null,
                        r = null;
                    return function() {
                        for (var n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                        return e && o.every(function(t, r) {
                            return t === e[r]
                        }) ? r : (e = o, r = t.apply(void 0, o))
                    }
                },
                cv = (cs(function(t, e, r) {
                    var n = +t;
                    return n + r * (+e - n)
                }), cs(function(t, e, r) {
                    var n = e - +t;
                    return (r - t) / (n = n || 1 / 0)
                }), cs(function(t, e, r) {
                    var n = e - +t;
                    return Math.max(0, Math.min(1, (r - t) / (n = n || 1 / 0)))
                }), {
                    rangeStep: function(t, e, r) {
                        for (var n = new(co())(t), o = 0, i = []; n.lt(e) && o < 1e5;) i.push(n.toNumber()), n = n.add(r), o++;
                        return i
                    },
                    getDigitCount: function(t) {
                        return 0 === t ? 1 : Math.floor(new(co())(t).abs().log(10).toNumber()) + 1
                    }
                });

            function cm(t) {
                return function(t) {
                    if (Array.isArray(t)) return cx(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || cg(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function cb(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var r = [],
                            n = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var a, u = t[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
                        } catch (t) {
                            o = !0, i = t
                        } finally {
                            try {
                                n || null == u.return || u.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return r
                    }
                }(t, e) || cg(t, e) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function cg(t, e) {
                if (t) {
                    if ("string" == typeof t) return cx(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return cx(t, e)
                }
            }

            function cx(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function cO(t) {
                var e = cb(t, 2),
                    r = e[0],
                    n = e[1],
                    o = r,
                    i = n;
                return r > n && (o = n, i = r), [o, i]
            }

            function cw(t, e, r) {
                if (t.lte(0)) return new(co())(0);
                var n = cv.getDigitCount(t.toNumber()),
                    o = new(co())(10).pow(n),
                    i = t.div(o),
                    a = 1 !== n ? .05 : .1,
                    u = new(co())(Math.ceil(i.div(a).toNumber())).add(r).mul(a).mul(o);
                return e ? u : new(co())(Math.ceil(u))
            }

            function cj(t, e, r) {
                var n = 1,
                    o = new(co())(t);
                if (!o.isint() && r) {
                    var i = Math.abs(t);
                    i < 1 ? (n = new(co())(10).pow(cv.getDigitCount(t) - 1), o = new(co())(Math.floor(o.div(n).toNumber())).mul(n)) : i > 1 && (o = new(co())(Math.floor(t)))
                } else 0 === t ? o = new(co())(Math.floor((e - 1) / 2)) : r || (o = new(co())(Math.floor(t)));
                var a = Math.floor((e - 1) / 2);
                return ch(cp(function(t) {
                    return o.add(new(co())(t - a).mul(n)).toNumber()
                }), cf)(0, e)
            }
            var cS = cy(function(t) {
                var e = cb(t, 2),
                    r = e[0],
                    n = e[1],
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
                    i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    a = Math.max(o, 2),
                    u = cb(cO([r, n]), 2),
                    c = u[0],
                    l = u[1];
                if (c === -1 / 0 || l === 1 / 0) {
                    var s = l === 1 / 0 ? [c].concat(cm(cf(0, o - 1).map(function() {
                        return 1 / 0
                    }))) : [].concat(cm(cf(0, o - 1).map(function() {
                        return -1 / 0
                    })), [l]);
                    return r > n ? cd(s) : s
                }
                if (c === l) return cj(c, o, i);
                var f = function t(e, r, n, o) {
                        var i, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                        if (!Number.isFinite((r - e) / (n - 1))) return {
                            step: new(co())(0),
                            tickMin: new(co())(0),
                            tickMax: new(co())(0)
                        };
                        var u = cw(new(co())(r).sub(e).div(n - 1), o, a),
                            c = Math.ceil((i = e <= 0 && r >= 0 ? new(co())(0) : (i = new(co())(e).add(r).div(2)).sub(new(co())(i).mod(u))).sub(e).div(u).toNumber()),
                            l = Math.ceil(new(co())(r).sub(i).div(u).toNumber()),
                            s = c + l + 1;
                        return s > n ? t(e, r, n, o, a + 1) : (s < n && (l = r > 0 ? l + (n - s) : l, c = r > 0 ? c : c + (n - s)), {
                            step: u,
                            tickMin: i.sub(new(co())(c).mul(u)),
                            tickMax: i.add(new(co())(l).mul(u))
                        })
                    }(c, l, a, i),
                    p = f.step,
                    h = f.tickMin,
                    d = f.tickMax,
                    y = cv.rangeStep(h, d.add(new(co())(.1).mul(p)), p);
                return r > n ? cd(y) : y
            });
            cy(function(t) {
                var e = cb(t, 2),
                    r = e[0],
                    n = e[1],
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
                    i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    a = Math.max(o, 2),
                    u = cb(cO([r, n]), 2),
                    c = u[0],
                    l = u[1];
                if (c === -1 / 0 || l === 1 / 0) return [r, n];
                if (c === l) return cj(c, o, i);
                var s = cw(new(co())(l).sub(c).div(a - 1), i, 0),
                    f = ch(cp(function(t) {
                        return new(co())(c).add(new(co())(t).mul(s)).toNumber()
                    }), cf)(0, a).filter(function(t) {
                        return t >= c && t <= l
                    });
                return r > n ? cd(f) : f
            });
            var cA = cy(function(t, e) {
                    var r = cb(t, 2),
                        n = r[0],
                        o = r[1],
                        i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        a = cb(cO([n, o]), 2),
                        u = a[0],
                        c = a[1];
                    if (u === -1 / 0 || c === 1 / 0) return [n, o];
                    if (u === c) return [u];
                    var l = cw(new(co())(c).sub(u).div(Math.max(e, 2) - 1), i, 0),
                        s = [].concat(cm(cv.rangeStep(new(co())(u), new(co())(c).sub(new(co())(.99).mul(l)), l)), [c]);
                    return n > o ? cd(s) : s
                }),
                cP = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

            function cE() {
                return (cE = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function ck(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function cM(t) {
                var e = t.offset,
                    r = t.layout,
                    n = t.width,
                    o = t.dataKey,
                    i = t.data,
                    a = t.dataPointFormatter,
                    u = t.xAxis,
                    c = t.yAxis,
                    l = tA(function(t, e) {
                        if (null == t) return {};
                        var r, n, o = function(t, e) {
                            if (null == t) return {};
                            var r, n, o = {},
                                i = Object.keys(t);
                            for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                        }
                        return o
                    }(t, cP), !1);
                "x" === t.direction && "number" !== u.type && t$(!1);
                var s = i.map(function(t) {
                    var i, s, f = a(t, o),
                        p = f.x,
                        h = f.y,
                        d = f.value,
                        y = f.errorVal;
                    if (!y) return null;
                    var v = [];
                    if (Array.isArray(y)) {
                        var m = function(t) {
                            if (Array.isArray(t)) return t
                        }(y) || function(t, e) {
                            var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != r) {
                                var n, o, i, a, u = [],
                                    c = !0,
                                    l = !1;
                                try {
                                    for (i = (r = r.call(t)).next; !(c = (n = i.call(r)).done) && (u.push(n.value), 2 !== u.length); c = !0);
                                } catch (t) {
                                    l = !0, o = t
                                } finally {
                                    try {
                                        if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return
                                    } finally {
                                        if (l) throw o
                                    }
                                }
                                return u
                            }
                        }(y, 2) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return ck(t, 2);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ck(t, 2)
                            }
                        }(y, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }();
                        i = m[0], s = m[1]
                    } else i = s = y;
                    if ("vertical" === r) {
                        var b = u.scale,
                            g = h + e,
                            x = g + n,
                            O = g - n,
                            w = b(d - i),
                            j = b(d + s);
                        v.push({
                            x1: j,
                            y1: x,
                            x2: j,
                            y2: O
                        }), v.push({
                            x1: w,
                            y1: g,
                            x2: j,
                            y2: g
                        }), v.push({
                            x1: w,
                            y1: x,
                            x2: w,
                            y2: O
                        })
                    } else if ("horizontal" === r) {
                        var S = c.scale,
                            A = p + e,
                            P = A - n,
                            E = A + n,
                            M = S(d - i),
                            _ = S(d + s);
                        v.push({
                            x1: P,
                            y1: _,
                            x2: E,
                            y2: _
                        }), v.push({
                            x1: A,
                            y1: M,
                            x2: A,
                            y2: _
                        }), v.push({
                            x1: P,
                            y1: M,
                            x2: E,
                            y2: M
                        })
                    }
                    return k.createElement(tX, cE({
                        className: "recharts-errorBar",
                        key: "bar-".concat(v.map(function(t) {
                            return "".concat(t.x1, "-").concat(t.x2, "-").concat(t.y1, "-").concat(t.y2)
                        }))
                    }, l), v.map(function(t) {
                        return k.createElement("line", cE({}, t, {
                            key: "line-".concat(t.x1, "-").concat(t.x2, "-").concat(t.y1, "-").concat(t.y2)
                        }))
                    }))
                });
                return k.createElement(tX, {
                    className: "recharts-errorBars"
                }, s)
            }

            function c_(t) {
                return (c_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function cT(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function cC(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? cT(Object(r), !0).forEach(function(e) {
                        var n, o;
                        n = e, o = r[e], (n = function(t) {
                            var e = function(t, e) {
                                if ("object" != c_(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != c_(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == c_(e) ? e : String(e)
                        }(n)) in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : cT(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }
            cM.defaultProps = {
                stroke: "black",
                strokeWidth: 1.5,
                width: 5,
                offset: 0,
                layout: "horizontal"
            }, cM.displayName = "ErrorBar";
            var cI = function(t) {
                var e, r = t.children,
                    n = t.formattedGraphicalItems,
                    o = t.legendWidth,
                    i = t.legendContent,
                    a = tO(r, rc);
                return a ? (e = a.props && a.props.payload ? a.props && a.props.payload : "children" === i ? (n || []).reduce(function(t, e) {
                    var r = e.item,
                        n = e.props,
                        o = n.sectors || n.data || [];
                    return t.concat(o.map(function(t) {
                        return {
                            type: a.props.iconType || r.props.legendType,
                            value: t.name,
                            color: t.fill,
                            payload: t
                        }
                    }))
                }, []) : (n || []).map(function(t) {
                    var e = t.item,
                        r = e.props,
                        n = r.dataKey,
                        o = r.name,
                        i = r.legendType;
                    return {
                        inactive: r.hide,
                        dataKey: n,
                        type: a.props.iconType || i || "square",
                        color: cW(e),
                        value: o || n,
                        payload: e.props
                    }
                }), cC(cC(cC({}, a.props), rc.getWithHeight(a, o)), {}, {
                    payload: e,
                    item: a
                })) : null
            };

            function cD(t) {
                return (cD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function cN(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function cB(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? cN(Object(r), !0).forEach(function(e) {
                        cL(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : cN(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function cL(t, e, r) {
                var n;
                return (n = function(t, e) {
                    if ("object" != cD(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != cD(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(e, "string"), (e = "symbol" == cD(n) ? n : String(n)) in t) ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function cR(t) {
                return function(t) {
                    if (Array.isArray(t)) return c$(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return c$(t, void 0);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c$(t, void 0)
                    }
                }(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c$(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function cz(t, e, r) {
                return Q()(t) || Q()(e) ? r : W(e) ? L()(t, e, r) : te()(e) ? e(t) : r
            }

            function cU(t, e, r, n) {
                var o = ct()(t, function(t) {
                    return cz(t, e)
                });
                if ("number" === r) {
                    var i = o.filter(function(t) {
                        return F(t) || parseFloat(t)
                    });
                    return i.length ? [u8()(i), u4()(i)] : [1 / 0, -1 / 0]
                }
                return (n ? o.filter(function(t) {
                    return !Q()(t)
                }) : o).map(function(t) {
                    return W(t) || t instanceof Date ? t : ""
                })
            }
            var cF = function(t) {
                    var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        o = arguments.length > 3 ? arguments[3] : void 0,
                        i = -1,
                        a = null !== (e = null == r ? void 0 : r.length) && void 0 !== e ? e : 0;
                    if (a <= 1) return 0;
                    if (o && "angleAxis" === o.axisType && 1e-6 >= Math.abs(Math.abs(o.range[1] - o.range[0]) - 360))
                        for (var u = o.range, c = 0; c < a; c++) {
                            var l = c > 0 ? n[c - 1].coordinate : n[a - 1].coordinate,
                                s = n[c].coordinate,
                                f = c >= a - 1 ? n[0].coordinate : n[c + 1].coordinate,
                                p = void 0;
                            if (z(s - l) !== z(f - s)) {
                                var h = [];
                                if (z(f - s) === z(u[1] - u[0])) {
                                    p = f;
                                    var d = s + u[1] - u[0];
                                    h[0] = Math.min(d, (d + l) / 2), h[1] = Math.max(d, (d + l) / 2)
                                } else {
                                    p = l;
                                    var y = f + u[1] - u[0];
                                    h[0] = Math.min(s, (y + s) / 2), h[1] = Math.max(s, (y + s) / 2)
                                }
                                var v = [Math.min(s, (p + s) / 2), Math.max(s, (p + s) / 2)];
                                if (t > v[0] && t <= v[1] || t >= h[0] && t <= h[1]) {
                                    i = n[c].index;
                                    break
                                }
                            } else {
                                var m = Math.min(l, f),
                                    b = Math.max(l, f);
                                if (t > (m + s) / 2 && t <= (b + s) / 2) {
                                    i = n[c].index;
                                    break
                                }
                            }
                        } else
                            for (var g = 0; g < a; g++)
                                if (0 === g && t <= (r[g].coordinate + r[g + 1].coordinate) / 2 || g > 0 && g < a - 1 && t > (r[g].coordinate + r[g - 1].coordinate) / 2 && t <= (r[g].coordinate + r[g + 1].coordinate) / 2 || g === a - 1 && t > (r[g].coordinate + r[g - 1].coordinate) / 2) {
                                    i = r[g].index;
                                    break
                                }
                    return i
                },
                cW = function(t) {
                    var e, r = t.type.displayName,
                        n = t.props,
                        o = n.stroke,
                        i = n.fill;
                    switch (r) {
                        case "Line":
                            e = o;
                            break;
                        case "Area":
                        case "Radar":
                            e = o && "none" !== o ? o : i;
                            break;
                        default:
                            e = i
                    }
                    return e
                },
                cq = function(t) {
                    var e = t.barSize,
                        r = t.totalSize,
                        n = t.stackGroups,
                        o = void 0 === n ? {} : n;
                    if (!o) return {};
                    for (var i = {}, a = Object.keys(o), u = 0, c = a.length; u < c; u++)
                        for (var l = o[a[u]].stackGroups, s = Object.keys(l), f = 0, p = s.length; f < p; f++) {
                            var h = l[s[f]],
                                d = h.items,
                                y = h.cateAxisId,
                                v = d.filter(function(t) {
                                    return tv(t.type).indexOf("Bar") >= 0
                                });
                            if (v && v.length) {
                                var m = v[0].props.barSize,
                                    b = v[0].props[y];
                                i[b] || (i[b] = []);
                                var g = Q()(m) ? e : m;
                                i[b].push({
                                    item: v[0],
                                    stackList: v.slice(1),
                                    barSize: Q()(g) ? void 0 : H(g, r, 0)
                                })
                            }
                        }
                    return i
                },
                cX = function(t) {
                    var e, r = t.barGap,
                        n = t.barCategoryGap,
                        o = t.bandSize,
                        i = t.sizeList,
                        a = void 0 === i ? [] : i,
                        u = t.maxBarSize,
                        c = a.length;
                    if (c < 1) return null;
                    var l = H(r, o, 0, !0),
                        s = [];
                    if (a[0].barSize === +a[0].barSize) {
                        var f = !1,
                            p = o / c,
                            h = a.reduce(function(t, e) {
                                return t + e.barSize || 0
                            }, 0);
                        (h += (c - 1) * l) >= o && (h -= (c - 1) * l, l = 0), h >= o && p > 0 && (f = !0, p *= .9, h = c * p);
                        var d = {
                            offset: ((o - h) / 2 >> 0) - l,
                            size: 0
                        };
                        e = a.reduce(function(t, e) {
                            var r = {
                                    item: e.item,
                                    position: {
                                        offset: d.offset + d.size + l,
                                        size: f ? p : e.barSize
                                    }
                                },
                                n = [].concat(cR(t), [r]);
                            return d = n[n.length - 1].position, e.stackList && e.stackList.length && e.stackList.forEach(function(t) {
                                n.push({
                                    item: t,
                                    position: d
                                })
                            }), n
                        }, s)
                    } else {
                        var y = H(n, o, 0, !0);
                        o - 2 * y - (c - 1) * l <= 0 && (l = 0);
                        var v = (o - 2 * y - (c - 1) * l) / c;
                        v > 1 && (v >>= 0);
                        var m = u === +u ? Math.min(v, u) : v;
                        e = a.reduce(function(t, e, r) {
                            var n = [].concat(cR(t), [{
                                item: e.item,
                                position: {
                                    offset: y + (v + l) * r + (v - m) / 2,
                                    size: m
                                }
                            }]);
                            return e.stackList && e.stackList.length && e.stackList.forEach(function(t) {
                                n.push({
                                    item: t,
                                    position: n[n.length - 1].position
                                })
                            }), n
                        }, s)
                    }
                    return e
                },
                cH = function(t, e, r, n) {
                    var o = r.children,
                        i = r.width,
                        a = r.margin,
                        u = cI({
                            children: o,
                            legendWidth: i - (a.left || 0) - (a.right || 0)
                        });
                    if (u) {
                        var c = n || {},
                            l = c.width,
                            s = c.height,
                            f = u.align,
                            p = u.verticalAlign,
                            h = u.layout;
                        if (("vertical" === h || "horizontal" === h && "middle" === p) && "center" !== f && F(t[f])) return cB(cB({}, t), {}, cL({}, f, t[f] + (l || 0)));
                        if (("horizontal" === h || "vertical" === h && "center" === f) && "middle" !== p && F(t[p])) return cB(cB({}, t), {}, cL({}, p, t[p] + (s || 0)))
                    }
                    return t
                },
                cV = function(t, e, r, n, o) {
                    var i = tx(e.props.children, cM).filter(function(t) {
                        var e;
                        return e = t.props.direction, !!Q()(o) || ("horizontal" === n ? "yAxis" === o : "vertical" === n || "x" === e ? "xAxis" === o : "y" !== e || "yAxis" === o)
                    });
                    if (i && i.length) {
                        var a = i.map(function(t) {
                            return t.props.dataKey
                        });
                        return t.reduce(function(t, e) {
                            var n = cz(e, r);
                            if (Q()(n)) return t;
                            var o = Array.isArray(n) ? [u8()(n), u4()(n)] : [n, n],
                                i = a.reduce(function(t, r) {
                                    var n = cz(e, r, 0),
                                        i = o[0] - Math.abs(Array.isArray(n) ? n[0] : n),
                                        a = o[1] + Math.abs(Array.isArray(n) ? n[1] : n);
                                    return [Math.min(i, t[0]), Math.max(a, t[1])]
                                }, [1 / 0, -1 / 0]);
                            return [Math.min(i[0], t[0]), Math.max(i[1], t[1])]
                        }, [1 / 0, -1 / 0])
                    }
                    return null
                },
                cZ = function(t, e, r, n, o) {
                    var i = e.map(function(e) {
                        return cV(t, e, r, o, n)
                    }).filter(function(t) {
                        return !Q()(t)
                    });
                    return i && i.length ? i.reduce(function(t, e) {
                        return [Math.min(t[0], e[0]), Math.max(t[1], e[1])]
                    }, [1 / 0, -1 / 0]) : null
                },
                cY = function(t, e, r, n, o) {
                    var i = e.map(function(e) {
                        var i = e.props.dataKey;
                        return "number" === r && i && cV(t, e, i, n) || cU(t, i, r, o)
                    });
                    if ("number" === r) return i.reduce(function(t, e) {
                        return [Math.min(t[0], e[0]), Math.max(t[1], e[1])]
                    }, [1 / 0, -1 / 0]);
                    var a = {};
                    return i.reduce(function(t, e) {
                        for (var r = 0, n = e.length; r < n; r++) a[e[r]] || (a[e[r]] = !0, t.push(e[r]));
                        return t
                    }, [])
                },
                cK = function(t, e) {
                    return "horizontal" === t && "xAxis" === e || "vertical" === t && "yAxis" === e || "centric" === t && "angleAxis" === e || "radial" === t && "radiusAxis" === e
                },
                cG = function(t, e, r) {
                    if (!t) return null;
                    var n = t.scale,
                        o = t.duplicateDomain,
                        i = t.type,
                        a = t.range,
                        u = "scaleBand" === t.realScaleType ? n.bandwidth() / 2 : 2,
                        c = (e || r) && "category" === i && n.bandwidth ? n.bandwidth() / u : 0;
                    return (c = "angleAxis" === t.axisType && (null == a ? void 0 : a.length) >= 2 ? 2 * z(a[0] - a[1]) * c : c, e && (t.ticks || t.niceTicks)) ? (t.ticks || t.niceTicks).map(function(t) {
                        return {
                            coordinate: n(o ? o.indexOf(t) : t) + c,
                            value: t,
                            offset: c
                        }
                    }).filter(function(t) {
                        return !N()(t.coordinate)
                    }) : t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(t, e) {
                        return {
                            coordinate: n(t) + c,
                            value: t,
                            index: e,
                            offset: c
                        }
                    }) : n.ticks && !r ? n.ticks(t.tickCount).map(function(t) {
                        return {
                            coordinate: n(t) + c,
                            value: t,
                            offset: c
                        }
                    }) : n.domain().map(function(t, e) {
                        return {
                            coordinate: n(t) + c,
                            value: o ? o[t] : t,
                            index: e,
                            offset: c
                        }
                    })
                },
                cJ = new WeakMap,
                cQ = function(t, e) {
                    if ("function" != typeof e) return t;
                    cJ.has(t) || cJ.set(t, new WeakMap);
                    var r = cJ.get(t);
                    if (r.has(e)) return r.get(e);
                    var n = function() {
                        t.apply(void 0, arguments), e.apply(void 0, arguments)
                    };
                    return r.set(e, n), n
                },
                c0 = function(t, e, r) {
                    var n = t.scale,
                        o = t.type,
                        i = t.layout,
                        a = t.axisType;
                    if ("auto" === n) return "radial" === i && "radiusAxis" === a ? {
                        scale: nY(),
                        realScaleType: "band"
                    } : "radial" === i && "angleAxis" === a ? {
                        scale: iB(),
                        realScaleType: "linear"
                    } : "category" === o && e && (e.indexOf("LineChart") >= 0 || e.indexOf("AreaChart") >= 0 || e.indexOf("ComposedChart") >= 0 && !r) ? {
                        scale: nK(),
                        realScaleType: "point"
                    } : "category" === o ? {
                        scale: nY(),
                        realScaleType: "band"
                    } : {
                        scale: iB(),
                        realScaleType: "linear"
                    };
                    if (I()(n)) {
                        var u = "scale".concat(eg()(n));
                        return {
                            scale: (S[u] || nK)(),
                            realScaleType: S[u] ? u : "point"
                        }
                    }
                    return te()(n) ? {
                        scale: n
                    } : {
                        scale: nK(),
                        realScaleType: "point"
                    }
                },
                c1 = function(t) {
                    var e = t.domain();
                    if (e && !(e.length <= 2)) {
                        var r = e.length,
                            n = t.range(),
                            o = Math.min(n[0], n[1]) - 1e-4,
                            i = Math.max(n[0], n[1]) + 1e-4,
                            a = t(e[0]),
                            u = t(e[r - 1]);
                        (a < o || a > i || u < o || u > i) && t.domain([e[0], e[r - 1]])
                    }
                },
                c2 = {
                    sign: function(t) {
                        var e = t.length;
                        if (!(e <= 0))
                            for (var r = 0, n = t[0].length; r < n; ++r)
                                for (var o = 0, i = 0, a = 0; a < e; ++a) {
                                    var u = N()(t[a][r][1]) ? t[a][r][0] : t[a][r][1];
                                    u >= 0 ? (t[a][r][0] = o, t[a][r][1] = o + u, o = t[a][r][1]) : (t[a][r][0] = i, t[a][r][1] = i + u, i = t[a][r][1])
                                }
                    },
                    expand: function(t, e) {
                        if ((n = t.length) > 0) {
                            for (var r, n, o, i = 0, a = t[0].length; i < a; ++i) {
                                for (o = r = 0; r < n; ++r) o += t[r][i][1] || 0;
                                if (o)
                                    for (r = 0; r < n; ++r) t[r][i][1] /= o
                            }
                            u0(t, e)
                        }
                    },
                    none: u0,
                    silhouette: function(t, e) {
                        if ((r = t.length) > 0) {
                            for (var r, n = 0, o = t[e[0]], i = o.length; n < i; ++n) {
                                for (var a = 0, u = 0; a < r; ++a) u += t[a][n][1] || 0;
                                o[n][1] += o[n][0] = -u / 2
                            }
                            u0(t, e)
                        }
                    },
                    wiggle: function(t, e) {
                        if ((o = t.length) > 0 && (n = (r = t[e[0]]).length) > 0) {
                            for (var r, n, o, i = 0, a = 1; a < n; ++a) {
                                for (var u = 0, c = 0, l = 0; u < o; ++u) {
                                    for (var s = t[e[u]], f = s[a][1] || 0, p = (f - (s[a - 1][1] || 0)) / 2, h = 0; h < u; ++h) {
                                        var d = t[e[h]];
                                        p += (d[a][1] || 0) - (d[a - 1][1] || 0)
                                    }
                                    c += f, l += p * f
                                }
                                r[a - 1][1] += r[a - 1][0] = i, c && (i -= l / c)
                            }
                            r[a - 1][1] += r[a - 1][0] = i, u0(t, e)
                        }
                    },
                    positive: function(t) {
                        var e = t.length;
                        if (!(e <= 0))
                            for (var r = 0, n = t[0].length; r < n; ++r)
                                for (var o = 0, i = 0; i < e; ++i) {
                                    var a = N()(t[i][r][1]) ? t[i][r][0] : t[i][r][1];
                                    a >= 0 ? (t[i][r][0] = o, t[i][r][1] = o + a, o = t[i][r][1]) : (t[i][r][0] = 0, t[i][r][1] = 0)
                                }
                    }
                },
                c6 = function(t, e, r) {
                    var n = e.map(function(t) {
                            return t.props.dataKey
                        }),
                        o = c2[r];
                    return (function() {
                        var t = eN([]),
                            e = u2,
                            r = u0,
                            n = u6;

                        function o(o) {
                            var i, a, u = Array.from(t.apply(this, arguments), u3),
                                c = u.length,
                                l = -1;
                            for (let t of o)
                                for (i = 0, ++l; i < c; ++i)(u[i][l] = [0, +n(t, u[i].key, l, o)]).data = t;
                            for (i = 0, a = u1(e(u)); i < c; ++i) u[a[i]].index = i;
                            return r(u, a), u
                        }
                        return o.keys = function(e) {
                            return arguments.length ? (t = "function" == typeof e ? e : eN(Array.from(e)), o) : t
                        }, o.value = function(t) {
                            return arguments.length ? (n = "function" == typeof t ? t : eN(+t), o) : n
                        }, o.order = function(t) {
                            return arguments.length ? (e = null == t ? u2 : "function" == typeof t ? t : eN(Array.from(t)), o) : e
                        }, o.offset = function(t) {
                            return arguments.length ? (r = null == t ? u0 : t, o) : r
                        }, o
                    })().keys(n).value(function(t, e) {
                        return +cz(t, e, 0)
                    }).order(u2).offset(o)(t)
                },
                c3 = function(t, e, r, n, o, i) {
                    if (!t) return null;
                    var a = (i ? e.reverse() : e).reduce(function(t, e) {
                        var o = e.props,
                            i = o.stackId;
                        if (o.hide) return t;
                        var a = e.props[r],
                            u = t[a] || {
                                hasStack: !1,
                                stackGroups: {}
                            };
                        if (W(i)) {
                            var c = u.stackGroups[i] || {
                                numericAxisId: r,
                                cateAxisId: n,
                                items: []
                            };
                            c.items.push(e), u.hasStack = !0, u.stackGroups[i] = c
                        } else u.stackGroups[X("_stackId_")] = {
                            numericAxisId: r,
                            cateAxisId: n,
                            items: [e]
                        };
                        return cB(cB({}, t), {}, cL({}, a, u))
                    }, {});
                    return Object.keys(a).reduce(function(e, i) {
                        var u = a[i];
                        return u.hasStack && (u.stackGroups = Object.keys(u.stackGroups).reduce(function(e, i) {
                            var a = u.stackGroups[i];
                            return cB(cB({}, e), {}, cL({}, i, {
                                numericAxisId: r,
                                cateAxisId: n,
                                items: a.items,
                                stackedData: c6(t, a.items, o)
                            }))
                        }, {})), cB(cB({}, e), {}, cL({}, i, u))
                    }, {})
                },
                c5 = function(t, e) {
                    var r = e.realScaleType,
                        n = e.type,
                        o = e.tickCount,
                        i = e.originalDomain,
                        a = e.allowDecimals,
                        u = r || e.scale;
                    if ("auto" !== u && "linear" !== u) return null;
                    if (o && "number" === n && i && ("auto" === i[0] || "auto" === i[1])) {
                        var c = t.domain();
                        if (!c.length) return null;
                        var l = cS(c, o, a);
                        return t.domain([u8()(l), u4()(l)]), {
                            niceTicks: l
                        }
                    }
                    return o && "number" === n ? {
                        niceTicks: cA(t.domain(), o, a)
                    } : null
                },
                c4 = function(t, e) {
                    var r = t.props.stackId;
                    if (W(r)) {
                        var n = e[r];
                        if (n) {
                            var o = n.items.indexOf(t);
                            return o >= 0 ? n.stackedData[o] : null
                        }
                    }
                    return null
                },
                c7 = function(t, e, r) {
                    return Object.keys(t).reduce(function(n, o) {
                        var i = t[o].stackedData.reduce(function(t, n) {
                            var o = n.slice(e, r + 1).reduce(function(t, e) {
                                return [u8()(e.concat([t[0]]).filter(F)), u4()(e.concat([t[1]]).filter(F))]
                            }, [1 / 0, -1 / 0]);
                            return [Math.min(t[0], o[0]), Math.max(t[1], o[1])]
                        }, [1 / 0, -1 / 0]);
                        return [Math.min(i[0], n[0]), Math.max(i[1], n[1])]
                    }, [1 / 0, -1 / 0]).map(function(t) {
                        return t === 1 / 0 || t === -1 / 0 ? 0 : t
                    })
                },
                c8 = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
                c9 = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
                lt = function(t, e, r) {
                    if (te()(t)) return t(e, r);
                    if (!Array.isArray(t)) return e;
                    var n = [];
                    if (F(t[0])) n[0] = r ? t[0] : Math.min(t[0], e[0]);
                    else if (c8.test(t[0])) {
                        var o = +c8.exec(t[0])[1];
                        n[0] = e[0] - o
                    } else te()(t[0]) ? n[0] = t[0](e[0]) : n[0] = e[0];
                    if (F(t[1])) n[1] = r ? t[1] : Math.max(t[1], e[1]);
                    else if (c9.test(t[1])) {
                        var i = +c9.exec(t[1])[1];
                        n[1] = e[1] + i
                    } else te()(t[1]) ? n[1] = t[1](e[1]) : n[1] = e[1];
                    return n
                },
                le = function(t, e, r) {
                    if (t && t.scale && t.scale.bandwidth) {
                        var n = t.scale.bandwidth();
                        if (!r || n > 0) return n
                    }
                    if (t && e && e.length >= 2) {
                        for (var o = tR()(e, function(t) {
                                return t.coordinate
                            }), i = 1 / 0, a = 1, u = o.length; a < u; a++) {
                            var c = o[a],
                                l = o[a - 1];
                            i = Math.min((c.coordinate || 0) - (l.coordinate || 0), i)
                        }
                        return i === 1 / 0 ? 0 : i
                    }
                    return r ? void 0 : 0
                },
                lr = function(t, e, r) {
                    return !t || !t.length || cr()(t, L()(r, "type.defaultProps.domain")) ? e : t
                },
                ln = function(t, e) {
                    var r = t.props,
                        n = r.dataKey,
                        o = r.name,
                        i = r.unit,
                        a = r.formatter,
                        u = r.tooltipType,
                        c = r.chartType,
                        l = r.hide;
                    return cB(cB({}, tA(t, !1)), {}, {
                        dataKey: n,
                        unit: i,
                        formatter: a,
                        name: o || n,
                        color: cW(t),
                        value: cz(e, n),
                        type: u,
                        payload: e,
                        chartType: c,
                        hide: l
                    })
                };

            function lo(t) {
                return (lo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function li(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function la(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? li(Object(r), !0).forEach(function(e) {
                        lu(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : li(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function lu(t, e, r) {
                var n;
                return (n = function(t, e) {
                    if ("object" != lo(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != lo(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(e, "string"), (e = "symbol" == lo(n) ? n : String(n)) in t) ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var lc = ["Webkit", "Moz", "O", "ms"],
                ll = function(t, e) {
                    if (!t) return null;
                    var r = t.replace(/(\w)/, function(t) {
                            return t.toUpperCase()
                        }),
                        n = lc.reduce(function(t, n) {
                            return la(la({}, t), {}, lu({}, n + r, e))
                        }, {});
                    return n[t] = e, n
                };

            function ls(t) {
                return (ls = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function lf() {
                return (lf = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function lp(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function lh(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? lp(Object(r), !0).forEach(function(e) {
                        lg(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : lp(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function ld(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, lx(n.key), n)
                }
            }

            function ly() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (t) {}
                return (ly = function() {
                    return !!t
                })()
            }

            function lv(t) {
                return (lv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function lm(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function lb(t, e) {
                return (lb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function lg(t, e, r) {
                return (e = lx(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function lx(t) {
                var e = function(t, e) {
                    if ("object" != ls(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != ls(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == ls(e) ? e : String(e)
            }
            var lO = function(t) {
                    var e = t.data,
                        r = t.startIndex,
                        n = t.endIndex,
                        o = t.x,
                        i = t.width,
                        a = t.travellerWidth;
                    if (!e || !e.length) return {};
                    var u = e.length,
                        c = nK().domain(tB()(0, u)).range([o, o + i - a]),
                        l = c.domain().map(function(t) {
                            return c(t)
                        });
                    return {
                        isTextActive: !1,
                        isSlideMoving: !1,
                        isTravellerMoving: !1,
                        isTravellerFocused: !1,
                        startX: c(r),
                        endX: c(n),
                        scale: c,
                        scaleValues: l
                    }
                },
                lw = function(t) {
                    return t.changedTouches && !!t.changedTouches.length
                },
                lj = function(t) {
                    var e, r;

                    function n(t) {
                        var e, r, o;
                        return function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, n), r = n, o = [t], r = lv(r), e = function(t, e) {
                            if (e && ("object" === ls(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                            return lm(t)
                        }(this, ly() ? Reflect.construct(r, o || [], lv(this).constructor) : r.apply(this, o)), lg(lm(e), "handleDrag", function(t) {
                            e.leaveTimer && (clearTimeout(e.leaveTimer), e.leaveTimer = null), e.state.isTravellerMoving ? e.handleTravellerMove(t) : e.state.isSlideMoving && e.handleSlideDrag(t)
                        }), lg(lm(e), "handleTouchMove", function(t) {
                            null != t.changedTouches && t.changedTouches.length > 0 && e.handleDrag(t.changedTouches[0])
                        }), lg(lm(e), "handleDragEnd", function() {
                            e.setState({
                                isTravellerMoving: !1,
                                isSlideMoving: !1
                            }, function() {
                                var t = e.props,
                                    r = t.endIndex,
                                    n = t.onDragEnd,
                                    o = t.startIndex;
                                null == n || n({
                                    endIndex: r,
                                    startIndex: o
                                })
                            }), e.detachDragEndListener()
                        }), lg(lm(e), "handleLeaveWrapper", function() {
                            (e.state.isTravellerMoving || e.state.isSlideMoving) && (e.leaveTimer = window.setTimeout(e.handleDragEnd, e.props.leaveTimeOut))
                        }), lg(lm(e), "handleEnterSlideOrTraveller", function() {
                            e.setState({
                                isTextActive: !0
                            })
                        }), lg(lm(e), "handleLeaveSlideOrTraveller", function() {
                            e.setState({
                                isTextActive: !1
                            })
                        }), lg(lm(e), "handleSlideDragStart", function(t) {
                            var r = lw(t) ? t.changedTouches[0] : t;
                            e.setState({
                                isTravellerMoving: !1,
                                isSlideMoving: !0,
                                slideMoveStartX: r.pageX
                            }), e.attachDragEndListener()
                        }), e.travellerDragStartHandlers = {
                            startX: e.handleTravellerDragStart.bind(lm(e), "startX"),
                            endX: e.handleTravellerDragStart.bind(lm(e), "endX")
                        }, e.state = {}, e
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && lb(t, e)
                    }(n, t), e = [{
                        key: "componentWillUnmount",
                        value: function() {
                            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
                        }
                    }, {
                        key: "getIndex",
                        value: function(t) {
                            var e = t.startX,
                                r = t.endX,
                                o = this.state.scaleValues,
                                i = this.props,
                                a = i.gap,
                                u = i.data.length - 1,
                                c = n.getIndexInRange(o, Math.min(e, r)),
                                l = n.getIndexInRange(o, Math.max(e, r));
                            return {
                                startIndex: c - c % a,
                                endIndex: l === u ? u : l - l % a
                            }
                        }
                    }, {
                        key: "getTextOfTick",
                        value: function(t) {
                            var e = this.props,
                                r = e.data,
                                n = e.tickFormatter,
                                o = e.dataKey,
                                i = cz(r[t], o, t);
                            return te()(n) ? n(i, t) : i
                        }
                    }, {
                        key: "attachDragEndListener",
                        value: function() {
                            window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0)
                        }
                    }, {
                        key: "detachDragEndListener",
                        value: function() {
                            window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0)
                        }
                    }, {
                        key: "handleSlideDrag",
                        value: function(t) {
                            var e = this.state,
                                r = e.slideMoveStartX,
                                n = e.startX,
                                o = e.endX,
                                i = this.props,
                                a = i.x,
                                u = i.width,
                                c = i.travellerWidth,
                                l = i.startIndex,
                                s = i.endIndex,
                                f = i.onChange,
                                p = t.pageX - r;
                            p > 0 ? p = Math.min(p, a + u - c - o, a + u - c - n) : p < 0 && (p = Math.max(p, a - n, a - o));
                            var h = this.getIndex({
                                startX: n + p,
                                endX: o + p
                            });
                            (h.startIndex !== l || h.endIndex !== s) && f && f(h), this.setState({
                                startX: n + p,
                                endX: o + p,
                                slideMoveStartX: t.pageX
                            })
                        }
                    }, {
                        key: "handleTravellerDragStart",
                        value: function(t, e) {
                            var r = lw(e) ? e.changedTouches[0] : e;
                            this.setState({
                                isSlideMoving: !1,
                                isTravellerMoving: !0,
                                movingTravellerId: t,
                                brushMoveStartX: r.pageX
                            }), this.attachDragEndListener()
                        }
                    }, {
                        key: "handleTravellerMove",
                        value: function(t) {
                            var e = this.state,
                                r = e.brushMoveStartX,
                                n = e.movingTravellerId,
                                o = e.endX,
                                i = e.startX,
                                a = this.state[n],
                                u = this.props,
                                c = u.x,
                                l = u.width,
                                s = u.travellerWidth,
                                f = u.onChange,
                                p = u.gap,
                                h = u.data,
                                d = {
                                    startX: this.state.startX,
                                    endX: this.state.endX
                                },
                                y = t.pageX - r;
                            y > 0 ? y = Math.min(y, c + l - s - a) : y < 0 && (y = Math.max(y, c - a)), d[n] = a + y;
                            var v = this.getIndex(d),
                                m = v.startIndex,
                                b = v.endIndex,
                                g = function() {
                                    var t = h.length - 1;
                                    return "startX" === n && (o > i ? m % p == 0 : b % p == 0) || o < i && b === t || "endX" === n && (o > i ? b % p == 0 : m % p == 0) || o > i && b === t
                                };
                            this.setState(lg(lg({}, n, a + y), "brushMoveStartX", t.pageX), function() {
                                f && g() && f(v)
                            })
                        }
                    }, {
                        key: "handleTravellerMoveKeyboard",
                        value: function(t, e) {
                            var r = this,
                                n = this.state,
                                o = n.scaleValues,
                                i = n.startX,
                                a = n.endX,
                                u = this.state[e],
                                c = o.indexOf(u);
                            if (-1 !== c) {
                                var l = c + t;
                                if (-1 !== l && !(l >= o.length)) {
                                    var s = o[l];
                                    "startX" === e && s >= a || "endX" === e && s <= i || this.setState(lg({}, e, s), function() {
                                        r.props.onChange(r.getIndex({
                                            startX: r.state.startX,
                                            endX: r.state.endX
                                        }))
                                    })
                                }
                            }
                        }
                    }, {
                        key: "renderBackground",
                        value: function() {
                            var t = this.props,
                                e = t.x,
                                r = t.y,
                                n = t.width,
                                o = t.height,
                                i = t.fill,
                                a = t.stroke;
                            return k.createElement("rect", {
                                stroke: a,
                                fill: i,
                                x: e,
                                y: r,
                                width: n,
                                height: o
                            })
                        }
                    }, {
                        key: "renderPanorama",
                        value: function() {
                            var t = this.props,
                                e = t.x,
                                r = t.y,
                                n = t.width,
                                o = t.height,
                                i = t.data,
                                a = t.children,
                                u = t.padding,
                                c = k.Children.only(a);
                            return c ? k.cloneElement(c, {
                                x: e,
                                y: r,
                                width: n,
                                height: o,
                                margin: u,
                                compact: !0,
                                data: i
                            }) : null
                        }
                    }, {
                        key: "renderTravellerLayer",
                        value: function(t, e) {
                            var r, o, i = this,
                                a = this.props,
                                u = a.y,
                                c = a.travellerWidth,
                                l = a.height,
                                s = a.traveller,
                                f = a.ariaLabel,
                                p = a.data,
                                h = a.startIndex,
                                d = a.endIndex,
                                y = Math.max(t, this.props.x),
                                v = lh(lh({}, tA(this.props, !1)), {}, {
                                    x: y,
                                    y: u,
                                    width: c,
                                    height: l
                                }),
                                m = f || "Min value: ".concat(null === (r = p[h]) || void 0 === r ? void 0 : r.name, ", Max value: ").concat(null === (o = p[d]) || void 0 === o ? void 0 : o.name);
                            return k.createElement(tX, {
                                tabIndex: 0,
                                role: "slider",
                                "aria-label": m,
                                "aria-valuenow": t,
                                className: "recharts-brush-traveller",
                                onMouseEnter: this.handleEnterSlideOrTraveller,
                                onMouseLeave: this.handleLeaveSlideOrTraveller,
                                onMouseDown: this.travellerDragStartHandlers[e],
                                onTouchStart: this.travellerDragStartHandlers[e],
                                onKeyDown: function(t) {
                                    ["ArrowLeft", "ArrowRight"].includes(t.key) && (t.preventDefault(), t.stopPropagation(), i.handleTravellerMoveKeyboard("ArrowRight" === t.key ? 1 : -1, e))
                                },
                                onFocus: function() {
                                    i.setState({
                                        isTravellerFocused: !0
                                    })
                                },
                                onBlur: function() {
                                    i.setState({
                                        isTravellerFocused: !1
                                    })
                                },
                                style: {
                                    cursor: "col-resize"
                                }
                            }, n.renderTraveller(s, v))
                        }
                    }, {
                        key: "renderSlide",
                        value: function(t, e) {
                            var r = this.props,
                                n = r.y,
                                o = r.height,
                                i = r.stroke,
                                a = r.travellerWidth;
                            return k.createElement("rect", {
                                className: "recharts-brush-slide",
                                onMouseEnter: this.handleEnterSlideOrTraveller,
                                onMouseLeave: this.handleLeaveSlideOrTraveller,
                                onMouseDown: this.handleSlideDragStart,
                                onTouchStart: this.handleSlideDragStart,
                                style: {
                                    cursor: "move"
                                },
                                stroke: "none",
                                fill: i,
                                fillOpacity: .2,
                                x: Math.min(t, e) + a,
                                y: n,
                                width: Math.max(Math.abs(e - t) - a, 0),
                                height: o
                            })
                        }
                    }, {
                        key: "renderText",
                        value: function() {
                            var t = this.props,
                                e = t.startIndex,
                                r = t.endIndex,
                                n = t.y,
                                o = t.height,
                                i = t.travellerWidth,
                                a = t.stroke,
                                u = this.state,
                                c = u.startX,
                                l = u.endX,
                                s = {
                                    pointerEvents: "none",
                                    fill: a
                                };
                            return k.createElement(tX, {
                                className: "recharts-brush-texts"
                            }, k.createElement(ox, lf({
                                textAnchor: "end",
                                verticalAnchor: "middle",
                                x: Math.min(c, l) - 5,
                                y: n + o / 2
                            }, s), this.getTextOfTick(e)), k.createElement(ox, lf({
                                textAnchor: "start",
                                verticalAnchor: "middle",
                                x: Math.max(c, l) + i + 5,
                                y: n + o / 2
                            }, s), this.getTextOfTick(r)))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props,
                                e = t.data,
                                r = t.className,
                                n = t.children,
                                o = t.x,
                                i = t.y,
                                a = t.width,
                                u = t.height,
                                c = t.alwaysShowText,
                                l = this.state,
                                s = l.startX,
                                f = l.endX,
                                p = l.isTextActive,
                                h = l.isSlideMoving,
                                d = l.isTravellerMoving,
                                y = l.isTravellerFocused;
                            if (!e || !e.length || !F(o) || !F(i) || !F(a) || !F(u) || a <= 0 || u <= 0) return null;
                            var v = (0, E.Z)("recharts-brush", r),
                                m = 1 === k.Children.count(n),
                                b = ll("userSelect", "none");
                            return k.createElement(tX, {
                                className: v,
                                onMouseLeave: this.handleLeaveWrapper,
                                onTouchMove: this.handleTouchMove,
                                style: b
                            }, this.renderBackground(), m && this.renderPanorama(), this.renderSlide(s, f), this.renderTravellerLayer(s, "startX"), this.renderTravellerLayer(f, "endX"), (p || h || d || y || c) && this.renderText())
                        }
                    }], r = [{
                        key: "renderDefaultTraveller",
                        value: function(t) {
                            var e = t.x,
                                r = t.y,
                                n = t.width,
                                o = t.height,
                                i = t.stroke,
                                a = Math.floor(r + o / 2) - 1;
                            return k.createElement(k.Fragment, null, k.createElement("rect", {
                                x: e,
                                y: r,
                                width: n,
                                height: o,
                                fill: i,
                                stroke: "none"
                            }), k.createElement("line", {
                                x1: e + 1,
                                y1: a,
                                x2: e + n - 1,
                                y2: a,
                                fill: "none",
                                stroke: "#fff"
                            }), k.createElement("line", {
                                x1: e + 1,
                                y1: a + 2,
                                x2: e + n - 1,
                                y2: a + 2,
                                fill: "none",
                                stroke: "#fff"
                            }))
                        }
                    }, {
                        key: "renderTraveller",
                        value: function(t, e) {
                            return k.isValidElement(t) ? k.cloneElement(t, e) : te()(t) ? t(e) : n.renderDefaultTraveller(e)
                        }
                    }, {
                        key: "getDerivedStateFromProps",
                        value: function(t, e) {
                            var r = t.data,
                                n = t.width,
                                o = t.x,
                                i = t.travellerWidth,
                                a = t.updateId,
                                u = t.startIndex,
                                c = t.endIndex;
                            if (r !== e.prevData || a !== e.prevUpdateId) return lh({
                                prevData: r,
                                prevTravellerWidth: i,
                                prevUpdateId: a,
                                prevX: o,
                                prevWidth: n
                            }, r && r.length ? lO({
                                data: r,
                                width: n,
                                x: o,
                                travellerWidth: i,
                                startIndex: u,
                                endIndex: c
                            }) : {
                                scale: null,
                                scaleValues: null
                            });
                            if (e.scale && (n !== e.prevWidth || o !== e.prevX || i !== e.prevTravellerWidth)) {
                                e.scale.range([o, o + n - i]);
                                var l = e.scale.domain().map(function(t) {
                                    return e.scale(t)
                                });
                                return {
                                    prevData: r,
                                    prevTravellerWidth: i,
                                    prevUpdateId: a,
                                    prevX: o,
                                    prevWidth: n,
                                    startX: e.scale(t.startIndex),
                                    endX: e.scale(t.endIndex),
                                    scaleValues: l
                                }
                            }
                            return null
                        }
                    }, {
                        key: "getIndexInRange",
                        value: function(t, e) {
                            for (var r = t.length, n = 0, o = r - 1; o - n > 1;) {
                                var i = Math.floor((n + o) / 2);
                                t[i] > e ? o = i : n = i
                            }
                            return e >= t[o] ? o : n
                        }
                    }], e && ld(n.prototype, e), r && ld(n, r), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n
                }(k.PureComponent);

            function lS(t) {
                return (lS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function lA(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function lP(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? lA(Object(r), !0).forEach(function(e) {
                        lE(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : lA(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function lE(t, e, r) {
                var n;
                return (n = function(t, e) {
                    if ("object" != lS(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != lS(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(e, "string"), (e = "symbol" == lS(n) ? n : String(n)) in t) ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function lk(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            lg(lj, "displayName", "Brush"), lg(lj, "defaultProps", {
                height: 40,
                travellerWidth: 5,
                gap: 1,
                fill: "#fff",
                stroke: "#666",
                padding: {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1
                },
                leaveTimeOut: 1e3,
                alwaysShowText: !1
            });
            var lM = Math.PI / 180,
                l_ = function(t, e, r, n) {
                    return {
                        x: t + Math.cos(-lM * n) * r,
                        y: e + Math.sin(-lM * n) * r
                    }
                },
                lT = function(t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    };
                    return Math.min(Math.abs(t - (r.left || 0) - (r.right || 0)), Math.abs(e - (r.top || 0) - (r.bottom || 0))) / 2
                },
                lC = function(t, e) {
                    var r = t.x,
                        n = t.y;
                    return Math.sqrt(Math.pow(r - e.x, 2) + Math.pow(n - e.y, 2))
                },
                lI = function(t, e) {
                    var r = t.x,
                        n = t.y,
                        o = e.cx,
                        i = e.cy,
                        a = lC({
                            x: r,
                            y: n
                        }, {
                            x: o,
                            y: i
                        });
                    if (a <= 0) return {
                        radius: a
                    };
                    var u = Math.acos((r - o) / a);
                    return n > i && (u = 2 * Math.PI - u), {
                        radius: a,
                        angle: 180 * u / Math.PI,
                        angleInRadian: u
                    }
                },
                lD = function(t) {
                    var e = t.startAngle,
                        r = t.endAngle,
                        n = Math.min(Math.floor(e / 360), Math.floor(r / 360));
                    return {
                        startAngle: e - 360 * n,
                        endAngle: r - 360 * n
                    }
                },
                lN = function(t, e) {
                    var r, n = lI({
                            x: t.x,
                            y: t.y
                        }, e),
                        o = n.radius,
                        i = n.angle,
                        a = e.innerRadius,
                        u = e.outerRadius;
                    if (o < a || o > u) return !1;
                    if (0 === o) return !0;
                    var c = lD(e),
                        l = c.startAngle,
                        s = c.endAngle,
                        f = i;
                    if (l <= s) {
                        for (; f > s;) f -= 360;
                        for (; f < l;) f += 360;
                        r = f >= l && f <= s
                    } else {
                        for (; f > l;) f -= 360;
                        for (; f < s;) f += 360;
                        r = f >= s && f <= l
                    }
                    return r ? lP(lP({}, e), {}, {
                        radius: o,
                        angle: f + 360 * Math.min(Math.floor(e.startAngle / 360), Math.floor(e.endAngle / 360))
                    }) : null
                },
                lB = function(t) {
                    return (0, k.isValidElement)(t) || te()(t) || "boolean" == typeof t ? "" : t.className
                };

            function lL(t) {
                return (lL = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var lR = ["offset"];

            function l$(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function lz(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function lU(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? lz(Object(r), !0).forEach(function(e) {
                        var n, o;
                        n = e, o = r[e], (n = function(t) {
                            var e = function(t, e) {
                                if ("object" != lL(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != lL(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == lL(e) ? e : String(e)
                        }(n)) in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : lz(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function lF() {
                return (lF = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }
            var lW = function(t) {
                    var e = t.value,
                        r = t.formatter,
                        n = Q()(t.children) ? e : t.children;
                    return te()(r) ? r(n) : n
                },
                lq = function(t, e, r) {
                    var n, o, i = t.position,
                        a = t.viewBox,
                        u = t.offset,
                        c = t.className,
                        l = a.cx,
                        s = a.cy,
                        f = a.innerRadius,
                        p = a.outerRadius,
                        h = a.startAngle,
                        d = a.endAngle,
                        y = a.clockWise,
                        v = (f + p) / 2,
                        m = z(d - h) * Math.min(Math.abs(d - h), 360),
                        b = m >= 0 ? 1 : -1;
                    "insideStart" === i ? (n = h + b * u, o = y) : "insideEnd" === i ? (n = d - b * u, o = !y) : "end" === i && (n = d + b * u, o = y), o = m <= 0 ? o : !o;
                    var g = l_(l, s, v, n),
                        x = l_(l, s, v, n + (o ? 1 : -1) * 359),
                        O = "M".concat(g.x, ",").concat(g.y, "\n    A").concat(v, ",").concat(v, ",0,1,").concat(o ? 0 : 1, ",\n    ").concat(x.x, ",").concat(x.y),
                        w = Q()(t.id) ? X("recharts-radial-line-") : t.id;
                    return k.createElement("text", lF({}, r, {
                        dominantBaseline: "central",
                        className: (0, E.Z)("recharts-radial-bar-label", c)
                    }), k.createElement("defs", null, k.createElement("path", {
                        id: w,
                        d: O
                    })), k.createElement("textPath", {
                        xlinkHref: "#".concat(w)
                    }, e))
                },
                lX = function(t) {
                    var e = t.viewBox,
                        r = t.offset,
                        n = t.position,
                        o = e.cx,
                        i = e.cy,
                        a = e.innerRadius,
                        u = e.outerRadius,
                        c = (e.startAngle + e.endAngle) / 2;
                    if ("outside" === n) {
                        var l = l_(o, i, u + r, c),
                            s = l.x;
                        return {
                            x: s,
                            y: l.y,
                            textAnchor: s >= o ? "start" : "end",
                            verticalAnchor: "middle"
                        }
                    }
                    if ("center" === n) return {
                        x: o,
                        y: i,
                        textAnchor: "middle",
                        verticalAnchor: "middle"
                    };
                    if ("centerTop" === n) return {
                        x: o,
                        y: i,
                        textAnchor: "middle",
                        verticalAnchor: "start"
                    };
                    if ("centerBottom" === n) return {
                        x: o,
                        y: i,
                        textAnchor: "middle",
                        verticalAnchor: "end"
                    };
                    var f = l_(o, i, (a + u) / 2, c);
                    return {
                        x: f.x,
                        y: f.y,
                        textAnchor: "middle",
                        verticalAnchor: "middle"
                    }
                },
                lH = function(t) {
                    var e = t.viewBox,
                        r = t.parentViewBox,
                        n = t.offset,
                        o = t.position,
                        i = e.x,
                        a = e.y,
                        u = e.width,
                        c = e.height,
                        l = c >= 0 ? 1 : -1,
                        s = l * n,
                        f = l > 0 ? "end" : "start",
                        p = l > 0 ? "start" : "end",
                        h = u >= 0 ? 1 : -1,
                        d = h * n,
                        y = h > 0 ? "end" : "start",
                        v = h > 0 ? "start" : "end";
                    if ("top" === o) return lU(lU({}, {
                        x: i + u / 2,
                        y: a - l * n,
                        textAnchor: "middle",
                        verticalAnchor: f
                    }), r ? {
                        height: Math.max(a - r.y, 0),
                        width: u
                    } : {});
                    if ("bottom" === o) return lU(lU({}, {
                        x: i + u / 2,
                        y: a + c + s,
                        textAnchor: "middle",
                        verticalAnchor: p
                    }), r ? {
                        height: Math.max(r.y + r.height - (a + c), 0),
                        width: u
                    } : {});
                    if ("left" === o) {
                        var m = {
                            x: i - d,
                            y: a + c / 2,
                            textAnchor: y,
                            verticalAnchor: "middle"
                        };
                        return lU(lU({}, m), r ? {
                            width: Math.max(m.x - r.x, 0),
                            height: c
                        } : {})
                    }
                    if ("right" === o) {
                        var b = {
                            x: i + u + d,
                            y: a + c / 2,
                            textAnchor: v,
                            verticalAnchor: "middle"
                        };
                        return lU(lU({}, b), r ? {
                            width: Math.max(r.x + r.width - b.x, 0),
                            height: c
                        } : {})
                    }
                    var g = r ? {
                        width: u,
                        height: c
                    } : {};
                    return "insideLeft" === o ? lU({
                        x: i + d,
                        y: a + c / 2,
                        textAnchor: v,
                        verticalAnchor: "middle"
                    }, g) : "insideRight" === o ? lU({
                        x: i + u - d,
                        y: a + c / 2,
                        textAnchor: y,
                        verticalAnchor: "middle"
                    }, g) : "insideTop" === o ? lU({
                        x: i + u / 2,
                        y: a + s,
                        textAnchor: "middle",
                        verticalAnchor: p
                    }, g) : "insideBottom" === o ? lU({
                        x: i + u / 2,
                        y: a + c - s,
                        textAnchor: "middle",
                        verticalAnchor: f
                    }, g) : "insideTopLeft" === o ? lU({
                        x: i + d,
                        y: a + s,
                        textAnchor: v,
                        verticalAnchor: p
                    }, g) : "insideTopRight" === o ? lU({
                        x: i + u - d,
                        y: a + s,
                        textAnchor: y,
                        verticalAnchor: p
                    }, g) : "insideBottomLeft" === o ? lU({
                        x: i + d,
                        y: a + c - s,
                        textAnchor: v,
                        verticalAnchor: f
                    }, g) : "insideBottomRight" === o ? lU({
                        x: i + u - d,
                        y: a + c - s,
                        textAnchor: y,
                        verticalAnchor: f
                    }, g) : tn()(o) && (F(o.x) || U(o.x)) && (F(o.y) || U(o.y)) ? lU({
                        x: i + H(o.x, u),
                        y: a + H(o.y, c),
                        textAnchor: "end",
                        verticalAnchor: "end"
                    }, g) : lU({
                        x: i + u / 2,
                        y: a + c / 2,
                        textAnchor: "middle",
                        verticalAnchor: "middle"
                    }, g)
                };

            function lV(t) {
                var e, r = t.offset,
                    n = lU({
                        offset: void 0 === r ? 5 : r
                    }, function(t, e) {
                        if (null == t) return {};
                        var r, n, o = function(t, e) {
                            if (null == t) return {};
                            var r, n, o = {},
                                i = Object.keys(t);
                            for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                        }
                        return o
                    }(t, lR)),
                    o = n.viewBox,
                    i = n.position,
                    a = n.value,
                    u = n.children,
                    c = n.content,
                    l = n.className,
                    s = n.textBreakAll;
                if (!o || Q()(a) && Q()(u) && !(0, k.isValidElement)(c) && !te()(c)) return null;
                if ((0, k.isValidElement)(c)) return (0, k.cloneElement)(c, n);
                if (te()(c)) {
                    if (e = (0, k.createElement)(c, n), (0, k.isValidElement)(e)) return e
                } else e = lW(n);
                var f = "cx" in o && F(o.cx),
                    p = tA(n, !0);
                if (f && ("insideStart" === i || "insideEnd" === i || "end" === i)) return lq(n, e, p);
                var h = f ? lX(n) : lH(n);
                return k.createElement(ox, lF({
                    className: (0, E.Z)("recharts-label", void 0 === l ? "" : l)
                }, p, h, {
                    breakAll: s
                }), e)
            }
            lV.displayName = "Label";
            var lZ = function(t) {
                var e = t.cx,
                    r = t.cy,
                    n = t.angle,
                    o = t.startAngle,
                    i = t.endAngle,
                    a = t.r,
                    u = t.radius,
                    c = t.innerRadius,
                    l = t.outerRadius,
                    s = t.x,
                    f = t.y,
                    p = t.top,
                    h = t.left,
                    d = t.width,
                    y = t.height,
                    v = t.clockWise,
                    m = t.labelViewBox;
                if (m) return m;
                if (F(d) && F(y)) {
                    if (F(s) && F(f)) return {
                        x: s,
                        y: f,
                        width: d,
                        height: y
                    };
                    if (F(p) && F(h)) return {
                        x: p,
                        y: h,
                        width: d,
                        height: y
                    }
                }
                return F(s) && F(f) ? {
                    x: s,
                    y: f,
                    width: 0,
                    height: 0
                } : F(e) && F(r) ? {
                    cx: e,
                    cy: r,
                    startAngle: o || n || 0,
                    endAngle: i || n || 0,
                    innerRadius: c || 0,
                    outerRadius: l || u || a || 0,
                    clockWise: v
                } : t.viewBox ? t.viewBox : {}
            };
            lV.parseViewBox = lZ, lV.renderCallByParent = function(t, e) {
                var r, n, o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (!t || !t.children && o && !t.label) return null;
                var i = t.children,
                    a = lZ(t),
                    u = tx(i, lV).map(function(t, r) {
                        return (0, k.cloneElement)(t, {
                            viewBox: e || a,
                            key: "label-".concat(r)
                        })
                    });
                return o ? [(r = t.label, n = e || a, r ? !0 === r ? k.createElement(lV, {
                    key: "label-implicit",
                    viewBox: n
                }) : W(r) ? k.createElement(lV, {
                    key: "label-implicit",
                    viewBox: n,
                    value: r
                }) : (0, k.isValidElement)(r) ? r.type === lV ? (0, k.cloneElement)(r, {
                    key: "label-implicit",
                    viewBox: n
                }) : k.createElement(lV, {
                    key: "label-implicit",
                    content: r,
                    viewBox: n
                }) : te()(r) ? k.createElement(lV, {
                    key: "label-implicit",
                    content: r,
                    viewBox: n
                }) : tn()(r) ? k.createElement(lV, lF({
                    viewBox: n
                }, r, {
                    key: "label-implicit"
                })) : null : null)].concat(function(t) {
                    if (Array.isArray(t)) return l$(t)
                }(u) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(u) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return l$(t, void 0);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l$(t, void 0)
                    }
                }(u) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()) : u
            };
            var lY = function(t, e) {
                    var r = t.alwaysShow,
                        n = t.ifOverflow;
                    return r && (n = "extendDomain"), n === e
                },
                lK = r(66604),
                lG = r.n(lK),
                lJ = r(711),
                lQ = r.n(lJ);

            function l0(t) {
                return (l0 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function l1(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, l5(n.key), n)
                }
            }

            function l2(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function l6(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? l2(Object(r), !0).forEach(function(e) {
                        l3(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : l2(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function l3(t, e, r) {
                return (e = l5(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function l5(t) {
                var e = function(t, e) {
                    if ("object" != l0(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != l0(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == l0(e) ? e : String(e)
            }
            var l4 = function(t, e) {
                    var r = t.x,
                        n = t.y,
                        o = e.x,
                        i = e.y;
                    return {
                        x: Math.min(r, o),
                        y: Math.min(n, i),
                        width: Math.abs(o - r),
                        height: Math.abs(i - n)
                    }
                },
                l7 = function() {
                    var t, e;

                    function r(t) {
                        (function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        })(this, r), this.scale = t
                    }
                    return t = [{
                        key: "domain",
                        get: function() {
                            return this.scale.domain
                        }
                    }, {
                        key: "range",
                        get: function() {
                            return this.scale.range
                        }
                    }, {
                        key: "rangeMin",
                        get: function() {
                            return this.range()[0]
                        }
                    }, {
                        key: "rangeMax",
                        get: function() {
                            return this.range()[1]
                        }
                    }, {
                        key: "bandwidth",
                        get: function() {
                            return this.scale.bandwidth
                        }
                    }, {
                        key: "apply",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = e.bandAware,
                                n = e.position;
                            if (void 0 !== t) {
                                if (n) switch (n) {
                                    case "start":
                                    default:
                                        return this.scale(t);
                                    case "middle":
                                        var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                                        return this.scale(t) + o;
                                    case "end":
                                        var i = this.bandwidth ? this.bandwidth() : 0;
                                        return this.scale(t) + i
                                }
                                if (r) {
                                    var a = this.bandwidth ? this.bandwidth() / 2 : 0;
                                    return this.scale(t) + a
                                }
                                return this.scale(t)
                            }
                        }
                    }, {
                        key: "isInRange",
                        value: function(t) {
                            var e = this.range(),
                                r = e[0],
                                n = e[e.length - 1];
                            return r <= n ? t >= r && t <= n : t >= n && t <= r
                        }
                    }], e = [{
                        key: "create",
                        value: function(t) {
                            return new r(t)
                        }
                    }], t && l1(r.prototype, t), e && l1(r, e), Object.defineProperty(r, "prototype", {
                        writable: !1
                    }), r
                }();
            l3(l7, "EPS", 1e-4);
            var l8 = function(t) {
                var e = Object.keys(t).reduce(function(e, r) {
                    return l6(l6({}, e), {}, l3({}, r, l7.create(t[r])))
                }, {});
                return l6(l6({}, e), {}, {
                    apply: function(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = r.bandAware,
                            o = r.position;
                        return lG()(t, function(t, r) {
                            return e[r].apply(t, {
                                bandAware: n,
                                position: o
                            })
                        })
                    },
                    isInRange: function(t) {
                        return lQ()(t, function(t, r) {
                            return e[r].isInRange(t)
                        })
                    }
                })
            };

            function l9(t) {
                return (l9 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function st() {
                return (st = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function se(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function sr(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? se(Object(r), !0).forEach(function(e) {
                        var n, o;
                        n = e, o = r[e], (n = function(t) {
                            var e = function(t, e) {
                                if ("object" != l9(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != l9(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == l9(e) ? e : String(e)
                        }(n)) in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : se(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }
            var sn = function(t) {
                var e = t.x,
                    r = t.y,
                    n = t.xAxis,
                    o = t.yAxis,
                    i = l8({
                        x: n.scale,
                        y: o.scale
                    }),
                    a = i.apply({
                        x: e,
                        y: r
                    }, {
                        bandAware: !0
                    });
                return lY(t, "discard") && !i.isInRange(a) ? null : a
            };

            function so(t) {
                var e = t.x,
                    r = t.y,
                    n = t.r,
                    o = t.alwaysShow,
                    i = t.clipPathId,
                    a = W(e),
                    u = W(r);
                if (G(void 0 === o, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !a || !u) return null;
                var c = sn(t);
                if (!c) return null;
                var l = c.x,
                    s = c.y,
                    f = t.shape,
                    p = t.className,
                    h = sr(sr({
                        clipPath: lY(t, "hidden") ? "url(#".concat(i, ")") : void 0
                    }, tA(t, !0)), {}, {
                        cx: l,
                        cy: s
                    });
                return k.createElement(tX, {
                    className: (0, E.Z)("recharts-reference-dot", p)
                }, so.renderDot(f, h), lV.renderCallByParent(t, {
                    x: l - n,
                    y: s - n,
                    width: 2 * n,
                    height: 2 * n
                }))
            }
            so.displayName = "ReferenceDot", so.defaultProps = {
                isFront: !1,
                ifOverflow: "discard",
                xAxisId: 0,
                yAxisId: 0,
                r: 10,
                fill: "#fff",
                stroke: "#ccc",
                fillOpacity: 1,
                strokeWidth: 1
            }, so.renderDot = function(t, e) {
                return k.isValidElement(t) ? k.cloneElement(t, e) : te()(t) ? t(e) : k.createElement(rs, st({}, e, {
                    cx: e.cx,
                    cy: e.cy,
                    className: "recharts-reference-dot-dot"
                }))
            };
            var si = r(27659),
                sa = r.n(si);
            r(13311);
            var su = r(88306),
                sc = r.n(su)()(function(t) {
                    return {
                        x: t.left,
                        y: t.top,
                        width: t.width,
                        height: t.height
                    }
                }, function(t) {
                    return ["l", t.left, "t", t.top, "w", t.width, "h", t.height].join("")
                }),
                sl = (0, k.createContext)(void 0),
                ss = (0, k.createContext)(void 0),
                sf = (0, k.createContext)(void 0),
                sp = (0, k.createContext)({}),
                sh = (0, k.createContext)(void 0),
                sd = (0, k.createContext)(0),
                sy = (0, k.createContext)(0),
                sv = function(t) {
                    var e = t.state,
                        r = e.xAxisMap,
                        n = e.yAxisMap,
                        o = e.offset,
                        i = t.clipPathId,
                        a = t.children,
                        u = t.width,
                        c = t.height,
                        l = sc(o);
                    return k.createElement(sl.Provider, {
                        value: r
                    }, k.createElement(ss.Provider, {
                        value: n
                    }, k.createElement(sp.Provider, {
                        value: o
                    }, k.createElement(sf.Provider, {
                        value: l
                    }, k.createElement(sh.Provider, {
                        value: i
                    }, k.createElement(sd.Provider, {
                        value: c
                    }, k.createElement(sy.Provider, {
                        value: u
                    }, a)))))))
                },
                sm = function(t) {
                    var e = (0, k.useContext)(sl);
                    null != e || t$(!1);
                    var r = e[t];
                    return null != r || t$(!1), r
                },
                sb = function(t) {
                    var e = (0, k.useContext)(ss);
                    null != e || t$(!1);
                    var r = e[t];
                    return null != r || t$(!1), r
                };

            function sg(t) {
                return (sg = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function sx(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function sO(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? sx(Object(r), !0).forEach(function(e) {
                        var n, o;
                        n = e, o = r[e], (n = function(t) {
                            var e = function(t, e) {
                                if ("object" != sg(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != sg(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == sg(e) ? e : String(e)
                        }(n)) in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : sx(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function sw(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function sj() {
                return (sj = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }
            var sS = function(t, e, r, n, o, i, a, u, c) {
                var l = o.x,
                    s = o.y,
                    f = o.width,
                    p = o.height;
                if (r) {
                    var h = c.y,
                        d = t.y.apply(h, {
                            position: i
                        });
                    if (lY(c, "discard") && !t.y.isInRange(d)) return null;
                    var y = [{
                        x: l + f,
                        y: d
                    }, {
                        x: l,
                        y: d
                    }];
                    return "left" === u ? y.reverse() : y
                }
                if (e) {
                    var v = c.x,
                        m = t.x.apply(v, {
                            position: i
                        });
                    if (lY(c, "discard") && !t.x.isInRange(m)) return null;
                    var b = [{
                        x: m,
                        y: s + p
                    }, {
                        x: m,
                        y: s
                    }];
                    return "top" === a ? b.reverse() : b
                }
                if (n) {
                    var g = c.segment.map(function(e) {
                        return t.apply(e, {
                            position: i
                        })
                    });
                    return lY(c, "discard") && sa()(g, function(e) {
                        return !t.isInRange(e)
                    }) ? null : g
                }
                return null
            };

            function sA(t) {
                var e, r, n, o = t.x,
                    i = t.y,
                    a = t.segment,
                    u = t.xAxisId,
                    c = t.yAxisId,
                    l = t.shape,
                    s = t.className,
                    f = t.alwaysShow,
                    p = (0, k.useContext)(sh),
                    h = sm(u),
                    d = sb(c),
                    y = (0, k.useContext)(sf);
                if (!p || !y) return null;
                G(void 0 === f, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
                var v = sS(l8({
                    x: h.scale,
                    y: d.scale
                }), W(o), W(i), a && 2 === a.length, y, t.position, h.orientation, d.orientation, t);
                if (!v) return null;
                var m = function(t) {
                        if (Array.isArray(t)) return t
                    }(v) || function(t, e) {
                        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != r) {
                            var n, o, i, a, u = [],
                                c = !0,
                                l = !1;
                            try {
                                for (i = (r = r.call(t)).next; !(c = (n = i.call(r)).done) && (u.push(n.value), 2 !== u.length); c = !0);
                            } catch (t) {
                                l = !0, o = t
                            } finally {
                                try {
                                    if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return
                                } finally {
                                    if (l) throw o
                                }
                            }
                            return u
                        }
                    }(v, 2) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return sw(t, 2);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return sw(t, 2)
                        }
                    }(v, 2) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(),
                    b = m[0],
                    g = b.x,
                    x = b.y,
                    O = m[1],
                    w = O.x,
                    j = O.y,
                    S = sO(sO({
                        clipPath: lY(t, "hidden") ? "url(#".concat(p, ")") : void 0
                    }, tA(t, !0)), {}, {
                        x1: g,
                        y1: x,
                        x2: w,
                        y2: j
                    });
                return k.createElement(tX, {
                    className: (0, E.Z)("recharts-reference-line", s)
                }, (e = l, r = S, k.isValidElement(e) ? k.cloneElement(e, r) : te()(e) ? e(r) : k.createElement("line", sj({}, r, {
                    className: "recharts-reference-line-line"
                }))), lV.renderCallByParent(t, l4({
                    x: (n = {
                        x1: g,
                        y1: x,
                        x2: w,
                        y2: j
                    }).x1,
                    y: n.y1
                }, {
                    x: n.x2,
                    y: n.y2
                })))
            }

            function sP(t) {
                return (sP = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function sE() {
                return (sE = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function sk(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function sM(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? sk(Object(r), !0).forEach(function(e) {
                        var n, o;
                        n = e, o = r[e], (n = function(t) {
                            var e = function(t, e) {
                                if ("object" != sP(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != sP(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == sP(e) ? e : String(e)
                        }(n)) in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : sk(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }
            sA.displayName = "ReferenceLine", sA.defaultProps = {
                isFront: !1,
                ifOverflow: "discard",
                xAxisId: 0,
                yAxisId: 0,
                fill: "none",
                stroke: "#ccc",
                fillOpacity: 1,
                strokeWidth: 1,
                position: "middle"
            };
            var s_ = function(t, e, r, n, o) {
                var i = o.x1,
                    a = o.x2,
                    u = o.y1,
                    c = o.y2,
                    l = o.xAxis,
                    s = o.yAxis;
                if (!l || !s) return null;
                var f = l8({
                        x: l.scale,
                        y: s.scale
                    }),
                    p = {
                        x: t ? f.x.apply(i, {
                            position: "start"
                        }) : f.x.rangeMin,
                        y: r ? f.y.apply(u, {
                            position: "start"
                        }) : f.y.rangeMin
                    },
                    h = {
                        x: e ? f.x.apply(a, {
                            position: "end"
                        }) : f.x.rangeMax,
                        y: n ? f.y.apply(c, {
                            position: "end"
                        }) : f.y.rangeMax
                    };
                return !lY(o, "discard") || f.isInRange(p) && f.isInRange(h) ? l4(p, h) : null
            };

            function sT(t) {
                var e = t.x1,
                    r = t.x2,
                    n = t.y1,
                    o = t.y2,
                    i = t.className,
                    a = t.alwaysShow,
                    u = t.clipPathId;
                G(void 0 === a, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
                var c = W(e),
                    l = W(r),
                    s = W(n),
                    f = W(o),
                    p = t.shape;
                if (!c && !l && !s && !f && !p) return null;
                var h = s_(c, l, s, f, t);
                if (!h && !p) return null;
                var d = lY(t, "hidden") ? "url(#".concat(u, ")") : void 0;
                return k.createElement(tX, {
                    className: (0, E.Z)("recharts-reference-area", i)
                }, sT.renderRect(p, sM(sM({
                    clipPath: d
                }, tA(t, !0)), h)), lV.renderCallByParent(t, h))
            }

            function sC(t) {
                return function(t) {
                    if (Array.isArray(t)) return sI(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return sI(t, void 0);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return sI(t, void 0)
                    }
                }(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function sI(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            sT.displayName = "ReferenceArea", sT.defaultProps = {
                isFront: !1,
                ifOverflow: "discard",
                xAxisId: 0,
                yAxisId: 0,
                r: 10,
                fill: "#ccc",
                fillOpacity: .5,
                stroke: "none",
                strokeWidth: 1
            }, sT.renderRect = function(t, e) {
                return k.isValidElement(t) ? k.cloneElement(t, e) : te()(t) ? t(e) : k.createElement(nU, sE({}, e, {
                    className: "recharts-reference-area-rect"
                }))
            };
            var sD = function(t, e, r, n, o) {
                    var i = tx(t, sA),
                        a = tx(t, so),
                        u = [].concat(sC(i), sC(a)),
                        c = tx(t, sT),
                        l = "".concat(n, "Id"),
                        s = n[0],
                        f = e;
                    if (u.length && (f = u.reduce(function(t, e) {
                            if (e.props[l] === r && lY(e.props, "extendDomain") && F(e.props[s])) {
                                var n = e.props[s];
                                return [Math.min(t[0], n), Math.max(t[1], n)]
                            }
                            return t
                        }, f)), c.length) {
                        var p = "".concat(s, "1"),
                            h = "".concat(s, "2");
                        f = c.reduce(function(t, e) {
                            if (e.props[l] === r && lY(e.props, "extendDomain") && F(e.props[p]) && F(e.props[h])) {
                                var n = e.props[p],
                                    o = e.props[h];
                                return [Math.min(t[0], n, o), Math.max(t[1], n, o)]
                            }
                            return t
                        }, f)
                    }
                    return o && o.length && (f = o.reduce(function(t, e) {
                        return F(e) ? [Math.min(t[0], e), Math.max(t[1], e)] : t
                    }, f)), f
                },
                sN = r(58724),
                sB = new(r.n(sN)()),
                sL = "recharts.syncMouseEvents";

            function sR(t) {
                return (sR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function s$(t, e, r) {
                return (e = sz(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function sz(t) {
                var e = function(t, e) {
                    if ("object" != sR(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != sR(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == sR(e) ? e : String(e)
            }
            var sU = function() {
                    var t;

                    function e() {
                        (function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        })(this, e), s$(this, "activeIndex", 0), s$(this, "coordinateList", []), s$(this, "layout", "horizontal")
                    }
                    return t = [{
                            key: "setDetails",
                            value: function(t) {
                                var e, r = t.coordinateList,
                                    n = void 0 === r ? null : r,
                                    o = t.container,
                                    i = void 0 === o ? null : o,
                                    a = t.layout,
                                    u = void 0 === a ? null : a,
                                    c = t.offset,
                                    l = void 0 === c ? null : c,
                                    s = t.mouseHandlerCallback,
                                    f = void 0 === s ? null : s;
                                this.coordinateList = null !== (e = null != n ? n : this.coordinateList) && void 0 !== e ? e : [], this.container = null != i ? i : this.container, this.layout = null != u ? u : this.layout, this.offset = null != l ? l : this.offset, this.mouseHandlerCallback = null != f ? f : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
                            }
                        }, {
                            key: "focus",
                            value: function() {
                                this.spoofMouse()
                            }
                        }, {
                            key: "keyboardEvent",
                            value: function(t) {
                                if (0 !== this.coordinateList.length) switch (t.key) {
                                    case "ArrowRight":
                                        if ("horizontal" !== this.layout) return;
                                        this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
                                        break;
                                    case "ArrowLeft":
                                        if ("horizontal" !== this.layout) return;
                                        this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse()
                                }
                            }
                        }, {
                            key: "setIndex",
                            value: function(t) {
                                this.activeIndex = t
                            }
                        }, {
                            key: "spoofMouse",
                            value: function() {
                                if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
                                    var t, e, r = this.container.getBoundingClientRect(),
                                        n = r.x,
                                        o = r.y,
                                        i = r.height,
                                        a = this.coordinateList[this.activeIndex].coordinate,
                                        u = (null === (t = window) || void 0 === t ? void 0 : t.scrollX) || 0,
                                        c = (null === (e = window) || void 0 === e ? void 0 : e.scrollY) || 0,
                                        l = o + this.offset.top + i / 2 + c;
                                    this.mouseHandlerCallback({
                                        pageX: n + a + u,
                                        pageY: l
                                    })
                                }
                            }
                        }],
                        function(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, sz(n.key), n)
                            }
                        }(e.prototype, t), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), e
                }(),
                sF = r(68630),
                sW = r.n(sF),
                sq = r(51584),
                sX = r.n(sq);

            function sH(t) {
                return (sH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function sV() {
                return (sV = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function sZ(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function sY(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function sK(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? sY(Object(r), !0).forEach(function(e) {
                        var n, o;
                        n = e, o = r[e], (n = function(t) {
                            var e = function(t, e) {
                                if ("object" != sH(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != sH(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == sH(e) ? e : String(e)
                        }(n)) in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : sY(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }
            var sG = function(t, e, r, n, o) {
                    var i = r - n;
                    return "M ".concat(t, ",").concat(e) + "L ".concat(t + r, ",").concat(e) + "L ".concat(t + r - i / 2, ",").concat(e + o) + "L ".concat(t + r - i / 2 - n, ",").concat(e + o) + "L ".concat(t, ",").concat(e, " Z")
                },
                sJ = {
                    x: 0,
                    y: 0,
                    upperWidth: 0,
                    lowerWidth: 0,
                    height: 0,
                    isUpdateAnimationActive: !1,
                    animationBegin: 0,
                    animationDuration: 1500,
                    animationEasing: "ease"
                },
                sQ = function(t) {
                    var e, r = sK(sK({}, sJ), t),
                        n = (0, k.useRef)(),
                        o = function(t) {
                            if (Array.isArray(t)) return t
                        }(e = (0, k.useState)(-1)) || function(t, e) {
                            var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != r) {
                                var n, o, i, a, u = [],
                                    c = !0,
                                    l = !1;
                                try {
                                    for (i = (r = r.call(t)).next; !(c = (n = i.call(r)).done) && (u.push(n.value), 2 !== u.length); c = !0);
                                } catch (t) {
                                    l = !0, o = t
                                } finally {
                                    try {
                                        if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return
                                    } finally {
                                        if (l) throw o
                                    }
                                }
                                return u
                            }
                        }(e, 2) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return sZ(t, 2);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return sZ(t, 2)
                            }
                        }(e, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(),
                        i = o[0],
                        a = o[1];
                    (0, k.useEffect)(function() {
                        if (n.current && n.current.getTotalLength) try {
                            var t = n.current.getTotalLength();
                            t && a(t)
                        } catch (t) {}
                    }, []);
                    var u = r.x,
                        c = r.y,
                        l = r.upperWidth,
                        s = r.lowerWidth,
                        f = r.height,
                        p = r.className,
                        h = r.animationEasing,
                        d = r.animationDuration,
                        y = r.animationBegin,
                        v = r.isUpdateAnimationActive;
                    if (u !== +u || c !== +c || l !== +l || s !== +s || f !== +f || 0 === l && 0 === s || 0 === f) return null;
                    var m = (0, E.Z)("recharts-trapezoid", p);
                    return v ? k.createElement(nm, {
                        canBegin: i > 0,
                        from: {
                            upperWidth: 0,
                            lowerWidth: 0,
                            height: f,
                            x: u,
                            y: c
                        },
                        to: {
                            upperWidth: l,
                            lowerWidth: s,
                            height: f,
                            x: u,
                            y: c
                        },
                        duration: d,
                        animationEasing: h,
                        isActive: v
                    }, function(t) {
                        var e = t.upperWidth,
                            o = t.lowerWidth,
                            a = t.height,
                            u = t.x,
                            c = t.y;
                        return k.createElement(nm, {
                            canBegin: i > 0,
                            from: "0px ".concat(-1 === i ? 1 : i, "px"),
                            to: "".concat(i, "px 0px"),
                            attributeName: "strokeDasharray",
                            begin: y,
                            duration: d,
                            easing: h
                        }, k.createElement("path", sV({}, tA(r, !0), {
                            className: m,
                            d: sG(u, c, e, o, a),
                            ref: n
                        })))
                    }) : k.createElement("g", null, k.createElement("path", sV({}, tA(r, !0), {
                        className: m,
                        d: sG(u, c, l, s, f)
                    })))
                };

            function s0(t) {
                return (s0 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function s1() {
                return (s1 = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function s2(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function s6(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s2(Object(r), !0).forEach(function(e) {
                        var n, o;
                        n = e, o = r[e], (n = function(t) {
                            var e = function(t, e) {
                                if ("object" != s0(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != s0(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == s0(e) ? e : String(e)
                        }(n)) in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s2(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }
            var s3 = function(t) {
                    var e = t.cx,
                        r = t.cy,
                        n = t.radius,
                        o = t.angle,
                        i = t.sign,
                        a = t.isExternal,
                        u = t.cornerRadius,
                        c = t.cornerIsExternal,
                        l = u * (a ? 1 : -1) + n,
                        s = Math.asin(u / l) / lM,
                        f = c ? o : o + i * s;
                    return {
                        center: l_(e, r, l, f),
                        circleTangency: l_(e, r, n, f),
                        lineTangency: l_(e, r, l * Math.cos(s * lM), c ? o - i * s : o),
                        theta: s
                    }
                },
                s5 = function(t) {
                    var e, r = t.cx,
                        n = t.cy,
                        o = t.innerRadius,
                        i = t.outerRadius,
                        a = t.startAngle,
                        u = z((e = t.endAngle) - a) * Math.min(Math.abs(e - a), 359.999),
                        c = a + u,
                        l = l_(r, n, i, a),
                        s = l_(r, n, i, c),
                        f = "M ".concat(l.x, ",").concat(l.y, "\n    A ").concat(i, ",").concat(i, ",0,\n    ").concat(+(Math.abs(u) > 180), ",").concat(+(a > c), ",\n    ").concat(s.x, ",").concat(s.y, "\n  ");
                    if (o > 0) {
                        var p = l_(r, n, o, a),
                            h = l_(r, n, o, c);
                        f += "L ".concat(h.x, ",").concat(h.y, "\n            A ").concat(o, ",").concat(o, ",0,\n            ").concat(+(Math.abs(u) > 180), ",").concat(+(a <= c), ",\n            ").concat(p.x, ",").concat(p.y, " Z")
                    } else f += "L ".concat(r, ",").concat(n, " Z");
                    return f
                },
                s4 = function(t) {
                    var e = t.cx,
                        r = t.cy,
                        n = t.innerRadius,
                        o = t.outerRadius,
                        i = t.cornerRadius,
                        a = t.forceCornerRadius,
                        u = t.cornerIsExternal,
                        c = t.startAngle,
                        l = t.endAngle,
                        s = z(l - c),
                        f = s3({
                            cx: e,
                            cy: r,
                            radius: o,
                            angle: c,
                            sign: s,
                            cornerRadius: i,
                            cornerIsExternal: u
                        }),
                        p = f.circleTangency,
                        h = f.lineTangency,
                        d = f.theta,
                        y = s3({
                            cx: e,
                            cy: r,
                            radius: o,
                            angle: l,
                            sign: -s,
                            cornerRadius: i,
                            cornerIsExternal: u
                        }),
                        v = y.circleTangency,
                        m = y.lineTangency,
                        b = y.theta,
                        g = u ? Math.abs(c - l) : Math.abs(c - l) - d - b;
                    if (g < 0) return a ? "M ".concat(h.x, ",").concat(h.y, "\n        a").concat(i, ",").concat(i, ",0,0,1,").concat(2 * i, ",0\n        a").concat(i, ",").concat(i, ",0,0,1,").concat(-(2 * i), ",0\n      ") : s5({
                        cx: e,
                        cy: r,
                        innerRadius: n,
                        outerRadius: o,
                        startAngle: c,
                        endAngle: l
                    });
                    var x = "M ".concat(h.x, ",").concat(h.y, "\n    A").concat(i, ",").concat(i, ",0,0,").concat(+(s < 0), ",").concat(p.x, ",").concat(p.y, "\n    A").concat(o, ",").concat(o, ",0,").concat(+(g > 180), ",").concat(+(s < 0), ",").concat(v.x, ",").concat(v.y, "\n    A").concat(i, ",").concat(i, ",0,0,").concat(+(s < 0), ",").concat(m.x, ",").concat(m.y, "\n  ");
                    if (n > 0) {
                        var O = s3({
                                cx: e,
                                cy: r,
                                radius: n,
                                angle: c,
                                sign: s,
                                isExternal: !0,
                                cornerRadius: i,
                                cornerIsExternal: u
                            }),
                            w = O.circleTangency,
                            j = O.lineTangency,
                            S = O.theta,
                            A = s3({
                                cx: e,
                                cy: r,
                                radius: n,
                                angle: l,
                                sign: -s,
                                isExternal: !0,
                                cornerRadius: i,
                                cornerIsExternal: u
                            }),
                            P = A.circleTangency,
                            E = A.lineTangency,
                            k = A.theta,
                            M = u ? Math.abs(c - l) : Math.abs(c - l) - S - k;
                        if (M < 0 && 0 === i) return "".concat(x, "L").concat(e, ",").concat(r, "Z");
                        x += "L".concat(E.x, ",").concat(E.y, "\n      A").concat(i, ",").concat(i, ",0,0,").concat(+(s < 0), ",").concat(P.x, ",").concat(P.y, "\n      A").concat(n, ",").concat(n, ",0,").concat(+(M > 180), ",").concat(+(s > 0), ",").concat(w.x, ",").concat(w.y, "\n      A").concat(i, ",").concat(i, ",0,0,").concat(+(s < 0), ",").concat(j.x, ",").concat(j.y, "Z")
                    } else x += "L".concat(e, ",").concat(r, "Z");
                    return x
                },
                s7 = {
                    cx: 0,
                    cy: 0,
                    innerRadius: 0,
                    outerRadius: 0,
                    startAngle: 0,
                    endAngle: 0,
                    cornerRadius: 0,
                    forceCornerRadius: !1,
                    cornerIsExternal: !1
                },
                s8 = function(t) {
                    var e, r = s6(s6({}, s7), t),
                        n = r.cx,
                        o = r.cy,
                        i = r.innerRadius,
                        a = r.outerRadius,
                        u = r.cornerRadius,
                        c = r.forceCornerRadius,
                        l = r.cornerIsExternal,
                        s = r.startAngle,
                        f = r.endAngle,
                        p = r.className;
                    if (a < i || s === f) return null;
                    var h = (0, E.Z)("recharts-sector", p),
                        d = a - i,
                        y = H(u, d, 0, !0);
                    return e = y > 0 && 360 > Math.abs(s - f) ? s4({
                        cx: n,
                        cy: o,
                        innerRadius: i,
                        outerRadius: a,
                        cornerRadius: Math.min(y, d / 2),
                        forceCornerRadius: c,
                        cornerIsExternal: l,
                        startAngle: s,
                        endAngle: f
                    }) : s5({
                        cx: n,
                        cy: o,
                        innerRadius: i,
                        outerRadius: a,
                        startAngle: s,
                        endAngle: f
                    }), k.createElement("path", s1({}, tA(r, !0), {
                        className: h,
                        d: e,
                        role: "img"
                    }))
                },
                s9 = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

            function ft(t) {
                return (ft = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function fe(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function fr(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? fe(Object(r), !0).forEach(function(e) {
                        var n, o;
                        n = e, o = r[e], (n = function(t) {
                            var e = function(t, e) {
                                if ("object" != ft(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != ft(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == ft(e) ? e : String(e)
                        }(n)) in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : fe(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function fn(t) {
                var e = t.shapeType,
                    r = t.elementProps;
                switch (e) {
                    case "rectangle":
                        return k.createElement(nU, r);
                    case "trapezoid":
                        return k.createElement(sQ, r);
                    case "sector":
                        return k.createElement(s8, r);
                    case "symbols":
                        if ("symbols" === e) return k.createElement(eK, r);
                        break;
                    default:
                        return null
                }
            }

            function fo(t) {
                var e, r = t.option,
                    n = t.shapeType,
                    o = t.propTransformer,
                    i = t.activeClassName,
                    a = t.isActive,
                    u = function(t, e) {
                        if (null == t) return {};
                        var r, n, o = function(t, e) {
                            if (null == t) return {};
                            var r, n, o = {},
                                i = Object.keys(t);
                            for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                        }
                        return o
                    }(t, s9);
                if ((0, k.isValidElement)(r)) e = (0, k.cloneElement)(r, fr(fr({}, u), (0, k.isValidElement)(r) ? r.props : r));
                else if (te()(r)) e = r(u);
                else if (sW()(r) && !sX()(r)) {
                    var c = (void 0 === o ? function(t, e) {
                        return fr(fr({}, e), t)
                    } : o)(r, u);
                    e = k.createElement(fn, {
                        shapeType: n,
                        elementProps: c
                    })
                } else e = k.createElement(fn, {
                    shapeType: n,
                    elementProps: u
                });
                return a ? k.createElement(tX, {
                    className: void 0 === i ? "recharts-active-shape" : i
                }, e) : e
            }

            function fi(t, e) {
                return null != e && "trapezoids" in t.props
            }

            function fa(t, e) {
                return null != e && "sectors" in t.props
            }

            function fu(t, e) {
                return null != e && "points" in t.props
            }

            function fc(t, e) {
                var r, n, o = t.x === (null == e || null === (r = e.labelViewBox) || void 0 === r ? void 0 : r.x) || t.x === e.x,
                    i = t.y === (null == e || null === (n = e.labelViewBox) || void 0 === n ? void 0 : n.y) || t.y === e.y;
                return o && i
            }

            function fl(t, e) {
                var r = t.endAngle === e.endAngle,
                    n = t.startAngle === e.startAngle;
                return r && n
            }

            function fs(t, e) {
                var r = t.x === e.x,
                    n = t.y === e.y,
                    o = t.z === e.z;
                return r && n && o
            }

            function ff() {}

            function fp(t, e, r) {
                t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + r) / 6)
            }

            function fh(t) {
                this._context = t
            }

            function fd(t) {
                this._context = t
            }

            function fy(t) {
                this._context = t
            }
            fh.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 3:
                            fp(this, this._x1, this._y1);
                        case 2:
                            this._context.lineTo(this._x1, this._y1)
                    }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, e) {
                    switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                        default:
                            fp(this, t, e)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
                }
            }, fd.prototype = {
                areaStart: ff,
                areaEnd: ff,
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x2, this._y2), this._context.closePath();
                            break;
                        case 2:
                            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                            break;
                        case 3:
                            this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
                    }
                },
                point: function(t, e) {
                    switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1, this._x2 = t, this._y2 = e;
                            break;
                        case 1:
                            this._point = 2, this._x3 = t, this._y3 = e;
                            break;
                        case 2:
                            this._point = 3, this._x4 = t, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6);
                            break;
                        default:
                            fp(this, t, e)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
                }
            }, fy.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
                },
                lineEnd: function() {
                    (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, e) {
                    switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1;
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3;
                            var r = (this._x0 + 4 * this._x1 + t) / 6,
                                n = (this._y0 + 4 * this._y1 + e) / 6;
                            this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
                            break;
                        case 3:
                            this._point = 4;
                        default:
                            fp(this, t, e)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
                }
            };
            class fv {
                constructor(t, e) {
                    this._context = t, this._x = e
                }
                areaStart() {
                    this._line = 0
                }
                areaEnd() {
                    this._line = NaN
                }
                lineStart() {
                    this._point = 0
                }
                lineEnd() {
                    (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                }
                point(t, e) {
                    switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                            break;
                        case 1:
                            this._point = 2;
                        default:
                            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, e, t, e) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + e) / 2, t, this._y0, t, e)
                    }
                    this._x0 = t, this._y0 = e
                }
            }

            function fm(t) {
                this._context = t
            }

            function fb(t) {
                this._context = t
            }

            function fg(t) {
                return new fb(t)
            }

            function fx(t, e, r) {
                var n = t._x1 - t._x0,
                    o = e - t._x1,
                    i = (t._y1 - t._y0) / (n || o < 0 && -0),
                    a = (r - t._y1) / (o || n < 0 && -0);
                return ((i < 0 ? -1 : 1) + (a < 0 ? -1 : 1)) * Math.min(Math.abs(i), Math.abs(a), .5 * Math.abs((i * o + a * n) / (n + o))) || 0
            }

            function fO(t, e) {
                var r = t._x1 - t._x0;
                return r ? (3 * (t._y1 - t._y0) / r - e) / 2 : e
            }

            function fw(t, e, r) {
                var n = t._x0,
                    o = t._y0,
                    i = t._x1,
                    a = t._y1,
                    u = (i - n) / 3;
                t._context.bezierCurveTo(n + u, o + u * e, i - u, a - u * r, i, a)
            }

            function fj(t) {
                this._context = t
            }

            function fS(t) {
                this._context = new fA(t)
            }

            function fA(t) {
                this._context = t
            }

            function fP(t) {
                this._context = t
            }

            function fE(t) {
                var e, r, n = t.length - 1,
                    o = Array(n),
                    i = Array(n),
                    a = Array(n);
                for (o[0] = 0, i[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e) o[e] = 1, i[e] = 4, a[e] = 4 * t[e] + 2 * t[e + 1];
                for (o[n - 1] = 2, i[n - 1] = 7, a[n - 1] = 8 * t[n - 1] + t[n], e = 1; e < n; ++e) r = o[e] / i[e - 1], i[e] -= r, a[e] -= r * a[e - 1];
                for (o[n - 1] = a[n - 1] / i[n - 1], e = n - 2; e >= 0; --e) o[e] = (a[e] - o[e + 1]) / i[e];
                for (e = 0, i[n - 1] = (t[n] + o[n - 1]) / 2; e < n - 1; ++e) i[e] = 2 * t[e + 1] - o[e + 1];
                return [o, i]
            }

            function fk(t, e) {
                this._context = t, this._t = e
            }

            function fM(t) {
                return t[0]
            }

            function f_(t) {
                return t[1]
            }

            function fT(t, e) {
                var r = eN(!0),
                    n = null,
                    o = fg,
                    i = null,
                    a = eU(u);

                function u(u) {
                    var c, l, s, f = (u = u1(u)).length,
                        p = !1;
                    for (null == n && (i = o(s = a())), c = 0; c <= f; ++c) !(c < f && r(l = u[c], c, u)) === p && ((p = !p) ? i.lineStart() : i.lineEnd()), p && i.point(+t(l, c, u), +e(l, c, u));
                    if (s) return i = null, s + "" || null
                }
                return t = "function" == typeof t ? t : void 0 === t ? fM : eN(t), e = "function" == typeof e ? e : void 0 === e ? f_ : eN(e), u.x = function(e) {
                    return arguments.length ? (t = "function" == typeof e ? e : eN(+e), u) : t
                }, u.y = function(t) {
                    return arguments.length ? (e = "function" == typeof t ? t : eN(+t), u) : e
                }, u.defined = function(t) {
                    return arguments.length ? (r = "function" == typeof t ? t : eN(!!t), u) : r
                }, u.curve = function(t) {
                    return arguments.length ? (o = t, null != n && (i = o(n)), u) : o
                }, u.context = function(t) {
                    return arguments.length ? (null == t ? n = i = null : i = o(n = t), u) : n
                }, u
            }

            function fC(t, e, r) {
                var n = null,
                    o = eN(!0),
                    i = null,
                    a = fg,
                    u = null,
                    c = eU(l);

                function l(l) {
                    var s, f, p, h, d, y = (l = u1(l)).length,
                        v = !1,
                        m = Array(y),
                        b = Array(y);
                    for (null == i && (u = a(d = c())), s = 0; s <= y; ++s) {
                        if (!(s < y && o(h = l[s], s, l)) === v) {
                            if (v = !v) f = s, u.areaStart(), u.lineStart();
                            else {
                                for (u.lineEnd(), u.lineStart(), p = s - 1; p >= f; --p) u.point(m[p], b[p]);
                                u.lineEnd(), u.areaEnd()
                            }
                        }
                        v && (m[s] = +t(h, s, l), b[s] = +e(h, s, l), u.point(n ? +n(h, s, l) : m[s], r ? +r(h, s, l) : b[s]))
                    }
                    if (d) return u = null, d + "" || null
                }

                function s() {
                    return fT().defined(o).curve(a).context(i)
                }
                return t = "function" == typeof t ? t : void 0 === t ? fM : eN(+t), e = "function" == typeof e ? e : void 0 === e ? eN(0) : eN(+e), r = "function" == typeof r ? r : void 0 === r ? f_ : eN(+r), l.x = function(e) {
                    return arguments.length ? (t = "function" == typeof e ? e : eN(+e), n = null, l) : t
                }, l.x0 = function(e) {
                    return arguments.length ? (t = "function" == typeof e ? e : eN(+e), l) : t
                }, l.x1 = function(t) {
                    return arguments.length ? (n = null == t ? null : "function" == typeof t ? t : eN(+t), l) : n
                }, l.y = function(t) {
                    return arguments.length ? (e = "function" == typeof t ? t : eN(+t), r = null, l) : e
                }, l.y0 = function(t) {
                    return arguments.length ? (e = "function" == typeof t ? t : eN(+t), l) : e
                }, l.y1 = function(t) {
                    return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : eN(+t), l) : r
                }, l.lineX0 = l.lineY0 = function() {
                    return s().x(t).y(e)
                }, l.lineY1 = function() {
                    return s().x(t).y(r)
                }, l.lineX1 = function() {
                    return s().x(n).y(e)
                }, l.defined = function(t) {
                    return arguments.length ? (o = "function" == typeof t ? t : eN(!!t), l) : o
                }, l.curve = function(t) {
                    return arguments.length ? (a = t, null != i && (u = a(i)), l) : a
                }, l.context = function(t) {
                    return arguments.length ? (null == t ? i = u = null : u = a(i = t), l) : i
                }, l
            }

            function fI(t) {
                return (fI = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function fD() {
                return (fD = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function fN(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function fB(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? fN(Object(r), !0).forEach(function(e) {
                        var n, o;
                        n = e, o = r[e], (n = function(t) {
                            var e = function(t, e) {
                                if ("object" != fI(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != fI(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == fI(e) ? e : String(e)
                        }(n)) in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : fN(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }
            fm.prototype = {
                areaStart: ff,
                areaEnd: ff,
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    this._point && this._context.closePath()
                },
                point: function(t, e) {
                    t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e))
                }
            }, fb.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, e) {
                    switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                            break;
                        case 1:
                            this._point = 2;
                        default:
                            this._context.lineTo(t, e)
                    }
                }
            }, fj.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x1, this._y1);
                            break;
                        case 3:
                            fw(this, this._t0, fO(this, this._t0))
                    }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, e) {
                    var r = NaN;
                    if (e = +e, (t = +t) !== this._x1 || e !== this._y1) {
                        switch (this._point) {
                            case 0:
                                this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                                break;
                            case 1:
                                this._point = 2;
                                break;
                            case 2:
                                this._point = 3, fw(this, fO(this, r = fx(this, t, e)), r);
                                break;
                            default:
                                fw(this, this._t0, r = fx(this, t, e))
                        }
                        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = r
                    }
                }
            }, (fS.prototype = Object.create(fj.prototype)).point = function(t, e) {
                fj.prototype.point.call(this, e, t)
            }, fA.prototype = {
                moveTo: function(t, e) {
                    this._context.moveTo(e, t)
                },
                closePath: function() {
                    this._context.closePath()
                },
                lineTo: function(t, e) {
                    this._context.lineTo(e, t)
                },
                bezierCurveTo: function(t, e, r, n, o, i) {
                    this._context.bezierCurveTo(e, t, n, r, i, o)
                }
            }, fP.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x = [], this._y = []
                },
                lineEnd: function() {
                    var t = this._x,
                        e = this._y,
                        r = t.length;
                    if (r) {
                        if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), 2 === r) this._context.lineTo(t[1], e[1]);
                        else
                            for (var n = fE(t), o = fE(e), i = 0, a = 1; a < r; ++i, ++a) this._context.bezierCurveTo(n[0][i], o[0][i], n[1][i], o[1][i], t[a], e[a])
                    }(this._line || 0 !== this._line && 1 === r) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
                },
                point: function(t, e) {
                    this._x.push(+t), this._y.push(+e)
                }
            }, fk.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x = this._y = NaN, this._point = 0
                },
                lineEnd: function() {
                    0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
                },
                point: function(t, e) {
                    switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                            break;
                        case 1:
                            this._point = 2;
                        default:
                            if (this._t <= 0) this._context.lineTo(this._x, e), this._context.lineTo(t, e);
                            else {
                                var r = this._x * (1 - this._t) + t * this._t;
                                this._context.lineTo(r, this._y), this._context.lineTo(r, e)
                            }
                    }
                    this._x = t, this._y = e
                }
            };
            var fL = {
                    curveBasisClosed: function(t) {
                        return new fd(t)
                    },
                    curveBasisOpen: function(t) {
                        return new fy(t)
                    },
                    curveBasis: function(t) {
                        return new fh(t)
                    },
                    curveBumpX: function(t) {
                        return new fv(t, !0)
                    },
                    curveBumpY: function(t) {
                        return new fv(t, !1)
                    },
                    curveLinearClosed: function(t) {
                        return new fm(t)
                    },
                    curveLinear: fg,
                    curveMonotoneX: function(t) {
                        return new fj(t)
                    },
                    curveMonotoneY: function(t) {
                        return new fS(t)
                    },
                    curveNatural: function(t) {
                        return new fP(t)
                    },
                    curveStep: function(t) {
                        return new fk(t, .5)
                    },
                    curveStepAfter: function(t) {
                        return new fk(t, 1)
                    },
                    curveStepBefore: function(t) {
                        return new fk(t, 0)
                    }
                },
                fR = function(t) {
                    return t.x === +t.x && t.y === +t.y
                },
                f$ = function(t) {
                    return t.x
                },
                fz = function(t) {
                    return t.y
                },
                fU = function(t, e) {
                    if (te()(t)) return t;
                    var r = "curve".concat(eg()(t));
                    return ("curveMonotone" === r || "curveBump" === r) && e ? fL["".concat(r).concat("vertical" === e ? "Y" : "X")] : fL[r] || fg
                },
                fF = function(t) {
                    var e, r = t.type,
                        n = t.points,
                        o = void 0 === n ? [] : n,
                        i = t.baseLine,
                        a = t.layout,
                        u = t.connectNulls,
                        c = void 0 !== u && u,
                        l = fU(void 0 === r ? "linear" : r, a),
                        s = c ? o.filter(function(t) {
                            return fR(t)
                        }) : o;
                    if (Array.isArray(i)) {
                        var f = c ? i.filter(function(t) {
                                return fR(t)
                            }) : i,
                            p = s.map(function(t, e) {
                                return fB(fB({}, t), {}, {
                                    base: f[e]
                                })
                            });
                        return (e = "vertical" === a ? fC().y(fz).x1(f$).x0(function(t) {
                            return t.base.x
                        }) : fC().x(f$).y1(fz).y0(function(t) {
                            return t.base.y
                        })).defined(fR).curve(l), e(p)
                    }
                    return (e = "vertical" === a && F(i) ? fC().y(fz).x1(f$).x0(i) : F(i) ? fC().x(f$).y1(fz).y0(i) : fT().x(f$).y(fz)).defined(fR).curve(l), e(s)
                },
                fW = function(t) {
                    var e = t.className,
                        r = t.points,
                        n = t.path,
                        o = t.pathRef;
                    if ((!r || !r.length) && !n) return null;
                    var i = r && r.length ? fF(t) : n;
                    return k.createElement("path", fD({}, tA(t, !1), ts(t), {
                        className: (0, E.Z)("recharts-curve", e),
                        d: i,
                        ref: o
                    }))
                };

            function fq(t) {
                return (fq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var fX = ["x", "y", "top", "left", "width", "height", "className"];

            function fH() {
                return (fH = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function fV(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var fZ = function(t) {
                var e = t.x,
                    r = void 0 === e ? 0 : e,
                    n = t.y,
                    o = void 0 === n ? 0 : n,
                    i = t.top,
                    a = void 0 === i ? 0 : i,
                    u = t.left,
                    c = void 0 === u ? 0 : u,
                    l = t.width,
                    s = void 0 === l ? 0 : l,
                    f = t.height,
                    p = void 0 === f ? 0 : f,
                    h = t.className,
                    d = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? fV(Object(r), !0).forEach(function(e) {
                                var n, o;
                                n = e, o = r[e], (n = function(t) {
                                    var e = function(t, e) {
                                        if ("object" != fq(t) || !t) return t;
                                        var r = t[Symbol.toPrimitive];
                                        if (void 0 !== r) {
                                            var n = r.call(t, e || "default");
                                            if ("object" != fq(n)) return n;
                                            throw TypeError("@@toPrimitive must return a primitive value.")
                                        }
                                        return ("string" === e ? String : Number)(t)
                                    }(t, "string");
                                    return "symbol" == fq(e) ? e : String(e)
                                }(n)) in t ? Object.defineProperty(t, n, {
                                    value: o,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[n] = o
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : fV(Object(r)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                            })
                        }
                        return t
                    }({
                        x: r,
                        y: o,
                        top: a,
                        left: c,
                        width: s,
                        height: p
                    }, function(t, e) {
                        if (null == t) return {};
                        var r, n, o = function(t, e) {
                            if (null == t) return {};
                            var r, n, o = {},
                                i = Object.keys(t);
                            for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                        }
                        return o
                    }(t, fX));
                return F(r) && F(o) && F(s) && F(p) && F(a) && F(c) ? k.createElement("path", fH({}, tA(d, !0), {
                    className: (0, E.Z)("recharts-cross", h),
                    d: "M".concat(r, ",").concat(a, "v").concat(p, "M").concat(c, ",").concat(o, "h").concat(s)
                })) : null
            };

            function fY(t) {
                var e = t.cx,
                    r = t.cy,
                    n = t.radius,
                    o = t.startAngle,
                    i = t.endAngle;
                return {
                    points: [l_(e, r, n, o), l_(e, r, n, i)],
                    cx: e,
                    cy: r,
                    radius: n,
                    startAngle: o,
                    endAngle: i
                }
            }

            function fK(t) {
                return (fK = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function fG(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function fJ(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? fG(Object(r), !0).forEach(function(e) {
                        var n, o;
                        n = e, o = r[e], (n = function(t) {
                            var e = function(t, e) {
                                if ("object" != fK(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != fK(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == fK(e) ? e : String(e)
                        }(n)) in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : fG(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function fQ(t) {
                var e, r, n = t.element,
                    o = t.tooltipEventType,
                    i = t.isActive,
                    a = t.activeCoordinate,
                    u = t.activePayload,
                    c = t.offset,
                    l = t.activeTooltipIndex,
                    s = t.tooltipAxisBandSize,
                    f = t.layout,
                    p = t.chartName;
                if (!n || !n.props.cursor || !i || !a || "ScatterChart" !== p && "axis" !== o) return null;
                var h = fW;
                if ("ScatterChart" === p) r = a, h = fZ;
                else if ("BarChart" === p) e = s / 2, r = {
                    stroke: "none",
                    fill: "#ccc",
                    x: "horizontal" === f ? a.x - e : c.left + .5,
                    y: "horizontal" === f ? c.top + .5 : a.y - e,
                    width: "horizontal" === f ? s : c.width - 1,
                    height: "horizontal" === f ? c.height - 1 : s
                }, h = nU;
                else if ("radial" === f) {
                    var d = fY(a),
                        y = d.cx,
                        v = d.cy,
                        m = d.radius;
                    r = {
                        cx: y,
                        cy: v,
                        startAngle: d.startAngle,
                        endAngle: d.endAngle,
                        innerRadius: m,
                        outerRadius: m
                    }, h = s8
                } else r = {
                    points: function(t, e, r) {
                        var n, o, i, a;
                        if ("horizontal" === t) i = n = e.x, o = r.top, a = r.top + r.height;
                        else if ("vertical" === t) a = o = e.y, n = r.left, i = r.left + r.width;
                        else if (null != e.cx && null != e.cy) {
                            if ("centric" !== t) return fY(e);
                            var u = e.cx,
                                c = e.cy,
                                l = e.innerRadius,
                                s = e.outerRadius,
                                f = e.angle,
                                p = l_(u, c, l, f),
                                h = l_(u, c, s, f);
                            n = p.x, o = p.y, i = h.x, a = h.y
                        }
                        return [{
                            x: n,
                            y: o
                        }, {
                            x: i,
                            y: a
                        }]
                    }(f, a, c)
                }, h = fW;
                var b = fJ(fJ(fJ(fJ({
                    stroke: "#ccc",
                    pointerEvents: "none"
                }, c), r), tA(n.props.cursor, !1)), {}, {
                    payload: u,
                    payloadIndex: l,
                    className: (0, E.Z)("recharts-tooltip-cursor", n.props.cursor.className)
                });
                return (0, k.isValidElement)(n.props.cursor) ? (0, k.cloneElement)(n.props.cursor, b) : (0, k.createElement)(h, b)
            }
            var f0 = ["item"],
                f1 = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

            function f2(t) {
                return (f2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function f6() {
                return (f6 = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function f3(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var n, o, i, a, u = [],
                            c = !0,
                            l = !1;
                        try {
                            if (i = (r = r.call(t)).next, 0 === e) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); c = !0);
                        } catch (t) {
                            l = !0, o = t
                        } finally {
                            try {
                                if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return
                            } finally {
                                if (l) throw o
                            }
                        }
                        return u
                    }
                }(t, e) || pe(t, e) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f5(t, e) {
                if (null == t) return {};
                var r, n, o = function(t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }

            function f4() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (t) {}
                return (f4 = function() {
                    return !!t
                })()
            }

            function f7(t) {
                return (f7 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function f8(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function f9(t, e) {
                return (f9 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function pt(t) {
                return function(t) {
                    if (Array.isArray(t)) return pr(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || pe(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function pe(t, e) {
                if (t) {
                    if ("string" == typeof t) return pr(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pr(t, e)
                }
            }

            function pr(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function pn(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function po(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? pn(Object(r), !0).forEach(function(e) {
                        pi(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : pn(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function pi(t, e, r) {
                return (e = pa(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function pa(t) {
                var e = function(t, e) {
                    if ("object" != f2(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != f2(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == f2(e) ? e : String(e)
            }
            var pu = {
                    xAxis: ["bottom", "top"],
                    yAxis: ["left", "right"]
                },
                pc = {
                    width: "100%",
                    height: "100%"
                },
                pl = {
                    x: 0,
                    y: 0
                };

            function ps(t) {
                return t
            }
            var pf = function(t, e, r, n) {
                    var o = e.find(function(t) {
                        return t && t.index === r
                    });
                    if (o) {
                        if ("horizontal" === t) return {
                            x: o.coordinate,
                            y: n.y
                        };
                        if ("vertical" === t) return {
                            x: n.x,
                            y: o.coordinate
                        };
                        if ("centric" === t) {
                            var i = o.coordinate,
                                a = n.radius;
                            return po(po(po({}, n), l_(n.cx, n.cy, a, i)), {}, {
                                angle: i,
                                radius: a
                            })
                        }
                        var u = o.coordinate,
                            c = n.angle;
                        return po(po(po({}, n), l_(n.cx, n.cy, u, c)), {}, {
                            angle: c,
                            radius: u
                        })
                    }
                    return pl
                },
                pp = function(t, e) {
                    var r = e.graphicalItems,
                        n = e.dataStartIndex,
                        o = e.dataEndIndex,
                        i = (null != r ? r : []).reduce(function(t, e) {
                            var r = e.props.data;
                            return r && r.length ? [].concat(pt(t), pt(r)) : t
                        }, []);
                    return i.length > 0 ? i : t && t.length && F(n) && F(o) ? t.slice(n, o + 1) : []
                };

            function ph(t) {
                return "number" === t ? [0, "auto"] : void 0
            }
            var pd = function(t, e, r, n) {
                    var o = t.graphicalItems,
                        i = t.tooltipAxis,
                        a = pp(e, t);
                    return r < 0 || !o || !o.length || r >= a.length ? null : o.reduce(function(o, u) {
                        var c, l, s = null !== (c = u.props.data) && void 0 !== c ? c : e;
                        return (s && t.dataStartIndex + t.dataEndIndex !== 0 && (s = s.slice(t.dataStartIndex, t.dataEndIndex + 1)), l = i.dataKey && !i.allowDuplicatedCategory ? K(void 0 === s ? a : s, i.dataKey, n) : s && s[r] || a[r]) ? [].concat(pt(o), [ln(u, l)]) : o
                    }, [])
                },
                py = function(t, e, r, n) {
                    var o = n || {
                            x: t.chartX,
                            y: t.chartY
                        },
                        i = "horizontal" === r ? o.x : "vertical" === r ? o.y : "centric" === r ? o.angle : o.radius,
                        a = t.orderedTooltipTicks,
                        u = t.tooltipAxis,
                        c = t.tooltipTicks,
                        l = cF(i, a, c, u);
                    if (l >= 0 && c) {
                        var s = c[l] && c[l].value,
                            f = pd(t, e, l, s),
                            p = pf(r, a, l, o);
                        return {
                            activeTooltipIndex: l,
                            activeLabel: s,
                            activePayload: f,
                            activeCoordinate: p
                        }
                    }
                    return null
                },
                pv = function(t, e) {
                    var r = e.axes,
                        n = e.graphicalItems,
                        o = e.axisType,
                        i = e.axisIdKey,
                        a = e.stackGroups,
                        u = e.dataStartIndex,
                        c = e.dataEndIndex,
                        l = t.layout,
                        s = t.children,
                        f = t.stackOffset,
                        p = cK(l, o);
                    return r.reduce(function(e, r) {
                        var h = r.props,
                            d = h.type,
                            y = h.dataKey,
                            v = h.allowDataOverflow,
                            m = h.allowDuplicatedCategory,
                            b = h.scale,
                            g = h.ticks,
                            x = h.includeHidden,
                            O = r.props[i];
                        if (e[O]) return e;
                        var w = pp(t.data, {
                                graphicalItems: n.filter(function(t) {
                                    return t.props[i] === O
                                }),
                                dataStartIndex: u,
                                dataEndIndex: c
                            }),
                            j = w.length;
                        (function(t, e, r) {
                            if ("number" === r && !0 === e && Array.isArray(t)) {
                                var n = null == t ? void 0 : t[0],
                                    o = null == t ? void 0 : t[1];
                                if (n && o && F(n) && F(o)) return !0
                            }
                            return !1
                        })(r.props.domain, v, d) && (P = lt(r.props.domain, null, v), p && ("number" === d || "auto" !== b) && (k = cU(w, y, "category")));
                        var S = ph(d);
                        if (!P || 0 === P.length) {
                            var A, P, E, k, M, _ = null !== (M = r.props.domain) && void 0 !== M ? M : S;
                            if (y) {
                                if (P = cU(w, y, d), "category" === d && p) {
                                    var T = Z(P);
                                    m && T ? (E = P, P = tB()(0, j)) : m || (P = lr(_, P, r).reduce(function(t, e) {
                                        return t.indexOf(e) >= 0 ? t : [].concat(pt(t), [e])
                                    }, []))
                                } else if ("category" === d) P = m ? P.filter(function(t) {
                                    return "" !== t && !Q()(t)
                                }) : lr(_, P, r).reduce(function(t, e) {
                                    return t.indexOf(e) >= 0 || "" === e || Q()(e) ? t : [].concat(pt(t), [e])
                                }, []);
                                else if ("number" === d) {
                                    var C = cZ(w, n.filter(function(t) {
                                        return t.props[i] === O && (x || !t.props.hide)
                                    }), y, o, l);
                                    C && (P = C)
                                }
                                p && ("number" === d || "auto" !== b) && (k = cU(w, y, "category"))
                            } else P = p ? tB()(0, j) : a && a[O] && a[O].hasStack && "number" === d ? "expand" === f ? [0, 1] : c7(a[O].stackGroups, u, c) : cY(w, n.filter(function(t) {
                                return t.props[i] === O && (x || !t.props.hide)
                            }), d, l, !0);
                            "number" === d ? (P = sD(s, P, O, o, g), _ && (P = lt(_, P, v))) : "category" === d && _ && P.every(function(t) {
                                return _.indexOf(t) >= 0
                            }) && (P = _)
                        }
                        return po(po({}, e), {}, pi({}, O, po(po({}, r.props), {}, {
                            axisType: o,
                            domain: P,
                            categoricalDomain: k,
                            duplicateDomain: E,
                            originalDomain: null !== (A = r.props.domain) && void 0 !== A ? A : S,
                            isCategorical: p,
                            layout: l
                        })))
                    }, {})
                },
                pm = function(t, e) {
                    var r = e.graphicalItems,
                        n = e.Axis,
                        o = e.axisType,
                        i = e.axisIdKey,
                        a = e.stackGroups,
                        u = e.dataStartIndex,
                        c = e.dataEndIndex,
                        l = t.layout,
                        s = t.children,
                        f = pp(t.data, {
                            graphicalItems: r,
                            dataStartIndex: u,
                            dataEndIndex: c
                        }),
                        p = f.length,
                        h = cK(l, o),
                        d = -1;
                    return r.reduce(function(t, e) {
                        var y, v = e.props[i],
                            m = ph("number");
                        return t[v] ? t : (d++, y = h ? tB()(0, p) : a && a[v] && a[v].hasStack ? sD(s, y = c7(a[v].stackGroups, u, c), v, o) : sD(s, y = lt(m, cY(f, r.filter(function(t) {
                            return t.props[i] === v && !t.props.hide
                        }), "number", l), n.defaultProps.allowDataOverflow), v, o), po(po({}, t), {}, pi({}, v, po(po({
                            axisType: o
                        }, n.defaultProps), {}, {
                            hide: !0,
                            orientation: L()(pu, "".concat(o, ".").concat(d % 2), null),
                            domain: y,
                            originalDomain: m,
                            isCategorical: h,
                            layout: l
                        }))))
                    }, {})
                },
                pb = function(t, e) {
                    var r = e.axisType,
                        n = void 0 === r ? "xAxis" : r,
                        o = e.AxisComp,
                        i = e.graphicalItems,
                        a = e.stackGroups,
                        u = e.dataStartIndex,
                        c = e.dataEndIndex,
                        l = t.children,
                        s = "".concat(n, "Id"),
                        f = tx(l, o),
                        p = {};
                    return f && f.length ? p = pv(t, {
                        axes: f,
                        graphicalItems: i,
                        axisType: n,
                        axisIdKey: s,
                        stackGroups: a,
                        dataStartIndex: u,
                        dataEndIndex: c
                    }) : i && i.length && (p = pm(t, {
                        Axis: o,
                        graphicalItems: i,
                        axisType: n,
                        axisIdKey: s,
                        stackGroups: a,
                        dataStartIndex: u,
                        dataEndIndex: c
                    })), p
                },
                pg = function(t) {
                    var e = V(t),
                        r = cG(e, !1, !0);
                    return {
                        tooltipTicks: r,
                        orderedTooltipTicks: tR()(r, function(t) {
                            return t.coordinate
                        }),
                        tooltipAxis: e,
                        tooltipAxisBandSize: le(e, r)
                    }
                },
                px = function(t) {
                    var e = t.children,
                        r = t.defaultShowTooltip,
                        n = tO(e, lj),
                        o = 0,
                        i = 0;
                    return t.data && 0 !== t.data.length && (i = t.data.length - 1), n && n.props && (n.props.startIndex >= 0 && (o = n.props.startIndex), n.props.endIndex >= 0 && (i = n.props.endIndex)), {
                        chartX: 0,
                        chartY: 0,
                        dataStartIndex: o,
                        dataEndIndex: i,
                        activeTooltipIndex: -1,
                        isTooltipActive: !!r
                    }
                },
                pO = function(t) {
                    return "horizontal" === t ? {
                        numericAxisName: "yAxis",
                        cateAxisName: "xAxis"
                    } : "vertical" === t ? {
                        numericAxisName: "xAxis",
                        cateAxisName: "yAxis"
                    } : "centric" === t ? {
                        numericAxisName: "radiusAxis",
                        cateAxisName: "angleAxis"
                    } : {
                        numericAxisName: "angleAxis",
                        cateAxisName: "radiusAxis"
                    }
                },
                pw = function(t, e) {
                    var r = t.props,
                        n = t.graphicalItems,
                        o = t.xAxisMap,
                        i = void 0 === o ? {} : o,
                        a = t.yAxisMap,
                        u = void 0 === a ? {} : a,
                        c = r.width,
                        l = r.height,
                        s = r.children,
                        f = r.margin || {},
                        p = tO(s, lj),
                        h = tO(s, rc),
                        d = Object.keys(u).reduce(function(t, e) {
                            var r = u[e],
                                n = r.orientation;
                            return r.mirror || r.hide ? t : po(po({}, t), {}, pi({}, n, t[n] + r.width))
                        }, {
                            left: f.left || 0,
                            right: f.right || 0
                        }),
                        y = Object.keys(i).reduce(function(t, e) {
                            var r = i[e],
                                n = r.orientation;
                            return r.mirror || r.hide ? t : po(po({}, t), {}, pi({}, n, L()(t, "".concat(n)) + r.height))
                        }, {
                            top: f.top || 0,
                            bottom: f.bottom || 0
                        }),
                        v = po(po({}, y), d),
                        m = v.bottom;
                    p && (v.bottom += p.props.height || lj.defaultProps.height), h && e && (v = cH(v, n, r, e));
                    var b = c - v.left - v.right,
                        g = l - v.top - v.bottom;
                    return po(po({
                        brushBottom: m
                    }, v), {}, {
                        width: Math.max(b, 0),
                        height: Math.max(g, 0)
                    })
                },
                pj = ["points", "className", "baseLinePoints", "connectNulls"];

            function pS() {
                return (pS = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function pA(t) {
                return function(t) {
                    if (Array.isArray(t)) return pP(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return pP(t, void 0);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pP(t, void 0)
                    }
                }(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function pP(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var pE = function(t) {
                    return t && t.x === +t.x && t.y === +t.y
                },
                pk = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        e = [
                            []
                        ];
                    return t.forEach(function(t) {
                        pE(t) ? e[e.length - 1].push(t) : e[e.length - 1].length > 0 && e.push([])
                    }), pE(t[0]) && e[e.length - 1].push(t[0]), e[e.length - 1].length <= 0 && (e = e.slice(0, -1)), e
                },
                pM = function(t, e) {
                    var r = pk(t);
                    e && (r = [r.reduce(function(t, e) {
                        return [].concat(pA(t), pA(e))
                    }, [])]);
                    var n = r.map(function(t) {
                        return t.reduce(function(t, e, r) {
                            return "".concat(t).concat(0 === r ? "M" : "L").concat(e.x, ",").concat(e.y)
                        }, "")
                    }).join("");
                    return 1 === r.length ? "".concat(n, "Z") : n
                },
                p_ = function(t, e, r) {
                    var n = pM(t, r);
                    return "".concat("Z" === n.slice(-1) ? n.slice(0, -1) : n, "L").concat(pM(e.reverse(), r).slice(1))
                },
                pT = function(t) {
                    var e = t.points,
                        r = t.className,
                        n = t.baseLinePoints,
                        o = t.connectNulls,
                        i = function(t, e) {
                            if (null == t) return {};
                            var r, n, o = function(t, e) {
                                if (null == t) return {};
                                var r, n, o = {},
                                    i = Object.keys(t);
                                for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                                return o
                            }(t, e);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(t);
                                for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                            }
                            return o
                        }(t, pj);
                    if (!e || !e.length) return null;
                    var a = (0, E.Z)("recharts-polygon", r);
                    if (n && n.length) {
                        var u = i.stroke && "none" !== i.stroke,
                            c = p_(e, n, o);
                        return k.createElement("g", {
                            className: a
                        }, k.createElement("path", pS({}, tA(i, !0), {
                            fill: "Z" === c.slice(-1) ? i.fill : "none",
                            stroke: "none",
                            d: c
                        })), u ? k.createElement("path", pS({}, tA(i, !0), {
                            fill: "none",
                            d: pM(e, o)
                        })) : null, u ? k.createElement("path", pS({}, tA(i, !0), {
                            fill: "none",
                            d: pM(n, o)
                        })) : null)
                    }
                    var l = pM(e, o);
                    return k.createElement("path", pS({}, tA(i, !0), {
                        fill: "Z" === l.slice(-1) ? i.fill : "none",
                        className: a,
                        d: l
                    }))
                };

            function pC(t) {
                return (pC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function pI() {
                return (pI = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function pD(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function pN(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? pD(Object(r), !0).forEach(function(e) {
                        pz(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : pD(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function pB(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, pU(n.key), n)
                }
            }

            function pL() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (t) {}
                return (pL = function() {
                    return !!t
                })()
            }

            function pR(t) {
                return (pR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function p$(t, e) {
                return (p$ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function pz(t, e, r) {
                return (e = pU(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function pU(t) {
                var e = function(t, e) {
                    if ("object" != pC(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != pC(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == pC(e) ? e : String(e)
            }
            var pF = Math.PI / 180,
                pW = function(t) {
                    var e, r;

                    function n() {
                        var t, e;
                        return function(t, e) {
                                if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                            }(this, n), t = n, e = arguments, t = pR(t),
                            function(t, e) {
                                if (e && ("object" === pC(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t)
                            }(this, pL() ? Reflect.construct(t, e || [], pR(this).constructor) : t.apply(this, e))
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && p$(t, e)
                    }(n, t), e = [{
                        key: "getTickLineCoord",
                        value: function(t) {
                            var e = this.props,
                                r = e.cx,
                                n = e.cy,
                                o = e.radius,
                                i = e.orientation,
                                a = e.tickSize,
                                u = l_(r, n, o, t.coordinate),
                                c = l_(r, n, o + ("inner" === i ? -1 : 1) * (a || 8), t.coordinate);
                            return {
                                x1: u.x,
                                y1: u.y,
                                x2: c.x,
                                y2: c.y
                            }
                        }
                    }, {
                        key: "getTickTextAnchor",
                        value: function(t) {
                            var e = this.props.orientation,
                                r = Math.cos(-t.coordinate * pF);
                            return r > 1e-5 ? "outer" === e ? "start" : "end" : r < -.00001 ? "outer" === e ? "end" : "start" : "middle"
                        }
                    }, {
                        key: "renderAxisLine",
                        value: function() {
                            var t = this.props,
                                e = t.cx,
                                r = t.cy,
                                n = t.radius,
                                o = t.axisLine,
                                i = t.axisLineType,
                                a = pN(pN({}, tA(this.props, !1)), {}, {
                                    fill: "none"
                                }, tA(o, !1));
                            if ("circle" === i) return k.createElement(rs, pI({
                                className: "recharts-polar-angle-axis-line"
                            }, a, {
                                cx: e,
                                cy: r,
                                r: n
                            }));
                            var u = this.props.ticks.map(function(t) {
                                return l_(e, r, n, t.coordinate)
                            });
                            return k.createElement(pT, pI({
                                className: "recharts-polar-angle-axis-line"
                            }, a, {
                                points: u
                            }))
                        }
                    }, {
                        key: "renderTicks",
                        value: function() {
                            var t = this,
                                e = this.props,
                                r = e.ticks,
                                o = e.tick,
                                i = e.tickLine,
                                a = e.tickFormatter,
                                u = e.stroke,
                                c = tA(this.props, !1),
                                l = tA(o, !1),
                                s = pN(pN({}, c), {}, {
                                    fill: "none"
                                }, tA(i, !1)),
                                f = r.map(function(e, r) {
                                    var f = t.getTickLineCoord(e),
                                        p = pN(pN(pN({
                                            textAnchor: t.getTickTextAnchor(e)
                                        }, c), {}, {
                                            stroke: "none",
                                            fill: u
                                        }, l), {}, {
                                            index: r,
                                            payload: e,
                                            x: f.x2,
                                            y: f.y2
                                        });
                                    return k.createElement(tX, pI({
                                        className: (0, E.Z)("recharts-polar-angle-axis-tick", lB(o)),
                                        key: "tick-".concat(e.coordinate)
                                    }, tf(t.props, e, r)), i && k.createElement("line", pI({
                                        className: "recharts-polar-angle-axis-tick-line"
                                    }, s, f)), o && n.renderTickItem(o, p, a ? a(e.value, r) : e.value))
                                });
                            return k.createElement(tX, {
                                className: "recharts-polar-angle-axis-ticks"
                            }, f)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props,
                                e = t.ticks,
                                r = t.radius,
                                n = t.axisLine;
                            return !(r <= 0) && e && e.length ? k.createElement(tX, {
                                className: (0, E.Z)("recharts-polar-angle-axis", this.props.className)
                            }, n && this.renderAxisLine(), this.renderTicks()) : null
                        }
                    }], r = [{
                        key: "renderTickItem",
                        value: function(t, e, r) {
                            return k.isValidElement(t) ? k.cloneElement(t, e) : te()(t) ? t(e) : k.createElement(ox, pI({}, e, {
                                className: "recharts-polar-angle-axis-tick-value"
                            }), r)
                        }
                    }], e && pB(n.prototype, e), r && pB(n, r), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n
                }(k.PureComponent);
            pz(pW, "displayName", "PolarAngleAxis"), pz(pW, "axisType", "angleAxis"), pz(pW, "defaultProps", {
                type: "category",
                angleAxisId: 0,
                scale: "auto",
                cx: 0,
                cy: 0,
                orientation: "outer",
                axisLine: !0,
                tickLine: !0,
                tickSize: 8,
                tick: !0,
                hide: !1,
                allowDuplicatedCategory: !0
            });
            var pq = r(84753),
                pX = r.n(pq),
                pH = r(22762),
                pV = r.n(pH),
                pZ = ["cx", "cy", "angle", "ticks", "axisLine"],
                pY = ["ticks", "tick", "angle", "tickFormatter", "stroke"];

            function pK(t) {
                return (pK = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function pG() {
                return (pG = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function pJ(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function pQ(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? pJ(Object(r), !0).forEach(function(e) {
                        p5(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : pJ(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function p0(t, e) {
                if (null == t) return {};
                var r, n, o = function(t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }

            function p1(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, p4(n.key), n)
                }
            }

            function p2() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (t) {}
                return (p2 = function() {
                    return !!t
                })()
            }

            function p6(t) {
                return (p6 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function p3(t, e) {
                return (p3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function p5(t, e, r) {
                return (e = p4(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function p4(t) {
                var e = function(t, e) {
                    if ("object" != pK(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != pK(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == pK(e) ? e : String(e)
            }
            var p7 = function(t) {
                var e, r;

                function n() {
                    var t, e;
                    return function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, n), t = n, e = arguments, t = p6(t),
                        function(t, e) {
                            if (e && ("object" === pK(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                            return function(t) {
                                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t
                            }(t)
                        }(this, p2() ? Reflect.construct(t, e || [], p6(this).constructor) : t.apply(this, e))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && p3(t, e)
                }(n, t), e = [{
                    key: "getTickValueCoord",
                    value: function(t) {
                        var e = t.coordinate,
                            r = this.props,
                            n = r.angle;
                        return l_(r.cx, r.cy, e, n)
                    }
                }, {
                    key: "getTickTextAnchor",
                    value: function() {
                        var t;
                        switch (this.props.orientation) {
                            case "left":
                                t = "end";
                                break;
                            case "right":
                                t = "start";
                                break;
                            default:
                                t = "middle"
                        }
                        return t
                    }
                }, {
                    key: "getViewBox",
                    value: function() {
                        var t = this.props,
                            e = t.cx,
                            r = t.cy,
                            n = t.angle,
                            o = t.ticks,
                            i = pX()(o, function(t) {
                                return t.coordinate || 0
                            });
                        return {
                            cx: e,
                            cy: r,
                            startAngle: n,
                            endAngle: n,
                            innerRadius: pV()(o, function(t) {
                                return t.coordinate || 0
                            }).coordinate || 0,
                            outerRadius: i.coordinate || 0
                        }
                    }
                }, {
                    key: "renderAxisLine",
                    value: function() {
                        var t = this.props,
                            e = t.cx,
                            r = t.cy,
                            n = t.angle,
                            o = t.ticks,
                            i = t.axisLine,
                            a = p0(t, pZ),
                            u = o.reduce(function(t, e) {
                                return [Math.min(t[0], e.coordinate), Math.max(t[1], e.coordinate)]
                            }, [1 / 0, -1 / 0]),
                            c = l_(e, r, u[0], n),
                            l = l_(e, r, u[1], n),
                            s = pQ(pQ(pQ({}, tA(a, !1)), {}, {
                                fill: "none"
                            }, tA(i, !1)), {}, {
                                x1: c.x,
                                y1: c.y,
                                x2: l.x,
                                y2: l.y
                            });
                        return k.createElement("line", pG({
                            className: "recharts-polar-radius-axis-line"
                        }, s))
                    }
                }, {
                    key: "renderTicks",
                    value: function() {
                        var t = this,
                            e = this.props,
                            r = e.ticks,
                            o = e.tick,
                            i = e.angle,
                            a = e.tickFormatter,
                            u = e.stroke,
                            c = p0(e, pY),
                            l = this.getTickTextAnchor(),
                            s = tA(c, !1),
                            f = tA(o, !1),
                            p = r.map(function(e, r) {
                                var c = t.getTickValueCoord(e),
                                    p = pQ(pQ(pQ(pQ({
                                        textAnchor: l,
                                        transform: "rotate(".concat(90 - i, ", ").concat(c.x, ", ").concat(c.y, ")")
                                    }, s), {}, {
                                        stroke: "none",
                                        fill: u
                                    }, f), {}, {
                                        index: r
                                    }, c), {}, {
                                        payload: e
                                    });
                                return k.createElement(tX, pG({
                                    className: (0, E.Z)("recharts-polar-radius-axis-tick", lB(o)),
                                    key: "tick-".concat(e.coordinate)
                                }, tf(t.props, e, r)), n.renderTickItem(o, p, a ? a(e.value, r) : e.value))
                            });
                        return k.createElement(tX, {
                            className: "recharts-polar-radius-axis-ticks"
                        }, p)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.ticks,
                            r = t.axisLine,
                            n = t.tick;
                        return e && e.length ? k.createElement(tX, {
                            className: (0, E.Z)("recharts-polar-radius-axis", this.props.className)
                        }, r && this.renderAxisLine(), n && this.renderTicks(), lV.renderCallByParent(this.props, this.getViewBox())) : null
                    }
                }], r = [{
                    key: "renderTickItem",
                    value: function(t, e, r) {
                        return k.isValidElement(t) ? k.cloneElement(t, e) : te()(t) ? t(e) : k.createElement(ox, pG({}, e, {
                            className: "recharts-polar-radius-axis-tick-value"
                        }), r)
                    }
                }], e && p1(n.prototype, e), r && p1(n, r), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n
            }(k.PureComponent);
            p5(p7, "displayName", "PolarRadiusAxis"), p5(p7, "axisType", "radiusAxis"), p5(p7, "defaultProps", {
                type: "number",
                radiusAxisId: 0,
                cx: 0,
                cy: 0,
                angle: 0,
                orientation: "right",
                stroke: "#ccc",
                axisLine: !0,
                tick: !0,
                tickCount: 5,
                allowDataOverflow: !1,
                scale: "auto",
                allowDuplicatedCategory: !0
            });
            var p8 = r(10928),
                p9 = r.n(p8);

            function ht(t) {
                return (ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var he = ["valueAccessor"],
                hr = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

            function hn(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function ho() {
                return (ho = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function hi(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ha(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? hi(Object(r), !0).forEach(function(e) {
                        var n, o;
                        n = e, o = r[e], (n = function(t) {
                            var e = function(t, e) {
                                if ("object" != ht(t) || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != ht(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == ht(e) ? e : String(e)
                        }(n)) in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : hi(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function hu(t, e) {
                if (null == t) return {};
                var r, n, o = function(t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }
            var hc = function(t) {
                return Array.isArray(t.value) ? p9()(t.value) : t.value
            };

            function hl(t) {
                var e = t.valueAccessor,
                    r = void 0 === e ? hc : e,
                    n = hu(t, he),
                    o = n.data,
                    i = n.dataKey,
                    a = n.clockWise,
                    u = n.id,
                    c = n.textBreakAll,
                    l = hu(n, hr);
                return o && o.length ? k.createElement(tX, {
                    className: "recharts-label-list"
                }, o.map(function(t, e) {
                    var n = Q()(i) ? r(t, e) : cz(t && t.payload, i),
                        o = Q()(u) ? {} : {
                            id: "".concat(u, "-").concat(e)
                        };
                    return k.createElement(lV, ho({}, tA(t, !0), l, o, {
                        parentViewBox: t.parentViewBox,
                        value: n,
                        textBreakAll: c,
                        viewBox: lV.parseViewBox(Q()(a) ? t : ha(ha({}, t), {}, {
                            clockWise: a
                        })),
                        key: "label-".concat(e),
                        index: e
                    }))
                })) : null
            }

            function hs(t) {
                return (hs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function hf() {
                return (hf = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function hp(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function hh(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? hp(Object(r), !0).forEach(function(e) {
                        hg(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : hp(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function hd(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, hx(n.key), n)
                }
            }

            function hy() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (t) {}
                return (hy = function() {
                    return !!t
                })()
            }

            function hv(t) {
                return (hv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function hm(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function hb(t, e) {
                return (hb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function hg(t, e, r) {
                return (e = hx(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function hx(t) {
                var e = function(t, e) {
                    if ("object" != hs(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != hs(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == hs(e) ? e : String(e)
            }
            hl.displayName = "LabelList", hl.renderCallByParent = function(t, e) {
                var r, n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (!t || !t.children && n && !t.label) return null;
                var o = tx(t.children, hl).map(function(t, r) {
                    return (0, k.cloneElement)(t, {
                        data: e,
                        key: "labelList-".concat(r)
                    })
                });
                return n ? [(r = t.label) ? !0 === r ? k.createElement(hl, {
                    key: "labelList-implicit",
                    data: e
                }) : k.isValidElement(r) || te()(r) ? k.createElement(hl, {
                    key: "labelList-implicit",
                    data: e,
                    content: r
                }) : tn()(r) ? k.createElement(hl, ho({
                    data: e
                }, r, {
                    key: "labelList-implicit"
                })) : null : null].concat(function(t) {
                    if (Array.isArray(t)) return hn(t)
                }(o) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(o) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return hn(t, void 0);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hn(t, void 0)
                    }
                }(o) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()) : o
            };
            var hO = function(t) {
                var e, r;

                function n(t) {
                    var e, r, o;
                    return function(t, e) {
                        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                    }(this, n), r = n, o = [t], r = hv(r), e = function(t, e) {
                        if (e && ("object" === hs(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                        return hm(t)
                    }(this, hy() ? Reflect.construct(r, o || [], hv(this).constructor) : r.apply(this, o)), hg(hm(e), "pieRef", null), hg(hm(e), "sectorRefs", []), hg(hm(e), "id", X("recharts-pie-")), hg(hm(e), "handleAnimationEnd", function() {
                        var t = e.props.onAnimationEnd;
                        e.setState({
                            isAnimationFinished: !0
                        }), te()(t) && t()
                    }), hg(hm(e), "handleAnimationStart", function() {
                        var t = e.props.onAnimationStart;
                        e.setState({
                            isAnimationFinished: !1
                        }), te()(t) && t()
                    }), e.state = {
                        isAnimationFinished: !t.isAnimationActive,
                        prevIsAnimationActive: t.isAnimationActive,
                        prevAnimationId: t.animationId,
                        sectorToFocus: 0
                    }, e
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && hb(t, e)
                }(n, t), e = [{
                    key: "isActiveIndex",
                    value: function(t) {
                        var e = this.props.activeIndex;
                        return Array.isArray(e) ? -1 !== e.indexOf(t) : t === e
                    }
                }, {
                    key: "hasActiveIndex",
                    value: function() {
                        var t = this.props.activeIndex;
                        return Array.isArray(t) ? 0 !== t.length : t || 0 === t
                    }
                }, {
                    key: "renderLabels",
                    value: function(t) {
                        if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
                        var e = this.props,
                            r = e.label,
                            o = e.labelLine,
                            i = e.dataKey,
                            a = e.valueKey,
                            u = tA(this.props, !1),
                            c = tA(r, !1),
                            l = tA(o, !1),
                            s = r && r.offsetRadius || 20,
                            f = t.map(function(t, e) {
                                var f = (t.startAngle + t.endAngle) / 2,
                                    p = l_(t.cx, t.cy, t.outerRadius + s, f),
                                    h = hh(hh(hh(hh({}, u), t), {}, {
                                        stroke: "none"
                                    }, c), {}, {
                                        index: e,
                                        textAnchor: n.getTextAnchor(p.x, t.cx)
                                    }, p),
                                    d = hh(hh(hh(hh({}, u), t), {}, {
                                        fill: "none",
                                        stroke: t.fill
                                    }, l), {}, {
                                        index: e,
                                        points: [l_(t.cx, t.cy, t.outerRadius, f), p],
                                        key: "line"
                                    }),
                                    y = i;
                                return Q()(i) && Q()(a) ? y = "value" : Q()(i) && (y = a), k.createElement(tX, {
                                    key: "label-".concat(t.startAngle, "-").concat(t.endAngle, "-").concat(t.midAngle, "-").concat(e)
                                }, o && n.renderLabelLineItem(o, d), n.renderLabelItem(r, h, cz(t, y)))
                            });
                        return k.createElement(tX, {
                            className: "recharts-pie-labels"
                        }, f)
                    }
                }, {
                    key: "renderSectorsStatically",
                    value: function(t) {
                        var e = this,
                            r = this.props,
                            n = r.activeShape,
                            o = r.blendStroke,
                            i = r.inactiveShape;
                        return t.map(function(r, a) {
                            if ((null == r ? void 0 : r.startAngle) === 0 && (null == r ? void 0 : r.endAngle) === 0 && 1 !== t.length) return null;
                            var u = e.isActiveIndex(a),
                                c = i && e.hasActiveIndex() ? i : null,
                                l = hh(hh({}, r), {}, {
                                    stroke: o ? r.fill : r.stroke,
                                    tabIndex: -1
                                });
                            return k.createElement(tX, hf({
                                ref: function(t) {
                                    t && !e.sectorRefs.includes(t) && e.sectorRefs.push(t)
                                },
                                tabIndex: -1,
                                className: "recharts-pie-sector"
                            }, tf(e.props, r, a), {
                                key: "sector-".concat(null == r ? void 0 : r.startAngle, "-").concat(null == r ? void 0 : r.endAngle, "-").concat(r.midAngle, "-").concat(a)
                            }), k.createElement(fo, hf({
                                option: u ? n : c,
                                isActive: u,
                                shapeType: "sector"
                            }, l)))
                        })
                    }
                }, {
                    key: "renderSectorsWithAnimation",
                    value: function() {
                        var t = this,
                            e = this.props,
                            r = e.sectors,
                            n = e.isAnimationActive,
                            o = e.animationBegin,
                            i = e.animationDuration,
                            a = e.animationEasing,
                            u = e.animationId,
                            c = this.state,
                            l = c.prevSectors,
                            s = c.prevIsAnimationActive;
                        return k.createElement(nm, {
                            begin: o,
                            duration: i,
                            isActive: n,
                            easing: a,
                            from: {
                                t: 0
                            },
                            to: {
                                t: 1
                            },
                            key: "pie-".concat(u, "-").concat(s),
                            onAnimationStart: this.handleAnimationStart,
                            onAnimationEnd: this.handleAnimationEnd
                        }, function(e) {
                            var n = e.t,
                                o = [],
                                i = (r && r[0]).startAngle;
                            return r.forEach(function(t, e) {
                                var r = l && l[e],
                                    a = e > 0 ? L()(t, "paddingAngle", 0) : 0;
                                if (r) {
                                    var u = Y(r.endAngle - r.startAngle, t.endAngle - t.startAngle),
                                        c = hh(hh({}, t), {}, {
                                            startAngle: i + a,
                                            endAngle: i + u(n) + a
                                        });
                                    o.push(c), i = c.endAngle
                                } else {
                                    var s = Y(0, t.endAngle - t.startAngle)(n),
                                        f = hh(hh({}, t), {}, {
                                            startAngle: i + a,
                                            endAngle: i + s + a
                                        });
                                    o.push(f), i = f.endAngle
                                }
                            }), k.createElement(tX, null, t.renderSectorsStatically(o))
                        })
                    }
                }, {
                    key: "attachKeyboardHandlers",
                    value: function(t) {
                        var e = this;
                        t.onkeydown = function(t) {
                            if (!t.altKey) switch (t.key) {
                                case "ArrowLeft":
                                    var r = ++e.state.sectorToFocus % e.sectorRefs.length;
                                    e.sectorRefs[r].focus(), e.setState({
                                        sectorToFocus: r
                                    });
                                    break;
                                case "ArrowRight":
                                    var n = --e.state.sectorToFocus < 0 ? e.sectorRefs.length - 1 : e.state.sectorToFocus % e.sectorRefs.length;
                                    e.sectorRefs[n].focus(), e.setState({
                                        sectorToFocus: n
                                    });
                                    break;
                                case "Escape":
                                    e.sectorRefs[e.state.sectorToFocus].blur(), e.setState({
                                        sectorToFocus: 0
                                    })
                            }
                        }
                    }
                }, {
                    key: "renderSectors",
                    value: function() {
                        var t = this.props,
                            e = t.sectors,
                            r = t.isAnimationActive,
                            n = this.state.prevSectors;
                        return r && e && e.length && (!n || !cr()(n, e)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(e)
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        this.pieRef && this.attachKeyboardHandlers(this.pieRef)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.props,
                            r = e.hide,
                            n = e.sectors,
                            o = e.className,
                            i = e.label,
                            a = e.cx,
                            u = e.cy,
                            c = e.innerRadius,
                            l = e.outerRadius,
                            s = e.isAnimationActive,
                            f = this.state.isAnimationFinished;
                        if (r || !n || !n.length || !F(a) || !F(u) || !F(c) || !F(l)) return null;
                        var p = (0, E.Z)("recharts-pie", o);
                        return k.createElement(tX, {
                            tabIndex: this.props.rootTabIndex,
                            className: p,
                            ref: function(e) {
                                t.pieRef = e
                            }
                        }, this.renderSectors(), i && this.renderLabels(n), lV.renderCallByParent(this.props, null, !1), (!s || f) && hl.renderCallByParent(this.props, n, !1))
                    }
                }], r = [{
                    key: "getDerivedStateFromProps",
                    value: function(t, e) {
                        return e.prevIsAnimationActive !== t.isAnimationActive ? {
                            prevIsAnimationActive: t.isAnimationActive,
                            prevAnimationId: t.animationId,
                            curSectors: t.sectors,
                            prevSectors: [],
                            isAnimationFinished: !0
                        } : t.isAnimationActive && t.animationId !== e.prevAnimationId ? {
                            prevAnimationId: t.animationId,
                            curSectors: t.sectors,
                            prevSectors: e.curSectors,
                            isAnimationFinished: !0
                        } : t.sectors !== e.curSectors ? {
                            curSectors: t.sectors,
                            isAnimationFinished: !0
                        } : null
                    }
                }, {
                    key: "getTextAnchor",
                    value: function(t, e) {
                        return t > e ? "start" : t < e ? "end" : "middle"
                    }
                }, {
                    key: "renderLabelLineItem",
                    value: function(t, e) {
                        if (k.isValidElement(t)) return k.cloneElement(t, e);
                        if (te()(t)) return t(e);
                        var r = (0, E.Z)("recharts-pie-label-line", "boolean" != typeof t ? t.className : "");
                        return k.createElement(fW, hf({}, e, {
                            type: "linear",
                            className: r
                        }))
                    }
                }, {
                    key: "renderLabelItem",
                    value: function(t, e, r) {
                        if (k.isValidElement(t)) return k.cloneElement(t, e);
                        var n = r;
                        if (te()(t) && (n = t(e), k.isValidElement(n))) return n;
                        var o = (0, E.Z)("recharts-pie-label-text", "boolean" == typeof t || te()(t) ? "" : t.className);
                        return k.createElement(ox, hf({}, e, {
                            alignmentBaseline: "middle",
                            className: o
                        }), n)
                    }
                }], e && hd(n.prototype, e), r && hd(n, r), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n
            }(k.PureComponent);
            hg(hO, "displayName", "Pie"), hg(hO, "defaultProps", {
                stroke: "#fff",
                fill: "#808080",
                legendType: "rect",
                cx: "50%",
                cy: "50%",
                startAngle: 0,
                endAngle: 360,
                innerRadius: 0,
                outerRadius: "80%",
                paddingAngle: 0,
                labelLine: !0,
                hide: !1,
                minAngle: 0,
                isAnimationActive: !eo.isSsr,
                animationBegin: 400,
                animationDuration: 1500,
                animationEasing: "ease",
                nameKey: "name",
                blendStroke: !1,
                rootTabIndex: 0
            }), hg(hO, "parseDeltaAngle", function(t, e) {
                return z(e - t) * Math.min(Math.abs(e - t), 360)
            }), hg(hO, "getRealPieData", function(t) {
                var e = t.props,
                    r = e.data,
                    n = e.children,
                    o = tA(t.props, !1),
                    i = tx(n, P);
                return r && r.length ? r.map(function(t, e) {
                    return hh(hh(hh({
                        payload: t
                    }, o), t), i && i[e] && i[e].props)
                }) : i && i.length ? i.map(function(t) {
                    return hh(hh({}, o), t.props)
                }) : []
            }), hg(hO, "parseCoordinateOfPie", function(t, e) {
                var r = e.top,
                    n = e.left,
                    o = e.width,
                    i = e.height,
                    a = lT(o, i);
                return {
                    cx: n + H(t.props.cx, o, o / 2),
                    cy: r + H(t.props.cy, i, i / 2),
                    innerRadius: H(t.props.innerRadius, a, 0),
                    outerRadius: H(t.props.outerRadius, a, .8 * a),
                    maxRadius: t.props.maxRadius || Math.sqrt(o * o + i * i) / 2
                }
            }), hg(hO, "getComposedData", function(t) {
                var e, r, n = t.item,
                    o = t.offset,
                    i = hO.getRealPieData(n);
                if (!i || !i.length) return null;
                var a = n.props,
                    u = a.cornerRadius,
                    c = a.startAngle,
                    l = a.endAngle,
                    s = a.paddingAngle,
                    f = a.dataKey,
                    p = a.nameKey,
                    h = a.valueKey,
                    d = a.tooltipType,
                    y = Math.abs(n.props.minAngle),
                    v = hO.parseCoordinateOfPie(n, o),
                    m = hO.parseDeltaAngle(c, l),
                    b = Math.abs(m),
                    g = f;
                Q()(f) && Q()(h) ? (G(!1, 'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0'), g = "value") : Q()(f) && (G(!1, 'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0'), g = h);
                var x = i.filter(function(t) {
                        return 0 !== cz(t, g, 0)
                    }).length,
                    O = b - x * y - (b >= 360 ? x : x - 1) * s,
                    w = i.reduce(function(t, e) {
                        var r = cz(e, g, 0);
                        return t + (F(r) ? r : 0)
                    }, 0);
                return w > 0 && (e = i.map(function(t, e) {
                    var n, o = cz(t, g, 0),
                        i = cz(t, p, e),
                        a = (F(o) ? o : 0) / w,
                        l = (n = e ? r.endAngle + z(m) * s * (0 !== o ? 1 : 0) : c) + z(m) * ((0 !== o ? y : 0) + a * O),
                        f = (n + l) / 2,
                        h = (v.innerRadius + v.outerRadius) / 2,
                        b = [{
                            name: i,
                            value: o,
                            payload: t,
                            dataKey: g,
                            type: d
                        }],
                        x = l_(v.cx, v.cy, h, f);
                    return r = hh(hh(hh({
                        percent: a,
                        cornerRadius: u,
                        name: i,
                        tooltipPayload: b,
                        midAngle: f,
                        middleRadius: h,
                        tooltipPosition: x
                    }, t), v), {}, {
                        value: cz(t, g),
                        startAngle: n,
                        endAngle: l,
                        payload: t,
                        paddingAngle: z(m) * s
                    })
                })), hh(hh({}, v), {}, {
                    sectors: e,
                    data: i
                })
            });
            var hw = (i = (n = {
                    chartName: "PieChart",
                    GraphicalChild: hO,
                    validateTooltipEventTypes: ["item"],
                    defaultTooltipEventType: "item",
                    legendContent: "children",
                    axisComponents: [{
                        axisType: "angleAxis",
                        AxisComp: pW
                    }, {
                        axisType: "radiusAxis",
                        AxisComp: p7
                    }],
                    formatAxisMap: function(t, e, r, n, o) {
                        var i = t.width,
                            a = t.height,
                            u = t.startAngle,
                            c = t.endAngle,
                            l = H(t.cx, i, i / 2),
                            s = H(t.cy, a, a / 2),
                            f = lT(i, a, r),
                            p = H(t.innerRadius, f, 0),
                            h = H(t.outerRadius, f, .8 * f);
                        return Object.keys(e).reduce(function(t, r) {
                            var i, a = e[r],
                                f = a.domain,
                                d = a.reversed;
                            if (Q()(a.range)) "angleAxis" === n ? i = [u, c] : "radiusAxis" === n && (i = [p, h]), d && (i = [i[1], i[0]]);
                            else {
                                var y, v = function(t) {
                                    if (Array.isArray(t)) return t
                                }(y = i = a.range) || function(t, e) {
                                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                    if (null != r) {
                                        var n, o, i, a, u = [],
                                            c = !0,
                                            l = !1;
                                        try {
                                            for (i = (r = r.call(t)).next; !(c = (n = i.call(r)).done) && (u.push(n.value), 2 !== u.length); c = !0);
                                        } catch (t) {
                                            l = !0, o = t
                                        } finally {
                                            try {
                                                if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return
                                            } finally {
                                                if (l) throw o
                                            }
                                        }
                                        return u
                                    }
                                }(y, 2) || function(t, e) {
                                    if (t) {
                                        if ("string" == typeof t) return lk(t, 2);
                                        var r = Object.prototype.toString.call(t).slice(8, -1);
                                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lk(t, 2)
                                    }
                                }(y, 2) || function() {
                                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }();
                                u = v[0], c = v[1]
                            }
                            var m = c0(a, o),
                                b = m.realScaleType,
                                g = m.scale;
                            g.domain(f).range(i), c1(g);
                            var x = c5(g, lP(lP({}, a), {}, {
                                    realScaleType: b
                                })),
                                O = lP(lP(lP({}, a), x), {}, {
                                    range: i,
                                    radius: h,
                                    realScaleType: b,
                                    scale: g,
                                    cx: l,
                                    cy: s,
                                    innerRadius: p,
                                    outerRadius: h,
                                    startAngle: u,
                                    endAngle: c
                                });
                            return lP(lP({}, t), {}, lE({}, r, O))
                        }, {})
                    },
                    defaultProps: {
                        layout: "centric",
                        startAngle: 0,
                        endAngle: 360,
                        cx: "50%",
                        cy: "50%",
                        innerRadius: 0,
                        outerRadius: "80%"
                    }
                }).chartName, a = n.GraphicalChild, c = void 0 === (u = n.defaultTooltipEventType) ? "axis" : u, s = void 0 === (l = n.validateTooltipEventTypes) ? ["axis"] : l, f = n.axisComponents, p = n.legendContent, h = n.formatAxisMap, d = n.defaultProps, y = function(t, e) {
                    var r = e.graphicalItems,
                        n = e.stackGroups,
                        o = e.offset,
                        i = e.updateId,
                        a = e.dataStartIndex,
                        u = e.dataEndIndex,
                        c = t.barSize,
                        l = t.layout,
                        s = t.barGap,
                        p = t.barCategoryGap,
                        h = t.maxBarSize,
                        d = pO(l),
                        y = d.numericAxisName,
                        v = d.cateAxisName,
                        m = !!r && !!r.length && r.some(function(t) {
                            var e = tv(t && t.type);
                            return e && e.indexOf("Bar") >= 0
                        }),
                        b = [];
                    return r.forEach(function(r, d) {
                        var g = pp(t.data, {
                                graphicalItems: [r],
                                dataStartIndex: a,
                                dataEndIndex: u
                            }),
                            x = r.props,
                            O = x.dataKey,
                            w = x.maxBarSize,
                            j = r.props["".concat(y, "Id")],
                            S = r.props["".concat(v, "Id")],
                            A = f.reduce(function(t, n) {
                                var o = e["".concat(n.axisType, "Map")],
                                    i = r.props["".concat(n.axisType, "Id")];
                                o && o[i] || "zAxis" === n.axisType || t$(!1);
                                var a = o[i];
                                return po(po({}, t), {}, pi(pi({}, n.axisType, a), "".concat(n.axisType, "Ticks"), cG(a)))
                            }, {}),
                            P = A[v],
                            E = A["".concat(v, "Ticks")],
                            k = n && n[j] && n[j].hasStack && c4(r, n[j].stackGroups),
                            M = tv(r.type).indexOf("Bar") >= 0,
                            _ = le(P, E),
                            T = [],
                            C = m && cq({
                                barSize: c,
                                stackGroups: n,
                                totalSize: "xAxis" === v ? A[v].width : "yAxis" === v ? A[v].height : void 0
                            });
                        if (M) {
                            var I, D, N = Q()(w) ? h : w,
                                B = null !== (I = null !== (D = le(P, E, !0)) && void 0 !== D ? D : N) && void 0 !== I ? I : 0;
                            T = cX({
                                barGap: s,
                                barCategoryGap: p,
                                bandSize: B !== _ ? B : _,
                                sizeList: C[S],
                                maxBarSize: N
                            }), B !== _ && (T = T.map(function(t) {
                                return po(po({}, t), {}, {
                                    position: po(po({}, t.position), {}, {
                                        offset: t.position.offset - B / 2
                                    })
                                })
                            }))
                        }
                        var L = r && r.type && r.type.getComposedData;
                        L && b.push({
                            props: po(po({}, L(po(po({}, A), {}, {
                                displayedData: g,
                                props: t,
                                dataKey: O,
                                item: r,
                                bandSize: _,
                                barPosition: T,
                                offset: o,
                                stackedData: k,
                                layout: l,
                                dataStartIndex: a,
                                dataEndIndex: u
                            }))), {}, pi(pi(pi({
                                key: r.key || "item-".concat(d)
                            }, y, A[y]), v, A[v]), "animationId", i)),
                            childIndex: tg(t.children).indexOf(r),
                            item: r
                        })
                    }), b
                }, v = function(t, e) {
                    var r = t.props,
                        n = t.dataStartIndex,
                        o = t.dataEndIndex,
                        u = t.updateId;
                    if (!tw({
                            props: r
                        })) return null;
                    var c = r.children,
                        l = r.layout,
                        s = r.stackOffset,
                        p = r.data,
                        d = r.reverseStackOrder,
                        v = pO(l),
                        m = v.numericAxisName,
                        b = v.cateAxisName,
                        g = tx(c, a),
                        x = c3(p, g, "".concat(m, "Id"), "".concat(b, "Id"), s, d),
                        O = f.reduce(function(t, e) {
                            var i = "".concat(e.axisType, "Map");
                            return po(po({}, t), {}, pi({}, i, pb(r, po(po({}, e), {}, {
                                graphicalItems: g,
                                stackGroups: e.axisType === m && x,
                                dataStartIndex: n,
                                dataEndIndex: o
                            }))))
                        }, {}),
                        w = pw(po(po({}, O), {}, {
                            props: r,
                            graphicalItems: g
                        }), null == e ? void 0 : e.legendBBox);
                    Object.keys(O).forEach(function(t) {
                        O[t] = h(r, O[t], w, t.replace("Map", ""), i)
                    });
                    var j = pg(O["".concat(b, "Map")]),
                        S = y(r, po(po({}, O), {}, {
                            dataStartIndex: n,
                            dataEndIndex: o,
                            updateId: u,
                            graphicalItems: g,
                            stackGroups: x,
                            offset: w
                        }));
                    return po(po({
                        formattedGraphicalItems: S,
                        graphicalItems: g,
                        offset: w,
                        stackGroups: x
                    }, j), O)
                }, o = function(t) {
                    var e;

                    function r(t) {
                        var e, n, o, a, u;
                        return function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, r), a = r, u = [t], a = f7(a), o = function(t, e) {
                            if (e && ("object" === f2(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                            return f8(t)
                        }(this, f4() ? Reflect.construct(a, u || [], f7(this).constructor) : a.apply(this, u)), pi(f8(o), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), pi(f8(o), "accessibilityManager", new sU), pi(f8(o), "handleLegendBBoxUpdate", function(t) {
                            if (t) {
                                var e = o.state,
                                    r = e.dataStartIndex,
                                    n = e.dataEndIndex,
                                    i = e.updateId;
                                o.setState(po({
                                    legendBBox: t
                                }, v({
                                    props: o.props,
                                    dataStartIndex: r,
                                    dataEndIndex: n,
                                    updateId: i
                                }, po(po({}, o.state), {}, {
                                    legendBBox: t
                                }))))
                            }
                        }), pi(f8(o), "handleReceiveSyncEvent", function(t, e, r) {
                            o.props.syncId === t && (r !== o.eventEmitterSymbol || "function" == typeof o.props.syncMethod) && o.applySyncEvent(e)
                        }), pi(f8(o), "handleBrushChange", function(t) {
                            var e = t.startIndex,
                                r = t.endIndex;
                            if (e !== o.state.dataStartIndex || r !== o.state.dataEndIndex) {
                                var n = o.state.updateId;
                                o.setState(function() {
                                    return po({
                                        dataStartIndex: e,
                                        dataEndIndex: r
                                    }, v({
                                        props: o.props,
                                        dataStartIndex: e,
                                        dataEndIndex: r,
                                        updateId: n
                                    }, o.state))
                                }), o.triggerSyncEvent({
                                    dataStartIndex: e,
                                    dataEndIndex: r
                                })
                            }
                        }), pi(f8(o), "handleMouseEnter", function(t) {
                            var e = o.getMouseInfo(t);
                            if (e) {
                                var r = po(po({}, e), {}, {
                                    isTooltipActive: !0
                                });
                                o.setState(r), o.triggerSyncEvent(r);
                                var n = o.props.onMouseEnter;
                                te()(n) && n(r, t)
                            }
                        }), pi(f8(o), "triggeredAfterMouseMove", function(t) {
                            var e = o.getMouseInfo(t),
                                r = e ? po(po({}, e), {}, {
                                    isTooltipActive: !0
                                }) : {
                                    isTooltipActive: !1
                                };
                            o.setState(r), o.triggerSyncEvent(r);
                            var n = o.props.onMouseMove;
                            te()(n) && n(r, t)
                        }), pi(f8(o), "handleItemMouseEnter", function(t) {
                            o.setState(function() {
                                return {
                                    isTooltipActive: !0,
                                    activeItem: t,
                                    activePayload: t.tooltipPayload,
                                    activeCoordinate: t.tooltipPosition || {
                                        x: t.cx,
                                        y: t.cy
                                    }
                                }
                            })
                        }), pi(f8(o), "handleItemMouseLeave", function() {
                            o.setState(function() {
                                return {
                                    isTooltipActive: !1
                                }
                            })
                        }), pi(f8(o), "handleMouseMove", function(t) {
                            t.persist(), o.throttleTriggeredAfterMouseMove(t)
                        }), pi(f8(o), "handleMouseLeave", function(t) {
                            o.throttleTriggeredAfterMouseMove.cancel();
                            var e = {
                                isTooltipActive: !1
                            };
                            o.setState(e), o.triggerSyncEvent(e);
                            var r = o.props.onMouseLeave;
                            te()(r) && r(e, t)
                        }), pi(f8(o), "handleOuterEvent", function(t) {
                            var e, r = tM(t),
                                n = L()(o.props, "".concat(r));
                            r && te()(n) && n(null !== (e = /.*touch.*/i.test(r) ? o.getMouseInfo(t.changedTouches[0]) : o.getMouseInfo(t)) && void 0 !== e ? e : {}, t)
                        }), pi(f8(o), "handleClick", function(t) {
                            var e = o.getMouseInfo(t);
                            if (e) {
                                var r = po(po({}, e), {}, {
                                    isTooltipActive: !0
                                });
                                o.setState(r), o.triggerSyncEvent(r);
                                var n = o.props.onClick;
                                te()(n) && n(r, t)
                            }
                        }), pi(f8(o), "handleMouseDown", function(t) {
                            var e = o.props.onMouseDown;
                            te()(e) && e(o.getMouseInfo(t), t)
                        }), pi(f8(o), "handleMouseUp", function(t) {
                            var e = o.props.onMouseUp;
                            te()(e) && e(o.getMouseInfo(t), t)
                        }), pi(f8(o), "handleTouchMove", function(t) {
                            null != t.changedTouches && t.changedTouches.length > 0 && o.throttleTriggeredAfterMouseMove(t.changedTouches[0])
                        }), pi(f8(o), "handleTouchStart", function(t) {
                            null != t.changedTouches && t.changedTouches.length > 0 && o.handleMouseDown(t.changedTouches[0])
                        }), pi(f8(o), "handleTouchEnd", function(t) {
                            null != t.changedTouches && t.changedTouches.length > 0 && o.handleMouseUp(t.changedTouches[0])
                        }), pi(f8(o), "triggerSyncEvent", function(t) {
                            void 0 !== o.props.syncId && sB.emit(sL, o.props.syncId, t, o.eventEmitterSymbol)
                        }), pi(f8(o), "applySyncEvent", function(t) {
                            var e = o.props,
                                r = e.layout,
                                n = e.syncMethod,
                                i = o.state.updateId,
                                a = t.dataStartIndex,
                                u = t.dataEndIndex;
                            if (void 0 !== t.dataStartIndex || void 0 !== t.dataEndIndex) o.setState(po({
                                dataStartIndex: a,
                                dataEndIndex: u
                            }, v({
                                props: o.props,
                                dataStartIndex: a,
                                dataEndIndex: u,
                                updateId: i
                            }, o.state)));
                            else if (void 0 !== t.activeTooltipIndex) {
                                var c = t.chartX,
                                    l = t.chartY,
                                    s = t.activeTooltipIndex,
                                    f = o.state,
                                    p = f.offset,
                                    h = f.tooltipTicks;
                                if (!p) return;
                                if ("function" == typeof n) s = n(h, t);
                                else if ("value" === n) {
                                    s = -1;
                                    for (var d = 0; d < h.length; d++)
                                        if (h[d].value === t.activeLabel) {
                                            s = d;
                                            break
                                        }
                                }
                                var y = po(po({}, p), {}, {
                                        x: p.left,
                                        y: p.top
                                    }),
                                    m = Math.min(c, y.x + y.width),
                                    b = Math.min(l, y.y + y.height),
                                    g = h[s] && h[s].value,
                                    x = pd(o.state, o.props.data, s),
                                    O = h[s] ? {
                                        x: "horizontal" === r ? h[s].coordinate : m,
                                        y: "horizontal" === r ? b : h[s].coordinate
                                    } : pl;
                                o.setState(po(po({}, t), {}, {
                                    activeLabel: g,
                                    activeCoordinate: O,
                                    activePayload: x,
                                    activeTooltipIndex: s
                                }))
                            } else o.setState(t)
                        }), pi(f8(o), "renderCursor", function(t) {
                            var e, r = o.state,
                                n = r.isTooltipActive,
                                a = r.activeCoordinate,
                                u = r.activePayload,
                                c = r.offset,
                                l = r.activeTooltipIndex,
                                s = r.tooltipAxisBandSize,
                                f = o.getTooltipEventType(),
                                p = null !== (e = t.props.active) && void 0 !== e ? e : n,
                                h = o.props.layout,
                                d = t.key || "_recharts-cursor";
                            return k.createElement(fQ, {
                                key: d,
                                activeCoordinate: a,
                                activePayload: u,
                                activeTooltipIndex: l,
                                chartName: i,
                                element: t,
                                isActive: p,
                                layout: h,
                                offset: c,
                                tooltipAxisBandSize: s,
                                tooltipEventType: f
                            })
                        }), pi(f8(o), "renderPolarAxis", function(t, e, r) {
                            var n = L()(t, "type.axisType"),
                                i = L()(o.state, "".concat(n, "Map")),
                                a = i && i[t.props["".concat(n, "Id")]];
                            return (0, k.cloneElement)(t, po(po({}, a), {}, {
                                className: (0, E.Z)(n, a.className),
                                key: t.key || "".concat(e, "-").concat(r),
                                ticks: cG(a, !0)
                            }))
                        }), pi(f8(o), "renderPolarGrid", function(t) {
                            var e = t.props,
                                r = e.radialLines,
                                n = e.polarAngles,
                                i = e.polarRadius,
                                a = o.state,
                                u = a.radiusAxisMap,
                                c = a.angleAxisMap,
                                l = V(u),
                                s = V(c),
                                f = s.cx,
                                p = s.cy,
                                h = s.innerRadius,
                                d = s.outerRadius;
                            return (0, k.cloneElement)(t, {
                                polarAngles: Array.isArray(n) ? n : cG(s, !0).map(function(t) {
                                    return t.coordinate
                                }),
                                polarRadius: Array.isArray(i) ? i : cG(l, !0).map(function(t) {
                                    return t.coordinate
                                }),
                                cx: f,
                                cy: p,
                                innerRadius: h,
                                outerRadius: d,
                                key: t.key || "polar-grid",
                                radialLines: r
                            })
                        }), pi(f8(o), "renderLegend", function() {
                            var t = o.state.formattedGraphicalItems,
                                e = o.props,
                                r = e.children,
                                n = e.width,
                                i = e.height,
                                a = o.props.margin || {},
                                u = cI({
                                    children: r,
                                    formattedGraphicalItems: t,
                                    legendWidth: n - (a.left || 0) - (a.right || 0),
                                    legendContent: p
                                });
                            if (!u) return null;
                            var c = u.item,
                                l = f5(u, f0);
                            return (0, k.cloneElement)(c, po(po({}, l), {}, {
                                chartWidth: n,
                                chartHeight: i,
                                margin: a,
                                onBBoxUpdate: o.handleLegendBBoxUpdate
                            }))
                        }), pi(f8(o), "renderTooltip", function() {
                            var t, e = o.props,
                                r = e.children,
                                n = e.accessibilityLayer,
                                i = tO(r, em);
                            if (!i) return null;
                            var a = o.state,
                                u = a.isTooltipActive,
                                c = a.activeCoordinate,
                                l = a.activePayload,
                                s = a.activeLabel,
                                f = a.offset,
                                p = null !== (t = i.props.active) && void 0 !== t ? t : u;
                            return (0, k.cloneElement)(i, {
                                viewBox: po(po({}, f), {}, {
                                    x: f.left,
                                    y: f.top
                                }),
                                active: p,
                                label: s,
                                payload: p ? l : [],
                                coordinate: c,
                                accessibilityLayer: n
                            })
                        }), pi(f8(o), "renderBrush", function(t) {
                            var e = o.props,
                                r = e.margin,
                                n = e.data,
                                i = o.state,
                                a = i.offset,
                                u = i.dataStartIndex,
                                c = i.dataEndIndex,
                                l = i.updateId;
                            return (0, k.cloneElement)(t, {
                                key: t.key || "_recharts-brush",
                                onChange: cQ(o.handleBrushChange, t.props.onChange),
                                data: n,
                                x: F(t.props.x) ? t.props.x : a.left,
                                y: F(t.props.y) ? t.props.y : a.top + a.height + a.brushBottom - (r.bottom || 0),
                                width: F(t.props.width) ? t.props.width : a.width,
                                startIndex: u,
                                endIndex: c,
                                updateId: "brush-".concat(l)
                            })
                        }), pi(f8(o), "renderReferenceElement", function(t, e, r) {
                            if (!t) return null;
                            var n = f8(o).clipPathId,
                                i = o.state,
                                a = i.xAxisMap,
                                u = i.yAxisMap,
                                c = i.offset,
                                l = t.props,
                                s = l.xAxisId,
                                f = l.yAxisId;
                            return (0, k.cloneElement)(t, {
                                key: t.key || "".concat(e, "-").concat(r),
                                xAxis: a[s],
                                yAxis: u[f],
                                viewBox: {
                                    x: c.left,
                                    y: c.top,
                                    width: c.width,
                                    height: c.height
                                },
                                clipPathId: n
                            })
                        }), pi(f8(o), "renderActivePoints", function(t) {
                            var e = t.item,
                                n = t.activePoint,
                                o = t.basePoint,
                                i = t.childIndex,
                                a = t.isRange,
                                u = [],
                                c = e.props.key,
                                l = e.item.props,
                                s = l.activeDot,
                                f = po(po({
                                    index: i,
                                    dataKey: l.dataKey,
                                    cx: n.x,
                                    cy: n.y,
                                    r: 4,
                                    fill: cW(e.item),
                                    strokeWidth: 2,
                                    stroke: "#fff",
                                    payload: n.payload,
                                    value: n.value,
                                    key: "".concat(c, "-activePoint-").concat(i)
                                }, tA(s, !1)), ts(s));
                            return u.push(r.renderActiveDot(s, f)), o ? u.push(r.renderActiveDot(s, po(po({}, f), {}, {
                                cx: o.x,
                                cy: o.y,
                                key: "".concat(c, "-basePoint-").concat(i)
                            }))) : a && u.push(null), u
                        }), pi(f8(o), "renderGraphicChild", function(t, e, r) {
                            var n = o.filterFormatItem(t, e, r);
                            if (!n) return null;
                            var i = o.getTooltipEventType(),
                                a = o.state,
                                u = a.isTooltipActive,
                                c = a.tooltipAxis,
                                l = a.activeTooltipIndex,
                                s = a.activeLabel,
                                f = tO(o.props.children, em),
                                p = n.props,
                                h = p.points,
                                d = p.isRange,
                                y = p.baseLine,
                                v = n.item.props,
                                m = v.activeDot,
                                b = v.hide,
                                g = v.activeBar,
                                x = v.activeShape,
                                O = {};
                            "axis" !== i && f && "click" === f.props.trigger ? O = {
                                onClick: cQ(o.handleItemMouseEnter, t.props.onClick)
                            } : "axis" !== i && (O = {
                                onMouseLeave: cQ(o.handleItemMouseLeave, t.props.onMouseLeave),
                                onMouseEnter: cQ(o.handleItemMouseEnter, t.props.onMouseEnter)
                            });
                            var w = (0, k.cloneElement)(t, po(po({}, n.props), O));
                            if (!b && u && f && (m || g || x)) {
                                if (l >= 0) {
                                    if (c.dataKey && !c.allowDuplicatedCategory) {
                                        var j = "function" == typeof c.dataKey ? function(t) {
                                            return "function" == typeof c.dataKey ? c.dataKey(t.payload) : null
                                        } : "payload.".concat(c.dataKey.toString());
                                        A = K(h, j, s), P = d && y && K(y, j, s)
                                    } else A = null == h ? void 0 : h[l], P = d && y && y[l];
                                    if (x || g) {
                                        var S = void 0 !== t.props.activeIndex ? t.props.activeIndex : l;
                                        return [(0, k.cloneElement)(t, po(po(po({}, n.props), O), {}, {
                                            activeIndex: S
                                        })), null, null]
                                    }
                                    if (!Q()(A)) return [w].concat(pt(o.renderActivePoints({
                                        item: n,
                                        activePoint: A,
                                        basePoint: P,
                                        childIndex: l,
                                        isRange: d
                                    })))
                                } else {
                                    var A, P, E, M = (null !== (E = o.getItemByXY(o.state.activeCoordinate)) && void 0 !== E ? E : {
                                            graphicalItem: w
                                        }).graphicalItem,
                                        _ = M.item,
                                        T = void 0 === _ ? t : _,
                                        C = M.childIndex,
                                        I = po(po(po({}, n.props), O), {}, {
                                            activeIndex: C
                                        });
                                    return [(0, k.cloneElement)(T, I), null, null]
                                }
                            }
                            return d ? [w, null, null] : [w, null]
                        }), pi(f8(o), "renderCustomized", function(t, e, r) {
                            return (0, k.cloneElement)(t, po(po({
                                key: "recharts-customized-".concat(r)
                            }, o.props), o.state))
                        }), pi(f8(o), "renderMap", {
                            CartesianGrid: {
                                handler: ps,
                                once: !0
                            },
                            ReferenceArea: {
                                handler: o.renderReferenceElement
                            },
                            ReferenceLine: {
                                handler: ps
                            },
                            ReferenceDot: {
                                handler: o.renderReferenceElement
                            },
                            XAxis: {
                                handler: ps
                            },
                            YAxis: {
                                handler: ps
                            },
                            Brush: {
                                handler: o.renderBrush,
                                once: !0
                            },
                            Bar: {
                                handler: o.renderGraphicChild
                            },
                            Line: {
                                handler: o.renderGraphicChild
                            },
                            Area: {
                                handler: o.renderGraphicChild
                            },
                            Radar: {
                                handler: o.renderGraphicChild
                            },
                            RadialBar: {
                                handler: o.renderGraphicChild
                            },
                            Scatter: {
                                handler: o.renderGraphicChild
                            },
                            Pie: {
                                handler: o.renderGraphicChild
                            },
                            Funnel: {
                                handler: o.renderGraphicChild
                            },
                            Tooltip: {
                                handler: o.renderCursor,
                                once: !0
                            },
                            PolarGrid: {
                                handler: o.renderPolarGrid,
                                once: !0
                            },
                            PolarAngleAxis: {
                                handler: o.renderPolarAxis
                            },
                            PolarRadiusAxis: {
                                handler: o.renderPolarAxis
                            },
                            Customized: {
                                handler: o.renderCustomized
                            }
                        }), o.clipPathId = "".concat(null !== (e = t.id) && void 0 !== e ? e : X("recharts"), "-clip"), o.throttleTriggeredAfterMouseMove = _()(o.triggeredAfterMouseMove, null !== (n = t.throttleDelay) && void 0 !== n ? n : 1e3 / 60), o.state = {}, o
                    }
                    return function(t, e) {
                            if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), e && f9(t, e)
                        }(r, t), e = [{
                            key: "componentDidMount",
                            value: function() {
                                var t, e;
                                this.addListener(), this.accessibilityManager.setDetails({
                                    container: this.container,
                                    offset: {
                                        left: null !== (t = this.props.margin.left) && void 0 !== t ? t : 0,
                                        top: null !== (e = this.props.margin.top) && void 0 !== e ? e : 0
                                    },
                                    coordinateList: this.state.tooltipTicks,
                                    mouseHandlerCallback: this.triggeredAfterMouseMove,
                                    layout: this.props.layout
                                }), this.displayDefaultTooltip()
                            }
                        }, {
                            key: "displayDefaultTooltip",
                            value: function() {
                                var t = this.props,
                                    e = t.children,
                                    r = t.data,
                                    n = t.height,
                                    o = t.layout,
                                    i = tO(e, em);
                                if (i) {
                                    var a = i.props.defaultIndex;
                                    if ("number" == typeof a && !(a < 0) && !(a > this.state.tooltipTicks.length)) {
                                        var u = this.state.tooltipTicks[a] && this.state.tooltipTicks[a].value,
                                            c = pd(this.state, r, a, u),
                                            l = this.state.tooltipTicks[a].coordinate,
                                            s = (this.state.offset.top + n) / 2,
                                            f = "horizontal" === o ? {
                                                x: l,
                                                y: s
                                            } : {
                                                y: l,
                                                x: s
                                            },
                                            p = this.state.formattedGraphicalItems.find(function(t) {
                                                return "Scatter" === t.item.type.name
                                            });
                                        p && (f = po(po({}, f), p.props.points[a].tooltipPosition), c = p.props.points[a].tooltipPayload);
                                        var h = {
                                            activeTooltipIndex: a,
                                            isTooltipActive: !0,
                                            activeLabel: u,
                                            activePayload: c,
                                            activeCoordinate: f
                                        };
                                        this.setState(h), this.renderCursor(i), this.accessibilityManager.setIndex(a)
                                    }
                                }
                            }
                        }, {
                            key: "getSnapshotBeforeUpdate",
                            value: function(t, e) {
                                if (!this.props.accessibilityLayer) return null;
                                if (this.state.tooltipTicks !== e.tooltipTicks && this.accessibilityManager.setDetails({
                                        coordinateList: this.state.tooltipTicks
                                    }), this.props.layout !== t.layout && this.accessibilityManager.setDetails({
                                        layout: this.props.layout
                                    }), this.props.margin !== t.margin) {
                                    var r, n;
                                    this.accessibilityManager.setDetails({
                                        offset: {
                                            left: null !== (r = this.props.margin.left) && void 0 !== r ? r : 0,
                                            top: null !== (n = this.props.margin.top) && void 0 !== n ? n : 0
                                        }
                                    })
                                }
                                return null
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function(t) {
                                tP([tO(t.children, em)], [tO(this.props.children, em)]) || this.displayDefaultTooltip()
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
                            }
                        }, {
                            key: "getTooltipEventType",
                            value: function() {
                                var t = tO(this.props.children, em);
                                if (t && "boolean" == typeof t.props.shared) {
                                    var e = t.props.shared ? "axis" : "item";
                                    return s.indexOf(e) >= 0 ? e : c
                                }
                                return c
                            }
                        }, {
                            key: "getMouseInfo",
                            value: function(t) {
                                if (!this.container) return null;
                                var e = this.container,
                                    r = e.getBoundingClientRect(),
                                    n = {
                                        top: r.top + window.scrollY - document.documentElement.clientTop,
                                        left: r.left + window.scrollX - document.documentElement.clientLeft
                                    },
                                    o = {
                                        chartX: Math.round(t.pageX - n.left),
                                        chartY: Math.round(t.pageY - n.top)
                                    },
                                    i = r.width / e.offsetWidth || 1,
                                    a = this.inRange(o.chartX, o.chartY, i);
                                if (!a) return null;
                                var u = this.state,
                                    c = u.xAxisMap,
                                    l = u.yAxisMap;
                                if ("axis" !== this.getTooltipEventType() && c && l) {
                                    var s = V(c).scale,
                                        f = V(l).scale,
                                        p = s && s.invert ? s.invert(o.chartX) : null,
                                        h = f && f.invert ? f.invert(o.chartY) : null;
                                    return po(po({}, o), {}, {
                                        xValue: p,
                                        yValue: h
                                    })
                                }
                                var d = py(this.state, this.props.data, this.props.layout, a);
                                return d ? po(po({}, o), d) : null
                            }
                        }, {
                            key: "inRange",
                            value: function(t, e) {
                                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                                    n = this.props.layout,
                                    o = t / r,
                                    i = e / r;
                                if ("horizontal" === n || "vertical" === n) {
                                    var a = this.state.offset;
                                    return o >= a.left && o <= a.left + a.width && i >= a.top && i <= a.top + a.height ? {
                                        x: o,
                                        y: i
                                    } : null
                                }
                                var u = this.state,
                                    c = u.angleAxisMap,
                                    l = u.radiusAxisMap;
                                return c && l ? lN({
                                    x: o,
                                    y: i
                                }, V(c)) : null
                            }
                        }, {
                            key: "parseEventsOfWrapper",
                            value: function() {
                                var t = this.props.children,
                                    e = this.getTooltipEventType(),
                                    r = tO(t, em),
                                    n = {};
                                return r && "axis" === e && (n = "click" === r.props.trigger ? {
                                    onClick: this.handleClick
                                } : {
                                    onMouseEnter: this.handleMouseEnter,
                                    onMouseMove: this.handleMouseMove,
                                    onMouseLeave: this.handleMouseLeave,
                                    onTouchMove: this.handleTouchMove,
                                    onTouchStart: this.handleTouchStart,
                                    onTouchEnd: this.handleTouchEnd
                                }), po(po({}, ts(this.props, this.handleOuterEvent)), n)
                            }
                        }, {
                            key: "addListener",
                            value: function() {
                                sB.on(sL, this.handleReceiveSyncEvent)
                            }
                        }, {
                            key: "removeListener",
                            value: function() {
                                sB.removeListener(sL, this.handleReceiveSyncEvent)
                            }
                        }, {
                            key: "filterFormatItem",
                            value: function(t, e, r) {
                                for (var n = this.state.formattedGraphicalItems, o = 0, i = n.length; o < i; o++) {
                                    var a = n[o];
                                    if (a.item === t || a.props.key === t.key || e === tv(a.item.type) && r === a.childIndex) return a
                                }
                                return null
                            }
                        }, {
                            key: "renderClipPath",
                            value: function() {
                                var t = this.clipPathId,
                                    e = this.state.offset,
                                    r = e.left,
                                    n = e.top,
                                    o = e.height,
                                    i = e.width;
                                return k.createElement("defs", null, k.createElement("clipPath", {
                                    id: t
                                }, k.createElement("rect", {
                                    x: r,
                                    y: n,
                                    height: o,
                                    width: i
                                })))
                            }
                        }, {
                            key: "getXScales",
                            value: function() {
                                var t = this.state.xAxisMap;
                                return t ? Object.entries(t).reduce(function(t, e) {
                                    var r = f3(e, 2),
                                        n = r[0],
                                        o = r[1];
                                    return po(po({}, t), {}, pi({}, n, o.scale))
                                }, {}) : null
                            }
                        }, {
                            key: "getYScales",
                            value: function() {
                                var t = this.state.yAxisMap;
                                return t ? Object.entries(t).reduce(function(t, e) {
                                    var r = f3(e, 2),
                                        n = r[0],
                                        o = r[1];
                                    return po(po({}, t), {}, pi({}, n, o.scale))
                                }, {}) : null
                            }
                        }, {
                            key: "getXScaleByAxisId",
                            value: function(t) {
                                var e;
                                return null === (e = this.state.xAxisMap) || void 0 === e || null === (e = e[t]) || void 0 === e ? void 0 : e.scale
                            }
                        }, {
                            key: "getYScaleByAxisId",
                            value: function(t) {
                                var e;
                                return null === (e = this.state.yAxisMap) || void 0 === e || null === (e = e[t]) || void 0 === e ? void 0 : e.scale
                            }
                        }, {
                            key: "getItemByXY",
                            value: function(t) {
                                var e = this.state,
                                    r = e.formattedGraphicalItems,
                                    n = e.activeItem;
                                if (r && r.length)
                                    for (var o = 0, i = r.length; o < i; o++) {
                                        var a = r[o],
                                            u = a.props,
                                            c = a.item,
                                            l = tv(c.type);
                                        if ("Bar" === l) {
                                            var s = (u.data || []).find(function(e) {
                                                return n$(t, e)
                                            });
                                            if (s) return {
                                                graphicalItem: a,
                                                payload: s
                                            }
                                        } else if ("RadialBar" === l) {
                                            var f = (u.data || []).find(function(e) {
                                                return lN(t, e)
                                            });
                                            if (f) return {
                                                graphicalItem: a,
                                                payload: f
                                            }
                                        } else if (fi(a, n) || fa(a, n) || fu(a, n)) {
                                            var p = function(t) {
                                                    var e, r, n, o = t.activeTooltipItem,
                                                        i = t.graphicalItem,
                                                        a = t.itemData,
                                                        u = (fi(i, o) ? e = "trapezoids" : fa(i, o) ? e = "sectors" : fu(i, o) && (e = "points"), e),
                                                        c = fi(i, o) ? null === (r = o.tooltipPayload) || void 0 === r || null === (r = r[0]) || void 0 === r || null === (r = r.payload) || void 0 === r ? void 0 : r.payload : fa(i, o) ? null === (n = o.tooltipPayload) || void 0 === n || null === (n = n[0]) || void 0 === n || null === (n = n.payload) || void 0 === n ? void 0 : n.payload : fu(i, o) ? o.payload : {},
                                                        l = a.filter(function(t, e) {
                                                            var r = cr()(c, t),
                                                                n = i.props[u].filter(function(t) {
                                                                    var e;
                                                                    return (fi(i, o) ? e = fc : fa(i, o) ? e = fl : fu(i, o) && (e = fs), e)(t, o)
                                                                }),
                                                                a = i.props[u].indexOf(n[n.length - 1]);
                                                            return r && e === a
                                                        });
                                                    return a.indexOf(l[l.length - 1])
                                                }({
                                                    graphicalItem: a,
                                                    activeTooltipItem: n,
                                                    itemData: c.props.data
                                                }),
                                                h = void 0 === c.props.activeIndex ? p : c.props.activeIndex;
                                            return {
                                                graphicalItem: po(po({}, a), {}, {
                                                    childIndex: h
                                                }),
                                                payload: fu(a, n) ? c.props.data[p] : a.props.data[p]
                                            }
                                        }
                                    }
                                return null
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var t, e, r = this;
                                if (!tw(this)) return null;
                                var n = this.props,
                                    o = n.children,
                                    i = n.className,
                                    a = n.width,
                                    u = n.height,
                                    c = n.style,
                                    l = n.compact,
                                    s = n.title,
                                    f = n.desc,
                                    p = tA(f5(n, f1), !1);
                                if (l) return k.createElement(sv, {
                                    state: this.state,
                                    width: this.props.width,
                                    height: this.props.height,
                                    clipPathId: this.clipPathId
                                }, k.createElement(tF, f6({}, p, {
                                    width: a,
                                    height: u,
                                    title: s,
                                    desc: f
                                }), this.renderClipPath(), tk(o, this.renderMap)));
                                this.props.accessibilityLayer && (p.tabIndex = null !== (t = this.props.tabIndex) && void 0 !== t ? t : 0, p.role = null !== (e = this.props.role) && void 0 !== e ? e : "application", p.onKeyDown = function(t) {
                                    r.accessibilityManager.keyboardEvent(t)
                                }, p.onFocus = function() {
                                    r.accessibilityManager.focus()
                                });
                                var h = this.parseEventsOfWrapper();
                                return k.createElement(sv, {
                                    state: this.state,
                                    width: this.props.width,
                                    height: this.props.height,
                                    clipPathId: this.clipPathId
                                }, k.createElement("div", f6({
                                    className: (0, E.Z)("recharts-wrapper", i),
                                    style: po({
                                        position: "relative",
                                        cursor: "default",
                                        width: a,
                                        height: u
                                    }, c)
                                }, h, {
                                    ref: function(t) {
                                        r.container = t
                                    }
                                }), k.createElement(tF, f6({}, p, {
                                    width: a,
                                    height: u,
                                    title: s,
                                    desc: f,
                                    style: pc
                                }), this.renderClipPath(), tk(o, this.renderMap)), this.renderLegend(), this.renderTooltip()))
                            }
                        }],
                        function(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, pa(n.key), n)
                            }
                        }(r.prototype, e), Object.defineProperty(r, "prototype", {
                            writable: !1
                        }), r
                }(k.Component), pi(o, "displayName", i), pi(o, "defaultProps", po({
                    layout: "horizontal",
                    stackOffset: "none",
                    barCategoryGap: "10%",
                    barGap: 4,
                    margin: {
                        top: 5,
                        right: 5,
                        bottom: 5,
                        left: 5
                    },
                    reverseStackOrder: !1,
                    syncMethod: "index"
                }, d)), pi(o, "getDerivedStateFromProps", function(t, e) {
                    var r = t.dataKey,
                        n = t.data,
                        o = t.children,
                        i = t.width,
                        a = t.height,
                        u = t.layout,
                        c = t.stackOffset,
                        l = t.margin,
                        s = e.dataStartIndex,
                        f = e.dataEndIndex;
                    if (void 0 === e.updateId) {
                        var p = px(t);
                        return po(po(po({}, p), {}, {
                            updateId: 0
                        }, v(po(po({
                            props: t
                        }, p), {}, {
                            updateId: 0
                        }), e)), {}, {
                            prevDataKey: r,
                            prevData: n,
                            prevWidth: i,
                            prevHeight: a,
                            prevLayout: u,
                            prevStackOffset: c,
                            prevMargin: l,
                            prevChildren: o
                        })
                    }
                    if (r !== e.prevDataKey || n !== e.prevData || i !== e.prevWidth || a !== e.prevHeight || u !== e.prevLayout || c !== e.prevStackOffset || !to(l, e.prevMargin)) {
                        var h = px(t),
                            d = {
                                chartX: e.chartX,
                                chartY: e.chartY,
                                isTooltipActive: e.isTooltipActive
                            },
                            y = po(po({}, py(e, n, u)), {}, {
                                updateId: e.updateId + 1
                            }),
                            m = po(po(po({}, h), d), y);
                        return po(po(po({}, m), v(po({
                            props: t
                        }, m), e)), {}, {
                            prevDataKey: r,
                            prevData: n,
                            prevWidth: i,
                            prevHeight: a,
                            prevLayout: u,
                            prevStackOffset: c,
                            prevMargin: l,
                            prevChildren: o
                        })
                    }
                    if (!tP(o, e.prevChildren)) {
                        var b, g, x, O, w = tO(o, lj),
                            j = w && null !== (b = null === (g = w.props) || void 0 === g ? void 0 : g.startIndex) && void 0 !== b ? b : s,
                            S = w && null !== (x = null === (O = w.props) || void 0 === O ? void 0 : O.endIndex) && void 0 !== x ? x : f,
                            A = Q()(n) || j !== s || S !== f ? e.updateId + 1 : e.updateId;
                        return po(po({
                            updateId: A
                        }, v(po(po({
                            props: t
                        }, e), {}, {
                            updateId: A,
                            dataStartIndex: j,
                            dataEndIndex: S
                        }), e)), {}, {
                            prevChildren: o,
                            dataStartIndex: j,
                            dataEndIndex: S
                        })
                    }
                    return null
                }), pi(o, "renderActiveDot", function(t, e) {
                    var r;
                    return r = (0, k.isValidElement)(t) ? (0, k.cloneElement)(t, e) : te()(t) ? t(e) : k.createElement(rs, e), k.createElement(tX, {
                        className: "recharts-active-dot",
                        key: e.key
                    }, r)
                }), o),
                hj = r(13637),
                hS = r(2979),
                hA = r(88565),
                hP = r(9535),
                hE = r(90987),
                hk = r(65984),
                hM = r(46976),
                h_ = r(19784),
                hT = r(93445),
                hC = r(69429),
                hI = r(43362),
                hD = {
                    root: "m_de3d2490",
                    colorOverlay: "m_862f3d1b",
                    shadowOverlay: "m_98ae7f22",
                    alphaOverlay: "m_95709ac0",
                    childrenOverlay: "m_93e74e3"
                };
            let hN = {
                    withShadow: !0
                },
                hB = (0, hj.Z)((t, {
                    radius: e,
                    size: r
                }) => ({
                    root: {
                        "--cs-radius": void 0 === e ? void 0 : (0, hC.H5)(e),
                        "--cs-size": (0, hA.h)(r)
                    }
                })),
                hL = (0, hI.b)((t, e) => {
                    let r = (0, hE.w)("ColorSwatch", hN, t),
                        {
                            classNames: n,
                            className: o,
                            style: i,
                            styles: a,
                            unstyled: u,
                            vars: c,
                            color: l,
                            size: s,
                            radius: f,
                            withShadow: p,
                            children: h,
                            variant: d,
                            ...y
                        } = (0, hE.w)("ColorSwatch", hN, r),
                        v = (0, hM.y)({
                            name: "ColorSwatch",
                            props: r,
                            classes: hD,
                            className: o,
                            style: i,
                            classNames: n,
                            styles: a,
                            unstyled: u,
                            vars: c,
                            varsResolver: hB
                        });
                    return (0, A.jsxs)(hT.x, {
                        ref: e,
                        variant: d,
                        size: s,
                        ...v("root", {
                            focusable: !0
                        }),
                        ...y,
                        children: [(0, A.jsx)("span", { ...v("alphaOverlay")
                        }), p && (0, A.jsx)("span", { ...v("shadowOverlay")
                        }), (0, A.jsx)("span", { ...v("colorOverlay", {
                                style: {
                                    backgroundColor: l
                                }
                            })
                        }), (0, A.jsx)("span", { ...v("childrenOverlay"),
                            children: h
                        })]
                    })
                });
            hL.classes = hD, hL.displayName = "@mantine/core/ColorSwatch";
            var hR = {
                tooltip: "m_e4d36c9b",
                tooltipLabel: "m_7f4bcb19",
                tooltipBody: "m_3de554dd",
                tooltipItem: "m_3de8964e",
                tooltipItemColor: "m_b30369b5",
                tooltipItemBody: "m_50186d10",
                tooltipItemName: "m_501dadf9",
                tooltipItemData: "m_50192318"
            };

            function h$(t, e) {
                return "radial" === e || "scatter" === e ? Array.isArray(t.value) ? t.value[1] - t.value[0] : t.value : Array.isArray(t.payload[t.dataKey]) ? t.payload[t.dataKey][1] - t.payload[t.dataKey][0] : t.payload[t.dataKey]
            }
            let hz = {
                    type: "area"
                },
                hU = (0, hP.d)((t, e) => {
                    let r = (0, hE.w)("ChartTooltip", hz, t),
                        {
                            classNames: n,
                            className: o,
                            style: i,
                            styles: a,
                            unstyled: u,
                            vars: c,
                            payload: l,
                            label: s,
                            unit: f,
                            type: p,
                            segmentId: h,
                            mod: d,
                            series: y,
                            valueFormatter: v,
                            ...m
                        } = r,
                        b = (0, hk.rZ)(),
                        g = (0, hM.y)({
                            name: "ChartTooltip",
                            classes: hR,
                            props: r,
                            className: o,
                            style: i,
                            classNames: n,
                            styles: a,
                            unstyled: u
                        });
                    if (!l) return null;
                    let x = function(t, e) {
                            let r = t.filter(t => "none" !== t.fill || !t.color);
                            return e ? r.filter(t => t.name === e) : r
                        }(l, h),
                        O = "scatter" === p ? l[0] ? .payload ? .name : null,
                        w = y ? y.reduce((t, e) => (t[e.name] = e.label, t), {}) : {},
                        j = s || O,
                        S = x.map(t => (0, A.jsxs)("div", {
                            "data-type": p,
                            ...g("tooltipItem"),
                            children: [(0, A.jsxs)("div", { ...g("tooltipItemBody"),
                                children: [(0, A.jsx)(hL, {
                                    color: (0, hS.p)(t.color, b),
                                    size: 12,
                                    ...g("tooltipItemColor"),
                                    withShadow: !1
                                }), (0, A.jsx)("div", { ...g("tooltipItemName"),
                                    children: w[t.name] || t.name
                                })]
                            }), (0, A.jsxs)("div", { ...g("tooltipItemData"),
                                children: ["function" == typeof v ? v(h$(t, p)) : h$(t, p), f || t.unit]
                            })]
                        }, t.name));
                    return (0, A.jsxs)(hT.x, { ...g("tooltip"),
                        mod: [{
                            type: p
                        }, d],
                        ref: e,
                        ...m,
                        children: [j && (0, A.jsx)("div", { ...g("tooltipLabel"),
                            children: j
                        }), (0, A.jsx)("div", { ...g("tooltipBody"),
                            children: S
                        })]
                    })
                });
            hU.displayName = "@mantine/charts/ChartTooltip";
            var hF = {
                root: "m_a410e613",
                label: "m_ddb0bfe3"
            };
            let hW = {
                    withTooltip: !0,
                    withLabelsLine: !0,
                    paddingAngle: 0,
                    thickness: 20,
                    size: 160,
                    strokeWidth: 1,
                    startAngle: 0,
                    endAngle: 360,
                    tooltipDataSource: "all"
                },
                hq = (0, hj.Z)((t, {
                    strokeColor: e,
                    labelColor: r,
                    withLabels: n,
                    size: o
                }) => ({
                    root: {
                        "--chart-stroke-color": e ? (0, hS.p)(e, t) : void 0,
                        "--chart-labels-color": r ? (0, hS.p)(r, t) : void 0,
                        "--chart-size": n ? (0, hA.h)(o + 80) : (0, hA.h)(o)
                    }
                })),
                hX = (0, hP.d)((t, e) => {
                    let r = (0, hE.w)("DonutChart", hW, t),
                        {
                            classNames: n,
                            className: o,
                            style: i,
                            styles: a,
                            unstyled: u,
                            vars: c,
                            data: l,
                            withTooltip: s,
                            tooltipAnimationDuration: f,
                            tooltipProps: p,
                            pieProps: h,
                            paddingAngle: d,
                            withLabels: y,
                            withLabelsLine: v,
                            size: m,
                            thickness: b,
                            strokeWidth: g,
                            startAngle: x,
                            endAngle: O,
                            tooltipDataSource: w,
                            chartLabel: j,
                            children: S,
                            pieChartProps: E,
                            valueFormatter: k,
                            ...M
                        } = r,
                        _ = (0, hk.rZ)(),
                        T = (0, hM.y)({
                            name: "DonutChart",
                            classes: hF,
                            props: r,
                            className: o,
                            style: i,
                            classNames: n,
                            styles: a,
                            unstyled: u,
                            vars: c,
                            varsResolver: hq
                        }),
                        {
                            resolvedClassNames: C,
                            resolvedStyles: I
                        } = (0, h_.h)({
                            classNames: n,
                            styles: a,
                            props: r
                        }),
                        D = l.map((t, e) => (0, A.jsx)(P, {
                            fill: (0, hS.p)(t.color, _),
                            stroke: "var(--chart-stroke-color, var(--mantine-color-body))",
                            strokeWidth: g
                        }, e));
                    return (0, A.jsx)(hT.x, {
                        ref: e,
                        size: m,
                        ...T("root"),
                        ...M,
                        children: (0, A.jsx)(tD, {
                            children: (0, A.jsxs)(hw, { ...E,
                                children: [(0, A.jsx)(hO, {
                                    data: l,
                                    innerRadius: m / 2 - b,
                                    outerRadius: m / 2,
                                    dataKey: "value",
                                    isAnimationActive: !1,
                                    paddingAngle: d,
                                    startAngle: x,
                                    endAngle: O,
                                    label: !!y && {
                                        fill: "var(--chart-labels-color, var(--mantine-color-dimmed))",
                                        fontSize: 12,
                                        fontFamily: "var(--mantine-font-family)"
                                    },
                                    labelLine: !!v && {
                                        stroke: "var(--chart-label-color, var(--mantine-color-dimmed))",
                                        strokeWidth: 1
                                    },
                                    ...h,
                                    children: D
                                }), j && (0, A.jsx)("text", {
                                    x: "50%",
                                    y: "50%",
                                    textAnchor: "middle",
                                    dominantBaseline: "middle",
                                    ...T("label"),
                                    children: j
                                }), s && (0, A.jsx)(em, {
                                    animationDuration: f,
                                    isAnimationActive: !1,
                                    content: ({
                                        payload: t
                                    }) => (0, A.jsx)(hU, {
                                        payload: l,
                                        classNames: C,
                                        styles: I,
                                        type: "radial",
                                        segmentId: "segment" === w ? t ? .[0] ? .name : void 0,
                                        valueFormatter: k
                                    }),
                                    ...p
                                }), S]
                            })
                        })
                    })
                });
            hX.displayName = "@mantine/charts/DonutChart", hX.classes = hF
        },
        29820: function(t, e, r) {
            "use strict";
            r.d(e, {
                i: function() {
                    return M
                }
            });
            var n = r(85893),
                o = r(67294),
                i = r(28590),
                a = r(59375),
                u = r(36645),
                c = r(88565),
                l = r(69429),
                s = r(13637),
                f = r(2979),
                p = r(90987),
                h = r(46976),
                d = r(9535),
                y = r(19088);
            let [v, m] = (0, r(70679).R)("SliderProvider was not found in tree");
            var b = r(93445);
            let g = (0, o.forwardRef)(({
                size: t,
                disabled: e,
                variant: r,
                color: o,
                thumbSize: i,
                radius: a,
                ...u
            }, c) => {
                let {
                    getStyles: l
                } = m();
                return (0, n.jsx)(b.x, {
                    tabIndex: -1,
                    variant: r,
                    size: t,
                    ref: c,
                    ...l("root"),
                    ...u
                })
            });
            g.displayName = "@mantine/core/SliderRoot";
            var x = r(50427);
            let O = (0, o.forwardRef)(({
                max: t,
                min: e,
                value: r,
                position: i,
                label: a,
                dragging: u,
                onMouseDown: c,
                onKeyDownCapture: l,
                labelTransitionProps: s,
                labelAlwaysOn: f,
                thumbLabel: p,
                onFocus: h,
                onBlur: d,
                showLabelOnHover: y,
                isHovered: v,
                children: g = null,
                disabled: O
            }, w) => {
                let {
                    getStyles: j
                } = m(), [S, A] = (0, o.useState)(!1), P = f || u || S || y && v;
                return (0, n.jsxs)(b.x, {
                    tabIndex: 0,
                    role: "slider",
                    "aria-label": p,
                    "aria-valuemax": t,
                    "aria-valuemin": e,
                    "aria-valuenow": r,
                    ref: w,
                    __vars: {
                        "--slider-thumb-offset": `${i}%`
                    },
                    ...j("thumb", {
                        focusable: !0
                    }),
                    mod: {
                        dragging: u,
                        disabled: O
                    },
                    onFocus: () => {
                        A(!0), "function" == typeof h && h()
                    },
                    onBlur: () => {
                        A(!1), "function" == typeof d && d()
                    },
                    onTouchStart: c,
                    onMouseDown: c,
                    onKeyDownCapture: l,
                    onClick: t => t.stopPropagation(),
                    children: [g, (0, n.jsx)(x.u, {
                        mounted: null != a && !!P,
                        transition: "fade",
                        duration: 0,
                        ...s,
                        children: t => (0, n.jsx)("div", { ...j("label", {
                                style: t
                            }),
                            children: a
                        })
                    })]
                })
            });

            function w({
                value: t,
                min: e,
                max: r
            }) {
                return Math.min(Math.max((t - e) / (r - e) * 100, 0), 100)
            }

            function j({
                marks: t,
                min: e,
                max: r,
                disabled: i,
                value: a,
                offset: u,
                inverted: c
            }) {
                let {
                    getStyles: l
                } = m();
                if (!t) return null;
                let s = t.map((t, s) => (0, o.createElement)(b.x, { ...l("markWrapper"),
                    __vars: {
                        "--mark-offset": `${w({value:t.value,min:e,max:r})}%`
                    },
                    key: s
                }, (0, n.jsx)(b.x, { ...l("mark"),
                    mod: {
                        filled: function({
                            mark: t,
                            offset: e,
                            value: r,
                            inverted: n = !1
                        }) {
                            return n ? "number" == typeof e && t.value <= e || t.value >= r : "number" == typeof e ? t.value >= e && t.value <= r : t.value <= r
                        }({
                            mark: t,
                            value: a,
                            offset: u,
                            inverted: c
                        }),
                        disabled: i
                    }
                }), t.label && (0, n.jsx)("div", { ...l("markLabel"),
                    children: t.label
                })));
                return (0, n.jsx)("div", {
                    children: s
                })
            }

            function S({
                filled: t,
                children: e,
                offset: r,
                disabled: o,
                marksOffset: i,
                inverted: a,
                containerProps: u,
                ...c
            }) {
                let {
                    getStyles: l
                } = m();
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(b.x, { ...l("trackContainer"),
                        mod: {
                            disabled: o
                        },
                        ...u,
                        children: (0, n.jsxs)(b.x, { ...l("track"),
                            mod: {
                                inverted: a,
                                disabled: o
                            },
                            children: [(0, n.jsx)(b.x, {
                                mod: {
                                    inverted: a,
                                    disabled: o
                                },
                                __vars: {
                                    "--slider-bar-width": `calc(${t}% + var(--slider-size))`,
                                    "--slider-bar-offset": `calc(${r}% - var(--slider-size))`
                                },
                                ...l("bar")
                            }), e, (0, n.jsx)(j, { ...c,
                                offset: i,
                                disabled: o,
                                inverted: a
                            })]
                        })
                    })
                })
            }

            function A(t, e) {
                return parseFloat(t.toFixed(e))
            }
            O.displayName = "@mantine/core/SliderThumb", j.displayName = "@mantine/core/SliderMarks", S.displayName = "@mantine/core/SliderTrack";
            var P = {
                root: "m_dd36362e",
                label: "m_c9357328",
                thumb: "m_c9a9a60a",
                trackContainer: "m_a8645c2",
                track: "m_c9ade57f",
                bar: "m_38aeed47",
                markWrapper: "m_b7b0423a",
                mark: "m_dd33bc19",
                markLabel: "m_68c77a5b"
            };
            let E = {
                    radius: "xl",
                    min: 0,
                    max: 100,
                    step: 1,
                    marks: [],
                    label: t => t,
                    labelTransitionProps: {
                        transition: "fade",
                        duration: 0
                    },
                    labelAlwaysOn: !1,
                    thumbLabel: "",
                    showLabelOnHover: !0,
                    disabled: !1,
                    scale: t => t
                },
                k = (0, s.Z)((t, {
                    size: e,
                    color: r,
                    thumbSize: n,
                    radius: o
                }) => ({
                    root: {
                        "--slider-size": (0, l.ap)(e, "slider-size"),
                        "--slider-color": r ? (0, f.p)(r, t) : void 0,
                        "--slider-radius": void 0 === o ? void 0 : (0, l.H5)(o),
                        "--slider-thumb-size": void 0 !== n ? (0, c.h)(n) : "calc(var(--slider-size) * 2)"
                    }
                })),
                M = (0, d.d)((t, e) => {
                    let r = (0, p.w)("Slider", E, t),
                        {
                            classNames: c,
                            styles: l,
                            value: s,
                            onChange: f,
                            onChangeEnd: d,
                            size: m,
                            min: b,
                            max: x,
                            step: j,
                            precision: M,
                            defaultValue: _,
                            name: T,
                            marks: C,
                            label: I,
                            labelTransitionProps: D,
                            labelAlwaysOn: N,
                            thumbLabel: B,
                            showLabelOnHover: L,
                            thumbChildren: R,
                            disabled: $,
                            unstyled: z,
                            scale: U,
                            inverted: F,
                            className: W,
                            style: q,
                            vars: X,
                            hiddenInputProps: H,
                            ...V
                        } = r,
                        Z = (0, h.y)({
                            name: "Slider",
                            props: r,
                            classes: P,
                            classNames: c,
                            className: W,
                            styles: l,
                            style: q,
                            vars: X,
                            varsResolver: k,
                            unstyled: z
                        }),
                        {
                            dir: Y
                        } = (0, y.gm)(),
                        [K, G] = (0, o.useState)(!1),
                        [J, Q] = (0, i.C)({
                            value: "number" == typeof s ? (0, a.u)(s, b, x) : s,
                            defaultValue: "number" == typeof _ ? (0, a.u)(_, b, x) : _,
                            finalValue: (0, a.u)(0, b, x),
                            onChange: f
                        }),
                        tt = (0, o.useRef)(J),
                        te = (0, o.useRef)(),
                        tr = (0, o.useRef)(),
                        tn = w({
                            value: J,
                            min: b,
                            max: x
                        }),
                        to = U(J),
                        ti = "function" == typeof I ? I(to) : I,
                        ta = M ? ? function(t) {
                            if (!t) return 0;
                            let e = t.toString().split(".");
                            return e.length > 1 ? e[1].length : 0
                        }(j),
                        {
                            ref: tu,
                            active: tc
                        } = function(t, e, r = "ltr") {
                            let n = (0, o.useRef)(null),
                                i = (0, o.useRef)(!1),
                                u = (0, o.useRef)(!1),
                                c = (0, o.useRef)(0),
                                [l, s] = (0, o.useState)(!1);
                            return (0, o.useEffect)(() => {
                                i.current = !0
                            }, []), (0, o.useEffect)(() => {
                                let o = ({
                                        x: e,
                                        y: o
                                    }) => {
                                        cancelAnimationFrame(c.current), c.current = requestAnimationFrame(() => {
                                            if (i.current && n.current) {
                                                n.current.style.userSelect = "none";
                                                let i = n.current.getBoundingClientRect();
                                                if (i.width && i.height) {
                                                    let n = (0, a.u)((e - i.left) / i.width, 0, 1);
                                                    t({
                                                        x: "ltr" === r ? n : 1 - n,
                                                        y: (0, a.u)((o - i.top) / i.height, 0, 1)
                                                    })
                                                }
                                            }
                                        })
                                    },
                                    l = () => {
                                        document.addEventListener("mousemove", y), document.addEventListener("mouseup", h), document.addEventListener("touchmove", m), document.addEventListener("touchend", h)
                                    },
                                    f = () => {
                                        document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", h), document.removeEventListener("touchmove", m), document.removeEventListener("touchend", h)
                                    },
                                    p = () => {
                                        !u.current && i.current && (u.current = !0, "function" == typeof e ? .onScrubStart && e.onScrubStart(), s(!0), l())
                                    },
                                    h = () => {
                                        u.current && i.current && (u.current = !1, s(!1), f(), setTimeout(() => {
                                            "function" == typeof e ? .onScrubEnd && e.onScrubEnd()
                                        }, 0))
                                    },
                                    d = t => {
                                        p(), t.preventDefault(), y(t)
                                    },
                                    y = t => o({
                                        x: t.clientX,
                                        y: t.clientY
                                    }),
                                    v = t => {
                                        t.cancelable && t.preventDefault(), p(), m(t)
                                    },
                                    m = t => {
                                        t.cancelable && t.preventDefault(), o({
                                            x: t.changedTouches[0].clientX,
                                            y: t.changedTouches[0].clientY
                                        })
                                    };
                                return n.current ? .addEventListener("mousedown", d), n.current ? .addEventListener("touchstart", v, {
                                    passive: !1
                                }), () => {
                                    n.current && (n.current.removeEventListener("mousedown", d), n.current.removeEventListener("touchstart", v))
                                }
                            }, [r, t]), {
                                ref: n,
                                active: l
                            }
                        }((0, o.useCallback)(({
                            x: t
                        }) => {
                            if (!$) {
                                let e = function({
                                    value: t,
                                    containerWidth: e,
                                    min: r,
                                    max: n,
                                    step: o,
                                    precision: i
                                }) {
                                    let a = (e ? Math.min(Math.max(t, 0), e) / e : t) * (n - r),
                                        u = Math.max((0 !== a ? Math.round(a / o) * o : 0) + r, r);
                                    return void 0 !== i ? Number(u.toFixed(i)) : u
                                }({
                                    value: t,
                                    min: b,
                                    max: x,
                                    step: j,
                                    precision: ta
                                });
                                Q(e), tt.current = e
                            }
                        }, [$, b, x, j, ta, Q]), {
                            onScrubEnd: () => d ? .(tt.current)
                        }, Y);
                    return (0, n.jsx)(v, {
                        value: {
                            getStyles: Z
                        },
                        children: (0, n.jsxs)(g, { ...V,
                            ref: (0, u.Yx)(e, te),
                            onKeyDownCapture: t => {
                                if (!$) switch (t.key) {
                                    case "ArrowUp":
                                        {
                                            t.preventDefault(),
                                            tr.current ? .focus();
                                            let e = A(Math.min(Math.max(J + j, b), x), ta);Q(e),
                                            d ? .(e);
                                            break
                                        }
                                    case "ArrowRight":
                                        {
                                            t.preventDefault(),
                                            tr.current ? .focus();
                                            let e = A(Math.min(Math.max("rtl" === Y ? J - j : J + j, b), x), ta);Q(e),
                                            d ? .(e);
                                            break
                                        }
                                    case "ArrowDown":
                                        {
                                            t.preventDefault(),
                                            tr.current ? .focus();
                                            let e = A(Math.min(Math.max(J - j, b), x), ta);Q(e),
                                            d ? .(e);
                                            break
                                        }
                                    case "ArrowLeft":
                                        {
                                            t.preventDefault(),
                                            tr.current ? .focus();
                                            let e = A(Math.min(Math.max("rtl" === Y ? J + j : J - j, b), x), ta);Q(e),
                                            d ? .(e);
                                            break
                                        }
                                    case "Home":
                                        t.preventDefault(), tr.current ? .focus(), Q(b), d ? .(b);
                                        break;
                                    case "End":
                                        t.preventDefault(), tr.current ? .focus(), Q(x), d ? .(x)
                                }
                            },
                            onMouseDownCapture: () => te.current ? .focus(),
                            size: m,
                            disabled: $,
                            children: [(0, n.jsx)(S, {
                                inverted: F,
                                offset: 0,
                                filled: tn,
                                marks: C,
                                min: b,
                                max: x,
                                value: to,
                                disabled: $,
                                containerProps: {
                                    ref: tu,
                                    onMouseEnter: L ? () => G(!0) : void 0,
                                    onMouseLeave: L ? () => G(!1) : void 0
                                },
                                children: (0, n.jsx)(O, {
                                    max: x,
                                    min: b,
                                    value: to,
                                    position: tn,
                                    dragging: tc,
                                    label: ti,
                                    ref: tr,
                                    labelTransitionProps: D,
                                    labelAlwaysOn: N,
                                    thumbLabel: B,
                                    showLabelOnHover: L,
                                    isHovered: K,
                                    disabled: $,
                                    children: R
                                })
                            }), (0, n.jsx)("input", {
                                type: "hidden",
                                name: T,
                                value: to,
                                ...H
                            })]
                        })
                    })
                });
            M.classes = P, M.displayName = "@mantine/core/Slider"
        },
        46129: function(t, e, r) {
            "use strict";
            r.d(e, {
                n: function() {
                    return o
                }
            });
            var n = r(67294);

            function o(t = []) {
                let [e, r] = (0, n.useState)(t);
                return [e, {
                    setState: r,
                    append: (...t) => r(e => [...e, ...t]),
                    prepend: (...t) => r(e => [...t, ...e]),
                    insert: (t, ...e) => r(r => [...r.slice(0, t), ...e, ...r.slice(t)]),
                    pop: () => r(t => {
                        let e = [...t];
                        return e.pop(), e
                    }),
                    shift: () => r(t => {
                        let e = [...t];
                        return e.shift(), e
                    }),
                    apply: t => r(e => e.map((e, r) => t(e, r))),
                    applyWhere: (t, e) => r(r => r.map((r, n) => t(r, n) ? e(r, n) : r)),
                    remove: (...t) => r(e => e.filter((e, r) => !t.includes(r))),
                    reorder: ({
                        from: t,
                        to: e
                    }) => r(r => {
                        let n = [...r],
                            o = r[t];
                        return n.splice(t, 1), n.splice(e, 0, o), n
                    }),
                    swap: ({
                        from: t,
                        to: e
                    }) => r(r => {
                        let n = [...r],
                            o = n[t],
                            i = n[e];
                        return n.splice(e, 1, o), n.splice(t, 1, i), n
                    }),
                    setItem: (t, e) => r(r => {
                        let n = [...r];
                        return n[t] = e, n
                    }),
                    setItemProp: (t, e, n) => r(r => {
                        let o = [...r];
                        return o[t] = { ...o[t],
                            [e]: n
                        }, o
                    }),
                    filter: t => {
                        r(e => e.filter(t))
                    }
                }]
            }
        },
        63622: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return n
                }
            });
            /**
             * @license @tabler/icons-react v3.6.0 - MIT
             *
             * This source code is licensed under the MIT license.
             * See the LICENSE file in the root directory of this source tree.
             */
            var n = (0, r(9068).Z)("outline", "clock", "IconClock", [
                ["path", {
                    d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",
                    key: "svg-0"
                }],
                ["path", {
                    d: "M12 7v5l3 3",
                    key: "svg-1"
                }]
            ])
        }
    }
]);
//# sourceMappingURL=9779-dd543fda9759fa0e.js.map