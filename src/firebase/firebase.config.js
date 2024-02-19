import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import{getAuth} from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyAWXMH_ogaz6SLWQMxqoTDDCoz1RJniJgw",
  authDomain: "chepolocote-85943.firebaseapp.com",
  projectId: "chepolocote-85943",
  storageBucket: "chepolocote-85943.appspot.com",
  messagingSenderId: "109362786775",
  appId: "1:109362786775:web:fd0678cbdd914ce9ba5b92",
  measurementId: "G-GZHXFRCQH0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)