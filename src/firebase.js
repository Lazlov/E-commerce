import firebase from "firebase";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBGQTWikUKi147GuRAKNelFx63n433Grsw",
    authDomain: "redux-app-85661.firebaseapp.com",
    projectId: "redux-app-85661",
    storageBucket: "redux-app-85661.appspot.com",
    messagingSenderId: "830085550723",
    appId: "1:830085550723:web:f08999413ddbf65fcf81b6"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
  export  {db};


