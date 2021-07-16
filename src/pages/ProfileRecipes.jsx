import React, { useState } from 'react';

import Header from '../components/Header';
import ProfileCards from '../components/ProfileCards';

function Done() {
  const [filter, setFilter] = useState('');
  const altClass = 'category-button-alt';
  const mainClass = 'category-button';

  return (
    <main>
      <Header title="Profile Recipes" showSearchIcon={ false } />
      <section className="category-buttons-container">
        <button
          type="button"
          className={ !filter ? altClass : mainClass }
          onClick={ () => setFilter('') }
        >
          All
        </button>
        <button
          type="button"
          className={ filter === 'meals' ? altClass : mainClass }
          onClick={ () => setFilter('meals') }
        >
          Meals
        </button>
        <button
          type="button"
          className={ filter === 'drinks' ? altClass : mainClass }
          onClick={ () => setFilter('drinks') }
        >
          Drinks
        </button>
      </section>
      <ProfileCards filter={ filter } />
    </main>
  );
}

export default Done;
