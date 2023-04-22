import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDt-gj-JdjKlbdYzvL1iJzBB5Li-AU3RGM",
  authDomain: "dddc-firebase.firebaseapp.com",
  projectId: "dddc-firebase",
  storageBucket: "dddc-firebase.appspot.com",
  messagingSenderId: "369004128162",
  appId: "1:369004128162:web:6372d2578ec681d46e34fb",
  measurementId: "G-02S4B8MFMV",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
