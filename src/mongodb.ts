import mongoose from 'mongoose';
import env from './config';
import { logger } from './logger';

type IDatabaseOptions = {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
  connectTimeoutMS: number;
  maxPoolSize: number;
  serverSelectionTimeoutMS: number;
  socketTimeoutMS: number;
  family: number;
};

// ! Database connection

// ? MongoDB connection locally
// * MongoDB connection local machine
const uri = `mongodb://${env.MONGO_IP}:${env.MONGO_PORT}/${env.MONGO_NAME}`;

// * MongoDB connection docker machine
// const uri = `mongodb://${env.MONGO_USERNAME}:${env.MONGO_PASSWORD}@${env.MONGO_IP}:${env.MONGO_PORT}/${env.MONGO_NAME}?authSource=admin`;

// ? MongoDB connection remotely
// const uri = `mongodb+srv://${env.MONGO_USERNAME}:${env.MONGO_PASSWORD}@${env.MONGO_HOST}/${env.MONGO_NAME}?retryWrites=true&w=majority`;

const options: IDatabaseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 1000,
  maxPoolSize: 10, // ? Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // ? Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // ? Close sockets after 45 seconds of inactivity
  family: 4, // ? Use IPv4, skip trying IPv6
};

export const connectDBWithRetry = async () => {
  try {
    await mongoose.connect(uri, options);
    logger.info('Successfully connected to Database');
  } catch (error) {
    logger.error(error);
    setTimeout(connectDBWithRetry, 5000);
  }
};
