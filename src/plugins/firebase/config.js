import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';
import 'firebase/storage'; 

const firebaseConfig = {
  apiKey: "AIzaSyCIUrRLv2lRFUXPlknBHjgGBvyPpimDQMA",
  authDomain: "konnomelifuente-portfolio.firebaseapp.com",
  projectId: "konnomelifuente-portfolio",
  storageBucket: "konnomelifuente-portfolio.appspot.com",
  messagingSenderId: "385647992430",
  appId: "1:385647992430:web:f10e4d0b3870adb6e2107f",
  measurementId: "G-EC4MEP4RFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {  db , app };