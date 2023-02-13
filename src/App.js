// routes
import { Navigate, useRoutes } from 'react-router-dom';
import { Link, Stack, IconButton, Typography, InputAdornment, TextField, Checkbox } from '@mui/material';

import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';

import React, { useState, useEffect } from 'react';

import Router from './routes';
// theme

import ThemeProvider from './theme';
// components

import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';
import LoginPage from './pages/LoginPage';
import Iconify from './components/iconify';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));
export default function App() {
  const test = true;
  const [users, setUsers] = useState({
    email: null,
  });
  const [showPassword, setShowPassword] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    console.log(`Username: ${username} Password: ${password}`);
    setIsLoggedIn(true);
    localStorage.setItem('user', JSON.stringify(username));
  };

  return (
    <ThemeProvider>
      {isLoggedIn ? (
        <>
          <AuthenticatedApp />
        </>
      ) : (
        <>
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Sign in to FavMovies
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }}>
              Don’t have an account?
              <Link variant="subtitle2">Get started</Link>
            </Typography>
            <Stack spacing={3}>
              <TextField
                name="email"
                label="Email address"
                onChange={(e) =>
                  setUsername({
                    email: e.target.value,
                  })
                }
              />

              <TextField
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
              <Checkbox name="remember" label="Remember me" />
              <Link variant="subtitle2" underline="hover">
                Forgot password?
              </Link>
            </Stack>

            <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleSubmit}>
              Login
            </LoadingButton>
          </StyledContent>
        </>
      )}
    </ThemeProvider>
  );
}

const AuthenticatedApp = () => {
  return (
    <>
      <ScrollToTop />
      <StyledChart />
      <Router />
    </>
  );
};
const UnauthenticatedApp = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};
