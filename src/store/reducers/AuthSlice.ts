import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState } from '../../types/auth';
import { IUser } from '../../types/user';

const initialState: IInitialState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUser(state: IInitialState, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
      state.isLoading = false;
    },
    setUser(state: IInitialState, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    setError(state: IInitialState, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    setIsLoading(state: IInitialState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export default authSlice.reducer;
