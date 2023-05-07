// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDJh27WhCicTPO0RWlE8gsyMbIP_QYvNAs",
  authDomain: "shisha-27a33.firebaseapp.com",
  projectId: "shisha-27a33",
  storageBucket: "shisha-27a33.appspot.com",
  messagingSenderId: "238102039565",
  appId: "1:238102039565:web:4006a5597403ae0d955944"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


export  const auth = getAuth() 