// import PAGE_NAMES from 'router/paths';
import { BASE_IMG_URL } from 'services/api';
import { ItemLink } from './MovieItems.styled';
import defaultPoster from '../../images/default-poster.webp';
import { useLocation } from 'react-router-dom';

const MovieItems = ({ movies }) => {
  const location = useLocation();

  return movies.map(({ id, title, poster_path }) => {
    return (
      <li key={id}>
        <ItemLink to={`/movies/${id}`} state={{ from: location }}>
          {title ? title : 'No title'}
          <img
            src={poster_path ? `${BASE_IMG_URL}${poster_path}` : defaultPoster}
            alt={title}
            width="100px"
          ></img>
        </ItemLink>
      </li>
    );
  });
};

export default MovieItems;
