import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
// import * as firebase from 'firebase';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

const firebaseConfig = {
  apiKey: "AIzaSyBZkm1qqmcFot6tEci4i4abU61f9HYDWKQ",
  authDomain: "shaurma-42214.firebaseapp.com",
  projectId: "shaurma-42214",
  storageBucket: "shaurma-42214.appspot.com",
  messagingSenderId: "1085867038549",
  appId: "1:1085867038549:web:e611ecc9728ab60c5241dc",
  measurementId: "G-Z8LNTWKZ7L"
};
// firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>

);
