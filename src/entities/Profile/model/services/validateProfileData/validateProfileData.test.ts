import { mockProfile } from 'entities/Profile/model/mockData';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(mockProfile);

    expect(result)
      .toEqual([]);
  });

  test('without first and last name', async () => {
    const result = validateProfileData({
      ...mockProfile,
      first: '',
      lastname: '',
    });

    expect(result)
      .toEqual([
        ValidateProfileError.INCORRECT_USER_DATA,
      ]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({
      ...mockProfile,
      age: NaN,
    });

    expect(result)
      .toEqual([
        ValidateProfileError.INCORRECT_AGE,
      ]);
  });

  test('incorrect country', async () => {
    const result = validateProfileData({
      ...mockProfile,
      country: undefined,
    });

    expect(result)
      .toEqual([
        ValidateProfileError.INCORRECT_COUNTRY,
      ]);
  });

  test('incorrect all', async () => {
    const result = validateProfileData({});

    expect(result)
      .toEqual([
        ValidateProfileError.INCORRECT_USER_DATA,
        ValidateProfileError.INCORRECT_AGE,
        ValidateProfileError.INCORRECT_COUNTRY,
      ]);
  });
});
