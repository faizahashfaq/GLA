/** @format */
import * as firebase from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyD14AEbXn8Cptzj6QeEGNHSvLGfJMfZVzs",
	authDomain: "glapp-43f53.firebaseapp.com",
	projectId: "glapp-43f53",
	storageBucket: "glapp-43f53.appspot.com",
	messagingSenderId: "156472750624",
	appId: "1:156472750624:web:5828fde5c726bc02690245",
	measurementId: "G-Y67KKLPXLK",
};

const db = getFirestore(firebase.initializeApp(firebaseConfig));

export default db;
