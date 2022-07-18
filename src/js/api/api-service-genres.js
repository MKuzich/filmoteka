import axios from 'axios';

const API_KEY = '0d2fc6d2597c3f501e7437cf40d08b03';
const BASE_URL = 'https://api.themoviedb.org/3';
const SEARCH_URL = `${BASE_URL}/genre/movie/list`;

export async function fetchMovieGenres() {
  try {
    const { data } = await axios.get(
      `${SEARCH_URL}?api_key=${API_KEY}&language=en-US`
    );
    localStorage.setItem('genres', JSON.stringify(''));
    localStorage.setItem('genres', JSON.stringify(data.genres));
    return console.log(data.genres);
  } catch (error) {
    console.error(error);
  }
}
