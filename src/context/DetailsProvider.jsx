import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { DetailsContext } from '.';

function DetailsProvider({ children }) {
  const [details, setDetails] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  const shared = {
    details,
    setDetails,
    ingredients,
    setIngredients,
    measures,
    setMeasures,
  };

  return (
    <DetailsContext.Provider value={ { ...shared } }>
      {children}
    </DetailsContext.Provider>
  );
}

DetailsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DetailsProvider;
