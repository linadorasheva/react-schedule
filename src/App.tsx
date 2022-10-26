import React, { FC, useEffect } from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';

import LayoutPage from './pages/Layout';
import LoginPage from './pages/LoginPage/LoginPage';
import EventsPage from './pages/EventsPage/EventsPage';
import './styles/App.scss';
import { authSlice } from './store/reducers/AuthSlice';
import { IUser } from './types/user';
import { useTypedDispatch } from './hooks/redux';

const App: FC = () => {
  const { setUser, authUser } = authSlice.actions;
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(
        setUser({ username: localStorage.getItem('username') || '' } as IUser)
      );
      dispatch(authUser(true));
    } else {
      navigate('/login', { replace: true });
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="events" element={<EventsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
