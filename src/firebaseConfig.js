

// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCialRVJtl9StKpRTkakX1h5B23nhPpS60",
    authDomain: "new-project-e442c.firebaseapp.com",
    projectId: "new-project-e442c",
    storageBucket: "new-project-e442c.appspot.com",
    messagingSenderId: "532658575962",
    appId: "1:532658575962:web:66515bcde47e8be8e71663",
    measurementId: "G-CM98273MQE"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Export the 'auth' object
const firestore = getFirestore(app);

export { auth, firestore };
