import { fetchMovieSearcher } from './api/api-service';
import { filmGallaryMarkup } from './film-gallary-markup';
import { listFilms } from './film-gallary-markup';
import { createMarkupPaginationBtn } from './pagination-markup';
import { currentPage } from './pagination';
import { TIME_WINDOW } from './trending-markup';
import { trendingMarkup } from './trending-markup'

const form = document.querySelector('.search-form');
const headerWarning = document.querySelector('.warning-notification');
const trendingSelector = document.querySelector('.trending-selector');
const inputField = document.querySelector('input');
export let inputValue;
form.addEventListener('submit', onFormSubmit);
inputField.addEventListener('input', onInputChange);

function onFormSubmit(evt) {
  evt.preventDefault();
  currentPage.change(1);
  inputValue = evt.target.elements.searchQuery.value.trim();
  
  if (!inputValue) {
    return (headerWarning.textContent =
      'Enter a film title, please!');
  }

  headerWarning.textContent = '';
  trendingSelector.classList.add('visually-hidden');

  movieSearcher(inputValue, currentPage.data);
}

export async function movieSearcher(searchText, pageNumber) {
  try {
    const data = await fetchMovieSearcher(searchText, pageNumber);
    const result = data.results;
    console.log(data);
    if (result.length === 0) {
      return (headerWarning.textContent =
        'Search result is not successful. Enter the correct movie name, please!');
    
    }

    localStorage.setItem('downloadedMovies', JSON.stringify(''));
    localStorage.setItem('downloadedMovies', JSON.stringify(data.results));
    onInputChange();
    filmGallaryMarkup(result);
    createMarkupPaginationBtn(data.total_pages, 'overlay-list-search');
  } catch (error) {
    // console.error('Smth went wrong!');
    console.log(error);
  }
}

function onInputChange() {
  headerWarning.textContent = '';

  if (!inputValue) {
    return trendingMarkup (TIME_WINDOW, 1);
  }
}
