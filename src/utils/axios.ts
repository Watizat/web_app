import axios from 'axios';
import { getUserDataFromLocalStorage } from './user';

// eslint-disable-next-line import/prefer-default-export
export const axiosInstance = axios.create({
  baseURL: 'https://watizat.lunalink.nl/',
});

axiosInstance.interceptors.request.use((config) => {
  const user = getUserDataFromLocalStorage();
  console.log(config.url);
  // eslint-disable-next-line no-param-reassign
  if (user) config.headers.Authorization = `Bearer ${user.access_token}`;
  return config;
});
