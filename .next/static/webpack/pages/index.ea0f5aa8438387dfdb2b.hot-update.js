webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);








var _jsxFileName = "W:\\REACT-NEXTJS\\components\\Prices.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Prices = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Prices, _React$Component);

  var _super = _createSuper(Prices);

  function Prices() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Prices);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      currency: 'GBP'
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Prices, [{
    key: "render",
    value: function render() {
      var list = '';

      if (this.state.currency === 'USD') {
        list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
          className: "list-group-item",
          children: ["Bitcoin rate for ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
            children: [" ", this.props.bpi.USD.description, " :"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 37
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
            className: "badge badge-primary",
            children: this.props.bpi.USD.code
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
            children: this.props.bpi.USD.rate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 23
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 20
        }, this);
      } else if (this.state.currency === 'GBP') {
        list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
          className: "list-group-item",
          children: ["Bitcoin rate for ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
            children: [" ", this.props.bpi.GBP.description, " :"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 38
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
            className: "badge badge-primary",
            children: this.props.bpi.GBP.code
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
            children: this.props.bpi.GBP.rate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 20
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 20
        }, this);
      } else if (this.state.currency === 'EUR') {
        list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
          className: "list-group-item",
          children: ["Bitcoin rate for ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
            children: [" ", this.props.bpi.EUR.description, " :"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 34
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
            className: "badge badge-primary",
            children: this.props.bpi.EUR.code
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
            children: this.props.bpi.EUR.rate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 20
        }, this);
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("ul", {
          className: "list-group",
          children: list
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("select", {
          name: "",
          id: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, this);
    }
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prices);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwiY3VycmVuY3kiLCJsaXN0Iiwic3RhdGUiLCJwcm9wcyIsImJwaSIsIlVTRCIsImRlc2NyaXB0aW9uIiwiY29kZSIsInJhdGUiLCJHQlAiLCJFVVIiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBQ01BLE07Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ007QUFDSkMsY0FBUSxFQUFHO0FBRFAsSzs7Ozs7Ozs2QkFHQztBQUNMLFVBQUlDLElBQUksR0FBRyxFQUFYOztBQUVBLFVBQUcsS0FBS0MsS0FBTCxDQUFXRixRQUFYLEtBQXdCLEtBQTNCLEVBQWlDO0FBQzdCQyxZQUFJLGdCQUFHO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBLHVEQUNpQjtBQUFBLDRCQUFVLEtBQUtFLEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxHQUFmLENBQW1CQyxXQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRGpCLGVBRUM7QUFBTSxxQkFBUyxFQUFDLHFCQUFoQjtBQUFBLHNCQUF1QyxLQUFLSCxLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkU7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRCxlQUdHO0FBQUEsc0JBQVMsS0FBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJHO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQO0FBS0gsT0FORCxNQU1NLElBQUcsS0FBS04sS0FBTCxDQUFXRixRQUFYLEtBQXdCLEtBQTNCLEVBQWlDO0FBQ25DQyxZQUFJLGdCQUFHO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBLHVEQUNrQjtBQUFBLDRCQUFVLEtBQUtFLEtBQUwsQ0FBV0MsR0FBWCxDQUFlSyxHQUFmLENBQW1CSCxXQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRGxCLGVBRUM7QUFBTSxxQkFBUyxFQUFDLHFCQUFoQjtBQUFBLHNCQUF1QyxLQUFLSCxLQUFMLENBQVdDLEdBQVgsQ0FBZUssR0FBZixDQUFtQkY7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRCxlQUdBO0FBQUEsc0JBQVMsS0FBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVLLEdBQWYsQ0FBbUJEO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQO0FBS0gsT0FOSyxNQU1BLElBQUcsS0FBS04sS0FBTCxDQUFXRixRQUFYLEtBQXdCLEtBQTNCLEVBQWlDO0FBQ25DQyxZQUFJLGdCQUFHO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBLHVEQUNjO0FBQUEsNEJBQVUsS0FBS0UsS0FBTCxDQUFXQyxHQUFYLENBQWVNLEdBQWYsQ0FBbUJKLFdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEZCxlQUVIO0FBQU0scUJBQVMsRUFBQyxxQkFBaEI7QUFBQSxzQkFBdUMsS0FBS0gsS0FBTCxDQUFXQyxHQUFYLENBQWVNLEdBQWYsQ0FBbUJIO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkcsZUFHSDtBQUFBLHNCQUFTLEtBQUtKLEtBQUwsQ0FBV0MsR0FBWCxDQUFlTSxHQUFmLENBQW1CRjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQUtIOztBQUVELDBCQUNJO0FBQUEsZ0NBQ0k7QUFBSSxtQkFBUyxFQUFDLFlBQWQ7QUFBQSxvQkFDT1A7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQU1JO0FBQVEsY0FBSSxFQUFDLEVBQWI7QUFBZ0IsWUFBRSxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFVSDs7OztFQXJDZ0JVLDRDQUFLLENBQUNDLFM7O0FBd0NaYixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYTBmNWFhODQzODM4N2RmZGIyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5jbGFzcyBQcmljZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgY3VycmVuY3kgOiAnR0JQJ1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBsaXN0ID0gJyc7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdVU0QnKXtcclxuICAgICAgICAgICAgbGlzdCA9IDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3IgPHN0cm9uZz4ge3RoaXMucHJvcHMuYnBpLlVTRC5kZXNjcmlwdGlvbn0gOjwvc3Ryb25nPiBcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e3RoaXMucHJvcHMuYnBpLlVTRC5jb2RlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLlVTRC5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnR0JQJyl7XHJcbiAgICAgICAgICAgIGxpc3QgPSA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQml0Y29pbiByYXRlIGZvciA8c3Ryb25nPiB7dGhpcy5wcm9wcy5icGkuR0JQLmRlc2NyaXB0aW9ufSA6PC9zdHJvbmc+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57dGhpcy5wcm9wcy5icGkuR0JQLmNvZGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuR0JQLnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnRVVSJyl7XHJcbiAgICAgICAgICAgIGxpc3QgPSA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICBCaXRjb2luIHJhdGUgZm9yIDxzdHJvbmc+IHt0aGlzLnByb3BzLmJwaS5FVVIuZGVzY3JpcHRpb259IDo8L3N0cm9uZz4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e3RoaXMucHJvcHMuYnBpLkVVUi5jb2RlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLkVVUi5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtsaXN0fVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiXCIgaWQ9XCJcIj48L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZXNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==