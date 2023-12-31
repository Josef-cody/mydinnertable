"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.addItemToFavoriteList = exports.createFavoriteList = exports.login = exports.register = void 0;
var bcrypt_1 = require("bcrypt");
var jsonwebtoken_1 = require("jsonwebtoken");
var User_1 = require("../models/User");
var FavoriteList_1 = require("../models/FavoriteList");
var signToken = function (user) {
    return jsonwebtoken_1["default"].sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
};
exports.register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, hashedPassword, newUser, token, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, username = _a.username, password = _a.password;
                return [4 /*yield*/, bcrypt_1["default"].hash(password, 10)];
            case 1:
                hashedPassword = _b.sent();
                newUser = new User_1["default"]({ username: username, password: hashedPassword });
                return [4 /*yield*/, newUser.save()];
            case 2:
                _b.sent();
                token = signToken(newUser);
                res.status(201).json({ token: token });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                console.error(error_1);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, user, validPassword, token, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, username = _a.username, password = _a.password;
                return [4 /*yield*/, User_1["default"].findOne({ username: username })];
            case 1:
                user = _b.sent();
                if (!user) {
                    return [2 /*return*/, res.status(401).json({ message: 'Invalid username or password' })];
                }
                return [4 /*yield*/, bcrypt_1["default"].compare(password, user.password)];
            case 2:
                validPassword = _b.sent();
                if (!validPassword) {
                    return [2 /*return*/, res.status(401).json({ message: 'Invalid username or password' })];
                }
                token = signToken(user);
                res.json({ token: token });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                console.error(error_2);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createFavoriteList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, name, user, newFavoriteList, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                userId = req.params.userId;
                name = req.body.name;
                return [4 /*yield*/, User_1["default"].findById(userId)];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, res.status(404).json({ message: 'User not found' })];
                }
                newFavoriteList = new FavoriteList_1["default"]({ name: name, items: [] });
                return [4 /*yield*/, newFavoriteList.save()];
            case 2:
                _a.sent();
                user.favorites.push(newFavoriteList);
                return [4 /*yield*/, user.save()];
            case 3:
                _a.sent();
                res.status(201).json(newFavoriteList);
                return [3 /*break*/, 5];
            case 4:
                error_3 = _a.sent();
                console.error(error_3);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.addItemToFavoriteList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userId, listId, recipeId, user, favoriteList, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.params, userId = _a.userId, listId = _a.listId;
                recipeId = req.body.recipeId;
                return [4 /*yield*/, User_1["default"].findById(userId)];
            case 1:
                user = _b.sent();
                if (!user) {
                    return [2 /*return*/, res.status(404).json({ message: 'User not found' })];
                }
                return [4 /*yield*/, FavoriteList_1["default"].findById(listId)];
            case 2:
                favoriteList = _b.sent();
                if (!favoriteList) {
                    return [2 /*return*/, res.status(404).json({ message: 'Favorite list not found' })];
                }
                favoriteList.items.push(recipeId);
                return [4 /*yield*/, favoriteList.save()];
            case 3:
                _b.sent();
                res.status(201).json(favoriteList);
                return [3 /*break*/, 5];
            case 4:
                error_4 = _b.sent();
                console.error(error_4);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
