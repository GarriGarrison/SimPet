import {SET_ANIMAL,ADD_ANIMAL, GET_ANIMAL, DELL_ANIMAL, SWITCH_ACTIV, START_ANIMAL} from '../types/animal.types'

export const editAnimalOk = (animal) => ({ 
    type: SET_ANIMAL,
    payload: animal 
  })
  
  export const getAnimalOk = (animal) => ({
    type: GET_ANIMAL,
    payload: animal 
  })
  export const addAanimalOk = (animal) =>({
    type: ADD_ANIMAL,
    payload: animal
  })

  export const deleteAnimalOk = (id) => ({
    type: DELL_ANIMAL,
    payload: id
  })

  export const switchActivAnimal = (index) =>({
    type: SWITCH_ACTIV,
    payload: index
  })

export const startAnimal = (animal)=>({
  type: START_ANIMAL,
  payload: animal
})



  export const getAnimal = (id_user) => async (dispatch) =>{
      
    await fetch(`http://localhost:3001/api/v1/animals/${id_user}`, {
      head: {credentials: 'include'},
     })
     .then(response => response.json())
     .then(animal => {
       dispatch(getAnimalOk(animal))
       console.log(animal[0]);
       if(animal[0])dispatch(startAnimal(animal[0]))
       
      })
    //  .then(data => )
     



  }
  export const addAnimal = (animal) => async (dispatch)=>{
      console.log(animal);
   
    const response = await fetch('http://localhost:3001/api/v1/animals', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(animal)
    })
    if (response.ok) {
      const newAnimal = await response.json()
      console.log(newAnimal);
      dispatch(addAanimalOk(newAnimal))
      

    } else {
      alert('no')
    }
  
  }

  export const deleteAnimal = (id, navigate) => async (dispatch)=>{

    const response = await fetch(`http://localhost:3001/api/v1/category/animals/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });
    if (response.ok) {
      dispatch(deleteAnimalOk(id))
      navigate('/', { replace: true })
      alert('Пост удален!');
    }
  }


export const editAnimal = (animal) => async (dispatch) => {
  const formData = new FormData()

  for (let key in animal) {
    formData.append(key, animal[key])
  }

  const response = await fetch(`http://localhost:3001/api/v1/animals/${animal.id}`,{
    method: 'PATCH',
    credentials: 'include',
    body: formData,
  })

  if (response.ok) {
    dispatch(editAnimalOk(animal))
  }
}
