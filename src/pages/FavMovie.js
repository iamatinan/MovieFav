import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
// @mui

import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
  Grid,
} from '@mui/material';

// components
import Iconify from '../components/iconify';

import MovieCard from './MovieCard';
// ----------------------------------------------------------------------

export default function FavMovie() {
  const handleClick = (event, name) => {
    console.log('object');
  };

  const result = localStorage.getItem('favorites');
  const ListFavorite = JSON.parse(result);
  // console.log('itest', ListFavorite);
  console.log('resul', ListFavorite);

  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Favorite
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button>
        </Stack>

        <Grid container spacing={3}>
          {ListFavorite.map((movie, index) => (
            <>
              <Grid key={index} item xs={12} sm={6} md={3}>
                <div key={index}>
                  <MovieCard movie={movie} setIsFavorite={handleClick} isFavorite={''} />
                </div>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </>
  );
}
