import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB1EP6dPcFAsQ6-oxwLLm8XpkRL6mlbZF8",
  authDomain: "crwn-db-2f66e.firebaseapp.com",
  databaseURL: "https://crwn-db-2f66e.firebaseio.com",
  projectId: "crwn-db-2f66e",
  storageBucket: "crwn-db-2f66e.appspot.com",
  messagingSenderId: "554048044923",
  appId: "1:554048044923:web:246dd7419b418bdd5947de"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
