export const languege = document.querySelector('html');

export function setLocalLang() {
    localStorage.setItem('localLang', languege.getAttribute('lang'));
  }
  