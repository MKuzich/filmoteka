// async function sendForm() {
//     try {
//       document.forms.user.querySelector('[type="submit"]').disabled = true;
//       document.forms.user.querySelector('.submit-spinner').classList.remove('submit-spinner_hide');
//       let response = await fetch(document.forms.user.action, {
//         method: 'post',
//         body: new FormData(document.forms.user)
//       });
//       document.forms.user.querySelector('[type="submit"]').disabled = false;
//       document.forms.user.querySelector('.submit-spinner').classList.add('submit-spinner_hide');
//       if (response.ok) {
//         let result = await response.json();
//       }
//     }
//     catch (error) {
//       document.forms.user.querySelector('[type="submit"]').disabled = false;
//       document.forms.user.querySelector('.submit-spinner').classList.add('submit-spinner_hide');
//       console.log(error);
//     }
//   }
//   document.forms.user.addEventListener('submit', (e) => {
//     e.preventDefault();
//     sendForm();
//   });


/* <span class="submit-spinner submit-spinner_hide"></span>  */

/* <form class="signup-form" data-login-form action="#" method="post" id="user"> */