import joi from 'joi';

export const createUserValidator = joi.object({
  email: joi.string().email().required(),
  phone: joi
    .string()
    .regex(new RegExp(/^[6-9][0-9]{9}$/))
    .required(),
  name: joi.string().required()
});

export const findUserValidator = joi.object({
  email: joi.string().email(),
  _id: joi.string()
});
