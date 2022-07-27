import { createMarkupModal } from './film-modal-render';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { notificationLaunch } from './notification-modal';
import { fetchTrendingMovies } from './api/api-service-trending';

let USER_ID = null;
const auth = getAuth();
onAuthStateChanged(auth, user => {
  if (user) {
    USER_ID = user.uid;
  }
});

const btnRandom = document.querySelector('.random-finder__btn');
btnRandom.addEventListener('click', onBtnClickHandler);

function onBtnClickHandler() {
  const time = 'day';
  const page = Math.round(Math.random() * 100) || 1;
  const lang = localStorage.getItem('localLang');
  fetchTrendingMovies(time, page, lang)
    .then(({ data }) => {
      const randomMovie = Math.round(Math.random() * 20) || 1;
      openRandomModal(data.results[randomMovie]);
    })
    .catch(error => {
      notificationLaunch(error.message);
    });
}

const selectedLang = document.querySelector('#checkbox');

const modalBackdropRef = document.querySelector('[data-film-modal]');
const modalCardRef = document.querySelector('.modal-card');
const modalCloseBtnRef = document.querySelector('.modal-close');
const listFilmsRef = document.querySelector('.list-films');

listFilmsRef.addEventListener('click', openModal);

function openModal(e) {
  if (!e.target.closest('li')) {
    return;
  }

  document.body.classList.add('modal-open');

  let arrayData = {};

  modalCloseBtnRef.addEventListener('click', closeModal);

  document.addEventListener('keydown', closeModalOnEsc);

  modalBackdropRef.addEventListener('click', closeLoginModalOnAreaClick);

  modalBackdropRef.classList.remove('is-hidden');

  const filmId = Number(e.target.closest('li').dataset.id);

  let localDataFilms = JSON.parse(localStorage.getItem('downloadedMovies'));

  inLibrary();
  const currentFilmData = localDataFilms.find(film => {
    return film.id === filmId;
  });

  renderModalMarkup(currentFilmData);

  const modalButtonsRef = document.querySelector('.modal-buttons');

  if (USER_ID) {
    if (!JSON.parse(localStorage.getItem(USER_ID))) {
      refreshEmptyArray(parseToArray(modalButtonsRef));
      localStorage.setItem(USER_ID, JSON.stringify(arrayData));
    }
  }

  modalButtonsRef.addEventListener('click', handleUpdadeFilmData);
  refreshModalButtons(filmId);

  function handleUpdadeFilmData(e) {
    const key = e.target.dataset.action;
    onAuthStateChanged(auth, user => {
      if (user) {
        updateToLocal(currentFilmData, key);
        refreshModalButtons(filmId);
      } else return isLogin(USER_ID);
    });
  }

  function isLogin(userId) {
    if (!userId) {
      if (selectedLang.checked) {
        return notificationLaunch(
          'Будь ласка, зареєструйтеся або увійдіть для користування бібліотекою'
        );
      }
      return notificationLaunch('Please register or login to use the library');
    }
  }

  function updateToLocal(data, key) {
    arrayData = JSON.parse(localStorage.getItem(USER_ID));

    if (arrayData[key].some(value => value.id === data.id)) {
      arrayData[key] = removeFilm(arrayData, data.id, key);
      localStorage.setItem(USER_ID, JSON.stringify(arrayData));
      return;
    }

    arrayData[key].push(data);

    localStorage.setItem(USER_ID, JSON.stringify(arrayData));
  }

  function refreshEmptyArray(buttonsRef) {
    buttonsRef.map(btn => {
      arrayData[btn.dataset.action] = [];
    });
  }

  function refreshModalButtons(filmId) {
    onAuthStateChanged(auth, user => {
      if (user) {
        USER_ID = user.uid;
        let localDataFilm = JSON.parse(localStorage.getItem(USER_ID));
        parseToArray(modalButtonsRef).map(btnRef => {
          const key = btnRef.dataset.action;
          localDataFilm = JSON.parse(localStorage.getItem(USER_ID));
          if (localDataFilm[key].length !== 0) {
            for (const filmData of localDataFilm[key]) {
              if (filmData.id === filmId) {
                if (selectedLang.checked) {
                  btnRef.textContent = `Видалити з ${btnRef.dataset.lang}`;
                  btnRef.classList.replace(
                    'modal-button',
                    'modal-button--active'
                  );
                } else {
                  btnRef.textContent = `Remove from ${key}`;
                  btnRef.classList.replace(
                    'modal-button',
                    'modal-button--active'
                  );
                }
                return;
              } else {
                if (selectedLang.checked) {
                  btnRef.textContent = `Додати до ${btnRef.dataset.lang}`;
                  btnRef.classList.replace(
                    'modal-button--active',
                    'modal-button'
                  );
                } else {
                  btnRef.textContent = `Add to ${key}`;
                  btnRef.classList.replace(
                    'modal-button--active',
                    'modal-button'
                  );
                }
              }
            }
          } else {
            if (selectedLang.checked) {
              btnRef.textContent = `Додати до ${btnRef.dataset.lang}`;
              btnRef.classList.replace('modal-button--active', 'modal-button');
            } else {
              btnRef.textContent = `Add to ${key}`;
              btnRef.classList.replace('modal-button--active', 'modal-button');
            }
          }
        });
      }
    });
  }

  function removeFilm(data, id, key) {
    const updatedArray = data[key].filter(value => value.id !== id);
    return updatedArray;
  }

  function inLibrary() {
    if (document.querySelector('.btn-container')) {
      let tempArray = JSON.parse(localStorage.getItem(`${USER_ID}`));
      if (document.querySelector('.library-active-btn[data-watched-btn]')) {
        localDataFilms = tempArray.watched;
      } else {
        localDataFilms = tempArray.queue;
      }
    }
  }
}

