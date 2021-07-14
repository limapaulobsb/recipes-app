import React from 'react';
import { useHistory } from 'react-router-dom';

import { setConstants } from '../helpers';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Main() {
  const { location: { pathname } } = useHistory();

  const isDrinks = pathname.includes('drinks');
  const { title } = setConstants(isDrinks);

  return (
    <main>
      <Header title={ title } />
      <Footer />
    </main>
  );
}

export default Main;
