import { IUser } from './user';

export interface IInitialState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
}
