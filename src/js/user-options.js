const logout = document.querySelector('.logout-wrapper');
const login = document.querySelector('.login-wrapper');
const text = logout.querySelector('.logout-wrapper__text');

export function enableUserInterface(user) {
  if (user) {
    login.classList.add('is-hidden');
    logout.classList.remove('is-hidden');

    const langCheckBox = document.querySelector('#checkbox');

    if (langCheckBox.checked) {
      text.innerHTML = `Привіт, <span class="logout-wrapper__text--accent">${mailShrink(
        user.email
      )}</span>`;
    } else {
      text.innerHTML = `Hello, dear <span class="logout-wrapper__text--accent">${mailShrink(
        user.email
      )}</span>`;
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
