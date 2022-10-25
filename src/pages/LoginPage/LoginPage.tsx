import React, { FC } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage: FC = () => {
  return (
    <div className="login-page page">
      <h1 className="page__title">Login page</h1>
      <div className="login-page__content">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
