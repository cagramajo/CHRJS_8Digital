import firebase from "firebase/app";

import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAyphJt-U5AkZCJOjDv861NVByCh4SYu7E",
    authDomain: "chrjs-8digital.firebaseapp.com",
    projectId: "chrjs-8digital",
    storageBucket: "chrjs-8digital.appspot.com",
    messagingSenderId: "855958889905",
    appId: "1:855958889905:web:ed9e613890b9863939c990"
  };
  // Initialize Firebase

  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();