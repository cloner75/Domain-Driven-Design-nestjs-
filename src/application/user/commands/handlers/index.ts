import { CreateUserHandler } from './create.user.command.handler';
import { removeUserHandler } from './remove.user.command.handler';

export const userCommandHandlers = [
  CreateUserHandler,
  removeUserHandler,
];