import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ListDocument = HydratedDocument<List>;

@Schema()
export class List {
  @Prop({ required: true, type: Types.ObjectId })
  todoId: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  value: string;

  @Prop({ required: true, default: Date.now })
  createdAt: Date;

  @Prop({ required: true, default: Date.now })
  updatedAt: Date;

}


export const ListModel = SchemaFactory.createForClass(List); 