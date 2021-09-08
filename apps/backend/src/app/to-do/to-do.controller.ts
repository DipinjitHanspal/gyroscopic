import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { List } from './list/list.schema';
import { ToDoService } from './to-do.service';

@Controller('to-do')
export class ToDoController {
  constructor(private readonly todooService: ToDoService) {}

  @Get('list')
  list() {
    return this.todooService.getLists();
  }

  @Get('list/:id')
  listOne(@Param('id') id: number) {
    return this.todooService.getList(id);
  }

  @Post('list/:id')
  delete(@Param('id') id: number) {
    return this.todooService.deleteList(id);
  }

  @Put('list/add')
  item(@Body() list: List) {
    return this.todooService.addList(list);
  }

  @Put('list/:id/update')
  updateItem(@Param('id') id: number, @Body() list: List)
  {
    return this.todooService.updateList(id, list);
  }
}
