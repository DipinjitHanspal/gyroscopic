import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Item } from '../list-item/list-item.interface';
import { List, ListDocument } from './list.schema';
import { ListItemService } from '../list-item/list-item.service';

@Injectable()
export class ListService {
  list: List;

  constructor(@InjectModel(List.name) private listModel: Model<ListDocument>,
  private listItemService: ListItemService) {
    this.list.title = 'Test';
    this.list.items = [];
  }

  async getAll(): Promise<List[]> {
    return this.listModel.find().exec();
  }

  async getList(id: number): Promise<List> {
    return (await this.listModel.findById(id)).toObject();
  }

  async updateList(listID: number, newState: List): Promise<List> {
    return this.listModel.findByIdAndUpdate(listID, (listDocument: ListDocument) => listDocument.items = newState.items);
  }

  async addList(list: List) : Promise<List> {
    return this.listModel.create(list);
  }

  async deleteList(id: number) : Promise<List> {
    return this.listModel.findByIdAndDelete(id);
  }

  async updateItem(id: number, itemTitle: string, newState: Item): Promise<List> {
    return this.listModel.findByIdAndUpdate(id, (listDocument: ListDocument) => this.listItemService.updateItem(listDocument, itemTitle, newState))
  }

  async removeItem(id: number, itemTitle: string): Promise<List> {
    return this.listModel.findByIdAndUpdate(id, (listDocument: ListDocument) => this.listItemService.removeItem(listDocument, itemTitle));
  }

  async addItem(id: number, item: Item): Promise<List> {
    return this.listModel.findByIdAndUpdate(id, (listDocument: ListDocument) => this.listItemService.addItem(listDocument, item))
  }
}


