import {
    a as W
} from "./chunk-ICRJII4U.mjs";
import "./chunk-42U43NKG.mjs";
import {
    a as e,
    b as a
} from "./chunk-LFLY6XJY.mjs";
import {
    B as k,
    E as Y,
    G,
    H as V,
    J as B,
    K as L,
    L as K,
    M as $,
    P as O,
    U as Q,
    V as e2,
    W as r2,
    X as a2,
    Y as t2,
    _ as Z,
    aa as T,
    b as r,
    ba as t,
    ca as z,
    d as R,
    da as n2,
    g as S,
    i as M,
    j as q,
    k as X,
    l as U,
    o as E,
    p,
    q as N,
    x as F
} from "./chunk-FDF7PUSL.mjs";
import "./chunk-7JKDAAG7.mjs";
import "./chunk-OIST4OYN.mjs";
var b2 = {
        bWVqXfbul: {
            hover: !0
        },
        DOozx8Kga: {
            hover: !0
        },
        LUgC6Cxtg: {
            hover: !0
        },
        N5CsmewJC: {
            hover: !0
        }
    },
    y2 = ["LUgC6Cxtg", "N5CsmewJC", "DOozx8Kga", "bWVqXfbul"],
    v2 = {
        bWVqXfbul: "framer-v-arkztt",
        DOozx8Kga: "framer-v-42332o",
        LUgC6Cxtg: "framer-v-15ys0az",
        N5CsmewJC: "framer-v-10cilc"
    };

