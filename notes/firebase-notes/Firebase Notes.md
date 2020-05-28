# Firebase

Firebase allows you to build apps without managing infrastructure.
It provides functionality like `analytics`, `databases`, `messaging` and `crash reporting`,
so you can just focus on your users (front-end features).

## Firestore

In Firebase, the database is called Firestore and it's a `NoSQL` db (basically, one gigantic `json` object).
There are two types of data in our database: `collection` and `documents`.

A `collection` is a group (array) of `documents`.
Then, each document can contain properties that point to other collections.

For instance, if we create a `users` collection, it'll contain a unique `document` with a unique ID for each user.
This `unique document` can be the `single user Enea`.

Then the `single user Enea` can contain inside another collection, for instance, `cartItems` which will contain a `unique document` with property name `Blue Hat`.

```json
{
  "users": [
    "XF8Cgyo1GwEJrrKMXxjQ": {
      "displayName": "Enea",
      "cartItems": [
        "FBPDZOHDuQJBDy6oksqr": {
          "name": "Leather Jacket"
        },
        "exNV2frVTWRlk7MnEmr1": {
          "name": "Blue Hat"
        }
      ]
    }
  ]
}
```

### How to query Firestore

Once we have created our `collections` and `documents`, we need to query the db in order to get data out of it.

```js
// import firebase and firestore
import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()

// get 'users' collection
firestore.collection('users')

// get specific 'document' inside 'users' collection
firestore.collection('users').doc('XF8Cgyo1GwEJrrKMXxjQ')

// get the 'cartItems' collection of a specific user
firestore
  .collection('users')
  .doc('XF8Cgyo1GwEJrrKMXxjQ')
  .collection('cartItems')

// get 'Blue Hat' document
firestore
  .collection('users')
  .doc('XF8Cgyo1GwEJrrKMXxjQ')
  .collection('cartItems')
  .doc('exNV2frVTWRlk7MnEmr1')

// alternative syntax to get the 'Blue Hat' document
firestore.doc('/users/XF8Cgyo1GwEJrrKMXxjQ/cartItems/exNV2frVTWRlk7MnEmr1')
```

## QueryReference and QuerySnapshot

A query is a request we make to `firestore` to give us something (`collection`, `document`, etc.) from the database.
Firestore always returns us two types of objects: `references` and `snapshots`; even if nothing exists from that query.
This two types of objects can be either `Document` or `Collection` versions.

`QueryReference` is an object that represents the 'current' place in the database that we're querying.
It's basically the result of calling:

```js
firestore.doc('/users/:userId')
firestore.collection('/users')
```

It's important to know that the `queryReference` object does not have the actual data of the `collection` or `document`.
It has properties that tell us details about it (i.e. the ID or the path) or the method to get the Snapshot object.
The `Snapshot object` gives us the actual data we are looking for.

## DocumentReference vs CollectionReference

We use `documentRef` to perform the CRUD methods (create, retrieve, update, delete).
The `documentRef` methods are `.set()`, `.get()`, `.update()`, `.delete()`.

We can add `documents` to collections using the `collectionRef` object and the `.add()` method: `collectionRef.add({ value: prop })`.

We get the `snapshot object` from the `reference object` using the `.get()` method: `documentRef.get()` or `collectionRef.get()`.

Keep in mind that:

- `documentRef` returns a `documentSnapshot` object
- `collectionRef` returns a `querySnapshot` object

## DocumentSnapshot

The `documentSnapshot` allows us to check if a document exists at this query using the `.exists()` property, which returns a `boolean`.

We can also get the actual properties on the object by calling the `.data()` method, which returns us a JSON object of the document.

## QuerySnapshot

We get a `querySnapshot` from a `collectionReference` object.
In order to check if there are any documents in the `collection`, we call the `.empty()` property which returns a boolean.
If we want to get all the documents in the collection, we need to call the `.docs` property, which will return an array of our documents as `documentSnapshot` objects.
