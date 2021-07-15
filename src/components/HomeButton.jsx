import React from 'react';
import { useHistory } from 'react-router-dom';

import { setConstants } from '../helpers';
import homeIcon from '../svg/homeIcon.svg';

function ShareButton() {
  const { location: { pathname }, push } = useHistory();

  const isDrinks = pathname.includes('drinks');
  const { type } = setConstants(isDrinks);

  return (
    <button
      type='button'
      className='svg-button-alt'
      onClick={ () => push(`/${type}`) }
    >
      <img className='svg-small' src={homeIcon} alt='Share' />
    </button>
  );
}

export default ShareButton;
