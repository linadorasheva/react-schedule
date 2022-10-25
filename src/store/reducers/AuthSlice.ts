import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthInitialState } from '../../types/auth';
import { IUser } from '../../types/user';

const initialState: IAuthInitialState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUser(state: IAuthInitialState, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
      state.isLoading = false;
    },
    setUser(state: IAuthInitialState, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    setError(state: IAuthInitialState, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    setIsLoading(state: IAuthInitialState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export default authSlice.reducer;
