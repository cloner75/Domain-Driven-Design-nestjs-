import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { findOneUserQuery } from '../find-one.user.query';
import { userMongoRepository } from 'src/infra/database/repository/user.repository';


@QueryHandler(findOneUserQuery)
export class FindOneUserQueryHandler implements IQueryHandler<findOneUserQuery> {
  constructor(
    private readonly userRepository: userMongoRepository
  ) { }

  async execute(query: findOneUserQuery): Promise<any> {
    const id = query.id;
    const findUser = await this.userRepository.findOne({ id });
    return findUser;
  }
}