import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCNbjsnwGHoqOsSfcMkkF5mSqfkgqq47qo",
    authDomain: "hulutani-cab38.firebaseapp.com",
    projectId: "hulutani-cab38",
    storageBucket: "hulutani-cab38.appspot.com",
    messagingSenderId: "528911649950",
    appId: "1:528911649950:web:37e9a6f8a433c4e2db7f8f",
    measurementId: "G-9DEY56NBP3"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

// /firebase.analytics();

export  {
    storage, firebase as default
}