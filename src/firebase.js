import  firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyB3z2MPdanfSoZ_sjZ9md0wgokLAhb6wDA",
    authDomain: "clone-440cc.firebaseapp.com",
    databaseURL: "https://clone-440cc.firebaseio.com",
    projectId: "clone-440cc",
    storageBucket: "clone-440cc.appspot.com",
    messagingSenderId: "637073541077",
    appId: "1:637073541077:web:c243a901cf96d570ae5f5c",
    measurementId: "G-RNBRFNRDBS"
});
const db=firebaseApp.firestore();
export default db;
