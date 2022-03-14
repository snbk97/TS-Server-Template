import { FilterQuery, PopulateOptions, QueryOptions, UpdateQuery } from 'mongoose';
import UserModel, { IUser, UserDocument } from '@models/Users';

class UsersService {
  static model = UserModel;

  static async create(data: IUser): Promise<UserDocument | unknown> {
    return this.model.create(data);
  }

  static async findOne(
    filter: FilterQuery<IUser>,
    populateOptions: PopulateOptions | null,
    options: QueryOptions | null
  ): Promise<UserDocument | unknown> {
    return this.model.findOne(filter, {}, options).populate(populateOptions);
  }

  static async findMany(
    filter: FilterQuery<IUser>,
    populateOptions: PopulateOptions | null,
    options: QueryOptions | null
  ): Promise<UserDocument[] | unknown> {
    return this.model.find(filter, {}, options).populate(populateOptions);
  }

  static async update(
    filter: FilterQuery<IUser>,
    update: UpdateQuery<IUser>,
    options: QueryOptions | null
  ): Promise<UserDocument> {
    const queryUpdate = { $set: { ...update } };
    return this.model.findOneAndUpdate(filter, queryUpdate, { ...options, new: true });
  }

  static async delete(filter: FilterQuery<IUser>, value = true): Promise<UserDocument | unknown> {
    return this.update(filter, { deleted: value }, { new: true });
  }
}

export default UsersService;
