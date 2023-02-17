import React, { useEffect, useState } from 'react';
import LoginForm from '../LoginForm';
import RegisterForm from './components/RegisterForm';

const Register = () => {
  useEffect(() => {
    document.title = 'Log in';
  }, []);

  const [login, setLogin] = useState(true);

  return (
    <>
      {login ? (
        <LoginForm setLogin={setLogin} />
      ) : (
        <RegisterForm setLogin={setLogin} />
      )}
    </>
  );
};

export default Register;
