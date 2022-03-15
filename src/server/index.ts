import cors from 'cors';
import express, { Express, json, urlencoded } from 'express';
import mongoose from 'mongoose';
import errorHandler from '@common/middlewares/errorHandler';
import exportedRoutes from '@controllers/index';

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
    app.use(json());
    app.use(urlencoded({ limit: Infinity }));
    app.use(cors());
  }

  registerRoutes(app: Express) {
    Object.keys(exportedRoutes).forEach(routeName => {
      const route = exportedRoutes[routeName];
      app.use(`/api/${route.version}/${routeName}`, ...route.middlewares, route.router);
    });
  }

  registerErrorHandlers(app: Express) {
    app.use(errorHandler);
  }

  getInstance() {
    return this.app;
  }
}

export default Server;
