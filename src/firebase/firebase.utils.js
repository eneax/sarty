import firebase from 'firebase/app';
import 'firebase/firestore'; // for the DB
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA6WGH7Fa8oFn5fTK10YVJv5fWlyodaLNE',
  authDomain: 'sarty-ex.firebaseapp.com',
  databaseURL: 'https://sarty-ex.firebaseio.com',
  projectId: 'sarty-ex',
  storageBucket: 'sarty-ex.appspot.com',
  messagingSenderId: '886533999849',
  appId: '1:886533999849:web:b1e61d49d290daafbc7478',
  measurementId: 'G-1QYWB889TE',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// get user from 'auth' and store it in 'firestore'
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Get snapShot from db
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // Check if authUser already exists in Firestore.
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // If `authUser` doesn't exist already, create a new one
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error logging user: ', error.message);
    }
  }

  return userRef;
};

// Store collection data into Firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    // give me a new document ref and generate a new id for it
    const newDocumentRef = collectionRef.doc();
    // set values for every object
    batch.set(newDocumentRef, obj);
  });

  // fire batch request
  return await batch.commit();
};

// convert firestore array result into object
export const convertCollectionSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  console.log(transformedCollection);
};

// trigger the Google sign-in popup
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
