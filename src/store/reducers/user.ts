import {
  createReducer,
  createAsyncThunk,
  createAction,
} from '@reduxjs/toolkit';

import {
  UserState,
  KeyOfloginCredentials,
  LoginData,
  UserData,
} from '../../@types/user';
import { axiosInstance } from '../../utils/axios';

const initialState: UserState = {
  loginCredentials: {
    email: '',
    password: '',
  },
  user: { first_name: '', last_name: '', email: '', role: '' },
  isLogged: false,
  access_token: '',
  isLoading: false,
  error: null,
};

export const changeLoginCredentialsField = createAction<{
  field: KeyOfloginCredentials;
  value: string;
}>('settings/change-credentials-login');

export const login = createAsyncThunk(
  'settings/login',
  async (loginCredentials: UserState['loginCredentials']) => {
    const { data: response } = await axiosInstance.post<{ data: LoginData }>(
      '/auth/login',
      loginCredentials
    );
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
  }
);

export const fetchUser = createAsyncThunk('settings/fetchUser', async () => {
  const { data: user } = await axiosInstance.get<{ data: UserData }>(
    '/users/me?fields'
  );
  return user.data;
});

export default createReducer(initialState, (builder) => {
  builder
    .addCase(changeLoginCredentialsField, (state, action) => {
      const { field, value } = action.payload;
      state.loginCredentials[field] = value;
    })
    .addCase(login.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(login.rejected, (state) => {
      state.error = 'Email ou mot de passe incorrect(s)';
      state.isLoading = false;
    })
    .addCase(login.fulfilled, (state, action) => {
      const { access_token: token } = action.payload;
      state.access_token = token;
      state.isLogged = true;

      state.loginCredentials = { ...initialState.loginCredentials };
      state.isLoading = false;
    })
    .addCase(fetchUser.fulfilled, (state, action) => {
      console.log('ici', action.payload);
      state.user = { ...action.payload };
    });
});
