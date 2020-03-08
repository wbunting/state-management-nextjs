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
var react_1 = require("react");
var xstate_1 = require("xstate");
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
var useActor_1 = require("./useActor");
exports.useActor = useActor_1.useActor;
//# sourceMappingURL=index.js.map