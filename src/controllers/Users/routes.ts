import { Router } from 'express';
import UsersController from '.';

const router = Router();

router.get('/me', UsersController.me);
router.post('/create', UsersController.create);
router.post('/find', UsersController.find);
router.post('/delete', UsersController.delete);

export default router;
