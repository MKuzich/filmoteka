import { moviesGenresConvertation } from './movies-genres-convertation';

export const listFilms = document.querySelector('.list-films');

export function filmGallaryMarkup(array) {
  const markup = array
    .map(item => {
      return `<li class="link list-films_card" data-id='${item.id}'>
        <a class="link list-films_card-info">
            <img
                class="list-films_card-info_card-film"
                src=https://image.tmdb.org/t/p/original/${item.poster_path}
                alt="movie poster"
                width="395"
                height="574"
            />
            <div class="list-films_card-info-footer">
            <h2 class="list-films_card-info-footer-name-film">${item.title.slice(
              0,
              30
            )}</h2>
              <div class="card-info-footer_characteristics">
              <p class="list-films_card-info-footer-genre-film">${moviesGenresConvertation(
                item.genre_ids
              )}</p>
              <p class="list-films_card-info-footer-production-year">
                  for example
              </p>
              </div>
            </div>
        </a>
        </li>`;
    })
    .join('');

  listFilms.insertAdjacentHTML('afterbegin', markup);
}
