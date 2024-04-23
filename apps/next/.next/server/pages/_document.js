"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _my_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @my/ui */ \"../../packages/ui/src/index.tsx\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"../../node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native */ \"../../node_modules/react-native-web/dist/cjs/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_my_ui__WEBPACK_IMPORTED_MODULE_4__]);\n_my_ui__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nclass Document extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    static async getInitialProps(ctx) {\n        react_native__WEBPACK_IMPORTED_MODULE_3__.AppRegistry.registerComponent(\"Main\", ()=>next_document__WEBPACK_IMPORTED_MODULE_1__.Main);\n        const page = await ctx.renderPage();\n        // @ts-ignore\n        const { getStyleElement } = react_native__WEBPACK_IMPORTED_MODULE_3__.AppRegistry.getApplication(\"Main\");\n        /**\n     * Note: be sure to keep tamagui styles after react-native-web styles like it is here!\n     * So Tamagui styles can override the react-native-web styles.\n     */ const styles = [\n            getStyleElement(),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                dangerouslySetInnerHTML: {\n                    __html: _my_ui__WEBPACK_IMPORTED_MODULE_4__.config.getCSS({\n                        exclude:  true ? null : 0\n                    })\n                }\n            }, \"tamagui-css\", false, {\n                fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/apps/next/pages/_document.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ];\n        return {\n            ...page,\n            styles: react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(styles)\n        };\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"X-UA-Compatible\",\n                        content: \"IE=edge\"\n                    }, void 0, false, {\n                        fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/apps/next/pages/_document.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/apps/next/pages/_document.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/apps/next/pages/_document.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                            fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/apps/next/pages/_document.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/apps/next/pages/_document.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/apps/next/pages/_document.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFRVDtBQUNVO0FBQ1U7QUFFM0IsTUFBTVEsaUJBQWlCUCxzREFBWUE7SUFDaEQsYUFBYVEsZ0JBQWdCQyxHQUFvQixFQUFpQztRQUNoRkgscURBQVdBLENBQUNJLGlCQUFpQixDQUFDLFFBQVEsSUFBTVAsK0NBQUlBO1FBQ2hELE1BQU1RLE9BQU8sTUFBTUYsSUFBSUcsVUFBVTtRQUVqQyxhQUFhO1FBQ2IsTUFBTSxFQUFFQyxlQUFlLEVBQUUsR0FBR1AscURBQVdBLENBQUNRLGNBQWMsQ0FBQztRQUV2RDs7O0tBR0MsR0FDRCxNQUFNQyxTQUFTO1lBQ2JGOzBCQUNBLDhEQUFDRztnQkFFQ0MseUJBQXlCO29CQUN2QkMsUUFBUW5CLDBDQUFNQSxDQUFDb0IsTUFBTSxDQUFDO3dCQUNwQkMsU0FBU0MsS0FBeUIsR0FBZ0IsT0FBTztvQkFDM0Q7Z0JBQ0Y7ZUFMSTs7Ozs7U0FPUDtRQUVELE9BQU87WUFBRSxHQUFHVixJQUFJO1lBQUVJLFFBQVFWLDJDQUFRQSxDQUFDaUIsT0FBTyxDQUFDUDtRQUFRO0lBQ3JEO0lBRUFRLFNBQVM7UUFDUCxxQkFDRSw4REFBQ3JCLCtDQUFJQTs7OEJBQ0gsOERBQUNELCtDQUFJQTs4QkFDSCw0RUFBQ3VCO3dCQUFLQyxXQUFVO3dCQUFrQkMsU0FBUTs7Ozs7Ozs7Ozs7OEJBRTVDLDhEQUFDQzs7c0NBQ0MsOERBQUN4QiwrQ0FBSUE7Ozs7O3NDQUNMLDhEQUFDQyxxREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSW5CO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL19kb2N1bWVudC50c3g/ZDM3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdAbXkvdWknXG5pbXBvcnQgTmV4dERvY3VtZW50LCB7XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIEhlYWQsXG4gIEh0bWwsXG4gIE1haW4sXG4gIE5leHRTY3JpcHQsXG59IGZyb20gJ25leHQvZG9jdW1lbnQnXG5pbXBvcnQgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQXBwUmVnaXN0cnkgfSBmcm9tICdyZWFjdC1uYXRpdmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50IGV4dGVuZHMgTmV4dERvY3VtZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHg6IERvY3VtZW50Q29udGV4dCk6IFByb21pc2U8RG9jdW1lbnRJbml0aWFsUHJvcHM+IHtcbiAgICBBcHBSZWdpc3RyeS5yZWdpc3RlckNvbXBvbmVudCgnTWFpbicsICgpID0+IE1haW4pXG4gICAgY29uc3QgcGFnZSA9IGF3YWl0IGN0eC5yZW5kZXJQYWdlKClcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCB7IGdldFN0eWxlRWxlbWVudCB9ID0gQXBwUmVnaXN0cnkuZ2V0QXBwbGljYXRpb24oJ01haW4nKVxuXG4gICAgLyoqXG4gICAgICogTm90ZTogYmUgc3VyZSB0byBrZWVwIHRhbWFndWkgc3R5bGVzIGFmdGVyIHJlYWN0LW5hdGl2ZS13ZWIgc3R5bGVzIGxpa2UgaXQgaXMgaGVyZSFcbiAgICAgKiBTbyBUYW1hZ3VpIHN0eWxlcyBjYW4gb3ZlcnJpZGUgdGhlIHJlYWN0LW5hdGl2ZS13ZWIgc3R5bGVzLlxuICAgICAqL1xuICAgIGNvbnN0IHN0eWxlcyA9IFtcbiAgICAgIGdldFN0eWxlRWxlbWVudCgpLFxuICAgICAgPHN0eWxlXG4gICAgICAgIGtleT1cInRhbWFndWktY3NzXCJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IGNvbmZpZy5nZXRDU1Moe1xuICAgICAgICAgICAgZXhjbHVkZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyBudWxsIDogJ2Rlc2lnbi1zeXN0ZW0nLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9fVxuICAgICAgLz4sXG4gICAgXVxuXG4gICAgcmV0dXJuIHsgLi4ucGFnZSwgc3R5bGVzOiBDaGlsZHJlbi50b0FycmF5KHN0eWxlcykgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgIClcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNvbmZpZyIsIk5leHREb2N1bWVudCIsIkhlYWQiLCJIdG1sIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJDaGlsZHJlbiIsIkFwcFJlZ2lzdHJ5IiwiRG9jdW1lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZWdpc3RlckNvbXBvbmVudCIsInBhZ2UiLCJyZW5kZXJQYWdlIiwiZ2V0U3R5bGVFbGVtZW50IiwiZ2V0QXBwbGljYXRpb24iLCJzdHlsZXMiLCJzdHlsZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0Q1NTIiwiZXhjbHVkZSIsInByb2Nlc3MiLCJ0b0FycmF5IiwicmVuZGVyIiwibWV0YSIsImh0dHBFcXVpdiIsImNvbnRlbnQiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_document.tsx\n");

