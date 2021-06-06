"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var foodCategory_1 = __importDefault(require("./foodCategory"));
var foodItem_1 = __importDefault(require("./foodItem"));
var app = express_1.default();
app.use('/items', foodItem_1.default);
app.use('/category', foodCategory_1.default);
exports.default = app;
