import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './database/models/user.model';
import { userMongoRepository } from './database/repository/user.repository';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema }
    ])
  ],
  providers: [userMongoRepository],
  controllers: []
})

export class InfraModule { }