/***/ }),

/***/ "../../packages/config/src/index.ts":
/*!******************************************!*\
  !*** ../../packages/config/src/index.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tamagui_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tamagui.config */ \"../../packages/config/src/tamagui.config.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tamagui_config__WEBPACK_IMPORTED_MODULE_0__]);\n_tamagui_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _tamagui_config__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _tamagui_config__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvY29uZmlnL3NyYy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4uLy4uL3BhY2thZ2VzL2NvbmZpZy9zcmMvaW5kZXgudHM/ZDFlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL3RhbWFndWkuY29uZmlnJ1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../packages/config/src/index.ts\n");

/***/ }),

/***/ "../../packages/config/src/tamagui.config.ts":
/*!***************************************************!*\
  !*** ../../packages/config/src/tamagui.config.ts ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var tamagui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tamagui */ \"../../node_modules/tamagui/dist/esm/index.mjs\");\n/* harmony import */ var _tamagui_font_inter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tamagui/font-inter */ \"../../node_modules/@tamagui/font-inter/dist/esm/index.mjs\");\n/* harmony import */ var _tamagui_shorthands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tamagui/shorthands */ \"../../node_modules/@tamagui/shorthands/dist/esm/index.mjs\");\n/* harmony import */ var _tamagui_themes_v2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tamagui/themes/v2 */ \"../../node_modules/@tamagui/themes/dist/esm/v2.mjs\");\n/* harmony import */ var _tamagui_themes_v2_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tamagui/themes/v2-themes */ \"../../node_modules/@tamagui/themes/dist/esm/v2-themes.mjs\");\n/* harmony import */ var _tamagui_react_native_media_driver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tamagui/react-native-media-driver */ \"../../node_modules/@tamagui/react-native-media-driver/dist/esm/index.mjs\");\n/* harmony import */ var _my_ui_src_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @my/ui/src/animations */ \"../../packages/ui/src/animations.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([tamagui__WEBPACK_IMPORTED_MODULE_3__]);\ntamagui__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst headingFont = (0,_tamagui_font_inter__WEBPACK_IMPORTED_MODULE_0__.createInterFont)({\n    size: {\n        6: 15\n    },\n    transform: {\n        6: \"uppercase\",\n        7: \"none\"\n    },\n    weight: {\n        6: \"400\",\n        7: \"700\"\n    },\n    color: {\n        6: \"$colorFocus\",\n        7: \"$color\"\n    },\n    letterSpacing: {\n        5: 2,\n        6: 1,\n        7: 0,\n        8: -1,\n        9: -2,\n        10: -3,\n        12: -4,\n        14: -5,\n        15: -6\n    },\n    face: {\n        700: {\n            normal: \"InterBold\"\n        }\n    }\n});\nconst bodyFont = (0,_tamagui_font_inter__WEBPACK_IMPORTED_MODULE_0__.createInterFont)({\n    face: {\n        700: {\n            normal: \"InterBold\"\n        }\n    }\n}, {\n    sizeSize: (size)=>Math.round(size * 1.1),\n    sizeLineHeight: (size)=>Math.round(size * 1.1 + (size > 20 ? 10 : 10))\n});\nconst config = (0,tamagui__WEBPACK_IMPORTED_MODULE_3__.createTamagui)({\n    defaultFont: \"body\",\n    animations: _my_ui_src_animations__WEBPACK_IMPORTED_MODULE_4__.animations,\n    shouldAddPrefersColorThemes: true,\n    themeClassNameOnRoot: true,\n    // highly recommended to turn this on if you are using shorthands\n    // to avoid having multiple valid style keys that do the same thing\n    // we leave it off by default because it can be confusing as you onboard.\n    onlyAllowShorthands: false,\n    shorthands: _tamagui_shorthands__WEBPACK_IMPORTED_MODULE_1__.shorthands,\n    fonts: {\n        body: bodyFont,\n        heading: headingFont\n    },\n    settings: {\n        allowedStyleValues: \"somewhat-strict\"\n    },\n    themes: _tamagui_themes_v2_themes__WEBPACK_IMPORTED_MODULE_5__.themes,\n    tokens: _tamagui_themes_v2__WEBPACK_IMPORTED_MODULE_6__.tokens,\n    media: (0,_tamagui_react_native_media_driver__WEBPACK_IMPORTED_MODULE_2__.createMedia)({\n        xs: {\n            maxWidth: 660\n        },\n        sm: {\n            maxWidth: 800\n        },\n        md: {\n            maxWidth: 1020\n        },\n        lg: {\n            maxWidth: 1280\n        },\n        xl: {\n            maxWidth: 1420\n        },\n        xxl: {\n            maxWidth: 1600\n        },\n        gtXs: {\n            minWidth: 660 + 1\n        },\n        gtSm: {\n            minWidth: 800 + 1\n        },\n        gtMd: {\n            minWidth: 1020 + 1\n        },\n        gtLg: {\n            minWidth: 1280 + 1\n        },\n        short: {\n            maxHeight: 820\n        },\n        tall: {\n            minHeight: 820\n        },\n        hoverNone: {\n            hover: \"none\"\n        },\n        pointerCoarse: {\n            pointer: \"coarse\"\n        }\n    })\n});\n// for the compiler to find it\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvY29uZmlnL3NyYy90YW1hZ3VpLmNvbmZpZy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDYztBQUNMO0FBQ0w7QUFDTztBQUNjO0FBRWQ7QUFFbEQsTUFBTU8sY0FBY04sb0VBQWVBLENBQUM7SUFDbENPLE1BQU07UUFDSixHQUFHO0lBQ0w7SUFDQUMsV0FBVztRQUNULEdBQUc7UUFDSCxHQUFHO0lBQ0w7SUFDQUMsUUFBUTtRQUNOLEdBQUc7UUFDSCxHQUFHO0lBQ0w7SUFDQUMsT0FBTztRQUNMLEdBQUc7UUFDSCxHQUFHO0lBQ0w7SUFDQUMsZUFBZTtRQUNiLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUcsQ0FBQztRQUNKLEdBQUcsQ0FBQztRQUNKLElBQUksQ0FBQztRQUNMLElBQUksQ0FBQztRQUNMLElBQUksQ0FBQztRQUNMLElBQUksQ0FBQztJQUNQO0lBQ0FDLE1BQU07UUFDSixLQUFLO1lBQUVDLFFBQVE7UUFBWTtJQUM3QjtBQUNGO0FBRUEsTUFBTUMsV0FBV2Qsb0VBQWVBLENBQzlCO0lBQ0VZLE1BQU07UUFDSixLQUFLO1lBQUVDLFFBQVE7UUFBWTtJQUM3QjtBQUNGLEdBQ0E7SUFDRUUsVUFBVSxDQUFDUixPQUFTUyxLQUFLQyxLQUFLLENBQUNWLE9BQU87SUFDdENXLGdCQUFnQixDQUFDWCxPQUFTUyxLQUFLQyxLQUFLLENBQUNWLE9BQU8sTUFBT0EsQ0FBQUEsT0FBTyxLQUFLLEtBQUssRUFBQztBQUN2RTtBQUdLLE1BQU1ZLFNBQVNwQixzREFBYUEsQ0FBQztJQUNsQ3FCLGFBQWE7SUFDYmYsVUFBVUEsK0RBQUFBO0lBQ1ZnQiw2QkFBNkI7SUFDN0JDLHNCQUFzQjtJQUV0QixpRUFBaUU7SUFDakUsbUVBQW1FO0lBQ25FLHlFQUF5RTtJQUN6RUMscUJBQXFCO0lBQ3JCdEIsVUFBVUEsNkRBQUFBO0lBRVZ1QixPQUFPO1FBQ0xDLE1BQU1YO1FBQ05ZLFNBQVNwQjtJQUNYO0lBQ0FxQixVQUFVO1FBQ1JDLG9CQUFvQjtJQUN0QjtJQUNBekIsTUFBTUEsK0RBQUFBO0lBQ05ELE1BQU1BLHdEQUFBQTtJQUNOMkIsT0FBT3pCLCtFQUFXQSxDQUFDO1FBQ2pCMEIsSUFBSTtZQUFFQyxVQUFVO1FBQUk7UUFDcEJDLElBQUk7WUFBRUQsVUFBVTtRQUFJO1FBQ3BCRSxJQUFJO1lBQUVGLFVBQVU7UUFBSztRQUNyQkcsSUFBSTtZQUFFSCxVQUFVO1FBQUs7UUFDckJJLElBQUk7WUFBRUosVUFBVTtRQUFLO1FBQ3JCSyxLQUFLO1lBQUVMLFVBQVU7UUFBSztRQUN0Qk0sTUFBTTtZQUFFQyxVQUFVLE1BQU07UUFBRTtRQUMxQkMsTUFBTTtZQUFFRCxVQUFVLE1BQU07UUFBRTtRQUMxQkUsTUFBTTtZQUFFRixVQUFVLE9BQU87UUFBRTtRQUMzQkcsTUFBTTtZQUFFSCxVQUFVLE9BQU87UUFBRTtRQUMzQkksT0FBTztZQUFFQyxXQUFXO1FBQUk7UUFDeEJDLE1BQU07WUFBRUMsV0FBVztRQUFJO1FBQ3ZCQyxXQUFXO1lBQUVDLE9BQU87UUFBTztRQUMzQkMsZUFBZTtZQUFFQyxTQUFTO1FBQVM7SUFDckM7QUFDRixHQUFFO0FBRUYsOEJBQThCO0FBQzlCLGlFQUFlOUIsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4uLy4uL3BhY2thZ2VzL2NvbmZpZy9zcmMvdGFtYWd1aS5jb25maWcudHM/MmQ2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUYW1hZ3VpIH0gZnJvbSAndGFtYWd1aSdcbmltcG9ydCB7IGNyZWF0ZUludGVyRm9udCB9IGZyb20gJ0B0YW1hZ3VpL2ZvbnQtaW50ZXInXG5pbXBvcnQgeyBzaG9ydGhhbmRzIH0gZnJvbSAnQHRhbWFndWkvc2hvcnRoYW5kcydcbmltcG9ydCB7IHRva2VucyB9IGZyb20gJ0B0YW1hZ3VpL3RoZW1lcy92MidcbmltcG9ydCB7IHRoZW1lcyB9IGZyb20gJ0B0YW1hZ3VpL3RoZW1lcy92Mi10aGVtZXMnXG5pbXBvcnQgeyBjcmVhdGVNZWRpYSB9IGZyb20gJ0B0YW1hZ3VpL3JlYWN0LW5hdGl2ZS1tZWRpYS1kcml2ZXInXG5cbmltcG9ydCB7IGFuaW1hdGlvbnMgfSBmcm9tICdAbXkvdWkvc3JjL2FuaW1hdGlvbnMnXG5cbmNvbnN0IGhlYWRpbmdGb250ID0gY3JlYXRlSW50ZXJGb250KHtcbiAgc2l6ZToge1xuICAgIDY6IDE1LFxuICB9LFxuICB0cmFuc2Zvcm06IHtcbiAgICA2OiAndXBwZXJjYXNlJyxcbiAgICA3OiAnbm9uZScsXG4gIH0sXG4gIHdlaWdodDoge1xuICAgIDY6ICc0MDAnLFxuICAgIDc6ICc3MDAnLFxuICB9LFxuICBjb2xvcjoge1xuICAgIDY6ICckY29sb3JGb2N1cycsXG4gICAgNzogJyRjb2xvcicsXG4gIH0sXG4gIGxldHRlclNwYWNpbmc6IHtcbiAgICA1OiAyLFxuICAgIDY6IDEsXG4gICAgNzogMCxcbiAgICA4OiAtMSxcbiAgICA5OiAtMixcbiAgICAxMDogLTMsXG4gICAgMTI6IC00LFxuICAgIDE0OiAtNSxcbiAgICAxNTogLTYsXG4gIH0sXG4gIGZhY2U6IHtcbiAgICA3MDA6IHsgbm9ybWFsOiAnSW50ZXJCb2xkJyB9LFxuICB9LFxufSlcblxuY29uc3QgYm9keUZvbnQgPSBjcmVhdGVJbnRlckZvbnQoXG4gIHtcbiAgICBmYWNlOiB7XG4gICAgICA3MDA6IHsgbm9ybWFsOiAnSW50ZXJCb2xkJyB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBzaXplU2l6ZTogKHNpemUpID0+IE1hdGgucm91bmQoc2l6ZSAqIDEuMSksXG4gICAgc2l6ZUxpbmVIZWlnaHQ6IChzaXplKSA9PiBNYXRoLnJvdW5kKHNpemUgKiAxLjEgKyAoc2l6ZSA+IDIwID8gMTAgOiAxMCkpLFxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBjcmVhdGVUYW1hZ3VpKHtcbiAgZGVmYXVsdEZvbnQ6ICdib2R5JyxcbiAgYW5pbWF0aW9ucyxcbiAgc2hvdWxkQWRkUHJlZmVyc0NvbG9yVGhlbWVzOiB0cnVlLFxuICB0aGVtZUNsYXNzTmFtZU9uUm9vdDogdHJ1ZSxcbiAgXG4gIC8vIGhpZ2hseSByZWNvbW1lbmRlZCB0byB0dXJuIHRoaXMgb24gaWYgeW91IGFyZSB1c2luZyBzaG9ydGhhbmRzXG4gIC8vIHRvIGF2b2lkIGhhdmluZyBtdWx0aXBsZSB2YWxpZCBzdHlsZSBrZXlzIHRoYXQgZG8gdGhlIHNhbWUgdGhpbmdcbiAgLy8gd2UgbGVhdmUgaXQgb2ZmIGJ5IGRlZmF1bHQgYmVjYXVzZSBpdCBjYW4gYmUgY29uZnVzaW5nIGFzIHlvdSBvbmJvYXJkLlxuICBvbmx5QWxsb3dTaG9ydGhhbmRzOiBmYWxzZSxcbiAgc2hvcnRoYW5kcyxcblxuICBmb250czoge1xuICAgIGJvZHk6IGJvZHlGb250LFxuICAgIGhlYWRpbmc6IGhlYWRpbmdGb250LFxuICB9LFxuICBzZXR0aW5nczoge1xuICAgIGFsbG93ZWRTdHlsZVZhbHVlczogJ3NvbWV3aGF0LXN0cmljdCcsXG4gIH0sXG4gIHRoZW1lcyxcbiAgdG9rZW5zLFxuICBtZWRpYTogY3JlYXRlTWVkaWEoe1xuICAgIHhzOiB7IG1heFdpZHRoOiA2NjAgfSxcbiAgICBzbTogeyBtYXhXaWR0aDogODAwIH0sXG4gICAgbWQ6IHsgbWF4V2lkdGg6IDEwMjAgfSxcbiAgICBsZzogeyBtYXhXaWR0aDogMTI4MCB9LFxuICAgIHhsOiB7IG1heFdpZHRoOiAxNDIwIH0sXG4gICAgeHhsOiB7IG1heFdpZHRoOiAxNjAwIH0sXG4gICAgZ3RYczogeyBtaW5XaWR0aDogNjYwICsgMSB9LFxuICAgIGd0U206IHsgbWluV2lkdGg6IDgwMCArIDEgfSxcbiAgICBndE1kOiB7IG1pbldpZHRoOiAxMDIwICsgMSB9LFxuICAgIGd0TGc6IHsgbWluV2lkdGg6IDEyODAgKyAxIH0sXG4gICAgc2hvcnQ6IHsgbWF4SGVpZ2h0OiA4MjAgfSxcbiAgICB0YWxsOiB7IG1pbkhlaWdodDogODIwIH0sXG4gICAgaG92ZXJOb25lOiB7IGhvdmVyOiAnbm9uZScgfSxcbiAgICBwb2ludGVyQ29hcnNlOiB7IHBvaW50ZXI6ICdjb2Fyc2UnIH0sXG4gIH0pLFxufSlcblxuLy8gZm9yIHRoZSBjb21waWxlciB0byBmaW5kIGl0XG5leHBvcnQgZGVmYXVsdCBjb25maWdcbiJdLCJuYW1lcyI6WyJjcmVhdGVUYW1hZ3VpIiwiY3JlYXRlSW50ZXJGb250Iiwic2hvcnRoYW5kcyIsInRva2VucyIsInRoZW1lcyIsImNyZWF0ZU1lZGlhIiwiYW5pbWF0aW9ucyIsImhlYWRpbmdGb250Iiwic2l6ZSIsInRyYW5zZm9ybSIsIndlaWdodCIsImNvbG9yIiwibGV0dGVyU3BhY2luZyIsImZhY2UiLCJub3JtYWwiLCJib2R5Rm9udCIsInNpemVTaXplIiwiTWF0aCIsInJvdW5kIiwic2l6ZUxpbmVIZWlnaHQiLCJjb25maWciLCJkZWZhdWx0Rm9udCIsInNob3VsZEFkZFByZWZlcnNDb2xvclRoZW1lcyIsInRoZW1lQ2xhc3NOYW1lT25Sb290Iiwib25seUFsbG93U2hvcnRoYW5kcyIsImZvbnRzIiwiYm9keSIsImhlYWRpbmciLCJzZXR0aW5ncyIsImFsbG93ZWRTdHlsZVZhbHVlcyIsIm1lZGlhIiwieHMiLCJtYXhXaWR0aCIsInNtIiwibWQiLCJsZyIsInhsIiwieHhsIiwiZ3RYcyIsIm1pbldpZHRoIiwiZ3RTbSIsImd0TWQiLCJndExnIiwic2hvcnQiLCJtYXhIZWlnaHQiLCJ0YWxsIiwibWluSGVpZ2h0IiwiaG92ZXJOb25lIiwiaG92ZXIiLCJwb2ludGVyQ29hcnNlIiwicG9pbnRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../packages/config/src/tamagui.config.ts\n");

