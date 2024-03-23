import { useState } from "react";
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

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(String(email).toLowerCase());
}

export default function UserSignUp() {
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    }
    if (!email || !validateEmail(email)) {
      newErrors.email = "Valid email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully");
      // TODO: Handle form submission, e.g., send data to backend
      // Clear errors
      setErrors({});
    } else {
      console.error("Form submission failed");
      setErrors(newErrors);
    }
  };

  return (
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
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="username"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  variant="standard"
                  autoFocus
                  error={!!errors.username}
                  helperText={errors.username}
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
                  autoComplete="email"
                  error={!!errors.email}
                  helperText={errors.email}
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
                  autoComplete="new-password"
                  error={!!errors.password}
                  helperText={errors.password}
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
