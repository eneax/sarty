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


// store userAuth into firestore db
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  // get user id from auth
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()

  // add user to db, if it doesn't already exist
  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      // creates a new document object inside the db
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user: ', error.message);
    }
  }

  return userRef
}


// add collection to db
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch() // batch all the .set() calls
  objectsToAdd.forEach((obj) => {
    // give me a new document object and randomly generate an id
    const newDocRef = collectionRef.doc()
    
    batch.set(newDocRef, obj)
  })

  // make batch request
  return await batch.commit()
}


export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}


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

* Query 
- it's a request we make to firestore (db) to give us something from the database

* Firestore 
- it returns us two types of objects (even if nothing exists from the query): references and snapshots.
- They can be either Document or Collection versions.

* queryReference object
- is an object that represents the “current” place in the database that we are querying

  ```
  firestore.doc(‘/users/:userId’);
  firestore.collections(‘/users’);
  ```

- it does not have the actual data of the collection or document
- it has properties that tell us details about it, or the method to get the Snapshot object which gives us the data we are looking for.



* 2 types of reference object: DocumentReference vs CollectionReference
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

* querySnapshot (or collectionSnapshot)
We get a querySnapshot object from our collectionReference object. 
We can check if there are any documents in the collection by calling
the .empty property which returns a boolean.
We can get all the documents in the collection by calling the .docs property.
It returns an array of our documents as documentSnapshot objects.
*/ 
