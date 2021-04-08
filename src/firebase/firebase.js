import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBbJrDwWCbEDcDgFoTzKROV3XfskszfXkw",
    authDomain: "todolist-4f914.firebaseapp.com",
    projectId: "todolist-4f914",
    storageBucket: "todolist-4f914.appspot.com",
    messagingSenderId: "427892921782",
    appId: "1:427892921782:web:3d1e743f68e69735689d17",
    measurementId: "G-RK3KNXS8PZ"
  };

  firebase.initializeApp(firebaseConfig);


  export const Auth = firebase.auth();

  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();