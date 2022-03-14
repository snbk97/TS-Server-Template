require('express-async-errors');
require('module-alias/register');

import { config as dotEnvConfig } from 'dotenv';
import Server from './server';

dotEnvConfig();

const server = new Server().getInstance();

server.listen(process.env.EXPRESS_PORT, () => {
  console.log('Running server on ->', process.env.EXPRESS_PORT);
});
