import firebase from 'firebase/app';
import 'firebase/firestore';

//import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyA3bG6tt9GN2_Vr-jgX07XgJThxoxk7BFw",
  authDomain: "areadetransf-c1e96.firebaseapp.com",
  projectId: "areadetransf-c1e96",
  storageBucket: "areadetransf-c1e96.appspot.com",
  messagingSenderId: "689127487489",
  appId: "1:689127487489:web:4b308071eb04e27e282800"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
 
  export default firebase;