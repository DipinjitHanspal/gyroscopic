import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Item } from './list/list.item.interface';
import { ToDoService } from './to-do.service';

@Controller('to-do')
export class ToDoController {
  constructor(private readonly todooService: ToDoService) {}

  @Get('list')
  list() {
    return this.todooService.getList();
  }

  @Post('list/items/:title')
  delete(@Param('title') title: string) {
    return this.todooService.deleteItem(title);
  }

  @Put('list/add')
  item(@Body() item: Item) {
    return this.todooService.addItem(item);
  }

  @Put('list/items/:title/update')
  updateItem(@Param() title: string, @Body() item: Item)
  {
    return this.todooService.updateItem(title, item);
  }
}
