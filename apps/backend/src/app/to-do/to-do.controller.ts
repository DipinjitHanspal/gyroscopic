import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ToDoService } from './to-do.service';
import { CreateListDto } from './list/dto/create-list.dto';
import { UpdateListDto } from './list/dto/update-list.dto';
import { List } from './list/list.schema';

@Controller('to-do')
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Post('list')
  create(@Body() createListDto: CreateListDto): Promise<List> {
    return this.toDoService.create(createListDto);
  }

  @Get('list')
  async findAll(): Promise<List[]> {
    return this.toDoService.findAll();
  }

  @Get('list/:id')
  findOne(@Param('id') id: string): Promise<List> {
    return this.toDoService.findOne(id);
  }

  @Patch('list/:id')
  update(@Param('id') id: string, @Body() updateListDto: UpdateListDto): Promise<List> {
    return this.toDoService.update(id, updateListDto);
  }

  @Delete('list/:id')
  remove(@Param('id') id: string): Promise<List> {
    return this.toDoService.remove(id);
  }
}
