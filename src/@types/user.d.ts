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
  timeout: number;
  isActive: boolean;
  lastActionDate: number | null;
  isRegistered: boolean;
  isAdmin: boolean;
  city: string | null;
}

export interface UserSession {
  id: string;
  role: string;
  app_access: boolean;
  admin_access: boolean;
  iat: number;
  exp: number;
  iss: string;
  role: string;
}

export interface AuthResponse {
  access_token: string;
  expires: number;
  refresh_token: string;
}

export interface DirectusUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
  zone: number;
  last_access: string;
}

export type KeyOfloginCredentials = keyof UserState['loginCredentials'];
