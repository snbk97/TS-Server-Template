import { Request, Response } from 'express';
import { User } from '../../models/Users';
import UsersService from '../../services/Users';

export default class UserController {
  static me(req: Request, res: Response): void {
    const datafromService = {
      name: 'John Doe',
      email: 'jhondoe@gmail.com',
      age: 30
    };
    res.status(200).json(datafromService);
  }

  static async create(req: Request, res: Response): Promise<void> {
    // use data validator here
    const { name, email, phone } = req.body;
    const user = new User(name, email, phone);
    const newUser = await UsersService.create(user);
    res.json({
      message: 'created',
      user: newUser
    });
  }
}
