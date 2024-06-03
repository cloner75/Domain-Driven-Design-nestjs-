import { ListDocument } from 'src/infra/database/models/list.model';
import { List } from '../entities/list.entity';

export interface ListIRepository {
  find(query: List): Promise<ListDocument[]>;
  findOne(query: List): Promise<ListDocument>;
  create(list: List): Promise<ListDocument>;
  update(id: string, list: List): Promise<ListDocument>;
  delete(id: string): Promise<any>;
}