import React from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
import LoginForm from './login/LoginForm';

// sections

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 'auto',
  margin: 'auto',
  minHeight: 'auto',
  //   display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  //   padding: theme.spacing(12, 0),
}));

function MovieDescription({ movie }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  return (
    <>
      <Container maxWidth="sm">
        <StyledContent>
          <Typography variant="h4" gutterBottom>
            เรื่อง: {movie.title_th}
          </Typography>

          <Typography variant="body2" sx={{ mb: 5 }}>
            ประเภท: {movie.genre}
          </Typography>
          <Typography variant="body2" sx={{ mb: 5 }}>
            ผู้กำกับ: {movie.director}
          </Typography>
          <Typography variant="body2" sx={{ mb: 5 }}>
            เรื่องย่อ: {movie.synopsis_th}
          </Typography>

          <img src={movie.poster_url} alt="poster" />

          <Stack direction="row" spacing={2}>
            <Button fullWidth size="large" color="inherit" variant="outlined">
              <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
            </Button>

            <Button fullWidth size="large" color="inherit" variant="outlined">
              <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
            </Button>

            <Button fullWidth size="large" color="inherit" variant="outlined">
              <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
            </Button>
          </Stack>
        </StyledContent>
      </Container>
    </>
  );
}

export default MovieDescription;
