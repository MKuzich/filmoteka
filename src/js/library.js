import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { moviesGenresConvertation } from './movies-genres-convertation';
import { titleSrinking, genresSrinking } from './card-shrinking';
import {
  createMarkupPaginationLibraryBtn,
  currentPageLibrary,
} from './pagination-library';

export let currentFilter = {
  data: 'watched',
  change: function (prop) {
    this.data = prop;
  },
};
import { dateConvertation } from './date-convertation';

let USER_ID = null;

const auth = getAuth();

onAuthStateChanged(auth, user => {
  if (user) {
    USER_ID = user.uid;
    watched.classList.add('library-active-btn');
    watched.removeAttribute('disabled');
    queue.removeAttribute('disabled');
    libraryWarningContainer.innerHTML = '';
    markupLibraryRender(USER_ID, false);
  } else {
    let markup;

    if (localStorage.getItem('localLang') === 'uk') {
      markup = `<div class="library__warning-wrapper"><strong class="library__warning" id = 'warning'>На разі тут немає фільмів. Щоб користуватися цією бібліотекою, ви повинні ввійти в систему! Будь ласка, увійдіть або зареєструйтеся!</strong></div>`;
    } else {
      markup = `<div class="library__warning-wrapper"><strong class="library__warning" id = 'warning'>Now there are no movies. You must be loginned for using this library! Please log in or sign up!</strong></div>`;
    }
    libraryWarningContainer.innerHTML = '';
    libraryWarningContainer.insertAdjacentHTML('beforeend', markup);
    watched.setAttribute('disabled', 'disabled');
    queue.setAttribute('disabled', 'disabled');
  }
});

let FILTER = 'watched';

const libraryWarningContainer = document.querySelector(
  '.library__warning-container'
);
const listFilms = document.querySelector('.list-films');
const watched = document.querySelector('[data-watched-btn]');
const queue = document.querySelector('[data-queue-btn]');
watched.addEventListener('click', onClickFilterChange);
queue.addEventListener('click', onClickFilterChange);

function onClickFilterChange(e) {
  if (e.target.hasAttribute('data-watched-btn')) {
    currentFilter.change('watched');
    watched.classList.add('library-active-btn');
    queue.classList.remove('library-active-btn');
    markupLibraryRender(USER_ID, false);
    currentPageLibrary.change(1);
    createMarkupPaginationLibraryBtn('overlay-list-library');
    return;
  }
  currentFilter.change('queue');
  watched.classList.remove('library-active-btn');
  queue.classList.add('library-active-btn');
  markupLibraryRender(USER_ID, false);
  currentPageLibrary.change(1);
  createMarkupPaginationLibraryBtn('overlay-list-library');
}

export function markupLibraryRender(uid, arrayFromPagination) {
  const savedMovies = localStorage.getItem(uid);
  const parsedMovies = JSON.parse(savedMovies);

  let array = parsedMovies[currentFilter.data];
  if (array.length > 9) {
    array = array.slice(0, 9);
  }
  if (arrayFromPagination) {
    array = arrayFromPagination;
  }
  const markup = array
    .map(item => {
      return `<li class="link list-films_card" data-id='${item.id}'>
        <a class="link list-films_card-info">
                <div class="card-image__wrapper">
                    <img
                    class="list-films_card-info_card-film"
                    src=https://image.tmdb.org/t/p/original/${item.poster_path}
                    alt="${item.original_title}"
                />
                </div>
            <div class="list-films_card-info-footer">
            <h2 class="list-films_card-info-footer-name-film">${titleSrinking(
              item.title
            )}</h2>
              <div class="card-info-footer_characteristics">
              <p class="list-films_card-info-footer-genre-film">${genresSrinking(
                moviesGenresConvertation(item.genre_ids)
              )}</p>
              <p class="list-films_card-info-footer-production-year">
              ${dateConvertation(
                item.release_date
              )} <span class="info-block__values--orange">${item.vote_average.toFixed(
        1
      )}</span>
              </p>
              </div>
            </div>
        </a>
        </li>`;
    })
    .join('');
  createMarkupPaginationLibraryBtn('overlay-list-library');
  listFilms.innerHTML = '';
  listFilms.insertAdjacentHTML('afterbegin', markup);
}
