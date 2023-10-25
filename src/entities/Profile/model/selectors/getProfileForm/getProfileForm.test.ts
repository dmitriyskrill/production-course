import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('should return "error"', () => {
    const data = {
      username: 'admin',
      age: 22,
      country: Country.RUSSIA,
      lastname: 'Иванов',
      first: 'Петр',
      city: 'Moscow',
      currency: Currency.USD,
      avatar: 'https://avatarko.ru/img/avatar/15/film_Avatar_14110.jpg',
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
