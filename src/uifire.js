import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyDMSvZrmCZFplyRjU5nidCm9ZmZVg8AY40",
  authDomain: "modsmatch.firebaseapp.com",
  projectId: "modsmatch",
  storageBucket: "modsmatch.appspot.com",
  messagingSenderId: "215432744958",
  appId: "1:215432744958:web:b025cc95cf51286e7dfaaf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;