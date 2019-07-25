import firebase from 'firebase/app'
import 'firebase/firestore' // for the db
import 'firebase/auth' // for authentication


// the object inside the config variable is auto-generated by firebase and we can copy it from `https://console.firebase.google.com`
const config = {
  apiKey: "AIzaSyD-EMND8rdae34AG5eDZB8Hpb8JGKMr83Y",
  authDomain: "sarty-x.firebaseapp.com",
  databaseURL: "https://sarty-x.firebaseio.com",
  projectId: "sarty-x",
  storageBucket: "",
  messagingSenderId: "389919018804",
  appId: "1:389919018804:web:579d1af62111d5a8"
}

firebase.initializeApp(config)

// export auth and db
export const auth = firebase.auth()
export const firestore = firebase.firestore()


// * setup Google authentication utility
const provider = new firebase.auth.GoogleAuthProvider() // gives us access to GoogleAuthProvider
provider.setCustomParameters({ prompt: 'select_account' }) // we always want to trigger the Google login popup whenever we use GoogleAuthProvider for auth and sign in
export const signInWithGoogle = () => auth.signInWithPopup(provider) // there are many sign in (like Facebook, Twitter etc.), but we want only Google

export default firebase
