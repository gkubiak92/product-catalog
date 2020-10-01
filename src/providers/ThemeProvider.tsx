import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { AppThemeProviderProps } from './ThemeProvider.types';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4460F7',
    },
    secondary: {
      main: '#F9A52B',
    },
  },
});

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
