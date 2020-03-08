((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/dashboard.js"],{

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

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStateContext.Provider, {
    value: current,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalDispatchContext.Provider, {
    value: send,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, children));
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@xstate/react/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@xstate/react/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var xstate_1 = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");
var defaultOptions = {
    immediate: false
};
function useMachine(machine, options) {
    if (options === void 0) { options = defaultOptions; }
    var context = options.context, guards = options.guards, actions = options.actions, activities = options.activities, services = options.services, delays = options.delays, immediate = options.immediate, rehydratedState = options.state, interpreterOptions = __rest(options, ["context", "guards", "actions", "activities", "services", "delays", "immediate", "state"]);
    var machineConfig = {
        context: context,
        guards: guards,
        actions: actions,
        activities: activities,
        services: services,
        delays: delays
    };
    // Reference the machine
    var machineRef = react_1.useRef(null);
    // Create the machine only once
    // See https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
    if (machineRef.current === null) {
        machineRef.current = machine.withConfig(machineConfig, __assign(__assign({}, machine.context), context));
    }
    // Reference the service
    var serviceRef = react_1.useRef(null);
    // Create the service only once
    if (serviceRef.current === null) {
        serviceRef.current = xstate_1.interpret(machineRef.current, interpreterOptions).onTransition(function (state) {
            // Update the current machine state when a transition occurs
            if (state.changed) {
                setCurrent(state);
            }
        });
    }
    var service = serviceRef.current;
    // Make sure actions and services are kept updated when they change.
    // This mutation assignment is safe because the service instance is only used
    // in one place -- this hook's caller.
    react_1.useEffect(function () {
        Object.assign(service.machine.options.actions, actions);
    }, [actions]);
    react_1.useEffect(function () {
        Object.assign(service.machine.options.services, services);
    }, [services]);
    // Keep track of the current machine state
    var initialState = rehydratedState
        ? xstate_1.State.create(rehydratedState)
        : service.initialState;
    var _a = __read(react_1.useState(function () { return initialState; }), 2), current = _a[0], setCurrent = _a[1];
    // Start service immediately (before mount) if specified in options
    if (immediate) {
        service.start();
    }
    react_1.useEffect(function () {
        // Start the service when the component mounts.
        // Note: the service will start only if it hasn't started already.
        //
        // If a rehydrated state was provided, use the resolved `initialState`.
        service.start(rehydratedState ? initialState : undefined);
        return function () {
            // Stop the service when the component unmounts
            service.stop();
        };
    }, []);
    return [current, service.send, service];
}
exports.useMachine = useMachine;
function useService(service) {
    var _a = __read(react_1.useState(service.state), 2), current = _a[0], setCurrent = _a[1];
    react_1.useEffect(function () {
        // Set to current service state as there is a possibility
        // of a transition occurring between the initial useState()
        // initialization and useEffect() commit.
        setCurrent(service.state);
        var listener = function (state) {
            if (state.changed) {
                setCurrent(state);
            }
        };
        var sub = service.subscribe(listener);
        return function () {
            sub.unsubscribe();
        };
    }, [service]);
    return [current, service.send, service];
}
exports.useService = useService;
var useActor_1 = __webpack_require__(/*! ./useActor */ "./node_modules/@xstate/react/lib/useActor.js");
exports.useActor = useActor_1.useActor;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@xstate/react/lib/useActor.js":
/*!****************************************************!*\
  !*** ./node_modules/@xstate/react/lib/useActor.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function useActor(actor) {
    var _a = __read(react_1.useState(undefined), 2), current = _a[0], setCurrent = _a[1];
    var actorRef = react_1.useRef(actor);
    react_1.useEffect(function () {
        if (actor) {
            actorRef.current = actor;
            var sub_1 = actor.subscribe(setCurrent);
            return function () {
                sub_1.unsubscribe();
            };
        }
    }, [actor]);
    return [current, actorRef.current ? actorRef.current.send : function () { return void 0; }];
}
exports.useActor = useActor;
//# sourceMappingURL=useActor.js.map

/***/ }),

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fdashboard&absolutePagePath=%2FUsers%2Fwillbunting%2FDocuments%2FGithub%2Fgznzc%2Fpages%2Fdashboard.js!./":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fdashboard&absolutePagePath=%2FUsers%2Fwillbunting%2FDocuments%2FGithub%2Fgznzc%2Fpages%2Fdashboard.js ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard", function() {
      var page = __webpack_require__(/*! ./pages/dashboard.js */ "./pages/dashboard.js")
      if(true) {
        module.hot.accept(/*! ./pages/dashboard.js */ "./pages/dashboard.js", function() {
          if(!next.router.components["/dashboard"]) return
          var updatedPage = __webpack_require__(/*! ./pages/dashboard.js */ "./pages/dashboard.js")
          next.router.update("/dashboard", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_513dd14659e539e0c36c ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_513dd14659e539e0c36c */ "dll-reference dll_513dd14659e539e0c36c"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!******************************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/global.js from dll-reference dll_513dd14659e539e0c36c ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_513dd14659e539e0c36c */ "dll-reference dll_513dd14659e539e0c36c"))("./node_modules/webpack/buildin/global.js");

/***/ }),

/***/ "./node_modules/xstate/es/Actor.js":
/*!*****************************************!*\
  !*** ./node_modules/xstate/es/Actor.js ***!
  \*****************************************/
/*! exports provided: createInvocableActor, createNullActor, isActor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInvocableActor", function() { return createInvocableActor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNullActor", function() { return createNullActor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isActor", function() { return isActor; });
function createNullActor(id) {
  return {
    id: id,
    send: function () {
      return void 0;
    },
    subscribe: function () {
      return {
        unsubscribe: function () {
          return void 0;
        }
      };
    },
    toJSON: function () {
      return {
        id: id
      };
    }
  };
}
/**
 * Creates a null actor that is able to be invoked given the provided
 * invocation information in its `.meta` value.
 *
 * @param invokeDefinition The meta information needed to invoke the actor.
 */


function createInvocableActor(invokeDefinition) {
  var tempActor = createNullActor(invokeDefinition.id);
  tempActor.meta = invokeDefinition;
  return tempActor;
}

function isActor(item) {
  try {
    return typeof item.send === 'function';
  } catch (e) {
    return false;
  }
}



/***/ }),

/***/ "./node_modules/xstate/es/Machine.js":
/*!*******************************************!*\
  !*** ./node_modules/xstate/es/Machine.js ***!
  \*******************************************/
/*! exports provided: Machine, createMachine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Machine", function() { return Machine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMachine", function() { return createMachine; });
/* harmony import */ var _StateNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateNode.js */ "./node_modules/xstate/es/StateNode.js");


function Machine(config, options, initialContext) {
  if (initialContext === void 0) {
    initialContext = config.context;
  }

  var resolvedInitialContext = typeof initialContext === 'function' ? initialContext() : initialContext;
  return new _StateNode_js__WEBPACK_IMPORTED_MODULE_0__["StateNode"](config, options, resolvedInitialContext);
}

function createMachine(config, options) {
  var resolvedInitialContext = typeof config.context === 'function' ? config.context() : config.context;
  return new _StateNode_js__WEBPACK_IMPORTED_MODULE_0__["StateNode"](config, options, resolvedInitialContext);
}



/***/ }),

/***/ "./node_modules/xstate/es/State.js":
/*!*****************************************!*\
  !*** ./node_modules/xstate/es/State.js ***!
  \*****************************************/
/*! exports provided: State, bindActionToState, isState, stateValuesEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionToState", function() { return bindActionToState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isState", function() { return isState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateValuesEqual", function() { return stateValuesEqual; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/xstate/es/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");
/* harmony import */ var _stateUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stateUtils.js */ "./node_modules/xstate/es/stateUtils.js");
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions.js */ "./node_modules/xstate/es/actions.js");






function stateValuesEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (a === undefined || b === undefined) {
    return false;
  }

  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(a) || Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(b)) {
    return a === b;
  }

  var aKeys = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["keys"])(a);
  var bKeys = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["keys"])(b);
  return aKeys.length === bKeys.length && aKeys.every(function (key) {
    return stateValuesEqual(a[key], b[key]);
  });
}

function isState(state) {
  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(state)) {
    return false;
  }

  return 'value' in state && 'history' in state;
}

function bindActionToState(action, state) {
  var exec = action.exec;

  var boundAction = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, action), {
    exec: exec !== undefined ? function () {
      return exec(state.context, state.event, {
        action: action,
        state: state,
        _event: state._event
      });
    } : undefined
  });

  return boundAction;
}

var State =
/*#__PURE__*/

/** @class */
function () {
  /**
   * Creates a new State instance.
   * @param value The state value
   * @param context The extended state
   * @param historyValue The tree representing historical values of the state nodes
   * @param history The previous state
   * @param actions An array of action objects to execute as side-effects
   * @param activities A mapping of activities and whether they are started (`true`) or stopped (`false`).
   * @param meta
   * @param events Internal event queue. Should be empty with run-to-completion semantics.
   * @param configuration
   */
  function State(config) {
    var _this = this;

    this.actions = [];
    this.activities = _constants_js__WEBPACK_IMPORTED_MODULE_1__["EMPTY_ACTIVITY_MAP"];
    this.meta = {};
    this.events = [];
    this.value = config.value;
    this.context = config.context;
    this._event = config._event;
    this._sessionid = config._sessionid;
    this.event = this._event.data;
    this.historyValue = config.historyValue;
    this.history = config.history;
    this.actions = config.actions || [];
    this.activities = config.activities || _constants_js__WEBPACK_IMPORTED_MODULE_1__["EMPTY_ACTIVITY_MAP"];
    this.meta = config.meta || {};
    this.events = config.events || [];
    this.matches = this.matches.bind(this);
    this.toStrings = this.toStrings.bind(this);
    this.configuration = config.configuration;
    this.transitions = config.transitions;
    this.children = config.children;
    this.done = !!config.done;
    Object.defineProperty(this, 'nextEvents', {
      get: function () {
        return Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_3__["nextEvents"])(_this.configuration);
      }
    });
  }
  /**
   * Creates a new State instance for the given `stateValue` and `context`.
   * @param stateValue
   * @param context
   */


  State.from = function (stateValue, context) {
    if (stateValue instanceof State) {
      if (stateValue.context !== context) {
        return new State({
          value: stateValue.value,
          context: context,
          _event: stateValue._event,
          _sessionid: null,
          historyValue: stateValue.historyValue,
          history: stateValue.history,
          actions: [],
          activities: stateValue.activities,
          meta: {},
          events: [],
          configuration: [],
          transitions: [],
          children: {}
        });
      }

      return stateValue;
    }

    var _event = _actions_js__WEBPACK_IMPORTED_MODULE_4__["initEvent"];
    return new State({
      value: stateValue,
      context: context,
      _event: _event,
      _sessionid: null,
      historyValue: undefined,
      history: undefined,
      actions: [],
      activities: undefined,
      meta: undefined,
      events: [],
      configuration: [],
      transitions: [],
      children: {}
    });
  };
  /**
   * Creates a new State instance for the given `config`.
   * @param config The state config
   */


  State.create = function (config) {
    return new State(config);
  };
  /**
   * Creates a new `State` instance for the given `stateValue` and `context` with no actions (side-effects).
   * @param stateValue
   * @param context
   */


  State.inert = function (stateValue, context) {
    if (stateValue instanceof State) {
      if (!stateValue.actions.length) {
        return stateValue;
      }

      var _event = _actions_js__WEBPACK_IMPORTED_MODULE_4__["initEvent"];
      return new State({
        value: stateValue.value,
        context: context,
        _event: _event,
        _sessionid: null,
        historyValue: stateValue.historyValue,
        history: stateValue.history,
        activities: stateValue.activities,
        configuration: stateValue.configuration,
        transitions: [],
        children: {}
      });
    }

    return State.from(stateValue, context);
  };
  /**
   * Returns an array of all the string leaf state node paths.
   * @param stateValue
   * @param delimiter The character(s) that separate each subpath in the string state node path.
   */


  State.prototype.toStrings = function (stateValue, delimiter) {
    var _this = this;

    if (stateValue === void 0) {
      stateValue = this.value;
    }

    if (delimiter === void 0) {
      delimiter = '.';
    }

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(stateValue)) {
      return [stateValue];
    }

    var valueKeys = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["keys"])(stateValue);
    return valueKeys.concat.apply(valueKeys, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(valueKeys.map(function (key) {
      return _this.toStrings(stateValue[key], delimiter).map(function (s) {
        return key + delimiter + s;
      });
    })));
  };

  State.prototype.toJSON = function () {
    var _a = this,
        configuration = _a.configuration,
        transitions = _a.transitions,
        jsonValues = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["configuration", "transitions"]);

    return jsonValues;
  };
  /**
   * Whether the current state value is a subset of the given parent state value.
   * @param parentStateValue
   */


  State.prototype.matches = function (parentStateValue) {
    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["matchesState"])(parentStateValue, this.value);
  };

  return State;
}();



/***/ }),

/***/ "./node_modules/xstate/es/StateNode.js":
/*!*********************************************!*\
  !*** ./node_modules/xstate/es/StateNode.js ***!
  \*********************************************/
/*! exports provided: StateNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateNode", function() { return StateNode; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/xstate/es/constants.js");
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment.js */ "./node_modules/xstate/es/environment.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types.js */ "./node_modules/xstate/es/types.js");
/* harmony import */ var _stateUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stateUtils.js */ "./node_modules/xstate/es/stateUtils.js");
/* harmony import */ var _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actionTypes.js */ "./node_modules/xstate/es/actionTypes.js");
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions.js */ "./node_modules/xstate/es/actions.js");
/* harmony import */ var _State_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./State.js */ "./node_modules/xstate/es/State.js");
/* harmony import */ var _Actor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Actor.js */ "./node_modules/xstate/es/Actor.js");










var NULL_EVENT = '';
var STATE_IDENTIFIER = '#';
var WILDCARD = '*';
var EMPTY_OBJECT = {};

var isStateId = function (str) {
  return str[0] === STATE_IDENTIFIER;
};

var createDefaultOptions = function () {
  return {
    actions: {},
    guards: {},
    services: {},
    activities: {},
    delays: {}
  };
};

var validateArrayifiedTransitions = function (stateNode, event, transitions) {
  var hasNonLastUnguardedTarget = transitions.slice(0, -1).some(function (transition) {
    return !('cond' in transition) && !('in' in transition) && (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(transition.target) || Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isMachine"])(transition.target));
  });
  var eventText = event === NULL_EVENT ? 'the transient event' : "event '" + event + "'";
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["warn"])(!hasNonLastUnguardedTarget, "One or more transitions for " + eventText + " on state '" + stateNode.id + "' are unreachable. " + "Make sure that the default transition is the last one defined.");
};

var StateNode =
/*#__PURE__*/

