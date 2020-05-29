import { ShopActionTypes } from './shopTypes';

export const updateCollections = collectionsMap => ({
  type: ShopActionTypes.UPDATE_COLLECTION,
  payload: collectionsMap,
});
