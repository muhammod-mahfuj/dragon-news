// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1YySrsnocPVzo-Z7BcUmU6ylrrs1D8Po",
  authDomain: "dragon-news-9a60d.firebaseapp.com",
  projectId: "dragon-news-9a60d",
  storageBucket: "dragon-news-9a60d.firebasestorage.app",
  messagingSenderId: "579435651104",
  appId: "1:579435651104:web:00bf40463a376abe5c5c45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
