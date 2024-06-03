import { TodoDocuemnt } from 'src/infra/database/models/todo.model';
import { Todo } from '../entities/todo.entity';

export interface TodoIRepository {
  find(query: Todo): Promise<TodoDocuemnt[]>;
  findOne(query: Todo): Promise<TodoDocuemnt>;
  create(todo: Todo): Promise<TodoDocuemnt>;
  update(id: string, todo: Todo): Promise<TodoDocuemnt>;
  delete(id: string): Promise<any>;
}