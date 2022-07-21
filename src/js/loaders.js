
export function enableSpinnerOnLogin() {
    document.querySelector('#logInBtn').disabled = true;
    document.querySelector('#spinner-login').classList.remove('submit-spinner_hide');
}

export function disableSpinnerOnLogin() {
    document.querySelector('#logInBtn').disabled = false;
    document.querySelector('#spinner-login').classList.add('submit-spinner_hide');
}
 