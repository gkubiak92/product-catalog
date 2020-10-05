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
  overrides: {
    MuiCard: {
      root: {
        borderRadius: 8,
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 8,
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(26, 27, 29, 0.9)',
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 8,
      },
    },
  },
});

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
