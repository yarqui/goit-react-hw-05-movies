// import PAGE_NAMES from 'router/paths';
import { BASE_IMG_URL } from 'services/api';
import { ItemLink } from './MovieItems.styled';
import defaultPoster from '../../images/default-poster.webp';

const MovieItems = ({ movies }) => {
  return movies.map(({ id, title, poster_path }) => {
    return (
      <li key={id}>
        <img
          src={poster_path ? `${BASE_IMG_URL}${poster_path}` : defaultPoster}
          alt={title}
          width="100px"
        ></img>
        <ItemLink to={`/movies/${id}`}>{title ? title : 'No title'}</ItemLink>
      </li>
    );
  });
};

export default MovieItems;
