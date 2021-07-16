import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { DetailsContext } from '../context';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explore() {
  const { getDetails } = useContext(DetailsContext);
  const { push } = useHistory();

  async function surpriseMe(type) {
    const result = await getDetails(type);
    push(`/${type}/${result.idDrink ?? result.idMeal}`);
  }

  const renderExploreButtons = (type) => (
    <section className='control-buttons-container'>
      <button
        type='button'
        className='control-button'
        onClick={() => push(`/explore/${type}-by-ingredient`)}
      >
        By Ingredient
      </button>
      {type === 'meals' && (
        <button
          type='button'
          className='control-button'
          onClick={() => push(`/explore/${type}-by-region`)}
        >
          By Region
        </button>
      )}
      <button
        type='button'
        className='control-button'
        onClick={() => surpriseMe(type)}
      >
        Surprise Me!
      </button>
    </section>
  );

  return (
    <main className='control-buttons-page'>
      <Header title='Explore' showSearchIcon={false} />
      <h4>Meals</h4>
      {renderExploreButtons('meals')}
      <h4>Drinks</h4>
      {renderExploreButtons('drinks')}
      <Footer />
    </main>
  );
}

export default Explore;
