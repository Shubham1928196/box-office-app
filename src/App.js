import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Show from './pages/Show';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/starred">
        <Starred />
      </Route>

      <Route exact path="/Show/:id">
        <Show />
      </Route>

      <Route>Not found!</Route>
    </Switch>
  );
}

export default App;
