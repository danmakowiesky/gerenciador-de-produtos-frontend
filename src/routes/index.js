import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import InsertClient from '../pages/InsertClient';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/insertClient" exact component={InsertClient} />
    </Switch>
  );
}
