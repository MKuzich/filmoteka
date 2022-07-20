import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { moviesGenresConvertation } from './movies-genres-convertation';

let USER_ID = null;

const auth = getAuth();
onAuthStateChanged(auth, user => {
  if (user) {
    USER_ID = user.uid;
    markupLibraryRender(USER_ID);
  } else {
    alert('You must be loginned for using this function!');
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
    markupLibraryRender(USER_ID);
    return;
  }
  FILTER = 'queue';
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
            <h2 class="list-films_card-info-footer-name-film">${item.title.slice(
              0,
              30
            )}</h2>
              <div class="card-info-footer_characteristics">
              <p class="list-films_card-info-footer-genre-film">${moviesGenresConvertation(
                item.genre_ids
              )}</p>
              <p class="list-films_card-info-footer-production-year">
                  for example
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
