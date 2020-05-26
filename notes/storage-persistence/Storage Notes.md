# Storage Notes

On our window object we've access to `sessionStorage` and `localStorage`.

The main difference between these two types of storage is that `sessionStorage` persists the data as long as that particular tab (session) is open. Thus, if we close the page, the data is lost.

`localStorage`, instead, will persist the data until we clear it out. We'll continue to have access to the data even if we close the tab and even the browser.

## localStorage

On `localStorage` we've `getItem()` and `setItem` methods.
The `setItem` method will set the item inside the storage, while `getItem` let's us pull the item out of the storage.
When using `localStorage`, we use a `key` to store and to retrieve the item and we need the item to be in a `string` type.

Example:

```js
const objectToStore = {
  name: 'Enea',
}

// store object in localStorage
window.localStorage.setItem('myObj', JSON.stringify(objectToStore))

// access object in localStorage
const myRetrievedObject = window.localStorage.getItem('myObj')

// retrieve object from localStorage
JSON.parse(myRetrievedObject)
```
