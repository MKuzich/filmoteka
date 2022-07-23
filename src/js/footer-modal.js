import { footerModalEn, footerModalUa } from "./ua/footer-modal-ua";

const refs = {
  openModal: document.querySelector('.footer__link'),
  closeModal: document.querySelector('[data-footer-modal-close]'),
  modalWindow: document.querySelector('[data-footer-modal]'),

  modalContainer:document.querySelector('.modal__container')
};


refs.openModal.addEventListener('click', openFooterModal);
refs.closeModal.addEventListener('click', closeFooterModal);

function openFooterModal() {
  

  document.body.classList.add('modal-open');


  if(localStorage.getItem('localLang') === 'uk') {
    footerModalUa();  
  } else {
    footerModalEn();
  };
  refs.modalWindow.classList.remove('is-hidden');
  document.addEventListener('keydown', closeModalOnEsc);
  refs.modalWindow.addEventListener('click', closeFooterModalOnAreaClick);
  

}

function closeFooterModal() {
  document.body.classList.remove('modal-open');
  refs.modalWindow.classList.add('is-hidden');
  document.removeEventListener('keydown', closeModalOnEsc);
  refs.modalWindow.removeEventListener('click', closeFooterModalOnAreaClick);
}

function closeFooterModalOnAreaClick(e) {
  if (e.target.classList.contains('footer__backdrop')) {
    closeFooterModal();
  }
}

function closeModalOnEsc(e) {
  e.key === 'Escape' ? closeFooterModal() : null;
}

// ефект для карточек

const nodes = [].slice.call(document.querySelectorAll('li'), 0);
const directions = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' };
const classNames = ['in', 'out'].map(p => Object.values(directions).map(d => `${p}-${d}`)).reduce((a, b) => a.concat(b));

const getDirectionKey = (ev, node) => {
  const { width, height, top, left } = node.getBoundingClientRect();
  const l = ev.pageX - (left + window.pageXOffset);
  const t = ev.pageY - (top + window.pageYOffset);
  const x = l - width / 2 * (width > height ? height / width : 1);
  const y = t - height / 2 * (height > width ? width / height : 1);
  return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
};

class Item {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('mouseover', ev => this.update(ev, 'in'));
    this.element.addEventListener('mouseout', ev => this.update(ev, 'out'));
  }

  update(ev, prefix) {
    this.element.classList.remove(...classNames);
    this.element.classList.add(`${prefix}-${directions[getDirectionKey(ev, this.element)]}`);
  }}


nodes.forEach(node => new Item(node));

