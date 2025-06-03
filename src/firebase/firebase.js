// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFCY_QqDlAUIp5fVX7rHJdGf3H_40RV-s",
  authDomain: "project-medivault.firebaseapp.com",
  projectId: "project-medivault",
  storageBucket: "project-medivault.firebasestorage.app",
  messagingSenderId: "264822716088",
  appId: "1:264822716088:web:457baa9868699afc22664d",
  measurementId: "G-WHXQJNXC70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app,auth};