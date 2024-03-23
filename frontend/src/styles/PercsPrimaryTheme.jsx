import { createTheme } from '@mui/material/styles';

// Theme options
export const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#F4D9BA',
    },
    secondary: {
      main: '#7F5241',
    },
    background: {
      default: '#fbf7f5',
    },
  },
  typography: {
    fontFamily: [
      'Lato', // Default font
      'Bree Serif', // Bree Serif font
      'sans-serif', // Standard font stack as fallback
    ].join(','),
  },
};

// Create Material-UI theme
const PercsPrimaryTheme = createTheme(themeOptions);

export default PercsPrimaryTheme;
