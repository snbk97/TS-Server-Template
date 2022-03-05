import cors from 'cors';
import fs from 'fs';
import express, { Express } from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import UsersRouter from '../controllers/Users/router';
import swaggerConfig from './config/swagger';
import { VERSIONS } from './config/constants';
import mongoose from 'mongoose';

const { V1 } = VERSIONS;

class Server {
  app: Express;
  port = process.env.EXPRESS_PORT || 3000;
  constructor() {
    if (!this.app) this.app = express();
    this.connectMongo();
    this.bootstrapServer(this.app);
    this.registerRoutes(this.app);
  }

  async connectMongo() {
    const { MONGO_HOST, MONGO_PORT, MONGO_DB } = process.env;
    const mongoURL = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;
    await mongoose.connect(mongoURL, err => {
      if (err) throw new Error('Mongoose Error');
    });
  }

  bootstrapServer(app: Express) {
    app.use(express.json());
    app.use(cors());
  }

  registerRoutes(app: Express) {
    // swagger routes
    const swaggerDoc = swaggerJsDoc(swaggerConfig());
    fs.writeFileSync(`${__dirname}/../openAPI.json`, JSON.stringify(swaggerDoc, null, 2));
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

    // list server routes here
    app.use(getRouterURL(V1, '/users'), UsersRouter);
  }

  getInstance() {
    return this.app;
  }
}

const getRouterURL = (version: string, path: string) => `/api/${version}${path}`;

export default Server;
