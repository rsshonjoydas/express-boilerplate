import dotenv from 'dotenv';

dotenv.config();

const env = {
  APP_PORT: process.env.APP_PORT || 5000,
};

export default env;
