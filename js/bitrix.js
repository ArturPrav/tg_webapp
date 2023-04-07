/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = []
      , r = Object.getPrototypeOf
      , s = t.slice
      , g = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , u = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , v = n.hasOwnProperty
      , a = v.toString
      , l = a.call(Object)
      , y = {}
      , m = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , x = function(e) {
        return null != e && e === e.window
    }
      , E = C.document
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e,
        t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.5.1"
      , S = function(e, t) {
        return new S.fn.init(e,t)
    };
    function p(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || m(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), D = function(e, t) {
            return e === t && (l = !0),
            0
        }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+","g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            T()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes),
            t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && (T(e),
            e = e || C,
            E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)),
                        o = (l = h(t)).length;
                        while (o--)
                            l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function le(e) {
            return e[S] = !0,
            e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
              , r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ve(a) {
            return le(function(o) {
                return o = +o,
                le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
        i = se.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        T = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : p;
            return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
            E = !i(C),
            p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
            d.scope = ce(function(e) {
                return a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            d.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = K.test(C.getElementsByClassName),
            d.getById = ce(function(e) {
                return a.appendChild(e).id = S,
                !C.getElementsByName || !C.getElementsByName(S).length
            }),
            d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            v = [],
            (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                (t = C.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", F)
            }),
            v = v.length && new RegExp(v.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = K.test(a.compareDocumentPosition),
            y = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o)
                    return pe(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
            }
            ),
            C
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (T(e),
            d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    N(t, !0)
                }
            return 0 < se(t, C, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != C && T(e),
            y(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()]
              , r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates,
            u = !d.sortStable && e.slice(0),
            e.sort(D),
            l) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += o(t);
            return n
        }
        ,
        (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = m[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3)
                      , m = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l])
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild],
                            m && p) {
                                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2],
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [k, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                            !1 === d)
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]),
                                    a === e))
                                        break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--)
                            e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = []
                      , i = []
                      , s = f(e.replace($, "$1"));
                    return s[S] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(te, ne).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve(function() {
                    return [0]
                }),
                last: ve(function(e, t) {
                    return [t - 1]
                }),
                eq: ve(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)),
            y && !y[S] && (y = Ce(y, e)),
            le(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r),
                v) {
                    i = Te(p, u),
                    v(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [],
                            o = p.length;
                            while (o--)
                                (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)
                            (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = Te(p === t ? p.splice(l, p.length) : p),
                    y ? y(null, t, p, r) : H.apply(t, p)
            })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
        b.setFilters = new me,
        h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = z.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace($, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }
        ,
        f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = A[e + " "];
            if (!a) {
                t || (t = h(e)),
                n = t.length;
                while (n--)
                    (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o,
                m = 0 < (y = i).length,
                x = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0,
                            t || o.ownerDocument == C || (T(o),
                            n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        a = 0;
                        while (s = y[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h,
                    w = p),
                    c
                }
                ,
                m ? le(r) : r))).selector = e
            }
            return a
        }
        ,
        g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i],
                    b.relative[s = a.type])
                        break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && xe(o)))
                            return H.apply(n, r),
                            n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = S.split("").sort(D).join("") === S,
        d.detectDuplicates = !!l,
        T(),
        d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        se
    }(C);
    S.find = d,
    S.expr = d.selectors,
    S.expr[":"] = S.expr.pseudos,
    S.uniqueSort = S.unique = d.uniqueSort,
    S.text = d.getText,
    S.isXMLDoc = d.isXML,
    S.contains = d.contains,
    S.escapeSelector = d.escape;
    var h = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && S(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , T = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    S.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(S(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (S.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || j,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t,
                S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                N.test(r[1]) && S.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }
    ).prototype = S.fn,
    j = S(E);
    var L = /^(?:parents|prev(?:Until|All))/
      , H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length && (H[r] || S.uniqueSort(n),
            L.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }),
        n) : S.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1)
            }
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    S.each(e, function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return S.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = S.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < S.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    S.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return S.Deferred(function(r) {
                        S.each(o, function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++,
                                    t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (a !== M && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return S.Deferred(function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                        o[1][3].add(l(0, e, m(t) ? t : R)),
                        o[2][3].add(l(0, e, m(n) ? n : M))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? S.extend(e, a) : a
                }
            }
              , s = {};
            return S.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = s.call(arguments)
              , o = S.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then)))
                return o.then();
            while (t--)
                I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var F = S.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B),
        S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }),
        this
    }
    ,
    S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }),
    S.ready.then = F.then,
    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B),
    C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
            n)
                $(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        m(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(S(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , _ = /^-ms-/
      , z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1,
    G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[X(t)] = n;
            else
                for (r in t)
                    i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(P) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G
      , Q = new G
      , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
    S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o),
                1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)),
                        Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }),
    S.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Y.get(e, t),
                n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                S.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , re = E.documentElement
      , ie = function(e) {
        return S.contains(e.ownerDocument, e)
    }
      , oe = {
        composed: !0
    };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };
    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return S.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                S.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            S.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = Y.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = S.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ue[s] = u)))) : "none" !== n && (l[c] = "none",
            Y.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ce.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
    ce.innerHTML = "<option></option>",
    y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td,
    y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    S.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r))
                i && i.push(o);
            else if (l = ie(o),
            a = ve(f.appendChild(o), "script"),
            l && ye(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    var be = /^key/
      , we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Te = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0
    }
    function Ee() {
        return !1
    }
    function Se(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                ke(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Ee;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return S().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = S.guid++)),
        e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }
    function Ae(e, i, o) {
        o ? (Y.set(e, i, !1),
        S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    Y.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n.value
                } else
                    r.length && (Y.set(this, i, {
                        value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && S.find.matchesSelector(re, i),
                n.guid || (n.guid = S.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(P) || [""]).length;
                while (l--)
                    d = g = (s = Te.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = S.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = S.event.special[d] || {},
                    c = S.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && S.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = Te.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = S.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
            for (s[0] = u,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l),
                t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    S.Event = function(e, t) {
        if (!(this instanceof S.Event))
            return new S.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && S.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[S.expando] = !0
    }
    ,
    S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp),
    S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Ae(this, e, Se),
                !1
            },
            trigger: function() {
                return Ae(this, e),
                !0
            },
            delegateType: t
        }
    }),
    S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    S.fn.extend({
        on: function(e, t, n, r) {
            return ke(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return ke(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Ee),
            this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<script|<style|<link/i
      , De = /checked\s*(?:[^=]|=\s*.checked.)/i
      , je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function qe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }
    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[i].length; n < r; n++)
                        S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e),
            a = S.extend({}, o),
            Q.set(t, a))
        }
    }
    function Pe(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                Pe(t, r, i, o)
            });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
                u = e,
                c !== p && (u = S.clone(u, !0, !0),
                s && S.merge(a, ve(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                S.map(a, He),
                c = 0; c < s; c++)
                    u = a[c],
                    he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : b(u.textContent.replace(je, ""), u, l))
        }
        return n
    }
    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || S.cleanData(ve(r)),
            r.parentNode && (n && ie(r) && ye(ve(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c),
                r = 0,
                i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e),
                    a = a || ve(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Oe(o[r], a[r]);
                else
                    Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
    S.fn.extend({
        detach: function(e) {
            return Re(this, e, !0)
        },
        remove: function(e) {
            return Re(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Pe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Pe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (S.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Pe(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                S(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , Ie = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , We = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , Fe = new RegExp(ne.join("|"),"i");
    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)),
        !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function $e(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top,
                s = 12 === t(e.marginLeft),
                l.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                l.style.position = "absolute",
                i = 12 === t(l.offsetWidth / 3),
                re.removeChild(u),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        y.clearCloneStyle = "content-box" === l.style.backgroundClip,
        S.extend(y, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                s
            },
            scrollboxSize: function() {
                return e(),
                i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"),
                t = E.createElement("tr"),
                n = E.createElement("div"),
                e.style.cssText = "position:absolute;left:-11111px",
                t.style.height = "1px",
                n.style.height = "9px",
                re.appendChild(e).appendChild(t).appendChild(n),
                r = C.getComputedStyle(t),
                a = 3 < parseInt(r.height),
                re.removeChild(e)),
                a
            }
        }))
    }();
    var _e = ["Webkit", "Moz", "ms"]
      , ze = E.createElement("div").style
      , Ue = {};
    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return t || (e in ze ? e : Ue[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
              , n = _e.length;
            while (n--)
                if ((e = _e[n] + t)in ze)
                    return e
        }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/
      , Ge = /^--/
      , Ye = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Qe = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
            r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i),
            "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function Ze(e, t, n) {
        var r = Ie(e)
          , i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r)
          , o = i
          , a = Be(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function et(e, t, n, r, i) {
        return new et.prototype.init(e,t,n,r,i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Ge.test(t), l = e.style;
                if (u || (t = Xe(s)),
                a = S.cssHooks[t] || S.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Ge.test(t) || (t = Xe(s)),
            (a = S.cssHooks[t] || S.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Be(e, t, r)),
            "normal" === i && t in Qe && (i = Qe[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function() {
                        return Ze(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = Ie(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)),
                s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = S.css(e, u)),
                Je(0, t, s)
            }
        }
    }),
    S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (S.cssHooks[i + o].set = Je)
    }),
    S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((S.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || S.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : et.propHooks._default.set(this),
            this
        }
    }).init.prototype = et.prototype,
    (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    S.fx = et.prototype.init,
    S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval),
        S.fx.tick())
    }
    function ut() {
        return C.setTimeout(function() {
            tt = void 0
        }),
        tt = Date.now()
    }
    function lt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function ft(o, e, t) {
        var n, a, r = 0, i = ft.prefilters.length, s = S.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(!0, {
                specialEasing: {},
                easing: S.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: tt || ut(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = X(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = S.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return S.map(c, ct, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e,
            e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                ft.tweeners[n] = ft.tweeners[n] || [],
                ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    S.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                ot.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = Y.get(e, "display")),
                "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0),
                l = e.style.display || l,
                c = S.css(e, "display"),
                le([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && le([e], !0),
                    p.done(function() {
                        for (r in g || le([e]),
                        Y.remove(e, "fxshow"),
                        d)
                            S.style(e, r, d[r])
                    })),
                    u = ct(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }),
    S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            m(r.old) && r.old.call(this),
            r.queue && S.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t)
              , o = S.speed(e, n, r)
              , a = function() {
                var e = ft(this, S.extend({}, t), o);
                (i || Y.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = S.timers
                  , r = Y.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }),
    S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    S.timers = [],
    S.fx.tick = function() {
        var e, t = 0, n = S.timers;
        for (tt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(),
        tt = void 0
    }
    ,
    S.fx.timer = function(e) {
        S.timers.push(e),
        S.fx.start()
    }
    ,
    S.fx.interval = 13,
    S.fx.start = function() {
        nt || (nt = !0,
        st())
    }
    ,
    S.fx.stop = function() {
        nt = null
    }
    ,
    S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    rt = E.createElement("input"),
    it = E.createElement("select").appendChild(E.createElement("option")),
    rt.type = "checkbox",
    y.checkOn = "" !== rt.value,
    y.optSelected = it.selected,
    (rt = E.createElement("input")).value = "t",
    rt.type = "radio",
    y.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }),
    S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)),
                void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    pt = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o],
            dt[o] = r,
            r = null != a(e, t, n) ? o : null,
            dt[o] = i),
            r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i
      , gt = /^(?:a|area)$/i;
    function vt(e) {
        return (e.match(P) || []).join(" ")
    }
    function yt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }),
    S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                i = S.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }),
    S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).addClass(t.call(this, e, yt(this)))
                });
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).removeClass(t.call(this, e, yt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " "))
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, yt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0,
                    n = S(this),
                    r = mt(i);
                    while (e = r[t++])
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else
                    void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }),
    S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = S.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        },
        y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    y.focusin = "onfocusin"in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/
      , wt = function(e) {
        e.stopPropagation()
    };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
            3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[S.expando] ? e : new S.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : S.makeArray(t, [e]),
            c = S.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                    bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                S.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, wt),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, wt),
                S.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }),
    S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return S.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r);
                t || e.addEventListener(n, i, !0),
                Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0),
                Y.remove(e, r))
            }
        }
    });
    var Tt = C.location
      , Ct = {
        guid: Date.now()
    }
      , Et = /\?/;
    S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e),
        t
    }
    ;
    var St = /\[\]$/
      , kt = /\r?\n/g
      , At = /^(?:submit|button|image|reset|file)$/i
      , Nt = /^(?:input|select|textarea|keygen)/i;
    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, function(e, t) {
                r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                Dt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
            S.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                Dt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var jt = /%20/g
      , qt = /#.*$/
      , Lt = /([?&])_=[^&]*/
      , Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ot = /^(?:GET|HEAD)$/
      , Pt = /^\/\//
      , Rt = {}
      , Mt = {}
      , It = "*/".concat("*")
      , Wt = E.createElement("a");
    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Bt(t, i, o, a) {
        var s = {}
          , u = t === Mt;
        function l(e) {
            var r;
            return s[e] = !0,
            S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function $t(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r),
        e
    }
    Wt.href = Tt.href,
    S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = Ht.exec(p))
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (x.promise(T),
            v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""],
            null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)),
            Bt(Rt, v, t, T),
            h)
                return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Ot.test(v.type),
            f = v.url.replace(qt, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(Lt, "$1"),
            o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o),
            v.url = f + o),
            v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
            S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                return T.abort();
            if (u = "abort",
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            c = Bt(Mt, v, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, v]),
                h)
                    return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0])
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, T, n)),
                !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}
                ),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i),
                i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(y, [T, l]),
                g && (m.trigger("ajaxComplete", [T, v]),
                --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }),
    S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n,
            n = t,
            t = void 0),
            S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }),
    S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }
    ,
    S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])),
            t = S(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }
    ,
    S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var _t = {
        0: 200,
        1223: 204
    }
      , zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials"in zt,
    y.ajax = zt = !!zt,
    S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || zt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e),
                e
            }
        }
    }),
    S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = S("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    E.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Ut, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0,
            e
        }
    }),
    S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || S.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = C[r],
            C[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? S(C).removeProp(r) : C[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Xt.push(r)),
                o && m(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Ut.childNodes.length),
    S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
        t.head.appendChild(r)) : t = E),
        o = !n && [],
        (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o),
        o && o.length && S(o).remove(),
        S.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    S.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)),
        e = e.slice(0, s)),
        m(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = S.css(e, "top"),
            u = S.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            m(t) && (t = t.call(e, n, S.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"),
            "number" == typeof f.left && (f.left += "px"),
            c.css(f))
        }
    },
    S.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    S.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === S.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                    i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position"))
                    e = e.offsetParent;
                return e || re
            })
        }
    }),
    S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = $e(y.pixelPosition, function(e, t) {
            if (t)
                return t = Be(e, n),
                Me.test(t) ? S(e).position()[n] + "px" : t
        })
    }),
    S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        m(e))
            return r = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || S.guid++,
            i
    }
    ,
    S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }
    ,
    S.isArray = Array.isArray,
    S.parseJSON = JSON.parse,
    S.nodeName = A,
    S.isFunction = m,
    S.isWindow = x,
    S.camelCase = X,
    S.type = w,
    S.now = Date.now,
    S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Yt = C.jQuery
      , Qt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Qt),
        e && C.jQuery === S && (C.jQuery = Yt),
        S
    }
    ,
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
});
;/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e) {
    "use strict";
    if (typeof exports === "object" && typeof exports.nodeName !== "string") {
        e(require("jquery"))
    } else if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else {
        e(jQuery)
    }
}
)(function(t) {
    "use strict";
    var r = function(e) {
        e = e || "once";
        if (typeof e !== "string") {
            throw new TypeError("The jQuery Once id parameter must be a string")
        }
        return e
    };
    t.fn.once = function(e) {
        var n = "jquery-once-" + r(e);
        return this.filter(function() {
            return t(this).data(n) !== true
        }).data(n, true)
    }
    ;
    t.fn.removeOnce = function(e) {
        return this.findOnce(e).removeData("jquery-once-" + r(e))
    }
    ;
    t.fn.findOnce = function(e) {
        var n = "jquery-once-" + r(e);
        return this.filter(function() {
            return t(this).data(n) === true
        })
    }
});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function() {
    var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

    window.drupalSettings = {};

    if (settingsElement !== null) {
        window.drupalSettings = JSON.parse(settingsElement.textContent);
    }
}
)();
;/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = {
    behaviors: {},
    locale: {}
};

(function(Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
    Drupal.throwError = function(error) {
        setTimeout(function() {
            throw error;
        }, 0);
    }
    ;

    Drupal.attachBehaviors = function(context, settings) {
        context = context || document;
        settings = settings || drupalSettings;
        var behaviors = Drupal.behaviors;

        Object.keys(behaviors || {}).forEach(function(i) {
            if (typeof behaviors[i].attach === 'function') {
                try {
                    behaviors[i].attach(context, settings);
                } catch (e) {
                    Drupal.throwError(e);
                }
            }
        });
    }
    ;

    Drupal.detachBehaviors = function(context, settings, trigger) {
        context = context || document;
        settings = settings || drupalSettings;
        trigger = trigger || 'unload';
        var behaviors = Drupal.behaviors;

        Object.keys(behaviors || {}).forEach(function(i) {
            if (typeof behaviors[i].detach === 'function') {
                try {
                    behaviors[i].detach(context, settings, trigger);
                } catch (e) {
                    Drupal.throwError(e);
                }
            }
        });
    }
    ;

    Drupal.checkPlain = function(str) {
        str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        return str;
    }
    ;

    Drupal.formatString = function(str, args) {
        var processedArgs = {};

        Object.keys(args || {}).forEach(function(key) {
            switch (key.charAt(0)) {
            case '@':
                processedArgs[key] = Drupal.checkPlain(args[key]);
                break;

            case '!':
                processedArgs[key] = args[key];
                break;

            default:
                processedArgs[key] = Drupal.theme('placeholder', args[key]);
                break;
            }
        });

        return Drupal.stringReplace(str, processedArgs, null);
    }
    ;

    Drupal.stringReplace = function(str, args, keys) {
        if (str.length === 0) {
            return str;
        }

        if (!Array.isArray(keys)) {
            keys = Object.keys(args || {});

            keys.sort(function(a, b) {
                return a.length - b.length;
            });
        }

        if (keys.length === 0) {
            return str;
        }

        var key = keys.pop();
        var fragments = str.split(key);

        if (keys.length) {
            for (var i = 0; i < fragments.length; i++) {
                fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
            }
        }

        return fragments.join(args[key]);
    }
    ;

    Drupal.t = function(str, args, options) {
        options = options || {};
        options.context = options.context || '';

        if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
            str = drupalTranslations.strings[options.context][str];
        }

        if (args) {
            str = Drupal.formatString(str, args);
        }
        return str;
    }
    ;

    Drupal.url = function(path) {
        return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
    }
    ;

    Drupal.url.toAbsolute = function(url) {
        var urlParsingNode = document.createElement('a');

        try {
            url = decodeURIComponent(url);
        } catch (e) {}

        urlParsingNode.setAttribute('href', url);

        return urlParsingNode.cloneNode(false).href;
    }
    ;

    Drupal.url.isLocal = function(url) {
        var absoluteUrl = Drupal.url.toAbsolute(url);
        var protocol = window.location.protocol;

        if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
            protocol = 'https:';
        }
        var baseUrl = protocol + '//' + window.location.host + drupalSettings.path.baseUrl.slice(0, -1);

        try {
            absoluteUrl = decodeURIComponent(absoluteUrl);
        } catch (e) {}
        try {
            baseUrl = decodeURIComponent(baseUrl);
        } catch (e) {}

        return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
    }
    ;

    Drupal.formatPlural = function(count, singular, plural, args, options) {
        args = args || {};
        args['@count'] = count;

        var pluralDelimiter = drupalSettings.pluralDelimiter;
        var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
        var index = 0;

        if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
            index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
        } else if (args['@count'] !== 1) {
            index = 1;
        }

        return translations[index];
    }
    ;

    Drupal.encodePath = function(item) {
        return window.encodeURIComponent(item).replace(/%2F/g, '/');
    }
    ;

    Drupal.deprecationError = function(_ref) {
        var message = _ref.message;

        if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
            console.warn('[Deprecation] ' + message);
        }
    }
    ;

    Drupal.deprecatedProperty = function(_ref2) {
        var target = _ref2.target
          , deprecatedProperty = _ref2.deprecatedProperty
          , message = _ref2.message;

        if (!Proxy || !Reflect) {
            return target;
        }

        return new Proxy(target,{
            get: function get(target, key) {
                for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                    rest[_key - 2] = arguments[_key];
                }

                if (key === deprecatedProperty) {
                    Drupal.deprecationError({
                        message: message
                    });
                }
                return Reflect.get.apply(Reflect, [target, key].concat(rest));
            }
        });
    }
    ;

    Drupal.theme = function(func) {
        if (func in Drupal.theme) {
            var _Drupal$theme;

            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }

            return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
        }
    }
    ;

    Drupal.theme.placeholder = function(str) {
        return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
    }
    ;
}
)(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);
;/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
    jQuery.noConflict();
}

document.documentElement.className += ' js';

