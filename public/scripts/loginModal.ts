import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
  } from 'firebase/auth';
  import { app } from '../../src/firebase/client';

  const auth = getAuth(app);
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm') as HTMLFormElement | null; 
    if (form) {
      form.addEventListener('submit', async (e: Event) => { 
        e.preventDefault();
  
        
        const emailInput = document.getElementById('login-email') as HTMLInputElement | null;
        const passwordInput = document.getElementById('login-password') as HTMLInputElement | null;
  
        if (!emailInput || !passwordInput) {
          console.error("Elementos del formulario no encontrados.");
          return;
        }
  
        const email = emailInput.value; 
        const password = passwordInput.value;
  
        try {
          // Autenticación con email y contraseña
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const idToken = await userCredential.user.getIdToken();
  
          // Llamada al servidor
          const response = await fetch("/api/auth/signin", {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${idToken}`,
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();

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
    });
  
// import {
//     getAuth,
//     GoogleAuthProvider,
//     signInWithPopup,
//     signInWithEmailAndPassword,
//   } from 'firebase/auth';
//   import { app } from '../../src/firebase/client';

//   const auth = getAuth(app);

//   document.addEventListener('DOMContentLoaded', () => {

//     const form = document.getElementById('loginForm');
//     if (form) {
//       form.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         const email = document.getElementById('login-email').value;
//         const password = document.getElementById('login-password').value;

//         try {
//           const userCredential = await signInWithEmailAndPassword(auth, email, password);
//           const idToken = await userCredential.user.getIdToken();

        
//           const response = await fetch("/api/auth/signin", {
//             method: 'POST',
//             headers: {
//               Authorization: `Bearer ${idToken}`,
//               'Content-Type': 'application/json',
//             },
//           });

//           const data = await response.json();

        
//           if (response.ok) {
//             window.location.assign("/home");
//           } else {
//             console.error("Error:", data);
//           }
//         } catch (error) {
//           console.error("Error al iniciar sesión:", error);
//         }
//       });
//     }

  
//     const googleSignin = document.querySelector("#google");
//     if (googleSignin) {
//       googleSignin.addEventListener("click", async () => {
//         const provider = new GoogleAuthProvider();
//         try {

//           const userCredential = await signInWithPopup(auth, provider);
//           const idToken = await userCredential.user.getIdToken();

        
//           const response = await fetch("/api/auth/signin", {
//             method: 'POST',
//             headers: {
//               Authorization: `Bearer ${idToken}`,
//               'Content-Type': 'application/json',
//             },
//           });

//           const data = await response.json();

        
//           if (response.ok) {
//             window.location.assign("/home");
//           } else {
//             console.error("Error:", data);
//           }
//         } catch (error) {
//           console.error("Error al iniciar sesión con Google:", error);
//         }
//       });
//     }
//   });

