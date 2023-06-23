
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDrD2G8FsyRsxB-iCZuG29kUR4PjHPCh7U",
  authDomain: "kfc-clone-38acd.firebaseapp.com",
  projectId: "kfc-clone-38acd",
  storageBucket: "kfc-clone-38acd.appspot.com",
  messagingSenderId: "183192746239",
  appId: "1:183192746239:web:1dc930c3a841e374f374ca",
  measurementId: "G-Z7VKB1S1DW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

