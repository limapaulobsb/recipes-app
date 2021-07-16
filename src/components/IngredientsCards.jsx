import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { RecipesContext } from '../context';
import { setConstants } from '../helpers';

function IngredientsCards() {
  const { ingredientsList, getByFilter } = useContext(RecipesContext);
  const { location: { pathname }, push } = useHistory();

  const isDrinks = pathname.includes('drinks');
  const { type } = setConstants(isDrinks);

  async function handleClick(name) {
    await getByFilter('ingredient', name, type);
    push(`/${type}`);
  }

  return (
    <section className='card-list'>
      {ingredientsList[type]
        .filter((_item, index) => index < 12)
        .map((item, index) => {
          const imgUrl = isDrinks
            ? `https://www.thecocktaildb.com/images/ingredients/${item}-Small.png`
            : `https://www.themealdb.com/images/ingredients/${item}-Small.png`;
          return (
            <button
              type='button'
              className='card'
              key={index}
              onClick={() => handleClick(item)}
            >
              <img className='ingredient-image' src={imgUrl} alt={item} />
              <span>{item}</span>
            </button>
          );
        })}
    </section>
  );
}

export default IngredientsCards;
