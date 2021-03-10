import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCynytsvdC0SS1TtZ7xaOXGO23Sz4ftzQc",
    authDomain: "jwitter-da4b3.firebaseapp.com",
    projectId: "jwitter-da4b3",
    storageBucket: "jwitter-da4b3.appspot.com",
    messagingSenderId: "315656331276",
    appId: "1:315656331276:web:3ba3281e9cd5b2d8dc4e29"
  };

  export default firebase.initializeApp(firebaseConfig);