import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const API_KEY = '30f8890b4b18c3650777b7120811d941';
                            
export const getTrendingMovies = async () =>  { 
        const resp = await axios.get(
            `/trending/movie/day?`,
            {
                params: {
                    api_key: API_KEY,
                    page: 1,
                },
            }
        );
        return resp.data.results;
}; 

export const getMovieByQuery =  async query => {
    const resp = await axios.get
    (`/search/movie?&language=en-US&query=${query}&page=1&include_adult=false`, 
    {
        params: {
            api_key: API_KEY,
            page: 1,
        },
    }
    );
    return resp.data.results;
};

export const getMovieDetails =  async id => {
    const resp = await axios.get(`movie/${id}?&language=en-US`, 
    {
        params: {
            api_key: API_KEY,
        },
    }
    );
    return resp.data;
};
export const getMovieCast = async id => {
    const resp = await axios.get(`movie/${id}/credits?&language=en-US `, 
    {
        params: {
            api_key: API_KEY,
        },
    }
    );
    return resp.data.cast ;
};

export const getMoviesReviews = async id => {
  const resp = await axios.get(`movie/${id}/reviews?&language=en-US `, {
    params: {
      api_key: API_KEY,
    },
  });
  return resp.data.results;
};