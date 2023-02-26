import axios from 'axios';

export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e90e5cc72f12501ca886fe4fb737b4cc';
const TRENDING = '/trending/movie/day';
const MOVIE = '/movie';
const CREDITS = '/credits';
const REVIEWS = '/reviews';
const SEARCH = '/search/movie';

let options = {
  params: {
    api_key: API_KEY,
  },
};

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(BASE_URL + TRENDING, options);

    return response.data;
  } catch (error) {
    console.log('error.message:', error.message);
  }
};

export const getMovieById = async id => {
  try {
    const response = await axios(`${BASE_URL}${MOVIE}/${id}`, options);

    return response.data;
  } catch (error) {
    console.log('error.message:', error.message);
  }
};

export const getMovieCredits = async id => {
  try {
    const response = await axios(
      `${BASE_URL}${MOVIE}/${id}${CREDITS}`,
      options
    );

    return response.data;
  } catch (error) {
    console.log('error.message:', error.message);
  }
};

export const getMovieReviews = async id => {
  try {
    const response = await axios(
      `${BASE_URL}${MOVIE}/${id}${REVIEWS}`,
      options
    );

    return response.data;
  } catch (error) {
    console.log('error.message:', error.message);
  }
};

export const getMovieByQuery = async query => {
  let options = {
    params: {
      api_key: API_KEY,
      query: query,
    },
  };

  try {
    const response = await axios(`${BASE_URL}${SEARCH}`, options);

    return response.data;
  } catch (error) {
    console.log('error.message:', error.message);
  }
};
