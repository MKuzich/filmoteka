!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},a=t.parcelRequired76b;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in n){var a=n[t];delete n[t];var r={id:t,exports:{}};return e[t]=r,a.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},t.parcelRequired76b=a);var r=document.querySelector("#checkbox"),o=document.querySelector("html"),i=document.querySelector("#homeL"),l=document.querySelector("#libraryL"),c=document.querySelector("[data-watched-btn]"),s=document.querySelector("[data-queue-btn]"),d=document.querySelector("[data-login-modal-open]"),u=document.querySelector("[data-signup-modal-open]"),m=document.querySelector("[data-logout]"),g=document.querySelector("#logInTitle"),f=document.querySelector("#logInEmail"),v=document.querySelector("#logInPassword"),b=document.querySelector("#logInBtn"),p=document.querySelector("#signUpTitle"),y=document.querySelector("#signUpEmail"),h=(document.querySelector("#signUpPasswoerd"),document.querySelector("#btnSignUp")),S=document.querySelector("#footerRight"),x=document.querySelector("#developText"),C=document.querySelector("#footerText"),q=document.querySelector("#footerStudent");function L(){c.textContent="Watched",s.textContent="Queue",i.textContent="Home",l.textContent="My library",d.textContent="Log in",u.textContent="Sign up",m.textContent="Log out",g.textContent="Enter your email and password for log in",f.textContent="Email",v.textContent="Password",b.innerHTML='<span class="submit-spinner submit-spinner_hide" id="spinnerlogin"></span>Log in',p.textContent="Enter your email and password for sign up",y.textContent="Email",v.textContent="Password",h.innerHTML='<span class="submit-spinner submit-spinner_hide" id="spinnersignup"></span>Sign up',S.textContent="© 2022 | All Rights Reserved |",x.textContent="Developed with",C.textContent="by",q.textContent="GoIT Students",o.setAttribute("html","en"),_()}function w(){d.textContent="Вхід",u.textContent="Реєстрація",m.textContent="Вихід",i.textContent="Домашня",l.textContent="Моя бібліотека",c.textContent="Переглянуті",s.textContent="В черзі",g.textContent="Введіть електронну скриньку та пароль для входу",f.textContent="Електронна скринька",v.textContent="Пароль",b.innerHTML='<span class="submit-spinner submit-spinner_hide" id="spinnerlogin"></span>Вхід',p.textContent="Введіть електрону скриньку та пароль для реєстрації",y.textContent="Електронна скринька",v.textContent="Пароль",h.innerHTML='<span class="submit-spinner submit-spinner_hide" id="spinnersignup"></span>Зареєструватися',S.textContent="© 2022 | Всі права захищено |",x.textContent="Розроблено зі",C.textContent="",q.textContent="Cтудентами GoIt",o.setAttribute("html","uk"),_()}function _(){localStorage.setItem("localLang",o.getAttribute("html"))}"uk"===localStorage.getItem("localLang")?(r.checked=!0,w()):(r.checked=!1,o.setAttribute("html","en"),L()),r.addEventListener("input",(function(t){t.preventDefault(),r.checked?w():L()})),a("b7JqP"),a("euqRf"),a("1Gwk9"),a("e7S07"),a("cRUDO"),a("a43B7");var k=a("3SEMc"),T=a("hsNhQ"),E=a("70uTk"),A=(k=a("3SEMc"),null),M=(0,k.getAuth)();(0,k.onAuthStateChanged)(M,(function(t){t&&(A=t.uid)}));var H={data:1,totalData:null,setTotalData:function(){var t=JSON.parse(localStorage.getItem(A));this.totalData=Math.ceil(t.watched.length/9)},change:function(t){this.data=t}},I=document.querySelector(".library-cards-film");function D(t){var e=document.querySelector("#overlay-list-library");e&&e.remove(),H.setTotalData();for(var n="",a=1;a<=H.totalData;a++)n+=N(a);n="<div class='overlay-pagination' id='".concat(t,"'>").concat(n,"</div>"),I.insertAdjacentHTML("beforeend",n)}function N(t){var e="";return t===H.data?e+"<button class='btn-pagination-active'>".concat(t,"</button>"):e+"<button class='btn-pagination'>".concat(t,"</button>")}I.addEventListener("click",(function(t){if("BUTTON"!==t.target.nodeName)return;var e=document.querySelector("#overlay-list-library");if(!e)return;H.change(Number(t.target.textContent)),e.remove(),function(t){var e=JSON.parse(localStorage.getItem(A))[t];if(H.setTotalData(),e.length>9){var n=9*(H.data-1),a=n+9;return e=e.slice(n,a),void Q(A,e)}Q(A,e)}(R.data),window.scrollTo(0,0)}));var O=a("2dZGR"),R={data:"watched",change:function(t){this.data=t}},U=null,P=(0,k.getAuth)();(0,k.onAuthStateChanged)(P,(function(t){var e;t?(U=t.uid,J.classList.add("library-active-btn"),J.removeAttribute("disabled"),B.removeAttribute("disabled"),G.innerHTML="",Q(U,!1)):(e="uk"===localStorage.getItem("localLang")?'<div class="library__warning-wrapper"><strong class="library__warning" id = \'warning\'>На разі тут немає фільмів. Щоб користуватися цією бібліотекою, ви повинні ввійти в систему! Будь ласка, увійдіть або зареєструйтеся!</strong></div>':'<div class="library__warning-wrapper"><strong class="library__warning" id = \'warning\'>Now there are no movies. You must be loginned for using this library! Please log in or sign up!</strong></div>',G.innerHTML="",G.insertAdjacentHTML("beforeend",e),J.setAttribute("disabled","disabled"),B.setAttribute("disabled","disabled"))}));var G=document.querySelector(".library__warning-container"),j=document.querySelector(".list-films"),J=document.querySelector("[data-watched-btn]"),B=document.querySelector("[data-queue-btn]");function F(t){if(t.target.hasAttribute("data-watched-btn"))return R.change("watched"),J.classList.add("library-active-btn"),B.classList.remove("library-active-btn"),Q(U,!1),H.change(1),void D("overlay-list-library");R.change("queue"),J.classList.remove("library-active-btn"),B.classList.add("library-active-btn"),Q(U,!1),H.change(1),D("overlay-list-library")}function Q(t,e){var n=localStorage.getItem(t),a=JSON.parse(n)[R.data];a.length>9&&(a=a.slice(0,9)),e&&(a=e);var r=a.map((function(t){return'<li class="link list-films_card" data-id=\''.concat(t.id,'\'>\n        <a class="link list-films_card-info">\n                <div class="card-image__wrapper">\n                    <img\n                    class="list-films_card-info_card-film"\n                    src=https://image.tmdb.org/t/p/original/').concat(t.poster_path,'\n                    alt="').concat(t.original_title,'"\n                />\n                </div>\n            <div class="list-films_card-info-footer">\n            <h2 class="list-films_card-info-footer-name-film">').concat((0,E.titleSrinking)(t.title),'</h2>\n              <div class="card-info-footer_characteristics">\n              <p class="list-films_card-info-footer-genre-film">').concat((0,E.genresSrinking)((0,T.moviesGenresConvertation)(t.genre_ids)),'</p>\n              <p class="list-films_card-info-footer-production-year">\n              ').concat((0,O.dateConvertation)(t.release_date),' <span class="info-block__values--orange">').concat(t.vote_average.toFixed(1),"</span>\n              </p>\n              </div>\n            </div>\n        </a>\n        </li>")})).join("");D("overlay-list-library"),j.innerHTML="",j.insertAdjacentHTML("afterbegin",r)}J.addEventListener("click",F),B.addEventListener("click",F);var Z=null,W=document.querySelector(".modal-close"),Y=document.querySelector("[data-film-modal]");function z(){Z.removeEventListener("click",X),W.removeEventListener("click",z),document.removeEventListener("keydown",K),Y.removeEventListener("click",V)}function K(t){"Escape"===t.key&&z()}function V(t){t.target.classList.contains("backdrop")&&z()}function X(t){setTimeout((function(){Q(U,!1),H.change(1),D("overlay-list-library")}),0)}document.querySelector(".list-films").addEventListener("click",(function(t){if(!t.target.closest("li"))return;e=R.data,(Z=document.querySelector('[data-action="'.concat(e,'"]'))).addEventListener("click",X),W.addEventListener("click",z),document.addEventListener("keydown",K),Y.addEventListener("click",V);var e})),a("4F07H"),a("2Z7mb")}();
//# sourceMappingURL=library.6acf7fb9.js.map
