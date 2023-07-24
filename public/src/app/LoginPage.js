"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
var react_1 = __importDefault(require("react"));
var LoginPage = function () {
    var _a = react_1.default.useState("admin123"), username = _a[0], setUserName = _a[1];
    var _b = react_1.default.useState("admin123"), password = _b[0], setPassword = _b[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", null,
            "\"username:\" ",
            username),
        react_1.default.createElement("p", null,
            "\"password:\" ",
            password)));
};
exports.LoginPage = LoginPage;
//# sourceMappingURL=LoginPage.js.map