const menuHome = document.querySelector('#homeL');
const menuLibrary = document.querySelector('#libraryL');

const btnWatched = document.querySelector('[data-watched-btn]');
const btnQueue = document.querySelector('[data-queue-btn]');

export function libraryHeaderEn() {
    btnWatched.textContent = 'Watched';
    btnQueue.textContent = 'Queue';
    menuHome.textContent = 'Home';
    menuLibrary.textContent = 'My library';
};

export function libraryHeaderUk() {
    menuHome.textContent = 'Домашня';
    menuLibrary.textContent = 'Моя бібліотека';
    btnWatched.textContent = 'Переглянуті';
    btnQueue.textContent = 'В черзі';

}