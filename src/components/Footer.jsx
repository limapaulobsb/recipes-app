import React from 'react';
import { useHistory } from 'react-router-dom';

import mealsIcon from '../svg/mealsIcon.svg';
import exploreIcon from '../svg/exploreIcon.svg';
import drinksIcon from '../svg/drinksIcon.svg';
import '../styles/Footer.css';

function Footer() {
  const { push } = useHistory();

  return (
    <footer>
      <button
        type="button"
        className="svg-button"
        onClick={ () => push('/meals') }
      >
        <img className="svg-med" src={ mealsIcon } alt="Meals Icon" />
      </button>
      <button
        type="button"
        className="svg-button"
        onClick={ () => push('/explore') }
      >
        <img className="svg-large" src={ exploreIcon } alt="Explore Icon" />
      </button>
      <button
        type="button"
        className="svg-button"
        onClick={ () => push('/drinks') }
      >
        <img className="svg-med" src={ drinksIcon } alt="Drinks Icon" />
      </button>
    </footer>
  );
}

export default Footer;
