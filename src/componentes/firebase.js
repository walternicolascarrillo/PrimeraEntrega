import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANh9HzhCoqcuDQWeOi24Q-sJWHuUe5RNE",
  authDomain: "carrillo-59808.firebaseapp.com",
  projectId: "carrillo-59808",
  storageBucket: "carrillo-59808.appspot.com",
  messagingSenderId: "150131876969",
  appId: "1:150131876969:web:ba8a26202c230bbe2b2ef8",
};


export const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app); 