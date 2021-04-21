import firebase from 'firebase/app'
import "firebase/firestore";

const firebaseConfig = firebase.initiazlizeApp ({
    apiKey: "AIzaSyCMKdnaqZRAZlydscTnJXmhe_IVBW67z1A",
    authDomain: "todoist-b9894.firebaseapp.com",
    projectId: "todoist-b9894",
    storageBucket: "todoist-b9894.appspot.com",
    messagingSenderId: "885978675581",
    appId: "1:885978675581:web:61dd98d6d28d8bd98e7414"
  });

  export { firebaseConfig as firebase}