function k2(i, ...n) {
    let l = {};
    return n?.forEach(o => o && Object.assign(l, i[o])), l
}
var G2 = {
        default: {
            delay: 0,
            duration: .8,
            ease: [0, 0, 1, 1],
            type: "tween"
        }
    },
    O2 = ({
        value: i,
        children: n
    }) => {
        let l = S(E),
            o = i ?? l.transition,
            f = X(() => ({
                ...l,
                transition: o
            }), [JSON.stringify(o)]);
        return e(E.Provider, {
            value: f,
            children: n
        })
    },
    J2 = {
        Bottom: "DOozx8Kga",
        Left: "bWVqXfbul",
        Right: "N5CsmewJC",
        Top: "LUgC6Cxtg"
    },
    _2 = ({
        buttonFill: i,
        buttonText: n,
        height: l,
        id: o,
        textColor: f,
        textSize: m,
        width: C,
        ...s
    }) => {
        var g, d, b, y, h, u;
        return {
            ...s,
            BrUi5h7tU: (g = f ?? s.BrUi5h7tU) !== null && g !== void 0 ? g : "rgb(255, 255, 255)",
            ofLqZhEO8: (d = n ?? s.ofLqZhEO8) !== null && d !== void 0 ? d : "Running stroke",
            PPM8eZNfR: (b = i ?? s.PPM8eZNfR) !== null && b !== void 0 ? b : "rgb(0, 0, 0)",
            Rb5OgUSWE: (y = m ?? s.Rb5OgUSWE) !== null && y !== void 0 ? y : 16,
            variant: (u = (h = J2[s.variant]) !== null && h !== void 0 ? h : s.variant) !== null && u !== void 0 ? u : "LUgC6Cxtg"
        }
    },
    R2 = (i, n) => n.join("-") + i.layoutDependency,
    M2 = R(function(i, n) {
        let {
            activeLocale: l
        } = F(), {
            style: o,
            className: f,
            layoutId: m,
            variant: C,
            ofLqZhEO8: s,
            Rb5OgUSWE: g,
            BrUi5h7tU: d,
            PPM8eZNfR: b,
            ...y
        } = _2(i), {
            baseVariant: h,
            classNames: u,
            gestureVariant: j,
            setGestureState: w,
            setVariant: _,
            transition: x,
            variants: v
        } = t2({
            cycleOrder: y2,
            defaultVariant: "LUgC6Cxtg",
            enabledGestures: b2,
            transitions: G2,
            variant: C,
            variantClassNames: v2
        }), c = R2(i, v), {
            activeVariantCallback: p2,
            delay: c2
        } = Q(h), h2 = p2(async (...S2) => {
            await c2(() => _(a2), 700)
        });
        r2(h, {
            default: h2
        });
        let x2 = M();
        return e(N, {
            id: m ?? x2,
            children: e(p.div, {
                initial: C,
                animate: v,
                onHoverStart: () => w({
                    isHovered: !0
                }),
                onHoverEnd: () => w({
                    isHovered: !1
                }),
                onTapStart: () => w({
                    isPressed: !0
                }),
                onTap: () => w({
                    isPressed: !1
                }),
                onTapCancel: () => w({
                    isPressed: !1
                }),
                className: G("framer-prxDJ", u),
                style: {
                    display: "contents"
                },
                children: e(O2, {
                    value: x,
                    children: a(p.div, {
                        ...y,
                        className: G("framer-15ys0az", f),
                        "data-framer-name": "Top",
                        "data-highlight": !0,
                        layoutDependency: c,
                        layoutId: "LUgC6Cxtg",
                        ref: n,
                        style: {
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            borderBottomLeftRadius: 118,
                            borderBottomRightRadius: 118,
                            borderTopLeftRadius: 118,
                            borderTopRightRadius: 118,
                            ...o
                        },
                        ...k2({
                            "bWVqXfbul-hover": {
                                "data-framer-name": void 0
                            },
                            "DOozx8Kga-hover": {
                                "data-framer-name": void 0
                            },
                            "LUgC6Cxtg-hover": {
                                "data-framer-name": void 0
                            },
                            "N5CsmewJC-hover": {
                                "data-framer-name": void 0
                            },
                            bWVqXfbul: {
                                "data-framer-name": "Left"
                            },
                            DOozx8Kga: {
                                "data-framer-name": "Bottom"
                            },
                            N5CsmewJC: {
                                "data-framer-name": "Right"
                            }
                        }, h, j),
                        children: [e(p.div, {
                            className: "framer-1ud2un",
                            "data-framer-name": "Glow",
                            layoutDependency: c,
                            layoutId: "HGYtlZiSg",
                            style: {
                                background: "radial-gradient(25% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
                                borderBottomLeftRadius: 72,
                                borderBottomRightRadius: 72,
                                borderTopLeftRadius: 72,
                                borderTopRightRadius: 72,
                                filter: "blur(15px)",
                                WebkitFilter: "blur(15px)"
                            },
                            variants: {
                                "bWVqXfbul-hover": {
                                    background: "radial-gradient(50% 100% at 50% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)"
                                },
                                "DOozx8Kga-hover": {
                                    background: "radial-gradient(50% 100% at 50% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)"
                                },
                                "LUgC6Cxtg-hover": {
                                    background: "radial-gradient(50% 100% at 50% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)"
                                },
                                "N5CsmewJC-hover": {
                                    background: "radial-gradient(50% 100% at 50% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)"
                                },
                                bWVqXfbul: {
                                    background: "radial-gradient(25% 34.4% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)"
                                },
                                DOozx8Kga: {
                                    background: "radial-gradient(25% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)"
                                },
                                N5CsmewJC: {
                                    background: "radial-gradient(25% 35.4% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)"
                                }
                            }
                        }), e(p.div, {
                            className: "framer-sg5jcs",
                            "data-framer-name": "Stroke",
                            layoutDependency: c,
                            layoutId: "RPfFgyUTw",
                            style: {
                                background: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
                                borderBottomLeftRadius: 72,
                                borderBottomRightRadius: 72,
                                borderTopLeftRadius: 72,
                                borderTopRightRadius: 72
                            },
                            variants: {
                                "bWVqXfbul-hover": {
                                    background: "radial-gradient(75% 181.15942028985506% at 50% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)"
                                },
                                "DOozx8Kga-hover": {
                                    background: "radial-gradient(75% 181.15942028985506% at 50% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)"
                                },
                                "LUgC6Cxtg-hover": {
                                    background: "radial-gradient(75% 181.15942028985506% at 50% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)"
                                },
                                "N5CsmewJC-hover": {
                                    background: "radial-gradient(75% 181.15942028985506% at 50% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)"
                                },
                                bWVqXfbul: {
                                    background: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)"
                                },
                                DOozx8Kga: {
                                    background: "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)"
                                },
                                N5CsmewJC: {
                                    background: "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)"
                                }
                            }
                        }), e(p.div, {
                            className: "framer-98q2mz",
                            "data-framer-name": "Fill",
                            layoutDependency: c,
                            layoutId: "hoKteZkzg",
                            style: {
                                backgroundColor: b,
                                borderBottomLeftRadius: 114,
                                borderBottomRightRadius: 114,
                                borderTopLeftRadius: 114,
                                borderTopRightRadius: 114
                            }
                        }), e(t, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                                children: e(p.p, {
                                    style: {
                                        "--font-selector": "RlM7U2F0b3NoaS1ib2xk",
                                        "--framer-font-family": '"Satoshi", sans-serif',
                                        "--framer-font-size": "calc(var(--variable-reference-Rb5OgUSWE-lRi7XplMx) * 1px)",
                                        "--framer-font-weight": "700",
                                        "--framer-text-color": "var(--extracted-r6o4lv)"
                                    },
                                    children: "Running stroke"
                                })
                            }),
                            className: "framer-dij39d",
                            "data-framer-name": "Text",
                            fonts: ["FS;Satoshi-bold"],
                            layoutDependency: c,
                            layoutId: "smeelrZRW",
                            style: {
                                "--extracted-r6o4lv": "var(--variable-reference-BrUi5h7tU-lRi7XplMx)",
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                "--framer-paragraph-spacing": "0px",
                                "--variable-reference-BrUi5h7tU-lRi7XplMx": d,
                                "--variable-reference-Rb5OgUSWE-lRi7XplMx": g
                            },
                            text: s,
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        })]
                    })
                })
            })
        })
    }),
    N2 = ['.framer-prxDJ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-prxDJ .framer-d9jtkc { display: block; }", ".framer-prxDJ .framer-15ys0az { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 20px 28px 20px 28px; position: relative; width: min-content; }", ".framer-prxDJ .framer-1ud2un, .framer-prxDJ .framer-sg5jcs { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: transform; z-index: 0; }", ".framer-prxDJ .framer-98q2mz { bottom: 2px; flex: none; left: 2px; overflow: hidden; position: absolute; right: 2px; top: 2px; will-change: transform; z-index: 0; }", ".framer-prxDJ .framer-dij39d { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-prxDJ .framer-v-15ys0az .framer-15ys0az, .framer-prxDJ .framer-v-10cilc .framer-15ys0az, .framer-prxDJ .framer-v-42332o .framer-15ys0az, .framer-prxDJ .framer-v-arkztt .framer-15ys0az { cursor: pointer; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-prxDJ .framer-15ys0az { gap: 0px; } .framer-prxDJ .framer-15ys0az > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-prxDJ .framer-15ys0az > :first-child { margin-top: 0px; } .framer-prxDJ .framer-15ys0az > :last-child { margin-bottom: 0px; } }"],
    J = L(M2, N2, "framer-prxDJ"),
    I = J;
J.displayName = "Running-Stroke";
J.defaultProps = {
    height: 59,
    width: 168
};
Y(J, {
    variant: {
        options: ["LUgC6Cxtg", "N5CsmewJC", "DOozx8Kga", "bWVqXfbul"],
        optionTitles: ["Top", "Right", "Bottom", "Left"],
        title: "Variant",
        type: k.Enum
    },
    ofLqZhEO8: {
        defaultValue: "Running stroke",
        displayTextArea: !1,
        title: "Button text",
        type: k.String
    },
    Rb5OgUSWE: {
        defaultValue: 16,
        title: "Text size",
        type: k.Number
    },
    BrUi5h7tU: {
        defaultValue: "rgb(255, 255, 255)",
        title: "Text color",
        type: k.Color
    },
    PPM8eZNfR: {
        defaultValue: "rgb(0, 0, 0)",
        title: "Button fill",
        type: k.Color
    }
});
z(J, [{
    family: "Satoshi",
    moduleAsset: {
        localModuleIdentifier: "local-module:canvasComponent/lRi7XplMx:default",
        url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2"
    },
    style: "normal",
    url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2",
    weight: "700"
}]);
var F2 = V(T),
    V2 = V(p.div),
    i2 = V(t),
    L2 = n2(I);
var Z2 = {
        DK5XedF5f: "(min-width: 1518px)",
        HbYk9EEaB: "(max-width: 809px)",
        ZgPEmEcGk: "(min-width: 810px) and (max-width: 1517px)"
    },
    z2 = () => typeof document < "u",
    o2 = "framer-OGfJk",
    H2 = {
        DK5XedF5f: "framer-v-9agrwi",
        HbYk9EEaB: "framer-v-1oydnr0",
        ZgPEmEcGk: "framer-v-r0wnfi"
    },
    j2 = {
        default: {
            duration: 0
        }
    },
    f2 = {
        opacity: 0,
        rotate: -10,
        rotateX: 0,
        rotateY: 0,
        scale: .9,
        x: 0,
        y: 0
    },
    D = {
        damping: 20,
        delay: .25,
        mass: 1,
        stiffness: 400,
        type: "spring"
    },
    m2 = {
        opacity: 0,
        rotate: -10,
        rotateX: 0,
        rotateY: 0,
        scale: .9,
        transition: D,
        x: 0,
        y: 0
    },
    E2 = (i, n) => `perspective(1200px) ${n} rotate(-3deg)`,
    P = (i, n) => `perspective(1200px) ${n}`,
    l2 = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: .9,
        x: 0,
        y: 0
    },
    s2 = {
        damping: 20,
        delay: .15,
        mass: 1,
        stiffness: 400,
        type: "spring"
    },
    T2 = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: .9,
        transition: s2,
        x: 0,
        y: 0
    },
    d2 = {
        damping: 20,
        delay: .2,
        mass: 1,
        stiffness: 400,
        type: "spring"
    },
    W2 = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: .9,
        transition: d2,
        x: 0,
        y: 0
    },
    A = W(),
    I2 = {
        Desktop: "DK5XedF5f",
        Phone: "HbYk9EEaB",
        Tablet: "ZgPEmEcGk"
    },
    P2 = ({
        height: i,
        id: n,
        width: l,
        ...o
    }) => {
        var f, m;
        return {
            ...o,
            variant: (m = (f = I2[o.variant]) !== null && f !== void 0 ? f : o.variant) !== null && m !== void 0 ? m : "DK5XedF5f"
        }
    },
    A2 = R(function(i, n) {
        let {
            activeLocale: l,
            setLocale: o
        } = F(), {
            style: f,
            className: m,
            layoutId: C,
            variant: s,
            ...g
        } = P2(i);
        q(() => {
            let x = W(void 0, l);
            if (document.title = x.title || "", x.viewport) {
                var v;
                (v = document.querySelector('meta[name="viewport"]')) === null || v === void 0 || v.setAttribute("content", x.viewport)
            }
            if (x.bodyClassName) return Array.from(document.body.classList).filter(c => c.startsWith("framer-body-")).map(c => document.body.classList.remove(c)), document.body.classList.add(`${x.bodyClassName}-framer-OGfJk`), () => {
                document.body.classList.remove(`${x.bodyClassName}-framer-OGfJk`)
            }
        }, [void 0, l]);
        let [d, b] = e2(s, Z2, !1), y = void 0, h = j2.default, u = U(null), j = () => d === "ZgPEmEcGk" ? !z2() : !0, w = M(), _ = [];
        return K({}), e($.Provider, {
            value: {
                primaryVariantId: "DK5XedF5f",
                variantClassNames: H2
            },
            children: a(N, {
                id: C ?? w,
                children: [a(p.div, {
                    ...g,
                    className: G(o2, ..._, "framer-9agrwi", m),
                    ref: n ?? u,
                    style: {
                        ...f
                    },
                    children: [a("div", {
                        className: "framer-zof2fp",
                        "data-framer-name": "Nav",
                        name: "Nav",
                        children: [e(t, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                                children: e("h2", {
                                    style: {
                                        "--font-selector": "R0Y7SW50ZXItNzAw",
                                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-weight": "700",
                                        "--framer-letter-spacing": "1px",
                                        "--framer-line-height": "2em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "rgb(17, 17, 17)"
                                    },
                                    children: "FRAMER"
                                })
                            }),
                            className: "framer-1bc4lwe",
                            fonts: ["GF;Inter-700"],
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        }), e("div", {
                            className: "framer-rqdxnm",
                            "data-framer-name": "Title and Icon",
                            name: "Title and Icon",
                            children: e("div", {
                                className: "framer-uotjom",
                                "data-framer-name": "Button",
                                name: "Button",
                                children: e(t, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXItNjAw",
                                                "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                "--framer-font-size": "14px",
                                                "--framer-font-weight": "600",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "Login"
                                        })
                                    }),
                                    className: "framer-usihxz",
                                    fonts: ["GF;Inter-600"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            })
                        })]
                    }), e("div", {
                        className: "framer-9y6qvp",
                        "data-framer-name": "Main",
                        name: "Main",
                        children: a("div", {
                            className: "framer-4wwhi1",
                            children: [e(V2, {
                                __framer__animate: {
                                    transition: D
                                },
                                __framer__animateOnce: !0,
                                __framer__enter: f2,
                                __framer__exit: m2,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: .5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-acjnoo",
                                transformTemplate: E2,
                                children: e(F2, {
                                    __framer__animate: {
                                        transition: D
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: f2,
                                    __framer__exit: m2,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill"
                                    },
                                    className: "framer-1xp9woh",
                                    transformTemplate: P
                                })
                            }), a("div", {
                                className: "framer-1joyyk1",
                                children: [e(O, {
                                    breakpoint: d,
                                    overrides: {
                                        HbYk9EEaB: {
                                            children: e(r, {
                                                children: e("h1", {
                                                    style: {
                                                        "--font-selector": "R0Y7SW50ZXItNzAw",
                                                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                        "--framer-font-size": "40px",
                                                        "--framer-font-weight": "700",
                                                        "--framer-letter-spacing": "-2.2px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "var(--token-b9c3c957-2c66-49c4-9732-fa196fddac20, rgb(0, 17, 34))"
                                                    },
                                                    children: "Calculadora Solar"
                                                })
                                            })
                                        },
                                        ZgPEmEcGk: {
                                            children: e(r, {
                                                children: e("h1", {
                                                    style: {
                                                        "--font-selector": "R0Y7SW50ZXItNzAw",
                                                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                        "--framer-font-size": "62px",
                                                        "--framer-font-weight": "700",
                                                        "--framer-letter-spacing": "-3.8px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "var(--token-b9c3c957-2c66-49c4-9732-fa196fddac20, rgb(0, 17, 34))"
                                                    },
                                                    children: "Calculadora Solar"
                                                })
                                            })
                                        }
                                    },
                                    children: e(i2, {
                                        __framer__animate: {
                                            transition: s2
                                        },
                                        __framer__animateOnce: !0,
                                        __framer__enter: l2,
                                        __framer__exit: T2,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: .5,
                                        __fromCanvasComponent: !0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        children: e(r, {
                                            children: e("h1", {
                                                style: {
                                                    "--font-selector": "R0Y7SW50ZXItNzAw",
                                                    "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                    "--framer-font-size": "72px",
                                                    "--framer-font-weight": "700",
                                                    "--framer-letter-spacing": "-3.8px",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-b9c3c957-2c66-49c4-9732-fa196fddac20, rgb(0, 17, 34))"
                                                },
                                                children: "Calculadora Solar"
                                            })
                                        }),
                                        className: "framer-cjacn9",
                                        fonts: ["GF;Inter-700"],
                                        transformTemplate: P,
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                }), e(O, {
                                    breakpoint: d,
                                    overrides: {
                                        HbYk9EEaB: {
                                            children: e(r, {
                                                children: e("h3", {
                                                    style: {
                                                        "--font-selector": "R0Y7SW50ZXItNTAw",
                                                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                        "--framer-font-weight": "500",
                                                        "--framer-letter-spacing": "-0.5px",
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(153, 153, 153)"
                                                    },
                                                    children: "The new social experience for you and your friends. Sign up to learn more."
                                                })
                                            })
                                        },
                                        ZgPEmEcGk: {
                                            children: e(r, {
                                                children: e("h3", {
                                                    style: {
                                                        "--font-selector": "R0Y7SW50ZXItNTAw",
                                                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                        "--framer-font-weight": "500",
                                                        "--framer-letter-spacing": "-0.5px",
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(153, 153, 153)"
                                                    },
                                                    children: "The new social experience for you and your friends. Sign up to learn more."
                                                })
                                            })
                                        }
                                    },
                                    children: e(i2, {
                                        __framer__animate: {
                                            transition: d2
                                        },
                                        __framer__animateOnce: !0,
                                        __framer__enter: l2,
                                        __framer__exit: W2,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: .5,
                                        __fromCanvasComponent: !0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        children: e(r, {
                                            children: e("h3", {
                                                style: {
                                                    "--font-selector": "R0Y7SW50ZXItNTAw",
                                                    "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                    "--framer-font-size": "20px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "-0.5px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color": "rgb(153, 153, 153)"
                                                },
                                                children: "The new social experience for you and your friends. Sign up to learn more."
                                            })
                                        }),
                                        className: "framer-w438dc",
                                        fonts: ["GF;Inter-500"],
                                        transformTemplate: P,
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                })]
                            })]
                        })
                    }), a("header", {
                        className: "framer-1im6tjx",
                        "data-framer-name": "Header",
                        name: "Header",
                        children: [e(t, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                                children: e("h1", {
                                    style: {
                                        "--font-selector": "R0Y7SW50ZXItNzAw",
                                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "50px",
                                        "--framer-font-weight": "700",
                                        "--framer-letter-spacing": "-2.6px",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "rgb(255, 255, 255)"
                                    },
                                    children: "Ship sites with style."
                                })
                            }),
                            className: "framer-1v3nap2",
                            fonts: ["GF;Inter-700"],
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        }), e(O, {
                            breakpoint: d,
                            overrides: {
                                HbYk9EEaB: {
                                    children: e(r, {
                                        children: e("h2", {
                                            style: {
                                                "--font-selector": "R0Y7SW50ZXItNTAw",
                                                "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                "--framer-font-size": "20px",
                                                "--framer-font-weight": "500",
                                                "--framer-letter-spacing": "-0.5px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(136, 136, 136)"
                                            },
                                            children: "Go from design to site with Framer, the web builder for creative pros."
                                        })
                                    })
                                }
                            },
                            children: e(t, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                    children: e("h2", {
                                        style: {
                                            "--font-selector": "R0Y7SW50ZXItNTAw",
                                            "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "24px",
                                            "--framer-font-weight": "500",
                                            "--framer-letter-spacing": "-0.5px",
                                            "--framer-line-height": "1.5em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "rgb(136, 136, 136)"
                                        },
                                        children: "Go from design to site with Framer, the web builder for creative pros."
                                    })
                                }),
                                className: "framer-qr2ven",
                                fonts: ["GF;Inter-500"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        }), e("div", {
                            className: "framer-zmpatj",
                            children: e(B, {
                                className: "framer-bgt6br-container",
                                children: e(I, {
                                    buttonFill: "rgb(0, 0, 0)",
                                    buttonText: "Running stroke",
                                    height: "100%",
                                    id: "xyON6ApMv",
                                    layoutId: "xyON6ApMv",
                                    textColor: "rgb(255, 255, 255)",
                                    textSize: 16,
                                    variant: "LUgC6Cxtg",
                                    width: "100%"
                                })
                            })
                        })]
                    }), e("div", {
                        className: "framer-taj5il",
                        children: e("div", {
                            className: "framer-oi4cv6"
                        })
                    }), a("div", {
                        className: "framer-193y9f5",
                        "data-framer-name": "Desktop - 2",
                        name: "Desktop - 2",
                        children: [a("div", {
                            className: "framer-1up35xh",
                            "data-framer-name": "Frame 11",
                            name: "Frame 11",
                            children: [j() && e(O, {
                                breakpoint: d,
                                overrides: {
                                    HbYk9EEaB: {
                                        background: {
                                            alt: "",
                                            fit: "stretch",
                                            positionX: "center",
                                            positionY: "center",
                                            sizes: "843px",
                                            src: "https://framerusercontent.com/images/fp3g4tgaAp7kDOTI4XdRSTUp5Jw.png",
                                            srcSet: "https://framerusercontent.com/images/fp3g4tgaAp7kDOTI4XdRSTUp5Jw.png?scale-down-to=1024 815w,https://framerusercontent.com/images/fp3g4tgaAp7kDOTI4XdRSTUp5Jw.png?scale-down-to=2048 1631w,https://framerusercontent.com/images/fp3g4tgaAp7kDOTI4XdRSTUp5Jw.png 2529w"
                                        }
                                    }
                                },
                                children: e(T, {
                                    background: {
                                        alt: "",
                                        fit: "stretch",
                                        loading: "lazy",
                                        positionX: "center",
                                        positionY: "center",
                                        sizes: "843px",
                                        src: "https://framerusercontent.com/images/fp3g4tgaAp7kDOTI4XdRSTUp5Jw.png",
                                        srcSet: "https://framerusercontent.com/images/fp3g4tgaAp7kDOTI4XdRSTUp5Jw.png?scale-down-to=1024 815w,https://framerusercontent.com/images/fp3g4tgaAp7kDOTI4XdRSTUp5Jw.png?scale-down-to=2048 1631w,https://framerusercontent.com/images/fp3g4tgaAp7kDOTI4XdRSTUp5Jw.png 2529w"
                                    },
                                    className: "framer-vpx902 hidden-r0wnfi",
                                    "data-framer-name": "shutterstock_548079301-1920x1280 1",
                                    name: "shutterstock_548079301-1920x1280 1"
                                })
                            }), e("div", {
                                className: "framer-qr8xmj",
                                "data-framer-name": "Frame 10",
                                name: "Frame 10",
                                children: a("div", {
                                    className: "framer-4sw0bo",
                                    "data-framer-name": "Frame 12",
                                    name: "Frame 12",
                                    children: [e(t, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--framer-font-size": "54px"
                                                },
                                                children: e("span", {
                                                    style: {
                                                        "--font-selector": "R0Y7UG9wcGlucyBCbGFjay05MDA=",
                                                        "--framer-font-family": '"Poppins Black"',
                                                        "--framer-font-size": "54px",
                                                        "--framer-font-weight": "900",
                                                        "--framer-text-color": "rgba(255, 255, 255, 1)"
                                                    },
                                                    children: "Calculadora Solar "
                                                })
                                            })
                                        }),
                                        className: "framer-4nwxge",
                                        "data-framer-name": "Calculadora Solar",
                                        fonts: ["GF;Poppins Black-900"],
                                        name: "Calculadora Solar",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(t, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--framer-font-size": "21px"
                                                },
                                                children: e("span", {
                                                    style: {
                                                        "--font-selector": "R0Y7UG9wcGlucyBNZWRpdW0tNTAw",
                                                        "--framer-font-family": '"Poppins Medium"',
                                                        "--framer-font-size": "21px",
                                                        "--framer-font-weight": "500",
                                                        "--framer-text-color": "rgba(255, 255, 255, 1)"
                                                    },
                                                    children: "Fa\xE7a voc\xEA mesmo o c\xE1lculo da Energia Solar, e descubra o kit ideal para seu projeto!"
                                                })
                                            })
                                        }),
                                        className: "framer-hfz5cd",
                                        "data-framer-name": "Fa\xE7a voc\xEA mesmo o c\xE1lculo da Energia Solar, e descubra o kit ideal para seu projeto!",
                                        fonts: ["GF;Poppins Medium-500"],
                                        name: "Fa\xE7a voc\xEA mesmo o c\xE1lculo da Energia Solar, e descubra o kit ideal para seu projeto!",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })]
                                })
                            }), e("div", {
                                className: "framer-i1u7tt",
                                "data-framer-name": "Frame 26",
                                name: "Frame 26",
                                children: a("div", {
                                    className: "framer-1nzp99n",
                                    "data-framer-name": "Frame 25",
                                    name: "Frame 25",
                                    children: [a("div", {
                                        className: "framer-1bq4y7n",
                                        "data-framer-name": "Frame 24",
                                        name: "Frame 24",
                                        children: [a("div", {
                                            className: "framer-f00b3n",
                                            "data-framer-name": "Frame 22",
                                            name: "Frame 22",
                                            children: [e(t, {
                                                __fromCanvasComponent: !0,
                                                children: e(r, {
                                                    children: e("p", {
                                                        style: {
                                                            "--framer-font-size": "20px"
                                                        },
                                                        children: e("span", {
                                                            style: {
                                                                "--font-selector": "R0Y7TW9udHNlcnJhdC1yZWd1bGFy",
                                                                "--framer-font-family": '"Montserrat"',
                                                                "--framer-font-size": "20px",
                                                                "--framer-text-color": "rgba(215, 217, 218, 1)"
                                                            },
                                                            children: "Projeto"
                                                        })
                                                    })
                                                }),
                                                className: "framer-g0aun6",
                                                "data-framer-name": "Projeto",
                                                fonts: ["GF;Montserrat-regular"],
                                                name: "Projeto",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            }), e(t, {
                                                __fromCanvasComponent: !0,
                                                children: e(r, {
                                                    children: e("p", {
                                                        style: {
                                                            "--framer-font-size": "20px"
                                                        },
                                                        children: e("span", {
                                                            style: {
                                                                "--font-selector": "R0Y7TW9udHNlcnJhdC1yZWd1bGFy",
                                                                "--framer-font-family": '"Montserrat"',
                                                                "--framer-font-size": "20px",
                                                                "--framer-text-color": "rgba(55, 54, 53, 1)"
                                                            },
                                                            children: "Residencial"
                                                        })
                                                    })
                                                }),
                                                className: "framer-1djpabx",
                                                "data-framer-name": "Residencial",
                                                fonts: ["GF;Montserrat-regular"],
                                                name: "Residencial",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            })]
                                        }), a("div", {
                                            className: "framer-1vo4wfu",
                                            "data-framer-name": "Frame 23",
                                            name: "Frame 23",
                                            children: [e(t, {
                                                __fromCanvasComponent: !0,
                                                children: e(r, {
                                                    children: e("p", {
                                                        style: {
                                                            "--framer-font-size": "20px"
                                                        },
                                                        children: e("span", {
                                                            style: {
                                                                "--font-selector": "R0Y7TW9udHNlcnJhdC1yZWd1bGFy",
                                                                "--framer-font-family": '"Montserrat"',
                                                                "--framer-font-size": "20px",
                                                                "--framer-text-color": "rgba(215, 217, 218, 1)"
                                                            },
                                                            children: "Local"
                                                        })
                                                    })
                                                }),
                                                className: "framer-j1tqe3",
                                                "data-framer-name": "Local",
                                                fonts: ["GF;Montserrat-regular"],
                                                name: "Local",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            }), e(t, {
                                                __fromCanvasComponent: !0,
                                                children: e(r, {
                                                    children: e("p", {
                                                        style: {
                                                            "--framer-font-size": "20px"
                                                        },
                                                        children: e("span", {
                                                            style: {
                                                                "--font-selector": "R0Y7TW9udHNlcnJhdC1yZWd1bGFy",
                                                                "--framer-font-family": '"Montserrat"',
                                                                "--framer-font-size": "20px",
                                                                "--framer-text-color": "rgba(55, 54, 53, 1)"
                                                            },
                                                            children: "BR-PA / Barcarena"
                                                        })
                                                    })
                                                }),
                                                className: "framer-1ftc5xt",
                                                "data-framer-name": "BR-PA / Barcarena",
                                                fonts: ["GF;Montserrat-regular"],
                                                name: "BR-PA / Barcarena",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            })]
                                        }), a("div", {
                                            className: "framer-1qet82p",
                                            "data-framer-name": "Frame 24",
                                            name: "Frame 24",
                                            children: [e(t, {
                                                __fromCanvasComponent: !0,
                                                children: e(r, {
                                                    children: e("p", {
                                                        style: {
                                                            "--framer-font-size": "20px"
                                                        },
                                                        children: e("span", {
                                                            style: {
                                                                "--font-selector": "R0Y7TW9udHNlcnJhdC1yZWd1bGFy",
                                                                "--framer-font-family": '"Montserrat"',
                                                                "--framer-font-size": "20px",
                                                                "--framer-text-color": "rgba(215, 217, 218, 1)"
                                                            },
                                                            children: "Custo mensal"
                                                        })
                                                    })
                                                }),
                                                className: "framer-18emoc4",
                                                "data-framer-name": "Custo mensal",
                                                fonts: ["GF;Montserrat-regular"],
                                                name: "Custo mensal",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            }), e(t, {
                                                __fromCanvasComponent: !0,
                                                children: e(r, {
                                                    children: e("p", {
                                                        style: {
                                                            "--framer-font-size": "20px"
                                                        },
                                                        children: e("span", {
                                                            style: {
                                                                "--font-selector": "R0Y7TW9udHNlcnJhdC1yZWd1bGFy",
                                                                "--framer-font-family": '"Montserrat"',
                                                                "--framer-font-size": "20px",
                                                                "--framer-text-color": "rgba(55, 54, 53, 1)"
                                                            },
                                                            children: "R$ 2.000,00"
                                                        })
                                                    })
                                                }),
                                                className: "framer-w1101",
                                                "data-framer-name": "R$ 2.000,00",
                                                fonts: ["GF;Montserrat-regular"],
                                                name: "R$ 2.000,00",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            })]
                                        })]
                                    }), a("div", {
                                        className: "framer-1jm5qst",
                                        "data-framer-name": "Frame 21",
                                        name: "Frame 21",
                                        children: [a("div", {
                                            className: "framer-1o8b6v4",
                                            "data-border": !0,
                                            "data-framer-name": "Frame 19",
                                            name: "Frame 19",
                                            children: [e(t, {
                                                __fromCanvasComponent: !0,
                                                children: e(r, {
                                                    children: e("p", {
                                                        style: {
                                                            "--framer-font-size": "20px"
                                                        },
                                                        children: e("span", {
                                                            style: {
                                                                "--font-selector": "R0Y7TW9udHNlcnJhdC1yZWd1bGFy",
                                                                "--framer-font-family": '"Montserrat"',
                                                                "--framer-font-size": "20px",
                                                                "--framer-text-color": "rgba(55, 54, 53, 1)"
                                                            },
                                                            children: "Investimento aproximado"
                                                        })
                                                    })
                                                }),
                                                className: "framer-57mf7n",
                                                "data-framer-name": "Investimento aproximado",
                                                fonts: ["GF;Montserrat-regular"],
                                                name: "Investimento aproximado",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            }), a("div", {
                                                className: "framer-1n4d9iw",
                                                "data-framer-name": "Frame 18",
                                                name: "Frame 18",
                                                children: [e(t, {
                                                    __fromCanvasComponent: !0,
                                                    children: a(r, {
                                                        children: [e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7TW9udHNlcnJhdC1yZWd1bGFy",
                                                                "--framer-font-family": '"Montserrat"',
                                                                "--framer-font-size": "18px",
                                                                "--framer-text-color": "rgba(55, 54, 53, 1)"
                                                            },
                                                            children: e("br", {
                                                                className: "trailing-break"
                                                            })
                                                        }), e("p", {
                                                            style: {
                                                                "--framer-font-size": "18px"
                                                            },
                                                            children: e("span", {
                                                                style: {
                                                                    "--font-selector": "R0Y7TW9udHNlcnJhdC1yZWd1bGFy",
                                                                    "--framer-font-family": '"Montserrat"',
                                                                    "--framer-font-size": "18px",
                                                                    "--framer-text-color": "rgba(55, 54, 53, 1)"
                                                                },
                                                                children: "R$"
                                                            })
                                                        })]
                                                    }),
                                                    className: "framer-1bv6bu0",
                                                    "data-framer-name": "R$",
                                                    fonts: ["GF;Montserrat-regular"],
                                                    name: "R$",
                                                    verticalAlignment: "center",
                                                    withExternalLayout: !0
                                                }), e(t, {
                                                    __fromCanvasComponent: !0,
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--framer-font-size": "48px"
                                                            },
                                                            children: e("span", {
                                                                style: {
                                                                    "--font-selector": "R0Y7TW9udHNlcnJhdC1yZWd1bGFy",
                                                                    "--framer-font-family": '"Montserrat"',
                                                                    "--framer-font-size": "48px",
                                                                    "--framer-text-color": "rgba(55, 54, 53, 1)"
                                                                },
                                                                children: "53.948"
                                                            })
                                                        })
                                                    }),
                                                    className: "framer-100hhkx",
                                                    "data-framer-name": "53.948",
                                                    fonts: ["GF;Montserrat-regular"],
                                                    name: "53.948",
                                                    verticalAlignment: "center",
                                                    withExternalLayout: !0
                                                }), e(t, {
                                                    __fromCanvasComponent: !0,
                                                    children: a(r, {
                                                        children: [e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7TW9udHNlcnJhdC1yZWd1bGFy",
                                                                "--framer-font-family": '"Montserrat"',
                                                                "--framer-font-size": "18px",
                                                                "--framer-text-color": "rgba(55, 54, 53, 1)"
                                                            },
                                                            children: e("br", {
                                                                className: "trailing-break"
                                                            })
                                                        }), e("p", {
                                                            style: {
                                                                "--framer-font-size": "18px"
                                                            },
                                                            children: e("span", {
                                                                style: {
                                                                    "--font-selector": "R0Y7TW9udHNlcnJhdC1yZWd1bGFy",
                                                                    "--framer-font-family": '"Montserrat"',
                                                                    "--framer-font-size": "18px",
                                                                    "--framer-text-color": "rgba(55, 54, 53, 1)"
                                                                },
                                                                children: ",38"
                                                            })
                                                        })]
                                                    }),
                                                    className: "framer-tx8ng3",
                                                    "data-framer-name": ",38",
                                                    fonts: ["GF;Montserrat-regular"],
                                                    name: ",38",
                                                    verticalAlignment: "center",
                                                    withExternalLayout: !0
                                                })]
                                            })]
                                        }), a("div", {
                                            className: "framer-14rzo4r",
                                            "data-border": !0,
                                            "data-framer-name": "Frame 20",
                                            name: "Frame 20",
                                            children: [e(t, {
                                                __fromCanvasComponent: !0,
                                                children: e(r, {
                                                    children: e("p", {
                                                        style: {
                                                            "--framer-font-size": "20px"
                                                        },
                                                        children: e("span", {
                                                            style: {
                                                                "--font-selector": "R0Y7TW9udHNlcnJhdC1yZWd1bGFy",
                                                                "--framer-font-family": '"Montserrat"',
                                                                "--framer-font-size": "20px",
                                                                "--framer-text-color": "rgba(55, 54, 53, 1)"
                                                            },
                                                            children: "Payback aproximado"
                                                        })
                                                    })
                                                }),
                                                className: "framer-1030y1w",
                                                "data-framer-name": "Payback aproximado",
                                                fonts: ["GF;Montserrat-regular"],
                                                name: "Payback aproximado",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            }), a("div", {
                                                className: "framer-5bbpb7",
                                                "data-framer-name": "Frame 18",
                                                name: "Frame 18",
                                                children: [e(t, {
                                                    __fromCanvasComponent: !0,
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--framer-font-size": "48px"
                                                            },
                                                            children: e("span", {
                                                                style: {
                                                                    "--font-selector": "R0Y7TW9udHNlcnJhdC1yZWd1bGFy",
                                                                    "--framer-font-family": '"Montserrat"',
                                                                    "--framer-font-size": "48px",
                                                                    "--framer-text-color": "rgba(55, 54, 53, 1)"
                                                                },
                                                                children: "44"
                                                            })
                                                        })
                                                    }),
                                                    className: "framer-1tuk8jr",
                                                    "data-framer-name": "44",
                                                    fonts: ["GF;Montserrat-regular"],
                                                    name: "44",
                                                    verticalAlignment: "center",
                                                    withExternalLayout: !0
                                                }), e(t, {
                                                    __fromCanvasComponent: !0,
                                                    children: a(r, {
                                                        children: [e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7TW9udHNlcnJhdC1yZWd1bGFy",
                                                                "--framer-font-family": '"Montserrat"',
                                                                "--framer-font-size": "18px",
                                                                "--framer-text-color": "rgba(55, 54, 53, 1)"
                                                            },
                                                            children: e("br", {
                                                                className: "trailing-break"
                                                            })
                                                        }), e("p", {
                                                            style: {
                                                                "--framer-font-size": "18px"
                                                            },
                                                            children: e("span", {
                                                                style: {
                                                                    "--font-selector": "R0Y7TW9udHNlcnJhdC1yZWd1bGFy",
                                                                    "--framer-font-family": '"Montserrat"',
                                                                    "--framer-font-size": "18px",
                                                                    "--framer-text-color": "rgba(55, 54, 53, 1)"
                                                                },
                                                                children: "meses"
                                                            })
                                                        })]
                                                    }),
                                                    className: "framer-19gkmr3",
                                                    "data-framer-name": "meses",
                                                    fonts: ["GF;Montserrat-regular"],
                                                    name: "meses",
                                                    verticalAlignment: "center",
                                                    withExternalLayout: !0
                                                })]
                                            })]
                                        })]
                                    }), a("div", {
                                        className: "framer-owzijj",
                                        "data-framer-name": "Frame 17",
                                        name: "Frame 17",
                                        children: [a("div", {
                                            className: "framer-ea6wwq",
                                            "data-framer-name": "Frame 16",
                                            name: "Frame 16",
                                            children: [e("div", {
                                                className: "framer-15rztjt",
                                                "data-border": !0,
                                                "data-framer-name": "Labels",
                                                name: "Labels",
                                                children: e("div", {
                                                    className: "framer-153694s",
                                                    "data-framer-name": "Content",
                                                    name: "Content",
                                                    children: e(t, {
                                                        __fromCanvasComponent: !0,
                                                        children: e(r, {
                                                            children: e("p", {
                                                                style: {
                                                                    "--framer-font-size": "14px",
                                                                    "--framer-line-height": "130%"
                                                                },
                                                                children: e("span", {
                                                                    style: {
                                                                        "--font-selector": "R0Y7TW9udHNlcnJhdC1yZWd1bGFy",
                                                                        "--framer-font-family": '"Montserrat"',
                                                                        "--framer-font-size": "14px",
                                                                        "--framer-letter-spacing": "0px",
                                                                        "--framer-text-color": "rgba(145, 149, 155, 1)"
                                                                    },
                                                                    children: "Nome e sobrenome"
                                                                })
                                                            })
                                                        }),
                                                        className: "framer-6cxovf",
                                                        "data-framer-name": "Default",
                                                        fonts: ["GF;Montserrat-regular"],
                                                        name: "Default",
                                                        verticalAlignment: "center",
                                                        withExternalLayout: !0
                                                    })
                                                })
                                            }), e("div", {
                                                className: "framer-v6wkab",
                                                "data-border": !0,
                                                "data-framer-name": "Labels",
                                                name: "Labels",
                                                children: e("div", {
                                                    className: "framer-1spvhsu",
                                                    "data-framer-name": "Content",
                                                    name: "Content",
                                                    children: e(t, {
                                                        __fromCanvasComponent: !0,
                                                        children: e(r, {
                                                            children: e("p", {
                                                                style: {
                                                                    "--framer-font-size": "14px",
                                                                    "--framer-line-height": "130%"
                                                                },
                                                                children: e("span", {
                                                                    style: {
                                                                        "--font-selector": "R0Y7TW9udHNlcnJhdC1yZWd1bGFy",
                                                                        "--framer-font-family": '"Montserrat"',
                                                                        "--framer-font-size": "14px",
                                                                        "--framer-letter-spacing": "0px",
                                                                        "--framer-text-color": "rgba(145, 149, 155, 1)"
                                                                    },
                                                                    children: "Numero do whatsapp"
                                                                })
                                                            })
                                                        }),
                                                        className: "framer-1wxsgil",
                                                        "data-framer-name": "Default",
                                                        fonts: ["GF;Montserrat-regular"],
                                                        name: "Default",
                                                        verticalAlignment: "center",
                                                        withExternalLayout: !0
                                                    })
                                                })
                                            })]
                                        }), a("div", {
                                            className: "framer-rld61k",
                                            "data-framer-name": "Bottom button",
                                            name: "Bottom button",
                                            children: [e("div", {
                                                className: "framer-782vxf",
                                                "data-framer-name": "Rectangle 720",
                                                name: "Rectangle 720"
                                            }), e(Z, {
                                                className: "framer-92brpl",
                                                "data-framer-name": "Icon & text",
                                                fill: "rgba(0,0,0,1)",
                                                intrinsicHeight: 32,
                                                intrinsicWidth: 222,
                                                name: "Icon & text",
                                                svg: `<svg width="222" height="32" viewBox="0 0 222 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="221" height="32" transform="translate(0.5)" fill="#D7A12E"/>
<path d="M50.026 22.108C49.09 22.108 48.19 21.958 47.326 21.658C46.474 21.346 45.814 20.95 45.346 20.47L45.868 19.444C46.312 19.876 46.906 20.242 47.65 20.542C48.406 20.83 49.198 20.974 50.026 20.974C50.818 20.974 51.46 20.878 51.952 20.686C52.456 20.482 52.822 20.212 53.05 19.876C53.29 19.54 53.41 19.168 53.41 18.76C53.41 18.268 53.266 17.872 52.978 17.572C52.702 17.272 52.336 17.038 51.88 16.87C51.424 16.69 50.92 16.534 50.368 16.402C49.816 16.27 49.264 16.132 48.712 15.988C48.16 15.832 47.65 15.628 47.182 15.376C46.726 15.124 46.354 14.794 46.066 14.386C45.79 13.966 45.652 13.42 45.652 12.748C45.652 12.124 45.814 11.554 46.138 11.038C46.474 10.51 46.984 10.09 47.668 9.778C48.352 9.454 49.228 9.292 50.296 9.292C51.004 9.292 51.706 9.394 52.402 9.598C53.098 9.79 53.698 10.06 54.202 10.408L53.752 11.47C53.212 11.11 52.636 10.846 52.024 10.678C51.424 10.51 50.842 10.426 50.278 10.426C49.522 10.426 48.898 10.528 48.406 10.732C47.914 10.936 47.548 11.212 47.308 11.56C47.08 11.896 46.966 12.28 46.966 12.712C46.966 13.204 47.104 13.6 47.38 13.9C47.668 14.2 48.04 14.434 48.496 14.602C48.964 14.77 49.474 14.92 50.026 15.052C50.578 15.184 51.124 15.328 51.664 15.484C52.216 15.64 52.72 15.844 53.176 16.096C53.644 16.336 54.016 16.66 54.292 17.068C54.58 17.476 54.724 18.01 54.724 18.67C54.724 19.282 54.556 19.852 54.22 20.38C53.884 20.896 53.368 21.316 52.672 21.64C51.988 21.952 51.106 22.108 50.026 22.108ZM61.2082 22.09C60.2962 22.09 59.4742 21.886 58.7422 21.478C58.0222 21.058 57.4522 20.488 57.0322 19.768C56.6122 19.036 56.4022 18.202 56.4022 17.266C56.4022 16.318 56.6122 15.484 57.0322 14.764C57.4522 14.044 58.0222 13.48 58.7422 13.072C59.4622 12.664 60.2842 12.46 61.2082 12.46C62.1442 12.46 62.9722 12.664 63.6922 13.072C64.4242 13.48 64.9942 14.044 65.4022 14.764C65.8222 15.484 66.0322 16.318 66.0322 17.266C66.0322 18.202 65.8222 19.036 65.4022 19.768C64.9942 20.488 64.4242 21.058 63.6922 21.478C62.9602 21.886 62.1322 22.09 61.2082 22.09ZM61.2082 20.956C61.8922 20.956 62.4982 20.806 63.0262 20.506C63.5542 20.194 63.9682 19.762 64.2682 19.21C64.5802 18.646 64.7362 17.998 64.7362 17.266C64.7362 16.522 64.5802 15.874 64.2682 15.322C63.9682 14.77 63.5542 14.344 63.0262 14.044C62.4982 13.732 61.8982 13.576 61.2262 13.576C60.5542 13.576 59.9542 13.732 59.4262 14.044C58.8982 14.344 58.4782 14.77 58.1662 15.322C57.8542 15.874 57.6982 16.522 57.6982 17.266C57.6982 17.998 57.8542 18.646 58.1662 19.21C58.4782 19.762 58.8982 20.194 59.4262 20.506C59.9542 20.806 60.5482 20.956 61.2082 20.956ZM68.6414 22V8.644H69.9194V22H68.6414ZM73.4754 22V12.55H74.7534V22H73.4754ZM74.1234 10.462C73.8594 10.462 73.6374 10.372 73.4574 10.192C73.2774 10.012 73.1874 9.796 73.1874 9.544C73.1874 9.292 73.2774 9.082 73.4574 8.914C73.6374 8.734 73.8594 8.644 74.1234 8.644C74.3874 8.644 74.6094 8.728 74.7894 8.896C74.9694 9.064 75.0594 9.274 75.0594 9.526C75.0594 9.79 74.9694 10.012 74.7894 10.192C74.6214 10.372 74.3994 10.462 74.1234 10.462ZM82.2333 22.09C81.2973 22.09 80.4573 21.886 79.7133 21.478C78.9813 21.058 78.4053 20.488 77.9853 19.768C77.5653 19.036 77.3553 18.202 77.3553 17.266C77.3553 16.318 77.5653 15.484 77.9853 14.764C78.4053 14.044 78.9813 13.48 79.7133 13.072C80.4573 12.664 81.2973 12.46 82.2333 12.46C83.0373 12.46 83.7633 12.616 84.4113 12.928C85.0593 13.24 85.5693 13.708 85.9413 14.332L84.9873 14.98C84.6633 14.5 84.2613 14.146 83.7813 13.918C83.3013 13.69 82.7793 13.576 82.2153 13.576C81.5433 13.576 80.9373 13.732 80.3973 14.044C79.8573 14.344 79.4313 14.77 79.1193 15.322C78.8073 15.874 78.6513 16.522 78.6513 17.266C78.6513 18.01 78.8073 18.658 79.1193 19.21C79.4313 19.762 79.8573 20.194 80.3973 20.506C80.9373 20.806 81.5433 20.956 82.2153 20.956C82.7793 20.956 83.3013 20.842 83.7813 20.614C84.2613 20.386 84.6633 20.038 84.9873 19.57L85.9413 20.218C85.5693 20.83 85.0593 21.298 84.4113 21.622C83.7633 21.934 83.0373 22.09 82.2333 22.09ZM88.3113 22V12.55H89.5893V22H88.3113ZM88.9593 10.462C88.6953 10.462 88.4733 10.372 88.2933 10.192C88.1133 10.012 88.0233 9.796 88.0233 9.544C88.0233 9.292 88.1133 9.082 88.2933 8.914C88.4733 8.734 88.6953 8.644 88.9593 8.644C89.2233 8.644 89.4453 8.728 89.6253 8.896C89.8053 9.064 89.8953 9.274 89.8953 9.526C89.8953 9.79 89.8053 10.012 89.6253 10.192C89.4573 10.372 89.2353 10.462 88.9593 10.462ZM96.1333 22.09C95.2453 22.09 94.5613 21.85 94.0813 21.37C93.6013 20.89 93.3613 20.212 93.3613 19.336V10.462H94.6393V19.264C94.6393 19.816 94.7773 20.242 95.0533 20.542C95.3413 20.842 95.7493 20.992 96.2773 20.992C96.8413 20.992 97.3093 20.83 97.6813 20.506L98.1313 21.424C97.8793 21.652 97.5733 21.82 97.2133 21.928C96.8653 22.036 96.5053 22.09 96.1333 22.09ZM91.6693 13.612V12.55H97.5193V13.612H91.6693ZM106.38 22V19.912L106.326 19.57V16.078C106.326 15.274 106.098 14.656 105.642 14.224C105.198 13.792 104.532 13.576 103.644 13.576C103.032 13.576 102.45 13.678 101.898 13.882C101.346 14.086 100.878 14.356 100.494 14.692L99.9178 13.738C100.398 13.33 100.974 13.018 101.646 12.802C102.318 12.574 103.026 12.46 103.77 12.46C104.994 12.46 105.936 12.766 106.596 13.378C107.268 13.978 107.604 14.896 107.604 16.132V22H106.38ZM103.122 22.09C102.414 22.09 101.796 21.976 101.268 21.748C100.752 21.508 100.356 21.184 100.08 20.776C99.8038 20.356 99.6658 19.876 99.6658 19.336C99.6658 18.844 99.7798 18.4 100.008 18.004C100.248 17.596 100.632 17.272 101.16 17.032C101.7 16.78 102.42 16.654 103.32 16.654H106.578V17.608H103.356C102.444 17.608 101.808 17.77 101.448 18.094C101.1 18.418 100.926 18.82 100.926 19.3C100.926 19.84 101.136 20.272 101.556 20.596C101.976 20.92 102.564 21.082 103.32 21.082C104.04 21.082 104.658 20.92 105.174 20.596C105.702 20.26 106.086 19.78 106.326 19.156L106.614 20.038C106.374 20.662 105.954 21.16 105.354 21.532C104.766 21.904 104.022 22.09 103.122 22.09ZM111.075 22V12.55H112.299V15.124L112.173 14.674C112.437 13.954 112.881 13.408 113.505 13.036C114.129 12.652 114.903 12.46 115.827 12.46V13.702C115.779 13.702 115.731 13.702 115.683 13.702C115.635 13.69 115.587 13.684 115.539 13.684C114.543 13.684 113.763 13.99 113.199 14.602C112.635 15.202 112.353 16.06 112.353 17.176V22H111.075ZM126.863 22.09C125.951 22.09 125.129 21.886 124.397 21.478C123.677 21.058 123.107 20.488 122.687 19.768C122.267 19.036 122.057 18.202 122.057 17.266C122.057 16.318 122.267 15.484 122.687 14.764C123.107 14.044 123.677 13.48 124.397 13.072C125.117 12.664 125.939 12.46 126.863 12.46C127.799 12.46 128.627 12.664 129.347 13.072C130.079 13.48 130.649 14.044 131.057 14.764C131.477 15.484 131.687 16.318 131.687 17.266C131.687 18.202 131.477 19.036 131.057 19.768C130.649 20.488 130.079 21.058 129.347 21.478C128.615 21.886 127.787 22.09 126.863 22.09ZM126.863 20.956C127.547 20.956 128.153 20.806 128.681 20.506C129.209 20.194 129.623 19.762 129.923 19.21C130.235 18.646 130.391 17.998 130.391 17.266C130.391 16.522 130.235 15.874 129.923 15.322C129.623 14.77 129.209 14.344 128.681 14.044C128.153 13.732 127.553 13.576 126.881 13.576C126.209 13.576 125.609 13.732 125.081 14.044C124.553 14.344 124.133 14.77 123.821 15.322C123.509 15.874 123.353 16.522 123.353 17.266C123.353 17.998 123.509 18.646 123.821 19.21C124.133 19.762 124.553 20.194 125.081 20.506C125.609 20.806 126.203 20.956 126.863 20.956ZM134.296 22V12.55H135.52V15.124L135.394 14.674C135.658 13.954 136.102 13.408 136.726 13.036C137.35 12.652 138.124 12.46 139.048 12.46V13.702C139 13.702 138.952 13.702 138.904 13.702C138.856 13.69 138.808 13.684 138.76 13.684C137.764 13.684 136.984 13.99 136.42 14.602C135.856 15.202 135.574 16.06 135.574 17.176V22H134.296ZM145.216 22.09C144.28 22.09 143.44 21.886 142.696 21.478C141.964 21.058 141.388 20.488 140.968 19.768C140.548 19.036 140.338 18.202 140.338 17.266C140.338 16.318 140.548 15.484 140.968 14.764C141.388 14.044 141.964 13.48 142.696 13.072C143.44 12.664 144.28 12.46 145.216 12.46C146.02 12.46 146.746 12.616 147.394 12.928C148.042 13.24 148.552 13.708 148.924 14.332L147.97 14.98C147.646 14.5 147.244 14.146 146.764 13.918C146.284 13.69 145.762 13.576 145.198 13.576C144.526 13.576 143.92 13.732 143.38 14.044C142.84 14.344 142.414 14.77 142.102 15.322C141.79 15.874 141.634 16.522 141.634 17.266C141.634 18.01 141.79 18.658 142.102 19.21C142.414 19.762 142.84 20.194 143.38 20.506C143.92 20.806 144.526 20.956 145.198 20.956C145.762 20.956 146.284 20.842 146.764 20.614C147.244 20.386 147.646 20.038 147.97 19.57L148.924 20.218C148.552 20.83 148.042 21.298 147.394 21.622C146.746 21.934 146.02 22.09 145.216 22.09ZM144.46 25.96C144.16 25.96 143.884 25.924 143.632 25.852C143.392 25.78 143.164 25.678 142.948 25.546L143.254 24.862C143.434 24.97 143.62 25.054 143.812 25.114C144.016 25.174 144.226 25.204 144.442 25.204C144.802 25.204 145.078 25.126 145.27 24.97C145.462 24.826 145.558 24.622 145.558 24.358C145.558 24.118 145.462 23.92 145.27 23.764C145.09 23.608 144.814 23.53 144.442 23.53H144.028L144.46 21.892H145.234L144.964 22.936C145.456 22.972 145.834 23.122 146.098 23.386C146.362 23.662 146.494 23.998 146.494 24.394C146.494 24.874 146.302 25.252 145.918 25.528C145.546 25.816 145.06 25.96 144.46 25.96ZM157.356 22V19.912L157.302 19.57V16.078C157.302 15.274 157.074 14.656 156.618 14.224C156.174 13.792 155.508 13.576 154.62 13.576C154.008 13.576 153.426 13.678 152.874 13.882C152.322 14.086 151.854 14.356 151.47 14.692L150.894 13.738C151.374 13.33 151.95 13.018 152.622 12.802C153.294 12.574 154.002 12.46 154.746 12.46C155.97 12.46 156.912 12.766 157.572 13.378C158.244 13.978 158.58 14.896 158.58 16.132V22H157.356ZM154.098 22.09C153.39 22.09 152.772 21.976 152.244 21.748C151.728 21.508 151.332 21.184 151.056 20.776C150.78 20.356 150.642 19.876 150.642 19.336C150.642 18.844 150.756 18.4 150.984 18.004C151.224 17.596 151.608 17.272 152.136 17.032C152.676 16.78 153.396 16.654 154.296 16.654H157.554V17.608H154.332C153.42 17.608 152.784 17.77 152.424 18.094C152.076 18.418 151.902 18.82 151.902 19.3C151.902 19.84 152.112 20.272 152.532 20.596C152.952 20.92 153.54 21.082 154.296 21.082C155.016 21.082 155.634 20.92 156.15 20.596C156.678 20.26 157.062 19.78 157.302 19.156L157.59 20.038C157.35 20.662 156.93 21.16 156.33 21.532C155.742 21.904 154.998 22.09 154.098 22.09ZM173.86 12.46C174.628 12.46 175.294 12.61 175.858 12.91C176.434 13.198 176.878 13.642 177.19 14.242C177.514 14.842 177.676 15.598 177.676 16.51V22H176.398V16.636C176.398 15.64 176.158 14.89 175.678 14.386C175.21 13.87 174.544 13.612 173.68 13.612C173.032 13.612 172.468 13.75 171.988 14.026C171.52 14.29 171.154 14.68 170.89 15.196C170.638 15.7 170.512 16.312 170.512 17.032V22H169.234V16.636C169.234 15.64 168.994 14.89 168.514 14.386C168.034 13.87 167.362 13.612 166.498 13.612C165.862 13.612 165.304 13.75 164.824 14.026C164.344 14.29 163.972 14.68 163.708 15.196C163.456 15.7 163.33 16.312 163.33 17.032V22H162.052V12.55H163.276V15.106L163.078 14.656C163.366 13.972 163.828 13.438 164.464 13.054C165.112 12.658 165.874 12.46 166.75 12.46C167.674 12.46 168.46 12.694 169.108 13.162C169.756 13.618 170.176 14.308 170.368 15.232L169.864 15.034C170.14 14.266 170.626 13.648 171.322 13.18C172.03 12.7 172.876 12.46 173.86 12.46ZM185.155 22.09C184.171 22.09 183.307 21.886 182.563 21.478C181.819 21.058 181.237 20.488 180.817 19.768C180.397 19.036 180.187 18.202 180.187 17.266C180.187 16.33 180.385 15.502 180.781 14.782C181.189 14.062 181.741 13.498 182.437 13.09C183.145 12.67 183.937 12.46 184.813 12.46C185.701 12.46 186.487 12.664 187.171 13.072C187.867 13.468 188.413 14.032 188.809 14.764C189.205 15.484 189.403 16.318 189.403 17.266C189.403 17.326 189.397 17.392 189.385 17.464C189.385 17.524 189.385 17.59 189.385 17.662H181.159V16.708H188.701L188.197 17.086C188.197 16.402 188.047 15.796 187.747 15.268C187.459 14.728 187.063 14.308 186.559 14.008C186.055 13.708 185.473 13.558 184.813 13.558C184.165 13.558 183.583 13.708 183.067 14.008C182.551 14.308 182.149 14.728 181.861 15.268C181.573 15.808 181.429 16.426 181.429 17.122V17.32C181.429 18.04 181.585 18.676 181.897 19.228C182.221 19.768 182.665 20.194 183.229 20.506C183.805 20.806 184.459 20.956 185.191 20.956C185.767 20.956 186.301 20.854 186.793 20.65C187.297 20.446 187.729 20.134 188.089 19.714L188.809 20.542C188.389 21.046 187.861 21.43 187.225 21.694C186.601 21.958 185.911 22.09 185.155 22.09ZM196.829 12.46C197.597 12.46 198.269 12.61 198.845 12.91C199.433 13.198 199.889 13.642 200.213 14.242C200.549 14.842 200.717 15.598 200.717 16.51V22H199.439V16.636C199.439 15.64 199.187 14.89 198.683 14.386C198.191 13.87 197.495 13.612 196.595 13.612C195.923 13.612 195.335 13.75 194.831 14.026C194.339 14.29 193.955 14.68 193.679 15.196C193.415 15.7 193.283 16.312 193.283 17.032V22H192.005V12.55H193.229V15.142L193.031 14.656C193.331 13.972 193.811 13.438 194.471 13.054C195.131 12.658 195.917 12.46 196.829 12.46ZM207.157 22.09C206.269 22.09 205.585 21.85 205.105 21.37C204.625 20.89 204.385 20.212 204.385 19.336V10.462H205.663V19.264C205.663 19.816 205.801 20.242 206.077 20.542C206.365 20.842 206.773 20.992 207.301 20.992C207.865 20.992 208.333 20.83 208.705 20.506L209.155 21.424C208.903 21.652 208.597 21.82 208.237 21.928C207.889 22.036 207.529 22.09 207.157 22.09ZM202.693 13.612V12.55H208.543V13.612H202.693ZM214.999 22.09C214.087 22.09 213.265 21.886 212.533 21.478C211.813 21.058 211.243 20.488 210.823 19.768C210.403 19.036 210.193 18.202 210.193 17.266C210.193 16.318 210.403 15.484 210.823 14.764C211.243 14.044 211.813 13.48 212.533 13.072C213.253 12.664 214.075 12.46 214.999 12.46C215.935 12.46 216.763 12.664 217.483 13.072C218.215 13.48 218.785 14.044 219.193 14.764C219.613 15.484 219.823 16.318 219.823 17.266C219.823 18.202 219.613 19.036 219.193 19.768C218.785 20.488 218.215 21.058 217.483 21.478C216.751 21.886 215.923 22.09 214.999 22.09ZM214.999 20.956C215.683 20.956 216.289 20.806 216.817 20.506C217.345 20.194 217.759 19.762 218.059 19.21C218.371 18.646 218.527 17.998 218.527 17.266C218.527 16.522 218.371 15.874 218.059 15.322C217.759 14.77 217.345 14.344 216.817 14.044C216.289 13.732 215.689 13.576 215.017 13.576C214.345 13.576 213.745 13.732 213.217 14.044C212.689 14.344 212.269 14.77 211.957 15.322C211.645 15.874 211.489 16.522 211.489 17.266C211.489 17.998 211.645 18.646 211.957 19.21C212.269 19.762 212.689 20.194 213.217 20.506C213.745 20.806 214.339 20.956 214.999 20.956Z" fill="white"/>
</svg>
`,
                                                withExternalLayout: !0
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        }), a("div", {
                            className: "framer-1yqynt4",
                            "data-framer-name": "Frame 1",
                            name: "Frame 1",
                            children: [e("div", {
                                className: "framer-ezmrek",
                                "data-framer-name": "Logo-Positiva-black",
                                name: "Logo-Positiva-black",
                                children: e(Z, {
                                    className: "framer-yjlk0c",
                                    "data-framer-name": "Group 66",
                                    fill: "rgba(0,0,0,1)",
                                    intrinsicHeight: 79,
                                    intrinsicWidth: 281,
                                    name: "Group 66",
                                    svg: `<svg width="281" height="79" viewBox="0 0 281 79" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M244.715 61.4258C244.715 61.2368 244.715 61.029 244.678 60.84C244.621 60.4999 244.734 60.3299 245.112 60.2921C245.509 60.2543 245.66 60.3865 245.717 60.7833C246.208 64.7324 246.737 68.6815 247.247 72.6495C247.455 74.2933 247.644 75.9372 247.909 77.5811C248.022 78.3369 247.909 78.677 247.058 78.7526C246.284 78.8093 245.981 78.6581 245.925 77.8267C245.736 74.5956 245.471 71.3835 245.226 68.1713C245.056 65.9228 244.886 63.6743 244.715 61.4258Z" fill="white"/>
<path d="M238.197 0.545626C238.745 0.37557 238.896 0.696789 238.953 1.24475C239.501 6.91328 240.067 12.5818 240.615 18.2503C240.653 18.5527 240.804 18.9117 240.238 18.9872C239.69 19.0817 239.633 18.7794 239.576 18.3826C238.99 14.5091 238.386 10.6167 237.781 6.74323C237.536 5.13714 237.309 3.53106 237.044 1.92498C236.836 0.621216 236.817 0.621207 238.197 0.545626Z" fill="white"/>
<path d="M222.249 6.4408C222.495 6.10069 222.911 5.96842 223.232 5.72279C223.685 5.36378 223.95 5.40157 224.271 5.94953C227.143 10.8812 230.034 15.775 232.906 20.6877C233.038 20.9144 233.378 21.1601 232.887 21.4246C232.509 21.6325 232.283 21.6703 232.018 21.2546C228.863 16.4363 225.688 11.6559 222.514 6.8376C222.438 6.72423 222.363 6.61085 222.249 6.4408Z" fill="white"/>
<path d="M252.273 58.4023C252.292 58.0811 252.576 58.0622 252.746 57.9299C253.01 57.741 253.161 57.8922 253.294 58.1C253.766 58.8558 254.257 59.6305 254.73 60.3863C257.281 64.4488 259.812 68.5301 262.42 72.5736C263.044 73.5373 262.193 73.5373 261.796 73.8774C261.343 74.2553 261.06 74.2364 260.719 73.6318C258.036 68.7379 255.297 63.863 252.576 58.9692C252.462 58.7802 252.368 58.5724 252.273 58.4023Z" fill="white"/>
<path d="M252.822 1.77379C253.256 1.92495 253.766 2.01944 254.201 2.26507C254.56 2.47292 254.258 2.83192 254.163 3.09645C252.557 7.74464 250.951 12.3739 249.345 17.0221C249.137 17.6079 248.948 18.1936 248.74 18.7794C248.608 19.1762 248.57 19.7052 247.89 19.4596C247.248 19.2329 247.644 18.8172 247.72 18.496C248.986 14.0745 250.252 9.65306 251.537 5.23161C251.82 4.23017 252.104 3.22872 252.406 2.24617C252.463 2.05722 252.425 1.7549 252.822 1.77379Z" fill="white"/>
<path d="M230.544 76.4285C230.601 76.2584 230.657 76.1262 230.695 75.9939C232.66 70.7411 234.606 65.4693 236.571 60.2165C236.666 59.9708 236.609 59.5362 237.082 59.5929C237.611 59.6496 237.818 59.8386 237.629 60.4621C235.91 65.8283 234.228 71.2134 232.566 76.5985C232.377 77.1843 232.112 77.2032 231.659 76.9953C231.281 76.8064 230.771 76.882 230.544 76.4285Z" fill="white"/>
<path d="M226.331 26.9988C226.104 26.8665 225.934 26.7721 225.783 26.6776C221.153 23.6544 216.505 20.6312 211.876 17.608C211.517 17.3623 211.404 17.1923 211.706 16.8332C211.895 16.6254 212.046 16.3798 212.178 16.1341C212.405 15.7373 212.613 15.7751 212.953 16.0208C217.45 19.2896 221.966 22.5585 226.463 25.8084C226.633 25.9407 227.011 26.0163 226.86 26.3375C226.746 26.602 226.52 26.791 226.331 26.9988Z" fill="white"/>
<path d="M254.956 22.4829C255.089 22.3128 255.221 22.1428 255.353 21.9727C258.735 17.8536 262.118 13.7156 265.519 9.61532C265.708 9.36968 265.897 8.87841 266.237 9.04846C266.69 9.2752 267.068 9.6909 267.427 10.0877C267.597 10.2766 267.295 10.4278 267.182 10.5601C263.497 14.6414 259.794 18.7228 256.109 22.8041C255.939 22.9931 255.807 23.3521 255.448 23.0497C255.259 22.8797 254.975 22.823 254.956 22.4829Z" fill="white"/>
<path d="M258.546 53.3386C258.735 53.1119 258.867 52.904 259.038 52.734C259.264 52.5072 259.453 52.734 259.623 52.8474C261.154 53.8866 262.684 54.9258 264.215 55.9839C267.2 58.0246 270.186 60.1031 273.19 62.106C273.795 62.5028 273.776 62.8051 273.379 63.2585C273.039 63.6553 272.888 64.3167 272.075 63.6742C267.786 60.3676 263.44 57.1176 259.132 53.8299C258.943 53.6976 258.773 53.5276 258.546 53.3386Z" fill="white"/>
<path d="M217.639 68.4734C217.752 68.3412 217.865 68.2089 217.979 68.0955C221.739 64.1087 225.499 60.1218 229.24 56.1349C229.599 55.757 229.826 55.757 230.204 56.0783C230.62 56.4184 230.279 56.6073 230.109 56.8152C226.576 60.9532 223.024 65.0912 219.471 69.2292C219.32 69.4182 219.207 69.8528 218.886 69.6449C218.394 69.3426 217.96 68.9836 217.639 68.4734Z" fill="white"/>
<path d="M263.478 45.2325C265.784 45.7427 268.202 46.2718 270.602 46.8197C273.398 47.4432 276.195 48.0857 278.991 48.6525C279.709 48.8037 279.766 49.106 279.577 49.6729C279.407 50.183 279.482 50.7499 278.557 50.4854C273.474 49.0493 268.372 47.6889 263.27 46.3095C262.949 46.2151 262.552 46.1962 262.76 45.686C262.893 45.4215 262.911 45.0625 263.478 45.2325Z" fill="white"/>
<path d="M224.309 49.2383C224.649 49.2761 224.649 49.6162 224.781 49.824C225.027 50.183 224.649 50.2397 224.46 50.3531C222.4 51.449 220.341 52.5449 218.281 53.6219C215.598 55.0391 212.896 56.4373 210.232 57.8922C209.627 58.2323 209.457 57.8922 209.363 57.4765C209.268 57.0798 208.456 56.6452 209.382 56.2106C214.219 53.9621 219.037 51.6758 223.874 49.4083C224.006 49.3517 224.139 49.295 224.309 49.2383Z" fill="white"/>
<path d="M260.663 28.7748C260.663 28.5291 260.89 28.4914 261.041 28.3969C265.746 25.7894 270.47 23.1818 275.174 20.5554C275.609 20.3098 275.741 20.4798 275.93 20.82C276.554 21.9348 276.573 21.9348 275.439 22.5016C270.866 24.769 266.294 27.0364 261.702 29.285C261.192 29.5495 260.682 29.3038 260.663 28.7748Z" fill="white"/>
<path d="M280.484 35.5961C280.578 36.0496 280.238 36.0496 279.917 36.0685C276.818 36.3897 273.719 36.692 270.621 37.0132C268.504 37.2211 266.369 37.4478 264.253 37.6746C263.818 37.7124 263.592 37.6557 263.535 37.1644C263.459 36.6731 263.705 36.5975 264.083 36.5409C269.109 35.8229 274.135 35.0859 279.161 34.349C280.352 34.179 280.503 34.3301 280.484 35.5961Z" fill="white"/>
<path d="M251.612 67.2263C251.272 67.3208 251.253 67.0185 251.196 66.8295C250.497 64.5621 249.817 62.2758 249.118 59.9895C249.005 59.5927 249.156 59.4415 249.515 59.3093C249.912 59.177 250.044 59.3282 250.176 59.6872C250.913 61.8034 251.688 63.9008 252.462 66.017C252.727 66.8106 252.462 67.1885 251.612 67.2263Z" fill="white"/>
<path d="M232.472 12.7896C232.642 12.3928 233.133 12.4495 233.473 12.2794C233.851 12.0905 233.87 12.4306 233.945 12.6573C234.55 14.4901 235.155 16.3419 235.741 18.1747C235.873 18.6093 235.986 19.0438 236.156 19.4595C236.345 19.913 236.043 19.9886 235.759 20.102C235.419 20.2531 235.249 20.102 235.136 19.7997C234.286 17.57 233.416 15.3593 232.566 13.1297C232.547 13.0541 232.528 12.9596 232.472 12.7896Z" fill="white"/>
<path d="M228.768 24.5237C228.333 24.5237 228.239 24.3725 228.125 24.2591C226.462 22.6342 224.8 21.0092 223.099 19.422C222.665 19.0063 222.948 18.8174 223.231 18.5906C223.477 18.3828 223.647 17.8348 224.138 18.3639C225.726 20.1022 227.332 21.8217 228.938 23.5411C229.051 23.6734 229.259 23.7868 229.108 24.0324C228.957 24.2403 228.824 24.467 228.768 24.5237Z" fill="white"/>
<path d="M261.456 61.6147C261.381 61.558 261.268 61.4824 261.173 61.3879C259.586 59.6118 257.999 57.8167 256.411 56.0406C256.204 55.795 256.147 55.6249 256.449 55.436C256.657 55.3037 256.808 54.9258 257.13 55.247C258.849 56.9854 260.568 58.7237 262.288 60.4621C262.477 60.651 261.853 61.5769 261.456 61.6147Z" fill="white"/>
<path d="M243.393 17.8348C243.525 15.7374 243.676 13.6401 243.809 11.5427C243.828 11.127 243.884 10.8247 244.432 10.957C244.848 11.0514 245.339 10.9003 245.245 11.6561C244.961 13.829 244.734 16.002 244.489 18.1749C244.451 18.5339 244.47 18.9307 243.846 18.8551C243.223 18.7795 243.431 18.4016 243.412 18.0804C243.355 18.0048 243.374 17.9104 243.393 17.8348Z" fill="white"/>
<path d="M241.862 61.709C241.692 63.7119 241.484 65.7337 241.352 67.7366C241.295 68.5302 240.804 68.2467 240.407 68.2656C239.897 68.2845 239.859 68.02 239.916 67.5665C240.237 65.3747 240.539 63.1829 240.823 60.991C240.88 60.5753 240.955 60.3108 241.465 60.3675C242.07 60.4242 241.938 60.7832 241.881 61.1422C241.862 61.3122 241.862 61.5012 241.862 61.709C241.843 61.709 241.843 61.709 241.862 61.709Z" fill="white"/>
<path d="M268.145 52.5073C267.956 52.4317 267.843 52.3939 267.748 52.3372C265.783 51.4303 263.837 50.5422 261.872 49.6163C261.626 49.503 261.211 49.4652 261.475 48.9928C261.664 48.6149 261.815 48.4259 262.307 48.6149C264.291 49.4463 266.312 50.2399 268.315 51.0335C268.561 51.1279 268.844 51.2035 268.674 51.5436C268.485 51.9026 268.447 52.2994 268.145 52.5073Z" fill="white"/>
<path d="M251.404 20.4044C251.48 20.2532 251.555 20.102 251.631 19.9509C252.538 18.1558 253.483 16.3608 254.371 14.5469C254.616 14.0178 254.843 13.9233 255.372 14.2257C255.845 14.4902 255.939 14.698 255.637 15.1893C254.579 16.9843 253.558 18.7983 252.538 20.5933C252.406 20.8389 252.292 21.1413 251.914 20.8956C251.707 20.7445 251.366 20.7634 251.404 20.4044Z" fill="white"/>
<path d="M233.284 58.1C233.794 58.1 234.021 58.5157 233.775 58.988C232.793 60.8398 231.772 62.6915 230.809 64.5621C230.544 65.0912 230.299 65.0345 229.845 64.7888C229.354 64.5243 229.278 64.3164 229.581 63.8441C230.658 62.1057 231.697 60.3296 232.755 58.5912C232.887 58.3834 232.963 58.0811 233.284 58.1Z" fill="white"/>
<path d="M267.295 40.4332C268.277 40.4332 269.26 40.471 270.242 40.4143C270.885 40.3954 270.866 40.7355 270.885 41.2079C270.904 41.7559 270.677 41.8315 270.186 41.8126C268.221 41.6992 266.274 41.6236 264.309 41.5669C263.913 41.548 263.61 41.548 263.629 40.9812C263.648 40.4521 263.95 40.4143 264.347 40.4332C265.33 40.4332 266.312 40.4332 267.295 40.4332Z" fill="white"/>
<path d="M263.384 20.6499C263.611 20.8955 263.837 21.1601 264.064 21.4246C264.272 21.6891 264.064 21.8214 263.894 21.9537C262.269 23.2385 260.644 24.5234 259.057 25.8461C258.66 26.1862 258.528 25.846 258.32 25.676C258.093 25.4681 258.037 25.2981 258.301 25.0525C259.907 23.6542 261.494 22.2371 263.1 20.8389C263.157 20.7822 263.233 20.7444 263.384 20.6499Z" fill="white"/>
<path d="M226.727 52.8662C227.049 52.9607 227.2 53.2252 227.351 53.452C227.521 53.6976 227.237 53.7921 227.105 53.9054C225.518 55.247 223.931 56.5885 222.344 57.949C221.852 58.3647 221.739 57.9112 221.493 57.6656C221.229 57.401 221.097 57.1554 221.512 56.8531C223.175 55.5871 224.8 54.3211 226.463 53.0552C226.538 52.9796 226.652 52.9229 226.727 52.8662Z" fill="white"/>
<path d="M262.458 32.573C262.401 32.2518 262.628 32.214 262.798 32.1573C264.688 31.4393 266.577 30.7402 268.448 30.0033C269.052 29.7765 269.015 30.2489 269.147 30.5323C269.298 30.8536 269.411 31.137 268.901 31.2882C266.974 31.8928 265.066 32.5163 263.157 33.1777C262.458 33.4233 262.666 32.7809 262.458 32.573Z" fill="white"/>
<path d="M223.132 33.2206C223.366 33.4415 223.199 33.6708 223.191 33.8861C223.165 34.2102 222.952 34.2289 222.708 34.1966C221.825 34.0727 220.916 33.9512 220.034 33.8274C215.282 33.1707 210.528 32.4875 205.754 31.8864C204.615 31.7447 205.162 31.0933 205.156 30.5707C205.158 29.9804 205.355 29.7754 206.036 29.9035C211.51 30.9931 217.006 32.0272 222.504 33.0879C222.721 33.1225 222.941 33.1837 223.132 33.2206Z" fill="white"/>
<path d="M222.416 41.1475C222.452 41.4404 222.514 41.6789 222.522 41.9192C222.534 42.2397 222.239 42.2231 222.04 42.2701C220.236 42.6802 218.432 43.0902 216.614 43.4873C213.085 44.2779 209.529 45.0426 206.015 45.8728C205.312 46.0442 205.104 45.8241 205.043 45.2246C204.985 44.7052 204.605 44.1435 205.629 43.9878C210.973 43.1077 216.314 42.1475 221.657 41.2406C221.882 41.1927 222.123 41.1844 222.416 41.1475Z" fill="white"/>
<path d="M216.798 27.043C216.944 26.7217 217.188 26.9015 217.369 26.9795C219.555 27.9011 221.744 28.8494 223.945 29.7832C224.322 29.9514 224.34 30.1643 224.211 30.5244C224.057 30.9134 223.856 30.9175 223.496 30.7881C221.401 29.9926 219.297 29.2382 217.178 28.4716C216.4 28.1642 216.28 27.7187 216.798 27.043Z" fill="white"/>
<path d="M214.379 37.6288C214.472 37.6122 214.605 37.5809 214.739 37.5763C217.12 37.6276 219.515 37.6917 221.897 37.743C222.218 37.7586 222.381 37.8332 222.313 38.1832C222.268 38.4254 222.441 38.7937 221.987 38.8094C219.543 38.8806 217.099 38.9518 214.655 39.023C214.388 39.0323 214.136 37.9447 214.379 37.6288Z" fill="white"/>
<path d="M215.549 47.7933C215.631 47.7465 215.746 47.6725 215.87 47.6234C218.131 46.8738 220.409 46.1316 222.67 45.382C222.978 45.289 223.157 45.3046 223.21 45.6572C223.249 45.9005 223.535 46.1895 223.113 46.3564C220.834 47.2425 218.555 48.1285 216.276 49.0145C216.027 49.1127 215.426 48.1723 215.549 47.7933Z" fill="white"/>
<path d="M15.4798 31.809C15.4798 32.3175 15.2843 32.7477 14.9323 33.1388C14.5412 33.4908 14.1109 33.6864 13.6025 33.6864C12.9767 33.6864 12.5073 33.4517 12.1162 32.9433C11.4122 32.6695 10.0433 32.5522 8.00948 32.5522C6.36678 32.5522 5.1152 32.6304 4.25474 32.8259V36.1505L14.2674 40.179C15.0496 40.4919 15.4407 41.0785 15.4407 41.939V47.532C15.4407 49.5658 12.9376 50.5436 7.97036 50.5436C3.00316 50.5436 0.5 49.5267 0.5 47.4929C0.5 46.9844 0.695569 46.5151 1.04758 46.1631C1.39958 45.8111 1.86892 45.6155 2.37737 45.6155C3.00316 45.6155 3.4725 45.8893 3.86362 46.3978C4.56763 46.6715 5.93655 46.7889 8.00948 46.7889C9.65217 46.7889 10.9038 46.7106 11.7251 46.5151V43.1515L1.67335 39.1621C0.891118 38.8492 0.5 38.2625 0.5 37.402V31.8482C0.5 29.8534 3.00316 28.8365 7.97036 28.8365C12.9767 28.7974 15.4798 29.8143 15.4798 31.809Z" fill="white"/>
<path d="M22.7155 41.5089V46.5152C23.576 46.7108 24.7884 46.789 26.4702 46.789C28.5041 46.789 29.873 46.6717 30.577 46.3979C30.9681 45.8894 31.4374 45.6157 32.0632 45.6157C32.5717 45.6157 33.041 45.8112 33.393 46.1632C33.7841 46.5152 33.9406 46.9846 33.9406 47.493C33.9406 49.5268 31.4374 50.5437 26.4702 50.5437C21.503 50.5437 18.9999 49.5268 18.9999 47.5321V31.8483C18.9999 29.8536 21.503 28.8367 26.4702 28.8367C31.4374 28.8367 33.9406 29.8536 33.9406 31.8483V39.6706C33.9406 40.1791 33.745 40.6093 33.393 41.0004C33.0019 41.3524 32.5717 41.548 32.0632 41.548H22.7155V41.5089ZM22.7155 37.7933H30.225V32.8261C29.3645 32.6305 28.152 32.5523 26.5093 32.5523C24.8275 32.5523 23.576 32.6305 22.7546 32.8261V37.7933H22.7155Z" fill="white"/>
<path d="M48.6076 39.7099C48.6076 39.2014 48.8031 38.7712 49.1551 38.3801C49.5071 38.0281 49.9374 37.8325 50.4849 37.8325C50.9934 37.8325 51.4236 38.0281 51.8147 38.3801C52.1667 38.7321 52.3623 39.1623 52.3623 39.7099V55.3155C52.3623 55.824 52.1667 56.2542 51.8147 56.6453C51.4627 56.9973 51.0325 57.1929 50.4849 57.1929C49.9765 57.1929 49.5463 56.9973 49.1551 56.6453C48.8031 56.2933 48.6076 55.8631 48.6076 55.3155V50.2701C47.708 50.4265 46.4955 50.5048 44.8919 50.5048C39.9247 50.5048 37.4607 49.527 37.4607 47.5323V31.8875C37.4607 29.8928 39.9247 28.915 44.8919 28.915C49.8591 28.915 52.3232 29.932 52.3232 31.9267C52.3232 32.4351 52.1276 32.9044 51.7756 33.2564C51.4236 33.6084 50.9934 33.804 50.4458 33.804C49.82 33.804 49.3507 33.5693 48.9596 33.0609C48.2556 32.7871 46.8867 32.6698 44.8528 32.6698C43.2101 32.6698 41.9586 32.748 41.1372 32.9436V46.5936C41.9977 46.7891 43.2101 46.8674 44.8528 46.8674C46.4955 46.8674 47.7471 46.7891 48.5685 46.5936V39.7099H48.6076Z" fill="white"/>
<path d="M55.8037 23.9479C55.8037 23.4395 55.9993 23.0092 56.3513 22.6181C56.7033 22.2661 57.1335 22.0706 57.6811 22.0706C58.1895 22.0706 58.6198 22.2661 59.0109 22.6181C59.3629 22.9701 59.5584 23.4395 59.5584 23.9479V46.7892H63.3132C63.8216 46.7892 64.2519 46.9848 64.643 47.3368C64.995 47.6888 65.1905 48.119 65.1905 48.6275C65.1905 49.1359 64.995 49.5662 64.643 49.9573C64.291 50.3093 63.8607 50.5049 63.3132 50.5049H57.6811C57.1726 50.5049 56.7424 50.3093 56.3513 49.9573C55.9993 49.5662 55.8037 49.1359 55.8037 48.6275V23.9479Z" fill="white"/>
<path d="M68.6327 30.7924C68.6327 30.2839 68.8282 29.8537 69.1803 29.4626C69.5323 29.1106 69.9625 28.915 70.5101 28.915C71.0185 28.915 71.4487 29.1106 71.8399 29.4626C72.1919 29.8146 72.3874 30.2448 72.3874 30.7924V48.7056C72.3874 49.2141 72.1919 49.6443 71.8399 50.0354C71.4879 50.3874 71.0576 50.583 70.5101 50.583C70.0016 50.583 69.5714 50.3874 69.1803 50.0354C68.8282 49.6834 68.6327 49.2532 68.6327 48.7056V30.7924Z" fill="white"/>
<path d="M79.5842 48.6272C79.5842 49.1357 79.3886 49.605 79.0366 49.9571C78.6846 50.3482 78.2544 50.5046 77.7068 50.5046C77.1984 50.5046 76.7681 50.3091 76.377 49.9571C76.025 49.5659 75.8295 49.1357 75.8295 48.6272V31.8483C75.8295 29.8536 78.3326 28.8367 83.2998 28.8367C88.267 28.8367 90.7702 29.8536 90.7702 31.8483V48.6272C90.7702 49.1357 90.5746 49.605 90.2226 49.9571C89.8706 50.3482 89.4013 50.5046 88.8928 50.5046C88.3844 50.5046 87.9541 50.3091 87.6021 49.9571C87.2501 49.5659 87.0546 49.1357 87.0546 48.6272V32.8261C86.1941 32.6305 84.9816 32.5523 83.3389 32.5523C81.6571 32.5523 80.4056 32.6305 79.5842 32.8261V48.6272Z" fill="white"/>
<path d="M98.045 41.5089V46.5152C98.9054 46.7108 100.118 46.789 101.8 46.789C103.834 46.789 105.202 46.6717 105.906 46.3979C106.298 45.8894 106.767 45.6157 107.393 45.6157C107.901 45.6157 108.37 45.8112 108.722 46.1632C109.114 46.5152 109.27 46.9846 109.27 47.493C109.27 49.5268 106.767 50.5437 101.8 50.5437C96.8325 50.5437 94.3293 49.5268 94.3293 47.5321V31.8483C94.3293 29.8536 96.8325 28.8367 101.8 28.8367C106.767 28.8367 109.27 29.8536 109.27 31.8483V39.6706C109.27 40.1791 109.074 40.6093 108.722 41.0004C108.331 41.3524 107.901 41.548 107.393 41.548H98.045V41.5089ZM98.045 37.7933H105.554V32.8261C104.694 32.6305 103.482 32.5523 101.839 32.5523C100.157 32.5523 98.9054 32.6305 98.0841 32.8261V37.7933H98.045Z" fill="white"/>
<path d="M125.351 31.7125L125.519 31.6366L125.457 31.463C124.88 29.8484 123.087 28.0429 119.789 28.0429C116.657 28.0429 114.037 30.388 114.074 33.6864C114.074 34.8979 114.436 35.9771 115.228 36.8933C116.017 37.8059 117.221 38.5431 118.886 39.0981C120.725 39.717 122.044 40.346 122.903 41.108C123.75 41.8598 124.155 42.7458 124.155 43.9124C124.155 45.3217 123.655 46.34 122.853 47.0096C122.045 47.6836 120.908 48.0224 119.607 48.0224C116.716 48.0224 115.102 46.0148 114.684 44.6571L114.619 44.4445L114.414 44.5321L113.136 45.08L112.967 45.1525L113.025 45.3271C113.345 46.286 113.966 47.4073 115.032 48.2898C116.102 49.1747 117.609 49.8104 119.68 49.8104C121.542 49.8104 123.146 49.2888 124.287 48.2761C125.431 47.2606 126.089 45.7695 126.089 43.8759C126.089 42.218 125.54 40.924 124.486 39.8846C123.441 38.8529 121.909 38.083 119.962 37.4401L119.962 37.44L119.958 37.4388C118.778 37.0758 117.749 36.6376 117.017 36.0372C116.294 35.4437 115.862 34.694 115.862 33.6852C115.862 31.8091 117.247 29.8309 119.899 29.8309C122.144 29.8309 123.577 30.8963 123.945 32.1L124.011 32.3174L124.218 32.2239L125.351 31.7125Z" fill="white" stroke="white" stroke-width="0.4"/>
<path d="M150.196 38.9452C150.196 32.7737 145.36 28.0432 139.586 28.0432C133.812 28.0432 128.976 32.7737 128.976 38.9452C128.976 45.1166 133.812 49.8472 139.586 49.8472C145.397 49.8472 150.196 45.1161 150.196 38.9452ZM148.189 38.9452C148.189 43.9585 144.397 47.9861 139.586 47.9861C134.775 47.9861 130.983 43.9585 130.983 38.9452C130.983 33.9319 134.775 29.9042 139.586 29.9042C144.397 29.9042 148.189 33.9319 148.189 38.9452Z" fill="white" stroke="white" stroke-width="0.4"/>
<path d="M155.894 28.6084V28.4084H155.694H154.197H153.997V28.6084V49.2088V49.4088H154.197H164.533H164.733V49.2088V47.8939V47.6939H164.533H155.894V28.6084Z" fill="white" stroke="white" stroke-width="0.4"/>
<path d="M175.275 28.5351L175.225 28.4084H175.089H173.737H173.601L173.551 28.5351L165.443 49.1356L165.335 49.4088H165.629H167.236H167.373L167.422 49.2809L170.039 42.5055H178.823L181.404 49.28L181.453 49.4088H181.59H183.198H183.491L183.384 49.1356L175.275 28.5351ZM170.669 40.7906L174.395 31.1362L178.121 40.7906H170.669Z" fill="white" stroke="white" stroke-width="0.4"/>
<path d="M191.832 40.3898C193.511 40.2019 194.867 39.5563 195.821 38.5583C196.843 37.4887 197.387 36.0306 197.387 34.3429C197.387 32.5219 196.747 31.0307 195.576 29.9971C194.407 28.966 192.73 28.4084 190.686 28.4084H185.645H185.445V28.6084V49.2088V49.4088H185.645H187.143H187.343V49.2088V40.5331H189.6L196.261 49.3296L196.321 49.4088H196.42H198.32H198.724L198.479 49.0874L191.832 40.3898ZM190.394 38.8547H187.343V30.0503H190.394C191.986 30.0503 193.259 30.4706 194.131 31.2125C194.999 31.9512 195.49 33.0253 195.49 34.3795C195.49 35.7344 194.999 36.8468 194.128 37.6224C193.255 38.4 191.982 38.8547 190.394 38.8547Z" fill="white" stroke="white" stroke-width="0.4"/>
</svg>
`,
                                    withExternalLayout: !0
                                })
                            }), a("div", {
                                className: "framer-mafbg3",
                                "data-framer-name": "botton",
                                name: "botton",
                                children: [e(t, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                        children: [e("p", {
                                            style: {
                                                "--framer-font-size": "21px",
                                                "--framer-text-alignment": "center"
                                            },
                                            children: e("span", {
                                                style: {
                                                    "--font-selector": "R0Y7UG9wcGlucyBNZWRpdW0tNTAw",
                                                    "--framer-font-family": '"Poppins Medium"',
                                                    "--framer-font-size": "21px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-text-color": "rgba(255, 255, 255, 1)"
                                                },
                                                children: "Grupo SEGLINE - Unidade Paragominas"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--framer-font-size": "21px",
                                                "--framer-text-alignment": "center"
                                            },
                                            children: a("span", {
                                                style: {
                                                    "--font-selector": "R0Y7UG9wcGlucyBNZWRpdW0tNTAw",
                                                    "--framer-font-family": '"Poppins Medium"',
                                                    "--framer-font-size": "21px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-text-color": "rgba(255, 255, 255, 1)"
                                                },
                                                children: ["R. Belo Horizonte, 30 Centro, Paragominas - PA", e("br", {}), " 68626-140 "]
                                            })
                                        }), a("p", {
                                            style: {
                                                "--framer-font-size": "21px",
                                                "--framer-text-alignment": "center"
                                            },
                                            children: [e("span", {
                                                style: {
                                                    "--font-selector": "R0Y7UG9wcGlucyBNZWRpdW0tNTAw",
                                                    "--framer-font-family": '"Poppins Medium"',
                                                    "--framer-font-size": "21px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-text-color": "rgba(255, 255, 255, 1)"
                                                },
                                                children: "Tel: (91) 9 81029301\xA0Email:\xA0"
                                            }), e("span", {
                                                style: {
                                                    "--font-selector": "R0Y7UG9wcGlucyBNZWRpdW0tNTAw",
                                                    "--framer-font-family": '"Poppins Medium"',
                                                    "--framer-font-size": "21px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-text-color": "rgba(255, 255, 255, 1)",
                                                    "--framer-text-decoration": "underline"
                                                },
                                                children: "contato@gruposegline.com"
                                            })]
                                        })]
                                    }),
                                    className: "framer-1610x1i",
                                    "data-framer-name": "Grupo SEGLINE - Unidade Paragominas R. Belo Horizonte, 30 Centro, Paragominas - PA\u2028 68626-140 Tel: (91) 9 81029301\xA0Email:\xA0contato@gruposegline.com",
                                    fonts: ["GF;Poppins Medium-500"],
                                    name: "Grupo SEGLINE - Unidade Paragominas R. Belo Horizonte, 30 Centro, Paragominas - PA\u2028 68626-140 Tel: (91) 9 81029301\xA0Email:\xA0contato@gruposegline.com",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), e("div", {
                                    className: "framer-hlvkrs",
                                    "data-framer-name": "Frame 15",
                                    name: "Frame 15",
                                    children: e(t, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: a("p", {
                                                style: {
                                                    "--framer-font-size": "21px"
                                                },
                                                children: [e("span", {
                                                    style: {
                                                        "--font-selector": "R0Y7UG9wcGlucyBNZWRpdW0tNTAw",
                                                        "--framer-font-family": '"Poppins Medium"',
                                                        "--framer-font-size": "21px",
                                                        "--framer-font-weight": "500",
                                                        "--framer-text-color": "rgba(255, 255, 255, 1)",
                                                        "--framer-text-decoration": "underline"
                                                    },
                                                    children: "Aviso de Privacidade"
                                                }), e("span", {
                                                    style: {
                                                        "--font-selector": "R0Y7UG9wcGlucyBNZWRpdW0tNTAw",
                                                        "--framer-font-family": '"Poppins Medium"',
                                                        "--framer-font-size": "21px",
                                                        "--framer-font-weight": "500",
                                                        "--framer-text-color": "rgba(255, 255, 255, 1)"
                                                    },
                                                    children: "  "
                                                }), e("span", {
                                                    style: {
                                                        "--font-selector": "R0Y7UG9wcGlucyBNZWRpdW0tNTAw",
                                                        "--framer-font-family": '"Poppins Medium"',
                                                        "--framer-font-size": "21px",
                                                        "--framer-font-weight": "500",
                                                        "--framer-text-color": "rgba(255, 255, 255, 1)",
                                                        "--framer-text-decoration": "underline"
                                                    },
                                                    children: "Declara\xE7\xE3o de Uso de Cookies"
                                                }), e("span", {
                                                    style: {
                                                        "--font-selector": "R0Y7UG9wcGlucyBNZWRpdW0tNTAw",
                                                        "--framer-font-family": '"Poppins Medium"',
                                                        "--framer-font-size": "21px",
                                                        "--framer-font-weight": "500",
                                                        "--framer-text-color": "rgba(255, 255, 255, 1)"
                                                    },
                                                    children: "  "
                                                }), e("span", {
                                                    style: {
                                                        "--font-selector": "R0Y7UG9wcGlucyBNZWRpdW0tNTAw",
                                                        "--framer-font-family": '"Poppins Medium"',
                                                        "--framer-font-size": "21px",
                                                        "--framer-font-weight": "500",
                                                        "--framer-text-color": "rgba(255, 255, 255, 1)",
                                                        "--framer-text-decoration": "underline"
                                                    },
                                                    children: "Termos e Condi\xE7\xF5es de Uso"
                                                })]
                                            })
                                        }),
                                        className: "framer-ftyfkh",
                                        "data-framer-name": "Aviso de Privacidade Declara\xE7\xE3o de Uso de Cookies Termos e Condi\xE7\xF5es de Uso",
                                        fonts: ["GF;Poppins Medium-500"],
                                        name: "Aviso de Privacidade Declara\xE7\xE3o de Uso de Cookies Termos e Condi\xE7\xF5es de Uso",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                }), e("div", {
                                    className: "framer-1vh9n19",
                                    children: e(Z, {
                                        className: "framer-sqdgeq",
                                        "data-framer-name": "Frame 14",
                                        fill: "rgba(0,0,0,1)",
                                        intrinsicHeight: 69,
                                        intrinsicWidth: 288,
                                        name: "Frame 14",
                                        svg: `<svg width="288" height="69" viewBox="0 0 288 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M25 51C31.9035 51 37.5 45.4035 37.5 38.5C37.5 31.5964 31.9035 26 25 26C18.0964 26 12.5 31.5964 12.5 38.5C12.5 45.4035 18.0964 51 25 51ZM25 46.8333C29.6023 46.8333 33.3333 43.1023 33.3333 38.5C33.3333 33.8976 29.6023 30.1667 25 30.1667C20.3976 30.1667 16.6667 33.8976 16.6667 38.5C16.6667 43.1023 20.3976 46.8333 25 46.8333Z" fill="white"/>
<path d="M37.5 23.9167C36.3493 23.9167 35.4166 24.8495 35.4166 26.0001C35.4166 27.1507 36.3493 28.0834 37.5 28.0834C38.6506 28.0834 39.5833 27.1507 39.5833 26.0001C39.5833 24.8495 38.6506 23.9167 37.5 23.9167Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.44579 22.4084C2.08337 25.0823 2.08337 28.5826 2.08337 35.5833V41.4166C2.08337 48.4172 2.08337 51.9176 3.44579 54.5914C4.64421 56.9435 6.55646 58.8558 8.9085 60.0541C11.5824 61.4166 15.0827 61.4166 22.0834 61.4166H27.9167C34.9173 61.4166 38.4177 61.4166 41.0915 60.0541C43.4436 58.8558 45.3559 56.9435 46.5542 54.5914C47.9167 51.9176 47.9167 48.4172 47.9167 41.4166V35.5833C47.9167 28.5826 47.9167 25.0823 46.5542 22.4084C45.3559 20.0563 43.4436 18.1441 41.0915 16.9457C38.4177 15.5833 34.9173 15.5833 27.9167 15.5833H22.0834C15.0827 15.5833 11.5824 15.5833 8.9085 16.9457C6.55646 18.1441 4.64421 20.0563 3.44579 22.4084ZM27.9167 19.7499H22.0834C18.5143 19.7499 16.0881 19.7532 14.2127 19.9064C12.386 20.0556 11.4518 20.3261 10.8001 20.6582C9.2321 21.4571 7.95727 22.732 7.15831 24.3C6.82627 24.9517 6.55575 25.8858 6.4065 27.7126C6.25329 29.5879 6.25004 32.0142 6.25004 35.5833V41.4166C6.25004 44.9857 6.25329 47.4118 6.4065 49.2872C6.55575 51.1141 6.82627 52.0483 7.15831 52.6999C7.95727 54.2678 9.2321 55.5426 10.8001 56.3416C11.4518 56.6737 12.386 56.9443 14.2127 57.0935C16.0881 57.2466 18.5143 57.2499 22.0834 57.2499H27.9167C31.4859 57.2499 33.9119 57.2466 35.7873 57.0935C37.6142 56.9443 38.5484 56.6737 39.2 56.3416C40.768 55.5426 42.0427 54.2678 42.8417 52.6999C43.1738 52.0483 43.4444 51.1141 43.5936 49.2872C43.7467 47.4118 43.75 44.9857 43.75 41.4166V35.5833C43.75 32.0142 43.7467 29.5879 43.5936 27.7126C43.4444 25.8858 43.1738 24.9517 42.8417 24.3C42.0427 22.732 40.768 21.4571 39.2 20.6582C38.5484 20.3261 37.6142 20.0556 35.7873 19.9064C33.9119 19.7532 31.4859 19.7499 27.9167 19.7499Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M122.333 17.6667H155.667C157.968 17.6667 159.833 19.5322 159.833 21.8334V55.1668C159.833 57.4679 157.968 59.3334 155.667 59.3334H122.333C120.032 59.3334 118.167 57.4679 118.167 55.1668V21.8334C118.167 19.5322 120.032 17.6667 122.333 17.6667ZM139 44.7499H134.833C134.281 44.7499 133.751 44.5304 133.36 44.1397C132.969 43.749 132.75 43.2191 132.75 42.6666C132.75 42.114 132.969 41.5841 133.36 41.1934C133.751 40.8027 134.281 40.5833 134.833 40.5833H139V34.3333C139 32.6756 139.658 31.0859 140.831 29.9138C142.003 28.7417 143.592 28.0833 145.25 28.0833H149.417C149.969 28.0833 150.499 28.3027 150.89 28.6934C151.281 29.0841 151.5 29.6141 151.5 30.1666C151.5 30.7191 151.281 31.249 150.89 31.6397C150.499 32.0304 149.969 32.2499 149.417 32.2499H145.25C144.697 32.2499 144.168 32.4694 143.777 32.8601C143.386 33.2508 143.167 33.7807 143.167 34.3333V40.5833H147.333C147.886 40.5833 148.416 40.8027 148.806 41.1934C149.197 41.5841 149.417 42.114 149.417 42.6666C149.417 43.2191 149.197 43.749 148.806 44.1397C148.416 44.5304 147.886 44.7499 147.333 44.7499H143.167V59.3333H139V44.7499Z" fill="white"/>
<path d="M274.8 18.4999H241.425C240.995 18.4798 240.565 18.5447 240.16 18.6909C239.755 18.8371 239.382 19.0618 239.064 19.352C238.746 19.6423 238.488 19.9925 238.306 20.3825C238.123 20.7725 238.019 21.1947 238 21.6249V55.075C238.025 55.9752 238.394 56.832 239.031 57.4687C239.668 58.1057 240.525 58.4748 241.425 58.5H274.8C275.675 58.461 276.5 58.0805 277.099 57.4402C277.697 56.8 278.021 55.951 278 55.075V21.6249C278.007 21.2062 277.929 20.7904 277.77 20.4031C277.61 20.0157 277.373 19.665 277.074 19.3724C276.774 19.0798 276.418 18.8515 276.027 18.7015C275.636 18.5514 275.218 18.4829 274.8 18.4999ZM250.5 51.85H244.675V34.025H250.5V51.85ZM247.725 31.3249C247.319 31.3391 246.913 31.2691 246.535 31.1192C246.157 30.9694 245.814 30.7429 245.528 30.4542C245.241 30.1654 245.018 29.8205 244.871 29.4412C244.724 29.0619 244.658 28.6563 244.675 28.2499C244.657 27.8392 244.725 27.4292 244.875 27.0464C245.025 26.6635 245.253 26.3161 245.545 26.0266C245.837 25.737 246.186 25.5117 246.57 25.3651C246.954 25.2184 247.364 25.1536 247.775 25.1749C248.181 25.1608 248.587 25.2308 248.965 25.3807C249.343 25.5305 249.686 25.7569 249.972 26.0457C250.259 26.3345 250.482 26.6794 250.629 27.0587C250.776 27.438 250.842 27.8436 250.825 28.2499C250.843 28.6607 250.775 29.0706 250.625 29.4535C250.475 29.8364 250.247 30.1838 249.955 30.4733C249.663 30.7628 249.314 30.9882 248.93 31.1348C248.546 31.2815 248.136 31.3462 247.725 31.3249ZM271.35 51.85H265.5V42.1C265.5 39.775 264.675 38.175 262.6 38.175C261.956 38.1805 261.328 38.3852 260.805 38.7612C260.281 39.1372 259.887 39.666 259.675 40.275C259.513 40.7315 259.445 41.2162 259.475 41.7V51.85H253.725V34.025H259.475V36.525C259.986 35.5858 260.747 34.8063 261.674 34.2723C262.6 33.7385 263.656 33.4712 264.725 33.4999C268.5 33.4999 271.35 36 271.35 41.325V51.85Z" fill="white"/>
</svg>
`,
                                        withExternalLayout: !0
                                    })
                                }), e(t, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e("p", {
                                            style: {
                                                "--framer-font-size": "21px"
                                            },
                                            children: e("span", {
                                                style: {
                                                    "--font-selector": "R0Y7UG9wcGlucyBNZWRpdW0tNTAw",
                                                    "--framer-font-family": '"Poppins Medium"',
                                                    "--framer-font-size": "21px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-text-color": "rgba(255, 255, 255, 1)"
                                                },
                                                children: "Copyright \xA9 2024 SEGLINE SOLAR. Todos os direitos reservados."
                                            })
                                        })
                                    }),
                                    className: "framer-1xnqkpy",
                                    "data-framer-name": "Copyright \xA9 2024 SEGLINE SOLAR. Todos os direitos reservados.",
                                    fonts: ["GF;Poppins Medium-500"],
                                    name: "Copyright \xA9 2024 SEGLINE SOLAR. Todos os direitos reservados.",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })]
                            })]
                        })]
                    })]
                }), e("div", {
                    className: G(o2, ..._),
                    id: "overlay"
                })]
            })
        })
    }),
    D2 = ['.framer-OGfJk[data-border="true"]::after, .framer-OGfJk [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", `.${A.bodyClassName}-framer-OGfJk { background: white; }`, ".framer-OGfJk.framer-skotob, .framer-OGfJk .framer-skotob { display: block; }", ".framer-OGfJk.framer-9agrwi { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1518px; }", ".framer-OGfJk .framer-zof2fp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 100%; padding: 30px 50px 30px 50px; position: relative; width: 1000px; z-index: 1; }", ".framer-OGfJk .framer-1bc4lwe { --framer-paragraph-spacing: 0px; flex: none; height: 32px; overflow: hidden; position: relative; white-space: pre; width: auto; }", ".framer-OGfJk .framer-rqdxnm { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }", ".framer-OGfJk .framer-uotjom { align-content: center; align-items: center; background-color: #222222; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-shadow: 0px 0.7065919983928324px 0.7065919983928324px -0.625px rgba(0, 0, 0, 0.15), 0px 1.8065619053231785px 1.8065619053231785px -1.25px rgba(0, 0, 0, 0.14398), 0px 3.6217592146567767px 3.6217592146567767px -1.875px rgba(0, 0, 0, 0.13793), 0px 6.8655999097303715px 6.8655999097303715px -2.5px rgba(0, 0, 0, 0.12711), 0px 13.646761411524492px 13.646761411524492px -3.125px rgba(0, 0, 0, 0.10451), 0px 30px 30px -3.75px rgba(0, 0, 0, 0.05); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 32px; justify-content: center; overflow: visible; padding: 10px 10px 10px 10px; position: relative; width: auto; }", ".framer-OGfJk .framer-usihxz { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-OGfJk .framer-9y6qvp { background-color: #ffffff; flex: none; height: 1805px; position: relative; width: 100%; }", ".framer-OGfJk .framer-4wwhi1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: 350px; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 49%; transform: translate(-50%, -50%); width: min-content; }", ".framer-OGfJk .framer-acjnoo { align-content: center; align-items: center; border-bottom-left-radius: 60px; border-bottom-right-radius: 60px; border-top-left-radius: 60px; border-top-right-radius: 60px; box-shadow: 0px 0.6021873017743928px 3.010936508871964px -0.3333333333333333px rgba(0, 0, 0, 0.02), 0px 2.288533303243457px 11.442666516217285px -0.6666666666666666px rgba(0, 0, 0, 0.03373), 0px 10px 50px -1px rgba(0, 0, 0, 0.08); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 444px; justify-content: center; overflow: visible; padding: 20px 20px 20px 20px; position: relative; transform: perspective(1200px) rotate(-3deg); width: 275px; }", ".framer-OGfJk .framer-1xp9woh { border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; flex: 1 0 0px; height: 100%; overflow: hidden; position: relative; transform: perspective(1200px); width: 1px; will-change: var(--framer-will-change-override, transform); }", ".framer-OGfJk .framer-1joyyk1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 353px; }", ".framer-OGfJk .framer-cjacn9 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: visible; position: relative; transform: perspective(1200px); white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-OGfJk .framer-w438dc { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 400px; overflow: visible; position: relative; transform: perspective(1200px); white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-OGfJk .framer-1im6tjx { align-content: center; align-items: center; background-color: #1f1e1e; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 600px; justify-content: center; overflow: hidden; padding: 40px 40px 40px 40px; position: relative; width: 100%; }", ".framer-OGfJk .framer-1v3nap2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }", ".framer-OGfJk .framer-qr2ven { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 100%; overflow: visible; position: relative; white-space: pre-wrap; width: 390px; word-break: break-word; word-wrap: break-word; }", ".framer-OGfJk .framer-zmpatj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-OGfJk .framer-bgt6br-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-OGfJk .framer-taj5il { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1503px; }", ".framer-OGfJk .framer-oi4cv6 { background-color: #cceeff; flex: none; height: 23px; position: relative; width: 100%; }", ".framer-OGfJk .framer-193y9f5 { background-color: #ffffff; flex: none; height: 1858px; overflow: hidden; position: relative; width: 100%; }", ".framer-OGfJk .framer-1up35xh { background-color: #ffffff; flex: none; height: 1058px; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 1440px; }", ".framer-OGfJk .framer-vpx902 { aspect-ratio: 0.7967863894139886 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1058px); left: 0px; position: absolute; top: 0px; width: 843px; }", ".framer-OGfJk .framer-qr8xmj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 112px; height: min-content; justify-content: flex-start; left: 88px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 125px; width: 603px; }", ".framer-OGfJk .framer-4sw0bo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-OGfJk .framer-4nwxge, .framer-OGfJk .framer-hfz5cd { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 603px; word-break: break-word; word-wrap: break-word; }", ".framer-OGfJk .framer-i1u7tt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 857px; overflow: visible; padding: 10px 10px 10px 10px; position: absolute; top: 283px; width: min-content; }", ".framer-OGfJk .framer-1nzp99n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 82px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-OGfJk .framer-1bq4y7n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-OGfJk .framer-f00b3n, .framer-OGfJk .framer-1vo4wfu, .framer-OGfJk .framer-1qet82p { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-OGfJk .framer-g0aun6, .framer-OGfJk .framer-1djpabx, .framer-OGfJk .framer-j1tqe3, .framer-OGfJk .framer-1ftc5xt, .framer-OGfJk .framer-18emoc4, .framer-OGfJk .framer-w1101, .framer-OGfJk .framer-57mf7n, .framer-OGfJk .framer-1bv6bu0, .framer-OGfJk .framer-100hhkx, .framer-OGfJk .framer-tx8ng3, .framer-OGfJk .framer-1030y1w, .framer-OGfJk .framer-1tuk8jr, .framer-OGfJk .framer-19gkmr3, .framer-OGfJk .framer-ftyfkh, .framer-OGfJk .framer-1xnqkpy { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-OGfJk .framer-1jm5qst { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-OGfJk .framer-1o8b6v4 { --border-bottom-width: 1px; --border-color: #d7d9da; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 180px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 280px; }", ".framer-OGfJk .framer-1n4d9iw, .framer-OGfJk .framer-5bbpb7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-OGfJk .framer-14rzo4r { --border-bottom-width: 1px; --border-color: #d7d9da; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 180px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 235px; }", ".framer-OGfJk .framer-owzijj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-OGfJk .framer-ea6wwq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 31px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-OGfJk .framer-15rztjt, .framer-OGfJk .framer-v6wkab { --border-bottom-width: 1px; --border-color: #d7d8da; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: #ffffff; border-bottom-left-radius: 52px; border-bottom-right-radius: 52px; border-top-left-radius: 52px; border-top-right-radius: 52px; flex: none; height: 48px; overflow: hidden; position: relative; width: 342px; will-change: var(--framer-will-change-override, transform); }", ".framer-OGfJk .framer-153694s, .framer-OGfJk .framer-1spvhsu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; left: 23px; overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; top: 50%; transform: translateY(-50%); width: min-content; }", ".framer-OGfJk .framer-6cxovf, .framer-OGfJk .framer-1wxsgil { --framer-paragraph-spacing: 0px; flex: none; height: 48px; position: relative; white-space: pre-wrap; width: 232px; word-break: break-word; word-wrap: break-word; }", ".framer-OGfJk .framer-rld61k { flex: none; height: 52px; overflow: visible; position: relative; width: 311px; }", ".framer-OGfJk .framer-782vxf { background-color: #d7a12e; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; height: 52px; left: 0px; position: absolute; width: 311px; }", ".framer-OGfJk .framer-92brpl { flex: none; height: 32px; left: 32px; position: absolute; top: calc(50% - 32px / 2); width: 222px; }", ".framer-OGfJk .framer-1yqynt4 { align-content: center; align-items: center; background-color: #d7a12e; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 800px; justify-content: center; left: calc(50% - 100% / 2); overflow: visible; padding: 0px 0px 0px 0px; position: absolute; width: 100%; }", ".framer-OGfJk .framer-ezmrek { flex: none; height: 197px; overflow: visible; position: relative; width: 301px; }", ".framer-OGfJk .framer-yjlk0c { flex: none; height: 79px; left: 11px; position: absolute; top: 66px; width: 281px; }", ".framer-OGfJk .framer-mafbg3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-OGfJk .framer-1610x1i { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 621px; word-break: break-word; word-wrap: break-word; }", ".framer-OGfJk .framer-hlvkrs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 16px 0px 0px 0px; position: relative; width: min-content; }", ".framer-OGfJk .framer-1vh9n19 { flex: none; height: 69px; overflow: hidden; position: relative; width: 297px; }", ".framer-OGfJk .framer-sqdgeq { bottom: 0px; flex: none; left: calc(50.505050505050534% - 288px / 2); position: absolute; top: 0px; width: 288px; }", "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-OGfJk.framer-9agrwi, .framer-OGfJk .framer-zof2fp, .framer-OGfJk .framer-rqdxnm, .framer-OGfJk .framer-uotjom, .framer-OGfJk .framer-4wwhi1, .framer-OGfJk .framer-acjnoo, .framer-OGfJk .framer-1joyyk1, .framer-OGfJk .framer-1im6tjx, .framer-OGfJk .framer-zmpatj, .framer-OGfJk .framer-taj5il, .framer-OGfJk .framer-qr8xmj, .framer-OGfJk .framer-4sw0bo, .framer-OGfJk .framer-i1u7tt, .framer-OGfJk .framer-1nzp99n, .framer-OGfJk .framer-1bq4y7n, .framer-OGfJk .framer-f00b3n, .framer-OGfJk .framer-1vo4wfu, .framer-OGfJk .framer-1qet82p, .framer-OGfJk .framer-1jm5qst, .framer-OGfJk .framer-1o8b6v4, .framer-OGfJk .framer-1n4d9iw, .framer-OGfJk .framer-14rzo4r, .framer-OGfJk .framer-5bbpb7, .framer-OGfJk .framer-owzijj, .framer-OGfJk .framer-ea6wwq, .framer-OGfJk .framer-153694s, .framer-OGfJk .framer-1spvhsu, .framer-OGfJk .framer-1yqynt4, .framer-OGfJk .framer-mafbg3, .framer-OGfJk .framer-hlvkrs { gap: 0px; } .framer-OGfJk.framer-9agrwi > *, .framer-OGfJk .framer-1yqynt4 > *, .framer-OGfJk .framer-mafbg3 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-OGfJk.framer-9agrwi > :first-child, .framer-OGfJk .framer-1joyyk1 > :first-child, .framer-OGfJk .framer-1im6tjx > :first-child, .framer-OGfJk .framer-taj5il > :first-child, .framer-OGfJk .framer-qr8xmj > :first-child, .framer-OGfJk .framer-4sw0bo > :first-child, .framer-OGfJk .framer-1nzp99n > :first-child, .framer-OGfJk .framer-1bq4y7n > :first-child, .framer-OGfJk .framer-1o8b6v4 > :first-child, .framer-OGfJk .framer-14rzo4r > :first-child, .framer-OGfJk .framer-owzijj > :first-child, .framer-OGfJk .framer-ea6wwq > :first-child, .framer-OGfJk .framer-1yqynt4 > :first-child, .framer-OGfJk .framer-mafbg3 > :first-child { margin-top: 0px; } .framer-OGfJk.framer-9agrwi > :last-child, .framer-OGfJk .framer-1joyyk1 > :last-child, .framer-OGfJk .framer-1im6tjx > :last-child, .framer-OGfJk .framer-taj5il > :last-child, .framer-OGfJk .framer-qr8xmj > :last-child, .framer-OGfJk .framer-4sw0bo > :last-child, .framer-OGfJk .framer-1nzp99n > :last-child, .framer-OGfJk .framer-1bq4y7n > :last-child, .framer-OGfJk .framer-1o8b6v4 > :last-child, .framer-OGfJk .framer-14rzo4r > :last-child, .framer-OGfJk .framer-owzijj > :last-child, .framer-OGfJk .framer-ea6wwq > :last-child, .framer-OGfJk .framer-1yqynt4 > :last-child, .framer-OGfJk .framer-mafbg3 > :last-child { margin-bottom: 0px; } .framer-OGfJk .framer-zof2fp > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-OGfJk .framer-zof2fp > :first-child, .framer-OGfJk .framer-rqdxnm > :first-child, .framer-OGfJk .framer-uotjom > :first-child, .framer-OGfJk .framer-4wwhi1 > :first-child, .framer-OGfJk .framer-acjnoo > :first-child, .framer-OGfJk .framer-zmpatj > :first-child, .framer-OGfJk .framer-i1u7tt > :first-child, .framer-OGfJk .framer-f00b3n > :first-child, .framer-OGfJk .framer-1vo4wfu > :first-child, .framer-OGfJk .framer-1qet82p > :first-child, .framer-OGfJk .framer-1jm5qst > :first-child, .framer-OGfJk .framer-1n4d9iw > :first-child, .framer-OGfJk .framer-5bbpb7 > :first-child, .framer-OGfJk .framer-153694s > :first-child, .framer-OGfJk .framer-1spvhsu > :first-child, .framer-OGfJk .framer-hlvkrs > :first-child { margin-left: 0px; } .framer-OGfJk .framer-zof2fp > :last-child, .framer-OGfJk .framer-rqdxnm > :last-child, .framer-OGfJk .framer-uotjom > :last-child, .framer-OGfJk .framer-4wwhi1 > :last-child, .framer-OGfJk .framer-acjnoo > :last-child, .framer-OGfJk .framer-zmpatj > :last-child, .framer-OGfJk .framer-i1u7tt > :last-child, .framer-OGfJk .framer-f00b3n > :last-child, .framer-OGfJk .framer-1vo4wfu > :last-child, .framer-OGfJk .framer-1qet82p > :last-child, .framer-OGfJk .framer-1jm5qst > :last-child, .framer-OGfJk .framer-1n4d9iw > :last-child, .framer-OGfJk .framer-5bbpb7 > :last-child, .framer-OGfJk .framer-153694s > :last-child, .framer-OGfJk .framer-1spvhsu > :last-child, .framer-OGfJk .framer-hlvkrs > :last-child { margin-right: 0px; } .framer-OGfJk .framer-rqdxnm > *, .framer-OGfJk .framer-uotjom > *, .framer-OGfJk .framer-acjnoo > *, .framer-OGfJk .framer-i1u7tt > *, .framer-OGfJk .framer-hlvkrs > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-OGfJk .framer-4wwhi1 > * { margin: 0px; margin-left: calc(100px / 2); margin-right: calc(100px / 2); } .framer-OGfJk .framer-1joyyk1 > *, .framer-OGfJk .framer-1im6tjx > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-OGfJk .framer-zmpatj > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .framer-OGfJk .framer-taj5il > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-OGfJk .framer-qr8xmj > * { margin: 0px; margin-bottom: calc(112px / 2); margin-top: calc(112px / 2); } .framer-OGfJk .framer-4sw0bo > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-OGfJk .framer-1nzp99n > * { margin: 0px; margin-bottom: calc(82px / 2); margin-top: calc(82px / 2); } .framer-OGfJk .framer-1bq4y7n > * { margin: 0px; margin-bottom: calc(9px / 2); margin-top: calc(9px / 2); } .framer-OGfJk .framer-f00b3n > *, .framer-OGfJk .framer-1vo4wfu > *, .framer-OGfJk .framer-1qet82p > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-OGfJk .framer-1jm5qst > *, .framer-OGfJk .framer-153694s > *, .framer-OGfJk .framer-1spvhsu > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-OGfJk .framer-1o8b6v4 > *, .framer-OGfJk .framer-14rzo4r > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-OGfJk .framer-1n4d9iw > *, .framer-OGfJk .framer-5bbpb7 > * { margin: 0px; margin-left: calc(3px / 2); margin-right: calc(3px / 2); } .framer-OGfJk .framer-owzijj > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-OGfJk .framer-ea6wwq > * { margin: 0px; margin-bottom: calc(31px / 2); margin-top: calc(31px / 2); } }", "@media (min-width: 1518px) { .framer-OGfJk .hidden-9agrwi { display: none !important; } }", `@media (min-width: 810px) and (max-width: 1517px) { .framer-OGfJk .hidden-r0wnfi { display: none !important; } .${A.bodyClassName}-framer-OGfJk { background: white; } .framer-OGfJk.framer-9agrwi { height: 3394px; width: 810px; } .framer-OGfJk .framer-zof2fp, .framer-OGfJk .framer-cjacn9 { order: 0; } .framer-OGfJk .framer-9y6qvp, .framer-OGfJk .framer-w438dc { order: 1; } .framer-OGfJk .framer-4wwhi1 { flex-direction: column; gap: 50px; height: min-content; } .framer-OGfJk .framer-acjnoo { height: 374px; width: 235px; } .framer-OGfJk .framer-1joyyk1 { width: 299px; } .framer-OGfJk .framer-1im6tjx { order: 2; } .framer-OGfJk .framer-taj5il { order: 3; } .framer-OGfJk .framer-193y9f5 { order: 4; } .framer-OGfJk .framer-1up35xh { background-color: #b0a7a7; width: 100%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-OGfJk .framer-4wwhi1 { gap: 0px; } .framer-OGfJk .framer-4wwhi1 > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-OGfJk .framer-4wwhi1 > :first-child { margin-top: 0px; } .framer-OGfJk .framer-4wwhi1 > :last-child { margin-bottom: 0px; } }}`, `@media (max-width: 809px) { .framer-OGfJk .hidden-1oydnr0 { display: none !important; } .${A.bodyClassName}-framer-OGfJk { background: white; } .framer-OGfJk.framer-9agrwi { height: 3278px; width: 390px; } .framer-OGfJk .framer-zof2fp { order: 0; padding: 30px 30px 30px 30px; } .framer-OGfJk .framer-9y6qvp { order: 1; width: 99%; } .framer-OGfJk .framer-4wwhi1 { flex-direction: column; gap: 40px; height: min-content; left: 50%; top: 47%; } .framer-OGfJk .framer-acjnoo { border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; height: 255px; padding: 15px 15px 15px 15px; width: 165px; } .framer-OGfJk .framer-1xp9woh { border-bottom-left-radius: 25px; border-bottom-right-radius: 25px; border-top-left-radius: 25px; border-top-right-radius: 25px; } .framer-OGfJk .framer-1joyyk1 { width: 299px; } .framer-OGfJk .framer-cjacn9 { order: 0; } .framer-OGfJk .framer-w438dc { order: 1; } .framer-OGfJk .framer-1im6tjx { order: 2; padding: 60px 60px 60px 60px; } .framer-OGfJk .framer-taj5il { order: 3; } .framer-OGfJk .framer-193y9f5 { order: 4; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-OGfJk .framer-4wwhi1 { gap: 0px; } .framer-OGfJk .framer-4wwhi1 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-OGfJk .framer-4wwhi1 > :first-child { margin-top: 0px; } .framer-OGfJk .framer-4wwhi1 > :last-child { margin-bottom: 0px; } }}`],
    H = L(A2, D2, "framer-OGfJk"),
    a1 = H;
H.displayName = "Home";
H.defaultProps = {
    height: 4378,
    width: 1518
};
z(H, [{
    family: "Inter",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZ1rib2Bg-4.woff2",
    weight: "700"
}, {
    family: "Inter",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZ1rib2Bg-4.woff2",
    weight: "600"
}, {
    family: "Inter",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZ1rib2Bg-4.woff2",
    weight: "500"
}, {
    family: "Montserrat",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew7Y3tcoqK5.woff2",
    weight: "400"
}, ...L2]);
var t1 = {
    exports: {
        Props: {
            type: "tsType",
            annotations: {
                framerContractVersion: "1"
            }
        },
        default: {
            type: "reactComponent",
            name: "FramerM6W0VLvgt",
            slots: [],
            annotations: {
                framerResponsiveScreen: "",
                framerDisplayContentsDiv: "false",
                framerContractVersion: "1",
                framerIntrinsicHeight: "4378",
                framerImmutableVariables: "true",
                framerIntrinsicWidth: "1518",
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"ZgPEmEcGk":{"layout":["fixed","fixed"]},"HbYk9EEaB":{"layout":["fixed","fixed"]}}}'
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export {
    t1 as __FramerMetadata__, a1 as
    default
};
//# sourceMappingURL=kKI_Ca03t3SESnuCLR99PIAmsex3sPrbpfO1u7TIpsQ.QPLYNZLD.mjs.map