(function(Drupal, drupalSettings) {
    var domReady = function domReady(callback) {
        if (document.readyState !== 'loading') {
            callback();
        } else {
            var listener = function listener() {
                callback();
                document.removeEventListener('DOMContentLoaded', listener);
            };
            document.addEventListener('DOMContentLoaded', listener);
        }
    };

    domReady(function() {
        Drupal.attachBehaviors(document, drupalSettings);
    });
}
)(Drupal, window.drupalSettings);
;/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
            return function(c) {
                return !!a.data(c, b)
            }
        }) : function(b, c, d) {
            return !!a.data(b, d[3])
        }
    })
});
;/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return a.fn.extend({
        disableSelection: function() {
            var a = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.on(a + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.off(".ui-disableSelection")
        }
    })
});
;/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return a.fn.form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : a(this[0].form)
    }
});
;/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version", "./escape-selector"], a) : a(jQuery)
}(function(a) {
    return a.fn.labels = function() {
        var b, c, d, e, f;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e = this.eq(0).parents("label"),
        d = this.attr("id"),
        d && (b = this.eq(0).parents().last(),
        f = b.add(b.length ? b.siblings() : this.siblings()),
        c = "label[for='" + a.ui.escapeSelector(d) + "']",
        e = e.add(f.find(c).addBack(c))),
        this.pushStack(e))
    }
});
;/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    "1.7" === a.fn.jquery.substring(0, 3) && (a.each(["Width", "Height"], function(b, c) {
        function d(b, c, d, f) {
            return a.each(e, function() {
                c -= parseFloat(a.css(b, "padding" + this)) || 0,
                d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0),
                f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
            }),
            c
        }
        var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"]
          , f = c.toLowerCase()
          , g = {
            innerWidth: a.fn.innerWidth,
            innerHeight: a.fn.innerHeight,
            outerWidth: a.fn.outerWidth,
            outerHeight: a.fn.outerHeight
        };
        a.fn["inner" + c] = function(b) {
            return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
                a(this).css(f, d(this, b) + "px")
            })
        }
        ,
        a.fn["outer" + c] = function(b, e) {
            return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
                a(this).css(f, d(this, b, !0, e) + "px")
            })
        }
    }),
    a.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
    )
});
;/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return a.fn.scrollParent = function(b) {
        var c = this.css("position")
          , d = "absolute" === c
          , e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/
          , f = this.parents().filter(function() {
            var b = a(this);
            return (!d || "static" !== b.css("position")) && e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
        }).eq(0);
        return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
    }
});
;/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version", "./focusable"], a) : a(jQuery)
}(function(a) {
    return a.extend(a.expr[":"], {
        tabbable: function(b) {
            var c = a.attr(b, "tabindex")
              , d = null != c;
            return (!d || c >= 0) && a.ui.focusable(b, d)
        }
    })
});
;/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return a.fn.extend({
        uniqueId: function() {
            var a = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
            })
        }
    })
});
;/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    return a.ui = a.ui || {},
    a.ui.version = "1.12.1"
});
;/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return a.ui.escapeSelector = function() {
        var a = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
        return function(b) {
            return b.replace(a, "\\$1")
        }
    }()
});
;/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    function b(a) {
        for (var b = a.css("visibility"); "inherit" === b; )
            a = a.parent(),
            b = a.css("visibility");
        return "hidden" !== b
    }
    return a.ui.focusable = function(c, d) {
        var e, f, g, h, i, j = c.nodeName.toLowerCase();
        return "area" === j ? (e = c.parentNode,
        f = e.name,
        !(!c.href || !f || "map" !== e.nodeName.toLowerCase()) && (g = a("img[usemap='#" + f + "']"),
        g.length > 0 && g.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(j) ? (h = !c.disabled,
        h && (i = a(c).closest("fieldset")[0],
        i && (h = !i.disabled))) : h = "a" === j ? c.href || d : d,
        h && a(c).is(":visible") && b(a(c)))
    }
    ,
    a.extend(a.expr[":"], {
        focusable: function(b) {
            return a.ui.focusable(b, null != a.attr(b, "tabindex"))
        }
    }),
    a.ui.focusable
});
;/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return a.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }
});
;/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return a.ui.plugin = {
        add: function(b, c, d) {
            var e, f = a.ui[b].prototype;
            for (e in d)
                f.plugins[e] = f.plugins[e] || [],
                f.plugins[e].push([c, d[e]])
        },
        call: function(a, b, c, d) {
            var e, f = a.plugins[b];
            if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                for (e = 0; e < f.length; e++)
                    a.options[f[e][0]] && f[e][1].apply(a.element, c)
        }
    }
});
;/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return a.ui.safeActiveElement = function(a) {
        var b;
        try {
            b = a.activeElement
        } catch (c) {
            b = a.body
        }
        return b || (b = a.body),
        b.nodeName || (b = a.body),
        b
    }
});
;/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    return a.ui.safeBlur = function(b) {
        b && "body" !== b.nodeName.toLowerCase() && a(b).trigger("blur")
    }
});
;/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function(a) {
    var b = 0
      , c = Array.prototype.slice;
    return a.cleanData = function(b) {
        return function(c) {
            var d, e, f;
            for (f = 0; null != (e = c[f]); f++)
                try {
                    d = a._data(e, "events"),
                    d && d.remove && a(e).triggerHandler("remove")
                } catch (g) {}
            b(c)
        }
    }(a.cleanData),
    a.widget = function(b, c, d) {
        var e, f, g, h = {}, i = b.split(".")[0];
        b = b.split(".")[1];
        var j = i + "-" + b;
        return d || (d = c,
        c = a.Widget),
        a.isArray(d) && (d = a.extend.apply(null, [{}].concat(d))),
        a.expr[":"][j.toLowerCase()] = function(b) {
            return !!a.data(b, j)
        }
        ,
        a[i] = a[i] || {},
        e = a[i][b],
        f = a[i][b] = function(a, b) {
            return this._createWidget ? void (arguments.length && this._createWidget(a, b)) : new f(a,b)
        }
        ,
        a.extend(f, e, {
            version: d.version,
            _proto: a.extend({}, d),
            _childConstructors: []
        }),
        g = new c,
        g.options = a.widget.extend({}, g.options),
        a.each(d, function(b, d) {
            return a.isFunction(d) ? void (h[b] = function() {
                function a() {
                    return c.prototype[b].apply(this, arguments)
                }
                function e(a) {
                    return c.prototype[b].apply(this, a)
                }
                return function() {
                    var b, c = this._super, f = this._superApply;
                    return this._super = a,
                    this._superApply = e,
                    b = d.apply(this, arguments),
                    this._super = c,
                    this._superApply = f,
                    b
                }
            }()) : void (h[b] = d)
        }),
        f.prototype = a.widget.extend(g, {
            widgetEventPrefix: e ? g.widgetEventPrefix || b : b
        }, h, {
            constructor: f,
            namespace: i,
            widgetName: b,
            widgetFullName: j
        }),
        e ? (a.each(e._childConstructors, function(b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, f, c._proto)
        }),
        delete e._childConstructors) : c._childConstructors.push(f),
        a.widget.bridge(b, f),
        f
    }
    ,
    a.widget.extend = function(b) {
        for (var d, e, f = c.call(arguments, 1), g = 0, h = f.length; g < h; g++)
            for (d in f[g])
                e = f[g][d],
                f[g].hasOwnProperty(d) && void 0 !== e && (a.isPlainObject(e) ? b[d] = a.isPlainObject(b[d]) ? a.widget.extend({}, b[d], e) : a.widget.extend({}, e) : b[d] = e);
        return b
    }
    ,
    a.widget.bridge = function(b, d) {
        var e = d.prototype.widgetFullName || b;
        a.fn[b] = function(f) {
            var g = "string" == typeof f
              , h = c.call(arguments, 1)
              , i = this;
            return g ? this.length || "instance" !== f ? this.each(function() {
                var c, d = a.data(this, e);
                return "instance" === f ? (i = d,
                !1) : d ? a.isFunction(d[f]) && "_" !== f.charAt(0) ? (c = d[f].apply(d, h),
                c !== d && void 0 !== c ? (i = c && c.jquery ? i.pushStack(c.get()) : c,
                !1) : void 0) : a.error("no such method '" + f + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'")
            }) : i = void 0 : (h.length && (f = a.widget.extend.apply(null, [f].concat(h))),
            this.each(function() {
                var b = a.data(this, e);
                b ? (b.option(f || {}),
                b._init && b._init()) : a.data(this, e, new d(f,this))
            })),
            i
        }
    }
    ,
    a.Widget = function() {}
    ,
    a.Widget._childConstructors = [],
    a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(c, d) {
            d = a(d || this.defaultElement || this)[0],
            this.element = a(d),
            this.uuid = b++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = a(),
            this.hoverable = a(),
            this.focusable = a(),
            this.classesElementLookup = {},
            d !== this && (a.data(d, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(a) {
                    a.target === d && this.destroy()
                }
            }),
            this.document = a(d.style ? d.ownerDocument : d.document || d),
            this.window = a(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = a.widget.extend({}, this.options, this._getCreateOptions(), c),
            this._create(),
            this.options.disabled && this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            var b = this;
            this._destroy(),
            a.each(this.classesElementLookup, function(a, c) {
                b._removeClass(c, a)
            }),
            this.element.off(this.eventNamespace).removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace)
        },
        _destroy: a.noop,
        widget: function() {
            return this.element
        },
        option: function(b, c) {
            var d, e, f, g = b;
            if (0 === arguments.length)
                return a.widget.extend({}, this.options);
            if ("string" == typeof b)
                if (g = {},
                d = b.split("."),
                b = d.shift(),
                d.length) {
                    for (e = g[b] = a.widget.extend({}, this.options[b]),
                    f = 0; f < d.length - 1; f++)
                        e[d[f]] = e[d[f]] || {},
                        e = e[d[f]];
                    if (b = d.pop(),
                    1 === arguments.length)
                        return void 0 === e[b] ? null : e[b];
                    e[b] = c
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[b] ? null : this.options[b];
                    g[b] = c
                }
            return this._setOptions(g),
            this
        },
        _setOptions: function(a) {
            var b;
            for (b in a)
                this._setOption(b, a[b]);
            return this
        },
        _setOption: function(a, b) {
            return "classes" === a && this._setOptionClasses(b),
            this.options[a] = b,
            "disabled" === a && this._setOptionDisabled(b),
            this
        },
        _setOptionClasses: function(b) {
            var c, d, e;
            for (c in b)
                e = this.classesElementLookup[c],
                b[c] !== this.options.classes[c] && e && e.length && (d = a(e.get()),
                this._removeClass(e, c),
                d.addClass(this._classes({
                    element: d,
                    keys: c,
                    classes: b,
                    add: !0
                })))
        },
        _setOptionDisabled: function(a) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!a),
            a && (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(b) {
            function c(c, f) {
                var g, h;
                for (h = 0; h < c.length; h++)
                    g = e.classesElementLookup[c[h]] || a(),
                    g = a(b.add ? a.unique(g.get().concat(b.element.get())) : g.not(b.element).get()),
                    e.classesElementLookup[c[h]] = g,
                    d.push(c[h]),
                    f && b.classes[c[h]] && d.push(b.classes[c[h]])
            }
            var d = []
              , e = this;
            return b = a.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, b),
            this._on(b.element, {
                remove: "_untrackClassesElement"
            }),
            b.keys && c(b.keys.match(/\S+/g) || [], !0),
            b.extra && c(b.extra.match(/\S+/g) || []),
            d.join(" ")
        },
        _untrackClassesElement: function(b) {
            var c = this;
            a.each(c.classesElementLookup, function(d, e) {
                a.inArray(b.target, e) !== -1 && (c.classesElementLookup[d] = a(e.not(b.target).get()))
            })
        },
        _removeClass: function(a, b, c) {
            return this._toggleClass(a, b, c, !1)
        },
        _addClass: function(a, b, c) {
            return this._toggleClass(a, b, c, !0)
        },
        _toggleClass: function(a, b, c, d) {
            d = "boolean" == typeof d ? d : c;
            var e = "string" == typeof a || null === a
              , f = {
                extra: e ? b : c,
                keys: e ? a : b,
                element: e ? this.element : a,
                add: d
            };
            return f.element.toggleClass(this._classes(f), d),
            this
        },
        _on: function(b, c, d) {
            var e, f = this;
            "boolean" != typeof b && (d = c,
            c = b,
            b = !1),
            d ? (c = e = a(c),
            this.bindings = this.bindings.add(c)) : (d = c,
            c = this.element,
            e = this.widget()),
            a.each(d, function(d, g) {
                function h() {
                    if (b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled"))
                        return ("string" == typeof g ? f[g] : g).apply(f, arguments)
                }
                "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                var i = d.match(/^([\w:-]*)\s*(.*)$/)
                  , j = i[1] + f.eventNamespace
                  , k = i[2];
                k ? e.on(j, k, h) : c.on(j, h)
            })
        },
        _off: function(b, c) {
            c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            b.off(c).off(c),
            this.bindings = a(this.bindings.not(b).get()),
            this.focusable = a(this.focusable.not(b).get()),
            this.hoverable = a(this.hoverable.not(b).get())
        },
        _delay: function(a, b) {
            function c() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments)
            }
            var d = this;
            return setTimeout(c, b || 0)
        },
        _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b),
            this._on(b, {
                mouseenter: function(b) {
                    this._addClass(a(b.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(b) {
                    this._removeClass(a(b.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(b) {
            this.focusable = this.focusable.add(b),
            this._on(b, {
                focusin: function(b) {
                    this._addClass(a(b.currentTarget), null, "ui-state-focus")
                },
                focusout: function(b) {
                    this._removeClass(a(b.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(b, c, d) {
            var e, f, g = this.options[b];
            if (d = d || {},
            c = a.Event(c),
            c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(),
            c.target = this.element[0],
            f = c.originalEvent)
                for (e in f)
                    e in c || (c[e] = f[e]);
            return this.element.trigger(c, d),
            !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
        }
    },
    a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(b, c) {
        a.Widget.prototype["_" + b] = function(d, e, f) {
            "string" == typeof e && (e = {
                effect: e
            });
            var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
            e = e || {},
            "number" == typeof e && (e = {
                duration: e
            }),
            g = !a.isEmptyObject(e),
            e.complete = f,
            e.delay && d.delay(e.delay),
            g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                a(this)[b](),
                f && f.call(d[0]),
                c()
            })
        }
    }),
    a.widget
});
;/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function($, Drupal) {
    Drupal.theme.progressBar = function(id) {
        return '<div id="' + id + '" class="progress" aria-live="polite">' + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
    }
    ;

    Drupal.ProgressBar = function(id, updateCallback, method, errorCallback) {
        this.id = id;
        this.method = method || 'GET';
        this.updateCallback = updateCallback;
        this.errorCallback = errorCallback;

        this.element = $(Drupal.theme('progressBar', id));
    }
    ;

    $.extend(Drupal.ProgressBar.prototype, {
        setProgress: function setProgress(percentage, message, label) {
            if (percentage >= 0 && percentage <= 100) {
                $(this.element).find('div.progress__bar').css('width', percentage + '%');
                $(this.element).find('div.progress__percentage').html(percentage + '%');
            }
            $('div.progress__description', this.element).html(message);
            $('div.progress__label', this.element).html(label);
            if (this.updateCallback) {
                this.updateCallback(percentage, message, this);
            }
        },
        startMonitoring: function startMonitoring(uri, delay) {
            this.delay = delay;
            this.uri = uri;
            this.sendPing();
        },
        stopMonitoring: function stopMonitoring() {
            clearTimeout(this.timer);

            this.uri = null;
        },
        sendPing: function sendPing() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            if (this.uri) {
                var pb = this;

                var uri = this.uri;
                if (uri.indexOf('?') === -1) {
                    uri += '?';
                } else {
                    uri += '&';
                }
                uri += '_format=json';
                $.ajax({
                    type: this.method,
                    url: uri,
                    data: '',
                    dataType: 'json',
                    success: function success(progress) {
                        if (progress.status === 0) {
                            pb.displayError(progress.data);
                            return;
                        }

                        pb.setProgress(progress.percentage, progress.message, progress.label);

                        pb.timer = setTimeout(function() {
                            pb.sendPing();
                        }, pb.delay);
                    },
                    error: function error(xmlhttp) {
                        var e = new Drupal.AjaxError(xmlhttp,pb.uri);
                        pb.displayError('<pre>' + e.message + '</pre>');
                    }
                });
            }
        },
        displayError: function displayError(string) {
            var error = $('<div class="messages messages--error"></div>').html(string);
            $(this.element).before(error).hide();

            if (this.errorCallback) {
                this.errorCallback(this);
            }
        }
    });
}
)(jQuery, Drupal);
;/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    } else {
        return Array.from(arr);
    }
}

(function($, window, Drupal, drupalSettings) {
    Drupal.behaviors.AJAX = {
        attach: function attach(context, settings) {
            function loadAjaxBehavior(base) {
                var elementSettings = settings.ajax[base];
                if (typeof elementSettings.selector === 'undefined') {
                    elementSettings.selector = '#' + base;
                }
                $(elementSettings.selector).once('drupal-ajax').each(function() {
                    elementSettings.element = this;
                    elementSettings.base = base;
                    Drupal.ajax(elementSettings);
                });
            }

            Object.keys(settings.ajax || {}).forEach(function(base) {
                return loadAjaxBehavior(base);
            });

            Drupal.ajax.bindAjaxLinks(document.body);

            $('.use-ajax-submit').once('ajax').each(function() {
                var elementSettings = {};

                elementSettings.url = $(this.form).attr('action');

                elementSettings.setClick = true;

                elementSettings.event = 'click';

                elementSettings.progress = {
                    type: 'throbber'
                };
                elementSettings.base = $(this).attr('id');
                elementSettings.element = this;

                Drupal.ajax(elementSettings);
            });
        },
        detach: function detach(context, settings, trigger) {
            if (trigger === 'unload') {
                Drupal.ajax.expired().forEach(function(instance) {
                    Drupal.ajax.instances[instance.instanceIndex] = null;
                });
            }
        }
    };

    Drupal.AjaxError = function(xmlhttp, uri, customMessage) {
        var statusCode = void 0;
        var statusText = void 0;
        var responseText = void 0;
        if (xmlhttp.status) {
            statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', {
                '!status': xmlhttp.status
            });
        } else {
            statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
        }
        statusCode += '\n' + Drupal.t('Debugging information follows.');
        var pathText = '\n' + Drupal.t('Path: !uri', {
            '!uri': uri
        });
        statusText = '';

        try {
            statusText = '\n' + Drupal.t('StatusText: !statusText', {
                '!statusText': $.trim(xmlhttp.statusText)
            });
        } catch (e) {}

        responseText = '';

        try {
            responseText = '\n' + Drupal.t('ResponseText: !responseText', {
                '!responseText': $.trim(xmlhttp.responseText)
            });
        } catch (e) {}

        responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
        responseText = responseText.replace(/[\n]+\s+/g, '\n');

        var readyStateText = xmlhttp.status === 0 ? '\n' + Drupal.t('ReadyState: !readyState', {
            '!readyState': xmlhttp.readyState
        }) : '';

        customMessage = customMessage ? '\n' + Drupal.t('CustomMessage: !customMessage', {
            '!customMessage': customMessage
        }) : '';

        this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

        this.name = 'AjaxError';
    }
    ;

    Drupal.AjaxError.prototype = new Error();
    Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

    Drupal.ajax = function(settings) {
        if (arguments.length !== 1) {
            throw new Error('Drupal.ajax() function must be called with one configuration object only');
        }

        var base = settings.base || false;
        var element = settings.element || false;
        delete settings.base;
        delete settings.element;

        if (!settings.progress && !element) {
            settings.progress = false;
        }

        var ajax = new Drupal.Ajax(base,element,settings);
        ajax.instanceIndex = Drupal.ajax.instances.length;
        Drupal.ajax.instances.push(ajax);

        return ajax;
    }
    ;

    Drupal.ajax.instances = [];

    Drupal.ajax.expired = function() {
        return Drupal.ajax.instances.filter(function(instance) {
            return instance && instance.element !== false && !document.body.contains(instance.element);
        });
    }
    ;

    Drupal.ajax.bindAjaxLinks = function(element) {
        $(element).find('.use-ajax').once('ajax').each(function(i, ajaxLink) {
            var $linkElement = $(ajaxLink);

            var elementSettings = {
                progress: {
                    type: 'throbber'
                },
                dialogType: $linkElement.data('dialog-type'),
                dialog: $linkElement.data('dialog-options'),
                dialogRenderer: $linkElement.data('dialog-renderer'),
                base: $linkElement.attr('id'),
                element: ajaxLink
            };
            var href = $linkElement.attr('href');

            if (href) {
                elementSettings.url = href;
                elementSettings.event = 'click';
            }
            Drupal.ajax(elementSettings);
        });
    }
    ;

    Drupal.Ajax = function(base, element, elementSettings) {
        var defaults = {
            event: element ? 'mousedown' : null,
            keypress: true,
            selector: base ? '#' + base : null,
            effect: 'none',
            speed: 'none',
            method: 'replaceWith',
            progress: {
                type: 'throbber',
                message: Drupal.t('Please wait...')
            },
            submit: {
                js: true
            }
        };

        $.extend(this, defaults, elementSettings);

        this.commands = new Drupal.AjaxCommands();

        this.instanceIndex = false;

        if (this.wrapper) {
            this.wrapper = '#' + this.wrapper;
        }

        this.element = element;

        this.element_settings = elementSettings;

        this.elementSettings = elementSettings;

        if (this.element && this.element.form) {
            this.$form = $(this.element.form);
        }

        if (!this.url) {
            var $element = $(this.element);
            if ($element.is('a')) {
                this.url = $element.attr('href');
            } else if (this.element && element.form) {
                this.url = this.$form.attr('action');
            }
        }

        var originalUrl = this.url;

        this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');

        if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
            drupalSettings.ajaxTrustedUrl[this.url] = true;
        }

        var ajax = this;

        ajax.options = {
            url: ajax.url,
            data: ajax.submit,
            beforeSerialize: function beforeSerialize(elementSettings, options) {
                return ajax.beforeSerialize(elementSettings, options);
            },
            beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
                ajax.ajaxing = true;
                return ajax.beforeSubmit(formValues, elementSettings, options);
            },
            beforeSend: function beforeSend(xmlhttprequest, options) {
                ajax.ajaxing = true;
                return ajax.beforeSend(xmlhttprequest, options);
            },
            success: function success(response, status, xmlhttprequest) {
                if (typeof response === 'string') {
                    response = $.parseJSON(response);
                }

                if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
                    if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
                        var customMessage = Drupal.t('The response failed verification so will not be processed.');
                        return ajax.error(xmlhttprequest, ajax.url, customMessage);
                    }
                }

                return ajax.success(response, status);
            },
            complete: function complete(xmlhttprequest, status) {
                ajax.ajaxing = false;
                if (status === 'error' || status === 'parsererror') {
                    return ajax.error(xmlhttprequest, ajax.url);
                }
            },

            dataType: 'json',
            jsonp: false,
            type: 'POST'
        };

        if (elementSettings.dialog) {
            ajax.options.data.dialogOptions = elementSettings.dialog;
        }

        if (ajax.options.url.indexOf('?') === -1) {
            ajax.options.url += '?';
        } else {
            ajax.options.url += '&';
        }

        var wrapper = 'drupal_' + (elementSettings.dialogType || 'ajax');
        if (elementSettings.dialogRenderer) {
            wrapper += '.' + elementSettings.dialogRenderer;
        }
        ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=' + wrapper;

        $(ajax.element).on(elementSettings.event, function(event) {
            if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
                throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
                    '!url': ajax.url
                }));
            }
            return ajax.eventResponse(this, event);
        });

        if (elementSettings.keypress) {
            $(ajax.element).on('keypress', function(event) {
                return ajax.keypressResponse(this, event);
            });
        }

        if (elementSettings.prevent) {
            $(ajax.element).on(elementSettings.prevent, false);
        }
    }
    ;

    Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

    Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

    Drupal.Ajax.prototype.execute = function() {
        if (this.ajaxing) {
            return;
        }

        try {
            this.beforeSerialize(this.element, this.options);

            return $.ajax(this.options);
        } catch (e) {
            this.ajaxing = false;
            window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);

            return $.Deferred().reject();
        }
    }
    ;

    Drupal.Ajax.prototype.keypressResponse = function(element, event) {
        var ajax = this;

        if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
            event.preventDefault();
            event.stopPropagation();
            $(element).trigger(ajax.elementSettings.event);
        }
    }
    ;

    Drupal.Ajax.prototype.eventResponse = function(element, event) {
        event.preventDefault();
        event.stopPropagation();

        var ajax = this;

        if (ajax.ajaxing) {
            return;
        }

        try {
            if (ajax.$form) {
                if (ajax.setClick) {
                    element.form.clk = element;
                }

                ajax.$form.ajaxSubmit(ajax.options);
            } else {
                ajax.beforeSerialize(ajax.element, ajax.options);
                $.ajax(ajax.options);
            }
        } catch (e) {
            ajax.ajaxing = false;
            window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
        }
    }
    ;

    Drupal.Ajax.prototype.beforeSerialize = function(element, options) {
        if (this.$form && document.body.contains(this.$form.get(0))) {
            var settings = this.settings || drupalSettings;
            Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
        }

        options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

        var pageState = drupalSettings.ajaxPageState;
        options.data['ajax_page_state[theme]'] = pageState.theme;
        options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
        options.data['ajax_page_state[libraries]'] = pageState.libraries;
    }
    ;

    Drupal.Ajax.prototype.beforeSubmit = function(formValues, element, options) {}
    ;

    Drupal.Ajax.prototype.beforeSend = function(xmlhttprequest, options) {
        if (this.$form) {
            options.extraData = options.extraData || {};

            options.extraData.ajax_iframe_upload = '1';

            var v = $.fieldValue(this.element);
            if (v !== null) {
                options.extraData[this.element.name] = v;
            }
        }

        $(this.element).prop('disabled', true);

        if (!this.progress || !this.progress.type) {
            return;
        }

        var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
        if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
            this[progressIndicatorMethod].call(this);
        }
    }
    ;

    Drupal.theme.ajaxProgressThrobber = function(message) {
        var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
        var throbber = '<div class="throbber">&nbsp;</div>';

        return '<div class="ajax-progress ajax-progress-throbber">' + throbber + messageMarkup + '</div>';
    }
    ;

    Drupal.theme.ajaxProgressIndicatorFullscreen = function() {
        return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
    }
    ;

    Drupal.theme.ajaxProgressMessage = function(message) {
        return '<div class="message">' + message + '</div>';
    }
    ;

    Drupal.theme.ajaxProgressBar = function($element) {
        return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
    }
    ;

    Drupal.Ajax.prototype.setProgressIndicatorBar = function() {
        var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id,$.noop,this.progress.method,$.noop);
        if (this.progress.message) {
            progressBar.setProgress(-1, this.progress.message);
        }
        if (this.progress.url) {
            progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
        }
        this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
        this.progress.object = progressBar;
        $(this.element).after(this.progress.element);
    }
    ;

    Drupal.Ajax.prototype.setProgressIndicatorThrobber = function() {
        this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
        $(this.element).after(this.progress.element);
    }
    ;

    Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function() {
        this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
        $('body').append(this.progress.element);
    }
    ;

    Drupal.Ajax.prototype.success = function(response, status) {
        var _this = this;

        if (this.progress.element) {
            $(this.progress.element).remove();
        }
        if (this.progress.object) {
            this.progress.object.stopMonitoring();
        }
        $(this.element).prop('disabled', false);

        var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

        var focusChanged = false;
        Object.keys(response || {}).forEach(function(i) {
            if (response[i].command && _this.commands[response[i].command]) {
                _this.commands[response[i].command](_this, response[i], status);
                if (response[i].command === 'invoke' && response[i].method === 'focus') {
                    focusChanged = true;
                }
            }
        });

        if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
            var target = false;

            for (var n = elementParents.length - 1; !target && n >= 0; n--) {
                target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
            }

            if (target) {
                $(target).trigger('focus');
            }
        }

        if (this.$form && document.body.contains(this.$form.get(0))) {
            var settings = this.settings || drupalSettings;
            Drupal.attachBehaviors(this.$form.get(0), settings);
        }

        this.settings = null;
    }
    ;

    Drupal.Ajax.prototype.getEffect = function(response) {
        var type = response.effect || this.effect;
        var speed = response.speed || this.speed;

        var effect = {};
        if (type === 'none') {
            effect.showEffect = 'show';
            effect.hideEffect = 'hide';
            effect.showSpeed = '';
        } else if (type === 'fade') {
            effect.showEffect = 'fadeIn';
            effect.hideEffect = 'fadeOut';
            effect.showSpeed = speed;
        } else {
            effect.showEffect = type + 'Toggle';
            effect.hideEffect = type + 'Toggle';
            effect.showSpeed = speed;
        }

        return effect;
    }
    ;

    Drupal.Ajax.prototype.error = function(xmlhttprequest, uri, customMessage) {
        if (this.progress.element) {
            $(this.progress.element).remove();
        }
        if (this.progress.object) {
            this.progress.object.stopMonitoring();
        }

        $(this.wrapper).show();

        $(this.element).prop('disabled', false);

        if (this.$form && document.body.contains(this.$form.get(0))) {
            var settings = this.settings || drupalSettings;
            Drupal.attachBehaviors(this.$form.get(0), settings);
        }
        throw new Drupal.AjaxError(xmlhttprequest,uri,customMessage);
    }
    ;

    Drupal.theme.ajaxWrapperNewContent = function($newContent, ajax, response) {
        return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function(i) {
            return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
        }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
    }
    ;

    Drupal.theme.ajaxWrapperMultipleRootElements = function($elements) {
        return $('<div></div>').append($elements);
    }
    ;

    Drupal.AjaxCommands = function() {}
    ;
    Drupal.AjaxCommands.prototype = {
        insert: function insert(ajax, response) {
            var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
            var method = response.method || ajax.method;
            var effect = ajax.getEffect(response);

            var settings = response.settings || ajax.settings || drupalSettings;

            var $newContent = $($.parseHTML(response.data, document, true));

            $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);

            switch (method) {
            case 'html':
            case 'replaceWith':
            case 'replaceAll':
            case 'empty':
            case 'remove':
                Drupal.detachBehaviors($wrapper.get(0), settings);
                break;
            default:
                break;
            }

            $wrapper[method]($newContent);

            if (effect.showEffect !== 'show') {
                $newContent.hide();
            }

            var $ajaxNewContent = $newContent.find('.ajax-new-content');
            if ($ajaxNewContent.length) {
                $ajaxNewContent.hide();
                $newContent.show();
                $ajaxNewContent[effect.showEffect](effect.showSpeed);
            } else if (effect.showEffect !== 'show') {
                $newContent[effect.showEffect](effect.showSpeed);
            }

            if ($newContent.parents('html').length) {
                $newContent.each(function(index, element) {
                    if (element.nodeType === Node.ELEMENT_NODE) {
                        Drupal.attachBehaviors(element, settings);
                    }
                });
            }
        },
        remove: function remove(ajax, response, status) {
            var settings = response.settings || ajax.settings || drupalSettings;
            $(response.selector).each(function() {
                Drupal.detachBehaviors(this, settings);
            }).remove();
        },
        changed: function changed(ajax, response, status) {
            var $element = $(response.selector);
            if (!$element.hasClass('ajax-changed')) {
                $element.addClass('ajax-changed');
                if (response.asterisk) {
                    $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
                }
            }
        },
        alert: function alert(ajax, response, status) {
            window.alert(response.text, response.title);
        },
        announce: function announce(ajax, response) {
            if (response.priority) {
                Drupal.announce(response.text, response.priority);
            } else {
                Drupal.announce(response.text);
            }
        },
        redirect: function redirect(ajax, response, status) {
            window.location = response.url;
        },
        css: function css(ajax, response, status) {
            $(response.selector).css(response.argument);
        },
        settings: function settings(ajax, response, status) {
            var ajaxSettings = drupalSettings.ajax;

            if (ajaxSettings) {
                Drupal.ajax.expired().forEach(function(instance) {

                    if (instance.selector) {
                        var selector = instance.selector.replace('#', '');
                        if (selector in ajaxSettings) {
                            delete ajaxSettings[selector];
                        }
                    }
                });
            }

            if (response.merge) {
                $.extend(true, drupalSettings, response.settings);
            } else {
                ajax.settings = response.settings;
            }
        },
        data: function data(ajax, response, status) {
            $(response.selector).data(response.name, response.value);
        },
        invoke: function invoke(ajax, response, status) {
            var $element = $(response.selector);
            $element[response.method].apply($element, _toConsumableArray(response.args));
        },
        restripe: function restripe(ajax, response, status) {
            $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
        },
        update_build_id: function update_build_id(ajax, response, status) {
            $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
        },
        add_css: function add_css(ajax, response, status) {
            $('head').prepend(response.data);
        },
        message: function message(ajax, response) {
            var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));
            if (response.clearPrevious) {
                messages.clear();
            }
            messages.add(response.message, response.messageOptions);
        }
    };
}
)(jQuery, window, Drupal, drupalSettings);
;/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function(Drupal) {
    Drupal.theme.ajaxProgressBar = function($element) {
        return $element.addClass('ajax-progress ajax-progress-bar');
    }
    ;
}
)(Drupal);
;/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/js-cookie@2.2.1/src/js.cookie.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e) {
    var n;
    if ("function" == typeof define && define.amd && (define(e),
    n = !0),
    "object" == typeof exports && (module.exports = e(),
    n = !0),
    !n) {
        var t = window.Cookies
          , o = window.Cookies = e();
        o.noConflict = function() {
            return window.Cookies = t,
            o
        }
    }
}(function() {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t)
                n[o] = t[o]
        }
        return n
    }
    function n(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
    }
    return function t(o) {
        function r() {}
        function i(n, t, i) {
            if ("undefined" != typeof document) {
                "number" == typeof (i = e({
                    path: "/"
                }, r.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)),
                i.expires = i.expires ? i.expires.toUTCString() : "";
                try {
                    var c = JSON.stringify(t);
                    /^[\{\[]/.test(c) && (t = c)
                } catch (e) {}
                t = o.write ? o.write(t, n) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                var f = "";
                for (var u in i)
                    i[u] && (f += "; " + u,
                    !0 !== i[u] && (f += "=" + i[u].split(";")[0]));
                return document.cookie = n + "=" + t + f
            }
        }
        function c(e, t) {
            if ("undefined" != typeof document) {
                for (var r = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0; c < i.length; c++) {
                    var f = i[c].split("=")
                      , u = f.slice(1).join("=");
                    t || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                    try {
                        var a = n(f[0]);
                        if (u = (o.read || o)(u, a) || n(u),
                        t)
                            try {
                                u = JSON.parse(u)
                            } catch (e) {}
                        if (r[a] = u,
                        e === a)
                            break
                    } catch (e) {}
                }
                return e ? r[e] : r
            }
        }
        return r.set = i,
        r.get = function(e) {
            return c(e, !1)
        }
        ,
        r.getJSON = function(e) {
            return c(e, !0)
        }
        ,
        r.remove = function(n, t) {
            i(n, "", e(t, {
                expires: -1
            }))
        }
        ,
        r.defaults = {},
        r.withConverter = t,
        r
    }(function() {})
});