function renderModalMarkup(data) {
  return modalCardRef.insertAdjacentHTML('beforeend', createMarkupModal(data));
}
function closeModal() {
  document.body.classList.remove('modal-open');
  modalCloseBtnRef.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', closeModalOnEsc);
  modalBackdropRef.removeEventListener('click', closeLoginModalOnAreaClick);
  modalBackdropRef.classList.add('is-hidden');
  modalCardRef.lastChild.remove();
}

function closeModalOnEsc(e) {
  e.key === 'Escape' ? closeModal() : null;
}
function closeLoginModalOnAreaClick(e) {
  if (e.target.classList.contains('backdrop')) {
    closeModal();
  }
}

function parseToArray(ref) {
  return Array.from(ref.children);
}

function openRandomModal(filmData) {
  document.body.classList.add('modal-open');
  modalCloseBtnRef.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModalOnEsc);
  modalBackdropRef.addEventListener('click', closeLoginModalOnAreaClick);
  modalBackdropRef.classList.remove('is-hidden');
  const filmId = Number(filmData.id);
  let arrayData = {};
  renderModalMarkup(filmData);
  const modalButtonsRef = document.querySelector('.modal-buttons');
  if (USER_ID) {
    if (!JSON.parse(localStorage.getItem(USER_ID))) {
      refreshEmptyArray(parseToArray(modalButtonsRef));
      localStorage.setItem(USER_ID, JSON.stringify(arrayData));
    }
  }
  modalButtonsRef.addEventListener('click', handleUpdadeFilmData);
  refreshModalButtons(filmId);
  function handleUpdadeFilmData(e) {
    const key = e.target.dataset.action;
    onAuthStateChanged(auth, user => {
      if (user) {
        updateToLocal(filmData, key);
        refreshModalButtons(filmId);
      } else return isLogin(USER_ID);
    });
  }
  function isLogin(userId) {
    if (!userId) {
      if (selectedLang.checked) {
        return notificationLaunch(
          'Будь ласка, зареєструйтеся або увійдіть для користування бібліотекою'
        );
      }
      return notificationLaunch('Please register or login to use the library');
    }
  }
  function updateToLocal(data, key) {
    arrayData = JSON.parse(localStorage.getItem(USER_ID));
    if (arrayData[key].some(value => value.id === data.id)) {
      arrayData[key] = removeFilm(arrayData, data.id, key);
      localStorage.setItem(USER_ID, JSON.stringify(arrayData));
      return;
    }
    arrayData[key].push(data);
    localStorage.setItem(USER_ID, JSON.stringify(arrayData));
  }
  function refreshEmptyArray(buttonsRef) {
    buttonsRef.map(btn => {
      arrayData[btn.dataset.action] = [];
    });
  }
  function refreshModalButtons(filmId) {
    onAuthStateChanged(auth, user => {
      if (user) {
        USER_ID = user.uid;
        let localDataFilm = JSON.parse(localStorage.getItem(USER_ID));
        parseToArray(modalButtonsRef).map(btnRef => {
          const key = btnRef.dataset.action;
          localDataFilm = JSON.parse(localStorage.getItem(USER_ID));
          if (localDataFilm[key].length !== 0) {
            for (const filmData of localDataFilm[key]) {
              if (filmData.id === filmId) {
                if (selectedLang.checked) {
                  btnRef.textContent = `Видалити з ${btnRef.dataset.lang}`;
                  btnRef.classList.replace(
                    'modal-button',
                    'modal-button--active'
                  );
                } else {
                  btnRef.textContent = `Remove from ${key}`;
                  btnRef.classList.replace(
                    'modal-button',
                    'modal-button--active'
                  );
                }
                return;
              } else {
                if (selectedLang.checked) {
                  btnRef.textContent = `Додати до ${btnRef.dataset.lang}`;
                  btnRef.classList.replace(
                    'modal-button--active',
                    'modal-button'
                  );
                } else {
                  btnRef.textContent = `Add to ${key}`;
                  btnRef.classList.replace(
                    'modal-button--active',
                    'modal-button'
                  );
                }
              }
            }
          } else {
            if (selectedLang.checked) {
              btnRef.textContent = `Додати до ${btnRef.dataset.lang}`;
              btnRef.classList.replace('modal-button--active', 'modal-button');
            } else {
              btnRef.textContent = `Add to ${key}`;
              btnRef.classList.replace('modal-button--active', 'modal-button');
            }
          }
        });
      }
    });
  }
  function removeFilm(data, id, key) {
    const updatedArray = data[key].filter(value => value.id !== id);
    return updatedArray;
  }
}
