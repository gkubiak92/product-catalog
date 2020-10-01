import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppProvidersProps } from './AppProviders.types';
import { AppThemeProvider } from './ThemeProvider';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <Router>
    <AppThemeProvider>{children}</AppThemeProvider>
  </Router>
);
