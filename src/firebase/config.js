// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-C7uG8dXfycG1HSEcG-4drnilzaQtOYI",
  authDomain: "proyectoreact-6ed41.firebaseapp.com",
  projectId: "proyectoreact-6ed41",
  storageBucket: "proyectoreact-6ed41.appspot.com",
  messagingSenderId: "330402671117",
  appId: "1:330402671117:web:703f9184abb9e5eb27c344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)