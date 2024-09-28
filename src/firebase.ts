// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSgZRn6Q1LyteJXcX3LOqWjV7MG7oibZ8",
  authDomain: "ha-parliament.firebaseapp.com",
  databaseURL: "https://ha-parliament-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ha-parliament",
  storageBucket: "ha-parliament.appspot.com",
  messagingSenderId: "888032140612",
  appId: "1:888032140612:web:089420effb68a7e85acb11",
  measurementId: "G-P1JF5MWPMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

export const db = getFirestore(app);
