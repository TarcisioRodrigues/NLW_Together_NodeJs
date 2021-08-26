import { Request, Response } from 'express';
import { ListUserReceiverComplimetsService } from '../services/ListUserReceiverComplimetsService';

class ListUserReceiverComplimetsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listUserReceiverComplimentsService =
      new ListUserReceiverComplimetsService();
    const compliment = await listUserReceiverComplimentsService.execute(
      user_id
    );
    return response.json(compliment);
  }
}

export { ListUserReceiverComplimetsController };
