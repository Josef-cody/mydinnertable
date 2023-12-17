"use strict";
exports.__esModule = true;
var react_bootstrap_1 = require("react-bootstrap");
var Container_1 = require("react-bootstrap/Container");
var heroImage_jpeg_1 = require("../assets/imgs/heroImage.jpeg");
var navbar_1 = require("../components/navbar");
var footer_1 = require("../components/footer");
var recept_1 = require("../components/recept");
require("../sass/style.scss");
var Index = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(navbar_1["default"], null),
        React.createElement(Container_1["default"], { className: "w-100 mt-3" },
            React.createElement(react_bootstrap_1.Row, null,
                React.createElement(react_bootstrap_1.Col, null,
                    React.createElement(react_bootstrap_1.Image, { src: heroImage_jpeg_1["default"], className: "w-75 m-auto" }))),
            React.createElement(react_bootstrap_1.Row, null,
                React.createElement("p", null, "Daily recommendation")),
            React.createElement(react_bootstrap_1.Row, null,
                React.createElement(recept_1.GetReceptRandom, null))),
        React.createElement(footer_1["default"], null)));
};
exports["default"] = Index;
