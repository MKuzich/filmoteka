
// const selectedLang = document.querySelector("#checkbox");


// const btnWatched = document.querySelector('[data-watched-btn]');
// const btnQueue = document.querySelector('[data-queue-btn]');

// const btnLogIn = document.querySelector('[data-login-modal-open]');
// const btnSignUp = document.querySelector('[data-signup-modal-open]');

// const languege = document.querySelector('html');
// const menuHome = document.querySelector('#home');
// const menuLibrary = document.querySelector('#library');

// console.log(menuHome);

// const langValue = localStorage.getItem('localLang');
// // console.log(footerCont);

// if(langValue === 'uk') {
//   console.log(langValue);

//   selectedLang.checked = true;
//   uaVersion();

// } else {
//   console.log(langValue);

//   selectedLang.checked = false;
//   languege.setAttribute('html', 'en');
//   enVersion();
// }

// selectedLang.addEventListener('input', onChange);

// function onChange (evt)  {
//   evt.preventDefault();
//     if(!selectedLang.checked) {
//         enVersion();
//     } else {
//         uaVersion();
//     };
// }

// function enVersion() {
  
//     languege.setAttribute('html', 'en');
//     localLang();
  
//     menuHome.innerHTML = '<a href="index.html" class="menu__link current">Home</a>';
//     menuLibrary.innerHTML = '<a href="library.html" class="menu__link">My library</a>';
//     searchInput.setAttribute('placeholder',"Movie search");
//     btnLogIn.textContent = 'Log in';
//     btnSignUp.textContent = 'Sign up';
//     footerCont.innerHTML = footerEn();
  
//   }
  
//   function uaVersion() {
//     // logoText.textContent = 'Фільмотека';
//     languege.setAttribute('html', 'uk');
//     // console.log('pislia '+languege.getAttribute('html'));
//     localLang();
  
  
//     menuHome.innerHTML = '<a href="index.html" class="menu__link current">Домашня</a>';
//     menuLibrary.innerHTML = '<a href="library.html" class="menu__link">Моя бібліотека</a>';
//     searchInput.setAttribute('placeholder',"Пошук фільмів");
//     btnLogIn.textContent = 'Вхід';
//     btnSignUp.textContent = 'Реєстрація';
//     footerCont.innerHTML = footerUk();
  
  
//   }
  
  
//   function localLang() {
//     localStorage.setItem('localLang',languege.getAttribute('html'));
//   }