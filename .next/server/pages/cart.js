/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/cart";
exports.ids = ["pages/cart"];
exports.modules = {

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CartPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/cart */ \"./context/cart.js\");\n\nvar _jsxFileName = \"/home/alekto/WebDevelopmentTraining/nextjs-commercejs-example/pages/cart.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction CartItem({\n  name,\n  quantity,\n  line_total\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: quantity\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: line_total.formatted_with_symbol\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}\n\nfunction CartPage() {\n  const {\n    line_items,\n    subtotal\n  } = (0,_context_cart__WEBPACK_IMPORTED_MODULE_1__.useCartState)();\n  const isEmpty = line_items.length === 0; //    const isEmpty = !line_items ? true:false;\n\n  if (isEmpty) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Your cart is empty\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 25\n  }, this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Cart\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, this), line_items.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItem, _objectSpread({}, item), item.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n        children: \"Sub total\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 16\n      }, this), subtotal.formatted_with_symbol]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY29tbWVyY2Vqcy1leGFtcGxlLy4vcGFnZXMvY2FydC5qcz82MTAzIl0sIm5hbWVzIjpbIkNhcnRJdGVtIiwibmFtZSIsInF1YW50aXR5IiwibGluZV90b3RhbCIsImZvcm1hdHRlZF93aXRoX3N5bWJvbCIsIkNhcnRQYWdlIiwibGluZV9pdGVtcyIsInN1YnRvdGFsIiwidXNlQ2FydFN0YXRlIiwiaXNFbXB0eSIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLFNBQVNBLFFBQVQsQ0FBa0I7QUFBQ0MsTUFBRDtBQUFPQyxVQUFQO0FBQWlCQztBQUFqQixDQUFsQixFQUFnRDtBQUM1QyxzQkFDSTtBQUFBLDRCQUNJO0FBQUEsZ0JBQUlGO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSxnQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFBLGdCQUFJQyxVQUFVLENBQUNDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBT0g7O0FBRWMsU0FBU0MsUUFBVCxHQUFvQjtBQUMvQixRQUFNO0FBQUVDLGNBQUY7QUFBY0M7QUFBZCxNQUEyQkMsMkRBQVksRUFBN0M7QUFFQSxRQUFNQyxPQUFPLEdBQUdILFVBQVUsQ0FBQ0ksTUFBWCxLQUFzQixDQUF0QyxDQUgrQixDQUluQzs7QUFFSSxNQUFJRCxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUViLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUdLSCxVQUFVLENBQUNLLEdBQVgsQ0FBZ0JDLElBQUksaUJBQ3JCLDhEQUFDLFFBQUQsb0JBQTRCQSxJQUE1QixHQUFlQSxJQUFJLENBQUNDLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQyxDQUhMLGVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLGVBU0k7QUFBQSw4QkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFILEVBQThCTixRQUFRLENBQUNILHFCQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWVIIiwiZmlsZSI6Ii4vcGFnZXMvY2FydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQ2FydFN0YXRlfSBmcm9tICcuLi9jb250ZXh0L2NhcnQnXG5cblxuZnVuY3Rpb24gQ2FydEl0ZW0oe25hbWUsIHF1YW50aXR5LCBsaW5lX3RvdGFsfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD57bmFtZX08L3A+XG4gICAgICAgICAgICA8cD57cXVhbnRpdHl9PC9wPlxuICAgICAgICAgICAgPHA+e2xpbmVfdG90YWwuZm9ybWF0dGVkX3dpdGhfc3ltYm9sfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0UGFnZSgpIHtcbiAgICBjb25zdCB7IGxpbmVfaXRlbXMsIHN1YnRvdGFsIH0gPSB1c2VDYXJ0U3RhdGUoKTtcblxuICAgIGNvbnN0IGlzRW1wdHkgPSBsaW5lX2l0ZW1zLmxlbmd0aCA9PT0gMFxuLy8gICAgY29uc3QgaXNFbXB0eSA9ICFsaW5lX2l0ZW1zID8gdHJ1ZTpmYWxzZTtcblxuICAgIGlmIChpc0VtcHR5KSByZXR1cm4gPHA+WW91ciBjYXJ0IGlzIGVtcHR5PC9wPjtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+Q2FydDwvaDE+XG5cbiAgICAgICAgICAgIHtsaW5lX2l0ZW1zLm1hcCgoaXRlbSA9PiBcbiAgICAgICAgICAgIDxDYXJ0SXRlbSBrZXk9e2l0ZW0uaWR9IHsuLi5pdGVtfSAvPlxuICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgIDxociAvPlxuXG4gICAgICAgICAgICA8cD48c3Ryb25nPlN1YiB0b3RhbDwvc3Ryb25nPntzdWJ0b3RhbC5mb3JtYXR0ZWRfd2l0aF9zeW1ib2x9PC9wPiAgICBcblxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cart.js\n");

/***/ }),

/***/ "@chec/commerce.js":
/*!************************************!*\
  !*** external "@chec/commerce.js" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chec/commerce.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["context_cart_js"], function() { return __webpack_exec__("./pages/cart.js"); });
module.exports = __webpack_exports__;

})();