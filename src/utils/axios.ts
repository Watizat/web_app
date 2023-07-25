import axios, { AxiosError, AxiosResponse } from 'axios';
import {
  getUserDataFromLocalStorage,
  removeUserDataFromLocalStorage,
} from './user';
import { AuthResponse, UserSession } from '../@types/user';

// eslint-disable-next-line import/prefer-default-export
export const axiosInstance = axios.create({
  baseURL: 'https://watizat.lunalink.nl/',
});

// Tools pour empecher les doubles requetes refresh
const authRefresh: {
  inProgress: boolean;
  bearer: string | undefined;
  doRefresh: (user: {
    isLogged: boolean;
    session: UserSession;
    token: AuthResponse;
  }) => string | undefined;
} = {
  inProgress: false,
  bearer: '',
  doRefresh: (user) => {
    authRefresh.inProgress = true;
    axios
      .post<{ data: AuthResponse }>(
        'https://watizat.lunalink.nl/auth/refresh',
        {
          refresh_token: user.token.refresh_token,
          mode: 'json',
        }
      )
      .then(({ data: response }) => {
        // eslint-disable-next-line no-param-reassign
        user.token = { ...response.data };
        localStorage.setItem('user', JSON.stringify(user));
        authRefresh.bearer = `Bearer ${response.data.access_token}`;
      })
      .catch(() => {
        // eslint-disable-next-line no-param-reassign
        authRefresh.bearer = undefined;
        removeUserDataFromLocalStorage();
      })
      .finally(() => {
        authRefresh.inProgress = false;
      });

    return authRefresh.bearer;
  },
};

axiosInstance.interceptors.request.use((config) => {
  const user = getUserDataFromLocalStorage();

  if (user) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${user.token.access_token}`;

    if (Date.now() - user.session.exp * 1000 > 0 && !authRefresh.inProgress) {
      const bearer = authRefresh.doRefresh(user);
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = bearer;
    }
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response;
  },
  (error: AxiosError) => {
    console.log(error.status);
    return error;
  }
);
