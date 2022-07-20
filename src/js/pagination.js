import { movieSearcher, inputValue } from './search-film';
import { createMarkupPaginationBtn } from './pagination-markup';

export let currentPage = 1;
export let max_page = 50;

const galleryRef = document.querySelector('.library-cards-film');

createMarkupPaginationBtn();

galleryRef.addEventListener('click', handlePage);

function handlePage(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const overlayListRef = document.querySelector('#overlay-list');
  overlayListRef.remove();
  if (e.target.dataset.action === 'flip-left') {
    overlayListRef.remove();
    currentPage--;
    createMarkupPaginationBtn();
    return;
  }
  if (e.target.dataset.action === 'flip-right') {
    overlayListRef.remove();
    currentPage++;

    createMarkupPaginationBtn();
    return;
  }
  currentPage = Number(e.target.textContent);
  createMarkupPaginationBtn();
}
