import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  isAuth: boolean;
}

const initialState: IInitialState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authReducer(state: IInitialState, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export default authSlice.reducer;
