import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { RecipesContext } from '../context';
import { setConstants } from '../helpers';

function SearchBar({ showSearchBar }) {
  const { getByFilter } = useContext(RecipesContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('ingredient');
  const { location: { pathname }, push } = useHistory();

  const isDrinks = pathname.includes('drinks');
  const { idKey, type } = setConstants(isDrinks);

  async function handleClick() {
    const recipes = await getByFilter(filter, searchTerm, type);
    if (recipes.length === 1) push(`/${type}/${recipes[0][idKey]}`);
  }

  return (
    <section className={showSearchBar ? 'search-bar open' : 'search-bar'}>
      <div>
        <input
          type='text'
          id='search-input'
          className='text-input'
          name='search-input'
          onChange={({ target: { value } }) => setSearchTerm(value)}
        />
      </div>
      <div className='search-radio-container'>
        <input
          type='radio'
          id='first-letter-search-radio'
          className='search-radio'
          name='search-radio'
          onChange={() => setFilter('letter')}
        />
        <label htmlFor='first-letter-search-radio'>First letter</label>
        <input
          type='radio'
          id='ingredient-search-radio'
          className='search-radio'
          name='search-radio'
          onChange={() => setFilter('ingredient')}
          defaultChecked
        />
        <label htmlFor='ingredient-search-radio'>Ingredient</label>
        <input
          type='radio'
          id='name-search-radio'
          className='search-radio'
          name='search-radio'
          onChange={() => setFilter('name')}
        />
        <label htmlFor='name-search-radio'>Name</label>
      </div>
      <div>
        <input
          type='button'
          className='alt-button'
          value='Search'
          onClick={handleClick}
        />
      </div>
    </section>
  );
}

SearchBar.propTypes = {
  showSearchBar: PropTypes.bool,
}.isRequired;

export default SearchBar;
