import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNvKmP9_QFddddiUpP1xqglndz4T8K1wE",
  authDomain: "wieproject-7261b.firebaseapp.com",
  projectId: "wieproject-7261b",
  storageBucket: "wieproject-7261b.firebasestorage.app",
  messagingSenderId: "1081832946971",
  appId: "1:1081832946971:web:3e3e3d42eb912e54f3e7be",
  measurementId: "G-MQJYJXSW4Q",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