"use strict";

var urlHost = window.location.hostname;
var googleTranslateConfig = {
    lang: 'ru',
    domain: urlHost
};
var translateGetCode = function translateGetCode() {
    // Если нет куки, передаем дефолтный язык
    var lang = Cookies.get('googtrans') != undefined && Cookies.get('googtrans') != 'null' ? Cookies.get('googtrans') : googleTranslateConfig.lang;
    return lang.match(/(?!^\/)[^\/]*$/gm)[0];
};
var translateCookieHandler = function translateCookieHandler(val, domain) {
    // Записываем куки в виде: /язык_который_переводим/язык_на_который_переводим
    Cookies.set('googtrans', val);
    Cookies.set('googtrans', val, {
        domain: '.' + document.domain
    });
    if (domain == 'undefined')
        return;
    // Записываем куки для домена, если он назначен в конфиге
    Cookies.set('googtrans', val, {
        domain: domain
    });
    Cookies.set('googtrans', val, {
        domain: '.' + domain
    });
};
var translateEventHandler = function translateEventHandler(event, selector, handler) {
    document.addEventListener(event, function(e) {
        var el = e.target.closest(selector);
        if (el)
            handler(el);
    });
};
var translateInit = function translateInit() {
    var code = translateGetCode();
    // Класс для выбранного элемента
    if (document.querySelector('[data-google-lang="' + code + '"]') !== null) {
        document.querySelector('[data-google-lang="' + code + '"]').classList.add('selected');
    }
    if (code == googleTranslateConfig.lang) {
        // Если язык совпадает, то очищаем куки
        translateCookieHandler(null, googleTranslateConfig.domain);
    }

    // Инициализируем виджет
    new google.translate.TranslateElement({
        pageLanguage: googleTranslateConfig.lang
    });

    // Вешаем событие на клик
    translateEventHandler('click', '[data-google-lang]', function(e) {
        Cookies.set('googtrans', "", {
            expires: -1
        });
        translateCookieHandler('/' + googleTranslateConfig.lang + '/' + e.getAttribute('data-google-lang'), googleTranslateConfig.domain);
        window.location.reload();
    });
};
;


/* Polyfill service v3.110.1
 * Disable minification (remove `.min` from URL path) for more info */
