"use client"

import { createContext, useState, useEffect, useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// Define theme types
type ThemeMode = 'light' | 'dark' | 'night';

// Create a theme context
interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  setMode: () => {},
});

// Create theme configurations
const getTheme = (mode: ThemeMode) => {
  if (mode === 'light') {
    return createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#0080ff',
        },
        secondary: {
          main: '#19857b',
        },
        background: {
          default: '#f5f5f5',
          paper: '#ffffff',
        },
      },
      typography: {
        fontFamily: 'Be Vietnam Pro, sans-serif',
        h1: { fontWeight: 700 },
        h2: { fontWeight: 600 },
        h3: { fontWeight: 600 },
        button: { textTransform: 'none' },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          },
        },
      },
    });
  } else if (mode === 'dark') {
    return createTheme({
      palette: {
        mode: 'dark',
        primary: {
          main: '#90caf9',
        },
        secondary: {
          main: '#4db6ac',
        },
        background: {
          default: '#303030',
          paper: '#424242',
        },
      },
      typography: {
        fontFamily: 'Be Vietnam Pro, sans-serif',
        h1: { fontWeight: 700 },
        h2: { fontWeight: 600 },
        h3: { fontWeight: 600 },
        button: { textTransform: 'none' },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          },
        },
      },
    });
  } else {
    // Night mode (dark blue theme)
    return createTheme({
      palette: {
        mode: 'dark',
        primary: {
          main: '#81d4fa',
        },
        secondary: {
          main: '#b39ddb',
        },
        background: {
          default: '#0a1929',
          paper: '#132f4c',
        },
      },
      typography: {
        fontFamily: 'Be Vietnam Pro, sans-serif',
        h1: { fontWeight: 700 },
        h2: { fontWeight: 600 },
        h3: { fontWeight: 600 },
        button: { textTransform: 'none' },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          },
        },
      },
    });
  }
};

export function Providers({ children }: { children: React.ReactNode }) {
  // Initialize theme from localStorage or default to light
  const [mode, setMode] = useState<ThemeMode>('light');
  
  useEffect(() => {
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    if (savedTheme && ['light', 'dark', 'night'].includes(savedTheme)) {
      setMode(savedTheme as ThemeMode);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // If no saved preference, use system preference
      setMode('dark');
    }
  }, []);

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  // Memoize the theme to prevent unnecessary re-renders
  const theme = useMemo(() => getTheme(mode), [mode]);
  
  // Memoize the context value
  const themeContextValue = useMemo(() => ({
    mode,
    setMode,
  }), [mode]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