/***/ }),

/***/ "../../packages/ui/src/CustomToast.tsx":
/*!*********************************************!*\
  !*** ../../packages/ui/src/CustomToast.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CustomToast: () => (/* binding */ CustomToast)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var expo_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! expo-constants */ \"../../node_modules/expo-constants/build/Constants.js\");\n/* harmony import */ var _NativeToast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NativeToast */ \"../../packages/ui/src/NativeToast.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NativeToast__WEBPACK_IMPORTED_MODULE_2__]);\n_NativeToast__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst isExpo = expo_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].executionEnvironment === expo_constants__WEBPACK_IMPORTED_MODULE_1__.ExecutionEnvironment.StoreClient;\nconst CustomToast = ()=>{\n    if (isExpo) {\n        return null;\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NativeToast__WEBPACK_IMPORTED_MODULE_2__.NativeToast, {}, void 0, false, {\n            fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/ui/src/CustomToast.tsx\",\n            lineNumber: 10,\n            columnNumber: 12\n        }, undefined);\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvdWkvc3JjL0N1c3RvbVRvYXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0U7QUFDWjtBQUVwRCxNQUFNSSxTQUFTSiwyRUFBOEIsS0FBS0MsZ0VBQW9CQSxDQUFDSyxXQUFXO0FBRTNFLE1BQU1DLGNBQWM7SUFDekIsSUFBSUgsUUFBUTtRQUNWLE9BQU87SUFDVCxPQUFPO1FBQ0wscUJBQU8sOERBQUNELHFEQUFLQTs7Ozs7SUFDZjtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uLi8uLi9wYWNrYWdlcy91aS9zcmMvQ3VzdG9tVG9hc3QudHN4PzhjMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnN0YW50cywgeyBFeGVjdXRpb25FbnZpcm9ubWVudCB9IGZyb20gJ2V4cG8tY29uc3RhbnRzJ1xuaW1wb3J0IHsgTmF0aXZlVG9hc3QgYXMgVG9hc3QgfSBmcm9tICcuL05hdGl2ZVRvYXN0J1xuXG5jb25zdCBpc0V4cG8gPSBDb25zdGFudHMuZXhlY3V0aW9uRW52aXJvbm1lbnQgPT09IEV4ZWN1dGlvbkVudmlyb25tZW50LlN0b3JlQ2xpZW50XG5cbmV4cG9ydCBjb25zdCBDdXN0b21Ub2FzdCA9ICgpID0+IHtcbiAgaWYgKGlzRXhwbykge1xuICAgIHJldHVybiBudWxsXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDxUb2FzdCAvPlxuICB9XG59XG4iXSwibmFtZXMiOlsiQ29uc3RhbnRzIiwiRXhlY3V0aW9uRW52aXJvbm1lbnQiLCJOYXRpdmVUb2FzdCIsIlRvYXN0IiwiaXNFeHBvIiwiZXhlY3V0aW9uRW52aXJvbm1lbnQiLCJTdG9yZUNsaWVudCIsIkN1c3RvbVRvYXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../packages/ui/src/CustomToast.tsx\n");

