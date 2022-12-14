import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';

const LayoutPage: FC = () => {
  return (
    <div className="layout">
      <header className="layout__header">
        <Navbar />
      </header>
      <main className="layout__content">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer className="layout__footer container">footer</footer>
    </div>
  );
};

export default LayoutPage;
