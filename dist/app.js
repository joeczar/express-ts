"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newApp = void 0;
const express_1 = __importDefault(require("express"));
function newApp() {
    const app = express_1.default();
    app.get('/', (req, res) => {
        res.send('HelloWorld!');
    });
    app.get('/ping', (req, res) => {
        res.send('pong');
    });
    return app;
}
exports.newApp = newApp;
