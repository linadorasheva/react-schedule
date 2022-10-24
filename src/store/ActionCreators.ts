import axios from 'axios';
import { IUser } from '../types/user';
import { AppDispatch } from './index';
import { authSlice } from './reducers/AuthSlice';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const authActionCreators = {
  loginUser:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(authSlice.actions.setIsLoading(true));

        delay(2000).then(async () => {
          const res = await axios.get<IUser[]>('./mockUsers.json');

          const mockUser = res.data.find(
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
