import {GET_MEDICINE, GET_STATUS, GET_EAT, GET_COMMUNICATION, GET_COMFORT} from '../type'

export const simReducer = (state = {}, action) => {
  const {type} = action
  switch (type) {

    case GET_MEDICINE:{
        return {
            ...state,
            medicine: action.payload,
        }
    }
    case GET_EAT:{
        return {
            ...state,
            eat: action.payload,
        }
    }
    case GET_COMMUNICATION:{
        return {
            ...state,
            communication: action.payload,
        }
    }
    case GET_COMFORT:{
        return {
            ...state,
            comfort: action.payload,
        }
    }
    case GET_STATUS:{
        let {comfort, communication, eat, medicine} = state
        if(comfort < 30 ||communication < 30 ||eat < 30 ||medicine < 30) return "orange"
        if(comfort < 10 ||communication < 10 ||eat < 10 ||medicine < 10) return "red"
        return 'green'
    }
    
    default: {
        return state
    }
  }
}