!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired76b;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired76b=r);var i=r("2eh48"),o=r("2EUDM"),c=r("jf5Po"),l=document.querySelector("#homeL"),s=document.querySelector("#libraryL"),d=document.querySelector("[data-watched-btn]"),u=document.querySelector("[data-queue-btn]");var g=r("2buvE"),v=document.querySelector("#checkbox"),f=document.querySelector("[data-logout]");function b(){d.textContent="Watched",u.textContent="Queue",l.textContent="Home",s.textContent="My library",f.textContent="Log out",(0,i.logInEn)(),(0,o.signUpEn)(),(0,c.footerEn)(),g.languege.setAttribute("lang","en"),(0,g.setLocalLang)()}function m(){l.textContent="Домашня",s.textContent="Моя бібліотека",d.textContent="Переглянуті",u.textContent="В черзі",f.textContent="Вихід",(0,i.logInUk)(),(0,o.signUpUk)(),(0,c.footerUk)(),g.languege.setAttribute("lang","uk"),(0,g.setLocalLang)()}"uk"===localStorage.getItem("localLang")?(v.checked=!0,m()):(v.checked=!1,g.languege.setAttribute("html","en"),b()),v.addEventListener("input",(function(e){e.preventDefault(),v.checked?m():b()})),r("b7JqP"),r("euqRf"),r("1Gwk9"),r("e7S07"),r("cRUDO"),r("a43B7");var y=r("bpxeT"),p=r("2TvXO"),h=r("3SEMc"),L=r("hsNhQ"),w=r("70uTk"),_=(h=r("3SEMc"),null),k=(0,h.getAuth)();(0,h.onAuthStateChanged)(k,(function(e){e&&(_=e.uid)}));var S={data:1,totalData:null,setTotalData:function(){var e=JSON.parse(localStorage.getItem(_));this.totalData=Math.ceil(e.watched.length/9)},change:function(e){this.data=e}},q=document.querySelector(".library-cards-film");function E(e){var t=document.querySelector("#overlay-list-library");t&&t.remove(),S.setTotalData();for(var n="",a=1;a<=S.totalData;a++)n+=x(a);n="<div class='overlay-pagination' id='".concat(e,"'>").concat(n,"</div>"),q.insertAdjacentHTML("beforeend",n)}function x(e){var t="";return e===S.data?t+"<button class='btn-pagination-active'>".concat(e,"</button>"):t+"<button class='btn-pagination'>".concat(e,"</button>")}q.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;var t=document.querySelector("#overlay-list-library");if(!t)return;S.change(Number(e.target.textContent)),t.remove(),function(e){var t=JSON.parse(localStorage.getItem(_))[e];if(S.setTotalData(),t.length>9){var n=9*(S.data-1),a=n+9;return t=t.slice(n,a),void R(_,t)}R(_,t)}(C.data),window.scrollTo(0,0)}));var T=r("2ZaIc"),M=r("2dZGR"),A=r("1wRKO"),C={data:"watched",change:function(e){this.data=e}},H=null,D=(0,h.getAuth)();(0,h.onAuthStateChanged)(D,(function(e){var t;e?(H=e.uid,O.classList.add("library-active-btn"),O.removeAttribute("disabled"),I.removeAttribute("disabled"),N.innerHTML="",R(H,!1)):(U.innerHTML="",t="uk"===localStorage.getItem("localLang")?'<div class="library__warning-wrapper"><strong class="library__warning" id = \'warning\'>На разі тут немає фільмів. Щоб користуватися цією бібліотекою, ви повинні ввійти в систему! Будь ласка, увійдіть або зареєструйтеся!</strong></div>':'<div class="library__warning-wrapper"><strong class="library__warning" id = \'warning\'>Now there are no movies. You must be loginned for using this library! Please log in or sign up!</strong></div>',N.innerHTML="",N.insertAdjacentHTML("beforeend",t),O.setAttribute("disabled","disabled"),I.setAttribute("disabled","disabled"),O.classList.remove("library-active-btn"),I.classList.remove("library-active-btn"))}));var N=document.querySelector(".library__warning-container"),U=document.querySelector(".list-films"),O=document.querySelector("[data-watched-btn]"),I=document.querySelector("[data-queue-btn]");function j(e){if(e.target.hasAttribute("data-watched-btn"))return C.change("watched"),O.classList.add("library-active-btn"),I.classList.remove("library-active-btn"),R(H,!1),S.change(1),void E("overlay-list-library");C.change("queue"),O.classList.remove("library-active-btn"),I.classList.add("library-active-btn"),R(H,!1),S.change(1),E("overlay-list-library")}function R(e,t){var n=localStorage.getItem(e),a=JSON.parse(n)[C.data];a.length>9&&(a=a.slice(0,9)),t&&(a=t);var r=a.map((function(e){return'<li class="link list-films_card" data-id=\''.concat(e.id,'\'>\n        <a class="link list-films_card-info">\n                <div class="card-image__wrapper">\n                    <img\n                    class="list-films_card-info_card-film"\n                    src=').concat((0,A.posterRender)(e.poster_path),'\n                    loading="lazy"\n                    alt="').concat(e.original_title,'"\n                />\n                </div>\n            <div class="list-films_card-info-footer">\n            <h2 class="list-films_card-info-footer-name-film">').concat((0,w.titleSrinking)(e.title),'</h2>\n              <div class="card-info-footer_characteristics">\n              <p class="list-films_card-info-footer-genre-film">').concat((0,w.genresSrinking)((0,L.moviesGenresConvertation)(e.genre_ids)),'</p>\n              <p class="list-films_card-info-footer-production-year">\n              ').concat((0,M.dateConvertation)(e.release_date),' <span class="info-block__values--orange">').concat(e.vote_average.toFixed(1),"</span>\n              </p>\n              </div>\n            </div>\n        </a>\n        </li>")})).join("");E("overlay-list-library"),U.innerHTML="",U.insertAdjacentHTML("afterbegin",r)}O.addEventListener("click",j),I.addEventListener("click",j);var G=null,J=document.querySelector(".modal-close"),P=document.querySelector("[data-film-modal]");function F(){G.removeEventListener("click",Q),J.removeEventListener("click",F),document.removeEventListener("keydown",Z),P.removeEventListener("click",B)}function Z(e){"Escape"===e.key&&F()}function B(e){e.target.classList.contains("backdrop")&&F()}function Q(e){setTimeout((function(){R(H,!1),S.change(1),E("overlay-list-library")}),0)}function Y(){return(Y=e(y)(e(p).mark((function t(){var n;return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,T.fetchMovieGenres)();case 2:if(H){e.next=9;break}return U.innerHTML="",n="uk"===localStorage.getItem("localLang")?'<div class="library__warning-wrapper"><strong class="library__warning" id = \'warning\'>На разі тут немає фільмів. Щоб користуватися цією бібліотекою, ви повинні ввійти в систему! Будь ласка, увійдіть або зареєструйтеся!</strong></div>':'<div class="library__warning-wrapper"><strong class="library__warning" id = \'warning\'>Now there are no movies. You must be loginned for using this library! Please log in or sign up!</strong></div>',N.innerHTML="",N.insertAdjacentHTML("beforeend",n),e.abrupt("return");case 9:R(H,!1),S.change(1),E("overlay-list-library");case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}document.querySelector(".list-films").addEventListener("click",(function(e){if(!e.target.closest("li"))return;t=C.data,(G=document.querySelector('[data-action="'.concat(t,'"]'))).addEventListener("click",Q),J.addEventListener("click",F),document.addEventListener("keydown",Z),P.addEventListener("click",B);var t})),document.querySelector("#checkbox").addEventListener("input",(function(){return Y.apply(this,arguments)})),r("4F07H"),r("2Z7mb"),r("jSiUv")}();
//# sourceMappingURL=library.9389ac13.js.map