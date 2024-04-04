import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material';
import WelcomeMessageTheme from '../../styles/WelcomeMessageTheme';
import UserContext from '../../utils/userContext';



const WelcomeMessage = ({randomQuote }) => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <ThemeProvider theme={WelcomeMessageTheme}>
    <Box>
      <Typography variant="h4" component="h2" align="center" gutterBottom style={{ marginTop: '20px' }}sx={{ fontFamily: 'Bree Serif' }} >
        Welcome {user && user.username ? user.username: 'Coffee'}!
      </Typography>
      <Typography variant="body1" align="center" >
        {randomQuote}
      </Typography>
    </Box>
        </ThemeProvider>
  );
}

export default WelcomeMessage
