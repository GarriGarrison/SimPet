import {SET_ANIMAL,ADD_ANIMAL, GET_ANIMAL, DELL_ANIMAL} from '../types/animal.types'

export const createAnimalOk = (animal) => ({ 
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



  export const getAnimal = (id_user) => async (dispatch) =>{
      console.log(id_user);
    await fetch(`http://localhost:3001/api/v1/animals/${id_user}`, {
      head: {credentials: 'include'},
     })
     .then(response => response.json())
     .then(animal => {
         console.log(animal);
       dispatch(getAnimalOk(animal))
     })



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


  export const createAnimal = (animal, navigate) => async (dispatch) =>{
   console.log(animal);
    const response = await fetch(`http://localhost:3001/api/v1/category/animals/${animal.id}`,{
      method:"PATCH",
       headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(animal)
    })
    if (response.ok){
      dispatch(createAnimalOk(animal))
      navigate(`/`)
    }

  }
