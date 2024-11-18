// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW0eQzME0EaNITdLNNc6LYvwWWpmd8Qsc",
  authDomain: "eco-explorer-30b0e.firebaseapp.com",
  projectId: "eco-explorer-30b0e",
  storageBucket: "eco-explorer-30b0e.firebasestorage.app",
  messagingSenderId: "73329088883",
  appId: "1:73329088883:web:4391f89fed09c1566f0d06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);