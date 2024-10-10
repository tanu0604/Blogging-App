// src/Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNgzzpjJxj2ysJIy8JrSZql2MIwra9g5M",
  authDomain: "mybloggingapp-3b0f6.firebaseapp.com",
  projectId: "mybloggingapp-3b0f6",
  storageBucket: "mybloggingapp-3b0f6.appspot.com",
  messagingSenderId: "345945193574",
  appId: "1:345945193574:web:5719ab269b94de8e15c1a7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Pass the app instance here
export const db = getFirestore(app);
export default app;