if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1) {
    (function(self, undefined) {
        var _DOMTokenList = function() {
            var n = !0
              , t = function(t, e, r, o) {
                Object.defineProperty ? Object.defineProperty(t, e, {
                    configurable: !1 === n || !!o,
                    get: r
                }) : t.__defineGetter__(e, r)
            };
            try {
                t({}, "support")
            } catch (e) {
                n = !1
            }
            return function(n, e) {
                var r = this
                  , o = []
                  , i = {}
                  , a = 0
                  , c = 0
                  , f = function(n) {
                    t(r, n, function() {
                        return u(),
                        o[n]
                    }, !1)
                }
                  , l = function() {
                    if (a >= c)
                        for (; c < a; ++c)
                            f(c)
                }
                  , u = function() {
                    var t, r, c = arguments, f = /\s+/;
                    if (c.length)
                        for (r = 0; r < c.length; ++r)
                            if (f.test(c[r]))
                                throw t = new SyntaxError('String "' + c[r] + '" contains an invalid character'),
                                t.code = 5,
                                t.name = "InvalidCharacterError",
                                t;
                    for (o = "object" == typeof n[e] ? ("" + n[e].baseVal).replace(/^\s+|\s+$/g, "").split(f) : ("" + n[e]).replace(/^\s+|\s+$/g, "").split(f),
                    "" === o[0] && (o = []),
                    i = {},
                    r = 0; r < o.length; ++r)
                        i[o[r]] = !0;
                    a = o.length,
                    l()
                };
                return u(),
                t(r, "length", function() {
                    return u(),
                    a
                }),
                r.toLocaleString = r.toString = function() {
                    return u(),
                    o.join(" ")
                }
                ,
                r.item = function(n) {
                    return u(),
                    o[n]
                }
                ,
                r.contains = function(n) {
                    return u(),
                    !!i[n]
                }
                ,
                r.add = function() {
                    u.apply(r, t = arguments);
                    for (var t, c, f = 0, p = t.length; f < p; ++f)
                        c = t[f],
                        i[c] || (o.push(c),
                        i[c] = !0);
                    a !== o.length && (a = o.length >>> 0,
                    "object" == typeof n[e] ? n[e].baseVal = o.join(" ") : n[e] = o.join(" "),
                    l())
                }
                ,
                r.remove = function() {
                    u.apply(r, t = arguments);
                    for (var t, c = {}, f = 0, p = []; f < t.length; ++f)
                        c[t[f]] = !0,
                        delete i[t[f]];
                    for (f = 0; f < o.length; ++f)
                        c[o[f]] || p.push(o[f]);
                    o = p,
                    a = p.length >>> 0,
                    "object" == typeof n[e] ? n[e].baseVal = o.join(" ") : n[e] = o.join(" "),
                    l()
                }
                ,
                r.toggle = function(n, t) {
                    return u.apply(r, [n]),
                    undefined !== t ? t ? (r.add(n),
                    !0) : (r.remove(n),
                    !1) : i[n] ? (r.remove(n),
                    !1) : (r.add(n),
                    !0)
                }
                ,
                r.forEach = Array.prototype.forEach,
                r
            }
        }();
        function ArrayCreate(r) {
            if (1 / r == -Infinity && (r = 0),
            r > Math.pow(2, 32) - 1)
                throw new RangeError("Invalid array length");
            var n = [];
            return n.length = r,
            n
        }
        function Call(t, l) {
            var n = arguments.length > 2 ? arguments[2] : [];
            if (!1 === IsCallable(t))
                throw new TypeError(Object.prototype.toString.call(t) + "is not a function.");
            return t.apply(l, n)
        }
        function CreateDataProperty(e, r, t) {
            var a = {
                value: t,
                writable: !0,
                enumerable: !0,
                configurable: !0
            };
            try {
                return Object.defineProperty(e, r, a),
                !0
            } catch (n) {
                return !1
            }
        }
        function CreateDataPropertyOrThrow(t, r, o) {
            var e = CreateDataProperty(t, r, o);
            if (!e)
                throw new TypeError("Cannot assign value `" + Object.prototype.toString.call(o) + "` to property `" + Object.prototype.toString.call(r) + "` on object `" + Object.prototype.toString.call(t) + "`");
            return e
        }
        function CreateMethodProperty(e, r, t) {
            var a = {
                value: t,
                writable: !0,
                enumerable: !1,
                configurable: !0
            };
            Object.defineProperty(e, r, a)
        }
        function Get(n, t) {
            return n[t]
        }
        function HasOwnProperty(r, t) {
            return Object.prototype.hasOwnProperty.call(r, t)
        }
        function IsCallable(n) {
            return "function" == typeof n
        }
        function RequireObjectCoercible(e) {
            if (null === e || e === undefined)
                throw TypeError(Object.prototype.toString.call(e) + " is not coercible to Object.");
            return e
        }
        function SameValueNonNumber(e, n) {
            return e === n
        }
        function ToBoolean(o) {
            return Boolean(o)
        }
        function ToObject(e) {
            if (null === e || e === undefined)
                throw TypeError();
            return Object(e)
        }
        function GetV(t, e) {
            return ToObject(t)[e]
        }
        function GetMethod(e, n) {
            var r = GetV(e, n);
            if (null === r || r === undefined)
                return undefined;
            if (!1 === IsCallable(r))
                throw new TypeError("Method not callable: " + n);
            return r
        }
        function Type(e) {
            switch (typeof e) {
            case "undefined":
                return "undefined";
            case "boolean":
                return "boolean";
            case "number":
                return "number";
            case "string":
                return "string";
            case "symbol":
                return "symbol";
            default:
                return null === e ? "null" : "Symbol"in self && (e instanceof self.Symbol || e.constructor === self.Symbol) ? "symbol" : "object"
            }
        }
        function CreateIterResultObject(e, r) {
            if ("boolean" !== Type(r))
                throw new Error;
            var t = {};
            return CreateDataProperty(t, "value", e),
            CreateDataProperty(t, "done", r),
            t
        }
        function GetPrototypeFromConstructor(t, o) {
            var r = Get(t, "prototype");
            return "object" !== Type(r) && (r = o),
            r
        }
        function OrdinaryCreateFromConstructor(r, e) {
            var t = arguments[2] || {}
              , o = GetPrototypeFromConstructor(r, e)
              , a = Object.create(o);
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && Object.defineProperty(a, n, {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: t[n]
                });
            return a
        }
        function IsConstructor(t) {
            return "object" === Type(t) && ("function" == typeof t && !!t.prototype)
        }
        function Construct(r) {
            var t = arguments.length > 2 ? arguments[2] : r
              , o = arguments.length > 1 ? arguments[1] : [];
            if (!IsConstructor(r))
                throw new TypeError("F must be a constructor.");
            if (!IsConstructor(t))
                throw new TypeError("newTarget must be a constructor.");
            if (t === r)
                return new (Function.prototype.bind.apply(r, [null].concat(o)));
            var n = OrdinaryCreateFromConstructor(t, Object.prototype);
            return Call(r, n, o)
        }
        function IsRegExp(e) {
            if ("object" !== Type(e))
                return !1;
            var n = "Symbol"in self && "match"in self.Symbol ? Get(e, self.Symbol.match) : undefined;
            if (n !== undefined)
                return ToBoolean(n);
            try {
                var t = e.lastIndex;
                return e.lastIndex = 0,
                RegExp.prototype.exec.call(e),
                !0
            } catch (l) {} finally {
                e.lastIndex = t
            }
            return !1
        }
        function IteratorClose(r, t) {
            if ("object" !== Type(r["[[Iterator]]"]))
                throw new Error(Object.prototype.toString.call(r["[[Iterator]]"]) + "is not an Object.");
            var e = r["[[Iterator]]"]
              , o = GetMethod(e, "return");
            if (o === undefined)
                return t;
            try {
                var n = Call(o, e)
            } catch (c) {
                var a = c
            }
            if (t)
                return t;
            if (a)
                throw a;
            if ("object" !== Type(n))
                throw new TypeError("Iterator's return method returned a non-object.");
            return t
        }
        function IteratorComplete(t) {
            if ("object" !== Type(t))
                throw new Error(Object.prototype.toString.call(t) + "is not an Object.");
            return ToBoolean(Get(t, "done"))
        }
        function IteratorNext(t) {
            if (arguments.length < 2)
                var e = Call(t["[[NextMethod]]"], t["[[Iterator]]"]);
            else
                e = Call(t["[[NextMethod]]"], t["[[Iterator]]"], [arguments[1]]);
            if ("object" !== Type(e))
                throw new TypeError("bad iterator");
            return e
        }
        function IteratorStep(t) {
            var r = IteratorNext(t);
            return !0 !== IteratorComplete(r) && r
        }
        function IteratorValue(t) {
            if ("object" !== Type(t))
                throw new Error(Object.prototype.toString.call(t) + "is not an Object.");
            return Get(t, "value")
        }
        function OrdinaryToPrimitive(r, t) {
            if ("string" === t)
                var e = ["toString", "valueOf"];
            else
                e = ["valueOf", "toString"];
            for (var i = 0; i < e.length; ++i) {
                var n = e[i]
                  , a = Get(r, n);
                if (IsCallable(a)) {
                    var o = Call(a, r);
                    if ("object" !== Type(o))
                        return o
                }
            }
            throw new TypeError("Cannot convert to primitive.")
        }
        function SameValueZero(n, e) {
            return Type(n) === Type(e) && ("number" === Type(n) ? !(!isNaN(n) || !isNaN(e)) || (1 / n === Infinity && 1 / e == -Infinity || (1 / n == -Infinity && 1 / e === Infinity || n === e)) : SameValueNonNumber(n, e))
        }
        function ToInteger(n) {
            if ("symbol" === Type(n))
                throw new TypeError("Cannot convert a Symbol value to a number");
            var t = Number(n);
            return isNaN(t) ? 0 : 1 / t === Infinity || 1 / t == -Infinity || t === Infinity || t === -Infinity ? t : (t < 0 ? -1 : 1) * Math.floor(Math.abs(t))
        }
        function ToLength(n) {
            var t = ToInteger(n);
            return t <= 0 ? 0 : Math.min(t, Math.pow(2, 53) - 1)
        }
        function ToPrimitive(e) {
            var t = arguments.length > 1 ? arguments[1] : undefined;
            if ("object" === Type(e)) {
                if (arguments.length < 2)
                    var i = "default";
                else
                    t === String ? i = "string" : t === Number && (i = "number");
                var r = "function" == typeof self.Symbol && "symbol" == typeof self.Symbol.toPrimitive ? GetMethod(e, self.Symbol.toPrimitive) : undefined;
                if (r !== undefined) {
                    var n = Call(r, e, [i]);
                    if ("object" !== Type(n))
                        return n;
                    throw new TypeError("Cannot convert exotic object to primitive.")
                }
                return "default" === i && (i = "number"),
                OrdinaryToPrimitive(e, i)
            }
            return e
        }
        function ToString(t) {
            switch (Type(t)) {
            case "symbol":
                throw new TypeError("Cannot convert a Symbol value to a string");
            case "object":
                return ToString(ToPrimitive(t, String));
            default:
                return String(t)
            }
        }
        function ToPropertyKey(r) {
            var i = ToPrimitive(r, String);
            return "symbol" === Type(i) ? i : ToString(i)
        }
        function TrimString(e, u) {
            var r = RequireObjectCoercible(e)
              , t = ToString(r)
              , n = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/.source;
            if ("start" === u)
                var p = String.prototype.replace.call(t, new RegExp("^" + n,"g"), "");
            else
                p = "end" === u ? String.prototype.replace.call(t, new RegExp(n + "$","g"), "") : String.prototype.replace.call(t, new RegExp("^" + n + "|" + n + "$","g"), "");
            return p
        }
        var _mutation = function() {
            function e(e) {
                return "function" == typeof Node ? e instanceof Node : e && "object" == typeof e && e.nodeName && e.nodeType >= 1 && e.nodeType <= 12
            }
            return function n(t) {
                if (1 === t.length)
                    return e(t[0]) ? t[0] : document.createTextNode(t[0] + "");
                for (var o = document.createDocumentFragment(), r = 0; r < t.length; r++)
                    o.appendChild(e(t[r]) ? t[r] : document.createTextNode(t[r] + ""));
                return o
            }
        }();
        CreateMethodProperty(Array, "of", function r() {
            var r = arguments.length
              , t = arguments
              , e = this;
            if (IsConstructor(e))
                var a = Construct(e, [r]);
            else
                a = ArrayCreate(r);
            for (var o = 0; o < r; ) {
                var n = t[o]
                  , h = ToString(o);
                CreateDataPropertyOrThrow(a, h, n),
                o += 1
            }
            return a.length = r,
            a
        });
        CreateMethodProperty(Array.prototype, "fill", function t(e) {
            for (var r = arguments[1], n = arguments[2], o = ToObject(this), a = ToLength(Get(o, "length")), h = ToInteger(r), i = h < 0 ? Math.max(a + h, 0) : Math.min(h, a), g = n === undefined ? a : ToInteger(n), M = g < 0 ? Math.max(a + g, 0) : Math.min(g, a); i < M; ) {
                o[ToString(i)] = e,
                i += 1
            }
            return o
        });
        CreateMethodProperty(Array.prototype, "includes", function e(r) {
            "use strict";
            var t = ToObject(this)
              , o = ToLength(Get(t, "length"));
            if (0 === o)
                return !1;
            var n = ToInteger(arguments[1]);
            if (n >= 0)
                var a = n;
            else
                (a = o + n) < 0 && (a = 0);
            for (; a < o; ) {
                var i = Get(t, ToString(a));
                if (SameValueZero(r, i))
                    return !0;
                a += 1
            }
            return !1
        });
        !function(t) {
            t.DocumentFragment = function n() {
                return document.createDocumentFragment()
            }
            ;
            var e = document.createDocumentFragment();
            t.DocumentFragment.prototype = Object.create(e.constructor.prototype)
        }(self);
        !function(t) {
            document.createDocumentFragment().constructor.prototype.append = function n() {
                this.appendChild(_mutation(arguments))
            }
            ,
            t.DocumentFragment.prototype.append = function e() {
                this.appendChild(_mutation(arguments))
            }
        }(self);
        !function(t) {
            document.createDocumentFragment().constructor.prototype.prepend = function e() {
                this.insertBefore(_mutation(arguments), this.firstChild)
            }
            ,
            t.DocumentFragment.prototype.prepend = function n() {
                this.insertBefore(_mutation(arguments), this.firstChild)
            }
        }(self);
        !function(t) {
            "DOMTokenList"in t && t.DOMTokenList && (!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg") || document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList) || (t.DOMTokenList = _DOMTokenList),
            function() {
                var t = document.createElement("span");
                "classList"in t && (t.classList.toggle("x", !1),
                t.classList.contains("x") && (t.classList.constructor.prototype.toggle = function s(t) {
                    var s = arguments[1];
                    if (s === undefined) {
                        var e = !this.contains(t);
                        return this[e ? "add" : "remove"](t),
                        e
                    }
                    return s = !!s,
                    this[s ? "add" : "remove"](t),
                    s
                }
                ))
            }(),
            function() {
                var t = document.createElement("span");
                if ("classList"in t && (t.classList.add("a", "b"),
                !t.classList.contains("b"))) {
                    var s = t.classList.constructor.prototype.add;
                    t.classList.constructor.prototype.add = function() {
                        for (var t = arguments, e = arguments.length, n = 0; n < e; n++)
                            s.call(this, t[n])
                    }
                }
            }(),
            function() {
                var t = document.createElement("span");
                if ("classList"in t && (t.classList.add("a"),
                t.classList.add("b"),
                t.classList.remove("a", "b"),
                t.classList.contains("b"))) {
                    var s = t.classList.constructor.prototype.remove;
                    t.classList.constructor.prototype.remove = function() {
                        for (var t = arguments, e = arguments.length, n = 0; n < e; n++)
                            s.call(this, t[n])
                    }
                }
            }()
        }(self);
        Document.prototype.after = Element.prototype.after = function t() {
            if (this.parentNode) {
                for (var t = Array.prototype.slice.call(arguments), e = this.nextSibling, o = e ? t.indexOf(e) : -1; -1 !== o && (e = e.nextSibling); )
                    o = t.indexOf(e);
                this.parentNode.insertBefore(_mutation(arguments), e)
            }
        }
        ,
        "Text"in self && (Text.prototype.after = Element.prototype.after);
        Document.prototype.append = Element.prototype.append = function p() {
            this.appendChild(_mutation(arguments))
        }
        ;
        Document.prototype.before = Element.prototype.before = function e() {
            if (this.parentNode) {
                for (var e = Array.prototype.slice.call(arguments), t = this.previousSibling, o = t ? e.indexOf(t) : -1; -1 !== o && (t = t.previousSibling); )
                    o = e.indexOf(t);
                this.parentNode.insertBefore(_mutation(arguments), t ? t.nextSibling : this.parentNode.firstChild)
            }
        }
        ,
        "Text"in self && (Text.prototype.before = Element.prototype.before);
        !function(e) {
            var t = !0
              , r = function(e, r, n, i) {
                Object.defineProperty ? Object.defineProperty(e, r, {
                    configurable: !1 === t || !!i,
                    get: n
                }) : e.__defineGetter__(r, n)
            };
            try {
                r({}, "support")
            } catch (i) {
                t = !1
            }
            var n = function(e, i, l) {
                r(e.prototype, i, function() {
                    var e, c = this, s = "__defineGetter__DEFINE_PROPERTY" + i;
                    if (c[s])
                        return e;
                    if (c[s] = !0,
                    !1 === t) {
                        for (var o, a = n.mirror || document.createElement("div"), f = a.childNodes, d = f.length, m = 0; m < d; ++m)
                            if (f[m]._R === c) {
                                o = f[m];
                                break
                            }
                        o || (o = a.appendChild(document.createElement("div"))),
                        e = DOMTokenList.call(o, c, l)
                    } else
                        e = new _DOMTokenList(c,l);
                    return r(c, i, function() {
                        return e
                    }),
                    delete c[s],
                    e
                }, !0)
            };
            n(e.Element, "classList", "className"),
            n(e.HTMLElement, "classList", "className"),
            n(e.HTMLLinkElement, "relList", "rel"),
            n(e.HTMLAnchorElement, "relList", "rel"),
            n(e.HTMLAreaElement, "relList", "rel")
        }(self);
        Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function e(t) {
            for (var o = this, r = (o.document || o.ownerDocument).querySelectorAll(t), c = 0; r[c] && r[c] !== o; )
                ++c;
            return !!r[c]
        }
        ;
        Element.prototype.closest = function e(n) {
            for (var t = this; t; ) {
                if (t.matches(n))
                    return t;
                t = "SVGElement"in window && t instanceof SVGElement ? t.parentNode : t.parentElement
            }
            return null
        }
        ;
        Document.prototype.prepend = Element.prototype.prepend = function t() {
            this.insertBefore(_mutation(arguments), this.firstChild)
        }
        ;
        Document.prototype.remove = Element.prototype.remove = function e() {
            this.parentNode && this.parentNode.removeChild(this)
        }
        ,
        "Text"in self && (Text.prototype.remove = Element.prototype.remove);
        Document.prototype.replaceWith = Element.prototype.replaceWith = function e() {
            this.parentNode && this.parentNode.replaceChild(_mutation(arguments), this)
        }
        ,
        "Text"in self && (Text.prototype.replaceWith = Element.prototype.replaceWith);
        !function() {
            function e(e, t) {
                if (!e)
                    throw new Error("Not enough arguments");
                var n;
                if ("createEvent"in document) {
                    n = document.createEvent("Event");
                    var o = !(!t || t.bubbles === undefined) && t.bubbles
                      , i = !(!t || t.cancelable === undefined) && t.cancelable;
                    return n.initEvent(e, o, i),
                    n
                }
                return n = document.createEventObject(),
                n.type = e,
                n.bubbles = !(!t || t.bubbles === undefined) && t.bubbles,
                n.cancelable = !(!t || t.cancelable === undefined) && t.cancelable,
                n
            }
            var t = {
                click: 1,
                dblclick: 1,
                keyup: 1,
                keypress: 1,
                keydown: 1,
                mousedown: 1,
                mouseup: 1,
                mousemove: 1,
                mouseover: 1,
                mouseenter: 1,
                mouseleave: 1,
                mouseout: 1,
                storage: 1,
                storagecommit: 1,
                textinput: 1
            };
            if ("undefined" != typeof document && "undefined" != typeof window) {
                var n = window.Event && window.Event.prototype || null;
                e.NONE = 0,
                e.CAPTURING_PHASE = 1,
                e.AT_TARGET = 2,
                e.BUBBLING_PHASE = 3,
                window.Event = Window.prototype.Event = e,
                n && Object.defineProperty(window.Event, "prototype", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !0,
                    value: n
                }),
                "createEvent"in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function o() {
                    var e = this
                      , n = arguments[0]
                      , o = arguments[1];
                    if (e === window && n in t)
                        throw new Error("In IE8 the event: " + n + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
                    e._events || (e._events = {}),
                    e._events[n] || (e._events[n] = function(t) {
                        var n, o = e._events[t.type].list, i = o.slice(), r = -1, c = i.length;
                        for (t.preventDefault = function a() {
                            !1 !== t.cancelable && (t.returnValue = !1)
                        }
                        ,
                        t.stopPropagation = function l() {
                            t.cancelBubble = !0
                        }
                        ,
                        t.stopImmediatePropagation = function s() {
                            t.cancelBubble = !0,
                            t.cancelImmediate = !0
                        }
                        ,
                        t.currentTarget = e,
                        t.relatedTarget = t.fromElement || null,
                        t.target = t.target || t.srcElement || e,
                        t.timeStamp = (new Date).getTime(),
                        t.clientX && (t.pageX = t.clientX + document.documentElement.scrollLeft,
                        t.pageY = t.clientY + document.documentElement.scrollTop); ++r < c && !t.cancelImmediate; )
                            r in i && (n = i[r],
                            o.includes(n) && "function" == typeof n && n.call(e, t))
                    }
                    ,
                    e._events[n].list = [],
                    e.attachEvent && e.attachEvent("on" + n, e._events[n])),
                    e._events[n].list.push(o)
                }
                ,
                window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function i() {
                    var e, t = this, n = arguments[0], o = arguments[1];
                    t._events && t._events[n] && t._events[n].list && -1 !== (e = t._events[n].list.indexOf(o)) && (t._events[n].list.splice(e, 1),
                    t._events[n].list.length || (t.detachEvent && t.detachEvent("on" + n, t._events[n]),
                    delete t._events[n]))
                }
                ,
                window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function r(e) {
                    if (!arguments.length)
                        throw new Error("Not enough arguments");
                    if (!e || "string" != typeof e.type)
                        throw new Error("DOM Events Exception 0");
                    var t = this
                      , n = e.type;
                    try {
                        if (!e.bubbles) {
                            e.cancelBubble = !0;
                            var o = function(e) {
                                e.cancelBubble = !0,
                                (t || window).detachEvent("on" + n, o)
                            };
                            this.attachEvent("on" + n, o)
                        }
                        this.fireEvent("on" + n, e)
                    } catch (i) {
                        e.target = t;
                        do {
                            e.currentTarget = t,
                            "_events"in t && "function" == typeof t._events[n] && t._events[n].call(t, e),
                            "function" == typeof t["on" + n] && t["on" + n].call(t, e),
                            t = 9 === t.nodeType ? t.parentWindow : t.parentNode
                        } while (t && !e.cancelBubble)
                    }
                    return !0
                }
                ,
                document.attachEvent("onreadystatechange", function() {
                    "complete" === document.readyState && document.dispatchEvent(new e("DOMContentLoaded",{
                        bubbles: !0
                    }))
                }))
            }
        }();
        self.CustomEvent = function e(t, n) {
            if (!t)
                throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');
            var l;
            if (n = n || {
                bubbles: !1,
                cancelable: !1,
                detail: null
            },
            "createEvent"in document)
                try {
                    l = document.createEvent("CustomEvent"),
                    l.initCustomEvent(t, n.bubbles, n.cancelable, n.detail)
                } catch (a) {
                    l = document.createEvent("Event"),
                    l.initEvent(t, n.bubbles, n.cancelable),
                    l.detail = n.detail
                }
            else
                l = new Event(t,n),
                l.detail = n && n.detail || null;
            return l
        }
        ,
        CustomEvent.prototype = Event.prototype;
        !function() {
            function e(e) {
                if (!(0 in arguments))
                    throw new TypeError("1 argument is required");
                do {
                    if (this === e)
                        return !0
                } while (e = e && e.parentNode);
                return !1
            }
            if ("HTMLElement"in self && "contains"in HTMLElement.prototype)
                try {
                    delete HTMLElement.prototype.contains
                } catch (t) {}
            "Node"in self ? Node.prototype.contains = e : document.contains = Element.prototype.contains = e
        }();
        NodeList.prototype.forEach = Array.prototype.forEach;
        !function() {
            var e = self;
            CreateMethodProperty(Number, "isNaN", function r(n) {
                return "number" === Type(n) && !!e.isNaN(n)
            })
        }();
        !function() {
            var e = Object.getOwnPropertyDescriptor
              , t = function() {
                try {
                    return 1 === Object.defineProperty(document.createElement("div"), "one", {
                        get: function() {
                            return 1
                        }
                    }).one
                } catch (e) {
                    return !1
                }
            }
              , r = {}.toString
              , n = "".split;
            CreateMethodProperty(Object, "getOwnPropertyDescriptor", function c(o, i) {
                var a = ToObject(o);
                a = ("string" === Type(a) || a instanceof String) && "[object String]" == r.call(o) ? n.call(o, "") : Object(o);
                var u = ToPropertyKey(i);
                if (t)
                    try {
                        return e(a, u)
                    } catch (l) {}
                if (HasOwnProperty(a, u))
                    return {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: a[u]
                    }
            })
        }();
        !function(e) {
            CreateMethodProperty(Object, "isExtensible", function t(n) {
                return "object" === Type(n) && (!e || e(n))
            })
        }(Object.isExtensible);
        CreateMethodProperty(Object, "keys", function() {
            "use strict";
            function t() {
                var t;
                try {
                    t = Object.create({})
                } catch (r) {
                    return !0
                }
                return o.call(t, "__proto__")
            }
            function r(t) {
                var r = n.call(t)
                  , e = "[object Arguments]" === r;
                return e || (e = "[object Array]" !== r && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === n.call(t.callee)),
                e
            }
            var e = Object.prototype.hasOwnProperty
              , n = Object.prototype.toString
              , o = Object.prototype.propertyIsEnumerable
              , c = !o.call({
                toString: null
            }, "toString")
              , l = o.call(function() {}, "prototype")
              , i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
              , u = function(t) {
                var r = t.constructor;
                return r && r.prototype === t
            }
              , a = {
                $console: !0,
                $external: !0,
                $frame: !0,
                $frameElement: !0,
                $frames: !0,
                $innerHeight: !0,
                $innerWidth: !0,
                $outerHeight: !0,
                $outerWidth: !0,
                $pageXOffset: !0,
                $pageYOffset: !0,
                $parent: !0,
                $scrollLeft: !0,
                $scrollTop: !0,
                $scrollX: !0,
                $scrollY: !0,
                $self: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $window: !0
            }
              , f = function() {
                if ("undefined" == typeof window)
                    return !1;
                for (var t in window)
                    try {
                        if (!a["$" + t] && e.call(window, t) && null !== window[t] && "object" == typeof window[t])
                            try {
                                u(window[t])
                            } catch (r) {
                                return !0
                            }
                    } catch (r) {
                        return !0
                    }
                return !1
            }()
              , p = function(t) {
                if ("undefined" == typeof window || !f)
                    return u(t);
                try {
                    return u(t)
                } catch (r) {
                    return !1
                }
            };
            return function s(o) {
                var u = "[object Function]" === n.call(o)
                  , a = r(o)
                  , f = "[object String]" === n.call(o)
                  , s = [];
                if (o === undefined || null === o)
                    throw new TypeError("Cannot convert undefined or null to object");
                var y = l && u;
                if (f && o.length > 0 && !e.call(o, 0))
                    for (var h = 0; h < o.length; ++h)
                        s.push(String(h));
                if (a && o.length > 0)
                    for (var g = 0; g < o.length; ++g)
                        s.push(String(g));
                else
                    for (var w in o)
                        t() && "__proto__" === w || y && "prototype" === w || !e.call(o, w) || s.push(String(w));
                if (c)
                    for (var d = p(o), $ = 0; $ < i.length; ++$)
                        d && "constructor" === i[$] || !e.call(o, i[$]) || s.push(i[$]);
                return s
            }
        }());
        function EnumerableOwnProperties(e, r) {
            for (var t = Object.keys(e), n = [], s = t.length, a = 0; a < s; a++) {
                var i = t[a];
                if ("string" === Type(i)) {
                    var u = Object.getOwnPropertyDescriptor(e, i);
                    if (u && u.enumerable)
                        if ("key" === r)
                            n.push(i);
                        else {
                            var p = Get(e, i);
                            if ("value" === r)
                                n.push(p);
                            else {
                                var f = [i, p];
                                n.push(f)
                            }
                        }
                }
            }
            return n
        }
        !function() {
            var e = {}.toString
              , t = "".split;
            CreateMethodProperty(Object, "entries", function r(n) {
                var i = ToObject(n);
                return i = ("string" === Type(i) || i instanceof String) && "[object String]" == e.call(n) ? t.call(n, "") : Object(n),
                EnumerableOwnProperties(i, "key+value")
            })
        }();
        CreateMethodProperty(Object, "assign", function e(t, r) {
            var n = ToObject(t);
            if (1 === arguments.length)
                return n;
            var o, c, a, l, i = Array.prototype.slice.call(arguments, 1);
            for (o = 0; o < i.length; o++) {
                var p = i[o];
                for (p === undefined || null === p ? a = [] : (l = "[object String]" === Object.prototype.toString.call(p) ? String(p).split("") : ToObject(p),
                a = Object.keys(l)),
                c = 0; c < a.length; c++) {
                    var b, y = a[c];
                    try {
                        var g = Object.getOwnPropertyDescriptor(l, y);
                        b = g !== undefined && !0 === g.enumerable
                    } catch (u) {
                        b = Object.prototype.propertyIsEnumerable.call(l, y)
                    }
                    if (b) {
                        var j = Get(l, y);
                        n[y] = j
                    }
                }
            }
            return n
        });
        !function() {
            var t = {}.toString
              , e = "".split
              , r = [].concat
              , o = Object.prototype.hasOwnProperty
              , c = Object.getOwnPropertyNames || Object.keys
              , n = "object" == typeof self ? c(self) : [];
            CreateMethodProperty(Object, "getOwnPropertyNames", function l(a) {
                var p = ToObject(a);
                if ("[object Window]" === t.call(p))
                    try {
                        return c(p)
                    } catch (j) {
                        return r.call([], n)
                    }
                p = "[object String]" == t.call(p) ? e.call(p, "") : Object(p);
                for (var i = c(p), s = ["length", "prototype"], O = 0; O < s.length; O++) {
                    var b = s[O];
                    o.call(p, b) && !i.includes(b) && i.push(b)
                }
                if (i.includes("__proto__")) {
                    var f = i.indexOf("__proto__");
                    i.splice(f, 1)
                }
                return i
            })
        }();
        !function() {
            if (!Object.setPrototypeOf) {
                var t, e, o = Object.getOwnPropertyNames, r = Object.getOwnPropertyDescriptor, n = Object.create, c = Object.defineProperty, _ = Object.getPrototypeOf, f = Object.prototype, p = function(t, e) {
                    return o(e).forEach(function(o) {
                        c(t, o, r(e, o))
                    }),
                    t
                }, O = function i(t, e) {
                    return p(n(e), t)
                };
                try {
                    t = r(f, "__proto__").set,
                    t.call({}, null),
                    e = function a(e, o) {
                        return t.call(e, o),
                        e
                    }
                } catch (u) {
                    t = {
                        __proto__: null
                    },
                    t instanceof Object ? e = O : (t.__proto__ = f,
                    e = t instanceof Object ? function o(t, e) {
                        return t.__proto__ = e,
                        t
                    }
                    : function r(t, e) {
                        return _(t) ? (t.__proto__ = e,
                        t) : O(t, e)
                    }
                    )
                }
                CreateMethodProperty(Object, "setPrototypeOf", e)
            }
        }();
        !function() {
            var t = {}.toString
              , e = "".split;
            CreateMethodProperty(Object, "values", function r(n) {
                var c = "[object String]" == t.call(n) ? e.call(n, "") : ToObject(n);
                return Object.keys(c).map(function(t) {
                    return c[t]
                })
            })
        }();
        CreateMethodProperty(String.prototype, "endsWith", function e(t) {
            "use strict";
            var r = arguments.length > 1 ? arguments[1] : undefined
              , n = RequireObjectCoercible(this)
              , i = ToString(n);
            if (IsRegExp(t))
                throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
            var o = ToString(t)
              , s = i.length
              , g = r === undefined ? s : ToInteger(r)
              , h = Math.min(Math.max(g, 0), s)
              , u = o.length
              , a = h - u;
            return !(a < 0) && i.substr(a, u) === o
        });
        CreateMethodProperty(String.prototype, "includes", function e(t) {
            "use strict";
            var r = arguments.length > 1 ? arguments[1] : undefined
              , n = RequireObjectCoercible(this)
              , i = ToString(n);
            if (IsRegExp(t))
                throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
            var o = ToString(t)
              , g = ToInteger(r)
              , a = i.length
              , p = Math.min(Math.max(g, 0), a);
            return -1 !== String.prototype.indexOf.call(i, o, p)
        });
        CreateMethodProperty(String.prototype, "startsWith", function t(e) {
            "use strict";
            var r = arguments.length > 1 ? arguments[1] : undefined
              , n = RequireObjectCoercible(this)
              , i = ToString(n);
            if (IsRegExp(e))
                throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
            var o = ToString(e)
              , s = ToInteger(r)
              , a = i.length
              , g = Math.min(Math.max(s, 0), a);
            return !(o.length + g > a) && 0 === i.substr(g).indexOf(e)
        });
        CreateMethodProperty(String.prototype, "trim", function t() {
            "use strict";
            var t = this;
            return TrimString(t, "start+end")
        });
        !function(e, r, n) {
            "use strict";
            function t(e) {
                if ("symbol" === Type(e))
                    return e;
                throw TypeError(e + " is not a symbol")
            }
            var u, o = function() {
                try {
                    var r = {};
                    return e.defineProperty(r, "t", {
                        configurable: !0,
                        enumerable: !1,
                        get: function() {
                            return !0
                        },
                        set: undefined
                    }),
                    !!r.t
                } catch (n) {
                    return !1
                }
            }(), i = 0, a = "" + Math.random(), c = "__symbol:", l = c.length, f = "__symbol@@" + a, s = {}, v = "defineProperty", y = "defineProperties", b = "getOwnPropertyNames", p = "getOwnPropertyDescriptor", h = "propertyIsEnumerable", m = e.prototype, d = m.hasOwnProperty, g = m[h], w = m.toString, S = Array.prototype.concat, P = e.getOwnPropertyNames ? e.getOwnPropertyNames(self) : [], O = e[b], j = function $(e) {
                if ("[object Window]" === w.call(e))
                    try {
                        return O(e)
                    } catch (r) {
                        return S.call([], P)
                    }
                return O(e)
            }, E = e[p], N = e.create, T = e.keys, _ = e.freeze || e, k = e[v], F = e[y], I = E(e, b), x = function(e, r, n) {
                if (!d.call(e, f))
                    try {
                        k(e, f, {
                            enumerable: !1,
                            configurable: !1,
                            writable: !1,
                            value: {}
                        })
                    } catch (t) {
                        e[f] = {}
                    }
                e[f]["@@" + r] = n
            }, z = function(e, r) {
                var n = N(e);
                return j(r).forEach(function(e) {
                    q.call(r, e) && L(n, e, r[e])
                }),
                n
            }, A = function(e) {
                var r = N(e);
                return r.enumerable = !1,
                r
            }, D = function ee() {}, M = function(e) {
                return e != f && !d.call(H, e)
            }, W = function(e) {
                return e != f && d.call(H, e)
            }, q = function re(e) {
                var r = "" + e;
                return W(r) ? d.call(this, r) && this[f] && this[f]["@@" + r] : g.call(this, e)
            }, B = function(r) {
                var n = {
                    enumerable: !1,
                    configurable: !0,
                    get: D,
                    set: function(e) {
                        u(this, r, {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: e
                        }),
                        x(this, r, !0)
                    }
                };
                try {
                    k(m, r, n)
                } catch (o) {
                    m[r] = n.value
                }
                H[r] = k(e(r), "constructor", J);
                var t = E(G.prototype, "description");
                return t && k(H[r], "description", t),
                _(H[r])
            }, C = function(e) {
                var r = t(e);
                if (Y) {
                    var n = V(r);
                    if ("" !== n)
                        return n.slice(1, -1)
                }
                if (s[r] !== undefined)
                    return s[r];
                var u = r.toString()
                  , o = u.lastIndexOf("0.");
                return u = u.slice(10, o),
                "" === u ? undefined : u
            }, G = function ne() {
                var r = arguments[0];
                if (this instanceof ne)
                    throw new TypeError("Symbol is not a constructor");
                var n = c.concat(r || "", a, ++i);
                r === undefined || null !== r && !isNaN(r) && "" !== String(r) || (s[n] = String(r));
                var t = B(n);
                return o || e.defineProperty(t, "description", {
                    configurable: !0,
                    enumerable: !1,
                    value: C(t)
                }),
                t
            }, H = N(null), J = {
                value: G
            }, K = function(e) {
                return H[e]
            }, L = function te(e, r, n) {
                var t = "" + r;
                return W(t) ? (u(e, t, n.enumerable ? A(n) : n),
                x(e, t, !!n.enumerable)) : k(e, r, n),
                e
            }, Q = function(e) {
                return function(r) {
                    return d.call(e, f) && d.call(e[f], "@@" + r)
                }
            }, R = function ue(e) {
                return j(e).filter(e === m ? Q(e) : W).map(K)
            };
            I.value = L,
            k(e, v, I),
            I.value = R,
            k(e, "getOwnPropertySymbols", I),
            I.value = function oe(e) {
                return j(e).filter(M)
            }
            ,
            k(e, b, I),
            I.value = function ie(e, r) {
                var n = R(r);
                return n.length ? T(r).concat(n).forEach(function(n) {
                    q.call(r, n) && L(e, n, r[n])
                }) : F(e, r),
                e
            }
            ,
            k(e, y, I),
            I.value = q,
            k(m, h, I),
            I.value = G,
            k(n, "Symbol", I),
            I.value = function(e) {
                var r = c.concat(c, e, a);
                return r in m ? H[r] : B(r)
            }
            ,
            k(G, "for", I),
            I.value = function(e) {
                if (M(e))
                    throw new TypeError(e + " is not a symbol");
                return d.call(H, e) ? e.slice(2 * l, -a.length) : void 0
            }
            ,
            k(G, "keyFor", I),
            I.value = function ae(e, r) {
                var n = E(e, r);
                return n && W(r) && (n.enumerable = q.call(e, r)),
                n
            }
            ,
            k(e, p, I),
            I.value = function ce(e, r) {
                return 1 === arguments.length || void 0 === r ? N(e) : z(e, r)
            }
            ,
            k(e, "create", I);
            var U = null === function() {
                return this
            }
            .call(null);
            if (I.value = U ? function() {
                var e = w.call(this);
                return "[object String]" === e && W(this) ? "[object Symbol]" : e
            }
            : function() {
                if (this === window)
                    return "[object Null]";
                var e = w.call(this);
                return "[object String]" === e && W(this) ? "[object Symbol]" : e
            }
            ,
            k(m, "toString", I),
            u = function(e, r, n) {
                var t = E(m, r);
                delete m[r],
                k(e, r, n),
                e !== m && k(m, r, t)
            }
            ,
            function() {
                try {
                    var r = {};
                    return e.defineProperty(r, "t", {
                        configurable: !0,
                        enumerable: !1,
                        get: function() {
                            return !0
                        },
                        set: undefined
                    }),
                    !!r.t
                } catch (n) {
                    return !1
                }
            }()) {
                var V;
                try {
                    V = Function("s", "var v = s.valueOf(); return { [v]() {} }[v].name;")
                } catch (Z) {}
                var X = function() {}
                  , Y = V && "inferred" === X.name ? V : null;
                e.defineProperty(n.Symbol.prototype, "description", {
                    configurable: !0,
                    enumerable: !1,
                    get: function() {
                        return C(this)
                    }
                })
            }
        }(Object, 0, self);
        Object.defineProperty(self.Symbol, "iterator", {
            value: self.Symbol("iterator")
        });
        function GetIterator(t) {
            var e = arguments.length > 1 ? arguments[1] : GetMethod(t, Symbol.iterator)
              , r = Call(e, t);
            if ("object" !== Type(r))
                throw new TypeError("bad iterator");
            var o = GetV(r, "next")
              , a = Object.create(null);
            return a["[[Iterator]]"] = r,
            a["[[NextMethod]]"] = o,
            a["[[Done]]"] = !1,
            a
        }
        Object.defineProperty(Symbol, "species", {
            value: Symbol("species")
        });
        !function(e) {
            function t(e, t) {
                if ("object" !== Type(e))
                    throw new TypeError("createMapIterator called on incompatible receiver " + Object.prototype.toString.call(e));
                if (!0 !== e._es6Map)
                    throw new TypeError("createMapIterator called on incompatible receiver " + Object.prototype.toString.call(e));
                var r = Object.create(u);
                return Object.defineProperty(r, "[[Map]]", {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: e
                }),
                Object.defineProperty(r, "[[MapNextIndex]]", {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(r, "[[MapIterationKind]]", {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: t
                }),
                r
            }
            var r = function() {
                try {
                    var e = {};
                    return Object.defineProperty(e, "t", {
                        configurable: !0,
                        enumerable: !1,
                        get: function() {
                            return !0
                        },
                        set: undefined
                    }),
                    !!e.t
                } catch (t) {
                    return !1
                }
            }()
              , o = 0
              , a = Symbol("meta_" + (1e8 * Math.random() + "").replace(".", ""))
              , n = function(e) {
                if ("object" == typeof e ? null !== e : "function" == typeof e) {
                    if (!Object.isExtensible(e))
                        return !1;
                    if (!Object.prototype.hasOwnProperty.call(e, a)) {
                        var t = typeof e + "-" + ++o;
                        Object.defineProperty(e, a, {
                            configurable: !1,
                            enumerable: !1,
                            writable: !1,
                            value: t
                        })
                    }
                    return e[a]
                }
                return "" + e
            }
              , i = function(e, t) {
                var r = n(t);
                if (!1 === r)
                    return p(e, t);
                var o = e._table[r];
                return o !== undefined && o
            }
              , p = function(e, t) {
                for (var r = 0; r < e._keys.length; r++) {
                    var o = e._keys[r];
                    if (o !== c && SameValueZero(o, t))
                        return r
                }
                return !1
            }
              , l = function(e, t, r) {
                var o = n(t);
                return !1 !== o && (!1 === r ? delete e._table[o] : e._table[o] = r,
                !0)
            }
              , c = Symbol("undef")
              , y = function f() {
                if (!(this instanceof f))
                    throw new TypeError('Constructor Map requires "new"');
                var e = OrdinaryCreateFromConstructor(this, f.prototype, {
                    _table: {},
                    _keys: [],
                    _values: [],
                    _size: 0,
                    _es6Map: !0
                });
                r || Object.defineProperty(e, "size", {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: 0
                });
                var t = arguments.length > 0 ? arguments[0] : undefined;
                if (null === t || t === undefined)
                    return e;
                var o = e.set;
                if (!IsCallable(o))
                    throw new TypeError("Map.prototype.set is not a function");
                try {
                    for (var a = GetIterator(t); ; ) {
                        var n = IteratorStep(a);
                        if (!1 === n)
                            return e;
                        var i = IteratorValue(n);
                        if ("object" !== Type(i))
                            try {
                                throw new TypeError("Iterator value " + i + " is not an entry object")
                            } catch (u) {
                                return IteratorClose(a, u)
                            }
                        try {
                            var p = i[0]
                              , l = i[1];
                            o.call(e, p, l)
                        } catch (s) {
                            return IteratorClose(a, s)
                        }
                    }
                } catch (s) {
                    if (Array.isArray(t) || "[object Arguments]" === Object.prototype.toString.call(t) || t.callee) {
                        var c, y = t.length;
                        for (c = 0; c < y; c++)
                            o.call(e, t[c][0], t[c][1])
                    }
                }
                return e
            };
            Object.defineProperty(y, "prototype", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: {}
            }),
            r ? Object.defineProperty(y, Symbol.species, {
                configurable: !0,
                enumerable: !1,
                get: function() {
                    return this
                },
                set: undefined
            }) : CreateMethodProperty(y, Symbol.species, y),
            CreateMethodProperty(y.prototype, "clear", function b() {
                var e = this;
                if ("object" !== Type(e))
                    throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
                if (!0 !== e._es6Map)
                    throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
                for (var t = e._keys, o = 0; o < t.length; o++)
                    e._keys[o] = c,
                    e._values[o] = c;
                return this._size = 0,
                r || (this.size = this._size),
                this._table = {},
                undefined
            }),
            CreateMethodProperty(y.prototype, "constructor", y),
            CreateMethodProperty(y.prototype, "delete", function(e) {
                var t = this;
                if ("object" !== Type(t))
                    throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(t));
                if (!0 !== t._es6Map)
                    throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(t));
                var o = i(t, e);
                if (!1 !== o) {
                    var a = t._keys[o];
                    if (a !== c && SameValueZero(a, e))
                        return this._keys[o] = c,
                        this._values[o] = c,
                        this._size = --this._size,
                        r || (this.size = this._size),
                        l(this, e, !1),
                        !0
                }
                return !1
            }),
            CreateMethodProperty(y.prototype, "entries", function h() {
                return t(this, "key+value")
            }),
            CreateMethodProperty(y.prototype, "forEach", function(e) {
                var t = this;
                if ("object" !== Type(t))
                    throw new TypeError("Method Map.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
                if (!0 !== t._es6Map)
                    throw new TypeError("Method Map.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
                if (!IsCallable(e))
                    throw new TypeError(Object.prototype.toString.call(e) + " is not a function.");
                if (arguments[1])
                    var r = arguments[1];
                for (var o = t._keys, a = 0; a < o.length; a++)
                    t._keys[a] !== c && t._values[a] !== c && e.call(r, t._values[a], t._keys[a], t);
                return undefined
            }),
            CreateMethodProperty(y.prototype, "get", function d(e) {
                var t = this;
                if ("object" !== Type(t))
                    throw new TypeError("Method Map.prototype.get called on incompatible receiver " + Object.prototype.toString.call(t));
                if (!0 !== t._es6Map)
                    throw new TypeError("Method Map.prototype.get called on incompatible receiver " + Object.prototype.toString.call(t));
                var r = i(t, e);
                if (!1 !== r) {
                    var o = t._keys[r];
                    if (o !== c && SameValueZero(o, e))
                        return t._values[r]
                }
                return undefined
            }),
            CreateMethodProperty(y.prototype, "has", function v(e) {
                var t = this;
                if ("object" != typeof t)
                    throw new TypeError("Method Map.prototype.has called on incompatible receiver " + Object.prototype.toString.call(t));
                if (!0 !== t._es6Map)
                    throw new TypeError("Method Map.prototype.has called on incompatible receiver " + Object.prototype.toString.call(t));
                var r = i(t, e);
                if (!1 !== r) {
                    var o = t._keys[r];
                    if (o !== c && SameValueZero(o, e))
                        return !0
                }
                return !1
            }),
            CreateMethodProperty(y.prototype, "keys", function M() {
                return t(this, "key")
            }),
            CreateMethodProperty(y.prototype, "set", function w(e, t) {
                var o = this;
                if ("object" !== Type(o))
                    throw new TypeError("Method Map.prototype.set called on incompatible receiver " + Object.prototype.toString.call(o));
                if (!0 !== o._es6Map)
                    throw new TypeError("Method Map.prototype.set called on incompatible receiver " + Object.prototype.toString.call(o));
                var a = i(o, e);
                if (!1 !== a)
                    o._values[a] = t;
                else {
                    -0 === e && (e = 0);
                    var n = {
                        "[[Key]]": e,
                        "[[Value]]": t
                    };
                    o._keys.push(n["[[Key]]"]),
                    o._values.push(n["[[Value]]"]),
                    l(o, e, o._keys.length - 1),
                    ++o._size,
                    r || (o.size = o._size)
                }
                return o
            }),
            r && Object.defineProperty(y.prototype, "size", {
                configurable: !0,
                enumerable: !1,
                get: function() {
                    var e = this;
                    if ("object" !== Type(e))
                        throw new TypeError("Method Map.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
                    if (!0 !== e._es6Map)
                        throw new TypeError("Method Map.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
                    return this._size
                },
                set: undefined
            }),
            CreateMethodProperty(y.prototype, "values", function j() {
                return t(this, "value")
            }),
            CreateMethodProperty(y.prototype, Symbol.iterator, y.prototype.entries),
            "name"in y || Object.defineProperty(y, "name", {
                configurable: !0,
                enumerable: !1,
                writable: !1,
                value: "Map"
            });
            var u = {};
            Object.defineProperty(u, "isMapIterator", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: !0
            }),
            CreateMethodProperty(u, "next", function _() {
                var e = this;
                if ("object" !== Type(e))
                    throw new TypeError("Method %MapIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
                if (!e.isMapIterator)
                    throw new TypeError("Method %MapIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
                var t = e["[[Map]]"]
                  , r = e["[[MapNextIndex]]"]
                  , o = e["[[MapIterationKind]]"];
                if (t === undefined)
                    return CreateIterResultObject(undefined, !0);
                if (!t._es6Map)
                    throw new Error(Object.prototype.toString.call(t) + " has a [[MapData]] internal slot.");
                for (var a = t._keys, n = a.length; r < n; ) {
                    var i = Object.create(null);
                    if (i["[[Key]]"] = t._keys[r],
                    i["[[Value]]"] = t._values[r],
                    r += 1,
                    e["[[MapNextIndex]]"] = r,
                    i["[[Key]]"] !== c) {
                        if ("key" === o)
                            var p = i["[[Key]]"];
                        else if ("value" === o)
                            p = i["[[Value]]"];
                        else {
                            if ("key+value" !== o)
                                throw new Error;
                            p = [i["[[Key]]"], i["[[Value]]"]]
                        }
                        return CreateIterResultObject(p, !1)
                    }
                }
                return e["[[Map]]"] = undefined,
                CreateIterResultObject(undefined, !0)
            }),
            CreateMethodProperty(u, Symbol.iterator, function g() {
                return this
            });
            try {
                CreateMethodProperty(e, "Map", y)
            } catch (s) {
                e.Map = y
            }
        }(self);
        !function(e) {
            function t(e, t) {
                if ("object" != typeof e)
                    throw new TypeError("createSetIterator called on incompatible receiver " + Object.prototype.toString.call(e));
                if (!0 !== e._es6Set)
                    throw new TypeError("createSetIterator called on incompatible receiver " + Object.prototype.toString.call(e));
                var r = Object.create(i);
                return Object.defineProperty(r, "[[IteratedSet]]", {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: e
                }),
                Object.defineProperty(r, "[[SetNextIndex]]", {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(r, "[[SetIterationKind]]", {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: t
                }),
                r
            }
            var r = function() {
                try {
                    var e = {};
                    return Object.defineProperty(e, "t", {
                        configurable: !0,
                        enumerable: !1,
                        get: function() {
                            return !0
                        },
                        set: undefined
                    }),
                    !!e.t
                } catch (t) {
                    return !1
                }
            }()
              , o = Symbol("undef")
              , n = function c() {
                if (!(this instanceof c))
                    throw new TypeError('Constructor Set requires "new"');
                var e = OrdinaryCreateFromConstructor(this, c.prototype, {
                    _values: [],
                    _size: 0,
                    _es6Set: !0
                });
                r || Object.defineProperty(e, "size", {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: 0
                });
                var t = arguments.length > 0 ? arguments[0] : undefined;
                if (null === t || t === undefined)
                    return e;
                var o = e.add;
                if (!IsCallable(o))
                    throw new TypeError("Set.prototype.add is not a function");
                try {
                    for (var n = GetIterator(t); ; ) {
                        var a = IteratorStep(n);
                        if (!1 === a)
                            return e;
                        var i = IteratorValue(a);
                        try {
                            o.call(e, i)
                        } catch (y) {
                            return IteratorClose(n, y)
                        }
                    }
                } catch (y) {
                    if (!Array.isArray(t) && "[object Arguments]" !== Object.prototype.toString.call(t) && !t.callee)
                        throw y;
                    var l, p = t.length;
                    for (l = 0; l < p; l++)
                        o.call(e, t[l])
                }
                return e
            };
            Object.defineProperty(n, "prototype", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: {}
            }),
            r ? Object.defineProperty(n, Symbol.species, {
                configurable: !0,
                enumerable: !1,
                get: function() {
                    return this
                },
                set: undefined
            }) : CreateMethodProperty(n, Symbol.species, n),
            CreateMethodProperty(n.prototype, "add", function p(e) {
                var t = this;
                if ("object" != typeof t)
                    throw new TypeError("Method Set.prototype.add called on incompatible receiver " + Object.prototype.toString.call(t));
                if (!0 !== t._es6Set)
                    throw new TypeError("Method Set.prototype.add called on incompatible receiver " + Object.prototype.toString.call(t));
                for (var n = t._values, a = 0; a < n.length; a++) {
                    var i = n[a];
                    if (i !== o && SameValueZero(i, e))
                        return t
                }
                return 0 === e && 1 / e == -Infinity && (e = 0),
                t._values.push(e),
                this._size = ++this._size,
                r || (this.size = this._size),
                t
            }),
            CreateMethodProperty(n.prototype, "clear", function y() {
                var e = this;
                if ("object" != typeof e)
                    throw new TypeError("Method Set.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
                if (!0 !== e._es6Set)
                    throw new TypeError("Method Set.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
                for (var t = e._values, n = 0; n < t.length; n++)
                    t[n] = o;
                return this._size = 0,
                r || (this.size = this._size),
                undefined
            }),
            CreateMethodProperty(n.prototype, "constructor", n),
            CreateMethodProperty(n.prototype, "delete", function(e) {
                var t = this;
                if ("object" != typeof t)
                    throw new TypeError("Method Set.prototype.delete called on incompatible receiver " + Object.prototype.toString.call(t));
                if (!0 !== t._es6Set)
                    throw new TypeError("Method Set.prototype.delete called on incompatible receiver " + Object.prototype.toString.call(t));
                for (var n = t._values, a = 0; a < n.length; a++) {
                    var i = n[a];
                    if (i !== o && SameValueZero(i, e))
                        return n[a] = o,
                        this._size = --this._size,
                        r || (this.size = this._size),
                        !0
                }
                return !1
            }),
            CreateMethodProperty(n.prototype, "entries", function u() {
                return t(this, "key+value")
            }),
            CreateMethodProperty(n.prototype, "forEach", function f(e) {
                var t = this;
                if ("object" != typeof t)
                    throw new TypeError("Method Set.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
                if (!0 !== t._es6Set)
                    throw new TypeError("Method Set.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
                if (!IsCallable(e))
                    throw new TypeError(Object.prototype.toString.call(e) + " is not a function.");
                if (arguments[1])
                    var r = arguments[1];
                for (var n = t._values, a = 0; a < n.length; a++) {
                    var i = n[a];
                    i !== o && e.call(r, i, i, t)
                }
                return undefined
            }),
            CreateMethodProperty(n.prototype, "has", function d(e) {
                var t = this;
                if ("object" != typeof t)
                    throw new TypeError("Method Set.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
                if (!0 !== t._es6Set)
                    throw new TypeError("Method Set.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
                for (var r = t._values, n = 0; n < r.length; n++) {
                    var a = r[n];
                    if (a !== o && SameValueZero(a, e))
                        return !0
                }
                return !1
            });
            var a = function h() {
                return t(this, "value")
            };
            CreateMethodProperty(n.prototype, "values", a),
            CreateMethodProperty(n.prototype, "keys", a),
            r && Object.defineProperty(n.prototype, "size", {
                configurable: !0,
                enumerable: !1,
                get: function() {
                    var e = this;
                    if ("object" != typeof e)
                        throw new TypeError("Method Set.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
                    if (!0 !== e._es6Set)
                        throw new TypeError("Method Set.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
                    for (var t = e._values, r = 0, n = 0; n < t.length; n++) {
                        t[n] !== o && (r += 1)
                    }
                    return r
                },
                set: undefined
            }),
            CreateMethodProperty(n.prototype, Symbol.iterator, a),
            "name"in n || Object.defineProperty(n, "name", {
                configurable: !0,
                enumerable: !1,
                writable: !1,
                value: "Set"
            });
            var i = {};
            Object.defineProperty(i, "isSetIterator", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: !0
            }),
            CreateMethodProperty(i, "next", function b() {
                var e = this;
                if ("object" != typeof e)
                    throw new TypeError("Method %SetIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
                if (!e.isSetIterator)
                    throw new TypeError("Method %SetIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
                var t = e["[[IteratedSet]]"]
                  , r = e["[[SetNextIndex]]"]
                  , n = e["[[SetIterationKind]]"];
                if (t === undefined)
                    return CreateIterResultObject(undefined, !0);
                if (!t._es6Set)
                    throw new Error(Object.prototype.toString.call(t) + " does not have [[SetData]] internal slot.");
                for (var a = t._values, i = a.length; r < i; ) {
                    var l = a[r];
                    if (r += 1,
                    e["[[SetNextIndex]]"] = r,
                    l !== o)
                        return "key+value" === n ? CreateIterResultObject([l, l], !1) : CreateIterResultObject(l, !1)
                }
                return e["[[IteratedSet]]"] = undefined,
                CreateIterResultObject(undefined, !0)
            }),
            CreateMethodProperty(i, Symbol.iterator, function s() {
                return this
            });
            try {
                CreateMethodProperty(e, "Set", n)
            } catch (l) {
                e.Set = n
            }
        }(self);
        !function() {
            function r(r) {
                return "string" == typeof r || "object" == typeof r && "[object String]" === t.call(r)
            }
            var t = Object.prototype.toString
              , e = String.prototype.match;
            CreateMethodProperty(Array, "from", function o(t) {
                var o = this
                  , a = arguments.length > 1 ? arguments[1] : undefined;
                if (a === undefined)
                    var n = !1;
                else {
                    if (!1 === IsCallable(a))
                        throw new TypeError(Object.prototype.toString.call(a) + " is not a function.");
                    var i = arguments.length > 2 ? arguments[2] : undefined;
                    if (i !== undefined)
                        var l = i;
                    else
                        l = undefined;
                    n = !0
                }
                var u = GetMethod(t, Symbol.iterator);
                if (u !== undefined) {
                    if (IsConstructor(o))
                        var f = Construct(o);
                    else
                        f = ArrayCreate(0);
                    for (var c = GetIterator(t, u), s = 0; ; ) {
                        if (s >= Math.pow(2, 53) - 1) {
                            var h = new TypeError("Iteration count can not be greater than or equal 9007199254740991.");
                            return IteratorClose(c, h)
                        }
                        var y = ToString(s)
                          , C = IteratorStep(c);
                        if (!1 === C)
                            return f.length = s,
                            f;
                        var g = IteratorValue(C);
                        if (n)
                            try {
                                var p = Call(a, l, [g, s])
                            } catch (b) {
                                return IteratorClose(c, b)
                            }
                        else
                            p = g;
                        try {
                            CreateDataPropertyOrThrow(f, y, p)
                        } catch (b) {
                            return IteratorClose(c, b)
                        }
                        s += 1
                    }
                }
                if (r(t))
                    var v = e.call(t, /[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g) || [];
                else
                    v = ToObject(t);
                var d = ToLength(Get(v, "length"));
                for (f = IsConstructor(o) ? Construct(o, [d]) : ArrayCreate(d),
                s = 0; s < d; ) {
                    y = ToString(s);
                    var I = Get(v, y);
                    p = !0 === n ? Call(a, l, [I, s]) : I,
                    CreateDataPropertyOrThrow(f, y, p),
                    s += 1
                }
                return f.length = d,
                f
            })
        }();
        Object.defineProperty(Symbol, "toStringTag", {
            value: Symbol("toStringTag")
        });
        var Iterator = function() {
            var e = function() {
                return this.length = 0,
                this
            }
              , t = function(e) {
                if ("function" != typeof e)
                    throw new TypeError(e + " is not a function");
                return e
            }
              , _ = function(e, n) {
                if (!(this instanceof _))
                    return new _(e,n);
                Object.defineProperties(this, {
                    __list__: {
                        writable: !0,
                        value: e
                    },
                    __context__: {
                        writable: !0,
                        value: n
                    },
                    __nextIndex__: {
                        writable: !0,
                        value: 0
                    }
                }),
                n && (t(n.on),
                n.on("_add", this._onAdd.bind(this)),
                n.on("_delete", this._onDelete.bind(this)),
                n.on("_clear", this._onClear.bind(this)))
            };
            return Object.defineProperties(_.prototype, Object.assign({
                constructor: {
                    value: _,
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                },
                _next: {
                    value: function() {
                        var e;
                        if (this.__list__)
                            return this.__redo__ && (e = this.__redo__.shift()) !== undefined ? e : this.__nextIndex__ < this.__list__.length ? this.__nextIndex__++ : void this._unBind()
                    },
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                },
                next: {
                    value: function() {
                        return this._createResult(this._next())
                    },
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                },
                _createResult: {
                    value: function(e) {
                        return e === undefined ? {
                            done: !0,
                            value: undefined
                        } : {
                            done: !1,
                            value: this._resolve(e)
                        }
                    },
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                },
                _resolve: {
                    value: function(e) {
                        return this.__list__[e]
                    },
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                },
                _unBind: {
                    value: function() {
                        this.__list__ = null,
                        delete this.__redo__,
                        this.__context__ && (this.__context__.off("_add", this._onAdd.bind(this)),
                        this.__context__.off("_delete", this._onDelete.bind(this)),
                        this.__context__.off("_clear", this._onClear.bind(this)),
                        this.__context__ = null)
                    },
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                },
                toString: {
                    value: function() {
                        return "[object Iterator]"
                    },
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                }
            }, {
                _onAdd: {
                    value: function(e) {
                        if (!(e >= this.__nextIndex__)) {
                            if (++this.__nextIndex__,
                            !this.__redo__)
                                return void Object.defineProperty(this, "__redo__", {
                                    value: [e],
                                    configurable: !0,
                                    enumerable: !1,
                                    writable: !1
                                });
                            this.__redo__.forEach(function(t, _) {
                                t >= e && (this.__redo__[_] = ++t)
                            }, this),
                            this.__redo__.push(e)
                        }
                    },
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                },
                _onDelete: {
                    value: function(e) {
                        var t;
                        e >= this.__nextIndex__ || (--this.__nextIndex__,
                        this.__redo__ && (t = this.__redo__.indexOf(e),
                        -1 !== t && this.__redo__.splice(t, 1),
                        this.__redo__.forEach(function(t, _) {
                            t > e && (this.__redo__[_] = --t)
                        }, this)))
                    },
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                },
                _onClear: {
                    value: function() {
                        this.__redo__ && e.call(this.__redo__),
                        this.__nextIndex__ = 0
                    },
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                }
            })),
            Object.defineProperty(_.prototype, Symbol.iterator, {
                value: function() {
                    return this
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            }),
            Object.defineProperty(_.prototype, Symbol.toStringTag, {
                value: "Iterator",
                configurable: !1,
                enumerable: !1,
                writable: !0
            }),
            _
        }();
        var ArrayIterator = function() {
            var e = function(t, r) {
                if (!(this instanceof e))
                    return new e(t,r);
                Iterator.call(this, t),
                r = r ? String.prototype.includes.call(r, "key+value") ? "key+value" : String.prototype.includes.call(r, "key") ? "key" : "value" : "value",
                Object.defineProperty(this, "__kind__", {
                    value: r,
                    configurable: !1,
                    enumerable: !1,
                    writable: !1
                })
            };
            return Object.setPrototypeOf && Object.setPrototypeOf(e, Iterator.prototype),
            e.prototype = Object.create(Iterator.prototype, {
                constructor: {
                    value: e,
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                },
                _resolve: {
                    value: function(e) {
                        return "value" === this.__kind__ ? this.__list__[e] : "key+value" === this.__kind__ ? [e, this.__list__[e]] : e
                    },
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                },
                toString: {
                    value: function() {
                        return "[object Array Iterator]"
                    },
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                }
            }),
            e
        }();
        NodeList.prototype[Symbol.iterator] = function() {
            return new ArrayIterator(this)
        }
        ;
        !function() {
            "use strict";
            function n() {
                return tn[q][B] || D
            }
            function t(n) {
                return n && "object" == typeof n
            }
            function e(n) {
                return "function" == typeof n
            }
            function r(n, t) {
                return n instanceof t
            }
            function o(n) {
                return r(n, A)
            }
            function i(n, t, e) {
                if (!t(n))
                    throw a(e)
            }
            function u() {
                try {
                    return b.apply(R, arguments)
                } catch (n) {
                    return Y.e = n,
                    Y
                }
            }
            function c(n, t) {
                return b = n,
                R = t,
                u
            }
            function f(n, t) {
                function e() {
                    for (var e = 0; e < o; )
                        t(r[e], r[e + 1]),
                        r[e++] = T,
                        r[e++] = T;
                    o = 0,
                    r.length > n && (r.length = n)
                }
                var r = L(n)
                  , o = 0;
                return function(n, t) {
                    r[o++] = n,
                    r[o++] = t,
                    2 === o && tn.nextTick(e)
                }
            }
            function s(n, t) {
                var o, i, u, f, s = 0;
                if (!n)
                    throw a(N);
                var l = n[tn[q][z]];
                if (e(l))
                    i = l.call(n);
                else {
                    if (!e(n.next)) {
                        if (r(n, L)) {
                            for (o = n.length; s < o; )
                                t(n[s], s++);
                            return s
                        }
                        throw a(N)
                    }
                    i = n
                }
                for (; !(u = i.next()).done; )
                    if ((f = c(t)(u.value, s++)) === Y)
                        throw e(i[G]) && i[G](),
                        f.e;
                return s
            }
            function a(n) {
                return new TypeError(n)
            }
            function l(n) {
                return (n ? "" : Q) + (new A).stack
            }
            function h(n, t) {
                var e = "on" + n.toLowerCase()
                  , r = F[e];
                E && E.listeners(n).length ? n === X ? E.emit(n, t._v, t) : E.emit(n, t) : r ? r({
                    reason: t._v,
                    promise: t
                }) : tn[n](t._v, t)
            }
            function v(n) {
                return n && n._s
            }
            function _(n) {
                if (v(n))
                    return new n(Z);
                var t, r, o;
                return t = new n(function(n, e) {
                    if (t)
                        throw a();
                    r = n,
                    o = e
                }
                ),
                i(r, e),
                i(o, e),
                t
            }
            function d(n, t) {
                var e = !1;
                return function(r) {
                    e || (e = !0,
                    I && (n[M] = l(!0)),
                    t === U ? g(n, r) : y(n, t, r))
                }
            }
            function p(n, t, r, o) {
                return e(r) && (t._onFulfilled = r),
                e(o) && (n[J] && h(W, n),
                t._onRejected = o),
                I && (t._p = n),
                n[n._c++] = t,
                n._s !== $ && rn(n, t),
                t
            }
            function m(n) {
                if (n._umark)
                    return !0;
                n._umark = !0;
                for (var t, e = 0, r = n._c; e < r; )
                    if (t = n[e++],
                    t._onRejected || m(t))
                        return !0
            }
            function w(n, t) {
                function e(n) {
                    return r.push(n.replace(/^\s+|\s+$/g, ""))
                }
                var r = [];
                return I && (t[M] && e(t[M]),
                function o(n) {
                    n && K in n && (o(n._next),
                    e(n[K] + ""),
                    o(n._p))
                }(t)),
                (n && n.stack ? n.stack : n) + ("\n" + r.join("\n")).replace(nn, "")
            }
            function j(n, t) {
                return n(t)
            }
            function y(n, t, e) {
                var r = 0
                  , i = n._c;
                if (n._s === $)
                    for (n._s = t,
                    n._v = e,
                    t === O && (I && o(e) && (e.longStack = w(e, n)),
                    on(n)); r < i; )
                        rn(n, n[r++]);
                return n
            }
            function g(n, r) {
                if (r === n && r)
                    return y(n, O, a(V)),
                    n;
                if (r !== S && (e(r) || t(r))) {
                    var o = c(k)(r);
                    if (o === Y)
                        return y(n, O, o.e),
                        n;
                    e(o) ? (I && v(r) && (n._next = r),
                    v(r) ? x(n, r, o) : tn.nextTick(function() {
                        x(n, r, o)
                    })) : y(n, U, r)
                } else
                    y(n, U, r);
                return n
            }
            function k(n) {
                return n.then
            }
            function x(n, t, e) {
                var r = c(e, t)(function(e) {
                    t && (t = S,
                    g(n, e))
                }, function(e) {
                    t && (t = S,
                    y(n, O, e))
                });
                r === Y && t && (y(n, O, r.e),
                t = S)
            }
            var T, b, R, S = null, C = "object" == typeof self, F = self, P = F.Promise, E = F.process, H = F.console, I = !0, L = Array, A = Error, O = 1, U = 2, $ = 3, q = "Symbol", z = "iterator", B = "species", D = q + "(" + B + ")", G = "return", J = "_uh", K = "_pt", M = "_st", N = "Invalid argument", Q = "\nFrom previous ", V = "Chaining cycle detected for promise", W = "rejectionHandled", X = "unhandledRejection", Y = {
                e: S
            }, Z = function() {}, nn = /^.+\/node_modules\/yaku\/.+\n?/gm, tn = function(n) {
                var r, o = this;
                if (!t(o) || o._s !== T)
                    throw a("Invalid this");
                if (o._s = $,
                I && (o[K] = l()),
                n !== Z) {
                    if (!e(n))
                        throw a(N);
                    r = c(n)(d(o, U), d(o, O)),
                    r === Y && y(o, O, r.e)
                }
            };
            tn["default"] = tn,
            function en(n, t) {
                for (var e in t)
                    n[e] = t[e]
            }(tn.prototype, {
                then: function(n, t) {
                    if (this._s === undefined)
                        throw a();
                    return p(this, _(tn.speciesConstructor(this, tn)), n, t)
                },
                "catch": function(n) {
                    return this.then(T, n)
                },
                "finally": function(n) {
                    return this.then(function(t) {
                        return tn.resolve(n()).then(function() {
                            return t
                        })
                    }, function(t) {
                        return tn.resolve(n()).then(function() {
                            throw t
                        })
                    })
                },
                _c: 0,
                _p: S
            }),
            tn.resolve = function(n) {
                return v(n) ? n : g(_(this), n)
            }
            ,
            tn.reject = function(n) {
                return y(_(this), O, n)
            }
            ,
            tn.race = function(n) {
                var t = this
                  , e = _(t)
                  , r = function(n) {
                    y(e, U, n)
                }
                  , o = function(n) {
                    y(e, O, n)
                }
                  , i = c(s)(n, function(n) {
                    t.resolve(n).then(r, o)
                });
                return i === Y ? t.reject(i.e) : e
            }
            ,
            tn.all = function(n) {
                function t(n) {
                    y(o, O, n)
                }
                var e, r = this, o = _(r), i = [];
                return (e = c(s)(n, function(n, u) {
                    r.resolve(n).then(function(n) {
                        i[u] = n,
                        --e || y(o, U, i)
                    }, t)
                })) === Y ? r.reject(e.e) : (e || y(o, U, []),
                o)
            }
            ,
            tn.Symbol = F[q] || {},
            c(function() {
                Object.defineProperty(tn, n(), {
                    get: function() {
                        return this
                    }
                })
            })(),
            tn.speciesConstructor = function(t, e) {
                var r = t.constructor;
                return r ? r[n()] || e : e
            }
            ,
            tn.unhandledRejection = function(n, t) {
                H && H.error("Uncaught (in promise)", I ? t.longStack : w(n, t))
            }
            ,
            tn.rejectionHandled = Z,
            tn.enableLongStackTrace = function() {
                I = !0
            }
            ,
            tn.nextTick = C ? function(n) {
                P ? new P(function(n) {
                    n()
                }
                ).then(n) : setTimeout(n)
            }
            : E.nextTick,
            tn._s = 1;
            var rn = f(999, function(n, t) {
                var e, r;
                return (r = n._s !== O ? t._onFulfilled : t._onRejected) === T ? void y(t, n._s, n._v) : (e = c(j)(r, n._v)) === Y ? void y(t, O, e.e) : void g(t, e)
            })
              , on = f(9, function(n) {
                m(n) || (n[J] = 1,
                h(X, n))
            });
            F.Promise = tn
        }();
        !function(e) {
            "use strict";
            function t(t) {
                return !!t && ("Symbol"in e && "iterator"in e.Symbol && "function" == typeof t[Symbol.iterator] || !!Array.isArray(t))
            }
            !function() {
                function n(e) {
                    var t = ""
                      , n = !0;
                    return e.forEach(function(e) {
                        var r = encodeURIComponent(e.name)
                          , a = encodeURIComponent(e.value);
                        n || (t += "&"),
                        t += r + "=" + a,
                        n = !1
                    }),
                    t.replace(/%20/g, "+")
                }
                function r(e, t) {
                    var n = e.split("&");
                    t && -1 === n[0].indexOf("=") && (n[0] = "=" + n[0]);
                    var r = [];
                    n.forEach(function(e) {
                        if (0 !== e.length) {
                            var t = e.indexOf("=");
                            if (-1 !== t)
                                var n = e.substring(0, t)
                                  , a = e.substring(t + 1);
                            else
                                n = e,
                                a = "";
                            n = n.replace(/\+/g, " "),
                            a = a.replace(/\+/g, " "),
                            r.push({
                                name: n,
                                value: a
                            })
                        }
                    });
                    var a = [];
                    return r.forEach(function(e) {
                        a.push({
                            name: decodeURIComponent(e.name),
                            value: decodeURIComponent(e.value)
                        })
                    }),
                    a
                }
                function a(e) {
                    if (l)
                        return new c(e);
                    var t = document.createElement("a");
                    return t.href = e,
                    t
                }
                function i(e) {
                    var a = this;
                    this._list = [],
                    e === undefined || null === e || (e instanceof i ? this._list = r(String(e)) : "object" == typeof e && t(e) ? Array.from(e).forEach(function(e) {
                        if (!t(e))
                            throw TypeError();
                        var n = Array.from(e);
                        if (2 !== n.length)
                            throw TypeError();
                        a._list.push({
                            name: String(n[0]),
                            value: String(n[1])
                        })
                    }) : "object" == typeof e && e ? Object.keys(e).forEach(function(t) {
                        a._list.push({
                            name: String(t),
                            value: String(e[t])
                        })
                    }) : (e = String(e),
                    "?" === e.substring(0, 1) && (e = e.substring(1)),
                    this._list = r(e))),
                    this._url_object = null,
                    this._setList = function(e) {
                        o || (a._list = e)
                    }
                    ;
                    var o = !1;
                    this._update_steps = function() {
                        o || (o = !0,
                        a._url_object && ("about:" === a._url_object.protocol && -1 !== a._url_object.pathname.indexOf("?") && (a._url_object.pathname = a._url_object.pathname.split("?")[0]),
                        a._url_object.search = n(a._list),
                        o = !1))
                    }
                }
                function o(e, t) {
                    var n = 0;
                    this.next = function() {
                        if (n >= e.length)
                            return {
                                done: !0,
                                value: undefined
                            };
                        var r = e[n++];
                        return {
                            done: !1,
                            value: "key" === t ? r.name : "value" === t ? r.value : [r.name, r.value]
                        }
                    }
                }
                function u(t, n) {
                    function o() {
                        var e = s.href.replace(/#$|\?$|\?(?=#)/g, "");
                        s.href !== e && (s.href = e)
                    }
                    function u() {
                        m._setList(s.search ? r(s.search.substring(1)) : []),
                        m._update_steps()
                    }
                    if (!(this instanceof e.URL))
                        throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.");
                    n && (t = function() {
                        if (l)
                            return new c(t,n).href;
                        var e;
                        try {
                            var r;
                            if ("[object OperaMini]" === Object.prototype.toString.call(window.operamini) ? (e = document.createElement("iframe"),
                            e.style.display = "none",
                            document.documentElement.appendChild(e),
                            r = e.contentWindow.document) : document.implementation && document.implementation.createHTMLDocument ? r = document.implementation.createHTMLDocument("") : document.implementation && document.implementation.createDocument ? (r = document.implementation.createDocument("http://www.w3.org/1999/xhtml", "html", null),
                            r.documentElement.appendChild(r.createElement("head")),
                            r.documentElement.appendChild(r.createElement("body"))) : window.ActiveXObject && (r = new window.ActiveXObject("htmlfile"),
                            r.write("<head></head><body></body>"),
                            r.close()),
                            !r)
                                throw Error("base not supported");
                            var a = r.createElement("base");
                            a.href = n,
                            r.getElementsByTagName("head")[0].appendChild(a);
                            var i = r.createElement("a");
                            return i.href = t,
                            i.href
                        } finally {
                            e && e.parentNode.removeChild(e)
                        }
                    }());
                    var s = a(t || "")
                      , f = function() {
                        if (!("defineProperties"in Object))
                            return !1;
                        try {
                            var e = {};
                            return Object.defineProperties(e, {
                                prop: {
                                    get: function() {
                                        return !0
                                    }
                                }
                            }),
                            e.prop
                        } catch (t) {
                            return !1
                        }
                    }()
                      , h = f ? this : document.createElement("a")
                      , m = new i(s.search ? s.search.substring(1) : null);
                    return m._url_object = h,
                    Object.defineProperties(h, {
                        href: {
                            get: function() {
                                return s.href
                            },
                            set: function(e) {
                                s.href = e,
                                o(),
                                u()
                            },
                            enumerable: !0,
                            configurable: !0
                        },
                        origin: {
                            get: function() {
                                return "data:" === this.protocol.toLowerCase() ? null : "origin"in s ? s.origin : this.protocol + "//" + this.host
                            },
                            enumerable: !0,
                            configurable: !0
                        },
                        protocol: {
                            get: function() {
                                return s.protocol
                            },
                            set: function(e) {
                                s.protocol = e
                            },
                            enumerable: !0,
                            configurable: !0
                        },
                        username: {
                            get: function() {
                                return s.username
                            },
                            set: function(e) {
                                s.username = e
                            },
                            enumerable: !0,
                            configurable: !0
                        },
                        password: {
                            get: function() {
                                return s.password
                            },
                            set: function(e) {
                                s.password = e
                            },
                            enumerable: !0,
                            configurable: !0
                        },
                        host: {
                            get: function() {
                                var e = {
                                    "http:": /:80$/,
                                    "https:": /:443$/,
                                    "ftp:": /:21$/
                                }[s.protocol];
                                return e ? s.host.replace(e, "") : s.host
                            },
                            set: function(e) {
                                s.host = e
                            },
                            enumerable: !0,
                            configurable: !0
                        },
                        hostname: {
                            get: function() {
                                return s.hostname
                            },
                            set: function(e) {
                                s.hostname = e
                            },
                            enumerable: !0,
                            configurable: !0
                        },
                        port: {
                            get: function() {
                                return s.port
                            },
                            set: function(e) {
                                s.port = e
                            },
                            enumerable: !0,
                            configurable: !0
                        },
                        pathname: {
                            get: function() {
                                return "/" !== s.pathname.charAt(0) ? "/" + s.pathname : s.pathname
                            },
                            set: function(e) {
                                s.pathname = e
                            },
                            enumerable: !0,
                            configurable: !0
                        },
                        search: {
                            get: function() {
                                return s.search
                            },
                            set: function(e) {
                                s.search !== e && (s.search = e,
                                o(),
                                u())
                            },
                            enumerable: !0,
                            configurable: !0
                        },
                        searchParams: {
                            get: function() {
                                return m
                            },
                            enumerable: !0,
                            configurable: !0
                        },
                        hash: {
                            get: function() {
                                return s.hash
                            },
                            set: function(e) {
                                s.hash = e,
                                o()
                            },
                            enumerable: !0,
                            configurable: !0
                        },
                        toString: {
                            value: function() {
                                return s.toString()
                            },
                            enumerable: !1,
                            configurable: !0
                        },
                        valueOf: {
                            value: function() {
                                return s.valueOf()
                            },
                            enumerable: !1,
                            configurable: !0
                        }
                    }),
                    h
                }
                var l, c = e.URL;
                try {
                    if (c) {
                        if ("searchParams"in (l = new e.URL("http://example.com"))) {
                            var s = new u("http://example.com");
                            if (s.search = "a=1&b=2",
                            "http://example.com/?a=1&b=2" === s.href && (s.search = "",
                            "http://example.com/" === s.href))
                                return
                        }
                        "href"in l || (l = undefined),
                        l = undefined
                    }
                } catch (h) {}
                if (Object.defineProperties(i.prototype, {
                    append: {
                        value: function(e, t) {
                            this._list.push({
                                name: e,
                                value: t
                            }),
                            this._update_steps()
                        },
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    },
                    "delete": {
                        value: function(e) {
                            for (var t = 0; t < this._list.length; )
                                this._list[t].name === e ? this._list.splice(t, 1) : ++t;
                            this._update_steps()
                        },
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    },
                    get: {
                        value: function(e) {
                            for (var t = 0; t < this._list.length; ++t)
                                if (this._list[t].name === e)
                                    return this._list[t].value;
                            return null
                        },
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    },
                    getAll: {
                        value: function(e) {
                            for (var t = [], n = 0; n < this._list.length; ++n)
                                this._list[n].name === e && t.push(this._list[n].value);
                            return t
                        },
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    },
                    has: {
                        value: function(e) {
                            for (var t = 0; t < this._list.length; ++t)
                                if (this._list[t].name === e)
                                    return !0;
                            return !1
                        },
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    },
                    set: {
                        value: function(e, t) {
                            for (var n = !1, r = 0; r < this._list.length; )
                                this._list[r].name === e ? n ? this._list.splice(r, 1) : (this._list[r].value = t,
                                n = !0,
                                ++r) : ++r;
                            n || this._list.push({
                                name: e,
                                value: t
                            }),
                            this._update_steps()
                        },
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    },
                    entries: {
                        value: function() {
                            return new o(this._list,"key+value")
                        },
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    },
                    keys: {
                        value: function() {
                            return new o(this._list,"key")
                        },
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    },
                    values: {
                        value: function() {
                            return new o(this._list,"value")
                        },
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    },
                    forEach: {
                        value: function(e) {
                            var t = arguments.length > 1 ? arguments[1] : undefined;
                            this._list.forEach(function(n) {
                                e.call(t, n.value, n.name)
                            })
                        },
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    },
                    toString: {
                        value: function() {
                            return n(this._list)
                        },
                        writable: !0,
                        enumerable: !1,
                        configurable: !0
                    },
                    sort: {
                        value: function m() {
                            for (var e = this.entries(), t = e.next(), n = [], r = {}; !t.done; ) {
                                var a = t.value
                                  , i = a[0];
                                n.push(i),
                                Object.prototype.hasOwnProperty.call(r, i) || (r[i] = []),
                                r[i].push(a[1]),
                                t = e.next()
                            }
                            n.sort();
                            for (var o = 0; o < n.length; o++)
                                this["delete"](n[o]);
                            for (var u = 0; u < n.length; u++)
                                i = n[u],
                                this.append(i, r[i].shift())
                        }
                    }
                }),
                "Symbol"in e && "iterator"in e.Symbol && (Object.defineProperty(i.prototype, e.Symbol.iterator, {
                    value: i.prototype.entries,
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(o.prototype, e.Symbol.iterator, {
                    value: function() {
                        return this
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                })),
                c)
                    for (var f in c)
                        Object.prototype.hasOwnProperty.call(c, f) && "function" == typeof c[f] && (u[f] = c[f]);
                e.URL = u,
                e.URLSearchParams = i
            }(),
            function() {
                if ("1" !== new e.URLSearchParams([["a", 1]]).get("a") || "1" !== new e.URLSearchParams({
                    a: 1
                }).get("a")) {
                    var n = e.URLSearchParams;
                    e.URLSearchParams = function(e) {
                        if (e && "object" == typeof e && t(e)) {
                            var r = new n;
                            return Array.from(e).forEach(function(e) {
                                if (!t(e))
                                    throw TypeError();
                                var n = Array.from(e);
                                if (2 !== n.length)
                                    throw TypeError();
                                r.append(n[0], n[1])
                            }),
                            r
                        }
                        return e && "object" == typeof e ? (r = new n,
                        Object.keys(e).forEach(function(t) {
                            r.set(t, e[t])
                        }),
                        r) : new n(e)
                    }
                }
            }()
        }(self);
        !function(t, e) {
            "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.WHATWGFetch = {})
        }(this, function(t) {
            "use strict";
            function e(t) {
                return t && DataView.prototype.isPrototypeOf(t)
            }
            function r(t) {
                if ("string" != typeof t && (t = String(t)),
                /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t)
                    throw new TypeError('Invalid character in header field name: "' + t + '"');
                return t.toLowerCase()
            }
            function o(t) {
                return "string" != typeof t && (t = String(t)),
                t
            }
            function n(t) {
                var e = {
                    next: function() {
                        var e = t.shift();
                        return {
                            done: e === undefined,
                            value: e
                        }
                    }
                };
                return E.iterable && (e[Symbol.iterator] = function() {
                    return e
                }
                ),
                e
            }
            function i(t) {
                this.map = {},
                t instanceof i ? t.forEach(function(t, e) {
                    this.append(e, t)
                }, this) : Array.isArray(t) ? t.forEach(function(t) {
                    this.append(t[0], t[1])
                }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                    this.append(e, t[e])
                }, this)
            }
            function s(t) {
                if (t.bodyUsed)
                    return Promise.reject(new TypeError("Already read"));
                t.bodyUsed = !0
            }
            function a(t) {
                return new Promise(function(e, r) {
                    t.onload = function() {
                        e(t.result)
                    }
                    ,
                    t.onerror = function() {
                        r(t.error)
                    }
                }
                )
            }
            function f(t) {
                var e = new FileReader
                  , r = a(e);
                return e.readAsArrayBuffer(t),
                r
            }
            function u(t) {
                var e = new FileReader
                  , r = a(e);
                return e.readAsText(t),
                r
            }
            function h(t) {
                for (var e = new Uint8Array(t), r = new Array(e.length), o = 0; o < e.length; o++)
                    r[o] = String.fromCharCode(e[o]);
                return r.join("")
            }
            function c(t) {
                if (t.slice)
                    return t.slice(0);
                var e = new Uint8Array(t.byteLength);
                return e.set(new Uint8Array(t)),
                e.buffer
            }
            function d() {
                return this.bodyUsed = !1,
                this._initBody = function(t) {
                    this.bodyUsed = this.bodyUsed,
                    this._bodyInit = t,
                    t ? "string" == typeof t ? this._bodyText = t : E.blob && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : E.formData && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : E.searchParams && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : E.arrayBuffer && E.blob && e(t) ? (this._bodyArrayBuffer = c(t.buffer),
                    this._bodyInit = new Blob([this._bodyArrayBuffer])) : E.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || A(t)) ? this._bodyArrayBuffer = c(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "",
                    this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : E.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }
                ,
                E.blob && (this.blob = function() {
                    var t = s(this);
                    if (t)
                        return t;
                    if (this._bodyBlob)
                        return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }
                ,
                this.arrayBuffer = function() {
                    if (this._bodyArrayBuffer) {
                        var t = s(this);
                        return t || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                    }
                    return this.blob().then(f)
                }
                ),
                this.text = function() {
                    var t = s(this);
                    if (t)
                        return t;
                    if (this._bodyBlob)
                        return u(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(h(this._bodyArrayBuffer));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }
                ,
                E.formData && (this.formData = function() {
                    return this.text().then(l)
                }
                ),
                this.json = function() {
                    return this.text().then(JSON.parse)
                }
                ,
                this
            }
            function y(t) {
                var e = t.toUpperCase();
                return _.indexOf(e) > -1 ? e : t
            }
            function p(t, e) {
                if (!(this instanceof p))
                    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                e = e || {};
                var r = e.body;
                if (t instanceof p) {
                    if (t.bodyUsed)
                        throw new TypeError("Already read");
                    this.url = t.url,
                    this.credentials = t.credentials,
                    e.headers || (this.headers = new i(t.headers)),
                    this.method = t.method,
                    this.mode = t.mode,
                    this.signal = t.signal,
                    r || null == t._bodyInit || (r = t._bodyInit,
                    t.bodyUsed = !0)
                } else
                    this.url = String(t);
                if (this.credentials = e.credentials || this.credentials || "same-origin",
                !e.headers && this.headers || (this.headers = new i(e.headers)),
                this.method = y(e.method || this.method || "GET"),
                this.mode = e.mode || this.mode || null,
                this.signal = e.signal || this.signal,
                this.referrer = null,
                ("GET" === this.method || "HEAD" === this.method) && r)
                    throw new TypeError("Body not allowed for GET or HEAD requests");
                if (this._initBody(r),
                !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== e.cache && "no-cache" !== e.cache)) {
                    var o = /([?&])_=[^&]*/;
                    if (o.test(this.url))
                        this.url = this.url.replace(o, "$1_=" + (new Date).getTime());
                    else {
                        var n = /\?/;
                        this.url += (n.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
                    }
                }
            }
            function l(t) {
                var e = new FormData;
                return t.trim().split("&").forEach(function(t) {
                    if (t) {
                        var r = t.split("=")
                          , o = r.shift().replace(/\+/g, " ")
                          , n = r.join("=").replace(/\+/g, " ");
                        e.append(decodeURIComponent(o), decodeURIComponent(n))
                    }
                }),
                e
            }
            function b(t) {
                var e = new i;
                return t.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(t) {
                    return 0 === t.indexOf("\n") ? t.substr(1, t.length) : t
                }).forEach(function(t) {
                    var r = t.split(":")
                      , o = r.shift().trim();
                    if (o) {
                        var n = r.join(":").trim();
                        e.append(o, n)
                    }
                }),
                e
            }
            function m(t, e) {
                if (!(this instanceof m))
                    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                e || (e = {}),
                this.type = "default",
                this.status = e.status === undefined ? 200 : e.status,
                this.ok = this.status >= 200 && this.status < 300,
                this.statusText = e.statusText === undefined ? "" : "" + e.statusText,
                this.headers = new i(e.headers),
                this.url = e.url || "",
                this._initBody(t)
            }
            function w(e, r) {
                return new Promise(function(n, s) {
                    function a() {
                        u.abort()
                    }
                    var f = new p(e,r);
                    if (f.signal && f.signal.aborted)
                        return s(new t.DOMException("Aborted","AbortError"));
                    var u = new XMLHttpRequest;
                    u.onload = function() {
                        var t = {
                            status: u.status,
                            statusText: u.statusText,
                            headers: b(u.getAllResponseHeaders() || "")
                        };
                        t.url = "responseURL"in u ? u.responseURL : t.headers.get("X-Request-URL");
                        var e = "response"in u ? u.response : u.responseText;
                        setTimeout(function() {
                            n(new m(e,t))
                        }, 0)
                    }
                    ,
                    u.onerror = function() {
                        setTimeout(function() {
                            s(new TypeError("Network request failed"))
                        }, 0)
                    }
                    ,
                    u.ontimeout = function() {
                        setTimeout(function() {
                            s(new TypeError("Network request failed"))
                        }, 0)
                    }
                    ,
                    u.onabort = function() {
                        setTimeout(function() {
                            s(new t.DOMException("Aborted","AbortError"))
                        }, 0)
                    }
                    ,
                    u.open(f.method, function h(t) {
                        try {
                            return "" === t && v.location.href ? v.location.href : t
                        } catch (e) {
                            return t
                        }
                    }(f.url), !0),
                    "include" === f.credentials ? u.withCredentials = !0 : "omit" === f.credentials && (u.withCredentials = !1),
                    "responseType"in u && (E.blob ? u.responseType = "blob" : E.arrayBuffer && f.headers.get("Content-Type") && -1 !== f.headers.get("Content-Type").indexOf("application/octet-stream") && (u.responseType = "arraybuffer")),
                    !r || "object" != typeof r.headers || r.headers instanceof i ? f.headers.forEach(function(t, e) {
                        u.setRequestHeader(e, t)
                    }) : Object.getOwnPropertyNames(r.headers).forEach(function(t) {
                        u.setRequestHeader(t, o(r.headers[t]))
                    }),
                    f.signal && (f.signal.addEventListener("abort", a),
                    u.onreadystatechange = function() {
                        4 === u.readyState && f.signal.removeEventListener("abort", a)
                    }
                    ),
                    u.send("undefined" == typeof f._bodyInit ? null : f._bodyInit)
                }
                )
            }
            var v = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== v && v
              , E = {
                searchParams: "URLSearchParams"in v,
                iterable: "Symbol"in v && "iterator"in Symbol,
                blob: "FileReader"in v && "Blob"in v && function() {
                    try {
                        return new Blob,
                        !0
                    } catch (t) {
                        return !1
                    }
                }(),
                formData: "FormData"in v,
                arrayBuffer: "ArrayBuffer"in v
            };
            if (E.arrayBuffer)
                var T = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                  , A = ArrayBuffer.isView || function(t) {
                    return t && T.indexOf(Object.prototype.toString.call(t)) > -1
                }
                ;
            i.prototype.append = function(t, e) {
                t = r(t),
                e = o(e);
                var n = this.map[t];
                this.map[t] = n ? n + ", " + e : e
            }
            ,
            i.prototype["delete"] = function(t) {
                delete this.map[r(t)]
            }
            ,
            i.prototype.get = function(t) {
                return t = r(t),
                this.has(t) ? this.map[t] : null
            }
            ,
            i.prototype.has = function(t) {
                return this.map.hasOwnProperty(r(t))
            }
            ,
            i.prototype.set = function(t, e) {
                this.map[r(t)] = o(e)
            }
            ,
            i.prototype.forEach = function(t, e) {
                for (var r in this.map)
                    this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
            }
            ,
            i.prototype.keys = function() {
                var t = [];
                return this.forEach(function(e, r) {
                    t.push(r)
                }),
                n(t)
            }
            ,
            i.prototype.values = function() {
                var t = [];
                return this.forEach(function(e) {
                    t.push(e)
                }),
                n(t)
            }
            ,
            i.prototype.entries = function() {
                var t = [];
                return this.forEach(function(e, r) {
                    t.push([r, e])
                }),
                n(t)
            }
            ,
            E.iterable && (i.prototype[Symbol.iterator] = i.prototype.entries);
            var _ = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            p.prototype.clone = function() {
                return new p(this,{
                    body: this._bodyInit
                })
            }
            ,
            d.call(p.prototype),
            d.call(m.prototype),
            m.prototype.clone = function() {
                return new m(this._bodyInit,{
                    status: this.status,
                    statusText: this.statusText,
                    headers: new i(this.headers),
                    url: this.url
                })
            }
            ,
            m.error = function() {
                var t = new m(null,{
                    status: 0,
                    statusText: ""
                });
                return t.type = "error",
                t
            }
            ;
            var g = [301, 302, 303, 307, 308];
            m.redirect = function(t, e) {
                if (-1 === g.indexOf(e))
                    throw new RangeError("Invalid status code");
                return new m(null,{
                    status: e,
                    headers: {
                        location: t
                    }
                })
            }
            ,
            t.DOMException = v.DOMException;
            try {
                new t.DOMException
            } catch (B) {
                t.DOMException = function(t, e) {
                    this.message = t,
                    this.name = e;
                    var r = Error(t);
                    this.stack = r.stack
                }
                ,
                t.DOMException.prototype = Object.create(Error.prototype),
                t.DOMException.prototype.constructor = t.DOMException
            }
            w.polyfill = !0,
            v.fetch = w,
            v.Headers = i,
            v.Request = p,
            v.Response = m,
            t.Headers = i,
            t.Request = p,
            t.Response = m,
            t.fetch = w,
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        });
    }
    )('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
}
;const ElementPrototype = window.Element.prototype;

if (typeof ElementPrototype.matches !== 'function') {
    ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.mozMatchesSelector || ElementPrototype.webkitMatchesSelector || function matches(selector) {
        let element = this;
        const elements = (element.document || element.ownerDocument).querySelectorAll(selector);
        let index = 0;

        while (elements[index] && elements[index] !== element) {
            ++index;
        }

        return Boolean(elements[index]);
    }
    ;
}

if (typeof ElementPrototype.closest !== 'function') {
    ElementPrototype.closest = function closest(selector) {
        let element = this;

        while (element && element.nodeType === 1) {
            if (element.matches(selector)) {
                return element;
            }

            element = element.parentNode;
        }

        return null;
    }
    ;
}
;if ('NodeList'in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function(callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    }
    ;
}
;(function(arr) {
    arr.forEach(function(item) {
        if (item.hasOwnProperty('before')) {
            return;
        }
        Object.defineProperty(item, 'before', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function before() {
                var argArr = Array.prototype.slice.call(arguments)
                  , docFrag = document.createDocumentFragment();

                argArr.forEach(function(argItem) {
                    var isNode = argItem instanceof Node;
                    docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                });

                this.parentNode.insertBefore(docFrag, this);
            },
        });
    });
}
)([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
;/**
 * String.prototype.repeat() polyfill
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat#Polyfill
 */
if (!String.prototype.repeat) {
    String.prototype.repeat = function(count) {
        'use strict';
        if (this == null)
            throw new TypeError('can\'t convert ' + this + ' to object');

        var str = '' + this;
        // To convert string to integer.
        count = +count;
        // Check NaN
        if (count != count)
            count = 0;

        if (count < 0)
            throw new RangeError('repeat count must be non-negative');

        if (count == Infinity)
            throw new RangeError('repeat count must be less than infinity');

        count = Math.floor(count);
        if (str.length == 0 || count == 0)
            return '';

        // Ensuring count is a 31-bit integer allows us to heavily optimize the
        // main part. But anyway, most current (August 2014) browsers can't handle
        // strings 1 << 28 chars or longer, so:
        if (str.length * count >= 1 << 28)
            throw new RangeError('repeat count must not overflow maximum string size');

        var maxCount = str.length * count;
        count = Math.floor(Math.log(count) / Math.log(2));
        while (count) {
            str += str;
            count--;
        }
        str += str.substring(0, maxCount - str.length);
        return str;
    }
}
;"use strict";

// Adaptive variables

var desktop_screen_size = 1599
  , notebook_screen_size = 1279
  , tablet_screen_size = 1048
  , phone_screen_size = 767
  , intro_height_break = 601;
;(function($) {

    function disableScroll() {
        setTimeout(function() {
            $('body').addClass('g-hiddenscroll');
            if ($('html').hasClass('fp-enabled')) {
                $.fn.fullpage.setMouseWheelScrolling(false);
                $.fn.fullpage.setAllowScrolling(false);
            }
        }, 200);
    }
    function enableScroll() {
        setTimeout(function() {
            $('body').removeClass('g-hiddenscroll');
            if ($('html').hasClass('fp-enabled')) {
                $.fn.fullpage.setMouseWheelScrolling(true);
                $.fn.fullpage.setAllowScrolling(true);
            }
        }, 200);
    }

    function closeAuthPanes() {
        $('.auth-window').removeClass('auth-window--active');
        enableScroll();
    }

    function removeHash() {
        if (window.history.pushState) {
            window.history.pushState('', '/', window.location.pathname);
        } else {
            window.location.hash = '';
        }
    }

    function changeAuthWindowClass() {
        if ($(window).width() < 768) {
            $('.auth-window').addClass('auth-window--collapsed').find('.auth-window__col').removeClass('auth-window__activeblock');
            $('.auth-window__toggle-link').removeClass('auth-window__toggle-link--active');
            $('.auth-window .auth-window__links').hide();
        } else {
            $('.auth-window').removeClass('auth-window--collapsed').find('.auth-window__col').removeClass('auth-window__activeblock');
            $('.auth-window__toggle-link').removeClass('auth-window__toggle-link--active');
            $('.auth-window .auth-window__links').not('.hidden-content').show();
            $('.auth-window .hidden-content').hide();
        }
    }

    function hideSideMenu() {
        $('.side-menu').removeClass('side-menu--active');
        $('.header__menu-btn').removeClass('header__menu-btn--active');
    }

    $(document).ready(function() {

        // Hashs

        function checkHashUrls() {
            if (window.location.hash == '#login') {
                closeAuthPanes();
                $('.l-overlay').addClass('l-overlay--white').fadeIn('100');
                $('.auth-window--login').addClass('auth-window--active');
                disableScroll();
                //window.location.hash = '#login';
            }
            if (window.location.hash == '#register') {
                closeAuthPanes();
                $('.l-overlay').addClass('l-overlay--white').fadeIn('100');
                $('.auth-window--register-select').addClass('auth-window--active');
                disableScroll();
                //window.location.hash = '#register';
            }
            if (window.location.hash == '#rosteh-auth') {
                closeAuthPanes();
                $('.l-overlay').addClass('l-overlay--white').fadeIn('100');
                $('.auth-window--rosteh-select').addClass('auth-window--active');
                disableScroll();
                //window.location.hash = '#rosteh-auth';
            }
            if (window.location.hash == '#register-customer') {
                closeAuthPanes();
                $('.l-overlay').addClass('l-overlay--white').fadeIn('100');
                $('.auth-window--register-customer').addClass('auth-window--active');
                disableScroll();
                //window.location.hash = '#register-customer';
            }
            if (window.location.hash == '#register-supplier') {
                closeAuthPanes();
                $('.l-overlay').addClass('l-overlay--white').fadeIn('100');
                $('.auth-window--register-supplier').addClass('auth-window--active');
                disableScroll();
                //window.location.hash = '#register-supplier';
            }
        }

        // Hash change
        checkHashUrls();

        $(window).on('hashchange', function() {
            checkHashUrls();
        });

        // Close auth pane

        function closeLoginPane() {
            $('.l-overlay').fadeOut('100', function() {
                $(this).removeClass('l-overlay--white');
            });
            $('.auth-window--login').removeClass('auth-window--active');
            enableScroll();
            removeHash();
        }

        $('#btn_close_login_pane').on('click', function(e) {
            e.preventDefault();
            closeLoginPane();
        });

        // Login pane

        $('.js-login-popup-link').on('click', function(e) {
            e.preventDefault();
            hideSideMenu();
            window.location.hash = '#login';
            // $('.l-overlay').addClass('l-overlay--white').fadeIn('100');
            // $('.auth-window--login').addClass('auth-window--active');
            // disableScroll();
        });

        // Register select pane

        $('.js-register-popup-link').on('click', function(e) {
            e.preventDefault();
            hideSideMenu();
            // window.location.hash = '#register';
            $('.l-overlay').addClass('l-overlay--white').fadeIn('100');
            $('.auth-window--register-select').addClass('auth-window--active');
            disableScroll();
        });

        $('#btn_close_register_select_pane').on('click', function(e) {
            e.preventDefault();
            closeLoginPane();
            $('.auth-window--register-select').removeClass('auth-window--active');
        });

        function close_register_select_pane() {
            $('.l-overlay').fadeOut('150');
            enableScroll();
            $('.auth-window--register-select').removeClass('auth-window--active');
            removeHash();
        }

        // Rosteh window

        $('.js-rosteh-login-link').on('click', function(e) {
            e.preventDefault();
            hideSideMenu();
            $('.auth-window--rosteh-select').removeClass('auth-window--active');
            window.location.hash = '#rosteh-auth';
        });

        $('#btn_close_rosteh_select_pane').on('click', function(e) {
            e.preventDefault();
            closeLoginPane();
            $('.auth-window--rosteh-select').removeClass('auth-window--active');
        });

        // Supplier register pane

        $('.js-supplier-register-link').on('click', function(e) {
            e.preventDefault();
            hideSideMenu();
            $('.auth-window--register-select').removeClass('auth-window--active');
            window.location.hash = '#register-supplier';
        });

        $('#btn_close_register_supplier_pane').on('click', function(e) {
            e.preventDefault();
            closeLoginPane();
            $('.auth-window--register-supplier').removeClass('auth-window--active');
        });

        $('#btn_back_register_supplier_pane').on('click', function(e) {
            e.preventDefault();
            $('.auth-window--register-supplier').removeClass('auth-window--active');
            // window.location.hash = '#register';
            $('.l-overlay').addClass('l-overlay--white').fadeIn('100');
            $('.auth-window--register-select').addClass('auth-window--active');
            disableScroll();
        });

        // Register customer pane

        $('.js-customer-register-link').on('click', function(e) {
            e.preventDefault();
            hideSideMenu();
            $('.auth-window--register-select').removeClass('auth-window--active');
            window.location.hash = '#register-customer';
        });

        $('#btn_close_register_customer_pane').on('click', function(e) {
            e.preventDefault();
            closeLoginPane();
            $('.auth-window--register-customer').removeClass('auth-window--active');
        });
        $('#btn_back_register_customer_pane').on('click', function(e) {
            e.preventDefault();
            $('.auth-window--register-customer').removeClass('auth-window--active');
            // window.location.hash = '#register';
            $('.l-overlay').addClass('l-overlay--white').fadeIn('100');
            $('.auth-window--register-select').addClass('auth-window--active');
            disableScroll();
        });

        // Toggle links in auth panes

        $('.auth-window__toggle-link').each(function() {
            $(this).on('click', function(e) {
                e.preventDefault();
                if (!$('.auth-window').hasClass('auth-window--collapsed')) {
                    if ($(this).hasClass('auth-window__toggle-link--active')) {
                        $(this).removeClass('auth-window__toggle-link--active').parents('.auth-window__sections').find('.auth-window__links').slideUp();
                    } else {
                        $(this).addClass('auth-window__toggle-link--active').parents('.auth-window__sections').find('.auth-window__links').slideDown();
                    }
                }
            });
        });

        // Adaptive

        $('.auth-window .auth-window__sectiontitle').each(function() {
            $(this).on('click', function(e) {
                if ($('.auth-window').hasClass('auth-window--collapsed') && $(this).parents('.auth-window__sections').hasClass('auth-window__sections--expandable')) {
                    e.preventDefault();
                    var $this = $(this).parent();
                    if ($this.hasClass('auth-window__activeblock')) {
                        $('.auth-window .auth-window__links').slideUp().parent('.auth-window__col').removeClass('auth-window__activeblock');
                    } else {
                        $('.auth-window .auth-window__links').slideUp().slideUp().parent('.auth-window__col').removeClass('auth-window__activeblock');
                        $this.addClass('auth-window__activeblock').find('.auth-window__links').slideDown();
                    }
                }
            });
        });

        changeAuthWindowClass();

        // Window resize event

        $(window).on('resize', function() {
            changeAuthWindowClass();
        });

    });

}
)(jQuery);
;(function($) {

    function check_documents_block_height() {
        if ($('.documents__list').length) {
            $('.documents__list').each(function() {
                var $doc_block = $(this).parents('.documents__block');
                if ($(this).outerHeight() > $doc_block.find('.documents__listwrapper').outerHeight() && !$doc_block.hasClass('documents__block--expanded')) {
                    $doc_block.addClass('documents__block--folded');
                } else {
                    $doc_block.removeClass('documents__block--folded');
                }
            });
        }
    }

    $('.documents__showallitems').on('click', function(e) {
        e.preventDefault();
        $(this).parents('.documents__block').removeClass('documents__block--folded').addClass('documents__block--expanded');
    });

    $(document).ready(function() {
        check_documents_block_height();
    });

    $(window).on('resize', function(e) {
        check_documents_block_height();
    });

    // Закрывает баннер в Тарифах
    if ($('div.field--name-field-banner').length) {
        $('.important-news__btn-close').each(function() {
            $(this).on('click', function(e) {
                e.preventDefault();
                $(this).parents('div.field--name-field-banner').hide();
            });
        });
    }

}
)(jQuery);
;(function($, Drupal, drupalSettings) {
    Drupal.behaviors.tooltips = {
        attach: function(context, settings) {

            // Tooltips

            var target = false, tooltip = false, tip;

            function initTooltip() {
                var posLeft = (target.offset().left + (target.outerWidth() / 2) - (tooltip.outerWidth() / 2))
                  , posTop = target.offset().top - tooltip.outerHeight() - 15;

                if (posLeft < 0) {
                    posLeft = target.offset().left + target.outerWidth() / 2 - 20;
                    tooltip.addClass('left');
                } else {
                    tooltip.removeClass('left');
                }

                if (posLeft + tooltip.outerWidth() > $(window).width()) {
                    posLeft = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
                    tooltip.addClass('right');
                } else {
                    tooltip.removeClass('right');
                }

                if (posTop < 0) {
                    posTop = target.offset().top + target.outerHeight();
                    tooltip.addClass('top');
                } else {
                    tooltip.removeClass('top');
                }

                tooltip.css({
                    left: posLeft,
                    top: posTop
                }).animate({
                    top: '+=10',
                    opacity: 1
                }, 100);
            }

            function removeTooltip() {
                if (tooltip) {
                    tooltip.animate({
                        top: '-=10',
                        opacity: 0
                    }, 100, function() {
                        $(this).remove();
                    });
                    if (target.hasClass('intro-map__name')) {
                        let dataAttr = target.attr('data-title')
                        target.attr('title', dataAttr)
                        target.removeAttr('data-title')
                    } else {
                        target.attr('title', tip);
                    }
                }
            }

            $(context).on('mouseenter', '[rel~=tooltip]', function() {
                target = $(this);
                tip = target.attr('title');
                tooltip = $('<div class="tooltip"></div>');
                if (!tip || tip == '') {
                    return false;
                }
                if (target.hasClass('intro-map__name')) {
                    let dataAttr = target.attr('title')
                    target.attr('data-title', dataAttr)
                }
                target.removeAttr('title');
                tooltip.css('opacity', 0).html(tip).appendTo('body');
                initTooltip();
                $(window).on('resize', initTooltip);
            });

            $(context).on('mouseleave', '[rel~=tooltip]', function() {
                removeTooltip();
            });

        }
    }
}
)(jQuery, Drupal, drupalSettings);
;"use strict";

/**
 * @file
 * Replaced Drupal cores ajax throbber(s), see: https://www.drupal.org/node/2974681
 *
 */
(function($, Drupal) {
    Drupal.theme.ajaxProgressThrobber = function(message) {
        var messageText = message ? "<div class=\"ajax-progress__message\">".concat(message, "</div>") : "";
        return "\n      <div class=\"ajax-progress\">\n        <div class=\"ajax-progress__dot ajax-progress__dot--1\"></div>\n        <div class=\"ajax-progress__dot ajax-progress__dot--2\"></div>\n        <div class=\"ajax-progress__dot ajax-progress__dot--3\"></div>\n        ".concat(messageText, "\n      </div>");
    }
    ;
    Drupal.theme.ajaxProgressIndicatorFullscreen = function(message) {
        var messageText = message ? "<div class=\"ajax-progress__message\">".concat(message, "</div>") : "";
        return "\n      <div class=\"ajax-progress ajax-progress--centered\">\n        <div class=\"ajax-progress__dot ajax-progress__dot--1\"></div>\n        <div class=\"ajax-progress__dot ajax-progress__dot--2\"></div>\n        <div class=\"ajax-progress__dot ajax-progress__dot--3\"></div>\n        ".concat(messageText, "\n      </div>");
    }
    ;
    Drupal.theme.ajaxProgressMessage = function(message) {
        return "\n    <div class=\"ajax-progress\">\n      <div class=\"ajax-progress__message\">".concat(message, "</div>\n    </div>");
    }
    ;
}
)(jQuery, Drupal);
;"use strict";

(function() {
    var sideMenu = document.querySelector('.side-nav');
    var mainBlock = document.querySelector('main');
    var openSideMenuButton = document.querySelectorAll('.js-open-side-nav');
    var sideMenuButtons = document.querySelectorAll('.button-menu--sidemenu');
    var sideMenuNav = document.querySelectorAll('.side-nav__nav');
    var headerSearchButton = document.querySelector('.header-nav__button--search');
    var headerSearch = document.querySelector('.header-search');
    var headerMenu = document.querySelector('.header-menu');
    var menuClickDebounce = false;

    // SlideUp/SlideDown/SlideToggle

    var slideUp = function slideUp(target) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(function() {
            target.style.display = 'none';
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    };
    var slideDown = function slideDown(target) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
        target.style.removeProperty('display');
        var display = window.getComputedStyle(target).display;
        if (display === 'none')
            display = 'block';
        target.style.display = display;
        var height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout(function() {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    };
    var slideToggle = function slideToggle(target) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
        if (window.getComputedStyle(target).display === 'none') {
            return slideDown(target, duration);
        } else {
            return slideUp(target, duration);
        }
    };

    // Side menu show/hide

    var hideSideMenu = function hideSideMenu() {
        sideMenu.classList.remove('side-nav--active');
        sideMenuButtons.forEach(function(item) {
            return item.classList.remove('button-menu--active');
        });
        setTimeout(function() {
            document.body.classList.remove('g-hiddenscroll');
            if (mainBlock.classList.contains('intro-page')) {}
        }, 300);
    };
    var showSideMenu = function showSideMenu() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        document.body.classList.add('g-hiddenscroll');
        sideMenu.classList.add('side-nav--active');
        sideMenuButtons.forEach(function(item) {
            return item.classList.add('button-menu--active');
        });
        if (headerSearchButton) {
            headerSearchButton.classList.remove('header-nav__button--active');
        }
        if (document.querySelectorAll('header-search--active').length) {
            headerSearch.classList.remove('header-search--active');
        }
        headerMenu.style.display = '';
    };

    // Adaptive side menu

    var slideMenuElement = function slideMenuElement(item) {
        var currentSideNav = item.closest('.side-nav__nav');
        var currentList = currentSideNav.querySelector('.side-nav__list');
        setTimeout(function() {
            menuClickDebounce = false;
        }, 220);
        if (!menuClickDebounce) {
            menuClickDebounce = true;
            if (currentSideNav.classList.contains('side-nav__nav--active')) {
                currentSideNav.classList.remove('side-nav__nav--active');
                slideUp(currentList, 200);
            } else {
                currentSideNav.classList.add('side-nav__nav--active');
                slideDown(currentList, 200);
            }
            sideMenuNav.forEach(function(item) {
                if (item !== currentSideNav && !item.classList.contains('side-nav__nav--auth')) {
                    slideUp(item.querySelector('.side-nav__list'), 200);
                    item.classList.remove('side-nav__nav--active');
                }
            });
        }
    };

    // Listeners

    if (openSideMenuButton) {
        openSideMenuButton.forEach(function(item) {
            item.addEventListener('click', function(evt) {
                evt.preventDefault();
                sideMenu.classList.contains('side-nav--active') ? hideSideMenu() : showSideMenu();
            });
        });
    }
    document.addEventListener('click', function(evt) {
        var target = evt.target;
        if (target.classList.contains('js-close-side-nav') || target.classList.contains('l-overlay')) {
            evt.preventDefault();
            hideSideMenu();
        }
        if (target.classList.contains('side-nav__title')) {
            evt.preventDefault();
            slideMenuElement(target);
        }
        if (target.classList.contains('side-nav')) {
            hideSideMenu();
        }
    });
}
)();
;"use strict";

(function() {
    var headerSearchButton = document.querySelector('.header-nav__button--search');
    var headerCloseSearchButton = document.querySelector('.header-nav__button--closesearch');
    var headerMenu = document.querySelector('.header-menu');
    var headerSearch = document.querySelector('.header-search');
    if (headerSearch && headerSearchButton) {
        headerSearchButton.addEventListener('click', function(evt) {
            evt.preventDefault();
            var target = evt.target;
            if (headerSearch.classList.contains('header-search--active')) {
                return;
            }
            headerSearchButton.classList.add('header-nav__button--active');
            headerSearch.classList.add('header-search--active');
            headerMenu.style.display = 'none';
        });
        headerCloseSearchButton.addEventListener('click', function(evt) {
            evt.preventDefault();
            var target = evt.target;
            if (!headerSearch.classList.contains('header-search--active')) {
                return;
            }
            headerSearchButton.classList.remove('header-nav__button--active');
            headerSearch.classList.remove('header-search--active');
            headerMenu.style.display = '';
        });
    }
}
)();
;"use strict";

(function() {
    if (document.querySelectorAll('.lang-selector').length) {
        var langSelector = document.querySelector('.lang-selector');
        var selectorButton = document.querySelector('.lang-selector__current-value:not(.lang-selector__current-value-calc)');
        var selectorContainer = document.querySelector('.lang-selector__options');
        var selectorOptions = document.querySelectorAll('.lang-selector__item');
        var selectorLang = document.querySelector('.lang-selector__value-text');
        var hideSelector = function hideSelector() {
            langSelector.classList.remove('lang-selector--active');
        };
        var showSelector = function showSelector() {
            langSelector.classList.add('lang-selector--active');
        };
        selectorButton.addEventListener('click', function(evt) {
            evt.preventDefault();
            if (langSelector.classList.contains('lang-selector--active')) {
                hideSelector();
                linkLang();
            } else {
                showSelector();
            }
        });
        var setLanguage = function setLanguage(textValue) {
            selectorLang.textContent = textValue;
            hideSelector();
        };
        selectorOptions.forEach(function(item) {
            item.addEventListener('click', function(evt) {
                setLanguage(item.textContent);
            });
        });
        document.addEventListener('click', function(evt) {
            var target = evt.target;
            if (!target.classList.contains('lang-selector__current-value') && !target.classList.contains('lang-selector__value-text') && !target.classList.contains('lang-selector__options') && langSelector.classList.contains('lang-selector--active')) {
                hideSelector();
            }
        });
        window.addEventListener('load', function() {
            selectorOptions.forEach(function(item) {
                var link = item.querySelector('.lang-selector__link');
                item.classList.remove('lang-selector__item--selected');
                item.setAttribute('aria-selected', false);
                if (link.classList.contains('selected')) {
                    item.classList.add('lang-selector__item--selected');
                    item.setAttribute('aria-selected', true);
                    setLanguage(link.textContent, link);
                    linkLang();
                }
            });
        });
        var linkLang = function linkLang() {
            if (document.querySelector('.lang-selector__value-text').innerText == 'En') {
                if (document.querySelectorAll('.auth-window--register-supplier .auth-window__link').length) {
                    document.querySelectorAll('.auth-window--register-supplier .auth-window__link').forEach(function(e) {
                        if (e.getAttribute('href').search('https://atom2.roseltorg.ru/') != -1) {
                            var url = window.location.href;
                            if (url.indexOf('http://www-dev.roseltorg.ru/#register-supplier') != -1) {
                                e.setAttribute('href', 'https://atom2-develop.roseltorg.tech/#front/register/lang/en');
                            } else {
                                e.setAttribute('href', 'https://atom2.roseltorg.ru/#front/register/lang/en/');
                            }
                        }
                    });
                }
                if (document.querySelectorAll('a[href="https://atom2.roseltorg.ru/#auth/login"]').length) {
                    document.querySelectorAll('a[href="https://atom2.roseltorg.ru/#auth/login"]').forEach(function(e) {
                        e.setAttribute('href', 'https://atom2.roseltorg.ru/#auth/login/lang/en');
                    });
                }
                if (document.querySelectorAll('a[href="https://atom2-develop.roseltorg.tech/#auth/login"]').length) {
                    document.querySelectorAll('a[href="https://atom2-develop.roseltorg.tech/#auth/login"]').forEach(function(e) {
                        e.setAttribute('href', 'https://atom2-develop.roseltorg.tech/#auth/login/lang/en');
                    });
                }
            }
        };
    }
}
)();
;"use strict";

var urlCookie = window.location;
function getParameterValue(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return results[1];
}
if (urlCookie.search.search('a_aid') != -1) {
    var arrCookie = ['UTM_SOURCE=affiliat', 'UTM_MEDIUM=""', 'UTM_CAMPAIGN=' + getParameterValue('a_aid') + '', 'UTM_CONTENT=' + urlCookie.hostname + '', 'UTM_TERM=""'];
    arrCookie = JSON.stringify(arrCookie);
    document.cookie = 'affiliat=' + arrCookie + '';
}
;"use strict";

if (document.querySelectorAll('.breadcrumbs').length) {
    var brLinkSum = document.querySelectorAll('.breadcrumbs__link').length - 1;
    document.querySelectorAll('.breadcrumbs__link').forEach(function(eLink, iLink) {
        if (brLinkSum == iLink) {
            eLink.closest('li').classList.add('last-link');
        }
    });
}
;mindbox = window.mindbox || function() {
    mindbox.queue.push(arguments);
}
;
mindbox.queue = mindbox.queue || [];

mindbox('create', {
    endpointId: "roseltorgru-website",
    firebaseMessagingSenderId: "1065952443083"
});

//  нужно добавить скрипт инициализации модуля веб-пушей
mindbox("webpush.create");

// ---- Нужно добавить -------
// команда для миграции
mindbox("webpush.migrate", {
    migrateOperation: "MigrateWebPush"
});
;
