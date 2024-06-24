self.__BUILD_MANIFEST = function(e, s, a, c, t, i, n, r, d) {
    return {
        __rewrites: {
            afterFiles: [{
                has: [{
                    type: e,
                    key: "o",
                    value: a
                }, {
                    type: e,
                    key: "p",
                    value: t
                }, {
                    type: e,
                    key: "r",
                    value: "(?<region>[a-z]{2})"
                }],
                source: i,
                destination: n
            }, {
                has: [{
                    type: e,
                    key: "o",
                    value: a
                }, {
                    type: e,
                    key: "p",
                    value: t
                }],
                source: i,
                destination: n
            }],
            beforeFiles: [],
            fallback: []
        },
        "/": [r, d, "static/css/435634329e97806b.css", "static/chunks/pages/index-48ec16240d7dd762.js"],
        "/_error": ["static/chunks/pages/_error-339c8de96a04dcf7.js"],
        "/create": ["static/chunks/pages/create-52f391d5a24f4ec6.js"],
        "/demo": ["static/chunks/019d026b-20c2da617deda98b.js", r, "static/chunks/763-35e499a173a3eb7f.js", d, "static/chunks/pages/demo-32984e7e3f107ace.js"],
        "/staking": ["static/chunks/e21e5bbe-0d5007b98fa13cf3.js", "static/chunks/41155975-110bb1d8df2e6aa4.js", "static/chunks/9779-dd543fda9759fa0e.js", "static/css/03211be852b5606a.css", "static/chunks/pages/staking-3654e607c66aae87.js"],
        "/[chainKey]": ["static/chunks/pages/[chainKey]-f4425df6d5441be6.js"],
        "/[chainKey]/create": ["static/chunks/pages/[chainKey]/create-8772071497a9eabd.js"],
        sortedPages: ["/", "/_app", "/_error", "/create", "/demo", "/staking", "/[chainKey]", "/[chainKey]/create"]
    }
}("query", 0, "(?<orgid>\\d*)", 0, "(?<projectid>\\d*)", "/monitoring(/?)", void 0, "static/chunks/8-6c654c25e47244e5.js", "static/chunks/9236-386a06c2dd7f6e3b.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();