/** @class */
function () {
  function StateNode(
  /**
   * The raw config used to create the machine.
   */
  config, options,
  /**
   * The initial extended state
   */
  context) {
    var _this = this;

    this.config = config;
    this.context = context;
    /**
     * The order this state node appears. Corresponds to the implicit SCXML document order.
     */

    this.order = -1;
    this.__xstatenode = true;
    this.__cache = {
      events: undefined,
      relativeValue: new Map(),
      initialStateValue: undefined,
      initialState: undefined,
      on: undefined,
      transitions: undefined,
      candidates: {},
      delayedTransitions: undefined
    };
    this.idMap = {};
    this.options = Object.assign(createDefaultOptions(), options);
    this.parent = this.options._parent;
    this.key = this.config.key || this.options._key || this.config.id || '(machine)';
    this.machine = this.parent ? this.parent.machine : this;
    this.path = this.parent ? this.parent.path.concat(this.key) : [];
    this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : _constants_js__WEBPACK_IMPORTED_MODULE_1__["STATE_DELIMITER"]);
    this.id = this.config.id || Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])([this.machine.key], this.path).join(this.delimiter);
    this.version = this.parent ? this.parent.version : this.config.version;
    this.type = this.config.type || (this.config.parallel ? 'parallel' : this.config.states && Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(this.config.states).length ? 'compound' : this.config.history ? 'history' : 'atomic');

    if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["warn"])(!('parallel' in this.config), "The \"parallel\" property is deprecated and will be removed in version 4.1. " + (this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '" + this.type + "'`") + " in the config for state node '" + this.id + "' instead.");
    }

    this.initial = this.config.initial;
    this.states = this.config.states ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapValues"])(this.config.states, function (stateConfig, key) {
      var _a;

      var stateNode = new StateNode(stateConfig, {
        _parent: _this,
        _key: key
      });
      Object.assign(_this.idMap, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_a = {}, _a[stateNode.id] = stateNode, _a), stateNode.idMap));
      return stateNode;
    }) : EMPTY_OBJECT; // Document order

    var order = 0;

    function dfs(stateNode) {
      var e_1, _a;

      stateNode.order = order++;

      try {
        for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getChildren"])(stateNode)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var child = _c.value;
          dfs(child);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }

    dfs(this); // History config

    this.history = this.config.history === true ? 'shallow' : this.config.history || false;
    this._transient = !this.config.on ? false : Array.isArray(this.config.on) ? this.config.on.some(function (_a) {
      var event = _a.event;
      return event === NULL_EVENT;
    }) : NULL_EVENT in this.config.on;
    this.strict = !!this.config.strict; // TODO: deprecate (entry)

    this.onEntry = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(this.config.entry || this.config.onEntry).map(function (action) {
      return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["toActionObject"])(action);
    }); // TODO: deprecate (exit)

    this.onExit = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(this.config.exit || this.config.onExit).map(function (action) {
      return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["toActionObject"])(action);
    });
    this.meta = this.config.meta;
    this.data = this.type === 'final' ? this.config.data : undefined;
    this.invoke = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(this.config.invoke).map(function (invokeConfig, i) {
      var _a, _b;

      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isMachine"])(invokeConfig)) {
        _this.machine.options.services = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_a = {}, _a[invokeConfig.id] = invokeConfig, _a), _this.machine.options.services);
        return {
          type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["invoke"],
          src: invokeConfig.id,
          id: invokeConfig.id
        };
      } else if (typeof invokeConfig.src !== 'string') {
        var invokeSrc = _this.id + ":invocation[" + i + "]"; // TODO: util function

        _this.machine.options.services = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_b = {}, _b[invokeSrc] = invokeConfig.src, _b), _this.machine.options.services);
        return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
          type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["invoke"],
          id: invokeSrc
        }, invokeConfig), {
          src: invokeSrc
        });
      } else {
        return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, invokeConfig), {
          type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["invoke"],
          id: invokeConfig.id || invokeConfig.src,
          src: invokeConfig.src
        });
      }
    });
    this.activities = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(this.config.activities).concat(this.invoke).map(function (activity) {
      return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["toActivityDefinition"])(activity);
    });
    this.transition = this.transition.bind(this);
  }

  StateNode.prototype._init = function () {
    if (this.__cache.transitions) {
      return;
    }

    Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getAllStateNodes"])(this).forEach(function (stateNode) {
      return stateNode.on;
    });
  };
  /**
   * Clones this state machine with custom options and context.
   *
   * @param options Options (actions, guards, activities, services) to recursively merge with the existing options.
   * @param context Custom context (will override predefined context)
   */


  StateNode.prototype.withConfig = function (options, context) {
    if (context === void 0) {
      context = this.context;
    }

    var _a = this.options,
        actions = _a.actions,
        activities = _a.activities,
        guards = _a.guards,
        services = _a.services,
        delays = _a.delays;
    return new StateNode(this.config, {
      actions: Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, actions), options.actions),
      activities: Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, activities), options.activities),
      guards: Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, guards), options.guards),
      services: Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, services), options.services),
      delays: Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, delays), options.delays)
    }, context);
  };
  /**
   * Clones this state machine with custom context.
   *
   * @param context Custom context (will override predefined context, not recursive)
   */


  StateNode.prototype.withContext = function (context) {
    return new StateNode(this.config, this.options, context);
  };

  Object.defineProperty(StateNode.prototype, "definition", {
    /**
     * The well-structured state node definition.
     */
    get: function () {
      return {
        id: this.id,
        key: this.key,
        version: this.version,
        context: this.context,
        type: this.type,
        initial: this.initial,
        history: this.history,
        states: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapValues"])(this.states, function (state) {
          return state.definition;
        }),
        on: this.on,
        transitions: this.transitions,
        entry: this.onEntry,
        exit: this.onExit,
        activities: this.activities || [],
        meta: this.meta,
        order: this.order || -1,
        data: this.data,
        invoke: this.invoke
      };
    },
    enumerable: true,
    configurable: true
  });

  StateNode.prototype.toJSON = function () {
    return this.definition;
  };

  Object.defineProperty(StateNode.prototype, "on", {
    /**
     * The mapping of events to transitions.
     */
    get: function () {
      if (this.__cache.on) {
        return this.__cache.on;
      }

      var transitions = this.transitions;
      return this.__cache.on = transitions.reduce(function (map, transition) {
        map[transition.eventType] = map[transition.eventType] || [];
        map[transition.eventType].push(transition);
        return map;
      }, {});
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "after", {
    get: function () {
      return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "transitions", {
    /**
     * All the transitions that can be taken from this state node.
     */
    get: function () {
      return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
    },
    enumerable: true,
    configurable: true
  });

  StateNode.prototype.getCandidates = function (eventName) {
    if (this.__cache.candidates[eventName]) {
      return this.__cache.candidates[eventName];
    }

    var transient = eventName === NULL_EVENT;
    var candidates = this.transitions.filter(function (transition) {
      var sameEventType = transition.eventType === eventName; // null events should only match against eventless transitions

      return transient ? sameEventType : sameEventType || transition.eventType === WILDCARD;
    });
    this.__cache.candidates[eventName] = candidates;
    return candidates;
  };
  /**
   * All delayed transitions from the config.
   */


  StateNode.prototype.getDelayedTransitions = function () {
    var _this = this;

    var afterConfig = this.config.after;

    if (!afterConfig) {
      return [];
    }

    var mutateEntryExit = function (delay, i) {
      var delayRef = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(delay) ? _this.id + ":delay[" + i + "]" : delay;
      var eventType = Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["after"])(delayRef, _this.id);

      _this.onEntry.push(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["send"])(eventType, {
        delay: delay
      }));

      _this.onExit.push(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["cancel"])(eventType));

      return eventType;
    };

    var delayedTransitions = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isArray"])(afterConfig) ? afterConfig.map(function (transition, i) {
      var eventType = mutateEntryExit(transition.delay, i);
      return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transition), {
        event: eventType
      });
    }) : Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(afterConfig).map(function (delay, i) {
      var configTransition = afterConfig[delay];
      var resolvedTransition = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(configTransition) ? {
        target: configTransition
      } : configTransition;
      var resolvedDelay = !isNaN(+delay) ? +delay : delay;
      var eventType = mutateEntryExit(resolvedDelay, i);
      return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(resolvedTransition).map(function (transition) {
        return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transition), {
          event: eventType,
          delay: resolvedDelay
        });
      });
    }));
    return delayedTransitions.map(function (delayedTransition) {
      var delay = delayedTransition.delay;
      return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.formatTransition(delayedTransition)), {
        delay: delay
      });
    });
  };
  /**
   * Returns the state nodes represented by the current state value.
   *
   * @param state The state value or State instance
   */


  StateNode.prototype.getStateNodes = function (state) {
    var _a;

    var _this = this;

    if (!state) {
      return [];
    }

    var stateValue = state instanceof _State_js__WEBPACK_IMPORTED_MODULE_8__["State"] ? state.value : Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStateValue"])(state, this.delimiter);

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(stateValue)) {
      var initialStateValue = this.getStateNode(stateValue).initial;
      return initialStateValue !== undefined ? this.getStateNodes((_a = {}, _a[stateValue] = initialStateValue, _a)) : [this.states[stateValue]];
    }

    var subStateKeys = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(stateValue);
    var subStateNodes = subStateKeys.map(function (subStateKey) {
      return _this.getStateNode(subStateKey);
    });
    return subStateNodes.concat(subStateKeys.reduce(function (allSubStateNodes, subStateKey) {
      var subStateNode = _this.getStateNode(subStateKey).getStateNodes(stateValue[subStateKey]);

      return allSubStateNodes.concat(subStateNode);
    }, []));
  };
  /**
   * Returns `true` if this state node explicitly handles the given event.
   *
   * @param event The event in question
   */


  StateNode.prototype.handles = function (event) {
    var eventType = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["getEventType"])(event);
    return this.events.includes(eventType);
  };
  /**
   * Resolves the given `state` to a new `State` instance relative to this machine.
   *
   * This ensures that `.events` and `.nextEvents` represent the correct values.
   *
   * @param state The state to resolve
   */


  StateNode.prototype.resolveState = function (state) {
    var configuration = Array.from(Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getConfiguration"])([], this.getStateNodes(state.value)));
    return new _State_js__WEBPACK_IMPORTED_MODULE_8__["State"](Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
      value: this.resolve(state.value),
      configuration: configuration
    }));
  };

  StateNode.prototype.transitionLeafNode = function (stateValue, state, _event) {
    var stateNode = this.getStateNode(stateValue);
    var next = stateNode.next(state, _event);

    if (!next || !next.transitions.length) {
      return this.next(state, _event);
    }

    return next;
  };

  StateNode.prototype.transitionCompoundNode = function (stateValue, state, _event) {
    var subStateKeys = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(stateValue);
    var stateNode = this.getStateNode(subStateKeys[0]);

    var next = stateNode._transition(stateValue[subStateKeys[0]], state, _event);

    if (!next || !next.transitions.length) {
      return this.next(state, _event);
    }

    return next;
  };

  StateNode.prototype.transitionParallelNode = function (stateValue, state, _event) {
    var e_2, _a;

    var transitionMap = {};

    try {
      for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(stateValue)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var subStateKey = _c.value;
        var subStateValue = stateValue[subStateKey];

        if (!subStateValue) {
          continue;
        }

        var subStateNode = this.getStateNode(subStateKey);

        var next = subStateNode._transition(subStateValue, state, _event);

        if (next) {
          transitionMap[subStateKey] = next;
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    var stateTransitions = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(transitionMap).map(function (key) {
      return transitionMap[key];
    });
    var enabledTransitions = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(stateTransitions.map(function (st) {
      return st.transitions;
    }));
    var willTransition = stateTransitions.some(function (st) {
      return st.transitions.length > 0;
    });

    if (!willTransition) {
      return this.next(state, _event);
    }

    var entryNodes = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(stateTransitions.map(function (t) {
      return t.entrySet;
    }));
    var configuration = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(transitionMap).map(function (key) {
      return transitionMap[key].configuration;
    }));
    return {
      transitions: enabledTransitions,
      entrySet: entryNodes,
      exitSet: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(stateTransitions.map(function (t) {
        return t.exitSet;
      })),
      configuration: configuration,
      source: state,
      actions: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(transitionMap).map(function (key) {
        return transitionMap[key].actions;
      }))
    };
  };

  StateNode.prototype._transition = function (stateValue, state, _event) {
    // leaf node
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(stateValue)) {
      return this.transitionLeafNode(stateValue, state, _event);
    } // hierarchical node


    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(stateValue).length === 1) {
      return this.transitionCompoundNode(stateValue, state, _event);
    } // orthogonal node


    return this.transitionParallelNode(stateValue, state, _event);
  };

  StateNode.prototype.next = function (state, _event) {
    var e_3, _a;

    var _this = this;

    var eventName = _event.name;
    var actions = [];
    var nextStateNodes = [];
    var selectedTransition;

    try {
      for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.getCandidates(eventName)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var candidate = _c.value;
        var cond = candidate.cond,
            stateIn = candidate.in;
        var resolvedContext = state.context;
        var isInState = stateIn ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(stateIn) && isStateId(stateIn) ? // Check if in state by ID
        state.matches(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStateValue"])(this.getStateNodeById(stateIn).path, this.delimiter)) : // Check if in state by relative grandparent
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["matchesState"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStateValue"])(stateIn, this.delimiter), Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["path"])(this.path.slice(0, -2))(state.value)) : true;
        var guardPassed = false;

        try {
          guardPassed = !cond || this.evaluateGuard(cond, resolvedContext, _event, state);
        } catch (err) {
          throw new Error("Unable to evaluate guard '" + (cond.name || cond.type) + "' in transition for event '" + eventName + "' in state node '" + this.id + "':\n" + err.message);
        }

        if (guardPassed && isInState) {
          if (candidate.target !== undefined) {
            nextStateNodes = candidate.target;
          }

          actions.push.apply(actions, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(candidate.actions));
          selectedTransition = candidate;
          break;
        }
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    if (!selectedTransition) {
      return undefined;
    }

    if (!nextStateNodes.length) {
      return {
        transitions: [selectedTransition],
        entrySet: [],
        exitSet: [],
        configuration: state.value ? [this] : [],
        source: state,
        actions: actions
      };
    }

    var allNextStateNodes = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(nextStateNodes.map(function (stateNode) {
      return _this.getRelativeStateNodes(stateNode, state.historyValue);
    }));
    var isInternal = !!selectedTransition.internal;
    var reentryNodes = isInternal ? [] : Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(allNextStateNodes.map(function (n) {
      return _this.nodesFromChild(n);
    }));
    return {
      transitions: [selectedTransition],
      entrySet: reentryNodes,
      exitSet: isInternal ? [] : [this],
      configuration: allNextStateNodes,
      source: state,
      actions: actions
    };
  };

  StateNode.prototype.nodesFromChild = function (childStateNode) {
    if (childStateNode.escapes(this)) {
      return [];
    }

    var nodes = [];
    var marker = childStateNode;

    while (marker && marker !== this) {
      nodes.push(marker);
      marker = marker.parent;
    }

    nodes.push(this); // inclusive

    return nodes;
  };
  /**
   * Whether the given state node "escapes" this state node. If the `stateNode` is equal to or the parent of
   * this state node, it does not escape.
   */


  StateNode.prototype.escapes = function (stateNode) {
    if (this === stateNode) {
      return false;
    }

    var parent = this.parent;

    while (parent) {
      if (parent === stateNode) {
        return false;
      }

      parent = parent.parent;
    }

    return true;
  };

  StateNode.prototype.evaluateGuard = function (guard, context, _event, state) {
    var guards = this.machine.options.guards;
    var guardMeta = {
      state: state,
      cond: guard,
      _event: _event
    }; // TODO: do not hardcode!

    if (guard.type === _constants_js__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_GUARD_TYPE"]) {
      return guard.predicate(context, _event.data, guardMeta);
    }

    var condFn = guards[guard.type];

    if (!condFn) {
      throw new Error("Guard '" + guard.type + "' is not implemented on machine '" + this.machine.id + "'.");
    }

    return condFn(context, _event.data, guardMeta);
  };

  StateNode.prototype.getActions = function (transition, currentContext, _event, prevState) {
    var e_4, _a, e_5, _b;

    var prevConfig = Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getConfiguration"])([], prevState ? this.getStateNodes(prevState.value) : [this]);
    var resolvedConfig = transition.configuration.length ? Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getConfiguration"])(prevConfig, transition.configuration) : prevConfig;

    try {
      for (var resolvedConfig_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(resolvedConfig), resolvedConfig_1_1 = resolvedConfig_1.next(); !resolvedConfig_1_1.done; resolvedConfig_1_1 = resolvedConfig_1.next()) {
        var sn = resolvedConfig_1_1.value;

        if (!Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["has"])(prevConfig, sn)) {
          transition.entrySet.push(sn);
        }
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (resolvedConfig_1_1 && !resolvedConfig_1_1.done && (_a = resolvedConfig_1.return)) _a.call(resolvedConfig_1);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    try {
      for (var prevConfig_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(prevConfig), prevConfig_1_1 = prevConfig_1.next(); !prevConfig_1_1.done; prevConfig_1_1 = prevConfig_1.next()) {
        var sn = prevConfig_1_1.value;

        if (!Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["has"])(resolvedConfig, sn) || Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["has"])(transition.exitSet, sn.parent)) {
          transition.exitSet.push(sn);
        }
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (prevConfig_1_1 && !prevConfig_1_1.done && (_b = prevConfig_1.return)) _b.call(prevConfig_1);
      } finally {
        if (e_5) throw e_5.error;
      }
    }

    if (!transition.source) {
      transition.exitSet = []; // Ensure that root StateNode (machine) is entered

      transition.entrySet.push(this);
    }

    var doneEvents = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(transition.entrySet.map(function (sn) {
      var events = [];

      if (sn.type !== 'final') {
        return events;
      }

      var parent = sn.parent;
      events.push(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["done"])(sn.id, sn.data), // TODO: deprecate - final states should not emit done events for their own state.
      Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["done"])(parent.id, sn.data ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapContext"])(sn.data, currentContext, _event) : undefined));

      if (parent.parent) {
        var grandparent = parent.parent;

        if (grandparent.type === 'parallel') {
          if (Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getChildren"])(grandparent).every(function (parentNode) {
            return Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["isInFinalState"])(transition.configuration, parentNode);
          })) {
            events.push(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["done"])(grandparent.id, grandparent.data));
          }
        }
      }

      return events;
    }));
    transition.exitSet.sort(function (a, b) {
      return b.order - a.order;
    });
    transition.entrySet.sort(function (a, b) {
      return a.order - b.order;
    });
    var entryStates = new Set(transition.entrySet);
    var exitStates = new Set(transition.exitSet);

    var _c = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__read"])([Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Array.from(entryStates).map(function (stateNode) {
      return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(stateNode.activities.map(function (activity) {
        return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["start"])(activity);
      }), stateNode.onEntry);
    })).concat(doneEvents.map(_actions_js__WEBPACK_IMPORTED_MODULE_7__["raise"])), Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Array.from(exitStates).map(function (stateNode) {
      return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(stateNode.onExit, stateNode.activities.map(function (activity) {
        return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["stop"])(activity);
      }));
    }))], 2),
        entryActions = _c[0],
        exitActions = _c[1];

    var actions = Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["toActionObjects"])(exitActions.concat(transition.actions).concat(entryActions), this.machine.options.actions);
    return actions;
  };
  /**
   * Determines the next state given the current `state` and sent `event`.
   *
   * @param state The current State instance or state value
   * @param event The event that was sent at the current state
   * @param context The current context (extended state) of the current state
   */


  StateNode.prototype.transition = function (state, event, context) {
    if (state === void 0) {
      state = this.initialState;
    }

    var _event = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toSCXMLEvent"])(event);

    var currentState;

    if (state instanceof _State_js__WEBPACK_IMPORTED_MODULE_8__["State"]) {
      currentState = context === undefined ? state : this.resolveState(_State_js__WEBPACK_IMPORTED_MODULE_8__["State"].from(state, context));
    } else {
      var resolvedStateValue = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(state) ? this.resolve(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["pathToStateValue"])(this.getResolvedPath(state))) : this.resolve(state);
      var resolvedContext = context ? context : this.machine.context;
      currentState = this.resolveState(_State_js__WEBPACK_IMPORTED_MODULE_8__["State"].from(resolvedStateValue, resolvedContext));
    }

    if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"] && _event.name === WILDCARD) {
      throw new Error("An event cannot have the wildcard type ('" + WILDCARD + "')");
    }

    if (this.strict) {
      if (!this.events.includes(_event.name) && !Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isBuiltInEvent"])(_event.name)) {
        throw new Error("Machine '" + this.id + "' does not accept event '" + _event.name + "'");
      }
    }

    var stateTransition = this._transition(currentState.value, currentState, _event) || {
      transitions: [],
      configuration: [],
      entrySet: [],
      exitSet: [],
      source: currentState,
      actions: []
    };
    var prevConfig = Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getConfiguration"])([], this.getStateNodes(currentState.value));
    var resolvedConfig = stateTransition.configuration.length ? Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getConfiguration"])(prevConfig, stateTransition.configuration) : prevConfig;
    stateTransition.configuration = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(resolvedConfig);
    return this.resolveTransition(stateTransition, currentState, _event);
  };

  StateNode.prototype.resolveRaisedTransition = function (state, _event, originalEvent) {
    var _a;

    var currentActions = state.actions;
    state = this.transition(state, _event); // Save original event to state

    state._event = originalEvent;
    state.event = originalEvent.data;

    (_a = state.actions).unshift.apply(_a, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(currentActions));

    return state;
  };

  StateNode.prototype.resolveTransition = function (stateTransition, currentState, _event, context) {
    var e_6, _a;

    var _this = this;

    if (_event === void 0) {
      _event = _actions_js__WEBPACK_IMPORTED_MODULE_7__["initEvent"];
    }

    if (context === void 0) {
      context = this.machine.context;
    }

    var configuration = stateTransition.configuration; // Transition will "apply" if:
    // - this is the initial state (there is no current state)
    // - OR there are transitions

    var willTransition = !currentState || stateTransition.transitions.length > 0;
    var resolvedStateValue = willTransition ? Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getValue"])(this.machine, configuration) : undefined;
    var historyValue = currentState ? currentState.historyValue ? currentState.historyValue : stateTransition.source ? this.machine.historyValue(currentState.value) : undefined : undefined;
    var currentContext = currentState ? currentState.context : context;
    var actions = this.getActions(stateTransition, currentContext, _event, currentState);
    var activities = currentState ? Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, currentState.activities) : {};

    try {
      for (var actions_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(actions), actions_1_1 = actions_1.next(); !actions_1_1.done; actions_1_1 = actions_1.next()) {
        var action = actions_1_1.value;

        if (action.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["start"]) {
          activities[action.activity.type] = action;
        } else if (action.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["stop"]) {
          activities[action.activity.type] = false;
        }
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (actions_1_1 && !actions_1_1.done && (_a = actions_1.return)) _a.call(actions_1);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["partition"])(actions, function (action) {
      return action.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["assign"];
    }), 2),
        assignActions = _b[0],
        otherActions = _b[1];

    var updatedContext = assignActions.length ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["updateContext"])(currentContext, _event, assignActions, currentState) : currentContext;
    var resolvedActions = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(otherActions.map(function (actionObject) {
      switch (actionObject.type) {
        case _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["raise"]:
          return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["resolveRaise"])(actionObject);

        case _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["send"]:
          var sendAction = Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["resolveSend"])(actionObject, updatedContext, _event, _this.machine.options.delays); // TODO: fix ActionTypes.Init

          if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
            // warn after resolving as we can create better contextual message here
            Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["warn"])(!Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(actionObject.delay) || typeof sendAction.delay === 'number', // tslint:disable-next-line:max-line-length
            "No delay reference for delay expression '" + actionObject.delay + "' was found on machine '" + _this.machine.id + "'");
          }

          return sendAction;

        case _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["log"]:
          return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["resolveLog"])(actionObject, updatedContext, _event);

        case _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["pure"]:
          return actionObject.get(updatedContext, _event.data) || [];

        default:
          return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["toActionObject"])(actionObject, _this.options.actions);
      }
    }));

    var _c = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["partition"])(resolvedActions, function (action) {
      return action.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["raise"] || action.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["send"] && action.to === _types_js__WEBPACK_IMPORTED_MODULE_4__["SpecialTargets"].Internal;
    }), 2),
        raisedEvents = _c[0],
        nonRaisedActions = _c[1];

    var invokeActions = resolvedActions.filter(function (action) {
      return action.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["start"] && action.activity.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["invoke"];
    });
    var children = invokeActions.reduce(function (acc, action) {
      acc[action.activity.id] = Object(_Actor_js__WEBPACK_IMPORTED_MODULE_9__["createInvocableActor"])(action.activity);
      return acc;
    }, currentState ? Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, currentState.children) : {});
    var resolvedConfiguration = resolvedStateValue ? stateTransition.configuration : currentState ? currentState.configuration : [];
    var meta = resolvedConfiguration.reduce(function (acc, stateNode) {
      if (stateNode.meta !== undefined) {
        acc[stateNode.id] = stateNode.meta;
      }

      return acc;
    }, {});
    var isDone = Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["isInFinalState"])(resolvedConfiguration, this);
    var nextState = new _State_js__WEBPACK_IMPORTED_MODULE_8__["State"]({
      value: resolvedStateValue || currentState.value,
      context: updatedContext,
      _event: _event,
      // Persist _sessionid between states
      _sessionid: currentState ? currentState._sessionid : null,
      historyValue: resolvedStateValue ? historyValue ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["updateHistoryValue"])(historyValue, resolvedStateValue) : undefined : currentState ? currentState.historyValue : undefined,
      history: !resolvedStateValue || stateTransition.source ? currentState : undefined,
      actions: resolvedStateValue ? nonRaisedActions : [],
      activities: resolvedStateValue ? activities : currentState ? currentState.activities : {},
      meta: resolvedStateValue ? meta : currentState ? currentState.meta : undefined,
      events: [],
      configuration: resolvedConfiguration,
      transitions: stateTransition.transitions,
      children: children,
      done: isDone
    });
    nextState.changed = _event.name === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["update"] || !!assignActions.length; // Dispose of penultimate histories to prevent memory leaks

    var history = nextState.history;

    if (history) {
      delete history.history;
    }

    if (!resolvedStateValue) {
      return nextState;
    }

    var maybeNextState = nextState;

    if (!isDone) {
      var isTransient = this._transient || configuration.some(function (stateNode) {
        return stateNode._transient;
      });

      if (isTransient) {
        maybeNextState = this.resolveRaisedTransition(maybeNextState, {
          type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["nullEvent"]
        }, _event);
      }

      while (raisedEvents.length) {
        var raisedEvent = raisedEvents.shift();
        maybeNextState = this.resolveRaisedTransition(maybeNextState, raisedEvent._event, _event);
      }
    } // Detect if state changed


    var changed = maybeNextState.changed || (history ? !!maybeNextState.actions.length || !!assignActions.length || typeof history.value !== typeof maybeNextState.value || !Object(_State_js__WEBPACK_IMPORTED_MODULE_8__["stateValuesEqual"])(maybeNextState.value, history.value) : undefined);
    maybeNextState.changed = changed; // Preserve original history after raised events

    maybeNextState.historyValue = nextState.historyValue;
    maybeNextState.history = history;
    return maybeNextState;
  };
  /**
   * Returns the child state node from its relative `stateKey`, or throws.
   */


  StateNode.prototype.getStateNode = function (stateKey) {
    if (isStateId(stateKey)) {
      return this.machine.getStateNodeById(stateKey);
    }

    if (!this.states) {
      throw new Error("Unable to retrieve child state '" + stateKey + "' from '" + this.id + "'; no child states exist.");
    }

    var result = this.states[stateKey];

    if (!result) {
      throw new Error("Child state '" + stateKey + "' does not exist on '" + this.id + "'");
    }

    return result;
  };
  /**
   * Returns the state node with the given `stateId`, or throws.
   *
   * @param stateId The state ID. The prefix "#" is removed.
   */


  StateNode.prototype.getStateNodeById = function (stateId) {
    var resolvedStateId = isStateId(stateId) ? stateId.slice(STATE_IDENTIFIER.length) : stateId;

    if (resolvedStateId === this.id) {
      return this;
    }

    var stateNode = this.machine.idMap[resolvedStateId];

    if (!stateNode) {
      throw new Error("Child state node '#" + resolvedStateId + "' does not exist on machine '" + this.id + "'");
    }

    return stateNode;
  };
  /**
   * Returns the relative state node from the given `statePath`, or throws.
   *
   * @param statePath The string or string array relative path to the state node.
   */


  StateNode.prototype.getStateNodeByPath = function (statePath) {
    if (typeof statePath === 'string' && isStateId(statePath)) {
      try {
        return this.getStateNodeById(statePath.slice(1));
      } catch (e) {// try individual paths
        // throw e;
      }
    }

    var arrayStatePath = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStatePath"])(statePath, this.delimiter).slice();
    var currentStateNode = this;

    while (arrayStatePath.length) {
      var key = arrayStatePath.shift();

      if (!key.length) {
        break;
      }

      currentStateNode = currentStateNode.getStateNode(key);
    }

    return currentStateNode;
  };
  /**
   * Resolves a partial state value with its full representation in this machine.
   *
   * @param stateValue The partial state value to resolve.
   */


  StateNode.prototype.resolve = function (stateValue) {
    var _a;

    var _this = this;

    if (!stateValue) {
      return this.initialStateValue || EMPTY_OBJECT; // TODO: type-specific properties
    }

    switch (this.type) {
      case 'parallel':
        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapValues"])(this.initialStateValue, function (subStateValue, subStateKey) {
          return subStateValue ? _this.getStateNode(subStateKey).resolve(stateValue[subStateKey] || subStateValue) : EMPTY_OBJECT;
        });

      case 'compound':
        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(stateValue)) {
          var subStateNode = this.getStateNode(stateValue);

          if (subStateNode.type === 'parallel' || subStateNode.type === 'compound') {
            return _a = {}, _a[stateValue] = subStateNode.initialStateValue, _a;
          }

          return stateValue;
        }

        if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(stateValue).length) {
          return this.initialStateValue || {};
        }

        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapValues"])(stateValue, function (subStateValue, subStateKey) {
          return subStateValue ? _this.getStateNode(subStateKey).resolve(subStateValue) : EMPTY_OBJECT;
        });

      default:
        return stateValue || EMPTY_OBJECT;
    }
  };

  StateNode.prototype.getResolvedPath = function (stateIdentifier) {
    if (isStateId(stateIdentifier)) {
      var stateNode = this.machine.idMap[stateIdentifier.slice(STATE_IDENTIFIER.length)];

      if (!stateNode) {
        throw new Error("Unable to find state node '" + stateIdentifier + "'");
      }

      return stateNode.path;
    }

    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStatePath"])(stateIdentifier, this.delimiter);
  };

  Object.defineProperty(StateNode.prototype, "initialStateValue", {
    get: function () {
      var _a;

      if (this.__cache.initialStateValue) {
        return this.__cache.initialStateValue;
      }

      var initialStateValue;

      if (this.type === 'parallel') {
        initialStateValue = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapFilterValues"])(this.states, function (state) {
          return state.initialStateValue || EMPTY_OBJECT;
        }, function (stateNode) {
          return !(stateNode.type === 'history');
        });
      } else if (this.initial !== undefined) {
        if (!this.states[this.initial]) {
          throw new Error("Initial state '" + this.initial + "' not found on '" + this.key + "'");
        }

        initialStateValue = Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["isLeafNode"])(this.states[this.initial]) ? this.initial : (_a = {}, _a[this.initial] = this.states[this.initial].initialStateValue, _a);
      }

      this.__cache.initialStateValue = initialStateValue;
      return this.__cache.initialStateValue;
    },
    enumerable: true,
    configurable: true
  });

  StateNode.prototype.getInitialState = function (stateValue, context) {
    var configuration = this.getStateNodes(stateValue);
    return this.resolveTransition({
      configuration: configuration,
      entrySet: configuration,
      exitSet: [],
      transitions: [],
      source: undefined,
      actions: []
    }, undefined, undefined, context);
  };

  Object.defineProperty(StateNode.prototype, "initialState", {
    /**
     * The initial State instance, which includes all actions to be executed from
     * entering the initial state.
     */
    get: function () {
      this._init();

      var initialStateValue = this.initialStateValue;

      if (!initialStateValue) {
        throw new Error("Cannot retrieve initial state from simple state '" + this.id + "'.");
      }

      return this.getInitialState(initialStateValue);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "target", {
    /**
     * The target state value of the history state node, if it exists. This represents the
     * default state value to transition to if no history value exists yet.
     */
    get: function () {
      var target;

      if (this.type === 'history') {
        var historyConfig = this.config;

        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(historyConfig.target)) {
          target = isStateId(historyConfig.target) ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["pathToStateValue"])(this.machine.getStateNodeById(historyConfig.target).path.slice(this.path.length - 1)) : historyConfig.target;
        } else {
          target = historyConfig.target;
        }
      }

      return target;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Returns the leaf nodes from a state path relative to this state node.
   *
   * @param relativeStateId The relative state path to retrieve the state nodes
   * @param history The previous state to retrieve history
   * @param resolve Whether state nodes should resolve to initial child state nodes
   */

  StateNode.prototype.getRelativeStateNodes = function (relativeStateId, historyValue, resolve) {
    if (resolve === void 0) {
      resolve = true;
    }

    return resolve ? relativeStateId.type === 'history' ? relativeStateId.resolveHistory(historyValue) : relativeStateId.initialStateNodes : [relativeStateId];
  };

  Object.defineProperty(StateNode.prototype, "initialStateNodes", {
    get: function () {
      var _this = this;

      if (Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["isLeafNode"])(this)) {
        return [this];
      } // Case when state node is compound but no initial state is defined


      if (this.type === 'compound' && !this.initial) {
        if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["warn"])(false, "Compound state node '" + this.id + "' has no initial state.");
        }

        return [this];
      }

      var initialStateNodePaths = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStatePaths"])(this.initialStateValue);
      return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(initialStateNodePaths.map(function (initialPath) {
        return _this.getFromRelativePath(initialPath);
      }));
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Retrieves state nodes from a relative path to this state node.
   *
   * @param relativePath The relative path from this state node
   * @param historyValue
   */

  StateNode.prototype.getFromRelativePath = function (relativePath) {
    if (!relativePath.length) {
      return [this];
    }

    var _a = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(relativePath),
        stateKey = _a[0],
        childStatePath = _a.slice(1);

    if (!this.states) {
      throw new Error("Cannot retrieve subPath '" + stateKey + "' from node with no states");
    }

    var childStateNode = this.getStateNode(stateKey);

    if (childStateNode.type === 'history') {
      return childStateNode.resolveHistory();
    }

    if (!this.states[stateKey]) {
      throw new Error("Child state '" + stateKey + "' does not exist on '" + this.id + "'");
    }

    return this.states[stateKey].getFromRelativePath(childStatePath);
  };

  StateNode.prototype.historyValue = function (relativeStateValue) {
    if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(this.states).length) {
      return undefined;
    }

    return {
      current: relativeStateValue || this.initialStateValue,
      states: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapFilterValues"])(this.states, function (stateNode, key) {
        if (!relativeStateValue) {
          return stateNode.historyValue();
        }

        var subStateValue = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(relativeStateValue) ? undefined : relativeStateValue[key];
        return stateNode.historyValue(subStateValue || stateNode.initialStateValue);
      }, function (stateNode) {
        return !stateNode.history;
      })
    };
  };
  /**
   * Resolves to the historical value(s) of the parent state node,
   * represented by state nodes.
   *
   * @param historyValue
   */


  StateNode.prototype.resolveHistory = function (historyValue) {
    var _this = this;

    if (this.type !== 'history') {
      return [this];
    }

    var parent = this.parent;

    if (!historyValue) {
      var historyTarget = this.target;
      return historyTarget ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStatePaths"])(historyTarget).map(function (relativeChildPath) {
        return parent.getFromRelativePath(relativeChildPath);
      })) : parent.initialStateNodes;
    }

    var subHistoryValue = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["nestedPath"])(parent.path, 'states')(historyValue).current;

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(subHistoryValue)) {
      return [parent.getStateNode(subHistoryValue)];
    }

    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStatePaths"])(subHistoryValue).map(function (subStatePath) {
      return _this.history === 'deep' ? parent.getFromRelativePath(subStatePath) : [parent.states[subStatePath[0]]];
    }));
  };

  Object.defineProperty(StateNode.prototype, "stateIds", {
    /**
     * All the state node IDs of this state node and its descendant state nodes.
     */
    get: function () {
      var _this = this;

      var childStateIds = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(this.states).map(function (stateKey) {
        return _this.states[stateKey].stateIds;
      }));
      return [this.id].concat(childStateIds);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "events", {
    /**
     * All the event types accepted by this state node and its descendants.
     */
    get: function () {
      var e_7, _a, e_8, _b;

      if (this.__cache.events) {
        return this.__cache.events;
      }

      var states = this.states;
      var events = new Set(this.ownEvents);

      if (states) {
        try {
          for (var _c = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(states)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var stateId = _d.value;
            var state = states[stateId];

            if (state.states) {
              try {
                for (var _e = (e_8 = void 0, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(state.events)), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var event_1 = _f.value;
                  events.add("" + event_1);
                }
              } catch (e_8_1) {
                e_8 = {
                  error: e_8_1
                };
              } finally {
                try {
                  if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                } finally {
                  if (e_8) throw e_8.error;
                }
              }
            }
          }
        } catch (e_7_1) {
          e_7 = {
            error: e_7_1
          };
        } finally {
          try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
          } finally {
            if (e_7) throw e_7.error;
          }
        }
      }

      return this.__cache.events = Array.from(events);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "ownEvents", {
    /**
     * All the events that have transitions directly from this state node.
     *
     * Excludes any inert events.
     */
    get: function () {
      var events = new Set(this.transitions.filter(function (transition) {
        return !(!transition.target && !transition.actions.length && transition.internal);
      }).map(function (transition) {
        return transition.eventType;
      }));
      return Array.from(events);
    },
    enumerable: true,
    configurable: true
  });

  StateNode.prototype.resolveTarget = function (_target) {
    var _this = this;

    if (_target === undefined) {
      // an undefined target signals that the state node should not transition from that state when receiving that event
      return undefined;
    }

    return _target.map(function (target) {
      if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(target)) {
        return target;
      }

      var isInternalTarget = target[0] === _this.delimiter; // If internal target is defined on machine,
      // do not include machine key on target

      if (isInternalTarget && !_this.parent) {
        return _this.getStateNodeByPath(target.slice(1));
      }

      var resolvedTarget = isInternalTarget ? _this.key + target : target;

      if (_this.parent) {
        try {
          var targetStateNode = _this.parent.getStateNodeByPath(resolvedTarget);

          return targetStateNode;
        } catch (err) {
          throw new Error("Invalid transition definition for state node '" + _this.id + "':\n" + err.message);
        }
      } else {
        return _this.getStateNodeByPath(resolvedTarget);
      }
    });
  };

  StateNode.prototype.formatTransition = function (transitionConfig) {
    var _this = this;

    var normalizedTarget = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["normalizeTarget"])(transitionConfig.target);
    var internal = 'internal' in transitionConfig ? transitionConfig.internal : normalizedTarget ? normalizedTarget.some(function (_target) {
      return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(_target) && _target[0] === _this.delimiter;
    }) : true;
    var guards = this.machine.options.guards;
    var target = this.resolveTarget(normalizedTarget);

    var transition = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transitionConfig), {
      actions: Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["toActionObjects"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(transitionConfig.actions)),
      cond: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toGuard"])(transitionConfig.cond, guards),
      target: target,
      source: this,
      internal: internal,
      eventType: transitionConfig.event
    });

    Object.defineProperty(transition, 'toJSON', {
      value: function () {
        return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transition), {
          target: transition.target ? transition.target.map(function (t) {
            return "#" + t.id;
          }) : undefined,
          source: "#{this.id}"
        });
      }
    });
    return transition;
  };

  StateNode.prototype.formatTransitions = function () {
    var e_9, _a;

    var _this = this;

    var onConfig;

    if (!this.config.on) {
      onConfig = [];
    } else if (Array.isArray(this.config.on)) {
      onConfig = this.config.on;
    } else {
      var _b = this.config.on,
          _c = WILDCARD,
          _d = _b[_c],
          wildcardConfigs = _d === void 0 ? [] : _d,
          strictOnConfigs_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_b, [typeof _c === "symbol" ? _c : _c + ""]);

      onConfig = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(strictOnConfigs_1).map(function (key) {
        var arrayified = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toTransitionConfigArray"])(key, strictOnConfigs_1[key]);

        if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
          validateArrayifiedTransitions(_this, key, arrayified);
        }

        return arrayified;
      }).concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toTransitionConfigArray"])(WILDCARD, wildcardConfigs)));
    }

    var doneConfig = this.config.onDone ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toTransitionConfigArray"])(String(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["done"])(this.id)), this.config.onDone) : [];
    var invokeConfig = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(this.invoke.map(function (invokeDef) {
      var settleTransitions = [];

      if (invokeDef.onDone) {
        settleTransitions.push.apply(settleTransitions, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toTransitionConfigArray"])(String(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["doneInvoke"])(invokeDef.id)), invokeDef.onDone)));
      }

      if (invokeDef.onError) {
        settleTransitions.push.apply(settleTransitions, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toTransitionConfigArray"])(String(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["error"])(invokeDef.id)), invokeDef.onError)));
      }

      return settleTransitions;
    }));
    var delayedTransitions = this.after;
    var formattedTransitions = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(doneConfig, invokeConfig, onConfig).map(function (transitionConfig) {
      return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(transitionConfig).map(function (transition) {
        return _this.formatTransition(transition);
      });
    }));

    try {
      for (var delayedTransitions_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(delayedTransitions), delayedTransitions_1_1 = delayedTransitions_1.next(); !delayedTransitions_1_1.done; delayedTransitions_1_1 = delayedTransitions_1.next()) {
        var delayedTransition = delayedTransitions_1_1.value;
        formattedTransitions.push(delayedTransition);
      }
    } catch (e_9_1) {
      e_9 = {
        error: e_9_1
      };
    } finally {
      try {
        if (delayedTransitions_1_1 && !delayedTransitions_1_1.done && (_a = delayedTransitions_1.return)) _a.call(delayedTransitions_1);
      } finally {
        if (e_9) throw e_9.error;
      }
    }

    return formattedTransitions;
  };

  return StateNode;
}();



/***/ }),

/***/ "./node_modules/xstate/es/_virtual/_tslib.js":
/*!***************************************************!*\
  !*** ./node_modules/xstate/es/_virtual/_tslib.js ***!
  \***************************************************/
/*! exports provided: __assign, __read, __rest, __spread, __values */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}



/***/ }),

/***/ "./node_modules/xstate/es/actionTypes.js":
/*!***********************************************!*\
  !*** ./node_modules/xstate/es/actionTypes.js ***!
  \***********************************************/
/*! exports provided: after, assign, cancel, doneState, error, errorExecution, errorPlatform, init, invoke, log, nullEvent, pure, raise, send, start, stop, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "after", function() { return after; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doneState", function() { return doneState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorExecution", function() { return errorExecution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorPlatform", function() { return errorPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return invoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nullEvent", function() { return nullEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pure", function() { return pure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raise", function() { return raise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/xstate/es/types.js");
 // xstate-specific action types

var start = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Start;
var stop = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Stop;
var raise = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Raise;
var send = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Send;
var cancel = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Cancel;
var nullEvent = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].NullEvent;
var assign = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Assign;
var after = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].After;
var doneState = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].DoneState;
var log = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Log;
var init = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Init;
var invoke = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Invoke;
var errorExecution = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].ErrorExecution;
var errorPlatform = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].ErrorPlatform;
var error = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].ErrorCustom;
var update = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Update;
var pure = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Pure;


/***/ }),

/***/ "./node_modules/xstate/es/actions.js":
/*!*******************************************!*\
  !*** ./node_modules/xstate/es/actions.js ***!
  \*******************************************/
/*! exports provided: after, assign, cancel, done, doneInvoke, error, escalate, forwardTo, getActionFunction, initEvent, log, raise, resolveLog, resolveRaise, resolveSend, respond, send, sendParent, sendUpdate, start, stop, toActionObject, toActionObjects, toActivityDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "after", function() { return after; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "done", function() { return done; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doneInvoke", function() { return doneInvoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escalate", function() { return escalate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardTo", function() { return forwardTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionFunction", function() { return getActionFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initEvent", function() { return initEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raise", function() { return raise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveLog", function() { return resolveLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveRaise", function() { return resolveRaise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveSend", function() { return resolveSend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "respond", function() { return respond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendParent", function() { return sendParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendUpdate", function() { return sendUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toActionObject", function() { return toActionObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toActionObjects", function() { return toActionObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toActivityDefinition", function() { return toActivityDefinition; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "./node_modules/xstate/es/types.js");
/* harmony import */ var _actionTypes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionTypes.js */ "./node_modules/xstate/es/actionTypes.js");




var initEvent =
/*#__PURE__*/
Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["toSCXMLEvent"])({
  type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_3__["init"]
});

function getActionFunction(actionType, actionFunctionMap) {
  return actionFunctionMap ? actionFunctionMap[actionType] || undefined : undefined;
}

function toActionObject(action, actionFunctionMap) {
  var actionObject;

  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(action) || typeof action === 'number') {
    var exec = getActionFunction(action, actionFunctionMap);

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(exec)) {
      actionObject = {
        type: action,
        exec: exec
      };
    } else if (exec) {
      actionObject = exec;
    } else {
      actionObject = {
        type: action,
        exec: undefined
      };
    }
  } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(action)) {
    actionObject = {
      // Convert action to string if unnamed
      type: action.name || action.toString(),
      exec: action
    };
  } else {
    var exec = getActionFunction(action.type, actionFunctionMap);

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(exec)) {
      actionObject = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, action), {
        exec: exec
      });
    } else if (exec) {
      var type = action.type,
          other = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__rest"])(action, ["type"]);

      actionObject = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
        type: type
      }, exec), other);
    } else {
      actionObject = action;
    }
  }

  Object.defineProperty(actionObject, 'toString', {
    value: function () {
      return actionObject.type;
    },
    enumerable: false,
    configurable: true
  });
  return actionObject;
}

var toActionObjects = function (action, actionFunctionMap) {
  if (!action) {
    return [];
  }

  var actions = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isArray"])(action) ? action : [action];
  return actions.map(function (subAction) {
    return toActionObject(subAction, actionFunctionMap);
  });
};

function toActivityDefinition(action) {
  var actionObject = toActionObject(action);
  return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
    id: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(action) ? action : actionObject.id
  }, actionObject), {
    type: actionObject.type
  });
}
/**
 * Raises an event. This places the event in the internal event queue, so that
 * the event is immediately consumed by the machine in the current step.
 *
 * @param eventType The event to raise.
 */


function raise(event) {
  if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(event)) {
    return send(event, {
      to: _types_js__WEBPACK_IMPORTED_MODULE_2__["SpecialTargets"].Internal
    });
  }

  return {
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_3__["raise"],
    event: event
  };
}

function resolveRaise(action) {
  return {
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_3__["raise"],
    _event: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["toSCXMLEvent"])(action.event)
  };
}
/**
 * Sends an event. This returns an action that will be read by an interpreter to
 * send the event in the next step, after the current step is finished executing.
 *
 * @param event The event to send.
 * @param options Options to pass into the send event:
 *  - `id` - The unique send event identifier (used with `cancel()`).
 *  - `delay` - The number of milliseconds to delay the sending of the event.
 *  - `to` - The target of this event (by default, the machine the event was sent from).
 */


function send(event, options) {
  return {
    to: options ? options.to : undefined,
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_3__["send"],
    event: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(event) ? event : Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["toEventObject"])(event),
    delay: options ? options.delay : undefined,
    id: options && options.id !== undefined ? options.id : Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(event) ? event.name : Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getEventType"])(event)
  };
}

function resolveSend(action, ctx, _event, delaysMap) {
  var meta = {
    _event: _event
  }; // TODO: helper function for resolving Expr

  var resolvedEvent = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["toSCXMLEvent"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(action.event) ? action.event(ctx, _event.data, meta) : action.event);
  var resolvedDelay;

  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(action.delay)) {
    var configDelay = delaysMap && delaysMap[action.delay];
    resolvedDelay = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(configDelay) ? configDelay(ctx, _event.data, meta) : configDelay;
  } else {
    resolvedDelay = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(action.delay) ? action.delay(ctx, _event.data, meta) : action.delay;
  }

  var resolvedTarget = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(action.to) ? action.to(ctx, _event.data, meta) : action.to;
  return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, action), {
    to: resolvedTarget,
    _event: resolvedEvent,
    event: resolvedEvent.data,
    delay: resolvedDelay
  });
}
/**
 * Sends an event to this machine's parent.
 *
 * @param event The event to send to the parent machine.
 * @param options Options to pass into the send event.
 */


function sendParent(event, options) {
  return send(event, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
    to: _types_js__WEBPACK_IMPORTED_MODULE_2__["SpecialTargets"].Parent
  }));
}
/**
 * Sends an update event to this machine's parent.
 */


function sendUpdate() {
  return sendParent(_actionTypes_js__WEBPACK_IMPORTED_MODULE_3__["update"]);
}
/**
 * Sends an event back to the sender of the original event.
 *
 * @param event The event to send back to the sender
 * @param options Options to pass into the send event
 */


function respond(event, options) {
  return send(event, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
    to: function (_, __, _a) {
      var _event = _a._event;
      return _event.origin; // TODO: handle when _event.origin is undefined
    }
  }));
}

var defaultLogExpr = function (context, event) {
  return {
    context: context,
    event: event
  };
};
/**
 *
 * @param expr The expression function to evaluate which will be logged.
 *  Takes in 2 arguments:
 *  - `ctx` - the current state context
 *  - `event` - the event that caused this action to be executed.
 * @param label The label to give to the logged expression.
 */


function log(expr, label) {
  if (expr === void 0) {
    expr = defaultLogExpr;
  }

  return {
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_3__["log"],
    label: label,
    expr: expr
  };
}

var resolveLog = function (action, ctx, _event) {
  return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, action), {
    value: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(action.expr) ? action.expr : action.expr(ctx, _event.data, {
      _event: _event
    })
  });
};
/**
 * Cancels an in-flight `send(...)` action. A canceled sent action will not
 * be executed, nor will its event be sent, unless it has already been sent
 * (e.g., if `cancel(...)` is called after the `send(...)` action's `delay`).
 *
 * @param sendId The `id` of the `send(...)` action to cancel.
 */


var cancel = function (sendId) {
  return {
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_3__["cancel"],
    sendId: sendId
  };
};
/**
 * Starts an activity.
 *
 * @param activity The activity to start.
 */


function start(activity) {
  var activityDef = toActivityDefinition(activity);
  return {
    type: _types_js__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].Start,
    activity: activityDef,
    exec: undefined
  };
}
/**
 * Stops an activity.
 *
 * @param activity The activity to stop.
 */


function stop(activity) {
  var activityDef = toActivityDefinition(activity);
  return {
    type: _types_js__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].Stop,
    activity: activityDef,
    exec: undefined
  };
}
/**
 * Updates the current context of the machine.
 *
 * @param assignment An object that represents the partial context to update.
 */


var assign = function (assignment) {
  return {
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_3__["assign"],
    assignment: assignment
  };
};
/**
 * Returns an event type that represents an implicit event that
 * is sent after the specified `delay`.
 *
 * @param delayRef The delay in milliseconds
 * @param id The state node ID where this event is handled
 */


function after(delayRef, id) {
  var idSuffix = id ? "#" + id : '';
  return _types_js__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].After + "(" + delayRef + ")" + idSuffix;
}
/**
 * Returns an event that represents that a final state node
 * has been reached in the parent state node.
 *
 * @param id The final state node's parent state node `id`
 * @param data The data to pass into the event
 */


function done(id, data) {
  var type = _types_js__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].DoneState + "." + id;
  var eventObject = {
    type: type,
    data: data
  };

  eventObject.toString = function () {
    return type;
  };

  return eventObject;
}
/**
 * Returns an event that represents that an invoked service has terminated.
 *
 * An invoked service is terminated when it has reached a top-level final state node,
 * but not when it is canceled.
 *
 * @param id The final state node ID
 * @param data The data to pass into the event
 */


function doneInvoke(id, data) {
  var type = _types_js__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].DoneInvoke + "." + id;
  var eventObject = {
    type: type,
    data: data
  };

  eventObject.toString = function () {
    return type;
  };

  return eventObject;
}

function error(id, data) {
  var type = _types_js__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].ErrorPlatform + "." + id;
  var eventObject = {
    type: type,
    data: data
  };

  eventObject.toString = function () {
    return type;
  };

  return eventObject;
}
/**
 * Forwards (sends) an event to a specified service.
 *
 * @param target The target service to forward the event to.
 * @param options Options to pass into the send action creator.
 */


function forwardTo(target, options) {
  return send(function (_, event) {
    return event;
  }, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
    to: target
  }));
}
/**
 * Escalates an error by sending it as an event to this machine's parent.
 *
 * @param errorData The error data to send, or the expression function that
 * takes in the `context`, `event`, and `meta`, and returns the error data to send.
 * @param options Options to pass into the send action creator.
 */


function escalate(errorData, options) {
  return sendParent(function (context, event, meta) {
    return {
      type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_3__["error"],
      data: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(errorData) ? errorData(context, event, meta) : errorData
    };
  }, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
    to: _types_js__WEBPACK_IMPORTED_MODULE_2__["SpecialTargets"].Parent
  }));
}



/***/ }),

/***/ "./node_modules/xstate/es/constants.js":
/*!*********************************************!*\
  !*** ./node_modules/xstate/es/constants.js ***!
  \*********************************************/
/*! exports provided: DEFAULT_GUARD_TYPE, EMPTY_ACTIVITY_MAP, STATE_DELIMITER, TARGETLESS_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GUARD_TYPE", function() { return DEFAULT_GUARD_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_ACTIVITY_MAP", function() { return EMPTY_ACTIVITY_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_DELIMITER", function() { return STATE_DELIMITER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TARGETLESS_KEY", function() { return TARGETLESS_KEY; });
var STATE_DELIMITER = '.';
var EMPTY_ACTIVITY_MAP = {};
var DEFAULT_GUARD_TYPE = 'xstate.guard';
var TARGETLESS_KEY = '';


/***/ }),

/***/ "./node_modules/xstate/es/devTools.js":
/*!********************************************!*\
  !*** ./node_modules/xstate/es/devTools.js ***!
  \********************************************/
/*! exports provided: registerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerService", function() { return registerService; });
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment.js */ "./node_modules/xstate/es/environment.js");


function getDevTools() {
  var w = window;

  if (!!w.__xstate__) {
    return w.__xstate__;
  }

  return undefined;
}

function registerService(service) {
  if (_environment_js__WEBPACK_IMPORTED_MODULE_0__["IS_PRODUCTION"] || typeof window === 'undefined') {
    return;
  }

  var devTools = getDevTools();

  if (devTools) {
    devTools.register(service);
  }
}



/***/ }),

/***/ "./node_modules/xstate/es/environment.js":
/*!***********************************************!*\
  !*** ./node_modules/xstate/es/environment.js ***!
  \***********************************************/
/*! exports provided: IS_PRODUCTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_PRODUCTION", function() { return IS_PRODUCTION; });
var IS_PRODUCTION = "development" === 'production';


/***/ }),

/***/ "./node_modules/xstate/es/index.js":
/*!*****************************************!*\
  !*** ./node_modules/xstate/es/index.js ***!
  \*****************************************/
/*! exports provided: matchesState, mapState, ActionTypes, SpecialTargets, assign, doneInvoke, forwardTo, send, sendParent, sendUpdate, State, StateNode, Machine, createMachine, Interpreter, interpret, spawn, matchState, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchesState", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_0__["matchesState"]; });

/* harmony import */ var _mapState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapState.js */ "./node_modules/xstate/es/mapState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return _mapState_js__WEBPACK_IMPORTED_MODULE_1__["mapState"]; });

/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "./node_modules/xstate/es/types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return _types_js__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpecialTargets", function() { return _types_js__WEBPACK_IMPORTED_MODULE_2__["SpecialTargets"]; });

/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions.js */ "./node_modules/xstate/es/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_3__["assign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doneInvoke", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_3__["doneInvoke"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forwardTo", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_3__["forwardTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "send", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_3__["send"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendParent", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_3__["sendParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendUpdate", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_3__["sendUpdate"]; });

/* harmony import */ var _State_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./State.js */ "./node_modules/xstate/es/State.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "State", function() { return _State_js__WEBPACK_IMPORTED_MODULE_4__["State"]; });

/* harmony import */ var _StateNode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StateNode.js */ "./node_modules/xstate/es/StateNode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateNode", function() { return _StateNode_js__WEBPACK_IMPORTED_MODULE_5__["StateNode"]; });

/* harmony import */ var _Machine_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Machine.js */ "./node_modules/xstate/es/Machine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Machine", function() { return _Machine_js__WEBPACK_IMPORTED_MODULE_6__["Machine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMachine", function() { return _Machine_js__WEBPACK_IMPORTED_MODULE_6__["createMachine"]; });

/* harmony import */ var _interpreter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interpreter.js */ "./node_modules/xstate/es/interpreter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Interpreter", function() { return _interpreter_js__WEBPACK_IMPORTED_MODULE_7__["Interpreter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpret", function() { return _interpreter_js__WEBPACK_IMPORTED_MODULE_7__["interpret"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return _interpreter_js__WEBPACK_IMPORTED_MODULE_7__["spawn"]; });

/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./match.js */ "./node_modules/xstate/es/match.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchState", function() { return _match_js__WEBPACK_IMPORTED_MODULE_8__["matchState"]; });











var actions = {
  raise: _actions_js__WEBPACK_IMPORTED_MODULE_3__["raise"],
  send: _actions_js__WEBPACK_IMPORTED_MODULE_3__["send"],
  sendParent: _actions_js__WEBPACK_IMPORTED_MODULE_3__["sendParent"],
  sendUpdate: _actions_js__WEBPACK_IMPORTED_MODULE_3__["sendUpdate"],
  log: _actions_js__WEBPACK_IMPORTED_MODULE_3__["log"],
  cancel: _actions_js__WEBPACK_IMPORTED_MODULE_3__["cancel"],
  start: _actions_js__WEBPACK_IMPORTED_MODULE_3__["start"],
  stop: _actions_js__WEBPACK_IMPORTED_MODULE_3__["stop"],
  assign: _actions_js__WEBPACK_IMPORTED_MODULE_3__["assign"],
  after: _actions_js__WEBPACK_IMPORTED_MODULE_3__["after"],
  done: _actions_js__WEBPACK_IMPORTED_MODULE_3__["done"],
  respond: _actions_js__WEBPACK_IMPORTED_MODULE_3__["respond"],
  forwardTo: _actions_js__WEBPACK_IMPORTED_MODULE_3__["forwardTo"],
  escalate: _actions_js__WEBPACK_IMPORTED_MODULE_3__["escalate"]
};


/***/ }),

/***/ "./node_modules/xstate/es/interpreter.js":
/*!***********************************************!*\
  !*** ./node_modules/xstate/es/interpreter.js ***!
  \***********************************************/
/*! exports provided: Interpreter, interpret, spawn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interpreter", function() { return Interpreter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpret", function() { return interpret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return spawn; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment.js */ "./node_modules/xstate/es/environment.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "./node_modules/xstate/es/types.js");
/* harmony import */ var _stateUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stateUtils.js */ "./node_modules/xstate/es/stateUtils.js");
/* harmony import */ var _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actionTypes.js */ "./node_modules/xstate/es/actionTypes.js");
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions.js */ "./node_modules/xstate/es/actions.js");
/* harmony import */ var _State_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./State.js */ "./node_modules/xstate/es/State.js");
/* harmony import */ var _Actor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Actor.js */ "./node_modules/xstate/es/Actor.js");
/* harmony import */ var _scheduler_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scheduler.js */ "./node_modules/xstate/es/scheduler.js");
/* harmony import */ var _registry_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registry.js */ "./node_modules/xstate/es/registry.js");
/* harmony import */ var _devTools_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./devTools.js */ "./node_modules/xstate/es/devTools.js");












var DEFAULT_SPAWN_OPTIONS = {
  sync: false,
  autoForward: false
};
/**
 * Maintains a stack of the current service in scope.
 * This is used to provide the correct service to spawn().
 *
 * @private
 */

var withServiceScope =
/*#__PURE__*/
function () {
  var serviceStack = [];
  return function (service, fn) {
    service && serviceStack.push(service);
    var result = fn(service || serviceStack[serviceStack.length - 1]);
    service && serviceStack.pop();
    return result;
  };
}();

var InterpreterStatus;

(function (InterpreterStatus) {
  InterpreterStatus[InterpreterStatus["NotStarted"] = 0] = "NotStarted";
  InterpreterStatus[InterpreterStatus["Running"] = 1] = "Running";
  InterpreterStatus[InterpreterStatus["Stopped"] = 2] = "Stopped";
})(InterpreterStatus || (InterpreterStatus = {}));

var Interpreter =
/*#__PURE__*/

/** @class */
function () {
  /**
   * Creates a new Interpreter instance (i.e., service) for the given machine with the provided options, if any.
   *
   * @param machine The machine to be interpreted
   * @param options Interpreter options
   */
  function Interpreter(machine, options) {
    var _this = this;

    if (options === void 0) {
      options = Interpreter.defaultOptions;
    }

    this.machine = machine;
    this.scheduler = new _scheduler_js__WEBPACK_IMPORTED_MODULE_9__["Scheduler"]();
    this.delayedEventsMap = {};
    this.listeners = new Set();
    this.contextListeners = new Set();
    this.stopListeners = new Set();
    this.doneListeners = new Set();
    this.eventListeners = new Set();
    this.sendListeners = new Set();
    /**
     * Whether the service is started.
     */

    this.initialized = false;
    this._status = InterpreterStatus.NotStarted;
    this.children = new Map();
    this.forwardTo = new Set();
    /**
     * Alias for Interpreter.prototype.start
     */

    this.init = this.start;
    /**
     * Sends an event to the running interpreter to trigger a transition.
     *
     * An array of events (batched) can be sent as well, which will send all
     * batched events to the running interpreter. The listeners will be
     * notified only **once** when all events are processed.
     *
     * @param event The event(s) to send
     */

    this.send = function (event, payload) {
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isArray"])(event)) {
        _this.batch(event);

        return _this.state;
      }

      var _event = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toEventObject"])(event, payload));

      if (_this._status === InterpreterStatus.Stopped) {
        // do nothing
        if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, "Event \"" + _event.name + "\" was sent to stopped service \"" + _this.machine.id + "\". This service has already reached its final state, and will not transition.\nEvent: " + JSON.stringify(_event.data));
        }

        return _this.state;
      }

      if (_this._status === InterpreterStatus.NotStarted && _this.options.deferEvents) {
        // tslint:disable-next-line:no-console
        if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, "Event \"" + _event.name + "\" was sent to uninitialized service \"" + _this.machine.id + "\" and is deferred. Make sure .start() is called for this service.\nEvent: " + JSON.stringify(_event.data));
        }
      } else if (_this._status !== InterpreterStatus.Running) {
        throw new Error("Event \"" + _event.name + "\" was sent to uninitialized service \"" + _this.machine.id + "\". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: " + JSON.stringify(_event.data));
      }

      _this.scheduler.schedule(function () {
        // Forward copy of event to child actors
        _this.forward(_event);

        var nextState = _this.nextState(_event);

        _this.update(nextState, _event);
      });

      return _this._state; // TODO: deprecate (should return void)
      // tslint:disable-next-line:semicolon
    };

    this.sendTo = function (event, to) {
      var isParent = _this.parent && (to === _types_js__WEBPACK_IMPORTED_MODULE_3__["SpecialTargets"].Parent || _this.parent.id === to);
      var target = isParent ? _this.parent : Object(_Actor_js__WEBPACK_IMPORTED_MODULE_8__["isActor"])(to) ? to : _this.children.get(to) || _registry_js__WEBPACK_IMPORTED_MODULE_10__["registry"].get(to);

      if (!target) {
        if (!isParent) {
          throw new Error("Unable to send event to child '" + to + "' from service '" + _this.id + "'.");
        } // tslint:disable-next-line:no-console


        if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, "Service '" + _this.id + "' has no parent: unable to send event " + event.type);
        }

        return;
      }

      if ('machine' in target) {
        // Send SCXML events to machines
        target.send(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), {
          name: event.name === _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["error"] ? "" + Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["error"])(_this.id) : event.name,
          origin: _this.sessionId
        }));
      } else {
        // Send normal events to other targets
        target.send(event.data);
      }
    };

    var resolvedOptions = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Interpreter.defaultOptions), options);

    var clock = resolvedOptions.clock,
        logger = resolvedOptions.logger,
        parent = resolvedOptions.parent,
        id = resolvedOptions.id;
    var resolvedId = id !== undefined ? id : machine.id;
    this.id = resolvedId;
    this.logger = logger;
    this.clock = clock;
    this.parent = parent;
    this.options = resolvedOptions;
    this.scheduler = new _scheduler_js__WEBPACK_IMPORTED_MODULE_9__["Scheduler"]({
      deferEvents: this.options.deferEvents
    });
    this.sessionId = _registry_js__WEBPACK_IMPORTED_MODULE_10__["registry"].bookId();
  }

  Object.defineProperty(Interpreter.prototype, "initialState", {
    get: function () {
      var _this = this;

      if (this._initialState) {
        return this._initialState;
      }

      return withServiceScope(this, function () {
        _this._initialState = _this.machine.initialState;
        return _this._initialState;
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Interpreter.prototype, "state", {
    get: function () {
      if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(this._status !== InterpreterStatus.NotStarted, "Attempted to read state from uninitialized service '" + this.id + "'. Make sure the service is started first.");
      }

      return this._state;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Executes the actions of the given state, with that state's `context` and `event`.
   *
   * @param state The state whose actions will be executed
   * @param actionsConfig The action implementations to use
   */

  Interpreter.prototype.execute = function (state, actionsConfig) {
    var e_1, _a;

    try {
      for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(state.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
        var action = _c.value;
        this.exec(action, state, actionsConfig);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };

  Interpreter.prototype.update = function (state, _event) {
    var e_2, _a, e_3, _b, e_4, _c, e_5, _d;

    var _this = this; // Attach session ID to state


    state._sessionid = this.sessionId; // Update state

    this._state = state; // Execute actions

    if (this.options.execute) {
      this.execute(this.state);
    } // Dev tools


    if (this.devTools) {
      this.devTools.send(_event.data, state);
    } // Execute listeners


    if (state.event) {
      try {
        for (var _e = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.eventListeners), _f = _e.next(); !_f.done; _f = _e.next()) {
          var listener = _f.value;
          listener(state.event);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    }

    try {
      for (var _g = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.listeners), _h = _g.next(); !_h.done; _h = _g.next()) {
        var listener = _h.value;
        listener(state, state.event);
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    try {
      for (var _j = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.contextListeners), _k = _j.next(); !_k.done; _k = _j.next()) {
        var contextListener = _k.value;
        contextListener(this.state.context, this.state.history ? this.state.history.context : undefined);
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    var isDone = Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_4__["isInFinalState"])(state.configuration || [], this.machine);

    if (this.state.configuration && isDone) {
      // get final child state node
      var finalChildStateNode = state.configuration.find(function (sn) {
        return sn.type === 'final' && sn.parent === _this.machine;
      });
      var doneData = finalChildStateNode && finalChildStateNode.data ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["mapContext"])(finalChildStateNode.data, state.context, _event) : undefined;

      try {
        for (var _l = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.doneListeners), _m = _l.next(); !_m.done; _m = _l.next()) {
          var listener = _m.value;
          listener(Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["doneInvoke"])(this.id, doneData));
        }
      } catch (e_5_1) {
        e_5 = {
          error: e_5_1
        };
      } finally {
        try {
          if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
        } finally {
          if (e_5) throw e_5.error;
        }
      }

      this.stop();
    }
  };
  /*
   * Adds a listener that is notified whenever a state transition happens. The listener is called with
   * the next state and the event object that caused the state transition.
   *
   * @param listener The state listener
   */


  Interpreter.prototype.onTransition = function (listener) {
    this.listeners.add(listener); // Send current state to listener

    if (this._status === InterpreterStatus.Running) {
      listener(this.state, this.state.event);
    }

    return this;
  };

  Interpreter.prototype.subscribe = function (nextListenerOrObserver, // @ts-ignore
  errorListener, completeListener) {
    var _this = this;

    if (!nextListenerOrObserver) {
      return {
        unsubscribe: function () {
          return void 0;
        }
      };
    }

    var listener;
    var resolvedCompleteListener = completeListener;

    if (typeof nextListenerOrObserver === 'function') {
      listener = nextListenerOrObserver;
    } else {
      listener = nextListenerOrObserver.next.bind(nextListenerOrObserver);
      resolvedCompleteListener = nextListenerOrObserver.complete.bind(nextListenerOrObserver);
    }

    this.listeners.add(listener); // Send current state to listener

    if (this._status === InterpreterStatus.Running) {
      listener(this.state);
    }

    if (resolvedCompleteListener) {
      this.onDone(resolvedCompleteListener);
    }

    return {
      unsubscribe: function () {
        listener && _this.listeners.delete(listener);
        resolvedCompleteListener && _this.doneListeners.delete(resolvedCompleteListener);
      }
    };
  };
  /**
   * Adds an event listener that is notified whenever an event is sent to the running interpreter.
   * @param listener The event listener
   */


  Interpreter.prototype.onEvent = function (listener) {
    this.eventListeners.add(listener);
    return this;
  };
  /**
   * Adds an event listener that is notified whenever a `send` event occurs.
   * @param listener The event listener
   */


  Interpreter.prototype.onSend = function (listener) {
    this.sendListeners.add(listener);
    return this;
  };
  /**
   * Adds a context listener that is notified whenever the state context changes.
   * @param listener The context listener
   */


  Interpreter.prototype.onChange = function (listener) {
    this.contextListeners.add(listener);
    return this;
  };
  /**
   * Adds a listener that is notified when the machine is stopped.
   * @param listener The listener
   */


  Interpreter.prototype.onStop = function (listener) {
    this.stopListeners.add(listener);
    return this;
  };
  /**
   * Adds a state listener that is notified when the statechart has reached its final state.
   * @param listener The state listener
   */


  Interpreter.prototype.onDone = function (listener) {
    this.doneListeners.add(listener);
    return this;
  };
  /**
   * Removes a listener.
   * @param listener The listener to remove
   */


  Interpreter.prototype.off = function (listener) {
    this.listeners.delete(listener);
    this.eventListeners.delete(listener);
    this.sendListeners.delete(listener);
    this.stopListeners.delete(listener);
    this.doneListeners.delete(listener);
    this.contextListeners.delete(listener);
    return this;
  };
  /**
   * Starts the interpreter from the given state, or the initial state.
   * @param initialState The state to start the statechart from
   */


  Interpreter.prototype.start = function (initialState) {
    var _this = this;

    if (this._status === InterpreterStatus.Running) {
      // Do not restart the service if it is already started
      return this;
    }

    _registry_js__WEBPACK_IMPORTED_MODULE_10__["registry"].register(this.sessionId, this);
    this.initialized = true;
    this._status = InterpreterStatus.Running;
    var resolvedState = initialState === undefined ? this.initialState : withServiceScope(this, function () {
      return Object(_State_js__WEBPACK_IMPORTED_MODULE_7__["isState"])(initialState) ? _this.machine.resolveState(initialState) : _this.machine.resolveState(_State_js__WEBPACK_IMPORTED_MODULE_7__["State"].from(initialState, _this.machine.context));
    });

    if (this.options.devTools) {
      this.attachDev();
    }

    this.scheduler.initialize(function () {
      _this.update(resolvedState, _actions_js__WEBPACK_IMPORTED_MODULE_6__["initEvent"]);
    });
    return this;
  };
  /**
   * Stops the interpreter and unsubscribe all listeners.
   *
   * This will also notify the `onStop` listeners.
   */


  Interpreter.prototype.stop = function () {
    var e_6, _a, e_7, _b, e_8, _c, e_9, _d, e_10, _e;

    try {
      for (var _f = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.listeners), _g = _f.next(); !_g.done; _g = _f.next()) {
        var listener = _g.value;
        this.listeners.delete(listener);
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    try {
      for (var _h = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.stopListeners), _j = _h.next(); !_j.done; _j = _h.next()) {
        var listener = _j.value; // call listener, then remove

        listener();
        this.stopListeners.delete(listener);
      }
    } catch (e_7_1) {
      e_7 = {
        error: e_7_1
      };
    } finally {
      try {
        if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
      } finally {
        if (e_7) throw e_7.error;
      }
    }

    try {
      for (var _k = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.contextListeners), _l = _k.next(); !_l.done; _l = _k.next()) {
        var listener = _l.value;
        this.contextListeners.delete(listener);
      }
    } catch (e_8_1) {
      e_8 = {
        error: e_8_1
      };
    } finally {
      try {
        if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
      } finally {
        if (e_8) throw e_8.error;
      }
    }

    try {
      for (var _m = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.doneListeners), _o = _m.next(); !_o.done; _o = _m.next()) {
        var listener = _o.value;
        this.doneListeners.delete(listener);
      }
    } catch (e_9_1) {
      e_9 = {
        error: e_9_1
      };
    } finally {
      try {
        if (_o && !_o.done && (_d = _m.return)) _d.call(_m);
      } finally {
        if (e_9) throw e_9.error;
      }
    } // Stop all children


    this.children.forEach(function (child) {
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(child.stop)) {
        child.stop();
      }
    });

    try {
      // Cancel all delayed events
      for (var _p = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["keys"])(this.delayedEventsMap)), _q = _p.next(); !_q.done; _q = _p.next()) {
        var key = _q.value;
        this.clock.clearTimeout(this.delayedEventsMap[key]);
      }
    } catch (e_10_1) {
      e_10 = {
        error: e_10_1
      };
    } finally {
      try {
        if (_q && !_q.done && (_e = _p.return)) _e.call(_p);
      } finally {
        if (e_10) throw e_10.error;
      }
    }

    this.scheduler.clear();
    this.initialized = false;
    this._status = InterpreterStatus.Stopped;
    _registry_js__WEBPACK_IMPORTED_MODULE_10__["registry"].free(this.sessionId);
    return this;
  };

  Interpreter.prototype.batch = function (events) {
    var _this = this;

    if (this._status === InterpreterStatus.NotStarted && this.options.deferEvents) {
      // tslint:disable-next-line:no-console
      if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, events.length + " event(s) were sent to uninitialized service \"" + this.machine.id + "\" and are deferred. Make sure .start() is called for this service.\nEvent: " + JSON.stringify(event));
      }
    } else if (this._status !== InterpreterStatus.Running) {
      throw new Error( // tslint:disable-next-line:max-line-length
      events.length + " event(s) were sent to uninitialized service \"" + this.machine.id + "\". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.");
    }

    this.scheduler.schedule(function () {
      var e_11, _a;

      var nextState = _this.state;
      var batchChanged = false;
      var batchedActions = [];

      var _loop_1 = function (event_1) {
        var _event = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(event_1);

        _this.forward(_event);

        nextState = withServiceScope(_this, function () {
          return _this.machine.transition(nextState, _event);
        });
        batchedActions.push.apply(batchedActions, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(nextState.actions.map(function (a) {
          return Object(_State_js__WEBPACK_IMPORTED_MODULE_7__["bindActionToState"])(a, nextState);
        })));
        batchChanged = batchChanged || !!nextState.changed;
      };

      try {
        for (var events_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
          var event_1 = events_1_1.value;

          _loop_1(event_1);
        }
      } catch (e_11_1) {
        e_11 = {
          error: e_11_1
        };
      } finally {
        try {
          if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
        } finally {
          if (e_11) throw e_11.error;
        }
      }

      nextState.changed = batchChanged;
      nextState.actions = batchedActions;

      _this.update(nextState, Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(events[events.length - 1]));
    });
  };
  /**
   * Returns a send function bound to this interpreter instance.
   *
   * @param event The event to be sent by the sender.
   */


  Interpreter.prototype.sender = function (event) {
    return this.send.bind(this, event);
  };
  /**
   * Returns the next state given the interpreter's current state and the event.
   *
   * This is a pure method that does _not_ update the interpreter's state.
   *
   * @param event The event to determine the next state
   */


  Interpreter.prototype.nextState = function (event) {
    var _this = this;

    var _event = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(event);

    if (_event.name.indexOf(_actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["errorPlatform"]) === 0 && !this.state.nextEvents.some(function (nextEvent) {
      return nextEvent.indexOf(_actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["errorPlatform"]) === 0;
    })) {
      throw _event.data.data;
    }

    var nextState = withServiceScope(this, function () {
      return _this.machine.transition(_this.state, _event);
    });
    return nextState;
  };

  Interpreter.prototype.forward = function (event) {
    var e_12, _a;

    try {
      for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.forwardTo), _c = _b.next(); !_c.done; _c = _b.next()) {
        var id = _c.value;
        var child = this.children.get(id);

        if (!child) {
          throw new Error("Unable to forward event '" + event + "' from interpreter '" + this.id + "' to nonexistant child '" + id + "'.");
        }

        child.send(event);
      }
    } catch (e_12_1) {
      e_12 = {
        error: e_12_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_12) throw e_12.error;
      }
    }
  };

  Interpreter.prototype.defer = function (sendAction) {
    var _this = this;

    this.delayedEventsMap[sendAction.id] = this.clock.setTimeout(function () {
      if (sendAction.to) {
        _this.sendTo(sendAction._event, sendAction.to);
      } else {
        _this.send(sendAction._event);
      }
    }, sendAction.delay);
  };

  Interpreter.prototype.cancel = function (sendId) {
    this.clock.clearTimeout(this.delayedEventsMap[sendId]);
    delete this.delayedEventsMap[sendId];
  };

  Interpreter.prototype.exec = function (action, state, actionFunctionMap) {
    var context = state.context,
        _event = state._event;
    var actionOrExec = Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["getActionFunction"])(action.type, actionFunctionMap) || action.exec;
    var exec = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(actionOrExec) ? actionOrExec : actionOrExec ? actionOrExec.exec : action.exec;

    if (exec) {
      try {
        return exec(context, _event.data, {
          action: action,
          state: this.state,
          _event: _event
        });
      } catch (err) {
        if (this.parent) {
          this.parent.send({
            type: 'xstate.error',
            data: err
          });
        }

        throw err;
      }
    }

    switch (action.type) {
      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["send"]:
        var sendAction = action;

        if (typeof sendAction.delay === 'number') {
          this.defer(sendAction);
          return;
        } else {
          if (sendAction.to) {
            this.sendTo(sendAction._event, sendAction.to);
          } else {
            this.send(sendAction._event);
          }
        }

        break;

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["cancel"]:
        this.cancel(action.sendId);
        break;

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["start"]:
        {
          var activity = action.activity; // If the activity will be stopped right after it's started
          // (such as in transient states)
          // don't bother starting the activity.

          if (!this.state.activities[activity.type]) {
            break;
          } // Invoked services


          if (activity.type === _types_js__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].Invoke) {
            var serviceCreator = this.machine.options.services ? this.machine.options.services[activity.src] : undefined;
            var id = activity.id,
                data = activity.data;

            if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
              Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(!('forward' in activity), // tslint:disable-next-line:max-line-length
              "`forward` property is deprecated (found in invocation of '" + activity.src + "' in in machine '" + this.machine.id + "'). " + "Please use `autoForward` instead.");
            }

            var autoForward = 'autoForward' in activity ? activity.autoForward : !!activity.forward;

            if (!serviceCreator) {
              // tslint:disable-next-line:no-console
              if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
                Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, "No service found for invocation '" + activity.src + "' in machine '" + this.machine.id + "'.");
              }

              return;
            }

            var source = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(serviceCreator) ? serviceCreator(context, _event.data) : serviceCreator;

            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isPromiseLike"])(source)) {
              this.state.children[id] = this.spawnPromise(Promise.resolve(source), id);
            } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(source)) {
              this.state.children[id] = this.spawnCallback(source, id);
            } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(source)) {
              this.state.children[id] = this.spawnObservable(source, id);
            } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isMachine"])(source)) {
              // TODO: try/catch here
              this.state.children[id] = this.spawnMachine(data ? source.withContext(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["mapContext"])(data, context, _event)) : source, {
                id: id,
                autoForward: autoForward
              });
            }
          } else {
            this.spawnActivity(activity);
          }

          break;
        }

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["stop"]:
        {
          this.stopChild(action.activity.id);
          break;
        }

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["log"]:
        var label = action.label,
            value = action.value;

        if (label) {
          this.logger(label, value);
        } else {
          this.logger(value);
        }

        break;

      default:
        if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, "No implementation found for action type '" + action.type + "'");
        }

        break;
    }

    return undefined;
  };

  Interpreter.prototype.stopChild = function (childId) {
    var child = this.children.get(childId);

    if (!child) {
      return;
    }

    this.children.delete(childId);
    this.forwardTo.delete(childId);
    delete this.state.children[childId];

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(child.stop)) {
      child.stop();
    }
  };

  Interpreter.prototype.spawn = function (entity, name, options) {
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isPromiseLike"])(entity)) {
      return this.spawnPromise(Promise.resolve(entity), name);
    } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(entity)) {
      return this.spawnCallback(entity, name);
    } else if (Object(_Actor_js__WEBPACK_IMPORTED_MODULE_8__["isActor"])(entity)) {
      return this.spawnActor(entity);
    } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(entity)) {
      return this.spawnObservable(entity, name);
    } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isMachine"])(entity)) {
      return this.spawnMachine(entity, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        id: name
      }));
    } else {
      throw new Error("Unable to spawn entity \"" + name + "\" of type \"" + typeof entity + "\".");
    }
  };

  Interpreter.prototype.spawnMachine = function (machine, options) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    var childService = new Interpreter(machine, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options), {
      parent: this,
      id: options.id || machine.id
    }));

    var resolvedOptions = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_SPAWN_OPTIONS), options);

    if (resolvedOptions.sync) {
      childService.onTransition(function (state) {
        _this.send(_actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["update"], {
          state: state,
          id: childService.id
        });
      });
    }

    childService.onDone(function (doneEvent) {
      _this.send(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(doneEvent, {
        origin: childService.id
      }));
    }).start();
    var actor = childService;
    this.children.set(childService.id, actor);

    if (resolvedOptions.autoForward) {
      this.forwardTo.add(childService.id);
    }

    return actor;
  };

  Interpreter.prototype.spawnPromise = function (promise, id) {
    var _this = this;

    var canceled = false;
    promise.then(function (response) {
      if (!canceled) {
        _this.send(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["doneInvoke"])(id, response), {
          origin: id
        }));
      }
    }, function (errorData) {
      if (!canceled) {
        var errorEvent = Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["error"])(id, errorData);

        try {
          // Send "error.platform.id" to this (parent).
          _this.send(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(errorEvent, {
            origin: id
          }));
        } catch (error) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["reportUnhandledExceptionOnInvocation"])(errorData, error, id);

          if (_this.devTools) {
            _this.devTools.send(errorEvent, _this.state);
          }

          if (_this.machine.strict) {
            // it would be better to always stop the state machine if unhandled
            // exception/promise rejection happens but because we don't want to
            // break existing code so enforce it on strict mode only especially so
            // because documentation says that onError is optional
            _this.stop();
          }
        }
      }
    });
    var actor = {
      id: id,
      send: function () {
        return void 0;
      },
      subscribe: function (next, handleError, complete) {
        var unsubscribed = false;
        promise.then(function (response) {
          if (unsubscribed) {
            return;
          }

          next && next(response);

          if (unsubscribed) {
            return;
          }

          complete && complete();
        }, function (err) {
          if (unsubscribed) {
            return;
          }

          handleError(err);
        });
        return {
          unsubscribe: function () {
            return unsubscribed = true;
          }
        };
      },
      stop: function () {
        canceled = true;
      },
      toJSON: function () {
        return {
          id: id
        };
      }
    };
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnCallback = function (callback, id) {
    var _this = this;

    var canceled = false;
    var receivers = new Set();
    var listeners = new Set();

    var receive = function (e) {
      listeners.forEach(function (listener) {
        return listener(e);
      });

      if (canceled) {
        return;
      }

      _this.send(e);
    };

    var callbackStop;

    try {
      callbackStop = callback(receive, function (newListener) {
        receivers.add(newListener);
      });
    } catch (err) {
      this.send(Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["error"])(id, err));
    }

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isPromiseLike"])(callbackStop)) {
      // it turned out to be an async function, can't reliably check this before calling `callback`
      // because transpiled async functions are not recognizable
      return this.spawnPromise(callbackStop, id);
    }

    var actor = {
      id: id,
      send: function (event) {
        return receivers.forEach(function (receiver) {
          return receiver(event);
        });
      },
      subscribe: function (next) {
        listeners.add(next);
        return {
          unsubscribe: function () {
            listeners.delete(next);
          }
        };
      },
      stop: function () {
        canceled = true;

        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(callbackStop)) {
          callbackStop();
        }
      },
      toJSON: function () {
        return {
          id: id
        };
      }
    };
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnObservable = function (source, id) {
    var _this = this;

    var subscription = source.subscribe(function (value) {
      _this.send(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(value, {
        origin: id
      }));
    }, function (err) {
      _this.send(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["error"])(id, err), {
        origin: id
      }));
    }, function () {
      _this.send(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["doneInvoke"])(id), {
        origin: id
      }));
    });
    var actor = {
      id: id,
      send: function () {
        return void 0;
      },
      subscribe: function (next, handleError, complete) {
        return source.subscribe(next, handleError, complete);
      },
      stop: function () {
        return subscription.unsubscribe();
      },
      toJSON: function () {
        return {
          id: id
        };
      }
    };
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnActor = function (actor) {
    this.children.set(actor.id, actor);
    return actor;
  };

  Interpreter.prototype.spawnActivity = function (activity) {
    var implementation = this.machine.options && this.machine.options.activities ? this.machine.options.activities[activity.type] : undefined;

    if (!implementation) {
      if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, "No implementation found for activity '" + activity.type + "'");
      } // tslint:disable-next-line:no-console


      return;
    } // Start implementation


    var dispose = implementation(this.state.context, activity);
    this.spawnEffect(activity.id, dispose);
  };

  Interpreter.prototype.spawnEffect = function (id, dispose) {
    this.children.set(id, {
      id: id,
      send: function () {
        return void 0;
      },
      subscribe: function () {
        return {
          unsubscribe: function () {
            return void 0;
          }
        };
      },
      stop: dispose || undefined,
      toJSON: function () {
        return {
          id: id
        };
      }
    });
  };

  Interpreter.prototype.attachDev = function () {
    if (this.options.devTools && typeof window !== 'undefined') {
      if (window.__REDUX_DEVTOOLS_EXTENSION__) {
        var devToolsOptions = typeof this.options.devTools === 'object' ? this.options.devTools : undefined;
        this.devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
          name: this.id,
          autoPause: true,
          stateSanitizer: function (state) {
            return {
              value: state.value,
              context: state.context,
              actions: state.actions
            };
          }
        }, devToolsOptions), {
          features: Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
            jump: false,
            skip: false
          }, devToolsOptions ? devToolsOptions.features : undefined)
        }), this.machine);
        this.devTools.init(this.state);
      } // add XState-specific dev tooling hook


      Object(_devTools_js__WEBPACK_IMPORTED_MODULE_11__["registerService"])(this);
    }
  };

  Interpreter.prototype.toJSON = function () {
    return {
      id: this.id
    };
  };

  Interpreter.prototype[_utils_js__WEBPACK_IMPORTED_MODULE_2__["symbolObservable"]] = function () {
    return this;
  };
  /**
   * The default interpreter options:
   *
   * - `clock` uses the global `setTimeout` and `clearTimeout` functions
   * - `logger` uses the global `console.log()` method
   */


  Interpreter.defaultOptions =
  /*#__PURE__*/
  function (global) {
    return {
      execute: true,
      deferEvents: true,
      clock: {
        setTimeout: function (fn, ms) {
          return global.setTimeout.call(null, fn, ms);
        },
        clearTimeout: function (id) {
          return global.clearTimeout.call(null, id);
        }
      },
      logger: global.console.log.bind(console),
      devTools: false
    };
  }(typeof window === 'undefined' ? global : window);

  Interpreter.interpret = interpret;
  return Interpreter;
}();

var createNullActor = function (name) {
  if (name === void 0) {
    name = 'null';
  }

  return {
    id: name,
    send: function () {
      return void 0;
    },
    subscribe: function () {
      // tslint:disable-next-line:no-empty
      return {
        unsubscribe: function () {}
      };
    },
    toJSON: function () {
      return {
        id: name
      };
    }
  };
};

var resolveSpawnOptions = function (nameOrOptions) {
  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(nameOrOptions)) {
    return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_SPAWN_OPTIONS), {
      name: nameOrOptions
    });
  }

  return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_SPAWN_OPTIONS), {
    name: Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["uniqueId"])()
  }), nameOrOptions);
};

function spawn(entity, nameOrOptions) {
  var resolvedOptions = resolveSpawnOptions(nameOrOptions);
  return withServiceScope(undefined, function (service) {
    if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(!!service, "Attempted to spawn an Actor (ID: \"" + (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isMachine"])(entity) ? entity.id : 'undefined') + "\") outside of a service. This will have no effect.");
    }

    if (service) {
      return service.spawn(entity, resolvedOptions.name, resolvedOptions);
    } else {
      return createNullActor(resolvedOptions.name);
    }
  });
}
/**
 * Creates a new Interpreter instance for the given machine with the provided options, if any.
 *
 * @param machine The machine to interpret
 * @param options Interpreter options
 */


function interpret(machine, options) {
  var interpreter = new Interpreter(machine, options);
  return interpreter;
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/xstate/es/mapState.js":
/*!********************************************!*\
  !*** ./node_modules/xstate/es/mapState.js ***!
  \********************************************/
/*! exports provided: mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");



function mapState(stateMap, stateId) {
  var e_1, _a;

  var foundStateId;

  try {
    for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["keys"])(stateMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var mappedStateId = _c.value;

      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["matchesState"])(mappedStateId, stateId) && (!foundStateId || stateId.length > foundStateId.length)) {
        foundStateId = mappedStateId;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return stateMap[foundStateId];
}



/***/ }),

/***/ "./node_modules/xstate/es/match.js":
/*!*****************************************!*\
  !*** ./node_modules/xstate/es/match.js ***!
  \*****************************************/
/*! exports provided: matchState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchState", function() { return matchState; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _State_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State.js */ "./node_modules/xstate/es/State.js");



function matchState(state, patterns, defaultValue) {
  var e_1, _a;

  var resolvedState = _State_js__WEBPACK_IMPORTED_MODULE_1__["State"].from(state, state instanceof _State_js__WEBPACK_IMPORTED_MODULE_1__["State"] ? state.context : undefined);

  try {
    for (var patterns_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(patterns), patterns_1_1 = patterns_1.next(); !patterns_1_1.done; patterns_1_1 = patterns_1.next()) {
      var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(patterns_1_1.value, 2),
          stateValue = _b[0],
          getValue = _b[1];

      if (resolvedState.matches(stateValue)) {
        return getValue(resolvedState);
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (patterns_1_1 && !patterns_1_1.done && (_a = patterns_1.return)) _a.call(patterns_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return defaultValue(resolvedState);
}



/***/ }),

/***/ "./node_modules/xstate/es/registry.js":
/*!********************************************!*\
  !*** ./node_modules/xstate/es/registry.js ***!
  \********************************************/
/*! exports provided: registry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registry", function() { return registry; });
var children =
/*#__PURE__*/
new Map();
var sessionIdIndex = 0;
var registry = {
  bookId: function () {
    return "x:" + sessionIdIndex++;
  },
  register: function (id, actor) {
    children.set(id, actor);
    return id;
  },
  get: function (id) {
    return children.get(id);
  },
  free: function (id) {
    children.delete(id);
  }
};


/***/ }),

/***/ "./node_modules/xstate/es/scheduler.js":
/*!*********************************************!*\
  !*** ./node_modules/xstate/es/scheduler.js ***!
  \*********************************************/
/*! exports provided: Scheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return Scheduler; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");

var defaultOptions = {
  deferEvents: false
};

var Scheduler =
/*#__PURE__*/

/** @class */
function () {
  function Scheduler(options) {
    this.processingEvent = false;
    this.queue = [];
    this.initialized = false;
    this.options = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultOptions), options);
  }

  Scheduler.prototype.initialize = function (callback) {
    this.initialized = true;

    if (callback) {
      if (!this.options.deferEvents) {
        this.schedule(callback);
        return;
      }

      this.process(callback);
    }

    this.flushEvents();
  };

  Scheduler.prototype.schedule = function (task) {
    if (!this.initialized || this.processingEvent) {
      this.queue.push(task);
      return;
    }

    if (this.queue.length !== 0) {
      throw new Error('Event queue should be empty when it is not processing events');
    }

    this.process(task);
    this.flushEvents();
  };

  Scheduler.prototype.clear = function () {
    this.queue = [];
  };

  Scheduler.prototype.flushEvents = function () {
    var nextCallback = this.queue.shift();

    while (nextCallback) {
      this.process(nextCallback);
      nextCallback = this.queue.shift();
    }
  };

  Scheduler.prototype.process = function (callback) {
    this.processingEvent = true;

    try {
      callback();
    } catch (e) {
      // there is no use to keep the future events
      // as the situation is not anymore the same
      this.clear();
      throw e;
    } finally {
      this.processingEvent = false;
    }
  };

  return Scheduler;
}();



/***/ }),

/***/ "./node_modules/xstate/es/stateUtils.js":
/*!**********************************************!*\
  !*** ./node_modules/xstate/es/stateUtils.js ***!
  \**********************************************/
/*! exports provided: getAdjList, getAllStateNodes, getChildren, getConfiguration, getValue, has, isInFinalState, isLeafNode, nextEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdjList", function() { return getAdjList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllStateNodes", function() { return getAllStateNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return getChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfiguration", function() { return getConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInFinalState", function() { return isInFinalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLeafNode", function() { return isLeafNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextEvents", function() { return nextEvents; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");



var isLeafNode = function (stateNode) {
  return stateNode.type === 'atomic' || stateNode.type === 'final';
};

function getChildren(stateNode) {
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["keys"])(stateNode.states).map(function (key) {
    return stateNode.states[key];
  });
}

function getAllStateNodes(stateNode) {
  var stateNodes = [stateNode];

  if (isLeafNode(stateNode)) {
    return stateNodes;
  }

  return stateNodes.concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["flatten"])(getChildren(stateNode).map(getAllStateNodes)));
}

function getConfiguration(prevStateNodes, stateNodes) {
  var e_1, _a, e_2, _b, e_3, _c, e_4, _d;

  var prevConfiguration = new Set(prevStateNodes);
  var prevAdjList = getAdjList(prevConfiguration);
  var configuration = new Set(stateNodes);

  try {
    // add all ancestors
    for (var configuration_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(configuration), configuration_1_1 = configuration_1.next(); !configuration_1_1.done; configuration_1_1 = configuration_1.next()) {
      var s = configuration_1_1.value;
      var m = s.parent;

      while (m && !configuration.has(m)) {
        configuration.add(m);
        m = m.parent;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (configuration_1_1 && !configuration_1_1.done && (_a = configuration_1.return)) _a.call(configuration_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  var adjList = getAdjList(configuration);

  try {
    // add descendants
    for (var configuration_2 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(configuration), configuration_2_1 = configuration_2.next(); !configuration_2_1.done; configuration_2_1 = configuration_2.next()) {
      var s = configuration_2_1.value; // if previously active, add existing child nodes

      if (s.type === 'compound' && (!adjList.get(s) || !adjList.get(s).length)) {
        if (prevAdjList.get(s)) {
          prevAdjList.get(s).forEach(function (sn) {
            return configuration.add(sn);
          });
        } else {
          s.initialStateNodes.forEach(function (sn) {
            return configuration.add(sn);
          });
        }
      } else {
        if (s.type === 'parallel') {
          try {
            for (var _e = (e_3 = void 0, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(getChildren(s))), _f = _e.next(); !_f.done; _f = _e.next()) {
              var child = _f.value;

              if (child.type === 'history') {
                continue;
              }

              if (!configuration.has(child)) {
                configuration.add(child);

                if (prevAdjList.get(child)) {
                  prevAdjList.get(child).forEach(function (sn) {
                    return configuration.add(sn);
                  });
                } else {
                  child.initialStateNodes.forEach(function (sn) {
                    return configuration.add(sn);
                  });
                }
              }
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (_f && !_f.done && (_c = _e.return)) _c.call(_e);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
        }
      }
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (configuration_2_1 && !configuration_2_1.done && (_b = configuration_2.return)) _b.call(configuration_2);
    } finally {
      if (e_2) throw e_2.error;
    }
  }

  try {
    // add all ancestors
    for (var configuration_3 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(configuration), configuration_3_1 = configuration_3.next(); !configuration_3_1.done; configuration_3_1 = configuration_3.next()) {
      var s = configuration_3_1.value;
      var m = s.parent;

      while (m && !configuration.has(m)) {
        configuration.add(m);
        m = m.parent;
      }
    }
  } catch (e_4_1) {
    e_4 = {
      error: e_4_1
    };
  } finally {
    try {
      if (configuration_3_1 && !configuration_3_1.done && (_d = configuration_3.return)) _d.call(configuration_3);
    } finally {
      if (e_4) throw e_4.error;
    }
  }

  return configuration;
}

function getValueFromAdj(baseNode, adjList) {
  var childStateNodes = adjList.get(baseNode);

  if (!childStateNodes) {
    return {}; // todo: fix?
  }

  if (baseNode.type === 'compound') {
    var childStateNode = childStateNodes[0];

    if (childStateNode) {
      if (isLeafNode(childStateNode)) {
        return childStateNode.key;
      }
    } else {
      return {};
    }
  }

  var stateValue = {};
  childStateNodes.forEach(function (csn) {
    stateValue[csn.key] = getValueFromAdj(csn, adjList);
  });
  return stateValue;
}

function getAdjList(configuration) {
  var e_5, _a;

  var adjList = new Map();

  try {
    for (var configuration_4 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(configuration), configuration_4_1 = configuration_4.next(); !configuration_4_1.done; configuration_4_1 = configuration_4.next()) {
      var s = configuration_4_1.value;

      if (!adjList.has(s)) {
        adjList.set(s, []);
      }

      if (s.parent) {
        if (!adjList.has(s.parent)) {
          adjList.set(s.parent, []);
        }

        adjList.get(s.parent).push(s);
      }
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (configuration_4_1 && !configuration_4_1.done && (_a = configuration_4.return)) _a.call(configuration_4);
    } finally {
      if (e_5) throw e_5.error;
    }
  }

  return adjList;
}

function getValue(rootNode, configuration) {
  var config = getConfiguration([rootNode], configuration);
  return getValueFromAdj(rootNode, getAdjList(config));
}

function has(iterable, item) {
  if (Array.isArray(iterable)) {
    return iterable.some(function (member) {
      return member === item;
    });
  }

  if (iterable instanceof Set) {
    return iterable.has(item);
  }

  return false; // TODO: fix
}

function nextEvents(configuration) {
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["flatten"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(new Set(configuration.map(function (sn) {
    return sn.ownEvents;
  }))));
}

function isInFinalState(configuration, stateNode) {
  if (stateNode.type === 'compound') {
    return getChildren(stateNode).some(function (s) {
      return s.type === 'final' && has(configuration, s);
    });
  }

  if (stateNode.type === 'parallel') {
    return getChildren(stateNode).every(function (sn) {
      return isInFinalState(configuration, sn);
    });
  }

  return false;
}



/***/ }),

/***/ "./node_modules/xstate/es/types.js":
/*!*****************************************!*\
  !*** ./node_modules/xstate/es/types.js ***!
  \*****************************************/
/*! exports provided: ActionTypes, SpecialTargets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialTargets", function() { return SpecialTargets; });
var ActionTypes;

(function (ActionTypes) {
  ActionTypes["Start"] = "xstate.start";
  ActionTypes["Stop"] = "xstate.stop";
  ActionTypes["Raise"] = "xstate.raise";
  ActionTypes["Send"] = "xstate.send";
  ActionTypes["Cancel"] = "xstate.cancel";
  ActionTypes["NullEvent"] = "";
  ActionTypes["Assign"] = "xstate.assign";
  ActionTypes["After"] = "xstate.after";
  ActionTypes["DoneState"] = "done.state";
  ActionTypes["DoneInvoke"] = "done.invoke";
  ActionTypes["Log"] = "xstate.log";
  ActionTypes["Init"] = "xstate.init";
  ActionTypes["Invoke"] = "xstate.invoke";
  ActionTypes["ErrorExecution"] = "error.execution";
  ActionTypes["ErrorCommunication"] = "error.communication";
  ActionTypes["ErrorPlatform"] = "error.platform";
  ActionTypes["ErrorCustom"] = "xstate.error";
  ActionTypes["Update"] = "xstate.update";
  ActionTypes["Pure"] = "xstate.pure";
})(ActionTypes || (ActionTypes = {}));

var SpecialTargets;

(function (SpecialTargets) {
  SpecialTargets["Parent"] = "#_parent";
  SpecialTargets["Internal"] = "#_internal";
})(SpecialTargets || (SpecialTargets = {}));



/***/ }),

/***/ "./node_modules/xstate/es/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/xstate/es/utils.js ***!
  \*****************************************/
/*! exports provided: flatten, getEventType, isArray, isBuiltInEvent, isFunction, isMachine, isObservable, isPromiseLike, isStateLike, isString, keys, mapContext, mapFilterValues, mapValues, matchesState, nestedPath, normalizeTarget, partition, path, pathToStateValue, reportUnhandledExceptionOnInvocation, symbolObservable, toArray, toArrayStrict, toEventObject, toGuard, toSCXMLEvent, toStatePath, toStatePaths, toStateValue, toTransitionConfigArray, uniqueId, updateContext, updateHistoryStates, updateHistoryValue, warn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventType", function() { return getEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBuiltInEvent", function() { return isBuiltInEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMachine", function() { return isMachine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromiseLike", function() { return isPromiseLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStateLike", function() { return isStateLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapContext", function() { return mapContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFilterValues", function() { return mapFilterValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapValues", function() { return mapValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchesState", function() { return matchesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nestedPath", function() { return nestedPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeTarget", function() { return normalizeTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "path", function() { return path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathToStateValue", function() { return pathToStateValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportUnhandledExceptionOnInvocation", function() { return reportUnhandledExceptionOnInvocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbolObservable", function() { return symbolObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArrayStrict", function() { return toArrayStrict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toEventObject", function() { return toEventObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toGuard", function() { return toGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSCXMLEvent", function() { return toSCXMLEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toStatePath", function() { return toStatePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toStatePaths", function() { return toStatePaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toStateValue", function() { return toStateValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTransitionConfigArray", function() { return toTransitionConfigArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return uniqueId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateContext", function() { return updateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHistoryStates", function() { return updateHistoryStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHistoryValue", function() { return updateHistoryValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/xstate/es/constants.js");
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment.js */ "./node_modules/xstate/es/environment.js");




function keys(value) {
  return Object.keys(value);
}

function matchesState(parentStateId, childStateId, delimiter) {
  if (delimiter === void 0) {
    delimiter = _constants_js__WEBPACK_IMPORTED_MODULE_1__["STATE_DELIMITER"];
  }

  var parentStateValue = toStateValue(parentStateId, delimiter);
  var childStateValue = toStateValue(childStateId, delimiter);

  if (isString(childStateValue)) {
    if (isString(parentStateValue)) {
      return childStateValue === parentStateValue;
    } // Parent more specific than child


    return false;
  }

  if (isString(parentStateValue)) {
    return parentStateValue in childStateValue;
  }

  return keys(parentStateValue).every(function (key) {
    if (!(key in childStateValue)) {
      return false;
    }

    return matchesState(parentStateValue[key], childStateValue[key]);
  });
}

function getEventType(event) {
  try {
    return isString(event) || typeof event === 'number' ? "" + event : event.type;
  } catch (e) {
    throw new Error('Events must be strings or objects with a string event.type property.');
  }
}

function toStatePath(stateId, delimiter) {
  try {
    if (isArray(stateId)) {
      return stateId;
    }

    return stateId.toString().split(delimiter);
  } catch (e) {
    throw new Error("'" + stateId + "' is not a valid state path.");
  }
}

function isStateLike(state) {
  return typeof state === 'object' && 'value' in state && 'context' in state && 'event' in state && '_event' in state;
}

function toStateValue(stateValue, delimiter) {
  if (isStateLike(stateValue)) {
    return stateValue.value;
  }

  if (isArray(stateValue)) {
    return pathToStateValue(stateValue);
  }

  if (typeof stateValue !== 'string') {
    return stateValue;
  }

  var statePath = toStatePath(stateValue, delimiter);
  return pathToStateValue(statePath);
}

function pathToStateValue(statePath) {
  if (statePath.length === 1) {
    return statePath[0];
  }

  var value = {};
  var marker = value;

  for (var i = 0; i < statePath.length - 1; i++) {
    if (i === statePath.length - 2) {
      marker[statePath[i]] = statePath[i + 1];
    } else {
      marker[statePath[i]] = {};
      marker = marker[statePath[i]];
    }
  }

  return value;
}

function mapValues(collection, iteratee) {
  var result = {};
  var collectionKeys = keys(collection);

  for (var i = 0; i < collectionKeys.length; i++) {
    var key = collectionKeys[i];
    result[key] = iteratee(collection[key], key, collection, i);
  }

  return result;
}

function mapFilterValues(collection, iteratee, predicate) {
  var e_1, _a;

  var result = {};

  try {
    for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(keys(collection)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var item = collection[key];

      if (!predicate(item)) {
        continue;
      }

      result[key] = iteratee(item, key, collection);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return result;
}
/**
 * Retrieves a value at the given path.
 * @param props The deep path to the prop of the desired value
 */


var path = function (props) {
  return function (object) {
    var e_2, _a;

    var result = object;

    try {
      for (var props_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
        var prop = props_1_1.value;
        result = result[prop];
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    return result;
  };
};
/**
 * Retrieves a value at the given path via the nested accessor prop.
 * @param props The deep path to the prop of the desired value
 */


function nestedPath(props, accessorProp) {
  return function (object) {
    var e_3, _a;

    var result = object;

    try {
      for (var props_2 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(props), props_2_1 = props_2.next(); !props_2_1.done; props_2_1 = props_2.next()) {
        var prop = props_2_1.value;
        result = result[accessorProp][prop];
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (props_2_1 && !props_2_1.done && (_a = props_2.return)) _a.call(props_2);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    return result;
  };
}

function toStatePaths(stateValue) {
  if (!stateValue) {
    return [[]];
  }

  if (isString(stateValue)) {
    return [[stateValue]];
  }

  var result = flatten(keys(stateValue).map(function (key) {
    var subStateValue = stateValue[key];

    if (typeof subStateValue !== 'string' && (!subStateValue || !Object.keys(subStateValue).length)) {
      return [[key]];
    }

    return toStatePaths(stateValue[key]).map(function (subPath) {
      return [key].concat(subPath);
    });
  }));
  return result;
}

function flatten(array) {
  var _a;

  return (_a = []).concat.apply(_a, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(array));
}

function toArrayStrict(value) {
  if (isArray(value)) {
    return value;
  }

  return [value];
}

function toArray(value) {
  if (value === undefined) {
    return [];
  }

  return toArrayStrict(value);
}

function mapContext(mapper, context, _event) {
  var e_5, _a;

  if (isFunction(mapper)) {
    return mapper(context, _event.data);
  }

  var result = {};

  try {
    for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(keys(mapper)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var subMapper = mapper[key];

      if (isFunction(subMapper)) {
        result[key] = subMapper(context, _event.data);
      } else {
        result[key] = subMapper;
      }
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_5) throw e_5.error;
    }
  }

  return result;
}

function isBuiltInEvent(eventType) {
  return /^(done|error)\./.test(eventType);
}

function isPromiseLike(value) {
  if (value instanceof Promise) {
    return true;
  } // Check if shape matches the Promise/A+ specification for a "thenable".


  if (value !== null && (isFunction(value) || typeof value === 'object') && isFunction(value.then)) {
    return true;
  }

  return false;
}

function partition(items, predicate) {
  var e_6, _a;

  var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__read"])([[], []], 2),
      truthy = _b[0],
      falsy = _b[1];

  try {
    for (var items_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
      var item = items_1_1.value;

      if (predicate(item)) {
        truthy.push(item);
      } else {
        falsy.push(item);
      }
    }
  } catch (e_6_1) {
    e_6 = {
      error: e_6_1
    };
  } finally {
    try {
      if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
    } finally {
      if (e_6) throw e_6.error;
    }
  }

  return [truthy, falsy];
}

function updateHistoryStates(hist, stateValue) {
  return mapValues(hist.states, function (subHist, key) {
    if (!subHist) {
      return undefined;
    }

    var subStateValue = (isString(stateValue) ? undefined : stateValue[key]) || (subHist ? subHist.current : undefined);

    if (!subStateValue) {
      return undefined;
    }

    return {
      current: subStateValue,
      states: updateHistoryStates(subHist, subStateValue)
    };
  });
}

function updateHistoryValue(hist, stateValue) {
  return {
    current: stateValue,
    states: updateHistoryStates(hist, stateValue)
  };
}

function updateContext(context, _event, assignActions, state) {
  if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
    warn(!!context, 'Attempting to update undefined context');
  }

  var updatedContext = context ? assignActions.reduce(function (acc, assignAction) {
    var e_7, _a;

    var assignment = assignAction.assignment;
    var meta = {
      state: state,
      action: assignAction,
      _event: _event
    };
    var partialUpdate = {};

    if (isFunction(assignment)) {
      partialUpdate = assignment(acc, _event.data, meta);
    } else {
      try {
        for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(keys(assignment)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          var propAssignment = assignment[key];
          partialUpdate[key] = isFunction(propAssignment) ? propAssignment(acc, _event.data, meta) : propAssignment;
        }
      } catch (e_7_1) {
        e_7 = {
          error: e_7_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_7) throw e_7.error;
        }
      }
    }

    return Object.assign({}, acc, partialUpdate);
  }, context) : context;
  return updatedContext;
} // tslint:disable-next-line:no-empty


var warn = function () {};

if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
  warn = function (condition, message) {
    var error = condition instanceof Error ? condition : undefined;

    if (!error && condition) {
      return;
    }

    if (console !== undefined) {
      var args = ["Warning: " + message];

      if (error) {
        args.push(error);
      } // tslint:disable-next-line:no-console


      console.warn.apply(console, args);
    }
  };
}

function isArray(value) {
  return Array.isArray(value);
} // tslint:disable-next-line:ban-types


function isFunction(value) {
  return typeof value === 'function';
}

function isString(value) {
  return typeof value === 'string';
} // export function memoizedGetter<T, TP extends { prototype: object }>(
//   o: TP,
//   property: string,
//   getter: () => T
// ): void {
//   Object.defineProperty(o.prototype, property, {
//     get: getter,
//     enumerable: false,
//     configurable: false
//   });
// }


function toGuard(condition, guardMap) {
  if (!condition) {
    return undefined;
  }

  if (isString(condition)) {
    return {
      type: _constants_js__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_GUARD_TYPE"],
      name: condition,
      predicate: guardMap ? guardMap[condition] : undefined
    };
  }

  if (isFunction(condition)) {
    return {
      type: _constants_js__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_GUARD_TYPE"],
      name: condition.name,
      predicate: condition
    };
  }

  return condition;
}

function isObservable(value) {
  try {
    return 'subscribe' in value && isFunction(value.subscribe);
  } catch (e) {
    return false;
  }
}

var symbolObservable =
/*#__PURE__*/
function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();

function isMachine(value) {
  try {
    return '__xstatenode' in value;
  } catch (e) {
    return false;
  }
}

var uniqueId =
/*#__PURE__*/
function () {
  var currentId = 0;
  return function () {
    currentId++;
    return currentId.toString(16);
  };
}();

function toEventObject(event, payload // id?: TEvent['type']
) {
  if (isString(event) || typeof event === 'number') {
    return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      type: event
    }, payload);
  }

  return event;
}

function toSCXMLEvent(event, scxmlEvent) {
  if (!isString(event) && '$$type' in event && event.$$type === 'scxml') {
    return event;
  }

  var eventObject = toEventObject(event);
  return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
    name: eventObject.type,
    data: eventObject,
    $$type: 'scxml',
    type: 'external'
  }, scxmlEvent);
}

function toTransitionConfigArray(event, configLike) {
  var transitions = toArrayStrict(configLike).map(function (transitionLike) {
    if (typeof transitionLike === 'undefined' || typeof transitionLike === 'string' || isMachine(transitionLike)) {
      // @ts-ignore until Type instantiation is excessively deep and possibly infinite bug is fixed
      return {
        target: transitionLike,
        event: event
      };
    }

    return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transitionLike), {
      event: event
    });
  });
  return transitions;
}

function normalizeTarget(target) {
  if (target === undefined || target === _constants_js__WEBPACK_IMPORTED_MODULE_1__["TARGETLESS_KEY"]) {
    return undefined;
  }

  return toArray(target);
}

function reportUnhandledExceptionOnInvocation(originalError, currentError, id) {
  if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
    var originalStackTrace = originalError.stack ? " Stacktrace was '" + originalError.stack + "'" : '';

    if (originalError === currentError) {
      // tslint:disable-next-line:no-console
      console.error("Missing onError handler for invocation '" + id + "', error was '" + originalError + "'." + originalStackTrace);
    } else {
      var stackTrace = currentError.stack ? " Stacktrace was '" + currentError.stack + "'" : ''; // tslint:disable-next-line:no-console

      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '" + id + "'. " + ("Original error: '" + originalError + "'. " + originalStackTrace + " Current error is '" + currentError + "'." + stackTrace));
    }
  }
}



/***/ }),

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/global */ "./context/global.js");
var _jsxFileName = "/Users/willbunting/Documents/Github/gznzc/pages/dashboard.js";



var DashboardPage = function DashboardPage() {
  var globalState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_context_global__WEBPACK_IMPORTED_MODULE_1__["GlobalStateContext"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, globalState.context.userData);
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardPage);

/***/ }),

/***/ 3:
/*!****************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fdashboard&absolutePagePath=%2FUsers%2Fwillbunting%2FDocuments%2FGithub%2Fgznzc%2Fpages%2Fdashboard.js ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fdashboard&absolutePagePath=%2FUsers%2Fwillbunting%2FDocuments%2FGithub%2Fgznzc%2Fpages%2Fdashboard.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fdashboard&absolutePagePath=%2FUsers%2Fwillbunting%2FDocuments%2FGithub%2Fgznzc%2Fpages%2Fdashboard.js!./");


/***/ }),

/***/ "dll-reference dll_513dd14659e539e0c36c":
/*!*******************************************!*\
  !*** external "dll_513dd14659e539e0c36c" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_513dd14659e539e0c36c;

/***/ })

},[[3,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=dashboard.js.map