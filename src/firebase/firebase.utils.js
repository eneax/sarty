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





/*
Firestore returns us two types of objects, even if nothing exists from the query: references and snapshots.
They can be either Document or Collection versions.

* queryReference 
- is an object that represents the “current” place in the database that we are querying
- does not have the actual data of the collection or document
- It instead has properties that tell us details about it, or the method to get the Snapshot object which gives us the data we are looking for.

```
firestore.doc(‘/users/:userId’);
firestore.collections(‘/users’);
```

* DocumentReference vs CollectionReference
We use documentRef objects to perform our CRUD methods (create, retrieve, update, delete). 
The documentRef methods are .set(), .get(), .update() and .delete() respectively
We can also add documents to collections using the collectionRef object using the .add() method.

```
collectionRef.add({
  value: prop
})
```

We get the snapshotObject from the referenceObject using the .get() method. 

```
documentRef.get()
``` 

which returns a documentSnapshot object;
or 

```
collectionRef.get()

``` 

which returns a querySnapshot object.

* documentSnapshot
We get a documentSnapshot object from our documentReference object.
The documentSnapshot object allows us to check if a document exists at this query 
using the .exists property which returns a boolean.
We can also get the actual properties on the object by calling
the .data() method, which returns us a JSON object of the document.

* querySnapshot
We get a querySnapshot object from our collectionReference object. 
We can check if there are any documents in the collection by calling
the .empty property which returns a boolean.
We can get all the documents in the collection by calling the .docs property.
It returns an array of our documents as documentSnapshot objects.
*/ 