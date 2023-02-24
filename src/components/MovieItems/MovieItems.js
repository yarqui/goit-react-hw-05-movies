import PAGE_NAMES from 'router/paths';
import { ItemLink } from './MovieItems.styled';

// TODO: Make a proper navigation to movieDeatails

const MovieItems = ({ movies }) => {
  return movies.map(movie => {
    return (
      <li key={movie.id}>
        <ItemLink to={PAGE_NAMES.movieDetails}>{movie.title}</ItemLink>
      </li>
    );
  });
};

export default MovieItems;
