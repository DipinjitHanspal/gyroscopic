import { Module } from "@nestjs/common";
import { ListItemService } from "./list-item.service";

@Module({
  providers: [ListItemService],
  exports: [ListItemService]
})

export class ListItemModule {}
