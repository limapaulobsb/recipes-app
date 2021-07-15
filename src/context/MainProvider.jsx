import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { MainContext } from '.';

function MainProvider({ children }) {
  const localFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState(localFavorites);
  const [userEmail, setUserEmail] = useState('');
  const [warningMessage, setWarningMessage] = useState('');

  const shared = {
    isLoading,
    setIsLoading,
    favorites,
    setFavorites,
    userEmail,
    setUserEmail,
    warningMessage,
    setWarningMessage,
  };

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  }, [favorites]);

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
