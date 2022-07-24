import { logInEn,logInUk } from "./logIn";
import { signUpEn,signUpUk } from "./signUp";
import { footerEn,footerUk } from "./footer";
import { libraryHeaderEn,libraryHeaderUk } from "./header-library";
import { setLocalLang,languege } from "./setLocalLang";

const selectedLang = document.querySelector('#checkbox');

const btnLogOut = document.querySelector('[data-logout]');


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
  libraryHeaderEn();
  btnLogOut.textContent = 'Log out';
  logInEn();
  signUpEn();
  footerEn();
  languege.setAttribute('lang', 'en');
  setLocalLang();
}

function uaVersion() {
  libraryHeaderUk();
  btnLogOut.textContent = 'Вихід';
  logInUk();
  signUpUk();
  footerUk();
  languege.setAttribute('lang', 'uk');
  setLocalLang();
}


