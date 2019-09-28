
import * as firebase from "firebase/app";
import "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyC2O13CUtLjFsxcsFRYq6-ZevuuzhhkwjI",
  authDomain: "h-firebase.firebaseapp.com",
  databaseURL: "https://h-firebase.firebaseio.com",
  projectId: "h-firebase",
  storageBucket: "",
  messagingSenderId: "796691927011",
  appId: "1:796691927011:web:ca08ef99f3be24d2a41ad6",
  measurementId: "G-XYZR74T3YE"
};


firebase.initializeApp(firebaseConfig);

export default firebase;