/***/ }),

/***/ "../../packages/ui/src/MyComponent.tsx":
/*!*********************************************!*\
  !*** ../../packages/ui/src/MyComponent.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MyComponent: () => (/* binding */ MyComponent)\n/* harmony export */ });\n/* harmony import */ var tamagui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tamagui */ \"../../node_modules/tamagui/dist/esm/index.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([tamagui__WEBPACK_IMPORTED_MODULE_0__]);\ntamagui__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst MyComponent = (0,tamagui__WEBPACK_IMPORTED_MODULE_0__.styled)(tamagui__WEBPACK_IMPORTED_MODULE_0__.YStack, {\n    name: \"MyComponent\",\n    backgroundColor: \"red\",\n    variants: {\n        blue: {\n            true: {\n                backgroundColor: \"blue\"\n            }\n        }\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvdWkvc3JjL015Q29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUVqQyxNQUFNRSxjQUFjRCwrQ0FBTUEsQ0FBQ0QsMkNBQU1BLEVBQUU7SUFDeENHLE1BQU07SUFDTkMsaUJBQWlCO0lBRWpCQyxVQUFVO1FBQ1JDLE1BQU07WUFDSkMsTUFBTTtnQkFDSkgsaUJBQWlCO1lBQ25CO1FBQ0Y7SUFDRjtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uLi8uLi9wYWNrYWdlcy91aS9zcmMvTXlDb21wb25lbnQudHN4Pzk5NWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgWVN0YWNrLCBzdHlsZWQgfSBmcm9tICd0YW1hZ3VpJ1xuXG5leHBvcnQgY29uc3QgTXlDb21wb25lbnQgPSBzdHlsZWQoWVN0YWNrLCB7XG4gIG5hbWU6ICdNeUNvbXBvbmVudCcsXG4gIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXG5cbiAgdmFyaWFudHM6IHtcbiAgICBibHVlOiB7XG4gICAgICB0cnVlOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9IGFzIGNvbnN0LFxufSlcbiJdLCJuYW1lcyI6WyJZU3RhY2siLCJzdHlsZWQiLCJNeUNvbXBvbmVudCIsIm5hbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2YXJpYW50cyIsImJsdWUiLCJ0cnVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../packages/ui/src/MyComponent.tsx\n");

