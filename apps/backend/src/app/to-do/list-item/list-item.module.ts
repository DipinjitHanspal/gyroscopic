import { Module } from "@nestjs/common";
import { ListItemService } from "./list-item.service";

@Module({
  providers: [ListItemService]
})

export class ListItemModule {}
