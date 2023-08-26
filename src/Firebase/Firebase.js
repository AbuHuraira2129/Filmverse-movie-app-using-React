import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwr5hyP1DULSO4d9K47W91_l42T0rFGJs",
  authDomain: "filmverse-4e817.firebaseapp.com",
  projectId: "filmverse-4e817",
  storageBucket: "filmverse-4e817.appspot.com",
  messagingSenderId: "151371556420",
  appId: "1:151371556420:web:251def8a4d097309a13e11"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");

export default app;