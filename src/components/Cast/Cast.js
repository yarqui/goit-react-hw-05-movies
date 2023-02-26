import { MovieList } from 'pages/Home/Home.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_IMG_URL, getMovieCredits } from 'services/api';
import noImage from '../../images/no-image.webp';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(data => setCast(data.cast))
      .catch(error => {
        console.log('error.message', error.message);
      });
  }, [movieId]);

  return (
    <>
      <MovieList>
        {cast.map(({ id, name, character, profile_path }) => {
          return (
            <li key={id}>
              <img
                src={profile_path ? `${BASE_IMG_URL}${profile_path}` : noImage}
                alt={(name, character)}
                width="100"
              ></img>
              <p>{name}</p>
              <p>{character}</p>
            </li>
          );
        })}
      </MovieList>
    </>
  );
};

export default Cast;
