import React from 'react';

import { Link } from 'react-router-dom';
import { Card, Button, Container, Input } from '@material-ui/core';

import { ToDoState, ToDoProps } from '../entities/todo-entity';

import styles from './to-do.module.scss';
import { CreateListDto } from '../entities/list-create.dto';
import { List } from '../entities/list-entity';

class ToDo extends React.Component<ToDoProps, ToDoState> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);

    this.state = {
      newListTitle: '',
      lists: [],
    };

    this.handleListDelete = this.handleListDelete.bind(this);
    this.handleListCreate = this.handleListCreate.bind(this);
    this.handleNewListTitleUpdate = this.handleNewListTitleUpdate.bind(this);
  }

  loadLists() {
    const url: string =
      (process.env.apiPath || 'http://localhost:3333') + '/api/to-do/list';
    fetch(url, {
      headers: {
        'access-control-allow-origin': '*',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          lists: res,
        });
      });
  }

  componentDidMount() {
    this.loadLists();
  }

  handleListDelete(_id: string) {
    const url: string =
      (process.env.apiPath || 'http://localhost:3333') +
      '/api/to-do/list/' +
      _id;
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        this.loadLists();
      });
  }

  handleListCreate() {
    if (this.state.newListTitle.length > 0) {
      const url: string =
        (process.env.apiPath || 'http://localhost:3333') + '/api/to-do/list/';

      const createListDto: CreateListDto = { title: this.state.newListTitle };

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(createListDto),
      };
      fetch(url, requestOptions)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            lists: [...this.state.lists].concat([res as List]),
          });
        });
    }
  }

  handleNewListTitleUpdate(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      newListTitle: e.target.value,
    });
  }

  render() {
    const { lists } = this.state;
    return (
      <Container className={styles.Container}>
        <Container className={styles.AddList}>
          <Input
            value={this.state.newListTitle}
            onChange={this.handleNewListTitleUpdate}
          />
          <Button
            onClick={this.handleListCreate}
            disabled={this.state.newListTitle.length === 0}
          >
            {' '}
            Create A New List{' '}
          </Button>
        </Container>
        {lists.length > 0 &&
          lists.map((list) => (
            <Card id="list_card" key={list._id}>
              <Link to={`list/${list._id}`} className={styles.ListLinks}>
                <Container className={styles.ListAll}>
                  <h1>{list.title}</h1>
                </Container>
              </Link>
              <Button
                className={styles.Delete}
                onClick={() => this.handleListDelete(list._id)}
              >
                Delete
              </Button>
            </Card>
          ))}
        {lists.length === 0 && <h1>Create a list to get started!</h1>}
      </Container>
    );
  }
}

export default ToDo;
