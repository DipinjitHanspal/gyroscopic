import { Injectable } from '@nestjs/common';
import { ToDo } from './entities/to-do.entity';
import { CreateListDto } from './list/dto/create-list.dto';
import { UpdateListDto } from './list/dto/update-list.dto';
import { List } from './list/list.schema';
import { ListService } from './list/list.service';

@Injectable()
export class ToDoService {
  constructor(private listService: ListService) {}

  create(createListDto: CreateListDto) {
    return { result: this.listService.addList(createListDto) };
  }

  findAll(): { lists: Promise<List[]> } {
    return { lists: this.listService.getAll() };
  }

  async deleteList(id: number) : Promise<List> {
    return this.listService.deleteList(id);
  }

  findOne(id: number): {list: Promise<List>} {
    return { list: this.listService.getList(id) };
  }

  update(id: number, updateListDto: UpdateListDto) {
    this.listService.updateList(id, updateListDto);
  }

  remove(id: number): { result: Promise<List> } {
    return { result: this.listService.deleteList(id) };
  }
}
