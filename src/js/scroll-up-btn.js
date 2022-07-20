const rootElement = document.documentElement;
const scrollBtn = document.querySelector('.scroll-up');

document.addEventListener("scroll", handleScroll);
scrollBtn.addEventListener('click', scrollToTop);

scrollBtn.classList.add('visually-hidden');


function handleScroll() {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.4) {
        scrollBtn.classList.remove('visually-hidden')
    } else {
        scrollBtn.classList.add('visually-hidden');
    }
}

function scrollToTop() {
  rootElement.scrollTo ({
  top: 1,
  behavior: "smooth"
  })
};

