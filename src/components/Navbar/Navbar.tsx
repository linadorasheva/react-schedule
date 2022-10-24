import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { authSlice } from '../../store/redusers/AuthSlice';

const Navbar = () => {
  const { isAuth } = useTypedSelector((state) => state.authReducer);
  const { authReducer } = authSlice.actions;
  const dispatch = useTypedDispatch();

  const logout = (): void => {
    dispatch(authReducer(false));
  };

  if (!isAuth) {
    return (
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? 'navigation__link navigation__link--active'
                : 'navigation__link'
            }
            end
          >
            Login
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <nav className="navigation container">
      <ul className="navigation__list">
        <li className="navigation__item">
          <button
            onClick={() => logout()}
            className="navigation__link navigation__link--logout"
          >
            Logout
          </button>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive
                ? 'navigation__link navigation__link--active'
                : 'navigation__link'
            }
          >
            Events
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