/***/ }),

/***/ "../../packages/ui/src/NativeToast.tsx":
/*!*********************************************!*\
  !*** ../../packages/ui/src/NativeToast.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NativeToast: () => (/* binding */ NativeToast)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tamagui_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tamagui/toast */ \"../../node_modules/@tamagui/toast/dist/esm/index.mjs\");\n/* harmony import */ var tamagui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tamagui */ \"../../node_modules/tamagui/dist/esm/index.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([tamagui__WEBPACK_IMPORTED_MODULE_2__]);\ntamagui__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst NativeToast = ()=>{\n    const currentToast = (0,_tamagui_toast__WEBPACK_IMPORTED_MODULE_1__.useToastState)();\n    if (!currentToast || currentToast.isHandledNatively) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tamagui_toast__WEBPACK_IMPORTED_MODULE_1__.Toast, {\n        duration: currentToast.duration,\n        viewportName: currentToast.viewportName,\n        enterStyle: {\n            opacity: 0,\n            scale: 0.5,\n            y: -25\n        },\n        exitStyle: {\n            opacity: 0,\n            scale: 1,\n            y: -20\n        },\n        y: 0,\n        opacity: 1,\n        scale: 1,\n        animation: \"quick\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(tamagui__WEBPACK_IMPORTED_MODULE_2__.YStack, {\n            \"data-at\": \"NativeToast.tsx:23\",\n            \"data-in\": \"NativeToast\",\n            \"data-is\": \"YStack\",\n            py: \"$1.5\",\n            px: \"$2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tamagui_toast__WEBPACK_IMPORTED_MODULE_1__.Toast.Title, {\n                    lh: \"$1\",\n                    children: currentToast.title\n                }, void 0, false, {\n                    fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/ui/src/NativeToast.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                !!currentToast.message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tamagui_toast__WEBPACK_IMPORTED_MODULE_1__.Toast.Description, {\n                    children: currentToast.message\n                }, void 0, false, {\n                    fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/ui/src/NativeToast.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 36\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/ui/src/NativeToast.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, currentToast.id, false, {\n        fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/ui/src/NativeToast.tsx\",\n        lineNumber: 8,\n        columnNumber: 10\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvdWkvc3JjL05hdGl2ZVRvYXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDckI7QUFFekIsTUFBTUcsY0FBY0E7SUFDekIsTUFBTUMsZUFBZUgsNkRBQWFBO0lBRWxDLElBQUksQ0FBQ0csZ0JBQWdCQSxhQUFhQyxpQkFBaUIsRUFBRTtRQUNuRCxPQUFPO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQ0wsaURBQUtBO1FBRUpNLFVBQVVGLGFBQWFFLFFBQVE7UUFDL0JDLGNBQWNILGFBQWFHLFlBQVk7UUFDdkNDLFlBQVk7WUFBRUMsU0FBUztZQUFHQyxPQUFPO1lBQUtDLEdBQUcsQ0FBQztRQUFHO1FBQzdDQyxXQUFXO1lBQUVILFNBQVM7WUFBR0MsT0FBTztZQUFHQyxHQUFHLENBQUM7UUFBRztRQUMxQ0EsR0FBRztRQUNIRixTQUFTO1FBQ1RDLE9BQU87UUFDUEcsV0FBVTtrQkFFViw0RUFBQ1gsMkNBQU1BO1lBQUFZLFdBQUE7WUFBQUMsV0FBQTtZQUFBQyxXQUFBO1lBQUNDLElBQUc7WUFBT0MsSUFBRzs7OEJBQ25CLDhEQUFDbEIsaURBQUtBLENBQUNtQixLQUFLO29CQUFDQyxJQUFHOzhCQUFNaEIsYUFBYWlCLEtBQUs7Ozs7OztnQkFDdkMsQ0FBQyxDQUFDakIsYUFBYWtCLE9BQU8sa0JBQUksOERBQUN0QixpREFBS0EsQ0FBQ3VCLFdBQVc7OEJBQUVuQixhQUFha0IsT0FBTzs7Ozs7Ozs7Ozs7O09BWmhFbEIsYUFBYW9CLEVBQUU7Ozs7O0FBZ0IxQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi4vLi4vcGFja2FnZXMvdWkvc3JjL05hdGl2ZVRvYXN0LnRzeD85MjA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvYXN0LCB1c2VUb2FzdFN0YXRlIH0gZnJvbSAnQHRhbWFndWkvdG9hc3QnXG5pbXBvcnQgeyBZU3RhY2sgfSBmcm9tICd0YW1hZ3VpJ1xuXG5leHBvcnQgY29uc3QgTmF0aXZlVG9hc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRUb2FzdCA9IHVzZVRvYXN0U3RhdGUoKVxuXG4gIGlmICghY3VycmVudFRvYXN0IHx8IGN1cnJlbnRUb2FzdC5pc0hhbmRsZWROYXRpdmVseSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUb2FzdFxuICAgICAga2V5PXtjdXJyZW50VG9hc3QuaWR9XG4gICAgICBkdXJhdGlvbj17Y3VycmVudFRvYXN0LmR1cmF0aW9ufVxuICAgICAgdmlld3BvcnROYW1lPXtjdXJyZW50VG9hc3Qudmlld3BvcnROYW1lfVxuICAgICAgZW50ZXJTdHlsZT17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC41LCB5OiAtMjUgfX1cbiAgICAgIGV4aXRTdHlsZT17eyBvcGFjaXR5OiAwLCBzY2FsZTogMSwgeTogLTIwIH19XG4gICAgICB5PXswfVxuICAgICAgb3BhY2l0eT17MX1cbiAgICAgIHNjYWxlPXsxfVxuICAgICAgYW5pbWF0aW9uPVwicXVpY2tcIlxuICAgID5cbiAgICAgIDxZU3RhY2sgcHk9XCIkMS41XCIgcHg9XCIkMlwiPlxuICAgICAgICA8VG9hc3QuVGl0bGUgbGg9XCIkMVwiPntjdXJyZW50VG9hc3QudGl0bGV9PC9Ub2FzdC5UaXRsZT5cbiAgICAgICAgeyEhY3VycmVudFRvYXN0Lm1lc3NhZ2UgJiYgPFRvYXN0LkRlc2NyaXB0aW9uPntjdXJyZW50VG9hc3QubWVzc2FnZX08L1RvYXN0LkRlc2NyaXB0aW9uPn1cbiAgICAgIDwvWVN0YWNrPlxuICAgIDwvVG9hc3Q+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJUb2FzdCIsInVzZVRvYXN0U3RhdGUiLCJZU3RhY2siLCJOYXRpdmVUb2FzdCIsImN1cnJlbnRUb2FzdCIsImlzSGFuZGxlZE5hdGl2ZWx5IiwiZHVyYXRpb24iLCJ2aWV3cG9ydE5hbWUiLCJlbnRlclN0eWxlIiwib3BhY2l0eSIsInNjYWxlIiwieSIsImV4aXRTdHlsZSIsImFuaW1hdGlvbiIsImRhdGEtYXQiLCJkYXRhLWluIiwiZGF0YS1pcyIsInB5IiwicHgiLCJUaXRsZSIsImxoIiwidGl0bGUiLCJtZXNzYWdlIiwiRGVzY3JpcHRpb24iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../packages/ui/src/NativeToast.tsx\n");

