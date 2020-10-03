import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppProvidersProps } from './AppProviders.types';
import { ReduxProvider } from './ReduxProvider/ReduxProvider';
import { AppThemeProvider } from './ThemeProvider/ThemeProvider';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <Router>
    <ReduxProvider>
      <AppThemeProvider>{children}</AppThemeProvider>
    </ReduxProvider>
  </Router>
);
