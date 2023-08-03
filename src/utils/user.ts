import { AuthResponse } from '../@types/user';

export const getUserDataFromLocalStorage = () => {
  const userDataStr = localStorage.getItem('user');
  try {
    const userData = userDataStr
      ? (JSON.parse(userDataStr) as {
          token: AuthResponse;
          isActive: boolean;
          lastActionDate: number | null;
        })
      : null;
    return userData;
  } catch (error) {
    localStorage.removeItem('user');
    return null;
  }
};

export const removeUserDataFromLocalStorage = () => {
  localStorage.removeItem('user');
};
