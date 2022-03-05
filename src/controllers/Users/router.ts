import { Router } from 'express';
import UsersController from '.';

const router = Router();

/**
 * @swagger
 *  /api/v1/users/me:
 *  get:
 *    tags:
 *      - users
 *    description: Get current user info
 *    responses:
 *     '200':
 *      description: Return current user info
 *
 */
router.get('/me', UsersController.me);

/**
 * @swagger
 *  /api/v1/users/create:
 *  post:
 *    tags:
 *      - users
 *    description: Add new user
 *    responses:
 *     '200':
 *      description: Return newly created User
 *
 */
router.post('/create', UsersController.create);

export default router;
