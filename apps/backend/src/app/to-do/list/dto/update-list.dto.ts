import { PartialType } from '@nestjs/mapped-types';
import { Item } from '../list-item/list-item.interface';
import { CreateListDto } from './create-list.dto';

export class UpdateListDto extends PartialType(CreateListDto) {
  readonly title?: string;
  readonly updatedItems?: Item[];
}
