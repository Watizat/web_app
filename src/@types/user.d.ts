export interface UserState {
  loginCredentials: {
    email: string;
    password: string;
  };
  session: UserSession | null;
  isLogged: boolean;
  token: AuthResponse | null;
  isLoading: boolean;
  error: string | null;
  message: string | null;
}

export interface UserSession {
  id: string;
  role: string;
  app_access: boolean;
  admin_access: boolean;
  iat: number;
  exp: number;
  iss: string;
}

export interface AuthResponse {
  access_token: string;
  expires: number;
  refresh_token: string;
}

export type KeyOfloginCredentials = keyof UserState['loginCredentials'];
