import { enableSpinnerOn, disableSpinnerOn } from './loaders';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { closeSignupModal } from './signup-modal';
import { closeLoginModal } from './login-modal';
import { enableUserInterface } from './user-options';

const firebaseConfig = {
  apiKey: 'AIzaSyD975WMSA04Q-mjdqQUXdyvcH4cQe4txRg',
  authDomain: 'filmoteka-1bdfd.firebaseapp.com',
  projectId: 'filmoteka-1bdfd',
  storageBucket: 'filmoteka-1bdfd.appspot.com',
  messagingSenderId: '873079027017',
  appId: '1:873079027017:web:dadfb10493f9c7b3e51698',
};

let USER_ID = null;

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const signupForm = document.querySelector('[data-signup-form]');
signupForm.addEventListener('submit', onSubmitSignupHandler);

function onSubmitSignupHandler(e) {
  e.preventDefault();
  const signupBtn = document.querySelector('#btnSignUp');
  const spinner = document.querySelector('#spinnersignup');
  enableSpinnerOn(signupBtn, spinner);
  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log(user);
      console.log(user.uid);
      console.log(user.email);
      e.target.reset();
      disableSpinnerOn(signupBtn, spinner);
      closeSignupModal();
    })
    .catch(error => {
      disableSpinnerOn(signupBtn, spinner);
      const errorCode = error.code;
      console.log(errorCode);
    });
}

const logoutBtn = document.querySelector('[data-logout]');
logoutBtn.addEventListener('click', onClickLogoutHandler);

function onClickLogoutHandler(e) {
  signOut(auth)
    .then(() => {
      console.log('User logged out');
    })
    .catch(error => {
      const errorCode = error.code;
      console.log(errorCode);
    });
}

const loginForm = document.querySelector('[data-login-form]');
loginForm.addEventListener('submit', onSubmitLoginHandler);

function onSubmitLoginHandler(e) {
  e.preventDefault();
  const loginBtn = document.querySelector('#logInBtn');
  const spinner = document.querySelector('#spinnerlogin');
  enableSpinnerOn(loginBtn, spinner);
  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log('User logged in:', user);
      e.target.reset();
      disableSpinnerOn(loginBtn, spinner);
      closeLoginModal();
    })
    .catch(error => {
      disableSpinnerOn(loginBtn, spinner);
      const errorCode = error.code;
      console.log(errorCode);
    });
}

let userInterface = null;

onAuthStateChanged(auth, user => {
  userInterface = user;
  if (user) {
    USER_ID = user.uid;
  }
  enableUserInterface(user);
});

const langCheckBox = document.querySelector('#checkbox');
langCheckBox.addEventListener('input', onLangChange);

function onLangChange() {
  enableUserInterface(userInterface);
}
