import { Injectable } from '@nestjs/common';
import { List } from './list/list.schema';

import { ListService } from './list/list.service';

@Injectable()
export class ToDoService {
  constructor(private listService: ListService) {}

  getLists(): { lists: Promise<List[]> } {
    return { lists: this.listService.getAll() };
  }

  getList(id: number): { list: Promise<List> } {
    return { list: this.listService.getList(id) };
  }

  deleteList(id: number): { result: Promise<List> } {
    return { result: this.listService.deleteList(id) };
  }

  addList(newList: List): { result: Promise<List> } {
    return { result: this.listService.addList(newList) };
  }

  updateList(id: number, newState: List) {
    this.listService.updateList(id, newState);
  }
}
