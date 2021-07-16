import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { RecipesContext } from '../context';
import { setConstants } from '../helpers';

function RecipesList() {
  const { recipes } = useContext(RecipesContext);
  const { location: { pathname }, push } = useHistory();

  const isDrinks = pathname.includes('drinks');
  const { idKey, imgKey, nameKey, type } = setConstants(isDrinks);

  return (
    <section className='card-list'>
      {recipes[type]
        .filter((_item, index) => index < 12)
        .map((item, index) => (
          <button
            type='button'
            className='card'
            key={index}
            onClick={() => push(`/${type}/${item[idKey]}`)}
          >
            <img
              className='card-image'
              src={item[imgKey]}
              alt={item[nameKey]}
            />
            <span>{item[nameKey]}</span>
          </button>
        ))}
    </section>
  );
}

export default RecipesList;
