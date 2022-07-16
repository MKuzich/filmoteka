const refs = {
  openModalBtn: document.querySelector('[data-login-modal-open]'),
  closeModalBtn: document.querySelector('[data-login-modal-close]'),
  modal: document.querySelector('[data-login-modal]'),
};

refs.openModalBtn.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeLoginModal);

function closeModalOnEsc(e) {
  e.key === 'Escape' ? closeLoginModal() : null;
}

export function closeLoginModal() {
  document.body.classList.remove('modal-open');
  refs.modal.classList.add('is-hidden');
  document.removeEventListener('keydown', closeModalOnEsc);
}

function openModal() {
  document.body.classList.add('modal-open');
  refs.modal.classList.remove('is-hidden');
  document.addEventListener('keydown', closeModalOnEsc);
}
