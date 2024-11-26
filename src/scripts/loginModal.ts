import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  Auth,
  UserCredential,
} from "firebase/auth";
import { app } from "../firebase/client";
import { AuthResponse, LoginFormElements } from "@/types/auth/index";

const auth: Auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm") as HTMLFormElement;

  if (form) {
    form.addEventListener("submit", async (e: Event) => {
      e.preventDefault();

      const elements = form.elements as LoginFormElements;
      const email: string = elements["login-email"].value;
      const password: string = elements["login-password"].value;

      try {
        const userCredential: UserCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const idToken: string = await userCredential.user.getIdToken();

        const response: Response = await fetch("/api/auth/signIn", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${idToken}`,
            "Content-Type": "application/json",
          },
        });

        const data: AuthResponse = await response.json();

        if (response.ok) {
          window.location.assign("/home");
        } else {
          console.error("Error:", data);
        }
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
      }
    });
  }

  const googleSignin = document.querySelector("#google") as HTMLElement;

  if (googleSignin) {
    googleSignin.addEventListener("click", async () => {
      const provider = new GoogleAuthProvider();

      try {
        const userCredential: UserCredential = await signInWithPopup(
          auth,
          provider
        );
        const idToken: string = await userCredential.user.getIdToken();

        const response: Response = await fetch("/api/auth/signIn", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${idToken}`,
            "Content-Type": "application/json",
          },
        });

        const data: AuthResponse = await response.json();

        if (response.ok) {
          window.location.assign("/home");
        } else {
          console.error("Error:", data);
        }
      } catch (error) {
        console.error("Error al iniciar sesión con Google:", error);
      }
    });
  }
});
