import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import LayoutPage from './pages/Layout';
import Login from './pages/Login/Login';
import Event from './pages/Event/Event';
import RequireAuth from './hoc/RequireAuth';
import './styles/App.scss';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route path="/login" element={<Login />} />
        <Route
          path="/events"
          element={
            <RequireAuth>
              <Event />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
