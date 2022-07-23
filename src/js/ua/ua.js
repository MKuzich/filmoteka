// import { logInEn,logInUk } from "./logIn";
const selectedLang = document.querySelector('#checkbox');
// headerHome
const languege = document.querySelector('html');
const menuHome = document.querySelector('#home');
const menuLibrary = document.querySelector('#library');
const searchInput = document.querySelector('.search-form-input');
const btnLogIn = document.querySelector('[data-login-modal-open]');
const btnSignUp = document.querySelector('[data-signup-modal-open]');
const btnLogOut = document.querySelector('[data-logout]');
const popularBy = document.querySelector('.trending-selector-text');
const btnDay = document.querySelector('#btnDay');
const btnWeek = document.querySelector('#btnWeek');

// login
// const modalLogInTitle = document.querySelector('#logInTitle');
// const modalLogInEmail = document.querySelector('#logInEmail');
// const modalLogInPassword = document.querySelector('#logInPassword');
// const modalbtnLogIn = document.querySelector('#logInBtn');

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
  languege.setAttribute('html', 'en');
  localLang();
  //header
  menuHome.textContent = 'Home';
  menuLibrary.textContent = 'My library';
  searchInput.setAttribute('placeholder', 'Movie search');

  btnLogIn.textContent = 'Log in';
  btnSignUp.textContent = 'Sign up';
  btnLogOut.textContent = 'Log out';

  popularBy.textContent = 'Popular by';
  btnDay.textContent = 'Day';
  btnWeek.textContent = 'Week';

  logInEn();
  //logInEn();
  // modalLogInTitle.textContent = 'Enter your email and password for log in';
  // modalLogInEmail.textContent = 'Email';
  // modalLogInPassword.textContent = 'Password';
  // modalbtnLogIn.innerHTML =
  //   '<span class="submit-spinner submit-spinner_hide" id="spinnerlogin"></span>Log in';

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
}

function uaVersion() {
  languege.setAttribute('html', 'uk');
  localLang();

  //header
  menuHome.textContent = 'Домашня';

  menuLibrary.textContent = 'Моя бібліотека';
  searchInput.setAttribute('placeholder', 'Пошук фільмів');

  btnLogIn.textContent = 'Вхід';
  btnSignUp.textContent = 'Реєстрація';
  btnLogOut.textContent = 'Вихід';

  popularBy.textContent = 'Популярні за';
  btnDay.textContent = 'День';
  btnWeek.textContent = 'Тиждень';
  
  logInUk();
  // logInUa();
  // modalLogInTitle.textContent =
  //   'Введіть електронну скриньку та пароль для входу';
  // modalLogInEmail.textContent = 'Електронна скринька';
  // modalLogInPassword.textContent = 'Пароль';
  // modalbtnLogIn.innerHTML =
  //   '<span class="submit-spinner submit-spinner_hide" id="spinnerlogin"></span>Вхід';

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
}

function localLang() {
  localStorage.setItem('localLang', languege.getAttribute('html'));
}
