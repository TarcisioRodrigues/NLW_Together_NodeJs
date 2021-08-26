import { Request, Response } from 'express';
import { ListUserSendComplimetsService } from '../services/ListUserSendComplimetsService';

class ListUserSendComplimetsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listUserSendComplimentsService = new ListUserSendComplimetsService();
    const compliment = await listUserSendComplimentsService.execute(user_id);
    return response.json(compliment);
  }
}

export { ListUserSendComplimetsController };
