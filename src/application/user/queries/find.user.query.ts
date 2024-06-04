import { Query } from 'src/share/types/query.type';

export class findUserQuery {
  constructor(
    public readonly options: Query
  ) { }
}