import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyBZkm1qqmcFot6tEci4i4abU61f9HYDWKQ",
    authDomain: "shaurma-42214.firebaseapp.com",
    projectId: "shaurma-42214",
    storageBucket: "shaurma-42214.appspot.com",
    messagingSenderId: "1085867038549",
    appId: "1:1085867038549:web:e611ecc9728ab60c5241dc",
    measurementId: "G-Z8LNTWKZ7L"
  };
  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);