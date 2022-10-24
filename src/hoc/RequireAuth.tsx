import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import { useTypedSelector } from '../hooks/redux';

interface IRequireAuthProps {
  children: JSX.Element;
}

const RequireAuth = ({ children }: IRequireAuthProps) => {
  const location = useLocation();
  const { isAuth } = useTypedSelector((state) => state.authReducer);

  // if (!isAuth) {
  //   return <Navigate to="/login" state={{ from: location }} />;
  // }

  return children;
};

export default RequireAuth;
