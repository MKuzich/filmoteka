
const lang = document.querySelector("#checkbox");
const logoText = document.querySelector('.logo__text');
const menuHome = document.querySelector('#home');
const menuLibrary = document.querySelector('#library');
const searchInput = document.querySelector('.search-form-input');
const btnLogIn = document.querySelector('[data-login-modal-open]');
const btnSignUp = document.querySelector('[data-signup-modal-open]');




// console.log(btnLogIn);

lang.addEventListener('input', onChange);

function onChange ()  {
    if(!lang.checked) {
        logoText.textContent = 'Filmoteka';
        menuHome.textContent = 'Home';
        menuLibrary.textContent = 'My Library';
        searchInput.setAttribute('placeholder',"Movie search");
        btnLogIn.textContent = 'Log in';
        btnSignUp.textContent = 'Sign up';

    } else {
        logoText.textContent = 'Фільмотека';
        menuHome.textContent = 'Домашня';
        menuLibrary.textContent = 'Моя бібліотека';
        searchInput.setAttribute('placeholder',"Пошук фільмів");
        btnLogIn.textContent = 'Вхід';
        btnSignUp.textContent = 'Реєстрація';

    };

    //console.log(lang.checked);

}

function enMenu() {
    return `<li class="menu__item">
    <a href="/src/index.html" class="menu__link current">Home</a>
  </li>
  <li class="menu__item">
    <a href="/src/library.html" class="menu__link">My library</a>
  </li>`;

}

function uaMenu() {
    return `<li class="menu__item">
    <a href="/src/index.html" class="menu__link current">Домашня</a>
  </li>
  <li class="menu__item">
    <a href="/src/library.html" class="menu__link">Моя бібліотека</a>
  </li>`;

}