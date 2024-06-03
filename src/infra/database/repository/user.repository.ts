import { Injectable, } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from '../models/user.model';



@Injectable()
export class userMongoRepository {
  constructor(
    @InjectModel('user')
    private readonly usertModel: Model<UserDocument>,
  ) { }

  find(query) {
    try {
      return this.usertModel.find(query);
    } catch (err) {
      return err;
    }
  }


  findOne(query) {
    try {
      return this.usertModel.findOne(query);
    } catch (err) {
      return err;
    }
  }

  create(input) {
    try {
      return this.usertModel.create(input);
    } catch (err) {
      return err;
    }
  }


  delete(id) {
    try {
      return this.usertModel.deleteOne({ id });
    } catch (err) {
      return err;
    }
  }


  update(id, input) {
    try {
      return this.usertModel.updateOne({ id }, { $set: input });
    } catch (err) {
      return err;
    }
  }
}

