import { fetchTrendingMovies } from './api/api-service-trending';
import { fetchMovieGenres } from './api/api-service-genres';
import { moviesGenresConvertation } from './movies-genres-convertation';
import { currentPage } from './pagination';
import { createMarkupPaginationBtn } from './pagination-markup';
import { titleSrinking, genresSrinking } from './card-shrinking';
import { dateConvertation } from './date-convertation';

const listFilms = document.querySelector('.list-films');
const trendingSelector = document.querySelector('.trending-selector');
const dayBtn = document.querySelector('.day');
const weekBtn = document.querySelector('.week');
const langCheckBox = document.querySelector('#checkbox');

export let TIME_WINDOW = 'day';
let langValue = localStorage.getItem('localLang');
dayBtn.disabled = true;

fetchMovieGenres();
trendingMarkup(TIME_WINDOW, langValue, currentPage.data);

langCheckBox.addEventListener('input', onLangChange);

dayBtn.addEventListener('click', timeChangeDay);

weekBtn.addEventListener('click', timeChangeWeek);

function timeChangeDay() {
  listFilms.innerHTML = '';
  activeBtnDay();
  TIME_WINDOW = 'day';
  currentPage.change(1);
  trendingMarkup(TIME_WINDOW, 1);
}
function timeChangeWeek() {
  listFilms.innerHTML = '';
  activeBtnWeek();
  TIME_WINDOW = 'week';
  currentPage.change(1);
  trendingMarkup(TIME_WINDOW, 1);
}

export function trendingMarkup(time, lang, page) {
  trendingSelector.classList.remove('visually-hidden');
  fetchTrendingMovies(time, lang, page)
    .then(({ data }) => {
      localStorage.setItem('downloadedMovies', JSON.stringify(''));
      localStorage.setItem('downloadedMovies', JSON.stringify(data.results));
      console.log(data);
      createMarkupPaginationBtn(data.total_pages, 'overlay-list-trends');
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
                <h2 class="list-films_card-info-footer-name-film">${titleSrinking(
                  el.title
                )}</h2>
                  <div class="card-info-footer_characteristics">
                  <p class="list-films_card-info-footer-genre-film">${genresSrinking(
                    moviesGenresConvertation(el.genre_ids)
                  )}</p>
                  <p class="list-films_card-info-footer-production-year">
                  ${dateConvertation(el.release_date)}
                  </p>
                  </div>
                </div>
            </a>
            </li>`
        )
        .join('');
      listFilms.innerHTML = '';
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

function onLangChange() {
  if (langCheckBox.checked) {
    langValue = 'uk'
    trendingMarkup(TIME_WINDOW, langValue, currentPage.data);
    console.log("language changed to Ukr");
  } else {
    langValue = 'en'
    trendingMarkup(TIME_WINDOW, langValue, currentPage.data);
    console.log("language changed to en");
  }
}