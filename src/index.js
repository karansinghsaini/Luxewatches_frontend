import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// importing redux store
import store from './redux/store/index';
import {GetUserProfile} from './redux/actions/useraction';
import setAuthorization from './shared/authorization-token';
import { isExpired, decodeToken } from "react-jwt";


var token = localStorage.token;
const myDecodedToken = decodeToken(token);
const isMyTokenExpired = isExpired(token);


if(token) {
    if(isMyTokenExpired) {
        window.location.href = '/login';
        localStorage.clear('token');
    }
    else {
      setAuthorization(token);
      store.dispatch(GetUserProfile(myDecodedToken.id));
    }
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
