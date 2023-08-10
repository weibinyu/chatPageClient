"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
var react_1 = __importDefault(require("react"));
var LoginPage = function () {
    var _a = react_1.default.useState(""), username = _a[0], setUserName = _a[1];
    var _b = react_1.default.useState(""), password = _b[0], setPassword = _b[1];
    return (react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column" } },
        react_1.default.createElement("div", { style: { display: "flex" } },
            react_1.default.createElement("p", { style: { margin: 0, marginRight: "5em" } }, "username: "),
            react_1.default.createElement("input", { name: "username", value: username, onChange: function (e) { return setUserName(e.currentTarget.value); } })),
        react_1.default.createElement("div", { style: {
                display: "flex",
                marginTop: "5em",
                justifyContent: "space-between",
            } },
            react_1.default.createElement("p", { style: { margin: 0, marginRight: "5em" } }, "password:"),
            react_1.default.createElement("input", { name: "password", type: "password", value: password, onChange: function (e) { return setPassword(e.currentTarget.value); } }))));
};
exports.LoginPage = LoginPage;
//# sourceMappingURL=LoginPage.js.map