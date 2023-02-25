import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';
import { BASE_IMG_URL } from 'services/api';
import defaultPoster from '../../images/default-poster.webp';
console.log('defaultPoster:', defaultPoster);

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(movieId).then(data => setMovieDetails(data));
  }, [movieId]);

  const { title, poster_path, vote_average, overview, genres } = movieDetails;

  return (
    <>
      <section>
        <button type="submit">Go back</button>
        <img
          src={poster_path ? `${BASE_IMG_URL}${poster_path}` : defaultPoster}
          alt={title}
          width="300px"
        ></img>

        <h2>{title ? title : 'No title'}</h2>
        <p>
          User Score: {vote_average ? `${Math.round(vote_average * 10)}%` : 0}
        </p>

        <h3>Overview</h3>
        <p>{overview ? overview : 'No overview yet'}</p>

        {genres && (
          <>
            <h3>Genres</h3>
            <p>{genres.map(genre => `${genre.name} `)}</p>
          </>
        )}
      </section>
      <Outlet></Outlet>
    </>
  );
};

export default MovieDetails;
