import { UserActionTypes } from './userActionTypes'

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})





/* 
* Actions
- they are functions that return objects
*/