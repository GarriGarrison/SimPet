import { ADD_TODO, GET_TODO, DEL_TODO, EDIT_TODO, EDIT_STATUS_TODO, CLEAR_TODO_ALL } from '../types/todo.types'

export const todoAllReduser = (state = {}, action) => {
  const {type} = action
  switch (type) {

    case GET_TODO: {
        return {
          ...state,
          value: action.payload
        }
    }

    case ADD_TODO:{
        return {
          ...state,
          value: [...state.value , action.payload]
        }
    }

    case DEL_TODO:{
        let id = action.payload
        return {
          ...state,
          value: state.value.filter(el => el.id !== id)
        }
    }
    case CLEAR_TODO_ALL:{
      return {
        period: '',
        value:[]
      }
    }

    case EDIT_TODO:{
        let newTodo = action.payload
        console.log(newTodo);
          return {
            ...state,
            
            value: state.value.map((el) => el.id === newTodo.id? {...newTodo}: el)
          }
    }
    case EDIT_STATUS_TODO:{
      let id = action.payload
      let todo = state.value.map(el => el.id === id? {...el, status: !el.status}: el)
        return {
          ...state,
          value: todo.filter(el => el.status === false)
      }
  }
    
    default: {
        return state
    }
  }
}
