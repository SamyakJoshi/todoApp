import {initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBS8XBy0REzsV1bCkx73hNzLsH7j17L1EY",
    authDomain: "mindpath-todo.firebaseapp.com",
    projectId: "mindpath-todo",
    storageBucket: "mindpath-todo.appspot.com",
    messagingSenderId: "813323625240",
    appId: "1:813323625240:web:ff08d2f96e54a5ed88346d",
    measurementId: "G-2TEWZBD9XS"
};

 const firebaseApp = initializeApp(firebaseConfig);

 const storage = getStorage(firebaseApp, "gs://mindpath-todo.appspot.com");

 export default storage;