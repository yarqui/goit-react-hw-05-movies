import PropTypes from 'prop-types';
import { BASE_IMG_URL } from 'services/api';
import {
  ItemImage,
  ItemLink,
  MovieItem,
  MovieLabel,
} from './MovieItems.styled';
import defaultPoster from '../../images/default-poster.webp';
import { useLocation } from 'react-router-dom';

const MovieItems = ({ movies }) => {
  const location = useLocation();

  return movies.map(({ id, title, poster_path, release_date }) => {
    return (
      <MovieItem key={id}>
        <ItemLink to={`/movies/${id}`} state={{ from: location }}>
          <ItemImage
            src={poster_path ? `${BASE_IMG_URL}${poster_path}` : defaultPoster}
            alt={title}
            width="100px"
          ></ItemImage>
          <MovieLabel>
            <p>{title ? title : 'No title'}</p>

            <p>{release_date ? release_date.slice(0, 4) : ''}</p>
          </MovieLabel>
        </ItemLink>
      </MovieItem>
    );
  });
};

MovieItems.PropTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
export default MovieItems;
