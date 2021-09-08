import { Module } from "@nestjs/common";
import { ListModule } from "./list/list.module";

import { ToDoController } from "./to-do.controller";
import { ToDoService } from "./to-do.service";


@Module({
  imports: [ListModule],
  controllers: [
    ToDoController,
  ],
  providers: [
    ToDoService,
  ]
})

export class ToDoModule {}
