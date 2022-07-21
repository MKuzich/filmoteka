
// window.onload = function () {
//     document.body.classList.add('loaded_hiding');
    
// window.setTimeout(function () {
//       document.body.classList.add('loaded');
//       document.body.classList.remove('loaded_hiding');
//     }, 500);
// }

window.onload = function () {
    const $body = document.body;
    const $preloader = $body.querySelector('.preloader');
    function afterTransition() {
      $body.classList.add('loaded');
      $body.classList.remove('loaded_hiding');
      $preloader.removeEventListener('transitionend', afterTransition);
    }
    $body.classList.add('loaded_hiding');
    $preloader.addEventListener('transitionend', afterTransition);
}
  