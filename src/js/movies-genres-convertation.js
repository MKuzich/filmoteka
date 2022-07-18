export function moviesGenresConvertation(genres) {
  const savedGenres = localStorage.getItem('genres');
  const parsedGenres = JSON.parse(savedGenres);
  console.log(parsedGenres);
  const newGenres = [];
  genres.map(genre => {
    console.log(genre);
    parsedGenres.map(parsedGenre => {
      if (parsedGenre.id === genre) {
        newGenres.push(parsedGenre.name);
      }
    });
  });
  return newGenres;
}
