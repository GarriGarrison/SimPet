import { GET_TODO_DAY, DEL_TODO_DAY, GET_LAST_TODO_DAY } from '../types/todo.types'

export const todoDayReduser = (state = {}, action) => {
  const {type} = action
  switch (type) {

    case GET_TODO_DAY:{
        return {...state,
          all: action.payload}
    }
    case DEL_TODO_DAY:{
      let id = action.payload
      return { 
        ...state,
        all: state.filter(el => el.id !== id)}
  }

    case GET_LAST_TODO_DAY:{
      return {...state,
        last: action.payload}
  }
    
    default: {
        return state
    }
  }
}
