import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppProvidersProps } from './AppProviders.types';
import { PersistProvider } from './PersistProvider/PersistProvider';
import { ReduxProvider } from './ReduxProvider/ReduxProvider';
import { AppThemeProvider } from './ThemeProvider/ThemeProvider';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ReduxProvider>
    <PersistProvider>
      <AppThemeProvider>
        <Router>{children}</Router>
      </AppThemeProvider>
    </PersistProvider>
  </ReduxProvider>
);
