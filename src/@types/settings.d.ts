export interface SettingsState {
  loginCredentials: {
    email: string;
    password: string;
  };
  user: {
    isLogged: boolean;
    fullname: string;
  };
  isLoading: boolean;
  error: string | null;
}

export type KeyOfloginCredentials = keyof SettingsState['loginCredentials'];
