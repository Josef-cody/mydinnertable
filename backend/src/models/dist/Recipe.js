"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var recipeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    recipeId: { type: String, required: true }
});
exports["default"] = mongoose_1["default"].model('Recipe', recipeSchema);
