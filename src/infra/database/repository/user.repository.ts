import { Injectable, } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../models/user.model';



@Injectable()
export class userMongoRepository {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) { }

  find(query) {
    try {
      return this.userModel.find(query);
    } catch (err) {
      return err;
    }
  }


  findOne(query, options = {}) {
    try {
      return this.userModel.findOne(query, options);
    } catch (err) {
      return err;
    }
  }

  create(input) {
    try {
      return this.userModel.create(input);
    } catch (err) {
      return err;
    }
  }


  delete(id) {
    try {
      return this.userModel.deleteOne({ id });
    } catch (err) {
      return err;
    }
  }


  update(id, input) {
    try {
      return this.userModel.updateOne({ id }, { $set: input });
    } catch (err) {
      return err;
    }
  }
}

