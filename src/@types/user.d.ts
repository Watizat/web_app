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
  first_name: string;
  last_name: string;
  email: string;
  role: string;
}
