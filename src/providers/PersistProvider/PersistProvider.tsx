import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { PersistProviderProps } from './PersistProvider.types';
import { persistor } from 'redux/store';

export const PersistProvider = ({ children }: PersistProviderProps) => (
  <PersistGate persistor={persistor}>{children}</PersistGate>
);
