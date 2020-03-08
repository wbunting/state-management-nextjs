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
var react_1 = require("react");
var fsm_1 = require("@xstate/fsm");
function useMachine(stateMachine) {
    var _a = __read(react_1.useState(stateMachine.initialState), 2), state = _a[0], setState = _a[1];
    var ref = react_1.useRef(null);
    if (ref.current === null) {
        ref.current = fsm_1.interpret(stateMachine);
    }
    react_1.useEffect(function () {
        if (!ref.current) {
            return;
        }
        ref.current.subscribe(setState);
        ref.current.start();
        return function () {
            ref.current.stop();
            // reset so next call re-initializes
            ref.current = null;
        };
    }, [stateMachine]);
    return [state, ref.current.send, ref.current];
}
exports.useMachine = useMachine;
//# sourceMappingURL=fsm.js.map