import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3zDZZcisvA4BQ7ILZEB9DfnHHceHsylM",
  authDomain: "story-writing-73ded.firebaseapp.com",
  projectId: "story-writing-73ded",
  storageBucket: "story-writing-73ded.appspot.com",
  messagingSenderId: "1013190091",
  appId: "1:1013190091:web:bcfe47b45ec231fd243a4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();
