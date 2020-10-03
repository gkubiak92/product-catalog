import React from 'react';
import { Provider } from 'react-redux';
import { ReduxProviderProps } from './ReduxProvider.types';
import store from 'redux/store';

export const ReduxProvider = ({ children }: ReduxProviderProps) => (
  <Provider store={store}>{children}</Provider>
);
