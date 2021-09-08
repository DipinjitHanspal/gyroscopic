import { Injectable } from "@nestjs/common";
import { ListDocument } from "../list/list.schema";
import { Item } from "./list-item.interface";

@Injectable()
export class ListItemService{

  addItem(listDocument: ListDocument, item: Item) : void {
    listDocument.items.push(item);
  }

  removeItem(listDocument: ListDocument, title: string) : ListDocument {
    const itemIndex: number = this.getItemIndex(listDocument, title);
    if (itemIndex >= 0) {
      // Splice only returns a list even if you delete 1 item
      listDocument.items.splice(itemIndex)[0];
    }
    return listDocument;
  }

   updateItem(listDocument: ListDocument, title: string, newState: Item): ListDocument {
    const itemIndex : number = this.getItemIndex(listDocument, title);
    if (itemIndex >= 0)
    {
      listDocument[itemIndex] = newState;
    }
    return listDocument;
  }

  findItem(listDocument: ListDocument, title: string): Item | null {
    const item: Item | null = listDocument.items.find(
      (item: Item) => item.title == title
    );
    return item;
  }

  getItemIndex(listDocument: ListDocument, title: string): number {
    const item : Item | null = this.findItem(listDocument, title);
    if (item)
    {
      return listDocument.items.indexOf(item);
    }
    return -1;
  }
}
