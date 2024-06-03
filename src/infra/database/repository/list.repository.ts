import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListDocument } from '../models/list.model';
import { ListIRepository } from 'src/domain/todo/repositories/list.repository';

@Injectable()
export class ListMongoRepository implements ListIRepository {
  constructor(
    @InjectModel('list')
    private readonly listModel: Model<ListDocument>
  ) { }

  find(query) {
    try {
      return this.listModel.find(query);
    } catch (err) {
      return err;
    }
  }


  findOne(query) {
    try {
      return this.listModel.findOne(query);
    } catch (err) {
      return err;
    }
  }



  create(input) {
    try {
      return this.listModel.create(input);
    } catch (err) {
      return err;
    }
  }


  delete(id) {
    try {
      return this.listModel.deleteOne({ id });
    } catch (err) {
      return err;
    }
  }


  update(id, input) {
    try {
      return this.listModel.updateOne({ id }, { $set: input });
    } catch (err) {
      return err;
    }
  }
}