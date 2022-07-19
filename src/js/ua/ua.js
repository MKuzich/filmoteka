
const selectedLang = document.querySelector("#checkbox");
// header
const languege = document.querySelector('html');
const menuHome = document.querySelector('#home');
const menuLibrary = document.querySelector('#library');
const searchInput = document.querySelector('.search-form-input');
const btnLogIn = document.querySelector('[data-login-modal-open]');
const btnSignUp = document.querySelector('[data-signup-modal-open]');

//login
const modalLogInTitle = document.querySelector('#logInTitle');
const modalLogInEmail = document.querySelector('#logInEmail');
const modalLogInPassword = document.querySelector('#logInPassword');
const modalbtnLogIn = document.querySelector('#logInBtn')
// console.log(modalLogInTitle);


//footer
const footerRights = document.querySelector('#footerRight');
const developText = document.querySelector('#developText');
const footerText = document.querySelector('#footerText');
const footerStudent = document.querySelector('#footerStudent');

const langValue = localStorage.getItem('localLang');
// console.log(footerCont);

if(langValue === 'uk') {
  console.log(langValue);

  selectedLang.checked = true;
  uaVersion();

} else {
  console.log(langValue);

  selectedLang.checked = false;
  languege.setAttribute('html', 'en');
  enVersion();
}


selectedLang.addEventListener('input', onChange);

function onChange (evt)  {
  evt.preventDefault();
    if(!selectedLang.checked) {
        enVersion();
    } else {
        uaVersion();
    };
}


function enVersion() {
  
  languege.setAttribute('html', 'en');
  localLang();
  //header
  menuHome.innerHTML = '<a href="index.html" class="menu__link current">Home</a>';
  menuLibrary.innerHTML = '<a href="library.html" class="menu__link">My library</a>';
  searchInput.setAttribute('placeholder',"Movie search");
  btnLogIn.textContent = 'Log in';
  btnSignUp.textContent = 'Sign up';

  //logIn
  modalLogInTitle.textContent = 'Enter your email and password for log in';
  modalLogInEmail.textContent =  'Email';
  modalLogInPassword.textContent = 'Password';
  modalbtnLogIn.textContent = 'Log in';
  

  // footer
  footerRights.textContent = '© 2022 | All Rights Reserved |';
  developText.textContent = 'Developed with';
  footerText.textContent = 'by';
  footerStudent.textContent = 'GoIT Students';


}

function uaVersion() {
  // logoText.textContent = 'Фільмотека';
  languege.setAttribute('html', 'uk');
  // console.log('pislia '+languege.getAttribute('html'));
  localLang();

  //header
  menuHome.innerHTML = '<a href="index.html" class="menu__link current">Домашня</a>';
  menuLibrary.innerHTML = '<a href="library.html" class="menu__link">Моя бібліотека</a>';
  searchInput.setAttribute('placeholder',"Пошук фільмів");
  btnLogIn.textContent = 'Вхід';
  btnSignUp.textContent = 'Реєстрація';
  
  //logIn
  modalLogInTitle.textContent = 'Введіть електронну скриньку та пароль для входу';
  modalLogInEmail.textContent = 'Електронна скринька';
  modalLogInPassword.textContent = 'Пароль';
  modalbtnLogIn.textContent = 'Вхід';
  
  
  // footer
  footerRights.textContent = '© 2022 | Всі права захищено |';
  developText.textContent = 'Розроблено зі';
  footerText.textContent = '';
  footerStudent.textContent = 'Cтудентами GoIt';
  


}


function localLang() {
  localStorage.setItem('localLang',languege.getAttribute('html'));
}