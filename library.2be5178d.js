var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired76b;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired76b=i),i("gjiCh"),i("bMZn5"),i("9CwSo"),i("gY4QW"),i("jE1jP");var r=i("amyG6"),a=i("fteFn");let l=null;const o=(0,r.getAuth)();(0,r.onAuthStateChanged)(o,(e=>{e?(l=e.uid,m(l)):alert("You must be loginned for using this function!")}));let s="watched";const d=document.querySelector(".list-films"),c=document.querySelector("[data-watched-btn]"),f=document.querySelector("[data-queue-btn]");function u(e){if(e.target.hasAttribute("data-watched-btn"))return s="watched",void m(l);s="queue",m(l)}function m(e){const t=localStorage.getItem(e),n=JSON.parse(t)[s].map((e=>`<li class="link list-films_card" data-id='${e.id}'>\n        <a class="link list-films_card-info">\n                <div class="card-image__wrapper">\n                    <img\n                    class="list-films_card-info_card-film"\n                    src=https://image.tmdb.org/t/p/original/${e.poster_path}\n                    alt="${e.original_title}"\n                />\n                </div>\n            <div class="list-films_card-info-footer">\n            <h2 class="list-films_card-info-footer-name-film">${e.title.slice(0,30)}</h2>\n              <div class="card-info-footer_characteristics">\n              <p class="list-films_card-info-footer-genre-film">${(0,a.moviesGenresConvertation)(e.genre_ids)}</p>\n              <p class="list-films_card-info-footer-production-year">\n                  for example\n              </p>\n              </div>\n            </div>\n        </a>\n        </li>`)).join("");d.innerHTML="",d.insertAdjacentHTML("afterbegin",n)}c.addEventListener("click",u),f.addEventListener("click",u),i("6HA5D"),i("422V3");
//# sourceMappingURL=library.2be5178d.js.map
