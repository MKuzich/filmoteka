import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { moviesGenresConvertation } from './movies-genres-convertation';
import { titleSrinking, genresSrinking } from './card-shrinking';
import { dateConvertation } from './date-convertation';

let USER_ID = null;

const auth = getAuth();
onAuthStateChanged(auth, user => {
  if (user) {
    USER_ID = user.uid;
    watched.classList.add('library-active-btn');
    watched.removeAttribute('disabled');
    queue.removeAttribute('disabled');
    markupLibraryRender(USER_ID);
  } else {
    let markup;

    if (localStorage.getItem('localLang') === 'uk') {
      console.log('ukra');
      markup = `<li><strong class="library-warning" id = 'warning'>Щоб користуватися цією бібліотекою, ви повинні ввійти в систему! Будь ласка, увійдіть або зареєструйтеся!</strong></li>`;
    } else {
      markup = `<li><strong class="library-warning" id = 'warning'>You must be loginned for using this library! Please log in or sign up!</strong></li>`;

    }

    listFilms.innerHTML = '';
    listFilms.insertAdjacentHTML('afterbegin', markup);
    watched.setAttribute('disabled', 'disabled');
    queue.setAttribute('disabled', 'disabled');

  }
});

let FILTER = 'watched';

const listFilms = document.querySelector('.list-films');
const watched = document.querySelector('[data-watched-btn]');
const queue = document.querySelector('[data-queue-btn]');
watched.addEventListener('click', onClickFilterChange);
queue.addEventListener('click', onClickFilterChange);

function onClickFilterChange(e) {
  if (e.target.hasAttribute('data-watched-btn')) {
    FILTER = 'watched';
    watched.classList.add('library-active-btn');
    queue.classList.remove('library-active-btn');
    markupLibraryRender(USER_ID);
    return;
  }
  FILTER = 'queue';
  watched.classList.remove('library-active-btn');
  queue.classList.add('library-active-btn');
  markupLibraryRender(USER_ID);
}

function markupLibraryRender(uid) {
  const savedMovies = localStorage.getItem(uid);
  const parsedMovies = JSON.parse(savedMovies);

  const array = parsedMovies[FILTER];

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
              ${dateConvertation(item.release_date)} <span class="info-block__values--orange">${item.vote_average.toFixed(
        1
      )}</span>
              </p>
              </div>
            </div>
        </a>
        </li>`;
    })
    .join('');
  listFilms.innerHTML = '';
  listFilms.insertAdjacentHTML('afterbegin', markup);
}
