import { initializeApp, cert, getApps } from "firebase-admin/app";
import type { ServiceAccount } from "firebase-admin";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import * as dotenv from "dotenv";
import type { DecodedIdToken } from "firebase-admin/auth";
import type { SessionCheckResult } from "../types/auth/index";

dotenv.config();

const activeApps = getApps();
const serviceAccount = {
  type: "service_account",
  project_id: import.meta.env.FIREBASE_PROJECT_ID,
  private_key_id: import.meta.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: import.meta.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  client_email: import.meta.env.FIREBASE_CLIENT_EMAIL,
  client_id: import.meta.env.FIREBASE_CLIENT_ID,
  auth_uri: import.meta.env.FIREBASE_AUTH_URI,
  token_uri: import.meta.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: import.meta.env.FIREBASE_AUTH_CERT_URL,
  client_x509_cert_url: import.meta.env.FIREBASE_CLIENT_CERT_URL,
} as ServiceAccount;

const initApp = () => {
  if (import.meta.env.PROD) {
    console.info("PROD env detected. Using default service account.");
    return initializeApp();
  }
  console.info("Loading service account from env.");
  return initializeApp({
    credential: cert(serviceAccount),
  });
};

export const app = activeApps.length === 0 ? initApp() : activeApps[0];
export const db = getFirestore(app);

// ** Add the checkSession function **
const auth = getAuth(app);

export async function checkSession(
  cookieValue: string
): Promise<SessionCheckResult> {
  try {
    const decodedCookie: DecodedIdToken = await auth.verifySessionCookie(
      cookieValue
    );
    if (decodedCookie) {
      return {
        isAuthenticated: true,
        redirectUrl: "/chat",
      };
    }
  } catch (error) {
    console.error("Error verifying session cookie:", error);
    return {
      isAuthenticated: false,
      error: "Invalid session",
    };
  }
  return { isAuthenticated: false };
}
