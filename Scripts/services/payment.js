import {
  auth,
  db,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  setDoc,
  deleteDoc,
  doc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  onSnapshot,
  setPersistence,
  browserLocalPersistence
} from "../../firebase.js";

export const 