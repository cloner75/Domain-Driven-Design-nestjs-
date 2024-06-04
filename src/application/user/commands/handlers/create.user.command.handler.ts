import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { userMongoRepository } from 'src/infra/database/repository/user.repository';
import { CreateUserCommand } from '../create.user.command';
import { Inject } from '@nestjs/common';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    private userRepository: userMongoRepository
  ) { }


  async execute(command: CreateUserCommand): Promise<any> {
    const { email, password } = command;
    return this.userRepository.create({ email, password });
  }
}