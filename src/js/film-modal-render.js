export function createMarkupModal({
  original_title,
  title,
  vote_average,
  vote_count,
  popularity,
  overview,
  poster_path,
  genre_ids
}) {

//   const genres = localStorage.getItem('genres')

  return `<section class="modal-content">
    <div class="modal-thumb">
      <img
        class="modal-thumb__img"
        src="https://image.tmdb.org/t/p/original/${poster_path}"
        alt="${title}"
      />
    </div>
    <div class="modal-description">
      <h2 class="modal-description__title">${title}</h2>
      <table class="modal-description__info-block">
        <tbody>
          <tr>
            <td class="info-block__keys">Vote / Votes</td>
            <td class="info-block__values">
              <span class="info-block__values--orange">${vote_average.toFixed(1)}</span> /
              <span class="info-block__values--gray">${vote_count}</span>
            </td>
          </tr>
          <tr>
            <td class="info-block__keys">Popularity</td>
            <td class="info-block__values">${popularity.toFixed(1)}</td>
          </tr>
          <tr>
            <td class="info-block__keys">Original title</td>
            <td class="info-block__values--uppercase">${original_title}</td>
          </tr>
          <tr>
            <td class="info-block__keys">Genres</td>
            <td class="info-block__values">${genre_ids.join(', ')}</td>
          </tr>
        </tbody>
      </table>
      <p class="modal-description__about-title">about</p>
      <p class="modal-description__about">
        ${overview}
      </p>
      <div class="modal-buttons">
        <button class="modal-button" data-action="watch" >Add to watched</button>
        <button class="modal-button" data-action="queue" >Add to queue</button>
      </div>
    </div>
  </section>`;
}
