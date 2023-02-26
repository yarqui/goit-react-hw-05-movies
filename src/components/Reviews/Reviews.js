import { getMovieReviews } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(({ results }) => {
      setMovieReviews(results);
    });
  }, [movieId]);

  return (
    <>
      {movieReviews.length !== 0 ? (
        <ul>
          {movieReviews.map(({ id, author, content }) => (
            <li key={id}>
              <h5>Author: {author}.</h5>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>'We dont have any reviews for this movie' </p>
      )}
    </>
  );
};

export default Reviews;
