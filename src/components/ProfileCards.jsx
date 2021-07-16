import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MainContext } from '../context';
import { setConstants } from '../helpers';
import FavoriteButton from './FavoriteButton';
import ShareButton from './ShareButton';
import '../styles/ProfileCards.css';

function ProfileCards({ filter }) {
  const { done, inProgress, favorites } = useContext(MainContext);
  const { location: { pathname } } = useHistory();

  let recipes = [];
  if (pathname.includes('done')) recipes = [...done];
  else if (pathname.includes('in-progress')) recipes = [...inProgress];
  else recipes = [...favorites];

  const filteredRecipes = filter
    ? recipes.filter((item) => item.type === filter)
    : [...recipes];

  return (
    <section className='profile-card-list'>
      {filteredRecipes.map((item, index) => {
        const isDrinks = item.type === 'drinks';
        const { idKey } = setConstants(isDrinks);

        return (
          <div className='profile-card' key={index}>
            <div>
              <Link to={`/${item.type}/${item.id}`}>
                <img
                  className='profile-card-image'
                  src={item.image}
                  alt={item.name}
                />
              </Link>
            </div>
            <div>
              <Link to={`/${item.type}/${item.id}`}>
                <h3>{item.name}</h3>
              </Link>
              <h4>
                {item.area && `${item.area} - `}
                {item.category}
                {item.alcoholicOrNot && ` - ${item.alcoholicOrNot}`}
              </h4>
              {pathname.includes('done') && <span>{ item.date }</span>}
              <div className='card-buttons-container'>
                {pathname.includes('favorite') && (
                  <FavoriteButton details={{ [idKey]: item.id }} />
                )}
                <ShareButton url={`http://localhost:3000/${item.type}/${item.id}`}
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

ProfileCards.propTypes = {
  filter: PropTypes.string,
}.isRequired;

export default ProfileCards;
