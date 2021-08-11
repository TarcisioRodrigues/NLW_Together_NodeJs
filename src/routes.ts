import { request, response, Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticateController } from './controllers/AuthenticateController';
import { CreateComplimentController } from './controllers/CreateComplimentController';

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateController();
const createComplimentController = new CreateComplimentController();

router.post('/tags', ensureAdmin, createTagController.handle);
router.post('/users', createUserController.handle);
router.post('/sessions', authenticateUserController.handle);
router.post('/compliments', createComplimentController.handle);
export { router };
