! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d6e1e7dc-7c30-491f-81ad-fef49f8d16e4", e._sentryDebugIdIdentifier = "sentry-dbid-d6e1e7dc-7c30-491f-81ad-fef49f8d16e4")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        48312: function(e, n, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return s(85526)
            }])
        },
        18433: function(e, n, s) {
            "use strict";
            s.d(n, {
                W: function() {
                    return c
                }
            });
            var r = s(85893),
                i = s(90991),
                l = s(12109),
                t = s(13165);
            let c = (0, s(67294).memo)(function(e) {
                let {
                    isOpen: n,
                    size: s = 24,
                    iconProps: c,
                    ...o
                } = e;
                return (0, r.jsx)(i.M, {
                    w: s,
                    h: s,
                    bg: "dark.6",
                    style: {
                        borderRadius: 8
                    },
                    ...o,
                    children: n ? (0, r.jsx)(l.Z, {
                        size: s / 2,
                        stroke: 3,
                        color: "white",
                        ...c
                    }) : (0, r.jsx)(t.Z, {
                        size: s / 2,
                        stroke: 3,
                        color: "white",
                        ...c
                    })
                })
            })
        },
        85526: function(e, n, s) {
            "use strict";
            s.r(n), s.d(n, {
                default: function() {
                    return ef
                }
            });
            var r = s(85893),
                i = s(28532),
                l = s(48172),
                t = s(24642),
                c = s(46570),
                o = s(29075),
                a = s(90991),
                d = s(76556),
                x = s(93445),
                h = s(47744),
                u = s(40074),
                j = s(40801),
                p = s(65437),
                g = s(71723),
                m = s(23078),
                w = s(47530),
                f = s(57373),
                b = s(85060),
                y = s(24166),
                v = s(65984),
                k = s(8207),
                _ = s(28008),
                C = s(54410),
                z = s(356),
                Z = s(45076),
                D = s.n(Z),
                I = s(68213),
                N = s(24920),
                A = s(53621),
                S = s(22781),
                R = s(67294),
                K = s(18644),
                L = s(32347),
                F = s(17114),
                T = s(57187);
            let W = {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            };

            function E(e) {
                let {
                    children: n,
                    maxWidth: s,
                    shadowColor: i,
                    ...l
                } = e, {
                    ref: t,
                    width: c
                } = function(e) {
                    let [n, {
                        width: s,
                        height: r
                    }] = function(e) {
                        let n = (0, R.useRef)(0),
                            s = (0, R.useRef)(null),
                            [r, i] = (0, R.useState)(W),
                            l = (0, R.useMemo)(() => "undefined" != typeof window ? new ResizeObserver(e => {
                                let r = e[0];
                                r && (cancelAnimationFrame(n.current), n.current = requestAnimationFrame(() => {
                                    s.current && i(r.contentRect)
                                }))
                            }) : null, []);
                        return (0, R.useEffect)(() => (s.current && l ? .observe(s.current, e), () => {
                            l ? .disconnect(), n.current && cancelAnimationFrame(n.current)
                        }), [s.current]), [s, r]
                    }(void 0);
                    return {
                        ref: n,
                        width: s,
                        height: r
                    }
                }(), o = (0, v.rZ)(), a = i || o.colors.dark[8];
                return (0, r.jsxs)(x.x, {
                    ref: t,
                    pos: "relative",
                    maw: s,
                    style: {
                        flexGrow: 1,
                        overflow: "hidden",
                        whiteSpace: "nowrap"
                    },
                    ...l,
                    children: [n, c === s && (0, r.jsx)(x.x, {
                        component: "span",
                        pos: "absolute",
                        top: 0,
                        right: 0,
                        w: .1 * s,
                        h: "100%",
                        bg: "linear-gradient(90deg, ".concat((0, T.m)(a, .1), " 0%, ").concat((0, T.m)(a, 1), " 100%)")
                    })]
                })
            }

            function M(e) {
                let {
                    paraId: n,
                    config: s,
                    identiconProps: i,
                    variant: l = "yellow",
                    withName: t = !0
                } = e, o = (0, v.rZ)(), a = (0, c.aD)(n, s);
                if (!n) return null;
                let d = n === (null == s ? void 0 : s.parachainId) ? s.name : n === (null == s ? void 0 : s.relay.parachainId) ? s.relay.name : a || "Appchain";
                return (0, r.jsxs)(z.Z, {
                    gap: "xs",
                    children: [(0, r.jsx)(F.k, {
                        paraId: n,
                        ...i
                    }), t && (0, r.jsx)(E, {
                        maxWidth: 180,
                        children: (0, r.jsxs)(C.x, {
                            size: "sm",
                            fw: 500,
                            c: "yellow" === l ? o.other.colors.orange : o.colors.tanssiTeal[9],
                            children: [d, ":"]
                        })
                    }), (0, r.jsx)(C.x, {
                        size: "sm",
                        children: n
                    })]
                })
            }

            function $(e) {
                let {
                    sender: n,
                    recipient: s,
                    icon: i,
                    rightSection: l
                } = e, {
                    config: t
                } = (0, u.$h)(), {
                    lg: c
                } = (0, f.a)();
                return (0, r.jsxs)(z.Z, {
                    className: D().row,
                    role: "row",
                    justify: "space-between",
                    children: [(0, r.jsxs)(z.Z, {
                        gap: c ? 85 : 20,
                        wrap: "nowrap",
                        children: [(0, r.jsx)(M, {
                            paraId: n,
                            config: t,
                            withName: c
                        }), (0, r.jsx)(x.x, {
                            children: i
                        }), (0, r.jsx)(M, {
                            paraId: s,
                            config: t,
                            variant: "blue",
                            withName: c
                        })]
                    }), l]
                })
            }

            function q() {
                let {
                    paraId: e,
                    config: n
                } = (0, u.$h)(), {
                    data: s
                } = (0, I.x$)(null == n ? void 0 : n.relay, e), i = (0, I.Jz)(), {
                    isLoading: l,
                    send: t
                } = (0, I.uP)(e, n, {
                    onSuccess: () => i()
                }), {
                    lg: c
                } = (0, f.a)(), [o, a] = (0, R.useState)(0);
                return e ? (0, r.jsxs)(x.x, {
                    children: [(0, r.jsx)(C.x, {
                        mb: "xs",
                        children: "Established Channels"
                    }), (0, r.jsx)(k.K, {
                        children: (null == s ? void 0 : s.length) ? s.map((n, s) => {
                            let {
                                sender: i,
                                recipient: d
                            } = n;
                            return (0, r.jsx)($, {
                                sender: e,
                                recipient: i === e ? d : i,
                                icon: i === e ? (0, r.jsx)(A.Z, {
                                    size: 20
                                }) : (0, r.jsx)(S.Z, {
                                    size: 20
                                }),
                                rightSection: (0, r.jsx)(N.z, {
                                    w: c ? 105 : void 0,
                                    color: "dark.6",
                                    style: {
                                        border: "1px solid var(--mantine-color-8)"
                                    },
                                    loading: l && o === s,
                                    disabled: l && o !== s,
                                    onClick: () => {
                                        a(s), t(i, d)
                                    },
                                    children: c ? "Close" : (0, r.jsx)(K.bjh, {
                                        size: 20
                                    })
                                })
                            }, "".concat(i, "-").concat(d))
                        }) : (0, r.jsx)(L.K, {
                            children: "No channels"
                        })
                    })]
                }) : null
            }

            function H() {
                let {
                    paraId: e,
                    config: n
                } = (0, u.$h)(), s = (0, I.hy)(e, null == n ? void 0 : n.relay), i = (0, I.Jz)(), {
                    isLoading: l,
                    send: t
                } = (0, I.kC)(e, n, {
                    onSuccess: () => i()
                }), {
                    isLoading: c,
                    send: o
                } = (0, I.L1)(e, n), [a, d] = (0, R.useState)(0);
                return (null == s ? void 0 : s.length) ? (0, r.jsxs)(x.x, {
                    children: [(0, r.jsx)(C.x, {
                        mb: "xs",
                        children: "Incoming Channel Requests"
                    }), (0, r.jsx)(k.K, {
                        children: s.map((e, n) => {
                            let {
                                sender: s,
                                recipient: i
                            } = e;
                            return (0, r.jsx)($, {
                                sender: i,
                                recipient: s,
                                icon: (0, r.jsx)(S.Z, {
                                    size: 20
                                }),
                                rightSection: (0, r.jsxs)(z.Z, {
                                    gap: "xs",
                                    children: [(0, r.jsx)(N.z, {
                                        miw: 105,
                                        color: "dark.6",
                                        style: {
                                            border: "1px solid var(--mantine-color-8)"
                                        },
                                        loading: c && a === n,
                                        disabled: l || c && a !== n,
                                        onClick: () => {
                                            d(n), o(s, i)
                                        },
                                        children: "Reject"
                                    }), (0, r.jsx)(p.K, {
                                        miw: 105,
                                        withArrow: !1,
                                        loading: l && a === n,
                                        disabled: c || l && a !== n,
                                        onClick: () => {
                                            d(n), t(s)
                                        },
                                        children: "Accept"
                                    })]
                                })
                            }, "".concat(s, "-").concat(i))
                        })
                    })]
                }) : null
            }

            function O() {
                let e = (0, v.rZ)(),
                    {
                        paraId: n,
                        config: s
                    } = (0, u.$h)(),
                    i = (0, I.l$)(n, null == s ? void 0 : s.relay),
                    {
                        isLoading: l,
                        send: t
                    } = (0, I.L1)(n, s),
                    [c, o] = (0, R.useState)(0);
                return (null == i ? void 0 : i.length) ? (0, r.jsxs)(x.x, {
                    children: [(0, r.jsx)(C.x, {
                        mb: "xs",
                        children: "Outgoing Channel Requests"
                    }), (0, r.jsx)(k.K, {
                        children: i.map((n, s) => {
                            let {
                                sender: i,
                                recipient: a
                            } = n;
                            return (0, r.jsx)($, {
                                sender: i,
                                recipient: a,
                                icon: (0, r.jsx)(A.Z, {
                                    size: 20
                                }),
                                rightSection: (0, r.jsxs)(z.Z, {
                                    gap: "xs",
                                    children: [(0, r.jsxs)(z.Z, {
                                        gap: "xs",
                                        children: [(0, r.jsx)(x.x, {
                                            w: 12,
                                            h: 12,
                                            style: {
                                                borderRadius: "50%"
                                            },
                                            bg: e.other.colors.orange
                                        }), (0, r.jsx)(C.x, {
                                            size: "sm",
                                            children: "Pending"
                                        })]
                                    }), (0, r.jsx)(N.z, {
                                        miw: 105,
                                        color: "dark.6",
                                        style: {
                                            border: "1px solid var(--mantine-color-8)"
                                        },
                                        loading: l && c === s,
                                        disabled: l && c !== s,
                                        onClick: () => {
                                            o(s), t(i, a)
                                        },
                                        children: "Cancel"
                                    })]
                                })
                            }, "".concat(i, "-").concat(a))
                        })
                    })]
                }) : null
            }
            var P = s(18433),
                J = s(91166),
                Q = s(102),
                X = s(66961),
                B = s(37113),
                U = s(98299),
                Y = s(20760),
                G = s(8453);

            function V(e) {
                let {
                    asset: n
                } = e, [s, {
                    toggle: i
                }] = (0, B.q)(!1), l = (0, Y.t)((0, G.YM)(n.supply, n.decimals));
                return (0, r.jsxs)(k.K, {
                    gap: 0,
                    bg: "dark.6",
                    style: {
                        borderRadius: 12
                    },
                    children: [(0, r.jsxs)(X.r, {
                        role: "row",
                        p: 10,
                        gutter: "xs",
                        bg: "dark.8",
                        align: "center",
                        style: {
                            borderRadius: 12
                        },
                        children: [(0, r.jsx)(X.r.Col, {
                            span: 2,
                            children: (0, r.jsxs)(z.Z, {
                                gap: "xs",
                                children: [(0, r.jsx)(U.F, {
                                    assetKey: n.symbol.toLowerCase(),
                                    size: 30
                                }), (0, r.jsx)(C.x, {
                                    children: n.name
                                })]
                            })
                        }), (0, r.jsx)(X.r.Col, {
                            span: 2,
                            children: (0, r.jsx)(C.x, {
                                ta: "center",
                                children: n.symbol
                            })
                        }), (0, r.jsx)(X.r.Col, {
                            span: 2.5,
                            children: (0, r.jsx)(C.x, {
                                ta: "center",
                                children: n.id.toString()
                            })
                        }), (0, r.jsx)(X.r.Col, {
                            span: 3,
                            children: (0, r.jsx)(C.x, {
                                children: l
                            })
                        }), (0, r.jsx)(X.r.Col, {
                            span: 2,
                            ta: "center",
                            children: (0, r.jsx)(C.x, {
                                children: n.paraId || "-"
                            })
                        }), (0, r.jsx)(X.r.Col, {
                            span: .5,
                            children: (0, r.jsx)(J.k, {
                                onMouseDown: i,
                                children: (0, r.jsx)(P.W, {
                                    isOpen: s
                                })
                            })
                        })]
                    }), (0, r.jsx)(Q.U, { in: s,
                        children: (0, r.jsxs)(z.Z, {
                            h: 50,
                            pl: "md",
                            gap: 48,
                            children: [(0, r.jsxs)(z.Z, {
                                gap: 2,
                                children: [(0, r.jsx)(C.x, {
                                    size: "sm",
                                    mr: 4,
                                    c: "gray.6",
                                    children: "Owner: "
                                }), (0, r.jsx)(C.x, {
                                    size: "sm",
                                    children: (0, y.L)(n.owner, 4, 8)
                                }), (0, r.jsx)(g.T, {
                                    value: n.owner,
                                    c: "white",
                                    size: 16
                                })]
                            }), (0, r.jsxs)(z.Z, {
                                gap: 2,
                                children: [(0, r.jsx)(C.x, {
                                    size: "sm",
                                    mr: 4,
                                    c: "gray.6",
                                    children: "Admin: "
                                }), (0, r.jsx)(C.x, {
                                    size: "sm",
                                    children: (0, y.L)(n.admin, 4, 8)
                                }), (0, r.jsx)(g.T, {
                                    value: n.admin,
                                    c: "white",
                                    size: 16
                                })]
                            })]
                        })
                    })]
                })
            }

            function ee() {
                let {
                    paraId: e,
                    config: n
                } = (0, u.$h)(), [s, {
                    toggle: i
                }] = (0, B.q)(!0), l = (0, I.J6)(e, n);
                return (0, r.jsxs)(x.x, {
                    children: [(0, r.jsx)(J.k, {
                        onMouseDown: i,
                        children: (0, r.jsxs)(z.Z, {
                            gap: "xs",
                            children: [(0, r.jsx)(C.x, {
                                children: "Registered Assets"
                            }), (0, r.jsx)(P.W, {
                                isOpen: s
                            })]
                        })
                    }), (0, r.jsx)(Q.U, { in: s,
                        children: (0, r.jsxs)(k.K, {
                            mt: "lg",
                            gap: "xs",
                            children: [(0, r.jsxs)(X.r, {
                                role: "row",
                                px: "md",
                                gutter: "xs",
                                children: [(0, r.jsx)(X.r.Col, {
                                    span: 2,
                                    children: (0, r.jsx)(C.x, {
                                        c: "gray.6",
                                        children: "Name"
                                    })
                                }), (0, r.jsx)(X.r.Col, {
                                    span: 2,
                                    children: (0, r.jsx)(C.x, {
                                        c: "gray.6",
                                        ta: "center",
                                        children: "Symbol"
                                    })
                                }), (0, r.jsx)(X.r.Col, {
                                    span: 2.5,
                                    children: (0, r.jsx)(C.x, {
                                        c: "gray.6",
                                        ta: "center",
                                        children: "Asset ID"
                                    })
                                }), (0, r.jsx)(X.r.Col, {
                                    span: 3,
                                    children: (0, r.jsx)(C.x, {
                                        c: "gray.6",
                                        children: "Supply"
                                    })
                                }), (0, r.jsx)(X.r.Col, {
                                    span: 2,
                                    children: (0, r.jsx)(C.x, {
                                        c: "gray.6",
                                        ta: "center",
                                        children: "Appchain ID"
                                    })
                                })]
                            }), (null == l ? void 0 : l.length) ? l.map(e => (0, r.jsx)(V, {
                                asset: e
                            }, e.id)) : (0, r.jsx)(L.K, {
                                children: "No registered assets"
                            })]
                        })
                    })]
                })
            }

            function en() {
                let e = (0, v.rZ)(),
                    n = (0, u.oQ)(),
                    {
                        paraId: s,
                        config: i
                    } = (0, u.$h)(),
                    l = (0, c.aD)(s, i),
                    t = (0, b.Y)(s),
                    o = (0, w.Yt)(t, null == i ? void 0 : i.relay),
                    {
                        lg: a
                    } = (0, f.a)();
                return (0, r.jsxs)(k.K, {
                    mr: a ? 0 : 320,
                    children: [(0, r.jsxs)(_.D, {
                        bg: "dark.9",
                        order: 1,
                        size: 24,
                        c: "white",
                        children: ["XCM", l ? ": ".concat(l) : ""]
                    }), (0, r.jsxs)(x.x, {
                        children: [(0, r.jsx)(C.x, {
                            mb: "xs",
                            children: "Sovereign Account"
                        }), (0, r.jsxs)(z.Z, {
                            className: D().row,
                            gap: 0,
                            children: [(0, r.jsxs)(z.Z, {
                                gap: 2,
                                children: [(0, r.jsx)(C.x, {
                                    mr: 4,
                                    c: "gray.6",
                                    children: "Account Balance: "
                                }), (0, r.jsx)(m.d, {
                                    amount: o,
                                    size: "md"
                                })]
                            }), (0, r.jsxs)(z.Z, {
                                ml: a ? 115 : 0,
                                gap: 2,
                                children: [(0, r.jsx)(C.x, {
                                    mr: 4,
                                    c: "gray.6",
                                    children: "Account Address: "
                                }), (0, r.jsx)(C.x, {
                                    children: (0, y.L)(t, 4, 8)
                                }), (0, r.jsx)(g.T, {
                                    value: t,
                                    c: e.other.colors.orange,
                                    size: 16
                                })]
                            }), (0, r.jsx)(p.K, {
                                ml: "auto",
                                miw: 105,
                                withArrow: !1,
                                onClick: () => n(j.F0.XcmHrmpDeposit),
                                children: "Deposit"
                            })]
                        })]
                    }), (0, r.jsx)(O, {}), (0, r.jsx)(H, {}), (0, r.jsx)(q, {}), (0, r.jsx)(ee, {})]
                })
            }

            function es() {
                let e = (0, o.B)(),
                    {
                        appchains: n
                    } = (0, c.IN)(e),
                    {
                        tab: s
                    } = (0, u.$h)(),
                    p = (0, h.D)(s),
                    {
                        sidebar: g
                    } = (0, t.A)();
                return n ? g && ((0, j.JC)(s) || (0, j.JC)(p) && s === j.F0.Proxy) ? (0, r.jsx)(en, {}) : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.n, {}), (0, r.jsx)(x.x, {
                        component: "section",
                        pt: 20,
                        children: n.map(n => {
                            let {
                                paraId: s
                            } = n;
                            return (0, r.jsx)(i.D, {
                                paraId: s,
                                config: e
                            }, s)
                        })
                    })]
                }) : (0, r.jsx)(a.M, {
                    style: {
                        flex: 1
                    },
                    children: (0, r.jsx)(d.a, {
                        size: 50
                    })
                })
            }
            var er = s(47587),
                ei = s(11517),
                el = s(86769),
                et = s(57175),
                ec = s(25675),
                eo = s.n(ec),
                ea = s(41596),
                ed = s.n(ea);

            function ex(e) {
                let {
                    title: n,
                    url: s,
                    icon: i,
                    bg: l,
                    ...t
                } = e;
                return (0, r.jsxs)(el.H, {
                    url: s,
                    withIcon: !1,
                    isWrapper: !0,
                    className: ed().box,
                    td: "none",
                    pos: "relative",
                    h: 144,
                    miw: 200,
                    py: "lg",
                    px: "xl",
                    ...t,
                    style: { ...t.style,
                        backgroundImage: l ? "url(".concat(l, ")") : "linear-gradient(40.1deg, #2a3f89 20.36%, #357ab3 94.74%)",
                        backgroundSize: "cover",
                        backgroundPosition: "bottom"
                    },
                    children: [(0, r.jsx)(_.D, {
                        className: ed().title,
                        order: 3,
                        size: 20,
                        lh: 1.3,
                        c: "white",
                        h: "100%",
                        children: n
                    }), !l && (0, r.jsx)(x.x, {
                        className: ed().icon_wrapper,
                        children: (0, r.jsx)(eo(), {
                            alt: (null == n ? void 0 : n.toString()) || "Link background image",
                            src: i
                        })
                    }), (0, r.jsx)(x.x, {
                        className: ed().arrow_wrapper,
                        children: (0, r.jsx)(et.Z, {
                            size: 40,
                            stroke: 1.5,
                            color: "white"
                        })
                    })]
                })
            }
            var eh = {
                    src: "/_next/static/media/appchains-icon.cd5b94ae.svg",
                    height: 111,
                    width: 126,
                    blurWidth: 0,
                    blurHeight: 0
                },
                eu = {
                    src: "/_next/static/media/demo-icon.60c4e02f.svg",
                    height: 103,
                    width: 103,
                    blurWidth: 0,
                    blurHeight: 0
                },
                ej = {
                    src: "/_next/static/media/docs-icon.67ddc042.svg",
                    height: 108,
                    width: 111,
                    blurWidth: 0,
                    blurHeight: 0
                },
                ep = {
                    src: "/_next/static/media/quick-guide-icon.d42094ec.svg",
                    height: 107,
                    width: 95,
                    blurWidth: 0,
                    blurHeight: 0
                };

            function eg() {
                return (0, r.jsxs)(X.r, {
                    children: [(0, r.jsx)(X.r.Col, {
                        span: {
                            base: 12,
                            xs: 6,
                            lg: 3
                        },
                        children: (0, r.jsx)(z.Z, {
                            grow: !0,
                            children: (0, r.jsx)(ex, {
                                title: "Docs",
                                url: "https://docs.tanssi.network/",
                                icon: ej
                            })
                        })
                    }), (0, r.jsx)(X.r.Col, {
                        span: {
                            base: 12,
                            xs: 6,
                            lg: 3
                        },
                        children: (0, r.jsx)(z.Z, {
                            grow: !0,
                            children: (0, r.jsx)(ex, {
                                title: "Quick Guide",
                                url: "https://docs.tanssi.network/builders/deploy-manage/dapp/deploy/",
                                icon: ep
                            })
                        })
                    }), (0, r.jsx)(X.r.Col, {
                        span: {
                            base: 12,
                            xs: 6,
                            lg: 3
                        },
                        children: (0, r.jsx)(z.Z, {
                            grow: !0,
                            children: (0, r.jsx)(ex, {
                                title: "Ecosystem Appchains",
                                url: "https://dashboard.tanssi-chains.network/",
                                icon: eh
                            })
                        })
                    }), (0, r.jsx)(X.r.Col, {
                        span: {
                            base: 12,
                            xs: 6,
                            lg: 3
                        },
                        children: (0, r.jsx)(z.Z, {
                            grow: !0,
                            children: (0, r.jsx)(ex, {
                                title: "Demo Appchain",
                                url: "".concat(window.location.origin, "/demo/"),
                                icon: eu
                            })
                        })
                    })]
                })
            }

            function em() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.n, {}), (0, r.jsx)(er.U, {
                        children: "Welcome to Dancebox"
                    }), (0, r.jsx)(C.x, {
                        children: "Dancebox is Tanssi's TestNet environment, designed for seamless deployment of appchains"
                    }), (0, r.jsxs)(k.K, {
                        children: [(0, r.jsx)(ei.V, {}), (0, r.jsx)(eg, {})]
                    })]
                })
            }
            var ew = s(3237);

            function ef() {
                let e = (0, ew.t)(),
                    n = (0, o.B)(),
                    {
                        hasAppchains: s,
                        isPending: i
                    } = (0, c.IN)(n);
                return (0, r.jsx)(r.Fragment, {
                    children: i || !e ? (0, r.jsx)(a.M, {
                        pos: "absolute",
                        top: "50vh",
                        left: "50vw",
                        style: {
                            transform: "translate(-50%, -50%)"
                        },
                        children: (0, r.jsx)(d.a, {
                            size: 50
                        })
                    }) : s ? (0, r.jsx)(es, {}) : (0, r.jsx)(em, {})
                })
            }
        },
        41596: function(e) {
            e.exports = {
                box: "DocsLink_box___kRrQ",
                icon_wrapper: "DocsLink_icon_wrapper__fQjMj",
                arrow_wrapper: "DocsLink_arrow_wrapper__T0oFZ"
            }
        },
        45076: function(e) {
            e.exports = {
                row: "HrmpChannels_row__2uqPT"
            }
        }
    },
    function(e) {
        e.O(0, [8, 9236, 9774, 2888, 179], function() {
            return e(e.s = 48312)
        }), _N_E = e.O()
    }
]);
//# sourceMappingURL=index-48ec16240d7dd762.js.map