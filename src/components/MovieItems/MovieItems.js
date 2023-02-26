// import PAGE_NAMES from 'router/paths';
import { BASE_IMG_URL } from 'services/api';
import { ItemLink } from './MovieItems.styled';
import defaultPoster from '../../images/default-poster.webp';
import { useLocation } from 'react-router-dom';

const MovieItems = ({ movies }) => {
  const location = useLocation();

  return movies.map(({ id, title, poster_path, release_date }) => {
    return (
      <li key={id}>
        <ItemLink to={`/movies/${id}`} state={{ from: location }}>
          <img
            src={poster_path ? `${BASE_IMG_URL}${poster_path}` : defaultPoster}
            alt={title}
            width="100px"
          ></img>

          <p>{title ? title : 'No title'}</p>

          <p>{release_date ? release_date.slice(0, 4) : ''}</p>
        </ItemLink>
      </li>
    );
  });
};

export default MovieItems;
