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
import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
// mock
import USERLIST from '../_mock/user';
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
// ----------------------------------------------------------------------

export default function UserPage() {
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
                  <AppWidgetSummary movie={movie} setIsFavorite={handleClick} isFavorite={''} />
                </div>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </>
  );
}
