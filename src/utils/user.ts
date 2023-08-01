import { AuthResponse } from '../@types/user';

export const getUserDataFromLocalStorage = () => {
  const userDataStr = localStorage.getItem('user');
  const userData = userDataStr
    ? (JSON.parse(userDataStr) as {
        token: AuthResponse;
        isActive: boolean;
        lastActionDate: number | null;
      })
    : null;
  return userData;
};

export const removeUserDataFromLocalStorage = () => {
  localStorage.removeItem('user');
};
