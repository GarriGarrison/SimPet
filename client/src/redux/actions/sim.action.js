import { GET_STATUS, ADD_STATUS, GET_MEDICINE, GET_EAT, GET_COMMUNICATION, GET_COMFORT, GET_FIVE, GET_SIX, ADD_SIX, ADD_FIVE, ADD_EAT, ADD_MEDICINE, ADD_COMMUNICATION, ADD_COMFORT} from '../types/sim.types'


export const getStatus = (color) => ({
    type: ADD_STATUS,
    payload: color
})

export const setStatus = (color) => ({
    type: GET_STATUS,
    payload: color
})

export const setMedicine = (num) => ({
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


export const setSix = (num) => ({
    type: ADD_SIX,
    payload: num
})

export const timeoutMedicine = (id) => async (dispatch) => {
   await fetch(`http://localhost:3001/api/v1/category/medical/${id}`, { credentials: "include" })
    .then(data => data.json())
    .then(data => {
        let endIndex = data.map(el => el= el.status).indexOf(false)
        let stsrtIndex = data.lastIndexOf(el => el.status === true) 
        let endObj = data[endIndex]
        let satrObj = data[stsrtIndex]
        // let end = 
        
        // console.log(satr, end)
    })
  

    


    }

//   dispatch(setMedicine(num))


// export const timeoutEat = () => async (dispatch) => {

//   dispatch(setEat(num))
// }

// export const timeoutCommunication = () => async (dispatch) => {

//   dispatch(setCommun(num))
// }

// export const timeoutComfort = () => async (dispatch) => {

//   dispatch(setComfort(num))
// }

// export const timeoutFive = () => async (dispatch) => {

//   dispatch(setFive(num))
// }

// export const timeoutSix = () => async (dispatch) => {

//   dispatch(setSix(num))
// }

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