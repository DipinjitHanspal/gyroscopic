import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ListItemModule } from './list-item/list-item.module';
import { List, ListSchema } from './list.schema';
import { ListService } from './list.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: List.name, schema: ListSchema }]),
    ListItemModule,
  ],
  providers: [ListService],
  exports: [
    MongooseModule.forFeature([{ name: List.name, schema: ListSchema }]),
    ListService
  ]
})
export class ListModule {}
