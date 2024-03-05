import {
    a as _,
    b as P
} from "./chunk-I6P2L3S2.mjs";
import {
    A as R,
    C as E,
    F,
    I as v,
    J as b,
    O as k,
    c as r,
    e as l,
    v as o,
    w as h,
    y
} from "./chunk-FDF7PUSL.mjs";
import {
    c as a
} from "./chunk-OIST4OYN.mjs";
a.__framer_importFromPackage = (e, n) => () => r(R, {
    error: 'Package component not supported: "' + n + '" in "' + e + '"'
});
a.process = {
    ...a.process,
    env: {
        ...a.process ? a.process.env : void 0,
        NODE_ENV: "production"
    }
};
E();
(async () => {
    let e = {
            M6W0VLvgt: {
                elements: {},
                page: o(() => import("./kKI_Ca03t3SESnuCLR99PIAmsex3sPrbpfO1u7TIpsQ.QPLYNZLD.mjs")),
                path: "/"
            },
            fyCZrLPVR: {
                elements: {},
                page: o(() => import("./c6BviwHb5eEjr-4VcqOAPupV0-ebsg7sdtXMF6CAl8M.JLK4HG4J.mjs")),
                path: "/homebkp"
            },
            uCGBiqKoT: {
                elements: {},
                page: o(() => import("./E8LeGfZ1-6MjzD8OhDiPVzNj-Wz_1_OjCjsiYFfoEXg.XNG6DDYK.mjs")),
                path: "/login"
            },
            uGuPNznvF: {
                elements: {},
                page: o(() => import("./YZyWEWgV5uICZPG47pLwnxFjXoYd-64hBt85OfKWr7o.R4QNXC2A.mjs")),
                path: "/result"
            }
        },
        n = {},
        d = [{
            code: "en-US",
            id: "default",
            name: "English",
            slug: ""
        }],
        I = o(() => import("./__framer-not-found-page.V54G2JEA.mjs")),
        c = document.getElementById("main"),
        s, m, i, p = !1;
    if ("framerHydrateV2" in c.dataset) {
        let t = JSON.parse(c.dataset.framerHydrateV2);
        s = t.routeId, m = t.localeId, i = t.pathVariables, p = !0
    } else {
        let t = y(e, decodeURIComponent(location.pathname), !0, d);
        s = t.routeId, m = t.localeId, i = t.pathVariables
    }
    let f = await e[s].page.preload();
    e[s].page = f;
    let O = r(k, {
            RootComponent: f,
            isWebsite: !0,
            routeId: s,
            pathVariables: i,
            routes: e,
            collectionUtils: n,
            notFoundPage: I,
            isReducedMotion: void 0,
            localeId: m,
            locales: d,
            preserveQueryParams: void 0
        }),
        S = r(F, {
            children: O,
            value: {
                imgSizesWorkaroundEnabled: !1
            }
        }),
        u = r(h, {
            children: S,
            value: {
                routes: {}
            }
        });
    a.__framer_events = a.__framer_events || [];

    function V() {
        a.__framer_events.push(arguments)
    }

    function g(t, {
        componentStack: z
    }) {
        V("published_site_load_recoverable_error", {
            message: String(t),
            stack: t instanceof Error && typeof t.stack == "string" ? t.stack : null,
            componentStack: z
        }), console.error(t)
    }
    p ? l(() => {
        P(c, u, {
            onRecoverableError: g
        })
    }) : _(c, {
        onRecoverableError: g
    }).render(u)
})().catch(e => {
    throw track("published_site_load_error", {
        message: String(e),
        stack: e instanceof Error && typeof e.stack == "string" ? e.stack : null
    }), e
});
(async () => {
    let {
        default: e
    } = await import("./__framer-badge.473RQ7SM.mjs"), n = v(b);
    l(() => {
        _(document.getElementById("__framer-badge-container")).render(r(n, {
            className: "__framer-badge",
            __framer__threshold: .5,
            __framer__animateOnce: !0,
            __framer__opacity: 0,
            __framer__targetOpacity: 1,
            __framer__rotate: 0,
            __framer__x: 0,
            __framer__y: 10,
            __framer__scale: 1,
            __framer__transition: {
                type: "spring",
                ease: [.44, 0, .56, 1],
                duration: .3,
                delay: 1,
                stiffness: 350,
                damping: 40,
                mass: 1.5
            },
            __framer__rotateX: 0,
            __framer__rotateY: 0,
            __framer__perspective: 1200
        }, r(e)))
    })
})();
//# sourceMappingURL=preview_script0.TPHNAIGQ.mjs.map