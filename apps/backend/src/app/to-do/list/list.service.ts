import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { List, ListDocument } from './list.schema';
import { UpdateListDto } from './dto/update-list.dto';
import { CreateListDto } from './dto/create-list.dto';

@Injectable()
export class ListService {
  list: List;

  constructor(
    @InjectModel(List.name) private listModel: Model<ListDocument>
  ) {
    this.list = new List();
    this.list.title = 'Test';
    this.list.items = [];
  }

  async getAll(): Promise<List[]> {
    return this.listModel.find().exec();
  }

  async getList(id: string): Promise<List> {
    return this.listModel.findById(id);
  }

  async updateList(id: string, newState: UpdateListDto): Promise<List> {
    return this.listModel.findByIdAndUpdate(id, newState);
  }

  async addList(createListDto: CreateListDto): Promise<List> {
    console.log(createListDto);
    return this.listModel.create(createListDto);
  }

  async deleteList(id: string): Promise<List> {
    return this.listModel.findByIdAndDelete(id);
  }
}
