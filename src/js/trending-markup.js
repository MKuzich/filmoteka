import { fetchTrendingMovies } from './api/api-service-trending';

const listFilms = document.querySelector('.list-films');
const trendingSelector = document.querySelector('.trending-selector');
const dayBtn = document.querySelector('.day');
const weekBtn = document.querySelector('.week');

let TIME_WINDOW = 'day';
// dayBtn.disabled();

trendingMarkup(TIME_WINDOW);

dayBtn.addEventListener('click', timeChange('day'))

weekBtn.addEventListener('click', timeChange('week'))

function timeChange(Ti) {
  listFilms.innerHTML = '';
  trendingMarkup(Ti);
}

function trendingMarkup(time) {
trendingSelector.classList.remove('visually-hidden');
  fetchTrendingMovies(time)
      .then(({ data }) => {
          localStorage.setItem("downloadedMovies", JSON.stringify("")); 
          localStorage.setItem("downloadedMovies", JSON.stringify(data.results)); 
      console.log(data);
      const markup = data.results
        .map(
          el =>
            `<li class="link list-films_card" data-id="${el.id}">
            <a class="link list-films_card-info">
                <img
                    class="list-films_card-info_card-film"
                    src=https://image.tmdb.org/t/p/original/${el.poster_path}
                    alt="movie poster"
                    width="395"
                    height="574"
                />
                <div class="list-films_card-info-footer">
                <h2 class="list-films_card-info-footer-name-film">${el.title}</h2>
                <p class="list-films_card-info-footer-genre-film">for example</p>
                <p class="list-films_card-info-footer-production-year">
                ${el.release_date.slice(0, 4)}
                </p>
                </div>
            </a>
            </li>`
        )
        .join('');

      listFilms.insertAdjacentHTML('afterbegin', markup);
    })
    .catch(error => {
      console.log(error);
    });
}
