import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { moviesGenresConvertation } from './movies-genres-convertation';
import { titleSrinking, genresSrinking } from './card-shrinking';
import {
  createMarkupPaginationLibraryBtn,
  currentPageLibrary,
} from './pagination-library';
import { fetchMovieGenres } from './api/api-service-genres';

export let currentFilter = {
  data: 'watched',
  change: function (prop) {
    this.data = prop;
  },
};
import { dateConvertation } from './date-convertation';
import { posterRender } from './poster-render';

let USER_ID = null;

const auth = getAuth();

onAuthStateChanged(auth, user => {
  if (user) {
    USER_ID = user.uid;
    watched.classList.add('library-active-btn');
    watched.removeAttribute('disabled');
    queue.removeAttribute('disabled');
    libraryWarningContainer.innerHTML = '';
    currentPageLibrary.setTotalData(currentFilter.data);
    markupLibraryRender(USER_ID, false);
  } else {
    footer.classList.add('footer-to-bottom');
    let markup;
    listFilms.innerHTML = '';
    if (localStorage.getItem('localLang') === 'uk') {
      markup = `<div class="library__warning-wrapper"><strong class="library__warning" id = 'warning'>На разі тут немає фільмів. Щоб користуватися цією бібліотекою, ви повинні ввійти в систему! Будь ласка, увійдіть або зареєструйтеся!</strong></div>`;
    } else {
      markup = `<div class="library__warning-wrapper"><strong class="library__warning" id = 'warning'>Now there are no movies. You must be loginned for using this library! Please log in or sign up!</strong></div>`;
    }
    libraryWarningContainer.innerHTML = '';
    libraryWarningContainer.insertAdjacentHTML('beforeend', markup);
    watched.setAttribute('disabled', 'disabled');
    queue.setAttribute('disabled', 'disabled');
    watched.classList.remove('library-active-btn');
    queue.classList.remove('library-active-btn');
  }
});

const footer = document.querySelector('.footer');
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
    currentPageLibrary.setTotalData(currentFilter.data);
    markupLibraryRender(USER_ID, false);
    if (currentPageLibrary.dataUpdate()) {
      currentPageLibrary.dataUpdate();
    } else currentPageLibrary.change(1);
    const overlayListLibraryRef = document.querySelector(
      '#overlay-list-library'
    );
    if (overlayListLibraryRef) {
      overlayListLibraryRef.remove();
    }
    if (currentPageLibrary.totalData > 1) {
      createMarkupPaginationLibraryBtn('overlay-list-library');
    }
    return;
  }
  currentFilter.change('queue');
  watched.classList.remove('library-active-btn');
  queue.classList.add('library-active-btn');
  currentPageLibrary.setTotalData(currentFilter.data);
  markupLibraryRender(USER_ID, false);
  if (currentPageLibrary.dataUpdate()) {
    currentPageLibrary.dataUpdate();
  } else currentPageLibrary.change(1);
  const overlayListLibraryRef = document.querySelector('#overlay-list-library');
  if (overlayListLibraryRef) {
    overlayListLibraryRef.remove();
  }
  if (currentPageLibrary.totalData > 1) {
    createMarkupPaginationLibraryBtn('overlay-list-library');
  }
}

