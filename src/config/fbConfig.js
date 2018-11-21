import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB5s_O3SXI7ygR3XDBF2d3qQWOl3973xBQ",
    authDomain: "apptest-sb.firebaseapp.com",
    databaseURL: "https://apptest-sb.firebaseio.com",
    projectId: "apptest-sb",
    storageBucket: "apptest-sb.appspot.com",
    messagingSenderId: "304027311539"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });



export default firebase;