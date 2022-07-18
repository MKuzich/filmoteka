import { fetchMovieSearcher } from './api/api-service';
import { filmGallaryMarkup } from './film-gallary-markup';

const form = document.querySelector('.search-form');
const headerWarning = document.querySelector('.warning-notification');
const trendingSelector = document.querySelector('.trending-selector');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const page = 1;
  const inputValue = evt.target.elements.searchQuery.value.trim();

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
        'There are not any matches! Try again, please!');
    }
    filmGallaryMarkup(result);
  } catch (error) {
    console.error('Smth went wrong!');
  }
}
