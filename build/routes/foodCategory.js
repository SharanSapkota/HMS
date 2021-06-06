"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var FoodCategory_1 = require("../controllers/FoodCategory");
var router = express_1.Router();
router.get('/', FoodCategory_1.getAllCategory);
router.post('/', FoodCategory_1.postCategory);
exports.default = router;
