const modalSignUpTitle = document.querySelector('#signUpTitle');
const modalSignUpEmail = document.querySelector('#signUpEmail');
const modalSignUpPassword = document.querySelector('#signUpPasswoerd');
const modalBtnSignUp = document.querySelector('#btnSignUp');
const btnSignUp = document.querySelector('[data-signup-modal-open]');


export function signUpEn() {
  btnSignUp.textContent = 'Sign up';
  modalSignUpTitle.textContent = 'Enter your email and password for sign up';
  modalSignUpEmail.textContent = 'Email';
  modalSignUpPassword.textContent = 'Password';
  modalBtnSignUp.innerHTML =
    '<span class="submit-spinner submit-spinner_hide" id="spinnersignup"></span>Sign up';
}

export function signUpUk() {
  btnSignUp.textContent = 'Реєстрація';
  modalSignUpTitle.textContent =
    'Введіть електрону скриньку та пароль для реєстрації';
  modalSignUpEmail.textContent = 'Електронна скринька';
  modalSignUpPassword.textContent = 'Пароль';
  modalBtnSignUp.innerHTML =
    '<span class="submit-spinner submit-spinner_hide" id="spinnersignup"></span>Зареєструватися';
}