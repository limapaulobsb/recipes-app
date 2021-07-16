import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { RecipesContext } from '../context';
import { setConstants } from '../helpers';
import '../styles/RecipesCarousel.css';

function RecipesCarousel() {
  const { recipes } = useContext(RecipesContext);
  const { location: { pathname }, push } = useHistory();

  const isDrinks = pathname.includes('meals');
  const { idKey, imgKey, nameKey, type } = setConstants(isDrinks);

  return (
    <section className='carousel'>
      {recipes[type]
        .filter((_item, index) => index < 6)
        .map((item, index) => (
          <button
            type='button'
            className='card carousel-card'
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

export default RecipesCarousel;
