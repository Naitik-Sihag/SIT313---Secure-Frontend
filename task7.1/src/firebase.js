import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjGutjpOgKZ5Dnu6iekWwlpzd6s--ll3U",
  authDomain: "task-7-6fb2b.firebaseapp.com",
  projectId: "task-7-6fb2b",
  storageBucket: "task-7-6fb2b.firebasestorage.app",
  messagingSenderId: "515657196863",
  appId: "1:515657196863:web:50eb98e49c80eb300e1f8a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);s