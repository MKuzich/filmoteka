const menuHome = document.querySelector('#home');
const menuLibrary = document.querySelector('#library');
const searchInput = document.querySelector('.search-form-input');

const popularBy = document.querySelector('.trending-selector-text');
const btnDay = document.querySelector('#btnDay');
const btnWeek = document.querySelector('#btnWeek');

export function homeHeaderEn() {
    menuHome.textContent = 'Home';
  menuLibrary.textContent = 'My library';
  searchInput.setAttribute('placeholder', 'Movie search');
  popularBy.textContent = 'Popular by';
  btnDay.textContent = 'Day';
  btnWeek.textContent = 'Week';
};
export function homeHeaderUk() {
    menuHome.textContent = 'Домашня';
    menuLibrary.textContent = 'Моя бібліотека';
    searchInput.setAttribute('placeholder', 'Пошук фільмів');
    popularBy.textContent = 'Популярні за';
    btnDay.textContent = 'День';
    btnWeek.textContent = 'Тиждень';

}