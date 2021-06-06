"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var FoodItem_1 = require("../controllers/FoodItem");
var router = express_1.Router();
router.get('/', FoodItem_1.getAllFoods);
exports.default = router;
