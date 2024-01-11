// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBAYK-gnyUiWsjoib1FBblFqxemB-IGFQ4',
  authDomain: 'flickpulse-react.firebaseapp.com',
  projectId: 'flickpulse-react',
  storageBucket: 'flickpulse-react.appspot.com',
  messagingSenderId: '482818031413',
  appId: '1:482818031413:web:b2773b4af98ff750fe567c'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
