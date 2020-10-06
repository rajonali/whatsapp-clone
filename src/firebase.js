import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDk-2YczPybMJb_GVptofQa937KDS_TykA",
    authDomain: "whatsapp-clone-728cd.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-728cd.firebaseio.com",
    projectId: "whatsapp-clone-728cd",
    storageBucket: "whatsapp-clone-728cd.appspot.com",
    messagingSenderId: "156822089962",
    appId: "1:156822089962:web:565aeeab772104cf6a2793"
  };




  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;
