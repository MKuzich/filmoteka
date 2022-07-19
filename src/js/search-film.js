import { fetchMovieSearcher } from './api/api-service';
import { filmGallaryMarkup } from './film-gallary-markup';
import { listFilms } from './film-gallary-markup';

const form = document.querySelector('.search-form');
const headerWarning = document.querySelector('.warning-notification');
const trendingSelector = document.querySelector('.trending-selector');
const inputField = document.querySelector('input');
export let inputValue;
form.addEventListener('submit', onFormSubmit);
inputField.addEventListener('input', onInputChange);

function onFormSubmit(evt) {
  evt.preventDefault();
  const page = 1;
  inputValue = evt.target.elements.searchQuery.value.trim();

  if (!inputValue) {
    return (headerWarning.textContent =
      'Search result is not successful. Enter the correct movie name, please!');
  }

  headerWarning.textContent = '';
  trendingSelector.classList.add('visually-hidden');

  movieSearcher(inputValue, page);
}

export async function movieSearcher(searchText, pageNumber) {
  try {
    const data = await fetchMovieSearcher(searchText, pageNumber);
    const result = data.results;

    if (result.length === 0) {
      return (headerWarning.textContent =
        'Search result is not successful. Enter the correct movie name, please!');
    }

    localStorage.setItem('downloadedMovies', JSON.stringify(''));
    localStorage.setItem('downloadedMovies', JSON.stringify(data.results));

    filmGallaryMarkup(result);
  } catch (error) {
    console.error('Smth went wrong!');
  }
}


function onInputChange() {
  headerWarning.textContent = "";
  listFilms.innerHTML = "";
  }