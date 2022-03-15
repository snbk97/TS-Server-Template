import { NextFunction, Request } from 'express';
import { IRouter } from '@common/types/ControllerRoutes';
import { CustomError } from '@models/others/CustomErrors';
import { healthCheck } from './common/healthCheck';
import { VERSIONS } from './config/constants';
import UserRouter from './Users/routes';

// sample middleware
const isBodyEmptyMiddleware = (req: Request, res: any, next: NextFunction) => {
  if (!Object.keys(req.body).length) throw new CustomError('Empty body', 400);
  next();
};

const exportedRoutes: IRouter = {
  'health-check': {
    version: VERSIONS.V1,
    middlewares: [],
    router: healthCheck
  },
  users: {
    version: VERSIONS.V1,
    middlewares: [isBodyEmptyMiddleware],
    router: UserRouter
  }
};

export default exportedRoutes;
