/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CartPage; }\n/* harmony export */ });\n/* harmony import */ var _home_alekto_WebDevelopmentTraining_nextjs_commercejs_example_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/cart */ \"./context/cart.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/alekto/WebDevelopmentTraining/nextjs-commercejs-example/pages/cart.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_alekto_WebDevelopmentTraining_nextjs_commercejs_example_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction CartItem(name, quantity, line_total) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: quantity\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: line_total\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}\n\n_c = CartItem;\nfunction CartPage() {\n  _s();\n\n  var _this = this;\n\n  var _useCartState = (0,_context_cart__WEBPACK_IMPORTED_MODULE_2__.useCartState)(),\n      line_items = _useCartState.line_items,\n      subtotal = _useCartState.subtotal;\n\n  var isEmpty = !line_items ? true : false;\n  if (isEmpty) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n    children: \"Your cart is empty\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 25\n  }, this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: \"Cart\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this), line_items.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CartItem, _objectSpread({}, item), item.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }, _this);\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n        children: \"Sub total\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 16\n      }, this), subtotal]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, this);\n}\n\n_s(CartPage, \"IBiFZSQVSWI7wDb+Rf07tlD22EI=\", false, function () {\n  return [_context_cart__WEBPACK_IMPORTED_MODULE_2__.useCartState];\n});\n\n_c2 = CartPage;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CartItem\");\n$RefreshReg$(_c2, \"CartPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC5qcz82MTAzIl0sIm5hbWVzIjpbIkNhcnRJdGVtIiwibmFtZSIsInF1YW50aXR5IiwibGluZV90b3RhbCIsIkNhcnRQYWdlIiwidXNlQ2FydFN0YXRlIiwibGluZV9pdGVtcyIsInN1YnRvdGFsIiwiaXNFbXB0eSIsIm1hcCIsIml0ZW0iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLFNBQVNBLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCQyxRQUF4QixFQUFrQ0MsVUFBbEMsRUFBOEM7QUFDMUMsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLGdCQUFJRjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsZ0JBQUlDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQSxnQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFPSDs7S0FSUUgsUTtBQVVNLFNBQVNJLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFBQSxzQkFDRUMsMkRBQVksRUFEZDtBQUFBLE1BQ3ZCQyxVQUR1QixpQkFDdkJBLFVBRHVCO0FBQUEsTUFDWEMsUUFEVyxpQkFDWEEsUUFEVzs7QUFHL0IsTUFBTUMsT0FBTyxHQUFHLENBQUNGLFVBQUQsR0FBYyxJQUFkLEdBQW1CLEtBQW5DO0FBRUEsTUFBSUUsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFFYixzQkFDSTtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFHS0YsVUFBVSxDQUFDRyxHQUFYLENBQWdCLFVBQUFDLElBQUk7QUFBQSwwQkFDckIsOERBQUMsUUFBRCxvQkFBNEJBLElBQTVCLEdBQWVBLElBQUksQ0FBQ0MsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURxQjtBQUFBLEtBQXBCLENBSEwsZUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFTSTtBQUFBLDhCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUgsRUFBOEJKLFFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZUg7O0dBdEJ1QkgsUTtVQUNhQyx1RDs7O01BRGJELFEiLCJmaWxlIjoiLi9wYWdlcy9jYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDYXJ0U3RhdGV9IGZyb20gJy4uL2NvbnRleHQvY2FydCdcblxuXG5mdW5jdGlvbiBDYXJ0SXRlbShuYW1lLCBxdWFudGl0eSwgbGluZV90b3RhbCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD57bmFtZX08L3A+XG4gICAgICAgICAgICA8cD57cXVhbnRpdHl9PC9wPlxuICAgICAgICAgICAgPHA+e2xpbmVfdG90YWx9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnRQYWdlKCkge1xuICAgIGNvbnN0IHsgbGluZV9pdGVtcywgc3VidG90YWwgfSA9IHVzZUNhcnRTdGF0ZSgpO1xuXG4gICAgY29uc3QgaXNFbXB0eSA9ICFsaW5lX2l0ZW1zID8gdHJ1ZTpmYWxzZTtcblxuICAgIGlmIChpc0VtcHR5KSByZXR1cm4gPHA+WW91ciBjYXJ0IGlzIGVtcHR5PC9wPjtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+Q2FydDwvaDE+XG5cbiAgICAgICAgICAgIHtsaW5lX2l0ZW1zLm1hcCgoaXRlbSA9PiBcbiAgICAgICAgICAgIDxDYXJ0SXRlbSBrZXk9e2l0ZW0uaWR9IHsuLi5pdGVtfSAvPlxuICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgIDxociAvPlxuXG4gICAgICAgICAgICA8cD48c3Ryb25nPlN1YiB0b3RhbDwvc3Ryb25nPntzdWJ0b3RhbH08L3A+ICAgIFxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgICBcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cart.js\n");

/***/ })

});