import { UserActionTypes } from './userActionTypes'

const INITIAL_STATE = {
  currentUser: null
}

// INITIAL_STATE is the default value of state
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {  // action.type is a string
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state; // if no action matches
  }
}


export default userReducer
