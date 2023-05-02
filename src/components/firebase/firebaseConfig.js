
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyCxc8Jjj42AEOJ5cJuW-km231lCAZlxrXU",
    authDomain: "practica-firibase.firebaseapp.com",
    projectId: "practica-firibase",
    storageBucket: "practica-firibase.appspot.com",
    messagingSenderId: "65667564670",
    appId: "1:65667564670:web:e419d785e4a22fc5d4842f"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);