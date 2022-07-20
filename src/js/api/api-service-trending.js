import axios from 'axios';

const API_KEY = '0d2fc6d2597c3f501e7437cf40d08b03';
const BASE_URL = 'https://api.themoviedb.org/3';
const MEDIA_TYPE = 'movie';
const SEARCH_URL = `${BASE_URL}/trending/${MEDIA_TYPE}/`;

export function fetchTrendingMovies(time, page) {
  return axios.get(`${SEARCH_URL}${time}?api_key=${API_KEY}&page=${page}`);
}
