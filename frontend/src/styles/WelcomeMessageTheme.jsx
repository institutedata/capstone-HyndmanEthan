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
    fontFamily:
        'Bree Serif', 

  },
};

// Create Material-UI theme
const WelcomeMessageTheme = createTheme(themeOptions);

export default WelcomeMessageTheme;
