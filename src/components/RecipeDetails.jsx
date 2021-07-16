import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { DetailsContext, MainContext } from '../context';
import { setConstants } from '../helpers';
import HomeButton from './HomeButton';
import FavoriteButton from './FavoriteButton';
import ShareButton from './ShareButton';
import '../styles/RecipeDetails.css';

function RecipeDetails({ page }) {
  const { inProgress, setInProgress } = useContext(MainContext);
  const { details, ingredients, measures } = useContext(DetailsContext);
  const { location: { pathname } } = useHistory();
  const { id } = useParams();

  const isDrinks = pathname.includes('drinks');
  const { imgKey, nameKey, type } = setConstants(isDrinks);

  const toggleIngredient = (ingredientIndex) => {
    const newInProgress = [...inProgress];
    const recipeIndex = newInProgress.findIndex((item) => item.id === id);
    const { usedIngredients } = newInProgress[recipeIndex];
    usedIngredients[ingredientIndex] = !usedIngredients[ingredientIndex];
    newInProgress[recipeIndex].usedIngredients = usedIngredients;
    setInProgress(newInProgress);
  };

  const renderIngredients = () => ingredients.map((ingredient, index) => {
    if (page === 'details') return (
      <li key={index}>
        {ingredient}
        {measures[index] && ` - ${measures[index]}`}
      </li>
    );

    const { usedIngredients } = inProgress.find((item) => item.id === id);
    const wasUsed = usedIngredients[index];
    return (
      <li key={index}>
        <input
          type='checkbox'
          id={`checkbox-${index}`}
          className='ingredient-checkbox'
          name={ingredient}
          key={index}
          onClick={() => toggleIngredient(index)}
          defaultChecked={wasUsed}
        />
        <label
          htmlFor={`checkbox-${index}`}
          className={wasUsed ? 'line-through' : undefined}
        >
          {ingredient}
          {measures[index] && ` - ${measures[index]}`}
        </label>
      </li>
    );
  });

  const renderYoutubeVideo = () => (
    <iframe
      className='youtube-video'
      src={details.strYoutube?.replace('watch?v=', 'embed/')}
      title='YouTube video player'
      frameBorder='0'
      allowFullScreen
    />
  );

  return (
    <section className='details-container'>
      <div className='details-image-container'>
        <div>
          <HomeButton />
        </div>
        <div>
          <FavoriteButton details={details} />
          <ShareButton url={`http://localhost:3000/${type}/${id}`} />
        </div>
        <img
          className='details-image'
          src={details[imgKey]}
          alt={details[nameKey]}
        />
      </div>
      <div className='details-text-container'>
        <h2>{details[nameKey]}</h2>
        <h4>
          <span>{details.strCategory}</span>
          {isDrinks && <span>{` - ${details.strAlcoholic}`}</span>}
        </h4>
        <h3>Ingredients</h3>
        <ul>{renderIngredients()}</ul>
        <h3>Instructions</h3>
        <p>{details.strInstructions}</p>
      </div>
      {!isDrinks && page === 'details' && renderYoutubeVideo()}
    </section>
  );
}

RecipeDetails.propTypes = {
  page: PropTypes.string,
}.isRequired;

export default RecipeDetails;
