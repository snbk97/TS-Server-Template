/* eslint-disable @typescript-eslint/no-unused-vars */
import { PopulateOptions, FilterQuery, QueryOptions } from 'mongoose';

// abstract class BaseService {
//   static abstract create(data: unknown): unknown; //{}

//   abstract findOne(filter: FilterQuery<unknown>, populateOptions: PopulateOptions, options: QueryOptions): unknown; //{}

//   abstract findMany(filter: FilterQuery<unknown>, populateOptions: PopulateOptions, options: QueryOptions): unknown; //{}

//   abstract delete(filter: FilterQuery<unknown>): unknown; //{}
// }

interface BaseService {
  delete?: (filter: FilterQuery<unknown>) => unknown;
}
export default BaseService;
