var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired76b;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired76b=a);var r=a("137kL"),i=a("6nRjx"),o=a("gfB1D");const l=document.querySelector("#homeL"),c=document.querySelector("#libraryL"),s=document.querySelector("[data-watched-btn]"),d=document.querySelector("[data-queue-btn]");var u=a("9B33X");const g=document.querySelector("#checkbox"),f=document.querySelector("[data-logout]");function b(){s.textContent="Watched",d.textContent="Queue",l.textContent="Home",c.textContent="My library",f.textContent="Log out",(0,r.logInEn)(),(0,i.signUpEn)(),(0,o.footerEn)(),u.languege.setAttribute("lang","en"),(0,u.setLocalLang)()}function v(){l.textContent="Домашня",c.textContent="Моя бібліотека",s.textContent="Переглянуті",d.textContent="В черзі",f.textContent="Вихід",(0,r.logInUk)(),(0,i.signUpUk)(),(0,o.footerUk)(),u.languege.setAttribute("lang","uk"),(0,u.setLocalLang)()}"uk"===localStorage.getItem("localLang")?(g.checked=!0,v()):(g.checked=!1,u.languege.setAttribute("html","en"),b()),g.addEventListener("input",(function(e){e.preventDefault(),g.checked?v():b()})),a("js4LK"),a("bMZn5"),a("422V3"),a("9CwSo"),a("gY4QW"),a("jE1jP");var m=a("amyG6"),y=a("fteFn"),h=a("kBzfj");m=a("amyG6");let p=null;const L=(0,m.getAuth)();(0,m.onAuthStateChanged)(L,(e=>{e&&(p=e.uid)}));let w={data:1,totalData:null,setTotalData:function(){const e=JSON.parse(localStorage.getItem(p));this.totalData=Math.ceil(e.watched.length/9)},change:function(e){this.data=e}};const _=document.querySelector(".library-cards-film");function k(e){const t=document.querySelector("#overlay-list-library");t&&t.remove(),w.setTotalData();let n="";for(let e=1;e<=w.totalData;e++)n+=S(e);n=`<div class='overlay-pagination' id='${e}'>${n}</div>`,_.insertAdjacentHTML("beforeend",n)}function S(e){let t="";return e===w.data?t+`<button class='btn-pagination-active'>${e}</button>`:t+`<button class='btn-pagination'>${e}</button>`}_.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;const t=document.querySelector("#overlay-list-library");if(!t)return;w.change(Number(e.target.textContent)),t.remove(),function(e){let t=JSON.parse(localStorage.getItem(p))[e];if(w.setTotalData(),t.length>9){let e=9*(w.data-1),n=e+9;return t=t.slice(e,n),void j(p,t)}j(p,t)}(x.data),window.scrollTo(0,0)}));var q=a("3k5Ll"),E=a("l4Mc0");let x={data:"watched",change:function(e){this.data=e}},T=null;const A=(0,m.getAuth)();(0,m.onAuthStateChanged)(A,(e=>{if(e)T=e.uid,H.classList.add("library-active-btn"),H.removeAttribute("disabled"),$.removeAttribute("disabled"),C.innerHTML="",j(T,!1);else{let e;M.innerHTML="",e="uk"===localStorage.getItem("localLang")?'<div class="library__warning-wrapper"><strong class="library__warning" id = \'warning\'>На разі тут немає фільмів. Щоб користуватися цією бібліотекою, ви повинні ввійти в систему! Будь ласка, увійдіть або зареєструйтеся!</strong></div>':'<div class="library__warning-wrapper"><strong class="library__warning" id = \'warning\'>Now there are no movies. You must be loginned for using this library! Please log in or sign up!</strong></div>',C.innerHTML="",C.insertAdjacentHTML("beforeend",e),H.setAttribute("disabled","disabled"),$.setAttribute("disabled","disabled")}}));const C=document.querySelector(".library__warning-container"),M=document.querySelector(".list-films"),H=document.querySelector("[data-watched-btn]"),$=document.querySelector("[data-queue-btn]");function D(e){if(e.target.hasAttribute("data-watched-btn"))return x.change("watched"),H.classList.add("library-active-btn"),$.classList.remove("library-active-btn"),j(T,!1),w.change(1),void k("overlay-list-library");x.change("queue"),H.classList.remove("library-active-btn"),$.classList.add("library-active-btn"),j(T,!1),w.change(1),k("overlay-list-library")}function j(e,t){const n=localStorage.getItem(e);let a=JSON.parse(n)[x.data];a.length>9&&(a=a.slice(0,9)),t&&(a=t);const r=a.map((e=>`<li class="link list-films_card" data-id='${e.id}'>\n        <a class="link list-films_card-info">\n                <div class="card-image__wrapper">\n                    <img\n                    class="list-films_card-info_card-film"\n                    src=https://image.tmdb.org/t/p/original/${e.poster_path}\n                    alt="${e.original_title}"\n                />\n                </div>\n            <div class="list-films_card-info-footer">\n            <h2 class="list-films_card-info-footer-name-film">${(0,h.titleSrinking)(e.title)}</h2>\n              <div class="card-info-footer_characteristics">\n              <p class="list-films_card-info-footer-genre-film">${(0,h.genresSrinking)((0,y.moviesGenresConvertation)(e.genre_ids))}</p>\n              <p class="list-films_card-info-footer-production-year">\n              ${(0,E.dateConvertation)(e.release_date)} <span class="info-block__values--orange">${e.vote_average.toFixed(1)}</span>\n              </p>\n              </div>\n            </div>\n        </a>\n        </li>`)).join("");k("overlay-list-library"),M.innerHTML="",M.insertAdjacentHTML("afterbegin",r)}H.addEventListener("click",D),$.addEventListener("click",D);let N=null;const I=document.querySelector(".modal-close"),U=document.querySelector("[data-film-modal]");function O(){N.removeEventListener("click",F),I.removeEventListener("click",O),document.removeEventListener("keydown",B),U.removeEventListener("click",G)}function B(e){"Escape"===e.key&&O()}function G(e){e.target.classList.contains("backdrop")&&O()}function F(e){setTimeout((()=>{j(T,!1),w.change(1),k("overlay-list-library")}),0)}document.querySelector(".list-films").addEventListener("click",(function(e){if(!e.target.closest("li"))return;t=x.data,N=document.querySelector(`[data-action="${t}"]`),N.addEventListener("click",F),I.addEventListener("click",O),document.addEventListener("keydown",B),U.addEventListener("click",G);var t}));const J=document.querySelector("#checkbox");J.addEventListener("input",(async function(){if(await(0,q.fetchMovieGenres)(),j(T,!1),w.change(1),k("overlay-list-library"),!T){let e,t="";t=J.checked?"uk":"en",M.innerHTML="",e="uk"===localStorage.getItem("localLang")?'<div class="library__warning-wrapper"><strong class="library__warning" id = \'warning\'>На разі тут немає фільмів. Щоб користуватися цією бібліотекою, ви повинні ввійти в систему! Будь ласка, увійдіть або зареєструйтеся!</strong></div>':'<div class="library__warning-wrapper"><strong class="library__warning" id = \'warning\'>Now there are no movies. You must be loginned for using this library! Please log in or sign up!</strong></div>',C.innerHTML="",C.insertAdjacentHTML("beforeend",e)}})),a("6HA5D"),a("brr8Z");
//# sourceMappingURL=library.79162eb6.js.map