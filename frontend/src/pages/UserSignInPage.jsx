import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import PercsSecondaryTheme from '../styles/PercsSecondaryTheme'; // Importing custom MUI theme
import Perculator from '../assets/img/Perculator.svg'; // Importing SVG image
import Logo from '../assets/img/Logo.png'; // Importing image file
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


// Component for displaying copyright information
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Percs
      </Link>{' '}
      {new Date().getFullYear()}      
    </Typography>
  );
}



// Functional component for User Sign-In page
export default function UserSignIn() {
    const schema = yup.object().shape({
      email: yup.string().email().required("Email is required"),
      password: yup.string().required("Password is required"),
    })

    // Form validation
    const {register, handleSubmit, formState: {errors} } = useForm({
      resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {  
      console.log(data);
      console.log("data submitted");
    }

  return (
    <ThemeProvider theme={PercsSecondaryTheme}> {/* Applying custom MUI theme */}
      <Container component="main" maxWidth="xs"> {/* Container for the page content */}

        <CssBaseline /> {/* Reset CSS styles */}
        <img
          src={Logo}
          alt="PERCS Logo"
          style={{
            position: 'fixed',
            top: '13%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: 92,
          }}
        />
        <Box
          sx={{
            marginTop: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h4">
            Login
          </Typography>
          {/* Form for user sign-in */}
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            {/* Input field for email */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              variant='standard'
              autoFocus
              helperText={errors.email?.message}
              {...register('email')}
            />
            {/* Input field for password */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              helperText={errors.password?.message}
              {...register('password')}
              variant='standard'
            />
            {/* Checkbox for "Remember me" */}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {/* Button for form submission */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Create User"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* Copyright information */}
        <Copyright sx={{ mt: 8, mb: 4 }} />
        <img
          src={Perculator}
          alt=""
          style={{
            position: 'fixed',
            bottom: -210,
            right: -350,
            height: '100vh',
            opacity: 0.8,
            zIndex: -1,
          }}
        />
      </Container>
    </ThemeProvider>
  );
}
