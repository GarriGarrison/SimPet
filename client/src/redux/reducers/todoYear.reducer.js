import { GET_TODO_YEAR } from '../types/todo.types'

export const todoYearhReduser = (state = {}, action) => {
  const {type} = action
  switch (type) {

    case GET_TODO_YEAR:{
        return action.payload
    }
    
    default: {
        return state
    }
  }
}