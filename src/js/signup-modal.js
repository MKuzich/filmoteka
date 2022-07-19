import { signUpEn } from "./ua/signUpEn";
import { signUpUk } from "./ua/signUpUk";

const refs = {
  openModalBtn: document.querySelector('[data-signup-modal-open]'),
  closeModalBtn: document.querySelector('[data-signup-modal-close]'),
  modal: document.querySelector('[data-signup-modal]'),
};

const selectedLang = document.querySelector("#checkbox");


refs.openModalBtn.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeSignupModal);

function closeSignupModalOnAreaClick(e) {
  if (e.target.classList.contains('backdrop')) {
    closeSignupModal();
  }
}

function closeModalOnEsc(e) {
  e.key === 'Escape' ? closeSignupModal() : null;
}

export function closeSignupModal() {
  document.body.classList.remove('modal-open');
  refs.modal.classList.add('is-hidden');
  document.removeEventListener('keydown', closeModalOnEsc);
  refs.modal.removeEventListener('click', closeSignupModalOnAreaClick);
}

function openModal() {
  document.body.classList.add('modal-open');
  refs.modal.classList.remove('is-hidden');
  document.addEventListener('keydown', closeModalOnEsc);
  refs.modal.addEventListener('click', closeSignupModalOnAreaClick);

  if (selectedLang.checked) {
    console.log('uk');
    refs.modal.innerHTML = signUpUk;    
  } else {
console.log('en')
    refs.modal.innerHTML = signUpEn;
  }

}
