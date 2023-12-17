"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userRoutes_1 = require("./userRoutes");
var recipeRoutes_1 = require("./recipeRoutes");
var router = express_1["default"].Router();
// Include user routes
router.use('/users', userRoutes_1["default"]);
// Include recipe routes
router.use('/recipes', recipeRoutes_1["default"]);
exports["default"] = router;
