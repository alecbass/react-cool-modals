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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var BaseModal_1 = __importDefault(require("./BaseModal"));
var ExpandModal = function (props) {
    function render() {
        var _a, _b, _c, _d;
        var baseStyle = {
            transition: "flex " + ((_a = props.transitionDuration) !== null && _a !== void 0 ? _a : 300) + "ms linear, height " + ((_b = props.transitionDuration) !== null && _b !== void 0 ? _b : 300) + "ms linear",
            height: (_d = (_c = props.style) === null || _c === void 0 ? void 0 : _c.height) !== null && _d !== void 0 ? _d : "40%"
        };
        var hideModalStyle = __assign(__assign({}, baseStyle), { height: 0, flex: 0 });
        var showModalStyle = __assign(__assign({}, baseStyle), { flex: "0 0 1200px" });
        var modalStyle = props.show ? showModalStyle : hideModalStyle;
        return (react_1.default.createElement(BaseModal_1.default, __assign({}, props, { style: __assign(__assign({}, modalStyle), props.style) }), props.children));
    }
    return react_dom_1.default.createPortal(render(), document.getElementById("root"));
};
exports.default = ExpandModal;
