import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { Provider } from "mobx-react";
import firebaseStore from "./mobx/firebaseStore";
// import { Provider } from 'react-redux';
// import store from './redux/store';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <Provider firebaseStore={firebaseStore}>
      <App />
    </Provider>
  </HashRouter>
);