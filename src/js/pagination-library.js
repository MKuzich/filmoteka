import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { markupLibraryRender } from './library';
import { currentFilter } from './library';

let USER_ID = null;
const auth = getAuth();
onAuthStateChanged(auth, user => {
  if (user) {
    USER_ID = user.uid;
  }
});

export let currentPageLibrary = {
  data: 1,
  totalData: null,
  setTotalData: function (prop) {
    const ArrFilms = JSON.parse(localStorage.getItem(USER_ID));
    this.totalData = Math.ceil(ArrFilms[prop].length / 9);
  },
  dataUpdate: function () {
    if (localStorage.getItem('current-page')) {
      this.data = Number(localStorage.getItem('current-page'));
      return this.data;
    } else return;
  },
  change: function (prop) {
    this.data = prop;
    localStorage.setItem('current-page', prop);
  },
};

const galleryRef = document.querySelector('.library-cards-film');

galleryRef.addEventListener('click', handlePage);

function handlePage(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const overlayListRef = document.querySelector('#overlay-list-library');
  if (!overlayListRef) {
    return;
  }
  currentPageLibrary.change(Number(e.target.textContent));
  overlayListRef.remove();
  takeInfoFromLocal(currentFilter.data);
  window.scrollTo(0, 0);
}

function takeInfoFromLocal(filter) {
  const arrayFilmsFromLS = JSON.parse(localStorage.getItem(USER_ID));
  let arrayFilms = arrayFilmsFromLS[filter];
  currentPageLibrary.setTotalData(currentFilter.data);
  if (arrayFilms.length > 9) {
    let start = (currentPageLibrary.data - 1) * 9;
    let end = start + 9;
    arrayFilms = arrayFilms.slice(start, end);
    markupLibraryRender(USER_ID, arrayFilms);
    return;
  }
  markupLibraryRender(USER_ID, arrayFilms);
}

export function createMarkupPaginationLibraryBtn(idForPagination) {
  const overlayListLibraryRef = document.querySelector('#overlay-list-library');
  if (overlayListLibraryRef) {
    overlayListLibraryRef.remove();
  }
  currentPageLibrary.setTotalData(currentFilter.data);
  let data = '';
  for (let i = 1; i <= currentPageLibrary.totalData; i++) {
    data += createPaginationOneBtn(i);
  }
  data = `<div class='overlay-pagination' id='${idForPagination}'>${data}</div>`;
  galleryRef.insertAdjacentHTML('beforeend', data);
}

function createPaginationOneBtn(num) {
  let arrayBtn = '';
  if (num === currentPageLibrary.data) {
    return (arrayBtn += `<button class='btn-pagination-active'>${num}</button>`);
  }
  return (arrayBtn += `<button class='btn-pagination'>${num}</button>`);
}
