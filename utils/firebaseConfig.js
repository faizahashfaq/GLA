/** @format */
import firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyD14AEbXn8Cptzj6QeEGNHSvLGfJMfZVzs",
	authDomain: "glapp-43f53.firebaseapp.com",
	projectId: "glapp-43f53",
	storageBucket: "glapp-43f53.appspot.com",
	messagingSenderId: "156472750624",
	appId: "1:156472750624:web:a33d2f34bd146cdc690245",
	measurementId: "G-3Y3S18DJVN",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
