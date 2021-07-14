import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import Profile from './pages/Profile';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/meals' component={Main} />
        <Route exact path='/drinks' component={Main} />
        <Route exact path='/profile' component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
