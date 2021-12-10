import { SET_USER, DELL_USER } from '../types'
import * as endPoints from '../../config/endPoints'

export const setUser = (user) => ({ // action creater
  type: SET_USER,
  payload: user 
})

export const signUp = (payload) => async (dispatch) => {
  const response = await fetch(endPoints.signUp(), {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  if (response.status === 200) {
    const user = await response.json()
    dispatch(setUser(user))
    
  } else {
    
  }

}

export const signIn = (payload) => async (dispatch) => {
  const response = await fetch(endPoints.signIn(), {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(payload)
      })
  if (response.status === 200) {
    const user = await response.json()
    dispatch(setUser(user))
  } else {
    
  }
  
}




export const checkAuth = () => async (dispatch) => {
  const response = await fetch(endPoints.checkAuth(), {
    credentials: 'include'
  })
  if (response.status === 200) {
    const user = await response.json()
    dispatch(setUser(user))
  }
}

export const deleteUser = () => ({
  type: DELL_USER
})
