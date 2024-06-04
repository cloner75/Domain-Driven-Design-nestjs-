import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { FindOneUserQueryHandler } from '../queries/handlers/find.one.user.handler';

@Injectable()
export class UserService {
  constructor(
    private queryBus: QueryBus,
    private commandBus: CommandBus,
  ) { }

  async findOneUser(id: string): Promise<any> {
    return await this.queryBus.execute(new FindOneUserQueryHandler(id));
  }

}