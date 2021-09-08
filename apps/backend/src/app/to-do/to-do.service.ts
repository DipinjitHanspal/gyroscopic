import { Injectable } from '@nestjs/common';
import { List } from './list/list.interface';
import { Item } from './list/list.item.interface';

import { ListService } from './list/list.service';

@Injectable()
export class ToDoService {
  constructor(private listService: ListService) {}

  getList(): { list: List } {
    return { list: this.listService.getAll() };
  }

  deleteItem(title: string): { success: boolean } {
    return { success: this.listService.removeItem(title) };
  }

  addItem(item: Item): void {
    this.listService.addItem(item);
  }

  updateItem(title: string, newItem: Item) {
    this.listService.updateItem(title, newItem);
  }
}
