import { Request, Response } from 'express';
import { CreateComplimentsService } from '../services/CreateComplimentsService';

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { tag_id, message, user_receiver } = request.body;
    const { user_id } = request;
    const createComplimentService = new CreateComplimentsService();

    const compliment = await createComplimentService.execute({
      tag_id,
      message,
      user_receiver,
      user_sender: user_id,
    });
    return response.json(compliment);
  }
}

export { CreateComplimentController };
