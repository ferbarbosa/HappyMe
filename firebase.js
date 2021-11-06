// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-ZYLhGejVrIrDL9YpwZXWjt7zx7SZcR8",
  authDomain: "happyme-520ce.firebaseapp.com",
  databaseURL: "https://happyme-520ce-default-rtdb.firebaseio.com",
  projectId: "happyme-520ce",
  storageBucket: "happyme-520ce.appspot.com",
  messagingSenderId: "262604668662",
  appId: "1:262604668662:web:3bd3e529dc7cc3ab7b76d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);

