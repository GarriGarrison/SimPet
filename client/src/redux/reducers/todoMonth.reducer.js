import { GET_TODO_MONTH, GET_LAST_TODO_MONTH } from '../types/todo.types'

export const todoMonthReduser = (state = {}, action) => {
  const {type} = action
  switch (type) {

    case GET_TODO_MONTH:{
        return {...state,
          all: action.payload}
    }
    case GET_LAST_TODO_MONTH:{
      return {...state,
        last: action.payload}
  }
    
    default: {
        return state
    }
  }
}