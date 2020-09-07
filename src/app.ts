import express, { Request, Response } from 'express';
import { Express } from 'express';

export function newApp(): Express {
    const app = express();

    app.get('/', (req: Request, res: Response) => {
        res.send('HelloWorld!');
    });
    app.get('/ping', (req: Request, res: Response) => {
        res.send('pong');
    });

    return app;
}
