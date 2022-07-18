import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZ8tn2AT08LmSx-unDkEnsTeW3piY0MUI",
  authDomain: "fir-fireblogs-authen.firebaseapp.com",
  projectId: "fir-fireblogs-authen",
  storageBucket: "fir-fireblogs-authen.appspot.com",
  messagingSenderId: "780765361873",
  appId: "1:780765361873:web:21537f6bb0daf7594ab7f0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