/***/ }),

/***/ "../../packages/ui/src/animations.ts":
/*!*******************************************!*\
  !*** ../../packages/ui/src/animations.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animations: () => (/* binding */ animations)\n/* harmony export */ });\n/* harmony import */ var _tamagui_animations_react_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tamagui/animations-react-native */ \"../../node_modules/@tamagui/animations-react-native/dist/esm/index.mjs\");\n\nconst animations = (0,_tamagui_animations_react_native__WEBPACK_IMPORTED_MODULE_0__.createAnimations)({\n    \"100ms\": {\n        type: \"timing\",\n        duration: 100\n    },\n    bouncy: {\n        damping: 9,\n        mass: 0.9,\n        stiffness: 150\n    },\n    lazy: {\n        damping: 18,\n        stiffness: 50\n    },\n    medium: {\n        damping: 15,\n        stiffness: 120,\n        mass: 1\n    },\n    slow: {\n        damping: 15,\n        stiffness: 40\n    },\n    quick: {\n        damping: 20,\n        mass: 1.2,\n        stiffness: 250\n    },\n    tooltip: {\n        damping: 10,\n        mass: 0.9,\n        stiffness: 100\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvdWkvc3JjL2FuaW1hdGlvbnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUU7QUFFNUQsTUFBTUMsYUFBYUQsa0ZBQWdCQSxDQUFDO0lBQ3pDLFNBQVM7UUFDUEUsTUFBTTtRQUNOQyxVQUFVO0lBQ1o7SUFDQUMsUUFBUTtRQUNOQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsV0FBVztJQUNiO0lBQ0FDLE1BQU07UUFDSkgsU0FBUztRQUNURSxXQUFXO0lBQ2I7SUFDQUUsUUFBUTtRQUNOSixTQUFTO1FBQ1RFLFdBQVc7UUFDWEQsTUFBTTtJQUNSO0lBQ0FJLE1BQU07UUFDSkwsU0FBUztRQUNURSxXQUFXO0lBQ2I7SUFDQUksT0FBTztRQUNMTixTQUFTO1FBQ1RDLE1BQU07UUFDTkMsV0FBVztJQUNiO0lBQ0FLLFNBQVM7UUFDUFAsU0FBUztRQUNUQyxNQUFNO1FBQ05DLFdBQVc7SUFDYjtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uLi8uLi9wYWNrYWdlcy91aS9zcmMvYW5pbWF0aW9ucy50cz8yYjc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFuaW1hdGlvbnMgfSBmcm9tICdAdGFtYWd1aS9hbmltYXRpb25zLXJlYWN0LW5hdGl2ZSdcblxuZXhwb3J0IGNvbnN0IGFuaW1hdGlvbnMgPSBjcmVhdGVBbmltYXRpb25zKHtcbiAgJzEwMG1zJzoge1xuICAgIHR5cGU6ICd0aW1pbmcnLFxuICAgIGR1cmF0aW9uOiAxMDAsXG4gIH0sXG4gIGJvdW5jeToge1xuICAgIGRhbXBpbmc6IDksXG4gICAgbWFzczogMC45LFxuICAgIHN0aWZmbmVzczogMTUwLFxuICB9LFxuICBsYXp5OiB7XG4gICAgZGFtcGluZzogMTgsXG4gICAgc3RpZmZuZXNzOiA1MCxcbiAgfSxcbiAgbWVkaXVtOiB7XG4gICAgZGFtcGluZzogMTUsXG4gICAgc3RpZmZuZXNzOiAxMjAsXG4gICAgbWFzczogMSxcbiAgfSxcbiAgc2xvdzoge1xuICAgIGRhbXBpbmc6IDE1LFxuICAgIHN0aWZmbmVzczogNDAsXG4gIH0sXG4gIHF1aWNrOiB7XG4gICAgZGFtcGluZzogMjAsXG4gICAgbWFzczogMS4yLFxuICAgIHN0aWZmbmVzczogMjUwLFxuICB9LFxuICB0b29sdGlwOiB7XG4gICAgZGFtcGluZzogMTAsXG4gICAgbWFzczogMC45LFxuICAgIHN0aWZmbmVzczogMTAwLFxuICB9LFxufSlcbiJdLCJuYW1lcyI6WyJjcmVhdGVBbmltYXRpb25zIiwiYW5pbWF0aW9ucyIsInR5cGUiLCJkdXJhdGlvbiIsImJvdW5jeSIsImRhbXBpbmciLCJtYXNzIiwic3RpZmZuZXNzIiwibGF6eSIsIm1lZGl1bSIsInNsb3ciLCJxdWljayIsInRvb2x0aXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../packages/ui/src/animations.ts\n");

