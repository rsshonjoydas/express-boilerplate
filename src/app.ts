import bodyParser from 'body-parser';
import compression from 'compression';
import connectRedis from 'connect-redis';
import cors from 'cors';
import express, { Application } from 'express';
import rateLimit from 'express-rate-limit';
import session from 'express-session';
import helmet from 'helmet';
import { createClient } from 'redis';
import env from './config';
import { logger } from './logger';

const pino = require('pino-http')();

// TODO: Express JS Configuration
const app: Application = express();
app.use(express.json());

// ? express-rate-limit options
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // ? 15 minutes
  max: 1000, // ? limit each IP to 1000 requests per windowMs
});

// ? cors options
let corsOptions = {
  origin: env.CLIENT_APP_URL,
  credentials: true,
  optionsSuccessStatus: 200, // ? some legacy browsers (IE11, various SmartTVs) choke on 204
};

// TODO: Configure redis client
const RedisStore = connectRedis(session);

const url = `redis://${env.REDIS_URL}:${env.REDIS_PORT}`;
const redisClient = createClient({
  legacyMode: true,
  url,
});

redisClient.on('error', (err) => {
  logger.error(err);
});

redisClient.on('connect', () => {
  logger.info('Connected to redis successfully');
});

// ? Configure session middleware
app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: `${env.SESSION_SECRET}`,
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false, // ? if true only transmit cookie over https
      httpOnly: true, // ? if true prevent client side JS from reading the cookie
      maxAge: 1000 * 60, // ? session max age in miliseconds
    },
  })
);

redisClient.connect().catch(logger.error);

// TODO: Necessary Packages
app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(compression())
  .use(cors(corsOptions))
  .use(helmet())
  .use(pino)
  .use(limiter);

export default app;
