export function posterRender(posterUrl) {
  if (posterUrl === null) {
    return 'сюди посилання на фото з інтренету';
  }
  return 'https://image.tmdb.org/t/p/original/' + posterUrl;
}
