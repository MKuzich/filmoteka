const modalLogInTitle = document.querySelector('#logInTitle');
const modalLogInEmail = document.querySelector('#logInEmail');
const modalLogInPassword = document.querySelector('#logInPassword');
const modalbtnLogIn = document.querySelector('#logInBtn');

export function logInUk() {
    modalLogInTitle.textContent =
    'Введіть електронну скриньку та пароль для входу';
  modalLogInEmail.textContent = 'Електронна скринька';
  modalLogInPassword.textContent = 'Пароль';
  modalbtnLogIn.innerHTML =
    '<span class="submit-spinner submit-spinner_hide" id="spinnerlogin"></span>Вхід';
}

export function logInEn() {
    modalLogInTitle.textContent = 'Enter your email and password for log in';
    modalLogInEmail.textContent = 'Email';
    modalLogInPassword.textContent = 'Password';
    modalbtnLogIn.innerHTML =
    '<span class="submit-spinner submit-spinner_hide" id="spinnerlogin"></span>Log in';
  }


