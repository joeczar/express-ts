"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const supertest_1 = __importDefault(require("supertest"));
const app = app_1.newApp();
describe('Test public routes', () => {
    it("should respond with a 200 response and a 'Hello World' body in / route", () => {
        return supertest_1.default(app).get('/').expect(200, 'HelloWorld!');
    });
    it("should respond with a 200 response and a 'pong' body in /ping route", () => {
        return supertest_1.default(app).get('/ping').expect(200, 'pong');
    });
});
