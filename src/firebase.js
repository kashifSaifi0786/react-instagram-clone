import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB0GX77DSjdRtFL_IGxpNr-GnepBL1LFPE",

  authDomain: "instagram-clone-react-c379b.firebaseapp.com",

  projectId: "instagram-clone-react-c379b",

  storageBucket: "instagram-clone-react-c379b.appspot.com",

  messagingSenderId: "869703869584",

  appId: "1:869703869584:web:48817c29f350fde4066415",

  measurementId: "G-H28PC9FFF4",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = getStorage();

export { db, auth, storage };
