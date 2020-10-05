import { combineReducers } from '@reduxjs/toolkit';
import auth from 'redux/auth/auth.slice';
import products from 'redux/products/products.slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  auth,
  products,
});

const persistConfig = {
  key: 'root',
  storage,
};

export type RootState = ReturnType<typeof rootReducer>;

export const persistedReducer = persistReducer(persistConfig, rootReducer);
