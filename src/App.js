import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/drinks' component={Main} />
        <Route exact path='/meals' component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
