import { Module } from '@nestjs/common';
import { ToDoService } from './to-do.service';
import { ToDoController } from './to-do.controller';
import { ListModule } from './list/list.module';
import { ListItemModule } from './list/list-item/list-item.module';
import { ListService } from './list/list.service';

@Module({
  imports: [
    ListModule,
    ListItemModule
  ],
  controllers: [ToDoController],
  providers: [
    ToDoService,
    ListService
  ]
})
export class ToDoModule {}
