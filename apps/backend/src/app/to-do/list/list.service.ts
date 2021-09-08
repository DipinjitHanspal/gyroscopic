import { Injectable } from '@nestjs/common';
import { Item } from './list.item.interface';
import { List } from './list.schema';

@Injectable()
export class ListService {
  list: List;

  constructor() {
    this.list.title = 'Test';
    this.list.items = [];
  }

  getAll(): List {
    return this.list;
  }

  addItem(item: Item) {
    this.list.items.push(item);
  }

  removeItem(title: string) : boolean {
    const item: Item | null = this.findItem(title);
    if (item) {
      const index : number = this.list.items.indexOf(item);
      // Splice only returns a list even if you delete 1 item
      this.list.items.splice(index)[0];
      return true;
    }
    return false;
  }

  updateItem(title: string, newState: Item): void {
    const item: Item | null = this.findItem(title);
    if (item)
    {
      const index : number = this.list.items.indexOf(item);
      this.list.items[index] = newState;
    }
  }

  findItem(title: string): Item | null {
    const item: Item | null = this.list.items.find(
      (item: Item) => item.title == title
    );
    return item;
  }
}
