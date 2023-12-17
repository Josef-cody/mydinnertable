"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var favoriteListSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    items: [{ type: mongoose_1.Schema.Types.String, ref: 'Recipe' }]
});
exports["default"] = mongoose_1["default"].model('FavoriteList', favoriteListSchema);
