/// <reference path="../.astro/types.d.ts" />
/// <reference types="node" />

declare namespace NodeJS {
    interface ProcessEnv {
      FIREBASE_PROJECT_ID: string;
      FIREBASE_PRIVATE_KEY_ID: string;
      FIREBASE_PRIVATE_KEY: string;
      FIREBASE_CLIENT_EMAIL: string;
      FIREBASE_CLIENT_ID: string;
      FIREBASE_AUTH_URI: string;
      FIREBASE_TOKEN_URI: string;
      FIREBASE_AUTH_CERT_URL: string;
      FIREBASE_CLIENT_CERT_URL: string;
      FIREBASE_API_KEY: string;
    }
  }
  