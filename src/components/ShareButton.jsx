import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';

import { MainContext } from '../context';
import shareIcon from '../svg/shareIcon.svg';

function ShareButton({ url }) {
  const { setWarningMessage } = useContext(MainContext);

  return (
    <button
      type='button'
      className='svg-button-alt'
      onClick={() => {
        copy(url);
        setWarningMessage('Link copiado!');
      }}
    >
      <img className='svg-small' src={shareIcon} alt='Share' />
    </button>
  );
}

ShareButton.propTypes = {
  url: PropTypes.string,
}.isRequired;

export default ShareButton;
