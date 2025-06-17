(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/adventurefont_c8853632.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "adventurefont_c8853632-module__G5BeVa__className",
  "variable": "adventurefont_c8853632-module__G5BeVa__variable",
});
}}),
"[project]/src/app/adventurefont_c8853632.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$adventurefont_c8853632$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/adventurefont_c8853632.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$adventurefont_c8853632$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'adventureFont', 'adventureFont Fallback'"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$adventurefont_c8853632$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$adventurefont_c8853632$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/useMobileView/useMobileHook.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useMobileHook": (()=>useMobileHook)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const mobileView = 768;
const useMobileHook = (breakpoint = mobileView)=>{
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMobileHook.useEffect": ()=>{
            const checkWidth = {
                "useMobileHook.useEffect.checkWidth": ()=>{
                    setIsMobile(window.innerWidth <= breakpoint);
                }
            }["useMobileHook.useEffect.checkWidth"];
            checkWidth();
            window.addEventListener("resize", checkWidth);
            return ({
                "useMobileHook.useEffect": ()=>{
                    window.removeEventListener("resize", checkWidth);
                }
            })["useMobileHook.useEffect"];
        }
    }["useMobileHook.useEffect"], [
        breakpoint
    ]);
    return isMobile;
};
_s(useMobileHook, "MlmSG3uSWWvVgZvDg0SD4XH58F4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/useTabView/useTabHook.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useTabletHook": (()=>useTabletHook)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const mobileView = 678;
const useTabletHook = (breakpoint = mobileView)=>{
    _s();
    const [isTab, setIsTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTabletHook.useEffect": ()=>{
            const checkWidth = {
                "useTabletHook.useEffect.checkWidth": ()=>{
                    const width = window.innerWidth;
                    setIsTab(width >= breakpoint && width <= 1024);
                }
            }["useTabletHook.useEffect.checkWidth"];
            checkWidth();
            window.addEventListener("resize", checkWidth);
            return ({
                "useTabletHook.useEffect": ()=>{
                    window.removeEventListener("resize", checkWidth);
                }
            })["useTabletHook.useEffect"];
        }
    }["useTabletHook.useEffect"], [
        breakpoint
    ]);
    return isTab;
};
_s(useTabletHook, "XOXOnEM5LaT0ZIw3wMgQFjvXkRw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/HeadBody/heroes_e51c7c29.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "heroes_e51c7c29-module__9tn23a__className",
  "variable": "heroes_e51c7c29-module__9tn23a__variable",
});
}}),
"[project]/src/components/HeadBody/heroes_e51c7c29.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadBody$2f$heroes_e51c7c29$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/HeadBody/heroes_e51c7c29.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadBody$2f$heroes_e51c7c29$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'heroes', 'heroes Fallback'"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadBody$2f$heroes_e51c7c29$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadBody$2f$heroes_e51c7c29$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/HeadBody/supermarker_3a4f0d54.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "supermarker_3a4f0d54-module__wXx6wa__className",
  "variable": "supermarker_3a4f0d54-module__wXx6wa__variable",
});
}}),
"[project]/src/components/HeadBody/supermarker_3a4f0d54.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadBody$2f$supermarker_3a4f0d54$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/HeadBody/supermarker_3a4f0d54.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadBody$2f$supermarker_3a4f0d54$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'superMarker', 'superMarker Fallback'"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadBody$2f$supermarker_3a4f0d54$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadBody$2f$supermarker_3a4f0d54$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/HeadBody/HeadBody.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$useMobileView$2f$useMobileHook$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/useMobileView/useMobileHook.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$useTabView$2f$useTabHook$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/useTabView/useTabHook.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadBody$2f$heroes_e51c7c29$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeadBody/heroes_e51c7c29.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadBody$2f$supermarker_3a4f0d54$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeadBody/supermarker_3a4f0d54.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const HeadBody = ()=>{
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$useMobileView$2f$useMobileHook$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobileHook"])();
    const isTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$useTabView$2f$useTabHook$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabletHook"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-24 sec-content w-full gap-2 py-2 px-1 flex flex-col items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: `text-[5vw] tracking-wide text-amber-300 space-x-3 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadBody$2f$heroes_e51c7c29$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "A"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "developer"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "who"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "loves"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                        lineNumber: 40,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `dropping-texts text-[5.8vw] ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadBody$2f$supermarker_3a4f0d54$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} font-bold flex justify-center w-full tracking-wide text-[#baf606]`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "Web Development"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "Software Development"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "Game Development"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "Problem Solving"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
            lineNumber: 38,
            columnNumber: 9
        }, this) : isTab ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:mt-16 md:h-16 md:w-full md:flex md:justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `md:text-[2.3vw] tracking-wide text-amber-400 md:px-2 md:space-x-2 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadBody$2f$heroes_e51c7c29$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "A"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "developer"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "who"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "loves"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: `md-animation text-[#a9e005] tracking-wider  md:text-[2.3vw]  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadBody$2f$heroes_e51c7c29$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "first md:px-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "Web Development"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "second md:px-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "Software Development"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "third md:px-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "Game Development"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fourth md:px-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "Problem Solving"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
            lineNumber: 57,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:mt-16 lg:h-20 lg:w-full lg:flex lg:justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `lg:text-[1.6rem] xl:text-[1.9rem] tracking-wide text-amber-400 lg:px-2 lg:space-x-3 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadBody$2f$heroes_e51c7c29$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "A"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "developer"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "who"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "loves"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: `animation text-[#a9e005] tracking-wider lg:text-[1.6rem] xl:text-[1.8rem] ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadBody$2f$heroes_e51c7c29$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "first lg:px-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "Web Development"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "second lg:px-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "Software Development"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "third lg:px-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "Game Development"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fourth lg:px-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "Problem Solving"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
                    lineNumber: 90,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeadBody/HeadBody.tsx",
            lineNumber: 82,
            columnNumber: 9
        }, this)
    }, void 0, false);
};
_s(HeadBody, "bmFmnEL9AzA4Ya42oZdxb84LYwE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$useMobileView$2f$useMobileHook$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobileHook"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$useTabView$2f$useTabHook$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabletHook"]
    ];
});
_c = HeadBody;
const __TURBOPACK__default__export__ = HeadBody;
var _c;
__turbopack_context__.k.register(_c, "HeadBody");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Cursor/CursorParticles.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const CursorParticles = ({ screenWidth = window.innerWidth, hasError = false })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const circlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const coords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const animationFrameId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const debounceTimeout = 16;
    const [sparkles, setSparkles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [clickPosition, setClickPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const isAnimating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CursorParticles.useEffect": ()=>{
            if (hasError || !containerRef.current) {
                document.body.style.cursor = "auto";
                return;
            }
            const numCircles = screenWidth > 1024 ? 50 : screenWidth > 640 ? 25 : 15;
            const circles = [];
            for(let i = 0; i < numCircles; i++){
                const circle = document.createElement("div");
                circle.className = "cursor-circle";
                Object.assign(circle.style, {
                    position: "absolute",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(255,165,0,1) 0%, rgba(255,69,0,1) 50%, rgba(139,0,0,1) 100%)",
                    boxShadow: "0px 0px 8px rgba(255, 165, 0, 0.8)",
                    pointerEvents: "none",
                    left: "0px",
                    top: "0px",
                    transition: "all 0.23s ease-out",
                    border: "none",
                    opacity: "60%"
                });
                containerRef.current.appendChild(circle);
                circles.push(circle);
            }
            circlesRef.current = circles;
            document.body.style.cursor = "none";
            const handleMouseMove = {
                "CursorParticles.useEffect.handleMouseMove": (e)=>{
                    const now = performance.now();
                    if (now - lastUpdate.current >= debounceTimeout) {
                        coords.current = {
                            x: e.clientX,
                            y: e.clientY
                        };
                        lastUpdate.current = now;
                    }
                }
            }["CursorParticles.useEffect.handleMouseMove"];
            const handleClick = {
                "CursorParticles.useEffect.handleClick": (e)=>{
                    if (isAnimating.current) return;
                    setClickPosition({
                        x: e.clientX,
                        y: e.clientY
                    });
                    isAnimating.current = true;
                    const newSparkles = Array(12).fill(null).map({
                        "CursorParticles.useEffect.handleClick.newSparkles": (_, i)=>({
                                id: `${i}-${Date.now()}`,
                                startX: 0,
                                startY: 0,
                                endX: Math.cos(i / 12 * Math.PI * 2) * (40 + Math.random() * 30),
                                endY: Math.sin(i / 12 * Math.PI * 2) * (40 + Math.random() * 30),
                                size: Math.random() * 6 + 4,
                                opacity: 1,
                                rotate: Math.random() * 360
                            })
                    }["CursorParticles.useEffect.handleClick.newSparkles"]);
                    setSparkles(newSparkles);
                    setTimeout({
                        "CursorParticles.useEffect.handleClick": ()=>{
                            setSparkles([]);
                            isAnimating.current = false;
                        }
                    }["CursorParticles.useEffect.handleClick"], 800);
                }
            }["CursorParticles.useEffect.handleClick"];
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("click", handleClick);
            const animateCircles = {
                "CursorParticles.useEffect.animateCircles": ()=>{
                    let x = coords.current.x;
                    let y = coords.current.y;
                    circlesRef.current.forEach({
                        "CursorParticles.useEffect.animateCircles": (circle, index)=>{
                            if (!circle) return;
                            Object.assign(circle.style, {
                                width: "24px",
                                height: "24px",
                                left: `${x - 12}px`,
                                top: `${y - 12}px`,
                                zIndex: "50",
                                transform: `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`
                            });
                            const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
                            if (nextCircle) {
                                x += (parseFloat(nextCircle.style.left || "0") + 12 - x) * 0.3;
                                y += (parseFloat(nextCircle.style.top || "0") + 12 - y) * 0.3;
                            }
                        }
                    }["CursorParticles.useEffect.animateCircles"]);
                    animationFrameId.current = requestAnimationFrame(animateCircles);
                }
            }["CursorParticles.useEffect.animateCircles"];
            animateCircles();
            return ({
                "CursorParticles.useEffect": ()=>{
                    document.body.style.cursor = "auto";
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("click", handleClick);
                    circlesRef.current.forEach({
                        "CursorParticles.useEffect": (circle)=>circle?.remove()
                    }["CursorParticles.useEffect"]);
                    circlesRef.current = [];
                    if (animationFrameId.current) {
                        cancelAnimationFrame(animationFrameId.current);
                    }
                }
            })["CursorParticles.useEffect"];
        }
    }["CursorParticles.useEffect"], [
        screenWidth,
        hasError
    ]);
    if (hasError) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "fixed inset-0 w-full h-full bg-transparent z-50",
                style: {
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Cursor/CursorParticles.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            sparkles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed z-50 pointer-events-none",
                style: {
                    left: `${clickPosition.x}px`,
                    top: `${clickPosition.y}px`,
                    transform: "translate(-50%, -50%)"
                },
                children: sparkles.map((sparkle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        initial: {
                            x: sparkle.startX,
                            y: sparkle.startY,
                            opacity: 0,
                            scale: 0.5,
                            rotate: 0
                        },
                        animate: {
                            x: sparkle.endX,
                            y: sparkle.endY,
                            opacity: [
                                0,
                                1,
                                0
                            ],
                            scale: [
                                0.5,
                                1.2,
                                0
                            ],
                            rotate: sparkle.rotate
                        },
                        transition: {
                            duration: 0.8,
                            ease: [
                                0.17,
                                0.67,
                                0.83,
                                0.67
                            ]
                        },
                        className: "absolute block rounded-full bg-white",
                        style: {
                            background: "radial-gradient(circle, #00FFFF 0%, #0088FF 50%, #0000FF 100%)",
                            width: `${sparkle.size}px`,
                            height: `${sparkle.size}px`,
                            filter: "blur(1px) brightness(1.5)"
                        }
                    }, sparkle.id, false, {
                        fileName: "[project]/src/components/Cursor/CursorParticles.tsx",
                        lineNumber: 169,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Cursor/CursorParticles.tsx",
                lineNumber: 161,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(CursorParticles, "QlOAZe65f9Lgg97hSzAp6SV6tsM=");
_c = CursorParticles;
const __TURBOPACK__default__export__ = CursorParticles;
var _c;
__turbopack_context__.k.register(_c, "CursorParticles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/LandingView/LandingComponent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
const ComicHeading = "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1749294074/colorful-pop-art-style-background-free-vector_tmy9he.jpg";
const LandingComponent = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-3 w-full mt-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: `relative ${(void 0).className}`,
                    children: "About Me"
                }, void 0, false, {
                    fileName: "[project]/src/components/LandingView/LandingComponent.tsx",
                    lineNumber: 26,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: ComicHeading,
                    alt: "comic type heading",
                    width: 500,
                    height: 200,
                    className: "absolute"
                }, void 0, false, {
                    fileName: "[project]/src/components/LandingView/LandingComponent.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LandingView/LandingComponent.tsx",
            lineNumber: 25,
            columnNumber: 11
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/LandingView/LandingComponent.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
_c = LandingComponent;
const __TURBOPACK__default__export__ = LandingComponent;
var _c;
__turbopack_context__.k.register(_c, "LandingComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$adventurefont_c8853632$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/adventurefont_c8853632.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$useMobileView$2f$useMobileHook$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/useMobileView/useMobileHook.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadBody$2f$HeadBody$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeadBody/HeadBody.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cursor$2f$CursorParticles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Cursor/CursorParticles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingView$2f$LandingComponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LandingView/LandingComponent.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Home() {
    _s();
    const AuthorName = "I am Sumit Sonar";
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$useMobileView$2f$useMobileHook$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobileHook"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glowing-container min-h-screen w-full",
        children: [
            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cursor$2f$CursorParticles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                screenWidth: window.innerWidth
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 29,
                columnNumber: 21
            }, this),
            isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full first-content -rotate-15 text-container flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "h-[2px] -ml-3 w-full -rotate-2 bg-yellow-500 border-none rounded-xl opacity-85"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: `text-3xl -rotate-2 text-amber-300 tracking-wide ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$adventurefont_c8853632$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className}`,
                        children: AuthorName.split("").map((char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "animated-letter",
                                style: {
                                    animationDelay: `${index * 0.05}s`
                                },
                                children: [
                                    char === " " ? "\u00A0" : char,
                                    " "
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "h-[2px] -ml-6 w-full border-none bg-yellow-500 rounded-xl -rotate-4 opacity-85 "
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full text-container items-center flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "h-[2px] w-1/2 mt-3 bg-yellow-500 border-none rounded-xl opacity-85"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: `text-3xl lg:text-5xl text-amber-400 tracking-wide ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$adventurefont_c8853632$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className}`,
                        children: AuthorName.split("").map((char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "animated-letter",
                                style: {
                                    animationDelay: `${index * 0.05}s`
                                },
                                children: [
                                    char === " " ? "\u00A0" : char,
                                    " "
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "h-[1.8px] w-[38rem] border-none bg-yellow-500 rounded-xl opacity-85 "
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeadBody$2f$HeadBody$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingView$2f$LandingComponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(Home, "bbQA82GGGhvOCLOi+agQ8Cnb44o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$useMobileView$2f$useMobileHook$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobileHook"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_6ce9f5f0._.js.map