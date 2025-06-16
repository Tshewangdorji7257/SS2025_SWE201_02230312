// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCQztsK25kv6age0wijIk4LV9VysNqzZ9A",
//   authDomain: "practical-33809.firebaseapp.com",
//   projectId: "practical-33809",
//   storageBucket: "practical-33809.firebasestorage.app",
//   messagingSenderId: "133785944075",
//   appId: "1:133785944075:web:9bcc19df951024ea3d070e",
//   measurementId: "G-X9SMQXXFBR"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCQztsK25kv6age0wijIk4LV9VysNqzZ9A",
  authDomain: "practical-33809.firebaseapp.com",
  projectId: "practical-33809",
  storageBucket: "practical-33809.firebasestorage.app",
  messagingSenderId: "133785944075",
  appId: "1:133785944075:web:9bcc19df951024ea3d070e",
  measurementId: "G-X9SMQXXFBR"
};

// Initialize Firebase app only once
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const FIRESTORE_DB = getFirestore(FIREBASE_APP);

export { FIREBASE_APP, FIREBASE_AUTH, FIRESTORE_DB };