import { trendingMarkup, TIME_WINDOW } from './trending-markup';

export let currentPage = {
  data: 1,
  dataUpdate: function () {
    if (localStorage.getItem('current-page')) {
      this.data = Number(localStorage.getItem('current-page'));
    } else return;
  },
  change: function (prop) {
    this.data = prop;
    localStorage.setItem('current-page', prop);
  },
  plusOne: function () {
    this.data++;
    localStorage.setItem('current-page', this.data);
  },
  minusOne: function () {
    this.data--;
    localStorage.setItem('current-page', this.data);
  },
};
const galleryRef = document.querySelector('.library-cards-film');
galleryRef.addEventListener('click', handlePage);
const filmotekaRef = document.querySelector('.logo');
filmotekaRef.addEventListener('click', () => {
  currentPage.change(1);
});

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
