import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { MainContext } from '../context';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const { userEmail } = useContext(MainContext);
  const { push } = useHistory();

  function logout() {
    localStorage.clear();
    push('/');
  }

  return (
    <main className='control-buttons-page'>
      <Header title='Profile' showSearchIcon={false} />
      <h4>{userEmail}</h4>
      <section className='control-buttons-container'>
        <input
          type='button'
          className='control-button'
          value='Recipes In Progress'
          onClick={() => { push('/recipes-in-progress'); } }
        />
        <input
          type='button'
          className='control-button'
          value='Done Recipes'
          onClick={() => { push('/done-recipes'); } }
        />
        <input
          type='button'
          className='control-button'
          value='Favorite Recipes'
          onClick={() => { push('/favorite-recipes'); } }
        />
        <input
          type='button'
          className='last control-button'
          value='Log out'
          onClick={logout}
        />
      </section>
      <Footer />
    </main>
  );
}

export default Profile;
