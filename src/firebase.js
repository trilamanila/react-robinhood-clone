import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAcAN9bMH_E9xEVvDUycujIm3eCR1v6eXM",
  authDomain: "robinhood-a490a.firebaseapp.com",
  projectId: "robinhood-a490a",
  storageBucket: "robinhood-a490a.appspot.com",
  messagingSenderId: "1087927619538",
  appId: "1:1087927619538:web:39cbf2767ae2128c7d020b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };