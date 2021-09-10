import { Item } from "./item-entity";

export interface List
{
  _id: string;
  title: string;
  items: Item[];
  newItemTitle: string;
  newListTitle: string;
  newItemsList: Item[];
  dirty: boolean;
}

export interface ListProps
{
  id: string
}
