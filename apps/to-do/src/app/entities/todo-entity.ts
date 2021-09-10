import { List } from "./list-entity";

/* eslint-disable-next-line */
export interface ToDoProps {}

export interface ToDoState {
  newListTitle: string;
  lists: List[];
}
