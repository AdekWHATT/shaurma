// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOp9Sl13l8orikjMVGo42bcq2Re5U15lg",
  authDomain: "myfood-7a3c5.firebaseapp.com",
  databaseURL: "https://myfood-7a3c5-default-rtdb.firebaseio.com",
  projectId: "myfood-7a3c5",
  storageBucket: "myfood-7a3c5.appspot.com",
  messagingSenderId: "534840246208",
  appId: "1:534840246208:web:3a251a350c48cbc6791225",
  measurementId: "G-SVSJ2NJ74N"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export const getProductsFromFirebase = async () => {
  const snapshot = await database.ref().once('value');
  const products = snapshot.val();
  return products;
}