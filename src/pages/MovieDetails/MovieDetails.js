import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import PAGE_NAMES from 'router/paths';
import { getMovieById } from 'services/api';
import { BASE_IMG_URL } from 'services/api';
import defaultPoster from '../../images/default-poster.webp';
import {
  LinkStyled,
  MovieSection,
  MainMovieTitle,
  MovieDetailsWrap,
  SecondaryTitle,
} from './MovieDetails.styled';

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
      <MovieSection>
        <LinkStyled to={backlinkHref}>Go back</LinkStyled>
        <img
          src={poster_path ? `${BASE_IMG_URL}${poster_path}` : defaultPoster}
          alt={title}
          width="300px"
        ></img>

        <MovieDetailsWrap>
          <MainMovieTitle>{title ? title : 'No title'}</MainMovieTitle>
          <p>
            User Score: {vote_average ? `${Math.round(vote_average * 10)}%` : 0}
          </p>
        </MovieDetailsWrap>

        <MovieDetailsWrap>
          <SecondaryTitle>Overview</SecondaryTitle>
          <p>{overview ? overview : 'No overview yet'}</p>
        </MovieDetailsWrap>

        <MovieDetailsWrap>
          {genres && (
            <>
              <SecondaryTitle>Genres</SecondaryTitle>
              <p>{genres.map(genre => `${genre.name} `)}</p>
            </>
          )}
        </MovieDetailsWrap>
      </MovieSection>
      <MovieSection>
        <SecondaryTitle>Additional information</SecondaryTitle>
        <LinkStyled to={PAGE_NAMES.cast}>Cast</LinkStyled>
        <LinkStyled to={PAGE_NAMES.reviews}>Reviews</LinkStyled>

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet></Outlet>
        </Suspense>
      </MovieSection>
    </>
  );
};

export default MovieDetails;
