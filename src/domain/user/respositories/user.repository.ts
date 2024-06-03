import { UserDocument } from 'src/infra/database/models/user.model';
import { User } from '../entities/user.entity';

export interface UserIRepository {
  find(query: User): Promise<UserDocument[]>;
  findOne(query: User): Promise<UserDocument>;
  create(user: User): Promise<UserDocument>;
  update(id: string, user: User): Promise<UserDocument>;
  delete(id: string): Promise<any>;

}