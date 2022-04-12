// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBddlZhwJpd5pKUls5U3VKsoSviMkZkpUg",
  authDomain: "ema-john-authentication-ca594.firebaseapp.com",
  projectId: "ema-john-authentication-ca594",
  storageBucket: "ema-john-authentication-ca594.appspot.com",
  messagingSenderId: "1032189231140",
  appId: "1:1032189231140:web:778cd74706edd3e84618b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
