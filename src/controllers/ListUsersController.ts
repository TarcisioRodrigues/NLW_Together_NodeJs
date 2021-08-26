import { Request, Response } from 'express';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { ListUserService } from '../services/ListUserService';

class ListUsersController {
  async handle(request: Request, response: Response) {
    const listUsersServices = new ListUserService();
    const users = await listUsersServices.execute();
    return response.json(users);
  }
}

export { ListUsersController };
