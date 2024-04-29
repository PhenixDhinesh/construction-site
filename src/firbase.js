// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBdURfdMwP7__vm8F09PhxG7G6MxiSQW8",
  authDomain: "construction-site-a909e.firebaseapp.com",
  projectId: "construction-site-a909e",
  storageBucket: "construction-site-a909e.appspot.com",
  messagingSenderId: "56532317911",
  appId: "1:56532317911:web:2d5301a3df1cea1892e292",
  measurementId: "G-K9WL6ZJ3S6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);