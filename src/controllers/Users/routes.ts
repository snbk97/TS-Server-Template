import { Router } from 'express';
import ValidateMiddleWare from '@common/middlewares/ValidateMiddleWare';
import UsersController from '.';
import { createUserValidator, findUserValidator } from './validators';

const router = Router();

router.get('/me', UsersController.me);
router.post('/create', ValidateMiddleWare(createUserValidator), UsersController.create);
router.post('/find', ValidateMiddleWare(findUserValidator), UsersController.find);
router.post('/delete', ValidateMiddleWare(findUserValidator), UsersController.delete);

export default router;
