"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    favorites: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'FavoriteList' }]
});
exports["default"] = mongoose_1["default"].model('User', userSchema);
