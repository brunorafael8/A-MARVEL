import api from './api';
import md5 from 'md5';
import { API_KEY, API_PRIVATE_KEY } from '@env';

const ts = new Date().getTime();
const hash = md5(`${ts}${API_PRIVATE_KEY}${API_KEY}`);

export const fetchCharacters = (offset: number) => {
  console.log(API_KEY);
  return api.get(
    `characters?ts=${ts}&nameStartsWith=A&orderBy=name&limit=10&offset=${offset}&apikey=${API_KEY}&hash=${hash}`,
  );
};
