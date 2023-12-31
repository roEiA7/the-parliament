// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZHX8ITQR05HIjCFoOfIVqo1xP21RjWK4",
  authDomain: "shem-code.firebaseapp.com",
  projectId: "shem-code",
  storageBucket: "shem-code.appspot.com",
  messagingSenderId: "915036951489",
  appId: "1:915036951489:web:afa7d95b351272fe599540",
  measurementId: "G-C1H92Y4150",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
