import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCReffJM20P2PZ0ceaYeHvTadwzfs03l9k",
  authDomain: "fitsense360-70f6f.firebaseapp.com",
  projectId: "fitsense360-70f6f",
  storageBucket: "fitsense360-70f6f.appspot.com",
  messagingSenderId: "797671280531",
  appId: "1:797671280531:web:1a19a7b528bec6db092266",
  measurementId: "G-H2PMEQ2S11",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const database = getDatabase(app);
export { database };
export default app;
