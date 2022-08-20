import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/header';
import Discussion from './components/discussion';
import Voter from './components/voter-reg';
import Resources from './components/resources';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import reportWebVitals from './reportWebVitals';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDjBysJAi5x7NqFNcnM8_7gUudrzoelFg",
    authDomain: "cfg-ha.firebaseapp.com",
    projectId: "cfg-ha",
    storageBucket: "cfg-ha.appspot.com",
    messagingSenderId: "11923578654",
    appId: "1:11923578654:web:d40103ea30a1e342e2f30f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/">
                    <App/>
                </Route>
            </Switch>
            <Route exact path="/discussion">
              <Discussion />
            </Route>
            <Route exact path="/voter-registration">
              <Voter />
            </Route>
            <Route exact path="/resources">
              <Resources />
            </Route>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
reportWebVitals();

