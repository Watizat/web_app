import { AuthResponse, UserSession } from '../@types/user';

export const getUserDataFromLocalStorage = () => {
  const userDataStr = localStorage.getItem('user');
  const userData = userDataStr
    ? (JSON.parse(userDataStr) as {
        isLogged: boolean;
        session: UserSession;
        token: AuthResponse;
      })
    : null;
  return userData;
};

export const removeUserDataFromLocalStorage = () => {
  localStorage.removeItem('user');
};
