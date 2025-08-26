// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFMOidSVjy5sOZqUIewK1LNZvi85VAJxQ",
  authDomain: "liz-ecommerce.firebaseapp.com",
  projectId: "liz-ecommerce",
  storageBucket: "liz-ecommerce.firebasestorage.app",
  messagingSenderId: "454544251227",
  appId: "1:454544251227:web:eef1cfacdc3bd64c3ea27e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth}