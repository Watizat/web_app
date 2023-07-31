import jwt_decode from 'jwt-decode';

import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';

import {
  AuthResponse,
  KeyOfloginCredentials,
  UserSession,
  UserState,
} from '../../@types/user';
import { axiosInstance } from '../../utils/axios';
import {
  getUserDataFromLocalStorage,
  removeUserDataFromLocalStorage,
} from '../../utils/user';

const initialState: UserState = {
  loginCredentials: {
    email: '',
    password: '',
  },

  session: null,
  isLogged: false,
  token: null,
  isLoading: false,
  error: null,
  message: null,
  ...getUserDataFromLocalStorage(),
};

export const changeLoginCredentialsField = createAction<{
  field: KeyOfloginCredentials;
  value: string;
}>('user/change-credentials-login');

export const login = createAsyncThunk(
  'user/login',
  async (loginCredentials: UserState['loginCredentials']) => {
    const { data: response } = await axiosInstance.post<{
      data: AuthResponse;
    }>('/auth/login', loginCredentials);
    return response.data;
  }
);

export const logout = createAsyncThunk('user/logout', async () => {
  const user = getUserDataFromLocalStorage();
  await axiosInstance.post('/auth/logout', {
    refresh_token: user?.token.refresh_token,
  });
});

export const askPassword = createAsyncThunk(
  'user/ask-password',
  async (email: string) => {
    console.log({ email });
    const response = await axiosInstance.post('/auth/password/request', {
      email,
      reset_url: 'https://watizat.aliceout.io/recover-password',
    });
    console.log(response, response.data);
  }
);

export const setIsLogged = createAction<{
  isLogged: boolean;
}>('user/setIsLogged');

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
      state.isLogged = false;
    })
    .addCase(login.fulfilled, (state, action) => {
      const { access_token: token } = action.payload;
      const jwtDecode = jwt_decode<UserSession>(token);
      state.session = { ...jwtDecode };
      state.token = { ...action.payload };
      state.error = null;
      state.isLogged = true;

      state.loginCredentials = { ...initialState.loginCredentials };
      state.isLoading = false;
      localStorage.setItem(
        'user',
        JSON.stringify({
          isLogged: state.isLogged,
          session: state.session,
          token: state.token,
        })
      );
    })
    .addCase(logout.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(logout.rejected, (state) => {
      state.error = 'Une erreur est survenue, lors de la déconnexion';
      state.isLoading = false;
    })
    .addCase(logout.fulfilled, (state) => {
      state.isLoading = false;
      state.isLogged = false;
      removeUserDataFromLocalStorage();
    })
    .addCase(askPassword.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(askPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.message = null;
      state.error =
        'Une erreur est survenue lors de la demande de mot de passe';
    })
    .addCase(askPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = 'Le mail a bien été envoyé';

      state.error = null;
    })
    .addCase(setIsLogged, (state, action) => {
      state.isLogged = action.payload.isLogged;
    });
});
