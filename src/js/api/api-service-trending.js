import axios from 'axios';

const API_KEY = '0d2fc6d2597c3f501e7437cf40d08b03';
const BASE_URL = 'https://api.themoviedb.org/3';
const MEDIA_TYPE = 'movie';
const TIME_WINDOW = 'day';
const SEARCH_URL = `${BASE_URL}/trending/${MEDIA_TYPE}/${TIME_WINDOW}`;


    export function fetchTrendingMovies() {
         return axios.get(
            `${SEARCH_URL}?api_key=${API_KEY}`,
          );
      }


