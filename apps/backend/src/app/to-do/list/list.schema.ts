import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { Item } from '../list-item/list-item.interface';

export type ListDocument = List & Document;

@Schema()
export class List
{
  @Prop({ required: true})
  title: string;

  @Prop()
  items: Item[];
}

export const ListSchema = SchemaFactory.createForClass(List);

