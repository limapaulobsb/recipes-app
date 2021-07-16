import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { DetailsContext, MainContext } from '.';
import { fetchDetails, fetchRandom } from '../services';

function DetailsProvider({ children }) {
  const { setIsLoading } = useContext(MainContext);
  const [details, setDetails] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  const getDetails = async (type, id) => {
    setIsLoading(true);

    const result = id ? await fetchDetails(type, id) : await fetchRandom(type);
    setDetails(result);

    const formattedIngredients = Object.entries(result)
      .filter((item) => item[0].includes('Ingredient') && item[1])
      .map((item) => item[1]);
    setIngredients(formattedIngredients);

    const formattedMeasures = Object.entries(result)
      .filter((item) => item[0].includes('Measure') && item[1])
      .map((item) => item[1]);
    setMeasures(formattedMeasures);

    setIsLoading(false);
    return result;
  };

  const shared = {
    details,
    setDetails,
    ingredients,
    setIngredients,
    measures,
    setMeasures,
    getDetails,
  };

  return (
    <DetailsContext.Provider value={{ ...shared }}>
      {children}
    </DetailsContext.Provider>
  );
}

DetailsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DetailsProvider;
