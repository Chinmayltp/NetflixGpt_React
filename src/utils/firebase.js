// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsesRek_3CRWQ4z9GU5DLcXQoq9KhRLNI",
  authDomain: "netflixgpt-c5c1d.firebaseapp.com",
  projectId: "netflixgpt-c5c1d",
  storageBucket: "netflixgpt-c5c1d.appspot.com",
  messagingSenderId: "784376213329",
  appId: "1:784376213329:web:5be56c180262a8a62f2d70",
  measurementId: "G-FHP1YZGHCD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
