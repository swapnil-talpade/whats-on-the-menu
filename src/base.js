import Rebase from 're-base';
import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCff9NM-IKVRLSc1ocWX0ZxRzHIRGX6Lbg",
    authDomain: "what-s-on-the-menu.firebaseapp.com",
    databaseURL: "https://what-s-on-the-menu-default-rtdb.firebaseio.com",
});
// Initialize Firebase

// firebase.analytics();

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

export default base;
