
const lang = document.querySelector("#checkbox");
// const logoText = document.querySelector('.logo__text');
const menuHome = document.querySelector('#home');
const menuLibrary = document.querySelector('#library');
const searchInput = document.querySelector('.search-form-input');
const btnLogIn = document.querySelector('[data-login-modal-open]');
const btnSignUp = document.querySelector('[data-signup-modal-open]');
 

// console.log(btnLogIn);

lang.addEventListener('input', onChange);

function onChange ()  {
    if(!lang.checked) {
        enVersion();
    } else {
        uaVersion();

    };

    //console.log(lang.checked);

}


function enVersion() {
  // logoText.textContent = 'Filmoteka';
  menuHome.textContent = 'Home';
  menuLibrary.textContent = 'My Library';
  searchInput.setAttribute('placeholder',"Movie search");
  btnLogIn.textContent = 'Log in';
  btnSignUp.textContent = 'Sign up';
}

function uaVersion() {
  // logoText.textContent = 'Фільмотека';
  menuHome.textContent = 'Домашня';
  menuLibrary.textContent = 'Моя бібліотека';
  searchInput.setAttribute('placeholder',"Пошук фільмів");
  btnLogIn.textContent = 'Вхід';
  btnSignUp.textContent = 'Реєстрація';
}
