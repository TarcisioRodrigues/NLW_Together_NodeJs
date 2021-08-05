import { EntityRepository, Repository } from 'typeorm';
import { Tag } from '../enity/Tag';
@EntityRepository(Tag)
class TagRepositories extends Repository<Tag> {}

export { TagRepositories };
