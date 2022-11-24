// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDstqC6bUkrKfCivGlhT4dKByR-dsejmn4',
  authDomain: 'todo-33ea0.firebaseapp.com',
  projectId: 'todo-33ea0',
  storageBucket: 'todo-33ea0.appspot.com',
  messagingSenderId: '101190068854',
  appId: '1:101190068854:web:65104e4e4d1d948dbe0d57',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
