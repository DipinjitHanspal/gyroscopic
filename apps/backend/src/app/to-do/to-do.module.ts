import { Module } from "@nestjs/common";
import { ListItemModule } from "./list-item/list-item.module";
import { ListModule } from "./list/list.module";
import { ListService } from "./list/list.service";

import { ToDoController } from "./to-do.controller";
import { ToDoService } from "./to-do.service";


@Module({
  imports: [ListModule, ListItemModule],
  controllers: [
    ToDoController,
  ],
  providers: [
    ToDoService,
    ListService
  ]
})

export class ToDoModule {}
