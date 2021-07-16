import React, { useContext } from 'react';

import { MainContext, RecipesContext } from '../context';
import { shuffle } from '../helpers';
import { fetchByArea, fetchByName } from '../services';
import Header from '../components/Header';
import RecipesCards from '../components/RecipesCards';
import Footer from '../components/Footer';

function ExploreByRegion() {
  const { setIsLoading } = useContext(MainContext);
  const { areasList, recipes, setRecipes } = useContext(RecipesContext);

  const handleChange = async ({ target: { value } }) => {
    setIsLoading(true);
    const result = value !== 'All'
      ? await fetchByArea(value)
      : await fetchByName('meals');
    setRecipes({ ...recipes, meals: shuffle(result) });
    setIsLoading(false);
  };

  const renderSelect = () => (
    <select className='control-select' onChange={handleChange}>
      <option>All</option>
      {areasList.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </select>
  );

  return (
    <main>
      <Header title='Explore by Region' showSearchIcon={false} />
      <div className='control-buttons-container'>
        {renderSelect()}
      </div>
      <RecipesCards />
      <Footer />
    </main>
  );
}

export default ExploreByRegion;
