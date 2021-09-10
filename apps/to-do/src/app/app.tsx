import styles from './app.module.scss';

import { CardHeader, Paper, Fab } from '@material-ui/core';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import ToDo from './to-do/to-do';
import { ListComponent } from './to-do/list/list';

export function App() {
  return (
    <Router>
      <Paper className={styles.app}>
        <main>
          <Route exact={true} path="/">
            <CardHeader title="Welcome to the basic ToDo App">
              <h1>Welcome to the basic ToDo App</h1>
            </CardHeader>
            <ToDo />
          </Route>
          <Route
            path="/list/:id"
            render={(props) => <ListComponent id={props.match.params.id} />}
          />
          <span className={ styles.FloatingHomeNav }>
            <Fab href="/" variant="extended">
                All Lists
            </Fab>
          </span>
        </main>
      </Paper>
    </Router>
  );
}

export default App;
