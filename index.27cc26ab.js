!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired76b;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired76b=o),o("euqRf"),o("e7S07"),o("cRUDO");var r=o("dIxxU"),i="".concat("https://api.themoviedb.org/3","/trending/").concat("movie","/");function c(t,n,a){return e(r).get("".concat(i).concat(t,"?api_key=").concat("0d2fc6d2597c3f501e7437cf40d08b03","&page=").concat(n,"&language=").concat(a))}var s=o("2ZaIc"),l=o("hsNhQ"),d={data:1,change:function(e){this.data=e},plusOne:function(){this.data++},minusOne:function(){this.data--}};document.querySelector(".library-cards-film").addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;var t=document.querySelector("#overlay-list-trends");if(!t)return;if(t.remove(),"flip-left"===e.target.dataset.action)return t.remove(),d.minusOne(),q(_,d.data),void window.scrollTo(0,0);if("flip-right"===e.target.dataset.action)return t.remove(),d.plusOne(),q(_,d.data),void window.scrollTo(0,0);d.change(Number(e.target.textContent)),t.remove(),q(_,d.data),window.scrollTo(0,0)}));var u=document.querySelector(".library-cards-film"),f='<button class=\'btn-pagination-arrow\' data-action=\'flip-left\'><svg class=\'svg-pagination-btn\' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M12.6666 8H3.33325" stroke="inherit" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M7.99992 12.6667L3.33325 8.00004L7.99992 3.33337" stroke="inherit" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n</button>',v='<button class=\'btn-pagination-arrow\' data-action=\'flip-right\'><svg class=\'svg-pagination-btn\' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M3.33341 8H12.6667" stroke="inherit" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M8.00008 12.6667L12.6667 8.00004L8.00008 3.33337" stroke="inherit" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n</button>';function g(e,t){var n="";return t?n+"<button class=\"btn-pagination pagination-dots\" disabled='true'>...</button>":e===d.data?n+"<button class='btn-pagination-active'>".concat(e,"</button>"):n+"<button class='btn-pagination'>".concat(e,"</button>")}function m(e,t){var n=document.querySelector("#overlay-list-trends"),a=document.querySelector("#overlay-list-search");n&&n.remove(),a&&a.remove();var o="";if(e<=7){for(var r=1;r<=e;r++)o+=g(r);return o="<div class='overlay-pagination' id='".concat(t,"'>").concat(o,"</div>"),void u.insertAdjacentHTML("beforeend",o)}if(d.data<6){if(window.matchMedia("(max-width: 320px)").matches)return o+=g(1),o+=g(2),o+=g(3),o+=g(4),o+=g(5),o+=g(6),o+=g(d.data,!0),o+=g(e),o+=v,o="<div class='overlay-pagination' id='".concat(t,"'>").concat(o,"</div>"),void u.insertAdjacentHTML("beforeend",o);o+=g(1),o+=g(2),o+=g(3),o+=g(4),o+=g(5),o+=g(6),o+=g(7),o+=g(d.data,!0),o+=g(e),o+=v,o="<div class='overlay-pagination' id='".concat(t,"'>").concat(o,"</div>"),u.insertAdjacentHTML("beforeend",o)}else if(d.data<=e-5){if(window.matchMedia("(min-width: 768px)").matches)return o+=f,o+=g(1),o+=g(d.data,!0),o+=g(d.data-2),o+=g(d.data-1),o+=g(d.data),o+=g(d.data+1),o+=g(d.data+2),o+=g(d.data,!0),o+=g(e),o+=v,o="<div class='overlay-pagination' id='".concat(t,"'>").concat(o,"</div>"),void u.insertAdjacentHTML("beforeend",o);o+=f,o+=g(1),o+=g(d.data,!0),o+=g(d.data-1),o+=g(d.data),o+=g(d.data+1),o+=g(d.data,!0),o+=g(e),o+=v,o="<div class='overlay-pagination' id='".concat(t,"'>").concat(o,"</div>"),u.insertAdjacentHTML("beforeend",o)}else{if(window.matchMedia("(max-width: 320px)").matches)return o+=f,o+=g(1),o+=g(d.data,!0),o+=g(e-5),o+=g(e-4),o+=g(e-3),o+=g(e-2),o+=g(e-1),o+=g(e),o="<div class='overlay-pagination' id='".concat(t,"'>").concat(o,"</div>"),void u.insertAdjacentHTML("beforeend",o);o+=f,o+=g(1),o+=g(d.data,!0),o+=g(e-6),o+=g(e-5),o+=g(e-4),o+=g(e-3),o+=g(e-2),o+=g(e-1),o+=g(e),o="<div class='overlay-pagination' id='".concat(t,"'>").concat(o,"</div>"),u.insertAdjacentHTML("beforeend",o)}}var p=o("70uTk"),h=o("2dZGR"),b=o("jSiUv"),y=o("1wRKO"),w=document.querySelector(".list-films"),k=document.querySelector(".trending-selector"),S=document.querySelector(".day"),x=document.querySelector(".week"),L=document.querySelector("#checkbox"),_="day",T=localStorage.getItem("localLang");function q(e,t,n){k.classList.remove("visually-hidden"),c(e,t,n).then((function(e){var t=e.data;localStorage.setItem("downloadedMovies",JSON.stringify("")),localStorage.setItem("downloadedMovies",JSON.stringify(t.results)),m(t.total_pages,"overlay-list-trends");var n=t.results.map((function(e){return'<li class="link list-films_card" data-id="'.concat(e.id,'">\n            <a class="link list-films_card-info">\n                <div class="card-image__wrapper">\n                    <img\n                    class="list-films_card-info_card-film"\n                    src=').concat((0,y.posterRender)(e.poster_path),'\n                    loading="lazy"\n                    alt="').concat((0,p.titleSrinking)(e.title),'"\n                />\n                </div>\n                <div class="list-films_card-info-footer">\n                <h2 class="list-films_card-info-footer-name-film">').concat((0,p.titleSrinking)(e.title),'</h2>\n                  <div class="card-info-footer_characteristics">\n                  <p class="list-films_card-info-footer-genre-film">').concat((0,p.genresSrinking)((0,l.moviesGenresConvertation)(e.genre_ids)),'</p>\n                  <p class="list-films_card-info-footer-production-year">\n                  ').concat((0,h.dateConvertation)(e.release_date),"\n                  </p>\n                  </div>\n                </div>\n            </a>\n            </li>")})).join("");w.innerHTML="",w.insertAdjacentHTML("afterbegin",n)})).catch((function(e){(0,b.notificationLaunch)(e.message)}))}S.disabled=!0,(0,s.fetchMovieGenres)(),q(_,d.data,T),L.addEventListener("input",(function(){L.checked?(T="uk",(0,s.fetchMovieGenres)(),q(_,d.data,T)):(T="en",(0,s.fetchMovieGenres)(),q(_,d.data,T))})),S.addEventListener("click",(function(){w.innerHTML="",S.classList.add("act"),S.disabled=!0,x.classList.remove("act"),x.disabled=!1,_="day",d.change(1),q(_,1,T)})),x.addEventListener("click",(function(){w.innerHTML="",x.classList.add("act"),x.disabled=!0,S.classList.remove("act"),S.disabled=!1,_="week",d.change(1),q(_,1,T)}));var M=o("bpxeT"),C=o("2TvXO"),E=(M=o("bpxeT"),C=o("2TvXO"),r=o("dIxxU"),o("b7JqP")),O="0d2fc6d2597c3f501e7437cf40d08b03",j="".concat("https://api.themoviedb.org/3","/search/movie"),H="";function U(e,t){return A.apply(this,arguments)}function A(){return(A=e(M)(e(C).mark((function t(n,a){var o;return e(C).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(0,E.enableSpinnerSearch)(),H=localStorage.getItem("localLang"),t.next=5,e(r).get("".concat(j,"?api_key=").concat(O,"&query=").concat(n,"&language=").concat(H,"&page=").concat(a));case 5:return o=t.sent.data,(0,E.disableSpinnerSearch)(),t.abrupt("return",o);case 10:t.prev=10,t.t0=t.catch(0),(0,E.disableSpinnerSearch)(),console.error("Smth wrong with api search fetch"+t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}l=o("hsNhQ"),p=o("70uTk"),h=o("2dZGR"),y=o("1wRKO");var I=document.querySelector(".list-films");function N(e){var t=e.map((function(e){return'<li class="link list-films_card" data-id=\''.concat(e.id,'\'>\n        <a class="link list-films_card-info">\n            <div class="card-image__wrapper">\n              <img\n                  class="list-films_card-info_card-film"\n                  src=').concat((0,y.posterRender)(e.poster_path),'\n                  loading="lazy"\n                  alt="').concat((0,p.titleSrinking)(e.title),'"\n              />\n            </div>\n            <div class="list-films_card-info-footer">\n            <h2 class="list-films_card-info-footer-name-film">').concat((0,p.titleSrinking)(e.title),'</h2>\n              <div class="card-info-footer_characteristics">\n              <p class="list-films_card-info-footer-genre-film">').concat((0,p.genresSrinking)((0,l.moviesGenresConvertation)(e.genre_ids)),'</p>\n              <p class="list-films_card-info-footer-production-year">\n                  ').concat((0,h.dateConvertation)(e.release_date),"\n              </p>\n              </div>\n            </div>\n        </a>\n        </li>")})).join("");I.innerHTML="",I.insertAdjacentHTML("afterbegin",t)}b=o("jSiUv");var R=document.querySelector(".search-form"),D=document.querySelector(".warning-notification"),G=document.querySelector(".trending-selector"),J=document.querySelector("input"),B=null;function P(e,t){return Z.apply(this,arguments)}function Z(){return(Z=e(M)(e(C).mark((function t(n,a){var o,r;return e(C).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U(n,a);case 3:if(o=e.sent,0!==(r=o.results).length){e.next=11;break}if("en"!==localStorage.getItem("localLang")){e.next=10;break}return e.abrupt("return",D.textContent="Search result is not successful. Enter the correct movie name, please!");case 10:return e.abrupt("return",D.textContent="Результат пошуку невдалий. Будь ласка, введіть правильну назву фільму!");case 11:localStorage.setItem("downloadedMovies",JSON.stringify("")),localStorage.setItem("downloadedMovies",JSON.stringify(o.results)),D.textContent="",N(r),m(o.total_pages,"overlay-list-search"),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),(0,b.notificationLaunch)(e.t0.message);case 21:case"end":return e.stop()}}),t,null,[[0,18]])})))).apply(this,arguments)}R.addEventListener("submit",(function(e){if(e.preventDefault(),d.change(1),!(B=e.target.elements.searchQuery.value.trim()))return"en"===localStorage.getItem("localLang")?D.textContent="Enter a film title, please!":D.textContent="Будь ласка, введіть назву фільма!";D.textContent="",G.classList.add("visually-hidden"),P(B,d.data)})),J.addEventListener("input",(function(e){D.textContent="",(B=e.target.value)||q(_,1)})),o("a43B7");var Q=o("2eh48"),z=o("2EUDM"),F=o("jf5Po"),K=document.querySelector("#home"),W=document.querySelector("#library"),X=document.querySelector(".search-form-input"),V=document.querySelector(".trending-selector-text"),Y=document.querySelector("#btnDay"),$=document.querySelector("#btnWeek");var ee=o("2buvE"),te=document.querySelector("#checkbox"),ne=document.querySelector("[data-logout]");function ae(){ee.languege.setAttribute("lang","en"),K.textContent="Home",W.textContent="My library",X.setAttribute("placeholder","Movie search"),V.textContent="Popular by",Y.textContent="Day",$.textContent="Week",ne.textContent="Log out",(0,Q.logInEn)(),(0,z.signUpEn)(),(0,F.footerEn)(),(0,ee.setLocalLang)()}function oe(){ee.languege.setAttribute("lang","uk"),K.textContent="Домашня",W.textContent="Моя бібліотека",X.setAttribute("placeholder","Пошук фільмів"),V.textContent="Популярні за",Y.textContent="День",$.textContent="Тиждень",ne.textContent="Вихід",(0,Q.logInUk)(),(0,z.signUpUk)(),(0,F.footerUk)(),(0,ee.setLocalLang)()}"uk"===localStorage.getItem("localLang")?(te.checked=!0,oe()):(te.checked=!1,ee.languege.setAttribute("lang","en"),ae()),te.addEventListener("input",(function(e){e.preventDefault(),te.checked?oe():ae()})),o("4F07H"),o("1Gwk9"),document.querySelector(".library-cards-film").addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;var t=document.querySelector("#overlay-list-search");if(!t)return;if(t.remove(),"flip-left"===e.target.dataset.action)return t.remove(),d.minusOne(),P(B,d.data),void window.scrollTo(0,0);if("flip-right"===e.target.dataset.action)return t.remove(),d.plusOne(),P(B,d.data),void window.scrollTo(0,0);d.change(Number(e.target.textContent)),t.remove(),P(B,d.data),window.scrollTo(0,0)}));var re=document.documentElement,ie=document.querySelector(".scroll-up");document.addEventListener("scroll",(function(){var e=re.scrollHeight-re.clientHeight;re.scrollTop/e>.4?ie.classList.remove("visually-hidden"):ie.classList.add("visually-hidden")})),ie.addEventListener("click",(function(){re.scrollTo({top:1,behavior:"smooth"})})),ie.classList.add("visually-hidden"),o("b7JqP"),o("2Z7mb"),o("jSiUv")}();
//# sourceMappingURL=index.27cc26ab.js.map
