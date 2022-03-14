import cors from 'cors';
import express, { Express } from 'express';
import UsersRouter from '../controllers/Users/routes';
import { VERSIONS } from './config/constants';
import mongoose from 'mongoose';
import errorHandler from './middlewares/errorHandler';

const { V1 } = VERSIONS;

class Server {
  app: Express;
  port = process.env.EXPRESS_PORT || 3000;
  constructor() {
    if (!this.app) this.app = express();
    this.connectMongo();
    this.bootstrapServer(this.app);
    this.registerRoutes(this.app);
    this.registerErrorHandlers(this.app);
  }

  async connectMongo() {
    const { MONGO_HOST, MONGO_PORT, MONGO_DB } = process.env;
    const mongoURL = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;
    mongoose.connect(mongoURL, err => {
      if (err) throw new Error('Mongoose Error');
    });
  }

  bootstrapServer(app: Express) {
    app.use(express.json());
    app.use(cors());
  }

  // TODO: convert routes into mico-kernel arch
  registerRoutes(app: Express) {
    app.use(getRouterURL(V1, '/users'), UsersRouter);
  }

  registerErrorHandlers(app: Express) {
    app.use(errorHandler);
    // app.on('');
  }

  getInstance() {
    return this.app;
  }
}

const getRouterURL = (version: string, path: string) => `/api/${version}${path}`;

export default Server;
