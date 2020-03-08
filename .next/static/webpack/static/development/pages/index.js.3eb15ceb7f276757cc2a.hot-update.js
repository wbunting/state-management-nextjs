webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @xstate/react */ "./node_modules/@xstate/react/lib/index.js");
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_xstate_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/global */ "./context/global.js");




var _jsxFileName = "/Users/willbunting/Documents/Github/gznzc/pages/index.js";






function sleep(ms) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

var loginMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_6__["Machine"])({
  id: "login",
  initial: "editing",
  context: {
    username: "",
    password: "",
    error: null
  },
  states: {
    editing: {
      on: {
        CHANGE_USERNAME: {
          actions: "changeUsername"
        },
        CHANGE_PASSWORD: {
          actions: "changePassword"
        },
        SUBMIT: "submitting"
      }
    },
    submitting: {
      invoke: {
        src: "submit",
        onDone: {
          target: "success",
          actions: "setUserData"
        },
        onError: {
          target: "failure",
          actions: "setError"
        }
      }
    },
    success: {
      type: "final"
    },
    failure: {
      on: {
        CHANGE_USERNAME: {
          target: "editing",
          actions: ["changeUsername", "clearError"]
        },
        CHANGE_PASSWORD: {
          target: "editing",
          actions: ["changePassword", "clearError"]
        }
      }
    }
  }
});

var HomePage = function HomePage() {
  var globalState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useContext(_context_global__WEBPACK_IMPORTED_MODULE_8__["GlobalStateContext"]);
  var globalDispatch = react__WEBPACK_IMPORTED_MODULE_4___default.a.useContext(_context_global__WEBPACK_IMPORTED_MODULE_8__["GlobalDispatchContext"]);

  var _useMachine = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_7__["useMachine"])(loginMachine, {
    actions: {
      changeUsername: Object(xstate__WEBPACK_IMPORTED_MODULE_6__["assign"])({
        username: function username(_ctx, evt) {
          return evt.value;
        }
      }),
      changePassword: Object(xstate__WEBPACK_IMPORTED_MODULE_6__["assign"])({
        password: function password(_ctx, evt) {
          return evt.value;
        }
      }),
      setUserData: function setUserData(_ctx, evt) {
        globalDispatch({
          type: "LOGIN",
          value: evt.data
        });
        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/dashboard");
      },
      setError: Object(xstate__WEBPACK_IMPORTED_MODULE_6__["assign"])({
        error: function error(_ctx, evt) {
          return evt.data;
        }
      }),
      clearError: Object(xstate__WEBPACK_IMPORTED_MODULE_6__["assign"])({
        error: function error(_ctx, _evt) {
          return null;
        }
      })
    },
    services: {
      submit: function submit(_ctx, _evt) {
        return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(
        /*#__PURE__*/
        function () {
          var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve, reject) {
            var rand;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return sleep(2000);

                  case 2:
                    rand = Math.random();

                    if (rand < 0.5) {
                      reject("failed to log in");
                    } else {
                      resolve("user secret data");
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    }
  }),
      _useMachine2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMachine, 2),
      current = _useMachine2[0],
      send = _useMachine2[1];

  var handleUsernameChange = function handleUsernameChange(e) {
    send({
      type: "CHANGE_USERNAME",
      value: e.currentTarget.value
    });
  };

  var handlePasswordChange = function handlePasswordChange(e) {
    send({
      type: "CHANGE_PASSWORD",
      value: e.currentTarget.value
    });
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    send({
      type: "SUBMIT"
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Signin:", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    value: current.context.username,
    onChange: handleUsernameChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    value: current.context.password,
    onChange: handlePasswordChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "Submit")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, current.context.error), current.matches("submitting") && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "signing in..."));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.3eb15ceb7f276757cc2a.hot-update.js.map