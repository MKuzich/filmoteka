const refs = {
  openModalBtn: document.querySelector('[data-signup-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
document.addEventListener('keydown', event =>
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