/***/ }),

/***/ "../../packages/ui/src/index.tsx":
/*!***************************************!*\
  !*** ../../packages/ui/src/index.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* reexport safe */ _my_config__WEBPACK_IMPORTED_MODULE_3__.config)\n/* harmony export */ });\n/* harmony import */ var tamagui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tamagui */ \"../../node_modules/tamagui/dist/esm/index.mjs\");\n/* harmony import */ var _tamagui_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tamagui/toast */ \"../../node_modules/@tamagui/toast/dist/esm/index.mjs\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _tamagui_toast__WEBPACK_IMPORTED_MODULE_1__) if([\"default\",\"config\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _tamagui_toast__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _MyComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyComponent */ \"../../packages/ui/src/MyComponent.tsx\");\n/* harmony import */ var _my_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @my/config */ \"../../packages/config/src/index.ts\");\n/* harmony import */ var _CustomToast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomToast */ \"../../packages/ui/src/CustomToast.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([tamagui__WEBPACK_IMPORTED_MODULE_0__, _MyComponent__WEBPACK_IMPORTED_MODULE_2__, _my_config__WEBPACK_IMPORTED_MODULE_3__, _CustomToast__WEBPACK_IMPORTED_MODULE_4__]);\n([tamagui__WEBPACK_IMPORTED_MODULE_0__, _MyComponent__WEBPACK_IMPORTED_MODULE_2__, _my_config__WEBPACK_IMPORTED_MODULE_3__, _CustomToast__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in tamagui__WEBPACK_IMPORTED_MODULE_0__) if([\"default\",\"config\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => tamagui__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _MyComponent__WEBPACK_IMPORTED_MODULE_2__) if([\"default\",\"config\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _MyComponent__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _CustomToast__WEBPACK_IMPORTED_MODULE_4__) if([\"default\",\"config\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _CustomToast__WEBPACK_IMPORTED_MODULE_4__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvdWkvc3JjL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDTztBQUNEO0FBQ007QUFDTiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4uLy4uL3BhY2thZ2VzL3VpL3NyYy9pbmRleC50c3g/ZDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICd0YW1hZ3VpJ1xuZXhwb3J0ICogZnJvbSAnQHRhbWFndWkvdG9hc3QnXG5leHBvcnQgKiBmcm9tICcuL015Q29tcG9uZW50J1xuZXhwb3J0IHsgY29uZmlnIH0gZnJvbSAnQG15L2NvbmZpZydcbmV4cG9ydCAqIGZyb20gJy4vQ3VzdG9tVG9hc3QnXG4iXSwibmFtZXMiOlsiY29uZmlnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../packages/ui/src/index.tsx\n");

