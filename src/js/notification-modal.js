const refs = {
  modal: document.querySelector('[data-notification-modal]'),
  message: document.querySelector('.notification-modal__message'),
};

function closeNotificationModal() {
  document.body.classList.remove('modal-open');
  refs.modal.classList.add('is-hidden');
}

function openNotificationModal() {
  document.body.classList.add('modal-open');
  refs.modal.classList.remove('is-hidden');
}

function notificationRender(message) {
  refs.message.textContent = message;
}

export function notificationLaunch(message) {
  openNotificationModal();
  notificationRender(message);
  setTimeout(() => {
    closeNotificationModal();
  }, 2000);
}
