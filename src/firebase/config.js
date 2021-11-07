// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getStorage,
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0Ljx6c5gugnLOrH4nciwUcbO8TA2ISIk",
  authDomain: "farmgridportal.firebaseapp.com",
  projectId: "farmgridportal",
  storageBucket: "farmgridportal.appspot.com",
  messagingSenderId: "1009378875291",
  appId: "1:1009378875291:web:1d8b19e85226b6290fb33e",
  measurementId: "G-P1LPW1V6PE",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

getStorage(firebase);
// const projectFirestore = getFirestore(firebase);

export { getStorage, sRef, uploadBytesResumable, getDownloadURL };
