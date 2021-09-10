import { Item } from "./item-entity";

export class CreateListDto
{
  title?: string;
  items?: Item[];
}
