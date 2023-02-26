import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/api';
import MovieItems from 'components/MovieItems';
import { toast } from 'react-toastify';
import { SearchForm, SearchFormButton, SearchFormInput } from './Movies.styled';
import { MovieList } from 'pages/Home/Home.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }

    getMovieByQuery(query)
      .then(({ results, total_results }) => {
        if (total_results === 0) {
          toast.info(`Sorry, there are no movies with the search ${query}`);
          return;
        }

        setMovies(results);
      })
      .catch(error => {
        console.log('error.message', error.message);
      });
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
      <SearchForm onSubmit={onSubmit}>
        <SearchFormInput
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies by name"
        ></SearchFormInput>
        <SearchFormButton type="submit"></SearchFormButton>
      </SearchForm>

      <MovieList>
        <MovieItems movies={movies} />
      </MovieList>
    </>
  );
};

export default Movies;
