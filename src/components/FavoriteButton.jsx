import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { MainContext } from '../context';
import { setConstants } from '../helpers';
import favoriteIcon from '../svg/favoriteIcon.svg';
import favoriteIconFilled from '../svg/favoriteIconFilled.svg';

function FavoriteButton({ details }) {
  const { favorites, setFavorites } = useContext(MainContext);
  const isDrinks = Object.keys(details).includes('idDrink');
  const { idKey, imgKey, nameKey, type } = setConstants(isDrinks);

  const isFavorite = favorites.some((item) => item.id === details[idKey]);

  const toggleFavorite = () => {
    const newFavorites = isFavorite
      ? favorites.filter((item) => item.id !== details[idKey])
      : () => { 
        const formattedDetails = {
          category: details.strCategory,
          id: details[idKey],
          image: details[imgKey],
          name: details[nameKey],
          type,
        };
        return favorites.concat(formattedDetails);
      };
    setFavorites(newFavorites);
  };

  return (
    <button
      type="button"
      className="svg-button-alt"
      onClick={ toggleFavorite }
    >
      <img
        className="svg-small"
        src={ isFavorite ? favoriteIconFilled : favoriteIcon }
        alt="Add to Favorites"
      />
    </button>
  );
}

FavoriteButton.propTypes = {
  details: PropTypes.shape(),
}.isRequired;

export default FavoriteButton;
