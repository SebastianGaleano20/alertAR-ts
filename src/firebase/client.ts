import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
import type { FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCdgsutSpoFtdtrel-DAoQaBhIrCkIWWOE",
  authDomain: "alertar-app.firebaseapp.com",
  projectId: "alertar-app",
  storageBucket: "alertar-app.firebasestorage.app",
  messagingSenderId: "24138897821",
  appId: "1:24138897821:web:af8c3777b8e02dd15c3774",
  measurementId: "G-BTB0X883BM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth, app };
