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
import { notificationLaunch } from './notification-modal';

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
      e.target.reset();
      disableSpinnerOn(signupBtn, spinner);
      closeSignupModal();
      notificationLaunch(selectedLanguageDetection(1));
    })
    .catch(error => {
      disableSpinnerOn(signupBtn, spinner);
      const errorCode = error.code;
      notificationLaunch(errorCode);
    });
}

const logoutBtn = document.querySelector('[data-logout]');
logoutBtn.addEventListener('click', onClickLogoutHandler);

function onClickLogoutHandler(e) {
  signOut(auth)
    .then(() => {
      notificationLaunch(selectedLanguageDetection(2));
    })
    .catch(error => {
      const errorCode = error.code;
      notificationLaunch(errorCode);
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
      e.target.reset();
      disableSpinnerOn(loginBtn, spinner);
      closeLoginModal();
      notificationLaunch(selectedLanguageDetection(3));
    })
    .catch(error => {
      disableSpinnerOn(loginBtn, spinner);
      const errorCode = error.code;
      notificationLaunch(errorCode);
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

function selectedLanguageDetection(code) {
  if (localStorage.getItem('localLang') === 'en') {
    if (code === 1) {
      return 'You have successfully registered and logged into your account! Enjoy watching.';
    } else if (code === 2) {
      return 'You are logged out. Now you cannot use the library.';
    } else if (code === 3) {
      return 'You are logged in. You can now use the library.';
    }
  } else {
    if (code === 1) {
      return 'Ви успішно зареєструвалися та увійшли у свій обліковий запис! Приємного перегляду.';
    } else if (code === 2) {
      return 'Ви вийшли з системи. Тепер ви не можете користуватися бібліотекою.';
    } else if (code === 3) {
      return 'Ви увійшли в систему. Тепер ви можете користуватися бібліотекою.';
    }
  }
}
