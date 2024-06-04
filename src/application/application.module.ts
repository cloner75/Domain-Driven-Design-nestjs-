import { Module } from '@nestjs/common';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { appConfig } from 'src/share/config/app.config';
import { mongoConfig, MONGO_URL } from 'src/share/config/mongo.config';
import { AuthController } from 'src/presentation/user/controllers/auth.controller';
import { UserController } from 'src/presentation/user/controllers/user.controller';
import { TodoController } from 'src/presentation/todo/controllers/todo.controller';
import { TodoService } from './todo/services/todo.service';
import { UserService } from './user/services/user.service';
import { AuthService } from './user/services/auth.service';
import { CqrsModule } from '@nestjs/cqrs';
import { userCommandHandlers } from './user/commands/handlers';
import { userMongoRepository } from 'src/infra/database/repository/user.repository';
import { User, UserSchema } from 'src/infra/database/models/user.model';
import { userQueryHandlers } from './user/queries/handlers';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [appConfig, mongoConfig],
      envFilePath: ['.env', '.env.production', '.env.test']
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>(MONGO_URL)
      }),
      inject: [ConfigService]
    }),
    MongooseModule.forFeatureAsync([{
      name: User.name,
      useFactory: () => {
        return UserSchema;
      }
    }]),
    CqrsModule
  ],
  controllers: [AuthController, UserController, TodoController],
  providers: [
    AuthService,
    UserService,
    userMongoRepository,
    TodoService,
    ...userCommandHandlers,
    ...userQueryHandlers
  ],
})
export class AppModule { }
