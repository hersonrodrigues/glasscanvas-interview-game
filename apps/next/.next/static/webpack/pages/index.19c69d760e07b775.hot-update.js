"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "../../packages/app/features/game/GameOver.tsx":
/*!*****************************************************!*\
  !*** ../../packages/app/features/game/GameOver.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _my_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @my/ui */ \"../../packages/ui/src/index.tsx\");\n/* harmony import */ var _react_native_async_storage_async_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-native-async-storage/async-storage */ \"../../node_modules/@react-native-async-storage/async-storage/lib/module/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst GameOver = (param)=>{\n    let { score, handleReset } = param;\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [scoreData, setScoreData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function loadLastScoreName() {\n            const name = await _react_native_async_storage_async_storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getItem(\"last-name-score\");\n            const scoreData = await _react_native_async_storage_async_storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getItem(\"game-score\");\n            if (name) {\n                setName(name);\n            }\n            if (scoreData) {\n                setScoreData(JSON.parse(scoreData));\n            }\n        }\n        loadLastScoreName();\n    }, []);\n    const saveAndReset = async ()=>{\n        try {\n            let gameScore;\n            const scoreData = await _react_native_async_storage_async_storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getItem(\"game-score\");\n            if (scoreData) {\n                gameScore = JSON.parse(scoreData);\n            } else {\n                gameScore = [];\n            }\n            gameScore.push({\n                score: score,\n                name: name,\n                date: new Date()\n            });\n            await _react_native_async_storage_async_storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setItem(\"game-score\", gameScore);\n            await _react_native_async_storage_async_storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setItem(\"last-name-score\", name);\n            setScoreData(gameScore);\n        } catch (e) {}\n        handleReset();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.YStack, {\n        \"data-at\": \"GameOver.tsx:48\",\n        \"data-in\": \"GameOver\",\n        \"data-is\": \"YStack\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.H1, {\n                \"data-at\": \"GameOver.tsx:49\",\n                \"data-in\": \"GameOver\",\n                \"data-is\": \"H1\",\n                children: \"Game Over\"\n            }, void 0, false, {\n                fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.YStack, {\n                \"data-at\": \"GameOver.tsx:50\",\n                \"data-in\": \"GameOver\",\n                \"data-is\": \"YStack\",\n                alignItems: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                        \"data-at\": \"GameOver.tsx:51\",\n                        \"data-in\": \"GameOver\",\n                        \"data-is\": \"Image\",\n                        mt: \"$2\",\n                        animation: \"bouncy\",\n                        alignContent: \"center\",\n                        source: {\n                            height: 100,\n                            width: 100,\n                            uri: \"https://i.ibb.co/hY4ZvRN/robot-died.png\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.XStack, {\n                        \"data-at\": \"GameOver.tsx:52\",\n                        \"data-in\": \"GameOver\",\n                        \"data-is\": \"XStack\",\n                        mt: 20,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                            \"data-at\": \"GameOver.tsx:53\",\n                            \"data-in\": \"GameOver\",\n                            \"data-is\": \"Input\",\n                            placeholder: \"Your name..\",\n                            value: name,\n                            onChangeText: (e)=>setName(e)\n                        }, void 0, false, {\n                            fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.H5, {\n                        \"data-at\": \"GameOver.tsx:55\",\n                        \"data-in\": \"GameOver\",\n                        \"data-is\": \"H5\",\n                        mt: \"$5\",\n                        children: [\n                            \"Your Score: \",\n                            score\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.ScrollView, {\n                        \"data-at\": \"GameOver.tsx:56\",\n                        \"data-in\": \"GameOver\",\n                        \"data-is\": \"ScrollView\",\n                        mt: 15,\n                        p: 10,\n                        maxHeight: 200,\n                        children: scoreData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.XStack, {\n                                \"data-at\": \"GameOver.tsx:58\",\n                                \"data-in\": \"GameOver\",\n                                \"data-is\": \"XStack\",\n                                justifyContent: \"space-between\",\n                                alignItems: \"center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                        \"data-at\": \"GameOver.tsx:59\",\n                                        \"data-in\": \"GameOver\",\n                                        \"data-is\": \"Text\",\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                        \"data-at\": \"GameOver.tsx:60\",\n                                        \"data-in\": \"GameOver\",\n                                        \"data-is\": \"Text\",\n                                        children: item.score\n                                    }, void 0, false, {\n                                        fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 43\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                \"data-at\": \"GameOver.tsx:65\",\n                \"data-in\": \"GameOver\",\n                \"data-is\": \"Button\",\n                onPress: ()=>saveAndReset(),\n                mt: \"$4\",\n                children: \"Restart\"\n            }, void 0, false, {\n                fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n        lineNumber: 43,\n        columnNumber: 10\n    }, undefined);\n};\n_s(GameOver, \"YNkDSf31gLMhQYdmPKgV2ew0F10=\");\n_c = GameOver;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameOver);\nvar _c;\n$RefreshReg$(_c, \"GameOver\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvYXBwL2ZlYXR1cmVzL2dhbWUvR2FtZU92ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUM0QztBQUNuQjtBQUVwRSxNQUFNWSxXQUFXQTtRQUFDLEVBQUVDLEtBQUssRUFBRUMsV0FBQUEsRUFBYTs7SUFDdEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNpQixXQUFXQyxhQUFhLEdBQUdsQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTdDQyxnREFBU0EsQ0FBQztRQUNSLGVBQWVrQjtZQUNiLE1BQU1KLE9BQU8sTUFBTUoseUZBQW9CLENBQUM7WUFDeEMsTUFBTU0sWUFBWSxNQUFNTix5RkFBb0IsQ0FBQztZQUM3QyxJQUFJSSxNQUFNO2dCQUNSQyxRQUFRRDtZQUNWO1lBRUEsSUFBSUUsV0FBVztnQkFDYkMsYUFBYUcsS0FBS0MsS0FBSyxDQUFDTDtZQUMxQjtRQUNGO1FBQ0FFO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUksZUFBZTtRQUNqQixJQUFJO1lBQ0YsSUFBSUM7WUFDSixNQUFNUCxZQUFZLE1BQU1OLHlGQUFvQixDQUFDO1lBRTdDLElBQUlNLFdBQVc7Z0JBQ2JPLFlBQVlILEtBQUtDLEtBQUssQ0FBQ0w7WUFDekIsT0FBTztnQkFDTE8sWUFBWSxFQUFFO1lBQ2hCO1lBRUFBLFVBQVVDLElBQUksQ0FBQztnQkFBQ1osT0FBTUE7Z0JBQU9FLE1BQU1BO2dCQUFNVyxNQUFLLElBQUlDO1lBQU07WUFDeEQsTUFBTWhCLHlGQUFvQixDQUFDLGNBQWNhO1lBQ3pDLE1BQU1iLHlGQUFvQixDQUFDLG1CQUFtQkk7WUFFOUNHLGFBQWFNO1FBRWYsRUFBRSxPQUFPSyxHQUFHLENBRVo7UUFFQWY7SUFDSjtJQUNBLHFCQUNFLDhEQUFDVCwwQ0FBTUE7UUFBQXlCLFdBQUE7UUFBQUMsV0FBQTtRQUFBQyxXQUFBOzswQkFDTCw4REFBQzdCLHNDQUFFQTtnQkFBQTJCLFdBQUE7Z0JBQUFDLFdBQUE7Z0JBQUFDLFdBQUE7MEJBQUM7Ozs7OzswQkFDSiw4REFBQzNCLDBDQUFNQTtnQkFBQXlCLFdBQUE7Z0JBQUFDLFdBQUE7Z0JBQUFDLFdBQUE7Z0JBQUNDLFlBQVc7O2tDQUNqQiw4REFBQzNCLHlDQUFLQTt3QkFBQXdCLFdBQUE7d0JBQUFDLFdBQUE7d0JBQUFDLFdBQUE7d0JBQUNFLElBQUk7d0JBQU1DLFdBQVc7d0JBQVVDLGNBQWE7d0JBQVNDLFFBQVE7NEJBQUNDLFFBQU87NEJBQUtDLE9BQU87NEJBQUtDLEtBQUs7d0JBQXlDOzs7Ozs7a0NBQzNJLDhEQUFDaEMsMENBQU1BO3dCQUFBc0IsV0FBQTt3QkFBQUMsV0FBQTt3QkFBQUMsV0FBQTt3QkFBQ0UsSUFBSTtrQ0FDViw0RUFBQzNCLHlDQUFLQTs0QkFBQXVCLFdBQUE7NEJBQUFDLFdBQUE7NEJBQUFDLFdBQUE7NEJBQUNTLGFBQVk7NEJBQWNDLE9BQU8zQjs0QkFBTTRCLGNBQWVkLENBQUFBLElBQU1iLFFBQVFhOzs7Ozs7Ozs7OztrQ0FFN0UsOERBQUN6QixzQ0FBRUE7d0JBQUEwQixXQUFBO3dCQUFBQyxXQUFBO3dCQUFBQyxXQUFBO3dCQUFDRSxJQUFJOzs0QkFBTTs0QkFBYXJCOzs7Ozs7O2tDQUMzQiw4REFBQ0osOENBQVVBO3dCQUFBcUIsV0FBQTt3QkFBQUMsV0FBQTt3QkFBQUMsV0FBQTt3QkFBQ0UsSUFBSTt3QkFBSVUsR0FBRzt3QkFBSUMsV0FBVztrQ0FDbkM1QixVQUFVNkIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNwQiw4REFBQ3hDLDBDQUFNQTtnQ0FBQXNCLFdBQUE7Z0NBQUFDLFdBQUE7Z0NBQUFDLFdBQUE7Z0NBQWFpQixnQkFBZTtnQ0FBZ0JoQixZQUFXOztrREFDNUQsOERBQUN2Qix3Q0FBSUE7d0NBQUFvQixXQUFBO3dDQUFBQyxXQUFBO3dDQUFBQyxXQUFBO2tEQUFFZSxLQUFLaEMsSUFBSTs7Ozs7O2tEQUNoQiw4REFBQ0wsd0NBQUlBO3dDQUFBb0IsV0FBQTt3Q0FBQUMsV0FBQTt3Q0FBQUMsV0FBQTtrREFBRWUsS0FBS2xDLEtBQUs7Ozs7Ozs7K0JBRk5tQzs7Ozs7Ozs7Ozs7Ozs7OzswQkFPbkIsOERBQUM5QywwQ0FBTUE7Z0JBQUE0QixXQUFBO2dCQUFBQyxXQUFBO2dCQUFBQyxXQUFBO2dCQUFDa0IsU0FBUyxJQUFNM0I7Z0JBQWdCVyxJQUFJOzBCQUFNOzs7Ozs7Ozs7Ozs7QUFHdkQ7R0EvRE10QjtLQUFBQTtBQWlFTiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi4vLi4vcGFja2FnZXMvYXBwL2ZlYXR1cmVzL2dhbWUvR2FtZU92ZXIudHN4P2I4ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgSDEsIEg1LCBZU3RhY2ssIEltYWdlLCBJbnB1dCwgWFN0YWNrLCBTY3JvbGxWaWV3LCBUZXh0IH0gZnJvbSAnQG15L3VpJztcbmltcG9ydCBBc3luY1N0b3JhZ2UgZnJvbSAnQHJlYWN0LW5hdGl2ZS1hc3luYy1zdG9yYWdlL2FzeW5jLXN0b3JhZ2UnO1xuXG5jb25zdCBHYW1lT3ZlciA9ICh7IHNjb3JlLCBoYW5kbGVSZXNldCB9KSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbc2NvcmVEYXRhLCBzZXRTY29yZURhdGFdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkTGFzdFNjb3JlTmFtZSgpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBhd2FpdCBBc3luY1N0b3JhZ2UuZ2V0SXRlbSgnbGFzdC1uYW1lLXNjb3JlJyk7XG4gICAgICBjb25zdCBzY29yZURhdGEgPSBhd2FpdCBBc3luY1N0b3JhZ2UuZ2V0SXRlbSgnZ2FtZS1zY29yZScpO1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgc2V0TmFtZShuYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNjb3JlRGF0YSkge1xuICAgICAgICBzZXRTY29yZURhdGEoSlNPTi5wYXJzZShzY29yZURhdGEpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbG9hZExhc3RTY29yZU5hbWUoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNhdmVBbmRSZXNldCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBnYW1lU2NvcmU7XG4gICAgICAgIGNvbnN0IHNjb3JlRGF0YSA9IGF3YWl0IEFzeW5jU3RvcmFnZS5nZXRJdGVtKCdnYW1lLXNjb3JlJyk7XG5cbiAgICAgICAgaWYgKHNjb3JlRGF0YSkge1xuICAgICAgICAgIGdhbWVTY29yZSA9IEpTT04ucGFyc2Uoc2NvcmVEYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnYW1lU2NvcmUgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdhbWVTY29yZS5wdXNoKHtzY29yZTpzY29yZSwgbmFtZTogbmFtZSwgZGF0ZTpuZXcgRGF0ZSgpfSk7XG4gICAgICAgIGF3YWl0IEFzeW5jU3RvcmFnZS5zZXRJdGVtKCdnYW1lLXNjb3JlJywgZ2FtZVNjb3JlKTtcbiAgICAgICAgYXdhaXQgQXN5bmNTdG9yYWdlLnNldEl0ZW0oJ2xhc3QtbmFtZS1zY29yZScsIG5hbWUpO1xuXG4gICAgICAgIHNldFNjb3JlRGF0YShnYW1lU2NvcmUpXG4gICAgICAgIFxuICAgICAgfSBjYXRjaCAoZSkge1xuXG4gICAgICB9XG5cbiAgICAgIGhhbmRsZVJlc2V0KClcbiAgfVxuICByZXR1cm4gKFxuICAgIDxZU3RhY2s+XG4gICAgICA8SDE+R2FtZSBPdmVyPC9IMT5cbiAgICAgIDxZU3RhY2sgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICA8SW1hZ2UgbXQ9eyckMid9IGFuaW1hdGlvbj17J2JvdW5jeSd9IGFsaWduQ29udGVudD1cImNlbnRlclwiIHNvdXJjZT17e2hlaWdodDoxMDAsIHdpZHRoOiAxMDAsIHVyaTogXCJodHRwczovL2kuaWJiLmNvL2hZNFp2Uk4vcm9ib3QtZGllZC5wbmdcIn19Lz5cbiAgICAgICAgPFhTdGFjayBtdD17MjB9PlxuICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZS4uXCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlVGV4dD17KGUpID0+IHNldE5hbWUoZSl9IC8+XG4gICAgICAgIDwvWFN0YWNrPlxuICAgICAgICA8SDUgbXQ9eyckNSd9PllvdXIgU2NvcmU6IHtzY29yZX08L0g1PlxuICAgICAgICA8U2Nyb2xsVmlldyBtdD17MTV9IHA9ezEwfSBtYXhIZWlnaHQ9ezIwMH0+XG4gICAgICAgICAge3Njb3JlRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8WFN0YWNrIGtleT17aW5kZXh9IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPFRleHQ+e2l0ZW0ubmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0PntpdGVtLnNjb3JlfTwvVGV4dD5cbiAgICAgICAgICAgIDwvWFN0YWNrPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1Njcm9sbFZpZXc+XG4gICAgICA8L1lTdGFjaz5cbiAgICAgIDxCdXR0b24gb25QcmVzcz17KCkgPT4gc2F2ZUFuZFJlc2V0KCl9IG10PXsnJDQnfT5SZXN0YXJ0PC9CdXR0b24+XG4gICAgPC9ZU3RhY2s+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lT3ZlcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJ1dHRvbiIsIkgxIiwiSDUiLCJZU3RhY2siLCJJbWFnZSIsIklucHV0IiwiWFN0YWNrIiwiU2Nyb2xsVmlldyIsIlRleHQiLCJBc3luY1N0b3JhZ2UiLCJHYW1lT3ZlciIsInNjb3JlIiwiaGFuZGxlUmVzZXQiLCJuYW1lIiwic2V0TmFtZSIsInNjb3JlRGF0YSIsInNldFNjb3JlRGF0YSIsImxvYWRMYXN0U2NvcmVOYW1lIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNhdmVBbmRSZXNldCIsImdhbWVTY29yZSIsInB1c2giLCJkYXRlIiwiRGF0ZSIsInNldEl0ZW0iLCJlIiwiZGF0YS1hdCIsImRhdGEtaW4iLCJkYXRhLWlzIiwiYWxpZ25JdGVtcyIsIm10IiwiYW5pbWF0aW9uIiwiYWxpZ25Db250ZW50Iiwic291cmNlIiwiaGVpZ2h0Iiwid2lkdGgiLCJ1cmkiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2VUZXh0IiwicCIsIm1heEhlaWdodCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImp1c3RpZnlDb250ZW50Iiwib25QcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../packages/app/features/game/GameOver.tsx\n"));

/***/ })

});