import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ToDoService } from './to-do.service';
import { CreateListDto } from './list/dto/create-list.dto';
import { UpdateListDto } from './list/dto/update-list.dto';

@Controller('to-do')
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Post('list')
  create(@Body() createListDto: CreateListDto) {
    return this.toDoService.create(createListDto);
  }

  @Get('list')
  findAll() {
    return this.toDoService.findAll();
  }

  @Get('list/:id')
  findOne(@Param('id') id: string) {
    return this.toDoService.findOne(+id);
  }

  @Patch('list/:id')
  update(@Param('id') id: string, @Body() updateListDto: UpdateListDto) {
    return this.toDoService.update(+id, updateListDto);
  }

  @Delete('list/:id')
  remove(@Param('id') id: string) {
    return this.toDoService.remove(+id);
  }
}
