import api from './api/api-service';

const form = document.querySelector('.search-form');
const headerWarning = document.querySelector('.warning-notification');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (evt) {
    evt.preventdefault();
   const page = 1;

    const inputValue = evt.currentTarget.elements.searchQuery.value.trim();
    console.log (inputValue);
    if (!inputValue) {
        return (headerWarning.textContent =
            'Search result not successful. Enter the correct movie name, please!');
    }

    movieSearcher(inputValue, page);
}


async function movieSearcher(searchText, pageNumber) {
    try {
      const data = await api.fetchMovieSearcher(searchText, pageNumber);
  
      const result = data.results;
  
      if (result.length === 0) {
        return (headerWarning.textContent =
          'There are not any matches! Try again, please!');
      }
    } catch (error) {
  console.error('Smth went wrong!')
    }
  }

