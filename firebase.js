// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged ,setPersistence, browserLocalPersistence  } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
import { signOut } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getFirestore, setDoc, doc , updateDoc , onSnapshot,  deleteDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
import { collection, getDoc, getDocs , addDoc} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
import { query, where } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAzEmNL-rMG6d3SJ6lFR6bJobzWZGe9H1Q",
  authDomain: "bidsphere-a55b1.firebaseapp.com",
  projectId: "bidsphere-a55b1",
  storageBucket: "bidsphere-a55b1.firebasestorage.app",
  messagingSenderId: "757445986493",
  appId: "1:757445986493:web:45a41b333823057ad50fd4",
  measurementId: "G-264CDTDBKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

(async function initAuth(){
  try{
    await setPersistence(auth,browserLocalPersistence);
    console.log("Persistence set successfully");
  }catch(error){
    console.error("Error setting persistence:", error);
  }
}) ();

export {
  auth,
  db,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  setDoc,
  doc,
  getDoc,
  collection,
  addDoc,
  updateDoc,
  getDocs,
  query,
  where,
  onSnapshot,
  deleteDoc,
  setPersistence,
  browserLocalPersistence
};



