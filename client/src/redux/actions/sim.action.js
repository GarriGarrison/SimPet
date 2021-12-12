import { GET_STATUS, ADD_STATUS, GET_MEDICINE, GET_EAT, GET_COMMUNICATION, GET_COMFORT, GET_FIVE, GET_SIX, ADD_SIX, ADD_FIVE, ADD_EAT, ADD_MEDICINE, ADD_COMMUNICATION, ADD_COMFORT} from '../types/sim.types'

export const getStatus = (color) => ({
    type: ADD_STATUS,
    payload: color
})

export const setStatus = (color) => ({
    type: GET_STATUS,
    payload: color
})

export const setMedicin = (num) => ({
    type: ADD_MEDICINE,
    payload: num
})

export const setEat = (num) => ({
    type: ADD_EAT,
    payload: num
})

export const setCommun = (num) => ({
    type: ADD_COMMUNICATION,
    payload: num
})

export const setComfort = (num) => ({
    type: ADD_COMFORT,
    payload: num
})

export const setFive = (num) => ({
    type: ADD_FIVE,
    payload: num
})

export const setsix = (num) => ({
    type: ADD_SIX,
    payload: num
})


export const medicinDone = ()=> ({
    type: GET_MEDICINE,
    payload: 100
})

export const eatDone = ()=> ({
    type: GET_EAT,
    payload: 100
})

export const communDone = ()=> ({
    type: GET_COMMUNICATION,
    payload: 100
})

export const comfortDone = ()=> ({
    type: GET_COMFORT,
    payload: 100
})

export const fiveDone = ()=> ({
    type: GET_FIVE,
    payload: 100
})

export const sixDone = ()=> ({
    type: GET_SIX,
    payload: 100
})