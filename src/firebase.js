import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD6CPNX7zOcuPkRV8vO9sh4MA3XLmTWVwY",
    authDomain: "clone-c0102.firebaseapp.com",
    projectId: "clone-c0102",
    storageBucket: "clone-c0102.appspot.com",
    messagingSenderId: "449546940223",
    appId: "1:449546940223:web:9f6b21a503ffb34da9ad8a",
    measurementId: "G-MEEJ2W8WX5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();
  export {db,auth,provider};