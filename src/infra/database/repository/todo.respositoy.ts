import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoDocuemnt } from '../models/todo.model';


@Injectable()
export class todoMongoRepository {
  constructor(
    @InjectModel('todo')
    private readonly todoModel: Model<TodoDocuemnt>
  ) { }

}