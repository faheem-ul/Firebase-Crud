// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
  doc,
  query,
  onSnapshot,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVEPr2NQEaMpfnRDs2rUVkgwCNr-W-sr4",
  authDomain: "react-form-43e49.firebaseapp.com",
  projectId: "react-form-43e49",
  storageBucket: "react-form-43e49.appspot.com",
  messagingSenderId: "114685123467",
  appId: "1:114685123467:web:5c324bfa3cc55386bded8e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

export const db = getFirestore(app);

export const auth = getAuth();

export {
  collection,
  addDoc,
  doc,
  getDocs,
  query,
  onSnapshot,
  deleteDoc,
  updateDoc,
};
