import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { RecipesContext } from '.';

function RecipesProvider({ children }) {
  const [drinks, setDrinks] = useState([]);
  const [meals, setmeals] = useState([]);

  const shared = {
    drinks,
    setDrinks,
    meals,
    setmeals,
  };

  return (
    <RecipesContext.Provider value={ { ...shared } }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
