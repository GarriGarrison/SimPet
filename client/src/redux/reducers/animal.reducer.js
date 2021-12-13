import { SET_ANIMAL, GET_ANIMAL, ADD_ANIMAL, DELL_ANIMAL } from '../types/animal.types'
export const animalReducer = (state = [], action) => {
    switch (action.type) {
        case SET_ANIMAL: {
          let animal = action.payload
            return state.map((el) => {
              if (el.id === animal.id) el = animal
              return el
            })
        }
        
        case GET_ANIMAL: {
            return action.payload
          }
        
        case ADD_ANIMAL: {
              return [...state, action.payload]
          }
        case DELL_ANIMAL:{
          let id = action.payload
          return state.filter(el => el !== +id)
        }
          
          default: {
            return state
          }
        }
}
       