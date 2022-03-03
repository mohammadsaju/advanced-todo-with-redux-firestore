import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB15hQlxPeAQesTbuAe7xUfayq9G3ADfck",
    authDomain: "advanced-crud-a86ec.firebaseapp.com",
    projectId: "advanced-crud-a86ec",
    storageBucket: "advanced-crud-a86ec.appspot.com",
    messagingSenderId: "540346083009",
    appId: "1:540346083009:web:92d23e9ae5dc40e4359640"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);