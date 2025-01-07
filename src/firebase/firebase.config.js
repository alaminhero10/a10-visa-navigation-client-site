// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB-XIMhZFqu6_xbvJqJFK95sS6Sn89cgM",
  authDomain: "visa-navigator-a10.firebaseapp.com",
  projectId: "visa-navigator-a10",
  storageBucket: "visa-navigator-a10.firebasestorage.app",
  messagingSenderId: "322391474747",
  appId: "1:322391474747:web:c9538303a0a584c896921e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
