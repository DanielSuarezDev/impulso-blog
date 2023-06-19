import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2PiPpcgV3xkkn8CO0iHQl68vHbumZHok",
    authDomain: "impulso-cristiano.firebaseapp.com",
    projectId: "impulso-cristiano",
    storageBucket: "impulso-cristiano.appspot.com",
    messagingSenderId: "756956324488",
    appId: "1:756956324488:web:3901fc9fc7a8791d55f53d",
    measurementId: "G-JPCNNDBBTV",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
