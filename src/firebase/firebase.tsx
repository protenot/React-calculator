import { initializeApp } from "firebase/app";
import firebase from 'firebase/app'
import "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getDatabase, ref, onValue } from "firebase/database";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAnFjdyNXGJLjuFeFX5-vGSwL9F_l-0N50",
    authDomain: "react-calculator-427f1.firebaseapp.com",
    databaseURL: "https://react-calculator-427f1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-calculator-427f1",
    storageBucket: "react-calculator-427f1.appspot.com",
    messagingSenderId: "629582491137",
    appId: "1:629582491137:web:f52c47ad30834355db9a00"
  };
  const app = initializeApp(firebaseConfig);
