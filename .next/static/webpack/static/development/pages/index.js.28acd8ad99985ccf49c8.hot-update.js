webpackHotUpdate("static/development/pages/index.js",{

/***/ "./context/global.js":
/*!***************************!*\
  !*** ./context/global.js ***!
  \***************************/
/*! exports provided: GlobalStateContext, GlobalDispatchContext, GlobalContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStateContext", function() { return GlobalStateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalDispatchContext", function() { return GlobalDispatchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalContextProvider", function() { return GlobalContextProvider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @xstate/react */ "./node_modules/@xstate/react/lib/index.js");
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_xstate_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");

var _jsxFileName = "/Users/willbunting/Documents/Github/gznzc/context/global.js";



var GlobalStateContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var GlobalDispatchContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var globalMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_3__["Machine"])({
  id: "global",
  initial: "loggedOut",
  context: {
    userData: null
  },
  states: {
    loggedIn: {
      on: {
        LOGOUT: {
          target: "loggedOut",
          actions: "clearUserData"
        }
      }
    },
    loggedOut: {
      on: {
        LOGIN: {
          target: "loggedIn",
          actions: "setUserData"
        }
      }
    }
  }
}, {
  actions: {
    clearUserData: Object(xstate__WEBPACK_IMPORTED_MODULE_3__["assign"])({
      userData: function userData(_ctx, _evt) {
        return null;
      }
    }),
    setUserData: Object(xstate__WEBPACK_IMPORTED_MODULE_3__["assign"])({
      userData: function userData(_ctx, evt) {
        return evt.value;
      }
    })
  }
});
var GlobalContextProvider = function GlobalContextProvider(_ref) {
  var children = _ref.children;

  var _useMachine = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_2__["useMachine"])(globalMachine),
      _useMachine2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMachine, 2),
      current = _useMachine2[0],
      send = _useMachine2[1];

  console.log("hi");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStateContext.Provider, {
    value: current,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalDispatchContext.Provider, {
    value: send,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, children));
};

/***/ })

})
//# sourceMappingURL=index.js.28acd8ad99985ccf49c8.hot-update.js.map