import { createTheme } from '@mui/material/styles';

// Theme options
export const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#7F5241',
    },
    secondary: {
      main: '#DEB389 ',
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
const PercsSecondaryTheme = createTheme(themeOptions);

export default PercsSecondaryTheme;
