import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDLspjq0zDto2g64XJkfoyOQW82UWVn0r4",
  authDomain: "codingninjasphotofolio.firebaseapp.com",
  projectId: "codingninjasphotofolio",
  storageBucket: "codingninjasphotofolio.appspot.com",
  messagingSenderId: "930357575917",
  appId: "1:930357575917:web:d59b69e3e900fa01000ce4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
