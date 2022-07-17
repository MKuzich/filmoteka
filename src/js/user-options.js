const logout = document.querySelector('.logout-wrapper');
const login = document.querySelector('.login-wrapper');
const text = logout.querySelector('.logout-wrapper__text');

export function enableUserInterface(user) {
  if (user) {
    login.classList.add('is-hidden');
    logout.classList.remove('is-hidden');
    text.insertAdjacentHTML(
      'beforeend',
      `Hello, dear <span class="logout-wrapper__text--accent">${user.email}</span>`
    );
  } else {
    login.classList.remove('is-hidden');
    logout.classList.add('is-hidden');
    text.innerHTML = '';
  }
}
