# Observables

An `observable` is some piece of code that wraps around a stream of events (i.e. user clicking multiple times):

```
--> event --> event --> event --> event -->
```

The `observer` is a piece of code that has three functions on it:

```js
{
  next: (nextValue) => {
    /* When a new event occurs, do something with the value */
  },
  error: (error) => {
    /* Do something with the error */
  },
  complete: () => {
    /* Do something when the stream of events finishes */
  },
}
```

Note: The `complete` function rarely happens in Firebase, because it's a live database where updates can always happen.

A `subscription` is a way for us to tie our observer with the stream of events (observables) using a listener (i.e. `unsubscribeFromAuth`).

Example:

```js
class App extends React.Component {
  // close subscription to auth
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // store user data in app 'state'
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      } else {
        // if the user logs out we set the currentUser to null
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      ...
    )
  }
}
```
