export interface Item
{
  title: string;
  done?: boolean;
}

export interface ItemProps
{
  item: Item,
  handleItemChange(item: Item, e: React.ChangeEvent<HTMLInputElement>): void
}
