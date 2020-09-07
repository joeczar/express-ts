import { newApp } from './app';
import http from 'http';

const app = newApp();

http.createServer({}, app).listen(8000, () => {
    console.log('Listening on http://localhost:8000...');
});
