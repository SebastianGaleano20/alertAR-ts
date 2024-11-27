import type { CookieOptions } from "@/types/auth/cookies";

export interface AuthRequest {
  request: Request;
  cookies: {
    set: (name: string, value: string, options: CookieOptions) => void;
  };
}

export interface AuthResponse {
  url?: string;
  message?: string;
  status: number;
}
