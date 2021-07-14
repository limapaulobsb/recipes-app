import React, { useContext } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { MainContext } from './context';
import Loading from './pages/Loading';
import Login from './pages/Login';
import Main from './pages/Main';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import './styles/App.css';

function App() {
  const { isLoading } = useContext(MainContext);

  return (
    <BrowserRouter>
      {isLoading && <Loading />}
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/meals' component={Main} />
        <Route exact path='/drinks' component={Main} />
        <Route exact path='/profile' component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
