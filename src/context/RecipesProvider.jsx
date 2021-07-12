import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { RecipesContext } from '.';

function RecipesProvider({ children }) {
  const [userEmail, setUserEmail] = useState('');

  const shared = {
    userEmail,
    setUserEmail,
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
