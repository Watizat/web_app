import jwt_decode from 'jwt-decode';

import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';

import { Inputs } from '../../@types/formInputs';
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

const timeout = 5 * 1000 * 60;

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
  timeout,
  isActive: false,
  lastActionDate: null,
  isRegistered: false,
  ...getUserDataFromLocalStorage(),
};

export const changeLoginCredentialsField = createAction<{
  field: KeyOfloginCredentials;
  value: string;
}>('user/change-credentials-login');

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (formData: Inputs) => {
    try {
      const {data } = await axiosInstance.post('/users', {
        ...formData,
        role: '5754603f-add3-4823-9c77-a2f9789074fc',
      });
      return data.data
    } catch (error) {
      return error
    }
  }
);

export const editUser = createAsyncThunk(
  'user/edit-user',
  async (formData: Inputs) => {
    await axiosInstance.patch(`/users/${formData.id}`, {
      ...formData,
    });
  }
);

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
    await axiosInstance.post('/auth/password/request', {
      email,
      reset_url: 'http://localhost:5173/recover-password',
    });
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
      state.isActive = true;
      state.lastActionDate = Date.now();
      state.loginCredentials = { ...initialState.loginCredentials };
      state.isLoading = false;
      localStorage.setItem(
        'user',
        JSON.stringify({
          token: state.token,
          isActive: state.isActive,
          lastActionDate: state.lastActionDate,
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
      state.isActive = false;
      state.lastActionDate = null;
      removeUserDataFromLocalStorage();
    })
    .addCase(askPassword.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(askPassword.rejected, (state) => {
      state.isLoading = false;
      state.message = null;
      state.error =
        'Une erreur est survenue lors de la demande de mot de passe';
    })
    .addCase(askPassword.fulfilled, (state) => {
      state.isLoading = false;
      state.message = 'Le mail a bien été envoyé';

      state.error = null;
    })
    .addCase(setIsLogged, (state, action) => {
      state.isLogged = action.payload.isLogged;
    })
    .addCase(registerUser.fulfilled, (state) => {
      state.isLoading = false;
      state.message = 'Votre inscription à bien été prise en compte et va être vérifiée';
    }).addCase(registerUser.rejected, (state) => {
      state.isLoading = false;
      state.message = 'Erreur lors de la création du compte';
    })
});
