import axios from 'axios';

const API_KEY = '0d2fc6d2597c3f501e7437cf40d08b03';
const BASE_URL = 'https://api.themoviedb.org/3';
const SEARCH_URL = `${BASE_URL}/search/movie`;
let lang = '';

export async function fetchMovieSearcher(text, page) {
  try {
    lang = localStorage.getItem('localLang');
    const { data } = await axios.get(
      `${SEARCH_URL}?api_key=${API_KEY}&query=${text}&language=${lang}&page=${page}`
    );

    return data;
  } catch (error) {
    console.error('Smth wrong with api search fetch' + error);
  }
}
