var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},o=t.parcelRequired76b;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var r={id:t,exports:{}};return e[t]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},t.parcelRequired76b=o),o("gjiCh");const r=document.querySelector("#checkbox"),i=document.querySelector("html"),l=document.querySelector("#homeL"),a=document.querySelector("#libraryL"),c=document.querySelector("[data-watched-btn]"),s=document.querySelector("[data-queue-btn]"),d=document.querySelector("[data-login-modal-open]"),u=document.querySelector("[data-signup-modal-open]"),m=document.querySelector("[data-logout]"),g=document.querySelector("#logInTitle"),f=document.querySelector("#logInEmail"),b=document.querySelector("#logInPassword"),x=document.querySelector("#logInBtn"),C=document.querySelector("#signUpTitle"),p=document.querySelector("#signUpEmail"),y=(document.querySelector("#signUpPasswoerd"),document.querySelector("#btnSignUp")),h=document.querySelector("#footerRight"),S=document.querySelector("#developText"),v=document.querySelector("#footerText"),q=document.querySelector("#footerStudent");function w(){c.textContent="Watched",s.textContent="Queue",l.textContent="Home",a.textContent="My library",d.textContent="Log in",u.textContent="Sign up",m.textContent="Log out",g.textContent="Enter your email and password for log in",f.textContent="Email",b.textContent="Password",x.textContent="Log in",C.textContent="Enter your email and password for sign up",p.textContent="Email",b.textContent="Password",y.textContent="Sign up",h.textContent="© 2022 | All Rights Reserved |",S.textContent="Developed with",v.textContent="by",q.textContent="GoIT Students",i.setAttribute("html","en"),_()}function L(){d.textContent="Вхід",u.textContent="Реєстрація",m.textContent="Вихід",l.textContent="Домашня",a.textContent="Моя бібліотека",c.textContent="Переглянуті",s.textContent="В черзі",g.textContent="Введіть електронну скриньку та пароль для входу",f.textContent="Електронна скринька",b.textContent="Пароль",x.textContent="Вхід",C.textContent="Введіть електрону скриньку та пароль для реєстрації",p.textContent="Електронна скринька",b.textContent="Пароль",y.textContent="Зареєструватися",h.textContent="© 2022 | Всі права захищено |",S.textContent="Розроблено зі",v.textContent="",q.textContent="Cтудентами GoIt",i.setAttribute("html","uk"),_()}function _(){localStorage.setItem("localLang",i.getAttribute("html"))}"uk"===localStorage.getItem("localLang")?(r.checked=!0,L()):(r.checked=!1,i.setAttribute("html","en"),w()),r.addEventListener("input",(function(t){console.log(r.checked),t.preventDefault(),r.checked?(L(),console.log(r.checked)):(w(),console.log(r.checked))})),o("bMZn5"),o("9CwSo"),o("gY4QW"),o("jE1jP");var A=o("amyG6"),k=o("fteFn");let E=null;const T=(0,A.getAuth)();(0,A.onAuthStateChanged)(T,(t=>{if(t)E=t.uid,$.classList.add("library-active-btn"),$.removeAttribute("disabled"),j.removeAttribute("disabled"),P(E);else{const t='<strong class="library-warning">You must be loginned for using this library! Please log in or sign up!</strong>';M.innerHTML="",M.insertAdjacentHTML("afterbegin",t),$.setAttribute("disabled","disabled"),j.setAttribute("disabled","disabled")}}));let I="watched";const M=document.querySelector(".list-films"),$=document.querySelector("[data-watched-btn]"),j=document.querySelector("[data-queue-btn]");function H(t){if(t.target.hasAttribute("data-watched-btn"))return I="watched",$.classList.add("library-active-btn"),j.classList.remove("library-active-btn"),void P(E);I="queue",$.classList.remove("library-active-btn"),j.classList.add("library-active-btn"),P(E)}function P(t){const e=localStorage.getItem(t),n=JSON.parse(e)[I].map((t=>`<li class="link list-films_card" data-id='${t.id}'>\n        <a class="link list-films_card-info">\n                <div class="card-image__wrapper">\n                    <img\n                    class="list-films_card-info_card-film"\n                    src=https://image.tmdb.org/t/p/original/${t.poster_path}\n                    alt="${t.original_title}"\n                />\n                </div>\n            <div class="list-films_card-info-footer">\n            <h2 class="list-films_card-info-footer-name-film">${t.title.slice(0,30)}</h2>\n              <div class="card-info-footer_characteristics">\n              <p class="list-films_card-info-footer-genre-film">${(0,k.moviesGenresConvertation)(t.genre_ids)}</p>\n              <p class="list-films_card-info-footer-production-year">\n                  ${t.release_date.slice(0,4)} <span class="info-block__values--orange">${t.vote_average.toFixed(1)}</span>\n              </p>\n              </div>\n            </div>\n        </a>\n        </li>`)).join("");M.innerHTML="",M.insertAdjacentHTML("afterbegin",n)}$.addEventListener("click",H),j.addEventListener("click",H),o("6HA5D"),o("422V3");
//# sourceMappingURL=library.f9d24e95.js.map
