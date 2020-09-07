import { newApp } from '../app';
import request from 'supertest';

const app = newApp();

describe('Test public routes', () => {
    it("should respond with a 200 response and a 'Hello World' body in / route", () => {
        return request(app).get('/').expect(200, 'HelloWorld!');
    });
    it("should respond with a 200 response and a 'pong' body in /ping route", () => {
        return request(app).get('/ping').expect(200, 'pong');
    });
});
