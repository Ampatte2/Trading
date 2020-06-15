import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDvo4gUo8ApG3LOhzH03LXXQI5UuAJBtUI",
    authDomain: "trading-platform-f89e0.firebaseapp.com",
    databaseURL: "https://trading-platform-f89e0.firebaseio.com",
    projectId: "trading-platform-f89e0",
    storageBucket: "trading-platform-f89e0.appspot.com",
    messagingSenderId: "416523742999",
    appId: "1:416523742999:web:cf83247be8762cb19d9152",
    measurementId: "G-3LNSBQ3ZZH"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();


