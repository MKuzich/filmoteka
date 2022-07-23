export function titleSrinking(string) {
  if (string.length > 35) {
    return string.slice(0, 28) + '...';
  }
  return string;
}

export function genresSrinking(array) {
  let lang = localStorage.getItem('localLang');
  if (array.length > 3) {
    return `${array[0]}, ${array[1]}, ${lang === 'en' ? 'other' : 'інші'}`;
  }
  return array.join(', ');
}
