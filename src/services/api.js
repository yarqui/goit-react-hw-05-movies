import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TRENDING = `/trending/movie/day`;

export const getTrendingMovies = async () => {
  const options = {
    params: {
      api_key: 'e90e5cc72f12501ca886fe4fb737b4cc',
    },
  };

  try {
    const response = await axios.get(BASE_URL + TRENDING, options);

    return response.data;
  } catch (error) {
    console.log('error.name:', error.name);
    console.log('error.message:', error.message);
  }
};
