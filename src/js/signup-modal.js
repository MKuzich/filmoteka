const refs = {
  openModalBtn: document.querySelector('.signup-modal__open-btn'),
  closeModalBtn: document.querySelector('.signup-modal__close-btn'),
  modal: document.querySelector('.signup-modal-wrapper'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.modal.addEventListener('keydown', event =>
  event.key === 'Escape' ? closeModal() : null
);

function closeModal() {
  document.body.classList.remove('modal-open');
  refs.modal.classList.add('is-hidden');
}

function toggleModal() {
  document.body.classList.toggle('modal-open');
  refs.modal.classList.toggle('is-hidden');
}
