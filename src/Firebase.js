import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyDgIOZGbhfxU85Nzf8bBaZd73z-KRYTAkQ",
  authDomain: "lappy-finder.firebaseapp.com",
  databaseURL: "https://lappy-finder.firebaseio.com",
  projectId: "lappy-finder",
  storageBucket: "",
  messagingSenderId: "711837643363"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;