import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBIkDpWOhUs_iznO8UuFggL6voIqaBe0OE",
  authDomain: "memories-project-cb69a.firebaseapp.com",
  projectId: "memories-project-cb69a",
  storageBucket: "memories-project-cb69a.appspot.com",
  messagingSenderId: "983749863572",
  appId: "1:983749863572:web:c06321a2d45dacf972ac81"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
};