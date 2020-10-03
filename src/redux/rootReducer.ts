import { combineReducers } from '@reduxjs/toolkit';
import auth from 'redux/auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  auth,
});

const persistConfig = {
  key: 'root',
  storage,
};

export type RootState = ReturnType<typeof rootReducer>;

export const persistedReducer = persistReducer(persistConfig, rootReducer);
