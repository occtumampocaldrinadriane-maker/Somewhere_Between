// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";


// SOMEWHERE BETWEEN - Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDtltGq8SGoFX9EL1rqLRiETAsgPREsk4",
    authDomain: "somewhere-between-ac0f7.firebaseapp.com",
    projectId: "somewhere-between-ac0f7",
    storageBucket: "somewhere-between-ac0f7.firebasestorage.app",
    messagingSenderId: "264305956482",
    appId: "1:264305956482:web:72cba9e73b9f20fd14c69b",
    measurementId: "G-224SYXPVJX"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firestore
const db = getFirestore(app);


// Initialize Authentication
const auth = getAuth(app);


// Export Firebase services
export { app, db, auth };