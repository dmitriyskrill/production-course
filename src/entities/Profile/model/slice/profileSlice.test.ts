import {
  profileActions, profileReducer, ProfileSchema, updateProfileData,
} from 'entities/Profile';
import { mockProfile } from 'entities/Profile/model/mockData';
import { ValidateProfileError } from '../types/profile';

describe('profileSlice.test', () => {
  test('test set profile', () => {
    const state: DeepPartial<ProfileSchema> = { readOnly: false };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadOnly(true),
    )).toEqual({ readOnly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data: mockProfile, form: { username: '' } };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit(),
    )).toEqual({
      readOnly: true,
      validateErrors: undefined,
      data: mockProfile,
      form: mockProfile,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({
        username: '123456',
      }),
    )).toEqual({
      form: { username: '123456' },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fullfiled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(mockProfile, ''),
    )).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readOnly: true,
      validateError: undefined,
      form: mockProfile,
      data: mockProfile,
    });
  });
});
