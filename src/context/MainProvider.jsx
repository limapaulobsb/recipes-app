import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { MainContext } from '.';

function MainProvider({ children }) {
  const localDone = JSON.parse(localStorage.getItem('doneRecipes')) ?? [];
  const localFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) ?? [];
  const localInProgress = JSON.parse(localStorage.getItem('recipesInProgress')) ?? [];

  const [done, setDone] = useState(localDone);
  const [favorites, setFavorites] = useState(localFavorites);
  const [inProgress, setInProgress] = useState(localInProgress);
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [warningMessage, setWarningMessage] = useState('');

  const shared = {
    done,
    favorites,
    inProgress,
    isLoading,
    userEmail,
    warningMessage,
    setDone,
    setFavorites,
    setInProgress,
    setIsLoading,
    setUserEmail,
    setWarningMessage,
  };

  useEffect(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(done));
  }, [done]);

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('recipesInProgress', JSON.stringify(inProgress));
  }, [inProgress]);

  return (
    <MainContext.Provider value={ { ...shared } }>
      {children}
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainProvider;
