import React from 'react';

import styles from './list.module.scss';

import { Button, Container, Input } from '@material-ui/core';
import { List, ListProps } from '../../entities/list-entity';
import { ItemComponent } from './item/item';
import { Item } from '../../entities/item-entity';
import UpdateListDto from '../../entities/list-update.dto';

export class ListComponent extends React.Component<ListProps, List> {
  constructor(props: ListProps) {
    super(props);

    this.state = {
      _id: '',
      title: '',
      items: [],
      newItemTitle: '',
      newListTitle: '',
      newItemsList: [],
      dirty: false,
    };

    this.handleItemTitle = this.handleItemTitle.bind(this);
    this.handleNewItem = this.handleNewItem.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDataSave = this.handleDataSave.bind(this);
    this.handleItemToggleDone = this.handleItemToggleDone.bind(this);
  }

  loadList() {
    const url: string = (process.env.apiPath || 'http://localhost:3333') + '/api/to-do/list' + this.props.id;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          _id: this.props.id,
          title: res.title,
          items: res.items,
          newListTitle: res.title,
          // Deep copy to avoid pass-by-reference issues
          newItemsList: [...res.items],
          dirty: false,
        });
      });
  }

  componentDidMount() {
    this.loadList();
  }

  handleTitleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    this.setState({
      newListTitle: e.target.value,
    });
  }

  handleNewItem() {
    if (this.state.newItemTitle.length > 0) {
      const newItem: Item = { title: this.state.newItemTitle, done: false };
      const items: Item[] = this.state.newItemsList.concat(newItem);
      this.setState({
        newItemsList: items,
        newItemTitle: '',
      });
    }
  }

  handleItemTitle(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    this.setState({
      newItemTitle: e.target.value,
    });
  }

  handleDataSave() {
    const listUpdateDto: UpdateListDto = {
      title: this.state.newListTitle,
      items: [...this.state.newItemsList],
    };

    console.log(listUpdateDto.items);

    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(listUpdateDto),
    };
    const url: string = (process.env.apiPath || 'http://localhost:3333') + '/api/to-do/list' + this.props.id;
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then(() => {
        this.loadList();
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          newListTitle: this.state.title,
          newItemTitle: '',
          newItemsList: [...this.state.items],
        });
      });
  }

  handleCancel() {
    this.setState({
      newListTitle: this.state.title,
      newItemTitle: '',
      newItemsList: [...this.state.items],
      dirty: false,
    });
  }

  handleItemDelete(item: Item) {
    console.log(item);
    const items: Item[] = this.state.newItemsList;
    const idx: number = items.indexOf(item);
    items.splice(idx, 1);
    this.setState({
      newItemsList: items,
    });
  }

  handleItemToggleDone(item: Item, e: React.ChangeEvent<HTMLInputElement>) {
    const items: Item[] = this.state.newItemsList;
    const idx: number = items.indexOf(item);
    items[idx].done = e.target.checked;
    this.setState({
      newItemsList: items,
      dirty: true,
    });
  }

  render() {
    const { title, items, newItemTitle, newListTitle, newItemsList, dirty } =
      this.state;
    return (
      <Container className={styles.List}>
        <Input
          id="list-title"
          value={newListTitle}
          onChange={this.handleTitleChange}
        />
        {newItemsList.length > 0 &&
          newItemsList.map((item: Item, idx: number) => (
            <Container key={idx} className={styles.ItemContainer}>
              <ItemComponent
                item={item}
                handleItemChange={this.handleItemToggleDone}
              />
              <Button
                className={styles.ItemButton}
                onClick={() => this.handleItemDelete(item)}
              >
                Delete
              </Button>
            </Container>
          ))}
        {!(newItemsList.length > 0) && (
          <span>
            <p>Add an Item!</p>
          </span>
        )}
        <span className={styles.BottomNav}>
          <span>
            <Input
              value={newItemTitle}
              onChange={this.handleItemTitle}
              id="new Item"
            />
            <Button
              onClick={this.handleNewItem}
              disabled={newItemTitle.length === 0}
            >
              Add Item
            </Button>
          </span>
          {(dirty ||
            newListTitle !== title ||
            JSON.stringify(newItemsList) !== JSON.stringify(items)) && (
            <span className={styles.RightButtons}>
              <Button onClick={this.handleDataSave}>Save Changes</Button>
              <Button onClick={this.handleCancel}>Cancel</Button>
            </span>
          )}
        </span>
      </Container>
    );
  }
}
