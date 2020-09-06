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
var BaseModal = function (props) {
    function handleModalClick() {
        props.toggle();
    }
    function render() {
        var overlayStyle = {
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
            zIndex: 9999,
            top: 0,
            transition: "",
            backgroundColor: "rgb(0, 0, 0, 0.4)"
        };
        var hideOverlayStyle = __assign(__assign({}, overlayStyle), { backgroundColor: "rgb(255, 255, 255, 1)", top: "-100vh" });
        var baseModalContentStyles = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: "0 0 60%",
            height: "40%",
            background: "#FFFFFF",
            border: "1px solid blue",
            padding: 16,
            overflow: "hidden"
        };
        var modalOverlayStyle = props.show ? overlayStyle : hideOverlayStyle;
        return (react_1.default.createElement("div", { className: "modal-overlay", style: modalOverlayStyle, onClick: handleModalClick },
            react_1.default.createElement("div", { className: "modal " + (props.show ? "modal-show" : ""), style: __assign(__assign({}, baseModalContentStyles), props.style), onClick: function (e) { return e.stopPropagation(); } }, props.children)));
    }
    return react_dom_1.default.createPortal(render(), document.getElementById("root"));
};
exports.default = BaseModal;
