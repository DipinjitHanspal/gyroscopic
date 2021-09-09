import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Item } from './list-item/list-item.interface';
import { List, ListDocument } from './list.schema';
import { ListItemService } from './list-item/list-item.service';
import { UpdateListDto } from './dto/update-list.dto';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ListService {
  list: List;

  constructor(@InjectModel(List.name) private listModel: Model<ListDocument>,
  private listItemService: ListItemService) {
    this.list = new List;
    this.list.title = 'Test';
    this.list.items = [];
  }

  async getAll(): Promise<List[]> {
    return this.listModel.find().exec();
  }

  async getList(id: number): Promise<List> {
    return (await this.listModel.findById(id)).toObject();
  }

  async updateList(listID: number, newState: UpdateListDto): Promise<List> {
    return this.listModel.findByIdAndUpdate(listID, newState);
  }

  async addList(createListDto: CreateListDto) : Promise<List> {
    return this.listModel.create(createListDto);
  }

  async deleteList(id: number) : Promise<List> {
    return this.listModel.findByIdAndDelete(id);
  }

  async updateItem(id: number, item: UpdateItemDto): Promise<List> {
    return this.listModel.findByIdAndUpdate(id, item);
  }

  async removeItem(listID: number, itemID: string): Promise<List> {
    return (await this.listModel.findByIdAndUpdate(listID, (listDocument) => this.listItemService.removeItem(listDocument, itemID)));
  }

  async addItem(id: number, createItem: CreateItemDto): Promise<List> {
    return this.listModel.findByIdAndUpdate(id, createItem);
  }
}


