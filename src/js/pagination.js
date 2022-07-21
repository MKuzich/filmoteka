import { trendingMarkup, TIME_WINDOW, totalPages } from './trending-markup';

export let currentPage = {
  data: 1,
  change: function (prop) {
    this.data = prop;
  },
  plusOne: function (prop) {
    this.data++;
  },
  minusOne: function (prop) {
    this.data--;
  },
};
const galleryRef = document.querySelector('.library-cards-film');

galleryRef.addEventListener('click', handlePage);

function handlePage(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const overlayListRef = document.querySelector('#overlay-list-trends');
  if (!overlayListRef) {
    return;
  }
  overlayListRef.remove();
  if (e.target.dataset.action === 'flip-left') {
    overlayListRef.remove();
    currentPage.minusOne();
    trendingMarkup(TIME_WINDOW, currentPage.data);
    window.scrollTo(0, 0);
    return;
  }
  if (e.target.dataset.action === 'flip-right') {
    overlayListRef.remove();
    currentPage.plusOne();
    trendingMarkup(TIME_WINDOW, currentPage.data);
    window.scrollTo(0, 0);
    return;
  }
  currentPage.change(Number(e.target.textContent));
  overlayListRef.remove();
  trendingMarkup(TIME_WINDOW, currentPage.data);
  window.scrollTo(0, 0);
}
