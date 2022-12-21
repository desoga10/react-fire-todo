import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5u80wO6iaPl8E9auM0IRXliYGKyDQHfU",
  authDomain: "todo-b74fc.firebaseapp.com",
  projectId: "todo-b74fc",
  storageBucket: "todo-b74fc.appspot.com",
  messagingSenderId: "872116099545",
  appId: "1:872116099545:web:9bb66d12ca15f2f39521c8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);