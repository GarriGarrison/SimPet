import { GET_STATUS } from '../types/sim.types'

export const simReducer = (state = {}, action) => {
  const {type} = action
  switch (type) {

    case GET_STATUS:{
        return action.payload
    }
    
    default: {
        return state
    }
  }
}