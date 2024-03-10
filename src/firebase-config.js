// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4pjUYOt-vwWMhFJ45DWF9YP0VL40wqVs",
  authDomain: "healthkard.firebaseapp.com",
  projectId: "healthkard",
  storageBucket: "healthkard.appspot.com",
  messagingSenderId: "170120675914",
  appId: "1:170120675914:web:a2e2d0f5b5067a34405cb3",
  measurementId: "G-VBPMPNP8SE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);