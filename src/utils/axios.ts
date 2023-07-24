import axios from 'axios';
import {
  getUserDataFromLocalStorage,
  removeUserDataFromLocalStorage,
} from './user';

// eslint-disable-next-line import/prefer-default-export
export const axiosInstance = axios.create({
  baseURL: 'https://watizat.lunalink.nl/',
});

// async function refresh({
//   refresh_token,
//   mode,
// }: {
//   refresh_token: string;
//   mode: string;
// }) {
//   const response = await axios.post(
//     'https://watizat.lunalink.nl/auth/refresh',
//     {
//       refresh_token,
//       mode,
//     }
//   );
//   return response.data;
// }
/* stop to delete */
axiosInstance.interceptors.request.use(async (config) => {
  const user = getUserDataFromLocalStorage();

  if (user) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${user.access_token}`;
    if (user?.time_out && Date.now() - user.time_out > 0) {
      axios
        .post('https://watizat.lunalink.nl/auth/refresh', {
          refresh_token: user.refresh_token,
          mode: 'json',
        })
        .then((response) => {
          response.data.time_out = response.data.expires + Date.now();
          localStorage.setItem('user', JSON.stringify(response.data));
          // eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `Bearer ${response.data.access_token}`;
        })
        .catch(() => {
          // eslint-disable-next-line no-param-reassign
          config.headers.Authorization = undefined;
          removeUserDataFromLocalStorage();
        });
    }
  }
  return config;
});

/* a partir ici */
/* import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://watizat.lunalink.nl/',
});

axiosInstance.interceptors.request.use(async (config) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  if (user && user.access_token) {
    config.headers.Authorization = `Bearer ${user.access_token}`;
    if (user.time_out && Date.now() >= user.time_out) {
      try {
        const response = await axios.post('https://watizat.lunalink.nl/auth/refresh', {
          refresh_token: user.refresh_token,
          mode: 'json',
        });

        const newToken = response.data;
        newToken.time_out = newToken.expires + Date.now();
        localStorage.setItem('user', JSON.stringify(newToken));
        config.headers.Authorization = `Bearer ${newToken.access_token}`;
      } catch (error) {
        config.headers.Authorization = undefined;
        localStorage.removeItem('user');
      }
    }
  }
  return config;
}); */
