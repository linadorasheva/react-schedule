import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';

const LayoutPage = () => {
  return (
    <div className="layout">
      <header className="layout__header">
        <Navbar />
      </header>
      <main className="layout__content container">
        <Outlet />
      </main>
      <footer className="layout__footer container">footer</footer>
    </div>
  );
};

export default LayoutPage;
