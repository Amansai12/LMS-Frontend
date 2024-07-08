// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVft5XU42UrapcRVN8FHrTglxmzDYhJ2g",
  authDomain: "library-management-c584e.firebaseapp.com",
  projectId: "library-management-c584e",
  storageBucket: "library-management-c584e.appspot.com",
  messagingSenderId: "305512426475",
  appId: "1:305512426475:web:598e2c889785fa3ea6c7ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app