// import PAGE_NAMES from 'router/paths';
import { ItemLink } from './MovieItems.styled';

const MovieItems = ({ movies }) => {
  return movies.map(({ id, title }) => {
    return (
      <li key={id}>
        <ItemLink to={`/movies/${id}`}>{title ? title : 'No title'}</ItemLink>
      </li>
    );
  });
};

export default MovieItems;
