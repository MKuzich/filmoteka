const logout = document.querySelector('.logout-wrapper');
const login = document.querySelector('.login-wrapper');
const text = logout.querySelector('.logout-wrapper__text');
// const languege = document.querySelector('#checkbox');

export function enableUserInterface(user) {
  if (user) {
    login.classList.add('is-hidden');
    logout.classList.remove('is-hidden');

    if (localStorage.getItem('localLang') === 'uk') {
      text.insertAdjacentHTML(
        'beforeend',
        `Привіт, <span class="logout-wrapper__text--accent">${mailShrink(
          user.email
        )}</span>`
      );
    } else {
      text.insertAdjacentHTML(
        'beforeend',
        `Hello, dear <span class="logout-wrapper__text--accent">${mailShrink(
          user.email
        )}</span>`
      );
    }
  } else {
    login.classList.remove('is-hidden');
    logout.classList.add('is-hidden');
    text.innerHTML = '';
  }
}

function mailShrink(mail) {
  const name = mail.split('@');
  if (name[0].length > 12) {
    return name[0].slice(0, 11) + '...';
  }
  return name[0];
}
