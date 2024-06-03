export class User {
  constructor(
    public id: string,
    public email: string,
    public password: string,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) { }
}