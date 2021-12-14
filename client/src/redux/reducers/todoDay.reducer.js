import { GET_TODO_DAY } from '../types/todo.types'

export const todoDayReduser = (state = {}, action) => {
  const {type} = action
  switch (type) {

    case GET_TODO_DAY:{
        return action.payload
    }
    
    default: {
        return state
    }
  }
}