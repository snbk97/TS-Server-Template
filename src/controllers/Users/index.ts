import { NextFunction, Request, Response } from 'express';

export default class UserController {
  static me(req: Request, res: Response, _next: NextFunction): void {
    const datafromService = {
      name: 'John Doe',
      email: 'jhondoe@gmail.com',
      age: 30,
    };
    res.status(200).json(datafromService);
  }
}
