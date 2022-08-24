import dotenv from 'dotenv';

dotenv.config();

const env = {
  APP_PORT: process.env.APP_PORT || 5000,
  CLIENT_APP_URL: process.env.CLIENT_APP_URL || 'http://localhost:3000/',
};

export default env;
