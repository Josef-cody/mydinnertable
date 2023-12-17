"use strict";
exports.__esModule = true;
var express_1 = require("express");
var authController_1 = require("../controllers/authController");
var userController_1 = require("../controllers/userController");
var auth_1 = require("../controllers/auth");
var router = express_1["default"].Router();
// Authentication routes
router.post('/register', authController_1.register);
router.post('/login', authController_1.login);
// User CRUD routes
router.get('/', auth_1.verify, userController_1.getUser);
router.patch('/update_user', auth_1.verify, userController_1.updateUser);
router["delete"]('/delete_user', auth_1.verify, userController_1.deleteUser);
// Favorite list routes
router.post('/:userId/favorites', auth_1.verify, authController_1.createFavoriteList);
router.post('/:userId/favorites/:listId/add', auth_1.verify, authController_1.addItemToFavoriteList);
exports["default"] = router;
