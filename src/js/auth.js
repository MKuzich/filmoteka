import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD975WMSA04Q-mjdqQUXdyvcH4cQe4txRg',
  authDomain: 'filmoteka-1bdfd.firebaseapp.com',
  projectId: 'filmoteka-1bdfd',
  storageBucket: 'filmoteka-1bdfd.appspot.com',
  messagingSenderId: '873079027017',
  appId: '1:873079027017:web:dadfb10493f9c7b3e51698',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const signupForm = document.querySelector('.signup-form');
signupForm.addEventListener('submit', onSubmitSignupHandler);

function onSubmitSignupHandler(e) {
  e.preventDefault();
  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log(user);
      console.log(user.uid);
      console.log(user.email);
      e.target.reset();
      // Close modal after good
    })
    .catch(error => {
      const errorCode = error.code;
      console.log(errorCode);
    });
}

const logoutBtn = document.querySelector('.login-form__btn-logout');
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

const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', onSubmitLoginHandler);

function onSubmitLoginHandler(e) {
  e.preventDefault();
  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log('User logged in:', user);
    })
    .catch(error => {
      const errorCode = error.code;
      console.log(errorCode);
    });
}

onAuthStateChanged(auth, user => {
  console.log('user status changed:', user);
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
