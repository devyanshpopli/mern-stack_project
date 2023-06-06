import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyCa4vL-t4_EOBfCleTZ7d7nOnlXxrKI-Ps",
    authDomain: "mcity-fb3ab.firebaseapp.com",
    projectId: "mcity-fb3ab",
    storageBucket: "mcity-fb3ab.appspot.com",
    messagingSenderId: "868224486951",
    appId: "1:868224486951:web:8362dd19823908f75d0802",
    measurementId: "G-MQ17GW5TZQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export {
    firebase
  }