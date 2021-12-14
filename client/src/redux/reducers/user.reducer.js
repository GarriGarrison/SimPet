import { SET_USER, DELL_USER } from '../types/user.types'
export const userReducer = (state = '', action) => {
  const { type } = action
  switch (type) {
    case SET_USER:
      return action.payload
    
    case DELL_USER:
      return null

    default: {
      return state
    }
  }
}
