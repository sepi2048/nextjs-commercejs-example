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
exports.id = "pages/products/[permalink]";
exports.ids = ["pages/products/[permalink]"];
exports.modules = {

/***/ "./pages/products/[permalink].js":
/*!***************************************!*\
  !*** ./pages/products/[permalink].js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; },\n/* harmony export */   \"default\": function() { return /* binding */ ProductPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/commerce */ \"./lib/commerce.js\");\n/* harmony import */ var _context_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/cart */ \"./context/cart.js\");\n\nvar _jsxFileName = \"/home/alekto/WebDevelopmentTraining/nextjs-commercejs-example/pages/products/[permalink].js\";\n\n\n\nasync function getStaticProps({\n  params\n}) {\n  const {\n    permalink\n  } = params;\n  const product = await _lib_commerce__WEBPACK_IMPORTED_MODULE_2__.default.products.retrieve(permalink, {\n    type: 'permalink'\n  });\n  return {\n    props: {\n      product\n    }\n  };\n}\nasync function getStaticPaths() {\n  const {\n    data: products\n  } = await _lib_commerce__WEBPACK_IMPORTED_MODULE_2__.default.products.list();\n  return {\n    paths: products.map(product => ({\n      params: {\n        permalink: product.permalink\n      }\n    })),\n    fallback: false\n  };\n}\nfunction ProductPage({\n  product\n}) {\n  const {\n    setCart\n  } = (0,_context_cart__WEBPACK_IMPORTED_MODULE_3__.useCartDispatch)();\n\n  const addToCart = () => _lib_commerce__WEBPACK_IMPORTED_MODULE_2__.default.cart.add(product.id).then(({\n    cart\n  }) => setCart(cart));\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: product.price.formatted_with_symbol\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: addToCart,\n      children: \"Add to Cart\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY29tbWVyY2Vqcy1leGFtcGxlLy4vcGFnZXMvcHJvZHVjdHMvW3Blcm1hbGlua10uanM/NmVlYSJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInBlcm1hbGluayIsInByb2R1Y3QiLCJjb21tZXJjZSIsInR5cGUiLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwiZGF0YSIsInByb2R1Y3RzIiwicGF0aHMiLCJtYXAiLCJmYWxsYmFjayIsIlByb2R1Y3RQYWdlIiwic2V0Q2FydCIsInVzZUNhcnREaXNwYXRjaCIsImFkZFRvQ2FydCIsImlkIiwidGhlbiIsImNhcnQiLCJuYW1lIiwicHJpY2UiLCJmb3JtYXR0ZWRfd2l0aF9zeW1ib2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sZUFBZUEsY0FBZixDQUE4QjtBQUFDQztBQUFELENBQTlCLEVBQXdDO0FBRTNDLFFBQU07QUFBQ0M7QUFBRCxNQUFjRCxNQUFwQjtBQUVBLFFBQU1FLE9BQU8sR0FBRyxNQUFNQyxvRUFBQSxDQUEyQkYsU0FBM0IsRUFBc0M7QUFDeERHLFFBQUksRUFBRTtBQURrRCxHQUF0QyxDQUF0QjtBQUtBLFNBQU87QUFDSEMsU0FBSyxFQUFFO0FBQ0hIO0FBREc7QUFESixHQUFQO0FBTUg7QUFFTSxlQUFlSSxjQUFmLEdBQWdDO0FBQ25DLFFBQU07QUFBQ0MsUUFBSSxFQUFFQztBQUFQLE1BQW9CLE1BQU1MLGdFQUFBLEVBQWhDO0FBRUEsU0FBTztBQUNITSxTQUFLLEVBQUVELFFBQVEsQ0FBQ0UsR0FBVCxDQUFjUixPQUFELEtBQWM7QUFDOUJGLFlBQU0sRUFBRTtBQUNKQyxpQkFBUyxFQUFFQyxPQUFPLENBQUNEO0FBRGY7QUFEc0IsS0FBZCxDQUFiLENBREo7QUFNSFUsWUFBUSxFQUFFO0FBTlAsR0FBUDtBQVFIO0FBRWMsU0FBU0MsV0FBVCxDQUFxQjtBQUFDVjtBQUFELENBQXJCLEVBQWdDO0FBQzNDLFFBQU07QUFBQ1c7QUFBRCxNQUFZQyw4REFBZSxFQUFqQzs7QUFFQSxRQUFNQyxTQUFTLEdBQUcsTUFDZFosMkRBQUEsQ0FBa0JELE9BQU8sQ0FBQ2MsRUFBMUIsRUFBOEJDLElBQTlCLENBQW1DLENBQUM7QUFBQ0M7QUFBRCxHQUFELEtBQVlMLE9BQU8sQ0FBQ0ssSUFBRCxDQUF0RCxDQURKOztBQUdBLHNCQUNJLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0E7QUFBQSxnQkFBS2hCLE9BQU8sQ0FBQ2lCO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBRUE7QUFBQSxnQkFBSWpCLE9BQU8sQ0FBQ2tCLEtBQVIsQ0FBY0M7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBLGVBR0E7QUFBUSxhQUFPLEVBQUVOLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFPSCIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3RzL1twZXJtYWxpbmtdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNvbW1lcmNlIGZyb20gJy4uLy4uL2xpYi9jb21tZXJjZSdcbmltcG9ydCB7dXNlQ2FydERpc3BhdGNofSBmcm9tICcuLi8uLi9jb250ZXh0L2NhcnQnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSkge1xuXG4gICAgY29uc3Qge3Blcm1hbGlua30gPSBwYXJhbXM7XG5cbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgY29tbWVyY2UucHJvZHVjdHMucmV0cmlldmUocGVybWFsaW5rLCB7XG4gICAgICAgIHR5cGU6ICdwZXJtYWxpbmsnXG4gICAgfSlcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHByb2R1Y3QsXG4gICAgICAgIH0sXG4gICAgfTtcblxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgY29uc3Qge2RhdGE6IHByb2R1Y3RzIH0gPSBhd2FpdCBjb21tZXJjZS5wcm9kdWN0cy5saXN0KClcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzOiBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+ICh7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBwZXJtYWxpbms6IHByb2R1Y3QucGVybWFsaW5rLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSksXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0UGFnZSh7cHJvZHVjdH0pIHtcbiAgICBjb25zdCB7c2V0Q2FydH0gPSB1c2VDYXJ0RGlzcGF0Y2goKVxuXG4gICAgY29uc3QgYWRkVG9DYXJ0ID0gKCkgPT4gXG4gICAgICAgIGNvbW1lcmNlLmNhcnQuYWRkKHByb2R1Y3QuaWQpLnRoZW4oKHtjYXJ0fSkgPT4gc2V0Q2FydChjYXJ0KSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxoMT57cHJvZHVjdC5uYW1lfTwvaDE+XG4gICAgICAgIDxwPntwcm9kdWN0LnByaWNlLmZvcm1hdHRlZF93aXRoX3N5bWJvbH08L3A+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17YWRkVG9DYXJ0fT5BZGQgdG8gQ2FydDwvYnV0dG9uPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/[permalink].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["context_cart_js"], function() { return __webpack_exec__("./pages/products/[permalink].js"); });
module.exports = __webpack_exports__;

})();