import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD9oMQa-N3RtBy4zvlXgmckekx7HZsE5vw",
    authDomain: "cleaning-laundry-app.firebaseapp.com",
    projectId: "cleaning-laundry-app",
    storageBucket: "cleaning-laundry-app.firebasestorage.app",
    messagingSenderId: "1033123482460",
    appId: "1:1033123482460:web:008574a9018a6e093b4f99",
    measurementId: "G-H0BVPNHP1X"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);