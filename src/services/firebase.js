import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwhedL0lhRslEEBdfwCr0WG1SEVSRy-4o",
  authDomain: "chat-project-a3e65.firebaseapp.com",
  projectId: "chat-project-a3e65",
  storageBucket: "chat-project-a3e65.appspot.com",
  messagingSenderId: "470960805356",
  appId: "1:470960805356:web:5f42d0c3b1a5358f711cc9"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };