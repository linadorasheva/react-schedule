import { IUser } from './user';

export interface IAuthInitialState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
}
