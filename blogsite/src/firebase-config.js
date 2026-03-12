// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd8Y8i7xn7arUjSBUpn1C_eIIFlweelqA",
  authDomain: "blogsite-ed7be.firebaseapp.com",
  projectId: "blogsite-ed7be",
  storageBucket: "blogsite-ed7be.firebasestorage.app",
  messagingSenderId: "675686695731",
  appId: "1:675686695731:web:1f56cbc9e666180b123446",
  measurementId: "G-2HJLZL79RG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider= new GoogleAuthProvider();