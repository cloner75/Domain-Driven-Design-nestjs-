export class List {
  constructor(
    public id: string,
    public todoId: string,
    public name: string,
    public value: string,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) { }
}
