import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBagqAwhqd-Pfg0qtxg8YoMulSnt5aZ6vk",
    authDomain: "todo-app-1390e.firebaseapp.com",
    projectId: "todo-app-1390e",
    storageBucket: "todo-app-1390e.appspot.com",
    messagingSenderId: "1004281720914",
    appId: "1:1004281720914:web:249e007d708a6c17782f8b",
    measurementId: "G-38QB7Y8LBX"
  };

  const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }