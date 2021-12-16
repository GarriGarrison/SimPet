import { GET_STATUS, GET_MEDICAL, GET_FEED, GET_CONTACT, GET_CARE, GET_PARTY, GET_HYGEINE, ADD_HYGEINE, ADD_PARTY, ADD_CARE, ADD_CONTACT, ADD_FEED, ADD_MEDICAL } from '../types/sim.types'

export const simReducer = (state = {}, action) => {
  const {type} = action
  switch (type) {

    case GET_STATUS:{
      
      let color = action.payload.color
      if(action.payload.color == 'green'&& state.status == '#ffcb11') color = '#ffcb11'
      if(action.payload.color == 'green'&& state.status == 'red') color = 'red'
      if(action.payload.color == '#ffcb11'&& state.status == 'red') color = 'red'
      if(action.payload.status) color = 'green'
      return { ...state, 
        status: color}
      
    }

    case GET_MEDICAL:{
      return { status: 'green',
        medical: {num:100, color:'green'}}
    }

    case GET_FEED:{
      return { status: 'green',
        feed: {num:100, color:'green'}}
    }

    case GET_CONTACT:{
      return { status: 'green',
        contact: {num:100, color:'green'}}
    }

    case GET_CARE:{
      return { status: 'green',
        care: {num:100, color:'green'}}
    }

    case GET_PARTY:{
      return { status: 'green',
        party: {num:100, color:'green'}}
    }

    case GET_HYGEINE:{
      return { status: 'green',
        hygeine: {num:100, color:'green'}}
    }
    
    case ADD_MEDICAL:{
      let num = action.payload
      let color = 'green'
      if(num < 30) {color = '#ffcb11'}
      if(num < 10) {color = 'red'}

      return {
        ...state,
        medical: {
          num :action.payload,
        color}
      }
      }
    

    case ADD_FEED:{
      let num = action.payload
      let color = 'green'
      if(num < 30) {color = '#ffcb11'}
      if(num < 10) {color = 'red'}

      return {
        ...state,
        feed: {
          num :action.payload,
        color}
      }
    }

    case ADD_CONTACT:{
      let num = action.payload
      let color = 'green'
      if(num < 30) {color = '#ffcb11'}
      if(num < 10) {color = 'red'}

      return { ...state,
        contact: {num :action.payload,
        color}}
    }

    case ADD_CARE:{
      let num = action.payload
      let color = 'green'
      if(num < 30) {color = '#ffcb11'}
      if(num < 10) {color = 'red'}

      return { ...state,
        care: {num :action.payload,
        color}}
    }

    case ADD_PARTY:{
      let num = action.payload
      let color = 'green'
      if(num < 30) {color = '#ffcb11'}
      if(num < 10) {color = 'red'}

      return { ...state,
        party: {num :action.payload,
        color}}
    }

    case ADD_HYGEINE:{
      let num = action.payload
      let color = 'green'
      if(num < 30) {color = '#ffcb11'}
      if(num < 10) {color = 'red'}

      return { ...state,
        hygeine: {num :action.payload,
        color}}
    }

    default: {
        return state
    }
  }
}