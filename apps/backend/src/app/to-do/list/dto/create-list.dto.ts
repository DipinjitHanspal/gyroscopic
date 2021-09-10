import { Item } from "../list-item/list-item.interface";

export class CreateListDto {
  readonly title: string;
  readonly items?: Item[];
}
