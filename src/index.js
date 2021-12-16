import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWViGW4APfy62cUewBHUzzGNLoW5k-3DY",
  authDomain: "cart-82c52.firebaseapp.com",
  projectId: "cart-82c52",
  storageBucket: "cart-82c52.appspot.com",
  messagingSenderId: "475474168852",
  appId: "1:475474168852:web:5a18d35a6d3396ea5dab01"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
