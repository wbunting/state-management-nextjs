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