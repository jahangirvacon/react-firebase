// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC3-30gim8vF8Mig-Mzey8_OF9ZLEu3Llk",
  authDomain: "reactwithrirebase.firebaseapp.com",
  projectId: "reactwithrirebase",
  storageBucket: "reactwithrirebase.appspot.com",
  messagingSenderId: "959625072439",
  appId: "1:959625072439:web:d4e39ccb2c8336e9d754b2",
  measurementId: "G-Q3EG5ZYK4B",
  databaseURL: "https://reactwithrirebase-default-rtdb.firebaseio.com/",

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
