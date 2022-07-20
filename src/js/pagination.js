import { movieSearcher, inputValue } from './search-film';
import { createMarkupPaginationBtn } from './pagination-markup';
import { trendingMarkup, TIME_WINDOW, totalPages } from './trending-markup';

export let currentPage = 1;

const galleryRef = document.querySelector('.library-cards-film');

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
    trendingMarkup(TIME_WINDOW, currentPage);
    window.scrollTo(0, 0);
    return;
  }
  if (e.target.dataset.action === 'flip-right') {
    overlayListRef.remove();
    currentPage++;
    trendingMarkup(TIME_WINDOW, currentPage);
    window.scrollTo(0, 0);
    return;
  }
  currentPage = Number(e.target.textContent);
  overlayListRef.remove();
  trendingMarkup(TIME_WINDOW, currentPage);
  window.scrollTo(0, 0);
}
