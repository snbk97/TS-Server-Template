import joi from 'joi';

export const findValidator = joi.object({
  email: joi.string().email().required()
});
