import { getTrendingMovies } from 'services/api';
import MovieItems from 'components/MovieItems';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        <MovieItems movies={movies} />
      </ul>
    </>
  );
};

export default Home;
