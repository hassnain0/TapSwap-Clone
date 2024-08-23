import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7jKyHg00c-YCzahJJIUXis7orTef-aQ0",
  authDomain: "ngwa-e5524.firebaseapp.com",
  projectId: "ngwa-e5524",
  storageBucket: "ngwa-e5524.appspot.com",
  messagingSenderId: "501453954837",
  appId: "1:501453954837:web:1f9a3e7537295f298d531c",
  measurementId: "G-LMKB3XETYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export default db;
