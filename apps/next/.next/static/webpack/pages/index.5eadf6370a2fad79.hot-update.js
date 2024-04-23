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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _my_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @my/ui */ \"../../packages/ui/src/index.tsx\");\n/* harmony import */ var _react_native_async_storage_async_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-native-async-storage/async-storage */ \"../../node_modules/@react-native-async-storage/async-storage/lib/module/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst GameOver = (param)=>{\n    let { score, handleReset } = param;\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [scoreData, setScoreData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function loadLastScoreName() {\n            const name = await _react_native_async_storage_async_storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getItem(\"last-name-score\");\n            if (name) {\n                setName(name);\n            }\n            const scoreDataStorage = await _react_native_async_storage_async_storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getItem(\"game-score\");\n            if (scoreDataStorage != null) {\n                const scoreSataPaesed = JSON.parse(scoreDataStorage);\n                setScoreData(scoreSataPaesed);\n            }\n        }\n        loadLastScoreName();\n    }, []);\n    const saveAndReset = async ()=>{\n        try {\n            let gameScore;\n            const scoreData = await _react_native_async_storage_async_storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getItem(\"game-score\");\n            if (scoreData) {\n                gameScore = JSON.parse(scoreData);\n            } else {\n                gameScore = [];\n            }\n            gameScore.push({\n                score: score,\n                name: name,\n                date: new Date()\n            });\n            await _react_native_async_storage_async_storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setItem(\"game-score\", JSON.stringify(gameScore));\n            await _react_native_async_storage_async_storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setItem(\"last-name-score\", name);\n            setScoreData(gameScore);\n        } catch (e) {}\n        handleReset();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.YStack, {\n        \"data-at\": \"GameOver.tsx:49\",\n        \"data-in\": \"GameOver\",\n        \"data-is\": \"YStack\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.H1, {\n                \"data-at\": \"GameOver.tsx:50\",\n                \"data-in\": \"GameOver\",\n                \"data-is\": \"H1\",\n                children: \"Game Over\"\n            }, void 0, false, {\n                fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.YStack, {\n                \"data-at\": \"GameOver.tsx:51\",\n                \"data-in\": \"GameOver\",\n                \"data-is\": \"YStack\",\n                alignItems: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                        \"data-at\": \"GameOver.tsx:52\",\n                        \"data-in\": \"GameOver\",\n                        \"data-is\": \"Image\",\n                        mt: \"$2\",\n                        animation: \"bouncy\",\n                        alignContent: \"center\",\n                        source: {\n                            height: 100,\n                            width: 100,\n                            uri: \"https://i.ibb.co/hY4ZvRN/robot-died.png\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.XStack, {\n                        \"data-at\": \"GameOver.tsx:53\",\n                        \"data-in\": \"GameOver\",\n                        \"data-is\": \"XStack\",\n                        mt: 20,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                            \"data-at\": \"GameOver.tsx:54\",\n                            \"data-in\": \"GameOver\",\n                            \"data-is\": \"Input\",\n                            placeholder: \"Your name..\",\n                            value: name,\n                            onChangeText: (e)=>setName(e)\n                        }, void 0, false, {\n                            fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.H5, {\n                        \"data-at\": \"GameOver.tsx:56\",\n                        \"data-in\": \"GameOver\",\n                        \"data-is\": \"H5\",\n                        mt: \"$5\",\n                        children: [\n                            \"Your Score: \",\n                            score\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.ScrollView, {\n                        \"data-at\": \"GameOver.tsx:57\",\n                        \"data-in\": \"GameOver\",\n                        \"data-is\": \"ScrollView\",\n                        mt: 15,\n                        p: 10,\n                        maxHeight: 200,\n                        children: scoreData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.XStack, {\n                                \"data-at\": \"GameOver.tsx:59\",\n                                \"data-in\": \"GameOver\",\n                                \"data-is\": \"XStack\",\n                                justifyContent: \"space-between\",\n                                alignItems: \"center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                        \"data-at\": \"GameOver.tsx:60\",\n                                        \"data-in\": \"GameOver\",\n                                        \"data-is\": \"Text\",\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                        \"data-at\": \"GameOver.tsx:61\",\n                                        \"data-in\": \"GameOver\",\n                                        \"data-is\": \"Text\",\n                                        children: item.score\n                                    }, void 0, false, {\n                                        fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 43\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_my_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                \"data-at\": \"GameOver.tsx:66\",\n                \"data-in\": \"GameOver\",\n                \"data-is\": \"Button\",\n                onPress: ()=>saveAndReset(),\n                mt: \"$4\",\n                children: \"Restart\"\n            }, void 0, false, {\n                fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/herson/glasscanvas/robotgame5/glasscanvas/packages/app/features/game/GameOver.tsx\",\n        lineNumber: 44,\n        columnNumber: 10\n    }, undefined);\n};\n_s(GameOver, \"YNkDSf31gLMhQYdmPKgV2ew0F10=\");\n_c = GameOver;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameOver);\nvar _c;\n$RefreshReg$(_c, \"GameOver\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvYXBwL2ZlYXR1cmVzL2dhbWUvR2FtZU92ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUM0QztBQUNuQjtBQUVwRSxNQUFNWSxXQUFXQTtRQUFDLEVBQUVDLEtBQUssRUFBRUMsV0FBQUEsRUFBYTs7SUFDdEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNpQixXQUFXQyxhQUFhLEdBQUdsQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTdDQyxnREFBU0EsQ0FBQztRQUNSLGVBQWVrQjtZQUNiLE1BQU1KLE9BQU8sTUFBTUoseUZBQW9CLENBQUM7WUFDeEMsSUFBSUksTUFBTTtnQkFDUkMsUUFBUUQ7WUFDVjtZQUVBLE1BQU1NLG1CQUFtQixNQUFNVix5RkFBb0IsQ0FBQztZQUNwRCxJQUFJVSxvQkFBb0IsTUFBTTtnQkFDNUIsTUFBTUMsa0JBQWtCQyxLQUFLQyxLQUFLLENBQUNIO2dCQUNuQ0gsYUFBYUk7WUFDZjtRQUNGO1FBQ0FIO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTU0sZUFBZTtRQUNqQixJQUFJO1lBQ0YsSUFBSUM7WUFDSixNQUFNVCxZQUFZLE1BQU1OLHlGQUFvQixDQUFDO1lBRTdDLElBQUlNLFdBQVc7Z0JBQ2JTLFlBQVlILEtBQUtDLEtBQUssQ0FBQ1A7WUFDekIsT0FBTztnQkFDTFMsWUFBWSxFQUFFO1lBQ2hCO1lBRUFBLFVBQVVDLElBQUksQ0FBQztnQkFBQ2QsT0FBTUE7Z0JBQU9FLE1BQU1BO2dCQUFNYSxNQUFLLElBQUlDO1lBQU07WUFDeEQsTUFBTWxCLHlGQUFvQixDQUFDLGNBQWNZLEtBQUtRLFNBQVMsQ0FBQ0w7WUFDeEQsTUFBTWYseUZBQW9CLENBQUMsbUJBQW1CSTtZQUU5Q0csYUFBYVE7UUFFZixFQUFFLE9BQU9NLEdBQUcsQ0FFWjtRQUVBbEI7SUFDSjtJQUNBLHFCQUNFLDhEQUFDVCwwQ0FBTUE7UUFBQTRCLFdBQUE7UUFBQUMsV0FBQTtRQUFBQyxXQUFBOzswQkFDTCw4REFBQ2hDLHNDQUFFQTtnQkFBQThCLFdBQUE7Z0JBQUFDLFdBQUE7Z0JBQUFDLFdBQUE7MEJBQUM7Ozs7OzswQkFDSiw4REFBQzlCLDBDQUFNQTtnQkFBQTRCLFdBQUE7Z0JBQUFDLFdBQUE7Z0JBQUFDLFdBQUE7Z0JBQUNDLFlBQVc7O2tDQUNqQiw4REFBQzlCLHlDQUFLQTt3QkFBQTJCLFdBQUE7d0JBQUFDLFdBQUE7d0JBQUFDLFdBQUE7d0JBQUNFLElBQUk7d0JBQU1DLFdBQVc7d0JBQVVDLGNBQWE7d0JBQVNDLFFBQVE7NEJBQUNDLFFBQU87NEJBQUtDLE9BQU87NEJBQUtDLEtBQUs7d0JBQXlDOzs7Ozs7a0NBQzNJLDhEQUFDbkMsMENBQU1BO3dCQUFBeUIsV0FBQTt3QkFBQUMsV0FBQTt3QkFBQUMsV0FBQTt3QkFBQ0UsSUFBSTtrQ0FDViw0RUFBQzlCLHlDQUFLQTs0QkFBQTBCLFdBQUE7NEJBQUFDLFdBQUE7NEJBQUFDLFdBQUE7NEJBQUNTLGFBQVk7NEJBQWNDLE9BQU85Qjs0QkFBTStCLGNBQWVkLENBQUFBLElBQU1oQixRQUFRZ0I7Ozs7Ozs7Ozs7O2tDQUU3RSw4REFBQzVCLHNDQUFFQTt3QkFBQTZCLFdBQUE7d0JBQUFDLFdBQUE7d0JBQUFDLFdBQUE7d0JBQUNFLElBQUk7OzRCQUFNOzRCQUFheEI7Ozs7Ozs7a0NBQzNCLDhEQUFDSiw4Q0FBVUE7d0JBQUF3QixXQUFBO3dCQUFBQyxXQUFBO3dCQUFBQyxXQUFBO3dCQUFDRSxJQUFJO3dCQUFJVSxHQUFHO3dCQUFJQyxXQUFXO2tDQUNuQy9CLFVBQVVnQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3BCLDhEQUFDM0MsMENBQU1BO2dDQUFBeUIsV0FBQTtnQ0FBQUMsV0FBQTtnQ0FBQUMsV0FBQTtnQ0FBYWlCLGdCQUFlO2dDQUFnQmhCLFlBQVc7O2tEQUM1RCw4REFBQzFCLHdDQUFJQTt3Q0FBQXVCLFdBQUE7d0NBQUFDLFdBQUE7d0NBQUFDLFdBQUE7a0RBQUVlLEtBQUtuQyxJQUFJOzs7Ozs7a0RBQ2hCLDhEQUFDTCx3Q0FBSUE7d0NBQUF1QixXQUFBO3dDQUFBQyxXQUFBO3dDQUFBQyxXQUFBO2tEQUFFZSxLQUFLckMsS0FBSzs7Ozs7OzsrQkFGTnNDOzs7Ozs7Ozs7Ozs7Ozs7OzBCQU9uQiw4REFBQ2pELDBDQUFNQTtnQkFBQStCLFdBQUE7Z0JBQUFDLFdBQUE7Z0JBQUFDLFdBQUE7Z0JBQUNrQixTQUFTLElBQU01QjtnQkFBZ0JZLElBQUk7MEJBQU07Ozs7Ozs7Ozs7OztBQUd2RDtHQWhFTXpCO0tBQUFBO0FBa0VOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9wYWNrYWdlcy9hcHAvZmVhdHVyZXMvZ2FtZS9HYW1lT3Zlci50c3g/YjhkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBIMSwgSDUsIFlTdGFjaywgSW1hZ2UsIElucHV0LCBYU3RhY2ssIFNjcm9sbFZpZXcsIFRleHQgfSBmcm9tICdAbXkvdWknO1xuaW1wb3J0IEFzeW5jU3RvcmFnZSBmcm9tICdAcmVhY3QtbmF0aXZlLWFzeW5jLXN0b3JhZ2UvYXN5bmMtc3RvcmFnZSc7XG5cbmNvbnN0IEdhbWVPdmVyID0gKHsgc2NvcmUsIGhhbmRsZVJlc2V0IH0pID0+IHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtzY29yZURhdGEsIHNldFNjb3JlRGF0YV0gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRMYXN0U2NvcmVOYW1lKCkge1xuICAgICAgY29uc3QgbmFtZSA9IGF3YWl0IEFzeW5jU3RvcmFnZS5nZXRJdGVtKCdsYXN0LW5hbWUtc2NvcmUnKTtcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHNldE5hbWUobmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjb3JlRGF0YVN0b3JhZ2UgPSBhd2FpdCBBc3luY1N0b3JhZ2UuZ2V0SXRlbSgnZ2FtZS1zY29yZScpO1xuICAgICAgaWYgKHNjb3JlRGF0YVN0b3JhZ2UgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzY29yZVNhdGFQYWVzZWQgPSBKU09OLnBhcnNlKHNjb3JlRGF0YVN0b3JhZ2UpO1xuICAgICAgICBzZXRTY29yZURhdGEoc2NvcmVTYXRhUGFlc2VkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbG9hZExhc3RTY29yZU5hbWUoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNhdmVBbmRSZXNldCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBnYW1lU2NvcmU7XG4gICAgICAgIGNvbnN0IHNjb3JlRGF0YSA9IGF3YWl0IEFzeW5jU3RvcmFnZS5nZXRJdGVtKCdnYW1lLXNjb3JlJyk7XG5cbiAgICAgICAgaWYgKHNjb3JlRGF0YSkge1xuICAgICAgICAgIGdhbWVTY29yZSA9IEpTT04ucGFyc2Uoc2NvcmVEYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnYW1lU2NvcmUgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdhbWVTY29yZS5wdXNoKHtzY29yZTpzY29yZSwgbmFtZTogbmFtZSwgZGF0ZTpuZXcgRGF0ZSgpfSk7XG4gICAgICAgIGF3YWl0IEFzeW5jU3RvcmFnZS5zZXRJdGVtKCdnYW1lLXNjb3JlJywgSlNPTi5zdHJpbmdpZnkoZ2FtZVNjb3JlKSk7XG4gICAgICAgIGF3YWl0IEFzeW5jU3RvcmFnZS5zZXRJdGVtKCdsYXN0LW5hbWUtc2NvcmUnLCBuYW1lKTtcblxuICAgICAgICBzZXRTY29yZURhdGEoZ2FtZVNjb3JlKVxuICAgICAgICBcbiAgICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgICAgfVxuXG4gICAgICBoYW5kbGVSZXNldCgpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8WVN0YWNrPlxuICAgICAgPEgxPkdhbWUgT3ZlcjwvSDE+XG4gICAgICA8WVN0YWNrIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgPEltYWdlIG10PXsnJDInfSBhbmltYXRpb249eydib3VuY3knfSBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIiBzb3VyY2U9e3toZWlnaHQ6MTAwLCB3aWR0aDogMTAwLCB1cmk6IFwiaHR0cHM6Ly9pLmliYi5jby9oWTRadlJOL3JvYm90LWRpZWQucG5nXCJ9fS8+XG4gICAgICAgIDxYU3RhY2sgbXQ9ezIwfT5cbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWUuLlwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZVRleHQ9eyhlKSA9PiBzZXROYW1lKGUpfSAvPlxuICAgICAgICA8L1hTdGFjaz5cbiAgICAgICAgPEg1IG10PXsnJDUnfT5Zb3VyIFNjb3JlOiB7c2NvcmV9PC9INT5cbiAgICAgICAgPFNjcm9sbFZpZXcgbXQ9ezE1fSBwPXsxMH0gbWF4SGVpZ2h0PXsyMDB9PlxuICAgICAgICAgIHtzY29yZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFhTdGFjayBrZXk9e2luZGV4fSBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxUZXh0PntpdGVtLm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dD57aXRlbS5zY29yZX08L1RleHQ+XG4gICAgICAgICAgICA8L1hTdGFjaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TY3JvbGxWaWV3PlxuICAgICAgPC9ZU3RhY2s+XG4gICAgICA8QnV0dG9uIG9uUHJlc3M9eygpID0+IHNhdmVBbmRSZXNldCgpfSBtdD17JyQ0J30+UmVzdGFydDwvQnV0dG9uPlxuICAgIDwvWVN0YWNrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZU92ZXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJIMSIsIkg1IiwiWVN0YWNrIiwiSW1hZ2UiLCJJbnB1dCIsIlhTdGFjayIsIlNjcm9sbFZpZXciLCJUZXh0IiwiQXN5bmNTdG9yYWdlIiwiR2FtZU92ZXIiLCJzY29yZSIsImhhbmRsZVJlc2V0IiwibmFtZSIsInNldE5hbWUiLCJzY29yZURhdGEiLCJzZXRTY29yZURhdGEiLCJsb2FkTGFzdFNjb3JlTmFtZSIsImdldEl0ZW0iLCJzY29yZURhdGFTdG9yYWdlIiwic2NvcmVTYXRhUGFlc2VkIiwiSlNPTiIsInBhcnNlIiwic2F2ZUFuZFJlc2V0IiwiZ2FtZVNjb3JlIiwicHVzaCIsImRhdGUiLCJEYXRlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImUiLCJkYXRhLWF0IiwiZGF0YS1pbiIsImRhdGEtaXMiLCJhbGlnbkl0ZW1zIiwibXQiLCJhbmltYXRpb24iLCJhbGlnbkNvbnRlbnQiLCJzb3VyY2UiLCJoZWlnaHQiLCJ3aWR0aCIsInVyaSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZVRleHQiLCJwIiwibWF4SGVpZ2h0IiwibWFwIiwiaXRlbSIsImluZGV4IiwianVzdGlmeUNvbnRlbnQiLCJvblByZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../packages/app/features/game/GameOver.tsx\n"));

/***/ })

});