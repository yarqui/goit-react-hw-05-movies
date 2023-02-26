import { getMovieReviews } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Review, ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(({ results }) => {
        setMovieReviews(results);
      })
      .catch(error => {
        console.log('error.message', error.message);
      });
  }, [movieId]);

  return (
    <>
      {movieReviews.length !== 0 ? (
        <ReviewsList>
          {movieReviews.map(({ id, author, content }) => (
            <li key={id}>
              <h5>Author: {author}.</h5>
              <Review>{content}</Review>
            </li>
          ))}
        </ReviewsList>
      ) : (
        <p>'We dont have any reviews for this movie' </p>
      )}
    </>
  );
};

export default Reviews;
