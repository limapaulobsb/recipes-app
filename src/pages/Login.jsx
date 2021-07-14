import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { MainContext } from '../context';
import '../styles/Login.css';

function Login() {
  const { setUserEmail } = useContext(MainContext);
  const [input, setInput] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(true);
  const { push } = useHistory();

  function handleChange({ target: { name, value } }) {
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleClick() {
    setUserEmail(input.email);
    push('/meals');
  }

  useEffect(() => {
    const REGEX = /\S+@\S+\.\S+/;
    const MIN_PASSWORD_LENGTH = 7;
    const { email, password } = input;

    if (REGEX.test(email) && password.length >= MIN_PASSWORD_LENGTH) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [input]);

  return (
    <main className='login-page'>
      <h1>Recipes App</h1>
      <section className='login-container'>
        <label htmlFor='email-input'>Email</label>
        <input
          type='email'
          id='email-input'
          className='text-input'
          name='email'
          onChange={handleChange}
        />
        <label htmlFor='password-input'>Password</label>
        <input
          type='password'
          id='password-input'
          className='text-input'
          name='password'
          onChange={handleChange}
        />
        <div>
          <input
            type='button'
            className='alt-button'
            value='Login'
            onClick={handleClick}
            disabled={isDisabled}
          /> 
        </div>
      </section>
    </main>
  );
}

export default Login;
