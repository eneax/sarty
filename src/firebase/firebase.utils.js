import firebase from 'firebase/app'
import 'firebase/firestore' // for the database
import 'firebase/auth' // for authentication


const config = {
  apiKey: "AIzaSyD-EMND8rdae34AG5eDZB8Hpb8JGKMr83Y",
  authDomain: "sarty-x.firebaseapp.com",
  databaseURL: "https://sarty-x.firebaseio.com",
  projectId: "sarty-x",
  storageBucket: "sarty-x.appspot.com",
  messagingSenderId: "389919018804",
  appId: "1:389919018804:web:579d1af62111d5a8"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Config Google Auth
const provider = new firebase.auth.GoogleAuthProvider()

// Trigger Google popup 
provider.setCustomParameters({
  prompt: 'select_account'
})

// Make signInWithPopup to work with Google
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
