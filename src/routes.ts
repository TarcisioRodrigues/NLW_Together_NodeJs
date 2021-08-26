import { request, response, Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticateController } from './controllers/AuthenticateController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { ListUserSendComplimetsController } from './controllers/ListUserSendComplimetsController';
import { ListUserReceiverComplimetsController } from './controllers/ListUserReceiverComplimetsController';
import { ListTagController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateController();
const createComplimentController = new CreateComplimentController();
const listerUserSendComplimentController =
  new ListUserSendComplimetsController();
const listerUserReceiverComplimentController =
  new ListUserReceiverComplimetsController();
const listTagController = new ListTagController();
const listUserController = new ListUsersController();

router.post(
  '/tags',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.post('/users', createUserController.handle);
router.post('/sessions', authenticateUserController.handle);
router.post(
  '/compliments',
  ensureAuthenticated,
  createComplimentController.handle
);
router.get(
  '/users/compliments/send',
  ensureAuthenticated,
  listerUserSendComplimentController.handle
);
router.get(
  '/users/compliments/receiver',
  ensureAuthenticated,
  listerUserReceiverComplimentController.handle
);
router.get('/tags/list', ensureAuthenticated, listTagController.handle);
router.get('/users', ensureAuthenticated, listUserController.handle);
export { router };