/***/ }),

/***/ "@react-native/normalize-color":
/*!************************************************!*\
  !*** external "@react-native/normalize-color" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@react-native/normalize-color");

/***/ }),

/***/ "aria-hidden":
/*!******************************!*\
  !*** external "aria-hidden" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("aria-hidden");

/***/ }),

/***/ "compare-versions":
/*!***********************************!*\
  !*** external "compare-versions" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("compare-versions");

/***/ }),

/***/ "fbjs/lib/invariant":
/*!*************************************!*\
  !*** external "fbjs/lib/invariant" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("fbjs/lib/invariant");

/***/ }),

/***/ "fbjs/lib/warning":
/*!***********************************!*\
  !*** external "fbjs/lib/warning" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("fbjs/lib/warning");

/***/ }),

/***/ "inline-style-prefixer/lib/createPrefixer":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/createPrefixer" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/createPrefixer");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/backgroundClip":
/*!*******************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/backgroundClip" ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/backgroundClip");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/crossFade":
/*!**************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/crossFade" ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/crossFade");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/cursor":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/cursor" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/cursor");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/filter":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/filter" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/filter");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/imageSet":
/*!*************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/imageSet" ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/imageSet");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/logical":
/*!************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/logical" ***!
  \************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/logical");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/position":
/*!*************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/position" ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/position");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/sizing":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/sizing" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/sizing");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/transition":
/*!***************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/transition" ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/transition");

/***/ }),

/***/ "invariant":
/*!****************************!*\
  !*** external "invariant" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("invariant");

/***/ }),

/***/ "memoize-one":
/*!******************************!*\
  !*** external "memoize-one" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("memoize-one");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "nullthrows":
/*!*****************************!*\
  !*** external "nullthrows" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nullthrows");

/***/ }),

/***/ "postcss-value-parser":
/*!***************************************!*\
  !*** external "postcss-value-parser" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("postcss-value-parser");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react-dom/client":
/*!***********************************!*\
  !*** external "react-dom/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/client");

/***/ }),

/***/ "react-remove-scroll":
/*!**************************************!*\
  !*** external "react-remove-scroll" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-remove-scroll");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "reforest":
/*!***************************!*\
  !*** external "reforest" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("reforest");

/***/ }),

/***/ "styleq":
/*!*************************!*\
  !*** external "styleq" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("styleq");

/***/ }),

/***/ "styleq/transform-localize-style":
/*!**************************************************!*\
  !*** external "styleq/transform-localize-style" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("styleq/transform-localize-style");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ "@floating-ui/react":
/*!*************************************!*\
  !*** external "@floating-ui/react" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("@floating-ui/react");;

/***/ }),

/***/ "@floating-ui/react-dom":
/*!*****************************************!*\
  !*** external "@floating-ui/react-dom" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("@floating-ui/react-dom");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@tamagui","vendor-chunks/react-native-web","vendor-chunks/expo-modules-core","vendor-chunks/tamagui","vendor-chunks/expo-constants","vendor-chunks/@babel","vendor-chunks/next"], () => (__webpack_exec__("./pages/_document.tsx")));
module.exports = __webpack_exports__;

})();