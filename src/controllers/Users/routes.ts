import { Router } from 'express';
import ValidateMiddleWare from '@common/middlewares/ValidateMiddleWare';
import UsersController from '.';
import { findValidator } from './validators';

const router = Router();

router.get('/me', UsersController.me);
router.post('/create', UsersController.create);
router.post('/find', ValidateMiddleWare(findValidator), UsersController.find);
router.post('/delete', UsersController.delete);

export default router;
