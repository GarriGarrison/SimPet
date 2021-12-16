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
        let stsrtIndex = data.map(el => el= el.status).lastIndexOf(true) 
        let endObj = data[endIndex]
        let satrObj = data[stsrtIndex]
        let satrDate = new Date(endObj.createdAt);
        if(satrObj) {
        let startD = satrObj.date.split(".")
        let startT = satrObj.time.split(":")
        satrDate = new Date(startD[2],startD[0],startD[1],startT[0],startT[1])
        } 
        let now = new Date()
        let endD = endObj.date.split(".")
        let endT = endObj.time.split(":")
        let endDate = new Date(endD[2],endD[0],endD[1],endT[0],endT[1]) //yy dd mm tt
        let diff = Math.round(endDate - satrDate/ 1000); // разница в миллисекундах
        let nowLat =  Math.round((endDate-now) / 1000)
        let latitude = Math.floor((diff*100)/70)
        let timeout = latitude/100
        let prosent = Math.floor(nowLat*100/latitude)
        console.log(prosent, timeout);


    
        
        
        // dispatch(setMedicine(timeout))
    })
  

    


    }




export const timeoutEat = (id) => async (dispatch) => {
    await fetch(`http://localhost:3001/api/v1/category/feed/${id}`, { credentials: "include" })
    .then(data => data.json())
    .then(data => {
        let endIndex = data.map(el => el= el.status).indexOf(false)
        let stsrtIndex = data.map(el => el= el.status).lastIndexOf(true) 
        let endObj = data[endIndex]
        let satrObj = data[stsrtIndex]
        console.log(endObj,satrObj);
        let satrDate = new Date(endObj.createdAt);
        if(satrObj) {
        let startD = satrObj.date.split(".")
        let startT = satrObj.time.split(":")
        satrDate = new Date(startD[2],startD[0],startD[1],startT[0],startT[1])
        } 
        let now = new Date()
        let endD = endObj.date.split(".")
        let endT = endObj.time.split(":")
        let endDate = new Date(endD[2],endD[0],endD[1],endT[0],endT[1]) //yy dd mm tt
        let diff = Math.round(endDate - satrDate); // разница в миллисекундах
        let nowLat =  Math.round((endDate-now) )
        let latitude = Math.floor((diff*100)/70)
        let timeout = latitude/100
        let prosent = Math.floor(nowLat*100/latitude)
        console.log(prosent, timeout);


    
        
})
}

export const timeoutCommunication = (id) => async (dispatch) => {
    await fetch(`http://localhost:3001/api/v1/contact/party/${id}`, { credentials: "include" })
    .then(data => data.json())
    .then(data => {
        let endIndex = data.map(el => el= el.status).indexOf(false)
        let stsrtIndex = data.lastIndexOf(el => el.status === true) 
        let endObj = data[endIndex]
        let satrObj = data[stsrtIndex]
        let satrDate = new Date(endObj.createdAt);
        if(satrObj) {
        let startD = satrObj.date.split(".")
        let startT = satrObj.time.split(":")
        satrDate = new Date(startD[2],startD[0],startD[1],startT[0],startT[1])
        } 
        let now = new Date()
        let endD = endObj.date.split(".")
        let endT = endObj.time.split(":")
        let endDate = new Date(endD[2],endD[0],endD[1],endT[0],endT[1]) //yy dd mm tt
        let diff = Math.round(endDate - satrDate/ 1000); // разница в миллисекундах
        let nowLat =  Math.round((endDate-now) / 1000)
        let latitude = Math.floor((diff*100)/70)
        let timeout = latitude/100
        let prosent = Math.floor(nowLat*100/latitude)
        console.log(prosent, timeout);

    
        
})
}

export const timeoutComfort = (id) => async (dispatch) => {
    await fetch(`http://localhost:3001/api/v1/contact/care/${id}`, { credentials: "include" })
    .then(data => data.json())
    .then(data => {
        let endIndex = data.map(el => el= el.status).indexOf(false)
        let stsrtIndex = data.lastIndexOf(el => el.status === true) 
        let endObj = data[endIndex]
        let satrObj = data[stsrtIndex]
        let satrDate = new Date(endObj.createdAt);
        if(satrObj) {
        let startD = satrObj.date.split(".")
        let startT = satrObj.time.split(":")
        satrDate = new Date(startD[2],startD[0],startD[1],startT[0],startT[1])
        } 
        let now = new Date()
        let endD = endObj.date.split(".")
        let endT = endObj.time.split(":")
        let endDate = new Date(endD[2],endD[0],endD[1],endT[0],endT[1]) //yy dd mm tt
        let diff = Math.round(endDate - satrDate/ 1000); // разница в миллисекундах
        let nowLat =  Math.round((endDate-now) / 1000)
        let latitude = Math.floor((diff*100)/70)
        let timeout = latitude/100
        let prosent = Math.floor(nowLat*100/latitude)
        console.log(prosent, timeout);
    

    
        
})
}

export const timeoutFive = (id) => async (dispatch) => {
    await fetch(`http://localhost:3001/api/v1/contact/hygiene/${id}`, { credentials: "include" })
    .then(data => data.json())
    .then(data => {
        let endIndex = data.map(el => el= el.status).indexOf(false)
        let stsrtIndex = data.lastIndexOf(el => el.status === true) 
        let endObj = data[endIndex]
        let satrObj = data[stsrtIndex]
        let satrDate = new Date(endObj.createdAt);
        if(satrObj) {
        let startD = satrObj.date.split(".")
        let startT = satrObj.time.split(":")
        satrDate = new Date(startD[2],startD[0],startD[1],startT[0],startT[1])
        } 
        let now = new Date()
        let endD = endObj.date.split(".")
        let endT = endObj.time.split(":")
        let endDate = new Date(endD[2],endD[0],endD[1],endT[0],endT[1]) //yy dd mm tt
        let diff = Math.round(endDate - satrDate/ 1000); // разница в миллисекундах
        let nowLat =  Math.round((endDate-now) / 1000)
        let latitude = Math.floor((diff*100)/70)
        let timeout = latitude/100
        let prosent = Math.floor(nowLat*100/latitude)
        console.log(prosent, timeout);


    
        
})
}

export const timeoutSix = (id) => async (dispatch) => {
    await fetch(`http://localhost:3001/api/v1/contact/contact/${id}`, { credentials: "include" })
    .then(data => data.json())
    .then(data => {
        let endIndex = data.map(el => el= el.status).indexOf(false)
        let stsrtIndex = data.lastIndexOf(el => el.status === true) 
        let endObj = data[endIndex]
        let satrObj = data[stsrtIndex]
        let satrDate = new Date(endObj.createdAt);
        if(satrObj) {
        let startD = satrObj.date.split(".")
        let startT = satrObj.time.split(":")
        satrDate = new Date(startD[2],startD[0],startD[1],startT[0],startT[1])
        } 
        let now = new Date()
        let endD = endObj.date.split(".")
        let endT = endObj.time.split(":")
        let endDate = new Date(endD[2],endD[0],endD[1],endT[0],endT[1]) //yy dd mm tt
        let diff = Math.round(endDate - satrDate/ 1000); // разница в миллисекундах
        let nowLat =  Math.round((endDate-now) / 1000)
        let latitude = Math.floor((diff*100)/70)
        let timeout = latitude/100
        let prosent = Math.floor(nowLat*100/latitude)
        console.log(prosent, timeout);


        
})
}

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