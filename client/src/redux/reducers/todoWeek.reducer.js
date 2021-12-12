import { GET_TODO_WEEK } from '../types/todo.types'

export const todoWeekReduser = (state = {}, action) => {
  const {type} = action
  switch (type) {

    case GET_TODO_WEEK:{
        return action.payload
    }
    
    default: {
        return state
    }
  }
}