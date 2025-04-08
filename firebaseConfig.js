// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCamWBwNF1ZvBF4dfZnjQyrHQX96l21xj4",
  authDomain: "mlfind.firebaseapp.com",
  projectId: "mlfind",
  storageBucket: "mlfind.firebasestorage.app",
  messagingSenderId: "311247905605",
  appId: "1:311247905605:web:52c468b11c4a77331b142c",
  measurementId: "G-W6KJFGCP7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
