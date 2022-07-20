export function moviesGenresConvertation(genres) {
  const savedGenres = localStorage.getItem('genres');
  const parsedGenres = JSON.parse(savedGenres);
  const newGenres = [];
  genres.map(genre => {
    parsedGenres.map(parsedGenre => {
      if (parsedGenre.id === genre) {
        newGenres.push(parsedGenre.name);
      }
    });
  });
  return newGenres;
}
