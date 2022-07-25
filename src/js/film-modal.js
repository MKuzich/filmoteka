import { createMarkupModal } from './film-modal-render';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { notificationLaunch } from './notification-modal';
import { fetchTrendingMovies } from './api/api-service-trending';

//Firebase
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
  //Добавляем класс для запрета прокрутки заднего фона
  document.body.classList.add('modal-open');

  //Проверка на клик по карточке
  if (!e.target.closest('li')) {
    return;
  }

  let arrayData = {};

  //Добавление слушателя на кнопку закрытия
  modalCloseBtnRef.addEventListener('click', closeModal);
  //Добавление слушателя на ESC
  document.addEventListener('keydown', closeModalOnEsc);
  //Добавление слушателя на клик по backdrop
  modalBackdropRef.addEventListener('click', closeLoginModalOnAreaClick);
  //Отображение модалки
  modalBackdropRef.classList.remove('is-hidden');
  // id фильма с карточки
  const filmId = Number(e.target.closest('li').dataset.id);
  //массив популярных фильмов с локального хранилища
  let localDataFilms = JSON.parse(localStorage.getItem('downloadedMovies'));
  //Поиск данных про текущий фильм в карточке из массива в локальном хранилище
  //Возвращает обьект фильма
  inLibrary();
  const currentFilmData = localDataFilms.find(film => {
    return film.id === filmId;
  });

  //Рендер разметки в модальном окне
  renderModalMarkup(currentFilmData);
  //Ссылка на родителя кнопок в модалке(после рендера разметки)
  const modalButtonsRef = document.querySelector('.modal-buttons');
  // Создаем пустое хранилище, если до этого его небыло
  if (USER_ID) {
    if (!JSON.parse(localStorage.getItem(USER_ID))) {
      refreshEmptyArray(parseToArray(modalButtonsRef));
      localStorage.setItem(USER_ID, JSON.stringify(arrayData));
    }
  }
  //Добавления слушателя на клик по кнопкам в модалке
  modalButtonsRef.addEventListener('click', handleUpdadeFilmData);
  refreshModalButtons(filmId);
  //Функция обновления данных/кнопок при клике
  function handleUpdadeFilmData(e) {
    const key = e.target.dataset.action;
    onAuthStateChanged(auth, user => {
      if (user) {
        updateToLocal(currentFilmData, key);
        refreshModalButtons(filmId);
      } else return isLogin(USER_ID);
    });
  }
  //Проверка на логин
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
  //Функция записи обновленных данных в localStorage
  function updateToLocal(data, key) {
    // Вытягиваем из хранилища текущие данные, для дальнейшей работы
    arrayData = JSON.parse(localStorage.getItem(USER_ID));
    // Проверка на наличие фильма в хранилище. Если есть - удаляем
    if (arrayData[key].some(value => value.id === data.id)) {
      arrayData[key] = removeFilm(arrayData, data.id, key);
      localStorage.setItem(USER_ID, JSON.stringify(arrayData));
      return;
    }
    //Запись в массив обновленных данных
    arrayData[key].push(data);
    // Запись в хранилище массива
    localStorage.setItem(USER_ID, JSON.stringify(arrayData));
  }
  //Функция которая создает хранилище с ключами из data атрибутов кнопок
  function refreshEmptyArray(buttonsRef) {
    buttonsRef.map(btn => {
      arrayData[btn.dataset.action] = [];
    });
  }
  // Функция обновления содержимого кнопок
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
  // Функция удаляет фильм из текущих данных
  function removeFilm(data, id, key) {
    const updatedArray = data[key].filter(value => value.id !== id);
    return updatedArray;
  }
  // Функция проверяет выбор библеотеки и подставляет данные для модалки
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
//Функия рендера разметки, принимает массив с данными о фильме
function renderModalMarkup(data) {
  return modalCardRef.insertAdjacentHTML('beforeend', createMarkupModal(data));
}
//Функция закрытия модального окна
function closeModal() {
  //Убираем класс для запрета прокрутки заднего фона
  document.body.classList.remove('modal-open');
  //Убираем слушателя на кнопку закрытия
  modalCloseBtnRef.removeEventListener('click', closeModal);
  //Убираем слушателя на ESC
  document.removeEventListener('keydown', closeModalOnEsc);
  //Убираем слушателя на клик по backdrop
  modalBackdropRef.removeEventListener('click', closeLoginModalOnAreaClick);

  //Скрываем модалку
  modalBackdropRef.classList.add('is-hidden');

  //Очищаем разметку
  modalCardRef.lastChild.remove();
}
//Функция закрытия модалки по ESC
function closeModalOnEsc(e) {
  e.key === 'Escape' ? closeModal() : null;
} //Функция закрытия по клику на backdrop
function closeLoginModalOnAreaClick(e) {
  if (e.target.classList.contains('backdrop')) {
    closeModal();
  }
}
//Функция превращает коллекцию в массив
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
