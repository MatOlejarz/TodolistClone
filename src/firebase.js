import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCuYn_oTWycYc63aDc9RVb_Xq0ngIQzJGk",
    authDomain: "todo-project-5b106.firebaseapp.com",
    projectId: "todo-project-5b106",
    storageBucket: "todo-project-5b106.appspot.com",
    messagingSenderId: "96206520945",
    appId: "1:96206520945:web:6616447abff5c5e47051d0"
})

export { firebaseConfig as firebase };
