import jwt_decode from 'jwt-decode';

import {
  createReducer,
  createAsyncThunk,
  createAction,
} from '@reduxjs/toolkit';

import {
  UserState,
  KeyOfloginCredentials,
  UserSession,
  AuthResponse,
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

export const setIsLogged = createAction<boolean>('user/checkIsLogged');
// export const fetchUser = createAsyncThunk('settings/fetchUser', async () => {
//   const { data: user } = await axiosInstance.get<{ data: UserData }>(
//     '/users/me'
//   );
//   return user.data;
// });

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
      state.isLogged = false;
      removeUserDataFromLocalStorage();
    })
    .addCase(logout.rejected, (state) => {
      state.error = 'Une erreur est survenue, lors de la déconnexion';
      state.isLoading = false;
    })
    .addCase(logout.fulfilled, () => {})
    .addCase(setIsLogged, (state, action) => {
      state.isLogged = action.payload;
    });
});
