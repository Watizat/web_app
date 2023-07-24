import jwt_decode from 'jwt-decode';

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
import {
  getUserDataFromLocalStorage,
  removeUserDataFromLocalStorage,
} from '../../utils/user';

const initialState: UserState = {
  loginCredentials: {
    email: '',
    password: '',
  },
  user: {
    id: '',
    role: '',
    app_access: false,
    admin_access: false,
    iat: null,
    exp: null,
    iss: '',
  },
  isLogged: false,
  token: {
    access_token: '',
    expires: 0,
    refresh_token: '',
    time_out: null,
    ...getUserDataFromLocalStorage(),
  },
  isLoading: false,
  error: null,
};

export const changeLoginCredentialsField = createAction<{
  field: KeyOfloginCredentials;
  value: string;
}>('user/change-credentials-login');

export const login = createAsyncThunk(
  'user/login',
  async (loginCredentials: UserState['loginCredentials']) => {
    const { data: response } = await axiosInstance.post<{ data: LoginData }>(
      '/auth/login',
      loginCredentials
    );
    response.data.time_out = response.data.expires + Date.now();
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
  }
);

export const logout = createAsyncThunk('user/logout', async () => {
  const user = getUserDataFromLocalStorage();
  await axiosInstance.post('/auth/logout', {
    refresh_token: user?.refresh_token,
  });
});

export const fetchUser = createAsyncThunk('settings/fetchUser', async () => {
  const { data: user } = await axiosInstance.get<{ data: UserData }>(
    '/users/me'
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
      const jwtDecode = jwt_decode<UserData>(token);

      state.user = { ...jwtDecode };
      state.error = null;
      console.log(state.user);
      state.token.access_token = token;
      state.isLogged = true;

      state.loginCredentials = { ...initialState.loginCredentials };
      state.isLoading = false;
    })
    .addCase(logout.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(logout.rejected, (state) => {
      state.error = 'Une erreur est survenue, lors de la déconnexion';
      state.isLoading = false;
    })
    .addCase(logout.fulfilled, () => {
      removeUserDataFromLocalStorage();
    })
    .addCase(fetchUser.fulfilled, (state, action) => {
      state.user = { ...action.payload };
      console.log(action.payload);
    });
});
