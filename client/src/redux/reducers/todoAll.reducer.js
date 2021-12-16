import { ADD_TODO, GET_TODO, DEL_TODO, EDIT_TODO } from '../types/todo.types'

export const todoAllReduser = (state = [], action) => {
  const {type} = action
  switch (type) {

    case GET_TODO: {
        return action.payload
    }

    case ADD_TODO:{
        return [...state, action.payload]
    }

    case DEL_TODO:{
        let id = action.payload
        return state.filter(el => el.id !== id)
    }

    case EDIT_TODO:{
        let newTodo = action.payload
          return state.map((el) => {
            if (el.id === newTodo.id) return newTodo
            return el
          })
    }
    
    default: {
        return state
    }
  }
}
