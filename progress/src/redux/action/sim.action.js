import { GET_MEDICINE, GET_STATUS, GET_EAT, GET_COMMUNICATION, GET_COMFORT } from '../type'

export const setMedicine = (num) => ({
    type: GET_MEDICINE,
    payload: num
})
export const setCommunication = (num) => ({
    type: GET_COMMUNICATION,
    payload: num
})
export const setEat = (num) => ({
    type: GET_EAT,
    payload: num
})
export const setComfort = (num) => ({
    type: GET_COMFORT,
    payload: num
})
export const setStatus = () => ({
    type: GET_STATUS,
    payload: ''
})