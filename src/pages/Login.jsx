import React, { useContext } from 'react';
import { MainContext } from '../context';

function Login() {
  const { userEmail } = useContext(MainContext);

  return (
    <main>
      <h1>Login</h1>
      <p>{userEmail}</p>
    </main>
  );
}

export default Login;
