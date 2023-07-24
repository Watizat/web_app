export interface UserState {
  loginCredentials: {
    email: string;
    password: string;
  };
  isLogged: boolean;
  token: LoginData;
  isLoading: boolean;
  error: string | null;
  user: UserData;
}

export type KeyOfloginCredentials = keyof UserState['loginCredentials'];

export interface LoginData {
  access_token: string;
  expires: number;
  refresh_token: string;
  time_out: number | null;
}

export interface UserData {
  id: string;
  role: string;
  app_access: boolean;
  admin_access: boolean;
  iat: null;
  exp: null;
  iss: string;
}
