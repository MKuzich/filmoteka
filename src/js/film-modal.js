const modalBackdropRef = document.querySelector('.modal-backdrop--hidden');
const modalCloseBtnRef = document.querySelector('.modal-close');
const listFilmsRef = document.querySelector('.list-films');

modalCloseBtnRef.addEventListener('click', closeModal);
listFilmsRef.addEventListener('click', openModal);
function closeModal() {
  modalBackdropRef.classList.replace(
    'modal-backdrop',
    'modal-backdrop--hidden'
  );
}

function openModal(e) {
  if (!e.target.closest('li')) {
    return;
  }
  modalBackdropRef.classList.replace(
    'modal-backdrop--hidden',
    'modal-backdrop'
  );
}
