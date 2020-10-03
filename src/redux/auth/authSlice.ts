import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './authSlice.types';

const initialState: AuthState = {
  isAuth: false,
  accessToken: '',
  authError: '',
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStart(state, action: PayloadAction<{ username: string; password: string }>) {
      state.loading = true;
    },
    authSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.isAuth = true;
      state.accessToken = action.payload;
    },
    authFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.authError = action.payload;
      state.isAuth = false;
    },
  },
});

export const { authStart, authSuccess, authFailure } = authSlice.actions;

export default authSlice.reducer;
