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

// i get a few firebase references printed out in the console as imageRef, but i am also getting the error Post.jsx:28 Error getting image URL: FirebaseError: Firebase Storage: Object 'src/assets/chongqing/cq_museum.JPG' does not exist. (storage/object-not-found). I checked my firebase storage and i in fact have this image gs://asia-adventure.appspot.com/src/assets/chongqing contains the image cq_museum.jpg