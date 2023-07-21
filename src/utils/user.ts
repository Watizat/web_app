import { LoginData } from '../@types/user';

export const getUserDataFromLocalStorage = () => {
  const userDataStr = localStorage.getItem('user');
  const userData = userDataStr ? (JSON.parse(userDataStr) as LoginData) : null;
  return userData;
};

export const removeUserDataFromLocalStorage = () => {
  localStorage.removeItem('user');
};
