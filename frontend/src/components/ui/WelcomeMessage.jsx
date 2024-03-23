import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material';
import WelcomeMessageTheme from '../../styles/WelcomeMessageTheme';

const WelcomeMessage = ({ username, randomQuote }) => {
  return (
    <ThemeProvider theme={WelcomeMessageTheme}>
    <Box>
      <Typography variant="h4" component="h2" align="center" gutterBottom style={{ marginTop: '20px' }}sx={{ fontFamily: 'Bree Serif' }} >
        Welcome back {username}
      </Typography>
      <Typography variant="body1" align="center" >
        {randomQuote}
      </Typography>
    </Box>
        </ThemeProvider>
  );
}

export default WelcomeMessage
