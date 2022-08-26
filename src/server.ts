import { Request, Response } from 'express';
import app from './app';
import env from './config';
import { logger } from './logger';
import { connectDBWithRetry } from './mongodb';

app.get('/', (req: Request, res: Response) => {
  res.send('<h2>Hi There!</h2>');
});

app.listen(env.APP_PORT, async () => {
  // ? MongoDB connection
  await connectDBWithRetry();

  logger.info(`App listening on port ${env.APP_PORT}`);
});
