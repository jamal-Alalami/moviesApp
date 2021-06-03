import { AppService, AppServiceForm } from '../';
const apiUrl = 'https://api.themoviedb.org/3';
const api_key = '6b1c4005a6c53a4e25ca03bb639f6b29';

const movieListCall = (payload) => {
  const { type = "" } = payload;
  const url = `${apiUrl}/movie/${type}?api_key=${api_key}&language=en-US&page=1`;
  return AppService({ url, method: 'GET' });
};

const genresCall = (payload) => {
  const url = `${apiUrl}/genre/movie/list?api_key=${api_key}&language=en-US`;
  return AppService({ url, method: 'GET' });
};


const creditCall = (payload) => {
  const { movie_id } = payload;
  const url = `${apiUrl}/movie/${movie_id}/credits?api_key=${api_key}`;
  return AppService({ url, method: 'GET' });
};


export {
  movieListCall,
  genresCall,
  creditCall,
};