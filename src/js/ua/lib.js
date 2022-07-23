const selectedLang = document.querySelector('#checkbox');

const languege = document.querySelector('html');
const menuHome = document.querySelector('#homeL');
const menuLibrary = document.querySelector('#libraryL');

const btnWatched = document.querySelector('[data-watched-btn]');
const btnQueue = document.querySelector('[data-queue-btn]');

const btnLogIn = document.querySelector('[data-login-modal-open]');
const btnSignUp = document.querySelector('[data-signup-modal-open]');
const btnLogOut = document.querySelector('[data-logout]');

//login
const modalLogInTitle = document.querySelector('#logInTitle');
const modalLogInEmail = document.querySelector('#logInEmail');
const modalLogInPassword = document.querySelector('#logInPassword');
const modalbtnLogIn = document.querySelector('#logInBtn');

//signUp
const modalSignUpTitle = document.querySelector('#signUpTitle');
const modalSignUpEmail = document.querySelector('#signUpEmail');
const modalSignUpPassword = document.querySelector('#signUpPasswoerd');
const modalBtnSignUp = document.querySelector('#btnSignUp');

//footer
const footerRights = document.querySelector('#footerRight');
const developText = document.querySelector('#developText');
const footerText = document.querySelector('#footerText');
const footerStudent = document.querySelector('#footerStudent');

const langValue = localStorage.getItem('localLang');

if (langValue === 'uk') {
  selectedLang.checked = true;
  uaVersion();
} else {
  selectedLang.checked = false;
  languege.setAttribute('html', 'en');
  enVersion();
}

selectedLang.addEventListener('input', onChange);

function onChange(evt) {

  evt.preventDefault();
  if (!selectedLang.checked) {
    enVersion();
  } else {
    uaVersion();

  }
}

function enVersion() {
  btnWatched.textContent = 'Watched';
  btnQueue.textContent = 'Queue';

  menuHome.textContent = 'Home';
  menuLibrary.textContent = 'My library';

  btnLogIn.textContent = 'Log in';
  btnSignUp.textContent = 'Sign up';
  btnLogOut.textContent = 'Log out';

  //logIn
  modalLogInTitle.textContent = 'Enter your email and password for log in';
  modalLogInEmail.textContent = 'Email';
  modalLogInPassword.textContent = 'Password';
  modalbtnLogIn.innerHTML =
    '<span class="submit-spinner submit-spinner_hide" id="spinnerlogin"></span>Log in';

  //signUp
  modalSignUpTitle.textContent = 'Enter your email and password for sign up';
  modalSignUpEmail.textContent = 'Email';
  modalLogInPassword.textContent = 'Password';
  modalBtnSignUp.innerHTML =
    '<span class="submit-spinner submit-spinner_hide" id="spinnersignup"></span>Sign up';

  // footer
  footerRights.textContent = '© 2022 | All Rights Reserved |';
  developText.textContent = 'Developed with';
  footerText.textContent = 'by';
  footerStudent.textContent = 'GoIT Students';

  languege.setAttribute('html', 'en');
  localLang();
}

function uaVersion() {
  btnLogIn.textContent = 'Вхід';
  btnSignUp.textContent = 'Реєстрація';
  btnLogOut.textContent = 'Вихід';

  menuHome.textContent = 'Домашня';
  menuLibrary.textContent = 'Моя бібліотека';

  btnWatched.textContent = 'Переглянуті';
  btnQueue.textContent = 'В черзі';

  //logIn
  modalLogInTitle.textContent =
    'Введіть електронну скриньку та пароль для входу';
  modalLogInEmail.textContent = 'Електронна скринька';
  modalLogInPassword.textContent = 'Пароль';
  modalbtnLogIn.innerHTML =
    '<span class="submit-spinner submit-spinner_hide" id="spinnerlogin"></span>Вхід';

  //signUp
  modalSignUpTitle.textContent =
    'Введіть електрону скриньку та пароль для реєстрації';
  modalSignUpEmail.textContent = 'Електронна скринька';
  modalLogInPassword.textContent = 'Пароль';
  modalBtnSignUp.innerHTML =
    '<span class="submit-spinner submit-spinner_hide" id="spinnersignup"></span>Зареєструватися';

  // footer
  footerRights.textContent = '© 2022 | Всі права захищено |';
  developText.textContent = 'Розроблено зі';
  footerText.textContent = '';
  footerStudent.textContent = 'Cтудентами GoIt';

  languege.setAttribute('html', 'uk');
  localLang();
}

function localLang() {
  localStorage.setItem('localLang', languege.getAttribute('html'));
}
