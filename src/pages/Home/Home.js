import { getTrendingMovies } from 'services/api';
import MovieItems from 'components/MovieItems';
import { useEffect, useState } from 'react';
import { MovieList, MovieTitle } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(data => setMovies(data.results))
      .catch(error => {
        console.log('error.message', error.message);
      });
  }, []);

  return (
    <>
      <MovieTitle>Trending today</MovieTitle>
      <MovieList>
        <MovieItems movies={movies} />
      </MovieList>
    </>
  );
};

export default Home;
