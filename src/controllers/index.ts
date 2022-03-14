import { VERSIONS } from './config/constants';
import UserRouter from '@controllers/Users/routes';

const routers = {
  [`${VERSIONS.V1}/users`]: UserRouter
};

export default routers;
