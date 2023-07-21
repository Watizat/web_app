import { createReducer, createAction } from '@reduxjs/toolkit';

import { SettingsState, KeyOfloginCredentials } from '../../@types/settings';

const initialState: SettingsState = {
  loginCredentials: {
    email: '',
    password: '',
  },
  user: {
    isLogged: false,
    fullname: '',
  },
  isLoading: false,
  error: null,
};

export const changeLoginCredentialsField = createAction<{
  field: KeyOfloginCredentials;
  value: string;
}>('settings/change-credentials-login');

export default createReducer(initialState, (builder) => {
  builder.addCase(changeLoginCredentialsField, (state, action) => {
    const { field, value } = action.payload;
    state.loginCredentials[field] = value;
  });
});
