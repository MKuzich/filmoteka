import { movieSearcher, inputValue } from './search-film';
import { currentPage } from './pagination';

const galleryRef = document.querySelector('.library-cards-film');

const btnLeft = `<button class='btn-pagination-arrow' data-action='flip-left'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6666 8H3.33325" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.99992 12.6667L3.33325 8.00004L7.99992 3.33337" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>`;
const btnRight = `<button class='btn-pagination-arrow' data-action='flip-right'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33341 8H12.6667" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.00008 12.6667L12.6667 8.00004L8.00008 3.33337" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>`;

const text = `<span class='btn-pagination-text'><svg width="10" height="10" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.61719 0.5C1.88281 0.5 2.08789 0.576172 2.23242 0.728516C2.37695 0.876953 2.44922 1.06445 2.44922 1.29102C2.44922 1.51367 2.37695 1.69922 2.23242 1.84766C2.08789 1.99219 1.88281 2.06445 1.61719 2.06445C1.36328 2.06445 1.16211 1.99219 1.01367 1.84766C0.865234 1.70312 0.791016 1.51758 0.791016 1.29102C0.791016 1.06445 0.863281 0.876953 1.00781 0.728516C1.15234 0.576172 1.35547 0.5 1.61719 0.5ZM4.96875 0.5C5.23438 0.5 5.43945 0.576172 5.58398 0.728516C5.72852 0.876953 5.80078 1.06445 5.80078 1.29102C5.80078 1.51367 5.72852 1.69922 5.58398 1.84766C5.43945 1.99219 5.23438 2.06445 4.96875 2.06445C4.71484 2.06445 4.51367 1.99219 4.36523 1.84766C4.2168 1.70312 4.14258 1.51758 4.14258 1.29102C4.14258 1.06445 4.21484 0.876953 4.35938 0.728516C4.50391 0.576172 4.70703 0.5 4.96875 0.5ZM8.32031 0.5C8.58594 0.5 8.79102 0.576172 8.93555 0.728516C9.08008 0.876953 9.15234 1.06445 9.15234 1.29102C9.15234 1.51367 9.08008 1.69922 8.93555 1.84766C8.79102 1.99219 8.58594 2.06445 8.32031 2.06445C8.06641 2.06445 7.86523 1.99219 7.7168 1.84766C7.56836 1.70312 7.49414 1.51758 7.49414 1.29102C7.49414 1.06445 7.56641 0.876953 7.71094 0.728516C7.85547 0.576172 8.05859 0.5 8.32031 0.5Z" fill="black"/>
</svg></span>`;

function createPaginationOneBtn(num, logic) {
  let arrayBtn = '';
  if (logic) {
    return (arrayBtn += `<button class="btn-pagination pagination-dots" disabled='true'>...</button>`);
  } else if (num === currentPage) {
    return (arrayBtn += `<button class='btn-pagination-active'>${num}</button>`);
  }
  return (arrayBtn += `<button class='btn-pagination'>${num}</button>`);
}

export function createMarkupPaginationBtn(totalPage) {
  let data = '';
  if (currentPage < 6) {
    data += createPaginationOneBtn(1);
    data += createPaginationOneBtn(2);
    data += createPaginationOneBtn(3);
    data += createPaginationOneBtn(4);
    data += createPaginationOneBtn(5);
    data += createPaginationOneBtn(6);
    data += createPaginationOneBtn(7);
    data += createPaginationOneBtn(currentPage, true);
    data += createPaginationOneBtn(totalPage);
    data += btnRight;
    data = `<div class='overlay-pagination' id='overlay-list'>${data}</div>`;
    galleryRef.insertAdjacentHTML('beforeend', data);
  } else if (currentPage <= totalPage - 5) {
    if (window.matchMedia('(min-width: 768px)').matches) {
      data += btnLeft;
      data += createPaginationOneBtn(1);
      data += createPaginationOneBtn(currentPage, true);
      data += createPaginationOneBtn(currentPage - 2);
      data += createPaginationOneBtn(currentPage - 1);
      data += createPaginationOneBtn(currentPage);
      data += createPaginationOneBtn(currentPage + 1);
      data += createPaginationOneBtn(currentPage + 2);
      data += createPaginationOneBtn(currentPage, true);
      data += createPaginationOneBtn(totalPage);
      data += btnRight;
      data = `<div class='overlay-pagination' id='overlay-list'>${data}</div>`;
      galleryRef.insertAdjacentHTML('beforeend', data);
      return;
    } else {
    }
    data += btnLeft;
    data += createPaginationOneBtn(1);
    data += createPaginationOneBtn(currentPage, true);
    data += createPaginationOneBtn(currentPage - 1);
    data += createPaginationOneBtn(currentPage);
    data += createPaginationOneBtn(currentPage + 1);
    data += createPaginationOneBtn(currentPage, true);
    data += createPaginationOneBtn(totalPage);
    data += btnRight;
    data = `<div class='overlay-pagination' id='overlay-list'>${data}</div>`;
    galleryRef.insertAdjacentHTML('beforeend', data);
  } else {
    data += btnLeft;
    data += createPaginationOneBtn(1);
    data += createPaginationOneBtn(currentPage, true);
    data += createPaginationOneBtn(totalPage - 6);
    data += createPaginationOneBtn(totalPage - 5);
    data += createPaginationOneBtn(totalPage - 4);
    data += createPaginationOneBtn(totalPage - 3);
    data += createPaginationOneBtn(totalPage - 2);
    data += createPaginationOneBtn(totalPage - 1);
    data += createPaginationOneBtn(totalPage);
    data = `<div class='overlay-pagination' id='overlay-list'>${data}</div>`;
    galleryRef.insertAdjacentHTML('beforeend', data);
  }
}
