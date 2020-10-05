import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStartPayload, AuthState } from './auth.types';

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
    authStart(state, action: PayloadAction<AuthStartPayload>) {
      state.loading = true;
    },
    authSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.isAuth = true;
      state.accessToken = action.payload;
      state.authError = '';
    },
    authFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.authError = action.payload;
      state.isAuth = false;
    },
    authLogout(state) {
      state.isAuth = false;
      state.accessToken = '';
      state.authError = '';
      state.loading = false;
    },
  },
});

export const { authStart, authSuccess, authFailure, authLogout } = authSlice.actions;

export default authSlice.reducer;
