webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar/Navbar */ "./components/Navbar/Navbar.js");


var _jsxFileName = "D:\\Cursos\\nextjs\\platzi-next\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();




var Home = function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      productList = _useState[0],
      setProductList = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch('./api/avo').then(function (response) {
      return response.json();
    }).then(function (_ref) {
      var data = _ref.data,
          length = _ref.length;
      return setProductList({
        data: data,
        length: length
      });
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Hola Platzi!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: JSON.stringify(productList)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_s(Home, "OqBFtcRPuEK5n5yG0OhgJizsaa8=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ3FCQyxzREFBUSxDQUFDLEVBQUQsQ0FEN0I7QUFBQSxNQUNWQyxXQURVO0FBQUEsTUFDR0MsY0FESDs7QUFHakJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxTQUFLLENBQUMsV0FBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUTtBQUFBLFVBQUdHLElBQUgsUUFBR0EsSUFBSDtBQUFBLFVBQVNDLE1BQVQsUUFBU0EsTUFBVDtBQUFBLGFBQXNCUCxjQUFjLENBQUM7QUFBRU0sWUFBSSxFQUFKQSxJQUFGO0FBQVFDLGNBQU0sRUFBTkE7QUFBUixPQUFELENBQXBDO0FBQUEsS0FGUjtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRTtBQUFBLGdCQUFLQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVYsV0FBZjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBaEJEOztHQUFNRixJOztLQUFBQSxJO0FBa0JTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZTU0YjZiZmJhZDU5NzY3YWQ2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaCgnLi9hcGkvYXZvJylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKCh7IGRhdGEsIGxlbmd0aCB9KSA9PiBzZXRQcm9kdWN0TGlzdCh7IGRhdGEsIGxlbmd0aCB9KSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8aDE+SG9sYSBQbGF0emkhPC9oMT5cclxuICAgICAgPGgxPntKU09OLnN0cmluZ2lmeShwcm9kdWN0TGlzdCl9PC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9