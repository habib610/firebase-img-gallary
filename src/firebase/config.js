// import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDRXWXZ-YPR4RSdeAV7Htjm0ufrcJaYfuo",
    authDomain: "fire-soc.firebaseapp.com",
    projectId: "fire-soc",
    storageBucket: "fire-soc.appspot.com",
    messagingSenderId: "575230699702",
    appId: "1:575230699702:web:4a5b7f70ab1a3d6f3b9e17"
  };

  firebase.initializeApp(firebaseConfig)

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  export {projectStorage, projectFirestore , timestamp}