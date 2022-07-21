export function enableSpinnerOn(btn, spin) {
  btn.disabled = true;
  spin.classList.remove('submit-spinner_hide');
}

export function disableSpinnerOn(btn, spin) {
  btn.disabled = false;
  spin.classList.add('submit-spinner_hide');
}
