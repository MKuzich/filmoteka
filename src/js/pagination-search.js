import { movieSearcher, inputValue } from './search-film';
import { currentPage } from './pagination';

const galleryRef = document.querySelector('.library-cards-film');

galleryRef.addEventListener('click', handlePage);

function handlePage(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const overlayListRef = document.querySelector('#overlay-list-search');
  if (!overlayListRef) {
    return;
  }
  overlayListRef.remove();
  if (e.target.dataset.action === 'flip-left') {
    overlayListRef.remove();
    currentPage.minusOne();
    movieSearcher(inputValue, currentPage.data);
    window.scrollTo(0, 0);
    return;
  }
  if (e.target.dataset.action === 'flip-right') {
    overlayListRef.remove();
    currentPage.plusOne();
    movieSearcher(inputValue, currentPage.data);
    window.scrollTo(0, 0);
    return;
  }
  currentPage.change(Number(e.target.textContent));
  overlayListRef.remove();
  movieSearcher(inputValue, currentPage.data);
  window.scrollTo(0, 0);
}
