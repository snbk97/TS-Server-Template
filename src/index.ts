import { config as dotEnvConfig } from 'dotenv';

dotEnvConfig();

import Server from './server';

const server = new Server().getInstance();

server.listen(process.env.EXPRESS_PORT, () => {
  console.log('Running server on ->', process.env.EXPRESS_PORT);
});
