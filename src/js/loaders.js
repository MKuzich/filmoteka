export function enableSpinnerOn(btn, spin) {
  btn.disabled = true;
  spin.classList.remove('submit-spinner_hide');
}

export function disableSpinnerOn(btn, spin) {
  btn.disabled = false;
  spin.classList.add('submit-spinner_hide');
}


export function enableSpinnerSearch() {
  const spinner = document.querySelector('#spinnersearch');
  const icon = document.querySelector('.search__button-icon');

  spinner.classList.remove('submit-spinner_hide');
  icon.classList.add('submit-spinner_hide');
}

export function disableSpinnerSearch() {
  const spinner = document.querySelector('#spinnersearch');
  const icon = document.querySelector('.search__button-icon');

  spinner.classList.add('submit-spinner_hide');
  icon.classList.remove('submit-spinner_hide');
}
