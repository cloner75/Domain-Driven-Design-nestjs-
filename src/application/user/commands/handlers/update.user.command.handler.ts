import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { removeUserCommand } from '../remove.user.command';
import { userMongoRepository } from 'src/infra/database/repository/user.repository';
import { updateUserCommand } from '../update.user.command';

@CommandHandler(updateUserCommand)
export class updateUserHandler implements ICommandHandler<updateUserCommand> {
  constructor(
    private readonly userRepository: userMongoRepository
  ) { }

  async execute(command: updateUserCommand) {
    const { id, input } = command;
    const result = await this.userRepository.update({ id }, input);
    return result;
  }
}