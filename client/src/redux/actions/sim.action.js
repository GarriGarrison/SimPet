import { GET_STATUS, ADD_STATUS, GET_MEDICAL, GET_FEED, GET_CONTACT, GET_CARE, GET_PARTY, GET_HYGEINE, ADD_HYGEINE, ADD_PARTY, ADD_FEED, ADD_MEDICAL, ADD_CONTACT, ADD_CARE} from '../types/sim.types'


export const getStatus = (color) => ({
    type: ADD_STATUS,
    payload: color
})

export const setStatus = (color, status) => ({
    type: GET_STATUS,
    payload: {color, status}
})



export const setMedical = (num) => async (dispatch) => {
    let color = 'green'
    if(num < 30) {color = '#ffcb11'}
    if(num < 10) {color = 'red'}

    dispatch(setStatus(color))

    dispatch({
        type: ADD_MEDICAL,
        payload: num
    })
}


export const setFeed = (num) => async (dispatch) => {
    let color = 'green'
    if(num < 30) {color = '#ffcb11'}
    if(num < 10) {color = 'red'}

    dispatch(setStatus(color))

    dispatch({
        type: ADD_FEED,
        payload: num
    })
}

export const setContact = (num) => async (dispatch) => {
    let color = 'green'
    if(num < 30) {color = '#ffcb11'}
    if(num < 10) {color = 'red'}

    dispatch(setStatus(color))

    dispatch({
        type: ADD_CONTACT,
        payload: num
    })
}

export const setCare = (num) => async (dispatch) => {
    let color = 'green'
    if(num < 30) {color = '#ffcb11'}
    if(num < 10) {color = 'red'}

    dispatch(setStatus(color))

    dispatch({
        type: ADD_CARE,
        payload: num
    })
}

export const setParty = (num) => async (dispatch) => {
    let color = 'green'
    if(num < 30) {color = '#ffcb11'}
    if(num < 10) {color = 'red'}

    dispatch(setStatus(color))

    dispatch({
        type: ADD_PARTY,
        payload: num
    })
}


export const setHygeine = (num) => async (dispatch) => {
    let color = 'green'
    if(num < 30) {color = '#ffcb11'}
    if(num < 10) {color = 'red'}

    dispatch(setStatus(color))

    dispatch({
        type: ADD_HYGEINE,
        payload: num
    })
}

export const timeoutMedical = (id) => async (dispatch) => {
   await fetch(`http://localhost:3001/api/v1/category/medical/${id}`, { credentials: "include" })
    .then(data => data.json())
    .then(data => {
        let endIndex = data.map(el => el= el.status).indexOf(false)
        let stsrtIndex = data.map(el => el= el.status).lastIndexOf(true) 
        let endObj = data[endIndex]
        let satrObj = data[stsrtIndex]
        let satrDate = new Date(endObj.crFEEDedAt);
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


    
        
        
        // dispatch(setMEDICAL(timeout))
    })
  

    


    }




export const timeoutFeed = (id) => async (dispatch) => {
    await fetch(`http://localhost:3001/api/v1/category/feed/${id}`, { credentials: "include" })
    .then(data => data.json())
    .then(data => {
        let endIndex = data.map(el => el= el.status).indexOf(false)
        let stsrtIndex = data.map(el => el= el.status).lastIndexOf(true) 
        let endObj = data[endIndex]
        let satrObj = data[stsrtIndex]
        console.log(endObj,satrObj);
        let satrDate = new Date(endObj.crFEEDedAt);
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

export const timeoutContact = (id) => async (dispatch) => {
    await fetch(`http://localhost:3001/api/v1/contact/party/${id}`, { credentials: "include" })
    .then(data => data.json())
    .then(data => {
        let endIndex = data.map(el => el= el.status).indexOf(false)
        let stsrtIndex = data.lastIndexOf(el => el.status === true) 
        let endObj = data[endIndex]
        let satrObj = data[stsrtIndex]
        let satrDate = new Date(endObj.crFEEDedAt);
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

export const timeoutCare = (id) => async (dispatch) => {
    await fetch(`http://localhost:3001/api/v1/contact/care/${id}`, { credentials: "include" })
    .then(data => data.json())
    .then(data => {
        let endIndex = data.map(el => el= el.status).indexOf(false)
        let stsrtIndex = data.lastIndexOf(el => el.status === true) 
        let endObj = data[endIndex]
        let satrObj = data[stsrtIndex]
        let satrDate = new Date(endObj.crFEEDedAt);
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

export const timeoutParty = (id) => async (dispatch) => {
    await fetch(`http://localhost:3001/api/v1/contact/hygiene/${id}`, { credentials: "include" })
    .then(data => data.json())
    .then(data => {
        let endIndex = data.map(el => el= el.status).indexOf(false)
        let stsrtIndex = data.lastIndexOf(el => el.status === true) 
        let endObj = data[endIndex]
        let satrObj = data[stsrtIndex]
        let satrDate = new Date(endObj.crFEEDedAt);
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

export const timeoutHygeine = (id) => async (dispatch) => {
    await fetch(`http://localhost:3001/api/v1/contact/contact/${id}`, { credentials: "include" })
    .then(data => data.json())
    .then(data => {
        let endIndex = data.map(el => el= el.status).indexOf(false)
        let stsrtIndex = data.lastIndexOf(el => el.status === true) 
        let endObj = data[endIndex]
        let satrObj = data[stsrtIndex]
        let satrDate = new Date(endObj.crFEEDedAt);
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
    type: ADD_MEDICAL,
    payload: 100
})

export const feedDone = ()=> ({
    type: ADD_FEED,
    payload: 100
})

export const contactDone = ()=> ({
    type: ADD_CONTACT,
    payload: 100
})

export const careDone = ()=> ({
    type: ADD_CARE,
    payload: 100
})

export const partyDone = ()=> ({
    type: ADD_PARTY,
    payload: 100
})

export const hygeineDone = ()=> ({
    type: ADD_HYGEINE,
    payload: 100
})