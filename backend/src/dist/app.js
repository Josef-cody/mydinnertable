"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var dotenv_1 = require("dotenv");
var cors_1 = require("cors");
var routes_1 = require("./routes");
dotenv_1["default"].config();
var app = express_1["default"]();
app.use(cors_1["default"]());
// Middleware
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
// Use consolidated routes
app.use('/api', routes_1["default"]);
var PORT = process.env.PORT || 8080;
// Connect to MongoDB
mongoose_1["default"].connect(process.env.ATLAS_URI);
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:" + PORT);
});
