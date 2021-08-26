import { getCustomRepository } from 'typeorm';
import { TagRepositories } from '../repositories/TagRepositories';
import { classToPlain } from 'class-transformer';
class ListTagServices {
  async execute() {
    const tagRepositories = getCustomRepository(TagRepositories);
    const tags = await tagRepositories.find();

    return classToPlain(tags);
  }
}

export { ListTagServices };
