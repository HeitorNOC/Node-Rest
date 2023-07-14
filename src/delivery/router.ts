import { Router } from 'express';
import { UserController } from './controllers/UserController';

const router = Router();
const userController = new UserController();

router.post('/users', userController.createUser.bind(userController));
router.patch('/users', userController.updateUser.bind(userController));

export default router;
