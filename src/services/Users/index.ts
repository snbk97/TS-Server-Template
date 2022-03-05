import { FilterQuery, PopulateOptions, QueryOptions } from 'mongoose';
import UserModel, { IUser, UserDocument } from '../../models/Users';

class UsersService {
  static model = UserModel;

  static async create(data: IUser): Promise<UserDocument | unknown> {
    return this.model.create(data);
  }

  static update(filter: FilterQuery<IUser>, update:Up): Promise<UserDocument> {
    return this.model.updateOne(filter, { $set: { deleted: true } });
  }

  static async findOne(
    filter: FilterQuery<IUser>,
    populateOptions: PopulateOptions,
    options: QueryOptions
  ): Promise<UserDocument | unknown> {
    return this.model.findOne(filter, {}, options).populate(populateOptions);
  }

  static async findMany(
    filter: FilterQuery<IUser>,
    populateOptions: PopulateOptions,
    options: QueryOptions
  ): Promise<UserDocument[] | unknown> {
    return this.model.find(filter, {}, options).populate(populateOptions);
  }
}

export default UsersService;
