"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logo_svg_1 = __importDefault(require("../assert/logo.svg"));
require("../assert/App.css");
var LoginPage_1 = require("./LoginPage");
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("img", { src: logo_svg_1.default, className: "App-logo", alt: "logo" }),
            React.createElement(LoginPage_1.LoginPage, null))));
}
exports.default = App;
//# sourceMappingURL=App.js.map