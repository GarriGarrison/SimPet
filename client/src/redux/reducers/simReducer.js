import { GET_STATUS, GET_MEDICAL, GET_FEED, GET_CONTACT, GET_CARE, GET_PARTY, GET_HYGEINE, ADD_HYGEINE, ADD_PARTY, ADD_CARE, ADD_CONTACT, ADD_FEED, ADD_MEDICAL } from '../types/sim.types'

export const simReducer = (state = {}, action) => {
  const {type} = action
  switch (type) {

    case GET_STATUS:{
        return { ...state,
          status: action.payload}
    }

    case GET_MEDICAL:{
      return { ...state,
        medical: action.payload}
    }

    case GET_FEED:{
      return { ...state,
        feed: action.payload}
    }

    case GET_CONTACT:{
      return { ...state,
        contact: action.payload}
    }

    case GET_CARE:{
      return { ...state,
        care: action.payload}
    }

    case GET_PARTY:{
      return { ...state,
        party: action.payload}
    }

    case GET_HYGEINE:{
      return { ...state,
        hygeine: action.payload}
    }
    
    case ADD_MEDICAL:{
      return { ...state,
        medical: action.payload}
    }

    case ADD_FEED:{
      return { ...state,
        feed: action.payload}
    }

    case ADD_CONTACT:{
      return { ...state,
        contact: action.payload}
    }

    case ADD_CARE:{
      return { ...state,
        care: action.payload}
    }

    case ADD_PARTY:{
      return { ...state,
        party: action.payload}
    }

    case ADD_HYGEINE:{
      return { ...state,
        hygeine: action.payload}
    }

    default: {
        return state
    }
  }
}