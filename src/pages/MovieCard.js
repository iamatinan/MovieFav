// @mui
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import Button from '@mui/material/Button';

// utils

// ----------------------------------------------------------------------

const StyledIcon = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

MovieCard.propTypes = {
  color: PropTypes.string,
  sx: PropTypes.object,
  movie: PropTypes.object,
};

export default function MovieCard({ movie, color = 'primary', sx, setIsFavorite, fave, viewButton }) {
  return (
    <>
      {fave === 'no' ? (
        <>
          <Card
            key={movie.id}
            sx={{
              py: 5,
              boxShadow: 0,
              textAlign: 'center',
              color: (theme) => theme.palette[color].darker,
              bgcolor: (theme) => theme.palette[color].lighter,
              ...sx,
            }}
            // {...other}
          >
            <img src={movie.poster_url} alt={movie.title_th} style={{ width: '100%' }} />
            <IconButton>
              <StyledIcon
                onClick={() => {
                  console.log('object');
                  setIsFavorite(movie);
                }}
                sx={{
                  color: (theme) => theme.palette[color].dark,
                  backgroundImage: (theme) =>
                    `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
                      theme.palette[color].dark,
                      0.24
                    )} 100%)`,
                }}
              >
                {/* {isFavorite.includes(movie) ? <>บันทึกแล้ว</> : <Favorite />} */}

                <FavoriteBorderIcon />
                {/* <Iconify icon={StarSharp}  /> */}
              </StyledIcon>
            </IconButton>

            {/* <Typography variant="h3">{fShortenNumber(movie)}</Typography> */}

            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
              {movie.title_th}
            </Typography>
          </Card>
        </>
      ) : (
        <>
          {' '}
          <Card
            key={movie.id}
            sx={{
              py: 5,
              boxShadow: 0,
              textAlign: 'center',
              color: (theme) => theme.palette[color].darker,
              bgcolor: (theme) => theme.palette[color].lighter,
              ...sx,
            }}
            // {...other}
          >
            <img src={movie.poster_url} alt={movie.title_th} style={{ width: '100%' }} />
            <IconButton>
              <StyledIcon
                onClick={() => {
                  console.log('object');
                  setIsFavorite(movie);
                }}
                sx={{
                  color: (theme) => theme.palette[color].dark,
                  backgroundImage: (theme) =>
                    `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
                      theme.palette[color].dark,
                      0.24
                    )} 100%)`,
                }}
              >
                {/* {isFavorite.includes(movie) ? <>บันทึกแล้ว</> : <Favorite />} */}

                <Favorite />
                {/* <Iconify icon={StarSharp}  /> */}
              </StyledIcon>
            </IconButton>

            {/* <Typography variant="h3">{fShortenNumber(movie)}</Typography> */}

            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
              {movie.title_th}
            </Typography>
          </Card>
        </>
      )}
    </>
  );
}
