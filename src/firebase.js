import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJ9fdOImV3ICfMscyjCpkoH5awqxXAAL4",
  authDomain: "mtelegram-42810.firebaseapp.com",
  projectId: "mtelegram-42810",
  storageBucket: "mtelegram-42810.appspot.com",
  messagingSenderId: "578824846189",
  appId: "1:578824846189:web:d78a619279ab7e609bb864",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
