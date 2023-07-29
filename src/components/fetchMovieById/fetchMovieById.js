import axios from 'axios';

export default async function fetchMoviesById(movieId) {
  const params = new URLSearchParams({
    api_key: '2f202abcab3fe0934220a17698275697',
  });

  try {
    const response = await axios.get(`
    https://api.themoviedb.org/3/movie/${movieId}?${params}`);
    const result = await response.data;
    return result;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
}

/* Wywoływanie funkcji:
fetchTrendyMovies(); - wywołanie domyślne tj. page = 1 i wyszukiwanie popularnych z tygodnia
fetchTrendyMovies(5); - wywołanie strony 5 i wyszukiwanie popularnych z tygodnia
fetchTrendyMovies(3, "day"); - wywołanie strony 3 i wyszukiwanie popularnych z dnia
fetchTrendyMovies(undefined, "day"); - wywołanie strony domyślnej tj. page = 1 i wyszukiwanie popularnych z dnia
*/
