import { Document, PopulateOptions, FilterQuery, QueryOptions } from 'mongoose';
import IBaseService from '../_default/IBaseService';
import UserModel from '../../models/Users';

class UsersService implements IBaseService {
  model = UserModel;
  async findMany(
    filter: FilterQuery<typeof Document>,
    populateOptions: PopulateOptions,
    options: QueryOptions
  ): Promise<any> {
    return this.model.find(filter, {}, options).populate(populateOptions);
  }

  async findOne(
    filter: FilterQuery<typeof Document>,
    populateOptions: PopulateOptions,
    options: QueryOptions
  ): Promise<any> {
    return this.model.findOne(filter, {}, options).populate(populateOptions);
  }
}

export default UsersService;
