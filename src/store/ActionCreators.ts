import { nanoid } from '@reduxjs/toolkit';
import UserService from '../api/UserService';
import { IEvent, IGuest } from '../types/event';
import { IUser } from '../types/user';
import { delay } from '../utils/common';
import { AppDispatch } from './index';
import { authSlice } from './reducers/AuthSlice';
import { eventSlice } from './reducers/EventSlice';

export const authActionCreators = {
  loginUser:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(authSlice.actions.setIsLoading(true));

        delay(2000).then(async () => {
          const response = await UserService.getUsers();

          const mockUser = response.data.find(
            (user) => user.username === username && user.password === password
          );

          if (mockUser?.username) {
            localStorage.setItem('auth', 'true');
            localStorage.setItem('username', mockUser.username);
            dispatch(authSlice.actions.authUser(true));
            dispatch(authSlice.actions.setUser(mockUser));
          } else {
            dispatch(
              authSlice.actions.setError(
                'Некорректное имя пользователя или пароль'
              )
            );
          }

          dispatch(authSlice.actions.setIsLoading(false));
        });
      } catch (error) {
        dispatch(authSlice.actions.setError(`Произошла ошибка`));
      }
    },

  logoutUser: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(authSlice.actions.authUser(false));
    dispatch(authSlice.actions.setUser({} as IUser));
  },
};

export const eventActionCreators = {
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      delay(2000).then(async () => {
        const response = await UserService.getUsers();
        const extendedGuests: IGuest[] = response.data.map((item) => ({
          ...item,
          id: nanoid(),
        }));

        dispatch(eventSlice.actions.setGuests(extendedGuests));
      });
    } catch (error) {
      console.error(error);
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const data: IEvent[] = JSON.parse(events) as IEvent[];
      data.push(event);
      dispatch(eventSlice.actions.setEvents(data));
      localStorage.setItem('events', JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  },
};
