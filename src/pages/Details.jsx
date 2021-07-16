import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { DetailsContext, MainContext } from '../context';
import { setConstants } from '../helpers';
import RecipeDetails from '../components/RecipeDetails';
import RecipesCarousel from '../components/RecipesCarousel';

function Details() {
  const { details, ingredients, getDetails } = useContext(DetailsContext);
  const { done, inProgress, setDone, setInProgress } = useContext(MainContext);
  const [page, setPage] = useState('details');
  const { location: { pathname }, push } = useHistory();
  const { id } = useParams();

  const isDrinks = pathname.includes('drinks');
  const { idKey, imgKey, nameKey, type } = setConstants(isDrinks);

  const isDone = done.some((item) => item.id === id);
  const isInProgress = inProgress.some((item) => item.id === id);

  const handleClick = () => {
    if (page === 'details') {
      if (!isInProgress) {
        const usedIngredients = ingredients.map(() => false);
        const formattedDetails = {
          category: details.strCategory,
          id: details[idKey],
          image: details[imgKey],
          name: details[nameKey],
          type,
          usedIngredients,
        };
        const recipesInProgress = inProgress.concat(formattedDetails);
        setInProgress(recipesInProgress);
      }
      setPage('in-progress');
    } else {
      const recipesInProgress = inProgress.filter((item) => item.id !== id);
      setInProgress(recipesInProgress);
      const formattedDetails = {
        category: details.strCategory,
        date: new Date().toLocaleDateString(),
        id: details[idKey],
        image: details[imgKey],
        name: details[nameKey],
        type,
      };
      const doneRecipes = done.concat(formattedDetails);
      setDone(doneRecipes);
      push('/done-recipes');
    }
  };

  const renderDetailsButton = () => {
    let buttonText = isInProgress ? 'Continue Recipe' : 'Start Recipe';
    let isDisabled;
    if (page !== 'details') {
      buttonText = 'Finish Recipe';
      const recipeIndex = inProgress.findIndex((item) => item.id === id);
      const { usedIngredients } = inProgress[recipeIndex];
      isDisabled = usedIngredients.some((item) => !item);
    }

    return (
      <input
        type='button'
        className='details-button'
        value={buttonText}
        onClick={handleClick}
        disabled={ isDisabled }
      />
    );
  };

  useEffect(() => {
    if (details[idKey] !== id) getDetails(type, id);
  }, [id]);

  if (details[idKey] !== id) return null; // Fixes screen flickering before loading
  return (
    <main className='details-page'>
      <RecipeDetails page={page} />
      { page === 'details' && <RecipesCarousel /> }
      {!isDone && renderDetailsButton()}
    </main>
  );
}

export default Details;
