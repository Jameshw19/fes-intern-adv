// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBy3bfzpOON47QesMyuGdSCfcT2_w1-qA",
  authDomain: "fes-adv-intern.firebaseapp.com",
  projectId: "fes-adv-intern",
  storageBucket: "fes-adv-intern.appspot.com",
  messagingSenderId: "30441508455",
  appId: "1:30441508455:web:3b5561bb3fc5ee74d78ec2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