export function markupLibraryRender(uid, arrayFromPagination) {
  const savedMovies = localStorage.getItem(uid);
  const parsedMovies = JSON.parse(savedMovies);
  currentPageLibrary.dataUpdate();
  let array = parsedMovies[currentFilter.data];
  if (array.length === 0) {
    listFilms.innerHTML = '';
    emptyUsersLibraryMessage();
    return;
  }
  if (array.length > 9) {
    let start = (currentPageLibrary.data - 1) * 9;
    let end = start + 9;
    array = array.slice(start, end);
  }
  if (arrayFromPagination) {
    array = arrayFromPagination;
  }

  footer.classList.remove('footer-to-bottom');
  const markup = array
    .map(item => {
      return `<li class="link list-films_card" data-id='${item.id}'>
        <a href="##" class="link list-films_card-info">
                <div class="card-image__wrapper">
                    <img
                    class="list-films_card-info_card-film lazyload"
                    src="https://subscribenow.com.au/time/asia/Solo/Content/Images/noCover.gif"
                    data-src=${posterRender(item.poster_path)}
                    loading="lazy"
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
  if (currentPageLibrary.totalData > 1) {
    createMarkupPaginationLibraryBtn('overlay-list-library');
  }
  libraryWarningContainer.innerHTML = '';
  listFilms.innerHTML = '';
  listFilms.insertAdjacentHTML('afterbegin', markup);
}

let modalButton = null;
const modalCloseBtnRef = document.querySelector('.modal-close');
const modalBackdropRef = document.querySelector('[data-film-modal]');

function enableRerender(btn) {
  modalButton = document.querySelector(`[data-action="${btn}"]`);
  modalButton.addEventListener('click', onModalButtonsClickHandler);
}

function disableRender() {
  modalButton.removeEventListener('click', onModalButtonsClickHandler);
  modalCloseBtnRef.removeEventListener('click', disableRender);
  document.removeEventListener('keydown', onCloseModalBack);
  modalBackdropRef.removeEventListener('click', onClickBack);
}

function onCloseModalBack(e) {
  e.key === 'Escape' ? disableRender() : null;
}

function onClickBack(e) {
  if (e.target.classList.contains('backdrop')) {
    disableRender();
  }
}

function onModalButtonsClickHandler(e) {
  setTimeout(() => {
    markupLibraryRender(USER_ID, false);
    if (currentPageLibrary.dataUpdate()) {
      currentPageLibrary.dataUpdate();
    } else currentPageLibrary.change(1);
    createMarkupPaginationLibraryBtn('overlay-list-library');
    return;
  }, 0);
}

const listFilmsRef = document.querySelector('.list-films');
listFilmsRef.addEventListener('click', onClickRerender);

function onClickRerender(e) {
  if (!e.target.closest('li')) {
    return;
  }
  enableRerender(currentFilter.data);

  modalCloseBtnRef.addEventListener('click', disableRender);
  document.addEventListener('keydown', onCloseModalBack);
  modalBackdropRef.addEventListener('click', onClickBack);
}

const langCheckBox = document.querySelector('#checkbox');
langCheckBox.addEventListener('input', onLangChange);

async function onLangChange() {
  await fetchMovieGenres();
  if (!USER_ID) {
    footer.classList.add('footer-to-bottom');
    let markup;
    listFilms.innerHTML = '';
    if (localStorage.getItem('localLang') === 'uk') {
      markup = `<div class="library__warning-wrapper"><strong class="library__warning" id = 'warning'>На разі тут немає фільмів. Щоб користуватися цією бібліотекою, ви повинні ввійти в систему! Будь ласка, увійдіть або зареєструйтеся!</strong></div>`;
    } else {
      markup = `<div class="library__warning-wrapper"><strong class="library__warning" id = 'warning'>Now there are no movies. You must be loginned for using this library! Please log in or sign up!</strong></div>`;
    }
    libraryWarningContainer.innerHTML = '';
    libraryWarningContainer.insertAdjacentHTML('beforeend', markup);
    return;
  }
  markupLibraryRender(USER_ID, false);
  if (currentPageLibrary.dataUpdate()) {
    currentPageLibrary.dataUpdate();
  } else currentPageLibrary.change(1);
  createMarkupPaginationLibraryBtn('overlay-list-library');
}

function emptyUsersLibraryMessage() {
  const langCheckBox = document.querySelector('#checkbox');
  let lang = '';
  if (langCheckBox.checked) {
    lang = 'uk';
  } else {
    lang = 'en';
  }
  footer.classList.add('footer-to-bottom');
  let markupEmpty;
  if (lang === 'uk') {
    markupEmpty = `<div class="library__warning-wrapper"><strong class="library__warning">На разі тут немає фільмів. Ви можете додати фільми відкривши детальний опис на <a href="/index.html" class="library__main-link">головній сторінці</a>!</strong></div>`;
  } else {
    markupEmpty = `<div class="library__warning-wrapper"><strong class="library__warning">Now there are no movies. You can add movies by opening the detailed description on the <a href="/index.html" class="library__main-link">main page</a>!</strong></div>`;
  }
  libraryWarningContainer.innerHTML = '';
  libraryWarningContainer.insertAdjacentHTML('beforeend', markupEmpty);
}
