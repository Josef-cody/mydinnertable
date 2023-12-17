"use strict";
exports.__esModule = true;
var express_1 = require("express");
var recipeController_1 = require("../controllers/recipeController");
var auth_1 = require("../controllers/auth");
var router = express_1["default"].Router();
// Recipe CRUD routes
router.post('/create_recipe', auth_1.verify, recipeController_1.createRecipe);
exports["default"] = router;
