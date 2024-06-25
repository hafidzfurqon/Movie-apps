// Api/index.jsx
import axios from 'axios';

const apiKey = 'a98292df884f804c7aaff54aa96d5c6d';
const apiUrl = 'https://api.themoviedb.org/3/discover/movie';

const fetchMovieData = async () => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        api_key: apiKey,
        page: 1,
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
const apiUrll = 'https://api.themoviedb.org/3/discover/movie';

const fetchMoviePlaying = async () => {
  try {
    const response = await axios.get(apiUrll, {
      params: {
        api_key: apiKeyy,
        page: 1,
        with_genres: 16, // Genre ID untuk film animasi
      },
    });
    return response.data;
  } catch (err) {
    console.error('Error fetching movie playing:', err);
    return [];
  }
};

export { fetchMoviePlaying };

const apiKeyyy = 'a98292df884f804c7aaff54aa96d5c6d';
const apiUrlll = 'https://api.themoviedb.org/3/movie/upcoming';

const fetchMovieTop = async () => {
  try {
    const response = await axios.get(apiUrlll, {
      params: {
        api_key: apiKeyyy,
      },
    });
    return response.data;
  } catch (err) {
    console.error('Error fetching movie playing:', err);
    return [];
  }
};

export { fetchMovieTop };

const apisKey = 'a98292df884f804c7aaff54aa96d5c6d';
const fetchMovieCast = async (movieId) => {
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits`;

  try {
    const response = await axios.get(apiUrl, {
      params: {
        api_key: apisKey,
      },
    });
    return response.data.cast;
  } catch (err) {
    console.error('Error fetching movie cast:', err);
    return [];
  }
};

export { fetchMovieCast };

const fetchMovieTrailer = async (movieId) => {
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos`;

  try {
    const response = await axios.get(apiUrl, {
      params: {
        api_key: apiKey,
      },
    });
    const trailer = response.data.results.find((video) => video.type === 'Trailer');
    return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
  } catch (err) {
    console.error('Error fetching movie trailer:', err);
    return null;
  }
};

export { fetchMovieTrailer };

const apiKeyyyy = 'a98292df884f804c7aaff54aa96d5c6d';
const apiUrllll = 'https://api.themoviedb.org/3/trending/movie/week';
const fetchAllMovie = async (page) => {
  try {
    const response = await axios.get(apiUrllll, {
      params: {
        api_key: apiKeyyyy,
        page: page,
      },
    });
    return response.data;
  } catch (err) {
    console.error('Error fetching movie playing:', err);
    return [];
  }
};

export { fetchAllMovie };

const fetchMovieDetail = async (id) => {
  const apiKey = 'a98292df884f804c7aaff54aa96d5c6d';
  const apiUrl = `https://api.themoviedb.org/3/movie/${id}`;

  try {
    const response = await axios.get(apiUrl, {
      params: {
        api_key: apiKey,
      },
    });
    return response.data;
  } catch (err) {
    console.error('Error fetching movie detail:', err);
    return null;
  }
};

export { fetchMovieDetail };


export const AxiosInstance = axios.create({
  baseURL : 'https://api.themoviedb.org/3',
})


const apiKeY = 'a98292df884f804c7aaff54aa96d5c6d';
export const FetchMoviesQuery = async (query) => {
  const response = await AxiosInstance.get(`/search/movie`, {
    params : {
      api_key : apiKeY,
      query : query 
    }
  })
  return response.data;
}