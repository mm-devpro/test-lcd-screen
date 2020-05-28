"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
//import {displayGrid} from "./screen";
var LCDScreen = require('./LCDScreen');
exports.app = express_1.default();
exports.app.get("/", function (req, res, next) {
    res.status(200).json({
        status: 'success',
        message: 'hello world'
    });
});
var screen = new LCDScreen;
screen.displayGrid(1234567890);
//# sourceMappingURL=app.js.map