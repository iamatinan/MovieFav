import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import { Favorite, FavoriteBorder, Luggage } from '@mui/icons-material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// components
import Iconify from '../components/iconify';
// sections

import MovieCard from './MovieCard';
import data from './data.json';
import MovieDescription from './MovieDescription';
// ----------------------------------------------------------------------
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
  overflow: 'scroll',
  height: '90%',
  // display: 'block',

  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  // maxWidth: '100%',
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  // p: 4,
  // width: '60%',
  // overflow: 'scroll',
  // height: '90%',
  // display: 'block',
};
export default function DashboardAppPage() {
  const theme = useTheme();
  const [listCenima, setListCenima] = useState([]);
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const [favorites, setFavorites] = React.useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const api = 'https://www.majorcineplex.com/apis/get_movie_avaiable';

  const favoriteInLocal = JSON.parse(localStorage.getItem('favorites'));

  const movietest = data.movies;
  const Listmovie = movietest;

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    // เนื่องจาก ส่วนของการทดสอบ api มีการ error Access-Control-Allow-Origin จึงเอาข้อมูลจากไฟล์ json มาใช้แทน
    axios.get(proxyUrl + api).then((res) => {
      console.log('res.data', res.data.movies);
      setListCenima(res.data.movies);
    });
  }, [favorites]);

  const handleClick = (movie) => {
    console.log('movie', movie);
    if (favorites.includes(movie)) {
      setFavorites(favorites.filter((id) => id.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };
  const [movieDescription, setMovieDescription] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    // setMovieDescription();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  console.log('movieDescription', movieDescription);
  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome
        </Typography>
        <Modal
          open={open}
          onClose={handleClose}
          // aria-labelledby="modal-modal-title"
          // aria-describedby="modal-modal-description"
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <MovieDescription movie={movieDescription} />
          </Box>
        </Modal>
        {/* <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <MovieDescription movie={movieDescription} />
          </Box>
        </Modal> */}
        <Grid container spacing={3}>
          <>
            {/* ปกติจะเอา data จาก Liscinema มา render เนื่องจาก api มีการ error Access-Control-Allow-Origin จึง เอาข้อมูลจาก ไฟล์ json มาใช้แทน  */}
            {Listmovie.map((movie, index) => {
              const isFavorited = favorites.find((fav) => fav.id === movie.id);

              return (
                <>
                  <Grid key={index} item xs={12} sm={6} md={3}>
                    {isFavorited ? (
                      <>
                        <MovieCard movie={movie} setIsFavorite={handleClick} fave="yes" viewButton={handleOpen} />
                        <Button
                          onClick={() => {
                            setMovieDescription(movie);
                            handleOpen();
                          }}
                        >
                          ดูรายละเอียด
                        </Button>
                      </>
                    ) : (
                      <>
                        <MovieCard movie={movie} setIsFavorite={handleClick} fave="no" viewButton={handleOpen} />
                        <Button
                          onClick={() => {
                            setMovieDescription(movie);
                            handleOpen();
                          }}
                        >
                          ดูรายละเอียด
                        </Button>
                      </>
                    )}{' '}
                  </Grid>
                </>
              );
            })}
          </>
        </Grid>
      </Container>
    </>
  );
}
