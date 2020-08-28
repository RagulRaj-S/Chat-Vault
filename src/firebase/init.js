import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBtk6oTfYHgidkS8jx7_ocTxqtzFt-ybkA",
    authDomain: "vue-chat-ad4f2.firebaseapp.com",
    databaseURL: "https://vue-chat-ad4f2.firebaseio.com",
    projectId: "vue-chat-ad4f2",
    storageBucket: "vue-chat-ad4f2.appspot.com",
    messagingSenderId: "901608966841",
    appId: "1:901608966841:web:443b01f6a77e31e2562968",
    measurementId: "G-VSJYQPP3RK"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const firebaseApp = firebase.analytics();
  firebase.analytics();
  export default firebaseApp.firestore()