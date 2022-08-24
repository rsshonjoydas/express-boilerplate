import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express, { Application } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import env from './config';

const pino = require('pino-http')();

// TODO: express-rate-limit options
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // ? 15 minutes
  max: 1000, // ? limit each IP to 1000 requests per windowMs
});

// TODO: Express JS Configuration
const app: Application = express();
app.use(express.json());

let corsOptions = {
  origin: env.CLIENT_APP_URL,
  credentials: true,
  optionsSuccessStatus: 200, // ? some legacy browsers (IE11, various SmartTVs) choke on 204
};

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
