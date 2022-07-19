import { createMarkupModal } from './film-modal-render';
import { USER_ID } from './auth';

const modalBackdropRef = document.querySelector('.modal-backdrop--hidden');
const modalCardRef = document.querySelector('.modal-card');
const modalCloseBtnRef = document.querySelector('.modal-close');
const listFilmsRef = document.querySelector('.list-films');

listFilmsRef.addEventListener('click', openModal);
//Функия рендера разметки, принимает массив с данными о фильме
function renderModalMarkup(data) {
  return modalCardRef.insertAdjacentHTML('beforeend', createMarkupModal(data));
}

function closeModal() {
  //Очищаем разметку
  modalCardRef.lastChild.remove();
  //Удаляем слушатель кнопки закрытия модалки
  modalCloseBtnRef.removeEventListener('click', closeModal);

  //Скрываем модалку
  modalBackdropRef.classList.replace(
    'modal-backdrop',
    'modal-backdrop--hidden'
  );
}

function openModal(e) {
  //проверка на клик по карточке
  if (!e.target.closest('li')) {
    return;
  }
  //Добавление слушателя на кнопку закрытия
  modalCloseBtnRef.addEventListener('click', closeModal);
  //Отображение модалки
  modalBackdropRef.classList.replace(
    'modal-backdrop--hidden',
    'modal-backdrop'
  );
  // id фильма с карточки
  const filmId = Number(e.target.closest('li').dataset.id);
  //массив популярных фильмов с локального хранилища
  const localDataFilm = JSON.parse(localStorage.getItem('downloadedMovies'));
  //Поиск данных про текущий фильм в карточке из массива в локальном хранилище
  //Возвращает обьект фильма
  const currentFilmData = localDataFilm.find(film => {
    return film.id === filmId;
  });
  //Рендер разметки в модальном окне
  renderModalMarkup(currentFilmData);

  ////////////////////////////////////////////////////////////////////////////////

  let arrayData = {
    watched: [],
    queue: [],
  };

  const modalButtonsRef = document.querySelector('.modal-buttons');
  const btns = Array.from(modalButtonsRef.children);
  // console.log(modalButtonsRef);

  modalButtonsRef.addEventListener('click', e => {
    // console.log('click');
    const key = e.target.dataset.action;

    addToLocal(currentFilmData, key);
    refreshModalButtons(filmId);
  });

  refreshModalButtons(filmId);

  function addToLocal(data, key) {
    // Проверка на логин
    if (!USER_ID) {
      alert('please log in or sign up');
      return;
    }

    // Создаем пустое хранилище, если до этого его небыло
    if (!JSON.parse(localStorage.getItem(USER_ID))) {
      localStorage.setItem(USER_ID, JSON.stringify(arrayData));
    }

    // Вытягиваем из хранилища текущие данные, для дальнейшей работы
    arrayData = JSON.parse(localStorage.getItem(USER_ID));

    // Проверка на наличие фильма в хранилище. Если есть - удаляем
    if (arrayData[key].some(value => value.id === data.id)) {
      arrayData[key] = removeToLocal(arrayData, data.id, key);
      // console.dir(modalButtonsRef);
      return localStorage.setItem(USER_ID, JSON.stringify(arrayData));
    }
    //Запись в массив обновленных данных
    arrayData[key].push(data);
    // Запись в хранилище массива
    localStorage.setItem(USER_ID, JSON.stringify(arrayData));
  }

  function removeToLocal(data, id, key) {
    btns.map(e => {
      if (e.dataset.action === key) {
        e.textContent = `Add to ${key}`;
        return;
      }
    });
    const updatedArray = data[key].filter(value => value.id !== id);
    return updatedArray;
  }

  function refreshModalButtons(filmId) {
    arrayData = JSON.parse(localStorage.getItem(USER_ID));

    btns.map(e => {
      const key = e.dataset.action;
      arrayData[key].map(i => {
        if (i.id === filmId) {
          e.textContent = `Remove from ${key}`;

          return;
        }
      });
    });
  }
}
