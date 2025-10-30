import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAi2DbnWUxvSfF0n5lDnsFVC3WSh32Gb-E",
  authDomain: "task8-1-50e7a.firebaseapp.com",
  projectId: "task8-1-50e7a",
  storageBucket: "task8-1-50e7a.firebasestorage.app",
  messagingSenderId: "725058906847",
  appId: "1:725058906847:web:9450ae2f5fc24c9037976a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);