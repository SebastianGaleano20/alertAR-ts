export interface FirebaseAuthError extends Error {
  code: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  error?: string;
  url?: string;
}

export interface LoginFormElements extends HTMLFormControlsCollection {
  "login-email": HTMLInputElement;
  "login-password": HTMLInputElement;
}

export interface SessionCheckResult {
  isAuthenticated: boolean;
  redirectUrl?: string;
  error?: string;
}

export interface RegisterResponse {
  error?: string;
  success?: boolean;
  redirectUrl?: string;
}
