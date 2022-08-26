import dotenv from 'dotenv';

dotenv.config();

const env = {
  // ! App environment variables
  APP_PORT: process.env.APP_PORT || 5000,
  CLIENT_APP_URL: process.env.CLIENT_APP_URL || 'http://localhost:3000/',

  // ! Database connection
  MONGO_USERNAME: process.env.MONGO_USERNAME,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_NAME: process.env.MONGO_NAME,

  // ? MongoDB localhost env config
  MONGO_IP: process.env.MONGO_IP || 'mongo',
  MONGO_PORT: process.env.MONGO_PORT || 27017,

  // ? MongoDB remote env config
  MONGO_HOST: process.env.MONGO_HOST,
  URI: process.env.URI,

  // ! Redis connection
  REDIS_URL: process.env.REDIS_URL || 'redis',
  REDIS_PORT: process.env.REDIS_PORT || 6379,

  SESSION_SECRET: process.env.SESSION_SECRET,
};

export default env;
