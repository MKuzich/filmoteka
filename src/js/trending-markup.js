import { fetchTrendingMovies } from './api/api-service-trending';
import { fetchMovieGenres } from './api/api-service-genres';
import { moviesGenresConvertation } from './movies-genres-convertation';
import { currentPage } from './pagination';
import { createMarkupPaginationBtn } from './pagination-markup';
import { titleSrinking, genresSrinking } from './card-shrinking';
import { dateConvertation } from './date-convertation';
import { notificationLaunch } from './notification-modal';
import { posterRender } from './poster-render';

const listFilms = document.querySelector('.list-films');
const trendingSelector = document.querySelector('.trending-selector');
const dayBtn = document.querySelector('.day');
const weekBtn = document.querySelector('.week');
const langCheckBox = document.querySelector('#checkbox');

export let TIME_WINDOW = 'day';

let langValue = localStorage.getItem('localLang');
dayBtn.disabled = true;
currentPage.dataUpdate();
fetchMovieGenres();
trendingMarkup(TIME_WINDOW, currentPage.data, langValue);

// listeners
langCheckBox.addEventListener('input', onLangChange);
dayBtn.addEventListener('click', timeChangeDay);
weekBtn.addEventListener('click', timeChangeWeek);
//

// functions
function timeChangeDay() {
  listFilms.innerHTML = '';
  activeBtnDay();
  TIME_WINDOW = 'day';
  currentPage.change(1);
  trendingMarkup(TIME_WINDOW, currentPage.data, langValue);
}
function timeChangeWeek() {
  listFilms.innerHTML = '';
  activeBtnWeek();
  TIME_WINDOW = 'week';
  currentPage.change(1);
  trendingMarkup(TIME_WINDOW, currentPage.data, langValue);
}

export function trendingMarkup(time, page, lang) {
  trendingSelector.classList.remove('visually-hidden');
  fetchTrendingMovies(time, page, lang)
    .then(({ data }) => {
      localStorage.setItem('downloadedMovies', JSON.stringify(''));
      localStorage.setItem('downloadedMovies', JSON.stringify(data.results));
      createMarkupPaginationBtn(data.total_pages, 'overlay-list-trends');
      const markup = data.results
        .map(
          el =>
            `<li class="link list-films_card" data-id="${el.id}">
            <a href="##" class="link list-films_card-info">
                <div class="card-image__wrapper">
                    <img
                    class="list-films_card-info_card-film lazyload"
                    src="https://subscribenow.com.au/time/asia/Solo/Content/Images/noCover.gif"
                    data-src=${posterRender(el.poster_path)}
                    loading="lazy"
                    alt="${titleSrinking(el.title)}"
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
      notificationLaunch(error.message);
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
    langValue = 'uk';
    fetchMovieGenres();
    trendingMarkup(TIME_WINDOW, currentPage.data, langValue);
  } else {
    langValue = 'en';
    fetchMovieGenres();
    trendingMarkup(TIME_WINDOW, currentPage.data, langValue);
  }
}
