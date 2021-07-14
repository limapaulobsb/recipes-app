import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { RecipesContext } from '../context';
import { setConstants, shuffle } from '../helpers';
import { fetchByCategory, fetchByName } from '../services';

function CategoryButtons() {
  const {
    categories,
    recipes,
    setRecipes,
  } = useContext(RecipesContext);

  const [filter, setFilter] = useState('');
  const { location: { pathname } } = useHistory();

  const isDrinks = pathname.includes('drinks');
  const { type } = setConstants(isDrinks);

  async function getByCategory(category) {
    const result = category && category !== filter
      ? await fetchByCategory(type, category)
      : await fetchByName(type);
    setFilter(category !== filter ? category : '');
    setRecipes({ ...recipes, [type]: shuffle(result) });
  }

  function renderButtons(categories) {
    return categories.map((item, index) => (
      <input
        type="button"
        className={ filter === item ? 'category-button-alt' : 'category-button' }
        value={item}
        key={ index }
        onClick={ () => getByCategory(item) }
      />        
    ));
  }

  return (
    <section className="category-buttons-container">
      <input
        type="button"
        className={ !filter ? 'category-button-alt' : 'category-button' }
        value='ALL'
        onClick={ () => getByCategory('') }
      />
      {isDrinks ? renderButtons(categories.drinks) : renderButtons(categories.meals)}
    </section>
  );
}

export default CategoryButtons;
