import { Document, PopulateOptions, FilterQuery, QueryOptions } from 'mongoose';

interface IBaseService {
  findOne(
    filter: FilterQuery<typeof Document>,
    populateOptions: PopulateOptions,
    options: QueryOptions
  ): Promise<typeof Document>;
  findMany(
    filter: FilterQuery<typeof Document>,
    populateOptions: PopulateOptions,
    options: QueryOptions
  ): Promise<typeof Document>;
}

export default IBaseService;

//ProjectionFields
