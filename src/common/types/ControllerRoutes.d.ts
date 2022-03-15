import { Router } from 'express';

export interface IRouterMeta {
  version: string;
  middlewares: any[];
  // validator?: () => any;
  router: Router | ((...args: any[]) => any);
}

export interface IRouter {
  [key: string]: IRouterMeta;
}
