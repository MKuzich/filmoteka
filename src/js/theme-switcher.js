const htmlRef = document.querySelector('html');
const themeToggleRef = document.querySelector('.theme-toggler');

applyTheme();
themeToggleRef.addEventListener('click', handleswitchTheme);

function handleswitchTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
    themeToggleRef.classList.remove('dark');
    htmlRef.classList.remove('dark');
  } else {
    localStorage.setItem('theme', 'dark');
    themeToggleRef.classList.add('dark');
    htmlRef.classList.add('dark');
  }
}
function applyTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    themeToggleRef.classList.add('dark');
    htmlRef.classList.add('dark');
  } else {
    themeToggleRef.classList.remove('dark');
    htmlRef.classList.remove('dark');
  }
}
