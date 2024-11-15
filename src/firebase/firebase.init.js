// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhksEXCH7a99wO6yaHgqgQdhF5YlKTDPg",
  authDomain: "dragon-news-auth-dc115.firebaseapp.com",
  projectId: "dragon-news-auth-dc115",
  storageBucket: "dragon-news-auth-dc115.firebasestorage.app",
  messagingSenderId: "559613702743",
  appId: "1:559613702743:web:cbd0554245c7c95a8b2912"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;