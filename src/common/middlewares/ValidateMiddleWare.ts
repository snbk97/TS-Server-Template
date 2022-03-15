import joi from 'joi';
import { CustomError } from '@models/others/CustomErrors';

const ValidateMiddleWare = (schema: joi.Schema) => (req: any, res: any, next: any) => {
  const result = schema.validate(req.body);
  if (result.error) {
    throw new CustomError(result.error.toString(), 400);
  }
  next();
};

export default ValidateMiddleWare;
