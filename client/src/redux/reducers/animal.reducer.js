import { SET_ANIMAL, GET_ANIMAL,START_ANIMAL, ADD_ANIMAL, DELL_ANIMAL, SWITCH_ACTIV } from '../types/animal.types'
export const animalReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_ANIMAL: {
          let animal = action.payload
            return {
              ...state,
              all: state.all.map((el) => {
              if (el.id === animal.id) el = animal
              return el}
            )}
        }
        
        case GET_ANIMAL: {
            return {
              currAnimal: action.payload[0],
              all: action.payload }
          }
        
        case ADD_ANIMAL: {
              return { ...state,
                all:[...state.all, action.payload]
              }
          }
        case DELL_ANIMAL:{
          let id = action.payload
          return {
            ...state,
            all: state.all.filter(el => el !== +id)
          }
        }

        case SWITCH_ACTIV:{
          return {
            ...state,
            currAnimal: state.all[action.payload]
          }
        }
        case START_ANIMAL:{
          console.log(action.payload)
          return {
            ...state,
            currAnimal: state.all[0]
          }
        }
          
          default: {
            return state
          }
        }
}
       