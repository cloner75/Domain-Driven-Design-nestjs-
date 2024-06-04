import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { removeUserCommand } from '../remove.user.command';
import { userMongoRepository } from 'src/infra/database/repository/user.repository';

@CommandHandler(removeUserCommand)
export class removeUserHandler implements ICommandHandler<removeUserCommand> {
  constructor(
    private readonly userRepository: userMongoRepository
  ) { }

  async execute(command: removeUserCommand) {
    const { id } = command;
    const result = await this.userRepository.delete({ id });
    return result;
  }
}