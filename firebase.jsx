// firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBqvIe4ugTA0tVBKa6L5c0buPvpCnzE-Zs",
    authDomain: "asia-adventure.firebaseapp.com",
    projectId: "asia-adventure",
    storageBucket: "asia-adventure.appspot.com",
    messagingSenderId: "1055561357441",
    appId: "1:1055561357441:web:4945cc2fb34f07a2b21580",
    measurementId: "G-QT1X43H30B"
};

const app = initializeApp(firebaseConfig);
const imageDb = getStorage(app);

export { imageDb, app as default };
