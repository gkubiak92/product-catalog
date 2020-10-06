import { combineReducers } from '@reduxjs/toolkit';
import auth from 'redux/auth/auth.slice';
import products from 'redux/products/products.slice';
import ui from 'redux/ui/ui.slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  auth,
  products,
  ui,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['products'],
};

export type RootState = ReturnType<typeof rootReducer>;

export const persistedReducer = persistReducer(persistConfig, rootReducer);
