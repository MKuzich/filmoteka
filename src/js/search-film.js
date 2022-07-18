import { fetchMovieSearcher } from './api/api-service';

const form = document.querySelector('.search-form');
const headerWarning = document.querySelector('.warning-notification');
const trendingSelector = document.querySelector('.trending-selector');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (evt) {
    evt.preventDefault();
   const page = 1;

    const inputValue = evt.target.elements.searchQuery.value.trim();
    console.log (inputValue);
    if (!inputValue) {
        return (headerWarning.textContent =
            'Search result is not successful. Enter the correct movie name, please!');
    }

  headerWarning.textContent = '';
  trendingSelector.classList.add('visually-hidden');
  movieSearcher(inputValue, page);
}


async function movieSearcher(searchText, pageNumber) {
    try {
      const data = await fetchMovieSearcher(searchText, pageNumber);
  
      const result = data.results;
      console.log(result);
  
      if (result.length === 0) {
        return (headerWarning.textContent =
          'There are not any matches! Try again, please!');
      }
    } catch (error) {
  console.error('Smth went wrong!')
    }
  }

