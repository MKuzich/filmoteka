import { logInEn,logInUk } from "./logIn";
import { signUpEn, signUpUk } from "./signUp";
import { footerEn,footerUk } from "./footer";
import { homeHeaderEn,homeHeaderUk } from "./header-home";
import { setLocalLang, languege } from "./setLocalLang";

const selectedLang = document.querySelector('#checkbox');

// const languege = document.querySelector('html');

const btnLogOut = document.querySelector('[data-logout]');

const langValue = localStorage.getItem('localLang');

if (langValue === 'uk') {
  selectedLang.checked = true;
  uaVersion();
} else {
  selectedLang.checked = false;
  languege.setAttribute('lang', 'en');
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
  languege.setAttribute('lang', 'en');
  homeHeaderEn();
  btnLogOut.textContent = 'Log out';
  logInEn();
  signUpEn();
  footerEn();
  setLocalLang();
}

function uaVersion() {
  languege.setAttribute('lang', 'uk');
  homeHeaderUk();

  btnLogOut.textContent = 'Вихід';
  logInUk();
  signUpUk();
  footerUk();
  setLocalLang();
}
