import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocuemnt = HydratedDocument<Todo>;

@Schema()
export class Todo {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, default: Date.now })
  createdAt: Date;

  @Prop({ required: true, default: Date.now })
  updatedAt: Date;
}


export const todoModel = SchemaFactory.createForClass(Todo);
