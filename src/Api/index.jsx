// Api/index.jsx
import axios from 'axios';

const apiKey = 'a98292df884f804c7aaff54aa96d5c6d';
const apiUrl = 'https://api.themoviedb.org/3/discover/movie';

const fetchMovieData = async () => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        api_key: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie genres:', error);
    return [];
  }
};

export { fetchMovieData };

//Fetch all movies Playing

const apiKeyy = 'a98292df884f804c7aaff54aa96d5c6d';
const apiUrll = 'https://api.themoviedb.org/3/movie/top_rated';

const fetchMoviePlaying = async () => {
  try {
    const response = await axios.get(apiUrll, {
      params: {
        api_key: apiKeyy,
      },
    });
    return response.data;
  } catch (err) {
    console.error('Error fetching movie playing:', err);
    return [];
  }
};

export { fetchMoviePlaying };
