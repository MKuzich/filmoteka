import { createMarkupModal } from './film-modal-render';
import { USER_ID } from './auth';

const selectedLang = document.querySelector('#checkbox');

const modalBackdropRef = document.querySelector('[data-film-modal]');
const modalCardRef = document.querySelector('.modal-card');
const modalCloseBtnRef = document.querySelector('.modal-close');
const listFilmsRef = document.querySelector('.list-films');

listFilmsRef.addEventListener('click', openModal);

//Функия рендера разметки, принимает массив с данными о фильме
function renderModalMarkup(data) {
  return modalCardRef.insertAdjacentHTML('beforeend', createMarkupModal(data));
}

function closeModal() {
  //Удаляем слушатель кнопки закрытия модалки
  modalCloseBtnRef.removeEventListener('click', closeModal);

  //Скрываем модалку
  modalBackdropRef.classList.add('is-hidden');

  //Очищаем разметку
  modalCardRef.lastChild.remove();
}

function openModal(e) {
  //проверка на клик по карточке
  if (!e.target.closest('li')) {
    return;
  }

  let arrayData = {};

  //Добавление слушателя на кнопку закрытия
  modalCloseBtnRef.addEventListener('click', closeModal);

  //Отображение модалки
  modalBackdropRef.classList.remove('is-hidden');

  // id фильма с карточки
  const filmId = Number(e.target.closest('li').dataset.id);
  //массив популярных фильмов с локального хранилища
  const localDataFilms = JSON.parse(localStorage.getItem('downloadedMovies'));
  //Поиск данных про текущий фильм в карточке из массива в локальном хранилище
  //Возвращает обьект фильма
  const currentFilmData = localDataFilms.find(film => {
    return film.id === filmId;
  });

  //Рендер разметки в модальном окне
  renderModalMarkup(currentFilmData);
  //
  //Ссылка на родителя кнопок
  const modalButtonsRef = document.querySelector('.modal-buttons');

  //Функция которая создает хранилище с ключами из data атрибутов кнопок
  function refreshEmptyArray(buttonsRef) {
    buttonsRef.map(btn => {
      arrayData[btn.dataset.action] = [];
    });
  }

  // Создаем пустое хранилище, если до этого его небыло
  if (USER_ID) {
    if (!JSON.parse(localStorage.getItem(USER_ID))) {
      refreshEmptyArray(parseToArray(modalButtonsRef));
      localStorage.setItem(USER_ID, JSON.stringify(arrayData));
    }
  }
  modalButtonsRef.addEventListener('click', handleUpdadeFilmData);
  function handleUpdadeFilmData(e) {
    const key = e.target.dataset.action;
    updateToLocal(currentFilmData, key);
    refreshModalButtons(filmId);
  }

  function updateToLocal(data, key) {
    // Проверка на логин
    if (!USER_ID) {
      alert('please log in or sign up');
      return;
    }

    // Вытягиваем из хранилища текущие данные, для дальнейшей работы
    arrayData = JSON.parse(localStorage.getItem(USER_ID));

    // Проверка на наличие фильма в хранилище. Если есть - удаляем
    if (arrayData[key].some(value => value.id === data.id)) {
      arrayData[key] = removeFilm(arrayData, data.id, key);
      // console.dir(modalButtonsRef);
      localStorage.setItem(USER_ID, JSON.stringify(arrayData));
      return;
    }
    //Запись в массив обновленных данных
    arrayData[key].push(data);
    // Запись в хранилище массива
    localStorage.setItem(USER_ID, JSON.stringify(arrayData));
  }

  // Функция удаляет фильм из текущих данных
  function removeFilm(data, id, key) {
    const updatedArray = data[key].filter(value => value.id !== id);
    return updatedArray;
  }
  refreshModalButtons(filmId);

  // Функция обновления содержимого кнопок
  function refreshModalButtons(filmId) {
    let localDataFilm = JSON.parse(localStorage.getItem(USER_ID));
    parseToArray(modalButtonsRef).map(btnRef => {
      const key = btnRef.dataset.action;
      localDataFilm = JSON.parse(localStorage.getItem(USER_ID));
      if (localDataFilm[key].length !== 0) {
        for (const filmData of localDataFilm[key]) {
          if (filmData.id === filmId) {
            if (selectedLang.checked) {
              btnRef.textContent = `Видалити з ${btnRef.dataset.lang}`;
              btnRef.classList.replace('modal-button', 'modal-button--active');
            } else {
              btnRef.textContent = `Remove from ${key}`;
              btnRef.classList.replace('modal-button', 'modal-button--active');
            }
            return;
          } else {
            if (selectedLang.checked) {
              btnRef.textContent = `Додати до ${btnRef.dataset.lang}`;
              btnRef.classList.replace('modal-button--active', 'modal-button');
            } else {
              btnRef.textContent = `Add to ${key}`;
              btnRef.classList.replace('modal-button--active', 'modal-button');
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

  //Превращает HTMLCollect в Array
  function parseToArray(ref) {
    return Array.from(ref.children);
  }
}
