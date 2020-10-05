import React from 'react';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { AppThemeProviderProps } from './ThemeProvider.types';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Nunito', 'Roboto', 'sans-serif'].join(','),
    body1: {
      fontSize: 18,
      fontWeight: 600,
    },
    body2: {
      fontSize: 14,
      fontWeight: 600,
    },
    h5: {
      fontSize: 30,
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: '#4460F7',
    },
    secondary: {
      main: '#F9A52B',
    },
    text: {
      primary: '#1A1B1D',
      secondary: '#9194A5',
    },
  },
  overrides: {
    MuiButton: {
      label: {
        fontSize: 14,
        fontWeight: 600,
        textTransform: 'none',
      },
    },
    MuiCard: {
      root: {
        borderRadius: 8,
      },
    },
    MuiInputBase: {
      root: {
        fontSize: 14,
        fontWeight: 600,
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '16px 14px',
      },
      root: {
        borderColor: '#E0E2EA',
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
    MuiFormControlLabel: {
      label: {
        fontSize: 14,
        fontWeight: 600,
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
