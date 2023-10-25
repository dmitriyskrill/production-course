import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { mockProfile } from '../../mockData';

describe('getProfileData.test', () => {
  test('should return "error"', () => {
    const data = mockProfile;
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
