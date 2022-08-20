import express, { Application, Request, Response } from 'express';
import env from './config';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('<h2>Hi There!</h2>');
});

app.listen(env.APP_PORT, () =>
  console.log(`App listening on port ${env.APP_PORT}`)
);
