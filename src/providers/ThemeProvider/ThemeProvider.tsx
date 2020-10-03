import React from 'react';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
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
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
