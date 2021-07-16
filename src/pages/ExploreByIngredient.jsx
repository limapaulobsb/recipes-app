import React from 'react';

import Header from '../components/Header';
import IngredientsCards from '../components/IngredientsCards';
import Footer from '../components/Footer';

function ExploreByIngredients() {
  return (
    <main>
      <Header title="Explore by Ingredients" showSearchIcon={ false } />
      <IngredientsCards />
      <Footer />
    </main>
  );
}

export default ExploreByIngredients;
