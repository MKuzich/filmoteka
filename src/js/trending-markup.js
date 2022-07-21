import { fetchTrendingMovies } from './api/api-service-trending';
import { fetchMovieGenres } from './api/api-service-genres';
import { moviesGenresConvertation } from './movies-genres-convertation';
import { currentPage } from './pagination';
import { createMarkupPaginationBtn } from './pagination-markup';

const listFilms = document.querySelector('.list-films');
const trendingSelector = document.querySelector('.trending-selector');
const dayBtn = document.querySelector('.day');
const weekBtn = document.querySelector('.week');
const checkBox = document.querySelector("#checkbox");
const selectorLabel = document.querySelector('.selector-label');

export let TIME_WINDOW = 'day';
dayBtn.disabled = true;

fetchMovieGenres();
trendingMarkup(TIME_WINDOW, currentPage);

document.addEventListener('DOMContentLoaded', changeLang);
checkBox.addEventListener('input', changeLang);
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

export function trendingMarkup(time, page) {
  trendingSelector.classList.remove('visually-hidden');
  fetchTrendingMovies(time, page)
    .then(({ data }) => {
      localStorage.setItem('downloadedMovies', JSON.stringify(''));
      localStorage.setItem('downloadedMovies', JSON.stringify(data.results));
      console.log(data);
      createMarkupPaginationBtn(data.total_pages);
      const markup = data.results
        .map(
          el =>
            `<li class="link list-films_card" data-id="${el.id}">
            <a class="link list-films_card-info">
                <div class="card-image__wrapper">
                    <img
                    class="list-films_card-info_card-film"
                    src=https://image.tmdb.org/t/p/original/${el.poster_path}
                    alt="movie poster"
                />
                </div>
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
      // listFilms.innerHTML = '';
      listFilms.insertAdjacentHTML('afterbegin', markup);
    })
    .catch(error => {
      console.log(error);
    });
}

function activeBtnDay() {
  dayBtn.classList.add('act');
  dayBtn.disabled = true;
  weekBtn.classList.remove('act');
  weekBtn.disabled = false;
}

function activeBtnWeek() {
  weekBtn.classList.add('act');
  weekBtn.disabled = true;
  dayBtn.classList.remove('act');
  dayBtn.disabled = false;
}


function changeLang(e) {
  e.preventDefault();
  if (checkBox.checked) {
      selectorLabel.innerHTML = 'Популярні за'
      dayBtn.innerHTML = 'День'
      weekBtn.innerHTML = 'Тиждень'
  } else {
      selectorLabel.innerHTML = 'Popular by'
      dayBtn.innerHTML = 'Day'
      weekBtn.innerHTML = 'Week'
  }
}
