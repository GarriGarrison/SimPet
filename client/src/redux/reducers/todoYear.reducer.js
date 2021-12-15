import { GET_TODO_YEAR, GET_LAST_TODO_YEAR } from '../types/todo.types'

export const todoYearhReduser = (state = {}, action) => {
  const {type} = action
  switch (type) {

    case GET_TODO_YEAR:{
        return {...state,
          all: action.payload}
    }

    case GET_LAST_TODO_YEAR:{
      return {...state,
        last: action.payload}
  }
    
    default: {
        return state
    }
  }
}