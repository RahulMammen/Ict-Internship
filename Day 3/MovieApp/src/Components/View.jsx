import React from 'react';
import './View.css';
import { AppBar, Toolbar, Typography, Container, Card, CardMedia, CardContent, Button } from '@mui/material';
import {Link} from 'react-router-dom'
const initialMovies = [
  {
    poster: 'https://m.media-amazon.com/images/I/61T3umiIfEL._AC_UF894,1000_QL80_.jpg',
    name: 'Inception',
    director: 'Christopher Nolan',
    category: 'Sci-Fi',
    releaseYear: 2010
  },
  {
    poster: 'https://images-cdn.ubuy.co.in/6351416337e9de157a371824-shawshank-redemption-movie-poster-us.jpg',
    name: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    category: 'Drama',
    releaseYear: 1994
  },
  {
    poster: 'https://m.media-amazon.com/images/I/81C9FT0-8CL._AC_UF1000,1000_QL80_.jpg',
    name: 'The Godfather',
    director: 'Francis Ford Coppola',
    category: 'Crime',
    releaseYear: 1972
  }
];

const View = () => {
  return (
    <div className="view">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            
          </Typography>
          <Link to={'/add'}><Button color="inherit" sx={{ backgroundColor: 'black', padding: 1, borderRadius: 5 }}>Add</Button></Link>
        </Toolbar>
      </AppBar>
      <Container>
        <div className="movies">
          {initialMovies.map((movie, index) => (
            <Card key={index} className="movie">
              <CardMedia
                component="img"
                height="300"
                image={movie.poster}
                alt={`${movie.name} poster`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Director:</strong> {movie.director}<br />
                  <strong>Category:</strong> {movie.category}<br />
                  <strong>Release Year:</strong> {movie.releaseYear}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default View;
