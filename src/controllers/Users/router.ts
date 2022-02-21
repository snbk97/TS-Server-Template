import { Router } from 'express';
import UsersController from '.';
const router = Router();

/**
 * @swagger
 *  /api/v1/users/me:
 *  get:
 *    basePath: /api/v1
 *    tags:
 *      - users
 *    description: Get current user info
 *    responses:
 *     '200':
 *      description: Return current user info
 *
 */
router.get('/me', UsersController.me);

export default router;
