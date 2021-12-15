import { GET_TODO_WEEK, GET_LAST_TODO_WEEK } from '../types/todo.types'

export const todoWeekReduser = (state = {}, action) => {
  const {type} = action
  switch (type) {

    case GET_TODO_WEEK:{
        return {...state,
          all: action.payload}
    }
    case GET_LAST_TODO_WEEK:{
      return {...state,
        last: action.payload}
  }
    
    default: {
        return state
    }
  }
}