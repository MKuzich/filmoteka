import axios from 'axios';

const API_KEY = '0d2fc6d2597c3f501e7437cf40d08b03';
const BASE_URL = 'https://api.themoviedb.org/3';
const SEARCH_URL = `${BASE_URL}/genre/movie/list`;
let lang = '';

export async function fetchMovieGenres() {
  try {
    lang = localStorage.getItem('localLang');
    const { data } = await axios.get(
      `${SEARCH_URL}?api_key=${API_KEY}&language=${lang}`
    );
    localStorage.setItem('genres', JSON.stringify(''));
    localStorage.setItem('genres', JSON.stringify(data.genres));
  } catch (error) {
    console.error(error.message);
  }
}
