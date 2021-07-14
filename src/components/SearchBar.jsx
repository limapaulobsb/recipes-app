import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ showSearchBar }) {
  return (
    <section className={showSearchBar ? 'search-bar open' : 'search-bar'}>
      <div>
        <input
          type='text'
          id='search-input'
          className='text-input'
          name='search-input'
        />
      </div>
      <div className='search-radio-container'>
        <input
          type='radio'
          id='ingredient-search-radio'
          className='search-radio'
          name='search-radio'
          defaultChecked
        />
        <label htmlFor='ingredient-search-radio'>Ingredient</label>
        <input
          type='radio'
          id='name-search-radio'
          className='search-radio'
          name='search-radio'
        />
        <label htmlFor='name-search-radio'>Name</label>
        <input
          type='radio'
          id='first-letter-search-radio'
          className='search-radio'
          name='search-radio'
        />
        <label htmlFor='first-letter-search-radio'>First letter</label>
      </div>
      <div>
        <input type='button' className='alt-button' value='Search' />
      </div>
    </section>
  );
}

SearchBar.propTypes = {
  showSearchBar: PropTypes.bool,
}.isRequired;

export default SearchBar;
