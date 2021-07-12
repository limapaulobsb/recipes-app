import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MainContext } from '.';

function MainProvider({ children }) {
  const [userEmail, setUserEmail] = useState('wololo');

  const shared = {
    userEmail,
    setUserEmail,
  };

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
