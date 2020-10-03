export interface AuthState {
  isAuth: boolean;
  accessToken: string;
  authError: string;
  loading: boolean;
}

export interface AuthStartPayload {
  username: string;
  password: string;
}
