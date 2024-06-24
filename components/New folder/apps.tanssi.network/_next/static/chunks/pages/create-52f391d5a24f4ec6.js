! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "59bed703-0ba4-4e48-bdfe-afa14fa12aca", e._sentryDebugIdIdentifier = "sentry-dbid-59bed703-0ba4-4e48-bdfe-afa14fa12aca")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2417], {
        59782: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/create", function() {
                return t(54318)
            }])
        },
        48172: function(e, n, t) {
            "use strict";
            t.d(n, {
                n: function() {
                    return p
                }
            });
            var i = t(85893),
                a = t(57373),
                r = {
                    src: "/_next/static/media/tanssi_campaign_long_banner.8f59bf01.webp",
                    height: 240,
                    width: 2456,
                    blurDataURL: "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACwAQCdASoIAAEAAkA4JZQCw7D0h/pcAP7322KH4agaizBANS7sAAAA",
                    blurWidth: 8,
                    blurHeight: 1
                },
                s = {
                    src: "/_next/static/media/tanssi_campaign_mobile_banner.d9d2c0e2.webp",
                    height: 820,
                    width: 700,
                    blurDataURL: "data:image/webp;base64,UklGRoIAAABXRUJQVlA4WAoAAAAQAAAABgAABwAAQUxQSBMAAAABD/D7/4iIIBBIVstfa4iI/ocGAFZQOCBIAAAA8AEAnQEqBwAIAAJAOCWMArABFswiM48AAP7vrcnL637xHshOW6TR922WGXU+GrednUH5xJhcOU7YxC8ziKMcEdYVzDuBhgAA",
                    blurWidth: 7,
                    blurHeight: 8
                },
                A = {
                    src: "/_next/static/media/tanssi_campaign_regular_banner.1d70b854.webp",
                    height: 240,
                    width: 1640,
                    blurDataURL: "data:image/webp;base64,UklGRloAAABXRUJQVlA4WAoAAAAQAAAABwAAAAAAQUxQSAkAAAAA+/////////sAVlA4ICoAAADQAQCdASoIAAEAAkA4JYwCdAEO/gOOAAD+8YoTkS3ovsRrLo6cpmqLgAA=",
                    blurWidth: 8,
                    blurHeight: 1
                },
                o = t(48583);
            let l = (0, t(95495).O4)("is-campaign-banner-visible", !0);
            var d = t(65984),
                c = t(60967),
                u = t(80929),
                b = t(91992),
                h = t(25675),
                f = t.n(h),
                g = t(18644);

            function p(e) {
                let {
                    isLong: n = !1
                } = e, {
                    md: t
                } = (0, a.a)(), h = (0, d.rZ)(), {
                    isCampaignBannerVisible: p,
                    setIsCampaignBannerVisible: w
                } = function() {
                    let [e, n] = (0, o.KO)(l);
                    return {
                        isCampaignBannerVisible: e,
                        setIsCampaignBannerVisible: n
                    }
                }(), x = () => {
                    w(!p)
                };
                return p ? (0, i.jsxs)(c.e, {
                    href: "https://lfd.tanssi.network/",
                    target: "_blank",
                    style: {
                        position: "relative",
                        display: "block",
                        width: "100%"
                    },
                    children: [(0, i.jsx)(u.E, {
                        component: f(),
                        alt: "Let's Forkin Dance banner",
                        src: t ? n ? r : A : s,
                        style: {
                            width: "100%",
                            height: "auto"
                        },
                        priority: !0,
                        width: 1536,
                        height: 1024
                    }), (0, i.jsx)(b.A, {
                        style: {
                            position: "absolute",
                            top: "3%",
                            right: "2%",
                            backgroundColor: "transparent"
                        },
                        onClick: e => {
                            e.preventDefault(), x()
                        },
                        children: (0, i.jsx)(g.Lp2, {
                            size: 20
                        })
                    }), (0, i.jsx)("div", {
                        style: {
                            position: "absolute",
                            bottom: "3%",
                            right: "2%",
                            backgroundColor: "transparent",
                            color: h.other.colors.white
                        },
                        children: (0, i.jsx)(g.$sw, {
                            size: 20
                        })
                    })]
                }) : null
            }
        },
        52978: function(e, n, t) {
            "use strict";
            t.d(n, {
                u: function() {
                    return o
                },
                v: function() {
                    return B
                }
            });
            var i = t(85893),
                a = t(48172),
                r = t(47587),
                s = t(11517),
                A = t(54410);

            function o() {
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(a.n, {}), (0, i.jsx)(r.U, {
                        children: "Welcome to Dancebox"
                    }), (0, i.jsx)(A.x, {
                        children: "Dancebox is Tanssi's TestNet environment, designed for seamless deployment of appchains."
                    }), (0, i.jsx)(s.V, {})]
                })
            }
            var l = t(8282),
                d = t(47530),
                c = t(29075),
                u = t(63530),
                b = t(57373),
                h = t(96176),
                f = t(24166),
                g = t(54680);

            function p(e) {
                let { ...n
                } = e, t = (0, c.B)(), a = (0, h.SF)(), r = (0, d.DE)(t.relay), {
                    md: s
                } = (0, b.a)(), {
                    isProtected: o
                } = (0, u.h)();
                return !1 === (a && r ? r.manager === a : void 0) && o && (0, i.jsxs)(g.b, {
                    maw: 690,
                    pb: 30,
                    title: "Wrong address",
                    ...n,
                    children: ["You are connected with a wrong address. Please connect with the address ", (0, i.jsx)(A.x, {
                        display: "inline-block",
                        fw: "bold",
                        children: s ? null == r ? void 0 : r.manager : (0, f.L)(null == r ? void 0 : r.manager, 5, 5)
                    }), " you used to reserve the Appchain ID."]
                })
            }
            var w = t(15309),
                x = t(3117),
                _ = t(8864),
                m = t(70277),
                k = t(3237),
                D = t(13966),
                j = t(8207),
                v = t(67294),
                y = t(4694);

            function B() {
                let e = (0, h.SF)(),
                    n = (0, k.t)(),
                    {
                        getStepComponent: t
                    } = (0, y.X3)(),
                    {
                        activeStep: a,
                        getStepIndex: r,
                        setActiveStep: s
                    } = (0, y.X3)(),
                    A = (0, D.G$)(),
                    o = (0, m.S)(),
                    d = (0, _.Z)(),
                    c = r(w.h.Balances),
                    u = n && a > c && !e;
                return ((0, v.useEffect)(() => {
                    u && s(c)
                }, [u, c, s]), A !== x.cB.Flashbox || o.isLoading || o.isEnabled) ? A !== x.cB.Dancebox || d.isLoading || d.isEnabled ? u ? null : (0, i.jsxs)(j.K, {
                    w: "100%",
                    align: "center",
                    children: [(0, i.jsx)(p, {
                        mb: 10
                    }), t()]
                }) : (0, i.jsx)(l.b, {
                    children: d.text
                }) : (0, i.jsx)(l.b, {
                    children: o.text
                })
            }
        },
        54318: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return r
                }
            });
            var i = t(85893),
                a = t(52978);

            function r() {
                return (0, i.jsx)(a.u, {})
            }
        }
    },
    function(e) {
        e.O(0, [9774, 2888, 179], function() {
            return e(e.s = 59782)
        }), _N_E = e.O()
    }
]);
//# sourceMappingURL=create-52f391d5a24f4ec6.js.map