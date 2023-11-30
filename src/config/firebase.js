/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider,getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrF3Mh9Pr0cwCn3vVRrb8TYl8mspHOHxg",
  authDomain: "heyra-30866.firebaseapp.com",
  databaseURL: "https://heyra-30866-default-rtdb.firebaseio.com",
  projectId: "heyra-30866",
  storageBucket: "heyra-30866.appspot.com",
  messagingSenderId: "1078065807068",
  appId: "1:1078065807068:web:4c268e9e0b9dfa0f66fe19",
  measurementId: "G-RSH326523Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();