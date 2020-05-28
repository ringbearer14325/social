import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBV9ndp30CZ2nlD0rhFgGHu08mwNJ2PFmQ",
    authDomain: "social-56563.firebaseapp.com",
    databaseURL: "https://social-56563.firebaseio.com"
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
