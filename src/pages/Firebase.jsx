// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcDry_n54uOC6RVY9V_ePObV5X56vUsMI",
  authDomain: "auth-04-07-2006.firebaseapp.com",
  projectId: "auth-04-07-2006",
  storageBucket: "auth-04-07-2006.firebasestorage.app",
  messagingSenderId: "453580089258",
  appId: "1:453580089258:web:8e3c5179a8a31227d1add3",
  measurementId: "G-ME3S6H1PX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;