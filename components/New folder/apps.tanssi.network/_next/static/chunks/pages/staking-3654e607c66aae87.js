! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6e613d78-9c3b-4944-bcd3-2c4b204dc915", e._sentryDebugIdIdentifier = "sentry-dbid-6e613d78-9c3b-4944-bcd3-2c4b204dc915")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8879], {
        5673: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/staking", function() {
                return n(13060)
            }])
        },
        48172: function(e, t, n) {
            "use strict";
            n.d(t, {
                n: function() {
                    return j
                }
            });
            var s = n(85893),
                o = n(57373),
                r = {
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
                i = n(48583);
            let d = (0, n(95495).O4)("is-campaign-banner-visible", !0);
            var c = n(65984),
                u = n(60967),
                m = n(80929),
                x = n(91992),
                h = n(25675),
                g = n.n(h),
                p = n(18644);

            function j(e) {
                let {
                    isLong: t = !1
                } = e, {
                    md: n
                } = (0, o.a)(), h = (0, c.rZ)(), {
                    isCampaignBannerVisible: j,
                    setIsCampaignBannerVisible: y
                } = function() {
                    let [e, t] = (0, i.KO)(d);
                    return {
                        isCampaignBannerVisible: e,
                        setIsCampaignBannerVisible: t
                    }
                }(), f = () => {
                    y(!j)
                };
                return j ? (0, s.jsxs)(u.e, {
                    href: "https://lfd.tanssi.network/",
                    target: "_blank",
                    style: {
                        position: "relative",
                        display: "block",
                        width: "100%"
                    },
                    children: [(0, s.jsx)(m.E, {
                        component: g(),
                        alt: "Let's Forkin Dance banner",
                        src: n ? t ? r : l : a,
                        style: {
                            width: "100%",
                            height: "auto"
                        },
                        priority: !0,
                        width: 1536,
                        height: 1024
                    }), (0, s.jsx)(x.A, {
                        style: {
                            position: "absolute",
                            top: "3%",
                            right: "2%",
                            backgroundColor: "transparent"
                        },
                        onClick: e => {
                            e.preventDefault(), f()
                        },
                        children: (0, s.jsx)(p.Lp2, {
                            size: 20
                        })
                    }), (0, s.jsx)("div", {
                        style: {
                            position: "absolute",
                            bottom: "3%",
                            right: "2%",
                            backgroundColor: "transparent",
                            color: h.other.colors.white
                        },
                        children: (0, s.jsx)(p.$sw, {
                            size: 20
                        })
                    })]
                }) : null
            }
        },
        18433: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return l
                }
            });
            var s = n(85893),
                o = n(90991),
                r = n(12109),
                a = n(13165);
            let l = (0, n(67294).memo)(function(e) {
                let {
                    isOpen: t,
                    size: n = 24,
                    iconProps: l,
                    ...i
                } = e;
                return (0, s.jsx)(o.M, {
                    w: n,
                    h: n,
                    bg: "dark.6",
                    style: {
                        borderRadius: 8
                    },
                    ...i,
                    children: t ? (0, s.jsx)(r.Z, {
                        size: n / 2,
                        stroke: 3,
                        color: "white",
                        ...l
                    }) : (0, s.jsx)(a.Z, {
                        size: n / 2,
                        stroke: 3,
                        color: "white",
                        ...l
                    })
                })
            })
        },
        23070: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return s.b
                }
            });
            var s = n(76167)
        },
        13060: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return t8
                }
            });
            var s, o, r, a, l, i, d = n(85893),
                c = n(48172),
                u = n(86769),
                m = n(21753),
                x = n(16097);
            let h = {
                Staking: ["Any", "Staking"],
                Governance: ["Any", "Governance", "NonTransfer"]
            };
            var g = n(97016),
                p = n(67294),
                j = n(24166),
                y = n(15427),
                f = n(8207),
                b = n(87194),
                w = n(356),
                v = n(54410),
                k = n(90991),
                A = n(13165);

            function C(e) {
                let {
                    address: t,
                    proxyType: n,
                    config: s
                } = e, o = (0, y.K)(), {
                    proxy: r,
                    setProxy: a
                } = (0, x.e)(), {
                    accounts: l
                } = function(e, t, n) {
                    let {
                        data: s,
                        isLoading: o
                    } = (0, g.w)(n);
                    return {
                        accounts: (0, p.useMemo)(() => {
                            if (null == s ? void 0 : s[e]) return s[e].filter(e => {
                                var n, s;
                                return n = e.proxyType, "Any" === t || (null === (s = h[t]) || void 0 === s ? void 0 : s.includes(n)) || t === n
                            })
                        }, [s, e, t]),
                        isLoading: o
                    }
                }(t, n, s);
                return (0, d.jsx)(f.K, {
                    h: 40,
                    px: "xs",
                    align: "end",
                    gap: "xs",
                    children: (0, d.jsxs)(b.h, {
                        store: o,
                        position: "bottom-end",
                        children: [(0, d.jsx)(b.h.Target, {
                            children: (0, d.jsxs)(w.Z, {
                                gap: 5,
                                style: {
                                    cursor: "default"
                                },
                                onClick: () => o.toggleDropdown(),
                                children: [(null == r ? void 0 : r.proxiedAddress) && (0, d.jsx)(v.x, {
                                    c: "gray.6",
                                    children: "Proxy: "
                                }), (0, d.jsx)(v.x, {
                                    children: r ? (0, j.L)(r.proxiedAddress, 10, 6) : "Use as proxy account"
                                }), (0, d.jsx)(k.M, {
                                    ml: 5,
                                    w: 20,
                                    h: 20,
                                    bg: "dark.6",
                                    style: {
                                        borderRadius: 10
                                    },
                                    children: (0, d.jsx)(A.Z, {
                                        size: 15,
                                        color: "white"
                                    })
                                })]
                            })
                        }), (0, d.jsx)(b.h.Dropdown, {
                            p: "sm",
                            bg: "dark.6",
                            miw: 370,
                            style: {
                                border: "none"
                            },
                            children: (0, d.jsx)(b.h.Options, {
                                children: (null == l ? void 0 : l.length) ? l.map(e => {
                                    let {
                                        address: n,
                                        proxyType: s
                                    } = e;
                                    return (0, d.jsx)(m.z, {
                                        bg: "dark.5",
                                        address: n,
                                        checked: (null == r ? void 0 : r.proxiedAddress) === n,
                                        onChange: () => {
                                            a((null == r ? void 0 : r.proxiedAddress) === n ? void 0 : {
                                                address: t,
                                                proxyType: s,
                                                proxiedAddress: n
                                            }), o.closeDropdown()
                                        }
                                    }, n)
                                }) : (0, d.jsx)(k.M, {
                                    children: (0, d.jsx)(v.x, {
                                        c: "gray.6",
                                        children: "No proxy found."
                                    })
                                })
                            })
                        })]
                    })
                })
            }
            var S = n(96176);

            function M(e) {
                let {
                    proxyType: t,
                    config: n
                } = e, s = (0, S.SF)();
                return s ? (0, d.jsx)(C, {
                    address: s,
                    proxyType: t,
                    config: n
                }) : null
            }
            var B = n(88565);
            let z = (0, p.memo)(function(e) {
                let {
                    size: t,
                    style: n,
                    color: s,
                    ...o
                } = e;
                return (0, d.jsxs)("svg", {
                    width: "14",
                    height: "13",
                    viewBox: "0 0 14 13",
                    fill: "none",
                    stroke: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: {
                        width: (0, B.h)(t),
                        height: (0, B.h)(t),
                        ...n
                    },
                    ...o,
                    children: [(0, d.jsx)("path", {
                        d: "M1 9.31324V5.0731C1 4.33257 1.77687 3.84893 2.44138 4.17578L6.67106 6.25628C7.01305 6.42449 7.22968 6.77248 7.22968 7.1536V11.3937C7.22968 12.1343 6.45281 12.6179 5.78831 12.2911L1.55862 10.2106C1.21664 10.0423 1 9.69436 1 9.31324Z",
                        stroke: s,
                        strokeLinejoin: "round"
                    }), (0, d.jsx)("path", {
                        d: "M7.23169 9.95241L8.46018 10.5567C9.12468 10.8835 9.90156 10.3999 9.90156 9.65936V5.41923C9.90156 5.0381 9.68492 4.69012 9.34293 4.5219L5.11325 2.44141C4.44875 2.11455 3.67188 2.59819 3.67188 3.33873V4.76573",
                        stroke: s,
                        strokeLinejoin: "round"
                    }), (0, d.jsx)("path", {
                        d: "M6.34375 3.0333V1.60631C6.34375 0.865769 7.12062 0.382129 7.78513 0.708984L12.0148 2.78948C12.3568 2.9577 12.5734 3.30568 12.5734 3.6868V7.92694C12.5734 8.66747 11.7966 9.15111 11.1321 8.82426L9.90357 8.21999",
                        stroke: s,
                        strokeLinejoin: "round"
                    })]
                })
            });

            function Z(e) {
                let {
                    size: t,
                    style: n,
                    color: s,
                    ...o
                } = e;
                return (0, d.jsx)("svg", {
                    width: "13",
                    height: "12",
                    viewBox: "0 0 13 12",
                    fill: "none",
                    stroke: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: {
                        width: (0, B.h)(t),
                        height: (0, B.h)(t),
                        ...n
                    },
                    ...o,
                    children: (0, d.jsx)("path", {
                        d: "M5.80078 3.59968V2.13472C5.80078 1.28689 6.78964 0.82373 7.44097 1.3665L12.0789 5.23146C12.5587 5.63126 12.5587 6.36811 12.0789 6.7679L7.44096 10.6329C6.78964 11.1756 5.80078 10.7125 5.80078 9.86464V8.39968M2.64018 1.3665L7.27814 5.23146C7.75789 5.63126 7.75789 6.36811 7.27813 6.7679L2.64018 10.6329C1.98886 11.1756 1 10.7125 1 9.86464V2.13472C1 1.28689 1.98886 0.82373 2.64018 1.3665Z",
                        stroke: s,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }

            function P(e) {
                let t = function(e) {
                        let t = (0, V.h_)(e.ws);
                        return (0, V.ku)(null == t ? void 0 : t.query.pooledStaking.sortedEligibleCandidates, [], es)
                    }(e),
                    n = function(e) {
                        let t = (0, V.h_)(e.ws);
                        return (0, V.ku)(null == t ? void 0 : t.query.invulnerables.invulnerables, [], er)
                    }(e);
                return (0, p.useMemo)(() => {
                    if (t && n) return [...t, ...n].sort()
                }, [t, n])
            }
            var L = n(47530);

            function _(e) {
                return (0, p.useMemo)(() => {
                    if (!e) return;
                    let t = [];
                    for (let n in e.containerChains) t.push(...e.containerChains[n]);
                    return [...e.orchestratorChain, ...t]
                }, [e])
            }
            var R = n(97280),
                D = n(50351);
            let E = {
                total: "total",
                self: "self",
                delegated: "delegated",
                delegations: "delegations",
                apy: "apy"
            };
            var F = n(12116),
                I = n(13012);

            function T(e, t, n) {
                let s = function(e) {
                        let t = (0, V.h_)(e.ws);
                        return (0, V.ku)(null == t ? void 0 : t.query.inflationRewards.chainsToReward, [], eo)
                    }(t),
                    o = H(t),
                    r = U(e, t),
                    a = (0, L.TB)(t);
                if (!e || !o || !s || !a) return;
                let l = Object.keys(o.containerChains).length,
                    i = o.orchestratorChain.length,
                    d = (0, I.Z)(s.toString()).mul(2628e3);
                if (!d) return;
                let c = (0, F.EL)(d, l, a.collatorsPerContainer, i),
                    u = {};
                return e.forEach(e => {
                    let t = (null == r ? void 0 : r[e]) || 0 n,
                        s = (0, I.Z)((t || 1 n).toString()),
                        o = (0, F.bj)(c, s, n);
                    u[e] = Number(o)
                }), u
            }

            function U(e, t) {
                let n = et(e, t),
                    s = en(e, t);
                return (0, p.useMemo)(() => {
                    if (!n || !s || !e) return;
                    let t = {};
                    return e.forEach(e => {
                        let o = n[e],
                            r = s[e];
                        t[e] = (o || 0 n) + (r || 0 n)
                    }), t
                }, [n, e, s])
            }

            function O(e) {
                let {
                    collators: t,
                    shares: n,
                    totalStake: s,
                    sharesSupply: o
                } = e;
                return (0, p.useMemo)(() => {
                    if (!t || !n || !s || !o) return;
                    let e = {};
                    return t.forEach(t => {
                        let r = o[t],
                            a = s[t],
                            l = n[t];
                        r && a && l && (e[t] = l * a / r)
                    }), e
                }, [t, n, o, s])
            }

            function K(e) {
                let t = q(e),
                    n = _(H(e)),
                    s = W(e),
                    o = ed(t, e),
                    r = (0, L.el)(t, e),
                    a = function(e, t, n) {
                        let s = Q({
                                option: "ManualRewardsCounter",
                                collators: e,
                                config: n
                            }),
                            o = Q({
                                option: {
                                    ManualRewardsCheckpoint: {
                                        delegator: (0, ea.H)()
                                    }
                                },
                                collators: e,
                                config: n
                            });
                        if (!s || !o || !e) return;
                        let r = {};
                        return e.forEach(e => {
                            let n = s[e],
                                a = o[e],
                                l = null == t ? void 0 : t[e];
                            n && l && a && (r[e] = (n - a) * l)
                        }), r
                    }(t, o, e),
                    l = Y(t, e),
                    i = function(e, t) {
                        let n = ed(e, t),
                            s = en(e, t),
                            o = ee(e, t);
                        return (0, p.useMemo)(() => {
                            if (!e || !n || !s || !o) return;
                            let t = {};
                            return e.forEach(e => {
                                let r = o[e],
                                    a = s[e],
                                    l = n[e];
                                r && a && l && (t[e] = l * a / r)
                            }), t
                        }, [e, n, s, o])
                    }(t, e),
                    d = U(t, e);
                return (0, p.useMemo)(() => {
                    if (t && l && i) return t.map(t => ({
                        address: t,
                        identity: null == r ? void 0 : r[t],
                        isActive: !!(null == n ? void 0 : n.includes(t)),
                        isUpcoming: !!(null == s ? void 0 : s.includes(t)),
                        delegation: {
                            auto: D.nE.fromAsset(e.asset, {
                                amount: (null == l ? void 0 : l[t]) || 0 n,
                                decimals: e.decimals
                            }),
                            manual: D.nE.fromAsset(e.asset, {
                                amount: (null == i ? void 0 : i[t]) || 0 n,
                                decimals: e.decimals
                            }),
                            total: D.nE.fromAsset(e.asset, {
                                amount: ((null == l ? void 0 : l[t]) || 0 n) + ((null == i ? void 0 : i[t]) || 0 n),
                                decimals: e.decimals
                            })
                        },
                        totalStake: D.nE.fromAsset(e.asset, {
                            amount: (null == d ? void 0 : d[t]) || 0 n,
                            decimals: e.decimals
                        }),
                        manualRewards: D.nE.fromAsset(e.asset, {
                            amount: (null == a ? void 0 : a[t]) || 0 n,
                            decimals: e.decimals
                        })
                    })).sort((e, t) => Number(t.delegation.total.amount - e.delegation.total.amount))
                }, [e.asset, e.decimals, n, s, t, l, i, r, d, a])
            }

            function q(e) {
                let t = P(e),
                    n = ei(t, e),
                    s = ed(t, e);
                return (0, p.useMemo)(() => {
                    if (t && n && s) return t.filter(e => !!n[e] || !!s[e])
                }, [t, n, s])
            }
            var N = n(3117);

            function W(e) {
                let t = function(e) {
                        let t = (0, V.h_)(e.ws);
                        return (0, V.ku)(null == t ? void 0 : t.query.collatorAssignment.pendingCollatorContainerChain, [], el)
                    }(e),
                    n = H(e);
                return _((0, p.useMemo)(() => (null == t ? void 0 : t.orchestratorChain.length) === 0 && 0 === Object.keys(null == t ? void 0 : t.containerChains).length, [null == t ? void 0 : t.containerChains, null == t ? void 0 : t.orchestratorChain.length]) ? n : t)
            }

            function Y(e, t) {
                let n = ei(e, t),
                    s = et(e, t),
                    o = J(e, t);
                return O({
                    collators: e,
                    shares: n,
                    totalStake: s,
                    sharesSupply: o
                })
            }
            var V = n(40958);

            function H(e) {
                let t = (0, V.h_)(e.ws);
                return (0, V.ku)(null == t ? void 0 : t.query.collatorAssignment.collatorContainerChain, [], X)
            }

            function X(e) {
                return e.toHuman()
            }
            var G = n(99673);

            function Q(e) {
                let {
                    collators: t,
                    option: n,
                    config: s
                } = e, o = (0, V.h_)(s.ws), r = (0, p.useMemo)(() => t ? t.map(e => [e, n]) : void 0, [t, n]);
                return (0, V.ku)(null == o ? void 0 : o.query.pooledStaking.pools.multi, [r], e => $(e, t))
            }

            function $(e, t) {
                let n = {};
                return e.forEach((e, s) => {
                    (null == t ? void 0 : t[s]) && (n[null == t ? void 0 : t[s]] = e.toBigInt())
                }), n
            }

            function J(e, t) {
                return Q({
                    option: "AutoCompoundingSharesSupply",
                    collators: e,
                    config: t
                })
            }

            function ee(e, t) {
                return Q({
                    option: "ManualRewardsSharesSupply",
                    collators: e,
                    config: t
                })
            }

            function et(e, t) {
                return Q({
                    option: "AutoCompoundingSharesTotalStaked",
                    collators: e,
                    config: t
                })
            }

            function en(e, t) {
                return Q({
                    option: "ManualRewardsSharesTotalStaked",
                    collators: e,
                    config: t
                })
            }

            function es(e) {
                return e.map(e => {
                    let {
                        candidate: t
                    } = e;
                    return t.toString()
                })
            }

            function eo(e) {
                return e.rewardsPerChain.toBigInt()
            }

            function er(e) {
                return e.map(e => e.toString())
            }
            var ea = n(8575);

            function el(e) {
                return e.toHuman()
            }

            function ei(e, t) {
                return Q({
                    option: {
                        AutoCompoundingShares: {
                            delegator: (0, ea.H)()
                        }
                    },
                    collators: e,
                    config: t
                })
            }

            function ed(e, t) {
                return Q({
                    option: {
                        ManualRewardsShares: {
                            delegator: (0, ea.H)()
                        }
                    },
                    collators: e,
                    config: t
                })
            }

            function ec(e) {
                return e.toBigInt()
            }

            function eu(e) {
                return e.toBigInt()
            }
            var em = n(78551),
                ex = n(30202),
                eh = n(96318);

            function eg(e) {
                let t = (0, eh.h)(e.ws),
                    n = (0, ea.H)();
                return (0, em.a)({
                    queryKey: ["pendingOperations", n],
                    queryFn: async () => {
                        let s = await (null == t ? void 0 : t.query.pooledStaking.pendingOperations.entries(n));
                        return s ? s.map(t => {
                            let [n, s] = t, [o, r] = n.toHuman(), a = Object.keys(r)[0], {
                                candidate: l,
                                at: i
                            } = r[a];
                            return {
                                id: n.toHex(),
                                type: a,
                                delegator: o,
                                candidate: l,
                                amount: D.nE.fromAsset(e.asset, {
                                    amount: BigInt(s.toString()),
                                    decimals: e.decimals
                                }),
                                at: +i.replaceAll(",", "")
                            }
                        }) : void 0
                    },
                    enabled: !!t && !!n
                })
            }

            function ep() {
                let e = (0, ea.H)(),
                    t = (0, ex.NL)();
                return (0, p.useCallback)(() => {
                    t.invalidateQueries({
                        queryKey: ["pendingOperations", e]
                    })
                }, [e, t])
            }
            var ej = n(54295),
                ey = n(97165);

            function ef(e) {
                let {
                    onEvents: t,
                    onSuccess: n,
                    onError: s
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = (0, eh.h)(e.ws), r = ep(), {
                    transactionSuccess: a
                } = (0, ej.o)(e), {
                    isLoading: l,
                    send: i
                } = (0, ey.X)({
                    tx: null == o ? void 0 : o.tx.pooledStaking.executePendingOperations,
                    config: e,
                    notify: {
                        notifyOnSuccess: !1
                    },
                    onEvents: t,
                    onError: s,
                    onSuccess(e, t) {
                        null == n || n(e, t), r(), a({
                            txHash: e,
                            blockHash: t,
                            title: "Operations were successfully executed",
                            message: "All staking pending operations have been executed."
                        })
                    }
                });
                return {
                    isLoading: l,
                    send: async e => i(e.map(eb))
                }
            }

            function eb(e) {
                let {
                    delegator: t,
                    type: n,
                    candidate: s,
                    at: o
                } = e;
                return {
                    delegator: t,
                    operation: {
                        [n]: {
                            candidate: s,
                            at: o
                        }
                    }
                }
            }
            var ew = n(24642);

            function ev(e, t) {
                if (!Number.isInteger(t) || t < 0 || t > 100) throw Error("Percentage must be an integer between 0 and 100");
                let n = new I.Z(e.toString()),
                    s = n.times(t / 100).toFixed(0),
                    o = n.minus(s);
                return [BigInt(s), BigInt(o.toFixed(0))]
            }

            function ek(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
                    s = new I.Z(t.toString()),
                    o = new I.Z(e.toString());
                return s.gt(0) ? Number(o.div(s).times(100).toFixed(n)) : 0
            }

            function eA(e) {
                let t = (0, eh.h)(e.ws),
                    {
                        close: n
                    } = (0, ew.A)(),
                    s = ep(),
                    {
                        transactionSuccess: o
                    } = (0, ej.o)(e),
                    {
                        isLoading: r,
                        send: a
                    } = (0, ey.X)({
                        tx: null == t ? void 0 : t.tx.pooledStaking.requestUndelegate,
                        config: e,
                        notify: {
                            notifyOnSuccess: !1
                        },
                        onSuccess: (e, t) => {
                            n(), s(), o({
                                txHash: e,
                                blockHash: t,
                                title: "Your decrease request was successfully submitted",
                                message: "Your shares has now entered the leaving pool."
                            })
                        }
                    });
                return {
                    isLoading: r,
                    send: async (e, t, n) => a(e, t, n)
                }
            }
            var eC = n(63622);
            (s = a || (a = {})).All = "All", s.Active = "Active", s.Upcoming = "Upcoming", s.Waiting = "Waiting";
            let eS = [{
                    value: "All",
                    icon: null,
                    description: null
                }, {
                    value: "Active",
                    icon: (0, d.jsx)(z, {}),
                    description: "Block Producers who are actively producing block this session."
                }, {
                    value: "Upcoming",
                    icon: (0, d.jsx)(Z, {}),
                    description: "Block Producers who are selected to produce blocks in the upcoming session."
                }, {
                    value: "Waiting",
                    icon: (0, d.jsx)(eC.Z, {
                        size: 18
                    }),
                    description: "Block Producers waiting to be eligible to produce blocks in future sessions."
                }],
                eM = [{
                    value: "Delegated Stake",
                    key: E.delegated
                }, {
                    value: "Self-stake",
                    key: E.self
                }, {
                    value: "Total Stake",
                    key: E.total
                }, {
                    value: "Delegations",
                    key: E.delegations
                }, {
                    value: "APY",
                    key: E.apy
                }];
            var eB = n(23070);
            let ez = (0, p.memo)(function() {
                return (0, d.jsx)(eB.b, {
                    children: (0, d.jsx)(v.x, {
                        size: "sm",
                        c: "gray.4",
                        children: "This is an estimated APY based on the current total staking amount. Please note that this value will be influenced by the amount you stake and could be affected by pending amounts waiting to enter. Therefore, it's not guaranteed that the reflected APY will be accurate at the time of entering the pool."
                    })
                })
            });
            var eZ = n(12109);
            let eP = (0, p.memo)(function(e) {
                let {
                    children: t,
                    sortedBy: n,
                    sortingKey: s,
                    sortBy: o,
                    ...r
                } = e;
                return (0, d.jsxs)(w.Z, {
                    gap: 0,
                    justify: "end",
                    wrap: "nowrap",
                    style: {
                        cursor: "pointer"
                    },
                    onClick: () => s && (null == o ? void 0 : o(s)),
                    ...r,
                    children: [(0, d.jsx)(v.x, {
                        c: (null == n ? void 0 : n.key) === s ? "white" : "gray.6",
                        children: t
                    }), o && s && n && (0, d.jsxs)(f.K, {
                        gap: 0,
                        ml: 2,
                        children: [(0, d.jsx)(eZ.Z, {
                            size: 12,
                            stroke: 2.5,
                            color: (null == n ? void 0 : n.key) !== s || (null == n ? void 0 : n.isDesc) ? "var(--mantine-color-gray-7)" : "white",
                            style: {
                                marginBottom: -3
                            }
                        }), (0, d.jsx)(A.Z, {
                            size: 12,
                            stroke: 2.5,
                            color: (null == n ? void 0 : n.key) === s && (null == n ? void 0 : n.isDesc) ? "white" : "var(--mantine-color-gray-7)",
                            style: {
                                marginTop: -2
                            }
                        })]
                    })]
                })
            });
            var eL = n(65984),
                e_ = n(102),
                eR = n(24920);
            let eD = (0, p.memo)(function(e) {
                    let {
                        sortedBy: t,
                        sortBy: n,
                        opened: s
                    } = e, o = (0, eL.rZ)();
                    return (0, d.jsx)(e_.U, { in: s,
                        mt: 25,
                        children: (0, d.jsx)(f.K, {
                            bg: o.colors.dark[8],
                            style: {
                                borderRadius: "12px"
                            },
                            p: 5,
                            children: eM.map(e => (0, d.jsx)(w.Z, {
                                children: (0, d.jsx)(eR.z, {
                                    fullWidth: !0,
                                    justify: "left",
                                    p: 10,
                                    style: {
                                        border: 0,
                                        textAlign: "left",
                                        paddingLeft: "10px"
                                    },
                                    bg: e.key === t.key ? o.colors.dark[6] : o.colors.dark[8],
                                    leftSection: e.key === E.apy && (0, d.jsx)(ez, {}),
                                    children: (0, d.jsx)(eP, {
                                        sortingKey: e.key,
                                        sortedBy: t,
                                        sortBy: n,
                                        children: e.value
                                    })
                                })
                            }, e.value))
                        })
                    })
                }),
                eE = (0, p.memo)(function(e) {
                    let {
                        setActiveTab: t,
                        activeTab: n,
                        opened: s
                    } = e, o = (0, eL.rZ)();
                    return (0, d.jsx)(e_.U, { in: s,
                        mt: 25,
                        children: (0, d.jsx)(f.K, {
                            bg: o.colors.dark[8],
                            style: {
                                borderRadius: "12px"
                            },
                            p: 5,
                            children: eS.map(e => (0, d.jsx)(eR.z, {
                                fullWidth: !0,
                                p: 10,
                                onClick: () => t(e.value),
                                bg: n === e.value ? o.colors.dark[6] : o.colors.dark[8],
                                style: {
                                    border: 0,
                                    textAlign: "left",
                                    paddingLeft: "10px"
                                },
                                c: n === e.value ? o.other.colors.white : o.colors.dark[4],
                                leftSection: e.icon,
                                justify: "left",
                                children: e.value
                            }, e.value))
                        })
                    })
                });
            var eF = n(66961),
                eI = n(37113),
                eT = n(18644),
                eU = n(54425);
            let eO = (0, p.memo)(function(e) {
                let {
                    sortedBy: t,
                    activeTab: n,
                    sortBy: s,
                    setActiveTab: o
                } = e, r = (0, eL.rZ)(), [l, {
                    toggle: i
                }] = (0, eI.q)(!1), [c, {
                    toggle: u
                }] = (0, eI.q)(!1), m = n || a.All;
                return (0, d.jsxs)(f.K, {
                    gap: 0,
                    children: [(0, d.jsxs)(w.Z, {
                        justify: "space-between",
                        wrap: "nowrap",
                        children: [(0, d.jsxs)(eR.z, {
                            onClick: u,
                            bg: r.colors.dark[7],
                            style: {
                                border: 0
                            },
                            children: [(0, d.jsx)(eT.fuK, {
                                size: 25
                            }), "Filter"]
                        }), (0, d.jsxs)(eR.z, {
                            onClick: i,
                            bg: r.colors.dark[7],
                            style: {
                                border: 0
                            },
                            children: [(0, d.jsx)(eU.Sr8, {
                                size: 25
                            }), "Order"]
                        }), (0, d.jsx)(eR.z, {
                            onClick: () => {
                                o(a.All), s(E.total)
                            },
                            bg: r.colors.dark[7],
                            style: {
                                border: 0
                            },
                            children: "Clear"
                        })]
                    }), (0, d.jsxs)(eF.r, {
                        mb: 20,
                        children: [(0, d.jsx)(eF.r.Col, {
                            span: 5,
                            p: 5,
                            children: (0, d.jsx)(eE, {
                                opened: c,
                                activeTab: m,
                                setActiveTab: o
                            })
                        }), (0, d.jsx)(eF.r.Col, {
                            span: 7,
                            p: 5,
                            children: (0, d.jsx)(eD, {
                                opened: l,
                                sortedBy: t,
                                sortBy: s
                            })
                        })]
                    })]
                })
            });
            var eK = n(93445);
            let eq = (0, p.memo)(function(e) {
                let {
                    sortedBy: t,
                    sortBy: n
                } = e;
                return (0, d.jsxs)(eF.r, {
                    px: "md",
                    columns: 23,
                    children: [(0, d.jsx)(eF.r.Col, {
                        span: 4.2,
                        children: (0, d.jsx)(eP, {
                            justify: "start",
                            children: "Block Producers"
                        })
                    }), (0, d.jsx)(eF.r.Col, {
                        span: 3.75,
                        children: (0, d.jsx)(eP, {
                            sortingKey: E.delegated,
                            sortedBy: t,
                            sortBy: n,
                            children: "Delegated Stake"
                        })
                    }), (0, d.jsx)(eF.r.Col, {
                        span: 3.75,
                        children: (0, d.jsx)(eP, {
                            sortingKey: E.self,
                            sortedBy: t,
                            sortBy: n,
                            children: "Self-stake"
                        })
                    }), (0, d.jsx)(eF.r.Col, {
                        span: 3.75,
                        children: (0, d.jsx)(eP, {
                            sortingKey: E.total,
                            sortedBy: t,
                            sortBy: n,
                            children: "Total Stake"
                        })
                    }), (0, d.jsx)(eF.r.Col, {
                        span: 3.1,
                        children: (0, d.jsx)(eP, {
                            pl: "lg",
                            justify: "center",
                            sortingKey: E.delegations,
                            sortedBy: t,
                            sortBy: n,
                            children: "Delegations"
                        })
                    }), (0, d.jsx)(eF.r.Col, {
                        span: 4,
                        children: (0, d.jsxs)(w.Z, {
                            grow: !0,
                            children: [(0, d.jsxs)(w.Z, {
                                align: "center",
                                justify: "center",
                                gap: 5,
                                wrap: "nowrap",
                                children: [(0, d.jsx)(ez, {}), (0, d.jsx)(eP, {
                                    justify: "start",
                                    sortingKey: E.apy,
                                    sortedBy: t,
                                    sortBy: n,
                                    children: "APY"
                                })]
                            }), (0, d.jsx)(eK.x, {})]
                        })
                    })]
                })
            });
            var eN = n(81888),
                eW = n(15687),
                eY = n.n(eW);
            let eV = (0, p.memo)(function() {
                    return (0, d.jsx)(eN.m.List, {
                        ml: "md",
                        className: eY().tabList,
                        children: eS.map(e => (0, d.jsxs)(eN.m.Tab, {
                            value: e.value,
                            children: [e.icon, e.value]
                        }, e.value))
                    })
                }),
                eH = (0, p.memo)(function(e) {
                    let {
                        activeTab: t
                    } = e;
                    return (0, d.jsx)(d.Fragment, {
                        children: t !== a.All && (0, d.jsx)(w.Z, {
                            bg: "dark.8",
                            p: "xs",
                            gap: 5,
                            style: {
                                borderRadius: 15
                            },
                            children: eS.map(e => t === e.value && (0, d.jsxs)(w.Z, {
                                children: [(0, d.jsx)(z, {}), (0, d.jsx)(v.x, {
                                    c: "gray.6",
                                    fw: 300,
                                    children: e.description
                                })]
                            }, e.value))
                        })
                    })
                });
            var eX = n(65437),
                eG = n(18433),
                eQ = n(23078),
                e$ = n(3175),
                eJ = n(99535),
                e0 = n(71723),
                e1 = n(60950);
            let e6 = (0, p.memo)(function(e) {
                let {
                    children: t,
                    address: n,
                    ...s
                } = e;
                return t ? (0, d.jsxs)(e1.z, {
                    openDelay: 400,
                    ...s,
                    children: [(0, d.jsx)(e1.z.Target, {
                        children: (0, d.jsx)(eK.x, {
                            component: "span",
                            children: t
                        })
                    }), (0, d.jsx)(e1.z.Dropdown, {
                        w: "auto",
                        style: {
                            zIndex: 1e3
                        },
                        children: (0, d.jsxs)(w.Z, {
                            gap: 5,
                            children: [(0, d.jsx)(v.x, {
                                size: "sm",
                                children: n
                            }), (0, d.jsx)(e0.T, {
                                value: n,
                                size: 20
                            })]
                        })
                    })]
                }) : null
            });
            var e5 = n(57373),
                e2 = n(57187);
            let e3 = (0, p.memo)(function(e) {
                let {
                    address: t,
                    display: n,
                    maxLength: s = 9,
                    size: o = "sm",
                    shadowColor: r
                } = e, a = (0, eL.rZ)(), l = r || a.colors.dark[8], {
                    xxl: i
                } = (0, e5.a)(), c = (0, j.A)(t, i ? "md" : "sm"), u = n ? n.length >= s : void 0;
                return (0, d.jsx)(eK.x, {
                    ml: "xs",
                    style: {
                        flexGrow: 1,
                        overflow: "hidden",
                        whiteSpace: "nowrap"
                    },
                    children: (0, d.jsx)(e6, {
                        address: t,
                        children: (0, d.jsxs)(v.x, {
                            pos: "relative",
                            size: o,
                            style: {
                                whiteSpace: "nowrap"
                            },
                            children: [n || c, u && (0, d.jsx)(eK.x, {
                                component: "span",
                                pos: "absolute",
                                top: 0,
                                right: 0,
                                bottom: 0,
                                w: 30,
                                bg: "linear-gradient(90deg, ".concat((0, e2.m)(l, .1), " 0%, ").concat((0, e2.m)(l, 1), " 100%)")
                            })]
                        })
                    })
                })
            });
            var e4 = n(69332),
                e8 = n(1032);
            let e9 = (0, p.memo)(function(e) {
                let {
                    address: t,
                    size: n = 30,
                    isActive: s,
                    isUpcoming: o,
                    outerBg: r = "dark.6"
                } = e, a = (0, eL.rZ)();
                return (0, d.jsxs)(k.M, {
                    p: 4,
                    bg: r,
                    pos: "relative",
                    style: {
                        borderRadius: "50%"
                    },
                    children: [(0, d.jsx)(e6, {
                        address: t,
                        children: (0, d.jsx)(e4.k, {
                            value: t,
                            size: n
                        })
                    }), o && (0, d.jsx)(e8.u, {
                        label: "Block Producers who are selected to produce blocks in the upcoming session.",
                        children: (0, d.jsx)(k.M, {
                            w: 18,
                            h: 18,
                            bg: a.other.colors.blue,
                            pos: "absolute",
                            top: 26,
                            right: -8,
                            style: {
                                border: "1px solid ".concat((0, e2.m)(a.other.colors.white, .1)),
                                borderRadius: "50%"
                            },
                            children: (0, d.jsx)(Z, {
                                size: 11,
                                color: "white"
                            })
                        })
                    }), s && (0, d.jsx)(e8.u, {
                        label: "Block Producers who are actively producing block this session.",
                        children: (0, d.jsx)(k.M, {
                            w: 18,
                            h: 18,
                            bg: a.primaryColor,
                            pos: "absolute",
                            top: -8,
                            right: -8,
                            style: {
                                border: "1px solid ".concat((0, e2.m)(a.other.colors.white, .1)),
                                borderRadius: "50%"
                            },
                            children: (0, d.jsx)(z, {
                                size: 13,
                                color: "white"
                            })
                        })
                    })]
                })
            });

            function e7(e) {
                let {
                    address: t,
                    identity: n
                } = e, s = (0, eL.rZ)();
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(v.x, {
                        children: "Block Producer"
                    }), (0, d.jsxs)(w.Z, {
                        align: "center",
                        mt: "sm",
                        pl: "xs",
                        pr: "xl",
                        py: 5,
                        bg: "dark.6",
                        gap: 0,
                        wrap: "nowrap",
                        style: {
                            borderRadius: 10
                        },
                        children: [(0, d.jsx)(e9, {
                            address: t,
                            outerBg: "dark.7",
                            size: 25
                        }), (0, d.jsx)(e3, {
                            address: t,
                            display: null == n ? void 0 : n.display,
                            maxLength: 22,
                            shadowColor: s.colors.dark[6]
                        })]
                    })]
                })
            }
            let te = (0, p.memo)(function(e) {
                let {
                    value: t,
                    h: n = 10,
                    ...s
                } = e, o = (0, eL.rZ)();
                return (0, d.jsx)(eK.x, {
                    pos: "relative",
                    bg: o.other.colors.amber,
                    h: n,
                    w: s.w,
                    ...s,
                    style: { ...s.style,
                        borderRadius: 10,
                        overflow: "hidden"
                    },
                    children: (0, d.jsx)(eK.x, {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            width: "".concat(t, "%"),
                            backgroundColor: o.colors.tanssiTeal[9]
                        }
                    })
                })
            });

            function tt(e) {
                var t;
                let {
                    collatorAddress: n,
                    collatorTotalStake: s,
                    manualAssetAmount: o,
                    autoAssetAmount: r,
                    autoPercentage: a,
                    amount: l,
                    config: i,
                    isExit: c = !1,
                    isDecrease: u = !1
                } = e, m = (0, eL.rZ)(), x = o.toBig().add(r.toBig()), h = l ? u ? l.toBig().neg() : l.toBig() : void 0, g = T([n], i, h), p = s.toBig().gt(0) && h ? x.div(s.toBig().add(h)).times(100) : void 0, j = p && p.gt(0) ? p.gt(100) ? 100 : null == p ? void 0 : p.toNumber() : 0;
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(v.x, {
                        size: "xl",
                        py: "md",
                        px: "md",
                        ta: "center",
                        style: {
                            borderBottom: "1px solid var(--mantine-color-gray-9)"
                        },
                        children: "Projected Stake Position"
                    }), (0, d.jsxs)(eK.x, {
                        py: "lg",
                        px: "md",
                        children: [(0, d.jsxs)(w.Z, {
                            py: 6,
                            justify: "space-between",
                            style: {
                                borderBottom: "1px solid var(--mantine-color-gray-9)"
                            },
                            children: [(0, d.jsx)(v.x, {
                                c: "gray.6",
                                children: "Auto:"
                            }), (0, d.jsx)(eQ.d, {
                                amount: r,
                                size: "md",
                                symbolColor: "gray.6",
                                "data-testid": "projected-auto-stake"
                            })]
                        }), (0, d.jsxs)(w.Z, {
                            py: "xs",
                            justify: "space-between",
                            style: {
                                borderBottom: "1px solid var(--mantine-color-gray-9)"
                            },
                            children: [(0, d.jsx)(v.x, {
                                c: "gray.6",
                                children: "Manual:"
                            }), (0, d.jsx)(eQ.d, {
                                amount: o,
                                size: "md",
                                symbolColor: "gray.6",
                                "data-testid": "projected-manual-stake"
                            })]
                        }), !c && (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsxs)(w.Z, {
                                py: 6,
                                justify: "space-between",
                                style: {
                                    borderBottom: "1px solid var(--mantine-color-gray-9)"
                                },
                                children: [(0, d.jsx)(v.x, {
                                    c: "gray.6",
                                    children: "Share of the pool:"
                                }), (0, d.jsxs)(v.x, {
                                    children: [j.toFixed(2), "%"]
                                })]
                            }), (0, d.jsxs)(w.Z, {
                                py: 6,
                                justify: "space-between",
                                style: {
                                    borderBottom: "1px solid var(--mantine-color-gray-9)"
                                },
                                children: [(0, d.jsx)(v.x, {
                                    c: "gray.6",
                                    children: "Estimated APY:"
                                }), (0, d.jsxs)(v.x, {
                                    children: [(null == g ? void 0 : g[n]) && g[n] > 9999 ? ">9000.00" : null == g ? void 0 : null === (t = g[n]) || void 0 === t ? void 0 : t.toFixed(2), "%"]
                                })]
                            })]
                        }), (0, d.jsxs)(w.Z, {
                            py: 6,
                            justify: "space-between",
                            children: [(0, d.jsxs)(w.Z, {
                                gap: 5,
                                children: [(0, d.jsx)(eK.x, {
                                    w: 10,
                                    h: 10,
                                    bg: m.colors.tanssiTeal[9],
                                    style: {
                                        borderRadius: "50%"
                                    }
                                }), (0, d.jsx)(v.x, {
                                    c: "gray.6",
                                    children: "Manual Stake"
                                })]
                            }), (0, d.jsxs)(w.Z, {
                                gap: 5,
                                children: [(0, d.jsx)(v.x, {
                                    c: "gray.6",
                                    children: "Auto Stake"
                                }), (0, d.jsx)(eK.x, {
                                    w: 10,
                                    h: 10,
                                    bg: m.other.colors.amber,
                                    style: {
                                        borderRadius: "50%"
                                    }
                                })]
                            })]
                        }), (0, d.jsx)(te, {
                            value: 100 - Number(a),
                            h: 6
                        }), (0, d.jsxs)(w.Z, {
                            py: 6,
                            justify: "space-between",
                            gap: 0,
                            children: [(0, d.jsxs)(v.x, {
                                w: 48,
                                size: "sm",
                                c: m.colors.tanssiTeal[9],
                                children: [(100 - Number(a)).toFixed(2), "%"]
                            }), (0, d.jsxs)(v.x, {
                                w: 48,
                                size: "sm",
                                c: m.other.colors.amber,
                                ta: "right",
                                children: [Number(a).toFixed(2), "%"]
                            })]
                        })]
                    })]
                })
            }
            var tn = n(29820),
                ts = n(20770),
                to = n.n(ts);

            function tr(e) {
                let {
                    percentage: t,
                    leftColor: n,
                    rightColor: s,
                    ...o
                } = e, r = (0, eL.rZ)(), a = n || r.colors.tanssiTeal[9], l = s || r.other.colors.amber;
                return (0, d.jsx)(tn.i, {
                    label: e => "".concat(e, "%"),
                    value: t,
                    labelAlwaysOn: !0,
                    size: 10,
                    thumbSize: 16,
                    marks: [{
                        value: 20
                    }, {
                        value: 30
                    }, {
                        value: 40
                    }, {
                        value: 50
                    }, {
                        value: 60
                    }, {
                        value: 70
                    }, {
                        value: 80
                    }],
                    classNames: {
                        track: to().track,
                        mark: to().mark
                    },
                    style: {
                        "--slider-color": a,
                        "--slider-right-color": l
                    },
                    styles: e => {
                        let {
                            colors: t
                        } = e;
                        return {
                            markWrapper: {
                                top: 2
                            },
                            mark: {
                                width: 6,
                                height: 6
                            },
                            label: {
                                top: 15,
                                padding: "".concat((0, B.h)(1), " ").concat((0, B.h)(7)),
                                backgroundColor: t.dark[6],
                                fontSize: (0, B.h)(10)
                            },
                            thumb: {
                                backgroundColor: "white",
                                border: "5px solid ".concat(t.gray[6])
                            }
                        }
                    },
                    ...o
                })
            }
            var ta = n(62586),
                tl = n(85623),
                ti = n(80596),
                td = n(81441),
                tc = n(83215),
                tu = n(8453),
                tm = n(1604);

            function tx(e) {
                let {
                    title: t,
                    collatorAddress: n,
                    collatorIdentity: s,
                    collatorTotalStake: o,
                    delegation: r,
                    config: a,
                    goBack: l
                } = e, i = (0, S.SF)(), c = (0, L.wq)(a), u = (0, ta.B4)(a), {
                    isLoading: m,
                    send: x,
                    getFee: h
                } = function(e) {
                    let {
                        isLoading: t,
                        send: n,
                        getFee: s
                    } = function(e) {
                        let t = (0, eh.h)(e.ws),
                            n = ep(),
                            {
                                close: s
                            } = (0, ew.A)(),
                            {
                                transactionSuccess: o
                            } = (0, ej.o)(e),
                            {
                                isLoading: r,
                                send: a,
                                getFee: l
                            } = (0, ey.X)({
                                tx: null == t ? void 0 : t.tx.pooledStaking.requestDelegate,
                                config: e,
                                notify: {
                                    notifyOnSuccess: !1
                                },
                                onSuccess: (e, t) => {
                                    s(), n(), o({
                                        txHash: e,
                                        blockHash: t,
                                        title: "Delegation was successfully requested",
                                        message: "Your delegation staking amount have now entered the joining pool."
                                    })
                                }
                            });
                        return {
                            isLoading: r,
                            send: async (e, t, n) => a(e, t, n),
                            getFee: async (e, t, n) => l(e, t, n)
                        }
                    }(e), {
                        isLoading: o,
                        send: r,
                        getFee: a
                    } = function(e) {
                        let {
                            close: t
                        } = (0, ew.A)(), n = (0, eh.h)(e.ws), s = ep(), {
                            transactionSuccess: o
                        } = (0, ej.o)(e), {
                            isLoading: r,
                            send: a,
                            getFee: l
                        } = (0, ey.X)({
                            tx: null == n ? void 0 : n.tx.utility.batch,
                            config: e,
                            notify: {
                                notifyOnSuccess: !1
                            },
                            onSuccess: (e, n) => {
                                t(), s(), o({
                                    txHash: e,
                                    blockHash: n,
                                    title: "Delegation was successfully requested",
                                    message: "Your delegation staking amount have now entered the joining pool."
                                })
                            }
                        }), i = (0, p.useCallback)((e, t, s) => {
                            if (!n) return [];
                            let [o, r] = ev(t, s);
                            return [n.tx.pooledStaking.requestDelegate(e, "AutoCompounding", o), n.tx.pooledStaking.requestDelegate(e, "ManualRewards", r)]
                        }, [n]);
                        return {
                            isLoading: r,
                            send: async (e, t, n) => a(i(e, t, n)),
                            getFee: async (e, t, n) => l(i(e, t, n))
                        }
                    }(e);
                    return {
                        isLoading: t || o,
                        send: async (e, t, s) => 0 === s ? n(e, "ManualRewards", t) : 100 === s ? n(e, "AutoCompounding", t) : r(e, t, s),
                        getFee: async (e, t, n) => 0 === n ? s(e, "ManualRewards", t) : 100 === n ? s(e, "AutoCompounding", t) : a(e, t, n)
                    }
                }(a), g = (0, eL.rZ)(), j = (0, td.c)({
                    validate: (0, tc.F)(tm.z.object({
                        amount: (0, tl.k7)(tm.z.coerce.number().positive()),
                        autoPercentage: tm.z.coerce.number().int().min(0).max(100)
                    })),
                    initialValues: {
                        amount: "",
                        autoPercentage: 50
                    }
                }), y = (0, tu.Gh)(j.values.amount || 0, a.decimals), f = a.getAssetAmount(y), [b, A] = ev(f.amount, j.values.autoPercentage), C = a.getAssetAmount(b + ((null == r ? void 0 : r.auto.amount) || 0 n)), M = a.getAssetAmount(A + ((null == r ? void 0 : r.manual.amount) || 0 n)), B = (0, p.useCallback)(async () => {
                    let e = await h(n, f.amount, j.values.autoPercentage);
                    if (!e || !c || !u) {
                        j.setFieldError("amount", "Something went wrong. Please try again later.");
                        return
                    }
                    let t = c.amount - e.amount - u.amount;
                    if (!(t < 0 n)) return a.getAssetAmount(t);
                    j.setFieldError("amount", "Amount entered isn't enough to cover transaction fee and existential deposit.")
                }, [a, n, j, c, f.amount, u, h]), z = (0, p.useCallback)(async () => {
                    let e = await B();
                    e && j.setValues({
                        amount: e.toDecimal()
                    })
                }, [j, B]), Z = async () => {
                    let e = await B();
                    if (e) {
                        if (f.amount > e.amount) {
                            j.setFieldError("amount", "Amount exceeds available balance.");
                            return
                        }
                        x(n, f.amount, j.values.autoPercentage)
                    }
                };
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(e$.$l, {
                        title: t,
                        goBack: l
                    }), (0, d.jsx)(eK.x, {
                        py: "md",
                        px: "md",
                        style: {
                            borderBottom: "1px solid var(--mantine-color-gray-9)"
                        },
                        children: i ? (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)(v.x, {
                                size: "sm",
                                children: "You can open a staking position with:"
                            }), (0, d.jsxs)(ti.a, {
                                c: "white",
                                ml: "xs",
                                style: {
                                    fontSize: 13
                                },
                                children: [(0, d.jsx)(ti.a.Item, {
                                    mt: 5,
                                    children: "Auto: compounding to increase position."
                                }), (0, d.jsx)(ti.a.Item, {
                                    children: "Manual: claimable upon distribution."
                                })]
                            })]
                        }) : (0, d.jsx)(e$.Qf, {
                            title: "Connect Wallet",
                            description: "Please connect your wallet to stake"
                        })
                    }), (0, d.jsxs)("form", {
                        onSubmit: j.onSubmit(Z),
                        style: {
                            opacity: i ? void 0 : .5
                        },
                        children: [(0, d.jsxs)(eK.x, {
                            py: "md",
                            px: "md",
                            style: {
                                borderBottom: "1px solid var(--mantine-color-gray-9)"
                            },
                            children: [(0, d.jsx)(e7, {
                                address: n,
                                identity: s
                            }), (0, d.jsx)(eJ.U, {
                                mt: "md",
                                label: "Amount",
                                value: j.values.amount,
                                symbol: a.asset.originSymbol,
                                onMax: z,
                                disabled: !i,
                                ...j.getInputProps("amount")
                            }), i && (0, d.jsxs)(d.Fragment, {
                                children: [(0, d.jsxs)(w.Z, {
                                    mt: 5,
                                    gap: 5,
                                    align: "end",
                                    children: [(0, d.jsx)(eQ.d, {
                                        amount: c,
                                        c: "gray.6"
                                    }), (0, d.jsx)(v.x, {
                                        size: "sm",
                                        c: "gray.6",
                                        children: "available"
                                    })]
                                }), (0, d.jsx)(v.x, {
                                    mt: "xs",
                                    children: "Set auto-compounding rewards"
                                }), (0, d.jsx)(tr, {
                                    rightColor: g.other.colors.midnightBlue,
                                    percentage: j.values.autoPercentage,
                                    ...j.getInputProps("autoPercentage")
                                })]
                            })]
                        }), (0, d.jsx)(tt, {
                            amount: f,
                            manualAssetAmount: M,
                            autoAssetAmount: C,
                            autoPercentage: j.values.autoPercentage,
                            collatorAddress: n,
                            collatorTotalStake: o,
                            config: a
                        }), (0, d.jsx)(k.M, {
                            children: (0, d.jsx)(eX.K, {
                                type: "submit",
                                mx: "sm",
                                w: "100%",
                                isLoading: m,
                                withArrow: !1,
                                disabled: !i,
                                children: m ? "Executing" : "Execute"
                            })
                        })]
                    })]
                })
            }
            var th = n(91166);

            function tg(e) {
                let {
                    address: t,
                    identity: n,
                    isActive: s,
                    isUpcoming: o,
                    position: r,
                    total: a,
                    self: l,
                    delegations: i,
                    apy: c,
                    delegated: u,
                    config: m
                } = e, {
                    open: x
                } = (0, ew.A)(), {
                    md: h
                } = (0, e5.a)(), [g, {
                    toggle: p
                }] = (0, eI.q)(!1);
                return h ? (0, d.jsxs)(eF.r, {
                    role: "row",
                    columns: 23,
                    p: "md",
                    bg: "dark.8",
                    align: "center",
                    style: {
                        borderRadius: 20
                    },
                    children: [(0, d.jsx)(eF.r.Col, {
                        span: 4.2,
                        children: (0, d.jsxs)(w.Z, {
                            gap: 0,
                            wrap: "nowrap",
                            children: [(0, d.jsxs)(v.x, {
                                size: "sm",
                                c: "gray.6",
                                w: 35,
                                style: {
                                    flexShrink: 0
                                },
                                children: [r, ". "]
                            }), (0, d.jsx)(e9, {
                                address: t,
                                isActive: s,
                                isUpcoming: o
                            }), (0, d.jsx)(e3, {
                                address: t,
                                display: null == n ? void 0 : n.display
                            })]
                        })
                    }), (0, d.jsx)(eF.r.Col, {
                        span: 3.75,
                        children: (0, d.jsx)(eQ.d, {
                            amount: u,
                            symbolColor: "gray.6",
                            ta: "right",
                            pr: 5
                        })
                    }), (0, d.jsx)(eF.r.Col, {
                        span: 3.75,
                        children: (0, d.jsx)(eQ.d, {
                            amount: l,
                            symbolColor: "gray.6",
                            ta: "right",
                            pr: 5
                        })
                    }), (0, d.jsx)(eF.r.Col, {
                        span: 3.75,
                        children: (0, d.jsx)(eQ.d, {
                            amount: a,
                            symbolColor: "gray.6",
                            ta: "right",
                            pr: 5
                        })
                    }), (0, d.jsx)(eF.r.Col, {
                        span: 3.1,
                        pl: "lg",
                        "data-testid": "collator-delegations",
                        children: (0, d.jsx)(v.x, {
                            ta: "center",
                            size: "sm",
                            children: i
                        })
                    }), (0, d.jsx)(eF.r.Col, {
                        span: 4,
                        children: (0, d.jsxs)(w.Z, {
                            gap: 0,
                            justify: "space-between",
                            wrap: "nowrap",
                            grow: !0,
                            children: [(0, d.jsxs)(v.x, {
                                miw: 40,
                                size: "sm",
                                ta: "center",
                                children: [c > 9e3 ? ">9000" : c.toFixed(0), "%"]
                            }), (0, d.jsx)(eX.K, {
                                miw: "auto",
                                withArrow: !1,
                                px: "md",
                                fw: 600,
                                onClick: () => x((0, d.jsx)(tx, {
                                    title: "Open Staking Position",
                                    collatorAddress: t,
                                    collatorIdentity: n,
                                    collatorTotalStake: a,
                                    config: m
                                })),
                                children: "Stake"
                            })]
                        })
                    })]
                }) : (0, d.jsxs)(eK.x, {
                    p: "md",
                    bg: "dark.8",
                    style: {
                        borderRadius: 20
                    },
                    children: [(0, d.jsx)(eK.x, {
                        children: (0, d.jsxs)(w.Z, {
                            gap: 0,
                            children: [(0, d.jsxs)(v.x, {
                                size: "sm",
                                c: "gray.6",
                                w: 35,
                                style: {
                                    flexShrink: 0
                                },
                                children: [r, ". "]
                            }), (0, d.jsx)(e9, {
                                address: t,
                                isActive: s,
                                isUpcoming: o
                            }), (0, d.jsx)(e3, {
                                address: t,
                                display: null == n ? void 0 : n.display
                            }), (0, d.jsx)(th.k, {
                                onMouseDown: p,
                                children: (0, d.jsx)(eG.W, {
                                    isOpen: g
                                })
                            })]
                        })
                    }), (0, d.jsx)(e_.U, { in: g,
                        mt: 25,
                        children: (0, d.jsxs)(f.K, {
                            children: [(0, d.jsxs)(w.Z, {
                                children: [(0, d.jsxs)(v.x, {
                                    size: "sm",
                                    c: "gray.6",
                                    children: ["Delegated stake:", " "]
                                }), (0, d.jsx)(eQ.d, {
                                    amount: u,
                                    symbolColor: "gray.6"
                                })]
                            }), (0, d.jsxs)(w.Z, {
                                children: [(0, d.jsxs)(v.x, {
                                    size: "sm",
                                    c: "gray.6",
                                    children: ["Self stake:", " "]
                                }), (0, d.jsx)(eQ.d, {
                                    amount: l,
                                    symbolColor: "gray.6"
                                })]
                            }), (0, d.jsxs)(w.Z, {
                                children: [(0, d.jsxs)(v.x, {
                                    size: "sm",
                                    c: "gray.6",
                                    children: ["Total staked:", " "]
                                }), (0, d.jsx)(eQ.d, {
                                    amount: a,
                                    symbolColor: "gray.6"
                                })]
                            }), (0, d.jsxs)(w.Z, {
                                children: [(0, d.jsxs)(v.x, {
                                    size: "sm",
                                    c: "gray.6",
                                    children: ["Delegations:", " "]
                                }), (0, d.jsx)(v.x, {
                                    size: "sm",
                                    children: i
                                })]
                            }), (0, d.jsxs)(w.Z, {
                                children: [(0, d.jsx)(ez, {}), (0, d.jsxs)(v.x, {
                                    size: "sm",
                                    c: "gray.6",
                                    children: ["APY:", " "]
                                }), (0, d.jsxs)(v.x, {
                                    size: "sm",
                                    children: [c > 9e3 ? ">9000" : c.toFixed(0), "%"]
                                })]
                            }), (0, d.jsx)(eX.K, {
                                miw: "auto",
                                withArrow: !1,
                                px: "md",
                                fw: 600,
                                onClick: () => x((0, d.jsx)(tx, {
                                    title: "Open Staking Position",
                                    collatorAddress: t,
                                    collatorIdentity: n,
                                    collatorTotalStake: a,
                                    config: m
                                })),
                                children: "Stake"
                            })]
                        })
                    })]
                })
            }
            var tp = n(1506);
            let tj = (0, p.memo)(function(e) {
                    let {
                        collators: t,
                        config: n
                    } = e, {
                        md: s
                    } = (0, e5.a)();
                    return t ? !!t.length && (0, d.jsx)(eK.x, {
                        style: {
                            overflowX: "scroll",
                            scrollbarWidth: "none"
                        },
                        children: (0, d.jsx)(eK.x, {
                            miw: s ? 1008 : void 0,
                            children: (0, d.jsx)(f.K, {
                                mt: 5,
                                gap: "xs",
                                children: t.map((e, t) => (0, d.jsx)(tg, {
                                    position: t + 1,
                                    address: e.address,
                                    identity: e.identity,
                                    isActive: e.isActive,
                                    isUpcoming: e.isUpcoming,
                                    delegated: e.delegated,
                                    self: e.self,
                                    total: e.total,
                                    delegations: e.delegations,
                                    apy: e.apy,
                                    config: n
                                }, e.address))
                            })
                        })
                    }) : (0, d.jsx)(f.K, {
                        mt: 40,
                        gap: "xs",
                        children: Array.from({
                            length: 10
                        }, (e, t) => (0, d.jsx)(tp.O, {
                            miw: s ? 1008 : void 0,
                            h: 77
                        }, t))
                    })
                }),
                ty = (0, p.memo)(function(e) {
                    let {
                        config: t,
                        collators: n,
                        active: s,
                        upcoming: o,
                        waiting: r
                    } = e;
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(eN.m.Panel, {
                            value: a.All,
                            children: (0, d.jsx)(tj, {
                                collators: n,
                                config: t
                            })
                        }), (0, d.jsx)(eN.m.Panel, {
                            value: a.Active,
                            children: (0, d.jsx)(tj, {
                                collators: s,
                                config: t
                            })
                        }), (0, d.jsx)(eN.m.Panel, {
                            value: a.Upcoming,
                            children: (0, d.jsx)(tj, {
                                collators: o,
                                config: t
                            })
                        }), (0, d.jsx)(eN.m.Panel, {
                            value: a.Waiting,
                            children: (0, d.jsx)(tj, {
                                collators: r,
                                config: t
                            })
                        })]
                    })
                });

            function tf(e) {
                let {
                    config: t
                } = e, {
                    md: n
                } = (0, e5.a)(), [s, o] = (0, p.useState)(a.All), {
                    collators: r,
                    sortedBy: l,
                    sortBy: i
                } = function(e) {
                    let t = P(e),
                        n = _(H(e)),
                        s = W(e),
                        o = (0, L.el)(t, e),
                        r = U(t, e),
                        a = function(e, t) {
                            let n = function(e, t) {
                                    let n = et(e, t),
                                        s = J(e, t),
                                        o = function(e, t) {
                                            let n = (0, V.h_)(t.ws),
                                                s = (0, p.useMemo)(() => null == e ? void 0 : e.map(e => [e, {
                                                    AutoCompoundingShares: {
                                                        delegator: e
                                                    }
                                                }]), [e]);
                                            return (0, V.ku)(null == n ? void 0 : n.query.pooledStaking.pools.multi, [s], t => $(t, e))
                                        }(e, t);
                                    return O({
                                        collators: e,
                                        shares: o,
                                        totalStake: n,
                                        sharesSupply: s
                                    })
                                }(e, t),
                                s = function(e, t) {
                                    let n = en(e, t),
                                        s = ee(e, t),
                                        o = function(e, t) {
                                            let n = (0, V.h_)(t.ws),
                                                s = (0, p.useMemo)(() => null == e ? void 0 : e.map(e => [e, {
                                                    ManualRewardsShares: {
                                                        delegator: e
                                                    }
                                                }]), [e]);
                                            return (0, V.ku)(null == n ? void 0 : n.query.pooledStaking.pools.multi, [s], t => $(t, e))
                                        }(e, t);
                                    return O({
                                        collators: e,
                                        shares: o,
                                        totalStake: n,
                                        sharesSupply: s
                                    })
                                }(e, t);
                            return (0, p.useMemo)(() => {
                                if (!n || !s || !e) return;
                                let t = {};
                                return e.forEach(e => {
                                    let o = n[e],
                                        r = s[e];
                                    t[e] = (o || 0 n) + (r || 0 n)
                                }), t
                            }, [n, e, s])
                        }(t, e),
                        l = function(e, t) {
                            let n = function(e, t) {
                                let n = (0, V.h_)(t.ws),
                                    [s, o] = (0, p.useState)(""),
                                    r = (0, V.bz)({
                                        api: n,
                                        events: [null == n ? void 0 : n.events.pooledStaking.ExecutedDelegate, null == n ? void 0 : n.events.pooledStaking.RequestedUndelegate]
                                    });
                                return (0, p.useEffect)(() => {
                                    let e;
                                    return r.hash && setTimeout(() => {
                                        o(r.hash)
                                    }, 2e4), () => {
                                        clearTimeout(e)
                                    }
                                }, [r.hash]), (0, G.h)({
                                    queries: e.map(e => ({
                                        queryKey: ["collatorPools", e, s],
                                        queryFn: async () => {
                                            let t = await (null == n ? void 0 : n.query.pooledStaking.pools.entries(e));
                                            return t ? function(e, t) {
                                                let n = {
                                                    collator: t
                                                };
                                                return e.forEach(e => {
                                                    let [t, s] = e, o = t.toHuman()[1], r = s.toBigInt();
                                                    if ("string" != typeof o) {
                                                        var a;
                                                        let [e, {
                                                            delegator: t
                                                        }] = Object.entries(o)[0];
                                                        if (!["AutoCompoundingShares", "ManualRewardsShares"].includes(e)) return;
                                                        n[e] || (n[e] = []), null === (a = n[e]) || void 0 === a || a.push({
                                                            [t]: r
                                                        })
                                                    }
                                                }), n
                                            }(t, e) : void 0
                                        }
                                    }))
                                })
                            }(e || [], t);
                            return (0, p.useMemo)(() => {
                                if (!n) return;
                                let e = {};
                                return n.forEach(t => {
                                    let {
                                        data: n
                                    } = t;
                                    if (!(0, R.$K)(null == n ? void 0 : n.collator)) return;
                                    let s = new Set([n.collator]);
                                    [...n.AutoCompoundingShares || [], ...n.ManualRewardsShares || []].forEach(e => {
                                        let [t, n] = Object.entries(e)[0];
                                        n > 0 n && s.add(t)
                                    }), e[n.collator] = s.size - 1
                                }), e
                            }, [n])
                        }(t, e),
                        i = T(t, e);
                    return function(e) {
                        let {
                            collators: t,
                            identities: n,
                            active: s,
                            upcoming: o,
                            total: r,
                            self: a,
                            delegations: l,
                            apy: i,
                            config: d
                        } = e, [c, u] = (0, p.useState)({
                            key: E.total,
                            isDesc: !0
                        }), m = (0, p.useCallback)(e => {
                            c.key === e && u(e => ({ ...e,
                                isDesc: !c.isDesc
                            })), u({
                                key: e,
                                isDesc: c.key === e ? !c.isDesc : c.isDesc
                            })
                        }, [c.isDesc, c.key]);
                        return {
                            collators: (0, p.useMemo)(() => {
                                if (t && r && a && s && o) return t.map(e => ({
                                    address: e,
                                    identity: null == n ? void 0 : n[e],
                                    isActive: null == s ? void 0 : s.includes(e),
                                    isUpcoming: null == o ? void 0 : o.includes(e),
                                    total: D.nE.fromAsset(d.asset, {
                                        amount: r[e] || 0 n,
                                        decimals: d.decimals
                                    }),
                                    self: D.nE.fromAsset(d.asset, {
                                        amount: a[e] || 0 n,
                                        decimals: d.decimals
                                    }),
                                    delegated: D.nE.fromAsset(d.asset, {
                                        amount: (0, R.Ej)(r[e], a[e]) ? r[e] - a[e] : 0 n,
                                        decimals: d.decimals
                                    }),
                                    delegations: (null == l ? void 0 : l[e]) || 0,
                                    apy: (null == i ? void 0 : i[e]) || 0
                                })).sort((e, t) => (function(e, t, n) {
                                    let {
                                        key: s,
                                        isDesc: o
                                    } = n;
                                    return s === E.delegations || s === E.apy ? o ? t[s] - e[s] : e[s] - t[s] : Number(o ? t[s].amount - e[s].amount : e[s].amount - t[s].amount)
                                })(e, t, c))
                            }, [d.asset, d.decimals, t, r, a, s, o, n, l, i, c]),
                            sortedBy: c,
                            sortBy: m
                        }
                    }({
                        collators: t,
                        identities: o,
                        active: n,
                        upcoming: s,
                        total: r,
                        self: a,
                        delegations: l,
                        apy: i,
                        config: e
                    })
                }(t), c = (0, p.useMemo)(() => {
                    if (!r) return {
                        active: [],
                        upcoming: [],
                        waiting: []
                    };
                    let e = [],
                        t = [],
                        n = [];
                    return r.forEach(s => {
                        s.isActive && e.push(s), s.isUpcoming && t.push(s), s.isActive || s.isUpcoming || n.push(s)
                    }), {
                        active: e,
                        upcoming: t,
                        waiting: n
                    }
                }, [r]);
                return (0, d.jsxs)(d.Fragment, {
                    children: [!n && (0, d.jsx)(eO, {
                        sortedBy: l,
                        activeTab: s,
                        sortBy: i,
                        setActiveTab: o
                    }), (0, d.jsxs)(eN.m, {
                        value: s,
                        defaultValue: a.All,
                        onChange: o,
                        classNames: {
                            tab: eY().tab,
                            list: eY().list,
                            tabLabel: eY().tabLabel
                        },
                        children: [n && (0, d.jsxs)(w.Z, {
                            justify: "space-between",
                            align: "center",
                            mb: "lg",
                            mih: 50,
                            children: [(0, d.jsx)(eV, {}), (0, d.jsx)(eH, {
                                activeTab: s
                            })]
                        }), n && (0, d.jsx)(eq, {
                            sortedBy: l,
                            sortBy: i
                        }), r && (0, d.jsx)(ty, {
                            config: t,
                            collators: r,
                            active: c.active,
                            upcoming: c.upcoming,
                            waiting: c.waiting
                        })]
                    })]
                })
            }
            let tb = (0, p.memo)(function(e) {
                let {
                    manualPercentageFormatted: t,
                    manualPercentage: n,
                    autoPercentageFormatted: s
                } = e, o = (0, eL.rZ)();
                return (0, R.$K)(t) ? (0, d.jsxs)(w.Z, {
                    mt: 2,
                    justify: "space-between",
                    gap: 0,
                    children: [(0, d.jsxs)(v.x, {
                        w: 48,
                        size: "sm",
                        c: o.primaryColor,
                        children: [t, "%"]
                    }), (0, d.jsx)(te, {
                        value: n,
                        style: {
                            flexGrow: 1
                        }
                    }), (0, d.jsxs)(v.x, {
                        w: 48,
                        size: "sm",
                        c: o.other.colors.amber,
                        ta: "right",
                        children: [s, "%"]
                    })]
                }) : null
            });

            function tw(e) {
                let {
                    title: t,
                    collatorAddress: n,
                    collatorIdentity: s,
                    delegation: o,
                    config: r,
                    goBack: a
                } = e, l = (0, eL.rZ)(), {
                    isLoading: i,
                    send: c
                } = function(e) {
                    let t = (0, eh.h)(e.ws),
                        {
                            close: n
                        } = (0, ew.A)(),
                        {
                            transactionSuccess: s
                        } = (0, ej.o)(e),
                        {
                            isLoading: o,
                            send: r
                        } = (0, ey.X)({
                            tx: null == t ? void 0 : t.tx.pooledStaking.swapPool,
                            config: e,
                            notify: {
                                notifyOnSuccess: !1
                            },
                            onSuccess: (e, t) => {
                                n(), s({
                                    txHash: e,
                                    blockHash: t,
                                    title: "Staking ratio update was successfully requested",
                                    message: "Your staking ratio update request has been successfully submitted."
                                })
                            }
                        });
                    return {
                        isLoading: o,
                        send: async (e, t, n) => r(e, t, {
                            Stake: n
                        })
                    }
                }(r), u = ek(o.manual.amount, o.total.amount), m = (0, td.c)({
                    validate: (0, tc.F)(tm.z.object({
                        manualPercentage: tm.z.coerce.number().int().min(0).max(100)
                    })),
                    initialValues: {
                        manualPercentage: u || 0
                    }
                }), x = BigInt(o.total.toBig().times(m.values.manualPercentage / 100).toFixed(0)), h = o.total.amount - x, g = async () => {
                    c(n, m.values.manualPercentage < u ? "ManualRewards" : "AutoCompounding", m.values.manualPercentage < u ? o.manual.amount - x : o.auto.amount - h)
                };
                return (0, d.jsxs)("form", {
                    onSubmit: m.onSubmit(g),
                    children: [(0, d.jsx)(e$.$l, {
                        title: t,
                        goBack: a
                    }), (0, d.jsxs)(eK.x, {
                        py: "lg",
                        px: "md",
                        style: {
                            borderBottom: "1px solid var(--mantine-color-gray-9)"
                        },
                        children: [(0, d.jsx)(v.x, {
                            size: "sm",
                            children: "You can change your staking ratio."
                        }), (0, d.jsx)(ti.a, {
                            c: "white",
                            ml: "xs",
                            style: {
                                fontSize: 13
                            },
                            children: (0, d.jsx)(ti.a.Item, {
                                mt: "xs",
                                children: "Change ratio between Auto and Manual."
                            })
                        })]
                    }), (0, d.jsxs)(eK.x, {
                        py: "lg",
                        px: "md",
                        style: {
                            borderBottom: "1px solid var(--mantine-color-gray-9)"
                        },
                        children: [(0, d.jsx)(e7, {
                            address: n,
                            identity: s
                        }), (0, d.jsx)(v.x, {
                            mt: "xl",
                            children: "Staking Ratio"
                        }), (0, d.jsxs)(w.Z, {
                            mt: "xs",
                            justify: "space-between",
                            children: [(0, d.jsxs)(w.Z, {
                                gap: 5,
                                children: [(0, d.jsx)(eK.x, {
                                    w: 10,
                                    h: 10,
                                    bg: l.colors.tanssiTeal[9],
                                    style: {
                                        borderRadius: "50%"
                                    }
                                }), (0, d.jsx)(v.x, {
                                    c: "gray.6",
                                    size: "sm",
                                    children: "Manual Stake"
                                })]
                            }), (0, d.jsxs)(w.Z, {
                                gap: 5,
                                children: [(0, d.jsx)(v.x, {
                                    c: "gray.6",
                                    size: "sm",
                                    children: "Auto Stake"
                                }), (0, d.jsx)(eK.x, {
                                    w: 10,
                                    h: 10,
                                    bg: l.other.colors.amber,
                                    style: {
                                        borderRadius: "50%"
                                    }
                                })]
                            })]
                        }), (0, d.jsx)(tr, {
                            label: null,
                            mt: 5,
                            percentage: m.values.manualPercentage,
                            ...m.getInputProps("manualPercentage")
                        }), (0, d.jsxs)(w.Z, {
                            py: 6,
                            justify: "space-between",
                            gap: 0,
                            children: [(0, d.jsxs)(v.x, {
                                w: 48,
                                size: "sm",
                                c: l.colors.tanssiTeal[9],
                                children: [m.values.manualPercentage.toFixed(1), "%"]
                            }), (0, d.jsxs)(v.x, {
                                w: 48,
                                size: "sm",
                                c: l.other.colors.amber,
                                ta: "right",
                                children: [(100 - m.values.manualPercentage).toFixed(1), "%"]
                            })]
                        }), (0, d.jsxs)(eK.x, {
                            mt: 40,
                            children: [(0, d.jsxs)(w.Z, {
                                justify: "space-between",
                                style: {
                                    borderBottom: "1px solid var(--mantine-color-gray-9)"
                                },
                                children: [(0, d.jsx)(v.x, {
                                    c: "gray.6",
                                    children: "Manual:"
                                }), (0, d.jsx)(eQ.d, {
                                    amount: r.getAssetAmount(x),
                                    size: "md",
                                    symbolColor: "gray.6",
                                    "data-testid": "projected-manual-stake"
                                })]
                            }), (0, d.jsxs)(w.Z, {
                                py: 6,
                                justify: "space-between",
                                style: {
                                    borderBottom: "1px solid var(--mantine-color-gray-9)"
                                },
                                children: [(0, d.jsx)(v.x, {
                                    c: "gray.6",
                                    children: "Auto:"
                                }), (0, d.jsx)(eQ.d, {
                                    amount: r.getAssetAmount(h),
                                    size: "md",
                                    symbolColor: "gray.6",
                                    "data-testid": "projected-auto-stake"
                                })]
                            })]
                        })]
                    }), (0, d.jsx)(k.M, {
                        children: (0, d.jsx)(eX.K, {
                            type: "submit",
                            mx: "sm",
                            w: "100%",
                            disabled: m.values.manualPercentage.toFixed(0) === u.toFixed(0),
                            isLoading: i,
                            withArrow: !1,
                            children: i ? "Executing" : "Execute"
                        })
                    })]
                })
            }
            var tv = n(67461);

            function tk(e) {
                let {
                    title: t,
                    collatorAddress: n,
                    collatorIdentity: s,
                    collatorTotalStake: o,
                    delegation: r,
                    config: a,
                    goBack: l
                } = e, {
                    isLoading: i,
                    send: c
                } = function(e) {
                    let t = (0, eh.h)(e.ws),
                        n = ep(),
                        {
                            close: s
                        } = (0, ew.A)(),
                        {
                            transactionSuccess: o
                        } = (0, ej.o)(e),
                        {
                            isLoading: r,
                            send: a
                        } = eA(e),
                        {
                            isLoading: l,
                            send: i
                        } = (0, ey.X)({
                            tx: null == t ? void 0 : t.tx.utility.batch,
                            config: e,
                            notify: {
                                notifyOnSuccess: !1
                            },
                            onSuccess: (e, t) => {
                                s(), n(), o({
                                    txHash: e,
                                    blockHash: t,
                                    title: "Your decrease request was successfully submitted",
                                    message: "Your shares has now entered the leaving pool."
                                })
                            }
                        }),
                        d = (0, p.useCallback)((e, n, s) => t ? [t.tx.pooledStaking.requestUndelegate(e, "AutoCompounding", {
                            Stake: s
                        }), t.tx.pooledStaking.requestUndelegate(e, "ManualRewards", {
                            Stake: n
                        })] : [], [t]);
                    return {
                        isLoading: r || l,
                        send: async (e, t, n) => n ? t ? i(d(e, t, n)) : a(e, "AutoCompounding", {
                            Stake: n
                        }) : a(e, "ManualRewards", {
                            Stake: t
                        })
                    }
                }(a), u = (0, eL.rZ)(), m = (0, td.c)({
                    validate: (0, tc.F)(tm.z.object({
                        autoAmount: (0, tl.k7)(tm.z.coerce.number()),
                        manualAmount: (0, tl.k7)(tm.z.coerce.number())
                    })),
                    initialValues: {
                        autoAmount: "",
                        manualAmount: ""
                    }
                }), x = (0, tu.Gh)(m.values.autoAmount || 0, a.decimals), h = (0, tu.Gh)(m.values.manualAmount || 0, a.decimals), g = ek(x, r.auto.amount, 2), j = ek(h, r.manual.amount), y = a.getAssetAmount(r.manual.amount - h), f = a.getAssetAmount(r.auto.amount - x), b = ek(f.amount, y.amount + f.amount), A = async () => {
                    let e = r.manual,
                        t = r.auto;
                    if (h > e.amount) {
                        m.setFieldError("manualAmount", "Manual amount exceeds current amount.");
                        return
                    }
                    if (x > t.amount) {
                        m.setFieldError("autoAmount", "Auto amount exceeds current amount.");
                        return
                    }
                    c(n, h, x)
                };
                return (0, d.jsxs)("form", {
                    onSubmit: m.onSubmit(A),
                    children: [(0, d.jsx)(e$.$l, {
                        title: t,
                        goBack: l
                    }), (0, d.jsxs)(eK.x, {
                        py: "md",
                        px: "md",
                        style: {
                            borderBottom: "1px solid var(--mantine-color-gray-9)"
                        },
                        children: [(0, d.jsx)(v.x, {
                            size: "sm",
                            children: "Decrease your staking position in:"
                        }), (0, d.jsxs)(ti.a, {
                            c: "white",
                            ml: "xs",
                            style: {
                                fontSize: 13
                            },
                            children: [(0, d.jsx)(ti.a.Item, {
                                mt: 5,
                                children: "Auto-compounding stake."
                            }), (0, d.jsx)(ti.a.Item, {
                                children: "Manual claimable rewards stake."
                            })]
                        })]
                    }), (0, d.jsxs)(eK.x, {
                        py: "md",
                        px: "md",
                        style: {
                            borderBottom: "1px solid var(--mantine-color-gray-9)"
                        },
                        children: [(0, d.jsx)(e7, {
                            address: n,
                            identity: s
                        }), !!r.auto.amount && (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)(tv.U, {
                                mt: "md",
                                label: "Decrease Auto Stake",
                                value: m.values.autoAmount,
                                symbol: a.asset.originSymbol,
                                onMax: () => m.setValues({
                                    autoAmount: r.auto.toDecimal()
                                }),
                                ...m.getInputProps("autoAmount")
                            }), (0, d.jsxs)(w.Z, {
                                gap: 5,
                                children: [(0, d.jsx)(eQ.d, {
                                    py: 5,
                                    c: "gray.6",
                                    size: "sm",
                                    amount: f
                                }), (0, d.jsx)(v.x, {
                                    size: "sm",
                                    c: "gray.6",
                                    children: "staked"
                                })]
                            }), (0, d.jsx)(tr, {
                                leftColor: u.other.colors.coralRed,
                                rightColor: u.other.colors.mahoganyRed,
                                percentage: g,
                                onChange: e => {
                                    m.setValues({
                                        autoAmount: a.getAssetAmount(r.auto.amount * BigInt(e) / 100 n).toDecimal()
                                    })
                                }
                            })]
                        }), !!r.manual.amount && (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)(tv.U, {
                                mt: "lg",
                                label: "Decrease Manual Stake",
                                value: m.values.manualAmount,
                                symbol: a.asset.originSymbol,
                                onMax: () => m.setValues({
                                    manualAmount: r.manual.toDecimal()
                                }),
                                ...m.getInputProps("manualAmount")
                            }), (0, d.jsxs)(w.Z, {
                                gap: 5,
                                children: [(0, d.jsx)(eQ.d, {
                                    py: 5,
                                    c: "gray.6",
                                    size: "sm",
                                    amount: y
                                }), (0, d.jsx)(v.x, {
                                    size: "sm",
                                    c: "gray.6",
                                    children: "staked"
                                })]
                            }), (0, d.jsx)(tr, {
                                leftColor: u.other.colors.coralRed,
                                rightColor: u.other.colors.mahoganyRed,
                                percentage: j,
                                onChange: e => {
                                    m.setValues({
                                        manualAmount: a.getAssetAmount(r.manual.amount * BigInt(e) / 100 n).toDecimal()
                                    })
                                }
                            })]
                        })]
                    }), (0, d.jsx)(tt, {
                        amount: a.getAssetAmount(h + x),
                        autoAssetAmount: f,
                        manualAssetAmount: y,
                        collatorAddress: n,
                        collatorTotalStake: o,
                        autoPercentage: b,
                        config: a,
                        isDecrease: !0
                    }), (0, d.jsx)(k.M, {
                        children: (0, d.jsx)(eX.K, {
                            type: "submit",
                            mx: "sm",
                            w: "100%",
                            isLoading: i,
                            withArrow: !1,
                            disabled: !h && !x,
                            children: i ? "Executing" : "Execute"
                        })
                    })]
                })
            }

            function tA(e) {
                let {
                    title: t,
                    collatorAddress: n,
                    collatorIdentity: s,
                    collatorTotalStake: o,
                    delegation: r,
                    config: a,
                    goBack: l
                } = e, {
                    auto: i,
                    manual: c
                } = {
                    auto: function(e, t) {
                        let n = (0, V.h_)(t.ws),
                            s = (0, ea.H)();
                        return (0, V.ku)(null == n ? void 0 : n.query.pooledStaking.pools, [e, {
                            AutoCompoundingShares: {
                                delegator: s
                            }
                        }], ec)
                    }(n, a),
                    manual: function(e, t) {
                        let n = (0, V.h_)(t.ws),
                            s = (0, ea.H)();
                        return (0, V.ku)(null == n ? void 0 : n.query.pooledStaking.pools, [e, {
                            ManualRewardsShares: {
                                delegator: s
                            }
                        }], eu)
                    }(n, a)
                }, {
                    isLoading: u,
                    send: m
                } = function(e) {
                    let t = (0, eh.h)(e.ws),
                        {
                            close: n
                        } = (0, ew.A)(),
                        s = ep(),
                        {
                            transactionSuccess: o
                        } = (0, ej.o)(e),
                        {
                            isLoading: r,
                            send: a
                        } = eA(e),
                        {
                            isLoading: l,
                            send: i
                        } = (0, ey.X)({
                            tx: null == t ? void 0 : t.tx.utility.batch,
                            notify: {
                                notifyOnSuccess: !1
                            },
                            onSuccess: (e, t) => {
                                n(), s(), o({
                                    txHash: e,
                                    blockHash: t,
                                    title: "Your removal request was successfully submitted",
                                    message: "Your shares has now entered the leaving pool."
                                })
                            },
                            config: e
                        });
                    return {
                        isLoading: r || l,
                        send: async (e, n, s) => {
                            if (t) return !n && s ? a(e, "ManualRewards", {
                                Shares: s
                            }) : !s && n ? a(e, "AutoCompounding", {
                                Shares: n
                            }) : i([t.tx.pooledStaking.requestUndelegate(e, "AutoCompounding", {
                                Shares: n
                            }), t.tx.pooledStaking.requestUndelegate(e, "ManualRewards", {
                                Shares: s
                            })])
                        }
                    }
                }(a), x = ek(r.auto.amount, r.total.amount);
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(e$.$l, {
                        title: t,
                        goBack: l
                    }), (0, d.jsxs)(eK.x, {
                        py: "lg",
                        px: "md",
                        style: {
                            borderBottom: "1px solid var(--mantine-color-gray-9)"
                        },
                        children: [(0, d.jsx)(v.x, {
                            size: "sm",
                            children: "You can remove your staking position."
                        }), (0, d.jsxs)(ti.a, {
                            c: "white",
                            ml: "xs",
                            style: {
                                fontSize: 13
                            },
                            children: [(0, d.jsx)(ti.a.Item, {
                                mt: "xs",
                                children: "This removes your pool participation."
                            }), (0, d.jsx)(ti.a.Item, {
                                mt: "xs",
                                children: "Withdraws all your staked tokens."
                            })]
                        })]
                    }), (0, d.jsx)(eK.x, {
                        py: "lg",
                        px: "md",
                        style: {
                            borderBottom: "1px solid var(--mantine-color-gray-9)"
                        },
                        children: (0, d.jsx)(e7, {
                            address: n,
                            identity: s
                        })
                    }), (0, d.jsx)(tt, {
                        collatorAddress: n,
                        collatorTotalStake: o,
                        manualAssetAmount: r.manual,
                        autoAssetAmount: r.auto,
                        autoPercentage: x,
                        config: a,
                        isExit: !0
                    }), (0, d.jsx)(k.M, {
                        children: (0, d.jsx)(eX.K, {
                            mx: "sm",
                            w: "100%",
                            onClick: () => m(n, i, c),
                            withArrow: !1,
                            isLoading: u,
                            "data-testid": "execute-exit-staking",
                            children: u ? "Executing" : "Execute"
                        })
                    })]
                })
            }(o = l || (l = {})).Increase = "Increase Staking Position", o.Decrease = "Decrease Staking Position", o.Change = "Change Staking Ratio", o.Exit = "Exit Staking Position";
            let tC = [{
                title: "Increase Staking Position",
                description: "Add more DANCE tokens to your to your position. You can increase you manual staking or auto-compounding position. "
            }, {
                title: "Decrease Staking Position",
                description: "Decrease your staking position by removing DANCE tokens from auto-compounding or manual staking."
            }, {
                title: "Change Staking Ratio",
                description: "Change your staking ratio between manual and auto-compounding positions."
            }, {
                title: "Exit Staking Position",
                description: "Remove your staking position entirely from Block Producer."
            }];

            function tS(e) {
                let {
                    onClick: t
                } = e;
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(e$.$l, {
                        title: "Manage Staking"
                    }), (0, d.jsx)(e$.Mu, {
                        children: tC.map(e => {
                            let {
                                title: n,
                                description: s
                            } = e;
                            return (0, d.jsx)(e$.fP, {
                                title: n,
                                description: s,
                                onClick: () => t(n)
                            }, n)
                        })
                    })]
                })
            }

            function tM(e) {
                let {
                    collatorAddress: t,
                    collatorIdentity: n,
                    collatorTotalStake: s,
                    delegation: o,
                    config: r
                } = e, [a, i] = (0, p.useState)("manage"), [c, u] = (0, p.useState)(null);
                return (0, p.useEffect)(() => {
                    i("manage")
                }, [t]), (0, d.jsxs)(eN.m, {
                    value: a,
                    children: [(0, d.jsx)(eN.m.Panel, {
                        value: "manage",
                        children: (0, d.jsx)(tS, {
                            onClick: e => {
                                u(e), i("action")
                            }
                        })
                    }), (0, d.jsxs)(eN.m.Panel, {
                        value: "action",
                        children: [c === l.Increase && (0, d.jsx)(tx, {
                            title: l.Increase,
                            collatorAddress: t,
                            collatorIdentity: n,
                            collatorTotalStake: s,
                            delegation: o,
                            goBack: () => i("manage"),
                            config: r
                        }), c === l.Decrease && (0, d.jsx)(tk, {
                            title: l.Decrease,
                            collatorAddress: t,
                            collatorIdentity: n,
                            collatorTotalStake: s,
                            delegation: o,
                            goBack: () => i("manage"),
                            config: r
                        }), c === l.Change && (0, d.jsx)(tw, {
                            title: l.Change,
                            collatorAddress: t,
                            collatorIdentity: n,
                            delegation: o,
                            goBack: () => i("manage"),
                            config: r
                        }), c === l.Exit && (0, d.jsx)(tA, {
                            title: l.Exit,
                            collatorAddress: t,
                            collatorIdentity: n,
                            collatorTotalStake: s,
                            delegation: o,
                            goBack: () => i("manage"),
                            config: r
                        })]
                    })]
                })
            }
            let tB = (0, p.memo)(function(e) {
                    let {
                        delegationPercentage: t
                    } = e, n = (0, eL.rZ)();
                    return t ? (0, d.jsxs)(v.x, {
                        size: "xs",
                        py: 5,
                        px: "xs",
                        c: n.other.colors.amber,
                        bg: (0, e2.m)(n.other.colors.amber, .1),
                        style: {
                            borderRadius: 5
                        },
                        children: [t, "%"]
                    }) : null
                }),
                tz = (0, p.memo)(function() {
                    let e = (0, eL.rZ)();
                    return (0, d.jsxs)(w.Z, {
                        justify: "space-between",
                        children: [(0, d.jsxs)(w.Z, {
                            gap: 5,
                            mt: 10,
                            mb: 10,
                            children: [(0, d.jsx)(eK.x, {
                                w: 10,
                                h: 10,
                                bg: e.colors.tanssiTeal[9],
                                style: {
                                    borderRadius: "50%"
                                }
                            }), (0, d.jsx)(v.x, {
                                size: "sm",
                                c: "gray.6",
                                children: "Manual Stake"
                            })]
                        }), (0, d.jsxs)(w.Z, {
                            gap: 5,
                            children: [(0, d.jsx)(eK.x, {
                                w: 10,
                                h: 10,
                                bg: e.other.colors.amber,
                                style: {
                                    borderRadius: "50%"
                                }
                            }), (0, d.jsx)(v.x, {
                                size: "sm",
                                c: "gray.6",
                                children: "Auto Stake"
                            })]
                        })]
                    })
                });
            var tZ = n(20760),
                tP = n(10576);

            function tL(e) {
                let {
                    address: t,
                    identity: n,
                    isActive: s,
                    isUpcoming: o,
                    position: r,
                    delegation: a,
                    totalStake: l,
                    manualRewards: i,
                    config: c
                } = e, {
                    open: u
                } = (0, ew.A)(), m = (0, eL.rZ)(), {
                    md: x
                } = (0, e5.a)(), [h, {
                    toggle: g
                }] = (0, eI.q)(!1), j = (0, tZ.t)(a.total.toDecimal()), {
                    isLoading: y,
                    send: b
                } = function(e) {
                    let t = (0, S.SF)(),
                        n = (0, eh.h)(e.ws),
                        {
                            transactionSuccess: s
                        } = (0, ej.o)(e),
                        {
                            isLoading: o,
                            send: r
                        } = (0, ey.X)({
                            tx: null == n ? void 0 : n.tx.pooledStaking.claimManualRewards,
                            config: e,
                            notify: {
                                notifyOnSuccess: !1
                            },
                            onSuccess: (e, t) => {
                                s({
                                    txHash: e,
                                    blockHash: t,
                                    title: "Manual rewards were successfully claimed",
                                    message: "The rewards have been added to your balance."
                                })
                            }
                        });
                    return {
                        isLoading: o,
                        send: async e => t && r(e.map(e => [e, t]))
                    }
                }(c), k = (0, p.useMemo)(() => a.total.amount ? a.manual.toBig().div(a.total.toBig()).times(100).toNumber() : void 0, [a.manual, a.total]), A = (0, p.useMemo)(() => l.amount ? a.total.toBig().div(l.toBig()).times(100).toFixed(2) : void 0, [a.total, l]), C = (0, tZ.t)(k, 1), M = (0, tZ.t)(C ? 100 - Number(C) : void 0, 1);
                return x ? (0, d.jsxs)(eF.r, {
                    role: "row",
                    columns: 20,
                    p: "md",
                    bg: "dark.8",
                    style: {
                        borderRadius: 20
                    },
                    children: [(0, d.jsx)(eF.r.Col, {
                        span: 3.8,
                        pr: "xl",
                        children: (0, d.jsxs)(w.Z, {
                            gap: 0,
                            wrap: "nowrap",
                            children: [(0, d.jsxs)(v.x, {
                                size: "sm",
                                c: "gray.6",
                                w: 25,
                                style: {
                                    flexShrink: 0
                                },
                                children: [r, ". "]
                            }), (0, d.jsx)(e9, {
                                address: t,
                                isActive: s,
                                isUpcoming: o
                            }), (0, d.jsx)(e3, {
                                address: t,
                                display: null == n ? void 0 : n.display
                            })]
                        })
                    }), (0, d.jsxs)(eF.r.Col, {
                        span: "auto",
                        "data-testid": "my-collator-stakes",
                        children: [(0, d.jsxs)(w.Z, {
                            justify: "space-between",
                            children: [(0, d.jsx)(eQ.d, {
                                amount: a.manual,
                                symbolColor: "gray.6"
                            }), (0, d.jsx)(eQ.d, {
                                amount: a.auto,
                                symbolColor: "gray.6"
                            })]
                        }), (0, d.jsx)(tb, {
                            manualPercentageFormatted: C,
                            manualPercentage: k,
                            autoPercentageFormatted: M
                        })]
                    }), (0, d.jsx)(eF.r.Col, {
                        span: 4.1,
                        miw: 260,
                        "data-testid": "my-collator-share",
                        children: (0, d.jsxs)(w.Z, {
                            justify: "end",
                            align: "end",
                            gap: "xs",
                            children: [(0, d.jsxs)(f.K, {
                                align: "center",
                                gap: 0,
                                children: [(0, d.jsxs)(v.x, {
                                    size: "sm",
                                    children: [j, " / "]
                                }), (0, d.jsx)(eQ.d, {
                                    amount: l,
                                    symbolColor: "gray.6"
                                })]
                            }), (0, d.jsx)(tB, {
                                delegationPercentage: A
                            })]
                        })
                    }), (0, d.jsx)(eF.r.Col, {
                        span: 4.8,
                        miw: 300,
                        pl: "3.5%",
                        "data-testid": "my-collator-actions",
                        children: (0, d.jsxs)(w.Z, {
                            justify: "center",
                            gap: 0,
                            wrap: "nowrap",
                            children: [(0, d.jsx)(eX.K, {
                                miw: 150,
                                px: "md",
                                c: k ? "white" : "gray.6",
                                withArrow: !1,
                                disabled: !k || !i.amount || y,
                                loading: y,
                                onClick: () => b([t]),
                                children: k ? (0, d.jsx)(eQ.d, {
                                    amount: i
                                }) : "Compounding"
                            }), (0, d.jsx)(eX.K, {
                                miw: "auto",
                                px: "sm",
                                ml: "xs",
                                fw: 600,
                                withArrow: !1,
                                onClick: () => u((0, d.jsx)(tM, {
                                    collatorAddress: t,
                                    collatorIdentity: n,
                                    collatorTotalStake: l,
                                    delegation: a,
                                    config: c
                                })),
                                children: "Manage"
                            })]
                        })
                    })]
                }) : (0, d.jsxs)(eK.x, {
                    p: "md",
                    bg: "dark.8",
                    style: {
                        borderRadius: 20
                    },
                    children: [(0, d.jsxs)(w.Z, {
                        children: [(0, d.jsxs)(v.x, {
                            size: "xs",
                            c: "gray.6",
                            children: [r, ". "]
                        }), (0, d.jsx)(e9, {
                            address: t,
                            isActive: s,
                            isUpcoming: o
                        }), (0, d.jsx)(e3, {
                            address: t,
                            display: null == n ? void 0 : n.display,
                            size: "xs"
                        }), (0, d.jsx)(th.k, {
                            onMouseDown: g,
                            children: (0, d.jsx)(eG.W, {
                                isOpen: h
                            })
                        })]
                    }), (0, d.jsxs)(e_.U, { in: h,
                        mt: 15,
                        children: [(0, d.jsxs)(eK.x, {
                            "data-testid": "my-collator-stakes",
                            children: [(0, d.jsx)(tz, {}), (0, d.jsxs)(w.Z, {
                                justify: "space-between",
                                children: [(0, d.jsx)(eQ.d, {
                                    amount: a.manual,
                                    symbolColor: "gray.6"
                                }), (0, d.jsx)(eQ.d, {
                                    amount: a.auto,
                                    symbolColor: "gray.6"
                                })]
                            }), (0, d.jsx)(tb, {
                                manualPercentageFormatted: C,
                                manualPercentage: k,
                                autoPercentageFormatted: M
                            })]
                        }), (0, d.jsx)(tP.i, {
                            mt: 30,
                            mb: 30,
                            color: m.colors.dark[6]
                        }), (0, d.jsx)(eK.x, {
                            "data-testid": "my-collator-share",
                            children: (0, d.jsxs)(f.K, {
                                children: [(0, d.jsx)(v.x, {
                                    size: "sm",
                                    c: m.colors.gray[6],
                                    children: "My share of the total stake"
                                }), (0, d.jsxs)(w.Z, {
                                    gap: 10,
                                    children: [(0, d.jsxs)(w.Z, {
                                        gap: 0,
                                        children: [(0, d.jsxs)(v.x, {
                                            size: "sm",
                                            children: [j, " / "]
                                        }), (0, d.jsx)(eQ.d, {
                                            amount: l,
                                            symbolColor: m.colors.gray[6]
                                        })]
                                    }), (0, d.jsx)(tB, {
                                        delegationPercentage: A
                                    })]
                                })]
                            })
                        }), (0, d.jsx)(tP.i, {
                            mt: 30,
                            mb: 30,
                            color: m.colors.dark[6]
                        }), (0, d.jsx)(eK.x, {
                            "ata-testid": "my-collator-actions",
                            children: (0, d.jsxs)(f.K, {
                                children: [(0, d.jsx)(v.x, {
                                    size: "sm",
                                    c: m.colors.gray[6],
                                    children: "Claim rewards"
                                }), (0, d.jsxs)(w.Z, {
                                    children: [(0, d.jsx)(eX.K, {
                                        w: "auto",
                                        px: "md",
                                        c: k ? "white" : "gray.6",
                                        withArrow: !1,
                                        disabled: !k || !i.amount || y,
                                        loading: y,
                                        onClick: () => b([t]),
                                        children: k ? (0, d.jsx)(eQ.d, {
                                            amount: i
                                        }) : "Compounding"
                                    }), (0, d.jsx)(eX.K, {
                                        w: "auto",
                                        px: "sm",
                                        fw: 600,
                                        withArrow: !1,
                                        onClick: () => u((0, d.jsx)(tM, {
                                            collatorAddress: t,
                                            collatorIdentity: n,
                                            collatorTotalStake: l,
                                            delegation: a,
                                            config: c
                                        })),
                                        children: "Manage"
                                    })]
                                })]
                            })
                        })]
                    })]
                })
            }
            let t_ = (0, p.memo)(function(e) {
                    let {
                        config: t
                    } = e, n = (0, eL.rZ)(), s = K(t), {
                        md: o
                    } = (0, e5.a)();
                    return (null == s ? void 0 : s.length) ? (0, d.jsxs)(eK.x, {
                        mb: 35,
                        "data-testid": "my-collators",
                        children: [(0, d.jsx)(eK.x, {
                            h: 27,
                            mx: "md",
                            mb: "lg",
                            children: (0, d.jsx)(v.x, {
                                h: 27,
                                px: "md",
                                display: "inline-block",
                                style: {
                                    borderBottom: "1px solid white"
                                },
                                children: "My Block Producers"
                            })
                        }), (0, d.jsx)(eK.x, {
                            style: {
                                overflowX: "scroll",
                                scrollbarWidth: "none"
                            },
                            children: (0, d.jsxs)(eK.x, {
                                miw: o ? 1008 : void 0,
                                children: [o && (0, d.jsxs)(eF.r, {
                                    px: "md",
                                    columns: 20,
                                    children: [(0, d.jsx)(eF.r.Col, {
                                        span: 3.8,
                                        children: (0, d.jsx)(v.x, {
                                            c: "gray.6",
                                            children: "Block Producers"
                                        })
                                    }), (0, d.jsx)(eF.r.Col, {
                                        span: "auto",
                                        children: (0, d.jsxs)(w.Z, {
                                            justify: "space-between",
                                            children: [(0, d.jsxs)(w.Z, {
                                                gap: 5,
                                                children: [(0, d.jsx)(eK.x, {
                                                    w: 10,
                                                    h: 10,
                                                    bg: n.colors.tanssiTeal[9],
                                                    style: {
                                                        borderRadius: "50%"
                                                    }
                                                }), (0, d.jsx)(v.x, {
                                                    c: "gray.6",
                                                    children: "Manual Stake"
                                                })]
                                            }), (0, d.jsxs)(w.Z, {
                                                gap: 5,
                                                children: [(0, d.jsx)(eK.x, {
                                                    w: 10,
                                                    h: 10,
                                                    bg: n.other.colors.amber,
                                                    style: {
                                                        borderRadius: "50%"
                                                    }
                                                }), (0, d.jsx)(v.x, {
                                                    c: "gray.6",
                                                    children: "Auto Stake"
                                                })]
                                            })]
                                        })
                                    }), (0, d.jsx)(eF.r.Col, {
                                        span: 4.1,
                                        miw: 260,
                                        children: (0, d.jsx)(v.x, {
                                            c: "gray.6",
                                            ta: "right",
                                            children: "My share of the total stake"
                                        })
                                    }), (0, d.jsx)(eF.r.Col, {
                                        span: 4.8,
                                        miw: 300,
                                        pl: "3.5%",
                                        children: (0, d.jsx)(v.x, {
                                            c: "gray.6",
                                            w: "65%",
                                            ta: "center",
                                            children: "Claim rewards"
                                        })
                                    })]
                                }), (0, d.jsx)(f.K, {
                                    mt: 5,
                                    gap: "xs",
                                    children: s.map((e, n) => (0, d.jsx)(tL, {
                                        position: n + 1,
                                        config: t,
                                        ...e
                                    }, e.address))
                                })]
                            })
                        })]
                    }) : null
                }),
                tR = (0, p.memo)(function(e) {
                    let {
                        disabled: t,
                        color: n
                    } = e;
                    return (0, d.jsx)(eK.x, {
                        w: 12,
                        h: 12,
                        bg: t ? "dark.6" : n,
                        style: {
                            borderRadius: "50%"
                        }
                    })
                });
            var tD = n(8961),
                tE = n(34124),
                tF = n(28008),
                tI = n(25675),
                tT = n.n(tI);

            function tU(e) {
                let {
                    config: t
                } = e, n = (0, ea.H)(), {
                    md: s,
                    xl: o
                } = (0, e5.a)(), r = (0, eL.rZ)(), {
                    totalAssetAmount: a,
                    freeAssetAmount: l,
                    manualStakeAssetAmount: i,
                    compoundingStakeAssetAmount: c,
                    manualRewardsAssetAmount: u,
                    compoundingRewardsAssetAmount: m,
                    pendingAssetAmount: x
                } = function(e) {
                    let t = (0, L.wq)(e),
                        n = function(e) {
                            let t = function(e) {
                                let t = q(e),
                                    n = Y(t, e),
                                    s = Q({
                                        option: {
                                            AutoCompoundingSharesHeldStake: {
                                                delegator: (0, ea.H)()
                                            }
                                        },
                                        collators: t,
                                        config: e
                                    });
                                return (0, p.useMemo)(() => {
                                    if (!t || !n || !s) return;
                                    let e = {};
                                    return t.forEach(t => {
                                        let o = (null == n ? void 0 : n[t]) || 0 n,
                                            r = (null == s ? void 0 : s[t]) || 0 n;
                                        e[t] = o - r
                                    }), e
                                }, [n, s, t])
                            }(e);
                            return (0, p.useMemo)(() => t ? Object.values(t).reduce((e, t) => e + t, 0 n) : 0 n, [t])
                        }(e),
                        s = K(e),
                        {
                            data: o
                        } = eg(e),
                        r = (0, p.useMemo)(() => s ? s.reduce((e, t) => e + t.delegation.manual.amount, 0 n) : 0 n, [s]),
                        a = (0, p.useMemo)(() => s ? s.reduce((e, t) => e + t.delegation.auto.amount, 0 n) : 0 n, [s]),
                        l = (0, p.useMemo)(() => s ? s.reduce((e, t) => e + t.manualRewards.amount, 0 n) : 0 n, [s]),
                        i = (0, p.useMemo)(() => o ? o.reduce((e, t) => e + t.amount.amount, 0 n) : 0 n, [o]),
                        d = (0, p.useMemo)(() => t || N.Uw.getAssetAmount(0 n), [t]),
                        c = (0, p.useMemo)(() => N.Uw.getAssetAmount(r), [r]),
                        u = (0, p.useMemo)(() => N.Uw.getAssetAmount(a), [a]),
                        m = (0, p.useMemo)(() => N.Uw.getAssetAmount(l), [l]),
                        x = (0, p.useMemo)(() => N.Uw.getAssetAmount(n), [n]),
                        h = (0, p.useMemo)(() => N.Uw.getAssetAmount(i), [i]);
                    return {
                        totalAssetAmount: (0, p.useMemo)(() => {
                            let e = ((null == d ? void 0 : d.amount) || 0 n) + l + r + a + i;
                            return N.Uw.getAssetAmount(e)
                        }, [a, null == d ? void 0 : d.amount, l, r, i]),
                        freeAssetAmount: d,
                        manualStakeAssetAmount: c,
                        compoundingStakeAssetAmount: u,
                        manualRewardsAssetAmount: m,
                        compoundingRewardsAssetAmount: x,
                        pendingAssetAmount: h
                    }
                }(t), h = [{
                    name: "Free",
                    value: l,
                    color: r.other.colors.white
                }, {
                    name: "Manual Stake",
                    value: i,
                    color: r.primaryColor
                }, {
                    name: "Compounding Stake",
                    value: c,
                    color: r.other.colors.blue
                }, {
                    name: "Manual Rewards",
                    value: u,
                    color: r.other.colors.amber
                }, {
                    name: "Compounding Rewards",
                    value: m,
                    color: r.other.colors.coral
                }, {
                    name: "Pending",
                    value: x,
                    color: "orange.5"
                }], g = h.filter(e => {
                    var t;
                    return null === (t = e.value) || void 0 === t ? void 0 : t.amount
                }).map(e => {
                    var t;
                    return { ...e,
                        value: Number(null === (t = e.value) || void 0 === t ? void 0 : t.toDecimal(2))
                    }
                });
                return (0, d.jsxs)(tE.X, {
                    p: "xl",
                    mt: s ? void 0 : 100,
                    mb: 35,
                    children: [s ? (0, d.jsx)(tF.D, {
                        order: 3,
                        size: 24,
                        fw: 500,
                        c: "white",
                        mb: "sm",
                        children: "My Portfolio"
                    }) : null, (0, d.jsxs)(w.Z, {
                        gap: "lg",
                        wrap: s ? "nowrap" : "wrap",
                        justify: s ? "space-between" : "center",
                        children: [(0, d.jsxs)(k.M, {
                            pos: "relative",
                            children: [(0, d.jsx)(tD.Y, {
                                size: s ? 160 : 240,
                                strokeWidth: 0,
                                paddingAngle: 0,
                                thickness: s ? 16 : 24,
                                withTooltip: !!g.length,
                                tooltipDataSource: "segment",
                                tooltipProps: {
                                    wrapperStyle: {
                                        zIndex: 100
                                    }
                                },
                                data: g.length ? g : [{
                                    name: "No data",
                                    value: 1,
                                    color: "dark.6"
                                }]
                            }), (0, d.jsx)(eQ.d, {
                                pos: "absolute",
                                top: "50%",
                                ta: "center",
                                left: "50%",
                                style: {
                                    transform: "translate(-50%, -50%)",
                                    zIndex: 0
                                },
                                amount: a,
                                symbolColor: "gray.6",
                                size: "md",
                                lh: 1
                            })]
                        }), (0, d.jsxs)(eK.x, {
                            children: [(0, d.jsxs)(w.Z, {
                                gap: 5,
                                children: [(0, d.jsx)(v.x, {
                                    c: "gray.6",
                                    children: "Total:"
                                }), (0, d.jsx)(eQ.d, {
                                    amount: a,
                                    symbolColor: "gray.6",
                                    size: "md"
                                })]
                            }), (0, d.jsx)(ti.a, {
                                children: h.map(e => {
                                    var t;
                                    if (!["Compounding Rewards", "Manual Rewards", "Pending"].includes(e.name) || (null === (t = e.value) || void 0 === t ? void 0 : t.amount)) return (0, d.jsx)(ti.a.Item, {
                                        icon: (0, d.jsx)(tR, {
                                            disabled: !n,
                                            color: e.color
                                        }),
                                        children: (0, d.jsxs)(w.Z, {
                                            gap: 5,
                                            children: [(0, d.jsxs)(v.x, {
                                                c: "gray.6",
                                                children: [e.name, ":"]
                                            }), (0, d.jsx)(eQ.d, {
                                                amount: e.value,
                                                symbolColor: "gray.6",
                                                size: "md"
                                            })]
                                        })
                                    }, e.name)
                                })
                            })]
                        }), (0, d.jsxs)(k.M, {
                            pos: "relative",
                            w: "45%",
                            children: [(0, d.jsx)(v.x, {
                                pos: "absolute",
                                top: "50%",
                                left: "50%",
                                style: {
                                    transform: "translate(-50%, -50%)",
                                    fontSize: 24
                                },
                                children: "Available soon"
                            }), (0, d.jsx)(tT(), {
                                src: "/images/staking_graph.webp",
                                alt: "Available soon graph",
                                width: o ? 500 : 350,
                                height: o ? 200 : 120
                            })]
                        })]
                    })]
                })
            }(r = i || (i = {})).Free = "Free", r.ManualStake = "Manual Stake", r.CompoundingStake = "Compounding Stake", r.ManualRewards = "Manual Rewards", r.CompoundingRewards = "Compounding Rewards", r.Pending = "Pending";
            var tO = n(75228),
                tK = n(43422),
                tq = n(8282);
            let tN = (0, n(95495).O4)("staking-alert-shown", !1);
            var tW = n(48583);
            let tY = (0, p.memo)(function(e) {
                let {
                    isStakingAlertShown: t,
                    setIsStakingAlertShown: n
                } = function() {
                    let [e, t] = (0, tW.KO)(tN);
                    return {
                        isStakingAlertShown: e,
                        setIsStakingAlertShown: t
                    }
                }();
                return t ? null : (0, d.jsx)(tq.b, {
                    onClose: () => n(!0),
                    ...e,
                    children: "Your pending operations will be automatically executed for you; no further action is needed on your part. However, you retain the possibility to execute them manually if you choose to do so."
                })
            });
            var tV = n(48006),
                tH = n(46129),
                tX = n(84295);

            function tG(e) {
                let {
                    width: t = 17,
                    height: n = 17,
                    style: s,
                    stroke: o,
                    color: r,
                    strokeWidth: a = 1.5,
                    ...l
                } = e, i = (0, eL.rZ)(), c = r || i.colors.tanssiTeal[9];
                return (0, d.jsxs)("svg", {
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: {
                        width: (0, B.h)(t),
                        height: (0, B.h)(n),
                        ...s
                    },
                    color: c,
                    stroke: o,
                    ...l,
                    children: [(0, d.jsx)("path", {
                        d: "M1.52938 5.84715C1.02937 5.63269 0.751152 5.14147 0.750003 4.59242C0.748855 4.04336 1.02505 3.55055 1.52446 3.33359L6.54329 1.15326C7.72419 0.640239 9.03903 0.61603 10.235 1.08453L15.4369 3.12226C15.9437 3.32078 16.2353 3.8043 16.2495 4.35559C16.2637 4.90698 15.997 5.41021 15.4977 5.63974L10.4782 7.94703C9.22492 8.52312 7.8114 8.54148 6.54599 7.99875L1.52938 5.84715Z",
                        stroke: c,
                        strokeWidth: a,
                        strokeLinejoin: "round"
                    }), (0, d.jsx)("path", {
                        d: "M1 9.14062L6.00544 11.4288C7.58964 12.153 9.41036 12.153 10.9946 11.4288L16 9.14062",
                        stroke: c,
                        strokeWidth: a,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, d.jsx)("path", {
                        d: "M1 12.5703L6.00544 14.8585C7.58964 15.5827 9.41036 15.5827 10.9946 14.8585L16 12.5703",
                        stroke: c,
                        strokeWidth: a,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                })
            }

            function tQ(e) {
                let {
                    width: t = 25,
                    height: n = 24,
                    style: s,
                    stroke: o,
                    color: r,
                    strokeWidth: a = 1.5,
                    ...l
                } = e, i = (0, eL.rZ)(), c = r || i.colors.tanssiTeal[9];
                return (0, d.jsxs)("svg", {
                    width: "25",
                    height: "24",
                    viewBox: "0 0 25 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: {
                        width: (0, B.h)(t),
                        height: (0, B.h)(n),
                        ...s
                    },
                    color: c,
                    stroke: o,
                    ...l,
                    children: [(0, d.jsx)("g", {
                        filter: "url(#filter0_d_1429_135)",
                        children: (0, d.jsx)("path", {
                            d: "M9 8L6.08142 9.31999C4.63605 9.94267 4.64062 12.1085 6.08861 12.7244L10.515 14.607C11.8038 15.1552 13.2462 15.1364 14.5218 14.5549L18.9508 12.536C20.3919 11.8791 20.3353 9.69818 18.8622 9.12593L16 8",
                            stroke: c,
                            strokeWidth: a,
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    }), (0, d.jsx)("path", {
                        d: "M5 15.1455L10.0054 17.4337C11.5896 18.1579 13.4104 18.1579 14.9946 17.4337L20 15.1455",
                        stroke: c,
                        strokeWidth: a,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, d.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.21967 4.99264L11.9926 0.21967C12.2855 -0.0732231 12.7604 -0.0732231 13.0533 0.21967L17.8263 4.99264C18.1192 5.28553 18.1192 5.76041 17.8263 6.0533C17.5334 6.34619 17.0585 6.34619 16.7656 6.0533L13.273 2.56066L13.273 10.75C13.273 11.1642 12.9372 11.5 12.523 11.5C12.1088 11.5 11.773 11.1642 11.773 10.75L11.773 2.56066L8.28033 6.0533C7.98744 6.34619 7.51256 6.34619 7.21967 6.0533C6.92678 5.76041 6.92678 5.28553 7.21967 4.99264Z",
                        fill: c
                    }), (0, d.jsx)("defs", {
                        children: (0, d.jsxs)("filter", {
                            id: "filter0_d_1429_135",
                            x: "0.25",
                            y: "7.25",
                            width: "24.5",
                            height: "16.5049",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [(0, d.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }), (0, d.jsx)("feColorMatrix", { in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, d.jsx)("feOffset", {
                                dy: "4"
                            }), (0, d.jsx)("feGaussianBlur", {
                                stdDeviation: "2"
                            }), (0, d.jsx)("feComposite", {
                                in2: "hardAlpha",
                                operator: "out"
                            }), (0, d.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_1429_135"
                            }), (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_1429_135",
                                result: "shape"
                            })]
                        })
                    })]
                })
            }
            var t$ = n(11163);

            function tJ(e) {
                let {
                    secondsTo: t
                } = e, {
                    locale: n = "en"
                } = (0, t$.useRouter)(), s = (0, eL.rZ)(), o = new Date(Date.now() + (null != t ? t : 0) * 1e3).toLocaleString(n);
                return (0, d.jsx)(v.x, {
                    size: "sm",
                    c: s.colors.dark[3],
                    children: "".concat(o)
                })
            }

            function t0(e) {
                let {
                    width: t = 18,
                    height: n = 16,
                    style: s,
                    stroke: o,
                    color: r = "white",
                    opacity: a = .5,
                    ...l
                } = e;
                return (0, d.jsx)("svg", {
                    width: "18",
                    height: "16",
                    viewBox: "0 0 18 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: {
                        width: (0, B.h)(t),
                        height: (0, B.h)(n),
                        ...s
                    },
                    color: r,
                    stroke: o,
                    ...l,
                    children: (0, d.jsx)("path", {
                        opacity: a,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M9.39447 0.00146484C9.0631 0.00146484 8.79447 0.270094 8.79447 0.601465C8.79447 0.932836 9.0631 1.20146 9.39447 1.20146C13.1101 1.20146 16.1221 4.21355 16.1221 7.92913C16.1221 11.6447 13.1101 14.6568 9.39447 14.6568C5.93443 14.6568 3.08445 12.0448 2.70879 8.68505L3.10876 9.08501C3.34307 9.31933 3.72297 9.31933 3.95729 9.08501C4.1916 8.8507 4.1916 8.4708 3.95729 8.23649L2.49175 6.77095C2.25744 6.53664 1.87754 6.53664 1.64322 6.77095L0.177689 8.23649C-0.0566255 8.4708 -0.0566255 8.8507 0.177689 9.08501C0.412004 9.31933 0.791903 9.31933 1.02622 9.08501L1.49607 8.61516C1.84383 12.6723 5.24725 15.8568 9.39447 15.8568C13.7728 15.8568 17.3221 12.3075 17.3221 7.92913C17.3221 3.5508 13.7728 0.00146484 9.39447 0.00146484ZM8.66055 3.66553C8.99192 3.66553 9.26055 3.93416 9.26055 4.26553V8.06396L13.0571 8.06397C13.3885 8.06397 13.6571 8.33259 13.6571 8.66397C13.6571 8.99534 13.3885 9.26397 13.0571 9.26397H8.66055C8.32918 9.26397 8.06055 8.99534 8.06055 8.66397C8.06055 8.66355 8.06055 8.66314 8.06055 8.66273C8.06055 8.66253 8.06055 8.66233 8.06055 8.66213L8.06055 4.26553C8.06055 3.93416 8.32918 3.66553 8.66055 3.66553Z",
                        fill: r
                    })
                })
            }

            function t1(e) {
                let {
                    seconds: t
                } = e;
                return (0, d.jsx)(k.M, {
                    children: !!t && (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(t0, {}), (0, d.jsxs)(v.x, {
                            ml: "xs",
                            size: "sm",
                            display: "inline-block",
                            children: ["~", Math.ceil(t / 60), " mins left"]
                        })]
                    })
                })
            }
            var t6 = n(36480),
                t5 = n.n(t6);

            function t2(e) {
                let {
                    config: t,
                    operation: n,
                    isCheckable: s,
                    isSelected: o,
                    isDisabled: r,
                    onSelect: a,
                    onExecute: l
                } = e, [i, {
                    toggle: c
                }] = (0, eI.q)(!1), {
                    md: u
                } = (0, e5.a)(), m = (0, L.jY)(n.candidate, t), {
                    isLoading: x,
                    send: h
                } = ef(t), g = (0, L.hs)(n.at + 2, t), p = 0 === g, y = "Leaving" === n.type, b = function(e, t, n) {
                    let s = "Leaving" === e.type,
                        o = e.amount.toDecimal(2),
                        r = e.amount.originSymbol;
                    return (0, d.jsxs)(v.x, {
                        children: ["".concat(t ? "You can" : "Requested to", " ").concat(s ? "unstake" : "stake", " ").concat(o, " ").concat(r, " tokens ").concat(s ? "from" : "on", " Block Producer "), (0, d.jsx)(e6, {
                            address: e.candidate,
                            children: (0, d.jsx)(v.x, {
                                span: !0,
                                children: n || (0, j.L)(e.candidate, 4, 4)
                            })
                        })]
                    })
                }(n, p, null == m ? void 0 : m.display);
                return (0, d.jsxs)(w.Z, {
                    wrap: "nowrap",
                    role: "row",
                    children: [s && (0, d.jsx)(tV.X, {
                        role: "checkbox",
                        style: {
                            visibility: p ? void 0 : "hidden"
                        },
                        "aria-label": "Select row",
                        checked: o,
                        onChange: a,
                        disabled: r || x
                    }), (0, d.jsx)(tE.X, {
                        className: t5().row_paper,
                        "data-selected": o,
                        children: u ? (0, d.jsxs)(eF.r, {
                            align: "center",
                            children: [(0, d.jsx)(eF.r.Col, {
                                span: 8,
                                children: (0, d.jsxs)(w.Z, {
                                    align: "center",
                                    wrap: "nowrap",
                                    children: [(0, d.jsx)(k.M, {
                                        className: t5().icon_wrapper,
                                        children: y ? (0, d.jsx)(tQ, {}) : (0, d.jsx)(tG, {})
                                    }), b]
                                })
                            }), (0, d.jsx)(eF.r.Col, {
                                span: "auto",
                                children: (0, d.jsx)(t1, {
                                    seconds: g
                                })
                            }), (0, d.jsx)(eF.r.Col, {
                                span: "content",
                                children: (0, d.jsx)(eX.K, {
                                    miw: 100,
                                    px: "sm",
                                    withArrow: !1,
                                    fw: 600,
                                    variant: y ? "light" : void 0,
                                    disabled: !p || r,
                                    loading: x,
                                    onClick: () => {
                                        l(), h([n])
                                    },
                                    children: y ? "Unstake" : "Stake"
                                })
                            })]
                        }) : (0, d.jsxs)(f.K, {
                            children: [(0, d.jsxs)(w.Z, {
                                justify: "space-between",
                                children: [function(e, t) {
                                    let n = "Leaving" === e.type ? "Unstake" : "Stake",
                                        s = e.amount.toDecimal(2),
                                        o = e.amount.originSymbol;
                                    return t ? (0, d.jsx)(v.x, {
                                        children: "".concat(n, " ").concat(s, " ").concat(o)
                                    }) : (0, d.jsx)(v.x, {
                                        children: "".concat(n, " request")
                                    })
                                }(n, p), (0, d.jsx)(th.k, {
                                    onMouseDown: c,
                                    children: (0, d.jsx)(eG.W, {
                                        isOpen: i
                                    })
                                })]
                            }), (0, d.jsxs)(e_.U, { in: i,
                                mt: 25,
                                children: [(0, d.jsxs)(w.Z, {
                                    mb: 10,
                                    justify: "space-between",
                                    children: [(0, d.jsx)(tJ, {
                                        secondsTo: g
                                    }), (0, d.jsx)(t1, {
                                        seconds: g
                                    })]
                                }), (0, d.jsxs)(w.Z, {
                                    wrap: "nowrap",
                                    mb: 10,
                                    children: [(0, d.jsx)(k.M, {
                                        className: t5().icon_wrapper,
                                        children: y ? (0, d.jsx)(tQ, {
                                            width: 50
                                        }) : (0, d.jsx)(tG, {
                                            width: 50
                                        })
                                    }), (0, d.jsx)(v.x, {
                                        size: "sm",
                                        children: b
                                    })]
                                }), (0, d.jsx)(eX.K, {
                                    miw: 100,
                                    w: "100%",
                                    px: "sm",
                                    withArrow: !1,
                                    fw: 600,
                                    variant: y ? "light" : void 0,
                                    disabled: !p || r,
                                    loading: x,
                                    style: {
                                        border: 0
                                    },
                                    onClick: () => {
                                        l(), h([n])
                                    },
                                    children: y ? "Unstake" : "Stake"
                                })]
                            })]
                        })
                    })]
                })
            }

            function t3(e) {
                let {
                    config: t
                } = e, {
                    md: n
                } = (0, e5.a)(), [s, o] = (0, p.useState)(!1), [r, {
                    append: a,
                    remove: l,
                    setState: i
                }] = (0, tH.n)([]), {
                    data: c
                } = eg(t), u = (0, L.$$)(t), {
                    isLoading: m,
                    send: x
                } = ef(t, {
                    onSuccess: () => {
                        i([]), o(!1)
                    }
                });

                function h() {
                    o(e => {
                        let t = !e;
                        return t && u && c ? i(c.filter(e => {
                            let {
                                at: t
                            } = e;
                            return t + 2 <= u
                        }).map(e => {
                            let {
                                id: t
                            } = e;
                            return t
                        })) : i([]), t
                    })
                }
                if (!(null == c ? void 0 : c.length)) return null;
                let g = !!(null == c ? void 0 : c.filter(e => {
                    let {
                        at: t
                    } = e;
                    return !!u && t + 2 <= u
                }).length);
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(tY, {
                        mb: 35
                    }), (0, d.jsxs)(f.K, {
                        mb: 35,
                        "data-testid": "my-activity",
                        children: [(0, d.jsx)(eK.x, {
                            h: 27,
                            mx: "md",
                            children: (0, d.jsx)(v.x, {
                                h: 27,
                                px: "md",
                                display: "inline-block",
                                style: {
                                    borderBottom: "1px solid white"
                                },
                                children: "My Activity"
                            })
                        }), (0, d.jsx)(f.K, {
                            children: null == c ? void 0 : c.map(e => {
                                let n = r.indexOf(e.id),
                                    s = -1 !== n;
                                return (0, d.jsx)(t2, {
                                    config: t,
                                    operation: e,
                                    isCheckable: g,
                                    isSelected: s,
                                    isDisabled: m,
                                    onSelect: () => {
                                        s ? l(n) : a(e.id), o(!1)
                                    },
                                    onExecute: () => s && l(n)
                                }, e.id)
                            })
                        }), n ? (0, d.jsxs)(w.Z, {
                            justify: g ? "space-between" : "end",
                            children: [g && (0, d.jsx)(tV.X, {
                                role: "checkbox",
                                label: "Select all",
                                "aria-label": "Select all",
                                checked: s,
                                disabled: m,
                                onChange: () => h()
                            }), (0, d.jsxs)(eK.x, {
                                mr: "md",
                                children: [(0, d.jsx)(v.x, {
                                    display: "inline-block",
                                    opacity: .5,
                                    mr: "sm",
                                    children: "Executing ".concat(r.length, " operations")
                                }), (0, d.jsx)(eX.K, {
                                    miw: "auto",
                                    fw: 600,
                                    rightSection: (0, d.jsx)(tX.Z1Y, {}),
                                    disabled: !r.length,
                                    isTooltipDisabled: !!r.length,
                                    tooltipLabel: "Please select at least one operation.",
                                    loading: m,
                                    onClick: () => c && x(c.filter(e => {
                                        let {
                                            id: t
                                        } = e;
                                        return r.includes(t)
                                    })),
                                    children: "Execute"
                                })]
                            })]
                        }) : (0, d.jsxs)(f.K, {
                            children: [g && (0, d.jsx)(tV.X, {
                                role: "checkbox",
                                label: "Select all",
                                "aria-label": "Select all",
                                checked: s,
                                disabled: m,
                                onChange: () => h()
                            }), (0, d.jsx)(v.x, {
                                display: "inline-block",
                                opacity: .5,
                                mr: "sm",
                                children: "Executing ".concat(r.length, " operations")
                            }), (0, d.jsx)(eX.K, {
                                miw: "auto",
                                fw: 600,
                                rightSection: (0, d.jsx)(tX.Z1Y, {}),
                                disabled: !r.length,
                                isTooltipDisabled: !!r.length,
                                tooltipLabel: "Please select at least one operation.",
                                loading: m,
                                onClick: () => c && x(c.filter(e => {
                                    let {
                                        id: t
                                    } = e;
                                    return r.includes(t)
                                })),
                                children: "Execute"
                            })]
                        })]
                    })]
                })
            }

            function t4(e) {
                let {
                    config: t
                } = e, {
                    isLoading: n,
                    isEnabled: s
                } = (0, tK.m)(), {
                    isEnabled: o
                } = function() {
                    let e = (0, tO.P)("is-proxy-enabled");
                    return {
                        isEnabled: !!(null == e ? void 0 : e.enabled),
                        isLoading: !e
                    }
                }();
                return n || s ? (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(c.n, {
                        isLong: !0
                    }), (0, d.jsx)(tF.D, {
                        mb: "xs",
                        c: "white",
                        fw: 500,
                        size: 36,
                        children: "Staking"
                    }), (0, d.jsxs)(w.Z, {
                        justify: "space-between",
                        h: 40,
                        children: [t.key === N.Uw.key && (0, d.jsxs)(v.x, {
                            mb: "lg",
                            children: ["Get your ".concat(t.asset.originSymbol, " tokens from our "), (0, d.jsx)(u.H, {
                                size: "md",
                                label: "".concat(t.name, " Faucet"),
                                url: "https://airlyft.one/tanssinetwork/get-dance-tokens-1711459496483",
                                withIcon: !1
                            }), " to start Staking."]
                        }), o && (0, d.jsx)(M, {
                            proxyType: "Staking",
                            config: t
                        })]
                    }), (0, d.jsx)(tU, {
                        config: t
                    }), (0, d.jsx)(t3, {
                        config: t
                    }), (0, d.jsx)(t_, {
                        config: t
                    }), (0, d.jsx)(tf, {
                        config: t
                    })]
                }) : null
            }

            function t8() {
                let e = N.Y8 ? N.ah : N.D0 ? N.I_ : N.Uw;
                return (0, d.jsx)(t4, {
                    config: e
                })
            }
        },
        20770: function(e) {
            e.exports = {
                track: "SliderStaking_track__gmtz7",
                mark: "SliderStaking_mark__TFVki"
            }
        },
        15687: function(e) {
            e.exports = {
                tab: "CollatorsTabs_tab__OLODn",
                tabLabel: "CollatorsTabs_tabLabel__zhwMJ",
                tabList: "CollatorsTabs_tabList__GDaXw"
            }
        },
        36480: function(e) {
            e.exports = {
                row_paper: "PendingOperations_row_paper__nFLVI",
                icon_wrapper: "PendingOperations_icon_wrapper__g_PWr"
            }
        }
    },
    function(e) {
        e.O(0, [9317, 4396, 9779, 9774, 2888, 179], function() {
            return e(e.s = 5673)
        }), _N_E = e.O()
    }
]);
//# sourceMappingURL=staking-3654e607c66aae87.js.map