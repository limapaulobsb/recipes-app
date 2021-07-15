import React from 'react';

import RecipeDetails from '../components/RecipeDetails';
// import RecipesCarousel from '../components/RecipesCarousel';

function Details() {
  const renderRecipeButton = () => (
    <button type='button' className='details-button'>
      Start Recipe
    </button>
  );

  return (
    <main>
      <RecipeDetails />
      {/* <RecipesCarousel /> */}
      {renderRecipeButton()}
    </main>
  );
}

export default Details;
