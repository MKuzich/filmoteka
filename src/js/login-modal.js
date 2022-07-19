import { signUpEn } from "./ua/signUpEn";
import { signUpUk } from "./ua/signUpUk";

const refs = {
  openModalBtn: document.querySelector('[data-login-modal-open]'),
  closeModalBtn: document.querySelector('[data-login-modal-close]'),
  modal: document.querySelector('[data-login-modal]'),
  title: document.querySelector('.signup-modal'),
};

//global 
const selectedLang = document.querySelector("#checkbox");


refs.openModalBtn.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeLoginModal);

function closeLoginModalOnAreaClick(e) {
  if (e.target.classList.contains('backdrop')) {
    closeLoginModal();
  }
}

function closeModalOnEsc(e) {
  e.key === 'Escape' ? closeLoginModal() : null;
}

export function closeLoginModal() {
  document.body.classList.remove('modal-open');
  refs.modal.classList.add('is-hidden');
  document.removeEventListener('keydown', closeModalOnEsc);
  refs.modal.removeEventListener('click', closeLoginModalOnAreaClick);
}

function openModal() {
  
  document.body.classList.add('modal-open');
  refs.modal.classList.remove('is-hidden');
  document.addEventListener('keydown', closeModalOnEsc);
  refs.modal.addEventListener('click', closeLoginModalOnAreaClick);
  
  // console.log(selectedLang.checked);
  if(selectedLang.checked) {
    // console.log('uk');
    refs.modal.innerHTML = signUpUk;
  } else {
    // console.log('en');
    refs.modal.innerHTML = signUpEn;

  }
}
