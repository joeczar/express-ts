"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const http_1 = __importDefault(require("http"));
const app = app_1.newApp();
http_1.default.createServer({}, app).listen(8000, () => {
    console.log('Listening on http://localhost:8000...');
});
