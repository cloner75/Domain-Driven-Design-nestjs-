import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { findOneUserQuery } from '../queries/find-one.user.query';

@Injectable()
export class UserService {
  constructor(
    private queryBus: QueryBus,
    private commandBus: CommandBus,
  ) { }

  async findOneUser(id: string): Promise<any> {
    return await this.queryBus.execute(new findOneUserQuery(id));
  }

}