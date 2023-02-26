import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/api';
import MovieItems from 'components/MovieItems';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }

    getMovieByQuery(query).then(({ results }) => setMovies(results));
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const normalizedQuery = form.elements.search.value.trim().toLowerCase();

    setSearchParams(normalizedQuery !== '' ? { query: normalizedQuery } : {});

    form.reset();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies by name"
        ></input>
        <button type="submit">Search</button>
      </form>
      <ul>
        <MovieItems movies={movies} />
      </ul>
      ;
    </>
  );
};

export default Movies;
