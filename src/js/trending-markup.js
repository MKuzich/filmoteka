import { fetchTrendingMovies } from './api/api-service-trending';
import { fetchMovieGenres } from './api/api-service-genres';
import { moviesGenresConvertation } from './movies-genres-convertation';

const listFilms = document.querySelector('.list-films');
const trendingSelector = document.querySelector('.trending-selector');
const dayBtn = document.querySelector('.day');
const weekBtn = document.querySelector('.week');

// dayBtn.classList.add('act')
let TIME_WINDOW = 'day';
dayBtn.disabled = true;

fetchMovieGenres();
trendingMarkup(TIME_WINDOW);

dayBtn.addEventListener('click', timeChangeDay);

weekBtn.addEventListener('click', timeChangeWeek);

function timeChangeDay() {
  listFilms.innerHTML = '';
  activeBtnDay();
  TIME_WINDOW = 'day';
  trendingMarkup(TIME_WINDOW);
}
function timeChangeWeek() {
  listFilms.innerHTML = '';
  activeBtnWeek();
  TIME_WINDOW = 'week';
  trendingMarkup(TIME_WINDOW);
}

function trendingMarkup(time) {
  trendingSelector.classList.remove('visually-hidden');
  fetchTrendingMovies(time)
    .then(({ data }) => {
      localStorage.setItem('downloadedMovies', JSON.stringify(''));
      localStorage.setItem('downloadedMovies', JSON.stringify(data.results));
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
                <h2 class="list-films_card-info-footer-name-film">${el.title.slice(
                  0,
                  20
                )}</h2>
                  <div class="card-info-footer_characteristics">
                  <p class="list-films_card-info-footer-genre-film">${moviesGenresConvertation(
                    el.genre_ids
                  )}</p>
                  <p class="list-films_card-info-footer-production-year">
                  ${el.release_date.slice(0, 4)}
                  </p>
                  </div>
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

function activeBtnDay() {
  dayBtn.classList.add('current');
  dayBtn.disabled = true;
  weekBtn.classList.remove('current');
  weekBtn.disabled = false;
}

function activeBtnWeek() {
  weekBtn.classList.add('current');
  weekBtn.disabled = true;
  dayBtn.classList.remove('current');
  dayBtn.disabled = false;
}
