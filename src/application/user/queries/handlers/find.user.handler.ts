import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { userMongoRepository } from 'src/infra/database/repository/user.repository';
import { findUserQuery } from '../find.user.query';


@QueryHandler(findUserQuery)
export class findUserQueryHandler implements IQueryHandler<findUserQuery> {
  constructor(
    private readonly userRepository: userMongoRepository
  ) { }

  async execute(query: findUserQuery): Promise<any> {
    const options = query.options;
    const findUsers = await this.userRepository.findOne({}, options);
    return findUsers;
  }
}