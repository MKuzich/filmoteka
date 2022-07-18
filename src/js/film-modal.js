import { createMarkupModal } from './film-modal-render';

const uid = 'qPtYne1lNfWrtdJJYcg4nv78kwr1';

const modalBackdropRef = document.querySelector('.modal-backdrop--hidden');
const modalCardRef = document.querySelector('.modal-card');
const modalCloseBtnRef = document.querySelector('.modal-close');
const listFilmsRef = document.querySelector('.list-films');
let modalBtnRef;
let modalQueueBtnRef;

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
  const filmId = e.target.closest('li').dataset.id;
  //массив популярных фильмов с локального хранилища
  const localDataFilm = JSON.parse(localStorage.getItem('downloadedMovies'));
  //Поиск данных про текущий фильм в карточке из массива в локальном хранилище
  //Возвращает обьект фильма
  const currentFilmData = localDataFilm.find(film => {
    return film.id === Number(filmId);
  });
  //Рендер разметки в модальном окне
  renderModalMarkup(currentFilmData);

  ////////////////////////////////////////////////////////////////////////////////
  modalWatchBtnRef = document.querySelector(
    '.modal-button[data-action="watch"]'
  );
  modalQueueBtnRef = document.querySelector(
    '.modal-button[data-action="queue"]'
  );

  let arrayData = {
    watched: [],
    queue: [],
  };

  function addToWatch(data) {
    if (!JSON.parse(localStorage.getItem(uid))) {
      localStorage.setItem(uid, JSON.stringify(arrayData));
    }
    arrayData = JSON.parse(localStorage.getItem(uid));

    if (arrayData.watched.some(value => value.id === data.id)) {
      arrayData.watched = removeToWatch(arrayData, data.id);
      return localStorage.setItem(uid, JSON.stringify(arrayData));
    }

    arrayData.watched.push(data);

    localStorage.setItem(uid, JSON.stringify(arrayData));
  }
  function removeToWatch(data, id) {
    const newArr = data.watched.filter(value => value.id !== id);
    return newArr;
  }
  modalWatchBtnRef.addEventListener('click', () => addToWatch(currentFilmData));
}

// const test = {
//   id: {
//     watched: [{},{}],
//     queue: [{},{}],
//   },
// };
