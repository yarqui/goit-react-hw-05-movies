import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import PAGE_NAMES from 'router/paths';
import { getMovieById } from 'services/api';
import { BASE_IMG_URL } from 'services/api';
import defaultPoster from '../../images/default-poster.webp';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const { title, poster_path, vote_average, overview, genres } = movieDetails;
  const location = useLocation();
  const backlinkHref = location.state?.from ?? PAGE_NAMES.homepage;

  useEffect(() => {
    getMovieById(movieId)
      .then(data => setMovieDetails(data))
      .catch(error => {
        console.log('error.message', error.message);
      });
  }, [movieId]);

  return (
    <>
      <section>
        <Link to={backlinkHref}>Go back</Link>
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
      <section>
        <h4>Additional information</h4>
        <Link to={PAGE_NAMES.cast}>Cast</Link>
        <Link to={PAGE_NAMES.reviews}>Reviews</Link>

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet></Outlet>
        </Suspense>
      </section>
    </>
  );
};

export default MovieDetails;
