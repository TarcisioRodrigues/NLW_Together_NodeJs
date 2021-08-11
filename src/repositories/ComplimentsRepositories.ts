import { EntityRepository, Repository } from 'typeorm';
import { Compliment } from '../enity/Compliment';
@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment> {}

export { ComplimentsRepositories };
