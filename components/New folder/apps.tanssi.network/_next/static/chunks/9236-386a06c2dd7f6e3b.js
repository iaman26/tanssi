! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            s = Error().stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "022d2d9d-bacb-46a0-91a0-645e00eafc7b", e._sentryDebugIdIdentifier = "sentry-dbid-022d2d9d-bacb-46a0-91a0-645e00eafc7b")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9236], {
        27884: function(e, s, n) {
            n.d(s, {
                D: function() {
                    return t
                }
            });
            var i = n(85893),
                r = n(34124);

            function t(e) {
                let {
                    children: s,
                    ...n
                } = e;
                return (0, i.jsx)(r.X, {
                    p: "lg",
                    bg: "dark.8",
                    ...n,
                    style: { ...n.style
                    },
                    children: s
                })
            }
        },
        28532: function(e, s, n) {
            n.d(s, {
                D: function() {
                    return $
                }
            });
            var i = n(85893),
                r = n(8282),
                t = n(23070),
                a = n(54410);

            function l() {
                return (0, i.jsx)(t.b, {
                    position: "bottom",
                    children: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(a.x, {
                            size: "sm",
                            c: "gray.6",
                            children: [(0, i.jsx)(a.x, {
                                span: !0,
                                size: "sm",
                                c: "white",
                                children: "Balance: "
                            }), "Shows the funds available for producing blocks on the blockchain."]
                        }), (0, i.jsxs)(a.x, {
                            size: "sm",
                            c: "gray.6",
                            children: [(0, i.jsx)(a.x, {
                                span: !0,
                                size: "sm",
                                c: "white",
                                children: "Days: "
                            }), "Indicates remaining days you can produce blocks for."]
                        }), (0, i.jsxs)(a.x, {
                            size: "sm",
                            c: "gray.6",
                            children: [(0, i.jsx)(a.x, {
                                span: !0,
                                size: "sm",
                                c: "white",
                                children: "Cost Per Block: "
                            }), "Represents the number of tokens required to produce each block, reflecting the operational cost of block creation."]
                        }), (0, i.jsxs)(a.x, {
                            size: "sm",
                            c: "gray.6",
                            children: [(0, i.jsx)(a.x, {
                                span: !0,
                                size: "sm",
                                c: "white",
                                children: "Cost Per Session: "
                            }), "Details the expense for each assignment of a block producer to your chain, affecting overall maintenance costs. Each session is 1 hour."]
                        })]
                    })
                })
            }
            var o = n(23078),
                c = n(46570),
                d = n(12410),
                h = n(356),
                x = n(28008),
                u = n(93445),
                g = n(27884);

            function m(e) {
                let {
                    paraId: s,
                    config: n,
                    ...r
                } = e, {
                    balance: t
                } = (0, c.wm)(s, n), m = ((0, c.yW)(s, n) || 0) + ((0, c.Y5)(s, n) || 0);
                return (0, i.jsxs)(g.D, { ...r,
                    children: [(0, i.jsxs)(h.Z, {
                        gap: 5,
                        children: [(0, i.jsx)(x.D, {
                            order: 4,
                            size: 14,
                            c: "white",
                            children: "Block Production"
                        }), (0, i.jsx)(l, {})]
                    }), (0, i.jsxs)(u.x, {
                        mt: 15,
                        children: [(0, i.jsxs)(h.Z, {
                            gap: 5,
                            children: [(0, i.jsx)(a.x, {
                                c: "gray.5",
                                size: "sm",
                                children: "Balance: "
                            }), (0, i.jsx)(o.d, {
                                amount: t
                            })]
                        }), (0, i.jsxs)(a.x, {
                            c: "gray.5",
                            size: "sm",
                            children: ["Days: ", (0, i.jsx)(a.x, {
                                span: !0,
                                size: "sm",
                                children: m ? (0, d.L)(m) : "0"
                            })]
                        }), (0, i.jsxs)(h.Z, {
                            gap: 5,
                            children: [(0, i.jsx)(a.x, {
                                c: "gray.5",
                                size: "sm",
                                children: "Per Block: "
                            }), (0, i.jsx)(o.d, {
                                amount: n.fees.costPerBlock
                            })]
                        }), (0, i.jsxs)(h.Z, {
                            gap: 5,
                            children: [(0, i.jsx)(a.x, {
                                c: "gray.5",
                                size: "sm",
                                children: "Per Session: "
                            }), (0, i.jsx)(o.d, {
                                amount: n.fees.costPerSession
                            })]
                        })]
                    })]
                })
            }

            function p(e) {
                let {
                    paraId: s,
                    config: n
                } = e, r = (0, c.jD)(s, n), t = (0, c.Rj)(s, n), l = (0, c.dp)(s, n);
                return (0, i.jsxs)(g.D, {
                    w: {
                        base: "100%",
                        sm: "35%"
                    },
                    children: [(0, i.jsx)(x.D, {
                        order: 4,
                        size: 14,
                        c: "white",
                        children: "Appchain Feed"
                    }), (0, i.jsxs)(u.x, {
                        mt: 15,
                        children: [(0, i.jsxs)(a.x, {
                            c: "gray.5",
                            size: "sm",
                            children: ["Latest Block Number: ", (0, i.jsx)(a.x, {
                                span: !0,
                                size: "sm",
                                children: null != r ? r : "N/A"
                            })]
                        }), (0, i.jsxs)(a.x, {
                            c: "gray.5",
                            size: "sm",
                            children: ["Latest Block Timestamp: ", (0, i.jsx)(a.x, {
                                span: !0,
                                size: "sm",
                                children: null != t ? t : "N/A"
                            })]
                        }), (0, i.jsxs)(a.x, {
                            c: "gray.5",
                            size: "sm",
                            children: ["Latest Block Transactions: ", (0, i.jsx)(a.x, {
                                span: !0,
                                size: "sm",
                                children: null != l ? l : "N/A"
                            })]
                        })]
                    })]
                })
            }
            let j = (0, n(95495).O4)("free-credits-alert-shown", !1);
            var b = n(48583),
                A = n(13966);

            function f() {
                let e = (0, A.xj)(),
                    {
                        isFreeCreditsAlertShown: s,
                        setIsFreeCreditsAlertShown: n
                    } = function() {
                        let [e, s] = (0, b.KO)(j);
                        return {
                            isFreeCreditsAlertShown: e,
                            setIsFreeCreditsAlertShown: s
                        }
                    }();
                return s || e ? null : (0, i.jsx)(r.b, {
                    onClose: () => n(!0),
                    children: "You have been given 60 days of free credits for Block Production. Block Production shows your current balance of DANCE tokens that is used for Block Production and the rate for block consumption, you will need to top up this balance for your Appchain to continue producing blocks."
                })
            }
            var y = n(71723),
                w = n(86769),
                k = n(11294),
                z = n(55733),
                v = n.n(z),
                D = n(67294),
                C = n(24166),
                S = n(65984),
                Z = n(60967),
                B = n(8207),
                I = n(73719);

            function O(e) {
                let {
                    paraId: s,
                    isEvm: n,
                    chainId: r,
                    tokenSymbol: t,
                    config: l
                } = e, o = (0, S.rZ)(), d = function(e, s) {
                    let [n, i] = (0, D.useState)(), {
                        data: r
                    } = (0, k.Y6)(e, s);
                    return (0, D.useEffect)(() => {
                        if (!r) return;
                        let e = new(v());
                        e.file("spec-raw.json", JSON.stringify(r.specRaw)), e.file("genesis-state.txt", JSON.stringify(r.genesisState)), e.file("genesis-wasm.txt", JSON.stringify(r.genesisWasm)), e.generateAsync({
                            type: "blob"
                        }).then(e => {
                            i(URL.createObjectURL(e))
                        })
                    }, [r]), n
                }(s, l.key), m = (0, c.Sw)(s, l), p = (0, c.iE)(s, l), j = (0, c.jd)(s, l);
                return (0, i.jsxs)(g.D, {
                    style: {
                        flex: 1
                    },
                    children: [(0, i.jsx)(h.Z, {
                        justify: "space-between",
                        children: (0, i.jsx)(x.D, {
                            order: 4,
                            size: 14,
                            c: "white",
                            children: "Properties"
                        })
                    }), (0, i.jsx)(u.x, {
                        mt: 15,
                        children: (0, i.jsxs)(h.Z, {
                            align: "start",
                            display: p ? "flex" : "block",
                            gap: 0,
                            children: [(0, i.jsxs)(u.x, {
                                w: {
                                    base: "auto",
                                    xs: "40%"
                                },
                                mr: "xs",
                                children: [(0, i.jsxs)(a.x, {
                                    c: "gray.5",
                                    size: "sm",
                                    children: ["Type: ", (0, i.jsx)(a.x, {
                                        span: !0,
                                        size: "sm",
                                        children: "".concat(n ? "EVM" : "Substrate", "-").concat(l.displayName, " Appchain")
                                    })]
                                }), (0, i.jsxs)(a.x, {
                                    c: "gray.5",
                                    size: "sm",
                                    children: ["Appchain ID: ", (0, i.jsx)(a.x, {
                                        span: !0,
                                        size: "sm",
                                        children: s
                                    })]
                                }), !!r && (0, i.jsxs)(a.x, {
                                    c: "gray.5",
                                    size: "sm",
                                    children: ["EVM Chain ID: ", (0, i.jsx)(a.x, {
                                        span: !0,
                                        size: "sm",
                                        children: r
                                    })]
                                }), t && (0, i.jsxs)(a.x, {
                                    c: "gray.5",
                                    size: "sm",
                                    children: ["Token Symbol: ", (0, i.jsx)(a.x, {
                                        span: !0,
                                        size: "sm",
                                        children: t
                                    })]
                                })]
                            }), (0, i.jsxs)(u.x, {
                                w: {
                                    base: "auto",
                                    xs: "55%"
                                },
                                children: [(0, i.jsxs)(a.x, {
                                    c: "gray.5",
                                    size: "sm",
                                    children: ["Relay Chain: ", (0, i.jsx)(a.x, {
                                        span: !0,
                                        size: "sm",
                                        children: l.relay.name
                                    })]
                                }), !!j && (0, i.jsxs)(a.x, {
                                    c: "gray.5",
                                    size: "sm",
                                    children: ["Runtime: ", (0, i.jsx)(w.H, {
                                        label: j.toString(),
                                        c: "white",
                                        iconColor: o.other.colors.orange,
                                        iconSize: 16,
                                        size: "sm",
                                        url: "https://github.com/moondance-labs/tanssi/tree/runtime-".concat(j),
                                        td: "none"
                                    })]
                                }), !!m && (0, i.jsxs)(h.Z, {
                                    gap: 5,
                                    children: [(0, i.jsx)(a.x, {
                                        c: "gray.5",
                                        size: "sm",
                                        children: "Sudo Address: "
                                    }), (0, i.jsx)(a.x, {
                                        span: !0,
                                        size: "sm",
                                        children: (0, C.L)(m, 6, 6)
                                    }), (0, i.jsx)(y.T, {
                                        value: m,
                                        size: 16,
                                        color: o.other.colors.orange
                                    })]
                                }), d && (0, i.jsxs)(h.Z, {
                                    gap: 5,
                                    children: [(0, i.jsx)(a.x, {
                                        c: "gray.5",
                                        size: "sm",
                                        children: "Chain Spec: "
                                    }), (0, i.jsx)(Z.e, {
                                        href: d,
                                        download: "appchain-data.zip",
                                        td: "none",
                                        children: (0, i.jsxs)(h.Z, {
                                            w: "100%",
                                            align: "center",
                                            gap: 5,
                                            children: [(0, i.jsx)(a.x, {
                                                size: "sm",
                                                children: "Appchain Data"
                                            }), (0, i.jsx)(B.K, {
                                                justify: "center",
                                                children: (0, i.jsx)(I.Z, {
                                                    size: 16,
                                                    stroke: 1.5,
                                                    color: o.other.colors.orange
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            }
            let E = {
                [c.m0.NotFound]: {
                    color: "red",
                    status: "Not found"
                },
                [c.m0.PendingVerification]: {
                    color: "yellow.5",
                    status: "Pending"
                },
                [c.m0.Deploying]: {
                    color: "blue",
                    status: "Deploying"
                },
                [c.m0.Online]: {
                    color: "green.4",
                    status: "Live"
                },
                [c.m0.NotOnline]: {
                    color: "red",
                    status: "Not online"
                }
            };
            var _ = n(57373);

            function L(e) {
                let {
                    paraId: s,
                    config: n
                } = e, {
                    xs: r
                } = (0, _.a)(), {
                    status: t,
                    isLoading: l
                } = (0, c.Zn)(s, n);
                return l ? null : t && (0, i.jsxs)(h.Z, {
                    gap: 7,
                    justify: r ? "center" : "start",
                    align: "center",
                    w: "15%",
                    wrap: "nowrap",
                    children: [(0, i.jsx)(u.x, {
                        w: 12,
                        h: 12,
                        bg: "".concat(E[t].color),
                        style: {
                            borderRadius: "50%"
                        }
                    }), (0, i.jsx)(a.x, {
                        size: "sm",
                        children: E[t].status
                    })]
                })
            }

            function R(e) {
                let {
                    urls: s,
                    explorers: n
                } = e, r = (0, S.rZ)();
                return (0, i.jsxs)(g.D, {
                    style: {
                        flex: 1
                    },
                    children: [(0, i.jsx)(x.D, {
                        order: 4,
                        size: 14,
                        c: "white",
                        children: "Tooling"
                    }), s && (0, i.jsxs)(u.x, {
                        mt: 15,
                        children: [(0, i.jsxs)(h.Z, {
                            gap: 0,
                            mb: 5,
                            align: "center",
                            children: [(0, i.jsx)(a.x, {
                                c: "gray.5",
                                size: "sm",
                                mr: 5,
                                children: "Explorer:"
                            }), (0, i.jsx)(h.Z, {
                                align: "center",
                                gap: 0,
                                children: (n || s.explorers).map(e => {
                                    let {
                                        name: s,
                                        url: n
                                    } = e;
                                    return (0, i.jsx)(w.H, {
                                        label: s,
                                        url: n,
                                        mr: 5,
                                        size: "sm",
                                        c: "white",
                                        iconColor: r.other.colors.orange,
                                        iconSize: 16,
                                        td: "none"
                                    }, s)
                                })
                            })]
                        }), (0, i.jsxs)(h.Z, {
                            gap: 0,
                            mb: 5,
                            align: "center",
                            children: [(0, i.jsx)(a.x, {
                                c: "gray.5",
                                size: "sm",
                                mr: 5,
                                children: "RPC:"
                            }), (0, i.jsxs)(h.Z, {
                                align: "center",
                                gap: 5,
                                children: [(0, i.jsxs)(a.x, {
                                    size: "sm",
                                    children: [s.rpc, " "]
                                }), (0, i.jsx)(y.T, {
                                    value: s.rpc,
                                    size: 18,
                                    color: r.other.colors.orange
                                })]
                            })]
                        }), (0, i.jsxs)(h.Z, {
                            gap: 0,
                            mb: 5,
                            align: "center",
                            children: [(0, i.jsx)(a.x, {
                                c: "gray.5",
                                size: "sm",
                                mr: 5,
                                children: "WS:"
                            }), (0, i.jsxs)(h.Z, {
                                align: "center",
                                gap: 5,
                                children: [(0, i.jsxs)(a.x, {
                                    size: "sm",
                                    children: [s.ws, " "]
                                }), (0, i.jsx)(y.T, {
                                    value: s.ws,
                                    size: 18,
                                    color: r.other.colors.orange
                                })]
                            })]
                        })]
                    })]
                })
            }
            var U = n(69332),
                P = n(40074),
                N = n(36035),
                Q = n(75228),
                M = n(96176),
                T = n(1506),
                W = n(34124),
                F = n(90991),
                J = n(24920),
                V = n(57187),
                H = n(1032),
                Y = n(91166),
                G = n(11027),
                X = n(25675),
                K = n.n(X);

            function q(e) {
                let {
                    chainId: s,
                    config: n,
                    explorer: r,
                    name: t,
                    paraId: a,
                    rpc: l,
                    isIconOnly: o = !1,
                    ...d
                } = e, [h, x] = (0, D.useState)(!1), u = (0, c.Gr)(a, n), g = (0, c.QO)(a, n), m = u || h, p = async () => {
                    x(!0);
                    try {
                        var e;
                        await (null === (e = window.ethereum) || void 0 === e ? void 0 : e.request({
                            method: "wallet_addEthereumChain",
                            params: [{
                                chainId: s ? "0x".concat(s.toString(16)) : void 0,
                                chainName: null != t ? t : null == g ? void 0 : g.name,
                                nativeCurrency: {
                                    name: null == g ? void 0 : g.asset.originSymbol,
                                    symbol: null == g ? void 0 : g.asset.originSymbol,
                                    decimals: 18
                                },
                                rpcUrls: [l],
                                blockExplorerUrls: r ? [r] : null
                            }]
                        }))
                    } catch (e) {
                        console.error(e), G.Tb(e, {
                            extra: {
                                chainId: s,
                                paraId: a
                            }
                        })
                    } finally {
                        x(!1)
                    }
                };
                return t && a && s && l && g ? o ? (0, i.jsx)(H.u, {
                    label: "".concat(u ? "Added" : "Add", " to MetaMask"),
                    children: (0, i.jsx)(Y.k, {
                        disabled: m,
                        opacity: m ? .6 : 1,
                        onClick: p,
                        children: (0, i.jsx)(F.M, {
                            children: (0, i.jsx)(K(), {
                                src: "/images/logo_metamask.svg",
                                alt: "Metamask logo",
                                height: 26,
                                width: 26,
                                priority: !0
                            })
                        })
                    })
                }) : (0, i.jsx)(J.z, {
                    disabled: m,
                    opacity: m ? .7 : 1,
                    loading: h,
                    leftSection: (0, i.jsx)(K(), {
                        src: "/images/logo_metamask.svg",
                        alt: "Metamask logo",
                        height: 26,
                        width: 26,
                        priority: !0
                    }),
                    onClick: p,
                    ...d,
                    children: "".concat(u ? "Added" : "Add", " to MetaMask")
                }) : null
            }

            function $(e) {
                let {
                    name: s,
                    paraId: n,
                    config: t,
                    explorers: a,
                    ...l
                } = e, {
                    sm: o
                } = (0, _.a)(), d = (0, M.SF)(), u = (0, c.Pn)(n, t), g = (0, c.o3)(n, t), j = (0, c.NV)(n, t), b = (0, c.QO)(n, t), A = (0, S.rZ)(), y = (0, c.UO)(n, t), {
                    status: w,
                    isLoading: k
                } = (0, c.Zn)(n, t), {
                    openManageAppchain: z
                } = (0, P.ar)(), {
                    isEnabled: v
                } = function() {
                    let e = (0, Q.P)("is-appchain-management-enabled");
                    return {
                        isEnabled: !!(null == e ? void 0 : e.enabled),
                        isLoading: !e
                    }
                }(), {
                    isEnabled: D
                } = function() {
                    let e = (0, Q.P)("is-campaign-active");
                    return {
                        isEnabled: !!(null == e ? void 0 : e.enabled),
                        isLoading: !e
                    }
                }(), C = s || ((null == b ? void 0 : b.name.includes("Frontier Container")) || (null == b ? void 0 : b.name.includes("Simple Container")) || !(null == b ? void 0 : b.name) ? n.toString() : null == b ? void 0 : b.name), Z = y === d;
                return k ? (0, i.jsx)(T.O, {
                    mb: 15,
                    width: "100%",
                    height: 330
                }) : (0, i.jsxs)(W.X, {
                    mb: 15,
                    p: "md",
                    bg: "dark.9",
                    style: {
                        border: "2px solid var(--mantine-color-dark-6)"
                    },
                    ...l,
                    children: [(0, i.jsxs)(h.Z, {
                        mb: 20,
                        justify: "space-between",
                        gap: "xs",
                        children: [(0, i.jsxs)(h.Z, {
                            gap: "xs",
                            w: {
                                base: "100%",
                                xs: "40%"
                            },
                            children: [C && (0, i.jsx)(F.M, {
                                children: (0, i.jsx)(U.k, {
                                    value: C,
                                    w: 32,
                                    h: 32,
                                    size: 20,
                                    p: "xs",
                                    bg: "dark.7",
                                    style: {
                                        borderRadius: "50%"
                                    }
                                })
                            }), (0, i.jsx)(x.D, {
                                order: 2,
                                size: 20,
                                c: A.other.colors.orange,
                                children: null == C ? void 0 : C.toUpperCase()
                            })]
                        }), (0, i.jsx)(L, {
                            paraId: n,
                            config: t
                        }), (0, i.jsx)(h.Z, {
                            gap: "xs",
                            justify: "end",
                            align: "center",
                            w: {
                                base: "80%",
                                xs: "40%"
                            },
                            children: w === c.m0.Online && (0, i.jsxs)(i.Fragment, {
                                children: [g && (0, i.jsx)(q, {
                                    isIconOnly: !0,
                                    name: C,
                                    chainId: j,
                                    explorer: null == a ? void 0 : a[0].url,
                                    paraId: n,
                                    config: t,
                                    rpc: null == u ? void 0 : u.rpc
                                }), d && (0, i.jsx)(J.z, {
                                    variant: "light",
                                    size: "sm",
                                    bg: (0, V.m)("var(--mantine-color-dark-7)", .9),
                                    onClick: () => {
                                        z({
                                            paraId: n,
                                            config: t,
                                            component: (0, i.jsx)(N.r, {
                                                closeOnBack: !0
                                            })
                                        })
                                    },
                                    children: "Top Up"
                                }), v && Z && (0, i.jsx)(J.z, {
                                    variant: "light",
                                    size: "sm",
                                    bg: (0, V.m)("var(--mantine-color-dark-7)", .9),
                                    onClick: () => z({
                                        paraId: n,
                                        config: t
                                    }),
                                    children: "Manage"
                                })]
                            })
                        })]
                    }), w === c.m0.Online && Z && (0, i.jsx)(f, {}), w !== c.m0.Online && D && (0, i.jsx)(r.b, {
                        children: "You have successfully completed an Appchain deployment intent, your chain will not be deployed to be used while the Let's Forkin Dance incentive campaign is still active."
                    }), (0, i.jsxs)(h.Z, {
                        mt: 15,
                        align: "auto",
                        style: {
                            flexDirection: o ? "row" : "column"
                        },
                        children: [w === c.m0.Online && (0, i.jsx)(m, {
                            w: {
                                base: "auto",
                                sm: "35%"
                            },
                            paraId: n,
                            config: t
                        }), (0, i.jsx)(O, {
                            paraId: n,
                            isEvm: g,
                            chainId: j,
                            tokenSymbol: null == b ? void 0 : b.asset.originSymbol,
                            config: t
                        })]
                    }), w === c.m0.Online && (0, i.jsxs)(h.Z, {
                        mt: 15,
                        align: "auto",
                        style: {
                            flexDirection: o ? "row" : "column"
                        },
                        children: [(0, i.jsx)(R, {
                            urls: u,
                            explorers: a
                        }), (0, i.jsx)(p, {
                            paraId: n,
                            config: t
                        })]
                    })]
                })
            }
        },
        48172: function(e, s, n) {
            n.d(s, {
                n: function() {
                    return j
                }
            });
            var i = n(85893),
                r = n(57373),
                t = {
                    src: "/_next/static/media/tanssi_campaign_long_banner.8f59bf01.webp",
                    height: 240,
                    width: 2456,
                    blurDataURL: "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACwAQCdASoIAAEAAkA4JZQCw7D0h/pcAP7322KH4agaizBANS7sAAAA",
                    blurWidth: 8,
                    blurHeight: 1
                },
                a = {
                    src: "/_next/static/media/tanssi_campaign_mobile_banner.d9d2c0e2.webp",
                    height: 820,
                    width: 700,
                    blurDataURL: "data:image/webp;base64,UklGRoIAAABXRUJQVlA4WAoAAAAQAAAABgAABwAAQUxQSBMAAAABD/D7/4iIIBBIVstfa4iI/ocGAFZQOCBIAAAA8AEAnQEqBwAIAAJAOCWMArABFswiM48AAP7vrcnL637xHshOW6TR922WGXU+GrednUH5xJhcOU7YxC8ziKMcEdYVzDuBhgAA",
                    blurWidth: 7,
                    blurHeight: 8
                },
                l = {
                    src: "/_next/static/media/tanssi_campaign_regular_banner.1d70b854.webp",
                    height: 240,
                    width: 1640,
                    blurDataURL: "data:image/webp;base64,UklGRloAAABXRUJQVlA4WAoAAAAQAAAABwAAAAAAQUxQSAkAAAAA+/////////sAVlA4ICoAAADQAQCdASoIAAEAAkA4JYwCdAEO/gOOAAD+8YoTkS3ovsRrLo6cpmqLgAA=",
                    blurWidth: 8,
                    blurHeight: 1
                },
                o = n(48583);
            let c = (0, n(95495).O4)("is-campaign-banner-visible", !0);
            var d = n(65984),
                h = n(60967),
                x = n(80929),
                u = n(91992),
                g = n(25675),
                m = n.n(g),
                p = n(18644);

            function j(e) {
                let {
                    isLong: s = !1
                } = e, {
                    md: n
                } = (0, r.a)(), g = (0, d.rZ)(), {
                    isCampaignBannerVisible: j,
                    setIsCampaignBannerVisible: b
                } = function() {
                    let [e, s] = (0, o.KO)(c);
                    return {
                        isCampaignBannerVisible: e,
                        setIsCampaignBannerVisible: s
                    }
                }(), A = () => {
                    b(!j)
                };
                return j ? (0, i.jsxs)(h.e, {
                    href: "https://lfd.tanssi.network/",
                    target: "_blank",
                    style: {
                        position: "relative",
                        display: "block",
                        width: "100%"
                    },
                    children: [(0, i.jsx)(x.E, {
                        component: m(),
                        alt: "Let's Forkin Dance banner",
                        src: n ? s ? t : l : a,
                        style: {
                            width: "100%",
                            height: "auto"
                        },
                        priority: !0,
                        width: 1536,
                        height: 1024
                    }), (0, i.jsx)(u.A, {
                        style: {
                            position: "absolute",
                            top: "3%",
                            right: "2%",
                            backgroundColor: "transparent"
                        },
                        onClick: e => {
                            e.preventDefault(), A()
                        },
                        children: (0, i.jsx)(p.Lp2, {
                            size: 20
                        })
                    }), (0, i.jsx)("div", {
                        style: {
                            position: "absolute",
                            bottom: "3%",
                            right: "2%",
                            backgroundColor: "transparent",
                            color: g.other.colors.white
                        },
                        children: (0, i.jsx)(p.$sw, {
                            size: 20
                        })
                    })]
                }) : null
            }
        },
        23070: function(e, s, n) {
            n.d(s, {
                b: function() {
                    return i.b
                }
            });
            var i = n(76167)
        }
    }
]);
//# sourceMappingURL=9236-386a06c2dd7f6e3b.js.map