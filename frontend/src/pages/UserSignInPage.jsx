import { useState } from 'react';
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
import { useNavigate } from "react-router-dom";




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

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(String(email).toLowerCase());
}

// Functional component for User Sign-In page
export default function UserSignIn() {
  const [errors, setErrors] = useState({}); // State for handling form errors
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // TODO: remove this and add protected routes
  const navigate = useNavigate();
  
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    const newErrors = {};

    // Validating email
    if (!email || !validateEmail(email)) {
      newErrors.email = 'Valid email is required';
    }
    // Checking if password is provided
    if (!password) {
      newErrors.password = 'Password is required';
    }

    // Checking if there are any errors
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted successfully');
      // TODO: Handle form submission, e.g., send data to backend
      // TODO: add error handling for email or password
      // Clear errors
      if (email === 'percs@mail.com' && password === 'password') {
        // Successful login, you can redirect or do anything else here
        setErrors({});
        setIsLoggedIn(true);
        navigate("/home")
        console.log('Login successful');
        
      } else {
        setErrors({});
        setErrors('Invalid email or password');
      }
    } else {
      console.error('Form submission failed');
      setErrors(newErrors); // Update errors state
    }
  };

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
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
              error={!!errors.email} // Applying error state
              helperText={errors.email} // Error message
              autoFocus
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
              error={!!errors.password} // Applying error state
              helperText={errors.password} // Error message
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
