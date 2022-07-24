import { fetchMovieSearcher } from './api/api-service';
import { filmGallaryMarkup } from './film-gallary-markup';
import { createMarkupPaginationBtn } from './pagination-markup';
import { currentPage } from './pagination';
import { TIME_WINDOW } from './trending-markup';
import { trendingMarkup } from './trending-markup';
import { notificationLaunch } from './notification-modal';

const form = document.querySelector('.search-form');
const headerWarning = document.querySelector('.warning-notification');
const trendingSelector = document.querySelector('.trending-selector');
const inputField = document.querySelector('input');
export let inputValue = null;
form.addEventListener('submit', onFormSubmit);
inputField.addEventListener('input', onInputChange);

function onFormSubmit(evt) {
  evt.preventDefault();
  currentPage.change(1);
  inputValue = evt.target.elements.searchQuery.value.trim();

  if (!inputValue) {
    if(localStorage.getItem('localLang') === 'en') {
      return (headerWarning.textContent = 'Enter a film title, please!');
    } else {
      return (headerWarning.textContent = 'Будь ласка, введіть назву фільма!');
    }
  }

  headerWarning.textContent = '';
  trendingSelector.classList.add('visually-hidden');

  movieSearcher(inputValue, currentPage.data);
}

export async function movieSearcher(searchText, pageNumber) {
  try {
    const data = await fetchMovieSearcher(searchText, pageNumber);
    const result = data.results;
    if (result.length === 0) {
      if (localStorage.getItem('localLang') === 'en') {
        return (headerWarning.textContent =
          'Search result is not successful. Enter the correct movie name, please!');
      } else {
        return (headerWarning.textContent =
          'Результат пошуку невдалий. Будь ласка, введіть правильну назву фільму!');
      }
    }

    localStorage.setItem('downloadedMovies', JSON.stringify(''));
    localStorage.setItem('downloadedMovies', JSON.stringify(data.results));
    headerWarning.textContent = '';
    filmGallaryMarkup(result);
    createMarkupPaginationBtn(data.total_pages, 'overlay-list-search');
  } catch (error) {
    notificationLaunch(error.message);
  }
}

function onInputChange(e) {
  headerWarning.textContent = '';
  inputValue = e.target.value;
  if (!inputValue) {
    trendingMarkup(TIME_WINDOW, 1);
  }
}
