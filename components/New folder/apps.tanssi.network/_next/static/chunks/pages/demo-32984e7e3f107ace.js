! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6b249daf-5eb0-4f6c-8f0e-6bf313e2e767", e._sentryDebugIdIdentifier = "sentry-dbid-6b249daf-5eb0-4f6c-8f0e-6bf313e2e767")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9656], {
        17553: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/demo", function() {
                return n(97573)
            }])
        },
        97573: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eo
                }
            });
            var a = n(85893),
                s = n(28532),
                i = n(48172),
                r = n(47587),
                l = n(65437),
                o = n(27884),
                d = n(71723),
                c = n(3117),
                u = n(54295),
                p = n(60089),
                x = n(30202),
                m = n(67294),
                h = n(58739),
                y = n(13318),
                f = n(75556),
                b = n(83540);
            let g = [{
                    inputs: [{
                        internalType: "uint256",
                        name: "_prize",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }],
                    name: "OwnableInvalidOwner",
                    type: "error"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "OwnableUnauthorizedAccount",
                    type: "error"
                }, {
                    inputs: [],
                    name: "ReentrancyGuardReentrantCall",
                    type: "error"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "player",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "captureTime",
                        type: "uint256"
                    }],
                    name: "FlagCaptured",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "previousOwner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "OwnershipTransferred",
                    type: "event"
                }, {
                    inputs: [],
                    name: "captureFlag",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "capturePrice",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "currentFlagHolder",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "flagCaptureTimes",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "flagHolders",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_index",
                        type: "uint256"
                    }],
                    name: "getPlayers",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getPlayersLength",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_player",
                        type: "address"
                    }],
                    name: "getTime",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "lastCaptureTimestamp",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_newPrize",
                        type: "uint256"
                    }],
                    name: "setPrize",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "transferOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }],
                w = "0xFA0F89CD80A1C4d8Fcb9130f7Ac9b77f3094B453",
                j = ["0x48E880C03FfD6BB4178ddcFfeF957d1B1663eBC0", "0x0831cc451e786CA95e8E6D876EE3ec1Ff48C2a8D", "0xB0A33A136250db0Eb256AD7C370F9eacF6f935ed", "0x093A17d646F3eABcE54e4BD8673Dea17A545b698", "0xDA1eaa6D6BA271B1FB9e5d014FdBff6326d26aF6", "0x0589B3CaB6A1c62468bFB046C9B367b927b42172", "0x77Aaf0D268CAAc94A5E79bB287c64F6810f8a760", "0x2DFB70A856bC19A66a77F73aC61cc6afA81Fc5E3", "0xcB75d8b788e623fC688fA145F491a1333002AeAF", "0xb59e15Ea166642aCbe6faFf25Ff90EcC3fea0949", "0x45F80Bdb62141bC9156Fd88bC148026a8884281c", "0xf182ED047Ab083509e26284CF8A635EC66B4F36C", "0x4DC3463264C1b1AA9b31c20063Fc71e5E79EA72B", "0xf88070E650475A8c33795dB7021f7D223a50855B", "0xf88070E650475A8c33795dB7021f7D223a50855B", "0x500B671fF4f169e3477Ca69F6Fca838002Ac0aE8", "0xe2FE5036F43D2aadfAe4f2C439e5c89b10351cb4", "0x4375e04fD4f4D314C9f4603771491609D7dcB90a", "0xB8dcF4b2b5036bE6D500d1e7fB8D4D6955E15fd9"],
                A = j.map(e => ({
                    abi: g,
                    address: w,
                    functionName: "getTime",
                    args: [e]
                }));
            var C = n(89810);

            function T() {
                return (0, C.u)({
                    abi: g,
                    address: w,
                    functionName: "capturePrice",
                    args: []
                })
            }

            function F() {
                return (0, C.u)({
                    abi: g,
                    address: w,
                    functionName: "currentFlagHolder",
                    args: []
                })
            }

            function D() {
                return (0, C.u)({
                    abi: g,
                    address: w,
                    functionName: "lastCaptureTimestamp",
                    args: []
                })
            }
            var E = n(12410),
                v = n(66338),
                k = n(57373),
                B = n(24166),
                _ = n(65984),
                z = n(28008),
                M = n(54410),
                N = n(356),
                O = n(1506),
                S = n(93445),
                Z = n(65258),
                H = n(5219),
                I = n(92321);

            function P() {
                let {
                    xs: e,
                    sm: t
                } = (0, k.a)(), {
                    chainId: n,
                    address: s
                } = (0, I.m)(), i = (0, _.rZ)(), {
                    isPending: r,
                    capture: C
                } = function() {
                    let {
                        data: e
                    } = T(), {
                        queryKey: t
                    } = F(), {
                        queryKey: n
                    } = D(), a = (0, x.NL)(), {
                        transactionError: s,
                        transactionSuccess: i
                    } = (0, u.o)(c.TA), {
                        isPending: r,
                        data: l,
                        writeContract: o
                    } = (0, h.S)({
                        mutation: {
                            onSuccess: () => {
                                (0, p.E)(!0)
                            },
                            onError: e => {
                                (0, p.E)(!1), s({
                                    error: e
                                })
                            }
                        }
                    }), d = "https://fra-dancebox-3001-bs.a.dancebox.tanssi.network/tx/".concat(l), {
                        data: j
                    } = (0, y.G)({
                        abi: g,
                        address: w,
                        functionName: "captureFlag",
                        args: [],
                        value: e
                    }), {
                        data: A
                    } = (0, f.N)(null == j ? void 0 : j.request), {
                        error: C,
                        isError: E,
                        isFetching: v,
                        isSuccess: k
                    } = (0, b.A)({
                        hash: l
                    }), B = () => {
                        (0, p.E)(!1), i({
                            txHash: l || "",
                            blockHash: "",
                            url: d
                        }), a.invalidateQueries({
                            queryKey: t
                        }), a.invalidateQueries({
                            queryKey: n
                        })
                    };
                    return (0, m.useEffect)(() => {
                        k && B()
                    }, [k]), (0, m.useEffect)(() => {
                        E && ((0, p.E)(!1), s({
                            error: C,
                            txHash: l,
                            url: d
                        }))
                    }, [C, l, E, s, d]), {
                        capture: () => {
                            A && (null == j ? void 0 : j.request) && o({ ...j.request,
                                gas: 2 n * A
                            })
                        },
                        hash: l,
                        isPending: r || v
                    }
                }(), {
                    isSuccess: P,
                    data: q
                } = T(), {
                    isSuccess: L,
                    data: K
                } = F(), {
                    isSuccess: U,
                    data: W
                } = D(), {
                    players: R
                } = function() {
                    let {
                        isSuccess: e,
                        data: t
                    } = (0, v.N)({
                        contracts: A,
                        multicallAddress: "0xcA11bde05977b3631167028862bE2a173976CA11",
                        query: {
                            refetchOnWindowFocus: !1
                        }
                    }), n = (0, m.useMemo)(() => {
                        if (e && t) return j.map((e, n) => ({
                            address: e,
                            timestamp: t[n].result
                        })).sort((e, t) => Number(t.timestamp) - Number(e.timestamp)).slice(0, 10).map(e => ({
                            address: e.address,
                            duration: (0, E.L)(Number(1000 n * e.timestamp))
                        }))
                    }, [e, t]);
                    return {
                        isSuccess: e,
                        players: n
                    }
                }(), J = (0, m.useMemo)(() => {
                    if (!W) return;
                    let e = BigInt(Date.now()) - 1000 n * W;
                    return (0, E.L)(Number(e))
                }, [W]), X = n !== c.jg || !s || s === K;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(z.D, {
                        order: 2,
                        size: 24,
                        c: "white",
                        children: "Capture the Flag"
                    }), (0, a.jsxs)(o.D, {
                        style: {
                            flex: 1
                        },
                        children: [(0, a.jsx)(M.x, {
                            children: "Connect to Tanssi EVM AppChain and play Capture The Flag to test the network. Claim ".concat(c.TA.asset.originSymbol, " tokens and click on Claim Flag to become the current leader.")
                        }), (0, a.jsxs)(N.Z, {
                            mt: "md",
                            gap: 5,
                            align: "center",
                            children: [(0, a.jsx)(M.x, {
                                children: "Cost to capture: "
                            }), P ? (0, a.jsxs)(M.x, {
                                span: !0,
                                c: "tanssiTeal.9",
                                children: [c.TA.getAssetAmount(q).toDecimal(), " ", c.TA.asset.originSymbol]
                            }) : (0, a.jsx)(O.O, {
                                w: 80,
                                h: 16
                            })]
                        }), (0, a.jsxs)(N.Z, {
                            justify: "space-between",
                            align: "center",
                            mt: "xs",
                            children: [L ? (0, Z.y)(K) ? (0, a.jsxs)(N.Z, {
                                gap: 0,
                                children: [(0, a.jsx)(M.x, {
                                    span: !0,
                                    mr: 5,
                                    children: "Current Holder:"
                                }), (0, a.jsx)(S.x, {
                                    children: L && U && J ? (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)(M.x, {
                                            span: !0,
                                            c: "tanssiTeal.9",
                                            children: (0, B.L)(K, 5, 5)
                                        }), (0, a.jsx)(M.x, {
                                            span: !0,
                                            children: " holding for "
                                        }), (0, a.jsxs)(M.x, {
                                            span: !0,
                                            children: [J, "."]
                                        })]
                                    }) : (0, a.jsx)(O.O, {
                                        w: 200,
                                        h: 16
                                    })
                                })]
                            }) : (0, a.jsx)(M.x, {
                                children: "Be the first to claim the flag!"
                            }) : (0, a.jsx)(O.O, {
                                w: "50%",
                                h: 16
                            }), (0, a.jsx)(l.K, {
                                miw: {
                                    base: "100%",
                                    xs: "auto"
                                },
                                size: "lg",
                                leftSection: (0, a.jsx)(H.Z, {}),
                                withArrow: !1,
                                loading: r,
                                isTooltipDisabled: !X,
                                tooltipLabel: s ? n !== c.jg ? "Switch to Tanssi Demo network." : "You are the current holder." : "Connect your wallet to claim the flag.",
                                onClick: C,
                                disabled: X,
                                children: "Claim Flag"
                            })]
                        }), (0, a.jsx)(z.D, {
                            order: 2,
                            size: 24,
                            c: "white",
                            mt: "xl",
                            children: "Leaderboard"
                        }), (0, a.jsxs)(N.Z, {
                            justify: "space-between",
                            mt: "lg",
                            children: [(0, a.jsx)(M.x, {
                                c: "gray.6",
                                children: "Address"
                            }), (0, a.jsx)(M.x, {
                                c: "gray.6",
                                children: "Total Time Held"
                            })]
                        }), (0, a.jsx)(S.x, {
                            mt: "sm",
                            children: R ? R.map((n, s) => {
                                let {
                                    address: r,
                                    duration: l
                                } = n;
                                return (0, a.jsxs)(N.Z, {
                                    justify: "space-between",
                                    py: "xs",
                                    style: {
                                        borderTop: "1px solid var(--mantine-color-dark-6)"
                                    },
                                    children: [(0, a.jsxs)(N.Z, {
                                        gap: "xs",
                                        align: "center",
                                        children: [(0, a.jsxs)(M.x, {
                                            children: [s + 1, ". ", t ? r : (0, B.A)(r, e ? "lg" : "sm")]
                                        }), (0, a.jsx)(d.T, {
                                            value: r,
                                            size: 20,
                                            color: i.other.colors.orange
                                        })]
                                    }), (0, a.jsx)(M.x, {
                                        children: l
                                    })]
                                }, s)
                            }) : Array.from({
                                length: 10
                            }).map((e, t) => (0, a.jsxs)(N.Z, {
                                justify: "space-between",
                                py: "xs",
                                h: 46,
                                style: {
                                    borderTop: "1px solid var(--mantine-color-dark-6)"
                                },
                                children: [(0, a.jsx)(O.O, {
                                    w: "50%",
                                    h: 18
                                }), (0, a.jsx)(O.O, {
                                    w: 100,
                                    h: 18
                                })]
                            }, t))
                        })]
                    })]
                })
            }
            var q = n(25086),
                L = n(24920),
                K = n(65065),
                U = n(13165);

            function W(e) {
                let {
                    children: t,
                    onClick: n,
                    ...s
                } = e;
                return (0, a.jsx)(L.z, {
                    miw: {
                        base: "100%",
                        xs: "auto"
                    },
                    size: "lg",
                    leftSection: (0, a.jsx)(K.Z, {
                        size: 20,
                        stroke: 1.5
                    }),
                    rightSection: (0, a.jsx)(U.Z, {
                        size: 16
                    }),
                    onClick: n,
                    "data-testid": "connect-evm-wallet-button",
                    ...s,
                    children: t
                })
            }
            let R = () => {
                let {
                    xs: e
                } = (0, k.a)();
                return (0, a.jsx)(q.NL.Custom, {
                    children: t => {
                        let {
                            account: n,
                            chain: s,
                            openAccountModal: i,
                            openChainModal: r,
                            openConnectModal: l,
                            mounted: o
                        } = t, d = null == n ? void 0 : n.address;
                        return o && n && s ? s.unsupported ? (0, a.jsx)(W, {
                            onClick: r,
                            children: "Switch chain"
                        }) : (0, a.jsx)(W, {
                            onClick: i,
                            children: (0, B.L)(d, e ? 5 : 3, e ? 5 : 0)
                        }) : (0, a.jsx)(W, {
                            onClick: l,
                            children: "Connect Wallet"
                        })
                    }
                })
            };
            var J = n(10929),
                X = n(3237),
                Y = n(43078),
                G = n(34853),
                Q = n(74931);

            function V() {
                let {
                    isLoading: e,
                    send: t
                } = (0, J.T)(), n = function() {
                    let e = (0, X.t)(),
                        {
                            address: t
                        } = (0, I.m)();
                    return e ? t : void 0
                }(), {
                    chainId: s
                } = (0, I.m)(), [i, r] = (0, m.useState)(!1), [d, u] = (0, m.useState)(null);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(z.D, {
                        order: 2,
                        size: 24,
                        c: "white",
                        children: "Faucet"
                    }), (0, a.jsx)(o.D, {
                        children: (0, a.jsxs)(N.Z, {
                            gap: "lg",
                            align: "center",
                            justify: "space-between",
                            children: [(0, a.jsx)(M.x, {
                                maw: {
                                    xs: "30%"
                                },
                                children: "Ready to deploy contracts? You can request 1 ".concat(c.TA.asset.originSymbol, " tokens every 12 hours.")
                            }), n && s === c.jg ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(Y.W, {
                                    miw: 350,
                                    mih: 80,
                                    children: i && (0, a.jsx)(G.Z, {
                                        sitekey: c.J8,
                                        onChange: e => {
                                            u(e), n && e && t(n, e)
                                        },
                                        onExpired: () => {
                                            u(null)
                                        }
                                    })
                                }), (0, a.jsx)(l.K, {
                                    miw: {
                                        base: "100%",
                                        xs: "auto"
                                    },
                                    size: "lg",
                                    leftSection: (0, a.jsx)(Q.O2Y, {}),
                                    withArrow: !1,
                                    loading: e,
                                    disabled: e,
                                    onClick: () => d ? t(n, d) : r(!0),
                                    children: "Request Tokens"
                                })]
                            }) : (0, a.jsx)(R, {})]
                        })
                    })]
                })
            }
            var $ = n(8207),
                ee = n(86769),
                et = n(34124),
                en = n(25675),
                ea = n.n(en);
            let es = [{
                logo: {
                    src: "/_next/static/media/logo_phala.a744ecb3.svg",
                    height: 53,
                    width: 53,
                    blurWidth: 0,
                    blurHeight: 0
                },
                name: "Phala Network",
                description: "Use Phala's off-chain computing network to get reliable Ethereum Mainnet Chainlink Oracle token price feed data.",
                color: "rgba(205, 250, 80, 0.1)",
                url: "https://docs.tanssi.network/builders/tooling/oracles/phala/"
            }, {
                logo: {
                    src: "/_next/static/media/logo_acurast.e59a9e46.svg",
                    height: 39,
                    width: 53,
                    blurWidth: 0,
                    blurHeight: 0
                },
                name: "Acurast",
                description: "Use Acurast's decentralized serverless cloud to get reliable price feed token asset data.",
                color: "radial-gradient(98.76% 865.83% at 98.76% 100%, rgba(0, 0, 0, 0.3) 0%, rgba(0, 39, 202, 0.3) 100%), linear-gradient(0deg, #0E121C, #0E121C)",
                url: "https://docs.tanssi.network/builders/tooling/oracles/acurast/"
            }];

            function ei() {
                return (0, a.jsxs)(S.x, {
                    children: [(0, a.jsx)(z.D, {
                        order: 2,
                        size: 24,
                        c: "white",
                        mb: "md",
                        children: "Tooling"
                    }), (0, a.jsx)(M.x, {
                        children: "The following is a list of tools that have been integrated on the Tanssi Demo Appchain, all services can be leveraged on your own Appchain."
                    }), es.map(e => (0, a.jsx)(et.X, {
                        mt: "xs",
                        p: "xl",
                        bg: e.color,
                        children: (0, a.jsxs)(N.Z, {
                            children: [(0, a.jsx)(ea(), {
                                src: e.logo,
                                alt: e.name,
                                width: 53
                            }), (0, a.jsx)(S.x, {
                                w: 100,
                                children: e.name.split(" ").map(e => (0, a.jsx)(M.x, {
                                    fz: "lg",
                                    children: e
                                }, e))
                            }), (0, a.jsx)(S.x, {
                                ml: "lg",
                                maw: "65%",
                                children: (0, a.jsx)(M.x, {
                                    fz: "lg",
                                    children: e.description
                                })
                            }), (0, a.jsx)(ee.H, {
                                style: {
                                    alignSelf: "flex-end"
                                },
                                label: "Continue →",
                                url: e.url,
                                c: "white",
                                fw: "bold",
                                fz: "md",
                                ml: "auto",
                                withIcon: !1
                            })]
                        })
                    }, e.name))]
                })
            }
            let er = [{
                name: "Blockscout",
                url: "https://fra-dancebox-3001-bs.a.dancebox.tanssi.network/"
            }, {
                name: c.e7.polkadotJs.name,
                url: "".concat(c.e7.polkadotJs.url, "?rpc=wss://fraa-dancebox-3001-rpc.a.dancebox.tanssi.network")
            }];

            function el() {
                return (0, a.jsxs)($.K, {
                    gap: "lg",
                    children: [(0, a.jsx)(i.n, {}), (0, a.jsx)(r.U, {
                        size: 36,
                        children: "Demo Appchain"
                    }), (0, a.jsx)(M.x, {
                        children: "A demo EVM Tanssi Appchain is deployed on Dancebox for testing purposes. Interact with this chain to discover the capabilities of a fully Ethereum-compatible Appchain deployed through Tanssi."
                    }), (0, a.jsx)(V, {}), (0, a.jsx)(P, {}), (0, a.jsx)(s.D, {
                        mt: "lg",
                        name: "Tanssi Demo",
                        paraId: c.TI,
                        config: c.Uw,
                        explorers: er
                    }), (0, a.jsx)(ei, {})]
                })
            }

            function eo() {
                return (0, a.jsx)(el, {})
            }
        }
    },
    function(e) {
        e.O(0, [5970, 8, 763, 9236, 9774, 2888, 179], function() {
            return e(e.s = 17553)
        }), _N_E = e.O()
    }
]);
//# sourceMappingURL=demo-32984e7e3f107ace.js.map