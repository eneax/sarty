import { createSelector } from 'reselect'


/*
  map the string value (that we get from the url parameter) 
  to the respective id number (that we get from the shop data)
*/
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}

const selectShop = (state) => state.shop

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

export const selectCollection = (collectionUrlParam) => createSelector(
  [selectCollections],
  // find collection.id that matches the url parameter of the collection id map 
  (collections) => collections.find((collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)
