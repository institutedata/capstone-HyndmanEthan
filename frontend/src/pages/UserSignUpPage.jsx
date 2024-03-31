import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import PercsSecondaryTheme from "../styles/PercsSecondaryTheme";
import Perculator from "../assets/img/Perculator.svg";
import Logo from "../assets/img/Logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Uses mui components to create a sign up form for new users
// Uses react-hook-form and yup for form validation
// Uses Yup for form validation schema
// Uses PercsSecondaryTheme for styling
// Uses Logo and Perculator for images
// Uses Link from react-router-dom for navigation



// Copyright from mui
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        Percs
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}


// Sign up form
export default function UserSignUp() {
  // Form validation schema
  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
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
    // Theme for the page
    <ThemeProvider theme={PercsSecondaryTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <img
          src={Logo}
          alt="PERCS Logo"
          style={{
            position: "fixed",
            top: "13%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: 92,
          }}
        />
        <Box
          sx={{
            marginTop: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4">
            Create User
          </Typography>
          {/* Form for create new user */}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  variant="standard"
                  autoFocus
                  {...register('username')}
                  helperText={errors.username?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  variant="standard"
                  helperText={errors.email?.message}
                  {...register('email')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  variant="standard"
                  helperText={errors.password?.message}
                  {...register('password')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  variant="standard"
                  helperText={errors.confirmPassword?.message}
                  {...register('confirmPassword')}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
        <img
          src={Perculator}
          alt=""
          style={{
            position: "fixed",
            bottom: -210,
            right: -350,
            height: "100vh",
            opacity: 0.8,
            zIndex: -1,
          }}
        />
      </Container>
    </ThemeProvider>
  );
}
