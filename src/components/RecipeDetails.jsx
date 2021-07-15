import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { DetailsContext } from '../context';
import { setConstants } from '../helpers';
import HomeButton from './HomeButton';
import FavoriteButton from './FavoriteButton';
import ShareButton from './ShareButton';
import '../styles/RecipeDetails.css';

function RecipeDetails() {
  const { details, ingredients, measures, getDetails } =
    useContext(DetailsContext);
  const {
    location: { pathname },
  } = useHistory();
  const { id } = useParams();

  const isDrinks = pathname.includes('drinks');
  const { idKey, imgKey, nameKey, type } = setConstants(isDrinks);

  const renderIngredients = () => (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index}>
          {ingredient}
          {measures[index] && ` - ${measures[index]}`}
        </li>
      ))}
    </ul>
  );

  const renderYoutubeVideo = () => (
    <iframe
      className='youtube-video'
      src={(details.strYoutube || '').replace('watch?v=', 'embed/')}
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
  );

  useEffect(() => {
    if (details[idKey] !== id) getDetails(id, type);
  }, []);

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
        {renderIngredients()}
        <h3>Instructions</h3>
        <p>{details.strInstructions}</p>
      </div>
      {!isDrinks && renderYoutubeVideo()}
    </section>
  );
}

export default RecipeDetails;
