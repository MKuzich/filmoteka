export function posterRender(posterUrl) {
  if (posterUrl === null) {
    return 'https://subscribenow.com.au/time/asia/Solo/Content/Images/noCover.gif';
  }
  return 'https://image.tmdb.org/t/p/original/' + posterUrl;
}
