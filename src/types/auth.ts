// auth.ts
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebase/client";

const auth = getAuth(app);

export const handleEmailLogin = async (e: SubmitEvent): Promise<void> => {
  e.preventDefault();

  const email = (document.getElementById("login-email") as HTMLInputElement)
    ?.value;
  const password = (
    document.getElementById("login-password") as HTMLInputElement
  )?.value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const idToken = await userCredential.user.getIdToken();

    const response = await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${idToken}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      window.location.assign("/home");
    } else {
      console.error("Error:", data.error);
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
  }
};

export const handleGoogleLogin = async (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  try {
    const userCredential = await signInWithPopup(auth, provider);
    const idToken = await userCredential.user.getIdToken();

    const response = await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${idToken}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      window.location.assign("/home");
    } else {
      console.error("Error:", data.error);
    }
  } catch (error) {
    console.error("Error al iniciar sesión con Google:", error);
  }
};

export const initAuthEvents = (): void => {
  const form = document.getElementById("loginForm") as HTMLFormElement | null;
  if (form) {
    form.addEventListener("submit", handleEmailLogin);
  }

  const googleSignin = document.querySelector(
    "#google"
  ) as HTMLButtonElement | null;
  if (googleSignin) {
    googleSignin.addEventListener("click", handleGoogleLogin);
  }
};
