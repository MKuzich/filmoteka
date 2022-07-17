const refs = {
  openModalBtn: document.querySelector('[data-signup-modal-open]'),
  closeModalBtn: document.querySelector('[data-signup-modal-close]'),
  modal: document.querySelector('[data-signup-modal]'),
};

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
}
