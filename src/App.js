import React, { useContext } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { MainContext } from './context';
import Loading from './components/Loading';
import WarningMessage from './components/WarningMessage';
import Login from './pages/Login';
import Main from './pages/Main';
import Details from './pages/Details';
import Profile from './pages/Profile';
import ProfileRecipes from './pages/ProfileRecipes';
import NotFound from './pages/NotFound';
import './styles/App.css';

function App() {
  const { isLoading, warningMessage } = useContext(MainContext);

  return (
    <BrowserRouter>
      {isLoading && <Loading />}
      {warningMessage && <WarningMessage />}
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/meals' component={Main} />
        <Route exact path='/drinks' component={Main} />
        <Route exact path="/meals/:id" component={ Details } />
        <Route exact path="/drinks/:id" component={ Details } />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/recipes-in-progress' component={ProfileRecipes} />
        <Route exact path='/done-recipes' component={ProfileRecipes} />
        <Route exact path='/favorite-recipes' component={ProfileRecipes} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
