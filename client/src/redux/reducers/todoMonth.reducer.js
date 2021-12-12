import { GET_TODO_MONTH } from '../types/todo.types'

export const todoMonthReduser = (state = {}, action) => {
  const {type} = action
  switch (type) {

    case GET_TODO_MONTH:{
        return action.payload
    }
    
    default: {
        return state
    }
  }
}