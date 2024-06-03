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
}

