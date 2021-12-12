import { GET_STATUS } from '../types/sim.types'

export const setStatus = (color) => ({
    type: GET_STATUS,
    payload: color
})