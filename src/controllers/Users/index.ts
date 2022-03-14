import { Request, Response } from 'express';
import { CustomError } from '@models/others/CustomErrors';
import { User } from '@models/Users';
import UsersService from '@services/Users';
// TODO: Add validators to post bodies

export default class UserController {
  static me(req: Request, res: Response): void {
    const sampleData = {
      name: 'John Doe',
      email: 'jhondoe@gmail.com',
      age: 30
    };
    // TODO: show data from request's current session
    res.status(200).json(sampleData);
  }

  static async create(req: Request, res: Response): Promise<void> {
    const { name, email, phone } = req.body;
    const user = new User(name, email, phone);
    const newUser = await UsersService.create(user);
    res.json({
      message: 'created',
      user: newUser
    });
  }

  static async find(req: Request, res: Response): Promise<void> {
    const { email } = req.body;
    const foundUser = await UsersService.findOne({ email }, null, {});
    if (!foundUser) throw new CustomError('No user found');
    res.json({
      success: true,
      user: foundUser
    });
  }

  static async delete(req: Request, res: Response): Promise<void> {
    const { email } = req.body;
    const deletedUser = await UsersService.delete({ email });
    if (!deletedUser) throw new CustomError('No user found');
    res.json({
      message: 'deleted',
      user: deletedUser
    });
  }
}
