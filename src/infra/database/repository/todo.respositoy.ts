import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoDocuemnt } from '../models/todo.model';
import { TodoIRepository } from 'src/domain/todo/repositories/todo.repository';


@Injectable()
export class todoMongoRepository implements TodoIRepository {
  constructor(
    @InjectModel('todo')
    private readonly todoModel: Model<TodoDocuemnt>
  ) { }

  find(query) {
    try {
      return this.todoModel.find(query);
    } catch (err) {
      return err;
    }
  }


  findOne(query) {
    try {
      return this.todoModel.findOne(query);
    } catch (err) {
      return err;
    }
  }



  create(input) {
    try {
      return this.todoModel.create(input);
    } catch (err) {
      return err;
    }
  }


  delete(id) {
    try {
      return this.todoModel.deleteOne({ id });
    } catch (err) {
      return err;
    }
  }

  update(id, input) {
    try {
      return this.todoModel.updateOne({ id }, { $set: input });
    } catch (err) {
      return err;
    }
  }
}