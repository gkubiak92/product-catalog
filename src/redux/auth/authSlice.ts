import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './authSlice.types';

const initialState: AuthState = {
  isAuth: false,
  accessToken: '',
  authError: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStart() {},
    authSuccess(state, action: PayloadAction<string>) {
      state.isAuth = true;
      state.accessToken = action.payload;
    },
    authFailure(state, action: PayloadAction<string>) {
      state.authError = action.payload;
      state.isAuth = false;
    },
  },
});

export const { authStart, authSuccess, authFailure } = authSlice.actions;

export default authSlice.reducer;
