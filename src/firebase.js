import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAEg2hqE9LAndQ4iBmJnqB6GGtP45RykMs",
    authDomain: "clone-1c112.firebaseapp.com",
    databaseURL: "https://clone-1c112.firebaseio.com",
    projectId: "clone-1c112",
    storageBucket: "clone-1c112.appspot.com",
    messagingSenderId: "379094628940",
    appId: "1:379094628940:web:3d75414b1a3418e25952e9",
    measurementId: "G-1KWNB5YM1T",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};