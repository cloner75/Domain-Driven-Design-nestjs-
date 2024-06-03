export class Todo {
  constructor(
    public id: string,
    public name: string,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) { }
}
