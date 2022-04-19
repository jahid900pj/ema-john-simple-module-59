// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmwIvfvXCxBGIbxGrWhLounIgEphtmH3g",
    authDomain: "ema-john-simple-ce6af.firebaseapp.com",
    projectId: "ema-john-simple-ce6af",
    storageBucket: "ema-john-simple-ce6af.appspot.com",
    messagingSenderId: "370967083595",
    appId: "1:370967083595:web:1ab81f2af52e1fde1f2bce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;