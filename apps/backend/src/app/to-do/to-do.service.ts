import { Injectable } from '@nestjs/common';

import { CreateListDto } from './list/dto/create-list.dto';
import { UpdateListDto } from './list/dto/update-list.dto';
import { List } from './list/list.schema';
import { ListService } from './list/list.service';

@Injectable()
export class ToDoService {
  constructor(private listService: ListService) {}

  create(createListDto: CreateListDto): Promise<List> {
    return this.listService.addList(createListDto);
  }

  findAll(): Promise<List[]> {
    return this.listService.getAll();
  }

  async deleteList(id: string): Promise<List> {
    return this.listService.deleteList(id);
  }

  findOne(id: string): Promise<List> {
    return this.listService.getList(id);
  }

  update(id: string, updateListDto: UpdateListDto): Promise<List> {
    return this.listService.updateList(id, updateListDto);
  }

  remove(id: string): Promise<List> {
    return this.listService.deleteList(id);
  }
}
