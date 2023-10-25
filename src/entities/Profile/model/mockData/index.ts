import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export const mockProfile = {
  username: 'admin',
  age: 22,
  country: Country.RUSSIA,
  lastname: 'Иванов',
  first: 'Петр',
  city: 'Moscow',
  currency: Currency.USD,
  avatar: 'https://avatarko.ru/img/avatar/15/film_Avatar_14110.jpg',
};
