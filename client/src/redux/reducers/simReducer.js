import { GET_STATUS, GET_MEDICINE, GET_EAT, GET_COMMUNICATION, GET_COMFORT, GET_FIVE, GET_SIX, ADD_SIX, ADD_FIVE, ADD_COMFORT, ADD_COMMUNICATION, ADD_EAT, ADD_MEDICINE } from '../types/sim.types'

export const simReducer = (state = {}, action) => {
  const {type} = action
  switch (type) {

    case GET_STATUS:{
        return { ...state,
          status: action.payload}
    }

    case GET_MEDICINE:{
      return { ...state,
        medicine: action.payload}
    }

    case GET_EAT:{
      return { ...state,
        eat: action.payload}
    }

    case GET_COMMUNICATION:{
      return { ...state,
        communication: action.payload}
    }

    case GET_COMFORT:{
      return { ...state,
        comfort: action.payload}
    }

    case GET_FIVE:{
      return { ...state,
        five: action.payload}
    }

    case GET_SIX:{
      return { ...state,
        six: action.payload}
    }
    
    case ADD_MEDICINE:{
      return { ...state,
        medicine: action.payload}
    }

    case ADD_EAT:{
      return { ...state,
        eat: action.payload}
    }

    case ADD_COMMUNICATION:{
      return { ...state,
        communication: action.payload}
    }

    case ADD_COMFORT:{
      return { ...state,
        comfort: action.payload}
    }

    case ADD_FIVE:{
      return { ...state,
        five: action.payload}
    }

    case ADD_SIX:{
      return { ...state,
        six: action.payload}
    }

    default: {
        return state
    }
  }
}