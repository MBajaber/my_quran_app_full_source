import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAQxpFdJqQtENuiTYqgvbFdi22bdwGlKko",
    authDomain: "myquran-c6fc9.firebaseapp.com",
    projectId: "myquran-c6fc9",
    storageBucket: "myquran-c6fc9.appspot.com",
    messagingSenderId: "1010795207034",
    appId: "1:1010795207034:web:a4440a536e136a7ac2dec3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };