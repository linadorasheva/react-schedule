import React, { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { authActionCreators } from '../../store/ActionCreators';

const Navbar: FC = () => {
  const { isAuth, user } = useTypedSelector((state) => state.authReducer);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const logout = (): void => {
    dispatch(authActionCreators.logoutUser());
    navigate('/login', { replace: true });
  };

  if (!isAuth) {
    return (
      <nav className="navigation container">
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
      </nav>
    );
  }

  return (
    <nav className="navigation container">
      <div className="navigation__username">{user.username}</div>
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
